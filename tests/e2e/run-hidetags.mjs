/**
 * 回廊种菜系统 · 隐藏机器标签与酒馆助手渲染共存的端到端检查（CLAUDE.md 5.5）
 * SillyTavern 1.19.0 + 酒馆助手（渲染状态栏正则里的 HTML）+ 本地模拟接口 + Playwright。
 *
 * 每一步之后检查：每条带 <状态栏> 的AI消息都渲染成了界面（酒馆助手 iframe 内有 .hl），
 * 正文里看不到状态栏原始代码，<积分变动>、<角色登记> 的内容被隐藏，<副本> 不重复显示；
 * 静置期间没有消息被反复渲染。
 *
 *  H1 新生成（流式）  H2 左右划  H3 编辑保存  H4 刷新页面  H5 切换聊天再切回
 *  H6 加载更早的消息  H7 「副本信息显示位置」在正文状态栏 / 扩展面板之间切换
 *
 * 用法：node run-hidetags.mjs [--fresh] [--no-build]
 * 产物（不提交）：out/hidetags-results.json、out/shots/hidetags-*.jpg
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

const CHAR = '回廊引导';
const BODY = ['地点：回廊·休息室', '{{user}}：', '等级：C', '位格：候补', '积分：1,000', '待清算：无', '在场：林默、周遥、路人玩家若干'].join('\n');
const LEDGER_MARK = '捡到硬币HIDEA';
const ROLE_MARK = '死者=HIDEB';
const PANEL_MARK = '副本名：HIDEC';
const reply = (n) =>
  `${CORRIDOR[n % CORRIDOR.length]}\n\n<积分变动>+0｜${LEDGER_MARK}</积分变动>\n<角色登记>${ROLE_MARK}</角色登记>\n\n<状态栏>\n${BODY}\n</状态栏>\n<副本>\n${PANEL_MARK}\n时限：约剩1小时/2小时\n</副本>`;

const results = [];
function rec(id, title, ok, evidence, shots = []) {
  results.push({ id, title, ok, evidence, shots });
  console.log(`  [${id}] ${ok ? '通过' : '不通过'}：${title}`);
  for (const e of evidence) console.log(`      · ${e}`);
}

/** 统计 CHARACTER_MESSAGE_RENDERED / MESSAGE_UPDATED 的发出次数（刷新页面后要重新装） */
async function installCounter(page) {
  await page.evaluate(() => {
    const es = SillyTavern.getContext().eventSource;
    if (es.__rlzcCount) return;
    const orig = es.emit.bind(es);
    window.__rlzcEmits = [];
    es.emit = (ev, ...args) => {
      if (ev === 'character_message_rendered' || ev === 'message_updated') window.__rlzcEmits.push(`${ev}:${args[0]}`);
      return orig(ev, ...args);
    };
    es.__rlzcCount = true;
  });
}

/** 所有带 <状态栏> 的AI消息：DOM 状态 */
async function inspect(page) {
  return page.evaluate(
    ({ marks }) => {
      const c = SillyTavern.getContext().chat;
      const out = [];
      for (let i = 0; i < c.length; i++) {
        if (c[i].is_user || !/<状态栏>[\s\S]*?<\/状态栏>/.test(c[i].mes)) continue;
        const el = document.querySelector(`#chat .mes[mesid="${i}"] .mes_text`);
        if (!el) {
          out.push({ i, shown: false });
          continue;
        }
        const text = el.innerText;
        const frames = el.querySelectorAll('iframe');
        let hl = false;
        for (const f of frames) {
          try {
            if (f.contentDocument?.querySelector('.hl')) hl = true;
          } catch {}
        }
        out.push({
          i,
          shown: true,
          frames: frames.length,
          hl,
          code: /DOCTYPE|<html|<style/.test(text),
          leaked: marks.filter((m) => text.includes(m)),
        });
      }
      return out;
    },
    { marks: [LEDGER_MARK, ROLE_MARK, PANEL_MARK] },
  );
}

/** 等到全部渲染好（最多 20 秒），再静置 3 秒看有没有反复渲染 */
async function verify(page, id, title, extra = []) {
  await ui.closePanel(page).catch(() => {});
  let rows = [];
  const good = (r) => !r.shown || (r.frames === 1 && r.hl && !r.code && r.leaked.length === 0);
  for (let t = 0; t < 40; t++) {
    rows = await inspect(page);
    if (rows.length && rows.every(good)) break;
    await sleep(500);
  }
  const before = await page.evaluate(() => window.__rlzcEmits?.length ?? 0);
  await sleep(3000);
  const after = await page.evaluate(() => window.__rlzcEmits?.length ?? 0);
  const shown = rows.filter((r) => r.shown);
  const ok = shown.length > 0 && rows.every(good) && after === before;
  const shot = await ui.shot(page, `hidetags-${id}`).catch(() => null);
  if (!rows.length) extra = [...extra, `当前聊天 ${await page.evaluate(() => SillyTavern.getContext().getCurrentChatId())}`];
  const ev = [
    ...extra,
    `带状态栏的消息 ${rows.length} 条，显示中 ${shown.length} 条`,
    ...rows.filter((r) => !good(r)).map((r) => `楼层 ${r.i}：iframe ${r.frames}、.hl ${r.hl}、原始代码 ${r.code}、露出 ${JSON.stringify(r.leaked)}`),
    `静置 3 秒内渲染事件 ${after - before} 次`,
  ];
  rec(id, title, ok, ev, shot ? [shot] : []);
}

async function lastAi(page) {
  return page.evaluate(() => {
    const c = SillyTavern.getContext().chat;
    for (let i = c.length - 1; i >= 0; i--) if (!c[i].is_user) return i;
    return -1;
  });
}

async function say(page, text, n) {
  await ui.closePanel(page);
  await P.mockPlan([{ type: 'text', text: reply(n) }]);
  await ui.send(page, text);
  await sleep(800);
}

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

async function setDisplay(page, mode) {
  await ui.tab(page, '设置');
  await ui.host(page).locator('select.rlzc-input').first().selectOption(mode);
  await page.waitForTimeout(300);
  await ui.closePanel(page);
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
    await setDisplay(page, 'statusbar');
    await installCounter(page);

    const steps = [
      ['H1', '新生成的消息：状态栏渲染、机器标签隐藏', async () => {
        await ui.closePanel(page);
        await ui.selectCharacter(page, CHAR);
        await ui.closeRightPanel(page);
        await ui.newChat(page);
        await ui.closeRightPanel(page);
        for (let n = 0; n < 4; n++) await say(page, `第${n + 1}句。`, n);
      }],
      ['H2', '左右划：新的一条与划回的旧一条都正常', async () => {
        await P.mockPlan([{ type: 'text', text: reply(5) }]);
        await ui.swipeRight(page);
        await sleep(800);
        await ui.swipeLeft(page);
      }],
      ['H3', '编辑再保存：正常', async () => {
        const i = await lastAi(page);
        const mes = page.locator(`#chat .mes[mesid="${i}"]`);
        await mes.locator('.extraMesButtonsHint').click().catch(() => {});
        await mes.locator('.mes_edit').click({ force: true });
        await page.waitForTimeout(400);
        await mes.locator('.mes_edit_done').click({ force: true });
        await page.waitForTimeout(800);
      }],
      ['H4a', '刷新页面后从角色列表进入聊天：所有状态栏正常', async () => {
        await ui.reload(page);
        await installCounter(page);
        await ui.selectCharacter(page, CHAR);
        await ui.closeRightPanel(page);
        await sleep(1500);
      }],
      ['H4b', '开着「自动加载上次聊天」刷新（刚登录）：所有状态栏正常', async () => {
        await page.evaluate(() => $('#auto-load-chat-checkbox').prop('checked', true).trigger('input').trigger('change'));
        await page.evaluate(() => SillyTavern.getContext().saveSettingsDebounced());
        await sleep(2000);
        await ui.reload(page);
        await page.waitForFunction(() => SillyTavern.getContext().chat.length > 2, null, { timeout: 30000 });
        await installCounter(page);
        await sleep(1500);
      }],
      ['H5', '切换到别的聊天再切回：正常', async () => {
        const chatFile = await page.evaluate(() => SillyTavern.getContext().getCurrentChatId());
        await ui.newChat(page);
        await ui.closeRightPanel(page);
        await page.evaluate((f) => SillyTavern.getContext().openCharacterChat(f), chatFile);
        await page.waitForFunction((f) => SillyTavern.getContext().getCurrentChatId() === f, chatFile, { timeout: 15000 });
        await sleep(1500);
      }],
      ['H6', '加载更早的消息：正常', async () => {
        await page.evaluate(() => $('#chat_truncation').val(3).trigger('input'));
        await page.evaluate(() => SillyTavern.getContext().reloadCurrentChat());
        await sleep(1500);
        await page.locator('#show_more_messages').click();
        await sleep(1500);
      }],
      ['H7a', '显示位置切到「扩展面板」：状态栏仍渲染，<副本> 不显示', async () => {
        await page.evaluate(() => $('#chat_truncation').val(100).trigger('input'));
        await page.evaluate(() => SillyTavern.getContext().reloadCurrentChat());
        await sleep(1500);
        await setDisplay(page, 'panel');
      }],
      ['H7b', '显示位置切回「正文状态栏」：正常、没有重复', async () => {
        await setDisplay(page, 'statusbar');
      }],
    ];
    for (const [id, title, fn] of steps) {
      console.log(`\n▶ ${id}`);
      try {
        await fn();
        await verify(page, id, title);
      } catch (e) {
        rec(id, `${title}（运行出错）`, false, [e.message.split('\n')[0]]);
        await ui.shot(page, `hidetags-err-${id}`).catch(() => {});
      }
    }
    const emits = await page.evaluate(() => window.__rlzcEmits ?? []);
    const per = {};
    for (const e of emits) per[e] = (per[e] ?? 0) + 1;
    const max = Math.max(0, ...Object.values(per));
    rec('H8', '同一条消息没有被反复渲染', max <= 3, [`刷新后各消息的渲染事件次数：${JSON.stringify(per)}`]);
  } finally {
    const ours = page.consoleLog.filter((l) => ['error', 'pageerror'].includes(l.type) && /rlzc|回廊种菜|third-party\/rlzc/.test(l.text));
    rec('H9', '控制台没有本扩展的报错', ours.length === 0, ours.map((l) => l.text.slice(0, 200)));
    const data = { at: new Date().toISOString(), minutes: ((Date.now() - t0) / 60000).toFixed(1), results };
    fs.writeFileSync(path.join(OUT, 'hidetags-results.json'), JSON.stringify(data, null, 2));
    console.log('\n结果：');
    for (const r of results) console.log(`  ${r.id} ${r.ok ? '通过' : '不通过'}`);
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
