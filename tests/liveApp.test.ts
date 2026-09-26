/** 直播接入流程（第三期b-第3段）：在模拟的 ST 环境里跑 app.ts 的入场、收消息、记账、回滚 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { flush, installFakeSt } from './fakeSt';
import * as app from '../src/app';
import { releaseAll } from '../src/st/liveApi';
import { SYS_TEXT, TIP_REVOKE_SOURCE, type LiveRecord } from '../src/core/liveFlow';
import { BRIEFING } from './helpers';
import type { ChatMessage } from '../src/packs/types';

const st = installFakeSt();
let stamp = 0;

function reset() {
  st.chat = [];
  st.meta = {};
  st.prompts = {};
  st.popups = [];
  st.chatId = 'chat-1';
  st.answer = () => true;
  st.ctx.extensionSettings = {};
  app.loadSettings();
  app.onChatChanged();
}

function user(mes = '继续。') {
  st.chat.push({ mes, is_user: true, extra: {} });
}

/** 模拟一次生成：拦截器 → 追加AI消息 → MESSAGE_RECEIVED */
async function reply(mes: string, type = 'normal'): Promise<number> {
  await app.interceptor([], 0, null, type);
  const m: ChatMessage = { mes, is_user: false, extra: {}, send_date: `2026-09-26T12:${String(stamp++).padStart(2, '0')}:00` };
  if (type === 'swipe' || type === 'regenerate') st.chat[st.chat.length - 1] = m;
  else st.chat.push(m);
  const i = st.chat.length - 1;
  app.onMessageReceived(i, type);
  await flush();
  return i;
}

const live = (i: number): LiveRecord | undefined => st.chat[i]?.extra?.rlzc?.live;
const tipEntries = () => app.state.ledger.filter((e) => e.type === 'tip');
const view = () => window.RLZC_LIVE!.get();

async function enterZhonglou(tick: boolean) {
  st.chat.push({ mes: '开场白', is_user: false, extra: {} });
  user('进入副本');
  st.answer = (p) => {
    if (p.check) p.check.checked = tick;
    return true;
  };
  await reply(BRIEFING);
  st.answer = () => true;
}

beforeEach(async () => {
  const { installLiveApi } = await import('../src/st/liveApi');
  installLiveApi({ view: app.liveView, toggle: app.toggleCorridorLive });
  reset();
  // 随机数固定得很小：每轮必有打赏，面值取最小档
  vi.spyOn(Math, 'random').mockReturnValue(0.01);
});

afterEach(() => {
  releaseAll();
  vi.restoreAllMocks();
});

describe('入场弹窗的「开启直播」', () => {
  it('默认不勾；点「是」后记住选择，下次沿用', async () => {
    await enterZhonglou(true);
    expect(st.popups[0].text).toContain('检测到进入《钟楼》');
    expect(st.popups[0].check).not.toBeNull();
    expect(app.state.settings.live.optIn).toBe(true);
    expect(app.state.session?.live).toBe(true);
    expect(st.ctx.extensionSettings.rlzc.live.optIn).toBe(true);

    // 新聊天：勾选框默认勾上（沿用上次）
    reset();
    app.state.settings.live.optIn = true;
    let seen: boolean | undefined;
    st.chat.push({ mes: '开场白', is_user: false, extra: {} });
    user();
    st.answer = (p) => {
      seen = p.check?.checked;
      p.check!.checked = false;
      return true;
    };
    await reply(BRIEFING);
    expect(seen).toBe(true);
    expect(app.state.session?.live).toBeUndefined();
    expect(app.state.settings.live.optIn).toBe(false);
  });

  it('第一次使用时默认不勾', async () => {
    let seen: boolean | undefined;
    st.chat.push({ mes: '开场白', is_user: false, extra: {} });
    user();
    st.answer = (p) => {
      seen = p.check?.checked;
      return true;
    };
    await reply(BRIEFING);
    expect(seen).toBe(false);
    expect(app.state.session?.live).toBeUndefined();
  });

  it('disableLive 副本（污名）不显示勾选框、不开直播', async () => {
    app.state.settings.live.optIn = true;
    st.chat.push({ mes: '开场白', is_user: false, extra: {} });
    user();
    await reply('「副本简报 - 污名」\n「人数：6人」\n「等级：B」');
    expect(st.popups[0].text).toContain('污名');
    expect(st.popups[0].check).toBeNull();
    expect(app.state.session?.packId).toBe('wuming');
    expect(app.state.session?.live).toBeUndefined();
    expect(view().on).toBe(false);
  });
});

describe('回廊直播', () => {
  it('回廊中可开播、下播；状态存 chatMetadata，不随删楼回滚', async () => {
    st.chat.push({ mes: '开场白', is_user: false, extra: {} });
    expect(view()).toMatchObject({ on: false, canToggle: true, scope: 'corridor' });
    expect(window.RLZC_LIVE!.toggle()).toBe(true);
    releaseAll();
    expect(view().on).toBe(true);
    expect(view().feed.map((f) => f.text)).toEqual([SYS_TEXT.corridorOn]);
    expect(st.meta.rlzc_live.corridor.on).toBe(true);
    user();
    const i = await reply('回廊里很安静。');
    expect(live(i)?.scope).toBe('corridor');
    // 回廊金额×0.3，最少10；实到60%
    expect(tipEntries().map((e) => [e.delta, e.source])).toEqual([[6, '直播打赏10×60%']]);
    st.chat.splice(i, 1);
    app.onChatMutated();
    expect(view().on).toBe(true);
    expect(tipEntries()).toEqual([]);
    expect(window.RLZC_LIVE!.toggle()).toBe(true);
    releaseAll();
    expect(view().on).toBe(false);
    expect(view().feed.slice(-1)[0]?.text).toBe(SYS_TEXT.corridorOff);
  });

  it('进入副本时回廊直播自动下播；副本内 toggle 返回 false', async () => {
    st.chat.push({ mes: '开场白', is_user: false, extra: {} });
    window.RLZC_LIVE!.toggle();
    const corridorShow = st.meta.rlzc_live.corridor.show;
    user('进入副本');
    st.answer = (p) => {
      if (p.check) p.check.checked = false;
      return true;
    };
    await reply(BRIEFING);
    releaseAll();
    expect(st.meta.rlzc_live.corridor.on).toBe(false);
    expect(st.meta.rlzc_live.sys.some((s: any) => s.show === corridorShow && s.text === SYS_TEXT.enterOff)).toBe(true);
    // 副本没勾直播：不在播、没有画面
    expect(view()).toMatchObject({ on: false, canToggle: false, scope: 'instance', feed: [] });
    expect(window.RLZC_LIVE!.toggle()).toBe(false);
    user();
    const i = await reply('钟声响了。');
    expect(live(i)).toBeUndefined();
  });
});

describe('副本内直播', () => {
  it('每条新回复算一次直播并合并记账；continue 不算新一轮', async () => {
    await enterZhonglou(true);
    releaseAll();
    expect(view()).toMatchObject({ on: true, scope: 'instance', canToggle: false });
    user();
    const i = await reply('他们沿着楼梯往上走。');
    const rec = live(i)!;
    expect(rec.scope).toBe('instance');
    expect(rec.feed.filter((f) => f.t === 'tip').length).toBeGreaterThan(0);
    const mine = (st.chat[i].extra!.rlzc!.ledger ?? []).filter((e) => e.type === 'tip');
    expect(mine).toHaveLength(1);
    expect(mine[0].delta).toBe(rec.tipNet);
    // continue：不重算，保留原记录与记账
    st.chat[i].mes += '又走了一段。';
    app.onMessageReceived(i, 'continue');
    await flush();
    expect(live(i)).toEqual(rec);
    expect((st.chat[i].extra!.rlzc!.ledger ?? []).filter((e) => e.type === 'tip')).toEqual(mine);
  });

  it('账户注入末尾加「其中本局直播打赏X分」；回廊中不加', async () => {
    await enterZhonglou(true);
    user();
    const i = await reply('第二轮。');
    user();
    await app.interceptor([], 0, null, 'normal');
    const x = live(i)!.tipNet;
    expect(st.prompts.rlzc_ledger.value).toContain(`其中本局直播打赏${x}分，副本内不可使用，离开副本后可用。`);

    reset();
    st.chat.push({ mes: '开场白', is_user: false, extra: {} });
    window.RLZC_LIVE!.toggle();
    user();
    await reply('回廊。');
    user();
    await app.interceptor([], 0, null, 'normal');
    expect(st.prompts.rlzc_ledger.value).not.toContain('本局直播打赏');
  });

  it('死亡结算：撤回本局打赏合计，流水写「本局直播打赏撤回」', async () => {
    await enterZhonglou(true);
    user();
    await reply('第二轮。');
    user();
    await reply('第三轮。');
    user();
    const end = await reply('你倒在了钟下。<副本结算>结果=死亡｜评价=无</副本结算>');
    const tips = tipEntries();
    const revoke = tips.find((e) => e.source === TIP_REVOKE_SOURCE)!;
    const earned = tips.filter((e) => e.source !== TIP_REVOKE_SOURCE).reduce((s, e) => s + e.delta, 0);
    expect(earned).toBeGreaterThan(0);
    expect(revoke).toMatchObject({ delta: -earned, type: 'tip', mesIndex: end });
    releaseAll();
    expect(view()).toMatchObject({ on: false, scope: 'corridor', tipTotal: 0 });
    expect(view().feed.map((f) => f.text)).toContain(SYS_TEXT.revoke);
  });

  it('失败结算不撤回', async () => {
    await enterZhonglou(true);
    user();
    await reply('第二轮。');
    user();
    await reply('结束了。<副本结算>结果=失败｜评价=D</副本结算>');
    expect(tipEntries().some((e) => e.source === TIP_REVOKE_SOURCE)).toBe(false);
    expect(tipEntries().length).toBeGreaterThan(0);
    releaseAll();
    expect(view().feed.slice(-1)[0]?.text).toBe(SYS_TEXT.instanceOff);
  });

  it('删楼、滑动后直播数据与账本一起回滚；新弹幕 id 继续递增', async () => {
    await enterZhonglou(true);
    user();
    const a = await reply('第二轮。');
    user();
    const b = await reply('第三轮。');
    releaseAll();
    const maxB = Math.max(...live(b)!.feed.map((f) => f.id));
    expect(view().tipTotal).toBe(live(a)!.tipNet + live(b)!.tipNet);
    expect(tipEntries().map((e) => e.mesIndex)).toEqual([a, b]);

    // 删掉最后一条AI回复
    st.chat.splice(b, 1);
    app.onChatMutated();
    expect(tipEntries().map((e) => e.mesIndex)).toEqual([a]);
    expect(view().tipTotal).toBe(live(a)!.tipNet);

    // 重新生成：新的一楼重新计算，id 从旧的最大值之后继续
    const c = await reply('第三轮（重写）。');
    expect(Math.min(...live(c)!.feed.map((f) => f.id))).toBeGreaterThan(maxB);
    expect(live(c)!.heat).toBe(Math.round(live(a)!.heat * 0.6 + live(c)!.hype * 0.4));

    // 滑动：这一楼换成新的回复
    const beforeSwipe = Math.max(...live(c)!.feed.map((f) => f.id));
    const d = await reply('第三轮（滑动）。', 'swipe');
    expect(d).toBe(c);
    expect(Math.min(...live(d)!.feed.map((f) => f.id))).toBeGreaterThan(beforeSwipe);
    expect(tipEntries().map((e) => e.mesIndex)).toEqual([a, d]);
  });
});

describe('入场弹窗开着时切换聊天', () => {
  it('这次回答不算、不记拒绝，切回来会再问', async () => {
    st.chat.push({ mes: '开场白', is_user: false, extra: {} });
    user();
    const chatA = st.chat;
    const metaA = st.meta;
    // 弹窗开着时切到另一个聊天，然后玩家点了「取消」
    st.answer = () => {
      st.chatId = 'chat-2';
      st.chat = [{ mes: '别的聊天', is_user: false, extra: {} }];
      st.meta = {};
      app.onChatChanged();
      return false;
    };
    await reply(BRIEFING);
    expect(st.meta.rlzc?.declined).toBeUndefined();
    expect(metaA.rlzc?.declined).toBeUndefined();
    // 切回来：开场白之后那条简报仍会弹
    st.chatId = 'chat-1';
    st.chat = chatA;
    st.meta = metaA;
    st.answer = () => true;
    app.onChatChanged();
    app.onMessageReceived(st.chat.length - 1, 'normal');
    await flush();
    expect(st.popups.length).toBe(2);
    expect(app.state.session?.packId).toBe('zhonglou');
  });
});

describe('账本页、账户校正卡的等级：玩家等级，不是副本等级', () => {
  it('进S级钟楼后仍按状态栏的D级算；有待生效的校正时按校正', async () => {
    await enterZhonglou(false);
    user();
    await reply('第二轮。\n<状态栏>\n林默：\n等级：D\n积分：1000\n</状态栏>');
    expect(app.state.pack?.level).toBe('S');
    expect(app.playerLevel()).toBe('D');
    app.settingsSaveLevelFix('C');
    expect(app.playerLevel()).toBe('C');
  });

  it('没有状态栏也没有校正时按 D', () => {
    st.chat.push({ mes: '开场白', is_user: false, extra: {} });
    expect(app.playerLevel()).toBe('D');
  });
});
