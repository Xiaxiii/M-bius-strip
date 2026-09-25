/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Is(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const J = {}, ht = [], gt = () => {
}, QA = () => !1, jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Dn = (e) => e.startsWith("onUpdate:"), ke = Object.assign, qA = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Eo = Object.prototype.hasOwnProperty, U = (e, t) => Eo.call(e, t), L = Array.isArray, Xe = (e) => an(e) === "[object Map]", yt = (e) => an(e) === "[object Set]", sA = (e) => an(e) === "[object Date]", Y = (e) => typeof e == "function", se = (e) => typeof e == "string", Fe = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", XA = (e) => (Q(e) || Y(e)) && Y(e.then) && Y(e.catch), ei = Object.prototype.toString, an = (e) => ei.call(e), Co = (e) => an(e).slice(8, -1), ti = (e) => an(e) === "[object Object]", Ts = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ht = /* @__PURE__ */ Is(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Mo = /-\w/g, _e = Bn(
  (e) => e.replace(Mo, (t) => t.slice(1).toUpperCase())
), Io = /\B([A-Z])/g, wt = Bn(
  (e) => e.replace(Io, "-$1").toLowerCase()
), ni = Bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ts = Bn(
  (e) => e ? `on${ni(e)}` : ""
), Ne = (e, t) => !Object.is(e, t), vn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, si = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ln = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let AA;
const Vn = () => AA || (AA = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wn(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], A = se(s) ? No(s) : Wn(s);
      if (A)
        for (const i in A)
          t[i] = A[i];
    }
    return t;
  } else if (se(e) || Q(e))
    return e;
}
const To = /;(?![^(]*\))/g, Po = /:([^]+)/, Ro = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function No(e) {
  const t = {};
  return e.replace(Ro, (n) => n.startsWith("/*") ? "" : n).split(To).forEach((n) => {
    if (n) {
      const s = n.split(Po);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ct(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (L(e))
    for (let n = 0; n < e.length; n++) {
      const s = ct(e[n]);
      s && (t += s + " ");
    }
  else if (Q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Fo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Oo = /* @__PURE__ */ Is(Fo);
function Ai(e) {
  return !!e || e === "";
}
function jo(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let A = 0; s && A < e.length; A++)
    s = tt(e[A], t[A], n);
  return s;
}
function iA(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), A = new Uint8Array(s.length);
  for (const i of e) {
    let o = -1;
    for (let r = 0; r < s.length; r++)
      if (!A[r] && tt(i, s[r], n)) {
        o = r;
        break;
      }
    if (o < 0) return !1;
    A[o] = 1;
  }
  return !0;
}
function Do(e, t, n) {
  let s = Xe(e), A = Xe(t);
  if (s || A || (s = yt(e), A = yt(t), s || A))
    return s && A ? iA(e, t, n) : !1;
  const i = Object.keys(e).length, o = Object.keys(t).length;
  if (i !== o)
    return !1;
  for (const r in e) {
    const l = e.hasOwnProperty(r), c = t.hasOwnProperty(r);
    if (l && !c || !l && c || !tt(e[r], t[r], n))
      return !1;
  }
  return String(e) === String(t);
}
function oA(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [A, i] = n;
  if (A.has(e) || i.has(t))
    return A.get(e) === t && i.get(t) === e;
  A.set(e, t), i.set(t, e);
  const o = s(e, t, n);
  return A.delete(e), i.delete(t), o;
}
function tt(e, t, n) {
  if (e === t) return !0;
  let s = sA(e), A = sA(t);
  return s || A ? s && A ? e.getTime() === t.getTime() : !1 : (s = Fe(e), A = Fe(t), s || A ? e === t : (s = L(e), A = L(t), s || A ? s && A ? oA(e, t, n, jo) : !1 : (s = Q(e), A = Q(t), s || A ? !s || !A ? !1 : oA(e, t, n, Do) : String(e) === String(t))));
}
function Bo(e, t) {
  return e.findIndex((n) => tt(n, t));
}
const ii = (e) => !!(e && e.__v_isRef === !0), T = (e) => se(e) ? e : e == null ? "" : L(e) || Q(e) && (e.toString === ei || !Y(e.toString)) ? ii(e) ? T(e.value) : JSON.stringify(e, oi, 2) : String(e), oi = (e, t) => ii(t) ? oi(e, t.value) : Xe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, A], i) => (n[ns(s, i) + " =>"] = A, n),
    {}
  )
} : yt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ns(n))
} : Fe(t) ? ns(t) : Q(t) && !L(t) && !ti(t) ? String(t) : t, ns = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Fe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let oe;
class Lo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && oe && (oe.active ? (this.parent = oe, this.index = (oe.scopes || (oe.scopes = [])).push(
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
        const A = this.scopes.slice();
        for (t = 0, n = A.length; t < n; t++)
          A[t].resume();
      }
      const s = this.effects.slice();
      for (t = 0, n = s.length; t < n; t++)
        s[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = oe;
      try {
        return oe = this, t();
      } finally {
        oe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = oe, oe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (oe === this)
        oe = this.prevScope;
      else {
        let t = oe;
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
        const A = this.scopes.slice();
        for (n = 0, s = A.length; n < s; n++)
          A[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const A = this.parent.scopes.pop();
        A && A !== this && (this.parent.scopes[this.index] = A, A.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Vo() {
  return oe;
}
let Z;
const ss = /* @__PURE__ */ new WeakSet();
class ri {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, oe && (oe.active ? oe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ss.has(this) && (ss.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ci(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, rA(this), ai(this);
    const t = Z, n = we;
    Z = this, we = !0;
    try {
      return this.fn();
    } finally {
      ui(this), Z = t, we = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ns(t);
      this.deps = this.depsTail = void 0, rA(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ss.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    xs(this) && this.run();
  }
  get dirty() {
    return xs(this);
  }
}
let li = 0, Ut, Kt;
function ci(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Kt, Kt = e;
    return;
  }
  e.next = Ut, Ut = e;
}
function Ps() {
  li++;
}
function Rs() {
  if (--li > 0)
    return;
  if (Kt) {
    let t = Kt;
    for (Kt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ut; ) {
    let t = Ut;
    for (Ut = void 0; t; ) {
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
function ai(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ui(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const A = s.prevDep;
    s.version === -1 ? (s === n && (n = A), Ns(s), Wo(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = A;
  }
  e.deps = t, e.depsTail = n;
}
function xs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (fi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function fi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === en) || (e.globalVersion = en, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Z, s = we;
  Z = e, we = !0;
  try {
    ai(e);
    const A = e.fn(e._value);
    (t.version === 0 || Ne(A, e._value)) && (e.flags |= 128, e._value = A, t.version++);
  } catch (A) {
    throw t.version++, A;
  } finally {
    Z = n, we = s, ui(e), e.flags &= -3;
  }
}
function Ns(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: A } = e;
  if (s && (s.nextSub = A, e.prevSub = void 0), A && (A.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ns(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Wo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let we = !0;
const di = [];
function nt() {
  di.push(we), we = !1;
}
function st() {
  const e = di.pop();
  we = e === void 0 ? !0 : e;
}
function rA(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Z;
    Z = void 0;
    try {
      t();
    } finally {
      Z = n;
    }
  }
}
let en = 0;
class Go {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Z || !we || Z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Z)
      n = this.activeLink = new Go(Z, this), Z.deps ? (n.prevDep = Z.depsTail, Z.depsTail.nextDep = n, Z.depsTail = n) : Z.deps = Z.depsTail = n, pi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Z.depsTail, n.nextDep = void 0, Z.depsTail.nextDep = n, Z.depsTail = n, Z.deps === n && (Z.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, en++, this.notify(t);
  }
  notify(t) {
    Ps();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Rs();
    }
  }
}
function pi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        pi(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const bs = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ Symbol(
  ""
), ys = /* @__PURE__ */ Symbol(
  ""
), tn = /* @__PURE__ */ Symbol(
  ""
);
function re(e, t, n) {
  if (we && Z) {
    let s = bs.get(e);
    s || bs.set(e, s = /* @__PURE__ */ new Map());
    let A = s.get(n);
    A || (s.set(n, A = new Fs()), A.map = s, A.key = n), A.track();
  }
}
function Ge(e, t, n, s, A, i) {
  const o = bs.get(e);
  if (!o) {
    en++;
    return;
  }
  const r = (l) => {
    l && l.trigger();
  };
  if (Ps(), t === "clear")
    o.forEach(r);
  else {
    const l = L(e), c = l && Ts(n);
    if (l && n === "length") {
      const u = Number(s);
      o.forEach((a, p) => {
        (p === "length" || p === tn || !Fe(p) && p >= u) && r(a);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && r(o.get(n)), c && r(o.get(tn)), t) {
        case "add":
          l ? c && r(o.get("length")) : (r(o.get(xt)), Xe(e) && r(o.get(ys)));
          break;
        case "delete":
          l || (r(o.get(xt)), Xe(e) && r(o.get(ys)));
          break;
        case "set":
          Xe(e) && r(o.get(xt));
          break;
      }
  }
  Rs();
}
function Et(e) {
  const t = /* @__PURE__ */ W(e);
  return t === e || (re(t, "iterate", tn), /* @__PURE__ */ ye(e)) ? t : /* @__PURE__ */ Oe(e) ? /* @__PURE__ */ et(e) ? t.map((n) => At(ve(n))) : t.map(At) : t.map(ve);
}
function Gn(e) {
  return re(e = /* @__PURE__ */ W(e), "iterate", tn), e;
}
function Pe(e, t) {
  return /* @__PURE__ */ Oe(e) ? At(/* @__PURE__ */ et(e) ? ve(t) : t) : ve(t);
}
const Yo = {
  __proto__: null,
  [Symbol.iterator]() {
    return As(this, Symbol.iterator, (e) => Pe(this, e));
  },
  concat(...e) {
    return Et(this).concat(
      ...e.map((t) => L(t) ? Et(t) : t)
    );
  },
  entries() {
    return As(this, "entries", (e) => (e[1] = Pe(this, e[1]), e));
  },
  every(e, t) {
    return Le(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Le(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Pe(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Le(
      this,
      "find",
      e,
      t,
      (n) => Pe(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Le(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Le(
      this,
      "findLast",
      e,
      t,
      (n) => Pe(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Le(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Le(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return is(this, "includes", e);
  },
  indexOf(...e) {
    return is(this, "indexOf", e);
  },
  join(e) {
    return Et(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return is(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Le(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Vt(this, "pop");
  },
  push(...e) {
    return Vt(this, "push", e);
  },
  reduce(e, ...t) {
    return lA(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return lA(this, "reduceRight", e, t);
  },
  shift() {
    return Vt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Le(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Vt(this, "splice", e);
  },
  toReversed() {
    return Et(this).toReversed();
  },
  toSorted(e) {
    return Et(this).toSorted(e);
  },
  toSpliced(...e) {
    return Et(this).toSpliced(...e);
  },
  unshift(...e) {
    return Vt(this, "unshift", e);
  },
  values() {
    return As(this, "values", (e) => Pe(this, e));
  }
};
function As(e, t, n) {
  const s = Gn(e), A = s[t]();
  return s !== e && !/* @__PURE__ */ ye(e) && (A._next = A.next, A.next = () => {
    const i = A._next();
    return i.done || (i.value = n(i.value)), i;
  }), A;
}
const Ho = Array.prototype;
function Le(e, t, n, s, A, i) {
  const o = Gn(e), r = o !== e && !/* @__PURE__ */ ye(e), l = o[t];
  if (l !== Ho[t]) {
    const a = l.apply(e, i);
    return r ? ve(a) : a;
  }
  let c = n;
  o !== e && (r ? c = function(a, p) {
    return n.call(this, Pe(e, a), p, e);
  } : n.length > 2 && (c = function(a, p) {
    return n.call(this, a, p, e);
  }));
  const u = l.call(o, c, s);
  return r && A ? A(u) : u;
}
function lA(e, t, n, s) {
  const A = Gn(e), i = A !== e && !/* @__PURE__ */ ye(e);
  let o = n, r = !1;
  A !== e && (i ? (r = s.length === 0, o = function(c, u, a) {
    return r && (r = !1, c = Pe(e, c)), n.call(this, c, Pe(e, u), a, e);
  }) : n.length > 3 && (o = function(c, u, a) {
    return n.call(this, c, u, a, e);
  }));
  const l = A[t](o, ...s);
  return r ? Pe(e, l) : l;
}
function is(e, t, n) {
  const s = /* @__PURE__ */ W(e);
  re(s, "iterate", tn);
  const A = s[t](...n);
  return (A === -1 || A === !1) && /* @__PURE__ */ Ds(n[0]) ? (n[0] = /* @__PURE__ */ W(n[0]), s[t](...n)) : A;
}
function Vt(e, t, n = []) {
  nt(), Ps();
  const s = (/* @__PURE__ */ W(e))[t].apply(e, n);
  return Rs(), st(), s;
}
const Uo = /* @__PURE__ */ Is("__proto__,__v_isRef,__isVue"), hi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fe)
);
function Ko(e) {
  Fe(e) || (e = String(e));
  const t = /* @__PURE__ */ W(this);
  return re(t, "has", e), t.hasOwnProperty(e);
}
class mi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const A = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !A;
    if (n === "__v_isReadonly")
      return A;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (A ? i ? Ar : yi : i ? bi : xi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = L(t);
    if (!A) {
      let l;
      if (o && (l = Yo[n]))
        return l;
      if (n === "hasOwnProperty")
        return Ko;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ae(t) ? t : s
    );
    if ((Fe(n) ? hi.has(n) : Uo(n)) || (A || re(t, "get", n), i))
      return r;
    if (/* @__PURE__ */ ae(r)) {
      const l = o && Ts(n) ? r : r.value;
      return A && Q(l) ? /* @__PURE__ */ _s(l) : l;
    }
    return Q(r) ? A ? /* @__PURE__ */ _s(r) : /* @__PURE__ */ Yn(r) : r;
  }
}
class gi extends mi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, A) {
    let i = t[n];
    const o = L(t) && Ts(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Oe(i);
      if (!/* @__PURE__ */ ye(s) && !/* @__PURE__ */ Oe(s) && (i = /* @__PURE__ */ W(i), s = /* @__PURE__ */ W(s)), !o && /* @__PURE__ */ ae(i) && !/* @__PURE__ */ ae(s))
        return c || (i.value = s), !0;
    }
    const r = o ? Number(n) < t.length : U(t, n), l = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ae(t) ? t : A
    );
    return t === /* @__PURE__ */ W(A) && l && (r ? Ne(s, i) && Ge(t, "set", n, s) : Ge(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = U(t, n);
    t[n];
    const A = Reflect.deleteProperty(t, n);
    return A && s && Ge(t, "delete", n, void 0), A;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Fe(n) || !hi.has(n)) && re(t, "has", n), s;
  }
  ownKeys(t) {
    return re(
      t,
      "iterate",
      L(t) ? "length" : xt
    ), Reflect.ownKeys(t);
  }
}
class Zo extends mi {
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
const Jo = /* @__PURE__ */ new gi(), Qo = /* @__PURE__ */ new Zo(), qo = /* @__PURE__ */ new gi(!0);
const vs = (e) => e, mn = (e) => Reflect.getPrototypeOf(e);
function Xo(e, t, n) {
  return function(...s) {
    const A = this.__v_raw, i = /* @__PURE__ */ W(A), o = Xe(i), r = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, c = A[e](...s), u = n ? vs : t ? At : ve;
    return !t && re(
      i,
      "iterate",
      l ? ys : xt
    ), ke(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: a, done: p } = c.next();
          return p ? { value: a, done: p } : {
            value: r ? [u(a[0]), u(a[1])] : u(a),
            done: p
          };
        }
      }
    );
  };
}
function gn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function er(e, t) {
  const n = {
    get(A) {
      const i = this.__v_raw, o = /* @__PURE__ */ W(i), r = /* @__PURE__ */ W(A);
      e || (Ne(A, r) && re(o, "get", A), re(o, "get", r));
      const { has: l } = mn(o), c = t ? vs : e ? At : ve;
      if (l.call(o, A))
        return c(i.get(A));
      if (l.call(o, r))
        return c(i.get(r));
      i !== o && i.get(A);
    },
    get size() {
      const A = this.__v_raw;
      return !e && re(/* @__PURE__ */ W(A), "iterate", xt), A.size;
    },
    has(A) {
      const i = this.__v_raw, o = /* @__PURE__ */ W(i), r = /* @__PURE__ */ W(A);
      return e || (Ne(A, r) && re(o, "has", A), re(o, "has", r)), A === r ? i.has(A) : i.has(A) || i.has(r);
    },
    forEach(A, i) {
      const o = this, r = o.__v_raw, l = /* @__PURE__ */ W(r), c = t ? vs : e ? At : ve;
      return !e && re(l, "iterate", xt), r.forEach((u, a) => A.call(i, c(u), c(a), o));
    }
  };
  return ke(
    n,
    e ? {
      add: gn("add"),
      set: gn("set"),
      delete: gn("delete"),
      clear: gn("clear")
    } : {
      add(A) {
        const i = /* @__PURE__ */ W(this), o = mn(i), r = /* @__PURE__ */ W(A), l = !t && !/* @__PURE__ */ ye(A) && !/* @__PURE__ */ Oe(A) ? r : A;
        return o.has.call(i, l) || Ne(A, l) && o.has.call(i, A) || Ne(r, l) && o.has.call(i, r) || (i.add(l), Ge(i, "add", l, l)), this;
      },
      set(A, i) {
        !t && !/* @__PURE__ */ ye(i) && !/* @__PURE__ */ Oe(i) && (i = /* @__PURE__ */ W(i));
        const o = /* @__PURE__ */ W(this), { has: r, get: l } = mn(o);
        let c = r.call(o, A);
        c || (A = /* @__PURE__ */ W(A), c = r.call(o, A));
        const u = l.call(o, A);
        return o.set(A, i), c ? Ne(i, u) && Ge(o, "set", A, i) : Ge(o, "add", A, i), this;
      },
      delete(A) {
        const i = /* @__PURE__ */ W(this), { has: o, get: r } = mn(i);
        let l = o.call(i, A);
        l || (A = /* @__PURE__ */ W(A), l = o.call(i, A)), r && r.call(i, A);
        const c = i.delete(A);
        return l && Ge(i, "delete", A, void 0), c;
      },
      clear() {
        const A = /* @__PURE__ */ W(this), i = A.size !== 0, o = A.clear();
        return i && Ge(
          A,
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
  ].forEach((A) => {
    n[A] = Xo(A, e, t);
  }), n;
}
function Os(e, t) {
  const n = er(e, t);
  return (s, A, i) => A === "__v_isReactive" ? !e : A === "__v_isReadonly" ? e : A === "__v_raw" ? s : Reflect.get(
    U(n, A) && A in s ? n : s,
    A,
    i
  );
}
const tr = {
  get: /* @__PURE__ */ Os(!1, !1)
}, nr = {
  get: /* @__PURE__ */ Os(!1, !0)
}, sr = {
  get: /* @__PURE__ */ Os(!0, !1)
};
const xi = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap();
function ir(e) {
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
function Yn(e) {
  return /* @__PURE__ */ Oe(e) ? e : js(
    e,
    !1,
    Jo,
    tr,
    xi
  );
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  return js(
    e,
    !1,
    qo,
    nr,
    bi
  );
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  return js(
    e,
    !0,
    Qo,
    sr,
    yi
  );
}
function js(e, t, n, s, A) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = A.get(e);
  if (i)
    return i;
  const o = ir(Co(e));
  if (o === 0)
    return e;
  const r = new Proxy(
    e,
    o === 2 ? s : n
  );
  return A.set(e, r), r;
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  return /* @__PURE__ */ Oe(e) ? /* @__PURE__ */ et(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ds(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ W(t) : e;
}
function rr(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && si(e, "__v_skip", !0), e;
}
const ve = (e) => Q(e) ? /* @__PURE__ */ Yn(e) : e, At = (e) => Q(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  return lr(e, !1);
}
function lr(e, t) {
  return /* @__PURE__ */ ae(e) ? e : new cr(e, t);
}
class cr {
  constructor(t, n) {
    this.dep = new Fs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ W(t), this._value = n ? t : ve(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ ye(t) || /* @__PURE__ */ Oe(t);
    t = s ? t : /* @__PURE__ */ W(t), Ne(t, n) && (this._rawValue = t, this._value = s ? t : ve(t), this.dep.trigger());
  }
}
function P(e) {
  return /* @__PURE__ */ ae(e) ? e.value : e;
}
const ar = {
  get: (e, t, n) => t === "__v_raw" ? e : P(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const A = e[t];
    return /* @__PURE__ */ ae(A) && !/* @__PURE__ */ ae(n) ? (A.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function vi(e) {
  return /* @__PURE__ */ et(e) ? e : new Proxy(e, ar);
}
class ur {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Fs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = en - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return ci(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return fi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function fr(e, t, n = !1) {
  let s, A;
  return Y(e) ? s = e : (s = e.get, A = e.set), new ur(s, A, n);
}
const xn = {}, Sn = /* @__PURE__ */ new WeakMap();
let dt;
function dr(e, t = !1, n = dt) {
  if (n) {
    let s = Sn.get(n);
    s || Sn.set(n, s = []), s.push(e);
  }
}
function pr(e, t, n = J) {
  const { immediate: s, deep: A, once: i, scheduler: o, augmentJob: r, call: l } = n, c = (I) => A ? I : /* @__PURE__ */ ye(I) || A === !1 || A === 0 ? Ye(I, 1) : Ye(I);
  let u, a, p, x, k = !1, v = !1;
  if (/* @__PURE__ */ ae(e) ? (a = () => e.value, k = /* @__PURE__ */ ye(e)) : /* @__PURE__ */ et(e) ? (a = () => c(e), k = !0) : L(e) ? (v = !0, k = e.some((I) => /* @__PURE__ */ et(I) || /* @__PURE__ */ ye(I)), a = () => e.map((I) => {
    if (/* @__PURE__ */ ae(I))
      return I.value;
    if (/* @__PURE__ */ et(I))
      return c(I);
    if (Y(I))
      return l ? l(I, 2) : I();
  })) : Y(e) ? t ? a = l ? () => l(e, 2) : e : a = () => {
    if (p) {
      nt();
      try {
        p();
      } finally {
        st();
      }
    }
    const I = dt;
    dt = u;
    try {
      return l ? l(e, 3, [x]) : e(x);
    } finally {
      dt = I;
    }
  } : a = gt, t && A) {
    const I = a, q = A === !0 ? 1 / 0 : A;
    a = () => Ye(I(), q);
  }
  const B = Vo(), O = () => {
    u.stop(), B && B.active && qA(B.effects, u);
  };
  if (i && t) {
    const I = t;
    t = (...q) => {
      const ee = I(...q);
      return O(), ee;
    };
  }
  let N = v ? new Array(e.length).fill(xn) : xn;
  const j = (I) => {
    if (!(!(u.flags & 1) || !u.dirty && !I))
      if (t) {
        const q = u.run();
        if (I || A || k || (v ? q.some((ee, le) => Ne(ee, N[le])) : Ne(q, N))) {
          p && p();
          const ee = dt;
          dt = u;
          try {
            const le = [
              q,
              // pass undefined as the old value when it's changed for the first time
              N === xn ? void 0 : v && N[0] === xn ? [] : N,
              x
            ];
            N = q, l ? l(t, 3, le) : (
              // @ts-expect-error
              t(...le)
            );
          } finally {
            dt = ee;
          }
        }
      } else
        u.run();
  };
  return r && r(j), u = new ri(a), u.scheduler = o ? () => o(j, !1) : j, x = (I) => dr(I, !1, u), p = u.onStop = () => {
    const I = Sn.get(u);
    if (I) {
      if (l)
        l(I, 4);
      else
        for (const q of I) q();
      Sn.delete(u);
    }
  }, t ? s ? j(!0) : N = u.run() : o ? o(j.bind(null, !0), !0) : u.run(), O.pause = u.pause.bind(u), O.resume = u.resume.bind(u), O.stop = O, O;
}
function Ye(e, t = 1 / 0, n) {
  if (t <= 0 || !Q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ae(e))
    Ye(e.value, t, n);
  else if (L(e))
    for (let s = 0; s < e.length; s++)
      Ye(e[s], t, n);
  else if (yt(e) || Xe(e))
    e.forEach((s) => {
      Ye(s, t, n);
    });
  else if (ti(e)) {
    for (const s in e)
      Ye(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ye(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function un(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (A) {
    Hn(A, t, n);
  }
}
function De(e, t, n, s) {
  if (Y(e)) {
    const A = un(e, t, n, s);
    return A && XA(A) && A.catch((i) => {
      Hn(i, t, n);
    }), A;
  }
  if (L(e)) {
    const A = [];
    for (let i = 0; i < e.length; i++)
      A.push(De(e[i], t, n, s));
    return A;
  }
}
function Hn(e, t, n, s = !0) {
  const A = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || J;
  if (t) {
    let r = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let a = 0; a < u.length; a++)
          if (u[a](e, l, c) === !1)
            return;
      }
      r = r.parent;
    }
    if (i) {
      nt(), un(i, null, 10, [
        e,
        l,
        c
      ]), st();
      return;
    }
  }
  hr(e, n, A, s, o);
}
function hr(e, t, n, s = !0, A = !1) {
  if (A)
    throw e;
  console.error(e);
}
const ce = [];
let Te = -1;
const It = [];
let Qe = null, Ct = 0;
const _i = /* @__PURE__ */ Promise.resolve();
let $n = null;
function wi(e) {
  const t = $n || _i;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function mr(e) {
  let t = Te + 1, n = ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, A = ce[s], i = nn(A);
    i < e || i === e && A.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Bs(e) {
  if (!(e.flags & 1)) {
    const t = nn(e), n = ce[ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= nn(n) ? ce.push(e) : ce.splice(mr(t), 0, e), e.flags |= 1, ki();
  }
}
function ki() {
  $n || ($n = _i.then(Si));
}
function gr(e) {
  if (!L(e))
    Qe && e.id === -1 ? Qe.splice(Ct + 1, 0, e) : e.flags & 1 || (It.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      It.push(e[t]);
  ki();
}
function cA(e, t, n = Te + 1) {
  for (; n < ce.length; n++) {
    const s = ce[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ce.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function zi(e) {
  if (It.length) {
    const t = [...new Set(It)].sort(
      (n, s) => nn(n) - nn(s)
    );
    if (It.length = 0, Qe) {
      for (let n = 0; n < t.length; n++)
        Qe.push(t[n]);
      return;
    }
    for (Qe = t, Ct = 0; Ct < Qe.length; Ct++) {
      const n = Qe[Ct];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Qe = null, Ct = 0;
  }
}
const nn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Si(e) {
  try {
    for (Te = 0; Te < ce.length; Te++) {
      const t = ce[Te];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), un(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Te < ce.length; Te++) {
      const t = ce[Te];
      t && (t.flags &= -2);
    }
    Te = -1, ce.length = 0, zi(), $n = null, (ce.length || It.length) && Si();
  }
}
let be = null, $i = null;
function En(e) {
  const t = be;
  return be = e, $i = e && e.type.__scopeId || null, t;
}
function xr(e, t = be, n) {
  if (!t || e._n)
    return e;
  const s = (...A) => {
    s._d && mA(-1);
    const i = En(t), o = bt.length;
    let r;
    try {
      r = e(...A);
    } finally {
      for (let l = bt.length; l > o; l--) Yi();
      En(i), s._d && mA(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Tt(e, t) {
  if (be === null)
    return e;
  const n = Jn(be), s = e.dirs || (e.dirs = []);
  for (let A = 0; A < t.length; A++) {
    let [i, o, r, l = J] = t[A];
    i && (Y(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ye(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: r,
      modifiers: l
    }));
  }
  return e;
}
function ut(e, t, n, s) {
  const A = e.dirs, i = t && t.dirs;
  for (let o = 0; o < A.length; o++) {
    const r = A[o];
    i && (r.oldValue = i[o].value);
    let l = r.dir[s];
    l && (nt(), De(l, n, 8, [
      e.el,
      r,
      e,
      t
    ]), st());
  }
}
function br(e, t, n = !1) {
  const s = nl();
  if (s || Pt) {
    let A = Pt ? Pt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (A && e in A)
      return A[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(s && s.proxy) : t;
  }
}
const yr = /* @__PURE__ */ Symbol.for("v-scx"), vr = () => br(yr);
function vt(e, t, n) {
  return _r(e, t, n);
}
function _r(e, t, n = J) {
  const { immediate: s, deep: A, flush: i, once: o } = n, r = ke({}, n), l = t && s || !t && i !== "post";
  let c;
  if (on) {
    if (i === "sync") {
      const x = vr();
      c = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!l) {
      const x = () => {
      };
      return x.stop = gt, x.resume = gt, x.pause = gt, x;
    }
  }
  const u = it;
  r.call = (x, k, v) => De(x, u, k, v);
  let a = !1;
  i === "post" ? r.scheduler = (x) => {
    fe(x, u && u.suspense);
  } : i !== "sync" && (a = !0, r.scheduler = (x, k) => {
    k ? x() : Bs(x);
  }), r.augmentJob = (x) => {
    t && (x.flags |= 4), a && (x.flags |= 2, u && (x.id = u.uid, x.i = u));
  };
  const p = pr(e, t, r);
  return on && (c ? c.push(p) : l && p()), p;
}
const wr = /* @__PURE__ */ Symbol("_vte"), Un = (e) => e.__isTeleport, os = /* @__PURE__ */ Symbol("_leaveCb");
function kr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ke) {
        t = n;
        break;
      }
  }
  return t;
}
function Ei(e) {
  if (!Ci(e))
    return Un(e.type) && e.children ? kr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Y(n.default))
      return n.default();
  }
}
function Ls(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Ls(
      Un(n.type) && Ei(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function at(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ke({ name: e.name }, t, { setup: e })
  ) : e;
}
function zr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function aA(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Cn = /* @__PURE__ */ new WeakMap();
function Zt(e, t, n, s, A = !1) {
  if (L(e)) {
    e.forEach(
      (v, B) => Zt(
        v,
        t && (L(t) ? t[B] : t),
        n,
        s,
        A
      )
    );
    return;
  }
  if (Jt(s) && !A) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Zt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Jn(s.component) : s.el, o = A ? null : i, { i: r, r: l } = e, c = t && t.r, u = r.refs === J ? r.refs = {} : r.refs, a = r.setupState, p = /* @__PURE__ */ W(a), x = a === J ? QA : (v) => aA(u, v) ? !1 : U(p, v), k = (v, B) => !(B && aA(u, B));
  if (c != null && c !== l) {
    if (uA(t), se(c))
      u[c] = null, x(c) && (a[c] = null);
    else if (/* @__PURE__ */ ae(c)) {
      const v = t;
      k(c, v.k) && (c.value = null), v.k && (u[v.k] = null);
    }
  }
  if (Y(l))
    un(l, r, 12, [o, u]);
  else {
    const v = se(l), B = /* @__PURE__ */ ae(l);
    if (v || B) {
      const O = () => {
        if (e.f) {
          const N = v ? x(l) ? a[l] : u[l] : k() || !e.k ? l.value : u[e.k];
          if (A)
            L(N) && qA(N, i);
          else if (L(N))
            N.includes(i) || N.push(i);
          else if (v)
            u[l] = [i], x(l) && (a[l] = u[l]);
          else {
            const j = [i];
            k(l, e.k) && (l.value = j), e.k && (u[e.k] = j);
          }
        } else v ? (u[l] = o, x(l) && (a[l] = o)) : B && (k(l, e.k) && (l.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const N = () => {
          O(), Cn.delete(e);
        };
        N.id = -1, Cn.set(e, N), fe(N, n);
      } else
        uA(e), O();
    }
  }
}
function uA(e) {
  const t = Cn.get(e);
  t && (t.flags |= 8, Cn.delete(e));
}
Vn().requestIdleCallback;
Vn().cancelIdleCallback;
const Jt = (e) => !!e.type.__asyncLoader, Ci = (e) => e.type.__isKeepAlive;
function Sr(e, t, n = it, s = !1) {
  if (n) {
    const A = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      nt();
      const r = Gs(n), l = De(t, n, e, o);
      return r(), st(), l;
    });
    return s ? A.unshift(i) : A.push(i), i;
  }
}
const Mi = (e) => (t, n = it) => {
  (!on || e === "sp") && Sr(e, (...s) => t(...s), n);
}, $r = Mi("m"), Ii = Mi(
  "bum"
), Er = /* @__PURE__ */ Symbol.for("v-ndc");
function he(e, t, n, s) {
  let A;
  const i = n, o = L(e);
  if (o || se(e)) {
    const r = o && /* @__PURE__ */ et(e);
    let l = !1, c = !1;
    r && (l = !/* @__PURE__ */ ye(e), c = /* @__PURE__ */ Oe(e), e = Gn(e)), A = new Array(e.length);
    for (let u = 0, a = e.length; u < a; u++)
      A[u] = t(
        l ? c ? At(ve(e[u])) : ve(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    A = new Array(e);
    for (let r = 0; r < e; r++)
      A[r] = t(r + 1, r, void 0, i);
  } else if (Q(e))
    if (e[Symbol.iterator])
      A = Array.from(
        e,
        (r, l) => t(r, l, void 0, i)
      );
    else {
      const r = Object.keys(e);
      A = new Array(r.length);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = r[l];
        A[l] = t(e[u], u, l, i);
      }
    }
  else
    A = [];
  return A;
}
const ws = (e) => e ? Zi(e) ? Jn(e) : ws(e.parent) : null, Qt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ke(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ws(e.parent),
    $root: (e) => ws(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Bs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wi.bind(e.proxy)),
    $watch: (e) => gt
  })
), rs = (e, t) => e !== J && !e.__isScriptSetup && U(e, t), Cr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: A, props: i, accessCache: o, type: r, appContext: l } = e;
    if (t[0] !== "$") {
      const p = o[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return s[t];
          case 2:
            return A[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (rs(s, t))
          return o[t] = 1, s[t];
        if (U(i, t))
          return o[t] = 3, i[t];
        if (n !== J && U(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = Qt[t];
    let u, a;
    if (c)
      return t === "$attrs" && re(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== J && U(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      a = l.config.globalProperties, U(a, t)
    )
      return a[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: A, ctx: i } = e;
    return rs(A, t) ? (A[t] = n, !0) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: A, props: i, type: o }
  }, r) {
    let l;
    return !!(n[r] || rs(t, r) || U(i, r) || U(s, r) || U(Qt, r) || U(A.config.globalProperties, r) || (l = o.__cssModules) && l[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ti() {
  return {
    app: null,
    config: {
      isNativeTag: QA,
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
let Mr = 0;
function Ir(e, t) {
  return function(s, A = null) {
    Y(s) || (s = ke({}, s)), A != null && !Q(A) && (A = null);
    const i = Ti(), o = /* @__PURE__ */ new WeakSet(), r = [];
    let l = !1;
    const c = i.app = {
      _uid: Mr++,
      _component: s,
      _props: A,
      _container: null,
      _context: i,
      _instance: null,
      version: ll,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...a) {
        return o.has(u) || (u && Y(u.install) ? (o.add(u), u.install(c, ...a)) : Y(u) && (o.add(u), u(c, ...a))), c;
      },
      mixin(u) {
        return c;
      },
      component(u, a) {
        return a ? (i.components[u] = a, c) : i.components[u];
      },
      directive(u, a) {
        return a ? (i.directives[u] = a, c) : i.directives[u];
      },
      mount(u, a, p) {
        if (!l) {
          const x = c._ceVNode || He(s, A);
          return x.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(x, u, p), l = !0, c._container = u, u.__vue_app__ = c, Jn(x.component);
        }
      },
      onUnmount(u) {
        r.push(u);
      },
      unmount() {
        l && (De(
          r,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, a) {
        return i.provides[u] = a, c;
      },
      runWithContext(u) {
        const a = Pt;
        Pt = c;
        try {
          return u();
        } finally {
          Pt = a;
        }
      }
    };
    return c;
  };
}
let Pt = null;
const Tr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_e(t)}Modifiers`] || e[`${wt(t)}Modifiers`];
function Pr(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || J;
  let A = n;
  const i = t.startsWith("update:"), o = i && Tr(s, t.slice(7));
  o && (o.trim && (A = n.map((u) => se(u) ? u.trim() : u)), o.number && (A = A.map(Ln)));
  let r, l = s[r = ts(t)] || // also try camelCase event handler (#2249)
  s[r = ts(_e(t))];
  !l && i && (l = s[r = ts(wt(t))]), l && De(
    l,
    e,
    6,
    A
  );
  const c = s[r + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, De(
      c,
      e,
      6,
      A
    );
  }
}
function Rr(e, t, n = !1) {
  const s = t.emitsCache, A = s.get(e);
  if (A !== void 0)
    return A;
  const i = e.emits;
  let o = {};
  return i ? (L(i) ? i.forEach((r) => o[r] = null) : ke(o, i), Q(e) && s.set(e, o), o) : (Q(e) && s.set(e, null), null);
}
function Kn(e, t) {
  return !e || !jn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, wt(t)) || U(e, t));
}
function fA(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: A,
    propsOptions: [i],
    slots: o,
    attrs: r,
    emit: l,
    render: c,
    renderCache: u,
    props: a,
    data: p,
    setupState: x,
    ctx: k,
    inheritAttrs: v
  } = e, B = En(e);
  let O, N;
  try {
    if (n.shapeFlag & 4) {
      const I = A || s, q = I;
      O = Re(
        c.call(
          q,
          I,
          u,
          a,
          x,
          p,
          k
        )
      ), N = r;
    } else {
      const I = t;
      O = Re(
        I.length > 1 ? I(
          a,
          { attrs: r, slots: o, emit: l }
        ) : I(
          a,
          null
        )
      ), N = t.props ? r : Nr(r);
    }
  } catch (I) {
    bt.length = 0, Hn(I, e, 1), O = He(Ke);
  }
  let j = O;
  if (N && v !== !1) {
    const I = Object.keys(N), { shapeFlag: q } = j;
    I.length && q & 7 && (i && I.some(Dn) && (N = Fr(
      N,
      i
    )), j = Rt(j, N, !1, !0));
  }
  if (n.dirs && (j = Rt(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const I = Un(j.type) && Ei(j) || j;
    Ls(I, n.transition);
  }
  return O = j, En(B), O;
}
const Nr = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || jn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Fr = (e, t) => {
  const n = {};
  for (const s in e)
    (!Dn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Or(e, t, n) {
  const { props: s, children: A, component: i } = e, { props: o, children: r, patchFlag: l } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? dA(s, o, c) : !!o;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let a = 0; a < u.length; a++) {
        const p = u[a];
        if (Pi(o, s, p) && !Kn(c, p))
          return !0;
      }
    }
  } else
    return (A || r) && (!r || !r.$stable) ? !0 : s === o ? !1 : s ? o ? dA(s, o, c) : !0 : !!o;
  return !1;
}
function dA(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let A = 0; A < s.length; A++) {
    const i = s[A];
    if (Pi(t, e, i) && !Kn(n, i))
      return !0;
  }
  return !1;
}
function Pi(e, t, n) {
  const s = e[n], A = t[n];
  return n === "style" && Q(s) && Q(A) ? !tt(s, A) : s !== A;
}
function jr({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const A = t.subTree;
    if (A.suspense && A.suspense.activeBranch === e && (A.suspense.vnode.el = A.el = s, e = A), A === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Ri = {}, Ni = () => Object.create(Ri), Fi = (e) => Object.getPrototypeOf(e) === Ri;
function Dr(e, t, n, s = !1) {
  const A = {}, i = Ni();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Oi(e, t, A, i);
  for (const o in e.propsOptions[0])
    o in A || (A[o] = void 0);
  n ? e.props = s ? A : /* @__PURE__ */ or(A) : e.type.props ? e.props = A : e.props = i, e.attrs = i;
}
function Br(e, t, n, s) {
  const {
    props: A,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, r = /* @__PURE__ */ W(A), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let a = 0; a < u.length; a++) {
        let p = u[a];
        if (Kn(e.emitsOptions, p))
          continue;
        const x = t[p];
        if (l)
          if (U(i, p))
            x !== i[p] && (i[p] = x, c = !0);
          else {
            const k = _e(p);
            A[k] = ks(
              l,
              r,
              k,
              x,
              e,
              !1
            );
          }
        else
          x !== i[p] && (i[p] = x, c = !0);
      }
    }
  } else {
    Oi(e, t, A, i) && (c = !0);
    let u;
    for (const a in r)
      (!t || // for camelCase
      !U(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = wt(a)) === a || !U(t, u))) && (l ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[u] !== void 0) && (A[a] = ks(
        l,
        r,
        a,
        void 0,
        e,
        !0
      )) : delete A[a]);
    if (i !== r)
      for (const a in i)
        (!t || !U(t, a)) && (delete i[a], c = !0);
  }
  c && Ge(e.attrs, "set", "");
}
function Oi(e, t, n, s) {
  const [A, i] = e.propsOptions;
  let o = !1, r;
  if (t)
    for (let l in t) {
      if (Ht(l))
        continue;
      const c = t[l];
      let u;
      A && U(A, u = _e(l)) ? !i || !i.includes(u) ? n[u] = c : (r || (r = {}))[u] = c : Kn(e.emitsOptions, l) || (!(l in s) || c !== s[l]) && (s[l] = c, o = !0);
    }
  if (i) {
    const l = /* @__PURE__ */ W(n), c = r || J;
    for (let u = 0; u < i.length; u++) {
      const a = i[u];
      n[a] = ks(
        A,
        l,
        a,
        c[a],
        e,
        !U(c, a)
      );
    }
  }
  return o;
}
function ks(e, t, n, s, A, i) {
  const o = e[n];
  if (o != null) {
    const r = U(o, "default");
    if (r && s === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && Y(l)) {
        const { propsDefaults: c } = A;
        if (n in c)
          s = c[n];
        else {
          const u = Gs(A);
          s = c[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        s = l;
      A.ce && A.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !r ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === wt(n)) && (s = !0));
  }
  return s;
}
function Lr(e, t, n = !1) {
  const s = t.propsCache, A = s.get(e);
  if (A)
    return A;
  const i = e.props, o = {}, r = [];
  if (!i)
    return Q(e) && s.set(e, ht), ht;
  if (L(i))
    for (let c = 0; c < i.length; c++) {
      const u = _e(i[c]);
      pA(u) && (o[u] = J);
    }
  else if (i)
    for (const c in i) {
      const u = _e(c);
      if (pA(u)) {
        const a = i[c], p = o[u] = L(a) || Y(a) ? { type: a } : ke({}, a), x = p.type;
        let k = !1, v = !0;
        if (L(x))
          for (let B = 0; B < x.length; ++B) {
            const O = x[B], N = Y(O) && O.name;
            if (N === "Boolean") {
              k = !0;
              break;
            } else N === "String" && (v = !1);
          }
        else
          k = Y(x) && x.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = k, p[
          1
          /* shouldCastTrue */
        ] = v, (k || U(p, "default")) && r.push(u);
      }
    }
  const l = [o, r];
  return Q(e) && s.set(e, l), l;
}
function pA(e) {
  return e[0] !== "$" && !Ht(e);
}
const Vs = (e) => e === "_" || e === "_ctx" || e === "$stable", Ws = (e) => L(e) ? e.map(Re) : [Re(e)], Vr = (e, t, n) => {
  if (t._n)
    return t;
  const s = xr((...A) => Ws(t(...A)), n);
  return s._c = !1, s;
}, ji = (e, t, n) => {
  const s = e._ctx;
  for (const A in e) {
    if (Vs(A)) continue;
    const i = e[A];
    if (Y(i))
      t[A] = Vr(A, i, s);
    else if (i != null) {
      const o = Ws(i);
      t[A] = () => o;
    }
  }
}, Di = (e, t) => {
  const n = Ws(t);
  e.slots.default = () => n;
}, Bi = (e, t, n) => {
  for (const s in t)
    (n || !Vs(s)) && (e[s] = t[s]);
}, Wr = (e, t, n) => {
  const s = e.slots = Ni();
  if (e.vnode.shapeFlag & 32) {
    const A = t._;
    A ? (Bi(s, t, n), n && si(s, "_", A, !0)) : ji(t, s);
  } else t && Di(e, t);
}, Gr = (e, t, n) => {
  const { vnode: s, slots: A } = e;
  let i = !0, o = J;
  if (s.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? i = !1 : Bi(A, t, n) : (i = !t.$stable, ji(t, A)), o = t;
  } else t && (Di(e, t), o = { default: 1 });
  if (i)
    for (const r in A)
      !Vs(r) && o[r] == null && delete A[r];
}, fe = Zr;
function Yr(e) {
  return Hr(e);
}
function Hr(e, t) {
  const n = Vn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: A,
    patchProp: i,
    createElement: o,
    createText: r,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: a,
    nextSibling: p,
    setScopeId: x = gt,
    insertStaticContent: k
  } = e, v = (f, d, g, w = null, b = null, _ = null, $ = void 0, S = null, z = !!d.dynamicChildren) => {
    if (f === d)
      return;
    f && !Wt(f, d) && (w = hn(f), Be(f, b, _, !0), f = null), d.patchFlag === -2 && (z = !1, d.dynamicChildren = null), d.dynamicChildren && f && f.dynamicChildren && f.dynamicChildren.hasOnce && (d.dynamicChildren === ht && (d.dynamicChildren = []), d.dynamicChildren.hasOnce = !0);
    const { type: y, ref: F, shapeFlag: C } = d;
    switch (y) {
      case Zn:
        B(f, d, g, w);
        break;
      case Ke:
        O(f, d, g, w);
        break;
      case cs:
        f == null && N(d, g, w, $);
        break;
      case K:
        ue(
          f,
          d,
          g,
          w,
          b,
          _,
          $,
          S,
          z
        );
        break;
      default:
        C & 1 ? q(
          f,
          d,
          g,
          w,
          b,
          _,
          $,
          S,
          z
        ) : C & 6 ? Se(
          f,
          d,
          g,
          w,
          b,
          _,
          $,
          S,
          z
        ) : (C & 64 || C & 128) && y.process(
          f,
          d,
          g,
          w,
          b,
          _,
          $,
          S,
          z,
          Bt
        );
    }
    F != null && b ? Zt(F, f && f.ref, _, d || f, !d) : F == null && f && f.ref != null && Zt(f.ref, null, _, f, !0);
  }, B = (f, d, g, w) => {
    if (f == null)
      s(
        d.el = r(d.children),
        g,
        w
      );
    else {
      const b = d.el = f.el;
      d.children !== f.children && c(b, d.children);
    }
  }, O = (f, d, g, w) => {
    f == null ? s(
      d.el = l(d.children || ""),
      g,
      w
    ) : d.el = f.el;
  }, N = (f, d, g, w) => {
    [f.el, f.anchor] = k(
      f.children,
      d,
      g,
      w,
      f.el,
      f.anchor
    );
  }, j = ({ el: f, anchor: d }, g, w) => {
    let b;
    for (; f && f !== d; )
      b = p(f), s(f, g, w), f = b;
    s(d, g, w);
  }, I = ({ el: f, anchor: d }) => {
    let g;
    for (; f && f !== d; )
      g = p(f), A(f), f = g;
    A(d);
  }, q = (f, d, g, w, b, _, $, S, z) => {
    if (d.type === "svg" ? $ = "svg" : d.type === "math" && ($ = "mathml"), f == null)
      ee(
        d,
        g,
        w,
        b,
        _,
        $,
        S,
        z
      );
    else {
      const y = f.el && f.el._isVueCE ? f.el : null;
      try {
        y && y._beginPatch(), ze(
          f,
          d,
          b,
          _,
          $,
          S,
          z
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ee = (f, d, g, w, b, _, $, S) => {
    let z, y;
    const { props: F, shapeFlag: C, transition: R, dirs: D } = f;
    if (z = f.el = o(
      f.type,
      _,
      F && F.is,
      F
    ), C & 8 ? u(z, f.children) : C & 16 && de(
      f.children,
      z,
      null,
      w,
      b,
      ls(f, _),
      $,
      S
    ), D && ut(f, null, w, "created"), le(z, f, f.scopeId, $, w), F) {
      for (const H in F)
        H !== "value" && !Ht(H) && i(z, H, null, F[H], _, w);
      "value" in F && i(z, "value", null, F.value, _), (y = F.onVnodeBeforeMount) && Ie(y, w, f);
    }
    D && ut(f, null, w, "beforeMount");
    const V = Ur(b, R);
    V && R.beforeEnter(z), s(z, d, g), ((y = F && F.onVnodeMounted) || V || D) && fe(() => {
      try {
        y && Ie(y, w, f), V && R.enter(z), D && ut(f, null, w, "mounted");
      } finally {
      }
    }, b);
  }, le = (f, d, g, w, b) => {
    if (g && x(f, g), w)
      for (let _ = 0; _ < w.length; _++)
        x(f, w[_]);
    if (b) {
      let _ = b.subTree;
      if (d === _ || Gi(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const $ = b.vnode;
        le(
          f,
          $,
          $.scopeId,
          $.slotScopeIds,
          b.parent
        );
      }
    }
  }, de = (f, d, g, w, b, _, $, S, z = 0) => {
    for (let y = z; y < f.length; y++) {
      const F = f[y] = S ? We(f[y]) : Re(f[y]);
      v(
        null,
        F,
        d,
        g,
        w,
        b,
        _,
        $,
        S
      );
    }
  }, ze = (f, d, g, w, b, _, $) => {
    const S = d.el = f.el;
    let { patchFlag: z, dynamicChildren: y, dirs: F } = d;
    z |= f.patchFlag & 16;
    const C = f.props || J, R = d.props || J;
    let D;
    if (g && ft(g, !1), (D = R.onVnodeBeforeUpdate) && Ie(D, g, d, f), F && ut(d, f, g, "beforeUpdate"), g && ft(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!f.dynamicChildren || f.dynamicChildren.length !== y.length) && (z = 0, $ = !1, y = null), (C.innerHTML && R.innerHTML == null || C.textContent && R.textContent == null) && u(S, ""), y ? te(
      f.dynamicChildren,
      y,
      S,
      g,
      w,
      ls(d, b),
      _
    ) : $ || St(
      f,
      d,
      S,
      null,
      g,
      w,
      ls(d, b),
      _,
      !1
    ), z > 0) {
      if (z & 16)
        Ot(S, C, R, g, b);
      else if (z & 2 && C.class !== R.class && i(S, "class", null, R.class, b), z & 4 && i(S, "style", C.style, R.style, b), z & 8) {
        const V = d.dynamicProps;
        for (let H = 0; H < V.length; H++) {
          const G = V[H], ne = C[G], ie = R[G];
          (ie !== ne || G === "value") && i(S, G, ne, ie, b, g);
        }
      }
      z & 1 && f.children !== d.children && u(S, d.children);
    } else !$ && y == null && Ot(S, C, R, g, b);
    ((D = R.onVnodeUpdated) || F) && fe(() => {
      D && Ie(D, g, d, f), F && ut(d, f, g, "updated");
    }, w);
  }, te = (f, d, g, w, b, _, $) => {
    for (let S = 0; S < d.length; S++) {
      const z = f[S], y = d[S], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (z.type === K || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Wt(z, y) || // - In the case of a component, it could contain anything.
        z.shapeFlag & 198) ? a(z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      v(
        z,
        y,
        F,
        null,
        w,
        b,
        _,
        $,
        !0
      );
    }
  }, Ot = (f, d, g, w, b) => {
    if (d !== g) {
      if (d !== J)
        for (const _ in d)
          !Ht(_) && !(_ in g) && i(
            f,
            _,
            d[_],
            null,
            b,
            w
          );
      for (const _ in g) {
        if (Ht(_)) continue;
        const $ = g[_], S = d[_];
        $ !== S && _ !== "value" && i(f, _, S, $, b, w);
      }
      "value" in g && i(f, "value", d.value, g.value, b);
    }
  }, ue = (f, d, g, w, b, _, $, S, z) => {
    const y = d.el = f ? f.el : r(""), F = d.anchor = f ? f.anchor : r("");
    let { patchFlag: C, dynamicChildren: R, slotScopeIds: D } = d;
    D && (S = S ? S.concat(D) : D), f == null ? (s(y, g, w), s(F, g, w), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      F,
      b,
      _,
      $,
      S,
      z
    )) : C > 0 && C & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === R.length ? (te(
      f.dynamicChildren,
      R,
      g,
      b,
      _,
      $,
      S
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || b && d === b.subTree) && Li(
      f,
      d,
      !0
      /* shallow */
    )) : St(
      f,
      d,
      g,
      F,
      b,
      _,
      $,
      S,
      z
    );
  }, Se = (f, d, g, w, b, _, $, S, z) => {
    d.slotScopeIds = S, f == null ? d.shapeFlag & 512 ? b.ctx.activate(
      d,
      g,
      w,
      $,
      z
    ) : zt(
      d,
      g,
      w,
      b,
      _,
      $,
      z
    ) : dn(f, d, z);
  }, zt = (f, d, g, w, b, _, $) => {
    const S = f.component = tl(
      f,
      w,
      b
    );
    if (Ci(f) && (S.ctx.renderer = Bt), sl(S, !1, $), S.asyncDep) {
      if (b && b.registerDep(S, jt, $), !f.el) {
        const z = S.subTree = He(Ke);
        O(null, z, d, g), f.placeholder = z.el;
      }
    } else
      jt(
        S,
        f,
        d,
        g,
        b,
        _,
        $
      );
  }, dn = (f, d, g) => {
    const w = d.component = f.component;
    if (Or(f, d, g))
      if (w.asyncDep && !w.asyncResolved) {
        d.el = f.el, $e(w, d, g);
        return;
      } else
        w.next = d, w.update();
    else
      d.el = f.el, w.vnode = d;
  }, jt = (f, d, g, w, b, _, $) => {
    const S = () => {
      if (f.isMounted) {
        let { next: C, bu: R, u: D, parent: V, vnode: H } = f;
        {
          const Ce = Vi(f);
          if (Ce) {
            C && (C.el = H.el, $e(f, C, $)), Ce.asyncDep.then(() => {
              fe(() => {
                f.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let G = C, ne;
        ft(f, !1), C ? (C.el = H.el, $e(f, C, $)) : C = H, R && vn(R), (ne = C.props && C.props.onVnodeBeforeUpdate) && Ie(ne, V, C, H), ft(f, !0);
        const ie = fA(f), Ee = f.subTree;
        f.subTree = ie, v(
          Ee,
          ie,
          // parent may have changed if it's in a teleport
          a(Ee.el),
          // anchor may have changed if it's in a fragment
          hn(Ee),
          f,
          b,
          _
        ), C.el = ie.el, G === null && jr(f, ie.el), D && fe(D, b), (ne = C.props && C.props.onVnodeUpdated) && fe(
          () => Ie(ne, V, C, H),
          b
        );
      } else {
        let C;
        const { el: R, props: D } = d, { bm: V, m: H, parent: G, root: ne, type: ie } = f, Ee = Jt(d);
        ft(f, !1), V && vn(V), !Ee && (C = D && D.onVnodeBeforeMount) && Ie(C, G, d), ft(f, !0);
        {
          ne.ce && ne.ce._hasShadowRoot() && ne.ce._injectChildStyle(
            ie,
            f.parent ? f.parent.type : void 0
          );
          const Ce = f.subTree = fA(f);
          v(
            null,
            Ce,
            g,
            w,
            f,
            b,
            _
          ), d.el = Ce.el;
        }
        if (H && fe(H, b), !Ee && (C = D && D.onVnodeMounted)) {
          const Ce = d;
          fe(
            () => Ie(C, G, Ce),
            b
          );
        }
        (d.shapeFlag & 256 || G && Jt(G.vnode) && G.vnode.shapeFlag & 256) && f.a && fe(f.a, b), f.isMounted = !0, d = g = w = null;
      }
    };
    f.scope.on();
    const z = f.effect = new ri(S);
    f.scope.off();
    const y = f.update = z.run.bind(z), F = f.job = z.runIfDirty.bind(z);
    F.i = f, F.id = f.uid, z.scheduler = () => Bs(F), ft(f, !0), y();
  }, $e = (f, d, g) => {
    d.component = f;
    const w = f.vnode.props;
    f.vnode = d, f.next = null, Br(f, d.props, w, g), Gr(f, d.children, g), nt(), cA(f), st();
  }, St = (f, d, g, w, b, _, $, S, z = !1) => {
    const y = f && f.children, F = f ? f.shapeFlag : 0, C = d.children, { patchFlag: R, shapeFlag: D } = d;
    if (R > 0) {
      if (R & 128) {
        Qs(
          y,
          C,
          g,
          w,
          b,
          _,
          $,
          S,
          z
        );
        return;
      } else if (R & 256) {
        $t(
          y,
          C,
          g,
          w,
          b,
          _,
          $,
          S,
          z
        );
        return;
      }
    }
    D & 8 ? (F & 16 && Dt(y, b, _), C !== y && u(g, C)) : F & 16 ? D & 16 ? Qs(
      y,
      C,
      g,
      w,
      b,
      _,
      $,
      S,
      z
    ) : Dt(y, b, _, !0) : (F & 8 && u(g, ""), D & 16 && de(
      C,
      g,
      w,
      b,
      _,
      $,
      S,
      z
    ));
  }, $t = (f, d, g, w, b, _, $, S, z) => {
    f = f || ht, d = d || ht;
    const y = f.length, F = d.length, C = Math.min(y, F);
    let R;
    for (R = 0; R < C; R++) {
      const D = d[R] = z ? We(d[R]) : Re(d[R]);
      v(
        f[R],
        D,
        g,
        null,
        b,
        _,
        $,
        S,
        z
      );
    }
    y > F ? Dt(
      f,
      b,
      _,
      !0,
      !1,
      C
    ) : de(
      d,
      g,
      w,
      b,
      _,
      $,
      S,
      z,
      C
    );
  }, Qs = (f, d, g, w, b, _, $, S, z) => {
    let y = 0;
    const F = d.length;
    let C = f.length - 1, R = F - 1;
    for (; y <= C && y <= R; ) {
      const D = f[y], V = d[y] = z ? We(d[y]) : Re(d[y]);
      if (Wt(D, V))
        v(
          D,
          V,
          g,
          null,
          b,
          _,
          $,
          S,
          z
        );
      else
        break;
      y++;
    }
    for (; y <= C && y <= R; ) {
      const D = f[C], V = d[R] = z ? We(d[R]) : Re(d[R]);
      if (Wt(D, V))
        v(
          D,
          V,
          g,
          null,
          b,
          _,
          $,
          S,
          z
        );
      else
        break;
      C--, R--;
    }
    if (y > C) {
      if (y <= R) {
        const D = R + 1, V = D < F ? d[D].el : w;
        for (; y <= R; )
          v(
            null,
            d[y] = z ? We(d[y]) : Re(d[y]),
            g,
            V,
            b,
            _,
            $,
            S,
            z
          ), y++;
      }
    } else if (y > R)
      for (; y <= C; )
        Be(f[y], b, _, !0), y++;
    else {
      const D = y, V = y, H = /* @__PURE__ */ new Map();
      for (y = V; y <= R; y++) {
        const pe = d[y] = z ? We(d[y]) : Re(d[y]);
        pe.key != null && H.set(pe.key, y);
      }
      let G, ne = 0;
      const ie = R - V + 1;
      let Ee = !1, Ce = 0;
      const Lt = new Array(ie);
      for (y = 0; y < ie; y++) Lt[y] = 0;
      for (y = D; y <= C; y++) {
        const pe = f[y];
        if (ne >= ie) {
          Be(pe, b, _, !0);
          continue;
        }
        let Me;
        if (pe.key != null)
          Me = H.get(pe.key);
        else
          for (G = V; G <= R; G++)
            if (Lt[G - V] === 0 && Wt(pe, d[G])) {
              Me = G;
              break;
            }
        Me === void 0 ? Be(pe, b, _, !0) : (Lt[Me - V] = y + 1, Me >= Ce ? Ce = Me : Ee = !0, v(
          pe,
          d[Me],
          g,
          null,
          b,
          _,
          $,
          S,
          z
        ), ne++);
      }
      const eA = Ee ? Kr(Lt) : ht;
      for (G = eA.length - 1, y = ie - 1; y >= 0; y--) {
        const pe = V + y, Me = d[pe], tA = d[pe + 1], nA = pe + 1 < F ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          tA.el || Wi(tA)
        ) : w;
        Lt[y] === 0 ? v(
          null,
          Me,
          g,
          nA,
          b,
          _,
          $,
          S,
          z
        ) : Ee && (G < 0 || y !== eA[G] ? pn(Me, g, nA, 2) : G--);
      }
    }
  }, pn = (f, d, g, w, b = null) => {
    const { el: _, type: $, transition: S, children: z, shapeFlag: y } = f;
    if (y & 6) {
      pn(f.component.subTree, d, g, w);
      return;
    }
    if (y & 128) {
      f.suspense.move(d, g, w);
      return;
    }
    if (y & 64) {
      $.move(f, d, g, Bt);
      return;
    }
    if ($ === K) {
      s(_, d, g);
      for (let C = 0; C < z.length; C++)
        pn(z[C], d, g, w);
      s(f.anchor, d, g);
      return;
    }
    if ($ === cs) {
      j(f, d, g);
      return;
    }
    if (w !== 2 && y & 1 && S)
      if (w === 0)
        S.persisted && !_[os] ? s(_, d, g) : (S.beforeEnter(_), s(_, d, g), fe(() => S.enter(_), b));
      else {
        const { leave: C, delayLeave: R, afterLeave: D } = S, V = () => {
          f.ctx.isUnmounted ? A(_) : s(_, d, g);
        }, H = () => {
          const G = _._isLeaving || !!_[os];
          _._isLeaving && _[os](
            !0
            /* cancelled */
          ), S.persisted && !G ? V() : C(_, () => {
            V(), D && D();
          });
        };
        R ? R(_, V, H) : H();
      }
    else
      s(_, d, g);
  }, Be = (f, d, g, w = !1, b = !1) => {
    const {
      type: _,
      props: $,
      ref: S,
      children: z,
      dynamicChildren: y,
      shapeFlag: F,
      patchFlag: C,
      dirs: R,
      cacheIndex: D,
      memo: V
    } = f;
    if ((C === -2 || y && y.hasOnce) && (b = !1), S != null && (nt(), Zt(S, null, g, f, !0), st()), D != null && (!f.ctx || f.ctx === d) && (d.renderCache[D] = void 0), F & 256) {
      d.ctx.deactivate(f);
      return;
    }
    const H = F & 1 && R, G = !Jt(f);
    let ne;
    if (G && (ne = $ && $.onVnodeBeforeUnmount) && Ie(ne, d, f), F & 6)
      $o(f.component, g, w);
    else {
      if (F & 128) {
        f.suspense.unmount(g, w);
        return;
      }
      H && ut(f, null, d, "beforeUnmount"), F & 64 ? f.type.remove(
        f,
        d,
        g,
        Bt,
        w
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== K || C > 0 && C & 64) ? Dt(
        y,
        d,
        g,
        !1,
        !0
      ) : (_ === K && C & 384 || !b && F & 16) && Dt(z, d, g), w && qs(f);
    }
    const ie = V != null && D == null;
    (G && (ne = $ && $.onVnodeUnmounted) || H || ie) && fe(() => {
      ne && Ie(ne, d, f), H && ut(f, null, d, "unmounted"), ie && (f.el = null);
    }, g);
  }, qs = (f) => {
    const { type: d, el: g, anchor: w, transition: b } = f;
    if (d === K) {
      So(g, w);
      return;
    }
    if (d === cs) {
      I(f), b && !b.persisted && b.afterLeave && b.afterLeave();
      return;
    }
    const _ = () => {
      A(g), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (f.shapeFlag & 1 && b && !b.persisted) {
      const { leave: $, delayLeave: S } = b, z = () => $(g, _);
      S ? S(f.el, _, z) : z();
    } else
      _();
  }, So = (f, d) => {
    let g;
    for (; f !== d; )
      g = p(f), A(f), f = g;
    A(d);
  }, $o = (f, d, g) => {
    const { bum: w, scope: b, job: _, subTree: $, um: S, m: z, a: y } = f;
    hA(z), hA(y), w && vn(w), b.stop(), _ ? (_.flags |= 8, Be($, f, d, g)) : f.vnode.el && $ && ($.transition = f.vnode.transition, Be($, f, d, g)), S && fe(S, d), fe(() => {
      f.isUnmounted = !0;
    }, d);
  }, Dt = (f, d, g, w = !1, b = !1, _ = 0) => {
    for (let $ = _; $ < f.length; $++)
      Be(f[$], d, g, w, b);
  }, hn = (f) => {
    if (f.shapeFlag & 6)
      return hn(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const d = p(f.anchor || f.el), g = d && d[wr];
    return g ? p(g) : d;
  };
  let es = !1;
  const Xs = (f, d, g) => {
    let w;
    f == null ? d._vnode && (Be(d._vnode, null, null, !0), w = d._vnode.component) : v(
      d._vnode || null,
      f,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = f, es || (es = !0, cA(w), zi(), es = !1);
  }, Bt = {
    p: v,
    um: Be,
    m: pn,
    r: qs,
    mt: zt,
    mc: de,
    pc: St,
    pbc: te,
    n: hn,
    o: e
  };
  return {
    render: Xs,
    hydrate: void 0,
    createApp: Ir(Xs)
  };
}
function ls({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ft({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ur(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Li(e, t, n = !1) {
  const s = e.children, A = t.children;
  if (L(s) && L(A))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let r = A[i];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = A[i] = We(A[i]), r.el = o.el), !n && r.patchFlag !== -2 && Li(o, r)), r.type === Zn && (r.patchFlag === -1 && (r = A[i] = We(r)), r.el = o.el), r.type === Ke && !r.el && (r.el = o.el);
    }
}
function Kr(e) {
  const t = e.slice(), n = [0];
  let s, A, i, o, r;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const c = e[s];
    if (c !== 0) {
      if (A = n[n.length - 1], e[A] < c) {
        t[s] = A, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        r = i + o >> 1, e[n[r]] < c ? i = r + 1 : o = r;
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Vi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Vi(t);
}
function hA(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Wi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Wi(t.subTree) : null;
}
const Gi = (e) => e.__isSuspense;
function Zr(e, t) {
  t && t.pendingBranch ? L(e) ? t.effects.push(...e) : t.effects.push(e) : gr(e);
}
const K = /* @__PURE__ */ Symbol.for("v-fgt"), Zn = /* @__PURE__ */ Symbol.for("v-txt"), Ke = /* @__PURE__ */ Symbol.for("v-cmt"), cs = /* @__PURE__ */ Symbol.for("v-stc"), bt = [];
let me = null;
function E(e = !1) {
  bt.push(me = e ? null : []);
}
function Yi() {
  bt.pop(), me = bt[bt.length - 1] || null;
}
let sn = 1;
function mA(e, t = !1) {
  sn += e, e < 0 && me && t && (me.hasOnce = !0);
}
function Hi(e) {
  return e.dynamicChildren = sn > 0 ? me || ht : null, Yi(), sn > 0 && me && me.push(e), e;
}
function M(e, t, n, s, A, i) {
  return Hi(
    h(
      e,
      t,
      n,
      s,
      A,
      i,
      !0
    )
  );
}
function qe(e, t, n, s, A) {
  return Hi(
    He(
      e,
      t,
      n,
      s,
      A,
      !0
    )
  );
}
function Ui(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Wt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ki = ({ key: e }) => e ?? null, _n = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || /* @__PURE__ */ ae(e) || Y(e) ? { i: be, r: e, k: t, f: !!n } : e : null);
function h(e, t = null, n = null, s = 0, A = null, i = e === K ? 0 : 1, o = !1, r = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ki(t),
    ref: t && _n(t),
    scopeId: $i,
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
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: A,
    dynamicChildren: null,
    appContext: null,
    ctx: be
  };
  return r ? (Mn(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= se(n) ? 8 : 16), sn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && me.push(l), l;
}
const He = Jr;
function Jr(e, t = null, n = null, s = 0, A = null, i = !1) {
  if ((!e || e === Er) && (e = Ke), Ui(e)) {
    const r = Rt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Mn(r, n), sn > 0 && !i && me && (r.shapeFlag & 6 ? me[me.indexOf(e)] = r : me.push(r)), r.patchFlag = -2, r;
  }
  if (rl(e) && (e = e.__vccOpts), t) {
    t = Qr(t);
    let { class: r, style: l } = t;
    r && !se(r) && (t.class = ct(r)), Q(l) && (/* @__PURE__ */ Ds(l) && !L(l) && (l = ke({}, l)), t.style = Wn(l));
  }
  const o = se(e) ? 1 : Gi(e) ? 128 : Un(e) ? 64 : Q(e) ? 4 : Y(e) ? 2 : 0;
  return h(
    e,
    t,
    n,
    s,
    A,
    o,
    i,
    !0
  );
}
function Qr(e) {
  return e ? /* @__PURE__ */ Ds(e) || Fi(e) ? ke({}, e) : e : null;
}
function Rt(e, t, n = !1, s = !1) {
  const { props: A, ref: i, patchFlag: o, children: r, transition: l } = e, c = t ? qr(A || {}, t) : A, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ki(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? L(i) ? i.concat(_n(t)) : [i, _n(t)] : _n(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== K ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Rt(e.ssContent),
    ssFallback: e.ssFallback && Rt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return l && s && Ls(
    u,
    l.clone(u)
  ), u;
}
function qt(e = " ", t = 0) {
  return He(Zn, null, e, t);
}
function X(e = "", t = !1) {
  return t ? (E(), qe(Ke, null, e)) : He(Ke, null, e);
}
function Re(e) {
  return e == null || typeof e == "boolean" ? He(Ke) : L(e) ? He(
    K,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ui(e) ? We(e) : He(Zn, null, String(e));
}
function We(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Rt(e);
}
function Mn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (L(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const A = t.default;
      A && (A._c && (A._d = !1), Mn(e, A()), A._c && (A._d = !0));
      return;
    } else {
      n = 32;
      const A = t._;
      !A && !Fi(t) ? t._ctx = be : A === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Y(t)) {
    if (s & 65) {
      Mn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: be }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [qt(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function qr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const A in s)
      if (A === "class")
        t.class !== s.class && (t.class = ct([t.class, s.class]));
      else if (A === "style")
        t.style = Wn([t.style, s.style]);
      else if (jn(A)) {
        const i = t[A], o = s[A];
        o && i !== o && !(L(i) && i.includes(o)) ? t[A] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Dn(A) && (t[A] = o);
      } else A !== "" && (t[A] = s[A]);
  }
  return t;
}
function Ie(e, t, n, s = null) {
  De(e, t, 7, [
    n,
    s
  ]);
}
const Xr = Ti();
let el = 0;
function tl(e, t, n) {
  const s = e.type, A = (t ? t.appContext : e.appContext) || Xr, i = {
    uid: el++,
    vnode: e,
    type: s,
    parent: t,
    appContext: A,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Lo(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(A.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Lr(s, A),
    emitsOptions: Rr(s, A),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: J,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: J,
    data: J,
    props: J,
    attrs: J,
    slots: J,
    refs: J,
    setupState: J,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Pr.bind(null, i), e.ce && e.ce(i), i;
}
let it = null;
const nl = () => it || be;
let In, An;
{
  const e = Vn(), t = (n, s) => {
    let A;
    return (A = e[n]) || (A = e[n] = []), A.push(s), (i) => {
      A.length > 1 ? A.forEach((o) => o(i)) : A[0](i);
    };
  };
  In = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => it = n
  ), An = t(
    "__VUE_SSR_SETTERS__",
    (n) => on = n
  );
}
const Gs = (e) => {
  const t = it;
  return In(e), e.scope.on(), () => {
    e.scope.off(), In(t);
  };
}, gA = () => {
  it && it.scope.off(), In(null);
};
function Zi(e) {
  return e.vnode.shapeFlag & 4;
}
let on = !1;
function sl(e, t = !1, n = !1) {
  t && An(t);
  const { props: s, children: A } = e.vnode, i = Zi(e);
  Dr(e, s, i, t), Wr(e, A, n || t);
  const o = i ? Al(e, t) : void 0;
  return t && An(!1), o;
}
function Al(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Cr);
  const { setup: s } = n;
  if (s) {
    nt();
    const A = e.setupContext = s.length > 1 ? ol(e) : null, i = Gs(e), o = un(
      s,
      e,
      0,
      [
        e.props,
        A
      ]
    ), r = XA(o);
    if (st(), i(), (r || e.sp) && !Jt(e) && zr(e), r) {
      if (o.then(gA, gA), t)
        return o.then((l) => {
          An(!0);
          try {
            xA(e, l, t);
          } finally {
            An(!1);
          }
        }).catch((l) => {
          Hn(l, e, 0);
        });
      e.asyncDep = o;
    } else
      xA(e, o);
  } else
    Ji(e);
}
function xA(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = vi(t)), Ji(e);
}
function Ji(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || gt);
}
const il = {
  get(e, t) {
    return re(e, "get", ""), e[t];
  }
};
function ol(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, il),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Jn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vi(rr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Qt)
        return Qt[n](e);
    },
    has(t, n) {
      return n in t || n in Qt;
    }
  })) : e.proxy;
}
function rl(e) {
  return Y(e) && "__vccOpts" in e;
}
const Ae = (e, t) => /* @__PURE__ */ fr(e, t, on), ll = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let zs;
const bA = typeof window < "u" && window.trustedTypes;
if (bA)
  try {
    zs = /* @__PURE__ */ bA.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Qi = zs ? (e) => zs.createHTML(e) : (e) => e, cl = "http://www.w3.org/2000/svg", al = "http://www.w3.org/1998/Math/MathML", Ve = typeof document < "u" ? document : null, yA = Ve && /* @__PURE__ */ Ve.createElement("template"), ul = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const A = t === "svg" ? Ve.createElementNS(cl, e) : t === "mathml" ? Ve.createElementNS(al, e) : n ? Ve.createElement(e, { is: n }) : Ve.createElement(e);
    return e === "select" && s && s.multiple != null && A.setAttribute("multiple", s.multiple), A;
  },
  createText: (e) => Ve.createTextNode(e),
  createComment: (e) => Ve.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ve.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, A, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (A && (A === i || A.nextSibling))
      for (; t.insertBefore(A.cloneNode(!0), n), !(A === i || !(A = A.nextSibling)); )
        ;
    else {
      yA.innerHTML = Qi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const r = yA.content;
      if (s === "svg" || s === "mathml") {
        const l = r.firstChild;
        for (; l.firstChild; )
          r.appendChild(l.firstChild);
        r.removeChild(l);
      }
      t.insertBefore(r, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, fl = /* @__PURE__ */ Symbol("_vtc");
function dl(e, t, n) {
  const s = e[fl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vA = /* @__PURE__ */ Symbol("_vod"), pl = /* @__PURE__ */ Symbol("_vsh"), hl = /* @__PURE__ */ Symbol(""), ml = /(?:^|;)\s*display\s*:/;
function gl(e, t, n) {
  const s = e.style, A = se(n);
  let i = !1;
  if (n && !A) {
    if (t)
      if (se(t))
        for (const o of t.split(";")) {
          const r = o.slice(0, o.indexOf(":")).trim();
          n[r] == null && Yt(s, r, "");
        }
      else
        for (const o in t)
          n[o] == null && Yt(s, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const r = n[o];
      r != null ? bl(
        e,
        o,
        !se(t) && t ? t[o] : void 0,
        r
      ) || Yt(s, o, r) : Yt(s, o, "");
    }
  } else if (A) {
    if (t !== n) {
      const o = s[hl];
      o && (n += ";" + o), s.cssText = n, i = ml.test(n);
    }
  } else t && e.removeAttribute("style");
  vA in e && (e[vA] = i ? s.display : "", e[pl] && (s.display = "none"));
}
const bn = /\s*!important$/;
function Yt(e, t, n) {
  if (L(n))
    n.forEach((s) => Yt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    bn.test(n) ? e.setProperty(t, n.replace(bn, ""), "important") : e.setProperty(t, n);
  else {
    const s = xl(e, t);
    bn.test(n) ? e.setProperty(
      wt(s),
      n.replace(bn, ""),
      "important"
    ) : e[s] = n;
  }
}
const _A = ["Webkit", "Moz", "ms"], as = {};
function xl(e, t) {
  const n = as[t];
  if (n)
    return n;
  let s = _e(t);
  if (s !== "filter" && s in e)
    return as[t] = s;
  s = ni(s);
  for (let A = 0; A < _A.length; A++) {
    const i = _A[A] + s;
    if (i in e)
      return as[t] = i;
  }
  return t;
}
function bl(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && se(s) && n === s;
}
const wA = "http://www.w3.org/1999/xlink";
function kA(e, t, n, s, A, i = Oo(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wA, t.slice(6, t.length)) : e.setAttributeNS(wA, t, n) : n == null || i && !Ai(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Fe(n) ? String(n) : n
  );
}
function zA(e, t, n, s, A) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Qi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const r = i === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (r !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const r = typeof e[t];
    r === "boolean" ? n = Ai(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(A || t);
}
function pt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function yl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const SA = /* @__PURE__ */ Symbol("_vei");
function vl(e, t, n, s, A = null) {
  const i = e[SA] || (e[SA] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [r, l] = kl(t);
    if (s) {
      const c = i[t] = $l(
        s,
        A
      );
      pt(e, r, c, l);
    } else o && (yl(e, r, o, l), i[t] = void 0);
  }
}
const _l = /(Once|Passive|Capture)$/, wl = /^on:?(?:Once|Passive|Capture)$/;
function kl(e) {
  let t, n;
  for (; (n = e.match(_l)) && !wl.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : wt(e.slice(2)), t];
}
let us = 0;
const zl = /* @__PURE__ */ Promise.resolve(), Sl = () => us || (zl.then(() => us = 0), us = Date.now());
function $l(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const A = n.value;
    if (L(A)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const o = A.slice(), r = [s];
      for (let l = 0; l < o.length && !s._stopped; l++) {
        const c = o[l];
        c && De(
          c,
          t,
          5,
          r
        );
      }
    } else
      De(
        A,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Sl(), n;
}
const $A = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, El = (e, t, n, s, A, i) => {
  const o = A === "svg";
  t === "class" ? dl(e, s, o) : t === "style" ? gl(e, n, s) : jn(t) ? Dn(t) || vl(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Cl(e, t, s, o)) ? (zA(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && kA(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ml(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !se(s))) ? zA(e, _e(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), kA(e, t, s, o));
};
function Cl(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $A(t) && Y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const A = e.tagName;
    if (A === "IMG" || A === "VIDEO" || A === "CANVAS" || A === "SOURCE")
      return !1;
  }
  return $A(t) && se(n) ? !1 : t in e;
}
function Ml(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = _e(t);
  return Array.isArray(n) ? n.some((A) => _e(A) === s) : Object.keys(n).some((A) => _e(A) === s);
}
const Tn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return L(t) ? (n) => vn(t, n) : t;
};
function Il(e) {
  e.target.composing = !0;
}
function EA(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const mt = /* @__PURE__ */ Symbol("_assign"), yn = /* @__PURE__ */ Symbol("_initialValue");
function fs(e, t, n) {
  return t && (e = e.trim()), n && (e = Ln(e)), e;
}
const Ss = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, A) {
    e.parentNode && (e.type === "text" ? e[yn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[yn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[mt] = Tn(A);
    const i = s || A.props && A.props.type === "number";
    pt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[mt](fs(e.value, n, i));
    }), (n || i) && pt(e, "change", () => {
      e.value = fs(e.value, n, i);
    }), t || (pt(e, "compositionstart", Il), pt(e, "compositionend", EA), pt(e, "change", EA));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const A = t ?? "", i = e[yn];
    delete e[yn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[mt](fs(e.value, n, s)) : e.value = A;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: A, number: i } }, o) {
    if (e[mt] = Tn(o), e.composing) return;
    const r = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ln(e.value) : e.value, l = t ?? "";
    if (r === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || A && e.value.trim() === l) || (e.value = l);
  }
}, Ys = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, pt(e, "change", () => {
      const A = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Ln(Pn(l)) : Pn(l)
      ), i = e.multiple, o = i ? yt(e._modelValue) ? new Set(A) : A : A[0], r = e._pendingValue = [
        i,
        i ? L(o) ? A.slice() : A : o
      ];
      try {
        e[mt](o);
      } finally {
        wi(() => {
          e._pendingValue === r && (e._pendingValue = void 0);
        });
      }
    }), e[mt] = Tn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    CA(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[mt] = Tn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Tl(t, n[1], n[0])) && CA(e, t);
  }
};
function Tl(e, t, n) {
  if (!n || L(e)) return tt(e, t);
  if (yt(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function CA(e, t) {
  const n = e.multiple, s = L(t);
  if (!(n && !s && !yt(t))) {
    for (let A = 0, i = e.options.length; A < i; A++) {
      const o = e.options[A], r = Pn(o);
      if (n)
        if (s) {
          const l = typeof r;
          l === "string" || l === "number" ? o.selected = t.some((c) => String(c) === String(r)) : o.selected = Bo(t, r) > -1;
        } else
          o.selected = t.has(r);
      else if (tt(Pn(o), t)) {
        e.selectedIndex !== A && (e.selectedIndex = A);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Pn(e) {
  return "_value" in e ? e._value : e.value;
}
const Pl = ["ctrl", "shift", "alt", "meta"], Rl = {
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
  exact: (e, t) => Pl.some((n) => e[`${n}Key`] && !t.includes(n))
}, Nl = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((A, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const r = Rl[t[o]];
      if (r && r(A, t)) return;
    }
    return e(A, ...i);
  }));
}, Fl = /* @__PURE__ */ ke({ patchProp: El }, ul);
let MA;
function Ol() {
  return MA || (MA = Yr(Fl));
}
const jl = ((...e) => {
  const t = Ol().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const A = Bl(s);
    if (!A) return;
    const i = t._component;
    !Y(i) && !i.render && !i.template && (i.template = A.innerHTML), A.nodeType === 1 && (A.textContent = "");
    const o = n(A, !1, Dl(A));
    return A instanceof Element && (A.removeAttribute("v-cloak"), A.setAttribute("data-v-app", "")), o;
  }, t;
});
function Dl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Bl(e) {
  return se(e) ? document.querySelector(e) : e;
}
const Ll = "zhonglou", Vl = "钟楼", Wl = "1.2.0", Gl = "S", Yl = 10, Hl = "【副本进行中：钟楼】", Ul = [], Kl = { briefingName: "钟楼" }, Zl = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, Jl = { type: "nights", template: "剩余{n}夜" }, Ql = "至第四日日出", ql = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], Xl = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", ec = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], tc = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], nc = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], sc = {
  id: Ll,
  name: Vl,
  version: Wl,
  level: Gl,
  players: Yl,
  token: Hl,
  legacyKeys: Ul,
  detect: Kl,
  time: Zl,
  remaining: Jl,
  deadline: Ql,
  roles: ql,
  rolesNote: Xl,
  phases: ec,
  events: tc,
  docs: nc
}, Ac = "jingjie", ic = "境界游乐园", oc = "1.0.0", rc = "A", lc = "【副本进行中：境界游乐园】", cc = [], ac = { briefingName: "境界游乐园" }, uc = { type: "none" }, fc = { type: "fromPanel" }, dc = [], pc = [], hc = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], mc = {
  id: Ac,
  name: ic,
  version: oc,
  level: rc,
  token: lc,
  legacyKeys: cc,
  detect: ac,
  time: uc,
  remaining: fc,
  phases: dc,
  events: pc,
  docs: hc
}, gc = "kaoshi", xc = "考试", bc = "1.1.0", yc = "A", vc = "【副本进行中：考试】", _c = [], wc = { briefingName: "考试" }, kc = { type: "countdown", minutesPerRound: 3 }, zc = { type: "fromPanel" }, Sc = "至考试结束", $c = [{ id: "main", name: "考试", cap: 100, next: null }], Ec = [], Cc = [], Mc = {
  id: gc,
  name: xc,
  version: bc,
  level: yc,
  token: vc,
  legacyKeys: _c,
  detect: wc,
  time: kc,
  remaining: zc,
  deadline: Sc,
  phases: $c,
  events: Ec,
  docs: Cc
}, Ic = "xiyan", Tc = "喜宴", Pc = "1.1.0", Rc = "D", Nc = "【副本进行中：喜宴】", Fc = [], Oc = { briefingName: "喜宴" }, jc = { type: "countdown", minutesPerRound: 3 }, Dc = { type: "fromPanel" }, Bc = "至天亮", Lc = [{ id: "main", name: "喜宴", cap: 160, next: null }], Vc = [], Wc = [], Gc = {
  id: Ic,
  name: Tc,
  version: Pc,
  level: Rc,
  token: Nc,
  legacyKeys: Fc,
  detect: Oc,
  time: jc,
  remaining: Dc,
  deadline: Bc,
  phases: Lc,
  events: Vc,
  docs: Wc
}, Yc = "youxi", Hc = "游戏", Uc = "1.1.0", Kc = "C", Zc = "【副本进行中：游戏】", Jc = [], Qc = { briefingName: "游戏" }, qc = { type: "countdown", minutesPerRound: 8 }, Xc = { type: "fromPanel" }, ea = "至结算", ta = [{ id: "main", name: "游戏", cap: 90, next: null }], na = [], sa = [], Aa = {
  id: Yc,
  name: Hc,
  version: Uc,
  level: Kc,
  token: Zc,
  legacyKeys: Jc,
  detect: Qc,
  time: qc,
  remaining: Xc,
  deadline: ea,
  phases: ta,
  events: na,
  docs: sa
}, ia = "wuming", oa = "污名", ra = "1.1.0", la = "B", ca = "4-8", aa = "【副本进行中：污名】", ua = ["污名"], fa = { briefingName: "污名" }, da = { type: "countdown", minutesPerRound: 3 }, pa = { type: "countdown", template: "剩余{m}分钟" }, ha = "至收播", ma = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], ga = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], xa = [], ba = !0, ya = {
  id: ia,
  name: oa,
  version: ra,
  level: la,
  players: ca,
  token: aa,
  legacyKeys: ua,
  detect: fa,
  time: da,
  remaining: pa,
  deadline: ha,
  phases: ma,
  events: ga,
  docs: xa,
  disableLive: ba
}, va = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function Mt(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const _a = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function IA(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(_a)) {
    const A = Number(s[1]), i = s[2];
    n = !0, i === "天" ? t += A * 1440 : i === "小时" || i === "个小时" || i === "h" || i === "H" ? t += A * 60 : t += A;
  }
  return n ? Math.round(t) : null;
}
function qi(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: IA(t), total: n === void 0 ? null : IA(n) };
}
function wa(e, t) {
  return e.phases.find((n) => n.id === t);
}
function rn(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let A = t;
  for (; A && !s.has(A.id); )
    n.push(A), s.add(A.id), A = wa(e, A.next);
  return n;
}
function Xi(e, t) {
  return rn(e, t).filter((n) => n.night).length;
}
function ka(e, t, n) {
  if (rn(e, t).some((A) => A.id === n.id)) return t;
  const s = e.phases[0];
  return s && rn(e, s).some((A) => A.id === n.id) ? s : n;
}
function TA(e, t, n, s, A) {
  if (!e.phases.length || !e.phases.some((a) => a.id === t.id)) return;
  let i = rn(e, n), o = i.findIndex((a) => a.id === t.id);
  o < 0 && (i = rn(e, t), o = 0);
  const r = i.reduce((a, p) => a + Math.max(0, p.cap), 0), l = Math.max(0, t.cap - s) + i.slice(o + 1).reduce((a, p) => a + Math.max(0, p.cap), 0), c = t.deadline ?? i[0].deadline ?? e.deadline, u = { x: l, y: r, deadline: c };
  if (e.time.type === "countdown") {
    const a = e.time.minutesPerRound, p = e.time.totalMinutes, x = p && p > 0 ? p : r * a;
    let k = p && p > 0 && r > 0 ? Math.round(x * l / r) : l * a;
    const v = qi(A).remaining;
    v !== null && (k = Math.min(k, v - a)), k = Math.max(0, k), Object.assign(u, { minutes: k, total: x, text: `约剩${Mt(k)}/${Mt(x)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) u.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const a = e.remaining.template.replace("{n}", String(Xi(e, t)));
      u.text = c ? `${c}·${a}` : a;
    } else c && (u.text = c);
  return u;
}
const ln = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function eo(e, t, n = ln) {
  const s = e ?? "", A = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), i = A ? Math.max(1, Number(A[1])) : Math.max(1, Math.round(n[t] ?? ln[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: i };
  const r = Number(o[1]), l = Math.round(o[2] === "天" ? r * 1440 : o[2].includes("小时") ? r * 60 : r);
  return l <= 0 ? { rounds: i } : { rounds: i, totalMinutes: l, minutesPerRound: Math.max(1, Math.round(l / i)) };
}
const Rn = "generic", PA = [sc, mc, Mc, Gc, Aa, ya], za = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(va)
  }
};
function Sa(e, t) {
  const n = za[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const to = ["D", "C", "B", "A", "S"];
function no(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Rn && t.push(`id 不能是保留字 ${Rn}`), to.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), (!n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName) && t.push("缺少 detect.briefingName");
  const A = n.time;
  !A || !["none", "clock", "countdown"].includes(A.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (A.type === "clock" && (typeof A.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(A.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), A.type !== "none" && (typeof A.minutesPerRound != "number" || A.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), A.type === "countdown" && A.totalMinutes !== void 0 && (typeof A.totalMinutes != "number" || A.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const i = n.remaining;
  !i || !["nights", "countdown", "fromPanel"].includes(i.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : i.type !== "fromPanel" && typeof i.template != "string" && t.push("remaining.template 必须是文本"), i?.type === "countdown" && A?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((c) => typeof c != "string" || !c)) && t.push("roles 必须是文本数组");
  const o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((c, u) => {
    if (!c || typeof c.id != "string" || typeof c.name != "string") {
      t.push(`phases[${u}] 缺少 id 或 name`);
      return;
    }
    o.has(c.id) && t.push(`阶段 id 重复：${c.id}`), r.has(c.name) && t.push(`阶段名称重复：${c.name}`), o.add(c.id), r.add(c.name), (typeof c.cap != "number" || c.cap < 1 || !Number.isInteger(c.cap)) && t.push(`阶段 ${c.id} 的 cap 必须是正整数`), c.next !== null && typeof c.next != "string" && t.push(`阶段 ${c.id} 的 next 必须是阶段 id 或 null`), c.deadline !== void 0 && typeof c.deadline != "string" && t.push(`阶段 ${c.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((c) => {
    c && typeof c.next == "string" && !o.has(c.next) && t.push(`阶段 ${c.id} 的 next 指向不存在的阶段：${c.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const l = /* @__PURE__ */ new Set();
  return Array.isArray(n.events) ? n.events.forEach((c, u) => {
    if (!c || typeof c.id != "string" || typeof c.text != "string") {
      t.push(`events[${u}] 缺少 id 或 text`);
      return;
    }
    l.has(c.id) && t.push(`事件 id 重复：${c.id}`), l.add(c.id), o.has(c.phase) || t.push(`事件 ${c.id} 的 phase 不存在：${c.phase}`), (!Number.isInteger(c.from) || !Number.isInteger(c.to) || c.from < 1 || c.to < c.from) && t.push(`事件 ${c.id} 的轮次区间无效`), c.kind !== "event" && c.kind !== "directive" && t.push(`事件 ${c.id} 的 kind 必须是 event 或 directive`), c.if !== void 0 && typeof c.if != "string" && t.push(`事件 ${c.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((c, u) => {
    !c || typeof c.title != "string" ? t.push(`docs[${u}] 缺少 title`) : c.md !== void 0 && typeof c.md != "string" ? t.push(`docs[${u}].md 必须是文本`) : c.image !== void 0 && typeof c.image != "string" && t.push(`docs[${u}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), t;
}
function so(e) {
  return to.includes(e.level ?? "") ? e.level : "D";
}
function Ao(e, t = ln) {
  const n = so(e), s = eo(e.limit, n, t), A = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, i = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / A)) : void 0;
  return {
    id: Rn,
    name: e.name,
    version: "1.0.0",
    level: n,
    token: `【副本进行中：${e.name}】`,
    legacyKeys: [],
    detect: { briefingName: e.name },
    // 总时长按简报的值；每轮分钟四舍五入只用于“每轮至少减去”的判断
    time: i ? { type: "countdown", minutesPerRound: i, totalMinutes: s.totalMinutes } : { type: "none" },
    remaining: { type: "fromPanel" },
    phases: [{ id: "main", name: e.name, cap: A, next: null }],
    events: [],
    docs: []
  };
}
function Hs(e) {
  const t = new Set(PA.map((n) => n.id));
  return [...PA, ...e.filter((n) => !t.has(n.id))];
}
function $a(e, t) {
  return e.find((n) => n.detect.briefingName === t);
}
const Ea = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, Ca = /<阶段切换>([\s\S]*?)<\/阶段切换>/, Ma = /<副本结算>([\s\S]*?)<\/副本结算>/, Ia = /<副本>([\s\S]*?)<\/副本>/, Ta = /<角色登记>([\s\S]*?)<\/角色登记>/, Pa = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/;
function cn(e) {
  const t = Ea.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), A = (o) => {
    const r = new RegExp(`${o}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return r ? r[1].trim() : void 0;
  }, i = A("等级");
  return i && (n.level = i.replace(/级$/, "").trim().toUpperCase()), n.goal = A("目标"), n.limit = A("时限"), n.players = A("人数"), n;
}
function Ra(e) {
  const t = Ca.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function io(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const A = n.slice(0, s).trim(), i = n.slice(s + 1).trim();
    A && (t[A] = i);
  }
  return t;
}
function oo(e) {
  const t = Ma.exec(e ?? "");
  if (!t) return null;
  const n = io(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function ro(e) {
  const t = Ta.exec(e ?? "");
  if (!t) return null;
  const n = io(t[1]);
  return Object.keys(n).length ? n : null;
}
function lo(e) {
  const t = Ia.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let s = null;
  for (const A of t[1].split(`
`)) {
    const i = A.trim();
    if (!i) continue;
    const o = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(i);
    if (o) {
      const r = o[1].toLowerCase(), l = o[2].trim();
      r === "时限" ? (n.limit = l, s = null) : r === "进度条" ? (n.progressBar = l, s = null) : r === "任务" ? (l && n.tasks.push(l), s = "tasks") : (n.ps = l, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(i)) {
      s = null;
      continue;
    }
    s === "tasks" ? n.tasks.push(i) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${i}` : i);
  }
  return n;
}
function Na(e) {
  const t = Pa.exec(e ?? "");
  return t ? t[2] : null;
}
function ds(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let A = t;
  for (; A && !s.has(A.id); ) {
    if (n(A)) return A;
    s.add(A.id), A = A.next ? e.phases.find((i) => i.id === A.next) : void 0;
  }
  return null;
}
function Fa(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((r) => r.id === t.id)) return null;
  const A = (r) => !!r.clock && !r.night;
  let i = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      i = ds(e, t, A), o = i?.cap ?? 0;
      break;
    case "晚饭":
      i = ds(e, t, A), i && (o = Math.ceil(i.cap * 0.75), i.id === t.id && o <= n && (o = i.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      i = ds(e, t, (r) => !!r.night), o = i?.cap ?? 0;
      break;
  }
  return !i || i.id === t.id && o <= n + 1 ? null : { phase: i.id, round: o, label: `${i.name}第${o}轮` };
}
const RA = 5, Oa = { id: "_open", name: "进行中", cap: 0, next: null };
function ot(e) {
  return !!e && !e.is_user && !e.is_system;
}
function ja(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function co(e, t, n) {
  const s = ja(e) + Math.max(0, n - 1) * t, A = Math.floor(s / 60) % 24, i = (s % 60 + 60) % 60;
  return `${A % 12 === 0 ? 12 : A % 12}:${String(i).padStart(2, "0")}`;
}
function NA(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return co(e.time.dayStart, e.time.minutesPerRound, n);
}
function ao(e) {
  return e.phases.length ? e.phases : [Oa];
}
function wn(e, t) {
  return ao(e).find((n) => n.id === t);
}
function FA(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let A = t;
  for (; A && !s.has(A.id); ) {
    if (A.id === n) return !0;
    s.add(A.id), A = wn(e, A.next);
  }
  return !1;
}
function OA(e, t, n, s) {
  const A = n + 1, i = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > A) {
      let r = i.map((c, u) => ({ e: c, i: u })).filter(({ e: c }) => c.from >= A && c.from <= o).sort((c, u) => c.e.from - u.e.from || c.i - u.i).map(({ e: c }) => c), l = o;
      return r.length > RA && (l = r[RA - 1].from, r = r.filter((c) => c.from <= l)), { phase: t, round: l, events: r, skipFrom: A };
    }
  }
  return { phase: t, round: A, events: i.filter((o) => o.from === A) };
}
function Da(e, t, n) {
  const s = t.entryIndex;
  if (!ot(e[s])) return null;
  const A = ao(n);
  let i = A[0], o = A[0], r = 0, l, c = !1, u, a = null, p, x, k;
  const v = /* @__PURE__ */ new Set(), B = {}, O = /* @__PURE__ */ new Map();
  for (const te of t.manual ?? [])
    O.has(te.atIndex) || O.set(te.atIndex, []), O.get(te.atIndex).push(te);
  const N = (te) => {
    n.phases.length && (o = ka(n, o, te)), i = te, r = 0, a && !FA(n, i, a.phase) && (a = null);
  };
  for (let te = s; te < e.length; te++) {
    const Ot = e[te];
    if (!c && ot(Ot)) {
      const ue = OA(n, i, r, a);
      r = ue.round, ue.events.forEach(($e) => v.add($e.id)), B[te] = {
        phase: i.id,
        round: r,
        events: ue.events.map(($e) => $e.id),
        skipFrom: ue.skipFrom,
        limit: TA(n, i, o, r, l)
      }, a && i.id === a.phase && r >= a.round && (a = null);
      const Se = String(Ot.mes ?? ""), zt = lo(Se);
      zt && (x = zt), l = zt?.limit;
      const dn = ro(Se);
      dn && (k = dn);
      const jt = oo(Se);
      if (jt)
        c = !0, u = "tag", p = jt;
      else {
        const $e = Ra(Se), St = $e ? A.find(($t) => $t.name === $e) : void 0;
        if (St && n.phases.length)
          N(St);
        else if (i.cap > 0 && r >= i.cap && i.next) {
          const $t = wn(n, i.next);
          $t && N($t);
        }
      }
    }
    for (const ue of O.get(te) ?? []) {
      if (c) break;
      switch (ue.kind) {
        case "skip": {
          a = wn(n, ue.targetPhase) && FA(n, i, ue.targetPhase) ? { phase: ue.targetPhase, round: ue.targetRound } : null;
          break;
        }
        case "setPhase": {
          const Se = wn(n, ue.phase);
          Se && (a = null, N(Se));
          break;
        }
        case "setRound":
          r = Math.max(0, Math.floor(ue.round)), a = null;
          break;
        case "end":
          c = !0, u = "manual";
          break;
      }
    }
  }
  const j = c ? null : OA(n, i, r, a), I = j ? j.round : r + 1, q = i.cap > 0, ee = n.events.filter((te) => v.has(te.id)).map((te) => te.id), le = c ? void 0 : TA(n, i, o, I, l);
  let de;
  const ze = n.remaining;
  return !c && ze.type === "nights" && n.phases.length && !i.byTag && !i.frozen ? de = ze.template.replace("{n}", String(Xi(n, i))) : !c && ze.type === "countdown" && le?.minutes !== void 0 && (de = ze.template.replace("{m}", String(le.minutes))), {
    phase: i,
    round: r,
    nextRound: I,
    clock: c ? void 0 : NA(n, i, I),
    currentClock: NA(n, i, r),
    remainingText: de,
    limit: le,
    chainStart: n.phases.length ? o.id : void 0,
    ended: c,
    endedBy: u,
    firedEvents: ee,
    warn: !c && q && I >= i.cap - 2,
    isLastRound: !c && q && I === i.cap,
    overdue: !c && q && !i.next && I > i.cap,
    next: j,
    skipGoal: a,
    settlement: p,
    panel: x,
    rolesFromChat: k,
    perMessage: B,
    entryIndex: s
  };
}
const uo = "rlzc_token", fo = "rlzc_progress", po = "rlzc_turn", Ba = [uo, fo, po], Qn = { token: "", progress: "", turn: "", injected: [] };
function La(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function jA(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const A = new RegExp(`(?<!\\{)\\{(${s.map(La).join("|")})\\}(?!\\})`, "g");
  return e.replace(A, (i, o) => n?.[o]?.trim() || o);
}
function Va(e, t) {
  if (!t.length) return "";
  const n = e.events.map((l) => l.id), s = t.map((l) => n.indexOf(l)).filter((l) => l >= 0).sort((l, c) => l - c), A = [];
  let i = s[0], o = s[0];
  const r = () => A.push(i === o ? n[i] : `${n[i]}–${n[o]}`);
  for (let l = 1; l < s.length; l++) {
    if (s[l] === o + 1) {
      o = s[l];
      continue;
    }
    r(), i = o = s[l];
  }
  return r(), A.join("、");
}
function DA(e, t, n) {
  let s = jA(e.text, t, n);
  return e.to > e.from && (s = `在本阶段第${e.from}到${e.to}轮之间发生：${s}`), e.if && (s += `（条件：${jA(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${s}`;
}
function Wa(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Ga(e, t, n, s = {}) {
  if (!t || !n || t.ended || n.status !== "active") return Qn;
  const A = s.roles, i = e.phases.length > 0, o = t.next, r = [`副本：${e.name}（${e.level}级）`], l = t.limit;
  if (i)
    r.push(`阶段：${t.phase.name}`), r.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), l && r.push(`剩余${l.x}/${l.y}轮`), t.clock && r.push(`钟时：${t.clock}`), l?.text && r.push(`时限：${l.text}`), e.remaining.type === "countdown" && t.remainingText && r.push(t.remainingText), l?.deadline && !l.text?.includes(l.deadline) && r.push(`截止：${l.deadline}`);
  else {
    r.push(`本轮：第${t.nextRound}轮`), t.clock && r.push(`钟时：${t.clock}`);
    const v = s.panelLimit || s.briefing?.limit;
    v && r.push(`时限：${v}`);
  }
  const c = ["［副本进度·仅供AI］", r.join("　")];
  if (s.briefing?.goal && (!i || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const v = e.roles.filter((B) => A?.[B]);
    c.push(
      v.length ? `角色登记：${e.roles.map((B) => `${B}=${A?.[B] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const u = Va(e, t.firedEvents);
  u && c.push(`已发生事件：${u}`);
  const a = [];
  o.skipFrom !== void 0 && a.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const p = o.events.filter((v) => v.kind === "event"), x = o.events.filter((v) => v.kind === "directive");
  if (p.length && (a.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), p.forEach((v) => a.push(DA(v, e, A)))), x.length && (a.push("本轮写作要求："), x.forEach((v) => a.push(DA(v, e, A)))), t.isLastRound ? a.push(Wa(t)) : t.overdue && a.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && a.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && a.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((v) => A?.[v])) {
    let v = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((B) => `${B}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (v += "死者不得是{{user}}或其同伴。"), a.push(v);
  }
  let k;
  return l?.text && (l.minutes !== void 0 ? (a.push(
    `本轮<副本>的时限一栏写：${l.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), k = { text: l.text, minutes: l.minutes, total: l.total }) : (a.push(`本轮<副本>的时限一栏写：${l.text}（照抄）。`), k = { text: l.text })), {
    token: e.token,
    progress: c.join(`
`),
    turn: a.length ? ["［本轮指令·仅供AI］", ...a].join(`
`) : "",
    injected: o.events.map((v) => v.id),
    limit: k
  };
}
const $s = "rlzc", ho = "rlzc_memo";
function Ya() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function Ha(e, t, n) {
  return {
    id: Ya(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function Ua(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function Ka(e, t) {
  return e.packId === Rn ? e.briefing ? Ao(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function Za(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id) {
    const s = e[t.entryIndex];
    return s && !s.is_user && !s.is_system ? t.entryIndex : -1;
  }
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function Ja(e, t) {
  const n = Za(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((A) => ({ ...A, atIndex: A.atIndex + s }))), t.manual = t.manual.filter((A) => A.atIndex < e.length && A.atIndex >= t.entryIndex), !0;
}
function mo(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Xt = "rlzc_declined";
function Es(e, t) {
  return `${e}:${t}`;
}
function Qa(e, t, n = []) {
  if (t?.status === "active") return null;
  const s = e.findIndex((i) => !!i && !i.is_user && !i.is_system);
  if (s < 0 || t && t.entryIndex === s) return null;
  const A = cn(String(e[s].mes ?? ""));
  return !A || n.includes(Es(s, A.name)) ? null : { index: s, info: A };
}
const qa = 1, Xa = 0;
function ge() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function eu() {
  const e = ge();
  return e.eventTypes ?? e.event_types ?? {};
}
function Je(e, t) {
  const n = eu()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  ge().eventSource.on(n, t);
}
function xe() {
  return ge().chat ?? [];
}
function Us() {
  const e = ge();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function Ft() {
  return ge().chatMetadata ?? {};
}
function fn() {
  const e = ge();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function kn(e, t, n, s) {
  ge().setExtensionPrompt(e, t, qa, n, s, Xa);
}
function rt(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Ze(e) {
  const t = ge();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
const Nt = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function go(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function tu(e, t = Nt) {
  return t.length ? e.replace(go(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function xo(e, t = Nt, n = !1) {
  const s = xe()[e];
  if (!s || s.is_user) return;
  const A = String(s.extra?.display_text ?? s.mes ?? "");
  if (!go(n ? Nt : t, "").test(A)) return;
  const i = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!i) return;
  const o = ge().messageFormatting;
  if (typeof o != "function") return;
  const r = o(tu(A, t), s.name ?? "", !!s.is_system, !1, e);
  i.innerHTML !== r && (i.innerHTML = r);
}
function nu(e = Nt, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && xo(s, e, t);
  });
}
const su = /[■█▰●◆★▮▓]/g, Au = /[□░▱○◇☆▯▒]/g;
function iu(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const i = Number(n[2]);
    return i === 100 ? Number(n[1]) : i > 0 ? Math.round(Number(n[1]) / i * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(su) ?? []).length, A = (t.match(Au) ?? []).length;
  return s + A > 0 ? Math.round(s / (s + A) * 100) : null;
}
function BA(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function ou(e, t) {
  return BA(e).includes(BA(t));
}
function ru(e, t, n) {
  const s = [], A = Object.keys(n.perMessage).map(Number).sort((l, c) => l - c);
  let i = !1, o = null, r = !1;
  for (const l of A) {
    const c = n.perMessage[l], a = t.phases.find((N) => N.id === c.phase)?.name ?? "进行中", p = (N, j) => s.push({ index: l, phase: a, round: c.round, kind: N, text: j }), x = lo(String(e[l]?.mes ?? "")), k = l === n.entryIndex;
    if (!x) {
      k || p("missing", "本轮回复缺少 <副本> 面板"), r = !k;
      continue;
    }
    r = !1;
    const v = iu(x.progressBar);
    x.progressBar === void 0 ? p("progressUnreadable", "<副本> 中没有进度条一栏") : v === null ? p("progressUnreadable", `进度条无法读出数值：「${x.progressBar}」`) : (!i && v !== 0 && p("progressStart", `入场后第一轮的进度条应为0，实际为 ${v}`), (v < 0 || v > 100) && p("progressRange", `进度条数值 ${v} 超出 0–100`), o !== null && v < o && p("progressDrop", `进度条比上一轮低：${o} → ${v}`), o = v), i = !0;
    const B = e[l]?.extra?.rlzc?.limit, O = B?.text ? B : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (O) {
      const N = x.limit;
      if (O.minutes !== void 0) {
        const j = qi(N);
        !N || j.remaining === null || j.total === null ? p("limit", `时限读不到「剩余时间/总时长」：写的是「${N ?? "（没有时限一栏）"}」，注入的是「${O.text}」`) : (j.remaining > O.minutes && p("limit", `剩余时间比注入值多：写的是${Mt(j.remaining)}，注入的是${Mt(O.minutes)}`), O.total !== void 0 && j.total !== O.total && p("limit", `总时长与注入值不一致：写的是${Mt(j.total)}，注入的是${Mt(O.total)}`));
      } else (!N || !ou(N, O.text)) && p("limit", `时限与注入文字不一致：写的是「${N ?? "（没有时限一栏）"}」，注入的是「${O.text}」`);
    }
  }
  return { warnings: s, missingLast: r, hasPanel: i };
}
const Cs = "rlzc", zn = {
  depths: { token: 4, progress: 4, turn: 0 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...ln }
}, m = /* @__PURE__ */ Yn({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  memo: "",
  settings: structuredClone(zn),
  packs: [],
  lastInjection: Qn,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0
});
function bo(e) {
  return JSON.parse(JSON.stringify(e));
}
function lu(...e) {
  m.settings.debug && console.log("[rlzc]", ...e);
}
function cu() {
  const e = ge().extensionSettings, t = e[Cs] ?? {}, n = {
    ...structuredClone(zn),
    ...t,
    depths: { ...zn.depths, ...t.depths ?? {} },
    ball: { ...zn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => no(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...ln, ...t.genericCaps ?? {} }
  };
  e[Cs] = n, m.settings = n, m.packs = Hs(n.customPacks);
}
function Ue() {
  ge().extensionSettings[Cs] = JSON.parse(JSON.stringify(m.settings)), ge().saveSettingsDebounced(), m.packs = Hs(m.settings.customPacks);
}
function au(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = no(t);
  if (n.length) return n;
  const s = t;
  return Hs([]).some((A) => A.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (m.settings.customPacks = [...m.settings.customPacks.filter((A) => A.id !== s.id), s], Ue(), []);
}
function uu(e) {
  m.settings.customPacks = m.settings.customPacks.filter((t) => t.id !== e), Ue();
}
function kt() {
  return Ua(Ft()[$s]);
}
function _t(e) {
  const t = Ft();
  e ? t[$s] = JSON.parse(JSON.stringify(e)) : delete t[$s], fn();
}
function Ks(e) {
  const t = kt();
  t && (e(t), _t(t), lt());
}
function fu(e) {
  const t = xe();
  return (e === "swipe" || e === "continue") && ot(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Nn(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Ka(t, m.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = Da(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? ru(e, n, s) : null };
}
function lt() {
  const e = xe();
  let t = kt();
  if (t) {
    const s = JSON.stringify(t);
    if (!Ja(e, t))
      _t(null), rt("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const A = Nn(e, t);
      A.progress && (t.status = A.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && _t(t);
    }
  }
  const n = Nn(e, t);
  m.session = n.session, m.pack = n.pack, m.progress = n.progress, m.audit = n.audit, m.tick++;
}
function du() {
  if (m.session)
    return mo(m.session, m.progress?.rolesFromChat);
}
function Fn() {
  for (const e of Ba) kn(e, "", 0, !1);
}
let On = -1;
function pu(e) {
  const t = fu(e), n = kt(), { pack: s, progress: A, audit: i } = Nn(t, n), o = n ? mo(n, A?.rolesFromChat) : void 0, r = s ? Ga(s, A, n, { roles: o, briefing: n?.briefing, panelLimit: A?.panel?.limit, audit: i ?? void 0 }) : Qn;
  Fn();
  const l = m.settings.depths;
  r.token && kn(uo, r.token, l.token, !0), r.progress && kn(fo, r.progress, l.progress, !1), r.turn && kn(po, r.turn, l.turn, !1), m.lastInjection = r, On = t.length, lu("注入", e, r);
}
const Ms = /* @__PURE__ */ new Set();
async function hu() {
  const e = xe(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Na(n.mes);
  if (!s) return;
  const A = kt();
  if (!A || A.status !== "active" || A.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const i = `${Us()}:${t}:${n.mes}`;
  if (Ms.has(i)) return;
  Ms.add(i);
  const { pack: o, progress: r } = Nn(e, A);
  if (!o || !r || r.ended) return;
  const l = Fa(o, r.phase, r.round, s);
  l && await Ze(`是否跳到${s}？（${l.label}）`) && (A.manual.push({ kind: "skip", atIndex: t, targetPhase: l.phase, targetRound: l.round }), _t(A));
}
async function mu(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Fn();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await hu(), pu(s);
  } catch (A) {
    console.error("[rlzc] 拦截器出错", A), Fn();
  }
}
const LA = /* @__PURE__ */ new Set();
async function yo(e, t = !1) {
  const s = xe()[e], A = cn(s?.mes ?? "");
  if (!A) return;
  const i = `${Us()}:${e}:${A.name}`;
  if (LA.has(i)) return;
  LA.add(i);
  const o = $a(m.packs, A.name), r = o ? `检测到进入《${o.name}》，是否启用？` : `检测到进入《${A.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!await Ze(r)) {
    if (t) {
      const c = Ft(), u = Array.isArray(c[Xt]) ? c[Xt] : [];
      c[Xt] = [...u.filter((a) => a !== Es(e, A.name)), Es(e, A.name)], fn();
    }
    return;
  }
  const l = xe()[e];
  if (!ot(l) || cn(l.mes)?.name !== A.name) {
    rt("warning", "简报消息已变化，未启用。");
    return;
  }
  o || (A.rounds = eo(A.limit, so(A), m.settings.genericCaps).rounds), vo(o ?? Ao(A, m.settings.genericCaps), e, A);
}
function Zs() {
  const e = Ft(), t = Array.isArray(e[Xt]) ? e[Xt] : [], n = Qa(xe(), kt(), t);
  n && yo(n.index, !0);
}
function gu(e) {
  lt();
  const t = xe().findIndex((n) => ot(n));
  e === t && Zs();
}
function vo(e, t, n) {
  const A = xe()[t], i = Ha(e, t, n);
  A.extra = A.extra ?? {}, A.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: i.id }, _t(i), lt(), m.progress && (A.extra.rlzc.injected = bo(m.progress.perMessage[t]?.events ?? [])), fn(), rt("success", `已进入副本《${e.name}》。`);
}
async function xu(e) {
  const t = m.packs.find((i) => i.id === e);
  if (!t) return;
  const n = xe();
  let s = n.length - 1;
  for (; s >= 0 && !ot(n[s]); ) s--;
  if (s < 0) {
    rt("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  kt()?.status === "active" && !await Ze("当前已有进行中的副本，确定要替换吗？") || await Ze(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && vo(t, s, cn(n[s].mes) ?? { name: t.name });
}
function qn(e) {
  Ks((t) => t.manual.push(e));
}
function Xn() {
  return xe().length - 1;
}
async function VA() {
  const e = m.progress;
  if (!(!e || e.ended || !m.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      rt("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ze(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (qn({ kind: "skip", atIndex: Xn(), targetPhase: e.phase.id, targetRound: e.phase.cap }), rt("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function WA() {
  !m.session || m.progress?.ended || await Ze("确定要手动结束当前副本吗？") && qn({ kind: "end", atIndex: Xn() });
}
function bu(e) {
  qn({ kind: "setPhase", atIndex: Xn(), phase: e });
}
function yu(e) {
  qn({ kind: "setRound", atIndex: Xn(), round: e });
}
function vu(e) {
  Ks((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function _u(e) {
  Ks((t) => t.manual.splice(e, 1));
}
async function GA() {
  m.session && await Ze("确定要删除当前副本会话吗？（不会改动聊天记录）") && (_t(null), lt());
}
function YA(e) {
  m.memo = e, Ft()[ho] = e, fn();
}
function wu(e) {
  const t = xe(), n = t[e];
  if (!ot(n)) return;
  const s = kt();
  if ((!s || s.status === "ended") && cn(n.mes)) {
    e === t.findIndex((r) => ot(r)) ? Zs() : yo(e);
    return;
  }
  if (!s) return;
  const A = ro(n.mes);
  A && (s.roles = { ...s.roles ?? {}, ...A }), _t(s), lt();
  const i = m.progress?.perMessage[e];
  if (i && m.pack) {
    const r = m.pack.phases.find((p) => p.id === i.phase), l = {
      phase: r?.name ?? i.phase,
      round: i.round,
      injected: On === e ? m.lastInjection.injected : i.events
    }, c = m.pack.time;
    c.type === "clock" && r?.clock && !r.night && !r.frozen && (l.clock = co(c.dayStart, c.minutesPerRound, i.round));
    const u = On === e ? m.lastInjection.limit : i.limit?.text ? { text: i.limit.text, minutes: i.limit.minutes, total: i.limit.total } : void 0;
    u && (l.limit = u);
    const a = n.extra?.rlzc?.entry;
    a && (l.entry = a), n.extra = n.extra ?? {}, n.extra.rlzc = bo(l), fn(), lt();
  }
  const o = oo(n.mes);
  o && rt("info", `副本结算：${o.result ?? "—"}${o.rating ? `，评价 ${o.rating}` : ""}`);
}
function HA() {
  Ms.clear(), On = -1, m.chatId = Us(), m.debugUnlocked = !1, m.lastInjection = Qn, Fn();
  const e = Ft()[ho];
  m.memo = typeof e == "string" ? e : "", lt(), Zs(), setTimeout(() => Js(), 50);
}
function ps() {
  lt();
}
function _o() {
  return m.settings.panelDisplay === "statusbar" ? Nt.filter((e) => e !== "副本") : Nt;
}
function hs(e) {
  xo(e, _o());
}
function Js(e = !1) {
  nu(_o(), e);
}
function ku(e) {
  m.settings.panelDisplay !== e && (m.settings.panelDisplay = e, Ue(), Js(!0));
}
const zu = { class: "rlzc-ball-mark" }, ms = 44, Su = /* @__PURE__ */ at({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ je({ x: 0, y: 0 });
    let n = null;
    function s(u, a) {
      const p = window.innerWidth - ms - 4, x = window.innerHeight - ms - 4;
      return { x: Math.min(Math.max(4, u), p), y: Math.min(Math.max(4, a), x) };
    }
    function A() {
      const u = m.settings.ball;
      t.value = s(u.x ?? window.innerWidth - ms - 12, u.y ?? Math.round(window.innerHeight * 0.35));
    }
    function i(u) {
      u.currentTarget.setPointerCapture(u.pointerId), n = { id: u.pointerId, dx: u.clientX - t.value.x, dy: u.clientY - t.value.y, moved: !1, sx: u.clientX, sy: u.clientY };
    }
    function o(u) {
      !n || n.id !== u.pointerId || (Math.abs(u.clientX - n.sx) + Math.abs(u.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(u.clientX - n.dx, u.clientY - n.dy)));
    }
    function r(u) {
      if (!n || n.id !== u.pointerId) return;
      const a = n.moved;
      n = null, a ? (m.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, Ue()) : m.panelOpen = !m.panelOpen;
    }
    const l = Ae(() => !!m.session && !m.progress?.ended), c = Ae(() => !!m.progress?.warn);
    return vt(() => m.settings.ball, A, { deep: !0 }), $r(() => {
      A(), window.addEventListener("resize", A);
    }), Ii(() => window.removeEventListener("resize", A)), (u, a) => (E(), M("button", {
      class: ct(["rlzc-ball", { "is-active": l.value, "is-warn": c.value }]),
      style: Wn({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: i,
      onPointermove: o,
      onPointerup: r,
      onPointercancel: r
    }, [
      h("span", zu, T(l.value ? P(m).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
}), $u = { class: "rlzc-system" }, Eu = { class: "rlzc-card rlzc-hero" }, Cu = { class: "rlzc-hero-top" }, Mu = { class: "rlzc-level" }, Iu = {
  key: 0,
  class: "rlzc-chip"
}, Tu = {
  key: 0,
  class: "rlzc-goal"
}, Pu = { class: "rlzc-grid" }, Ru = {
  key: 0,
  class: "rlzc-stat"
}, Nu = {
  key: 1,
  class: "rlzc-stat"
}, Fu = {
  key: 2,
  class: "rlzc-stat"
}, Ou = {
  key: 3,
  class: "rlzc-stat"
}, ju = {
  key: 0,
  class: "rlzc-note"
}, Du = {
  key: 1,
  class: "rlzc-card"
}, Bu = { class: "rlzc-kv" }, Lu = { class: "rlzc-kv" }, Vu = {
  key: 2,
  class: "rlzc-note"
}, Wu = {
  key: 3,
  class: "rlzc-card"
}, Gu = {
  key: 0,
  class: "rlzc-kv"
}, Yu = { class: "rlzc-mono" }, Hu = {
  key: 1,
  class: "rlzc-tasks"
}, Uu = {
  key: 2,
  class: "rlzc-ps"
}, Ku = { class: "rlzc-actions" }, Zu = ["disabled"], Ju = ["disabled"], Qu = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, qu = { class: "rlzc-card" }, Xu = { class: "rlzc-row" }, ef = ["value"], tf = ["disabled"], nf = /* @__PURE__ */ at({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ je(""), n = Ae(() => !!m.session && !!m.pack), s = Ae(() => m.progress), A = Ae(() => !!m.pack?.phases.length), i = Ae(() => m.settings.panelDisplay !== "statusbar"), o = Ae(() => {
      const u = s.value;
      return u ? A.value ? `${u.warn ? "⚠️ " : ""}${u.round}/${u.phase.cap}` : `第${u.round}轮` : "";
    }), r = Ae(() => {
      const u = s.value;
      return u ? u.limit?.text ? u.limit.text : u.panel?.limit || m.session?.briefing?.limit || "—" : "";
    }), l = Ae(() => {
      const u = s.value;
      return !!u && !u.ended && A.value && u.phase.cap > 0 && u.nextRound < u.phase.cap;
    });
    async function c() {
      t.value && (await xu(t.value), t.value = "");
    }
    return (u, a) => (E(), M("div", $u, [
      n.value && s.value ? (E(), M(K, { key: 0 }, [
        h("div", Eu, [
          h("div", Cu, [
            h("span", Mu, T(P(m).pack.level), 1),
            h("h3", null, T(P(m).pack.name), 1),
            s.value.ended ? (E(), M("span", Iu, "已结束")) : X("", !0)
          ]),
          P(m).session?.briefing?.goal ? (E(), M("p", Tu, "目标：" + T(P(m).session.briefing.goal), 1)) : X("", !0)
        ]),
        h("div", Pu, [
          A.value ? (E(), M("div", Ru, [
            a[3] || (a[3] = h("span", null, "阶段", -1)),
            h("b", null, T(s.value.phase.name), 1)
          ])) : X("", !0),
          h("div", {
            class: ct(["rlzc-stat", { warn: s.value.warn }])
          }, [
            a[4] || (a[4] = h("span", null, "轮次", -1)),
            h("b", null, T(o.value), 1)
          ], 2),
          s.value.currentClock ? (E(), M("div", Nu, [
            a[5] || (a[5] = h("span", null, "钟时", -1)),
            h("b", null, T(s.value.currentClock), 1)
          ])) : X("", !0),
          s.value.limit ? (E(), M("div", Fu, [
            a[6] || (a[6] = h("span", null, "剩余轮数", -1)),
            h("b", null, T(s.value.limit.x) + "/" + T(s.value.limit.y), 1)
          ])) : X("", !0),
          i.value ? (E(), M("div", Ou, [
            a[7] || (a[7] = h("span", null, "剩余时间", -1)),
            h("b", null, T(r.value), 1)
          ])) : X("", !0)
        ]),
        s.value.skipGoal ? (E(), M("div", ju, "快进中：目标 " + T(P(m).pack.phases.find((p) => p.id === s.value.skipGoal.phase)?.name) + " 第" + T(s.value.skipGoal.round) + "轮", 1)) : X("", !0),
        s.value.ended && s.value.settlement ? (E(), M("div", Du, [
          h("div", Bu, [
            a[8] || (a[8] = h("span", null, "结果", -1)),
            h("b", null, T(s.value.settlement.result ?? "—"), 1)
          ]),
          h("div", Lu, [
            a[9] || (a[9] = h("span", null, "评价", -1)),
            h("b", null, T(s.value.settlement.rating ?? "—"), 1)
          ])
        ])) : s.value.ended ? (E(), M("div", Vu, "副本已手动结束。")) : X("", !0),
        i.value && s.value.panel ? (E(), M("div", Wu, [
          s.value.panel.progressBar ? (E(), M("div", Gu, [
            a[10] || (a[10] = h("span", null, "进度", -1)),
            h("b", Yu, T(s.value.panel.progressBar), 1)
          ])) : X("", !0),
          s.value.panel.tasks.length ? (E(), M("div", Hu, [
            a[11] || (a[11] = h("span", null, "任务", -1)),
            h("ul", null, [
              (E(!0), M(K, null, he(s.value.panel.tasks, (p, x) => (E(), M("li", { key: x }, T(p), 1))), 128))
            ])
          ])) : X("", !0),
          s.value.panel.ps ? (E(), M("div", Uu, "ps：" + T(s.value.panel.ps), 1)) : X("", !0)
        ])) : X("", !0),
        h("div", Ku, [
          h("button", {
            class: "rlzc-btn",
            disabled: !l.value,
            onClick: a[0] || (a[0] = //@ts-ignore
            (...p) => P(VA) && P(VA)(...p))
          }, "跳过（到本阶段结束）", 8, Zu),
          h("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: a[1] || (a[1] = //@ts-ignore
            (...p) => P(WA) && P(WA)(...p))
          }, "手动结束副本", 8, Ju)
        ])
      ], 64)) : (E(), M("div", Qu, [...a[12] || (a[12] = [
        h("h3", null, "休整中", -1),
        h("p", null, "当前在回廊里，没有进行中的副本，也不会注入任何提示词。", -1)
      ])])),
      h("div", qu, [
        a[14] || (a[14] = h("label", { class: "rlzc-label" }, "手动选择副本（以最新一条AI回复为第1轮）", -1)),
        h("div", Xu, [
          Tt(h("select", {
            "onUpdate:modelValue": a[2] || (a[2] = (p) => t.value = p),
            class: "rlzc-input"
          }, [
            a[13] || (a[13] = h("option", { value: "" }, "选择副本…", -1)),
            (E(!0), M(K, null, he(P(m).packs, (p) => (E(), M("option", {
              key: p.id,
              value: p.id
            }, T(p.level) + "｜" + T(p.name), 9, ef))), 128))
          ], 512), [
            [Ys, t.value]
          ]),
          h("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: c
          }, "进入", 8, tf)
        ])
      ])
    ]));
  }
});
function sf(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Gt(e) {
  return sf(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Af(e) {
  const t = [];
  let n = null, s = [];
  const A = () => {
    s.length && t.push(`<p>${s.map(Gt).join("<br>")}</p>`), s = [];
  }, i = () => {
    n && t.push(`</li></${n}>`), n = null;
  };
  for (const o of e.replace(/\r/g, "").split(`
`)) {
    const r = o.trimEnd();
    if (!r.trim()) {
      A(), i();
      continue;
    }
    const l = /^(#{1,4})\s+(.*)$/.exec(r);
    if (l) {
      A(), i();
      const p = Math.min(l[1].length + 2, 6);
      t.push(`<h${p}>${Gt(l[2])}</h${p}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(r), u = /^\s*(\d+)[.、]\s+(.*)$/.exec(r);
    if (c || u) {
      A();
      const p = c ? "ul" : "ol", x = c ? c[1] : u[2];
      n !== p ? (i(), n = p, t.push(p === "ol" ? `<ol start="${u[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Gt(x));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${Gt(r.trim())}`);
      continue;
    }
    const a = /^>\s?(.*)$/.exec(r);
    if (a) {
      A(), i(), t.push(`<blockquote>${Gt(a[1])}</blockquote>`);
      continue;
    }
    i(), s.push(r);
  }
  return A(), i(), t.join("");
}
const of = { class: "rlzc-docs" }, rf = {
  key: 0,
  class: "rlzc-row"
}, lf = ["value"], cf = { class: "rlzc-subtabs" }, af = ["onClick"], uf = { class: "rlzc-md" }, ff = ["innerHTML"], df = ["src", "alt"], pf = {
  key: 2,
  class: "rlzc-note"
}, hf = {
  key: 2,
  class: "rlzc-note"
}, mf = /* @__PURE__ */ at({
  __name: "DocsTab",
  setup(e) {
    const t = Ae(() => !!m.session && !!m.pack), n = Ae(() => t.value ? [m.pack] : m.packs.filter((c) => c.docs?.length)), s = /* @__PURE__ */ je(""), A = /* @__PURE__ */ je(0);
    vt(
      n,
      (c) => {
        c.some((u) => u.id === s.value) || (s.value = c[0]?.id ?? "");
      },
      { immediate: !0 }
    ), vt(s, () => A.value = 0);
    const i = Ae(() => n.value.find((c) => c.id === s.value)), o = Ae(() => i.value?.docs?.[A.value]), r = Ae(() => o.value?.md ? Af(o.value.md) : ""), l = Ae(() => i.value && o.value?.image ? Sa(i.value, o.value.image) : null);
    return (c, u) => (E(), M("div", of, [
      !t.value && n.value.length > 1 ? (E(), M("div", rf, [
        Tt(h("select", {
          "onUpdate:modelValue": u[0] || (u[0] = (a) => s.value = a),
          class: "rlzc-input"
        }, [
          (E(!0), M(K, null, he(n.value, (a) => (E(), M("option", {
            key: a.id,
            value: a.id
          }, T(a.name), 9, lf))), 128))
        ], 512), [
          [Ys, s.value]
        ])
      ])) : X("", !0),
      i.value && i.value.docs?.length ? (E(), M(K, { key: 1 }, [
        h("div", cf, [
          (E(!0), M(K, null, he(i.value.docs, (a, p) => (E(), M("button", {
            key: p,
            class: ct({ on: A.value === p }),
            onClick: (x) => A.value = p
          }, T(a.title), 11, af))), 128))
        ]),
        h("article", uf, [
          r.value ? (E(), M("div", {
            key: 0,
            innerHTML: r.value
          }, null, 8, ff)) : X("", !0),
          l.value ? (E(), M("img", {
            key: 1,
            src: l.value,
            alt: o.value?.title,
            class: "rlzc-img"
          }, null, 8, df)) : o.value?.image && !l.value ? (E(), M("p", pf, "图片无法加载：" + T(o.value.image), 1)) : X("", !0)
        ])
      ], 64)) : (E(), M("p", hf, T(t.value ? "本副本没有公开资料" : "暂无可浏览的副本资料。"), 1))
    ]));
  }
}), gf = { class: "rlzc-memo" }, xf = { class: "rlzc-hint" }, bf = /* @__PURE__ */ at({
  __name: "MemoTab",
  setup(e) {
    const t = /* @__PURE__ */ je(m.memo), n = /* @__PURE__ */ je(!0);
    let s;
    vt(() => m.memo, (i) => {
      i !== t.value && (t.value = i);
    }), vt(() => m.chatId, () => {
      clearTimeout(s), n.value = !0, t.value = m.memo;
    }), Ii(() => {
      clearTimeout(s), n.value || YA(t.value);
    });
    function A() {
      n.value = !1, clearTimeout(s), s = setTimeout(() => {
        YA(t.value), n.value = !0;
      }, 600);
    }
    return (i, o) => (E(), M("div", gf, [
      Tt(h("textarea", {
        "onUpdate:modelValue": o[0] || (o[0] = (r) => t.value = r),
        class: "rlzc-input rlzc-textarea",
        placeholder: "记点什么……（按聊天保存，不会发给AI）",
        onInput: A
      }, null, 544), [
        [Ss, t.value]
      ]),
      h("div", xf, T(n.value ? "已自动保存" : "保存中…"), 1)
    ]));
  }
}), yf = { class: "rlzc-settings" }, vf = { class: "rlzc-card" }, _f = ["value"], wf = { class: "rlzc-hint" }, kf = { class: "rlzc-card" }, zf = { class: "rlzc-field" }, Sf = ["value"], $f = { class: "rlzc-field" }, Ef = ["value"], Cf = { class: "rlzc-field" }, Mf = ["value"], If = { class: "rlzc-card" }, Tf = ["value", "onChange"], Pf = { class: "rlzc-card" }, Rf = {
  key: 0,
  class: "rlzc-list"
}, Nf = ["onClick"], Ff = {
  key: 1,
  class: "rlzc-hint"
}, Of = {
  key: 2,
  class: "rlzc-errors"
}, jf = { class: "rlzc-card" }, Df = { class: "rlzc-check" }, Bf = ["checked"], Lf = { class: "rlzc-check" }, Vf = ["checked"], Wf = /* @__PURE__ */ at({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ je([]), n = /* @__PURE__ */ je(null);
    function s(u, a) {
      const p = Math.max(0, Math.min(1e4, Math.floor(Number(a.target.value) || 0)));
      m.settings.depths[u] = p, Ue();
    }
    async function A(u) {
      const a = u.target, p = a.files?.[0];
      a.value = "", p && (t.value = au(await p.text()), t.value.length || rt("success", `已导入副本包：${p.name}`));
    }
    async function i(u, a) {
      await Ze(`确定删除自定义副本包《${a}》吗？`) && uu(u);
    }
    const o = ["D", "C", "B", "A", "S"];
    function r(u, a) {
      const p = Math.floor(Number(a.target.value));
      !Number.isFinite(p) || p < 1 || (m.settings.genericCaps = { ...m.settings.genericCaps, [u]: p }, Ue());
    }
    function l(u) {
      ku(u.target.value);
    }
    function c(u, a) {
      m.settings[u] = a.target.checked, Ue();
    }
    return (u, a) => (E(), M("div", yf, [
      h("div", vf, [
        a[7] || (a[7] = h("h4", null, "副本信息显示位置", -1)),
        h("select", {
          class: "rlzc-input",
          value: P(m).settings.panelDisplay,
          onChange: l
        }, [...a[6] || (a[6] = [
          h("option", { value: "panel" }, "扩展面板（默认）", -1),
          h("option", { value: "statusbar" }, "正文状态栏", -1)
        ])], 40, _f),
        h("p", wf, T(P(m).settings.panelDisplay === "statusbar" ? "正文中保留 <副本> 标签，由你的状态栏显示；系统页不再显示时限、进度条、任务和 ps。" : "正文中隐藏 <副本> 标签，时限、进度条、任务和 ps 显示在系统页。") + " 两种方式下扩展都会读取 <副本> 做核对。 ", 1)
      ]),
      h("div", kf, [
        a[11] || (a[11] = h("h4", null, "注入深度", -1)),
        h("label", zf, [
          a[8] || (a[8] = h("span", null, "暗号 rlzc_token", -1)),
          h("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: P(m).settings.depths.token,
            onChange: a[0] || (a[0] = (p) => s("token", p))
          }, null, 40, Sf)
        ]),
        h("label", $f, [
          a[9] || (a[9] = h("span", null, "进度 rlzc_progress", -1)),
          h("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: P(m).settings.depths.progress,
            onChange: a[1] || (a[1] = (p) => s("progress", p))
          }, null, 40, Ef)
        ]),
        h("label", Cf, [
          a[10] || (a[10] = h("span", null, "本轮 rlzc_turn", -1)),
          h("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: P(m).settings.depths.turn,
            onChange: a[2] || (a[2] = (p) => s("turn", p))
          }, null, 40, Mf)
        ])
      ]),
      h("div", If, [
        a[12] || (a[12] = h("h4", null, "通用副本默认轮数上限", -1)),
        a[13] || (a[13] = h("p", { class: "rlzc-hint" }, "未收录的副本按等级取轮数上限；简报时限一行写了「（最多N轮）」时以简报为准。只影响之后进入的副本。", -1)),
        (E(), M(K, null, he(o, (p) => h("label", {
          key: p,
          class: "rlzc-field"
        }, [
          h("span", null, T(p) + " 级", 1),
          h("input", {
            type: "number",
            min: "1",
            class: "rlzc-input",
            value: P(m).settings.genericCaps[p],
            onChange: (x) => r(p, x)
          }, null, 40, Tf)
        ])), 64))
      ]),
      h("div", Pf, [
        a[14] || (a[14] = h("h4", null, "自定义副本包", -1)),
        P(m).settings.customPacks.length ? (E(), M("ul", Rf, [
          (E(!0), M(K, null, he(P(m).settings.customPacks, (p) => (E(), M("li", {
            key: p.id
          }, [
            h("span", null, [
              qt(T(p.level) + "｜" + T(p.name) + " ", 1),
              h("small", null, "v" + T(p.version), 1)
            ]),
            h("button", {
              class: "rlzc-btn ghost small",
              onClick: (x) => i(p.id, p.name)
            }, "删除", 8, Nf)
          ]))), 128))
        ])) : (E(), M("p", Ff, "还没有导入自定义副本包。")),
        h("input", {
          ref_key: "fileInput",
          ref: n,
          type: "file",
          accept: ".json,application/json",
          hidden: "",
          onChange: A
        }, null, 544),
        h("button", {
          class: "rlzc-btn",
          onClick: a[3] || (a[3] = (p) => n.value?.click())
        }, "导入 JSON…"),
        t.value.length ? (E(), M("ul", Of, [
          (E(!0), M(K, null, he(t.value, (p, x) => (E(), M("li", { key: x }, T(p), 1))), 128))
        ])) : X("", !0)
      ]),
      h("div", jf, [
        a[17] || (a[17] = h("h4", null, "其他", -1)),
        h("label", Df, [
          h("input", {
            type: "checkbox",
            checked: P(m).settings.showBall,
            onChange: a[4] || (a[4] = (p) => c("showBall", p))
          }, null, 40, Bf),
          a[15] || (a[15] = qt("显示悬浮球（关闭后可从扩展菜单打开面板）", -1))
        ]),
        h("label", Lf, [
          h("input", {
            type: "checkbox",
            checked: P(m).settings.debug,
            onChange: a[5] || (a[5] = (p) => c("debug", p))
          }, null, 40, Vf),
          a[16] || (a[16] = qt("调试模式（调试页允许手动修改，并在控制台输出日志）", -1))
        ])
      ])
    ]));
  }
}), Gf = { class: "rlzc-debug" }, Yf = {
  key: 0,
  class: "rlzc-note"
}, Hf = {
  key: 0,
  class: "rlzc-note"
}, Uf = {
  key: 1,
  class: "rlzc-note"
}, Kf = {
  key: 2,
  class: "rlzc-card"
}, Zf = { class: "rlzc-row" }, Jf = ["disabled"], Qf = ["value"], qf = ["disabled"], Xf = { class: "rlzc-row" }, ed = ["disabled"], td = ["disabled"], nd = {
  key: 3,
  class: "rlzc-card"
}, sd = ["onUpdate:modelValue", "disabled"], Ad = ["disabled"], id = { class: "rlzc-card" }, od = {
  key: 0,
  class: "rlzc-hint"
}, rd = { class: "rlzc-hint" }, ld = { class: "rlzc-list rlzc-warns" }, cd = { class: "rlzc-card" }, ad = {
  key: 0,
  class: "rlzc-list"
}, ud = ["disabled", "onClick"], fd = {
  key: 1,
  class: "rlzc-hint"
}, dd = {
  class: "rlzc-card",
  open: ""
}, pd = { class: "rlzc-pre" }, hd = { class: "rlzc-card" }, md = { class: "rlzc-pre" }, gd = { class: "rlzc-card" }, xd = { class: "rlzc-pre" }, bd = { class: "rlzc-card" }, yd = { class: "rlzc-table" }, vd = ["disabled"], _d = /* @__PURE__ */ at({
  __name: "DebugTab",
  setup(e) {
    const t = Ae(() => m.settings.debug), n = /* @__PURE__ */ je(""), s = /* @__PURE__ */ je(null), A = /* @__PURE__ */ Yn({});
    vt(
      () => [m.tick, m.pack?.id],
      () => {
        for (const x of Object.keys(A)) delete A[x];
        const p = du() ?? {};
        for (const x of m.pack?.roles ?? []) A[x] = p[x] ?? "";
      },
      { immediate: !0 }
    );
    const i = Ae(() => {
      m.tick;
      const p = xe(), x = [], k = m.session?.entryIndex ?? 0;
      for (let v = k; v < p.length; v++) {
        const B = p[v]?.extra?.rlzc;
        B && x.push({ index: v, snap: B });
      }
      return x.reverse().slice(0, 60);
    }), o = Ae(() => new Set((m.audit?.warnings ?? []).filter((p) => p.kind === "limit").map((p) => p.index))), r = Ae(() => {
      const p = m.progress;
      if (!p) return null;
      const { perMessage: x, phase: k, next: v, ...B } = p;
      return {
        phase: k.id + " " + k.name,
        ...B,
        next: v ? { round: v.round, skipFrom: v.skipFrom, events: v.events.map((O) => O.id) } : null,
        messages: Object.keys(x).length
      };
    });
    function l() {
      n.value && bu(n.value);
    }
    function c() {
      s.value !== null && s.value >= 0 && yu(s.value);
    }
    function u() {
      vu({ ...A });
    }
    const a = (p) => JSON.stringify(p, null, 2);
    return (p, x) => (E(), M("div", Gf, [
      P(m).session ? (E(), M(K, { key: 1 }, [
        t.value ? X("", !0) : (E(), M("p", Hf, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        P(m).pack && P(m).session.packVersion !== P(m).pack.version ? (E(), M("p", Uf, " 入场时副本包版本为 " + T(P(m).session.packVersion) + "，当前为 " + T(P(m).pack.version) + "。 ", 1)) : X("", !0),
        P(m).pack?.phases.length ? (E(), M("div", Kf, [
          x[4] || (x[4] = h("h4", null, "手动修正", -1)),
          h("div", Zf, [
            Tt(h("select", {
              "onUpdate:modelValue": x[0] || (x[0] = (k) => n.value = k),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              x[3] || (x[3] = h("option", { value: "" }, "切换到阶段…", -1)),
              (E(!0), M(K, null, he(P(m).pack.phases, (k) => (E(), M("option", {
                key: k.id,
                value: k.id
              }, T(k.name), 9, Qf))), 128))
            ], 8, Jf), [
              [Ys, n.value]
            ]),
            h("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: l
            }, "切换", 8, qf)
          ]),
          h("div", Xf, [
            Tt(h("input", {
              "onUpdate:modelValue": x[1] || (x[1] = (k) => s.value = k),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, ed), [
              [
                Ss,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            h("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: c
            }, "修正轮次", 8, td)
          ])
        ])) : X("", !0),
        P(m).pack?.roles?.length ? (E(), M("div", nd, [
          x[5] || (x[5] = h("h4", null, "角色登记", -1)),
          (E(!0), M(K, null, he(P(m).pack.roles, (k) => (E(), M("label", {
            key: k,
            class: "rlzc-field"
          }, [
            h("span", null, T(k), 1),
            Tt(h("input", {
              "onUpdate:modelValue": (v) => A[k] = v,
              class: "rlzc-input",
              disabled: !t.value,
              placeholder: "未登记"
            }, null, 8, sd), [
              [Ss, A[k]]
            ])
          ]))), 128)),
          h("button", {
            class: "rlzc-btn small",
            disabled: !t.value,
            onClick: u
          }, "保存登记", 8, Ad)
        ])) : X("", !0),
        h("div", id, [
          x[7] || (x[7] = h("h4", null, "<副本> 核对", -1)),
          P(m).audit?.warnings.length ? (E(), M(K, { key: 1 }, [
            h("p", rd, "共 " + T(P(m).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            h("ul", ld, [
              (E(!0), M(K, null, he(P(m).audit.warnings.slice(-30).reverse(), (k, v) => (E(), M("li", { key: v }, [
                h("span", null, [
                  h("small", null, "#" + T(k.index) + "｜" + T(k.phase) + "第" + T(k.round) + "轮", 1),
                  x[6] || (x[6] = h("br", null, null, -1)),
                  qt("⚠️ " + T(k.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (E(), M("p", od, "没有发现问题。"))
        ]),
        h("div", cd, [
          x[8] || (x[8] = h("h4", null, "手动操作记录", -1)),
          P(m).session.manual.length ? (E(), M("ul", ad, [
            (E(!0), M(K, null, he(P(m).session.manual, (k, v) => (E(), M("li", { key: v }, [
              h("code", null, "#" + T(k.atIndex) + " " + T(k.kind) + " " + T("phase" in k ? k.phase : "") + T("round" in k ? k.round : "") + T("targetPhase" in k ? `${k.targetPhase}:${k.targetRound}` : ""), 1),
              h("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (B) => P(_u)(v)
              }, "撤销", 8, ud)
            ]))), 128))
          ])) : (E(), M("p", fd, "无"))
        ]),
        h("details", dd, [
          x[9] || (x[9] = h("summary", null, "本次注入", -1)),
          h("pre", pd, T([P(m).lastInjection.token, P(m).lastInjection.progress, P(m).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        h("details", hd, [
          x[10] || (x[10] = h("summary", null, "重放结果", -1)),
          h("pre", md, T(a(r.value)), 1)
        ]),
        h("details", gd, [
          x[11] || (x[11] = h("summary", null, "会话原始数据", -1)),
          h("pre", xd, T(a(P(m).session)), 1)
        ]),
        h("details", bd, [
          x[13] || (x[13] = h("summary", null, "每楼快照（最近60条）", -1)),
          h("table", yd, [
            x[12] || (x[12] = h("thead", null, [
              h("tr", null, [
                h("th", null, "楼"),
                h("th", null, "阶段"),
                h("th", null, "轮"),
                h("th", null, "钟时"),
                h("th", null, "时限"),
                h("th", null, "事件")
              ])
            ], -1)),
            h("tbody", null, [
              (E(!0), M(K, null, he(i.value, (k) => (E(), M("tr", {
                key: k.index,
                class: ct({ "rlzc-row-warn": o.value.has(k.index) })
              }, [
                h("td", null, T(k.index) + T(k.snap.entry ? "★" : ""), 1),
                h("td", null, T(k.snap.phase), 1),
                h("td", null, T(k.snap.round), 1),
                h("td", null, T(k.snap.clock ?? ""), 1),
                h("td", null, T(k.snap.limit?.text ?? ""), 1),
                h("td", null, T(k.snap.injected.join(" ")), 1)
              ], 2))), 128))
            ])
          ])
        ]),
        h("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: x[2] || (x[2] = //@ts-ignore
          (...k) => P(GA) && P(GA)(...k))
        }, "删除副本会话", 8, vd)
      ], 64)) : (E(), M("p", Yf, "当前聊天没有副本会话。"))
    ]));
  }
}), wd = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, kd = { class: "rlzc-head" }, zd = { class: "rlzc-tabs" }, Sd = ["onClick"], $d = { class: "rlzc-body" }, Ed = /* @__PURE__ */ at({
  __name: "Panel",
  setup(e) {
    const t = [
      { id: "system", label: "系统" },
      { id: "docs", label: "副本资料" },
      { id: "memo", label: "备忘录" },
      { id: "settings", label: "设置" },
      { id: "debug", label: "调试" }
    ];
    async function n(s) {
      if (s === "debug" && !m.debugUnlocked) {
        if (!await Ze("此页会显示副本真相，确定要打开吗？")) return;
        m.debugUnlocked = !0;
      }
      m.tab = s;
    }
    return (s, A) => (E(), M("div", {
      class: "rlzc-backdrop",
      onClick: A[1] || (A[1] = Nl((i) => P(m).panelOpen = !1, ["self"]))
    }, [
      h("section", wd, [
        h("header", kd, [
          A[2] || (A[2] = h("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          h("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: A[0] || (A[0] = (i) => P(m).panelOpen = !1)
          }, "×")
        ]),
        h("nav", zd, [
          (E(), M(K, null, he(t, (i) => h("button", {
            key: i.id,
            class: ct({ on: P(m).tab === i.id }),
            onClick: (o) => n(i.id)
          }, T(i.label), 11, Sd)), 64))
        ]),
        h("div", $d, [
          P(m).tab === "system" ? (E(), qe(nf, { key: 0 })) : P(m).tab === "docs" ? (E(), qe(mf, { key: 1 })) : P(m).tab === "memo" ? (E(), qe(bf, { key: 2 })) : P(m).tab === "settings" ? (E(), qe(Wf, { key: 3 })) : P(m).tab === "debug" && P(m).debugUnlocked ? (E(), qe(_d, { key: 4 })) : X("", !0)
        ])
      ])
    ]));
  }
}), Cd = /* @__PURE__ */ at({
  __name: "App",
  setup(e) {
    return (t, n) => (E(), M(K, null, [
      P(m).settings.showBall ? (E(), qe(Su, { key: 0 })) : X("", !0),
      P(m).panelOpen ? (E(), qe(Ed, { key: 1 })) : X("", !0)
    ], 64));
  }
}), Md = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-memo{height:100%}.rlzc-textarea{min-height:50vh;flex:1;resize:vertical;line-height:1.6}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}';
function Id(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function wo(e, t, n) {
  const s = ge().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function Td() {
  const e = Id();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await wo("/api/extensions/version", e, t);
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
async function Pd(e) {
  const t = await wo("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const UA = "rlzc-host", KA = "rlzc-menu-btn", ZA = "rlzc-settings-drawer";
function Rd() {
  if (document.getElementById(UA)) return;
  const e = document.createElement("div");
  e.id = UA, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Md, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), jl(Cd).mount(s), ko(), zo();
}
function ko(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => ko(e + 1), 500);
    return;
  }
  if (document.getElementById(KA)) return;
  const n = document.createElement("div");
  n.id = KA, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const A = document.createElement("span");
  A.textContent = "回廊种菜系统", n.append(s, A), n.addEventListener("click", () => {
    m.panelOpen = !m.panelOpen;
  }), t.appendChild(n);
}
function zo(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => zo(e + 1), 500);
    return;
  }
  if (document.getElementById(ZA)) return;
  const n = (ee, le = "", de = "") => {
    const ze = document.createElement(ee);
    return le && (ze.className = le), de && (ze.textContent = de), ze;
  }, s = n("div");
  s.id = ZA;
  const A = n("div", "inline-drawer"), i = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), r = n("small", "rlzc-update-badge", "有更新");
  r.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), r), i.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const l = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => m.panelOpen = !0);
  const u = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  u.addEventListener("click", () => {
    m.settings.ball = { x: null, y: null }, m.settings.showBall = !0, Ue();
  });
  const a = n("label", "checkbox_label"), p = document.createElement("input");
  p.type = "checkbox", p.addEventListener("change", () => {
    m.settings.showBall = p.checked, Ue();
  }), a.append(p, n("span", "", "显示悬浮球")), vt(() => m.settings.showBall, (ee) => p.checked = ee, { immediate: !0 });
  const x = n("div", "flex-container");
  x.append(c, u);
  const k = n("div", "flex-container alignitemscenter"), v = n("small", "", "正在检查更新…"), B = n("div", "menu_button menu_button_icon", "检查更新"), O = n("div", "menu_button menu_button_icon", "立即更新"), N = n("div", "menu_button menu_button_icon", "刷新页面");
  O.style.display = "none", N.style.display = "none", k.append(v, B, O, N);
  let j = null, I = !1;
  const q = async () => {
    if (!I) {
      I = !0, v.textContent = "正在检查更新…", O.style.display = "none";
      try {
        j = await Td();
        const ee = j.commit ? `（${j.commit}）` : "";
        j.isGit ? j.isUpToDate ? v.textContent = `已是最新版本${ee}` : (v.textContent = `有新版本可以更新，当前${ee || "版本较旧"}`, O.style.display = "") : v.textContent = "不是用仓库地址安装的，无法检查更新。", r.style.display = j.isGit && !j.isUpToDate ? "" : "none";
      } catch (ee) {
        v.textContent = `检查更新失败：${ee.message}`;
      } finally {
        I = !1;
      }
    }
  };
  B.addEventListener("click", () => void q()), O.addEventListener("click", async () => {
    if (!(!j || I)) {
      I = !0, v.textContent = "正在更新…", O.style.display = "none";
      try {
        await Pd(j), r.style.display = "none", v.textContent = "更新完成，刷新页面后生效。", N.style.display = "";
      } catch (ee) {
        v.textContent = `更新失败：${ee.message}`, O.style.display = "";
      } finally {
        I = !1;
      }
    }
  }), N.addEventListener("click", () => location.reload()), setTimeout(() => void q(), 3e3), l.append(x, a, k, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), A.append(i, l), s.append(A), t.append(s);
}
globalThis.rlzcInterceptor = mu;
function gs() {
  cu(), Je("MESSAGE_RECEIVED", (e) => wu(Number(e))), Je("CHARACTER_MESSAGE_RENDERED", (e) => hs(Number(e))), Je("MESSAGE_DELETED", () => ps()), Je("MESSAGE_SWIPED", (e) => {
    gu(Number(e)), hs(Number(e));
  }), Je("MESSAGE_EDITED", () => ps()), Je("MESSAGE_UPDATED", (e) => {
    ps(), hs(Number(e));
  }), Je("CHAT_CHANGED", () => HA()), Je("MORE_MESSAGES_LOADED", () => Js()), Rd(), HA(), console.log("[rlzc] 回廊种菜系统已加载", m.settings);
}
const JA = window.jQuery;
typeof JA == "function" ? JA(() => gs()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", gs) : gs();
