import type { ChatMessage, ManualAction, Pack, PackEvent, Phase, Session } from '../packs/types';
import {
  detectPanel,
  detectPhaseSwitch,
  detectRoles,
  detectSettlement,
  type PanelInfo,
  type Settlement,
} from './detector';
import { computeLimit, nextChainStart, remainingNights, type LimitInfo } from './timeLimit';

/**
 * 从聊天记录重放出当前副本状态（CLAUDE.md 5.1）。
 * 纯函数：不读写任何全局状态，不存累加计数器。删楼、滑动、编辑之后再调一次即可。
 */

/** 每次生成最多合并注入的跳过事件数 */
export const SKIP_BATCH = 5;

/** 没有阶段表的基础包/通用包使用的虚拟阶段：不设上限 */
export const OPEN_PHASE: Phase = { id: '_open', name: '进行中', cap: 0, next: null };

export interface SkipGoal {
  phase: string;
  round: number;
}

/** 某一轮（即将生成或已生成）的事件安排 */
export interface RoundPlan {
  phase: Phase;
  round: number;
  events: PackEvent[];
  /** 快进时：本次从第 skipFrom 轮快进到第 round 轮 */
  skipFrom?: number;
}

export interface MessageRecord {
  phase: string;
  round: number;
  events: string[];
  skipFrom?: number;
  /** 这一轮的时限（与当时注入的一致，用于核对） */
  limit?: LimitInfo;
}

export interface Progress {
  phase: Phase;
  /** 当前阶段已完成的AI回复数 */
  round: number;
  /** 即将生成的这一轮（考虑跳过） */
  nextRound: number;
  /** 即将生成这一轮的钟时（仅 clock 阶段） */
  clock?: string;
  /** 已完成这一轮的钟时（仅 clock 阶段，面板显示用） */
  currentClock?: string;
  /** 副本包 remaining 模板填好的文字：nights →「剩余N夜」；countdown →「剩余M分钟」（M = 约剩分钟） */
  remainingText?: string;
  /** 即将生成这一轮的时限：剩余X/Y轮、截止条件、<副本> 时限一栏应写的文字（CLAUDE.md 12.2） */
  limit?: LimitInfo;
  /** 已完成这一轮之后的剩余轮数（面板显示用）：Y − 已完成轮数，入场第1轮后为 299/300 */
  roundsLeft?: { x: number; y: number };
  /** 当前链的起点阶段 id */
  chainStart?: string;
  ended: boolean;
  endedBy?: 'tag' | 'manual';
  /** 结束于哪一楼（结算消息，或手动结束操作所在的楼） */
  endIndex?: number;
  firedEvents: string[];
  warn: boolean;
  isLastRound: boolean;
  /** 本阶段已到上限且没有下一阶段，等待结算 */
  overdue: boolean;
  /** 即将生成这一轮的事件安排；已结束时为 null */
  next: RoundPlan | null;
  skipGoal: SkipGoal | null;
  settlement?: Settlement;
  panel?: PanelInfo;
  rolesFromChat?: Record<string, string>;
  /** 每条AI消息被重放时归属的阶段与轮次（调试页用） */
  perMessage: Record<number, MessageRecord>;
  entryIndex: number;
}

export function isCountable(msg: ChatMessage | undefined): boolean {
  return !!msg && !msg.is_user && !msg.is_system;
}

function parseHM(s: string): number {
  const [h, m] = s.split(':').map((x) => parseInt(x, 10));
  return (h || 0) * 60 + (m || 0);
}

/** 第 r 轮的钟时 = dayStart + (r-1) * minutesPerRound，按12小时制显示（12:00、1:30、5:55） */
export function clockAt(dayStart: string, minutesPerRound: number, round: number): string {
  const total = parseHM(dayStart) + Math.max(0, round - 1) * minutesPerRound;
  const H = Math.floor(total / 60) % 24;
  const M = ((total % 60) + 60) % 60;
  const h12 = H % 12 === 0 ? 12 : H % 12;
  return `${h12}:${String(M).padStart(2, '0')}`;
}

function phaseClock(pack: Pack, phase: Phase, round: number): string | undefined {
  if (pack.time.type !== 'clock' || !phase.clock || phase.night || phase.frozen || round < 1) return undefined;
  return clockAt(pack.time.dayStart, pack.time.minutesPerRound, round);
}

function phasesOf(pack: Pack): Phase[] {
  return pack.phases.length ? pack.phases : [OPEN_PHASE];
}

function findPhase(pack: Pack, id: string | null | undefined): Phase | undefined {
  return phasesOf(pack).find((p) => p.id === id);
}

/** 沿 next 链从 from 能否走到 to（含自身） */
export function reachable(pack: Pack, from: Phase, to: string): boolean {
  const seen = new Set<string>();
  let cur: Phase | undefined = from;
  while (cur && !seen.has(cur.id)) {
    if (cur.id === to) return true;
    seen.add(cur.id);
    cur = findPhase(pack, cur.next);
  }
  return false;
}

/**
 * 本轮事件选择（CLAUDE.md 5.2）。
 * 普通情况：取 from === 下一轮 的事件（区间事件只在起始轮出现一次）。
 * 快进：把 [下一轮, 目标] 之间的事件按顺序合并，最多 SKIP_BATCH 个；
 * 超过时只推进到第 SKIP_BATCH 个事件所在轮次。
 */
export function planRound(pack: Pack, phase: Phase, round: number, skipGoal: SkipGoal | null): RoundPlan {
  const base = round + 1;
  const phaseEvents = pack.events.filter((e) => e.phase === phase.id);
  if (skipGoal) {
    const end = phase.id === skipGoal.phase ? skipGoal.round : phase.cap;
    if (end > base) {
      let list = phaseEvents
        .map((e, i) => ({ e, i }))
        .filter(({ e }) => e.from >= base && e.from <= end)
        .sort((a, b) => a.e.from - b.e.from || a.i - b.i)
        .map(({ e }) => e);
      let target = end;
      if (list.length > SKIP_BATCH) {
        target = list[SKIP_BATCH - 1].from;
        list = list.filter((e) => e.from <= target);
      }
      return { phase, round: target, events: list, skipFrom: base };
    }
  }
  return { phase, round: base, events: phaseEvents.filter((e) => e.from === base) };
}

export function replay(chat: ChatMessage[], session: Session, pack: Pack): Progress | null {
  const entryIndex = session.entryIndex;
  if (!isCountable(chat[entryIndex])) return null;

  const phases = phasesOf(pack);
  let phase = phases[0];
  let chainStart = phases[0];
  let round = 0;
  /** 上一条AI消息 <副本> 时限一栏的原文（“只减不增”） */
  let prevLimit: string | undefined;
  let ended = false;
  let endedBy: 'tag' | 'manual' | undefined;
  let endIndex: number | undefined;
  let skipGoal: SkipGoal | null = null;
  let settlement: Settlement | undefined;
  let panel: PanelInfo | undefined;
  let rolesFromChat: Record<string, string> | undefined;
  const fired = new Set<string>();
  const perMessage: Record<number, MessageRecord> = {};

  const actions = new Map<number, ManualAction[]>();
  for (const a of session.manual ?? []) {
    if (!actions.has(a.atIndex)) actions.set(a.atIndex, []);
    actions.get(a.atIndex)!.push(a);
  }

  const enter = (next: Phase) => {
    if (pack.phases.length) chainStart = nextChainStart(pack, chainStart, next);
    phase = next;
    round = 0;
    if (skipGoal && !reachable(pack, phase, skipGoal.phase)) skipGoal = null;
  };

  for (let i = entryIndex; i < chat.length; i++) {
    const msg = chat[i];
    if (!ended && isCountable(msg)) {
      const plan = planRound(pack, phase, round, skipGoal);
      round = plan.round;
      plan.events.forEach((e) => fired.add(e.id));
      perMessage[i] = {
        phase: phase.id,
        round,
        events: plan.events.map((e) => e.id),
        skipFrom: plan.skipFrom,
        limit: computeLimit(pack, phase, chainStart, round, prevLimit),
      };
      if (skipGoal && phase.id === skipGoal.phase && round >= skipGoal.round) skipGoal = null;

      const text = String(msg.mes ?? '');
      const p = detectPanel(text);
      if (p) panel = p;
      prevLimit = p?.limit;
      const r = detectRoles(text);
      if (r) rolesFromChat = r;

      const s = detectSettlement(text);
      if (s) {
        ended = true;
        endedBy = 'tag';
        endIndex = i;
        settlement = s;
      } else {
        const switchName = detectPhaseSwitch(text);
        const target = switchName ? phases.find((ph) => ph.name === switchName) : undefined;
        if (target && pack.phases.length) {
          enter(target);
        } else if (phase.cap > 0 && round >= phase.cap && phase.next) {
          const next = findPhase(pack, phase.next);
          if (next) enter(next);
        }
      }
    }

    for (const a of actions.get(i) ?? []) {
      if (ended) break;
      switch (a.kind) {
        case 'skip': {
          const valid = findPhase(pack, a.targetPhase) && reachable(pack, phase, a.targetPhase);
          skipGoal = valid ? { phase: a.targetPhase, round: a.targetRound } : null;
          break;
        }
        case 'setPhase': {
          const target = findPhase(pack, a.phase);
          if (target) {
            skipGoal = null;
            enter(target);
          }
          break;
        }
        case 'setRound':
          round = Math.max(0, Math.floor(a.round));
          skipGoal = null;
          break;
        case 'end':
          ended = true;
          endedBy = 'manual';
          endIndex = i;
          break;
      }
    }
  }

  const next = ended ? null : planRound(pack, phase, round, skipGoal);
  const nextRound = next ? next.round : round + 1;
  const capped = phase.cap > 0;
  const firedEvents = pack.events.filter((e) => fired.has(e.id)).map((e) => e.id);

  const limit = ended ? undefined : computeLimit(pack, phase, chainStart, nextRound, prevLimit);
  const done = ended ? undefined : computeLimit(pack, phase, chainStart, round);
  let remainingText: string | undefined;
  const remaining = pack.remaining;
  if (!ended && remaining.type === 'nights' && pack.phases.length && !phase.byTag && !phase.frozen) {
    remainingText = remaining.template.replace('{n}', String(remainingNights(pack, phase)));
  } else if (!ended && remaining.type === 'countdown' && limit?.minutes !== undefined) {
    remainingText = remaining.template.replace('{m}', String(limit.minutes));
  }

  return {
    phase,
    round,
    nextRound,
    clock: ended ? undefined : phaseClock(pack, phase, nextRound),
    currentClock: phaseClock(pack, phase, round),
    remainingText,
    limit,
    roundsLeft: done ? { x: done.x, y: done.y } : undefined,
    chainStart: pack.phases.length ? chainStart.id : undefined,
    ended,
    endedBy,
    endIndex,
    firedEvents,
    warn: !ended && capped && nextRound >= phase.cap - 2,
    isLastRound: !ended && capped && nextRound === phase.cap,
    overdue: !ended && capped && !phase.next && nextRound > phase.cap,
    next,
    skipGoal,
    settlement,
    panel,
    rolesFromChat,
    perMessage,
    entryIndex,
  };
}
