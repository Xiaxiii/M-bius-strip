<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { abandonSession, currentRoles, debugRemoveAction, debugSetPhase, debugSetRoles, debugSetRound, saveSettings, state } from '../../app';
import type { Snapshot } from '../../packs/types';
import { getChat } from '../../st/context';
import { formatState, latestSubState } from '../../core/subapi';
import { liveOf, type LiveRecord } from '../../core/liveFlow';

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

/** 时限不符、副API判定事件没写出来、积分核对不符的楼层，快照表里标黄 */
const limitWarned = computed(() => {
  const set = new Set((state.audit?.warnings ?? []).filter((w) => w.kind === 'limit' || w.kind === 'eventMissed').map((w) => w.index));
  const chat = getChat();
  const start = state.session?.entryIndex ?? 0;
  for (let i = start; i < chat.length; i++) {
    if (chat[i]?.extra?.rlzc?.ledgerMismatch) set.add(i);
  }
  return set;
});

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

/** 直播：每楼的精彩度、热度、人数、打赏明细、AI 弹幕结果（最近60楼） */
const liveRows = computed(() => {
  void state.tick;
  const chat = getChat();
  const rows: { index: number; rec: LiveRecord }[] = [];
  for (let i = chat.length - 1; i >= 0 && rows.length < 60; i--) {
    const rec = liveOf(chat[i]);
    if (rec) rows.push({ index: i, rec });
  }
  return rows;
});

function tipCell(rec: LiveRecord): string {
  const parts = rec.feed.filter((f) => f.t === 'tip').map((f) => `${f.name} ${f.amount}→${f.net}`);
  if (rec.revoke) parts.push(`撤回 −${rec.revoke}`);
  return parts.join('；');
}

function aiCell(rec: LiveRecord): string {
  const ai = rec.ai;
  if (!ai) return '';
  if (ai.pending) return '生成中…';
  return ai.ok ? `${ai.count}条（${ai.ms}ms）` : `失败：${ai.error ?? ''}`;
}

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

function toggleCard(key: keyof typeof state.settings.cardCollapsed) {
  state.settings.cardCollapsed[key] = !state.settings.cardCollapsed[key];
  saveSettings();
}
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

      <div v-if="state.pack?.roles?.length" class="rlzc-card rlzc-collapsible">
        <button
          class="rlzc-collapse-head"
          :aria-expanded="!state.settings.cardCollapsed.rolesDebug"
          @click="toggleCard('rolesDebug')"
        >
          <h4>角色登记</h4>
          <span class="rlzc-collapse-arrow" :class="{ open: !state.settings.cardCollapsed.rolesDebug }">▸</span>
        </button>
        <div v-if="!state.settings.cardCollapsed.rolesDebug" class="rlzc-collapse-body">
          <label v-for="r in state.pack.roles" :key="r" class="rlzc-field">
            <span>{{ r }}</span><input v-model="roles[r]" class="rlzc-input" :disabled="!editable" placeholder="未登记" />
          </label>
          <button class="rlzc-btn small" :disabled="!editable" @click="saveRoles">保存登记</button>
        </div>
      </div>

      <div class="rlzc-card rlzc-collapsible">
        <button
          class="rlzc-collapse-head"
          :aria-expanded="!state.settings.cardCollapsed.auditDebug"
          @click="toggleCard('auditDebug')"
        >
          <h4>&lt;副本&gt; 核对</h4>
          <span v-if="state.settings.cardCollapsed.auditDebug" class="rlzc-collapse-status">{{ state.audit?.warnings.length ? '⚠️' : '无' }}</span>
          <span class="rlzc-collapse-arrow" :class="{ open: !state.settings.cardCollapsed.auditDebug }">▸</span>
        </button>
        <div v-if="!state.settings.cardCollapsed.auditDebug" class="rlzc-collapse-body">
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
      </div>

      <div class="rlzc-card rlzc-collapsible">
        <button
          class="rlzc-collapse-head"
          :aria-expanded="!state.settings.cardCollapsed.manualDebug"
          @click="toggleCard('manualDebug')"
        >
          <h4>手动操作记录</h4>
          <span v-if="state.settings.cardCollapsed.manualDebug && state.session.manual.length" class="rlzc-collapse-status">×{{ state.session.manual.length }}</span>
          <span class="rlzc-collapse-arrow" :class="{ open: !state.settings.cardCollapsed.manualDebug }">▸</span>
        </button>
        <div v-if="!state.settings.cardCollapsed.manualDebug" class="rlzc-collapse-body">
          <ul v-if="state.session.manual.length" class="rlzc-list">
            <li v-for="(a, i) in state.session.manual" :key="i">
              <code>#{{ a.atIndex }} {{ a.kind }} {{ 'phase' in a ? a.phase : '' }}{{ 'round' in a ? a.round : '' }}{{ 'targetPhase' in a ? `${a.targetPhase}:${a.targetRound}` : '' }}</code>
              <button class="rlzc-btn ghost small" :disabled="!editable" @click="debugRemoveAction(i)">撤销</button>
            </li>
          </ul>
          <p v-else class="rlzc-hint">无</p>
        </div>
      </div>

      <details v-if="subView && (subView.state || subView.record)" class="rlzc-card">
        <summary>副本事件检测：副本状态与最近一次检测</summary>
        <pre class="rlzc-pre">{{ subView.text || '（尚无状态）' }}</pre>
        <pre v-if="subView.record" class="rlzc-pre">{{ json(subView.record) }}</pre>
        <p class="rlzc-hint">✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入</p>
      </details>

      <div class="rlzc-card rlzc-collapsible">
        <button
          class="rlzc-collapse-head"
          :aria-expanded="!state.settings.cardCollapsed.injectionDebug"
          @click="toggleCard('injectionDebug')"
        >
          <h4>本次注入</h4>
          <span class="rlzc-collapse-arrow" :class="{ open: !state.settings.cardCollapsed.injectionDebug }">▸</span>
        </button>
        <div v-if="!state.settings.cardCollapsed.injectionDebug" class="rlzc-collapse-body">
          <pre class="rlzc-pre">{{ [state.lastInjection.token, state.lastInjection.progress, state.lastInjection.turn].filter(Boolean).join('\n\n') || '（尚未生成）' }}</pre>
        </div>
      </div>
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
              <td v-if="row.snap.ledgerMismatch" class="rlzc-warn-text">状态栏 {{ row.snap.ledgerMismatch.status }} / 账本 {{ row.snap.ledgerMismatch.ledger }}</td>
              <td v-else></td>
            </tr>
          </tbody>
        </table>
      </details>
      <button class="rlzc-btn ghost" :disabled="!editable" @click="abandonSession">删除副本会话</button>
    </template>

    <details v-if="liveRows.length" class="rlzc-card">
      <summary>直播（每楼，最近60条）</summary>
      <table class="rlzc-table">
        <thead><tr><th>楼</th><th>精彩度</th><th>热度</th><th>人数</th><th>打赏</th><th>AI弹幕</th></tr></thead>
        <tbody>
          <tr v-for="row in liveRows" :key="row.index" :class="{ 'rlzc-row-warn': row.rec.ai && !row.rec.ai.ok && !row.rec.ai.pending }">
            <td>{{ row.index }}{{ row.rec.scope === 'corridor' ? '·回廊' : '' }}</td>
            <td>{{ row.rec.hype }}{{ row.rec.hurt ? '·伤' : '' }}</td>
            <td>{{ row.rec.heat }}</td>
            <td>{{ row.rec.viewers }}</td>
            <td>{{ tipCell(row.rec) }}</td>
            <td>{{ aiCell(row.rec) }}</td>
          </tr>
        </tbody>
      </table>
    </details>
  </div>
</template>
