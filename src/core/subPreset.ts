/**
 * 自设API接口预设的纯逻辑：两个按钮（拉取模型 / 测试模型）的可点条件、结果的保存与清空、结果文字、
 * 失败原因的拼接。预设存在 extensionSettings.rlzc.subApi.presets。
 */
import { classifyError } from './subapi';

/** 一个按钮上次的结果 */
export interface CheckResult {
  ok: boolean;
  /** 失败原因（成功时为空） */
  reason: string;
  /** 时间（毫秒时间戳） */
  at: number;
}

export interface SubPreset {
  id: string;
  name: string;
  url: string;
  key: string;
  model: string;
  /** 上次拉到的模型列表 */
  models?: string[];
  /** 「拉取模型」上次的结果 */
  fetchResult?: CheckResult;
  /** 「测试模型」上次的结果 */
  testResult?: CheckResult;
}

function normalizeResult(r: any): CheckResult | undefined {
  if (!r || typeof r !== 'object' || typeof r.ok !== 'boolean') return undefined;
  const at = Number(r.at);
  return { ok: r.ok, reason: String(r.reason ?? ''), at: Number.isFinite(at) ? at : 0 };
}

/** 读取设置时整理一条预设：缺的字段补上，坏的结果丢掉 */
export function normalizePreset(raw: any): SubPreset {
  const p: SubPreset = {
    id: String(raw?.id ?? ''),
    name: String(raw?.name ?? ''),
    url: String(raw?.url ?? ''),
    key: String(raw?.key ?? ''),
    model: String(raw?.model ?? ''),
  };
  if (Array.isArray(raw?.models)) p.models = raw.models.filter((m: unknown) => typeof m === 'string' && m);
  const f = normalizeResult(raw?.fetchResult);
  if (f) p.fetchResult = f;
  const t = normalizeResult(raw?.testResult);
  if (t) p.testResult = t;
  return p;
}

/** 「拉取模型」：地址为空时不可点 */
export function canFetchModels(p: SubPreset | null | undefined): boolean {
  return !!p && !!p.url.trim();
}

/** 「测试模型」：还没选模型时不可点 */
export function canTestModel(p: SubPreset | null | undefined): boolean {
  return !!p && !!p.url.trim() && !!p.model.trim();
}

/**
 * 改一个字段。改了地址或密钥：清空两个结果和模型列表；换了模型：只清空「测试模型」的结果。
 * 值没变时什么都不做。返回是否改动。
 */
export function setPresetField(p: SubPreset, field: 'url' | 'key' | 'model', value: string): boolean {
  const v = String(value ?? '').trim();
  if (p[field] === v) return false;
  p[field] = v;
  if (field === 'model') {
    delete p.testResult;
  } else {
    delete p.models;
    delete p.fetchResult;
    delete p.testResult;
  }
  return true;
}

/** 记下「拉取模型」的结果；成功时存模型列表，不替玩家选模型 */
export function recordFetch(p: SubPreset, r: { ok: true; models: string[] } | { ok: false; reason: string }, at = Date.now()): void {
  if (r.ok) {
    p.models = [...r.models];
    p.fetchResult = { ok: true, reason: '', at };
  } else {
    p.fetchResult = { ok: false, reason: r.reason, at };
  }
}

/** 记下「测试模型」的结果 */
export function recordTest(p: SubPreset, r: { ok: true } | { ok: false; reason: string }, at = Date.now()): void {
  p.testResult = { ok: r.ok, reason: r.ok ? '' : r.reason, at };
}

function hhmm(at: number): string {
  const d = new Date(at);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

/** 按钮旁边的一行：✓ 读到N个模型 · 07:22 / ✗ 原因 · 07:22；没有结果时为空 */
export function fetchLine(p: SubPreset): string {
  const r = p.fetchResult;
  if (!r) return '';
  const text = r.ok ? `✓ 读到${p.models?.length ?? 0}个模型` : `✗ ${r.reason}`;
  return r.at ? `${text} · ${hhmm(r.at)}` : text;
}

export function testLine(p: SubPreset): string {
  const r = p.testResult;
  if (!r) return '';
  const text = r.ok ? '✓ 可以回复' : `✗ ${r.reason}`;
  return r.at ? `${text} · ${hhmm(r.at)}` : text;
}

/** 卡片标题行的状态点，按「测试模型」的结果 */
export function presetDot(p: SubPreset | null | undefined): { kind: 'on' | 'warn'; text: string } {
  const r = p?.testResult;
  if (r?.ok) return { kind: 'on', text: '已连接' };
  if (r) return { kind: 'warn', text: '连接失败' };
  return { kind: 'warn', text: '未测试' };
}

const DETAIL_MAX = 80;

/**
 * 失败原因：分类后面括号里附上 HTTP 状态码和中转站返回的错误信息前80个字，如「其他（400：model not found）」。
 * 没有状态码和错误信息（超时、网络断开、格式不对）时只有分类。
 */
export function describeError(e: unknown): string {
  const kind = classifyError(e);
  const status = Number((e as any)?.status) || 0;
  const raw = String((e as any)?.detail ?? '').replace(/\s+/g, ' ').trim();
  const detail = Array.from(raw).slice(0, DETAIL_MAX).join('');
  if (status && detail) return `${kind}（${status}：${detail}）`;
  if (status) return `${kind}（${status}）`;
  if (detail) return `${kind}（${detail}）`;
  return kind;
}
