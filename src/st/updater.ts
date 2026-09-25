/**
 * 检查并更新本扩展（ST 1.19.0 源码核对）：
 *  - POST /api/extensions/version { extensionName, global } → { currentBranchName, currentCommitHash, isUpToDate, remoteUrl }
 *    （不是 git 安装时返回 currentCommitHash 为空、isUpToDate 为 true）
 *  - POST /api/extensions/update  { extensionName, global } → 拉取远端最新版本
 * 服务器端会先 git fetch，所以检查结果与 GitHub 同步。
 */
import { ctx } from './context';

export interface UpdateInfo {
  folder: string;
  global: boolean;
  /** 是否是用仓库地址（git）安装的；手动复制的安装无法检查 */
  isGit: boolean;
  isUpToDate: boolean;
  commit: string;
  branch: string;
}

/** 从本脚本的地址得到安装文件夹名：/scripts/extensions/third-party/<文件夹>/dist/index.js */
export function extensionFolder(url: string = import.meta.url): string | null {
  const m = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(url, globalThis.location?.href ?? 'http://localhost/').pathname));
  return m ? m[1] : null;
}

async function post(path: string, folder: string, global: boolean): Promise<Response> {
  const headers = (ctx() as any).getRequestHeaders?.() ?? { 'Content-Type': 'application/json' };
  return fetch(path, { method: 'POST', headers, body: JSON.stringify({ extensionName: folder, global }) });
}

/** 先按用户扩展查，找不到（404）再按全局扩展查 */
export async function checkForUpdate(): Promise<UpdateInfo> {
  const folder = extensionFolder();
  if (!folder) throw new Error('无法确定扩展的安装位置');
  for (const global of [false, true]) {
    const res = await post('/api/extensions/version', folder, global);
    if (res.status === 404) continue;
    if (!res.ok) throw new Error(`检查失败（${res.status}）`);
    const d = await res.json();
    return {
      folder,
      global,
      isGit: !!d.currentCommitHash,
      isUpToDate: !!d.isUpToDate,
      commit: String(d.currentCommitHash ?? '').slice(0, 7),
      branch: String(d.currentBranchName ?? ''),
    };
  }
  throw new Error('找不到扩展的安装文件夹');
}

export async function runUpdate(info: UpdateInfo): Promise<void> {
  const res = await post('/api/extensions/update', info.folder, info.global);
  if (!res.ok) throw new Error(res.status === 403 ? '没有权限更新全局扩展' : `更新失败（${res.status}）`);
}
