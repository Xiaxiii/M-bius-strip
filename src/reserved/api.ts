/** 第二期预留：副API（OpenAI 兼容接口经 ST 服务端转发，或跟随主API）。第一期不实现。 */
export interface RlzcSideApi {
  /** 读“上一轮状态＋本轮回复”，返回更新后的隐藏状态字段 */
  updateHiddenState?(prevState: unknown, reply: string): Promise<unknown>;
  /** 由扩展判断事件条件是否成立 */
  judgeCondition?(condition: string, state: unknown): Promise<boolean>;
}
export const sideApi: RlzcSideApi = {};
