/** 积分账本核心逻辑（CLAUDE.md 第三期）。全部是纯函数，不依赖 Vue 或 ST。 */
import type { Level, LedgerDisplayEntry, LedgerEntry } from '../packs/types';

export const LEDGER_META_KEY = 'rlzc_ledger';

/** 斩杀线（CLAUDE.md 第三期） */
export const KILL_THRESHOLDS: Record<Level, number> = {
  D: 300, C: 1000, B: 3000, A: 10000, S: 30000,
};

/** 各等级副本通关基础奖励（B评价基准） */
const BASE_REWARDS: Record<Level, number> = {
  D: 500, C: 1500, B: 5000, A: 15000, S: 50000,
};

/** 结算评价倍率 */
const RATING_MULT: Record<string, number> = {
  S: 1.5, A: 1.2, B: 1.0, C: 0.8, D: 0.6,
};

/** 结算修正因子（来自 <副本结算> 字段） */
const MODIFIER_MULT: Record<string, number> = {
  越级: 0.6,
  抽查: 0.5,
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

/** 从 `<状态栏>` 正文中提取「积分」字段的数值。找不到返回 null */
export function parseBalanceFromStatusBar(statusText: string): number | null {
  const m = /积分[：:]\s*([+-]?\d+)/.exec(statusText);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  return Number.isFinite(n) ? n : null;
}

/** 根据等级与结算字段计算奖励/惩罚（CLAUDE.md 第三期）。
 *  fields 里需含 `结果`（通关/成功/失败/阵亡）和可选的 `评价`（S/A/B/C/D）、
 *  `越级`（是）、`抽查`（是）。返回整数；结果不明确时返回 0。 */
export function calcSettlementDelta(level: Level, fields: Record<string, string>): number {
  const result = fields['结果'] ?? '';
  const rating = (fields['评价'] ?? '').toUpperCase();
  if (result === '失败' || result === '阵亡') {
    return -Math.round(BASE_REWARDS[level] * 0.3);
  }
  if (result !== '通关' && result !== '成功' && result !== '胜利') {
    return 0;
  }
  let base = BASE_REWARDS[level];
  base = Math.round(base * (RATING_MULT[rating] ?? 1.0));
  for (const [key, mult] of Object.entries(MODIFIER_MULT)) {
    if (fields[key] === '是' || fields[key] === 'true' || fields[key] === '1') {
      base = Math.round(base * mult);
    }
  }
  return base;
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

/** 格式化单条流水显示："9/24 13:02 +300 直播打赏500×60%" */
export function formatEntry(e: LedgerDisplayEntry): string {
  const sign = e.delta >= 0 ? '+' : '';
  const src = e.source ? ` ${e.source}` : '';
  return `${e.at} ${sign}${e.delta}${src}`;
}

/** 生成注入给 AI 的积分账户文本（格式：「［账户·仅供AI］积分：X　待清算：X」）
 *  供 app.ts 的 buildLedgerInjection 调用；第二参数需外部传入，便于单元测试 */
export function formatBalanceInjection(balance: number, pendingClearance: boolean): string {
  if (!pendingClearance) {
    return `［账户·仅供AI］积分：${balance}　待清算：无`;
  }
  return `［账户·仅供AI］积分：${balance}　待清算：是`;
}
