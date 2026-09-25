import { describe, expect, it } from 'vitest';
import { detectBriefing, detectPanel, detectPhaseSwitch, detectRoles, detectSettlement, detectSkip } from '../src/core/detector';
import { buildGenericPack, BUILTIN_PACKS, validatePack } from '../src/packs/loader';
import { stripHiddenTags } from '../src/core/hideTags';
import { BRIEFING } from './helpers';

describe('识别', () => {
  it('识别钟楼简报', () => {
    expect(detectBriefing(BRIEFING)?.name).toBe('钟楼');
    expect(detectBriefing('没有简报')).toBeNull();
  });

  it('通用副本包能从示例简报里读出名称、等级、目标、时限', () => {
    const text = '「副本简报 — 雾港」\n「等级：B」\n「目标：找到灯塔守的日记」\n「时限：三天」\n其他内容';
    const info = detectBriefing(text)!;
    expect(info).toMatchObject({ name: '雾港', level: 'B', goal: '找到灯塔守的日记', limit: '三天' });
    const pack = buildGenericPack(info);
    expect(pack.name).toBe('雾港');
    expect(pack.level).toBe('B');
    expect(pack.token).toBe('【副本进行中：雾港】');
    // 「三天」读不出数字时长：只按等级默认值计轮（B 级 110 轮），不计约剩时间
    expect(pack.phases).toEqual([{ id: 'main', name: '雾港', cap: 110, next: null }]);
    expect(pack.time).toEqual({ type: 'none' });
    expect(validatePack({ ...pack, id: 'wugang' })).toEqual([]);
  });

  it('阶段切换、结算、角色登记', () => {
    expect(detectPhaseSwitch('x<阶段切换> 审判 </阶段切换>')).toBe('审判');
    expect(detectSettlement('<副本结算>结果=通关｜评价=S｜备注=无</副本结算>')).toMatchObject({ result: '通关', rating: 'S' });
    expect(detectRoles('<角色登记>死者=周遥｜布局者=林默</角色登记>')).toEqual({ 死者: '周遥', 布局者: '林默' });
  });

  it('副本面板', () => {
    const p = detectPanel('<副本>\n时限：剩余2天\n进度条：■■□□□\n任务：\n1. 找到钥匙\n2. 活下来\nps：别回头\n</副本>')!;
    expect(p.limit).toBe('剩余2天');
    expect(p.progressBar).toBe('■■□□□');
    expect(p.tasks).toEqual(['1. 找到钥匙', '2. 活下来']);
    expect(p.ps).toBe('别回头');
  });

  it('跳过关键词', () => {
    expect(detectSkip('我们睡到天亮吧')).toBe('天亮');
    expect(detectSkip('跳到日落')).toBe('日落');
    expect(detectSkip('今天天气不错')).toBeNull();
  });

  it('隐藏标签只处理指定标签', () => {
    const text = '正文\n\n<副本>\n时限：1天\n</副本>\n\n\n<状态栏>HP</状态栏>\n<阶段切换>调查</阶段切换><角色登记>死者=甲</角色登记>';
    expect(stripHiddenTags(text)).toBe('正文\n\n<状态栏>HP</状态栏>');
  });
});

describe('副本包', () => {
  it('内置包全部通过格式校验', () => {
    for (const p of BUILTIN_PACKS) expect(validatePack(p), p.id).toEqual([]);
    expect(BUILTIN_PACKS.find((p) => p.id === 'zhonglou')!.events).toHaveLength(30);
  });

  it('错误的包被拒绝', () => {
    expect(validatePack(null).length).toBeGreaterThan(0);
    const bad = { ...BUILTIN_PACKS[0], phases: [{ id: 'a', name: 'A', cap: 3, next: 'zzz' }] };
    expect(validatePack(bad).join()).toContain('不存在的阶段');
  });
});

describe('内置包与 packs/ 同步', () => {
  it('src/packs/builtin 与 packs/ 内容一致', () => {
    const src = import.meta.glob('../packs/*', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
    const built = import.meta.glob('../src/packs/builtin/*', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
    const names = Object.keys(src).map((k) => k.split('/').pop()!);
    expect(names.length).toBeGreaterThan(0);
    for (const n of names) expect(built[`../src/packs/builtin/${n}`], n).toBe(src[`../packs/${n}`]);
  });

  it('钟楼为 1.3.0，第三夜事件已更新', () => {
    const zl = BUILTIN_PACKS.find((p) => p.id === 'zhonglou')!;
    expect(zl.version).toBe('1.3.0');
    expect(zl.events.find((e) => e.id === 'E27')!.text).toContain('成为钟守');
  });
});
