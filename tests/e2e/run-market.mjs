/**
 * 回廊种菜系统 · 黑市的端到端检查（第四期-第4段）
 * SillyTavern 1.19.0 + 本地模拟接口 + Playwright。副本事件检测用「跟随主API」（同一个模拟接口）。
 *
 * 用法：node run-market.mjs [--fresh] [--no-build]
 * 产物（不提交）：out/market-results.json、out/shots/market-*.jpg、out/mock-log.jsonl
 */
import fs from 'node:fs';
import path from 'node:path';
import * as ui from './lib/ui.mjs';
import * as P from './lib/procs.mjs';
import { installExtension } from './setup.mjs';
import { OPENING_ZHONGLOU, CORRIDOR } from './fixtures.mjs';
import { E2E_DIR, OUT, ST_DATA } from './lib/paths.mjs';

const argv = process.argv.slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const { host } = ui;

const CH = { corridor: '回廊引导', zhonglou: '钟楼开场', nongxian: '农闲开场' };
const OPENING_NONGXIAN = ['山谷里的风是暖的。', '「副本简报 - 农闲」', '「人数：1人」', '「等级：D」', '「时限：七天」', '「简报：好好休息。」'].join('\n');

export const TITLES = {
  M1: '钟楼入场（事件检测开）：出现结局盘、评价盘、3个事件盘、2–3个庄家怪盘；第1轮内下注成功，余额和流水正确；第2条AI回复后封盘',
  M2: '事件盘 M2 在某轮被判定为真：押「会」的兑、押「不会」的废，提示弹出，悬浮球数字减少',
  M3: '通关结算 B评：结局盘、评价盘开奖正确；未判出的事件盘按规则兑「否」或退',
  M4: '删掉结算那条消息：兑付撤回；重新生成后重新开奖',
  M5: '死亡结算：未开奖的全废',
  M6: '事件检测关闭入场：只有结局盘和评价盘',
  M7: '农闲入场：不开盘',
  M8: '赌坊：回廊中四个游戏各玩一局，流水正确；副本内显示不营业；结算后回到回廊，桌子换了一批',
  M9: '押自己失败后，下一轮账户注入末尾有那句提示，再下一轮消失',
  M10: '截图：盘口（开盘中、已封盘）、票夹、赌坊，桌面和390px各一套',
};
const results = {};
function rec(id, ok, evidence = [], shots = [], note = '') {
  (results[id] ??= []).push({ ok, evidence: [].concat(evidence).filter(Boolean), shots: [].concat(shots).filter(Boolean), note });
  console.log(`  [${id}] ${ok === true ? '通过' : ok === false ? '不通过' : '无法模拟'}${note ? `（${note}）` : ''}`);
  for (const e of [].concat(evidence).filter(Boolean)) console.log(`      · ${e}`);
}
const statusOf = (id) => {
  const parts = results[id] ?? [];
  if (!parts.length) return '未运行';
  if (parts.some((p) => p.ok === false)) return '不通过';
  if (parts.every((p) => p.ok === null)) return '无法模拟';
  return '通过';
};

async function step(ids, name, page, fn) {
  console.log(`\n▶ ${name}`);
  try {
    await fn();
  } catch (e) {
    console.log(`  ✗ ${name} 出错：${e.stack ?? e.message}`);
    const shot = await ui.shot(page, `market-err-${name.replace(/[^\w一-龥]+/g, '_')}`).catch(() => null);
    for (const id of [].concat(ids)) if (!(results[id] ?? []).length) rec(id, false, [`运行出错：${e.message.split('\n')[0]}`], shot ? [shot] : []);
    for (let k = 0; k < 3; k++) {
      const d = page.locator('dialog.popup[open]').last();
      if (!(await d.count())) break;
      await d.locator('.popup-button-cancel, .popup-button-close').first().click({ force: true }).catch(() => {});
      await page.waitForTimeout(400);
    }
  }
}

// ───────────── 页面上的数据 ─────────────

const marketMeta = (page) => page.evaluate(() => JSON.parse(JSON.stringify(SillyTavern.getContext().chatMetadata.rlzc_market ?? null)));
const session = (page) => page.evaluate(() => JSON.parse(JSON.stringify(SillyTavern.getContext().chatMetadata.rlzc ?? null)));

function reqText(e) {
  return (e?.request ?? []).map((m) => (typeof m.content === 'string' ? m.content : '')).join('\n');
}
function injected(text, head) {
  const i = text.indexOf(head);
  if (i < 0) return '';
  return text.slice(i).split('\n')[0];
}
/** ［账户·仅供AI］块（含下一行起的一次性提示） */
function accountBlock(text) {
  const i = text.indexOf('［账户·仅供AI］');
  if (i < 0) return '';
  const rest = text.slice(i);
  const lines = rest.split('\n');
  const out = [lines[0]];
  for (const l of lines.slice(1)) {
    if (!l.trim() || l.startsWith('［')) break;
    out.push(l);
  }
  return out.join('\n');
}

async function lastAi(page) {
  return page.evaluate(() => {
    const c = SillyTavern.getContext().chat;
    for (let i = c.length - 1; i >= 0; i--) if (!c[i].is_user && !(c[i].is_system && c[i].extra?.type)) return i;
    return -1;
  });
}

/** 发一条消息，等回复写完、事件检测结束 */
async function say(page, text, plan) {
  await ui.closePanel(page);
  await P.mockPlan([plan]);
  const seq0 = await P.lastSeq();
  await ui.send(page, text);
  const idx = await lastAi(page);
  await ui.waitSubIdle(page).catch(() => {});
  await page.waitForFunction((i) => {
    const s = SillyTavern.getContext().chat[i]?.extra?.rlzc?.sub;
    const active = SillyTavern.getContext().chatMetadata.rlzc?.status === 'active';
    return !!s || !active;
  }, idx, { timeout: 30000 }).catch(() => {});
  await sleep(700);
  const log = await P.mockLog(seq0, true);
  return { idx, log, mains: log.filter((e) => e.caller === 'main'), subs: log.filter((e) => e.caller === 'sub'), freaks: log.filter((e) => e.caller === 'freak') };
}

async function toasts(page) {
  return page.locator('#toast-container .toast').allInnerTexts().catch(() => []);
}
async function clearToasts(page) {
  await page.evaluate(() => window.toastr?.clear?.());
  await sleep(300);
}

async function badge(page) {
  const b = host(page).locator('.rlzc-ball-badge');
  return (await b.count()) ? Number((await b.innerText()).trim()) : 0;
}

// ───────────── 黑市页 ─────────────

async function marketTab(page, sub) {
  await ui.tab(page, '黑市');
  const btn = host(page).locator('.rlzc-market-tabs button', { hasText: sub });
  await btn.click();
  await page.waitForTimeout(300);
}

async function statusLine(page) {
  await marketTab(page, '盘口');
  return (await host(page).locator('.rlzc-mk-status').innerText()).trim();
}

async function cards(page) {
  await marketTab(page, '盘口');
  return host(page)
    .locator('.rlzc-mk-card')
    .evaluateAll((els) =>
      els.map((el) => ({
        tag: el.querySelector('.rlzc-mk-tag')?.textContent?.trim(),
        q: el.querySelector('.rlzc-mk-q')?.textContent?.replace(el.querySelector('.rlzc-mk-tag')?.textContent ?? '', '').trim(),
        opts: [...el.querySelectorAll('.rlzc-mk-opt')].map((b) => `${b.querySelector('span')?.textContent}${b.querySelector('b')?.textContent}`),
        disabled: [...el.querySelectorAll('.rlzc-mk-opt')].every((b) => b.disabled),
      })),
    );
}

const cardOf = (page, q) => host(page).locator('.rlzc-mk-card').filter({ has: page.locator('.rlzc-mk-q', { hasText: q }) }).first();

/** 在盘口页选中一个选项、输入押注、点下注 */
async function bet(page, q, label, stake) {
  await marketTab(page, '盘口');
  const card = cardOf(page, q);
  const opt = card.locator('.rlzc-mk-opt').filter({ has: page.locator('span', { hasText: new RegExp(`^${label}$`) }) }).first();
  await opt.click();
  await card.locator('.rlzc-mk-bet input').fill(String(stake));
  await page.waitForTimeout(150);
  const hint = await card.locator('.rlzc-hint').innerText().catch(() => '');
  const red = await card.locator('.rlzc-mk-red').innerText().catch(() => '');
  await card.locator('.rlzc-mk-bet button', { hasText: '下注' }).click();
  await page.waitForTimeout(400);
  return { hint: hint.trim(), red: red.trim() };
}

async function tickets(page) {
  await marketTab(page, '票夹');
  return host(page)
    .locator('.rlzc-tk')
    .evaluateAll((els) =>
      els.map((el) => ({
        title: el.querySelector('.rlzc-tk-title')?.textContent?.trim(),
        line: el.querySelector('small')?.textContent?.trim(),
        stamp: el.querySelector('.rlzc-stamp')?.textContent?.trim(),
      })),
    );
}
const tk = (list, title) => list.find((t) => t.title === title);

async function ledgerRows(page) {
  await ui.tab(page, '账本');
  const num = (await host(page).locator('.rlzc-ledger-hero-num').innerText()).replace(/[,，\s]/g, '');
  const rows = await host(page)
    .locator('.rlzc-ledger-item')
    .evaluateAll((els) => els.map((el) => ({ src: el.querySelector('.rlzc-ledger-item-src')?.textContent?.trim(), delta: el.querySelector('.rlzc-ledger-item-delta')?.textContent?.trim() })));
  return { balance: Number(num), rows };
}

async function panelShots(page, name) {
  const panel = host(page).locator('.rlzc-panel');
  const d = await ui.shotEl(panel, `${name}-desktop`);
  await page.setViewportSize({ width: 390, height: 844 });
  await sleep(1000);
  const m = await ui.shotEl(panel, `${name}-390`);
  const overflow = await page.evaluate(() => {
    const body = document.querySelector('#rlzc-host').shadowRoot.querySelector('.rlzc-body');
    return body ? body.scrollWidth > body.clientWidth + 1 : null;
  });
  const small = await page.evaluate(() => {
    const root = document.querySelector('#rlzc-host').shadowRoot;
    return [...root.querySelectorAll('.rlzc-market button, .rlzc-market input')]
      .filter((b) => b.offsetParent !== null)
      .map((b) => ({ t: (b.textContent || b.placeholder || '').trim().slice(0, 8), h: Math.round(b.getBoundingClientRect().height) }))
      .filter((x) => x.h < 44);
  });
  await page.setViewportSize({ width: 1280, height: 860 });
  await sleep(600);
  return { shots: [d, m], overflow, small };
}

// ───────────── 设置 ─────────────

async function expandCard(page, cls) {
  const card = host(page).locator(cls);
  const head = card.locator('.rlzc-collapse-head').first();
  if ((await head.getAttribute('aria-expanded')) !== 'true') await head.click();
  await page.waitForTimeout(250);
  return card;
}

async function setSubSource(page, label) {
  await ui.tab(page, '设置');
  const sub = await expandCard(page, '.rlzc-subapi');
  await sub.locator('.rlzc-segsrc button', { hasText: label }).click();
  await page.waitForTimeout(300);
}

async function setDebug(page) {
  await ui.tab(page, '设置');
  const box = host(page).locator('.rlzc-settings label.rlzc-check', { hasText: '调试模式' }).locator('input');
  if (!(await box.isChecked())) await box.click();
}

// ───────────── 入场 ─────────────

async function answerEntry(page, { answer = 'ok' } = {}) {
  const dlg = await ui.popup(page, '检测到进入', 20000);
  const text = (await dlg.innerText()).trim().split('\n')[0];
  const box = dlg.locator('#rlzc-live-optin');
  if ((await box.count()) && (await box.isChecked())) await box.setChecked(false);
  await dlg.locator(answer === 'ok' ? '.popup-button-ok' : '.popup-button-cancel').click();
  await dlg.waitFor({ state: 'hidden' }).catch(() => {});
  await page.waitForTimeout(800);
  return text;
}

async function openNewChat(page, character) {
  await ui.closePanel(page);
  await ui.selectCharacter(page, character);
  await sleep(1500);
  const old = page.locator('dialog.popup[open]').filter({ hasText: '检测到进入' });
  if (await old.count()) {
    await old.locator('.popup-button-cancel').click();
    await old.waitFor({ state: 'hidden' }).catch(() => {});
  }
  await ui.closeRightPanel(page);
  await ui.newChat(page);
  await ui.closeRightPanel(page);
}

async function waitFreak(page) {
  await page
    .waitForFunction(() => {
      const c = SillyTavern.getContext();
      const id = c.chatMetadata.rlzc?.id;
      const f = c.chatMetadata.rlzc_market?.books?.[id]?.freak;
      return !f || f.status !== 'pending';
    }, null, { timeout: 30000 })
    .catch(() => {});
  await sleep(500);
}

async function setup(page) {
  await ui.connectMainApi(page, { stream: false });
  const names = await page.evaluate(() => SillyTavern.getContext().characters.map((c) => c.name));
  const list = [
    [CH.corridor, CORRIDOR.slice(0, 2).join('\n\n')],
    [CH.zhonglou, OPENING_ZHONGLOU],
    [CH.nongxian, OPENING_NONGXIAN],
  ];
  for (const [name, greet] of list) if (!names.includes(name)) await ui.createCharacter(page, name, greet, '端到端测试用角色卡');
}

// ───────────── 检查 ─────────────

const shots = {};
const stats = {};

async function casinoPlayAll(page, tables, ev) {
  const plays = [];
  await marketTab(page, '赌坊');
  for (const name of tables) {
    await host(page).locator('.rlzc-cs-table', { hasText: name }).click();
    await page.waitForTimeout(200);
    const play = host(page).locator('.rlzc-cs-play');
    // 押法：分段按钮第一个（翻牌只有一种）
    const seg = play.locator('.rlzc-cs-seg button').first();
    if (await seg.count()) await seg.click();
    await play.locator('.rlzc-mk-bet input').fill('100');
    await play.locator('.rlzc-mk-bet button', { hasText: '开' }).click();
    await play.locator('.rlzc-cs-result').waitFor({ state: 'visible', timeout: 5000 });
    const line = (await play.locator('.rlzc-cs-result').innerText()).trim();
    plays.push({ name, line });
    // 再点一次同一张桌收起
    await host(page).locator('.rlzc-cs-table', { hasText: name }).click();
    await page.waitForTimeout(200);
  }
  ev.push(...plays.map((p) => `${p.name}：${p.line}`));
  return plays;
}

async function tablesShown(page) {
  await marketTab(page, '赌坊');
  return host(page).locator('.rlzc-cs-table b').allInnerTexts();
}

/** 回廊：赌坊先玩今晚的两张桌 */
async function corridorCasino(page, ev8) {
  await openNewChat(page, CH.corridor);
  await say(page, '去休息室找个角落坐一会儿。', { type: 'corridor', status: true });
  const tables = await tablesShown(page);
  const top = (await host(page).locator('.rlzc-market .rlzc-hint').first().innerText()).trim();
  ev8.push(`回廊赌坊顶部：「${top}」；今晚的桌：${tables.join('、')}`);
  const plays = await casinoPlayAll(page, tables, ev8);
  // 截图：开过一局之后的赌坊（结果行）
  await host(page).locator('.rlzc-cs-table', { hasText: tables[0] }).click();
  const play = host(page).locator('.rlzc-cs-play');
  const seg = play.locator('.rlzc-cs-seg button').first();
  if (await seg.count()) await seg.click();
  await play.locator('.rlzc-mk-bet input').fill('50');
  await play.locator('.rlzc-mk-bet button', { hasText: '开' }).click();
  await play.locator('.rlzc-cs-result').waitFor({ state: 'visible', timeout: 5000 });
  plays.push({ name: tables[0], line: (await play.locator('.rlzc-cs-result').innerText()).trim() });
  ev8.push(`${tables[0]}（第二局，押50）：${plays[plays.length - 1].line}`);
  const s = await panelShots(page, 'market-casino');
  shots.casino = s.shots;
  stats.casino390 = { overflow: s.overflow, small: s.small };
  // 另外两张桌：改写摆桌记录后刷新（模拟「回到回廊换一批」），把四个游戏都玩到
  const all = ['听钟', '门牌', '抽签', '翻牌'];
  const rest = all.filter((n) => !tables.includes(n));
  const ids = { 听钟: 'bell', 门牌: 'door', 抽签: 'lot', 翻牌: 'card' };
  await page.evaluate((t) => {
    const c = SillyTavern.getContext();
    c.chatMetadata.rlzc_market.casino.tables = t;
    c.eventSource.emit(c.eventTypes.MESSAGE_EDITED, c.chat.length - 1);
  }, rest.map((n) => ids[n]));
  await sleep(600);
  const shownRest = await tablesShown(page);
  ev8.push(`（测试把摆桌记录改成另外两张：${shownRest.join('、')}）`);
  plays.push(...(await casinoPlayAll(page, shownRest, ev8)));
  const meta = await marketMeta(page);
  const { rows } = await ledgerRows(page);
  const casinoRows = rows.filter((r) => r.src?.startsWith('赌坊·'));
  ev8.push(`账本流水里的赌坊行（新的在上）：${casinoRows.map((r) => `${r.src} ${r.delta}`).join('；')}`);
  const expect = meta.casino.plays.map((p) => `赌坊·${Object.keys(ids).find((k) => ids[k] === p.table)}·${p.label} ${p.net > 0 ? '+' : ''}${p.net}`).reverse();
  const got = casinoRows.map((r) => `${r.src} ${r.delta.replace(/,/g, '')}`);
  const flowOk = JSON.stringify(got) === JSON.stringify(expect) && meta.casino.plays.every((p) => (p.win ? p.net === p.payout - p.stake : p.net === -p.stake));
  const resultOk = plays.every((p) => /^结果：.+。(赢|输) \d+$/.test(p.line));
  const played = new Set(meta.casino.plays.map((p) => p.table));
  return { ok: flowOk && resultOk && played.size === 4, tables };
}

async function zhonglouMain(page, ev8) {
  const ev1 = [];
  const ev2 = [];
  const ev3 = [];
  const ev4 = [];
  const ev9 = [];
  await setSubSource(page, '跟随主API');
  await setDebug(page);
  await openNewChat(page, CH.zhonglou);
  const tablesBefore = (await marketMeta(page))?.casino;
  const entryText = await answerEntry(page);
  await waitFreak(page);
  const list = await cards(page);
  const status0 = await statusLine(page);
  const tagCount = (t) => list.filter((c) => c.tag === t).length;
  ev1.push(`入场弹窗「${entryText}」→ 确定；盘口页顶部「${status0}」`);
  ev1.push(`盘口：${list.map((c) => `【${c.tag}】${c.q}（${c.opts.join(' ')}）`).join('；')}`);
  const log0 = await P.mockLog(0, true);
  const freakReq = log0.filter((e) => e.caller === 'freak').slice(-1)[0];
  const freakText = reqText(freakReq);
  // 只查公开资料里没有的东西：事件表、隐藏状态字段、事件盘的题目与判定句
  const zl = JSON.parse(fs.readFileSync(path.join(E2E_DIR, '..', '..', 'packs', 'zhonglou.json'), 'utf8'));
  const hidden = [
    ...zl.events.map((e) => e.text.slice(0, 14)),
    ...(zl.stateFields ?? []).map((f) => f.hint),
    ...zl.markets.flatMap((m) => [m.q, m.judge]),
    '后台事件',
    '［副本状态',
  ].map((w) => w.replace(/\{\{user\}\}/g, ''));
  const leak = hidden.filter((w) => w && freakText.includes(w));
  ev1.push(`怪盘出题调用 ${log0.filter((e) => e.caller === 'freak').length} 次，请求 ${freakText.length} 字，逐条比对 ${hidden.length} 段事件表、隐藏状态字段、事件盘题目与判定句：${leak.length ? `混进了：${leak.join('、')}` : '一段也没有'}`);

  // 赌坊：副本内不营业
  await marketTab(page, '赌坊');
  const closedCasino = (await host(page).locator('.rlzc-market').innerText()).includes('赌坊只在回廊营业。');
  ev8.push(`钟楼进行中打开赌坊：${closedCasino ? '显示「赌坊只在回廊营业。」' : '没有显示不营业'}`);

  // 第1轮内下注
  const { balance: bal0 } = await ledgerRows(page);
  const b1 = await bet(page, '本局结果', '通关', 300);
  await bet(page, '本局结果', '失败', 100);
  await bet(page, '本局评价', 'B', 50);
  await bet(page, '本局评价', 'A', 50);
  await bet(page, '塔里会出人命吗', '会', 100);
  await bet(page, '塔里会出人命吗', '不会', 100);
  await bet(page, '主播会亲手摇响大钟吗', '不会', 100);
  const freakQ = list.find((c) => c.tag === '庄家')?.q;
  if (freakQ) await bet(page, freakQ, '会', 50);
  const staked = 300 + 100 + 50 + 50 + 100 + 100 + 100 + (freakQ ? 50 : 0);
  const { balance: bal1, rows: rows1 } = await ledgerRows(page);
  const betRows = rows1.filter((r) => r.src?.startsWith('下注·'));
  ev1.push(`下注前余额 ${bal0}，押 ${betRows.length} 注共 ${staked} 后余额 ${bal1}；输入框下小字「${b1.hint}」`);
  ev1.push(`流水（新的在上）：${betRows.map((r) => `${r.src} ${r.delta}`).join('；')}`);
  const badge0 = await badge(page);
  await marketTab(page, '盘口');
  // 截图：开盘中（选中一个选项、填上押注，露出押注行与红字）
  const card0 = cardOf(page, '本局结果');
  await card0.locator('.rlzc-mk-opt').first().click();
  await card0.locator('.rlzc-mk-bet input').fill('100');
  await page.waitForTimeout(200);
  const red = (await card0.locator('.rlzc-mk-red').innerText().catch(() => '')).trim();
  ev1.push(`余额 ${bal1} 时再填押注 100：红字「${red}」，不拦截`);
  const s390 = await panelShots(page, 'market-open');
  shots.open = s390.shots;
  stats.open390 = { overflow: s390.overflow, small: s390.small };

  // 第2轮：封盘；本轮账户注入末尾有「押了自己本局失败」
  const r2 = await say(page, '我先去一楼大厅看看石壁上的守则。', { type: 'story', fullStatus: true });
  const acc2 = accountBlock(reqText(r2.mains[0]));
  const status1 = await statusLine(page);
  const list1 = await cards(page);
  ev1.push(`第2轮回复后盘口页顶部「${status1}」，选项按钮${list1.every((c) => c.disabled) ? '全部不可点' : '仍可点'}`);
  ev9.push(`第2轮生成时的账户注入：${acc2.replace(/\n/g, '⏎')}`);
  shots.closed = (await panelShots(page, 'market-closed')).shots;

  // 第3轮：检测判定 M2 为真
  await P.mockControl({ sub: { marketsYes: ['M2'] } });
  await clearToasts(page);
  const r3 = await say(page, '跟着林默上楼，看他去哪。', { type: 'story', fullStatus: true, extra: '走廊尽头传来一声闷响——有人倒在血泊里，已经没了气息。' });
  await P.mockControl({ sub: { marketsYes: [] } });
  const acc3 = accountBlock(reqText(r3.mains[0]));
  ev9.push(`第3轮生成时的账户注入：${acc3.replace(/\n/g, '⏎')}`);
  const t3 = await toasts(page);
  const badge1 = await badge(page);
  const tk3 = await tickets(page);
  const subReq = reqText(r3.subs[0]);
  const judged = r3.subs[0]?.response ?? '';
  ev2.push(`第3轮检测请求里的盘口陈述：${(/【盘口陈述】([\s\S]*?)\n\n【/.exec(subReq)?.[1] ?? '').trim().replace(/\n/g, '／')}`);
  ev2.push(`检测返回的 markets：${/"markets":\{[^}]*\}/.exec(judged)?.[0] ?? '（无）'}`);
  ev2.push(`票夹：${['钟楼 · 塔里会出人命吗 · 会', '钟楼 · 塔里会出人命吗 · 不会'].map((t) => `${t} → ${tk(tk3, t)?.stamp}（${tk(tk3, t)?.line}）`).join('；')}`);
  ev2.push(`弹出提示：${t3.map((t) => t.replace(/\s+/g, ' ')).join('／') || '（无）'}；悬浮球数字 ${badge0} → ${badge1}`);
  const yesT = tk(tk3, '钟楼 · 塔里会出人命吗 · 会');
  const noT = tk(tk3, '钟楼 · 塔里会出人命吗 · 不会');
  rec('M2', yesT?.stamp === '兑' && noT?.stamp === '废' && t3.some((t) => t.includes('赌票开奖：兑 1 张，废 1 张。')) && badge1 === badge0 - 2, ev2);

  // 第4轮：平静
  await say(page, '回房间把楼层图摊开，对照今天看到的东西。', { type: 'story', fullStatus: true });
  const acc4Ok = !acc3.includes('黑市');
  rec('M9', acc2.includes('在黑市押了自己本局失败，押注100分。') && acc4Ok, ev9);

  // 结算：通关 B评
  const tablesMid = (await marketMeta(page)).casino;
  await clearToasts(page);
  const settleR = await say(page, '天亮了。', { type: 'story', fullStatus: true, extra: '<副本结算>结果=通关｜评价=B</副本结算>' });
  const tk5 = await tickets(page);
  const t5 = await toasts(page);
  const pick = (t) => `${t} → ${tk(tk5, t)?.stamp}（${tk(tk5, t)?.line}）`;
  const want = {
    '钟楼 · 本局结果 · 通关': '兑',
    '钟楼 · 本局结果 · 失败': '废',
    '钟楼 · 本局评价 · B': '兑',
    '钟楼 · 本局评价 · A': '废',
    '钟楼 · 主播会亲手摇响大钟吗 · 不会': '兑',
  };
  if (freakQ) want[`钟楼 · ${freakQ} · 会`] = '废';
  ev3.push(`结算那一楼：${Object.keys(want).map(pick).join('；')}`);
  ev3.push(`弹出提示：${t5.map((t) => t.replace(/\s+/g, ' ')).join('／') || '（无）'}`);
  ev3.push('事件盘 M3、怪盘在盘口开着的每一轮都检测过（第2–4轮都带 markets），未判出按「否」兑');
  const { balance: bal5, rows: rows5 } = await ledgerRows(page);
  const payRows = rows5.filter((r) => /^赌票(兑付|退还)·/.test(r.src ?? ''));
  ev3.push(`兑付/退还流水：${payRows.map((r) => `${r.src} ${r.delta}`).join('；')}；余额 ${bal5}`);
  await marketTab(page, '票夹');
  shots.tickets = (await panelShots(page, 'market-tickets')).shots;
  rec('M3', Object.entries(want).every(([t, s]) => tk(tk5, t)?.stamp === s), ev3);

  // 结算后回到回廊：桌子重新摆
  const tablesAfter = (await marketMeta(page)).casino;
  const shownAfter = await tablesShown(page);
  ev8.push(`钟楼入场前摆桌 ${tablesBefore?.tables?.join('、')}（key「${tablesBefore?.key}」）；副本中 ${tablesMid.tables.join('、')}（未变）；结算回到回廊后重新摆桌：${tablesAfter.tables.join('、')}（key 变为本局会话 id「${tablesAfter.key}」），赌坊页显示 ${shownAfter.join('、')}`);
  const redrawn =
    tablesAfter.key !== tablesBefore?.key &&
    tablesMid.tables.join() === tablesBefore?.tables?.join() &&
    !tablesAfter.tables.every((t) => tablesMid.tables.includes(t));

  // 删掉结算那条：兑付撤回；重新生成后重新开奖
  const before = payRows.length;
  await ui.closePanel(page);
  await ui.deleteLast(page, 1);
  await sleep(800);
  const { rows: rows6, balance: bal6 } = await ledgerRows(page);
  const tk6 = await tickets(page);
  const pending6 = tk6.filter((t) => t.stamp === '待').length;
  ev4.push(`删掉结算那条后：兑付/退还流水 ${before} → ${rows6.filter((r) => /^赌票(兑付|退还)·/.test(r.src ?? '')).length} 笔，余额 ${bal5} → ${bal6}，待开奖 ${pending6} 张（${tk6.filter((t) => t.stamp === '待').map((t) => t.title).join('、')}）`);
  await P.mockPlan([{ type: 'story', fullStatus: true, extra: '<副本结算>结果=通关｜评价=B</副本结算>' }]);
  await clearToasts(page);
  await ui.closePanel(page);
  await ui.regenerate(page);
  await ui.waitSubIdle(page).catch(() => {});
  await sleep(1200);
  const tk7 = await tickets(page);
  const { rows: rows7, balance: bal7 } = await ledgerRows(page);
  const t7 = await toasts(page);
  ev4.push(`重新生成结算后：${Object.keys(want).map((t) => `${t} → ${tk(tk7, t)?.stamp}`).join('；')}；余额 ${bal7}；提示：${t7.map((t) => t.replace(/\s+/g, ' ')).join('／') || '（无）'}`);
  // 第3轮就已开奖的 M2 兑付不随删结算撤回，只剩这一笔
  const left6 = rows6.filter((r) => /^赌票(兑付|退还)·/.test(r.src ?? ''));
  ev4.push(`剩下的那一笔：${left6.map((r) => `${r.src} ${r.delta}`).join('；')}（第3轮已开奖，不属于结算那一楼）`);
  rec('M4', left6.length === 1 && left6[0].src === '赌票兑付·钟楼·塔里会出人命吗' && pending6 === Object.keys(want).length && Object.entries(want).every(([t, s]) => tk(tk7, t)?.stamp === s) && bal7 === bal5, ev4);

  const betOk = betRows.length === (freakQ ? 8 : 7) && bal1 === bal0 - staked && betRows.some((r) => r.src === '下注·钟楼·本局结果·通关' && r.delta.replace(/,/g, '') === '-300');
  const listOk = tagCount('结局') === 1 && tagCount('评价') === 1 && tagCount('事件') === 3 && tagCount('庄家') >= 2 && tagCount('庄家') <= 3;
  rec('M1', listOk && leak.length === 0 && betOk && status0.includes('开盘中') && status1 === '《钟楼》已封盘' && list1.every((c) => c.disabled), ev1, [...(shots.open ?? []), ...(shots.closed ?? [])]);
  return { closedCasino, redrawn };
}

async function zhonglouDeath(page) {
  const ev = [];
  await openNewChat(page, CH.zhonglou);
  await answerEntry(page);
  await waitFreak(page);
  await bet(page, '本局结果', '通关', 100);
  await bet(page, '本局评价', 'S', 50);
  await bet(page, '塔里会出人命吗', '不会', 100);
  // 第2轮：检测 JSON 不带 markets（不算失败，这一轮对盘口算没检测）
  await P.mockControl({ sub: { omitMarkets: true } });
  const r2 = await say(page, '去二楼看看。', { type: 'story', fullStatus: true });
  await P.mockControl({ sub: { omitMarkets: false } });
  const sub2 = await page.evaluate((i) => JSON.parse(JSON.stringify(SillyTavern.getContext().chat[i].extra.rlzc.sub)), r2.idx);
  ev.push(`第2轮检测返回不带 markets：这一楼 sub.skipped=${!!sub2.skipped}、有 state=${!!sub2.state}、markets=${JSON.stringify(sub2.markets)}（不算检测失败，没有弹窗：${(await page.locator('dialog.popup[open]').count()) === 0}）`);
  await ui.tab(page, '调试');
  const det = host(page).locator('.rlzc-debug details', { hasText: '黑市：盘口赔率' }).first();
  await det.locator('summary').click();
  await page.waitForTimeout(300);
  const dbgRows = await det.locator('tbody').last().locator('tr').allInnerTexts();
  ev.push(`调试页「黑市」栏每轮判定：${dbgRows.map((t) => t.replace(/\s+/g, ' ')).join('／')}`);
  shots.debug = await ui.shotEl(det, 'market-debug');
  await say(page, '……', { type: 'story', fullStatus: true, extra: '<副本结算>结果=死亡｜评价=无</副本结算>' });
  const list = await tickets(page);
  const mine = list.slice(0, 3);
  ev.push(`死亡结算后：${mine.map((t) => `${t.title} → ${t.stamp}（${t.line}）`).join('；')}`);
  rec('M5', mine.length === 3 && mine.every((t) => t.stamp === '废'), ev, [shots.debug]);
  return { omitOk: !sub2.skipped && !!sub2.state && sub2.markets === undefined };
}

async function subOffEntry(page) {
  await setSubSource(page, '关闭');
  const seq0 = await P.lastSeq();
  await openNewChat(page, CH.zhonglou);
  await answerEntry(page);
  await sleep(1500);
  const list = await cards(page);
  const freaks = (await P.mockLog(seq0)).filter((e) => e.caller === 'freak').length;
  rec('M6', list.length === 2 && list[0].q === '本局结果' && list[1].q === '本局评价' && freaks === 0, [`盘口：${list.map((c) => `【${c.tag}】${c.q}`).join('；')}；怪盘出题调用 ${freaks} 次`]);
  await setSubSource(page, '跟随主API');
}

async function nongxian(page) {
  await openNewChat(page, CH.nongxian);
  const t = await answerEntry(page);
  await sleep(1000);
  const s = await statusLine(page);
  const list = await cards(page);
  const m = await marketMeta(page);
  rec('M7', s === '休整副本不开盘。' && list.length === 0 && !Object.keys(m?.books ?? {}).length, [`入场弹窗「${t}」；盘口页「${s}」，盘口 ${list.length} 个，chatMetadata.rlzc_market.books ${Object.keys(m?.books ?? {}).length} 本`]);
}

// ───────────── 入口 ─────────────

async function main() {
  fs.mkdirSync(ui.SHOTS, { recursive: true });
  if (argv.includes('--fresh')) fs.rmSync(ST_DATA, { recursive: true, force: true });
  installExtension({ build: !argv.includes('--no-build') });
  await P.startMock();
  await P.startST();
  await P.mockReset();
  const browser = await ui.launch();
  const page = await ui.openST(browser, ui.DESKTOP);
  const t0 = Date.now();
  try {
    await step([], '准备：连接模拟接口、建角色卡', page, () => setup(page));
    const ev8 = [];
    let corr = null;
    await step(['M8'], '回廊赌坊', page, async () => {
      corr = await corridorCasino(page, ev8);
    });
    let zl = null;
    await step(['M1', 'M2', 'M3', 'M4', 'M9'], '钟楼：开盘、下注、封盘、开奖、删结算、重新生成', page, async () => {
      zl = await zhonglouMain(page, ev8);
    });
    rec('M8', !!corr?.ok && !!zl?.closedCasino && !!zl?.redrawn, ev8, shots.casino ?? []);
    let death = null;
    await step(['M5'], '钟楼死亡结算', page, async () => {
      death = await zhonglouDeath(page);
    });
    if (death) stats.omitMarkets = death.omitOk;
    await step(['M6'], '事件检测关闭入场', page, () => subOffEntry(page));
    await step(['M7'], '农闲入场', page, () => nongxian(page));
    const all = [...(shots.open ?? []), ...(shots.closed ?? []), ...(shots.tickets ?? []), ...(shots.casino ?? [])];
    rec(
      'M10',
      all.length === 8 && !stats.open390?.overflow && !stats.casino390?.overflow,
      [
        `盘口开盘中：${shots.open?.join('、')}；已封盘：${shots.closed?.join('、')}；票夹：${shots.tickets?.join('、')}；赌坊：${shots.casino?.join('、')}`,
        `390px 横向溢出：盘口 ${stats.open390?.overflow ? '有' : '没有'}，赌坊 ${stats.casino390?.overflow ? '有' : '没有'}；低于44px的可点元素：盘口 ${JSON.stringify(stats.open390?.small ?? [])}，赌坊 ${JSON.stringify(stats.casino390?.small ?? [])}`,
      ],
      all,
    );
  } finally {
    const errs = page.consoleLog.filter((l) => ['error', 'pageerror'].includes(l.type));
    const ours = errs.filter((l) => /rlzc|回廊种菜|third-party\/rlzc/.test(l.text));
    stats.console = { errors: errs.length, ours: ours.map((l) => l.text.slice(0, 300)) };
    const data = { at: new Date().toISOString(), minutes: ((Date.now() - t0) / 60000).toFixed(1), items: {}, stats };
    for (const id of Object.keys(TITLES)) data.items[id] = { title: TITLES[id], status: statusOf(id), parts: results[id] ?? [] };
    fs.writeFileSync(path.join(OUT, 'market-results.json'), JSON.stringify(data, null, 2));
    console.log('\n结果：');
    for (const [id, it] of Object.entries(data.items)) console.log(`  ${id.padEnd(4)} ${it.status}  ${it.title}`);
    console.log(JSON.stringify(stats, null, 1));
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
