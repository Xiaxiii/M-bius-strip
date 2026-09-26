<script setup lang="ts">
/** 设置页「副本事件检测」卡（CLAUDE.md 14） */
import { computed, ref } from 'vue';
import { saveSettings, state } from '../app';
import { confirmBox, inputBox, toast } from '../st/context';
import { listModels, testPreset, type SubPreset, type SubSource } from '../st/subTransport';
import { classifyError } from '../core/subapi';

const sub = computed(() => state.settings.subApi);
const preset = computed(() => sub.value.presets.find((p) => p.id === sub.value.presetId) ?? null);
const models = ref<string[]>([]);
const showKey = ref(false);
const testing = ref(false);
const testStatus = ref<'none' | 'ok' | 'fail'>('none');
const testFailReason = ref('');

const dotStatus = computed(() => {
  if (sub.value.source === 'off')     return { kind: 'off',  text: '未开启' };
  if (sub.value.source === 'main')    return { kind: 'on',   text: '跟随主API' };
  if (testStatus.value === 'ok')      return { kind: 'on',   text: '已连接' };
  if (testStatus.value === 'fail')    return { kind: 'warn', text: '连接失败' };
  return { kind: 'warn', text: '未测试' };
});

const collapsed = computed(() => state.settings.cardCollapsed.subApi);
function toggleCollapse() {
  state.settings.cardCollapsed.subApi = !state.settings.cardCollapsed.subApi;
  save();
}

const connLine = computed(() => {
  if (testStatus.value === 'ok')   return `已连接 · 共 ${models.value.length} 个模型`;
  if (testStatus.value === 'fail') return `连接失败：${testFailReason.value}`;
  return '未测试';
});

function save() { saveSettings(); }

function setSource(src: SubSource) {
  sub.value.source = src;
  testStatus.value = 'none';
  save();
}

function newId() { return Math.random().toString(36).slice(2, 10); }

async function addPreset() {
  const name = (await inputBox('给这个API起个名字：', `我的API ${sub.value.presets.length + 1}`))?.trim();
  if (!name) return;
  const p: SubPreset = { id: newId(), name, url: '', key: '', model: '' };
  sub.value.presets = [...sub.value.presets, p];
  sub.value.presetId = p.id;
  models.value = [];
  testStatus.value = 'none';
  save();
}

async function renamePreset() {
  if (!preset.value) return;
  const name = (await inputBox('改名为：', preset.value.name))?.trim();
  if (!name) return;
  preset.value.name = name;
  save();
}

async function removePreset() {
  if (!preset.value) return;
  if (!(await confirmBox(`确定删除「${preset.value.name}」吗？`))) return;
  sub.value.presets = sub.value.presets.filter((p) => p.id !== sub.value.presetId);
  sub.value.presetId = sub.value.presets[0]?.id ?? '';
  models.value = [];
  testStatus.value = 'none';
  save();
}

function pickPreset(e: Event) {
  sub.value.presetId = (e.target as HTMLSelectElement).value;
  models.value = [];
  testStatus.value = 'none';
  save();
}

function setField(field: 'url' | 'key' | 'model', e: Event) {
  if (!preset.value) return;
  preset.value[field] = (e.target as HTMLInputElement).value.trim();
  save();
}

async function test() {
  if (!preset.value) return;
  testing.value = true;
  testStatus.value = 'none';
  testFailReason.value = '';
  try {
    const r = await testPreset(preset.value, Math.max(5, sub.value.timeoutSec) * 1000);
    models.value = r.models;
    if (!preset.value.model && r.models.length) {
      preset.value.model = r.models[0];
      save();
    }
    testStatus.value = 'ok';
  } catch (e) {
    testStatus.value = 'fail';
    testFailReason.value = classifyError(e);
    models.value = await listModels(preset.value).catch(() => []);
  } finally {
    testing.value = false;
  }
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
      <div class="rlzc-preset-area">
        <div class="rlzc-preset-row">
          <select class="rlzc-input" :value="sub.presetId" @change="pickPreset">
            <option v-if="!sub.presets.length" value="">还没有保存的接口</option>
            <option v-for="p in sub.presets" :key="p.id" :value="p.id">{{ p.name }}</option>
          </select>
          <button class="rlzc-icon-btn" aria-label="新建接口" type="button" @click="addPreset">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M8 3v10M3 8h10"/></svg>
          </button>
          <button class="rlzc-icon-btn" aria-label="改名" type="button" :disabled="!preset" @click="renamePreset">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M11 2L14 5 5 14H2v-3L11 2z"/></svg>
          </button>
          <button class="rlzc-icon-btn rlzc-danger" aria-label="删除接口" type="button" :disabled="!preset" @click="removePreset">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10"/></svg>
          </button>
        </div>
        <template v-if="preset">
          <div class="rlzc-stacked-field">
            <label class="rlzc-label">地址</label>
            <input class="rlzc-input" :value="preset.url" placeholder="https://…/v1" @change="setField('url', $event)" />
          </div>
          <div class="rlzc-stacked-field">
            <label class="rlzc-label">密钥</label>
            <div class="rlzc-key-wrap">
              <input class="rlzc-input" :type="showKey ? 'text' : 'password'" :value="preset.key" autocomplete="off" @change="setField('key', $event)" />
              <button class="rlzc-eye-btn" type="button" :aria-label="showKey ? '隐藏密钥' : '显示密钥'" @click="showKey = !showKey">
                <svg v-if="showKey" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z"/><circle cx="8" cy="8" r="2"/><path d="M2 2l12 12"/></svg>
                <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z"/><circle cx="8" cy="8" r="2"/></svg>
              </button>
            </div>
          </div>
          <div class="rlzc-stacked-field">
            <label class="rlzc-label">模型</label>
            <select v-if="models.length" class="rlzc-input" :value="preset.model" @change="setField('model', $event)">
              <option v-if="!models.includes(preset.model)" :value="preset.model">{{ preset.model || '请选择…' }}</option>
              <option v-for="m in models" :key="m" :value="m">{{ m }}</option>
            </select>
            <input v-else class="rlzc-input rlzc-input-disabled" :value="preset.model ? preset.model : '先测试连接'" readonly tabindex="-1" />
          </div>
          <div class="rlzc-conn-row">
            <span class="rlzc-dot" :data-kind="testStatus === 'ok' ? 'on' : testStatus === 'fail' ? 'warn' : 'off'">{{ connLine }}</span>
            <button class="rlzc-btn ghost" :disabled="testing || !preset.url" @click="test">测试连接</button>
          </div>
        </template>
      </div>
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
