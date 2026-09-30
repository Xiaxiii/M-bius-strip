/**
 * 正文显示时隐藏机器标签（CLAUDE.md 5.5）。只改显示，不改消息原文（原文是重放的依据）。
 *
 * ST 渲染时会把 <副本> 这类中文标签的开头转义成文本、结尾直接吞掉，渲染后的 HTML 里
 * 已经找不到完整的标签块。所以这里从原文去掉标签块，再用 ST 自己的 messageFormatting
 * 重新渲染这条消息的显示内容（用户的正则仍会照常作用于剩下的文本）。
 * 只处理下列标签；<状态栏> 等其他内容一律不动。
 */
import { ctx, getChat } from '../st/context';

export const HIDDEN_TAGS = ['阶段切换', '副本结算', '副本', '角色登记', '积分变动'] as const;
export type HiddenTag = (typeof HIDDEN_TAGS)[number];

function tagRe(tags: readonly string[], flags: string): RegExp {
  return new RegExp(`<(${tags.join('|')})>[\\s\\S]*?<\\/\\1>`, flags);
}

/** 纯函数：从原文中去掉指定的标签块，并收掉因此多出来的空行 */
export function stripHiddenTags(text: string, tags: readonly string[] = HIDDEN_TAGS): string {
  if (!tags.length) return text;
  return text.replace(tagRe(tags, 'g'), '').replace(/\n{3,}/g, '\n\n').trim();
}

/** 本扩展改写过的 .mes_text 开头放一个注释记号，内容是这次改写的指纹；ST 重新渲染这一楼时会连同记号一起替换掉 */
const MARK = 'rlzc-hide:';

function fingerprint(text: string): string {
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

function markOf(el: HTMLElement): string | null {
  const first = el.firstChild;
  return first && first.nodeType === Node.COMMENT_NODE && (first as Comment).data.startsWith(MARK)
    ? (first as Comment).data.slice(MARK.length)
    : null;
}

/** 酒馆助手已经把这一楼的代码块渲染成界面（普通渲染的 div.TH-render / iframe，流式渲染挂在旁边的 .TH-streaming） */
function renderedByHelper(el: HTMLElement): boolean {
  if (el.querySelector('.TH-render, iframe')) return true;
  return !!el.parentElement && Array.from(el.parentElement.children).some((c) => c.classList.contains('TH-streaming'));
}

type RefreshOne = (id: number) => Promise<void> | void;

/** 酒馆助手的「按原文重渲染一楼」接口：重写 .mes_text 后发 CHARACTER_MESSAGE_RENDERED，它自己在这个事件里重新渲染界面 */
function helperRefresh(): RefreshOne | null {
  const fn = (globalThis as any).TavernHelper?.refreshOneMessage;
  return typeof fn === 'function' ? fn : null;
}

/** 正在由酒馆助手重渲染的楼层：期间再次进入时只改写，不再请它重渲染，避免来回触发 */
const refreshing = new Set<number>();

/**
 * 重新渲染一条消息的显示内容。
 * force = false：只处理含有待隐藏标签的消息；
 * force = true：凡含有任一机器标签的都按当前设置重渲染（切换设置后恢复先前被隐藏的 <副本>）。
 * helperNext = true：在排在酒馆助手之前的事件里调用，它随后会重新扫描这一楼，直接改写即可。
 *
 * 与酒馆助手共存：它在 CHARACTER_MESSAGE_RENDERED 等事件里把代码块渲染成界面，之后不会再看这一楼。
 * 所以这些事件里本函数注册在最前面先执行；万一执行时界面已经渲染好了：
 *  - 去掉标签前后显示内容相同（标签都在状态栏正则替换的范围内）→ 不动；
 *  - 确实要改 → 请酒馆助手按原文重渲染这一楼，它发出的事件里再由本函数先改写。
 */
export function hideTagsInMessage(
  mesId: number,
  tags: readonly string[] = HIDDEN_TAGS,
  force = false,
  helperNext = false,
): void {
  const msg = getChat()[mesId];
  if (!msg || msg.is_user) return;
  const source = String(msg.extra?.display_text ?? msg.mes ?? '');
  if (!tagRe(force ? HIDDEN_TAGS : tags, '').test(source)) return;
  const el = document.querySelector<HTMLElement>(`#chat .mes[mesid="${mesId}"] .mes_text`);
  if (!el) return;
  const format = (ctx() as any).messageFormatting as
    | ((mes: string, name: string, isSystem: boolean, isUser: boolean, id: number) => string)
    | undefined;
  if (typeof format !== 'function') return;
  const stripped = stripHiddenTags(source, tags);
  const key = fingerprint(`${tags.join('|')}\n${stripped}`);
  const mark = markOf(el);
  // 已按同样的原文和设置改写过（之后酒馆助手可能已在其上渲染）：不再覆盖
  if (mark === key) return;
  const html = format(stripped, msg.name ?? '', !!msg.is_system, false, mesId);
  if (!helperNext && renderedByHelper(el)) {
    // 当前显示是 ST 按原文渲染的，且去掉标签后显示不变：界面保持原样
    if (mark === null && format(source, msg.name ?? '', !!msg.is_system, false, mesId) === html) return;
    const refresh = helperRefresh();
    if (refresh && !refreshing.has(mesId)) {
      refreshing.add(mesId);
      Promise.resolve()
        .then(() => refresh(mesId))
        .catch((e) => console.warn('[rlzc] 请酒馆助手重渲染消息失败', mesId, e))
        .finally(() => refreshing.delete(mesId));
      return;
    }
  }
  el.innerHTML = `<!--${MARK}${key}-->${html}`;
}

export function hideTagsInAll(tags: readonly string[] = HIDDEN_TAGS, force = false, helperNext = false): void {
  document.querySelectorAll<HTMLElement>('#chat .mes[mesid]').forEach((mes) => {
    const id = Number(mes.getAttribute('mesid'));
    if (Number.isFinite(id)) hideTagsInMessage(id, tags, force, helperNext);
  });
}
