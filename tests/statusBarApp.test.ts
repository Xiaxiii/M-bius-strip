/** 状态栏格式守护的接入流程：收到回复 → 修正/记录 → 下一次生成的提醒 */
import { beforeEach, describe, expect, it } from 'vitest';
import { flush, installFakeSt } from './fakeSt';
import * as app from '../src/app';
import type { ChatMessage } from '../src/packs/types';

const st = installFakeSt();
const toasts: string[] = [];
(globalThis as any).window.toastr = {
  info: (t: string) => toasts.push(t),
  success() {},
  warning() {},
  error() {},
};

const BODY = ['地点：回廊·休息室', '{{user}}：', '等级：C', '积分：1,200', '在场：林默'].join('\n');
const STORY = '回廊的灯亮着，休息室里很安静。';
const good = `${STORY}\n\n<状态栏>\n${BODY}\n</状态栏>`;
const wrong = `${STORY}\n\n<系统面板>\n${BODY}\n</系统面板>`;

function reset(fix = true) {
  st.chat = [{ mes: good, is_user: false, extra: {} }];
  st.meta = {};
  st.prompts = {};
  st.ctx.extensionSettings = { rlzc: { statusBarFix: fix } };
  toasts.length = 0;
  app.loadSettings();
  app.onChatChanged();
}

/** 用户发言 → 拦截器 → 追加AI消息 → MESSAGE_RECEIVED；返回这次生成的格式提醒 */
async function turn(mes: string): Promise<{ index: number; reminder: string }> {
  st.chat.push({ mes: '继续。', is_user: true, extra: {} });
  await app.interceptor([], 0, null, 'normal');
  const reminder = st.prompts.rlzc_format?.value ?? '';
  const m: ChatMessage = { mes, is_user: false, extra: {}, swipes: [mes], swipe_id: 0 };
  st.chat.push(m);
  const index = st.chat.length - 1;
  app.onMessageReceived(index, 'normal');
  await flush();
  return { index, reminder };
}

async function nextReminder(): Promise<{ value: string; depth: number; scan: boolean } | undefined> {
  st.chat.push({ mes: '继续。', is_user: true, extra: {} });
  await app.interceptor([], 0, null, 'normal');
  const p = st.prompts.rlzc_format;
  st.chat.pop();
  return p?.value ? p : undefined;
}

beforeEach(() => reset());

describe('自动修正开启（默认）', () => {
  it('默认开启，深度默认0', () => {
    st.ctx.extensionSettings = {};
    app.loadSettings();
    expect(app.state.settings.statusBarFix).toBe(true);
    expect(app.state.settings.depths.format).toBe(0);
  });

  it('标签名写错：改成 <状态栏>，内容不动，记进快照，弹一次提示，下一轮不提醒', async () => {
    const { index } = await turn(wrong);
    const msg = st.chat[index];
    expect(msg.mes).toBe(good);
    expect(msg.swipes![0]).toBe(good);
    expect(msg.extra!.rlzc!.format).toEqual({ kind: 'misnamed', detail: '<系统面板>…</系统面板>', fixed: true, from: '<系统面板>…</系统面板>' });
    expect(toasts).toEqual(['已修正本轮状态栏标签']);
    expect(await nextReminder()).toBeUndefined();
  });

  it('只有结尾没开头：不修，下一轮提醒一次', async () => {
    const text = `${STORY}\n${BODY}\n</状态栏>`;
    const { index } = await turn(text);
    expect(st.chat[index].mes).toBe(text);
    expect(st.chat[index].extra!.rlzc!.format).toMatchObject({ kind: 'unpaired' });
    expect(st.chat[index].extra!.rlzc!.format!.fixed).toBeUndefined();
    const r = await nextReminder();
    expect(r).toMatchObject({ depth: 0, scan: false });
    expect(r!.value).toBe('［格式·仅供AI］上一轮的状态栏格式不对。本轮必须在正文末尾完整输出一次<状态栏>……</状态栏>，开头结尾的标签名一字不改，不得写成其他名字。');
    // 提醒这一轮写对了：再下一轮不提醒
    const { reminder } = await turn(good);
    expect(reminder).toContain('［格式·仅供AI］');
    expect(await nextReminder()).toBeUndefined();
  });

  it('缺失：不修，只提醒', async () => {
    const { index } = await turn(STORY);
    expect(st.chat[index].mes).toBe(STORY);
    expect(toasts).toEqual([]);
    expect(await nextReminder()).toBeDefined();
  });

  it('quiet、impersonate 时清掉提醒', async () => {
    await turn(STORY);
    await app.interceptor([], 0, null, 'quiet');
    expect(st.prompts.rlzc_format?.value).toBe('');
  });

  it('开场白补发的 first_message 不检查', () => {
    st.chat = [{ mes: wrong, is_user: false, extra: {} }];
    app.onMessageReceived(0, 'first_message');
    expect(st.chat[0].mes).toBe(wrong);
    expect(st.chat[0].extra!.rlzc).toBeUndefined();
  });
});

describe('自动修正关闭', () => {
  beforeEach(() => reset(false));

  it('只提醒，不改动消息', async () => {
    const { index } = await turn(wrong);
    expect(st.chat[index].mes).toBe(wrong);
    expect(st.chat[index].swipes![0]).toBe(wrong);
    expect(st.chat[index].extra!.rlzc!.format).toEqual({ kind: 'misnamed', detail: '<系统面板>…</系统面板>' });
    expect(toasts).toEqual([]);
    expect(await nextReminder()).toBeDefined();
  });

  it('滑动成写对的回复：提醒消失，旧记录清掉', async () => {
    const { index } = await turn(wrong);
    // 滑动时出错的这一楼正被替换：上一条AI回复是它前面那条（写对了），不提醒
    await app.interceptor([], 0, null, 'swipe');
    expect(st.prompts.rlzc_format?.value ?? '').toBe('');
    st.chat[index] = { ...st.chat[index], mes: good };
    app.onMessageReceived(index, 'swipe');
    expect(st.chat[index].extra!.rlzc!.format).toBeUndefined();
    expect(await nextReminder()).toBeUndefined();
  });
});
