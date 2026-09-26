/**
 * window.RLZC_LIVE：给状态栏正则读取直播数据（第三期b-第3段）。
 * 数据由 app.ts 从聊天记录重放得到；这里只负责订阅通知和「每1.5–3秒放出一条」的节奏。
 */
import type { FeedItem, LiveView } from '../core/liveFlow';

export interface LiveProvider {
  view(hidden: ReadonlySet<number>): LiveView;
  toggle(): boolean;
}

export interface RlzcLiveApi {
  get(): LiveView;
  subscribe(fn: () => void): () => void;
  toggle(): boolean;
}

declare global {
  interface Window {
    RLZC_LIVE?: RlzcLiveApi;
  }
}

/** 还没放出的 feed id */
const hidden = new Set<number>();
const queue: number[] = [];
let timer: ReturnType<typeof setTimeout> | null = null;
let subs: (() => void)[] = [];
let provider: LiveProvider | null = null;

export function notifyLive(): void {
  for (const f of subs.slice()) {
    try {
      f();
    } catch (e) {
      console.warn('[rlzc] RLZC_LIVE 订阅回调出错', e);
    }
  }
}

function nextDelay(): number {
  return 1500 + Math.random() * 1500;
}

function tick(): void {
  timer = null;
  const id = queue.shift();
  if (id !== undefined) {
    hidden.delete(id);
    notifyLive();
  }
  if (queue.length) timer = setTimeout(tick, nextDelay());
}

/** 本轮的弹幕和打赏陆续放出：第一条立即出现，之后每1.5–3秒一条 */
export function scheduleFeed(items: FeedItem[]): void {
  if (!items.length) return;
  for (const f of items) {
    hidden.add(f.id);
    queue.push(f.id);
  }
  if (!timer) tick();
  else notifyLive();
}

/** 页面刷新、切换聊天时：未放出的直接补齐 */
export function releaseAll(): void {
  if (timer) clearTimeout(timer);
  timer = null;
  queue.length = 0;
  hidden.clear();
}

export function installLiveApi(p: LiveProvider): void {
  provider = p;
  window.RLZC_LIVE = {
    get: () => provider!.view(hidden),
    subscribe(fn: () => void) {
      if (typeof fn !== 'function') return () => {};
      subs.push(fn);
      return () => {
        subs = subs.filter((x) => x !== fn);
      };
    },
    toggle: () => provider!.toggle(),
  };
}

export function uninstallLiveApi(): void {
  releaseAll();
  subs = [];
  provider = null;
  delete window.RLZC_LIVE;
}
