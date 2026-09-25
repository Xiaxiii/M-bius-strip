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
  eventSource: { on(ev: string, fn: AnyFn): void; removeListener?(ev: string, fn: AnyFn): void };
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
