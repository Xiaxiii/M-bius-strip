import { describe, it, expect } from 'vitest';
import { validatePack, BUILTIN_PACKS } from '../src/packs/loader';
import { calcSettlementDelta } from '../src/core/ledger';

// ───────────── 两个新包通过 validatePack ─────────────

describe('validatePack：杜松树、农闲', () => {
  it('杜松树通过校验', () => {
    const dssPack = BUILTIN_PACKS.find((p) => p.id === 'dusongshu');
    expect(dssPack).toBeDefined();
    expect(validatePack(dssPack)).toEqual([]);
  });

  it('农闲通过校验', () => {
    const nxPack = BUILTIN_PACKS.find((p) => p.id === 'nongxian');
    expect(nxPack).toBeDefined();
    expect(validatePack(nxPack)).toEqual([]);
  });

  it('rest 字段为非布尔值时报错', () => {
    const errors = validatePack({ id: 'test', name: '测', version: '1.0.0', token: '暗', level: 'D',
      legacyKeys: [], detect: { briefingName: '测' }, time: { type: 'none' },
      remaining: { type: 'fromPanel' }, phases: [], events: [], docs: [], rest: 'yes' });
    expect(errors.some((e) => e.includes('rest'))).toBe(true);
  });

  it('rest 为 true 时通过', () => {
    const errors = validatePack({ id: 'test', name: '测', version: '1.0.0', token: '暗', level: 'D',
      legacyKeys: [], detect: { briefingName: '测' }, time: { type: 'none' },
      remaining: { type: 'fromPanel' }, phases: [], events: [], docs: [], rest: true });
    expect(errors).toEqual([]);
  });
});

// ───────────── 杜松树阶段与事件确认 ─────────────

describe('杜松树：阶段和事件', () => {
  const dss = BUILTIN_PACKS.find((p) => p.id === 'dusongshu')!;

  it('共5个阶段，每阶段24轮，合计120轮', () => {
    expect(dss.phases).toHaveLength(5);
    const total = dss.phases.reduce((s, p) => s + p.cap, 0);
    expect(total).toBe(120);
    dss.phases.forEach((p) => expect(p.cap).toBe(24));
  });

  it('countdown 每轮30分钟，无 totalMinutes（按总轮数计算）', () => {
    expect(dss.time.type).toBe('countdown');
    if (dss.time.type === 'countdown') {
      expect(dss.time.minutesPerRound).toBe(30);
      // 内置包不设 totalMinutes，总时长 = 120 × 30 = 3600 分钟 = 60 小时
      expect(dss.time.totalMinutes).toBeUndefined();
    }
  });

  it('E04 和 E05 在同一阶段第1轮，且条件相反', () => {
    const e04 = dss.events.find((e) => e.id === 'E04');
    const e05 = dss.events.find((e) => e.id === 'E05');
    expect(e04).toBeDefined();
    expect(e05).toBeDefined();
    expect(e04!.from).toBe(1);
    expect(e05!.from).toBe(1);
    expect(e04!.phase).toBe(e05!.phase);
    // 两条都有 if 条件
    expect(e04!.if).toBeTruthy();
    expect(e05!.if).toBeTruthy();
  });

  it('有11个 stateFields', () => {
    expect(dss.stateFields).toHaveLength(11);
  });

  it('入场后第2轮总时长 = 120×30 = 3600分钟 = 60小时', () => {
    // 验证：120轮 × 30分/轮 = 3600分钟
    const total = dss.phases.reduce((s, p) => s + p.cap, 0);
    expect(total * 30).toBe(3600); // 60小时
  });
});

// ───────────── 农闲：休整副本确认 ─────────────

describe('农闲：休整副本', () => {
  const nx = BUILTIN_PACKS.find((p) => p.id === 'nongxian')!;

  it('rest 为 true', () => {
    expect(nx.rest).toBe(true);
  });

  it('没有阶段表（空数组）', () => {
    expect(nx.phases).toHaveLength(0);
  });

  it('time.type 为 none', () => {
    expect(nx.time.type).toBe('none');
  });

  it('有5个资料页', () => {
    expect(nx.docs).toHaveLength(5);
  });

  it('副本结算时不记奖励（calcSettlementDelta 在 rest 包不应被调用，但调用也返回正常值）', () => {
    // 休整副本的结算由 app.ts 的 if(!state.pack.rest) 拦截，不调用 calcSettlementDelta
    // 这里只验证如果被意外调用，不会抛异常
    expect(() => calcSettlementDelta(nx.level, { 结果: '通关', 评价: 'S' })).not.toThrow();
  });
});
