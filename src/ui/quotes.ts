// EC 语录库：要加句子，就在对应分类的数组里加一行（用英文引号包住、末尾加逗号），{版本} 会换成当前安装的版本号。

export const QUOTES = {
  /** 有新版本、还没更新时：打开酒馆弹窗与扩展设置里的更新状态 */
  有新版本: [
    '喂喂喂，有新版本啦～（现在是 {版本}）',
    'EC 偷偷改咗少少嘢，bb 嚟更新下啦～（现在是 {版本}）',
    'bb呀，EC叫你嚟更新喇喂～（现在是 {版本}）',
    'EC 又给回廊添了点新东西，bb 快来看看！（现在是 {版本}）',
    '叩叩叩，新版本到啦～（现在是 {版本}）',
  ],
} satisfies Record<string, string[]>;

export type QuoteCategory = keyof typeof QUOTES;

/** 从某个分类里随机挑一句，替换 {版本} 等占位符 */
export function pickQuote(category: QuoteCategory, vars: Record<string, string> = {}, random: () => number = Math.random): string {
  const list: readonly string[] = QUOTES[category];
  const text = list[Math.floor(random() * list.length)] ?? list[0] ?? '';
  return text.replace(/\{([^{}]+)\}/g, (all, key: string) => vars[key] ?? all);
}
