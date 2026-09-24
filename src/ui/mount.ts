import { createApp } from 'vue';
import App from './App.vue';
import css from './style.css?inline';
import { state } from '../app';

const HOST_ID = 'rlzc-host';
const MENU_ID = 'rlzc-menu-btn';

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
