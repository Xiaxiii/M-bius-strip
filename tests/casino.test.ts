/** 黑市·赌坊的纯函数（第四期-第1段） */
import { describe, expect, it } from 'vitest';
import { casinoPayout, casinoSource, drawTables, ensureTables, playCasino, TABLES } from '../src/core/casino';

/** 可复现的伪随机数 */
function seeded(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** 固定返回序列里的值 */
const seq = (...vals: number[]) => {
  let i = 0;
  return () => vals[Math.min(i++, vals.length - 1)];
};

describe('四张桌', () => {
  it('桌名与一句话', () => {
    expect(TABLES.map((t) => [t.name, t.desc])).toEqual([
      ['听钟', '押钟声单双、大小，或猜几下。'],
      ['门牌', '押指针停在哪扇门。'],
      ['抽签', '三支签，一支大吉。'],
      ['翻牌', '和庄家各翻一张，大的赢，平局庄家赢。'],
    ]);
  });

  it('听钟：1–12 下；单双、大小 ×1.6，猜下数 ×9.6', () => {
    // rand 0.5 → 7 下
    const odd = playCasino('bell', 'odd', 100, () => 0.5)!;
    expect(odd).toMatchObject({ win: true, payout: 160, net: 60, result: '7下，单', label: '押单' });
    expect(playCasino('bell', 'even', 100, () => 0.5)).toMatchObject({ win: false, payout: 0, net: -100 });
    expect(playCasino('bell', 'big', 100, () => 0.5)).toMatchObject({ win: true, result: '7下，大' });
    expect(playCasino('bell', 'small', 100, () => 0.49)).toMatchObject({ win: true, result: '6下，小' });
    expect(playCasino('bell', 'n7', 100, () => 0.5)).toMatchObject({ win: true, payout: 960, result: '7下', label: '押7下' });
    expect(playCasino('bell', 'n1', 100, () => 0)).toMatchObject({ win: true, result: '1下' });
    expect(playCasino('bell', 'n12', 100, () => 0.9999)).toMatchObject({ win: true, result: '12下' });
  });

  it('门牌：1–20 号；单号 ×16，一段 ×3.2', () => {
    expect(playCasino('door', 'd12', 100, () => 0.55)).toMatchObject({ win: true, payout: 1600, result: '12号门', label: '押12号' });
    expect(playCasino('door', 'r3', 100, () => 0.55)).toMatchObject({ win: true, payout: 320, label: '押11–15' });
    expect(playCasino('door', 'r1', 100, () => 0.55)).toMatchObject({ win: false, net: -100, result: '12号门' });
    expect(playCasino('door', 'r1', 100, () => 0.2)).toMatchObject({ win: true, result: '5号门' });
    expect(playCasino('door', 'r2', 100, () => 0.25)).toMatchObject({ win: true, result: '6号门' });
  });

  it('抽签：三支一支大吉，押中 ×2.4', () => {
    expect(playCasino('lot', 's2', 100, () => 0.5)).toMatchObject({ win: true, payout: 240, result: '第2支大吉', label: '押第2支' });
    expect(playCasino('lot', 's1', 100, () => 0.5)).toMatchObject({ win: false, net: -100 });
  });

  it('翻牌：各翻一张，大的赢，平局庄家赢，×1.73', () => {
    expect(playCasino('card', 'high', 100, seq(0.7, 0.3))).toMatchObject({ win: true, payout: 173, net: 73, faces: [10, 4], result: '你 10，庄家 4' });
    expect(playCasino('card', 'high', 100, seq(0.3, 0.3))).toMatchObject({ win: false, net: -100 });
    expect(playCasino('card', 'high', 100, seq(0.1, 0.9))).toMatchObject({ win: false });
  });

  it('赔付 = 向下取整(押注 × 倍数)', () => {
    expect(casinoPayout(33, 1.73)).toBe(57);
    expect(casinoPayout(10, 1.6)).toBe(16);
    expect(casinoPayout(7, 2.4)).toBe(16);
  });

  it('没有的桌或押法返回 null；流水文字', () => {
    expect(playCasino('x', 'odd', 100, () => 0.5)).toBeNull();
    expect(playCasino('bell', 'x', 100, () => 0.5)).toBeNull();
    expect(casinoSource('bell', '押单')).toBe('赌坊·听钟·押单');
  });
});

describe('长期期望都是押注的80%', () => {
  const N = 200_000;
  const cases: [string, string][] = [
    ['bell', 'odd'],
    ['bell', 'big'],
    ['bell', 'n5'],
    ['door', 'd3'],
    ['door', 'r4'],
    ['lot', 's3'],
    ['card', 'high'],
  ];
  for (const [table, bet] of cases) {
    it(`${table}·${bet}`, () => {
      const rand = seeded(table.length * 97 + bet.length * 13);
      let back = 0;
      for (let i = 0; i < N; i++) back += playCasino(table, bet, 100, rand)!.payout;
      const ev = back / (N * 100);
      expect(ev).toBeGreaterThan(0.77);
      expect(ev).toBeLessThan(0.83);
    });
  }

  it('理论值', () => {
    expect((1 / 2) * 1.6).toBeCloseTo(0.8);
    expect((1 / 12) * 9.6).toBeCloseTo(0.8);
    expect((1 / 20) * 16).toBeCloseTo(0.8);
    expect((5 / 20) * 3.2).toBeCloseTo(0.8);
    expect((1 / 3) * 2.4).toBeCloseTo(0.8);
    expect((78 / 169) * 1.73).toBeCloseTo(0.8, 2);
  });
});

describe('摆桌', () => {
  it('四张里随机选两张，不重复', () => {
    const rand = seeded(7);
    const seen = new Set<string>();
    for (let i = 0; i < 500; i++) {
      const t = drawTables(rand);
      expect(t.length).toBe(2);
      expect(t[0]).not.toBe(t[1]);
      seen.add(t.join());
    }
    expect(seen.size).toBe(12);
  });

  it('没有摆桌记录时抽；同一段回廊里不变；回到回廊（key 变了）才重抽', () => {
    const first = ensureTables({ tables: [], key: '' }, '', () => 0);
    expect(first.changed).toBe(true);
    expect(first.tables).toEqual(['bell', 'door']);
    const again = ensureTables({ tables: first.tables, key: first.key }, '', () => 0.99);
    expect(again.changed).toBe(false);
    expect(again.tables).toEqual(['bell', 'door']);
    const back = ensureTables({ tables: first.tables, key: '' }, 'session-1', () => 0.99);
    expect(back.changed).toBe(true);
    expect(back.tables).toEqual(['card', 'lot']);
    expect(back.key).toBe('session-1');
  });
});
