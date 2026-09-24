import { createApp, watch } from 'vue';
import App from './App.vue';
import css from './style.css?inline';
import { saveSettings, state } from '../app';

const HOST_ID = 'rlzc-host';
const MENU_ID = 'rlzc-menu-btn';
const DRAWER_ID = 'rlzc-settings-drawer';

/** 界面挂在 Shadow DOM 里，与 ST 及其他扩展的样式互不影响 */
export function mountUi(): void {
  if (document.getElementById(HOST_ID)) return;
  const host = document.createElement('div');
  host.id = HOST_ID;
  document.body.appendChild(host);
  const shadow = host.attachShadow({ mode: 'open' });
  const style = document.createElement('style');
  style.textContent = css;
  shadow.appendChild(style);
  const root = document.createElement('div');
  root.className = 'rlzc-root';
  shadow.appendChild(root);
  createApp(App).mount(root);
  addMenuButton();
  addSettingsDrawer();
}

/** ST 顶部扩展菜单（魔棒）里的入口 */
function addMenuButton(tries = 0): void {
  const menu = document.getElementById('extensionsMenu');
  if (!menu) {
    if (tries < 40) setTimeout(() => addMenuButton(tries + 1), 500);
    return;
  }
  if (document.getElementById(MENU_ID)) return;
  const item = document.createElement('div');
  item.id = MENU_ID;
  item.className = 'list-group-item flex-container flexGap5 interactable';
  item.tabIndex = 0;
  item.title = '打开回廊种菜系统面板';
  const icon = document.createElement('div');
  icon.className = 'fa-solid fa-seedling extensionsMenuExtensionButton';
  const label = document.createElement('span');
  label.textContent = '回廊种菜系统';
  item.append(icon, label);
  item.addEventListener('click', () => {
    state.panelOpen = !state.panelOpen;
  });
  menu.appendChild(item);
}

/**
 * ST「扩展」面板里的一栏：让玩家在扩展列表里也能找到本扩展。
 * 使用 ST 自带的 inline-drawer 结构，展开/收起由 ST 处理。
 */
function addSettingsDrawer(tries = 0): void {
  const container = document.getElementById('extensions_settings2') ?? document.getElementById('extensions_settings');
  if (!container) {
    if (tries < 40) setTimeout(() => addSettingsDrawer(tries + 1), 500);
    return;
  }
  if (document.getElementById(DRAWER_ID)) return;

  const el = (tag: string, cls = '', text = '') => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  };

  const wrap = el('div');
  wrap.id = DRAWER_ID;
  const drawer = el('div', 'inline-drawer');
  const header = el('div', 'inline-drawer-toggle inline-drawer-header');
  header.append(el('b', '', '回廊种菜系统'), el('div', 'inline-drawer-icon fa-solid fa-circle-chevron-down down'));
  const content = el('div', 'inline-drawer-content');

  const open = el('div', 'menu_button menu_button_icon', '打开面板');
  open.prepend(el('i', 'fa-solid fa-seedling'));
  open.addEventListener('click', () => (state.panelOpen = true));

  const reset = el('div', 'menu_button menu_button_icon', '悬浮球回到默认位置');
  reset.addEventListener('click', () => {
    state.settings.ball = { x: null, y: null };
    state.settings.showBall = true;
    saveSettings();
  });

  const label = el('label', 'checkbox_label');
  const box = document.createElement('input');
  box.type = 'checkbox';
  box.addEventListener('change', () => {
    state.settings.showBall = box.checked;
    saveSettings();
  });
  label.append(box, el('span', '', '显示悬浮球'));
  watch(() => state.settings.showBall, (v) => (box.checked = v), { immediate: true });

  const buttons = el('div', 'flex-container');
  buttons.append(open, reset);
  content.append(buttons, label, el('small', '', '也可以从输入框左侧的魔棒菜单打开面板。'));
  drawer.append(header, content);
  wrap.append(drawer);
  container.append(wrap);
}
