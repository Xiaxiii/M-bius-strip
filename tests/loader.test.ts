import { describe, it, expect, vi, afterEach } from 'vitest';
import { validatePack, BUILTIN_PACKS } from '../src/packs/loader';

const basepack = () => ({
  id: 'testpack', name: '测试', version: '1.0.0', token: '暗号', level: 'D' as const,
  legacyKeys: [], detect: { briefingName: '测试' }, time: { type: 'none' as const },
  remaining: { type: 'fromPanel' as const }, phases: [], events: [], docs: [],
});

// ───────────── danmaku 字段校验 ─────────────

describe('validatePack：danmaku 字段', () => {
  afterEach(() => { vi.restoreAllMocks(); });

  it('没有 danmaku 字段时通过', () => {
    expect(validatePack(basepack())).toEqual([]);
  });

  it('danmaku 是合法数组时通过', () => {
    const p = { ...basepack(), danmaku: [{ type: 'praise', text: '很棒' }] };
    expect(validatePack(p)).toEqual([]);
  });

  it('danmaku 不是数组时报错', () => {
    const p = { ...basepack(), danmaku: '不合法' };
    expect(validatePack(p).some(e => e.includes('danmaku'))).toBe(true);
  });

  it('danmaku 元素缺少 type 时报错', () => {
    const p = { ...basepack(), danmaku: [{ text: '缺少type' }] };
    expect(validatePack(p).some(e => e.includes('danmaku[0]'))).toBe(true);
  });

  it('danmaku 元素缺少 text 时报错', () => {
    const p = { ...basepack(), danmaku: [{ type: 'praise' }] };
    expect(validatePack(p).some(e => e.includes('danmaku[0]'))).toBe(true);
  });

  it('danmaku 带合法 when/scope 时通过', () => {
    const p = { ...basepack(), danmaku: [{ type: 'bless', text: '加油', when: 'hurt', scope: 'inst' }] };
    expect(validatePack(p)).toEqual([]);
  });

  it('danmaku 带合法 phase 数组时通过', () => {
    const p = {
      ...basepack(),
      phases: [{ id: 'p1', name: '第一阶段', cap: 10, next: null }],
      danmaku: [{ type: 'discuss', text: '阶段弹幕', phase: ['p1'] }],
    };
    expect(validatePack(p)).toEqual([]);
  });

  it('danmaku 的 phase 不是数组时报错', () => {
    const p = { ...basepack(), danmaku: [{ type: 'discuss', text: '弹幕', phase: 'p1' }] };
    expect(validatePack(p).some(e => e.includes('phase'))).toBe(true);
  });

  it('danmaku 的 phase 包含非法阶段 id 时打印警告但不报错', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const p = {
      ...basepack(),
      phases: [{ id: 'p1', name: '第一阶段', cap: 10, next: null }],
      danmaku: [{ type: 'discuss', text: '弹幕', phase: ['p1', 'nonexistent'] }],
    };
    const errors = validatePack(p);
    expect(errors).toEqual([]);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('nonexistent'));
  });

  it('danmaku phase 引用无阶段包时不触发警告（phaseIds 为空）', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    // phases 为空的包，phase 引用不报警告
    const p = { ...basepack(), danmaku: [{ type: 'discuss', text: '弹幕', phase: ['anything'] }] };
    validatePack(p);
    expect(warn).not.toHaveBeenCalled();
  });
});

// ───────────── 内置包都含合法 danmaku（如有）─────────────

describe('内置副本包：danmaku 字段格式', () => {
  it('所有内置包通过 validatePack', () => {
    for (const pack of BUILTIN_PACKS) {
      const errors = validatePack(pack);
      expect(errors, `${pack.id} 校验失败：${errors.join(', ')}`).toEqual([]);
    }
  });

  it('zhonglou 含 danmaku 且每条有 type 和 text', () => {
    const p = BUILTIN_PACKS.find(p => p.id === 'zhonglou')!;
    expect(Array.isArray(p.danmaku)).toBe(true);
    p.danmaku!.forEach((d, i) => {
      expect(d.type, `zhonglou danmaku[${i}] 缺 type`).toBeTruthy();
      expect(d.text, `zhonglou danmaku[${i}] 缺 text`).toBeTruthy();
    });
  });

  it('xiyan 含 danmaku', () => {
    const p = BUILTIN_PACKS.find(p => p.id === 'xiyan')!;
    expect(Array.isArray(p.danmaku) && p.danmaku.length > 0).toBe(true);
  });

  it('youxi 含 danmaku', () => {
    const p = BUILTIN_PACKS.find(p => p.id === 'youxi')!;
    expect(Array.isArray(p.danmaku) && p.danmaku.length > 0).toBe(true);
  });

  it('dusongshu 含 danmaku（已有）', () => {
    const p = BUILTIN_PACKS.find(p => p.id === 'dusongshu')!;
    expect(Array.isArray(p.danmaku) && p.danmaku.length > 0).toBe(true);
  });

  it('nongxian 含 danmaku（已有）', () => {
    const p = BUILTIN_PACKS.find(p => p.id === 'nongxian')!;
    expect(Array.isArray(p.danmaku) && p.danmaku.length > 0).toBe(true);
  });
});
