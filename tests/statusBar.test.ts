/** 状态栏格式守护（CLAUDE.md 第20节）：判断、修正、提醒 */
import { describe, expect, it } from 'vitest';
import { checkStatusBar, fixStatusBar, formatProblem, formatRows, needFormatReminder, CLOSE_TAG, OPEN_TAG } from '../src/core/statusBar';
import type { ChatMessage } from '../src/packs/types';

const BODY = ['地点：回廊·休息室', '{{user}}：', '等级：C', '位格：候补', '积分：1,200', '待清算：无', '在场：林默、周遥'].join('\n');
const PANEL = ['<副本>', '副本名：钟楼', '时限：至第四日日出·剩余3夜', '进度条：10%', '</副本>'].join('\n');
const STORY = '钟声响过三下，走廊里没有人。';
const good = `${STORY}\n\n<状态栏>\n${BODY}\n</状态栏>`;

/** 取 <状态栏> 和 </状态栏> 之间的内容 */
function inner(text: string): string {
  const a = text.indexOf(OPEN_TAG) + OPEN_TAG.length;
  return text.slice(a, text.indexOf(CLOSE_TAG, a));
}

describe('checkStatusBar：三类问题', () => {
  it('有且只有一对完整的 <状态栏> 时没问题', () => {
    expect(checkStatusBar(good).kind).toBe('ok');
    expect(checkStatusBar(`${STORY}\n\n${PANEL}\n<状态栏>\n${BODY}\n</状态栏>`).kind).toBe('ok');
  });

  it('完全没有：缺失', () => {
    expect(checkStatusBar(STORY).kind).toBe('missing');
    expect(checkStatusBar(`${STORY}\n${PANEL}`).kind).toBe('missing');
  });

  it.each([
    ['<系统面板>', '</系统面板>'],
    ['<状态面板>', '</状态面板>'],
    ['<状态>', '</状态>'],
    ['【状态栏】', '【/状态栏】'],
    ['[状态栏]', '[/状态栏]'],
    ['<人物面板>', '</人物面板>'],
  ])('标签名写错：%s…%s', (open, close) => {
    const c = checkStatusBar(`${STORY}\n\n${open}\n${BODY}\n${close}`);
    expect(c.kind).toBe('misnamed');
    expect(c.fixable).toBe(true);
    expect(c.detail).toContain(open);
  });

  it('错写的标签里没有状态栏字段时不算状态栏', () => {
    expect(checkStatusBar(`${STORY}\n<状态>警惕</状态>`).kind).toBe('missing');
    expect(checkStatusBar(`${STORY}\n<备注>等级：C</备注>`).kind).toBe('missing');
    // 机器标签不当成状态栏
    expect(checkStatusBar(`${STORY}\n<角色登记>死者=江临｜等级：C｜积分：3</角色登记>`).kind).toBe('missing');
  });

  it('其他中文名要有两个以上字段', () => {
    expect(checkStatusBar(`${STORY}\n<玩家信息>\n等级：C\n积分：100\n</玩家信息>`).kind).toBe('misnamed');
  });

  it('有开头没结尾、有结尾没开头：不成对', () => {
    const openOnly = checkStatusBar(`${STORY}\n<状态栏>\n${BODY}`);
    expect(openOnly).toMatchObject({ kind: 'unpaired', detail: '只有开头', fixable: true });
    const closeOnly = checkStatusBar(`${STORY}\n${BODY}\n</状态栏>`);
    expect(closeOnly).toMatchObject({ kind: 'unpaired', detail: '只有结尾', fixable: false });
    expect(checkStatusBar(`${STORY}\n</状态栏>\n${BODY}\n<状态栏>`).kind).toBe('unpaired');
  });

  it('两对：多于一对', () => {
    expect(checkStatusBar(`${good}\n${good}`).kind).toBe('duplicate');
  });
});

describe('fixStatusBar：只改标签', () => {
  it.each([
    ['<系统面板>', '</系统面板>'],
    ['<状态面板>', '</状态面板>'],
    ['<状态>', '</状态>'],
    ['【状态栏】', '【/状态栏】'],
    ['<系统任务状态栏>', '</系统任务状态栏>'],
  ])('%s…%s 换成 <状态栏>…</状态栏>，内容不动', (open, close) => {
    const text = `${STORY}\n\n${open}\n${BODY}\n${close}\n\n${PANEL}`;
    const r = fixStatusBar(text)!;
    expect(r.from).toBe(`${open}…${close}`);
    expect(checkStatusBar(r.text).kind).toBe('ok');
    expect(inner(r.text)).toBe(`\n${BODY}\n`);
    // 标签以外的部分一个字不差
    expect(r.text.replace(OPEN_TAG, open).replace(CLOSE_TAG, close)).toBe(text);
  });

  it('只有开头：在 <副本> 之前补结尾', () => {
    const text = `${STORY}\n\n<状态栏>\n${BODY}\n\n${PANEL}`;
    const r = fixStatusBar(text)!;
    expect(r.from).toBe(OPEN_TAG);
    expect(r.text).toBe(`${STORY}\n\n<状态栏>\n${BODY}\n</状态栏>\n\n${PANEL}`);
    expect(checkStatusBar(r.text).kind).toBe('ok');
  });

  it('只有开头：没有 <副本> 时补在正文末尾（末尾空白之前）', () => {
    const r = fixStatusBar(`${STORY}\n<状态栏>\n${BODY}\n\n`)!;
    expect(r.text).toBe(`${STORY}\n<状态栏>\n${BODY}\n</状态栏>\n\n`);
  });

  it('<副本> 在状态栏前面时不影响补结尾的位置', () => {
    const r = fixStatusBar(`${STORY}\n${PANEL}\n<状态栏>\n${BODY}`)!;
    expect(r.text).toBe(`${STORY}\n${PANEL}\n<状态栏>\n${BODY}\n</状态栏>`);
  });

  it('错写的开头没有结尾：换开头、补结尾', () => {
    const r = fixStatusBar(`${STORY}\n<系统面板>\n${BODY}\n\n${PANEL}`)!;
    expect(r.from).toBe('<系统面板>');
    expect(r.text).toBe(`${STORY}\n<状态栏>\n${BODY}\n</状态栏>\n\n${PANEL}`);
  });

  it('开头对、结尾写错：只换结尾', () => {
    const r = fixStatusBar(`${STORY}\n<状态栏>\n${BODY}\n</状态>`)!;
    expect(r.from).toBe('<状态栏>…</状态>');
    expect(r.text).toBe(`${STORY}\n<状态栏>\n${BODY}\n</状态栏>`);
  });

  it('缺失、只有结尾、多于一对、本来就对：不修', () => {
    expect(fixStatusBar(STORY)).toBeNull();
    expect(fixStatusBar(`${BODY}\n</状态栏>`)).toBeNull();
    expect(fixStatusBar(`${good}\n${good}`)).toBeNull();
    expect(fixStatusBar(good)).toBeNull();
  });
});

describe('提醒与重放', () => {
  const ai = (mes: string): ChatMessage => ({ mes, is_user: false, extra: {} });
  const user = (mes = '继续。'): ChatMessage => ({ mes, is_user: true, extra: {} });

  it('开场白不检查', () => {
    const chat = [ai(`${STORY}\n<系统面板>\n${BODY}\n</系统面板>`)];
    expect(formatProblem(chat, 0)).toBeNull();
    expect(needFormatReminder(chat)).toBe(false);
  });

  it('上一条AI回复有问题才提醒，下一条没问题就不再提醒', () => {
    const chat = [ai(good), user(), ai(`${STORY}\n<系统面板>\n${BODY}\n</系统面板>`)];
    expect(needFormatReminder(chat)).toBe(true);
    chat.push(user(), ai(good));
    expect(needFormatReminder(chat)).toBe(false);
  });

  it('删掉出错的那一楼、或滑动成正确的回复：不再提醒', () => {
    const chat = [ai(good), user(), ai(good), user(), ai(`${STORY}\n<状态栏>\n${BODY}`)];
    expect(needFormatReminder(chat)).toBe(true);
    expect(needFormatReminder(chat.slice(0, -1))).toBe(false);
    chat[4] = ai(good);
    expect(needFormatReminder(chat)).toBe(false);
  });

  it('缺失每轮都算问题：状态栏每轮都要输出', () => {
    expect(needFormatReminder([ai(STORY), user(), ai(STORY)])).toBe(true);
    expect(needFormatReminder([ai(good), user(), ai(STORY)])).toBe(true);
  });

  it('用户消息与 ST 系统消息不计', () => {
    const chat = [ai(good), user(), ai(`${STORY}\n<状态>\n${BODY}\n</状态>`), { mes: '/sys', is_user: false, is_system: true, extra: { type: 'narrator' } }];
    expect(needFormatReminder(chat)).toBe(true);
  });

  it('调试页列出有问题和已修正的楼层', () => {
    const fixedMsg = ai(good);
    fixedMsg.extra = { rlzc: { phase: '', round: 0, injected: [], format: { kind: 'misnamed', fixed: true, from: '<系统面板>…</系统面板>' } } };
    const chat = [ai(good), user(), fixedMsg, user(), ai(`${BODY}\n</状态栏>`)];
    const rows = formatRows(chat);
    expect(rows.map((r) => [r.index, r.kind, r.fixed])).toEqual([
      [4, 'unpaired', false],
      [2, 'misnamed', true],
    ]);
  });
});
