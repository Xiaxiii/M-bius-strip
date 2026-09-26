/**
 * 本地模拟接口（OpenAI 兼容），同时充当「主AI」和「副API（副本事件检测）」。
 *
 *  GET  /v1/models              模型列表（密钥含 bad 时返回 401）
 *  POST /v1/chat/completions    主AI：按脚本/注入内容写正文；副API：按请求内容返回核对 JSON
 *
 * 控制接口（测试脚本用）：
 *  POST /__control  合并设置，例如 {"sub":{"mode":"timeout","count":3,"delayMs":3000,"nextFalse":["E08"]}}
 *                   sub.mode：ok | 401 | timeout | garbage | fence；count>0 表示只对接下来 count 次副API调用生效
 *                   {"danmaku":{"mode":"fail","count":2}}：AI 弹幕调用返回 500（mode：ok | fail | garbage）
 *                   {"freak":{"mode":"fail","count":2}}：庄家怪盘出题返回 500（mode：ok | fail | garbage）
 *                   {"sub":{"marketsYes":["M2"],"omitMarkets":false}}：检测 JSON 的 markets 里判为 true 的盘口；omitMarkets 时不带 markets
 *  POST /__plan     追加主AI的回复计划（数组），见 mainReply()；?replace=1 先清空未用完的计划
 *  GET  /__log      全部调用记录；GET /__log?since=N 只取序号大于 N 的
 *  POST /__reset    清空记录与设置
 *
 * 每次调用记一行：时间、调用方（main / sub / danmaku / freak / sub-test / models）、模型、密钥末四位、输入输出 token（o200k 与 cl100k 两种分词器）。
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { encode as o200k } from 'gpt-tokenizer/encoding/o200k_base';
import { encode as cl100k } from 'gpt-tokenizer/encoding/cl100k_base';
import { narrative, ROLES_LINE, LOCATIONS, TASKS, CORRIDOR } from './fixtures.mjs';
import { MOCK_PORT, OUT } from './lib/paths.mjs';

const PORT = Number(process.env.MOCK_PORT || MOCK_PORT);
const LOG_FILE = process.env.MOCK_LOG || path.join(OUT, 'mock-log.jsonl');
fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });

const RECORDER_MARK = '你是角色扮演副本的记录员';
/** 直播：AI 生成弹幕的调用（第三期b） */
const DANMAKU_MARK = '你在写回廊直播间的观众弹幕';
/** 黑市：庄家怪盘出题的调用（第四期） */
const FREAK_MARK = '你是回廊黑市的庄家';
/** 柏宝书（共存检查用）的摘要请求：按它的输出协议回一个 <thinking> + JSON */
const BAIBAI_MARK = /【检查记录与最终结果输出协议】|summary 是必填/;

const defaults = () => ({
  sub: { mode: 'ok', count: 0, delayMs: 0, nextFalse: [], forceStatus: {}, marketsYes: [], omitMarkets: false },
  danmaku: { mode: 'ok', count: 0 },
  freak: { mode: 'ok', count: 0 },
  mainDelayMs: 0,
});
let control = defaults();
let plans = [];
let log = [];
let seq = 0;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const tok = (s) => ({ o200k: o200k(s).length, cl100k: cl100k(s).length });

function textOf(messages) {
  return (messages ?? [])
    .map((m) => (typeof m.content === 'string' ? m.content : Array.isArray(m.content) ? m.content.map((c) => c.text ?? '').join('') : ''))
    .join('\n');
}

// ───────────── 主AI ─────────────

function parseTurn(all) {
  const turn = {};
  const t = /［本轮指令·仅供AI］([\s\S]*?)(?=\n［|$)/.exec(all);
  const block = t ? t[1] : '';
  turn.events = [...block.matchAll(/^- (E\d+)：(.*)$/gm)].map((m) => ({
    id: m[1],
    text: m[2].replace(/^在本阶段第\d+到\d+轮之间发生：/, '').replace(/（条件：[\s\S]*$/, '').trim(),
  }));
  turn.askRoles = block.includes('<角色登记>');
  const lim = /本轮<副本>的时限一栏写：(.+?)(?:（照抄）)?。/.exec(block);
  turn.limit = lim ? lim[1] : null;
  turn.progressZero = block.includes('进度条写0');
  turn.phaseEnd = /本阶段在本轮结束/.test(block);
  const pack = /【副本进行中：(.+?)】/.exec(all);
  turn.pack = pack ? pack[1] : null;
  const prog = /本轮：第(\d+)(?:\/(\d+))?轮/.exec(all);
  turn.round = prog ? Number(prog[1]) : 0;
  return turn;
}

/**
 * <状态栏>：{{user}}的详情块照抄［账户·仅供AI］的积分与待清算（本轮有 <积分变动> 时写成「新余额（↑/↓变化）」），
 * 注入里有账户校正句时按它写等级、位格；另有两个角色详情块（供直播弹幕的 {who}）。
 */
function statusBar(all, loc, plan = {}) {
  const acc = /［账户·仅供AI］积分：(-?\d+)　待清算：([^\n。]*)/.exec(all);
  // ST 发出请求前已把 {{user}} 换成玩家名字
  const fix = /本轮状态栏里.{0,16}?的((?:等级写[DCBAS]|位格写[^、，]+)(?:、(?:等级写[DCBAS]|位格写[^、，]+))*)，之后按剧情照常。/.exec(all);
  let level = plan.level ?? 'D';
  let rank = plan.rank ?? '见习';
  if (fix) {
    const lv = /等级写([DCBAS])/.exec(fix[1]);
    const rk = /位格写([^、，]+)/.exec(fix[1]);
    if (lv) level = lv[1];
    if (rk) rank = rk[1];
  }
  let score = acc ? acc[1] : '1000';
  if (acc && plan.scoreDelta) {
    const n = Number(acc[1]) + plan.scoreDelta;
    score = `${n}（${plan.scoreDelta > 0 ? '↑' : '↓'}${Math.abs(plan.scoreDelta)}）`;
  }
  if (plan.statusScore !== undefined) score = String(plan.statusScore);
  const pending = acc ? (/已标记/.test(acc[2]) ? '已标记' : '无') : '无';
  return [
    '<状态栏>',
    `地点：${loc}`,
    '{{user}}：',
    `等级：${level}`,
    `位格：${rank}`,
    `积分：${score}`,
    `待清算：${pending}`,
    '在场：林默、周遥、路人玩家若干',
    '林默：',
    '等级：C',
    '状态：警惕',
    '周遥：',
    '等级：D',
    '状态：平静',
    '</状态栏>',
  ].join('\n');
}

/**
 * 主AI的一条回复。plan：
 *  { type: 'text', text }                              原样返回（开场白等）
 *  { type: 'corridor', status = false }                回廊闲聊，默认不带任何面板；status: true 时带 <状态栏>
 *  { type: 'story', writeEvents = true | false | ['E02'], panel = true, status = true, extra = '' }
 */
function mainReply(all, plan) {
  if (plan.type === 'text') return plan.text;
  const turn = parseTurn(all);
  if (plan.type === 'corridor' || !turn.pack) {
    const text = [CORRIDOR.slice(0, 3).join('\n\n')];
    if (plan.extra) text.push(plan.extra);
    if (plan.status) text.push(statusBar(all, '回廊·休息室', plan));
    return text.join('\n\n');
  }
  const round = turn.round || 1;
  const parts = [narrative(turn.pack, round)];
  const write = plan.writeEvents ?? true;
  // 这一轮才登记角色时，注入里的事件还写着角色位（如「布局者」）；真实的AI会按自己登记的名字写正文
  const roles = turn.askRoles ? Object.fromEntries(/<角色登记>(.*?)<\/角色登记>/.exec(ROLES_LINE)[1].split('｜').map((kv) => kv.split('='))) : {};
  const named = (t) => Object.entries(roles).reduce((acc, [role, name]) => acc.split(role).join(name), t);
  for (const e of turn.events) {
    if (write === true || (Array.isArray(write) && write.includes(e.id))) parts.push(`${named(e.text).replace(/[。．.]+$/, '')}。`);
  }
  if (turn.phaseEnd) parts.push('窗外的光一点点暗下去，钟停在了六点。');
  if (turn.askRoles && plan.roles !== false) parts.push(ROLES_LINE);
  if (plan.panel !== false) {
    const progress = turn.progressZero ? 0 : Math.min(100, round * 3);
    const tasks = TASKS[turn.pack] ?? ['活下去'];
    parts.push(
      [
        '<副本>',
        `副本名：${turn.pack}`,
        `时限：${turn.limit ?? '—'}`,
        `进度条：${progress}%`,
        '任务：',
        ...tasks.map((x) => `- ${x}`),
        'ps：多看，多记，少说话。',
        '</副本>',
      ].join('\n'),
    );
  }
  if (plan.status !== false) {
    const locs = LOCATIONS[turn.pack] ?? [`副本《${turn.pack}》`];
    if (plan.fullStatus) parts.push(statusBar(all, locs[round % locs.length], plan));
    else parts.push(['<状态栏>', `地点：${locs[round % locs.length]}`, '状态：轻微疲惫', '在场：林默、周遥、路人玩家若干', '</状态栏>'].join('\n'));
  }
  if (plan.extra) parts.push(plan.extra);
  return parts.join('\n\n');
}

// ───────────── 副API ─────────────

function section(user, name) {
  const m = new RegExp(`【${name}】([\\s\\S]*?)(?=\\n\\n【|$)`).exec(user);
  return m ? m[1].trim() : '';
}

function parseEvents(block) {
  // 「- E02（本阶段第2到60轮之间）：…（条件：…）」
  return [...block.matchAll(/^- (E\d+)(?:（[^）]*）)?：(.*?)(?:（条件：(.*)）)?$/gm)].map((m) => ({ id: m[1], text: m[2], cond: m[3] }));
}

let subCalls = 0;
function subReply(messages) {
  subCalls++;
  const system = messages.find((m) => m.role === 'system')?.content ?? '';
  const user = messages.filter((m) => m.role === 'user').map((m) => m.content).join('\n');
  const head = section(user, '副本');
  const round = Number(/第(\d+)轮/.exec(head)?.[1] ?? 0);
  const pack = head.split('　')[0];
  let prev = null;
  try {
    prev = JSON.parse(section(user, '上一轮状态'));
  } catch {
    prev = null;
  }
  const body = section(user, '本轮正文');
  const events = parseEvents(section(user, '本轮后台事件')).map((e) => {
    const forced = control.sub.forceStatus?.[e.id];
    const written = body.includes(e.text.slice(0, 14));
    return {
      id: e.id,
      status: forced ?? (written ? 'done' : 'missed'),
      reason: written ? `正文写到了：${e.text.slice(0, 18)}……` : `正文里没有出现「${e.text.slice(0, 12)}……」相关的描写`,
    };
  });
  const next = parseEvents(section(user, '下一轮事件')).map((e) => {
    const ok = !(control.sub.nextFalse ?? []).includes(e.id);
    return { id: e.id, ok, reason: ok ? `条件仍成立：${(e.cond ?? '').slice(0, 20)}` : `条件已不成立：正文里${(e.cond ?? '').slice(0, 16)}的前提被打破了` };
  });
  let state;
  if (system.includes('- crank（')) {
    const clues = [...(prev?.clues ?? [])];
    for (const e of events) if (e.status === 'done') clues.push(`${e.id}：${e.reason.replace('正文写到了：', '')}`);
    state = {
      crank: '挂在机房',
      watcher: round > 72 ? '江临' : '未定',
      positions: `第${round}轮（第${subCalls}次检测）：林默在3F走廊，周遥在1F大厅，其余人在各自房间`,
      victim: '正常活动',
      clues,
      theories: prev?.theories ?? ['有人在夜里动过曲柄'],
    };
  } else {
    state = { summary: `第${round}轮（第${subCalls}次检测）：众人仍在${pack}里，暂时没有人出事。` };
  }
  // 直播：精彩度与受伤（第三期b）
  const hurt = /受伤|重伤|流血|昏迷|死了|身亡/.test(body);
  const out = { events, state, next, hype: hurt ? 80 : events.length ? 45 : 25, hurt };
  // 黑市：【盘口陈述】里的每一条按 control.sub.marketsYes 判定；omitMarkets 时不带这个字段
  const ids = [...section(user, '盘口陈述').matchAll(/^- (\S+?)：/gm)].map((m) => m[1]);
  if (ids.length && !control.sub.omitMarkets) out.markets = Object.fromEntries(ids.map((id) => [id, (control.sub.marketsYes ?? []).includes(id)]));
  return out;
}

// ───────────── 庄家怪盘 ─────────────

const FREAK = [
  { q: '主播会在塔里迷路吗', judge: '{{user}}在塔里迷了路，找不到回去的楼梯', p: 0.35 },
  { q: '主播会给陌生人让出床铺吗', judge: '{{user}}把自己的床铺让给了别人', p: 0.2 },
  { q: '主播会对着钟面许愿吗', judge: '{{user}}对着钟面许了愿', p: 0.15 },
];

// ───────────── AI 弹幕 ─────────────

const DM = [
  ['praise', '路过的D级', '主播这一手稳'],
  ['bless', '小满', '平安出来啊'],
  ['discuss', '理性讨论', '先看清楚再说'],
  ['cold', '夜班保安', '也就那样吧'],
  ['envy', '柠檬汁', '凭什么运气这么好'],
  ['smear', '匿名', '演的吧'],
  ['rumor', '路人甲', '听说积分是借的'],
  ['praise', '好运来', '冲啊主播'],
  ['discuss', '数据党', '按往届这里要出事'],
  ['bless', '阿柒', '别一个人走'],
];
let dmCalls = 0;
function danmakuReply(user) {
  dmCalls++;
  const cast = (/【在场角色】(.*)/.exec(user)?.[1] ?? '').split('、').filter((x) => x && x !== '（无）');
  return DM.map(([type, name, text], k) => ({ type, name, text: k === 2 && cast[0] ? `${cast[0]}刚才那一下有点怪（第${dmCalls}次）` : `${text}（第${dmCalls}次）` }));
}

// ───────────── HTTP ─────────────

function send(res, status, obj, headers = {}) {
  res.writeHead(status, { 'content-type': 'application/json', ...headers });
  res.end(typeof obj === 'string' ? obj : JSON.stringify(obj));
}

function completion(text, model) {
  return {
    id: `mock-${seq}`,
    object: 'chat.completion',
    created: Math.floor(Date.now() / 1000),
    model: model || 'mock',
    choices: [{ index: 0, message: { role: 'assistant', content: text }, finish_reason: 'stop' }],
    usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 },
  };
}

function sendStream(res, text, model) {
  res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache' });
  const chunk = (delta, finish = null) =>
    `data: ${JSON.stringify({ id: `mock-${seq}`, object: 'chat.completion.chunk', model, choices: [{ index: 0, delta, finish_reason: finish }] })}\n\n`;
  res.write(chunk({ role: 'assistant', content: '' }));
  for (let i = 0; i < text.length; i += 80) res.write(chunk({ content: text.slice(i, i + 80) }));
  res.write(chunk({}, 'stop'));
  res.end('data: [DONE]\n\n');
}

function record(entry) {
  entry.seq = ++seq;
  if (entry.t0 && entry.t1) entry.ms = new Date(entry.t1) - new Date(entry.t0);
  log.push(entry);
  fs.appendFileSync(LOG_FILE, JSON.stringify(entry) + '\n');
  return entry;
}

const server = http.createServer((req, res) => {
  let raw = '';
  req.on('data', (c) => (raw += c));
  req.on('end', async () => {
    const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
    const auth = String(req.headers.authorization ?? '');
    const key4 = auth.replace(/^Bearer\s*/, '').slice(-4);
    const body = raw ? (() => { try { return JSON.parse(raw); } catch { return {}; } })() : {};
    try {
      // ── 控制接口 ──
      if (url.pathname === '/__control') {
        const merged = { ...control, ...body, sub: { ...control.sub, ...(body.sub ?? {}) }, danmaku: { ...control.danmaku, ...(body.danmaku ?? {}) }, freak: { ...control.freak, ...(body.freak ?? {}) } };
        control = merged;
        return send(res, 200, control);
      }
      if (url.pathname === '/__plan') {
        if (url.searchParams.get('replace') === '1') plans = [];
        plans.push(...(Array.isArray(body) ? body : [body]));
        return send(res, 200, { queued: plans.length });
      }
      if (url.pathname === '/__reset') {
        control = defaults();
        plans = [];
        log = [];
        subCalls = 0;
        dmCalls = 0;
        return send(res, 200, { ok: true });
      }
      if (url.pathname === '/__log') {
        const since = Number(url.searchParams.get('since') ?? 0);
        const full = url.searchParams.get('full') === '1';
        return send(res, 200, log.filter((e) => e.seq > since).map((e) => (full ? e : { ...e, request: undefined, response: undefined })));
      }

      // ── 模型列表 ──
      if (url.pathname.endsWith('/models')) {
        const t0 = new Date();
        if (/bad/.test(auth)) {
          record({ t0: t0.toISOString(), t1: new Date().toISOString(), caller: 'models', key4, status: 401 });
          return send(res, 401, { error: { message: 'Incorrect API key provided', type: 'invalid_request_error' } });
        }
        record({ t0: t0.toISOString(), t1: new Date().toISOString(), caller: 'models', key4, status: 200 });
        return send(res, 200, { object: 'list', data: [{ id: 'mock-main' }, { id: 'recorder-mini' }, { id: 'recorder-pro' }] });
      }

      // ── 对话 ──
      if (url.pathname.endsWith('/chat/completions')) {
        const t0 = new Date();
        const messages = body.messages ?? [];
        const all = textOf(messages);
        const isSub = all.includes(RECORDER_MARK);
        const isDanmaku = !isSub && all.includes(DANMAKU_MARK);
        const isFreak = !isSub && !isDanmaku && all.includes(FREAK_MARK);
        const isTest = !isSub && !isDanmaku && !isFreak && /只回复 OK/.test(all);
        const isBaibai = !isSub && !isDanmaku && !isFreak && !isTest && BAIBAI_MARK.test(all);
        const caller = isSub ? 'sub' : isDanmaku ? 'danmaku' : isFreak ? 'freak' : isTest ? 'sub-test' : isBaibai ? 'baibai' : 'main';
        const base = { t0: t0.toISOString(), caller, model: body.model, key4, stream: !!body.stream, inTok: tok(all) };

        if ((isSub || isTest) && /bad/.test(auth)) {
          record({ ...base, t1: new Date().toISOString(), status: 401, outTok: tok(''), request: messages });
          return send(res, 401, { error: { message: 'Incorrect API key provided: sk-fake-***bad', type: 'invalid_request_error' } });
        }

        let text;
        let status = 200;
        let note;
        if (isDanmaku) {
          const d = control.danmaku;
          const mode = d.mode;
          const active = mode !== 'ok' && d.count !== 0;
          if (active && d.count > 0) {
            d.count--;
            if (d.count === 0) d.mode = 'ok';
          }
          if (active && mode === 'fail') {
            record({ ...base, t1: new Date().toISOString(), status: 500, outTok: tok(''), note: 'mode=fail', request: messages });
            return send(res, 500, { error: { message: 'mock upstream error' } });
          }
          const user = messages.filter((m) => m.role === 'user').map((m) => m.content).join('\n');
          text = active && mode === 'garbage' ? '今天的弹幕就不写了。' : JSON.stringify(danmakuReply(user));
          note = active ? `mode=${mode}` : 'danmaku';
        } else if (isFreak) {
          const f = control.freak;
          const mode = f.mode;
          const active = mode !== 'ok' && f.count !== 0;
          if (active && f.count > 0) {
            f.count--;
            if (f.count === 0) f.mode = 'ok';
          }
          if (active && mode === 'fail') {
            record({ ...base, t1: new Date().toISOString(), status: 500, outTok: tok(''), note: 'mode=fail', request: messages });
            return send(res, 500, { error: { message: 'mock upstream error' } });
          }
          text = active && mode === 'garbage' ? '这局我不开盘。' : '```json\n' + JSON.stringify(FREAK) + '\n```';
          note = active ? `mode=${mode}` : 'freak';
        } else if (isTest) text = 'OK';
        else if (isBaibai) {
          text =
            '<thinking>核对：本楼只有塔内日常与观察，没有新物品和新地点。</thinking>\n' +
            JSON.stringify({ summary: '{{user}}在钟楼里四处查看，留意到石壁守则与几名同伴的举动，暂未发生意外。', timeStart: '第一日 12:05', timeEnd: '第一日 12:10' });
          note = 'baibai-summary';
        } else if (isSub) {
          const s = control.sub;
          const mode = s.mode ?? 'ok';
          const active = mode !== 'ok' && (s.count === 0 || s.count > 0);
          if (s.delayMs) await sleep(s.delayMs);
          if (active && s.count > 0) {
            s.count--;
            if (s.count === 0) s.mode = 'ok';
          }
          const result = subReply(messages);
          const json = JSON.stringify(result);
          if (active && mode === '401') {
            record({ ...base, t1: new Date().toISOString(), status: 401, outTok: tok(''), note: 'mode=401', request: messages });
            return send(res, 401, { error: { message: 'Incorrect API key provided', type: 'invalid_request_error' } });
          }
          if (active && mode === 'timeout') {
            note = 'mode=timeout';
            await sleep(s.timeoutMs ?? 12000);
          }
          if (active && mode === 'garbage') {
            text = '嗯……这一轮我觉得大家都挺好的，没什么特别的。';
            note = 'mode=garbage';
          } else if (active && mode === 'fence') {
            text = '好的，以下是整理结果：\n```json\n' + JSON.stringify(result, null, 2) + '\n```';
            note = 'mode=fence';
          } else text = json;
        } else {
          const plan = plans.shift() ?? { type: 'story' };
          if (control.mainDelayMs) await sleep(control.mainDelayMs);
          text = mainReply(all, plan);
          note = plan.type;
        }
        record({ ...base, t1: new Date().toISOString(), status, outTok: tok(text), note, request: messages, response: text });
        if (body.stream) return sendStream(res, text, body.model);
        return send(res, 200, completion(text, body.model));
      }
      send(res, 404, { error: { message: 'not found' } });
    } catch (e) {
      console.error(e);
      if (!res.headersSent) send(res, 500, { error: { message: String(e?.message ?? e) } });
    }
  });
});

server.listen(PORT, '127.0.0.1', () => console.log(`mock on ${PORT}`));
