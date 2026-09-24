import { describe, expect, it } from 'vitest';
import { remainingMinutes, replay } from '../src/core/replay';
import { buildInjection } from '../src/core/injector';
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

describe('倒计时', () => {
  it('常规阶段第12轮：剩余 (50-12+10)×3 = 144 分钟', () => {
    const normal = wuming.phases[0];
    expect(remainingMinutes(wuming, normal, 12)).toBe(144);
    const p = run(chat(12));
    expect(p.phase.id).toBe('normal');
    expect(p.round).toBe(12);
    expect(p.currentRemainingText).toBe('剩余144分钟');
    // 注入按即将生成的第13轮计算
    expect(p.remainingText).toBe('剩余141分钟');
    expect(p.clock).toBeUndefined();
    const inj = buildInjection(wuming, p, session({ packId: 'wuming', entryIndex: 1 }));
    expect(inj.progress).toContain('本轮：第13/50轮　剩余141分钟');
  });

  it('入场时剩余 (50-1+10)×3 = 177 分钟；常规阶段结束后自动进入定稿', () => {
    expect(run(chat(1)).currentRemainingText).toBe('剩余177分钟');
    const p = run(chat(50));
    expect(p.phase.id).toBe('final');
    expect(p.round).toBe(0);
    expect(p.currentRemainingText).toBe('剩余30分钟');
    expect(p.next!.events.map((e) => e.id)).toEqual(['E02']);
  });

  it('<阶段切换>定稿</阶段切换> 提前进入定稿后，只按定稿剩余轮数计算', () => {
    const c = chat(12);
    c.push(user(), ai('她删掉了草稿。<阶段切换>定稿</阶段切换>'));
    let p = run(c);
    expect(p.phase.id).toBe('final');
    expect(p.currentRemainingText).toBe('剩余30分钟');
    c.push(user(), ai(), user(), ai(), user(), ai());
    p = run(c);
    expect(p.round).toBe(3);
    expect(p.currentRemainingText).toBe('剩余21分钟');
    expect(p.remainingText).toBe('剩余18分钟');
  });

  it('定稿最后一轮收播并要求结算；剩余时间不为负', () => {
    const c = chat(50);
    for (let i = 0; i < 9; i++) c.push(user(), ai());
    const p = run(c);
    expect(p.phase.id).toBe('final');
    expect(p.nextRound).toBe(10);
    expect(p.isLastRound).toBe(true);
    expect(p.next!.events.map((e) => e.id)).toEqual(['E03']);
    expect(p.remainingText).toBe('剩余0分钟');
    c.push(user(), ai(), user(), ai());
    expect(run(c).remainingText).toBe('剩余0分钟');
  });

  it('countdown 格式校验', () => {
    const bad = { ...wuming, id: 'x', time: { type: 'countdown' } };
    expect(validatePack(bad).join()).toContain('minutesPerRound');
    const mismatch = { ...wuming, id: 'y', time: { type: 'none' } };
    expect(validatePack(mismatch).join()).toContain('time.type 也必须是 countdown');
  });
});
