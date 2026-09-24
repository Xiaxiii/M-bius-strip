/** 第三期预留：积分账本（每聊天一份，删楼撤销；<积分变动> 标签）。第一期不实现。 */
export interface RlzcLedgerEntry {
  atIndex: number;
  time: string;
  delta: number;
  note: string;
}
export interface RlzcLedger {
  entries: RlzcLedgerEntry[];
}
export const ledger: Partial<RlzcLedger> = {};
