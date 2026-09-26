/**
 * 副API「记录员」的纯逻辑（CLAUDE.md 14）：组装提示词、解析返回、判断是否调用、重试、失败原因分类、
 * 从聊天记录取当前隐藏状态。发请求的部分在 src/st/subTransport.ts，流程编排在 src/app.ts。
 */
import type { ChatMessage, Pack, PackEvent, StateField } from '../packs/types';
import { HIDDEN_TAGS } from './hideTags';
import { isCountable } from './replay';

export type SubEventStatus = 'done' | 'missed' | 'void';

export interface SubEventCheck {
  id: string;
  status: SubEventStatus;
  reason: string;
}

export interface SubNextCheck {
  id: string;
  ok: boolean;
  reason: string;
}

/** 副API一次调用的结果（已解析、已校验） */
export interface SubResult {
  events: SubEventCheck[];
  state: Record<string, unknown>;
  next: SubNextCheck[];
  /** 直播精彩度：0–100 整数（不注入主AI；缺少不算失败） */
  hype?: number;
  /** 本轮正文是否有人受伤或死亡（不注入主AI；缺少不算失败） */
  hurt?: boolean;
  /** 黑市盘口的判定：盘口 id（judgeNo 为 id:no）→ 本轮正文是否明确写到（缺少不算失败，这一轮对盘口算没检测） */
  markets?: Record<string, boolean>;
}

/** 存进 chat[i].extra.rlzc.sub 的记录 */
export interface SubRecord extends Partial<SubResult> {
  /** 耗时（毫秒） */
  ms?: number;
  /** 用的哪个来源 / 预设 */
  via?: string;
  at?: string;
  /** 玩家选了「这轮先跳过」或失败后未等待：这一轮状态未更新，沿用上一轮 */
  skipped?: boolean;
  error?: string;
}

/** 没有 stateFields 的副本：只维护一个不超过150字的 summary */
export const SUMMARY_FIELD: StateField = { key: 'summary', label: '概况', hint: '本副本目前的整体情况，不超过150字' };

export function stateFieldsOf(pack: Pack): StateField[] {
  return pack.stateFields?.length ? pack.stateFields : [SUMMARY_FIELD];
}

// ───────────── 输入 ─────────────

const PANEL_TAGS = [...HIDDEN_TAGS, '状态栏'];
const PANEL_RE = new RegExp(`<(${PANEL_TAGS.join('|')})>[\\s\\S]*?<\\/\\1>`, 'g');

/** 去掉 <副本>、<状态栏> 等面板与机器标签，只留纯正文 */
export function stripPanels(text: string): string {
  return String(text ?? '').replace(PANEL_RE, '').replace(/\n{3,}/g, '\n\n').trim();
}

export interface SubInput {
  pack: Pack;
  phaseName: string;
  round: number;
  prevState: Record<string, unknown> | null;
  /** 本轮注入的事件（占位符已替换） */
  events: PackEvent[];
  /** 下一轮将注入、且带条件的事件（占位符已替换） */
  nextConditional: PackEvent[];
  /** 本条AI正文（原文，函数内部会去掉面板） */
  text: string;
  /** 黑市：还没开奖的事件盘、怪盘的判定陈述（judgeNo 另列一条，id 后加 :no）；没有时提示词不变 */
  markets?: { id: string; judge: string }[];
}

export interface SubMessages {
  system: string;
  user: string;
}

export function buildSubPrompt(input: SubInput): SubMessages {
  const fields = stateFieldsOf(input.pack);
  const markets = input.markets ?? [];
  const system = [
    '你是角色扮演副本的记录员，不写剧情，只整理事实。',
    '根据本轮正文完成三件事：',
    '1. 事件核对：逐条判断「本轮后台事件」在正文里是 done（已发生）、missed（该发生但没写出来）还是 void（条件已不成立，不该发生），各附一句理由。后台事件即使{{user}}看不到，只要正文与之不矛盾、且没有写出相反的事实，就算 done。标明「第X到Y轮之间」的事件不一定在本轮写出：本轮没写到、也没写出相反的事实，同样算 done。',
    '2. 隐藏状态：在「上一轮状态」的基础上更新下列字段，只依据正文里已经发生的事实，没有变化就照抄上一轮：',
    ...fields.map((f) => `   - ${f.key}（${f.label}）：${f.hint}`),
    '3. 条件预判：逐条判断「下一轮事件」的条件现在是否仍成立（ok 为 true/false），附一句理由。',
    '4. hype：0–100 整数，按本轮正文的紧张、冲突、转折打分；hurt：true/false，本轮正文是否有人受伤或死亡。这两项只写数字和真假，不写理由。',
    ...(markets.length ? ['5. markets：逐条判断「盘口陈述」，只有本轮正文明确写到才填 true，否则填 false，不写理由。'] : []),
    '只输出一个 JSON 对象，不要任何解释，格式：',
    markets.length
      ? `{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}],"hype":50,"hurt":false,"markets":{${markets.map((m) => `"${m.id}":false`).join(',')}}}`
      : '{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}],"hype":50,"hurt":false}',
    '没有本轮事件时 events 为 []；没有下一轮事件时 next 为 []。',
  ].join('\n');

  const range = (e: PackEvent) => (e.to > e.from ? `（本阶段第${e.from}到${e.to}轮之间）` : '');
  const eventLines = input.events.length
    ? input.events.map((e) => `- ${e.id}${range(e)}：${e.text}${e.if ? `（条件：${e.if}）` : ''}`).join('\n')
    : '（无）';
  const nextLines = input.nextConditional.length
    ? input.nextConditional.map((e) => `- ${e.id}：${e.text}（条件：${e.if}）`).join('\n')
    : '（无）';
  const user = [
    `【副本】${input.pack.name}　阶段：${input.phaseName}　第${input.round}轮`,
    `【上一轮状态】${input.prevState ? JSON.stringify(input.prevState) : '（尚无，请根据正文建立）'}`,
    `【本轮后台事件】\n${eventLines}`,
    `【下一轮事件】\n${nextLines}`,
    ...(markets.length ? [`【盘口陈述】\n${markets.map((m) => `- ${m.id}：${m.judge}`).join('\n')}`] : []),
    `【本轮正文】\n${stripPanels(input.text)}`,
  ].join('\n\n');
  return { system, user };
}

/**
 * 本轮要核对的事件：只核对注入过的后台事件（kind = event）。
 * 「本轮写作要求」（directive，如「本日须呈现至少两条破绽」）管的是一整段剧情，单看一轮无从判断，不送去核对。
 */
export function subEventsToCheck(pack: Pack, injectedIds: string[]): PackEvent[] {
  const ids = new Set(injectedIds);
  return pack.events.filter((e) => ids.has(e.id) && e.kind !== 'directive');
}

// ───────────── 输出 ─────────────

export class SubFormatError extends Error {}

/** 去掉 ``` 代码块标记，取出第一个 JSON 对象并校验结构；不合格抛 SubFormatError */
export function parseSubResponse(raw: string): SubResult {
  let text = String(raw ?? '').trim();
  const fence = /```(?:json)?\s*([\s\S]*?)```/i.exec(text);
  if (fence) text = fence[1].trim();
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start < 0 || end <= start) throw new SubFormatError('返回里没有 JSON');
  let data: any;
  try {
    data = JSON.parse(text.slice(start, end + 1));
  } catch {
    throw new SubFormatError('返回的 JSON 无法解析');
  }
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new SubFormatError('返回的不是 JSON 对象');
  if (!data.state || typeof data.state !== 'object' || Array.isArray(data.state)) throw new SubFormatError('缺少 state');
  const statuses: SubEventStatus[] = ['done', 'missed', 'void'];
  const events: SubEventCheck[] = (Array.isArray(data.events) ? data.events : [])
    .filter((e: any) => e && typeof e.id === 'string' && statuses.includes(e.status))
    .map((e: any) => ({ id: e.id, status: e.status, reason: String(e.reason ?? '') }));
  const next: SubNextCheck[] = (Array.isArray(data.next) ? data.next : [])
    .filter((n: any) => n && typeof n.id === 'string' && typeof n.ok === 'boolean')
    .map((n: any) => ({ id: n.id, ok: n.ok, reason: String(n.reason ?? '') }));
  const result: SubResult = { events, state: data.state, next };
  const hype = typeof data.hype === 'number' ? data.hype : typeof data.hype === 'string' && data.hype.trim() !== '' ? Number(data.hype) : NaN;
  if (Number.isFinite(hype)) result.hype = Math.max(0, Math.min(100, Math.round(hype)));
  if (typeof data.hurt === 'boolean') result.hurt = data.hurt;
  else if (data.hurt === 'true' || data.hurt === 'false') result.hurt = data.hurt === 'true';
  if (data.markets && typeof data.markets === 'object' && !Array.isArray(data.markets)) {
    const m: Record<string, boolean> = {};
    for (const [k, v] of Object.entries(data.markets)) {
      if (typeof v === 'boolean') m[k] = v;
      else if (v === 'true' || v === 'false') m[k] = v === 'true';
    }
    result.markets = m;
  }
  return result;
}

// ───────────── 同一次生成只检测一次 ─────────────

function hashText(t: string): string {
  let h = 0;
  for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) | 0;
  return `${t.length}.${h}`;
}

/**
 * 这一楼「这一次生成」的标识：聊天 + 楼层 + ST 记录的生成时间 + 正文。
 * 重新生成、滑动出的新回复即使文字完全相同（温度为0的模型可能出现）也是新的一次，要重新检测；
 * 正文被编辑、续写后标识也会变，检测结果就不再写回这一楼。
 */
export function generationKey(chatId: string, index: number, msg: ChatMessage | undefined): string {
  const stamp = [msg?.send_date, msg?.gen_started, msg?.gen_finished].map((v) => String(v ?? '')).join('|');
  return `${chatId}:${index}:${stamp}:${hashText(String(msg?.mes ?? ''))}`;
}

// ───────────── 调用与重试 ─────────────

export interface ShouldCallInput {
  enabled: boolean;
  /** 有进行中的副本 */
  active: boolean;
  /** MESSAGE_RECEIVED 的类型；continue、first_message 不调用 */
  type?: string;
  saveMode: boolean;
  hasEvents: boolean;
  hasNextConditional: boolean;
}

/**
 * first_message：ST 打开只有开场白的聊天时会对开场白补发一次 MESSAGE_RECEIVED，开场白不是新生成的回复。
 */
export function shouldCallSub(i: ShouldCallInput): boolean {
  if (!i.enabled || !i.active || i.type === 'continue' || i.type === 'first_message') return false;
  if (i.saveMode && !i.hasEvents && !i.hasNextConditional) return false;
  return true;
}

/** 调一次并解析；失败（网络、超时、格式）自动重试 retries 次，仍失败抛出最后一个错误 */
export async function callWithRetry(
  call: (m: SubMessages) => Promise<string>,
  messages: SubMessages,
  retries = 2,
): Promise<SubResult> {
  let last: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return parseSubResponse(await call(messages));
    } catch (e) {
      last = e;
    }
  }
  throw last;
}

export class SubTimeoutError extends Error {}

export type SubFailure = '超时' | '密钥无效' | '额度不足' | '返回格式不对' | '其他';

/** 尽量从报错里区分失败原因 */
export function classifyError(e: unknown): SubFailure {
  if (e instanceof SubTimeoutError) return '超时';
  if (e instanceof SubFormatError) return '返回格式不对';
  const msg = `${(e as any)?.message ?? ''} ${(e as any)?.cause?.message ?? ''} ${String((e as any)?.status ?? '')}`.toLowerCase();
  if (/abort|timeout|timed out|超时/.test(msg)) return '超时';
  if (/quota|insufficient|balance|429|too many|额度|余额/.test(msg)) return '额度不足';
  if (/401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(msg)) return '密钥无效';
  return '其他';
}

// ───────────── 结果的使用 ─────────────

function snapOf(m: ChatMessage | undefined) {
  return m?.extra?.rlzc;
}

/** 当前隐藏状态 = 从入场起、最近一条带 sub 状态的AI消息里的 state（跳过的轮不算） */
export function latestSubState(
  chat: ChatMessage[],
  entryIndex: number,
): { index: number; state: Record<string, unknown> } | null {
  for (let i = chat.length - 1; i >= entryIndex && i >= 0; i--) {
    const m = chat[i];
    if (!isCountable(m)) continue;
    const sub = snapOf(m)?.sub;
    if (sub?.state && !sub.skipped) return { index: i, state: sub.state };
  }
  return null;
}

/** 上一条AI消息对下一轮带条件事件的预判；上一条没有预判（副API关闭、失败、跳过）时为 undefined */
export function lastNextChecks(chat: ChatMessage[], entryIndex: number): SubNextCheck[] | undefined {
  for (let i = chat.length - 1; i >= entryIndex && i >= 0; i--) {
    const m = chat[i];
    if (!isCountable(m)) continue;
    const sub = snapOf(m)?.sub;
    return sub && !sub.skipped && Array.isArray(sub.next) ? sub.next : undefined;
  }
  return undefined;
}

function valueText(v: unknown): string {
  if (Array.isArray(v)) return v.length ? v.map((x) => valueText(x)).join('、') : '无';
  if (v && typeof v === 'object') return Object.entries(v).map(([k, x]) => `${k}：${valueText(x)}`).join('；');
  if (v === null || v === undefined || v === '') return '未知';
  return String(v);
}

/** rlzc_state 注入内容 */
export function formatState(pack: Pack, state: Record<string, unknown>): string {
  const fields = stateFieldsOf(pack);
  const known = new Set(fields.map((f) => f.key));
  const lines = fields.filter((f) => state[f.key] !== undefined).map((f) => `${f.label}：${valueText(state[f.key])}`);
  for (const [k, v] of Object.entries(state)) if (!known.has(k)) lines.push(`${k}：${valueText(v)}`);
  return lines.length ? ['［副本状态·仅供AI］', ...lines].join('\n') : '';
}
