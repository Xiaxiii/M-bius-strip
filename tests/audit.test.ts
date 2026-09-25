import { describe, expect, it } from 'vitest';
import { auditPanels, limitMatches, parseProgressValue } from '../src/core/audit';
import { replay } from '../src/core/replay';
import { buildInjection } from '../src/core/injector';
import { HIDDEN_TAGS, stripHiddenTags } from '../src/core/hideTags';
import { BUILTIN_PACKS } from '../src/packs/loader';
import type { ChatMessage, Pack } from '../src/packs/types';
import { ai, BRIEFING, session, user, zhonglou } from './helpers';

const wuming = BUILTIN_PACKS.find((p) => p.id === 'wuming') as Pack;
const panel = (bar: string, limit = '至第四日日出·剩余3夜') => `正文……\n<副本>\n时限：${limit}\n进度条：${bar}\n任务：\n活下去\n</副本>`;

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

describe('F. 时限核对（与本楼快照的注入值比较）', () => {
  const xiyan = BUILTIN_PACKS.find((p) => p.id === 'xiyan') as Pack;
  const xy = (...replies: string[]) => {
    const c: ChatMessage[] = [user('开始'), ai('「副本简报 - 喜宴」')];
    for (const r of replies) c.push(user(), ai(r));
    return c;
  };
  /** 给第 index 楼写上快照里的注入值（模拟扩展在生成时记录的） */
  const snap = (c: ChatMessage[], index: number, limit: { text: string; minutes?: number; total?: number }) => {
    c[index].extra = { rlzc: { phase: '喜宴', round: 0, injected: [], limit } };
  };

  it('钟楼：与注入文字一致不警告，不一致警告', () => {
    expect(check(chatOf(panel('0'))).kinds).toEqual([]);
    const bad = check(chatOf(panel('0', '剩余2夜')));
    expect(bad.a.warnings.map((w) => w.text)).toEqual(['时限与注入文字不一致：写的是「剩余2夜」，注入的是「至第四日日出·剩余3夜」']);
  });

  it('钟楼调查阶段：停摆文字', () => {
    const r = check(chatOf(panel('0'), '<阶段切换>调查</阶段切换>' + panel('0'), panel('0', '钟楼停摆·调查中')));
    expect(r.p.phase.id).toBe('inv');
    expect(r.kinds).toEqual([]);
  });

  it('倒计时：一致、写得更少都不警告', () => {
    const c = xy(panel('0', '约剩7小时54分/8小时'), panel('0', '约剩6小时/8小时'));
    expect(check(c, xiyan).kinds).toEqual([]);
  });

  it('倒计时：剩余比注入值多、总时长不一致、读不到都警告', () => {
    const texts = check(xy(panel('0', '约剩7小时58分/8小时')), xiyan).a.warnings.map((w) => w.text);
    expect(texts).toEqual(['剩余时间比注入值多：写的是7小时58分，注入的是7小时54分']);
    expect(check(xy(panel('0', '约剩7小时/9小时')), xiyan).a.warnings.map((w) => w.text)).toEqual([
      '总时长与注入值不一致：写的是9小时，注入的是8小时',
    ]);
    expect(check(xy(panel('0', '天亮之前')), xiyan).kinds).toEqual(['limit']);
    expect(check(xy(panel('0', '约剩7小时')), xiyan).kinds).toEqual(['limit']);
  });

  it('优先使用快照里记录的注入值', () => {
    const c = xy(panel('0', '约剩7小时/8小时'));
    expect(check(c, xiyan).kinds).toEqual([]);
    snap(c, 3, { text: '约剩6小时/8小时', minutes: 360, total: 480 });
    expect(check(c, xiyan).a.warnings.map((w) => w.text)).toEqual(['剩余时间比注入值多：写的是7小时，注入的是6小时']);
  });

  it('只警告，不改原文', () => {
    const c = xy(panel('0', '约剩9小时/9小时'));
    const before = JSON.stringify(c);
    check(c, xiyan);
    expect(JSON.stringify(c)).toBe(before);
  });

  it('比较时忽略空白标点，允许补充说明', () => {
    expect(limitMatches('至第四日日出 · 剩余3夜（塔内无钟）', '至第四日日出·剩余3夜')).toBe(true);
    expect(limitMatches('剩余3夜', '至第四日日出·剩余3夜')).toBe(false);
  });

  it('没有轮数表的副本不核对时限', () => {
    const basic = BUILTIN_PACKS.find((p) => p.id === 'jingjie')!;
    const c: ChatMessage[] = [user('开始'), ai('「副本简报 - 境界游乐园」'), user(), ai(panel('0', '一小时'))];
    const r = check(c, basic);
    expect(r.p.limit).toBeUndefined();
    expect(r.kinds).toEqual([]);
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
