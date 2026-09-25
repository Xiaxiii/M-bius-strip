/**
 * 第四期预留：黑市赌局。第一期只放类型定义，不实现功能。
 * 规则见 CLAUDE.md 11.11：押的是故事，不是骰子；黑市页签分「盘口 / 票夹 / 赌坊」。
 * 赔率只按副本等级、公开信息和下注人数计算，绝不能根据真相计算。
 */

/** 盘口类型：结局盘、事件盘、庄家怪盘 */
export type RlzcMarketKind = 'ending' | 'event' | 'freak';

/** 盘口：进副本前开盘，第1轮结束封盘 */
export interface RlzcMarket {
  id: string;
  kind: RlzcMarketKind;
  packId: string;
  title: string;
  options: { id: string; label: string; odds: number }[];
  /** 结果来源：<副本结算>、<阶段切换>、事件记录，或怪盘的结算标签 */
  settleFrom: 'settlement' | 'phaseSwitch' | 'event' | 'tag';
  status: 'open' | 'closed' | 'settled';
}

/** 赌票开奖时盖的章：兑 / 废 / 退 */
export type RlzcStamp = 'win' | 'lose' | 'refund';

/** 赌票（票夹里的一张） */
export interface RlzcBet {
  id: string;
  marketId: string;
  optionId: string;
  stake: number;
  odds: number;
  stamp?: RlzcStamp;
}

export const bets: RlzcBet[] = [];
