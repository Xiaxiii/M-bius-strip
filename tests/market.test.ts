/** 黑市·盘口的纯函数（第四期-第1段） */
import { describe, expect, it, vi, afterEach } from 'vitest';
import { BUILTIN_PACKS, packMarkets, validatePack } from '../src/packs/loader';
import type { Pack } from '../src/packs/types';
import {
  availableBalance,
  bookEntries,
  calcOdds,
  checkStake,
  freezeResults,
  judgeList,
  levelDiff,
  openMarkets,
  payoutOf,
  ratingProbs,
  resolveMarkets,
  roundChecks,
  shouldClose,
  ticketResults,
  winProb,
  type Book,
  type Market,
  type Outcome,
  type RoundCheck,
  type Ticket,
} from '../src/core/market';
import { buildSubPrompt, parseSubResponse } from '../src/core/subapi';
import { addHint, briefingText, buildFreakPrompt, clearHints, FREAK_DOCS_MAX, freakMarkets, hintText, parseFreakResponse } from '../src/core/market';

const pack = (id: string) => BUILTIN_PACKS.find((p) => p.id === id) as Pack;
const src = (import.meta.glob('../markets.json', { eager: true, import: 'default' }) as Record<string, Record<string, unknown>>)['../markets.json'];

afterEach(() => vi.restoreAllMocks());

// ───────────── 数据迁移与校验 ─────────────

describe('事件盘数据', () => {
  const ids = ['zhonglou', 'dusongshu', 'jingjie', 'xiyan', 'youxi'];

  it('markets.json 迁进五个副本包，每条格式不变', () => {
    for (const id of ids) {
      expect(pack(id).markets, id).toEqual(src ? src[id] : pack(id).markets);
      expect(pack(id).markets!.length, id).toBe(3);
    }
  });

  it('五个包各升一个小版本号', () => {
    expect(pack('zhonglou').version).toBe('1.4.0');
    expect(pack('dusongshu').version).toBe('1.1.0');
    expect(pack('jingjie').version).toBe('1.1.0');
    expect(pack('xiyan').version).toBe('1.2.0');
    expect(pack('youxi').version).toBe('1.2.0');
  });

  it('考试、污名、农闲没有事件盘；内置包全部通过校验', () => {
    for (const id of ['kaoshi', 'wuming', 'nongxian']) expect(pack(id).markets).toBeUndefined();
    for (const p of BUILTIN_PACKS) expect(validatePack(p), p.id).toEqual([]);
  });

  const base = () => ({
    id: 't', name: '测', version: '1.0.0', token: '暗', level: 'D', legacyKeys: [], detect: { briefingName: '测' },
    time: { type: 'none' }, remaining: { type: 'fromPanel' }, phases: [{ id: 'p1', name: '一', cap: 5, next: null }], events: [], docs: [],
  });
  const good = { id: 'M1', q: '题', yes: '会', no: '不会', p: 0.3, judge: '写到了' };

  it('校验：markets 必须是数组；缺文本字段、p 越界、judgeNo 不是文本都报错', () => {
    expect(validatePack({ ...base(), markets: [good] })).toEqual([]);
    expect(validatePack({ ...base(), markets: {} }).join()).toContain('markets 必须是数组');
    expect(validatePack({ ...base(), markets: [{ ...good, judge: '' }] }).join()).toContain('judge');
    expect(validatePack({ ...base(), markets: [{ ...good, yes: 1 }] }).join()).toContain('yes');
    expect(validatePack({ ...base(), markets: [{ ...good, p: 1 }] }).join()).toContain('0.01–0.99');
    expect(validatePack({ ...base(), markets: [{ ...good, p: 0.005 }] }).join()).toContain('0.01–0.99');
    expect(validatePack({ ...base(), markets: [{ ...good, p: '0.3' }] }).join()).toContain('0.01–0.99');
    expect(validatePack({ ...base(), markets: [{ ...good, judgeNo: 3 }] }).join()).toContain('judgeNo');
    expect(validatePack({ ...base(), markets: [{ ...good, judgeNo: '另一句' }] })).toEqual([]);
  });

  it('by 不是本包阶段 id：该条跳过并在控制台警告，不算格式错误', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const p = { ...base(), markets: [{ ...good, by: 'p1' }, { ...good, id: 'M2', by: 'nope' }] } as unknown as Pack;
    expect(validatePack(p)).toEqual([]);
    expect(packMarkets(p).map((m) => m.id)).toEqual(['M1']);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('nope'));
  });
});

// ───────────── 概率、赔率 ─────────────

describe('概率表', () => {
  it('等级差 = 副本等级序 − 玩家等级序', () => {
    expect(levelDiff('S', 'D')).toBe(4);
    expect(levelDiff('D', 'S')).toBe(-4);
    expect(levelDiff('B', 'B')).toBe(0);
  });

  it('结局盘通关概率按差', () => {
    expect([-4, -2, -1, 0, 1, 2, 3, 4].map(winProb)).toEqual([0.85, 0.85, 0.75, 0.6, 0.4, 0.25, 0.15, 0.15]);
  });

  it('评价盘概率按差，每档合计为1', () => {
    expect(ratingProbs(-3)).toEqual({ S: 0.15, A: 0.3, B: 0.3, C: 0.17, D: 0.08 });
    expect(ratingProbs(-1)).toEqual({ S: 0.15, A: 0.3, B: 0.3, C: 0.17, D: 0.08 });
    expect(ratingProbs(0)).toEqual({ S: 0.08, A: 0.2, B: 0.35, C: 0.25, D: 0.12 });
    expect(ratingProbs(1)).toEqual({ S: 0.04, A: 0.12, B: 0.3, C: 0.32, D: 0.22 });
    expect(ratingProbs(2)).toEqual({ S: 0.02, A: 0.08, B: 0.25, C: 0.35, D: 0.3 });
    expect(ratingProbs(4)).toEqual(ratingProbs(2));
    for (const d of [-1, 0, 1, 2]) expect(Object.values(ratingProbs(d)).reduce((a, b) => a + b, 0)).toBeCloseTo(1, 10);
  });
});

describe('赔率', () => {
  it('1 ÷ 概率 × 0.8 × 浮动，保留两位小数', () => {
    expect(calcOdds(0.5, () => 0.5)).toBe(1.6);
    expect(calcOdds(0.5, () => 0)).toBe(1.49); // 1.6 × 0.93 = 1.488
    expect(calcOdds(0.5, () => 1)).toBe(1.71); // 1.6 × 1.07 = 1.712
    expect(calcOdds(0.1, () => 0.5)).toBe(8);
  });

  it('最低 1.01', () => {
    expect(calcOdds(0.85, () => 0)).toBe(1.01); // 0.941 × 0.93
    expect(calcOdds(0.99, () => 1)).toBe(1.01);
  });

  it('每个选项各抽一次随机数', () => {
    const rand = vi.fn().mockReturnValueOnce(0).mockReturnValueOnce(1).mockReturnValue(0.5);
    const ms = openMarkets({ pack: pack('zhonglou'), playerLevel: 'S', withEvents: false, rand });
    const ending = ms[0];
    expect(ending.options.map((o) => o.label)).toEqual(['通关', '失败']);
    expect(ending.options[0].odds).toBe(1.24); // 0.8/0.6 × 0.93 = 1.24
    expect(ending.options[1].odds).toBe(2.14); // 0.8/0.4 × 1.07
    expect(rand).toHaveBeenCalledTimes(2 + 5);
  });

  it('兑付 = 向下取整(押注 × 赔率)', () => {
    expect(payoutOf(100, 1.45)).toBe(145);
    expect(payoutOf(200, 3.1)).toBe(620);
    expect(payoutOf(33, 1.01)).toBe(33);
    expect(payoutOf(7, 1.55)).toBe(10);
  });
});

describe('开盘', () => {
  const r = () => 0.5;

  it('结局盘、评价盘、本包事件盘；事件检测关闭时只有结局盘和评价盘', () => {
    const on = openMarkets({ pack: pack('zhonglou'), playerLevel: 'B', withEvents: true, rand: r });
    expect(on.map((m) => [m.kind, m.q])).toEqual([
      ['ending', '本局结果'],
      ['rating', '本局评价'],
      ['event', '第一夜的值班签会抽中主播吗'],
      ['event', '塔里会出人命吗'],
      ['event', '主播会亲手摇响大钟吗'],
    ]);
    expect(on[2].by).toBe('d1');
    expect(on[2].options.map((o) => [o.id, o.label, o.p])).toEqual([['yes', '会', 0.1], ['no', '不会', 0.9]]);
    expect(on[2].options[0].odds).toBe(8);
    // S 副本、B 玩家：差 +2 → 通关 0.25
    expect(on[0].options[0].p).toBe(0.25);
    expect(on[1].options.map((o) => o.p)).toEqual([0.02, 0.08, 0.25, 0.35, 0.3]);
    const off = openMarkets({ pack: pack('zhonglou'), playerLevel: 'B', withEvents: false, rand: r });
    expect(off.map((m) => m.kind)).toEqual(['ending', 'rating']);
  });

  it('休整副本不开盘；没有事件盘的包只有两个盘', () => {
    expect(openMarkets({ pack: pack('nongxian'), playerLevel: 'D', withEvents: true, rand: r })).toEqual([]);
    expect(openMarkets({ pack: pack('kaoshi'), playerLevel: 'D', withEvents: true, rand: r }).length).toBe(2);
  });

  it('judgeNo 带进盘口', () => {
    const ms = openMarkets({ pack: pack('xiyan'), playerLevel: 'D', withEvents: true, rand: r });
    expect(ms.find((m) => m.id === 'M2')!.judgeNo).toContain('以外的某个人');
    expect(ms.find((m) => m.id === 'M2')!.options.map((o) => o.label)).toEqual(['是', '不是']);
  });
});

// ───────────── 押注上限 ─────────────

describe('押注上限与可用余额', () => {
  it('单盘累计上限按玩家等级，最低10', () => {
    const c = (lv: 'D' | 'C' | 'B' | 'A' | 'S', stake: number, already = 0) =>
      checkStake({ playerLevel: lv, stake, already, balance: 10_000_000, lockedTips: 0 });
    expect([c('D', 1).cap, c('C', 1).cap, c('B', 1).cap, c('A', 1).cap, c('S', 1).cap]).toEqual([1000, 5000, 20000, 80000, 300000]);
    expect(c('D', 9).ok).toBe(false);
    expect(c('D', 9).reason).toBe('最少押10');
    expect(c('D', 10).ok).toBe(true);
    expect(c('D', 1000).ok).toBe(true);
    expect(c('D', 1001).reason).toBe('超过单注上限');
    expect(c('D', 600, 500).reason).toBe('超过单注上限');
    expect(c('D', 500, 500).ok).toBe(true);
    expect(c('D', 10.5).ok).toBe(false);
  });

  it('不能超过可用余额；副本内扣掉本局直播打赏', () => {
    expect(availableBalance(2000, 0)).toBe(2000);
    expect(availableBalance(2000, 600)).toBe(1400);
    const inst = checkStake({ playerLevel: 'C', stake: 1500, already: 0, balance: 2000, lockedTips: 600 });
    expect(inst.ok).toBe(false);
    expect(inst.reason).toBe('可用余额不足');
    expect(inst.max).toBe(1400);
    const corr = checkStake({ playerLevel: 'C', stake: 1500, already: 0, balance: 2000, lockedTips: 0 });
    expect(corr.ok).toBe(true);
  });

  it('押完低于斩杀线只提示不拦截', () => {
    const r = checkStake({ playerLevel: 'D', stake: 500, already: 0, balance: 700, lockedTips: 0 });
    expect(r.ok).toBe(true);
    expect(r.belowKill).toBe(true); // 700 − 500 < 300
    expect(checkStake({ playerLevel: 'D', stake: 400, already: 0, balance: 700, lockedTips: 0 }).belowKill).toBe(false);
  });
});

// ───────────── 封盘 ─────────────

describe('封盘', () => {
  it('入场后第2条AI回复（入场消息算第1条）时封盘', () => {
    expect(shouldClose({ 2: {} }, 2)).toBe(false);
    expect(shouldClose({ 2: {}, 4: {} }, 2)).toBe(true);
  });
});

// ───────────── 开奖 ─────────────

const yes = (id: string, extra: Partial<Market> = {}): Market => ({
  id,
  kind: 'event',
  q: `题${id}`,
  options: [
    { id: 'yes', label: '会', p: 0.5, odds: 1.6 },
    { id: 'no', label: '不会', p: 0.5, odds: 1.6 },
  ],
  judge: '写到了',
  ...extra,
});
const ending: Market = { id: 'ending', kind: 'ending', q: '本局结果', options: [{ id: 'win', label: '通关', p: 0.6, odds: 1.33 }, { id: 'lose', label: '失败', p: 0.4, odds: 2 }] };
const rating: Market = { id: 'rating', kind: 'rating', q: '本局评价', options: ['S', 'A', 'B', 'C', 'D'].map((r) => ({ id: r, label: r, p: 0.2, odds: 4 })) };
const ok = (index: number, hits: Record<string, boolean> = {}): RoundCheck => ({ index, state: 'ok', hits });
const miss = (index: number): RoundCheck => ({ index, state: 'miss', hits: {} });
const running = (index: number): RoundCheck => ({ index, state: 'pending', hits: {} });
const open: Outcome = { ended: false };
const settled = (endIndex: number, result: string, rating?: string): Outcome => ({ ended: true, endedBy: 'tag', endIndex, result, rating });

describe('开奖：结局盘、评价盘', () => {
  const res = (o: Outcome) => resolveMarkets({ markets: [ending, rating], rounds: [], outcome: o, phaseEnds: {} });

  it('没结束时待开奖', () => {
    expect(res(open)).toEqual({ ending: null, rating: null });
  });

  it('通关 → 押通关的兑；评价 S–D 押中的兑', () => {
    const r = res(settled(20, '通关', 'B'));
    expect(r.ending).toEqual({ kind: 'option', option: 'win', index: 20 });
    expect(r.rating).toEqual({ kind: 'option', option: 'B', index: 20 });
  });

  it('失败 → 押失败的兑；评价全部退', () => {
    const r = res(settled(20, '失败', 'C'));
    expect(r.ending).toEqual({ kind: 'option', option: 'lose', index: 20 });
    expect(r.rating).toEqual({ kind: 'refund', index: 20 });
  });

  it('通关但评价为「无」或读不出 → 评价全部退', () => {
    expect(res(settled(20, '通关', '无')).rating!.kind).toBe('refund');
    expect(res(settled(20, '通关')).rating!.kind).toBe('refund');
  });

  it('死亡、阵亡 → 全废', () => {
    for (const d of ['死亡', '阵亡']) {
      const r = res(settled(20, d, 'B'));
      expect(r.ending!.kind).toBe('lost');
      expect(r.rating!.kind).toBe('lost');
    }
  });

  it('手动结束、会话作废 → 全退', () => {
    const man = res({ ended: true, endedBy: 'manual', endIndex: 9 });
    expect(man.ending).toEqual({ kind: 'refund', index: 9 });
    expect(man.rating!.kind).toBe('refund');
    const v = res({ voided: true, ended: false });
    expect(v.ending!.kind).toBe('refund');
    expect(v.rating!.kind).toBe('refund');
  });
});

describe('开奖：事件盘、庄家怪盘', () => {
  const one = (m: Market, rounds: RoundCheck[], outcome: Outcome = open, phaseEnds: Record<string, number> = {}) =>
    resolveMarkets({ markets: [m], rounds, outcome, phaseEnds })[m.id];

  it('某轮判定 judge 为真 → 「是」立即开奖', () => {
    expect(one(yes('M2'), [ok(4), ok(6, { M2: true }), ok(8)])).toEqual({ kind: 'option', option: 'yes', index: 6 });
    expect(one(yes('F1', { kind: 'freak' }), [ok(4, { F1: true })])).toEqual({ kind: 'option', option: 'yes', index: 4 });
  });

  it('judgeNo 为真 → 「否」立即开奖；没有 judgeNo 时 :no 不算', () => {
    const m = yes('M2', { judgeNo: '另一个人' });
    expect(one(m, [ok(4, { 'M2:no': true })])).toEqual({ kind: 'option', option: 'no', index: 4 });
    expect(one(yes('M2'), [ok(4, { 'M2:no': true })])).toBeNull();
  });

  it('跳过或失败那一轮的判定不算', () => {
    expect(one(yes('M2'), [miss(4), ok(6)])).toBeNull();
  });

  it('不带 by：副本结算时仍未判出，每轮都检测过 → 「否」兑', () => {
    expect(one(yes('M2'), [ok(4), ok(6), ok(8)], settled(8, '通关', 'A'))).toEqual({ kind: 'option', option: 'no', index: 8 });
  });

  it('结算那一楼不做事件检测，不影响「每轮都检测过」', () => {
    expect(one(yes('M2'), [ok(4), ok(6), miss(8)], settled(8, '通关', 'A'))).toEqual({ kind: 'option', option: 'no', index: 8 });
  });

  it('未判出且有一轮没检测（跳过、失败、关闭）→ 全部退', () => {
    expect(one(yes('M2'), [ok(4), miss(6), ok(8)], settled(10, '通关', 'A'))).toEqual({ kind: 'refund', index: 10 });
  });

  it('检测还在进行时先不开奖', () => {
    expect(one(yes('M2'), [ok(4), running(6)], settled(8, '通关', 'A'))).toBeNull();
  });

  it('带 by：该阶段结束时仍未判出按「未判出」处理；之后的判定不算', () => {
    const m = yes('M1', { by: 'd1' });
    expect(one(m, [ok(4), ok(6)], open, {})).toBeNull();
    expect(one(m, [ok(4), ok(6), ok(8, { M1: true })], open, { d1: 6 })).toEqual({ kind: 'option', option: 'no', index: 6 });
    expect(one(m, [miss(4), ok(6)], open, { d1: 6 })).toEqual({ kind: 'refund', index: 6 });
    expect(one(m, [ok(4, { M1: true }), ok(6)], open, { d1: 6 })).toEqual({ kind: 'option', option: 'yes', index: 4 });
  });

  it('带 by 但副本在该阶段内结束 → 按结算处理', () => {
    const m = yes('M1', { by: 'd1' });
    expect(one(m, [ok(4), ok(6)], settled(6, '通关', 'A'), {})).toEqual({ kind: 'option', option: 'no', index: 6 });
  });

  it('死亡结算：还没开奖的全废；已开奖的不变', () => {
    expect(one(yes('M2'), [ok(4), ok(6)], settled(8, '死亡'))).toEqual({ kind: 'lost', index: 8 });
    expect(one(yes('M2'), [ok(4, { M2: true })], settled(8, '死亡'))).toEqual({ kind: 'option', option: 'yes', index: 4 });
    // by 阶段在死亡之前已经结束：按未判出处理，不受死亡影响
    expect(one(yes('M1', { by: 'd1' }), [ok(4), ok(6)], settled(8, '阵亡'), { d1: 4 })).toEqual({ kind: 'option', option: 'no', index: 4 });
  });

  it('手动结束、会话作废：还没开奖的全退', () => {
    expect(one(yes('M2'), [ok(4), ok(6)], { ended: true, endedBy: 'manual', endIndex: 6 })).toEqual({ kind: 'refund', index: 6 });
    expect(one(yes('M2'), [ok(4, { M2: true })], { ended: true, endedBy: 'manual', endIndex: 6 })!.kind).toBe('option');
    expect(one(yes('M2'), [ok(4, { M2: true })], { voided: true, ended: false })!.kind).toBe('refund');
  });
});

describe('赌票与流水', () => {
  const t = (id: string, market: string, option: string, stake: number, odds: number): Ticket => ({ id, market, option, stake, odds, at: '9/27 10:00', after: 2 });
  const book = (): Book => ({
    session: 's1',
    packId: 'zhonglou',
    packName: '钟楼',
    openedAt: '9/27 10:00',
    markets: [ending, rating, yes('M2')],
    tickets: [t('a', 'ending', 'win', 500, 1.45), t('b', 'ending', 'lose', 100, 2.4), t('c', 'rating', 'B', 50, 4), t('d', 'M2', 'yes', 200, 3.1)],
  });

  it('兑 / 废 / 退 / 待', () => {
    const b = book();
    const results = resolveMarkets({ markets: b.markets, rounds: [ok(4, { M2: true })], outcome: open, phaseEnds: {} });
    const r = ticketResults(b, results);
    expect(r.a).toBeNull();
    expect(r.d).toEqual({ stamp: 'win', index: 4 });
    const fin = ticketResults(b, resolveMarkets({ markets: b.markets, rounds: [ok(4)], outcome: settled(8, '通关', '无'), phaseEnds: {} }));
    expect(fin.a!.stamp).toBe('win');
    expect(fin.b!.stamp).toBe('lose');
    expect(fin.c!.stamp).toBe('refund');
    expect(fin.d!.stamp).toBe('lose');
  });

  it('下注记一笔 −押注，兑付 +向下取整(押注×赔率)，退还 +押注', () => {
    const b = book();
    const res = ticketResults(b, resolveMarkets({ markets: b.markets, rounds: [ok(4, { M2: true })], outcome: settled(8, '通关', '无'), phaseEnds: {} }));
    const e = bookEntries(b, res, (i) => `楼${i}`);
    expect(e.filter((x) => x.delta < 0).map((x) => [x.delta, x.source, x.pos])).toEqual([
      [-500, '下注·钟楼·本局结果·通关', 2],
      [-100, '下注·钟楼·本局结果·失败', 2],
      [-50, '下注·钟楼·本局评价·B', 2],
      [-200, '下注·钟楼·题M2·会', 2],
    ]);
    expect(e.filter((x) => x.delta > 0).map((x) => [x.delta, x.source, x.pos, x.at])).toEqual([
      [725, '赌票兑付·钟楼·本局结果', 8, '楼8'],
      [50, '赌票退还·钟楼·本局评价', 8, '楼8'],
      [620, '赌票兑付·钟楼·题M2', 4, '楼4'],
    ]);
    expect(e.every((x) => x.type === 'bet')).toBe(true);
  });

  it('删楼后重放：兑付撤回，下注不撤回', () => {
    const b = book();
    const before = bookEntries(b, ticketResults(b, resolveMarkets({ markets: b.markets, rounds: [ok(4, { M2: true })], outcome: open, phaseEnds: {} })), () => '');
    const after = bookEntries(b, ticketResults(b, resolveMarkets({ markets: b.markets, rounds: [], outcome: open, phaseEnds: {} })), () => '');
    expect(before.some((x) => x.source.startsWith('赌票兑付'))).toBe(true);
    expect(after.some((x) => x.source.startsWith('赌票兑付'))).toBe(false);
    expect(after.filter((x) => x.source.startsWith('下注')).length).toBe(4);
  });

  it('会话被替换时定格：已开奖的保留，还没开奖的全退', () => {
    const b = book();
    const results = resolveMarkets({ markets: b.markets, rounds: [ok(4, { M2: true })], outcome: open, phaseEnds: {} });
    const frozen = freezeResults(b, results);
    expect(frozen.d).toEqual({ stamp: 'win', index: 4 });
    expect(frozen.a).toEqual({ stamp: 'refund', index: -1 });
    const fb = { ...b, frozen };
    // 定格之后不再随重放变化
    expect(ticketResults(fb, {}).d).toEqual({ stamp: 'win', index: 4 });
  });

  it('交给检测的只有还没开奖的事件盘和怪盘，judgeNo 另列 :no', () => {
    const b = book();
    b.markets.push(yes('M3', { judgeNo: '反过来' }), yes('F1', { kind: 'freak', judge: '主播跳舞' }));
    const results = resolveMarkets({ markets: b.markets, rounds: [ok(4, { M2: true })], outcome: open, phaseEnds: {} });
    expect(judgeList(b, results)).toEqual([
      { id: 'M3', judge: '写到了' },
      { id: 'M3:no', judge: '反过来' },
      { id: 'F1', judge: '主播跳舞' },
    ]);
  });
});

describe('每轮检测情况', () => {
  it('入场之后的AI回复；带 markets 为检测过，缺 markets、跳过为没检测，正在检测为 pending', () => {
    const chat = [
      { mes: '简报', extra: {} },
      { mes: '我', is_user: true },
      { mes: 'a', extra: { rlzc: { phase: '', round: 2, injected: [], sub: { state: {}, markets: { M1: true } } } } },
      { mes: '我', is_user: true },
      { mes: 'b', extra: { rlzc: { phase: '', round: 3, injected: [], sub: { state: {} } } } },
      { mes: 'c', extra: { rlzc: { phase: '', round: 4, injected: [], sub: { skipped: true } } } },
      { mes: 'd', extra: {} },
    ] as any[];
    const rs = roundChecks(chat, { 0: {}, 2: {}, 4: {}, 5: {}, 6: {} }, 0, 6);
    expect(rs.map((r) => [r.index, r.state])).toEqual([[2, 'ok'], [4, 'miss'], [5, 'miss'], [6, 'pending']]);
    expect(rs[0].hits).toEqual({ M1: true });
  });
});

// ───────────── 第2段：检测字段、怪盘、一次性提示 ─────────────


describe('事件检测里的盘口判定', () => {
  const inp = { pack: pack('zhonglou'), phaseName: '第一日·白天', round: 2, prevState: null, events: [], nextConditional: [], text: '正文' };

  it('没有待判盘口时提示词不变；有时列出每条 judge，要求明确写到才填 true、不要理由', () => {
    const plain = buildSubPrompt(inp);
    expect(plain.system).not.toContain('markets');
    expect(plain.user).not.toContain('盘口');
    const withM = buildSubPrompt({ ...inp, markets: [{ id: 'M2', judge: '有人死' }, { id: 'M2:no', judge: '没人死' }] });
    expect(withM.system).toContain('只有本轮正文明确写到才填 true');
    expect(withM.system).toContain('"markets":{"M2":false,"M2:no":false}');
    expect(withM.user).toContain('【盘口陈述】\n- M2：有人死\n- M2:no：没人死');
  });

  it('解析 markets；缺少不算失败', () => {
    const ok = parseSubResponse('{"events":[],"state":{},"next":[],"markets":{"M1":true,"M2":"false","M3":1}}');
    expect(ok.markets).toEqual({ M1: true, M2: false });
    const none = parseSubResponse('{"events":[],"state":{},"next":[]}');
    expect(none.markets).toBeUndefined();
  });
});

describe('庄家怪盘', () => {
  it('简报原文取「副本简报」那一行起的几行，去掉面板标签', () => {
    const t = briefingText('前文\n「副本简报 - 钟楼」\n「人数：10人」\n「等级：S」\n「时限：…」\n「简报：…」\n后文一\n后文二\n<状态栏>积分：1</状态栏>');
    expect(t.startsWith('「副本简报 - 钟楼」')).toBe(true);
    expect(t).not.toContain('前文');
    expect(t).not.toContain('后文二');
  });

  it('公开资料合并后截到4000字', () => {
    const long = 'x'.repeat(5000);
    const m = buildFreakPrompt({ name: '钟楼', level: 'S', briefing: '简报', docs: [{ title: '甲', md: long }, { title: '乙', md: '看不到' }] });
    const docs = m.user.split('【公开资料】\n')[1];
    expect(docs.length).toBe(FREAK_DOCS_MAX);
    expect(m.user).not.toContain('看不到');
  });

  it('不合格的题丢掉（题目超过20字、p 越界、缺 judge），最多3题；一题都没有算失败', () => {
    const items = parseFreakResponse(
      '```json\n[{"q":"主播会哭吗","judge":"主播哭了","p":0.3},{"q":"x","judge":"y","p":0.99},{"q":"缺判定","p":0.3},{"q":"' +
        '长'.repeat(21) +
        '","judge":"j","p":0.3},{"q":"a","judge":"b","p":"0.5"},{"q":"c","judge":"d","p":0.05},{"q":"e","judge":"f","p":0.2}]\n```',
    );
    expect(items.map((i) => i.q)).toEqual(['主播会哭吗', 'a', 'c']);
    expect(() => parseFreakResponse('[]')).toThrow();
    expect(() => parseFreakResponse('没有')).toThrow();
    const ms = freakMarkets(items, () => 0.5);
    expect(ms.map((m) => [m.id, m.kind, m.options[0].label, m.options[1].label])).toEqual([
      ['F1', 'freak', '会', '不会'],
      ['F2', 'freak', '会', '不会'],
      ['F3', 'freak', '会', '不会'],
    ]);
  });
});

describe('一次性提示', () => {
  it('三种文字', () => {
    expect(hintText({ kind: 'betLose', amount: 500, after: 2 })).toBe('{{user}}在黑市押了自己本局失败，押注500分。');
    expect(hintText({ kind: 'casinoLoss', amount: 800, after: 2 })).toBe('{{user}}刚在赌坊输掉800分，余额已低于斩杀线。');
    expect(hintText({ kind: 'casinoWin', amount: 9000, after: 2 })).toBe('{{user}}刚在赌坊一局赢了9000分。');
  });

  it('押自己失败在下一次生成前合并；加进过注入后收到回复清掉', () => {
    let h = addHint([], { kind: 'betLose', amount: 300, after: 2 });
    h = addHint(h, { kind: 'betLose', amount: 200, after: 2 });
    expect(h).toEqual([{ kind: 'betLose', amount: 500, after: 2 }]);
    expect(clearHints(h)).toEqual(h);
    const sent = h.map((x) => ({ ...x, sent: true }));
    expect(clearHints([...sent, { kind: 'casinoWin', amount: 1, after: 3 }])).toEqual([{ kind: 'casinoWin', amount: 1, after: 3 }]);
  });
});
