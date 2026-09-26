/**
 * 回廊种菜系统 · 入口：注册拦截器、事件、挂载界面。
 */
import {
  hideTagsInAll,
  hideTagsInMessage,
  interceptor,
  loadSettings,
  onChatChanged,
  onChatMutated,
  onMessageReceived,
  onMessageSwiped,
  liveView,
  state,
  toggleCorridorLive,
} from './app';
import { installLiveApi } from './st/liveApi';
import { onEvent } from './st/context';
import { mountUi } from './ui/mount';

declare global {
  // eslint-disable-next-line no-var
  var rlzcInterceptor: typeof interceptor;
}

// ST 按 manifest.generate_interceptor 的名字在 globalThis 上查找拦截器
globalThis.rlzcInterceptor = interceptor;

function init() {
  loadSettings();

  onEvent('MESSAGE_RECEIVED', (id: number, type?: string) => onMessageReceived(Number(id), type));
  onEvent('CHARACTER_MESSAGE_RENDERED', (id: number) => hideTagsInMessage(Number(id)));
  onEvent('MESSAGE_DELETED', () => onChatMutated());
  onEvent('MESSAGE_SWIPED', (id: number) => {
    onMessageSwiped(Number(id));
    hideTagsInMessage(Number(id));
  });
  onEvent('MESSAGE_EDITED', () => onChatMutated());
  onEvent('MESSAGE_UPDATED', (id: number) => {
    onChatMutated();
    hideTagsInMessage(Number(id));
  });
  onEvent('CHAT_CHANGED', () => onChatChanged());
  onEvent('MORE_MESSAGES_LOADED', () => hideTagsInAll());

  mountUi();
  // 直播数据接口：状态栏正则从主页面读取 window.RLZC_LIVE
  installLiveApi({ view: liveView, toggle: toggleCorridorLive });
  onChatChanged();
  console.log('[rlzc] 回廊种菜系统已加载', state.settings);
}

const jq = (window as any).jQuery;
if (typeof jq === 'function') jq(() => init());
else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
