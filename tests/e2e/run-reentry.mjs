/**
 * 回廊种菜系统 · 简报时点了「不是」之后再入场的端到端检查（CLAUDE.md 13）
 *
 *  R1 未收录副本的简报出现时点「不是」，剧情没走完的回复不提示；
 *     之后状态栏地点写进「副本《X》」时再提示，点「进入」后以这一楼为第1轮，等级与时限来自简报
 *  R2 简报时点「不是」后不再有任何信号：「手动选择副本」下拉框里有「X（未收录）」，选中后进入，以最新一条AI回复为第1轮
 *  R3 控制台没有本扩展的报错
 *
 * 用法：node run-reentry.mjs [--fresh] [--no-build]
 */
import fs from 'node:fs';
import path from 'node:path';
import * as ui from './lib/ui.mjs';
import * as P from './lib/procs.mjs';
import { installExtension } from './setup.mjs';
import { CORRIDOR } from './fixtures.mjs';
import { OUT, ST_DATA } from './lib/paths.mjs';

const argv = process.argv.slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const { host } = ui;

const CHAR = '回廊引导';
const BRIEF = '广播响起，站台上的人都抬起了头。\n「副本简报 - 永昼列车」\n「人数：4人」\n「等级：B」\n「时限：8小时」\n「简报：列车不会停。」';
const STORY = '你和朋友还在站台上道别，列车还没有进站。';
const INSIDE = '车门在身后合上，列车开动了。\n<状态栏>\n地点：B级副本《永昼列车》· 3号车厢\n等级：C\n</状态栏>';

const results = [];
function rec(id, title, ok, evidence) {
  results.push({ id, title, ok, evidence });
  console.log(`  [${id}] ${ok ? '通过' : '不通过'}：${title}`);
  for (const e of evidence) console.log(`      · ${e}`);
}

async function say(page, text, reply) {
  await ui.closePanel(page);
  await P.mockPlan([{ type: 'text', text: reply }]);
  await ui.send(page, text);
  await sleep(800);
  return page.evaluate(() => SillyTavern.getContext().chat.length - 1);
}

const sessionOf = (page) =>
  page.evaluate(() => {
    const s = SillyTavern.getContext().chatMetadata.rlzc;
    return s?.packId ? { packId: s.packId, entryIndex: s.entryIndex, status: s.status, briefing: s.briefing } : null;
  });

async function newChat(page) {
  await ui.closePanel(page);
  await ui.selectCharacter(page, CHAR);
  await ui.closeRightPanel(page);
  await ui.newChat(page);
  await ui.closeRightPanel(page);
  await sleep(800);
}

async function runCard(page) {
  await newChat(page);
  await say(page, '去站台。', BRIEF);
  const first = await ui.answerEntryCard(page, 'cancel');
  await say(page, '再等等。', STORY);
  await sleep(1500);
  const quiet = !(await ui.hasEntryCard(page));
  const i = await say(page, '上车。', INSIDE);
  const card = await ui.entryCard(page).catch(() => null);
  if (card) await ui.shotEl(card.card, 'reentry-card').catch(() => {});
  if (card) await ui.answerEntryCard(page, 'ok');
  await sleep(500);
  const s = await sessionOf(page);
  await ui.tab(page, '系统');
  const sys = await ui.panelText(page);
  await ui.closePanel(page);
  rec('R1', '简报时点「不是」，状态栏地点进入副本时再提示并能进入', first.name === '永昼列车' && quiet && card?.name === '永昼列车' && card?.level === 'B' && s?.packId === 'generic' && s?.entryIndex === i && s?.briefing?.limit === '8小时', [
    `简报时卡片：${first.text}`,
    `剧情没走完的回复${quiet ? '没有' : '又'}出卡片`,
    `状态栏写进副本后：${card ? card.text : '没有卡片'}`,
    `会话：${JSON.stringify(s)}（这一楼是 ${i}）`,
    `系统页：${sys.replace(/\s+/g, ' ').slice(0, 80)}`,
  ]);
}

async function runManual(page) {
  await newChat(page);
  await say(page, '去站台。', BRIEF);
  await ui.answerEntryCard(page, 'cancel');
  const i = await say(page, '上车。', '车门在身后合上，列车开动了。');
  await sleep(1000);
  await ui.tab(page, '系统');
  const select = host(page).locator('.rlzc-rest ~ .rlzc-card select.rlzc-input, .rlzc-card select.rlzc-input').first();
  const options = await select.locator('option').allInnerTexts();
  const opt = options.find((o) => o.includes('永昼列车'));
  if (opt) await select.selectOption({ label: opt });
  await sleep(300);
  const hint = await host(page).locator('.rlzc-hint', { hasText: '未收录' }).count();
  await ui.shotEl(host(page).locator('.rlzc-panel'), 'reentry-manual').catch(() => {});
  await host(page).locator('.rlzc-card .rlzc-row .rlzc-btn', { hasText: '进入' }).click();
  const dlg = await ui.popup(page, '永昼列车', 8000).catch(() => null);
  const dlgText = dlg ? (await dlg.innerText()).replace(/\s+/g, ' ').slice(0, 60) : '';
  if (dlg) await dlg.locator('.popup-button-ok').click();
  await sleep(800);
  const s = await sessionOf(page);
  await ui.closePanel(page);
  rec('R2', '手动选择副本里能选到本聊天出现过的未收录副本', !!opt && hint === 1 && s?.packId === 'generic' && s?.entryIndex === i && s?.briefing?.name === '永昼列车', [
    `下拉框：${JSON.stringify(options)}`,
    `选中后小字：${hint ? '未收录，将使用通用副本包' : '没有'}`,
    `确认框：${dlgText}`,
    `会话：${JSON.stringify(s)}（最新AI回复是 ${i}）`,
  ]);
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  if (argv.includes('--fresh')) fs.rmSync(ST_DATA, { recursive: true, force: true });
  installExtension({ build: !argv.includes('--no-build') });
  await P.startMock();
  await P.startST();
  const browser = await ui.launch();
  const page = await ui.openST(browser, process.env.E2E_MOBILE ? ui.MOBILE : ui.DESKTOP);
  try {
    await ui.connectMainApi(page, { stream: true });
    const names = await page.evaluate(() => SillyTavern.getContext().characters.map((c) => c.name));
    if (!names.includes(CHAR)) await ui.createCharacter(page, CHAR, CORRIDOR.slice(0, 2).join('\n\n'), '端到端测试用角色卡');
    for (const [id, fn] of [['R1', runCard], ['R2', runManual]]) {
      console.log(`\n▶ ${id}`);
      try {
        await fn(page);
      } catch (e) {
        rec(id, '运行出错', false, [e.message.split('\n')[0]]);
        await ui.shot(page, `reentry-err-${id}`).catch(() => {});
      }
    }
  } finally {
    const ours = page.consoleLog.filter((l) => ['error', 'pageerror'].includes(l.type) && /rlzc|回廊种菜|third-party\/rlzc/.test(l.text));
    rec('R3', '控制台没有本扩展的报错', ours.length === 0, ours.map((l) => l.text.slice(0, 200)));
    console.log('\n结果：');
    for (const r of results) console.log(`  ${r.id} ${r.ok ? '通过' : '不通过'}`);
    await browser.close().catch(() => {});
    await P.stopST();
    await P.stopMock();
    process.exitCode = results.every((r) => r.ok) ? 0 : 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
