<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { abandonSession, currentRoles, debugRemoveAction, debugSetPhase, debugSetRoles, debugSetRound, state } from '../../app';
import { getChat } from '../../st/context';
import type { Snapshot } from '../../packs/types';
import { formatState, latestSubState } from '../../core/subapi';

const editable = computed(() => state.settings.debug);
const phaseSel = ref('');
const roundInput = ref<number | null>(null);
const roles = reactive<Record<string, string>>({});

watch(
  () => [state.tick, state.pack?.id],
  () => {
    for (const k of Object.keys(roles)) delete roles[k];
    const cur = currentRoles() ?? {};
    for (const r of state.pack?.roles ?? []) roles[r] = cur[r] ?? '';
  },
  { immediate: true },
);

const snapshots = computed(() => {
  void state.tick;
  const chat = getChat();
  const rows: { index: number; snap: Snapshot }[] = [];
  const start = state.session?.entryIndex ?? 0;
  for (let i = start; i < chat.length; i++) {
    const s = chat[i]?.extra?.rlzc;
    if (s) rows.push({ index: i, snap: s });
  }
  return rows.reverse().slice(0, 60);
});

/** 有时限警告的楼层，快照表里标黄 */
/** 时限不符、副API判定事件没写出来的楼层，快照表里标黄 */
const limitWarned = computed(
  () => new Set((state.audit?.warnings ?? []).filter((w) => w.kind === 'limit' || w.kind === 'eventMissed').map((w) => w.index)),
);

/** 副API：当前隐藏状态与最近一次整理记录 */
const subView = computed(() => {
  void state.tick;
  if (!state.session || !state.pack || !state.progress) return null;
  const chat = getChat();
  const latest = latestSubState(chat, state.progress.entryIndex);
  let record = null as Snapshot['sub'] | null;
  for (let i = chat.length - 1; i >= state.progress.entryIndex; i--) {
    const r = chat[i]?.extra?.rlzc?.sub;
    if (r) {
      record = r;
      break;
    }
  }
  return {
    text: latest ? formatState(state.pack, latest.state) : '',
    state: latest?.state ?? null,
    record,
  };
});

const MARK = { done: '✓', missed: '✗', void: '–' } as const;
function subCell(snap: Snapshot): string {
  if (!snap.sub && !snap.skippedEvents?.length) return '';
  const parts: string[] = [];
  if (snap.sub?.skipped) parts.push(`未更新（${snap.sub.error ?? ''}）`);
  for (const e of snap.sub?.events ?? []) parts.push(`${e.id}${MARK[e.status]}`);
  for (const k of snap.skippedEvents ?? []) parts.push(`跳过${k.id}`);
  if (snap.sub && !snap.sub.skipped && !parts.length) parts.push('已整理');
  return parts.join(' ');
}

const progressView = computed(() => {
  const p = state.progress;
  if (!p) return null;
  const { perMessage, phase, next, ...rest } = p;
  return {
    phase: phase.id + ' ' + phase.name,
    ...rest,
    next: next ? { round: next.round, skipFrom: next.skipFrom, events: next.events.map((e) => e.id) } : null,
    messages: Object.keys(perMessage).length,
  };
});

function applyPhase() {
  if (phaseSel.value) debugSetPhase(phaseSel.value);
}
function applyRound() {
  if (roundInput.value !== null && roundInput.value >= 0) debugSetRound(roundInput.value);
}
function saveRoles() {
  debugSetRoles({ ...roles });
}
const json = (v: unknown) => JSON.stringify(v, null, 2);
</script>

<template>
  <div class="rlzc-debug">
    <p v-if="!state.session" class="rlzc-note">当前聊天没有副本会话。</p>
    <template v-else>
      <p v-if="!editable" class="rlzc-note">只读。要手动修改，请先在「设置」里打开调试模式。</p>
      <p v-if="state.pack && state.session.packVersion !== state.pack.version" class="rlzc-note">
        入场时副本包版本为 {{ state.session.packVersion }}，当前为 {{ state.pack.version }}。
      </p>

      <div v-if="state.pack?.phases.length" class="rlzc-card">
        <h4>手动修正</h4>
        <div class="rlzc-row">
          <select v-model="phaseSel" class="rlzc-input" :disabled="!editable">
            <option value="">切换到阶段…</option>
            <option v-for="ph in state.pack.phases" :key="ph.id" :value="ph.id">{{ ph.name }}</option>
          </select>
          <button class="rlzc-btn small" :disabled="!editable || !phaseSel" @click="applyPhase">切换</button>
        </div>
        <div class="rlzc-row">
          <input v-model.number="roundInput" type="number" min="0" class="rlzc-input" placeholder="本阶段已完成的轮数" :disabled="!editable" />
          <button class="rlzc-btn small" :disabled="!editable || roundInput === null" @click="applyRound">修正轮次</button>
        </div>
      </div>

      <div v-if="state.pack?.roles?.length" class="rlzc-card">
        <h4>角色登记</h4>
        <label v-for="r in state.pack.roles" :key="r" class="rlzc-field">
          <span>{{ r }}</span><input v-model="roles[r]" class="rlzc-input" :disabled="!editable" placeholder="未登记" />
        </label>
        <button class="rlzc-btn small" :disabled="!editable" @click="saveRoles">保存登记</button>
      </div>

      <div class="rlzc-card">
        <h4>&lt;副本&gt; 核对</h4>
        <p v-if="!state.audit?.warnings.length" class="rlzc-hint">没有发现问题。</p>
        <template v-else>
          <p class="rlzc-hint">共 {{ state.audit.warnings.length }} 条，显示最近 30 条。只作提示，不会改动消息。</p>
          <ul class="rlzc-list rlzc-warns">
            <li v-for="(w, i) in state.audit.warnings.slice(-30).reverse()" :key="i">
              <span><small>#{{ w.index }}｜{{ w.phase }}第{{ w.round }}轮</small><br />⚠️ {{ w.text }}</span>
            </li>
          </ul>
        </template>
      </div>

      <div class="rlzc-card">
        <h4>手动操作记录</h4>
        <ul v-if="state.session.manual.length" class="rlzc-list">
          <li v-for="(a, i) in state.session.manual" :key="i">
            <code>#{{ a.atIndex }} {{ a.kind }} {{ 'phase' in a ? a.phase : '' }}{{ 'round' in a ? a.round : '' }}{{ 'targetPhase' in a ? `${a.targetPhase}:${a.targetRound}` : '' }}</code>
            <button class="rlzc-btn ghost small" :disabled="!editable" @click="debugRemoveAction(i)">撤销</button>
          </li>
        </ul>
        <p v-else class="rlzc-hint">无</p>
      </div>

      <details v-if="subView && (subView.state || subView.record)" class="rlzc-card">
        <summary>副本事件检测：副本状态与最近一次检测</summary>
        <pre class="rlzc-pre">{{ subView.text || '（尚无状态）' }}</pre>
        <pre v-if="subView.record" class="rlzc-pre">{{ json(subView.record) }}</pre>
        <p class="rlzc-hint">✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入</p>
      </details>

      <details class="rlzc-card" open>
        <summary>本次注入</summary>
        <pre class="rlzc-pre">{{ [state.lastInjection.token, state.lastInjection.progress, state.lastInjection.turn].filter(Boolean).join('\n\n') || '（尚未生成）' }}</pre>
      </details>
      <details class="rlzc-card">
        <summary>重放结果</summary>
        <pre class="rlzc-pre">{{ json(progressView) }}</pre>
      </details>
      <details class="rlzc-card">
        <summary>会话原始数据</summary>
        <pre class="rlzc-pre">{{ json(state.session) }}</pre>
      </details>
      <details class="rlzc-card">
        <summary>每楼快照（最近60条）</summary>
        <table class="rlzc-table">
          <thead><tr><th>楼</th><th>阶段</th><th>轮</th><th>钟时</th><th>时限</th><th>事件</th><th>检测</th></tr></thead>
          <tbody>
            <tr v-for="row in snapshots" :key="row.index" :class="{ 'rlzc-row-warn': limitWarned.has(row.index) }">
              <td>{{ row.index }}{{ row.snap.entry ? '★' : '' }}</td>
              <td>{{ row.snap.phase }}</td>
              <td>{{ row.snap.round }}</td>
              <td>{{ row.snap.clock ?? '' }}</td>
              <td>{{ row.snap.limit?.text ?? '' }}</td>
              <td>{{ row.snap.injected.join(' ') }}</td>
              <td>{{ subCell(row.snap) }}</td>
            </tr>
          </tbody>
        </table>
      </details>
      <button class="rlzc-btn ghost" :disabled="!editable" @click="abandonSession">删除副本会话</button>
    </template>
  </div>
</template>
