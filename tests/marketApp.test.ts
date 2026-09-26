/** 黑市接入流程（第四期-第2段）：在模拟的 ST 环境里跑 app.ts 的开盘、封盘、下注、开奖、赌坊 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { flush, installFakeSt } from './fakeSt';
import * as app from '../src/app';
import { releaseAll } from '../src/st/liveApi';
import { BRIEFING, zhonglou } from './helpers';
import type { ChatMessage } from '../src/packs/types';

const st = installFakeSt();
let stamp = 0;
let calls: { system: string; user: string }[] = [];
/** 事件检测返回的 JSON（不含 markets 时按「没检测」处理） */
let subJson = '';
let freakReply: () => string = () => '[]';

async function settle() {
  for (let k = 0; k < 6; k++) await new Promise((r) => setTimeout(r, 0));
}

const FREAK_OK = JSON.stringify([
  { q: '主播会在塔里迷路吗', judge: '{{user}}在塔里迷路了', p: 0.3 },
  { q: '主播会唱歌吗', judge: '{{user}}唱了歌', p: 0.2 },
  { q: '这一题太长太长太长太长太长太长太长太长太长了吧', judge: '不合格', p: 0.5 },
]);

function reset() {
  st.chat = [];
  st.meta = {};
  st.prompts = {};
  st.popups = [];
  st.chatId = 'chat-1';
  st.answer = (p) => {
    if (p.check) p.check.checked = false;
    return true;
  };
  st.ctx.extensionSettings = {};
  calls = [];
  subJson = '{"events":[],"state":{"crank":"曲柄在谈缘手里（隐藏状态）"},"next":[],"hype":30,"hurt":false}';
  freakReply = () => FREAK_OK;
  st.ctx.generateRaw = vi.fn(async ({ prompt, systemPrompt }: { prompt: string; systemPrompt: string }) => {
    calls.push({ system: systemPrompt, user: prompt });
    if (systemPrompt.includes('回廊黑市的庄家')) return freakReply();
    return subJson;
  });
  app.loadSettings();
  app.onChatChanged();
}

async function reply(mes: string, type = 'normal'): Promise<number> {
  await app.interceptor([], 0, null, type);
  const m: ChatMessage = { mes, is_user: false, extra: {}, send_date: `2026-09-27T10:${String(stamp++ % 60).padStart(2, '0')}:00` };
  if (type === 'swipe' || type === 'regenerate') st.chat[st.chat.length - 1] = m;
  else st.chat.push(m);
  const i = st.chat.length - 1;
  app.onMessageReceived(i, type);
  await settle();
  return i;
}
const user = (mes = '继续。') => st.chat.push({ mes, is_user: true, extra: {} });
const freakCalls = () => calls.filter((c) => c.system.includes('回廊黑市的庄家'));
const subCalls = () => calls.filter((c) => c.system.includes('记录员'));
const book = () => app.state.market.book;
const kinds = () => book()?.markets.map((m) => m.kind);
const betRows = () => app.state.ledger.filter((e) => e.type === 'bet');

async function enter(briefing = BRIEFING) {
  st.chat.push({ mes: '开场白', is_user: false, extra: {} });
  user('进入副本');
  await reply(briefing);
  await settle();
}

beforeEach(async () => {
  const { installLiveApi } = await import('../src/st/liveApi');
  installLiveApi({ view: app.liveView, toggle: app.toggleCorridorLive });
  reset();
  vi.spyOn(Math, 'random').mockReturnValue(0.5);
});

afterEach(() => {
  releaseAll();
  vi.restoreAllMocks();
});

describe('开盘', () => {
  it('入场确认后开盘；确认之前、回廊中没有盘口', async () => {
    expect(book()).toBeNull();
    st.answer = () => false;
    await enter();
    expect(app.state.session).toBeNull();
    expect(Object.keys(app.readMarketMeta().books)).toHaveLength(0);
    reset();
    await enter();
    expect(app.state.session?.status).toBe('active');
    expect(kinds()).toEqual(['ending', 'rating']);
    expect(book()!.markets[0].q).toBe('本局结果');
    expect(book()!.closedAt).toBeUndefined();
    // 盘口按会话 id 存在 chatMetadata.rlzc_market
    expect(st.meta.rlzc_market.books[app.state.session!.id].markets).toHaveLength(2);
  });

  it('休整副本不开盘', async () => {
    await enter('「副本简报 - 农闲」\n「等级：D」');
    expect(app.state.pack?.id).toBe('nongxian');
    expect(book()).toBeNull();
    expect(Object.keys(app.readMarketMeta().books)).toHaveLength(0);
  });

  it('事件检测关闭：只开结局盘和评价盘，不出怪盘', async () => {
    await enter();
    expect(kinds()).toEqual(['ending', 'rating']);
    expect(freakCalls()).toHaveLength(0);
    expect(book()!.freak).toBeUndefined();
  });

  it('事件检测开着：加本包事件盘，并另发一次调用出2–3题怪盘（不合格的丢掉）', async () => {
    app.state.settings.subApi.source = 'main';
    await enter();
    expect(freakCalls()).toHaveLength(1);
    expect(kinds()).toEqual(['ending', 'rating', 'event', 'event', 'event', 'freak', 'freak']);
    const f = book()!.markets.filter((m) => m.kind === 'freak');
    expect(f.map((m) => [m.id, m.q, m.options.map((o) => o.label).join('/')])).toEqual([
      ['F1', '主播会在塔里迷路吗', '会/不会'],
      ['F2', '主播会唱歌吗', '会/不会'],
    ]);
    expect(book()!.freak).toMatchObject({ status: 'ok', count: 2 });
  });

  it('怪盘请求只有副本名、等级、简报原文、公开资料；没有事件表、隐藏状态、事件盘数据', async () => {
    app.state.settings.subApi.source = 'main';
    await enter();
    const req = freakCalls()[0];
    const all = req.system + req.user;
    expect(req.system).toContain('你是回廊黑市的庄家');
    expect(req.user).toContain('【副本】钟楼　等级：S');
    expect(req.user).toContain('副本简报 - 钟楼');
    expect(req.user).toContain(zhonglou.docs.find((d) => d.md)!.md!.slice(0, 20));
    expect(req.user.length).toBeLessThan(5500);
    for (const e of zhonglou.events) expect(all).not.toContain(e.text.slice(0, 12));
    for (const f of zhonglou.stateFields ?? []) expect(all).not.toContain(f.hint);
    for (const m of zhonglou.markets ?? []) {
      expect(all).not.toContain(m.q);
      expect(all).not.toContain(m.judge);
    }
    expect(all).not.toContain('曲柄在谈缘手里');
  });

  it('怪盘失败：重试1次，仍失败这局不开怪盘、不弹窗，调试页记原因', async () => {
    app.state.settings.subApi.source = 'main';
    freakReply = () => '我不想出题';
    const before = st.popups.length;
    await enter();
    expect(freakCalls()).toHaveLength(2);
    expect(kinds()).toEqual(['ending', 'rating', 'event', 'event', 'event']);
    expect(book()!.freak?.status).toBe('failed');
    expect(book()!.freak?.error).toContain('返回格式不对');
    // 只有入场确认那一次弹窗
    expect(st.popups.length).toBe(before + 1);
  });

  it('出题结果晚于封盘到达时丢弃', async () => {
    app.state.settings.subApi.source = 'main';
    let release!: (v: string) => void;
    st.ctx.generateRaw = vi.fn(async ({ prompt, systemPrompt }: { prompt: string; systemPrompt: string }) => {
      calls.push({ system: systemPrompt, user: prompt });
      if (systemPrompt.includes('回廊黑市的庄家')) return new Promise<string>((r) => (release = r));
      return subJson;
    });
    await enter();
    user();
    await reply('第2轮。');
    expect(book()!.closedAt).toBeTruthy();
    release(FREAK_OK);
    await settle();
    expect(kinds()).not.toContain('freak');
    expect(app.readMarketMeta().books[app.state.session!.id].freak?.status).toBe('late');
  });
});

describe('封盘与下注', () => {
  it('第1轮内可下注，扣款记流水；入场后第2条AI回复到来时封盘，之后删楼也不重开', async () => {
    await enter();
    expect(app.placeBet('ending', 'win', 500)).toBeNull();
    expect(betRows().map((e) => [e.delta, e.source])).toEqual([[-500, '下注·钟楼·本局结果·通关']]);
    expect(app.accountBalance()).toBe(500);
    expect(app.state.market.pending).toBe(1);
    // 初始余额在第一次下注时定下：之后状态栏里的余额（已扣押注）不会被当成初始余额
    expect(st.meta.rlzc_ledger.init).toMatchObject({ value: 1000, source: '默认值' });
    user();
    await reply('第2轮。\n<状态栏>\n{{user}}：\n等级：D\n积分：500\n</状态栏>');
    expect(book()!.closedAt).toBeTruthy();
    expect(app.accountBalance()).toBe(500);
    expect(app.placeBet('ending', 'lose', 100)).toBe('已封盘');
    // 删掉第2轮：不重开
    st.chat.splice(st.chat.length - 2, 2);
    app.onChatMutated();
    expect(book()!.closedAt).toBeTruthy();
    expect(app.placeBet('ending', 'lose', 100)).toBe('已封盘');
    // 下注不随删楼撤销
    expect(betRows().map((e) => e.delta)).toEqual([-500]);
  });

  it('上限、最低押注、可用余额（副本内扣掉本局直播打赏）', async () => {
    st.answer = (p) => {
      if (p.check) p.check.checked = true;
      return true;
    };
    await enter();
    expect(app.state.session?.live).toBe(true);
    expect(app.placeBet('ending', 'win', 5)).toBe('最少押10');
    expect(app.placeBet('ending', 'win', 1001)).toBe('超过单注上限');
    expect(app.placeBet('ending', 'win', 600)).toBeNull();
    expect(app.placeBet('ending', 'lose', 500)).toBe('超过单注上限'); // 同一盘累计
    expect(app.placeBet('rating', 'B', 400)).toBeNull();
    // 本局已到账的直播打赏：600（不可用）
    const entry = st.chat[app.state.session!.entryIndex];
    entry.extra!.rlzc = { ...entry.extra!.rlzc!, live: { show: app.state.session!.id, scope: 'instance', hype: 50, heat: 20, viewers: 1, hurt: false, feed: [], tipNet: 600, tipFace: 1000, tipSource: '直播打赏' } as any, ledger: [{ delta: 600, source: '直播打赏', type: 'tip', at: '' }] };
    app.onChatMutated();
    expect(app.accountBalance()).toBe(600); // 1000 − 600 − 400 + 600
    // 可用 = 600 − 600 = 0
    expect(app.marketStakeCheck('rating', 10).reason).toBe('可用余额不足');
    expect(app.marketStakeCheck('rating', 10).max).toBe(0);
    // 回廊中不扣打赏：打赏照常算进余额
  });

  it('押完低于斩杀线只提示不拦截', async () => {
    await enter();
    const c = app.marketStakeCheck('ending', 800);
    expect(c.ok).toBe(true);
    expect(c.belowKill).toBe(true);
    expect(app.placeBet('ending', 'lose', 800)).toBeNull();
  });
});

describe('给主AI的一次性提示', () => {
  it('押自己本局失败：下一次正常生成的账户注入末尾有一句，再下一轮消失', async () => {
    await enter();
    app.placeBet('ending', 'lose', 300);
    app.placeBet('ending', 'lose', 200);
    user();
    await app.interceptor([], 0, null, 'normal');
    const text = st.prompts.rlzc_ledger.value;
    expect(text.startsWith('［账户·仅供AI］积分：500')).toBe(true);
    expect(text.endsWith('{{user}}在黑市押了自己本局失败，押注500分。')).toBe(true);
    // 生成回来
    st.chat.push({ mes: '第2轮。', is_user: false, extra: {}, send_date: 'x1' });
    app.onMessageReceived(st.chat.length - 1, 'normal');
    await settle();
    user();
    await app.interceptor([], 0, null, 'normal');
    expect(st.prompts.rlzc_ledger.value).not.toContain('黑市');
  });
});

describe('开奖', () => {
  async function enterWithSub() {
    app.state.settings.subApi.source = 'main';
    freakReply = () => '坏';
    await enter();
  }

  it('事件检测的 JSON 缺 markets 不算失败，但这一轮对盘口算没检测', async () => {
    await enterWithSub();
    app.placeBet('M2', 'no', 100);
    user();
    const i = await reply('第2轮。');
    const sub = st.chat[i].extra!.rlzc!.sub!;
    expect(sub.skipped).toBeFalsy();
    expect(sub.state).toBeTruthy();
    expect(sub.markets).toBeUndefined();
    expect(app.marketRounds().map((r) => [r.index, r.state])).toEqual([[i, 'miss']]);
    // 检测提示词里列出还没开奖的事件盘
    const prompt = subCalls().slice(-1)[0];
    expect(prompt.user).toContain('【盘口陈述】');
    expect(prompt.user).toContain('- M2：有人死于他人之手');
    expect(prompt.system).toContain('只有本轮正文明确写到才填 true');
    // 手动结束：未判出且有一轮没检测 → 退
    await app.endManually();
    await flush();
    const t = app.state.market.tickets[0];
    expect(t.res?.stamp).toBe('refund');
  });

  it('某轮判定为真：押「会」的兑、押「不会」的废，弹一次提示；删楼后兑付撤回、下注不撤回', async () => {
    await enterWithSub();
    const log = vi.spyOn(console, 'log');
    app.placeBet('M2', 'yes', 100);
    app.placeBet('M2', 'no', 200);
    user();
    subJson = '{"events":[],"state":{"victim":"死了"},"next":[],"markets":{"M1":false,"M2":true,"M3":false}}';
    const i = await reply('有人死了，钟楼停摆。');
    const [no, yes] = app.state.market.tickets;
    expect(yes.res).toEqual({ stamp: 'win', index: i });
    expect(no.res).toEqual({ stamp: 'lose', index: i });
    expect(app.state.market.pending).toBe(0);
    const payout = Math.floor((100 * Math.round(yes.ticket.odds * 100)) / 100);
    expect(betRows().map((e) => [e.delta, e.source])).toEqual([
      [-100, '下注·钟楼·塔里会出人命吗·会'],
      [-200, '下注·钟楼·塔里会出人命吗·不会'],
      [payout, '赌票兑付·钟楼·塔里会出人命吗'],
    ]);
    expect(log.mock.calls.some((c) => String(c[0]).includes('赌票开奖：兑 1 张，废 1 张。'))).toBe(true);
    // 开奖后不再交给检测判定
    user();
    subJson = '{"events":[],"state":{},"next":[],"markets":{}}';
    await reply('第3轮。');
    expect(subCalls().slice(-1)[0].user).not.toContain('- M2：');
    // 删掉第2、3轮
    st.chat.splice(i, 3);
    app.onChatMutated();
    expect(app.state.market.pending).toBe(2);
    expect(betRows().map((e) => e.delta)).toEqual([-100, -200]);
  });

  it('通关结算 B 评：结局盘、评价盘开奖；未判出的事件盘每轮都检测过 → 「否」兑', async () => {
    await enterWithSub();
    app.placeBet('ending', 'win', 100);
    app.placeBet('rating', 'B', 50);
    app.placeBet('rating', 'A', 50);
    app.placeBet('M3', 'no', 100);
    subJson = '{"events":[],"state":{},"next":[],"markets":{}}';
    user();
    await reply('第2轮。');
    user();
    const end = await reply('<副本结算>结果=通关｜评价=B</副本结算>');
    const by = (m: string, o: string) => app.state.market.tickets.find((t) => t.ticket.market === m && t.ticket.option === o)!.res;
    expect(by('ending', 'win')).toEqual({ stamp: 'win', index: end });
    expect(by('rating', 'B')!.stamp).toBe('win');
    expect(by('rating', 'A')!.stamp).toBe('lose');
    expect(by('M3', 'no')!.stamp).toBe('win');
    // 删掉结算那条：兑付撤回，重新变为待开奖
    st.chat.pop();
    app.onChatMutated();
    expect(app.state.market.pending).toBe(4);
    expect(betRows().filter((e) => e.delta > 0)).toHaveLength(0);
  });

  it('死亡结算：还没开奖的全废', async () => {
    await enterWithSub();
    app.placeBet('ending', 'lose', 100);
    app.placeBet('M3', 'no', 100);
    subJson = '{"events":[],"state":{},"next":[],"markets":{}}';
    user();
    await reply('<副本结算>结果=死亡｜评价=无</副本结算>');
    expect(app.state.market.tickets.map((t) => t.res?.stamp)).toEqual(['lose', 'lose']);
  });

  it('入场消息被删、会话作废：全部退', async () => {
    await enter();
    app.placeBet('ending', 'win', 100);
    st.chat.splice(2);
    app.onChatMutated();
    expect(app.state.session).toBeNull();
    expect(app.state.market.tickets[0].res?.stamp).toBe('refund');
    expect(betRows().map((e) => e.delta)).toEqual([-100, 100]);
  });
});

describe('赌坊', () => {
  it('回廊中营业，每局记一行净得失；副本内不营业', async () => {
    st.chat.push({ mes: '开场白', is_user: false, extra: {} });
    app.onChatMutated();
    const tables = app.state.market.tables;
    expect(tables).toHaveLength(2);
    expect(app.state.market.casinoOpen).toBe(true);
    // Math.random = 0.5：听钟 7 下，门牌 11 号，抽签第2支，翻牌 7 对 7
    const t = tables[0];
    const bet = { bell: 'odd', door: 'r3', lot: 's2', card: 'high' }[t as 'bell']!;
    const r = app.playTable(t, bet, 100);
    expect(r.error).toBeUndefined();
    const row = betRows()[0];
    expect(row.delta).toBe(r.outcome!.net);
    expect(row.source).toMatch(/^赌坊·(听钟|门牌|抽签|翻牌)·押/);
    expect(app.readMarketMeta().casino.plays).toHaveLength(1);
    // 面板反复打开（刷新）桌子不变
    app.onChatMutated();
    expect(app.state.market.tables).toEqual(tables);
    // 进副本：不营业
    user('进入副本');
    await reply(BRIEFING);
    expect(app.state.market.casinoOpen).toBe(false);
    expect(app.playTable(t, bet, 100).error).toBe('赌坊只在回廊营业。');
    expect(app.state.market.tables).toEqual(tables);
  });

  it('结算回到回廊后重新摆桌', async () => {
    await enter();
    const key0 = app.readMarketMeta().casino.key;
    user();
    await reply('<副本结算>结果=通关｜评价=B</副本结算>');
    const meta = app.readMarketMeta();
    expect(meta.casino.key).toBe(app.state.session!.id);
    expect(meta.casino.key).not.toBe(key0);
  });

  it('输到斩杀线下、一局赢大钱：下一次生成提示一次', async () => {
    st.chat.push({ mes: '开场白', is_user: false, extra: {} });
    app.onChatMutated();
    const meta = app.readMarketMeta();
    meta.casino.tables = ['bell', 'door'];
    st.meta.rlzc_market = meta;
    app.onChatMutated();
    // 听钟押双，7下 → 输；1000 − 800 < 300
    app.playTable('bell', 'even', 800);
    user();
    await app.interceptor([], 0, null, 'normal');
    expect(st.prompts.rlzc_ledger.value).toContain('{{user}}刚在赌坊输掉800分，余额已低于斩杀线。');
  });
});
