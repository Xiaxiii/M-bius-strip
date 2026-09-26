/**
 * 回廊种菜系统 · 直播与账本的端到端检查（第三期b-第5段）
 * SillyTavern 1.19.0 + 酒馆助手（渲染状态栏正则里的 HTML）+ 本地模拟接口 + Playwright。
 *
 * 用法：node run-live.mjs [--fresh] [--no-build]
 * 产物（不提交）：out/live-results.json、out/shots/live-*.jpg、out/mock-log.jsonl
 */
import fs from 'node:fs';
import path from 'node:path';
import * as ui from './lib/ui.mjs';
import * as P from './lib/procs.mjs';
import { installExtension } from './setup.mjs';
import { OPENING_ZHONGLOU, OPENING_XIYAN, OPENING_YOUXI, CORRIDOR } from './fixtures.mjs';
import { E2E_DIR, OUT, ST_DATA } from './lib/paths.mjs';

const argv = process.argv.slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const { host } = ui;

const CH = { corridor: '回廊引导', zhonglou: '钟楼开场', xiyan: '喜宴开场', youxi: '游戏开场', wuming: '污名开场' };
const OPENING_WUMING = ['聚光灯亮起的时候，你已经站在舞台中央了。', '「副本简报 - 污名」', '「人数：6人」', '「等级：B」', '「时限：三天」', '「简报：别让他们记住你。」'].join('\n');

export const TITLES = {
  L1: '导入状态栏正则后，渲染框能读到主页面的 window.RLZC_LIVE：直播页签出现、弹幕实时更新、回廊中按钮能开播下播',
  L2: '回廊开播 → 聊几轮 → 进钟楼（勾选直播）→ 跑几轮（含一次有人受伤）→ 结算 → 回廊：账本流水、注入、状态栏直播页',
  L3: '喜宴不勾直播：没有直播画面、没有 tip 记账',
  L4: '污名入场不出现勾选框',
  L5: '钟楼死亡结算：打赏被撤回',
  L6: '截图：状态栏直播页桌面与390px（回廊、副本各一套）；设置页「直播」卡',
  L7: '「本地+AI」时弹幕生成调用的平均输入、输出 token',
  L8: '账本一整圈（回廊→钟楼→结算→回廊）：账本页流水、rlzc_ledger 注入、系统页积分；已标记待清算时的注入全文',
  L9: '入场弹窗：新建聊天用喜宴、游戏开场白会弹；已有聊天AI回复带简报会弹；切到别的聊天再切回来仍会弹',
  L10: '设置页「账户校正」：改初始积分、追加一笔、校正等级和位格后，下一轮注入有校正句，AI回复后消失',
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
    const shot = await ui.shot(page, `live-err-${name.replace(/[^\w一-龥]+/g, '_')}`).catch(() => null);
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

const liveGet = (page) => page.evaluate(() => (window.RLZC_LIVE ? JSON.parse(JSON.stringify(window.RLZC_LIVE.get())) : null));
const ledger = (page) =>
  page.evaluate(() =>
    SillyTavern.getContext().chat.flatMap((m, i) => (m.extra?.rlzc?.ledger ?? []).map((e) => ({ ...e, i }))),
  );
const liveRecs = (page) =>
  page.evaluate(() =>
    SillyTavern.getContext()
      .chat.map((m, i) => ({ i, live: m.extra?.rlzc?.live ? JSON.parse(JSON.stringify(m.extra.rlzc.live)) : null }))
      .filter((x) => x.live),
  );
const meta = (page) => page.evaluate(() => JSON.parse(JSON.stringify({ rlzc: SillyTavern.getContext().chatMetadata.rlzc ?? null, live: SillyTavern.getContext().chatMetadata.rlzc_live ?? null, ledger: SillyTavern.getContext().chatMetadata.rlzc_ledger ?? null })));

async function lastAi(page) {
  return page.evaluate(() => {
    const c = SillyTavern.getContext().chat;
    for (let i = c.length - 1; i >= 0; i--) if (!c[i].is_user && !(c[i].is_system && c[i].extra?.type)) return i;
    return -1;
  });
}

function reqText(e) {
  return (e?.request ?? []).map((m) => (typeof m.content === 'string' ? m.content : '')).join('\n');
}

/** 发一条消息，等回复写完；live=true 时再等这一楼的直播数据写上（含 AI 弹幕结束） */
async function say(page, text, plan, { live = false } = {}) {
  await ui.closePanel(page);
  await P.mockPlan([plan]);
  const seq0 = await P.lastSeq();
  await ui.send(page, text);
  const idx = await lastAi(page);
  if (live) {
    await page.waitForFunction((i) => {
      const l = SillyTavern.getContext().chat[i]?.extra?.rlzc?.live;
      return !!l && !l.ai?.pending;
    }, idx, { timeout: 60000 });
  }
  await ui.waitSubIdle(page).catch(() => {});
  await sleep(600);
  const log = await P.mockLog(seq0, true);
  return { idx, log, mains: log.filter((e) => e.caller === 'main'), danmaku: log.filter((e) => e.caller === 'danmaku') };
}

/** 最近一次主AI请求（下一轮生成时发出的那一条） */
function lastMain(r) {
  return reqText(r.mains[r.mains.length - 1]);
}

function injected(text, head) {
  const i = text.indexOf(head);
  if (i < 0) return '';
  return text.slice(i).split('\n')[0];
}

// ───────────── 状态栏渲染框 ─────────────

/** 最后一条消息里的状态栏渲染框 */
function lastFrame(page) {
  return page.frameLocator('#chat .mes.last_mes iframe').first();
}

async function waitFrame(page, timeout = 20000) {
  await page.locator('#chat .mes.last_mes iframe').first().waitFor({ state: 'attached', timeout });
  await lastFrame(page).locator('.hl').first().waitFor({ state: 'attached', timeout });
  await sleep(800);
}

async function frameTabs(page) {
  return lastFrame(page).locator('[data-v]').evaluateAll((els) => els.map((e) => e.getAttribute('data-v')));
}

/** 展开状态栏（点灵动岛）并切到直播页 */
async function openLiveTab(page) {
  const f = lastFrame(page);
  const liveBtn = f.locator('button[data-v="live"]');
  const open = await f.locator('.isl').first().evaluate((el) => el.classList.contains('open'));
  if (!open) {
    await f.locator('.isl > .mini').first().click();
    await sleep(900);
  }
  await liveBtn.click();
  await sleep(700);
}

/** 截状态栏渲染框本身 */
async function shotFrame(page, name) {
  const el = page.locator('#chat .mes.last_mes iframe').first();
  // 测试环境里酒馆助手连不上外网，渲染框停在浏览器默认的 150px 高；截图前按内容撑开（只影响截图）
  await el.evaluate((f) => {
    const h = f.contentDocument?.body?.scrollHeight;
    if (h && f.getBoundingClientRect().height < h) f.style.height = `${h + 4}px`;
  });
  await sleep(300);
  await el.scrollIntoViewIfNeeded();
  await sleep(500);
  return ui.shotEl(el, name);
}

/** 窗口改成 390px 宽再截（渲染框按宽度重排），截完改回 */
async function shotFrame390(page, name) {
  await page.setViewportSize({ width: 390, height: 844 });
  await sleep(1500);
  const f = await shotFrame(page, name);
  await page.setViewportSize({ width: 1280, height: 860 });
  await sleep(800);
  return f;
}

async function feedCount(page) {
  return lastFrame(page).locator('.lv-feed > *').count();
}

// ───────────── 设置 ─────────────

async function settingsTab(page) {
  await ui.tab(page, '设置');
  await page.waitForTimeout(250);
}

async function expandCard(page, cls, title) {
  const card = cls ? host(page).locator(cls) : host(page).locator('.rlzc-card.rlzc-collapsible', { has: page.locator(`h4:text-is("${title}")`) });
  const head = card.locator('.rlzc-collapse-head').first();
  if ((await head.getAttribute('aria-expanded')) !== 'true') await head.click();
  await page.waitForTimeout(250);
  return card;
}

async function setupSettings(page) {
  await settingsTab(page);
  const sub = await expandCard(page, '.rlzc-subapi');
  await sub.locator('.rlzc-segsrc button', { hasText: '跟随主API' }).click();
  await page.waitForTimeout(300);
  const live = await expandCard(page, '.rlzc-live-card');
  await live.locator('.rlzc-segsrc button', { hasText: '本地+AI' }).click();
  await page.waitForTimeout(300);
  return live;
}

// ───────────── 入场 ─────────────

async function importRegex(page) {
  await ui.openDrawer(page, 'extensions-settings-button');
  const drawer = page.locator('.regex_settings .inline-drawer-toggle').first();
  await drawer.click();
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
  return page.evaluate(() => (SillyTavern.getContext().extensionSettings.regex ?? []).map((r) => r.scriptName));
}

/** 等入场弹窗；tick：勾选框要设成的状态（undefined 不动）。返回弹窗文字与是否有勾选框 */
async function answerEntry(page, { tick, answer = 'ok', shot } = {}) {
  const dlg = await ui.popup(page, '检测到进入', 20000);
  const text = (await dlg.innerText()).trim();
  const box = dlg.locator('#rlzc-live-optin');
  const hasBox = (await box.count()) > 0;
  const defaultChecked = hasBox ? await box.isChecked() : null;
  if (hasBox && tick !== undefined && (await box.isChecked()) !== tick) await box.setChecked(tick);
  const shotName = shot ? await ui.shotEl(dlg, shot) : null;
  await dlg.locator(answer === 'ok' ? '.popup-button-ok' : '.popup-button-cancel').click();
  await dlg.waitFor({ state: 'hidden' }).catch(() => {});
  await page.waitForTimeout(800);
  return { text: text.split('\n')[0], hasBox, defaultChecked, shot: shotName };
}

async function openChatOf(page, character, { newChat = false } = {}) {
  await ui.closePanel(page);
  await ui.selectCharacter(page, character);
  if (newChat) {
    // 这张卡上一次的聊天（开场白带入场信号）会先弹入场确认：那是别的聊天，点取消后再开新聊天
    await sleep(1500);
    const old = page.locator('dialog.popup[open]').filter({ hasText: '检测到进入' });
    if (await old.count()) {
      await old.locator('.popup-button-cancel').click();
      await old.waitFor({ state: 'hidden' }).catch(() => {});
    }
    await ui.closeRightPanel(page);
    await ui.newChat(page);
  }
  await ui.closeRightPanel(page);
}

async function setup(page) {
  await ui.connectMainApi(page, { stream: true });
  const names = await page.evaluate(() => SillyTavern.getContext().characters.map((c) => c.name));
  const cards = [
    [CH.corridor, CORRIDOR.slice(0, 2).join('\n\n')],
    [CH.zhonglou, OPENING_ZHONGLOU],
    [CH.xiyan, OPENING_XIYAN],
    [CH.youxi, OPENING_YOUXI],
    [CH.wuming, OPENING_WUMING],
  ];
  for (const [name, greet] of cards) if (!names.includes(name)) await ui.createCharacter(page, name, greet, '端到端测试用角色卡');
}

async function installHelper(page) {
  const r = await page.evaluate(async () => {
    const res = await fetch('/api/extensions/install', {
      method: 'POST',
      headers: SillyTavern.getContext().getRequestHeaders(),
      body: JSON.stringify({ url: 'https://github.com/N0VI028/JS-Slash-Runner', global: false }),
    });
    return { status: res.status, text: (await res.text()).slice(0, 200) };
  });
  return r;
}

// ───────────── 检查 ─────────────

const shots = {};
const stats = {};

async function corridorAndZhonglou(page) {
  // 回廊：新聊天，发一轮带状态栏的回复，状态栏渲染出来
  await openChatOf(page, CH.corridor, { newChat: true });
  await say(page, '去休息室找个角落坐一会儿。', { type: 'corridor', status: true });
  await waitFrame(page);
  const tabs0 = await frameTabs(page);
  const hasLiveTab = tabs0.includes('live');
  await openLiveTab(page);
  const btnText0 = (await lastFrame(page).locator('[data-live="toggle"], .lv-btn').first().innerText().catch(() => '')).trim();
  // 状态栏里的「开播」按钮
  await lastFrame(page).locator('[data-live="toggle"]').click();
  await sleep(1500);
  const afterOn = await liveGet(page);
  const btnText1 = (await lastFrame(page).locator('.lv-btn').first().innerText().catch(() => '')).trim();
  const ev1 = [
    `导入正则后第 1 条回廊回复渲染出状态栏，页签：${tabs0.join('、')}；直播页签${hasLiveTab ? '出现' : '没有出现'}`,
    `直播页按钮「${btnText0}」→ 点击后 RLZC_LIVE.get().on = ${afterOn?.on}，按钮变为「${btnText1}」，feed：${afterOn?.feed.map((f) => f.text || f.name).join('／')}`,
  ];

  // 聊两轮：弹幕逐条放出（在同一个渲染框里数条数）
  const r1 = await say(page, '看看排行榜上有没有认识的名字。', { type: 'corridor', status: true });
  await waitFrame(page);
  await openLiveTab(page);
  const c0 = await feedCount(page);
  await sleep(6000);
  const c1 = await feedCount(page);
  const recs1 = await liveRecs(page);
  const corrRec = recs1.find((x) => x.i === r1.idx)?.live;
  ev1.push(`回廊第2轮：这一楼有 ${corrRec?.feed.length ?? 0} 条（弹幕+打赏），渲染框里 6 秒内从 ${c0} 条增加到 ${c1} 条（逐条放出，没有重新渲染）`);
  shots.corrDesktop = await shotFrame(page, 'live-corridor-desktop');
  shots.corr390 = await shotFrame390(page, 'live-corridor-390');

  // 下播、再开播（按钮能开能关）
  await openLiveTab(page);
  await lastFrame(page).locator('[data-live="toggle"]').click();
  await sleep(800);
  const off = await liveGet(page);
  await lastFrame(page).locator('[data-live="toggle"]').click();
  await sleep(800);
  const on2 = await liveGet(page);
  ev1.push(`渲染框里点「下播」→ on=${off?.on}，feed 最后一条「${off?.feed.slice(-1)[0]?.text}」；再点「开播」→ on=${on2?.on}（新的一场）`);
  rec('L1', hasLiveTab && afterOn?.on === true && c1 > c0 && off?.on === false && on2?.on === true, ev1, [shots.corrDesktop, shots.corr390]);

  // L2 / L8：回廊再聊一轮 → AI 回复带钟楼简报（已有聊天里弹入场）→ 勾直播
  const r2 = await say(page, '问系统侍者今天有什么新副本。', { type: 'corridor', status: true }, { live: true });
  const ledgerBeforeEntry = await ledger(page);
  const corridorTips = ledgerBeforeEntry.filter((e) => e.type === 'tip');
  const corrInject = injected(lastMain(r2), '［账户·仅供AI］');
  await P.mockPlan([{ type: 'text', text: OPENING_ZHONGLOU }]);
  await ui.closePanel(page);
  await ui.send(page, '去钟楼。', { wait: false });
  const entry = await answerEntry(page, { tick: true, shot: 'live-entry-popup' });
  await ui.waitIdle(page);
  const metaAfterEntry = await meta(page);
  const viewAfterEntry = await liveGet(page);
  const ev2 = [
    `回廊直播 ${corridorTips.length} 轮有打赏，账本 tip 流水：${corridorTips.map((e) => `${e.source} ${e.delta > 0 ? '+' : ''}${e.delta}`).join('；')}`,
    `回廊里的账户注入：${corrInject}（没有「本局直播打赏」句）`,
    `已有聊天里 AI 回复带钟楼简报 → 弹窗「${entry.text}」，勾选框${entry.hasBox ? `出现（默认${entry.defaultChecked ? '勾' : '不勾'}）` : '没有出现'}，勾上后点确定`,
    `入场后：会话 live=${metaAfterEntry.rlzc?.live}，回廊直播 on=${metaAfterEntry.live?.corridor?.on}，系统消息「${metaAfterEntry.live?.sys?.map((s) => s.text).join('／')}」；RLZC_LIVE：scope=${viewAfterEntry?.scope} on=${viewAfterEntry?.on} canToggle=${viewAfterEntry?.canToggle}`,
  ];
  const l9 = [`已有聊天里AI回复带简报：弹窗「${entry.text}」`];

  // 钟楼跑3轮：第2轮平静、第3轮有人受伤、第4轮平静
  const rounds = [];
  rounds.push(await say(page, '我先去一楼大厅看看石壁上的守则。', { type: 'story', fullStatus: true }, { live: true }));
  rounds.push(await say(page, '跟着林默上楼，看他去哪。', { type: 'story', fullStatus: true, extra: '林默脚下一滑，从台阶上摔下去，额头流血，重伤昏迷。' }, { live: true }));
  await waitFrame(page);
  await openLiveTab(page);
  await sleep(9000);
  shots.instDesktop = await shotFrame(page, 'live-instance-desktop');
  shots.inst390 = await shotFrame390(page, 'live-instance-390');
  rounds.push(await say(page, '回房间把楼层图摊开，对照今天看到的东西。', { type: 'story', fullStatus: true }, { live: true }));
  const recsInst = (await liveRecs(page)).filter((x) => x.live.scope === 'instance');
  const hurtRec = recsInst.find((x) => x.i === rounds[1].idx)?.live;
  const instTipSum = recsInst.reduce((s, x) => s + x.live.tipNet, 0);
  // 第4轮（最后一轮）发出的主AI请求里：账户注入带「其中本局直播打赏X分」
  const instInject = injected(lastMain(rounds[2]), '［账户·仅供AI］');
  const sumBeforeLast = recsInst.filter((x) => x.i < rounds[2].idx).reduce((s, x) => s + x.live.tipNet, 0);
  ev2.push(`钟楼 3 轮直播数据：${recsInst.map((x) => `#${x.i} 精彩度${x.live.hype}${x.live.hurt ? '（受伤）' : ''} 热度${x.live.heat} 人数${x.live.viewers} 打赏${x.live.tipNet}${x.live.ai ? ` AI弹幕${x.live.ai.ok ? x.live.ai.count + '条' : '失败'}` : ''}`).join('；')}`);
  ev2.push(`受伤那一轮：hurt=${hurtRec?.hurt}，精彩度 ${hurtRec?.hype}（事件检测给的 hype），AI 弹幕 ${hurtRec?.ai ? (hurtRec.ai.ok ? `生成 ${hurtRec.ai.count} 条` : `失败：${hurtRec.ai.error}`) : '未生成'}`);
  ev2.push(`第4轮生成时的账户注入：${instInject}（本局此前到账 ${sumBeforeLast}）`);

  // 结算（通关，A评）→ 回廊
  const settle = await say(page, '天亮了。', { type: 'story', fullStatus: true, scoreDelta: 51000, extra: '<副本结算>结果=通关｜评价=A</副本结算>' }, { live: true });
  const afterSettle = await liveGet(page);
  const back = await say(page, '回到回廊，找个地方坐下。', { type: 'corridor', status: true });
  const corrAfter = injected(lastMain(back), '［账户·仅供AI］');
  const allLedger = await ledger(page);
  const settleEntry = allLedger.find((e) => e.type === 'settle');
  // 账本页与系统页
  await ui.tab(page, '账本');
  const ledgerText = await host(page).locator('.rlzc-ledger').innerText();
  shots.ledger = await ui.shotEl(host(page).locator('.rlzc-panel'), 'ledger-normal-desktop');
  await page.setViewportSize({ width: 390, height: 844 });
  await sleep(1200);
  shots.ledger390 = await ui.shotEl(host(page).locator('.rlzc-panel'), 'ledger-normal-390');
  await page.setViewportSize({ width: 1280, height: 860 });
  await sleep(800);
  await ui.tab(page, '系统');
  const sysText = await host(page).locator('.rlzc-system').innerText();
  const init = 1000;
  const expectBalance = init + allLedger.reduce((s, e) => s + e.delta, 0);
  const heroNum = /当前积分\s*\n\s*([\d,，-]+)/.exec(ledgerText)?.[1]?.replace(/[,，]/g, '');
  const sysNum = /积分\s*\+?(-?\d[\d,]*)/.exec(sysText)?.[1]?.replace(/,/g, '');
  ev2.push(`结算楼：settle 流水「${settleEntry?.source} +${settleEntry?.delta}」；直播 RLZC_LIVE：on=${afterSettle?.on} scope=${afterSettle?.scope}，feed 最后一条「${afterSettle?.feed.slice(-1)[0]?.text}」`);
  ev2.push(`回到回廊后的账户注入：${corrAfter}`);
  const tipLines = allLedger.filter((e) => e.type === 'tip');
  const l8 = [
    `全部流水 ${allLedger.length} 笔：${allLedger.map((e) => `#${e.i} ${e.type} ${e.delta > 0 ? '+' : ''}${e.delta} ${e.source}`).join('；')}`,
    `按流水手算余额 ${expectBalance}；账本页「当前积分」${heroNum}；系统页「积分 ${sysNum}」`,
    `回到回廊后注入：${corrAfter}`,
  ];
  const noMismatch = await page.evaluate(() => SillyTavern.getContext().chat.every((m) => !m.extra?.rlzc?.ledgerMismatch));
  l8.push(`状态栏积分核对：${noMismatch ? '每楼都对得上（调试页没有黄色警告）' : '有楼层对不上'}`);
  // 打赏笔数是随机的（期望笔数 = 精彩度 ÷ 40）：回廊和副本里各至少有一轮打赏、每笔格式正确即可
  const instIdx = new Set(recsInst.map((x) => x.i));
  const allRecs = await liveRecs(page);
  const perRoundOk = allRecs.every((x) => tipLines.filter((e) => e.i === x.i).reduce((t, e) => t + e.delta, 0) === x.live.tipNet - (x.live.revoke ?? 0));
  ev2.push(`每一轮直播的打赏到账与这一楼的 tip 流水${perRoundOk ? '逐楼一致' : '有不一致'}（${allRecs.map((x) => `#${x.i}:${x.live.tipNet}`).join('，')}）`);
  const tipsOk = perRoundOk && tipLines.some((e) => instIdx.has(e.i)) && tipLines.every((e) => /^直播打赏(\d+×60%|\d笔·共\d+×60%)$/.test(e.source));
  const injOk = instInject.includes(`其中本局直播打赏${sumBeforeLast}分，副本内不可使用，离开副本后可用。`) && !corrInject.includes('本局直播打赏') && !corrAfter.includes('本局直播打赏');
  rec('L2', entry.hasBox && metaAfterEntry.rlzc?.live === true && metaAfterEntry.live?.corridor?.on === false && hurtRec?.hurt === true && tipsOk && injOk && !!settleEntry && afterSettle?.on === false, ev2, [shots.instDesktop, shots.ledger]);
  shots.l8 = [shots.ledger, shots.ledger390];
  rec('L8', String(expectBalance) === heroNum && String(expectBalance) === sysNum && noMismatch && !!settleEntry && corrAfter.includes(`积分：${expectBalance - (allLedger.filter((e) => e.i >= back.idx).reduce((s, e) => s + e.delta, 0))}`), l8, shots.l8);
  stats.instTipSum = instTipSum;
  return l9;
}

async function xiyanNoLive(page, l9) {
  await openChatOf(page, CH.xiyan, { newChat: true });
  const e = await answerEntry(page, { tick: false });
  l9.push(`新建聊天用喜宴开场白：弹窗「${e.text}」`);
  await say(page, '找个位置坐下，先不动筷子。', { type: 'story', fullStatus: true });
  await say(page, '问旁边的人新娘在哪。', { type: 'story', fullStatus: true });
  const v = await liveGet(page);
  const tips = (await ledger(page)).filter((x) => x.type === 'tip');
  const recs = await liveRecs(page);
  let frameLive = '';
  try {
    await waitFrame(page, 8000);
    const tabs = await frameTabs(page);
    if (tabs.includes('live')) {
      await openLiveTab(page);
      frameLive = (await lastFrame(page).locator('.lv-btn').first().innerText().catch(() => '')).trim();
    }
    frameLive = `页签 ${tabs.join('、')}${frameLive ? `，直播页按钮「${frameLive}」` : ''}`;
  } catch {
    frameLive = '（没有渲染出状态栏）';
  }
  const shot = await shotFrame(page, 'live-xiyan-off').catch(() => null);
  rec(
    'L3',
    e.hasBox && v?.on === false && v?.feed.length === 0 && v?.viewers === 0 && tips.length === 0 && recs.length === 0,
    [
      `入场弹窗勾选框${e.hasBox ? `出现，默认${e.defaultChecked ? '勾（沿用上次）' : '不勾'}` : '没有'}，取消勾选后确定`,
      `跑2轮后 RLZC_LIVE：on=${v?.on} viewers=${v?.viewers} feed=${v?.feed.length} 条；每楼直播数据 ${recs.length} 楼；tip 流水 ${tips.length} 笔`,
      `状态栏渲染框：${frameLive}`,
    ],
    [shot],
  );
}

async function wumingNoBox(page) {
  await openChatOf(page, CH.wuming, { newChat: true });
  const e = await answerEntry(page, { shot: 'live-wuming-popup' });
  const m = await meta(page);
  rec('L4', !e.hasBox && m.rlzc?.packId === 'wuming' && !m.rlzc?.live, [`弹窗「${e.text}」，勾选框${e.hasBox ? '出现了' : '没有出现'}；进入后会话 packId=${m.rlzc?.packId} live=${m.rlzc?.live ?? '无'}`], [e.shot]);
}

async function zhonglouDeath(page) {
  await openChatOf(page, CH.zhonglou, { newChat: true });
  const e = await answerEntry(page, { tick: true });
  await say(page, '我先去一楼大厅看看石壁上的守则。', { type: 'story', fullStatus: true }, { live: true });
  await say(page, '去四楼机房看看曲柄。', { type: 'story', fullStatus: true }, { live: true });
  const before = (await ledger(page)).filter((x) => x.type === 'tip');
  const earned = before.reduce((s, x) => s + x.delta, 0);
  const r = await say(page, '往钟面层走。', { type: 'story', fullStatus: true, extra: '钟摆落下来的时候你没来得及躲开。<副本结算>结果=死亡｜评价=无</副本结算>' }, { live: true });
  const tips = (await ledger(page)).filter((x) => x.type === 'tip');
  const revoke = tips.find((x) => x.source === '本局直播打赏撤回');
  const lastRec = (await liveRecs(page)).find((x) => x.i === r.idx)?.live;
  // 撤回那条系统消息排在这一轮 feed 的最后，按节奏放出后画面上的本局打赏才归零
  const tw = Date.now();
  await page.waitForFunction(() => window.RLZC_LIVE.get().tipTotal === 0, null, { timeout: 60000 }).catch(() => {});
  const waited = Math.round((Date.now() - tw) / 1000);
  const v = await liveGet(page);
  await ui.tab(page, '账本');
  const shot = await ui.shot(page, 'live-death-ledger');
  const total = tips.filter((x) => x.source !== '本局直播打赏撤回').reduce((s, x) => s + x.delta, 0);
  rec(
    'L5',
    e.hasBox && !!revoke && revoke.delta === -total && total > 0 && v?.tipTotal === 0,
    [
      `死亡结算前本局打赏到账 ${earned}；结算那一楼又到账 ${lastRec?.tipNet ?? 0}`,
      `撤回流水：${revoke ? `「${revoke.source}」${revoke.delta}` : '没有'}（本局打赏合计 ${total}）`,
      `结算楼的直播系统消息：${lastRec?.feed.filter((f) => f.t === 'sys').map((f) => f.text).join('／')}；这一轮放完（约 ${waited} 秒）后 RLZC_LIVE.tipTotal=${v?.tipTotal}`,
    ],
    [shot],
  );
}

async function entryPopups(page, l9) {
  // 游戏：新建聊天 → 弹窗；弹窗开着时切到别的聊天（关掉弹窗）→ 切回来仍会弹
  await openChatOf(page, CH.youxi, { newChat: true });
  const dlg = await ui.popup(page, '检测到进入', 20000);
  const first = (await dlg.innerText()).split('\n')[0].trim();
  l9.push(`新建聊天用游戏开场白：弹窗「${first}」`);
  const youxiChat = await page.evaluate(() => SillyTavern.getContext().getCurrentChatId());
  // 弹窗开着时用 ST 自己的方法切到回廊引导（和玩家在别处点角色卡一样会触发 CHAT_CHANGED）
  await page.evaluate(async (name) => {
    const c = SillyTavern.getContext();
    const id = c.characters.findIndex((x) => x.name === name);
    await c.selectCharacterById(id);
  }, CH.corridor);
  await page.waitForFunction((id) => SillyTavern.getContext().getCurrentChatId() !== id, youxiChat, { timeout: 15000 });
  await dlg.locator('.popup-button-cancel').click().catch(() => {});
  await page.waitForTimeout(800);
  const corridorMeta = await meta(page);
  await openChatOf(page, CH.youxi);
  const again = await answerEntry(page, { tick: false });
  const m = await meta(page);
  l9.push(`弹窗开着时切到回廊引导的聊天（关掉弹窗，回廊聊天里没有记下拒绝：${JSON.stringify(corridorMeta.rlzc?.declined ?? [])}），再切回游戏的聊天：又弹「${again.text}」，确定后 packId=${m.rlzc?.packId}`);
  return again.text.includes('游戏') && m.rlzc?.packId === 'youxi' && !(corridorMeta.rlzc?.declined ?? []).length;
}

async function accountFix(page) {
  await openChatOf(page, CH.corridor, { newChat: true });
  await settingsTab(page);
  const card = await expandCard(page, null, '账户校正');
  const init = card.locator('input[type="number"]').first();
  await init.fill('100');
  await card.locator('button', { hasText: '保存' }).click();
  await page.waitForTimeout(300);
  const amt = card.locator('input[type="number"]').nth(1);
  await amt.fill('-10');
  await card.locator('input:not([type="number"])').first().fill('测试扣款');
  await card.locator('button', { hasText: '追加' }).click();
  await page.waitForTimeout(400);
  const cardShot = await ui.shotEl(card, 'live-account-fix');
  // 已标记待清算：下一轮注入全文
  const r1 = await say(page, '去休息室找个角落坐一会儿。', { type: 'corridor', status: true });
  const pendingText = injected(lastMain(r1), '［账户·仅供AI］');
  // 校正等级 C、位格 候补
  await settingsTab(page);
  const card2 = await expandCard(page, null, '账户校正');
  await card2.locator('.rlzc-seg', { hasText: 'C' }).click();
  await card2.locator('input[placeholder*="位格"]').fill('候补');
  await card2.locator('button:text-is("校正")').click();
  await page.waitForTimeout(500);
  const fixMeta = (await meta(page)).ledger?.fix;
  const r2 = await say(page, '看看排行榜上有没有认识的名字。', { type: 'corridor', status: true });
  const withFix = lastMain(r2);
  const fixLine = /本轮状态栏里.{0,12}的等级写C、位格写候补，之后按剧情照常。/.exec(withFix)?.[0] ?? '';
  const statusAfter = await page.evaluate((i) => /<状态栏>[\s\S]*?<\/状态栏>/.exec(SillyTavern.getContext().chat[i].mes)?.[0] ?? '', r2.idx);
  const fixAfter = (await meta(page)).ledger?.fix;
  const r3 = await say(page, '问系统侍者今天有什么新副本。', { type: 'corridor', status: true });
  const after = lastMain(r3);
  const pendingC = injected(after, '［账户·仅供AI］');
  await ui.tab(page, '账本');
  const ledgerText = await host(page).locator('.rlzc-ledger').innerText();
  shots.ledgerPending = await ui.shotEl(host(page).locator('.rlzc-panel'), 'ledger-pending-desktop');
  await page.setViewportSize({ width: 390, height: 844 });
  await sleep(1200);
  shots.ledgerPending390 = await ui.shotEl(host(page).locator('.rlzc-panel'), 'ledger-pending-390');
  await page.setViewportSize({ width: 1280, height: 860 });
  await sleep(800);
  const expectPending = '［账户·仅供AI］积分：90　待清算：已标记，距斩杀线210分（D级斩杀线300）。商城价格上浮30%，下一场副本为清算副本。';
  const ok10 = !!fixMeta && !!fixLine && /等级：C/.test(statusAfter) && /位格：候补/.test(statusAfter) && !fixAfter && !/本轮状态栏里/.test(after) && /手动：测试扣款/.test(ledgerText);
  rec('L10', ok10, [
    `初始积分改为 100、追加一笔 −10（备注「测试扣款」）后账本页流水：${ledgerText.split('\n').filter((l) => /手动|测试/.test(l)).join('／')}`,
    `点「校正」后 chatMetadata.rlzc_ledger.fix = ${JSON.stringify(fixMeta)}`,
    `下一轮主AI请求里的校正句：「${fixLine}」；AI 回复的状态栏：${statusAfter.replace(/\n/g, '⏎').slice(0, 120)}`,
    `回复后 fix 字段：${fixAfter ? JSON.stringify(fixAfter) : '已清除'}；再下一轮请求里${/本轮状态栏里/.test(after) ? '仍有' : '没有'}校正句`,
    `之后按状态栏的 C 级算斩杀线：${pendingC}`,
  ], [cardShot]);
  rec('L8', pendingText === expectPending && /距线/.test(ledgerText), [`已标记待清算时（初始100、−10、D级）的注入全文：${pendingText}`, `应为：${expectPending}`, `账本页待清算一栏：${/距线\s*[\d,]+/.exec(ledgerText)?.[0] ?? '没有'}`], [shots.ledgerPending, shots.ledgerPending390]);
}

async function tokenStats() {
  const all = await P.mockLog(0, false);
  const dm = all.filter((e) => e.caller === 'danmaku' && e.status !== 500);
  const avg = (k, t) => (dm.length ? Math.round(dm.reduce((s, e) => s + (e[k]?.[t] ?? 0), 0) / dm.length) : 0);
  stats.danmaku = { calls: dm.length, inO200k: avg('inTok', 'o200k'), outO200k: avg('outTok', 'o200k'), inCl100k: avg('inTok', 'cl100k'), outCl100k: avg('outTok', 'cl100k') };
  const subs = all.filter((e) => e.caller === 'sub');
  stats.sub = { calls: subs.length, inO200k: subs.length ? Math.round(subs.reduce((s, e) => s + e.inTok.o200k, 0) / subs.length) : 0 };
  rec('L7', dm.length > 0, [
    `AI 弹幕调用 ${dm.length} 次（成功返回的），平均输入 ${stats.danmaku.inO200k} token、输出 ${stats.danmaku.outO200k} token（o200k 分词）；cl100k 分词为 ${stats.danmaku.inCl100k} / ${stats.danmaku.outCl100k}`,
    `对照：事件检测调用 ${stats.sub.calls} 次，平均输入 ${stats.sub.inO200k} token`,
  ]);
}

async function danmakuFailure(page) {
  // AI 弹幕失败：重试1次仍失败 → 不弹窗，这一轮用本地池，调试页记原因
  await openChatOf(page, CH.corridor, { newChat: true });
  await page.evaluate(() => window.RLZC_LIVE.toggle());
  await P.mockControl({ danmaku: { mode: 'fail', count: 2 } });
  await say(page, '去休息室找个角落坐一会儿。', { type: 'corridor', status: true }, { live: true });
  await say(page, '看看排行榜。', { type: 'corridor', status: true }, { live: true });
  const r = await say(page, '问问侍者。', { type: 'corridor', status: true }, { live: true });
  const recs = await liveRecs(page);
  const failed = recs.find((x) => x.live.ai && !x.live.ai.ok);
  const popups = await page.locator('dialog.popup[open]').count();
  await ui.tab(page, '设置');
  const debugOn = host(page).locator('.rlzc-settings label.rlzc-check', { hasText: '调试模式' }).locator('input');
  if (!(await debugOn.isChecked())) await debugOn.click();
  await ui.tab(page, '调试');
  const det = host(page).locator('.rlzc-debug details', { hasText: '直播（每楼' }).first();
  await det.locator('summary').click();
  await page.waitForTimeout(300);
  const shot = await ui.shotEl(det, 'live-debug-column');
  const rows = await det.locator('tbody tr').allInnerTexts();
  return { ok: !!failed && failed.live.feed.some((f) => f.t === 'msg') && popups === 0, ev: [`第3轮 AI 弹幕调用两次都返回 500：这一楼 ai=${JSON.stringify(failed?.live.ai)}，本地弹幕 ${failed?.live.feed.filter((f) => f.t === 'msg').length} 条，界面上没有弹窗`, `调试页「直播」栏：${rows.slice(0, 3).map((t) => t.replace(/\s+/g, ' ')).join('／')}`], shot, idx: r.idx };
}

async function settingsCardShot(page) {
  await settingsTab(page);
  const card = await expandCard(page, '.rlzc-live-card');
  await page.waitForTimeout(300);
  const d = await ui.shotEl(card, 'live-settings-card-desktop');
  await page.setViewportSize({ width: 390, height: 844 });
  await sleep(1000);
  const m = await ui.shotEl(card, 'live-settings-card-390');
  const overflow = await page.evaluate(() => {
    const body = document.querySelector('#rlzc-host').shadowRoot.querySelector('.rlzc-body');
    return body ? body.scrollWidth > body.clientWidth + 1 : null;
  });
  const hits = await card.evaluate((el) =>
    [...el.querySelectorAll('button, input')].map((b) => {
      const r = b.getBoundingClientRect();
      return `${(b.textContent || b.getAttribute('aria-label') || b.type || '').trim().slice(0, 6) || b.tagName}:${Math.round(r.height)}`;
    }),
  );
  await page.setViewportSize({ width: 1280, height: 860 });
  return { shots: [d, m], ev: `390px 下设置页横向溢出：${overflow ? '有' : '没有'}；卡内可点元素高度：${hits.join('、')}` };
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
    await step([], '准备：连接模拟接口、建角色卡、装酒馆助手、导入状态栏正则', page, async () => {
      await setup(page);
      const helper = await installHelper(page);
      console.log('  酒馆助手安装：', helper.status, helper.text.slice(0, 80));
      await ui.reload(page);
      await sleep(3000);
      await ui.connectMainApi(page, { stream: true });
      const scripts = await importRegex(page);
      console.log('  正则：', scripts.join('、'));
      stats.setup = { helper: helper.status, regex: scripts };
      await setupSettings(page);
    });
    let l9 = [];
    await step(['L1', 'L2', 'L8', 'L6'], '回廊直播 → 钟楼（勾直播）→ 结算 → 回廊', page, async () => {
      l9 = await corridorAndZhonglou(page);
    });
    await step(['L3'], '喜宴不勾直播', page, () => xiyanNoLive(page, l9));
    await step(['L4'], '污名入场', page, () => wumingNoBox(page));
    await step(['L5'], '钟楼死亡结算', page, () => zhonglouDeath(page));
    let reentry = false;
    await step(['L9'], '入场弹窗', page, async () => {
      reentry = await entryPopups(page, l9);
    });
    rec('L9', l9.length >= 4 && reentry, l9);
    await step(['L10', 'L8'], '账户校正', page, () => accountFix(page));
    let fail = null;
    await step([], 'AI 弹幕失败', page, async () => {
      fail = await danmakuFailure(page);
    });
    await step(['L6'], '设置页直播卡截图', page, async () => {
      const s = await settingsCardShot(page);
      const all = [shots.corrDesktop, shots.corr390, shots.instDesktop, shots.inst390, ...s.shots];
      rec('L6', all.every(Boolean), [`状态栏直播页：回廊 ${shots.corrDesktop}、${shots.corr390}；副本 ${shots.instDesktop}、${shots.inst390}`, `设置页「直播」卡：${s.shots.join('、')}`, s.ev], all);
    });
    await step(['L7'], 'token 统计', page, () => tokenStats());
    if (fail) stats.danmakuFailure = fail;
  } finally {
    const errs = page.consoleLog.filter((l) => ['error', 'pageerror'].includes(l.type));
    const ours = errs.filter((l) => /rlzc|回廊种菜|third-party\/rlzc/.test(l.text));
    stats.console = { errors: errs.length, ours: ours.map((l) => l.text.slice(0, 300)) };
    const data = { at: new Date().toISOString(), minutes: ((Date.now() - t0) / 60000).toFixed(1), items: {}, stats };
    for (const id of Object.keys(TITLES)) data.items[id] = { title: TITLES[id], status: statusOf(id), parts: results[id] ?? [] };
    fs.writeFileSync(path.join(OUT, 'live-results.json'), JSON.stringify(data, null, 2));
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
