/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Vs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = {}, wt = [], $t = () => {
}, ur = () => !1, Bn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Vn = (e) => e.startsWith("onUpdate:"), Ce = Object.assign, fr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Al = Object.prototype.hasOwnProperty, Z = (e, t) => Al.call(e, t), B = Array.isArray, tt = (e) => un(e) === "[object Map]", Et = (e) => un(e) === "[object Set]", mi = (e) => un(e) === "[object Date]", H = (e) => typeof e == "function", ie = (e) => typeof e == "string", Le = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", dr = (e) => (X(e) || H(e)) && H(e.then) && H(e.catch), pr = Object.prototype.toString, un = (e) => pr.call(e), al = (e) => un(e).slice(8, -1), hr = (e) => un(e) === "[object Object]", Ws = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zt = /* @__PURE__ */ Vs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Wn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, cl = /-\w/g, $e = Wn(
  (e) => e.replace(cl, (t) => t.slice(1).toUpperCase())
), ul = /\B([A-Z])/g, It = Wn(
  (e) => e.replace(ul, "-$1").toLowerCase()
), mr = Wn((e) => e.charAt(0).toUpperCase() + e.slice(1)), cs = Wn(
  (e) => e ? `on${mr(e)}` : ""
), je = (e, t) => !Object.is(e, t), _n = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, gr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Un = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let gi;
const Gn = () => gi || (gi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Yn(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = ie(s) ? hl(s) : Yn(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ie(e) || X(e))
    return e;
}
const fl = /;(?![^(]*\))/g, dl = /:([^]+)/, pl = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function hl(e) {
  const t = {};
  return e.replace(pl, (n) => n.startsWith("/*") ? "" : n).split(fl).forEach((n) => {
    if (n) {
      const s = n.split(dl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ct(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const s = ct(e[n]);
      s && (t += s + " ");
    }
  else if (X(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ml = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", gl = /* @__PURE__ */ Vs(ml);
function xr(e) {
  return !!e || e === "";
}
function xl(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = rt(e[i], t[i], n);
  return s;
}
function xi(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const r of e) {
    let l = -1;
    for (let o = 0; o < s.length; o++)
      if (!i[o] && rt(r, s[o], n)) {
        l = o;
        break;
      }
    if (l < 0) return !1;
    i[l] = 1;
  }
  return !0;
}
function bl(e, t, n) {
  let s = tt(e), i = tt(t);
  if (s || i || (s = Et(e), i = Et(t), s || i))
    return s && i ? xi(e, t, n) : !1;
  const r = Object.keys(e).length, l = Object.keys(t).length;
  if (r !== l)
    return !1;
  for (const o in e) {
    const A = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
    if (A && !a || !A && a || !rt(e[o], t[o], n))
      return !1;
  }
  return String(e) === String(t);
}
function bi(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, r] = n;
  if (i.has(e) || r.has(t))
    return i.get(e) === t && r.get(t) === e;
  i.set(e, t), r.set(t, e);
  const l = s(e, t, n);
  return i.delete(e), r.delete(t), l;
}
function rt(e, t, n) {
  if (e === t) return !0;
  let s = mi(e), i = mi(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = Le(e), i = Le(t), s || i ? e === t : (s = B(e), i = B(t), s || i ? s && i ? bi(e, t, n, xl) : !1 : (s = X(e), i = X(t), s || i ? !s || !i ? !1 : bi(e, t, n, bl) : String(e) === String(t))));
}
function yl(e, t) {
  return e.findIndex((n) => rt(n, t));
}
const br = (e) => !!(e && e.__v_isRef === !0), R = (e) => ie(e) ? e : e == null ? "" : B(e) || X(e) && (e.toString === pr || !H(e.toString)) ? br(e) ? R(e.value) : JSON.stringify(e, yr, 2) : String(e), yr = (e, t) => br(t) ? yr(e, t.value) : tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[us(s, r) + " =>"] = i, n),
    {}
  )
} : Et(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => us(n))
} : Le(t) ? us(t) : X(t) && !B(t) && !hr(t) ? String(t) : t, us = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Le(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let le;
class vl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && le && (le.active ? (this.parent = le, this.index = (le.scopes || (le.scopes = [])).push(
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
      const n = le;
      try {
        return le = this, t();
      } finally {
        le = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = le, le = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (le === this)
        le = this.prevScope;
      else {
        let t = le;
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
function _l() {
  return le;
}
let q;
const fs = /* @__PURE__ */ new WeakSet();
class vr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, le && (le.active ? le.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fs.has(this) && (fs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, yi(this), kr(this);
    const t = q, n = Se;
    q = this, Se = !0;
    try {
      return this.fn();
    } finally {
      $r(this), q = t, Se = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ys(t);
      this.deps = this.depsTail = void 0, yi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Is(this) && this.run();
  }
  get dirty() {
    return Is(this);
  }
}
let _r = 0, Jt, qt;
function wr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qt, qt = e;
    return;
  }
  e.next = Jt, Jt = e;
}
function Us() {
  _r++;
}
function Gs() {
  if (--_r > 0)
    return;
  if (qt) {
    let t = qt;
    for (qt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Jt; ) {
    let t = Jt;
    for (Jt = void 0; t; ) {
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
function kr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function $r(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Ys(s), wl(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Is(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Sr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Sr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nn) || (e.globalVersion = nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Is(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = q, s = Se;
  q = e, Se = !0;
  try {
    kr(e);
    const i = e.fn(e._value);
    (t.version === 0 || je(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    q = n, Se = s, $r(e), e.flags &= -3;
  }
}
function Ys(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Ys(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function wl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Se = !0;
const zr = [];
function ot() {
  zr.push(Se), Se = !1;
}
function lt() {
  const e = zr.pop();
  Se = e === void 0 ? !0 : e;
}
function yi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = q;
    q = void 0;
    try {
      t();
    } finally {
      q = n;
    }
  }
}
let nn = 0;
class kl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Hs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!q || !Se || q === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== q)
      n = this.activeLink = new kl(q, this), q.deps ? (n.prevDep = q.depsTail, q.depsTail.nextDep = n, q.depsTail = n) : q.deps = q.depsTail = n, Er(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = q.depsTail, n.nextDep = void 0, q.depsTail.nextDep = n, q.depsTail = n, q.deps === n && (q.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, nn++, this.notify(t);
  }
  notify(t) {
    Us();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Gs();
    }
  }
}
function Er(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Er(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ts = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ Symbol(
  ""
), Ps = /* @__PURE__ */ Symbol(
  ""
), sn = /* @__PURE__ */ Symbol(
  ""
);
function ae(e, t, n) {
  if (Se && q) {
    let s = Ts.get(e);
    s || Ts.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Hs()), i.map = s, i.key = n), i.track();
  }
}
function Ze(e, t, n, s, i, r) {
  const l = Ts.get(e);
  if (!l) {
    nn++;
    return;
  }
  const o = (A) => {
    A && A.trigger();
  };
  if (Us(), t === "clear")
    l.forEach(o);
  else {
    const A = B(e), a = A && Ws(n);
    if (A && n === "length") {
      const c = Number(s);
      l.forEach((f, p) => {
        (p === "length" || p === sn || !Le(p) && p >= c) && o(f);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && o(l.get(n)), a && o(l.get(sn)), t) {
        case "add":
          A ? a && o(l.get("length")) : (o(l.get(St)), tt(e) && o(l.get(Ps)));
          break;
        case "delete":
          A || (o(l.get(St)), tt(e) && o(l.get(Ps)));
          break;
        case "set":
          tt(e) && o(l.get(St));
          break;
      }
  }
  Gs();
}
function Pt(e) {
  const t = /* @__PURE__ */ U(e);
  return t === e || (ae(t, "iterate", sn), /* @__PURE__ */ _e(e)) ? t : /* @__PURE__ */ Be(e) ? /* @__PURE__ */ nt(e) ? t.map((n) => At(we(n))) : t.map(At) : t.map(we);
}
function Hn(e) {
  return ae(e = /* @__PURE__ */ U(e), "iterate", sn), e;
}
function Fe(e, t) {
  return /* @__PURE__ */ Be(e) ? At(/* @__PURE__ */ nt(e) ? we(t) : t) : we(t);
}
const $l = {
  __proto__: null,
  [Symbol.iterator]() {
    return ds(this, Symbol.iterator, (e) => Fe(this, e));
  },
  concat(...e) {
    return Pt(this).concat(
      ...e.map((t) => B(t) ? Pt(t) : t)
    );
  },
  entries() {
    return ds(this, "entries", (e) => (e[1] = Fe(this, e[1]), e));
  },
  every(e, t) {
    return Ye(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ye(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Fe(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ye(
      this,
      "find",
      e,
      t,
      (n) => Fe(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ye(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ye(
      this,
      "findLast",
      e,
      t,
      (n) => Fe(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ye(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ye(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ps(this, "includes", e);
  },
  indexOf(...e) {
    return ps(this, "indexOf", e);
  },
  join(e) {
    return Pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ps(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Wt(this, "pop");
  },
  push(...e) {
    return Wt(this, "push", e);
  },
  reduce(e, ...t) {
    return vi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return vi(this, "reduceRight", e, t);
  },
  shift() {
    return Wt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Wt(this, "splice", e);
  },
  toReversed() {
    return Pt(this).toReversed();
  },
  toSorted(e) {
    return Pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Wt(this, "unshift", e);
  },
  values() {
    return ds(this, "values", (e) => Fe(this, e));
  }
};
function ds(e, t, n) {
  const s = Hn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ _e(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const Sl = Array.prototype;
function Ye(e, t, n, s, i, r) {
  const l = Hn(e), o = l !== e && !/* @__PURE__ */ _e(e), A = l[t];
  if (A !== Sl[t]) {
    const f = A.apply(e, r);
    return o ? we(f) : f;
  }
  let a = n;
  l !== e && (o ? a = function(f, p) {
    return n.call(this, Fe(e, f), p, e);
  } : n.length > 2 && (a = function(f, p) {
    return n.call(this, f, p, e);
  }));
  const c = A.call(l, a, s);
  return o && i ? i(c) : c;
}
function vi(e, t, n, s) {
  const i = Hn(e), r = i !== e && !/* @__PURE__ */ _e(e);
  let l = n, o = !1;
  i !== e && (r ? (o = s.length === 0, l = function(a, c, f) {
    return o && (o = !1, a = Fe(e, a)), n.call(this, a, Fe(e, c), f, e);
  }) : n.length > 3 && (l = function(a, c, f) {
    return n.call(this, a, c, f, e);
  }));
  const A = i[t](l, ...s);
  return o ? Fe(e, A) : A;
}
function ps(e, t, n) {
  const s = /* @__PURE__ */ U(e);
  ae(s, "iterate", sn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Js(n[0]) ? (n[0] = /* @__PURE__ */ U(n[0]), s[t](...n)) : i;
}
function Wt(e, t, n = []) {
  ot(), Us();
  const s = (/* @__PURE__ */ U(e))[t].apply(e, n);
  return Gs(), lt(), s;
}
const zl = /* @__PURE__ */ Vs("__proto__,__v_isRef,__isVue"), Cr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Le)
);
function El(e) {
  Le(e) || (e = String(e));
  const t = /* @__PURE__ */ U(this);
  return ae(t, "has", e), t.hasOwnProperty(e);
}
class Mr {
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
      return s === (i ? r ? jl : Nr : r ? Pr : Tr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = B(t);
    if (!i) {
      let A;
      if (l && (A = $l[n]))
        return A;
      if (n === "hasOwnProperty")
        return El;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ fe(t) ? t : s
    );
    if ((Le(n) ? Cr.has(n) : zl(n)) || (i || ae(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ fe(o)) {
      const A = l && Ws(n) ? o : o.value;
      return i && X(A) ? /* @__PURE__ */ Fs(A) : A;
    }
    return X(o) ? i ? /* @__PURE__ */ Fs(o) : /* @__PURE__ */ Kn(o) : o;
  }
}
class Ir extends Mr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const l = B(t) && Ws(n);
    if (!this._isShallow) {
      const a = /* @__PURE__ */ Be(r);
      if (!/* @__PURE__ */ _e(s) && !/* @__PURE__ */ Be(s) && (r = /* @__PURE__ */ U(r), s = /* @__PURE__ */ U(s)), !l && /* @__PURE__ */ fe(r) && !/* @__PURE__ */ fe(s))
        return a || (r.value = s), !0;
    }
    const o = l ? Number(n) < t.length : Z(t, n), A = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ fe(t) ? t : i
    );
    return t === /* @__PURE__ */ U(i) && A && (o ? je(s, r) && Ze(t, "set", n, s) : Ze(t, "add", n, s)), A;
  }
  deleteProperty(t, n) {
    const s = Z(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && Ze(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Le(n) || !Cr.has(n)) && ae(t, "has", n), s;
  }
  ownKeys(t) {
    return ae(
      t,
      "iterate",
      B(t) ? "length" : St
    ), Reflect.ownKeys(t);
  }
}
class Cl extends Mr {
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
const Ml = /* @__PURE__ */ new Ir(), Il = /* @__PURE__ */ new Cl(), Tl = /* @__PURE__ */ new Ir(!0);
const Ns = (e) => e, mn = (e) => Reflect.getPrototypeOf(e);
function Pl(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ U(i), l = tt(r), o = e === "entries" || e === Symbol.iterator && l, A = e === "keys" && l, a = i[e](...s), c = n ? Ns : t ? At : we;
    return !t && ae(
      r,
      "iterate",
      A ? Ps : St
    ), Ce(
      // inheriting all iterator properties
      Object.create(a),
      {
        // iterator protocol
        next() {
          const { value: f, done: p } = a.next();
          return p ? { value: f, done: p } : {
            value: o ? [c(f[0]), c(f[1])] : c(f),
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
function Nl(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, l = /* @__PURE__ */ U(r), o = /* @__PURE__ */ U(i);
      e || (je(i, o) && ae(l, "get", i), ae(l, "get", o));
      const { has: A } = mn(l), a = t ? Ns : e ? At : we;
      if (A.call(l, i))
        return a(r.get(i));
      if (A.call(l, o))
        return a(r.get(o));
      r !== l && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ae(/* @__PURE__ */ U(i), "iterate", St), i.size;
    },
    has(i) {
      const r = this.__v_raw, l = /* @__PURE__ */ U(r), o = /* @__PURE__ */ U(i);
      return e || (je(i, o) && ae(l, "has", i), ae(l, "has", o)), i === o ? r.has(i) : r.has(i) || r.has(o);
    },
    forEach(i, r) {
      const l = this, o = l.__v_raw, A = /* @__PURE__ */ U(o), a = t ? Ns : e ? At : we;
      return !e && ae(A, "iterate", St), o.forEach((c, f) => i.call(r, a(c), a(f), l));
    }
  };
  return Ce(
    n,
    e ? {
      add: gn("add"),
      set: gn("set"),
      delete: gn("delete"),
      clear: gn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ U(this), l = mn(r), o = /* @__PURE__ */ U(i), A = !t && !/* @__PURE__ */ _e(i) && !/* @__PURE__ */ Be(i) ? o : i;
        return l.has.call(r, A) || je(i, A) && l.has.call(r, i) || je(o, A) && l.has.call(r, o) || (r.add(A), Ze(r, "add", A, A)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ _e(r) && !/* @__PURE__ */ Be(r) && (r = /* @__PURE__ */ U(r));
        const l = /* @__PURE__ */ U(this), { has: o, get: A } = mn(l);
        let a = o.call(l, i);
        a || (i = /* @__PURE__ */ U(i), a = o.call(l, i));
        const c = A.call(l, i);
        return l.set(i, r), a ? je(r, c) && Ze(l, "set", i, r) : Ze(l, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ U(this), { has: l, get: o } = mn(r);
        let A = l.call(r, i);
        A || (i = /* @__PURE__ */ U(i), A = l.call(r, i)), o && o.call(r, i);
        const a = r.delete(i);
        return A && Ze(r, "delete", i, void 0), a;
      },
      clear() {
        const i = /* @__PURE__ */ U(this), r = i.size !== 0, l = i.clear();
        return r && Ze(
          i,
          "clear",
          void 0,
          void 0
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Pl(i, e, t);
  }), n;
}
function Ks(e, t) {
  const n = Nl(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    Z(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Fl = {
  get: /* @__PURE__ */ Ks(!1, !1)
}, Rl = {
  get: /* @__PURE__ */ Ks(!1, !0)
}, Ol = {
  get: /* @__PURE__ */ Ks(!0, !1)
};
const Tr = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), jl = /* @__PURE__ */ new WeakMap();
function Dl(e) {
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
function Kn(e) {
  return /* @__PURE__ */ Be(e) ? e : Zs(
    e,
    !1,
    Ml,
    Fl,
    Tr
  );
}
// @__NO_SIDE_EFFECTS__
function Ll(e) {
  return Zs(
    e,
    !1,
    Tl,
    Rl,
    Pr
  );
}
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  return Zs(
    e,
    !0,
    Il,
    Ol,
    Nr
  );
}
function Zs(e, t, n, s, i) {
  if (!X(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const l = Dl(al(e));
  if (l === 0)
    return e;
  const o = new Proxy(
    e,
    l === 2 ? s : n
  );
  return i.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  return /* @__PURE__ */ Be(e) ? /* @__PURE__ */ nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Js(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function U(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ U(t) : e;
}
function Bl(e) {
  return !Z(e, "__v_skip") && Object.isExtensible(e) && gr(e, "__v_skip", !0), e;
}
const we = (e) => X(e) ? /* @__PURE__ */ Kn(e) : e, At = (e) => X(e) ? /* @__PURE__ */ Fs(e) : e;
// @__NO_SIDE_EFFECTS__
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return Vl(e, !1);
}
function Vl(e, t) {
  return /* @__PURE__ */ fe(e) ? e : new Wl(e, t);
}
class Wl {
  constructor(t, n) {
    this.dep = new Hs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ U(t), this._value = n ? t : we(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ _e(t) || /* @__PURE__ */ Be(t);
    t = s ? t : /* @__PURE__ */ U(t), je(t, n) && (this._rawValue = t, this._value = s ? t : we(t), this.dep.trigger());
  }
}
function O(e) {
  return /* @__PURE__ */ fe(e) ? e.value : e;
}
const Ul = {
  get: (e, t, n) => t === "__v_raw" ? e : O(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ fe(i) && !/* @__PURE__ */ fe(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Fr(e) {
  return /* @__PURE__ */ nt(e) ? e : new Proxy(e, Ul);
}
class Gl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Hs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    q !== this)
      return wr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Sr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Yl(e, t, n = !1) {
  let s, i;
  return H(e) ? s = e : (s = e.get, i = e.set), new Gl(s, i, n);
}
const xn = {}, En = /* @__PURE__ */ new WeakMap();
let vt;
function Hl(e, t = !1, n = vt) {
  if (n) {
    let s = En.get(n);
    s || En.set(n, s = []), s.push(e);
  }
}
function Kl(e, t, n = Q) {
  const { immediate: s, deep: i, once: r, scheduler: l, augmentJob: o, call: A } = n, a = (z) => i ? z : /* @__PURE__ */ _e(z) || i === !1 || i === 0 ? Je(z, 1) : Je(z);
  let c, f, p, b, T = !1, v = !1;
  if (/* @__PURE__ */ fe(e) ? (f = () => e.value, T = /* @__PURE__ */ _e(e)) : /* @__PURE__ */ nt(e) ? (f = () => a(e), T = !0) : B(e) ? (v = !0, T = e.some((z) => /* @__PURE__ */ nt(z) || /* @__PURE__ */ _e(z)), f = () => e.map((z) => {
    if (/* @__PURE__ */ fe(z))
      return z.value;
    if (/* @__PURE__ */ nt(z))
      return a(z);
    if (H(z))
      return A ? A(z, 2) : z();
  })) : H(e) ? t ? f = A ? () => A(e, 2) : e : f = () => {
    if (p) {
      ot();
      try {
        p();
      } finally {
        lt();
      }
    }
    const z = vt;
    vt = c;
    try {
      return A ? A(e, 3, [b]) : e(b);
    } finally {
      vt = z;
    }
  } : f = $t, t && i) {
    const z = f, J = i === !0 ? 1 / 0 : i;
    f = () => Je(z(), J);
  }
  const k = _l(), S = () => {
    c.stop(), k && k.active && fr(k.effects, c);
  };
  if (r && t) {
    const z = t;
    t = (...J) => {
      const ee = z(...J);
      return S(), ee;
    };
  }
  let y = v ? new Array(e.length).fill(xn) : xn;
  const g = (z) => {
    if (!(!(c.flags & 1) || !c.dirty && !z))
      if (t) {
        const J = c.run();
        if (z || i || T || (v ? J.some((ee, me) => je(ee, y[me])) : je(J, y))) {
          p && p();
          const ee = vt;
          vt = c;
          try {
            const me = [
              J,
              // pass undefined as the old value when it's changed for the first time
              y === xn ? void 0 : v && y[0] === xn ? [] : y,
              b
            ];
            y = J, A ? A(t, 3, me) : (
              // @ts-expect-error
              t(...me)
            );
          } finally {
            vt = ee;
          }
        }
      } else
        c.run();
  };
  return o && o(g), c = new vr(f), c.scheduler = l ? () => l(g, !1) : g, b = (z) => Hl(z, !1, c), p = c.onStop = () => {
    const z = En.get(c);
    if (z) {
      if (A)
        A(z, 4);
      else
        for (const J of z) J();
      En.delete(c);
    }
  }, t ? s ? g(!0) : y = c.run() : l ? l(g.bind(null, !0), !0) : c.run(), S.pause = c.pause.bind(c), S.resume = c.resume.bind(c), S.stop = S, S;
}
function Je(e, t = 1 / 0, n) {
  if (t <= 0 || !X(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ fe(e))
    Je(e.value, t, n);
  else if (B(e))
    for (let s = 0; s < e.length; s++)
      Je(e[s], t, n);
  else if (Et(e) || tt(e))
    e.forEach((s) => {
      Je(s, t, n);
    });
  else if (hr(e)) {
    for (const s in e)
      Je(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Je(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function fn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Zn(i, t, n);
  }
}
function Ve(e, t, n, s) {
  if (H(e)) {
    const i = fn(e, t, n, s);
    return i && dr(i) && i.catch((r) => {
      Zn(r, t, n);
    }), i;
  }
  if (B(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ve(e[r], t, n, s));
    return i;
  }
}
function Zn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: l } = t && t.appContext.config || Q;
  if (t) {
    let o = t.parent;
    const A = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](e, A, a) === !1)
            return;
      }
      o = o.parent;
    }
    if (r) {
      ot(), fn(r, null, 10, [
        e,
        A,
        a
      ]), lt();
      return;
    }
  }
  Zl(e, n, i, s, l);
}
function Zl(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ue = [];
let Ne = -1;
const Rt = [];
let et = null, Nt = 0;
const Rr = /* @__PURE__ */ Promise.resolve();
let Cn = null;
function Or(e) {
  const t = Cn || Rr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Jl(e) {
  let t = Ne + 1, n = ue.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = ue[s], r = rn(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function qs(e) {
  if (!(e.flags & 1)) {
    const t = rn(e), n = ue[ue.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rn(n) ? ue.push(e) : ue.splice(Jl(t), 0, e), e.flags |= 1, jr();
  }
}
function jr() {
  Cn || (Cn = Rr.then(Lr));
}
function ql(e) {
  if (!B(e))
    et && e.id === -1 ? et.splice(Nt + 1, 0, e) : e.flags & 1 || (Rt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Rt.push(e[t]);
  jr();
}
function _i(e, t, n = Ne + 1) {
  for (; n < ue.length; n++) {
    const s = ue[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ue.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Dr(e) {
  if (Rt.length) {
    const t = [...new Set(Rt)].sort(
      (n, s) => rn(n) - rn(s)
    );
    if (Rt.length = 0, et) {
      for (let n = 0; n < t.length; n++)
        et.push(t[n]);
      return;
    }
    for (et = t, Nt = 0; Nt < et.length; Nt++) {
      const n = et[Nt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    et = null, Nt = 0;
  }
}
const rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lr(e) {
  try {
    for (Ne = 0; Ne < ue.length; Ne++) {
      const t = ue[Ne];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), fn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ne < ue.length; Ne++) {
      const t = ue[Ne];
      t && (t.flags &= -2);
    }
    Ne = -1, ue.length = 0, Dr(), Cn = null, (ue.length || Rt.length) && Lr();
  }
}
let ve = null, Br = null;
function Mn(e) {
  const t = ve;
  return ve = e, Br = e && e.type.__scopeId || null, t;
}
function Ql(e, t = ve, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Ci(-1);
    const r = Mn(t), l = zt.length;
    let o;
    try {
      o = e(...i);
    } finally {
      for (let A = zt.length; A > l; A--) io();
      Mn(r), s._d && Ci(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function wn(e, t) {
  if (ve === null)
    return e;
  const n = es(ve), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, l, o, A = Q] = t[i];
    r && (H(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Je(l), s.push({
      dir: r,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: o,
      modifiers: A
    }));
  }
  return e;
}
function bt(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let l = 0; l < i.length; l++) {
    const o = i[l];
    r && (o.oldValue = r[l].value);
    let A = o.dir[s];
    A && (ot(), Ve(A, n, 8, [
      e.el,
      o,
      e,
      t
    ]), lt());
  }
}
function Xl(e, t, n = !1) {
  const s = OA();
  if (s || Ot) {
    let i = Ot ? Ot._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && H(t) ? t.call(s && s.proxy) : t;
  }
}
const eA = /* @__PURE__ */ Symbol.for("v-scx"), tA = () => Xl(eA);
function Jn(e, t, n) {
  return nA(e, t, n);
}
function nA(e, t, n = Q) {
  const { immediate: s, deep: i, flush: r, once: l } = n, o = Ce({}, n), A = t && s || !t && r !== "post";
  let a;
  if (An) {
    if (r === "sync") {
      const b = tA();
      a = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!A) {
      const b = () => {
      };
      return b.stop = $t, b.resume = $t, b.pause = $t, b;
    }
  }
  const c = at;
  o.call = (b, T, v) => Ve(b, c, T, v);
  let f = !1;
  r === "post" ? o.scheduler = (b) => {
    pe(b, c && c.suspense);
  } : r !== "sync" && (f = !0, o.scheduler = (b, T) => {
    T ? b() : qs(b);
  }), o.augmentJob = (b) => {
    t && (b.flags |= 4), f && (b.flags |= 2, c && (b.id = c.uid, b.i = c));
  };
  const p = Kl(e, t, o);
  return An && (a ? a.push(p) : A && p()), p;
}
const sA = /* @__PURE__ */ Symbol("_vte"), qn = (e) => e.__isTeleport, hs = /* @__PURE__ */ Symbol("_leaveCb");
function iA(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== qe) {
        t = n;
        break;
      }
  }
  return t;
}
function Vr(e) {
  if (!Wr(e))
    return qn(e.type) && e.children ? iA(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && H(n.default))
      return n.default();
  }
}
function Qs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Qs(
      qn(n.type) && Vr(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function ut(e, t) {
  return H(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function rA(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function wi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const In = /* @__PURE__ */ new WeakMap();
function Qt(e, t, n, s, i = !1) {
  if (B(e)) {
    e.forEach(
      (v, k) => Qt(
        v,
        t && (B(t) ? t[k] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (Xt(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Qt(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? es(s.component) : s.el, l = i ? null : r, { i: o, r: A } = e, a = t && t.r, c = o.refs === Q ? o.refs = {} : o.refs, f = o.setupState, p = /* @__PURE__ */ U(f), b = f === Q ? ur : (v) => wi(c, v) ? !1 : Z(p, v), T = (v, k) => !(k && wi(c, k));
  if (a != null && a !== A) {
    if (ki(t), ie(a))
      c[a] = null, b(a) && (f[a] = null);
    else if (/* @__PURE__ */ fe(a)) {
      const v = t;
      T(a, v.k) && (a.value = null), v.k && (c[v.k] = null);
    }
  }
  if (H(A))
    fn(A, o, 12, [l, c]);
  else {
    const v = ie(A), k = /* @__PURE__ */ fe(A);
    if (v || k) {
      const S = () => {
        if (e.f) {
          const y = v ? b(A) ? f[A] : c[A] : T() || !e.k ? A.value : c[e.k];
          if (i)
            B(y) && fr(y, r);
          else if (B(y))
            y.includes(r) || y.push(r);
          else if (v)
            c[A] = [r], b(A) && (f[A] = c[A]);
          else {
            const g = [r];
            T(A, e.k) && (A.value = g), e.k && (c[e.k] = g);
          }
        } else v ? (c[A] = l, b(A) && (f[A] = l)) : k && (T(A, e.k) && (A.value = l), e.k && (c[e.k] = l));
      };
      if (l) {
        const y = () => {
          S(), In.delete(e);
        };
        y.id = -1, In.set(e, y), pe(y, n);
      } else
        ki(e), S();
    }
  }
}
function ki(e) {
  const t = In.get(e);
  t && (t.flags |= 8, In.delete(e));
}
Gn().requestIdleCallback;
Gn().cancelIdleCallback;
const Xt = (e) => !!e.type.__asyncLoader, Wr = (e) => e.type.__isKeepAlive;
function oA(e, t, n = at, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
      ot();
      const o = ti(n), A = Ve(t, n, e, l);
      return o(), lt(), A;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const Ur = (e) => (t, n = at) => {
  (!An || e === "sp") && oA(e, (...s) => t(...s), n);
}, lA = Ur("m"), AA = Ur(
  "bum"
), aA = /* @__PURE__ */ Symbol.for("v-ndc");
function he(e, t, n, s) {
  let i;
  const r = n, l = B(e);
  if (l || ie(e)) {
    const o = l && /* @__PURE__ */ nt(e);
    let A = !1, a = !1;
    o && (A = !/* @__PURE__ */ _e(e), a = /* @__PURE__ */ Be(e), e = Hn(e)), i = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      i[c] = t(
        A ? a ? At(we(e[c])) : we(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let o = 0; o < e; o++)
      i[o] = t(o + 1, o, void 0, r);
  } else if (X(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (o, A) => t(o, A, void 0, r)
      );
    else {
      const o = Object.keys(e);
      i = new Array(o.length);
      for (let A = 0, a = o.length; A < a; A++) {
        const c = o[A];
        i[A] = t(e[c], c, A, r);
      }
    }
  else
    i = [];
  return i;
}
const Rs = (e) => e ? Ao(e) ? es(e) : Rs(e.parent) : null, en = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Rs(e.parent),
    $root: (e) => Rs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      qs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Or.bind(e.proxy)),
    $watch: (e) => $t
  })
), ms = (e, t) => e !== Q && !e.__isScriptSetup && Z(e, t), cA = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: l, type: o, appContext: A } = e;
    if (t[0] !== "$") {
      const p = l[t];
      if (p !== void 0)
        switch (p) {
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
        if (ms(s, t))
          return l[t] = 1, s[t];
        if (Z(r, t))
          return l[t] = 3, r[t];
        if (n !== Q && Z(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const a = en[t];
    let c, f;
    if (a)
      return t === "$attrs" && ae(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (c = o.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Q && Z(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      f = A.config.globalProperties, Z(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return ms(i, t) ? (i[t] = n, !0) : Z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: l }
  }, o) {
    let A;
    return !!(n[o] || ms(t, o) || Z(r, o) || Z(s, o) || Z(en, o) || Z(i.config.globalProperties, o) || (A = l.__cssModules) && A[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Gr() {
  return {
    app: null,
    config: {
      isNativeTag: ur,
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
let uA = 0;
function fA(e, t) {
  return function(s, i = null) {
    H(s) || (s = Ce({}, s)), i != null && !X(i) && (i = null);
    const r = Gr(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let A = !1;
    const a = r.app = {
      _uid: uA++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: WA,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return l.has(c) || (c && H(c.install) ? (l.add(c), c.install(a, ...f)) : H(c) && (l.add(c), c(a, ...f))), a;
      },
      mixin(c) {
        return a;
      },
      component(c, f) {
        return f ? (r.components[c] = f, a) : r.components[c];
      },
      directive(c, f) {
        return f ? (r.directives[c] = f, a) : r.directives[c];
      },
      mount(c, f, p) {
        if (!A) {
          const b = a._ceVNode || De(s, i);
          return b.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(b, c, p), A = !0, a._container = c, c.__vue_app__ = a, es(b.component);
        }
      },
      onUnmount(c) {
        o.push(c);
      },
      unmount() {
        A && (Ve(
          o,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, f) {
        return r.provides[c] = f, a;
      },
      runWithContext(c) {
        const f = Ot;
        Ot = a;
        try {
          return c();
        } finally {
          Ot = f;
        }
      }
    };
    return a;
  };
}
let Ot = null;
const dA = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$e(t)}Modifiers`] || e[`${It(t)}Modifiers`];
function pA(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Q;
  let i = n;
  const r = t.startsWith("update:"), l = r && dA(s, t.slice(7));
  l && (l.trim && (i = n.map((c) => ie(c) ? c.trim() : c)), l.number && (i = i.map(Un)));
  let o, A = s[o = cs(t)] || // also try camelCase event handler (#2249)
  s[o = cs($e(t))];
  !A && r && (A = s[o = cs(It(t))]), A && Ve(
    A,
    e,
    6,
    i
  );
  const a = s[o + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, Ve(
      a,
      e,
      6,
      i
    );
  }
}
function hA(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let l = {};
  return r ? (B(r) ? r.forEach((o) => l[o] = null) : Ce(l, r), X(e) && s.set(e, l), l) : (X(e) && s.set(e, null), null);
}
function Qn(e, t) {
  return !e || !Bn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, It(t)) || Z(e, t));
}
function $i(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: l,
    attrs: o,
    emit: A,
    render: a,
    renderCache: c,
    props: f,
    data: p,
    setupState: b,
    ctx: T,
    inheritAttrs: v
  } = e, k = Mn(e);
  let S, y;
  try {
    if (n.shapeFlag & 4) {
      const z = i || s, J = z;
      S = Oe(
        a.call(
          J,
          z,
          c,
          f,
          b,
          p,
          T
        )
      ), y = o;
    } else {
      const z = t;
      S = Oe(
        z.length > 1 ? z(
          f,
          { attrs: o, slots: l, emit: A }
        ) : z(
          f,
          null
        )
      ), y = t.props ? o : mA(o);
    }
  } catch (z) {
    zt.length = 0, Zn(z, e, 1), S = De(qe);
  }
  let g = S;
  if (y && v !== !1) {
    const z = Object.keys(y), { shapeFlag: J } = g;
    z.length && J & 7 && (r && z.some(Vn) && (y = gA(
      y,
      r
    )), g = jt(g, y, !1, !0));
  }
  if (n.dirs && (g = jt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const z = qn(g.type) && Vr(g) || g;
    Qs(z, n.transition);
  }
  return S = g, Mn(k), S;
}
const mA = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, gA = (e, t) => {
  const n = {};
  for (const s in e)
    (!Vn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function xA(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: l, children: o, patchFlag: A } = t, a = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && A >= 0) {
    if (A & 1024)
      return !0;
    if (A & 16)
      return s ? Si(s, l, a) : !!l;
    if (A & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const p = c[f];
        if (Yr(l, s, p) && !Qn(a, p))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : s === l ? !1 : s ? l ? Si(s, l, a) : !0 : !!l;
  return !1;
}
function Si(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (Yr(t, e, r) && !Qn(n, r))
      return !0;
  }
  return !1;
}
function Yr(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && X(s) && X(i) ? !rt(s, i) : s !== i;
}
function bA({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Hr = {}, Kr = () => Object.create(Hr), Zr = (e) => Object.getPrototypeOf(e) === Hr;
function yA(e, t, n, s = !1) {
  const i = {}, r = Kr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Jr(e, t, i, r);
  for (const l in e.propsOptions[0])
    l in i || (i[l] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Ll(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function vA(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: l }
  } = e, o = /* @__PURE__ */ U(i), [A] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let p = c[f];
        if (Qn(e.emitsOptions, p))
          continue;
        const b = t[p];
        if (A)
          if (Z(r, p))
            b !== r[p] && (r[p] = b, a = !0);
          else {
            const T = $e(p);
            i[T] = Os(
              A,
              o,
              T,
              b,
              e,
              !1
            );
          }
        else
          b !== r[p] && (r[p] = b, a = !0);
      }
    }
  } else {
    Jr(e, t, i, r) && (a = !0);
    let c;
    for (const f in o)
      (!t || // for camelCase
      !Z(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = It(f)) === f || !Z(t, c))) && (A ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (i[f] = Os(
        A,
        o,
        f,
        void 0,
        e,
        !0
      )) : delete i[f]);
    if (r !== o)
      for (const f in r)
        (!t || !Z(t, f)) && (delete r[f], a = !0);
  }
  a && Ze(e.attrs, "set", "");
}
function Jr(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let A in t) {
      if (Zt(A))
        continue;
      const a = t[A];
      let c;
      i && Z(i, c = $e(A)) ? !r || !r.includes(c) ? n[c] = a : (o || (o = {}))[c] = a : Qn(e.emitsOptions, A) || (!(A in s) || a !== s[A]) && (s[A] = a, l = !0);
    }
  if (r) {
    const A = /* @__PURE__ */ U(n), a = o || Q;
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      n[f] = Os(
        i,
        A,
        f,
        a[f],
        e,
        !Z(a, f)
      );
    }
  }
  return l;
}
function Os(e, t, n, s, i, r) {
  const l = e[n];
  if (l != null) {
    const o = Z(l, "default");
    if (o && s === void 0) {
      const A = l.default;
      if (l.type !== Function && !l.skipFactory && H(A)) {
        const { propsDefaults: a } = i;
        if (n in a)
          s = a[n];
        else {
          const c = ti(i);
          s = a[n] = A.call(
            null,
            t
          ), c();
        }
      } else
        s = A;
      i.ce && i.ce._setProp(n, s);
    }
    l[
      0
      /* shouldCast */
    ] && (r && !o ? s = !1 : l[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === It(n)) && (s = !0));
  }
  return s;
}
function _A(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, l = {}, o = [];
  if (!r)
    return X(e) && s.set(e, wt), wt;
  if (B(r))
    for (let a = 0; a < r.length; a++) {
      const c = $e(r[a]);
      zi(c) && (l[c] = Q);
    }
  else if (r)
    for (const a in r) {
      const c = $e(a);
      if (zi(c)) {
        const f = r[a], p = l[c] = B(f) || H(f) ? { type: f } : Ce({}, f), b = p.type;
        let T = !1, v = !0;
        if (B(b))
          for (let k = 0; k < b.length; ++k) {
            const S = b[k], y = H(S) && S.name;
            if (y === "Boolean") {
              T = !0;
              break;
            } else y === "String" && (v = !1);
          }
        else
          T = H(b) && b.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = T, p[
          1
          /* shouldCastTrue */
        ] = v, (T || Z(p, "default")) && o.push(c);
      }
    }
  const A = [l, o];
  return X(e) && s.set(e, A), A;
}
function zi(e) {
  return e[0] !== "$" && !Zt(e);
}
const Xs = (e) => e === "_" || e === "_ctx" || e === "$stable", ei = (e) => B(e) ? e.map(Oe) : [Oe(e)], wA = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ql((...i) => ei(t(...i)), n);
  return s._c = !1, s;
}, qr = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Xs(i)) continue;
    const r = e[i];
    if (H(r))
      t[i] = wA(i, r, s);
    else if (r != null) {
      const l = ei(r);
      t[i] = () => l;
    }
  }
}, Qr = (e, t) => {
  const n = ei(t);
  e.slots.default = () => n;
}, Xr = (e, t, n) => {
  for (const s in t)
    (n || !Xs(s)) && (e[s] = t[s]);
}, kA = (e, t, n) => {
  const s = e.slots = Kr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Xr(s, t, n), n && gr(s, "_", i, !0)) : qr(t, s);
  } else t && Qr(e, t);
}, $A = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, l = Q;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : Xr(i, t, n) : (r = !t.$stable, qr(t, i)), l = t;
  } else t && (Qr(e, t), l = { default: 1 });
  if (r)
    for (const o in i)
      !Xs(o) && l[o] == null && delete i[o];
}, pe = MA;
function SA(e) {
  return zA(e);
}
function zA(e, t) {
  const n = Gn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: l,
    createText: o,
    createComment: A,
    setText: a,
    setElementText: c,
    parentNode: f,
    nextSibling: p,
    setScopeId: b = $t,
    insertStaticContent: T
  } = e, v = (u, d, x, E = null, _ = null, $ = null, P = void 0, I = null, M = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !Ut(u, d) && (E = hn(u), de(u, _, $, !0), u = null), d.patchFlag === -2 && (M = !1, d.dynamicChildren = null), d.dynamicChildren && u && u.dynamicChildren && u.dynamicChildren.hasOnce && (d.dynamicChildren === wt && (d.dynamicChildren = []), d.dynamicChildren.hasOnce = !0);
    const { type: w, ref: D, shapeFlag: F } = d;
    switch (w) {
      case Xn:
        k(u, d, x, E);
        break;
      case qe:
        S(u, d, x, E);
        break;
      case xs:
        u == null && y(d, x, E, P);
        break;
      case G:
        te(
          u,
          d,
          x,
          E,
          _,
          $,
          P,
          I,
          M
        );
        break;
      default:
        F & 1 ? J(
          u,
          d,
          x,
          E,
          _,
          $,
          P,
          I,
          M
        ) : F & 6 ? Dt(
          u,
          d,
          x,
          E,
          _,
          $,
          P,
          I,
          M
        ) : (F & 64 || F & 128) && w.process(
          u,
          d,
          x,
          E,
          _,
          $,
          P,
          I,
          M,
          Bt
        );
    }
    D != null && _ ? Qt(D, u && u.ref, $, d || u, !d) : D == null && u && u.ref != null && Qt(u.ref, null, $, u, !0);
  }, k = (u, d, x, E) => {
    if (u == null)
      s(
        d.el = o(d.children),
        x,
        E
      );
    else {
      const _ = d.el = u.el;
      d.children !== u.children && a(_, d.children);
    }
  }, S = (u, d, x, E) => {
    u == null ? s(
      d.el = A(d.children || ""),
      x,
      E
    ) : d.el = u.el;
  }, y = (u, d, x, E) => {
    [u.el, u.anchor] = T(
      u.children,
      d,
      x,
      E,
      u.el,
      u.anchor
    );
  }, g = ({ el: u, anchor: d }, x, E) => {
    let _;
    for (; u && u !== d; )
      _ = p(u), s(u, x, E), u = _;
    s(d, x, E);
  }, z = ({ el: u, anchor: d }) => {
    let x;
    for (; u && u !== d; )
      x = p(u), i(u), u = x;
    i(d);
  }, J = (u, d, x, E, _, $, P, I, M) => {
    if (d.type === "svg" ? P = "svg" : d.type === "math" && (P = "mathml"), u == null)
      ee(
        d,
        x,
        E,
        _,
        $,
        P,
        I,
        M
      );
    else {
      const w = u.el && u.el._isVueCE ? u.el : null;
      try {
        w && w._beginPatch(), Ge(
          u,
          d,
          _,
          $,
          P,
          I,
          M
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, ee = (u, d, x, E, _, $, P, I) => {
    let M, w;
    const { props: D, shapeFlag: F, transition: j, dirs: L } = u;
    if (M = u.el = l(
      u.type,
      $,
      D && D.is,
      D
    ), F & 8 ? c(M, u.children) : F & 16 && ge(
      u.children,
      M,
      null,
      E,
      _,
      gs(u, $),
      P,
      I
    ), L && bt(u, null, E, "created"), me(M, u, u.scopeId, P, E), D) {
      for (const K in D)
        K !== "value" && !Zt(K) && r(M, K, null, D[K], $, E);
      "value" in D && r(M, "value", null, D.value, $), (w = D.onVnodeBeforeMount) && Pe(w, E, u);
    }
    L && bt(u, null, E, "beforeMount");
    const W = EA(_, j);
    W && j.beforeEnter(M), s(M, d, x), ((w = D && D.onVnodeMounted) || W || L) && pe(() => {
      try {
        w && Pe(w, E, u), W && j.enter(M), L && bt(u, null, E, "mounted");
      } finally {
      }
    }, _);
  }, me = (u, d, x, E, _) => {
    if (x && b(u, x), E)
      for (let $ = 0; $ < E.length; $++)
        b(u, E[$]);
    if (_) {
      let $ = _.subTree;
      if (d === $ || so($.type) && ($.ssContent === d || $.ssFallback === d)) {
        const P = _.vnode;
        me(
          u,
          P,
          P.scopeId,
          P.slotScopeIds,
          _.parent
        );
      }
    }
  }, ge = (u, d, x, E, _, $, P, I, M = 0) => {
    for (let w = M; w < u.length; w++) {
      const D = u[w] = I ? Ke(u[w]) : Oe(u[w]);
      v(
        null,
        D,
        d,
        x,
        E,
        _,
        $,
        P,
        I
      );
    }
  }, Ge = (u, d, x, E, _, $, P) => {
    const I = d.el = u.el;
    let { patchFlag: M, dynamicChildren: w, dirs: D } = d;
    M |= u.patchFlag & 16;
    const F = u.props || Q, j = d.props || Q;
    let L;
    if (x && yt(x, !1), (L = j.onVnodeBeforeUpdate) && Pe(L, x, d, u), D && bt(d, u, x, "beforeUpdate"), x && yt(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    w && (!u.dynamicChildren || u.dynamicChildren.length !== w.length) && (M = 0, P = !1, w = null), (F.innerHTML && j.innerHTML == null || F.textContent && j.textContent == null) && c(I, ""), w ? dt(
      u.dynamicChildren,
      w,
      I,
      x,
      E,
      gs(d, _),
      $
    ) : P || Tt(
      u,
      d,
      I,
      null,
      x,
      E,
      gs(d, _),
      $,
      !1
    ), M > 0) {
      if (M & 16)
        pt(I, F, j, x, _);
      else if (M & 2 && F.class !== j.class && r(I, "class", null, j.class, _), M & 4 && r(I, "style", F.style, j.style, _), M & 8) {
        const W = d.dynamicProps;
        for (let K = 0; K < W.length; K++) {
          const Y = W[K], se = F[Y], oe = j[Y];
          (oe !== se || Y === "value") && r(I, Y, se, oe, _, x);
        }
      }
      M & 1 && u.children !== d.children && c(I, d.children);
    } else !P && w == null && pt(I, F, j, x, _);
    ((L = j.onVnodeUpdated) || D) && pe(() => {
      L && Pe(L, x, d, u), D && bt(d, u, x, "updated");
    }, E);
  }, dt = (u, d, x, E, _, $, P) => {
    for (let I = 0; I < d.length; I++) {
      const M = u[I], w = d[I], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === G || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ut(M, w) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 198) ? f(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      v(
        M,
        w,
        D,
        null,
        E,
        _,
        $,
        P,
        !0
      );
    }
  }, pt = (u, d, x, E, _) => {
    if (d !== x) {
      if (d !== Q)
        for (const $ in d)
          !Zt($) && !($ in x) && r(
            u,
            $,
            d[$],
            null,
            _,
            E
          );
      for (const $ in x) {
        if (Zt($)) continue;
        const P = x[$], I = d[$];
        P !== I && $ !== "value" && r(u, $, I, P, _, E);
      }
      "value" in x && r(u, "value", d.value, x.value, _);
    }
  }, te = (u, d, x, E, _, $, P, I, M) => {
    const w = d.el = u ? u.el : o(""), D = d.anchor = u ? u.anchor : o("");
    let { patchFlag: F, dynamicChildren: j, slotScopeIds: L } = d;
    L && (I = I ? I.concat(L) : L), u == null ? (s(w, x, E), s(D, x, E), ge(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      x,
      D,
      _,
      $,
      P,
      I,
      M
    )) : F > 0 && F & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === j.length ? (dt(
      u.dynamicChildren,
      j,
      x,
      _,
      $,
      P,
      I
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || _ && d === _.subTree) && eo(
      u,
      d,
      !0
      /* shallow */
    )) : Tt(
      u,
      d,
      x,
      D,
      _,
      $,
      P,
      I,
      M
    );
  }, Dt = (u, d, x, E, _, $, P, I, M) => {
    d.slotScopeIds = I, u == null ? d.shapeFlag & 512 ? _.ctx.activate(
      d,
      x,
      E,
      P,
      M
    ) : ce(
      d,
      x,
      E,
      _,
      $,
      P,
      M
    ) : ht(u, d, M);
  }, ce = (u, d, x, E, _, $, P) => {
    const I = u.component = RA(
      u,
      E,
      _
    );
    if (Wr(u) && (I.ctx.renderer = Bt), jA(I, !1, P), I.asyncDep) {
      if (_ && _.registerDep(I, mt, P), !u.el) {
        const M = I.subTree = De(qe);
        S(null, M, d, x), u.placeholder = M.el;
      }
    } else
      mt(
        I,
        u,
        d,
        x,
        _,
        $,
        P
      );
  }, ht = (u, d, x) => {
    const E = d.component = u.component;
    if (xA(u, d, x))
      if (E.asyncDep && !E.asyncResolved) {
        d.el = u.el, gt(E, d, x);
        return;
      } else
        E.next = d, E.update();
    else
      d.el = u.el, E.vnode = d;
  }, mt = (u, d, x, E, _, $, P) => {
    const I = () => {
      if (u.isMounted) {
        let { next: F, bu: j, u: L, parent: W, vnode: K } = u;
        {
          const Ie = to(u);
          if (Ie) {
            F && (F.el = K.el, gt(u, F, P)), Ie.asyncDep.then(() => {
              pe(() => {
                u.isUnmounted || w();
              }, _);
            });
            return;
          }
        }
        let Y = F, se;
        yt(u, !1), F ? (F.el = K.el, gt(u, F, P)) : F = K, j && _n(j), (se = F.props && F.props.onVnodeBeforeUpdate) && Pe(se, W, F, K), yt(u, !0);
        const oe = $i(u), Me = u.subTree;
        u.subTree = oe, v(
          Me,
          oe,
          // parent may have changed if it's in a teleport
          f(Me.el),
          // anchor may have changed if it's in a fragment
          hn(Me),
          u,
          _,
          $
        ), F.el = oe.el, Y === null && bA(u, oe.el), L && pe(L, _), (se = F.props && F.props.onVnodeUpdated) && pe(
          () => Pe(se, W, F, K),
          _
        );
      } else {
        let F;
        const { el: j, props: L } = d, { bm: W, m: K, parent: Y, root: se, type: oe } = u, Me = Xt(d);
        yt(u, !1), W && _n(W), !Me && (F = L && L.onVnodeBeforeMount) && Pe(F, Y, d), yt(u, !0);
        {
          se.ce && se.ce._hasShadowRoot() && se.ce._injectChildStyle(
            oe,
            u.parent ? u.parent.type : void 0
          );
          const Ie = u.subTree = $i(u);
          v(
            null,
            Ie,
            x,
            E,
            u,
            _,
            $
          ), d.el = Ie.el;
        }
        if (K && pe(K, _), !Me && (F = L && L.onVnodeMounted)) {
          const Ie = d;
          pe(
            () => Pe(F, Y, Ie),
            _
          );
        }
        (d.shapeFlag & 256 || Y && Xt(Y.vnode) && Y.vnode.shapeFlag & 256) && u.a && pe(u.a, _), u.isMounted = !0, d = x = E = null;
      }
    };
    u.scope.on();
    const M = u.effect = new vr(I);
    u.scope.off();
    const w = u.update = M.run.bind(M), D = u.job = M.runIfDirty.bind(M);
    D.i = u, D.id = u.uid, M.scheduler = () => qs(D), yt(u, !0), w();
  }, gt = (u, d, x) => {
    d.component = u;
    const E = u.vnode.props;
    u.vnode = d, u.next = null, vA(u, d.props, E, x), $A(u, d.children, x), ot(), _i(u), lt();
  }, Tt = (u, d, x, E, _, $, P, I, M = !1) => {
    const w = u && u.children, D = u ? u.shapeFlag : 0, F = d.children, { patchFlag: j, shapeFlag: L } = d;
    if (j > 0) {
      if (j & 128) {
        ye(
          w,
          F,
          x,
          E,
          _,
          $,
          P,
          I,
          M
        );
        return;
      } else if (j & 256) {
        pn(
          w,
          F,
          x,
          E,
          _,
          $,
          P,
          I,
          M
        );
        return;
      }
    }
    L & 8 ? (D & 16 && Lt(w, _, $), F !== w && c(x, F)) : D & 16 ? L & 16 ? ye(
      w,
      F,
      x,
      E,
      _,
      $,
      P,
      I,
      M
    ) : Lt(w, _, $, !0) : (D & 8 && c(x, ""), L & 16 && ge(
      F,
      x,
      E,
      _,
      $,
      P,
      I,
      M
    ));
  }, pn = (u, d, x, E, _, $, P, I, M) => {
    u = u || wt, d = d || wt;
    const w = u.length, D = d.length, F = Math.min(w, D);
    let j;
    for (j = 0; j < F; j++) {
      const L = d[j] = M ? Ke(d[j]) : Oe(d[j]);
      v(
        u[j],
        L,
        x,
        null,
        _,
        $,
        P,
        I,
        M
      );
    }
    w > D ? Lt(
      u,
      _,
      $,
      !0,
      !1,
      F
    ) : ge(
      d,
      x,
      E,
      _,
      $,
      P,
      I,
      M,
      F
    );
  }, ye = (u, d, x, E, _, $, P, I, M) => {
    let w = 0;
    const D = d.length;
    let F = u.length - 1, j = D - 1;
    for (; w <= F && w <= j; ) {
      const L = u[w], W = d[w] = M ? Ke(d[w]) : Oe(d[w]);
      if (Ut(L, W))
        v(
          L,
          W,
          x,
          null,
          _,
          $,
          P,
          I,
          M
        );
      else
        break;
      w++;
    }
    for (; w <= F && w <= j; ) {
      const L = u[F], W = d[j] = M ? Ke(d[j]) : Oe(d[j]);
      if (Ut(L, W))
        v(
          L,
          W,
          x,
          null,
          _,
          $,
          P,
          I,
          M
        );
      else
        break;
      F--, j--;
    }
    if (w > F) {
      if (w <= j) {
        const L = j + 1, W = L < D ? d[L].el : E;
        for (; w <= j; )
          v(
            null,
            d[w] = M ? Ke(d[w]) : Oe(d[w]),
            x,
            W,
            _,
            $,
            P,
            I,
            M
          ), w++;
      }
    } else if (w > j)
      for (; w <= F; )
        de(u[w], _, $, !0), w++;
    else {
      const L = w, W = w, K = /* @__PURE__ */ new Map();
      for (w = W; w <= j; w++) {
        const xe = d[w] = M ? Ke(d[w]) : Oe(d[w]);
        xe.key != null && K.set(xe.key, w);
      }
      let Y, se = 0;
      const oe = j - W + 1;
      let Me = !1, Ie = 0;
      const Vt = new Array(oe);
      for (w = 0; w < oe; w++) Vt[w] = 0;
      for (w = L; w <= F; w++) {
        const xe = u[w];
        if (se >= oe) {
          de(xe, _, $, !0);
          continue;
        }
        let Te;
        if (xe.key != null)
          Te = K.get(xe.key);
        else
          for (Y = W; Y <= j; Y++)
            if (Vt[Y - W] === 0 && Ut(xe, d[Y])) {
              Te = Y;
              break;
            }
        Te === void 0 ? de(xe, _, $, !0) : (Vt[Te - W] = w + 1, Te >= Ie ? Ie = Te : Me = !0, v(
          xe,
          d[Te],
          x,
          null,
          _,
          $,
          P,
          I,
          M
        ), se++);
      }
      const di = Me ? CA(Vt) : wt;
      for (Y = di.length - 1, w = oe - 1; w >= 0; w--) {
        const xe = W + w, Te = d[xe], pi = d[xe + 1], hi = xe + 1 < D ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          pi.el || no(pi)
        ) : E;
        Vt[w] === 0 ? v(
          null,
          Te,
          x,
          hi,
          _,
          $,
          P,
          I,
          M
        ) : Me && (Y < 0 || w !== di[Y] ? xt(Te, x, hi, 2) : Y--);
      }
    }
  }, xt = (u, d, x, E, _ = null) => {
    const { el: $, type: P, transition: I, children: M, shapeFlag: w } = u;
    if (w & 6) {
      xt(u.component.subTree, d, x, E);
      return;
    }
    if (w & 128) {
      u.suspense.move(d, x, E);
      return;
    }
    if (w & 64) {
      P.move(u, d, x, Bt);
      return;
    }
    if (P === G) {
      s($, d, x);
      for (let F = 0; F < M.length; F++)
        xt(M[F], d, x, E);
      s(u.anchor, d, x);
      return;
    }
    if (P === xs) {
      g(u, d, x);
      return;
    }
    if (E !== 2 && w & 1 && I)
      if (E === 0)
        I.persisted && !$[hs] ? s($, d, x) : (I.beforeEnter($), s($, d, x), pe(() => I.enter($), _));
      else {
        const { leave: F, delayLeave: j, afterLeave: L } = I, W = () => {
          u.ctx.isUnmounted ? i($) : s($, d, x);
        }, K = () => {
          const Y = $._isLeaving || !!$[hs];
          $._isLeaving && $[hs](
            !0
            /* cancelled */
          ), I.persisted && !Y ? W() : F($, () => {
            W(), L && L();
          });
        };
        j ? j($, W, K) : K();
      }
    else
      s($, d, x);
  }, de = (u, d, x, E = !1, _ = !1) => {
    const {
      type: $,
      props: P,
      ref: I,
      children: M,
      dynamicChildren: w,
      shapeFlag: D,
      patchFlag: F,
      dirs: j,
      cacheIndex: L,
      memo: W
    } = u;
    if ((F === -2 || w && w.hasOnce) && (_ = !1), I != null && (ot(), Qt(I, null, x, u, !0), lt()), L != null && (!u.ctx || u.ctx === d) && (d.renderCache[L] = void 0), D & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const K = D & 1 && j, Y = !Xt(u);
    let se;
    if (Y && (se = P && P.onVnodeBeforeUnmount) && Pe(se, d, u), D & 6)
      ll(u.component, x, E);
    else {
      if (D & 128) {
        u.suspense.unmount(x, E);
        return;
      }
      K && bt(u, null, d, "beforeUnmount"), D & 64 ? u.type.remove(
        u,
        d,
        x,
        Bt,
        E
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($ !== G || F > 0 && F & 64) ? Lt(
        w,
        d,
        x,
        !1,
        !0
      ) : ($ === G && F & 384 || !_ && D & 16) && Lt(M, d, x), E && ui(u);
    }
    const oe = W != null && L == null;
    (Y && (se = P && P.onVnodeUnmounted) || K || oe) && pe(() => {
      se && Pe(se, d, u), K && bt(u, null, d, "unmounted"), oe && (u.el = null);
    }, x);
  }, ui = (u) => {
    const { type: d, el: x, anchor: E, transition: _ } = u;
    if (d === G) {
      ol(x, E);
      return;
    }
    if (d === xs) {
      z(u), _ && !_.persisted && _.afterLeave && _.afterLeave();
      return;
    }
    const $ = () => {
      i(x), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (u.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: P, delayLeave: I } = _, M = () => P(x, $);
      I ? I(u.el, $, M) : M();
    } else
      $();
  }, ol = (u, d) => {
    let x;
    for (; u !== d; )
      x = p(u), i(u), u = x;
    i(d);
  }, ll = (u, d, x) => {
    const { bum: E, scope: _, job: $, subTree: P, um: I, m: M, a: w } = u;
    Ei(M), Ei(w), E && _n(E), _.stop(), $ ? ($.flags |= 8, de(P, u, d, x)) : u.vnode.el && P && (P.transition = u.vnode.transition, de(P, u, d, x)), I && pe(I, d), pe(() => {
      u.isUnmounted = !0;
    }, d);
  }, Lt = (u, d, x, E = !1, _ = !1, $ = 0) => {
    for (let P = $; P < u.length; P++)
      de(u[P], d, x, E, _);
  }, hn = (u) => {
    if (u.shapeFlag & 6)
      return hn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = p(u.anchor || u.el), x = d && d[sA];
    return x ? p(x) : d;
  };
  let as = !1;
  const fi = (u, d, x) => {
    let E;
    u == null ? d._vnode && (de(d._vnode, null, null, !0), E = d._vnode.component) : v(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      x
    ), d._vnode = u, as || (as = !0, _i(E), Dr(), as = !1);
  }, Bt = {
    p: v,
    um: de,
    m: xt,
    r: ui,
    mt: ce,
    mc: ge,
    pc: Tt,
    pbc: dt,
    n: hn,
    o: e
  };
  return {
    render: fi,
    hydrate: void 0,
    createApp: fA(fi)
  };
}
function gs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function yt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function EA(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function eo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (B(s) && B(i))
    for (let r = 0; r < s.length; r++) {
      const l = s[r];
      let o = i[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[r] = Ke(i[r]), o.el = l.el), !n && o.patchFlag !== -2 && eo(l, o)), o.type === Xn && (o.patchFlag === -1 && (o = i[r] = Ke(o)), o.el = l.el), o.type === qe && !o.el && (o.el = l.el);
    }
}
function CA(e) {
  const t = e.slice(), n = [0];
  let s, i, r, l, o;
  const A = e.length;
  for (s = 0; s < A; s++) {
    const a = e[s];
    if (a !== 0) {
      if (i = n[n.length - 1], e[i] < a) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, l = n.length - 1; r < l; )
        o = r + l >> 1, e[n[o]] < a ? r = o + 1 : l = o;
      a < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, l = n[r - 1]; r-- > 0; )
    n[r] = l, l = t[l];
  return n;
}
function to(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : to(t);
}
function Ei(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function no(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? no(t.subTree) : null;
}
const so = (e) => e.__isSuspense;
function MA(e, t) {
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : ql(e);
}
const G = /* @__PURE__ */ Symbol.for("v-fgt"), Xn = /* @__PURE__ */ Symbol.for("v-txt"), qe = /* @__PURE__ */ Symbol.for("v-cmt"), xs = /* @__PURE__ */ Symbol.for("v-stc"), zt = [];
let be = null;
function C(e = !1) {
  zt.push(be = e ? null : []);
}
function io() {
  zt.pop(), be = zt[zt.length - 1] || null;
}
let on = 1;
function Ci(e, t = !1) {
  on += e, e < 0 && be && t && (be.hasOnce = !0);
}
function ro(e) {
  return e.dynamicChildren = on > 0 ? be || wt : null, io(), on > 0 && be && be.push(e), e;
}
function N(e, t, n, s, i, r) {
  return ro(
    h(
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
function st(e, t, n, s, i) {
  return ro(
    De(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function oo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ut(e, t) {
  return e.type === t.type && e.key === t.key;
}
const lo = ({ key: e }) => e ?? null, kn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || /* @__PURE__ */ fe(e) || H(e) ? { i: ve, r: e, k: t, f: !!n } : e : null);
function h(e, t = null, n = null, s = 0, i = null, r = e === G ? 0 : 1, l = !1, o = !1) {
  const A = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && lo(t),
    ref: t && kn(t),
    scopeId: Br,
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
    ctx: ve
  };
  return o ? (Tn(A, n), r & 128 && e.normalize(A)) : n && (A.shapeFlag |= ie(n) ? 8 : 16), on > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  be && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (A.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  A.patchFlag !== 32 && be.push(A), A;
}
const De = IA;
function IA(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === aA) && (e = qe), oo(e)) {
    const o = jt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Tn(o, n), on > 0 && !r && be && (o.shapeFlag & 6 ? be[be.indexOf(e)] = o : be.push(o)), o.patchFlag = -2, o;
  }
  if (VA(e) && (e = e.__vccOpts), t) {
    t = TA(t);
    let { class: o, style: A } = t;
    o && !ie(o) && (t.class = ct(o)), X(A) && (/* @__PURE__ */ Js(A) && !B(A) && (A = Ce({}, A)), t.style = Yn(A));
  }
  const l = ie(e) ? 1 : so(e) ? 128 : qn(e) ? 64 : X(e) ? 4 : H(e) ? 2 : 0;
  return h(
    e,
    t,
    n,
    s,
    i,
    l,
    r,
    !0
  );
}
function TA(e) {
  return e ? /* @__PURE__ */ Js(e) || Zr(e) ? Ce({}, e) : e : null;
}
function jt(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: l, children: o, transition: A } = e, a = t ? PA(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && lo(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? B(r) ? r.concat(kn(t)) : [r, kn(t)] : kn(t)
    ) : r,
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
    patchFlag: t && e.type !== G ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && jt(e.ssContent),
    ssFallback: e.ssFallback && jt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return A && s && Qs(
    c,
    A.clone(c)
  ), c;
}
function Re(e = " ", t = 0) {
  return De(Xn, null, e, t);
}
function V(e = "", t = !1) {
  return t ? (C(), st(qe, null, e)) : De(qe, null, e);
}
function Oe(e) {
  return e == null || typeof e == "boolean" ? De(qe) : B(e) ? De(
    G,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : oo(e) ? Ke(e) : De(Xn, null, String(e));
}
function Ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : jt(e);
}
function Tn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (B(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Tn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Zr(t) ? t._ctx = ve : i === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (H(t)) {
    if (s & 65) {
      Tn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ve }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Re(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function PA(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = ct([t.class, s.class]));
      else if (i === "style")
        t.style = Yn([t.style, s.style]);
      else if (Bn(i)) {
        const r = t[i], l = s[i];
        l && r !== l && !(B(r) && r.includes(l)) ? t[i] = r ? [].concat(r, l) : l : l == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Vn(i) && (t[i] = l);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Pe(e, t, n, s = null) {
  Ve(e, t, 7, [
    n,
    s
  ]);
}
const NA = Gr();
let FA = 0;
function RA(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || NA, r = {
    uid: FA++,
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
    scope: new vl(
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
    propsOptions: _A(s, i),
    emitsOptions: hA(s, i),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = pA.bind(null, r), e.ce && e.ce(r), r;
}
let at = null;
const OA = () => at || ve;
let Pn, ln;
{
  const e = Gn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((l) => l(r)) : i[0](r);
    };
  };
  Pn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => at = n
  ), ln = t(
    "__VUE_SSR_SETTERS__",
    (n) => An = n
  );
}
const ti = (e) => {
  const t = at;
  return Pn(e), e.scope.on(), () => {
    e.scope.off(), Pn(t);
  };
}, Mi = () => {
  at && at.scope.off(), Pn(null);
};
function Ao(e) {
  return e.vnode.shapeFlag & 4;
}
let An = !1;
function jA(e, t = !1, n = !1) {
  t && ln(t);
  const { props: s, children: i } = e.vnode, r = Ao(e);
  yA(e, s, r, t), kA(e, i, n || t);
  const l = r ? DA(e, t) : void 0;
  return t && ln(!1), l;
}
function DA(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, cA);
  const { setup: s } = n;
  if (s) {
    ot();
    const i = e.setupContext = s.length > 1 ? BA(e) : null, r = ti(e), l = fn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), o = dr(l);
    if (lt(), r(), (o || e.sp) && !Xt(e) && rA(e), o) {
      if (l.then(Mi, Mi), t)
        return l.then((A) => {
          ln(!0);
          try {
            Ii(e, A, t);
          } finally {
            ln(!1);
          }
        }).catch((A) => {
          Zn(A, e, 0);
        });
      e.asyncDep = l;
    } else
      Ii(e, l);
  } else
    ao(e);
}
function Ii(e, t, n) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) && (e.setupState = Fr(t)), ao(e);
}
function ao(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || $t);
}
const LA = {
  get(e, t) {
    return ae(e, "get", ""), e[t];
  }
};
function BA(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, LA),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function es(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Fr(Bl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in en)
        return en[n](e);
    },
    has(t, n) {
      return n in t || n in en;
    }
  })) : e.proxy;
}
function VA(e) {
  return H(e) && "__vccOpts" in e;
}
const ne = (e, t) => /* @__PURE__ */ Yl(e, t, An), WA = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let js;
const Ti = typeof window < "u" && window.trustedTypes;
if (Ti)
  try {
    js = /* @__PURE__ */ Ti.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const co = js ? (e) => js.createHTML(e) : (e) => e, UA = "http://www.w3.org/2000/svg", GA = "http://www.w3.org/1998/Math/MathML", He = typeof document < "u" ? document : null, Pi = He && /* @__PURE__ */ He.createElement("template"), YA = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? He.createElementNS(UA, e) : t === "mathml" ? He.createElementNS(GA, e) : n ? He.createElement(e, { is: n }) : He.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => He.createTextNode(e),
  createComment: (e) => He.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => He.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, r) {
    const l = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      Pi.innerHTML = co(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Pi.content;
      if (s === "svg" || s === "mathml") {
        const A = o.firstChild;
        for (; A.firstChild; )
          o.appendChild(A.firstChild);
        o.removeChild(A);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, HA = /* @__PURE__ */ Symbol("_vtc");
function KA(e, t, n) {
  const s = e[HA];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ni = /* @__PURE__ */ Symbol("_vod"), ZA = /* @__PURE__ */ Symbol("_vsh"), JA = /* @__PURE__ */ Symbol(""), qA = /(?:^|;)\s*display\s*:/;
function QA(e, t, n) {
  const s = e.style, i = ie(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (ie(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          n[o] == null && Yt(s, o, "");
        }
      else
        for (const l in t)
          n[l] == null && Yt(s, l, "");
    for (const l in n) {
      l === "display" && (r = !0);
      const o = n[l];
      o != null ? ea(
        e,
        l,
        !ie(t) && t ? t[l] : void 0,
        o
      ) || Yt(s, l, o) : Yt(s, l, "");
    }
  } else if (i) {
    if (t !== n) {
      const l = s[JA];
      l && (n += ";" + l), s.cssText = n, r = qA.test(n);
    }
  } else t && e.removeAttribute("style");
  Ni in e && (e[Ni] = r ? s.display : "", e[ZA] && (s.display = "none"));
}
const bn = /\s*!important$/;
function Yt(e, t, n) {
  if (B(n))
    n.forEach((s) => Yt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    bn.test(n) ? e.setProperty(t, n.replace(bn, ""), "important") : e.setProperty(t, n);
  else {
    const s = XA(e, t);
    bn.test(n) ? e.setProperty(
      It(s),
      n.replace(bn, ""),
      "important"
    ) : e[s] = n;
  }
}
const Fi = ["Webkit", "Moz", "ms"], bs = {};
function XA(e, t) {
  const n = bs[t];
  if (n)
    return n;
  let s = $e(t);
  if (s !== "filter" && s in e)
    return bs[t] = s;
  s = mr(s);
  for (let i = 0; i < Fi.length; i++) {
    const r = Fi[i] + s;
    if (r in e)
      return bs[t] = r;
  }
  return t;
}
function ea(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ie(s) && n === s;
}
const Ri = "http://www.w3.org/1999/xlink";
function Oi(e, t, n, s, i, r = gl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ri, t.slice(6, t.length)) : e.setAttributeNS(Ri, t, n) : n == null || r && !xr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Le(n) ? String(n) : n
  );
}
function ji(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? co(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const o = r === "OPTION" ? e.getAttribute("value") || "" : e.value, A = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== A || !("_value" in e)) && (e.value = A), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = xr(n) : n == null && o === "string" ? (n = "", l = !0) : o === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(i || t);
}
function _t(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ta(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Di = /* @__PURE__ */ Symbol("_vei");
function na(e, t, n, s, i = null) {
  const r = e[Di] || (e[Di] = {}), l = r[t];
  if (s && l)
    l.value = s;
  else {
    const [o, A] = ra(t);
    if (s) {
      const a = r[t] = Aa(
        s,
        i
      );
      _t(e, o, a, A);
    } else l && (ta(e, o, l, A), r[t] = void 0);
  }
}
const sa = /(Once|Passive|Capture)$/, ia = /^on:?(?:Once|Passive|Capture)$/;
function ra(e) {
  let t, n;
  for (; (n = e.match(sa)) && !ia.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : It(e.slice(2)), t];
}
let ys = 0;
const oa = /* @__PURE__ */ Promise.resolve(), la = () => ys || (oa.then(() => ys = 0), ys = Date.now());
function Aa(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (B(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        r.call(s), s._stopped = !0;
      };
      const l = i.slice(), o = [s];
      for (let A = 0; A < l.length && !s._stopped; A++) {
        const a = l[A];
        a && Ve(
          a,
          t,
          5,
          o
        );
      }
    } else
      Ve(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = la(), n;
}
const Li = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, aa = (e, t, n, s, i, r) => {
  const l = i === "svg";
  t === "class" ? KA(e, s, l) : t === "style" ? QA(e, n, s) : Bn(t) ? Vn(t) || na(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ca(e, t, s, l)) ? (ji(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Oi(e, t, s, l, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ua(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ie(s))) ? ji(e, $e(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Oi(e, t, s, l));
};
function ca(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Li(t) && H(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Li(t) && ie(n) ? !1 : t in e;
}
function ua(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = $e(t);
  return Array.isArray(n) ? n.some((i) => $e(i) === s) : Object.keys(n).some((i) => $e(i) === s);
}
const Nn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (n) => _n(t, n) : t;
};
function fa(e) {
  e.target.composing = !0;
}
function Bi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const kt = /* @__PURE__ */ Symbol("_assign"), yn = /* @__PURE__ */ Symbol("_initialValue");
function vs(e, t, n) {
  return t && (e = e.trim()), n && (e = Un(e)), e;
}
const Vi = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[yn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[yn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[kt] = Nn(i);
    const r = s || i.props && i.props.type === "number";
    _t(e, t ? "change" : "input", (l) => {
      l.target.composing || e[kt](vs(e.value, n, r));
    }), (n || r) && _t(e, "change", () => {
      e.value = vs(e.value, n, r);
    }), t || (_t(e, "compositionstart", fa), _t(e, "compositionend", Bi), _t(e, "change", Bi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", r = e[yn];
    delete e[yn], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[kt](vs(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, l) {
    if (e[kt] = Nn(l), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? Un(e.value) : e.value, A = t ?? "";
    if (o === A)
      return;
    const a = e.getRootNode();
    (a instanceof Document || a instanceof ShadowRoot) && a.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === A) || (e.value = A);
  }
}, uo = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, _t(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (A) => A.selected).map(
        (A) => n ? Un(Fn(A)) : Fn(A)
      ), r = e.multiple, l = r ? Et(e._modelValue) ? new Set(i) : i : i[0], o = e._pendingValue = [
        r,
        r ? B(l) ? i.slice() : i : l
      ];
      try {
        e[kt](l);
      } finally {
        Or(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[kt] = Nn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Wi(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[kt] = Nn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !da(t, n[1], n[0])) && Wi(e, t);
  }
};
function da(e, t, n) {
  if (!n || B(e)) return rt(e, t);
  if (Et(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Wi(e, t) {
  const n = e.multiple, s = B(t);
  if (!(n && !s && !Et(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const l = e.options[i], o = Fn(l);
      if (n)
        if (s) {
          const A = typeof o;
          A === "string" || A === "number" ? l.selected = t.some((a) => String(a) === String(o)) : l.selected = yl(t, o) > -1;
        } else
          l.selected = t.has(o);
      else if (rt(Fn(l), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Fn(e) {
  return "_value" in e ? e._value : e.value;
}
const pa = ["ctrl", "shift", "alt", "meta"], ha = {
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
  exact: (e, t) => pa.some((n) => e[`${n}Key`] && !t.includes(n))
}, ma = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((i, ...r) => {
    for (let l = 0; l < t.length; l++) {
      const o = ha[t[l]];
      if (o && o(i, t)) return;
    }
    return e(i, ...r);
  }));
}, ga = /* @__PURE__ */ Ce({ patchProp: aa }, YA);
let Ui;
function xa() {
  return Ui || (Ui = SA(ga));
}
const ba = ((...e) => {
  const t = xa().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = va(s);
    if (!i) return;
    const r = t._component;
    !H(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const l = n(i, !1, ya(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), l;
  }, t;
});
function ya(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function va(e) {
  return ie(e) ? document.querySelector(e) : e;
}
const _a = "zhonglou", wa = "钟楼", ka = "1.3.0", $a = "S", Sa = 10, za = "【副本进行中：钟楼】", Ea = [], Ca = { briefingName: "钟楼" }, Ma = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, Ia = { type: "nights", template: "剩余{n}夜" }, Ta = "至第四日日出", Pa = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], Na = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", Fa = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], Ra = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], Oa = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], ja = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], Da = {
  id: _a,
  name: wa,
  version: ka,
  level: $a,
  players: Sa,
  token: za,
  legacyKeys: Ea,
  detect: Ca,
  time: Ma,
  remaining: Ia,
  deadline: Ta,
  roles: Pa,
  rolesNote: Na,
  stateFields: Fa,
  phases: Ra,
  events: Oa,
  docs: ja
}, La = "jingjie", Ba = "境界游乐园", Va = "1.0.0", Wa = "A", Ua = "【副本进行中：境界游乐园】", Ga = [], Ya = { briefingName: "境界游乐园" }, Ha = { type: "none" }, Ka = { type: "fromPanel" }, Za = [], Ja = [], qa = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], Qa = {
  id: La,
  name: Ba,
  version: Va,
  level: Wa,
  token: Ua,
  legacyKeys: Ga,
  detect: Ya,
  time: Ha,
  remaining: Ka,
  phases: Za,
  events: Ja,
  docs: qa
}, Xa = "kaoshi", ec = "考试", tc = "1.1.0", nc = "A", sc = "【副本进行中：考试】", ic = [], rc = { briefingName: "考试" }, oc = { type: "countdown", minutesPerRound: 3 }, lc = { type: "fromPanel" }, Ac = "至考试结束", ac = [{ id: "main", name: "考试", cap: 100, next: null }], cc = [], uc = [], fc = {
  id: Xa,
  name: ec,
  version: tc,
  level: nc,
  token: sc,
  legacyKeys: ic,
  detect: rc,
  time: oc,
  remaining: lc,
  deadline: Ac,
  phases: ac,
  events: cc,
  docs: uc
}, dc = "xiyan", pc = "喜宴", hc = "1.1.0", mc = "D", gc = "【副本进行中：喜宴】", xc = [], bc = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, yc = { type: "countdown", minutesPerRound: 3 }, vc = { type: "fromPanel" }, _c = "至天亮", wc = [{ id: "main", name: "喜宴", cap: 160, next: null }], kc = [], $c = [], Sc = {
  id: dc,
  name: pc,
  version: hc,
  level: mc,
  token: gc,
  legacyKeys: xc,
  detect: bc,
  time: yc,
  remaining: vc,
  deadline: _c,
  phases: wc,
  events: kc,
  docs: $c
}, zc = "youxi", Ec = "游戏", Cc = "1.1.0", Mc = "C", Ic = "【副本进行中：游戏】", Tc = [], Pc = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Nc = { type: "countdown", minutesPerRound: 8 }, Fc = { type: "fromPanel" }, Rc = "至结算", Oc = [{ id: "main", name: "游戏", cap: 90, next: null }], jc = [], Dc = [], Lc = {
  id: zc,
  name: Ec,
  version: Cc,
  level: Mc,
  token: Ic,
  legacyKeys: Tc,
  detect: Pc,
  time: Nc,
  remaining: Fc,
  deadline: Rc,
  phases: Oc,
  events: jc,
  docs: Dc
}, Bc = "wuming", Vc = "污名", Wc = "1.1.0", Uc = "B", Gc = "4-8", Yc = "【副本进行中：污名】", Hc = ["污名"], Kc = { briefingName: "污名" }, Zc = { type: "countdown", minutesPerRound: 3 }, Jc = { type: "countdown", template: "剩余{m}分钟" }, qc = "至收播", Qc = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], Xc = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], eu = [], tu = !0, nu = {
  id: Bc,
  name: Vc,
  version: Wc,
  level: Uc,
  players: Gc,
  token: Yc,
  legacyKeys: Hc,
  detect: Kc,
  time: Zc,
  remaining: Jc,
  deadline: qc,
  phases: Qc,
  events: Xc,
  docs: eu,
  disableLive: tu
}, su = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function Ft(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const iu = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function Gi(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(iu)) {
    const i = Number(s[1]), r = s[2];
    n = !0, r === "天" ? t += i * 1440 : r === "小时" || r === "个小时" || r === "h" || r === "H" ? t += i * 60 : t += i;
  }
  return n ? Math.round(t) : null;
}
function fo(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: Gi(t), total: n === void 0 ? null : Gi(n) };
}
function ru(e, t) {
  return e.phases.find((n) => n.id === t);
}
function an(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); )
    n.push(i), s.add(i.id), i = ru(e, i.next);
  return n;
}
function po(e, t) {
  return an(e, t).filter((n) => n.night).length;
}
function ou(e, t, n) {
  if (an(e, t).some((i) => i.id === n.id)) return t;
  const s = e.phases[0];
  return s && an(e, s).some((i) => i.id === n.id) ? s : n;
}
function _s(e, t, n, s, i) {
  if (!e.phases.length || !e.phases.some((f) => f.id === t.id)) return;
  let r = an(e, n), l = r.findIndex((f) => f.id === t.id);
  l < 0 && (r = an(e, t), l = 0);
  const o = r.reduce((f, p) => f + Math.max(0, p.cap), 0), A = Math.max(0, t.cap - s) + r.slice(l + 1).reduce((f, p) => f + Math.max(0, p.cap), 0), a = t.deadline ?? r[0].deadline ?? e.deadline, c = { x: A, y: o, deadline: a };
  if (e.time.type === "countdown") {
    const f = e.time.minutesPerRound, p = e.time.totalMinutes, b = p && p > 0 ? p : o * f;
    let T = p && p > 0 && o > 0 ? Math.round(b * A / o) : A * f;
    const v = fo(i).remaining;
    v !== null && (T = Math.min(T, v - f)), T = Math.max(0, T), Object.assign(c, { minutes: T, total: b, text: `约剩${Ft(T)}/${Ft(b)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) c.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const f = e.remaining.template.replace("{n}", String(po(e, t)));
      c.text = a ? `${a}·${f}` : f;
    } else a && (c.text = a);
  return c;
}
const cn = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function ho(e, t, n = cn) {
  const s = e ?? "", i = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), r = i ? Math.max(1, Number(i[1])) : Math.max(1, Math.round(n[t] ?? cn[t])), l = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!l) return { rounds: r };
  const o = Number(l[1]), A = Math.round(l[2] === "天" ? o * 1440 : l[2].includes("小时") ? o * 60 : o);
  return A <= 0 ? { rounds: r } : { rounds: r, totalMinutes: A, minutesPerRound: Math.max(1, Math.round(A / r)) };
}
const Rn = "generic", Ds = [Da, Qa, fc, Sc, Lc, nu], lu = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(su)
  }
};
function Au(e, t) {
  const n = lu[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const mo = ["D", "C", "B", "A", "S"];
function go(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (a) => {
    (typeof n[a] != "string" || !n[a].trim()) && t.push(`缺少字段或不是文本：${a}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Rn && t.push(`id 不能是保留字 ${Rn}`), mo.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((a) => typeof a != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((a) => typeof a != "string")) && t.push("detect.patterns 必须是文本数组");
  const i = n.time;
  !i || !["none", "clock", "countdown"].includes(i.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (i.type === "clock" && (typeof i.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(i.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), i.type !== "none" && (typeof i.minutesPerRound != "number" || i.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), i.type === "countdown" && i.totalMinutes !== void 0 && (typeof i.totalMinutes != "number" || i.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const r = n.remaining;
  !r || !["nights", "countdown", "fromPanel"].includes(r.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : r.type !== "fromPanel" && typeof r.template != "string" && t.push("remaining.template 必须是文本"), r?.type === "countdown" && i?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.stateFields !== void 0 && (Array.isArray(n.stateFields) ? n.stateFields.forEach((a, c) => {
    (!a || typeof a.key != "string" || !a.key || typeof a.label != "string" || typeof a.hint != "string") && t.push(`stateFields[${c}] 需要 key、label、hint 三个文本`);
  }) : t.push("stateFields 必须是数组")), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((a) => typeof a != "string" || !a)) && t.push("roles 必须是文本数组");
  const l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((a, c) => {
    if (!a || typeof a.id != "string" || typeof a.name != "string") {
      t.push(`phases[${c}] 缺少 id 或 name`);
      return;
    }
    l.has(a.id) && t.push(`阶段 id 重复：${a.id}`), o.has(a.name) && t.push(`阶段名称重复：${a.name}`), l.add(a.id), o.add(a.name), (typeof a.cap != "number" || a.cap < 1 || !Number.isInteger(a.cap)) && t.push(`阶段 ${a.id} 的 cap 必须是正整数`), a.next !== null && typeof a.next != "string" && t.push(`阶段 ${a.id} 的 next 必须是阶段 id 或 null`), a.deadline !== void 0 && typeof a.deadline != "string" && t.push(`阶段 ${a.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((a) => {
    a && typeof a.next == "string" && !l.has(a.next) && t.push(`阶段 ${a.id} 的 next 指向不存在的阶段：${a.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const A = /* @__PURE__ */ new Set();
  return Array.isArray(n.events) ? n.events.forEach((a, c) => {
    if (!a || typeof a.id != "string" || typeof a.text != "string") {
      t.push(`events[${c}] 缺少 id 或 text`);
      return;
    }
    A.has(a.id) && t.push(`事件 id 重复：${a.id}`), A.add(a.id), l.has(a.phase) || t.push(`事件 ${a.id} 的 phase 不存在：${a.phase}`), (!Number.isInteger(a.from) || !Number.isInteger(a.to) || a.from < 1 || a.to < a.from) && t.push(`事件 ${a.id} 的轮次区间无效`), a.kind !== "event" && a.kind !== "directive" && t.push(`事件 ${a.id} 的 kind 必须是 event 或 directive`), a.if !== void 0 && typeof a.if != "string" && t.push(`事件 ${a.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((a, c) => {
    !a || typeof a.title != "string" ? t.push(`docs[${c}] 缺少 title`) : a.md !== void 0 && typeof a.md != "string" ? t.push(`docs[${c}].md 必须是文本`) : a.image !== void 0 && typeof a.image != "string" && t.push(`docs[${c}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), t;
}
function xo(e) {
  return mo.includes(e.level ?? "") ? e.level : "D";
}
function bo(e, t = cn) {
  const n = xo(e), s = ho(e.limit, n, t), i = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, r = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / i)) : void 0;
  return {
    id: Rn,
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
function ni(e) {
  const t = new Set(Ds.map((n) => n.id));
  return [...Ds, ...e.filter((n) => !t.has(n.id))];
}
const au = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, cu = /<阶段切换>([\s\S]*?)<\/阶段切换>/, uu = /<副本结算>([\s\S]*?)<\/副本结算>/, yo = /<副本>([\s\S]*?)<\/副本>/, fu = /<角色登记>([\s\S]*?)<\/角色登记>/, du = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/;
function vo(e) {
  const t = au.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (l) => {
    const o = new RegExp(`${l}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return o ? o[1].trim() : void 0;
  }, r = i("等级");
  return r && (n.level = r.replace(/级$/, "").trim().toUpperCase()), n.goal = i("目标"), n.limit = i("时限"), n.players = i("人数"), n;
}
function pu(e) {
  const t = cu.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function _o(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const i = n.slice(0, s).trim(), r = n.slice(s + 1).trim();
    i && (t[i] = r);
  }
  return t;
}
function wo(e) {
  const t = uu.exec(e ?? "");
  if (!t) return null;
  const n = _o(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function ko(e) {
  const t = fu.exec(e ?? "");
  if (!t) return null;
  const n = _o(t[1]);
  return Object.keys(n).length ? n : null;
}
function vn(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function $o(e) {
  const t = yo.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let s = null;
  for (const i of t[1].split(`
`)) {
    const r = i.trim();
    if (!r) continue;
    const l = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(r);
    if (l) {
      const o = l[1].toLowerCase(), A = l[2].trim();
      o === "时限" ? (n.limit = A, s = null) : o === "进度条" ? (n.progressBar = A, s = null) : o === "任务" ? (vn(A) && n.tasks.push(vn(A)), s = "tasks") : (n.ps = A, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(r)) {
      s = null;
      continue;
    }
    s === "tasks" ? vn(r) && n.tasks.push(vn(r)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${r}` : r);
  }
  return n;
}
function hu(e) {
  const t = du.exec(e ?? "");
  return t ? t[2] : null;
}
function ws(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (n(i)) return i;
    s.add(i.id), i = i.next ? e.phases.find((r) => r.id === i.next) : void 0;
  }
  return null;
}
function mu(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((o) => o.id === t.id)) return null;
  const i = (o) => !!o.clock && !o.night;
  let r = null, l = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      r = ws(e, t, i), l = r?.cap ?? 0;
      break;
    case "晚饭":
      r = ws(e, t, i), r && (l = Math.ceil(r.cap * 0.75), r.id === t.id && l <= n && (l = r.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      r = ws(e, t, (o) => !!o.night), l = r?.cap ?? 0;
      break;
  }
  return !r || r.id === t.id && l <= n + 1 ? null : { phase: r.id, round: l, label: `${r.name}第${l}轮` };
}
const gu = /<状态栏>([\s\S]*?)<\/状态栏>/;
function xu(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function ks(e, t) {
  const n = xu(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const $s = /* @__PURE__ */ new Map();
function bu(e, t) {
  const n = `${e}\0${t}`;
  if (!$s.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (i) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, i);
    }
    $s.set(n, s);
  }
  return $s.get(n);
}
function yu(e, t) {
  const n = String(e ?? ""), s = (o, A) => o ? { signal: A, pack: o, info: { name: o.name, level: o.level } } : null, i = vo(n);
  if (i)
    return { signal: 1, pack: t.find((A) => A.detect.briefingName === i.name), info: i };
  const r = yo.exec(n);
  if (r) {
    const o = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(r[1]), A = o && s(ks(t, o[1]), 2);
    if (A) return A;
  }
  for (const o of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const A = s(ks(t, o[1]), 3);
    if (A) return A;
  }
  const l = gu.exec(n);
  if (l) {
    for (const o of l[1].split(`
`))
      if (o.includes("地点"))
        for (const A of o.matchAll(/副本《([^》]+)》/g)) {
          const a = s(ks(t, A[1]), 4);
          if (a) return a;
        }
  }
  for (const o of t)
    for (const A of o.detect.patterns ?? []) {
      const a = bu(o.id, A);
      if (a && a.test(n)) return s(o, 5);
    }
  return null;
}
const Yi = 5, vu = { id: "_open", name: "进行中", cap: 0, next: null };
function We(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function _u(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function So(e, t, n) {
  const s = _u(e) + Math.max(0, n - 1) * t, i = Math.floor(s / 60) % 24, r = (s % 60 + 60) % 60;
  return `${i % 12 === 0 ? 12 : i % 12}:${String(r).padStart(2, "0")}`;
}
function Hi(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return So(e.time.dayStart, e.time.minutesPerRound, n);
}
function zo(e) {
  return e.phases.length ? e.phases : [vu];
}
function $n(e, t) {
  return zo(e).find((n) => n.id === t);
}
function Ki(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (i.id === n) return !0;
    s.add(i.id), i = $n(e, i.next);
  }
  return !1;
}
function Zi(e, t, n, s) {
  const i = n + 1, r = e.events.filter((l) => l.phase === t.id);
  if (s) {
    const l = t.id === s.phase ? s.round : t.cap;
    if (l > i) {
      let o = r.map((a, c) => ({ e: a, i: c })).filter(({ e: a }) => a.from >= i && a.from <= l).sort((a, c) => a.e.from - c.e.from || a.i - c.i).map(({ e: a }) => a), A = l;
      return o.length > Yi && (A = o[Yi - 1].from, o = o.filter((a) => a.from <= A)), { phase: t, round: A, events: o, skipFrom: i };
    }
  }
  return { phase: t, round: i, events: r.filter((l) => l.from === i) };
}
function wu(e, t, n) {
  const s = t.entryIndex;
  if (!We(e[s])) return null;
  const i = zo(n);
  let r = i[0], l = i[0], o = 0, A, a = !1, c, f, p = null, b, T, v;
  const k = /* @__PURE__ */ new Set(), S = {}, y = /* @__PURE__ */ new Map();
  for (const te of t.manual ?? [])
    y.has(te.atIndex) || y.set(te.atIndex, []), y.get(te.atIndex).push(te);
  const g = (te) => {
    n.phases.length && (l = ou(n, l, te)), r = te, o = 0, p && !Ki(n, r, p.phase) && (p = null);
  };
  for (let te = s; te < e.length; te++) {
    const Dt = e[te];
    if (!a && We(Dt)) {
      const ce = Zi(n, r, o, p);
      o = ce.round;
      const ht = new Set((Dt.extra?.rlzc?.skippedEvents ?? []).map((ye) => ye.id));
      ce.events.forEach((ye) => {
        ht.has(ye.id) || k.add(ye.id);
      }), S[te] = {
        phase: r.id,
        round: o,
        events: ce.events.map((ye) => ye.id),
        skipFrom: ce.skipFrom,
        limit: _s(n, r, l, o, A)
      }, p && r.id === p.phase && o >= p.round && (p = null);
      const mt = String(Dt.mes ?? ""), gt = $o(mt);
      gt && (T = gt), A = gt?.limit;
      const Tt = ko(mt);
      Tt && (v = Tt);
      const pn = wo(mt);
      if (pn)
        a = !0, c = "tag", f = te, b = pn;
      else {
        const ye = pu(mt), xt = ye ? i.find((de) => de.name === ye) : void 0;
        if (xt && n.phases.length)
          g(xt);
        else if (r.cap > 0 && o >= r.cap && r.next) {
          const de = $n(n, r.next);
          de && g(de);
        }
      }
    }
    for (const ce of y.get(te) ?? []) {
      if (a) break;
      switch (ce.kind) {
        case "skip": {
          p = $n(n, ce.targetPhase) && Ki(n, r, ce.targetPhase) ? { phase: ce.targetPhase, round: ce.targetRound } : null;
          break;
        }
        case "setPhase": {
          const ht = $n(n, ce.phase);
          ht && (p = null, g(ht));
          break;
        }
        case "setRound":
          o = Math.max(0, Math.floor(ce.round)), p = null;
          break;
        case "end":
          a = !0, c = "manual", f = te;
          break;
      }
    }
  }
  const z = a ? null : Zi(n, r, o, p), J = z ? z.round : o + 1, ee = r.cap > 0, me = n.events.filter((te) => k.has(te.id)).map((te) => te.id), ge = a ? void 0 : _s(n, r, l, J, A), Ge = a ? void 0 : _s(n, r, l, o);
  let dt;
  const pt = n.remaining;
  return !a && pt.type === "nights" && n.phases.length && !r.byTag && !r.frozen ? dt = pt.template.replace("{n}", String(po(n, r))) : !a && pt.type === "countdown" && ge?.minutes !== void 0 && (dt = pt.template.replace("{m}", String(ge.minutes))), {
    phase: r,
    round: o,
    nextRound: J,
    clock: a ? void 0 : Hi(n, r, J),
    currentClock: Hi(n, r, o),
    remainingText: dt,
    limit: ge,
    roundsLeft: Ge ? { x: Ge.x, y: Ge.y } : void 0,
    chainStart: n.phases.length ? l.id : void 0,
    ended: a,
    endedBy: c,
    endIndex: f,
    firedEvents: me,
    warn: !a && ee && J >= r.cap - 2,
    isLastRound: !a && ee && J === r.cap,
    overdue: !a && ee && !r.next && J > r.cap,
    next: z,
    skipGoal: p,
    settlement: b,
    panel: T,
    rolesFromChat: v,
    perMessage: S,
    entryIndex: s
  };
}
const Eo = "rlzc_token", Co = "rlzc_progress", Mo = "rlzc_turn", Io = "rlzc_state", ku = [Eo, Co, Mo, Io], ts = { token: "", progress: "", turn: "", injected: [] };
function $u(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function On(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const i = new RegExp(`(?<!\\{)\\{(${s.map($u).join("|")})\\}(?!\\})`, "g");
  return e.replace(i, (r, l) => n?.[l]?.trim() || l);
}
function Su(e, t) {
  if (!t.length) return "";
  const n = e.events.map((A) => A.id), s = t.map((A) => n.indexOf(A)).filter((A) => A >= 0).sort((A, a) => A - a), i = [];
  let r = s[0], l = s[0];
  const o = () => i.push(r === l ? n[r] : `${n[r]}–${n[l]}`);
  for (let A = 1; A < s.length; A++) {
    if (s[A] === l + 1) {
      l = s[A];
      continue;
    }
    o(), r = l = s[A];
  }
  return o(), i.join("、");
}
function Ji(e, t, n, s = !1) {
  let i = On(e.text, t, n);
  return e.to > e.from && (i = `在本阶段第${e.from}到${e.to}轮之间发生：${i}`), e.if && !s && (i += `（条件：${On(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${i}`;
}
function zu(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Eu(e, t, n, s = {}) {
  if (!t || !n || t.ended || n.status !== "active") return ts;
  const i = s.roles, r = e.phases.length > 0, l = t.next, o = [`副本：${e.name}（${e.level}级）`], A = t.limit;
  if (r)
    o.push(`阶段：${t.phase.name}`), o.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), A && o.push(`剩余${A.x}/${A.y}轮`), t.clock && o.push(`钟时：${t.clock}`), A?.text && o.push(`时限：${A.text}`), e.remaining.type === "countdown" && t.remainingText && o.push(t.remainingText), A?.deadline && !A.text?.includes(A.deadline) && o.push(`截止：${A.deadline}`);
  else {
    o.push(`本轮：第${t.nextRound}轮`), t.clock && o.push(`钟时：${t.clock}`);
    const g = s.panelLimit || s.briefing?.limit;
    g && o.push(`时限：${g}`);
  }
  const a = ["［副本进度·仅供AI］", o.join("　")];
  if (s.briefing?.goal && (!r || e.id === "generic") && a.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const g = e.roles.filter((z) => i?.[z]);
    a.push(
      g.length ? `角色登记：${e.roles.map((z) => `${z}=${i?.[z] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const c = Su(e, t.firedEvents);
  c && a.push(`已发生事件：${c}`);
  const f = [];
  l.skipFrom !== void 0 && f.push(`玩家选择快进：本轮从「${t.phase.name}」第${l.skipFrom}轮快进到第${l.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const p = new Map((s.subNext ?? []).map((g) => [g.id, g])), b = l.events.filter((g) => g.if && p.get(g.id)?.ok === !1).map((g) => ({ id: g.id, reason: p.get(g.id).reason })), T = l.events.filter((g) => !b.some((z) => z.id === g.id)), v = (g) => !!g.if && p.get(g.id)?.ok === !0, k = T.filter((g) => g.kind === "event"), S = T.filter((g) => g.kind === "directive");
  if (k.length && (f.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), k.forEach((g) => f.push(Ji(g, e, i, v(g))))), S.length && (f.push("本轮写作要求："), S.forEach((g) => f.push(Ji(g, e, i, v(g))))), t.isLastRound ? f.push(zu(t)) : t.overdue && f.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && f.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && f.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((g) => i?.[g])) {
    let g = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((z) => `${z}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (g += "死者不得是{{user}}或其同伴。"), f.push(g);
  }
  let y;
  return A?.text && (A.minutes !== void 0 ? (f.push(
    `本轮<副本>的时限一栏写：${A.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), y = { text: A.text, minutes: A.minutes, total: A.total }) : (f.push(`本轮<副本>的时限一栏写：${A.text}（照抄）。`), y = { text: A.text })), {
    token: e.token,
    progress: a.join(`
`),
    turn: f.length ? ["［本轮指令·仅供AI］", ...f].join(`
`) : "",
    injected: T.map((g) => g.id),
    limit: y,
    skipped: b.length ? b : void 0,
    state: s.stateText || void 0
  };
}
const Cu = 1, Mu = 0;
function re() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function Iu() {
  const e = re();
  return e.eventTypes ?? e.event_types ?? {};
}
function Xe(e, t) {
  const n = Iu()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  re().eventSource.on(n, t);
}
function Ae() {
  return re().chat ?? [];
}
function ns() {
  const e = re();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function ss() {
  return re().chatMetadata ?? {};
}
function dn() {
  const e = re();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Ht(e, t, n, s) {
  re().setExtensionPrompt(e, t, Cu, n, s, Mu);
}
function Ee(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Ue(e) {
  const t = re();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function qi(e, t = "") {
  const n = re();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const i = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof i == "string" ? i : null;
  }
  return window.prompt(e, t);
}
const Ct = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function To(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function Tu(e, t = Ct) {
  return t.length ? e.replace(To(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function Po(e, t = Ct, n = !1) {
  const s = Ae()[e];
  if (!s || s.is_user) return;
  const i = String(s.extra?.display_text ?? s.mes ?? "");
  if (!To(n ? Ct : t, "").test(i)) return;
  const r = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!r) return;
  const l = re().messageFormatting;
  if (typeof l != "function") return;
  const o = l(Tu(i, t), s.name ?? "", !!s.is_system, !1, e);
  r.innerHTML !== o && (r.innerHTML = o);
}
function Pu(e = Ct, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && Po(s, e, t);
  });
}
const Nu = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function No(e) {
  return e.stateFields?.length ? e.stateFields : [Nu];
}
const Fu = [...Ct, "状态栏"], Ru = new RegExp(`<(${Fu.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function Ou(e) {
  return String(e ?? "").replace(Ru, "").replace(/\n{3,}/g, `

`).trim();
}
function ju(e) {
  const n = [
    "你是角色扮演副本的记录员，不写剧情，只整理事实。",
    "根据本轮正文完成三件事：",
    "1. 事件核对：逐条判断「本轮后台事件」在正文里是 done（已发生）、missed（该发生但没写出来）还是 void（条件已不成立，不该发生），各附一句理由。后台事件即使{{user}}看不到，只要正文与之不矛盾、且没有写出相反的事实，就算 done。标明「第X到Y轮之间」的事件不一定在本轮写出：本轮没写到、也没写出相反的事实，同样算 done。",
    "2. 隐藏状态：在「上一轮状态」的基础上更新下列字段，只依据正文里已经发生的事实，没有变化就照抄上一轮：",
    ...No(e.pack).map((o) => `   - ${o.key}（${o.label}）：${o.hint}`),
    "3. 条件预判：逐条判断「下一轮事件」的条件现在是否仍成立（ok 为 true/false），附一句理由。",
    "只输出一个 JSON 对象，不要任何解释，格式：",
    '{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}]}',
    "没有本轮事件时 events 为 []；没有下一轮事件时 next 为 []。"
  ].join(`
`), s = (o) => o.to > o.from ? `（本阶段第${o.from}到${o.to}轮之间）` : "", i = e.events.length ? e.events.map((o) => `- ${o.id}${s(o)}：${o.text}${o.if ? `（条件：${o.if}）` : ""}`).join(`
`) : "（无）", r = e.nextConditional.length ? e.nextConditional.map((o) => `- ${o.id}：${o.text}（条件：${o.if}）`).join(`
`) : "（无）", l = [
    `【副本】${e.pack.name}　阶段：${e.phaseName}　第${e.round}轮`,
    `【上一轮状态】${e.prevState ? JSON.stringify(e.prevState) : "（尚无，请根据正文建立）"}`,
    `【本轮后台事件】
${i}`,
    `【下一轮事件】
${r}`,
    `【本轮正文】
${Ou(e.text)}`
  ].join(`

`);
  return { system: n, user: l };
}
function Du(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class Kt extends Error {
}
function Lu(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), i = t.lastIndexOf("}");
  if (s < 0 || i <= s) throw new Kt("返回里没有 JSON");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new Kt("返回的 JSON 无法解析");
  }
  if (!r || typeof r != "object" || Array.isArray(r)) throw new Kt("返回的不是 JSON 对象");
  if (!r.state || typeof r.state != "object" || Array.isArray(r.state)) throw new Kt("缺少 state");
  const l = ["done", "missed", "void"], o = (Array.isArray(r.events) ? r.events : []).filter((a) => a && typeof a.id == "string" && l.includes(a.status)).map((a) => ({ id: a.id, status: a.status, reason: String(a.reason ?? "") })), A = (Array.isArray(r.next) ? r.next : []).filter((a) => a && typeof a.id == "string" && typeof a.ok == "boolean").map((a) => ({ id: a.id, ok: a.ok, reason: String(a.reason ?? "") }));
  return { events: o, state: r.state, next: A };
}
function Bu(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function Vu(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((i) => String(i ?? "")).join("|");
  return `${e}:${t}:${s}:${Bu(String(n?.mes ?? ""))}`;
}
function Wu(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function Uu(e, t, n = 2) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return Lu(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
class Fo extends Error {
}
function Ro(e) {
  if (e instanceof Fo) return "超时";
  if (e instanceof Kt) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function Oo(e) {
  return e?.extra?.rlzc;
}
function is(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!We(s)) continue;
    const i = Oo(s)?.sub;
    if (i?.state && !i.skipped) return { index: n, state: i.state };
  }
  return null;
}
function Gu(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!We(s)) continue;
    const i = Oo(s)?.sub;
    return i && !i.skipped && Array.isArray(i.next) ? i.next : void 0;
  }
}
function jn(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => jn(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${jn(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function jo(e, t) {
  const n = No(e), s = new Set(n.map((r) => r.key)), i = n.filter((r) => t[r.key] !== void 0).map((r) => `${r.label}：${jn(t[r.key])}`);
  for (const [r, l] of Object.entries(t)) s.has(r) || i.push(`${r}：${jn(l)}`);
  return i.length ? ["［副本状态·仅供AI］", ...i].join(`
`) : "";
}
const Yu = 1500;
function Do() {
  return re().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function Lo(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Bo(e, t) {
  const n = new AbortController();
  let s;
  const i = new Promise((r, l) => {
    s = setTimeout(() => {
      n.abort(), l(new Fo(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), i]);
  } finally {
    clearTimeout(s);
  }
}
function Vo(e, t) {
  const n = t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : "") ?? "", s = new Error(`${e || ""} ${n}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return s.status = e, s;
}
async function Wo(e, t, n, s = Yu) {
  const i = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: Do(),
    signal: n,
    body: JSON.stringify({
      ...Lo(e),
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
  let l;
  try {
    l = JSON.parse(r);
  } catch {
    l = r;
  }
  if (!i.ok || l?.error) throw Vo(i.status === 200 ? 0 : i.status, l);
  const o = l?.choices?.[0]?.message?.content ?? l?.choices?.[0]?.text ?? l?.content;
  if (typeof o != "string") throw new Error("返回里没有正文");
  return o;
}
async function Hu(e) {
  const t = re();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function Ku(e, t) {
  return Bo(e.timeoutMs, (n) => {
    if (e.source === "main") return Hu(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return Wo(e.preset, t, n);
  });
}
async function Uo(e) {
  const t = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: Do(),
    body: JSON.stringify(Lo(e))
  }), n = await t.json().catch(() => null);
  if (!t.ok || n?.error) throw Vo(t.status, n);
  return (Array.isArray(n) ? n : Array.isArray(n?.data) ? n.data : Array.isArray(n?.models) ? n.models : []).map((i) => typeof i == "string" ? i : i?.id ?? i?.name).filter(Boolean).sort();
}
async function Zu(e, t) {
  const n = await Uo(e).catch(() => []), s = { ...e, model: e.model || n[0] || "" }, i = await Bo(
    t,
    (r) => Wo(s, { system: "只回复 OK。", user: "ping" }, r, 5)
  );
  return { models: n, reply: i };
}
const it = "rlzc";
function Ju() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function qu(e, t, n) {
  return {
    id: Ju(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function Qu(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function Xu(e, t) {
  return e.packId === Rn ? e.briefing ? bo(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function ef(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return We(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function tf(e, t) {
  const n = ef(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((i) => ({ ...i, atIndex: i.atIndex + s }))), t.manual = t.manual.filter((i) => i.atIndex < e.length && i.atIndex >= t.entryIndex), !0;
}
function Go(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Qi = "rlzc_declined";
function si(e, t) {
  return `${e}:${t}`;
}
const Yo = We;
function rs(e, t, n) {
  if (!Yo(e[t])) return null;
  const s = yu(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function nf(e, t, n, s, i = []) {
  for (let r = Math.max(0, n); r <= Math.min(s, e.length - 1); r++) {
    const l = rs(e, r, t);
    if (l && !i.includes(si(r, l.info.name))) return l;
  }
  return null;
}
function sf(e, t, n = [], s = Ds, i = 0) {
  if (t?.status === "active") return null;
  let r = -1;
  for (let o = Math.max(0, i); o < e.length; o++) if (Yo(e[o])) {
    r = o;
    break;
  }
  if (r < 0 || t && t.entryIndex === r) return null;
  const l = rs(e, r, s);
  return !l || n.includes(si(r, l.info.name)) ? null : l;
}
const rf = /[■█▰●◆★▮▓]/g, of = /[□░▱○◇☆▯▒]/g;
function lf(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const r = Number(n[2]);
    return r === 100 ? Number(n[1]) : r > 0 ? Math.round(Number(n[1]) / r * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(rf) ?? []).length, i = (t.match(of) ?? []).length;
  return s + i > 0 ? Math.round(s / (s + i) * 100) : null;
}
function Xi(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function Af(e, t) {
  return Xi(e).includes(Xi(t));
}
function af(e, t, n) {
  const s = [], i = Object.keys(n.perMessage).map(Number).sort((A, a) => A - a);
  let r = !1, l = null, o = !1;
  for (const A of i) {
    const a = n.perMessage[A], f = t.phases.find((g) => g.id === a.phase)?.name ?? "进行中", p = (g, z) => s.push({ index: A, phase: f, round: a.round, kind: g, text: z }), b = e[A]?.extra?.rlzc;
    for (const g of b?.sub?.events ?? []) g.status === "missed" && p("eventMissed", `${g.id} 未写出来：${g.reason}`);
    for (const g of b?.skippedEvents ?? []) p("eventSkipped", `${g.id} 条件不成立，已跳过：${g.reason}`);
    const T = $o(String(e[A]?.mes ?? "")), v = A === n.entryIndex;
    if (!T) {
      v || p("missing", "本轮回复缺少 <副本> 面板"), o = !v;
      continue;
    }
    o = !1;
    const k = lf(T.progressBar);
    T.progressBar === void 0 ? p("progressUnreadable", "<副本> 中没有进度条一栏") : k === null ? p("progressUnreadable", `进度条无法读出数值：「${T.progressBar}」`) : (!r && k !== 0 && p("progressStart", `入场后第一轮的进度条应为0，实际为 ${k}`), (k < 0 || k > 100) && p("progressRange", `进度条数值 ${k} 超出 0–100`), l !== null && k < l && p("progressDrop", `进度条比上一轮低：${l} → ${k}`), l = k), r = !0;
    const S = e[A]?.extra?.rlzc?.limit, y = S?.text ? S : a.limit?.text ? { text: a.limit.text, minutes: a.limit.minutes, total: a.limit.total } : void 0;
    if (y) {
      const g = T.limit;
      if (y.minutes !== void 0) {
        const z = fo(g);
        !g || z.remaining === null || z.total === null ? p("limit", `时限读不到「剩余时间/总时长」：写的是「${g ?? "（没有时限一栏）"}」，注入的是「${y.text}」`) : (z.remaining > y.minutes && p("limit", `剩余时间比注入值多：写的是${Ft(z.remaining)}，注入的是${Ft(y.minutes)}`), y.total !== void 0 && z.total !== y.total && p("limit", `总时长与注入值不一致：写的是${Ft(z.total)}，注入的是${Ft(y.total)}`));
      } else (!g || !Af(g, y.text)) && p("limit", `时限与注入文字不一致：写的是「${g ?? "（没有时限一栏）"}」，注入的是「${y.text}」`);
    }
  }
  return { warnings: s, missingLast: o, hasPanel: r };
}
const Ls = "rlzc", Ho = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, Sn = {
  depths: { token: 4, progress: 4, turn: 0 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...cn },
  subApi: structuredClone(Ho)
}, m = /* @__PURE__ */ Kn({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(Sn),
  packs: [],
  lastInjection: ts,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0
});
function ii(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ko(...e) {
  m.settings.debug && console.log("[rlzc]", ...e);
}
function cf() {
  const e = re().extensionSettings, t = e[Ls] ?? {}, n = {
    ...structuredClone(Sn),
    ...t,
    depths: { ...Sn.depths, ...t.depths ?? {} },
    ball: { ...Sn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => go(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...cn, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(Ho),
      ...t.subApi ?? {},
      presets: Array.isArray(t.subApi?.presets) ? t.subApi.presets : [],
      // 旧版本里的「酒馆连接配置」来源已删除，按关闭处理
      source: ["off", "main", "preset"].includes(t.subApi?.source) ? t.subApi.source : "off"
    }
  };
  e[Ls] = n, m.settings = n, m.packs = ni(n.customPacks);
}
function ze() {
  re().extensionSettings[Ls] = /* @__PURE__ */ U(m.settings), re().saveSettingsDebounced(), m.packs = ni(m.settings.customPacks);
}
function uf(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = go(t);
  if (n.length) return n;
  const s = t;
  return ni([]).some((i) => i.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (m.settings.customPacks = [...m.settings.customPacks.filter((i) => i.id !== s.id), s], ze(), []);
}
function ff(e) {
  m.settings.customPacks = m.settings.customPacks.filter((t) => t.id !== e), ze();
}
function ft() {
  return Qu(ss()[it]);
}
function os() {
  const e = ss(), t = Array.isArray(e[it]?.declined) ? e[it].declined : [], n = Array.isArray(e[Qi]) ? e[Qi] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function df(e) {
  const t = ss(), n = [...os().filter((s) => s !== e), e];
  t[it] = { ...t[it] ?? {}, declined: n }, dn();
}
function Mt(e) {
  const t = ss(), n = os(), s = n.length ? { declined: n } : {};
  e ? t[it] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[it] = s : delete t[it], dn();
}
function ri(e) {
  const t = ft();
  t && (e(t), Mt(t), Qe());
}
function Zo(e) {
  const t = Ae();
  return (e === "swipe" || e === "continue") && We(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Dn(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Xu(t, m.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = wu(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? af(e, n, s) : null };
}
function Qe() {
  const e = Ae();
  let t = ft();
  if (t) {
    const s = JSON.stringify(t);
    if (!tf(e, t))
      Mt(null), Ee("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const i = Dn(e, t);
      i.progress && (t.status = i.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && Mt(t);
    }
  }
  const n = Dn(e, t);
  m.session = n.session, m.pack = n.pack, m.progress = n.progress, m.audit = n.audit, m.subLine = el(e, n.progress), m.tick++;
}
function Jo() {
  if (m.session)
    return Go(m.session, m.progress?.rolesFromChat);
}
function Ln() {
  for (const e of ku) Ht(e, "", 0, !1);
}
let tn = -1;
function pf(e) {
  const t = Zo(e), n = ft(), { pack: s, progress: i, audit: r } = Dn(t, n), l = n ? Go(n, i?.rolesFromChat) : void 0, o = li() && !!i, A = o ? is(t, i.entryIndex) : null, a = s ? Eu(s, i, n, {
    roles: l,
    briefing: n?.briefing,
    panelLimit: i?.panel?.limit,
    audit: r ?? void 0,
    subNext: o ? Gu(t, i.entryIndex) : void 0,
    stateText: A ? jo(s, A.state) : void 0
  }) : ts;
  Ln();
  const c = m.settings.depths;
  a.token && Ht(Eo, a.token, c.token, !0), a.progress && Ht(Co, a.progress, c.progress, !1), a.turn && Ht(Mo, a.turn, c.turn, !1), a.state && Ht(Io, a.state, c.progress, !1), m.lastInjection = a, tn = t.length, Ko("注入", e, a);
}
const Bs = /* @__PURE__ */ new Set();
async function hf() {
  const e = Ae(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = hu(n.mes);
  if (!s) return;
  const i = ft();
  if (!i || i.status !== "active" || i.manual.some((a) => a.kind === "skip" && a.atIndex === t)) return;
  const r = `${ns()}:${t}:${n.mes}`;
  if (Bs.has(r)) return;
  Bs.add(r);
  const { pack: l, progress: o } = Dn(e, i);
  if (!l || !o || o.ended) return;
  const A = mu(l, o.phase, o.round, s);
  A && await Ue(`是否跳到${s}？（${A.label}）`) && (i.manual.push({ kind: "skip", atIndex: t, targetPhase: A.phase, targetRound: A.round }), Mt(i));
}
async function mf(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Ln();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await hf(), await Ef(s), pf(s);
  } catch (i) {
    console.error("[rlzc] 拦截器出错", i), Ln();
  }
}
const er = /* @__PURE__ */ new Set();
function oi() {
  const e = ft();
  if (!e || e.status !== "ended") return 0;
  const t = m.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
async function qo(e) {
  const { index: t, info: n } = e, s = `${ns()}:${t}:${n.name}`;
  if (er.has(s)) return;
  er.add(s);
  const i = e.pack ? `检测到进入《${e.pack.name}》，是否启用？` : `检测到进入《${n.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!await Ue(i)) {
    df(si(t, n.name));
    return;
  }
  const r = rs(Ae(), t, m.packs);
  if (!r || r.info.name !== n.name) {
    Ee("warning", "入场消息已变化，未启用。");
    return;
  }
  const l = { ...n };
  e.pack || (l.rounds = ho(n.limit, xo(n), m.settings.genericCaps).rounds), Xo(e.pack ?? bo(l, m.settings.genericCaps), t, l);
}
function Qo() {
  const e = sf(Ae(), ft(), os(), m.packs, oi());
  e && qo(e);
}
function gf(e) {
  Qe();
  const t = Ae(), n = oi();
  let s = -1;
  for (let i = n; i < t.length; i++) if (We(t[i])) {
    s = i;
    break;
  }
  e === s && Qo();
}
function Xo(e, t, n) {
  const i = Ae()[t], r = qu(e, t, n);
  i.extra = i.extra ?? {}, i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: r.id }, Mt(r), Qe(), m.progress && (i.extra.rlzc.injected = ii(m.progress.perMessage[t]?.events ?? [])), dn(), Ee("success", `已进入副本《${e.name}》。`);
}
async function xf(e) {
  const t = m.packs.find((r) => r.id === e);
  if (!t) return;
  const n = Ae();
  let s = n.length - 1;
  for (; s >= 0 && !We(n[s]); ) s--;
  if (s < 0) {
    Ee("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  ft()?.status === "active" && !await Ue("当前已有进行中的副本，确定要替换吗？") || await Ue(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && Xo(t, s, vo(n[s].mes) ?? { name: t.name });
}
function ls(e) {
  ri((t) => t.manual.push(e));
}
function As() {
  return Ae().length - 1;
}
async function tr() {
  const e = m.progress;
  if (!(!e || e.ended || !m.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Ee("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ue(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (ls({ kind: "skip", atIndex: As(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Ee("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function nr() {
  !m.session || m.progress?.ended || await Ue("确定要手动结束当前副本吗？") && ls({ kind: "end", atIndex: As() });
}
function bf(e) {
  ls({ kind: "setPhase", atIndex: As(), phase: e });
}
function yf(e) {
  ls({ kind: "setRound", atIndex: As(), round: e });
}
function vf(e) {
  ri((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function _f(e) {
  ri((t) => t.manual.splice(e, 1));
}
async function sr() {
  m.session && await Ue("确定要删除当前副本会话吗？（不会改动聊天记录）") && (Mt(null), Qe());
}
function li() {
  return m.settings.subApi.source !== "off";
}
function wf() {
  const e = m.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function kf(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function el(e, t) {
  if (!li() || !t || t.ended) return "";
  if (m.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const i = is(e, t.entryIndex);
  return i && t.perMessage[i.index] ? `副本记录：已更新（第${t.perMessage[i.index].round}轮）` : "副本记录：尚未整理";
}
let zn = null;
const Ai = /* @__PURE__ */ new Set();
function ai(e) {
  return Vu(ns(), e, Ae()[e]);
}
function ir(e) {
  m.subBusy = e, m.subLine = el(Ae(), m.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && m.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function tl(e, t, n) {
  if (ai(e) !== t) return;
  const s = Ae()[e];
  s?.extra?.rlzc && (s.extra.rlzc = ii({ ...s.extra.rlzc, sub: n }), dn(), Qe());
}
function $f(e, t) {
  const n = Ae(), s = m.progress, i = m.pack, r = n[e], l = s?.perMessage[e];
  if (!i || !s || !l || !r) return;
  const o = Jo(), A = (g) => ({ ...g, text: On(g.text, i, o), if: g.if ? On(g.if, i, o) : void 0 }), a = Du(i, r.extra?.rlzc?.injected ?? []).map(A), c = (s.next?.events ?? []).filter((g) => g.if).map(A);
  if (!Wu({
    enabled: li(),
    active: !s.ended && m.session?.status === "active",
    type: t,
    saveMode: m.settings.subApi.saveMode,
    hasEvents: a.length > 0,
    hasNextConditional: c.length > 0
  })) return;
  const p = ai(e);
  if (Ai.has(p)) return;
  const b = i.phases.find((g) => g.id === l.phase), T = is(n.slice(0, e), s.entryIndex), v = ju({
    pack: i,
    phaseName: b?.name ?? l.phase,
    round: l.round,
    prevState: T?.state ?? null,
    events: a,
    nextConditional: c,
    text: String(r.mes ?? "")
  }), k = re().substituteParams, S = k ? { system: k(v.system), user: k(v.user) } : v, y = Sf(e, p, l.round, S);
  zn = { key: p, index: e, promise: y }, y.finally(() => {
    zn?.key === p && (zn = null);
  });
}
async function Sf(e, t, n, s) {
  ir(!0);
  try {
    let i = 2;
    for (; ; ) {
      const r = wf();
      if (!r) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const l = Date.now();
      try {
        const o = await Uu((A) => Ku(r, A), s, i);
        tl(e, t, { ...o, ms: Date.now() - l, via: kf(r), at: (/* @__PURE__ */ new Date()).toISOString() }), Ai.add(t);
        return;
      } catch (o) {
        if (ai(e) !== t) return;
        const A = Ro(o), a = String(o?.message ?? o).slice(0, 200);
        if (Ko("副本事件检测失败", A, o), !m.settings.subApi.wait) {
          Ee("warning", `第${n}轮事件检测失败（${A}），已沿用上一轮状态。`), Ss(e, t, A);
          return;
        }
        if (await zf(n, A, a) === "skip") {
          Ss(e, t, A);
          return;
        }
        i = 0;
      }
    }
  } catch (i) {
    Ee("error", String(i?.message ?? i)), Ss(e, t, "其他");
  } finally {
    ir(!1);
  }
}
function Ss(e, t, n) {
  Ai.add(t), tl(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function zf(e, t, n) {
  const s = re();
  if (!s.Popup || !s.POPUP_TYPE)
    return window.confirm(`第${e}轮事件检测失败（${t}）。重试吗？取消则这轮先跳过。`) ? "retry" : "skip";
  const i = m.settings.subApi, r = document.createElement("div"), l = document.createElement("h3");
  l.textContent = `第${e}轮事件检测失败`;
  const o = document.createElement("p");
  o.textContent = `原因：${t}`;
  const A = document.createElement("small");
  A.textContent = n, A.style.opacity = "0.7";
  const a = document.createElement("div");
  a.style.cssText = "display:none;margin-top:10px;";
  const c = document.createElement("label");
  c.textContent = "换成：";
  const f = document.createElement("select");
  f.className = "text_pole";
  const p = [{ value: "", text: "请选择…" }];
  for (const v of i.presets) i.source === "preset" && v.id === i.presetId || p.push({ value: `preset:${v.id}`, text: `自设API：${v.name}` });
  i.source !== "main" && p.push({ value: "main", text: "跟随主API" });
  for (const v of p) {
    const k = document.createElement("option");
    k.value = v.value, k.textContent = v.text, f.append(k);
  }
  c.append(f), a.append(c), r.append(l, o, A, a);
  let b;
  f.addEventListener("change", () => {
    const v = f.value;
    v && (v === "main" ? i.source = "main" : (i.source = "preset", i.presetId = v.slice(7)), ze(), b.complete(s.POPUP_RESULT.CUSTOM1));
  }), b = new s.Popup(r, s.POPUP_TYPE.TEXT, "", {
    okButton: "重试",
    cancelButton: "这轮先跳过",
    customButtons: [
      {
        text: "换一个接口",
        action: () => {
          a.style.display = "", f.focus();
        }
      }
    ]
  });
  const T = await b.show();
  return T === s.POPUP_RESULT.AFFIRMATIVE || T === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function Ef(e) {
  const t = zn;
  if (!(!t || !m.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= Zo(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function Cf(e, t) {
  const n = Ae(), s = n[e];
  if (!We(s)) return;
  const i = ft();
  if (!i || i.status === "ended") {
    if (rs(n, e, m.packs)) {
      const A = nf(n, m.packs, oi(), e, os());
      A && qo(A);
    }
    return;
  }
  if (t === "first_message") return;
  const r = ko(s.mes);
  r && (i.roles = { ...i.roles ?? {}, ...r }), Mt(i), Qe();
  const l = m.progress?.perMessage[e];
  if (l && m.pack) {
    const A = m.pack.phases.find((b) => b.id === l.phase), a = {
      phase: A?.name ?? l.phase,
      round: l.round,
      injected: tn === e ? m.lastInjection.injected : l.events
    }, c = m.pack.time;
    c.type === "clock" && A?.clock && !A.night && !A.frozen && (a.clock = So(c.dayStart, c.minutesPerRound, l.round));
    const f = tn === e ? m.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    f && (a.limit = f);
    const p = s.extra?.rlzc?.entry;
    p && (a.entry = p), tn === e && m.lastInjection.skipped?.length && (a.skippedEvents = m.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (a.sub = s.extra.rlzc.sub), s.extra = s.extra ?? {}, s.extra.rlzc = ii(a), dn(), Qe(), $f(e, t);
  }
  const o = wo(s.mes);
  o && Ee("info", `副本结算：${o.result ?? "—"}${o.rating ? `，评价 ${o.rating}` : ""}`);
}
function rr() {
  Bs.clear(), tn = -1, m.chatId = ns(), m.debugUnlocked = !1, m.lastInjection = ts, Ln(), Qe(), Qo(), setTimeout(() => ci(), 50);
}
function zs() {
  Qe();
}
function nl() {
  return m.settings.panelDisplay === "statusbar" ? Ct.filter((e) => e !== "副本") : Ct;
}
function Es(e) {
  Po(e, nl());
}
function ci(e = !1) {
  Pu(nl(), e);
}
function Mf(e) {
  m.settings.panelDisplay !== e && (m.settings.panelDisplay = e, ze(), ci(!0));
}
const If = { class: "rlzc-ball-mark" }, Cs = 44, Tf = /* @__PURE__ */ ut({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ ke({ x: 0, y: 0 });
    let n = null;
    function s(c, f) {
      const p = window.innerWidth - Cs - 4, b = window.innerHeight - Cs - 4;
      return { x: Math.min(Math.max(4, c), p), y: Math.min(Math.max(4, f), b) };
    }
    function i() {
      const c = m.settings.ball;
      t.value = s(c.x ?? window.innerWidth - Cs - 12, c.y ?? Math.round(window.innerHeight * 0.35));
    }
    function r(c) {
      c.currentTarget.setPointerCapture(c.pointerId), n = { id: c.pointerId, dx: c.clientX - t.value.x, dy: c.clientY - t.value.y, moved: !1, sx: c.clientX, sy: c.clientY };
    }
    function l(c) {
      !n || n.id !== c.pointerId || (Math.abs(c.clientX - n.sx) + Math.abs(c.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(c.clientX - n.dx, c.clientY - n.dy)));
    }
    function o(c) {
      if (!n || n.id !== c.pointerId) return;
      const f = n.moved;
      n = null, f ? (m.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, ze()) : m.panelOpen = !m.panelOpen;
    }
    const A = ne(() => !!m.session && !m.progress?.ended), a = ne(() => !!m.progress?.warn);
    return Jn(() => m.settings.ball, i, { deep: !0 }), lA(() => {
      i(), window.addEventListener("resize", i);
    }), AA(() => window.removeEventListener("resize", i)), (c, f) => (C(), N("button", {
      class: ct(["rlzc-ball", { "is-active": A.value, "is-warn": a.value }]),
      style: Yn({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: r,
      onPointermove: l,
      onPointerup: o,
      onPointercancel: o
    }, [
      h("span", If, R(A.value ? O(m).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
});
function Pf(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Gt(e) {
  return Pf(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Nf(e) {
  const t = [];
  let n = null, s = [];
  const i = () => {
    s.length && t.push(`<p>${s.map(Gt).join("<br>")}</p>`), s = [];
  }, r = () => {
    n && t.push(`</li></${n}>`), n = null;
  };
  for (const l of e.replace(/\r/g, "").split(`
`)) {
    const o = l.trimEnd();
    if (!o.trim()) {
      i(), r();
      continue;
    }
    const A = /^(#{1,4})\s+(.*)$/.exec(o);
    if (A) {
      i(), r();
      const p = Math.min(A[1].length + 2, 6);
      t.push(`<h${p}>${Gt(A[2])}</h${p}>`);
      continue;
    }
    const a = /^\s*[-*]\s+(.*)$/.exec(o), c = /^\s*(\d+)[.、]\s+(.*)$/.exec(o);
    if (a || c) {
      i();
      const p = a ? "ul" : "ol", b = a ? a[1] : c[2];
      n !== p ? (r(), n = p, t.push(p === "ol" ? `<ol start="${c[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Gt(b));
      continue;
    }
    if (n && /^\s{2,}/.test(l)) {
      t.push(`<br>${Gt(o.trim())}`);
      continue;
    }
    const f = /^>\s?(.*)$/.exec(o);
    if (f) {
      i(), r(), t.push(`<blockquote>${Gt(f[1])}</blockquote>`);
      continue;
    }
    r(), s.push(o);
  }
  return i(), r(), t.join("");
}
const Ff = {
  key: 0,
  class: "rlzc-docs"
}, Rf = { class: "rlzc-subtabs" }, Of = ["onClick"], jf = { class: "rlzc-md" }, Df = ["innerHTML"], Lf = ["src", "alt"], Bf = {
  key: 2,
  class: "rlzc-note"
}, or = /* @__PURE__ */ ut({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ ke(0);
    Jn(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = ne(() => t.pack.docs?.[n.value]), i = ne(() => s.value?.md ? Nf(s.value.md) : ""), r = ne(() => s.value?.image ? Au(t.pack, s.value.image) : null);
    return (l, o) => e.pack.docs?.length ? (C(), N("section", Ff, [
      h("div", Rf, [
        (C(!0), N(G, null, he(e.pack.docs, (A, a) => (C(), N("button", {
          key: a,
          class: ct({ on: n.value === a }),
          onClick: (c) => n.value = a
        }, R(A.title), 11, Of))), 128))
      ]),
      h("article", jf, [
        i.value ? (C(), N("div", {
          key: 0,
          innerHTML: i.value
        }, null, 8, Df)) : V("", !0),
        r.value ? (C(), N("img", {
          key: 1,
          src: r.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, Lf)) : s.value?.image && !r.value ? (C(), N("p", Bf, "图片无法加载：" + R(s.value.image), 1)) : V("", !0)
      ])
    ])) : V("", !0);
  }
}), Vf = { class: "rlzc-system" }, Wf = { class: "rlzc-card rlzc-hero" }, Uf = { class: "rlzc-hero-top" }, Gf = { class: "rlzc-level" }, Yf = {
  key: 0,
  class: "rlzc-chip"
}, Hf = {
  key: 0,
  class: "rlzc-goal"
}, Kf = { class: "rlzc-grid" }, Zf = {
  key: 0,
  class: "rlzc-stat"
}, Jf = {
  key: 1,
  class: "rlzc-stat"
}, qf = {
  key: 2,
  class: "rlzc-stat"
}, Qf = {
  key: 3,
  class: "rlzc-stat"
}, Xf = {
  key: 0,
  class: "rlzc-subline"
}, ed = {
  key: 1,
  class: "rlzc-note"
}, td = {
  key: 2,
  class: "rlzc-card"
}, nd = { class: "rlzc-kv" }, sd = { class: "rlzc-kv" }, id = {
  key: 3,
  class: "rlzc-note"
}, rd = {
  key: 4,
  class: "rlzc-card"
}, od = {
  key: 0,
  class: "rlzc-kv"
}, ld = { class: "rlzc-mono" }, Ad = {
  key: 1,
  class: "rlzc-tasks"
}, ad = {
  key: 2,
  class: "rlzc-ps"
}, cd = { class: "rlzc-actions" }, ud = ["disabled"], fd = ["disabled"], dd = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, pd = {
  key: 2,
  class: "rlzc-card"
}, hd = { class: "rlzc-row" }, md = ["value"], gd = ["disabled"], xd = /* @__PURE__ */ ut({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ ke(""), n = ne(() => !!m.session && !!m.pack), s = ne(() => m.progress), i = ne(() => n.value && !!s.value && !s.value.ended), r = ne(() => m.packs.find((p) => p.id === t.value) ?? null), l = ne(() => !!m.pack?.phases.length), o = ne(() => m.settings.panelDisplay !== "statusbar"), A = ne(() => {
      const p = s.value;
      return p ? l.value ? `${p.warn ? "⚠️ " : ""}${p.round}/${p.phase.cap}` : `第${p.round}轮` : "";
    }), a = ne(() => {
      const p = s.value;
      return p ? p.limit?.text ? p.limit.text : p.panel?.limit || m.session?.briefing?.limit || "—" : "";
    }), c = ne(() => {
      const p = s.value;
      return !!p && !p.ended && l.value && p.phase.cap > 0 && p.nextRound < p.phase.cap;
    });
    async function f() {
      t.value && (await xf(t.value), t.value = "");
    }
    return (p, b) => (C(), N("div", Vf, [
      n.value && s.value ? (C(), N(G, { key: 0 }, [
        h("div", Wf, [
          h("div", Uf, [
            h("span", Gf, R(O(m).pack.level), 1),
            h("h3", null, R(O(m).pack.name), 1),
            s.value.ended ? (C(), N("span", Yf, "已结束")) : V("", !0)
          ]),
          O(m).session?.briefing?.goal ? (C(), N("p", Hf, "目标：" + R(O(m).session.briefing.goal), 1)) : V("", !0)
        ]),
        h("div", Kf, [
          l.value ? (C(), N("div", Zf, [
            b[3] || (b[3] = h("span", null, "阶段", -1)),
            h("b", null, R(s.value.phase.name), 1)
          ])) : V("", !0),
          h("div", {
            class: ct(["rlzc-stat", { warn: s.value.warn }])
          }, [
            b[4] || (b[4] = h("span", null, "轮次", -1)),
            h("b", null, R(A.value), 1)
          ], 2),
          s.value.currentClock ? (C(), N("div", Jf, [
            b[5] || (b[5] = h("span", null, "钟时", -1)),
            h("b", null, R(s.value.currentClock), 1)
          ])) : V("", !0),
          s.value.roundsLeft ? (C(), N("div", qf, [
            b[6] || (b[6] = h("span", null, "最多剩余轮次", -1)),
            h("b", null, R(s.value.roundsLeft.x) + "/" + R(s.value.roundsLeft.y), 1)
          ])) : V("", !0),
          o.value ? (C(), N("div", Qf, [
            b[7] || (b[7] = h("span", null, "剩余时间", -1)),
            h("b", null, R(a.value), 1)
          ])) : V("", !0)
        ]),
        O(m).subLine ? (C(), N("p", Xf, R(O(m).subLine), 1)) : V("", !0),
        s.value.skipGoal ? (C(), N("div", ed, "快进中：目标 " + R(O(m).pack.phases.find((T) => T.id === s.value.skipGoal.phase)?.name) + " 第" + R(s.value.skipGoal.round) + "轮", 1)) : V("", !0),
        s.value.ended && s.value.settlement ? (C(), N("div", td, [
          h("div", nd, [
            b[8] || (b[8] = h("span", null, "结果", -1)),
            h("b", null, R(s.value.settlement.result ?? "—"), 1)
          ]),
          h("div", sd, [
            b[9] || (b[9] = h("span", null, "评价", -1)),
            h("b", null, R(s.value.settlement.rating ?? "—"), 1)
          ])
        ])) : s.value.ended ? (C(), N("div", id, "副本已手动结束。")) : V("", !0),
        o.value && s.value.panel ? (C(), N("div", rd, [
          s.value.panel.progressBar ? (C(), N("div", od, [
            b[10] || (b[10] = h("span", null, "进度", -1)),
            h("b", ld, R(s.value.panel.progressBar), 1)
          ])) : V("", !0),
          s.value.panel.tasks.length ? (C(), N("div", Ad, [
            b[11] || (b[11] = h("span", null, "任务", -1)),
            h("ul", null, [
              (C(!0), N(G, null, he(s.value.panel.tasks, (T, v) => (C(), N("li", { key: v }, R(T), 1))), 128))
            ])
          ])) : V("", !0),
          s.value.panel.ps ? (C(), N("div", ad, "ps：" + R(s.value.panel.ps), 1)) : V("", !0)
        ])) : V("", !0),
        h("div", cd, [
          h("button", {
            class: "rlzc-btn",
            disabled: !c.value,
            onClick: b[0] || (b[0] = //@ts-ignore
            (...T) => O(tr) && O(tr)(...T))
          }, "跳过（到本阶段结束）", 8, ud),
          h("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: b[1] || (b[1] = //@ts-ignore
            (...T) => O(nr) && O(nr)(...T))
          }, "手动结束副本", 8, fd)
        ]),
        i.value && O(m).pack.docs?.length ? (C(), st(or, {
          key: 5,
          pack: O(m).pack
        }, null, 8, ["pack"])) : V("", !0)
      ], 64)) : (C(), N("div", dd, [...b[12] || (b[12] = [
        h("h3", null, "休整中", -1),
        h("p", null, "当前在回廊里，没有进行中的副本，也不会注入任何提示词。", -1)
      ])])),
      i.value ? V("", !0) : (C(), N("div", pd, [
        b[14] || (b[14] = h("label", { class: "rlzc-label" }, "手动选择副本（以最新一条AI回复为第1轮）", -1)),
        h("div", hd, [
          wn(h("select", {
            "onUpdate:modelValue": b[2] || (b[2] = (T) => t.value = T),
            class: "rlzc-input"
          }, [
            b[13] || (b[13] = h("option", { value: "" }, "选择副本…", -1)),
            (C(!0), N(G, null, he(O(m).packs, (T) => (C(), N("option", {
              key: T.id,
              value: T.id
            }, R(T.level) + "｜" + R(T.name), 9, md))), 128))
          ], 512), [
            [uo, t.value]
          ]),
          h("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: f
          }, "进入", 8, gd)
        ])
      ])),
      !i.value && r.value?.docs?.length ? (C(), st(or, {
        key: 3,
        pack: r.value
      }, null, 8, ["pack"])) : V("", !0)
    ]));
  }
}), bd = { class: "rlzc-card rlzc-subapi" }, yd = { class: "rlzc-field" }, vd = ["value"], _d = { class: "rlzc-row" }, wd = ["value"], kd = {
  key: 0,
  value: ""
}, $d = ["value"], Sd = ["disabled"], zd = ["disabled"], Ed = { class: "rlzc-field" }, Cd = ["value"], Md = { class: "rlzc-field" }, Id = { class: "rlzc-row rlzc-grow" }, Td = ["type", "value"], Pd = { class: "rlzc-field" }, Nd = ["value"], Fd = ["value"], Rd = ["value"], Od = ["value"], jd = { class: "rlzc-row" }, Dd = ["disabled"], Ld = { class: "rlzc-hint rlzc-test-result" }, Bd = { class: "rlzc-check" }, Vd = ["checked"], Wd = { class: "rlzc-check" }, Ud = ["checked"], Gd = { class: "rlzc-field" }, Yd = ["value"], Hd = {
  key: 2,
  class: "rlzc-hint"
}, Kd = /* @__PURE__ */ ut({
  __name: "SubApiCard",
  setup(e) {
    const t = ne(() => m.settings.subApi), n = ne(() => t.value.presets.find((y) => y.id === t.value.presetId) ?? null), s = /* @__PURE__ */ ke([]), i = /* @__PURE__ */ ke(!1), r = /* @__PURE__ */ ke(!1), l = /* @__PURE__ */ ke("");
    function o() {
      ze();
    }
    function A(y) {
      t.value.source = y.target.value, l.value = "", o();
    }
    function a() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function c() {
      const y = (await qi("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!y) return;
      const g = { id: a(), name: y, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, g], t.value.presetId = g.id, s.value = [], l.value = "", o();
    }
    async function f() {
      if (!n.value) return;
      const y = (await qi("改名为：", n.value.name))?.trim();
      y && (n.value.name = y, o());
    }
    async function p() {
      n.value && await Ue(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((y) => y.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", s.value = [], o());
    }
    function b(y) {
      t.value.presetId = y.target.value, s.value = [], l.value = "", o();
    }
    function T(y, g) {
      n.value && (n.value[y] = g.target.value.trim(), o());
    }
    async function v() {
      if (n.value) {
        r.value = !0, l.value = "测试中…";
        try {
          const y = await Zu(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          s.value = y.models, !n.value.model && y.models.length && (n.value.model = y.models[0], o()), l.value = `连接成功${y.models.length ? `，找到 ${y.models.length} 个模型` : ""}。`;
        } catch (y) {
          l.value = `连接失败：${Ro(y)}（${String(y?.message ?? y).slice(0, 120)}）`, s.value = await Uo(n.value).catch(() => []);
        } finally {
          r.value = !1;
        }
      }
    }
    function k(y) {
      const g = Math.floor(Number(y.target.value));
      if (!Number.isFinite(g) || g < 5) {
        Ee("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = g, o();
    }
    function S(y, g) {
      t.value[y] = g.target.checked, o();
    }
    return (y, g) => (C(), N("div", bd, [
      g[15] || (g[15] = h("h4", null, "副本事件检测", -1)),
      g[16] || (g[16] = h("p", { class: "rlzc-hint rlzc-intro" }, " 检测副本里预设的事件到底有没有发生。开启后，每轮AI写完正文，会另外请一个AI把这段正文读一遍：检查这一轮该发生的事件（比如「某人这一轮去了5楼」）有没有真的写出来，顺便记下谁在哪、发生了什么，下一轮提醒写正文的AI。它只检查、不写剧情。 ", -1)),
      g[17] || (g[17] = h("p", { class: "rlzc-hint" }, "不开也能正常玩，只是没人帮你检查。开启后每轮会多调用一次AI，会多一点费用。", -1)),
      h("label", yd, [
        g[8] || (g[8] = h("span", null, "用哪个AI检测", -1)),
        h("select", {
          class: "rlzc-input",
          value: t.value.source,
          onChange: A
        }, [...g[7] || (g[7] = [
          h("option", { value: "off" }, "关闭", -1),
          h("option", { value: "main" }, "跟随主API（和写正文的是同一个）", -1),
          h("option", { value: "preset" }, "自设API（另填一个）", -1)
        ])], 40, vd)
      ]),
      t.value.source === "preset" ? (C(), N(G, { key: 0 }, [
        h("div", _d, [
          h("select", {
            class: "rlzc-input",
            value: t.value.presetId,
            onChange: b
          }, [
            t.value.presets.length ? V("", !0) : (C(), N("option", kd, "还没有保存的API")),
            (C(!0), N(G, null, he(t.value.presets, (z) => (C(), N("option", {
              key: z.id,
              value: z.id
            }, R(z.name), 9, $d))), 128))
          ], 40, wd),
          h("button", {
            class: "rlzc-btn small",
            onClick: c
          }, "新建"),
          h("button", {
            class: "rlzc-btn ghost small",
            disabled: !n.value,
            onClick: f
          }, "改名", 8, Sd),
          h("button", {
            class: "rlzc-btn ghost small",
            disabled: !n.value,
            onClick: p
          }, "删除", 8, zd)
        ]),
        n.value ? (C(), N(G, { key: 0 }, [
          h("label", Ed, [
            g[9] || (g[9] = h("span", null, "地址", -1)),
            h("input", {
              class: "rlzc-input",
              value: n.value.url,
              placeholder: "https://…/v1",
              onChange: g[0] || (g[0] = (z) => T("url", z))
            }, null, 40, Cd)
          ]),
          h("label", Md, [
            g[10] || (g[10] = h("span", null, "密钥", -1)),
            h("span", Id, [
              h("input", {
                class: "rlzc-input",
                type: i.value ? "text" : "password",
                value: n.value.key,
                autocomplete: "off",
                onChange: g[1] || (g[1] = (z) => T("key", z))
              }, null, 40, Td),
              h("button", {
                class: "rlzc-btn ghost small",
                onClick: g[2] || (g[2] = (z) => i.value = !i.value)
              }, R(i.value ? "隐藏" : "显示"), 1)
            ])
          ]),
          h("label", Pd, [
            g[11] || (g[11] = h("span", null, "模型", -1)),
            s.value.length ? (C(), N("select", {
              key: 0,
              class: "rlzc-input",
              value: n.value.model,
              onChange: g[3] || (g[3] = (z) => T("model", z))
            }, [
              s.value.includes(n.value.model) ? V("", !0) : (C(), N("option", {
                key: 0,
                value: n.value.model
              }, R(n.value.model || "请选择…"), 9, Fd)),
              (C(!0), N(G, null, he(s.value, (z) => (C(), N("option", {
                key: z,
                value: z
              }, R(z), 9, Rd))), 128))
            ], 40, Nd)) : (C(), N("input", {
              key: 1,
              class: "rlzc-input",
              value: n.value.model,
              placeholder: "点「测试连接」拉取模型列表",
              onChange: g[4] || (g[4] = (z) => T("model", z))
            }, null, 40, Od))
          ]),
          h("div", jd, [
            h("button", {
              class: "rlzc-btn small",
              disabled: r.value || !n.value.url,
              onClick: v
            }, "测试连接", 8, Dd),
            h("small", Ld, R(l.value), 1)
          ])
        ], 64)) : V("", !0)
      ], 64)) : V("", !0),
      t.value.source !== "off" ? (C(), N(G, { key: 1 }, [
        h("label", Bd, [
          h("input", {
            type: "checkbox",
            checked: t.value.saveMode,
            onChange: g[5] || (g[5] = (z) => S("saveMode", z))
          }, null, 40, Vd),
          g[12] || (g[12] = Re("省钱模式：只在这一轮或下一轮有预设事件时才检测，其余轮不调用", -1))
        ]),
        h("label", Wd, [
          h("input", {
            type: "checkbox",
            checked: t.value.wait,
            onChange: g[6] || (g[6] = (z) => S("wait", z))
          }, null, 40, Ud),
          g[13] || (g[13] = Re("等检测完再写下一轮（关掉会更快，但写正文的AI可能拿到晚一轮的情况）", -1))
        ]),
        h("label", Gd, [
          g[14] || (g[14] = h("span", null, "超时（秒）", -1)),
          h("input", {
            type: "number",
            min: "5",
            class: "rlzc-input",
            value: t.value.timeoutSec,
            onChange: k
          }, null, 40, Yd)
        ])
      ], 64)) : V("", !0),
      t.value.source === "preset" ? (C(), N("p", Hd, "密钥保存在本机的酒馆设置里。分享设置文件或截图时，请注意不要带出密钥。")) : V("", !0)
    ]));
  }
}), Zd = { class: "rlzc-settings" }, Jd = { class: "rlzc-card" }, qd = ["value"], Qd = { class: "rlzc-hint" }, Xd = { class: "rlzc-card" }, ep = { class: "rlzc-depth" }, tp = { class: "rlzc-field" }, np = ["value"], sp = { class: "rlzc-field" }, ip = ["value"], rp = { class: "rlzc-field" }, op = ["value"], lp = { class: "rlzc-card" }, Ap = ["value", "onChange"], ap = { class: "rlzc-card" }, cp = {
  key: 0,
  class: "rlzc-list"
}, up = ["onClick"], fp = {
  key: 1,
  class: "rlzc-hint"
}, dp = {
  key: 2,
  class: "rlzc-errors"
}, pp = { class: "rlzc-card" }, hp = { class: "rlzc-check" }, mp = ["checked"], gp = { class: "rlzc-check" }, xp = ["checked"], bp = /* @__PURE__ */ ut({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ ke([]), n = /* @__PURE__ */ ke(null);
    function s(c, f) {
      const p = Math.max(0, Math.min(1e4, Math.floor(Number(f.target.value) || 0)));
      m.settings.depths[c] = p, ze();
    }
    async function i(c) {
      const f = c.target, p = f.files?.[0];
      f.value = "", p && (t.value = uf(await p.text()), t.value.length || Ee("success", `已导入副本包：${p.name}`));
    }
    async function r(c, f) {
      await Ue(`确定删除自定义副本包《${f}》吗？`) && ff(c);
    }
    const l = ["D", "C", "B", "A", "S"];
    function o(c, f) {
      const p = Math.floor(Number(f.target.value));
      !Number.isFinite(p) || p < 1 || (m.settings.genericCaps = { ...m.settings.genericCaps, [c]: p }, ze());
    }
    function A(c) {
      Mf(c.target.value);
    }
    function a(c, f) {
      m.settings[c] = f.target.checked, ze();
    }
    return (c, f) => (C(), N("div", Zd, [
      h("div", Jd, [
        f[7] || (f[7] = h("h4", null, "副本信息显示位置", -1)),
        h("select", {
          class: "rlzc-input",
          value: O(m).settings.panelDisplay,
          onChange: A
        }, [...f[6] || (f[6] = [
          h("option", { value: "panel" }, "扩展面板（默认）", -1),
          h("option", { value: "statusbar" }, "正文状态栏", -1)
        ])], 40, qd),
        h("p", Qd, R(O(m).settings.panelDisplay === "statusbar" ? "正文中保留 <副本> 标签，由你的状态栏显示；系统页不再显示时限、进度条、任务和 ps。" : "正文中隐藏 <副本> 标签，时限、进度条、任务和 ps 显示在系统页。") + " 两种方式下扩展都会读取 <副本> 做核对。 ", 1)
      ]),
      h("div", Xd, [
        f[11] || (f[11] = h("h4", null, "注入深度", -1)),
        f[12] || (f[12] = h("p", { class: "rlzc-hint rlzc-intro" }, " 在副本里，扩展每次生成前会往发给AI的内容里悄悄加三段说明（玩家看不到）。这里的数字决定每段插在聊天记录的哪个位置：0 = 紧跟在最新一条消息后面，数字越大越靠前（4 = 倒数第4条消息之前）。越靠后，AI越重视。一般不用改。 ", -1)),
        h("div", ep, [
          h("label", tp, [
            f[8] || (f[8] = h("span", null, [
              Re("副本暗号"),
              h("small", null, "如「【副本进行中：钟楼】」，用来触发世界书里这个副本的条目")
            ], -1)),
            h("input", {
              type: "number",
              min: "0",
              class: "rlzc-input",
              value: O(m).settings.depths.token,
              onChange: f[0] || (f[0] = (p) => s("token", p))
            }, null, 40, np)
          ]),
          h("label", sp, [
            f[9] || (f[9] = h("span", null, [
              Re("副本进度"),
              h("small", null, "副本名、阶段、第几轮、还剩多久、已发生的事件；开了事件检测时，检测到的副本状态也放在这个位置")
            ], -1)),
            h("input", {
              type: "number",
              min: "0",
              class: "rlzc-input",
              value: O(m).settings.depths.progress,
              onChange: f[1] || (f[1] = (p) => s("progress", p))
            }, null, 40, ip)
          ]),
          h("label", rp, [
            f[10] || (f[10] = h("span", null, [
              Re("本轮指令"),
              h("small", null, "这一轮必须发生的事件，以及状态栏时限一栏该写什么")
            ], -1)),
            h("input", {
              type: "number",
              min: "0",
              class: "rlzc-input",
              value: O(m).settings.depths.turn,
              onChange: f[2] || (f[2] = (p) => s("turn", p))
            }, null, 40, op)
          ])
        ])
      ]),
      De(Kd),
      h("div", lp, [
        f[13] || (f[13] = h("h4", null, "通用副本默认轮数上限", -1)),
        f[14] || (f[14] = h("p", { class: "rlzc-hint" }, "未收录的副本按等级取轮数上限；简报时限一行写了「（最多N轮）」时以简报为准。只影响之后进入的副本。", -1)),
        (C(), N(G, null, he(l, (p) => h("label", {
          key: p,
          class: "rlzc-field"
        }, [
          h("span", null, R(p) + " 级", 1),
          h("input", {
            type: "number",
            min: "1",
            class: "rlzc-input",
            value: O(m).settings.genericCaps[p],
            onChange: (b) => o(p, b)
          }, null, 40, Ap)
        ])), 64))
      ]),
      h("div", ap, [
        f[15] || (f[15] = h("h4", null, "自定义副本包", -1)),
        O(m).settings.customPacks.length ? (C(), N("ul", cp, [
          (C(!0), N(G, null, he(O(m).settings.customPacks, (p) => (C(), N("li", {
            key: p.id
          }, [
            h("span", null, [
              Re(R(p.level) + "｜" + R(p.name) + " ", 1),
              h("small", null, "v" + R(p.version), 1)
            ]),
            h("button", {
              class: "rlzc-btn ghost small",
              onClick: (b) => r(p.id, p.name)
            }, "删除", 8, up)
          ]))), 128))
        ])) : (C(), N("p", fp, "还没有导入自定义副本包。")),
        h("input", {
          ref_key: "fileInput",
          ref: n,
          type: "file",
          accept: ".json,application/json",
          hidden: "",
          onChange: i
        }, null, 544),
        h("button", {
          class: "rlzc-btn",
          onClick: f[3] || (f[3] = (p) => n.value?.click())
        }, "导入 JSON…"),
        t.value.length ? (C(), N("ul", dp, [
          (C(!0), N(G, null, he(t.value, (p, b) => (C(), N("li", { key: b }, R(p), 1))), 128))
        ])) : V("", !0)
      ]),
      h("div", pp, [
        f[18] || (f[18] = h("h4", null, "其他", -1)),
        h("label", hp, [
          h("input", {
            type: "checkbox",
            checked: O(m).settings.showBall,
            onChange: f[4] || (f[4] = (p) => a("showBall", p))
          }, null, 40, mp),
          f[16] || (f[16] = Re("显示悬浮球（关闭后可从扩展菜单打开面板）", -1))
        ]),
        h("label", gp, [
          h("input", {
            type: "checkbox",
            checked: O(m).settings.debug,
            onChange: f[5] || (f[5] = (p) => a("debug", p))
          }, null, 40, xp),
          f[17] || (f[17] = Re("调试模式（调试页允许手动修改，并在控制台输出日志）", -1))
        ])
      ])
    ]));
  }
}), yp = { class: "rlzc-debug" }, vp = {
  key: 0,
  class: "rlzc-note"
}, _p = {
  key: 0,
  class: "rlzc-note"
}, wp = {
  key: 1,
  class: "rlzc-note"
}, kp = {
  key: 2,
  class: "rlzc-card"
}, $p = { class: "rlzc-row" }, Sp = ["disabled"], zp = ["value"], Ep = ["disabled"], Cp = { class: "rlzc-row" }, Mp = ["disabled"], Ip = ["disabled"], Tp = {
  key: 3,
  class: "rlzc-card"
}, Pp = ["onUpdate:modelValue", "disabled"], Np = ["disabled"], Fp = { class: "rlzc-card" }, Rp = {
  key: 0,
  class: "rlzc-hint"
}, Op = { class: "rlzc-hint" }, jp = { class: "rlzc-list rlzc-warns" }, Dp = { class: "rlzc-card" }, Lp = {
  key: 0,
  class: "rlzc-list"
}, Bp = ["disabled", "onClick"], Vp = {
  key: 1,
  class: "rlzc-hint"
}, Wp = {
  key: 4,
  class: "rlzc-card"
}, Up = { class: "rlzc-pre" }, Gp = {
  key: 0,
  class: "rlzc-pre"
}, Yp = {
  class: "rlzc-card",
  open: ""
}, Hp = { class: "rlzc-pre" }, Kp = { class: "rlzc-card" }, Zp = { class: "rlzc-pre" }, Jp = { class: "rlzc-card" }, qp = { class: "rlzc-pre" }, Qp = { class: "rlzc-card" }, Xp = { class: "rlzc-table" }, eh = ["disabled"], th = /* @__PURE__ */ ut({
  __name: "DebugTab",
  setup(e) {
    const t = ne(() => m.settings.debug), n = /* @__PURE__ */ ke(""), s = /* @__PURE__ */ ke(null), i = /* @__PURE__ */ Kn({});
    Jn(
      () => [m.tick, m.pack?.id],
      () => {
        for (const k of Object.keys(i)) delete i[k];
        const v = Jo() ?? {};
        for (const k of m.pack?.roles ?? []) i[k] = v[k] ?? "";
      },
      { immediate: !0 }
    );
    const r = ne(() => {
      m.tick;
      const v = Ae(), k = [], S = m.session?.entryIndex ?? 0;
      for (let y = S; y < v.length; y++) {
        const g = v[y]?.extra?.rlzc;
        g && k.push({ index: y, snap: g });
      }
      return k.reverse().slice(0, 60);
    }), l = ne(
      () => new Set((m.audit?.warnings ?? []).filter((v) => v.kind === "limit" || v.kind === "eventMissed").map((v) => v.index))
    ), o = ne(() => {
      if (m.tick, !m.session || !m.pack || !m.progress) return null;
      const v = Ae(), k = is(v, m.progress.entryIndex);
      let S = null;
      for (let y = v.length - 1; y >= m.progress.entryIndex; y--) {
        const g = v[y]?.extra?.rlzc?.sub;
        if (g) {
          S = g;
          break;
        }
      }
      return {
        text: k ? jo(m.pack, k.state) : "",
        state: k?.state ?? null,
        record: S
      };
    }), A = { done: "✓", missed: "✗", void: "–" };
    function a(v) {
      if (!v.sub && !v.skippedEvents?.length) return "";
      const k = [];
      v.sub?.skipped && k.push(`未更新（${v.sub.error ?? ""}）`);
      for (const S of v.sub?.events ?? []) k.push(`${S.id}${A[S.status]}`);
      for (const S of v.skippedEvents ?? []) k.push(`跳过${S.id}`);
      return v.sub && !v.sub.skipped && !k.length && k.push("已整理"), k.join(" ");
    }
    const c = ne(() => {
      const v = m.progress;
      if (!v) return null;
      const { perMessage: k, phase: S, next: y, ...g } = v;
      return {
        phase: S.id + " " + S.name,
        ...g,
        next: y ? { round: y.round, skipFrom: y.skipFrom, events: y.events.map((z) => z.id) } : null,
        messages: Object.keys(k).length
      };
    });
    function f() {
      n.value && bf(n.value);
    }
    function p() {
      s.value !== null && s.value >= 0 && yf(s.value);
    }
    function b() {
      vf({ ...i });
    }
    const T = (v) => JSON.stringify(v, null, 2);
    return (v, k) => (C(), N("div", yp, [
      O(m).session ? (C(), N(G, { key: 1 }, [
        t.value ? V("", !0) : (C(), N("p", _p, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        O(m).pack && O(m).session.packVersion !== O(m).pack.version ? (C(), N("p", wp, " 入场时副本包版本为 " + R(O(m).session.packVersion) + "，当前为 " + R(O(m).pack.version) + "。 ", 1)) : V("", !0),
        O(m).pack?.phases.length ? (C(), N("div", kp, [
          k[4] || (k[4] = h("h4", null, "手动修正", -1)),
          h("div", $p, [
            wn(h("select", {
              "onUpdate:modelValue": k[0] || (k[0] = (S) => n.value = S),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              k[3] || (k[3] = h("option", { value: "" }, "切换到阶段…", -1)),
              (C(!0), N(G, null, he(O(m).pack.phases, (S) => (C(), N("option", {
                key: S.id,
                value: S.id
              }, R(S.name), 9, zp))), 128))
            ], 8, Sp), [
              [uo, n.value]
            ]),
            h("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: f
            }, "切换", 8, Ep)
          ]),
          h("div", Cp, [
            wn(h("input", {
              "onUpdate:modelValue": k[1] || (k[1] = (S) => s.value = S),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, Mp), [
              [
                Vi,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            h("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: p
            }, "修正轮次", 8, Ip)
          ])
        ])) : V("", !0),
        O(m).pack?.roles?.length ? (C(), N("div", Tp, [
          k[5] || (k[5] = h("h4", null, "角色登记", -1)),
          (C(!0), N(G, null, he(O(m).pack.roles, (S) => (C(), N("label", {
            key: S,
            class: "rlzc-field"
          }, [
            h("span", null, R(S), 1),
            wn(h("input", {
              "onUpdate:modelValue": (y) => i[S] = y,
              class: "rlzc-input",
              disabled: !t.value,
              placeholder: "未登记"
            }, null, 8, Pp), [
              [Vi, i[S]]
            ])
          ]))), 128)),
          h("button", {
            class: "rlzc-btn small",
            disabled: !t.value,
            onClick: b
          }, "保存登记", 8, Np)
        ])) : V("", !0),
        h("div", Fp, [
          k[7] || (k[7] = h("h4", null, "<副本> 核对", -1)),
          O(m).audit?.warnings.length ? (C(), N(G, { key: 1 }, [
            h("p", Op, "共 " + R(O(m).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            h("ul", jp, [
              (C(!0), N(G, null, he(O(m).audit.warnings.slice(-30).reverse(), (S, y) => (C(), N("li", { key: y }, [
                h("span", null, [
                  h("small", null, "#" + R(S.index) + "｜" + R(S.phase) + "第" + R(S.round) + "轮", 1),
                  k[6] || (k[6] = h("br", null, null, -1)),
                  Re("⚠️ " + R(S.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (C(), N("p", Rp, "没有发现问题。"))
        ]),
        h("div", Dp, [
          k[8] || (k[8] = h("h4", null, "手动操作记录", -1)),
          O(m).session.manual.length ? (C(), N("ul", Lp, [
            (C(!0), N(G, null, he(O(m).session.manual, (S, y) => (C(), N("li", { key: y }, [
              h("code", null, "#" + R(S.atIndex) + " " + R(S.kind) + " " + R("phase" in S ? S.phase : "") + R("round" in S ? S.round : "") + R("targetPhase" in S ? `${S.targetPhase}:${S.targetRound}` : ""), 1),
              h("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (g) => O(_f)(y)
              }, "撤销", 8, Bp)
            ]))), 128))
          ])) : (C(), N("p", Vp, "无"))
        ]),
        o.value && (o.value.state || o.value.record) ? (C(), N("details", Wp, [
          k[9] || (k[9] = h("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          h("pre", Up, R(o.value.text || "（尚无状态）"), 1),
          o.value.record ? (C(), N("pre", Gp, R(T(o.value.record)), 1)) : V("", !0),
          k[10] || (k[10] = h("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : V("", !0),
        h("details", Yp, [
          k[11] || (k[11] = h("summary", null, "本次注入", -1)),
          h("pre", Hp, R([O(m).lastInjection.token, O(m).lastInjection.progress, O(m).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        h("details", Kp, [
          k[12] || (k[12] = h("summary", null, "重放结果", -1)),
          h("pre", Zp, R(T(c.value)), 1)
        ]),
        h("details", Jp, [
          k[13] || (k[13] = h("summary", null, "会话原始数据", -1)),
          h("pre", qp, R(T(O(m).session)), 1)
        ]),
        h("details", Qp, [
          k[15] || (k[15] = h("summary", null, "每楼快照（最近60条）", -1)),
          h("table", Xp, [
            k[14] || (k[14] = h("thead", null, [
              h("tr", null, [
                h("th", null, "楼"),
                h("th", null, "阶段"),
                h("th", null, "轮"),
                h("th", null, "钟时"),
                h("th", null, "时限"),
                h("th", null, "事件"),
                h("th", null, "检测")
              ])
            ], -1)),
            h("tbody", null, [
              (C(!0), N(G, null, he(r.value, (S) => (C(), N("tr", {
                key: S.index,
                class: ct({ "rlzc-row-warn": l.value.has(S.index) })
              }, [
                h("td", null, R(S.index) + R(S.snap.entry ? "★" : ""), 1),
                h("td", null, R(S.snap.phase), 1),
                h("td", null, R(S.snap.round), 1),
                h("td", null, R(S.snap.clock ?? ""), 1),
                h("td", null, R(S.snap.limit?.text ?? ""), 1),
                h("td", null, R(S.snap.injected.join(" ")), 1),
                h("td", null, R(a(S.snap)), 1)
              ], 2))), 128))
            ])
          ])
        ]),
        h("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: k[2] || (k[2] = //@ts-ignore
          (...S) => O(sr) && O(sr)(...S))
        }, "删除副本会话", 8, eh)
      ], 64)) : (C(), N("p", vp, "当前聊天没有副本会话。"))
    ]));
  }
}), nh = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, sh = { class: "rlzc-head" }, ih = { class: "rlzc-tabs" }, rh = ["onClick"], oh = { class: "rlzc-body" }, lh = /* @__PURE__ */ ut({
  __name: "Panel",
  setup(e) {
    const t = [
      { id: "system", label: "系统" },
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
    return (s, i) => (C(), N("div", {
      class: "rlzc-backdrop",
      onClick: i[1] || (i[1] = ma((r) => O(m).panelOpen = !1, ["self"]))
    }, [
      h("section", nh, [
        h("header", sh, [
          i[2] || (i[2] = h("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          h("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: i[0] || (i[0] = (r) => O(m).panelOpen = !1)
          }, "×")
        ]),
        h("nav", ih, [
          (C(), N(G, null, he(t, (r) => h("button", {
            key: r.id,
            class: ct({ on: O(m).tab === r.id }),
            onClick: (l) => n(r.id)
          }, R(r.label), 11, rh)), 64))
        ]),
        h("div", oh, [
          O(m).tab === "system" ? (C(), st(xd, { key: 0 })) : O(m).tab === "settings" ? (C(), st(bp, { key: 1 })) : O(m).tab === "debug" && O(m).debugUnlocked ? (C(), st(th, { key: 2 })) : V("", !0)
        ])
      ])
    ]));
  }
}), Ah = /* @__PURE__ */ ut({
  __name: "App",
  setup(e) {
    return (t, n) => (C(), N(G, null, [
      O(m).settings.showBall ? (C(), st(Tf, { key: 0 })) : V("", !0),
      O(m).panelOpen ? (C(), st(lh, { key: 1 })) : V("", !0)
    ], 64));
  }
}), ah = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field{align-items:flex-start}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-depth .rlzc-field>.rlzc-input{flex:0 0 72px;width:72px}';
function ch(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function sl(e, t, n) {
  const s = re().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function uh() {
  const e = ch();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await sl("/api/extensions/version", e, t);
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
async function fh(e) {
  const t = await sl("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const lr = "rlzc-host", Ar = "rlzc-menu-btn", ar = "rlzc-settings-drawer";
function dh() {
  if (document.getElementById(lr)) return;
  const e = document.createElement("div");
  e.id = lr, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = ah, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), ba(Ah).mount(s), il(), rl();
}
function il(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => il(e + 1), 500);
    return;
  }
  if (document.getElementById(Ar)) return;
  const n = document.createElement("div");
  n.id = Ar, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const i = document.createElement("span");
  i.textContent = "回廊种菜系统", n.append(s, i), n.addEventListener("click", () => {
    m.panelOpen = !m.panelOpen;
  }), t.appendChild(n);
}
function rl(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => rl(e + 1), 500);
    return;
  }
  if (document.getElementById(ar)) return;
  const n = (ee, me = "", ge = "") => {
    const Ge = document.createElement(ee);
    return me && (Ge.className = me), ge && (Ge.textContent = ge), Ge;
  }, s = n("div");
  s.id = ar;
  const i = n("div", "inline-drawer"), r = n("div", "inline-drawer-toggle inline-drawer-header"), l = n("div", "flex-container alignitemscenter margin0"), o = n("small", "rlzc-update-badge", "有更新");
  o.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", l.append(n("b", "", "回廊种菜系统"), o), r.append(l, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const A = n("div", "inline-drawer-content"), a = n("div", "menu_button menu_button_icon", "打开面板");
  a.prepend(n("i", "fa-solid fa-seedling")), a.addEventListener("click", () => m.panelOpen = !0);
  const c = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  c.addEventListener("click", () => {
    m.settings.ball = { x: null, y: null }, m.settings.showBall = !0, ze();
  });
  const f = n("label", "checkbox_label"), p = document.createElement("input");
  p.type = "checkbox", p.addEventListener("change", () => {
    m.settings.showBall = p.checked, ze();
  }), f.append(p, n("span", "", "显示悬浮球")), Jn(() => m.settings.showBall, (ee) => p.checked = ee, { immediate: !0 });
  const b = n("div", "flex-container");
  b.append(a, c);
  const T = n("div", "flex-container alignitemscenter"), v = n("small", "rlzc-update-status", "正在检查更新…"), k = n("div", "menu_button menu_button_icon", "检查更新"), S = n("div", "menu_button menu_button_icon", "立即更新"), y = n("div", "menu_button menu_button_icon", "刷新页面");
  S.style.display = "none", y.style.display = "none", T.append(v, k, S, y);
  let g = null, z = !1;
  const J = async () => {
    if (!z) {
      z = !0, v.textContent = "正在检查更新…", S.style.display = "none";
      try {
        g = await uh();
        const ee = g.commit ? `（${g.commit}）` : "";
        g.isGit ? g.isUpToDate ? v.textContent = `已是最新版本${ee}` : (v.textContent = `有新版本可以更新，当前${ee || "版本较旧"}`, S.style.display = "") : v.textContent = "不是用仓库地址安装的，无法检查更新。", o.style.display = g.isGit && !g.isUpToDate ? "" : "none";
      } catch (ee) {
        v.textContent = `检查更新失败：${ee.message}`;
      } finally {
        z = !1;
      }
    }
  };
  k.addEventListener("click", () => void J()), S.addEventListener("click", async () => {
    if (!(!g || z)) {
      z = !0, v.textContent = "正在更新…", S.style.display = "none";
      try {
        await fh(g), o.style.display = "none", v.textContent = "更新完成，刷新页面后生效。", y.style.display = "";
      } catch (ee) {
        v.textContent = `更新失败：${ee.message}`, S.style.display = "";
      } finally {
        z = !1;
      }
    }
  }), y.addEventListener("click", () => location.reload()), setTimeout(() => void J(), 3e3), A.append(b, f, T, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), i.append(r, A), s.append(i), t.append(s);
}
globalThis.rlzcInterceptor = mf;
function Ms() {
  cf(), Xe("MESSAGE_RECEIVED", (e, t) => Cf(Number(e), t)), Xe("CHARACTER_MESSAGE_RENDERED", (e) => Es(Number(e))), Xe("MESSAGE_DELETED", () => zs()), Xe("MESSAGE_SWIPED", (e) => {
    gf(Number(e)), Es(Number(e));
  }), Xe("MESSAGE_EDITED", () => zs()), Xe("MESSAGE_UPDATED", (e) => {
    zs(), Es(Number(e));
  }), Xe("CHAT_CHANGED", () => rr()), Xe("MORE_MESSAGES_LOADED", () => ci()), dh(), rr(), console.log("[rlzc] 回廊种菜系统已加载", m.settings);
}
const cr = window.jQuery;
typeof cr == "function" ? cr(() => Ms()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ms) : Ms();
