/**
 * 入场卡片与悬浮球的截图（桌面 1280px 与手机 390px）。需要先跑过 run.mjs（角色卡已建好）。
 * 用法：node shots-card.mjs
 */
import * as ui from './lib/ui.mjs';
import * as P from './lib/procs.mjs';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** 追加一条AI消息并按 ST 的流程渲染、发 MESSAGE_RECEIVED */
async function pushAi(page, mes) {
  await page.evaluate(async (text) => {
    const c = SillyTavern.getContext();
    const msg = { name: c.name2, is_user: false, is_system: false, send_date: new Date().toISOString(), mes: text, extra: {} };
    c.chat.push(msg);
    c.addOneMessage(msg);
    await c.eventSource.emit(c.eventTypes.MESSAGE_RECEIVED, c.chat.length - 1, 'normal');
    await c.eventSource.emit(c.eventTypes.CHARACTER_MESSAGE_RENDERED, c.chat.length - 1, 'normal');
  }, mes);
  await sleep(600);
}

async function run(device, tag) {
  const browser = await ui.launch();
  const page = await ui.openST(browser, device);
  await ui.connectMainApi(page, { stream: true });
  await ui.selectCharacter(page, '钟楼开场');
  await ui.closeRightPanel(page);
  await ui.newChat(page);
  await ui.closeRightPanel(page);
  const card = await ui.entryCard(page, 20000);
  const out = [await ui.shot(page, `card-${tag}-page`), await ui.shotEl(card.card, `card-${tag}`)];
  // 直播开关拨开
  await ui.press(page, card.card.locator('.rlzc-entry-live'));
  await sleep(300);
  out.push(await ui.shotEl(card.card, `card-${tag}-live-on`));
  // 「不是」：钟楼记入拒绝；之后未收录副本的简报再提示
  await ui.answerEntryCard(page, 'cancel');
  await pushAi(page, '「副本简报：《雾 港》」\n「人数：6人」\n「等级：b级（越级）」\n「时限：10小时」\n「简报：请找到灯塔。」');
  const unknown = await ui.entryCard(page, 10000);
  out.push(await ui.shotEl(unknown.card, `card-${tag}-unknown`));
  const ball = ui.host(page).locator('.rlzc-ball');
  const pad = async (name) => {
    const b = await ball.boundingBox();
    await page.screenshot({ path: `${ui.SHOTS}/${name}.jpg`, type: 'jpeg', quality: 80, clip: { x: b.x - 10, y: b.y - 10, width: b.width + 20, height: b.height + 20 } });
    out.push(`${name}.jpg`);
  };
  await pad(`ball-${tag}-corridor`);
  // 进入（直播开）：悬浮球出现进度环和左上角红点
  await ui.answerEntryCard(page, 'ok', { live: true });
  await sleep(800);
  for (let i = 0; i < 20; i++) await pushAi(page, `第${i + 2}轮。`);
  await sleep(800);
  await pad(`ball-${tag}-instance`);
  await browser.close();
  return out;
}

await P.startMock();
await P.startST();
try {
  console.log(await run(ui.DESKTOP, 'desktop'));
  console.log(await run(ui.MOBILE, '390'));
} finally {
  await P.stopST?.();
  await P.stopMock();
}
