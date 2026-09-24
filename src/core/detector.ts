import type { BriefingInfo, Pack, Phase } from '../packs/types';

/** 识别简报、标签与跳过关键词。全部是纯函数。 */

export const BRIEFING_RE = /副本简报\s*[-－—]\s*([^\s」』\n]+)/;
export const PHASE_SWITCH_RE = /<阶段切换>([\s\S]*?)<\/阶段切换>/;
export const SETTLEMENT_RE = /<副本结算>([\s\S]*?)<\/副本结算>/;
export const PANEL_RE = /<副本>([\s\S]*?)<\/副本>/;
export const ROLES_RE = /<角色登记>([\s\S]*?)<\/角色登记>/;
export const SKIP_RE = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/;

/** 读取简报：名称，以及后续几行的等级、目标、时限、人数 */
export function detectBriefing(text: string): BriefingInfo | null {
  const m = BRIEFING_RE.exec(text ?? '');
  if (!m) return null;
  const info: BriefingInfo = { name: m[1] };
  const rest = text.slice(m.index + m[0].length).split('\n').slice(0, 12).join('\n');
  const field = (key: string) => {
    const r = new RegExp(`${key}\\s*[：:]\\s*([^」』\\n]+)`).exec(rest);
    return r ? r[1].trim() : undefined;
  };
  const level = field('等级');
  if (level) info.level = level.replace(/级$/, '').trim().toUpperCase();
  info.goal = field('目标');
  info.limit = field('时限');
  info.players = field('人数');
  return info;
}

/** 阶段切换标签：返回目标阶段名（已去掉首尾空白） */
export function detectPhaseSwitch(text: string): string | null {
  const m = PHASE_SWITCH_RE.exec(text ?? '');
  return m ? m[1].trim() : null;
}

/** 解析 `键=值｜键=值` */
export function parseKeyValues(body: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const part of body.split(/[｜|\n]/)) {
    const idx = part.search(/[=＝]/);
    if (idx < 0) continue;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    if (k) out[k] = v;
  }
  return out;
}

export interface Settlement {
  raw: string;
  result?: string;
  rating?: string;
  fields: Record<string, string>;
}

export function detectSettlement(text: string): Settlement | null {
  const m = SETTLEMENT_RE.exec(text ?? '');
  if (!m) return null;
  const fields = parseKeyValues(m[1]);
  return { raw: m[1].trim(), result: fields['结果'], rating: fields['评价'], fields };
}

export function detectRoles(text: string): Record<string, string> | null {
  const m = ROLES_RE.exec(text ?? '');
  if (!m) return null;
  const roles = parseKeyValues(m[1]);
  return Object.keys(roles).length ? roles : null;
}

export interface PanelInfo {
  limit?: string;
  progressBar?: string;
  tasks: string[];
  ps?: string;
}

/** `<副本>` 面板：时限、进度条、任务（可多行）、ps */
export function detectPanel(text: string): PanelInfo | null {
  const m = PANEL_RE.exec(text ?? '');
  if (!m) return null;
  const info: PanelInfo = { tasks: [] };
  let current: 'tasks' | 'ps' | null = null;
  for (const rawLine of m[1].split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;
    const kv = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(line);
    if (kv) {
      const key = kv[1].toLowerCase();
      const value = kv[2].trim();
      if (key === '时限') { info.limit = value; current = null; }
      else if (key === '进度条') { info.progressBar = value; current = null; }
      else if (key === '任务') { if (value) info.tasks.push(value); current = 'tasks'; }
      else { info.ps = value; current = 'ps'; }
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(line)) { current = null; continue; }
    if (current === 'tasks') info.tasks.push(line);
    else if (current === 'ps') info.ps = info.ps ? `${info.ps}\n${line}` : line;
  }
  return info;
}

export type SkipWord = '日落' | '天黑' | '天亮' | '日出' | '晚饭' | '夜里' | '明天';

export function detectSkip(text: string): SkipWord | null {
  const m = SKIP_RE.exec(text ?? '');
  return m ? (m[2] as SkipWord) : null;
}

export interface SkipTarget {
  phase: string;
  round: number;
  label: string;
}

/** 从 start 阶段起沿 next 链找第一个满足条件的阶段 */
function walk(pack: Pack, start: Phase, pred: (p: Phase) => boolean): Phase | null {
  const seen = new Set<string>();
  let cur: Phase | undefined = start;
  while (cur && !seen.has(cur.id)) {
    if (pred(cur)) return cur;
    seen.add(cur.id);
    cur = cur.next ? pack.phases.find((p) => p.id === cur!.next) : undefined;
  }
  return null;
}

/**
 * 把跳过关键词换算成目标（阶段 + 轮次）。目标轮次即“跳过后这次生成所在的轮次”，
 * 例如跳到日落 = 白天阶段的最后一轮（在该轮写出日落）。
 * 没有阶段表或已无处可跳时返回 null。
 */
export function resolveSkipTarget(pack: Pack, current: Phase, round: number, word: SkipWord): SkipTarget | null {
  if (!pack.phases.length || !pack.phases.some((p) => p.id === current.id)) return null;
  const isDay = (p: Phase) => !!p.clock && !p.night;
  let target: Phase | null = null;
  let targetRound = 0;
  switch (word) {
    case '日落':
    case '天黑':
    case '夜里':
      target = walk(pack, current, isDay);
      targetRound = target?.cap ?? 0;
      break;
    case '晚饭':
      target = walk(pack, current, isDay);
      if (target) {
        targetRound = Math.ceil(target.cap * 0.75);
        if (target.id === current.id && targetRound <= round) targetRound = target.cap;
      }
      break;
    case '天亮':
    case '日出':
    case '明天':
      target = walk(pack, current, (p) => !!p.night);
      targetRound = target?.cap ?? 0;
      break;
  }
  if (!target) return null;
  if (target.id === current.id && targetRound <= round + 1) return null;
  return { phase: target.id, round: targetRound, label: `${target.name}第${targetRound}轮` };
}
