/** 测试用：入场提示小卡片按 st.answer 回答（true =「进入」，false =「不是」；勾选框代表「直播」开关） */
import { watch } from 'vue';
import * as app from '../src/app';
import { FakeEl, type FakeSt, type Popup } from './fakeSt';

export function autoAnswerEntryCards(st: FakeSt): void {
  watch(
    () => app.state.entryCard?.id,
    async (id) => {
      const card = app.state.entryCard;
      if (!card || id === undefined) return;
      let check: FakeEl | null = null;
      if (card.liveShow) {
        check = new FakeEl('input');
        check.checked = card.live;
      }
      const p: Popup = { text: `检测到副本 ${card.level} ${card.name}${card.unknown ? ' 未收录，将使用通用副本包' : ''}`, check };
      st.cards.push(p);
      const ok = await st.answer(p);
      // 回答之前卡片已被撤掉（切换聊天等）：这次回答不算
      if (app.state.entryCard?.id !== id) return;
      if (check) app.setEntryCardLive(check.checked);
      if (ok) app.enterEntryCard();
      else app.declineEntryCard();
    },
    { flush: 'sync' },
  );
}
