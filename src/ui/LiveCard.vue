<script setup lang="ts">
/** 设置页「直播」卡（第三期b-第4段） */
import { computed } from 'vue';
import { liveControl, saveSettings, state, toggleCorridorLive } from '../app';
import PresetEditor from './PresetEditor.vue';

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

/** 弹幕库和新弹幕至少开一个 */
function setSwitch(key: 'library' | 'aiOn', v: boolean) {
  const other = key === 'library' ? 'aiOn' : 'library';
  if (!v && !live.value[other]) return;
  live.value[key] = v;
  saveSettings();
}

function setApi(api: 'main' | 'preset') {
  live.value.api = api;
  if (api === 'preset' && !live.value.presetId) live.value.presetId = state.settings.subApi.presets[0]?.id ?? '';
  saveSettings();
}

function setNum(key: 'freq' | 'total' | 'ratio', lo: number, hi: number, step: number, e: Event) {
  const el = e.target as HTMLInputElement;
  const v = Math.round(Number(el.value) / step) * step;
  live.value[key] = Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : live.value[key];
  el.value = String(live.value[key]);
  saveSettings();
}

/** 生成新弹幕那一轮里新弹幕的条数（按设定值算，实际每轮浮动1条） */
const aiShare = computed(() => {
  const t = live.value.total;
  return live.value.library ? Math.max(1, Math.round((t * live.value.ratio) / 100)) : t;
});

/** 一行小字说明当前组合的效果 */
const summary = computed(() => {
  const l = live.value;
  if (!l.aiOn) return `每轮弹幕库约 ${l.total} 条，不调用API。`;
  if (!l.library) {
    return l.freq === 1 ? `每轮新弹幕约 ${l.total} 条，每轮调用一次API。` : `每 ${l.freq} 轮新弹幕约 ${l.total} 条，其余轮次没有弹幕。`;
  }
  return `生成那轮新弹幕 ${aiShare.value} 条、弹幕库 ${l.total - aiShare.value} 条，其余轮次全用弹幕库。`;
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
      <div class="rlzc-option-list">
        <div class="rlzc-option-row">
          <div class="rlzc-option-label">
            <span>弹幕库</span>
            <small>从现成弹幕里抽，不调用API</small>
          </div>
          <button
            role="switch"
            type="button"
            :aria-checked="live.library ? 'true' : 'false'"
            :class="['rlzc-toggle', { on: live.library }]"
            @click="setSwitch('library', !live.library)"
          ><span /></button>
        </div>
        <div class="rlzc-option-row">
          <div class="rlzc-option-label">
            <span>新弹幕</span>
            <small>按剧情现写，会调用API</small>
          </div>
          <button
            role="switch"
            type="button"
            :aria-checked="live.aiOn ? 'true' : 'false'"
            :class="['rlzc-toggle', { on: live.aiOn }]"
            @click="setSwitch('aiOn', !live.aiOn)"
          ><span /></button>
        </div>
        <div v-if="live.aiOn" class="rlzc-live-ai">
          <div class="rlzc-option-row rlzc-option-row-stack">
            <span class="rlzc-option-label"><span>新弹幕接口</span></span>
            <div class="rlzc-segsrc" role="group" aria-label="新弹幕接口">
              <button :class="{ on: live.api === 'main' }" @click="setApi('main')">跟随主API</button>
              <button :class="{ on: live.api === 'preset' }" @click="setApi('preset')">自设API</button>
            </div>
            <small v-if="live.api === 'preset'" class="rlzc-hint">接口列表与事件检测共用</small>
          </div>
          <PresetEditor v-if="live.api === 'preset'" :owner="live" />
          <div v-if="live.library" class="rlzc-option-row rlzc-option-row-stack">
            <div class="rlzc-option-label">
              <span>新弹幕占比</span>
              <small>生成那轮里新弹幕的比例</small>
            </div>
            <div class="rlzc-range-wrap">
              <input type="range" min="10" max="100" step="10" class="rlzc-range" aria-label="新弹幕占比" :value="live.ratio" @input="setNum('ratio', 10, 100, 10, $event)" />
              <span class="rlzc-range-val">{{ live.ratio }}%</span>
            </div>
          </div>
          <div class="rlzc-option-row">
            <div class="rlzc-option-label">
              <span>生成频率</span>
              <small>关键事件时另加一次</small>
            </div>
            <div class="rlzc-timeout-wrap">
              <span class="rlzc-unit">每</span>
              <input type="number" min="1" max="10" class="rlzc-input rlzc-input-num" :value="live.freq" @change="setNum('freq', 1, 10, 1, $event)" />
              <span class="rlzc-unit">轮</span>
            </div>
          </div>
        </div>
        <div class="rlzc-option-row rlzc-option-row-stack">
          <div class="rlzc-option-label">
            <span>每轮弹幕数</span>
            <small>实际上下浮动1条</small>
          </div>
          <div class="rlzc-range-wrap">
            <input type="range" min="5" max="25" step="1" class="rlzc-range" aria-label="每轮弹幕数" :value="live.total" @input="setNum('total', 5, 25, 1, $event)" />
            <span class="rlzc-range-val">{{ live.total }} 条</span>
          </div>
        </div>
        <p class="rlzc-hint rlzc-live-summary">{{ summary }}</p>
        <div class="rlzc-option-row">
          <div class="rlzc-option-label">
            <span>弹幕传给AI</span>
            <small>主AI能看到最近弹幕</small>
          </div>
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
