<script setup lang="ts">
/** 积分账本页（CLAUDE.md 第三期） */
import { computed } from 'vue';
import { getInitBalance, playerLevel, state } from '../../app';
import { computeBalance, isPendingClearance, KILL_THRESHOLDS, runningBalances } from '../../core/ledger';
import { getChat } from '../../st/context';

const chat = computed(() => getChat());
const initBal = computed(() => getInitBalance(chat.value));
const entries = computed(() => state.ledger);
const balance = computed(() => computeBalance(initBal.value.value, entries.value));
/** 流水按时间倒序显示，每一笔带上记完之后的余额 */
const rows = computed(() => {
  const after = runningBalances(initBal.value.value, entries.value);
  return entries.value.map((e, k) => ({ e, after: after[k] })).reverse();
});
// 玩家等级（校正或状态栏），不是副本等级
const level = computed(() => {
  void state.tick;
  return playerLevel(chat.value);
});
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
      <p v-if="isDefaultInit" class="rlzc-ledger-init-hint">初始积分按 1000 计，可在设置页修改</p>
    </div>

    <!-- 流水 -->
    <div class="rlzc-card">
      <h4>流水</h4>
      <template v-if="entries.length">
        <ul class="rlzc-ledger-list">
          <li
            v-for="(r, k) in rows"
            :key="`${k}-${r.e.mesIndex}-${r.e.delta}-${r.e.at}`"
            class="rlzc-ledger-item"
          >
            <div class="rlzc-ledger-item-left">
              <span class="rlzc-ledger-item-src">{{ r.e.source }}</span>
              <span class="rlzc-ledger-item-time">{{ fmtTime(r.e.at) }}</span>
            </div>
            <div class="rlzc-ledger-item-right">
              <span
                class="rlzc-ledger-item-delta"
                :class="r.e.delta >= 0 ? 'pos' : 'neg'"
              >{{ fmtDelta(r.e.delta) }}</span>
              <span class="rlzc-ledger-item-after">余额 {{ fmtNum(r.after) }}</span>
            </div>
          </li>
        </ul>
      </template>
      <p v-else class="rlzc-hint">还没有收支记录。</p>
    </div>
  </div>
</template>
