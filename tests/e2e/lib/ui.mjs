/**
 * Playwright 操作 SillyTavern 1.19.0 界面的辅助函数。
 * 选择器按 ST 1.19.0 的 public/index.html 核对；本扩展的界面在 Shadow DOM（#rlzc-host）里，Playwright 的 CSS 选择器可以直接穿透。
 */
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { MOCK_URL, OUT, ST_URL } from './paths.mjs';

export const SHOTS = path.join(OUT, 'shots');
fs.mkdirSync(SHOTS, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** 所有测试只用假密钥 */
export const FAKE_KEYS = {
  main: 'sk-fake-main-0000',
  a: 'sk-fake-recorder-aaaa',
  b: 'sk-fake-recorder-bbbb',
  bad: 'sk-fake-bad',
};

export async function launch() {
  // 有预装的 Chromium 就用它；否则用 Playwright 自己下载的（npx playwright install chromium）
  const preinstalled = '/opt/pw-browsers/chromium';
  const executablePath = process.env.CHROMIUM || (fs.existsSync(preinstalled) ? preinstalled : undefined);
  return chromium.launch({ executablePath, headless: true });
}

export const DESKTOP = { viewport: { width: 1280, height: 860 } };
export const MOBILE = {
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
};

/** 打开 ST，收集控制台输出 */
export async function openST(browser, device = DESKTOP) {
  const context = await browser.newContext(device);
  const page = await context.newPage();
  page.isMobile = !!device.isMobile;
  page.consoleLog = [];
  page.on('console', (m) => page.consoleLog.push({ t: Date.now(), type: m.type(), text: m.text() }));
  page.on('pageerror', (e) => page.consoleLog.push({ t: Date.now(), type: 'pageerror', text: `${e.message}\n${e.stack ?? ''}` }));
  page.on('dialog', (d) => d.dismiss().catch(() => {}));
  page.on('response', (r) => {
    if (r.status() >= 400) page.consoleLog.push({ t: Date.now(), type: 'http', text: `${r.status()} ${r.request().method()} ${r.url()}` });
  });
  await gotoST(page);
  return page;
}

export async function gotoST(page) {
  await page.goto(ST_URL, { waitUntil: 'domcontentloaded' });
  await waitReady(page);
  await onboarding(page);
}

/** 第一次打开 ST 时的欢迎弹窗：填玩家名字（persona）并保存 */
export async function onboarding(page, name = '阿柚') {
  const dlg = page.locator('dialog.popup[open]').filter({ hasText: 'Persona Name' });
  if (!(await dlg.count())) return;
  await dlg.locator('.popup-input').fill(name);
  await dlg.locator('.popup-button-ok').click();
  await dlg.waitFor({ state: 'hidden' }).catch(() => {});
  await page.waitForTimeout(800);
}

export async function reload(page) {
  await page.reload({ waitUntil: 'domcontentloaded' });
  await waitReady(page);
  await onboarding(page);
}

export async function waitReady(page) {
  await page.waitForFunction(
    () => window.SillyTavern?.getContext && document.querySelector('#rlzc-host') && document.querySelector('#send_textarea'),
    null,
    { timeout: 90000 },
  );
  // 等 ST 加载完设置与角色列表
  await page.waitForFunction(() => !document.querySelector('#preloader'), null, { timeout: 90000 }).catch(() => {});
  await sleep(1500);
}

export async function shot(page, name) {
  const file = path.join(SHOTS, `${name}.jpg`);
  await page.screenshot({ path: file, type: 'jpeg', quality: 60 });
  return path.basename(file);
}

/** 只截某个元素 */
export async function shotEl(locator, name) {
  const file = path.join(SHOTS, `${name}.jpg`);
  await locator.screenshot({ path: file, type: 'jpeg', quality: 60 });
  return path.basename(file);
}

/** 点击：手机模式下用触摸 */
export async function press(page, locator) {
  if (page.isMobile) await locator.tap();
  else await locator.click();
}

/** 读 ST 上下文里的数据 */
export function st(page, fn, arg) {
  return page.evaluate(fn, arg);
}

// ───────────── 弹窗 ─────────────

/** 等一个包含 text 的 ST 弹窗出现，返回它的 locator */
export async function popup(page, text, timeout = 15000) {
  const dlg = page.locator('dialog.popup[open]').filter({ hasText: text }).last();
  await dlg.waitFor({ state: 'visible', timeout });
  return dlg;
}

export async function popupClick(page, text, button = 'ok', timeout = 15000) {
  const dlg = await popup(page, text, timeout);
  const sel = button === 'ok' ? '.popup-button-ok' : button === 'cancel' ? '.popup-button-cancel' : `.popup-button-custom:has-text("${button}")`;
  await dlg.locator(sel).click();
  await dlg.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  return true;
}

export async function hasPopup(page, text) {
  return (await page.locator('dialog.popup[open]').filter({ hasText: text }).count()) > 0;
}

// ───────────── API 连接（主AI → 模拟接口）─────────────

export async function openDrawer(page, id) {
  const icon = page.locator(`#${id} .drawer-toggle`).first();
  const content = page.locator(`#${id} .drawer-content`).first();
  if (!(await content.isVisible())) await icon.click();
  await content.waitFor({ state: 'visible' });
}

export async function closeDrawer(page, id) {
  const content = page.locator(`#${id} .drawer-content`).first();
  if (await content.isVisible()) await page.locator(`#${id} .drawer-toggle`).first().click();
  await content.waitFor({ state: 'hidden' }).catch(() => {});
}

/** 主API设为指向模拟接口的「自定义（OpenAI 兼容）」来源 */
export async function connectMainApi(page, { stream = false } = {}) {
  await openDrawer(page, 'sys-settings-button');
  await page.selectOption('#main_api', 'openai');
  await page.selectOption('#chat_completion_source', 'custom');
  await page.fill('#custom_api_url_text', `${MOCK_URL}/v1`);
  await page.locator('#custom_api_url_text').dispatchEvent('input');
  await page.fill('#api_key_custom', FAKE_KEYS.main);
  await page.fill('#custom_model_id', 'mock-main');
  await page.locator('#custom_model_id').dispatchEvent('input');
  await page.click('#api_button_openai');
  await page.waitForFunction(() => SillyTavern.getContext().onlineStatus && SillyTavern.getContext().onlineStatus !== 'no_connection', null, {
    timeout: 30000,
  });
  await closeDrawer(page, 'sys-settings-button');
  await setStreaming(page, stream);
}

/** 打开/关闭流式输出（AI 回复设置抽屉里的 Streaming 勾选框） */
export async function setStreaming(page, on) {
  await openDrawer(page, 'ai-config-button');
  const box = page.locator('#stream_toggle');
  if ((await box.isChecked()) !== on) await box.setChecked(on, { force: true });
  await page.waitForTimeout(300);
  await closeDrawer(page, 'ai-config-button');
}

// ───────────── 角色卡与聊天 ─────────────

export async function openCharacterList(page) {
  await openDrawer(page, 'rightNavHolder');
  await page.locator('#rm_button_characters').click();
  await page.locator('#rm_print_characters_block').waitFor({ state: 'visible' });
}

/** 关掉右侧角色面板（有弹窗挡着时先不关） */
export async function closeRightPanel(page) {
  if (await page.locator('dialog.popup[open]').count()) return;
  await closeDrawer(page, 'rightNavHolder');
}

/** 通过界面新建角色卡（名字 + 开场白） */
export async function createCharacter(page, name, firstMes, description = '') {
  await openCharacterList(page);
  await page.locator('#rm_button_create').click();
  await page.locator('#character_name_pole').waitFor({ state: 'visible' });
  await page.fill('#character_name_pole', name);
  if (description) await page.fill('#description_textarea', description);
  await page.fill('#firstmessage_textarea', firstMes);
  await page.locator('#create_button_label').click();
  await page.waitForFunction((n) => SillyTavern.getContext().characters.some((c) => c.name === n), name, { timeout: 20000 });
  await page.waitForTimeout(800);
}

/** 从角色列表选中角色卡（会打开这张卡最近的聊天） */
export async function selectCharacter(page, name) {
  await openCharacterList(page);
  const card = page.locator('#rm_print_characters_block .character_select').filter({ has: page.locator(`.ch_name:text-is("${name}")`) }).first();
  await card.click();
  await page.waitForFunction((n) => {
    const c = SillyTavern.getContext();
    return c.characters[c.characterId]?.name === n && c.chat.length > 0;
  }, name, { timeout: 20000 });
  await page.waitForTimeout(1200);
}

/** 开新聊天（ST 1.19.0 会先弹「Start new chat?」确认，默认不删除当前聊天） */
export async function newChat(page) {
  const before = await page.evaluate(() => SillyTavern.getContext().getCurrentChatId());
  await page.locator('#options_button').click();
  await page.locator('#option_start_new_chat').click();
  await popupClick(page, 'Start new chat', 'ok');
  await page.waitForFunction((id) => SillyTavern.getContext().getCurrentChatId() !== id, before, { timeout: 15000 });
  await page.waitForTimeout(1200);
}

/** 是否正在生成 */
export async function isGenerating(page) {
  return page.evaluate(() => {
    const stop = document.querySelector('#mes_stop');
    return !!stop && getComputedStyle(stop).display !== 'none';
  });
}

export async function waitIdle(page, timeout = 60000) {
  const t0 = Date.now();
  await page.waitForTimeout(300);
  for (;;) {
    if (!(await isGenerating(page))) {
      await page.waitForTimeout(300);
      if (!(await isGenerating(page))) return;
    }
    if (Date.now() - t0 > timeout) throw new Error('等待生成结束超时');
    await page.waitForTimeout(250);
  }
}

/** 等扩展的副本事件检测结束（没有在整理） */
export async function waitSubIdle(page, timeout = 60000) {
  await page.waitForFunction(() => !document.getElementById('rlzc-sub-busy'), null, { timeout });
}

export async function chatLength(page) {
  return page.evaluate(() => SillyTavern.getContext().chat.length);
}

/** 发一条消息并等AI回复写完 */
export async function send(page, text, { wait = true } = {}) {
  const before = await chatLength(page);
  await page.fill('#send_textarea', text);
  await page.locator('#send_but').click();
  if (!wait) return;
  await page.waitForFunction((n) => SillyTavern.getContext().chat.length >= n + 2, before, { timeout: 60000 });
  await waitIdle(page);
}

export async function optionsMenu(page, id) {
  await page.locator('#options_button').click();
  await page.locator(`#${id}`).click();
}

export async function regenerate(page) {
  await optionsMenu(page, 'option_regenerate');
  await page.waitForTimeout(500);
  await waitIdle(page);
}

export async function continueGen(page) {
  await optionsMenu(page, 'option_continue');
  await page.waitForTimeout(500);
  await waitIdle(page);
}

export async function swipeRight(page) {
  await page.locator('#chat .last_mes .swipe_right').first().click();
  await page.waitForTimeout(500);
  await waitIdle(page);
}

export async function swipeLeft(page) {
  await page.locator('#chat .last_mes .swipe_left').first().click();
  await page.waitForTimeout(800);
}

/** 用斜杠命令删掉最后 n 条消息（和玩家在输入框里输入 /del n 一样） */
export async function deleteLast(page, n = 1) {
  const before = await chatLength(page);
  await page.fill('#send_textarea', `/del ${n}`);
  await page.locator('#send_but').click();
  await page.waitForFunction((x) => SillyTavern.getContext().chat.length === x, before - n, { timeout: 15000 });
  await page.waitForTimeout(800);
}

// ───────────── 本扩展的面板 ─────────────

export const host = (page) => page.locator('#rlzc-host');

export async function openPanel(page) {
  const panel = host(page).locator('.rlzc-panel');
  if (await panel.isVisible().catch(() => false)) return;
  await press(page, host(page).locator('.rlzc-ball'));
  await panel.waitFor({ state: 'visible' });
}

export async function closePanel(page) {
  const panel = host(page).locator('.rlzc-panel');
  if (!(await panel.isVisible().catch(() => false))) return;
  await host(page).locator('.rlzc-head .rlzc-icon').click();
  await panel.waitFor({ state: 'hidden' });
}

export async function tab(page, label) {
  await openPanel(page);
  await host(page).locator('.rlzc-tabs button', { hasText: label }).click();
  if (label === '调试' && (await hasPopupSoon(page, '此页会显示副本真相'))) await popupClick(page, '此页会显示副本真相', 'ok');
  await page.waitForTimeout(300);
}

async function hasPopupSoon(page, text, ms = 1500) {
  try {
    await popup(page, text, ms);
    return true;
  } catch {
    return false;
  }
}

export async function panelText(page) {
  return host(page).locator('.rlzc-body').innerText();
}

/** 设置页「副本事件检测」卡 */
export const subCard = (page) => host(page).locator('.rlzc-subapi');

/** 扩展设置（extensionSettings.rlzc）与当前聊天数据 */
export function rlzcState(page) {
  return page.evaluate(() => {
    const c = SillyTavern.getContext();
    return {
      settings: JSON.parse(JSON.stringify(c.extensionSettings.rlzc ?? null)),
      meta: JSON.parse(JSON.stringify(c.chatMetadata?.rlzc ?? null)),
      chat: c.chat.map((m, i) => ({ i, is_user: m.is_user, is_system: m.is_system, name: m.name, swipe_id: m.swipe_id, swipes: m.swipes?.length, rlzc: m.extra?.rlzc ?? null, mes: m.mes })),
      chatId: c.getCurrentChatId?.(),
    };
  });
}

/** 扩展写进提示词的内容（ST 的 extensionPrompts） */
export function extensionPrompts(page) {
  return page.evaluate(() => {
    const p = SillyTavern.getContext().extensionPrompts ?? {};
    const out = {};
    for (const [k, v] of Object.entries(p)) if (k.startsWith('rlzc')) out[k] = { value: v.value, depth: v.depth, scan: v.scan, position: v.position, role: v.role };
    return out;
  });
}
