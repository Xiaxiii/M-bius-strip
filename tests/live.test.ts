import { describe, it, expect } from 'vitest';
import {
  calcHype,
  calcHeat,
  calcViewers,
  calcTips,
  drawDanmaku,
  detectHurt,
  VIEWER_BASE,
} from '../src/core/live';
import type { PoolItem, TemplateItem, PackDanmakuItem } from '../src/core/live';

// ─────────────────── detectHurt ───────────────────

describe('detectHurt', () => {
  it('受伤关键词命中', () => {
    expect(detectHurt('他受伤倒地')).toBe(true);
    expect(detectHurt('大量流血')).toBe(true);
    expect(detectHurt('阵亡了')).toBe(true);
    expect(detectHurt('被击中骨折')).toBe(true);
  });

  it('平静正文不命中', () => {
    expect(detectHurt('大家聊天喝茶')).toBe(false);
    expect(detectHurt('')).toBe(false);
  });
});

// ─────────────────── calcHype ───────────────────

describe('calcHype', () => {
  it('副API有 subHype 时直接用', () => {
    expect(calcHype({ subHype: 75, hasEvents: false, hasPhaseSwitch: false })).toBe(75);
  });

  it('subHype 超界时限制到 0–100', () => {
    expect(calcHype({ subHype: 150, hasEvents: false, hasPhaseSwitch: false })).toBe(100);
    expect(calcHype({ subHype: -10, hasEvents: false, hasPhaseSwitch: false })).toBe(0);
  });

  it('基础20，无事件无切换无受伤', () => {
    expect(calcHype({ hasEvents: false, hasPhaseSwitch: false, bodyText: '平静聊天' })).toBe(20);
  });

  it('有注入事件 +20', () => {
    expect(calcHype({ hasEvents: true, hasPhaseSwitch: false, bodyText: '平静' })).toBe(40);
  });

  it('有阶段切换 +20', () => {
    expect(calcHype({ hasEvents: false, hasPhaseSwitch: true, bodyText: '平静' })).toBe(40);
  });

  it('有受伤关键词 +30', () => {
    expect(calcHype({ hasEvents: false, hasPhaseSwitch: false, bodyText: '他受伤倒地' })).toBe(50);
  });

  it('三项叠加不超过100', () => {
    expect(calcHype({ hasEvents: true, hasPhaseSwitch: true, bodyText: '死亡' })).toBe(90);
  });

  it('全加精彩度上限100', () => {
    // 20+20+20+30=90，已在90，不会溢出
    expect(calcHype({ hasEvents: true, hasPhaseSwitch: true, bodyText: '阵亡了' })).toBe(90);
  });

  it('精彩度0：无事件、无切换、无受伤，subHype=0', () => {
    expect(calcHype({ subHype: 0, hasEvents: false, hasPhaseSwitch: false })).toBe(0);
  });

  it('精彩度100：subHype=100', () => {
    expect(calcHype({ subHype: 100, hasEvents: true, hasPhaseSwitch: true })).toBe(100);
  });

  it('subHurt=true 时用 subHurt，不关键词检测', () => {
    expect(calcHype({ subHurt: true, hasEvents: false, hasPhaseSwitch: false, bodyText: '平静' })).toBe(50);
    expect(calcHype({ subHurt: false, hasEvents: false, hasPhaseSwitch: false, bodyText: '他受伤' })).toBe(20);
  });
});

// ─────────────────── calcHeat ───────────────────

describe('calcHeat', () => {
  it('开播第一轮：prevHeat=20, hype=50 → round(20×0.6+50×0.4)=32', () => {
    expect(calcHeat(20, 50)).toBe(32);
  });

  it('热度取整', () => {
    expect(calcHeat(50, 30)).toBe(round(50 * 0.6 + 30 * 0.4));
  });

  it('hype=0 时热度自然衰减', () => {
    expect(calcHeat(100, 0)).toBe(60);
  });

  it('hype=100 时热度逐步上升', () => {
    expect(calcHeat(0, 100)).toBe(40);
    expect(calcHeat(40, 100)).toBe(64);
  });
});

function round(x: number) { return Math.round(x); }

// ─────────────────── calcViewers ───────────────────

describe('calcViewers', () => {
  it('副本内用副本等级（非 rest）', () => {
    const v = calcViewers({ packLevel: 'B', playerLevel: 'D', isRest: false, heat: 50, rand: 1.0 });
    // base=30000, corr=1, (0.5+50/100)=1.0, rand=1.0
    expect(v).toBe(30000);
  });

  it('回廊（packLevel=null）用玩家等级×0.3', () => {
    const v = calcViewers({ packLevel: null, playerLevel: 'D', isRest: false, heat: 50, rand: 1.0 });
    // base=2000×0.3×1.0×1.0
    expect(v).toBe(600);
  });

  it('休整副本按回廊算，即使 packLevel 非 null', () => {
    const v = calcViewers({ packLevel: 'S', playerLevel: 'D', isRest: true, heat: 50, rand: 1.0 });
    expect(v).toBe(600); // D级×0.3
  });

  it('rand 影响人数', () => {
    const lo = calcViewers({ packLevel: 'D', playerLevel: 'D', isRest: false, heat: 0, rand: 0.9 });
    const hi = calcViewers({ packLevel: 'D', playerLevel: 'D', isRest: false, heat: 0, rand: 1.1 });
    expect(hi).toBeGreaterThan(lo);
  });

  it('VIEWER_BASE 各等级正确', () => {
    expect(VIEWER_BASE['D']).toBe(2000);
    expect(VIEWER_BASE['S']).toBe(300000);
  });
});

// ─────────────────── calcTips ───────────────────

describe('calcTips', () => {
  const names = ['小满', '好运来', '数据党'];

  it('精彩度0时基本没有打赏', () => {
    // expected = 0/40 = 0，每笔 p<=0
    const r = calcTips({ hype: 0, isCorr: false, rand: () => 0.99, names });
    expect(r.count).toBe(0);
    expect(r.netTotal).toBe(0);
  });

  it('精彩度40时期望1笔：rand < p 时有打赏', () => {
    // expected=1, 第1笔 p=1 → rand=0 < 1 → 有
    let i = 0;
    const seqRand = [0.5, 0.0, 0.0]; // 第1笔触发, 金额权重用0选第一个10
    const r = calcTips({ hype: 40, isCorr: false, rand: () => seqRand[i++] ?? 0.5, names });
    expect(r.count).toBe(1);
    expect(r.faces.length).toBe(1);
  });

  it('最多3笔', () => {
    // hype=120 → expected=3, 每笔 p>=1
    let i = 0;
    const seqRand = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 全0 → 全触发，金额选最小
    const r = calcTips({ hype: 120, isCorr: false, rand: () => 0, names });
    expect(r.count).toBeLessThanOrEqual(3);
  });

  it('回廊金额×0.3，最少10', () => {
    // 强制触发1笔 (p=1)，rand固定选第一档10
    let i = 0;
    const r = calcTips({ hype: 40, isCorr: true, rand: () => [0, 0, 0][i++] ?? 0.5, names });
    if (r.count > 0) {
      for (const f of r.faces) {
        expect(f).toBeGreaterThanOrEqual(10);
        expect(f % 10).toBe(0);
      }
    }
  });

  it('到账 = floor(总面值×0.6)', () => {
    let i = 0;
    const r = calcTips({ hype: 40, isCorr: false, rand: () => [0, 0, 0][i++] ?? 0.5, names });
    expect(r.netTotal).toBe(Math.floor(r.totalFace * 0.6));
  });

  it('单笔流水格式：直播打赏500×60%', () => {
    let i = 0;
    // 让第1笔触发，金额选500（权重位置5，rand=0.88左右）
    // 直接测 source 格式
    const r = calcTips({ hype: 40, isCorr: false, rand: () => [0, 0.88, 0][i++] ?? 0.5, names });
    if (r.count === 1) {
      expect(r.source).toMatch(/^直播打赏\d+×60%$/);
    }
  });

  it('多笔流水格式：直播打赏N笔·共M×60%', () => {
    let i = 0;
    // hype=80, 期望2笔，rand全小于p
    const r = calcTips({ hype: 80, isCorr: false, rand: () => [0, 0, 0, 0, 0, 0][i++] ?? 0, names });
    if (r.count >= 2) {
      expect(r.source).toMatch(/^直播打赏\d+笔·共\d+×60%$/);
    }
  });
});

// ─────────────────── drawDanmaku ───────────────────

const POOL: PoolItem[] = [
  { type: 'praise', text: '太厉害了' },
  { type: 'praise', text: '真的好厉害' },
  { type: 'discuss', text: '精彩' },
  { type: 'discuss', text: '好看' },
  { type: 'discuss', text: '看直播了' },
  { type: 'bless',  text: '冲冲冲' },
  { type: 'cold',   text: '一般般吧' },
  { type: 'bless',  text: '牛' },
  { type: 'praise', text: '不愧是主播', scope: 'inst' },
  { type: 'bless',  text: '回廊快乐', scope: 'corr' },
  { type: 'cold',   text: '演的吧', when: 'calm' },
  { type: 'bless',  text: '好险', when: 'hurt' },
  { type: 'discuss', text: '快到终点了', when: 'end' },
  { type: 'praise', text: '加油！', when: 'open' },
];

const TEMPLATES: TemplateItem[] = [
  { type: 'praise', text: '{who}好帅' },
  { type: 'bless',  text: '心疼{who}', when: 'hurt' },
];

const PACK_DANMAKU: PackDanmakuItem[] = [
  { type: 'discuss', text: '钟楼专属弹幕' },
  { type: 'discuss', text: '只在白天', phase: ['d1'] },
];

const NAMES = ['小满', '好运来', '数据党', '匿名用户', 'A级路过'];

describe('drawDanmaku', () => {
  const baseOpts = {
    pool: POOL, templates: TEMPLATES, packDanmaku: [],
    isInst: false, isRest: false,
    isHurt: false, hype: 50, isOpen: false, isEnd: false,
    recentTexts: [], names: NAMES, whoNames: [], rand: Math.random,
  };

  it('每轮10–13条', () => {
    const big: PoolItem[] = Array.from({ length: 40 }, (_, i) => ({ type: 'discuss', text: `弹幕${i}` }));
    const seen = new Set<number>();
    for (let t = 0; t < 40; t++) {
      const r = drawDanmaku({ ...baseOpts, pool: big, templates: [], rand: Math.random });
      expect(r.length).toBeGreaterThanOrEqual(10);
      expect(r.length).toBeLessThanOrEqual(13);
      seen.add(r.length);
    }
    expect(seen.size).toBeGreaterThan(1);
  });

  it('指定条数时按指定抽', () => {
    const big: PoolItem[] = Array.from({ length: 40 }, (_, i) => ({ type: 'discuss', text: `弹幕${i}` }));
    expect(drawDanmaku({ ...baseOpts, pool: big, templates: [], count: 13, rand: Math.random })).toHaveLength(13);
  });

  it('scope=inst 只在副本内出现', () => {
    // 回廊：不应出现 scope=inst 的「不愧是主播」
    const corrResults = [];
    for (let t = 0; t < 50; t++) {
      corrResults.push(...drawDanmaku({ ...baseOpts, isInst: false, rand: seqRand() }));
    }
    expect(corrResults.every((x) => x.text !== '不愧是主播')).toBe(true);
  });

  it('scope=corr 只在回廊出现', () => {
    const instResults = [];
    for (let t = 0; t < 50; t++) {
      instResults.push(...drawDanmaku({ ...baseOpts, isInst: true, rand: seqRand() }));
    }
    expect(instResults.every((x) => x.text !== '回廊快乐')).toBe(true);
  });

  it('when=hurt 只在受伤轮出现', () => {
    // 非受伤轮不应出现 when=hurt 条目
    const noHurt = [];
    for (let t = 0; t < 50; t++) {
      noHurt.push(...drawDanmaku({ ...baseOpts, isHurt: false, rand: seqRand() }));
    }
    expect(noHurt.every((x) => x.text !== '好险')).toBe(true);
  });

  it('when=calm 只在精彩度<30时出现', () => {
    const high = [];
    for (let t = 0; t < 50; t++) {
      high.push(...drawDanmaku({ ...baseOpts, hype: 80, rand: seqRand() }));
    }
    expect(high.every((x) => x.text !== '演的吧')).toBe(true);
  });

  it('最近30条不重复', () => {
    const recent = ['太厉害了'];
    const r = drawDanmaku({ ...baseOpts, recentTexts: recent, rand: seqRand() });
    expect(r.every((x) => x.text !== '太厉害了')).toBe(true);
  });

  it('没有角色名时不抽 templates', () => {
    const results: string[] = [];
    for (let t = 0; t < 100; t++) {
      drawDanmaku({ ...baseOpts, whoNames: [], rand: seqRand() })
        .forEach((x) => results.push(x.text));
    }
    expect(results.every((t) => !t.includes('{who}'))).toBe(true);
    // 没有 whoNames 时 templates 不会出现
    expect(results.every((t) => t !== '{who}好帅' && t !== '心疼{who}')).toBe(true);
  });

  it('有角色名时 templates 可出现，{who} 被替换', () => {
    const results: string[] = [];
    for (let t = 0; t < 200; t++) {
      drawDanmaku({ ...baseOpts, whoNames: ['小花'], rand: seqRand() })
        .forEach((x) => results.push(x.text));
    }
    // templates 被替换，不出现 {who}
    expect(results.every((t) => !t.includes('{who}'))).toBe(true);
    // 有「小花好帅」出现
    expect(results.some((t) => t === '小花好帅')).toBe(true);
  });

  it('副本专属约三成从专属池抽', () => {
    let packHit = 0, total = 0;
    for (let t = 0; t < 200; t++) {
      drawDanmaku({
        ...baseOpts, isInst: true,
        packDanmaku: PACK_DANMAKU,
        rand: seqRand(),
      }).forEach((x) => {
        total++;
        if (x.text === '钟楼专属弹幕') packHit++;
      });
    }
    // 约30%，允许宽松范围 5–60%
    expect(packHit / total).toBeGreaterThan(0.05);
    expect(packHit / total).toBeLessThan(0.6);
  });

  it('副本专属 phase 过滤：带 phase 的只在该阶段可抽', () => {
    // currentPhase=d1 → 可抽「只在白天」
    let hitD1 = 0;
    for (let t = 0; t < 500; t++) {
      drawDanmaku({
        ...baseOpts, isInst: true, packDanmaku: PACK_DANMAKU,
        currentPhase: 'd1', rand: Math.random,
      }).forEach((x) => { if (x.text === '只在白天') hitD1++; });
    }
    expect(hitD1).toBeGreaterThan(0);

    // currentPhase=d2 → 不抽「只在白天」
    let hitD2 = 0;
    for (let t = 0; t < 200; t++) {
      drawDanmaku({
        ...baseOpts, isInst: true, packDanmaku: PACK_DANMAKU,
        currentPhase: 'd2', rand: Math.random,
      }).forEach((x) => { if (x.text === '只在白天') hitD2++; });
    }
    expect(hitD2).toBe(0);
  });

  it('休整副本按回廊范围：scope=corr 可抽，scope=inst 不抽', () => {
    const restResults: string[] = [];
    for (let t = 0; t < 100; t++) {
      drawDanmaku({ ...baseOpts, isInst: true, isRest: true, rand: seqRand() })
        .forEach((x) => restResults.push(x.text));
    }
    expect(restResults.every((t) => t !== '不愧是主播')).toBe(true); // inst
    expect(restResults.some((t) => t === '回廊快乐')).toBe(true);    // corr
  });
});

// ─── 辅助：简单确定性 rand 生成器 ───
function seqRand() {
  let n = 0.13;
  return () => { n = (n * 9301 + 49297) % 233280; return n / 233280; };
}
