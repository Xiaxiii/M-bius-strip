/**
 * 把 out/results.json（和 out/cost.json）整理成报告草稿 out/report-draft.md，方便写 REPORT.md。
 * 用法：node report.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { OUT } from './lib/paths.mjs';

const data = JSON.parse(fs.readFileSync(path.join(OUT, 'results.json'), 'utf8'));
const lines = [];
const partStatus = (parts, prefix) => {
  const ps = parts.filter((p) => p.part.startsWith(prefix));
  if (!ps.length) return '—';
  if (ps.some((p) => p.ok === false)) return '不通过';
  if (ps.every((p) => p.ok === null)) return '无法模拟';
  return '通过';
};

lines.push('| # | 检查项 | 桌面 | 手机 390px | 共存 | 结果 |', '|---|---|---|---|---|---|');
for (const [id, it] of Object.entries(data.items)) {
  lines.push(`| ${id} | ${it.title} | ${partStatus(it.parts, 'desktop')} | ${partStatus(it.parts, 'mobile')} | ${partStatus(it.parts, 'coexist')} | **${it.status}** |`);
}
lines.push('');
for (const [id, it] of Object.entries(data.items)) {
  lines.push(`### ${id}. ${it.title} — ${it.status}`, '');
  for (const p of it.parts) {
    const mark = p.ok === true ? '通过' : p.ok === false ? '不通过' : '无法模拟';
    lines.push(`- **${p.part}：${mark}**${p.note ? `（${p.note}）` : ''}`);
    for (const e of p.evidence) lines.push(`  - ${e}`);
    if (p.shots.length) lines.push(`  - 截图：${p.shots.map((s) => `\`${s}\``).join('、')}`);
  }
  lines.push('');
}
if (data.extras?.length) {
  lines.push('### 额外检查', '');
  for (const x of data.extras) lines.push(`- ${x.part}｜${x.name}：${x.ok ? '通过' : '不通过'}（${x.detail}）`);
  lines.push('');
}
const issues = data.consoleIssues ?? [];
lines.push('### 控制台', '');
lines.push(`错误/警告共 ${issues.length} 条，与本扩展有关的 ${issues.filter((i) => i.ours).length} 条。`);
const uniq = new Map();
for (const i of issues) uniq.set(`${i.type}|${i.text.slice(0, 120)}`, i);
for (const i of uniq.values()) lines.push(`- [${i.part}] ${i.type}${i.ours ? '（本扩展）' : ''}：${i.text.slice(0, 160).replace(/\n/g, ' ')}`);
lines.push('');
const costFile = path.join(OUT, 'cost.json');
if (fs.existsSync(costFile)) {
  const c = JSON.parse(fs.readFileSync(costFile, 'utf8'));
  lines.push('### 费用', '', '| 轮 | 本轮事件 | 检测输入 o200k / cl100k | 检测输出 o200k / cl100k | 正文输入 o200k | 正文输出 o200k |', '|---|---|---|---|---|---|');
  for (const r of c.rounds ?? []) {
    lines.push(`| ${r.round} | ${r.events || '—'} | ${r.subIn?.o200k} / ${r.subIn?.cl100k} | ${r.subOut?.o200k} / ${r.subOut?.cl100k} | ${r.mainIn?.o200k} | ${r.mainOut?.o200k} |`);
  }
  lines.push('', `o200k：检测平均输入 ${c.o200k?.subInAvg}、平均输出 ${c.o200k?.subOutAvg}；10轮合计输入 ${c.o200k?.subInTotal}、输出 ${c.o200k?.subOutTotal}`);
  lines.push(`cl100k：检测平均输入 ${c.cl100k?.subInAvg}、平均输出 ${c.cl100k?.subOutAvg}；10轮合计输入 ${c.cl100k?.subInTotal}、输出 ${c.cl100k?.subOutTotal}`);
}
fs.writeFileSync(path.join(OUT, 'report-draft.md'), lines.join('\n') + '\n');
console.log(`已写入 ${path.join(OUT, 'report-draft.md')}`);
