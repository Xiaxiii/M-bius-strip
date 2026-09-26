import { describe, expect, it, vi } from 'vitest';
import {
  buildSubPrompt,
  generationKey,
  callWithRetry,
  classifyError,
  formatState,
  lastNextChecks,
  latestSubState,
  parseSubResponse,
  shouldCallSub,
  subEventsToCheck,
  stripPanels,
  SubFormatError,
  SubTimeoutError,
  type SubRecord,
  type SubResult,
} from '../src/core/subapi';
import { replay } from '../src/core/replay';
import { buildInjection } from '../src/core/injector';
import { auditPanels } from '../src/core/audit';
import { BUILTIN_PACKS, validatePack } from '../src/packs/loader';
import type { ChatMessage, Pack } from '../src/packs/types';
import { ai, chatWithRounds, hidden, session, user, zhonglou } from './helpers';

const GOOD: SubResult = {
  events: [{ id: 'E11', status: 'done', reason: '写到了抄铭文' }],
  state: { crank: '挂在机房', clues: ['粉笔短线'] },
  next: [{ id: 'E12', ok: true, reason: '窃读者还在大厅' }],
};

/** 给第 i 楼写上副API结果（模拟 app 写进 chat[i].extra.rlzc.sub） */
function withSub(chat: ChatMessage[], i: number, sub: SubRecord) {
  chat[i].extra = { ...(chat[i].extra ?? {}), rlzc: { phase: 'x', round: 0, injected: [], ...(chat[i].extra?.rlzc ?? {}), sub } };
}

describe('解析返回', () => {
  it('正常 JSON', () => {
    expect(parseSubResponse(JSON.stringify(GOOD))).toEqual(GOOD);
  });

  it('带 ``` 标记和前后说明的 JSON 也能解析', () => {
    const raw = '好的，结果如下：\n```json\n' + JSON.stringify(GOOD, null, 2) + '\n```\n以上。';
    expect(parseSubResponse(raw).state).toEqual(GOOD.state);
  });

  it('乱码、缺 state 按格式错误处理', () => {
    expect(() => parseSubResponse('嗯……我不太确定')).toThrow(SubFormatError);
    expect(() => parseSubResponse('{"events":[]')).toThrow(SubFormatError);
    expect(() => parseSubResponse('{"events":[],"next":[]}')).toThrow(SubFormatError);
  });

  it('不合格的条目被丢掉', () => {
    const r = parseSubResponse('{"events":[{"id":"E1","status":"maybe"},{"id":"E2","status":"missed"}],"state":{},"next":[{"id":"E3","ok":"yes"}]}');
    expect(r.events.map((e) => e.id)).toEqual(['E2']);
    expect(r.next).toEqual([]);
  });
});

describe('调用与重试（副API用假函数模拟）', () => {
  const msgs = { system: 's', user: 'u' };

  it('返回正常 JSON：只调用一次', async () => {
    const call = vi.fn(async () => JSON.stringify(GOOD));
    expect((await callWithRetry(call, msgs)).state).toEqual(GOOD.state);
    expect(call).toHaveBeenCalledTimes(1);
  });

  it('返回乱码按失败处理，自动重试2次（共3次）后抛出', async () => {
    const call = vi.fn(async () => '乱码乱码');
    await expect(callWithRetry(call, msgs)).rejects.toBeInstanceOf(SubFormatError);
    expect(call).toHaveBeenCalledTimes(3);
  });

  it('前两次失败、第三次成功', async () => {
    let n = 0;
    const call = vi.fn(async () => {
      n++;
      if (n === 1) throw new Error('network');
      if (n === 2) return 'not json';
      return JSON.stringify(GOOD);
    });
    expect((await callWithRetry(call, msgs)).events).toHaveLength(1);
    expect(call).toHaveBeenCalledTimes(3);
  });

  it('失败原因分类', () => {
    expect(classifyError(new SubTimeoutError('x'))).toBe('超时');
    expect(classifyError(new SubFormatError('x'))).toBe('返回格式不对');
    expect(classifyError(new Error('401 Unauthorized'))).toBe('密钥无效');
    expect(classifyError(new Error('Incorrect API key provided'))).toBe('密钥无效');
    expect(classifyError(new Error('429 Too Many Requests insufficient_quota'))).toBe('额度不足');
    expect(classifyError(new Error('The operation was aborted'))).toBe('超时');
    expect(classifyError(new Error('boom'))).toBe('其他');
  });
});

describe('这一楼这一次生成的标识（同一次生成只检测一次）', () => {
  const msg = (over: Partial<ChatMessage> = {}): ChatMessage => ({ mes: '正文', is_user: false, send_date: 'September 25, 2026 1:43pm', gen_started: '2026-09-25T13:43:17.100Z', gen_finished: '2026-09-25T13:43:18.200Z', ...over });
  it('同一条消息得到同一个标识', () => expect(generationKey('c', 5, msg())).toBe(generationKey('c', 5, msg())));
  it('重新生成或滑动出的回复即使文字完全一样，也是新的一次', () => {
    expect(generationKey('c', 5, msg({ gen_started: '2026-09-25T13:44:00.000Z', gen_finished: '2026-09-25T13:44:01.000Z' }))).not.toBe(generationKey('c', 5, msg()));
  });
  it('正文被编辑或续写后标识改变', () => expect(generationKey('c', 5, msg({ mes: '正文。续写' }))).not.toBe(generationKey('c', 5, msg())));
  it('不同聊天、不同楼层不混淆', () => {
    expect(generationKey('c', 5, msg())).not.toBe(generationKey('d', 5, msg()));
    expect(generationKey('c', 5, msg())).not.toBe(generationKey('c', 7, msg()));
  });
});

describe('什么时候调用', () => {
  const base = { enabled: true, active: true, type: 'normal', saveMode: false, hasEvents: false, hasNextConditional: false };
  it('默认每轮都调用', () => expect(shouldCallSub(base)).toBe(true));
  it('关闭时不调用', () => expect(shouldCallSub({ ...base, enabled: false })).toBe(false));
  it('回廊中（没有进行中的副本）不调用', () => expect(shouldCallSub({ ...base, active: false })).toBe(false));
  it('continue 不调用', () => expect(shouldCallSub({ ...base, type: 'continue' })).toBe(false));
  it('打开只有开场白的聊天时 ST 补发的 first_message 不调用（开场白不是新生成的回复）', () =>
    expect(shouldCallSub({ ...base, type: 'first_message', hasEvents: true })).toBe(false));
  it('重新生成、滑动产生的新消息照常调用', () => {
    expect(shouldCallSub({ ...base, type: 'swipe' })).toBe(true);
    expect(shouldCallSub({ ...base, type: 'regenerate' })).toBe(true);
  });
  it('省钱模式：没有事件的轮不调用；有本轮事件或下一轮带条件事件时调用', () => {
    expect(shouldCallSub({ ...base, saveMode: true })).toBe(false);
    expect(shouldCallSub({ ...base, saveMode: true, hasEvents: true })).toBe(true);
    expect(shouldCallSub({ ...base, saveMode: true, hasNextConditional: true })).toBe(true);
  });
});

describe('隐藏状态的来源：最近一条带 sub 结果的AI消息', () => {
  it('状态写入消息 extra 后，重放取最近一条', () => {
    const chat = chatWithRounds(4); // 入场=2，AI 楼：2、4、6、8
    withSub(chat, 4, { ...GOOD, state: { crank: 'A' } });
    withSub(chat, 6, { ...GOOD, state: { crank: 'B' } });
    expect(latestSubState(chat, 2)).toEqual({ index: 6, state: { crank: 'B' } });
  });

  it('删掉最后一条AI消息：状态回到上一条的', () => {
    const chat = chatWithRounds(4);
    withSub(chat, 4, { ...GOOD, state: { crank: 'A' } });
    withSub(chat, 8, { ...GOOD, state: { crank: 'C' } });
    expect(latestSubState(chat, 2)!.state).toEqual({ crank: 'C' });
    chat.splice(7, 2);
    expect(latestSubState(chat, 2)).toEqual({ index: 4, state: { crank: 'A' } });
  });

  it('跳过的轮不算，沿用上一轮状态', () => {
    const chat = chatWithRounds(3);
    withSub(chat, 4, { ...GOOD, state: { crank: 'A' } });
    withSub(chat, 6, { skipped: true, error: '超时' });
    expect(latestSubState(chat, 2)!.state).toEqual({ crank: 'A' });
    expect(lastNextChecks(chat, 2)).toBeUndefined();
  });

  it('带状态的楼层被 /hide 隐藏后仍然有效（记忆扩展会隐藏旧楼层）', () => {
    const chat = chatWithRounds(4);
    withSub(chat, 4, { ...GOOD, state: { crank: 'A' } });
    withSub(chat, 6, { ...GOOD, state: { crank: 'B' } });
    chat[6] = hidden(chat[6]);
    expect(latestSubState(chat, 2)).toEqual({ index: 6, state: { crank: 'B' } });
    expect(lastNextChecks(chat, 2)).toBeUndefined(); // 最后一条AI消息（第8楼）没有预判
    withSub(chat, 8, { ...GOOD, state: { crank: 'C' } });
    chat[8] = hidden(chat[8]);
    expect(lastNextChecks(chat, 2)).toEqual(GOOD.next);
  });

  it('入场之前的记录不算', () => {
    const chat = [ai('旧'), user(), ...chatWithRounds(2).slice(2)];
    withSub(chat, 0, { ...GOOD });
    expect(latestSubState(chat, 2)).toBeNull();
  });
});

describe('下一轮事件的条件预判', () => {
  /** 第二日第30轮之后：下一轮是 E11（带条件） */
  const at30 = () => chatWithRounds(72 + 28 + 30);

  it('ok=false 的事件下一轮不注入，调试页有记录', () => {
    const chat = at30();
    const last = chat.length - 1;
    withSub(chat, last, { events: [], state: {}, next: [{ id: 'E11', ok: false, reason: '死者没去5F' }] });
    const p = replay(chat, session(), zhonglou)!;
    expect(p.next!.events.map((e) => e.id)).toEqual(['E11']);
    const inj = buildInjection(zhonglou, p, session(), { subNext: lastNextChecks(chat, 2) });
    expect(inj.injected).toEqual([]);
    expect(inj.turn).not.toContain('E11');
    expect(inj.skipped).toEqual([{ id: 'E11', reason: '死者没去5F' }]);

    // 生成出的这一楼快照记下跳过的事件 → 调试页警告
    chat.push(user(), ai('……'));
    chat[chat.length - 1].extra = { rlzc: { phase: '第二日·白天', round: 31, injected: [], skippedEvents: inj.skipped } };
    const p2 = replay(chat, session(), zhonglou)!;
    const w = auditPanels(chat, zhonglou, p2).warnings.filter((x) => x.kind === 'eventSkipped');
    expect(w.map((x) => x.text)).toEqual(['E11 条件不成立，已跳过：死者没去5F']);

    // 跳过的事件没有注入过，进度块的「已发生事件」里不能有它
    expect(p2.firedEvents).not.toContain('E11');
    expect(p2.firedEvents).toContain('E10');
    const inj2 = buildInjection(zhonglou, p2, session(), {});
    expect(inj2.progress).toMatch(/已发生事件：E01–E10\n?/);
    expect(inj2.progress).not.toContain('E11');
  });

  it('ok=true 时照常注入，条件已预判，不再把条件交给主AI', () => {
    const chat = at30();
    withSub(chat, chat.length - 1, { events: [], state: {}, next: [{ id: 'E11', ok: true, reason: '在5F' }] });
    const inj = buildInjection(zhonglou, replay(chat, session(), zhonglou)!, session(), { subNext: lastNextChecks(chat, 2) });
    expect(inj.injected).toEqual(['E11']);
    expect(inj.turn).toContain('- E11：');
    expect(inj.turn).not.toContain('（条件：');
  });

  it('没有预判结果时（副API关闭或失败）照第一期做法，把条件原文交给主AI', () => {
    const chat = at30();
    const inj = buildInjection(zhonglou, replay(chat, session(), zhonglou)!, session(), { subNext: undefined });
    expect(inj.injected).toEqual(['E11']);
    expect(inj.turn).toContain('（条件：');
  });

  it('events 里有 missed：调试页警告', () => {
    const chat = chatWithRounds(3);
    withSub(chat, 4, { events: [{ id: 'E02', status: 'missed', reason: '没写到布局者' }], state: {}, next: [] });
    const w = auditPanels(chat, zhonglou, replay(chat, session(), zhonglou)!).warnings.filter((x) => x.kind === 'eventMissed');
    expect(w).toMatchObject([{ index: 4, text: 'E02 未写出来：没写到布局者' }]);
  });
});

describe('提示词与状态注入', () => {
  it('输入去掉 <副本>、<状态栏> 等面板', () => {
    expect(stripPanels('正文。\n<副本>\n时限：1天\n</副本>\n<状态栏>HP</状态栏><角色登记>死者=甲</角色登记>')).toBe('正文。');
  });

  it('钟楼按 stateFields 维护字段；没有 stateFields 的副本只维护 summary', () => {
    const zl = buildSubPrompt({ pack: zhonglou, phaseName: '第一日·白天', round: 5, prevState: null, events: [], nextConditional: [], text: '正文<副本>面板</副本>' });
    for (const k of ['crank', 'watcher', 'positions', 'victim', 'clues', 'theories']) expect(zl.system).toContain(`- ${k}（`);
    expect(zl.user).toContain('【本轮正文】\n正文');
    expect(zl.user).not.toContain('面板');
    const basic = BUILTIN_PACKS.find((p) => p.id === 'xiyan') as Pack;
    const b = buildSubPrompt({ pack: basic, phaseName: '喜宴', round: 2, prevState: { summary: '到了村口' }, events: [], nextConditional: [], text: 'x' });
    expect(b.system).toContain('- summary（概况）：本副本目前的整体情况，不超过150字');
    expect(b.user).toContain('{"summary":"到了村口"}');
  });

  it('事件核对只发后台事件，不发「本轮写作要求」（directive 管的是整段剧情，单看一轮无从判断）', () => {
    expect(subEventsToCheck(zhonglou, ['E02', 'E03']).map((e) => e.id)).toEqual(['E02']);
    expect(subEventsToCheck(zhonglou, ['E03'])).toEqual([]);
  });

  it('区间事件在提示词里标明轮次范围：本轮没写到、也没写出相反的事实，算 done', () => {
    const e02 = zhonglou.events.find((e) => e.id === 'E02')!;
    const e11 = zhonglou.events.find((e) => e.id === 'E11')!;
    const p = buildSubPrompt({ pack: zhonglou, phaseName: '第一日·白天', round: 2, prevState: null, events: [e02, e11], nextConditional: [], text: 'x' });
    expect(p.user).toContain(`- E02（本阶段第2到60轮之间）：${e02.text}`);
    expect(p.user).toContain(`- E11：${e11.text}（条件：${e11.if}）`);
    expect(p.system).toContain('不一定在本轮写出');
  });

  it('rlzc_state 内容', () => {
    expect(formatState(zhonglou, { crank: '挂在机房', clues: ['粉笔短线', '铭文'], extra: 1 })).toBe(
      '［副本状态·仅供AI］\n曲柄当前在谁手里：挂在机房\n已被发现的关键线索：粉笔短线、铭文\nextra：1',
    );
    const chat = chatWithRounds(2);
    const inj = buildInjection(zhonglou, replay(chat, session(), zhonglou)!, session(), { stateText: '［副本状态·仅供AI］\n概况：x' });
    expect(inj.state).toBe('［副本状态·仅供AI］\n概况：x');
  });

  it('钟楼 1.4.0 带 stateFields，格式校验通过；类型不对时报错', () => {
    expect(zhonglou.version).toBe('1.4.0');
    expect(zhonglou.stateFields?.map((f) => f.key)).toEqual(['crank', 'watcher', 'positions', 'victim', 'clues', 'theories']);
    expect(validatePack(zhonglou)).toEqual([]);
    expect(validatePack({ ...zhonglou, id: 'x', stateFields: [{ key: 'a' }] }).join()).toContain('stateFields');
  });
});
