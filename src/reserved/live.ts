/** 第三期预留：直播（入场选择后锁定；Pack.disableLive 的副本中关闭）。第一期不实现。 */
import type { Pack } from '../packs/types';

export interface RlzcLive {
  enabled: boolean;
  locked: boolean;
}
export const live: Partial<RlzcLive> = {};

/** 该副本能否开启直播：回廊中（没有副本）不可直播；副本包标记 disableLive 时关闭 */
export function isLiveAllowed(pack: Pack | null | undefined): boolean {
  return !!pack && !pack.disableLive;
}
