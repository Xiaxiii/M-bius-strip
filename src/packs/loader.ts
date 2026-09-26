import type { BriefingInfo, Level, Pack } from './types';
import zhonglou from './builtin/zhonglou.json';
import jingjie from './builtin/jingjie.json';
import kaoshi from './builtin/kaoshi.json';
import xiyan from './builtin/xiyan.json';
import youxi from './builtin/youxi.json';
import wuming from './builtin/wuming.json';
import dusongshu from './builtin/dusongshu.json';
import nongxian from './builtin/nongxian.json';
import zhonglouMap from './builtin/zhonglou-map.svg?raw';
import { DEFAULT_GENERIC_CAPS, genericTiming, type GenericCaps } from '../core/timeLimit';

export const GENERIC_PACK_ID = 'generic';

export const BUILTIN_PACKS: Pack[] = [zhonglou, jingjie, kaoshi, xiyan, youxi, wuming, dusongshu, nongxian] as Pack[];

/** 内置包的图片：包 id → 包内路径 → 图片 URL */
const BUILTIN_ASSETS: Record<string, Record<string, string>> = {
  zhonglou: {
    'zhonglou-map.svg': 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(zhonglouMap),
  },
};

/** 解析资料页图片地址：内置包按包内路径加载；自定义包只接受 http(s) 或 data:image 地址 */
export function resolveDocImage(pack: Pack, path: string): string | null {
  const builtin = BUILTIN_ASSETS[pack.id]?.[path];
  if (builtin) return builtin;
  if (/^https?:\/\//i.test(path) || /^data:image\//i.test(path)) return path;
  return null;
}

const LEVELS: Level[] = ['D', 'C', 'B', 'A', 'S'];

/** 校验副本包格式。返回错误列表，空数组表示通过 */
export function validatePack(input: unknown): string[] {
  const errors: string[] = [];
  const p = input as Record<string, any>;
  if (!p || typeof p !== 'object' || Array.isArray(p)) return ['副本包必须是 JSON 对象'];

  const str = (k: string) => {
    if (typeof p[k] !== 'string' || !p[k].trim()) errors.push(`缺少字段或不是文本：${k}`);
  };
  str('id');
  str('name');
  str('version');
  str('token');
  if (typeof p.id === 'string' && !/^[A-Za-z0-9_-]+$/.test(p.id)) errors.push('id 只能包含字母、数字、下划线和短横线');
  if (p.id === GENERIC_PACK_ID) errors.push(`id 不能是保留字 ${GENERIC_PACK_ID}`);
  if (!LEVELS.includes(p.level)) errors.push('level 必须是 D/C/B/A/S 之一');
  if (p.players !== undefined && typeof p.players !== 'number' && typeof p.players !== 'string') errors.push('players 必须是数字或文本');
  if (!Array.isArray(p.legacyKeys) || p.legacyKeys.some((k: unknown) => typeof k !== 'string')) errors.push('legacyKeys 必须是文本数组');
  if (!p.detect || typeof p.detect.briefingName !== 'string' || !p.detect.briefingName) errors.push('缺少 detect.briefingName');
  // 非法正则不算格式错误：运行时跳过并在控制台警告
  else if (p.detect.patterns !== undefined && (!Array.isArray(p.detect.patterns) || p.detect.patterns.some((x: unknown) => typeof x !== 'string')))
    errors.push('detect.patterns 必须是文本数组');

  const t = p.time;
  if (!t || !['none', 'clock', 'countdown'].includes(t.type)) errors.push('time.type 必须是 clock、countdown 或 none');
  else {
    if (t.type === 'clock' && (typeof t.dayStart !== 'string' || !/^\d{1,2}:\d{2}$/.test(t.dayStart))) errors.push('time.dayStart 格式应为 HH:MM');
    if (t.type !== 'none' && (typeof t.minutesPerRound !== 'number' || t.minutesPerRound <= 0)) errors.push('time.minutesPerRound 必须是正数');
    if (t.type === 'countdown' && t.totalMinutes !== undefined && (typeof t.totalMinutes !== 'number' || t.totalMinutes <= 0)) errors.push('time.totalMinutes 必须是正数');
  }
  const r = p.remaining;
  if (!r || !['nights', 'countdown', 'fromPanel'].includes(r.type)) errors.push('remaining.type 必须是 nights、countdown 或 fromPanel');
  else if (r.type !== 'fromPanel' && typeof r.template !== 'string') errors.push('remaining.template 必须是文本');
  if (r?.type === 'countdown' && t?.type !== 'countdown') errors.push('remaining.type 为 countdown 时，time.type 也必须是 countdown');

  if (p.deadline !== undefined && typeof p.deadline !== 'string') errors.push('deadline 必须是文本');
  if (p.disableLive !== undefined && typeof p.disableLive !== 'boolean') errors.push('disableLive 必须是 true 或 false');
  if (p.casino !== undefined && typeof p.casino !== 'boolean') errors.push('casino 必须是 true 或 false');
  if (p.rest !== undefined && typeof p.rest !== 'boolean') errors.push('rest 必须是 true 或 false');
  if (p.stateFields !== undefined) {
    if (!Array.isArray(p.stateFields)) errors.push('stateFields 必须是数组');
    else p.stateFields.forEach((f: any, i: number) => {
      if (!f || typeof f.key !== 'string' || !f.key || typeof f.label !== 'string' || typeof f.hint !== 'string')
        errors.push(`stateFields[${i}] 需要 key、label、hint 三个文本`);
    });
  }
  if (p.roles !== undefined && (!Array.isArray(p.roles) || p.roles.some((x: unknown) => typeof x !== 'string' || !x))) errors.push('roles 必须是文本数组');

  const phaseIds = new Set<string>();
  const phaseNames = new Set<string>();
  if (!Array.isArray(p.phases)) errors.push('phases 必须是数组');
  else {
    p.phases.forEach((ph: any, i: number) => {
      if (!ph || typeof ph.id !== 'string' || typeof ph.name !== 'string') { errors.push(`phases[${i}] 缺少 id 或 name`); return; }
      if (phaseIds.has(ph.id)) errors.push(`阶段 id 重复：${ph.id}`);
      if (phaseNames.has(ph.name)) errors.push(`阶段名称重复：${ph.name}`);
      phaseIds.add(ph.id);
      phaseNames.add(ph.name);
      if (typeof ph.cap !== 'number' || ph.cap < 1 || !Number.isInteger(ph.cap)) errors.push(`阶段 ${ph.id} 的 cap 必须是正整数`);
      if (ph.next !== null && typeof ph.next !== 'string') errors.push(`阶段 ${ph.id} 的 next 必须是阶段 id 或 null`);
      if (ph.deadline !== undefined && typeof ph.deadline !== 'string') errors.push(`阶段 ${ph.id} 的 deadline 必须是文本`);
    });
    p.phases.forEach((ph: any) => {
      if (ph && typeof ph.next === 'string' && !phaseIds.has(ph.next)) errors.push(`阶段 ${ph.id} 的 next 指向不存在的阶段：${ph.next}`);
    });
    if (p.phases.length && p.phases[0]?.byTag) errors.push('第一个阶段不能是 byTag 阶段');
  }

  const eventIds = new Set<string>();
  if (!Array.isArray(p.events)) errors.push('events 必须是数组');
  else {
    p.events.forEach((e: any, i: number) => {
      if (!e || typeof e.id !== 'string' || typeof e.text !== 'string') { errors.push(`events[${i}] 缺少 id 或 text`); return; }
      if (eventIds.has(e.id)) errors.push(`事件 id 重复：${e.id}`);
      eventIds.add(e.id);
      if (!phaseIds.has(e.phase)) errors.push(`事件 ${e.id} 的 phase 不存在：${e.phase}`);
      if (!Number.isInteger(e.from) || !Number.isInteger(e.to) || e.from < 1 || e.to < e.from) errors.push(`事件 ${e.id} 的轮次区间无效`);
      if (e.kind !== 'event' && e.kind !== 'directive') errors.push(`事件 ${e.id} 的 kind 必须是 event 或 directive`);
      if (e.if !== undefined && typeof e.if !== 'string') errors.push(`事件 ${e.id} 的 if 必须是文本`);
    });
  }

  if (!Array.isArray(p.docs)) errors.push('docs 必须是数组');
  else p.docs.forEach((d: any, i: number) => {
    if (!d || typeof d.title !== 'string') errors.push(`docs[${i}] 缺少 title`);
    else if (d.md !== undefined && typeof d.md !== 'string') errors.push(`docs[${i}].md 必须是文本`);
    else if (d.image !== undefined && typeof d.image !== 'string') errors.push(`docs[${i}].image 必须是文本`);
  });

  return errors;
}

/** 通用副本包的等级：简报里读不出时按 D 处理 */
export function genericLevel(info: BriefingInfo): Level {
  return (LEVELS as string[]).includes(info.level ?? '') ? (info.level as Level) : 'D';
}

/**
 * 通用副本包（CLAUDE.md 12.4）：名称、等级、时限来自简报；单阶段，轮数上限优先用入场时记下的 info.rounds。
 * 读得到总时长时按倒计时计时，读不到只计轮。
 */
export function buildGenericPack(info: BriefingInfo, caps: GenericCaps = DEFAULT_GENERIC_CAPS): Pack {
  const level = genericLevel(info);
  const timing = genericTiming(info.limit, level, caps);
  const rounds = info.rounds && info.rounds > 0 ? info.rounds : timing.rounds;
  const minutesPerRound = timing.totalMinutes ? Math.max(1, Math.round(timing.totalMinutes / rounds)) : undefined;
  return {
    id: GENERIC_PACK_ID,
    name: info.name,
    version: '1.0.0',
    level,
    token: `【副本进行中：${info.name}】`,
    legacyKeys: [],
    detect: { briefingName: info.name },
    // 总时长按简报的值；每轮分钟四舍五入只用于“每轮至少减去”的判断
    time: minutesPerRound ? { type: 'countdown', minutesPerRound, totalMinutes: timing.totalMinutes } : { type: 'none' },
    remaining: { type: 'fromPanel' },
    phases: [{ id: 'main', name: info.name, cap: rounds, next: null }],
    events: [],
    docs: [],
  };
}

export function allPacks(custom: Pack[]): Pack[] {
  const ids = new Set(BUILTIN_PACKS.map((p) => p.id));
  return [...BUILTIN_PACKS, ...custom.filter((p) => !ids.has(p.id))];
}

export function findPackByBriefing(packs: Pack[], name: string): Pack | undefined {
  return packs.find((p) => p.detect.briefingName === name);
}
