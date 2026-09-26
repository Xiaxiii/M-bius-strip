import { describe, expect, it } from 'vitest';
import {
  appendLiveTipSentence,
  buildLiveRecord,
  buildLiveView,
  entryLiveOption,
  liveLedgerEntries,
  liveTipSentence,
  normalizeLiveMeta,
  parseCastNames,
  showTipTotal,
  SYS_TEXT,
  TIP_REVOKE_SOURCE,
  type LiveRecord,
  type LiveRoundInput,
} from '../src/core/liveFlow';
import { parseSubResponse } from '../src/core/subapi';
import { formatBalanceInjection } from '../src/core/ledger';
import { BUILTIN_PACKS } from '../src/packs/loader';
import type { ChatMessage, Pack } from '../src/packs/types';

const pack = (id: string) => BUILTIN_PACKS.find((p) => p.id === id) as Pack;

function seq(values: number[], fallback = 0.5): () => number {
  let i = 0;
  return () => (i < values.length ? values[i++] : fallback);
}

const POOL = [
  { type: 'praise', text: '主播好稳' },
  { type: 'cold', text: '也就那样' },
  { type: 'bless', text: '平安出来' },
  { type: 'discuss', text: '先看钟声' },
];

function input(over: Partial<LiveRoundInput> = {}): LiveRoundInput {
  return {
    show: 's1',
    scope: 'instance',
    packLevel: 'S',
    playerLevel: 'D',
    isRest: false,
    prevHeat: null,
    roundsInShow: 0,
    text: '大家在楼梯上走着。',
    hasEvents: false,
    hasPhaseSwitch: false,
    isEnd: false,
    pool: POOL,
    templates: [],
    names: ['小满', '好运来', '匿名'],
    whoNames: [],
    recentTexts: [],
    firstId: 1,
    rand: () => 0.01,
    ...over,
  };
}

describe('入场勾选框', () => {
  it('默认不勾，沿用上次选择', () => {
    expect(entryLiveOption(pack('zhonglou'), undefined)).toEqual({ show: true, checked: false });
    expect(entryLiveOption(pack('zhonglou'), false)).toEqual({ show: true, checked: false });
    expect(entryLiveOption(pack('zhonglou'), true)).toEqual({ show: true, checked: true });
  });

  it('disableLive 副本不显示勾选框、不开直播', () => {
    expect(pack('wuming').disableLive).toBe(true);
    expect(entryLiveOption(pack('wuming'), true)).toEqual({ show: false, checked: false });
  });

  it('通用副本（无包数据）也显示勾选框', () => {
    expect(entryLiveOption({} as Pack, true)).toEqual({ show: true, checked: true });
  });
});

describe('一轮的直播记录', () => {
  it('多笔打赏合并成一条账本记录（类型 tip）', () => {
    // 受伤 +30、注入事件 +20、阶段切换 +20 → 精彩度90，期望2.25笔；随机数都很小 → 3笔
    const rec = buildLiveRecord(input({ text: '他从台阶上摔下来，重伤昏迷。', hasEvents: true, hasPhaseSwitch: true }));
    expect(rec.hype).toBe(90);
    const tips = rec.feed.filter((f) => f.t === 'tip');
    expect(tips).toHaveLength(3);
    const total = tips.reduce((s, t) => s + t.amount, 0);
    expect(rec.tipNet).toBe(Math.floor(total * 0.6));
    const entries = liveLedgerEntries(rec, '9/26 12:00');
    expect(entries).toEqual([{ delta: rec.tipNet, source: `直播打赏3笔·共${total}×60%`, type: 'tip', at: '9/26 12:00' }]);
  });

  it('一笔打赏写「直播打赏X×60%」', () => {
    const rec = buildLiveRecord(input());
    expect(rec.hype).toBe(20);
    expect(rec.feed.filter((f) => f.t === 'tip')).toHaveLength(1);
    expect(liveLedgerEntries(rec, 'x')[0].source).toMatch(/^直播打赏\d+×60%$/);
  });

  it('打赏夹在弹幕中间，id 从 firstId 起连续递增', () => {
    const rec = buildLiveRecord(input({ firstId: 41, rand: seq([0.5, 0.5, 0.1, 0.9, 0.2, 0.3], 0.3) }));
    expect(rec.feed.map((f) => f.id)).toEqual(rec.feed.map((_, k) => 41 + k));
    expect(rec.feed[0].t).toBe('msg');
  });

  it('热度：开播第一轮上一轮按20算，之后接上一条记录', () => {
    expect(buildLiveRecord(input()).heat).toBe(20);
    expect(buildLiveRecord(input({ prevHeat: 60 })).heat).toBe(Math.round(60 * 0.6 + 20 * 0.4));
  });

  it('事件检测给了 hype、hurt 就用它们', () => {
    const rec = buildLiveRecord(input({ sub: { hype: 77, hurt: true } }));
    expect(rec.hype).toBe(77);
    expect(rec.hurt).toBe(true);
    // 缺少时按规则估
    const r2 = buildLiveRecord(input({ sub: {} }));
    expect(r2.hype).toBe(20);
    expect(r2.hurt).toBe(false);
  });

  it('回廊与休整副本按回廊算：人数×0.3、打赏×0.3', () => {
    const inst = buildLiveRecord(input({ rand: () => 0.5 }));
    const corr = buildLiveRecord(input({ scope: 'corridor', packLevel: null, playerLevel: 'S', rand: () => 0.5 }));
    const rest = buildLiveRecord(input({ isRest: true, packLevel: 'D', playerLevel: 'S', rand: () => 0.5 }));
    expect(corr.viewers).toBe(Math.round(300000 * 0.3 * 0.7 * 1));
    expect(rest.viewers).toBe(corr.viewers);
    expect(inst.viewers).toBe(Math.round(300000 * 0.7 * 1));
  });

  it('死亡结算：撤回本局打赏合计（含本轮），并写系统消息', () => {
    const rec = buildLiveRecord(input({ settle: { died: true, tipsBefore: 300 } }));
    expect(rec.revoke).toBe(300 + rec.tipNet);
    const sys = rec.feed.filter((f) => f.t === 'sys').map((f) => f.text);
    expect(sys).toEqual([SYS_TEXT.revoke, SYS_TEXT.instanceOff]);
    const entries = liveLedgerEntries(rec, 'x');
    expect(entries[entries.length - 1]).toEqual({ delta: -(300 + rec.tipNet), source: TIP_REVOKE_SOURCE, type: 'tip', at: 'x' });
  });

  it('失败结算不撤回，只下播', () => {
    const rec = buildLiveRecord(input({ settle: { died: false, tipsBefore: 300 } }));
    expect(rec.revoke).toBeUndefined();
    expect(rec.feed.filter((f) => f.t === 'sys').map((f) => f.text)).toEqual([SYS_TEXT.instanceOff]);
    expect(liveLedgerEntries(rec, 'x').every((e) => e.delta > 0)).toBe(true);
  });
});

describe('账户注入的附加句', () => {
  it('副本内直播时末尾加一句', () => {
    expect(liveTipSentence(360)).toBe('其中本局直播打赏360分，副本内不可使用，离开副本后可用。');
    const base = formatBalanceInjection(1360, false);
    expect(appendLiveTipSentence(base, 360)).toBe('［账户·仅供AI］积分：1360　待清算：无。其中本局直播打赏360分，副本内不可使用，离开副本后可用。');
    const pending = formatBalanceInjection(120, true, 'D');
    expect(appendLiveTipSentence(pending, 60)).toBe(`${pending}其中本局直播打赏60分，副本内不可使用，离开副本后可用。`);
  });
});

describe('状态栏角色名', () => {
  it('取角色详情块的名字，不含{{user}}与路人', () => {
    const bar = [
      '林默：',
      '等级：D',
      '积分：1200',
      '在场：周遥、谈缘、路人玩家若干',
      '周遥：',
      '等级：C',
      '状态：紧张',
      '谈缘（钟楼常客）：',
      '状态：平静',
      '路人玩家：',
      '状态：旁观',
      '陈晨｜B｜—｜受伤｜警惕｜……',
    ].join('\n');
    expect(parseCastNames(bar, '林默')).toEqual(['周遥', '谈缘', '陈晨']);
  });

  it('没有详情块时为空', () => {
    expect(parseCastNames('地点：钟楼\n在场：周遥', '林默')).toEqual([]);
    expect(parseCastNames(null)).toEqual([]);
  });
});

describe('RLZC_LIVE.get() 的数据', () => {
  const rec = (show: string, ids: number[], extra: Partial<LiveRecord> = {}): LiveRecord => ({
    show,
    scope: 'instance',
    hype: 40,
    heat: 28,
    viewers: 12000,
    hurt: false,
    feed: ids.map((id, k) => (k === 1 ? { id, t: 'tip', name: '小满', text: '', amount: 500, net: 300 } : { id, t: 'msg', name: '匿名', text: `弹幕${id}`, amount: 0, net: 0 })),
    tipNet: 300,
    tipFace: 500,
    tipSource: '直播打赏500×60%',
    ...extra,
  });
  const msg = (live?: LiveRecord): ChatMessage => ({ mes: '…', is_user: false, extra: live ? { rlzc: { phase: '', round: 0, injected: [], live } } : {} });

  it('副本内：本局 feed、到账合计、最后一笔打赏；未放出的不显示', () => {
    const chat = [msg(rec('s1', [1, 2, 3])), msg(rec('s1', [4, 5, 6], { heat: 50, viewers: 20000 }))];
    const meta = normalizeLiveMeta({ seq: 6, sys: [{ id: 0, t: 'sys', name: '', text: SYS_TEXT.instanceOn, amount: 0, net: 0, show: 's1' }] });
    const v = buildLiveView(chat, meta, { inInstance: true, instanceLive: true, instanceShow: 's1', injectToAI: false });
    expect(v).toMatchObject({ on: true, canToggle: false, scope: 'instance', viewers: 20000, heat: 50, tipTotal: 600, lastTip: { id: 5, net: 300 } });
    expect(v.feed.map((f) => f.id)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    const hidden = buildLiveView(chat, meta, { inInstance: true, instanceLive: true, instanceShow: 's1', injectToAI: true }, new Set([5, 6]));
    expect(hidden.tipTotal).toBe(300);
    expect(hidden.lastTip).toEqual({ id: 2, net: 300 });
    expect(hidden.injectToAI).toBe(true);
  });

  it('副本内没开直播：不在播、没有画面', () => {
    const v = buildLiveView([msg()], normalizeLiveMeta({}), { inInstance: true, instanceLive: false, instanceShow: 's1', injectToAI: false });
    expect(v).toMatchObject({ on: false, canToggle: false, scope: 'instance', viewers: 0, feed: [], tipTotal: 0, lastTip: null });
  });

  it('回廊：可开关；下播后保留最近一场的记录', () => {
    const chat = [msg({ ...rec('c1', [1, 2, 3]), scope: 'corridor' })];
    const meta = normalizeLiveMeta({ seq: 4, corridor: { on: false, show: 'c1' }, sys: [{ id: 4, t: 'sys', name: '', text: SYS_TEXT.corridorOff, amount: 0, net: 0, show: 'c1' }] });
    const v = buildLiveView(chat, meta, { inInstance: false, instanceLive: false, injectToAI: false });
    expect(v).toMatchObject({ on: false, canToggle: true, scope: 'corridor', viewers: 0, tipTotal: 300 });
    expect(v.feed[v.feed.length - 1].text).toBe(SYS_TEXT.corridorOff);
  });

  it('撤回后本局到账合计为0', () => {
    const chat = [msg(rec('s1', [1, 2, 3])), msg(rec('s1', [4, 5, 6], { revoke: 600, feed: [...rec('s1', [4, 5]).feed, { id: 6, t: 'sys', name: '', text: SYS_TEXT.revoke, amount: 0, net: -600 }] }))];
    expect(showTipTotal(chat, 's1')).toBe(0);
    const v = buildLiveView(chat, normalizeLiveMeta({}), { inInstance: false, instanceLive: false, injectToAI: false });
    expect(v.tipTotal).toBe(0);
  });
});

describe('事件检测的 hype / hurt', () => {
  it('缺少这两个字段不算失败', () => {
    const r = parseSubResponse('{"events":[],"state":{"summary":"x"},"next":[]}');
    expect(r.hype).toBeUndefined();
    expect(r.hurt).toBeUndefined();
  });

  it('有时解析为整数与真假', () => {
    const r = parseSubResponse('```json\n{"events":[],"state":{},"next":[],"hype":72.4,"hurt":true}\n```');
    expect(r.hype).toBe(72);
    expect(r.hurt).toBe(true);
    expect(parseSubResponse('{"state":{},"hype":150,"hurt":"false"}')).toMatchObject({ hype: 100, hurt: false });
  });
});
