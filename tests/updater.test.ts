import { describe, expect, it } from 'vitest';
import { extensionFolder } from '../src/st/updater';
import manifest from '../manifest.json';
import pkg from '../package.json';

describe('扩展安装文件夹', () => {
  it('从脚本地址读出文件夹名', () => {
    expect(extensionFolder('http://127.0.0.1:8000/scripts/extensions/third-party/M-bius-strip/dist/index.js')).toBe('M-bius-strip');
    expect(extensionFolder('/scripts/extensions/third-party/%E5%9B%9E%E5%BB%8A/dist/index.js')).toBe('回廊');
  });

  it('不在第三方扩展目录时返回 null', () => {
    expect(extensionFolder('http://localhost:5173/src/index.ts')).toBeNull();
  });
});

describe('版本号', () => {
  it('manifest.json 与 package.json 的版本号一致，写成 1.0.0 这种三段数字', () => {
    expect(manifest.version).toMatch(/^\d+\.\d+\.\d+$/);
    expect(pkg.version).toBe(manifest.version);
  });
});
