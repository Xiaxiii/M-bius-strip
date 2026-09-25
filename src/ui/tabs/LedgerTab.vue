<script setup lang="ts">
/** 积分账本页（CLAUDE.md 第三期） */
import { computed } from 'vue';
import { deleteLedgerEntry, state } from '../../app';
import { computeBalance, formatEntry } from '../../core/ledger';
import { confirmBox } from '../../st/context';

const entries = computed(() => state.ledger);
const balance = computed(() => computeBalance(entries.value));

async function remove(mesIndex: number) {
  if (!(await confirmBox('确定撤销这条流水记录吗？'))) return;
  deleteLedgerEntry(mesIndex);
}
</script>

<template>
  <div class="rlzc-ledger">
    <div class="rlzc-card rlzc-ledger-hero">
      <span class="rlzc-ledger-label">当前积分</span>
      <b class="rlzc-ledger-balance" :class="{ negative: balance < 0 }">{{ balance >= 0 ? '+' : '' }}{{ balance }}</b>
    </div>

    <div class="rlzc-card">
      <h4>流水记录</h4>
      <template v-if="entries.length">
        <ul class="rlzc-ledger-list">
          <li v-for="e in [...entries].reverse()" :key="`${e.mesIndex}-${e.delta}`" class="rlzc-ledger-item">
            <span class="rlzc-ledger-entry">{{ formatEntry(e) }}</span>
            <button class="rlzc-btn ghost small" aria-label="撤销" @click="remove(e.mesIndex)">撤销</button>
          </li>
        </ul>
      </template>
      <p v-else class="rlzc-hint">暂无流水记录。AI 输出 <code>&lt;积分变动&gt;+300（说明）&lt;/积分变动&gt;</code> 时自动追加。</p>
    </div>
  </div>
</template>
