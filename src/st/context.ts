/**
 * 对 SillyTavern.getContext() 的薄封装。集中处理版本差异。
 * 接口按 ST 1.19.0 源码核对：
 *  - setExtensionPrompt(key, value, position, depth, scan = false, role = SYSTEM, filter = null)
 *  - extension_prompt_types.IN_CHAT = 1、extension_prompt_roles.SYSTEM = 0（getContext 未导出这两个枚举，按源码取值）
 *  - 拦截器：globalThis[manifest.generate_interceptor](chat, contextSize, abort, type)
 *  - chatMetadata 会在切换聊天时被整体替换，所以每次都重新调用 getContext()，不缓存引用
 */
import type { ChatMessage } from '../packs/types';

export const PROMPT_IN_CHAT = 1;
export const ROLE_SYSTEM = 0;

type AnyFn = (...args: any[]) => any;

export interface StContext {
  chat: ChatMessage[];
  chatMetadata: Record<string, any>;
  extensionSettings: Record<string, any>;
  eventSource: { on(ev: string, fn: AnyFn): void; makeFirst?(ev: string, fn: AnyFn): void; removeListener?(ev: string, fn: AnyFn): void };
  eventTypes?: Record<string, string>;
  event_types?: Record<string, string>;
  setExtensionPrompt: AnyFn;
  saveMetadataDebounced?: AnyFn;
  saveMetadata?: AnyFn;
  saveSettingsDebounced: AnyFn;
  getCurrentChatId?: () => string | undefined;
  chatId?: string;
  callGenericPopup?: AnyFn;
  POPUP_TYPE?: Record<string, number>;
  POPUP_RESULT?: Record<string, number | null>;
}

declare global {
  interface Window {
    SillyTavern?: { getContext(): StContext };
    toastr?: { info: AnyFn; success: AnyFn; warning: AnyFn; error: AnyFn };
  }
}

export function ctx(): StContext {
  const st = window.SillyTavern;
  if (!st?.getContext) throw new Error('[rlzc] 找不到 SillyTavern.getContext()');
  return st.getContext();
}

export function eventTypes(): Record<string, string> {
  const c = ctx();
  return c.eventTypes ?? c.event_types ?? {};
}

export function onEvent(name: string, fn: AnyFn): void {
  const type = eventTypes()[name];
  if (!type) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${name}，已跳过`);
    return;
  }
  ctx().eventSource.on(type, fn);
}

/**
 * 注册在最前面（ST 的 eventSource.makeFirst），先于酒馆助手等其他扩展执行。
 * 用于改写正文显示：酒馆助手在同一事件里把代码块渲染成界面，必须让它在我们改完之后再扫描。
 */
export function onEventFirst(name: string, fn: AnyFn): void {
  const type = eventTypes()[name];
  if (!type) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${name}，已跳过`);
    return;
  }
  const es = ctx().eventSource;
  if (typeof es.makeFirst === 'function') es.makeFirst(type, fn);
  else es.on(type, fn);
}

export function getChat(): ChatMessage[] {
  return ctx().chat ?? [];
}

export function getChatId(): string {
  const c = ctx();
  return String(c.getCurrentChatId?.() ?? c.chatId ?? '');
}

export function getMeta(): Record<string, any> {
  return ctx().chatMetadata ?? {};
}

export function saveMeta(): void {
  const c = ctx();
  if (c.saveMetadataDebounced) c.saveMetadataDebounced();
  else c.saveMetadata?.();
}

export function setPrompt(key: string, value: string, depth: number, scan: boolean): void {
  ctx().setExtensionPrompt(key, value, PROMPT_IN_CHAT, depth, scan, ROLE_SYSTEM);
}

/** 保存聊天（消息原文改动后） */
export function saveChat(): void {
  const c = ctx() as any;
  if (typeof c.saveChat === 'function') void c.saveChat();
  else c.saveChatDebounced?.();
}

/** 按消息原文重新渲染这一楼（DOM 里还没有这一楼时什么都不做） */
export function rerenderMessage(mesId: number): void {
  const c = ctx() as any;
  const msg = getChat()[mesId];
  if (!msg || !document.querySelector(`#chat .mes[mesid="${mesId}"]`)) return;
  if (typeof c.updateMessageBlock === 'function') c.updateMessageBlock(mesId, msg);
}

export function toast(kind: 'info' | 'success' | 'warning' | 'error', text: string): void {
  const t = window.toastr;
  if (t) t[kind](text, '回廊种菜系统');
  else console.log(`[rlzc] ${text}`);
}

/** 确认框：优先用 ST 的弹窗，缺失时退回浏览器 confirm */
export async function confirmBox(text: string): Promise<boolean> {
  const c = ctx();
  if (c.callGenericPopup && c.POPUP_TYPE && c.POPUP_RESULT) {
    const el = document.createElement('div');
    el.textContent = text;
    const result = await c.callGenericPopup(el, c.POPUP_TYPE.CONFIRM, '', { okButton: '确定', cancelButton: '取消' });
    return result === c.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(text);
}

/**
 * 酒馆顶部的小通知，下面带一个文字按钮；text 用 textContent 放入。
 * 点按钮时先关掉这条通知再执行 onAction。没有 toastr 时什么都不做。
 */
export function actionToast(text: string, actionText: string, onAction: () => void, title = '回廊种菜系统'): void {
  const t = window.toastr as any;
  const $ = (window as any).jQuery;
  if (!t || typeof $ !== 'function') return;
  // 文字和按钮在同一段里，按钮跟在句末，不单独占一行，通知框不会被撑高
  const box = document.createElement('div');
  box.style.cssText = 'overflow-wrap:anywhere;';
  box.append(document.createTextNode(text));
  const btn = document.createElement('a');
  btn.href = '#';
  btn.textContent = actionText;
  btn.className = 'rlzc-toast-action';
  btn.style.cssText = 'margin-left:.5em;color:inherit;font-weight:bold;text-decoration:underline;white-space:nowrap;cursor:pointer;';
  box.append(btn);
  // 内容是用 textContent 拼好的元素，不需要 toastr 再转义（它只会转义字符串）
  const $toast = t.info($(box), title, { timeOut: 6000, extendedTimeOut: 2000, closeButton: true, escapeHtml: false });
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    t.clear($toast);
    onAction();
  });
}

/** 输入框：优先用 ST 的弹窗，缺失时退回浏览器 prompt；取消返回 null */
export async function inputBox(text: string, value = ''): Promise<string | null> {
  const c = ctx();
  if (c.callGenericPopup && c.POPUP_TYPE) {
    const el = document.createElement('div');
    el.textContent = text;
    const result = await c.callGenericPopup(el, c.POPUP_TYPE.INPUT, value, { okButton: '确定', cancelButton: '取消' });
    return typeof result === 'string' ? result : null;
  }
  return window.prompt(text, value);
}

/** 带一个勾选框的确认框（入场弹窗的「开启直播」）；check 为 null 时不显示勾选框 */
export async function confirmWithCheck(
  text: string,
  check: { label: string; checked: boolean } | null,
): Promise<{ ok: boolean; checked: boolean }> {
  const c = ctx();
  const el = document.createElement('div');
  const p = document.createElement('div');
  p.textContent = text;
  el.append(p);
  let box: HTMLInputElement | null = null;
  if (check) {
    const label = document.createElement('label');
    label.className = 'checkbox_label rlzc-live-optin';
    label.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;gap:8px;margin-top:10px;min-height:44px;padding:0 8px;cursor:pointer;';
    box = document.createElement('input');
    box.type = 'checkbox';
    box.id = 'rlzc-live-optin';
    box.checked = check.checked;
    const span = document.createElement('span');
    span.textContent = check.label;
    label.append(box, span);
    el.append(label);
  }
  if (c.callGenericPopup && c.POPUP_TYPE && c.POPUP_RESULT) {
    const result = await c.callGenericPopup(el, c.POPUP_TYPE.CONFIRM, '', { okButton: '确定', cancelButton: '取消' });
    return { ok: result === c.POPUP_RESULT.AFFIRMATIVE, checked: !!box?.checked };
  }
  const ok = window.confirm(text);
  return { ok, checked: ok && !!check?.checked };
}
