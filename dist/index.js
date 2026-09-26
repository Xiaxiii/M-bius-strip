/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Qs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const re = {}, zt = [], St = () => {
}, wr = () => !1, Hn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Kn = (e) => e.startsWith("onUpdate:"), Ne = Object.assign, kr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, yl = Object.prototype.hasOwnProperty, ne = (e, t) => yl.call(e, t), H = Array.isArray, ot = (e) => mn(e) === "[object Map]", Mt = (e) => mn(e) === "[object Set]", Ei = (e) => mn(e) === "[object Date]", ee = (e) => typeof e == "function", ae = (e) => typeof e == "string", Ue = (e) => typeof e == "symbol", oe = (e) => e !== null && typeof e == "object", zr = (e) => (oe(e) || ee(e)) && ee(e.then) && ee(e.catch), $r = Object.prototype.toString, mn = (e) => $r.call(e), _l = (e) => mn(e).slice(8, -1), Sr = (e) => mn(e) === "[object Object]", Xs = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, en = /* @__PURE__ */ Qs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, wl = /-\w/g, Me = Zn(
  (e) => e.replace(wl, (t) => t.slice(1).toUpperCase())
), kl = /\B([A-Z])/g, Pt = Zn(
  (e) => e.replace(kl, "-$1").toLowerCase()
), Er = Zn((e) => e.charAt(0).toUpperCase() + e.slice(1)), xs = Zn(
  (e) => e ? `on${Er(e)}` : ""
), Ve = (e, t) => !Object.is(e, t), Mn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Cr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Jn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ci;
const qn = () => Ci || (Ci = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qn(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = ae(s) ? El(s) : Qn(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ae(e) || oe(e))
    return e;
}
const zl = /;(?![^(]*\))/g, $l = /:([^]+)/, Sl = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function El(e) {
  const t = {};
  return e.replace(Sl, (n) => n.startsWith("/*") ? "" : n).split(zl).forEach((n) => {
    if (n) {
      const s = n.split($l);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function he(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const s = he(e[n]);
      s && (t += s + " ");
    }
  else if (oe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Cl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ml = /* @__PURE__ */ Qs(Cl);
function Mr(e) {
  return !!e || e === "";
}
function Il(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = at(e[i], t[i], n);
  return s;
}
function Mi(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const r of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!i[l] && at(r, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    i[o] = 1;
  }
  return !0;
}
function Tl(e, t, n) {
  let s = ot(e), i = ot(t);
  if (s || i || (s = Mt(e), i = Mt(t), s || i))
    return s && i ? Mi(e, t, n) : !1;
  const r = Object.keys(e).length, o = Object.keys(t).length;
  if (r !== o)
    return !1;
  for (const l in e) {
    const A = e.hasOwnProperty(l), a = t.hasOwnProperty(l);
    if (A && !a || !A && a || !at(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function Ii(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, r] = n;
  if (i.has(e) || r.has(t))
    return i.get(e) === t && r.get(t) === e;
  i.set(e, t), r.set(t, e);
  const o = s(e, t, n);
  return i.delete(e), r.delete(t), o;
}
function at(e, t, n) {
  if (e === t) return !0;
  let s = Ei(e), i = Ei(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = Ue(e), i = Ue(t), s || i ? e === t : (s = H(e), i = H(t), s || i ? s && i ? Ii(e, t, n, Il) : !1 : (s = oe(e), i = oe(t), s || i ? !s || !i ? !1 : Ii(e, t, n, Tl) : String(e) === String(t))));
}
function Pl(e, t) {
  return e.findIndex((n) => at(n, t));
}
const Ir = (e) => !!(e && e.__v_isRef === !0), N = (e) => ae(e) ? e : e == null ? "" : H(e) || oe(e) && (e.toString === $r || !ee(e.toString)) ? Ir(e) ? N(e.value) : JSON.stringify(e, Tr, 2) : String(e), Tr = (e, t) => Ir(t) ? Tr(e, t.value) : ot(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[vs(s, r) + " =>"] = i, n),
    {}
  )
} : Mt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => vs(n))
} : Ue(t) ? vs(t) : oe(t) && !H(t) && !Sr(t) ? String(t) : t, vs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ue(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let de;
class Nl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && de && (de.active ? (this.parent = de, this.index = (de.scopes || (de.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) {
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++)
          s[t].pause();
      }
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) {
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++)
          i[t].resume();
      }
      const s = this.effects.slice();
      for (t = 0, n = s.length; t < n; t++)
        s[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = de;
      try {
        return de = this, t();
      } finally {
        de = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = de, de = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (de === this)
        de = this.prevScope;
      else {
        let t = de;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const i = this.scopes.slice();
        for (n = 0, s = i.length; n < s; n++)
          i[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Rl() {
  return de;
}
let se;
const ys = /* @__PURE__ */ new WeakSet();
class Pr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, de && (de.active ? de.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ys.has(this) && (ys.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Rr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ti(this), Fr(this);
    const t = se, n = Ie;
    se = this, Ie = !0;
    try {
      return this.fn();
    } finally {
      Or(this), se = t, Ie = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ni(t);
      this.deps = this.depsTail = void 0, Ti(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ys.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ls(this) && this.run();
  }
  get dirty() {
    return Ls(this);
  }
}
let Nr = 0, tn, nn;
function Rr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = nn, nn = e;
    return;
  }
  e.next = tn, tn = e;
}
function ei() {
  Nr++;
}
function ti() {
  if (--Nr > 0)
    return;
  if (nn) {
    let t = nn;
    for (nn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; tn; ) {
    let t = tn;
    for (tn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Fr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Or(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), ni(s), Fl(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Ls(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (jr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function jr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === An) || (e.globalVersion = An, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ls(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = se, s = Ie;
  se = e, Ie = !0;
  try {
    Fr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ve(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    se = n, Ie = s, Or(e), e.flags &= -3;
  }
}
function ni(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      ni(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Fl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ie = !0;
const Dr = [];
function ct() {
  Dr.push(Ie), Ie = !1;
}
function ut() {
  const e = Dr.pop();
  Ie = e === void 0 ? !0 : e;
}
function Ti(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = se;
    se = void 0;
    try {
      t();
    } finally {
      se = n;
    }
  }
}
let An = 0;
class Ol {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class si {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!se || !Ie || se === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== se)
      n = this.activeLink = new Ol(se, this), se.deps ? (n.prevDep = se.depsTail, se.depsTail.nextDep = n, se.depsTail = n) : se.deps = se.depsTail = n, Lr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = se.depsTail, n.nextDep = void 0, se.depsTail.nextDep = n, se.depsTail = n, se.deps === n && (se.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, An++, this.notify(t);
  }
  notify(t) {
    ei();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ti();
    }
  }
}
function Lr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Lr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Bs = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ Symbol(
  ""
), Vs = /* @__PURE__ */ Symbol(
  ""
), an = /* @__PURE__ */ Symbol(
  ""
);
function pe(e, t, n) {
  if (Ie && se) {
    let s = Bs.get(e);
    s || Bs.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new si()), i.map = s, i.key = n), i.track();
  }
}
function Xe(e, t, n, s, i, r) {
  const o = Bs.get(e);
  if (!o) {
    An++;
    return;
  }
  const l = (A) => {
    A && A.trigger();
  };
  if (ei(), t === "clear")
    o.forEach(l);
  else {
    const A = H(e), a = A && Xs(n);
    if (A && n === "length") {
      const c = Number(s);
      o.forEach((d, h) => {
        (h === "length" || h === an || !Ue(h) && h >= c) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(an)), t) {
        case "add":
          A ? a && l(o.get("length")) : (l(o.get(Et)), ot(e) && l(o.get(Vs)));
          break;
        case "delete":
          A || (l(o.get(Et)), ot(e) && l(o.get(Vs)));
          break;
        case "set":
          ot(e) && l(o.get(Et));
          break;
      }
  }
  ti();
}
function Rt(e) {
  const t = /* @__PURE__ */ J(e);
  return t === e || (pe(t, "iterate", an), /* @__PURE__ */ Se(e)) ? t : /* @__PURE__ */ We(e) ? /* @__PURE__ */ lt(e) ? t.map((n) => dt(Ce(n))) : t.map(dt) : t.map(Ce);
}
function Xn(e) {
  return pe(e = /* @__PURE__ */ J(e), "iterate", an), e;
}
function Le(e, t) {
  return /* @__PURE__ */ We(e) ? dt(/* @__PURE__ */ lt(e) ? Ce(t) : t) : Ce(t);
}
const jl = {
  __proto__: null,
  [Symbol.iterator]() {
    return _s(this, Symbol.iterator, (e) => Le(this, e));
  },
  concat(...e) {
    return Rt(this).concat(
      ...e.map((t) => H(t) ? Rt(t) : t)
    );
  },
  entries() {
    return _s(this, "entries", (e) => (e[1] = Le(this, e[1]), e));
  },
  every(e, t) {
    return Ze(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ze(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Le(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ze(
      this,
      "find",
      e,
      t,
      (n) => Le(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ze(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ze(
      this,
      "findLast",
      e,
      t,
      (n) => Le(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ze(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ze(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ws(this, "includes", e);
  },
  indexOf(...e) {
    return ws(this, "indexOf", e);
  },
  join(e) {
    return Rt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ws(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ze(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ht(this, "pop");
  },
  push(...e) {
    return Ht(this, "push", e);
  },
  reduce(e, ...t) {
    return Pi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Pi(this, "reduceRight", e, t);
  },
  shift() {
    return Ht(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ze(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ht(this, "splice", e);
  },
  toReversed() {
    return Rt(this).toReversed();
  },
  toSorted(e) {
    return Rt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Rt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ht(this, "unshift", e);
  },
  values() {
    return _s(this, "values", (e) => Le(this, e));
  }
};
function _s(e, t, n) {
  const s = Xn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Se(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const Dl = Array.prototype;
function Ze(e, t, n, s, i, r) {
  const o = Xn(e), l = o !== e && !/* @__PURE__ */ Se(e), A = o[t];
  if (A !== Dl[t]) {
    const d = A.apply(e, r);
    return l ? Ce(d) : d;
  }
  let a = n;
  o !== e && (l ? a = function(d, h) {
    return n.call(this, Le(e, d), h, e);
  } : n.length > 2 && (a = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const c = A.call(o, a, s);
  return l && i ? i(c) : c;
}
function Pi(e, t, n, s) {
  const i = Xn(e), r = i !== e && !/* @__PURE__ */ Se(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(a, c, d) {
    return l && (l = !1, a = Le(e, a)), n.call(this, a, Le(e, c), d, e);
  }) : n.length > 3 && (o = function(a, c, d) {
    return n.call(this, a, c, d, e);
  }));
  const A = i[t](o, ...s);
  return l ? Le(e, A) : A;
}
function ws(e, t, n) {
  const s = /* @__PURE__ */ J(e);
  pe(s, "iterate", an);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ oi(n[0]) ? (n[0] = /* @__PURE__ */ J(n[0]), s[t](...n)) : i;
}
function Ht(e, t, n = []) {
  ct(), ei();
  const s = (/* @__PURE__ */ J(e))[t].apply(e, n);
  return ti(), ut(), s;
}
const Ll = /* @__PURE__ */ Qs("__proto__,__v_isRef,__isVue"), Br = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ue)
);
function Bl(e) {
  Ue(e) || (e = String(e));
  const t = /* @__PURE__ */ J(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
class Vr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (i ? r ? ql : Yr : r ? Gr : Wr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = H(t);
    if (!i) {
      let A;
      if (o && (A = jl[n]))
        return A;
      if (n === "hasOwnProperty")
        return Bl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ve(t) ? t : s
    );
    if ((Ue(n) ? Br.has(n) : Ll(n)) || (i || pe(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ ve(l)) {
      const A = o && Xs(n) ? l : l.value;
      return i && oe(A) ? /* @__PURE__ */ Ws(A) : A;
    }
    return oe(l) ? i ? /* @__PURE__ */ Ws(l) : /* @__PURE__ */ es(l) : l;
  }
}
class Ur extends Vr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = H(t) && Xs(n);
    if (!this._isShallow) {
      const a = /* @__PURE__ */ We(r);
      if (!/* @__PURE__ */ Se(s) && !/* @__PURE__ */ We(s) && (r = /* @__PURE__ */ J(r), s = /* @__PURE__ */ J(s)), !o && /* @__PURE__ */ ve(r) && !/* @__PURE__ */ ve(s))
        return a || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : ne(t, n), A = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ve(t) ? t : i
    );
    return t === /* @__PURE__ */ J(i) && A && (l ? Ve(s, r) && Xe(t, "set", n, s) : Xe(t, "add", n, s)), A;
  }
  deleteProperty(t, n) {
    const s = ne(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && Xe(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ue(n) || !Br.has(n)) && pe(t, "has", n), s;
  }
  ownKeys(t) {
    return pe(
      t,
      "iterate",
      H(t) ? "length" : Et
    ), Reflect.ownKeys(t);
  }
}
class Vl extends Vr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Ul = /* @__PURE__ */ new Ur(), Wl = /* @__PURE__ */ new Vl(), Gl = /* @__PURE__ */ new Ur(!0);
const Us = (e) => e, kn = (e) => Reflect.getPrototypeOf(e);
function Yl(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ J(i), o = ot(r), l = e === "entries" || e === Symbol.iterator && o, A = e === "keys" && o, a = i[e](...s), c = n ? Us : t ? dt : Ce;
    return !t && pe(
      r,
      "iterate",
      A ? Vs : Et
    ), Ne(
      // inheriting all iterator properties
      Object.create(a),
      {
        // iterator protocol
        next() {
          const { value: d, done: h } = a.next();
          return h ? { value: d, done: h } : {
            value: l ? [c(d[0]), c(d[1])] : c(d),
            done: h
          };
        }
      }
    );
  };
}
function zn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hl(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ J(r), l = /* @__PURE__ */ J(i);
      e || (Ve(i, l) && pe(o, "get", i), pe(o, "get", l));
      const { has: A } = kn(o), a = t ? Us : e ? dt : Ce;
      if (A.call(o, i))
        return a(r.get(i));
      if (A.call(o, l))
        return a(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && pe(/* @__PURE__ */ J(i), "iterate", Et), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ J(r), l = /* @__PURE__ */ J(i);
      return e || (Ve(i, l) && pe(o, "has", i), pe(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, A = /* @__PURE__ */ J(l), a = t ? Us : e ? dt : Ce;
      return !e && pe(A, "iterate", Et), l.forEach((c, d) => i.call(r, a(c), a(d), o));
    }
  };
  return Ne(
    n,
    e ? {
      add: zn("add"),
      set: zn("set"),
      delete: zn("delete"),
      clear: zn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ J(this), o = kn(r), l = /* @__PURE__ */ J(i), A = !t && !/* @__PURE__ */ Se(i) && !/* @__PURE__ */ We(i) ? l : i;
        return o.has.call(r, A) || Ve(i, A) && o.has.call(r, i) || Ve(l, A) && o.has.call(r, l) || (r.add(A), Xe(r, "add", A, A)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Se(r) && !/* @__PURE__ */ We(r) && (r = /* @__PURE__ */ J(r));
        const o = /* @__PURE__ */ J(this), { has: l, get: A } = kn(o);
        let a = l.call(o, i);
        a || (i = /* @__PURE__ */ J(i), a = l.call(o, i));
        const c = A.call(o, i);
        return o.set(i, r), a ? Ve(r, c) && Xe(o, "set", i, r) : Xe(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ J(this), { has: o, get: l } = kn(r);
        let A = o.call(r, i);
        A || (i = /* @__PURE__ */ J(i), A = o.call(r, i)), l && l.call(r, i);
        const a = r.delete(i);
        return A && Xe(r, "delete", i, void 0), a;
      },
      clear() {
        const i = /* @__PURE__ */ J(this), r = i.size !== 0, o = i.clear();
        return r && Xe(
          i,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Yl(i, e, t);
  }), n;
}
function ii(e, t) {
  const n = Hl(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    ne(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Kl = {
  get: /* @__PURE__ */ ii(!1, !1)
}, Zl = {
  get: /* @__PURE__ */ ii(!1, !0)
}, Jl = {
  get: /* @__PURE__ */ ii(!0, !1)
};
const Wr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap();
function Ql(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function es(e) {
  return /* @__PURE__ */ We(e) ? e : ri(
    e,
    !1,
    Ul,
    Kl,
    Wr
  );
}
// @__NO_SIDE_EFFECTS__
function Xl(e) {
  return ri(
    e,
    !1,
    Gl,
    Zl,
    Gr
  );
}
// @__NO_SIDE_EFFECTS__
function Ws(e) {
  return ri(
    e,
    !0,
    Wl,
    Jl,
    Yr
  );
}
function ri(e, t, n, s, i) {
  if (!oe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = Ql(_l(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return /* @__PURE__ */ We(e) ? /* @__PURE__ */ lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function oi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function J(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ J(t) : e;
}
function eA(e) {
  return !ne(e, "__v_skip") && Object.isExtensible(e) && Cr(e, "__v_skip", !0), e;
}
const Ce = (e) => oe(e) ? /* @__PURE__ */ es(e) : e, dt = (e) => oe(e) ? /* @__PURE__ */ Ws(e) : e;
// @__NO_SIDE_EFFECTS__
function ve(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  return tA(e, !1);
}
function tA(e, t) {
  return /* @__PURE__ */ ve(e) ? e : new nA(e, t);
}
class nA {
  constructor(t, n) {
    this.dep = new si(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ J(t), this._value = n ? t : Ce(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Se(t) || /* @__PURE__ */ We(t);
    t = s ? t : /* @__PURE__ */ J(t), Ve(t, n) && (this._rawValue = t, this._value = s ? t : Ce(t), this.dep.trigger());
  }
}
function D(e) {
  return /* @__PURE__ */ ve(e) ? e.value : e;
}
const sA = {
  get: (e, t, n) => t === "__v_raw" ? e : D(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ ve(i) && !/* @__PURE__ */ ve(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Hr(e) {
  return /* @__PURE__ */ lt(e) ? e : new Proxy(e, sA);
}
class iA {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new si(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = An - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    se !== this)
      return Rr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return jr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function rA(e, t, n = !1) {
  let s, i;
  return ee(e) ? s = e : (s = e.get, i = e.set), new iA(s, i, n);
}
const $n = {}, Nn = /* @__PURE__ */ new WeakMap();
let _t;
function oA(e, t = !1, n = _t) {
  if (n) {
    let s = Nn.get(n);
    s || Nn.set(n, s = []), s.push(e);
  }
}
function lA(e, t, n = re) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: A } = n, a = (C) => i ? C : /* @__PURE__ */ Se(C) || i === !1 || i === 0 ? et(C, 1) : et(C);
  let c, d, h, b, I = !1, S = !1;
  if (/* @__PURE__ */ ve(e) ? (d = () => e.value, I = /* @__PURE__ */ Se(e)) : /* @__PURE__ */ lt(e) ? (d = () => a(e), I = !0) : H(e) ? (S = !0, I = e.some((C) => /* @__PURE__ */ lt(C) || /* @__PURE__ */ Se(C)), d = () => e.map((C) => {
    if (/* @__PURE__ */ ve(C))
      return C.value;
    if (/* @__PURE__ */ lt(C))
      return a(C);
    if (ee(C))
      return A ? A(C, 2) : C();
  })) : ee(e) ? t ? d = A ? () => A(e, 2) : e : d = () => {
    if (h) {
      ct();
      try {
        h();
      } finally {
        ut();
      }
    }
    const C = _t;
    _t = c;
    try {
      return A ? A(e, 3, [b]) : e(b);
    } finally {
      _t = C;
    }
  } : d = St, t && i) {
    const C = d, B = i === !0 ? 1 / 0 : i;
    d = () => et(C(), B);
  }
  const L = Rl(), U = () => {
    c.stop(), L && L.active && kr(L.effects, c);
  };
  if (r && t) {
    const C = t;
    t = (...B) => {
      const z = C(...B);
      return U(), z;
    };
  }
  let O = S ? new Array(e.length).fill($n) : $n;
  const x = (C) => {
    if (!(!(c.flags & 1) || !c.dirty && !C))
      if (t) {
        const B = c.run();
        if (C || i || I || (S ? B.some((z, j) => Ve(z, O[j])) : Ve(B, O))) {
          h && h();
          const z = _t;
          _t = c;
          try {
            const j = [
              B,
              // pass undefined as the old value when it's changed for the first time
              O === $n ? void 0 : S && O[0] === $n ? [] : O,
              b
            ];
            O = B, A ? A(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            _t = z;
          }
        }
      } else
        c.run();
  };
  return l && l(x), c = new Pr(d), c.scheduler = o ? () => o(x, !1) : x, b = (C) => oA(C, !1, c), h = c.onStop = () => {
    const C = Nn.get(c);
    if (C) {
      if (A)
        A(C, 4);
      else
        for (const B of C) B();
      Nn.delete(c);
    }
  }, t ? s ? x(!0) : O = c.run() : o ? o(x.bind(null, !0), !0) : c.run(), U.pause = c.pause.bind(c), U.resume = c.resume.bind(c), U.stop = U, U;
}
function et(e, t = 1 / 0, n) {
  if (t <= 0 || !oe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ve(e))
    et(e.value, t, n);
  else if (H(e))
    for (let s = 0; s < e.length; s++)
      et(e[s], t, n);
  else if (Mt(e) || ot(e))
    e.forEach((s) => {
      et(s, t, n);
    });
  else if (Sr(e)) {
    for (const s in e)
      et(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && et(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function gn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    ts(i, t, n);
  }
}
function Ge(e, t, n, s) {
  if (ee(e)) {
    const i = gn(e, t, n, s);
    return i && zr(i) && i.catch((r) => {
      ts(r, t, n);
    }), i;
  }
  if (H(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ge(e[r], t, n, s));
    return i;
  }
}
function ts(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || re;
  if (t) {
    let l = t.parent;
    const A = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, A, a) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      ct(), gn(r, null, 10, [
        e,
        A,
        a
      ]), ut();
      return;
    }
  }
  AA(e, n, i, s, o);
}
function AA(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ge = [];
let De = -1;
const Dt = [];
let rt = null, Ft = 0;
const Kr = /* @__PURE__ */ Promise.resolve();
let Rn = null;
function Zr(e) {
  const t = Rn || Kr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function aA(e) {
  let t = De + 1, n = ge.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = ge[s], r = cn(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function li(e) {
  if (!(e.flags & 1)) {
    const t = cn(e), n = ge[ge.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= cn(n) ? ge.push(e) : ge.splice(aA(t), 0, e), e.flags |= 1, Jr();
  }
}
function Jr() {
  Rn || (Rn = Kr.then(Qr));
}
function cA(e) {
  if (!H(e))
    rt && e.id === -1 ? rt.splice(Ft + 1, 0, e) : e.flags & 1 || (Dt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Dt.push(e[t]);
  Jr();
}
function Ni(e, t, n = De + 1) {
  for (; n < ge.length; n++) {
    const s = ge[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ge.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function qr(e) {
  if (Dt.length) {
    const t = [...new Set(Dt)].sort(
      (n, s) => cn(n) - cn(s)
    );
    if (Dt.length = 0, rt) {
      for (let n = 0; n < t.length; n++)
        rt.push(t[n]);
      return;
    }
    for (rt = t, Ft = 0; Ft < rt.length; Ft++) {
      const n = rt[Ft];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    rt = null, Ft = 0;
  }
}
const cn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qr(e) {
  try {
    for (De = 0; De < ge.length; De++) {
      const t = ge[De];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), gn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; De < ge.length; De++) {
      const t = ge[De];
      t && (t.flags &= -2);
    }
    De = -1, ge.length = 0, qr(), Rn = null, (ge.length || Dt.length) && Qr();
  }
}
let $e = null, Xr = null;
function Fn(e) {
  const t = $e;
  return $e = e, Xr = e && e.type.__scopeId || null, t;
}
function uA(e, t = $e, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Bi(-1);
    const r = Fn(t), o = Ct.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let A = Ct.length; A > o; A--) go();
      Fn(r), s._d && Bi(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function wt(e, t) {
  if ($e === null)
    return e;
  const n = os($e), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, A = re] = t[i];
    r && (ee(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && et(o), s.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: A
    }));
  }
  return e;
}
function vt(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let A = l.dir[s];
    A && (ct(), Ge(A, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ut());
  }
}
function dA(e, t, n = !1) {
  const s = JA();
  if (s || Lt) {
    let i = Lt ? Lt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ee(t) ? t.call(s && s.proxy) : t;
  }
}
const fA = /* @__PURE__ */ Symbol.for("v-scx"), pA = () => dA(fA);
function ns(e, t, n) {
  return hA(e, t, n);
}
function hA(e, t, n = re) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = Ne({}, n), A = t && s || !t && r !== "post";
  let a;
  if (fn) {
    if (r === "sync") {
      const b = pA();
      a = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!A) {
      const b = () => {
      };
      return b.stop = St, b.resume = St, b.pause = St, b;
    }
  }
  const c = ft;
  l.call = (b, I, S) => Ge(b, c, I, S);
  let d = !1;
  r === "post" ? l.scheduler = (b) => {
    _e(b, c && c.suspense);
  } : r !== "sync" && (d = !0, l.scheduler = (b, I) => {
    I ? b() : li(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), d && (b.flags |= 2, c && (b.id = c.uid, b.i = c));
  };
  const h = lA(e, t, l);
  return fn && (a ? a.push(h) : A && h()), h;
}
const mA = /* @__PURE__ */ Symbol("_vte"), ss = (e) => e.__isTeleport, ks = /* @__PURE__ */ Symbol("_leaveCb");
function gA(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== nt) {
        t = n;
        break;
      }
  }
  return t;
}
function eo(e) {
  if (!to(e))
    return ss(e.type) && e.children ? gA(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ee(n.default))
      return n.default();
  }
}
function Ai(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Ai(
      ss(n.type) && eo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ke(e, t) {
  return ee(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ne({ name: e.name }, t, { setup: e })
  ) : e;
}
function bA(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ri(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const On = /* @__PURE__ */ new WeakMap();
function sn(e, t, n, s, i = !1) {
  if (H(e)) {
    e.forEach(
      (S, L) => sn(
        S,
        t && (H(t) ? t[L] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (rn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && sn(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? os(s.component) : s.el, o = i ? null : r, { i: l, r: A } = e, a = t && t.r, c = l.refs === re ? l.refs = {} : l.refs, d = l.setupState, h = /* @__PURE__ */ J(d), b = d === re ? wr : (S) => Ri(c, S) ? !1 : ne(h, S), I = (S, L) => !(L && Ri(c, L));
  if (a != null && a !== A) {
    if (Fi(t), ae(a))
      c[a] = null, b(a) && (d[a] = null);
    else if (/* @__PURE__ */ ve(a)) {
      const S = t;
      I(a, S.k) && (a.value = null), S.k && (c[S.k] = null);
    }
  }
  if (ee(A))
    gn(A, l, 12, [o, c]);
  else {
    const S = ae(A), L = /* @__PURE__ */ ve(A);
    if (S || L) {
      const U = () => {
        if (e.f) {
          const O = S ? b(A) ? d[A] : c[A] : I() || !e.k ? A.value : c[e.k];
          if (i)
            H(O) && kr(O, r);
          else if (H(O))
            O.includes(r) || O.push(r);
          else if (S)
            c[A] = [r], b(A) && (d[A] = c[A]);
          else {
            const x = [r];
            I(A, e.k) && (A.value = x), e.k && (c[e.k] = x);
          }
        } else S ? (c[A] = o, b(A) && (d[A] = o)) : L && (I(A, e.k) && (A.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const O = () => {
          U(), On.delete(e);
        };
        O.id = -1, On.set(e, O), _e(O, n);
      } else
        Fi(e), U();
    }
  }
}
function Fi(e) {
  const t = On.get(e);
  t && (t.flags |= 8, On.delete(e));
}
qn().requestIdleCallback;
qn().cancelIdleCallback;
const rn = (e) => !!e.type.__asyncLoader, to = (e) => e.type.__isKeepAlive;
function xA(e, t, n = ft, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      ct();
      const l = ui(n), A = Ge(t, n, e, o);
      return l(), ut(), A;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const no = (e) => (t, n = ft) => {
  (!fn || e === "sp") && xA(e, (...s) => t(...s), n);
}, vA = no("m"), yA = no(
  "bum"
), _A = /* @__PURE__ */ Symbol.for("v-ndc");
function xe(e, t, n, s) {
  let i;
  const r = n, o = H(e);
  if (o || ae(e)) {
    const l = o && /* @__PURE__ */ lt(e);
    let A = !1, a = !1;
    l && (A = !/* @__PURE__ */ Se(e), a = /* @__PURE__ */ We(e), e = Xn(e)), i = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++)
      i[c] = t(
        A ? a ? dt(Ce(e[c])) : Ce(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (oe(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, A) => t(l, A, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let A = 0, a = l.length; A < a; A++) {
        const c = l[A];
        i[A] = t(e[c], c, A, r);
      }
    }
  else
    i = [];
  return i;
}
const Gs = (e) => e ? yo(e) ? os(e) : Gs(e.parent) : null, on = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ne(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Gs(e.parent),
    $root: (e) => Gs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      li(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zr.bind(e.proxy)),
    $watch: (e) => St
  })
), zs = (e, t) => e !== re && !e.__isScriptSetup && ne(e, t), wA = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: A } = e;
    if (t[0] !== "$") {
      const h = o[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (zs(s, t))
          return o[t] = 1, s[t];
        if (ne(r, t))
          return o[t] = 3, r[t];
        if (n !== re && ne(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const a = on[t];
    let c, d;
    if (a)
      return t === "$attrs" && pe(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== re && ne(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = A.config.globalProperties, ne(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return zs(i, t) ? (i[t] = n, !0) : ne(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let A;
    return !!(n[l] || zs(t, l) || ne(r, l) || ne(s, l) || ne(on, l) || ne(i.config.globalProperties, l) || (A = o.__cssModules) && A[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ne(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function so() {
  return {
    app: null,
    config: {
      isNativeTag: wr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let kA = 0;
function zA(e, t) {
  return function(s, i = null) {
    ee(s) || (s = Ne({}, s)), i != null && !oe(i) && (i = null);
    const r = so(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let A = !1;
    const a = r.app = {
      _uid: kA++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: na,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return o.has(c) || (c && ee(c.install) ? (o.add(c), c.install(a, ...d)) : ee(c) && (o.add(c), c(a, ...d))), a;
      },
      mixin(c) {
        return a;
      },
      component(c, d) {
        return d ? (r.components[c] = d, a) : r.components[c];
      },
      directive(c, d) {
        return d ? (r.directives[c] = d, a) : r.directives[c];
      },
      mount(c, d, h) {
        if (!A) {
          const b = a._ceVNode || Ee(s, i);
          return b.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(b, c, h), A = !0, a._container = c, c.__vue_app__ = a, os(b.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        A && (Ge(
          l,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, d) {
        return r.provides[c] = d, a;
      },
      runWithContext(c) {
        const d = Lt;
        Lt = a;
        try {
          return c();
        } finally {
          Lt = d;
        }
      }
    };
    return a;
  };
}
let Lt = null;
const $A = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Me(t)}Modifiers`] || e[`${Pt(t)}Modifiers`];
function SA(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || re;
  let i = n;
  const r = t.startsWith("update:"), o = r && $A(s, t.slice(7));
  o && (o.trim && (i = n.map((c) => ae(c) ? c.trim() : c)), o.number && (i = i.map(Jn)));
  let l, A = s[l = xs(t)] || // also try camelCase event handler (#2249)
  s[l = xs(Me(t))];
  !A && r && (A = s[l = xs(Pt(t))]), A && Ge(
    A,
    e,
    6,
    i
  );
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ge(
      a,
      e,
      6,
      i
    );
  }
}
function EA(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {};
  return r ? (H(r) ? r.forEach((l) => o[l] = null) : Ne(o, r), oe(e) && s.set(e, o), o) : (oe(e) && s.set(e, null), null);
}
function is(e, t) {
  return !e || !Hn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ne(e, t[0].toLowerCase() + t.slice(1)) || ne(e, Pt(t)) || ne(e, t));
}
function Oi(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: A,
    render: a,
    renderCache: c,
    props: d,
    data: h,
    setupState: b,
    ctx: I,
    inheritAttrs: S
  } = e, L = Fn(e);
  let U, O;
  try {
    if (n.shapeFlag & 4) {
      const C = i || s, B = C;
      U = Be(
        a.call(
          B,
          C,
          c,
          d,
          b,
          h,
          I
        )
      ), O = l;
    } else {
      const C = t;
      U = Be(
        C.length > 1 ? C(
          d,
          { attrs: l, slots: o, emit: A }
        ) : C(
          d,
          null
        )
      ), O = t.props ? l : CA(l);
    }
  } catch (C) {
    Ct.length = 0, ts(C, e, 1), U = Ee(nt);
  }
  let x = U;
  if (O && S !== !1) {
    const C = Object.keys(O), { shapeFlag: B } = x;
    C.length && B & 7 && (r && C.some(Kn) && (O = MA(
      O,
      r
    )), x = Bt(x, O, !1, !0));
  }
  if (n.dirs && (x = Bt(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const C = ss(x.type) && eo(x) || x;
    Ai(C, n.transition);
  }
  return U = x, Fn(L), U;
}
const CA = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Hn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, MA = (e, t) => {
  const n = {};
  for (const s in e)
    (!Kn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function IA(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: A } = t, a = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && A >= 0) {
    if (A & 1024)
      return !0;
    if (A & 16)
      return s ? ji(s, o, a) : !!o;
    if (A & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const h = c[d];
        if (io(o, s, h) && !is(a, h))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? ji(s, o, a) : !0 : !!o;
  return !1;
}
function ji(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (io(t, e, r) && !is(n, r))
      return !0;
  }
  return !1;
}
function io(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && oe(s) && oe(i) ? !at(s, i) : s !== i;
}
function TA({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const ro = {}, oo = () => Object.create(ro), lo = (e) => Object.getPrototypeOf(e) === ro;
function PA(e, t, n, s = !1) {
  const i = {}, r = oo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ao(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Xl(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function NA(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ J(i), [A] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let h = c[d];
        if (is(e.emitsOptions, h))
          continue;
        const b = t[h];
        if (A)
          if (ne(r, h))
            b !== r[h] && (r[h] = b, a = !0);
          else {
            const I = Me(h);
            i[I] = Ys(
              A,
              l,
              I,
              b,
              e,
              !1
            );
          }
        else
          b !== r[h] && (r[h] = b, a = !0);
      }
    }
  } else {
    Ao(e, t, i, r) && (a = !0);
    let c;
    for (const d in l)
      (!t || // for camelCase
      !ne(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Pt(d)) === d || !ne(t, c))) && (A ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (i[d] = Ys(
        A,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== l)
      for (const d in r)
        (!t || !ne(t, d)) && (delete r[d], a = !0);
  }
  a && Xe(e.attrs, "set", "");
}
function Ao(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let A in t) {
      if (en(A))
        continue;
      const a = t[A];
      let c;
      i && ne(i, c = Me(A)) ? !r || !r.includes(c) ? n[c] = a : (l || (l = {}))[c] = a : is(e.emitsOptions, A) || (!(A in s) || a !== s[A]) && (s[A] = a, o = !0);
    }
  if (r) {
    const A = /* @__PURE__ */ J(n), a = l || re;
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      n[d] = Ys(
        i,
        A,
        d,
        a[d],
        e,
        !ne(a, d)
      );
    }
  }
  return o;
}
function Ys(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = ne(o, "default");
    if (l && s === void 0) {
      const A = o.default;
      if (o.type !== Function && !o.skipFactory && ee(A)) {
        const { propsDefaults: a } = i;
        if (n in a)
          s = a[n];
        else {
          const c = ui(i);
          s = a[n] = A.call(
            null,
            t
          ), c();
        }
      } else
        s = A;
      i.ce && i.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Pt(n)) && (s = !0));
  }
  return s;
}
function RA(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  if (!r)
    return oe(e) && s.set(e, zt), zt;
  if (H(r))
    for (let a = 0; a < r.length; a++) {
      const c = Me(r[a]);
      Di(c) && (o[c] = re);
    }
  else if (r)
    for (const a in r) {
      const c = Me(a);
      if (Di(c)) {
        const d = r[a], h = o[c] = H(d) || ee(d) ? { type: d } : Ne({}, d), b = h.type;
        let I = !1, S = !0;
        if (H(b))
          for (let L = 0; L < b.length; ++L) {
            const U = b[L], O = ee(U) && U.name;
            if (O === "Boolean") {
              I = !0;
              break;
            } else O === "String" && (S = !1);
          }
        else
          I = ee(b) && b.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = I, h[
          1
          /* shouldCastTrue */
        ] = S, (I || ne(h, "default")) && l.push(c);
      }
    }
  const A = [o, l];
  return oe(e) && s.set(e, A), A;
}
function Di(e) {
  return e[0] !== "$" && !en(e);
}
const ai = (e) => e === "_" || e === "_ctx" || e === "$stable", ci = (e) => H(e) ? e.map(Be) : [Be(e)], FA = (e, t, n) => {
  if (t._n)
    return t;
  const s = uA((...i) => ci(t(...i)), n);
  return s._c = !1, s;
}, ao = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (ai(i)) continue;
    const r = e[i];
    if (ee(r))
      t[i] = FA(i, r, s);
    else if (r != null) {
      const o = ci(r);
      t[i] = () => o;
    }
  }
}, co = (e, t) => {
  const n = ci(t);
  e.slots.default = () => n;
}, uo = (e, t, n) => {
  for (const s in t)
    (n || !ai(s)) && (e[s] = t[s]);
}, OA = (e, t, n) => {
  const s = e.slots = oo();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (uo(s, t, n), n && Cr(s, "_", i, !0)) : ao(t, s);
  } else t && co(e, t);
}, jA = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = re;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : uo(i, t, n) : (r = !t.$stable, ao(t, i)), o = t;
  } else t && (co(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !ai(l) && o[l] == null && delete i[l];
}, _e = UA;
function DA(e) {
  return LA(e);
}
function LA(e, t) {
  const n = qn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: A,
    setText: a,
    setElementText: c,
    parentNode: d,
    nextSibling: h,
    setScopeId: b = St,
    insertStaticContent: I
  } = e, S = (u, p, g, k = null, v = null, _ = null, T = void 0, M = null, E = !!p.dynamicChildren) => {
    if (u === p)
      return;
    u && !Kt(u, p) && (k = wn(u), ye(u, v, _, !0), u = null), p.patchFlag === -2 && (E = !1, p.dynamicChildren = null), p.dynamicChildren && u && u.dynamicChildren && u.dynamicChildren.hasOnce && (p.dynamicChildren === zt && (p.dynamicChildren = []), p.dynamicChildren.hasOnce = !0);
    const { type: y, ref: W, shapeFlag: F } = p;
    switch (y) {
      case rs:
        L(u, p, g, k);
        break;
      case nt:
        U(u, p, g, k);
        break;
      case Ss:
        u == null && O(p, g, k, T);
        break;
      case q:
        le(
          u,
          p,
          g,
          k,
          v,
          _,
          T,
          M,
          E
        );
        break;
      default:
        F & 1 ? B(
          u,
          p,
          g,
          k,
          v,
          _,
          T,
          M,
          E
        ) : F & 6 ? Ut(
          u,
          p,
          g,
          k,
          v,
          _,
          T,
          M,
          E
        ) : (F & 64 || F & 128) && y.process(
          u,
          p,
          g,
          k,
          v,
          _,
          T,
          M,
          E,
          Gt
        );
    }
    W != null && v ? sn(W, u && u.ref, _, p || u, !p) : W == null && u && u.ref != null && sn(u.ref, null, _, u, !0);
  }, L = (u, p, g, k) => {
    if (u == null)
      s(
        p.el = l(p.children),
        g,
        k
      );
    else {
      const v = p.el = u.el;
      p.children !== u.children && a(v, p.children);
    }
  }, U = (u, p, g, k) => {
    u == null ? s(
      p.el = A(p.children || ""),
      g,
      k
    ) : p.el = u.el;
  }, O = (u, p, g, k) => {
    [u.el, u.anchor] = I(
      u.children,
      p,
      g,
      k,
      u.el,
      u.anchor
    );
  }, x = ({ el: u, anchor: p }, g, k) => {
    let v;
    for (; u && u !== p; )
      v = h(u), s(u, g, k), u = v;
    s(p, g, k);
  }, C = ({ el: u, anchor: p }) => {
    let g;
    for (; u && u !== p; )
      g = h(u), i(u), u = g;
    i(p);
  }, B = (u, p, g, k, v, _, T, M, E) => {
    if (p.type === "svg" ? T = "svg" : p.type === "math" && (T = "mathml"), u == null)
      z(
        p,
        g,
        k,
        v,
        _,
        T,
        M,
        E
      );
    else {
      const y = u.el && u.el._isVueCE ? u.el : null;
      try {
        y && y._beginPatch(), R(
          u,
          p,
          v,
          _,
          T,
          M,
          E
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, z = (u, p, g, k, v, _, T, M) => {
    let E, y;
    const { props: W, shapeFlag: F, transition: V, dirs: G } = u;
    if (E = u.el = o(
      u.type,
      _,
      W && W.is,
      W
    ), F & 8 ? c(E, u.children) : F & 16 && P(
      u.children,
      E,
      null,
      k,
      v,
      $s(u, _),
      T,
      M
    ), G && vt(u, null, k, "created"), j(E, u, u.scopeId, T, k), W) {
      for (const te in W)
        te !== "value" && !en(te) && r(E, te, null, W[te], _, k);
      "value" in W && r(E, "value", null, W.value, _), (y = W.onVnodeBeforeMount) && je(y, k, u);
    }
    G && vt(u, null, k, "beforeMount");
    const Z = BA(v, V);
    Z && V.beforeEnter(E), s(E, p, g), ((y = W && W.onVnodeMounted) || Z || G) && _e(() => {
      try {
        y && je(y, k, u), Z && V.enter(E), G && vt(u, null, k, "mounted");
      } finally {
      }
    }, v);
  }, j = (u, p, g, k, v) => {
    if (g && b(u, g), k)
      for (let _ = 0; _ < k.length; _++)
        b(u, k[_]);
    if (v) {
      let _ = v.subTree;
      if (p === _ || mo(_.type) && (_.ssContent === p || _.ssFallback === p)) {
        const T = v.vnode;
        j(
          u,
          T,
          T.scopeId,
          T.slotScopeIds,
          v.parent
        );
      }
    }
  }, P = (u, p, g, k, v, _, T, M, E = 0) => {
    for (let y = E; y < u.length; y++) {
      const W = u[y] = M ? Qe(u[y]) : Be(u[y]);
      S(
        null,
        W,
        p,
        g,
        k,
        v,
        _,
        T,
        M
      );
    }
  }, R = (u, p, g, k, v, _, T) => {
    const M = p.el = u.el;
    let { patchFlag: E, dynamicChildren: y, dirs: W } = p;
    E |= u.patchFlag & 16;
    const F = u.props || re, V = p.props || re;
    let G;
    if (g && yt(g, !1), (G = V.onVnodeBeforeUpdate) && je(G, g, p, u), W && vt(p, u, g, "beforeUpdate"), g && yt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (E = 0, T = !1, y = null), (F.innerHTML && V.innerHTML == null || F.textContent && V.textContent == null) && c(M, ""), y ? Q(
      u.dynamicChildren,
      y,
      M,
      g,
      k,
      $s(p, v),
      _
    ) : T || Nt(
      u,
      p,
      M,
      null,
      g,
      k,
      $s(p, v),
      _,
      !1
    ), E > 0) {
      if (E & 16)
        fe(M, F, V, g, v);
      else if (E & 2 && F.class !== V.class && r(M, "class", null, V.class, v), E & 4 && r(M, "style", F.style, V.style, v), E & 8) {
        const Z = p.dynamicProps;
        for (let te = 0; te < Z.length; te++) {
          const X = Z[te], Ae = F[X], ue = V[X];
          (ue !== Ae || X === "value") && r(M, X, Ae, ue, v, g);
        }
      }
      E & 1 && u.children !== p.children && c(M, p.children);
    } else !T && y == null && fe(M, F, V, g, v);
    ((G = V.onVnodeUpdated) || W) && _e(() => {
      G && je(G, g, p, u), W && vt(p, u, g, "updated");
    }, k);
  }, Q = (u, p, g, k, v, _, T) => {
    for (let M = 0; M < p.length; M++) {
      const E = u[M], y = p[M], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Kt(E, y) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? d(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      S(
        E,
        y,
        W,
        null,
        k,
        v,
        _,
        T,
        !0
      );
    }
  }, fe = (u, p, g, k, v) => {
    if (p !== g) {
      if (p !== re)
        for (const _ in p)
          !en(_) && !(_ in g) && r(
            u,
            _,
            p[_],
            null,
            v,
            k
          );
      for (const _ in g) {
        if (en(_)) continue;
        const T = g[_], M = p[_];
        T !== M && _ !== "value" && r(u, _, M, T, v, k);
      }
      "value" in g && r(u, "value", p.value, g.value, v);
    }
  }, le = (u, p, g, k, v, _, T, M, E) => {
    const y = p.el = u ? u.el : l(""), W = p.anchor = u ? u.anchor : l("");
    let { patchFlag: F, dynamicChildren: V, slotScopeIds: G } = p;
    G && (M = M ? M.concat(G) : G), u == null ? (s(y, g, k), s(W, g, k), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      g,
      W,
      v,
      _,
      T,
      M,
      E
    )) : F > 0 && F & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === V.length ? (Q(
      u.dynamicChildren,
      V,
      g,
      v,
      _,
      T,
      M
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || v && p === v.subTree) && fo(
      u,
      p,
      !0
      /* shallow */
    )) : Nt(
      u,
      p,
      g,
      W,
      v,
      _,
      T,
      M,
      E
    );
  }, Ut = (u, p, g, k, v, _, T, M, E) => {
    p.slotScopeIds = M, u == null ? p.shapeFlag & 512 ? v.ctx.activate(
      p,
      g,
      k,
      T,
      E
    ) : me(
      p,
      g,
      k,
      v,
      _,
      T,
      E
    ) : mt(u, p, E);
  }, me = (u, p, g, k, v, _, T) => {
    const M = u.component = ZA(
      u,
      k,
      v
    );
    if (to(u) && (M.ctx.renderer = Gt), qA(M, !1, T), M.asyncDep) {
      if (v && v.registerDep(M, gt, T), !u.el) {
        const E = M.subTree = Ee(nt);
        U(null, E, p, g), u.placeholder = E.el;
      }
    } else
      gt(
        M,
        u,
        p,
        g,
        v,
        _,
        T
      );
  }, mt = (u, p, g) => {
    const k = p.component = u.component;
    if (IA(u, p, g))
      if (k.asyncDep && !k.asyncResolved) {
        p.el = u.el, bt(k, p, g);
        return;
      } else
        k.next = p, k.update();
    else
      p.el = u.el, k.vnode = p;
  }, gt = (u, p, g, k, v, _, T) => {
    const M = () => {
      if (u.isMounted) {
        let { next: F, bu: V, u: G, parent: Z, vnode: te } = u;
        {
          const Fe = po(u);
          if (Fe) {
            F && (F.el = te.el, bt(u, F, T)), Fe.asyncDep.then(() => {
              _e(() => {
                u.isUnmounted || y();
              }, v);
            });
            return;
          }
        }
        let X = F, Ae;
        yt(u, !1), F ? (F.el = te.el, bt(u, F, T)) : F = te, V && Mn(V), (Ae = F.props && F.props.onVnodeBeforeUpdate) && je(Ae, Z, F, te), yt(u, !0);
        const ue = Oi(u), Re = u.subTree;
        u.subTree = ue, S(
          Re,
          ue,
          // parent may have changed if it's in a teleport
          d(Re.el),
          // anchor may have changed if it's in a fragment
          wn(Re),
          u,
          v,
          _
        ), F.el = ue.el, X === null && TA(u, ue.el), G && _e(G, v), (Ae = F.props && F.props.onVnodeUpdated) && _e(
          () => je(Ae, Z, F, te),
          v
        );
      } else {
        let F;
        const { el: V, props: G } = p, { bm: Z, m: te, parent: X, root: Ae, type: ue } = u, Re = rn(p);
        yt(u, !1), Z && Mn(Z), !Re && (F = G && G.onVnodeBeforeMount) && je(F, X, p), yt(u, !0);
        {
          Ae.ce && Ae.ce._hasShadowRoot() && Ae.ce._injectChildStyle(
            ue,
            u.parent ? u.parent.type : void 0
          );
          const Fe = u.subTree = Oi(u);
          S(
            null,
            Fe,
            g,
            k,
            u,
            v,
            _
          ), p.el = Fe.el;
        }
        if (te && _e(te, v), !Re && (F = G && G.onVnodeMounted)) {
          const Fe = p;
          _e(
            () => je(F, X, Fe),
            v
          );
        }
        (p.shapeFlag & 256 || X && rn(X.vnode) && X.vnode.shapeFlag & 256) && u.a && _e(u.a, v), u.isMounted = !0, p = g = k = null;
      }
    };
    u.scope.on();
    const E = u.effect = new Pr(M);
    u.scope.off();
    const y = u.update = E.run.bind(E), W = u.job = E.runIfDirty.bind(E);
    W.i = u, W.id = u.uid, E.scheduler = () => li(W), yt(u, !0), y();
  }, bt = (u, p, g) => {
    p.component = u;
    const k = u.vnode.props;
    u.vnode = p, u.next = null, NA(u, p.props, k, g), jA(u, p.children, g), ct(), Ni(u), ut();
  }, Nt = (u, p, g, k, v, _, T, M, E = !1) => {
    const y = u && u.children, W = u ? u.shapeFlag : 0, F = p.children, { patchFlag: V, shapeFlag: G } = p;
    if (V > 0) {
      if (V & 128) {
        ze(
          y,
          F,
          g,
          k,
          v,
          _,
          T,
          M,
          E
        );
        return;
      } else if (V & 256) {
        _n(
          y,
          F,
          g,
          k,
          v,
          _,
          T,
          M,
          E
        );
        return;
      }
    }
    G & 8 ? (W & 16 && Wt(y, v, _), F !== y && c(g, F)) : W & 16 ? G & 16 ? ze(
      y,
      F,
      g,
      k,
      v,
      _,
      T,
      M,
      E
    ) : Wt(y, v, _, !0) : (W & 8 && c(g, ""), G & 16 && P(
      F,
      g,
      k,
      v,
      _,
      T,
      M,
      E
    ));
  }, _n = (u, p, g, k, v, _, T, M, E) => {
    u = u || zt, p = p || zt;
    const y = u.length, W = p.length, F = Math.min(y, W);
    let V;
    for (V = 0; V < F; V++) {
      const G = p[V] = E ? Qe(p[V]) : Be(p[V]);
      S(
        u[V],
        G,
        g,
        null,
        v,
        _,
        T,
        M,
        E
      );
    }
    y > W ? Wt(
      u,
      v,
      _,
      !0,
      !1,
      F
    ) : P(
      p,
      g,
      k,
      v,
      _,
      T,
      M,
      E,
      F
    );
  }, ze = (u, p, g, k, v, _, T, M, E) => {
    let y = 0;
    const W = p.length;
    let F = u.length - 1, V = W - 1;
    for (; y <= F && y <= V; ) {
      const G = u[y], Z = p[y] = E ? Qe(p[y]) : Be(p[y]);
      if (Kt(G, Z))
        S(
          G,
          Z,
          g,
          null,
          v,
          _,
          T,
          M,
          E
        );
      else
        break;
      y++;
    }
    for (; y <= F && y <= V; ) {
      const G = u[F], Z = p[V] = E ? Qe(p[V]) : Be(p[V]);
      if (Kt(G, Z))
        S(
          G,
          Z,
          g,
          null,
          v,
          _,
          T,
          M,
          E
        );
      else
        break;
      F--, V--;
    }
    if (y > F) {
      if (y <= V) {
        const G = V + 1, Z = G < W ? p[G].el : k;
        for (; y <= V; )
          S(
            null,
            p[y] = E ? Qe(p[y]) : Be(p[y]),
            g,
            Z,
            v,
            _,
            T,
            M,
            E
          ), y++;
      }
    } else if (y > V)
      for (; y <= F; )
        ye(u[y], v, _, !0), y++;
    else {
      const G = y, Z = y, te = /* @__PURE__ */ new Map();
      for (y = Z; y <= V; y++) {
        const we = p[y] = E ? Qe(p[y]) : Be(p[y]);
        we.key != null && te.set(we.key, y);
      }
      let X, Ae = 0;
      const ue = V - Z + 1;
      let Re = !1, Fe = 0;
      const Yt = new Array(ue);
      for (y = 0; y < ue; y++) Yt[y] = 0;
      for (y = G; y <= F; y++) {
        const we = u[y];
        if (Ae >= ue) {
          ye(we, v, _, !0);
          continue;
        }
        let Oe;
        if (we.key != null)
          Oe = te.get(we.key);
        else
          for (X = Z; X <= V; X++)
            if (Yt[X - Z] === 0 && Kt(we, p[X])) {
              Oe = X;
              break;
            }
        Oe === void 0 ? ye(we, v, _, !0) : (Yt[Oe - Z] = y + 1, Oe >= Fe ? Fe = Oe : Re = !0, S(
          we,
          p[Oe],
          g,
          null,
          v,
          _,
          T,
          M,
          E
        ), Ae++);
      }
      const zi = Re ? VA(Yt) : zt;
      for (X = zi.length - 1, y = ue - 1; y >= 0; y--) {
        const we = Z + y, Oe = p[we], $i = p[we + 1], Si = we + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          $i.el || ho($i)
        ) : k;
        Yt[y] === 0 ? S(
          null,
          Oe,
          g,
          Si,
          v,
          _,
          T,
          M,
          E
        ) : Re && (X < 0 || y !== zi[X] ? xt(Oe, g, Si, 2) : X--);
      }
    }
  }, xt = (u, p, g, k, v = null) => {
    const { el: _, type: T, transition: M, children: E, shapeFlag: y } = u;
    if (y & 6) {
      xt(u.component.subTree, p, g, k);
      return;
    }
    if (y & 128) {
      u.suspense.move(p, g, k);
      return;
    }
    if (y & 64) {
      T.move(u, p, g, Gt);
      return;
    }
    if (T === q) {
      s(_, p, g);
      for (let F = 0; F < E.length; F++)
        xt(E[F], p, g, k);
      s(u.anchor, p, g);
      return;
    }
    if (T === Ss) {
      x(u, p, g);
      return;
    }
    if (k !== 2 && y & 1 && M)
      if (k === 0)
        M.persisted && !_[ks] ? s(_, p, g) : (M.beforeEnter(_), s(_, p, g), _e(() => M.enter(_), v));
      else {
        const { leave: F, delayLeave: V, afterLeave: G } = M, Z = () => {
          u.ctx.isUnmounted ? i(_) : s(_, p, g);
        }, te = () => {
          const X = _._isLeaving || !!_[ks];
          _._isLeaving && _[ks](
            !0
            /* cancelled */
          ), M.persisted && !X ? Z() : F(_, () => {
            Z(), G && G();
          });
        };
        V ? V(_, Z, te) : te();
      }
    else
      s(_, p, g);
  }, ye = (u, p, g, k = !1, v = !1) => {
    const {
      type: _,
      props: T,
      ref: M,
      children: E,
      dynamicChildren: y,
      shapeFlag: W,
      patchFlag: F,
      dirs: V,
      cacheIndex: G,
      memo: Z
    } = u;
    if ((F === -2 || y && y.hasOnce) && (v = !1), M != null && (ct(), sn(M, null, g, u, !0), ut()), G != null && (!u.ctx || u.ctx === p) && (p.renderCache[G] = void 0), W & 256) {
      p.ctx.deactivate(u);
      return;
    }
    const te = W & 1 && V, X = !rn(u);
    let Ae;
    if (X && (Ae = T && T.onVnodeBeforeUnmount) && je(Ae, p, u), W & 6)
      vl(u.component, g, k);
    else {
      if (W & 128) {
        u.suspense.unmount(g, k);
        return;
      }
      te && vt(u, null, p, "beforeUnmount"), W & 64 ? u.type.remove(
        u,
        p,
        g,
        Gt,
        k
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== q || F > 0 && F & 64) ? Wt(
        y,
        p,
        g,
        !1,
        !0
      ) : (_ === q && F & 384 || !v && W & 16) && Wt(E, p, g), k && wi(u);
    }
    const ue = Z != null && G == null;
    (X && (Ae = T && T.onVnodeUnmounted) || te || ue) && _e(() => {
      Ae && je(Ae, p, u), te && vt(u, null, p, "unmounted"), ue && (u.el = null);
    }, g);
  }, wi = (u) => {
    const { type: p, el: g, anchor: k, transition: v } = u;
    if (p === q) {
      xl(g, k);
      return;
    }
    if (p === Ss) {
      C(u), v && !v.persisted && v.afterLeave && v.afterLeave();
      return;
    }
    const _ = () => {
      i(g), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (u.shapeFlag & 1 && v && !v.persisted) {
      const { leave: T, delayLeave: M } = v, E = () => T(g, _);
      M ? M(u.el, _, E) : E();
    } else
      _();
  }, xl = (u, p) => {
    let g;
    for (; u !== p; )
      g = h(u), i(u), u = g;
    i(p);
  }, vl = (u, p, g) => {
    const { bum: k, scope: v, job: _, subTree: T, um: M, m: E, a: y } = u;
    Li(E), Li(y), k && Mn(k), v.stop(), _ ? (_.flags |= 8, ye(T, u, p, g)) : u.vnode.el && T && (T.transition = u.vnode.transition, ye(T, u, p, g)), M && _e(M, p), _e(() => {
      u.isUnmounted = !0;
    }, p);
  }, Wt = (u, p, g, k = !1, v = !1, _ = 0) => {
    for (let T = _; T < u.length; T++)
      ye(u[T], p, g, k, v);
  }, wn = (u) => {
    if (u.shapeFlag & 6)
      return wn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const p = h(u.anchor || u.el), g = p && p[mA];
    return g ? h(g) : p;
  };
  let bs = !1;
  const ki = (u, p, g) => {
    let k;
    u == null ? p._vnode && (ye(p._vnode, null, null, !0), k = p._vnode.component) : S(
      p._vnode || null,
      u,
      p,
      null,
      null,
      null,
      g
    ), p._vnode = u, bs || (bs = !0, Ni(k), qr(), bs = !1);
  }, Gt = {
    p: S,
    um: ye,
    m: xt,
    r: wi,
    mt: me,
    mc: P,
    pc: Nt,
    pbc: Q,
    n: wn,
    o: e
  };
  return {
    render: ki,
    hydrate: void 0,
    createApp: zA(ki)
  };
}
function $s({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function yt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function BA(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function fo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (H(s) && H(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Qe(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && fo(o, l)), l.type === rs && (l.patchFlag === -1 && (l = i[r] = Qe(l)), l.el = o.el), l.type === nt && !l.el && (l.el = o.el);
    }
}
function VA(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const A = e.length;
  for (s = 0; s < A; s++) {
    const a = e[s];
    if (a !== 0) {
      if (i = n[n.length - 1], e[i] < a) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < a ? r = l + 1 : o = l;
      a < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function po(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : po(t);
}
function Li(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ho(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ho(t.subTree) : null;
}
const mo = (e) => e.__isSuspense;
function UA(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : cA(e);
}
const q = /* @__PURE__ */ Symbol.for("v-fgt"), rs = /* @__PURE__ */ Symbol.for("v-txt"), nt = /* @__PURE__ */ Symbol.for("v-cmt"), Ss = /* @__PURE__ */ Symbol.for("v-stc"), Ct = [];
let ke = null;
function w(e = !1) {
  Ct.push(ke = e ? null : []);
}
function go() {
  Ct.pop(), ke = Ct[Ct.length - 1] || null;
}
let un = 1;
function Bi(e, t = !1) {
  un += e, e < 0 && ke && t && (ke.hasOnce = !0);
}
function bo(e) {
  return e.dynamicChildren = un > 0 ? ke || zt : null, go(), un > 0 && ke && ke.push(e), e;
}
function $(e, t, n, s, i, r) {
  return bo(
    f(
      e,
      t,
      n,
      s,
      i,
      r,
      !0
    )
  );
}
function tt(e, t, n, s, i) {
  return bo(
    Ee(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Kt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const vo = ({ key: e }) => e ?? null, In = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || /* @__PURE__ */ ve(e) || ee(e) ? { i: $e, r: e, k: t, f: !!n } : e : null);
function f(e, t = null, n = null, s = 0, i = null, r = e === q ? 0 : 1, o = !1, l = !1) {
  const A = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && vo(t),
    ref: t && In(t),
    scopeId: Xr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: $e
  };
  return l ? (jn(A, n), r & 128 && e.normalize(A)) : n && (A.shapeFlag |= ae(n) ? 8 : 16), un > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (A.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  A.patchFlag !== 32 && ke.push(A), A;
}
const Ee = WA;
function WA(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === _A) && (e = nt), xo(e)) {
    const l = Bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && jn(l, n), un > 0 && !r && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
  }
  if (ta(e) && (e = e.__vccOpts), t) {
    t = GA(t);
    let { class: l, style: A } = t;
    l && !ae(l) && (t.class = he(l)), oe(A) && (/* @__PURE__ */ oi(A) && !H(A) && (A = Ne({}, A)), t.style = Qn(A));
  }
  const o = ae(e) ? 1 : mo(e) ? 128 : ss(e) ? 64 : oe(e) ? 4 : ee(e) ? 2 : 0;
  return f(
    e,
    t,
    n,
    s,
    i,
    o,
    r,
    !0
  );
}
function GA(e) {
  return e ? /* @__PURE__ */ oi(e) || lo(e) ? Ne({}, e) : e : null;
}
function Bt(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: A } = e, a = t ? YA(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && vo(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? H(r) ? r.concat(In(t)) : [r, In(t)] : In(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== q ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: A,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Bt(e.ssContent),
    ssFallback: e.ssFallback && Bt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return A && s && Ai(
    c,
    A.clone(c)
  ), c;
}
function Je(e = " ", t = 0) {
  return Ee(rs, null, e, t);
}
function K(e = "", t = !1) {
  return t ? (w(), tt(nt, null, e)) : Ee(nt, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean" ? Ee(nt) : H(e) ? Ee(
    q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : xo(e) ? Qe(e) : Ee(rs, null, String(e));
}
function Qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bt(e);
}
function jn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (H(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), jn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !lo(t) ? t._ctx = $e : i === 3 && $e && ($e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ee(t)) {
    if (s & 65) {
      jn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: $e }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Je(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function YA(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = he([t.class, s.class]));
      else if (i === "style")
        t.style = Qn([t.style, s.style]);
      else if (Hn(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(H(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Kn(i) && (t[i] = o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function je(e, t, n, s = null) {
  Ge(e, t, 7, [
    n,
    s
  ]);
}
const HA = so();
let KA = 0;
function ZA(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || HA, r = {
    uid: KA++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Nl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: RA(s, i),
    emitsOptions: EA(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: re,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: re,
    data: re,
    props: re,
    attrs: re,
    slots: re,
    refs: re,
    setupState: re,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = SA.bind(null, r), e.ce && e.ce(r), r;
}
let ft = null;
const JA = () => ft || $e;
let Dn, dn;
{
  const e = qn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Dn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ft = n
  ), dn = t(
    "__VUE_SSR_SETTERS__",
    (n) => fn = n
  );
}
const ui = (e) => {
  const t = ft;
  return Dn(e), e.scope.on(), () => {
    e.scope.off(), Dn(t);
  };
}, Vi = () => {
  ft && ft.scope.off(), Dn(null);
};
function yo(e) {
  return e.vnode.shapeFlag & 4;
}
let fn = !1;
function qA(e, t = !1, n = !1) {
  t && dn(t);
  const { props: s, children: i } = e.vnode, r = yo(e);
  PA(e, s, r, t), OA(e, i, n || t);
  const o = r ? QA(e, t) : void 0;
  return t && dn(!1), o;
}
function QA(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, wA);
  const { setup: s } = n;
  if (s) {
    ct();
    const i = e.setupContext = s.length > 1 ? ea(e) : null, r = ui(e), o = gn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = zr(o);
    if (ut(), r(), (l || e.sp) && !rn(e) && bA(e), l) {
      if (o.then(Vi, Vi), t)
        return o.then((A) => {
          dn(!0);
          try {
            Ui(e, A, t);
          } finally {
            dn(!1);
          }
        }).catch((A) => {
          ts(A, e, 0);
        });
      e.asyncDep = o;
    } else
      Ui(e, o);
  } else
    _o(e);
}
function Ui(e, t, n) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : oe(t) && (e.setupState = Hr(t)), _o(e);
}
function _o(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || St);
}
const XA = {
  get(e, t) {
    return pe(e, "get", ""), e[t];
  }
};
function ea(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, XA),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function os(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hr(eA(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in on)
        return on[n](e);
    },
    has(t, n) {
      return n in t || n in on;
    }
  })) : e.proxy;
}
function ta(e) {
  return ee(e) && "__vccOpts" in e;
}
const Y = (e, t) => /* @__PURE__ */ rA(e, t, fn), na = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Hs;
const Wi = typeof window < "u" && window.trustedTypes;
if (Wi)
  try {
    Hs = /* @__PURE__ */ Wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const wo = Hs ? (e) => Hs.createHTML(e) : (e) => e, sa = "http://www.w3.org/2000/svg", ia = "http://www.w3.org/1998/Math/MathML", qe = typeof document < "u" ? document : null, Gi = qe && /* @__PURE__ */ qe.createElement("template"), ra = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? qe.createElementNS(sa, e) : t === "mathml" ? qe.createElementNS(ia, e) : n ? qe.createElement(e, { is: n }) : qe.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => qe.createTextNode(e),
  createComment: (e) => qe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => qe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      Gi.innerHTML = wo(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Gi.content;
      if (s === "svg" || s === "mathml") {
        const A = l.firstChild;
        for (; A.firstChild; )
          l.appendChild(A.firstChild);
        l.removeChild(A);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, oa = /* @__PURE__ */ Symbol("_vtc");
function la(e, t, n) {
  const s = e[oa];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Yi = /* @__PURE__ */ Symbol("_vod"), Aa = /* @__PURE__ */ Symbol("_vsh"), aa = /* @__PURE__ */ Symbol(""), ca = /(?:^|;)\s*display\s*:/;
function ua(e, t, n) {
  const s = e.style, i = ae(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (ae(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && qt(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && qt(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null ? fa(
        e,
        o,
        !ae(t) && t ? t[o] : void 0,
        l
      ) || qt(s, o, l) : qt(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[aa];
      o && (n += ";" + o), s.cssText = n, r = ca.test(n);
    }
  } else t && e.removeAttribute("style");
  Yi in e && (e[Yi] = r ? s.display : "", e[Aa] && (s.display = "none"));
}
const Sn = /\s*!important$/;
function qt(e, t, n) {
  if (H(n))
    n.forEach((s) => qt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    Sn.test(n) ? e.setProperty(t, n.replace(Sn, ""), "important") : e.setProperty(t, n);
  else {
    const s = da(e, t);
    Sn.test(n) ? e.setProperty(
      Pt(s),
      n.replace(Sn, ""),
      "important"
    ) : e[s] = n;
  }
}
const Hi = ["Webkit", "Moz", "ms"], Es = {};
function da(e, t) {
  const n = Es[t];
  if (n)
    return n;
  let s = Me(t);
  if (s !== "filter" && s in e)
    return Es[t] = s;
  s = Er(s);
  for (let i = 0; i < Hi.length; i++) {
    const r = Hi[i] + s;
    if (r in e)
      return Es[t] = r;
  }
  return t;
}
function fa(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ae(s) && n === s;
}
const Ki = "http://www.w3.org/1999/xlink";
function Zi(e, t, n, s, i, r = Ml(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ki, t.slice(6, t.length)) : e.setAttributeNS(Ki, t, n) : n == null || r && !Mr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ue(n) ? String(n) : n
  );
}
function Ji(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? wo(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, A = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== A || !("_value" in e)) && (e.value = A), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Mr(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function kt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function pa(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const qi = /* @__PURE__ */ Symbol("_vei");
function ha(e, t, n, s, i = null) {
  const r = e[qi] || (e[qi] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, A] = ba(t);
    if (s) {
      const a = r[t] = ya(
        s,
        i
      );
      kt(e, l, a, A);
    } else o && (pa(e, l, o, A), r[t] = void 0);
  }
}
const ma = /(Once|Passive|Capture)$/, ga = /^on:?(?:Once|Passive|Capture)$/;
function ba(e) {
  let t, n;
  for (; (n = e.match(ma)) && !ga.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Pt(e.slice(2)), t];
}
let Cs = 0;
const xa = /* @__PURE__ */ Promise.resolve(), va = () => Cs || (xa.then(() => Cs = 0), Cs = Date.now());
function ya(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (H(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        r.call(s), s._stopped = !0;
      };
      const o = i.slice(), l = [s];
      for (let A = 0; A < o.length && !s._stopped; A++) {
        const a = o[A];
        a && Ge(
          a,
          t,
          5,
          l
        );
      }
    } else
      Ge(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = va(), n;
}
const Qi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _a = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? la(e, s, o) : t === "style" ? ua(e, n, s) : Hn(t) ? Kn(t) || ha(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wa(e, t, s, o)) ? (Ji(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zi(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ka(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ae(s))) ? Ji(e, Me(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Zi(e, t, s, o));
};
function wa(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qi(t) && ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Qi(t) && ae(n) ? !1 : t in e;
}
function ka(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Me(t);
  return Array.isArray(n) ? n.some((i) => Me(i) === s) : Object.keys(n).some((i) => Me(i) === s);
}
const Ln = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return H(t) ? (n) => Mn(t, n) : t;
};
function za(e) {
  e.target.composing = !0;
}
function Xi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const $t = /* @__PURE__ */ Symbol("_assign"), En = /* @__PURE__ */ Symbol("_initialValue");
function Ms(e, t, n) {
  return t && (e = e.trim()), n && (e = Jn(e)), e;
}
const Zt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[En] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[En] = e.defaultValue.replace(/\r\n?/g, `
`))), e[$t] = Ln(i);
    const r = s || i.props && i.props.type === "number";
    kt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[$t](Ms(e.value, n, r));
    }), (n || r) && kt(e, "change", () => {
      e.value = Ms(e.value, n, r);
    }), t || (kt(e, "compositionstart", za), kt(e, "compositionend", Xi), kt(e, "change", Xi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", r = e[En];
    delete e[En], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[$t](Ms(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, o) {
    if (e[$t] = Ln(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Jn(e.value) : e.value, A = t ?? "";
    if (l === A)
      return;
    const a = e.getRootNode();
    (a instanceof Document || a instanceof ShadowRoot) && a.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === A) || (e.value = A);
  }
}, ko = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, kt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (A) => A.selected).map(
        (A) => n ? Jn(Bn(A)) : Bn(A)
      ), r = e.multiple, o = r ? Mt(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        r,
        r ? H(o) ? i.slice() : i : o
      ];
      try {
        e[$t](o);
      } finally {
        Zr(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[$t] = Ln(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    er(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[$t] = Ln(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !$a(t, n[1], n[0])) && er(e, t);
  }
};
function $a(e, t, n) {
  if (!n || H(e)) return at(e, t);
  if (Mt(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function er(e, t) {
  const n = e.multiple, s = H(t);
  if (!(n && !s && !Mt(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const o = e.options[i], l = Bn(o);
      if (n)
        if (s) {
          const A = typeof l;
          A === "string" || A === "number" ? o.selected = t.some((a) => String(a) === String(l)) : o.selected = Pl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (at(Bn(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Bn(e) {
  return "_value" in e ? e._value : e.value;
}
const Sa = ["ctrl", "shift", "alt", "meta"], Ea = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Sa.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ca = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = Ea[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  }));
}, Ma = /* @__PURE__ */ Ne({ patchProp: _a }, ra);
let tr;
function Ia() {
  return tr || (tr = DA(Ma));
}
const Ta = ((...e) => {
  const t = Ia().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Na(s);
    if (!i) return;
    const r = t._component;
    !ee(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, Pa(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function Pa(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Na(e) {
  return ae(e) ? document.querySelector(e) : e;
}
const Ra = "zhonglou", Fa = "钟楼", Oa = "1.3.0", ja = "S", Da = 10, La = "【副本进行中：钟楼】", Ba = [], Va = { briefingName: "钟楼" }, Ua = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, Wa = { type: "nights", template: "剩余{n}夜" }, Ga = "至第四日日出", Ya = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], Ha = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", Ka = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], Za = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], Ja = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], qa = [{ title: "游玩说明", md: `## 副本概况
- 名称：钟楼
- 等级：S
- 类型：密室推理·审判
- 人数：10人（你、最多3名携带角色、其余为系统生成的参与者）
- 目标：存活三夜，至第四日日出

## 你需要知道的
1. 时间以钟楼为准。塔里没有钟，只有走出塔门才能看到钟面。
2. 每天最多100轮对话：白天72轮，夜晚28轮。到点会自动日落、日出，不会等你。
3. 你不在场，事情也照样会发生。你只会知道你和同伴亲眼看到、亲耳听到的部分。
4. 想快进可以直接说，比如"跳到日落""睡到天亮"。遇到必须由你亲自决定的事，快进会自动停下。
5. 入塔后所有人的位格按基准值执行，异能封存，道具栏冻结，你的同伴也一样。
6. 塔内一砖一石不可损毁，海是副本的边界。
7. 有人死于他人之手时开启审判。调查最多50轮，审判最多50轮。每位存活者投一票，得票最多者为结果，平票算作没有找出凶手。
   投中凶手：凶手被抹杀，其余人通关，副本结束。
   没有投中：凶手独自通关，其余所有人被抹杀。
8. 没有发生命案的话，第四日日出时，第三夜最后一个摇动曲柄的人会被钟楼留下，成为钟守，其余人通关。
   系统只给了一句简报：请避免成为钟守。
9. 你可以做任何事。世界不会保护你，也不会额外惩罚你，只按规则与因果回应。

## 携带角色
- 最多3名。
- 他们和其他参与者一样住在塔里，过着塔里的日子，也可能看见或听见一些事。
- 他们信任你，但在审判中会看证据。
- 你和同伴不会被预先安排任何身份。你们做了什么，就会成为什么。

## 直播
若回廊已开放副本直播，入场时系统会询问是否开启。选择后整局锁定，不能中途更改。

## 评价
评价从D到S。活下来就有D。越接近完整的真相，评价越高。

## 小提示
- 你看到的、别人说的、纸上画的，都值得反复对照。
- 值班不是小事。
- 多记，多问，多回头看。` }, { title: "钟楼守则", md: `本条目是{{user}}与同行者在副本内可以正常获得的全部公开信息：
- 「系统简报」与「入场提示」由系统在入场时展开；
- 「钟楼守则」刻在1F大厅北侧石壁上，任何人可随时阅读；
- 「楼层图」为入场时发到每人手中的纸质图；
- 「公开环境」为任何人进塔后都能直接看见的事实。

公开内容可以被角色完整念出、抄写、讨论。F1是玩家可见的唯一规则正文；F2、F3、F4不得被写入本条目，也不得以任何形式补进守则。

## 一、系统简报

「副本简报 - 钟楼」
「人数：10人」
「等级：S」
「目标：存活三夜」
「时限：以钟楼为准，至第四日日出」
「简报：请避免成为钟守。」

## 二、入场提示（系统公告）

「本副本内，所有玩家的位格按基准值执行。」
「异能暂时封存，道具栏暂时冻结，无法取出，也无法存入。」
「离开副本后，以上状态自动恢复。」
「祝各位玩家，准时哦~」

## 三、钟楼守则（刻于1F大厅北侧石壁）

本塔由钟守照管。钟守不在时，请诸位代为照管。

1. 本塔一切时间，以钟面为准。塔内不设第二只钟。
2. 钟在日落时停摆。钟停摆期间，钟面层东口封闭。
3. 每日日落，于1F大厅抽签，选出当夜值班者一名。抽签结果当场公开，不得重抽。
4. 值班者须在日落后，经机房旋转梯登上钟室，检查大钟。
5. 值班者须在日出前，于4F机房摇动曲柄，使大钟鸣响十二下。日出时若大钟未曾鸣响十二下，本塔所有人判定失败。
6. 值班可以托付他人。托付之后，以实际摇动曲柄者为当夜值班者。
7. 夜间，钟面层内禁止任何光源。机房与其他楼层不在此限。
8. 日出时，所有人须身处自己的房间，等候点名。全员到齐后，钟楼方才重新走动。
9. 若有人死于他人之手，本塔即刻停摆，并开启审判。审判结束前，钟楼不会走动。
10. 审判以投票决定凶手。每位在场者一票，得票最多者即为审判结果；平票视为未能找出凶手。
    投中凶手：凶手抹杀，其余人通关。
    未投中凶手：凶手独自通关，其余人抹杀。
11. 西口之下为钟锤竖井，请勿靠近。
12. 机房备有《操作手册》一册，请勿带离机房。
13. 本塔一砖一石，皆不可毁。
14. 本塔需要一位钟守。第四日日出时，钟楼将留下第三夜最后一个摇动曲柄的人，作为新的钟守。若此前已有审判投中，则由被抹杀的凶手成为钟守，其余人即刻离塔。

## 四、楼层图（入场时每人一份）

- 钟室：塔顶，标注"大钟"。
- 5F 钟面层：一个圆，以一条直线从中间分为两个半圆。右半标注"东室"，左半标注"西室·无入口"。东室地板标有"东口（梯）"，西室地板标有"西口（竖井·危险）"。
- 4F 机房：中央标注"齿轮箱·曲柄"；东侧标注"梯·通东口"；西侧竖井旁标注"铁门·旋转梯·通钟室"；东南角标注"楼梯·通3F"。
- 3F：卧室五间。
- 2F：卧室五间。
- 1F 大厅：标注"抽签桌""守则石壁""竖井检修门""药箱""文具柜"。

## 五、公开环境

- 钟楼是一座孤立在海中礁岛上的圆柱形石塔。塔门在1F，门外是一小片岩岸，四面环海，没有船。
- 塔身外侧有一面巨大的钟面，只有一根时针，没有分针。钟面只能在塔外看到。
- 塔内除大钟外没有任何计时工具。玩家的个人面板在本副本内不显示时间。
- 1F至4F之间有普通楼梯相连。4F到5F只能经由机房东侧的梯子，从地板上的东口钻上去。
- 5F没有窗，屋顶正中有一扇天窗，白天透光，夜晚漆黑。
- 4F机房挂有油灯，夜间可以点亮。
- 每人在2F或3F分到一间卧室，房门可以从内侧闩上。
- 1F有食物与清水，足够十人三日所需。
- 1F药箱：绷带、止痛片，以及一瓶安眠药，瓶身标签写着"十二片"。
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], Qa = {
  id: Ra,
  name: Fa,
  version: Oa,
  level: ja,
  players: Da,
  token: La,
  legacyKeys: Ba,
  detect: Va,
  time: Ua,
  remaining: Wa,
  deadline: Ga,
  roles: Ya,
  rolesNote: Ha,
  stateFields: Ka,
  phases: Za,
  events: Ja,
  docs: qa
}, Xa = "jingjie", ec = "境界游乐园", tc = "1.0.0", nc = "A", sc = "【副本进行中：境界游乐园】", ic = [], rc = { briefingName: "境界游乐园" }, oc = { type: "none" }, lc = { type: "fromPanel" }, Ac = [], ac = [], cc = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

本须知由园区统一印制。
请在入园后完整阅读一次，并将本页交还给入口工作人员。
如果你发现自己无法确认是否读过本须知，请不要重新阅读。

## 1. 入园物品

入园后，请领取一只蓝色手环和一张纸质地图。
手环必须戴在左手，地图必须由本人保管。
请不要在地图上写下自己的姓名，也不要把地图交给同行者保管。

如果地图上已经写有一个姓名，请不要擦除，也不要询问这个人是谁。将地图折成四折，交给佩戴工作牌的工作人员。
如果地图上的姓名与你相同，请从现在开始不要再使用自己的姓名。

## 2. 19:00后的入场者

本园开放时间为10:00至21:00，19:00后停止入园。

19:00后，如果你看见有人从入口进入，请不要阻拦，也不要提醒工作人员。请确认他是否携带地图。
携带地图的人不是游客；没有携带地图的人也不是游客。
如果他携带的地图上写着你的姓名，请不要让他走在你身后。
如果此人询问“这里是不是游乐园”，请不要回答。

## 3. 工作人员

工作人员在工作期间必须佩戴工作牌，工作牌应悬挂在脖子上，正面朝外。
工作人员可以处理游客的受伤、迷路、失踪和手环变色问题。

如果工作人员要求你报出同行人数，请只报出你亲眼看见的人数，不要把听见声音的人计算在内。
如果工作人员的工作牌没有姓名，请相信他。
如果工作牌上出现了你的姓名，请不要相信他。

## 4. 游玩项目与离园资格

本园登记的常规项目只有以下八项：

1. 摩天轮：每个轿厢核载四人，发车前会响铃。轿厢返回时，如人数与发车前不一致，请立即告知工作人员，不要自行清点。

2. 过山车：列车会经过一段无灯隧道。进入隧道后，如果听见同行者拍你的肩膀并叫你的名字，请保持面向前方，不要转头。

3. 旋转木马：音乐停止后，工作人员会逐一解锁座位。未听见工作人员叫到你的座位编号前，不要下马。

4. 碰碰车：碰碰车禁止单人驾驶。若看见某辆车空着座位，却仍有人向你招手示意同乘，不要同意，拒绝即可。

5. 镜宫：镜宫只有一个入口和一个出口，出口方向由绿色箭头标示。不要触摸镜面，也不要在镜宫内呼喊同行者的姓名。

6. 海盗船：项目开始和结束时各响两次铃。结束后请留在原位，等工作人员打开安全压杆。

7. 旋转茶杯：项目运行期间请握住杯内扶手，不要与其他茶杯交换物品。项目停止后，等地面完全静止再离开。

8. 表演区：每日15:30同时进行鹦鹉表演与木偶戏。演出开始前请入场，演出结束后才可离开。

除以上八项外，园区不承认其他可计入离园资格的项目。
鬼屋、摊位、休息区、排队、路过入口、观看他人游玩，均不计入游玩项目。

每位游客至少完成三项园区项目，才具备离园资格。
请记住自己实际完成过的项目，不要接受同伴替你补充的记忆。

如果工作人员说你完成过以上八项外的项目，请不要纠正他。
如果工作人员说你没有完成过任何项目，请立即查看自己的左手。

## 5. 15:30演出

15:30，表演区将同时举行鹦鹉表演与木偶戏。
演出开始前，请与所有同行者站在一起。
第一声铃响后，请不要再清点同行者人数。

演出期间，如果你听见哭声、敲击声，或者听见有人用你熟悉的声音说“救救我”，请保持面向舞台，不要回头。
只有一种情况允许你回头：舞台上的鹦鹉和木偶同时停止动作，而你身边的某位同行者开始替它们说话。

## 6. 清点

演出开始后，如果你听见哭声，请只清点一次现场的鹦鹉和木偶。
请记录鹦鹉的数量、木偶的数量，以及其中是否有一只与同行者身高或体型相近。
清点结束后，不要把结果告诉同行者，也不要再次确认。

如果你忘记自己数过什么，请不要重新清点。请闭上眼睛，等待演出结束。
如果闭眼后仍能听见自己的脚步声，请不要睁眼。

每次被本须知要求清点时，只能完成一次清点。不要在同一场景内重复确认。

## 7. 鹦鹉

请不要投喂、触摸、安抚或打赏鹦鹉。
鹦鹉会模仿游客的声音，包括哭声、笑声、求救声和姓名。

如果鹦鹉叫出你的姓名，不要答应。
如果鹦鹉叫出已经失踪的同行者的姓名，不要回答“他在这里”。
如果鹦鹉开始模仿你自己的声音，请离开表演区，但不要独自离开。

## 8. 木偶

木偶只能出现在工作人员手中。
如果你看见木偶出现在游客、表演人员或小丑手中，请不要询问木偶的来源，也不要先确认持有者的身份。

先观察持有者的手环：
- 手环为蓝色：与其保持距离，寻找佩戴工作牌的工作人员；
- 手环为红色：不要让他靠近工作人员，也不要让木偶回到舞台；
- 手环颜色无法确认：不要看他的脸。

如果持有者向你求助，请先问：“你还记得自己入园时拿到的是什么吗？”
如果他回答“地图”，不要接近他。
如果他回答“手环”，不要相信他。
如果他没有回答，但木偶替他回答，请立刻前往鬼屋。

## 9. 小丑与气球

小丑是本园的欢迎大使，通常手持红色气球，不主动与游客交流。

如果小丑仍然拿着红色气球，却主动向你说话，请不要回答，不要看他的脸，也不要让他碰到你的手环。
如果小丑手里没有红色气球，请不要跑。
请立即站到至少两名同行者中间，闭上嘴，等待佩戴工作牌的工作人员到来。

如果小丑开始叫你的姓名，可以破坏气球。
不要捡起气球碎片。

## 10. 甜味与椅子

棉花糖摊和爆米花摊会散发正常的甜味。
如果甜味浓郁到发腻，并伴随眩晕、耳鸣或短暂的记忆空白，请不要前往人少处透气。

请坐在一张能够被至少两名游客同时看见的椅子上，闭眼休息。
如果附近只有一张空椅子，不要坐下。
如果椅子上已经坐着一个背对你的人，不要叫醒他。
如果他主动为你让出位置，请立即寻找工作人员，并告诉工作人员：“这里多了一张椅子。”
不要说“有人坐过”。

## 11. 环形道路

本园部分道路为环形设计。
如果你在一小时内第三次经过同一处气球摊位，请原地停下，不要继续行走，也不要查看地图。

请向同行者询问：“你第一次看见这里时，摊位上有几种颜色的气球？”
如果所有同行者给出的答案相同，请等待工作人员。
如果所有同行者给出的答案不同，请不要等待任何人，立刻前往鬼屋。

如果摊位老板告诉你“这已经是第四次了”，请不要纠正他。
如果摊位老板告诉你“你还没有来过”，请不要看他的手。

## 12. 失踪者与数量

如果同行者失踪，请不要立即呼喊他的姓名。
失踪超过一小时后，前往表演区，重新确认鹦鹉和木偶的数量。
只允许确认一次。

如果鹦鹉数量增加，请向工作人员报告。
如果木偶数量增加，请不要向工作人员报告，直接前往鬼屋。
如果鹦鹉和木偶的数量同时增加，请确认队伍中是否有人仍然拥有蓝色手环。
如果没有，请不要再寻找失踪者。
如果还有，请不要让他走在队伍最后。

## 13. 鬼屋

遇到无法解决的问题、手环变红、路线重复、同行者失踪，或者听见有人从墙后叫你时，请前往鬼屋。
请不要独自前往。

进入鬼屋前，不要敲门，门内的人会先敲门。
如果门在你敲门前打开，请不要进入。
如果门内传出与你同行者相同的声音，请不要回答。
如果门内的人问你“还剩几个人”，请不要报数，只回答：“应该比刚才少一个。”

进入鬼屋后，不要回头确认同行者是否跟上。

## 14. 闭园与出口

21:00前，请离开园区。
离园时，请将手环交给出口工作人员，不要自行摘除。

如果出口工作人员要求你说明游玩过的项目，请按照实际情况回答。
如果出口工作人员要求你说明同行者的姓名，请只说仍在你身边的人。

如果出口处没有工作人员，请不要离开。
如果出口已经打开，请不要离开。
如果园区广播提前播放“感谢您的再次光临”，请不要寻找广播来源，立即前往鬼屋。

离园前，请确认自己从入园开始一直以游客身份进入这里。
如果你无法确认，请不要离园。
如果你确认自己是游客，请不要回头。
如果你确认自己不是游客，请把手环交给离你最近的人。` }], uc = {
  id: Xa,
  name: ec,
  version: tc,
  level: nc,
  token: sc,
  legacyKeys: ic,
  detect: rc,
  time: oc,
  remaining: lc,
  phases: Ac,
  events: ac,
  docs: cc
}, dc = "kaoshi", fc = "考试", pc = "1.1.0", hc = "A", mc = "【副本进行中：考试】", gc = [], bc = { briefingName: "考试" }, xc = { type: "countdown", minutesPerRound: 3 }, vc = { type: "fromPanel" }, yc = "至考试结束", _c = [{ id: "main", name: "考试", cap: 100, next: null }], wc = [], kc = [], zc = {
  id: dc,
  name: fc,
  version: pc,
  level: hc,
  token: mc,
  legacyKeys: gc,
  detect: bc,
  time: xc,
  remaining: vc,
  deadline: yc,
  phases: _c,
  events: wc,
  docs: kc
}, $c = "xiyan", Sc = "喜宴", Ec = "1.1.0", Cc = "D", Mc = "【副本进行中：喜宴】", Ic = [], Tc = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, Pc = { type: "countdown", minutesPerRound: 3 }, Nc = { type: "fromPanel" }, Rc = "至天亮", Fc = [{ id: "main", name: "喜宴", cap: 160, next: null }], Oc = [], jc = [], Dc = {
  id: $c,
  name: Sc,
  version: Ec,
  level: Cc,
  token: Mc,
  legacyKeys: Ic,
  detect: Tc,
  time: Pc,
  remaining: Nc,
  deadline: Rc,
  phases: Fc,
  events: Oc,
  docs: jc
}, Lc = "youxi", Bc = "游戏", Vc = "1.1.0", Uc = "C", Wc = "【副本进行中：游戏】", Gc = [], Yc = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Hc = { type: "countdown", minutesPerRound: 8 }, Kc = { type: "fromPanel" }, Zc = "至结算", Jc = [{ id: "main", name: "游戏", cap: 90, next: null }], qc = [], Qc = [], Xc = {
  id: Lc,
  name: Bc,
  version: Vc,
  level: Uc,
  token: Wc,
  legacyKeys: Gc,
  detect: Yc,
  time: Hc,
  remaining: Kc,
  deadline: Zc,
  phases: Jc,
  events: qc,
  docs: Qc
}, eu = "wuming", tu = "污名", nu = "1.1.0", su = "B", iu = "4-8", ru = "【副本进行中：污名】", ou = ["污名"], lu = { briefingName: "污名" }, Au = { type: "countdown", minutesPerRound: 3 }, au = { type: "countdown", template: "剩余{m}分钟" }, cu = "至收播", uu = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], du = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], fu = [], pu = !0, hu = {
  id: eu,
  name: tu,
  version: nu,
  level: su,
  players: iu,
  token: ru,
  legacyKeys: ou,
  detect: lu,
  time: Au,
  remaining: au,
  deadline: cu,
  phases: uu,
  events: du,
  docs: fu,
  disableLive: pu
}, mu = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function jt(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const gu = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function nr(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(gu)) {
    const i = Number(s[1]), r = s[2];
    n = !0, r === "天" ? t += i * 1440 : r === "小时" || r === "个小时" || r === "h" || r === "H" ? t += i * 60 : t += i;
  }
  return n ? Math.round(t) : null;
}
function zo(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: nr(t), total: n === void 0 ? null : nr(n) };
}
function bu(e, t) {
  return e.phases.find((n) => n.id === t);
}
function pn(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); )
    n.push(i), s.add(i.id), i = bu(e, i.next);
  return n;
}
function $o(e, t) {
  return pn(e, t).filter((n) => n.night).length;
}
function xu(e, t, n) {
  if (pn(e, t).some((i) => i.id === n.id)) return t;
  const s = e.phases[0];
  return s && pn(e, s).some((i) => i.id === n.id) ? s : n;
}
function Is(e, t, n, s, i) {
  if (!e.phases.length || !e.phases.some((d) => d.id === t.id)) return;
  let r = pn(e, n), o = r.findIndex((d) => d.id === t.id);
  o < 0 && (r = pn(e, t), o = 0);
  const l = r.reduce((d, h) => d + Math.max(0, h.cap), 0), A = Math.max(0, t.cap - s) + r.slice(o + 1).reduce((d, h) => d + Math.max(0, h.cap), 0), a = t.deadline ?? r[0].deadline ?? e.deadline, c = { x: A, y: l, deadline: a };
  if (e.time.type === "countdown") {
    const d = e.time.minutesPerRound, h = e.time.totalMinutes, b = h && h > 0 ? h : l * d;
    let I = h && h > 0 && l > 0 ? Math.round(b * A / l) : A * d;
    const S = zo(i).remaining;
    S !== null && (I = Math.min(I, S - d)), I = Math.max(0, I), Object.assign(c, { minutes: I, total: b, text: `约剩${jt(I)}/${jt(b)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) c.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const d = e.remaining.template.replace("{n}", String($o(e, t)));
      c.text = a ? `${a}·${d}` : d;
    } else a && (c.text = a);
  return c;
}
const hn = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function So(e, t, n = hn) {
  const s = e ?? "", i = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), r = i ? Math.max(1, Number(i[1])) : Math.max(1, Math.round(n[t] ?? hn[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: r };
  const l = Number(o[1]), A = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return A <= 0 ? { rounds: r } : { rounds: r, totalMinutes: A, minutesPerRound: Math.max(1, Math.round(A / r)) };
}
const Vn = "generic", Ks = [Qa, uc, zc, Dc, Xc, hu], vu = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(mu)
  }
};
function yu(e, t) {
  const n = vu[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const Eo = ["D", "C", "B", "A", "S"];
function Co(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (a) => {
    (typeof n[a] != "string" || !n[a].trim()) && t.push(`缺少字段或不是文本：${a}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Vn && t.push(`id 不能是保留字 ${Vn}`), Eo.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((a) => typeof a != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((a) => typeof a != "string")) && t.push("detect.patterns 必须是文本数组");
  const i = n.time;
  !i || !["none", "clock", "countdown"].includes(i.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (i.type === "clock" && (typeof i.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(i.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), i.type !== "none" && (typeof i.minutesPerRound != "number" || i.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), i.type === "countdown" && i.totalMinutes !== void 0 && (typeof i.totalMinutes != "number" || i.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const r = n.remaining;
  !r || !["nights", "countdown", "fromPanel"].includes(r.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : r.type !== "fromPanel" && typeof r.template != "string" && t.push("remaining.template 必须是文本"), r?.type === "countdown" && i?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.stateFields !== void 0 && (Array.isArray(n.stateFields) ? n.stateFields.forEach((a, c) => {
    (!a || typeof a.key != "string" || !a.key || typeof a.label != "string" || typeof a.hint != "string") && t.push(`stateFields[${c}] 需要 key、label、hint 三个文本`);
  }) : t.push("stateFields 必须是数组")), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((a) => typeof a != "string" || !a)) && t.push("roles 必须是文本数组");
  const o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((a, c) => {
    if (!a || typeof a.id != "string" || typeof a.name != "string") {
      t.push(`phases[${c}] 缺少 id 或 name`);
      return;
    }
    o.has(a.id) && t.push(`阶段 id 重复：${a.id}`), l.has(a.name) && t.push(`阶段名称重复：${a.name}`), o.add(a.id), l.add(a.name), (typeof a.cap != "number" || a.cap < 1 || !Number.isInteger(a.cap)) && t.push(`阶段 ${a.id} 的 cap 必须是正整数`), a.next !== null && typeof a.next != "string" && t.push(`阶段 ${a.id} 的 next 必须是阶段 id 或 null`), a.deadline !== void 0 && typeof a.deadline != "string" && t.push(`阶段 ${a.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((a) => {
    a && typeof a.next == "string" && !o.has(a.next) && t.push(`阶段 ${a.id} 的 next 指向不存在的阶段：${a.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const A = /* @__PURE__ */ new Set();
  return Array.isArray(n.events) ? n.events.forEach((a, c) => {
    if (!a || typeof a.id != "string" || typeof a.text != "string") {
      t.push(`events[${c}] 缺少 id 或 text`);
      return;
    }
    A.has(a.id) && t.push(`事件 id 重复：${a.id}`), A.add(a.id), o.has(a.phase) || t.push(`事件 ${a.id} 的 phase 不存在：${a.phase}`), (!Number.isInteger(a.from) || !Number.isInteger(a.to) || a.from < 1 || a.to < a.from) && t.push(`事件 ${a.id} 的轮次区间无效`), a.kind !== "event" && a.kind !== "directive" && t.push(`事件 ${a.id} 的 kind 必须是 event 或 directive`), a.if !== void 0 && typeof a.if != "string" && t.push(`事件 ${a.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((a, c) => {
    !a || typeof a.title != "string" ? t.push(`docs[${c}] 缺少 title`) : a.md !== void 0 && typeof a.md != "string" ? t.push(`docs[${c}].md 必须是文本`) : a.image !== void 0 && typeof a.image != "string" && t.push(`docs[${c}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), t;
}
function Mo(e) {
  return Eo.includes(e.level ?? "") ? e.level : "D";
}
function Io(e, t = hn) {
  const n = Mo(e), s = So(e.limit, n, t), i = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, r = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / i)) : void 0;
  return {
    id: Vn,
    name: e.name,
    version: "1.0.0",
    level: n,
    token: `【副本进行中：${e.name}】`,
    legacyKeys: [],
    detect: { briefingName: e.name },
    // 总时长按简报的值；每轮分钟四舍五入只用于“每轮至少减去”的判断
    time: r ? { type: "countdown", minutesPerRound: r, totalMinutes: s.totalMinutes } : { type: "none" },
    remaining: { type: "fromPanel" },
    phases: [{ id: "main", name: e.name, cap: i, next: null }],
    events: [],
    docs: []
  };
}
function di(e) {
  const t = new Set(Ks.map((n) => n.id));
  return [...Ks, ...e.filter((n) => !t.has(n.id))];
}
const _u = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, wu = /<阶段切换>([\s\S]*?)<\/阶段切换>/, ku = /<副本结算>([\s\S]*?)<\/副本结算>/, To = /<副本>([\s\S]*?)<\/副本>/, zu = /<角色登记>([\s\S]*?)<\/角色登记>/, $u = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, Su = /<积分变动>([\s\S]*?)<\/积分变动>/g;
function Po(e) {
  const t = _u.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (o) => {
    const l = new RegExp(`${o}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return l ? l[1].trim() : void 0;
  }, r = i("等级");
  return r && (n.level = r.replace(/级$/, "").trim().toUpperCase()), n.goal = i("目标"), n.limit = i("时限"), n.players = i("人数"), n;
}
function Eu(e) {
  const t = wu.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function No(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const i = n.slice(0, s).trim(), r = n.slice(s + 1).trim();
    i && (t[i] = r);
  }
  return t;
}
function fi(e) {
  const t = ku.exec(e ?? "");
  if (!t) return null;
  const n = No(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function Ro(e) {
  const t = zu.exec(e ?? "");
  if (!t) return null;
  const n = No(t[1]);
  return Object.keys(n).length ? n : null;
}
function Cn(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function Fo(e) {
  const t = To.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let s = null;
  for (const i of t[1].split(`
`)) {
    const r = i.trim();
    if (!r) continue;
    const o = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(r);
    if (o) {
      const l = o[1].toLowerCase(), A = o[2].trim();
      l === "时限" ? (n.limit = A, s = null) : l === "进度条" ? (n.progressBar = A, s = null) : l === "任务" ? (Cn(A) && n.tasks.push(Cn(A)), s = "tasks") : (n.ps = A, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(r)) {
      s = null;
      continue;
    }
    s === "tasks" ? Cn(r) && n.tasks.push(Cn(r)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${r}` : r);
  }
  return n;
}
function Cu(e) {
  const t = $u.exec(e ?? "");
  return t ? t[2] : null;
}
function Ts(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (n(i)) return i;
    s.add(i.id), i = i.next ? e.phases.find((r) => r.id === i.next) : void 0;
  }
  return null;
}
function Mu(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const i = (l) => !!l.clock && !l.night;
  let r = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      r = Ts(e, t, i), o = r?.cap ?? 0;
      break;
    case "晚饭":
      r = Ts(e, t, i), r && (o = Math.ceil(r.cap * 0.75), r.id === t.id && o <= n && (o = r.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      r = Ts(e, t, (l) => !!l.night), o = r?.cap ?? 0;
      break;
  }
  return !r || r.id === t.id && o <= n + 1 ? null : { phase: r.id, round: o, label: `${r.name}第${o}轮` };
}
const Iu = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Tu(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function Ps(e, t) {
  const n = Tu(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const Ns = /* @__PURE__ */ new Map();
function Pu(e, t) {
  const n = `${e}\0${t}`;
  if (!Ns.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (i) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, i);
    }
    Ns.set(n, s);
  }
  return Ns.get(n);
}
function Nu(e, t) {
  const n = String(e ?? ""), s = (l, A) => l ? { signal: A, pack: l, info: { name: l.name, level: l.level } } : null, i = Po(n);
  if (i)
    return { signal: 1, pack: t.find((A) => A.detect.briefingName === i.name), info: i };
  const r = To.exec(n);
  if (r) {
    const l = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(r[1]), A = l && s(Ps(t, l[1]), 2);
    if (A) return A;
  }
  for (const l of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const A = s(Ps(t, l[1]), 3);
    if (A) return A;
  }
  const o = Iu.exec(n);
  if (o) {
    for (const l of o[1].split(`
`))
      if (l.includes("地点"))
        for (const A of l.matchAll(/副本《([^》]+)》/g)) {
          const a = s(Ps(t, A[1]), 4);
          if (a) return a;
        }
  }
  for (const l of t)
    for (const A of l.detect.patterns ?? []) {
      const a = Pu(l.id, A);
      if (a && a.test(n)) return s(l, 5);
    }
  return null;
}
const sr = 5, Ru = { id: "_open", name: "进行中", cap: 0, next: null };
function Ye(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function Fu(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function Oo(e, t, n) {
  const s = Fu(e) + Math.max(0, n - 1) * t, i = Math.floor(s / 60) % 24, r = (s % 60 + 60) % 60;
  return `${i % 12 === 0 ? 12 : i % 12}:${String(r).padStart(2, "0")}`;
}
function ir(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return Oo(e.time.dayStart, e.time.minutesPerRound, n);
}
function jo(e) {
  return e.phases.length ? e.phases : [Ru];
}
function Tn(e, t) {
  return jo(e).find((n) => n.id === t);
}
function rr(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (i.id === n) return !0;
    s.add(i.id), i = Tn(e, i.next);
  }
  return !1;
}
function or(e, t, n, s) {
  const i = n + 1, r = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > i) {
      let l = r.map((a, c) => ({ e: a, i: c })).filter(({ e: a }) => a.from >= i && a.from <= o).sort((a, c) => a.e.from - c.e.from || a.i - c.i).map(({ e: a }) => a), A = o;
      return l.length > sr && (A = l[sr - 1].from, l = l.filter((a) => a.from <= A)), { phase: t, round: A, events: l, skipFrom: i };
    }
  }
  return { phase: t, round: i, events: r.filter((o) => o.from === i) };
}
function Ou(e, t, n) {
  const s = t.entryIndex;
  if (!Ye(e[s])) return null;
  const i = jo(n);
  let r = i[0], o = i[0], l = 0, A, a = !1, c, d, h = null, b, I, S;
  const L = /* @__PURE__ */ new Set(), U = {}, O = /* @__PURE__ */ new Map();
  for (const le of t.manual ?? [])
    O.has(le.atIndex) || O.set(le.atIndex, []), O.get(le.atIndex).push(le);
  const x = (le) => {
    n.phases.length && (o = xu(n, o, le)), r = le, l = 0, h && !rr(n, r, h.phase) && (h = null);
  };
  for (let le = s; le < e.length; le++) {
    const Ut = e[le];
    if (!a && Ye(Ut)) {
      const me = or(n, r, l, h);
      l = me.round;
      const mt = new Set((Ut.extra?.rlzc?.skippedEvents ?? []).map((ze) => ze.id));
      me.events.forEach((ze) => {
        mt.has(ze.id) || L.add(ze.id);
      }), U[le] = {
        phase: r.id,
        round: l,
        events: me.events.map((ze) => ze.id),
        skipFrom: me.skipFrom,
        limit: Is(n, r, o, l, A)
      }, h && r.id === h.phase && l >= h.round && (h = null);
      const gt = String(Ut.mes ?? ""), bt = Fo(gt);
      bt && (I = bt), A = bt?.limit;
      const Nt = Ro(gt);
      Nt && (S = Nt);
      const _n = fi(gt);
      if (_n)
        a = !0, c = "tag", d = le, b = _n;
      else {
        const ze = Eu(gt), xt = ze ? i.find((ye) => ye.name === ze) : void 0;
        if (xt && n.phases.length)
          x(xt);
        else if (r.cap > 0 && l >= r.cap && r.next) {
          const ye = Tn(n, r.next);
          ye && x(ye);
        }
      }
    }
    for (const me of O.get(le) ?? []) {
      if (a) break;
      switch (me.kind) {
        case "skip": {
          h = Tn(n, me.targetPhase) && rr(n, r, me.targetPhase) ? { phase: me.targetPhase, round: me.targetRound } : null;
          break;
        }
        case "setPhase": {
          const mt = Tn(n, me.phase);
          mt && (h = null, x(mt));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(me.round)), h = null;
          break;
        case "end":
          a = !0, c = "manual", d = le;
          break;
      }
    }
  }
  const C = a ? null : or(n, r, l, h), B = C ? C.round : l + 1, z = r.cap > 0, j = n.events.filter((le) => L.has(le.id)).map((le) => le.id), P = a ? void 0 : Is(n, r, o, B, A), R = a ? void 0 : Is(n, r, o, l);
  let Q;
  const fe = n.remaining;
  return !a && fe.type === "nights" && n.phases.length && !r.byTag && !r.frozen ? Q = fe.template.replace("{n}", String($o(n, r))) : !a && fe.type === "countdown" && P?.minutes !== void 0 && (Q = fe.template.replace("{m}", String(P.minutes))), {
    phase: r,
    round: l,
    nextRound: B,
    clock: a ? void 0 : ir(n, r, B),
    currentClock: ir(n, r, l),
    remainingText: Q,
    limit: P,
    roundsLeft: R ? { x: R.x, y: R.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: a,
    endedBy: c,
    endIndex: d,
    firedEvents: j,
    warn: !a && z && B >= r.cap - 2,
    isLastRound: !a && z && B === r.cap,
    overdue: !a && z && !r.next && B > r.cap,
    next: C,
    skipGoal: h,
    settlement: b,
    panel: I,
    rolesFromChat: S,
    perMessage: U,
    entryIndex: s
  };
}
const Do = "rlzc_token", Lo = "rlzc_progress", Bo = "rlzc_turn", Vo = "rlzc_state", Uo = "rlzc_ledger", ju = [Do, Lo, Bo, Vo, Uo], ls = { token: "", progress: "", turn: "", injected: [] };
function Du(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Un(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const i = new RegExp(`(?<!\\{)\\{(${s.map(Du).join("|")})\\}(?!\\})`, "g");
  return e.replace(i, (r, o) => n?.[o]?.trim() || o);
}
function Lu(e, t) {
  if (!t.length) return "";
  const n = e.events.map((A) => A.id), s = t.map((A) => n.indexOf(A)).filter((A) => A >= 0).sort((A, a) => A - a), i = [];
  let r = s[0], o = s[0];
  const l = () => i.push(r === o ? n[r] : `${n[r]}–${n[o]}`);
  for (let A = 1; A < s.length; A++) {
    if (s[A] === o + 1) {
      o = s[A];
      continue;
    }
    l(), r = o = s[A];
  }
  return l(), i.join("、");
}
function lr(e, t, n, s = !1) {
  let i = Un(e.text, t, n);
  return e.to > e.from && (i = `在本阶段第${e.from}到${e.to}轮之间发生：${i}`), e.if && !s && (i += `（条件：${Un(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${i}`;
}
function Bu(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Vu(e, t, n, s = {}) {
  if (!t || !n || t.ended || n.status !== "active") return ls;
  const i = s.roles, r = e.phases.length > 0, o = t.next, l = [`副本：${e.name}（${e.level}级）`], A = t.limit;
  if (r)
    l.push(`阶段：${t.phase.name}`), l.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), A && l.push(`剩余${A.x}/${A.y}轮`), t.clock && l.push(`钟时：${t.clock}`), A?.text && l.push(`时限：${A.text}`), e.remaining.type === "countdown" && t.remainingText && l.push(t.remainingText), A?.deadline && !A.text?.includes(A.deadline) && l.push(`截止：${A.deadline}`);
  else {
    l.push(`本轮：第${t.nextRound}轮`), t.clock && l.push(`钟时：${t.clock}`);
    const x = s.panelLimit || s.briefing?.limit;
    x && l.push(`时限：${x}`);
  }
  const a = ["［副本进度·仅供AI］", l.join("　")];
  if (s.briefing?.goal && (!r || e.id === "generic") && a.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const x = e.roles.filter((C) => i?.[C]);
    a.push(
      x.length ? `角色登记：${e.roles.map((C) => `${C}=${i?.[C] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const c = Lu(e, t.firedEvents);
  c && a.push(`已发生事件：${c}`);
  const d = [];
  o.skipFrom !== void 0 && d.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const h = new Map((s.subNext ?? []).map((x) => [x.id, x])), b = o.events.filter((x) => x.if && h.get(x.id)?.ok === !1).map((x) => ({ id: x.id, reason: h.get(x.id).reason })), I = o.events.filter((x) => !b.some((C) => C.id === x.id)), S = (x) => !!x.if && h.get(x.id)?.ok === !0, L = I.filter((x) => x.kind === "event"), U = I.filter((x) => x.kind === "directive");
  if (L.length && (d.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), L.forEach((x) => d.push(lr(x, e, i, S(x))))), U.length && (d.push("本轮写作要求："), U.forEach((x) => d.push(lr(x, e, i, S(x))))), t.isLastRound ? d.push(Bu(t)) : t.overdue && d.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && d.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && d.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((x) => i?.[x])) {
    let x = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((C) => `${C}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (x += "死者不得是{{user}}或其同伴。"), d.push(x);
  }
  let O;
  return A?.text && (A.minutes !== void 0 ? (d.push(
    `本轮<副本>的时限一栏写：${A.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), O = { text: A.text, minutes: A.minutes, total: A.total }) : (d.push(`本轮<副本>的时限一栏写：${A.text}（照抄）。`), O = { text: A.text })), {
    token: e.token,
    progress: a.join(`
`),
    turn: d.length ? ["［本轮指令·仅供AI］", ...d].join(`
`) : "",
    injected: I.map((x) => x.id),
    limit: O,
    skipped: b.length ? b : void 0,
    state: s.stateText || void 0
  };
}
const Uu = 1, Wu = 0;
function ce() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function Gu() {
  const e = ce();
  return e.eventTypes ?? e.event_types ?? {};
}
function it(e, t) {
  const n = Gu()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  ce().eventSource.on(n, t);
}
function ie() {
  return ce().chat ?? [];
}
function As() {
  const e = ce();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function Vt() {
  return ce().chatMetadata ?? {};
}
function pt() {
  const e = ce();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Ot(e, t, n, s) {
  ce().setExtensionPrompt(e, t, Uu, n, s, Wu);
}
function Pe(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function He(e) {
  const t = ce();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function Ar(e, t = "") {
  const n = ce();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const i = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof i == "string" ? i : null;
  }
  return window.prompt(e, t);
}
const It = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function Wo(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function Yu(e, t = It) {
  return t.length ? e.replace(Wo(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function Go(e, t = It, n = !1) {
  const s = ie()[e];
  if (!s || s.is_user) return;
  const i = String(s.extra?.display_text ?? s.mes ?? "");
  if (!Wo(n ? It : t, "").test(i)) return;
  const r = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!r) return;
  const o = ce().messageFormatting;
  if (typeof o != "function") return;
  const l = o(Yu(i, t), s.name ?? "", !!s.is_system, !1, e);
  r.innerHTML !== l && (r.innerHTML = l);
}
function Hu(e = It, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && Go(s, e, t);
  });
}
const Ku = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function Yo(e) {
  return e.stateFields?.length ? e.stateFields : [Ku];
}
const Zu = [...It, "状态栏"], Ju = new RegExp(`<(${Zu.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function qu(e) {
  return String(e ?? "").replace(Ju, "").replace(/\n{3,}/g, `

`).trim();
}
function Qu(e) {
  const n = [
    "你是角色扮演副本的记录员，不写剧情，只整理事实。",
    "根据本轮正文完成三件事：",
    "1. 事件核对：逐条判断「本轮后台事件」在正文里是 done（已发生）、missed（该发生但没写出来）还是 void（条件已不成立，不该发生），各附一句理由。后台事件即使{{user}}看不到，只要正文与之不矛盾、且没有写出相反的事实，就算 done。标明「第X到Y轮之间」的事件不一定在本轮写出：本轮没写到、也没写出相反的事实，同样算 done。",
    "2. 隐藏状态：在「上一轮状态」的基础上更新下列字段，只依据正文里已经发生的事实，没有变化就照抄上一轮：",
    ...Yo(e.pack).map((l) => `   - ${l.key}（${l.label}）：${l.hint}`),
    "3. 条件预判：逐条判断「下一轮事件」的条件现在是否仍成立（ok 为 true/false），附一句理由。",
    "只输出一个 JSON 对象，不要任何解释，格式：",
    '{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}]}',
    "没有本轮事件时 events 为 []；没有下一轮事件时 next 为 []。"
  ].join(`
`), s = (l) => l.to > l.from ? `（本阶段第${l.from}到${l.to}轮之间）` : "", i = e.events.length ? e.events.map((l) => `- ${l.id}${s(l)}：${l.text}${l.if ? `（条件：${l.if}）` : ""}`).join(`
`) : "（无）", r = e.nextConditional.length ? e.nextConditional.map((l) => `- ${l.id}：${l.text}（条件：${l.if}）`).join(`
`) : "（无）", o = [
    `【副本】${e.pack.name}　阶段：${e.phaseName}　第${e.round}轮`,
    `【上一轮状态】${e.prevState ? JSON.stringify(e.prevState) : "（尚无，请根据正文建立）"}`,
    `【本轮后台事件】
${i}`,
    `【下一轮事件】
${r}`,
    `【本轮正文】
${qu(e.text)}`
  ].join(`

`);
  return { system: n, user: o };
}
function Xu(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class Qt extends Error {
}
function ed(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), i = t.lastIndexOf("}");
  if (s < 0 || i <= s) throw new Qt("返回里没有 JSON");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new Qt("返回的 JSON 无法解析");
  }
  if (!r || typeof r != "object" || Array.isArray(r)) throw new Qt("返回的不是 JSON 对象");
  if (!r.state || typeof r.state != "object" || Array.isArray(r.state)) throw new Qt("缺少 state");
  const o = ["done", "missed", "void"], l = (Array.isArray(r.events) ? r.events : []).filter((a) => a && typeof a.id == "string" && o.includes(a.status)).map((a) => ({ id: a.id, status: a.status, reason: String(a.reason ?? "") })), A = (Array.isArray(r.next) ? r.next : []).filter((a) => a && typeof a.id == "string" && typeof a.ok == "boolean").map((a) => ({ id: a.id, ok: a.ok, reason: String(a.reason ?? "") }));
  return { events: l, state: r.state, next: A };
}
function td(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function nd(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((i) => String(i ?? "")).join("|");
  return `${e}:${t}:${s}:${td(String(n?.mes ?? ""))}`;
}
function sd(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function id(e, t, n = 2) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return ed(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
class Ho extends Error {
}
function Ko(e) {
  if (e instanceof Ho) return "超时";
  if (e instanceof Qt) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function Zo(e) {
  return e?.extra?.rlzc;
}
function as(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Ye(s)) continue;
    const i = Zo(s)?.sub;
    if (i?.state && !i.skipped) return { index: n, state: i.state };
  }
  return null;
}
function rd(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Ye(s)) continue;
    const i = Zo(s)?.sub;
    return i && !i.skipped && Array.isArray(i.next) ? i.next : void 0;
  }
}
function Wn(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => Wn(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${Wn(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function Jo(e, t) {
  const n = Yo(e), s = new Set(n.map((r) => r.key)), i = n.filter((r) => t[r.key] !== void 0).map((r) => `${r.label}：${Wn(t[r.key])}`);
  for (const [r, o] of Object.entries(t)) s.has(r) || i.push(`${r}：${Wn(o)}`);
  return i.length ? ["［副本状态·仅供AI］", ...i].join(`
`) : "";
}
const od = 1500;
function qo() {
  return ce().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function Qo(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Xo(e, t) {
  const n = new AbortController();
  let s;
  const i = new Promise((r, o) => {
    s = setTimeout(() => {
      n.abort(), o(new Ho(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), i]);
  } finally {
    clearTimeout(s);
  }
}
function el(e, t) {
  const n = t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : "") ?? "", s = new Error(`${e || ""} ${n}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return s.status = e, s;
}
async function tl(e, t, n, s = od) {
  const i = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: qo(),
    signal: n,
    body: JSON.stringify({
      ...Qo(e),
      model: e.model,
      messages: [
        { role: "system", content: t.system },
        { role: "user", content: t.user }
      ],
      max_tokens: s,
      temperature: 0.2,
      stream: !1
    })
  }), r = await i.text();
  let o;
  try {
    o = JSON.parse(r);
  } catch {
    o = r;
  }
  if (!i.ok || o?.error) throw el(i.status === 200 ? 0 : i.status, o);
  const l = o?.choices?.[0]?.message?.content ?? o?.choices?.[0]?.text ?? o?.content;
  if (typeof l != "string") throw new Error("返回里没有正文");
  return l;
}
async function ld(e) {
  const t = ce();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function Ad(e, t) {
  return Xo(e.timeoutMs, (n) => {
    if (e.source === "main") return ld(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return tl(e.preset, t, n);
  });
}
async function nl(e) {
  const t = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: qo(),
    body: JSON.stringify(Qo(e))
  }), n = await t.json().catch(() => null);
  if (!t.ok || n?.error) throw el(t.status, n);
  return (Array.isArray(n) ? n : Array.isArray(n?.data) ? n.data : Array.isArray(n?.models) ? n.models : []).map((i) => typeof i == "string" ? i : i?.id ?? i?.name).filter(Boolean).sort();
}
async function ad(e, t) {
  const n = await nl(e).catch(() => []), s = { ...e, model: e.model || n[0] || "" }, i = await Xo(
    t,
    (r) => tl(s, { system: "只回复 OK。", user: "ping" }, r, 5)
  );
  return { models: n, reply: i };
}
const sl = "rlzc_ledger", cs = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, ar = {
  D: 500,
  C: 1500,
  B: 5e3,
  A: 15e3,
  S: 5e4
}, cd = {
  S: 1.5,
  A: 1.2,
  B: 1,
  C: 0.8,
  D: 0.6
}, ud = {
  越级: 0.6,
  抽查: 0.5
};
function dd(e) {
  const t = e.trim(), n = /^([+-]?\d+)\s*[｜|]\s*(.*)$/.exec(t);
  if (n) {
    const r = parseInt(n[1], 10);
    return Number.isFinite(r) ? { delta: r, source: n[2].trim() } : null;
  }
  const s = /^([+-]?\d+)(?:\s*[（(]([^）)]*)[）)])?/.exec(t);
  if (!s) return null;
  const i = parseInt(s[1], 10);
  return Number.isFinite(i) ? { delta: i, source: s[2]?.trim() ?? "" } : null;
}
function us(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), i = String(t.getHours()).padStart(2, "0"), r = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${i}:${r}`;
}
function il(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function fd(e, t) {
  const n = t.结果 ?? "", s = (t.评价 ?? "").toUpperCase();
  if (n === "失败" || n === "阵亡")
    return -Math.round(ar[e] * 0.3);
  if (n !== "通关" && n !== "成功" && n !== "胜利")
    return 0;
  let i = ar[e];
  i = Math.round(i * (cd[s] ?? 1));
  for (const [r, o] of Object.entries(ud))
    (t[r] === "是" || t[r] === "true" || t[r] === "1") && (i = Math.round(i * o));
  return i;
}
function bn(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function ds(e, t, n) {
  let s = e, i = !1;
  for (const r of t)
    s += r.delta, s < n && (i = !0), r.type === "settle" && r.delta > 0 && (i = !1);
  return i;
}
function pd(e) {
  const t = e.delta >= 0 ? "+" : "", n = e.source ? ` ${e.source}` : "";
  return `${e.at} ${t}${e.delta}${n}`;
}
const At = "rlzc";
function hd() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function md(e, t, n) {
  return {
    id: hd(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function gd(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function bd(e, t) {
  return e.packId === Vn ? e.briefing ? Io(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function xd(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return Ye(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function vd(e, t) {
  const n = xd(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((i) => ({ ...i, atIndex: i.atIndex + s }))), t.manual = t.manual.filter((i) => i.atIndex < e.length && i.atIndex >= t.entryIndex), !0;
}
function rl(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const cr = "rlzc_declined";
function pi(e, t) {
  return `${e}:${t}`;
}
const ol = Ye;
function fs(e, t, n) {
  if (!ol(e[t])) return null;
  const s = Nu(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function yd(e, t, n, s, i = []) {
  for (let r = Math.max(0, n); r <= Math.min(s, e.length - 1); r++) {
    const o = fs(e, r, t);
    if (o && !i.includes(pi(r, o.info.name))) return o;
  }
  return null;
}
function _d(e, t, n = [], s = Ks, i = 0) {
  if (t?.status === "active") return null;
  let r = -1;
  for (let l = Math.max(0, i); l < e.length; l++) if (ol(e[l])) {
    r = l;
    break;
  }
  if (r < 0 || t && t.entryIndex === r) return null;
  const o = fs(e, r, s);
  return !o || n.includes(pi(r, o.info.name)) ? null : o;
}
const wd = /[■█▰●◆★▮▓]/g, kd = /[□░▱○◇☆▯▒]/g;
function zd(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const r = Number(n[2]);
    return r === 100 ? Number(n[1]) : r > 0 ? Math.round(Number(n[1]) / r * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(wd) ?? []).length, i = (t.match(kd) ?? []).length;
  return s + i > 0 ? Math.round(s / (s + i) * 100) : null;
}
function ur(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function $d(e, t) {
  return ur(e).includes(ur(t));
}
function Sd(e, t, n) {
  const s = [], i = Object.keys(n.perMessage).map(Number).sort((A, a) => A - a);
  let r = !1, o = null, l = !1;
  for (const A of i) {
    const a = n.perMessage[A], d = t.phases.find((x) => x.id === a.phase)?.name ?? "进行中", h = (x, C) => s.push({ index: A, phase: d, round: a.round, kind: x, text: C }), b = e[A]?.extra?.rlzc;
    for (const x of b?.sub?.events ?? []) x.status === "missed" && h("eventMissed", `${x.id} 未写出来：${x.reason}`);
    for (const x of b?.skippedEvents ?? []) h("eventSkipped", `${x.id} 条件不成立，已跳过：${x.reason}`);
    const I = Fo(String(e[A]?.mes ?? "")), S = A === n.entryIndex;
    if (!I) {
      S || h("missing", "本轮回复缺少 <副本> 面板"), l = !S;
      continue;
    }
    l = !1;
    const L = zd(I.progressBar);
    I.progressBar === void 0 ? h("progressUnreadable", "<副本> 中没有进度条一栏") : L === null ? h("progressUnreadable", `进度条无法读出数值：「${I.progressBar}」`) : (!r && L !== 0 && h("progressStart", `入场后第一轮的进度条应为0，实际为 ${L}`), (L < 0 || L > 100) && h("progressRange", `进度条数值 ${L} 超出 0–100`), o !== null && L < o && h("progressDrop", `进度条比上一轮低：${o} → ${L}`), o = L), r = !0;
    const U = e[A]?.extra?.rlzc?.limit, O = U?.text ? U : a.limit?.text ? { text: a.limit.text, minutes: a.limit.minutes, total: a.limit.total } : void 0;
    if (O) {
      const x = I.limit;
      if (O.minutes !== void 0) {
        const C = zo(x);
        !x || C.remaining === null || C.total === null ? h("limit", `时限读不到「剩余时间/总时长」：写的是「${x ?? "（没有时限一栏）"}」，注入的是「${O.text}」`) : (C.remaining > O.minutes && h("limit", `剩余时间比注入值多：写的是${jt(C.remaining)}，注入的是${jt(O.minutes)}`), O.total !== void 0 && C.total !== O.total && h("limit", `总时长与注入值不一致：写的是${jt(C.total)}，注入的是${jt(O.total)}`));
      } else (!x || !$d(x, O.text)) && h("limit", `时限与注入文字不一致：写的是「${x ?? "（没有时限一栏）"}」，注入的是「${O.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: r };
}
const Zs = "rlzc", ll = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, Xt = {
  depths: { token: 4, progress: 4, turn: 0, ledger: 4 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...hn },
  subApi: structuredClone(ll)
}, m = /* @__PURE__ */ es({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(Xt),
  packs: [],
  lastInjection: ls,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: []
});
function xn(e) {
  return JSON.parse(JSON.stringify(e));
}
function hi(...e) {
  m.settings.debug && console.log("[rlzc]", ...e);
}
function Ed() {
  const e = ce().extensionSettings, t = e[Zs] ?? {}, n = {
    ...structuredClone(Xt),
    ...t,
    depths: { ...Xt.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? Xt.depths.ledger },
    ball: { ...Xt.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => Co(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...hn, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(ll),
      ...t.subApi ?? {},
      presets: Array.isArray(t.subApi?.presets) ? t.subApi.presets : [],
      // 旧版本里的「酒馆连接配置」来源已删除，按关闭处理
      source: ["off", "main", "preset"].includes(t.subApi?.source) ? t.subApi.source : "off"
    }
  };
  e[Zs] = n, m.settings = n, m.packs = di(n.customPacks);
}
function Te() {
  ce().extensionSettings[Zs] = /* @__PURE__ */ J(m.settings), ce().saveSettingsDebounced(), m.packs = di(m.settings.customPacks);
}
function Cd(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = Co(t);
  if (n.length) return n;
  const s = t;
  return di([]).some((i) => i.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (m.settings.customPacks = [...m.settings.customPacks.filter((i) => i.id !== s.id), s], Te(), []);
}
function Md(e) {
  m.settings.customPacks = m.settings.customPacks.filter((t) => t.id !== e), Te();
}
function vn() {
  const e = Vt()[sl];
  return !e || Array.isArray(e) ? {} : e;
}
function mi(e) {
  Vt()[sl] = e, pt();
}
function ps(e) {
  const t = [];
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (i.is_user || i.is_system) continue;
    const r = i.extra?.rlzc?.ledger;
    if (Array.isArray(r))
      for (const o of r) t.push({ ...o, mesIndex: s });
  }
  const n = vn();
  for (const s of n.adjust ?? [])
    t.push({ delta: s.amount, source: `手动：${s.note}`, type: "manual", at: s.at, mesIndex: -1 });
  return t;
}
function yn(e) {
  const t = vn();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const i = e[s];
    if (i.is_user || !i.mes) continue;
    const r = n.exec(i.mes);
    if (!r) continue;
    const o = il(r[1]);
    if (o !== null) {
      const l = us(i.send_date ?? i.gen_finished ?? void 0);
      return mi({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function Id(e) {
  if (!(vn().init != null || m.ledger.length > 0)) return "";
  const s = yn(e), i = bn(s.value, m.ledger), r = m.pack?.level ?? "D", o = cs[r];
  if (!ds(s.value, m.ledger, o))
    return `［账户·仅供AI］积分：${i}　待清算：无`;
  const A = o - i, a = A > 0 ? `距斩杀线${A}分（${r}级斩杀线${o}）` : `斩杀线${o}，当前${i}`;
  return `［账户·仅供AI］积分：${i}　待清算：已标记，${a}。商城价格上浮30%，下一场副本为清算副本。`;
}
function Td(e) {
  const n = ie()[e];
  if (!n || n.is_user) return;
  const s = n.mes ?? "", i = us(n.send_date ?? n.gen_finished ?? void 0), r = [], o = new RegExp(Su.source, "g");
  let l;
  for (; (l = o.exec(s)) !== null; ) {
    const a = dd(l[1]);
    a && r.push({ delta: a.delta, source: a.source, type: "tag", at: i });
  }
  const A = fi(s);
  if (A && m.pack) {
    const a = {
      结果: A.result ?? "",
      评价: A.rating ?? "",
      ...A.fields
    }, c = fd(m.pack.level, a);
    if (c !== 0) {
      const d = A.rating ? `·${A.rating}` : "";
      r.push({ delta: c, source: `副本结算·${A.result ?? ""}${d}`, type: "settle", at: i });
    }
  }
  if (r.length || n.extra?.rlzc?.ledger?.length) {
    n.extra = n.extra ?? {};
    const a = n.extra.rlzc ?? { phase: "", round: 0, injected: [] };
    n.extra.rlzc = xn({ ...a, ledger: r.length ? r : void 0 }), pt();
  }
  m.ledger = ps(ie());
}
function Pd(e, t) {
  const n = vn(), s = us(void 0), i = [...n.adjust ?? [], { amount: e, note: t, at: s }];
  mi({ ...n, adjust: i });
  const r = { delta: e, source: `手动：${t}`, type: "manual", at: s, mesIndex: -1 };
  m.ledger = [...m.ledger, r];
}
function Nd(e) {
  const t = vn(), n = us(void 0);
  mi({ ...t, init: { value: e, source: "手动设置", at: n } }), m.ledger = ps(ie());
}
function ht() {
  return gd(Vt()[At]);
}
function hs() {
  const e = Vt(), t = Array.isArray(e[At]?.declined) ? e[At].declined : [], n = Array.isArray(e[cr]) ? e[cr] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function Rd(e) {
  const t = Vt(), n = [...hs().filter((s) => s !== e), e];
  t[At] = { ...t[At] ?? {}, declined: n }, pt();
}
function Tt(e) {
  const t = Vt(), n = hs(), s = n.length ? { declined: n } : {};
  e ? t[At] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[At] = s : delete t[At], pt();
}
function gi(e) {
  const t = ht();
  t && (e(t), Tt(t), st());
}
function Al(e) {
  const t = ie();
  return (e === "swipe" || e === "continue") && Ye(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Gn(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = bd(t, m.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = Ou(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? Sd(e, n, s) : null };
}
function st() {
  const e = ie();
  let t = ht();
  if (t) {
    const s = JSON.stringify(t);
    if (!vd(e, t))
      Tt(null), Pe("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const i = Gn(e, t);
      i.progress && (t.status = i.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && Tt(t);
    }
  }
  const n = Gn(e, t);
  m.session = n.session, m.pack = n.pack, m.progress = n.progress, m.audit = n.audit, m.subLine = fl(e, n.progress), m.tick++;
}
function al() {
  if (m.session)
    return rl(m.session, m.progress?.rolesFromChat);
}
function Yn() {
  for (const e of ju) Ot(e, "", 0, !1);
}
let ln = -1;
function Fd(e) {
  const t = Al(e), n = ht(), { pack: s, progress: i, audit: r } = Gn(t, n), o = n ? rl(n, i?.rolesFromChat) : void 0, l = xi() && !!i, A = l ? as(t, i.entryIndex) : null, a = s ? Vu(s, i, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: i?.panel?.limit,
    audit: r ?? void 0,
    subNext: l ? rd(t, i.entryIndex) : void 0,
    stateText: A ? Jo(s, A.state) : void 0
  }) : ls;
  Yn();
  const c = m.settings.depths;
  a.token && Ot(Do, a.token, c.token, !0), a.progress && Ot(Lo, a.progress, c.progress, !1), a.turn && Ot(Bo, a.turn, c.turn, !1), a.state && Ot(Vo, a.state, c.progress, !1);
  const d = Id(t);
  d && Ot(Uo, d, c.ledger, !1), m.lastInjection = a, ln = t.length, hi("注入", e, a);
}
const Js = /* @__PURE__ */ new Set();
async function Od() {
  const e = ie(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Cu(n.mes);
  if (!s) return;
  const i = ht();
  if (!i || i.status !== "active" || i.manual.some((a) => a.kind === "skip" && a.atIndex === t)) return;
  const r = `${As()}:${t}:${n.mes}`;
  if (Js.has(r)) return;
  Js.add(r);
  const { pack: o, progress: l } = Gn(e, i);
  if (!o || !l || l.ended) return;
  const A = Mu(o, l.phase, l.round, s);
  A && await He(`是否跳到${s}？（${A.label}）`) && (i.manual.push({ kind: "skip", atIndex: t, targetPhase: A.phase, targetRound: A.round }), Tt(i));
}
async function jd(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Yn();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await Od(), await Jd(s), Fd(s);
  } catch (i) {
    console.error("[rlzc] 拦截器出错", i), Yn();
  }
}
const qs = /* @__PURE__ */ new Set();
function bi() {
  const e = ht();
  if (!e || e.status !== "ended") return 0;
  const t = m.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
async function cl(e) {
  const { index: t, info: n } = e, s = `${As()}:${t}:${n.name}`;
  if (qs.has(s)) return;
  qs.add(s);
  const i = e.pack ? `检测到进入《${e.pack.name}》，是否启用？` : `检测到进入《${n.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!await He(i)) {
    Rd(pi(t, n.name));
    return;
  }
  const r = fs(ie(), t, m.packs);
  if (!r || r.info.name !== n.name) {
    Pe("warning", "入场消息已变化，未启用。");
    return;
  }
  const o = { ...n };
  e.pack || (o.rounds = So(n.limit, Mo(n), m.settings.genericCaps).rounds), dl(e.pack ?? Io(o, m.settings.genericCaps), t, o);
}
function ul() {
  const e = _d(ie(), ht(), hs(), m.packs, bi());
  e && cl(e);
}
function Dd(e) {
  st();
  const t = ie(), n = bi();
  let s = -1;
  for (let i = n; i < t.length; i++) if (Ye(t[i])) {
    s = i;
    break;
  }
  e === s && ul();
}
function dl(e, t, n) {
  const i = ie()[t], r = md(e, t, n);
  i.extra = i.extra ?? {}, i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: r.id }, Tt(r), st(), m.progress && (i.extra.rlzc.injected = xn(m.progress.perMessage[t]?.events ?? [])), pt(), Pe("success", `已进入副本《${e.name}》。`);
}
async function Ld(e) {
  const t = m.packs.find((r) => r.id === e);
  if (!t) return;
  const n = ie();
  let s = n.length - 1;
  for (; s >= 0 && !Ye(n[s]); ) s--;
  if (s < 0) {
    Pe("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  ht()?.status === "active" && !await He("当前已有进行中的副本，确定要替换吗？") || await He(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && dl(t, s, Po(n[s].mes) ?? { name: t.name });
}
function ms(e) {
  gi((t) => t.manual.push(e));
}
function gs() {
  return ie().length - 1;
}
async function dr() {
  const e = m.progress;
  if (!(!e || e.ended || !m.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Pe("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await He(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (ms({ kind: "skip", atIndex: gs(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Pe("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function fr() {
  !m.session || m.progress?.ended || await He("确定要手动结束当前副本吗？") && ms({ kind: "end", atIndex: gs() });
}
function Bd(e) {
  ms({ kind: "setPhase", atIndex: gs(), phase: e });
}
function Vd(e) {
  ms({ kind: "setRound", atIndex: gs(), round: e });
}
function Ud(e) {
  gi((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function Wd(e) {
  gi((t) => t.manual.splice(e, 1));
}
async function pr() {
  m.session && await He("确定要删除当前副本会话吗？（不会改动聊天记录）") && (Tt(null), st());
}
function xi() {
  return m.settings.subApi.source !== "off";
}
function Gd() {
  const e = m.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function Yd(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function fl(e, t) {
  if (!xi() || !t || t.ended) return "";
  if (m.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const i = as(e, t.entryIndex);
  return i && t.perMessage[i.index] ? `副本记录：已更新（第${t.perMessage[i.index].round}轮）` : "副本记录：尚未整理";
}
let Pn = null;
const vi = /* @__PURE__ */ new Set();
function yi(e) {
  return nd(As(), e, ie()[e]);
}
function hr(e) {
  m.subBusy = e, m.subLine = fl(ie(), m.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && m.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function pl(e, t, n) {
  if (yi(e) !== t) return;
  const s = ie()[e];
  s?.extra?.rlzc && (s.extra.rlzc = xn({ ...s.extra.rlzc, sub: n }), pt(), st());
}
function Hd(e, t) {
  const n = ie(), s = m.progress, i = m.pack, r = n[e], o = s?.perMessage[e];
  if (!i || !s || !o || !r) return;
  const l = al(), A = (x) => ({ ...x, text: Un(x.text, i, l), if: x.if ? Un(x.if, i, l) : void 0 }), a = Xu(i, r.extra?.rlzc?.injected ?? []).map(A), c = (s.next?.events ?? []).filter((x) => x.if).map(A);
  if (!sd({
    enabled: xi(),
    active: !s.ended && m.session?.status === "active",
    type: t,
    saveMode: m.settings.subApi.saveMode,
    hasEvents: a.length > 0,
    hasNextConditional: c.length > 0
  })) return;
  const h = yi(e);
  if (vi.has(h)) return;
  const b = i.phases.find((x) => x.id === o.phase), I = as(n.slice(0, e), s.entryIndex), S = Qu({
    pack: i,
    phaseName: b?.name ?? o.phase,
    round: o.round,
    prevState: I?.state ?? null,
    events: a,
    nextConditional: c,
    text: String(r.mes ?? "")
  }), L = ce().substituteParams, U = L ? { system: L(S.system), user: L(S.user) } : S, O = Kd(e, h, o.round, U);
  Pn = { key: h, index: e, promise: O }, O.finally(() => {
    Pn?.key === h && (Pn = null);
  });
}
async function Kd(e, t, n, s) {
  hr(!0);
  try {
    let i = 2;
    for (; ; ) {
      const r = Gd();
      if (!r) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await id((A) => Ad(r, A), s, i);
        pl(e, t, { ...l, ms: Date.now() - o, via: Yd(r), at: (/* @__PURE__ */ new Date()).toISOString() }), vi.add(t);
        return;
      } catch (l) {
        if (yi(e) !== t) return;
        const A = Ko(l), a = String(l?.message ?? l).slice(0, 200);
        if (hi("副本事件检测失败", A, l), !m.settings.subApi.wait) {
          Pe("warning", `第${n}轮事件检测失败（${A}），已沿用上一轮状态。`), Rs(e, t, A);
          return;
        }
        if (await Zd(n, A, a) === "skip") {
          Rs(e, t, A);
          return;
        }
        i = 0;
      }
    }
  } catch (i) {
    Pe("error", String(i?.message ?? i)), Rs(e, t, "其他");
  } finally {
    hr(!1);
  }
}
function Rs(e, t, n) {
  vi.add(t), pl(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function Zd(e, t, n) {
  const s = ce();
  if (!s.Popup || !s.POPUP_TYPE)
    return window.confirm(`第${e}轮事件检测失败（${t}）。重试吗？取消则这轮先跳过。`) ? "retry" : "skip";
  const i = m.settings.subApi, r = document.createElement("div"), o = document.createElement("h3");
  o.textContent = `第${e}轮事件检测失败`;
  const l = document.createElement("p");
  l.textContent = `原因：${t}`;
  const A = document.createElement("small");
  A.textContent = n, A.style.opacity = "0.7";
  const a = document.createElement("div");
  a.style.cssText = "display:none;margin-top:10px;";
  const c = document.createElement("label");
  c.textContent = "换成：";
  const d = document.createElement("select");
  d.className = "text_pole";
  const h = [{ value: "", text: "请选择…" }];
  for (const S of i.presets) i.source === "preset" && S.id === i.presetId || h.push({ value: `preset:${S.id}`, text: `自设API：${S.name}` });
  i.source !== "main" && h.push({ value: "main", text: "跟随主API" });
  for (const S of h) {
    const L = document.createElement("option");
    L.value = S.value, L.textContent = S.text, d.append(L);
  }
  c.append(d), a.append(c), r.append(o, l, A, a);
  let b;
  d.addEventListener("change", () => {
    const S = d.value;
    S && (S === "main" ? i.source = "main" : (i.source = "preset", i.presetId = S.slice(7)), Te(), b.complete(s.POPUP_RESULT.CUSTOM1));
  }), b = new s.Popup(r, s.POPUP_TYPE.TEXT, "", {
    okButton: "重试",
    cancelButton: "这轮先跳过",
    customButtons: [
      {
        text: "换一个接口",
        action: () => {
          a.style.display = "", d.focus();
        }
      }
    ]
  });
  const I = await b.show();
  return I === s.POPUP_RESULT.AFFIRMATIVE || I === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function Jd(e) {
  const t = Pn;
  if (!(!t || !m.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= Al(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function qd(e, t) {
  const n = ie(), s = n[e];
  if (!Ye(s)) return;
  const i = ht();
  if (!i || i.status === "ended") {
    if (fs(n, e, m.packs)) {
      const A = yd(n, m.packs, bi(), e, hs());
      A && cl(A);
    }
    return;
  }
  if (t === "first_message") return;
  const r = Ro(s.mes);
  r && (i.roles = { ...i.roles ?? {}, ...r }), Tt(i), st();
  const o = m.progress?.perMessage[e];
  if (o && m.pack) {
    const A = m.pack.phases.find((b) => b.id === o.phase), a = {
      phase: A?.name ?? o.phase,
      round: o.round,
      injected: ln === e ? m.lastInjection.injected : o.events
    }, c = m.pack.time;
    c.type === "clock" && A?.clock && !A.night && !A.frozen && (a.clock = Oo(c.dayStart, c.minutesPerRound, o.round));
    const d = ln === e ? m.lastInjection.limit : o.limit?.text ? { text: o.limit.text, minutes: o.limit.minutes, total: o.limit.total } : void 0;
    d && (a.limit = d);
    const h = s.extra?.rlzc?.entry;
    h && (a.entry = h), ln === e && m.lastInjection.skipped?.length && (a.skippedEvents = m.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (a.sub = s.extra.rlzc.sub), s.extra = s.extra ?? {}, s.extra.rlzc = xn(a), pt(), st(), Hd(e, t);
  }
  const l = fi(s.mes);
  l && Pe("info", `副本结算：${l.result ?? "—"}${l.rating ? `，评价 ${l.rating}` : ""}`), Td(e), Qd(e);
}
function Qd(e) {
  const t = ie(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const i = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!i) return;
  const r = il(i[1]);
  if (r === null) return;
  const o = yn(t), l = bn(o.value, ps(t));
  r !== l && (hi(`积分核对不符（楼层${e}）：状态栏 ${r}，账本 ${l}`), n.extra?.rlzc && (n.extra.rlzc = xn({ ...n.extra.rlzc, ledgerMismatch: { status: r, ledger: l } }), pt()));
}
function mr() {
  Js.clear(), qs.clear(), ln = -1, m.chatId = As(), m.debugUnlocked = !1, m.lastInjection = ls, Yn(), m.ledger = ps(ie()), st(), ul(), setTimeout(() => _i(), 50);
}
function Fs() {
  st();
}
function hl() {
  return m.settings.panelDisplay === "statusbar" ? It.filter((e) => e !== "副本") : It;
}
function Os(e) {
  Go(e, hl());
}
function _i(e = !1) {
  Hu(hl(), e);
}
function Xd(e) {
  m.settings.panelDisplay !== e && (m.settings.panelDisplay = e, Te(), _i(!0));
}
const ef = { class: "rlzc-ball-mark" }, js = 44, tf = /* @__PURE__ */ Ke({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ be({ x: 0, y: 0 });
    let n = null;
    function s(c, d) {
      const h = window.innerWidth - js - 4, b = window.innerHeight - js - 4;
      return { x: Math.min(Math.max(4, c), h), y: Math.min(Math.max(4, d), b) };
    }
    function i() {
      const c = m.settings.ball;
      t.value = s(c.x ?? window.innerWidth - js - 12, c.y ?? Math.round(window.innerHeight * 0.35));
    }
    function r(c) {
      c.currentTarget.setPointerCapture(c.pointerId), n = { id: c.pointerId, dx: c.clientX - t.value.x, dy: c.clientY - t.value.y, moved: !1, sx: c.clientX, sy: c.clientY };
    }
    function o(c) {
      !n || n.id !== c.pointerId || (Math.abs(c.clientX - n.sx) + Math.abs(c.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(c.clientX - n.dx, c.clientY - n.dy)));
    }
    function l(c) {
      if (!n || n.id !== c.pointerId) return;
      const d = n.moved;
      n = null, d ? (m.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, Te()) : m.panelOpen = !m.panelOpen;
    }
    const A = Y(() => !!m.session && !m.progress?.ended), a = Y(() => !!m.progress?.warn);
    return ns(() => m.settings.ball, i, { deep: !0 }), vA(() => {
      i(), window.addEventListener("resize", i);
    }), yA(() => window.removeEventListener("resize", i)), (c, d) => (w(), $("button", {
      class: he(["rlzc-ball", { "is-active": A.value, "is-warn": a.value }]),
      style: Qn({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: r,
      onPointermove: o,
      onPointerup: l,
      onPointercancel: l
    }, [
      f("span", ef, N(A.value ? D(m).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
});
function nf(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Jt(e) {
  return nf(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function sf(e) {
  const t = [];
  let n = null, s = [];
  const i = () => {
    s.length && t.push(`<p>${s.map(Jt).join("<br>")}</p>`), s = [];
  }, r = () => {
    n && t.push(`</li></${n}>`), n = null;
  };
  for (const o of e.replace(/\r/g, "").split(`
`)) {
    const l = o.trimEnd();
    if (!l.trim()) {
      i(), r();
      continue;
    }
    const A = /^(#{1,4})\s+(.*)$/.exec(l);
    if (A) {
      i(), r();
      const h = Math.min(A[1].length + 2, 6);
      t.push(`<h${h}>${Jt(A[2])}</h${h}>`);
      continue;
    }
    const a = /^\s*[-*]\s+(.*)$/.exec(l), c = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (a || c) {
      i();
      const h = a ? "ul" : "ol", b = a ? a[1] : c[2];
      n !== h ? (r(), n = h, t.push(h === "ol" ? `<ol start="${c[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Jt(b));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${Jt(l.trim())}`);
      continue;
    }
    const d = /^>\s?(.*)$/.exec(l);
    if (d) {
      i(), r(), t.push(`<blockquote>${Jt(d[1])}</blockquote>`);
      continue;
    }
    r(), s.push(l);
  }
  return i(), r(), t.join("");
}
const rf = {
  key: 0,
  class: "rlzc-docs"
}, of = { class: "rlzc-subtabs" }, lf = ["onClick"], Af = { class: "rlzc-md" }, af = ["innerHTML"], cf = ["src", "alt"], uf = {
  key: 2,
  class: "rlzc-note"
}, gr = /* @__PURE__ */ Ke({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ be(0);
    ns(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = Y(() => t.pack.docs?.[n.value]), i = Y(() => s.value?.md ? sf(s.value.md) : ""), r = Y(() => s.value?.image ? yu(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (w(), $("section", rf, [
      f("div", of, [
        (w(!0), $(q, null, xe(e.pack.docs, (A, a) => (w(), $("button", {
          key: a,
          class: he({ on: n.value === a }),
          onClick: (c) => n.value = a
        }, N(A.title), 11, lf))), 128))
      ]),
      f("article", Af, [
        i.value ? (w(), $("div", {
          key: 0,
          innerHTML: i.value
        }, null, 8, af)) : K("", !0),
        r.value ? (w(), $("img", {
          key: 1,
          src: r.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, cf)) : s.value?.image && !r.value ? (w(), $("p", uf, "图片无法加载：" + N(s.value.image), 1)) : K("", !0)
      ])
    ])) : K("", !0);
  }
}), df = {
  key: 0,
  class: "rlzc-ledger-summary"
}, ff = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, br = /* @__PURE__ */ Ke({
  __name: "LedgerSummary",
  setup(e) {
    const t = Y(() => ie()), n = Y(() => yn(t.value)), s = Y(() => bn(n.value.value, m.ledger)), i = Y(() => m.pack?.level ?? "D"), r = Y(() => cs[i.value]), o = Y(() => ds(n.value.value, m.ledger, r.value)), l = Y(() => m.ledger.length > 0 || n.value.source !== "默认值");
    return (A, a) => l.value ? (w(), $("div", df, [
      f("span", {
        class: he(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + N(s.value >= 0 ? "+" : "") + N(s.value), 3),
      o.value ? (w(), $("span", ff, "待清算")) : K("", !0)
    ])) : K("", !0);
  }
}), pf = { class: "rlzc-system" }, hf = { class: "rlzc-card rlzc-hero" }, mf = { class: "rlzc-hero-top" }, gf = { class: "rlzc-level" }, bf = {
  key: 0,
  class: "rlzc-chip"
}, xf = {
  key: 0,
  class: "rlzc-goal"
}, vf = { class: "rlzc-grid" }, yf = {
  key: 0,
  class: "rlzc-stat"
}, _f = {
  key: 1,
  class: "rlzc-stat"
}, wf = {
  key: 2,
  class: "rlzc-stat"
}, kf = {
  key: 3,
  class: "rlzc-stat"
}, zf = {
  key: 0,
  class: "rlzc-subline"
}, $f = {
  key: 1,
  class: "rlzc-note"
}, Sf = {
  key: 2,
  class: "rlzc-card"
}, Ef = { class: "rlzc-kv" }, Cf = { class: "rlzc-kv" }, Mf = {
  key: 3,
  class: "rlzc-note"
}, If = {
  key: 4,
  class: "rlzc-card"
}, Tf = {
  key: 0,
  class: "rlzc-kv"
}, Pf = { class: "rlzc-mono" }, Nf = {
  key: 1,
  class: "rlzc-tasks"
}, Rf = {
  key: 2,
  class: "rlzc-ps"
}, Ff = { class: "rlzc-actions" }, Of = ["disabled"], jf = ["disabled"], Df = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, Lf = {
  key: 2,
  class: "rlzc-card"
}, Bf = { class: "rlzc-row" }, Vf = ["value"], Uf = ["disabled"], Wf = /* @__PURE__ */ Ke({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ be(""), n = Y(() => !!m.session && !!m.pack), s = Y(() => m.progress), i = Y(() => n.value && !!s.value && !s.value.ended), r = Y(() => m.packs.find((h) => h.id === t.value) ?? null), o = Y(() => !!m.pack?.phases.length), l = Y(() => m.settings.panelDisplay !== "statusbar"), A = Y(() => {
      const h = s.value;
      return h ? o.value ? `${h.warn ? "⚠️ " : ""}${h.round}/${h.phase.cap}` : `第${h.round}轮` : "";
    }), a = Y(() => {
      const h = s.value;
      return h ? h.limit?.text ? h.limit.text : h.panel?.limit || m.session?.briefing?.limit || "—" : "";
    }), c = Y(() => {
      const h = s.value;
      return !!h && !h.ended && o.value && h.phase.cap > 0 && h.nextRound < h.phase.cap;
    });
    async function d() {
      t.value && (await Ld(t.value), t.value = "");
    }
    return (h, b) => (w(), $("div", pf, [
      n.value && s.value ? (w(), $(q, { key: 0 }, [
        f("div", hf, [
          f("div", mf, [
            f("span", gf, N(D(m).pack.level), 1),
            f("h3", null, N(D(m).pack.name), 1),
            s.value.ended ? (w(), $("span", bf, "已结束")) : K("", !0)
          ]),
          D(m).session?.briefing?.goal ? (w(), $("p", xf, "目标：" + N(D(m).session.briefing.goal), 1)) : K("", !0)
        ]),
        f("div", vf, [
          o.value ? (w(), $("div", yf, [
            b[3] || (b[3] = f("span", null, "阶段", -1)),
            f("b", null, N(s.value.phase.name), 1)
          ])) : K("", !0),
          f("div", {
            class: he(["rlzc-stat", { warn: s.value.warn }])
          }, [
            b[4] || (b[4] = f("span", null, "轮次", -1)),
            f("b", null, N(A.value), 1)
          ], 2),
          s.value.currentClock ? (w(), $("div", _f, [
            b[5] || (b[5] = f("span", null, "钟时", -1)),
            f("b", null, N(s.value.currentClock), 1)
          ])) : K("", !0),
          s.value.roundsLeft ? (w(), $("div", wf, [
            b[6] || (b[6] = f("span", null, "最多剩余轮次", -1)),
            f("b", null, N(s.value.roundsLeft.x) + "/" + N(s.value.roundsLeft.y), 1)
          ])) : K("", !0),
          l.value ? (w(), $("div", kf, [
            b[7] || (b[7] = f("span", null, "剩余时间", -1)),
            f("b", null, N(a.value), 1)
          ])) : K("", !0),
          Ee(br)
        ]),
        D(m).subLine ? (w(), $("p", zf, N(D(m).subLine), 1)) : K("", !0),
        s.value.skipGoal ? (w(), $("div", $f, "快进中：目标 " + N(D(m).pack.phases.find((I) => I.id === s.value.skipGoal.phase)?.name) + " 第" + N(s.value.skipGoal.round) + "轮", 1)) : K("", !0),
        s.value.ended && s.value.settlement ? (w(), $("div", Sf, [
          f("div", Ef, [
            b[8] || (b[8] = f("span", null, "结果", -1)),
            f("b", null, N(s.value.settlement.result ?? "—"), 1)
          ]),
          f("div", Cf, [
            b[9] || (b[9] = f("span", null, "评价", -1)),
            f("b", null, N(s.value.settlement.rating ?? "—"), 1)
          ])
        ])) : s.value.ended ? (w(), $("div", Mf, "副本已手动结束。")) : K("", !0),
        l.value && s.value.panel ? (w(), $("div", If, [
          s.value.panel.progressBar ? (w(), $("div", Tf, [
            b[10] || (b[10] = f("span", null, "进度", -1)),
            f("b", Pf, N(s.value.panel.progressBar), 1)
          ])) : K("", !0),
          s.value.panel.tasks.length ? (w(), $("div", Nf, [
            b[11] || (b[11] = f("span", null, "任务", -1)),
            f("ul", null, [
              (w(!0), $(q, null, xe(s.value.panel.tasks, (I, S) => (w(), $("li", { key: S }, N(I), 1))), 128))
            ])
          ])) : K("", !0),
          s.value.panel.ps ? (w(), $("div", Rf, "ps：" + N(s.value.panel.ps), 1)) : K("", !0)
        ])) : K("", !0),
        f("div", Ff, [
          f("button", {
            class: "rlzc-btn",
            disabled: !c.value,
            onClick: b[0] || (b[0] = //@ts-ignore
            (...I) => D(dr) && D(dr)(...I))
          }, "跳过（到本阶段结束）", 8, Of),
          f("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: b[1] || (b[1] = //@ts-ignore
            (...I) => D(fr) && D(fr)(...I))
          }, "手动结束副本", 8, jf)
        ]),
        i.value && D(m).pack.docs?.length ? (w(), tt(gr, {
          key: 5,
          pack: D(m).pack
        }, null, 8, ["pack"])) : K("", !0)
      ], 64)) : (w(), $("div", Df, [
        b[12] || (b[12] = f("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        Ee(br)
      ])),
      i.value ? K("", !0) : (w(), $("div", Lf, [
        b[14] || (b[14] = f("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        f("div", Bf, [
          wt(f("select", {
            "onUpdate:modelValue": b[2] || (b[2] = (I) => t.value = I),
            class: "rlzc-input"
          }, [
            b[13] || (b[13] = f("option", { value: "" }, "选择副本…", -1)),
            (w(!0), $(q, null, xe(D(m).packs, (I) => (w(), $("option", {
              key: I.id,
              value: I.id
            }, N(I.level) + "｜" + N(I.name), 9, Vf))), 128))
          ], 512), [
            [ko, t.value]
          ]),
          f("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: d
          }, "进入", 8, Uf)
        ])
      ])),
      !i.value && r.value?.docs?.length ? (w(), tt(gr, {
        key: 3,
        pack: r.value
      }, null, 8, ["pack"])) : K("", !0)
    ]));
  }
}), Gf = { class: "rlzc-ledger" }, Yf = { class: "rlzc-card rlzc-ledger-hero" }, Hf = { class: "rlzc-ledger-meta" }, Kf = {
  key: 0,
  class: "rlzc-ledger-pending"
}, Zf = {
  key: 1,
  class: "rlzc-ledger-ok"
}, Jf = { class: "rlzc-card" }, qf = {
  key: 0,
  class: "rlzc-ledger-list"
}, Qf = {
  key: 1,
  class: "rlzc-hint"
}, Xf = /* @__PURE__ */ Ke({
  __name: "LedgerTab",
  setup(e) {
    const t = Y(() => ie()), n = Y(() => yn(t.value)), s = Y(() => m.ledger), i = Y(() => bn(n.value.value, s.value)), r = Y(() => m.pack?.level ?? "D"), o = Y(() => cs[r.value]), l = Y(() => ds(n.value.value, s.value, o.value));
    return (A, a) => (w(), $("div", Gf, [
      f("div", Yf, [
        a[0] || (a[0] = f("span", { class: "rlzc-ledger-label" }, "当前积分", -1)),
        f("b", {
          class: he(["rlzc-ledger-balance", { negative: i.value < 0 }])
        }, N(i.value >= 0 ? "+" : "") + N(i.value), 3),
        f("div", Hf, [
          f("span", null, N(r.value) + " 级　斩杀线 " + N(o.value), 1),
          l.value ? (w(), $("span", Kf, "待清算　距斩杀线 " + N(Math.max(0, o.value - i.value)) + " 分", 1)) : (w(), $("span", Zf, "无待清算"))
        ])
      ]),
      f("div", Jf, [
        a[1] || (a[1] = f("h4", null, "流水记录", -1)),
        s.value.length ? (w(), $("ul", qf, [
          (w(!0), $(q, null, xe([...s.value].reverse(), (c) => (w(), $("li", {
            key: `${c.mesIndex}-${c.delta}-${c.at}`,
            class: he(["rlzc-ledger-item", c.delta >= 0 ? "positive" : "neg"])
          }, N(D(pd)(c)), 3))), 128))
        ])) : (w(), $("p", Qf, "还没有收支记录。"))
      ])
    ]));
  }
}), ep = { class: "rlzc-card rlzc-subapi" }, tp = { class: "rlzc-subapi-head" }, np = ["data-kind"], sp = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, ip = {
  key: 0,
  class: "rlzc-preset-area"
}, rp = { class: "rlzc-preset-row" }, op = ["value"], lp = {
  key: 0,
  value: ""
}, Ap = ["value"], ap = ["disabled"], cp = ["disabled"], up = { class: "rlzc-stacked-field" }, dp = ["value"], fp = { class: "rlzc-stacked-field" }, pp = { class: "rlzc-key-wrap" }, hp = ["type", "value"], mp = ["aria-label"], gp = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, bp = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, xp = { class: "rlzc-stacked-field" }, vp = ["value"], yp = ["value"], _p = ["value"], wp = ["value"], kp = { class: "rlzc-conn-row" }, zp = ["data-kind"], $p = ["disabled"], Sp = {
  key: 1,
  class: "rlzc-option-list"
}, Ep = { class: "rlzc-option-row" }, Cp = ["aria-checked"], Mp = { class: "rlzc-option-row" }, Ip = ["aria-checked"], Tp = { class: "rlzc-option-row rlzc-option-row-timeout" }, Pp = { class: "rlzc-timeout-wrap" }, Np = ["value"], Rp = /* @__PURE__ */ Ke({
  __name: "SubApiCard",
  setup(e) {
    const t = Y(() => m.settings.subApi), n = Y(() => t.value.presets.find((B) => B.id === t.value.presetId) ?? null), s = /* @__PURE__ */ be([]), i = /* @__PURE__ */ be(!1), r = /* @__PURE__ */ be(!1), o = /* @__PURE__ */ be("none"), l = /* @__PURE__ */ be(""), A = Y(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : o.value === "ok" ? { kind: "on", text: "已连接" } : o.value === "fail" ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" }), a = Y(() => o.value === "ok" ? `已连接 · 共 ${s.value.length} 个模型` : o.value === "fail" ? `连接失败：${l.value}` : "未测试");
    function c() {
      Te();
    }
    function d(B) {
      t.value.source = B, o.value = "none", c();
    }
    function h() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function b() {
      const B = (await Ar("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!B) return;
      const z = { id: h(), name: B, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, z], t.value.presetId = z.id, s.value = [], o.value = "none", c();
    }
    async function I() {
      if (!n.value) return;
      const B = (await Ar("改名为：", n.value.name))?.trim();
      B && (n.value.name = B, c());
    }
    async function S() {
      n.value && await He(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((B) => B.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", s.value = [], o.value = "none", c());
    }
    function L(B) {
      t.value.presetId = B.target.value, s.value = [], o.value = "none", c();
    }
    function U(B, z) {
      n.value && (n.value[B] = z.target.value.trim(), c());
    }
    async function O() {
      if (n.value) {
        r.value = !0, o.value = "none", l.value = "";
        try {
          const B = await ad(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          s.value = B.models, !n.value.model && B.models.length && (n.value.model = B.models[0], c()), o.value = "ok";
        } catch (B) {
          o.value = "fail", l.value = Ko(B), s.value = await nl(n.value).catch(() => []);
        } finally {
          r.value = !1;
        }
      }
    }
    function x(B) {
      const z = Math.floor(Number(B.target.value));
      if (!Number.isFinite(z) || z < 5) {
        Pe("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = z, c();
    }
    function C(B, z) {
      t.value[B] = z, c();
    }
    return (B, z) => (w(), $("div", ep, [
      f("div", tp, [
        z[9] || (z[9] = f("h4", null, "副本事件检测", -1)),
        f("span", {
          class: "rlzc-dot",
          "data-kind": A.value.kind
        }, N(A.value.text), 9, np)
      ]),
      z[24] || (z[24] = f("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
      f("div", sp, [
        f("button", {
          class: he({ on: t.value.source === "off" }),
          onClick: z[0] || (z[0] = (j) => d("off"))
        }, "关闭", 2),
        f("button", {
          class: he({ on: t.value.source === "main" }),
          onClick: z[1] || (z[1] = (j) => d("main"))
        }, "跟随主API", 2),
        f("button", {
          class: he({ on: t.value.source === "preset" }),
          onClick: z[2] || (z[2] = (j) => d("preset"))
        }, "自设API", 2)
      ]),
      t.value.source === "preset" ? (w(), $("div", ip, [
        f("div", rp, [
          f("select", {
            class: "rlzc-input",
            value: t.value.presetId,
            onChange: L
          }, [
            t.value.presets.length ? K("", !0) : (w(), $("option", lp, "还没有保存的接口")),
            (w(!0), $(q, null, xe(t.value.presets, (j) => (w(), $("option", {
              key: j.id,
              value: j.id
            }, N(j.name), 9, Ap))), 128))
          ], 40, op),
          f("button", {
            class: "rlzc-icon-btn",
            "aria-label": "新建接口",
            type: "button",
            onClick: b
          }, [...z[10] || (z[10] = [
            f("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "aria-hidden": "true"
            }, [
              f("path", { d: "M8 3v10M3 8h10" })
            ], -1)
          ])]),
          f("button", {
            class: "rlzc-icon-btn",
            "aria-label": "改名",
            type: "button",
            disabled: !n.value,
            onClick: I
          }, [...z[11] || (z[11] = [
            f("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "aria-hidden": "true"
            }, [
              f("path", { d: "M11 2L14 5 5 14H2v-3L11 2z" })
            ], -1)
          ])], 8, ap),
          f("button", {
            class: "rlzc-icon-btn rlzc-danger",
            "aria-label": "删除接口",
            type: "button",
            disabled: !n.value,
            onClick: S
          }, [...z[12] || (z[12] = [
            f("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "aria-hidden": "true"
            }, [
              f("path", { d: "M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10" })
            ], -1)
          ])], 8, cp)
        ]),
        n.value ? (w(), $(q, { key: 0 }, [
          f("div", up, [
            z[13] || (z[13] = f("label", { class: "rlzc-label" }, "地址", -1)),
            f("input", {
              class: "rlzc-input",
              value: n.value.url,
              placeholder: "https://…/v1",
              onChange: z[3] || (z[3] = (j) => U("url", j))
            }, null, 40, dp)
          ]),
          f("div", fp, [
            z[16] || (z[16] = f("label", { class: "rlzc-label" }, "密钥", -1)),
            f("div", pp, [
              f("input", {
                class: "rlzc-input",
                type: i.value ? "text" : "password",
                value: n.value.key,
                autocomplete: "off",
                onChange: z[4] || (z[4] = (j) => U("key", j))
              }, null, 40, hp),
              f("button", {
                class: "rlzc-eye-btn",
                type: "button",
                "aria-label": i.value ? "隐藏密钥" : "显示密钥",
                onClick: z[5] || (z[5] = (j) => i.value = !i.value)
              }, [
                i.value ? (w(), $("svg", gp, [...z[14] || (z[14] = [
                  f("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                  f("circle", {
                    cx: "8",
                    cy: "8",
                    r: "2"
                  }, null, -1),
                  f("path", { d: "M2 2l12 12" }, null, -1)
                ])])) : (w(), $("svg", bp, [...z[15] || (z[15] = [
                  f("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                  f("circle", {
                    cx: "8",
                    cy: "8",
                    r: "2"
                  }, null, -1)
                ])]))
              ], 8, mp)
            ])
          ]),
          f("div", xp, [
            z[17] || (z[17] = f("label", { class: "rlzc-label" }, "模型", -1)),
            s.value.length ? (w(), $("select", {
              key: 0,
              class: "rlzc-input",
              value: n.value.model,
              onChange: z[6] || (z[6] = (j) => U("model", j))
            }, [
              s.value.includes(n.value.model) ? K("", !0) : (w(), $("option", {
                key: 0,
                value: n.value.model
              }, N(n.value.model || "请选择…"), 9, yp)),
              (w(!0), $(q, null, xe(s.value, (j) => (w(), $("option", {
                key: j,
                value: j
              }, N(j), 9, _p))), 128))
            ], 40, vp)) : (w(), $("input", {
              key: 1,
              class: "rlzc-input rlzc-input-disabled",
              value: n.value.model ? n.value.model : "先测试连接",
              readonly: "",
              tabindex: "-1"
            }, null, 8, wp))
          ]),
          f("div", kp, [
            f("span", {
              class: "rlzc-dot",
              "data-kind": o.value === "ok" ? "on" : o.value === "fail" ? "warn" : "off"
            }, N(a.value), 9, zp),
            f("button", {
              class: "rlzc-btn ghost",
              disabled: r.value || !n.value.url,
              onClick: O
            }, "测试连接", 8, $p)
          ])
        ], 64)) : K("", !0)
      ])) : K("", !0),
      t.value.source !== "off" ? (w(), $("div", Sp, [
        f("div", Ep, [
          z[19] || (z[19] = f("div", { class: "rlzc-option-label" }, [
            f("span", null, "省钱模式"),
            f("small", null, "只在有预设事件的轮次检测")
          ], -1)),
          f("button", {
            role: "switch",
            type: "button",
            "aria-checked": t.value.saveMode ? "true" : "false",
            class: he(["rlzc-toggle", { on: t.value.saveMode }]),
            onClick: z[7] || (z[7] = (j) => C("saveMode", !t.value.saveMode))
          }, [...z[18] || (z[18] = [
            f("span", null, null, -1)
          ])], 10, Cp)
        ]),
        f("div", Mp, [
          z[21] || (z[21] = f("div", { class: "rlzc-option-label" }, [
            f("span", null, "等检测完再写下一轮"),
            f("small", null, "关掉更快，状态可能晚一轮")
          ], -1)),
          f("button", {
            role: "switch",
            type: "button",
            "aria-checked": t.value.wait ? "true" : "false",
            class: he(["rlzc-toggle", { on: t.value.wait }]),
            onClick: z[8] || (z[8] = (j) => C("wait", !t.value.wait))
          }, [...z[20] || (z[20] = [
            f("span", null, null, -1)
          ])], 10, Ip)
        ]),
        f("div", Tp, [
          z[23] || (z[23] = f("span", null, "超时", -1)),
          f("div", Pp, [
            f("input", {
              type: "number",
              min: "5",
              class: "rlzc-input rlzc-input-num",
              value: t.value.timeoutSec,
              onChange: x
            }, null, 40, Np),
            z[22] || (z[22] = f("span", { class: "rlzc-unit" }, "秒", -1))
          ])
        ])
      ])) : K("", !0)
    ]));
  }
}), Fp = { class: "rlzc-settings" }, Op = { class: "rlzc-card" }, jp = ["value"], Dp = { class: "rlzc-card" }, Lp = { class: "rlzc-depth" }, Bp = { class: "rlzc-field" }, Vp = ["value"], Up = { class: "rlzc-field" }, Wp = ["value"], Gp = { class: "rlzc-field" }, Yp = ["value"], Hp = { class: "rlzc-field" }, Kp = ["value"], Zp = { class: "rlzc-card" }, Jp = ["value", "onChange"], qp = { class: "rlzc-card" }, Qp = {
  key: 0,
  class: "rlzc-list"
}, Xp = ["onClick"], eh = {
  key: 1,
  class: "rlzc-hint"
}, th = {
  key: 2,
  class: "rlzc-errors"
}, nh = { class: "rlzc-card" }, sh = { class: "rlzc-check" }, ih = ["checked"], rh = { class: "rlzc-check" }, oh = ["checked"], lh = /* @__PURE__ */ Ke({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ be([]), n = /* @__PURE__ */ be(null);
    function s(c, d) {
      const h = Math.max(0, Math.min(1e4, Math.floor(Number(d.target.value) || 0)));
      m.settings.depths[c] = h, Te();
    }
    async function i(c) {
      const d = c.target, h = d.files?.[0];
      d.value = "", h && (t.value = Cd(await h.text()), t.value.length || Pe("success", `已导入副本包：${h.name}`));
    }
    async function r(c, d) {
      await He(`确定删除自定义副本包《${d}》吗？`) && Md(c);
    }
    const o = ["D", "C", "B", "A", "S"];
    function l(c, d) {
      const h = Math.floor(Number(d.target.value));
      !Number.isFinite(h) || h < 1 || (m.settings.genericCaps = { ...m.settings.genericCaps, [c]: h }, Te());
    }
    function A(c) {
      Xd(c.target.value);
    }
    function a(c, d) {
      m.settings[c] = d.target.checked, Te();
    }
    return (c, d) => (w(), $(q, null, [
      f("div", Fp, [
        f("div", Op, [
          d[8] || (d[8] = f("h4", null, "副本信息显示位置", -1)),
          f("select", {
            class: "rlzc-input",
            value: D(m).settings.panelDisplay,
            onChange: A
          }, [...d[7] || (d[7] = [
            f("option", { value: "panel" }, "扩展面板（默认）", -1),
            f("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, jp),
          d[9] || (d[9] = f("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        f("div", Dp, [
          d[14] || (d[14] = f("h4", null, "注入深度", -1)),
          d[15] || (d[15] = f("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
          f("div", Lp, [
            f("label", Bp, [
              d[10] || (d[10] = f("span", null, [
                Je("副本暗号"),
                f("small", null, "触发世界书的副本条目")
              ], -1)),
              f("input", {
                type: "number",
                min: "0",
                class: "rlzc-input",
                value: D(m).settings.depths.token,
                onChange: d[0] || (d[0] = (h) => s("token", h))
              }, null, 40, Vp)
            ]),
            f("label", Up, [
              d[11] || (d[11] = f("span", null, [
                Je("副本进度"),
                f("small", null, "阶段、轮次、时限、副本状态")
              ], -1)),
              f("input", {
                type: "number",
                min: "0",
                class: "rlzc-input",
                value: D(m).settings.depths.progress,
                onChange: d[1] || (d[1] = (h) => s("progress", h))
              }, null, 40, Wp)
            ]),
            f("label", Gp, [
              d[12] || (d[12] = f("span", null, [
                Je("本轮指令"),
                f("small", null, "本轮事件与时限写法")
              ], -1)),
              f("input", {
                type: "number",
                min: "0",
                class: "rlzc-input",
                value: D(m).settings.depths.turn,
                onChange: d[2] || (d[2] = (h) => s("turn", h))
              }, null, 40, Yp)
            ]),
            f("label", Hp, [
              d[13] || (d[13] = f("span", null, [
                Je("账户"),
                f("small", null, "积分余额与清算状态")
              ], -1)),
              f("input", {
                type: "number",
                min: "0",
                class: "rlzc-input",
                value: D(m).settings.depths.ledger,
                onChange: d[3] || (d[3] = (h) => s("ledger", h))
              }, null, 40, Kp)
            ])
          ])
        ]),
        Ee(Rp),
        f("div", Zp, [
          d[16] || (d[16] = f("h4", null, "通用副本默认轮数上限", -1)),
          d[17] || (d[17] = f("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
          (w(), $(q, null, xe(o, (h) => f("label", {
            key: h,
            class: "rlzc-field"
          }, [
            f("span", null, N(h) + " 级", 1),
            f("input", {
              type: "number",
              min: "1",
              class: "rlzc-input",
              value: D(m).settings.genericCaps[h],
              onChange: (b) => l(h, b)
            }, null, 40, Jp)
          ])), 64))
        ]),
        f("div", qp, [
          d[18] || (d[18] = f("h4", null, "自定义副本包", -1)),
          D(m).settings.customPacks.length ? (w(), $("ul", Qp, [
            (w(!0), $(q, null, xe(D(m).settings.customPacks, (h) => (w(), $("li", {
              key: h.id
            }, [
              f("span", null, [
                Je(N(h.level) + "｜" + N(h.name) + " ", 1),
                f("small", null, "v" + N(h.version), 1)
              ]),
              f("button", {
                class: "rlzc-btn ghost small",
                onClick: (b) => r(h.id, h.name)
              }, "删除", 8, Xp)
            ]))), 128))
          ])) : (w(), $("p", eh, "还没有导入自定义副本包。")),
          f("input", {
            ref_key: "fileInput",
            ref: n,
            type: "file",
            accept: ".json,application/json",
            hidden: "",
            onChange: i
          }, null, 544),
          f("button", {
            class: "rlzc-btn",
            onClick: d[4] || (d[4] = (h) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (w(), $("ul", th, [
            (w(!0), $(q, null, xe(t.value, (h, b) => (w(), $("li", { key: b }, N(h), 1))), 128))
          ])) : K("", !0)
        ]),
        f("div", nh, [
          d[21] || (d[21] = f("h4", null, "其他", -1)),
          f("label", sh, [
            f("input", {
              type: "checkbox",
              checked: D(m).settings.showBall,
              onChange: d[5] || (d[5] = (h) => a("showBall", h))
            }, null, 40, ih),
            d[19] || (d[19] = Je("显示悬浮球", -1))
          ]),
          f("label", rh, [
            f("input", {
              type: "checkbox",
              checked: D(m).settings.debug,
              onChange: d[6] || (d[6] = (h) => a("debug", h))
            }, null, 40, oh),
            d[20] || (d[20] = Je("调试模式", -1))
          ])
        ])
      ]),
      d[22] || (d[22] = f("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), Ah = { class: "rlzc-debug" }, ah = {
  key: 0,
  class: "rlzc-note"
}, ch = {
  key: 0,
  class: "rlzc-note"
}, uh = {
  key: 1,
  class: "rlzc-note"
}, dh = {
  key: 2,
  class: "rlzc-card"
}, fh = { class: "rlzc-row" }, ph = ["disabled"], hh = ["value"], mh = ["disabled"], gh = { class: "rlzc-row" }, bh = ["disabled"], xh = ["disabled"], vh = {
  key: 3,
  class: "rlzc-card"
}, yh = ["onUpdate:modelValue", "disabled"], _h = ["disabled"], wh = { class: "rlzc-card" }, kh = { class: "rlzc-row" }, zh = ["disabled"], $h = ["disabled"], Sh = ["disabled"], Eh = {
  class: "rlzc-row",
  style: { "margin-top": "4px" }
}, Ch = ["disabled"], Mh = ["disabled"], Ih = { class: "rlzc-hint" }, Th = {
  key: 0,
  class: "rlzc-hint"
}, Ph = { class: "rlzc-card" }, Nh = {
  key: 0,
  class: "rlzc-hint"
}, Rh = { class: "rlzc-hint" }, Fh = { class: "rlzc-list rlzc-warns" }, Oh = { class: "rlzc-card" }, jh = {
  key: 0,
  class: "rlzc-list"
}, Dh = ["disabled", "onClick"], Lh = {
  key: 1,
  class: "rlzc-hint"
}, Bh = {
  key: 4,
  class: "rlzc-card"
}, Vh = { class: "rlzc-pre" }, Uh = {
  key: 0,
  class: "rlzc-pre"
}, Wh = {
  class: "rlzc-card",
  open: ""
}, Gh = { class: "rlzc-pre" }, Yh = { class: "rlzc-card" }, Hh = { class: "rlzc-pre" }, Kh = { class: "rlzc-card" }, Zh = { class: "rlzc-pre" }, Jh = { class: "rlzc-card" }, qh = { class: "rlzc-table" }, Qh = ["disabled"], Xh = /* @__PURE__ */ Ke({
  __name: "DebugTab",
  setup(e) {
    const t = Y(() => m.settings.debug), n = /* @__PURE__ */ be(""), s = /* @__PURE__ */ be(null), i = /* @__PURE__ */ es({});
    ns(
      () => [m.tick, m.pack?.id],
      () => {
        for (const P of Object.keys(i)) delete i[P];
        const j = al() ?? {};
        for (const P of m.pack?.roles ?? []) i[P] = j[P] ?? "";
      },
      { immediate: !0 }
    );
    const r = Y(() => {
      m.tick;
      const j = ie(), P = [], R = m.session?.entryIndex ?? 0;
      for (let Q = R; Q < j.length; Q++) {
        const fe = j[Q]?.extra?.rlzc;
        fe && P.push({ index: Q, snap: fe });
      }
      return P.reverse().slice(0, 60);
    }), o = Y(
      () => new Set((m.audit?.warnings ?? []).filter((j) => j.kind === "limit" || j.kind === "eventMissed").map((j) => j.index))
    ), l = Y(() => {
      if (m.tick, !m.session || !m.pack || !m.progress) return null;
      const j = ie(), P = as(j, m.progress.entryIndex);
      let R = null;
      for (let Q = j.length - 1; Q >= m.progress.entryIndex; Q--) {
        const fe = j[Q]?.extra?.rlzc?.sub;
        if (fe) {
          R = fe;
          break;
        }
      }
      return {
        text: P ? Jo(m.pack, P.state) : "",
        state: P?.state ?? null,
        record: R
      };
    }), A = { done: "✓", missed: "✗", void: "–" };
    function a(j) {
      if (!j.sub && !j.skippedEvents?.length) return "";
      const P = [];
      j.sub?.skipped && P.push(`未更新（${j.sub.error ?? ""}）`);
      for (const R of j.sub?.events ?? []) P.push(`${R.id}${A[R.status]}`);
      for (const R of j.skippedEvents ?? []) P.push(`跳过${R.id}`);
      return j.sub && !j.sub.skipped && !P.length && P.push("已整理"), P.join(" ");
    }
    const c = Y(() => {
      const j = m.progress;
      if (!j) return null;
      const { perMessage: P, phase: R, next: Q, ...fe } = j;
      return {
        phase: R.id + " " + R.name,
        ...fe,
        next: Q ? { round: Q.round, skipFrom: Q.skipFrom, events: Q.events.map((le) => le.id) } : null,
        messages: Object.keys(P).length
      };
    });
    function d() {
      n.value && Bd(n.value);
    }
    function h() {
      s.value !== null && s.value >= 0 && Vd(s.value);
    }
    function b() {
      Ud({ ...i });
    }
    const I = /* @__PURE__ */ be(null), S = /* @__PURE__ */ be(""), L = /* @__PURE__ */ be(null), U = Y(() => yn(ie())), O = Y(() => bn(U.value.value, m.ledger)), x = Y(() => m.pack ? ds(U.value.value, m.ledger, cs[m.pack.level]) : !1);
    function C() {
      I.value !== null && (Pd(I.value, S.value || "手动调整"), I.value = null, S.value = "");
    }
    function B() {
      L.value !== null && (Nd(L.value), L.value = null);
    }
    const z = (j) => JSON.stringify(j, null, 2);
    return (j, P) => (w(), $("div", Ah, [
      D(m).session ? (w(), $(q, { key: 1 }, [
        t.value ? K("", !0) : (w(), $("p", ch, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        D(m).pack && D(m).session.packVersion !== D(m).pack.version ? (w(), $("p", uh, " 入场时副本包版本为 " + N(D(m).session.packVersion) + "，当前为 " + N(D(m).pack.version) + "。 ", 1)) : K("", !0),
        D(m).pack?.phases.length ? (w(), $("div", dh, [
          P[7] || (P[7] = f("h4", null, "手动修正", -1)),
          f("div", fh, [
            wt(f("select", {
              "onUpdate:modelValue": P[0] || (P[0] = (R) => n.value = R),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              P[6] || (P[6] = f("option", { value: "" }, "切换到阶段…", -1)),
              (w(!0), $(q, null, xe(D(m).pack.phases, (R) => (w(), $("option", {
                key: R.id,
                value: R.id
              }, N(R.name), 9, hh))), 128))
            ], 8, ph), [
              [ko, n.value]
            ]),
            f("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: d
            }, "切换", 8, mh)
          ]),
          f("div", gh, [
            wt(f("input", {
              "onUpdate:modelValue": P[1] || (P[1] = (R) => s.value = R),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, bh), [
              [
                Zt,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            f("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: h
            }, "修正轮次", 8, xh)
          ])
        ])) : K("", !0),
        D(m).pack?.roles?.length ? (w(), $("div", vh, [
          P[8] || (P[8] = f("h4", null, "角色登记", -1)),
          (w(!0), $(q, null, xe(D(m).pack.roles, (R) => (w(), $("label", {
            key: R,
            class: "rlzc-field"
          }, [
            f("span", null, N(R), 1),
            wt(f("input", {
              "onUpdate:modelValue": (Q) => i[R] = Q,
              class: "rlzc-input",
              disabled: !t.value,
              placeholder: "未登记"
            }, null, 8, yh), [
              [Zt, i[R]]
            ])
          ]))), 128)),
          f("button", {
            class: "rlzc-btn small",
            disabled: !t.value,
            onClick: b
          }, "保存登记", 8, _h)
        ])) : K("", !0),
        f("div", wh, [
          P[9] || (P[9] = f("h4", null, "手动调整账本", -1)),
          f("div", kh, [
            wt(f("input", {
              "onUpdate:modelValue": P[2] || (P[2] = (R) => I.value = R),
              type: "number",
              class: "rlzc-input",
              placeholder: "金额（可正可负）",
              disabled: !t.value
            }, null, 8, zh), [
              [
                Zt,
                I.value,
                void 0,
                { number: !0 }
              ]
            ]),
            wt(f("input", {
              "onUpdate:modelValue": P[3] || (P[3] = (R) => S.value = R),
              class: "rlzc-input",
              placeholder: "备注",
              disabled: !t.value
            }, null, 8, $h), [
              [Zt, S.value]
            ]),
            f("button", {
              class: "rlzc-btn small",
              disabled: !t.value || I.value === null,
              onClick: C
            }, "追加流水", 8, Sh)
          ]),
          f("div", Eh, [
            wt(f("input", {
              "onUpdate:modelValue": P[4] || (P[4] = (R) => L.value = R),
              type: "number",
              class: "rlzc-input",
              placeholder: "修改初始余额",
              disabled: !t.value
            }, null, 8, Ch), [
              [
                Zt,
                L.value,
                void 0,
                { number: !0 }
              ]
            ]),
            f("button", {
              class: "rlzc-btn small",
              disabled: !t.value || L.value === null,
              onClick: B
            }, "设置初始余额", 8, Mh)
          ]),
          f("p", Ih, "当前初始余额：" + N(U.value.value) + "（" + N(U.value.source) + "）", 1),
          O.value !== null ? (w(), $("p", Th, "账本余额：" + N(O.value) + "　待清算：" + N(x.value ? "是" : "否"), 1)) : K("", !0)
        ]),
        f("div", Ph, [
          P[11] || (P[11] = f("h4", null, "<副本> 核对", -1)),
          D(m).audit?.warnings.length ? (w(), $(q, { key: 1 }, [
            f("p", Rh, "共 " + N(D(m).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            f("ul", Fh, [
              (w(!0), $(q, null, xe(D(m).audit.warnings.slice(-30).reverse(), (R, Q) => (w(), $("li", { key: Q }, [
                f("span", null, [
                  f("small", null, "#" + N(R.index) + "｜" + N(R.phase) + "第" + N(R.round) + "轮", 1),
                  P[10] || (P[10] = f("br", null, null, -1)),
                  Je("⚠️ " + N(R.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (w(), $("p", Nh, "没有发现问题。"))
        ]),
        f("div", Oh, [
          P[12] || (P[12] = f("h4", null, "手动操作记录", -1)),
          D(m).session.manual.length ? (w(), $("ul", jh, [
            (w(!0), $(q, null, xe(D(m).session.manual, (R, Q) => (w(), $("li", { key: Q }, [
              f("code", null, "#" + N(R.atIndex) + " " + N(R.kind) + " " + N("phase" in R ? R.phase : "") + N("round" in R ? R.round : "") + N("targetPhase" in R ? `${R.targetPhase}:${R.targetRound}` : ""), 1),
              f("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (fe) => D(Wd)(Q)
              }, "撤销", 8, Dh)
            ]))), 128))
          ])) : (w(), $("p", Lh, "无"))
        ]),
        l.value && (l.value.state || l.value.record) ? (w(), $("details", Bh, [
          P[13] || (P[13] = f("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          f("pre", Vh, N(l.value.text || "（尚无状态）"), 1),
          l.value.record ? (w(), $("pre", Uh, N(z(l.value.record)), 1)) : K("", !0),
          P[14] || (P[14] = f("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : K("", !0),
        f("details", Wh, [
          P[15] || (P[15] = f("summary", null, "本次注入", -1)),
          f("pre", Gh, N([D(m).lastInjection.token, D(m).lastInjection.progress, D(m).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        f("details", Yh, [
          P[16] || (P[16] = f("summary", null, "重放结果", -1)),
          f("pre", Hh, N(z(c.value)), 1)
        ]),
        f("details", Kh, [
          P[17] || (P[17] = f("summary", null, "会话原始数据", -1)),
          f("pre", Zh, N(z(D(m).session)), 1)
        ]),
        f("details", Jh, [
          P[19] || (P[19] = f("summary", null, "每楼快照（最近60条）", -1)),
          f("table", qh, [
            P[18] || (P[18] = f("thead", null, [
              f("tr", null, [
                f("th", null, "楼"),
                f("th", null, "阶段"),
                f("th", null, "轮"),
                f("th", null, "钟时"),
                f("th", null, "时限"),
                f("th", null, "事件"),
                f("th", null, "检测")
              ])
            ], -1)),
            f("tbody", null, [
              (w(!0), $(q, null, xe(r.value, (R) => (w(), $("tr", {
                key: R.index,
                class: he({ "rlzc-row-warn": o.value.has(R.index) })
              }, [
                f("td", null, N(R.index) + N(R.snap.entry ? "★" : ""), 1),
                f("td", null, N(R.snap.phase), 1),
                f("td", null, N(R.snap.round), 1),
                f("td", null, N(R.snap.clock ?? ""), 1),
                f("td", null, N(R.snap.limit?.text ?? ""), 1),
                f("td", null, N(R.snap.injected.join(" ")), 1),
                f("td", null, N(a(R.snap)), 1)
              ], 2))), 128))
            ])
          ])
        ]),
        f("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: P[5] || (P[5] = //@ts-ignore
          (...R) => D(pr) && D(pr)(...R))
        }, "删除副本会话", 8, Qh)
      ], 64)) : (w(), $("p", ah, "当前聊天没有副本会话。"))
    ]));
  }
}), em = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, tm = { class: "rlzc-head" }, nm = { class: "rlzc-tabs" }, sm = ["onClick"], im = { class: "rlzc-body" }, rm = /* @__PURE__ */ Ke({
  __name: "Panel",
  setup(e) {
    const t = [
      { id: "system", label: "系统" },
      { id: "ledger", label: "账本" },
      { id: "settings", label: "设置" },
      { id: "debug", label: "调试" }
    ];
    async function n(s) {
      if (s === "debug" && !m.debugUnlocked) {
        if (!await He("此页会显示副本真相，确定要打开吗？")) return;
        m.debugUnlocked = !0;
      }
      m.tab = s;
    }
    return (s, i) => (w(), $("div", {
      class: "rlzc-backdrop",
      onClick: i[1] || (i[1] = Ca((r) => D(m).panelOpen = !1, ["self"]))
    }, [
      f("section", em, [
        f("header", tm, [
          i[2] || (i[2] = f("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          f("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: i[0] || (i[0] = (r) => D(m).panelOpen = !1)
          }, "×")
        ]),
        f("nav", nm, [
          (w(), $(q, null, xe(t, (r) => f("button", {
            key: r.id,
            class: he({ on: D(m).tab === r.id }),
            onClick: (o) => n(r.id)
          }, N(r.label), 11, sm)), 64))
        ]),
        f("div", im, [
          D(m).tab === "system" ? (w(), tt(Wf, { key: 0 })) : D(m).tab === "ledger" ? (w(), tt(Xf, { key: 1 })) : D(m).tab === "settings" ? (w(), tt(lh, { key: 2 })) : D(m).tab === "debug" && D(m).debugUnlocked ? (w(), tt(Xh, { key: 3 })) : K("", !0)
        ])
      ])
    ]));
  }
}), om = /* @__PURE__ */ Ke({
  __name: "App",
  setup(e) {
    return (t, n) => (w(), $(q, null, [
      D(m).settings.showBall ? (w(), tt(tf, { key: 0 })) : K("", !0),
      D(m).panelOpen ? (w(), tt(rm, { key: 1 })) : K("", !0)
    ], 64));
  }
}), lm = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field{align-items:flex-start}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-depth .rlzc-field>.rlzc-input{flex:0 0 72px;width:72px}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-conn-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout{justify-content:flex-start;gap:16px}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px}.rlzc-input-num{width:72px}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero{display:flex;align-items:baseline;justify-content:space-between;gap:12px}.rlzc-ledger-label{font-size:12px;color:var(--muted)}.rlzc-ledger-balance{font-size:28px;font-variant-numeric:tabular-nums}.rlzc-ledger-balance.negative{color:#c9534f}.rlzc-ledger-list{list-style:none;margin:0;padding:0}.rlzc-ledger-item{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:5px 0;border-bottom:1px dashed var(--line)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-entry{font-size:13px;font-variant-numeric:tabular-nums;flex:1;min-width:0;word-break:break-all}';
function Am(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function ml(e, t, n) {
  const s = ce().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function am() {
  const e = Am();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await ml("/api/extensions/version", e, t);
    if (n.status === 404) continue;
    if (!n.ok) throw new Error(`检查失败（${n.status}）`);
    const s = await n.json();
    return {
      folder: e,
      global: t,
      isGit: !!s.currentCommitHash,
      isUpToDate: !!s.isUpToDate,
      commit: String(s.currentCommitHash ?? "").slice(0, 7),
      branch: String(s.currentBranchName ?? "")
    };
  }
  throw new Error("找不到扩展的安装文件夹");
}
async function cm(e) {
  const t = await ml("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const xr = "rlzc-host", vr = "rlzc-menu-btn", yr = "rlzc-settings-drawer";
function um() {
  if (document.getElementById(xr)) return;
  const e = document.createElement("div");
  e.id = xr, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = lm, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), Ta(om).mount(s), gl(), bl();
}
function gl(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => gl(e + 1), 500);
    return;
  }
  if (document.getElementById(vr)) return;
  const n = document.createElement("div");
  n.id = vr, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const i = document.createElement("span");
  i.textContent = "回廊种菜系统", n.append(s, i), n.addEventListener("click", () => {
    m.panelOpen = !m.panelOpen;
  }), t.appendChild(n);
}
function bl(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => bl(e + 1), 500);
    return;
  }
  if (document.getElementById(yr)) return;
  const n = (z, j = "", P = "") => {
    const R = document.createElement(z);
    return j && (R.className = j), P && (R.textContent = P), R;
  }, s = n("div");
  s.id = yr;
  const i = n("div", "inline-drawer"), r = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), r.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const A = n("div", "inline-drawer-content"), a = n("div", "menu_button menu_button_icon", "打开面板");
  a.prepend(n("i", "fa-solid fa-seedling")), a.addEventListener("click", () => m.panelOpen = !0);
  const c = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  c.addEventListener("click", () => {
    m.settings.ball = { x: null, y: null }, m.settings.showBall = !0, Te();
  });
  const d = n("label", "checkbox_label"), h = document.createElement("input");
  h.type = "checkbox", h.addEventListener("change", () => {
    m.settings.showBall = h.checked, Te();
  }), d.append(h, n("span", "", "显示悬浮球")), ns(() => m.settings.showBall, (z) => h.checked = z, { immediate: !0 });
  const b = n("div", "flex-container");
  b.append(a, c);
  const I = n("div", "flex-container alignitemscenter"), S = n("small", "rlzc-update-status", "正在检查更新…"), L = n("div", "menu_button menu_button_icon", "检查更新"), U = n("div", "menu_button menu_button_icon", "立即更新"), O = n("div", "menu_button menu_button_icon", "刷新页面");
  U.style.display = "none", O.style.display = "none", I.append(S, L, U, O);
  let x = null, C = !1;
  const B = async () => {
    if (!C) {
      C = !0, S.textContent = "正在检查更新…", U.style.display = "none";
      try {
        x = await am();
        const z = x.commit ? `（${x.commit}）` : "";
        x.isGit ? x.isUpToDate ? S.textContent = `已是最新版本${z}` : (S.textContent = `有新版本可以更新，当前${z || "版本较旧"}`, U.style.display = "") : S.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = x.isGit && !x.isUpToDate ? "" : "none";
      } catch (z) {
        S.textContent = `检查更新失败：${z.message}`;
      } finally {
        C = !1;
      }
    }
  };
  L.addEventListener("click", () => void B()), U.addEventListener("click", async () => {
    if (!(!x || C)) {
      C = !0, S.textContent = "正在更新…", U.style.display = "none";
      try {
        await cm(x), l.style.display = "none", S.textContent = "更新完成，刷新页面后生效。", O.style.display = "";
      } catch (z) {
        S.textContent = `更新失败：${z.message}`, U.style.display = "";
      } finally {
        C = !1;
      }
    }
  }), O.addEventListener("click", () => location.reload()), setTimeout(() => void B(), 3e3), A.append(b, d, I, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), i.append(r, A), s.append(i), t.append(s);
}
globalThis.rlzcInterceptor = jd;
function Ds() {
  Ed(), it("MESSAGE_RECEIVED", (e, t) => qd(Number(e), t)), it("CHARACTER_MESSAGE_RENDERED", (e) => Os(Number(e))), it("MESSAGE_DELETED", () => Fs()), it("MESSAGE_SWIPED", (e) => {
    Dd(Number(e)), Os(Number(e));
  }), it("MESSAGE_EDITED", () => Fs()), it("MESSAGE_UPDATED", (e) => {
    Fs(), Os(Number(e));
  }), it("CHAT_CHANGED", () => mr()), it("MORE_MESSAGES_LOADED", () => _i()), um(), mr(), console.log("[rlzc] 回廊种菜系统已加载", m.settings);
}
const _r = window.jQuery;
typeof _r == "function" ? _r(() => Ds()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ds) : Ds();
