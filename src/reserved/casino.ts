/**
 * 第四期预留：赌坊（即开即结的小游戏）。第一期只放类型定义，不实现功能。
 * 规则见 CLAUDE.md 11.12：默认只在回廊开放，进副本后打烊；副本包 casino: true 时在该副本内开放。
 * 赔率带庄家抽水；依赖第三期积分账本，必须在账本之后做。
 */

export interface RlzcCasinoGame {
  id: string;
  name: string;
  /** 庄家抽水比例，0–1 */
  houseEdge: number;
}

/** 流水：一局一行 */
export interface RlzcCasinoRecord {
  time: string;
  gameId: string;
  stake: number;
  delta: number;
}

export const casinoGames: RlzcCasinoGame[] = [];
