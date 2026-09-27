/** 自设API：拉取模型 / 测试模型两个按钮的可点条件、结果的保存与清空、失败原因的拼接 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  canFetchModels,
  canTestModel,
  describeError,
  fetchLine,
  normalizePreset,
  presetDot,
  recordFetch,
  recordTest,
  setPresetField,
  testLine,
  type SubPreset,
} from '../src/core/subPreset';
import { SubFormatError, SubTimeoutError } from '../src/core/subapi';
import { PROBE_MAX_TOKENS, probeModel, responseError } from '../src/st/subTransport';
import { installFakeSt } from './fakeSt';
import * as app from '../src/app';

const st = installFakeSt();

function preset(over: Partial<SubPreset> = {}): SubPreset {
  return { id: 'a', name: 'A', url: 'https://x.test/v1', key: 'sk-1', model: '', ...over };
}

/** 本地时间 07:22 的时间戳 */
const AT = new Date(2026, 8, 27, 7, 22).getTime();

describe('按钮的可点条件', () => {
  it('拉取模型：地址为空时不可点', () => {
    expect(canFetchModels(preset())).toBe(true);
    expect(canFetchModels(preset({ url: '' }))).toBe(false);
    expect(canFetchModels(preset({ url: '   ' }))).toBe(false);
    expect(canFetchModels(preset({ key: '' }))).toBe(true);
    expect(canFetchModels(null)).toBe(false);
  });

  it('测试模型：还没选模型时不可点', () => {
    expect(canTestModel(preset())).toBe(false);
    expect(canTestModel(preset({ model: 'gpt-x' }))).toBe(true);
    expect(canTestModel(preset({ model: 'gpt-x', url: '' }))).toBe(false);
    expect(canTestModel(undefined)).toBe(false);
  });
});

describe('结果的保存', () => {
  it('拉取成功：存模型列表，不替玩家选模型', () => {
    const p = preset();
    recordFetch(p, { ok: true, models: ['m1', 'm2', 'm3'] }, AT);
    expect(p.models).toEqual(['m1', 'm2', 'm3']);
    expect(p.model).toBe('');
    expect(p.fetchResult).toEqual({ ok: true, reason: '', at: AT });
    expect(fetchLine(p)).toBe('✓ 读到3个模型 · 07:22');
  });

  it('拉取失败：记原因，保留之前的模型列表', () => {
    const p = preset({ models: ['m1'] });
    recordFetch(p, { ok: false, reason: '密钥无效（401：bad key）' }, AT);
    expect(p.models).toEqual(['m1']);
    expect(fetchLine(p)).toBe('✗ 密钥无效（401：bad key） · 07:22');
  });

  it('测试结果与状态点', () => {
    const p = preset({ model: 'm1' });
    expect(testLine(p)).toBe('');
    expect(presetDot(p)).toEqual({ kind: 'warn', text: '未测试' });
    recordTest(p, { ok: true }, AT);
    expect(testLine(p)).toBe('✓ 可以回复 · 07:22');
    expect(presetDot(p)).toEqual({ kind: 'on', text: '已连接' });
    recordTest(p, { ok: false, reason: '超时' }, AT);
    expect(testLine(p)).toBe('✗ 超时 · 07:22');
    expect(presetDot(p)).toEqual({ kind: 'warn', text: '连接失败' });
  });

  it('存进设置再读回来，结果和模型列表都在', () => {
    const p = preset({ model: 'm2' });
    recordFetch(p, { ok: true, models: ['m1', 'm2'] }, AT);
    recordTest(p, { ok: true }, AT);
    const back = normalizePreset(JSON.parse(JSON.stringify(p)));
    expect(back).toEqual(p);
    expect(testLine(back)).toBe('✓ 可以回复 · 07:22');
  });

  it('旧版预设（没有结果字段）读进来照常可用；坏的结果丢掉', () => {
    const back = normalizePreset({ id: 'a', name: 'A', url: 'u', key: 'k', model: 'm', testResult: { ok: 'yes' }, models: ['x', 3, ''] });
    expect(back).toEqual({ id: 'a', name: 'A', url: 'u', key: 'k', model: 'm', models: ['x'] });
  });
});

describe('结果的清空', () => {
  function full(): SubPreset {
    const p = preset({ model: 'm1' });
    recordFetch(p, { ok: true, models: ['m1', 'm2'] }, AT);
    recordTest(p, { ok: true }, AT);
    return p;
  }

  it('改了地址：清空两个结果和模型列表', () => {
    const p = full();
    expect(setPresetField(p, 'url', 'https://y.test/v1')).toBe(true);
    expect(p.models).toBeUndefined();
    expect(p.fetchResult).toBeUndefined();
    expect(p.testResult).toBeUndefined();
    expect(p.model).toBe('m1');
  });

  it('改了密钥：清空两个结果和模型列表', () => {
    const p = full();
    setPresetField(p, 'key', 'sk-2');
    expect(p.models).toBeUndefined();
    expect(p.fetchResult).toBeUndefined();
    expect(p.testResult).toBeUndefined();
  });

  it('换了模型：只清空测试结果', () => {
    const p = full();
    setPresetField(p, 'model', 'm2');
    expect(p.model).toBe('m2');
    expect(p.models).toEqual(['m1', 'm2']);
    expect(p.fetchResult?.ok).toBe(true);
    expect(p.testResult).toBeUndefined();
  });

  it('值没变（包括只多了首尾空白）不清空', () => {
    const p = full();
    expect(setPresetField(p, 'url', ' https://x.test/v1 ')).toBe(false);
    expect(setPresetField(p, 'model', 'm1')).toBe(false);
    expect(p.testResult?.ok).toBe(true);
    expect(p.models).toEqual(['m1', 'm2']);
  });
});

describe('失败原因的拼接', () => {
  it('分类后附上状态码和中转站返回的错误信息', () => {
    expect(describeError(responseError(400, { error: { message: 'model not found' } }))).toBe('其他（400：model not found）');
    expect(describeError(responseError(401, { error: { message: 'Invalid API key' } }))).toBe('密钥无效（401：Invalid API key）');
    expect(describeError(responseError(429, { error: 'Too many requests' }))).toBe('额度不足（429：Too many requests）');
    expect(describeError(responseError(502, 'Bad Gateway'))).toBe('其他（502：Bad Gateway）');
  });

  it('错误信息只取前80个字，换行压成空格', () => {
    const long = '错'.repeat(100);
    expect(describeError(responseError(500, { message: long }))).toBe(`其他（500：${'错'.repeat(80)}）`);
    expect(describeError(responseError(500, { message: 'a\n  b' }))).toBe('其他（500：a b）');
  });

  it('只有状态码或只有错误信息', () => {
    expect(describeError(responseError(503, null))).toBe('其他（503）');
    expect(describeError(responseError(0, { error: { message: 'upstream error' } }))).toBe('其他（upstream error）');
  });

  it('没有 HTTP 信息时只有分类', () => {
    expect(describeError(new SubTimeoutError('超过 60 秒没有返回'))).toBe('超时');
    expect(describeError(new SubFormatError('返回里没有 JSON'))).toBe('返回格式不对');
    expect(describeError(new TypeError('Failed to fetch'))).toBe('其他');
  });
});

describe('测试模型发的请求', () => {
  afterEach(() => vi.unstubAllGlobals());

  function stubFetch(status: number, body: unknown) {
    const calls: any[] = [];
    vi.stubGlobal('fetch', async (url: string, init: any) => {
      calls.push({ url, body: JSON.parse(init.body) });
      return new Response(typeof body === 'string' ? body : JSON.stringify(body), { status });
    });
    return calls;
  }

  it('回复长度上限 64，用当前选中的模型', async () => {
    const calls = stubFetch(200, { choices: [{ message: { content: 'OK' } }] });
    await probeModel(preset({ model: 'm2' }), 5000);
    expect(PROBE_MAX_TOKENS).toBe(64);
    expect(calls[0].body.max_tokens).toBe(64);
    expect(calls[0].body.model).toBe('m2');
  });

  it('HTTP 成功但正文为空也算能回复', async () => {
    stubFetch(200, { choices: [{ message: { content: null, reasoning_content: '思考中' } }] });
    await expect(probeModel(preset({ model: 'm2' }), 5000)).resolves.toBe('');
    stubFetch(200, { choices: [{ message: { content: '' } }] });
    await expect(probeModel(preset({ model: 'm2' }), 5000)).resolves.toBe('');
  });

  it('失败时带状态码和错误信息', async () => {
    stubFetch(400, { error: { message: 'model not found' } });
    const err = await probeModel(preset({ model: 'nope' }), 5000).catch((e) => e);
    expect(describeError(err)).toBe('其他（400：model not found）');
  });
});

describe('选模型后立即保存并持久（关面板再打开、刷新后仍是刚选的）', () => {
  it('写进 extensionSettings.rlzc 并调用保存，重新读取设置后仍在', () => {
    st.ctx.extensionSettings = {
      rlzc: {
        subApi: {
          source: 'preset',
          presetId: 'a',
          presets: [{ ...preset({ model: 'old' }), models: ['old', 'new'], testResult: { ok: true, reason: '', at: AT } }],
        },
      },
    };
    app.loadSettings();
    const save = vi.fn();
    st.ctx.saveSettingsDebounced = save;

    app.setCurrentPresetField('model', 'new');

    expect(save).toHaveBeenCalledTimes(1);
    const saved = JSON.parse(JSON.stringify(st.ctx.extensionSettings.rlzc));
    expect(saved.subApi.presets[0].model).toBe('new');
    expect(saved.subApi.presets[0].testResult).toBeUndefined();
    expect(saved.subApi.presets[0].models).toEqual(['old', 'new']);

    // 模拟刷新页面：ST 从保存的 JSON 重新载入
    st.ctx.extensionSettings = { rlzc: saved };
    app.loadSettings();
    expect(app.state.settings.subApi.presets[0].model).toBe('new');
    expect(app.state.settings.subApi.presets[0].models).toEqual(['old', 'new']);
  });

  it('选的和原来一样时不重复保存', () => {
    const save = vi.fn();
    st.ctx.saveSettingsDebounced = save;
    app.setCurrentPresetField('model', 'new');
    expect(save).not.toHaveBeenCalled();
  });
});
