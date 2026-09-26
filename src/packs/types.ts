/** 副本包与会话的数据模型（见 CLAUDE.md 第4节） */

export type Level = 'D' | 'C' | 'B' | 'A' | 'S';

export interface Phase {
  id: string;
  name: string;
  cap: number;
  /** null = 该阶段结束后由AI输出结算 */
  next: string | null;
  clock?: boolean;
  night?: boolean;
  byTag?: boolean;
  frozen?: boolean;
  /** 截止条件，覆盖包级 deadline（如钟楼调查阶段「至审判结束」） */
  deadline?: string;
}

export interface PackEvent {
  id: string;
  phase: string;
  from: number;
  to: number;
  text: string;
  if?: string;
  kind: 'event' | 'directive';
}

/** 副API要维护的隐藏状态字段（CLAUDE.md 14） */
export interface StateField {
  key: string;
  label: string;
  hint: string;
}

export interface PackDoc {
  title: string;
  md?: string;
  image?: string;
}

export type PackTime =
  | { type: 'clock'; dayStart: string; minutesPerRound: number }
  /** 倒计时：每轮消耗 minutesPerRound 分钟，不显示钟时 */
  /** totalMinutes：总时长的固定值（通用副本用简报里的时限）；不写时总时长 = 总轮数 × minutesPerRound */
  | { type: 'countdown'; minutesPerRound: number; totalMinutes?: number }
  | { type: 'none' };

export type PackRemaining =
  | { type: 'nights'; template: string }
  /** 剩余分钟 = (当前阶段剩余轮数 + 后续各阶段上限) × time.minutesPerRound，模板占位符 {m} */
  | { type: 'countdown'; template: string }
  | { type: 'fromPanel' };

export interface Pack {
  id: string;
  name: string;
  version: string;
  level: Level;
  /** 人数，可以是数字或 '4-8' 这样的文本 */
  players?: number | string;
  token: string;
  legacyKeys: string[];
  /** briefingName：简报里的名字；patterns：额外的识别正则（字符串），命中即认为进入该副本 */
  detect: { briefingName: string; patterns?: string[] };
  time: PackTime;
  remaining: PackRemaining;
  roles?: string[];
  rolesNote?: string;
  phases: Phase[];
  events: PackEvent[];
  docs: PackDoc[];
  /** 截止条件，如「至天亮」（CLAUDE.md 12.2） */
  deadline?: string;
  /** 预留：第三期直播功能在该副本中关闭 */
  disableLive?: boolean;
  /** 副API维护的隐藏状态字段；没有时只维护一个 summary（不超过150字） */
  stateFields?: StateField[];
  /** 预留：第四期赌坊是否在该副本内开放（默认不开放，赌坊只在回廊营业） */
  casino?: boolean;
  /** 休整副本：没有评级、奖励和失败扣分；不算清算副本（CLAUDE.md 第16节） */
  rest?: boolean;
  /** 副本专属弹幕（第三期直播）；phase 写了阶段 id 时只在这些阶段可抽 */
  danmaku?: DanmakuItem[];
}

export interface DanmakuItem {
  type: string;
  text: string;
  when?: string;
  scope?: string;
  phase?: string[];
}

/** 通用副本包的简报信息（名称、等级、目标、时限） */
export interface BriefingInfo {
  name: string;
  level?: string;
  goal?: string;
  limit?: string;
  players?: string;
  /** 通用副本包：入场时确定的轮数上限（CLAUDE.md 12.4） */
  rounds?: number;
}

export type ManualAction =
  | { kind: 'skip'; atIndex: number; targetPhase: string; targetRound: number }
  | { kind: 'setPhase'; atIndex: number; phase: string }
  | { kind: 'setRound'; atIndex: number; round: number }
  | { kind: 'end'; atIndex: number };

export interface Session {
  /** 会话标识，同时写在入场消息的快照里，用来确认入场消息是否仍然存在 */
  id: string;
  packId: string;
  packVersion: string;
  entryIndex: number;
  status: 'active' | 'ended';
  manual: ManualAction[];
  roles?: Record<string, string>;
  /** 玩家拒绝入场的记录（declineKey：消息下标:副本名）。没有会话时 chatMetadata.rlzc 只含这一项 */
  declined?: string[];
  /** 入场简报解析结果；通用副本包靠它重建 */
  briefing?: BriefingInfo;
}

export interface Snapshot {
  phase: string;
  round: number;
  clock?: string;
  injected: string[];
  /** 本楼注入的时限：文字，及倒计时的约剩/总时长分钟（CLAUDE.md 12.6） */
  limit?: { text: string; minutes?: number; total?: number };
  /** 副API对这一楼的整理结果（状态来源：最近一条带 sub.state 的楼） */
  sub?: import('../core/subapi').SubRecord;
  /** 生成这一楼时，因副API预判「条件不成立」而没有注入的事件 */
  skippedEvents?: { id: string; reason: string }[];
  /** 仅入场消息：所属会话 id */
  entry?: string;
  /** 本楼的积分流水条目（CLAUDE.md 第三期） */
  ledger?: LedgerEntry[];
  /** 积分核对：状态栏与账本不一致时记录（仅调试页显示） */
  ledgerMismatch?: { status: number; ledger: number };
}

/** 积分账本流水条目（存在 chat[i].extra.rlzc.ledger，CLAUDE.md 第三期） */
export interface LedgerEntry {
  delta: number;
  /** 变动来源，如 "直播打赏500×60%" 或 "副本结算·通关·S" */
  source: string;
  type: 'settle' | 'tag' | 'manual' | 'tip' | 'bet';
  /** 格式化时间，如 "9/24 13:02" */
  at: string;
}

/** 账本流水的展示形态（重放时附加消息下标，仅用于 UI 撤销） */
export interface LedgerDisplayEntry extends LedgerEntry {
  mesIndex: number;
}

/** chatMetadata.rlzc_ledger 的存储结构（CLAUDE.md 第三期） */
export interface LedgerMeta {
  /** 初始余额（来自状态栏读取或手动设置） */
  init?: { value: number; source: string; at: string };
  /** 手动补录的调整条目（不对应具体消息楼层） */
  adjust?: { amount: number; note: string; at: string }[];
  /** 待生效的等级/位格校正（CLAUDE.md 甲二.2） */
  fix?: { level?: string; rank?: string; at: string; afterIndex: number };
}

/** 简化的聊天消息（只列出本扩展用到的字段） */
export interface ChatMessage {
  mes: string;
  is_user?: boolean;
  is_system?: boolean;
  name?: string;
  /** ST 每次生成（含每个滑动）各自的时间戳 */
  send_date?: string | number;
  gen_started?: string | number | Date;
  gen_finished?: string | number | Date;
  extra?: Record<string, any> & { rlzc?: Snapshot };
}
