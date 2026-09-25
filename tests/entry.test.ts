import { afterEach, describe, expect, it, vi } from 'vitest';
import { detectEntry } from '../src/core/detector';
import { declineKey, entryCandidateAt, firstEntryCandidate, greetingEntryCandidate } from '../src/core/session';
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
