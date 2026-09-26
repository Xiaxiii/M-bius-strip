<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { saveSettings, state } from '../app';

const SIZE = 44;
const pos = ref({ x: 0, y: 0 });
let drag: { id: number; dx: number; dy: number; moved: boolean; sx: number; sy: number } | null = null;

function clamp(x: number, y: number) {
  const maxX = window.innerWidth - SIZE - 4;
  const maxY = window.innerHeight - SIZE - 4;
  return { x: Math.min(Math.max(4, x), maxX), y: Math.min(Math.max(4, y), maxY) };
}

function place() {
  const b = state.settings.ball;
  pos.value = clamp(b.x ?? window.innerWidth - SIZE - 12, b.y ?? Math.round(window.innerHeight * 0.35));
}

function down(e: PointerEvent) {
  (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  drag = { id: e.pointerId, dx: e.clientX - pos.value.x, dy: e.clientY - pos.value.y, moved: false, sx: e.clientX, sy: e.clientY };
}
function move(e: PointerEvent) {
  if (!drag || drag.id !== e.pointerId) return;
  if (Math.abs(e.clientX - drag.sx) + Math.abs(e.clientY - drag.sy) > 6) drag.moved = true;
  if (drag.moved) pos.value = clamp(e.clientX - drag.dx, e.clientY - drag.dy);
}
function up(e: PointerEvent) {
  if (!drag || drag.id !== e.pointerId) return;
  const moved = drag.moved;
  drag = null;
  if (moved) {
    state.settings.ball = { x: Math.round(pos.value.x), y: Math.round(pos.value.y) };
    saveSettings();
  } else {
    state.panelOpen = !state.panelOpen;
  }
}

const active = computed(() => !!state.session && !state.progress?.ended);
const warn = computed(() => !!state.progress?.warn);

watch(() => state.settings.ball, place, { deep: true });

onMounted(() => {
  place();
  window.addEventListener('resize', place);
});
onBeforeUnmount(() => window.removeEventListener('resize', place));
</script>

<template>
  <button
    class="rlzc-ball"
    :class="{ 'is-active': active, 'is-warn': warn }"
    :style="{ left: pos.x + 'px', top: pos.y + 'px' }"
    title="回廊种菜系统（可拖动）"
    @pointerdown="down"
    @pointermove="move"
    @pointerup="up"
    @pointercancel="up"
  >
    <span class="rlzc-ball-mark">{{ active ? state.pack?.level ?? '副' : '廊' }}</span>
    <span v-if="state.market.pending > 0" class="rlzc-ball-badge" title="待开奖赌票">{{ state.market.pending }}</span>
  </button>
</template>
