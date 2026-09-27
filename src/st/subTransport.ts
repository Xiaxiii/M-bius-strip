/**
 * 副API的发请求部分（接口按 ST 1.19.0 源码核对）：
 *  - 跟随主API：getContext().generateRaw({ prompt, systemPrompt })。只用传入的提示词，不带聊天记录、世界书、
 *    扩展注入，也不经过生成拦截器，所以不会递归，也不会把本扩展的注入带进去。
 *  - 独立接口：经 ST 服务端转发 POST /api/backends/chat-completions/generate，
 *    chat_completion_source = 'custom'，custom_url = 地址；密钥用 custom_include_headers 覆盖 Authorization
 *    （服务端先写 'Authorization: Bearer <ST保存的密钥>'，再合并 custom_include_headers），不改动 ST 自己保存的密钥。
 *    模型列表：POST /api/backends/chat-completions/status（同样的参数）。
 * 界面上把「独立接口」叫作「自设API」。
 */
import { ctx } from './context';
import { SubTimeoutError, type SubMessages } from '../core/subapi';
import type { SubPreset } from '../core/subPreset';

export type { SubPreset };

/** 关闭 / 跟随主API / 自设API（接口预设） */
export type SubSource = 'off' | 'main' | 'preset';

export interface SubTarget {
  source: Exclude<SubSource, 'off'>;
  preset?: SubPreset;
  timeoutMs: number;
}

const MAX_TOKENS = 1500;

function headers(): Record<string, string> {
  return (ctx() as any).getRequestHeaders?.() ?? { 'Content-Type': 'application/json' };
}

function customBody(p: SubPreset): Record<string, unknown> {
  const body: Record<string, unknown> = { chat_completion_source: 'custom', custom_url: p.url.trim().replace(/\/+$/, '') };
  // JSON 也是合法的 YAML；这里的 Authorization 会覆盖服务端默认的那一个
  if (p.key.trim()) body.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${p.key.trim()}` });
  return body;
}

/** 超时：到点抛 SubTimeoutError，并中止请求 */
async function withTimeout<T>(ms: number, run: (signal: AbortSignal) => Promise<T>): Promise<T> {
  const ctrl = new AbortController();
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      ctrl.abort();
      reject(new SubTimeoutError(`超过 ${Math.round(ms / 1000)} 秒没有返回`));
    }, ms);
  });
  try {
    return await Promise.race([run(ctrl.signal), timeout]);
  } finally {
    clearTimeout(timer);
  }
}

/**
 * 把服务端返回的错误整理成带状态码/说明的 Error，供 classifyError 区分原因；
 * status、detail（中转站返回的错误信息）供 describeError 附在原因后面。
 */
export function responseError(status: number, data: any): Error {
  const raw =
    typeof data?.error === 'string' ? data.error
    : data?.error?.message ?? data?.message ?? (typeof data === 'string' ? data : '');
  const message = String(raw ?? '').trim();
  const err = new Error(`${status || ''} ${message}${data?.quota_error ? ' insufficient_quota' : ''}`.trim());
  (err as any).status = status;
  (err as any).detail = message;
  return err;
}

async function readBody(res: Response): Promise<any> {
  const text = await res.text().catch(() => '');
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function callPreset(
  p: SubPreset,
  m: SubMessages,
  signal: AbortSignal,
  maxTokens = MAX_TOKENS,
  temperature = 0.2,
  allowEmpty = false,
): Promise<string> {
  const res = await fetch('/api/backends/chat-completions/generate', {
    method: 'POST',
    headers: headers(),
    signal,
    body: JSON.stringify({
      ...customBody(p),
      model: p.model,
      messages: [
        { role: 'system', content: m.system },
        { role: 'user', content: m.user },
      ],
      max_tokens: maxTokens,
      temperature,
      stream: false,
    }),
  });
  const data = await readBody(res);
  if (!res.ok || data?.error) throw responseError(res.status === 200 ? 0 : res.status, data);
  const content = data?.choices?.[0]?.message?.content ?? data?.choices?.[0]?.text ?? data?.content;
  if (typeof content !== 'string') {
    // 带思考的模型可能在长度上限内只写了思考、正文为空：测试时照样算能回复
    if (allowEmpty) return '';
    throw new Error('返回里没有正文');
  }
  return content;
}

async function callMain(m: SubMessages): Promise<string> {
  const c = ctx() as any;
  if (typeof c.generateRaw !== 'function') throw new Error('当前酒馆版本没有 generateRaw');
  return String(await c.generateRaw({ prompt: m.user, systemPrompt: m.system }));
}

/** 按设置发一次请求，返回模型的原始文字 */
export function callSub(target: SubTarget, m: SubMessages, opts: { temperature?: number } = {}): Promise<string> {
  return withTimeout(target.timeoutMs, (signal) => {
    if (target.source === 'main') return callMain(m);
    if (!target.preset) throw new Error('没有选择接口预设');
    return callPreset(target.preset, m, signal, MAX_TOKENS, opts.temperature ?? 0.2);
  });
}

/** 拉取独立接口的模型列表 */
export async function listModels(p: SubPreset, signal?: AbortSignal): Promise<string[]> {
  const res = await fetch('/api/backends/chat-completions/status', {
    method: 'POST',
    headers: headers(),
    signal,
    body: JSON.stringify(customBody(p)),
  });
  const data = await readBody(res);
  if (!res.ok || data?.error) throw responseError(res.status === 200 ? 0 : res.status, data);
  const list = Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : Array.isArray(data?.models) ? data.models : [];
  const names: string[] = list.map((x: any) => (typeof x === 'string' ? x : x?.id ?? x?.name)).filter(Boolean);
  return [...new Set(names)].sort();
}

/** 「拉取模型」：用地址和密钥拉模型列表 */
export function fetchModels(p: SubPreset, timeoutMs: number): Promise<string[]> {
  return withTimeout(timeoutMs, (signal) => listModels(p, signal));
}

/** 「测试模型」发的请求的回复长度上限：留出余量给带思考的模型 */
export const PROBE_MAX_TOKENS = 64;

/** 「测试模型」：用当前选中的模型发一句很短的请求；HTTP 成功但正文为空也算能回复 */
export async function probeModel(p: SubPreset, timeoutMs: number): Promise<string> {
  if (!p.model.trim()) throw new Error('还没有选模型');
  return withTimeout(timeoutMs, (signal) =>
    callPreset(p, { system: '只回复 OK。', user: 'ping' }, signal, PROBE_MAX_TOKENS, 0.2, true),
  );
}
