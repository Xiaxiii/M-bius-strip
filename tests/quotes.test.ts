import { describe, expect, it } from 'vitest';
import { QUOTES, pickQuote } from '../src/ui/quotes';

describe('EC 语录库', () => {
  it('每个分类都有句子，且都带 {版本}', () => {
    for (const list of Object.values(QUOTES)) {
      expect(list.length).toBeGreaterThan(0);
      for (const q of list) expect(q).toContain('{版本}');
    }
  });

  it('随机挑一句并替换版本号，原文其余部分不变', () => {
    const list = QUOTES['有新版本'];
    list.forEach((q, i) => {
      const got = pickQuote('有新版本', { 版本: '1.2.3' }, () => i / list.length);
      expect(got).toBe(q.replace('{版本}', '1.2.3'));
    });
    expect(pickQuote('有新版本', { 版本: '9.9.9' }, () => 0.9999)).toBe(list[list.length - 1].replace('{版本}', '9.9.9'));
  });

  it('没给的占位符原样保留', () => {
    expect(pickQuote('有新版本', {}, () => 0)).toContain('{版本}');
  });
});
