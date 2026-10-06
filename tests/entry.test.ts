import { afterEach, describe, expect, it, vi } from 'vitest';
import { detectEntry } from '../src/core/detector';
import { declineKey, entryCandidateAt, firstEntryCandidate, greetingEntryCandidate, seenBriefings } from '../src/core/session';
import { replay } from '../src/core/replay';
import { BUILTIN_PACKS, validatePack } from '../src/packs/loader';
import type { ChatMessage, Pack } from '../src/packs/types';
import { ai, session, user } from './helpers';

const packs = BUILTIN_PACKS;
const byId = (id: string) => packs.find((p) => p.id === id) as Pack;

const XIYAN_GREETING = '红烛高照，满院宾客。\n此次副本的规则是：6=5+1？\n新郎在门口朝你笑。';
const YOUXI_GREETING = '本次副本《游戏》，等级C，时限……\n灯亮了。';
const STATUS_XIYAN = '你走进村子。\n<状态栏>\n地点：D级副本《喜宴》· 村口\n时间：傍晚\n</状态栏>';

describe('入场信号', () => {
  it('喜宴开场白（6=5+1，无简报行）→ 命中喜宴；确认后开场白为第1轮', () => {
    const chat = [ai(XIYAN_GREETING)];
    const c = greetingEntryCandidate(chat, null, [], packs)!;
    expect(c).toMatchObject({ index: 0, signal: 5, pack: { id: 'xiyan' }, info: { name: '喜宴', level: 'D' } });
    const p = replay(chat, session({ packId: 'xiyan', entryIndex: c.index }), byId('xiyan'))!;
    expect(p.round).toBe(1);
    expect(p.nextRound).toBe(2);
  });

  it('游戏开场白（本次副本《游戏》，等级C……）→ 命中游戏', () => {
    expect(greetingEntryCandidate([ai(YOUXI_GREETING)], null, [], packs)).toMatchObject({ index: 0, signal: 3, pack: { id: 'youxi' } });
    expect(detectEntry('此次副本《钟楼》开始了。', packs)).toMatchObject({ signal: 3, pack: { id: 'zhonglou' } });
  });

  it('回廊闲聊提到副本名 → 不命中', () => {
    expect(detectEntry('听说钟楼那个副本很难', packs)).toBeNull();
    expect(detectEntry('我上次打了副本《钟楼》，差点没出来。', packs)).toBeNull();
    expect(detectEntry('下次想去喜宴看看。', packs)).toBeNull();
  });

  it('<状态栏> 地点写「D级副本《喜宴》· 村口」→ 命中喜宴', () => {
    expect(detectEntry(STATUS_XIYAN, packs)).toMatchObject({ signal: 4, pack: { id: 'xiyan' } });
    // 不在「地点」一行时不算
    expect(detectEntry('<状态栏>\n备注：想去副本《喜宴》\n</状态栏>', packs)).toBeNull();
  });

  it('<副本> 里的「副本名：X」→ 命中', () => {
    expect(detectEntry('<副本>\n副本名：《考试》\n时限：约剩5小时/5小时\n</副本>', packs)).toMatchObject({ signal: 2, pack: { id: 'kaoshi' } });
  });

  it('2–5 只认已收录的副本；只有简报能用通用副本包', () => {
    expect(detectEntry('本次副本《雾港》开始。', packs)).toBeNull();
    expect(detectEntry('<副本>\n副本名：雾港\n</副本>', packs)).toBeNull();
    const hit = detectEntry('「副本简报 - 雾港」\n「等级：C」\n「时限：10小时」', packs)!;
    expect(hit.signal).toBe(1);
    expect(hit.pack).toBeUndefined();
    expect(hit.info).toMatchObject({ name: '雾港', level: 'C', limit: '10小时' });
  });

  it('按 1→5 的顺序：简报优先', () => {
    expect(detectEntry('「副本简报 - 钟楼」\n此次副本的规则是：6=5+1', packs)).toMatchObject({ signal: 1, pack: { id: 'zhonglou' } });
  });
});

describe('拒绝与重新询问', () => {
  it('拒绝后同一条消息（重新生成后仍在同一楼）不再弹窗', () => {
    const chat = [ai(XIYAN_GREETING)];
    const declined = [declineKey(0, '喜宴')];
    expect(greetingEntryCandidate(chat, null, declined, packs)).toBeNull();
    expect(firstEntryCandidate(chat, packs, 0, 0, declined)).toBeNull();
  });

  it('更晚的消息再命中时可以再问一次，入场消息取第一条没被拒绝的', () => {
    const chat = [ai(XIYAN_GREETING), user(), ai('天色暗了。'), user(), ai(STATUS_XIYAN)];
    expect(firstEntryCandidate(chat, packs, 0, 4, [])!.index).toBe(0);
    expect(firstEntryCandidate(chat, packs, 0, 4, [declineKey(0, '喜宴')])).toMatchObject({ index: 4, signal: 4 });
  });

  it('未收录副本的简报被拒绝后，之后的消息提到它（地点、副本名、本次副本）可以再问一次，用之前简报里的信息', () => {
    const BRIEF = '车厢里很安静。\n「副本简报 - 永昼列车」\n「人数：4人」\n「等级：B」\n「时限：8小时」';
    const story = ai('你们还在站台上道别。');
    const inside = ai('列车开动了。\n<状态栏>\n地点：B级副本《永昼列车》· 3号车厢\n</状态栏>');
    const chat = [ai('开场白'), user(), ai(BRIEF), user(), story, user(), inside];
    const declined = [declineKey(2, '永昼列车')];
    const c = firstEntryCandidate(chat, packs, 0, 6, declined)!;
    expect(c).toMatchObject({ index: 6, signal: 4, info: { name: '永昼列车', level: 'B', limit: '8小时', players: '4人' } });
    expect(c.pack).toBeUndefined();
    // 中间没提到副本的消息不算
    expect(firstEntryCandidate(chat, packs, 0, 4, declined)).toBeNull();
    // <副本> 副本名、本次副本《X》也认
    const seen = seenBriefings(chat, 0, 6);
    expect(detectEntry('<副本>\n副本名：永昼列车\n</副本>', packs, seen)).toMatchObject({ signal: 2, info: { name: '永昼列车', level: 'B' } });
    expect(detectEntry('本次副本《永昼列车》正式开始。', packs, seen)).toMatchObject({ signal: 3 });
    // 没出现过简报的未收录副本照旧不认
    expect(detectEntry('本次副本《雾港》开始。', packs, seen)).toBeNull();
    // 简报在起点（上一个副本结算）之前：不认
    expect(firstEntryCandidate(chat, packs, 3, 6, [])).toBeNull();
    expect(entryCandidateAt(chat, 6, packs)).toBeNull();
    expect(entryCandidateAt(chat, 6, packs, seen)).toMatchObject({ index: 6, signal: 4 });
  });

  it('seenBriefings：只看AI消息，同名只留最近一次，按出现先后', () => {
    const chat = [ai('「副本简报 - 甲」\n「等级：C」'), user('「副本简报 - 乙」'), ai('「副本简报 - 乙」'), ai('「副本简报 - 甲」\n「等级：A」')];
    expect(seenBriefings(chat, 0, chat.length).map((b) => `${b.name}${b.level}`)).toEqual(['乙undefined', '甲A']);
    expect(seenBriefings(chat, 1, 3).map((b) => b.name)).toEqual(['乙']);
  });

  it('从上一个副本结算之后开始找', () => {
    const chat = [ai(XIYAN_GREETING), user(), ai('<副本结算>结果=通关</副本结算>'), user(), ai(YOUXI_GREETING)];
    expect(firstEntryCandidate(chat, packs, 3, 4, [])).toMatchObject({ index: 4, pack: { id: 'youxi' } });
    expect(greetingEntryCandidate(chat, session({ packId: 'xiyan', entryIndex: 0, status: 'ended' }), [], packs, 3)).toMatchObject({ index: 4 });
  });

  it('已有进行中副本时，开场白检查不返回', () => {
    for (const text of [XIYAN_GREETING, YOUXI_GREETING, STATUS_XIYAN]) {
      expect(greetingEntryCandidate([ai(text)], session({ packId: 'zhonglou', entryIndex: 0 }), [], packs)).toBeNull();
    }
  });

  it('用户消息不算入场消息', () => {
    expect(entryCandidateAt([user(YOUXI_GREETING)], 0, packs)).toBeNull();
  });
});

describe('detect.patterns', () => {
  afterEach(() => vi.restoreAllMocks());

  it('内置包：喜宴、游戏带识别正则', () => {
    expect(byId('xiyan').detect.patterns).toEqual(['6=5\\+1']);
    expect(byId('youxi').detect.patterns).toEqual(['(本次|此次)副本《游戏》']);
  });

  it('非法正则跳过并在控制台警告，不影响其他包，也不算格式错误', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const bad: Pack = { ...byId('kaoshi'), id: 'bad', name: '坏包', detect: { briefingName: '坏包', patterns: ['(未闭合'] } };
    expect(validatePack(bad)).toEqual([]);
    expect(detectEntry('此次副本的规则是：6=5+1', [bad, ...packs])).toMatchObject({ pack: { id: 'xiyan' } });
    expect(warn).toHaveBeenCalled();
    expect(validatePack({ ...bad, detect: { briefingName: '坏包', patterns: 'x' } }).join()).toContain('detect.patterns');
  });
});
