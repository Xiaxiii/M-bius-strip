# 端到端测试（模拟环境）

在真的 SillyTavern 里装上本扩展，用一个本地的「模拟AI接口」代替真实模型，由 Playwright 无头浏览器像玩家一样点界面，把检查项跑一遍。**不需要任何真实密钥**，脚本里的密钥全是 `sk-fake-…`。

测试结论见 [REPORT.md](REPORT.md)。

## 组成

| 文件 | 作用 |
|---|---|
| `setup.mjs` | 按 release tag 拉取 SillyTavern（默认 1.19.0）并安装依赖；构建本扩展，用 git 方式装进 ST 的第三方扩展目录（和玩家安装一样） |
| `mock-server.mjs` | 模拟 OpenAI 兼容接口（默认端口 8199），同时充当主AI 和「副本事件检测」用的AI；每次调用记一行日志（调用方、耗时、按 o200k / cl100k 两种分词器估算的输入输出 token） |
| `fixtures.mjs` | 钟楼、喜宴、游戏的开场白，回廊闲聊，正文素材 |
| `run.mjs` | 检查脚本：桌面 1280px、手机 390px、费用估算、与柏宝书和酒馆助手共存 |
| `run-live.mjs` | 直播与账本的检查（第三期b）：装酒馆助手、导入状态栏正则，回廊开播 → 钟楼 → 结算 → 回廊、喜宴不开播、污名、死亡撤回、入场弹窗、账户校正、AI 弹幕的 token |
| `regex-huilang-statusbar.json` | 玩家用的状态栏正则（测试素材，不要改）；由酒馆助手渲染成 iframe，从主页面读 `window.RLZC_LIVE` |
| `RLZC_LIVE_mock.js` | 直播接口的样例（测试素材），扩展的 `window.RLZC_LIVE` 按它的行为实现 |
| `report.mjs` | 把结果整理成报告草稿 `out/report-draft.md` |
| `lib/` | 路径与端口、启停进程、界面操作、结果登记 |
| `shots/` | 报告里引用的几张关键截图（已压缩） |

模拟主AI会读取本扩展注入的内容来写回复（`fullStatus` 时 `<状态栏>` 里照抄账户注入的积分、按校正句写等级位格）：把本轮后台事件写进正文（可以按脚本故意漏写）、第2轮输出 `<角色登记>`、`<副本>` 的时限一栏照抄注入值、带 `<状态栏>`。模拟检测AI按请求返回事件核对、隐藏状态和下一轮条件预判的 JSON，也可以切换成 401、超时、乱码、带 \`\`\` 的 JSON。AI 弹幕的调用返回 8–12 条弹幕 JSON，也可以按 `{"danmaku":{"mode":"fail","count":2}}` 返回 500。

## 运行

需要 Node 18+、git，以及能访问 GitHub（拉 ST 和共存用的两个扩展）。

```bash
cd tests/e2e
npm install
npx playwright install chromium   # 本机没有 Chromium 时
node setup.mjs            # 第一次：拉 ST 1.19.0、装依赖、装扩展
node run.mjs --fresh      # 清空 ST 用户数据后跑全部，约 7 分钟
node report.mjs           # 生成报告草稿
node run-live.mjs --fresh # 直播与账本（约 7 分钟，需要能访问 GitHub 装酒馆助手），结果在 out/live-results.json
```

- `--only=desktop,cost,mobile,coexist`：只跑其中几部分。
- `--no-build`：不重新构建扩展，直接用仓库里的 `dist/`。
- 环境变量：`E2E_WORK`（放 ST 本体的工作目录，默认系统临时目录下的 `rlzc-e2e`）、`ST_TAG`、`ST_PORT`（默认 8198）、`MOCK_PORT`（默认 8199）、`CHROMIUM`（浏览器路径）。

产物都在 `out/`（不提交）：`results.json`、`summary.md`、`cost.json`、`mock-log.jsonl`、`shots/`、ST 与模拟接口的日志。

共存那部分会通过 ST 的「安装扩展」接口装上 [柏宝书](https://github.com/baibai-git/ST-BaiBai-Book) 和 [酒馆助手](https://github.com/N0VI028/JS-Slash-Runner)，只装在测试用的 ST 里。
