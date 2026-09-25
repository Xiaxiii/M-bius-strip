/** 检查项登记：每项可以有多个部分（桌面 / 手机 / 共存），全部通过才算通过 */
import fs from 'node:fs';
import path from 'node:path';
import { OUT } from './paths.mjs';

export const TITLES = {
  1: '注入深度下方有「副本事件检测」卡（原「副API」卡），默认关闭',
  2: '关闭状态下钟楼跑4轮：轮次、三块注入、状态栏与第一期一致，模拟服务没有副API调用',
  3: '新建两条接口预设，测试连接成功并拉到模型列表，选中模型',
  4: '密钥默认显示为圆点，可以切换显示',
  5: '刷新页面、重启 ST、换聊天、换角色卡后，预设、选中的预设和各自的模型都还在',
  6: '每轮回复后调用一次，系统页显示「副本记录：已更新（第N轮）」',
  7: '等待整理：检测延迟3秒时下一次生成确实等待，期间显示「整理中」',
  8: '调试页显示每楼事件核对和钟楼隐藏状态；没写出来的事件标为未发生，有黄色警告',
  9: '预判条件不成立的事件下一轮不注入，调试页有「已跳过」',
  10: '主AI请求里有「［副本状态·仅供AI］」',
  11: '回廊中不调用；「继续生成」不调用',
  12: '删最后一楼，状态回到上一楼',
  13: '重新生成、左右滑动后新回复重新整理，状态跟随当前显示的回复',
  14: '401：自动重试2次后弹窗，写明原因，三个按钮都在',
  15: '换一个接口：弹窗内选另一条预设，立即成功',
  16: '这轮先跳过：照常生成，系统页「第N轮状态未更新」，同一轮不再弹窗',
  17: '超时、乱码各一次；带 ``` 的 JSON 能解析、不算失败',
  18: '关闭「等待整理」时只提示、不阻塞生成',
  19: '跟随主API：正常更新；静默调用不触发本扩展注入、不递归；正文请求里没有混进检测指令',
  20: '使用酒馆连接配置（已按要求删除）',
  21: '省钱模式：喜宴（无事件表）跑5轮基本不调用，状态沿用上一次',
  22: '喜宴、游戏开场白触发入场确认；钟楼开场白为第1轮',
  23: '「约剩…/总时长」注入格式正确；「最多剩余轮次」数值正确',
  24: '页签为「系统、设置、调试」；钟楼进入后系统页下方显示资料；回廊中下拉选中副本可预览资料',
  25: '与柏宝书、酒馆助手同时启用：两边功能正常，控制台没有本扩展引起的报错',
};

/** results[id] = [{ part, ok, evidence[], shots[], note }] */
export const results = {};

/**
 * 记录一项检查的一个部分。ok：true 通过 / false 不通过 / null 无法模拟
 */
export function record(id, part, ok, evidence = [], shots = [], note = '') {
  (results[id] ??= []).push({ part, ok, evidence: [].concat(evidence).filter(Boolean), shots: [].concat(shots).filter(Boolean), note });
  const mark = ok === true ? '通过' : ok === false ? '不通过' : '无法模拟';
  console.log(`  [${id}] ${part}：${mark}${note ? `（${note}）` : ''}`);
  if (ok !== true) for (const e of [].concat(evidence).filter(Boolean)) console.log(`      · ${e}`);
}

export function statusOf(id) {
  const parts = results[id] ?? [];
  if (!parts.length) return '未运行';
  if (parts.some((p) => p.ok === false)) return '不通过';
  if (parts.every((p) => p.ok === null)) return '无法模拟';
  return '通过';
}

export function writeResults(extra = {}) {
  fs.mkdirSync(OUT, { recursive: true });
  const data = { at: new Date().toISOString(), items: {}, ...extra };
  for (const id of Object.keys(TITLES)) data.items[id] = { title: TITLES[id], status: statusOf(id), parts: results[id] ?? [] };
  fs.writeFileSync(path.join(OUT, 'results.json'), JSON.stringify(data, null, 2));
  const lines = ['| # | 检查项 | 结果 |', '|---|---|---|'];
  for (const id of Object.keys(TITLES)) lines.push(`| ${id} | ${TITLES[id]} | ${statusOf(id)} |`);
  fs.writeFileSync(path.join(OUT, 'summary.md'), lines.join('\n') + '\n');
  return data;
}
