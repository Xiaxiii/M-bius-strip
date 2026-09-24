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

const TAG_RE = new RegExp(`<(${HIDDEN_TAGS.join('|')})>[\\s\\S]*?<\\/\\1>`, 'g');
const HAS_TAG_RE = new RegExp(`<(${HIDDEN_TAGS.join('|')})>`);

/** 纯函数：从原文中去掉被隐藏的标签块，并收掉因此多出来的空行 */
export function stripHiddenTags(text: string): string {
  return text.replace(TAG_RE, '').replace(/\n{3,}/g, '\n\n').trim();
}

export function hideTagsInMessage(mesId: number): void {
  const msg = getChat()[mesId];
  if (!msg || msg.is_user) return;
  const source = String(msg.extra?.display_text ?? msg.mes ?? '');
  if (!HAS_TAG_RE.test(source)) return;
  const el = document.querySelector<HTMLElement>(`#chat .mes[mesid="${mesId}"] .mes_text`);
  if (!el) return;
  const format = (ctx() as any).messageFormatting as
    | ((mes: string, name: string, isSystem: boolean, isUser: boolean, id: number) => string)
    | undefined;
  if (typeof format !== 'function') return;
  const html = format(stripHiddenTags(source), msg.name ?? '', !!msg.is_system, false, mesId);
  if (el.innerHTML !== html) el.innerHTML = html;
}

export function hideTagsInAll(): void {
  document.querySelectorAll<HTMLElement>('#chat .mes[mesid]').forEach((mes) => {
    const id = Number(mes.getAttribute('mesid'));
    if (Number.isFinite(id)) hideTagsInMessage(id);
  });
}
