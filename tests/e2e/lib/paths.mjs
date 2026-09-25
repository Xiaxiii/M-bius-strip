/** 端到端测试用到的路径与端口（都可以用环境变量覆盖） */
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const E2E_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const REPO_ROOT = path.resolve(E2E_DIR, '..', '..');
/** 工作目录：放 SillyTavern 本体，不在仓库里 */
export const WORK = process.env.E2E_WORK || path.join(os.tmpdir(), 'rlzc-e2e');
export const ST_TAG = process.env.ST_TAG || '1.19.0';
export const ST_DIR = path.join(WORK, `SillyTavern-${ST_TAG}`);
export const ST_DATA = path.join(ST_DIR, 'data', 'default-user');
export const EXT_DIR = path.join(ST_DATA, 'extensions', 'rlzc');
export const ST_PORT = Number(process.env.ST_PORT || 8198);
export const MOCK_PORT = Number(process.env.MOCK_PORT || 8199);
export const ST_URL = `http://127.0.0.1:${ST_PORT}/`;
export const MOCK_URL = `http://127.0.0.1:${MOCK_PORT}`;
/** 运行产物：日志、截图、结果（不提交）；E2E_OUT 可改到别处（比如修复前后对比时分开放） */
export const OUT = process.env.E2E_OUT ? path.resolve(process.env.E2E_OUT) : path.join(E2E_DIR, 'out');
