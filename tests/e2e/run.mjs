/**
 * 回廊种菜系统 · 端到端检查
 * SillyTavern 1.19.0（按 release tag 拉取，不改源码）+ 本地模拟接口（主AI 与「副本事件检测」）+ Playwright 无头浏览器。
 *
 * 用法：
 *   node setup.mjs                         第一次：拉 ST、装依赖、装扩展
 *   node run.mjs --fresh                   清空 ST 用户数据后跑全部：桌面 → 费用 → 手机(390px) → 共存
 *   node run.mjs --only=desktop,mobile     只跑一部分（desktop / cost / mobile / coexist）
 *   node run.mjs --no-build                不重新构建扩展（直接用仓库里的 dist/）
 * 产物（不提交）：out/results.json、out/summary.md、out/cost.json、out/shots/*.jpg、out/mock-log.jsonl、out/*.log
 * 所有密钥都是假的（sk-fake-…），模拟接口只监听本机。
 */
import fs from 'node:fs';
import path from 'node:path';
import * as ui from './lib/ui.mjs';
import * as P from './lib/procs.mjs';
import { installExtension } from './setup.mjs';
import { OPENING_ZHONGLOU, OPENING_XIYAN, OPENING_YOUXI, CORRIDOR } from './fixtures.mjs';
import { ST_DATA, OUT, MOCK_URL } from './lib/paths.mjs';
import { record, results, writeResults } from './lib/results.mjs';

const argv = process.argv.slice(2);
const FRESH = argv.includes('--fresh');
const ONLY = new Set((argv.find((a) => a.startsWith('--only='))?.slice(7) ?? 'desktop,cost,mobile,coexist').split(','));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const { host } = ui;
const MOCK_V1 = `${MOCK_URL}/v1`;

const CH = { corridor: '回廊引导', zhonglou: '钟楼开场', xiyan: '喜宴开场', youxi: '游戏开场' };
const LINES = {
  zhonglou: [
    '我先去一楼大厅看看石壁上的守则。',
    '跟着林默上楼，看他去哪。',
    '回房间把楼层图摊开，对照今天看到的东西。',
    '去四楼机房看看曲柄。',
    '问周遥西边为什么没有入口。',
    '在二楼走廊那张空椅子上坐一会儿。',
    '去大厅拿点吃的，顺便听听大家在聊什么。',
    '找陈树聊聊值班的事。',
    '把今天记下的东西在心里再过一遍。',
    '跟江临打个招呼，问他昨晚睡得怎么样。',
    '去五楼东口看一眼。',
    '在大厅里数一数人。',
  ],
  xiyan: ['找个位置坐下，先不动筷子。', '问旁边的人新娘在哪。', '把喜糖纸摊开看看。', '去厨房门口看一眼。', '数一数院子里到底有几张桌子。', '跟新郎说自己是女方的远房亲戚。'],
  youxi: ['先看看自己抽到的牌。', '问主持人规则里说的「最后」是指什么时候。', '观察一下其他七个位置。'],
  corridor: ['去休息室找个角落坐一会儿。', '看看排行榜上有没有认识的名字。', '问系统侍者今天有什么新副本。'],
};
const counters = {};
function line(kind) {
  const i = (counters[kind] = (counters[kind] ?? -1) + 1);
  return LINES[kind][i % LINES[kind].length];
}

/** 不在25项里、但值得写进报告的发现 */
const extras = [];
const cost = {};
const consoleIssues = [];

// ───────────── 通用 ─────────────

function reqText(e) {
  return (e?.request ?? []).map((m) => (typeof m.content === 'string' ? m.content : '')).join('\n');
}

/** 请求里包含 mark 的那条消息（位置从末尾数，0 = 最后一条） */
function msgWith(e, mark) {
  const msgs = e?.request ?? [];
  const i = msgs.findIndex((m) => String(m.content ?? '').includes(mark));
  if (i < 0) return null;
  return { index: i, fromEnd: msgs.length - 1 - i, role: msgs[i].role, content: String(msgs[i].content) };
}

/** 从 mark 开始取几行，做证据摘录 */
function excerpt(text, mark, n = 3, max = 260) {
  const i = text.indexOf(mark);
  if (i < 0) return '';
  const s = text.slice(i).split('\n').slice(0, n).join(' ⏎ ');
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

/** 副本事件检测请求里的轮次 */
function subRound(e) {
  const m = /【副本】(\S+?)　阶段：(.+?)　第(\d+)轮/.exec(reqText(e));
  return m ? { pack: m[1], phase: m[2], round: Number(m[3]) } : null;
}

const fmtTime = (iso) => (iso ? iso.slice(11, 23) : '—');

async function lastAi(page) {
  return page.evaluate(() => {
    const c = SillyTavern.getContext().chat;
    for (let i = c.length - 1; i >= 0; i--) if (!c[i].is_user && !(c[i].is_system && c[i].extra?.type)) return i;
    return -1;
  });
}

async function snapOf(page, i) {
  return page.evaluate((i) => JSON.parse(JSON.stringify(SillyTavern.getContext().chat[i]?.extra?.rlzc ?? null)), i);
}

/** 等第 i 楼写上检测记录（成功或跳过）；after：只认这个时间之后写的 */
async function waitSub(page, i, { after = 0, timeout = 60000 } = {}) {
  await page.waitForFunction(
    ({ i, after }) => {
      const s = SillyTavern.getContext().chat[i]?.extra?.rlzc?.sub;
      return !!s && (!after || Date.parse(s.at) >= after - 50);
    },
    { i, after },
    { timeout },
  );
  return snapOf(page, i);
}

/** 发一条消息（先关面板，给模拟主AI排好这一轮的写法），等AI回复写完 */
async function say(page, text, plan = { type: 'story' }) {
  await ui.closePanel(page);
  await P.mockPlan([plan]);
  const seq0 = await P.lastSeq();
  const t0 = Date.now();
  await ui.send(page, text);
  const idx = await lastAi(page);
  return { idx, seq0, t0 };
}

/** 发一条消息并等这一楼的检测结束；sub=false 时只等一会儿（预期不调用） */
async function sayAndSub(page, text, plan, { sub = true, settle = 2000 } = {}) {
  const r = await say(page, text, plan);
  const snap = sub ? await waitSub(page, r.idx, { after: r.t0 }) : (await sleep(settle), await snapOf(page, r.idx));
  const log = await P.mockLog(r.seq0, true);
  return { ...r, snap, log, subs: log.filter((e) => e.caller === 'sub'), mains: log.filter((e) => e.caller === 'main') };
}

/** 点发送但不等（用来测「下一次生成要不要等检测」） */
async function clickSend(page, text) {
  await ui.closePanel(page);
  await P.mockPlan([{ type: 'story' }]);
  await page.fill('#send_textarea', text);
  const t = Date.now();
  await page.locator('#send_but').click();
  return t;
}

async function waitReply(page, lengthAtLeast, timeout = 90000) {
  await page.waitForFunction((n) => SillyTavern.getContext().chat.length >= n, lengthAtLeast, { timeout });
  await ui.waitIdle(page, timeout);
}

async function sysText(page) {
  await ui.tab(page, '系统');
  await page.waitForTimeout(250);
  return host(page).locator('.rlzc-system').innerText();
}
const stat = (text, label) => (new RegExp(`${label}\\s*\\n\\s*([^\\n]+)`).exec(text)?.[1] ?? '').trim();

async function subLine(page) {
  await ui.tab(page, '系统');
  const l = host(page).locator('.rlzc-subline');
  return (await l.count()) ? (await l.innerText()).trim() : '';
}

/** 等系统页那一行小字变成符合 re 的内容 */
async function waitSubLine(page, re, timeout = 15000) {
  const t0 = Date.now();
  let last = '';
  while (Date.now() - t0 < timeout) {
    last = await subLine(page);
    if (re.test(last)) return last;
    await page.waitForTimeout(300);
  }
  return last;
}

async function openDetails(page, text) {
  const det = host(page).locator('.rlzc-debug details', { hasText: text }).first();
  if (!(await det.evaluate((d) => d.open))) await det.locator('summary').click();
  return det;
}

async function debugRows(page) {
  await ui.tab(page, '调试');
  const det = await openDetails(page, '每楼快照');
  return det.locator('tbody tr').evaluateAll((trs) =>
    trs.map((tr) => ({ cells: [...tr.children].map((td) => td.textContent.trim()), warn: tr.classList.contains('rlzc-row-warn') })),
  );
}

async function debugStateText(page) {
  await ui.tab(page, '调试');
  const det = host(page).locator('.rlzc-debug details', { hasText: '副本事件检测' });
  if (!(await det.count())) return '';
  await openDetails(page, '副本事件检测');
  return det.locator('pre').first().innerText();
}

async function debugWarnings(page) {
  await ui.tab(page, '调试');
  const list = host(page).locator('.rlzc-debug .rlzc-warns li');
  return list.allInnerTexts();
}

// ───────────── 设置页 ─────────────

const field = (card, label) => card.locator('label.rlzc-field', { hasText: label });

async function settingsTab(page) {
  await ui.tab(page, '设置');
  await page.waitForTimeout(200);
}

async function setSource(page, value) {
  await settingsTab(page);
  await field(ui.subCard(page), '用哪个AI检测').locator('select').selectOption(value);
  await page.waitForTimeout(300);
}

async function fillField(page, label, value) {
  const input = field(ui.subCard(page), label).locator('input').first();
  await input.fill(value);
  await input.press('Tab');
  await page.waitForTimeout(250);
}

async function addPreset(page, name, url, key) {
  const card = ui.subCard(page);
  await card.locator('button', { hasText: '新建' }).click();
  const dlg = await ui.popup(page, '给这个API起个名字');
  await dlg.locator('.popup-input').fill(name);
  await dlg.locator('.popup-button-ok').click();
  await dlg.waitFor({ state: 'hidden' }).catch(() => {});
  await page.waitForTimeout(300);
  await fillField(page, '地址', url);
  await fillField(page, '密钥', key);
}

async function testConnection(page) {
  const card = ui.subCard(page);
  await card.locator('button', { hasText: '测试连接' }).click();
  await page.waitForFunction(
    () => /连接成功|连接失败/.test(document.querySelector('#rlzc-host').shadowRoot.querySelector('.rlzc-test-result')?.textContent ?? ''),
    null,
    { timeout: 40000 },
  );
  return (await card.locator('.rlzc-test-result').innerText()).trim();
}

async function pickPreset(page, name) {
  await settingsTab(page);
  await ui.subCard(page).locator('.rlzc-row select').first().selectOption({ label: name });
  await page.waitForTimeout(300);
}

async function setSubCheck(page, label, on) {
  await settingsTab(page);
  const box = ui.subCard(page).locator('label.rlzc-check', { hasText: label }).locator('input');
  if ((await box.isChecked()) !== on) await box.click();
  await page.waitForTimeout(250);
}

async function setTimeoutSec(page, sec) {
  await settingsTab(page);
  await fillField(page, '超时', String(sec));
}

async function setDebugMode(page, on) {
  await settingsTab(page);
  const box = host(page).locator('.rlzc-settings label.rlzc-check', { hasText: '调试模式' }).locator('input');
  if ((await box.isChecked()) !== on) await box.click();
  await page.waitForTimeout(200);
}

/** 当前「副本事件检测」卡的状态：界面上看到的 + extensionSettings 里存的 */
async function presetSnapshot(page) {
  await settingsTab(page);
  const card = ui.subCard(page);
  const source = await field(card, '用哪个AI检测').locator('select').inputValue();
  const sel = card.locator('.rlzc-row select').first();
  const names = (await sel.count()) ? await sel.locator('option').allInnerTexts() : [];
  const selected = (await sel.count()) ? (await sel.locator('option:checked').innerText()).trim() : '';
  const modelBox = field(card, '模型');
  let model = '';
  if (await modelBox.count()) {
    const s = modelBox.locator('select');
    model = (await s.count()) ? await s.inputValue() : await modelBox.locator('input').inputValue();
  }
  const saved = (await ui.rlzcState(page)).settings.subApi;
  return {
    source,
    names,
    selected,
    model,
    saved: saved.presets.map((p) => `${p.name}=${p.model}`).join('，'),
    savedSelected: saved.presets.find((p) => p.id === saved.presetId)?.name ?? '',
  };
}

// ───────────── 入场 ─────────────

/** 选角色卡（或在当前角色卡开新聊天），等入场弹窗，按 answer 回答 */
async function enter(page, { character, newChat = false, expect, answer = 'ok', shot }) {
  await ui.closePanel(page);
  if (character) await ui.selectCharacter(page, character);
  if (newChat) {
    await ui.closeRightPanel(page);
    await ui.newChat(page);
  }
  const dlg = await ui.popup(page, '检测到进入', 15000);
  const text = (await dlg.innerText()).split('\n')[0].trim();
  const shotName = shot ? await ui.shot(page, shot) : null;
  await ui.popupClick(page, '检测到进入', answer);
  await ui.closeRightPanel(page);
  await page.waitForTimeout(800);
  const st = await ui.rlzcState(page);
  return { text, shot: shotName, ok: new RegExp(`检测到进入《${expect}》`).test(text), st };
}

/**
 * 刷新页面或重启 ST 之后：ST 1.19.0 默认不自动连接API（auto_connect 关）、不自动打开上次的聊天（auto_load_chat 关），
 * 和玩家一样重新点连接、重新选角色卡。
 */
async function reopen(page, character) {
  const status = await page.evaluate(() => SillyTavern.getContext().onlineStatus);
  if (!status || status === 'no_connection') await ui.connectMainApi(page, { stream: true });
  if (character) {
    await ui.selectCharacter(page, character);
    await ui.closeRightPanel(page);
  }
}

// ───────────── 运行框架 ─────────────

let currentPart = 'desktop';

async function step(ids, name, page, fn) {
  console.log(`\n▶ ${name}`);
  try {
    await fn();
  } catch (e) {
    console.log(`  ✗ ${name} 出错：${e.message}`);
    const shot = page ? await ui.shot(page, `err-${currentPart}-${name.replace(/[^\w一-龥]+/g, '_')}`).catch(() => null) : null;
    for (const id of [].concat(ids)) {
      const done = (results[id] ?? []).some((p) => p.part.startsWith(currentPart));
      if (!done) record(id, currentPart, false, [`运行出错：${e.message.split('\n')[0]}`], shot ? [shot] : []);
    }
    // 收拾残局：关掉挡住界面的弹窗
    if (page) {
      for (let k = 0; k < 3; k++) {
        const d = page.locator('dialog.popup[open]').last();
        if (!(await d.count())) break;
        await d.locator('.popup-button-cancel, .popup-button-close').first().click({ force: true }).catch(() => {});
        await page.waitForTimeout(400);
      }
      await P.mockControl({ sub: { mode: 'ok', count: 0, delayMs: 0, nextFalse: [] } }).catch(() => {});
    }
  }
}

function collectConsole(page, part) {
  for (const l of page.consoleLog ?? []) {
    if (!['error', 'pageerror', 'warning'].includes(l.type)) continue;
    const ours = /rlzc|回廊种菜|third-party\/rlzc/.test(l.text);
    consoleIssues.push({ part, type: l.type, ours, text: l.text.slice(0, 400) });
  }
}

// ───────────── 准备 ─────────────

async function setup(page) {
  await ui.connectMainApi(page, { stream: true });
  const names = await page.evaluate(() => SillyTavern.getContext().characters.map((c) => c.name));
  const cards = [
    [CH.corridor, CORRIDOR.slice(0, 2).join('\n\n')],
    [CH.zhonglou, OPENING_ZHONGLOU],
    [CH.xiyan, OPENING_XIYAN],
    [CH.youxi, OPENING_YOUXI],
  ];
  for (const [name, greet] of cards) if (!names.includes(name)) await ui.createCharacter(page, name, greet, '端到端测试用角色卡');
  await ui.selectCharacter(page, CH.corridor);
  await ui.closeRightPanel(page);
}

// ───────────── 桌面：各项检查 ─────────────

async function settingsCard(page, part) {
  await settingsTab(page);
  const heads = await host(page).locator('.rlzc-settings > .rlzc-card > h4').allInnerTexts();
  const card = ui.subCard(page);
  const sourceSel = field(card, '用哪个AI检测').locator('select');
  const source = await sourceSel.inputValue();
  const options = await sourceSel.locator('option').allInnerTexts();
  const saved = (await ui.rlzcState(page)).settings.subApi.source;
  const depthCard = host(page).locator('.rlzc-settings > .rlzc-card', { hasText: '注入深度' });
  const depthIntro = (await depthCard.locator('.rlzc-intro').innerText()).trim();
  const depthLabels = await depthCard.locator('label.rlzc-field > span').allInnerTexts();
  await ui.subCard(page).scrollIntoViewIfNeeded();
  const shotName = await ui.shot(page, `${part[0]}-01-settings`);
  const iDepth = heads.indexOf('注入深度');
  const iCard = heads.indexOf('副本事件检测');
  // 默认值只能在全新数据上看（桌面那一轮先跑）；手机这一轮只看卡片位置和显示
  const fresh = part === 'desktop';
  record(
    1,
    part,
    iCard === iDepth + 1 && (!fresh || (source === 'off' && saved === 'off')),
    [
      `设置页卡片顺序：${heads.join(' → ')}`,
      fresh ? `全新安装时「用哪个AI检测」为「${options[0]}」（存的值 ${saved}）` : `当前「用哪个AI检测」为 ${source}（桌面那一轮已改过，默认值以桌面结果为准）`,
      `注入深度说明：「${depthIntro.slice(0, 70)}…」；三项：${depthLabels.map((l) => l.split('\n')[0]).join('、')}`,
    ],
    [shotName],
  );
  const cardText = await card.innerText();
  record(
    20,
    part,
    options.length === 3 && !/连接配置/.test(cardText),
    [`来源选项只有：${options.join(' / ')}`],
    [],
    '按你的要求删除了「使用酒馆连接配置」，界面上已经没有这个选项',
  );
  // 界面上不出现 rlzc
  const texts = [];
  for (const t of ['系统', '设置']) {
    await ui.tab(page, t);
    texts.push(await ui.panelText(page));
  }
  const menuText = await page.locator('#rlzc-settings-drawer').innerText().catch(() => '');
  const hit = [...texts, menuText].some((t) => /rlzc/i.test(t));
  extras.push({ part, name: '界面上不出现「rlzc」', ok: !hit, detail: hit ? '仍能看到 rlzc' : '系统页、设置页、扩展列表里的一栏都没有 rlzc 字样' });
}

async function zhonglouOff(page) {
  const seq0 = await P.lastSeq();
  const e = await enter(page, { character: CH.zhonglou, expect: '钟楼', shot: 'd-22-zhonglou-entry' });
  const greet = e.st.chat[0];
  record(
    22,
    'desktop·钟楼',
    e.ok && e.st.meta?.entryIndex === 0 && greet.rlzc?.round === 1,
    [`弹窗：「${e.text}」`, `确认后入场消息是第0楼（开场白），快照：${greet.rlzc?.phase} 第${greet.rlzc?.round}轮`],
    [e.shot],
  );
  const sys0 = await sysText(page);
  const left0 = stat(sys0, '最多剩余轮次');

  // 24：进入钟楼后系统页下方显示资料
  const docTabs = await host(page).locator('.rlzc-system .rlzc-docs .rlzc-subtabs button').allInnerTexts();
  await host(page).locator('.rlzc-system .rlzc-docs .rlzc-subtabs button', { hasText: '楼层图' }).click();
  await page.waitForTimeout(600);
  const img = host(page).locator('.rlzc-system .rlzc-docs img.rlzc-img');
  const imgOk = (await img.count()) ? await img.evaluate((el) => el.complete && el.naturalWidth > 0) : false;
  await host(page).locator('.rlzc-system .rlzc-docs').scrollIntoViewIfNeeded();
  const docShot = await ui.shot(page, 'd-24-zhonglou-docs');
  await host(page).locator('.rlzc-system .rlzc-docs .rlzc-subtabs button', { hasText: '游玩说明' }).click();
  const tabs = await host(page).locator('.rlzc-tabs button').allInnerTexts();
  record(
    24,
    'desktop·页签与钟楼资料',
    tabs.join('、') === '系统、设置、调试' && docTabs.join('/') === '游玩说明/钟楼守则/楼层图' && imgOk,
    [`页签：${tabs.join('、')}`, `系统页下方资料子页签：${docTabs.join(' / ')}`, `楼层图加载：${imgOk ? '成功' : '失败'}`],
    [docShot],
  );

  const rows = [];
  for (let k = 0; k < 4; k++) {
    const r = await sayAndSub(page, line('zhonglou'), { type: 'story' }, { sub: false, settle: 1500 });
    const main = r.mains[r.mains.length - 1];
    const text = reqText(main);
    const sys = await sysText(page);
    const shown = await page.locator('#chat .mes').last().locator('.mes_text').innerText();
    const raw = await page.evaluate((i) => SillyTavern.getContext().chat[i].mes, r.idx);
    rows.push({ k, r, main, text, sys, shown, raw });
  }
  const sysShot = await ui.shot(page, 'd-02-system-round5');
  await ui.closePanel(page);
  const subs = (await P.mockLog(seq0)).filter((x) => x.caller === 'sub');

  const ev = [];
  let ok = subs.length === 0;
  for (const { k, r, main, text, sys, shown, raw } of rows) {
    const round = k + 2;
    const tokenMsg = msgWith(main, '【副本进行中：钟楼】');
    const progMsg = msgWith(main, '［副本进度·仅供AI］');
    const turnMsg = msgWith(main, '［本轮指令·仅供AI］');
    const good =
      r.snap?.round === round &&
      !!tokenMsg &&
      text.includes(`本轮：第${round}/72轮`) &&
      text.includes(`剩余${300 - round}/300轮`) &&
      !!turnMsg &&
      turnMsg.fromEnd === 0 &&
      !text.includes('［副本状态·仅供AI］') &&
      stat(sys, '轮次') === `${round}/72` &&
      raw.includes('<副本>') &&
      !shown.includes('副本名：');
    ok &&= good;
    ev.push(
      `第${round}轮：快照第${r.snap?.round}轮；系统页轮次 ${stat(sys, '轮次')}、钟时 ${stat(sys, '钟时')}；请求里暗号在倒数第${tokenMsg?.fromEnd}条、进度在倒数第${progMsg?.fromEnd}条、本轮指令在最后一条（倒数第${turnMsg?.fromEnd}条）；正文 <副本> 已隐藏：${!shown.includes('副本名：')}，原文保留：${raw.includes('<副本>')}`,
    );
  }
  const last = rows[rows.length - 1];
  const sysLast = last.sys;
  ok &&= /至第四日日出·剩余3夜/.test(stat(sysLast, '剩余时间')) && /%/.test(sysLast) && sysLast.includes('存活三夜');
  ev.push(`第2轮注入摘录：${excerpt(rows[0].text, '［副本进度·仅供AI］', 2)}`);
  ev.push(`第2轮本轮指令摘录：${excerpt(rows[0].text, '［本轮指令·仅供AI］', 3)}`);
  ev.push(`系统页（第5轮后）：剩余时间 ${stat(sysLast, '剩余时间')}；进度 ${stat(sysLast, '进度')}；任务、ps 均显示`);
  ev.push(`这4轮模拟服务收到的检测调用：${subs.length} 次`);
  record(2, 'desktop', ok, ev, [sysShot]);

  // 23（钟楼部分）：最多剩余轮次、注入的剩余X/Y轮
  const left5 = stat(sysLast, '最多剩余轮次');
  record(
    23,
    'desktop·钟楼',
    left0 === '299/300' && left5 === '295/300' && rows[0].text.includes('剩余298/300轮') && rows[3].text.includes('剩余295/300轮'),
    [`入场后「最多剩余轮次」${left0}，第5轮后 ${left5}`, `注入：第2轮「剩余298/300轮」，第5轮「剩余295/300轮」；时限「至第四日日出·剩余3夜」`],
  );
}

async function presets(page) {
  await setSource(page, 'preset');
  const card = ui.subCard(page);
  await addPreset(page, '记录员A', MOCK_V1, ui.FAKE_KEYS.a);

  // 4：密钥默认圆点，可切换
  const keyInput = field(card, '密钥').locator('input');
  const type0 = await keyInput.getAttribute('type');
  const hiddenShot = await ui.shotEl(card, 'd-04-key-hidden');
  await field(card, '密钥').locator('button').click();
  const type1 = await keyInput.getAttribute('type');
  const shownValue = await keyInput.inputValue();
  const shownShot = await ui.shotEl(card, 'd-04-key-shown');
  await field(card, '密钥').locator('button').click();
  const type2 = await keyInput.getAttribute('type');
  record(
    4,
    'desktop',
    type0 === 'password' && type1 === 'text' && type2 === 'password' && shownValue === ui.FAKE_KEYS.a,
    [`默认 type=${type0}（圆点），点「显示」后 type=${type1}、看到的是假密钥 ${shownValue}，再点「隐藏」回到 ${type2}`],
    [hiddenShot, shownShot],
  );

  const seq0 = await P.lastSeq();
  const resA = await testConnection(page);
  const modelsA = await field(card, '模型').locator('select option').allInnerTexts();
  await field(card, '模型').locator('select').selectOption('recorder-mini');
  await page.waitForTimeout(300);
  const shotA = await ui.shotEl(card, 'd-03-preset-a');

  await addPreset(page, '记录员B', MOCK_V1, ui.FAKE_KEYS.b);
  const resB = await testConnection(page);
  await field(card, '模型').locator('select').selectOption('recorder-pro');
  await page.waitForTimeout(300);
  await pickPreset(page, '记录员A');
  const snap = await presetSnapshot(page);
  const calls = await P.mockLog(seq0);
  const models = calls.filter((c) => c.caller === 'models').map((c) => `…${c.key4}:${c.status}`);
  const tests = calls.filter((c) => c.caller === 'sub-test').map((c) => `…${c.key4}/${c.model}`);
  record(
    3,
    'desktop',
    /连接成功/.test(resA) && /连接成功/.test(resB) && modelsA.includes('recorder-mini') && snap.saved === '记录员A=recorder-mini，记录员B=recorder-pro' && snap.selected === '记录员A',
    [
      `记录员A 测试连接：${resA}；模型下拉：${modelsA.filter((m) => m !== '请选择…').join('、')}`,
      `记录员B 测试连接：${resB}`,
      `保存的预设：${snap.saved}；当前选中：${snap.selected}`,
      `模拟服务收到：模型列表请求 ${models.join('、')}；测试请求 ${tests.join('、')}`,
    ],
    [shotA],
  );
}

async function persistence(page) {
  const want = await presetSnapshot(page);
  const same = (s) => s.source === want.source && s.selected === want.selected && s.model === want.model && s.saved === want.saved && s.names.join() === want.names.join();
  const ev = [`基准：来源 ${want.source}；选中 ${want.selected}（模型 ${want.model}）；全部 ${want.saved}`];
  let ok = true;
  const check = async (label) => {
    const s = await presetSnapshot(page);
    const good = same(s);
    ok &&= good;
    ev.push(`${label}后：选中 ${s.selected}（模型 ${s.model}）；全部 ${s.saved} → ${good ? '一致' : '不一致'}`);
  };
  await ui.closePanel(page);
  await sleep(3000); // 等 ST 的防抖保存写到服务器
  await ui.reload(page);
  await reopen(page, CH.zhonglou);
  await check('刷新页面');
  await ui.closePanel(page);
  await sleep(1500);
  await P.restartST();
  await ui.reload(page);
  await reopen(page, CH.zhonglou);
  await check('重启 ST 服务并刷新');
  const disk = JSON.parse(fs.readFileSync(path.join(ST_DATA, 'settings.json'), 'utf8'));
  const onDisk = disk.extension_settings?.rlzc?.subApi;
  ev.push(`服务器上的 settings.json：${onDisk?.presets?.map((p) => `${p.name}=${p.model}`).join('，')}（密钥都是假的：${onDisk?.presets?.every((p) => p.key.startsWith('sk-fake-'))}）`);
  // 换聊天：在钟楼开新聊天（开场白弹入场确认，确认进入，后面的检查在这个聊天里做）
  await ui.closePanel(page);
  const e = await enter(page, { newChat: true, expect: '钟楼' });
  await check('换聊天（开新聊天）');
  await ui.closePanel(page);
  await ui.selectCharacter(page, CH.corridor);
  await ui.closeRightPanel(page);
  await check('换角色卡（回廊引导）');
  await ui.closePanel(page);
  await ui.selectCharacter(page, CH.zhonglou);
  await ui.closeRightPanel(page);
  const st = await ui.rlzcState(page);
  ok &&= e.ok && st.meta?.status === 'active';
  record(5, 'desktop', ok, ev);
}

async function recorderRun(page) {
  await setSource(page, 'preset');
  await pickPreset(page, '记录员A');
  await setSubCheck(page, '省钱模式', false);
  await setSubCheck(page, '等检测完', true);
  await setDebugMode(page, true);

  // 第2轮：后台事件 E02 故意不写（E03 是写作要求，不送去核对）
  const r2 = await sayAndSub(page, line('zhonglou'), { type: 'story', writeEvents: [] });
  const l2 = await waitSubLine(page, /已更新（第2轮）/);
  const shot6 = await ui.shot(page, 'd-06-system-updated');
  const r3 = await sayAndSub(page, line('zhonglou'));
  const l3 = await waitSubLine(page, /已更新（第3轮）/);
  const r4 = await sayAndSub(page, line('zhonglou'));
  const l4 = await waitSubLine(page, /已更新（第4轮）/);
  const perRound = [r2, r3, r4].map((r) => `${r.subs.length}次（${r.subs.map((s) => `第${subRound(s)?.round}轮，用 ${s.model}，密钥…${s.key4}`).join('；')}）`);
  record(
    6,
    'desktop',
    [r2, r3, r4].every((r) => r.subs.length === 1) && /第2轮/.test(l2) && /第3轮/.test(l3) && /第4轮/.test(l4),
    [`第2、3、4轮各调用：${perRound.join(' / ')}`, `系统页依次显示：「${l2}」「${l3}」「${l4}」`, `记录员A 用时：${[r2, r3, r4].map((r) => `${r.snap?.sub?.ms}ms`).join('、')}`],
    [shot6],
  );

  // 10：主AI请求里有［副本状态·仅供AI］
  const main3 = r3.mains[r3.mains.length - 1];
  const stateMsg = msgWith(main3, '［副本状态·仅供AI］');
  record(
    10,
    'desktop',
    !!stateMsg && !reqText(r2.mains[r2.mains.length - 1]).includes('［副本状态·仅供AI］'),
    [
      `第3轮主AI请求：${excerpt(stateMsg?.content ?? '', '［副本状态·仅供AI］', 4)}`,
      `位置：倒数第${stateMsg?.fromEnd}条（和副本进度同一深度）；第2轮时还没有状态，请求里没有这一块`,
    ],
  );

  // 7：等待整理（检测延迟3秒）
  await P.mockControl({ sub: { delayMs: 3000 } });
  const seq7 = await P.lastSeq();
  const r5 = await say(page, line('zhonglou'));
  const len = await ui.chatLength(page);
  const tClick = await clickSend(page, line('zhonglou'));
  let busy = false;
  let busyText = '';
  for (let k = 0; k < 10 && !busy; k++) {
    busy = await page.locator('#rlzc-sub-busy').isVisible().catch(() => false);
    if (!busy) await page.waitForTimeout(100);
  }
  if (busy) busyText = await page.locator('#rlzc-sub-busy').innerText();
  const shot7 = await ui.shot(page, 'd-07-waiting');
  await ui.openPanel(page);
  const lineWaiting = await subLine(page);
  const shot7b = await ui.shotEl(host(page).locator('.rlzc-panel'), 'd-07-waiting-panel');
  await ui.closePanel(page);
  await waitReply(page, len + 2);
  const r6idx = await lastAi(page);
  await waitSub(page, r6idx, { after: tClick });
  await P.mockControl({ sub: { delayMs: 0 } });
  const log7 = await P.mockLog(seq7);
  const sub5 = log7.find((x) => x.caller === 'sub' && Date.parse(x.t0) >= r5.t0);
  const main6 = log7.filter((x) => x.caller === 'main' && Date.parse(x.t0) >= tClick)[0];
  const waited = main6 && sub5 && Date.parse(main6.t0) >= Date.parse(sub5.t1);
  record(
    7,
    'desktop',
    !!waited && busy && /整理中/.test(busyText) && /整理中/.test(lineWaiting),
    [
      `第5轮检测（延迟3秒）：${fmtTime(sub5?.t0)} → ${fmtTime(sub5?.t1)}`,
      `玩家在 ${fmtTime(new Date(tClick).toISOString())} 点了发送；第6轮主AI请求到达 ${fmtTime(main6?.t0)}，${waited ? '晚于' : '早于'}检测结束（等了约 ${main6 ? ((Date.parse(main6.t0) - tClick) / 1000).toFixed(1) : '?'} 秒）`,
      `发送按钮旁显示「${busyText}」，系统页显示「${lineWaiting}」`,
    ],
    [shot7, shot7b],
  );

  // 8：调试页的事件核对与隐藏状态
  const rows = await debugRows(page);
  const row2 = rows.find((x) => x.cells[2] === '2' && x.cells[1] === '第一日·白天');
  const stateText = await debugStateText(page);
  const warns = await debugWarnings(page);
  await host(page).locator('.rlzc-debug details', { hasText: '每楼快照' }).scrollIntoViewIfNeeded();
  const shot8 = await ui.shot(page, 'd-08-debug');
  record(
    8,
    'desktop',
    !!row2 && /E02✗/.test(row2.cells[6]) && !/E03/.test(row2.cells[6]) && row2.warn && /曲柄当前在谁手里/.test(stateText) && warns.some((w) => /E02 未写出来/.test(w)),
    [
      `快照表第2轮那一行：注入的事件「${row2?.cells[5]}」，检测「${row2?.cells[6]}」（E03 是写作要求，不核对），${row2?.warn ? '整行标黄' : '没有标黄'}`,
      `核对列表：${warns.filter((w) => /E0\d/.test(w)).map((w) => w.replace(/\s+/g, ' ')).join('；').slice(0, 160)}`,
      `隐藏状态：${stateText.split('\n').slice(0, 4).join(' ⏎ ').slice(0, 200)}`,
    ],
    [shot8],
  );
}

async function conditional(page) {
  await ui.tab(page, '调试');
  await host(page).locator('.rlzc-debug select').first().selectOption('d2');
  await host(page).locator('.rlzc-debug button', { hasText: '切换' }).click();
  await page.waitForTimeout(400);
  await host(page).locator('.rlzc-debug input[type=number]').first().fill('17');
  await host(page).locator('.rlzc-debug button', { hasText: '修正轮次' }).click();
  await page.waitForTimeout(400);
  const sys = await sysText(page);
  await P.mockControl({ sub: { nextFalse: ['E08'] } });
  const r18 = await sayAndSub(page, line('zhonglou'));
  const r19 = await sayAndSub(page, line('zhonglou'));
  await P.mockControl({ sub: { nextFalse: [] } });
  const r20 = await sayAndSub(page, line('zhonglou'));
  const sub18 = r18.subs[0];
  const main19 = reqText(r19.mains[r19.mains.length - 1]);
  const main20 = reqText(r20.mains[r20.mains.length - 1]);
  const e09 = main20.split('\n').find((l) => l.startsWith('- E09：')) ?? '';
  const fired20 = main20.split('\n').find((l) => l.startsWith('已发生事件：')) ?? '';
  const rows = await debugRows(page);
  const row19 = rows.find((x) => x.cells[2] === '19' && x.cells[1] === '第二日·白天');
  const warns = await debugWarnings(page);
  const row20 = rows.find((x) => x.cells[2] === '20' && x.cells[1] === '第二日·白天');
  record(8, 'desktop·已发生', /E09✓/.test(row20?.cells[6] ?? '') && !row20?.warn, [`第20轮 E09 写进了正文：检测「${row20?.cells[6]}」，没有标黄`]);
  const shot9 = await ui.shot(page, 'd-09-skipped');
  const next18 = r18.snap?.sub?.next ?? [];
  record(
    9,
    'desktop',
    r18.snap?.round === 18 &&
      reqText(sub18).includes('- E08：') &&
      next18.some((n) => n.id === 'E08' && n.ok === false) &&
      !main19.includes('- E08：') &&
      (r19.snap?.skippedEvents ?? []).some((k) => k.id === 'E08') &&
      /跳过E08/.test(row19?.cells[6] ?? '') &&
      warns.some((w) => /E08 条件不成立，已跳过/.test(w)) &&
      !!e09 &&
      !e09.includes('（条件：') &&
      !!fired20 &&
      !fired20.includes('E08'),
    [
      `调试页切到第二日·白天、修正轮次17（系统页：${stat(sys, '阶段')} ${stat(sys, '轮次')}）`,
      `第18轮检测对下一轮 E08 的预判：${JSON.stringify(next18.find((n) => n.id === 'E08'))}`,
      `第19轮主AI请求里${main19.includes('- E08：') ? '有' : '没有'} E08；快照 skippedEvents=${JSON.stringify(r19.snap?.skippedEvents)}`,
      `调试页第19轮「检测」一栏：「${row19?.cells[6]}」；核对列表：${warns.find((w) => /E08/.test(w))?.replace(/\s+/g, ' ')}`,
      `第20轮 E09（预判成立）照常注入且不带条件原文：「${e09.slice(0, 60)}…」`,
      `第20轮进度块「${fired20}」：跳过的 E08 没有算作已发生`,
    ],
    [shot9],
  );
}

async function continueNoCall(page) {
  const idx = await lastAi(page);
  const before = await snapOf(page, idx);
  const seq0 = await P.lastSeq();
  await ui.closePanel(page);
  await P.mockPlan([{ type: 'text', text: '\n\n（你沿着楼梯继续往上走，脚步声在石壁间来回撞。）' }]);
  await ui.continueGen(page);
  await sleep(3000);
  const log = await P.mockLog(seq0);
  const after = await snapOf(page, idx);
  const mes = await page.evaluate((i) => SillyTavern.getContext().chat[i].mes, idx);
  record(
    11,
    'desktop·继续生成',
    log.filter((x) => x.caller === 'main').length === 1 && log.filter((x) => x.caller === 'sub').length === 0 && after?.sub?.at === before?.sub?.at && mes.includes('继续往上走'),
    [`点「继续」后：主AI调用 ${log.filter((x) => x.caller === 'main').length} 次，检测调用 ${log.filter((x) => x.caller === 'sub').length} 次；这一楼原来的检测记录保留（${after?.sub?.at === before?.sub?.at ? '未变' : '变了'}）`],
  );
}

async function deleteRollback(page) {
  const st = await ui.rlzcState(page);
  const ai = st.chat.filter((m) => !m.is_user && m.rlzc?.sub?.state);
  const last = ai[ai.length - 1];
  const prev = ai[ai.length - 2];
  const posLast = last.rlzc.sub.state.positions;
  const posPrev = prev.rlzc.sub.state.positions;
  await ui.closePanel(page);
  await ui.deleteLast(page, 1);
  const stateText = await debugStateText(page);
  const line1 = await subLine(page);
  const shot = await ui.shot(page, 'd-12-after-delete');
  // 接着发一条：这次注入的状态应该是上一楼的
  const r = await sayAndSub(page, line('zhonglou'));
  const main = reqText(r.mains[r.mains.length - 1]);
  const marker = /第\d+次检测/.exec(posPrev)?.[0] ?? '';
  record(
    12,
    'desktop',
    stateText.includes(posPrev) && !stateText.includes(posLast) && main.includes(marker) && !main.includes(/第\d+次检测/.exec(posLast)?.[0] ?? '@@'),
    [
      `删除前最后一楼（第${last.rlzc.round}轮）的状态：${posLast.slice(0, 40)}…`,
      `删掉后调试页显示的状态：${posPrev.slice(0, 40)}…（第${prev.rlzc.round}轮那一楼的）；系统页「${line1}」`,
      `接着生成时主AI请求里的［副本状态］是「${marker}」那一份`,
    ],
    [shot],
  );
}

async function regenSwipe(page) {
  const ev = [];
  const posOf = async (i) => (await snapOf(page, i))?.sub?.state?.positions ?? '';
  // 重新生成
  let seq = await P.lastSeq();
  await ui.closePanel(page);
  await P.mockPlan([{ type: 'story' }]);
  let t = Date.now();
  await ui.regenerate(page);
  const idx = await lastAi(page);
  await waitSub(page, idx, { after: t });
  const posR = await posOf(idx);
  let log = await P.mockLog(seq);
  ev.push(`重新生成：主AI ${log.filter((x) => x.caller === 'main').length} 次，检测 ${log.filter((x) => x.caller === 'sub').length} 次 → 状态「${posR.slice(0, 30)}…」`);
  let ok = log.filter((x) => x.caller === 'sub').length === 1;
  // 向右滑：生成新回复
  seq = await P.lastSeq();
  await P.mockPlan([{ type: 'story' }]);
  t = Date.now();
  await ui.swipeRight(page);
  await waitSub(page, idx, { after: t });
  const posS = await posOf(idx);
  log = await P.mockLog(seq);
  ok &&= log.filter((x) => x.caller === 'sub').length === 1 && posS !== posR;
  ev.push(`向右滑出新回复：检测 ${log.filter((x) => x.caller === 'sub').length} 次 → 状态「${posS.slice(0, 30)}…」`);
  // 向左滑回去：状态跟着显示的回复
  seq = await P.lastSeq();
  await ui.swipeLeft(page);
  await sleep(1200);
  const posBack = await posOf(idx);
  const dbgBack = await debugStateText(page);
  const shotBack = await ui.shot(page, 'd-13-swipe-back');
  ok &&= posBack === posR && dbgBack.includes(posR);
  ev.push(`向左滑回第一条：这一楼的状态变回「${posBack.slice(0, 30)}…」，调试页${dbgBack.includes(posR) ? '一致' : '不一致'}`);
  // 再向右滑到已有的第二条（不生成）
  await ui.closePanel(page);
  await ui.swipeRight(page);
  await sleep(1200);
  const posAgain = await posOf(idx);
  ok &&= posAgain === posS;
  log = await P.mockLog(seq);
  ok &&= log.filter((x) => x.caller === 'sub').length === 0;
  ev.push(`再向右滑到已有的第二条：状态「${posAgain.slice(0, 30)}…」（与第二条一致：${posAgain === posS}）；来回滑动没有多调用检测（${log.filter((x) => x.caller === 'sub').length} 次）`);
  // 滑回第一条后发下一轮：注入的状态应是第一条的
  await ui.swipeLeft(page);
  await sleep(800);
  const r = await sayAndSub(page, line('zhonglou'));
  const main = reqText(r.mains[r.mains.length - 1]);
  const mR = /第\d+次检测/.exec(posR)?.[0];
  const mS = /第\d+次检测/.exec(posS)?.[0];
  ok &&= main.includes(mR) && !main.includes(mS);
  ev.push(`停在第一条回复上发下一轮：主AI请求里的状态是「${mR}」那一份（不是「${mS}」）`);
  record(13, 'desktop', ok, ev, [shotBack]);
}

async function failure401(page) {
  // 记录员A 的密钥改成错误的（模拟密钥失效）
  await pickPreset(page, '记录员A');
  await fillField(page, '密钥', ui.FAKE_KEYS.bad);
  const seq0 = await P.lastSeq();
  const r = await say(page, line('zhonglou'));
  const dlg = await ui.popup(page, '事件检测失败', 40000);
  const text = await dlg.innerText();
  const buttons = await dlg.locator('.popup-controls .menu_button:visible').allInnerTexts();
  const shot14 = await ui.shot(page, 'd-14-failure-popup');
  const log = await P.mockLog(seq0);
  const fails = log.filter((x) => x.caller === 'sub');
  record(
    14,
    'desktop',
    fails.length === 3 && fails.every((x) => x.status === 401) && /原因：密钥无效/.test(text) && ['重试', '换一个接口', '这轮先跳过'].every((b) => buttons.some((x) => x.includes(b))),
    [
      `模拟服务收到 ${fails.length} 次检测请求，全部返回 401（密钥…${fails[0]?.key4}）：${fails.map((x) => fmtTime(x.t0)).join('、')}`,
      `弹窗内容：${text.replace(/\s+/g, ' ').slice(0, 120)}`,
      `按钮：${buttons.join(' / ')}`,
    ],
    [shot14],
  );
  // 15：换一个接口 → 选记录员B → 立即成功
  await dlg.locator('.popup-button-custom', { hasText: '换一个接口' }).click();
  const select = dlg.locator('select');
  await select.waitFor({ state: 'visible' });
  const opts = await select.locator('option').allInnerTexts();
  const shot15 = await ui.shot(page, 'd-15-switch');
  const seq1 = await P.lastSeq();
  const t = Date.now();
  await select.selectOption({ label: '自设API：记录员B' });
  const snap = await waitSub(page, r.idx, { after: t });
  const took = Date.now() - t;
  const log1 = await P.mockLog(seq1);
  const st = await ui.rlzcState(page);
  const line1 = await waitSubLine(page, /已更新/);
  record(
    15,
    'desktop',
    !!snap?.sub?.state && !snap.sub.skipped && log1.filter((x) => x.caller === 'sub').every((x) => x.key4 === 'bbbb' && x.status === 200) && st.settings.subApi.presetId === st.settings.subApi.presets.find((p) => p.name === '记录员B')?.id,
    [
      `弹窗里的下拉框：${opts.join(' / ')}`,
      `选「自设API：记录员B」后 ${took}ms 内完成：检测请求用密钥…${log1.filter((x) => x.caller === 'sub').map((x) => `${x.key4}（${x.status}）`).join('、')}，记录来源「${snap?.sub?.via}」`,
      `当前预设已改为记录员B；系统页「${line1}」`,
    ],
    [shot15],
  );
  await ui.closePanel(page);
}

async function skipRound(page) {
  await P.mockControl({ sub: { mode: '401', count: 3 } });
  const seq0 = await P.lastSeq();
  const r = await say(page, line('zhonglou'));
  const dlg = await ui.popup(page, '事件检测失败', 40000);
  const title = (await dlg.innerText()).split('\n')[0];
  await dlg.locator('.popup-button-cancel').click();
  await dlg.waitFor({ state: 'hidden' }).catch(() => {});
  const snap = await waitSub(page, r.idx, { after: r.t0 });
  const round = snap.round;
  const line1 = await waitSubLine(page, new RegExp(`第${round}轮状态未更新`));
  const shot = await ui.shot(page, 'd-16-not-updated');
  const rows = await debugRows(page);
  const row = rows.find((x) => x.cells[2] === String(round) && x.cells[1] === '第二日·白天');
  // 照常生成下一轮；同一轮不再弹窗、不再调用
  const r2 = await sayAndSub(page, line('zhonglou'));
  await sleep(1500);
  const again = await ui.hasPopup(page, '事件检测失败');
  const log = await P.mockLog(seq0, true);
  const subs = log.filter((x) => x.caller === 'sub');
  const forRound = subs.filter((x) => subRound(x)?.round === round);
  const main2 = reqText(r2.mains[r2.mains.length - 1]);
  record(
    16,
    'desktop',
    snap.sub?.skipped === true && line1.includes(`第${round}轮状态未更新`) && /未更新/.test(row?.cells[6] ?? '') && forRound.length === 3 && !again && r2.snap?.round === round + 1 && !!r2.snap?.sub?.state && main2.includes('［副本状态·仅供AI］'),
    [
      `弹窗「${title}」点「这轮先跳过」后：系统页「${line1}」，调试页这一轮「${row?.cells[6]}」`,
      `第${round}轮一共只调用了 ${forRound.length} 次（自动重试的那3次），之后没有再调用，也没有再弹窗`,
      `下一轮照常生成（第${r2.snap?.round}轮），检测正常更新；主AI请求里的状态沿用的是跳过之前那一份`,
    ],
    [shot],
  );
}

async function timeoutGarbageFence(page) {
  const ev = [];
  let ok = true;
  // 超时：扩展超时设5秒，模拟服务每次拖8秒
  await setTimeoutSec(page, 5);
  await P.mockControl({ sub: { mode: 'timeout', count: 3, timeoutMs: 8000 } });
  let seq = await P.lastSeq();
  let r = await say(page, line('zhonglou'));
  let dlg = await ui.popup(page, '事件检测失败', 60000);
  const tText = (await dlg.innerText()).replace(/\s+/g, ' ');
  const shotT = await ui.shot(page, 'd-17-timeout');
  const tRetry = Date.now();
  await dlg.locator('.popup-button-ok').click(); // 重试
  let snap = await waitSub(page, r.idx, { after: tRetry });
  const tookRetry = Date.now() - tRetry;
  await sleep(4000); // 等被中止的慢请求在模拟服务那边结束，日志完整
  let log = await P.mockLog(seq);
  ok &&= /原因：超时/.test(tText) && !!snap.sub?.state && !snap.sub.skipped;
  ev.push(`超时：扩展设5秒、模拟服务拖8秒 → 自动重试2次后弹窗「${tText.slice(0, 40)}」；点「重试」后 ${tookRetry}ms 成功（模拟服务共收到 ${log.filter((x) => x.caller === 'sub').length} 次）`);
  await setTimeoutSec(page, 60);

  // 乱码：同时测「弹窗期间下一轮在等」→ 点「这轮先跳过」后照常生成
  await P.mockControl({ sub: { mode: 'garbage', count: 3, delayMs: 1500 } });
  seq = await P.lastSeq();
  r = await say(page, line('zhonglou'));
  const len = await ui.chatLength(page);
  await clickSend(page, line('zhonglou'));
  dlg = await ui.popup(page, '事件检测失败', 40000);
  const gText = (await dlg.innerText()).replace(/\s+/g, ' ');
  const shotG = await ui.shot(page, 'd-17-garbage');
  const pendingBefore = await ui.chatLength(page);
  await dlg.locator('.popup-button-cancel').click();
  await P.mockControl({ sub: { delayMs: 0 } });
  await waitReply(page, len + 2);
  const idxNext = await lastAi(page);
  await waitSub(page, idxNext, { after: Date.now() - 5000 }).catch(() => null);
  snap = await snapOf(page, r.idx);
  log = await P.mockLog(seq, true);
  const garbageCalls = log.filter((x) => x.caller === 'sub' && /mode=garbage/.test(x.note ?? ''));
  ok &&= /原因：返回格式不对/.test(gText) && snap?.sub?.skipped === true && garbageCalls.length === 3;
  ev.push(`乱码：模拟服务连回3次非 JSON → 弹窗「${gText.slice(0, 40)}」；弹窗时下一轮正在等（聊天停在 ${pendingBefore} 条），点「这轮先跳过」后下一轮照常生成`);

  // 带 ``` 的 JSON：不算失败
  await P.mockControl({ sub: { mode: 'fence', count: 1 } });
  const f = await sayAndSub(page, line('zhonglou'));
  const fenceCall = f.subs[0];
  const popupAfter = await ui.hasPopup(page, '事件检测失败');
  ok &&= /mode=fence/.test(fenceCall?.note ?? '') && (fenceCall?.response ?? '').includes('```json') && !!f.snap?.sub?.state && !f.snap.sub.skipped && f.subs.length === 1 && !popupAfter;
  ev.push(`带 \`\`\`json 标记的回复：${f.subs.length} 次调用即成功，没有弹窗，状态照常更新（回复开头：「${(fenceCall?.response ?? '').slice(0, 24).replace(/\n/g, '⏎')}…」）`);
  record(17, 'desktop', ok, ev, [shotT, shotG]);
}

async function noWait(page) {
  await setSubCheck(page, '等检测完', false);
  await P.mockControl({ sub: { mode: '401', count: 0, delayMs: 2500 } });
  const seq0 = await P.lastSeq();
  const r = await say(page, line('zhonglou'));
  const len = await ui.chatLength(page);
  const tClick = await clickSend(page, line('zhonglou'));
  await waitReply(page, len + 2);
  const tReply = Date.now();
  const busyShown = await page.locator('#rlzc-sub-busy').isVisible().catch(() => false);
  // 等两轮的检测都失败（只弹提示）
  await page.waitForFunction(() => [...document.querySelectorAll('#toast-container .toast')].filter((t) => /事件检测失败/.test(t.textContent)).length >= 1, null, { timeout: 30000 });
  const shot = await ui.shot(page, 'd-18-toast');
  const idx2 = await lastAi(page);
  await waitSub(page, idx2, { after: tClick, timeout: 40000 });
  await P.mockControl({ sub: { mode: 'ok', count: 0, delayMs: 0 } });
  const popup = await ui.hasPopup(page, '事件检测失败');
  const log = await P.mockLog(seq0);
  const subs1 = log.filter((x) => x.caller === 'sub' && Date.parse(x.t0) < tClick + 1500 && Date.parse(x.t0) >= r.t0);
  const main2 = log.find((x) => x.caller === 'main' && Date.parse(x.t0) >= tClick);
  const lastFail1 = subs1.length ? subs1[subs1.length - 1] : null;
  const snap1 = await snapOf(page, r.idx);
  const snap2 = await snapOf(page, idx2);
  const line1 = await waitSubLine(page, /状态未更新/);
  const toasts = await page.locator('#toast-container .toast').allInnerTexts().catch(() => []);
  await setSubCheck(page, '等检测完', true);
  record(
    18,
    'desktop',
    !popup && !busyShown && !!main2 && (!lastFail1 || Date.parse(main2.t0) < Date.parse(lastFail1.t1)) && snap1?.sub?.skipped === true && snap2?.sub?.skipped === true && /状态未更新/.test(line1),
    [
      `关掉「等检测完再写下一轮」，检测每次拖2.5秒且一直401`,
      `点发送后 ${((tReply - tClick) / 1000).toFixed(1)} 秒就拿到下一轮回复；主AI请求 ${fmtTime(main2?.t0)} 发出，上一轮检测到 ${fmtTime(lastFail1?.t1)} 才失败 → 没有等`,
      `失败时只弹右上角提示：「${toasts.find((t) => /事件检测失败/.test(t))?.replace(/\s+/g, ' ').slice(0, 60)}」，没有弹窗；两轮都记为未更新；系统页「${line1}」`,
    ],
    [shot],
  );
}

async function followMain(page) {
  await setSource(page, 'main');
  const r = await sayAndSub(page, line('zhonglou'));
  await sleep(2500);
  const log = await P.mockLog(r.seq0, true);
  const subs = log.filter((x) => x.caller === 'sub');
  const sub = subs[0];
  const subTxt = reqText(sub);
  const r2 = await sayAndSub(page, line('zhonglou'));
  const main2 = reqText(r2.mains[r2.mains.length - 1]);
  const line1 = await waitSubLine(page, /已更新/);
  const markers = ['【副本进行中', '［副本进度·仅供AI］', '［本轮指令·仅供AI］', '［副本状态·仅供AI］'];
  const leaked = markers.filter((m) => subTxt.includes(m));
  record(
    19,
    'desktop',
    subs.length === 1 && sub.key4 === ui.FAKE_KEYS.main.slice(-4) && sub.model === 'mock-main' && leaked.length === 0 && !main2.includes('你是角色扮演副本的记录员') && !main2.includes('【本轮正文】') && main2.includes('［副本状态·仅供AI］') && r2.subs.length === 1 && /已更新/.test(line1),
    [
      `跟随主API：这一轮只调用了 ${subs.length} 次检测，用的是主API的模型 ${sub?.model}、密钥…${sub?.key4}；记录来源「${r.snap?.sub?.via}」`,
      `检测请求共 ${sub?.request?.length} 条消息，里面${leaked.length ? `混进了 ${leaked.join('、')}` : '没有本扩展的暗号、进度、本轮指令、状态'}（没触发拦截器，不会递归）`,
      `下一轮正文请求里没有检测指令（「你是角色扮演副本的记录员」「【本轮正文】」都不在），有更新后的［副本状态］；系统页「${line1}」`,
    ],
  );
  await setSource(page, 'preset');
  await pickPreset(page, '记录员B');
}

async function corridor(page) {
  await ui.closePanel(page);
  await ui.selectCharacter(page, CH.corridor);
  await ui.closeRightPanel(page);
  const seq0 = await P.lastSeq();
  const popupShown = await ui.hasPopup(page, '检测到进入');
  const a = await sayAndSub(page, line('corridor'), { type: 'corridor' }, { sub: false });
  const b = await sayAndSub(page, line('corridor'), { type: 'corridor' }, { sub: false });
  const log = await P.mockLog(seq0, true);
  const prompts = await ui.extensionPrompts(page);
  const anyInjected = log.filter((x) => x.caller === 'main').some((x) => /【副本进行中|［副本进度|［本轮指令|［副本状态/.test(reqText(x)));
  const sys = await sysText(page);
  const shot = await ui.shot(page, 'd-11-corridor');
  record(
    11,
    'desktop·回廊',
    !popupShown && log.filter((x) => x.caller === 'sub').length === 0 && !anyInjected && Object.values(prompts).every((p) => !p.value) && /休整中/.test(sys),
    [
      `回廊引导聊天（开场白里提到「钟楼那个副本」也没有弹入场确认）聊了2轮：检测调用 ${log.filter((x) => x.caller === 'sub').length} 次`,
      `主AI请求里${anyInjected ? '有' : '没有'}本扩展的注入；系统页显示「休整中」`,
    ],
    [shot],
  );
  // 24（回廊部分）：下拉选中副本可预览资料
  const sel = host(page).locator('.rlzc-system select').first();
  await sel.selectOption({ label: 'S｜钟楼' });
  await page.waitForTimeout(400);
  const docTabs = await host(page).locator('.rlzc-system .rlzc-docs .rlzc-subtabs button').allInnerTexts();
  const shot24 = await ui.shot(page, 'd-24-corridor-preview');
  await sel.selectOption({ label: 'D｜喜宴' });
  await page.waitForTimeout(400);
  const xiyanDocs = await host(page).locator('.rlzc-system .rlzc-docs').count();
  const noHint = !/没有公开资料/.test(await host(page).locator('.rlzc-system').innerText());
  await sel.selectOption({ label: 'A｜境界游乐园' });
  await page.waitForTimeout(400);
  const jjTabs = await host(page).locator('.rlzc-system .rlzc-docs .rlzc-subtabs button').allInnerTexts();
  await sel.selectOption('');
  record(
    24,
    'desktop·回廊预览',
    docTabs.join('/') === '游玩说明/钟楼守则/楼层图' && xiyanDocs === 0 && noHint && jjTabs.join() === '游客须知',
    [`回廊中下拉选「钟楼」：预览 ${docTabs.join(' / ')}；选「喜宴」（没有资料）：不显示资料区，也没有提示文字；选「境界游乐园」：${jjTabs.join(' / ')}`],
    [shot24],
  );
}

function expectCountdown(cap, mpr, round) {
  const fmt = (m) => (m >= 60 ? (m % 60 ? `${Math.floor(m / 60)}小时${m % 60}分` : `${m / 60}小时`) : `${m}分钟`);
  return `约剩${fmt((cap - round) * mpr)}/${fmt(cap * mpr)}`;
}

async function xiyanYouxi(page) {
  // 22：喜宴开场白（只有「6=5+1」）
  await ui.closePanel(page);
  const x = await enter(page, { character: CH.xiyan, expect: '喜宴', shot: 'd-22-xiyan-entry' });
  const xGreet = x.st.chat[0];
  // 21：省钱模式跑5轮
  await setSource(page, 'preset');
  await pickPreset(page, '记录员B');
  await setSubCheck(page, '省钱模式', true);
  const seq0 = await P.lastSeq();
  const rounds = [];
  for (let k = 0; k < 5; k++) rounds.push(await sayAndSub(page, line('xiyan'), { type: 'story' }, { sub: false, settle: 1500 }));
  const log = await P.mockLog(seq0);
  const sys = await sysText(page);
  const line1 = await subLine(page);
  const shot23 = await ui.shot(page, 'd-23-xiyan-system');
  const ev23 = [];
  let ok23 = true;
  rounds.forEach((r, k) => {
    const round = k + 2;
    const text = reqText(r.mains[r.mains.length - 1]);
    const want = expectCountdown(160, 3, round);
    const good = text.includes(`本轮<副本>的时限一栏写：${want}。`) && text.includes(`剩余${160 - round}/160轮`);
    ok23 &&= good;
    if (k === 0 || k === 4) ev23.push(`喜宴第${round}轮注入：「本轮<副本>的时限一栏写：${want}。」${good ? '✓' : '✗'}；进度块「${excerpt(text, '副本：喜宴', 1, 120)}」`);
  });
  const left = stat(sys, '最多剩余轮次');
  ok23 &&= left === '154/160';
  ev23.push(`喜宴第6轮后「最多剩余轮次」${left}（160−6）；剩余时间一栏 ${stat(sys, '剩余时间')}`);
  record(
    21,
    'desktop·喜宴',
    log.filter((e) => e.caller === 'sub').length === 0 && rounds.every((r) => !r.snap?.sub),
    [`省钱模式下喜宴（没有事件表）跑5轮：检测调用 ${log.filter((e) => e.caller === 'sub').length} 次；系统页「${line1 || '（不显示）'}」`],
  );

  // 22：游戏开场白（「本次副本《游戏》」）
  const y = await enter(page, { character: CH.youxi, expect: '游戏', shot: 'd-22-youxi-entry' });
  const ySys0 = await sysText(page);
  const y2 = await sayAndSub(page, line('youxi'), { type: 'story' }, { sub: false, settle: 1200 });
  const y3 = await sayAndSub(page, line('youxi'), { type: 'story' }, { sub: false, settle: 1200 });
  const ySys = await sysText(page);
  const t2 = reqText(y2.mains[y2.mains.length - 1]);
  const t3 = reqText(y3.mains[y3.mains.length - 1]);
  const w2 = expectCountdown(90, 8, 2);
  const w3 = expectCountdown(90, 8, 3);
  const good = t2.includes(`本轮<副本>的时限一栏写：${w2}。`) && t3.includes(`本轮<副本>的时限一栏写：${w3}。`) && stat(ySys0, '最多剩余轮次') === '89/90' && stat(ySys, '最多剩余轮次') === '87/90';
  ok23 &&= good;
  ev23.push(`游戏：第2轮「${w2}」、第3轮「${w3}」${good ? '✓' : '✗'}；「最多剩余轮次」入场后 ${stat(ySys0, '最多剩余轮次')}、第3轮后 ${stat(ySys, '最多剩余轮次')}`);
  ev23.push(`本轮指令里的时限一行（游戏第2轮）：「${excerpt(t2, '本轮<副本>的时限一栏写', 1, 160)}」`);
  record(23, 'desktop·倒计时', ok23, ev23, [shot23]);
  record(
    22,
    'desktop·喜宴/游戏',
    x.ok && y.ok && x.st.meta?.entryIndex === 0 && xGreet.rlzc?.round === 1 && y.st.meta?.entryIndex === 0 && y.st.chat[0].rlzc?.round === 1,
    [`喜宴开场白（只有「此次副本的规则是：6=5+1？」）弹窗：「${x.text}」，确认后开场白为第1轮`, `游戏开场白（「本次副本《游戏》……」）弹窗：「${y.text}」，确认后开场白为第1轮`],
    [x.shot, y.shot],
  );
}

async function saveModeCarry(page) {
  // 21：省钱模式下钟楼第2轮有事件才调用，之后几轮沿用这一份状态
  const e = await enter(page, { character: CH.zhonglou, newChat: true, expect: '钟楼' });
  const seq0 = await P.lastSeq();
  const r2 = await sayAndSub(page, line('zhonglou'));
  const marker = /第\d+次检测/.exec(r2.snap?.sub?.state?.positions ?? '')?.[0];
  const later = [];
  for (let k = 0; k < 3; k++) later.push(await sayAndSub(page, line('zhonglou'), { type: 'story' }, { sub: false, settle: 1500 }));
  const log = await P.mockLog(seq0);
  const subs = log.filter((x) => x.caller === 'sub');
  const carried = later.every((r) => reqText(r.mains[r.mains.length - 1]).includes(marker));
  const line1 = await subLine(page);
  record(
    21,
    'desktop·钟楼沿用',
    e.ok && subs.length === 1 && !!marker && carried && /已更新（第2轮）/.test(line1),
    [
      `省钱模式下钟楼第2~5轮：只在第2轮（有E02、E03）调用 ${subs.length} 次；第3~5轮没有事件、下一轮也没有带条件的事件，不调用`,
      `第3~5轮的主AI请求里都带着第2轮整理出的状态（「${marker}」）；系统页「${line1}」`,
    ],
  );
  await setSubCheck(page, '省钱模式', false);
}

/** 不在25项里、但玩家真实会碰到的：世界书被暗号触发、「跳到天黑」快进、副本结算后不再注入 */
async function extraFlows(page) {
  // 世界书：用斜杠命令给当前聊天建一本世界书，条目以副本暗号为关键词（和玩家的钟楼世界书同一机制）
  await ui.closePanel(page);
  await page.fill('#send_textarea', '/getchatbook | /createentry file={{pipe}} key=【副本进行中：钟楼】 【钟楼测试条目】塔里没有钟，只有塔外那面钟。');
  await page.locator('#send_but').click();
  await page.waitForTimeout(2000);
  const w = await sayAndSub(page, line('zhonglou'), { type: 'story' }, { sub: false, settle: 1500 });
  const wText = reqText(w.mains[w.mains.length - 1]);
  extras.push({
    part: 'desktop',
    name: '世界书条目被副本暗号触发',
    ok: wText.includes('【钟楼测试条目】') && wText.includes('【副本进行中：钟楼】'),
    detail: wText.includes('【钟楼测试条目】') ? '以「【副本进行中：钟楼】」为关键词的条目出现在了主AI请求里' : '条目没有被触发',
  });

  // 快进：玩家说「睡到天黑」→ 弹窗确认 → 这一轮快进到本阶段最后一轮
  const len = await ui.chatLength(page);
  const seq = await P.lastSeq();
  const t = await clickSend(page, '有点累了，先回房间睡到天黑。');
  const dlg = await ui.popup(page, '是否跳到', 15000);
  const ask = (await dlg.innerText()).split('\n')[0];
  const skipShot = await ui.shot(page, 'd-x-skip-popup');
  await dlg.locator('.popup-button-ok').click();
  await waitReply(page, len + 2);
  const idx = await lastAi(page);
  const snap = await snapOf(page, idx);
  const main = (await P.mockLog(seq, true)).filter((x) => x.caller === 'main').pop();
  const mText = reqText(main);
  const sys = await sysText(page);
  extras.push({
    part: 'desktop',
    name: '「睡到天黑」快进',
    // 快进到第一日第72轮（日落）；这一轮写完，第一日结束，系统页显示第一夜 0/28
    ok: /是否跳到天黑/.test(ask) && mText.includes('玩家选择快进') && mText.includes('- E04：') && snap?.round === 72 && snap?.phase === '第一日·白天' && stat(sys, '阶段') === '第一夜' && stat(sys, '轮次') === '0/28',
    detail: `弹窗「${ask}」；确认后这一轮注入「${excerpt(mText, '玩家选择快进', 1, 60)}」并合并了 E04（日落抽签）；这一楼记为${snap?.phase}第${snap?.round}轮，写完后系统页进入 ${stat(sys, '阶段')} ${stat(sys, '轮次')}`,
    shots: [skipShot],
  });
  void t;

  // 结算：AI 输出 <副本结算> 后副本结束，之后不再注入、不再检测
  await waitSub(page, idx, { after: t }).catch(() => null);
  await say(page, line('zhonglou'), { type: 'story', extra: '<副本结算>结果=通关｜评价=A</副本结算>' });
  await sleep(1500);
  const sysEnd = await sysText(page);
  const endShot = await ui.shot(page, 'd-x-settled');
  await ui.closePanel(page);
  const seq2 = await P.lastSeq();
  await sayAndSub(page, '回到回廊，先找地方歇一歇。', { type: 'corridor' }, { sub: false, settle: 2000 });
  const log2 = await P.mockLog(seq2, true);
  const after = log2.filter((x) => x.caller === 'main').map(reqText).join('\n');
  extras.push({
    part: 'desktop',
    name: '副本结算后回到回廊：不再注入、不再检测',
    ok: /已结束/.test(sysEnd) && stat(sysEnd, '结果') === '通关' && stat(sysEnd, '评价') === 'A' && !/【副本进行中|［副本进度|［本轮指令|［副本状态/.test(after) && log2.filter((x) => x.caller === 'sub').length === 0,
    detail: `系统页显示「已结束」、结果 ${stat(sysEnd, '结果')}、评价 ${stat(sysEnd, '评价')}；之后一轮主AI请求里${/【副本进行中|［副本进度|［本轮指令|［副本状态/.test(after) ? '仍有' : '没有'}本扩展的注入，检测调用 ${log2.filter((x) => x.caller === 'sub').length} 次`,
    shots: [endShot],
  });
}

async function desktopPass(browser) {
  currentPart = 'desktop';
  const page = await ui.openST(browser, ui.DESKTOP);
  await step([1, 20], '准备：连接模拟接口、建角色卡', page, () => setup(page));
  await step([1, 20], '设置页卡片', page, () => settingsCard(page, 'desktop'));
  await step([2, 22, 23, 24], '钟楼：检测关闭时跑4轮', page, () => zhonglouOff(page));
  await step([3, 4], '接口预设', page, () => presets(page));
  await step([5], '预设保存', page, () => persistence(page));
  await step([6, 7, 8, 10], '检测：每轮调用、等待、调试页', page, () => recorderRun(page));
  await step([9], '预判不成立的事件', page, () => conditional(page));
  await step([11], '继续生成', page, () => continueNoCall(page));
  await step([12], '删楼回滚', page, () => deleteRollback(page));
  await step([13], '重新生成与滑动', page, () => regenSwipe(page));
  await step([14, 15], '401 与换接口', page, () => failure401(page));
  await step([16], '这轮先跳过', page, () => skipRound(page));
  await step([17], '超时、乱码、代码块', page, () => timeoutGarbageFence(page));
  await step([18], '关闭等待整理', page, () => noWait(page));
  await step([19], '跟随主API', page, () => followMain(page));
  await step([11, 24], '回廊', page, () => corridor(page));
  await step([21, 22, 23], '喜宴与游戏', page, () => xiyanYouxi(page));
  await step([21], '省钱模式沿用状态', page, () => saveModeCarry(page));
  await step([], '额外：世界书、快进、结算', page, () => extraFlows(page));
  collectConsole(page, 'desktop');
  return page;
}

// ───────────── 费用估算 ─────────────

async function costPass(page) {
  currentPart = 'cost';
  await step([], '费用：钟楼连续10轮', page, async () => {
    await setSource(page, 'preset');
    await pickPreset(page, '记录员B');
    await setSubCheck(page, '省钱模式', false);
    await setSubCheck(page, '等检测完', true);
    await enter(page, { character: CH.zhonglou, newChat: true, expect: '钟楼' });
    const rounds = [];
    for (let k = 0; k < 10; k++) {
      const r = await sayAndSub(page, line('zhonglou'));
      const s = r.subs[0];
      const m = r.mains[r.mains.length - 1];
      rounds.push({
        round: r.snap?.round,
        events: (r.snap?.injected ?? []).join(' '),
        subIn: s?.inTok,
        subOut: s?.outTok,
        mainIn: m?.inTok,
        mainOut: m?.outTok,
        ms: r.snap?.sub?.ms,
      });
    }
    const sum = (k, enc) => rounds.reduce((a, r) => a + (r[k]?.[enc] ?? 0), 0);
    for (const enc of ['o200k', 'cl100k']) {
      cost[enc] = {
        subInTotal: sum('subIn', enc),
        subOutTotal: sum('subOut', enc),
        subInAvg: Math.round(sum('subIn', enc) / rounds.length),
        subOutAvg: Math.round(sum('subOut', enc) / rounds.length),
        mainInTotal: sum('mainIn', enc),
        mainOutTotal: sum('mainOut', enc),
      };
    }
    cost.rounds = rounds;
    fs.writeFileSync(path.join(OUT, 'cost.json'), JSON.stringify(cost, null, 2));
    console.log('  费用：', JSON.stringify({ o200k: cost.o200k, cl100k: cost.cl100k }));
  });
}

// ───────────── 手机宽度（390px）─────────────

async function mobilePass(browser) {
  currentPart = 'mobile';
  const page = await ui.openST(browser, ui.MOBILE);
  await reopen(page, null);
  await step([1, 20], '手机：设置页', page, async () => {
    await ui.closeRightPanel(page);
    await settingsCard(page, 'mobile');
    const box = await host(page).locator('.rlzc-panel').boundingBox();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    extras.push({ part: 'mobile', name: '手机宽度下面板不超出屏幕', ok: box.x >= 0 && box.x + box.width <= 390.5 && overflow <= 0, detail: `面板 x=${Math.round(box.x)} 宽=${Math.round(box.width)}；页面横向溢出 ${overflow}px` });
  });
  await step([4], '手机：密钥显示切换', page, async () => {
    await setSource(page, 'preset');
    await pickPreset(page, '记录员B');
    const card = ui.subCard(page);
    const keyInput = field(card, '密钥').locator('input');
    const t0 = await keyInput.getAttribute('type');
    await ui.press(page, field(card, '密钥').locator('button'));
    const t1 = await keyInput.getAttribute('type');
    const shot = await ui.shotEl(card, 'm-04-key-shown');
    await ui.press(page, field(card, '密钥').locator('button'));
    const t2 = await keyInput.getAttribute('type');
    record(4, 'mobile', t0 === 'password' && t1 === 'text' && t2 === 'password', [`390px：默认 ${t0}，点「显示」${t1}，再点 ${t2}`], [shot]);
  });
  await step([22, 23], '手机：游戏开场入场', page, async () => {
    const e = await enter(page, { character: CH.youxi, newChat: true, expect: '游戏', shot: 'm-22-youxi-entry' });
    record(22, 'mobile', e.ok && e.st.chat[0].rlzc?.round === 1, [`390px 弹窗：「${e.text}」`], [e.shot]);
    const r = await sayAndSub(page, line('youxi'), { type: 'story' }, { sub: false, settle: 1200 });
    const sys = await sysText(page);
    const shot = await ui.shot(page, 'm-23-youxi-system');
    const text = reqText(r.mains[r.mains.length - 1]);
    record(23, 'mobile', text.includes(`本轮<副本>的时限一栏写：${expectCountdown(90, 8, 2)}。`) && stat(sys, '最多剩余轮次') === '88/90', [`390px 系统页：轮次 ${stat(sys, '轮次')}、最多剩余轮次 ${stat(sys, '最多剩余轮次')}、剩余时间 ${stat(sys, '剩余时间')}`], [shot]);
  });
  await step([24, 7, 14, 15, 8, 6], '手机：钟楼', page, async () => {
    const e = await enter(page, { character: CH.zhonglou, newChat: true, expect: '钟楼' });
    await ui.tab(page, '系统');
    const tabs = await host(page).locator('.rlzc-tabs button').allInnerTexts();
    const docTabs = await host(page).locator('.rlzc-system .rlzc-docs .rlzc-subtabs button').allInnerTexts();
    await ui.press(page, host(page).locator('.rlzc-system .rlzc-docs .rlzc-subtabs button', { hasText: '楼层图' }));
    await page.waitForTimeout(600);
    await host(page).locator('.rlzc-system .rlzc-docs').scrollIntoViewIfNeeded();
    const imgOk = await host(page).locator('.rlzc-system .rlzc-docs img.rlzc-img').evaluate((el) => el.complete && el.naturalWidth > 0).catch(() => false);
    const shot = await ui.shot(page, 'm-24-zhonglou-docs');
    record(24, 'mobile', e.ok && tabs.join('、') === '系统、设置、调试' && docTabs.length === 3 && imgOk, [`390px：页签 ${tabs.join('、')}；资料 ${docTabs.join(' / ')}；楼层图${imgOk ? '正常显示' : '没显示'}`], [shot]);

    // 6：每轮调用、系统页一行
    const r2 = await sayAndSub(page, line('zhonglou'), { type: 'story', writeEvents: [] });
    const l2 = await waitSubLine(page, /已更新（第2轮）/);
    const shot6 = await ui.shot(page, 'm-06-system-updated');
    record(6, 'mobile', r2.subs.length === 1 && /已更新（第2轮）/.test(l2), [`390px：第2轮检测 ${r2.subs.length} 次，系统页「${l2}」`], [shot6]);

    // 7：整理中
    await P.mockControl({ sub: { delayMs: 3000 } });
    await say(page, line('zhonglou'));
    const len = await ui.chatLength(page);
    await clickSend(page, line('zhonglou'));
    let busy = false;
    for (let k = 0; k < 10 && !busy; k++) {
      busy = await page.locator('#rlzc-sub-busy').isVisible().catch(() => false);
      if (!busy) await page.waitForTimeout(100);
    }
    const shot7 = await ui.shot(page, 'm-07-waiting');
    await waitReply(page, len + 2);
    await waitSub(page, await lastAi(page), { after: Date.now() - 4000 }).catch(() => null);
    await P.mockControl({ sub: { delayMs: 0 } });
    record(7, 'mobile', busy, [`390px：等待检测时发送按钮旁${busy ? '显示「整理中…」' : '没有显示'}`], [shot7]);

    // 14/15：失败弹窗与换接口
    await P.mockControl({ sub: { mode: '401', count: 3 } });
    const r = await say(page, line('zhonglou'));
    const dlg = await ui.popup(page, '事件检测失败', 40000);
    const buttons = await dlg.locator('.popup-controls .menu_button:visible').allInnerTexts();
    const inView = await dlg.evaluate((d) => {
      const b = d.getBoundingClientRect();
      return b.left >= 0 && b.right <= window.innerWidth + 0.5;
    });
    const shot14 = await ui.shot(page, 'm-14-failure-popup');
    record(14, 'mobile', ['重试', '换一个接口', '这轮先跳过'].every((b) => buttons.some((x) => x.includes(b))) && inView, [`390px 弹窗按钮：${buttons.join(' / ')}；弹窗${inView ? '没有' : ''}超出屏幕`], [shot14]);
    await ui.press(page, dlg.locator('.popup-button-custom', { hasText: '换一个接口' }));
    const select = dlg.locator('select');
    await select.waitFor({ state: 'visible' });
    const opts = await select.locator('option').allInnerTexts();
    const t = Date.now();
    await select.selectOption({ label: '跟随主API' });
    const snap = await waitSub(page, r.idx, { after: t });
    const shot15 = await ui.shot(page, 'm-15-switched');
    record(15, 'mobile', !!snap?.sub?.state && snap.sub.via === '跟随主API', [`390px 下拉框：${opts.join(' / ')}；选「跟随主API」后 ${Date.now() - t}ms 内成功`], [shot15]);
    await setSource(page, 'preset');
    await pickPreset(page, '记录员B');

    // 8：调试页
    await setDebugMode(page, true);
    const rows = await debugRows(page);
    const row2 = rows.find((x) => x.cells[2] === '2' && x.cells[1] === '第一日·白天');
    await openDetails(page, '副本事件检测');
    const shot8 = await ui.shot(page, 'm-08-debug');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    record(8, 'mobile', /E02✗/.test(row2?.cells[6] ?? '') && row2?.warn && overflow <= 0, [`390px 调试页第2轮：「${row2?.cells[6]}」${row2?.warn ? '标黄' : ''}；页面横向溢出 ${overflow}px（表格在卡片内横向滚动）`], [shot8]);
    await ui.closePanel(page);
  });
  collectConsole(page, 'mobile');
  await page.context().close();
}

// ───────────── 共存：柏宝书 + 酒馆助手 ─────────────

async function installExt(page, url) {
  return page.evaluate(async (url) => {
    const res = await fetch('/api/extensions/install', {
      method: 'POST',
      headers: SillyTavern.getContext().getRequestHeaders(),
      body: JSON.stringify({ url, global: false }),
    });
    return { status: res.status, text: (await res.text()).slice(0, 300) };
  }, url);
}

async function coexistPass(page) {
  currentPart = 'coexist';
  await step([25], '共存：柏宝书 + 酒馆助手', page, async () => {
    const ev = [];
    const bb = await installExt(page, 'https://github.com/baibai-git/ST-BaiBai-Book');
    const jsr = await installExt(page, 'https://github.com/N0VI028/JS-Slash-Runner');
    ev.push(`安装柏宝书：HTTP ${bb.status} ${bb.text.slice(0, 80)}`);
    ev.push(`安装酒馆助手：HTTP ${jsr.status} ${jsr.text.slice(0, 80)}`);
    const installed = (r) => r.status === 200 || /already exists|已存在/i.test(r.text);
    if (!installed(bb) || !installed(jsr)) {
      record(25, 'coexist', null, ev, [], '扩展没装上，见证据');
      return;
    }
    page.consoleLog.length = 0;
    await ui.reload(page);
    await sleep(3000);
    await reopen(page, CH.corridor);
    const activated = page.consoleLog.filter((l) => /Activating extension/.test(l.text)).map((l) => l.text.replace('Activating extension ', ''));
    const bbOn = activated.some((a) => /ST-BaiBai-Book/.test(a));
    const jsrOn = activated.some((a) => /JS-Slash-Runner/.test(a));
    ev.push(`刷新后启用的第三方扩展：${activated.filter((a) => a.startsWith('third-party')).join('、')}`);

    // 打开柏宝书的总开关（它默认关着），用它的「跟随主API」做摘要
    await page.locator('#extensionsMenuButton').click();
    await page.locator('#bbs-menu-item').click();
    await page.locator('.bbs-window').waitFor({ state: 'visible', timeout: 15000 });
    await page.locator('.bbs-nav-item[aria-label="设置"]').click();
    const master = page.locator('.bbs-master .bbs-toggle').first();
    await master.waitFor({ state: 'visible', timeout: 10000 });
    if ((await master.getAttribute('aria-checked')) !== 'true') await master.click();
    await page.waitForTimeout(500);
    const bbEnabled = (await master.getAttribute('aria-checked')) === 'true';
    const bbsShot = await ui.shot(page, 'c-25-baibai-settings');
    ev.push(`柏宝书面板能打开，总开关「柏宝书 · 记忆引擎」${bbEnabled ? '已打开（摘要默认跟随主API，也就是模拟接口）' : '没能打开'}`);
    await page.locator('.bbs-head button[title="关闭"]').click();
    await page.waitForTimeout(600);
    const helper = await page.evaluate(() => ({ th: typeof window.TavernHelper, keys: window.TavernHelper ? Object.keys(window.TavernHelper).length : 0 }));
    ev.push(`酒馆助手：window.TavernHelper ${helper.th}（${helper.keys} 个接口）`);
    const helperMsg = await page.evaluate(async () => {
      try {
        const r = window.TavernHelper?.getChatMessages?.('0');
        const v = r instanceof Promise ? await r : r;
        return Array.isArray(v) ? `getChatMessages 返回 ${v.length} 条` : String(v).slice(0, 60);
      } catch (e) {
        return `出错：${e.message}`;
      }
    });
    ev.push(`酒馆助手接口调用：${helperMsg}`);

    // 核心流程：钟楼新聊天 → 入场 → 6轮（检测开） → 面板
    const N = 6;
    const seq0 = await P.lastSeq();
    const e = await enter(page, { character: CH.zhonglou, newChat: true, expect: '钟楼' });
    const rounds = [];
    for (let k = 0; k < N; k++) rounds.push(await sayAndSub(page, line('zhonglou')));
    await sleep(3000);
    const log = await P.mockLog(seq0, true);
    const st = await ui.rlzcState(page);
    const hiddenAi = st.chat.filter((m) => !m.is_user && m.is_system).map((m) => m.i);
    const hiddenCount = hiddenAi.length;
    const sys = await sysText(page);
    const shot = await ui.shot(page, 'c-25-panel');
    const allInjected = rounds.every((r, k) => {
      const t = reqText(r.mains[r.mains.length - 1]);
      return t.includes(`本轮：第${k + 2}/72轮`) && t.includes('【副本进行中：钟楼】');
    });
    const baibaiCalls = log.filter((x) => x.caller === 'baibai').length;
    ev.push(`钟楼入场弹窗：${e.text}；又聊了${N}轮后系统页轮次 ${stat(sys, '轮次')}（应为 ${N + 1}/72），最多剩余轮次 ${stat(sys, '最多剩余轮次')}；副本会话${st.meta?.status === 'active' ? '仍在' : '已丢失'}`);
    ev.push(`每轮主AI请求里都有本扩展的暗号和正确轮次：${allInjected}；检测调用 ${log.filter((x) => x.caller === 'sub').length} 次`);
    ev.push(`柏宝书摘要请求 ${baibaiCalls} 次；它隐藏了 ${hiddenCount} 条旧的AI楼层（第 ${hiddenAi.join('、')} 楼，is_system=true${hiddenAi.includes(0) ? '，含入场的开场白' : ''}），本扩展照样按轮计数`);
    // 柏宝书的摘要页里应有这几轮的摘要
    await ui.closePanel(page);
    await page.locator('#extensionsMenuButton').click();
    await page.locator('#bbs-menu-item').click();
    await page.locator('.bbs-window').waitFor({ state: 'visible', timeout: 15000 });
    await page.locator('.bbs-nav-item[aria-label="摘要"]').click();
    await page.waitForTimeout(800);
    const bbsText = await page.locator('.bbs-body').innerText().catch(() => '');
    const bbsSummaryShot = await ui.shot(page, 'c-25-baibai-summary');
    const bbHasSummary = /四处查看/.test(bbsText);
    ev.push(`柏宝书摘要页${bbHasSummary ? '能看到模拟接口返回的摘要（「…在钟楼里四处查看…」）' : '没有看到摘要'}`);
    await page.locator('.bbs-head button[title="关闭"]').click().catch(() => {});
    await page.waitForTimeout(400);
    const errs = page.consoleLog.filter((l) => ['error', 'pageerror'].includes(l.type));
    const ours = errs.filter((l) => /rlzc|回廊种菜|third-party\/rlzc/.test(l.text));
    ev.push(`控制台错误 ${errs.length} 条，其中与本扩展有关的 ${ours.length} 条${ours.length ? `：${ours.map((l) => l.text.slice(0, 100)).join(' | ')}` : ''}`);
    record(25, 'coexist', bbOn && jsrOn && bbEnabled && helper.th === 'object' && e.ok && allInjected && stat(sys, '轮次') === `${N + 1}/72` && st.meta?.status === 'active' && ours.length === 0, ev, [bbsShot, shot, bbsSummaryShot]);
    collectConsole(page, 'coexist');
  });
}

// ───────────── 入口 ─────────────

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  fs.rmSync(path.join(OUT, 'mock-log.jsonl'), { force: true });
  fs.rmSync(ui.SHOTS, { recursive: true, force: true });
  fs.mkdirSync(ui.SHOTS, { recursive: true });
  if (FRESH) fs.rmSync(ST_DATA, { recursive: true, force: true });
  installExtension({ build: !argv.includes('--no-build') });
  await P.startMock();
  await P.startST();
  const browser = await ui.launch();
  let page = null;
  const t0 = Date.now();
  try {
    if (ONLY.has('desktop')) page = await desktopPass(browser);
    if (!page && (ONLY.has('cost') || ONLY.has('coexist'))) {
      page = await ui.openST(browser, ui.DESKTOP);
      await setup(page);
    }
    if (ONLY.has('cost')) await costPass(page);
    if (ONLY.has('mobile')) await mobilePass(browser);
    if (ONLY.has('coexist')) await coexistPass(page);
  } finally {
    const data = writeResults({ extras, cost, consoleIssues, minutes: ((Date.now() - t0) / 60000).toFixed(1) });
    console.log('\n结果：');
    for (const [id, it] of Object.entries(data.items)) console.log(`  ${id.padStart(2)}. ${it.status}  ${it.title}`);
    await browser.close().catch(() => {});
    await P.stopST();
    await P.stopMock();
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
