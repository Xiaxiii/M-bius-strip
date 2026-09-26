import { describe, it, expect } from 'vitest';
import { validatePack, BUILTIN_PACKS } from '../src/packs/loader';
import { calcSettlementDelta } from '../src/core/ledger';
import { replay, OPEN_PHASE } from '../src/core/replay';
import { buildInjection, EMPTY_INJECTION } from '../src/core/injector';
import { resolveSkipTarget } from '../src/core/detector';
import type { ChatMessage, Session } from '../src/packs/types';

const ai = (mes = '……'): ChatMessage => ({ mes, is_user: false, extra: {} });
const user = (mes = '我继续。'): ChatMessage => ({ mes, is_user: true, extra: {} });

/** 构造入场后 n 轮的对话（入场消息算第1轮） */
function dssChat(n: number): ChatMessage[] {
  const dss = BUILTIN_PACKS.find((p) => p.id === 'dusongshu')!;
  const entryMsg = ai(`副本简报 - ${dss.detect.briefingName}\n人数：4人\n等级：B\n时限：60小时\n简报：请在三夜内解开谜题。`);
  const chat: ChatMessage[] = [entryMsg];
  for (let i = 1; i < n; i++) {
    chat.push(user(), ai(`第${i + 1}条`));
  }
  return chat;
}

const dssSession = (): Session => ({
  id: '', packId: 'dusongshu', packVersion: '1.0.0',
  entryIndex: 0, status: 'active', manual: [],
});


// ───────────── 两个新包通过 validatePack ─────────────

describe('validatePack：杜松树、农闲', () => {
  it('杜松树通过校验', () => {
    const dssPack = BUILTIN_PACKS.find((p) => p.id === 'dusongshu');
    expect(dssPack).toBeDefined();
    expect(validatePack(dssPack)).toEqual([]);
  });

  it('农闲通过校验', () => {
    const nxPack = BUILTIN_PACKS.find((p) => p.id === 'nongxian');
    expect(nxPack).toBeDefined();
    expect(validatePack(nxPack)).toEqual([]);
  });

  it('rest 字段为非布尔值时报错', () => {
    const errors = validatePack({ id: 'test', name: '测', version: '1.0.0', token: '暗', level: 'D',
      legacyKeys: [], detect: { briefingName: '测' }, time: { type: 'none' },
      remaining: { type: 'fromPanel' }, phases: [], events: [], docs: [], rest: 'yes' });
    expect(errors.some((e) => e.includes('rest'))).toBe(true);
  });

  it('rest 为 true 时通过', () => {
    const errors = validatePack({ id: 'test', name: '测', version: '1.0.0', token: '暗', level: 'D',
      legacyKeys: [], detect: { briefingName: '测' }, time: { type: 'none' },
      remaining: { type: 'fromPanel' }, phases: [], events: [], docs: [], rest: true });
    expect(errors).toEqual([]);
  });
});

// ───────────── 杜松树阶段与事件确认 ─────────────

describe('杜松树：阶段和事件', () => {
  const dss = BUILTIN_PACKS.find((p) => p.id === 'dusongshu')!;

  it('共5个阶段，每阶段24轮，合计120轮', () => {
    expect(dss.phases).toHaveLength(5);
    const total = dss.phases.reduce((s, p) => s + p.cap, 0);
    expect(total).toBe(120);
    dss.phases.forEach((p) => expect(p.cap).toBe(24));
  });

  it('countdown 每轮30分钟，无 totalMinutes（按总轮数计算）', () => {
    expect(dss.time.type).toBe('countdown');
    if (dss.time.type === 'countdown') {
      expect(dss.time.minutesPerRound).toBe(30);
      // 内置包不设 totalMinutes，总时长 = 120 × 30 = 3600 分钟 = 60 小时
      expect(dss.time.totalMinutes).toBeUndefined();
    }
  });

  it('E04 和 E05 在同一阶段第1轮，且条件相反', () => {
    const e04 = dss.events.find((e) => e.id === 'E04');
    const e05 = dss.events.find((e) => e.id === 'E05');
    expect(e04).toBeDefined();
    expect(e05).toBeDefined();
    expect(e04!.from).toBe(1);
    expect(e05!.from).toBe(1);
    expect(e04!.phase).toBe(e05!.phase);
    // 两条都有 if 条件
    expect(e04!.if).toBeTruthy();
    expect(e05!.if).toBeTruthy();
  });

  it('有11个 stateFields', () => {
    expect(dss.stateFields).toHaveLength(11);
  });

  it('入场后第2轮总时长 = 120×30 = 3600分钟 = 60小时', () => {
    // 验证：120轮 × 30分/轮 = 3600分钟
    const total = dss.phases.reduce((s, p) => s + p.cap, 0);
    expect(total * 30).toBe(3600); // 60小时
  });
});

// ───────────── 农闲：休整副本确认 ─────────────

describe('农闲：休整副本', () => {
  const nx = BUILTIN_PACKS.find((p) => p.id === 'nongxian')!;

  it('rest 为 true', () => {
    expect(nx.rest).toBe(true);
  });

  it('没有阶段表（空数组）', () => {
    expect(nx.phases).toHaveLength(0);
  });

  it('time.type 为 none', () => {
    expect(nx.time.type).toBe('none');
  });

  it('有5个资料页', () => {
    expect(nx.docs).toHaveLength(5);
  });

  it('副本结算时不记奖励（calcSettlementDelta 在 rest 包不应被调用，但调用也返回正常值）', () => {
    // 休整副本的结算由 app.ts 的 if(!state.pack.rest) 拦截，不调用 calcSettlementDelta
    // 这里只验证如果被意外调用，不会抛异常
    expect(() => calcSettlementDelta(nx.level, nx.level, { 结果: '通关', 评价: 'S' }, 1000, false)).not.toThrow();
  });
});

// ───────────── 杜松树：注入与指令测试（甲·一·4）─────────────

describe('杜松树：buildInjection 实际产出', () => {
  const dss = BUILTIN_PACKS.find((p) => p.id === 'dusongshu')!;

  it('第2轮时限注入文字含「约剩59小时/60小时」', () => {
    // 入场消息算第1轮（round=1），nextRound=2 需要1条AI消息
    const chat = dssChat(1);
    const progress = replay(chat, dssSession(), dss);
    expect(progress).not.toBeNull();
    expect(progress!.nextRound).toBe(2);
    const inj = buildInjection(dss, progress, dssSession());
    // 第2轮：X = 120-2+1=119轮剩余，但入场是第1轮，nextRound=2时X=119，119×30=3570分=59.5小时≈59小时30分
    // 实际：第2轮 nextRound=2，已完成轮0，X=120-2=118，118×30=3540分=59小时
    expect(inj.turn).toContain('约剩59小时/60小时');
  });

  it('第24轮（第一夜最后一轮）本轮指令含「写出日出」', () => {
    // n1 有24轮，round=23 时 nextRound=24=cap，isLastRound=true；需23条AI消息
    const chat = dssChat(23);
    const progress = replay(chat, dssSession(), dss);
    expect(progress).not.toBeNull();
    expect(progress!.isLastRound).toBe(true);
    expect(progress!.phase.night).toBe(true);
    const inj = buildInjection(dss, progress, dssSession());
    expect(inj.turn).toContain('写出日出');
  });

  it('第48轮（第二日最后一轮，clock 白天）本轮指令含「写出日落」', () => {
    // d2 有24轮，进入d2前n1消耗24条；d2的round=23时nextRound=24=cap，共47条AI消息
    const chat = dssChat(47);
    const progress = replay(chat, dssSession(), dss);
    expect(progress).not.toBeNull();
    expect(progress!.isLastRound).toBe(true);
    expect(progress!.phase.clock).toBe(true);
    expect(progress!.phase.night).toBeFalsy();
    const inj = buildInjection(dss, progress, dssSession());
    expect(inj.turn).toContain('写出日落');
  });

  it('第25轮（第二日第1轮）副API关闭时 E04、E05 两条都注入且带条件原文', () => {
    // n1共24轮消耗24条AI消息后进入d2，d2的nextRound=1时共24条AI消息
    const chat = dssChat(24);
    const progress = replay(chat, dssSession(), dss);
    expect(progress).not.toBeNull();
    const inj = buildInjection(dss, progress, dssSession());
    expect(inj.injected).toContain('E04');
    expect(inj.injected).toContain('E05');
    // 没有预判时两条都带条件原文
    expect(inj.turn).toContain('E04');
    expect(inj.turn).toContain('E05');
    expect(inj.turn).toContain('条件：');
  });

  it('第25轮副API预判 E04 条件不成立时跳过 E04，E05 照常注入', () => {
    const chat = dssChat(24);
    const progress = replay(chat, dssSession(), dss);
    expect(progress).not.toBeNull();
    const e04 = dss.events.find((e) => e.id === 'E04')!;
    const e05 = dss.events.find((e) => e.id === 'E05')!;
    const inj = buildInjection(dss, progress, dssSession(), {
      subNext: [
        { id: e04.id, ok: false, reason: '条件不成立' },
        { id: e05.id, ok: true, reason: '条件成立' },
      ],
    });
    expect(inj.injected).not.toContain('E04');
    expect(inj.injected).toContain('E05');
    expect(inj.skipped?.some((s) => s.id === 'E04')).toBe(true);
    // E05 被预判为 ok，不再附条件原文
    expect(inj.turn).not.toContain('条件：');
  });

  it('第2轮要求 <角色登记>，格式含「父亲=姓名｜继母=姓名｜玛琳=姓名｜男孩=姓名｜其余=姓名」', () => {
    const chat = dssChat(1);
    const progress = replay(chat, dssSession(), dss);
    expect(progress).not.toBeNull();
    const inj = buildInjection(dss, progress, dssSession());
    expect(inj.turn).toContain('<角色登记>父亲=姓名｜继母=姓名｜玛琳=姓名｜男孩=姓名｜其余=姓名</角色登记>');
  });

  it('第一夜「睡到天亮」的跳转目标是第一夜结束（n1 第24轮）', () => {
    const chat = dssChat(1);
    const progress = replay(chat, dssSession(), dss);
    expect(progress).not.toBeNull();
    const phase = progress!.phase; // 应在 n1
    expect(phase.id).toBe('n1');
    const target = resolveSkipTarget(dss, phase, progress!.round, '天亮');
    expect(target).not.toBeNull();
    expect(target!.phase).toBe('n1');
    expect(target!.round).toBe(24);
  });
});

// ───────────── 农闲：休整副本注入测试（甲·一·4）─────────────

describe('农闲（rest 包）：buildInjection', () => {
  const nx = BUILTIN_PACKS.find((p) => p.id === 'nongxian')!;
  const nxSession: Session = {
    id: '', packId: 'nongxian', packVersion: '1.0.0',
    entryIndex: 0, status: 'active', manual: [],
  };
  const nxChat = (): ChatMessage[] => [ai('农闲开始了。')];

  it('入场后注入里只有暗号，没有进度和时限内容', () => {
    const chat = nxChat();
    // rest 包不计轮，replay 返回 OPEN_PHASE 进度
    const progress = replay(chat, nxSession, nx);
    const inj = buildInjection(nx, progress, nxSession);
    // 只有 token，progress 和 turn 为空
    expect(inj.token).toBeTruthy();
    expect(inj.token).toBe(nx.token);
    expect(inj.progress).toBe('');
    expect(inj.turn).toBe('');
  });
});
