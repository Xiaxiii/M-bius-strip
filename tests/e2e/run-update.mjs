/**
 * 回廊种菜系统 · 更新提醒弹窗的端到端检查
 * 用工作目录里的本地仓库代替 GitHub：装好扩展后往本地仓库再提交一次，ST 检查更新时就是「有新版本」。
 *
 *  U1 有新版本：打开酒馆后弹窗，只有一句语录，版本号是当前安装的；扩展设置里的状态小字是同一句
 *  U2 点「稍后」后刷新：还会弹
 *  U3 点「立即更新」：更新成功、提示刷新；刷新后已是最新，不再弹窗
 *  U4 不是用仓库地址安装：不弹窗
 *  以上都没有本扩展的控制台报错
 *
 * 用法：node run-update.mjs [--no-build]
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import * as ui from './lib/ui.mjs';
import * as P from './lib/procs.mjs';
import { installExtension } from './setup.mjs';
import { EXT_DIR, OUT, WORK, REPO_ROOT } from './lib/paths.mjs';

const argv = process.argv.slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const manifest = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, 'manifest.json'), 'utf8'));
const src = fs.readFileSync(path.join(REPO_ROOT, 'src/ui/quotes.ts'), 'utf8');
const QUOTES = [...src.matchAll(/^\s+'([^']*\{版本\}[^']*)',$/gm)].map((m) => m[1].replace('{版本}', manifest.version));

const results = [];
function rec(id, title, ok, evidence) {
  results.push({ id, title, ok, evidence });
  console.log(`  [${id}] ${ok ? '通过' : '不通过'}：${title}`);
  for (const e of evidence) console.log(`      · ${e}`);
}

const origin = path.join(WORK, 'rlzc-origin');
function bumpOrigin() {
  fs.appendFileSync(path.join(origin, 'dist', 'bump.txt'), `${Date.now()}\n`);
  execSync('git add -A && git -c user.name=e2e -c user.email=e2e@example.invalid commit -q -m bump', { cwd: origin });
}

/** 等更新提醒弹窗（最多 12 秒），返回弹窗文字或 null */
async function waitPopup(page) {
  const dlg = page.locator('dialog.popup[open]').filter({ hasText: '立即更新' });
  try {
    await dlg.first().waitFor({ state: 'visible', timeout: 12000 });
    return dlg.first();
  } catch {
    return null;
  }
}

async function statusLine(page) {
  return page.evaluate(() => document.querySelector('#rlzc-settings-drawer .rlzc-update-status')?.textContent ?? '');
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  installExtension({ build: !argv.includes('--no-build') });
  bumpOrigin();
  await P.startMock();
  await P.startST();
  const browser = await ui.launch();
  const page = await ui.openST(browser, process.env.E2E_MOBILE ? ui.MOBILE : ui.DESKTOP);
  try {
    // U1
    let dlg = await waitPopup(page);
    let text = dlg ? (await dlg.locator('.popup-content').innerText()).trim() : '';
    const quote = QUOTES.find((q) => text.includes(q));
    const status = await statusLine(page);
    if (dlg) await ui.shotEl(dlg, 'update-popup').catch(() => {});
    rec('U1', '有新版本：弹窗显示一句语录，版本号是当前安装的，设置小字同一句', !!dlg && !!quote && status === quote, [
      `弹窗：${JSON.stringify(text)}`,
      `设置小字：${JSON.stringify(status)}`,
      `当前版本 ${manifest.version}`,
    ]);
    // U2
    if (dlg) await dlg.locator('.popup-button-cancel').click();
    await sleep(500);
    const seen = new Set([quote]);
    let again = 0;
    for (let k = 0; k < 3; k++) {
      await ui.reload(page);
      dlg = await waitPopup(page);
      if (dlg) {
        again++;
        text = (await dlg.locator('.popup-content').innerText()).trim();
        seen.add(QUOTES.find((q) => text.includes(q)));
        await dlg.locator('.popup-button-cancel').click();
      }
    }
    rec('U2', '点「稍后」后刷新还会弹', again === 3, [`刷新 3 次弹了 ${again} 次，见到的语录 ${seen.size} 种`]);
    // U3
    await ui.reload(page);
    dlg = await waitPopup(page);
    await dlg.locator('.popup-button-ok').click();
    const done = page.locator('dialog.popup[open]').filter({ hasText: '更新完成' });
    let doneOk = true;
    try {
      await done.first().waitFor({ state: 'visible', timeout: 30000 });
    } catch {
      doneOk = false;
    }
    const head1 = execSync('git rev-parse HEAD', { cwd: EXT_DIR }).toString().trim();
    const head0 = execSync('git rev-parse HEAD', { cwd: origin }).toString().trim();
    if (doneOk) {
      await Promise.all([page.waitForEvent('load', { timeout: 30000 }), done.first().locator('.popup-button-ok').click()]);
      await ui.waitReady(page);
      await ui.onboarding(page);
    }
    const after = await waitPopup(page);
    await sleep(1500);
    const st = await statusLine(page);
    rec('U3', '立即更新：更新成功并提示刷新，刷新后不再弹', doneOk && head1 === head0 && !after && /已是最新版本/.test(st), [
      `提示刷新：${doneOk}`,
      `安装目录已到最新提交：${head1 === head0}`,
      `刷新后弹窗：${!!after}；设置小字：${JSON.stringify(st)}`,
    ]);
    // U4 不是 git 安装
    fs.rmSync(path.join(EXT_DIR, '.git'), { recursive: true, force: true });
    await ui.reload(page);
    const u4 = await waitPopup(page);
    await sleep(1000);
    rec('U4', '不是用仓库地址安装：不弹窗', !u4, [`设置小字：${JSON.stringify(await statusLine(page))}`]);
  } catch (e) {
    rec('ERR', '运行出错', false, [e.message.split('\n')[0]]);
  } finally {
    const ours = page.consoleLog.filter((l) => ['error', 'pageerror'].includes(l.type) && /rlzc|回廊种菜|third-party\/rlzc/.test(l.text));
    rec('U5', '控制台没有本扩展的报错', ours.length === 0, ours.map((l) => l.text.slice(0, 200)));
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
