<script setup lang="ts">
/** 入场提示小卡片：右上角，不遮罩、不挡操作、不自动消失 */
import { computed } from 'vue';
import { declineEntryCard, dismissEntryCard, enterEntryCard, setEntryCardLive, state } from '../app';
import { INF_PATH } from './icons';

const card = computed(() => state.entryCard);
</script>

<template>
  <Transition name="rlzc-entry-fade" mode="out-in">
    <div v-if="card" :key="card.id" class="rlzc-entry-card" :class="{ 'beside-panel': state.panelOpen }" role="dialog" aria-label="检测到副本">
      <button class="rlzc-entry-close" type="button" aria-label="关闭" title="这次先不处理" @click="dismissEntryCard">✕</button>
      <div class="rlzc-entry-kicker">
        <svg class="rlzc-entry-inf" viewBox="0 0 32 32" aria-hidden="true"><path :d="INF_PATH" /></svg>
        <span>检测到副本</span>
      </div>
      <div class="rlzc-entry-title">
        <span class="rlzc-entry-level">{{ card.level }}</span>
        <span class="rlzc-entry-name">{{ card.name }}</span>
      </div>
      <div v-if="card.unknown" class="rlzc-entry-note">未收录，将使用通用副本包</div>
      <div class="rlzc-entry-foot">
        <button
          v-if="card.liveShow"
          type="button"
          class="rlzc-entry-live"
          :class="{ on: card.live }"
          role="switch"
          :aria-checked="card.live"
          @click="setEntryCardLive(!card.live)"
        >
          <span class="rlzc-toggle danger" :class="{ on: card.live }"><span></span></span>
          <span>直播</span>
        </button>
        <span v-else></span>
        <div class="rlzc-entry-actions">
          <button type="button" class="rlzc-btn ghost" @click="declineEntryCard">不是</button>
          <button type="button" class="rlzc-btn rlzc-entry-go" @click="enterEntryCard">进入</button>
        </div>
      </div>
    </div>
  </Transition>
</template>
