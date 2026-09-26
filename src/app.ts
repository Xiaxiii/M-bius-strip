/**
 * 扩展的运行时状态与 ST 事件处理。核心计算全部交给 core/ 下的纯函数。
 */
import { reactive, toRaw } from 'vue';
import type { ChatMessage, Level, ManualAction, Pack, Session, Snapshot } from './packs/types';
import { allPacks, buildGenericPack, genericLevel, validatePack } from './packs/loader';
import { DEFAULT_GENERIC_CAPS, genericTiming, type GenericCaps } from './core/timeLimit';
import { clockAt, replay, isCountable, type Progress } from './core/replay';
import { buildInjection, EMPTY_INJECTION, ALL_KEYS, fillRoles, KEY_PROGRESS, KEY_STATE, KEY_TOKEN, KEY_TURN, KEY_LEDGER, KEY_LIVE, type Injection } from './core/injector';
import { buildDanmakuPrompt, callDanmakuWithRetry, formatLiveInjection, pickSamples, shouldGenAiDanmaku, type AiDanmaku } from './core/liveAi';
import {
  buildSubPrompt,
  callWithRetry,
  classifyError,
  formatState,
  generationKey,
  lastNextChecks,
  latestSubState,
  shouldCallSub,
  subEventsToCheck,
  type SubMessages,
  type SubRecord,
} from './core/subapi';
import { callSub, type SubPreset, type SubSource, type SubTarget } from './st/subTransport';
import { detectBriefing, detectRoles, detectSettlement, detectSkip, resolveSkipTarget, SCORE_TAG_RE } from './core/detector';
import { LEDGER_META_KEY, parseDelta, formatTime, calcSettlementDelta, parseBalanceFromStatusBar, parsePlayerLevelFromStatusBar, computeBalance, isPendingClearance, KILL_THRESHOLDS, formatBalanceInjection, buildFixSentence } from './core/ledger';
import type { LedgerDisplayEntry, LedgerEntry, LedgerMeta } from './packs/types';
import {
  createSession,
  declineKey,
  DECLINED_KEY,
  entryCandidateAt,
  firstEntryCandidate,
  type EntryCandidate,
  effectiveRoles,
  greetingEntryCandidate,
  META_KEY,
  normalizeSession,
  reconcileSession,
  resolvePack,
} from './core/session';
import { HIDDEN_TAGS, hideTagsInAll as hideAllWith, hideTagsInMessage as hideOneWith } from './core/hideTags';
import { auditPanels, type AuditResult } from './core/audit';
import { confirmBox, confirmWithCheck, ctx, getChat, getChatId, getMeta, saveMeta, setPrompt, toast } from './st/context';
import {
  appendLiveTipSentence,
  buildLiveRecord,
  buildLiveView,
  entryLiveOption,
  LIVE_META_KEY,
  liveLedgerEntries,
  liveOf,
  maxFeedId,
  normalizeLiveMeta,
  parseCastNames,
  latestStatusBar,
  playerLevelOf,
  recentFeedTexts,
  showRecords,
  showTipTotal,
  SYS_TEXT,
  type LiveMeta,
  type LiveView,
  type SysItem,
} from './core/liveFlow';
import { calcViewers, type PoolItem, type TemplateItem } from './core/live';
import danmakuPool from './packs/builtin/danmaku_pool.json';
import { notifyLive, releaseAll, scheduleFeed } from './st/liveApi';
import {
  addHint,
  bookEntries,
  briefingText,
  buildFreakPrompt,
  callFreakWithRetry,
  checkStake,
  clearHints,
  freakMarkets,
  freezeResults,
  hintText,
  judgeList,
  MARKET_META_KEY,
  normalizeMarketMeta,
  openMarkets,
  resolveMarkets,
  roundChecks,
  shouldClose,
  stakedOn,
  STAKE_CAP,
  ticketResults,
  type Book,
  type FreakLog,
  type Market,
  type MarketMeta,
  type MarketResult,
  type Outcome,
  type Resolution,
  type RoundCheck,
  type StakeCheck,
  type Ticket,
} from './core/market';
import { casinoSource, ensureTables, playCasino, type CasinoOutcome } from './core/casino';

export const SETTINGS_KEY = 'rlzc';

export interface Settings {
  depths: { token: number; progress: number; turn: number; ledger: number; live: number };
  ball: { x: number | null; y: number | null };
  showBall: boolean;
  debug: boolean;
  customPacks: Pack[];
  /** 副本信息显示位置：panel = 扩展面板（隐藏 <副本>）；statusbar = 正文状态栏（保留 <副本>） */
  panelDisplay: 'panel' | 'statusbar';
  /** 通用副本包按等级的默认轮数上限（CLAUDE.md 12.4） */
  genericCaps: GenericCaps;
  /** 副API「记录员」（CLAUDE.md 14） */
  subApi: SubApiSettings;
  /** 设置页可折叠卡片的展开状态（CLAUDE.md 11.13） */
  cardCollapsed: { depths: boolean; subApi: boolean; genericCaps: boolean; accountFix: boolean; rolesDebug: boolean; live: boolean };
  /** 直播（第三期b） */
  live: LiveSettings;
}

export interface LiveSettings {
  /** 入场弹窗「开启直播」上次的选择 */
  optIn: boolean;
  /** 弹幕传给主AI */
  injectToAI: boolean;
  /** 弹幕来源：本地 / 本地+AI */
  source: 'local' | 'ai';
  /** AI 生成弹幕的频率：每 N 轮 */
  freq: number;
}

export const DEFAULT_LIVE: LiveSettings = { optIn: false, injectToAI: false, source: 'local', freq: 3 };

export interface SubApiSettings {
  /** 关闭 / 跟随主API / 自设API（接口预设） */
  source: SubSource;
  presets: SubPreset[];
  /** 上次用的接口预设 */
  presetId: string;
  /** 省钱模式：只在本轮有注入事件、或下一轮有带条件的事件时调用 */
  saveMode: boolean;
  /** 等待整理：生成下一轮前等本轮整理完成 */
  wait: boolean;
  timeoutSec: number;
}

export const DEFAULT_SUB_API: SubApiSettings = {
  source: 'off',
  presets: [],
  presetId: '',
  saveMode: false,
  wait: true,
  timeoutSec: 60,
};

const DEFAULT_SETTINGS: Settings = {
  depths: { token: 4, progress: 4, turn: 0, ledger: 4, live: 4 },
  ball: { x: null, y: null },
  showBall: true,
  debug: false,
  customPacks: [],
  panelDisplay: 'panel',
  genericCaps: { ...DEFAULT_GENERIC_CAPS },
  subApi: structuredClone(DEFAULT_SUB_API),
  cardCollapsed: { depths: true, subApi: true, genericCaps: true, accountFix: true, rolesDebug: true, live: true },
  live: { ...DEFAULT_LIVE },
};

/** 面板页签（CLAUDE.md 11.9）：「黑市」在 ledger 与 settings 之间（第18节） */
export type TabId = 'system' | 'ledger' | 'market' | 'settings' | 'debug';

export const state = reactive({
  chatId: '',
  session: null as Session | null,
  pack: null as Pack | null,
  progress: null as Progress | null,
  audit: null as AuditResult | null,
  /** 副API正在整理 */
  subBusy: false,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: '',
  settings: structuredClone(DEFAULT_SETTINGS) as Settings,
  packs: [] as Pack[],
  lastInjection: EMPTY_INJECTION as Injection,
  panelOpen: false,
  tab: 'system' as TabId,
  debugUnlocked: false,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: [] as LedgerDisplayEntry[],
  /** 黑市（第四期）：本局盘口、赌票、摆桌 */
  market: emptyMarketView(),
});

/** 去掉 Vue 响应式代理，得到可被 structuredClone 的普通数据 */
function plain<T>(v: T): T {
  return JSON.parse(JSON.stringify(v));
}

function log(...args: unknown[]) {
  if (state.settings.debug) console.log('[rlzc]', ...args);
}

// ───────────── 设置 ─────────────

export function loadSettings(): void {
  const all = ctx().extensionSettings;
  const saved = (all[SETTINGS_KEY] ?? {}) as Partial<Settings>;
  const merged: Settings = {
    ...structuredClone(DEFAULT_SETTINGS),
    ...saved,
    depths: { ...DEFAULT_SETTINGS.depths, ...(saved.depths ?? {}), ledger: (saved.depths as any)?.ledger ?? DEFAULT_SETTINGS.depths.ledger },
    ball: { ...DEFAULT_SETTINGS.ball, ...(saved.ball ?? {}) },
    customPacks: Array.isArray(saved.customPacks) ? saved.customPacks.filter((p) => validatePack(p).length === 0) : [],
    panelDisplay: saved.panelDisplay === 'statusbar' ? 'statusbar' : 'panel',
    genericCaps: { ...DEFAULT_GENERIC_CAPS, ...(saved.genericCaps ?? {}) },
    subApi: {
      ...structuredClone(DEFAULT_SUB_API),
      ...(saved.subApi ?? {}),
      presets: Array.isArray(saved.subApi?.presets) ? saved.subApi!.presets : [],
      // 旧版本里的「酒馆连接配置」来源已删除，按关闭处理
      source: (['off', 'main', 'preset'] as SubSource[]).includes(saved.subApi?.source as SubSource) ? saved.subApi!.source : 'off',
    },
    cardCollapsed: {
      depths: (saved.cardCollapsed as any)?.depths ?? true,
      subApi: (saved.cardCollapsed as any)?.subApi ?? true,
      genericCaps: (saved.cardCollapsed as any)?.genericCaps ?? true,
      accountFix: (saved.cardCollapsed as any)?.accountFix ?? true,
      rolesDebug: (saved.cardCollapsed as any)?.rolesDebug ?? true,
      live: (saved.cardCollapsed as any)?.live ?? true,
    },
    live: normalizeLiveSettings(saved.live),
  };
  all[SETTINGS_KEY] = merged;
  state.settings = merged;
  state.packs = allPacks(merged.customPacks);
}

export function normalizeLiveSettings(raw: Partial<LiveSettings> | undefined): LiveSettings {
  const r = raw ?? {};
  const freq = Math.floor(Number(r.freq));
  return {
    optIn: typeof r.optIn === 'boolean' ? r.optIn : DEFAULT_LIVE.optIn,
    injectToAI: typeof r.injectToAI === 'boolean' ? r.injectToAI : DEFAULT_LIVE.injectToAI,
    source: r.source === 'ai' ? 'ai' : 'local',
    freq: Number.isFinite(freq) ? Math.max(1, Math.min(10, freq)) : DEFAULT_LIVE.freq,
  };
}

export function saveSettings(): void {
  // 存同一个对象（去掉 Vue 代理），ST 保存时会序列化；这样面板与 extensionSettings.rlzc 始终一致
  ctx().extensionSettings[SETTINGS_KEY] = toRaw(state.settings);
  ctx().saveSettingsDebounced();
  state.packs = allPacks(state.settings.customPacks);
}

export function importPack(json: string): string[] {
  let data: unknown;
  try {
    data = JSON.parse(json);
  } catch {
    return ['不是有效的 JSON 文件'];
  }
  const errors = validatePack(data);
  if (errors.length) return errors;
  const pack = data as Pack;
  if (allPacks([]).some((p) => p.id === pack.id)) return [`id「${pack.id}」与内置副本包重复`];
  state.settings.customPacks = [...state.settings.customPacks.filter((p) => p.id !== pack.id), pack];
  saveSettings();
  return [];
}

export function removePack(id: string): void {
  state.settings.customPacks = state.settings.customPacks.filter((p) => p.id !== id);
  saveSettings();
}

// ───────────── 积分账本（第三期） ─────────────

function readLedgerMeta(): LedgerMeta {
  const raw = getMeta()[LEDGER_META_KEY];
  // 旧版平铺数组格式直接丢弃，不迁移
  if (!raw || Array.isArray(raw)) return {};
  return raw as LedgerMeta;
}

function writeLedgerMeta(meta: LedgerMeta): void {
  getMeta()[LEDGER_META_KEY] = meta;
  saveMeta();
}

/** 从聊天记录重放积分流水，删楼/滑动自动回滚；同时追加 LedgerMeta.adjust 手动条目 */
function replayLedger(chat: ChatMessage[]): LedgerDisplayEntry[] {
  // 排序键：楼层、同一楼内先楼层自己的条目，再赌票兑付/退还，最后按先后的下注与赌坊
  const rows: { e: LedgerDisplayEntry; pos: number; g: number; seq: number }[] = [];
  for (let i = 0; i < chat.length; i++) {
    const msg = chat[i];
    if (msg.is_user || msg.is_system) continue;
    const entries = msg.extra?.rlzc?.ledger;
    if (!Array.isArray(entries)) continue;
    for (const e of entries) rows.push({ e: { ...e, mesIndex: i }, pos: i, g: 0, seq: 0 });
  }
  // 黑市：下注、赌坊存在 chatMetadata（不随删楼撤销）；兑付、退还由重放得出
  for (const { pos, seq, ...e } of marketLedgerEntries(chat)) {
    rows.push({ e: { ...e, mesIndex: pos }, pos: pos < 0 ? Number.MAX_SAFE_INTEGER : pos, g: seq === undefined ? 1 : 2, seq: seq ?? 0 });
  }
  rows.sort((a, b) => a.pos - b.pos || a.g - b.g || a.seq - b.seq);
  const result: LedgerDisplayEntry[] = rows.map((r) => r.e);
  // 追加手动调整条目（不绑定楼层，mesIndex = -1）
  const meta = readLedgerMeta();
  for (const a of meta.adjust ?? []) {
    result.push({ delta: a.amount, source: `手动：${a.note}`, type: 'manual', at: a.at, mesIndex: -1 });
  }
  return result;
}

/** 获取初始余额：优先用已保存的 init，否则从最近的 <状态栏> 读取，找不到用 1000 */
export function getInitBalance(chat: ChatMessage[]): { value: number; source: string } {
  const meta = readLedgerMeta();
  if (meta.init != null) return { value: meta.init.value, source: meta.init.source };
  const STATUS_RE_LOCAL = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let i = chat.length - 1; i >= 0; i--) {
    const msg = chat[i];
    if (msg.is_user || !msg.mes) continue;
    const m = STATUS_RE_LOCAL.exec(msg.mes);
    if (!m) continue;
    const val = parseBalanceFromStatusBar(m[1]);
    if (val !== null) {
      const at = formatTime(msg.send_date ?? msg.gen_finished ?? undefined);
      writeLedgerMeta({ ...meta, init: { value: val, source: '状态栏读取', at } });
      return { value: val, source: '状态栏读取' };
    }
  }
  return { value: 1000, source: '默认值' };
}

/** 构建账户注入文本（回廊和副本内都注入；没有任何账本数据时返回空字符串）*/
function buildLedgerInjection(chat: ChatMessage[]): string {
  const meta = readLedgerMeta();
  const hasData = meta.init != null || state.ledger.length > 0;
  if (!hasData) return '';
  const initBal = getInitBalance(chat);
  const balance = computeBalance(initBal.value, state.ledger);
  // 玩家等级：优先 fix.level，其次最近状态栏，找不到按 D（不是副本等级，CLAUDE.md 补正4）
  const STATUS_RE_LI = /<状态栏>([\s\S]*?)<\/状态栏>/;
  let level: Level = 'D';
  const fixLvl = meta.fix?.level;
  if (fixLvl && (['D', 'C', 'B', 'A', 'S'] as string[]).includes(fixLvl)) {
    level = fixLvl as Level;
  } else {
    for (let i = chat.length - 1; i >= 0; i--) {
      if (chat[i].is_user || !chat[i].mes) continue;
      const sm = STATUS_RE_LI.exec(chat[i].mes!);
      if (!sm) continue;
      const pl = parsePlayerLevelFromStatusBar(sm[1]);
      if (pl) { level = pl; break; }
    }
  }
  const threshold = KILL_THRESHOLDS[level];
  const pending = isPendingClearance(initBal.value, state.ledger, threshold);
  const text = formatBalanceInjection(balance, pending, level, threshold);
  // 副本内直播：本局打赏副本内不可使用
  const session = readSession();
  if (session?.status === 'active' && session.live) return appendLiveTipSentence(text, showTipTotal(chat, session.id));
  return text;
}

/** 扫描消息正文里的 <积分变动> 标签与结算奖励，写入该楼快照 */
function processLedgerTags(index: number, allowSettle = true): void {
  const chat = getChat();
  const msg = chat[index];
  if (!msg || msg.is_user) return;
  const text = msg.mes ?? '';
  const at = formatTime(msg.send_date ?? msg.gen_finished ?? undefined);
  const newEntries: LedgerEntry[] = [];
  const re = new RegExp(SCORE_TAG_RE.source, 'g');
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const parsed = parseDelta(m[1]);
    if (!parsed) continue;
    newEntries.push({ delta: parsed.delta, source: parsed.source, type: 'tag', at });
  }
  const settlement = allowSettle ? detectSettlement(text) : null;
  if (settlement && state.pack) {
    // 休整副本（rest: true）不计算结算奖惩（CLAUDE.md 第16节）
    if (!state.pack.rest) {
      const fields: Record<string, string> = {
        结果: settlement.result ?? '',
        评价: settlement.rating ?? '',
        ...settlement.fields,
      };
      // 玩家等级：优先 fix.level，其次结算消息「之前」最近的状态栏，读不到按 D（CLAUDE.md 补正4）
      const meta = readLedgerMeta();
      const STATUS_RE_PL = /<状态栏>([\s\S]*?)<\/状态栏>/;
      let playerLevel: Level = 'D';
      const fixLvl = meta.fix?.level;
      if (fixLvl && (['D', 'C', 'B', 'A', 'S'] as string[]).includes(fixLvl)) {
        playerLevel = fixLvl as Level;
      } else {
        for (let i = index - 1; i >= 0; i--) {
          if (chat[i].is_user || !chat[i].mes) continue;
          const sm = STATUS_RE_PL.exec(chat[i].mes!);
          if (!sm) continue;
          const pl = parsePlayerLevelFromStatusBar(sm[1]);
          if (pl) { playerLevel = pl; break; }
        }
      }
      const initBal = getInitBalance(chat);
      const curBalance = computeBalance(initBal.value, state.ledger);
      // 清算判定用会话里的 clearance 标记（入场确认时写入，CLAUDE.md 补正5）
      const isClearance = !!(state.session?.clearance);
      const settled = calcSettlementDelta(state.pack.level, playerLevel, fields, curBalance, isClearance, state.pack.name);
      if (settled.warn) {
        // 评价缺失：写入快照供调试页警告，delta=0 不记账
        msg.extra = msg.extra ?? {};
        const snap: Snapshot = msg.extra.rlzc ?? { phase: '', round: 0, injected: [] };
        msg.extra.rlzc = plain({ ...snap, settleWarn: settled.warn });
      }
      if (settled.delta !== 0) {
        const entry: LedgerEntry = { delta: settled.delta, source: settled.source, type: 'settle', at };
        // 清算通关流水加 clear: true（CLAUDE.md 补正6）
        if (settled.clearWin) (entry as any).clear = true;
        newEntries.push(entry);
      }
    }
  }
  if (newEntries.length || msg.extra?.rlzc?.ledger?.length) {
    msg.extra = msg.extra ?? {};
    const snap: Snapshot = msg.extra.rlzc ?? { phase: '', round: 0, injected: [] };
    // 直播打赏与撤回（类型 tip）由直播流程写入，这里保留
    const all = [...newEntries, ...(snap.ledger ?? []).filter((e) => e.type === 'tip')];
    msg.extra.rlzc = plain({ ...snap, ledger: all.length ? all : undefined });
    saveMeta();
  }
  state.ledger = replayLedger(getChat());
}

/** 撤销某楼的积分流水（删除该楼快照内的 ledger 字段） */
export function deleteLedgerEntry(mesIndex: number): void {
  const chat = getChat();
  const msg = chat[mesIndex];
  if (!msg?.extra?.rlzc) return;
  msg.extra.rlzc = plain({ ...msg.extra.rlzc, ledger: undefined });
  saveMeta();
  state.ledger = replayLedger(getChat());
}

/** 调试：手动添加一笔积分调整（存入 LedgerMeta.adjust，不绑定具体楼层） */
export function debugAdjustLedger(amount: number, note: string): void {
  const meta = readLedgerMeta();
  const at = formatTime(undefined);
  const adjust = [...(meta.adjust ?? []), { amount, note, at }];
  writeLedgerMeta({ ...meta, adjust });
  // adjust 条目作为一条虚拟流水追加到 state.ledger（mesIndex = -1 标识手动）
  const entry: LedgerDisplayEntry = { delta: amount, source: `手动：${note}`, type: 'manual', at, mesIndex: -1 };
  state.ledger = [...state.ledger, entry];
}

/** 账户校正：追加一笔流水（改动会进流水，标注「手动」；不需要调试模式） */
export function settingsAdjustLedger(amount: number, note: string): void {
  debugAdjustLedger(amount, note);
}

/** 账户校正：修改初始余额（不需要调试模式） */
export function settingsSetInitBalance(value: number): void {
  const meta = readLedgerMeta();
  const at = formatTime(undefined);
  writeLedgerMeta({ ...meta, init: { value, source: '手动设置', at } });
  state.ledger = replayLedger(getChat());
}

/** 账户校正：存一条待生效的等级/位格校正（下一次正常生成时注入一句） */
export function settingsSaveLevelFix(level?: string, rank?: string): void {
  if (!level && !rank) return;
  const meta = readLedgerMeta();
  const chat = getChat();
  const at = formatTime(undefined);
  writeLedgerMeta({ ...meta, fix: { level, rank, at, afterIndex: chat.length - 1 } });
}

/** 调试：修改初始余额 */
export function debugSetInitBalance(value: number): void {
  settingsSetInitBalance(value);
}

// ───────────── 会话读写 ─────────────

function readSession(): Session | null {
  return normalizeSession(getMeta()[META_KEY]);
}

/** 入场拒绝记录：chatMetadata.rlzc.declined（兼容旧版的 chatMetadata.rlzc_declined） */
function readDeclined(): string[] {
  const meta = getMeta();
  const now = Array.isArray(meta[META_KEY]?.declined) ? (meta[META_KEY].declined as string[]) : [];
  const legacy = Array.isArray(meta[DECLINED_KEY]) ? (meta[DECLINED_KEY] as string[]) : [];
  return [...new Set([...legacy, ...now])];
}

function addDeclined(key: string): void {
  const meta = getMeta();
  const declined = [...readDeclined().filter((k) => k !== key), key];
  meta[META_KEY] = { ...(meta[META_KEY] ?? {}), declined };
  saveMeta();
}

/** 写会话时保留拒绝记录；没有会话时 chatMetadata.rlzc 只剩拒绝记录（没有就删除） */
function writeSession(session: Session | null): void {
  const meta = getMeta();
  const declined = readDeclined();
  const extra = declined.length ? { declined } : {};
  if (session) meta[META_KEY] = { ...JSON.parse(JSON.stringify(session)), ...extra };
  else if (declined.length) meta[META_KEY] = extra;
  else delete meta[META_KEY];
  saveMeta();
}

function mutateSession(fn: (s: Session) => void): void {
  const s = readSession();
  if (!s) return;
  fn(s);
  writeSession(s);
  refresh();
}

/** 用于重放的聊天：滑动/继续时，正在被替换或续写的最后一条AI消息不计入 */
function chatForGeneration(type: string | undefined): ChatMessage[] {
  const chat = getChat();
  if ((type === 'swipe' || type === 'continue') && isCountable(chat[chat.length - 1])) return chat.slice(0, -1);
  return chat;
}

interface Computed {
  session: Session | null;
  pack: Pack | null;
  progress: Progress | null;
  audit: AuditResult | null;
}

function compute(chat: ChatMessage[], session: Session | null): Computed {
  if (!session) return { session: null, pack: null, progress: null, audit: null };
  const pack = resolvePack(session, state.packs);
  if (!pack) return { session, pack: null, progress: null, audit: null };
  const progress = replay(chat, session, pack);
  return { session, pack, progress, audit: progress ? auditPanels(chat, pack, progress) : null };
}

/** 重放并刷新面板；同时处理“入场消息被删除 → 会话作废”与结算状态同步 */
export function refresh(): void {
  const chat = getChat();
  let session = readSession();
  if (session) {
    const before = JSON.stringify(session);
    if (!reconcileSession(chat, session)) {
      voidBook(session.id);
      writeSession(null);
      toast('info', '入场消息已不存在，副本会话已作废。');
      session = null;
    } else {
      const c = compute(chat, session);
      if (c.progress) session.status = c.progress.ended ? 'ended' : 'active';
      if (JSON.stringify(session) !== before) writeSession(session);
    }
  }
  const c = compute(chat, session);
  state.session = c.session;
  state.pack = c.pack;
  state.progress = c.progress;
  state.audit = c.audit;
  state.subLine = subStatusLine(chat, c.progress);
  refreshMarket(chat, c.session);
  state.ledger = replayLedger(chat);
  state.tick++;
  notifyLive();
}

export function currentRoles(): Record<string, string> | undefined {
  if (!state.session) return undefined;
  return effectiveRoles(state.session, state.progress?.rolesFromChat);
}

// ───────────── 注入 ─────────────

export function clearInjection(): void {
  for (const key of ALL_KEYS) setPrompt(key, '', 0, false);
}

let lastInjectionIndex = -1;

function injectFor(type: string | undefined): void {
  const chat = chatForGeneration(type);
  const session = readSession();
  const { pack, progress, audit } = compute(chat, session);
  const roles = session ? effectiveRoles(session, progress?.rolesFromChat) : undefined;
  // 副API：当前隐藏状态与上一条消息对本轮带条件事件的预判（关闭时都不用）
  const subOn = subEnabled() && !!progress;
  const subState = subOn ? latestSubState(chat, progress!.entryIndex) : null;
  const inj = pack
    ? buildInjection(pack, progress, session, {
        roles,
        briefing: session?.briefing,
        panelLimit: progress?.panel?.limit,
        audit: audit ?? undefined,
        subNext: subOn ? lastNextChecks(chat, progress!.entryIndex) : undefined,
        stateText: subState ? formatState(pack, subState.state) : undefined,
      })
    : EMPTY_INJECTION;
  clearInjection();
  const d = state.settings.depths;
  if (inj.token) setPrompt(KEY_TOKEN, inj.token, d.token, true);
  if (inj.progress) setPrompt(KEY_PROGRESS, inj.progress, d.progress, false);
  if (inj.turn) setPrompt(KEY_TURN, inj.turn, d.turn, false);
  if (inj.state) setPrompt(KEY_STATE, inj.state, d.progress, false);
  // 积分账本注入（第三期，回廊和副本内都注入；没有任何账本数据时不注入）
  const ledgerMeta = readLedgerMeta();
  let ledgerText = buildLedgerInjection(chat);
  // 账户校正句：待生效的等级/位格校正（CLAUDE.md 甲二.2）
  if (ledgerMeta.fix) {
    const sentence = buildFixSentence(ledgerMeta.fix);
    if (sentence) ledgerText = ledgerText ? `${ledgerText}\n${sentence}` : sentence;
  }
  // 黑市的一次性提示（押自己失败、赌坊输到斩杀线下、一局赢大钱）：加在末尾，收到下一条AI回复后清掉
  const marketMeta = readMarketMeta();
  if (marketMeta.hints.length) {
    const t = marketMeta.hints.map(hintText).join('');
    ledgerText = ledgerText ? `${ledgerText}\n${t}` : t;
    if (marketMeta.hints.some((h) => !h.sent)) {
      marketMeta.hints = marketMeta.hints.map((h) => ({ ...h, sent: true }));
      writeMarketMeta(marketMeta);
    }
  }
  if (ledgerText) setPrompt(KEY_LEDGER, ledgerText, d.ledger, false);
  // 直播：弹幕传给主AI（默认关）；没在播时不注入
  if (state.settings.live.injectToAI) {
    const liveText = formatLiveInjection(liveView(new Set(), chat));
    if (liveText) setPrompt(KEY_LIVE, liveText, d.live, false);
  }
  state.lastInjection = inj;
  lastInjectionIndex = chat.length;
  log('注入', type, inj);
}

const askedSkip = new Set<string>();

/** 用户消息里的跳过关键词：在生成前询问，确认后记为手动跳过操作 */
async function maybeAskSkip(): Promise<void> {
  const chat = getChat();
  const lastIndex = chat.length - 1;
  const last = chat[lastIndex];
  if (!last?.is_user) return;
  const word = detectSkip(last.mes);
  if (!word) return;
  const session = readSession();
  if (!session || session.status !== 'active') return;
  if (session.manual.some((a) => a.kind === 'skip' && a.atIndex === lastIndex)) return;
  const key = `${getChatId()}:${lastIndex}:${last.mes}`;
  if (askedSkip.has(key)) return;
  askedSkip.add(key);
  const { pack, progress } = compute(chat, session);
  if (!pack || !progress || progress.ended) return;
  const target = resolveSkipTarget(pack, progress.phase, progress.round, word);
  if (!target) return;
  if (!(await confirmBox(`是否跳到${word}？（${target.label}）`))) return;
  session.manual.push({ kind: 'skip', atIndex: lastIndex, targetPhase: target.phase, targetRound: target.round });
  writeSession(session);
}

/** 生成前拦截器（manifest.generate_interceptor = rlzcInterceptor） */
export async function interceptor(_chat: unknown[], _contextSize: number, _abort: unknown, type?: string): Promise<void> {
  try {
    if (type === 'quiet' || type === 'impersonate') {
      clearInjection();
      return;
    }
    if (type !== 'continue' && type !== 'swipe' && type !== 'regenerate') await maybeAskSkip();
    await waitForSub(type);
    injectFor(type);
  } catch (e) {
    console.error('[rlzc] 拦截器出错', e);
    clearInjection();
  }
}

// ───────────── 入场与手动操作 ─────────────

const askedEntry = new Set<string>();

/** 找入场消息的起点：聊天开头，或上一个副本结算之后 */
function entrySearchStart(): number {
  const session = readSession();
  if (!session || session.status !== 'ended') return 0;
  const end = state.progress?.endIndex;
  return end !== undefined ? end + 1 : session.entryIndex + 1;
}

/** 弹窗确认入场。点「否」会记入 chatMetadata.rlzc.declined，同一条消息不再询问 */
async function askEntry(cand: EntryCandidate): Promise<void> {
  const { index, info } = cand;
  const chatId = getChatId();
  const key = `${chatId}:${index}:${info.name}`;
  if (askedEntry.has(key)) return;
  askedEntry.add(key);
  const text = cand.pack
    ? `检测到进入《${cand.pack.name}》，是否启用？`
    : `检测到进入《${info.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  // 通用副本也可以直播，只是没有专属弹幕；disableLive 副本不显示勾选框
  const opt = entryLiveOption(cand.pack ?? ({} as Pack), state.settings.live.optIn);
  const answer = await confirmWithCheck(text, opt.show ? { label: '开启直播', checked: opt.checked } : null);
  // 弹窗开着时玩家切到了别的聊天：这次回答不算，也不记拒绝（切回来会再问）
  if (getChatId() !== chatId) {
    askedEntry.delete(key);
    return;
  }
  if (!answer.ok) {
    addDeclined(declineKey(index, info.name));
    return;
  }
  if (opt.show) rememberLiveChoice(answer.checked);
  // 弹窗期间消息可能已被删改，重新确认
  const now = entryCandidateAt(getChat(), index, state.packs);
  if (!now || now.info.name !== info.name) {
    toast('warning', '入场消息已变化，未启用。');
    return;
  }
  // 已收录的副本用副本包自己的数据；简报里有目标、时限等就一并存下
  const briefing = { ...info };
  if (!cand.pack) {
    // 通用副本包：轮数上限在入场时确定并记入会话，之后改设置不影响进行中的副本
    briefing.rounds = genericTiming(info.limit, genericLevel(info), state.settings.genericCaps).rounds;
  }
  startSession(cand.pack ?? buildGenericPack(briefing, state.settings.genericCaps), index, briefing, opt.show && answer.checked);
}

function rememberLiveChoice(checked: boolean): void {
  if (state.settings.live.optIn === checked) return;
  state.settings.live.optIn = checked;
  saveSettings();
}

/**
 * 切换/加载聊天、切换开场白时检查第一条AI消息（ST 在这些时候不会对开场白发 MESSAGE_RECEIVED）。
 * 命中入场信号就弹窗，确认后以它为第1轮。
 */
export function checkGreeting(): void {
  const hit = greetingEntryCandidate(getChat(), readSession(), readDeclined(), state.packs, entrySearchStart());
  if (hit) void askEntry(hit);
}

/** 滑动的是（起点之后的）第一条AI消息（开场白）时检查 */
export function onMessageSwiped(id: number): void {
  refresh();
  const chat = getChat();
  const start = entrySearchStart();
  let first = -1;
  for (let i = start; i < chat.length; i++) if (isCountable(chat[i])) { first = i; break; }
  if (id === first) checkGreeting();
}

function startSession(pack: Pack, entryIndex: number, briefing?: Session['briefing'], live = false): void {
  const chat = getChat();
  const msg = chat[entryIndex];
  // 黑市：上一局的盘口本定格（已开奖的保留，还没开奖的全退）
  const old = readSession();
  if (old) freezeBook(old);
  const session = createSession(pack, entryIndex, briefing);
  // 直播：进入任何副本时回廊直播自动结束；本局是否直播只看入场勾选框（disableLive 副本不直播）
  const lm = readLiveMeta();
  if (lm.corridor.on) {
    lm.corridor.on = false;
    pushSys(lm, lm.corridor.show, SYS_TEXT.enterOff);
  }
  if (live && !pack.disableLive) {
    session.live = true;
    pushSys(lm, session.id, SYS_TEXT.instanceOn);
  }
  writeLiveMeta(lm);
  // 入场确认时判定待清算（CLAUDE.md 补正5）：那一刻账户已标记待清算，就记 clearance: true
  if (!pack.rest) {
    const initBal = getInitBalance(chat);
    const meta = readLedgerMeta();
    const STATUS_RE_CS = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let playerLvl: Level = 'D';
    const fixLvl = meta.fix?.level;
    if (fixLvl && (['D', 'C', 'B', 'A', 'S'] as string[]).includes(fixLvl)) {
      playerLvl = fixLvl as Level;
    } else {
      for (let i = chat.length - 1; i >= 0; i--) {
        if (chat[i].is_user || !chat[i].mes) continue;
        const sm = STATUS_RE_CS.exec(chat[i].mes!);
        if (!sm) continue;
        const pl = parsePlayerLevelFromStatusBar(sm[1]);
        if (pl) { playerLvl = pl; break; }
      }
    }
    if (isPendingClearance(initBal.value, state.ledger, KILL_THRESHOLDS[playerLvl])) {
      session.clearance = true;
    }
  }
  msg.extra = msg.extra ?? {};
  msg.extra.rlzc = { phase: pack.phases[0]?.name ?? '进行中', round: 1, injected: [], entry: session.id } satisfies Snapshot;
  writeSession(session);
  // 黑市：入场确认后开盘（休整副本不开）
  openBook(session, pack, entryIndex);
  refresh();
  if (state.progress) msg.extra.rlzc.injected = plain(state.progress.perMessage[entryIndex]?.events ?? []);
  saveMeta();
  toast('success', `已进入副本《${pack.name}》。`);
}

/** 手动选择副本：以最后一条AI消息作为第1轮 */
export async function startManual(packId: string): Promise<void> {
  const pack = state.packs.find((p) => p.id === packId);
  if (!pack) return;
  const chat = getChat();
  let idx = chat.length - 1;
  while (idx >= 0 && !isCountable(chat[idx])) idx--;
  if (idx < 0) {
    toast('warning', '当前聊天还没有AI消息，无法手动进入副本。');
    return;
  }
  const existing = readSession();
  if (existing?.status === 'active' && !(await confirmBox('当前已有进行中的副本，确定要替换吗？'))) return;
  const opt = entryLiveOption(pack, state.settings.live.optIn);
  const answer = await confirmWithCheck(`以最新一条AI回复作为《${pack.name}》的第1轮，确定进入吗？`, opt.show ? { label: '开启直播', checked: opt.checked } : null);
  if (!answer.ok) return;
  if (opt.show) rememberLiveChoice(answer.checked);
  startSession(pack, idx, detectBriefing(chat[idx].mes) ?? { name: pack.name }, opt.show && answer.checked);
}

function addAction(action: ManualAction): void {
  mutateSession((s) => s.manual.push(action));
}

function lastIndex(): number {
  return getChat().length - 1;
}

/** 系统页“跳过”：跳到本阶段结束 */
export async function skipToPhaseEnd(): Promise<void> {
  const p = state.progress;
  if (!p || p.ended || !state.pack?.phases.length || p.phase.cap <= 0) return;
  if (p.nextRound >= p.phase.cap) {
    toast('info', '已经是本阶段最后一轮，无需跳过。');
    return;
  }
  if (!(await confirmBox(`是否跳到本阶段结束？（${p.phase.name}第${p.phase.cap}轮）`))) return;
  addAction({ kind: 'skip', atIndex: lastIndex(), targetPhase: p.phase.id, targetRound: p.phase.cap });
  toast('info', '已记录跳过，下一次生成开始快进。');
}

export async function endManually(): Promise<void> {
  if (!state.session || state.progress?.ended) return;
  if (!(await confirmBox('确定要手动结束当前副本吗？'))) return;
  if (state.session.live) {
    const lm = readLiveMeta();
    pushSys(lm, state.session.id, SYS_TEXT.instanceOff);
    writeLiveMeta(lm);
  }
  addAction({ kind: 'end', atIndex: lastIndex() });
}

export function debugSetPhase(phaseId: string): void {
  addAction({ kind: 'setPhase', atIndex: lastIndex(), phase: phaseId });
}

export function debugSetRound(round: number): void {
  addAction({ kind: 'setRound', atIndex: lastIndex(), round });
}

export function debugSetRoles(roles: Record<string, string>): void {
  mutateSession((s) => {
    s.roles = Object.fromEntries(Object.entries(roles).filter(([, v]) => v.trim()));
  });
}

export function debugRemoveAction(index: number): void {
  mutateSession((s) => s.manual.splice(index, 1));
}

export async function abandonSession(): Promise<void> {
  if (!state.session) return;
  if (!(await confirmBox('确定要删除当前副本会话吗？（不会改动聊天记录）'))) return;
  voidBook(state.session.id);
  writeSession(null);
  refresh();
}

// ───────────── 副API「记录员」（CLAUDE.md 14）─────────────

export function subEnabled(): boolean {
  return state.settings.subApi.source !== 'off';
}

/** 按当前设置得到发请求的目标；独立接口没选预设时返回 null */
function subTarget(): SubTarget | null {
  const s = state.settings.subApi;
  const timeoutMs = Math.max(5, Number(s.timeoutSec) || 60) * 1000;
  if (s.source === 'main') return { source: 'main', timeoutMs };
  if (s.source === 'preset') {
    const preset = s.presets.find((p) => p.id === s.presetId);
    return preset ? { source: 'preset', preset, timeoutMs } : null;
  }
  return null;
}

function targetLabel(t: SubTarget): string {
  if (t.source === 'main') return '跟随主API';
  return `自设API「${t.preset?.name}」`;
}

/** 系统页的一行小字 */
function subStatusLine(chat: ChatMessage[], progress: Progress | null): string {
  if (!subEnabled() || !progress || progress.ended) return '';
  if (state.subBusy) return '副本记录：整理中…';
  const indices = Object.keys(progress.perMessage).map(Number);
  if (!indices.length) return '';
  const last = Math.max(...indices);
  if (chat[last]?.extra?.rlzc?.sub?.skipped) return `第${progress.perMessage[last].round}轮状态未更新`;
  const latest = latestSubState(chat, progress.entryIndex);
  if (latest && progress.perMessage[latest.index]) return `副本记录：已更新（第${progress.perMessage[latest.index].round}轮）`;
  return '副本记录：尚未整理';
}

interface SubJob {
  key: string;
  index: number;
  promise: Promise<void>;
}

let subJob: SubJob | null = null;
/** 同一轮不重复弹窗、跳过后不再自动重试 */
const subDone = new Set<string>();

function subKey(index: number): string {
  return generationKey(getChatId(), index, getChat()[index]);
}

/** 「整理中」：显示在发送按钮旁 */
function setSubBusy(busy: boolean): void {
  state.subBusy = busy;
  state.subLine = subStatusLine(getChat(), state.progress);
  const id = 'rlzc-sub-busy';
  let el = document.getElementById(id);
  if (busy && state.settings.subApi.wait) {
    const anchor = document.getElementById('rightSendForm');
    if (!el && anchor) {
      el = document.createElement('small');
      el.id = id;
      el.textContent = '整理中…';
      el.title = '回廊种菜系统：正在检测本轮的副本事件';
      // #rightSendForm 里是图标按钮，字号很大；这里用正文字号的八成，手机上不挤占输入框
      el.style.cssText = 'align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;';
      anchor.prepend(el);
    }
  } else el?.remove();
}

/** 把整理结果写进这一楼；这一楼已被删改（滑动、重新生成）时丢弃 */
function writeSub(index: number, key: string, record: SubRecord): void {
  if (subKey(index) !== key) return;
  const msg = getChat()[index];
  if (!msg?.extra?.rlzc) return;
  msg.extra.rlzc = plain({ ...msg.extra.rlzc, sub: record });
  saveMeta();
  refresh();
}

/** 收到AI消息后调用（MESSAGE_RECEIVED）：按设置决定是否整理这一楼 */
function startSub(index: number, type?: string): Promise<void> | null {
  const chat = getChat();
  const progress = state.progress;
  const pack = state.pack;
  const msg = chat[index];
  const rec = progress?.perMessage[index];
  if (!pack || !progress || !rec || !msg) return null;
  const roles = currentRoles();
  const fill = (e: (typeof pack.events)[number]) => ({ ...e, text: fillRoles(e.text, pack, roles), if: e.if ? fillRoles(e.if, pack, roles) : undefined });
  const events = subEventsToCheck(pack, msg.extra?.rlzc?.injected ?? []).map(fill);
  const nextConditional = (progress.next?.events ?? []).filter((e) => e.if).map(fill);
  const call = shouldCallSub({
    enabled: subEnabled(),
    active: !progress.ended && state.session?.status === 'active',
    type,
    saveMode: state.settings.subApi.saveMode,
    hasEvents: events.length > 0,
    hasNextConditional: nextConditional.length > 0,
  });
  if (!call) return null;
  const key = subKey(index);
  if (subDone.has(key)) return null;
  const phase = pack.phases.find((p) => p.id === rec.phase);
  const prev = latestSubState(chat.slice(0, index), progress.entryIndex);
  // 黑市：还没开奖的事件盘、怪盘交给这次检测一并判定（不注入主AI）
  const book = state.session ? readMarketMeta().books[state.session.id] : undefined;
  const raw = buildSubPrompt({
    pack,
    phaseName: phase?.name ?? rec.phase,
    round: rec.round,
    prevState: prev?.state ?? null,
    events,
    nextConditional,
    text: String(msg.mes ?? ''),
    markets: book ? judgeList(book, state.market.results) : [],
  });
  const subst = (ctx() as any).substituteParams as ((t: string) => string) | undefined;
  const messages: SubMessages = subst ? { system: subst(raw.system), user: subst(raw.user) } : raw;
  const promise = runSubJob(index, key, rec.round, messages);
  subJob = { key, index, promise };
  void promise.finally(() => {
    if (subJob?.key === key) subJob = null;
  });
  return promise;
}

async function runSubJob(index: number, key: string, round: number, messages: SubMessages): Promise<void> {
  setSubBusy(true);
  try {
    let retries = 2;
    for (;;) {
      const target = subTarget();
      if (!target) throw new Error('副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设');
      const t0 = Date.now();
      try {
        const result = await callWithRetry((m) => callSub(target, m), messages, retries);
        writeSub(index, key, { ...result, ms: Date.now() - t0, via: targetLabel(target), at: new Date().toISOString() });
        subDone.add(key);
        return;
      } catch (e) {
        if (subKey(index) !== key) return; // 这一楼已经变了，不再处理
        const reason = classifyError(e);
        const detail = String((e as Error)?.message ?? e).slice(0, 200);
        log('副本事件检测失败', reason, e);
        if (!state.settings.subApi.wait) {
          toast('warning', `第${round}轮事件检测失败（${reason}），已沿用上一轮状态。`);
          skipSub(index, key, reason);
          return;
        }
        const choice = await askSubFailure(round, reason, detail);
        if (choice === 'skip') {
          skipSub(index, key, reason);
          return;
        }
        retries = 0; // 玩家点的重试：再调用一次
      }
    }
  } catch (e) {
    toast('error', String((e as Error)?.message ?? e));
    skipSub(index, key, '其他');
  } finally {
    setSubBusy(false);
  }
}

function skipSub(index: number, key: string, reason: string): void {
  subDone.add(key);
  writeSub(index, key, { skipped: true, error: reason, at: new Date().toISOString() });
}

/** 失败弹窗：重试 / 换一个接口（弹窗内出现接口预设下拉框，选定后立即重试）/ 这轮先跳过 */
async function askSubFailure(round: number, reason: string, detail: string): Promise<'retry' | 'skip'> {
  const c = ctx() as any;
  if (!c.Popup || !c.POPUP_TYPE) {
    return window.confirm(`第${round}轮事件检测失败（${reason}）。重试吗？取消则这轮先跳过。`) ? 'retry' : 'skip';
  }
  const s = state.settings.subApi;
  const box = document.createElement('div');
  const title = document.createElement('h3');
  title.textContent = `第${round}轮事件检测失败`;
  const p = document.createElement('p');
  p.textContent = `原因：${reason}`;
  const small = document.createElement('small');
  small.textContent = detail;
  small.style.opacity = '0.7';
  const switchBox = document.createElement('div');
  switchBox.style.cssText = 'display:none;margin-top:10px;';
  const label = document.createElement('label');
  label.textContent = '换成：';
  const select = document.createElement('select');
  select.className = 'text_pole';
  const options: { value: string; text: string }[] = [{ value: '', text: '请选择…' }];
  for (const pr of s.presets) if (!(s.source === 'preset' && pr.id === s.presetId)) options.push({ value: `preset:${pr.id}`, text: `自设API：${pr.name}` });
  if (s.source !== 'main') options.push({ value: 'main', text: '跟随主API' });
  for (const o of options) {
    const opt = document.createElement('option');
    opt.value = o.value;
    opt.textContent = o.text;
    select.append(opt);
  }
  label.append(select);
  switchBox.append(label);
  box.append(title, p, small, switchBox);

  let popup: any;
  select.addEventListener('change', () => {
    const v = select.value;
    if (!v) return;
    if (v === 'main') s.source = 'main';
    else {
      s.source = 'preset';
      s.presetId = v.slice('preset:'.length);
    }
    saveSettings();
    void popup.complete(c.POPUP_RESULT.CUSTOM1);
  });
  popup = new c.Popup(box, c.POPUP_TYPE.TEXT, '', {
    okButton: '重试',
    cancelButton: '这轮先跳过',
    customButtons: [
      {
        text: '换一个接口',
        action: () => {
          switchBox.style.display = '';
          select.focus();
        },
      },
    ],
  });
  const result = await popup.show();
  return result === c.POPUP_RESULT.AFFIRMATIVE || result === c.POPUP_RESULT.CUSTOM1 ? 'retry' : 'skip';
}

/** 开着「等待整理」时，生成下一轮前等本轮整理完成（滑动、重新生成的正是那一楼时不必等） */
async function waitForSub(type?: string): Promise<void> {
  const job = subJob;
  if (!job || !state.settings.subApi.wait) return;
  if ((type === 'swipe' || type === 'regenerate' || type === 'continue') && job.index >= chatForGeneration(type).length) return;
  try {
    await job.promise;
  } catch {
    /* 失败已在任务里处理 */
  }
}

// ───────────── 事件 ─────────────

export function onMessageReceived(index: number, type?: string): void {
  const chat = getChat();
  const msg = chat[index];
  if (!isCountable(msg)) return;
  const session = readSession();

  if (!session || session.status === 'ended') {
    // 这条消息带入场信号时，入场消息取起点之后第一条带信号、没被拒绝过的AI消息
    if (entryCandidateAt(chat, index, state.packs)) {
      const cand = firstEntryCandidate(chat, state.packs, entrySearchStart(), index, readDeclined());
      if (cand) void askEntry(cand);
    }
    if (type === 'first_message') return;
    // 回廊：账本照常记账（<积分变动>），直播照常计算
    refresh();
    processLedgerTags(index, false);
    auditLedgerBalance(index);
    applyLive(index, type);
    clearLevelFix();
    clearMarketHints();
    return;
  }
  // ST 1.19.0 每次打开只有开场白的聊天都会对开场白补发 MESSAGE_RECEIVED（type = first_message）。
  // 开场白不是新生成的回复：不重写它的快照（入场标记、检测记录都在上面），也不调用副本事件检测。
  if (type === 'first_message') return;

  let subPromise: Promise<void> | null = null;
  // 黑市：这一楼的事件检测还没开始，先按「检测中」处理，免得到期的盘口提前按「没检测」开奖
  if (subEnabled()) marketHold = index;
  const roles = detectRoles(msg.mes);
  if (roles) session.roles = { ...(session.roles ?? {}), ...roles };
  writeSession(session);
  refresh();

  const rec = state.progress?.perMessage[index];
  if (rec && state.pack) {
    const phase = state.pack.phases.find((p) => p.id === rec.phase);
    const snap: Snapshot = {
      phase: phase?.name ?? rec.phase,
      round: rec.round,
      injected: lastInjectionIndex === index ? state.lastInjection.injected : rec.events,
    };
    const time = state.pack.time;
    if (time.type === 'clock' && phase?.clock && !phase.night && !phase.frozen) {
      snap.clock = clockAt(time.dayStart, time.minutesPerRound, rec.round);
    }
    // 本楼注入的时限：优先取这次生成实际注入的值，否则用重放算出的值
    const limit =
      lastInjectionIndex === index
        ? state.lastInjection.limit
        : rec.limit?.text
          ? { text: rec.limit.text, minutes: rec.limit.minutes, total: rec.limit.total }
          : undefined;
    if (limit) snap.limit = limit;
    const entry = msg.extra?.rlzc?.entry;
    if (entry) snap.entry = entry;
    if (lastInjectionIndex === index && state.lastInjection.skipped?.length) snap.skippedEvents = state.lastInjection.skipped;
    // 继续（continue）不重新整理，保留这一楼原来的整理结果；也不算新一轮直播
    if (type === 'continue' && msg.extra?.rlzc?.sub) snap.sub = msg.extra.rlzc.sub;
    if (type === 'continue' && msg.extra?.rlzc?.live) snap.live = msg.extra.rlzc.live;
    const tipEntries = (msg.extra?.rlzc?.ledger ?? []).filter((e) => e.type === 'tip');
    if (type === 'continue' && tipEntries.length) snap.ledger = tipEntries;
    msg.extra = msg.extra ?? {};
    // 写进聊天数据的必须是普通对象：ST 会 structuredClone 消息，Vue 的响应式代理无法被克隆
    msg.extra.rlzc = plain(snap);
    saveMeta();
    // 核对要用到刚写入的快照
    refresh();
    subPromise = startSub(index, type);
  }
  if (marketHold >= 0) {
    marketHold = -1;
    if (!subPromise) refresh();
  }
  const s = detectSettlement(msg.mes);
  if (s) toast('info', `副本结算：${s.result ?? '—'}${s.rating ? `，评价 ${s.rating}` : ''}`);

  // 积分账本：扫描本楼的 <积分变动> 标签，并核对状态栏积分
  processLedgerTags(index);
  auditLedgerBalance(index);
  // 直播：有事件检测时等检测结果（精彩度、受伤）出来再算
  if (subPromise) {
    const key = subKey(index);
    void subPromise.then(() => {
      if (subKey(index) === key) applyLive(index, type);
    });
  } else applyLive(index, type);
  clearLevelFix();
  clearMarketHints();
}

/** 账户校正：收到 AI 回复后清除待生效的校正（CLAUDE.md 甲二.2） */
function clearLevelFix(): void {
  const fixMeta = readLedgerMeta();
  if (fixMeta.fix) {
    writeLedgerMeta({ ...fixMeta, fix: undefined });
  }
}

/** 收到AI消息后，核对状态栏积分与账本余额；不一致时在调试页标黄 */
function auditLedgerBalance(index: number): void {
  const chat = getChat();
  const msg = chat[index];
  if (!msg || msg.is_user || !msg.mes) return;
  // 读状态栏积分
  const STATUS_RE = /<状态栏>([\s\S]*?)<\/状态栏>/;
  const m = STATUS_RE.exec(msg.mes);
  if (!m) return;
  const statusBalance = parseBalanceFromStatusBar(m[1]);
  if (statusBalance === null) return;
  // 本楼记账后的余额
  const initBal = getInitBalance(chat);
  // 本楼的直播打赏在回复写完之后才到账，AI 写状态栏时还不知道，不参与核对
  // 赌票兑付、退还也是这一楼写完之后才开奖到账的
  const lateEntry = (e: LedgerDisplayEntry) => e.mesIndex === index && (e.type === 'tip' || (e.type === 'bet' && /^赌票/.test(e.source)));
  const balance = computeBalance(initBal.value, replayLedger(chat).filter((e) => !lateEntry(e)));
  if (statusBalance !== balance) {
    log(`积分核对不符（楼层${index}）：状态栏 ${statusBalance}，账本 ${balance}`);
    // 写入快照的警告字段，调试页据此标黄
    if (msg.extra?.rlzc) {
      msg.extra.rlzc = plain({ ...msg.extra.rlzc, ledgerMismatch: { status: statusBalance, ledger: balance } });
      saveMeta();
    }
  }
}

export function onChatChanged(): void {
  askedSkip.clear();
  askedEntry.clear();
  lastInjectionIndex = -1;
  marketHold = -1;
  state.chatId = getChatId();
  state.debugUnlocked = false;
  state.lastInjection = EMPTY_INJECTION;
  clearInjection();
  releaseAll();
  state.ledger = replayLedger(getChat());
  refresh();
  checkGreeting();
  setTimeout(() => hideTagsInAll(), 50);
}

export function onChatMutated(): void {
  refresh();
}

/** 按「副本信息显示位置」决定要隐藏的标签：正文状态栏模式下保留 <副本> */
export function hiddenTags(): readonly string[] {
  return state.settings.panelDisplay === 'statusbar' ? HIDDEN_TAGS.filter((t) => t !== '副本') : HIDDEN_TAGS;
}

export function hideTagsInMessage(id: number): void {
  hideOneWith(id, hiddenTags());
}

/** force：切换显示位置后，把所有带机器标签的消息按新设置重新渲染 */
export function hideTagsInAll(force = false): void {
  hideAllWith(hiddenTags(), force);
}

export function setPanelDisplay(mode: Settings['panelDisplay']): void {
  if (state.settings.panelDisplay === mode) return;
  state.settings.panelDisplay = mode;
  saveSettings();
  hideTagsInAll(true);
}

// ───────────── 直播（第三期b-第3段）─────────────

const POOL = danmakuPool as unknown as { names: string[]; pool: PoolItem[]; templates: TemplateItem[] };

export function readLiveMeta(): LiveMeta {
  return normalizeLiveMeta(getMeta()[LIVE_META_KEY]);
}

function writeLiveMeta(meta: LiveMeta): void {
  getMeta()[LIVE_META_KEY] = plain(meta);
  saveMeta();
}

/** 系统消息：一句话；id 从当前最大值继续递增 */
function pushSys(meta: LiveMeta, show: string, text: string): void {
  if (!show) return;
  const id = maxFeedId(getChat(), meta) + 1;
  const item: SysItem = { id, t: 'sys', name: '', text, amount: 0, net: 0, show };
  meta.sys = [...meta.sys, item].slice(-100);
  meta.seq = id;
  scheduleFeed([item]);
}

function newShowId(): string {
  return 'c' + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}

/** 这条消息属于哪一场直播；不在播时为 null */
function liveTarget(index: number): { show: string; scope: 'instance' | 'corridor'; pack: Pack | null } | null {
  const session = state.session;
  const progress = state.progress;
  const inInstance = !!session && index > session.entryIndex && (!progress?.ended || (progress.endIndex !== undefined && index <= progress.endIndex));
  if (inInstance) return session!.live && state.pack ? { show: session!.id, scope: 'instance', pack: state.pack } : null;
  const meta = readLiveMeta();
  return meta.corridor.on && meta.corridor.show ? { show: meta.corridor.show, scope: 'corridor', pack: null } : null;
}

/** 每条新AI回复（直播中）：算出精彩度、热度、人数、弹幕、打赏，存进 extra.rlzc.live 并记账 */
export function applyLive(index: number, type?: string): void {
  if (type === 'continue' || type === 'first_message') return;
  const chat = getChat();
  const msg = chat[index];
  if (!isCountable(msg) || liveOf(msg)) return;
  const target = liveTarget(index);
  if (!target) return;
  const meta = readLiveMeta();
  const { show, scope, pack } = target;
  const progress = state.progress;
  const snap: Snapshot = msg.extra?.rlzc ?? { phase: '', round: 0, injected: [] };
  const before = showRecords(chat, show, index);
  const sub = snap.sub && !snap.sub.skipped ? { hype: snap.sub.hype, hurt: snap.sub.hurt } : undefined;
  const settlement = scope === 'instance' && progress?.endIndex === index && progress.endedBy === 'tag' ? detectSettlement(msg.mes) : null;
  const died = !!settlement && ['死亡', '阵亡'].includes(String(settlement.result ?? '').trim());
  const left = progress?.roundsLeft;
  const phaseSwitch = /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(msg.mes ?? ''));
  const eventIds = new Set((pack?.events ?? []).filter((e) => e.kind !== 'directive').map((e) => e.id));
  const rec = buildLiveRecord({
    show,
    scope,
    packLevel: pack?.level ?? null,
    playerLevel: playerLevelOf(chat, index + 1),
    isRest: !!pack?.rest,
    prevHeat: before.length ? before[before.length - 1].rec.heat : null,
    roundsInShow: before.length,
    text: String(msg.mes ?? ''),
    hasEvents: (snap.injected ?? []).some((id) => eventIds.has(id)),
    hasPhaseSwitch: phaseSwitch,
    sub,
    isEnd: scope === 'instance' && !!left && left.y > 0 && left.x < left.y * 0.1,
    phaseId: scope === 'instance' ? progress?.perMessage[index]?.phase : undefined,
    pool: POOL.pool,
    templates: POOL.templates,
    packDanmaku: pack?.danmaku,
    names: POOL.names,
    whoNames: parseCastNames(latestStatusBar(chat, index + 1), String((ctx() as any).name1 ?? '')),
    recentTexts: recentFeedTexts(chat.slice(0, index)),
    firstId: maxFeedId(chat, meta) + 1,
    settle: settlement ? { died, tipsBefore: showTipTotal(chat.slice(0, index), show) } : undefined,
    rand: Math.random,
  });
  // AI 弹幕：每 N 轮一次，关键事件那轮加一次（阶段切换、有人受伤或死亡、注入事件判定已发生）
  const genAi = shouldGenAiDanmaku({
    aiSource: state.settings.live.source === 'ai',
    subOn: subEnabled(),
    roundInShow: before.length + 1,
    freq: state.settings.live.freq,
    phaseSwitch,
    hurt: rec.hurt,
    eventDone: !!snap.sub && !snap.sub.skipped && (snap.sub.events ?? []).some((e) => e.status === 'done'),
  });
  if (genAi) rec.ai = { ok: false, pending: true };
  const at = formatTime(msg.send_date ?? msg.gen_finished ?? undefined);
  const others = (snap.ledger ?? []).filter((e) => e.type !== 'tip');
  const ledger = [...others, ...liveLedgerEntries(rec, at)];
  msg.extra = msg.extra ?? {};
  msg.extra.rlzc = plain({ ...snap, live: rec, ledger: ledger.length ? ledger : undefined });
  meta.seq = Math.max(meta.seq, ...rec.feed.map((f) => f.id));
  writeLiveMeta(meta);
  state.ledger = replayLedger(getChat());
  state.tick++;
  scheduleFeed(rec.feed, true);
  if (genAi) startAiDanmaku(index, rec.scope === 'instance' ? pack?.name : undefined);
}

/**
 * AI 生成弹幕：独立调用，接口跟随「副本事件检测」卡的来源与预设。
 * 输入只有最近两轮AI正文（去掉面板与机器标签）、副本名、在场角色名、风格说明、10条语气示例。
 * 失败重试1次；仍失败不弹窗、不阻塞，这一轮只用本地池，调试页记原因。不受「等检测完再写下一轮」影响。
 */
function startAiDanmaku(index: number, instanceName?: string): void {
  const chat = getChat();
  const key = subKey(index);
  const target = subTarget();
  if (!target) {
    writeAiDanmaku(index, key, [], '副本事件检测没有设置好', 0);
    return;
  }
  const texts: string[] = [];
  for (let i = index; i >= 0 && texts.length < 2; i--) if (isCountable(chat[i])) texts.unshift(String(chat[i].mes ?? ''));
  const raw = buildDanmakuPrompt({
    scene: instanceName ?? '回廊',
    texts,
    cast: parseCastNames(latestStatusBar(chat, index + 1), String((ctx() as any).name1 ?? '')),
    samples: pickSamples(POOL.pool, 10, Math.random),
  });
  const subst = (ctx() as any).substituteParams as ((t: string) => string) | undefined;
  const messages: SubMessages = subst ? { system: subst(raw.system), user: subst(raw.user) } : raw;
  const t0 = Date.now();
  callDanmakuWithRetry((m) => callSub(target, m, { temperature: 0.9 }), messages, 1)
    .then((list) => writeAiDanmaku(index, key, list, null, Date.now() - t0))
    .catch((e) => {
      log('AI 弹幕生成失败', e);
      const detail = String((e as Error)?.message ?? e).slice(0, 120);
      writeAiDanmaku(index, key, [], `${classifyError(e)}：${detail}`, Date.now() - t0);
    });
}

/** 生成的弹幕并入这一轮的弹幕，id 从当前最大值继续递增，一起按节奏放出 */
function writeAiDanmaku(index: number, key: string, list: AiDanmaku[], error: string | null, ms: number): void {
  if (subKey(index) !== key) return; // 这一楼已被删改、滑动
  const chat = getChat();
  const msg = chat[index];
  const rec = liveOf(msg);
  if (!rec || !msg.extra?.rlzc) return;
  const meta = readLiveMeta();
  let id = maxFeedId(chat, meta);
  const items = list.map((d) => ({ id: ++id, t: 'msg' as const, name: d.name, text: d.text, amount: 0, net: 0 }));
  const next = { ...rec, feed: [...rec.feed, ...items], ai: error ? { ok: false, error, ms } : { ok: true, count: items.length, ms } };
  msg.extra.rlzc = plain({ ...msg.extra.rlzc, live: next });
  meta.seq = Math.max(meta.seq, id);
  writeLiveMeta(meta);
  state.tick++;
  if (items.length) scheduleFeed(items);
  else notifyLive();
}

function startViewers(): number {
  const meta = readLiveMeta();
  if (state.session?.status === 'active' && state.pack) {
    return calcViewers({ packLevel: state.pack.level, playerLevel: playerLevelOf(getChat()), isRest: !!state.pack.rest, heat: 20, rand: 1 });
  }
  return meta.corridor.viewers ?? 0;
}

/** RLZC_LIVE.get() */
export function liveView(hidden: ReadonlySet<number>, chat: ChatMessage[] = getChat()): LiveView {
  const session = state.session;
  const inInstance = session?.status === 'active';
  return buildLiveView(
    chat,
    readLiveMeta(),
    {
      inInstance,
      instanceLive: !!(inInstance && session?.live),
      instanceShow: session?.id,
      startViewers: startViewers(),
      injectToAI: state.settings.live.injectToAI,
    },
    hidden,
  );
}

/** RLZC_LIVE.toggle()：回廊中开播/下播；副本内返回 false */
export function toggleCorridorLive(): boolean {
  if (state.session?.status === 'active') return false;
  const meta = readLiveMeta();
  if (meta.corridor.on) {
    meta.corridor.on = false;
    pushSys(meta, meta.corridor.show, SYS_TEXT.corridorOff);
  } else {
    const show = newShowId();
    meta.corridor = {
      on: true,
      show,
      viewers: calcViewers({ packLevel: null, playerLevel: playerLevelOf(getChat()), isRest: false, heat: 20, rand: 0.9 + Math.random() * 0.2 }),
    };
    pushSys(meta, show, SYS_TEXT.corridorOn);
  }
  writeLiveMeta(meta);
  state.tick++;
  notifyLive();
  return true;
}

// ───────────── 黑市（第四期）─────────────

export interface MarketTicketView {
  ticket: Ticket;
  book: Book;
  market?: Market;
  /** 兑 / 废 / 退；待开奖为 null */
  res: Resolution | null;
}

export interface MarketView {
  /** 当前进行中这一局的盘口本（没有副本、休整副本为 null） */
  book: Book | null;
  results: Record<string, MarketResult>;
  /** 本聊天所有赌票，新的在上 */
  tickets: MarketTicketView[];
  /** 待开奖张数 */
  pending: number;
  /** 今晚摆的两张桌 */
  tables: string[];
  /** 赌坊营业：回廊中，或 casino: true 的副本内 */
  casinoOpen: boolean;
}

function emptyMarketView(): MarketView {
  return { book: null, results: {}, tickets: [], pending: 0, tables: [], casinoOpen: true };
}

export function readMarketMeta(): MarketMeta {
  return normalizeMarketMeta(getMeta()[MARKET_META_KEY]);
}

function writeMarketMeta(meta: MarketMeta): void {
  getMeta()[MARKET_META_KEY] = plain(meta);
  saveMeta();
}

/** 收到AI回复时正在处理、事件检测还没开始的那一楼 */
let marketHold = -1;

function pendingChecks(): number[] {
  return [marketHold, subJob?.index ?? -1].filter((i) => i >= 0);
}

/** 玩家等级，取法与账本相同：待生效的校正 → 最近的状态栏 → D */
export function accountLevel(chat: ChatMessage[] = getChat()): Level {
  const fix = readLedgerMeta().fix?.level;
  if (fix && (['D', 'C', 'B', 'A', 'S'] as string[]).includes(fix)) return fix as Level;
  return playerLevelOf(chat);
}

export function accountBalance(chat: ChatMessage[] = getChat()): number {
  return computeBalance(getInitBalance(chat).value, state.ledger);
}

/** 副本内本局已到账的直播打赏（不可用）；回廊中为0 */
function lockedTips(): number {
  const s = readSession();
  return s?.status === 'active' && s.live ? showTipTotal(getChat(), s.id) : 0;
}

/** 一局的开奖：会话还在就按重放；定格了用定格结果；会话已不在（作废）全部退 */
function evalBook(chat: ChatMessage[], book: Book, session: Session | null): { results: Record<string, MarketResult>; tickets: Record<string, Resolution | null>; rounds: RoundCheck[] } {
  if (book.frozen) return { results: {}, tickets: ticketResults(book, {}), rounds: [] };
  let outcome: Outcome = { voided: true, ended: false };
  let rounds: RoundCheck[] = [];
  let phaseEnds: Record<string, number> = {};
  if (session && session.id === book.session) {
    const pack = resolvePack(session, state.packs);
    const progress = pack ? replay(chat, session, pack) : null;
    if (progress) {
      outcome = {
        ended: progress.ended,
        endedBy: progress.endedBy,
        endIndex: progress.endIndex,
        result: progress.settlement?.result,
        rating: progress.settlement?.rating,
      };
      rounds = roundChecks(chat, progress.perMessage, progress.entryIndex, pendingChecks());
      phaseEnds = progress.phaseEnds;
    }
  }
  const results = resolveMarkets({ markets: book.markets, rounds, outcome, phaseEnds });
  return { results, tickets: ticketResults(book, results), rounds };
}

/** 黑市流水：每张赌票的下注、兑付、退还，以及赌坊每局 */
function marketLedgerEntries(chat: ChatMessage[]) {
  const meta = readMarketMeta();
  const session = readSession();
  const atOf = (i: number) => (chat[i] ? formatTime(chat[i].send_date ?? chat[i].gen_finished ?? undefined) : undefined);
  const out = [];
  for (const book of Object.values(meta.books)) out.push(...bookEntries(book, evalBook(chat, book, session).tickets, atOf));
  for (const p of meta.casino.plays) {
    out.push({ delta: p.net, source: casinoSource(p.table, p.label), type: 'bet' as const, at: p.at, pos: p.after, seq: p.seq ?? 0 });
  }
  return out;
}

/** 会话被替换时定格上一局：已开奖的保留，还没开奖的全退 */
function freezeBook(session: Session): void {
  const meta = readMarketMeta();
  const book = meta.books[session.id];
  if (!book || book.frozen) return;
  const chat = getChat();
  const frozen = freezeResults(book, evalBook(chat, book, session).results);
  // 没对应楼层的退还排在定格那一刻、下注之后
  for (const t of book.tickets) if (frozen[t.id].index < 0) frozen[t.id].index = Math.max(chat.length, t.after + 1);
  book.frozen = frozen;
  writeMarketMeta(meta);
}

/** 会话作废（入场消息被删、手动删除会话）：这一局的赌票全部退 */
function voidBook(sessionId: string): void {
  const meta = readMarketMeta();
  const book = meta.books[sessionId];
  if (!book || book.frozen) return;
  const at = getChat().length;
  book.frozen = Object.fromEntries(book.tickets.map((t) => [t.id, { stamp: 'refund' as const, index: Math.max(at, t.after + 1) }]));
  writeMarketMeta(meta);
}

/** 入场确认后开盘：结局盘、评价盘，检测开着时加事件盘，并另发一次调用出庄家怪盘。休整副本不开 */
function openBook(session: Session, pack: Pack, entryIndex: number): void {
  if (pack.rest) return;
  const chat = getChat();
  const withSub = subEnabled();
  const markets = openMarkets({ pack, playerLevel: accountLevel(chat), withEvents: withSub, rand: Math.random });
  if (!markets.length) return;
  const meta = readMarketMeta();
  const book: Book = { session: session.id, packId: pack.id, packName: pack.name, openedAt: formatTime(undefined), markets, tickets: [] };
  if (withSub) book.freak = { status: 'pending' };
  meta.books[session.id] = book;
  writeMarketMeta(meta);
  if (withSub) startFreak(session.id, pack, entryIndex);
}

/**
 * 庄家怪盘：独立调用，接口跟随事件检测卡的来源与预设；不等待、不阻塞。
 * 输入只有副本名、等级、简报原文、副本包 docs 的公开资料；失败重试1次，仍失败这局不开怪盘，不弹窗，调试页记原因。
 */
function startFreak(sessionId: string, pack: Pack, entryIndex: number): void {
  const finish = (log: FreakLog, items?: Parameters<typeof freakMarkets>[0]) => {
    const meta = readMarketMeta();
    const book = meta.books[sessionId];
    if (!book) return; // 已切到别的聊天，或这一局已不在
    if (items && (book.closedAt || book.frozen)) {
      book.freak = { ...log, status: 'late' };
    } else {
      if (items) book.markets = [...book.markets.filter((m) => m.kind !== 'freak'), ...freakMarkets(items, Math.random)];
      book.freak = log;
    }
    writeMarketMeta(meta);
    refresh();
  };
  const target = subTarget();
  if (!target) {
    finish({ status: 'failed', error: '副本事件检测没有设置好' });
    return;
  }
  const raw = buildFreakPrompt({
    name: pack.name,
    level: pack.level,
    briefing: briefingText(String(getChat()[entryIndex]?.mes ?? '')),
    docs: pack.docs,
  });
  const subst = (ctx() as any).substituteParams as ((t: string) => string) | undefined;
  const messages: SubMessages = subst ? { system: subst(raw.system), user: subst(raw.user) } : raw;
  const t0 = Date.now();
  callFreakWithRetry((m) => callSub(target, m), messages, 1)
    .then((items) => finish({ status: 'ok', count: items.length, ms: Date.now() - t0 }, items))
    .catch((e) => {
      log('庄家怪盘出题失败', e);
      const detail = String((e as Error)?.message ?? e).slice(0, 120);
      finish({ status: 'failed', error: `${classifyError(e)}：${detail}`, ms: Date.now() - t0 });
    });
}

/** 开奖提示：已知的赌票章，按聊天记；切换聊天后第一次只记下，不提示 */
const knownStamps = new Map<string, string | null>();
let knownChat: string | null = null;

function notifyStamps(list: MarketTicketView[]): void {
  const chatId = getChatId();
  const init = knownChat !== chatId;
  if (init) knownStamps.clear();
  knownChat = chatId;
  const n = { win: 0, lose: 0, refund: 0 };
  for (const v of list) {
    const now = v.res?.stamp ?? null;
    const had = knownStamps.has(v.ticket.id);
    const prev = knownStamps.get(v.ticket.id);
    knownStamps.set(v.ticket.id, now);
    if (!init && had && now && now !== prev) n[now]++;
  }
  const parts = [n.win ? `兑 ${n.win} 张` : '', n.lose ? `废 ${n.lose} 张` : '', n.refund ? `退 ${n.refund} 张` : ''].filter(Boolean);
  if (parts.length) toast('info', `赌票开奖：${parts.join('，')}。`);
}

/** 重放后刷新黑市：封盘、摆桌、开奖结果、票夹 */
function refreshMarket(chat: ChatMessage[], session: Session | null): void {
  const meta = readMarketMeta();
  let dirty = false;
  const inInstance = session?.status === 'active';
  const book = session ? meta.books[session.id] : undefined;
  // 封盘：重放出入场后第2条AI回复时；之后删楼也不重开
  if (book && !book.closedAt && !book.frozen && state.progress && shouldClose(state.progress.perMessage, state.progress.entryIndex)) {
    book.closedAt = formatTime(undefined);
    dirty = true;
  }
  // 摆桌：回到回廊（最近结束的那一局变了）或没有摆桌记录时重新抽
  const key = inInstance ? meta.casino.key : session?.status === 'ended' ? session.id : '';
  const t = ensureTables(meta.casino, key, Math.random);
  if (t.changed && (!inInstance || meta.casino.tables.length !== 2)) {
    meta.casino.tables = t.tables;
    meta.casino.key = t.key;
    dirty = true;
  }
  if (dirty) writeMarketMeta(meta);

  const tickets: MarketTicketView[] = [];
  let results: Record<string, MarketResult> = {};
  for (const b of Object.values(meta.books)) {
    const ev = evalBook(chat, b, session);
    if (book && b.session === book.session) results = ev.results;
    for (const tk of b.tickets) tickets.push({ ticket: tk, book: b, market: b.markets.find((m) => m.id === tk.market), res: ev.tickets[tk.id] ?? null });
  }
  tickets.sort((a, b) => (b.ticket.seq ?? 0) - (a.ticket.seq ?? 0));
  notifyStamps(tickets);
  state.market = {
    book: inInstance && book ? book : null,
    results,
    tickets,
    pending: tickets.filter((x) => !x.res).length,
    tables: meta.casino.tables,
    casinoOpen: !inInstance || !!state.pack?.casino,
  };
}

/** 盘口下注前的核对（界面显示上限、低于斩杀线用） */
export function marketStakeCheck(marketId: string, stake: number): StakeCheck {
  const chat = getChat();
  const book = state.market.book;
  return checkStake({
    playerLevel: accountLevel(chat),
    stake,
    already: book ? stakedOn(book, marketId) : 0,
    balance: accountBalance(chat),
    lockedTips: lockedTips(),
  });
}

/** 下注：记一笔 −押注（类型 bet，存在 chatMetadata，不随删楼撤销）。返回错误原因，成功为 null */
export function placeBet(marketId: string, optionId: string, stake: number): string | null {
  const session = readSession();
  if (!session || session.status !== 'active') return '没有进行中的副本';
  const meta = readMarketMeta();
  const book = meta.books[session.id];
  if (!book || book.frozen) return '本局没有开盘';
  if (book.closedAt) return '已封盘';
  const market = book.markets.find((m) => m.id === marketId);
  const option = market?.options.find((o) => o.id === optionId);
  if (!market || !option) return '没有这个盘口';
  if (state.market.results[marketId]) return '已开奖';
  const check = marketStakeCheck(marketId, stake);
  if (!check.ok) return check.reason ?? '不能下注';
  const chat = getChat();
  const seq = meta.seq + 1;
  meta.seq = seq;
  book.tickets.push({ id: `t${seq}`, seq, market: marketId, option: optionId, stake, odds: option.odds, at: formatTime(undefined), after: chat.length - 1 });
  // 押了自己本局失败：下一次正常生成时告诉主AI一次
  if (market.kind === 'ending' && optionId === 'lose') meta.hints = addHint(meta.hints, { kind: 'betLose', amount: stake, after: chat.length - 1 });
  writeMarketMeta(meta);
  refresh();
  return null;
}

/** 赌坊下注前的核对 */
export function casinoStakeCheck(stake: number): StakeCheck {
  const chat = getChat();
  return checkStake({ playerLevel: accountLevel(chat), stake, already: 0, balance: accountBalance(chat), lockedTips: lockedTips() });
}

/** 赌坊开一局：即开即结，每局记一行净得失（类型 bet，存在 chatMetadata，不随删楼撤销） */
export function playTable(tableId: string, betId: string, stake: number): { error?: string; outcome?: CasinoOutcome } {
  if (!state.market.casinoOpen) return { error: '赌坊只在回廊营业。' };
  const meta = readMarketMeta();
  if (!meta.casino.tables.includes(tableId)) return { error: '这张桌今晚没开' };
  const check = casinoStakeCheck(stake);
  if (!check.ok) return { error: check.reason };
  const outcome = playCasino(tableId, betId, stake, Math.random);
  if (!outcome) return { error: '没有这种押法' };
  const chat = getChat();
  const level = accountLevel(chat);
  const balance = accountBalance(chat);
  const after = chat.length - 1;
  const seq = meta.seq + 1;
  meta.seq = seq;
  meta.casino.plays = [
    ...meta.casino.plays,
    { id: `g${seq}`, seq, table: tableId, bet: betId, label: outcome.label, stake, win: outcome.win, payout: outcome.payout, net: outcome.net, result: outcome.result, at: formatTime(undefined), after },
  ];
  if (!outcome.win && balance - stake < KILL_THRESHOLDS[level]) meta.hints = addHint(meta.hints, { kind: 'casinoLoss', amount: stake, after });
  if (outcome.win && outcome.net > STAKE_CAP[level] * 5) meta.hints = addHint(meta.hints, { kind: 'casinoWin', amount: outcome.net, after });
  writeMarketMeta(meta);
  refresh();
  return { outcome };
}

/** 收到AI回复：已经加进过注入的一次性提示清掉 */
function clearMarketHints(): void {
  const meta = readMarketMeta();
  if (!meta.hints.length) return;
  const left = clearHints(meta.hints);
  if (left.length === meta.hints.length) return;
  meta.hints = left;
  writeMarketMeta(meta);
}

/** 调试页：每轮检测对盘口的判定 */
export function marketRounds(): RoundCheck[] {
  const session = readSession();
  const book = session ? readMarketMeta().books[session.id] : undefined;
  return book ? evalBook(getChat(), book, session).rounds : [];
}
