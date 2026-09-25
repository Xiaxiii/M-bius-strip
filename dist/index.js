/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ts(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = {}, ht = [], gt = () => {
}, JA = () => !1, Fn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), On = (e) => e.startsWith("onUpdate:"), Se = Object.assign, QA = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, zo = Object.prototype.hasOwnProperty, U = (e, t) => zo.call(e, t), B = Array.isArray, qe = (e) => rn(e) === "[object Map]", yt = (e) => rn(e) === "[object Set]", nA = (e) => rn(e) === "[object Date]", Y = (e) => typeof e == "function", se = (e) => typeof e == "string", Ne = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", qA = (e) => (q(e) || Y(e)) && Y(e.then) && Y(e.catch), XA = Object.prototype.toString, rn = (e) => XA.call(e), Eo = (e) => rn(e).slice(8, -1), ei = (e) => rn(e) === "[object Object]", Ps = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Wt = /* @__PURE__ */ Ts(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, $o = /-\w/g, we = jn(
  (e) => e.replace($o, (t) => t.slice(1).toUpperCase())
), Co = /\B([A-Z])/g, wt = jn(
  (e) => e.replace(Co, "-$1").toLowerCase()
), ti = jn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ns = jn(
  (e) => e ? `on${ti(e)}` : ""
), Re = (e, t) => !Object.is(e, t), xn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ni = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Dn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let sA;
const Ln = () => sA || (sA = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bn(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], A = se(s) ? Po(s) : Bn(s);
      if (A)
        for (const i in A)
          t[i] = A[i];
    }
    return t;
  } else if (se(e) || q(e))
    return e;
}
const Mo = /;(?![^(]*\))/g, Io = /:([^]+)/, To = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Po(e) {
  const t = {};
  return e.replace(To, (n) => n.startsWith("/*") ? "" : n).split(Mo).forEach((n) => {
    if (n) {
      const s = n.split(Io);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ct(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const s = ct(e[n]);
      s && (t += s + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ro = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", No = /* @__PURE__ */ Ts(Ro);
function si(e) {
  return !!e || e === "";
}
function Fo(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let A = 0; s && A < e.length; A++)
    s = tt(e[A], t[A], n);
  return s;
}
function AA(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), A = new Uint8Array(s.length);
  for (const i of e) {
    let r = -1;
    for (let o = 0; o < s.length; o++)
      if (!A[o] && tt(i, s[o], n)) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    A[r] = 1;
  }
  return !0;
}
function Oo(e, t, n) {
  let s = qe(e), A = qe(t);
  if (s || A || (s = yt(e), A = yt(t), s || A))
    return s && A ? AA(e, t, n) : !1;
  const i = Object.keys(e).length, r = Object.keys(t).length;
  if (i !== r)
    return !1;
  for (const o in e) {
    const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
    if (l && !c || !l && c || !tt(e[o], t[o], n))
      return !1;
  }
  return String(e) === String(t);
}
function iA(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [A, i] = n;
  if (A.has(e) || i.has(t))
    return A.get(e) === t && i.get(t) === e;
  A.set(e, t), i.set(t, e);
  const r = s(e, t, n);
  return A.delete(e), i.delete(t), r;
}
function tt(e, t, n) {
  if (e === t) return !0;
  let s = nA(e), A = nA(t);
  return s || A ? s && A ? e.getTime() === t.getTime() : !1 : (s = Ne(e), A = Ne(t), s || A ? e === t : (s = B(e), A = B(t), s || A ? s && A ? iA(e, t, n, Fo) : !1 : (s = q(e), A = q(t), s || A ? !s || !A ? !1 : iA(e, t, n, Oo) : String(e) === String(t))));
}
function jo(e, t) {
  return e.findIndex((n) => tt(n, t));
}
const Ai = (e) => !!(e && e.__v_isRef === !0), R = (e) => se(e) ? e : e == null ? "" : B(e) || q(e) && (e.toString === XA || !Y(e.toString)) ? Ai(e) ? R(e.value) : JSON.stringify(e, ii, 2) : String(e), ii = (e, t) => Ai(t) ? ii(e, t.value) : qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, A], i) => (n[ss(s, i) + " =>"] = A, n),
    {}
  )
} : yt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ss(n))
} : Ne(t) ? ss(t) : q(t) && !B(t) && !ei(t) ? String(t) : t, ss = (e, t = "") => {
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
let oe;
class Do {
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
function Lo() {
  return oe;
}
let K;
const As = /* @__PURE__ */ new WeakSet();
class oi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, oe && (oe.active ? oe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, As.has(this) && (As.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || li(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, oA(this), ci(this);
    const t = K, n = ke;
    K = this, ke = !0;
    try {
      return this.fn();
    } finally {
      ai(this), K = t, ke = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Fs(t);
      this.deps = this.depsTail = void 0, oA(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? As.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ys(this) && this.run();
  }
  get dirty() {
    return ys(this);
  }
}
let ri = 0, Gt, Yt;
function li(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Yt, Yt = e;
    return;
  }
  e.next = Gt, Gt = e;
}
function Rs() {
  ri++;
}
function Ns() {
  if (--ri > 0)
    return;
  if (Yt) {
    let t = Yt;
    for (Yt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Gt; ) {
    let t = Gt;
    for (Gt = void 0; t; ) {
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
function ci(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ai(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const A = s.prevDep;
    s.version === -1 ? (s === n && (n = A), Fs(s), Bo(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = A;
  }
  e.deps = t, e.depsTail = n;
}
function ys(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ui(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ui(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qt) || (e.globalVersion = Qt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ys(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = K, s = ke;
  K = e, ke = !0;
  try {
    ci(e);
    const A = e.fn(e._value);
    (t.version === 0 || Re(A, e._value)) && (e.flags |= 128, e._value = A, t.version++);
  } catch (A) {
    throw t.version++, A;
  } finally {
    K = n, ke = s, ai(e), e.flags &= -3;
  }
}
function Fs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: A } = e;
  if (s && (s.nextSub = A, e.prevSub = void 0), A && (A.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Fs(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Bo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ke = !0;
const fi = [];
function nt() {
  fi.push(ke), ke = !1;
}
function st() {
  const e = fi.pop();
  ke = e === void 0 ? !0 : e;
}
function oA(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = K;
    K = void 0;
    try {
      t();
    } finally {
      K = n;
    }
  }
}
let Qt = 0;
class Vo {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Os {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!K || !ke || K === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== K)
      n = this.activeLink = new Vo(K, this), K.deps ? (n.prevDep = K.depsTail, K.depsTail.nextDep = n, K.depsTail = n) : K.deps = K.depsTail = n, di(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = K.depsTail, n.nextDep = void 0, K.depsTail.nextDep = n, K.depsTail = n, K.deps === n && (K.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Qt++, this.notify(t);
  }
  notify(t) {
    Rs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ns();
    }
  }
}
function di(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        di(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const vs = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ Symbol(
  ""
), _s = /* @__PURE__ */ Symbol(
  ""
), qt = /* @__PURE__ */ Symbol(
  ""
);
function re(e, t, n) {
  if (ke && K) {
    let s = vs.get(e);
    s || vs.set(e, s = /* @__PURE__ */ new Map());
    let A = s.get(n);
    A || (s.set(n, A = new Os()), A.map = s, A.key = n), A.track();
  }
}
function We(e, t, n, s, A, i) {
  const r = vs.get(e);
  if (!r) {
    Qt++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Rs(), t === "clear")
    r.forEach(o);
  else {
    const l = B(e), c = l && Ps(n);
    if (l && n === "length") {
      const u = Number(s);
      r.forEach((f, p) => {
        (p === "length" || p === qt || !Ne(p) && p >= u) && o(f);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && o(r.get(n)), c && o(r.get(qt)), t) {
        case "add":
          l ? c && o(r.get("length")) : (o(r.get(xt)), qe(e) && o(r.get(_s)));
          break;
        case "delete":
          l || (o(r.get(xt)), qe(e) && o(r.get(_s)));
          break;
        case "set":
          qe(e) && o(r.get(xt));
          break;
      }
  }
  Ns();
}
function Et(e) {
  const t = /* @__PURE__ */ W(e);
  return t === e || (re(t, "iterate", qt), /* @__PURE__ */ ye(e)) ? t : /* @__PURE__ */ Fe(e) ? /* @__PURE__ */ Xe(e) ? t.map((n) => At(ve(n))) : t.map(At) : t.map(ve);
}
function Vn(e) {
  return re(e = /* @__PURE__ */ W(e), "iterate", qt), e;
}
function Te(e, t) {
  return /* @__PURE__ */ Fe(e) ? At(/* @__PURE__ */ Xe(e) ? ve(t) : t) : ve(t);
}
const Wo = {
  __proto__: null,
  [Symbol.iterator]() {
    return is(this, Symbol.iterator, (e) => Te(this, e));
  },
  concat(...e) {
    return Et(this).concat(
      ...e.map((t) => B(t) ? Et(t) : t)
    );
  },
  entries() {
    return is(this, "entries", (e) => (e[1] = Te(this, e[1]), e));
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
      (n) => n.map((s) => Te(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Le(
      this,
      "find",
      e,
      t,
      (n) => Te(this, n),
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
      (n) => Te(this, n),
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
    return os(this, "includes", e);
  },
  indexOf(...e) {
    return os(this, "indexOf", e);
  },
  join(e) {
    return Et(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return os(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Le(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Dt(this, "pop");
  },
  push(...e) {
    return Dt(this, "push", e);
  },
  reduce(e, ...t) {
    return rA(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return rA(this, "reduceRight", e, t);
  },
  shift() {
    return Dt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Le(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Dt(this, "splice", e);
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
    return Dt(this, "unshift", e);
  },
  values() {
    return is(this, "values", (e) => Te(this, e));
  }
};
function is(e, t, n) {
  const s = Vn(e), A = s[t]();
  return s !== e && !/* @__PURE__ */ ye(e) && (A._next = A.next, A.next = () => {
    const i = A._next();
    return i.done || (i.value = n(i.value)), i;
  }), A;
}
const Go = Array.prototype;
function Le(e, t, n, s, A, i) {
  const r = Vn(e), o = r !== e && !/* @__PURE__ */ ye(e), l = r[t];
  if (l !== Go[t]) {
    const f = l.apply(e, i);
    return o ? ve(f) : f;
  }
  let c = n;
  r !== e && (o ? c = function(f, p) {
    return n.call(this, Te(e, f), p, e);
  } : n.length > 2 && (c = function(f, p) {
    return n.call(this, f, p, e);
  }));
  const u = l.call(r, c, s);
  return o && A ? A(u) : u;
}
function rA(e, t, n, s) {
  const A = Vn(e), i = A !== e && !/* @__PURE__ */ ye(e);
  let r = n, o = !1;
  A !== e && (i ? (o = s.length === 0, r = function(c, u, f) {
    return o && (o = !1, c = Te(e, c)), n.call(this, c, Te(e, u), f, e);
  }) : n.length > 3 && (r = function(c, u, f) {
    return n.call(this, c, u, f, e);
  }));
  const l = A[t](r, ...s);
  return o ? Te(e, l) : l;
}
function os(e, t, n) {
  const s = /* @__PURE__ */ W(e);
  re(s, "iterate", qt);
  const A = s[t](...n);
  return (A === -1 || A === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ W(n[0]), s[t](...n)) : A;
}
function Dt(e, t, n = []) {
  nt(), Rs();
  const s = (/* @__PURE__ */ W(e))[t].apply(e, n);
  return Ns(), st(), s;
}
const Yo = /* @__PURE__ */ Ts("__proto__,__v_isRef,__isVue"), pi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ne)
);
function Ho(e) {
  Ne(e) || (e = String(e));
  const t = /* @__PURE__ */ W(this);
  return re(t, "has", e), t.hasOwnProperty(e);
}
class hi {
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
      return s === (A ? i ? nr : bi : i ? xi : gi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = B(t);
    if (!A) {
      let l;
      if (r && (l = Wo[n]))
        return l;
      if (n === "hasOwnProperty")
        return Ho;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ae(t) ? t : s
    );
    if ((Ne(n) ? pi.has(n) : Yo(n)) || (A || re(t, "get", n), i))
      return o;
    if (/* @__PURE__ */ ae(o)) {
      const l = r && Ps(n) ? o : o.value;
      return A && q(l) ? /* @__PURE__ */ ks(l) : l;
    }
    return q(o) ? A ? /* @__PURE__ */ ks(o) : /* @__PURE__ */ Wn(o) : o;
  }
}
class mi extends hi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, A) {
    let i = t[n];
    const r = B(t) && Ps(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Fe(i);
      if (!/* @__PURE__ */ ye(s) && !/* @__PURE__ */ Fe(s) && (i = /* @__PURE__ */ W(i), s = /* @__PURE__ */ W(s)), !r && /* @__PURE__ */ ae(i) && !/* @__PURE__ */ ae(s))
        return c || (i.value = s), !0;
    }
    const o = r ? Number(n) < t.length : U(t, n), l = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ae(t) ? t : A
    );
    return t === /* @__PURE__ */ W(A) && l && (o ? Re(s, i) && We(t, "set", n, s) : We(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = U(t, n);
    t[n];
    const A = Reflect.deleteProperty(t, n);
    return A && s && We(t, "delete", n, void 0), A;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ne(n) || !pi.has(n)) && re(t, "has", n), s;
  }
  ownKeys(t) {
    return re(
      t,
      "iterate",
      B(t) ? "length" : xt
    ), Reflect.ownKeys(t);
  }
}
class Uo extends hi {
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
const Ko = /* @__PURE__ */ new mi(), Zo = /* @__PURE__ */ new Uo(), Jo = /* @__PURE__ */ new mi(!0);
const ws = (e) => e, dn = (e) => Reflect.getPrototypeOf(e);
function Qo(e, t, n) {
  return function(...s) {
    const A = this.__v_raw, i = /* @__PURE__ */ W(A), r = qe(i), o = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, c = A[e](...s), u = n ? ws : t ? At : ve;
    return !t && re(
      i,
      "iterate",
      l ? _s : xt
    ), Se(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: f, done: p } = c.next();
          return p ? { value: f, done: p } : {
            value: o ? [u(f[0]), u(f[1])] : u(f),
            done: p
          };
        }
      }
    );
  };
}
function pn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function qo(e, t) {
  const n = {
    get(A) {
      const i = this.__v_raw, r = /* @__PURE__ */ W(i), o = /* @__PURE__ */ W(A);
      e || (Re(A, o) && re(r, "get", A), re(r, "get", o));
      const { has: l } = dn(r), c = t ? ws : e ? At : ve;
      if (l.call(r, A))
        return c(i.get(A));
      if (l.call(r, o))
        return c(i.get(o));
      i !== r && i.get(A);
    },
    get size() {
      const A = this.__v_raw;
      return !e && re(/* @__PURE__ */ W(A), "iterate", xt), A.size;
    },
    has(A) {
      const i = this.__v_raw, r = /* @__PURE__ */ W(i), o = /* @__PURE__ */ W(A);
      return e || (Re(A, o) && re(r, "has", A), re(r, "has", o)), A === o ? i.has(A) : i.has(A) || i.has(o);
    },
    forEach(A, i) {
      const r = this, o = r.__v_raw, l = /* @__PURE__ */ W(o), c = t ? ws : e ? At : ve;
      return !e && re(l, "iterate", xt), o.forEach((u, f) => A.call(i, c(u), c(f), r));
    }
  };
  return Se(
    n,
    e ? {
      add: pn("add"),
      set: pn("set"),
      delete: pn("delete"),
      clear: pn("clear")
    } : {
      add(A) {
        const i = /* @__PURE__ */ W(this), r = dn(i), o = /* @__PURE__ */ W(A), l = !t && !/* @__PURE__ */ ye(A) && !/* @__PURE__ */ Fe(A) ? o : A;
        return r.has.call(i, l) || Re(A, l) && r.has.call(i, A) || Re(o, l) && r.has.call(i, o) || (i.add(l), We(i, "add", l, l)), this;
      },
      set(A, i) {
        !t && !/* @__PURE__ */ ye(i) && !/* @__PURE__ */ Fe(i) && (i = /* @__PURE__ */ W(i));
        const r = /* @__PURE__ */ W(this), { has: o, get: l } = dn(r);
        let c = o.call(r, A);
        c || (A = /* @__PURE__ */ W(A), c = o.call(r, A));
        const u = l.call(r, A);
        return r.set(A, i), c ? Re(i, u) && We(r, "set", A, i) : We(r, "add", A, i), this;
      },
      delete(A) {
        const i = /* @__PURE__ */ W(this), { has: r, get: o } = dn(i);
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
    n[A] = Qo(A, e, t);
  }), n;
}
function js(e, t) {
  const n = qo(e, t);
  return (s, A, i) => A === "__v_isReactive" ? !e : A === "__v_isReadonly" ? e : A === "__v_raw" ? s : Reflect.get(
    U(n, A) && A in s ? n : s,
    A,
    i
  );
}
const Xo = {
  get: /* @__PURE__ */ js(!1, !1)
}, er = {
  get: /* @__PURE__ */ js(!1, !0)
}, tr = {
  get: /* @__PURE__ */ js(!0, !1)
};
const gi = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap();
function sr(e) {
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
function Wn(e) {
  return /* @__PURE__ */ Fe(e) ? e : Ds(
    e,
    !1,
    Ko,
    Xo,
    gi
  );
}
// @__NO_SIDE_EFFECTS__
function Ar(e) {
  return Ds(
    e,
    !1,
    Jo,
    er,
    xi
  );
}
// @__NO_SIDE_EFFECTS__
function ks(e) {
  return Ds(
    e,
    !0,
    Zo,
    tr,
    bi
  );
}
function Ds(e, t, n, s, A) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = A.get(e);
  if (i)
    return i;
  const r = sr(Eo(e));
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
function ye(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ W(t) : e;
}
function ir(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && ni(e, "__v_skip", !0), e;
}
const ve = (e) => q(e) ? /* @__PURE__ */ Wn(e) : e, At = (e) => q(e) ? /* @__PURE__ */ ks(e) : e;
// @__NO_SIDE_EFFECTS__
function ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
  return or(e, !1);
}
function or(e, t) {
  return /* @__PURE__ */ ae(e) ? e : new rr(e, t);
}
class rr {
  constructor(t, n) {
    this.dep = new Os(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ W(t), this._value = n ? t : ve(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ ye(t) || /* @__PURE__ */ Fe(t);
    t = s ? t : /* @__PURE__ */ W(t), Re(t, n) && (this._rawValue = t, this._value = s ? t : ve(t), this.dep.trigger());
  }
}
function T(e) {
  return /* @__PURE__ */ ae(e) ? e.value : e;
}
const lr = {
  get: (e, t, n) => t === "__v_raw" ? e : T(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const A = e[t];
    return /* @__PURE__ */ ae(A) && !/* @__PURE__ */ ae(n) ? (A.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function yi(e) {
  return /* @__PURE__ */ Xe(e) ? e : new Proxy(e, lr);
}
class cr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Os(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    K !== this)
      return li(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ui(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ar(e, t, n = !1) {
  let s, A;
  return Y(e) ? s = e : (s = e.get, A = e.set), new cr(s, A, n);
}
const hn = {}, kn = /* @__PURE__ */ new WeakMap();
let dt;
function ur(e, t = !1, n = dt) {
  if (n) {
    let s = kn.get(n);
    s || kn.set(n, s = []), s.push(e);
  }
}
function fr(e, t, n = Q) {
  const { immediate: s, deep: A, once: i, scheduler: r, augmentJob: o, call: l } = n, c = (I) => A ? I : /* @__PURE__ */ ye(I) || A === !1 || A === 0 ? Ge(I, 1) : Ge(I);
  let u, f, p, h, b = !1, y = !1;
  if (/* @__PURE__ */ ae(e) ? (f = () => e.value, b = /* @__PURE__ */ ye(e)) : /* @__PURE__ */ Xe(e) ? (f = () => c(e), b = !0) : B(e) ? (y = !0, b = e.some((I) => /* @__PURE__ */ Xe(I) || /* @__PURE__ */ ye(I)), f = () => e.map((I) => {
    if (/* @__PURE__ */ ae(I))
      return I.value;
    if (/* @__PURE__ */ Xe(I))
      return c(I);
    if (Y(I))
      return l ? l(I, 2) : I();
  })) : Y(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
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
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      dt = I;
    }
  } : f = gt, t && A) {
    const I = f, X = A === !0 ? 1 / 0 : A;
    f = () => Ge(I(), X);
  }
  const L = Lo(), O = () => {
    u.stop(), L && L.active && QA(L.effects, u);
  };
  if (i && t) {
    const I = t;
    t = (...X) => {
      const ee = I(...X);
      return O(), ee;
    };
  }
  let N = y ? new Array(e.length).fill(hn) : hn;
  const j = (I) => {
    if (!(!(u.flags & 1) || !u.dirty && !I))
      if (t) {
        const X = u.run();
        if (I || A || b || (y ? X.some((ee, le) => Re(ee, N[le])) : Re(X, N))) {
          p && p();
          const ee = dt;
          dt = u;
          try {
            const le = [
              X,
              // pass undefined as the old value when it's changed for the first time
              N === hn ? void 0 : y && N[0] === hn ? [] : N,
              h
            ];
            N = X, l ? l(t, 3, le) : (
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
  return o && o(j), u = new oi(f), u.scheduler = r ? () => r(j, !1) : j, h = (I) => ur(I, !1, u), p = u.onStop = () => {
    const I = kn.get(u);
    if (I) {
      if (l)
        l(I, 4);
      else
        for (const X of I) X();
      kn.delete(u);
    }
  }, t ? s ? j(!0) : N = u.run() : r ? r(j.bind(null, !0), !0) : u.run(), O.pause = u.pause.bind(u), O.resume = u.resume.bind(u), O.stop = O, O;
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ae(e))
    Ge(e.value, t, n);
  else if (B(e))
    for (let s = 0; s < e.length; s++)
      Ge(e[s], t, n);
  else if (yt(e) || qe(e))
    e.forEach((s) => {
      Ge(s, t, n);
    });
  else if (ei(e)) {
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
function ln(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (A) {
    Gn(A, t, n);
  }
}
function Oe(e, t, n, s) {
  if (Y(e)) {
    const A = ln(e, t, n, s);
    return A && qA(A) && A.catch((i) => {
      Gn(i, t, n);
    }), A;
  }
  if (B(e)) {
    const A = [];
    for (let i = 0; i < e.length; i++)
      A.push(Oe(e[i], t, n, s));
    return A;
  }
}
function Gn(e, t, n, s = !0) {
  const A = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || Q;
  if (t) {
    let o = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, l, c) === !1)
            return;
      }
      o = o.parent;
    }
    if (i) {
      nt(), ln(i, null, 10, [
        e,
        l,
        c
      ]), st();
      return;
    }
  }
  dr(e, n, A, s, r);
}
function dr(e, t, n, s = !0, A = !1) {
  if (A)
    throw e;
  console.error(e);
}
const ce = [];
let Ie = -1;
const Mt = [];
let Qe = null, $t = 0;
const vi = /* @__PURE__ */ Promise.resolve();
let Sn = null;
function _i(e) {
  const t = Sn || vi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pr(e) {
  let t = Ie + 1, n = ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, A = ce[s], i = Xt(A);
    i < e || i === e && A.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Bs(e) {
  if (!(e.flags & 1)) {
    const t = Xt(e), n = ce[ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xt(n) ? ce.push(e) : ce.splice(pr(t), 0, e), e.flags |= 1, wi();
  }
}
function wi() {
  Sn || (Sn = vi.then(Si));
}
function hr(e) {
  if (!B(e))
    Qe && e.id === -1 ? Qe.splice($t + 1, 0, e) : e.flags & 1 || (Mt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Mt.push(e[t]);
  wi();
}
function lA(e, t, n = Ie + 1) {
  for (; n < ce.length; n++) {
    const s = ce[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ce.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ki(e) {
  if (Mt.length) {
    const t = [...new Set(Mt)].sort(
      (n, s) => Xt(n) - Xt(s)
    );
    if (Mt.length = 0, Qe) {
      for (let n = 0; n < t.length; n++)
        Qe.push(t[n]);
      return;
    }
    for (Qe = t, $t = 0; $t < Qe.length; $t++) {
      const n = Qe[$t];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Qe = null, $t = 0;
  }
}
const Xt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Si(e) {
  try {
    for (Ie = 0; Ie < ce.length; Ie++) {
      const t = ce[Ie];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ln(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ie < ce.length; Ie++) {
      const t = ce[Ie];
      t && (t.flags &= -2);
    }
    Ie = -1, ce.length = 0, ki(), Sn = null, (ce.length || Mt.length) && Si();
  }
}
let be = null, zi = null;
function zn(e) {
  const t = be;
  return be = e, zi = e && e.type.__scopeId || null, t;
}
function mr(e, t = be, n) {
  if (!t || e._n)
    return e;
  const s = (...A) => {
    s._d && hA(-1);
    const i = zn(t), r = bt.length;
    let o;
    try {
      o = e(...A);
    } finally {
      for (let l = bt.length; l > r; l--) Wi();
      zn(i), s._d && hA(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function bn(e, t) {
  if (be === null)
    return e;
  const n = Zn(be), s = e.dirs || (e.dirs = []);
  for (let A = 0; A < t.length; A++) {
    let [i, r, o, l = Q] = t[A];
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
function ut(e, t, n, s) {
  const A = e.dirs, i = t && t.dirs;
  for (let r = 0; r < A.length; r++) {
    const o = A[r];
    i && (o.oldValue = i[r].value);
    let l = o.dir[s];
    l && (nt(), Oe(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), st());
  }
}
function gr(e, t, n = !1) {
  const s = tl();
  if (s || It) {
    let A = It ? It._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (A && e in A)
      return A[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(s && s.proxy) : t;
  }
}
const xr = /* @__PURE__ */ Symbol.for("v-scx"), br = () => gr(xr);
function Yn(e, t, n) {
  return yr(e, t, n);
}
function yr(e, t, n = Q) {
  const { immediate: s, deep: A, flush: i, once: r } = n, o = Se({}, n), l = t && s || !t && i !== "post";
  let c;
  if (nn) {
    if (i === "sync") {
      const h = br();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = gt, h.resume = gt, h.pause = gt, h;
    }
  }
  const u = it;
  o.call = (h, b, y) => Oe(h, u, b, y);
  let f = !1;
  i === "post" ? o.scheduler = (h) => {
    fe(h, u && u.suspense);
  } : i !== "sync" && (f = !0, o.scheduler = (h, b) => {
    b ? h() : Bs(h);
  }), o.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const p = fr(e, t, o);
  return nn && (c ? c.push(p) : l && p()), p;
}
const vr = /* @__PURE__ */ Symbol("_vte"), Hn = (e) => e.__isTeleport, rs = /* @__PURE__ */ Symbol("_leaveCb");
function _r(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ue) {
        t = n;
        break;
      }
  }
  return t;
}
function Ei(e) {
  if (!$i(e))
    return Hn(e.type) && e.children ? _r(e.children) : e;
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
function Vs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Vs(
      Hn(n.type) && Ei(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function kt(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Se({ name: e.name }, t, { setup: e })
  ) : e;
}
function wr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function cA(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const En = /* @__PURE__ */ new WeakMap();
function Ht(e, t, n, s, A = !1) {
  if (B(e)) {
    e.forEach(
      (y, L) => Ht(
        y,
        t && (B(t) ? t[L] : t),
        n,
        s,
        A
      )
    );
    return;
  }
  if (Ut(s) && !A) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Ht(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Zn(s.component) : s.el, r = A ? null : i, { i: o, r: l } = e, c = t && t.r, u = o.refs === Q ? o.refs = {} : o.refs, f = o.setupState, p = /* @__PURE__ */ W(f), h = f === Q ? JA : (y) => cA(u, y) ? !1 : U(p, y), b = (y, L) => !(L && cA(u, L));
  if (c != null && c !== l) {
    if (aA(t), se(c))
      u[c] = null, h(c) && (f[c] = null);
    else if (/* @__PURE__ */ ae(c)) {
      const y = t;
      b(c, y.k) && (c.value = null), y.k && (u[y.k] = null);
    }
  }
  if (Y(l))
    ln(l, o, 12, [r, u]);
  else {
    const y = se(l), L = /* @__PURE__ */ ae(l);
    if (y || L) {
      const O = () => {
        if (e.f) {
          const N = y ? h(l) ? f[l] : u[l] : b() || !e.k ? l.value : u[e.k];
          if (A)
            B(N) && QA(N, i);
          else if (B(N))
            N.includes(i) || N.push(i);
          else if (y)
            u[l] = [i], h(l) && (f[l] = u[l]);
          else {
            const j = [i];
            b(l, e.k) && (l.value = j), e.k && (u[e.k] = j);
          }
        } else y ? (u[l] = r, h(l) && (f[l] = r)) : L && (b(l, e.k) && (l.value = r), e.k && (u[e.k] = r));
      };
      if (r) {
        const N = () => {
          O(), En.delete(e);
        };
        N.id = -1, En.set(e, N), fe(N, n);
      } else
        aA(e), O();
    }
  }
}
function aA(e) {
  const t = En.get(e);
  t && (t.flags |= 8, En.delete(e));
}
Ln().requestIdleCallback;
Ln().cancelIdleCallback;
const Ut = (e) => !!e.type.__asyncLoader, $i = (e) => e.type.__isKeepAlive;
function kr(e, t, n = it, s = !1) {
  if (n) {
    const A = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      nt();
      const o = Ys(n), l = Oe(t, n, e, r);
      return o(), st(), l;
    });
    return s ? A.unshift(i) : A.push(i), i;
  }
}
const Ci = (e) => (t, n = it) => {
  (!nn || e === "sp") && kr(e, (...s) => t(...s), n);
}, Sr = Ci("m"), zr = Ci(
  "bum"
), Er = /* @__PURE__ */ Symbol.for("v-ndc");
function xe(e, t, n, s) {
  let A;
  const i = n, r = B(e);
  if (r || se(e)) {
    const o = r && /* @__PURE__ */ Xe(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ ye(e), c = /* @__PURE__ */ Fe(e), e = Vn(e)), A = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      A[u] = t(
        l ? c ? At(ve(e[u])) : ve(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    A = new Array(e);
    for (let o = 0; o < e; o++)
      A[o] = t(o + 1, o, void 0, i);
  } else if (q(e))
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
const Ss = (e) => e ? Ui(e) ? Zn(e) : Ss(e.parent) : null, Kt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ss(e.parent),
    $root: (e) => Ss(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Bs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _i.bind(e.proxy)),
    $watch: (e) => gt
  })
), ls = (e, t) => e !== Q && !e.__isScriptSetup && U(e, t), $r = {
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
        if (ls(s, t))
          return r[t] = 1, s[t];
        if (U(i, t))
          return r[t] = 3, i[t];
        if (n !== Q && U(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const c = Kt[t];
    let u, f;
    if (c)
      return t === "$attrs" && re(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Q && U(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, U(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: A, ctx: i } = e;
    return ls(A, t) ? (A[t] = n, !0) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: A, props: i, type: r }
  }, o) {
    let l;
    return !!(n[o] || ls(t, o) || U(i, o) || U(s, o) || U(Kt, o) || U(A.config.globalProperties, o) || (l = r.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Mi() {
  return {
    app: null,
    config: {
      isNativeTag: JA,
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
let Cr = 0;
function Mr(e, t) {
  return function(s, A = null) {
    Y(s) || (s = Se({}, s)), A != null && !q(A) && (A = null);
    const i = Mi(), r = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = i.app = {
      _uid: Cr++,
      _component: s,
      _props: A,
      _container: null,
      _context: i,
      _instance: null,
      version: rl,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...f) {
        return r.has(u) || (u && Y(u.install) ? (r.add(u), u.install(c, ...f)) : Y(u) && (r.add(u), u(c, ...f))), c;
      },
      mixin(u) {
        return c;
      },
      component(u, f) {
        return f ? (i.components[u] = f, c) : i.components[u];
      },
      directive(u, f) {
        return f ? (i.directives[u] = f, c) : i.directives[u];
      },
      mount(u, f, p) {
        if (!l) {
          const h = c._ceVNode || Ye(s, A);
          return h.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(h, u, p), l = !0, c._container = u, u.__vue_app__ = c, Zn(h.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (Oe(
          o,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, f) {
        return i.provides[u] = f, c;
      },
      runWithContext(u) {
        const f = It;
        It = c;
        try {
          return u();
        } finally {
          It = f;
        }
      }
    };
    return c;
  };
}
let It = null;
const Ir = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${we(t)}Modifiers`] || e[`${wt(t)}Modifiers`];
function Tr(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Q;
  let A = n;
  const i = t.startsWith("update:"), r = i && Ir(s, t.slice(7));
  r && (r.trim && (A = n.map((u) => se(u) ? u.trim() : u)), r.number && (A = A.map(Dn)));
  let o, l = s[o = ns(t)] || // also try camelCase event handler (#2249)
  s[o = ns(we(t))];
  !l && i && (l = s[o = ns(wt(t))]), l && Oe(
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
    e.emitted[o] = !0, Oe(
      c,
      e,
      6,
      A
    );
  }
}
function Pr(e, t, n = !1) {
  const s = t.emitsCache, A = s.get(e);
  if (A !== void 0)
    return A;
  const i = e.emits;
  let r = {};
  return i ? (B(i) ? i.forEach((o) => r[o] = null) : Se(r, i), q(e) && s.set(e, r), r) : (q(e) && s.set(e, null), null);
}
function Un(e, t) {
  return !e || !Fn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, wt(t)) || U(e, t));
}
function uA(e) {
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
    props: f,
    data: p,
    setupState: h,
    ctx: b,
    inheritAttrs: y
  } = e, L = zn(e);
  let O, N;
  try {
    if (n.shapeFlag & 4) {
      const I = A || s, X = I;
      O = Pe(
        c.call(
          X,
          I,
          u,
          f,
          h,
          p,
          b
        )
      ), N = o;
    } else {
      const I = t;
      O = Pe(
        I.length > 1 ? I(
          f,
          { attrs: o, slots: r, emit: l }
        ) : I(
          f,
          null
        )
      ), N = t.props ? o : Rr(o);
    }
  } catch (I) {
    bt.length = 0, Gn(I, e, 1), O = Ye(Ue);
  }
  let j = O;
  if (N && y !== !1) {
    const I = Object.keys(N), { shapeFlag: X } = j;
    I.length && X & 7 && (i && I.some(On) && (N = Nr(
      N,
      i
    )), j = Tt(j, N, !1, !0));
  }
  if (n.dirs && (j = Tt(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const I = Hn(j.type) && Ei(j) || j;
    Vs(I, n.transition);
  }
  return O = j, zn(L), O;
}
const Rr = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Fn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Nr = (e, t) => {
  const n = {};
  for (const s in e)
    (!On(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Fr(e, t, n) {
  const { props: s, children: A, component: i } = e, { props: r, children: o, patchFlag: l } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? fA(s, r, c) : !!r;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (Ii(r, s, p) && !Un(c, p))
          return !0;
      }
    }
  } else
    return (A || o) && (!o || !o.$stable) ? !0 : s === r ? !1 : s ? r ? fA(s, r, c) : !0 : !!r;
  return !1;
}
function fA(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let A = 0; A < s.length; A++) {
    const i = s[A];
    if (Ii(t, e, i) && !Un(n, i))
      return !0;
  }
  return !1;
}
function Ii(e, t, n) {
  const s = e[n], A = t[n];
  return n === "style" && q(s) && q(A) ? !tt(s, A) : s !== A;
}
function Or({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const A = t.subTree;
    if (A.suspense && A.suspense.activeBranch === e && (A.suspense.vnode.el = A.el = s, e = A), A === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Ti = {}, Pi = () => Object.create(Ti), Ri = (e) => Object.getPrototypeOf(e) === Ti;
function jr(e, t, n, s = !1) {
  const A = {}, i = Pi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ni(e, t, A, i);
  for (const r in e.propsOptions[0])
    r in A || (A[r] = void 0);
  n ? e.props = s ? A : /* @__PURE__ */ Ar(A) : e.type.props ? e.props = A : e.props = i, e.attrs = i;
}
function Dr(e, t, n, s) {
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
      for (let f = 0; f < u.length; f++) {
        let p = u[f];
        if (Un(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (l)
          if (U(i, p))
            h !== i[p] && (i[p] = h, c = !0);
          else {
            const b = we(p);
            A[b] = zs(
              l,
              o,
              b,
              h,
              e,
              !1
            );
          }
        else
          h !== i[p] && (i[p] = h, c = !0);
      }
    }
  } else {
    Ni(e, t, A, i) && (c = !0);
    let u;
    for (const f in o)
      (!t || // for camelCase
      !U(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = wt(f)) === f || !U(t, u))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (A[f] = zs(
        l,
        o,
        f,
        void 0,
        e,
        !0
      )) : delete A[f]);
    if (i !== o)
      for (const f in i)
        (!t || !U(t, f)) && (delete i[f], c = !0);
  }
  c && We(e.attrs, "set", "");
}
function Ni(e, t, n, s) {
  const [A, i] = e.propsOptions;
  let r = !1, o;
  if (t)
    for (let l in t) {
      if (Wt(l))
        continue;
      const c = t[l];
      let u;
      A && U(A, u = we(l)) ? !i || !i.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : Un(e.emitsOptions, l) || (!(l in s) || c !== s[l]) && (s[l] = c, r = !0);
    }
  if (i) {
    const l = /* @__PURE__ */ W(n), c = o || Q;
    for (let u = 0; u < i.length; u++) {
      const f = i[u];
      n[f] = zs(
        A,
        l,
        f,
        c[f],
        e,
        !U(c, f)
      );
    }
  }
  return r;
}
function zs(e, t, n, s, A, i) {
  const r = e[n];
  if (r != null) {
    const o = U(r, "default");
    if (o && s === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && Y(l)) {
        const { propsDefaults: c } = A;
        if (n in c)
          s = c[n];
        else {
          const u = Ys(A);
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
    ] && (s === "" || s === wt(n)) && (s = !0));
  }
  return s;
}
function Lr(e, t, n = !1) {
  const s = t.propsCache, A = s.get(e);
  if (A)
    return A;
  const i = e.props, r = {}, o = [];
  if (!i)
    return q(e) && s.set(e, ht), ht;
  if (B(i))
    for (let c = 0; c < i.length; c++) {
      const u = we(i[c]);
      dA(u) && (r[u] = Q);
    }
  else if (i)
    for (const c in i) {
      const u = we(c);
      if (dA(u)) {
        const f = i[c], p = r[u] = B(f) || Y(f) ? { type: f } : Se({}, f), h = p.type;
        let b = !1, y = !0;
        if (B(h))
          for (let L = 0; L < h.length; ++L) {
            const O = h[L], N = Y(O) && O.name;
            if (N === "Boolean") {
              b = !0;
              break;
            } else N === "String" && (y = !1);
          }
        else
          b = Y(h) && h.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = b, p[
          1
          /* shouldCastTrue */
        ] = y, (b || U(p, "default")) && o.push(u);
      }
    }
  const l = [r, o];
  return q(e) && s.set(e, l), l;
}
function dA(e) {
  return e[0] !== "$" && !Wt(e);
}
const Ws = (e) => e === "_" || e === "_ctx" || e === "$stable", Gs = (e) => B(e) ? e.map(Pe) : [Pe(e)], Br = (e, t, n) => {
  if (t._n)
    return t;
  const s = mr((...A) => Gs(t(...A)), n);
  return s._c = !1, s;
}, Fi = (e, t, n) => {
  const s = e._ctx;
  for (const A in e) {
    if (Ws(A)) continue;
    const i = e[A];
    if (Y(i))
      t[A] = Br(A, i, s);
    else if (i != null) {
      const r = Gs(i);
      t[A] = () => r;
    }
  }
}, Oi = (e, t) => {
  const n = Gs(t);
  e.slots.default = () => n;
}, ji = (e, t, n) => {
  for (const s in t)
    (n || !Ws(s)) && (e[s] = t[s]);
}, Vr = (e, t, n) => {
  const s = e.slots = Pi();
  if (e.vnode.shapeFlag & 32) {
    const A = t._;
    A ? (ji(s, t, n), n && ni(s, "_", A, !0)) : Fi(t, s);
  } else t && Oi(e, t);
}, Wr = (e, t, n) => {
  const { vnode: s, slots: A } = e;
  let i = !0, r = Q;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? i = !1 : ji(A, t, n) : (i = !t.$stable, Fi(t, A)), r = t;
  } else t && (Oi(e, t), r = { default: 1 });
  if (i)
    for (const o in A)
      !Ws(o) && r[o] == null && delete A[o];
}, fe = Kr;
function Gr(e) {
  return Yr(e);
}
function Yr(e, t) {
  const n = Ln();
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
    parentNode: f,
    nextSibling: p,
    setScopeId: h = gt,
    insertStaticContent: b
  } = e, y = (a, d, x, k = null, v = null, w = null, E = void 0, z = null, S = !!d.dynamicChildren) => {
    if (a === d)
      return;
    a && !Lt(a, d) && (k = fn(a), De(a, v, w, !0), a = null), d.patchFlag === -2 && (S = !1, d.dynamicChildren = null), d.dynamicChildren && a && a.dynamicChildren && a.dynamicChildren.hasOnce && (d.dynamicChildren === ht && (d.dynamicChildren = []), d.dynamicChildren.hasOnce = !0);
    const { type: _, ref: F, shapeFlag: $ } = d;
    switch (_) {
      case Kn:
        L(a, d, x, k);
        break;
      case Ue:
        O(a, d, x, k);
        break;
      case as:
        a == null && N(d, x, k, E);
        break;
      case J:
        cn(
          a,
          d,
          x,
          k,
          v,
          w,
          E,
          z,
          S
        );
        break;
      default:
        $ & 1 ? X(
          a,
          d,
          x,
          k,
          v,
          w,
          E,
          z,
          S
        ) : $ & 6 ? ue(
          a,
          d,
          x,
          k,
          v,
          w,
          E,
          z,
          S
        ) : ($ & 64 || $ & 128) && _.process(
          a,
          d,
          x,
          k,
          v,
          w,
          E,
          z,
          S,
          Ot
        );
    }
    F != null && v ? Ht(F, a && a.ref, w, d || a, !d) : F == null && a && a.ref != null && Ht(a.ref, null, w, a, !0);
  }, L = (a, d, x, k) => {
    if (a == null)
      s(
        d.el = o(d.children),
        x,
        k
      );
    else {
      const v = d.el = a.el;
      d.children !== a.children && c(v, d.children);
    }
  }, O = (a, d, x, k) => {
    a == null ? s(
      d.el = l(d.children || ""),
      x,
      k
    ) : d.el = a.el;
  }, N = (a, d, x, k) => {
    [a.el, a.anchor] = b(
      a.children,
      d,
      x,
      k,
      a.el,
      a.anchor
    );
  }, j = ({ el: a, anchor: d }, x, k) => {
    let v;
    for (; a && a !== d; )
      v = p(a), s(a, x, k), a = v;
    s(d, x, k);
  }, I = ({ el: a, anchor: d }) => {
    let x;
    for (; a && a !== d; )
      x = p(a), A(a), a = x;
    A(d);
  }, X = (a, d, x, k, v, w, E, z, S) => {
    if (d.type === "svg" ? E = "svg" : d.type === "math" && (E = "mathml"), a == null)
      ee(
        d,
        x,
        k,
        v,
        w,
        E,
        z,
        S
      );
    else {
      const _ = a.el && a.el._isVueCE ? a.el : null;
      try {
        _ && _._beginPatch(), je(
          a,
          d,
          v,
          w,
          E,
          z,
          S
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, ee = (a, d, x, k, v, w, E, z) => {
    let S, _;
    const { props: F, shapeFlag: $, transition: P, dirs: D } = a;
    if (S = a.el = r(
      a.type,
      w,
      F && F.is,
      F
    ), $ & 8 ? u(S, a.children) : $ & 16 && de(
      a.children,
      S,
      null,
      k,
      v,
      cs(a, w),
      E,
      z
    ), D && ut(a, null, k, "created"), le(S, a, a.scopeId, E, k), F) {
      for (const H in F)
        H !== "value" && !Wt(H) && i(S, H, null, F[H], w, k);
      "value" in F && i(S, "value", null, F.value, w), (_ = F.onVnodeBeforeMount) && Me(_, k, a);
    }
    D && ut(a, null, k, "beforeMount");
    const V = Hr(v, P);
    V && P.beforeEnter(S), s(S, d, x), ((_ = F && F.onVnodeMounted) || V || D) && fe(() => {
      try {
        _ && Me(_, k, a), V && P.enter(S), D && ut(a, null, k, "mounted");
      } finally {
      }
    }, v);
  }, le = (a, d, x, k, v) => {
    if (x && h(a, x), k)
      for (let w = 0; w < k.length; w++)
        h(a, k[w]);
    if (v) {
      let w = v.subTree;
      if (d === w || Vi(w.type) && (w.ssContent === d || w.ssFallback === d)) {
        const E = v.vnode;
        le(
          a,
          E,
          E.scopeId,
          E.slotScopeIds,
          v.parent
        );
      }
    }
  }, de = (a, d, x, k, v, w, E, z, S = 0) => {
    for (let _ = S; _ < a.length; _++) {
      const F = a[_] = z ? Ve(a[_]) : Pe(a[_]);
      y(
        null,
        F,
        d,
        x,
        k,
        v,
        w,
        E,
        z
      );
    }
  }, je = (a, d, x, k, v, w, E) => {
    const z = d.el = a.el;
    let { patchFlag: S, dynamicChildren: _, dirs: F } = d;
    S |= a.patchFlag & 16;
    const $ = a.props || Q, P = d.props || Q;
    let D;
    if (x && ft(x, !1), (D = P.onVnodeBeforeUpdate) && Me(D, x, d, a), F && ut(d, a, x, "beforeUpdate"), x && ft(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!a.dynamicChildren || a.dynamicChildren.length !== _.length) && (S = 0, E = !1, _ = null), ($.innerHTML && P.innerHTML == null || $.textContent && P.textContent == null) && u(z, ""), _ ? Ze(
      a.dynamicChildren,
      _,
      z,
      x,
      k,
      cs(d, v),
      w
    ) : E || ze(
      a,
      d,
      z,
      null,
      x,
      k,
      cs(d, v),
      w,
      !1
    ), S > 0) {
      if (S & 16)
        te(z, $, P, x, v);
      else if (S & 2 && $.class !== P.class && i(z, "class", null, P.class, v), S & 4 && i(z, "style", $.style, P.style, v), S & 8) {
        const V = d.dynamicProps;
        for (let H = 0; H < V.length; H++) {
          const G = V[H], ne = $[G], ie = P[G];
          (ie !== ne || G === "value") && i(z, G, ne, ie, v, x);
        }
      }
      S & 1 && a.children !== d.children && u(z, d.children);
    } else !E && _ == null && te(z, $, P, x, v);
    ((D = P.onVnodeUpdated) || F) && fe(() => {
      D && Me(D, x, d, a), F && ut(d, a, x, "updated");
    }, k);
  }, Ze = (a, d, x, k, v, w, E) => {
    for (let z = 0; z < d.length; z++) {
      const S = a[z], _ = d[z], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === J || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Lt(S, _) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? f(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      y(
        S,
        _,
        F,
        null,
        k,
        v,
        w,
        E,
        !0
      );
    }
  }, te = (a, d, x, k, v) => {
    if (d !== x) {
      if (d !== Q)
        for (const w in d)
          !Wt(w) && !(w in x) && i(
            a,
            w,
            d[w],
            null,
            v,
            k
          );
      for (const w in x) {
        if (Wt(w)) continue;
        const E = x[w], z = d[w];
        E !== z && w !== "value" && i(a, w, z, E, v, k);
      }
      "value" in x && i(a, "value", d.value, x.value, v);
    }
  }, cn = (a, d, x, k, v, w, E, z, S) => {
    const _ = d.el = a ? a.el : o(""), F = d.anchor = a ? a.anchor : o("");
    let { patchFlag: $, dynamicChildren: P, slotScopeIds: D } = d;
    D && (z = z ? z.concat(D) : D), a == null ? (s(_, x, k), s(F, x, k), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      x,
      F,
      v,
      w,
      E,
      z,
      S
    )) : $ > 0 && $ & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === P.length ? (Ze(
      a.dynamicChildren,
      P,
      x,
      v,
      w,
      E,
      z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || v && d === v.subTree) && Di(
      a,
      d,
      !0
      /* shallow */
    )) : ze(
      a,
      d,
      x,
      F,
      v,
      w,
      E,
      z,
      S
    );
  }, ue = (a, d, x, k, v, w, E, z, S) => {
    d.slotScopeIds = z, a == null ? d.shapeFlag & 512 ? v.ctx.activate(
      d,
      x,
      k,
      E,
      S
    ) : _e(
      d,
      x,
      k,
      v,
      w,
      E,
      S
    ) : Rt(a, d, S);
  }, _e = (a, d, x, k, v, w, E) => {
    const z = a.component = el(
      a,
      k,
      v
    );
    if ($i(a) && (z.ctx.renderer = Ot), nl(z, !1, E), z.asyncDep) {
      if (v && v.registerDep(z, Nt, E), !a.el) {
        const S = z.subTree = Ye(Ue);
        O(null, S, d, x), a.placeholder = S.el;
      }
    } else
      Nt(
        z,
        a,
        d,
        x,
        v,
        w,
        E
      );
  }, Rt = (a, d, x) => {
    const k = d.component = a.component;
    if (Fr(a, d, x))
      if (k.asyncDep && !k.asyncResolved) {
        d.el = a.el, zt(k, d, x);
        return;
      } else
        k.next = d, k.update();
    else
      d.el = a.el, k.vnode = d;
  }, Nt = (a, d, x, k, v, w, E) => {
    const z = () => {
      if (a.isMounted) {
        let { next: $, bu: P, u: D, parent: V, vnode: H } = a;
        {
          const $e = Li(a);
          if ($e) {
            $ && ($.el = H.el, zt(a, $, E)), $e.asyncDep.then(() => {
              fe(() => {
                a.isUnmounted || _();
              }, v);
            });
            return;
          }
        }
        let G = $, ne;
        ft(a, !1), $ ? ($.el = H.el, zt(a, $, E)) : $ = H, P && xn(P), (ne = $.props && $.props.onVnodeBeforeUpdate) && Me(ne, V, $, H), ft(a, !0);
        const ie = uA(a), Ee = a.subTree;
        a.subTree = ie, y(
          Ee,
          ie,
          // parent may have changed if it's in a teleport
          f(Ee.el),
          // anchor may have changed if it's in a fragment
          fn(Ee),
          a,
          v,
          w
        ), $.el = ie.el, G === null && Or(a, ie.el), D && fe(D, v), (ne = $.props && $.props.onVnodeUpdated) && fe(
          () => Me(ne, V, $, H),
          v
        );
      } else {
        let $;
        const { el: P, props: D } = d, { bm: V, m: H, parent: G, root: ne, type: ie } = a, Ee = Ut(d);
        ft(a, !1), V && xn(V), !Ee && ($ = D && D.onVnodeBeforeMount) && Me($, G, d), ft(a, !0);
        {
          ne.ce && ne.ce._hasShadowRoot() && ne.ce._injectChildStyle(
            ie,
            a.parent ? a.parent.type : void 0
          );
          const $e = a.subTree = uA(a);
          y(
            null,
            $e,
            x,
            k,
            a,
            v,
            w
          ), d.el = $e.el;
        }
        if (H && fe(H, v), !Ee && ($ = D && D.onVnodeMounted)) {
          const $e = d;
          fe(
            () => Me($, G, $e),
            v
          );
        }
        (d.shapeFlag & 256 || G && Ut(G.vnode) && G.vnode.shapeFlag & 256) && a.a && fe(a.a, v), a.isMounted = !0, d = x = k = null;
      }
    };
    a.scope.on();
    const S = a.effect = new oi(z);
    a.scope.off();
    const _ = a.update = S.run.bind(S), F = a.job = S.runIfDirty.bind(S);
    F.i = a, F.id = a.uid, S.scheduler = () => Bs(F), ft(a, !0), _();
  }, zt = (a, d, x) => {
    d.component = a;
    const k = a.vnode.props;
    a.vnode = d, a.next = null, Dr(a, d.props, k, x), Wr(a, d.children, x), nt(), lA(a), st();
  }, ze = (a, d, x, k, v, w, E, z, S = !1) => {
    const _ = a && a.children, F = a ? a.shapeFlag : 0, $ = d.children, { patchFlag: P, shapeFlag: D } = d;
    if (P > 0) {
      if (P & 128) {
        at(
          _,
          $,
          x,
          k,
          v,
          w,
          E,
          z,
          S
        );
        return;
      } else if (P & 256) {
        an(
          _,
          $,
          x,
          k,
          v,
          w,
          E,
          z,
          S
        );
        return;
      }
    }
    D & 8 ? (F & 16 && Ft(_, v, w), $ !== _ && u(x, $)) : F & 16 ? D & 16 ? at(
      _,
      $,
      x,
      k,
      v,
      w,
      E,
      z,
      S
    ) : Ft(_, v, w, !0) : (F & 8 && u(x, ""), D & 16 && de(
      $,
      x,
      k,
      v,
      w,
      E,
      z,
      S
    ));
  }, an = (a, d, x, k, v, w, E, z, S) => {
    a = a || ht, d = d || ht;
    const _ = a.length, F = d.length, $ = Math.min(_, F);
    let P;
    for (P = 0; P < $; P++) {
      const D = d[P] = S ? Ve(d[P]) : Pe(d[P]);
      y(
        a[P],
        D,
        x,
        null,
        v,
        w,
        E,
        z,
        S
      );
    }
    _ > F ? Ft(
      a,
      v,
      w,
      !0,
      !1,
      $
    ) : de(
      d,
      x,
      k,
      v,
      w,
      E,
      z,
      S,
      $
    );
  }, at = (a, d, x, k, v, w, E, z, S) => {
    let _ = 0;
    const F = d.length;
    let $ = a.length - 1, P = F - 1;
    for (; _ <= $ && _ <= P; ) {
      const D = a[_], V = d[_] = S ? Ve(d[_]) : Pe(d[_]);
      if (Lt(D, V))
        y(
          D,
          V,
          x,
          null,
          v,
          w,
          E,
          z,
          S
        );
      else
        break;
      _++;
    }
    for (; _ <= $ && _ <= P; ) {
      const D = a[$], V = d[P] = S ? Ve(d[P]) : Pe(d[P]);
      if (Lt(D, V))
        y(
          D,
          V,
          x,
          null,
          v,
          w,
          E,
          z,
          S
        );
      else
        break;
      $--, P--;
    }
    if (_ > $) {
      if (_ <= P) {
        const D = P + 1, V = D < F ? d[D].el : k;
        for (; _ <= P; )
          y(
            null,
            d[_] = S ? Ve(d[_]) : Pe(d[_]),
            x,
            V,
            v,
            w,
            E,
            z,
            S
          ), _++;
      }
    } else if (_ > P)
      for (; _ <= $; )
        De(a[_], v, w, !0), _++;
    else {
      const D = _, V = _, H = /* @__PURE__ */ new Map();
      for (_ = V; _ <= P; _++) {
        const pe = d[_] = S ? Ve(d[_]) : Pe(d[_]);
        pe.key != null && H.set(pe.key, _);
      }
      let G, ne = 0;
      const ie = P - V + 1;
      let Ee = !1, $e = 0;
      const jt = new Array(ie);
      for (_ = 0; _ < ie; _++) jt[_] = 0;
      for (_ = D; _ <= $; _++) {
        const pe = a[_];
        if (ne >= ie) {
          De(pe, v, w, !0);
          continue;
        }
        let Ce;
        if (pe.key != null)
          Ce = H.get(pe.key);
        else
          for (G = V; G <= P; G++)
            if (jt[G - V] === 0 && Lt(pe, d[G])) {
              Ce = G;
              break;
            }
        Ce === void 0 ? De(pe, v, w, !0) : (jt[Ce - V] = _ + 1, Ce >= $e ? $e = Ce : Ee = !0, y(
          pe,
          d[Ce],
          x,
          null,
          v,
          w,
          E,
          z,
          S
        ), ne++);
      }
      const Xs = Ee ? Ur(jt) : ht;
      for (G = Xs.length - 1, _ = ie - 1; _ >= 0; _--) {
        const pe = V + _, Ce = d[pe], eA = d[pe + 1], tA = pe + 1 < F ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          eA.el || Bi(eA)
        ) : k;
        jt[_] === 0 ? y(
          null,
          Ce,
          x,
          tA,
          v,
          w,
          E,
          z,
          S
        ) : Ee && (G < 0 || _ !== Xs[G] ? un(Ce, x, tA, 2) : G--);
      }
    }
  }, un = (a, d, x, k, v = null) => {
    const { el: w, type: E, transition: z, children: S, shapeFlag: _ } = a;
    if (_ & 6) {
      un(a.component.subTree, d, x, k);
      return;
    }
    if (_ & 128) {
      a.suspense.move(d, x, k);
      return;
    }
    if (_ & 64) {
      E.move(a, d, x, Ot);
      return;
    }
    if (E === J) {
      s(w, d, x);
      for (let $ = 0; $ < S.length; $++)
        un(S[$], d, x, k);
      s(a.anchor, d, x);
      return;
    }
    if (E === as) {
      j(a, d, x);
      return;
    }
    if (k !== 2 && _ & 1 && z)
      if (k === 0)
        z.persisted && !w[rs] ? s(w, d, x) : (z.beforeEnter(w), s(w, d, x), fe(() => z.enter(w), v));
      else {
        const { leave: $, delayLeave: P, afterLeave: D } = z, V = () => {
          a.ctx.isUnmounted ? A(w) : s(w, d, x);
        }, H = () => {
          const G = w._isLeaving || !!w[rs];
          w._isLeaving && w[rs](
            !0
            /* cancelled */
          ), z.persisted && !G ? V() : $(w, () => {
            V(), D && D();
          });
        };
        P ? P(w, V, H) : H();
      }
    else
      s(w, d, x);
  }, De = (a, d, x, k = !1, v = !1) => {
    const {
      type: w,
      props: E,
      ref: z,
      children: S,
      dynamicChildren: _,
      shapeFlag: F,
      patchFlag: $,
      dirs: P,
      cacheIndex: D,
      memo: V
    } = a;
    if (($ === -2 || _ && _.hasOnce) && (v = !1), z != null && (nt(), Ht(z, null, x, a, !0), st()), D != null && (!a.ctx || a.ctx === d) && (d.renderCache[D] = void 0), F & 256) {
      d.ctx.deactivate(a);
      return;
    }
    const H = F & 1 && P, G = !Ut(a);
    let ne;
    if (G && (ne = E && E.onVnodeBeforeUnmount) && Me(ne, d, a), F & 6)
      So(a.component, x, k);
    else {
      if (F & 128) {
        a.suspense.unmount(x, k);
        return;
      }
      H && ut(a, null, d, "beforeUnmount"), F & 64 ? a.type.remove(
        a,
        d,
        x,
        Ot,
        k
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== J || $ > 0 && $ & 64) ? Ft(
        _,
        d,
        x,
        !1,
        !0
      ) : (w === J && $ & 384 || !v && F & 16) && Ft(S, d, x), k && Qs(a);
    }
    const ie = V != null && D == null;
    (G && (ne = E && E.onVnodeUnmounted) || H || ie) && fe(() => {
      ne && Me(ne, d, a), H && ut(a, null, d, "unmounted"), ie && (a.el = null);
    }, x);
  }, Qs = (a) => {
    const { type: d, el: x, anchor: k, transition: v } = a;
    if (d === J) {
      ko(x, k);
      return;
    }
    if (d === as) {
      I(a), v && !v.persisted && v.afterLeave && v.afterLeave();
      return;
    }
    const w = () => {
      A(x), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (a.shapeFlag & 1 && v && !v.persisted) {
      const { leave: E, delayLeave: z } = v, S = () => E(x, w);
      z ? z(a.el, w, S) : S();
    } else
      w();
  }, ko = (a, d) => {
    let x;
    for (; a !== d; )
      x = p(a), A(a), a = x;
    A(d);
  }, So = (a, d, x) => {
    const { bum: k, scope: v, job: w, subTree: E, um: z, m: S, a: _ } = a;
    pA(S), pA(_), k && xn(k), v.stop(), w ? (w.flags |= 8, De(E, a, d, x)) : a.vnode.el && E && (E.transition = a.vnode.transition, De(E, a, d, x)), z && fe(z, d), fe(() => {
      a.isUnmounted = !0;
    }, d);
  }, Ft = (a, d, x, k = !1, v = !1, w = 0) => {
    for (let E = w; E < a.length; E++)
      De(a[E], d, x, k, v);
  }, fn = (a) => {
    if (a.shapeFlag & 6)
      return fn(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const d = p(a.anchor || a.el), x = d && d[vr];
    return x ? p(x) : d;
  };
  let ts = !1;
  const qs = (a, d, x) => {
    let k;
    a == null ? d._vnode && (De(d._vnode, null, null, !0), k = d._vnode.component) : y(
      d._vnode || null,
      a,
      d,
      null,
      null,
      null,
      x
    ), d._vnode = a, ts || (ts = !0, lA(k), ki(), ts = !1);
  }, Ot = {
    p: y,
    um: De,
    m: un,
    r: Qs,
    mt: _e,
    mc: de,
    pc: ze,
    pbc: Ze,
    n: fn,
    o: e
  };
  return {
    render: qs,
    hydrate: void 0,
    createApp: Mr(qs)
  };
}
function cs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ft({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Hr(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Di(e, t, n = !1) {
  const s = e.children, A = t.children;
  if (B(s) && B(A))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let o = A[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = A[i] = Ve(A[i]), o.el = r.el), !n && o.patchFlag !== -2 && Di(r, o)), o.type === Kn && (o.patchFlag === -1 && (o = A[i] = Ve(o)), o.el = r.el), o.type === Ue && !o.el && (o.el = r.el);
    }
}
function Ur(e) {
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
function Li(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Li(t);
}
function pA(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Bi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Bi(t.subTree) : null;
}
const Vi = (e) => e.__isSuspense;
function Kr(e, t) {
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : hr(e);
}
const J = /* @__PURE__ */ Symbol.for("v-fgt"), Kn = /* @__PURE__ */ Symbol.for("v-txt"), Ue = /* @__PURE__ */ Symbol.for("v-cmt"), as = /* @__PURE__ */ Symbol.for("v-stc"), bt = [];
let he = null;
function C(e = !1) {
  bt.push(he = e ? null : []);
}
function Wi() {
  bt.pop(), he = bt[bt.length - 1] || null;
}
let en = 1;
function hA(e, t = !1) {
  en += e, e < 0 && he && t && (he.hasOnce = !0);
}
function Gi(e) {
  return e.dynamicChildren = en > 0 ? he || ht : null, Wi(), en > 0 && he && he.push(e), e;
}
function M(e, t, n, s, A, i) {
  return Gi(
    m(
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
function et(e, t, n, s, A) {
  return Gi(
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
function Yi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Hi = ({ key: e }) => e ?? null, yn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || /* @__PURE__ */ ae(e) || Y(e) ? { i: be, r: e, k: t, f: !!n } : e : null);
function m(e, t = null, n = null, s = 0, A = null, i = e === J ? 0 : 1, r = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Hi(t),
    ref: t && yn(t),
    scopeId: zi,
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
  return o ? ($n(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= se(n) ? 8 : 16), en > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  he && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && he.push(l), l;
}
const Ye = Zr;
function Zr(e, t = null, n = null, s = 0, A = null, i = !1) {
  if ((!e || e === Er) && (e = Ue), Yi(e)) {
    const o = Tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && $n(o, n), en > 0 && !i && he && (o.shapeFlag & 6 ? he[he.indexOf(e)] = o : he.push(o)), o.patchFlag = -2, o;
  }
  if (ol(e) && (e = e.__vccOpts), t) {
    t = Jr(t);
    let { class: o, style: l } = t;
    o && !se(o) && (t.class = ct(o)), q(l) && (/* @__PURE__ */ Ls(l) && !B(l) && (l = Se({}, l)), t.style = Bn(l));
  }
  const r = se(e) ? 1 : Vi(e) ? 128 : Hn(e) ? 64 : q(e) ? 4 : Y(e) ? 2 : 0;
  return m(
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
function Jr(e) {
  return e ? /* @__PURE__ */ Ls(e) || Ri(e) ? Se({}, e) : e : null;
}
function Tt(e, t, n = !1, s = !1) {
  const { props: A, ref: i, patchFlag: r, children: o, transition: l } = e, c = t ? Qr(A || {}, t) : A, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Hi(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? B(i) ? i.concat(yn(t)) : [i, yn(t)] : yn(t)
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
    patchFlag: t && e.type !== J ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Tt(e.ssContent),
    ssFallback: e.ssFallback && Tt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return l && s && Vs(
    u,
    l.clone(u)
  ), u;
}
function Zt(e = " ", t = 0) {
  return Ye(Kn, null, e, t);
}
function Z(e = "", t = !1) {
  return t ? (C(), et(Ue, null, e)) : Ye(Ue, null, e);
}
function Pe(e) {
  return e == null || typeof e == "boolean" ? Ye(Ue) : B(e) ? Ye(
    J,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Yi(e) ? Ve(e) : Ye(Kn, null, String(e));
}
function Ve(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Tt(e);
}
function $n(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (B(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const A = t.default;
      A && (A._c && (A._d = !1), $n(e, A()), A._c && (A._d = !0));
      return;
    } else {
      n = 32;
      const A = t._;
      !A && !Ri(t) ? t._ctx = be : A === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Y(t)) {
    if (s & 65) {
      $n(e, { default: t });
      return;
    }
    t = { default: t, _ctx: be }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Zt(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Qr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const A in s)
      if (A === "class")
        t.class !== s.class && (t.class = ct([t.class, s.class]));
      else if (A === "style")
        t.style = Bn([t.style, s.style]);
      else if (Fn(A)) {
        const i = t[A], r = s[A];
        r && i !== r && !(B(i) && i.includes(r)) ? t[A] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !On(A) && (t[A] = r);
      } else A !== "" && (t[A] = s[A]);
  }
  return t;
}
function Me(e, t, n, s = null) {
  Oe(e, t, 7, [
    n,
    s
  ]);
}
const qr = Mi();
let Xr = 0;
function el(e, t, n) {
  const s = e.type, A = (t ? t.appContext : e.appContext) || qr, i = {
    uid: Xr++,
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
    scope: new Do(
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
    emitsOptions: Pr(s, A),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Tr.bind(null, i), e.ce && e.ce(i), i;
}
let it = null;
const tl = () => it || be;
let Cn, tn;
{
  const e = Ln(), t = (n, s) => {
    let A;
    return (A = e[n]) || (A = e[n] = []), A.push(s), (i) => {
      A.length > 1 ? A.forEach((r) => r(i)) : A[0](i);
    };
  };
  Cn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => it = n
  ), tn = t(
    "__VUE_SSR_SETTERS__",
    (n) => nn = n
  );
}
const Ys = (e) => {
  const t = it;
  return Cn(e), e.scope.on(), () => {
    e.scope.off(), Cn(t);
  };
}, mA = () => {
  it && it.scope.off(), Cn(null);
};
function Ui(e) {
  return e.vnode.shapeFlag & 4;
}
let nn = !1;
function nl(e, t = !1, n = !1) {
  t && tn(t);
  const { props: s, children: A } = e.vnode, i = Ui(e);
  jr(e, s, i, t), Vr(e, A, n || t);
  const r = i ? sl(e, t) : void 0;
  return t && tn(!1), r;
}
function sl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $r);
  const { setup: s } = n;
  if (s) {
    nt();
    const A = e.setupContext = s.length > 1 ? il(e) : null, i = Ys(e), r = ln(
      s,
      e,
      0,
      [
        e.props,
        A
      ]
    ), o = qA(r);
    if (st(), i(), (o || e.sp) && !Ut(e) && wr(e), o) {
      if (r.then(mA, mA), t)
        return r.then((l) => {
          tn(!0);
          try {
            gA(e, l, t);
          } finally {
            tn(!1);
          }
        }).catch((l) => {
          Gn(l, e, 0);
        });
      e.asyncDep = r;
    } else
      gA(e, r);
  } else
    Ki(e);
}
function gA(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = yi(t)), Ki(e);
}
function Ki(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || gt);
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
function Zn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(yi(ir(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Kt)
        return Kt[n](e);
    },
    has(t, n) {
      return n in t || n in Kt;
    }
  })) : e.proxy;
}
function ol(e) {
  return Y(e) && "__vccOpts" in e;
}
const Ae = (e, t) => /* @__PURE__ */ ar(e, t, nn), rl = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Es;
const xA = typeof window < "u" && window.trustedTypes;
if (xA)
  try {
    Es = /* @__PURE__ */ xA.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Zi = Es ? (e) => Es.createHTML(e) : (e) => e, ll = "http://www.w3.org/2000/svg", cl = "http://www.w3.org/1998/Math/MathML", Be = typeof document < "u" ? document : null, bA = Be && /* @__PURE__ */ Be.createElement("template"), al = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const A = t === "svg" ? Be.createElementNS(ll, e) : t === "mathml" ? Be.createElementNS(cl, e) : n ? Be.createElement(e, { is: n }) : Be.createElement(e);
    return e === "select" && s && s.multiple != null && A.setAttribute("multiple", s.multiple), A;
  },
  createText: (e) => Be.createTextNode(e),
  createComment: (e) => Be.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Be.querySelector(e),
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
      bA.innerHTML = Zi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const o = bA.content;
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
const yA = /* @__PURE__ */ Symbol("_vod"), dl = /* @__PURE__ */ Symbol("_vsh"), pl = /* @__PURE__ */ Symbol(""), hl = /(?:^|;)\s*display\s*:/;
function ml(e, t, n) {
  const s = e.style, A = se(n);
  let i = !1;
  if (n && !A) {
    if (t)
      if (se(t))
        for (const r of t.split(";")) {
          const o = r.slice(0, r.indexOf(":")).trim();
          n[o] == null && Vt(s, o, "");
        }
      else
        for (const r in t)
          n[r] == null && Vt(s, r, "");
    for (const r in n) {
      r === "display" && (i = !0);
      const o = n[r];
      o != null ? xl(
        e,
        r,
        !se(t) && t ? t[r] : void 0,
        o
      ) || Vt(s, r, o) : Vt(s, r, "");
    }
  } else if (A) {
    if (t !== n) {
      const r = s[pl];
      r && (n += ";" + r), s.cssText = n, i = hl.test(n);
    }
  } else t && e.removeAttribute("style");
  yA in e && (e[yA] = i ? s.display : "", e[dl] && (s.display = "none"));
}
const mn = /\s*!important$/;
function Vt(e, t, n) {
  if (B(n))
    n.forEach((s) => Vt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    mn.test(n) ? e.setProperty(t, n.replace(mn, ""), "important") : e.setProperty(t, n);
  else {
    const s = gl(e, t);
    mn.test(n) ? e.setProperty(
      wt(s),
      n.replace(mn, ""),
      "important"
    ) : e[s] = n;
  }
}
const vA = ["Webkit", "Moz", "ms"], us = {};
function gl(e, t) {
  const n = us[t];
  if (n)
    return n;
  let s = we(t);
  if (s !== "filter" && s in e)
    return us[t] = s;
  s = ti(s);
  for (let A = 0; A < vA.length; A++) {
    const i = vA[A] + s;
    if (i in e)
      return us[t] = i;
  }
  return t;
}
function xl(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && se(s) && n === s;
}
const _A = "http://www.w3.org/1999/xlink";
function wA(e, t, n, s, A, i = No(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_A, t.slice(6, t.length)) : e.setAttributeNS(_A, t, n) : n == null || i && !si(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ne(n) ? String(n) : n
  );
}
function kA(e, t, n, s, A) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Zi(n) : n);
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
    o === "boolean" ? n = si(n) : n == null && o === "string" ? (n = "", r = !0) : o === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(A || t);
}
function pt(e, t, n, s) {
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
      const c = i[t] = zl(
        s,
        A
      );
      pt(e, o, c, l);
    } else r && (bl(e, o, r, l), i[t] = void 0);
  }
}
const vl = /(Once|Passive|Capture)$/, _l = /^on:?(?:Once|Passive|Capture)$/;
function wl(e) {
  let t, n;
  for (; (n = e.match(vl)) && !_l.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : wt(e.slice(2)), t];
}
let fs = 0;
const kl = /* @__PURE__ */ Promise.resolve(), Sl = () => fs || (kl.then(() => fs = 0), fs = Date.now());
function zl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const A = n.value;
    if (B(A)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const r = A.slice(), o = [s];
      for (let l = 0; l < r.length && !s._stopped; l++) {
        const c = r[l];
        c && Oe(
          c,
          t,
          5,
          o
        );
      }
    } else
      Oe(
        A,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Sl(), n;
}
const zA = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, El = (e, t, n, s, A, i) => {
  const r = A === "svg";
  t === "class" ? fl(e, s, r) : t === "style" ? ml(e, n, s) : Fn(t) ? On(t) || yl(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : $l(e, t, s, r)) ? (kA(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && wA(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Cl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !se(s))) ? kA(e, we(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), wA(e, t, s, r));
};
function $l(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && zA(t) && Y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const A = e.tagName;
    if (A === "IMG" || A === "VIDEO" || A === "CANVAS" || A === "SOURCE")
      return !1;
  }
  return zA(t) && se(n) ? !1 : t in e;
}
function Cl(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = we(t);
  return Array.isArray(n) ? n.some((A) => we(A) === s) : Object.keys(n).some((A) => we(A) === s);
}
const Mn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (n) => xn(t, n) : t;
};
function Ml(e) {
  e.target.composing = !0;
}
function EA(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const mt = /* @__PURE__ */ Symbol("_assign"), gn = /* @__PURE__ */ Symbol("_initialValue");
function ds(e, t, n) {
  return t && (e = e.trim()), n && (e = Dn(e)), e;
}
const $A = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, A) {
    e.parentNode && (e.type === "text" ? e[gn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[gn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[mt] = Mn(A);
    const i = s || A.props && A.props.type === "number";
    pt(e, t ? "change" : "input", (r) => {
      r.target.composing || e[mt](ds(e.value, n, i));
    }), (n || i) && pt(e, "change", () => {
      e.value = ds(e.value, n, i);
    }), t || (pt(e, "compositionstart", Ml), pt(e, "compositionend", EA), pt(e, "change", EA));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const A = t ?? "", i = e[gn];
    delete e[gn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[mt](ds(e.value, n, s)) : e.value = A;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: A, number: i } }, r) {
    if (e[mt] = Mn(r), e.composing) return;
    const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? Dn(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || A && e.value.trim() === l) || (e.value = l);
  }
}, Ji = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, pt(e, "change", () => {
      const A = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Dn(In(l)) : In(l)
      ), i = e.multiple, r = i ? yt(e._modelValue) ? new Set(A) : A : A[0], o = e._pendingValue = [
        i,
        i ? B(r) ? A.slice() : A : r
      ];
      try {
        e[mt](r);
      } finally {
        _i(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[mt] = Mn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    CA(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[mt] = Mn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Il(t, n[1], n[0])) && CA(e, t);
  }
};
function Il(e, t, n) {
  if (!n || B(e)) return tt(e, t);
  if (yt(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function CA(e, t) {
  const n = e.multiple, s = B(t);
  if (!(n && !s && !yt(t))) {
    for (let A = 0, i = e.options.length; A < i; A++) {
      const r = e.options[A], o = In(r);
      if (n)
        if (s) {
          const l = typeof o;
          l === "string" || l === "number" ? r.selected = t.some((c) => String(c) === String(o)) : r.selected = jo(t, o) > -1;
        } else
          r.selected = t.has(o);
      else if (tt(In(r), t)) {
        e.selectedIndex !== A && (e.selectedIndex = A);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function In(e) {
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
}, Nl = /* @__PURE__ */ Se({ patchProp: El }, al);
let MA;
function Fl() {
  return MA || (MA = Gr(Nl));
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
  return se(e) ? document.querySelector(e) : e;
}
const Ll = "zhonglou", Bl = "钟楼", Vl = "1.2.0", Wl = "S", Gl = 10, Yl = "【副本进行中：钟楼】", Hl = [], Ul = { briefingName: "钟楼" }, Kl = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, Zl = { type: "nights", template: "剩余{n}夜" }, Jl = "至第四日日出", Ql = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], ql = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", Xl = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], ec = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], tc = [{ title: "游玩说明", md: `## 副本概况
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
  id: Ll,
  name: Bl,
  version: Vl,
  level: Wl,
  players: Gl,
  token: Yl,
  legacyKeys: Hl,
  detect: Ul,
  time: Kl,
  remaining: Zl,
  deadline: Jl,
  roles: Ql,
  rolesNote: ql,
  phases: Xl,
  events: ec,
  docs: tc
}, sc = "jingjie", Ac = "境界游乐园", ic = "1.0.0", oc = "A", rc = "【副本进行中：境界游乐园】", lc = [], cc = { briefingName: "境界游乐园" }, ac = { type: "none" }, uc = { type: "fromPanel" }, fc = [], dc = [], pc = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
  level: oc,
  token: rc,
  legacyKeys: lc,
  detect: cc,
  time: ac,
  remaining: uc,
  phases: fc,
  events: dc,
  docs: pc
}, mc = "kaoshi", gc = "考试", xc = "1.1.0", bc = "A", yc = "【副本进行中：考试】", vc = [], _c = { briefingName: "考试" }, wc = { type: "countdown", minutesPerRound: 3 }, kc = { type: "fromPanel" }, Sc = "至考试结束", zc = [{ id: "main", name: "考试", cap: 100, next: null }], Ec = [], $c = [], Cc = {
  id: mc,
  name: gc,
  version: xc,
  level: bc,
  token: yc,
  legacyKeys: vc,
  detect: _c,
  time: wc,
  remaining: kc,
  deadline: Sc,
  phases: zc,
  events: Ec,
  docs: $c
}, Mc = "xiyan", Ic = "喜宴", Tc = "1.1.0", Pc = "D", Rc = "【副本进行中：喜宴】", Nc = [], Fc = { briefingName: "喜宴" }, Oc = { type: "countdown", minutesPerRound: 3 }, jc = { type: "fromPanel" }, Dc = "至天亮", Lc = [{ id: "main", name: "喜宴", cap: 160, next: null }], Bc = [], Vc = [], Wc = {
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
  phases: Lc,
  events: Bc,
  docs: Vc
}, Gc = "youxi", Yc = "游戏", Hc = "1.1.0", Uc = "C", Kc = "【副本进行中：游戏】", Zc = [], Jc = { briefingName: "游戏" }, Qc = { type: "countdown", minutesPerRound: 8 }, qc = { type: "fromPanel" }, Xc = "至结算", ea = [{ id: "main", name: "游戏", cap: 90, next: null }], ta = [], na = [], sa = {
  id: Gc,
  name: Yc,
  version: Hc,
  level: Uc,
  token: Kc,
  legacyKeys: Zc,
  detect: Jc,
  time: Qc,
  remaining: qc,
  deadline: Xc,
  phases: ea,
  events: ta,
  docs: na
}, Aa = "wuming", ia = "污名", oa = "1.1.0", ra = "B", la = "4-8", ca = "【副本进行中：污名】", aa = ["污名"], ua = { briefingName: "污名" }, fa = { type: "countdown", minutesPerRound: 3 }, da = { type: "countdown", template: "剩余{m}分钟" }, pa = "至收播", ha = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], ma = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], ga = [], xa = !0, ba = {
  id: Aa,
  name: ia,
  version: oa,
  level: ra,
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
function Ct(e) {
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
function Qi(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: IA(t), total: n === void 0 ? null : IA(n) };
}
function _a(e, t) {
  return e.phases.find((n) => n.id === t);
}
function sn(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let A = t;
  for (; A && !s.has(A.id); )
    n.push(A), s.add(A.id), A = _a(e, A.next);
  return n;
}
function qi(e, t) {
  return sn(e, t).filter((n) => n.night).length;
}
function wa(e, t, n) {
  if (sn(e, t).some((A) => A.id === n.id)) return t;
  const s = e.phases[0];
  return s && sn(e, s).some((A) => A.id === n.id) ? s : n;
}
function ps(e, t, n, s, A) {
  if (!e.phases.length || !e.phases.some((f) => f.id === t.id)) return;
  let i = sn(e, n), r = i.findIndex((f) => f.id === t.id);
  r < 0 && (i = sn(e, t), r = 0);
  const o = i.reduce((f, p) => f + Math.max(0, p.cap), 0), l = Math.max(0, t.cap - s) + i.slice(r + 1).reduce((f, p) => f + Math.max(0, p.cap), 0), c = t.deadline ?? i[0].deadline ?? e.deadline, u = { x: l, y: o, deadline: c };
  if (e.time.type === "countdown") {
    const f = e.time.minutesPerRound, p = e.time.totalMinutes, h = p && p > 0 ? p : o * f;
    let b = p && p > 0 && o > 0 ? Math.round(h * l / o) : l * f;
    const y = Qi(A).remaining;
    y !== null && (b = Math.min(b, y - f)), b = Math.max(0, b), Object.assign(u, { minutes: b, total: h, text: `约剩${Ct(b)}/${Ct(h)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) u.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const f = e.remaining.template.replace("{n}", String(qi(e, t)));
      u.text = c ? `${c}·${f}` : f;
    } else c && (u.text = c);
  return u;
}
const An = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function Xi(e, t, n = An) {
  const s = e ?? "", A = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), i = A ? Math.max(1, Number(A[1])) : Math.max(1, Math.round(n[t] ?? An[t])), r = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!r) return { rounds: i };
  const o = Number(r[1]), l = Math.round(r[2] === "天" ? o * 1440 : r[2].includes("小时") ? o * 60 : o);
  return l <= 0 ? { rounds: i } : { rounds: i, totalMinutes: l, minutesPerRound: Math.max(1, Math.round(l / i)) };
}
const Tn = "generic", TA = [nc, hc, Cc, Wc, sa, ba], ka = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(ya)
  }
};
function Sa(e, t) {
  const n = ka[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const eo = ["D", "C", "B", "A", "S"];
function to(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Tn && t.push(`id 不能是保留字 ${Tn}`), eo.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), (!n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName) && t.push("缺少 detect.briefingName");
  const A = n.time;
  !A || !["none", "clock", "countdown"].includes(A.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (A.type === "clock" && (typeof A.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(A.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), A.type !== "none" && (typeof A.minutesPerRound != "number" || A.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), A.type === "countdown" && A.totalMinutes !== void 0 && (typeof A.totalMinutes != "number" || A.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const i = n.remaining;
  !i || !["nights", "countdown", "fromPanel"].includes(i.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : i.type !== "fromPanel" && typeof i.template != "string" && t.push("remaining.template 必须是文本"), i?.type === "countdown" && A?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((c) => typeof c != "string" || !c)) && t.push("roles 必须是文本数组");
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
function no(e) {
  return eo.includes(e.level ?? "") ? e.level : "D";
}
function so(e, t = An) {
  const n = no(e), s = Xi(e.limit, n, t), A = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, i = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / A)) : void 0;
  return {
    id: Tn,
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
  const t = new Set(TA.map((n) => n.id));
  return [...TA, ...e.filter((n) => !t.has(n.id))];
}
function za(e, t) {
  return e.find((n) => n.detect.briefingName === t);
}
const Ea = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, $a = /<阶段切换>([\s\S]*?)<\/阶段切换>/, Ca = /<副本结算>([\s\S]*?)<\/副本结算>/, Ma = /<副本>([\s\S]*?)<\/副本>/, Ia = /<角色登记>([\s\S]*?)<\/角色登记>/, Ta = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/;
function on(e) {
  const t = Ea.exec(e ?? "");
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
  const t = $a.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function Ao(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const A = n.slice(0, s).trim(), i = n.slice(s + 1).trim();
    A && (t[A] = i);
  }
  return t;
}
function io(e) {
  const t = Ca.exec(e ?? "");
  if (!t) return null;
  const n = Ao(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function oo(e) {
  const t = Ia.exec(e ?? "");
  if (!t) return null;
  const n = Ao(t[1]);
  return Object.keys(n).length ? n : null;
}
function ro(e) {
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
function hs(e, t, n) {
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
      i = hs(e, t, A), r = i?.cap ?? 0;
      break;
    case "晚饭":
      i = hs(e, t, A), i && (r = Math.ceil(i.cap * 0.75), i.id === t.id && r <= n && (r = i.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      i = hs(e, t, (o) => !!o.night), r = i?.cap ?? 0;
      break;
  }
  return !i || i.id === t.id && r <= n + 1 ? null : { phase: i.id, round: r, label: `${i.name}第${r}轮` };
}
const PA = 5, Fa = { id: "_open", name: "进行中", cap: 0, next: null };
function ot(e) {
  return !!e && !e.is_user && !e.is_system;
}
function Oa(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function lo(e, t, n) {
  const s = Oa(e) + Math.max(0, n - 1) * t, A = Math.floor(s / 60) % 24, i = (s % 60 + 60) % 60;
  return `${A % 12 === 0 ? 12 : A % 12}:${String(i).padStart(2, "0")}`;
}
function RA(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return lo(e.time.dayStart, e.time.minutesPerRound, n);
}
function co(e) {
  return e.phases.length ? e.phases : [Fa];
}
function vn(e, t) {
  return co(e).find((n) => n.id === t);
}
function NA(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let A = t;
  for (; A && !s.has(A.id); ) {
    if (A.id === n) return !0;
    s.add(A.id), A = vn(e, A.next);
  }
  return !1;
}
function FA(e, t, n, s) {
  const A = n + 1, i = e.events.filter((r) => r.phase === t.id);
  if (s) {
    const r = t.id === s.phase ? s.round : t.cap;
    if (r > A) {
      let o = i.map((c, u) => ({ e: c, i: u })).filter(({ e: c }) => c.from >= A && c.from <= r).sort((c, u) => c.e.from - u.e.from || c.i - u.i).map(({ e: c }) => c), l = r;
      return o.length > PA && (l = o[PA - 1].from, o = o.filter((c) => c.from <= l)), { phase: t, round: l, events: o, skipFrom: A };
    }
  }
  return { phase: t, round: A, events: i.filter((r) => r.from === A) };
}
function ja(e, t, n) {
  const s = t.entryIndex;
  if (!ot(e[s])) return null;
  const A = co(n);
  let i = A[0], r = A[0], o = 0, l, c = !1, u, f = null, p, h, b;
  const y = /* @__PURE__ */ new Set(), L = {}, O = /* @__PURE__ */ new Map();
  for (const te of t.manual ?? [])
    O.has(te.atIndex) || O.set(te.atIndex, []), O.get(te.atIndex).push(te);
  const N = (te) => {
    n.phases.length && (r = wa(n, r, te)), i = te, o = 0, f && !NA(n, i, f.phase) && (f = null);
  };
  for (let te = s; te < e.length; te++) {
    const cn = e[te];
    if (!c && ot(cn)) {
      const ue = FA(n, i, o, f);
      o = ue.round, ue.events.forEach((ze) => y.add(ze.id)), L[te] = {
        phase: i.id,
        round: o,
        events: ue.events.map((ze) => ze.id),
        skipFrom: ue.skipFrom,
        limit: ps(n, i, r, o, l)
      }, f && i.id === f.phase && o >= f.round && (f = null);
      const _e = String(cn.mes ?? ""), Rt = ro(_e);
      Rt && (h = Rt), l = Rt?.limit;
      const Nt = oo(_e);
      Nt && (b = Nt);
      const zt = io(_e);
      if (zt)
        c = !0, u = "tag", p = zt;
      else {
        const ze = Pa(_e), an = ze ? A.find((at) => at.name === ze) : void 0;
        if (an && n.phases.length)
          N(an);
        else if (i.cap > 0 && o >= i.cap && i.next) {
          const at = vn(n, i.next);
          at && N(at);
        }
      }
    }
    for (const ue of O.get(te) ?? []) {
      if (c) break;
      switch (ue.kind) {
        case "skip": {
          f = vn(n, ue.targetPhase) && NA(n, i, ue.targetPhase) ? { phase: ue.targetPhase, round: ue.targetRound } : null;
          break;
        }
        case "setPhase": {
          const _e = vn(n, ue.phase);
          _e && (f = null, N(_e));
          break;
        }
        case "setRound":
          o = Math.max(0, Math.floor(ue.round)), f = null;
          break;
        case "end":
          c = !0, u = "manual";
          break;
      }
    }
  }
  const j = c ? null : FA(n, i, o, f), I = j ? j.round : o + 1, X = i.cap > 0, ee = n.events.filter((te) => y.has(te.id)).map((te) => te.id), le = c ? void 0 : ps(n, i, r, I, l), de = c ? void 0 : ps(n, i, r, o);
  let je;
  const Ze = n.remaining;
  return !c && Ze.type === "nights" && n.phases.length && !i.byTag && !i.frozen ? je = Ze.template.replace("{n}", String(qi(n, i))) : !c && Ze.type === "countdown" && le?.minutes !== void 0 && (je = Ze.template.replace("{m}", String(le.minutes))), {
    phase: i,
    round: o,
    nextRound: I,
    clock: c ? void 0 : RA(n, i, I),
    currentClock: RA(n, i, o),
    remainingText: je,
    limit: le,
    roundsLeft: de ? { x: de.x, y: de.y } : void 0,
    chainStart: n.phases.length ? r.id : void 0,
    ended: c,
    endedBy: u,
    firedEvents: ee,
    warn: !c && X && I >= i.cap - 2,
    isLastRound: !c && X && I === i.cap,
    overdue: !c && X && !i.next && I > i.cap,
    next: j,
    skipGoal: f,
    settlement: p,
    panel: h,
    rolesFromChat: b,
    perMessage: L,
    entryIndex: s
  };
}
const ao = "rlzc_token", uo = "rlzc_progress", fo = "rlzc_turn", Da = [ao, uo, fo], Jn = { token: "", progress: "", turn: "", injected: [] };
function La(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function OA(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const A = new RegExp(`(?<!\\{)\\{(${s.map(La).join("|")})\\}(?!\\})`, "g");
  return e.replace(A, (i, r) => n?.[r]?.trim() || r);
}
function Ba(e, t) {
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
function jA(e, t, n) {
  let s = OA(e.text, t, n);
  return e.to > e.from && (s = `在本阶段第${e.from}到${e.to}轮之间发生：${s}`), e.if && (s += `（条件：${OA(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${s}`;
}
function Va(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Wa(e, t, n, s = {}) {
  if (!t || !n || t.ended || n.status !== "active") return Jn;
  const A = s.roles, i = e.phases.length > 0, r = t.next, o = [`副本：${e.name}（${e.level}级）`], l = t.limit;
  if (i)
    o.push(`阶段：${t.phase.name}`), o.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), l && o.push(`剩余${l.x}/${l.y}轮`), t.clock && o.push(`钟时：${t.clock}`), l?.text && o.push(`时限：${l.text}`), e.remaining.type === "countdown" && t.remainingText && o.push(t.remainingText), l?.deadline && !l.text?.includes(l.deadline) && o.push(`截止：${l.deadline}`);
  else {
    o.push(`本轮：第${t.nextRound}轮`), t.clock && o.push(`钟时：${t.clock}`);
    const y = s.panelLimit || s.briefing?.limit;
    y && o.push(`时限：${y}`);
  }
  const c = ["［副本进度·仅供AI］", o.join("　")];
  if (s.briefing?.goal && (!i || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const y = e.roles.filter((L) => A?.[L]);
    c.push(
      y.length ? `角色登记：${e.roles.map((L) => `${L}=${A?.[L] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const u = Ba(e, t.firedEvents);
  u && c.push(`已发生事件：${u}`);
  const f = [];
  r.skipFrom !== void 0 && f.push(`玩家选择快进：本轮从「${t.phase.name}」第${r.skipFrom}轮快进到第${r.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const p = r.events.filter((y) => y.kind === "event"), h = r.events.filter((y) => y.kind === "directive");
  if (p.length && (f.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), p.forEach((y) => f.push(jA(y, e, A)))), h.length && (f.push("本轮写作要求："), h.forEach((y) => f.push(jA(y, e, A)))), t.isLastRound ? f.push(Va(t)) : t.overdue && f.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && f.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && f.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((y) => A?.[y])) {
    let y = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((L) => `${L}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (y += "死者不得是{{user}}或其同伴。"), f.push(y);
  }
  let b;
  return l?.text && (l.minutes !== void 0 ? (f.push(
    `本轮<副本>的时限一栏写：${l.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), b = { text: l.text, minutes: l.minutes, total: l.total }) : (f.push(`本轮<副本>的时限一栏写：${l.text}（照抄）。`), b = { text: l.text })), {
    token: e.token,
    progress: c.join(`
`),
    turn: f.length ? ["［本轮指令·仅供AI］", ...f].join(`
`) : "",
    injected: r.events.map((y) => y.id),
    limit: b
  };
}
const $s = "rlzc";
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
function Ua(e, t) {
  return e.packId === Tn ? e.briefing ? so(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function Ka(e, t) {
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
  const n = Ka(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((A) => ({ ...A, atIndex: A.atIndex + s }))), t.manual = t.manual.filter((A) => A.atIndex < e.length && A.atIndex >= t.entryIndex), !0;
}
function po(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Jt = "rlzc_declined";
function Cs(e, t) {
  return `${e}:${t}`;
}
function Ja(e, t, n = []) {
  if (t?.status === "active") return null;
  const s = e.findIndex((i) => !!i && !i.is_user && !i.is_system);
  if (s < 0 || t && t.entryIndex === s) return null;
  const A = on(String(e[s].mes ?? ""));
  return !A || n.includes(Cs(s, A.name)) ? null : { index: s, info: A };
}
const Qa = 1, qa = 0;
function me() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function Xa() {
  const e = me();
  return e.eventTypes ?? e.event_types ?? {};
}
function Je(e, t) {
  const n = Xa()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  me().eventSource.on(n, t);
}
function ge() {
  return me().chat ?? [];
}
function Us() {
  const e = me();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function Qn() {
  return me().chatMetadata ?? {};
}
function qn() {
  const e = me();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function _n(e, t, n, s) {
  me().setExtensionPrompt(e, t, Qa, n, s, qa);
}
function rt(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Ke(e) {
  const t = me();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
const Pt = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function ho(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function eu(e, t = Pt) {
  return t.length ? e.replace(ho(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function mo(e, t = Pt, n = !1) {
  const s = ge()[e];
  if (!s || s.is_user) return;
  const A = String(s.extra?.display_text ?? s.mes ?? "");
  if (!ho(n ? Pt : t, "").test(A)) return;
  const i = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!i) return;
  const r = me().messageFormatting;
  if (typeof r != "function") return;
  const o = r(eu(A, t), s.name ?? "", !!s.is_system, !1, e);
  i.innerHTML !== o && (i.innerHTML = o);
}
function tu(e = Pt, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && mo(s, e, t);
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
function DA(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function iu(e, t) {
  return DA(e).includes(DA(t));
}
function ou(e, t, n) {
  const s = [], A = Object.keys(n.perMessage).map(Number).sort((l, c) => l - c);
  let i = !1, r = null, o = !1;
  for (const l of A) {
    const c = n.perMessage[l], f = t.phases.find((N) => N.id === c.phase)?.name ?? "进行中", p = (N, j) => s.push({ index: l, phase: f, round: c.round, kind: N, text: j }), h = ro(String(e[l]?.mes ?? "")), b = l === n.entryIndex;
    if (!h) {
      b || p("missing", "本轮回复缺少 <副本> 面板"), o = !b;
      continue;
    }
    o = !1;
    const y = Au(h.progressBar);
    h.progressBar === void 0 ? p("progressUnreadable", "<副本> 中没有进度条一栏") : y === null ? p("progressUnreadable", `进度条无法读出数值：「${h.progressBar}」`) : (!i && y !== 0 && p("progressStart", `入场后第一轮的进度条应为0，实际为 ${y}`), (y < 0 || y > 100) && p("progressRange", `进度条数值 ${y} 超出 0–100`), r !== null && y < r && p("progressDrop", `进度条比上一轮低：${r} → ${y}`), r = y), i = !0;
    const L = e[l]?.extra?.rlzc?.limit, O = L?.text ? L : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (O) {
      const N = h.limit;
      if (O.minutes !== void 0) {
        const j = Qi(N);
        !N || j.remaining === null || j.total === null ? p("limit", `时限读不到「剩余时间/总时长」：写的是「${N ?? "（没有时限一栏）"}」，注入的是「${O.text}」`) : (j.remaining > O.minutes && p("limit", `剩余时间比注入值多：写的是${Ct(j.remaining)}，注入的是${Ct(O.minutes)}`), O.total !== void 0 && j.total !== O.total && p("limit", `总时长与注入值不一致：写的是${Ct(j.total)}，注入的是${Ct(O.total)}`));
      } else (!N || !iu(N, O.text)) && p("limit", `时限与注入文字不一致：写的是「${N ?? "（没有时限一栏）"}」，注入的是「${O.text}」`);
    }
  }
  return { warnings: s, missingLast: o, hasPanel: i };
}
const Ms = "rlzc", wn = {
  depths: { token: 4, progress: 4, turn: 0 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...An }
}, g = /* @__PURE__ */ Wn({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  settings: structuredClone(wn),
  packs: [],
  lastInjection: Jn,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0
});
function go(e) {
  return JSON.parse(JSON.stringify(e));
}
function ru(...e) {
  g.settings.debug && console.log("[rlzc]", ...e);
}
function lu() {
  const e = me().extensionSettings, t = e[Ms] ?? {}, n = {
    ...structuredClone(wn),
    ...t,
    depths: { ...wn.depths, ...t.depths ?? {} },
    ball: { ...wn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => to(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...An, ...t.genericCaps ?? {} }
  };
  e[Ms] = n, g.settings = n, g.packs = Hs(n.customPacks);
}
function He() {
  me().extensionSettings[Ms] = JSON.parse(JSON.stringify(g.settings)), me().saveSettingsDebounced(), g.packs = Hs(g.settings.customPacks);
}
function cu(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = to(t);
  if (n.length) return n;
  const s = t;
  return Hs([]).some((A) => A.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (g.settings.customPacks = [...g.settings.customPacks.filter((A) => A.id !== s.id), s], He(), []);
}
function au(e) {
  g.settings.customPacks = g.settings.customPacks.filter((t) => t.id !== e), He();
}
function St() {
  return Ha(Qn()[$s]);
}
function _t(e) {
  const t = Qn();
  e ? t[$s] = JSON.parse(JSON.stringify(e)) : delete t[$s], qn();
}
function Ks(e) {
  const t = St();
  t && (e(t), _t(t), lt());
}
function uu(e) {
  const t = ge();
  return (e === "swipe" || e === "continue") && ot(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Pn(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Ua(t, g.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = ja(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? ou(e, n, s) : null };
}
function lt() {
  const e = ge();
  let t = St();
  if (t) {
    const s = JSON.stringify(t);
    if (!Za(e, t))
      _t(null), rt("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const A = Pn(e, t);
      A.progress && (t.status = A.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && _t(t);
    }
  }
  const n = Pn(e, t);
  g.session = n.session, g.pack = n.pack, g.progress = n.progress, g.audit = n.audit, g.tick++;
}
function fu() {
  if (g.session)
    return po(g.session, g.progress?.rolesFromChat);
}
function Rn() {
  for (const e of Da) _n(e, "", 0, !1);
}
let Nn = -1;
function du(e) {
  const t = uu(e), n = St(), { pack: s, progress: A, audit: i } = Pn(t, n), r = n ? po(n, A?.rolesFromChat) : void 0, o = s ? Wa(s, A, n, { roles: r, briefing: n?.briefing, panelLimit: A?.panel?.limit, audit: i ?? void 0 }) : Jn;
  Rn();
  const l = g.settings.depths;
  o.token && _n(ao, o.token, l.token, !0), o.progress && _n(uo, o.progress, l.progress, !1), o.turn && _n(fo, o.turn, l.turn, !1), g.lastInjection = o, Nn = t.length, ru("注入", e, o);
}
const Is = /* @__PURE__ */ new Set();
async function pu() {
  const e = ge(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Ra(n.mes);
  if (!s) return;
  const A = St();
  if (!A || A.status !== "active" || A.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const i = `${Us()}:${t}:${n.mes}`;
  if (Is.has(i)) return;
  Is.add(i);
  const { pack: r, progress: o } = Pn(e, A);
  if (!r || !o || o.ended) return;
  const l = Na(r, o.phase, o.round, s);
  l && await Ke(`是否跳到${s}？（${l.label}）`) && (A.manual.push({ kind: "skip", atIndex: t, targetPhase: l.phase, targetRound: l.round }), _t(A));
}
async function hu(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Rn();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await pu(), du(s);
  } catch (A) {
    console.error("[rlzc] 拦截器出错", A), Rn();
  }
}
const LA = /* @__PURE__ */ new Set();
async function xo(e, t = !1) {
  const s = ge()[e], A = on(s?.mes ?? "");
  if (!A) return;
  const i = `${Us()}:${e}:${A.name}`;
  if (LA.has(i)) return;
  LA.add(i);
  const r = za(g.packs, A.name), o = r ? `检测到进入《${r.name}》，是否启用？` : `检测到进入《${A.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!await Ke(o)) {
    if (t) {
      const c = Qn(), u = Array.isArray(c[Jt]) ? c[Jt] : [];
      c[Jt] = [...u.filter((f) => f !== Cs(e, A.name)), Cs(e, A.name)], qn();
    }
    return;
  }
  const l = ge()[e];
  if (!ot(l) || on(l.mes)?.name !== A.name) {
    rt("warning", "简报消息已变化，未启用。");
    return;
  }
  r || (A.rounds = Xi(A.limit, no(A), g.settings.genericCaps).rounds), bo(r ?? so(A, g.settings.genericCaps), e, A);
}
function Zs() {
  const e = Qn(), t = Array.isArray(e[Jt]) ? e[Jt] : [], n = Ja(ge(), St(), t);
  n && xo(n.index, !0);
}
function mu(e) {
  lt();
  const t = ge().findIndex((n) => ot(n));
  e === t && Zs();
}
function bo(e, t, n) {
  const A = ge()[t], i = Ya(e, t, n);
  A.extra = A.extra ?? {}, A.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: i.id }, _t(i), lt(), g.progress && (A.extra.rlzc.injected = go(g.progress.perMessage[t]?.events ?? [])), qn(), rt("success", `已进入副本《${e.name}》。`);
}
async function gu(e) {
  const t = g.packs.find((i) => i.id === e);
  if (!t) return;
  const n = ge();
  let s = n.length - 1;
  for (; s >= 0 && !ot(n[s]); ) s--;
  if (s < 0) {
    rt("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  St()?.status === "active" && !await Ke("当前已有进行中的副本，确定要替换吗？") || await Ke(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && bo(t, s, on(n[s].mes) ?? { name: t.name });
}
function Xn(e) {
  Ks((t) => t.manual.push(e));
}
function es() {
  return ge().length - 1;
}
async function BA() {
  const e = g.progress;
  if (!(!e || e.ended || !g.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      rt("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ke(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (Xn({ kind: "skip", atIndex: es(), targetPhase: e.phase.id, targetRound: e.phase.cap }), rt("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function VA() {
  !g.session || g.progress?.ended || await Ke("确定要手动结束当前副本吗？") && Xn({ kind: "end", atIndex: es() });
}
function xu(e) {
  Xn({ kind: "setPhase", atIndex: es(), phase: e });
}
function bu(e) {
  Xn({ kind: "setRound", atIndex: es(), round: e });
}
function yu(e) {
  Ks((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function vu(e) {
  Ks((t) => t.manual.splice(e, 1));
}
async function WA() {
  g.session && await Ke("确定要删除当前副本会话吗？（不会改动聊天记录）") && (_t(null), lt());
}
function _u(e) {
  const t = ge(), n = t[e];
  if (!ot(n)) return;
  const s = St();
  if ((!s || s.status === "ended") && on(n.mes)) {
    e === t.findIndex((o) => ot(o)) ? Zs() : xo(e);
    return;
  }
  if (!s) return;
  const A = oo(n.mes);
  A && (s.roles = { ...s.roles ?? {}, ...A }), _t(s), lt();
  const i = g.progress?.perMessage[e];
  if (i && g.pack) {
    const o = g.pack.phases.find((p) => p.id === i.phase), l = {
      phase: o?.name ?? i.phase,
      round: i.round,
      injected: Nn === e ? g.lastInjection.injected : i.events
    }, c = g.pack.time;
    c.type === "clock" && o?.clock && !o.night && !o.frozen && (l.clock = lo(c.dayStart, c.minutesPerRound, i.round));
    const u = Nn === e ? g.lastInjection.limit : i.limit?.text ? { text: i.limit.text, minutes: i.limit.minutes, total: i.limit.total } : void 0;
    u && (l.limit = u);
    const f = n.extra?.rlzc?.entry;
    f && (l.entry = f), n.extra = n.extra ?? {}, n.extra.rlzc = go(l), qn(), lt();
  }
  const r = io(n.mes);
  r && rt("info", `副本结算：${r.result ?? "—"}${r.rating ? `，评价 ${r.rating}` : ""}`);
}
function GA() {
  Is.clear(), Nn = -1, g.chatId = Us(), g.debugUnlocked = !1, g.lastInjection = Jn, Rn(), lt(), Zs(), setTimeout(() => Js(), 50);
}
function ms() {
  lt();
}
function yo() {
  return g.settings.panelDisplay === "statusbar" ? Pt.filter((e) => e !== "副本") : Pt;
}
function gs(e) {
  mo(e, yo());
}
function Js(e = !1) {
  tu(yo(), e);
}
function wu(e) {
  g.settings.panelDisplay !== e && (g.settings.panelDisplay = e, He(), Js(!0));
}
const ku = { class: "rlzc-ball-mark" }, xs = 44, Su = /* @__PURE__ */ kt({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ vt({ x: 0, y: 0 });
    let n = null;
    function s(u, f) {
      const p = window.innerWidth - xs - 4, h = window.innerHeight - xs - 4;
      return { x: Math.min(Math.max(4, u), p), y: Math.min(Math.max(4, f), h) };
    }
    function A() {
      const u = g.settings.ball;
      t.value = s(u.x ?? window.innerWidth - xs - 12, u.y ?? Math.round(window.innerHeight * 0.35));
    }
    function i(u) {
      u.currentTarget.setPointerCapture(u.pointerId), n = { id: u.pointerId, dx: u.clientX - t.value.x, dy: u.clientY - t.value.y, moved: !1, sx: u.clientX, sy: u.clientY };
    }
    function r(u) {
      !n || n.id !== u.pointerId || (Math.abs(u.clientX - n.sx) + Math.abs(u.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(u.clientX - n.dx, u.clientY - n.dy)));
    }
    function o(u) {
      if (!n || n.id !== u.pointerId) return;
      const f = n.moved;
      n = null, f ? (g.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, He()) : g.panelOpen = !g.panelOpen;
    }
    const l = Ae(() => !!g.session && !g.progress?.ended), c = Ae(() => !!g.progress?.warn);
    return Yn(() => g.settings.ball, A, { deep: !0 }), Sr(() => {
      A(), window.addEventListener("resize", A);
    }), zr(() => window.removeEventListener("resize", A)), (u, f) => (C(), M("button", {
      class: ct(["rlzc-ball", { "is-active": l.value, "is-warn": c.value }]),
      style: Bn({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: i,
      onPointermove: r,
      onPointerup: o,
      onPointercancel: o
    }, [
      m("span", ku, R(l.value ? T(g).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
});
function zu(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Bt(e) {
  return zu(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Eu(e) {
  const t = [];
  let n = null, s = [];
  const A = () => {
    s.length && t.push(`<p>${s.map(Bt).join("<br>")}</p>`), s = [];
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
      t.push(`<h${p}>${Bt(l[2])}</h${p}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(o), u = /^\s*(\d+)[.、]\s+(.*)$/.exec(o);
    if (c || u) {
      A();
      const p = c ? "ul" : "ol", h = c ? c[1] : u[2];
      n !== p ? (i(), n = p, t.push(p === "ol" ? `<ol start="${u[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Bt(h));
      continue;
    }
    if (n && /^\s{2,}/.test(r)) {
      t.push(`<br>${Bt(o.trim())}`);
      continue;
    }
    const f = /^>\s?(.*)$/.exec(o);
    if (f) {
      A(), i(), t.push(`<blockquote>${Bt(f[1])}</blockquote>`);
      continue;
    }
    i(), s.push(o);
  }
  return A(), i(), t.join("");
}
const $u = {
  key: 0,
  class: "rlzc-docs"
}, Cu = { class: "rlzc-subtabs" }, Mu = ["onClick"], Iu = { class: "rlzc-md" }, Tu = ["innerHTML"], Pu = ["src", "alt"], Ru = {
  key: 2,
  class: "rlzc-note"
}, YA = /* @__PURE__ */ kt({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ vt(0);
    Yn(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = Ae(() => t.pack.docs?.[n.value]), A = Ae(() => s.value?.md ? Eu(s.value.md) : ""), i = Ae(() => s.value?.image ? Sa(t.pack, s.value.image) : null);
    return (r, o) => e.pack.docs?.length ? (C(), M("section", $u, [
      m("div", Cu, [
        (C(!0), M(J, null, xe(e.pack.docs, (l, c) => (C(), M("button", {
          key: c,
          class: ct({ on: n.value === c }),
          onClick: (u) => n.value = c
        }, R(l.title), 11, Mu))), 128))
      ]),
      m("article", Iu, [
        A.value ? (C(), M("div", {
          key: 0,
          innerHTML: A.value
        }, null, 8, Tu)) : Z("", !0),
        i.value ? (C(), M("img", {
          key: 1,
          src: i.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, Pu)) : s.value?.image && !i.value ? (C(), M("p", Ru, "图片无法加载：" + R(s.value.image), 1)) : Z("", !0)
      ])
    ])) : Z("", !0);
  }
}), Nu = { class: "rlzc-system" }, Fu = { class: "rlzc-card rlzc-hero" }, Ou = { class: "rlzc-hero-top" }, ju = { class: "rlzc-level" }, Du = {
  key: 0,
  class: "rlzc-chip"
}, Lu = {
  key: 0,
  class: "rlzc-goal"
}, Bu = { class: "rlzc-grid" }, Vu = {
  key: 0,
  class: "rlzc-stat"
}, Wu = {
  key: 1,
  class: "rlzc-stat"
}, Gu = {
  key: 2,
  class: "rlzc-stat"
}, Yu = {
  key: 3,
  class: "rlzc-stat"
}, Hu = {
  key: 0,
  class: "rlzc-note"
}, Uu = {
  key: 1,
  class: "rlzc-card"
}, Ku = { class: "rlzc-kv" }, Zu = { class: "rlzc-kv" }, Ju = {
  key: 2,
  class: "rlzc-note"
}, Qu = {
  key: 3,
  class: "rlzc-card"
}, qu = {
  key: 0,
  class: "rlzc-kv"
}, Xu = { class: "rlzc-mono" }, ef = {
  key: 1,
  class: "rlzc-tasks"
}, tf = {
  key: 2,
  class: "rlzc-ps"
}, nf = { class: "rlzc-actions" }, sf = ["disabled"], Af = ["disabled"], of = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, rf = {
  key: 2,
  class: "rlzc-card"
}, lf = { class: "rlzc-row" }, cf = ["value"], af = ["disabled"], uf = /* @__PURE__ */ kt({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ vt(""), n = Ae(() => !!g.session && !!g.pack), s = Ae(() => g.progress), A = Ae(() => n.value && !!s.value && !s.value.ended), i = Ae(() => g.packs.find((p) => p.id === t.value) ?? null), r = Ae(() => !!g.pack?.phases.length), o = Ae(() => g.settings.panelDisplay !== "statusbar"), l = Ae(() => {
      const p = s.value;
      return p ? r.value ? `${p.warn ? "⚠️ " : ""}${p.round}/${p.phase.cap}` : `第${p.round}轮` : "";
    }), c = Ae(() => {
      const p = s.value;
      return p ? p.limit?.text ? p.limit.text : p.panel?.limit || g.session?.briefing?.limit || "—" : "";
    }), u = Ae(() => {
      const p = s.value;
      return !!p && !p.ended && r.value && p.phase.cap > 0 && p.nextRound < p.phase.cap;
    });
    async function f() {
      t.value && (await gu(t.value), t.value = "");
    }
    return (p, h) => (C(), M("div", Nu, [
      n.value && s.value ? (C(), M(J, { key: 0 }, [
        m("div", Fu, [
          m("div", Ou, [
            m("span", ju, R(T(g).pack.level), 1),
            m("h3", null, R(T(g).pack.name), 1),
            s.value.ended ? (C(), M("span", Du, "已结束")) : Z("", !0)
          ]),
          T(g).session?.briefing?.goal ? (C(), M("p", Lu, "目标：" + R(T(g).session.briefing.goal), 1)) : Z("", !0)
        ]),
        m("div", Bu, [
          r.value ? (C(), M("div", Vu, [
            h[3] || (h[3] = m("span", null, "阶段", -1)),
            m("b", null, R(s.value.phase.name), 1)
          ])) : Z("", !0),
          m("div", {
            class: ct(["rlzc-stat", { warn: s.value.warn }])
          }, [
            h[4] || (h[4] = m("span", null, "轮次", -1)),
            m("b", null, R(l.value), 1)
          ], 2),
          s.value.currentClock ? (C(), M("div", Wu, [
            h[5] || (h[5] = m("span", null, "钟时", -1)),
            m("b", null, R(s.value.currentClock), 1)
          ])) : Z("", !0),
          s.value.roundsLeft ? (C(), M("div", Gu, [
            h[6] || (h[6] = m("span", null, "剩余轮数", -1)),
            m("b", null, R(s.value.roundsLeft.x) + "/" + R(s.value.roundsLeft.y), 1)
          ])) : Z("", !0),
          o.value ? (C(), M("div", Yu, [
            h[7] || (h[7] = m("span", null, "剩余时间", -1)),
            m("b", null, R(c.value), 1)
          ])) : Z("", !0)
        ]),
        s.value.skipGoal ? (C(), M("div", Hu, "快进中：目标 " + R(T(g).pack.phases.find((b) => b.id === s.value.skipGoal.phase)?.name) + " 第" + R(s.value.skipGoal.round) + "轮", 1)) : Z("", !0),
        s.value.ended && s.value.settlement ? (C(), M("div", Uu, [
          m("div", Ku, [
            h[8] || (h[8] = m("span", null, "结果", -1)),
            m("b", null, R(s.value.settlement.result ?? "—"), 1)
          ]),
          m("div", Zu, [
            h[9] || (h[9] = m("span", null, "评价", -1)),
            m("b", null, R(s.value.settlement.rating ?? "—"), 1)
          ])
        ])) : s.value.ended ? (C(), M("div", Ju, "副本已手动结束。")) : Z("", !0),
        o.value && s.value.panel ? (C(), M("div", Qu, [
          s.value.panel.progressBar ? (C(), M("div", qu, [
            h[10] || (h[10] = m("span", null, "进度", -1)),
            m("b", Xu, R(s.value.panel.progressBar), 1)
          ])) : Z("", !0),
          s.value.panel.tasks.length ? (C(), M("div", ef, [
            h[11] || (h[11] = m("span", null, "任务", -1)),
            m("ul", null, [
              (C(!0), M(J, null, xe(s.value.panel.tasks, (b, y) => (C(), M("li", { key: y }, R(b), 1))), 128))
            ])
          ])) : Z("", !0),
          s.value.panel.ps ? (C(), M("div", tf, "ps：" + R(s.value.panel.ps), 1)) : Z("", !0)
        ])) : Z("", !0),
        m("div", nf, [
          m("button", {
            class: "rlzc-btn",
            disabled: !u.value,
            onClick: h[0] || (h[0] = //@ts-ignore
            (...b) => T(BA) && T(BA)(...b))
          }, "跳过（到本阶段结束）", 8, sf),
          m("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: h[1] || (h[1] = //@ts-ignore
            (...b) => T(VA) && T(VA)(...b))
          }, "手动结束副本", 8, Af)
        ]),
        A.value && T(g).pack.docs?.length ? (C(), et(YA, {
          key: 4,
          pack: T(g).pack
        }, null, 8, ["pack"])) : Z("", !0)
      ], 64)) : (C(), M("div", of, [...h[12] || (h[12] = [
        m("h3", null, "休整中", -1),
        m("p", null, "当前在回廊里，没有进行中的副本，也不会注入任何提示词。", -1)
      ])])),
      A.value ? Z("", !0) : (C(), M("div", rf, [
        h[14] || (h[14] = m("label", { class: "rlzc-label" }, "手动选择副本（以最新一条AI回复为第1轮）", -1)),
        m("div", lf, [
          bn(m("select", {
            "onUpdate:modelValue": h[2] || (h[2] = (b) => t.value = b),
            class: "rlzc-input"
          }, [
            h[13] || (h[13] = m("option", { value: "" }, "选择副本…", -1)),
            (C(!0), M(J, null, xe(T(g).packs, (b) => (C(), M("option", {
              key: b.id,
              value: b.id
            }, R(b.level) + "｜" + R(b.name), 9, cf))), 128))
          ], 512), [
            [Ji, t.value]
          ]),
          m("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: f
          }, "进入", 8, af)
        ])
      ])),
      !A.value && i.value?.docs?.length ? (C(), et(YA, {
        key: 3,
        pack: i.value
      }, null, 8, ["pack"])) : Z("", !0)
    ]));
  }
}), ff = { class: "rlzc-settings" }, df = { class: "rlzc-card" }, pf = ["value"], hf = { class: "rlzc-hint" }, mf = { class: "rlzc-card" }, gf = { class: "rlzc-field" }, xf = ["value"], bf = { class: "rlzc-field" }, yf = ["value"], vf = { class: "rlzc-field" }, _f = ["value"], wf = { class: "rlzc-card" }, kf = ["value", "onChange"], Sf = { class: "rlzc-card" }, zf = {
  key: 0,
  class: "rlzc-list"
}, Ef = ["onClick"], $f = {
  key: 1,
  class: "rlzc-hint"
}, Cf = {
  key: 2,
  class: "rlzc-errors"
}, Mf = { class: "rlzc-card" }, If = { class: "rlzc-check" }, Tf = ["checked"], Pf = { class: "rlzc-check" }, Rf = ["checked"], Nf = /* @__PURE__ */ kt({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ vt([]), n = /* @__PURE__ */ vt(null);
    function s(u, f) {
      const p = Math.max(0, Math.min(1e4, Math.floor(Number(f.target.value) || 0)));
      g.settings.depths[u] = p, He();
    }
    async function A(u) {
      const f = u.target, p = f.files?.[0];
      f.value = "", p && (t.value = cu(await p.text()), t.value.length || rt("success", `已导入副本包：${p.name}`));
    }
    async function i(u, f) {
      await Ke(`确定删除自定义副本包《${f}》吗？`) && au(u);
    }
    const r = ["D", "C", "B", "A", "S"];
    function o(u, f) {
      const p = Math.floor(Number(f.target.value));
      !Number.isFinite(p) || p < 1 || (g.settings.genericCaps = { ...g.settings.genericCaps, [u]: p }, He());
    }
    function l(u) {
      wu(u.target.value);
    }
    function c(u, f) {
      g.settings[u] = f.target.checked, He();
    }
    return (u, f) => (C(), M("div", ff, [
      m("div", df, [
        f[7] || (f[7] = m("h4", null, "副本信息显示位置", -1)),
        m("select", {
          class: "rlzc-input",
          value: T(g).settings.panelDisplay,
          onChange: l
        }, [...f[6] || (f[6] = [
          m("option", { value: "panel" }, "扩展面板（默认）", -1),
          m("option", { value: "statusbar" }, "正文状态栏", -1)
        ])], 40, pf),
        m("p", hf, R(T(g).settings.panelDisplay === "statusbar" ? "正文中保留 <副本> 标签，由你的状态栏显示；系统页不再显示时限、进度条、任务和 ps。" : "正文中隐藏 <副本> 标签，时限、进度条、任务和 ps 显示在系统页。") + " 两种方式下扩展都会读取 <副本> 做核对。 ", 1)
      ]),
      m("div", mf, [
        f[11] || (f[11] = m("h4", null, "注入深度", -1)),
        m("label", gf, [
          f[8] || (f[8] = m("span", null, "暗号 rlzc_token", -1)),
          m("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: T(g).settings.depths.token,
            onChange: f[0] || (f[0] = (p) => s("token", p))
          }, null, 40, xf)
        ]),
        m("label", bf, [
          f[9] || (f[9] = m("span", null, "进度 rlzc_progress", -1)),
          m("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: T(g).settings.depths.progress,
            onChange: f[1] || (f[1] = (p) => s("progress", p))
          }, null, 40, yf)
        ]),
        m("label", vf, [
          f[10] || (f[10] = m("span", null, "本轮 rlzc_turn", -1)),
          m("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: T(g).settings.depths.turn,
            onChange: f[2] || (f[2] = (p) => s("turn", p))
          }, null, 40, _f)
        ])
      ]),
      m("div", wf, [
        f[12] || (f[12] = m("h4", null, "通用副本默认轮数上限", -1)),
        f[13] || (f[13] = m("p", { class: "rlzc-hint" }, "未收录的副本按等级取轮数上限；简报时限一行写了「（最多N轮）」时以简报为准。只影响之后进入的副本。", -1)),
        (C(), M(J, null, xe(r, (p) => m("label", {
          key: p,
          class: "rlzc-field"
        }, [
          m("span", null, R(p) + " 级", 1),
          m("input", {
            type: "number",
            min: "1",
            class: "rlzc-input",
            value: T(g).settings.genericCaps[p],
            onChange: (h) => o(p, h)
          }, null, 40, kf)
        ])), 64))
      ]),
      m("div", Sf, [
        f[14] || (f[14] = m("h4", null, "自定义副本包", -1)),
        T(g).settings.customPacks.length ? (C(), M("ul", zf, [
          (C(!0), M(J, null, xe(T(g).settings.customPacks, (p) => (C(), M("li", {
            key: p.id
          }, [
            m("span", null, [
              Zt(R(p.level) + "｜" + R(p.name) + " ", 1),
              m("small", null, "v" + R(p.version), 1)
            ]),
            m("button", {
              class: "rlzc-btn ghost small",
              onClick: (h) => i(p.id, p.name)
            }, "删除", 8, Ef)
          ]))), 128))
        ])) : (C(), M("p", $f, "还没有导入自定义副本包。")),
        m("input", {
          ref_key: "fileInput",
          ref: n,
          type: "file",
          accept: ".json,application/json",
          hidden: "",
          onChange: A
        }, null, 544),
        m("button", {
          class: "rlzc-btn",
          onClick: f[3] || (f[3] = (p) => n.value?.click())
        }, "导入 JSON…"),
        t.value.length ? (C(), M("ul", Cf, [
          (C(!0), M(J, null, xe(t.value, (p, h) => (C(), M("li", { key: h }, R(p), 1))), 128))
        ])) : Z("", !0)
      ]),
      m("div", Mf, [
        f[17] || (f[17] = m("h4", null, "其他", -1)),
        m("label", If, [
          m("input", {
            type: "checkbox",
            checked: T(g).settings.showBall,
            onChange: f[4] || (f[4] = (p) => c("showBall", p))
          }, null, 40, Tf),
          f[15] || (f[15] = Zt("显示悬浮球（关闭后可从扩展菜单打开面板）", -1))
        ]),
        m("label", Pf, [
          m("input", {
            type: "checkbox",
            checked: T(g).settings.debug,
            onChange: f[5] || (f[5] = (p) => c("debug", p))
          }, null, 40, Rf),
          f[16] || (f[16] = Zt("调试模式（调试页允许手动修改，并在控制台输出日志）", -1))
        ])
      ])
    ]));
  }
}), Ff = { class: "rlzc-debug" }, Of = {
  key: 0,
  class: "rlzc-note"
}, jf = {
  key: 0,
  class: "rlzc-note"
}, Df = {
  key: 1,
  class: "rlzc-note"
}, Lf = {
  key: 2,
  class: "rlzc-card"
}, Bf = { class: "rlzc-row" }, Vf = ["disabled"], Wf = ["value"], Gf = ["disabled"], Yf = { class: "rlzc-row" }, Hf = ["disabled"], Uf = ["disabled"], Kf = {
  key: 3,
  class: "rlzc-card"
}, Zf = ["onUpdate:modelValue", "disabled"], Jf = ["disabled"], Qf = { class: "rlzc-card" }, qf = {
  key: 0,
  class: "rlzc-hint"
}, Xf = { class: "rlzc-hint" }, ed = { class: "rlzc-list rlzc-warns" }, td = { class: "rlzc-card" }, nd = {
  key: 0,
  class: "rlzc-list"
}, sd = ["disabled", "onClick"], Ad = {
  key: 1,
  class: "rlzc-hint"
}, id = {
  class: "rlzc-card",
  open: ""
}, od = { class: "rlzc-pre" }, rd = { class: "rlzc-card" }, ld = { class: "rlzc-pre" }, cd = { class: "rlzc-card" }, ad = { class: "rlzc-pre" }, ud = { class: "rlzc-card" }, fd = { class: "rlzc-table" }, dd = ["disabled"], pd = /* @__PURE__ */ kt({
  __name: "DebugTab",
  setup(e) {
    const t = Ae(() => g.settings.debug), n = /* @__PURE__ */ vt(""), s = /* @__PURE__ */ vt(null), A = /* @__PURE__ */ Wn({});
    Yn(
      () => [g.tick, g.pack?.id],
      () => {
        for (const h of Object.keys(A)) delete A[h];
        const p = fu() ?? {};
        for (const h of g.pack?.roles ?? []) A[h] = p[h] ?? "";
      },
      { immediate: !0 }
    );
    const i = Ae(() => {
      g.tick;
      const p = ge(), h = [], b = g.session?.entryIndex ?? 0;
      for (let y = b; y < p.length; y++) {
        const L = p[y]?.extra?.rlzc;
        L && h.push({ index: y, snap: L });
      }
      return h.reverse().slice(0, 60);
    }), r = Ae(() => new Set((g.audit?.warnings ?? []).filter((p) => p.kind === "limit").map((p) => p.index))), o = Ae(() => {
      const p = g.progress;
      if (!p) return null;
      const { perMessage: h, phase: b, next: y, ...L } = p;
      return {
        phase: b.id + " " + b.name,
        ...L,
        next: y ? { round: y.round, skipFrom: y.skipFrom, events: y.events.map((O) => O.id) } : null,
        messages: Object.keys(h).length
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
    const f = (p) => JSON.stringify(p, null, 2);
    return (p, h) => (C(), M("div", Ff, [
      T(g).session ? (C(), M(J, { key: 1 }, [
        t.value ? Z("", !0) : (C(), M("p", jf, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        T(g).pack && T(g).session.packVersion !== T(g).pack.version ? (C(), M("p", Df, " 入场时副本包版本为 " + R(T(g).session.packVersion) + "，当前为 " + R(T(g).pack.version) + "。 ", 1)) : Z("", !0),
        T(g).pack?.phases.length ? (C(), M("div", Lf, [
          h[4] || (h[4] = m("h4", null, "手动修正", -1)),
          m("div", Bf, [
            bn(m("select", {
              "onUpdate:modelValue": h[0] || (h[0] = (b) => n.value = b),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              h[3] || (h[3] = m("option", { value: "" }, "切换到阶段…", -1)),
              (C(!0), M(J, null, xe(T(g).pack.phases, (b) => (C(), M("option", {
                key: b.id,
                value: b.id
              }, R(b.name), 9, Wf))), 128))
            ], 8, Vf), [
              [Ji, n.value]
            ]),
            m("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: l
            }, "切换", 8, Gf)
          ]),
          m("div", Yf, [
            bn(m("input", {
              "onUpdate:modelValue": h[1] || (h[1] = (b) => s.value = b),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, Hf), [
              [
                $A,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            m("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: c
            }, "修正轮次", 8, Uf)
          ])
        ])) : Z("", !0),
        T(g).pack?.roles?.length ? (C(), M("div", Kf, [
          h[5] || (h[5] = m("h4", null, "角色登记", -1)),
          (C(!0), M(J, null, xe(T(g).pack.roles, (b) => (C(), M("label", {
            key: b,
            class: "rlzc-field"
          }, [
            m("span", null, R(b), 1),
            bn(m("input", {
              "onUpdate:modelValue": (y) => A[b] = y,
              class: "rlzc-input",
              disabled: !t.value,
              placeholder: "未登记"
            }, null, 8, Zf), [
              [$A, A[b]]
            ])
          ]))), 128)),
          m("button", {
            class: "rlzc-btn small",
            disabled: !t.value,
            onClick: u
          }, "保存登记", 8, Jf)
        ])) : Z("", !0),
        m("div", Qf, [
          h[7] || (h[7] = m("h4", null, "<副本> 核对", -1)),
          T(g).audit?.warnings.length ? (C(), M(J, { key: 1 }, [
            m("p", Xf, "共 " + R(T(g).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            m("ul", ed, [
              (C(!0), M(J, null, xe(T(g).audit.warnings.slice(-30).reverse(), (b, y) => (C(), M("li", { key: y }, [
                m("span", null, [
                  m("small", null, "#" + R(b.index) + "｜" + R(b.phase) + "第" + R(b.round) + "轮", 1),
                  h[6] || (h[6] = m("br", null, null, -1)),
                  Zt("⚠️ " + R(b.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (C(), M("p", qf, "没有发现问题。"))
        ]),
        m("div", td, [
          h[8] || (h[8] = m("h4", null, "手动操作记录", -1)),
          T(g).session.manual.length ? (C(), M("ul", nd, [
            (C(!0), M(J, null, xe(T(g).session.manual, (b, y) => (C(), M("li", { key: y }, [
              m("code", null, "#" + R(b.atIndex) + " " + R(b.kind) + " " + R("phase" in b ? b.phase : "") + R("round" in b ? b.round : "") + R("targetPhase" in b ? `${b.targetPhase}:${b.targetRound}` : ""), 1),
              m("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (L) => T(vu)(y)
              }, "撤销", 8, sd)
            ]))), 128))
          ])) : (C(), M("p", Ad, "无"))
        ]),
        m("details", id, [
          h[9] || (h[9] = m("summary", null, "本次注入", -1)),
          m("pre", od, R([T(g).lastInjection.token, T(g).lastInjection.progress, T(g).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        m("details", rd, [
          h[10] || (h[10] = m("summary", null, "重放结果", -1)),
          m("pre", ld, R(f(o.value)), 1)
        ]),
        m("details", cd, [
          h[11] || (h[11] = m("summary", null, "会话原始数据", -1)),
          m("pre", ad, R(f(T(g).session)), 1)
        ]),
        m("details", ud, [
          h[13] || (h[13] = m("summary", null, "每楼快照（最近60条）", -1)),
          m("table", fd, [
            h[12] || (h[12] = m("thead", null, [
              m("tr", null, [
                m("th", null, "楼"),
                m("th", null, "阶段"),
                m("th", null, "轮"),
                m("th", null, "钟时"),
                m("th", null, "时限"),
                m("th", null, "事件")
              ])
            ], -1)),
            m("tbody", null, [
              (C(!0), M(J, null, xe(i.value, (b) => (C(), M("tr", {
                key: b.index,
                class: ct({ "rlzc-row-warn": r.value.has(b.index) })
              }, [
                m("td", null, R(b.index) + R(b.snap.entry ? "★" : ""), 1),
                m("td", null, R(b.snap.phase), 1),
                m("td", null, R(b.snap.round), 1),
                m("td", null, R(b.snap.clock ?? ""), 1),
                m("td", null, R(b.snap.limit?.text ?? ""), 1),
                m("td", null, R(b.snap.injected.join(" ")), 1)
              ], 2))), 128))
            ])
          ])
        ]),
        m("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: h[2] || (h[2] = //@ts-ignore
          (...b) => T(WA) && T(WA)(...b))
        }, "删除副本会话", 8, dd)
      ], 64)) : (C(), M("p", Of, "当前聊天没有副本会话。"))
    ]));
  }
}), hd = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, md = { class: "rlzc-head" }, gd = { class: "rlzc-tabs" }, xd = ["onClick"], bd = { class: "rlzc-body" }, yd = /* @__PURE__ */ kt({
  __name: "Panel",
  setup(e) {
    const t = [
      { id: "system", label: "系统" },
      { id: "settings", label: "设置" },
      { id: "debug", label: "调试" }
    ];
    async function n(s) {
      if (s === "debug" && !g.debugUnlocked) {
        if (!await Ke("此页会显示副本真相，确定要打开吗？")) return;
        g.debugUnlocked = !0;
      }
      g.tab = s;
    }
    return (s, A) => (C(), M("div", {
      class: "rlzc-backdrop",
      onClick: A[1] || (A[1] = Rl((i) => T(g).panelOpen = !1, ["self"]))
    }, [
      m("section", hd, [
        m("header", md, [
          A[2] || (A[2] = m("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          m("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: A[0] || (A[0] = (i) => T(g).panelOpen = !1)
          }, "×")
        ]),
        m("nav", gd, [
          (C(), M(J, null, xe(t, (i) => m("button", {
            key: i.id,
            class: ct({ on: T(g).tab === i.id }),
            onClick: (r) => n(i.id)
          }, R(i.label), 11, xd)), 64))
        ]),
        m("div", bd, [
          T(g).tab === "system" ? (C(), et(uf, { key: 0 })) : T(g).tab === "settings" ? (C(), et(Nf, { key: 1 })) : T(g).tab === "debug" && T(g).debugUnlocked ? (C(), et(pd, { key: 2 })) : Z("", !0)
        ])
      ])
    ]));
  }
}), vd = /* @__PURE__ */ kt({
  __name: "App",
  setup(e) {
    return (t, n) => (C(), M(J, null, [
      T(g).settings.showBall ? (C(), et(Su, { key: 0 })) : Z("", !0),
      T(g).panelOpen ? (C(), et(yd, { key: 1 })) : Z("", !0)
    ], 64));
  }
}), _d = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}';
function wd(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function vo(e, t, n) {
  const s = me().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function kd() {
  const e = wd();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await vo("/api/extensions/version", e, t);
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
async function Sd(e) {
  const t = await vo("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const HA = "rlzc-host", UA = "rlzc-menu-btn", KA = "rlzc-settings-drawer";
function zd() {
  if (document.getElementById(HA)) return;
  const e = document.createElement("div");
  e.id = HA, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = _d, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), Ol(vd).mount(s), _o(), wo();
}
function _o(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => _o(e + 1), 500);
    return;
  }
  if (document.getElementById(UA)) return;
  const n = document.createElement("div");
  n.id = UA, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const A = document.createElement("span");
  A.textContent = "回廊种菜系统", n.append(s, A), n.addEventListener("click", () => {
    g.panelOpen = !g.panelOpen;
  }), t.appendChild(n);
}
function wo(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => wo(e + 1), 500);
    return;
  }
  if (document.getElementById(KA)) return;
  const n = (ee, le = "", de = "") => {
    const je = document.createElement(ee);
    return le && (je.className = le), de && (je.textContent = de), je;
  }, s = n("div");
  s.id = KA;
  const A = n("div", "inline-drawer"), i = n("div", "inline-drawer-toggle inline-drawer-header"), r = n("div", "flex-container alignitemscenter margin0"), o = n("small", "rlzc-update-badge", "有更新");
  o.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", r.append(n("b", "", "回廊种菜系统"), o), i.append(r, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const l = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => g.panelOpen = !0);
  const u = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  u.addEventListener("click", () => {
    g.settings.ball = { x: null, y: null }, g.settings.showBall = !0, He();
  });
  const f = n("label", "checkbox_label"), p = document.createElement("input");
  p.type = "checkbox", p.addEventListener("change", () => {
    g.settings.showBall = p.checked, He();
  }), f.append(p, n("span", "", "显示悬浮球")), Yn(() => g.settings.showBall, (ee) => p.checked = ee, { immediate: !0 });
  const h = n("div", "flex-container");
  h.append(c, u);
  const b = n("div", "flex-container alignitemscenter"), y = n("small", "rlzc-update-status", "正在检查更新…"), L = n("div", "menu_button menu_button_icon", "检查更新"), O = n("div", "menu_button menu_button_icon", "立即更新"), N = n("div", "menu_button menu_button_icon", "刷新页面");
  O.style.display = "none", N.style.display = "none", b.append(y, L, O, N);
  let j = null, I = !1;
  const X = async () => {
    if (!I) {
      I = !0, y.textContent = "正在检查更新…", O.style.display = "none";
      try {
        j = await kd();
        const ee = j.commit ? `（${j.commit}）` : "";
        j.isGit ? j.isUpToDate ? y.textContent = `已是最新版本${ee}` : (y.textContent = `有新版本可以更新，当前${ee || "版本较旧"}`, O.style.display = "") : y.textContent = "不是用仓库地址安装的，无法检查更新。", o.style.display = j.isGit && !j.isUpToDate ? "" : "none";
      } catch (ee) {
        y.textContent = `检查更新失败：${ee.message}`;
      } finally {
        I = !1;
      }
    }
  };
  L.addEventListener("click", () => void X()), O.addEventListener("click", async () => {
    if (!(!j || I)) {
      I = !0, y.textContent = "正在更新…", O.style.display = "none";
      try {
        await Sd(j), o.style.display = "none", y.textContent = "更新完成，刷新页面后生效。", N.style.display = "";
      } catch (ee) {
        y.textContent = `更新失败：${ee.message}`, O.style.display = "";
      } finally {
        I = !1;
      }
    }
  }), N.addEventListener("click", () => location.reload()), setTimeout(() => void X(), 3e3), l.append(h, f, b, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), A.append(i, l), s.append(A), t.append(s);
}
globalThis.rlzcInterceptor = hu;
function bs() {
  lu(), Je("MESSAGE_RECEIVED", (e) => _u(Number(e))), Je("CHARACTER_MESSAGE_RENDERED", (e) => gs(Number(e))), Je("MESSAGE_DELETED", () => ms()), Je("MESSAGE_SWIPED", (e) => {
    mu(Number(e)), gs(Number(e));
  }), Je("MESSAGE_EDITED", () => ms()), Je("MESSAGE_UPDATED", (e) => {
    ms(), gs(Number(e));
  }), Je("CHAT_CHANGED", () => GA()), Je("MORE_MESSAGES_LOADED", () => Js()), zd(), GA(), console.log("[rlzc] 回廊种菜系统已加载", g.settings);
}
const ZA = window.jQuery;
typeof ZA == "function" ? ZA(() => bs()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", bs) : bs();
