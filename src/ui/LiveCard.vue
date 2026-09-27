<script setup lang="ts">
/** 设置页「直播」卡（第三期b-第4段） */
import { computed } from 'vue';
import { liveControl, saveSettings, state, toggleCorridorLive } from '../app';

const live = computed(() => state.settings.live);
const subOn = computed(() => state.settings.subApi.source !== 'off');
/** 事件检测来源为「关闭」时只能用本地 */
const source = computed(() => (subOn.value ? live.value.source : 'local'));
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

function setSource(src: 'local' | 'ai') {
  if (src === 'ai' && !subOn.value) return;
  live.value.source = src;
  saveSettings();
}

function setFreq(e: Event) {
  const v = Math.floor(Number((e.target as HTMLInputElement).value));
  live.value.freq = Number.isFinite(v) ? Math.max(1, Math.min(10, v)) : 3;
  (e.target as HTMLInputElement).value = String(live.value.freq);
  saveSettings();
}

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
        <div class="rlzc-option-row rlzc-option-row-stack">
          <span class="rlzc-option-label"><span>弹幕来源</span></span>
          <div class="rlzc-segsrc" role="group" aria-label="弹幕来源">
            <button :class="{ on: source === 'local' }" @click="setSource('local')">本地</button>
            <button :class="{ on: source === 'ai' }" :disabled="!subOn" @click="setSource('ai')">本地+AI</button>
          </div>
          <small v-if="!subOn" class="rlzc-hint">需先在副本事件检测里选接口</small>
        </div>
        <div v-if="source === 'ai'" class="rlzc-option-row">
          <div class="rlzc-option-label">
            <span>生成频率</span>
            <small>关键事件时另加一次</small>
          </div>
          <div class="rlzc-timeout-wrap">
            <span class="rlzc-unit">每</span>
            <input type="number" min="1" max="10" class="rlzc-input rlzc-input-num" :value="live.freq" @change="setFreq" />
            <span class="rlzc-unit">轮</span>
          </div>
        </div>
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
