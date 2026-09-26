<script setup lang="ts">
/** 黑市页（第四期）：盘口 / 票夹 / 赌坊 */
import { computed, onBeforeUnmount, ref } from 'vue';
import { accountLevel, casinoStakeCheck, marketStakeCheck, placeBet, playTable, state, type MarketTicketView } from '../../app';
import type { Market } from '../../core/market';
import { payoutOf } from '../../core/market';
import { tableOf, type CasinoOutcome } from '../../core/casino';
import { toast } from '../../st/context';

type Sub = 'book' | 'tickets' | 'casino';
const sub = ref<Sub>('book');

const fmt = (n: number) => new Intl.NumberFormat('en-US').format(n);
const odds = (n: number) => `×${n.toFixed(2)}`;

const pendingCount = computed(() => state.market.pending);
const level = computed(() => {
  void state.tick;
  return accountLevel();
});

// ───────────── 盘口 ─────────────

const book = computed(() => state.market.book);
const closed = computed(() => !!book.value?.closedAt);
const statusLine = computed(() => {
  const b = book.value;
  if (b) return b.closedAt ? `《${b.packName}》已封盘` : `《${b.packName}》开盘中 · 第1轮结束封盘`;
  if (state.session?.status === 'active' && state.pack?.rest) return '休整副本不开盘。';
  return '进副本后开盘。';
});

const TAG: Record<Market['kind'], string> = { ending: '结局', rating: '评价', event: '事件', freak: '庄家' };

/** 每个盘口选中的选项与输入的押注 */
const picked = ref<Record<string, string>>({});
const stakes = ref<Record<string, number | null>>({});

function pick(m: Market, optionId: string) {
  if (closed.value || state.market.results[m.id]) return;
  picked.value = { ...picked.value, [m.id]: picked.value[m.id] === optionId ? '' : optionId };
}

function stakeCheck(m: Market) {
  void state.tick;
  const v = stakes.value[m.id];
  return marketStakeCheck(m.id, typeof v === 'number' ? v : 0);
}

function bet(m: Market) {
  const option = picked.value[m.id];
  const v = stakes.value[m.id];
  if (!option || typeof v !== 'number') return;
  const err = placeBet(m.id, option, v);
  if (err) {
    toast('warning', err);
    return;
  }
  stakes.value = { ...stakes.value, [m.id]: null };
  picked.value = { ...picked.value, [m.id]: '' };
}

function ticketsOf(m: Market): MarketTicketView[] {
  const b = book.value;
  if (!b) return [];
  return state.market.tickets.filter((t) => t.book.session === b.session && t.ticket.market === m.id);
}

// ───────────── 票夹 ─────────────

function optionLabel(v: MarketTicketView): string {
  return v.market?.options.find((o) => o.id === v.ticket.option)?.label ?? v.ticket.option;
}

function ticketTitle(v: MarketTicketView): string {
  return `${v.book.packName} · ${v.market?.q ?? v.ticket.market} · ${optionLabel(v)}`;
}

function ticketLine(v: MarketTicketView): string {
  const t = v.ticket;
  const s = v.res?.stamp;
  if (!s) return `押 ${fmt(t.stake)} · ${odds(t.odds)} · 待开奖`;
  if (s === 'win') return `押 ${fmt(t.stake)} · ${odds(t.odds)} · 兑 ${fmt(payoutOf(t.stake, t.odds))}`;
  if (s === 'lose') return `押 ${fmt(t.stake)} · ${odds(t.odds)}`;
  return `押 ${fmt(t.stake)} · 原数退还`;
}

const STAMP = { win: '兑', lose: '废', refund: '退' } as const;

// ───────────── 赌坊 ─────────────

const tables = computed(() => state.market.tables.map((id) => tableOf(id)).filter((t) => !!t));
const tableId = ref('');
const table = computed(() => (tableId.value ? tableOf(tableId.value) : undefined));
const betId = ref('');
const casinoStake = ref<number | null>(null);
const rolling = ref(false);
const face = ref('');
const outcome = ref<(CasinoOutcome & { stake: number }) | null>(null);
let timer: ReturnType<typeof setInterval> | null = null;

function openTable(id: string) {
  if (tableId.value === id) {
    tableId.value = '';
    return;
  }
  tableId.value = id;
  const t = tableOf(id);
  betId.value = t && t.bets.length === 1 ? t.bets[0].id : '';
  outcome.value = null;
}

/** 分段按钮（单双大小、段号、签）与数字网格 */
const segBets = computed(() => (table.value?.bets ?? []).filter((b) => !/^[nd]\d+$/.test(b.id)));
const gridBets = computed(() => (table.value?.bets ?? []).filter((b) => /^[nd]\d+$/.test(b.id)));

const casinoCheck = computed(() => {
  void state.tick;
  return casinoStakeCheck(typeof casinoStake.value === 'number' ? casinoStake.value : 0);
});

function reducedMotion(): boolean {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

function faceText(id: string, n: number[]): string {
  if (id === 'bell') return `${n[0]}下`;
  if (id === 'door') return `${n[0]}号门`;
  if (id === 'lot') return `第${n[0]}支`;
  return `${n[0]} : ${n[1]}`;
}

function play() {
  const t = table.value;
  const v = casinoStake.value;
  if (!t || !betId.value || typeof v !== 'number' || rolling.value) return;
  const r = playTable(t.id, betId.value, v);
  if (r.error || !r.outcome) {
    toast('warning', r.error ?? '不能下注');
    return;
  }
  const res = { ...r.outcome, stake: v };
  outcome.value = null;
  if (reducedMotion()) {
    face.value = faceText(t.id, res.faces);
    outcome.value = res;
    return;
  }
  // 不超过1.5秒的简单动画：随机翻动，然后停在结果上
  rolling.value = true;
  const max = t.id === 'bell' ? 12 : t.id === 'door' ? 20 : t.id === 'lot' ? 3 : 13;
  const rnd = () => 1 + Math.floor(Math.random() * max);
  timer = setInterval(() => (face.value = faceText(t.id, [rnd(), rnd()])), 80);
  setTimeout(() => {
    if (timer) clearInterval(timer);
    timer = null;
    face.value = faceText(t.id, res.faces);
    rolling.value = false;
    outcome.value = res;
  }, 1200);
}

const resultLine = computed(() => {
  const o = outcome.value;
  if (!o) return '';
  return `结果：${o.result}。${o.win ? `赢 ${fmt(o.payout)}` : `输 ${fmt(o.stake)}`}`;
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <div class="rlzc-market">
    <nav class="rlzc-subtabs rlzc-market-tabs">
      <button :class="{ on: sub === 'book' }" @click="sub = 'book'">盘口</button>
      <button :class="{ on: sub === 'tickets' }" @click="sub = 'tickets'">{{ pendingCount ? `票夹 · ${pendingCount}` : '票夹' }}</button>
      <button :class="{ on: sub === 'casino' }" @click="sub = 'casino'">赌坊</button>
    </nav>

    <!-- 盘口 -->
    <template v-if="sub === 'book'">
      <div class="rlzc-card rlzc-mk-status">{{ statusLine }}</div>
      <div v-for="m in book?.markets ?? []" :key="m.id" class="rlzc-card rlzc-mk-card">
        <div class="rlzc-mk-q"><span class="rlzc-mk-tag">{{ TAG[m.kind] }}</span>{{ m.q }}</div>
        <div class="rlzc-mk-opts">
          <button
            v-for="o in m.options"
            :key="o.id"
            class="rlzc-mk-opt"
            :class="{ on: picked[m.id] === o.id }"
            :disabled="closed || !!state.market.results[m.id]"
            @click="pick(m, o.id)"
          >
            <span>{{ o.label }}</span><b>{{ odds(o.odds) }}</b>
          </button>
        </div>
        <template v-if="picked[m.id] && !closed">
          <div class="rlzc-row rlzc-mk-bet">
            <input v-model.number="stakes[m.id]" type="number" min="10" step="1" inputmode="numeric" class="rlzc-input" placeholder="押多少" />
            <button class="rlzc-btn" :disabled="typeof stakes[m.id] !== 'number'" @click="bet(m)">下注</button>
          </div>
          <p class="rlzc-hint">单注上限 {{ fmt(stakeCheck(m).cap) }}（{{ level }}级）</p>
          <p v-if="stakeCheck(m).belowKill" class="rlzc-mk-red">押完余额低于斩杀线</p>
        </template>
        <ul v-if="ticketsOf(m).length" class="rlzc-mk-mine">
          <li v-for="v in ticketsOf(m)" :key="v.ticket.id">{{ optionLabel(v) }} · {{ ticketLine(v) }}</li>
        </ul>
      </div>
    </template>

    <!-- 票夹 -->
    <template v-else-if="sub === 'tickets'">
      <div class="rlzc-card">
        <ul v-if="state.market.tickets.length" class="rlzc-tk-list">
          <li v-for="v in state.market.tickets" :key="v.ticket.id" class="rlzc-tk">
            <div class="rlzc-tk-left">
              <span class="rlzc-tk-title">{{ ticketTitle(v) }}</span>
              <small>{{ ticketLine(v) }}</small>
            </div>
            <span class="rlzc-stamp" :class="v.res ? v.res.stamp : 'pending'">{{ v.res ? STAMP[v.res.stamp] : '待' }}</span>
          </li>
        </ul>
        <p v-else class="rlzc-hint">还没有赌票。</p>
      </div>
    </template>

    <!-- 赌坊 -->
    <template v-else>
      <div v-if="!state.market.casinoOpen" class="rlzc-card rlzc-mk-status">赌坊只在回廊营业。</div>
      <template v-else>
        <p class="rlzc-hint">今晚开两张桌，回到回廊换一批。</p>
        <div class="rlzc-cs-tables">
          <button v-for="t in tables" :key="t.id" class="rlzc-card rlzc-cs-table" :class="{ on: tableId === t.id }" @click="openTable(t.id)">
            <b>{{ t.name }}</b>
            <small>{{ t.desc }}</small>
          </button>
        </div>
        <div v-if="table" class="rlzc-card rlzc-cs-play">
          <h4>{{ table.name }}</h4>
          <div v-if="segBets.length" class="rlzc-segsrc rlzc-cs-seg">
            <button v-for="b in segBets" :key="b.id" :class="{ on: betId === b.id }" @click="betId = b.id">{{ b.label }}</button>
          </div>
          <div v-if="gridBets.length" class="rlzc-cs-grid" :class="table.id">
            <button v-for="b in gridBets" :key="b.id" :class="{ on: betId === b.id }" @click="betId = b.id">{{ b.label }}</button>
          </div>
          <div class="rlzc-row rlzc-mk-bet">
            <input v-model.number="casinoStake" type="number" min="10" step="1" inputmode="numeric" class="rlzc-input" placeholder="押多少" />
            <button class="rlzc-btn" :disabled="!betId || typeof casinoStake !== 'number' || rolling" @click="play">开</button>
          </div>
          <p class="rlzc-hint">单注上限 {{ fmt(casinoCheck.cap) }}（{{ level }}级）</p>
          <p v-if="casinoCheck.belowKill" class="rlzc-mk-red">押完余额低于斩杀线</p>
          <div v-if="rolling || outcome" class="rlzc-cs-face" :class="{ rolling }">{{ face || '' }}</div>
          <p v-if="outcome" class="rlzc-cs-result" :class="outcome.win ? 'win' : 'lose'">{{ resultLine }}</p>
        </div>
      </template>
    </template>
  </div>
</template>
