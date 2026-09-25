<script setup lang="ts">
/** 副本包资料：子页签 + Markdown/图片。没有资料时什么都不显示（由调用方决定是否渲染）。 */
import { computed, ref, watch } from 'vue';
import { resolveDocImage } from '../packs/loader';
import { renderMarkdown } from './markdown';
import type { Pack } from '../packs/types';

const props = defineProps<{ pack: Pack }>();

const docIdx = ref(0);
watch(
  () => props.pack.id,
  () => (docIdx.value = 0),
);

const doc = computed(() => props.pack.docs?.[docIdx.value]);
const html = computed(() => (doc.value?.md ? renderMarkdown(doc.value.md) : ''));
const img = computed(() => (doc.value?.image ? resolveDocImage(props.pack, doc.value.image) : null));
</script>

<template>
  <section v-if="pack.docs?.length" class="rlzc-docs">
    <div class="rlzc-subtabs">
      <button v-for="(d, i) in pack.docs" :key="i" :class="{ on: docIdx === i }" @click="docIdx = i">{{ d.title }}</button>
    </div>
    <article class="rlzc-md">
      <div v-if="html" v-html="html"></div>
      <img v-if="img" :src="img" :alt="doc?.title" class="rlzc-img" />
      <p v-else-if="doc?.image && !img" class="rlzc-note">图片无法加载：{{ doc.image }}</p>
    </article>
  </section>
</template>
