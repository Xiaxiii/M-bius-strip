/** 入场提示小卡片：提示、进入、不是（记拒绝）、✕（不记拒绝）、滑动/新回复/切换聊天后撤掉 */
import { beforeEach, describe, expect, it } from 'vitest';
import { flush, installFakeSt } from './fakeSt';
import * as app from '../src/app';
import { BRIEFING } from './helpers';
import type { ChatMessage } from '../src/packs/types';

const st = installFakeSt();
const XIYAN_GREETING = '红烛高照，满院宾客。\n此次副本的规则是：6=5+1？';

function reset() {
  st.chat = [];
  st.meta = {};
  st.prompts = {};
  st.popups = [];
  st.chatId = 'chat-1';
  st.ctx.extensionSettings = {};
  app.loadSettings();
  app.onChatChanged();
}

const ai = (mes: string): ChatMessage => ({ mes, is_user: false, extra: {} });
const user = (mes = '继续。') => st.chat.push({ mes, is_user: true, extra: {} });

async function reply(mes: string, type = 'normal'): Promise<number> {
  await app.interceptor([], 0, null, type);
  if (type === 'swipe') st.chat[st.chat.length - 1] = ai(mes);
  else st.chat.push(ai(mes));
  const i = st.chat.length - 1;
  app.onMessageReceived(i, type);
  await flush();
  return i;
}

/** 已有聊天：开场白 + 用户 + AI 回复带钟楼简报 */
async function briefingCard() {
  st.chat.push(ai('开场白'));
  user('进入副本');
  return reply(BRIEFING);
}

beforeEach(reset);

describe('入场提示小卡片', () => {
  it('识别到入场信号时显示卡片，不弹确认框、不自动入场', async () => {
    const i = await briefingCard();
    expect(st.popups).toHaveLength(0);
    expect(app.state.session).toBeNull();
    expect(app.state.entryCard).toMatchObject({ index: i, name: '钟楼', level: 'S', unknown: false, liveShow: true, live: false });
  });

  it('未收录的副本：卡片注明使用通用副本包，等级从简报读', async () => {
    st.chat.push(ai('开场白'));
    user();
    await reply('「副本简报——《雾 港》」\n「等级：b级（越级）」\n「时限：10小时」');
    expect(app.state.entryCard).toMatchObject({ name: '雾 港', level: 'B', unknown: true });
    app.enterEntryCard();
    expect(app.state.session).toMatchObject({ packId: 'generic', status: 'active' });
    expect(app.state.pack?.level).toBe('B');
  });

  it('「进入」：以卡片那一楼为第1轮入场，卡片消失；直播开关的选择被记住', async () => {
    const i = await briefingCard();
    app.setEntryCardLive(true);
    // 拨动开关不关卡片
    expect(app.state.entryCard?.live).toBe(true);
    app.enterEntryCard();
    expect(app.state.entryCard).toBeNull();
    expect(app.state.session).toMatchObject({ packId: 'zhonglou', entryIndex: i, status: 'active', live: true });
    expect(app.state.settings.live.optIn).toBe(true);
    // 下一次提示（新聊天）沿用上次选择
    st.chatId = 'chat-2';
    st.chat = [];
    st.meta = {};
    app.onChatChanged();
    await briefingCard();
    expect(app.state.entryCard?.live).toBe(true);
  });

  it('「不是」：记入拒绝，这条消息以后不再问（切换聊天回来也不问）', async () => {
    const i = await briefingCard();
    app.declineEntryCard();
    expect(app.state.entryCard).toBeNull();
    expect(app.state.session).toBeNull();
    expect(st.meta.rlzc.declined).toEqual([`${i}:钟楼`]);
    app.onChatChanged();
    app.onMessageReceived(i, 'normal');
    await flush();
    expect(app.state.entryCard).toBeNull();
  });

  it('「✕」：这次先不处理，不记拒绝；重新打开聊天后还会提示', async () => {
    st.chat.push(ai(XIYAN_GREETING));
    app.onChatChanged();
    expect(app.state.entryCard).toMatchObject({ index: 0, name: '喜宴', level: 'D' });
    app.dismissEntryCard();
    expect(app.state.entryCard).toBeNull();
    expect(st.meta.rlzc?.declined).toBeUndefined();
    // 同一次打开里，开场白补发的 MESSAGE_RECEIVED 不会让它重新出现
    app.onMessageReceived(0, 'first_message');
    await flush();
    expect(app.state.entryCard).toBeNull();
    // 重新打开（切换聊天、刷新）：再次提示
    app.onChatChanged();
    expect(app.state.entryCard).toMatchObject({ index: 0, name: '喜宴' });
  });

  it('滑动开场白：旧卡片撤掉，按新的开场白决定是否重新提示', async () => {
    st.chat.push(ai(XIYAN_GREETING));
    app.onChatChanged();
    const first = app.state.entryCard!.id;
    // 滑到一条不带入场信号的开场白：撤掉，不再提示
    st.chat[0] = ai('你醒了。');
    app.onMessageSwiped(0);
    expect(app.state.entryCard).toBeNull();
    // 滑到钟楼简报：重新提示
    st.chat[0] = ai(BRIEFING);
    app.onMessageSwiped(0);
    expect(app.state.entryCard).toMatchObject({ index: 0, name: '钟楼' });
    expect(app.state.entryCard!.id).not.toBe(first);
    // 滑回喜宴：换成喜宴的卡片，同一时间只有一张
    st.chat[0] = ai(XIYAN_GREETING);
    app.onMessageSwiped(0);
    expect(app.state.entryCard).toMatchObject({ index: 0, name: '喜宴' });
  });

  it('收到新的AI回复：旧卡片撤掉；新回复不带信号时不再提示', async () => {
    await briefingCard();
    user();
    await reply('海浪拍着礁石。');
    expect(app.state.entryCard).toBeNull();
    expect(st.meta.rlzc?.declined).toBeUndefined();
  });

  it('重新生成入场那一楼：旧卡片撤掉，按新回复重新提示', async () => {
    await briefingCard();
    const first = app.state.entryCard!.id;
    await reply(XIYAN_GREETING, 'swipe');
    expect(app.state.entryCard).toMatchObject({ name: '喜宴' });
    expect(app.state.entryCard!.id).not.toBe(first);
  });

  it('切换聊天：卡片撤掉；卡片那一楼被删掉：撤掉', async () => {
    await briefingCard();
    st.chatId = 'chat-2';
    st.chat = [ai('别的聊天')];
    st.meta = {};
    app.onChatChanged();
    expect(app.state.entryCard).toBeNull();

    reset();
    await briefingCard();
    st.chat.pop();
    app.onChatMutated();
    expect(app.state.entryCard).toBeNull();
  });

  it('disableLive 副本（污名）不显示直播开关', async () => {
    st.chat.push(ai('开场白'));
    user();
    await reply('「副本简报 · 污名」\n「等级：B」');
    expect(app.state.entryCard).toMatchObject({ name: '污名', liveShow: false });
  });

  it('已有进行中的副本时不提示', async () => {
    await briefingCard();
    app.enterEntryCard();
    user();
    await reply(XIYAN_GREETING);
    expect(app.state.entryCard).toBeNull();
  });
});
