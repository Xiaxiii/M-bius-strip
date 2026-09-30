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
import { onEvent, onEventFirst } from './st/context';
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
  onEvent('MESSAGE_DELETED', () => onChatMutated());
  onEvent('MESSAGE_SWIPED', (id: number) => onMessageSwiped(Number(id)));
  onEvent('MESSAGE_EDITED', (id: number) => onChatMutated(Number(id)));
  onEvent('MESSAGE_UPDATED', (id: number) => onChatMutated(Number(id)));
  onEvent('CHAT_CHANGED', () => onChatChanged());
  // 隐藏机器标签要改写正文显示：排在酒馆助手前面，让它在改写之后再把状态栏代码块渲染成界面
  onEventFirst('CHARACTER_MESSAGE_RENDERED', (id: number) => hideTagsInMessage(Number(id), true));
  onEventFirst('MESSAGE_SWIPED', (id: number) => hideTagsInMessage(Number(id), true));
  onEventFirst('MESSAGE_UPDATED', (id: number) => hideTagsInMessage(Number(id), true));
  onEventFirst('MORE_MESSAGES_LOADED', () => hideTagsInAll(false, true));
  // 酒馆助手在 chatLoaded 里整页渲染；CHAT_CHANGED 已同步处理过，这里只补上 CHAT_CHANGED 之后才画出来的楼层
  onEventFirst('CHAT_LOADED', () => hideTagsInAll(false, true));

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
