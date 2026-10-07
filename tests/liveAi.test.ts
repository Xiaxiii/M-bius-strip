/** 直播：AI 生成弹幕、rlzc_live 注入（第三期b-第4段） */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { installFakeSt } from './fakeSt';
import { autoAnswerEntryCards } from './entryCard';
import * as app from '../src/app';
import { installLiveApi, releaseAll } from '../src/st/liveApi';
import {
  buildDanmakuPrompt,
  DANMAKU_STYLE,
  formatLiveInjection,
  parseDanmakuResponse,
  askCount,
  keepCount,
  danmakuMaxTokens,
  pickSamples,
  shouldGenAiDanmaku,
  stripForAudience,
} from '../src/core/liveAi';
import type { LiveRecord, LiveView } from '../src/core/liveFlow';
import { BRIEFING, zhonglou } from './helpers';
import type { ChatMessage } from '../src/packs/types';

// ─────────────────── 纯函数 ───────────────────

describe('AI 弹幕的生成时机', () => {
  const base = { aiOn: true, roundInShow: 1, freq: 3, phaseSwitch: false, hurt: false, eventDone: false };

  it('每 N 轮一次', () => {
    const hits = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((r) => shouldGenAiDanmaku({ ...base, roundInShow: r }));
    expect(hits).toEqual([3, 6, 9]);
    const every2 = [1, 2, 3, 4].filter((r) => shouldGenAiDanmaku({ ...base, roundInShow: r, freq: 2 }));
    expect(every2).toEqual([2, 4]);
    expect([1, 2].every((r) => shouldGenAiDanmaku({ ...base, roundInShow: r, freq: 1 }))).toBe(true);
  });

  it('关键事件那轮加一次：阶段切换、有人受伤或死亡、注入事件已发生', () => {
    expect(shouldGenAiDanmaku({ ...base, phaseSwitch: true })).toBe(true);
    expect(shouldGenAiDanmaku({ ...base, hurt: true })).toBe(true);
    expect(shouldGenAiDanmaku({ ...base, eventDone: true })).toBe(true);
  });

  it('「新弹幕」关着时不生成', () => {
    expect(shouldGenAiDanmaku({ ...base, roundInShow: 3, aiOn: false })).toBe(false);
    expect(shouldGenAiDanmaku({ ...base, roundInShow: 3, hurt: true, aiOn: false })).toBe(false);
  });
});

describe('AI 弹幕请求与解析', () => {
  it('输入只有正文、副本名、角色名、风格说明、语气示例；去掉面板与机器标签', () => {
    const m = buildDanmakuPrompt({
      scene: '钟楼',
      texts: ['第一段。<副本>时限：至第四日日出</副本>', '谈缘上了楼。<阶段切换>第一夜</阶段切换>\n<状态栏>\n积分：1200\n</状态栏>'],
      cast: ['谈缘', '周遥'],
      samples: ['主播好稳', '平安出来'],
    });
    expect(m.system).toContain(DANMAKU_STYLE);
    expect(m.system).toContain('[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]');
    expect(m.user).toContain('【直播间】钟楼');
    expect(m.user).toContain('谈缘、周遥');
    expect(m.user).toContain('第一段。');
    expect(m.user).toContain('谈缘上了楼。');
    expect(m.user).toContain('- 主播好稳');
    for (const bad of ['<副本>', '时限', '<状态栏>', '积分', '阶段切换', '第一夜']) expect(m.user).not.toContain(bad);
  });

  it('stripForAudience 去掉机器标签连同内容', () => {
    expect(stripForAudience('a<积分变动>+10｜x</积分变动>b<角色登记>死者=甲</角色登记>c<i>d</i>')).toBe('abcd');
  });

  it('解析方式同事件检测：去掉 ``` 标记，取 JSON 数组', () => {
    const list = parseDanmakuResponse('```json\n[{"type":"praise","name":"小满","text":"好稳"},{"type":"x","text":"嗯"}]\n```');
    expect(list).toEqual([
      { type: 'praise', name: '小满', text: '好稳' },
      { type: 'discuss', name: '匿名', text: '嗯' },
    ]);
    expect(() => parseDanmakuResponse('没有')).toThrow();
    expect(() => parseDanmakuResponse('[]')).toThrow();
  });

  it('提示词里要的条数比需要的多3条，至少8条；解析按上限截取', () => {
    expect(askCount(6)).toBe(9);
    expect(askCount(1)).toBe(8);
    expect(askCount(25)).toBe(28);
    const m = buildDanmakuPrompt({ scene: '回廊', texts: [], cast: [], samples: [], count: 20 });
    expect(m.system).toContain('23条左右');
    const many = JSON.stringify(Array.from({ length: 40 }, (_, i) => ({ type: 'praise', text: `t${i}` })));
    expect(parseDanmakuResponse(many, keepCount(20))).toHaveLength(25);
    expect(danmakuMaxTokens(25)).toBeGreaterThan(1500);
    expect(danmakuMaxTokens(6)).toBe(1500);
  });

  it('语气示例随机抽10条，不重复', () => {
    const pool = Array.from({ length: 30 }, (_, i) => ({ type: 'discuss', text: `t${i}` }));
    let k = 0;
    const s = pickSamples(pool, 10, () => ((k++ * 7) % 30) / 30);
    expect(s).toHaveLength(10);
    expect(new Set(s).size).toBe(10);
  });
});

describe('rlzc_live 注入内容', () => {
  const view = (feed: LiveView['feed'], on = true): LiveView => ({ on, canToggle: false, scope: 'instance', viewers: 12840, heat: 60, tipTotal: 300, injectToAI: true, feed, lastTip: null });
  const msg = (id: number, name: string, text: string) => ({ id, t: 'msg' as const, name, text, amount: 0, net: 0 });

  it('取最近5条（含打赏行），不含系统消息', () => {
    const feed = [
      msg(1, '路人', '最早的一条'),
      msg(2, '小满', '祝平安出来！！'),
      { id: 3, t: 'sys' as const, name: '', text: '本局副本直播开始。', amount: 0, net: 0 },
      msg(4, '匿名', '演的吧……'),
      { id: 5, t: 'tip' as const, name: '好运来', text: '', amount: 500, net: 300 },
      msg(6, '阿柒', '冲'),
      msg(7, '数据党', '七成'),
    ];
    expect(formatLiveInjection(view(feed))).toBe(
      '［直播·仅供AI］{{user}}正在直播，约12840人在看。最近弹幕：小满：祝平安出来！！／匿名：演的吧……／好运来 打赏500／阿柒：冲／数据党：七成',
    );
  });

  it('没在播时不注入', () => {
    expect(formatLiveInjection(view([msg(1, 'a', 'b')], false))).toBe('');
  });
});

// ─────────────────── 接入流程 ───────────────────

const st = installFakeSt();
autoAnswerEntryCards(st);
let stamp = 0;
const SUB_JSON = '{"events":[{"id":"E02","status":"done","reason":"写了"}],"state":{"crank":"曲柄在谈缘手里（隐藏状态）"},"next":[],"hype":35,"hurt":false}';
/** 模拟 AI 一次返回几条弹幕 */
let dmCount = 8;
const danmakuJson = () => JSON.stringify(Array.from({ length: dmCount }, (_, i) => ({ type: 'praise', name: `AI观众${i}`, text: `AI弹幕${i}` })));

let calls: { system: string; user: string }[] = [];
let danmakuFails = false;

async function settle() {
  for (let k = 0; k < 5; k++) await new Promise((r) => setTimeout(r, 0));
}

function reset() {
  st.chat = [];
  st.meta = {};
  st.prompts = {};
  st.popups = [];
  st.cards = [];
  st.answer = (p) => {
    if (p.check) p.check.checked = true;
    return true;
  };
  st.ctx.extensionSettings = {};
  calls = [];
  danmakuFails = false;
  dmCount = 8;
  st.ctx.generateRaw = vi.fn(async ({ prompt, systemPrompt }: { prompt: string; systemPrompt: string }) => {
    calls.push({ system: systemPrompt, user: prompt });
    if (systemPrompt.includes('回廊直播间')) {
      if (danmakuFails) throw new Error('500 upstream error');
      return danmakuJson();
    }
    return SUB_JSON;
  });
  app.loadSettings();
  app.onChatChanged();
}

async function reply(mes: string, type = 'normal'): Promise<number> {
  await app.interceptor([], 0, null, type);
  const m: ChatMessage = { mes, is_user: false, extra: {}, send_date: `2026-09-26T13:${String(stamp++).padStart(2, '0')}:00` };
  st.chat.push(m);
  const i = st.chat.length - 1;
  app.onMessageReceived(i, type);
  await settle();
  return i;
}
const user = () => st.chat.push({ mes: '继续。', is_user: true, extra: {} });
const live = (i: number): LiveRecord | undefined => st.chat[i]?.extra?.rlzc?.live;
/** 旧版「本地+AI」的等价设置：两种都开、跟随主API、占比100% */
const aiMix = () => Object.assign(app.state.settings.live, { library: true, aiOn: true, api: 'main', ratio: 100 });
const danmakuCalls = () => calls.filter((c) => c.system.includes('回廊直播间'));

async function enter() {
  st.chat.push({ mes: '开场白', is_user: false, extra: {} });
  user();
  await reply(BRIEFING);
}

beforeEach(() => {
  installLiveApi({ view: app.liveView, toggle: app.toggleCorridorLive });
  reset();
  vi.spyOn(Math, 'random').mockReturnValue(0.3);
});

afterEach(() => {
  releaseAll();
  vi.restoreAllMocks();
});

describe('AI 弹幕接入', () => {
  it('「本地+AI」：同一轮最多一次；弹幕并入本轮、id 继续递增', async () => {
    app.state.settings.subApi.source = 'main';
    aiMix();
    app.state.settings.live.freq = 3;
    await enter();
    user();
    // 第2轮：注入事件已发生（检测判定 done）、正文有人受伤、还有阶段切换，三个关键事件只生成一次
    const i = await reply('他从台阶上摔下来，重伤昏迷。<阶段切换>第一夜</阶段切换>');
    expect(danmakuCalls()).toHaveLength(1);
    const rec = live(i)!;
    expect(rec.ai).toMatchObject({ ok: true, count: 8 });
    // AI 返回8条：全部用上，不足10条用本地池补到 10–13 条
    const msgs = rec.feed.filter((f) => f.t === 'msg');
    expect(msgs.filter((f) => f.text.startsWith('AI弹幕'))).toHaveLength(8);
    expect(msgs.length).toBeGreaterThanOrEqual(10);
    expect(msgs.length).toBeLessThanOrEqual(13);
    // 整轮 id 连续，接在入场之后
    const ids = rec.feed.map((f) => f.id);
    expect(ids).toEqual(ids.map((_, k) => ids[0] + k));
    expect(rec.pending).toBeUndefined();
    // 事件检测的 hype 直接用
    expect(rec.hype).toBe(35);
  });

  it('占比100%：新弹幕多了截到本轮总数；没有新弹幕的轮次全用弹幕库', async () => {
    app.state.settings.subApi.source = 'main';
    app.state.settings.live.aiOn = false;
    app.state.settings.live.freq = 1;
    dmCount = 15;
    await enter();
    user();
    const i = await reply('平静的一轮。');
    expect(danmakuCalls()).toHaveLength(0);
    const local = live(i)!.feed.filter((f) => f.t === 'msg');
    expect(local).toHaveLength(11);
    aiMix();
    user();
    const j = await reply('又一轮。');
    expect(danmakuCalls()).toHaveLength(1);
    const msgs = live(j)!.feed.filter((f) => f.t === 'msg');
    expect(msgs).toHaveLength(11);
    expect(msgs.every((f) => f.text.startsWith('AI弹幕'))).toBe(true);
    expect(live(j)!.ai).toMatchObject({ ok: true, count: 11 });
  });

  it('等 AI 弹幕时打赏已记账；切换聊天后没等到的楼层用本地池补齐', async () => {
    app.state.settings.subApi.source = 'main';
    aiMix();
    app.state.settings.live.freq = 1;
    await enter();
    let release!: (v: string) => void;
    st.ctx.generateRaw = vi.fn(({ systemPrompt }: { systemPrompt: string }) =>
      systemPrompt.includes('回廊直播间') ? new Promise<string>((r) => (release = r)) : Promise.resolve(SUB_JSON),
    );
    user();
    const i = await reply('平静的一轮。');
    const rec = live(i)!;
    expect(rec.pending).toBeTruthy();
    expect(rec.feed).toHaveLength(0);
    expect(st.chat[i].extra!.rlzc!.ledger?.filter((e) => e.type === 'tip').reduce((t, e) => t + e.delta, 0) ?? 0).toBe(rec.tipNet);
    app.onChatChanged();
    const done = live(i)!;
    expect(done.pending).toBeUndefined();
    expect(done.ai).toMatchObject({ ok: false });
    const n = done.feed.filter((f) => f.t === 'msg').length;
    expect(n).toBeGreaterThanOrEqual(10);
    expect(n).toBeLessThanOrEqual(13);
    // 晚到的结果不再写回
    release(danmakuJson());
    await settle();
    expect(live(i)!.feed.some((f) => f.text.startsWith('AI弹幕'))).toBe(false);
  });

  it('请求里没有事件表、隐藏状态、副本资料、事件检测结果', async () => {
    app.state.settings.subApi.source = 'main';
    aiMix();
    app.state.settings.live.freq = 1;
    await enter();
    user();
    await reply('谈缘沿着楼梯往上走。\n<状态栏>\n林默：\n积分：1000\n谈缘：\n状态：平静\n</状态栏>');
    user();
    await reply('钟声响了。');
    const req = danmakuCalls().slice(-1)[0];
    const all = req.system + req.user;
    expect(req.user).toContain('【直播间】钟楼');
    expect(req.user).toContain('谈缘沿着楼梯往上走。');
    expect(req.user).toContain('钟声响了。');
    expect(req.user).toContain('【在场角色】谈缘');
    for (const e of zhonglou.events) expect(all).not.toContain(e.text.slice(0, 12));
    expect(all).not.toContain('曲柄在谈缘手里');
    expect(all).not.toContain('E02');
    for (const d of zhonglou.docs) if (d.md) expect(all).not.toContain(d.md.slice(0, 20));
    expect(all).not.toContain('后台事件');
    expect(all).not.toContain('<状态栏>');
  });

  it('失败重试1次；仍失败不弹窗、不阻塞，这一轮用本地池，调试记原因', async () => {
    app.state.settings.subApi.source = 'main';
    aiMix();
    app.state.settings.live.freq = 1;
    await enter();
    danmakuFails = true;
    const popupsBefore = st.popups.length;
    user();
    const i = await reply('平静的一轮。');
    expect(danmakuCalls()).toHaveLength(2);
    expect(st.popups.length).toBe(popupsBefore);
    const rec = live(i)!;
    expect(rec.ai?.ok).toBe(false);
    expect(rec.ai?.error).toContain('500');
    // 失败：这一轮只用本地池 10–13 条
    const n = rec.feed.filter((f) => f.t === 'msg').length;
    expect(n).toBeGreaterThanOrEqual(10);
    expect(n).toBeLessThanOrEqual(13);
    // 下一轮照常生成
    user();
    const j = await reply('又一轮。');
    expect(live(j)).toBeTruthy();
  });

  it('新弹幕不依赖事件检测：事件检测关着也能跟随主API生成', async () => {
    aiMix();
    app.state.settings.live.freq = 1;
    await enter();
    user();
    const i = await reply('一轮。');
    expect(danmakuCalls()).toHaveLength(1);
    expect(live(i)!.ai).toMatchObject({ ok: true });
  });

  it('自设API没有选预设：按失败处理，这一轮用弹幕库', async () => {
    aiMix();
    Object.assign(app.state.settings.live, { api: 'preset', presetId: '', freq: 1 });
    await enter();
    user();
    const i = await reply('一轮。');
    expect(danmakuCalls()).toHaveLength(0);
    expect(live(i)!.ai).toMatchObject({ ok: false, error: '新弹幕的接口没有设置好' });
    expect(live(i)!.feed.filter((f) => f.t === 'msg')).toHaveLength(11);
  });

  it('两种都开、占比50%：新弹幕一半，其余弹幕库', async () => {
    aiMix();
    Object.assign(app.state.settings.live, { ratio: 50, freq: 1, total: 20 });
    dmCount = 30;
    await enter();
    user();
    const i = await reply('一轮。');
    const msgs = live(i)!.feed.filter((f) => f.t === 'msg');
    // 随机数固定 0.3：本轮 19 条，新弹幕 round(19×50%)=10 条
    expect(msgs).toHaveLength(19);
    expect(msgs.filter((f) => f.text.startsWith('AI弹幕'))).toHaveLength(10);
    expect(danmakuCalls()[0].system).toContain('13条左右');
  });

  it('只开新弹幕、每轮生成：全是新弹幕；失败时借5–8条', async () => {
    Object.assign(app.state.settings.live, { library: false, aiOn: true, api: 'main', freq: 1, total: 12 });
    dmCount = 20;
    await enter();
    user();
    const i = await reply('一轮。');
    const msgs = live(i)!.feed.filter((f) => f.t === 'msg');
    expect(msgs).toHaveLength(11);
    expect(msgs.every((f) => f.text.startsWith('AI弹幕'))).toBe(true);
    danmakuFails = true;
    user();
    const j = await reply('又一轮。');
    const borrowed = live(j)!.feed.filter((f) => f.t === 'msg');
    expect(live(j)!.ai?.ok).toBe(false);
    // 随机数固定 0.3：借 5+floor(0.3×4)=6 条
    expect(borrowed).toHaveLength(6);
    expect(borrowed.some((f) => f.text.startsWith('AI弹幕'))).toBe(false);
  });

  it('只开新弹幕、每2轮生成：不生成的轮次没有弹幕，打赏照常', async () => {
    Object.assign(app.state.settings.live, { library: false, aiOn: true, api: 'main', freq: 2 });
    await enter();
    user();
    const i = await reply('平静的一轮。');
    expect(danmakuCalls()).toHaveLength(0);
    expect(live(i)!.feed.filter((f) => f.t === 'msg')).toHaveLength(0);
    user();
    const j = await reply('又一轮。');
    expect(danmakuCalls()).toHaveLength(1);
    expect(live(j)!.feed.filter((f) => f.t === 'msg').length).toBeGreaterThan(0);
  });
});

describe('直播设置升级', () => {
  it('旧版「本地+AI」升级为两种都开、占比100%，接口沿用事件检测', () => {
    expect(app.normalizeLiveSettings({ source: 'ai', freq: 4 } as any, { source: 'preset', presetId: 'p1' } as any)).toMatchObject({
      library: true, aiOn: true, api: 'preset', presetId: 'p1', ratio: 100, freq: 4, total: 12,
    });
    expect(app.normalizeLiveSettings({ source: 'ai' } as any, { source: 'main' } as any)).toMatchObject({ aiOn: true, api: 'main', ratio: 100 });
  });

  it('旧版「本地」：只开弹幕库；两种都关时打开弹幕库；数值越界夹回范围', () => {
    expect(app.normalizeLiveSettings({ source: 'local' } as any)).toMatchObject({ library: true, aiOn: false, ratio: 50 });
    expect(app.normalizeLiveSettings({ library: false, aiOn: false })).toMatchObject({ library: true });
    expect(app.normalizeLiveSettings({ total: 99, ratio: 3, freq: 0 })).toMatchObject({ total: 25, ratio: 10, freq: 1 });
  });
});

describe('rlzc_live 注入', () => {
  it('默认不注入', async () => {
    await enter();
    user();
    await reply('一轮。');
    user();
    await app.interceptor([], 0, null, 'normal');
    expect(st.prompts.rlzc_live?.value ?? '').toBe('');
  });

  it('开启后注入在看人数与最近5条，深度默认4、scan=false', async () => {
    app.state.settings.live.injectToAI = true;
    await enter();
    user();
    const i = await reply('一轮。');
    user();
    await app.interceptor([], 0, null, 'normal');
    const p = st.prompts.rlzc_live;
    expect(p.depth).toBe(4);
    expect(p.scan).toBe(false);
    const rec = live(i)!;
    expect(p.value.startsWith(`［直播·仅供AI］{{user}}正在直播，约${rec.viewers}人在看。最近弹幕：`)).toBe(true);
    const items = p.value.split('最近弹幕：')[1].split('／');
    expect(items.length).toBe(Math.min(5, rec.feed.filter((f) => f.t !== 'sys').length));
  });

  it('开启但没在播时不注入', async () => {
    app.state.settings.live.injectToAI = true;
    st.answer = (p) => {
      if (p.check) p.check.checked = false;
      return true;
    };
    await enter();
    user();
    await reply('一轮。');
    user();
    await app.interceptor([], 0, null, 'normal');
    expect(st.prompts.rlzc_live?.value ?? '').toBe('');
  });
});
