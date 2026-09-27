/** 开场白跳转（不是逐个滑动）后立即识别入场：MESSAGE_UPDATED / EDITED、CHAT_CHANGED 后补查、DOM 监听兜底 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { installFakeSt } from './fakeSt';
import * as app from '../src/app';
import { createChatWatch } from '../src/st/chatWatch';
import { BRIEFING } from './helpers';
import type { ChatMessage } from '../src/packs/types';

const st = installFakeSt();
const PLAIN = '你醒了。窗外是灰色的天。';
const XIYAN = '红烛高照，满院宾客。\n此次副本的规则是：6=5+1？';
const GREETINGS = [PLAIN, '回廊里很安静。', XIYAN, '休息室里有人在打牌。', BRIEFING];

/** 假的 MutationObserver：记下回调，测试里手动触发 */
class FakeObserver {
  static all: FakeObserver[] = [];
  target: unknown = null;
  constructor(public cb: () => void) {
    FakeObserver.all.push(this);
  }
  observe(target: unknown) {
    this.target = target;
  }
  disconnect() {
    this.target = null;
  }
  static live() {
    return FakeObserver.all.filter((o) => o.target);
  }
  static mutate() {
    for (const o of FakeObserver.live()) o.cb();
  }
}
const chatEl = { id: 'chat' };

/** 开场白消息：swipes 是全部开场白，当前显示第 n 个（从0数） */
function greeting(n: number): ChatMessage {
  return { mes: GREETINGS[n], is_user: false, swipe_id: n, swipes: [...GREETINGS], extra: {} } as ChatMessage;
}
/** 跳到第 n 个开场白：改 swipe_id 和正文（和扩展的开场白跳转一样，不发 MESSAGE_SWIPED） */
function jump(n: number) {
  st.chat[0].swipe_id = n;
  st.chat[0].mes = GREETINGS[n];
}

beforeEach(() => {
  vi.useFakeTimers();
  (globalThis as any).MutationObserver = FakeObserver;
  (globalThis as any).document.getElementById = (id: string) => (id === 'chat' ? chatEl : null);
  FakeObserver.all = [];
  st.chat = [greeting(0)];
  st.meta = {};
  st.popups = [];
  st.chatId = 'chat-1';
  st.ctx.extensionSettings = {};
  app.loadSettings();
  app.onChatChanged();
});

afterEach(() => {
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
  delete (globalThis as any).MutationObserver;
  (globalThis as any).document.getElementById = () => null;
});

describe('开场白跳转：MESSAGE_UPDATED / MESSAGE_EDITED', () => {
  it('更新的是开场白：直接跳到第3个（喜宴）、第5个（钟楼）都立即提示；跳到不是副本的开场白，卡片撤掉', () => {
    expect(app.state.entryCard).toBeNull();
    jump(2);
    app.onChatMutated(0);
    expect(app.state.entryCard).toMatchObject({ index: 0, name: '喜宴' });
    const xiyan = app.state.entryCard!.id;
    jump(4);
    app.onChatMutated(0);
    expect(app.state.entryCard).toMatchObject({ index: 0, name: '钟楼' });
    expect(app.state.entryCard!.id).not.toBe(xiyan);
    jump(1);
    app.onChatMutated(0);
    expect(app.state.entryCard).toBeNull();
  });

  it('内容没变的更新不会重复出卡片', () => {
    jump(2);
    app.onChatMutated(0);
    const id = app.state.entryCard!.id;
    app.onChatMutated(0);
    app.onChatMutated(0);
    expect(app.state.entryCard!.id).toBe(id);
  });

  it('更新的不是开场白：不重新检查开场白', () => {
    st.chat.push({ mes: '开始吧。', is_user: true, extra: {} });
    st.chat.push({ mes: '海浪拍着礁石。', is_user: false, extra: {} });
    jump(2);
    app.onChatMutated(2);
    expect(app.state.entryCard).toBeNull();
    // 删楼（不带楼层）也不检查开场白；兜底由 DOM 监听负责
    app.onChatMutated();
    expect(app.state.entryCard).toBeNull();
  });

  it('已有进行中的副本时不检查', () => {
    jump(2);
    app.onChatMutated(0);
    app.enterEntryCard();
    expect(app.state.session).toMatchObject({ packId: 'xiyan', status: 'active' });
    jump(4);
    app.onChatMutated(0);
    expect(app.state.entryCard).toBeNull();
  });

  it('拒绝过的开场白不再提示，跳到别的副本开场白仍提示', () => {
    jump(2);
    app.onChatMutated(0);
    app.declineEntryCard();
    jump(1);
    app.onChatMutated(0);
    jump(2);
    app.onChatMutated(0);
    expect(app.state.entryCard).toBeNull();
    jump(4);
    app.onChatMutated(0);
    expect(app.state.entryCard).toMatchObject({ name: '钟楼' });
  });
});

describe('CHAT_CHANGED 之后补查', () => {
  it('开场白的正文在事件之后才写入：约300毫秒后补查出卡片', () => {
    st.chat = [greeting(0)];
    app.onChatChanged();
    expect(app.state.entryCard).toBeNull();
    jump(2);
    vi.advanceTimersByTime(299);
    // DOM 监听不算：这里只看补查
    expect(app.state.entryCard).toBeNull();
    vi.advanceTimersByTime(1);
    expect(app.state.entryCard).toMatchObject({ index: 0, name: '喜宴' });
  });

  it('结果相同时补查不会重复出卡片', () => {
    st.chat = [greeting(4)];
    app.onChatChanged();
    const id = app.state.entryCard!.id;
    vi.advanceTimersByTime(300);
    expect(app.state.entryCard!.id).toBe(id);
  });

  it('补查前又切换了聊天：旧聊天的补查取消', () => {
    st.chat = [greeting(0)];
    app.onChatChanged();
    st.chatId = 'chat-2';
    st.chat = [greeting(0)];
    app.onChatChanged();
    st.chat[0].mes = XIYAN;
    vi.advanceTimersByTime(299);
    expect(app.state.entryCard).toBeNull();
  });
});

describe('兜底：监听第一条AI消息的变化', () => {
  it('没有事件的跳转：DOM 一变就重新检查，100毫秒内出卡片；跳走后卡片撤掉', () => {
    vi.advanceTimersByTime(300);
    expect(FakeObserver.live()).toHaveLength(1);
    jump(2);
    FakeObserver.mutate();
    vi.advanceTimersByTime(100);
    expect(app.state.entryCard).toMatchObject({ index: 0, name: '喜宴' });
    jump(4);
    FakeObserver.mutate();
    vi.advanceTimersByTime(100);
    expect(app.state.entryCard).toMatchObject({ index: 0, name: '钟楼' });
    jump(3);
    FakeObserver.mutate();
    vi.advanceTimersByTime(100);
    expect(app.state.entryCard).toBeNull();
  });

  it('开场白没变（别的楼层在流式输出）：不动卡片', () => {
    jump(2);
    app.onChatMutated(0);
    const id = app.state.entryCard!.id;
    st.chat.push({ mes: '唢呐声', is_user: false, extra: {} });
    for (let i = 0; i < 5; i++) {
      st.chat[1].mes += '越来越近';
      FakeObserver.mutate();
      vi.advanceTimersByTime(100);
    }
    expect(app.state.entryCard!.id).toBe(id);
  });

  it('进入副本后停止监听；切换聊天时重建', () => {
    jump(2);
    app.onChatMutated(0);
    app.enterEntryCard();
    expect(FakeObserver.live()).toHaveLength(0);
    st.chatId = 'chat-2';
    st.chat = [greeting(0)];
    st.meta = {};
    app.onChatChanged();
    expect(FakeObserver.live()).toHaveLength(1);
    jump(4);
    FakeObserver.mutate();
    vi.advanceTimersByTime(100);
    expect(app.state.entryCard).toMatchObject({ name: '钟楼' });
  });
});

describe('createChatWatch', () => {
  it('一段时间内的多次变化合并成一次通知；停止后不再通知', () => {
    const fn = vi.fn();
    const w = createChatWatch(fn, 100);
    w.start();
    expect(w.running).toBe(true);
    FakeObserver.mutate();
    FakeObserver.mutate();
    vi.advanceTimersByTime(50);
    FakeObserver.mutate();
    vi.advanceTimersByTime(50);
    expect(fn).toHaveBeenCalledTimes(1);
    FakeObserver.mutate();
    w.stop();
    vi.advanceTimersByTime(200);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(w.running).toBe(false);
  });

  it('找不到聊天区或没有 MutationObserver 时什么都不做', () => {
    (globalThis as any).document.getElementById = () => null;
    const w = createChatWatch(() => {});
    w.start();
    expect(w.running).toBe(false);
  });
});

describe('兜底监听：生成中不查', () => {
  it('第一条AI消息正在流式输出时不按半截正文出卡片', () => {
    let generating = true;
    (globalThis as any).document.getElementById = (id: string) => (id === 'chat' ? chatEl : id === 'mes_stop' ? { generating } : null);
    (globalThis as any).getComputedStyle = (el: any) => ({ display: el.generating ? 'flex' : 'none' });
    st.chat = [{ mes: '开始吧。', is_user: true, extra: {} }];
    app.onChatChanged();
    st.chat.push({ mes: '「副本简报 - 钟', is_user: false, extra: {} });
    FakeObserver.mutate();
    vi.advanceTimersByTime(100);
    expect(app.state.entryCard).toBeNull();
    // 写完：MESSAGE_RECEIVED 照常提示；之后的 DOM 变化不会把卡片撤了重出
    st.chat[1].mes = BRIEFING;
    generating = false;
    app.onMessageReceived(1, 'normal');
    const id = app.state.entryCard!.id;
    expect(app.state.entryCard).toMatchObject({ index: 1, name: '钟楼' });
    FakeObserver.mutate();
    vi.advanceTimersByTime(100);
    expect(app.state.entryCard!.id).toBe(id);
    delete (globalThis as any).getComputedStyle;
  });
});
