import type { ChatMessage, Pack, Session } from '../src/packs/types';
import { BUILTIN_PACKS } from '../src/packs/loader';

export const zhonglou = BUILTIN_PACKS.find((p) => p.id === 'zhonglou') as Pack;

export const BRIEFING = [
  '海风很冷。',
  '「副本简报 - 钟楼」',
  '「人数：10人」',
  '「等级：S」',
  '「目标：存活三夜」',
  '「时限：以钟楼为准，至第四日日出」',
  '「简报：请按时鸣钟。」',
].join('\n');

export const ai = (mes = '……'): ChatMessage => ({ mes, is_user: false, extra: {} });
export const user = (mes = '我继续。'): ChatMessage => ({ mes, is_user: true, extra: {} });
export const sys = (mes = '系统'): ChatMessage => ({ mes, is_user: false, is_system: true, extra: {} });

/** 一段聊天：开场白 + 用户 + 简报(入场) + n-1 组 (用户, AI) */
export function chatWithRounds(n: number): ChatMessage[] {
  const chat: ChatMessage[] = [ai('开场白'), user('进入副本'), ai(BRIEFING)];
  for (let i = 1; i < n; i++) chat.push(user(), ai(`第${i + 1}条`));
  return chat;
}

export function session(overrides: Partial<Session> = {}): Session {
  return { id: '', packId: 'zhonglou', packVersion: '1.0.0', entryIndex: 2, status: 'active', manual: [], ...overrides };
}
