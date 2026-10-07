<script setup lang="ts">
/** 设置页「直播」卡（第三期b-第4段） */
import { computed, ref } from 'vue';
import { liveControl, saveSettings, state, toggleCorridorLive } from '../app';
import PresetEditor from './PresetEditor.vue';
import { inputBox } from '../st/context';
import type { SubPreset } from '../st/subTransport';

const live = computed(() => state.settings.live);
const ctl = computed(() => {
  void state.tick;
  void state.session;
  return liveControl();
});
const onAir = computed(() => ctl.value.on);

function toggleAir() {
  if (ctl.value.locked) return;
  toggleCorridorLive();
}

const collapsed = computed(() => state.settings.cardCollapsed.live);
function toggleCollapse() {
  state.settings.cardCollapsed.live = !state.settings.cardCollapsed.live;
  saveSettings();
}

/** 弹幕来源三选一：弹幕库 / 混合 / 全新（存成 library、aiOn 两个开关） */
type Mode = 'library' | 'mix' | 'fresh';
const mode = computed<Mode>(() => (!live.value.aiOn ? 'library' : live.value.library ? 'mix' : 'fresh'));
function setMode(m: Mode) {
  live.value.library = m !== 'fresh';
  live.value.aiOn = m !== 'library';
  saveSettings();
}

/** 接口下拉框：main、预设 id，或 new（新建） */
const apiValue = computed(() => (live.value.api === 'main' ? 'main' : live.value.presetId || 'main'));
const presets = computed(() => state.settings.subApi.presets);
const editing = ref(false);

async function pickApi(e: Event) {
  const el = e.target as HTMLSelectElement;
  const v = el.value;
  if (v === 'new') {
    const name = (await inputBox('给这个API起个名字：', `我的API ${presets.value.length + 1}`))?.trim();
    if (name) {
      const p: SubPreset = { id: Math.random().toString(36).slice(2, 10), name, url: '', key: '', model: '' };
      state.settings.subApi.presets = [...presets.value, p];
      live.value.api = 'preset';
      live.value.presetId = p.id;
      editing.value = true;
      saveSettings();
    }
    el.value = apiValue.value;
    return;
  }
  if (v === 'main') live.value.api = 'main';
  else {
    live.value.api = 'preset';
    live.value.presetId = v;
  }
  editing.value = false;
  saveSettings();
}

function setNum(key: 'freq' | 'total' | 'ratio', lo: number, hi: number, step: number, e: Event) {
  const el = e.target as HTMLInputElement;
  const v = Math.round(Number(el.value) / step) * step;
  live.value[key] = Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : live.value[key];
  el.value = String(live.value[key]);
  saveSettings();
}

/** 底部一行：说明当前组合在各轮的效果 */
const summary = computed(() => {
  const f = live.value.freq;
  if (mode.value === 'library') return '每轮来源弹幕库';
  if (mode.value === 'fresh') return f === 1 ? '每轮输出全新弹幕' : `每 ${f} 轮只输出 1 次弹幕`;
  return f === 1 ? '每轮输出混合弹幕' : `每 ${f} 轮输出 1 次混合弹幕；其余轮来源弹幕库`;
});

function setInject(v: boolean) {
  live.value.injectToAI = v;
  saveSettings();
}
</script>

<template>
  <div class="rlzc-card rlzc-collapsible rlzc-live-card">
    <button class="rlzc-collapse-head" :aria-expanded="!collapsed" @click="toggleCollapse">
      <h4>直播</h4>
      <span v-if="onAir" class="rlzc-dot" data-kind="on">直播中</span>
      <span class="rlzc-collapse-arrow" :class="{ open: !collapsed }">▸</span>
    </button>
    <div v-if="!collapsed" class="rlzc-collapse-body">
      <p class="rlzc-hint">开播后有观众弹幕和打赏，打赏计入积分。画面在状态栏的直播页。</p>
      <div class="rlzc-onair" :class="{ on: ctl.on, locked: ctl.locked }">
        <span class="rlzc-onair-dot" aria-hidden="true" />
        <div class="rlzc-onair-text">
          <strong>{{ ctl.on ? '直播中' : '未开播' }}</strong>
          <small>{{ ctl.note }}</small>
        </div>
        <span v-if="ctl.locked" class="rlzc-onair-lock" aria-label="副本内已锁定">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/></svg>
          已锁定
        </span>
        <button v-else type="button" class="rlzc-onair-btn" :class="{ stop: ctl.on }" @click="toggleAir">
          {{ ctl.on ? '下播' : '开播' }}
        </button>
      </div>
      <div class="rlzc-option-list rlzc-live-opts">
        <div class="rlzc-option-row">
          <span class="rlzc-live-key">弹幕</span>
          <div class="rlzc-segsrc rlzc-live-ctl" role="group" aria-label="弹幕来源">
            <button :class="{ on: mode === 'library' }" @click="setMode('library')">弹幕库</button>
            <button :class="{ on: mode === 'mix' }" @click="setMode('mix')">混合</button>
            <button :class="{ on: mode === 'fresh' }" @click="setMode('fresh')">全新</button>
          </div>
        </div>
        <div class="rlzc-option-row">
          <span class="rlzc-live-key">每轮</span>
          <div class="rlzc-range-wrap rlzc-live-ctl">
            <input type="range" min="5" max="25" step="1" class="rlzc-range" aria-label="每轮弹幕数" :value="live.total" @input="setNum('total', 5, 25, 1, $event)" />
            <span class="rlzc-range-val">{{ live.total }} 条</span>
          </div>
        </div>
        <div v-if="mode === 'mix'" class="rlzc-option-row">
          <span class="rlzc-live-key">新弹幕占</span>
          <div class="rlzc-range-wrap rlzc-live-ctl">
            <input type="range" min="10" max="100" step="10" class="rlzc-range" aria-label="新弹幕占比" :value="live.ratio" @input="setNum('ratio', 10, 100, 10, $event)" />
            <span class="rlzc-range-val">{{ live.ratio }}%</span>
          </div>
        </div>
        <template v-if="mode !== 'library'">
          <div class="rlzc-option-row">
            <span class="rlzc-live-key">接口</span>
            <div class="rlzc-live-ctl rlzc-live-api">
              <select class="rlzc-input" aria-label="新弹幕接口" :value="apiValue" @change="pickApi">
                <option value="main">跟随主API</option>
                <option v-for="p in presets" :key="p.id" :value="p.id">{{ p.name }}</option>
                <option value="new">＋ 新建接口</option>
              </select>
              <button v-if="live.api === 'preset' && live.presetId" class="rlzc-btn ghost small" type="button" @click="editing = !editing">{{ editing ? '收起' : '编辑' }}</button>
            </div>
          </div>
          <PresetEditor v-if="editing && live.api === 'preset' && live.presetId" :owner="live" bare />
          <div class="rlzc-option-row">
            <span class="rlzc-live-key">生成频率</span>
            <div class="rlzc-timeout-wrap">
              <span class="rlzc-unit">每</span>
              <input type="number" min="1" max="10" class="rlzc-input rlzc-input-num" aria-label="生成频率" :value="live.freq" @change="setNum('freq', 1, 10, 1, $event)" />
              <span class="rlzc-unit">轮</span>
            </div>
          </div>
        </template>
        <p class="rlzc-hint rlzc-live-summary">{{ summary }}</p>
        <div class="rlzc-option-row">
          <span class="rlzc-live-key">弹幕传给AI</span>
          <button
            role="switch"
            type="button"
            :aria-checked="live.injectToAI ? 'true' : 'false'"
            :class="['rlzc-toggle', { on: live.injectToAI }]"
            @click="setInject(!live.injectToAI)"
          ><span /></button>
        </div>
      </div>
    </div>
  </div>
</template>
