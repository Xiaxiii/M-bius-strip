import { describe, expect, it } from 'vitest';
import { formatMinutes, genericTiming, parseDurationMinutes, parseLimitPair } from '../src/core/timeLimit';
import { replay } from '../src/core/replay';
import { buildInjection } from '../src/core/injector';
import { resolveSkipTarget } from '../src/core/detector';
import { buildGenericPack, BUILTIN_PACKS } from '../src/packs/loader';
import type { ChatMessage, Pack } from '../src/packs/types';
import { ai, chatWithRounds, session, user, zhonglou } from './helpers';

const pack = (id: string) => BUILTIN_PACKS.find((p) => p.id === id) as Pack;
const xiyan = pack('xiyan');
const wuming = pack('wuming');

/** 钟楼：chatWithRounds(n) 之后，即将生成第 n+1 轮 */
const zl = (chat: ChatMessage[], s = session()) => replay(chat, s, zhonglou)!;

/** 以某个副本包入场：简报 + 若干条AI回复 */
function chatFor(name: string, replies: string[]): ChatMessage[] {
  const c: ChatMessage[] = [user('开始'), ai(`「副本简报 - ${name}」`)];
  for (const r of replies) c.push(user(), ai(r));
  return c;
}
const run = (c: ChatMessage[], p: Pack) => replay(c, session({ packId: p.id, entryIndex: 1 }), p)!;
const panel = (limit: string) => `正文\n<副本>\n时限：${limit}\n进度条：0\n</副本>`;

describe('约剩格式化与读取', () => {
  it('格式化：125→2小时5分，120→2小时，48→48分钟，0→0分钟', () => {
    expect(formatMinutes(125)).toBe('2小时5分');
    expect(formatMinutes(120)).toBe('2小时');
    expect(formatMinutes(48)).toBe('48分钟');
    expect(formatMinutes(0)).toBe('0分钟');
    expect(formatMinutes(-3)).toBe('0分钟');
  });

  it('读取：小时、分、分钟、天', () => {
    expect(parseDurationMinutes('约剩7小时48分')).toBe(468);
    expect(parseDurationMinutes('约剩5小时')).toBe(300);
    expect(parseDurationMinutes('30分钟')).toBe(30);
    expect(parseDurationMinutes('1天2小时')).toBe(1560);
    expect(parseDurationMinutes('以钟楼为准')).toBeNull();
    expect(parseLimitPair('约剩7小时48分/8小时')).toEqual({ remaining: 468, total: 480 });
    expect(parseLimitPair('约剩7小时48分／8小时')).toEqual({ remaining: 468, total: 480 });
    expect(parseLimitPair('约剩40分钟')).toEqual({ remaining: 40, total: null });
  });
});

describe('钟楼 X/Y 与时限文字', () => {
  it('第1、2、72、73、300轮', () => {
    // 第1轮 = 入场消息本身
    const entry = zl(chatWithRounds(1)).perMessage[2].limit!;
    expect([entry.x, entry.y]).toEqual([299, 300]);
    const at = (k: number) => zl(chatWithRounds(k - 1)).limit!;
    expect([at(2).x, at(2).y]).toEqual([298, 300]);
    expect([at(72).x, at(72).y]).toEqual([228, 300]);
    expect([at(73).x, at(73).y]).toEqual([227, 300]);
    expect([at(300).x, at(300).y]).toEqual([0, 300]);
    expect(zl(chatWithRounds(299)).phase.id).toBe('n3');
  });

  it('「剩余N夜」在每个夜晚结束后减1；截止条件来自包级 deadline', () => {
    const text = (k: number) => zl(chatWithRounds(k - 1)).limit!.text;
    expect(text(2)).toBe('至第四日日出·剩余3夜'); // 第一日
    expect(text(73)).toBe('至第四日日出·剩余3夜'); // 第一夜
    expect(text(101)).toBe('至第四日日出·剩余2夜'); // 第二日
    expect(text(173)).toBe('至第四日日出·剩余2夜'); // 第二夜
    expect(text(201)).toBe('至第四日日出·剩余1夜'); // 第三日
    expect(text(273)).toBe('至第四日日出·剩余1夜'); // 第三夜
  });

  it('钟楼没有约剩时间，注入要求照抄', () => {
    const p = zl(chatWithRounds(1));
    expect(p.limit!.minutes).toBeUndefined();
    const inj = buildInjection(zhonglou, p, session());
    expect(inj.turn.split('\n').pop()).toBe('本轮<副本>的时限一栏写：至第四日日出·剩余3夜（照抄）。');
    expect(inj.limit).toEqual({ text: '至第四日日出·剩余3夜' });
  });

  it('进入调查、审判后：Y=100，停摆文字，截止至审判结束', () => {
    const chat = chatWithRounds(201); // 第三日第1轮
    chat.push(user(), ai('发现尸体。<阶段切换>调查</阶段切换>'));
    let p = zl(chat);
    expect(p.phase.id).toBe('inv');
    expect(p.limit).toMatchObject({ x: 49 + 50, y: 100, text: '钟楼停摆·调查中', deadline: '至审判结束' });
    const inj = buildInjection(zhonglou, p, session());
    expect(inj.progress).toContain('本轮：第1/50轮　剩余99/100轮　时限：钟楼停摆·调查中　截止：至审判结束');
    expect(inj.turn.split('\n').pop()).toBe('本轮<副本>的时限一栏写：钟楼停摆·调查中（照抄）。');

    for (let i = 0; i < 10; i++) chat.push(user(), ai());
    p = zl(chat);
    expect(p.limit).toMatchObject({ x: 50 - 11 + 50, y: 100 });

    // 提前用标签进入审判：起点仍是调查，Y 仍为 100
    chat.push(user(), ai('<阶段切换>审判</阶段切换>'));
    p = zl(chat);
    expect(p.phase.id).toBe('trial');
    expect(p.limit).toMatchObject({ x: 49, y: 100, text: '钟楼停摆·审判中', deadline: '至审判结束' });
  });

  it('调查满50轮后自然进入审判', () => {
    const chat = chatWithRounds(201);
    chat.push(user(), ai('<阶段切换>调查</阶段切换>'));
    for (let i = 0; i < 50; i++) chat.push(user(), ai());
    const p = zl(chat);
    expect(p.phase.id).toBe('trial');
    expect(p.limit).toMatchObject({ x: 49, y: 100, text: '钟楼停摆·审判中' });
  });

  it('跳过（跳到日落）后的 X', () => {
    const chat = chatWithRounds(40);
    const p0 = zl(chat);
    const t = resolveSkipTarget(zhonglou, p0.phase, p0.round, '日落')!;
    const s = session({ manual: [{ kind: 'skip', atIndex: chat.length - 1, targetPhase: t.phase, targetRound: t.round }] });
    const p = zl(chat, s);
    expect(p.nextRound).toBe(72);
    expect(p.limit).toMatchObject({ x: 300 - 72, y: 300 });
  });
});

describe('污名（倒计时，80轮）', () => {
  it('入场那一轮 X = Y − 1；约剩分钟 = X × 3', () => {
    const p = run(chatFor('污名', []), wuming);
    expect(p.perMessage[1].limit).toMatchObject({ x: 79, y: 80 });
    expect(p.limit).toMatchObject({ x: 78, y: 80, minutes: 78 * 3, total: 240, text: '约剩3小时54分/4小时' });
    expect(p.remainingText).toBe('剩余234分钟');
    const inj = buildInjection(wuming, p, session({ packId: 'wuming', entryIndex: 1 }));
    // 轮次写「当前阶段轮次/当前阶段上限」，剩余分钟 = 约剩分钟
    expect(inj.progress).toContain('本轮：第2/60轮　剩余78/80轮　时限：约剩3小时54分/4小时　剩余234分钟　截止：至收播');
    expect(inj.turn.split('\n').pop()).toBe(
      '本轮<副本>的时限一栏写：约剩3小时54分/4小时。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。',
    );
    expect(inj.limit).toEqual({ text: '约剩3小时54分/4小时', minutes: 234, total: 240 });
  });

  it('正常走完80轮：常规60轮后进入定稿，定稿第20轮收播', () => {
    const replies = Array.from({ length: 59 }, () => '……');
    let p = run(chatFor('污名', replies), wuming);
    expect(p.phase.id).toBe('final');
    expect(p.limit).toMatchObject({ x: 19, y: 80, minutes: 57 });
    for (let i = 0; i < 19; i++) replies.push('……');
    p = run(chatFor('污名', replies), wuming);
    expect(p.nextRound).toBe(20);
    expect(p.next!.events.map((e) => e.id)).toEqual(['E03']);
    expect(p.limit).toMatchObject({ x: 0, y: 80, minutes: 0, text: '约剩0分钟/4小时' });
    replies.push('收播。<副本结算>结果=通关</副本结算>');
    expect(run(chatFor('污名', replies), wuming).ended).toBe(true);
  });

  it('第30轮 <阶段切换>定稿</阶段切换> 提前进入定稿：X = 20 − 定稿轮次，Y 仍为 80', () => {
    const replies = Array.from({ length: 28 }, () => '……');
    replies.push('她删掉了草稿。<阶段切换>定稿</阶段切换>'); // 第30轮
    let p = run(chatFor('污名', replies), wuming);
    expect(p.phase.id).toBe('final');
    expect(p.limit).toMatchObject({ x: 19, y: 80, minutes: 57 });
    replies.push('……', '……', '……');
    p = run(chatFor('污名', replies), wuming);
    expect(p.nextRound).toBe(4);
    expect(p.limit).toMatchObject({ x: 16, y: 80, minutes: 48, text: '约剩48分钟/4小时' });
  });
});

describe('喜宴（每轮至少3分钟，只减不增）', () => {
  it('约剩上限 = X × 3，总时长8小时', () => {
    const p = run(chatFor('喜宴', ['……']), xiyan);
    expect(p.limit).toMatchObject({ x: 157, y: 160, minutes: 471, total: 480, text: '约剩7小时51分/8小时' });
  });

  it('上一轮AI写的约剩更小时取更小的', () => {
    const p = run(chatFor('喜宴', [panel('约剩5小时/8小时')]), xiyan);
    expect(p.limit!.minutes).toBe(297);
    expect(p.limit!.text).toBe('约剩4小时57分/8小时');
  });

  it('上一轮AI写得更大时仍按上限', () => {
    const p = run(chatFor('喜宴', [panel('约剩9小时/8小时')]), xiyan);
    expect(p.limit!.minutes).toBe(157 * 3);
  });

  it('上一轮没有 <副本> 时按上限', () => {
    const p = run(chatFor('喜宴', [panel('约剩5小时/8小时'), '只有正文']), xiyan);
    expect(p.limit!.minutes).toBe(156 * 3);
  });

  it('剩余时间可以比轮数先用完，最小为0', () => {
    const p = run(chatFor('喜宴', [panel('约剩2分钟/8小时')]), xiyan);
    expect(p.limit).toMatchObject({ minutes: 0, text: '约剩0分钟/8小时' });
    expect(p.limit!.x).toBe(157);
  });

  it('删掉上一楼后重新按重放计算', () => {
    const c = chatFor('喜宴', [panel('约剩5小时/8小时'), panel('约剩1小时/8小时')]);
    expect(run(c, xiyan).limit!.minutes).toBe(57);
    c.splice(-2, 2);
    expect(run(c, xiyan).limit!.minutes).toBe(297);
  });
});

describe('其他内置包', () => {
  it('游戏12小时（90轮×8分钟）、考试5小时（100轮×3分钟）', () => {
    expect(run(chatFor('游戏', []), pack('youxi')).limit).toMatchObject({ y: 90, total: 720, deadline: '至结算' });
    expect(run(chatFor('游戏', []), pack('youxi')).limit!.text).toMatch(/\/12小时$/);
    expect(run(chatFor('考试', []), pack('kaoshi')).limit).toMatchObject({ y: 100, total: 300, deadline: '至考试结束' });
    expect(run(chatFor('考试', []), pack('kaoshi')).limit!.text).toMatch(/\/5小时$/);
  });

  it('境界游乐园没有轮数上限，不计算也不注入', () => {
    const jj = pack('jingjie');
    const p = run(chatFor('境界游乐园', []), jj);
    expect(p.limit).toBeUndefined();
    const inj = buildInjection(jj, p, session({ packId: 'jingjie', entryIndex: 1 }));
    expect(inj.turn).not.toContain('时限一栏');
    expect(inj.progress).not.toContain('剩余');
  });
});

describe('通用副本包', () => {
  it('「时限：10小时」、C级 → 90轮、每轮7分钟', () => {
    expect(genericTiming('10小时', 'C')).toEqual({ rounds: 90, totalMinutes: 600, minutesPerRound: 7 });
    const g = buildGenericPack({ name: '雾港', level: 'C', limit: '10小时' });
    expect(g.phases).toEqual([{ id: 'main', name: '雾港', cap: 90, next: null }]);
    expect(g.time).toEqual({ type: 'countdown', minutesPerRound: 7 });
  });

  it('「时限：10小时（最多100轮）」→ 100轮、每轮6分钟', () => {
    expect(genericTiming('10小时（最多100轮）', 'C')).toEqual({ rounds: 100, totalMinutes: 600, minutesPerRound: 6 });
    expect(genericTiming('10小时(最多100轮)', 'S').rounds).toBe(100);
  });

  it('「时限：以钟楼为准」→ 只计轮，不注入约剩', () => {
    expect(genericTiming('以钟楼为准', 'S')).toEqual({ rounds: 200 });
    const g = buildGenericPack({ name: '钟塔', level: 'S', limit: '以钟楼为准' });
    expect(g.time).toEqual({ type: 'none' });
    const p = run(chatFor('钟塔', []), g);
    expect(p.limit).toMatchObject({ x: 198, y: 200 });
    expect(p.limit!.text).toBeUndefined();
    const inj = buildInjection(g, p, session({ packId: 'generic', entryIndex: 1 }));
    expect(inj.progress).toContain('剩余198/200轮');
    expect(inj.turn).not.toContain('时限一栏');
  });

  it('按等级取默认轮数，设置可改；入场时记下的轮数优先', () => {
    expect(genericTiming('3天', 'D').rounds).toBe(70);
    expect(genericTiming('3天', 'A', { D: 70, C: 90, B: 110, A: 50, S: 200 })).toEqual({ rounds: 50, totalMinutes: 4320, minutesPerRound: 86 });
    expect(buildGenericPack({ name: 'x', level: 'B', limit: '8小时', rounds: 40 }).phases[0].cap).toBe(40);
  });

  it('五行简报（没有目标行）照常识别', async () => {
    const { detectBriefing } = await import('../src/core/detector');
    const info = detectBriefing('「副本简报 - 雾港」\n「人数：6人」\n「等级：C」\n「时限：10小时」\n「简报：请找到灯塔。」')!;
    expect(info).toMatchObject({ name: '雾港', level: 'C', limit: '10小时' });
    expect(info.goal).toBeUndefined();
    const inj = buildInjection(buildGenericPack(info), run(chatFor('雾港', []), buildGenericPack(info)), session({ packId: 'generic', entryIndex: 1 }), { briefing: info });
    expect(inj.progress).not.toContain('目标');
  });
});
