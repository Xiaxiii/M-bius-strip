/**
 * 黑市·盘口的纯逻辑（第四期）：开盘、赔率、押注上限、开奖、流水。随机数一律通过参数传入。
 * 盘口、赔率、赌票存在 chatMetadata.rlzc_market（按会话 id 分开），不随删楼回滚；
 * 开奖结果每次由重放得出，删楼、重新生成、滑动后自动重算，已兑付的会撤回。
 * 赔率只按副本等级、玩家等级和副本包写好的开盘概率计算，绝不按剧情真相定。
 */
import type { ChatMessage, LedgerEntry, Level, MarketDef, Pack } from '../packs/types';
import { packMarkets } from '../packs/loader';
import { KILL_THRESHOLDS } from './ledger';
import { isCountable } from './replay';

export const MARKET_META_KEY = 'rlzc_market';

/** 等级序：D=0、C=1、B=2、A=3、S=4 */
export const LEVEL_ORDER: Record<Level, number> = { D: 0, C: 1, B: 2, A: 3, S: 4 };

/** 单个盘口累计押注上限（按玩家等级）；赌坊单注上限同此 */
export const STAKE_CAP: Record<Level, number> = { D: 1000, C: 5000, B: 20000, A: 80000, S: 300000 };
export const MIN_STAKE = 10;
/** 庄家抽水20% */
export const HOUSE = 0.8;

export const ENDING_ID = 'ending';
export const RATING_ID = 'rating';
export const RATINGS = ['S', 'A', 'B', 'C', 'D'] as const;

export type MarketKind = 'ending' | 'rating' | 'event' | 'freak';

export interface MarketOption {
  id: string;
  label: string;
  /** 开盘概率 */
  p: number;
  odds: number;
}

export interface Market {
  id: string;
  kind: MarketKind;
  /** 题目 */
  q: string;
  options: MarketOption[];
  judge?: string;
  judgeNo?: string;
  by?: string;
}

/** 一张赌票 */
export interface Ticket {
  id: string;
  market: string;
  option: string;
  stake: number;
  odds: number;
  /** 下注时间（M/D HH:MM） */
  at: string;
  /** 下注时聊天的最后一楼下标：流水按它排进时间线 */
  after: number;
}

/** 庄家怪盘的出题记录（调试页显示） */
export interface FreakLog {
  status: 'pending' | 'ok' | 'failed' | 'late' | 'off';
  error?: string;
  ms?: number;
  /** 解析出的题目（含丢掉前的数量） */
  count?: number;
}

export type Stamp = 'win' | 'lose' | 'refund';

export interface Resolution {
  stamp: Stamp;
  /** 在哪一楼开奖；-1 = 不对应楼层（会话作废、被替换） */
  index: number;
}

/** 一局的盘口本 */
export interface Book {
  session: string;
  packId: string;
  packName: string;
  openedAt: string;
  /** 封盘时间（入场后第2条AI回复到来时）；之后删楼也不重开 */
  closedAt?: string;
  markets: Market[];
  tickets: Ticket[];
  freak?: FreakLog;
  /** 会话被替换或作废后定格的开奖结果（赌票 id → 结果） */
  frozen?: Record<string, Resolution>;
}

// ───────────── 概率与赔率 ─────────────

/** 差 = 副本等级序 − 玩家等级序 */
export function levelDiff(packLevel: Level, playerLevel: Level): number {
  return LEVEL_ORDER[packLevel] - LEVEL_ORDER[playerLevel];
}

/** 结局盘「本局结果」：通关概率按差 */
export function winProb(diff: number): number {
  if (diff <= -2) return 0.85;
  if (diff === -1) return 0.75;
  if (diff === 0) return 0.6;
  if (diff === 1) return 0.4;
  if (diff === 2) return 0.25;
  return 0.15;
}

const RATING_TABLE: Record<'le-1' | '0' | '1' | 'ge2', Record<(typeof RATINGS)[number], number>> = {
  'le-1': { S: 0.15, A: 0.3, B: 0.3, C: 0.17, D: 0.08 },
  '0': { S: 0.08, A: 0.2, B: 0.35, C: 0.25, D: 0.12 },
  '1': { S: 0.04, A: 0.12, B: 0.3, C: 0.32, D: 0.22 },
  ge2: { S: 0.02, A: 0.08, B: 0.25, C: 0.35, D: 0.3 },
};

/** 评价盘「本局评价」：S–D 的概率按差 */
export function ratingProbs(diff: number): Record<(typeof RATINGS)[number], number> {
  if (diff <= -1) return RATING_TABLE['le-1'];
  if (diff === 0) return RATING_TABLE['0'];
  if (diff === 1) return RATING_TABLE['1'];
  return RATING_TABLE.ge2;
}

function round2(x: number): number {
  return Math.round(x * 100) / 100;
}

/** 赔率 = max(1.01, 保留两位小数(1 ÷ 概率 × 0.8 × 浮动))，浮动 = 0.93 + 随机数 × 0.14 */
export function calcOdds(p: number, rand: () => number): number {
  const float = 0.93 + rand() * 0.14;
  return Math.max(1.01, round2((1 / p) * HOUSE * float));
}

/** 兑付金额 = 向下取整(押注 × 赔率)；按分计算，避免 100 × 1.45 算成 144 */
export function payoutOf(stake: number, odds: number): number {
  return Math.floor((stake * Math.round(odds * 100)) / 100);
}

function opt(id: string, label: string, p: number, rand: () => number): MarketOption {
  return { id, label, p, odds: calcOdds(p, rand) };
}

/** 事件盘、庄家怪盘：是 = p，否 = 1 − p */
export function yesNoMarket(kind: 'event' | 'freak', def: MarketDef, rand: () => number): Market {
  const m: Market = {
    id: def.id,
    kind,
    q: def.q,
    options: [opt('yes', def.yes, def.p, rand), opt('no', def.no, round2(1 - def.p), rand)],
    judge: def.judge,
  };
  if (def.judgeNo) m.judgeNo = def.judgeNo;
  if (def.by) m.by = def.by;
  return m;
}

export interface OpenInput {
  pack: Pack;
  playerLevel: Level;
  /** 事件检测来源不是「关闭」：开事件盘 */
  withEvents: boolean;
  rand: () => number;
}

/** 入场确认后开的盘：结局盘、评价盘，以及（检测开着时）本包的事件盘。休整副本不开盘 */
export function openMarkets(inp: OpenInput): Market[] {
  const { pack, rand } = inp;
  if (pack.rest) return [];
  const diff = levelDiff(pack.level, inp.playerLevel);
  const win = winProb(diff);
  const out: Market[] = [
    { id: ENDING_ID, kind: 'ending', q: '本局结果', options: [opt('win', '通关', win, rand), opt('lose', '失败', round2(1 - win), rand)] },
  ];
  const rp = ratingProbs(diff);
  out.push({ id: RATING_ID, kind: 'rating', q: '本局评价', options: RATINGS.map((r) => opt(r, r, rp[r], rand)) });
  if (inp.withEvents) for (const def of packMarkets(pack)) out.push(yesNoMarket('event', def, rand));
  return out;
}

// ───────────── 押注 ─────────────

export interface StakeInput {
  playerLevel: Level;
  stake: number;
  /** 本盘口已押的合计（赌坊为0） */
  already: number;
  /** 当前余额 */
  balance: number;
  /** 本局已到账的直播打赏（副本内不可用；回廊中传0） */
  lockedTips: number;
}

export interface StakeCheck {
  ok: boolean;
  reason?: string;
  /** 单注（单盘累计）上限 */
  cap: number;
  /** 这一次最多还能押多少 */
  max: number;
  /** 押完余额低于斩杀线（只提示，不拦截） */
  belowKill: boolean;
}

/** 可用余额 = 当前余额 − 本局已到账直播打赏（回廊中不扣） */
export function availableBalance(balance: number, lockedTips: number): number {
  return balance - Math.max(0, lockedTips);
}

export function checkStake(i: StakeInput): StakeCheck {
  const cap = STAKE_CAP[i.playerLevel];
  const avail = availableBalance(i.balance, i.lockedTips);
  const max = Math.max(0, Math.min(cap - i.already, avail));
  const stake = i.stake;
  const belowKill = Number.isFinite(stake) && stake > 0 && i.balance - stake < KILL_THRESHOLDS[i.playerLevel];
  let reason: string | undefined;
  if (!Number.isInteger(stake) || stake < MIN_STAKE) reason = `最少押${MIN_STAKE}`;
  else if (i.already + stake > cap) reason = '超过单注上限';
  else if (stake > avail) reason = '可用余额不足';
  return { ok: !reason, reason, cap, max, belowKill };
}

/** 本盘口已押的合计 */
export function stakedOn(book: Book, marketId: string): number {
  return book.tickets.filter((t) => t.market === marketId).reduce((s, t) => s + t.stake, 0);
}

// ───────────── 封盘 ─────────────

/** 会话重放出入场后第2条AI回复（入场消息算第1条）时封盘 */
export function shouldClose(perMessage: Record<number, unknown>, entryIndex: number): boolean {
  return Object.keys(perMessage).map(Number).filter((i) => i >= entryIndex).length >= 2;
}

// ───────────── 开奖 ─────────────

/** 一轮事件检测对盘口的判定 */
export interface RoundCheck {
  index: number;
  /** ok：检测成功且带 markets 字段；miss：跳过、失败、关闭或缺 markets；pending：检测还在进行 */
  state: 'ok' | 'miss' | 'pending';
  hits: Record<string, boolean>;
}

export interface Outcome {
  /** 会话作废（入场消息被删）或被替换：还没开奖的全部退 */
  voided?: boolean;
  ended: boolean;
  endedBy?: 'tag' | 'manual';
  endIndex?: number;
  /** <副本结算> 的结果、评价 */
  result?: string;
  rating?: string;
}

/** 一个盘口的开奖：option = 押这一项的兑、其余废；refund = 全部退；lost = 全部废；null = 待开奖 */
export type MarketResult = { kind: 'option'; option: string; index: number } | { kind: 'refund'; index: number } | { kind: 'lost'; index: number } | null;

export interface ResolveInput {
  markets: Market[];
  /** 入场后每条AI回复的检测情况（按楼层顺序） */
  rounds: RoundCheck[];
  outcome: Outcome;
  /** 各阶段结束于哪一楼（replay 的 phaseEnds） */
  phaseEnds: Record<string, number>;
}

const WIN_RESULTS = ['通关', '成功', '胜利'];
const DEAD_RESULTS = ['死亡', '阵亡'];

export function isDeathResult(result: string | undefined): boolean {
  return DEAD_RESULTS.includes(String(result ?? '').trim());
}

function resolveEnding(o: Outcome): MarketResult {
  if (!o.ended) return null;
  const at = o.endIndex ?? -1;
  if (o.endedBy !== 'tag') return { kind: 'refund', index: at };
  const r = String(o.result ?? '').trim();
  if (DEAD_RESULTS.includes(r)) return { kind: 'lost', index: at };
  if (WIN_RESULTS.includes(r)) return { kind: 'option', option: 'win', index: at };
  if (r === '失败') return { kind: 'option', option: 'lose', index: at };
  return { kind: 'refund', index: at };
}

function resolveRating(o: Outcome): MarketResult {
  if (!o.ended) return null;
  const at = o.endIndex ?? -1;
  if (o.endedBy !== 'tag') return { kind: 'refund', index: at };
  const r = String(o.result ?? '').trim();
  if (DEAD_RESULTS.includes(r)) return { kind: 'lost', index: at };
  const rating = String(o.rating ?? '').trim().toUpperCase();
  if (WIN_RESULTS.includes(r) && (RATINGS as readonly string[]).includes(rating)) return { kind: 'option', option: rating, index: at };
  return { kind: 'refund', index: at };
}

/** 事件盘、庄家怪盘：检测判定 judge 为真 → 「是」；judgeNo 为真 → 「否」；到期未判出按规则处理 */
function resolveYesNo(m: Market, inp: ResolveInput): MarketResult {
  const o = inp.outcome;
  const byEnd = m.by !== undefined ? inp.phaseEnds[m.by] : undefined;
  // 到期：by 阶段结束（在副本结束之前）；否则副本结算或手动结束
  let due: number | undefined;
  if (byEnd !== undefined && (!o.ended || o.endIndex === undefined || byEnd < o.endIndex)) due = byEnd;
  else if (o.ended) due = o.endIndex ?? -1;
  let allOk = true;
  let pending = false;
  let count = 0;
  for (const r of inp.rounds) {
    if (due !== undefined && r.index > due) break;
    // 结算那一楼不做事件检测
    if (o.ended && o.endedBy === 'tag' && r.index === o.endIndex) continue;
    count++;
    if (r.state === 'ok') {
      if (r.hits[m.id] === true) return { kind: 'option', option: 'yes', index: r.index };
      if (m.judgeNo && r.hits[`${m.id}:no`] === true) return { kind: 'option', option: 'no', index: r.index };
    } else {
      allOk = false;
      if (r.state === 'pending') pending = true;
    }
  }
  if (due === undefined) return null;
  const atEnd = o.ended && due === (o.endIndex ?? -1);
  if (atEnd && o.endedBy === 'tag' && isDeathResult(o.result)) return { kind: 'lost', index: due };
  if (atEnd && o.endedBy !== 'tag') return { kind: 'refund', index: due };
  if (pending) return null;
  // 未判出：盘口开着的每一轮都成功检测过 → 「否」兑；否则全部退
  if (allOk && count > 0) return { kind: 'option', option: 'no', index: due };
  return { kind: 'refund', index: due };
}

/** 本局每个盘口的开奖结果 */
export function resolveMarkets(inp: ResolveInput): Record<string, MarketResult> {
  const out: Record<string, MarketResult> = {};
  for (const m of inp.markets) {
    if (inp.outcome.voided) out[m.id] = { kind: 'refund', index: -1 };
    else if (m.kind === 'ending') out[m.id] = resolveEnding(inp.outcome);
    else if (m.kind === 'rating') out[m.id] = resolveRating(inp.outcome);
    else out[m.id] = resolveYesNo(m, inp);
  }
  return out;
}

/** 每张赌票的章：兑 / 废 / 退；待开奖为 null */
export function ticketResults(book: Book, results: Record<string, MarketResult>): Record<string, Resolution | null> {
  const out: Record<string, Resolution | null> = {};
  for (const t of book.tickets) {
    if (book.frozen) {
      out[t.id] = book.frozen[t.id] ?? { stamp: 'refund', index: -1 };
      continue;
    }
    const r = results[t.market];
    if (!r) out[t.id] = null;
    else if (r.kind === 'refund') out[t.id] = { stamp: 'refund', index: r.index };
    else if (r.kind === 'lost') out[t.id] = { stamp: 'lose', index: r.index };
    else out[t.id] = { stamp: t.option === r.option ? 'win' : 'lose', index: r.index };
  }
  return out;
}

/** 会话被替换或作废时定格：已开奖的保留，还没开奖的全部退 */
export function freezeResults(book: Book, results: Record<string, MarketResult>): Record<string, Resolution> {
  const out: Record<string, Resolution> = {};
  const now = ticketResults({ ...book, frozen: undefined }, results);
  for (const t of book.tickets) out[t.id] = now[t.id] ?? { stamp: 'refund', index: -1 };
  return out;
}

/** 从聊天记录取每轮的检测情况：入场之后的每条AI回复；pendingIndex 为检测还在进行的楼 */
export function roundChecks(chat: ChatMessage[], perMessage: Record<number, unknown>, entryIndex: number, pendingIndex = -1): RoundCheck[] {
  return Object.keys(perMessage)
    .map(Number)
    .filter((i) => i > entryIndex && isCountable(chat[i]))
    .sort((a, b) => a - b)
    .map((i) => {
      if (i === pendingIndex) return { index: i, state: 'pending' as const, hits: {} };
      const sub = chat[i]?.extra?.rlzc?.sub as { skipped?: boolean; markets?: Record<string, boolean> } | undefined;
      if (sub && !sub.skipped && sub.markets && typeof sub.markets === 'object') return { index: i, state: 'ok' as const, hits: sub.markets };
      return { index: i, state: 'miss' as const, hits: {} };
    });
}

/** 还没开奖、要交给事件检测判定的事件盘与怪盘；有 judgeNo 的另列一条，id 后加 :no */
export function judgeList(book: Book, results: Record<string, MarketResult>): { id: string; judge: string }[] {
  const out: { id: string; judge: string }[] = [];
  if (book.frozen) return out;
  for (const m of book.markets) {
    if ((m.kind !== 'event' && m.kind !== 'freak') || results[m.id] || !m.judge) continue;
    out.push({ id: m.id, judge: m.judge });
    if (m.judgeNo) out.push({ id: `${m.id}:no`, judge: m.judgeNo });
  }
  return out;
}

// ───────────── 流水 ─────────────

/** 账本条目，pos 为排进时间线的楼层下标（-1 = 放在最后） */
export interface PositionedEntry extends LedgerEntry {
  pos: number;
}

function marketOf(book: Book, id: string): Market | undefined {
  return book.markets.find((m) => m.id === id);
}

function optionLabel(m: Market | undefined, optionId: string): string {
  return m?.options.find((o) => o.id === optionId)?.label ?? optionId;
}

/** 下注流水：「下注·钟楼·本局结果·通关」 */
export function betSource(book: Book, t: Ticket): string {
  const m = marketOf(book, t.market);
  return `下注·${book.packName}·${m?.q ?? t.market}·${optionLabel(m, t.option)}`;
}

/** 一局的流水：每张赌票的下注（不随删楼撤销），以及重放得出的兑付、退还 */
export function bookEntries(book: Book, res: Record<string, Resolution | null>, atOf: (index: number) => string | undefined): PositionedEntry[] {
  const out: PositionedEntry[] = [];
  for (const t of book.tickets) {
    out.push({ delta: -t.stake, source: betSource(book, t), type: 'bet', at: t.at, pos: t.after });
    const r = res[t.id];
    if (!r || r.stamp === 'lose') continue;
    const q = marketOf(book, t.market)?.q ?? t.market;
    const at = (r.index >= 0 ? atOf(r.index) : undefined) ?? t.at;
    if (r.stamp === 'win') out.push({ delta: payoutOf(t.stake, t.odds), source: `赌票兑付·${book.packName}·${q}`, type: 'bet', at, pos: r.index });
    else out.push({ delta: t.stake, source: `赌票退还·${book.packName}·${q}`, type: 'bet', at, pos: r.index });
  }
  return out;
}

// ───────────── 给主AI的一次性提示 ─────────────

export function betLoseHint(stake: number): string {
  return `{{user}}在黑市押了自己本局失败，押注${stake}分。`;
}

export function casinoLossHint(lost: number): string {
  return `{{user}}刚在赌坊输掉${lost}分，余额已低于斩杀线。`;
}

export function casinoWinHint(won: number): string {
  return `{{user}}刚在赌坊一局赢了${won}分。`;
}

// ───────────── chatMetadata.rlzc_market ─────────────

export interface CasinoPlay {
  id: string;
  table: string;
  bet: string;
  /** 押法文字，如「押单」 */
  label: string;
  stake: number;
  win: boolean;
  payout: number;
  /** 净得失：赢为 +(赔付−押注)，输为 −押注 */
  net: number;
  /** 结果文字，如「7下，单」 */
  result: string;
  at: string;
  after: number;
}

export interface MarketMeta {
  books: Record<string, Book>;
  casino: {
    tables: string[];
    /** 摆桌时的回廊标识（最近结束的那一局的会话 id）；变了就重新摆桌 */
    key: string;
    plays: CasinoPlay[];
  };
  /** 待加到下一次正常生成［账户·仅供AI］末尾的一次性提示；after = 记下时的最后一楼 */
  hints: { text: string; after: number }[];
  seq: number;
}

export function normalizeMarketMeta(raw: unknown): MarketMeta {
  const r = (raw && typeof raw === 'object' ? raw : {}) as Partial<MarketMeta>;
  const c = (r.casino ?? {}) as Partial<MarketMeta['casino']>;
  const books: Record<string, Book> = {};
  for (const [k, b] of Object.entries(r.books ?? {})) {
    if (b && typeof b === 'object' && Array.isArray(b.markets)) books[k] = { ...b, tickets: Array.isArray(b.tickets) ? b.tickets : [] };
  }
  return {
    books,
    casino: {
      tables: Array.isArray(c.tables) ? c.tables.filter((x) => typeof x === 'string') : [],
      key: typeof c.key === 'string' ? c.key : '',
      plays: Array.isArray(c.plays) ? c.plays : [],
    },
    hints: Array.isArray(r.hints) ? r.hints.filter((h) => h && typeof h.text === 'string') : [],
    seq: Number.isFinite(r.seq) ? Number(r.seq) : 0,
  };
}
