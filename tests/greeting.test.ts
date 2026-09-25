import { describe, expect, it } from 'vitest';
import { declineKey, greetingEntryCandidate } from '../src/core/session';
import { replay } from '../src/core/replay';
import { ai, BRIEFING, session, sys, user, zhonglou } from './helpers';

describe('开场白入场检查', () => {
  it('开场白含简报：以开场白为第1轮', () => {
    const chat = [ai(BRIEFING)];
    const hit = greetingEntryCandidate(chat, null)!;
    expect(hit).toMatchObject({ index: 0, info: { name: '钟楼', level: 'S' } });
    const p = replay(chat, session({ entryIndex: hit.index }), zhonglou)!;
    expect(p.round).toBe(1);
    expect(p.nextRound).toBe(2);
    expect(p.firedEvents).toEqual(['E01']);
  });

  it('已经聊了几轮的旧聊天，重新加载时也能检查开场白', () => {
    const chat = [ai(BRIEFING), user(), ai(), user(), ai()];
    expect(greetingEntryCandidate(chat, null)?.index).toBe(0);
    const p = replay(chat, session({ entryIndex: 0 }), zhonglou)!;
    expect(p.round).toBe(3);
  });

  it('跳过开头的系统消息，取第一条AI消息', () => {
    expect(greetingEntryCandidate([sys('说明'), ai(BRIEFING)], null)?.index).toBe(1);
  });

  it('用户先说话时，第一条AI消息仍可被检查', () => {
    expect(greetingEntryCandidate([user('开始'), ai(BRIEFING)], null)?.index).toBe(1);
  });

  it('开场白没有简报时不弹', () => {
    expect(greetingEntryCandidate([ai('你醒了。'), user(), ai(BRIEFING)], null)).toBeNull();
  });

  it('已有进行中的会话时不弹', () => {
    expect(greetingEntryCandidate([ai(BRIEFING)], session({ entryIndex: 0 }))).toBeNull();
  });

  it('开场白上的会话已结束时不再弹', () => {
    expect(greetingEntryCandidate([ai(BRIEFING)], session({ entryIndex: 0, status: 'ended' }))).toBeNull();
  });

  it('玩家拒绝过则不再弹', () => {
    expect(greetingEntryCandidate([ai(BRIEFING)], null, [declineKey(0, '钟楼')])).toBeNull();
    expect(greetingEntryCandidate([ai(BRIEFING)], null, [declineKey(0, '别的')])?.index).toBe(0);
  });
});
