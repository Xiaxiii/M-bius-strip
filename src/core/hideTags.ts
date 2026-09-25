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

/**
 * 重新渲染一条消息的显示内容。
 * force = false：只处理含有待隐藏标签的消息；
 * force = true：凡含有任一机器标签的都按当前设置重渲染（切换设置后恢复先前被隐藏的 <副本>）。
 */
export function hideTagsInMessage(mesId: number, tags: readonly string[] = HIDDEN_TAGS, force = false): void {
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
  const html = format(stripHiddenTags(source, tags), msg.name ?? '', !!msg.is_system, false, mesId);
  if (el.innerHTML !== html) el.innerHTML = html;
}

export function hideTagsInAll(tags: readonly string[] = HIDDEN_TAGS, force = false): void {
  document.querySelectorAll<HTMLElement>('#chat .mes[mesid]').forEach((mes) => {
    const id = Number(mes.getAttribute('mesid'));
    if (Number.isFinite(id)) hideTagsInMessage(id, tags, force);
  });
}
