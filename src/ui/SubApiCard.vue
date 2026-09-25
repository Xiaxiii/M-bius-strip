<script setup lang="ts">
/** 设置页「副本事件检测」卡（即第二期的副API，CLAUDE.md 14） */
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
const testResult = ref('');

function save() {
  saveSettings();
}

function setSource(e: Event) {
  sub.value.source = (e.target as HTMLSelectElement).value as SubSource;
  testResult.value = '';
  save();
}

function newId() {
  return Math.random().toString(36).slice(2, 10);
}

async function addPreset() {
  const name = (await inputBox('给这个API起个名字：', `我的API ${sub.value.presets.length + 1}`))?.trim();
  if (!name) return;
  const p: SubPreset = { id: newId(), name, url: '', key: '', model: '' };
  sub.value.presets = [...sub.value.presets, p];
  sub.value.presetId = p.id;
  models.value = [];
  testResult.value = '';
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
  save();
}

function pickPreset(e: Event) {
  sub.value.presetId = (e.target as HTMLSelectElement).value;
  models.value = [];
  testResult.value = '';
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
  testResult.value = '测试中…';
  try {
    const r = await testPreset(preset.value, Math.max(5, sub.value.timeoutSec) * 1000);
    models.value = r.models;
    if (!preset.value.model && r.models.length) {
      preset.value.model = r.models[0];
      save();
    }
    testResult.value = `连接成功${r.models.length ? `，找到 ${r.models.length} 个模型` : ''}。`;
  } catch (e) {
    testResult.value = `连接失败：${classifyError(e)}（${String((e as Error)?.message ?? e).slice(0, 120)}）`;
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

function toggle(key: 'saveMode' | 'wait', e: Event) {
  sub.value[key] = (e.target as HTMLInputElement).checked;
  save();
}
</script>

<template>
  <div class="rlzc-card rlzc-subapi">
    <h4>副本事件检测</h4>
    <p class="rlzc-hint rlzc-intro">
      检测副本里预设的事件到底有没有发生。开启后，每轮AI写完正文，会另外请一个AI把这段正文读一遍：检查这一轮该发生的事件（比如「某人这一轮去了5楼」）有没有真的写出来，顺便记下谁在哪、发生了什么，下一轮提醒写正文的AI。它只检查、不写剧情。
    </p>
    <p class="rlzc-hint">不开也能正常玩，只是没人帮你检查。开启后每轮会多调用一次AI，会多一点费用。</p>

    <label class="rlzc-field">
      <span>用哪个AI检测</span>
      <select class="rlzc-input" :value="sub.source" @change="setSource">
        <option value="off">关闭</option>
        <option value="main">跟随主API（和写正文的是同一个）</option>
        <option value="preset">自设API（另填一个）</option>
      </select>
    </label>

    <template v-if="sub.source === 'preset'">
      <div class="rlzc-row">
        <select class="rlzc-input" :value="sub.presetId" @change="pickPreset">
          <option v-if="!sub.presets.length" value="">还没有保存的API</option>
          <option v-for="p in sub.presets" :key="p.id" :value="p.id">{{ p.name }}</option>
        </select>
        <button class="rlzc-btn small" @click="addPreset">新建</button>
        <button class="rlzc-btn ghost small" :disabled="!preset" @click="renamePreset">改名</button>
        <button class="rlzc-btn ghost small" :disabled="!preset" @click="removePreset">删除</button>
      </div>
      <template v-if="preset">
        <label class="rlzc-field">
          <span>地址</span>
          <input class="rlzc-input" :value="preset.url" placeholder="https://…/v1" @change="setField('url', $event)" />
        </label>
        <label class="rlzc-field">
          <span>密钥</span>
          <span class="rlzc-row rlzc-grow">
            <input class="rlzc-input" :type="showKey ? 'text' : 'password'" :value="preset.key" autocomplete="off" @change="setField('key', $event)" />
            <button class="rlzc-btn ghost small" @click="showKey = !showKey">{{ showKey ? '隐藏' : '显示' }}</button>
          </span>
        </label>
        <label class="rlzc-field">
          <span>模型</span>
          <select v-if="models.length" class="rlzc-input" :value="preset.model" @change="setField('model', $event)">
            <option v-if="!models.includes(preset.model)" :value="preset.model">{{ preset.model || '请选择…' }}</option>
            <option v-for="m in models" :key="m" :value="m">{{ m }}</option>
          </select>
          <input v-else class="rlzc-input" :value="preset.model" placeholder="点「测试连接」拉取模型列表" @change="setField('model', $event)" />
        </label>
        <div class="rlzc-row">
          <button class="rlzc-btn small" :disabled="testing || !preset.url" @click="test">测试连接</button>
          <small class="rlzc-hint rlzc-test-result">{{ testResult }}</small>
        </div>
      </template>
    </template>

    <template v-if="sub.source !== 'off'">
      <label class="rlzc-check"><input type="checkbox" :checked="sub.saveMode" @change="toggle('saveMode', $event)" />省钱模式：只在这一轮或下一轮有预设事件时才检测，其余轮不调用</label>
      <label class="rlzc-check"><input type="checkbox" :checked="sub.wait" @change="toggle('wait', $event)" />等检测完再写下一轮（关掉会更快，但写正文的AI可能拿到晚一轮的情况）</label>
      <label class="rlzc-field">
        <span>超时（秒）</span>
        <input type="number" min="5" class="rlzc-input" :value="sub.timeoutSec" @change="setNumber" />
      </label>
    </template>

    <p v-if="sub.source === 'preset'" class="rlzc-hint">密钥保存在本机的酒馆设置里。分享设置文件或截图时，请注意不要带出密钥。</p>
  </div>
</template>
