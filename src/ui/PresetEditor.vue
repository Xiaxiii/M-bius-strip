<script setup lang="ts">
/**
 * 自设API的接口预设编辑区：选预设、新建、改名、删除、地址、密钥、模型、拉取与测试。
 * 预设列表存在 subApi.presets，副本事件检测和新弹幕共用；各自记住自己选的预设（owner.presetId）。
 */
import { computed, ref } from 'vue';
import { saveSettings, setCurrentPresetField, state } from '../app';
import { confirmBox, inputBox } from '../st/context';
import { fetchModels, probeModel, type SubPreset } from '../st/subTransport';
import {
  canFetchModels,
  canTestModel,
  describeError,
  fetchText,
  hhmm,
  recordFetch,
  recordTest,
  testText,
  type CheckResult,
} from '../core/subPreset';

/** bare：不显示顶上的预设选择行（由外面的下拉框选），改名、删除放在底部 */
const props = defineProps<{ owner: { presetId: string }; bare?: boolean }>();
const owner = props.owner;

const presets = computed(() => state.settings.subApi.presets);
const preset = computed(() => presets.value.find((p) => p.id === owner.presetId) ?? null);
const models = computed(() => preset.value?.models ?? []);
const showKey = ref(false);
const fetching = ref('');
const testing = ref('');

const checkRows = computed(() => {
  const p = preset.value;
  if (!p) return [];
  const row = (id: string, text: string, r: CheckResult | undefined) =>
    text && r ? [{ id, text, kind: r.ok ? 'on' : 'warn', time: r.at ? hhmm(r.at) : '' }] : [];
  return [...row('fetch', fetchText(p), p.fetchResult), ...row('test', testText(p), p.testResult)];
});

function save() { saveSettings(); }
function newId() { return Math.random().toString(36).slice(2, 10); }

async function addPreset() {
  const name = (await inputBox('给这个API起个名字：', `我的API ${presets.value.length + 1}`))?.trim();
  if (!name) return;
  const p: SubPreset = { id: newId(), name, url: '', key: '', model: '' };
  state.settings.subApi.presets = [...presets.value, p];
  owner.presetId = p.id;
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
  const gone = owner.presetId;
  const rest = presets.value.filter((p) => p.id !== gone);
  state.settings.subApi.presets = rest;
  // 两处共用预设列表：选着被删预设的都换到第一条
  for (const o of [state.settings.subApi, state.settings.live, owner]) if (o.presetId === gone) o.presetId = rest[0]?.id ?? '';
  save();
}

function pickPreset(e: Event) {
  owner.presetId = (e.target as HTMLSelectElement).value;
  save();
}

function setField(field: 'url' | 'key' | 'model', e: Event) {
  setCurrentPresetField(field, (e.target as HTMLInputElement | HTMLSelectElement).value, owner.presetId);
}

function timeoutMs() {
  return Math.max(5, Number(state.settings.subApi.timeoutSec) || 60) * 1000;
}

function sameAs(p: SubPreset, snap: SubPreset, withModel: boolean) {
  return p.url === snap.url && p.key === snap.key && (!withModel || p.model === snap.model);
}

async function pullModels() {
  const p = preset.value;
  if (!p || !canFetchModels(p) || fetching.value) return;
  const snap = { ...p };
  fetching.value = p.id;
  try {
    const list = await fetchModels(snap, timeoutMs());
    if (sameAs(p, snap, false)) recordFetch(p, { ok: true, models: list });
  } catch (e) {
    if (sameAs(p, snap, false)) recordFetch(p, { ok: false, reason: describeError(e) });
  } finally {
    fetching.value = '';
    save();
  }
}

async function testModel() {
  const p = preset.value;
  if (!p || !canTestModel(p) || testing.value) return;
  const snap = { ...p };
  testing.value = p.id;
  try {
    await probeModel(snap, timeoutMs());
    if (sameAs(p, snap, true)) recordTest(p, { ok: true });
  } catch (e) {
    if (sameAs(p, snap, true)) recordTest(p, { ok: false, reason: describeError(e) });
  } finally {
    testing.value = '';
    save();
  }
}
</script>

<template>
  <div class="rlzc-preset-area">
    <div v-if="!bare" class="rlzc-preset-row">
      <select class="rlzc-input" :value="owner.presetId" @change="pickPreset">
        <option v-if="!presets.length" value="">还没有保存的接口</option>
        <option v-for="p in presets" :key="p.id" :value="p.id">{{ p.name }}</option>
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
        <input class="rlzc-input" :value="preset.url" placeholder="https://…/v1" @input="setField('url', $event)" />
      </div>
      <div class="rlzc-stacked-field">
        <label class="rlzc-label">密钥</label>
        <div class="rlzc-key-wrap">
          <input class="rlzc-input" :type="showKey ? 'text' : 'password'" :value="preset.key" autocomplete="off" @input="setField('key', $event)" />
          <button class="rlzc-eye-btn" type="button" :aria-label="showKey ? '隐藏密钥' : '显示密钥'" @click="showKey = !showKey">
            <svg v-if="showKey" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z"/><circle cx="8" cy="8" r="2"/><path d="M2 2l12 12"/></svg>
            <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z"/><circle cx="8" cy="8" r="2"/></svg>
          </button>
        </div>
      </div>
      <div class="rlzc-stacked-field">
        <label class="rlzc-label">模型</label>
        <select v-if="models.length" class="rlzc-input" @change="setField('model', $event)">
          <option v-if="!preset.model" value="" selected disabled>请选择…</option>
          <option v-if="preset.model && !models.includes(preset.model)" :value="preset.model" selected>{{ preset.model }}</option>
          <option v-for="m in models" :key="m" :value="m" :selected="m === preset.model">{{ m }}</option>
        </select>
        <input v-else class="rlzc-input rlzc-input-disabled" :value="preset.model ? preset.model : '先拉取模型'" readonly tabindex="-1" />
      </div>
      <div class="rlzc-check-btns">
        <button class="rlzc-btn ghost" type="button" :disabled="!!fetching || !canFetchModels(preset)" @click="pullModels">{{ fetching === preset.id ? '拉取中…' : '拉取模型' }}</button>
        <button class="rlzc-btn ghost" type="button" :disabled="!!testing || !canTestModel(preset)" @click="testModel">{{ testing === preset.id ? '测试中…' : '测试模型' }}</button>
      </div>
      <ul v-if="checkRows.length" class="rlzc-check-list">
        <li v-for="row in checkRows" :key="row.id" :data-kind="row.kind">
          <span class="rlzc-check-text">{{ row.text }}</span>
          <time v-if="row.time" class="rlzc-check-time">{{ row.time }}</time>
        </li>
      </ul>
      <div v-if="bare" class="rlzc-check-btns">
        <button class="rlzc-btn ghost small" type="button" @click="renamePreset">改名</button>
        <button class="rlzc-btn ghost small rlzc-danger-text" type="button" @click="removePreset">删除接口</button>
      </div>
    </template>
  </div>
</template>
