/**
 * 回廊种菜系统 · 状态栏格式守护的端到端检查（CLAUDE.md 第20节）
 * SillyTavern 1.19.0 + 酒馆助手（渲染状态栏正则里的 HTML）+ 本地模拟接口 + Playwright。
 *
 *  F1 自动修正开启：模拟AI输出 <系统面板>……</系统面板> → 原文被改成 <状态栏>……</状态栏>（内容不动）、
 *     弹出「已修正本轮状态栏标签」、状态栏正则渲染出来、下一轮请求里没有格式提醒。
 *  F2 自动修正关闭：同样的回复原文不动，下一轮请求里有一次格式提醒，再下一轮（写对了）没有。
 *
 * 用法：node run-format.mjs [--fresh] [--no-build]
 * 产物（不提交）：out/format-results.json、out/shots/format-*.jpg
 */
import fs from 'node:fs';
import path from 'node:path';
import * as ui from './lib/ui.mjs';
import * as P from './lib/procs.mjs';
import { installExtension } from './setup.mjs';
import { CORRIDOR } from './fixtures.mjs';
import { E2E_DIR, OUT, ST_DATA } from './lib/paths.mjs';

const argv = process.argv.slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const { host } = ui;

const CHAR = '回廊引导';
const REMIND = '［格式·仅供AI］';
const BODY = ['地点：回廊·休息室', '{{user}}：', '等级：C', '位格：候补', '积分：1,000', '待清算：无', '在场：林默、周遥、路人玩家若干'].join('\n');
const STORY = CORRIDOR.slice(0, 2).join('\n\n');
const WRONG = `${STORY}\n\n<系统面板>\n${BODY}\n</系统面板>`;
const GOOD = `${STORY}\n\n<状态栏>\n${BODY}\n</状态栏>`;

const results = [];
function rec(id, title, ok, evidence, shots = []) {
  results.push({ id, title, ok, evidence, shots });
  console.log(`  [${id}] ${ok ? '通过' : '不通过'}：${title}`);
  for (const e of evidence) console.log(`      · ${e}`);
}

function reqText(e) {
  return (e?.request ?? []).map((m) => (typeof m.content === 'string' ? m.content : '')).join('\n');
}

async function lastAi(page) {
  return page.evaluate(() => {
    const c = SillyTavern.getContext().chat;
    for (let i = c.length - 1; i >= 0; i--) if (!c[i].is_user && !(c[i].is_system && c[i].extra?.type)) return i;
    return -1;
  });
}

/** 发一条消息，AI 按 plan 回复；返回这一楼下标与这次主AI请求的全文 */
async function say(page, text, plan) {
  await ui.closePanel(page);
  await P.mockPlan([plan]);
  const seq0 = await P.lastSeq();
  await ui.send(page, text);
  await sleep(800);
  const log = await P.mockLog(seq0, true);
  const mains = log.filter((e) => e.caller === 'main');
  return { idx: await lastAi(page), req: reqText(mains[mains.length - 1]) };
}

const msgOf = (page, i) => page.evaluate((k) => {
  const m = SillyTavern.getContext().chat[k];
  return { mes: m.mes, swipe: m.swipes?.[m.swipe_id ?? 0], format: m.extra?.rlzc?.format ?? null };
}, i);

async function installHelper(page) {
  if (await page.evaluate(() => typeof globalThis.TavernHelper === 'object')) return 'already';
  const r = await page.evaluate(async () => {
    const res = await fetch('/api/extensions/install', {
      method: 'POST',
      headers: SillyTavern.getContext().getRequestHeaders(),
      body: JSON.stringify({ url: 'https://github.com/N0VI028/JS-Slash-Runner', global: false }),
    });
    return res.status;
  });
  await ui.reload(page);
  await sleep(3000);
  return r;
}

async function importRegex(page) {
  const has = await page.evaluate(() => (SillyTavern.getContext().extensionSettings.regex ?? []).some((r) => r.scriptName === '回廊·状态栏'));
  if (has) return;
  await ui.openDrawer(page, 'extensions-settings-button');
  await page.locator('.regex_settings .inline-drawer-toggle').first().click();
  await page.waitForTimeout(400);
  await page.setInputFiles('#import_regex_file', path.join(E2E_DIR, 'regex-huilang-statusbar.json'));
  const dlg = await ui.popup(page, '', 8000).catch(() => null);
  if (dlg) {
    const global = dlg.locator('#regex_import_target_global');
    if (await global.count()) await global.check({ force: true }).catch(() => {});
    await dlg.locator('.popup-button-ok').click().catch(() => {});
  }
  await page.waitForTimeout(1200);
  await ui.closeDrawer(page, 'extensions-settings-button');
}

/** 这一楼渲染出状态栏正则的渲染框（酒馆助手的 iframe 里有 .hl） */
async function rendered(page, i) {
  const frame = page.locator(`#chat .mes[mesid="${i}"] iframe`).first();
  try {
    await frame.waitFor({ state: 'attached', timeout: 20000 });
    await page.frameLocator(`#chat .mes[mesid="${i}"] iframe`).first().locator('.hl').first().waitFor({ state: 'attached', timeout: 20000 });
    return true;
  } catch {
    return false;
  }
}

async function toasts(page) {
  return page.locator('#toast-container .toast').allInnerTexts().catch(() => []);
}

/** 设置页「状态栏格式」卡的开关 */
async function setFix(page, on) {
  await ui.tab(page, '设置');
  const card = host(page).locator('.rlzc-format-card');
  const head = card.locator('.rlzc-collapse-head');
  if ((await head.getAttribute('aria-expanded')) !== 'true') await head.click();
  await page.waitForTimeout(250);
  const sw = card.locator('.rlzc-format-fix');
  if (((await sw.getAttribute('aria-checked')) === 'true') !== on) await sw.click();
  await page.waitForTimeout(300);
  const shot = await ui.shotEl(card, `format-settings-${on ? 'on' : 'off'}`);
  const saved = await page.evaluate(() => SillyTavern.getContext().extensionSettings.rlzc.statusBarFix);
  await ui.closePanel(page);
  return { saved, shot };
}

async function newChat(page) {
  await ui.closePanel(page);
  await ui.selectCharacter(page, CHAR);
  await ui.closeRightPanel(page);
  await ui.newChat(page);
  await ui.closeRightPanel(page);
  await sleep(800);
}

async function runFixOn(page) {
  const ev = [];
  const setting = await setFix(page, true);
  ev.push(`设置页开关 = ${setting.saved}`);
  await newChat(page);
  await say(page, '去休息室坐一会儿。', { type: 'text', text: GOOD });
  const bad = await say(page, '看看面板。', { type: 'text', text: WRONG });
  await sleep(500);
  const m = await msgOf(page, bad.idx);
  const t = await toasts(page);
  const isRendered = await rendered(page, bad.idx);
  const shot = await ui.shotEl(page.locator(`#chat .mes[mesid="${bad.idx}"]`), 'format-fixed').catch(() => null);
  const next = await say(page, '继续。', { type: 'text', text: GOOD });
  const ok1 = m.mes === GOOD && m.swipe === GOOD;
  const ok2 = m.format?.fixed === true && m.format?.from === '<系统面板>…</系统面板>';
  const ok3 = t.some((x) => x.includes('已修正本轮状态栏标签'));
  const ok4 = !next.req.includes(REMIND) && !bad.req.includes(REMIND);
  ev.push(`AI 输出 <系统面板>……</系统面板>：原文${ok1 ? '已改成 <状态栏>……</状态栏>，内容不变' : `没按预期修正：${JSON.stringify(m.mes.slice(-120))}`}`);
  ev.push(`快照 format = ${JSON.stringify(m.format)}`);
  ev.push(`提示：${JSON.stringify(t)}`);
  ev.push(`状态栏正则${isRendered ? '渲染出来了（酒馆助手 iframe 内有 .hl）' : '没有渲染'}`);
  ev.push(`下一轮请求里${next.req.includes(REMIND) ? '有' : '没有'}格式提醒`);
  rec('F1', '自动修正开启：<系统面板> 被修正、正则能渲染、下一轮没有提醒', ok1 && ok2 && ok3 && isRendered && ok4, ev, [setting.shot, shot].filter(Boolean));
}

async function runFixOff(page) {
  const ev = [];
  const setting = await setFix(page, false);
  ev.push(`设置页开关 = ${setting.saved}`);
  await newChat(page);
  await say(page, '去休息室坐一会儿。', { type: 'text', text: GOOD });
  const bad = await say(page, '看看面板。', { type: 'text', text: WRONG });
  const m = await msgOf(page, bad.idx);
  const remind = await say(page, '继续。', { type: 'text', text: GOOD });
  const after = await say(page, '再坐一会儿。', { type: 'text', text: GOOD });
  const line = remind.req.split('\n').find((l) => l.includes(REMIND)) ?? '';
  const ok = m.mes === WRONG && m.format?.kind === 'misnamed' && !m.format?.fixed && !!line && !after.req.includes(REMIND);
  ev.push(`原文${m.mes === WRONG ? '没有改动' : '被改动了'}；快照 format = ${JSON.stringify(m.format)}`);
  ev.push(`出错后的下一轮请求：${line ? line.slice(0, 80) : '没有提醒'}`);
  ev.push(`再下一轮请求里${after.req.includes(REMIND) ? '仍有' : '没有'}提醒`);
  rec('F2', '自动修正关闭：只提醒不改消息，提醒只出现一次', ok, ev, [setting.shot]);
  await setFix(page, true);
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  if (argv.includes('--fresh')) fs.rmSync(ST_DATA, { recursive: true, force: true });
  installExtension({ build: !argv.includes('--no-build') });
  await P.startMock();
  await P.startST();
  const browser = await ui.launch();
  const page = await ui.openST(browser, ui.DESKTOP);
  const t0 = Date.now();
  try {
    await ui.connectMainApi(page, { stream: true });
    const names = await page.evaluate(() => SillyTavern.getContext().characters.map((c) => c.name));
    if (!names.includes(CHAR)) await ui.createCharacter(page, CHAR, CORRIDOR.slice(0, 2).join('\n\n'), '端到端测试用角色卡');
    console.log('  酒馆助手：', await installHelper(page));
    await ui.connectMainApi(page, { stream: true });
    await importRegex(page);
    for (const [name, fn] of [['F1', runFixOn], ['F2', runFixOff]]) {
      console.log(`\n▶ ${name}`);
      try {
        await fn(page);
      } catch (e) {
        rec(name, '运行出错', false, [e.message.split('\n')[0]]);
        await ui.shot(page, `format-err-${name}`).catch(() => {});
      }
    }
  } finally {
    const ours = page.consoleLog.filter((l) => ['error', 'pageerror'].includes(l.type) && /rlzc|回廊种菜|third-party\/rlzc/.test(l.text));
    const data = { at: new Date().toISOString(), minutes: ((Date.now() - t0) / 60000).toFixed(1), results, consoleErrors: ours.map((l) => l.text.slice(0, 300)) };
    fs.writeFileSync(path.join(OUT, 'format-results.json'), JSON.stringify(data, null, 2));
    console.log('\n结果：');
    for (const r of results) console.log(`  ${r.id} ${r.ok ? '通过' : '不通过'}`);
    if (ours.length) console.log('本扩展的控制台错误：', ours.map((l) => l.text.slice(0, 200)));
    await browser.close().catch(() => {});
    await P.stopST();
    await P.stopMock();
    process.exitCode = results.length && results.every((r) => r.ok) ? 0 : 1;
  }
}

for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, async () => {
    await P.stopST().catch(() => {});
    await P.stopMock().catch(() => {});
    process.exit(1);
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
