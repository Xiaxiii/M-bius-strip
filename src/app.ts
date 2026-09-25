/**
 * 扩展的运行时状态与 ST 事件处理。核心计算全部交给 core/ 下的纯函数。
 */
import { reactive } from 'vue';
import type { ChatMessage, ManualAction, Pack, Session, Snapshot } from './packs/types';
import { allPacks, buildGenericPack, findPackByBriefing, validatePack } from './packs/loader';
import { clockAt, replay, isCountable, type Progress } from './core/replay';
import { buildInjection, EMPTY_INJECTION, ALL_KEYS, KEY_PROGRESS, KEY_TOKEN, KEY_TURN, type Injection } from './core/injector';
import { detectBriefing, detectRoles, detectSettlement, detectSkip, resolveSkipTarget } from './core/detector';
import {
  createSession,
  declineKey,
  DECLINED_KEY,
  effectiveRoles,
  greetingEntryCandidate,
  META_KEY,
  MEMO_KEY,
  normalizeSession,
  reconcileSession,
  resolvePack,
} from './core/session';
import { hideTagsInAll, hideTagsInMessage } from './core/hideTags';
import { confirmBox, ctx, getChat, getChatId, getMeta, saveMeta, setPrompt, toast } from './st/context';

export const SETTINGS_KEY = 'rlzc';

export interface Settings {
  depths: { token: number; progress: number; turn: number };
  ball: { x: number | null; y: number | null };
  showBall: boolean;
  debug: boolean;
  customPacks: Pack[];
}

const DEFAULT_SETTINGS: Settings = {
  depths: { token: 4, progress: 4, turn: 0 },
  ball: { x: null, y: null },
  showBall: true,
  debug: false,
  customPacks: [],
};

export type TabId = 'system' | 'docs' | 'memo' | 'settings' | 'debug';

export const state = reactive({
  chatId: '',
  session: null as Session | null,
  pack: null as Pack | null,
  progress: null as Progress | null,
  memo: '',
  settings: structuredClone(DEFAULT_SETTINGS) as Settings,
  packs: [] as Pack[],
  lastInjection: EMPTY_INJECTION as Injection,
  panelOpen: false,
  tab: 'system' as TabId,
  debugUnlocked: false,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
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
  };
  all[SETTINGS_KEY] = merged;
  state.settings = merged;
  state.packs = allPacks(merged.customPacks);
}

export function saveSettings(): void {
  ctx().extensionSettings[SETTINGS_KEY] = JSON.parse(JSON.stringify(state.settings));
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

// ───────────── 会话读写 ─────────────

function readSession(): Session | null {
  return normalizeSession(getMeta()[META_KEY]);
}

function writeSession(session: Session | null): void {
  const meta = getMeta();
  if (session) meta[META_KEY] = JSON.parse(JSON.stringify(session));
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
}

function compute(chat: ChatMessage[], session: Session | null): Computed {
  if (!session) return { session: null, pack: null, progress: null };
  const pack = resolvePack(session, state.packs);
  if (!pack) return { session, pack: null, progress: null };
  return { session, pack, progress: replay(chat, session, pack) };
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
  const { pack, progress } = compute(chat, session);
  const roles = session ? effectiveRoles(session, progress?.rolesFromChat) : undefined;
  const inj = pack ? buildInjection(pack, progress, session, { roles, briefing: session?.briefing, panelLimit: progress?.panel?.limit }) : EMPTY_INJECTION;
  clearInjection();
  const d = state.settings.depths;
  if (inj.token) setPrompt(KEY_TOKEN, inj.token, d.token, true);
  if (inj.progress) setPrompt(KEY_PROGRESS, inj.progress, d.progress, false);
  if (inj.turn) setPrompt(KEY_TURN, inj.turn, d.turn, false);
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
    injectFor(type);
  } catch (e) {
    console.error('[rlzc] 拦截器出错', e);
    clearInjection();
  }
}

// ───────────── 入场与手动操作 ─────────────

const askedEntry = new Set<string>();

/** remember：拒绝时写进聊天元数据，之后加载这个聊天不再询问（用于开场白检查） */
async function askEntry(index: number, remember = false): Promise<void> {
  const chat = getChat();
  const msg = chat[index];
  const info = detectBriefing(msg?.mes ?? '');
  if (!info) return;
  const key = `${getChatId()}:${index}:${info.name}`;
  if (askedEntry.has(key)) return;
  askedEntry.add(key);
  const pack = findPackByBriefing(state.packs, info.name);
  const text = pack
    ? `检测到进入《${pack.name}》，是否启用？`
    : `检测到进入《${info.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!(await confirmBox(text))) {
    if (remember) {
      const meta = getMeta();
      const list: string[] = Array.isArray(meta[DECLINED_KEY]) ? meta[DECLINED_KEY] : [];
      meta[DECLINED_KEY] = [...list.filter((k) => k !== declineKey(index, info.name)), declineKey(index, info.name)];
      saveMeta();
    }
    return;
  }
  // 弹窗期间消息可能已被删改，重新确认
  const now = getChat()[index];
  if (!isCountable(now) || detectBriefing(now.mes)?.name !== info.name) {
    toast('warning', '简报消息已变化，未启用。');
    return;
  }
  startSession(pack ?? buildGenericPack(info), index, info);
}

/**
 * 开场白里的简报：ST 只在新建的单条聊天里对开场白发 MESSAGE_RECEIVED，
 * 切换开场白（滑动）、加载已有聊天、扩展晚于聊天加载时都不会发。
 * 所以在切换/加载聊天、滑动时主动检查第一条AI消息，以它为第1轮。
 */
export function checkGreeting(): void {
  const meta = getMeta();
  const declined = Array.isArray(meta[DECLINED_KEY]) ? (meta[DECLINED_KEY] as string[]) : [];
  const hit = greetingEntryCandidate(getChat(), readSession(), declined);
  if (hit) void askEntry(hit.index, true);
}

/** 滑动的是第一条AI消息（开场白）时检查 */
export function onMessageSwiped(id: number): void {
  refresh();
  const first = getChat().findIndex((m) => isCountable(m));
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

// ───────────── 备忘录 ─────────────

export function setMemo(text: string): void {
  state.memo = text;
  getMeta()[MEMO_KEY] = text;
  saveMeta();
}

// ───────────── 事件 ─────────────

export function onMessageReceived(index: number): void {
  const chat = getChat();
  const msg = chat[index];
  if (!isCountable(msg)) return;
  const session = readSession();

  if ((!session || session.status === 'ended') && detectBriefing(msg.mes)) {
    // 第一条AI消息（通常是开场白）走开场白检查，拒绝会被记住
    if (index === chat.findIndex((m) => isCountable(m))) checkGreeting();
    else void askEntry(index);
    return;
  }
  if (!session) return;

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
    const entry = msg.extra?.rlzc?.entry;
    if (entry) snap.entry = entry;
    msg.extra = msg.extra ?? {};
    // 写进聊天数据的必须是普通对象：ST 会 structuredClone 消息，Vue 的响应式代理无法被克隆
    msg.extra.rlzc = plain(snap);
    saveMeta();
  }
  const s = detectSettlement(msg.mes);
  if (s) toast('info', `副本结算：${s.result ?? '—'}${s.rating ? `，评价 ${s.rating}` : ''}`);
}

export function onChatChanged(): void {
  askedSkip.clear();
  lastInjectionIndex = -1;
  state.chatId = getChatId();
  state.debugUnlocked = false;
  state.lastInjection = EMPTY_INJECTION;
  clearInjection();
  const memo = getMeta()[MEMO_KEY];
  state.memo = typeof memo === 'string' ? memo : '';
  refresh();
  checkGreeting();
  setTimeout(hideTagsInAll, 50);
}

export function onChatMutated(): void {
  refresh();
}

export { hideTagsInMessage, hideTagsInAll };
