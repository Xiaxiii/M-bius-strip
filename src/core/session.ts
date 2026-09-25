import type { ChatMessage, ManualAction, Pack, Session } from '../packs/types';
import { BUILTIN_PACKS, buildGenericPack, GENERIC_PACK_ID } from '../packs/loader';
import { detectEntry, type EntryHit } from './detector';
import { isCountable } from './replay';

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
    return isCountable(chat[session.entryIndex]) ? session.entryIndex : -1;
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

/** 旧版把拒绝记录放在 chatMetadata.rlzc_declined；现在放在 chatMetadata.rlzc.declined，旧记录照常读取 */
export const DECLINED_KEY = 'rlzc_declined';

/** 拒绝记录的键：这条消息 + 这个副本 */
export function declineKey(index: number, name: string): string {
  return `${index}:${name}`;
}

export interface EntryCandidate extends EntryHit {
  index: number;
}

/** 算不算AI消息：与计轮口径一致（被 /hide 隐藏的AI回复也算） */
const isAi = isCountable;

/** 某一楼是否带入场信号（只看AI消息） */
export function entryCandidateAt(chat: ChatMessage[], index: number, packs: Pack[]): EntryCandidate | null {
  if (!isAi(chat[index])) return null;
  const hit = detectEntry(String(chat[index].mes ?? ''), packs);
  return hit ? { ...hit, index } : null;
}

/**
 * 从 from 到 to（含）找第一条带入场信号、且没被拒绝过的AI消息，作为入场消息（第1轮）。
 * from = 聊天开头，或上一个副本结算之后。
 */
export function firstEntryCandidate(
  chat: ChatMessage[],
  packs: Pack[],
  from: number,
  to: number,
  declined: string[] = [],
): EntryCandidate | null {
  for (let i = Math.max(0, from); i <= Math.min(to, chat.length - 1); i++) {
    const c = entryCandidateAt(chat, i, packs);
    if (c && !declined.includes(declineKey(i, c.info.name))) return c;
  }
  return null;
}

/**
 * 切换/加载聊天、切换开场白时的检查：只看 from 之后的第一条AI消息（通常是开场白）。
 * 已有进行中的会话、或玩家拒绝过这条消息时不返回。
 */
export function greetingEntryCandidate(
  chat: ChatMessage[],
  session: Session | null,
  declined: string[] = [],
  packs: Pack[] = BUILTIN_PACKS,
  from = 0,
): EntryCandidate | null {
  if (session?.status === 'active') return null;
  let index = -1;
  for (let i = Math.max(0, from); i < chat.length; i++) if (isAi(chat[i])) { index = i; break; }
  if (index < 0) return null;
  if (session && session.entryIndex === index) return null;
  const c = entryCandidateAt(chat, index, packs);
  if (!c || declined.includes(declineKey(index, c.info.name))) return null;
  return c;
}
