/** 积分账本核心逻辑（CLAUDE.md 第三期）。全部是纯函数，不依赖 Vue 或 ST。 */
import type { ChatMessage, LedgerEntry } from '../packs/types';

export const LEDGER_META_KEY = 'rlzc_ledger';

/** 从 `<积分变动>` 标签正文解析变动量与说明。
 *  接受格式："+300（直播打赏500×60%）"、"-100（消耗）"、"+500" */
export function parseDelta(text: string): { delta: number; note: string } | null {
  const m = /^([+-]?\d+)(?:\s*[（(]([^）)]*)[）)])?/.exec(text.trim());
  if (!m) return null;
  const delta = parseInt(m[1], 10);
  if (!Number.isFinite(delta)) return null;
  return { delta, note: m[2]?.trim() ?? '' };
}

/** 把 Date / send_date 字符串 / 毫秒数转换为 "M/D HH:MM" 格式 */
export function formatTime(src: Date | string | number | undefined): string {
  let d: Date;
  if (src instanceof Date) {
    d = src;
  } else if (typeof src === 'number') {
    d = new Date(src);
  } else if (typeof src === 'string') {
    // send_date 可能是 "Sep 26, 2026 13:02:00" 或 ISO 格式
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

/** 计算当前积分余额 */
export function computeBalance(entries: LedgerEntry[]): number {
  return entries.reduce((sum, e) => sum + e.delta, 0);
}

/** 删楼后撤销：保留 mesIndex 仍指向 AI 消息的流水条目 */
export function reconcileLedger(entries: LedgerEntry[], chat: ChatMessage[]): LedgerEntry[] {
  return entries.filter((e) => {
    const msg = chat[e.mesIndex];
    return msg != null && !msg.is_user;
  });
}

/** 格式化单条流水显示："9/24 13:02 +300（直播打赏500×60%）" */
export function formatEntry(e: LedgerEntry): string {
  const sign = e.delta >= 0 ? '+' : '';
  const note = e.note ? `（${e.note}）` : '';
  return `${e.time} ${sign}${e.delta}${note}`;
}

/** 生成注入给 AI 的积分余额文本 */
export function formatBalanceInjection(entries: LedgerEntry[]): string {
  const balance = computeBalance(entries);
  return `［积分余额·仅供AI］\n当前积分：${balance}`;
}
