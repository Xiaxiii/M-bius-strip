/** 积分账本核心逻辑（CLAUDE.md 第三期）。全部是纯函数，不依赖 Vue 或 ST。 */
import type { Level, LedgerDisplayEntry, LedgerEntry } from '../packs/types';

export const LEDGER_META_KEY = 'rlzc_ledger';

/** 斩杀线（CLAUDE.md 第三期） */
export const KILL_THRESHOLDS: Record<Level, number> = {
  D: 300, C: 1000, B: 3000, A: 10000, S: 30000,
};

/** 结算积分表：[副本等级][评价等级] → 基础奖励（CLAUDE.md 账本结算按积分表修正） */
const SCORE_TABLE: Record<Level, Record<string, number>> = {
  D: { D: 150,  C: 300,  B: 600,   A: 1000,  S: 1800  },
  C: { D: 800,  C: 1400, B: 2200,  A: 3000,  S: 4200  },
  B: { D: 3000, C: 4800, B: 6800,  A: 9000,  S: 12500 },
  A: { D: 11000,C: 16000,B: 21500, A: 28000, S: 38000 },
  S: { D: 36000,C: 48000,B: 64000, A: 85000, S: 115000},
};

/** 从 `<积分变动>` 标签正文解析变动量与来源。
 *  新格式："+300｜直播打赏500×60%"
 *  旧格式（兼容）："+300（说明）" */
export function parseDelta(text: string): { delta: number; source: string } | null {
  const t = text.trim();
  // 新格式 ±数额｜来源
  const newFmt = /^([+-]?\d+)\s*[｜|]\s*(.*)$/.exec(t);
  if (newFmt) {
    const delta = parseInt(newFmt[1], 10);
    if (!Number.isFinite(delta)) return null;
    return { delta, source: newFmt[2].trim() };
  }
  // 旧格式 ±数额（说明）或单独数额
  const oldFmt = /^([+-]?\d+)(?:\s*[（(]([^）)]*)[）)])?/.exec(t);
  if (!oldFmt) return null;
  const delta = parseInt(oldFmt[1], 10);
  if (!Number.isFinite(delta)) return null;
  return { delta, source: oldFmt[2]?.trim() ?? '' };
}

/** 把 Date / send_date 字符串 / 毫秒数转换为 "M/D HH:MM" 格式 */
export function formatTime(src: Date | string | number | undefined): string {
  let d: Date;
  if (src instanceof Date) {
    d = src;
  } else if (typeof src === 'number') {
    d = new Date(src);
  } else if (typeof src === 'string') {
    d = new Date(src);
  } else {
    d = new Date();
  }
  if (isNaN(d.getTime())) d = new Date();
  const M = d.getMonth() + 1;
  const D = d.getDate();
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${M}/${D} ${hh}:${mm}`;
}

/** 从 `<状态栏>` 正文中提取玩家等级（D/C/B/A/S）。找不到返回 null */
export function parsePlayerLevelFromStatusBar(statusText: string): Level | null {
  const m = /等级[：:]\s*([DCBAS])/.exec(statusText);
  return m ? (m[1] as Level) : null;
}

/** 从 `<状态栏>` 正文中提取「积分」字段的数值。找不到返回 null */
export function parseBalanceFromStatusBar(statusText: string): number | null {
  const m = /积分[：:]\s*([+-]?\d+)/.exec(statusText);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  return Number.isFinite(n) ? n : null;
}

/** 根据副本等级、玩家等级与结算字段计算奖励/惩罚（CLAUDE.md 账本结算按积分表修正）。
 *
 * 通关时：
 *   base = SCORE_TABLE[packLevel][rating]（评价缺失按 B）
 *   若抽查=是 → ×0.5（优先级最高）
 *   否则若玩家等级 ≠ 副本等级 或 越级=是 → ×0.6
 *
 * 清算副本通关（isClearance=true）：
 *   不给评价奖励；将余额补到 KILL_THRESHOLDS[playerLevel]+500；返回差值（最小为0）
 *
 * 失败/阵亡：
 *   清算副本 → 不记账（返回 0）
 *   普通失败 → 扣当前余额的 30%（floor，最小为0）
 *
 * 结果不明确 → 返回 { delta: 0 }
 */
export function calcSettlementDelta(
  packLevel: Level,
  playerLevel: Level,
  fields: Record<string, string>,
  balance: number,
  isClearance: boolean,
): { delta: number; source: string; warn?: string } {
  const result = fields['结果'] ?? '';
  const rating = (fields['评价'] ?? 'B').toUpperCase();

  const isWin = result === '通关' || result === '成功' || result === '胜利';
  const isLoss = result === '失败' || result === '阵亡';

  if (!isWin && !isLoss) {
    return { delta: 0, source: '' };
  }

  if (isLoss) {
    if (isClearance) return { delta: 0, source: '清算副本失败·不记账' };
    const deduct = Math.floor(balance * 0.3);
    return { delta: -deduct, source: `副本失败·扣30%` };
  }

  // isWin
  if (isClearance) {
    const target = KILL_THRESHOLDS[playerLevel] + 500;
    const delta = Math.max(0, target - balance);
    return { delta, source: `清算副本通关·补至${target}` };
  }

  const tableRating = ['D', 'C', 'B', 'A', 'S'].includes(rating) ? rating : 'B';
  let base = SCORE_TABLE[packLevel][tableRating];

  const isSurvey = fields['抽查'] === '是' || fields['抽查'] === 'true' || fields['抽查'] === '1';
  const isOverLevel = fields['越级'] === '是' || fields['越级'] === 'true' || fields['越级'] === '1';
  const levelMismatch = packLevel !== playerLevel;

  let source = `副本结算·通关·${tableRating}`;
  if (isSurvey) {
    base = Math.round(base * 0.5);
    source += '·抽查×0.5';
  } else if (isOverLevel || levelMismatch) {
    base = Math.round(base * 0.6);
    source += isOverLevel ? '·越级×0.6' : '·等级不符×0.6';
  }

  return { delta: base, source };
}

/** 计算当前积分余额 */
export function computeBalance(initValue: number, entries: LedgerEntry[]): number {
  return entries.reduce((sum, e) => sum + e.delta, initValue);
}

/** 判断是否处于「待清算」状态：余额曾低于斩杀线，且之后没有通关结算（type=settle 且 delta>0）清除标记 */
export function isPendingClearance(
  initValue: number,
  entries: LedgerDisplayEntry[],
  threshold: number,
): boolean {
  let balance = initValue;
  let pending = false;
  for (const e of entries) {
    balance += e.delta;
    if (balance < threshold) pending = true;
    if (e.type === 'settle' && e.delta > 0) pending = false;
  }
  return pending;
}

/** 构建账户校正句（纯函数，供 app.ts 和单元测试使用）。无校正项时返回空字符串。 */
export function buildFixSentence(fix: { level?: string; rank?: string }): string {
  const parts: string[] = [];
  if (fix.level) parts.push(`等级写${fix.level}`);
  if (fix.rank) parts.push(`位格写${fix.rank}`);
  if (!parts.length) return '';
  return `本轮状态栏里{{user}}的${parts.join('、')}，之后按剧情照常。`;
}

/** 格式化单条流水显示："9/24 13:02 +300 直播打赏500×60%" */
export function formatEntry(e: LedgerDisplayEntry): string {
  const sign = e.delta >= 0 ? '+' : '';
  const src = e.source ? ` ${e.source}` : '';
  return `${e.at} ${sign}${e.delta}${src}`;
}

/** 生成注入给 AI 的积分账户文本（格式：「［账户·仅供AI］积分：X　待清算：X」）
 *  供 app.ts 的 buildLedgerInjection 调用；参数需外部传入，便于单元测试 */
export function formatBalanceInjection(
  balance: number,
  pendingClearance: boolean,
  level: Level = 'D',
  threshold?: number,
): string {
  if (!pendingClearance) {
    return `［账户·仅供AI］积分：${balance}　待清算：无`;
  }
  const thr = threshold ?? KILL_THRESHOLDS[level];
  const diff = Math.max(0, thr - balance);
  return `［账户·仅供AI］积分：${balance}　待清算：已标记，距斩杀线${diff}分（${level}级斩杀线${thr}）。商城价格上浮30%，下一场副本为清算副本。`;
}
