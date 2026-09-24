<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';
import { setMemo, state } from '../../app';

const text = ref(state.memo);
const saved = ref(true);
let timer: ReturnType<typeof setTimeout> | undefined;

watch(() => state.memo, (v) => {
  if (v !== text.value) text.value = v;
});
watch(() => state.chatId, () => {
  clearTimeout(timer);
  saved.value = true;
  text.value = state.memo;
});
onBeforeUnmount(() => {
  clearTimeout(timer);
  if (!saved.value) setMemo(text.value);
});

function input() {
  saved.value = false;
  clearTimeout(timer);
  timer = setTimeout(() => {
    setMemo(text.value);
    saved.value = true;
  }, 600);
}
</script>

<template>
  <div class="rlzc-memo">
    <textarea v-model="text" class="rlzc-input rlzc-textarea" placeholder="记点什么……（按聊天保存，不会发给AI）" @input="input"></textarea>
    <div class="rlzc-hint">{{ saved ? '已自动保存' : '保存中…' }}</div>
  </div>
</template>
