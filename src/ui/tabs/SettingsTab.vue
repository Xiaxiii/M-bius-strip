<script setup lang="ts">
import { ref } from 'vue';
import { importPack, removePack, saveSettings, setPanelDisplay, state, type Settings } from '../../app';
import { confirmBox, toast } from '../../st/context';
import SubApiCard from '../SubApiCard.vue';

const errors = ref<string[]>([]);
const fileInput = ref<HTMLInputElement | null>(null);

function setDepth(key: 'token' | 'progress' | 'turn' | 'ledger', e: Event) {
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

function toggleCard(key: keyof typeof state.settings.cardCollapsed) {
  state.settings.cardCollapsed[key] = !state.settings.cardCollapsed[key];
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
      <p class="rlzc-hint">选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。</p>
    </div>

    <!-- 注入深度（可折叠） -->
    <div class="rlzc-card rlzc-collapsible">
      <button
        class="rlzc-collapse-head"
        :aria-expanded="!state.settings.cardCollapsed.depths"
        @click="toggleCard('depths')"
      >
        <h4>注入深度</h4>
        <span class="rlzc-collapse-arrow" :class="{ open: !state.settings.cardCollapsed.depths }">▸</span>
      </button>
      <div v-if="!state.settings.cardCollapsed.depths" class="rlzc-collapse-body">
        <p class="rlzc-hint">数字越小越靠近最新消息，AI 越重视。一般不用改。</p>
        <div class="rlzc-depth">
          <label class="rlzc-field">
            <span>副本暗号<small>触发世界书的副本条目</small></span>
            <input type="number" min="0" class="rlzc-input rlzc-input-num" :value="state.settings.depths.token" @change="setDepth('token', $event)" />
          </label>
          <label class="rlzc-field">
            <span>副本进度<small>阶段、轮次、时限、副本状态</small></span>
            <input type="number" min="0" class="rlzc-input rlzc-input-num" :value="state.settings.depths.progress" @change="setDepth('progress', $event)" />
          </label>
          <label class="rlzc-field">
            <span>本轮指令<small>本轮事件与时限写法</small></span>
            <input type="number" min="0" class="rlzc-input rlzc-input-num" :value="state.settings.depths.turn" @change="setDepth('turn', $event)" />
          </label>
          <label class="rlzc-field">
            <span>账户<small>积分余额与清算状态</small></span>
            <input type="number" min="0" class="rlzc-input rlzc-input-num" :value="state.settings.depths.ledger" @change="setDepth('ledger', $event)" />
          </label>
        </div>
      </div>
    </div>

    <!-- 副本事件检测（SubApiCard 自带折叠） -->
    <SubApiCard />

    <!-- 通用副本默认轮数上限（可折叠） -->
    <div class="rlzc-card rlzc-collapsible">
      <button
        class="rlzc-collapse-head"
        :aria-expanded="!state.settings.cardCollapsed.genericCaps"
        @click="toggleCard('genericCaps')"
      >
        <h4>通用副本默认轮数上限</h4>
        <span class="rlzc-collapse-arrow" :class="{ open: !state.settings.cardCollapsed.genericCaps }">▸</span>
      </button>
      <div v-if="!state.settings.cardCollapsed.genericCaps" class="rlzc-collapse-body">
        <p class="rlzc-hint">未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。</p>
        <label v-for="lv in LEVELS" :key="lv" class="rlzc-field">
          <span>{{ lv }} 级</span>
          <input type="number" min="1" class="rlzc-input rlzc-input-num" :value="state.settings.genericCaps[lv]" @change="setCap(lv, $event)" />
        </label>
      </div>
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
      <label class="rlzc-check"><input type="checkbox" :checked="state.settings.showBall" @change="toggle('showBall', $event)" />显示悬浮球</label>
      <label class="rlzc-check"><input type="checkbox" :checked="state.settings.debug" @change="toggle('debug', $event)" />调试模式</label>
    </div>
  </div>

  <p class="rlzc-hint rlzc-key-notice">密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。</p>
</template>
