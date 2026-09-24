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

export interface PackDoc {
  title: string;
  md?: string;
  image?: string;
}

export type PackTime =
  | { type: 'clock'; dayStart: string; minutesPerRound: number }
  | { type: 'none' };

export type PackRemaining =
  | { type: 'nights'; template: string }
  | { type: 'fromPanel' };

export interface Pack {
  id: string;
  name: string;
  version: string;
  level: Level;
  players?: number;
  token: string;
  legacyKeys: string[];
  detect: { briefingName: string };
  time: PackTime;
  remaining: PackRemaining;
  roles?: string[];
  rolesNote?: string;
  phases: Phase[];
  events: PackEvent[];
  docs: PackDoc[];
  /** 预留：第三期直播功能在该副本中关闭 */
  disableLive?: boolean;
}

/** 通用副本包的简报信息（名称、等级、目标、时限） */
export interface BriefingInfo {
  name: string;
  level?: string;
  goal?: string;
  limit?: string;
  players?: string;
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
  /** 入场简报解析结果；通用副本包靠它重建 */
  briefing?: BriefingInfo;
}

export interface Snapshot {
  phase: string;
  round: number;
  clock?: string;
  injected: string[];
  /** 仅入场消息：所属会话 id */
  entry?: string;
}

/** 简化的聊天消息（只列出本扩展用到的字段） */
export interface ChatMessage {
  mes: string;
  is_user?: boolean;
  is_system?: boolean;
  name?: string;
  extra?: Record<string, any> & { rlzc?: Snapshot };
}
