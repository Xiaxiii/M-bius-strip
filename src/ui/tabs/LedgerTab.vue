<script setup lang="ts">
/** 积分账本页（CLAUDE.md 第三期） */
import { computed } from 'vue';
import { getInitBalance, state } from '../../app';
import { computeBalance, formatEntry, isPendingClearance, KILL_THRESHOLDS } from '../../core/ledger';
import { getChat } from '../../st/context';

const chat = computed(() => getChat());
const initBal = computed(() => getInitBalance(chat.value));
const entries = computed(() => state.ledger);
const balance = computed(() => computeBalance(initBal.value.value, entries.value));
const level = computed(() => state.pack?.level ?? 'D');
const threshold = computed(() => KILL_THRESHOLDS[level.value]);
const pending = computed(() => isPendingClearance(initBal.value.value, entries.value, threshold.value));
</script>

<template>
  <div class="rlzc-ledger">
    <div class="rlzc-card rlzc-ledger-hero">
      <span class="rlzc-ledger-label">当前积分</span>
      <b class="rlzc-ledger-balance" :class="{ negative: balance < 0 }">{{ balance >= 0 ? '+' : '' }}{{ balance }}</b>
      <div class="rlzc-ledger-meta">
        <span>{{ level }} 级　斩杀线 {{ threshold }}</span>
        <span v-if="pending" class="rlzc-ledger-pending">待清算　距斩杀线 {{ Math.max(0, threshold - balance) }} 分</span>
        <span v-else class="rlzc-ledger-ok">无待清算</span>
      </div>
    </div>

    <div class="rlzc-card">
      <h4>流水记录</h4>
      <template v-if="entries.length">
        <ul class="rlzc-ledger-list">
          <li v-for="e in [...entries].reverse()" :key="`${e.mesIndex}-${e.delta}-${e.at}`"
              class="rlzc-ledger-item" :class="e.delta >= 0 ? 'positive' : 'neg'">
            {{ formatEntry(e) }}
          </li>
        </ul>
      </template>
      <p v-else class="rlzc-hint">还没有收支记录。</p>
    </div>
  </div>
</template>
