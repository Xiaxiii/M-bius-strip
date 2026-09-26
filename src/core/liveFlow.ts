/**
 * 直播接入流程的纯逻辑（第三期b-第3段）：每楼直播记录的生成、记账条目、从聊天记录重放出直播画面数据。
 * 每楼记录存在 chat[i].extra.rlzc.live，删楼、滑动、重新生成后按当前显示的回复重放，做法与账本相同。
 * 回廊直播的开关状态存在 chatMetadata.rlzc_live，不随删楼回滚。
 */
import type { ChatMessage, LedgerEntry, Level, Pack } from '../packs/types';
import {
  calcHeat,
  calcHype,
  calcTips,
  calcViewers,
  detectHurt,
  danmakuTarget,
  DANMAKU_MAX,
  DANMAKU_MIN,
  drawDanmaku,
  type DanmakuLine,
  type PackDanmakuItem,
  type PoolItem,
  type TemplateItem,
} from './live';
import { stripPanels } from './subapi';

export const LIVE_META_KEY = 'rlzc_live';
export const TIP_REVOKE_SOURCE = '本局直播打赏撤回';
/** 开播第一轮的上一轮热度 */
export const START_HEAT = 20;
/** feed 最多保留的条数 */
export const FEED_MAX = 60;

export const SYS_TEXT = {
  corridorOn: '回廊直播开始。',
  corridorOff: '已下播。',
  enterOff: '进入副本，回廊直播已结束。',
  instanceOn: '本局副本直播开始。',
  instanceOff: '副本结束，直播已下播。',
  revoke: '主播在副本中死亡，本局打赏已全部撤回。',
} as const;

export type FeedType = 'msg' | 'tip' | 'sys';

export interface FeedItem {
  id: number;
  t: FeedType;
  name: string;
  text: string;
  /** 打赏面值（弹幕、系统消息为0） */
  amount: number;
  /** 实到（打赏为面值×60%；撤回为负数） */
  net: number;
}

/** 存进 chat[i].extra.rlzc.live 的一楼直播数据 */
export interface LiveRecord {
  /** 场次：副本内为会话 id，回廊为开播时生成的场次 id */
  show: string;
  scope: 'instance' | 'corridor';
  hype: number;
  heat: number;
  viewers: number;
  hurt: boolean;
  /** 本轮的弹幕、打赏、系统消息，按放出顺序 */
  feed: FeedItem[];
  /** 本楼打赏到账合计 */
  tipNet: number;
  tipFace: number;
  /** 账本流水文字 */
  tipSource: string;
  /** 死亡撤回的数额（正数），本局打赏合计 */
  revoke?: number;
  /** 等 AI 弹幕时暂存：本地备用弹幕、打赏、系统消息、本轮目标条数 */
  pending?: { local: DanmakuLine[]; tips: FeedDraft[]; sys: FeedDraft[]; target: number };
  /** AI 生成弹幕的结果（第4段） */
  ai?: { ok: boolean; pending?: boolean; count?: number; error?: string; ms?: number };
}

export type FeedDraft = Omit<FeedItem, 'id'>;

export interface SysItem extends FeedItem {
  show: string;
}

/** chatMetadata.rlzc_live */
export interface LiveMeta {
  /** 已用过的最大 feed id；重放后从这里继续递增，不复用旧 id */
  seq: number;
  corridor: { on: boolean; show: string; viewers?: number };
  /** 不绑定楼层的系统消息（回廊开播、下播、进入副本自动下播、副本开播、手动结束下播） */
  sys: SysItem[];
}

export function normalizeLiveMeta(raw: unknown): LiveMeta {
  const r = (raw && typeof raw === 'object' ? raw : {}) as Partial<LiveMeta>;
  const c = (r.corridor ?? {}) as LiveMeta['corridor'];
  return {
    seq: Number.isFinite(r.seq) ? Number(r.seq) : 0,
    corridor: { on: !!c.on, show: typeof c.show === 'string' ? c.show : '', viewers: Number.isFinite(c.viewers) ? c.viewers : undefined },
    sys: Array.isArray(r.sys) ? r.sys.filter((x) => x && typeof x.id === 'number') : [],
  };
}

// ───────────── 入场勾选框 ─────────────

/** 入场弹窗的「开启直播」勾选框：disableLive 副本不显示；默认不勾，沿用上次的选择 */
export function entryLiveOption(pack: Pack, lastChoice: boolean | undefined): { show: boolean; checked: boolean } {
  if (pack.disableLive) return { show: false, checked: false };
  return { show: true, checked: !!lastChoice };
}

// ───────────── 读取 ─────────────

export function liveOf(m: ChatMessage | undefined): LiveRecord | undefined {
  const r = m?.extra?.rlzc?.live as LiveRecord | undefined;
  return r && typeof r.show === 'string' && Array.isArray(r.feed) ? r : undefined;
}

/** 某一场的每楼记录（按楼层顺序）；before 限定在该楼之前 */
export function showRecords(chat: ChatMessage[], show: string, before = chat.length): { index: number; rec: LiveRecord }[] {
  const out: { index: number; rec: LiveRecord }[] = [];
  for (let i = 0; i < Math.min(before, chat.length); i++) {
    const m = chat[i];
    if (!m || m.is_user) continue;
    const rec = liveOf(m);
    if (rec && rec.show === show) out.push({ index: i, rec });
  }
  return out;
}

/** 本局/本场已到账合计（撤回后为0） */
export function showTipTotal(chat: ChatMessage[], show: string): number {
  return showRecords(chat, show).reduce((s, { rec }) => s + (rec.tipNet || 0) - (rec.revoke || 0), 0);
}

/** 聊天里和 meta 里用过的最大 feed id */
export function maxFeedId(chat: ChatMessage[], meta: LiveMeta): number {
  let max = meta.seq;
  for (const s of meta.sys) max = Math.max(max, s.id);
  for (const m of chat) for (const f of liveOf(m)?.feed ?? []) max = Math.max(max, f.id);
  return max;
}

/** 最近 n 条弹幕文字（去重用） */
export function recentFeedTexts(chat: ChatMessage[], n = 30): string[] {
  const out: string[] = [];
  for (let i = chat.length - 1; i >= 0 && out.length < n; i--) {
    const feed = liveOf(chat[i])?.feed ?? [];
    for (let k = feed.length - 1; k >= 0 && out.length < n; k--) if (feed[k].t === 'msg') out.push(feed[k].text);
  }
  return out;
}

// ───────────── 状态栏 ─────────────

const STATUS_RE = /<状态栏>([\s\S]*?)<\/状态栏>/;
const USER_KEYS = /^(积分|位格|道具|在场)$/;
const KEY_LINE = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;

/** 最近一条带 <状态栏> 的AI消息里的状态栏正文 */
export function latestStatusBar(chat: ChatMessage[], before = chat.length): string | null {
  for (let i = Math.min(before, chat.length) - 1; i >= 0; i--) {
    const m = chat[i];
    if (!m || m.is_user || !m.mes) continue;
    const s = STATUS_RE.exec(m.mes);
    if (s) return s[1];
  }
  return null;
}

/** 玩家等级：最近一条 <状态栏> 里的「等级」，读不到按 D */
export function playerLevelOf(chat: ChatMessage[], before = chat.length): Level {
  for (let i = Math.min(before, chat.length) - 1; i >= 0; i--) {
    const m = chat[i];
    if (!m || m.is_user || !m.mes) continue;
    const s = STATUS_RE.exec(m.mes);
    if (!s) continue;
    const lv = /等级[：:]\s*([DCBAS])/.exec(s[1]);
    if (lv) return lv[1] as Level;
  }
  return 'D';
}

/**
 * 状态栏里角色详情块的「角色名」，不含{{user}}。
 * 详情块是「名字：」单独一行、下面跟字段，或「名字｜等级｜…」一行；{{user}}的块带积分、位格、道具或在场。
 */
export function parseCastNames(statusText: string | null, userName = ''): string[] {
  if (!statusText) return [];
  const blocks: { name: string; keys: Set<string> }[] = [];
  let cur: { name: string; keys: Set<string> } | null = null;
  for (const raw of statusText.split('\n')) {
    const l = raw.trim();
    if (!l || /^[━─—=\-]{3,}$/.test(l)) continue;
    const kv = KEY_LINE.exec(l);
    if (kv) {
      cur?.keys.add(kv[1]);
      continue;
    }
    const head = /^(.+?)\s*[：:]\s*$/.exec(l);
    if (head) {
      cur = { name: head[1].trim(), keys: new Set() };
      blocks.push(cur);
      continue;
    }
    if (l.includes('｜')) {
      blocks.push({ name: l.split('｜')[0].trim(), keys: new Set() });
      cur = null;
    }
  }
  const names: string[] = [];
  blocks.forEach((b, i) => {
    if (i === 0 && [...b.keys].some((k) => USER_KEYS.test(k))) return;
    const name = b.name.replace(/[（(][\s\S]*$/, '').trim();
    if (!name || /^(陌生|路人)/.test(name) || name === '{{user}}' || (userName && name === userName)) return;
    if (!names.includes(name)) names.push(name);
  });
  return names;
}

// ───────────── 一轮的直播记录 ─────────────

export interface LiveRoundInput {
  show: string;
  scope: 'instance' | 'corridor';
  /** 副本等级（回廊为 null） */
  packLevel: Level | null;
  playerLevel: Level;
  isRest: boolean;
  /** 本场上一条记录的热度；开播第一轮为 null */
  prevHeat: number | null;
  /** 本场之前已有几条记录（开播后前两轮提高 open 弹幕概率） */
  roundsInShow: number;
  /** 本条AI正文原文 */
  text: string;
  /** 本轮有注入的后台事件 */
  hasEvents: boolean;
  /** 本轮正文有 <阶段切换> */
  hasPhaseSwitch: boolean;
  /** 事件检测给出的打分与受伤判断（没有时按规则估） */
  sub?: { hype?: number; hurt?: boolean };
  /** 剩余轮次不足上限一成 */
  isEnd: boolean;
  phaseId?: string;
  pool: PoolItem[];
  templates: TemplateItem[];
  packDanmaku?: PackDanmakuItem[];
  names: string[];
  whoNames: string[];
  recentTexts: string[];
  /** 本轮第一条 feed 的 id */
  firstId: number;
  /** 本轮是副本结算：died 为死亡结算时本局此前的打赏合计（撤回用）；ended 为这一轮结束直播 */
  settle?: { died: boolean; tipsBefore: number };
  /** 这一轮要生成 AI 弹幕：先不出 feed，等 AI 结果再合成（第4段） */
  awaitAi?: boolean;
  rand: () => number;
}

/** 一轮的直播数据：精彩度、热度、人数、弹幕、打赏；打赏夹在弹幕中间 */
/** 本轮是否有人受伤或死亡：事件检测给了 hurt 就用它，否则按正文关键词判断 */
export function roundHurt(text: string, sub?: { hurt?: boolean }): boolean {
  return sub?.hurt !== undefined ? sub.hurt : detectHurt(stripPanels(text));
}

export function buildLiveRecord(inp: LiveRoundInput): LiveRecord {
  const { rand } = inp;
  const body = stripPanels(inp.text);
  const hurt = roundHurt(inp.text, inp.sub);
  const hype = calcHype({ subHype: inp.sub?.hype, subHurt: hurt, hasEvents: inp.hasEvents, hasPhaseSwitch: inp.hasPhaseSwitch, bodyText: body });
  const heat = calcHeat(inp.prevHeat ?? START_HEAT, hype);
  const isCorr = inp.scope === 'corridor' || inp.isRest;
  const viewers = calcViewers({
    packLevel: inp.scope === 'instance' ? inp.packLevel : null,
    playerLevel: inp.playerLevel,
    isRest: inp.isRest,
    heat,
    rand: 0.9 + rand() * 0.2,
  });
  // 每轮弹幕总数 10–13 条；要等 AI 弹幕的轮次先多抽几条本地的，留着补足
  const target = danmakuTarget(rand);
  const local = drawDanmaku({
    pool: inp.pool,
    templates: inp.templates,
    packDanmaku: inp.packDanmaku,
    currentPhase: inp.phaseId,
    isInst: inp.scope === 'instance',
    isRest: inp.isRest,
    isHurt: hurt,
    hype,
    isOpen: inp.roundsInShow < 2,
    isEnd: inp.isEnd,
    recentTexts: inp.recentTexts,
    names: inp.names,
    whoNames: inp.whoNames,
    rand,
    count: inp.awaitAi ? DANMAKU_MAX : target,
  });
  const calc = calcTips({ hype, isCorr, rand, names: inp.names });
  const tips: FeedDraft[] = calc.faces.map((face, k) => ({ t: 'tip', name: calc.names[k], text: '', amount: face, net: Math.floor(face * 0.6) }));
  const sys: FeedDraft[] = [];
  let revoke: number | undefined;
  if (inp.settle) {
    if (inp.settle.died) {
      revoke = inp.settle.tipsBefore + calc.netTotal;
      if (revoke > 0) sys.push({ t: 'sys', name: '', text: SYS_TEXT.revoke, amount: 0, net: -revoke });
      else revoke = undefined;
    }
    sys.push({ t: 'sys', name: '', text: SYS_TEXT.instanceOff, amount: 0, net: 0 });
  }
  const rec: LiveRecord = {
    show: inp.show,
    scope: inp.scope,
    hype,
    heat,
    viewers,
    hurt,
    feed: [],
    tipNet: calc.netTotal,
    tipFace: calc.totalFace,
    tipSource: calc.source,
  };
  if (revoke) rec.revoke = revoke;
  // 等 AI 弹幕：先不出 feed（打赏已记账），AI 返回或失败后再按 finalizeLiveRecord 合成
  if (inp.awaitAi) rec.pending = { local, tips, sys, target };
  else rec.feed = assembleFeed(local.slice(0, target), tips, sys, inp.firstId, rand);
  return rec;
}

/**
 * 本轮弹幕：有 AI 生成的先用 AI 的（最多13条），不足10条用本地池补到 10–13 条；
 * 没有 AI 生成的（关闭、失败）只用本地池 10–13 条。
 */
export function composeDanmaku(ai: DanmakuLine[] | null, local: DanmakuLine[], target: number): DanmakuLine[] {
  const want = Math.max(DANMAKU_MIN, Math.min(DANMAKU_MAX, target));
  if (!ai?.length) return local.slice(0, want);
  const out = ai.slice(0, DANMAKU_MAX);
  if (out.length >= DANMAKU_MIN) return out;
  const used = new Set(out.map((d) => d.text));
  for (const d of local) {
    if (out.length >= want) break;
    if (used.has(d.text)) continue;
    used.add(d.text);
    out.push(d);
  }
  return out;
}

/** 弹幕打散，打赏插在弹幕中间（不放在第一条之前），系统消息放最后；id 从 firstId 起连续 */
function assembleFeed(msgs: DanmakuLine[], tips: FeedDraft[], sys: FeedDraft[], firstId: number, rand: () => number): FeedItem[] {
  const lines: FeedDraft[] = msgs.map((d) => ({ t: 'msg', name: d.name, text: d.text, amount: 0, net: 0 }));
  for (let i = lines.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [lines[i], lines[j]] = [lines[j], lines[i]];
  }
  for (const tip of tips) {
    const pos = lines.length ? 1 + Math.floor(rand() * lines.length) : 0;
    lines.splice(Math.min(pos, lines.length), 0, tip);
  }
  lines.push(...sys);
  return lines.map((d, k) => ({ id: firstId + k, ...d }));
}

/** 等 AI 弹幕的那一楼：用 AI 的结果（失败时为 null）合成本轮 feed */
export function finalizeLiveRecord(rec: LiveRecord, ai: DanmakuLine[] | null, firstId: number, rand: () => number): LiveRecord {
  if (!rec.pending) return rec;
  const { pending, ...rest } = rec;
  const msgs = composeDanmaku(ai, pending.local, pending.target);
  return { ...rest, feed: assembleFeed(msgs, pending.tips, pending.sys, firstId, rand) };
}

/** 这一楼直播带来的账本条目（类型 tip）：本轮打赏合并一条；死亡撤回一条 */
export function liveLedgerEntries(rec: LiveRecord | undefined, at: string): LedgerEntry[] {
  if (!rec) return [];
  const out: LedgerEntry[] = [];
  if (rec.tipNet > 0) out.push({ delta: rec.tipNet, source: rec.tipSource, type: 'tip', at });
  if (rec.revoke && rec.revoke > 0) out.push({ delta: -rec.revoke, source: TIP_REVOKE_SOURCE, type: 'tip', at });
  return out;
}

/** 副本内直播时，［账户·仅供AI］末尾加的一句 */
export function liveTipSentence(total: number): string {
  return `其中本局直播打赏${total}分，副本内不可使用，离开副本后可用。`;
}

export function appendLiveTipSentence(ledgerText: string, total: number): string {
  if (!ledgerText) return ledgerText;
  return `${ledgerText}${ledgerText.endsWith('。') ? '' : '。'}${liveTipSentence(total)}`;
}

// ───────────── RLZC_LIVE.get() ─────────────

export interface LiveView {
  on: boolean;
  canToggle: boolean;
  scope: 'instance' | 'corridor';
  viewers: number;
  heat: number;
  tipTotal: number;
  injectToAI: boolean;
  feed: FeedItem[];
  lastTip: { id: number; net: number } | null;
}

export interface LiveStatus {
  /** 有进行中的副本 */
  inInstance: boolean;
  /** 本局开了直播 */
  instanceLive: boolean;
  /** 本局场次 id（会话 id） */
  instanceShow?: string;
  /** 还没有任何记录时的人数 */
  startViewers?: number;
  injectToAI: boolean;
}

function allShowItems(chat: ChatMessage[], meta: LiveMeta, show: string): { items: FeedItem[]; last?: LiveRecord } {
  const recs = showRecords(chat, show);
  const items: FeedItem[] = [];
  for (const { rec } of recs) items.push(...rec.feed);
  for (const s of meta.sys) if (s.show === show) items.push({ id: s.id, t: s.t, name: s.name, text: s.text, amount: s.amount, net: s.net });
  items.sort((a, b) => a.id - b.id);
  return { items, last: recs[recs.length - 1]?.rec };
}

/** 最近一场的场次 id（按 feed id 最大者） */
function latestShow(chat: ChatMessage[], meta: LiveMeta): string {
  let best = '';
  let bestId = -1;
  for (const s of meta.sys) if (s.id > bestId) { bestId = s.id; best = s.show; }
  for (const m of chat) {
    const rec = liveOf(m);
    if (!rec) continue;
    for (const f of rec.feed) if (f.id > bestId) { bestId = f.id; best = rec.show; }
  }
  return best;
}

/** 从聊天记录与 meta 得到 RLZC_LIVE.get() 的数据；hidden 为还没放出的 feed id */
export function buildLiveView(chat: ChatMessage[], meta: LiveMeta, st: LiveStatus, hidden: ReadonlySet<number> = new Set()): LiveView {
  const scope: LiveView['scope'] = st.inInstance ? 'instance' : 'corridor';
  const on = st.inInstance ? st.instanceLive : meta.corridor.on;
  const show = st.inInstance ? (st.instanceLive ? st.instanceShow ?? '' : '') : on ? meta.corridor.show : latestShow(chat, meta);
  const empty: LiveView = { on, canToggle: !st.inInstance, scope, viewers: 0, heat: 0, tipTotal: 0, injectToAI: st.injectToAI, feed: [], lastTip: null };
  if (!show) return empty;
  const { items, last } = allShowItems(chat, meta, show);
  const visible = items.filter((f) => !hidden.has(f.id));
  let tipTotal = 0;
  let lastTip: LiveView['lastTip'] = null;
  for (const f of visible) {
    tipTotal += f.net;
    if (f.t === 'tip') lastTip = { id: f.id, net: f.net };
  }
  return {
    ...empty,
    viewers: on ? last?.viewers ?? st.startViewers ?? 0 : 0,
    heat: on ? last?.heat ?? START_HEAT : 0,
    tipTotal,
    feed: visible.slice(-FEED_MAX),
    lastTip,
  };
}
