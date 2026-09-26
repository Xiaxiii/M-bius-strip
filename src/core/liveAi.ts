/**
 * 直播的 AI 弹幕与注入（第三期b-第4段），全部是纯函数。
 * AI 弹幕是一次独立调用：只读玩家看得到的正文，绝不带入事件表、隐藏状态、副本包资料和事件检测结果。
 */
import { SubFormatError, type SubMessages } from './subapi';
import type { FeedItem, LiveView } from './liveFlow';
import type { PoolItem } from './live';

/** 风格说明（照用） */
export const DANMAKU_STYLE =
  '你在写回廊直播间的观众弹幕。观众是回廊里的其他玩家，只看得到直播画面。什么人都有：夸赞、祝福、讨论、泼冷水、嫉妒、抹黑、造谣，正面的稍多。每条30字以内，口语，称{{user}}为主播，不用性别代词。只能根据画面里已经发生的事说话，不猜测、不透露画面外的信息。';

export const DANMAKU_TYPES = ['praise', 'bless', 'discuss', 'cold', 'envy', 'smear', 'rumor'] as const;

export interface AiDanmaku {
  type: string;
  name: string;
  text: string;
}

// ───────────── 生成时机 ─────────────

export interface AiTimingInput {
  /** 弹幕来源选了「本地+AI」 */
  aiSource: boolean;
  /** 副本事件检测卡的来源不是「关闭」 */
  subOn: boolean;
  /** 本场第几轮（从1开始） */
  roundInShow: number;
  /** 每 N 轮一次（1–10） */
  freq: number;
  /** 本轮阶段切换 */
  phaseSwitch: boolean;
  /** 本轮有人受伤或死亡 */
  hurt: boolean;
  /** 本轮注入的后台事件被判定为已发生 */
  eventDone: boolean;
}

/** 每 N 轮一次，另外在关键事件那轮加一次；同一轮最多一次（本函数每轮只调用一次，返回真假即一次） */
export function shouldGenAiDanmaku(i: AiTimingInput): boolean {
  if (!i.aiSource || !i.subOn) return false;
  const freq = Math.max(1, Math.min(10, Math.floor(i.freq) || 3));
  if (i.roundInShow > 0 && i.roundInShow % freq === 0) return true;
  return i.phaseSwitch || i.hurt || i.eventDone;
}

// ───────────── 请求 ─────────────

/** 去掉 <副本>、<状态栏> 与所有机器标签（连同内容），剩下的尖括号标记只去掉标记 */
export function stripForAudience(text: string): string {
  return String(text ?? '')
    .replace(/<(副本|状态栏|阶段切换|副本结算|角色登记|积分变动|直播|thinking|think)>[\s\S]*?<\/\1>/g, '')
    .replace(/<\/?[A-Za-z一-龥][^<>]*>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** 从弹幕池随机抽 n 条作语气示例 */
export function pickSamples(pool: PoolItem[], n: number, rand: () => number): string[] {
  const list = pool.map((p) => p.text);
  const out: string[] = [];
  const used = new Set<number>();
  for (let k = 0; k < n * 10 && out.length < Math.min(n, list.length); k++) {
    const i = Math.floor(rand() * list.length);
    if (used.has(i)) continue;
    used.add(i);
    out.push(list[i]);
  }
  return out;
}

export interface DanmakuPromptInput {
  /** 副本名；回廊中写「回廊」 */
  scene: string;
  /** 最近两轮AI正文（原文，函数内部去掉面板与机器标签），旧的在前 */
  texts: string[];
  /** 在场知道名字的角色名 */
  cast: string[];
  /** 语气示例 */
  samples: string[];
}

export function buildDanmakuPrompt(inp: DanmakuPromptInput): SubMessages {
  const system = [
    DANMAKU_STYLE,
    '只输出一个 JSON 数组，8–12条，不要任何解释，格式：',
    '[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]',
  ].join('\n');
  const user = [
    `【直播间】${inp.scene}`,
    `【在场角色】${inp.cast.length ? inp.cast.join('、') : '（无）'}`,
    `【最近两轮画面】\n${inp.texts.map((t) => stripForAudience(t)).filter(Boolean).join('\n\n') || '（无）'}`,
    `【语气示例】\n${inp.samples.map((s) => `- ${s}`).join('\n')}`,
  ].join('\n\n');
  return { system, user };
}

// ───────────── 解析 ─────────────

/** 解析方式同事件检测：去掉 ``` 标记，取出 JSON 数组；不合格抛 SubFormatError */
export function parseDanmakuResponse(raw: string): AiDanmaku[] {
  let text = String(raw ?? '').trim();
  const fence = /```(?:json)?\s*([\s\S]*?)```/i.exec(text);
  if (fence) text = fence[1].trim();
  const start = text.indexOf('[');
  const end = text.lastIndexOf(']');
  if (start < 0 || end <= start) throw new SubFormatError('返回里没有 JSON 数组');
  let data: unknown;
  try {
    data = JSON.parse(text.slice(start, end + 1));
  } catch {
    throw new SubFormatError('返回的 JSON 无法解析');
  }
  if (!Array.isArray(data)) throw new SubFormatError('返回的不是 JSON 数组');
  const out = data
    .filter((d: any) => d && typeof d.text === 'string' && d.text.trim())
    .map((d: any) => ({
      type: (DANMAKU_TYPES as readonly string[]).includes(d.type) ? d.type : 'discuss',
      name: typeof d.name === 'string' && d.name.trim() ? d.name.trim().slice(0, 16) : '匿名',
      text: d.text.trim(),
    }))
    .slice(0, 12);
  if (!out.length) throw new SubFormatError('返回的弹幕为空');
  return out;
}

/** 失败重试1次；仍失败抛出最后一个错误 */
export async function callDanmakuWithRetry(call: (m: SubMessages) => Promise<string>, m: SubMessages, retries = 1): Promise<AiDanmaku[]> {
  let last: unknown;
  for (let k = 0; k <= retries; k++) {
    try {
      return parseDanmakuResponse(await call(m));
    } catch (e) {
      last = e;
    }
  }
  throw last;
}

// ───────────── rlzc_live 注入 ─────────────

function feedLine(f: FeedItem): string {
  return f.t === 'tip' ? `${f.name} 打赏${f.amount}` : `${f.name}：${f.text}`;
}

/** ［直播·仅供AI］…：取最近5条（含打赏行）；没在播时为空 */
export function formatLiveInjection(view: LiveView, n = 5): string {
  if (!view.on) return '';
  const recent = view.feed.filter((f) => f.t === 'msg' || f.t === 'tip').slice(-n);
  const head = `［直播·仅供AI］{{user}}正在直播，约${view.viewers}人在看。`;
  return recent.length ? `${head}最近弹幕：${recent.map(feedLine).join('／')}` : head;
}
