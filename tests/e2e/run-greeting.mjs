/**
 * 回廊种菜系统 · 开场白跳转的端到端检查
 * 新建聊天后不逐个滑动，直接跳到某个开场白：第3个（喜宴）、第5个（钟楼）都要在1秒内出现入场卡片；
 * 跳到不是副本的开场白，旧卡片要消失。三种跳转方式各跑一遍：
 *  - picker：ST 自带的滑动计数跳转（点「3/5」输入序号，发 MESSAGE_SWIPED）；
 *  - helper：酒馆助手 TavernHelper.setChatMessages([{ message_id: 0, swipe_id }])（只发 CHARACTER_MESSAGE_RENDERED）；
 *  - silent：改 swipe_id 与正文后用 updateMessageBlock 刷新显示（不发任何事件）。
 *
 * 用法：node run-greeting.mjs [--fresh] [--no-build]
 * 产物（不提交）：out/greeting-results.json
 */
import fs from 'node:fs';
import path from 'node:path';
import * as ui from './lib/ui.mjs';
import * as P from './lib/procs.mjs';
import { installExtension } from './setup.mjs';
import { OPENING_ZHONGLOU, OPENING_XIYAN, CORRIDOR } from './fixtures.mjs';
import { OUT, ST_DATA } from './lib/paths.mjs';

const argv = process.argv.slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const CHAR = '多开场白';
/** 1 回廊、2 回廊、3 喜宴、4 回廊、5 钟楼（都从1数） */
const GREETINGS = [CORRIDOR[0], CORRIDOR[2], OPENING_XIYAN, CORRIDOR[3], OPENING_ZHONGLOU];
const LIMIT = 1000;

const results = [];
function rec(method, ok, evidence) {
  results.push({ method, ok, evidence });
  console.log(`  [${method}] ${ok === true ? '通过' : ok === false ? '不通过' : '无法模拟'}`);
  for (const e of evidence) console.log(`      · ${e}`);
}

async function setup(page) {
  const names = await page.evaluate(() => SillyTavern.getContext().characters.map((c) => c.name));
  if (!names.includes(CHAR)) await ui.createCharacter(page, CHAR, GREETINGS[0], '端到端测试用角色卡：五个开场白');
  // 其余四个开场白写进 alternate_greetings
  const r = await page.evaluate(async ({ name, alt }) => {
    const c = SillyTavern.getContext();
    const ch = c.characters.find((x) => x.name === name);
    const res = await fetch('/api/characters/merge-attributes', {
      method: 'POST',
      headers: c.getRequestHeaders(),
      body: JSON.stringify({ avatar: ch.avatar, data: { alternate_greetings: alt } }),
    });
    await c.getOneCharacter(ch.avatar);
    return { status: res.status, count: c.characters.find((x) => x.name === name)?.data?.alternate_greetings?.length };
  }, { name: CHAR, alt: GREETINGS.slice(1) });
  console.log('  开场白：', r);
  if (r.count !== 4) throw new Error(`开场白没写进去：${JSON.stringify(r)}`);
}

async function installHelper(page) {
  const has = await page.evaluate(() => typeof globalThis.TavernHelper?.setChatMessages === 'function');
  if (has) return true;
  const r = await page.evaluate(async () => {
    const res = await fetch('/api/extensions/install', {
      method: 'POST',
      headers: SillyTavern.getContext().getRequestHeaders(),
      body: JSON.stringify({ url: 'https://github.com/N0VI028/JS-Slash-Runner', global: false }),
    });
    return { status: res.status, text: (await res.text()).slice(0, 200) };
  });
  console.log('  酒馆助手安装：', r.status, r.text.slice(0, 80));
  await ui.reload(page);
  await sleep(3000);
  return page.evaluate(() => typeof globalThis.TavernHelper?.setChatMessages === 'function');
}

/** 卡片上的副本名（没有卡片为 null）；淡出中的卡片不算 */
const CARD_NAME = () => {
  const root = document.querySelector('#rlzc-host')?.shadowRoot;
  const cards = [...(root?.querySelectorAll('.rlzc-entry-card:not(.rlzc-entry-fade-leave-active)') ?? [])];
  return cards.map((c) => c.querySelector('.rlzc-entry-name')?.textContent?.trim()).filter(Boolean);
};

/** 跳到第 n 个开场白（从1数） */
async function jump(page, method, n) {
  if (method === 'picker') {
    await page.locator('#chat .mes[mesid="0"] .swipes-counter').first().click();
    const dlg = await ui.popup(page, 'Swipe Selection');
    await dlg.locator('#swipe_picker_id_0').fill(String(n));
    const t0 = Date.now();
    await dlg.locator('.popup-button-ok').click();
    return t0;
  }
  const t0 = Date.now();
  if (method === 'helper') {
    await page.evaluate((id) => globalThis.TavernHelper.setChatMessages([{ message_id: 0, swipe_id: id }]), n - 1);
  } else {
    await page.evaluate((id) => {
      const c = SillyTavern.getContext();
      const m = c.chat[0];
      m.swipe_id = id;
      m.mes = m.swipes[id];
      c.updateMessageBlock(0, m);
      document.querySelector('#chat .mes[mesid="0"] .swipes-counter').textContent = `${id + 1}​/​${m.swipes.length}`;
    }, n - 1);
  }
  return t0;
}

/** 等卡片变成 want（副本名；null = 没有卡片），返回用时；超过 LIMIT 返回 null */
async function waitCard(page, want, t0) {
  try {
    await page.waitForFunction(
      ({ fn, want }) => {
        const names = new Function(`return (${fn})()`)();
        return want === null ? names.length === 0 : names.length === 1 && names[0] === want;
      },
      { fn: CARD_NAME.toString(), want },
      { timeout: Math.max(50, LIMIT - (Date.now() - t0)), polling: 20 },
    );
    return Date.now() - t0;
  } catch {
    return null;
  }
}

async function runMethod(page, method) {
  await ui.closePanel(page);
  await ui.selectCharacter(page, CHAR);
  await ui.closeRightPanel(page);
  await ui.newChat(page);
  await ui.closeRightPanel(page);
  await sleep(1000);
  const ev = [];
  const start = await page.evaluate(() => ({ swipe: SillyTavern.getContext().chat[0]?.swipe_id, len: SillyTavern.getContext().chat.length }));
  const before = await page.evaluate(`(${CARD_NAME.toString()})()`);
  ev.push(`新建聊天：开场白第${(start.swipe ?? 0) + 1}个，卡片 ${JSON.stringify(before)}`);
  let ok = start.len === 1 && before.length === 0;
  for (const [n, want] of [[3, '喜宴'], [5, '钟楼'], [2, null]]) {
    const t0 = await jump(page, method, n);
    const ms = await waitCard(page, want, t0);
    const now = await page.evaluate(`(${CARD_NAME.toString()})()`);
    const shown = await page.evaluate(() => SillyTavern.getContext().chat[0].swipe_id + 1);
    ev.push(`跳到第${n}个开场白（显示第${shown}个）：期望${want ? `《${want}》卡片` : '没有卡片'}，${ms === null ? `${LIMIT}毫秒内没做到` : `${ms}毫秒`}，当前卡片 ${JSON.stringify(now)}`);
    if (ms === null) {
      // 看看是不是晚到
      await sleep(2000);
      ev.push(`  再等2秒后卡片 ${JSON.stringify(await page.evaluate(`(${CARD_NAME.toString()})()`))}`);
      ok = false;
    }
    await sleep(400);
  }
  const meta = await page.evaluate(() => SillyTavern.getContext().chatMetadata.rlzc ?? null);
  ev.push(`会话 ${JSON.stringify(meta)}`);
  if (meta?.packId || (meta?.declined ?? []).length) ok = false;
  rec(method, ok, ev);
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
    await setup(page);
    const helper = await installHelper(page);
    for (const method of ['picker', 'helper', 'silent']) {
      console.log(`\n▶ ${method}`);
      if (method === 'helper' && !helper) {
        rec(method, null, ['酒馆助手没装上']);
        continue;
      }
      try {
        await runMethod(page, method);
      } catch (e) {
        rec(method, false, [`运行出错：${e.message.split('\n')[0]}`]);
        await ui.shot(page, `greeting-err-${method}`).catch(() => {});
      }
    }
  } finally {
    const ours = page.consoleLog.filter((l) => ['error', 'pageerror'].includes(l.type) && /rlzc|回廊种菜|third-party\/rlzc/.test(l.text));
    const data = { at: new Date().toISOString(), minutes: ((Date.now() - t0) / 60000).toFixed(1), limitMs: LIMIT, results, consoleErrors: ours.map((l) => l.text.slice(0, 300)) };
    fs.writeFileSync(path.join(OUT, 'greeting-results.json'), JSON.stringify(data, null, 2));
    console.log('\n结果：');
    for (const r of results) console.log(`  ${r.method.padEnd(7)} ${r.ok === true ? '通过' : r.ok === false ? '不通过' : '无法模拟'}`);
    if (ours.length) console.log('本扩展的控制台错误：', ours.map((l) => l.text.slice(0, 200)));
    await browser.close().catch(() => {});
    await P.stopST();
    await P.stopMock();
    process.exitCode = results.every((r) => r.ok !== false) ? 0 : 1;
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
