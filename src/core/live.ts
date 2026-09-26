/** 直播计算纯函数（第三期，乙第2段）。所有随机数通过参数传入，便于测试。
 *  文字内容由作者维护，不要改写。*/
import type { Level } from '../packs/types';

// ─────────────────── 类型 ───────────────────

export interface DanmakuLine {
  name: string;
  text: string;
  type: string;
}

export interface TipResult {
  count: number;
  /** 总金额（打赏面值合计） */
  totalFace: number;
  /** 每笔面值列表 */
  faces: number[];
  /** 到账合计（×60% floor） */
  netTotal: number;
  /** 账本流水文字 */
  source: string;
  /** 打赏者名字（与 faces 一一对应） */
  names: string[];
}

export interface PoolItem {
  type: string;
  text: string;
  scope?: string;
  when?: string;
}

export interface TemplateItem {
  type: string;
  text: string;
  when?: string;
}

export interface PackDanmakuItem {
  type: string;
  text: string;
  when?: string;
  scope?: string;
  phase?: string[];
}

// ─────────────────── 观众基数 ───────────────────

export const VIEWER_BASE: Record<Level, number> = {
  D: 2000, C: 8000, B: 30000, A: 100000, S: 300000,
};

// ─────────────────── 受伤/死亡关键词 ───────────────────

const HURT_WORDS = [
  '受伤', '受伤了', '流血', '骨折', '昏迷', '倒下', '晕倒', '死亡', '死了', '牺牲',
  '阵亡', '重伤', '负伤', '受了伤', '被打中', '被击中', '命殒', '丧命', '伤亡',
];

/** 判断正文是否有人受伤或死亡 */
export function detectHurt(bodyText: string): boolean {
  return HURT_WORDS.some((w) => bodyText.includes(w));
}

// ─────────────────── 1. 精彩度 ───────────────────

/** 精彩度 hype，0–100。随机数通过 rand 传入（0–1）。
 *  subHype: 副API返回的打分，有值时直接用。
 *  subHurt: 副API返回的受伤判断，有值时用它，否则关键词检测 bodyText。*/
export function calcHype(opts: {
  subHype?: number;
  hasEvents: boolean;
  hasPhaseSwitch: boolean;
  bodyText?: string;
  subHurt?: boolean;
}): number {
  if (opts.subHype !== undefined) {
    return Math.max(0, Math.min(100, Math.round(opts.subHype)));
  }
  const hurt = opts.subHurt !== undefined
    ? opts.subHurt
    : (opts.bodyText ? detectHurt(opts.bodyText) : false);
  let score = 20;
  if (opts.hasEvents) score += 20;
  if (opts.hasPhaseSwitch) score += 20;
  if (hurt) score += 30;
  return Math.min(100, score);
}

// ─────────────────── 2. 热度 ───────────────────

/** 热度 heat，0–100 取整。开播第一轮传 prevHeat=20。 */
export function calcHeat(prevHeat: number, hype: number): number {
  return Math.round(prevHeat * 0.6 + hype * 0.4);
}

// ─────────────────── 3. 观看人数 ───────────────────

/** 观看人数。
 *  副本内用 packLevel（非 rest），回廊/rest 用 playerLevel×0.3。
 *  rand 为 0.9–1.1 之间的随机数（传入）。*/
export function calcViewers(opts: {
  packLevel: Level | null;
  playerLevel: Level;
  isRest: boolean;
  heat: number;
  rand: number;
}): number {
  const useLevel = (!opts.packLevel || opts.isRest) ? opts.playerLevel : opts.packLevel;
  const base = VIEWER_BASE[useLevel];
  const corr = (!opts.packLevel || opts.isRest) ? 0.3 : 1;
  return Math.round(base * corr * (0.5 + opts.heat / 100) * opts.rand);
}

// ─────────────────── 4. 打赏 ───────────────────

const TIP_AMOUNTS_NORMAL = [10, 20, 50, 100, 200, 500, 1000];
/** 正常权重（精彩度 < 70） */
const TIP_WEIGHTS_NORMAL = [20, 25, 15, 20, 10, 8, 2]; // 总和 100
/** 高精彩度权重（精彩度 ≥ 70）：500×2、1000×2，多出来从 10、20 各扣5 */
const TIP_WEIGHTS_HIGH   = [15, 20, 15, 20, 10, 16, 4]; // 总和 100

/** 按权重抽一个元素。rand 为 0–1 */
function weightedPick<T>(items: T[], weights: number[], rand: number): T {
  const total = weights.reduce((a, b) => a + b, 0);
  let r = rand * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r <= 0) return items[i];
  }
  return items[items.length - 1];
}

/** 计算打赏结果。
 *  rand(): 每次调用返回 0–1 的随机数（笔数 × 金额 × 名字各抽一次）。
 *  names: 弹幕池 names 数组。
 *  isCorr: 回廊中（金额×0.3，取整到10，最少10）。*/
export function calcTips(opts: {
  hype: number;
  isCorr: boolean;
  rand: () => number;
  names: string[];
}): TipResult {
  const { hype, isCorr, rand, names } = opts;
  const expected = hype / 40; // 期望笔数，最多3
  // 每笔独立概率：第n笔 P = clamp(expected - (n-1), 0, 1)
  const faces: number[] = [];
  const tipNames: string[] = [];
  const weights = hype >= 70 ? TIP_WEIGHTS_HIGH : TIP_WEIGHTS_NORMAL;
  for (let n = 1; n <= 3; n++) {
    const p = Math.min(1, Math.max(0, expected - (n - 1)));
    if (rand() < p) {
      let face = weightedPick(TIP_AMOUNTS_NORMAL, weights, rand());
      if (isCorr) {
        face = Math.max(10, Math.round((face * 0.3) / 10) * 10);
      }
      faces.push(face);
      tipNames.push(names[Math.floor(rand() * names.length)] ?? '匿名');
    }
  }
  const totalFace = faces.reduce((a, b) => a + b, 0);
  const netTotal = Math.floor(totalFace * 0.6);
  let source = '';
  if (faces.length === 1) {
    source = `直播打赏${faces[0]}×60%`;
  } else if (faces.length > 1) {
    source = `直播打赏${faces.length}笔·共${totalFace}×60%`;
  }
  return { count: faces.length, totalFace, faces, netTotal, source, names: tipNames };
}

// ─────────────────── 5. 本地弹幕抽取 ───────────────────

/** 弹幕抽取参数 */
export interface DrawDanmakuOpts {
  /** 通用弹幕池 pool 条目 */
  pool: PoolItem[];
  /** 通用弹幕池 templates */
  templates: TemplateItem[];
  /** 副本专属弹幕（可为空） */
  packDanmaku?: PackDanmakuItem[];
  /** 当前阶段 id，用于过滤 packDanmaku 的 phase 字段 */
  currentPhase?: string;
  /** 是否在副本内（false = 回廊） */
  isInst: boolean;
  /** 是否休整副本（rest=true 时按回廊范围抽） */
  isRest: boolean;
  /** 本轮是否有人受伤或死亡 */
  isHurt: boolean;
  /** 本轮精彩度 */
  hype: number;
  /** 是否在开播后前两轮 */
  isOpen: boolean;
  /** 剩余轮次是否低于总上限一成 */
  isEnd: boolean;
  /** 最近已发出的弹幕文字（去重用），最近30条 */
  recentTexts: string[];
  /** 弹幕发言人名字池（来自弹幕池 names） */
  names: string[];
  /** 用于角色名替换（{who}），来自最近 <状态栏> 角色详情块的「角色名」，不含{{user}} */
  whoNames: string[];
  /** 每次调用返回 0–1 随机数 */
  rand: () => number;
}

/** 判断一条 pool/template 条目是否在当前上下文可抽 */
function isAvailable(
  item: { scope?: string; when?: string },
  isInst: boolean,
  isRest: boolean,
  isHurt: boolean,
  hype: number,
  isOpen: boolean,
  isEnd: boolean,
): boolean {
  // scope：休整副本按回廊范围
  const effectiveInst = isInst && !isRest;
  if (item.scope === 'inst' && !effectiveInst) return false;
  if (item.scope === 'corr' && effectiveInst) return false;
  // when
  if (item.when === 'hurt' && !isHurt) return false;
  if (item.when === 'calm' && hype >= 30) return false;
  if (item.when === 'open' && !isOpen) return false;
  if (item.when === 'end' && !isEnd) return false;
  return true;
}

/** 本地弹幕抽取，每轮5–8条。随机数通过 rand 传入。 */
export function drawDanmaku(opts: DrawDanmakuOpts): DanmakuLine[] {
  const {
    pool, templates, packDanmaku = [], currentPhase,
    isInst, isRest, isHurt, hype, isOpen, isEnd,
    recentTexts, names, whoNames, rand,
  } = opts;

  const count = 5 + Math.floor(rand() * 4); // 5–8
  const results: DanmakuLine[] = [];
  const usedTexts = new Set(recentTexts);

  // 可用的通用 pool 条目
  const availPool = pool.filter((x) =>
    isAvailable(x, isInst, isRest, isHurt, hype, isOpen, isEnd),
  );

  // 可用的通用 templates 条目（需要 whoNames）
  const hasWho = whoNames.length > 0;
  const availTemplates = hasWho
    ? templates.filter((x) =>
        isAvailable(x, isInst, isRest, isHurt, hype, isOpen, isEnd),
      )
    : [];

  // 副本专属弹幕（当前阶段过滤）
  const availPack = packDanmaku.filter((x) => {
    if (!isAvailable(x, isInst, isRest, isHurt, hype, isOpen, isEnd)) return false;
    if (x.phase && x.phase.length > 0 && currentPhase) {
      return x.phase.includes(currentPhase);
    }
    return true;
  });

  const pickName = () => names[Math.floor(rand() * names.length)] ?? '匿名';
  const pickWho = () => whoNames[Math.floor(rand() * whoNames.length)] ?? '';

  for (let i = 0; i < count * 5 && results.length < count; i++) {
    let text = '';
    let type = 'discuss';

    // 约三成概率从专属池抽（副本专属有条目时）
    const usePackPool = availPack.length > 0 && rand() < 0.3;
    if (usePackPool) {
      const item = availPack[Math.floor(rand() * availPack.length)];
      text = item.text;
      type = item.type;
    } else {
      // 模板 or 通用 pool，各约50%（没有 whoNames 时只用 pool）
      const useTemplate = availTemplates.length > 0 && rand() < 0.5;
      if (useTemplate) {
        const tpl = availTemplates[Math.floor(rand() * availTemplates.length)];
        text = tpl.text.replace('{who}', pickWho());
        type = tpl.type;
      } else if (availPool.length > 0) {
        const item = availPool[Math.floor(rand() * availPool.length)];
        text = item.text;
        type = item.type;
      }
    }

    if (!text || usedTexts.has(text)) continue;
    usedTexts.add(text);
    results.push({ name: pickName(), text, type });
  }

  return results;
}
