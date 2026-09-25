import type { Level, Pack, Phase } from '../packs/types';

/**
 * 时限与轮数的计算（CLAUDE.md 第12节）。全部是纯函数，由 replay 在重放时逐轮调用。
 */

// ───────────── 时长的读写 ─────────────

/** 满60分钟写「H小时M分」，整小时写「H小时」，不满60分钟写「M分钟」 */
export function formatMinutes(total: number): string {
  const m = Math.max(0, Math.round(total));
  if (m < 60) return `${m}分钟`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  return r ? `${h}小时${r}分` : `${h}小时`;
}

const UNIT_RE = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;

/** 读出一段文字里的时长（分钟）：可含「N天」「N小时」「N分」「N分钟」，累加；读不到返回 null */
export function parseDurationMinutes(text: string | undefined): number | null {
  if (!text) return null;
  let total = 0;
  let found = false;
  for (const m of text.matchAll(UNIT_RE)) {
    const n = Number(m[1]);
    const unit = m[2];
    found = true;
    if (unit === '天') total += n * 1440;
    else if (unit === '小时' || unit === '个小时' || unit === 'h' || unit === 'H') total += n * 60;
    else total += n;
  }
  return found ? Math.round(total) : null;
}

/** 读「剩余时间/总时长」（如「约剩7小时48分/8小时」）；没有斜杠时整段当作剩余时间 */
export function parseLimitPair(text: string | undefined): { remaining: number | null; total: number | null } {
  if (!text) return { remaining: null, total: null };
  const [left, right] = text.split(/[/／]/);
  return { remaining: parseDurationMinutes(left), total: right === undefined ? null : parseDurationMinutes(right) };
}

// ───────────── 阶段链 ─────────────

function findPhase(pack: Pack, id: string | null | undefined): Phase | undefined {
  return pack.phases.find((p) => p.id === id);
}

/** 从 start 沿 next 走到 null（遇到环即停） */
export function phaseChain(pack: Pack, start: Phase): Phase[] {
  const out: Phase[] = [];
  const seen = new Set<string>();
  let cur: Phase | undefined = start;
  while (cur && !seen.has(cur.id)) {
    out.push(cur);
    seen.add(cur.id);
    cur = findPhase(pack, cur.next);
  }
  return out;
}

/** 尚未结束的夜晚阶段数（当前阶段是夜晚也算） */
export function remainingNights(pack: Pack, phase: Phase): number {
  return phaseChain(pack, phase).filter((p) => p.night).length;
}

/**
 * 进入 next 阶段后的链起点：next 仍在当前链上（正常推进、提前切换）→ 起点不变；
 * 否则（如钟楼命案后进入调查）→ 包的第一个阶段能走到它就用第一个阶段，走不到就以它自己为起点。
 */
export function nextChainStart(pack: Pack, chainStart: Phase, next: Phase): Phase {
  if (phaseChain(pack, chainStart).some((p) => p.id === next.id)) return chainStart;
  const first = pack.phases[0];
  if (first && phaseChain(pack, first).some((p) => p.id === next.id)) return first;
  return next;
}

// ───────────── 本轮时限 ─────────────

export interface LimitInfo {
  /** 剩余轮数（含即将生成这一轮之后的所有轮） */
  x: number;
  /** 总轮数：链上从起点开始所有阶段 cap 之和 */
  y: number;
  /** 截止条件 */
  deadline?: string;
  /** <副本> 时限一栏应写的文字；没有时不注入 */
  text?: string;
  /** 约剩分钟（仅 countdown） */
  minutes?: number;
  /** 总时长分钟（仅 countdown） */
  total?: number;
}

/**
 * 即将生成的这一轮（当前阶段第 round 轮）的时限。
 * prevLimit：上一条AI消息 <副本> 时限一栏的原文，用于“只减不增”。
 * 包里没有阶段表时返回 undefined。
 */
export function computeLimit(
  pack: Pack,
  phase: Phase,
  chainStart: Phase,
  round: number,
  prevLimit?: string,
): LimitInfo | undefined {
  if (!pack.phases.length || !pack.phases.some((p) => p.id === phase.id)) return undefined;
  let chain = phaseChain(pack, chainStart);
  let pos = chain.findIndex((p) => p.id === phase.id);
  if (pos < 0) {
    chain = phaseChain(pack, phase);
    pos = 0;
  }
  const y = chain.reduce((s, p) => s + Math.max(0, p.cap), 0);
  const x = Math.max(0, phase.cap - round) + chain.slice(pos + 1).reduce((s, p) => s + Math.max(0, p.cap), 0);
  const deadline = phase.deadline ?? chain[0].deadline ?? pack.deadline;
  const info: LimitInfo = { x, y, deadline };

  if (pack.time.type === 'countdown') {
    const mpr = pack.time.minutesPerRound;
    const total = y * mpr;
    let minutes = x * mpr;
    const read = parseLimitPair(prevLimit).remaining;
    if (read !== null) minutes = Math.min(minutes, read - mpr);
    minutes = Math.max(0, minutes);
    Object.assign(info, { minutes, total, text: `约剩${formatMinutes(minutes)}/${formatMinutes(total)}` });
  } else if (pack.time.type === 'clock') {
    if (phase.frozen) info.text = `${pack.name}停摆·${phase.name}中`;
    else if (pack.remaining.type === 'nights') {
      const nights = pack.remaining.template.replace('{n}', String(remainingNights(pack, phase)));
      info.text = deadline ? `${deadline}·${nights}` : nights;
    } else if (deadline) info.text = deadline;
  }
  return info;
}

// ───────────── 通用副本包 ─────────────

export type GenericCaps = Record<Level, number>;
export const DEFAULT_GENERIC_CAPS: GenericCaps = { D: 70, C: 90, B: 110, A: 135, S: 200 };

/**
 * 通用副本包的计时：
 * 总时长 = 时限一行里第一个「数字+天/小时/分钟」；
 * 轮数上限 = 「（最多N轮）」，没有就按等级默认值；
 * 每轮分钟 = round(总时长 ÷ 轮数)，读不到总时长时为 undefined（只计轮，不注入约剩）。
 */
export function genericTiming(
  limit: string | undefined,
  level: Level,
  caps: GenericCaps = DEFAULT_GENERIC_CAPS,
): { rounds: number; totalMinutes?: number; minutesPerRound?: number } {
  const text = limit ?? '';
  const explicit = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(text);
  const rounds = explicit ? Math.max(1, Number(explicit[1])) : Math.max(1, Math.round(caps[level] ?? DEFAULT_GENERIC_CAPS[level]));
  const first = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(text.replace(/[（(][^）)]*[）)]/g, ''));
  if (!first) return { rounds };
  const n = Number(first[1]);
  const totalMinutes = Math.round(first[2] === '天' ? n * 1440 : first[2].includes('小时') ? n * 60 : n);
  if (totalMinutes <= 0) return { rounds };
  return { rounds, totalMinutes, minutesPerRound: Math.max(1, Math.round(totalMinutes / rounds)) };
}
