<script setup lang="ts">
/** 积分账本页（CLAUDE.md 第三期） */
import { computed } from 'vue';
import { getInitBalance, state } from '../../app';
import { computeBalance, isPendingClearance, KILL_THRESHOLDS } from '../../core/ledger';
import { getChat } from '../../st/context';

const chat = computed(() => getChat());
const initBal = computed(() => getInitBalance(chat.value));
const entries = computed(() => state.ledger);
const balance = computed(() => computeBalance(initBal.value.value, entries.value));
const level = computed(() => state.pack?.level ?? 'D');
const threshold = computed(() => KILL_THRESHOLDS[level.value]);
const pending = computed(() => isPendingClearance(initBal.value.value, entries.value, threshold.value));
const distToKill = computed(() => Math.max(0, threshold.value - balance.value));
const isDefaultInit = computed(() => initBal.value.source === '默认值');

function fmtNum(n: number) {
  return new Intl.NumberFormat('zh-CN').format(n);
}
function fmtDelta(n: number) {
  return (n >= 0 ? '+' : '') + new Intl.NumberFormat('zh-CN').format(n);
}
function fmtTime(at: string) {
  try {
    const d = new Date(at);
    const mo = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${mo}-${day} ${hh}:${mm}`;
  } catch {
    return at;
  }
}
</script>

<template>
  <div class="rlzc-ledger">
    <!-- 英雄卡：余额 → 分隔线 → 等级 / 斩杀线 / 待清算 -->
    <div class="rlzc-card rlzc-ledger-hero-card">
      <span class="rlzc-ledger-hero-label">当前积分</span>
      <b class="rlzc-ledger-hero-num" :class="{ negative: balance < 0 }">{{ fmtNum(balance) }}</b>
      <div class="rlzc-ledger-hero-divider" />
      <div class="rlzc-ledger-hero-cols">
        <div class="rlzc-ledger-hero-col">
          <span class="rlzc-ledger-hero-col-label">等级</span>
          <span class="rlzc-ledger-hero-col-val">{{ level }}</span>
        </div>
        <div class="rlzc-ledger-hero-col">
          <span class="rlzc-ledger-hero-col-label">斩杀线</span>
          <span class="rlzc-ledger-hero-col-val">{{ fmtNum(threshold) }}</span>
        </div>
        <div class="rlzc-ledger-hero-col">
          <span class="rlzc-ledger-hero-col-label">待清算</span>
          <span class="rlzc-ledger-hero-col-val" :class="{ 'rlzc-ledger-warn': pending }">
            {{ pending ? `距线 ${fmtNum(distToKill)}` : '无' }}
          </span>
        </div>
      </div>
      <p v-if="isDefaultInit" class="rlzc-ledger-init-hint">初始积分按 1000 计，可在调试页修改</p>
    </div>

    <!-- 流水 -->
    <div class="rlzc-card">
      <h4>流水</h4>
      <template v-if="entries.length">
        <ul class="rlzc-ledger-list">
          <li
            v-for="e in [...entries].reverse()"
            :key="`${e.mesIndex}-${e.delta}-${e.at}`"
            class="rlzc-ledger-item"
          >
            <div class="rlzc-ledger-item-left">
              <span class="rlzc-ledger-item-src">{{ e.source }}</span>
              <span class="rlzc-ledger-item-time">{{ fmtTime(e.at) }}</span>
            </div>
            <span
              class="rlzc-ledger-item-delta"
              :class="e.delta >= 0 ? 'pos' : 'neg'"
            >{{ fmtDelta(e.delta) }}</span>
          </li>
        </ul>
      </template>
      <p v-else class="rlzc-hint">还没有收支记录。</p>
    </div>
  </div>
</template>
