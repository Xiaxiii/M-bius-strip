import type { ChatMessage } from '../packs/types';
import { isCountable } from './replay';

/**
 * 状态栏格式守护（CLAUDE.md 第20节）。纯函数：判断一条AI回复里是否有且只有一对完整的 <状态栏>……</状态栏>，
 * 能修的（标签名写错、只有开头）给出只改标签的修正文本。
 */

export const OPEN_TAG = '<状态栏>';
export const CLOSE_TAG = '</状态栏>';

export type FormatKind = 'missing' | 'misnamed' | 'unpaired' | 'duplicate';

export const FORMAT_LABEL: Record<FormatKind, string> = {
  missing: '缺失',
  misnamed: '标签名写错',
  unpaired: '不成对',
  duplicate: '多于一对',
};

export interface FormatCheck {
  kind: FormatKind | 'ok';
  /** 问题说明，如「<系统面板>…</系统面板>」「只有开头」 */
  detail?: string;
  /** 能否只改标签修好（标签名写错、只有开头没结尾） */
  fixable?: boolean;
}

/** 快照里的记录（chat[i].extra.rlzc.format） */
export interface FormatRecord {
  kind: FormatKind;
  detail?: string;
  /** 已自动修正 */
  fixed?: boolean;
  /** 修正前的标签 */
  from?: string;
}

/** 本扩展的机器标签：名字不算状态栏的错写 */
const MACHINE_TAGS = new Set(['副本', '阶段切换', '副本结算', '角色登记', '积分变动', '直播']);
/** 常见的错写名字 */
const WRONG_NAMES = new Set(['系统面板', '状态面板', '状态', '面板', '系统状态', '状态信息', '人物状态', '角色状态', '状态条', '状态框', '系统任务状态栏', '任务状态栏', '状态栏位', 'status', 'statusbar', 'status_bar', 'status-bar']);
/** 状态栏里的字段 */
const FIELDS = ['等级', '积分', '位格', '道具', '待清算', '在场'];

function fieldCount(content: string): number {
  return FIELDS.filter((f) => new RegExp(`${f}\\s*[：:]`).test(content)).length;
}

function nameLike(name: string): boolean {
  const n = name.trim().toLowerCase();
  return WRONG_NAMES.has(n) || /状态|面板/.test(n);
}

/** 这个名字包着的内容像不像状态栏：常见错名有一个字段即可，其他中文名要两个字段 */
function statusLike(name: string, content: string): boolean {
  if (MACHINE_TAGS.has(name)) return false;
  const n = fieldCount(content);
  if (nameLike(name)) return n >= 1;
  // 其他名字只认非 ASCII（HTML 标签不算）
  return /[^\x00-\x7f]/.test(name) && n >= 2;
}

function count(text: string, s: string): number {
  return text.split(s).length - 1;
}

interface WrongOpen {
  /** 开头标签原文 */
  open: string;
  start: number;
  /** 结尾标签原文与位置；没有时为 undefined */
  close?: string;
  closeAt?: number;
}

/** 找错写的状态栏：<名字>…</名字>、【名字】…【/名字】、[名字]…[/名字]，或只有开头 */
function findWrong(text: string): WrongOpen | null {
  const openRe = /<([^<>\/\s][^<>\/]{0,11})>|【([^【】\/]{1,12})】|\[([^\[\]\/]{1,12})\]/g;
  let m: RegExpExecArray | null;
  while ((m = openRe.exec(text)) !== null) {
    const name = (m[1] ?? m[2] ?? m[3]).trim();
    if (MACHINE_TAGS.has(name)) continue;
    const after = m.index + m[0].length;
    const closeTok = m[1] !== undefined ? `</${m[1]}>` : m[2] !== undefined ? `【/${m[2]}】` : `[/${m[3]}]`;
    const closeAt = text.indexOf(closeTok, after);
    if (closeAt >= 0) {
      if (statusLike(name, text.slice(after, closeAt))) return { open: m[0], start: m.index, close: closeTok, closeAt };
      continue;
    }
    // 只有开头：内容到 <副本> 或正文末尾；只认像状态栏的名字，免得把随便一个尖括号当成状态栏
    if (nameLike(name) && statusLike(name, text.slice(after, contentEnd(text, after)))) return { open: m[0], start: m.index };
  }
  return null;
}

/** 只有开头时内容结束的位置：开头之后第一个 <副本>，没有就到正文末尾；再往前去掉空白 */
function contentEnd(text: string, from: number): number {
  const at = text.indexOf('<副本>', from);
  let end = at >= 0 ? at : text.length;
  while (end > from && /\s/.test(text[end - 1])) end--;
  return end;
}

/** 在 <状态栏> 之后、内容结束之前找一个错写的结尾（</状态>、</系统面板>、【/状态栏】……） */
function findWrongClose(text: string, from: number): { tok: string; at: number } | null {
  const end = contentEnd(text, from);
  const re = /<\/([^<>\s]{1,12})>|【\/([^【】]{1,12})】|\[\/([^\[\]]{1,12})\]/g;
  re.lastIndex = from;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null && m.index < end) {
    const name = (m[1] ?? m[2] ?? m[3]).trim();
    if (MACHINE_TAGS.has(name)) continue;
    if (nameLike(name)) return { tok: m[0], at: m.index };
  }
  return null;
}

/** 判断一条回复的状态栏格式 */
export function checkStatusBar(text: string): FormatCheck {
  const t = String(text ?? '');
  const opens = count(t, OPEN_TAG);
  const closes = count(t, CLOSE_TAG);
  if (opens === 1 && closes === 1) {
    return t.indexOf(OPEN_TAG) < t.indexOf(CLOSE_TAG) ? { kind: 'ok' } : { kind: 'unpaired', detail: '结尾在开头之前', fixable: false };
  }
  if (opens === 0 && closes === 0) {
    const w = findWrong(t);
    if (!w) return { kind: 'missing' };
    return { kind: 'misnamed', detail: w.close ? `${w.open}…${w.close}` : `${w.open}（没有结尾）`, fixable: true };
  }
  if (opens === closes) return { kind: 'duplicate', detail: `${opens}对`, fixable: false };
  if (opens === 1 && closes === 0) {
    const wc = findWrongClose(t, t.indexOf(OPEN_TAG) + OPEN_TAG.length);
    return { kind: 'unpaired', detail: wc ? `结尾写成了${wc.tok}` : '只有开头', fixable: true };
  }
  if (opens === 0) return { kind: 'unpaired', detail: '只有结尾', fixable: false };
  return { kind: 'unpaired', detail: `开头${opens}个、结尾${closes}个`, fixable: false };
}

/**
 * 只改标签的修正：标签名写错时换成 <状态栏>、</状态栏>；只有开头时在内容结束处补 </状态栏>。
 * 修不了（缺失、只有结尾、多于一对、本来就对）返回 null。内容一个字不动。
 */
export function fixStatusBar(text: string): { text: string; from: string } | null {
  const t = String(text ?? '');
  const check = checkStatusBar(t);
  if (!check.fixable) return null;
  if (check.kind === 'misnamed') {
    const w = findWrong(t)!;
    const afterOpen = w.start + w.open.length;
    if (w.close !== undefined && w.closeAt !== undefined) {
      const out = t.slice(0, w.start) + OPEN_TAG + t.slice(afterOpen, w.closeAt) + CLOSE_TAG + t.slice(w.closeAt + w.close.length);
      return { text: out, from: `${w.open}…${w.close}` };
    }
    const end = contentEnd(t, afterOpen);
    const out = t.slice(0, w.start) + OPEN_TAG + t.slice(afterOpen, end) + '\n' + CLOSE_TAG + t.slice(end);
    return { text: out, from: w.open };
  }
  // 只有开头
  const afterOpen = t.indexOf(OPEN_TAG) + OPEN_TAG.length;
  const wc = findWrongClose(t, afterOpen);
  if (wc) return { text: t.slice(0, wc.at) + CLOSE_TAG + t.slice(wc.at + wc.tok.length), from: `${OPEN_TAG}…${wc.tok}` };
  const end = contentEnd(t, afterOpen);
  return { text: t.slice(0, end) + '\n' + CLOSE_TAG + t.slice(end), from: OPEN_TAG };
}

/** 开场白：前面没有用户消息的AI消息 */
export function isGreeting(chat: ChatMessage[], index: number): boolean {
  for (let i = 0; i < index; i++) if (chat[i]?.is_user) return false;
  return true;
}

/** 「缺失」只在最近用过状态栏时才算问题：往前5条AI回复里有过状态栏（写对写错都算） */
const RECENT = 5;
function usedRecently(chat: ChatMessage[], index: number): boolean {
  let n = 0;
  for (let i = index - 1; i >= 0 && n < RECENT; i--) {
    if (!isCountable(chat[i])) continue;
    n++;
    if (checkStatusBar(chat[i].mes).kind !== 'missing') return true;
  }
  return false;
}

/**
 * 这一楼的状态栏问题（按当前原文重算，删楼、滑动后自然正确）。
 * 开场白、用户消息、系统消息不检查；没问题返回 null。
 */
export function formatProblem(chat: ChatMessage[], index: number): FormatCheck | null {
  const msg = chat[index];
  if (!isCountable(msg) || isGreeting(chat, index)) return null;
  const c = checkStatusBar(msg.mes);
  if (c.kind === 'ok') return null;
  if (c.kind === 'missing' && !usedRecently(chat, index)) return null;
  return c;
}

export const FORMAT_REMINDER =
  '［格式·仅供AI］上一轮的状态栏格式不对。本轮必须在正文末尾完整输出一次<状态栏>……</状态栏>，开头结尾的标签名一字不改，不得写成其他名字。';

/** 即将生成时：上一条AI回复的状态栏有问题才提醒（chat 已去掉滑动/续写中的那一楼） */
export function needFormatReminder(chat: ChatMessage[]): boolean {
  for (let i = chat.length - 1; i >= 0; i--) {
    if (!isCountable(chat[i])) continue;
    return formatProblem(chat, i) !== null;
  }
  return false;
}

/** 调试页：有问题或自动修正过的楼层（新到旧） */
export interface FormatRow {
  index: number;
  kind: FormatKind;
  detail?: string;
  fixed: boolean;
  from?: string;
}

export function formatRows(chat: ChatMessage[], limit = 60): FormatRow[] {
  const rows: FormatRow[] = [];
  for (let i = chat.length - 1; i >= 0 && rows.length < limit; i--) {
    const rec = chat[i]?.extra?.rlzc?.format as FormatRecord | undefined;
    const now = formatProblem(chat, i);
    if (now) rows.push({ index: i, kind: now.kind as FormatKind, detail: now.detail, fixed: false });
    else if (rec?.fixed && isCountable(chat[i])) rows.push({ index: i, kind: rec.kind, detail: rec.detail, fixed: true, from: rec.from });
  }
  return rows;
}
