<script setup lang="ts">
import { computed, ref } from 'vue';
import { endManually, skipToPhaseEnd, startManual, state } from '../../app';
import PackDocs from '../PackDocs.vue';
import LedgerSummary from '../LedgerSummary.vue';

const pickId = ref('');
const inDungeon = computed(() => !!state.session && !!state.pack);
const p = computed(() => state.progress);
/** 有进行中的副本（已结束的算回廊） */
const active = computed(() => inDungeon.value && !!p.value && !p.value.ended);
/** 回廊中下拉框选中、还没进入的副本：预览它的资料 */
const picked = computed(() => state.packs.find((pk) => pk.id === pickId.value) ?? null);
const hasPhases = computed(() => !!state.pack?.phases.length);
/** 正文状态栏模式：时限、进度条、任务、ps 由正文显示，系统页不重复 */
const inPanel = computed(() => state.settings.panelDisplay !== 'statusbar');

const roundText = computed(() => {
  const pr = p.value;
  if (!pr) return '';
  if (!hasPhases.value) return `第${pr.round}轮`;
  return `${pr.warn ? '⚠️ ' : ''}${pr.round}/${pr.phase.cap}`;
});

const remaining = computed(() => {
  const pr = p.value;
  if (!pr) return '';
  if (pr.limit?.text) return pr.limit.text;
  return pr.panel?.limit || state.session?.briefing?.limit || '—';
});

const canSkip = computed(() => {
  const pr = p.value;
  return !!pr && !pr.ended && hasPhases.value && pr.phase.cap > 0 && pr.nextRound < pr.phase.cap;
});

async function choose() {
  if (!pickId.value) return;
  await startManual(pickId.value);
  pickId.value = '';
}
</script>

<template>
  <div class="rlzc-system">
    <template v-if="inDungeon && p">
      <div class="rlzc-card rlzc-hero">
        <div class="rlzc-hero-top">
          <span class="rlzc-level">{{ state.pack?.rest ? '—' : state.pack!.level }}</span>
          <h3>{{ state.pack!.name }}</h3>
          <span v-if="p.ended" class="rlzc-chip">已结束</span>
        </div>
        <p v-if="state.session?.briefing?.goal" class="rlzc-goal">目标：{{ state.session.briefing.goal }}</p>
      </div>

      <div class="rlzc-grid">
        <div class="rlzc-stat" v-if="hasPhases"><span>阶段</span><b>{{ p.phase.name }}</b></div>
        <div class="rlzc-stat" :class="{ warn: p.warn }"><span>轮次</span><b>{{ roundText }}</b></div>
        <div class="rlzc-stat" v-if="p.currentClock"><span>钟时</span><b>{{ p.currentClock }}</b></div>
        <div v-if="p.roundsLeft" class="rlzc-stat"><span>最多剩余轮次</span><b>{{ p.roundsLeft.x }}/{{ p.roundsLeft.y }}</b></div>
        <div v-if="inPanel" class="rlzc-stat"><span>剩余时间</span><b>{{ remaining }}</b></div>
        <LedgerSummary />
      </div>

      <p v-if="state.subLine" class="rlzc-subline">{{ state.subLine }}</p>

      <div v-if="p.skipGoal" class="rlzc-note">快进中：目标 {{ state.pack!.phases.find((x) => x.id === p!.skipGoal!.phase)?.name }} 第{{ p.skipGoal.round }}轮</div>

      <div v-if="p.ended && p.settlement" class="rlzc-card">
        <div class="rlzc-kv"><span>结果</span><b>{{ p.settlement.result ?? '—' }}</b></div>
        <div class="rlzc-kv"><span>评价</span><b>{{ p.settlement.rating ?? '—' }}</b></div>
      </div>
      <div v-else-if="p.ended" class="rlzc-note">副本已手动结束。</div>

      <div v-if="inPanel && p.panel" class="rlzc-card">
        <div v-if="p.panel.progressBar" class="rlzc-kv"><span>进度</span><b class="rlzc-mono">{{ p.panel.progressBar }}</b></div>
        <div v-if="p.panel.tasks.length" class="rlzc-tasks">
          <span>任务</span>
          <ul><li v-for="(t, i) in p.panel.tasks" :key="i">{{ t }}</li></ul>
        </div>
        <div v-if="p.panel.ps" class="rlzc-ps">ps：{{ p.panel.ps }}</div>
      </div>

      <div class="rlzc-actions">
        <button class="rlzc-btn" :disabled="!canSkip" @click="skipToPhaseEnd">跳过（到本阶段结束）</button>
        <button class="rlzc-btn ghost" :disabled="p.ended" @click="endManually">手动结束副本</button>
      </div>

      <!-- 副本资料：进行中且有资料时显示在状态下方，整页一起滚动 -->
      <PackDocs v-if="active && state.pack!.docs?.length" :pack="state.pack!" />
    </template>

    <div v-else class="rlzc-card rlzc-rest">
      <h3>当前在回廊里，没有进行中的副本。</h3>
      <LedgerSummary />
    </div>

    <!-- 手动选择副本：只在回廊中（没有进行中的副本）显示 -->
    <div v-if="!active" class="rlzc-card">
      <label class="rlzc-label">手动选择副本</label>
      <div class="rlzc-row">
        <select v-model="pickId" class="rlzc-input">
          <option value="">选择副本…</option>
          <option v-for="pk in state.packs" :key="pk.id" :value="pk.id">{{ pk.level }}｜{{ pk.name }}</option>
        </select>
        <button class="rlzc-btn" :disabled="!pickId" @click="choose">进入</button>
      </div>
    </div>
    <PackDocs v-if="!active && picked?.docs?.length" :pack="picked" />
  </div>
</template>
