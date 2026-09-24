<script setup lang="ts">
import { state, type TabId } from '../app';
import { confirmBox } from '../st/context';
import SystemTab from './tabs/SystemTab.vue';
import DocsTab from './tabs/DocsTab.vue';
import MemoTab from './tabs/MemoTab.vue';
import SettingsTab from './tabs/SettingsTab.vue';
import DebugTab from './tabs/DebugTab.vue';

const tabs: { id: TabId; label: string }[] = [
  { id: 'system', label: '系统' },
  { id: 'docs', label: '副本资料' },
  { id: 'memo', label: '备忘录' },
  { id: 'settings', label: '设置' },
  { id: 'debug', label: '调试' },
];

async function pick(id: TabId) {
  if (id === 'debug' && !state.debugUnlocked) {
    if (!(await confirmBox('此页会显示副本真相，确定要打开吗？'))) return;
    state.debugUnlocked = true;
  }
  state.tab = id;
}
</script>

<template>
  <div class="rlzc-backdrop" @click.self="state.panelOpen = false">
    <section class="rlzc-panel" role="dialog" aria-label="回廊种菜系统">
      <header class="rlzc-head">
        <span class="rlzc-title">回廊种菜系统</span>
        <button class="rlzc-icon" title="关闭" @click="state.panelOpen = false">×</button>
      </header>
      <nav class="rlzc-tabs">
        <button v-for="t in tabs" :key="t.id" :class="{ on: state.tab === t.id }" @click="pick(t.id)">{{ t.label }}</button>
      </nav>
      <div class="rlzc-body">
        <SystemTab v-if="state.tab === 'system'" />
        <DocsTab v-else-if="state.tab === 'docs'" />
        <MemoTab v-else-if="state.tab === 'memo'" />
        <SettingsTab v-else-if="state.tab === 'settings'" />
        <DebugTab v-else-if="state.tab === 'debug' && state.debugUnlocked" />
      </div>
    </section>
  </div>
</template>
