<script setup lang="ts">
import { state, type TabId } from '../app';
import { confirmBox } from '../st/context';
import SystemTab from './tabs/SystemTab.vue';
import LedgerTab from './tabs/LedgerTab.vue';
import MarketTab from './tabs/MarketTab.vue';
import SettingsTab from './tabs/SettingsTab.vue';
import DebugTab from './tabs/DebugTab.vue';

const tabs: { id: TabId; label: string }[] = [
  { id: 'system', label: '系统' },
  { id: 'ledger', label: '账本' },
  { id: 'market', label: '黑市' },
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
        <LedgerTab v-else-if="state.tab === 'ledger'" />
        <MarketTab v-else-if="state.tab === 'market'" />
        <SettingsTab v-else-if="state.tab === 'settings'" />
        <DebugTab v-else-if="state.tab === 'debug' && state.debugUnlocked" />
      </div>
    </section>
  </div>
</template>
