<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { isOnAir, saveSettings, state } from '../app';
import { INF_PATH } from './icons';

const SIZE = 48;
const pos = ref({ x: 0, y: 0 });
let drag: { id: number; dx: number; dy: number; moved: boolean; sx: number; sy: number } | null = null;
/** 刚拖动过：这次松手后的 click 不开关面板 */
let dragged = false;

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
  dragged = false;
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
    dragged = true;
    state.settings.ball = { x: Math.round(pos.value.x), y: Math.round(pos.value.y) };
    saveSettings();
  }
}
/**
 * 开关面板放在 click 里，不放在松手时：手机上松手后浏览器还会在同一位置补发一次 click，
 * 松手时就打开面板的话，这次 click 会落到刚出现的面板上（误点到右上角的 ✕ 等）。
 */
function toggle() {
  if (dragged) {
    dragged = false;
    return;
  }
  state.panelOpen = !state.panelOpen;
}

const active = computed(() => !!state.session && !!state.progress && !state.progress.ended);
const warn = computed(() => active.value && !!state.progress?.warn);
/** 进度环：当前阶段已完成轮数 / 阶段上限；没有阶段上限时不画 */
const ring = computed(() => {
  const p = state.progress;
  if (!active.value || !p || !state.pack?.phases.length || !(p.phase.cap > 0)) return null;
  return Math.min(100, Math.max(0, (p.round / p.phase.cap) * 100));
});
const onAir = computed(() => {
  void state.tick;
  void state.session;
  return isOnAir();
});

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
    :class="{ 'is-active': active, 'is-warn': warn, 'has-ring': ring !== null }"
    :style="{ left: pos.x + 'px', top: pos.y + 'px' }"
    title="回廊种菜系统（可拖动）"
    @pointerdown="down"
    @pointermove="move"
    @pointerup="up"
    @pointercancel="up"
    @click="toggle"
  >
    <svg v-if="ring !== null" class="rlzc-ball-ring" viewBox="0 0 48 48" aria-hidden="true">
      <circle class="rlzc-ball-ring-base" cx="24" cy="24" r="22.5" />
      <circle v-if="ring > 0" class="rlzc-ball-ring-bar" cx="24" cy="24" r="22.5" pathLength="100" :stroke-dasharray="`${ring} 100`" />
    </svg>
    <svg class="rlzc-ball-inf" viewBox="0 0 32 32" aria-hidden="true"><path :d="INF_PATH" /></svg>
    <span v-if="onAir" class="rlzc-ball-live" title="直播中"></span>
    <span v-if="state.market.pending > 0" class="rlzc-ball-badge" title="待开奖赌票">{{ state.market.pending }}</span>
  </button>
</template>
