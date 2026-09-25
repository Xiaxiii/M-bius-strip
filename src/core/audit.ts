import type { ChatMessage, Pack } from '../packs/types';
import { detectPanel } from './detector';
import type { Progress } from './replay';
import { formatMinutes, parseLimitPair } from './timeLimit';

/**
 * <副本> 面板核对。纯函数，每次重放后从聊天原文重新计算，不存结果，也不改消息原文。
 * 结果只用于两处：下一轮的注入提示，和调试页的警告列表。
 */

export type AuditKind =
  | 'missing'
  | 'progressStart'
  | 'progressRange'
  | 'progressDrop'
  | 'progressUnreadable'
  | 'limit'
  /** 副API判定本轮后台事件没写出来 */
  | 'eventMissed'
  /** 副API预判条件不成立，生成这一楼时没有注入 */
  | 'eventSkipped';

export interface AuditWarning {
  index: number;
  phase: string;
  round: number;
  kind: AuditKind;
  text: string;
}

export interface AuditResult {
  warnings: AuditWarning[];
  /** 上一条AI回复（入场之后）缺少 <副本> */
  missingLast: boolean;
  /** 入场以来是否已经出现过 <副本>（没有时，下一轮就是进度条从0开始的一轮） */
  hasPanel: boolean;
}

const FILLED = /[■█▰●◆★▮▓]/g;
const EMPTY = /[□░▱○◇☆▯▒]/g;

/**
 * 从进度条一栏读出 0–100 的数值：
 * `40%`、`40/100`（或 `2/5` 换算成百分比）、纯数字，或 `■■□□□` 这样的方块（按实心比例换算）。
 * 读不出返回 null。
 */
export function parseProgressValue(raw: string | undefined): number | null {
  if (!raw) return null;
  const t = raw.trim();
  let m = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (m) return Number(m[1]);
  m = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t);
  if (m) {
    const total = Number(m[2]);
    return total === 100 ? Number(m[1]) : total > 0 ? Math.round((Number(m[1]) / total) * 100) : null;
  }
  m = /-?\d+(?:\.\d+)?/.exec(t);
  if (m) return Number(m[0]);
  const filled = (t.match(FILLED) ?? []).length;
  const empty = (t.match(EMPTY) ?? []).length;
  if (filled + empty > 0) return Math.round((filled / (filled + empty)) * 100);
  return null;
}

/** 比较时忽略空白与标点 */
function norm(s: string): string {
  return s.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, '');
}

/** AI 写的时限与计算值是否一致：去掉空白标点后，包含计算值即可（允许 AI 多写补充说明） */
export function limitMatches(written: string, expected: string): boolean {
  return norm(written).includes(norm(expected));
}

export function auditPanels(chat: ChatMessage[], pack: Pack, progress: Progress): AuditResult {
  const warnings: AuditWarning[] = [];
  const indices = Object.keys(progress.perMessage).map(Number).sort((a, b) => a - b);
  let hasPanel = false;
  let prev: number | null = null;
  let missingLast = false;

  for (const index of indices) {
    const rec = progress.perMessage[index];
    const phase = pack.phases.find((p) => p.id === rec.phase);
    const phaseName = phase?.name ?? '进行中';
    const warn = (kind: AuditKind, text: string) => warnings.push({ index, phase: phaseName, round: rec.round, kind, text });
    // ── 副API的事件核对与跳过记录 ──
    const snapshot = chat[index]?.extra?.rlzc;
    for (const e of snapshot?.sub?.events ?? []) if (e.status === 'missed') warn('eventMissed', `${e.id} 未写出来：${e.reason}`);
    for (const k of snapshot?.skippedEvents ?? []) warn('eventSkipped', `${k.id} 条件不成立，已跳过：${k.reason}`);

    const panel = detectPanel(String(chat[index]?.mes ?? ''));
    const isEntry = index === progress.entryIndex;

    if (!panel) {
      // 入场那条简报本身可以不带面板
      if (!isEntry) warn('missing', '本轮回复缺少 <副本> 面板');
      missingLast = !isEntry;
      continue;
    }
    missingLast = false;

    // ── 进度条 ──
    const value = parseProgressValue(panel.progressBar);
    if (panel.progressBar === undefined) {
      warn('progressUnreadable', '<副本> 中没有进度条一栏');
    } else if (value === null) {
      warn('progressUnreadable', `进度条无法读出数值：「${panel.progressBar}」`);
    } else {
      if (!hasPanel && value !== 0) warn('progressStart', `入场后第一轮的进度条应为0，实际为 ${value}`);
      if (value < 0 || value > 100) warn('progressRange', `进度条数值 ${value} 超出 0–100`);
      if (prev !== null && value < prev) warn('progressDrop', `进度条比上一轮低：${prev} → ${value}`);
      prev = value;
    }
    hasPanel = true;

    // ── 时限：和本楼快照记录的注入值比较（旧楼没有快照时用重放算出的值）──
    const snap = chat[index]?.extra?.rlzc?.limit;
    const injected = snap?.text
      ? snap
      : rec.limit?.text
        ? { text: rec.limit.text, minutes: rec.limit.minutes, total: rec.limit.total }
        : undefined;
    if (injected) {
      const written = panel.limit;
      if (injected.minutes !== undefined) {
        const pair = parseLimitPair(written);
        if (!written || pair.remaining === null || pair.total === null) {
          warn('limit', `时限读不到「剩余时间/总时长」：写的是「${written ?? '（没有时限一栏）'}」，注入的是「${injected.text}」`);
        } else {
          if (pair.remaining > injected.minutes)
            warn('limit', `剩余时间比注入值多：写的是${formatMinutes(pair.remaining)}，注入的是${formatMinutes(injected.minutes)}`);
          if (injected.total !== undefined && pair.total !== injected.total)
            warn('limit', `总时长与注入值不一致：写的是${formatMinutes(pair.total)}，注入的是${formatMinutes(injected.total)}`);
        }
      } else if (!written || !limitMatches(written, injected.text)) {
        warn('limit', `时限与注入文字不一致：写的是「${written ?? '（没有时限一栏）'}」，注入的是「${injected.text}」`);
      }
    }
  }

  return { warnings, missingLast, hasPanel };
}
