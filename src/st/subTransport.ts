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

export interface SubPreset {
  id: string;
  name: string;
  url: string;
  key: string;
  model: string;
}

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

/** 把服务端返回的错误整理成带状态码/说明的 Error，供 classifyError 区分原因 */
function responseError(status: number, data: any): Error {
  const message = data?.error?.message ?? data?.message ?? (typeof data === 'string' ? data : '') ?? '';
  const err = new Error(`${status || ''} ${message}${data?.quota_error ? ' insufficient_quota' : ''}`.trim());
  (err as any).status = status;
  return err;
}

async function callPreset(p: SubPreset, m: SubMessages, signal: AbortSignal, maxTokens = MAX_TOKENS, temperature = 0.2): Promise<string> {
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
  const text = await res.text();
  let data: any;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }
  if (!res.ok || data?.error) throw responseError(res.status === 200 ? 0 : res.status, data);
  const content = data?.choices?.[0]?.message?.content ?? data?.choices?.[0]?.text ?? data?.content;
  if (typeof content !== 'string') throw new Error('返回里没有正文');
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
export async function listModels(p: SubPreset): Promise<string[]> {
  const res = await fetch('/api/backends/chat-completions/status', {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(customBody(p)),
  });
  const data: any = await res.json().catch(() => null);
  if (!res.ok || data?.error) throw responseError(res.status, data);
  const list = Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : Array.isArray(data?.models) ? data.models : [];
  return list.map((x: any) => (typeof x === 'string' ? x : x?.id ?? x?.name)).filter(Boolean).sort();
}

/** 测试连接：拉模型列表，并发一个极短的请求 */
export async function testPreset(p: SubPreset, timeoutMs: number): Promise<{ models: string[]; reply: string }> {
  const models = await listModels(p).catch(() => [] as string[]);
  const probe: SubPreset = { ...p, model: p.model || models[0] || '' };
  const reply = await withTimeout(timeoutMs, (signal) =>
    callPreset(probe, { system: '只回复 OK。', user: 'ping' }, signal, 5),
  );
  return { models, reply };
}
