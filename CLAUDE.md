# 回廊种菜系统 · 第一期开发任务书

> 给编码代理（Codex / Claude Code）的交接文档。请先完整读完本文件，再动手。
> 同目录 `packs/` 下是第一期要内置的副本包数据，直接使用，不要改写其中的文案。

---

## 0. 一句话目标

做一个 SillyTavern（下称 ST）第三方扩展，名为「回廊种菜系统」。它在角色扮演中追踪玩家所处的「副本」：按对话轮数推算阶段和时间，在每次生成前把副本进度和本轮应发生的事件注入提示词，并提供一个玩家面板（系统状态、副本资料、备忘录、设置、调试）。

第一期**不做**：副API调用、积分账本、直播弹幕打赏、下注。代码结构要为这些预留位置，但不要实现。

---

## 1. 技术栈与约束

- Vue 3 + TypeScript + Vite，产物为单个 `dist/index.js`（加 `dist/style.css` 可选），由 `manifest.json` 引用。
- 界面挂在 Shadow DOM 里，避免与 ST 和其他扩展的样式互相污染。
- 同时支持电脑与手机，**按手机优先**设计。跟随 ST 的深浅色。
- 视觉风格：简约、原创。**不要模仿或复制任何现有扩展的界面与代码**（包括柏宝书 ST-BaiBai-Book）。柏宝书只可以作为「ST 扩展如何接入拦截器、注入、元数据」的思路参考。
- 所有存储字段、注入 key、DOM id、CSS 类名统一使用前缀 `rlzc`（回廊种菜）。
- 与以下扩展共存，不得读写它们的数据：酒馆助手、毛球点心铺、QR助手、鸡尾酒、Horae、黑科技记忆。
- 公开 GitHub 仓库发布，README 写清楚安装方法与**实测可用的最低 ST 版本**。

---

## 2. ST 接入点

以下接口名称来自 ST 的 `SillyTavern.getContext()`。**动手前请在当前 ST 源码中逐一核对签名**，以源码为准。

| 用途 | 接口 | 说明 |
|---|---|---|
| 生成前拦截 | `manifest.json` 中的 `generate_interceptor` 字段 + 全局函数 | 函数名建议 `rlzcInterceptor`，签名 `async (chat, contextSize, abort, type) => void`。ST 会等待它完成再生成 |
| 注入提示词 | `setExtensionPrompt(key, value, position, depth, scan, role)` | `position` 用 `extension_prompt_types.IN_CHAT`，`role` 用 `extension_prompt_roles.SYSTEM` |
| 事件 | `eventSource.on(event_types.X, fn)` | 需要：`MESSAGE_RECEIVED`、`CHARACTER_MESSAGE_RENDERED`、`MESSAGE_DELETED`、`MESSAGE_SWIPED`、`MESSAGE_EDITED`、`MESSAGE_UPDATED`（如存在）、`CHAT_CHANGED` |
| 聊天数据 | `chat`（消息数组）、`chatMetadata`、`saveMetadataDebounced()` | 会话存在 `chatMetadata.rlzc` |
| 每条消息附加数据 | `chat[i].extra.rlzc` | 存该楼快照，保存聊天时随消息一起持久化 |
| 全局设置 | `extensionSettings.rlzc`、`saveSettingsDebounced()` | 只放设置，不放游戏数据 |

拦截器的 `type` 参数：只在普通发送、重新生成（`regenerate`、`swipe`）时注入；`quiet`、`impersonate` 时清空本扩展的注入并直接返回。`continue` 时照常注入但不视为新的一轮。

---

## 3. 仓库结构（建议）

```
manifest.json
src/
  index.ts              入口：注册拦截器、事件、挂载界面
  st/                   对 getContext() 的薄封装，集中处理版本差异
  packs/
    types.ts            副本包类型定义
    loader.ts           加载内置包与导入包，校验格式
    builtin/            复制本目录 packs/*.json 与 svg
  core/
    session.ts          会话读写（chatMetadata.rlzc）
    replay.ts           ★从聊天记录重放出当前状态（核心，纯函数）
    detector.ts         识别简报、标签、跳过关键词
    injector.ts         组装并写入注入内容
    hideTags.ts         正文显示时隐藏机器标签
  ui/                   Vue 组件：悬浮球、顶栏按钮、面板各页
  reserved/             第二到第四期的占位（api、ledger、live、bet），第一期只放空接口
tests/                  vitest，重点测 replay.ts
```

---

## 4. 数据模型

### 4.1 副本包（与 `packs/*.json` 一致）

```ts
interface Pack {
  id: string;                 // 'zhonglou'
  name: string;               // 与副本简报中的名字一字不差
  version: string;            // 语义化版本，会话会记住入场时的版本
  level: 'D'|'C'|'B'|'A'|'S';
  players?: number;
  token: string;              // 暗号，如 '【副本进行中：钟楼】'
  legacyKeys: string[];       // 兼容期保留，第一期仅存档不使用
  detect: { briefingName: string };
  time: { type: 'clock'; dayStart: string; minutesPerRound: number } | { type: 'none' };
  remaining: { type: 'nights'; template: string } | { type: 'fromPanel' };
  roles?: string[];           // 角色位名称，见 5.6
  rolesNote?: string;
  phases: Phase[];            // 可以为空（基础包）
  events: PackEvent[];        // 可以为空
  docs: { title: string; md?: string; image?: string }[];
  disableLive?: boolean;      // 预留：第三期直播功能在该副本中关闭
}
interface Phase {
  id: string; name: string; cap: number;
  next: string | null;        // null = 该阶段结束后由AI输出结算
  clock?: boolean;            // 按 time 换算钟时
  night?: boolean;            // 计入“剩余夜数”
  byTag?: boolean;            // 不按轮数进入，只能由 <阶段切换> 标签进入
  frozen?: boolean;           // 该阶段内钟不走
}
interface PackEvent {
  id: string; phase: string;
  from: number; to: number;   // 轮次区间，from===to 表示单轮
  text: string;               // 可含占位符 {角色位名}，注入时替换为登记的姓名
  if?: string;                // 条件的文字描述，第一期原样交给主AI判断
  kind: 'event' | 'directive';
}
```

### 4.2 会话（`chatMetadata.rlzc`）

```ts
interface Session {
  packId: string;
  packVersion: string;
  entryIndex: number;         // 入场那条AI消息在 chat 中的下标
  status: 'active' | 'ended';
  manual: ManualAction[];     // 玩家或调试模式的手动操作，按消息下标记录
  roles?: Record<string, string>; // 角色位 → 姓名，见 5.6
}
type ManualAction =
  | { kind: 'skip'; atIndex: number; targetPhase: string; targetRound: number }
  | { kind: 'setPhase'; atIndex: number; phase: string }
  | { kind: 'setRound'; atIndex: number; round: number }
  | { kind: 'end'; atIndex: number };
// 备忘录单独存：chatMetadata.rlzc_memo: string（不在副本中也可用）
```

### 4.3 每楼快照（`chat[i].extra.rlzc`）

```ts
interface Snapshot { phase: string; round: number; clock?: string; injected: string[] }
```
快照只用于调试页显示，**不作为状态来源**。状态来源永远是 5.1 的重放。

---

## 5. 核心逻辑

### 5.1 重放（replay.ts，纯函数，必须有单元测试）

原则：**不存累加计数器**。每次需要状态时，从 `entryIndex` 开始顺序扫描聊天记录，得到当前阶段与轮次。删楼、滑动、编辑之后再调一次重放，结果自然正确。

输入：`chat`、`Session`、`Pack`。输出：

```ts
interface Progress {
  phase: Phase; round: number;        // 当前阶段已完成的AI回复数
  nextRound: number;                  // 即将生成的这一轮 = round + 1（考虑跳过）
  clock?: string;                     // 仅 clock 阶段
  remainingText?: string;
  endedBy?: 'tag' | 'manual';
  firedEvents: string[];              // 已经注入过的事件id（用于进度块摘要）
  warn: boolean;                      // nextRound >= cap - 2
  isLastRound: boolean;               // nextRound === cap
}
```

规则：
1. 只统计 `is_user === false` 且非系统消息的 AI 消息。`entryIndex` 那条消息算第一日第1轮。
2. 在 AI 消息正文中遇到 `<阶段切换>X</阶段切换>`：该消息仍属于旧阶段，下一条 AI 消息起进入名为 X 的阶段（按 `phase.name` 匹配），轮次从0开始计。
3. 某条 AI 消息使该阶段轮次达到 `cap`：下一条起进入 `next` 阶段。`next` 为 null 时保持在该阶段，等待结算标签。
4. 遇到 `<副本结算>…</副本结算>`：`status` 视为 ended。
5. `manual` 中的操作在对应 `atIndex` 之后生效。
6. 钟时：第 r 轮的钟时 = `dayStart + (r-1) * minutesPerRound`（钟楼第19轮=1:30，第72轮=5:55）。`night` 与 `frozen` 阶段不显示钟时。
7. 剩余夜数：尚未结束的 `night` 阶段数量（当前阶段是夜晚也算）。
8. 入场消息被删除 → 会话作废（删除 `chatMetadata.rlzc`）。结算消息被删除 → 恢复 active。

### 5.2 本轮事件选择

对即将生成的 `nextRound`：取当前阶段中 `from <= nextRound <= to` 且 `from === nextRound` 的事件（区间事件只在起始轮注入一次，文本前加「在本阶段第from到to轮之间发生：」）。另外，若本轮是阶段最后一轮，追加「本阶段在本轮结束」的指令（见 5.3）。

**跳过**：跳过会把轮次推进到目标位置。被跳过区间内的所有事件按顺序合并注入，**每次生成最多5个**；超过时，这次只推进到第5个事件所在的轮次，剩余事件在下一次生成继续结算，直到到达目标。实现上用多条 `setRound` 手动操作表示。

### 5.3 注入（injector.ts）

在拦截器里调用。每次先清空本扩展的所有 key，再按需写入：

| key | 深度 | scan | 内容 |
|---|---|---|---|
| `rlzc_token` | 4 | **true** | 暗号，如 `【副本进行中：钟楼】`。世界书条目以它为关键词触发 |
| `rlzc_progress` | 4 | false | 见下方模板 |
| `rlzc_turn` | 0 | false | 见下方模板 |

深度可在设置中修改。回廊中（无 active 会话）三个 key 全部清空。

`rlzc_progress` 模板：
```
［副本进度·仅供AI］
副本：钟楼（S级）　阶段：第二日·白天　本轮：第31/72轮　钟时：2:30　剩余2夜
角色登记：死者=某某｜布局者=某某｜……
已发生事件：E01–E10
```

`rlzc_turn` 模板：
```
［本轮指令·仅供AI］
本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）：
- E11：某某在5F西侧外壁抄下铭文……（条件：死者已到达5F西侧且未被阻止。若条件已不成立，此事件不发生，也不补写替代事件）
本阶段在本轮结束：请在本轮结尾自然写出日落。
```
占位符 `{角色位}` 用 `session.roles` 替换；未登记时保留角色位名称原样。

### 5.4 识别（detector.ts）

在 `MESSAGE_RECEIVED` 后处理最新的 AI 消息：

- **入场**：正则 `/副本简报\s*[-－—]\s*([^\s」』\n]+)/`。捕获名与某个包的 `detect.briefingName` 一致 → 弹出确认框「检测到进入《钟楼》，是否启用？」；不一致 → 使用**通用副本包**（名称、等级、目标、时限从简报后续几行读取：`等级：X`、`目标：…`、`时限：…`，无阶段表）。已有 active 会话时不再弹。
- **阶段切换**：`/<阶段切换>([\s\S]*?)<\/阶段切换>/`
- **结算**：`/<副本结算>([\s\S]*?)<\/副本结算>/`，内容为 `键=值｜键=值`，第一期只需解析 `结果`、`评价` 存档显示。
- **副本面板**：`/<副本>([\s\S]*?)<\/副本>/`，逐行解析 `时限：`、`进度条：`、`任务：`（可多行）、`ps：`，显示在系统页。
- **角色登记**：`/<角色登记>([\s\S]*?)<\/角色登记>/`，`角色位=姓名｜…`，写入 `session.roles`。
- **跳过关键词**（在用户消息发送前检查）：如 `/(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/`，命中则弹窗「是否跳到X？」，确认后写入跳过操作。

### 5.5 隐藏标签（hideTags.ts）

以上所有标签（`<阶段切换>`、`<副本结算>`、`<副本>`、`<角色登记>`、以及预留的`<积分变动>`）**只从显示中隐藏，不改动消息原文**（原文是重放的依据）。在 `CHARACTER_MESSAGE_RENDERED`、`MESSAGE_UPDATED`、`CHAT_CHANGED` 后处理对应消息的 DOM。注意用户卡中已有一条同时渲染 `<副本>` 和 `<状态栏>` 的正则，隐藏时只处理 `<副本>`，不要动 `<状态栏>`。

### 5.6 角色登记

有 `roles` 的副本包，入场确认后的下一次生成（即第2轮），`rlzc_turn` 追加以下内容；入场那条简报消息本身就是第1轮，事件E01已由它完成：
```
请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>死者=姓名｜布局者=姓名｜……</角色登记>。按世界书规定生成NPC。死者不得是{{user}}或其同伴。
```
识别到后不再要求。调试页可以手动修改登记。

### 5.7 事件监听与回滚

| 事件 | 处理 |
|---|---|
| `MESSAGE_RECEIVED` | 识别标签 → 写快照 → 保存元数据 → 刷新面板 |
| `MESSAGE_DELETED` / `MESSAGE_SWIPED` / `MESSAGE_EDITED` | 重放；检查入场或结算消息是否已不存在；刷新面板 |
| `CHAT_CHANGED` | 读取新聊天的会话与备忘录，重放，刷新面板，重新隐藏标签 |

老存档：没有 `chatMetadata.rlzc` 的聊天，扩展什么都不做，直到玩家确认入场或手动选择副本。

---

## 6. 界面

入口：可拖动的悬浮球（位置记在设置里）＋ 顶部扩展菜单按钮。面板五个页签：

1. **系统**：副本名、等级、目标、阶段、轮次（距上限3轮内显示 `⚠️ 70/72`）、剩余时间（有 `remaining.type==='nights'` 用扩展计算；否则显示 `<副本>` 里的时限）、进度条、任务、ps。另有「手动选择副本」「跳过」（跳到本阶段结束）「手动结束副本」按钮。回廊中显示「休整中」。
2. **副本资料**：当前副本包的 `docs`，Markdown 渲染，图片按包内路径加载。不在副本中时可浏览全部包的公开资料。
3. **备忘录**：纯文本编辑，按聊天保存，自动保存。
4. **设置**：三个注入深度、导入/删除自定义副本包（JSON 文件，需通过格式校验）、调试模式开关。
5. **调试**：打开前弹出「此页会显示副本真相，确定要打开吗？」二次确认。显示：会话原始数据、重放结果、每楼快照与注入的事件、角色登记（可编辑）；可手动切换阶段、修正轮次。

---

## 7. 内置副本包

直接使用 `packs/` 目录下的文件：

| 文件 | 说明 |
|---|---|
| `zhonglou.json` + `zhonglou-map.svg` | 《钟楼》完整包：8个阶段、30个事件、角色位、玩家资料与楼层图 |
| `jingjie.json` | 境界游乐园，基础包（只有资料页：游客须知） |
| `kaoshi.json`、`xiyan.json`、`wuming.json`、`youxi.json` | 基础包，只有名称、等级、暗号；`wuming` 标记了 `disableLive` |

通用副本包在代码中生成，不需要文件。

---

## 8. 测试

用 vitest 为 `replay.ts`、`detector.ts`、事件选择编写单元测试，至少覆盖：

- 入场后连续 N 条 AI 消息，阶段与轮次正确；第72轮后进入第一夜；
- 钟时：第1轮 12:00、第19轮 1:30、第72轮 5:55；
- 用户消息、系统消息不计轮；
- 删除最后一条 AI 消息后轮次减一；删除入场消息后会话作废；
- `<阶段切换>调查</阶段切换>` 之后进入调查阶段，轮次从1开始；
- 结算标签之后状态为 ended；删掉结算消息后恢复 active；
- 跳过跨越12个事件时，分三次注入（5、5、2）；
- 区间事件只在起始轮注入一次；
- 通用副本包能从示例简报里读出名称、等级、目标、时限。

此外提供一份给作者的**手工检查清单**（放进 README），不超过10项：安装后悬浮球出现；五个页签可切换；生成钟楼简报后弹出入场确认；连续几轮轮次正确；重新生成与滑动不改变轮次；删楼轮次减一；提示词查看器中能看到三块注入；钟楼世界书被暗号触发；跳过按钮生效；备忘录切换聊天后仍在。

---

## 9. 验收标准

- 以上单元测试全部通过，`npm run build` 无报错。
- 在 ST 中安装后，手工检查清单全部通过。
- 回廊中（无副本）不产生任何注入。
- 禁用本扩展后，ST 与其他扩展行为不受影响。

---

## 10. 后续各期（只预留，不实现）

- **第二期**：副API（OpenAI 兼容接口，经 ST 服务端转发；或跟随主API），每轮读「上一轮状态＋本轮回复」更新隐藏状态字段；事件条件改由扩展判断；事件未发生时在调试页告警；省钱模式。
- **第三期**：积分账本（每聊天一份，流水格式 `9/24 13:02 +300（直播打赏500×60%）`，删楼撤销）、从状态栏读取等级判断斩杀线；`<积分变动>` 标签；副本结算按积分表计算奖励（含越级60%）；直播（入场选择后锁定，回廊不可直播，弹幕只读玩家可见正文、与状态整理分开调用，主播可见弹幕为开关、默认关，主播死亡时打赏退还打赏者，系统抽成40%）。
- **第四期**：黑市赌局下注。
