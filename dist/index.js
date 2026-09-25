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
const J = {}, pt = [], mt = () => {
}, QA = () => !1, jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Dn = (e) => e.startsWith("onUpdate:"), _e = Object.assign, qA = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Sr = Object.prototype.hasOwnProperty, K = (e, t) => Sr.call(e, t), D = Array.isArray, qe = (e) => an(e) === "[object Map]", bt = (e) => an(e) === "[object Set]", sA = (e) => an(e) === "[object Date]", Y = (e) => typeof e == "function", ne = (e) => typeof e == "string", Ne = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", XA = (e) => (Q(e) || Y(e)) && Y(e.then) && Y(e.catch), ei = Object.prototype.toString, an = (e) => ei.call(e), $r = (e) => an(e).slice(8, -1), ti = (e) => an(e) === "[object Object]", Ts = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ht = /* @__PURE__ */ Is(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Er = /-\w/g, ye = Bn(
  (e) => e.replace(Er, (t) => t.slice(1).toUpperCase())
), Cr = /\B([A-Z])/g, _t = Bn(
  (e) => e.replace(Cr, "-$1").toLowerCase()
), ni = Bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ts = Bn(
  (e) => e ? `on${ni(e)}` : ""
), Re = (e, t) => !Object.is(e, t), vn = (e, ...t) => {
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
  if (D(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], A = ne(s) ? Pr(s) : Wn(s);
      if (A)
        for (const i in A)
          t[i] = A[i];
    }
    return t;
  } else if (ne(e) || Q(e))
    return e;
}
const Mr = /;(?![^(]*\))/g, Ir = /:([^]+)/, Tr = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Pr(e) {
  const t = {};
  return e.replace(Tr, (n) => n.startsWith("/*") ? "" : n).split(Mr).forEach((n) => {
    if (n) {
      const s = n.split(Ir);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function lt(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (D(e))
    for (let n = 0; n < e.length; n++) {
      const s = lt(e[n]);
      s && (t += s + " ");
    }
  else if (Q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Rr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Nr = /* @__PURE__ */ Is(Rr);
function Ai(e) {
  return !!e || e === "";
}
function Fr(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let A = 0; s && A < e.length; A++)
    s = et(e[A], t[A], n);
  return s;
}
function iA(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), A = new Uint8Array(s.length);
  for (const i of e) {
    let r = -1;
    for (let o = 0; o < s.length; o++)
      if (!A[o] && et(i, s[o], n)) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    A[r] = 1;
  }
  return !0;
}
function Or(e, t, n) {
  let s = qe(e), A = qe(t);
  if (s || A || (s = bt(e), A = bt(t), s || A))
    return s && A ? iA(e, t, n) : !1;
  const i = Object.keys(e).length, r = Object.keys(t).length;
  if (i !== r)
    return !1;
  for (const o in e) {
    const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
    if (l && !c || !l && c || !et(e[o], t[o], n))
      return !1;
  }
  return String(e) === String(t);
}
function rA(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [A, i] = n;
  if (A.has(e) || i.has(t))
    return A.get(e) === t && i.get(t) === e;
  A.set(e, t), i.set(t, e);
  const r = s(e, t, n);
  return A.delete(e), i.delete(t), r;
}
function et(e, t, n) {
  if (e === t) return !0;
  let s = sA(e), A = sA(t);
  return s || A ? s && A ? e.getTime() === t.getTime() : !1 : (s = Ne(e), A = Ne(t), s || A ? e === t : (s = D(e), A = D(t), s || A ? s && A ? rA(e, t, n, Fr) : !1 : (s = Q(e), A = Q(t), s || A ? !s || !A ? !1 : rA(e, t, n, Or) : String(e) === String(t))));
}
function jr(e, t) {
  return e.findIndex((n) => et(n, t));
}
const ii = (e) => !!(e && e.__v_isRef === !0), I = (e) => ne(e) ? e : e == null ? "" : D(e) || Q(e) && (e.toString === ei || !Y(e.toString)) ? ii(e) ? I(e.value) : JSON.stringify(e, ri, 2) : String(e), ri = (e, t) => ii(t) ? ri(e, t.value) : qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, A], i) => (n[ns(s, i) + " =>"] = A, n),
    {}
  )
} : bt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ns(n))
} : Ne(t) ? ns(t) : Q(t) && !D(t) && !ti(t) ? String(t) : t, ns = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ne(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ie;
class Dr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ie && (ie.active ? (this.parent = ie, this.index = (ie.scopes || (ie.scopes = [])).push(
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
      const n = ie;
      try {
        return ie = this, t();
      } finally {
        ie = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ie, ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ie === this)
        ie = this.prevScope;
      else {
        let t = ie;
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
function Br() {
  return ie;
}
let Z;
const ss = /* @__PURE__ */ new WeakSet();
class oi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ie && (ie.active ? ie.effects.push(this) : this.flags &= -2);
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
    this.flags |= 2, oA(this), ai(this);
    const t = Z, n = ve;
    Z = this, ve = !0;
    try {
      return this.fn();
    } finally {
      ui(this), Z = t, ve = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ns(t);
      this.deps = this.depsTail = void 0, oA(this), this.onStop && this.onStop(), this.flags &= -2;
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
let li = 0, Kt, Ut;
function ci(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ut, Ut = e;
    return;
  }
  e.next = Kt, Kt = e;
}
function Ps() {
  li++;
}
function Rs() {
  if (--li > 0)
    return;
  if (Ut) {
    let t = Ut;
    for (Ut = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Kt; ) {
    let t = Kt;
    for (Kt = void 0; t; ) {
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
    s.version === -1 ? (s === n && (n = A), Ns(s), Lr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = A;
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
  const t = e.dep, n = Z, s = ve;
  Z = e, ve = !0;
  try {
    ai(e);
    const A = e.fn(e._value);
    (t.version === 0 || Re(A, e._value)) && (e.flags |= 128, e._value = A, t.version++);
  } catch (A) {
    throw t.version++, A;
  } finally {
    Z = n, ve = s, ui(e), e.flags &= -3;
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
function Lr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ve = !0;
const di = [];
function tt() {
  di.push(ve), ve = !1;
}
function nt() {
  const e = di.pop();
  ve = e === void 0 ? !0 : e;
}
function oA(e) {
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
class Vr {
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
    if (!Z || !ve || Z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Z)
      n = this.activeLink = new Vr(Z, this), Z.deps ? (n.prevDep = Z.depsTail, Z.depsTail.nextDep = n, Z.depsTail = n) : Z.deps = Z.depsTail = n, pi(n);
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
const bs = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ Symbol(
  ""
), ys = /* @__PURE__ */ Symbol(
  ""
), tn = /* @__PURE__ */ Symbol(
  ""
);
function re(e, t, n) {
  if (ve && Z) {
    let s = bs.get(e);
    s || bs.set(e, s = /* @__PURE__ */ new Map());
    let A = s.get(n);
    A || (s.set(n, A = new Fs()), A.map = s, A.key = n), A.track();
  }
}
function We(e, t, n, s, A, i) {
  const r = bs.get(e);
  if (!r) {
    en++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Ps(), t === "clear")
    r.forEach(o);
  else {
    const l = D(e), c = l && Ts(n);
    if (l && n === "length") {
      const u = Number(s);
      r.forEach((a, p) => {
        (p === "length" || p === tn || !Ne(p) && p >= u) && o(a);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && o(r.get(n)), c && o(r.get(tn)), t) {
        case "add":
          l ? c && o(r.get("length")) : (o(r.get(gt)), qe(e) && o(r.get(ys)));
          break;
        case "delete":
          l || (o(r.get(gt)), qe(e) && o(r.get(ys)));
          break;
        case "set":
          qe(e) && o(r.get(gt));
          break;
      }
  }
  Rs();
}
function Et(e) {
  const t = /* @__PURE__ */ W(e);
  return t === e || (re(t, "iterate", tn), /* @__PURE__ */ ge(e)) ? t : /* @__PURE__ */ Fe(e) ? /* @__PURE__ */ Xe(e) ? t.map((n) => st(xe(n))) : t.map(st) : t.map(xe);
}
function Gn(e) {
  return re(e = /* @__PURE__ */ W(e), "iterate", tn), e;
}
function Te(e, t) {
  return /* @__PURE__ */ Fe(e) ? st(/* @__PURE__ */ Xe(e) ? xe(t) : t) : xe(t);
}
const Wr = {
  __proto__: null,
  [Symbol.iterator]() {
    return As(this, Symbol.iterator, (e) => Te(this, e));
  },
  concat(...e) {
    return Et(this).concat(
      ...e.map((t) => D(t) ? Et(t) : t)
    );
  },
  entries() {
    return As(this, "entries", (e) => (e[1] = Te(this, e[1]), e));
  },
  every(e, t) {
    return Be(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Be(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Te(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Be(
      this,
      "find",
      e,
      t,
      (n) => Te(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Be(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Be(
      this,
      "findLast",
      e,
      t,
      (n) => Te(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Be(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Be(this, "forEach", e, t, void 0, arguments);
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
    return Be(this, "map", e, t, void 0, arguments);
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
    return Be(this, "some", e, t, void 0, arguments);
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
    return As(this, "values", (e) => Te(this, e));
  }
};
function As(e, t, n) {
  const s = Gn(e), A = s[t]();
  return s !== e && !/* @__PURE__ */ ge(e) && (A._next = A.next, A.next = () => {
    const i = A._next();
    return i.done || (i.value = n(i.value)), i;
  }), A;
}
const Gr = Array.prototype;
function Be(e, t, n, s, A, i) {
  const r = Gn(e), o = r !== e && !/* @__PURE__ */ ge(e), l = r[t];
  if (l !== Gr[t]) {
    const a = l.apply(e, i);
    return o ? xe(a) : a;
  }
  let c = n;
  r !== e && (o ? c = function(a, p) {
    return n.call(this, Te(e, a), p, e);
  } : n.length > 2 && (c = function(a, p) {
    return n.call(this, a, p, e);
  }));
  const u = l.call(r, c, s);
  return o && A ? A(u) : u;
}
function lA(e, t, n, s) {
  const A = Gn(e), i = A !== e && !/* @__PURE__ */ ge(e);
  let r = n, o = !1;
  A !== e && (i ? (o = s.length === 0, r = function(c, u, a) {
    return o && (o = !1, c = Te(e, c)), n.call(this, c, Te(e, u), a, e);
  }) : n.length > 3 && (r = function(c, u, a) {
    return n.call(this, c, u, a, e);
  }));
  const l = A[t](r, ...s);
  return o ? Te(e, l) : l;
}
function is(e, t, n) {
  const s = /* @__PURE__ */ W(e);
  re(s, "iterate", tn);
  const A = s[t](...n);
  return (A === -1 || A === !1) && /* @__PURE__ */ Ds(n[0]) ? (n[0] = /* @__PURE__ */ W(n[0]), s[t](...n)) : A;
}
function Vt(e, t, n = []) {
  tt(), Ps();
  const s = (/* @__PURE__ */ W(e))[t].apply(e, n);
  return Rs(), nt(), s;
}
const Yr = /* @__PURE__ */ Is("__proto__,__v_isRef,__isVue"), hi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ne)
);
function Hr(e) {
  Ne(e) || (e = String(e));
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
      return s === (A ? i ? no : yi : i ? bi : xi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = D(t);
    if (!A) {
      let l;
      if (r && (l = Wr[n]))
        return l;
      if (n === "hasOwnProperty")
        return Hr;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ le(t) ? t : s
    );
    if ((Ne(n) ? hi.has(n) : Yr(n)) || (A || re(t, "get", n), i))
      return o;
    if (/* @__PURE__ */ le(o)) {
      const l = r && Ts(n) ? o : o.value;
      return A && Q(l) ? /* @__PURE__ */ _s(l) : l;
    }
    return Q(o) ? A ? /* @__PURE__ */ _s(o) : /* @__PURE__ */ Yn(o) : o;
  }
}
class gi extends mi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, A) {
    let i = t[n];
    const r = D(t) && Ts(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Fe(i);
      if (!/* @__PURE__ */ ge(s) && !/* @__PURE__ */ Fe(s) && (i = /* @__PURE__ */ W(i), s = /* @__PURE__ */ W(s)), !r && /* @__PURE__ */ le(i) && !/* @__PURE__ */ le(s))
        return c || (i.value = s), !0;
    }
    const o = r ? Number(n) < t.length : K(t, n), l = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ le(t) ? t : A
    );
    return t === /* @__PURE__ */ W(A) && l && (o ? Re(s, i) && We(t, "set", n, s) : We(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = K(t, n);
    t[n];
    const A = Reflect.deleteProperty(t, n);
    return A && s && We(t, "delete", n, void 0), A;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ne(n) || !hi.has(n)) && re(t, "has", n), s;
  }
  ownKeys(t) {
    return re(
      t,
      "iterate",
      D(t) ? "length" : gt
    ), Reflect.ownKeys(t);
  }
}
class Kr extends mi {
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
const Ur = /* @__PURE__ */ new gi(), Zr = /* @__PURE__ */ new Kr(), Jr = /* @__PURE__ */ new gi(!0);
const vs = (e) => e, mn = (e) => Reflect.getPrototypeOf(e);
function Qr(e, t, n) {
  return function(...s) {
    const A = this.__v_raw, i = /* @__PURE__ */ W(A), r = qe(i), o = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, c = A[e](...s), u = n ? vs : t ? st : xe;
    return !t && re(
      i,
      "iterate",
      l ? ys : gt
    ), _e(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: a, done: p } = c.next();
          return p ? { value: a, done: p } : {
            value: o ? [u(a[0]), u(a[1])] : u(a),
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
function qr(e, t) {
  const n = {
    get(A) {
      const i = this.__v_raw, r = /* @__PURE__ */ W(i), o = /* @__PURE__ */ W(A);
      e || (Re(A, o) && re(r, "get", A), re(r, "get", o));
      const { has: l } = mn(r), c = t ? vs : e ? st : xe;
      if (l.call(r, A))
        return c(i.get(A));
      if (l.call(r, o))
        return c(i.get(o));
      i !== r && i.get(A);
    },
    get size() {
      const A = this.__v_raw;
      return !e && re(/* @__PURE__ */ W(A), "iterate", gt), A.size;
    },
    has(A) {
      const i = this.__v_raw, r = /* @__PURE__ */ W(i), o = /* @__PURE__ */ W(A);
      return e || (Re(A, o) && re(r, "has", A), re(r, "has", o)), A === o ? i.has(A) : i.has(A) || i.has(o);
    },
    forEach(A, i) {
      const r = this, o = r.__v_raw, l = /* @__PURE__ */ W(o), c = t ? vs : e ? st : xe;
      return !e && re(l, "iterate", gt), o.forEach((u, a) => A.call(i, c(u), c(a), r));
    }
  };
  return _e(
    n,
    e ? {
      add: gn("add"),
      set: gn("set"),
      delete: gn("delete"),
      clear: gn("clear")
    } : {
      add(A) {
        const i = /* @__PURE__ */ W(this), r = mn(i), o = /* @__PURE__ */ W(A), l = !t && !/* @__PURE__ */ ge(A) && !/* @__PURE__ */ Fe(A) ? o : A;
        return r.has.call(i, l) || Re(A, l) && r.has.call(i, A) || Re(o, l) && r.has.call(i, o) || (i.add(l), We(i, "add", l, l)), this;
      },
      set(A, i) {
        !t && !/* @__PURE__ */ ge(i) && !/* @__PURE__ */ Fe(i) && (i = /* @__PURE__ */ W(i));
        const r = /* @__PURE__ */ W(this), { has: o, get: l } = mn(r);
        let c = o.call(r, A);
        c || (A = /* @__PURE__ */ W(A), c = o.call(r, A));
        const u = l.call(r, A);
        return r.set(A, i), c ? Re(i, u) && We(r, "set", A, i) : We(r, "add", A, i), this;
      },
      delete(A) {
        const i = /* @__PURE__ */ W(this), { has: r, get: o } = mn(i);
        let l = r.call(i, A);
        l || (A = /* @__PURE__ */ W(A), l = r.call(i, A)), o && o.call(i, A);
        const c = i.delete(A);
        return l && We(i, "delete", A, void 0), c;
      },
      clear() {
        const A = /* @__PURE__ */ W(this), i = A.size !== 0, r = A.clear();
        return i && We(
          A,
          "clear",
          void 0,
          void 0
        ), r;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((A) => {
    n[A] = Qr(A, e, t);
  }), n;
}
function Os(e, t) {
  const n = qr(e, t);
  return (s, A, i) => A === "__v_isReactive" ? !e : A === "__v_isReadonly" ? e : A === "__v_raw" ? s : Reflect.get(
    K(n, A) && A in s ? n : s,
    A,
    i
  );
}
const Xr = {
  get: /* @__PURE__ */ Os(!1, !1)
}, eo = {
  get: /* @__PURE__ */ Os(!1, !0)
}, to = {
  get: /* @__PURE__ */ Os(!0, !1)
};
const xi = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap();
function so(e) {
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
  return /* @__PURE__ */ Fe(e) ? e : js(
    e,
    !1,
    Ur,
    Xr,
    xi
  );
}
// @__NO_SIDE_EFFECTS__
function Ao(e) {
  return js(
    e,
    !1,
    Jr,
    eo,
    bi
  );
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  return js(
    e,
    !0,
    Zr,
    to,
    yi
  );
}
function js(e, t, n, s, A) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = A.get(e);
  if (i)
    return i;
  const r = so($r(e));
  if (r === 0)
    return e;
  const o = new Proxy(
    e,
    r === 2 ? s : n
  );
  return A.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  return /* @__PURE__ */ Fe(e) ? /* @__PURE__ */ Xe(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
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
function io(e) {
  return !K(e, "__v_skip") && Object.isExtensible(e) && si(e, "__v_skip", !0), e;
}
const xe = (e) => Q(e) ? /* @__PURE__ */ Yn(e) : e, st = (e) => Q(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return ro(e, !1);
}
function ro(e, t) {
  return /* @__PURE__ */ le(e) ? e : new oo(e, t);
}
class oo {
  constructor(t, n) {
    this.dep = new Fs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ W(t), this._value = n ? t : xe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ ge(t) || /* @__PURE__ */ Fe(t);
    t = s ? t : /* @__PURE__ */ W(t), Re(t, n) && (this._rawValue = t, this._value = s ? t : xe(t), this.dep.trigger());
  }
}
function T(e) {
  return /* @__PURE__ */ le(e) ? e.value : e;
}
const lo = {
  get: (e, t, n) => t === "__v_raw" ? e : T(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const A = e[t];
    return /* @__PURE__ */ le(A) && !/* @__PURE__ */ le(n) ? (A.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function vi(e) {
  return /* @__PURE__ */ Xe(e) ? e : new Proxy(e, lo);
}
class co {
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
function ao(e, t, n = !1) {
  let s, A;
  return Y(e) ? s = e : (s = e.get, A = e.set), new co(s, A, n);
}
const xn = {}, Sn = /* @__PURE__ */ new WeakMap();
let ft;
function uo(e, t = !1, n = ft) {
  if (n) {
    let s = Sn.get(n);
    s || Sn.set(n, s = []), s.push(e);
  }
}
function fo(e, t, n = J) {
  const { immediate: s, deep: A, once: i, scheduler: r, augmentJob: o, call: l } = n, c = (P) => A ? P : /* @__PURE__ */ ge(P) || A === !1 || A === 0 ? Ge(P, 1) : Ge(P);
  let u, a, p, x, k = !1, _ = !1;
  if (/* @__PURE__ */ le(e) ? (a = () => e.value, k = /* @__PURE__ */ ge(e)) : /* @__PURE__ */ Xe(e) ? (a = () => c(e), k = !0) : D(e) ? (_ = !0, k = e.some((P) => /* @__PURE__ */ Xe(P) || /* @__PURE__ */ ge(P)), a = () => e.map((P) => {
    if (/* @__PURE__ */ le(P))
      return P.value;
    if (/* @__PURE__ */ Xe(P))
      return c(P);
    if (Y(P))
      return l ? l(P, 2) : P();
  })) : Y(e) ? t ? a = l ? () => l(e, 2) : e : a = () => {
    if (p) {
      tt();
      try {
        p();
      } finally {
        nt();
      }
    }
    const P = ft;
    ft = u;
    try {
      return l ? l(e, 3, [x]) : e(x);
    } finally {
      ft = P;
    }
  } : a = mt, t && A) {
    const P = a, ee = A === !0 ? 1 / 0 : A;
    a = () => Ge(P(), ee);
  }
  const B = Br(), j = () => {
    u.stop(), B && B.active && qA(B.effects, u);
  };
  if (i && t) {
    const P = t;
    t = (...ee) => {
      const we = P(...ee);
      return j(), we;
    };
  }
  let O = _ ? new Array(e.length).fill(xn) : xn;
  const L = (P) => {
    if (!(!(u.flags & 1) || !u.dirty && !P))
      if (t) {
        const ee = u.run();
        if (P || A || k || (_ ? ee.some((we, he) => Re(we, O[he])) : Re(ee, O))) {
          p && p();
          const we = ft;
          ft = u;
          try {
            const he = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              O === xn ? void 0 : _ && O[0] === xn ? [] : O,
              x
            ];
            O = ee, l ? l(t, 3, he) : (
              // @ts-expect-error
              t(...he)
            );
          } finally {
            ft = we;
          }
        }
      } else
        u.run();
  };
  return o && o(L), u = new oi(a), u.scheduler = r ? () => r(L, !1) : L, x = (P) => uo(P, !1, u), p = u.onStop = () => {
    const P = Sn.get(u);
    if (P) {
      if (l)
        l(P, 4);
      else
        for (const ee of P) ee();
      Sn.delete(u);
    }
  }, t ? s ? L(!0) : O = u.run() : r ? r(L.bind(null, !0), !0) : u.run(), j.pause = u.pause.bind(u), j.resume = u.resume.bind(u), j.stop = j, j;
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !Q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ le(e))
    Ge(e.value, t, n);
  else if (D(e))
    for (let s = 0; s < e.length; s++)
      Ge(e[s], t, n);
  else if (bt(e) || qe(e))
    e.forEach((s) => {
      Ge(s, t, n);
    });
  else if (ti(e)) {
    for (const s in e)
      Ge(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ge(e[s], t, n);
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
function je(e, t, n, s) {
  if (Y(e)) {
    const A = un(e, t, n, s);
    return A && XA(A) && A.catch((i) => {
      Hn(i, t, n);
    }), A;
  }
  if (D(e)) {
    const A = [];
    for (let i = 0; i < e.length; i++)
      A.push(je(e[i], t, n, s));
    return A;
  }
}
function Hn(e, t, n, s = !0) {
  const A = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || J;
  if (t) {
    let o = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let a = 0; a < u.length; a++)
          if (u[a](e, l, c) === !1)
            return;
      }
      o = o.parent;
    }
    if (i) {
      tt(), un(i, null, 10, [
        e,
        l,
        c
      ]), nt();
      return;
    }
  }
  po(e, n, A, s, r);
}
function po(e, t, n, s = !0, A = !1) {
  if (A)
    throw e;
  console.error(e);
}
const oe = [];
let Ie = -1;
const It = [];
let Je = null, Ct = 0;
const _i = /* @__PURE__ */ Promise.resolve();
let $n = null;
function wi(e) {
  const t = $n || _i;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ho(e) {
  let t = Ie + 1, n = oe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, A = oe[s], i = nn(A);
    i < e || i === e && A.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Bs(e) {
  if (!(e.flags & 1)) {
    const t = nn(e), n = oe[oe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= nn(n) ? oe.push(e) : oe.splice(ho(t), 0, e), e.flags |= 1, ki();
  }
}
function ki() {
  $n || ($n = _i.then(Si));
}
function mo(e) {
  if (!D(e))
    Je && e.id === -1 ? Je.splice(Ct + 1, 0, e) : e.flags & 1 || (It.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      It.push(e[t]);
  ki();
}
function cA(e, t, n = Ie + 1) {
  for (; n < oe.length; n++) {
    const s = oe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      oe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function zi(e) {
  if (It.length) {
    const t = [...new Set(It)].sort(
      (n, s) => nn(n) - nn(s)
    );
    if (It.length = 0, Je) {
      for (let n = 0; n < t.length; n++)
        Je.push(t[n]);
      return;
    }
    for (Je = t, Ct = 0; Ct < Je.length; Ct++) {
      const n = Je[Ct];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Je = null, Ct = 0;
  }
}
const nn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Si(e) {
  try {
    for (Ie = 0; Ie < oe.length; Ie++) {
      const t = oe[Ie];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), un(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ie < oe.length; Ie++) {
      const t = oe[Ie];
      t && (t.flags &= -2);
    }
    Ie = -1, oe.length = 0, zi(), $n = null, (oe.length || It.length) && Si();
  }
}
let me = null, $i = null;
function En(e) {
  const t = me;
  return me = e, $i = e && e.type.__scopeId || null, t;
}
function go(e, t = me, n) {
  if (!t || e._n)
    return e;
  const s = (...A) => {
    s._d && mA(-1);
    const i = En(t), r = xt.length;
    let o;
    try {
      o = e(...A);
    } finally {
      for (let l = xt.length; l > r; l--) Yi();
      En(i), s._d && mA(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Tt(e, t) {
  if (me === null)
    return e;
  const n = Jn(me), s = e.dirs || (e.dirs = []);
  for (let A = 0; A < t.length; A++) {
    let [i, r, o, l = J] = t[A];
    i && (Y(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ge(r), s.push({
      dir: i,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: o,
      modifiers: l
    }));
  }
  return e;
}
function at(e, t, n, s) {
  const A = e.dirs, i = t && t.dirs;
  for (let r = 0; r < A.length; r++) {
    const o = A[r];
    i && (o.oldValue = i[r].value);
    let l = o.dir[s];
    l && (tt(), je(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), nt());
  }
}
function xo(e, t, n = !1) {
  const s = tl();
  if (s || Pt) {
    let A = Pt ? Pt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (A && e in A)
      return A[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(s && s.proxy) : t;
  }
}
const bo = /* @__PURE__ */ Symbol.for("v-scx"), yo = () => xo(bo);
function yt(e, t, n) {
  return vo(e, t, n);
}
function vo(e, t, n = J) {
  const { immediate: s, deep: A, flush: i, once: r } = n, o = _e({}, n), l = t && s || !t && i !== "post";
  let c;
  if (rn) {
    if (i === "sync") {
      const x = yo();
      c = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!l) {
      const x = () => {
      };
      return x.stop = mt, x.resume = mt, x.pause = mt, x;
    }
  }
  const u = At;
  o.call = (x, k, _) => je(x, u, k, _);
  let a = !1;
  i === "post" ? o.scheduler = (x) => {
    ae(x, u && u.suspense);
  } : i !== "sync" && (a = !0, o.scheduler = (x, k) => {
    k ? x() : Bs(x);
  }), o.augmentJob = (x) => {
    t && (x.flags |= 4), a && (x.flags |= 2, u && (x.id = u.uid, x.i = u));
  };
  const p = fo(e, t, o);
  return rn && (c ? c.push(p) : l && p()), p;
}
const _o = /* @__PURE__ */ Symbol("_vte"), Kn = (e) => e.__isTeleport, rs = /* @__PURE__ */ Symbol("_leaveCb");
function wo(e) {
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
    return Kn(e.type) && e.children ? wo(e.children) : e;
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
      Kn(n.type) && Ei(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function ct(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    _e({ name: e.name }, t, { setup: e })
  ) : e;
}
function ko(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function aA(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Cn = /* @__PURE__ */ new WeakMap();
function Zt(e, t, n, s, A = !1) {
  if (D(e)) {
    e.forEach(
      (_, B) => Zt(
        _,
        t && (D(t) ? t[B] : t),
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
  const i = s.shapeFlag & 4 ? Jn(s.component) : s.el, r = A ? null : i, { i: o, r: l } = e, c = t && t.r, u = o.refs === J ? o.refs = {} : o.refs, a = o.setupState, p = /* @__PURE__ */ W(a), x = a === J ? QA : (_) => aA(u, _) ? !1 : K(p, _), k = (_, B) => !(B && aA(u, B));
  if (c != null && c !== l) {
    if (uA(t), ne(c))
      u[c] = null, x(c) && (a[c] = null);
    else if (/* @__PURE__ */ le(c)) {
      const _ = t;
      k(c, _.k) && (c.value = null), _.k && (u[_.k] = null);
    }
  }
  if (Y(l))
    un(l, o, 12, [r, u]);
  else {
    const _ = ne(l), B = /* @__PURE__ */ le(l);
    if (_ || B) {
      const j = () => {
        if (e.f) {
          const O = _ ? x(l) ? a[l] : u[l] : k() || !e.k ? l.value : u[e.k];
          if (A)
            D(O) && qA(O, i);
          else if (D(O))
            O.includes(i) || O.push(i);
          else if (_)
            u[l] = [i], x(l) && (a[l] = u[l]);
          else {
            const L = [i];
            k(l, e.k) && (l.value = L), e.k && (u[e.k] = L);
          }
        } else _ ? (u[l] = r, x(l) && (a[l] = r)) : B && (k(l, e.k) && (l.value = r), e.k && (u[e.k] = r));
      };
      if (r) {
        const O = () => {
          j(), Cn.delete(e);
        };
        O.id = -1, Cn.set(e, O), ae(O, n);
      } else
        uA(e), j();
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
function zo(e, t, n = At, s = !1) {
  if (n) {
    const A = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      tt();
      const o = Gs(n), l = je(t, n, e, r);
      return o(), nt(), l;
    });
    return s ? A.unshift(i) : A.push(i), i;
  }
}
const Mi = (e) => (t, n = At) => {
  (!rn || e === "sp") && zo(e, (...s) => t(...s), n);
}, So = Mi("m"), Ii = Mi(
  "bum"
), $o = /* @__PURE__ */ Symbol.for("v-ndc");
function fe(e, t, n, s) {
  let A;
  const i = n, r = D(e);
  if (r || ne(e)) {
    const o = r && /* @__PURE__ */ Xe(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ ge(e), c = /* @__PURE__ */ Fe(e), e = Gn(e)), A = new Array(e.length);
    for (let u = 0, a = e.length; u < a; u++)
      A[u] = t(
        l ? c ? st(xe(e[u])) : xe(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    A = new Array(e);
    for (let o = 0; o < e; o++)
      A[o] = t(o + 1, o, void 0, i);
  } else if (Q(e))
    if (e[Symbol.iterator])
      A = Array.from(
        e,
        (o, l) => t(o, l, void 0, i)
      );
    else {
      const o = Object.keys(e);
      A = new Array(o.length);
      for (let l = 0, c = o.length; l < c; l++) {
        const u = o[l];
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
  /* @__PURE__ */ _e(/* @__PURE__ */ Object.create(null), {
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
    $watch: (e) => mt
  })
), os = (e, t) => e !== J && !e.__isScriptSetup && K(e, t), Eo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: A, props: i, accessCache: r, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const p = r[t];
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
        if (os(s, t))
          return r[t] = 1, s[t];
        if (K(i, t))
          return r[t] = 3, i[t];
        if (n !== J && K(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const c = Qt[t];
    let u, a;
    if (c)
      return t === "$attrs" && re(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== J && K(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      a = l.config.globalProperties, K(a, t)
    )
      return a[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: A, ctx: i } = e;
    return os(A, t) ? (A[t] = n, !0) : K(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: A, props: i, type: r }
  }, o) {
    let l;
    return !!(n[o] || os(t, o) || K(i, o) || K(s, o) || K(Qt, o) || K(A.config.globalProperties, o) || (l = r.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
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
let Co = 0;
function Mo(e, t) {
  return function(s, A = null) {
    Y(s) || (s = _e({}, s)), A != null && !Q(A) && (A = null);
    const i = Ti(), r = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = i.app = {
      _uid: Co++,
      _component: s,
      _props: A,
      _container: null,
      _context: i,
      _instance: null,
      version: ol,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...a) {
        return r.has(u) || (u && Y(u.install) ? (r.add(u), u.install(c, ...a)) : Y(u) && (r.add(u), u(c, ...a))), c;
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
          const x = c._ceVNode || Ye(s, A);
          return x.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(x, u, p), l = !0, c._container = u, u.__vue_app__ = c, Jn(x.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (je(
          o,
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
const Io = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ye(t)}Modifiers`] || e[`${_t(t)}Modifiers`];
function To(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || J;
  let A = n;
  const i = t.startsWith("update:"), r = i && Io(s, t.slice(7));
  r && (r.trim && (A = n.map((u) => ne(u) ? u.trim() : u)), r.number && (A = A.map(Ln)));
  let o, l = s[o = ts(t)] || // also try camelCase event handler (#2249)
  s[o = ts(ye(t))];
  !l && i && (l = s[o = ts(_t(t))]), l && je(
    l,
    e,
    6,
    A
  );
  const c = s[o + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, je(
      c,
      e,
      6,
      A
    );
  }
}
function Po(e, t, n = !1) {
  const s = t.emitsCache, A = s.get(e);
  if (A !== void 0)
    return A;
  const i = e.emits;
  let r = {};
  return i ? (D(i) ? i.forEach((o) => r[o] = null) : _e(r, i), Q(e) && s.set(e, r), r) : (Q(e) && s.set(e, null), null);
}
function Un(e, t) {
  return !e || !jn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, _t(t)) || K(e, t));
}
function fA(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: A,
    propsOptions: [i],
    slots: r,
    attrs: o,
    emit: l,
    render: c,
    renderCache: u,
    props: a,
    data: p,
    setupState: x,
    ctx: k,
    inheritAttrs: _
  } = e, B = En(e);
  let j, O;
  try {
    if (n.shapeFlag & 4) {
      const P = A || s, ee = P;
      j = Pe(
        c.call(
          ee,
          P,
          u,
          a,
          x,
          p,
          k
        )
      ), O = o;
    } else {
      const P = t;
      j = Pe(
        P.length > 1 ? P(
          a,
          { attrs: o, slots: r, emit: l }
        ) : P(
          a,
          null
        )
      ), O = t.props ? o : Ro(o);
    }
  } catch (P) {
    xt.length = 0, Hn(P, e, 1), j = Ye(Ke);
  }
  let L = j;
  if (O && _ !== !1) {
    const P = Object.keys(O), { shapeFlag: ee } = L;
    P.length && ee & 7 && (i && P.some(Dn) && (O = No(
      O,
      i
    )), L = Rt(L, O, !1, !0));
  }
  if (n.dirs && (L = Rt(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const P = Kn(L.type) && Ei(L) || L;
    Ls(P, n.transition);
  }
  return j = L, En(B), j;
}
const Ro = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || jn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, No = (e, t) => {
  const n = {};
  for (const s in e)
    (!Dn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Fo(e, t, n) {
  const { props: s, children: A, component: i } = e, { props: r, children: o, patchFlag: l } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? dA(s, r, c) : !!r;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let a = 0; a < u.length; a++) {
        const p = u[a];
        if (Pi(r, s, p) && !Un(c, p))
          return !0;
      }
    }
  } else
    return (A || o) && (!o || !o.$stable) ? !0 : s === r ? !1 : s ? r ? dA(s, r, c) : !0 : !!r;
  return !1;
}
function dA(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let A = 0; A < s.length; A++) {
    const i = s[A];
    if (Pi(t, e, i) && !Un(n, i))
      return !0;
  }
  return !1;
}
function Pi(e, t, n) {
  const s = e[n], A = t[n];
  return n === "style" && Q(s) && Q(A) ? !et(s, A) : s !== A;
}
function Oo({ vnode: e, parent: t, suspense: n }, s) {
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
function jo(e, t, n, s = !1) {
  const A = {}, i = Ni();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Oi(e, t, A, i);
  for (const r in e.propsOptions[0])
    r in A || (A[r] = void 0);
  n ? e.props = s ? A : /* @__PURE__ */ Ao(A) : e.type.props ? e.props = A : e.props = i, e.attrs = i;
}
function Do(e, t, n, s) {
  const {
    props: A,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, o = /* @__PURE__ */ W(A), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const u = e.vnode.dynamicProps;
      for (let a = 0; a < u.length; a++) {
        let p = u[a];
        if (Un(e.emitsOptions, p))
          continue;
        const x = t[p];
        if (l)
          if (K(i, p))
            x !== i[p] && (i[p] = x, c = !0);
          else {
            const k = ye(p);
            A[k] = ks(
              l,
              o,
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
    for (const a in o)
      (!t || // for camelCase
      !K(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = _t(a)) === a || !K(t, u))) && (l ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[u] !== void 0) && (A[a] = ks(
        l,
        o,
        a,
        void 0,
        e,
        !0
      )) : delete A[a]);
    if (i !== o)
      for (const a in i)
        (!t || !K(t, a)) && (delete i[a], c = !0);
  }
  c && We(e.attrs, "set", "");
}
function Oi(e, t, n, s) {
  const [A, i] = e.propsOptions;
  let r = !1, o;
  if (t)
    for (let l in t) {
      if (Ht(l))
        continue;
      const c = t[l];
      let u;
      A && K(A, u = ye(l)) ? !i || !i.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : Un(e.emitsOptions, l) || (!(l in s) || c !== s[l]) && (s[l] = c, r = !0);
    }
  if (i) {
    const l = /* @__PURE__ */ W(n), c = o || J;
    for (let u = 0; u < i.length; u++) {
      const a = i[u];
      n[a] = ks(
        A,
        l,
        a,
        c[a],
        e,
        !K(c, a)
      );
    }
  }
  return r;
}
function ks(e, t, n, s, A, i) {
  const r = e[n];
  if (r != null) {
    const o = K(r, "default");
    if (o && s === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && Y(l)) {
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
    r[
      0
      /* shouldCast */
    ] && (i && !o ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === _t(n)) && (s = !0));
  }
  return s;
}
function Bo(e, t, n = !1) {
  const s = t.propsCache, A = s.get(e);
  if (A)
    return A;
  const i = e.props, r = {}, o = [];
  if (!i)
    return Q(e) && s.set(e, pt), pt;
  if (D(i))
    for (let c = 0; c < i.length; c++) {
      const u = ye(i[c]);
      pA(u) && (r[u] = J);
    }
  else if (i)
    for (const c in i) {
      const u = ye(c);
      if (pA(u)) {
        const a = i[c], p = r[u] = D(a) || Y(a) ? { type: a } : _e({}, a), x = p.type;
        let k = !1, _ = !0;
        if (D(x))
          for (let B = 0; B < x.length; ++B) {
            const j = x[B], O = Y(j) && j.name;
            if (O === "Boolean") {
              k = !0;
              break;
            } else O === "String" && (_ = !1);
          }
        else
          k = Y(x) && x.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = k, p[
          1
          /* shouldCastTrue */
        ] = _, (k || K(p, "default")) && o.push(u);
      }
    }
  const l = [r, o];
  return Q(e) && s.set(e, l), l;
}
function pA(e) {
  return e[0] !== "$" && !Ht(e);
}
const Vs = (e) => e === "_" || e === "_ctx" || e === "$stable", Ws = (e) => D(e) ? e.map(Pe) : [Pe(e)], Lo = (e, t, n) => {
  if (t._n)
    return t;
  const s = go((...A) => Ws(t(...A)), n);
  return s._c = !1, s;
}, ji = (e, t, n) => {
  const s = e._ctx;
  for (const A in e) {
    if (Vs(A)) continue;
    const i = e[A];
    if (Y(i))
      t[A] = Lo(A, i, s);
    else if (i != null) {
      const r = Ws(i);
      t[A] = () => r;
    }
  }
}, Di = (e, t) => {
  const n = Ws(t);
  e.slots.default = () => n;
}, Bi = (e, t, n) => {
  for (const s in t)
    (n || !Vs(s)) && (e[s] = t[s]);
}, Vo = (e, t, n) => {
  const s = e.slots = Ni();
  if (e.vnode.shapeFlag & 32) {
    const A = t._;
    A ? (Bi(s, t, n), n && si(s, "_", A, !0)) : ji(t, s);
  } else t && Di(e, t);
}, Wo = (e, t, n) => {
  const { vnode: s, slots: A } = e;
  let i = !0, r = J;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? i = !1 : Bi(A, t, n) : (i = !t.$stable, ji(t, A)), r = t;
  } else t && (Di(e, t), r = { default: 1 });
  if (i)
    for (const o in A)
      !Vs(o) && r[o] == null && delete A[o];
}, ae = Uo;
function Go(e) {
  return Yo(e);
}
function Yo(e, t) {
  const n = Vn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: A,
    patchProp: i,
    createElement: r,
    createText: o,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: a,
    nextSibling: p,
    setScopeId: x = mt,
    insertStaticContent: k
  } = e, _ = (f, d, g, w = null, b = null, v = null, $ = void 0, S = null, z = !!d.dynamicChildren) => {
    if (f === d)
      return;
    f && !Wt(f, d) && (w = hn(f), De(f, b, v, !0), f = null), d.patchFlag === -2 && (z = !1, d.dynamicChildren = null), d.dynamicChildren && f && f.dynamicChildren && f.dynamicChildren.hasOnce && (d.dynamicChildren === pt && (d.dynamicChildren = []), d.dynamicChildren.hasOnce = !0);
    const { type: y, ref: N, shapeFlag: C } = d;
    switch (y) {
      case Zn:
        B(f, d, g, w);
        break;
      case Ke:
        j(f, d, g, w);
        break;
      case cs:
        f == null && O(d, g, w, $);
        break;
      case U:
        ce(
          f,
          d,
          g,
          w,
          b,
          v,
          $,
          S,
          z
        );
        break;
      default:
        C & 1 ? ee(
          f,
          d,
          g,
          w,
          b,
          v,
          $,
          S,
          z
        ) : C & 6 ? ze(
          f,
          d,
          g,
          w,
          b,
          v,
          $,
          S,
          z
        ) : (C & 64 || C & 128) && y.process(
          f,
          d,
          g,
          w,
          b,
          v,
          $,
          S,
          z,
          Bt
        );
    }
    N != null && b ? Zt(N, f && f.ref, v, d || f, !d) : N == null && f && f.ref != null && Zt(f.ref, null, v, f, !0);
  }, B = (f, d, g, w) => {
    if (f == null)
      s(
        d.el = o(d.children),
        g,
        w
      );
    else {
      const b = d.el = f.el;
      d.children !== f.children && c(b, d.children);
    }
  }, j = (f, d, g, w) => {
    f == null ? s(
      d.el = l(d.children || ""),
      g,
      w
    ) : d.el = f.el;
  }, O = (f, d, g, w) => {
    [f.el, f.anchor] = k(
      f.children,
      d,
      g,
      w,
      f.el,
      f.anchor
    );
  }, L = ({ el: f, anchor: d }, g, w) => {
    let b;
    for (; f && f !== d; )
      b = p(f), s(f, g, w), f = b;
    s(d, g, w);
  }, P = ({ el: f, anchor: d }) => {
    let g;
    for (; f && f !== d; )
      g = p(f), A(f), f = g;
    A(d);
  }, ee = (f, d, g, w, b, v, $, S, z) => {
    if (d.type === "svg" ? $ = "svg" : d.type === "math" && ($ = "mathml"), f == null)
      we(
        d,
        g,
        w,
        b,
        v,
        $,
        S,
        z
      );
    else {
      const y = f.el && f.el._isVueCE ? f.el : null;
      try {
        y && y._beginPatch(), kt(
          f,
          d,
          b,
          v,
          $,
          S,
          z
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, we = (f, d, g, w, b, v, $, S) => {
    let z, y;
    const { props: N, shapeFlag: C, transition: R, dirs: F } = f;
    if (z = f.el = r(
      f.type,
      v,
      N && N.is,
      N
    ), C & 8 ? u(z, f.children) : C & 16 && ke(
      f.children,
      z,
      null,
      w,
      b,
      ls(f, v),
      $,
      S
    ), F && at(f, null, w, "created"), he(z, f, f.scopeId, $, w), N) {
      for (const H in N)
        H !== "value" && !Ht(H) && i(z, H, null, N[H], v, w);
      "value" in N && i(z, "value", null, N.value, v), (y = N.onVnodeBeforeMount) && Me(y, w, f);
    }
    F && at(f, null, w, "beforeMount");
    const V = Ho(b, R);
    V && R.beforeEnter(z), s(z, d, g), ((y = N && N.onVnodeMounted) || V || F) && ae(() => {
      try {
        y && Me(y, w, f), V && R.enter(z), F && at(f, null, w, "mounted");
      } finally {
      }
    }, b);
  }, he = (f, d, g, w, b) => {
    if (g && x(f, g), w)
      for (let v = 0; v < w.length; v++)
        x(f, w[v]);
    if (b) {
      let v = b.subTree;
      if (d === v || Gi(v.type) && (v.ssContent === d || v.ssFallback === d)) {
        const $ = b.vnode;
        he(
          f,
          $,
          $.scopeId,
          $.slotScopeIds,
          b.parent
        );
      }
    }
  }, ke = (f, d, g, w, b, v, $, S, z = 0) => {
    for (let y = z; y < f.length; y++) {
      const N = f[y] = S ? Ve(f[y]) : Pe(f[y]);
      _(
        null,
        N,
        d,
        g,
        w,
        b,
        v,
        $,
        S
      );
    }
  }, kt = (f, d, g, w, b, v, $) => {
    const S = d.el = f.el;
    let { patchFlag: z, dynamicChildren: y, dirs: N } = d;
    z |= f.patchFlag & 16;
    const C = f.props || J, R = d.props || J;
    let F;
    if (g && ut(g, !1), (F = R.onVnodeBeforeUpdate) && Me(F, g, d, f), N && at(d, f, g, "beforeUpdate"), g && ut(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!f.dynamicChildren || f.dynamicChildren.length !== y.length) && (z = 0, $ = !1, y = null), (C.innerHTML && R.innerHTML == null || C.textContent && R.textContent == null) && u(S, ""), y ? X(
      f.dynamicChildren,
      y,
      S,
      g,
      w,
      ls(d, b),
      v
    ) : $ || St(
      f,
      d,
      S,
      null,
      g,
      w,
      ls(d, b),
      v,
      !1
    ), z > 0) {
      if (z & 16)
        Ot(S, C, R, g, b);
      else if (z & 2 && C.class !== R.class && i(S, "class", null, R.class, b), z & 4 && i(S, "style", C.style, R.style, b), z & 8) {
        const V = d.dynamicProps;
        for (let H = 0; H < V.length; H++) {
          const G = V[H], te = C[G], Ae = R[G];
          (Ae !== te || G === "value") && i(S, G, te, Ae, b, g);
        }
      }
      z & 1 && f.children !== d.children && u(S, d.children);
    } else !$ && y == null && Ot(S, C, R, g, b);
    ((F = R.onVnodeUpdated) || N) && ae(() => {
      F && Me(F, g, d, f), N && at(d, f, g, "updated");
    }, w);
  }, X = (f, d, g, w, b, v, $) => {
    for (let S = 0; S < d.length; S++) {
      const z = f[S], y = d[S], N = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (z.type === U || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Wt(z, y) || // - In the case of a component, it could contain anything.
        z.shapeFlag & 198) ? a(z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      _(
        z,
        y,
        N,
        null,
        w,
        b,
        v,
        $,
        !0
      );
    }
  }, Ot = (f, d, g, w, b) => {
    if (d !== g) {
      if (d !== J)
        for (const v in d)
          !Ht(v) && !(v in g) && i(
            f,
            v,
            d[v],
            null,
            b,
            w
          );
      for (const v in g) {
        if (Ht(v)) continue;
        const $ = g[v], S = d[v];
        $ !== S && v !== "value" && i(f, v, S, $, b, w);
      }
      "value" in g && i(f, "value", d.value, g.value, b);
    }
  }, ce = (f, d, g, w, b, v, $, S, z) => {
    const y = d.el = f ? f.el : o(""), N = d.anchor = f ? f.anchor : o("");
    let { patchFlag: C, dynamicChildren: R, slotScopeIds: F } = d;
    F && (S = S ? S.concat(F) : F), f == null ? (s(y, g, w), s(N, g, w), ke(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      N,
      b,
      v,
      $,
      S,
      z
    )) : C > 0 && C & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === R.length ? (X(
      f.dynamicChildren,
      R,
      g,
      b,
      v,
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
      N,
      b,
      v,
      $,
      S,
      z
    );
  }, ze = (f, d, g, w, b, v, $, S, z) => {
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
      v,
      $,
      z
    ) : dn(f, d, z);
  }, zt = (f, d, g, w, b, v, $) => {
    const S = f.component = el(
      f,
      w,
      b
    );
    if (Ci(f) && (S.ctx.renderer = Bt), nl(S, !1, $), S.asyncDep) {
      if (b && b.registerDep(S, jt, $), !f.el) {
        const z = S.subTree = Ye(Ke);
        j(null, z, d, g), f.placeholder = z.el;
      }
    } else
      jt(
        S,
        f,
        d,
        g,
        b,
        v,
        $
      );
  }, dn = (f, d, g) => {
    const w = d.component = f.component;
    if (Fo(f, d, g))
      if (w.asyncDep && !w.asyncResolved) {
        d.el = f.el, Se(w, d, g);
        return;
      } else
        w.next = d, w.update();
    else
      d.el = f.el, w.vnode = d;
  }, jt = (f, d, g, w, b, v, $) => {
    const S = () => {
      if (f.isMounted) {
        let { next: C, bu: R, u: F, parent: V, vnode: H } = f;
        {
          const Ee = Vi(f);
          if (Ee) {
            C && (C.el = H.el, Se(f, C, $)), Ee.asyncDep.then(() => {
              ae(() => {
                f.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let G = C, te;
        ut(f, !1), C ? (C.el = H.el, Se(f, C, $)) : C = H, R && vn(R), (te = C.props && C.props.onVnodeBeforeUpdate) && Me(te, V, C, H), ut(f, !0);
        const Ae = fA(f), $e = f.subTree;
        f.subTree = Ae, _(
          $e,
          Ae,
          // parent may have changed if it's in a teleport
          a($e.el),
          // anchor may have changed if it's in a fragment
          hn($e),
          f,
          b,
          v
        ), C.el = Ae.el, G === null && Oo(f, Ae.el), F && ae(F, b), (te = C.props && C.props.onVnodeUpdated) && ae(
          () => Me(te, V, C, H),
          b
        );
      } else {
        let C;
        const { el: R, props: F } = d, { bm: V, m: H, parent: G, root: te, type: Ae } = f, $e = Jt(d);
        ut(f, !1), V && vn(V), !$e && (C = F && F.onVnodeBeforeMount) && Me(C, G, d), ut(f, !0);
        {
          te.ce && te.ce._hasShadowRoot() && te.ce._injectChildStyle(
            Ae,
            f.parent ? f.parent.type : void 0
          );
          const Ee = f.subTree = fA(f);
          _(
            null,
            Ee,
            g,
            w,
            f,
            b,
            v
          ), d.el = Ee.el;
        }
        if (H && ae(H, b), !$e && (C = F && F.onVnodeMounted)) {
          const Ee = d;
          ae(
            () => Me(C, G, Ee),
            b
          );
        }
        (d.shapeFlag & 256 || G && Jt(G.vnode) && G.vnode.shapeFlag & 256) && f.a && ae(f.a, b), f.isMounted = !0, d = g = w = null;
      }
    };
    f.scope.on();
    const z = f.effect = new oi(S);
    f.scope.off();
    const y = f.update = z.run.bind(z), N = f.job = z.runIfDirty.bind(z);
    N.i = f, N.id = f.uid, z.scheduler = () => Bs(N), ut(f, !0), y();
  }, Se = (f, d, g) => {
    d.component = f;
    const w = f.vnode.props;
    f.vnode = d, f.next = null, Do(f, d.props, w, g), Wo(f, d.children, g), tt(), cA(f), nt();
  }, St = (f, d, g, w, b, v, $, S, z = !1) => {
    const y = f && f.children, N = f ? f.shapeFlag : 0, C = d.children, { patchFlag: R, shapeFlag: F } = d;
    if (R > 0) {
      if (R & 128) {
        Qs(
          y,
          C,
          g,
          w,
          b,
          v,
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
          v,
          $,
          S,
          z
        );
        return;
      }
    }
    F & 8 ? (N & 16 && Dt(y, b, v), C !== y && u(g, C)) : N & 16 ? F & 16 ? Qs(
      y,
      C,
      g,
      w,
      b,
      v,
      $,
      S,
      z
    ) : Dt(y, b, v, !0) : (N & 8 && u(g, ""), F & 16 && ke(
      C,
      g,
      w,
      b,
      v,
      $,
      S,
      z
    ));
  }, $t = (f, d, g, w, b, v, $, S, z) => {
    f = f || pt, d = d || pt;
    const y = f.length, N = d.length, C = Math.min(y, N);
    let R;
    for (R = 0; R < C; R++) {
      const F = d[R] = z ? Ve(d[R]) : Pe(d[R]);
      _(
        f[R],
        F,
        g,
        null,
        b,
        v,
        $,
        S,
        z
      );
    }
    y > N ? Dt(
      f,
      b,
      v,
      !0,
      !1,
      C
    ) : ke(
      d,
      g,
      w,
      b,
      v,
      $,
      S,
      z,
      C
    );
  }, Qs = (f, d, g, w, b, v, $, S, z) => {
    let y = 0;
    const N = d.length;
    let C = f.length - 1, R = N - 1;
    for (; y <= C && y <= R; ) {
      const F = f[y], V = d[y] = z ? Ve(d[y]) : Pe(d[y]);
      if (Wt(F, V))
        _(
          F,
          V,
          g,
          null,
          b,
          v,
          $,
          S,
          z
        );
      else
        break;
      y++;
    }
    for (; y <= C && y <= R; ) {
      const F = f[C], V = d[R] = z ? Ve(d[R]) : Pe(d[R]);
      if (Wt(F, V))
        _(
          F,
          V,
          g,
          null,
          b,
          v,
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
        const F = R + 1, V = F < N ? d[F].el : w;
        for (; y <= R; )
          _(
            null,
            d[y] = z ? Ve(d[y]) : Pe(d[y]),
            g,
            V,
            b,
            v,
            $,
            S,
            z
          ), y++;
      }
    } else if (y > R)
      for (; y <= C; )
        De(f[y], b, v, !0), y++;
    else {
      const F = y, V = y, H = /* @__PURE__ */ new Map();
      for (y = V; y <= R; y++) {
        const ue = d[y] = z ? Ve(d[y]) : Pe(d[y]);
        ue.key != null && H.set(ue.key, y);
      }
      let G, te = 0;
      const Ae = R - V + 1;
      let $e = !1, Ee = 0;
      const Lt = new Array(Ae);
      for (y = 0; y < Ae; y++) Lt[y] = 0;
      for (y = F; y <= C; y++) {
        const ue = f[y];
        if (te >= Ae) {
          De(ue, b, v, !0);
          continue;
        }
        let Ce;
        if (ue.key != null)
          Ce = H.get(ue.key);
        else
          for (G = V; G <= R; G++)
            if (Lt[G - V] === 0 && Wt(ue, d[G])) {
              Ce = G;
              break;
            }
        Ce === void 0 ? De(ue, b, v, !0) : (Lt[Ce - V] = y + 1, Ce >= Ee ? Ee = Ce : $e = !0, _(
          ue,
          d[Ce],
          g,
          null,
          b,
          v,
          $,
          S,
          z
        ), te++);
      }
      const eA = $e ? Ko(Lt) : pt;
      for (G = eA.length - 1, y = Ae - 1; y >= 0; y--) {
        const ue = V + y, Ce = d[ue], tA = d[ue + 1], nA = ue + 1 < N ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          tA.el || Wi(tA)
        ) : w;
        Lt[y] === 0 ? _(
          null,
          Ce,
          g,
          nA,
          b,
          v,
          $,
          S,
          z
        ) : $e && (G < 0 || y !== eA[G] ? pn(Ce, g, nA, 2) : G--);
      }
    }
  }, pn = (f, d, g, w, b = null) => {
    const { el: v, type: $, transition: S, children: z, shapeFlag: y } = f;
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
    if ($ === U) {
      s(v, d, g);
      for (let C = 0; C < z.length; C++)
        pn(z[C], d, g, w);
      s(f.anchor, d, g);
      return;
    }
    if ($ === cs) {
      L(f, d, g);
      return;
    }
    if (w !== 2 && y & 1 && S)
      if (w === 0)
        S.persisted && !v[rs] ? s(v, d, g) : (S.beforeEnter(v), s(v, d, g), ae(() => S.enter(v), b));
      else {
        const { leave: C, delayLeave: R, afterLeave: F } = S, V = () => {
          f.ctx.isUnmounted ? A(v) : s(v, d, g);
        }, H = () => {
          const G = v._isLeaving || !!v[rs];
          v._isLeaving && v[rs](
            !0
            /* cancelled */
          ), S.persisted && !G ? V() : C(v, () => {
            V(), F && F();
          });
        };
        R ? R(v, V, H) : H();
      }
    else
      s(v, d, g);
  }, De = (f, d, g, w = !1, b = !1) => {
    const {
      type: v,
      props: $,
      ref: S,
      children: z,
      dynamicChildren: y,
      shapeFlag: N,
      patchFlag: C,
      dirs: R,
      cacheIndex: F,
      memo: V
    } = f;
    if ((C === -2 || y && y.hasOnce) && (b = !1), S != null && (tt(), Zt(S, null, g, f, !0), nt()), F != null && (!f.ctx || f.ctx === d) && (d.renderCache[F] = void 0), N & 256) {
      d.ctx.deactivate(f);
      return;
    }
    const H = N & 1 && R, G = !Jt(f);
    let te;
    if (G && (te = $ && $.onVnodeBeforeUnmount) && Me(te, d, f), N & 6)
      zr(f.component, g, w);
    else {
      if (N & 128) {
        f.suspense.unmount(g, w);
        return;
      }
      H && at(f, null, d, "beforeUnmount"), N & 64 ? f.type.remove(
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
      (v !== U || C > 0 && C & 64) ? Dt(
        y,
        d,
        g,
        !1,
        !0
      ) : (v === U && C & 384 || !b && N & 16) && Dt(z, d, g), w && qs(f);
    }
    const Ae = V != null && F == null;
    (G && (te = $ && $.onVnodeUnmounted) || H || Ae) && ae(() => {
      te && Me(te, d, f), H && at(f, null, d, "unmounted"), Ae && (f.el = null);
    }, g);
  }, qs = (f) => {
    const { type: d, el: g, anchor: w, transition: b } = f;
    if (d === U) {
      kr(g, w);
      return;
    }
    if (d === cs) {
      P(f), b && !b.persisted && b.afterLeave && b.afterLeave();
      return;
    }
    const v = () => {
      A(g), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (f.shapeFlag & 1 && b && !b.persisted) {
      const { leave: $, delayLeave: S } = b, z = () => $(g, v);
      S ? S(f.el, v, z) : z();
    } else
      v();
  }, kr = (f, d) => {
    let g;
    for (; f !== d; )
      g = p(f), A(f), f = g;
    A(d);
  }, zr = (f, d, g) => {
    const { bum: w, scope: b, job: v, subTree: $, um: S, m: z, a: y } = f;
    hA(z), hA(y), w && vn(w), b.stop(), v ? (v.flags |= 8, De($, f, d, g)) : f.vnode.el && $ && ($.transition = f.vnode.transition, De($, f, d, g)), S && ae(S, d), ae(() => {
      f.isUnmounted = !0;
    }, d);
  }, Dt = (f, d, g, w = !1, b = !1, v = 0) => {
    for (let $ = v; $ < f.length; $++)
      De(f[$], d, g, w, b);
  }, hn = (f) => {
    if (f.shapeFlag & 6)
      return hn(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const d = p(f.anchor || f.el), g = d && d[_o];
    return g ? p(g) : d;
  };
  let es = !1;
  const Xs = (f, d, g) => {
    let w;
    f == null ? d._vnode && (De(d._vnode, null, null, !0), w = d._vnode.component) : _(
      d._vnode || null,
      f,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = f, es || (es = !0, cA(w), zi(), es = !1);
  }, Bt = {
    p: _,
    um: De,
    m: pn,
    r: qs,
    mt: zt,
    mc: ke,
    pc: St,
    pbc: X,
    n: hn,
    o: e
  };
  return {
    render: Xs,
    hydrate: void 0,
    createApp: Mo(Xs)
  };
}
function ls({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ut({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ho(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Li(e, t, n = !1) {
  const s = e.children, A = t.children;
  if (D(s) && D(A))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let o = A[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = A[i] = Ve(A[i]), o.el = r.el), !n && o.patchFlag !== -2 && Li(r, o)), o.type === Zn && (o.patchFlag === -1 && (o = A[i] = Ve(o)), o.el = r.el), o.type === Ke && !o.el && (o.el = r.el);
    }
}
function Ko(e) {
  const t = e.slice(), n = [0];
  let s, A, i, r, o;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const c = e[s];
    if (c !== 0) {
      if (A = n[n.length - 1], e[A] < c) {
        t[s] = A, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        o = i + r >> 1, e[n[o]] < c ? i = o + 1 : r = o;
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
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
function Uo(e, t) {
  t && t.pendingBranch ? D(e) ? t.effects.push(...e) : t.effects.push(e) : mo(e);
}
const U = /* @__PURE__ */ Symbol.for("v-fgt"), Zn = /* @__PURE__ */ Symbol.for("v-txt"), Ke = /* @__PURE__ */ Symbol.for("v-cmt"), cs = /* @__PURE__ */ Symbol.for("v-stc"), xt = [];
let de = null;
function E(e = !1) {
  xt.push(de = e ? null : []);
}
function Yi() {
  xt.pop(), de = xt[xt.length - 1] || null;
}
let sn = 1;
function mA(e, t = !1) {
  sn += e, e < 0 && de && t && (de.hasOnce = !0);
}
function Hi(e) {
  return e.dynamicChildren = sn > 0 ? de || pt : null, Yi(), sn > 0 && de && de.push(e), e;
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
function Qe(e, t, n, s, A) {
  return Hi(
    Ye(
      e,
      t,
      n,
      s,
      A,
      !0
    )
  );
}
function Ki(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Wt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ui = ({ key: e }) => e ?? null, _n = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || /* @__PURE__ */ le(e) || Y(e) ? { i: me, r: e, k: t, f: !!n } : e : null);
function h(e, t = null, n = null, s = 0, A = null, i = e === U ? 0 : 1, r = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ui(t),
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
    ctx: me
  };
  return o ? (Mn(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= ne(n) ? 8 : 16), sn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  de && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && de.push(l), l;
}
const Ye = Zo;
function Zo(e, t = null, n = null, s = 0, A = null, i = !1) {
  if ((!e || e === $o) && (e = Ke), Ki(e)) {
    const o = Rt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Mn(o, n), sn > 0 && !i && de && (o.shapeFlag & 6 ? de[de.indexOf(e)] = o : de.push(o)), o.patchFlag = -2, o;
  }
  if (rl(e) && (e = e.__vccOpts), t) {
    t = Jo(t);
    let { class: o, style: l } = t;
    o && !ne(o) && (t.class = lt(o)), Q(l) && (/* @__PURE__ */ Ds(l) && !D(l) && (l = _e({}, l)), t.style = Wn(l));
  }
  const r = ne(e) ? 1 : Gi(e) ? 128 : Kn(e) ? 64 : Q(e) ? 4 : Y(e) ? 2 : 0;
  return h(
    e,
    t,
    n,
    s,
    A,
    r,
    i,
    !0
  );
}
function Jo(e) {
  return e ? /* @__PURE__ */ Ds(e) || Fi(e) ? _e({}, e) : e : null;
}
function Rt(e, t, n = !1, s = !1) {
  const { props: A, ref: i, patchFlag: r, children: o, transition: l } = e, c = t ? Qo(A || {}, t) : A, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ui(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? D(i) ? i.concat(_n(t)) : [i, _n(t)] : _n(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== U ? r === -1 ? 16 : r | 16 : r,
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
  return Ye(Zn, null, e, t);
}
function q(e = "", t = !1) {
  return t ? (E(), Qe(Ke, null, e)) : Ye(Ke, null, e);
}
function Pe(e) {
  return e == null || typeof e == "boolean" ? Ye(Ke) : D(e) ? Ye(
    U,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ki(e) ? Ve(e) : Ye(Zn, null, String(e));
}
function Ve(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Rt(e);
}
function Mn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (D(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const A = t.default;
      A && (A._c && (A._d = !1), Mn(e, A()), A._c && (A._d = !0));
      return;
    } else {
      n = 32;
      const A = t._;
      !A && !Fi(t) ? t._ctx = me : A === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Y(t)) {
    if (s & 65) {
      Mn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: me }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [qt(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Qo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const A in s)
      if (A === "class")
        t.class !== s.class && (t.class = lt([t.class, s.class]));
      else if (A === "style")
        t.style = Wn([t.style, s.style]);
      else if (jn(A)) {
        const i = t[A], r = s[A];
        r && i !== r && !(D(i) && i.includes(r)) ? t[A] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Dn(A) && (t[A] = r);
      } else A !== "" && (t[A] = s[A]);
  }
  return t;
}
function Me(e, t, n, s = null) {
  je(e, t, 7, [
    n,
    s
  ]);
}
const qo = Ti();
let Xo = 0;
function el(e, t, n) {
  const s = e.type, A = (t ? t.appContext : e.appContext) || qo, i = {
    uid: Xo++,
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
    scope: new Dr(
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
    propsOptions: Bo(s, A),
    emitsOptions: Po(s, A),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = To.bind(null, i), e.ce && e.ce(i), i;
}
let At = null;
const tl = () => At || me;
let In, An;
{
  const e = Vn(), t = (n, s) => {
    let A;
    return (A = e[n]) || (A = e[n] = []), A.push(s), (i) => {
      A.length > 1 ? A.forEach((r) => r(i)) : A[0](i);
    };
  };
  In = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => At = n
  ), An = t(
    "__VUE_SSR_SETTERS__",
    (n) => rn = n
  );
}
const Gs = (e) => {
  const t = At;
  return In(e), e.scope.on(), () => {
    e.scope.off(), In(t);
  };
}, gA = () => {
  At && At.scope.off(), In(null);
};
function Zi(e) {
  return e.vnode.shapeFlag & 4;
}
let rn = !1;
function nl(e, t = !1, n = !1) {
  t && An(t);
  const { props: s, children: A } = e.vnode, i = Zi(e);
  jo(e, s, i, t), Vo(e, A, n || t);
  const r = i ? sl(e, t) : void 0;
  return t && An(!1), r;
}
function sl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Eo);
  const { setup: s } = n;
  if (s) {
    tt();
    const A = e.setupContext = s.length > 1 ? il(e) : null, i = Gs(e), r = un(
      s,
      e,
      0,
      [
        e.props,
        A
      ]
    ), o = XA(r);
    if (nt(), i(), (o || e.sp) && !Jt(e) && ko(e), o) {
      if (r.then(gA, gA), t)
        return r.then((l) => {
          An(!0);
          try {
            xA(e, l, t);
          } finally {
            An(!1);
          }
        }).catch((l) => {
          Hn(l, e, 0);
        });
      e.asyncDep = r;
    } else
      xA(e, r);
  } else
    Ji(e);
}
function xA(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = vi(t)), Ji(e);
}
function Ji(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || mt);
}
const Al = {
  get(e, t) {
    return re(e, "get", ""), e[t];
  }
};
function il(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Al),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Jn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vi(io(e.exposed)), {
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
const se = (e, t) => /* @__PURE__ */ ao(e, t, rn), ol = "3.5.43";
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
const Qi = zs ? (e) => zs.createHTML(e) : (e) => e, ll = "http://www.w3.org/2000/svg", cl = "http://www.w3.org/1998/Math/MathML", Le = typeof document < "u" ? document : null, yA = Le && /* @__PURE__ */ Le.createElement("template"), al = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const A = t === "svg" ? Le.createElementNS(ll, e) : t === "mathml" ? Le.createElementNS(cl, e) : n ? Le.createElement(e, { is: n }) : Le.createElement(e);
    return e === "select" && s && s.multiple != null && A.setAttribute("multiple", s.multiple), A;
  },
  createText: (e) => Le.createTextNode(e),
  createComment: (e) => Le.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Le.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, A, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (A && (A === i || A.nextSibling))
      for (; t.insertBefore(A.cloneNode(!0), n), !(A === i || !(A = A.nextSibling)); )
        ;
    else {
      yA.innerHTML = Qi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const o = yA.content;
      if (s === "svg" || s === "mathml") {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ul = /* @__PURE__ */ Symbol("_vtc");
function fl(e, t, n) {
  const s = e[ul];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vA = /* @__PURE__ */ Symbol("_vod"), dl = /* @__PURE__ */ Symbol("_vsh"), pl = /* @__PURE__ */ Symbol(""), hl = /(?:^|;)\s*display\s*:/;
function ml(e, t, n) {
  const s = e.style, A = ne(n);
  let i = !1;
  if (n && !A) {
    if (t)
      if (ne(t))
        for (const r of t.split(";")) {
          const o = r.slice(0, r.indexOf(":")).trim();
          n[o] == null && Yt(s, o, "");
        }
      else
        for (const r in t)
          n[r] == null && Yt(s, r, "");
    for (const r in n) {
      r === "display" && (i = !0);
      const o = n[r];
      o != null ? xl(
        e,
        r,
        !ne(t) && t ? t[r] : void 0,
        o
      ) || Yt(s, r, o) : Yt(s, r, "");
    }
  } else if (A) {
    if (t !== n) {
      const r = s[pl];
      r && (n += ";" + r), s.cssText = n, i = hl.test(n);
    }
  } else t && e.removeAttribute("style");
  vA in e && (e[vA] = i ? s.display : "", e[dl] && (s.display = "none"));
}
const bn = /\s*!important$/;
function Yt(e, t, n) {
  if (D(n))
    n.forEach((s) => Yt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    bn.test(n) ? e.setProperty(t, n.replace(bn, ""), "important") : e.setProperty(t, n);
  else {
    const s = gl(e, t);
    bn.test(n) ? e.setProperty(
      _t(s),
      n.replace(bn, ""),
      "important"
    ) : e[s] = n;
  }
}
const _A = ["Webkit", "Moz", "ms"], as = {};
function gl(e, t) {
  const n = as[t];
  if (n)
    return n;
  let s = ye(t);
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
function xl(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ne(s) && n === s;
}
const wA = "http://www.w3.org/1999/xlink";
function kA(e, t, n, s, A, i = Nr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wA, t.slice(6, t.length)) : e.setAttributeNS(wA, t, n) : n == null || i && !Ai(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ne(n) ? String(n) : n
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
    const o = i === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = Ai(n) : n == null && o === "string" ? (n = "", r = !0) : o === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(A || t);
}
function dt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function bl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const SA = /* @__PURE__ */ Symbol("_vei");
function yl(e, t, n, s, A = null) {
  const i = e[SA] || (e[SA] = {}), r = i[t];
  if (s && r)
    r.value = s;
  else {
    const [o, l] = wl(t);
    if (s) {
      const c = i[t] = Sl(
        s,
        A
      );
      dt(e, o, c, l);
    } else r && (bl(e, o, r, l), i[t] = void 0);
  }
}
const vl = /(Once|Passive|Capture)$/, _l = /^on:?(?:Once|Passive|Capture)$/;
function wl(e) {
  let t, n;
  for (; (n = e.match(vl)) && !_l.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : _t(e.slice(2)), t];
}
let us = 0;
const kl = /* @__PURE__ */ Promise.resolve(), zl = () => us || (kl.then(() => us = 0), us = Date.now());
function Sl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const A = n.value;
    if (D(A)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const r = A.slice(), o = [s];
      for (let l = 0; l < r.length && !s._stopped; l++) {
        const c = r[l];
        c && je(
          c,
          t,
          5,
          o
        );
      }
    } else
      je(
        A,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = zl(), n;
}
const $A = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, $l = (e, t, n, s, A, i) => {
  const r = A === "svg";
  t === "class" ? fl(e, s, r) : t === "style" ? ml(e, n, s) : jn(t) ? Dn(t) || yl(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : El(e, t, s, r)) ? (zA(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && kA(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Cl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ne(s))) ? zA(e, ye(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), kA(e, t, s, r));
};
function El(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $A(t) && Y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const A = e.tagName;
    if (A === "IMG" || A === "VIDEO" || A === "CANVAS" || A === "SOURCE")
      return !1;
  }
  return $A(t) && ne(n) ? !1 : t in e;
}
function Cl(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = ye(t);
  return Array.isArray(n) ? n.some((A) => ye(A) === s) : Object.keys(n).some((A) => ye(A) === s);
}
const Tn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return D(t) ? (n) => vn(t, n) : t;
};
function Ml(e) {
  e.target.composing = !0;
}
function EA(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ht = /* @__PURE__ */ Symbol("_assign"), yn = /* @__PURE__ */ Symbol("_initialValue");
function fs(e, t, n) {
  return t && (e = e.trim()), n && (e = Ln(e)), e;
}
const Ss = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, A) {
    e.parentNode && (e.type === "text" ? e[yn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[yn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[ht] = Tn(A);
    const i = s || A.props && A.props.type === "number";
    dt(e, t ? "change" : "input", (r) => {
      r.target.composing || e[ht](fs(e.value, n, i));
    }), (n || i) && dt(e, "change", () => {
      e.value = fs(e.value, n, i);
    }), t || (dt(e, "compositionstart", Ml), dt(e, "compositionend", EA), dt(e, "change", EA));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const A = t ?? "", i = e[yn];
    delete e[yn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[ht](fs(e.value, n, s)) : e.value = A;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: A, number: i } }, r) {
    if (e[ht] = Tn(r), e.composing) return;
    const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ln(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || A && e.value.trim() === l) || (e.value = l);
  }
}, Ys = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, dt(e, "change", () => {
      const A = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Ln(Pn(l)) : Pn(l)
      ), i = e.multiple, r = i ? bt(e._modelValue) ? new Set(A) : A : A[0], o = e._pendingValue = [
        i,
        i ? D(r) ? A.slice() : A : r
      ];
      try {
        e[ht](r);
      } finally {
        wi(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[ht] = Tn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    CA(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[ht] = Tn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Il(t, n[1], n[0])) && CA(e, t);
  }
};
function Il(e, t, n) {
  if (!n || D(e)) return et(e, t);
  if (bt(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function CA(e, t) {
  const n = e.multiple, s = D(t);
  if (!(n && !s && !bt(t))) {
    for (let A = 0, i = e.options.length; A < i; A++) {
      const r = e.options[A], o = Pn(r);
      if (n)
        if (s) {
          const l = typeof o;
          l === "string" || l === "number" ? r.selected = t.some((c) => String(c) === String(o)) : r.selected = jr(t, o) > -1;
        } else
          r.selected = t.has(o);
      else if (et(Pn(r), t)) {
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
const Tl = ["ctrl", "shift", "alt", "meta"], Pl = {
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
  exact: (e, t) => Tl.some((n) => e[`${n}Key`] && !t.includes(n))
}, Rl = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((A, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const o = Pl[t[r]];
      if (o && o(A, t)) return;
    }
    return e(A, ...i);
  }));
}, Nl = /* @__PURE__ */ _e({ patchProp: $l }, al);
let MA;
function Fl() {
  return MA || (MA = Go(Nl));
}
const Ol = ((...e) => {
  const t = Fl().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const A = Dl(s);
    if (!A) return;
    const i = t._component;
    !Y(i) && !i.render && !i.template && (i.template = A.innerHTML), A.nodeType === 1 && (A.textContent = "");
    const r = n(A, !1, jl(A));
    return A instanceof Element && (A.removeAttribute("v-cloak"), A.setAttribute("data-v-app", "")), r;
  }, t;
});
function jl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Dl(e) {
  return ne(e) ? document.querySelector(e) : e;
}
const Bl = "zhonglou", Ll = "钟楼", Vl = "1.2.0", Wl = "S", Gl = 10, Yl = "【副本进行中：钟楼】", Hl = [], Kl = { briefingName: "钟楼" }, Ul = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, Zl = { type: "nights", template: "剩余{n}夜" }, Jl = "至第四日日出", Ql = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], ql = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", Xl = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], ec = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], tc = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], nc = {
  id: Bl,
  name: Ll,
  version: Vl,
  level: Wl,
  players: Gl,
  token: Yl,
  legacyKeys: Hl,
  detect: Kl,
  time: Ul,
  remaining: Zl,
  deadline: Jl,
  roles: Ql,
  rolesNote: ql,
  phases: Xl,
  events: ec,
  docs: tc
}, sc = "jingjie", Ac = "境界游乐园", ic = "1.0.0", rc = "A", oc = "【副本进行中：境界游乐园】", lc = [], cc = { briefingName: "境界游乐园" }, ac = { type: "none" }, uc = { type: "fromPanel" }, fc = [], dc = [], pc = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], hc = {
  id: sc,
  name: Ac,
  version: ic,
  level: rc,
  token: oc,
  legacyKeys: lc,
  detect: cc,
  time: ac,
  remaining: uc,
  phases: fc,
  events: dc,
  docs: pc
}, mc = "kaoshi", gc = "考试", xc = "1.1.0", bc = "A", yc = "【副本进行中：考试】", vc = [], _c = { briefingName: "考试" }, wc = { type: "countdown", minutesPerRound: 3 }, kc = { type: "fromPanel" }, zc = "至考试结束", Sc = [{ id: "main", name: "考试", cap: 100, next: null }], $c = [], Ec = [], Cc = {
  id: mc,
  name: gc,
  version: xc,
  level: bc,
  token: yc,
  legacyKeys: vc,
  detect: _c,
  time: wc,
  remaining: kc,
  deadline: zc,
  phases: Sc,
  events: $c,
  docs: Ec
}, Mc = "xiyan", Ic = "喜宴", Tc = "1.1.0", Pc = "D", Rc = "【副本进行中：喜宴】", Nc = [], Fc = { briefingName: "喜宴" }, Oc = { type: "countdown", minutesPerRound: 3 }, jc = { type: "fromPanel" }, Dc = "至天亮", Bc = [{ id: "main", name: "喜宴", cap: 160, next: null }], Lc = [], Vc = [], Wc = {
  id: Mc,
  name: Ic,
  version: Tc,
  level: Pc,
  token: Rc,
  legacyKeys: Nc,
  detect: Fc,
  time: Oc,
  remaining: jc,
  deadline: Dc,
  phases: Bc,
  events: Lc,
  docs: Vc
}, Gc = "youxi", Yc = "游戏", Hc = "1.1.0", Kc = "C", Uc = "【副本进行中：游戏】", Zc = [], Jc = { briefingName: "游戏" }, Qc = { type: "countdown", minutesPerRound: 8 }, qc = { type: "fromPanel" }, Xc = "至结算", ea = [{ id: "main", name: "游戏", cap: 90, next: null }], ta = [], na = [], sa = {
  id: Gc,
  name: Yc,
  version: Hc,
  level: Kc,
  token: Uc,
  legacyKeys: Zc,
  detect: Jc,
  time: Qc,
  remaining: qc,
  deadline: Xc,
  phases: ea,
  events: ta,
  docs: na
}, Aa = "wuming", ia = "污名", ra = "1.1.0", oa = "B", la = "4-8", ca = "【副本进行中：污名】", aa = ["污名"], ua = { briefingName: "污名" }, fa = { type: "countdown", minutesPerRound: 3 }, da = { type: "countdown", template: "剩余{m}分钟" }, pa = "至收播", ha = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], ma = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], ga = [], xa = !0, ba = {
  id: Aa,
  name: ia,
  version: ra,
  level: oa,
  players: la,
  token: ca,
  legacyKeys: aa,
  detect: ua,
  time: fa,
  remaining: da,
  deadline: pa,
  phases: ha,
  events: ma,
  docs: ga,
  disableLive: xa
}, ya = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function Mt(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const va = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function IA(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(va)) {
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
function _a(e, t) {
  return e.phases.find((n) => n.id === t);
}
function on(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let A = t;
  for (; A && !s.has(A.id); )
    n.push(A), s.add(A.id), A = _a(e, A.next);
  return n;
}
function Xi(e, t) {
  return on(e, t).filter((n) => n.night).length;
}
function wa(e, t, n) {
  if (on(e, t).some((A) => A.id === n.id)) return t;
  const s = e.phases[0];
  return s && on(e, s).some((A) => A.id === n.id) ? s : n;
}
function TA(e, t, n, s, A) {
  if (!e.phases.length || !e.phases.some((a) => a.id === t.id)) return;
  let i = on(e, n), r = i.findIndex((a) => a.id === t.id);
  r < 0 && (i = on(e, t), r = 0);
  const o = i.reduce((a, p) => a + Math.max(0, p.cap), 0), l = Math.max(0, t.cap - s) + i.slice(r + 1).reduce((a, p) => a + Math.max(0, p.cap), 0), c = t.deadline ?? i[0].deadline ?? e.deadline, u = { x: l, y: o, deadline: c };
  if (e.time.type === "countdown") {
    const a = e.time.minutesPerRound, p = e.time.totalMinutes, x = p && p > 0 ? p : o * a;
    let k = p && p > 0 && o > 0 ? Math.round(x * l / o) : l * a;
    const _ = qi(A).remaining;
    _ !== null && (k = Math.min(k, _ - a)), k = Math.max(0, k), Object.assign(u, { minutes: k, total: x, text: `约剩${Mt(k)}/${Mt(x)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) u.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const a = e.remaining.template.replace("{n}", String(Xi(e, t)));
      u.text = c ? `${c}·${a}` : a;
    } else c && (u.text = c);
  return u;
}
const ln = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function er(e, t, n = ln) {
  const s = e ?? "", A = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), i = A ? Math.max(1, Number(A[1])) : Math.max(1, Math.round(n[t] ?? ln[t])), r = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!r) return { rounds: i };
  const o = Number(r[1]), l = Math.round(r[2] === "天" ? o * 1440 : r[2].includes("小时") ? o * 60 : o);
  return l <= 0 ? { rounds: i } : { rounds: i, totalMinutes: l, minutesPerRound: Math.max(1, Math.round(l / i)) };
}
const Rn = "generic", PA = [nc, hc, Cc, Wc, sa, ba], ka = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(ya)
  }
};
function za(e, t) {
  const n = ka[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const tr = ["D", "C", "B", "A", "S"];
function nr(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Rn && t.push(`id 不能是保留字 ${Rn}`), tr.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), (!n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName) && t.push("缺少 detect.briefingName");
  const A = n.time;
  !A || !["none", "clock", "countdown"].includes(A.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (A.type === "clock" && (typeof A.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(A.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), A.type !== "none" && (typeof A.minutesPerRound != "number" || A.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), A.type === "countdown" && A.totalMinutes !== void 0 && (typeof A.totalMinutes != "number" || A.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const i = n.remaining;
  !i || !["nights", "countdown", "fromPanel"].includes(i.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : i.type !== "fromPanel" && typeof i.template != "string" && t.push("remaining.template 必须是文本"), i?.type === "countdown" && A?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((c) => typeof c != "string" || !c)) && t.push("roles 必须是文本数组");
  const r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((c, u) => {
    if (!c || typeof c.id != "string" || typeof c.name != "string") {
      t.push(`phases[${u}] 缺少 id 或 name`);
      return;
    }
    r.has(c.id) && t.push(`阶段 id 重复：${c.id}`), o.has(c.name) && t.push(`阶段名称重复：${c.name}`), r.add(c.id), o.add(c.name), (typeof c.cap != "number" || c.cap < 1 || !Number.isInteger(c.cap)) && t.push(`阶段 ${c.id} 的 cap 必须是正整数`), c.next !== null && typeof c.next != "string" && t.push(`阶段 ${c.id} 的 next 必须是阶段 id 或 null`), c.deadline !== void 0 && typeof c.deadline != "string" && t.push(`阶段 ${c.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((c) => {
    c && typeof c.next == "string" && !r.has(c.next) && t.push(`阶段 ${c.id} 的 next 指向不存在的阶段：${c.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const l = /* @__PURE__ */ new Set();
  return Array.isArray(n.events) ? n.events.forEach((c, u) => {
    if (!c || typeof c.id != "string" || typeof c.text != "string") {
      t.push(`events[${u}] 缺少 id 或 text`);
      return;
    }
    l.has(c.id) && t.push(`事件 id 重复：${c.id}`), l.add(c.id), r.has(c.phase) || t.push(`事件 ${c.id} 的 phase 不存在：${c.phase}`), (!Number.isInteger(c.from) || !Number.isInteger(c.to) || c.from < 1 || c.to < c.from) && t.push(`事件 ${c.id} 的轮次区间无效`), c.kind !== "event" && c.kind !== "directive" && t.push(`事件 ${c.id} 的 kind 必须是 event 或 directive`), c.if !== void 0 && typeof c.if != "string" && t.push(`事件 ${c.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((c, u) => {
    !c || typeof c.title != "string" ? t.push(`docs[${u}] 缺少 title`) : c.md !== void 0 && typeof c.md != "string" ? t.push(`docs[${u}].md 必须是文本`) : c.image !== void 0 && typeof c.image != "string" && t.push(`docs[${u}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), t;
}
function sr(e) {
  return tr.includes(e.level ?? "") ? e.level : "D";
}
function Ar(e, t = ln) {
  const n = sr(e), s = er(e.limit, n, t), A = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, i = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / A)) : void 0;
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
function Sa(e, t) {
  return e.find((n) => n.detect.briefingName === t);
}
const $a = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, Ea = /<阶段切换>([\s\S]*?)<\/阶段切换>/, Ca = /<副本结算>([\s\S]*?)<\/副本结算>/, Ma = /<副本>([\s\S]*?)<\/副本>/, Ia = /<角色登记>([\s\S]*?)<\/角色登记>/, Ta = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/;
function cn(e) {
  const t = $a.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), A = (r) => {
    const o = new RegExp(`${r}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return o ? o[1].trim() : void 0;
  }, i = A("等级");
  return i && (n.level = i.replace(/级$/, "").trim().toUpperCase()), n.goal = A("目标"), n.limit = A("时限"), n.players = A("人数"), n;
}
function Pa(e) {
  const t = Ea.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function ir(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const A = n.slice(0, s).trim(), i = n.slice(s + 1).trim();
    A && (t[A] = i);
  }
  return t;
}
function rr(e) {
  const t = Ca.exec(e ?? "");
  if (!t) return null;
  const n = ir(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function or(e) {
  const t = Ia.exec(e ?? "");
  if (!t) return null;
  const n = ir(t[1]);
  return Object.keys(n).length ? n : null;
}
function lr(e) {
  const t = Ma.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let s = null;
  for (const A of t[1].split(`
`)) {
    const i = A.trim();
    if (!i) continue;
    const r = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(i);
    if (r) {
      const o = r[1].toLowerCase(), l = r[2].trim();
      o === "时限" ? (n.limit = l, s = null) : o === "进度条" ? (n.progressBar = l, s = null) : o === "任务" ? (l && n.tasks.push(l), s = "tasks") : (n.ps = l, s = "ps");
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
function Ra(e) {
  const t = Ta.exec(e ?? "");
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
function Na(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((o) => o.id === t.id)) return null;
  const A = (o) => !!o.clock && !o.night;
  let i = null, r = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      i = ds(e, t, A), r = i?.cap ?? 0;
      break;
    case "晚饭":
      i = ds(e, t, A), i && (r = Math.ceil(i.cap * 0.75), i.id === t.id && r <= n && (r = i.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      i = ds(e, t, (o) => !!o.night), r = i?.cap ?? 0;
      break;
  }
  return !i || i.id === t.id && r <= n + 1 ? null : { phase: i.id, round: r, label: `${i.name}第${r}轮` };
}
const RA = 5, Fa = { id: "_open", name: "进行中", cap: 0, next: null };
function it(e) {
  return !!e && !e.is_user && !e.is_system;
}
function Oa(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function cr(e, t, n) {
  const s = Oa(e) + Math.max(0, n - 1) * t, A = Math.floor(s / 60) % 24, i = (s % 60 + 60) % 60;
  return `${A % 12 === 0 ? 12 : A % 12}:${String(i).padStart(2, "0")}`;
}
function NA(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return cr(e.time.dayStart, e.time.minutesPerRound, n);
}
function ar(e) {
  return e.phases.length ? e.phases : [Fa];
}
function wn(e, t) {
  return ar(e).find((n) => n.id === t);
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
  const A = n + 1, i = e.events.filter((r) => r.phase === t.id);
  if (s) {
    const r = t.id === s.phase ? s.round : t.cap;
    if (r > A) {
      let o = i.map((c, u) => ({ e: c, i: u })).filter(({ e: c }) => c.from >= A && c.from <= r).sort((c, u) => c.e.from - u.e.from || c.i - u.i).map(({ e: c }) => c), l = r;
      return o.length > RA && (l = o[RA - 1].from, o = o.filter((c) => c.from <= l)), { phase: t, round: l, events: o, skipFrom: A };
    }
  }
  return { phase: t, round: A, events: i.filter((r) => r.from === A) };
}
function ja(e, t, n) {
  const s = t.entryIndex;
  if (!it(e[s])) return null;
  const A = ar(n);
  let i = A[0], r = A[0], o = 0, l, c = !1, u, a = null, p, x, k;
  const _ = /* @__PURE__ */ new Set(), B = {}, j = /* @__PURE__ */ new Map();
  for (const X of t.manual ?? [])
    j.has(X.atIndex) || j.set(X.atIndex, []), j.get(X.atIndex).push(X);
  const O = (X) => {
    n.phases.length && (r = wa(n, r, X)), i = X, o = 0, a && !FA(n, i, a.phase) && (a = null);
  };
  for (let X = s; X < e.length; X++) {
    const Ot = e[X];
    if (!c && it(Ot)) {
      const ce = OA(n, i, o, a);
      o = ce.round, ce.events.forEach((Se) => _.add(Se.id)), B[X] = {
        phase: i.id,
        round: o,
        events: ce.events.map((Se) => Se.id),
        skipFrom: ce.skipFrom,
        limit: TA(n, i, r, o, l)
      }, a && i.id === a.phase && o >= a.round && (a = null);
      const ze = String(Ot.mes ?? ""), zt = lr(ze);
      zt && (x = zt), l = zt?.limit;
      const dn = or(ze);
      dn && (k = dn);
      const jt = rr(ze);
      if (jt)
        c = !0, u = "tag", p = jt;
      else {
        const Se = Pa(ze), St = Se ? A.find(($t) => $t.name === Se) : void 0;
        if (St && n.phases.length)
          O(St);
        else if (i.cap > 0 && o >= i.cap && i.next) {
          const $t = wn(n, i.next);
          $t && O($t);
        }
      }
    }
    for (const ce of j.get(X) ?? []) {
      if (c) break;
      switch (ce.kind) {
        case "skip": {
          a = wn(n, ce.targetPhase) && FA(n, i, ce.targetPhase) ? { phase: ce.targetPhase, round: ce.targetRound } : null;
          break;
        }
        case "setPhase": {
          const ze = wn(n, ce.phase);
          ze && (a = null, O(ze));
          break;
        }
        case "setRound":
          o = Math.max(0, Math.floor(ce.round)), a = null;
          break;
        case "end":
          c = !0, u = "manual";
          break;
      }
    }
  }
  const L = c ? null : OA(n, i, o, a), P = L ? L.round : o + 1, ee = i.cap > 0, we = n.events.filter((X) => _.has(X.id)).map((X) => X.id), he = c ? void 0 : TA(n, i, r, P, l);
  let ke;
  const kt = n.remaining;
  return !c && kt.type === "nights" && n.phases.length && !i.byTag && !i.frozen ? ke = kt.template.replace("{n}", String(Xi(n, i))) : !c && kt.type === "countdown" && he?.minutes !== void 0 && (ke = kt.template.replace("{m}", String(he.minutes))), {
    phase: i,
    round: o,
    nextRound: P,
    clock: c ? void 0 : NA(n, i, P),
    currentClock: NA(n, i, o),
    remainingText: ke,
    limit: he,
    chainStart: n.phases.length ? r.id : void 0,
    ended: c,
    endedBy: u,
    firedEvents: we,
    warn: !c && ee && P >= i.cap - 2,
    isLastRound: !c && ee && P === i.cap,
    overdue: !c && ee && !i.next && P > i.cap,
    next: L,
    skipGoal: a,
    settlement: p,
    panel: x,
    rolesFromChat: k,
    perMessage: B,
    entryIndex: s
  };
}
const ur = "rlzc_token", fr = "rlzc_progress", dr = "rlzc_turn", Da = [ur, fr, dr], Qn = { token: "", progress: "", turn: "", injected: [] };
function Ba(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function jA(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const A = new RegExp(`(?<!\\{)\\{(${s.map(Ba).join("|")})\\}(?!\\})`, "g");
  return e.replace(A, (i, r) => n?.[r]?.trim() || r);
}
function La(e, t) {
  if (!t.length) return "";
  const n = e.events.map((l) => l.id), s = t.map((l) => n.indexOf(l)).filter((l) => l >= 0).sort((l, c) => l - c), A = [];
  let i = s[0], r = s[0];
  const o = () => A.push(i === r ? n[i] : `${n[i]}–${n[r]}`);
  for (let l = 1; l < s.length; l++) {
    if (s[l] === r + 1) {
      r = s[l];
      continue;
    }
    o(), i = r = s[l];
  }
  return o(), A.join("、");
}
function DA(e, t, n) {
  let s = jA(e.text, t, n);
  return e.to > e.from && (s = `在本阶段第${e.from}到${e.to}轮之间发生：${s}`), e.if && (s += `（条件：${jA(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${s}`;
}
function Va(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Wa(e, t, n, s = {}) {
  if (!t || !n || t.ended || n.status !== "active") return Qn;
  const A = s.roles, i = e.phases.length > 0, r = t.next, o = [`副本：${e.name}（${e.level}级）`], l = t.limit;
  if (i)
    o.push(`阶段：${t.phase.name}`), o.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), l && o.push(`剩余${l.x}/${l.y}轮`), t.clock && o.push(`钟时：${t.clock}`), l?.text && o.push(`时限：${l.text}`), e.remaining.type === "countdown" && t.remainingText && o.push(t.remainingText), l?.deadline && !l.text?.includes(l.deadline) && o.push(`截止：${l.deadline}`);
  else {
    o.push(`本轮：第${t.nextRound}轮`), t.clock && o.push(`钟时：${t.clock}`);
    const _ = s.panelLimit || s.briefing?.limit;
    _ && o.push(`时限：${_}`);
  }
  const c = ["［副本进度·仅供AI］", o.join("　")];
  if (s.briefing?.goal && (!i || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const _ = e.roles.filter((B) => A?.[B]);
    c.push(
      _.length ? `角色登记：${e.roles.map((B) => `${B}=${A?.[B] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const u = La(e, t.firedEvents);
  u && c.push(`已发生事件：${u}`);
  const a = [];
  r.skipFrom !== void 0 && a.push(`玩家选择快进：本轮从「${t.phase.name}」第${r.skipFrom}轮快进到第${r.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const p = r.events.filter((_) => _.kind === "event"), x = r.events.filter((_) => _.kind === "directive");
  if (p.length && (a.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), p.forEach((_) => a.push(DA(_, e, A)))), x.length && (a.push("本轮写作要求："), x.forEach((_) => a.push(DA(_, e, A)))), t.isLastRound ? a.push(Va(t)) : t.overdue && a.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && a.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && a.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((_) => A?.[_])) {
    let _ = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((B) => `${B}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (_ += "死者不得是{{user}}或其同伴。"), a.push(_);
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
    injected: r.events.map((_) => _.id),
    limit: k
  };
}
const $s = "rlzc", pr = "rlzc_memo";
function Ga() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function Ya(e, t, n) {
  return {
    id: Ga(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function Ha(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function Ka(e, t) {
  return e.packId === Rn ? e.briefing ? Ar(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function Ua(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id) {
    const s = e[t.entryIndex];
    return s && !s.is_user && !s.is_system ? t.entryIndex : -1;
  }
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function Za(e, t) {
  const n = Ua(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((A) => ({ ...A, atIndex: A.atIndex + s }))), t.manual = t.manual.filter((A) => A.atIndex < e.length && A.atIndex >= t.entryIndex), !0;
}
function hr(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Xt = "rlzc_declined";
function Es(e, t) {
  return `${e}:${t}`;
}
function Ja(e, t, n = []) {
  if (t?.status === "active") return null;
  const s = e.findIndex((i) => !!i && !i.is_user && !i.is_system);
  if (s < 0 || t && t.entryIndex === s) return null;
  const A = cn(String(e[s].mes ?? ""));
  return !A || n.includes(Es(s, A.name)) ? null : { index: s, info: A };
}
const Qa = 1, qa = 0;
function be() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function Xa() {
  const e = be();
  return e.eventTypes ?? e.event_types ?? {};
}
function Ze(e, t) {
  const n = Xa()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  be().eventSource.on(n, t);
}
function pe() {
  return be().chat ?? [];
}
function Ks() {
  const e = be();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function Ft() {
  return be().chatMetadata ?? {};
}
function fn() {
  const e = be();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function kn(e, t, n, s) {
  be().setExtensionPrompt(e, t, Qa, n, s, qa);
}
function rt(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Ue(e) {
  const t = be();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
const Nt = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function mr(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function eu(e, t = Nt) {
  return t.length ? e.replace(mr(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function gr(e, t = Nt, n = !1) {
  const s = pe()[e];
  if (!s || s.is_user) return;
  const A = String(s.extra?.display_text ?? s.mes ?? "");
  if (!mr(n ? Nt : t, "").test(A)) return;
  const i = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!i) return;
  const r = be().messageFormatting;
  if (typeof r != "function") return;
  const o = r(eu(A, t), s.name ?? "", !!s.is_system, !1, e);
  i.innerHTML !== o && (i.innerHTML = o);
}
function tu(e = Nt, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && gr(s, e, t);
  });
}
const nu = /[■█▰●◆★▮▓]/g, su = /[□░▱○◇☆▯▒]/g;
function Au(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const i = Number(n[2]);
    return i === 100 ? Number(n[1]) : i > 0 ? Math.round(Number(n[1]) / i * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(nu) ?? []).length, A = (t.match(su) ?? []).length;
  return s + A > 0 ? Math.round(s / (s + A) * 100) : null;
}
function BA(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function iu(e, t) {
  return BA(e).includes(BA(t));
}
function ru(e, t, n) {
  const s = [], A = Object.keys(n.perMessage).map(Number).sort((l, c) => l - c);
  let i = !1, r = null, o = !1;
  for (const l of A) {
    const c = n.perMessage[l], a = t.phases.find((O) => O.id === c.phase)?.name ?? "进行中", p = (O, L) => s.push({ index: l, phase: a, round: c.round, kind: O, text: L }), x = lr(String(e[l]?.mes ?? "")), k = l === n.entryIndex;
    if (!x) {
      k || p("missing", "本轮回复缺少 <副本> 面板"), o = !k;
      continue;
    }
    o = !1;
    const _ = Au(x.progressBar);
    x.progressBar === void 0 ? p("progressUnreadable", "<副本> 中没有进度条一栏") : _ === null ? p("progressUnreadable", `进度条无法读出数值：「${x.progressBar}」`) : (!i && _ !== 0 && p("progressStart", `入场后第一轮的进度条应为0，实际为 ${_}`), (_ < 0 || _ > 100) && p("progressRange", `进度条数值 ${_} 超出 0–100`), r !== null && _ < r && p("progressDrop", `进度条比上一轮低：${r} → ${_}`), r = _), i = !0;
    const B = e[l]?.extra?.rlzc?.limit, j = B?.text ? B : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (j) {
      const O = x.limit;
      if (j.minutes !== void 0) {
        const L = qi(O);
        !O || L.remaining === null || L.total === null ? p("limit", `时限读不到「剩余时间/总时长」：写的是「${O ?? "（没有时限一栏）"}」，注入的是「${j.text}」`) : (L.remaining > j.minutes && p("limit", `剩余时间比注入值多：写的是${Mt(L.remaining)}，注入的是${Mt(j.minutes)}`), j.total !== void 0 && L.total !== j.total && p("limit", `总时长与注入值不一致：写的是${Mt(L.total)}，注入的是${Mt(j.total)}`));
      } else (!O || !iu(O, j.text)) && p("limit", `时限与注入文字不一致：写的是「${O ?? "（没有时限一栏）"}」，注入的是「${j.text}」`);
    }
  }
  return { warnings: s, missingLast: o, hasPanel: i };
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
function xr(e) {
  return JSON.parse(JSON.stringify(e));
}
function ou(...e) {
  m.settings.debug && console.log("[rlzc]", ...e);
}
function lu() {
  const e = be().extensionSettings, t = e[Cs] ?? {}, n = {
    ...structuredClone(zn),
    ...t,
    depths: { ...zn.depths, ...t.depths ?? {} },
    ball: { ...zn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => nr(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...ln, ...t.genericCaps ?? {} }
  };
  e[Cs] = n, m.settings = n, m.packs = Hs(n.customPacks);
}
function He() {
  be().extensionSettings[Cs] = JSON.parse(JSON.stringify(m.settings)), be().saveSettingsDebounced(), m.packs = Hs(m.settings.customPacks);
}
function cu(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = nr(t);
  if (n.length) return n;
  const s = t;
  return Hs([]).some((A) => A.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (m.settings.customPacks = [...m.settings.customPacks.filter((A) => A.id !== s.id), s], He(), []);
}
function au(e) {
  m.settings.customPacks = m.settings.customPacks.filter((t) => t.id !== e), He();
}
function wt() {
  return Ha(Ft()[$s]);
}
function vt(e) {
  const t = Ft();
  e ? t[$s] = JSON.parse(JSON.stringify(e)) : delete t[$s], fn();
}
function Us(e) {
  const t = wt();
  t && (e(t), vt(t), ot());
}
function uu(e) {
  const t = pe();
  return (e === "swipe" || e === "continue") && it(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Nn(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Ka(t, m.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = ja(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? ru(e, n, s) : null };
}
function ot() {
  const e = pe();
  let t = wt();
  if (t) {
    const s = JSON.stringify(t);
    if (!Za(e, t))
      vt(null), rt("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const A = Nn(e, t);
      A.progress && (t.status = A.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && vt(t);
    }
  }
  const n = Nn(e, t);
  m.session = n.session, m.pack = n.pack, m.progress = n.progress, m.audit = n.audit, m.tick++;
}
function fu() {
  if (m.session)
    return hr(m.session, m.progress?.rolesFromChat);
}
function Fn() {
  for (const e of Da) kn(e, "", 0, !1);
}
let On = -1;
function du(e) {
  const t = uu(e), n = wt(), { pack: s, progress: A, audit: i } = Nn(t, n), r = n ? hr(n, A?.rolesFromChat) : void 0, o = s ? Wa(s, A, n, { roles: r, briefing: n?.briefing, panelLimit: A?.panel?.limit, audit: i ?? void 0 }) : Qn;
  Fn();
  const l = m.settings.depths;
  o.token && kn(ur, o.token, l.token, !0), o.progress && kn(fr, o.progress, l.progress, !1), o.turn && kn(dr, o.turn, l.turn, !1), m.lastInjection = o, On = t.length, ou("注入", e, o);
}
const Ms = /* @__PURE__ */ new Set();
async function pu() {
  const e = pe(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Ra(n.mes);
  if (!s) return;
  const A = wt();
  if (!A || A.status !== "active" || A.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const i = `${Ks()}:${t}:${n.mes}`;
  if (Ms.has(i)) return;
  Ms.add(i);
  const { pack: r, progress: o } = Nn(e, A);
  if (!r || !o || o.ended) return;
  const l = Na(r, o.phase, o.round, s);
  l && await Ue(`是否跳到${s}？（${l.label}）`) && (A.manual.push({ kind: "skip", atIndex: t, targetPhase: l.phase, targetRound: l.round }), vt(A));
}
async function hu(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Fn();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await pu(), du(s);
  } catch (A) {
    console.error("[rlzc] 拦截器出错", A), Fn();
  }
}
const LA = /* @__PURE__ */ new Set();
async function br(e, t = !1) {
  const s = pe()[e], A = cn(s?.mes ?? "");
  if (!A) return;
  const i = `${Ks()}:${e}:${A.name}`;
  if (LA.has(i)) return;
  LA.add(i);
  const r = Sa(m.packs, A.name), o = r ? `检测到进入《${r.name}》，是否启用？` : `检测到进入《${A.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!await Ue(o)) {
    if (t) {
      const c = Ft(), u = Array.isArray(c[Xt]) ? c[Xt] : [];
      c[Xt] = [...u.filter((a) => a !== Es(e, A.name)), Es(e, A.name)], fn();
    }
    return;
  }
  const l = pe()[e];
  if (!it(l) || cn(l.mes)?.name !== A.name) {
    rt("warning", "简报消息已变化，未启用。");
    return;
  }
  r || (A.rounds = er(A.limit, sr(A), m.settings.genericCaps).rounds), yr(r ?? Ar(A, m.settings.genericCaps), e, A);
}
function Zs() {
  const e = Ft(), t = Array.isArray(e[Xt]) ? e[Xt] : [], n = Ja(pe(), wt(), t);
  n && br(n.index, !0);
}
function mu(e) {
  ot();
  const t = pe().findIndex((n) => it(n));
  e === t && Zs();
}
function yr(e, t, n) {
  const A = pe()[t], i = Ya(e, t, n);
  A.extra = A.extra ?? {}, A.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: i.id }, vt(i), ot(), m.progress && (A.extra.rlzc.injected = xr(m.progress.perMessage[t]?.events ?? [])), fn(), rt("success", `已进入副本《${e.name}》。`);
}
async function gu(e) {
  const t = m.packs.find((i) => i.id === e);
  if (!t) return;
  const n = pe();
  let s = n.length - 1;
  for (; s >= 0 && !it(n[s]); ) s--;
  if (s < 0) {
    rt("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  wt()?.status === "active" && !await Ue("当前已有进行中的副本，确定要替换吗？") || await Ue(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && yr(t, s, cn(n[s].mes) ?? { name: t.name });
}
function qn(e) {
  Us((t) => t.manual.push(e));
}
function Xn() {
  return pe().length - 1;
}
async function VA() {
  const e = m.progress;
  if (!(!e || e.ended || !m.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      rt("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ue(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (qn({ kind: "skip", atIndex: Xn(), targetPhase: e.phase.id, targetRound: e.phase.cap }), rt("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function WA() {
  !m.session || m.progress?.ended || await Ue("确定要手动结束当前副本吗？") && qn({ kind: "end", atIndex: Xn() });
}
function xu(e) {
  qn({ kind: "setPhase", atIndex: Xn(), phase: e });
}
function bu(e) {
  qn({ kind: "setRound", atIndex: Xn(), round: e });
}
function yu(e) {
  Us((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function vu(e) {
  Us((t) => t.manual.splice(e, 1));
}
async function GA() {
  m.session && await Ue("确定要删除当前副本会话吗？（不会改动聊天记录）") && (vt(null), ot());
}
function YA(e) {
  m.memo = e, Ft()[pr] = e, fn();
}
function _u(e) {
  const t = pe(), n = t[e];
  if (!it(n)) return;
  const s = wt();
  if ((!s || s.status === "ended") && cn(n.mes)) {
    e === t.findIndex((o) => it(o)) ? Zs() : br(e);
    return;
  }
  if (!s) return;
  const A = or(n.mes);
  A && (s.roles = { ...s.roles ?? {}, ...A }), vt(s), ot();
  const i = m.progress?.perMessage[e];
  if (i && m.pack) {
    const o = m.pack.phases.find((p) => p.id === i.phase), l = {
      phase: o?.name ?? i.phase,
      round: i.round,
      injected: On === e ? m.lastInjection.injected : i.events
    }, c = m.pack.time;
    c.type === "clock" && o?.clock && !o.night && !o.frozen && (l.clock = cr(c.dayStart, c.minutesPerRound, i.round));
    const u = On === e ? m.lastInjection.limit : i.limit?.text ? { text: i.limit.text, minutes: i.limit.minutes, total: i.limit.total } : void 0;
    u && (l.limit = u);
    const a = n.extra?.rlzc?.entry;
    a && (l.entry = a), n.extra = n.extra ?? {}, n.extra.rlzc = xr(l), fn(), ot();
  }
  const r = rr(n.mes);
  r && rt("info", `副本结算：${r.result ?? "—"}${r.rating ? `，评价 ${r.rating}` : ""}`);
}
function HA() {
  Ms.clear(), On = -1, m.chatId = Ks(), m.debugUnlocked = !1, m.lastInjection = Qn, Fn();
  const e = Ft()[pr];
  m.memo = typeof e == "string" ? e : "", ot(), Zs(), setTimeout(() => Js(), 50);
}
function ps() {
  ot();
}
function vr() {
  return m.settings.panelDisplay === "statusbar" ? Nt.filter((e) => e !== "副本") : Nt;
}
function hs(e) {
  gr(e, vr());
}
function Js(e = !1) {
  tu(vr(), e);
}
function wu(e) {
  m.settings.panelDisplay !== e && (m.settings.panelDisplay = e, He(), Js(!0));
}
const ku = { class: "rlzc-ball-mark" }, ms = 44, zu = /* @__PURE__ */ ct({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ Oe({ x: 0, y: 0 });
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
    function r(u) {
      !n || n.id !== u.pointerId || (Math.abs(u.clientX - n.sx) + Math.abs(u.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(u.clientX - n.dx, u.clientY - n.dy)));
    }
    function o(u) {
      if (!n || n.id !== u.pointerId) return;
      const a = n.moved;
      n = null, a ? (m.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, He()) : m.panelOpen = !m.panelOpen;
    }
    const l = se(() => !!m.session && !m.progress?.ended), c = se(() => !!m.progress?.warn);
    return yt(() => m.settings.ball, A, { deep: !0 }), So(() => {
      A(), window.addEventListener("resize", A);
    }), Ii(() => window.removeEventListener("resize", A)), (u, a) => (E(), M("button", {
      class: lt(["rlzc-ball", { "is-active": l.value, "is-warn": c.value }]),
      style: Wn({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: i,
      onPointermove: r,
      onPointerup: o,
      onPointercancel: o
    }, [
      h("span", ku, I(l.value ? T(m).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
}), Su = { class: "rlzc-system" }, $u = { class: "rlzc-card rlzc-hero" }, Eu = { class: "rlzc-hero-top" }, Cu = { class: "rlzc-level" }, Mu = {
  key: 0,
  class: "rlzc-chip"
}, Iu = {
  key: 0,
  class: "rlzc-goal"
}, Tu = { class: "rlzc-grid" }, Pu = {
  key: 0,
  class: "rlzc-stat"
}, Ru = {
  key: 1,
  class: "rlzc-stat"
}, Nu = {
  key: 2,
  class: "rlzc-stat"
}, Fu = {
  key: 3,
  class: "rlzc-stat"
}, Ou = {
  key: 0,
  class: "rlzc-note"
}, ju = {
  key: 1,
  class: "rlzc-card"
}, Du = { class: "rlzc-kv" }, Bu = { class: "rlzc-kv" }, Lu = {
  key: 2,
  class: "rlzc-note"
}, Vu = {
  key: 3,
  class: "rlzc-card"
}, Wu = {
  key: 0,
  class: "rlzc-kv"
}, Gu = { class: "rlzc-mono" }, Yu = {
  key: 1,
  class: "rlzc-tasks"
}, Hu = {
  key: 2,
  class: "rlzc-ps"
}, Ku = { class: "rlzc-actions" }, Uu = ["disabled"], Zu = ["disabled"], Ju = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, Qu = { class: "rlzc-card" }, qu = { class: "rlzc-row" }, Xu = ["value"], ef = ["disabled"], tf = /* @__PURE__ */ ct({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ Oe(""), n = se(() => !!m.session && !!m.pack), s = se(() => m.progress), A = se(() => !!m.pack?.phases.length), i = se(() => m.settings.panelDisplay !== "statusbar"), r = se(() => {
      const u = s.value;
      return u ? A.value ? `${u.warn ? "⚠️ " : ""}${u.round}/${u.phase.cap}` : `第${u.round}轮` : "";
    }), o = se(() => {
      const u = s.value;
      return u ? u.limit?.text ? u.limit.text : u.panel?.limit || m.session?.briefing?.limit || "—" : "";
    }), l = se(() => {
      const u = s.value;
      return !!u && !u.ended && A.value && u.phase.cap > 0 && u.nextRound < u.phase.cap;
    });
    async function c() {
      t.value && (await gu(t.value), t.value = "");
    }
    return (u, a) => (E(), M("div", Su, [
      n.value && s.value ? (E(), M(U, { key: 0 }, [
        h("div", $u, [
          h("div", Eu, [
            h("span", Cu, I(T(m).pack.level), 1),
            h("h3", null, I(T(m).pack.name), 1),
            s.value.ended ? (E(), M("span", Mu, "已结束")) : q("", !0)
          ]),
          T(m).session?.briefing?.goal ? (E(), M("p", Iu, "目标：" + I(T(m).session.briefing.goal), 1)) : q("", !0)
        ]),
        h("div", Tu, [
          A.value ? (E(), M("div", Pu, [
            a[3] || (a[3] = h("span", null, "阶段", -1)),
            h("b", null, I(s.value.phase.name), 1)
          ])) : q("", !0),
          h("div", {
            class: lt(["rlzc-stat", { warn: s.value.warn }])
          }, [
            a[4] || (a[4] = h("span", null, "轮次", -1)),
            h("b", null, I(r.value), 1)
          ], 2),
          s.value.currentClock ? (E(), M("div", Ru, [
            a[5] || (a[5] = h("span", null, "钟时", -1)),
            h("b", null, I(s.value.currentClock), 1)
          ])) : q("", !0),
          s.value.limit ? (E(), M("div", Nu, [
            a[6] || (a[6] = h("span", null, "剩余轮数", -1)),
            h("b", null, I(s.value.limit.x) + "/" + I(s.value.limit.y), 1)
          ])) : q("", !0),
          i.value ? (E(), M("div", Fu, [
            a[7] || (a[7] = h("span", null, "剩余时间", -1)),
            h("b", null, I(o.value), 1)
          ])) : q("", !0)
        ]),
        s.value.skipGoal ? (E(), M("div", Ou, "快进中：目标 " + I(T(m).pack.phases.find((p) => p.id === s.value.skipGoal.phase)?.name) + " 第" + I(s.value.skipGoal.round) + "轮", 1)) : q("", !0),
        s.value.ended && s.value.settlement ? (E(), M("div", ju, [
          h("div", Du, [
            a[8] || (a[8] = h("span", null, "结果", -1)),
            h("b", null, I(s.value.settlement.result ?? "—"), 1)
          ]),
          h("div", Bu, [
            a[9] || (a[9] = h("span", null, "评价", -1)),
            h("b", null, I(s.value.settlement.rating ?? "—"), 1)
          ])
        ])) : s.value.ended ? (E(), M("div", Lu, "副本已手动结束。")) : q("", !0),
        i.value && s.value.panel ? (E(), M("div", Vu, [
          s.value.panel.progressBar ? (E(), M("div", Wu, [
            a[10] || (a[10] = h("span", null, "进度", -1)),
            h("b", Gu, I(s.value.panel.progressBar), 1)
          ])) : q("", !0),
          s.value.panel.tasks.length ? (E(), M("div", Yu, [
            a[11] || (a[11] = h("span", null, "任务", -1)),
            h("ul", null, [
              (E(!0), M(U, null, fe(s.value.panel.tasks, (p, x) => (E(), M("li", { key: x }, I(p), 1))), 128))
            ])
          ])) : q("", !0),
          s.value.panel.ps ? (E(), M("div", Hu, "ps：" + I(s.value.panel.ps), 1)) : q("", !0)
        ])) : q("", !0),
        h("div", Ku, [
          h("button", {
            class: "rlzc-btn",
            disabled: !l.value,
            onClick: a[0] || (a[0] = //@ts-ignore
            (...p) => T(VA) && T(VA)(...p))
          }, "跳过（到本阶段结束）", 8, Uu),
          h("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: a[1] || (a[1] = //@ts-ignore
            (...p) => T(WA) && T(WA)(...p))
          }, "手动结束副本", 8, Zu)
        ])
      ], 64)) : (E(), M("div", Ju, [...a[12] || (a[12] = [
        h("h3", null, "休整中", -1),
        h("p", null, "当前在回廊里，没有进行中的副本，也不会注入任何提示词。", -1)
      ])])),
      h("div", Qu, [
        a[14] || (a[14] = h("label", { class: "rlzc-label" }, "手动选择副本（以最新一条AI回复为第1轮）", -1)),
        h("div", qu, [
          Tt(h("select", {
            "onUpdate:modelValue": a[2] || (a[2] = (p) => t.value = p),
            class: "rlzc-input"
          }, [
            a[13] || (a[13] = h("option", { value: "" }, "选择副本…", -1)),
            (E(!0), M(U, null, fe(T(m).packs, (p) => (E(), M("option", {
              key: p.id,
              value: p.id
            }, I(p.level) + "｜" + I(p.name), 9, Xu))), 128))
          ], 512), [
            [Ys, t.value]
          ]),
          h("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: c
          }, "进入", 8, ef)
        ])
      ])
    ]));
  }
});
function nf(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Gt(e) {
  return nf(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function sf(e) {
  const t = [];
  let n = null, s = [];
  const A = () => {
    s.length && t.push(`<p>${s.map(Gt).join("<br>")}</p>`), s = [];
  }, i = () => {
    n && t.push(`</li></${n}>`), n = null;
  };
  for (const r of e.replace(/\r/g, "").split(`
`)) {
    const o = r.trimEnd();
    if (!o.trim()) {
      A(), i();
      continue;
    }
    const l = /^(#{1,4})\s+(.*)$/.exec(o);
    if (l) {
      A(), i();
      const p = Math.min(l[1].length + 2, 6);
      t.push(`<h${p}>${Gt(l[2])}</h${p}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(o), u = /^\s*(\d+)[.、]\s+(.*)$/.exec(o);
    if (c || u) {
      A();
      const p = c ? "ul" : "ol", x = c ? c[1] : u[2];
      n !== p ? (i(), n = p, t.push(p === "ol" ? `<ol start="${u[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Gt(x));
      continue;
    }
    if (n && /^\s{2,}/.test(r)) {
      t.push(`<br>${Gt(o.trim())}`);
      continue;
    }
    const a = /^>\s?(.*)$/.exec(o);
    if (a) {
      A(), i(), t.push(`<blockquote>${Gt(a[1])}</blockquote>`);
      continue;
    }
    i(), s.push(o);
  }
  return A(), i(), t.join("");
}
const Af = { class: "rlzc-docs" }, rf = {
  key: 0,
  class: "rlzc-row"
}, of = ["value"], lf = { class: "rlzc-subtabs" }, cf = ["onClick"], af = { class: "rlzc-md" }, uf = ["innerHTML"], ff = ["src", "alt"], df = {
  key: 2,
  class: "rlzc-note"
}, pf = {
  key: 2,
  class: "rlzc-note"
}, hf = /* @__PURE__ */ ct({
  __name: "DocsTab",
  setup(e) {
    const t = se(() => !!m.session && !!m.pack), n = se(() => t.value ? [m.pack] : m.packs.filter((c) => c.docs?.length)), s = /* @__PURE__ */ Oe(""), A = /* @__PURE__ */ Oe(0);
    yt(
      n,
      (c) => {
        c.some((u) => u.id === s.value) || (s.value = c[0]?.id ?? "");
      },
      { immediate: !0 }
    ), yt(s, () => A.value = 0);
    const i = se(() => n.value.find((c) => c.id === s.value)), r = se(() => i.value?.docs?.[A.value]), o = se(() => r.value?.md ? sf(r.value.md) : ""), l = se(() => i.value && r.value?.image ? za(i.value, r.value.image) : null);
    return (c, u) => (E(), M("div", Af, [
      !t.value && n.value.length > 1 ? (E(), M("div", rf, [
        Tt(h("select", {
          "onUpdate:modelValue": u[0] || (u[0] = (a) => s.value = a),
          class: "rlzc-input"
        }, [
          (E(!0), M(U, null, fe(n.value, (a) => (E(), M("option", {
            key: a.id,
            value: a.id
          }, I(a.name), 9, of))), 128))
        ], 512), [
          [Ys, s.value]
        ])
      ])) : q("", !0),
      i.value && i.value.docs?.length ? (E(), M(U, { key: 1 }, [
        h("div", lf, [
          (E(!0), M(U, null, fe(i.value.docs, (a, p) => (E(), M("button", {
            key: p,
            class: lt({ on: A.value === p }),
            onClick: (x) => A.value = p
          }, I(a.title), 11, cf))), 128))
        ]),
        h("article", af, [
          o.value ? (E(), M("div", {
            key: 0,
            innerHTML: o.value
          }, null, 8, uf)) : q("", !0),
          l.value ? (E(), M("img", {
            key: 1,
            src: l.value,
            alt: r.value?.title,
            class: "rlzc-img"
          }, null, 8, ff)) : r.value?.image && !l.value ? (E(), M("p", df, "图片无法加载：" + I(r.value.image), 1)) : q("", !0)
        ])
      ], 64)) : (E(), M("p", pf, I(t.value ? "本副本没有公开资料" : "暂无可浏览的副本资料。"), 1))
    ]));
  }
}), mf = { class: "rlzc-memo" }, gf = { class: "rlzc-hint" }, xf = /* @__PURE__ */ ct({
  __name: "MemoTab",
  setup(e) {
    const t = /* @__PURE__ */ Oe(m.memo), n = /* @__PURE__ */ Oe(!0);
    let s;
    yt(() => m.memo, (i) => {
      i !== t.value && (t.value = i);
    }), yt(() => m.chatId, () => {
      clearTimeout(s), n.value = !0, t.value = m.memo;
    }), Ii(() => {
      clearTimeout(s), n.value || YA(t.value);
    });
    function A() {
      n.value = !1, clearTimeout(s), s = setTimeout(() => {
        YA(t.value), n.value = !0;
      }, 600);
    }
    return (i, r) => (E(), M("div", mf, [
      Tt(h("textarea", {
        "onUpdate:modelValue": r[0] || (r[0] = (o) => t.value = o),
        class: "rlzc-input rlzc-textarea",
        placeholder: "记点什么……（按聊天保存，不会发给AI）",
        onInput: A
      }, null, 544), [
        [Ss, t.value]
      ]),
      h("div", gf, I(n.value ? "已自动保存" : "保存中…"), 1)
    ]));
  }
}), bf = { class: "rlzc-settings" }, yf = { class: "rlzc-card" }, vf = ["value"], _f = { class: "rlzc-hint" }, wf = { class: "rlzc-card" }, kf = { class: "rlzc-field" }, zf = ["value"], Sf = { class: "rlzc-field" }, $f = ["value"], Ef = { class: "rlzc-field" }, Cf = ["value"], Mf = { class: "rlzc-card" }, If = ["value", "onChange"], Tf = { class: "rlzc-card" }, Pf = {
  key: 0,
  class: "rlzc-list"
}, Rf = ["onClick"], Nf = {
  key: 1,
  class: "rlzc-hint"
}, Ff = {
  key: 2,
  class: "rlzc-errors"
}, Of = { class: "rlzc-card" }, jf = { class: "rlzc-check" }, Df = ["checked"], Bf = { class: "rlzc-check" }, Lf = ["checked"], Vf = /* @__PURE__ */ ct({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ Oe([]), n = /* @__PURE__ */ Oe(null);
    function s(u, a) {
      const p = Math.max(0, Math.min(1e4, Math.floor(Number(a.target.value) || 0)));
      m.settings.depths[u] = p, He();
    }
    async function A(u) {
      const a = u.target, p = a.files?.[0];
      a.value = "", p && (t.value = cu(await p.text()), t.value.length || rt("success", `已导入副本包：${p.name}`));
    }
    async function i(u, a) {
      await Ue(`确定删除自定义副本包《${a}》吗？`) && au(u);
    }
    const r = ["D", "C", "B", "A", "S"];
    function o(u, a) {
      const p = Math.floor(Number(a.target.value));
      !Number.isFinite(p) || p < 1 || (m.settings.genericCaps = { ...m.settings.genericCaps, [u]: p }, He());
    }
    function l(u) {
      wu(u.target.value);
    }
    function c(u, a) {
      m.settings[u] = a.target.checked, He();
    }
    return (u, a) => (E(), M("div", bf, [
      h("div", yf, [
        a[7] || (a[7] = h("h4", null, "副本信息显示位置", -1)),
        h("select", {
          class: "rlzc-input",
          value: T(m).settings.panelDisplay,
          onChange: l
        }, [...a[6] || (a[6] = [
          h("option", { value: "panel" }, "扩展面板（默认）", -1),
          h("option", { value: "statusbar" }, "正文状态栏", -1)
        ])], 40, vf),
        h("p", _f, I(T(m).settings.panelDisplay === "statusbar" ? "正文中保留 <副本> 标签，由你的状态栏显示；系统页不再显示时限、进度条、任务和 ps。" : "正文中隐藏 <副本> 标签，时限、进度条、任务和 ps 显示在系统页。") + " 两种方式下扩展都会读取 <副本> 做核对。 ", 1)
      ]),
      h("div", wf, [
        a[11] || (a[11] = h("h4", null, "注入深度", -1)),
        h("label", kf, [
          a[8] || (a[8] = h("span", null, "暗号 rlzc_token", -1)),
          h("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: T(m).settings.depths.token,
            onChange: a[0] || (a[0] = (p) => s("token", p))
          }, null, 40, zf)
        ]),
        h("label", Sf, [
          a[9] || (a[9] = h("span", null, "进度 rlzc_progress", -1)),
          h("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: T(m).settings.depths.progress,
            onChange: a[1] || (a[1] = (p) => s("progress", p))
          }, null, 40, $f)
        ]),
        h("label", Ef, [
          a[10] || (a[10] = h("span", null, "本轮 rlzc_turn", -1)),
          h("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: T(m).settings.depths.turn,
            onChange: a[2] || (a[2] = (p) => s("turn", p))
          }, null, 40, Cf)
        ])
      ]),
      h("div", Mf, [
        a[12] || (a[12] = h("h4", null, "通用副本默认轮数上限", -1)),
        a[13] || (a[13] = h("p", { class: "rlzc-hint" }, "未收录的副本按等级取轮数上限；简报时限一行写了「（最多N轮）」时以简报为准。只影响之后进入的副本。", -1)),
        (E(), M(U, null, fe(r, (p) => h("label", {
          key: p,
          class: "rlzc-field"
        }, [
          h("span", null, I(p) + " 级", 1),
          h("input", {
            type: "number",
            min: "1",
            class: "rlzc-input",
            value: T(m).settings.genericCaps[p],
            onChange: (x) => o(p, x)
          }, null, 40, If)
        ])), 64))
      ]),
      h("div", Tf, [
        a[14] || (a[14] = h("h4", null, "自定义副本包", -1)),
        T(m).settings.customPacks.length ? (E(), M("ul", Pf, [
          (E(!0), M(U, null, fe(T(m).settings.customPacks, (p) => (E(), M("li", {
            key: p.id
          }, [
            h("span", null, [
              qt(I(p.level) + "｜" + I(p.name) + " ", 1),
              h("small", null, "v" + I(p.version), 1)
            ]),
            h("button", {
              class: "rlzc-btn ghost small",
              onClick: (x) => i(p.id, p.name)
            }, "删除", 8, Rf)
          ]))), 128))
        ])) : (E(), M("p", Nf, "还没有导入自定义副本包。")),
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
        t.value.length ? (E(), M("ul", Ff, [
          (E(!0), M(U, null, fe(t.value, (p, x) => (E(), M("li", { key: x }, I(p), 1))), 128))
        ])) : q("", !0)
      ]),
      h("div", Of, [
        a[17] || (a[17] = h("h4", null, "其他", -1)),
        h("label", jf, [
          h("input", {
            type: "checkbox",
            checked: T(m).settings.showBall,
            onChange: a[4] || (a[4] = (p) => c("showBall", p))
          }, null, 40, Df),
          a[15] || (a[15] = qt("显示悬浮球（关闭后可从扩展菜单打开面板）", -1))
        ]),
        h("label", Bf, [
          h("input", {
            type: "checkbox",
            checked: T(m).settings.debug,
            onChange: a[5] || (a[5] = (p) => c("debug", p))
          }, null, 40, Lf),
          a[16] || (a[16] = qt("调试模式（调试页允许手动修改，并在控制台输出日志）", -1))
        ])
      ])
    ]));
  }
}), Wf = { class: "rlzc-debug" }, Gf = {
  key: 0,
  class: "rlzc-note"
}, Yf = {
  key: 0,
  class: "rlzc-note"
}, Hf = {
  key: 1,
  class: "rlzc-note"
}, Kf = {
  key: 2,
  class: "rlzc-card"
}, Uf = { class: "rlzc-row" }, Zf = ["disabled"], Jf = ["value"], Qf = ["disabled"], qf = { class: "rlzc-row" }, Xf = ["disabled"], ed = ["disabled"], td = {
  key: 3,
  class: "rlzc-card"
}, nd = ["onUpdate:modelValue", "disabled"], sd = ["disabled"], Ad = { class: "rlzc-card" }, id = {
  key: 0,
  class: "rlzc-hint"
}, rd = { class: "rlzc-hint" }, od = { class: "rlzc-list rlzc-warns" }, ld = { class: "rlzc-card" }, cd = {
  key: 0,
  class: "rlzc-list"
}, ad = ["disabled", "onClick"], ud = {
  key: 1,
  class: "rlzc-hint"
}, fd = {
  class: "rlzc-card",
  open: ""
}, dd = { class: "rlzc-pre" }, pd = { class: "rlzc-card" }, hd = { class: "rlzc-pre" }, md = { class: "rlzc-card" }, gd = { class: "rlzc-pre" }, xd = { class: "rlzc-card" }, bd = { class: "rlzc-table" }, yd = ["disabled"], vd = /* @__PURE__ */ ct({
  __name: "DebugTab",
  setup(e) {
    const t = se(() => m.settings.debug), n = /* @__PURE__ */ Oe(""), s = /* @__PURE__ */ Oe(null), A = /* @__PURE__ */ Yn({});
    yt(
      () => [m.tick, m.pack?.id],
      () => {
        for (const x of Object.keys(A)) delete A[x];
        const p = fu() ?? {};
        for (const x of m.pack?.roles ?? []) A[x] = p[x] ?? "";
      },
      { immediate: !0 }
    );
    const i = se(() => {
      m.tick;
      const p = pe(), x = [], k = m.session?.entryIndex ?? 0;
      for (let _ = k; _ < p.length; _++) {
        const B = p[_]?.extra?.rlzc;
        B && x.push({ index: _, snap: B });
      }
      return x.reverse().slice(0, 60);
    }), r = se(() => new Set((m.audit?.warnings ?? []).filter((p) => p.kind === "limit").map((p) => p.index))), o = se(() => {
      const p = m.progress;
      if (!p) return null;
      const { perMessage: x, phase: k, next: _, ...B } = p;
      return {
        phase: k.id + " " + k.name,
        ...B,
        next: _ ? { round: _.round, skipFrom: _.skipFrom, events: _.events.map((j) => j.id) } : null,
        messages: Object.keys(x).length
      };
    });
    function l() {
      n.value && xu(n.value);
    }
    function c() {
      s.value !== null && s.value >= 0 && bu(s.value);
    }
    function u() {
      yu({ ...A });
    }
    const a = (p) => JSON.stringify(p, null, 2);
    return (p, x) => (E(), M("div", Wf, [
      T(m).session ? (E(), M(U, { key: 1 }, [
        t.value ? q("", !0) : (E(), M("p", Yf, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        T(m).pack && T(m).session.packVersion !== T(m).pack.version ? (E(), M("p", Hf, " 入场时副本包版本为 " + I(T(m).session.packVersion) + "，当前为 " + I(T(m).pack.version) + "。 ", 1)) : q("", !0),
        T(m).pack?.phases.length ? (E(), M("div", Kf, [
          x[4] || (x[4] = h("h4", null, "手动修正", -1)),
          h("div", Uf, [
            Tt(h("select", {
              "onUpdate:modelValue": x[0] || (x[0] = (k) => n.value = k),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              x[3] || (x[3] = h("option", { value: "" }, "切换到阶段…", -1)),
              (E(!0), M(U, null, fe(T(m).pack.phases, (k) => (E(), M("option", {
                key: k.id,
                value: k.id
              }, I(k.name), 9, Jf))), 128))
            ], 8, Zf), [
              [Ys, n.value]
            ]),
            h("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: l
            }, "切换", 8, Qf)
          ]),
          h("div", qf, [
            Tt(h("input", {
              "onUpdate:modelValue": x[1] || (x[1] = (k) => s.value = k),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, Xf), [
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
            }, "修正轮次", 8, ed)
          ])
        ])) : q("", !0),
        T(m).pack?.roles?.length ? (E(), M("div", td, [
          x[5] || (x[5] = h("h4", null, "角色登记", -1)),
          (E(!0), M(U, null, fe(T(m).pack.roles, (k) => (E(), M("label", {
            key: k,
            class: "rlzc-field"
          }, [
            h("span", null, I(k), 1),
            Tt(h("input", {
              "onUpdate:modelValue": (_) => A[k] = _,
              class: "rlzc-input",
              disabled: !t.value,
              placeholder: "未登记"
            }, null, 8, nd), [
              [Ss, A[k]]
            ])
          ]))), 128)),
          h("button", {
            class: "rlzc-btn small",
            disabled: !t.value,
            onClick: u
          }, "保存登记", 8, sd)
        ])) : q("", !0),
        h("div", Ad, [
          x[7] || (x[7] = h("h4", null, "<副本> 核对", -1)),
          T(m).audit?.warnings.length ? (E(), M(U, { key: 1 }, [
            h("p", rd, "共 " + I(T(m).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            h("ul", od, [
              (E(!0), M(U, null, fe(T(m).audit.warnings.slice(-30).reverse(), (k, _) => (E(), M("li", { key: _ }, [
                h("span", null, [
                  h("small", null, "#" + I(k.index) + "｜" + I(k.phase) + "第" + I(k.round) + "轮", 1),
                  x[6] || (x[6] = h("br", null, null, -1)),
                  qt("⚠️ " + I(k.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (E(), M("p", id, "没有发现问题。"))
        ]),
        h("div", ld, [
          x[8] || (x[8] = h("h4", null, "手动操作记录", -1)),
          T(m).session.manual.length ? (E(), M("ul", cd, [
            (E(!0), M(U, null, fe(T(m).session.manual, (k, _) => (E(), M("li", { key: _ }, [
              h("code", null, "#" + I(k.atIndex) + " " + I(k.kind) + " " + I("phase" in k ? k.phase : "") + I("round" in k ? k.round : "") + I("targetPhase" in k ? `${k.targetPhase}:${k.targetRound}` : ""), 1),
              h("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (B) => T(vu)(_)
              }, "撤销", 8, ad)
            ]))), 128))
          ])) : (E(), M("p", ud, "无"))
        ]),
        h("details", fd, [
          x[9] || (x[9] = h("summary", null, "本次注入", -1)),
          h("pre", dd, I([T(m).lastInjection.token, T(m).lastInjection.progress, T(m).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        h("details", pd, [
          x[10] || (x[10] = h("summary", null, "重放结果", -1)),
          h("pre", hd, I(a(o.value)), 1)
        ]),
        h("details", md, [
          x[11] || (x[11] = h("summary", null, "会话原始数据", -1)),
          h("pre", gd, I(a(T(m).session)), 1)
        ]),
        h("details", xd, [
          x[13] || (x[13] = h("summary", null, "每楼快照（最近60条）", -1)),
          h("table", bd, [
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
              (E(!0), M(U, null, fe(i.value, (k) => (E(), M("tr", {
                key: k.index,
                class: lt({ "rlzc-row-warn": r.value.has(k.index) })
              }, [
                h("td", null, I(k.index) + I(k.snap.entry ? "★" : ""), 1),
                h("td", null, I(k.snap.phase), 1),
                h("td", null, I(k.snap.round), 1),
                h("td", null, I(k.snap.clock ?? ""), 1),
                h("td", null, I(k.snap.limit?.text ?? ""), 1),
                h("td", null, I(k.snap.injected.join(" ")), 1)
              ], 2))), 128))
            ])
          ])
        ]),
        h("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: x[2] || (x[2] = //@ts-ignore
          (...k) => T(GA) && T(GA)(...k))
        }, "删除副本会话", 8, yd)
      ], 64)) : (E(), M("p", Gf, "当前聊天没有副本会话。"))
    ]));
  }
}), _d = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, wd = { class: "rlzc-head" }, kd = { class: "rlzc-tabs" }, zd = ["onClick"], Sd = { class: "rlzc-body" }, $d = /* @__PURE__ */ ct({
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
        if (!await Ue("此页会显示副本真相，确定要打开吗？")) return;
        m.debugUnlocked = !0;
      }
      m.tab = s;
    }
    return (s, A) => (E(), M("div", {
      class: "rlzc-backdrop",
      onClick: A[1] || (A[1] = Rl((i) => T(m).panelOpen = !1, ["self"]))
    }, [
      h("section", _d, [
        h("header", wd, [
          A[2] || (A[2] = h("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          h("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: A[0] || (A[0] = (i) => T(m).panelOpen = !1)
          }, "×")
        ]),
        h("nav", kd, [
          (E(), M(U, null, fe(t, (i) => h("button", {
            key: i.id,
            class: lt({ on: T(m).tab === i.id }),
            onClick: (r) => n(i.id)
          }, I(i.label), 11, zd)), 64))
        ]),
        h("div", Sd, [
          T(m).tab === "system" ? (E(), Qe(tf, { key: 0 })) : T(m).tab === "docs" ? (E(), Qe(hf, { key: 1 })) : T(m).tab === "memo" ? (E(), Qe(xf, { key: 2 })) : T(m).tab === "settings" ? (E(), Qe(Vf, { key: 3 })) : T(m).tab === "debug" && T(m).debugUnlocked ? (E(), Qe(vd, { key: 4 })) : q("", !0)
        ])
      ])
    ]));
  }
}), Ed = /* @__PURE__ */ ct({
  __name: "App",
  setup(e) {
    return (t, n) => (E(), M(U, null, [
      T(m).settings.showBall ? (E(), Qe(zu, { key: 0 })) : q("", !0),
      T(m).panelOpen ? (E(), Qe($d, { key: 1 })) : q("", !0)
    ], 64));
  }
}), Cd = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-memo{height:100%}.rlzc-textarea{min-height:50vh;flex:1;resize:vertical;line-height:1.6}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}', KA = "rlzc-host", UA = "rlzc-menu-btn", ZA = "rlzc-settings-drawer";
function Md() {
  if (document.getElementById(KA)) return;
  const e = document.createElement("div");
  e.id = KA, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Cd, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), Ol(Ed).mount(s), _r(), wr();
}
function _r(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => _r(e + 1), 500);
    return;
  }
  if (document.getElementById(UA)) return;
  const n = document.createElement("div");
  n.id = UA, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const A = document.createElement("span");
  A.textContent = "回廊种菜系统", n.append(s, A), n.addEventListener("click", () => {
    m.panelOpen = !m.panelOpen;
  }), t.appendChild(n);
}
function wr(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => wr(e + 1), 500);
    return;
  }
  if (document.getElementById(ZA)) return;
  const n = (p, x = "", k = "") => {
    const _ = document.createElement(p);
    return x && (_.className = x), k && (_.textContent = k), _;
  }, s = n("div");
  s.id = ZA;
  const A = n("div", "inline-drawer"), i = n("div", "inline-drawer-toggle inline-drawer-header");
  i.append(n("b", "", "回廊种菜系统"), n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const r = n("div", "inline-drawer-content"), o = n("div", "menu_button menu_button_icon", "打开面板");
  o.prepend(n("i", "fa-solid fa-seedling")), o.addEventListener("click", () => m.panelOpen = !0);
  const l = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  l.addEventListener("click", () => {
    m.settings.ball = { x: null, y: null }, m.settings.showBall = !0, He();
  });
  const c = n("label", "checkbox_label"), u = document.createElement("input");
  u.type = "checkbox", u.addEventListener("change", () => {
    m.settings.showBall = u.checked, He();
  }), c.append(u, n("span", "", "显示悬浮球")), yt(() => m.settings.showBall, (p) => u.checked = p, { immediate: !0 });
  const a = n("div", "flex-container");
  a.append(o, l), r.append(a, c, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), A.append(i, r), s.append(A), t.append(s);
}
globalThis.rlzcInterceptor = hu;
function gs() {
  lu(), Ze("MESSAGE_RECEIVED", (e) => _u(Number(e))), Ze("CHARACTER_MESSAGE_RENDERED", (e) => hs(Number(e))), Ze("MESSAGE_DELETED", () => ps()), Ze("MESSAGE_SWIPED", (e) => {
    mu(Number(e)), hs(Number(e));
  }), Ze("MESSAGE_EDITED", () => ps()), Ze("MESSAGE_UPDATED", (e) => {
    ps(), hs(Number(e));
  }), Ze("CHAT_CHANGED", () => HA()), Ze("MORE_MESSAGES_LOADED", () => Js()), Md(), HA(), console.log("[rlzc] 回廊种菜系统已加载", m.settings);
}
const JA = window.jQuery;
typeof JA == "function" ? JA(() => gs()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", gs) : gs();
