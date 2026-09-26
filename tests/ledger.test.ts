import { describe, it, expect } from 'vitest';
import {
  parseDelta,
  computeBalance,
  calcSettlementDelta,
  parseBalanceFromStatusBar,
  formatBalanceInjection,
  isPendingClearance,
  KILL_THRESHOLDS,
} from '../src/core/ledger';
import type { LedgerDisplayEntry } from '../src/packs/types';

// ───────────── parseDelta ─────────────

describe('parseDelta', () => {
  it('新格式：+数额｜来源', () => {
    const r = parseDelta('+300｜直播打赏500×60%');
    expect(r).toEqual({ delta: 300, source: '直播打赏500×60%' });
  });

  it('新格式：负数', () => {
    const r = parseDelta('-500｜消耗');
    expect(r).toEqual({ delta: -500, source: '消耗' });
  });

  it('新格式：全角竖线', () => {
    const r = parseDelta('+100｜测试');
    expect(r?.delta).toBe(100);
    expect(r?.source).toBe('测试');
  });

  it('旧格式兼容：+数额（说明）', () => {
    const r = parseDelta('+300（直播打赏500×60%）');
    expect(r).toEqual({ delta: 300, source: '直播打赏500×60%' });
  });

  it('旧格式兼容：无说明', () => {
    const r = parseDelta('+500');
    expect(r).toEqual({ delta: 500, source: '' });
  });

  it('无效输入返回 null', () => {
    expect(parseDelta('abc')).toBeNull();
    expect(parseDelta('')).toBeNull();
  });
});

// ───────────── computeBalance ─────────────

describe('computeBalance', () => {
  it('空流水返回初始值', () => {
    expect(computeBalance(1000, [])).toBe(1000);
  });

  it('累加 delta', () => {
    const entries: LedgerDisplayEntry[] = [
      { delta: 300, source: '打赏', type: 'tag', at: '9/1 12:00', mesIndex: 1 },
      { delta: -100, source: '消耗', type: 'tag', at: '9/1 12:01', mesIndex: 2 },
    ];
    expect(computeBalance(500, entries)).toBe(700);
  });
});

// ───────────── calcSettlementDelta ─────────────

describe('calcSettlementDelta', () => {
  it('S级通关B评价', () => {
    const d = calcSettlementDelta('S', { 结果: '通关', 评价: 'B' });
    expect(d).toBe(50000);
  });

  it('S级通关S评价', () => {
    const d = calcSettlementDelta('S', { 结果: '通关', 评价: 'S' });
    expect(d).toBe(75000); // 50000 * 1.5
  });

  it('D级通关C评价', () => {
    const d = calcSettlementDelta('D', { 结果: '通关', 评价: 'C' });
    expect(d).toBe(400); // 500 * 0.8
  });

  it('越级折扣', () => {
    const d = calcSettlementDelta('A', { 结果: '通关', 评价: 'B', 越级: '是' });
    expect(d).toBe(9000); // 15000 * 0.6
  });

  it('失败扣分', () => {
    const d = calcSettlementDelta('D', { 结果: '失败' });
    expect(d).toBe(-150); // -500 * 0.3
  });

  it('结果不明确返回 0', () => {
    expect(calcSettlementDelta('B', { 结果: '' })).toBe(0);
    expect(calcSettlementDelta('B', {})).toBe(0);
  });
});

// ───────────── parseBalanceFromStatusBar ─────────────

describe('parseBalanceFromStatusBar', () => {
  it('解析积分字段', () => {
    expect(parseBalanceFromStatusBar('积分：1500')).toBe(1500);
    expect(parseBalanceFromStatusBar('积分：-200')).toBe(-200);
  });

  it('全角冒号', () => {
    expect(parseBalanceFromStatusBar('积分：+800')).toBe(800);
  });

  it('找不到时返回 null', () => {
    expect(parseBalanceFromStatusBar('等级：S')).toBeNull();
    expect(parseBalanceFromStatusBar('')).toBeNull();
  });
});

// ───────────── isPendingClearance ─────────────

describe('isPendingClearance', () => {
  const threshold = KILL_THRESHOLDS['D']; // 300

  it('余额始终高于斩杀线：不标记', () => {
    const entries: LedgerDisplayEntry[] = [
      { delta: 500, source: '打赏', type: 'tag', at: '9/1 12:00', mesIndex: 1 },
    ];
    expect(isPendingClearance(1000, entries, threshold)).toBe(false);
  });

  it('余额曾低于斩杀线：标记 true', () => {
    const entries: LedgerDisplayEntry[] = [
      { delta: -800, source: '消耗', type: 'tag', at: '9/1 12:00', mesIndex: 1 }, // 1000-800=200 < 300
    ];
    expect(isPendingClearance(1000, entries, threshold)).toBe(true);
  });

  it('曾低于斩杀线但后来通关结算：清除标记', () => {
    const entries: LedgerDisplayEntry[] = [
      { delta: -800, source: '消耗', type: 'tag', at: '9/1 12:00', mesIndex: 1 },
      { delta: 5000, source: '副本结算·通关·S', type: 'settle', at: '9/1 13:00', mesIndex: 2 },
    ];
    expect(isPendingClearance(1000, entries, threshold)).toBe(false);
  });

  it('通关后再次跌破：重新标记', () => {
    const entries: LedgerDisplayEntry[] = [
      { delta: -800, source: '消耗', type: 'tag', at: '9/1 12:00', mesIndex: 1 },
      { delta: 5000, source: '副本结算·通关·S', type: 'settle', at: '9/1 13:00', mesIndex: 2 },
      { delta: -6200, source: '消耗', type: 'tag', at: '9/1 14:00', mesIndex: 3 }, // 5200-6200=-1000 < 300
    ];
    expect(isPendingClearance(1000, entries, threshold)).toBe(true);
  });

  it('余额跌破后回升到斩杀线以上，但没有通关结算：仍标记', () => {
    const entries: LedgerDisplayEntry[] = [
      { delta: -800, source: '消耗', type: 'tag', at: '9/1 12:00', mesIndex: 1 }, // 1000-800=200 < 300
      { delta: 500, source: '打赏', type: 'tag', at: '9/1 13:00', mesIndex: 2 }, // 200+500=700 > 300，但没有 settle
    ];
    expect(isPendingClearance(1000, entries, threshold)).toBe(true);
  });

  it('非通关的结算（负分）不清除标记', () => {
    const entries: LedgerDisplayEntry[] = [
      { delta: -800, source: '消耗', type: 'tag', at: '9/1 12:00', mesIndex: 1 },
      { delta: -150, source: '副本结算·失败', type: 'settle', at: '9/1 13:00', mesIndex: 2 }, // delta < 0，不清除
    ];
    expect(isPendingClearance(1000, entries, threshold)).toBe(true);
  });
});

// ───────────── formatBalanceInjection ─────────────

describe('formatBalanceInjection', () => {
  it('正常余额无待清算', () => {
    const text = formatBalanceInjection(1500, false);
    expect(text).toContain('当前积分：1500');
    expect(text).not.toContain('待清算');
  });

  it('待清算时包含说明', () => {
    const text = formatBalanceInjection(200, true);
    expect(text).toContain('待清算：是');
  });
});
