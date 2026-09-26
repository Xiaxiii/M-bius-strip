<script setup lang="ts">
/** 积分摘要，供系统页回廊卡片和副本进行中卡片复用 */
import { computed } from 'vue';
import { getInitBalance, state } from '../app';
import { computeBalance, isPendingClearance, KILL_THRESHOLDS } from '../core/ledger';
import { getChat } from '../st/context';

const chat = computed(() => getChat());
const initBal = computed(() => getInitBalance(chat.value));
const balance = computed(() => computeBalance(initBal.value.value, state.ledger));
const level = computed(() => state.pack?.level ?? 'D');
const threshold = computed(() => KILL_THRESHOLDS[level.value]);
const pending = computed(() => isPendingClearance(initBal.value.value, state.ledger, threshold.value));
const hasData = computed(() => state.ledger.length > 0 || initBal.value.source !== '默认值');
</script>

<template>
  <div v-if="hasData" class="rlzc-ledger-summary">
    <span class="rlzc-ledger-sum-bal" :class="{ negative: balance < 0 }">积分 {{ balance >= 0 ? '+' : '' }}{{ balance }}</span>
    <span v-if="pending" class="rlzc-ledger-sum-pending">待清算</span>
  </div>
</template>
