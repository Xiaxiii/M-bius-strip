import type { BriefingInfo, ChatMessage, ManualAction, Pack, Session } from '../packs/types';
import { buildGenericPack, GENERIC_PACK_ID } from '../packs/loader';
import { detectBriefing } from './detector';

/** 会话数据的纯逻辑部分；读写 chatMetadata 的部分在 src/st/ 与 src/index.ts */

export const META_KEY = 'rlzc';
/** 备忘录页签已删除（CLAUDE.md 11.9）；旧聊天里的 chatMetadata.rlzc_memo 原样保留，扩展不读也不删 */
export const MEMO_KEY = 'rlzc_memo';

export function newSessionId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export function createSession(pack: Pack, entryIndex: number, briefing?: Session['briefing']): Session {
  return {
    id: newSessionId(),
    packId: pack.id,
    packVersion: pack.version,
    entryIndex,
    status: 'active',
    manual: [],
    briefing,
  };
}

/** 读出的会话做最基本的形状检查，坏数据按“没有会话”处理 */
export function normalizeSession(raw: unknown): Session | null {
  const s = raw as Session;
  if (!s || typeof s !== 'object' || typeof s.packId !== 'string' || typeof s.entryIndex !== 'number') return null;
  if (!Array.isArray(s.manual)) s.manual = [];
  if (s.status !== 'ended') s.status = 'active';
  if (typeof s.id !== 'string') s.id = '';
  return s;
}

export function resolvePack(session: Session, packs: Pack[]): Pack | null {
  if (session.packId === GENERIC_PACK_ID) {
    return session.briefing ? buildGenericPack(session.briefing) : null;
  }
  return packs.find((p) => p.id === session.packId) ?? null;
}

/**
 * 找到入场消息的当前下标。入场消息上带有会话 id 标记（extra.rlzc.entry），
 * 删除前面的楼层导致下标变化时据此找回；标记消失即视为入场消息被删除，返回 -1。
 * 旧数据没有 id 时，只要原下标仍是AI消息就认可。
 */
export function locateEntry(chat: ChatMessage[], session: Session): number {
  const isEntry = (m: ChatMessage | undefined) => !!m && !m.is_user && m.extra?.rlzc?.entry === session.id;
  if (!session.id) {
    const m = chat[session.entryIndex];
    return m && !m.is_user && !m.is_system ? session.entryIndex : -1;
  }
  if (isEntry(chat[session.entryIndex])) return session.entryIndex;
  for (let i = chat.length - 1; i >= 0; i--) if (isEntry(chat[i])) return i;
  return -1;
}

/**
 * 删楼后的会话整理：入场消息下标变化时同步平移手动操作，丢弃落在聊天末尾之外的手动操作。
 * 返回 false 表示入场消息已不存在，会话应作废。
 */
export function reconcileSession(chat: ChatMessage[], session: Session): boolean {
  const idx = locateEntry(chat, session);
  if (idx < 0) return false;
  const delta = idx - session.entryIndex;
  if (delta !== 0) {
    session.entryIndex = idx;
    session.manual = session.manual.map((a) => ({ ...a, atIndex: a.atIndex + delta }) as ManualAction);
  }
  session.manual = session.manual.filter((a) => a.atIndex < chat.length && a.atIndex >= session.entryIndex);
  return true;
}

/** 有效角色登记：玩家/调试页手动登记优先，其次取正文里最新的一次 <角色登记> */
export function effectiveRoles(session: Session, fromChat?: Record<string, string>): Record<string, string> | undefined {
  const manual = session.roles && Object.keys(session.roles).length ? session.roles : undefined;
  if (!manual && !fromChat) return undefined;
  return { ...(fromChat ?? {}), ...(manual ?? {}) };
}

/** 玩家拒绝过的开场白简报记录（chatMetadata.rlzc_declined），避免每次加载聊天都弹窗 */
export const DECLINED_KEY = 'rlzc_declined';

export function declineKey(index: number, name: string): string {
  return `${index}:${name}`;
}

/**
 * 开场白入场检查：取聊天中第一条AI消息，若其中有副本简报，且当前没有进行中的会话、
 * 也不是某个已结束会话的入场消息、玩家也没有拒绝过，就返回它（以它为第1轮）。
 */
export function greetingEntryCandidate(
  chat: ChatMessage[],
  session: Session | null,
  declined: string[] = [],
): { index: number; info: BriefingInfo } | null {
  if (session?.status === 'active') return null;
  const index = chat.findIndex((m) => !!m && !m.is_user && !m.is_system);
  if (index < 0) return null;
  if (session && session.entryIndex === index) return null;
  const info = detectBriefing(String(chat[index].mes ?? ''));
  if (!info) return null;
  if (declined.includes(declineKey(index, info.name))) return null;
  return { index, info };
}
