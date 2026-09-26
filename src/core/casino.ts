/**
 * 黑市·赌坊的纯逻辑（第四期）：四张桌的玩法、赔付、摆桌。随机数一律通过参数传入。
 * 所有玩法长期期望都是押注的80%。
 */

export type TableId = 'bell' | 'door' | 'lot' | 'card';

export interface CasinoBet {
  id: string;
  /** 押法按钮上的文字 */
  label: string;
  /** 赔付倍数（赢时拿回 向下取整(押注 × 倍数)） */
  mult: number;
}

export interface CasinoTable {
  id: TableId;
  name: string;
  desc: string;
  bets: CasinoBet[];
}

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);

export const TABLES: CasinoTable[] = [
  {
    id: 'bell',
    name: '听钟',
    desc: '押钟声单双、大小，或猜几下。',
    bets: [
      { id: 'odd', label: '单', mult: 1.6 },
      { id: 'even', label: '双', mult: 1.6 },
      { id: 'small', label: '小', mult: 1.6 },
      { id: 'big', label: '大', mult: 1.6 },
      ...range(12).map((n) => ({ id: `n${n}`, label: `${n}下`, mult: 9.6 })),
    ],
  },
  {
    id: 'door',
    name: '门牌',
    desc: '押指针停在哪扇门。',
    bets: [
      { id: 'r1', label: '1–5', mult: 3.2 },
      { id: 'r2', label: '6–10', mult: 3.2 },
      { id: 'r3', label: '11–15', mult: 3.2 },
      { id: 'r4', label: '16–20', mult: 3.2 },
      ...range(20).map((n) => ({ id: `d${n}`, label: `${n}号`, mult: 16 })),
    ],
  },
  {
    id: 'lot',
    name: '抽签',
    desc: '三支签，一支大吉。',
    bets: range(3).map((n) => ({ id: `s${n}`, label: `第${n}支`, mult: 2.4 })),
  },
  {
    id: 'card',
    name: '翻牌',
    desc: '和庄家各翻一张，大的赢，平局庄家赢。',
    bets: [{ id: 'high', label: '比大小', mult: 1.73 }],
  },
];

export function tableOf(id: string): CasinoTable | undefined {
  return TABLES.find((t) => t.id === id);
}

/** 1..n 均匀 */
function roll(n: number, rand: () => number): number {
  return Math.min(n, 1 + Math.floor(rand() * n));
}

/** 赔付 = 向下取整(押注 × 倍数)；按分计算，避免浮点误差 */
export function casinoPayout(stake: number, mult: number): number {
  return Math.floor((stake * Math.round(mult * 100)) / 100);
}

export interface CasinoOutcome {
  win: boolean;
  /** 赢时的赔付（含本金）；输为0 */
  payout: number;
  /** 净得失：赢为 +(赔付−押注)，输为 −押注 */
  net: number;
  /** 结果文字，如「7下，单」「12号门」 */
  result: string;
  /** 押法文字，如「押单」 */
  label: string;
  /** 开出的数（动画用）：翻牌为 [你, 庄家] */
  faces: number[];
}

/** 开一局。桌或押法不存在时返回 null */
export function playCasino(tableId: string, betId: string, stake: number, rand: () => number): CasinoOutcome | null {
  const table = tableOf(tableId);
  const bet = table?.bets.find((b) => b.id === betId);
  if (!table || !bet) return null;
  let win = false;
  let result = '';
  let faces: number[] = [];
  switch (table.id) {
    case 'bell': {
      const n = roll(12, rand);
      faces = [n];
      if (bet.id === 'odd' || bet.id === 'even') {
        win = (n % 2 === 1) === (bet.id === 'odd');
        result = `${n}下，${n % 2 ? '单' : '双'}`;
      } else if (bet.id === 'small' || bet.id === 'big') {
        win = (n <= 6) === (bet.id === 'small');
        result = `${n}下，${n <= 6 ? '小' : '大'}`;
      } else {
        win = bet.id === `n${n}`;
        result = `${n}下`;
      }
      break;
    }
    case 'door': {
      const n = roll(20, rand);
      faces = [n];
      if (bet.id.startsWith('r')) {
        const k = Number(bet.id.slice(1));
        win = n > (k - 1) * 5 && n <= k * 5;
      } else win = bet.id === `d${n}`;
      result = `${n}号门`;
      break;
    }
    case 'lot': {
      const n = roll(3, rand);
      faces = [n];
      win = bet.id === `s${n}`;
      result = `第${n}支大吉`;
      break;
    }
    case 'card': {
      const a = roll(13, rand);
      const b = roll(13, rand);
      faces = [a, b];
      win = a > b;
      result = `你 ${a}，庄家 ${b}`;
      break;
    }
  }
  const payout = win ? casinoPayout(stake, bet.mult) : 0;
  return { win, payout, net: win ? payout - stake : -stake, result, label: `押${bet.label}`, faces };
}

/** 流水文字：「赌坊·听钟·押单」 */
export function casinoSource(tableId: string, label: string): string {
  return `赌坊·${tableOf(tableId)?.name ?? tableId}·${label}`;
}

/** 四张里随机选两张 */
export function drawTables(rand: () => number): TableId[] {
  const ids = TABLES.map((t) => t.id);
  const a = Math.min(ids.length - 1, Math.floor(rand() * ids.length));
  const rest = ids.filter((_, i) => i !== a);
  const b = Math.min(rest.length - 1, Math.floor(rand() * rest.length));
  return [ids[a], rest[b]];
}

/**
 * 摆桌：每次副本结束回到回廊（key 变了）、或聊天里没有摆桌记录时重新抽；否则沿用。
 * key = 最近结束的那一局的会话 id（从没进过副本为空串）。返回新的摆桌与是否重抽了。
 */
export function ensureTables(cur: { tables: string[]; key: string }, key: string, rand: () => number): { tables: string[]; key: string; changed: boolean } {
  const valid = cur.tables.length === 2 && cur.tables.every((t) => tableOf(t));
  if (valid && cur.key === key) return { tables: cur.tables, key, changed: false };
  return { tables: drawTables(rand), key, changed: true };
}
