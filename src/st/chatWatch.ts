/**
 * 监听 #chat 的 DOM 变化（兜底：有的扩展改了开场白的 swipe_id 和正文、刷新了显示，却不发任何事件）。
 * 只负责「有变化」的通知，按 delay 毫秒合并成一次；变没变由调用方比对 swipe_id 与正文判断。
 */
export interface ChatWatch {
  readonly running: boolean;
  start(): void;
  stop(): void;
}

export function createChatWatch(onChange: () => void, delay = 100): ChatWatch {
  let observer: MutationObserver | null = null;
  let timer: ReturnType<typeof setTimeout> | null = null;
  const fire = () => {
    timer = null;
    onChange();
  };
  return {
    get running() {
      return observer !== null;
    },
    start() {
      if (observer || typeof MutationObserver === 'undefined') return;
      const root = document.getElementById('chat');
      if (!root) return;
      // 合并而不是防抖：流式输出时 DOM 一直在变，也保证 delay 毫秒内检查一次
      observer = new MutationObserver(() => {
        if (!timer) timer = setTimeout(fire, delay);
      });
      observer.observe(root, { childList: true, subtree: true, characterData: true });
    },
    stop() {
      observer?.disconnect();
      observer = null;
      if (timer) clearTimeout(timer);
      timer = null;
    },
  };
}

/** ST 正在生成（停止按钮可见）：流式输出中的正文还没写完 */
export function isGenerating(): boolean {
  const stop = document.getElementById('mes_stop');
  return !!stop && getComputedStyle(stop).display !== 'none';
}
