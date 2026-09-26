/**
 * 扩展的运行时状态与 ST 事件处理。核心计算全部交给 core/ 下的纯函数。
 */
import { reactive, toRaw } from 'vue';
import type { ChatMessage, ManualAction, Pack, Session, Snapshot } from './packs/types';
import { allPacks, buildGenericPack, genericLevel, validatePack } from './packs/loader';
import { DEFAULT_GENERIC_CAPS, genericTiming, type GenericCaps } from './core/timeLimit';
import { clockAt, replay, isCountable, type Progress } from './core/replay';
import { buildInjection, EMPTY_INJECTION, ALL_KEYS, fillRoles, KEY_PROGRESS, KEY_STATE, KEY_TOKEN, KEY_TURN, KEY_BALANCE, type Injection } from './core/injector';
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
import { LEDGER_META_KEY, parseDelta, formatTime, calcSettlementDelta, parseBalanceFromStatusBar, computeBalance, formatBalanceInjection, isPendingClearance, KILL_THRESHOLDS } from './core/ledger';
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
import { confirmBox, ctx, getChat, getChatId, getMeta, saveMeta, setPrompt, toast } from './st/context';

export const SETTINGS_KEY = 'rlzc';

export interface Settings {
  depths: { token: number; progress: number; turn: number };
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
}

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
  depths: { token: 4, progress: 4, turn: 0 },
  ball: { x: null, y: null },
  showBall: true,
  debug: false,
  customPacks: [],
  panelDisplay: 'panel',
  genericCaps: { ...DEFAULT_GENERIC_CAPS },
  subApi: structuredClone(DEFAULT_SUB_API),
};

/** 面板页签（CLAUDE.md 11.9）：第四期「黑市」以后加在 ledger 与 settings 之间 */
export type TabId = 'system' | 'ledger' | 'settings' | 'debug';

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
    depths: { ...DEFAULT_SETTINGS.depths, ...(saved.depths ?? {}) },
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
  };
  all[SETTINGS_KEY] = merged;
  state.settings = merged;
  state.packs = allPacks(merged.customPacks);
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

/** 从聊天记录重放积分流水，删楼/滑动自动回滚 */
function replayLedger(chat: ChatMessage[]): LedgerDisplayEntry[] {
  const result: LedgerDisplayEntry[] = [];
  for (let i = 0; i < chat.length; i++) {
    const msg = chat[i];
    if (msg.is_user || msg.is_system) continue;
    const entries = msg.extra?.rlzc?.ledger;
    if (!Array.isArray(entries)) continue;
    for (const e of entries) result.push({ ...e, mesIndex: i });
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

/** 扫描消息正文里的 <积分变动> 标签与结算奖励，写入该楼快照 */
function processLedgerTags(index: number): void {
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
  const settlement = detectSettlement(text);
  if (settlement && state.pack) {
    const fields: Record<string, string> = {
      结果: settlement.result ?? '',
      评价: settlement.rating ?? '',
      ...settlement.fields,
    };
    const delta = calcSettlementDelta(state.pack.level, fields);
    if (delta !== 0) {
      const ratingStr = settlement.rating ? `·${settlement.rating}` : '';
      newEntries.push({ delta, source: `副本结算·${settlement.result ?? ''}${ratingStr}`, type: 'settle', at });
    }
  }
  if (newEntries.length || msg.extra?.rlzc?.ledger?.length) {
    msg.extra = msg.extra ?? {};
    const snap: Snapshot = msg.extra.rlzc ?? { phase: '', round: 0, injected: [] };
    msg.extra.rlzc = plain({ ...snap, ledger: newEntries.length ? newEntries : undefined });
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
  state.tick++;
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
  // 积分余额注入（第三期，副本进行中时注入）
  if (pack && session?.status === 'active') {
    const initBal = getInitBalance(chat);
    const balance = computeBalance(initBal.value, state.ledger);
    const level = pack.level;
    const pending = isPendingClearance(initBal.value, state.ledger, KILL_THRESHOLDS[level]);
    setPrompt(KEY_BALANCE, formatBalanceInjection(balance, pending), d.progress, false);
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
  const key = `${getChatId()}:${index}:${info.name}`;
  if (askedEntry.has(key)) return;
  askedEntry.add(key);
  const text = cand.pack
    ? `检测到进入《${cand.pack.name}》，是否启用？`
    : `检测到进入《${info.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!(await confirmBox(text))) {
    addDeclined(declineKey(index, info.name));
    return;
  }
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
  startSession(cand.pack ?? buildGenericPack(briefing, state.settings.genericCaps), index, briefing);
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

function startSession(pack: Pack, entryIndex: number, briefing?: Session['briefing']): void {
  const chat = getChat();
  const msg = chat[entryIndex];
  const session = createSession(pack, entryIndex, briefing);
  msg.extra = msg.extra ?? {};
  msg.extra.rlzc = { phase: pack.phases[0]?.name ?? '进行中', round: 1, injected: [], entry: session.id } satisfies Snapshot;
  writeSession(session);
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
  if (!(await confirmBox(`以最新一条AI回复作为《${pack.name}》的第1轮，确定进入吗？`))) return;
  startSession(pack, idx, detectBriefing(chat[idx].mes) ?? { name: pack.name });
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
function startSub(index: number, type?: string): void {
  const chat = getChat();
  const progress = state.progress;
  const pack = state.pack;
  const msg = chat[index];
  const rec = progress?.perMessage[index];
  if (!pack || !progress || !rec || !msg) return;
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
  if (!call) return;
  const key = subKey(index);
  if (subDone.has(key)) return;
  const phase = pack.phases.find((p) => p.id === rec.phase);
  const prev = latestSubState(chat.slice(0, index), progress.entryIndex);
  const raw = buildSubPrompt({
    pack,
    phaseName: phase?.name ?? rec.phase,
    round: rec.round,
    prevState: prev?.state ?? null,
    events,
    nextConditional,
    text: String(msg.mes ?? ''),
  });
  const subst = (ctx() as any).substituteParams as ((t: string) => string) | undefined;
  const messages: SubMessages = subst ? { system: subst(raw.system), user: subst(raw.user) } : raw;
  const promise = runSubJob(index, key, rec.round, messages);
  subJob = { key, index, promise };
  void promise.finally(() => {
    if (subJob?.key === key) subJob = null;
  });
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
    return;
  }
  // ST 1.19.0 每次打开只有开场白的聊天都会对开场白补发 MESSAGE_RECEIVED（type = first_message）。
  // 开场白不是新生成的回复：不重写它的快照（入场标记、检测记录都在上面），也不调用副本事件检测。
  if (type === 'first_message') return;

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
    // 继续（continue）不重新整理，保留这一楼原来的整理结果
    if (type === 'continue' && msg.extra?.rlzc?.sub) snap.sub = msg.extra.rlzc.sub;
    msg.extra = msg.extra ?? {};
    // 写进聊天数据的必须是普通对象：ST 会 structuredClone 消息，Vue 的响应式代理无法被克隆
    msg.extra.rlzc = plain(snap);
    saveMeta();
    // 核对要用到刚写入的快照
    refresh();
    startSub(index, type);
  }
  const s = detectSettlement(msg.mes);
  if (s) toast('info', `副本结算：${s.result ?? '—'}${s.rating ? `，评价 ${s.rating}` : ''}`);

  // 积分账本：扫描本楼的 <积分变动> 标签
  processLedgerTags(index);
}

export function onChatChanged(): void {
  askedSkip.clear();
  askedEntry.clear();
  lastInjectionIndex = -1;
  state.chatId = getChatId();
  state.debugUnlocked = false;
  state.lastInjection = EMPTY_INJECTION;
  clearInjection();
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
