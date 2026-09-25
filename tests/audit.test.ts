import { describe, expect, it } from 'vitest';
import { auditPanels, limitMatches, parseProgressValue } from '../src/core/audit';
import { replay } from '../src/core/replay';
import { buildInjection } from '../src/core/injector';
import { HIDDEN_TAGS, stripHiddenTags } from '../src/core/hideTags';
import { BUILTIN_PACKS } from '../src/packs/loader';
import type { ChatMessage, Pack } from '../src/packs/types';
import { ai, BRIEFING, session, user, zhonglou } from './helpers';

const wuming = BUILTIN_PACKS.find((p) => p.id === 'wuming') as Pack;
const panel = (bar: string, limit = '剩余3夜') => `正文……\n<副本>\n时限：${limit}\n进度条：${bar}\n任务：\n活下去\n</副本>`;

/** 简报(入场，第1轮) + 若干条AI回复 */
function chatOf(...replies: string[]): ChatMessage[] {
  const c: ChatMessage[] = [user('开始'), ai(BRIEFING)];
  for (const r of replies) c.push(user(), ai(r));
  return c;
}
const check = (c: ChatMessage[], pack: Pack = zhonglou) => {
  const s = session({ packId: pack.id, entryIndex: 1 });
  const p = replay(c, s, pack)!;
  const a = auditPanels(c, pack, p);
  return { p, a, s, kinds: a.warnings.map((w) => w.kind) };
};

describe('进度条数值', () => {
  it('能读出百分比、分数、纯数字和方块', () => {
    expect(parseProgressValue('40%')).toBe(40);
    expect(parseProgressValue('■■□□□ 40％')).toBe(40);
    expect(parseProgressValue('35/100')).toBe(35);
    expect(parseProgressValue('2/5')).toBe(40);
    expect(parseProgressValue('0')).toBe(0);
    expect(parseProgressValue('■■■□□')).toBe(60);
    expect(parseProgressValue('-5%')).toBe(-5);
    expect(parseProgressValue('未知')).toBeNull();
    expect(parseProgressValue(undefined)).toBeNull();
  });
});

describe('a. 缺少 <副本>', () => {
  it('入场简报本身不带面板不算缺少', () => {
    const { a } = check(chatOf());
    expect(a.warnings).toEqual([]);
    expect(a.missingLast).toBe(false);
    expect(a.hasPanel).toBe(false);
  });

  it('上一轮缺少时，下一轮注入要求完整输出；补上后不再要求', () => {
    let r = check(chatOf(panel('0'), '只有正文'));
    expect(r.a.missingLast).toBe(true);
    expect(r.kinds).toEqual(['missing']);
    const inj = buildInjection(zhonglou, r.p, r.s, { audit: r.a });
    expect(inj.turn).toContain('上一轮缺少<副本>面板，本轮必须完整输出。');
    r = check(chatOf(panel('0'), '只有正文', panel('5')));
    expect(r.a.missingLast).toBe(false);
    expect(buildInjection(zhonglou, r.p, r.s, { audit: r.a }).turn).not.toContain('上一轮缺少');
    // 缺少的那一轮仍留在调试页警告里
    expect(r.kinds).toEqual(['missing']);
  });
});

describe('b. 进度条', () => {
  it('入场后第一轮必须为0；还没有面板时注入“进度条写0”', () => {
    const r0 = check(chatOf());
    expect(buildInjection(zhonglou, r0.p, r0.s, { audit: r0.a }).turn).toContain('本轮<副本>的进度条写0。');
    expect(check(chatOf(panel('0'))).kinds).toEqual([]);
    const bad = check(chatOf(panel('10%')));
    expect(bad.kinds).toEqual(['progressStart']);
    expect(buildInjection(zhonglou, bad.p, bad.s, { audit: bad.a }).turn).not.toContain('进度条写0');
  });

  it('简报自带面板时，简报那一轮就是第一轮', () => {
    const c: ChatMessage[] = [user('开始'), ai(BRIEFING + '\n' + panel('20'))];
    expect(check(c).kinds).toEqual(['progressStart']);
  });

  it('超出 0–100 警告', () => {
    expect(check(chatOf(panel('0'), panel('120%'))).kinds).toEqual(['progressRange']);
  });

  it('比上一轮低时警告，不改动消息原文', () => {
    const c = chatOf(panel('0'), panel('30'), panel('20'));
    const before = JSON.stringify(c);
    const { a } = check(c);
    expect(a.warnings.map((w) => w.kind)).toEqual(['progressDrop']);
    expect(a.warnings[0].text).toContain('30 → 20');
    expect(a.warnings[0]).toMatchObject({ index: 7, round: 4, phase: '第一日·白天' });
    expect(JSON.stringify(c)).toBe(before);
  });

  it('读不出数值时警告', () => {
    expect(check(chatOf(panel('还行'))).kinds).toEqual(['progressUnreadable']);
  });
});

describe('c. 时限', () => {
  it('钟楼：每轮注入时限应写的内容', () => {
    const r = check(chatOf(panel('0')));
    expect(r.p.limitText).toBe('剩余3夜');
    expect(buildInjection(zhonglou, r.p, r.s, { audit: r.a }).turn).toContain('本轮<副本>的时限一栏写：剩余3夜');
  });

  it('钟楼第二日：剩余2夜；写错时警告', () => {
    const replies = Array.from({ length: 72 + 28 + 5 }, () => panel('0', '剩余2夜'));
    const { a } = check(chatOf(...replies));
    // 第一日（剩余3夜）写成了剩余2夜
    const limitWarns = a.warnings.filter((w) => w.kind === 'limit');
    expect(limitWarns[0].text).toContain('应为「剩余3夜」');
    expect(limitWarns.every((w) => w.phase !== '第二日·白天')).toBe(true);
  });

  it('调查阶段：阶段名剩余K轮', () => {
    const r = check(chatOf(panel('0'), '<阶段切换>调查</阶段切换>' + panel('0')));
    expect(r.p.phase.id).toBe('inv');
    expect(r.p.limitText).toBe('调查剩余49轮');
  });

  it('污名倒计时：常规第12轮应写剩余144分钟', () => {
    const c: ChatMessage[] = [user('开始'), ai('「副本简报 - 污名」')];
    for (let i = 2; i <= 12; i++) c.push(user(), ai(panel('0', `剩余${(50 - i + 10) * 3}分钟`)));
    const r = check(c, wuming);
    expect(r.p.round).toBe(12);
    expect(r.kinds).toEqual([]);
    expect(r.p.limitText).toBe('剩余141分钟');
    c[c.length - 1] = ai(panel('0', '剩余150分钟'));
    const bad = check(c, wuming);
    expect(bad.a.warnings.map((w) => w.text)).toEqual(['时限与计算值不一致：写的是「剩余150分钟」，应为「剩余144分钟」']);
  });

  it('比较时忽略空白标点，允许补充说明', () => {
    expect(limitMatches('剩余 3 夜（以钟楼为准）', '剩余3夜')).toBe(true);
    expect(limitMatches('剩余2夜', '剩余3夜')).toBe(false);
  });

  it('没有轮数表的副本不注入时限', () => {
    const basic = BUILTIN_PACKS.find((p) => p.id === 'kaoshi')!;
    const c: ChatMessage[] = [user('开始'), ai('「副本简报 - 考试」'), user(), ai(panel('0', '一小时'))];
    const r = check(c, basic);
    expect(r.p.limitText).toBeUndefined();
    expect(r.kinds).toEqual([]);
    expect(buildInjection(basic, r.p, r.s, { audit: r.a }).turn).not.toContain('时限一栏');
  });
});

describe('副本信息显示位置', () => {
  it('正文状态栏模式保留 <副本>，其余标签照常隐藏', () => {
    const text = '正文<副本>\n时限：1天\n</副本><状态栏>HP</状态栏><阶段切换>调查</阶段切换><角色登记>死者=甲</角色登记>';
    const statusbar = HIDDEN_TAGS.filter((t) => t !== '副本');
    expect(stripHiddenTags(text, statusbar)).toBe('正文<副本>\n时限：1天\n</副本><状态栏>HP</状态栏>');
    expect(stripHiddenTags(text)).toBe('正文<状态栏>HP</状态栏>');
  });
});
