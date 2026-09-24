<script setup lang="ts">
import { state } from '../app';
import FloatBall from './FloatBall.vue';
import Panel from './Panel.vue';
</script>

<template>
  <FloatBall v-if="state.settings.showBall" />
  <Panel v-if="state.panelOpen" />
</template>
