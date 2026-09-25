<script setup lang="ts">
import { ref } from 'vue';
import { importPack, removePack, saveSettings, setPanelDisplay, state, type Settings } from '../../app';
import { confirmBox, toast } from '../../st/context';

const errors = ref<string[]>([]);
const fileInput = ref<HTMLInputElement | null>(null);

function setDepth(key: 'token' | 'progress' | 'turn', e: Event) {
  const v = Math.max(0, Math.min(10000, Math.floor(Number((e.target as HTMLInputElement).value) || 0)));
  state.settings.depths[key] = v;
  saveSettings();
}

async function onFile(e: Event) {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  input.value = '';
  if (!file) return;
  errors.value = importPack(await file.text());
  if (!errors.value.length) toast('success', `已导入副本包：${file.name}`);
}

async function remove(id: string, name: string) {
  if (await confirmBox(`确定删除自定义副本包《${name}》吗？`)) removePack(id);
}

const LEVELS = ['D', 'C', 'B', 'A', 'S'] as const;
function setCap(level: (typeof LEVELS)[number], e: Event) {
  const v = Math.floor(Number((e.target as HTMLInputElement).value));
  if (!Number.isFinite(v) || v < 1) return;
  state.settings.genericCaps = { ...state.settings.genericCaps, [level]: v };
  saveSettings();
}

function setDisplay(e: Event) {
  setPanelDisplay((e.target as HTMLSelectElement).value as Settings['panelDisplay']);
}

function toggle(key: 'debug' | 'showBall', e: Event) {
  state.settings[key] = (e.target as HTMLInputElement).checked;
  saveSettings();
}
</script>

<template>
  <div class="rlzc-settings">
    <div class="rlzc-card">
      <h4>副本信息显示位置</h4>
      <select class="rlzc-input" :value="state.settings.panelDisplay" @change="setDisplay">
        <option value="panel">扩展面板（默认）</option>
        <option value="statusbar">正文状态栏</option>
      </select>
      <p class="rlzc-hint">
        {{ state.settings.panelDisplay === 'statusbar'
          ? '正文中保留 <副本> 标签，由你的状态栏显示；系统页不再显示时限、进度条、任务和 ps。'
          : '正文中隐藏 <副本> 标签，时限、进度条、任务和 ps 显示在系统页。' }}
        两种方式下扩展都会读取 <副本> 做核对。
      </p>
    </div>

    <div class="rlzc-card">
      <h4>注入深度</h4>
      <label class="rlzc-field"><span>暗号 rlzc_token</span><input type="number" min="0" class="rlzc-input" :value="state.settings.depths.token" @change="setDepth('token', $event)" /></label>
      <label class="rlzc-field"><span>进度 rlzc_progress</span><input type="number" min="0" class="rlzc-input" :value="state.settings.depths.progress" @change="setDepth('progress', $event)" /></label>
      <label class="rlzc-field"><span>本轮 rlzc_turn</span><input type="number" min="0" class="rlzc-input" :value="state.settings.depths.turn" @change="setDepth('turn', $event)" /></label>
    </div>

    <div class="rlzc-card">
      <h4>通用副本默认轮数上限</h4>
      <p class="rlzc-hint">未收录的副本按等级取轮数上限；简报时限一行写了「（最多N轮）」时以简报为准。只影响之后进入的副本。</p>
      <label v-for="lv in LEVELS" :key="lv" class="rlzc-field">
        <span>{{ lv }} 级</span>
        <input type="number" min="1" class="rlzc-input" :value="state.settings.genericCaps[lv]" @change="setCap(lv, $event)" />
      </label>
    </div>

    <div class="rlzc-card">
      <h4>自定义副本包</h4>
      <ul v-if="state.settings.customPacks.length" class="rlzc-list">
        <li v-for="p in state.settings.customPacks" :key="p.id">
          <span>{{ p.level }}｜{{ p.name }} <small>v{{ p.version }}</small></span>
          <button class="rlzc-btn ghost small" @click="remove(p.id, p.name)">删除</button>
        </li>
      </ul>
      <p v-else class="rlzc-hint">还没有导入自定义副本包。</p>
      <input ref="fileInput" type="file" accept=".json,application/json" hidden @change="onFile" />
      <button class="rlzc-btn" @click="fileInput?.click()">导入 JSON…</button>
      <ul v-if="errors.length" class="rlzc-errors"><li v-for="(er, i) in errors" :key="i">{{ er }}</li></ul>
    </div>

    <div class="rlzc-card">
      <h4>其他</h4>
      <label class="rlzc-check"><input type="checkbox" :checked="state.settings.showBall" @change="toggle('showBall', $event)" />显示悬浮球（关闭后可从扩展菜单打开面板）</label>
      <label class="rlzc-check"><input type="checkbox" :checked="state.settings.debug" @change="toggle('debug', $event)" />调试模式（调试页允许手动修改，并在控制台输出日志）</label>
    </div>
  </div>
</template>
