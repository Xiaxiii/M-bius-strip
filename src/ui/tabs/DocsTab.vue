<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { state } from '../../app';
import { resolveDocImage } from '../../packs/loader';
import { renderMarkdown } from '../markdown';
import type { Pack } from '../../packs/types';

const inDungeon = computed(() => !!state.session && !!state.pack);
/** 不在副本中时可浏览全部包的公开资料 */
const browsable = computed<Pack[]>(() => (inDungeon.value ? [state.pack!] : state.packs.filter((p) => p.docs?.length)));
const packId = ref('');
const docIdx = ref(0);

watch(
  browsable,
  (list) => {
    if (!list.some((p) => p.id === packId.value)) packId.value = list[0]?.id ?? '';
  },
  { immediate: true },
);
watch(packId, () => (docIdx.value = 0));

const pack = computed(() => browsable.value.find((p) => p.id === packId.value));
const doc = computed(() => pack.value?.docs?.[docIdx.value]);
const html = computed(() => (doc.value?.md ? renderMarkdown(doc.value.md) : ''));
const img = computed(() => (pack.value && doc.value?.image ? resolveDocImage(pack.value, doc.value.image) : null));
</script>

<template>
  <div class="rlzc-docs">
    <div v-if="!inDungeon && browsable.length > 1" class="rlzc-row">
      <select v-model="packId" class="rlzc-input">
        <option v-for="p in browsable" :key="p.id" :value="p.id">{{ p.name }}</option>
      </select>
    </div>
    <template v-if="pack && pack.docs?.length">
      <div class="rlzc-subtabs">
        <button v-for="(d, i) in pack.docs" :key="i" :class="{ on: docIdx === i }" @click="docIdx = i">{{ d.title }}</button>
      </div>
      <article class="rlzc-md">
        <div v-if="html" v-html="html"></div>
        <img v-if="img" :src="img" :alt="doc?.title" class="rlzc-img" />
        <p v-else-if="doc?.image && !img" class="rlzc-note">图片无法加载：{{ doc.image }}</p>
      </article>
    </template>
    <p v-else class="rlzc-note">{{ inDungeon ? '本副本没有公开资料' : '暂无可浏览的副本资料。' }}</p>
  </div>
</template>
