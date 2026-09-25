/**
 * 准备端到端测试环境（不改 ST 源码，全部放在工作目录里，不提交到仓库）：
 *  1. 按 release tag 拉取 SillyTavern 1.19.0，安装依赖；
 *  2. 构建本扩展，把 manifest.json + dist/ 装进 ST 的第三方扩展目录。
 *
 * 用法：node setup.mjs            （工作目录默认在系统临时目录下的 rlzc-e2e，可用 E2E_WORK 指定）
 *       node setup.mjs --install  （只重新构建并安装扩展）
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { ST_DIR, ST_TAG, REPO_ROOT, EXT_DIR, WORK } from './lib/paths.mjs';

const sh = (cmd, cwd) => {
  console.log(`$ ${cmd}${cwd ? `   (在 ${cwd})` : ''}`);
  execSync(cmd, { cwd, stdio: 'inherit' });
};

/**
 * 和玩家一样用 git 安装：先把当前的 manifest.json + dist/ 提交进工作目录里的一个本地仓库（代替 GitHub 上的仓库），
 * 再 git clone 到 ST 的第三方扩展目录。这样 ST 的自动更新检查（git fetch）和扩展自己的「检查更新」都能正常工作。
 */
export function installExtension({ build = true } = {}) {
  // E2E_DIST_DIR：用别处的构建产物（比如旧版本的 dist，做修复前后对比）
  const distDir = process.env.E2E_DIST_DIR || path.join(REPO_ROOT, 'dist');
  if (build && !process.env.E2E_DIST_DIR) sh('npm run build', REPO_ROOT);
  const origin = path.join(WORK, 'rlzc-origin');
  fs.rmSync(origin, { recursive: true, force: true });
  fs.mkdirSync(path.join(origin, 'dist'), { recursive: true });
  fs.copyFileSync(path.join(REPO_ROOT, 'manifest.json'), path.join(origin, 'manifest.json'));
  for (const f of fs.readdirSync(distDir)) {
    fs.copyFileSync(path.join(distDir, f), path.join(origin, 'dist', f));
  }
  const git = (args, cwd) => execSync(`git ${args}`, { cwd, stdio: 'pipe' });
  git('init -q -b main', origin);
  git('add -A', origin);
  git('-c user.name=e2e -c user.email=e2e@example.invalid commit -q -m "e2e build"', origin);
  fs.rmSync(EXT_DIR, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(EXT_DIR), { recursive: true });
  git(`clone -q "${origin}" "${EXT_DIR}"`);
  console.log(`扩展已安装到 ${EXT_DIR}`);
}

function setupSillyTavern() {
  fs.mkdirSync(WORK, { recursive: true });
  if (!fs.existsSync(path.join(ST_DIR, 'server.js'))) {
    sh(`git clone --depth 1 --branch ${ST_TAG} https://github.com/SillyTavern/SillyTavern.git "${ST_DIR}"`);
  }
  const version = JSON.parse(fs.readFileSync(path.join(ST_DIR, 'package.json'), 'utf8')).version;
  const commit = execSync('git rev-parse HEAD', { cwd: ST_DIR }).toString().trim();
  console.log(`SillyTavern ${version}（${commit}）`);
  if (!fs.existsSync(path.join(ST_DIR, 'node_modules'))) sh('npm install --no-audit --no-fund', ST_DIR);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  if (!process.argv.includes('--install')) setupSillyTavern();
  installExtension();
  console.log(`工作目录：${WORK}`);
}
