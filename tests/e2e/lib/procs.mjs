/** 启停模拟接口与 SillyTavern 服务端（子进程），输出写进 out/ 下的日志文件 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { E2E_DIR, MOCK_URL, OUT, ST_DIR, ST_URL } from './paths.mjs';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitHttp(url, timeoutMs = 90000) {
  const t0 = Date.now();
  for (;;) {
    try {
      const res = await fetch(url);
      if (res.status < 500) return;
    } catch {
      /* 还没起来 */
    }
    if (Date.now() - t0 > timeoutMs) throw new Error(`等待 ${url} 超时`);
    await sleep(300);
  }
}

function start(name, cmd, args, cwd, env = {}) {
  fs.mkdirSync(OUT, { recursive: true });
  const out = fs.openSync(path.join(OUT, `${name}.log`), 'a');
  const child = spawn(cmd, args, { cwd, env: { ...process.env, ...env }, stdio: ['ignore', out, out] });
  child.on('exit', (code, sig) => fs.appendFileSync(path.join(OUT, `${name}.log`), `\n[${name} 退出 code=${code} sig=${sig}]\n`));
  return child;
}

async function stop(child) {
  if (!child || child.exitCode !== null) return;
  const done = new Promise((r) => child.once('exit', r));
  child.kill('SIGTERM');
  const t = setTimeout(() => child.kill('SIGKILL'), 8000);
  await done;
  clearTimeout(t);
}

let mock = null;
let st = null;

export async function startMock() {
  mock = start('mock', process.execPath, ['mock-server.mjs'], E2E_DIR);
  await waitHttp(`${MOCK_URL}/__log`);
}

export async function stopMock() {
  await stop(mock);
  mock = null;
}

export async function startST() {
  // 不改 ST 源码：只用命令行参数指定端口、不自动打开浏览器
  st = start('sillytavern', process.execPath, ['server.js', '--port', String(new URL(ST_URL).port), '--browserLaunchEnabled', 'false'], ST_DIR, {
    NO_PROXY: '127.0.0.1,localhost',
    no_proxy: '127.0.0.1,localhost',
  });
  await waitHttp(ST_URL, 180000);
}

export async function stopST() {
  await stop(st);
  st = null;
}

export async function restartST() {
  await stopST();
  await sleep(500);
  await startST();
}

/** 控制模拟接口 */
export async function mockControl(body) {
  const res = await fetch(`${MOCK_URL}/__control`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  return res.json();
}

export async function mockPlan(plans, replace = true) {
  const res = await fetch(`${MOCK_URL}/__plan${replace ? '?replace=1' : ''}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(plans) });
  return res.json();
}

export async function mockReset() {
  await fetch(`${MOCK_URL}/__reset`, { method: 'POST' });
}

/** 取调用记录；full=true 时带请求与回复原文 */
export async function mockLog(since = 0, full = false) {
  const res = await fetch(`${MOCK_URL}/__log?since=${since}${full ? '&full=1' : ''}`);
  return res.json();
}

export async function lastSeq() {
  const all = await mockLog(0);
  return all.length ? all[all.length - 1].seq : 0;
}
