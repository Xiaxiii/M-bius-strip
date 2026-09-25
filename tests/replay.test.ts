import { describe, expect, it } from 'vitest';
import { clockAt, planRound, replay, SKIP_BATCH } from '../src/core/replay';
import { buildInjection } from '../src/core/injector';
import { locateEntry, reconcileSession } from '../src/core/session';
import { resolveSkipTarget } from '../src/core/detector';
import type { Pack } from '../src/packs/types';
import { ai, chatWithRounds, hidden, session, sys, user, zhonglou } from './helpers';

const phaseId = (chat = chatWithRounds(1), s = session()) => replay(chat, s, zhonglou)!;

describe('阶段与轮次', () => {
  it('入场消息算第一日第1轮', () => {
    const p = phaseId();
    expect(p.phase.id).toBe('d1');
    expect(p.round).toBe(1);
    expect(p.nextRound).toBe(2);
    expect(p.firedEvents).toEqual(['E01']);
  });

  it('连续 N 条 AI 消息，阶段与轮次正确', () => {
    const p = phaseId(chatWithRounds(31));
    expect(p.phase.id).toBe('d1');
    expect(p.round).toBe(31);
    expect(p.nextRound).toBe(32);
  });

  it('第72轮后进入第一夜', () => {
    const p71 = phaseId(chatWithRounds(71));
    expect(p71.phase.id).toBe('d1');
    expect(p71.isLastRound).toBe(true);
    const p = phaseId(chatWithRounds(72));
    expect(p.phase.id).toBe('n1');
    expect(p.round).toBe(0);
    expect(p.nextRound).toBe(1);
    expect(p.remainingText).toBe('剩余3夜');
    const p100 = phaseId(chatWithRounds(72 + 28 + 31));
    expect(p100.phase.id).toBe('d2');
    expect(p100.round).toBe(31);
    expect(p100.remainingText).toBe('剩余2夜');
  });

  it('钟时：第1轮 12:00、第19轮 1:30、第72轮 5:55', () => {
    expect(clockAt('12:00', 5, 1)).toBe('12:00');
    expect(clockAt('12:00', 5, 19)).toBe('1:30');
    expect(clockAt('12:00', 5, 72)).toBe('5:55');
    expect(phaseId(chatWithRounds(18)).clock).toBe('1:30');
    expect(phaseId(chatWithRounds(18)).currentClock).toBe('1:25');
    // 夜晚阶段不显示钟时
    expect(phaseId(chatWithRounds(73)).clock).toBeUndefined();
  });

  it('用户消息、系统消息不计轮', () => {
    const chat = chatWithRounds(5);
    chat.push(user(), sys(), user(), sys('/comment 备注', 'comment'));
    expect(phaseId(chat).round).toBe(5);
  });

  it('被 /hide 隐藏的AI回复仍然计轮（记忆扩展会隐藏旧楼层）', () => {
    const chat = chatWithRounds(6);
    // 柏宝书默认只留最近3条AI回复，更早的楼层（含入场简报、用户消息）都会被隐藏
    for (let i = 0; i < chat.length - 6; i++) chat[i] = hidden(chat[i]);
    const p = phaseId(chat);
    expect(p.round).toBe(6);
    expect(p.nextRound).toBe(7);
    expect(p.perMessage[2]?.round).toBe(1);
  });

  it('删除最后一条 AI 消息后轮次减一', () => {
    const chat = chatWithRounds(10);
    expect(phaseId(chat).round).toBe(10);
    chat.pop();
    expect(phaseId(chat).round).toBe(9);
  });

  it('<阶段切换>调查</阶段切换> 之后进入调查阶段，轮次从1开始', () => {
    const chat = chatWithRounds(5);
    chat.push(user(), ai('尸体……\n<阶段切换>调查</阶段切换>'));
    let p = phaseId(chat);
    expect(p.phase.id).toBe('inv');
    expect(p.round).toBe(0);
    expect(p.nextRound).toBe(1);
    expect(p.next!.events.map((e) => e.id)).toEqual(['E28']);
    chat.push(user(), ai('调查开始'));
    p = phaseId(chat);
    expect(p.round).toBe(1);
    expect(p.clock).toBeUndefined();
    expect(p.remainingText).toBeUndefined();
  });

  it('结算标签之后状态为 ended；删掉结算消息后恢复 active', () => {
    const chat = chatWithRounds(5);
    chat.push(user(), ai('结束了。<副本结算>结果=通关｜评价=A</副本结算>'));
    let p = phaseId(chat);
    expect(p.ended).toBe(true);
    expect(p.endedBy).toBe('tag');
    expect(p.settlement?.result).toBe('通关');
    expect(p.settlement?.rating).toBe('A');
    expect(p.next).toBeNull();
    chat.pop();
    p = phaseId(chat);
    expect(p.ended).toBe(false);
  });

  it('手动操作在 atIndex 之后生效', () => {
    const chat = chatWithRounds(5);
    const s = session({ manual: [{ kind: 'setRound', atIndex: chat.length - 1, round: 40 }] });
    expect(phaseId(chat, s).nextRound).toBe(41);
    const s2 = session({ manual: [{ kind: 'setPhase', atIndex: 4, phase: 'd2' }] });
    // atIndex 4 是第2轮 AI 消息，之后再有3条 AI 消息
    const p = phaseId(chat, s2);
    expect(p.phase.id).toBe('d2');
    expect(p.round).toBe(3);
    const s3 = session({ manual: [{ kind: 'end', atIndex: chat.length - 1 }] });
    expect(phaseId(chat, s3).endedBy).toBe('manual');
  });
});

describe('入场消息', () => {
  it('删除入场消息后会话作废', () => {
    const chat = chatWithRounds(3);
    const s = session({ id: 'abc' });
    chat[2].extra = { rlzc: { phase: 'd1', round: 1, injected: [], entry: 'abc' } };
    expect(locateEntry(chat, s)).toBe(2);
    chat.splice(0, 1); // 删掉前面的楼层：下标平移
    expect(reconcileSession(chat, s)).toBe(true);
    expect(s.entryIndex).toBe(1);
    expect(replay(chat, s, zhonglou)!.round).toBe(3);
    chat.splice(1, 1); // 删掉入场消息本身
    expect(locateEntry(chat, s)).toBe(-1);
    expect(reconcileSession(chat, s)).toBe(false);
  });

  it('入场消息被 /hide 隐藏：会话照常，不当作删除', () => {
    const chat = chatWithRounds(4);
    const s = session({ id: 'abc' });
    chat[2].extra = { rlzc: { phase: 'd1', round: 1, injected: [], entry: 'abc' } };
    chat[2] = hidden(chat[2]);
    expect(locateEntry(chat, s)).toBe(2);
    expect(reconcileSession(chat, s)).toBe(true);
    expect(replay(chat, s, zhonglou)!.round).toBe(4);
    // 没有会话 id 的旧数据也一样
    const old = session();
    expect(locateEntry(chat, old)).toBe(2);
    expect(replay(chat, old, zhonglou)!.round).toBe(4);
  });

  it('入场下标越界时重放返回 null', () => {
    expect(replay([ai()], session(), zhonglou)).toBeNull();
  });
});

describe('本轮事件选择', () => {
  it('区间事件只在起始轮注入一次', () => {
    // E02、E03 从第2轮开始
    let p = phaseId(chatWithRounds(1));
    expect(p.next!.events.map((e) => e.id)).toEqual(['E02', 'E03']);
    for (const n of [2, 3, 30, 59]) {
      p = phaseId(chatWithRounds(n));
      expect(p.next!.events).toEqual([]);
    }
    p = phaseId(chatWithRounds(71));
    expect(p.next!.events.map((e) => e.id)).toEqual(['E04']);
  });

  it('区间事件加前缀，占位符替换为登记姓名', () => {
    const chat = chatWithRounds(1);
    const p = phaseId(chat);
    const inj = buildInjection(zhonglou, p, session(), { roles: { 布局者: '林默' } });
    expect(inj.token).toBe('【副本进行中：钟楼】');
    expect(inj.turn).toContain('- E02：在本阶段第2到60轮之间发生：林默独自读完');
    expect(inj.turn).not.toContain('<角色登记>');
    expect(buildInjection(zhonglou, p, session()).turn).toContain('<角色登记>死者=姓名｜布局者=姓名');
    expect(inj.progress).toContain('本轮：第2/72轮　剩余298/300轮　钟时：12:05　时限：至第四日日出·剩余3夜');
    expect(inj.progress).toContain('已发生事件：E01');
  });

  it('跳过跨越12个事件时，分三次注入（5、5、2）', () => {
    const pack: Pack = {
      ...zhonglou,
      id: 'skiptest',
      roles: [],
      phases: [{ id: 'p', name: '白天', cap: 40, next: null }],
      events: Array.from({ length: 12 }, (_, i) => ({
        id: `X${String(i + 1).padStart(2, '0')}`,
        phase: 'p',
        from: 3 * (i + 1),
        to: 3 * (i + 1),
        text: `事件${i + 1}`,
        kind: 'event' as const,
      })),
    };
    const chat = chatWithRounds(1);
    const s = session({ manual: [{ kind: 'skip', atIndex: chat.length - 1, targetPhase: 'p', targetRound: 40 }] });
    const sizes: number[] = [];
    const rounds: number[] = [];
    for (let k = 0; k < 4; k++) {
      const p = replay(chat, s, pack)!;
      if (!p.next!.skipFrom && k > 0) break;
      sizes.push(p.next!.events.length);
      rounds.push(p.next!.round);
      chat.push(user(), ai());
    }
    expect(SKIP_BATCH).toBe(5);
    expect(sizes).toEqual([5, 5, 2]);
    expect(rounds).toEqual([15, 30, 40]);
    const done = replay(chat, s, pack)!;
    expect(done.round).toBe(40);
    expect(done.skipGoal).toBeNull();
    expect(done.firedEvents).toHaveLength(12);
  });

  it('跳到日落：推进到白天最后一轮并要求写日落', () => {
    const chat = chatWithRounds(40);
    const p0 = phaseId(chat);
    const target = resolveSkipTarget(zhonglou, p0.phase, p0.round, '日落')!;
    expect(target).toMatchObject({ phase: 'd1', round: 72 });
    const s = session({ manual: [{ kind: 'skip', atIndex: chat.length - 1, targetPhase: target.phase, targetRound: target.round }] });
    const p = replay(chat, s, zhonglou)!;
    expect(p.next!.round).toBe(72);
    expect(p.next!.events.map((e) => e.id)).toEqual(['E04']);
    expect(p.isLastRound).toBe(true);
    const inj = buildInjection(zhonglou, p, s);
    expect(inj.turn).toContain('快进到第72轮');
    expect(inj.turn).toContain('请在本轮结尾自然写出日落');
  });

  it('跨阶段跳过（白天睡到天亮）', () => {
    const chat = chatWithRounds(70);
    const p0 = phaseId(chat);
    const target = resolveSkipTarget(zhonglou, p0.phase, p0.round, '天亮')!;
    expect(target).toMatchObject({ phase: 'n1', round: 28 });
    const s = session({ manual: [{ kind: 'skip', atIndex: chat.length - 1, targetPhase: 'n1', targetRound: 28 }] });
    let p = replay(chat, s, zhonglou)!;
    expect(p.next!.round).toBe(72);
    chat.push(user(), ai());
    p = replay(chat, s, zhonglou)!;
    expect(p.phase.id).toBe('n1');
    expect(p.next!.round).toBe(28);
    expect(p.next!.events.map((e) => e.id)).toEqual(['E05', 'E06']);
  });

  it('planRound 不跳过时只取 from 等于下一轮的事件', () => {
    const d2 = zhonglou.phases.find((p) => p.id === 'd2')!;
    expect(planRound(zhonglou, d2, 30, null).events.map((e) => e.id)).toEqual(['E11']);
  });
});

describe('注入', () => {
  it('无会话或已结束时不注入', () => {
    expect(buildInjection(zhonglou, null, null).token).toBe('');
    const chat = chatWithRounds(2);
    chat.push(user(), ai('<副本结算>结果=失败</副本结算>'));
    const p = phaseId(chat);
    expect(buildInjection(zhonglou, p, session()).progress).toBe('');
  });

  it('条件事件带条件说明', () => {
    const chat = chatWithRounds(72 + 28 + 30);
    const p = phaseId(chat);
    expect(p.phase.id).toBe('d2');
    expect(p.nextRound).toBe(31);
    const inj = buildInjection(zhonglou, p, session(), { roles: { 死者: '周遥' } });
    expect(inj.turn).toContain('- E11：周遥在5F西侧外壁抄下铭文');
    expect(inj.turn).toContain('（条件：周遥已到达5F西侧且未被阻止。若条件已不成立，此事件不发生，也不补写替代事件）');
    expect(inj.turn).toContain('{{user}}');
    // 第二日第31轮 = 总第131轮，剩余 300 − 131 = 169 轮
    expect(inj.progress).toContain('本轮：第31/72轮　剩余169/300轮　钟时：2:30　时限：至第四日日出·剩余2夜');
  });
});
