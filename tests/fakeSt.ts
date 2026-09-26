/**
 * 测试用的最小 SillyTavern 环境：getContext()、弹窗、注入记录，以及 app.ts 用到的几个 DOM 接口。
 * 只用于在 node 里跑 app.ts 的流程（入场、收到消息、记账、直播），不模拟渲染。
 */
import type { ChatMessage } from '../src/packs/types';

export class FakeEl {
  tag: string;
  children: FakeEl[] = [];
  style: Record<string, string> & { cssText?: string } = {};
  textContent = '';
  type = '';
  id = '';
  className = '';
  checked = false;
  value = '';
  constructor(tag: string) {
    this.tag = tag;
  }
  append(...c: FakeEl[]) {
    this.children.push(...c);
  }
  prepend(...c: FakeEl[]) {
    this.children.unshift(...c);
  }
  remove() {}
  addEventListener() {}
  /** 深度查找第一个 input */
  findInput(): FakeEl | null {
    if (this.tag === 'input') return this;
    for (const c of this.children) {
      const f = c.findInput();
      if (f) return f;
    }
    return null;
  }
  allText(): string {
    return [this.textContent, ...this.children.map((c) => c.allText())].join('');
  }
}

export interface Popup {
  text: string;
  /** 弹窗里的勾选框（没有时为 null） */
  check: FakeEl | null;
}

export interface FakeSt {
  ctx: any;
  chat: ChatMessage[];
  meta: Record<string, any>;
  chatId: string;
  prompts: Record<string, { value: string; depth: number; scan: boolean }>;
  popups: Popup[];
  /** 下一次弹窗怎么回答：返回 true = 确定；可以改勾选框 */
  answer: (p: Popup) => boolean | Promise<boolean>;
}

export function installFakeSt(): FakeSt {
  const st: FakeSt = {
    ctx: null,
    chat: [],
    meta: {},
    chatId: 'chat-1',
    prompts: {},
    popups: [],
    answer: () => true,
  };
  st.ctx = {
    get chat() {
      return st.chat;
    },
    get chatMetadata() {
      return st.meta;
    },
    extensionSettings: {},
    eventSource: { on() {} },
    eventTypes: {},
    setExtensionPrompt(key: string, value: string, _pos: number, depth: number, scan: boolean) {
      st.prompts[key] = { value, depth, scan };
    },
    saveMetadataDebounced() {},
    saveSettingsDebounced() {},
    getCurrentChatId: () => st.chatId,
    name1: '林默',
    POPUP_TYPE: { TEXT: 1, CONFIRM: 2, INPUT: 3 },
    POPUP_RESULT: { AFFIRMATIVE: 1, NEGATIVE: 0, CANCELLED: null },
    async callGenericPopup(el: FakeEl) {
      const p: Popup = { text: el.allText(), check: el.findInput() };
      st.popups.push(p);
      return st.answer(p) ? 1 : 0;
    },
  };
  (globalThis as any).window = {
    SillyTavern: { getContext: () => st.ctx },
    confirm: () => true,
  };
  (globalThis as any).document = {
    createElement: (tag: string) => new FakeEl(tag),
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
  };
  return st;
}

/** 等异步流程（弹窗、then）走完 */
export async function flush(): Promise<void> {
  for (let i = 0; i < 30; i++) await Promise.resolve();
}
