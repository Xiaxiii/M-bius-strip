/** 第三期预留：直播（入场选择后锁定；Pack.disableLive 的副本中关闭）。第一期不实现。 */
export interface RlzcLive {
  enabled: boolean;
  locked: boolean;
}
export const live: Partial<RlzcLive> = {};
