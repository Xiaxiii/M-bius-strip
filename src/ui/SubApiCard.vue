<script setup lang="ts">
/** 设置页「副本事件检测」卡（CLAUDE.md 14） */
import { computed } from 'vue';
import { saveSettings, state } from '../app';
import { toast } from '../st/context';
import type { SubSource } from '../st/subTransport';
import { presetDot } from '../core/subPreset';
import PresetEditor from './PresetEditor.vue';

const sub = computed(() => state.settings.subApi);
const preset = computed(() => sub.value.presets.find((p) => p.id === sub.value.presetId) ?? null);

const dotStatus = computed(() => {
  if (sub.value.source === 'off')  return { kind: 'off', text: '未开启' };
  if (sub.value.source === 'main') return { kind: 'on',  text: '跟随主API' };
  return presetDot(preset.value);
});

const collapsed = computed(() => state.settings.cardCollapsed.subApi);
function toggleCollapse() {
  state.settings.cardCollapsed.subApi = !state.settings.cardCollapsed.subApi;
  save();
}

function save() { saveSettings(); }

function setSource(src: SubSource) {
  sub.value.source = src;
  save();
}

function setNumber(e: Event) {
  const v = Math.floor(Number((e.target as HTMLInputElement).value));
  if (!Number.isFinite(v) || v < 5) {
    toast('warning', '超时时间至少 5 秒。');
    return;
  }
  sub.value.timeoutSec = v;
  save();
}

function toggle(key: 'saveMode' | 'wait', val: boolean) {
  sub.value[key] = val;
  save();
}
</script>

<template>
  <div class="rlzc-card rlzc-collapsible rlzc-subapi">
    <button
      class="rlzc-collapse-head"
      :aria-expanded="!collapsed"
      @click="toggleCollapse"
    >
      <h4>副本事件检测</h4>
      <span class="rlzc-dot" :data-kind="dotStatus.kind">{{ dotStatus.text }}</span>
      <span class="rlzc-collapse-arrow" :class="{ open: !collapsed }">▸</span>
    </button>
    <div v-if="!collapsed" class="rlzc-collapse-body">
    <p class="rlzc-hint">每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。</p>
    <div class="rlzc-segsrc" role="group" aria-label="检测来源">
      <button :class="{ on: sub.source === 'off' }" @click="setSource('off')">关闭</button>
      <button :class="{ on: sub.source === 'main' }" @click="setSource('main')">跟随主API</button>
      <button :class="{ on: sub.source === 'preset' }" @click="setSource('preset')">自设API</button>
    </div>
    <template v-if="sub.source === 'preset'">
      <PresetEditor :owner="sub" />
    </template>

    <template v-if="sub.source !== 'off'">
      <div class="rlzc-option-list">
        <div class="rlzc-option-row">
          <div class="rlzc-option-label">
            <span>省钱模式</span>
            <small>只在有预设事件的轮次检测</small>
          </div>
          <button
            role="switch" type="button"
            :aria-checked="sub.saveMode ? 'true' : 'false'"
            :class="['rlzc-toggle', { on: sub.saveMode }]"
            @click="toggle('saveMode', !sub.saveMode)"
          ><span /></button>
        </div>
        <div class="rlzc-option-row">
          <div class="rlzc-option-label">
            <span>等检测完再写下一轮</span>
            <small>关掉更快，状态可能晚一轮</small>
          </div>
          <button
            role="switch" type="button"
            :aria-checked="sub.wait ? 'true' : 'false'"
            :class="['rlzc-toggle', { on: sub.wait }]"
            @click="toggle('wait', !sub.wait)"
          ><span /></button>
        </div>
        <div class="rlzc-option-row rlzc-option-row-timeout">
          <span>超时</span>
          <div class="rlzc-timeout-wrap">
            <input type="number" min="5" class="rlzc-input rlzc-input-num" :value="sub.timeoutSec" @change="setNumber" />
            <span class="rlzc-unit">秒</span>
          </div>
        </div>
      </div>
    </template>
    </div><!-- /rlzc-collapse-body -->
  </div>
</template>
