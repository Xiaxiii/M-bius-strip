import type { BriefingInfo, Pack, PackEvent, Session } from '../packs/types';
import type { Progress } from './replay';

/** 组装注入内容（CLAUDE.md 5.3）。buildInjection 是纯函数；写入 ST 的部分在 src/index.ts。 */

export const KEY_TOKEN = 'rlzc_token';
export const KEY_PROGRESS = 'rlzc_progress';
export const KEY_TURN = 'rlzc_turn';
export const ALL_KEYS = [KEY_TOKEN, KEY_PROGRESS, KEY_TURN] as const;

export interface Injection {
  token: string;
  progress: string;
  turn: string;
  /** 本轮注入的事件 id */
  injected: string[];
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

function eventLine(e: PackEvent, pack: Pack, roles: Record<string, string> | undefined): string {
  let text = fillRoles(e.text, pack, roles);
  if (e.to > e.from) text = `在本阶段第${e.from}到${e.to}轮之间发生：${text}`;
  if (e.if) text += `（条件：${fillRoles(e.if, pack, roles)}。若条件已不成立，此事件不发生，也不补写替代事件）`;
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
}

export function buildInjection(pack: Pack, progress: Progress | null, session: Session | null, opts: BuildOptions = {}): Injection {
  if (!progress || !session || progress.ended || session.status !== 'active') return EMPTY_INJECTION;
  const roles = opts.roles;
  const hasPhases = pack.phases.length > 0;
  const next = progress.next!;

  // ── 进度块 ──
  const head: string[] = [`副本：${pack.name}（${pack.level}级）`];
  if (hasPhases) {
    head.push(`阶段：${progress.phase.name}`);
    head.push(`本轮：第${progress.nextRound}/${progress.phase.cap}轮`);
  } else {
    head.push(`本轮：第${progress.nextRound}轮`);
  }
  if (progress.clock) head.push(`钟时：${progress.clock}`);
  if (progress.remainingText) head.push(progress.remainingText);
  else {
    const limit = opts.panelLimit || opts.briefing?.limit;
    if (limit) head.push(`时限：${limit}`);
  }
  const progressLines = ['［副本进度·仅供AI］', head.join('　')];
  if (!hasPhases && opts.briefing?.goal) progressLines.push(`目标：${opts.briefing.goal}`);
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
  const events = next.events.filter((e) => e.kind === 'event');
  const directives = next.events.filter((e) => e.kind === 'directive');
  if (events.length) {
    turn.push('本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）：');
    events.forEach((e) => turn.push(eventLine(e, pack, roles)));
  }
  if (directives.length) {
    turn.push('本轮写作要求：');
    directives.forEach((e) => turn.push(eventLine(e, pack, roles)));
  }
  if (progress.isLastRound) turn.push(phaseEndLine(progress));
  else if (progress.overdue) turn.push(`「${progress.phase.name}」已到时限，请按副本规则在本轮完成结算。`);

  if (pack.roles?.length && !pack.roles.some((r) => roles?.[r])) {
    let ask = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${pack.roles.map((r) => `${r}=姓名`).join('｜')}</角色登记>。按世界书规定生成NPC。`;
    if (pack.roles.includes('死者')) ask += '死者不得是{{user}}或其同伴。';
    turn.push(ask);
  }

  return {
    token: pack.token,
    progress: progressLines.join('\n'),
    turn: turn.length ? ['［本轮指令·仅供AI］', ...turn].join('\n') : '',
    injected: next.events.map((e) => e.id),
  };
}
