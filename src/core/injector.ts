import type { BriefingInfo, Pack, PackEvent, Session } from '../packs/types';
import type { Progress } from './replay';

/** 组装注入内容（CLAUDE.md 5.3）。buildInjection 是纯函数；写入 ST 的部分在 src/index.ts。 */

export const KEY_TOKEN = 'rlzc_token';
export const KEY_PROGRESS = 'rlzc_progress';
export const KEY_TURN = 'rlzc_turn';
/** 副API整理出的隐藏状态（深度同 rlzc_progress，CLAUDE.md 14） */
export const KEY_STATE = 'rlzc_state';
/** 积分账本注入（第三期，回廊和副本内都注入） */
export const KEY_LEDGER = 'rlzc_ledger';
export const ALL_KEYS = [KEY_TOKEN, KEY_PROGRESS, KEY_TURN, KEY_STATE, KEY_LEDGER] as const;

export interface Injection {
  token: string;
  progress: string;
  turn: string;
  /** 本轮注入的事件 id */
  injected: string[];
  /** 本轮注入的时限（写进快照，用于核对） */
  limit?: InjectedLimit;
  /** 副API预判「条件不成立」而没有注入的事件 */
  skipped?: { id: string; reason: string }[];
  /** rlzc_state：当前隐藏状态 */
  state?: string;
}

/** 快照里记录的本楼注入时限 */
export interface InjectedLimit {
  text: string;
  /** 约剩分钟（仅倒计时） */
  minutes?: number;
  /** 总时长分钟（仅倒计时） */
  total?: number;
}

export const EMPTY_INJECTION: Injection = { token: '', progress: '', turn: '', injected: [] };

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** 把 {角色位} 替换为登记的姓名；未登记时保留角色位名称原样。{{user}} 等 ST 宏不受影响。 */
export function fillRoles(text: string, pack: Pack, roles: Record<string, string> | undefined): string {
  const list = pack.roles ?? [];
  if (!list.length) return text;
  const re = new RegExp(`(?<!\\{)\\{(${list.map(escapeRe).join('|')})\\}(?!\\})`, 'g');
  return text.replace(re, (_m, role: string) => roles?.[role]?.trim() || role);
}

/** 把事件 id 列表压缩成 E01–E10、E12 这样的区间（按包内顺序判断连续） */
export function summarizeEvents(pack: Pack, ids: string[]): string {
  if (!ids.length) return '';
  const order = pack.events.map((e) => e.id);
  const idx = ids.map((id) => order.indexOf(id)).filter((i) => i >= 0).sort((a, b) => a - b);
  const parts: string[] = [];
  let start = idx[0];
  let prev = idx[0];
  const flush = () => parts.push(start === prev ? order[start] : `${order[start]}–${order[prev]}`);
  for (let k = 1; k < idx.length; k++) {
    if (idx[k] === prev + 1) { prev = idx[k]; continue; }
    flush();
    start = prev = idx[k];
  }
  flush();
  return parts.join('、');
}

/** prejudged：副API已判定条件成立，不再把条件交给主AI */
function eventLine(e: PackEvent, pack: Pack, roles: Record<string, string> | undefined, prejudged = false): string {
  let text = fillRoles(e.text, pack, roles);
  if (e.to > e.from) text = `在本阶段第${e.from}到${e.to}轮之间发生：${text}`;
  if (e.if && !prejudged) text += `（条件：${fillRoles(e.if, pack, roles)}。若条件已不成立，此事件不发生，也不补写替代事件）`;
  return `- ${e.id}：${text}`;
}

function phaseEndLine(progress: Progress): string {
  const p = progress.phase;
  if (p.clock && !p.night) return '本阶段在本轮结束：请在本轮结尾自然写出日落。';
  if (p.night) return '本阶段在本轮结束：请在本轮结尾自然写出日出。';
  return `本阶段在本轮结束：请在本轮结尾自然收束「${p.name}」。`;
}

export interface BuildOptions {
  roles?: Record<string, string>;
  briefing?: BriefingInfo;
  /** `<副本>` 面板里的时限（没有 nights 计算时显示） */
  panelLimit?: string;
  /** `<副本>` 核对结果（见 core/audit.ts） */
  audit?: { missingLast: boolean; hasPanel: boolean };
  /** 副API对本轮带条件事件的预判（上一条AI消息的 sub.next）；没有时条件原文交给主AI */
  subNext?: { id: string; ok: boolean; reason: string }[];
  /** rlzc_state 的内容（已格式化） */
  stateText?: string;
}

export function buildInjection(pack: Pack, progress: Progress | null, session: Session | null, opts: BuildOptions = {}): Injection {
  // 休整副本（rest: true）：只注入暗号，不生成进度和指令块
  if (pack.rest && session?.status === 'active') {
    return { ...EMPTY_INJECTION, token: pack.token };
  }
  if (!progress || !session || progress.ended || session.status !== 'active') return EMPTY_INJECTION;
  const roles = opts.roles;
  const hasPhases = pack.phases.length > 0;
  const next = progress.next!;

  // ── 进度块 ──
  const head: string[] = [`副本：${pack.name}（${pack.level}级）`];
  const limit = progress.limit;
  if (hasPhases) {
    head.push(`阶段：${progress.phase.name}`);
    // 轮次写「当前阶段轮次/当前阶段上限」（污名 <直播> 面板照抄）
    head.push(`本轮：第${progress.nextRound}/${progress.phase.cap}轮`);
    if (limit) head.push(`剩余${limit.x}/${limit.y}轮`);
    if (progress.clock) head.push(`钟时：${progress.clock}`);
    if (limit?.text) head.push(`时限：${limit.text}`);
    // 倒计时包的「剩余M分钟」= 约剩分钟（污名 <直播> 面板照抄）
    if (pack.remaining.type === 'countdown' && progress.remainingText) head.push(progress.remainingText);
    if (limit?.deadline && !limit.text?.includes(limit.deadline)) head.push(`截止：${limit.deadline}`);
  } else {
    head.push(`本轮：第${progress.nextRound}轮`);
    if (progress.clock) head.push(`钟时：${progress.clock}`);
    const panelLimit = opts.panelLimit || opts.briefing?.limit;
    if (panelLimit) head.push(`时限：${panelLimit}`);
  }
  const progressLines = ['［副本进度·仅供AI］', head.join('　')];
  // 简报的「目标」行可有可无（CLAUDE.md 11.8），读到才写
  if (opts.briefing?.goal && (!hasPhases || pack.id === 'generic')) progressLines.push(`目标：${opts.briefing.goal}`);
  if (pack.roles?.length) {
    const registered = pack.roles.filter((r) => roles?.[r]);
    progressLines.push(
      registered.length
        ? `角色登记：${pack.roles.map((r) => `${r}=${roles?.[r] || '未登记'}`).join('｜')}`
        : '角色登记：尚未登记',
    );
  }
  const summary = summarizeEvents(pack, progress.firedEvents);
  if (summary) progressLines.push(`已发生事件：${summary}`);

  // ── 本轮指令块 ──
  const turn: string[] = [];
  if (next.skipFrom !== undefined) {
    turn.push(`玩家选择快进：本轮从「${progress.phase.name}」第${next.skipFrom}轮快进到第${next.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  }
  // 副API预判条件不成立的事件：本轮不注入，记下来给调试页
  const verdict = new Map((opts.subNext ?? []).map((n) => [n.id, n]));
  const skipped = next.events.filter((e) => e.if && verdict.get(e.id)?.ok === false).map((e) => ({ id: e.id, reason: verdict.get(e.id)!.reason }));
  const planned = next.events.filter((e) => !skipped.some((s) => s.id === e.id));
  const prejudged = (e: PackEvent) => !!e.if && verdict.get(e.id)?.ok === true;
  const events = planned.filter((e) => e.kind === 'event');
  const directives = planned.filter((e) => e.kind === 'directive');
  if (events.length) {
    turn.push('本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）：');
    events.forEach((e) => turn.push(eventLine(e, pack, roles, prejudged(e))));
  }
  if (directives.length) {
    turn.push('本轮写作要求：');
    directives.forEach((e) => turn.push(eventLine(e, pack, roles, prejudged(e))));
  }
  if (progress.isLastRound) turn.push(phaseEndLine(progress));
  else if (progress.overdue) turn.push(`「${progress.phase.name}」已到时限，请按副本规则在本轮完成结算。`);

  // ── <副本> 面板核对 ──
  if (opts.audit?.missingLast) turn.push('上一轮缺少<副本>面板，本轮必须完整输出。');
  if (opts.audit && !opts.audit.hasPanel) turn.push('本轮<副本>的进度条写0。');

  if (pack.roles?.length && !pack.roles.some((r) => roles?.[r])) {
    let ask = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${pack.roles.map((r) => `${r}=姓名`).join('｜')}</角色登记>。按世界书规定生成NPC。`;
    if (pack.roles.includes('死者')) ask += '死者不得是{{user}}或其同伴。';
    turn.push(ask);
  }

  // ── 时限（末尾一行，CLAUDE.md 12.3）──
  let injectedLimit: InjectedLimit | undefined;
  if (limit?.text) {
    if (limit.minutes !== undefined) {
      turn.push(
        `本轮<副本>的时限一栏写：${limit.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`,
      );
      injectedLimit = { text: limit.text, minutes: limit.minutes, total: limit.total };
    } else {
      turn.push(`本轮<副本>的时限一栏写：${limit.text}（照抄）。`);
      injectedLimit = { text: limit.text };
    }
  }

  return {
    token: pack.token,
    progress: progressLines.join('\n'),
    turn: turn.length ? ['［本轮指令·仅供AI］', ...turn].join('\n') : '',
    injected: planned.map((e) => e.id),
    limit: injectedLimit,
    skipped: skipped.length ? skipped : undefined,
    state: opts.stateText || undefined,
  };
}
