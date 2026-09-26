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
  it('D副本 C玩家 B评：等级不符×0.6 → 360', () => {
    const r = calcSettlementDelta('D', 'C', { 结果: '通关', 评价: 'B' }, 1000, false);
    expect(r.delta).toBe(360); // SCORE_TABLE[D][B]=600 × 0.6
  });

  it('同级 S副本 S玩家 S评：全额 → 115000', () => {
    const r = calcSettlementDelta('S', 'S', { 结果: '通关', 评价: 'S' }, 5000, false);
    expect(r.delta).toBe(115000);
  });

  it('B副本 B玩家 S评：全额 → 12500', () => {
    const r = calcSettlementDelta('B', 'B', { 结果: '通关', 评价: 'S' }, 5000, false);
    expect(r.delta).toBe(12500);
  });

  it('越级×0.6：A副本 A玩家 越级=是 B评 → 12900', () => {
    const r = calcSettlementDelta('A', 'A', { 结果: '通关', 评价: 'B', 越级: '是' }, 5000, false);
    expect(r.delta).toBe(Math.round(21500 * 0.6)); // 12900
  });

  it('抽查×0.5 优先于越级：S副本 S玩家 抽查=是 A评 → 42500', () => {
    const r = calcSettlementDelta('S', 'S', { 结果: '通关', 评价: 'A', 抽查: '是', 越级: '是' }, 5000, false);
    expect(r.delta).toBe(Math.round(85000 * 0.5)); // 42500
  });

  it('普通失败扣当前余额30%：balance=1000 → -300', () => {
    const r = calcSettlementDelta('D', 'D', { 结果: '失败' }, 1000, false);
    expect(r.delta).toBe(-300);
  });

  it('清算副本通关：补至斩杀线+500，余额=100，D级玩家 → delta=700', () => {
    const r = calcSettlementDelta('D', 'D', { 结果: '通关', 评价: 'S' }, 100, true);
    expect(r.delta).toBe(700); // KILL_THRESHOLDS['D']+500=800, 800-100=700
  });

  it('清算副本通关：余额已高于目标时 delta=0', () => {
    const r = calcSettlementDelta('D', 'D', { 结果: '通关', 评价: 'S' }, 2000, true);
    expect(r.delta).toBe(0);
  });

  it('清算副本失败：不记账，delta=0', () => {
    const r = calcSettlementDelta('D', 'D', { 结果: '失败' }, 1000, true);
    expect(r.delta).toBe(0);
  });

  it('斩杀线按玩家等级：C级=1000，D级=300', () => {
    expect(KILL_THRESHOLDS['C']).toBe(1000);
    expect(KILL_THRESHOLDS['D']).toBe(300);
  });

  it('结果不明确返回 delta=0', () => {
    expect(calcSettlementDelta('B', 'B', { 结果: '' }, 1000, false).delta).toBe(0);
    expect(calcSettlementDelta('B', 'B', {}, 1000, false).delta).toBe(0);
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

// ───────────── formatBalanceInjection（第二部分：新注入格式）─────────────

describe('buildLedgerInjection 格式', () => {
  it('无待清算时输出简短格式', () => {
    const text = formatBalanceInjection(2600, false);
    expect(text).toBe('［账户·仅供AI］积分：2600　待清算：无');
  });

  it('待清算时包含斩杀线说明', () => {
    const text = formatBalanceInjection(120, true, 'D');
    expect(text).toBe('［账户·仅供AI］积分：120　待清算：已标记，距斩杀线180分（D级斩杀线300）。商城价格上浮30%，下一场副本为清算副本。');
  });
});

// ───────────── buildFixSentence（账户校正，甲·二·4）─────────────

import { buildFixSentence } from '../src/core/ledger';

describe('buildFixSentence（账户校正句）', () => {
  it('只填等级时不提位格', () => {
    const s = buildFixSentence({ level: 'C' });
    expect(s).toBe('本轮状态栏里{{user}}的等级写C，之后按剧情照常。');
    expect(s).not.toContain('位格');
  });

  it('只填位格时不提等级', () => {
    const s = buildFixSentence({ rank: '执事长' });
    expect(s).toBe('本轮状态栏里{{user}}的位格写执事长，之后按剧情照常。');
    expect(s).not.toContain('等级');
  });

  it('同时填等级和位格时两者都在句中', () => {
    const s = buildFixSentence({ level: 'B', rank: '主事' });
    expect(s).toBe('本轮状态栏里{{user}}的等级写B、位格写主事，之后按剧情照常。');
  });

  it('两者都为空时返回空字符串', () => {
    expect(buildFixSentence({})).toBe('');
    expect(buildFixSentence({ level: undefined, rank: undefined })).toBe('');
  });

  it('校正句只注入一次：有 fix 时出现，无 fix 时不出现', () => {
    // 验证 formatBalanceInjection 本身不含校正句（校正句由 app.ts 在其后追加）
    const base = formatBalanceInjection(500, false);
    expect(base).not.toContain('状态栏');
  });

  it('校正期间斩杀线按 fix.level 等级算', () => {
    // fix.level = 'C' → 斩杀线应为 1000；余额 800 距斩杀线 200
    const threshold = KILL_THRESHOLDS['C'];
    expect(threshold).toBe(1000);
    const text = formatBalanceInjection(800, true, 'C', threshold);
    expect(text).toContain('距斩杀线200分（C级斩杀线1000）');
  });
});
