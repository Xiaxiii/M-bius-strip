import { describe, expect, it } from 'vitest';
import { replay } from '../src/core/replay';
import { BUILTIN_PACKS, validatePack } from '../src/packs/loader';
import { isLiveAllowed } from '../src/reserved/live';
import type { ChatMessage, Pack } from '../src/packs/types';
import { ai, session, user } from './helpers';

const wuming = BUILTIN_PACKS.find((p) => p.id === 'wuming') as Pack;
const BRIEF = '「副本简报 - 污名」\n「等级：B」';

/** 入场简报 + 共 n 条 AI 消息 */
function chat(n: number): ChatMessage[] {
  const c: ChatMessage[] = [user('开始'), ai(BRIEF)];
  for (let i = 1; i < n; i++) c.push(user(), ai());
  return c;
}
const run = (c: ChatMessage[]) => replay(c, session({ packId: 'wuming', entryIndex: 1 }), wuming)!;

describe('污名副本包', () => {
  it('内置并通过格式校验', () => {
    expect(wuming).toBeDefined();
    expect(wuming.name).toBe('污名');
    expect(wuming.players).toBe('4-8');
    expect(validatePack(wuming)).toEqual([]);
  });

  it('disableLive：直播在该副本关闭，其他副本不受影响', () => {
    expect(wuming.disableLive).toBe(true);
    expect(isLiveAllowed(wuming)).toBe(false);
    expect(isLiveAllowed(BUILTIN_PACKS.find((p) => p.id === 'zhonglou'))).toBe(true);
    expect(isLiveAllowed(null)).toBe(false);
  });

  it('docs 为空数组', () => {
    expect(wuming.docs).toEqual([]);
  });
});

describe('倒计时（60+20轮，每轮3分钟）', () => {
  it('常规第12轮：X = 60−12+20 = 68，约剩 68×3 = 204 分钟', () => {
    const p = run(chat(11));
    expect(p.phase.id).toBe('normal');
    expect(p.nextRound).toBe(12);
    expect(p.limit).toMatchObject({ x: 68, y: 80, minutes: 204, total: 240 });
    expect(p.remainingText).toBe('剩余204分钟');
    expect(p.clock).toBeUndefined();
  });

  it('countdown 格式校验', () => {
    const bad = { ...wuming, id: 'x', time: { type: 'countdown' } };
    expect(validatePack(bad).join()).toContain('minutesPerRound');
    const mismatch = { ...wuming, id: 'y', time: { type: 'none' } };
    expect(validatePack(mismatch).join()).toContain('time.type 也必须是 countdown');
  });

  it('包级与阶段 deadline 必须是文本', () => {
    expect(validatePack({ ...wuming, id: 'z', deadline: 3 }).join()).toContain('deadline');
    expect(validatePack({ ...wuming, id: 'z', phases: [{ id: 'a', name: 'A', cap: 3, next: null, deadline: 1 }] }).join()).toContain('deadline');
  });
});
