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
const ee = {}, _t = [], zt = () => {
}, ur = () => !1, Bn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Vn = (e) => e.startsWith("onUpdate:"), Me = Object.assign, dr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Al = Object.prototype.hasOwnProperty, Q = (e, t) => Al.call(e, t), W = Array.isArray, nt = (e) => un(e) === "[object Map]", Et = (e) => un(e) === "[object Set]", mi = (e) => un(e) === "[object Date]", J = (e) => typeof e == "function", re = (e) => typeof e == "string", De = (e) => typeof e == "symbol", te = (e) => e !== null && typeof e == "object", fr = (e) => (te(e) || J(e)) && J(e.then) && J(e.catch), pr = Object.prototype.toString, un = (e) => pr.call(e), al = (e) => un(e).slice(8, -1), hr = (e) => un(e) === "[object Object]", Ws = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zt = /* @__PURE__ */ Vs(
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
), je = (e, t) => !Object.is(e, t), wn = (e, ...t) => {
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
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = re(s) ? hl(s) : Yn(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (re(e) || te(e))
    return e;
}
const dl = /;(?![^(]*\))/g, fl = /:([^]+)/, pl = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function hl(e) {
  const t = {};
  return e.replace(pl, (n) => n.startsWith("/*") ? "" : n).split(dl).forEach((n) => {
    if (n) {
      const s = n.split(fl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function be(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (W(e))
    for (let n = 0; n < e.length; n++) {
      const s = be(e[n]);
      s && (t += s + " ");
    }
  else if (te(e))
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
    s = ot(e[i], t[i], n);
  return s;
}
function xi(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const r of e) {
    let l = -1;
    for (let o = 0; o < s.length; o++)
      if (!i[o] && ot(r, s[o], n)) {
        l = o;
        break;
      }
    if (l < 0) return !1;
    i[l] = 1;
  }
  return !0;
}
function bl(e, t, n) {
  let s = nt(e), i = nt(t);
  if (s || i || (s = Et(e), i = Et(t), s || i))
    return s && i ? xi(e, t, n) : !1;
  const r = Object.keys(e).length, l = Object.keys(t).length;
  if (r !== l)
    return !1;
  for (const o in e) {
    const A = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
    if (A && !a || !A && a || !ot(e[o], t[o], n))
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
function ot(e, t, n) {
  if (e === t) return !0;
  let s = mi(e), i = mi(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = De(e), i = De(t), s || i ? e === t : (s = W(e), i = W(t), s || i ? s && i ? bi(e, t, n, xl) : !1 : (s = te(e), i = te(t), s || i ? !s || !i ? !1 : bi(e, t, n, bl) : String(e) === String(t))));
}
function vl(e, t) {
  return e.findIndex((n) => ot(n, t));
}
const br = (e) => !!(e && e.__v_isRef === !0), O = (e) => re(e) ? e : e == null ? "" : W(e) || te(e) && (e.toString === pr || !J(e.toString)) ? br(e) ? O(e.value) : JSON.stringify(e, vr, 2) : String(e), vr = (e, t) => br(t) ? vr(e, t.value) : nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[us(s, r) + " =>"] = i, n),
    {}
  )
} : Et(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => us(n))
} : De(t) ? us(t) : te(t) && !W(t) && !hr(t) ? String(t) : t, us = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    De(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ae;
class yl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ae && (Ae.active ? (this.parent = Ae, this.index = (Ae.scopes || (Ae.scopes = [])).push(
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
      const n = Ae;
      try {
        return Ae = this, t();
      } finally {
        Ae = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ae, Ae = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ae === this)
        Ae = this.prevScope;
      else {
        let t = Ae;
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
function wl() {
  return Ae;
}
let X;
const ds = /* @__PURE__ */ new WeakSet();
class yr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ae && (Ae.active ? Ae.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ds.has(this) && (ds.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _r(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, vi(this), kr(this);
    const t = X, n = Se;
    X = this, Se = !0;
    try {
      return this.fn();
    } finally {
      zr(this), X = t, Se = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ys(t);
      this.deps = this.depsTail = void 0, vi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ds.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let wr = 0, Jt, qt;
function _r(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qt, qt = e;
    return;
  }
  e.next = Jt, Jt = e;
}
function Us() {
  wr++;
}
function Gs() {
  if (--wr > 0)
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
function zr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Ys(s), _l(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Is(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($r(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $r(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nn) || (e.globalVersion = nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Is(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = X, s = Se;
  X = e, Se = !0;
  try {
    kr(e);
    const i = e.fn(e._value);
    (t.version === 0 || je(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    X = n, Se = s, zr(e), e.flags &= -3;
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
function _l(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Se = !0;
const Sr = [];
function lt() {
  Sr.push(Se), Se = !1;
}
function At() {
  const e = Sr.pop();
  Se = e === void 0 ? !0 : e;
}
function vi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = X;
    X = void 0;
    try {
      t();
    } finally {
      X = n;
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
    if (!X || !Se || X === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== X)
      n = this.activeLink = new kl(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, Er(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = X.depsTail, n.nextDep = void 0, X.depsTail.nextDep = n, X.depsTail = n, X.deps === n && (X.deps = s);
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
const Ts = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ Symbol(
  ""
), Ps = /* @__PURE__ */ Symbol(
  ""
), sn = /* @__PURE__ */ Symbol(
  ""
);
function ce(e, t, n) {
  if (Se && X) {
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
    const A = W(e), a = A && Ws(n);
    if (A && n === "length") {
      const c = Number(s);
      l.forEach((d, h) => {
        (h === "length" || h === sn || !De(h) && h >= c) && o(d);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && o(l.get(n)), a && o(l.get(sn)), t) {
        case "add":
          A ? a && o(l.get("length")) : (o(l.get($t)), nt(e) && o(l.get(Ps)));
          break;
        case "delete":
          A || (o(l.get($t)), nt(e) && o(l.get(Ps)));
          break;
        case "set":
          nt(e) && o(l.get($t));
          break;
      }
  }
  Gs();
}
function Pt(e) {
  const t = /* @__PURE__ */ H(e);
  return t === e || (ce(t, "iterate", sn), /* @__PURE__ */ ke(e)) ? t : /* @__PURE__ */ Be(e) ? /* @__PURE__ */ st(e) ? t.map((n) => at(ze(n))) : t.map(at) : t.map(ze);
}
function Hn(e) {
  return ce(e = /* @__PURE__ */ H(e), "iterate", sn), e;
}
function Re(e, t) {
  return /* @__PURE__ */ Be(e) ? at(/* @__PURE__ */ st(e) ? ze(t) : t) : ze(t);
}
const zl = {
  __proto__: null,
  [Symbol.iterator]() {
    return fs(this, Symbol.iterator, (e) => Re(this, e));
  },
  concat(...e) {
    return Pt(this).concat(
      ...e.map((t) => W(t) ? Pt(t) : t)
    );
  },
  entries() {
    return fs(this, "entries", (e) => (e[1] = Re(this, e[1]), e));
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
      (n) => n.map((s) => Re(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ye(
      this,
      "find",
      e,
      t,
      (n) => Re(this, n),
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
      (n) => Re(this, n),
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
    return yi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return yi(this, "reduceRight", e, t);
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
    return fs(this, "values", (e) => Re(this, e));
  }
};
function fs(e, t, n) {
  const s = Hn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ ke(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const $l = Array.prototype;
function Ye(e, t, n, s, i, r) {
  const l = Hn(e), o = l !== e && !/* @__PURE__ */ ke(e), A = l[t];
  if (A !== $l[t]) {
    const d = A.apply(e, r);
    return o ? ze(d) : d;
  }
  let a = n;
  l !== e && (o ? a = function(d, h) {
    return n.call(this, Re(e, d), h, e);
  } : n.length > 2 && (a = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const c = A.call(l, a, s);
  return o && i ? i(c) : c;
}
function yi(e, t, n, s) {
  const i = Hn(e), r = i !== e && !/* @__PURE__ */ ke(e);
  let l = n, o = !1;
  i !== e && (r ? (o = s.length === 0, l = function(a, c, d) {
    return o && (o = !1, a = Re(e, a)), n.call(this, a, Re(e, c), d, e);
  }) : n.length > 3 && (l = function(a, c, d) {
    return n.call(this, a, c, d, e);
  }));
  const A = i[t](l, ...s);
  return o ? Re(e, A) : A;
}
function ps(e, t, n) {
  const s = /* @__PURE__ */ H(e);
  ce(s, "iterate", sn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Js(n[0]) ? (n[0] = /* @__PURE__ */ H(n[0]), s[t](...n)) : i;
}
function Wt(e, t, n = []) {
  lt(), Us();
  const s = (/* @__PURE__ */ H(e))[t].apply(e, n);
  return Gs(), At(), s;
}
const Sl = /* @__PURE__ */ Vs("__proto__,__v_isRef,__isVue"), Cr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(De)
);
function El(e) {
  De(e) || (e = String(e));
  const t = /* @__PURE__ */ H(this);
  return ce(t, "has", e), t.hasOwnProperty(e);
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
    const l = W(t);
    if (!i) {
      let A;
      if (l && (A = zl[n]))
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
    if ((De(n) ? Cr.has(n) : Sl(n)) || (i || ce(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ fe(o)) {
      const A = l && Ws(n) ? o : o.value;
      return i && te(A) ? /* @__PURE__ */ Fs(A) : A;
    }
    return te(o) ? i ? /* @__PURE__ */ Fs(o) : /* @__PURE__ */ Kn(o) : o;
  }
}
class Ir extends Mr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const l = W(t) && Ws(n);
    if (!this._isShallow) {
      const a = /* @__PURE__ */ Be(r);
      if (!/* @__PURE__ */ ke(s) && !/* @__PURE__ */ Be(s) && (r = /* @__PURE__ */ H(r), s = /* @__PURE__ */ H(s)), !l && /* @__PURE__ */ fe(r) && !/* @__PURE__ */ fe(s))
        return a || (r.value = s), !0;
    }
    const o = l ? Number(n) < t.length : Q(t, n), A = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ fe(t) ? t : i
    );
    return t === /* @__PURE__ */ H(i) && A && (o ? je(s, r) && Ze(t, "set", n, s) : Ze(t, "add", n, s)), A;
  }
  deleteProperty(t, n) {
    const s = Q(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && Ze(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!De(n) || !Cr.has(n)) && ce(t, "has", n), s;
  }
  ownKeys(t) {
    return ce(
      t,
      "iterate",
      W(t) ? "length" : $t
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
    const i = this.__v_raw, r = /* @__PURE__ */ H(i), l = nt(r), o = e === "entries" || e === Symbol.iterator && l, A = e === "keys" && l, a = i[e](...s), c = n ? Ns : t ? at : ze;
    return !t && ce(
      r,
      "iterate",
      A ? Ps : $t
    ), Me(
      // inheriting all iterator properties
      Object.create(a),
      {
        // iterator protocol
        next() {
          const { value: d, done: h } = a.next();
          return h ? { value: d, done: h } : {
            value: o ? [c(d[0]), c(d[1])] : c(d),
            done: h
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
      const r = this.__v_raw, l = /* @__PURE__ */ H(r), o = /* @__PURE__ */ H(i);
      e || (je(i, o) && ce(l, "get", i), ce(l, "get", o));
      const { has: A } = mn(l), a = t ? Ns : e ? at : ze;
      if (A.call(l, i))
        return a(r.get(i));
      if (A.call(l, o))
        return a(r.get(o));
      r !== l && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ce(/* @__PURE__ */ H(i), "iterate", $t), i.size;
    },
    has(i) {
      const r = this.__v_raw, l = /* @__PURE__ */ H(r), o = /* @__PURE__ */ H(i);
      return e || (je(i, o) && ce(l, "has", i), ce(l, "has", o)), i === o ? r.has(i) : r.has(i) || r.has(o);
    },
    forEach(i, r) {
      const l = this, o = l.__v_raw, A = /* @__PURE__ */ H(o), a = t ? Ns : e ? at : ze;
      return !e && ce(A, "iterate", $t), o.forEach((c, d) => i.call(r, a(c), a(d), l));
    }
  };
  return Me(
    n,
    e ? {
      add: gn("add"),
      set: gn("set"),
      delete: gn("delete"),
      clear: gn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ H(this), l = mn(r), o = /* @__PURE__ */ H(i), A = !t && !/* @__PURE__ */ ke(i) && !/* @__PURE__ */ Be(i) ? o : i;
        return l.has.call(r, A) || je(i, A) && l.has.call(r, i) || je(o, A) && l.has.call(r, o) || (r.add(A), Ze(r, "add", A, A)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ ke(r) && !/* @__PURE__ */ Be(r) && (r = /* @__PURE__ */ H(r));
        const l = /* @__PURE__ */ H(this), { has: o, get: A } = mn(l);
        let a = o.call(l, i);
        a || (i = /* @__PURE__ */ H(i), a = o.call(l, i));
        const c = A.call(l, i);
        return l.set(i, r), a ? je(r, c) && Ze(l, "set", i, r) : Ze(l, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ H(this), { has: l, get: o } = mn(r);
        let A = l.call(r, i);
        A || (i = /* @__PURE__ */ H(i), A = l.call(r, i)), o && o.call(r, i);
        const a = r.delete(i);
        return A && Ze(r, "delete", i, void 0), a;
      },
      clear() {
        const i = /* @__PURE__ */ H(this), r = i.size !== 0, l = i.clear();
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
    Q(n, i) && i in s ? n : s,
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
function Ll(e) {
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
function Dl(e) {
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
  if (!te(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const l = Ll(al(e));
  if (l === 0)
    return e;
  const o = new Proxy(
    e,
    l === 2 ? s : n
  );
  return i.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return /* @__PURE__ */ Be(e) ? /* @__PURE__ */ st(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Js(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function H(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ H(t) : e;
}
function Bl(e) {
  return !Q(e, "__v_skip") && Object.isExtensible(e) && gr(e, "__v_skip", !0), e;
}
const ze = (e) => te(e) ? /* @__PURE__ */ Kn(e) : e, at = (e) => te(e) ? /* @__PURE__ */ Fs(e) : e;
// @__NO_SIDE_EFFECTS__
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return Vl(e, !1);
}
function Vl(e, t) {
  return /* @__PURE__ */ fe(e) ? e : new Wl(e, t);
}
class Wl {
  constructor(t, n) {
    this.dep = new Hs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ H(t), this._value = n ? t : ze(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ ke(t) || /* @__PURE__ */ Be(t);
    t = s ? t : /* @__PURE__ */ H(t), je(t, n) && (this._rawValue = t, this._value = s ? t : ze(t), this.dep.trigger());
  }
}
function j(e) {
  return /* @__PURE__ */ fe(e) ? e.value : e;
}
const Ul = {
  get: (e, t, n) => t === "__v_raw" ? e : j(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ fe(i) && !/* @__PURE__ */ fe(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Fr(e) {
  return /* @__PURE__ */ st(e) ? e : new Proxy(e, Ul);
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
    X !== this)
      return _r(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return $r(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Yl(e, t, n = !1) {
  let s, i;
  return J(e) ? s = e : (s = e.get, i = e.set), new Gl(s, i, n);
}
const xn = {}, En = /* @__PURE__ */ new WeakMap();
let yt;
function Hl(e, t = !1, n = yt) {
  if (n) {
    let s = En.get(n);
    s || En.set(n, s = []), s.push(e);
  }
}
function Kl(e, t, n = ee) {
  const { immediate: s, deep: i, once: r, scheduler: l, augmentJob: o, call: A } = n, a = (I) => i ? I : /* @__PURE__ */ ke(I) || i === !1 || i === 0 ? Je(I, 1) : Je(I);
  let c, d, h, x, F = !1, v = !1;
  if (/* @__PURE__ */ fe(e) ? (d = () => e.value, F = /* @__PURE__ */ ke(e)) : /* @__PURE__ */ st(e) ? (d = () => a(e), F = !0) : W(e) ? (v = !0, F = e.some((I) => /* @__PURE__ */ st(I) || /* @__PURE__ */ ke(I)), d = () => e.map((I) => {
    if (/* @__PURE__ */ fe(I))
      return I.value;
    if (/* @__PURE__ */ st(I))
      return a(I);
    if (J(I))
      return A ? A(I, 2) : I();
  })) : J(e) ? t ? d = A ? () => A(e, 2) : e : d = () => {
    if (h) {
      lt();
      try {
        h();
      } finally {
        At();
      }
    }
    const I = yt;
    yt = c;
    try {
      return A ? A(e, 3, [x]) : e(x);
    } finally {
      yt = I;
    }
  } : d = zt, t && i) {
    const I = d, L = i === !0 ? 1 / 0 : i;
    d = () => Je(I(), L);
  }
  const _ = wl(), z = () => {
    c.stop(), _ && _.active && dr(_.effects, c);
  };
  if (r && t) {
    const I = t;
    t = (...L) => {
      const E = I(...L);
      return z(), E;
    };
  }
  let M = v ? new Array(e.length).fill(xn) : xn;
  const b = (I) => {
    if (!(!(c.flags & 1) || !c.dirty && !I))
      if (t) {
        const L = c.run();
        if (I || i || F || (v ? L.some((E, G) => je(E, M[G])) : je(L, M))) {
          h && h();
          const E = yt;
          yt = c;
          try {
            const G = [
              L,
              // pass undefined as the old value when it's changed for the first time
              M === xn ? void 0 : v && M[0] === xn ? [] : M,
              x
            ];
            M = L, A ? A(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            yt = E;
          }
        }
      } else
        c.run();
  };
  return o && o(b), c = new yr(d), c.scheduler = l ? () => l(b, !1) : b, x = (I) => Hl(I, !1, c), h = c.onStop = () => {
    const I = En.get(c);
    if (I) {
      if (A)
        A(I, 4);
      else
        for (const L of I) L();
      En.delete(c);
    }
  }, t ? s ? b(!0) : M = c.run() : l ? l(b.bind(null, !0), !0) : c.run(), z.pause = c.pause.bind(c), z.resume = c.resume.bind(c), z.stop = z, z;
}
function Je(e, t = 1 / 0, n) {
  if (t <= 0 || !te(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ fe(e))
    Je(e.value, t, n);
  else if (W(e))
    for (let s = 0; s < e.length; s++)
      Je(e[s], t, n);
  else if (Et(e) || nt(e))
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
function dn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Zn(i, t, n);
  }
}
function Ve(e, t, n, s) {
  if (J(e)) {
    const i = dn(e, t, n, s);
    return i && fr(i) && i.catch((r) => {
      Zn(r, t, n);
    }), i;
  }
  if (W(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ve(e[r], t, n, s));
    return i;
  }
}
function Zn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: l } = t && t.appContext.config || ee;
  if (t) {
    let o = t.parent;
    const A = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, A, a) === !1)
            return;
      }
      o = o.parent;
    }
    if (r) {
      lt(), dn(r, null, 10, [
        e,
        A,
        a
      ]), At();
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
const de = [];
let Fe = -1;
const Rt = [];
let et = null, Nt = 0;
const Rr = /* @__PURE__ */ Promise.resolve();
let Cn = null;
function Or(e) {
  const t = Cn || Rr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Jl(e) {
  let t = Fe + 1, n = de.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = de[s], r = rn(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function qs(e) {
  if (!(e.flags & 1)) {
    const t = rn(e), n = de[de.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rn(n) ? de.push(e) : de.splice(Jl(t), 0, e), e.flags |= 1, jr();
  }
}
function jr() {
  Cn || (Cn = Rr.then(Dr));
}
function ql(e) {
  if (!W(e))
    et && e.id === -1 ? et.splice(Nt + 1, 0, e) : e.flags & 1 || (Rt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Rt.push(e[t]);
  jr();
}
function wi(e, t, n = Fe + 1) {
  for (; n < de.length; n++) {
    const s = de[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      de.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Lr(e) {
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
function Dr(e) {
  try {
    for (Fe = 0; Fe < de.length; Fe++) {
      const t = de[Fe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), dn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fe < de.length; Fe++) {
      const t = de[Fe];
      t && (t.flags &= -2);
    }
    Fe = -1, de.length = 0, Lr(), Cn = null, (de.length || Rt.length) && Dr();
  }
}
let _e = null, Br = null;
function Mn(e) {
  const t = _e;
  return _e = e, Br = e && e.type.__scopeId || null, t;
}
function Ql(e, t = _e, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Ci(-1);
    const r = Mn(t), l = St.length;
    let o;
    try {
      o = e(...i);
    } finally {
      for (let A = St.length; A > l; A--) io();
      Mn(r), s._d && Ci(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function _n(e, t) {
  if (_e === null)
    return e;
  const n = es(_e), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, l, o, A = ee] = t[i];
    r && (J(r) && (r = {
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
    A && (lt(), Ve(A, n, 8, [
      e.el,
      o,
      e,
      t
    ]), At());
  }
}
function Xl(e, t, n = !1) {
  const s = OA();
  if (s || Ot) {
    let i = Ot ? Ot._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && J(t) ? t.call(s && s.proxy) : t;
  }
}
const eA = /* @__PURE__ */ Symbol.for("v-scx"), tA = () => Xl(eA);
function Jn(e, t, n) {
  return nA(e, t, n);
}
function nA(e, t, n = ee) {
  const { immediate: s, deep: i, flush: r, once: l } = n, o = Me({}, n), A = t && s || !t && r !== "post";
  let a;
  if (An) {
    if (r === "sync") {
      const x = tA();
      a = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!A) {
      const x = () => {
      };
      return x.stop = zt, x.resume = zt, x.pause = zt, x;
    }
  }
  const c = ct;
  o.call = (x, F, v) => Ve(x, c, F, v);
  let d = !1;
  r === "post" ? o.scheduler = (x) => {
    he(x, c && c.suspense);
  } : r !== "sync" && (d = !0, o.scheduler = (x, F) => {
    F ? x() : qs(x);
  }), o.augmentJob = (x) => {
    t && (x.flags |= 4), d && (x.flags |= 2, c && (x.id = c.uid, x.i = c));
  };
  const h = Kl(e, t, o);
  return An && (a ? a.push(h) : A && h()), h;
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
    if (t & 32 && J(n.default))
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
  return J(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Me({ name: e.name }, t, { setup: e })
  ) : e;
}
function rA(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function _i(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const In = /* @__PURE__ */ new WeakMap();
function Qt(e, t, n, s, i = !1) {
  if (W(e)) {
    e.forEach(
      (v, _) => Qt(
        v,
        t && (W(t) ? t[_] : t),
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
  const r = s.shapeFlag & 4 ? es(s.component) : s.el, l = i ? null : r, { i: o, r: A } = e, a = t && t.r, c = o.refs === ee ? o.refs = {} : o.refs, d = o.setupState, h = /* @__PURE__ */ H(d), x = d === ee ? ur : (v) => _i(c, v) ? !1 : Q(h, v), F = (v, _) => !(_ && _i(c, _));
  if (a != null && a !== A) {
    if (ki(t), re(a))
      c[a] = null, x(a) && (d[a] = null);
    else if (/* @__PURE__ */ fe(a)) {
      const v = t;
      F(a, v.k) && (a.value = null), v.k && (c[v.k] = null);
    }
  }
  if (J(A))
    dn(A, o, 12, [l, c]);
  else {
    const v = re(A), _ = /* @__PURE__ */ fe(A);
    if (v || _) {
      const z = () => {
        if (e.f) {
          const M = v ? x(A) ? d[A] : c[A] : F() || !e.k ? A.value : c[e.k];
          if (i)
            W(M) && dr(M, r);
          else if (W(M))
            M.includes(r) || M.push(r);
          else if (v)
            c[A] = [r], x(A) && (d[A] = c[A]);
          else {
            const b = [r];
            F(A, e.k) && (A.value = b), e.k && (c[e.k] = b);
          }
        } else v ? (c[A] = l, x(A) && (d[A] = l)) : _ && (F(A, e.k) && (A.value = l), e.k && (c[e.k] = l));
      };
      if (l) {
        const M = () => {
          z(), In.delete(e);
        };
        M.id = -1, In.set(e, M), he(M, n);
      } else
        ki(e), z();
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
function oA(e, t, n = ct, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
      lt();
      const o = ti(n), A = Ve(t, n, e, l);
      return o(), At(), A;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const Ur = (e) => (t, n = ct) => {
  (!An || e === "sp") && oA(e, (...s) => t(...s), n);
}, lA = Ur("m"), AA = Ur(
  "bum"
), aA = /* @__PURE__ */ Symbol.for("v-ndc");
function me(e, t, n, s) {
  let i;
  const r = n, l = W(e);
  if (l || re(e)) {
    const o = l && /* @__PURE__ */ st(e);
    let A = !1, a = !1;
    o && (A = !/* @__PURE__ */ ke(e), a = /* @__PURE__ */ Be(e), e = Hn(e)), i = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++)
      i[c] = t(
        A ? a ? at(ze(e[c])) : ze(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let o = 0; o < e; o++)
      i[o] = t(o + 1, o, void 0, r);
  } else if (te(e))
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
  /* @__PURE__ */ Me(/* @__PURE__ */ Object.create(null), {
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
    $watch: (e) => zt
  })
), ms = (e, t) => e !== ee && !e.__isScriptSetup && Q(e, t), cA = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: l, type: o, appContext: A } = e;
    if (t[0] !== "$") {
      const h = l[t];
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
        if (ms(s, t))
          return l[t] = 1, s[t];
        if (Q(r, t))
          return l[t] = 3, r[t];
        if (n !== ee && Q(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const a = en[t];
    let c, d;
    if (a)
      return t === "$attrs" && ce(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (c = o.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== ee && Q(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      d = A.config.globalProperties, Q(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return ms(i, t) ? (i[t] = n, !0) : Q(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: l }
  }, o) {
    let A;
    return !!(n[o] || ms(t, o) || Q(r, o) || Q(s, o) || Q(en, o) || Q(i.config.globalProperties, o) || (A = l.__cssModules) && A[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
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
function dA(e, t) {
  return function(s, i = null) {
    J(s) || (s = Me({}, s)), i != null && !te(i) && (i = null);
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
      use(c, ...d) {
        return l.has(c) || (c && J(c.install) ? (l.add(c), c.install(a, ...d)) : J(c) && (l.add(c), c(a, ...d))), a;
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
          const x = a._ceVNode || Le(s, i);
          return x.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(x, c, h), A = !0, a._container = c, c.__vue_app__ = a, es(x.component);
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
      provide(c, d) {
        return r.provides[c] = d, a;
      },
      runWithContext(c) {
        const d = Ot;
        Ot = a;
        try {
          return c();
        } finally {
          Ot = d;
        }
      }
    };
    return a;
  };
}
let Ot = null;
const fA = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$e(t)}Modifiers`] || e[`${It(t)}Modifiers`];
function pA(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ee;
  let i = n;
  const r = t.startsWith("update:"), l = r && fA(s, t.slice(7));
  l && (l.trim && (i = n.map((c) => re(c) ? c.trim() : c)), l.number && (i = i.map(Un)));
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
  return r ? (W(r) ? r.forEach((o) => l[o] = null) : Me(l, r), te(e) && s.set(e, l), l) : (te(e) && s.set(e, null), null);
}
function Qn(e, t) {
  return !e || !Bn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, It(t)) || Q(e, t));
}
function zi(e) {
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
    props: d,
    data: h,
    setupState: x,
    ctx: F,
    inheritAttrs: v
  } = e, _ = Mn(e);
  let z, M;
  try {
    if (n.shapeFlag & 4) {
      const I = i || s, L = I;
      z = Oe(
        a.call(
          L,
          I,
          c,
          d,
          x,
          h,
          F
        )
      ), M = o;
    } else {
      const I = t;
      z = Oe(
        I.length > 1 ? I(
          d,
          { attrs: o, slots: l, emit: A }
        ) : I(
          d,
          null
        )
      ), M = t.props ? o : mA(o);
    }
  } catch (I) {
    St.length = 0, Zn(I, e, 1), z = Le(qe);
  }
  let b = z;
  if (M && v !== !1) {
    const I = Object.keys(M), { shapeFlag: L } = b;
    I.length && L & 7 && (r && I.some(Vn) && (M = gA(
      M,
      r
    )), b = jt(b, M, !1, !0));
  }
  if (n.dirs && (b = jt(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const I = qn(b.type) && Vr(b) || b;
    Qs(I, n.transition);
  }
  return z = b, Mn(_), z;
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
      return s ? $i(s, l, a) : !!l;
    if (A & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const h = c[d];
        if (Yr(l, s, h) && !Qn(a, h))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : s === l ? !1 : s ? l ? $i(s, l, a) : !0 : !!l;
  return !1;
}
function $i(e, t, n) {
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
  return n === "style" && te(s) && te(i) ? !ot(s, i) : s !== i;
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
function vA(e, t, n, s = !1) {
  const i = {}, r = Kr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Jr(e, t, i, r);
  for (const l in e.propsOptions[0])
    l in i || (i[l] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Dl(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function yA(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: l }
  } = e, o = /* @__PURE__ */ H(i), [A] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let h = c[d];
        if (Qn(e.emitsOptions, h))
          continue;
        const x = t[h];
        if (A)
          if (Q(r, h))
            x !== r[h] && (r[h] = x, a = !0);
          else {
            const F = $e(h);
            i[F] = Os(
              A,
              o,
              F,
              x,
              e,
              !1
            );
          }
        else
          x !== r[h] && (r[h] = x, a = !0);
      }
    }
  } else {
    Jr(e, t, i, r) && (a = !0);
    let c;
    for (const d in o)
      (!t || // for camelCase
      !Q(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = It(d)) === d || !Q(t, c))) && (A ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (i[d] = Os(
        A,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== o)
      for (const d in r)
        (!t || !Q(t, d)) && (delete r[d], a = !0);
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
      i && Q(i, c = $e(A)) ? !r || !r.includes(c) ? n[c] = a : (o || (o = {}))[c] = a : Qn(e.emitsOptions, A) || (!(A in s) || a !== s[A]) && (s[A] = a, l = !0);
    }
  if (r) {
    const A = /* @__PURE__ */ H(n), a = o || ee;
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      n[d] = Os(
        i,
        A,
        d,
        a[d],
        e,
        !Q(a, d)
      );
    }
  }
  return l;
}
function Os(e, t, n, s, i, r) {
  const l = e[n];
  if (l != null) {
    const o = Q(l, "default");
    if (o && s === void 0) {
      const A = l.default;
      if (l.type !== Function && !l.skipFactory && J(A)) {
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
function wA(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, l = {}, o = [];
  if (!r)
    return te(e) && s.set(e, _t), _t;
  if (W(r))
    for (let a = 0; a < r.length; a++) {
      const c = $e(r[a]);
      Si(c) && (l[c] = ee);
    }
  else if (r)
    for (const a in r) {
      const c = $e(a);
      if (Si(c)) {
        const d = r[a], h = l[c] = W(d) || J(d) ? { type: d } : Me({}, d), x = h.type;
        let F = !1, v = !0;
        if (W(x))
          for (let _ = 0; _ < x.length; ++_) {
            const z = x[_], M = J(z) && z.name;
            if (M === "Boolean") {
              F = !0;
              break;
            } else M === "String" && (v = !1);
          }
        else
          F = J(x) && x.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = F, h[
          1
          /* shouldCastTrue */
        ] = v, (F || Q(h, "default")) && o.push(c);
      }
    }
  const A = [l, o];
  return te(e) && s.set(e, A), A;
}
function Si(e) {
  return e[0] !== "$" && !Zt(e);
}
const Xs = (e) => e === "_" || e === "_ctx" || e === "$stable", ei = (e) => W(e) ? e.map(Oe) : [Oe(e)], _A = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ql((...i) => ei(t(...i)), n);
  return s._c = !1, s;
}, qr = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Xs(i)) continue;
    const r = e[i];
    if (J(r))
      t[i] = _A(i, r, s);
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
}, zA = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, l = ee;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : Xr(i, t, n) : (r = !t.$stable, qr(t, i)), l = t;
  } else t && (Qr(e, t), l = { default: 1 });
  if (r)
    for (const o in i)
      !Xs(o) && l[o] == null && delete i[o];
}, he = MA;
function $A(e) {
  return SA(e);
}
function SA(e, t) {
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
    parentNode: d,
    nextSibling: h,
    setScopeId: x = zt,
    insertStaticContent: F
  } = e, v = (u, p, g, $ = null, y = null, k = null, N = void 0, T = null, C = !!p.dynamicChildren) => {
    if (u === p)
      return;
    u && !Ut(u, p) && ($ = hn(u), pe(u, y, k, !0), u = null), p.patchFlag === -2 && (C = !1, p.dynamicChildren = null), p.dynamicChildren && u && u.dynamicChildren && u.dynamicChildren.hasOnce && (p.dynamicChildren === _t && (p.dynamicChildren = []), p.dynamicChildren.hasOnce = !0);
    const { type: w, ref: B, shapeFlag: R } = p;
    switch (w) {
      case Xn:
        _(u, p, g, $);
        break;
      case qe:
        z(u, p, g, $);
        break;
      case xs:
        u == null && M(p, g, $, N);
        break;
      case K:
        se(
          u,
          p,
          g,
          $,
          y,
          k,
          N,
          T,
          C
        );
        break;
      default:
        R & 1 ? L(
          u,
          p,
          g,
          $,
          y,
          k,
          N,
          T,
          C
        ) : R & 6 ? Lt(
          u,
          p,
          g,
          $,
          y,
          k,
          N,
          T,
          C
        ) : (R & 64 || R & 128) && w.process(
          u,
          p,
          g,
          $,
          y,
          k,
          N,
          T,
          C,
          Bt
        );
    }
    B != null && y ? Qt(B, u && u.ref, k, p || u, !p) : B == null && u && u.ref != null && Qt(u.ref, null, k, u, !0);
  }, _ = (u, p, g, $) => {
    if (u == null)
      s(
        p.el = o(p.children),
        g,
        $
      );
    else {
      const y = p.el = u.el;
      p.children !== u.children && a(y, p.children);
    }
  }, z = (u, p, g, $) => {
    u == null ? s(
      p.el = A(p.children || ""),
      g,
      $
    ) : p.el = u.el;
  }, M = (u, p, g, $) => {
    [u.el, u.anchor] = F(
      u.children,
      p,
      g,
      $,
      u.el,
      u.anchor
    );
  }, b = ({ el: u, anchor: p }, g, $) => {
    let y;
    for (; u && u !== p; )
      y = h(u), s(u, g, $), u = y;
    s(p, g, $);
  }, I = ({ el: u, anchor: p }) => {
    let g;
    for (; u && u !== p; )
      g = h(u), i(u), u = g;
    i(p);
  }, L = (u, p, g, $, y, k, N, T, C) => {
    if (p.type === "svg" ? N = "svg" : p.type === "math" && (N = "mathml"), u == null)
      E(
        p,
        g,
        $,
        y,
        k,
        N,
        T,
        C
      );
    else {
      const w = u.el && u.el._isVueCE ? u.el : null;
      try {
        w && w._beginPatch(), Ge(
          u,
          p,
          y,
          k,
          N,
          T,
          C
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, E = (u, p, g, $, y, k, N, T) => {
    let C, w;
    const { props: B, shapeFlag: R, transition: D, dirs: V } = u;
    if (C = u.el = l(
      u.type,
      k,
      B && B.is,
      B
    ), R & 8 ? c(C, u.children) : R & 16 && ge(
      u.children,
      C,
      null,
      $,
      y,
      gs(u, k),
      N,
      T
    ), V && bt(u, null, $, "created"), G(C, u, u.scopeId, N, $), B) {
      for (const q in B)
        q !== "value" && !Zt(q) && r(C, q, null, B[q], k, $);
      "value" in B && r(C, "value", null, B.value, k), (w = B.onVnodeBeforeMount) && Ne(w, $, u);
    }
    V && bt(u, null, $, "beforeMount");
    const Y = EA(y, D);
    Y && D.beforeEnter(C), s(C, p, g), ((w = B && B.onVnodeMounted) || Y || V) && he(() => {
      try {
        w && Ne(w, $, u), Y && D.enter(C), V && bt(u, null, $, "mounted");
      } finally {
      }
    }, y);
  }, G = (u, p, g, $, y) => {
    if (g && x(u, g), $)
      for (let k = 0; k < $.length; k++)
        x(u, $[k]);
    if (y) {
      let k = y.subTree;
      if (p === k || so(k.type) && (k.ssContent === p || k.ssFallback === p)) {
        const N = y.vnode;
        G(
          u,
          N,
          N.scopeId,
          N.slotScopeIds,
          y.parent
        );
      }
    }
  }, ge = (u, p, g, $, y, k, N, T, C = 0) => {
    for (let w = C; w < u.length; w++) {
      const B = u[w] = T ? Ke(u[w]) : Oe(u[w]);
      v(
        null,
        B,
        p,
        g,
        $,
        y,
        k,
        N,
        T
      );
    }
  }, Ge = (u, p, g, $, y, k, N) => {
    const T = p.el = u.el;
    let { patchFlag: C, dynamicChildren: w, dirs: B } = p;
    C |= u.patchFlag & 16;
    const R = u.props || ee, D = p.props || ee;
    let V;
    if (g && vt(g, !1), (V = D.onVnodeBeforeUpdate) && Ne(V, g, p, u), B && bt(p, u, g, "beforeUpdate"), g && vt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    w && (!u.dynamicChildren || u.dynamicChildren.length !== w.length) && (C = 0, N = !1, w = null), (R.innerHTML && D.innerHTML == null || R.textContent && D.textContent == null) && c(T, ""), w ? ft(
      u.dynamicChildren,
      w,
      T,
      g,
      $,
      gs(p, y),
      k
    ) : N || Tt(
      u,
      p,
      T,
      null,
      g,
      $,
      gs(p, y),
      k,
      !1
    ), C > 0) {
      if (C & 16)
        pt(T, R, D, g, y);
      else if (C & 2 && R.class !== D.class && r(T, "class", null, D.class, y), C & 4 && r(T, "style", R.style, D.style, y), C & 8) {
        const Y = p.dynamicProps;
        for (let q = 0; q < Y.length; q++) {
          const Z = Y[q], ie = R[Z], le = D[Z];
          (le !== ie || Z === "value") && r(T, Z, ie, le, y, g);
        }
      }
      C & 1 && u.children !== p.children && c(T, p.children);
    } else !N && w == null && pt(T, R, D, g, y);
    ((V = D.onVnodeUpdated) || B) && he(() => {
      V && Ne(V, g, p, u), B && bt(p, u, g, "updated");
    }, $);
  }, ft = (u, p, g, $, y, k, N) => {
    for (let T = 0; T < p.length; T++) {
      const C = u[T], w = p[T], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === K || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ut(C, w) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? d(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      v(
        C,
        w,
        B,
        null,
        $,
        y,
        k,
        N,
        !0
      );
    }
  }, pt = (u, p, g, $, y) => {
    if (p !== g) {
      if (p !== ee)
        for (const k in p)
          !Zt(k) && !(k in g) && r(
            u,
            k,
            p[k],
            null,
            y,
            $
          );
      for (const k in g) {
        if (Zt(k)) continue;
        const N = g[k], T = p[k];
        N !== T && k !== "value" && r(u, k, T, N, y, $);
      }
      "value" in g && r(u, "value", p.value, g.value, y);
    }
  }, se = (u, p, g, $, y, k, N, T, C) => {
    const w = p.el = u ? u.el : o(""), B = p.anchor = u ? u.anchor : o("");
    let { patchFlag: R, dynamicChildren: D, slotScopeIds: V } = p;
    V && (T = T ? T.concat(V) : V), u == null ? (s(w, g, $), s(B, g, $), ge(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      g,
      B,
      y,
      k,
      N,
      T,
      C
    )) : R > 0 && R & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === D.length ? (ft(
      u.dynamicChildren,
      D,
      g,
      y,
      k,
      N,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || y && p === y.subTree) && eo(
      u,
      p,
      !0
      /* shallow */
    )) : Tt(
      u,
      p,
      g,
      B,
      y,
      k,
      N,
      T,
      C
    );
  }, Lt = (u, p, g, $, y, k, N, T, C) => {
    p.slotScopeIds = T, u == null ? p.shapeFlag & 512 ? y.ctx.activate(
      p,
      g,
      $,
      N,
      C
    ) : ue(
      p,
      g,
      $,
      y,
      k,
      N,
      C
    ) : ht(u, p, C);
  }, ue = (u, p, g, $, y, k, N) => {
    const T = u.component = RA(
      u,
      $,
      y
    );
    if (Wr(u) && (T.ctx.renderer = Bt), jA(T, !1, N), T.asyncDep) {
      if (y && y.registerDep(T, mt, N), !u.el) {
        const C = T.subTree = Le(qe);
        z(null, C, p, g), u.placeholder = C.el;
      }
    } else
      mt(
        T,
        u,
        p,
        g,
        y,
        k,
        N
      );
  }, ht = (u, p, g) => {
    const $ = p.component = u.component;
    if (xA(u, p, g))
      if ($.asyncDep && !$.asyncResolved) {
        p.el = u.el, gt($, p, g);
        return;
      } else
        $.next = p, $.update();
    else
      p.el = u.el, $.vnode = p;
  }, mt = (u, p, g, $, y, k, N) => {
    const T = () => {
      if (u.isMounted) {
        let { next: R, bu: D, u: V, parent: Y, vnode: q } = u;
        {
          const Te = to(u);
          if (Te) {
            R && (R.el = q.el, gt(u, R, N)), Te.asyncDep.then(() => {
              he(() => {
                u.isUnmounted || w();
              }, y);
            });
            return;
          }
        }
        let Z = R, ie;
        vt(u, !1), R ? (R.el = q.el, gt(u, R, N)) : R = q, D && wn(D), (ie = R.props && R.props.onVnodeBeforeUpdate) && Ne(ie, Y, R, q), vt(u, !0);
        const le = zi(u), Ie = u.subTree;
        u.subTree = le, v(
          Ie,
          le,
          // parent may have changed if it's in a teleport
          d(Ie.el),
          // anchor may have changed if it's in a fragment
          hn(Ie),
          u,
          y,
          k
        ), R.el = le.el, Z === null && bA(u, le.el), V && he(V, y), (ie = R.props && R.props.onVnodeUpdated) && he(
          () => Ne(ie, Y, R, q),
          y
        );
      } else {
        let R;
        const { el: D, props: V } = p, { bm: Y, m: q, parent: Z, root: ie, type: le } = u, Ie = Xt(p);
        vt(u, !1), Y && wn(Y), !Ie && (R = V && V.onVnodeBeforeMount) && Ne(R, Z, p), vt(u, !0);
        {
          ie.ce && ie.ce._hasShadowRoot() && ie.ce._injectChildStyle(
            le,
            u.parent ? u.parent.type : void 0
          );
          const Te = u.subTree = zi(u);
          v(
            null,
            Te,
            g,
            $,
            u,
            y,
            k
          ), p.el = Te.el;
        }
        if (q && he(q, y), !Ie && (R = V && V.onVnodeMounted)) {
          const Te = p;
          he(
            () => Ne(R, Z, Te),
            y
          );
        }
        (p.shapeFlag & 256 || Z && Xt(Z.vnode) && Z.vnode.shapeFlag & 256) && u.a && he(u.a, y), u.isMounted = !0, p = g = $ = null;
      }
    };
    u.scope.on();
    const C = u.effect = new yr(T);
    u.scope.off();
    const w = u.update = C.run.bind(C), B = u.job = C.runIfDirty.bind(C);
    B.i = u, B.id = u.uid, C.scheduler = () => qs(B), vt(u, !0), w();
  }, gt = (u, p, g) => {
    p.component = u;
    const $ = u.vnode.props;
    u.vnode = p, u.next = null, yA(u, p.props, $, g), zA(u, p.children, g), lt(), wi(u), At();
  }, Tt = (u, p, g, $, y, k, N, T, C = !1) => {
    const w = u && u.children, B = u ? u.shapeFlag : 0, R = p.children, { patchFlag: D, shapeFlag: V } = p;
    if (D > 0) {
      if (D & 128) {
        ye(
          w,
          R,
          g,
          $,
          y,
          k,
          N,
          T,
          C
        );
        return;
      } else if (D & 256) {
        pn(
          w,
          R,
          g,
          $,
          y,
          k,
          N,
          T,
          C
        );
        return;
      }
    }
    V & 8 ? (B & 16 && Dt(w, y, k), R !== w && c(g, R)) : B & 16 ? V & 16 ? ye(
      w,
      R,
      g,
      $,
      y,
      k,
      N,
      T,
      C
    ) : Dt(w, y, k, !0) : (B & 8 && c(g, ""), V & 16 && ge(
      R,
      g,
      $,
      y,
      k,
      N,
      T,
      C
    ));
  }, pn = (u, p, g, $, y, k, N, T, C) => {
    u = u || _t, p = p || _t;
    const w = u.length, B = p.length, R = Math.min(w, B);
    let D;
    for (D = 0; D < R; D++) {
      const V = p[D] = C ? Ke(p[D]) : Oe(p[D]);
      v(
        u[D],
        V,
        g,
        null,
        y,
        k,
        N,
        T,
        C
      );
    }
    w > B ? Dt(
      u,
      y,
      k,
      !0,
      !1,
      R
    ) : ge(
      p,
      g,
      $,
      y,
      k,
      N,
      T,
      C,
      R
    );
  }, ye = (u, p, g, $, y, k, N, T, C) => {
    let w = 0;
    const B = p.length;
    let R = u.length - 1, D = B - 1;
    for (; w <= R && w <= D; ) {
      const V = u[w], Y = p[w] = C ? Ke(p[w]) : Oe(p[w]);
      if (Ut(V, Y))
        v(
          V,
          Y,
          g,
          null,
          y,
          k,
          N,
          T,
          C
        );
      else
        break;
      w++;
    }
    for (; w <= R && w <= D; ) {
      const V = u[R], Y = p[D] = C ? Ke(p[D]) : Oe(p[D]);
      if (Ut(V, Y))
        v(
          V,
          Y,
          g,
          null,
          y,
          k,
          N,
          T,
          C
        );
      else
        break;
      R--, D--;
    }
    if (w > R) {
      if (w <= D) {
        const V = D + 1, Y = V < B ? p[V].el : $;
        for (; w <= D; )
          v(
            null,
            p[w] = C ? Ke(p[w]) : Oe(p[w]),
            g,
            Y,
            y,
            k,
            N,
            T,
            C
          ), w++;
      }
    } else if (w > D)
      for (; w <= R; )
        pe(u[w], y, k, !0), w++;
    else {
      const V = w, Y = w, q = /* @__PURE__ */ new Map();
      for (w = Y; w <= D; w++) {
        const xe = p[w] = C ? Ke(p[w]) : Oe(p[w]);
        xe.key != null && q.set(xe.key, w);
      }
      let Z, ie = 0;
      const le = D - Y + 1;
      let Ie = !1, Te = 0;
      const Vt = new Array(le);
      for (w = 0; w < le; w++) Vt[w] = 0;
      for (w = V; w <= R; w++) {
        const xe = u[w];
        if (ie >= le) {
          pe(xe, y, k, !0);
          continue;
        }
        let Pe;
        if (xe.key != null)
          Pe = q.get(xe.key);
        else
          for (Z = Y; Z <= D; Z++)
            if (Vt[Z - Y] === 0 && Ut(xe, p[Z])) {
              Pe = Z;
              break;
            }
        Pe === void 0 ? pe(xe, y, k, !0) : (Vt[Pe - Y] = w + 1, Pe >= Te ? Te = Pe : Ie = !0, v(
          xe,
          p[Pe],
          g,
          null,
          y,
          k,
          N,
          T,
          C
        ), ie++);
      }
      const fi = Ie ? CA(Vt) : _t;
      for (Z = fi.length - 1, w = le - 1; w >= 0; w--) {
        const xe = Y + w, Pe = p[xe], pi = p[xe + 1], hi = xe + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          pi.el || no(pi)
        ) : $;
        Vt[w] === 0 ? v(
          null,
          Pe,
          g,
          hi,
          y,
          k,
          N,
          T,
          C
        ) : Ie && (Z < 0 || w !== fi[Z] ? xt(Pe, g, hi, 2) : Z--);
      }
    }
  }, xt = (u, p, g, $, y = null) => {
    const { el: k, type: N, transition: T, children: C, shapeFlag: w } = u;
    if (w & 6) {
      xt(u.component.subTree, p, g, $);
      return;
    }
    if (w & 128) {
      u.suspense.move(p, g, $);
      return;
    }
    if (w & 64) {
      N.move(u, p, g, Bt);
      return;
    }
    if (N === K) {
      s(k, p, g);
      for (let R = 0; R < C.length; R++)
        xt(C[R], p, g, $);
      s(u.anchor, p, g);
      return;
    }
    if (N === xs) {
      b(u, p, g);
      return;
    }
    if ($ !== 2 && w & 1 && T)
      if ($ === 0)
        T.persisted && !k[hs] ? s(k, p, g) : (T.beforeEnter(k), s(k, p, g), he(() => T.enter(k), y));
      else {
        const { leave: R, delayLeave: D, afterLeave: V } = T, Y = () => {
          u.ctx.isUnmounted ? i(k) : s(k, p, g);
        }, q = () => {
          const Z = k._isLeaving || !!k[hs];
          k._isLeaving && k[hs](
            !0
            /* cancelled */
          ), T.persisted && !Z ? Y() : R(k, () => {
            Y(), V && V();
          });
        };
        D ? D(k, Y, q) : q();
      }
    else
      s(k, p, g);
  }, pe = (u, p, g, $ = !1, y = !1) => {
    const {
      type: k,
      props: N,
      ref: T,
      children: C,
      dynamicChildren: w,
      shapeFlag: B,
      patchFlag: R,
      dirs: D,
      cacheIndex: V,
      memo: Y
    } = u;
    if ((R === -2 || w && w.hasOnce) && (y = !1), T != null && (lt(), Qt(T, null, g, u, !0), At()), V != null && (!u.ctx || u.ctx === p) && (p.renderCache[V] = void 0), B & 256) {
      p.ctx.deactivate(u);
      return;
    }
    const q = B & 1 && D, Z = !Xt(u);
    let ie;
    if (Z && (ie = N && N.onVnodeBeforeUnmount) && Ne(ie, p, u), B & 6)
      ll(u.component, g, $);
    else {
      if (B & 128) {
        u.suspense.unmount(g, $);
        return;
      }
      q && bt(u, null, p, "beforeUnmount"), B & 64 ? u.type.remove(
        u,
        p,
        g,
        Bt,
        $
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== K || R > 0 && R & 64) ? Dt(
        w,
        p,
        g,
        !1,
        !0
      ) : (k === K && R & 384 || !y && B & 16) && Dt(C, p, g), $ && ui(u);
    }
    const le = Y != null && V == null;
    (Z && (ie = N && N.onVnodeUnmounted) || q || le) && he(() => {
      ie && Ne(ie, p, u), q && bt(u, null, p, "unmounted"), le && (u.el = null);
    }, g);
  }, ui = (u) => {
    const { type: p, el: g, anchor: $, transition: y } = u;
    if (p === K) {
      ol(g, $);
      return;
    }
    if (p === xs) {
      I(u), y && !y.persisted && y.afterLeave && y.afterLeave();
      return;
    }
    const k = () => {
      i(g), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (u.shapeFlag & 1 && y && !y.persisted) {
      const { leave: N, delayLeave: T } = y, C = () => N(g, k);
      T ? T(u.el, k, C) : C();
    } else
      k();
  }, ol = (u, p) => {
    let g;
    for (; u !== p; )
      g = h(u), i(u), u = g;
    i(p);
  }, ll = (u, p, g) => {
    const { bum: $, scope: y, job: k, subTree: N, um: T, m: C, a: w } = u;
    Ei(C), Ei(w), $ && wn($), y.stop(), k ? (k.flags |= 8, pe(N, u, p, g)) : u.vnode.el && N && (N.transition = u.vnode.transition, pe(N, u, p, g)), T && he(T, p), he(() => {
      u.isUnmounted = !0;
    }, p);
  }, Dt = (u, p, g, $ = !1, y = !1, k = 0) => {
    for (let N = k; N < u.length; N++)
      pe(u[N], p, g, $, y);
  }, hn = (u) => {
    if (u.shapeFlag & 6)
      return hn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const p = h(u.anchor || u.el), g = p && p[sA];
    return g ? h(g) : p;
  };
  let as = !1;
  const di = (u, p, g) => {
    let $;
    u == null ? p._vnode && (pe(p._vnode, null, null, !0), $ = p._vnode.component) : v(
      p._vnode || null,
      u,
      p,
      null,
      null,
      null,
      g
    ), p._vnode = u, as || (as = !0, wi($), Lr(), as = !1);
  }, Bt = {
    p: v,
    um: pe,
    m: xt,
    r: ui,
    mt: ue,
    mc: ge,
    pc: Tt,
    pbc: ft,
    n: hn,
    o: e
  };
  return {
    render: di,
    hydrate: void 0,
    createApp: dA(di)
  };
}
function gs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function vt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function EA(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function eo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (W(s) && W(i))
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
  t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : ql(e);
}
const K = /* @__PURE__ */ Symbol.for("v-fgt"), Xn = /* @__PURE__ */ Symbol.for("v-txt"), qe = /* @__PURE__ */ Symbol.for("v-cmt"), xs = /* @__PURE__ */ Symbol.for("v-stc"), St = [];
let ve = null;
function S(e = !1) {
  St.push(ve = e ? null : []);
}
function io() {
  St.pop(), ve = St[St.length - 1] || null;
}
let on = 1;
function Ci(e, t = !1) {
  on += e, e < 0 && ve && t && (ve.hasOnce = !0);
}
function ro(e) {
  return e.dynamicChildren = on > 0 ? ve || _t : null, io(), on > 0 && ve && ve.push(e), e;
}
function P(e, t, n, s, i, r) {
  return ro(
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
function it(e, t, n, s, i) {
  return ro(
    Le(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || /* @__PURE__ */ fe(e) || J(e) ? { i: _e, r: e, k: t, f: !!n } : e : null);
function f(e, t = null, n = null, s = 0, i = null, r = e === K ? 0 : 1, l = !1, o = !1) {
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
    ctx: _e
  };
  return o ? (Tn(A, n), r & 128 && e.normalize(A)) : n && (A.shapeFlag |= re(n) ? 8 : 16), on > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (A.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  A.patchFlag !== 32 && ve.push(A), A;
}
const Le = IA;
function IA(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === aA) && (e = qe), oo(e)) {
    const o = jt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Tn(o, n), on > 0 && !r && ve && (o.shapeFlag & 6 ? ve[ve.indexOf(e)] = o : ve.push(o)), o.patchFlag = -2, o;
  }
  if (VA(e) && (e = e.__vccOpts), t) {
    t = TA(t);
    let { class: o, style: A } = t;
    o && !re(o) && (t.class = be(o)), te(A) && (/* @__PURE__ */ Js(A) && !W(A) && (A = Me({}, A)), t.style = Yn(A));
  }
  const l = re(e) ? 1 : so(e) ? 128 : qn(e) ? 64 : te(e) ? 4 : J(e) ? 2 : 0;
  return f(
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
  return e ? /* @__PURE__ */ Js(e) || Zr(e) ? Me({}, e) : e : null;
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
      n && r ? W(r) ? r.concat(kn(t)) : [r, kn(t)] : kn(t)
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
    patchFlag: t && e.type !== K ? l === -1 ? 16 : l | 16 : l,
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
function tt(e = " ", t = 0) {
  return Le(Xn, null, e, t);
}
function U(e = "", t = !1) {
  return t ? (S(), it(qe, null, e)) : Le(qe, null, e);
}
function Oe(e) {
  return e == null || typeof e == "boolean" ? Le(qe) : W(e) ? Le(
    K,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : oo(e) ? Ke(e) : Le(Xn, null, String(e));
}
function Ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : jt(e);
}
function Tn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (W(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Tn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Zr(t) ? t._ctx = _e : i === 3 && _e && (_e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (J(t)) {
    if (s & 65) {
      Tn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: _e }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [tt(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function PA(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = be([t.class, s.class]));
      else if (i === "style")
        t.style = Yn([t.style, s.style]);
      else if (Bn(i)) {
        const r = t[i], l = s[i];
        l && r !== l && !(W(r) && r.includes(l)) ? t[i] = r ? [].concat(r, l) : l : l == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Vn(i) && (t[i] = l);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Ne(e, t, n, s = null) {
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
    scope: new yl(
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
    propsOptions: wA(s, i),
    emitsOptions: hA(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ee,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ee,
    data: ee,
    props: ee,
    attrs: ee,
    slots: ee,
    refs: ee,
    setupState: ee,
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
let ct = null;
const OA = () => ct || _e;
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
    (n) => ct = n
  ), ln = t(
    "__VUE_SSR_SETTERS__",
    (n) => An = n
  );
}
const ti = (e) => {
  const t = ct;
  return Pn(e), e.scope.on(), () => {
    e.scope.off(), Pn(t);
  };
}, Mi = () => {
  ct && ct.scope.off(), Pn(null);
};
function Ao(e) {
  return e.vnode.shapeFlag & 4;
}
let An = !1;
function jA(e, t = !1, n = !1) {
  t && ln(t);
  const { props: s, children: i } = e.vnode, r = Ao(e);
  vA(e, s, r, t), kA(e, i, n || t);
  const l = r ? LA(e, t) : void 0;
  return t && ln(!1), l;
}
function LA(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, cA);
  const { setup: s } = n;
  if (s) {
    lt();
    const i = e.setupContext = s.length > 1 ? BA(e) : null, r = ti(e), l = dn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), o = fr(l);
    if (At(), r(), (o || e.sp) && !Xt(e) && rA(e), o) {
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
  J(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : te(t) && (e.setupState = Fr(t)), ao(e);
}
function ao(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || zt);
}
const DA = {
  get(e, t) {
    return ce(e, "get", ""), e[t];
  }
};
function BA(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, DA),
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
  return J(e) && "__vccOpts" in e;
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
  const s = e.style, i = re(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (re(t))
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
        !re(t) && t ? t[l] : void 0,
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
  if (W(n))
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && re(s) && n === s;
}
const Ri = "http://www.w3.org/1999/xlink";
function Oi(e, t, n, s, i, r = gl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ri, t.slice(6, t.length)) : e.setAttributeNS(Ri, t, n) : n == null || r && !xr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : De(n) ? String(n) : n
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
function wt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ta(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Li = /* @__PURE__ */ Symbol("_vei");
function na(e, t, n, s, i = null) {
  const r = e[Li] || (e[Li] = {}), l = r[t];
  if (s && l)
    l.value = s;
  else {
    const [o, A] = ra(t);
    if (s) {
      const a = r[t] = Aa(
        s,
        i
      );
      wt(e, o, a, A);
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
let vs = 0;
const oa = /* @__PURE__ */ Promise.resolve(), la = () => vs || (oa.then(() => vs = 0), vs = Date.now());
function Aa(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (W(i)) {
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
const Di = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, aa = (e, t, n, s, i, r) => {
  const l = i === "svg";
  t === "class" ? KA(e, s, l) : t === "style" ? QA(e, n, s) : Bn(t) ? Vn(t) || na(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ca(e, t, s, l)) ? (ji(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Oi(e, t, s, l, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ua(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !re(s))) ? ji(e, $e(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Oi(e, t, s, l));
};
function ca(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Di(t) && J(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Di(t) && re(n) ? !1 : t in e;
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
  return W(t) ? (n) => wn(t, n) : t;
};
function da(e) {
  e.target.composing = !0;
}
function Bi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const kt = /* @__PURE__ */ Symbol("_assign"), vn = /* @__PURE__ */ Symbol("_initialValue");
function ys(e, t, n) {
  return t && (e = e.trim()), n && (e = Un(e)), e;
}
const Vi = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[vn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[vn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[kt] = Nn(i);
    const r = s || i.props && i.props.type === "number";
    wt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[kt](ys(e.value, n, r));
    }), (n || r) && wt(e, "change", () => {
      e.value = ys(e.value, n, r);
    }), t || (wt(e, "compositionstart", da), wt(e, "compositionend", Bi), wt(e, "change", Bi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", r = e[vn];
    delete e[vn], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[kt](ys(e.value, n, s)) : e.value = i;
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
    e._modelValue = t, wt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (A) => A.selected).map(
        (A) => n ? Un(Fn(A)) : Fn(A)
      ), r = e.multiple, l = r ? Et(e._modelValue) ? new Set(i) : i : i[0], o = e._pendingValue = [
        r,
        r ? W(l) ? i.slice() : i : l
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
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !fa(t, n[1], n[0])) && Wi(e, t);
  }
};
function fa(e, t, n) {
  if (!n || W(e)) return ot(e, t);
  if (Et(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Wi(e, t) {
  const n = e.multiple, s = W(t);
  if (!(n && !s && !Et(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const l = e.options[i], o = Fn(l);
      if (n)
        if (s) {
          const A = typeof o;
          A === "string" || A === "number" ? l.selected = t.some((a) => String(a) === String(o)) : l.selected = vl(t, o) > -1;
        } else
          l.selected = t.has(o);
      else if (ot(Fn(l), t)) {
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
}, ga = /* @__PURE__ */ Me({ patchProp: aa }, YA);
let Ui;
function xa() {
  return Ui || (Ui = $A(ga));
}
const ba = ((...e) => {
  const t = xa().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = ya(s);
    if (!i) return;
    const r = t._component;
    !J(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const l = n(i, !1, va(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), l;
  }, t;
});
function va(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ya(e) {
  return re(e) ? document.querySelector(e) : e;
}
const wa = "zhonglou", _a = "钟楼", ka = "1.3.0", za = "S", $a = 10, Sa = "【副本进行中：钟楼】", Ea = [], Ca = { briefingName: "钟楼" }, Ma = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, Ia = { type: "nights", template: "剩余{n}夜" }, Ta = "至第四日日出", Pa = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], Na = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", Fa = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], Ra = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], Oa = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], ja = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], La = {
  id: wa,
  name: _a,
  version: ka,
  level: za,
  players: $a,
  token: Sa,
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
}, Da = "jingjie", Ba = "境界游乐园", Va = "1.0.0", Wa = "A", Ua = "【副本进行中：境界游乐园】", Ga = [], Ya = { briefingName: "境界游乐园" }, Ha = { type: "none" }, Ka = { type: "fromPanel" }, Za = [], Ja = [], qa = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
  id: Da,
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
}, Xa = "kaoshi", ec = "考试", tc = "1.1.0", nc = "A", sc = "【副本进行中：考试】", ic = [], rc = { briefingName: "考试" }, oc = { type: "countdown", minutesPerRound: 3 }, lc = { type: "fromPanel" }, Ac = "至考试结束", ac = [{ id: "main", name: "考试", cap: 100, next: null }], cc = [], uc = [], dc = {
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
}, fc = "xiyan", pc = "喜宴", hc = "1.1.0", mc = "D", gc = "【副本进行中：喜宴】", xc = [], bc = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, vc = { type: "countdown", minutesPerRound: 3 }, yc = { type: "fromPanel" }, wc = "至天亮", _c = [{ id: "main", name: "喜宴", cap: 160, next: null }], kc = [], zc = [], $c = {
  id: fc,
  name: pc,
  version: hc,
  level: mc,
  token: gc,
  legacyKeys: xc,
  detect: bc,
  time: vc,
  remaining: yc,
  deadline: wc,
  phases: _c,
  events: kc,
  docs: zc
}, Sc = "youxi", Ec = "游戏", Cc = "1.1.0", Mc = "C", Ic = "【副本进行中：游戏】", Tc = [], Pc = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Nc = { type: "countdown", minutesPerRound: 8 }, Fc = { type: "fromPanel" }, Rc = "至结算", Oc = [{ id: "main", name: "游戏", cap: 90, next: null }], jc = [], Lc = [], Dc = {
  id: Sc,
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
  docs: Lc
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
function ws(e, t, n, s, i) {
  if (!e.phases.length || !e.phases.some((d) => d.id === t.id)) return;
  let r = an(e, n), l = r.findIndex((d) => d.id === t.id);
  l < 0 && (r = an(e, t), l = 0);
  const o = r.reduce((d, h) => d + Math.max(0, h.cap), 0), A = Math.max(0, t.cap - s) + r.slice(l + 1).reduce((d, h) => d + Math.max(0, h.cap), 0), a = t.deadline ?? r[0].deadline ?? e.deadline, c = { x: A, y: o, deadline: a };
  if (e.time.type === "countdown") {
    const d = e.time.minutesPerRound, h = e.time.totalMinutes, x = h && h > 0 ? h : o * d;
    let F = h && h > 0 && o > 0 ? Math.round(x * A / o) : A * d;
    const v = fo(i).remaining;
    v !== null && (F = Math.min(F, v - d)), F = Math.max(0, F), Object.assign(c, { minutes: F, total: x, text: `约剩${Ft(F)}/${Ft(x)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) c.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const d = e.remaining.template.replace("{n}", String(po(e, t)));
      c.text = a ? `${a}·${d}` : d;
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
const Rn = "generic", Ls = [La, Qa, dc, $c, Dc, nu], lu = {
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
  const t = new Set(Ls.map((n) => n.id));
  return [...Ls, ...e.filter((n) => !t.has(n.id))];
}
const au = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, cu = /<阶段切换>([\s\S]*?)<\/阶段切换>/, uu = /<副本结算>([\s\S]*?)<\/副本结算>/, vo = /<副本>([\s\S]*?)<\/副本>/, du = /<角色登记>([\s\S]*?)<\/角色登记>/, fu = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/;
function yo(e) {
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
function wo(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const i = n.slice(0, s).trim(), r = n.slice(s + 1).trim();
    i && (t[i] = r);
  }
  return t;
}
function _o(e) {
  const t = uu.exec(e ?? "");
  if (!t) return null;
  const n = wo(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function ko(e) {
  const t = du.exec(e ?? "");
  if (!t) return null;
  const n = wo(t[1]);
  return Object.keys(n).length ? n : null;
}
function yn(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function zo(e) {
  const t = vo.exec(e ?? "");
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
      o === "时限" ? (n.limit = A, s = null) : o === "进度条" ? (n.progressBar = A, s = null) : o === "任务" ? (yn(A) && n.tasks.push(yn(A)), s = "tasks") : (n.ps = A, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(r)) {
      s = null;
      continue;
    }
    s === "tasks" ? yn(r) && n.tasks.push(yn(r)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${r}` : r);
  }
  return n;
}
function hu(e) {
  const t = fu.exec(e ?? "");
  return t ? t[2] : null;
}
function _s(e, t, n) {
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
      r = _s(e, t, i), l = r?.cap ?? 0;
      break;
    case "晚饭":
      r = _s(e, t, i), r && (l = Math.ceil(r.cap * 0.75), r.id === t.id && l <= n && (l = r.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      r = _s(e, t, (o) => !!o.night), l = r?.cap ?? 0;
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
const zs = /* @__PURE__ */ new Map();
function bu(e, t) {
  const n = `${e}\0${t}`;
  if (!zs.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (i) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, i);
    }
    zs.set(n, s);
  }
  return zs.get(n);
}
function vu(e, t) {
  const n = String(e ?? ""), s = (o, A) => o ? { signal: A, pack: o, info: { name: o.name, level: o.level } } : null, i = yo(n);
  if (i)
    return { signal: 1, pack: t.find((A) => A.detect.briefingName === i.name), info: i };
  const r = vo.exec(n);
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
const Yi = 5, yu = { id: "_open", name: "进行中", cap: 0, next: null };
function We(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function wu(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function $o(e, t, n) {
  const s = wu(e) + Math.max(0, n - 1) * t, i = Math.floor(s / 60) % 24, r = (s % 60 + 60) % 60;
  return `${i % 12 === 0 ? 12 : i % 12}:${String(r).padStart(2, "0")}`;
}
function Hi(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return $o(e.time.dayStart, e.time.minutesPerRound, n);
}
function So(e) {
  return e.phases.length ? e.phases : [yu];
}
function zn(e, t) {
  return So(e).find((n) => n.id === t);
}
function Ki(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (i.id === n) return !0;
    s.add(i.id), i = zn(e, i.next);
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
function _u(e, t, n) {
  const s = t.entryIndex;
  if (!We(e[s])) return null;
  const i = So(n);
  let r = i[0], l = i[0], o = 0, A, a = !1, c, d, h = null, x, F, v;
  const _ = /* @__PURE__ */ new Set(), z = {}, M = /* @__PURE__ */ new Map();
  for (const se of t.manual ?? [])
    M.has(se.atIndex) || M.set(se.atIndex, []), M.get(se.atIndex).push(se);
  const b = (se) => {
    n.phases.length && (l = ou(n, l, se)), r = se, o = 0, h && !Ki(n, r, h.phase) && (h = null);
  };
  for (let se = s; se < e.length; se++) {
    const Lt = e[se];
    if (!a && We(Lt)) {
      const ue = Zi(n, r, o, h);
      o = ue.round;
      const ht = new Set((Lt.extra?.rlzc?.skippedEvents ?? []).map((ye) => ye.id));
      ue.events.forEach((ye) => {
        ht.has(ye.id) || _.add(ye.id);
      }), z[se] = {
        phase: r.id,
        round: o,
        events: ue.events.map((ye) => ye.id),
        skipFrom: ue.skipFrom,
        limit: ws(n, r, l, o, A)
      }, h && r.id === h.phase && o >= h.round && (h = null);
      const mt = String(Lt.mes ?? ""), gt = zo(mt);
      gt && (F = gt), A = gt?.limit;
      const Tt = ko(mt);
      Tt && (v = Tt);
      const pn = _o(mt);
      if (pn)
        a = !0, c = "tag", d = se, x = pn;
      else {
        const ye = pu(mt), xt = ye ? i.find((pe) => pe.name === ye) : void 0;
        if (xt && n.phases.length)
          b(xt);
        else if (r.cap > 0 && o >= r.cap && r.next) {
          const pe = zn(n, r.next);
          pe && b(pe);
        }
      }
    }
    for (const ue of M.get(se) ?? []) {
      if (a) break;
      switch (ue.kind) {
        case "skip": {
          h = zn(n, ue.targetPhase) && Ki(n, r, ue.targetPhase) ? { phase: ue.targetPhase, round: ue.targetRound } : null;
          break;
        }
        case "setPhase": {
          const ht = zn(n, ue.phase);
          ht && (h = null, b(ht));
          break;
        }
        case "setRound":
          o = Math.max(0, Math.floor(ue.round)), h = null;
          break;
        case "end":
          a = !0, c = "manual", d = se;
          break;
      }
    }
  }
  const I = a ? null : Zi(n, r, o, h), L = I ? I.round : o + 1, E = r.cap > 0, G = n.events.filter((se) => _.has(se.id)).map((se) => se.id), ge = a ? void 0 : ws(n, r, l, L, A), Ge = a ? void 0 : ws(n, r, l, o);
  let ft;
  const pt = n.remaining;
  return !a && pt.type === "nights" && n.phases.length && !r.byTag && !r.frozen ? ft = pt.template.replace("{n}", String(po(n, r))) : !a && pt.type === "countdown" && ge?.minutes !== void 0 && (ft = pt.template.replace("{m}", String(ge.minutes))), {
    phase: r,
    round: o,
    nextRound: L,
    clock: a ? void 0 : Hi(n, r, L),
    currentClock: Hi(n, r, o),
    remainingText: ft,
    limit: ge,
    roundsLeft: Ge ? { x: Ge.x, y: Ge.y } : void 0,
    chainStart: n.phases.length ? l.id : void 0,
    ended: a,
    endedBy: c,
    endIndex: d,
    firedEvents: G,
    warn: !a && E && L >= r.cap - 2,
    isLastRound: !a && E && L === r.cap,
    overdue: !a && E && !r.next && L > r.cap,
    next: I,
    skipGoal: h,
    settlement: x,
    panel: F,
    rolesFromChat: v,
    perMessage: z,
    entryIndex: s
  };
}
const Eo = "rlzc_token", Co = "rlzc_progress", Mo = "rlzc_turn", Io = "rlzc_state", ku = [Eo, Co, Mo, Io], ts = { token: "", progress: "", turn: "", injected: [] };
function zu(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function On(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const i = new RegExp(`(?<!\\{)\\{(${s.map(zu).join("|")})\\}(?!\\})`, "g");
  return e.replace(i, (r, l) => n?.[l]?.trim() || l);
}
function $u(e, t) {
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
function Su(e) {
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
    const b = s.panelLimit || s.briefing?.limit;
    b && o.push(`时限：${b}`);
  }
  const a = ["［副本进度·仅供AI］", o.join("　")];
  if (s.briefing?.goal && (!r || e.id === "generic") && a.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const b = e.roles.filter((I) => i?.[I]);
    a.push(
      b.length ? `角色登记：${e.roles.map((I) => `${I}=${i?.[I] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const c = $u(e, t.firedEvents);
  c && a.push(`已发生事件：${c}`);
  const d = [];
  l.skipFrom !== void 0 && d.push(`玩家选择快进：本轮从「${t.phase.name}」第${l.skipFrom}轮快进到第${l.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const h = new Map((s.subNext ?? []).map((b) => [b.id, b])), x = l.events.filter((b) => b.if && h.get(b.id)?.ok === !1).map((b) => ({ id: b.id, reason: h.get(b.id).reason })), F = l.events.filter((b) => !x.some((I) => I.id === b.id)), v = (b) => !!b.if && h.get(b.id)?.ok === !0, _ = F.filter((b) => b.kind === "event"), z = F.filter((b) => b.kind === "directive");
  if (_.length && (d.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), _.forEach((b) => d.push(Ji(b, e, i, v(b))))), z.length && (d.push("本轮写作要求："), z.forEach((b) => d.push(Ji(b, e, i, v(b))))), t.isLastRound ? d.push(Su(t)) : t.overdue && d.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && d.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && d.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((b) => i?.[b])) {
    let b = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((I) => `${I}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (b += "死者不得是{{user}}或其同伴。"), d.push(b);
  }
  let M;
  return A?.text && (A.minutes !== void 0 ? (d.push(
    `本轮<副本>的时限一栏写：${A.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), M = { text: A.text, minutes: A.minutes, total: A.total }) : (d.push(`本轮<副本>的时限一栏写：${A.text}（照抄）。`), M = { text: A.text })), {
    token: e.token,
    progress: a.join(`
`),
    turn: d.length ? ["［本轮指令·仅供AI］", ...d].join(`
`) : "",
    injected: F.map((b) => b.id),
    limit: M,
    skipped: x.length ? x : void 0,
    state: s.stateText || void 0
  };
}
const Cu = 1, Mu = 0;
function oe() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function Iu() {
  const e = oe();
  return e.eventTypes ?? e.event_types ?? {};
}
function Xe(e, t) {
  const n = Iu()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  oe().eventSource.on(n, t);
}
function ae() {
  return oe().chat ?? [];
}
function ns() {
  const e = oe();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function ss() {
  return oe().chatMetadata ?? {};
}
function fn() {
  const e = oe();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Ht(e, t, n, s) {
  oe().setExtensionPrompt(e, t, Cu, n, s, Mu);
}
function Ce(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Ue(e) {
  const t = oe();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function qi(e, t = "") {
  const n = oe();
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
  const s = ae()[e];
  if (!s || s.is_user) return;
  const i = String(s.extra?.display_text ?? s.mes ?? "");
  if (!To(n ? Ct : t, "").test(i)) return;
  const r = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!r) return;
  const l = oe().messageFormatting;
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
function Lu(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class Kt extends Error {
}
function Du(e) {
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
      return Du(await e(t));
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
function Lo() {
  return oe().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function Do(e) {
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
    headers: Lo(),
    signal: n,
    body: JSON.stringify({
      ...Do(e),
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
  const t = oe();
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
    headers: Lo(),
    body: JSON.stringify(Do(e))
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
const rt = "rlzc";
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
function ed(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return We(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function td(e, t) {
  const n = ed(e, t);
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
  const s = vu(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function nd(e, t, n, s, i = []) {
  for (let r = Math.max(0, n); r <= Math.min(s, e.length - 1); r++) {
    const l = rs(e, r, t);
    if (l && !i.includes(si(r, l.info.name))) return l;
  }
  return null;
}
function sd(e, t, n = [], s = Ls, i = 0) {
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
const id = /[■█▰●◆★▮▓]/g, rd = /[□░▱○◇☆▯▒]/g;
function od(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const r = Number(n[2]);
    return r === 100 ? Number(n[1]) : r > 0 ? Math.round(Number(n[1]) / r * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(id) ?? []).length, i = (t.match(rd) ?? []).length;
  return s + i > 0 ? Math.round(s / (s + i) * 100) : null;
}
function Xi(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function ld(e, t) {
  return Xi(e).includes(Xi(t));
}
function Ad(e, t, n) {
  const s = [], i = Object.keys(n.perMessage).map(Number).sort((A, a) => A - a);
  let r = !1, l = null, o = !1;
  for (const A of i) {
    const a = n.perMessage[A], d = t.phases.find((b) => b.id === a.phase)?.name ?? "进行中", h = (b, I) => s.push({ index: A, phase: d, round: a.round, kind: b, text: I }), x = e[A]?.extra?.rlzc;
    for (const b of x?.sub?.events ?? []) b.status === "missed" && h("eventMissed", `${b.id} 未写出来：${b.reason}`);
    for (const b of x?.skippedEvents ?? []) h("eventSkipped", `${b.id} 条件不成立，已跳过：${b.reason}`);
    const F = zo(String(e[A]?.mes ?? "")), v = A === n.entryIndex;
    if (!F) {
      v || h("missing", "本轮回复缺少 <副本> 面板"), o = !v;
      continue;
    }
    o = !1;
    const _ = od(F.progressBar);
    F.progressBar === void 0 ? h("progressUnreadable", "<副本> 中没有进度条一栏") : _ === null ? h("progressUnreadable", `进度条无法读出数值：「${F.progressBar}」`) : (!r && _ !== 0 && h("progressStart", `入场后第一轮的进度条应为0，实际为 ${_}`), (_ < 0 || _ > 100) && h("progressRange", `进度条数值 ${_} 超出 0–100`), l !== null && _ < l && h("progressDrop", `进度条比上一轮低：${l} → ${_}`), l = _), r = !0;
    const z = e[A]?.extra?.rlzc?.limit, M = z?.text ? z : a.limit?.text ? { text: a.limit.text, minutes: a.limit.minutes, total: a.limit.total } : void 0;
    if (M) {
      const b = F.limit;
      if (M.minutes !== void 0) {
        const I = fo(b);
        !b || I.remaining === null || I.total === null ? h("limit", `时限读不到「剩余时间/总时长」：写的是「${b ?? "（没有时限一栏）"}」，注入的是「${M.text}」`) : (I.remaining > M.minutes && h("limit", `剩余时间比注入值多：写的是${Ft(I.remaining)}，注入的是${Ft(M.minutes)}`), M.total !== void 0 && I.total !== M.total && h("limit", `总时长与注入值不一致：写的是${Ft(I.total)}，注入的是${Ft(M.total)}`));
      } else (!b || !ld(b, M.text)) && h("limit", `时限与注入文字不一致：写的是「${b ?? "（没有时限一栏）"}」，注入的是「${M.text}」`);
    }
  }
  return { warnings: s, missingLast: o, hasPanel: r };
}
const Ds = "rlzc", Ho = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, $n = {
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
  settings: structuredClone($n),
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
function ad() {
  const e = oe().extensionSettings, t = e[Ds] ?? {}, n = {
    ...structuredClone($n),
    ...t,
    depths: { ...$n.depths, ...t.depths ?? {} },
    ball: { ...$n.ball, ...t.ball ?? {} },
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
  e[Ds] = n, m.settings = n, m.packs = ni(n.customPacks);
}
function Ee() {
  oe().extensionSettings[Ds] = /* @__PURE__ */ H(m.settings), oe().saveSettingsDebounced(), m.packs = ni(m.settings.customPacks);
}
function cd(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = go(t);
  if (n.length) return n;
  const s = t;
  return ni([]).some((i) => i.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (m.settings.customPacks = [...m.settings.customPacks.filter((i) => i.id !== s.id), s], Ee(), []);
}
function ud(e) {
  m.settings.customPacks = m.settings.customPacks.filter((t) => t.id !== e), Ee();
}
function dt() {
  return Qu(ss()[rt]);
}
function os() {
  const e = ss(), t = Array.isArray(e[rt]?.declined) ? e[rt].declined : [], n = Array.isArray(e[Qi]) ? e[Qi] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function dd(e) {
  const t = ss(), n = [...os().filter((s) => s !== e), e];
  t[rt] = { ...t[rt] ?? {}, declined: n }, fn();
}
function Mt(e) {
  const t = ss(), n = os(), s = n.length ? { declined: n } : {};
  e ? t[rt] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[rt] = s : delete t[rt], fn();
}
function ri(e) {
  const t = dt();
  t && (e(t), Mt(t), Qe());
}
function Zo(e) {
  const t = ae();
  return (e === "swipe" || e === "continue") && We(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Ln(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Xu(t, m.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = _u(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? Ad(e, n, s) : null };
}
function Qe() {
  const e = ae();
  let t = dt();
  if (t) {
    const s = JSON.stringify(t);
    if (!td(e, t))
      Mt(null), Ce("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const i = Ln(e, t);
      i.progress && (t.status = i.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && Mt(t);
    }
  }
  const n = Ln(e, t);
  m.session = n.session, m.pack = n.pack, m.progress = n.progress, m.audit = n.audit, m.subLine = el(e, n.progress), m.tick++;
}
function Jo() {
  if (m.session)
    return Go(m.session, m.progress?.rolesFromChat);
}
function Dn() {
  for (const e of ku) Ht(e, "", 0, !1);
}
let tn = -1;
function fd(e) {
  const t = Zo(e), n = dt(), { pack: s, progress: i, audit: r } = Ln(t, n), l = n ? Go(n, i?.rolesFromChat) : void 0, o = li() && !!i, A = o ? is(t, i.entryIndex) : null, a = s ? Eu(s, i, n, {
    roles: l,
    briefing: n?.briefing,
    panelLimit: i?.panel?.limit,
    audit: r ?? void 0,
    subNext: o ? Gu(t, i.entryIndex) : void 0,
    stateText: A ? jo(s, A.state) : void 0
  }) : ts;
  Dn();
  const c = m.settings.depths;
  a.token && Ht(Eo, a.token, c.token, !0), a.progress && Ht(Co, a.progress, c.progress, !1), a.turn && Ht(Mo, a.turn, c.turn, !1), a.state && Ht(Io, a.state, c.progress, !1), m.lastInjection = a, tn = t.length, Ko("注入", e, a);
}
const Bs = /* @__PURE__ */ new Set();
async function pd() {
  const e = ae(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = hu(n.mes);
  if (!s) return;
  const i = dt();
  if (!i || i.status !== "active" || i.manual.some((a) => a.kind === "skip" && a.atIndex === t)) return;
  const r = `${ns()}:${t}:${n.mes}`;
  if (Bs.has(r)) return;
  Bs.add(r);
  const { pack: l, progress: o } = Ln(e, i);
  if (!l || !o || o.ended) return;
  const A = mu(l, o.phase, o.round, s);
  A && await Ue(`是否跳到${s}？（${A.label}）`) && (i.manual.push({ kind: "skip", atIndex: t, targetPhase: A.phase, targetRound: A.round }), Mt(i));
}
async function hd(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Dn();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await pd(), await Sd(s), fd(s);
  } catch (i) {
    console.error("[rlzc] 拦截器出错", i), Dn();
  }
}
const er = /* @__PURE__ */ new Set();
function oi() {
  const e = dt();
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
    dd(si(t, n.name));
    return;
  }
  const r = rs(ae(), t, m.packs);
  if (!r || r.info.name !== n.name) {
    Ce("warning", "入场消息已变化，未启用。");
    return;
  }
  const l = { ...n };
  e.pack || (l.rounds = ho(n.limit, xo(n), m.settings.genericCaps).rounds), Xo(e.pack ?? bo(l, m.settings.genericCaps), t, l);
}
function Qo() {
  const e = sd(ae(), dt(), os(), m.packs, oi());
  e && qo(e);
}
function md(e) {
  Qe();
  const t = ae(), n = oi();
  let s = -1;
  for (let i = n; i < t.length; i++) if (We(t[i])) {
    s = i;
    break;
  }
  e === s && Qo();
}
function Xo(e, t, n) {
  const i = ae()[t], r = qu(e, t, n);
  i.extra = i.extra ?? {}, i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: r.id }, Mt(r), Qe(), m.progress && (i.extra.rlzc.injected = ii(m.progress.perMessage[t]?.events ?? [])), fn(), Ce("success", `已进入副本《${e.name}》。`);
}
async function gd(e) {
  const t = m.packs.find((r) => r.id === e);
  if (!t) return;
  const n = ae();
  let s = n.length - 1;
  for (; s >= 0 && !We(n[s]); ) s--;
  if (s < 0) {
    Ce("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  dt()?.status === "active" && !await Ue("当前已有进行中的副本，确定要替换吗？") || await Ue(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && Xo(t, s, yo(n[s].mes) ?? { name: t.name });
}
function ls(e) {
  ri((t) => t.manual.push(e));
}
function As() {
  return ae().length - 1;
}
async function tr() {
  const e = m.progress;
  if (!(!e || e.ended || !m.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Ce("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ue(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (ls({ kind: "skip", atIndex: As(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Ce("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function nr() {
  !m.session || m.progress?.ended || await Ue("确定要手动结束当前副本吗？") && ls({ kind: "end", atIndex: As() });
}
function xd(e) {
  ls({ kind: "setPhase", atIndex: As(), phase: e });
}
function bd(e) {
  ls({ kind: "setRound", atIndex: As(), round: e });
}
function vd(e) {
  ri((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function yd(e) {
  ri((t) => t.manual.splice(e, 1));
}
async function sr() {
  m.session && await Ue("确定要删除当前副本会话吗？（不会改动聊天记录）") && (Mt(null), Qe());
}
function li() {
  return m.settings.subApi.source !== "off";
}
function wd() {
  const e = m.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function _d(e) {
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
let Sn = null;
const Ai = /* @__PURE__ */ new Set();
function ai(e) {
  return Vu(ns(), e, ae()[e]);
}
function ir(e) {
  m.subBusy = e, m.subLine = el(ae(), m.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && m.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function tl(e, t, n) {
  if (ai(e) !== t) return;
  const s = ae()[e];
  s?.extra?.rlzc && (s.extra.rlzc = ii({ ...s.extra.rlzc, sub: n }), fn(), Qe());
}
function kd(e, t) {
  const n = ae(), s = m.progress, i = m.pack, r = n[e], l = s?.perMessage[e];
  if (!i || !s || !l || !r) return;
  const o = Jo(), A = (b) => ({ ...b, text: On(b.text, i, o), if: b.if ? On(b.if, i, o) : void 0 }), a = Lu(i, r.extra?.rlzc?.injected ?? []).map(A), c = (s.next?.events ?? []).filter((b) => b.if).map(A);
  if (!Wu({
    enabled: li(),
    active: !s.ended && m.session?.status === "active",
    type: t,
    saveMode: m.settings.subApi.saveMode,
    hasEvents: a.length > 0,
    hasNextConditional: c.length > 0
  })) return;
  const h = ai(e);
  if (Ai.has(h)) return;
  const x = i.phases.find((b) => b.id === l.phase), F = is(n.slice(0, e), s.entryIndex), v = ju({
    pack: i,
    phaseName: x?.name ?? l.phase,
    round: l.round,
    prevState: F?.state ?? null,
    events: a,
    nextConditional: c,
    text: String(r.mes ?? "")
  }), _ = oe().substituteParams, z = _ ? { system: _(v.system), user: _(v.user) } : v, M = zd(e, h, l.round, z);
  Sn = { key: h, index: e, promise: M }, M.finally(() => {
    Sn?.key === h && (Sn = null);
  });
}
async function zd(e, t, n, s) {
  ir(!0);
  try {
    let i = 2;
    for (; ; ) {
      const r = wd();
      if (!r) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const l = Date.now();
      try {
        const o = await Uu((A) => Ku(r, A), s, i);
        tl(e, t, { ...o, ms: Date.now() - l, via: _d(r), at: (/* @__PURE__ */ new Date()).toISOString() }), Ai.add(t);
        return;
      } catch (o) {
        if (ai(e) !== t) return;
        const A = Ro(o), a = String(o?.message ?? o).slice(0, 200);
        if (Ko("副本事件检测失败", A, o), !m.settings.subApi.wait) {
          Ce("warning", `第${n}轮事件检测失败（${A}），已沿用上一轮状态。`), $s(e, t, A);
          return;
        }
        if (await $d(n, A, a) === "skip") {
          $s(e, t, A);
          return;
        }
        i = 0;
      }
    }
  } catch (i) {
    Ce("error", String(i?.message ?? i)), $s(e, t, "其他");
  } finally {
    ir(!1);
  }
}
function $s(e, t, n) {
  Ai.add(t), tl(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function $d(e, t, n) {
  const s = oe();
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
  const d = document.createElement("select");
  d.className = "text_pole";
  const h = [{ value: "", text: "请选择…" }];
  for (const v of i.presets) i.source === "preset" && v.id === i.presetId || h.push({ value: `preset:${v.id}`, text: `自设API：${v.name}` });
  i.source !== "main" && h.push({ value: "main", text: "跟随主API" });
  for (const v of h) {
    const _ = document.createElement("option");
    _.value = v.value, _.textContent = v.text, d.append(_);
  }
  c.append(d), a.append(c), r.append(l, o, A, a);
  let x;
  d.addEventListener("change", () => {
    const v = d.value;
    v && (v === "main" ? i.source = "main" : (i.source = "preset", i.presetId = v.slice(7)), Ee(), x.complete(s.POPUP_RESULT.CUSTOM1));
  }), x = new s.Popup(r, s.POPUP_TYPE.TEXT, "", {
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
  const F = await x.show();
  return F === s.POPUP_RESULT.AFFIRMATIVE || F === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function Sd(e) {
  const t = Sn;
  if (!(!t || !m.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= Zo(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function Ed(e, t) {
  const n = ae(), s = n[e];
  if (!We(s)) return;
  const i = dt();
  if (!i || i.status === "ended") {
    if (rs(n, e, m.packs)) {
      const A = nd(n, m.packs, oi(), e, os());
      A && qo(A);
    }
    return;
  }
  if (t === "first_message") return;
  const r = ko(s.mes);
  r && (i.roles = { ...i.roles ?? {}, ...r }), Mt(i), Qe();
  const l = m.progress?.perMessage[e];
  if (l && m.pack) {
    const A = m.pack.phases.find((x) => x.id === l.phase), a = {
      phase: A?.name ?? l.phase,
      round: l.round,
      injected: tn === e ? m.lastInjection.injected : l.events
    }, c = m.pack.time;
    c.type === "clock" && A?.clock && !A.night && !A.frozen && (a.clock = $o(c.dayStart, c.minutesPerRound, l.round));
    const d = tn === e ? m.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    d && (a.limit = d);
    const h = s.extra?.rlzc?.entry;
    h && (a.entry = h), tn === e && m.lastInjection.skipped?.length && (a.skippedEvents = m.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (a.sub = s.extra.rlzc.sub), s.extra = s.extra ?? {}, s.extra.rlzc = ii(a), fn(), Qe(), kd(e, t);
  }
  const o = _o(s.mes);
  o && Ce("info", `副本结算：${o.result ?? "—"}${o.rating ? `，评价 ${o.rating}` : ""}`);
}
function rr() {
  Bs.clear(), tn = -1, m.chatId = ns(), m.debugUnlocked = !1, m.lastInjection = ts, Dn(), Qe(), Qo(), setTimeout(() => ci(), 50);
}
function Ss() {
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
function Cd(e) {
  m.settings.panelDisplay !== e && (m.settings.panelDisplay = e, Ee(), ci(!0));
}
const Md = { class: "rlzc-ball-mark" }, Cs = 44, Id = /* @__PURE__ */ ut({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ we({ x: 0, y: 0 });
    let n = null;
    function s(c, d) {
      const h = window.innerWidth - Cs - 4, x = window.innerHeight - Cs - 4;
      return { x: Math.min(Math.max(4, c), h), y: Math.min(Math.max(4, d), x) };
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
      const d = n.moved;
      n = null, d ? (m.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, Ee()) : m.panelOpen = !m.panelOpen;
    }
    const A = ne(() => !!m.session && !m.progress?.ended), a = ne(() => !!m.progress?.warn);
    return Jn(() => m.settings.ball, i, { deep: !0 }), lA(() => {
      i(), window.addEventListener("resize", i);
    }), AA(() => window.removeEventListener("resize", i)), (c, d) => (S(), P("button", {
      class: be(["rlzc-ball", { "is-active": A.value, "is-warn": a.value }]),
      style: Yn({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: r,
      onPointermove: l,
      onPointerup: o,
      onPointercancel: o
    }, [
      f("span", Md, O(A.value ? j(m).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
});
function Td(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Gt(e) {
  return Td(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Pd(e) {
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
      const h = Math.min(A[1].length + 2, 6);
      t.push(`<h${h}>${Gt(A[2])}</h${h}>`);
      continue;
    }
    const a = /^\s*[-*]\s+(.*)$/.exec(o), c = /^\s*(\d+)[.、]\s+(.*)$/.exec(o);
    if (a || c) {
      i();
      const h = a ? "ul" : "ol", x = a ? a[1] : c[2];
      n !== h ? (r(), n = h, t.push(h === "ol" ? `<ol start="${c[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Gt(x));
      continue;
    }
    if (n && /^\s{2,}/.test(l)) {
      t.push(`<br>${Gt(o.trim())}`);
      continue;
    }
    const d = /^>\s?(.*)$/.exec(o);
    if (d) {
      i(), r(), t.push(`<blockquote>${Gt(d[1])}</blockquote>`);
      continue;
    }
    r(), s.push(o);
  }
  return i(), r(), t.join("");
}
const Nd = {
  key: 0,
  class: "rlzc-docs"
}, Fd = { class: "rlzc-subtabs" }, Rd = ["onClick"], Od = { class: "rlzc-md" }, jd = ["innerHTML"], Ld = ["src", "alt"], Dd = {
  key: 2,
  class: "rlzc-note"
}, or = /* @__PURE__ */ ut({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ we(0);
    Jn(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = ne(() => t.pack.docs?.[n.value]), i = ne(() => s.value?.md ? Pd(s.value.md) : ""), r = ne(() => s.value?.image ? Au(t.pack, s.value.image) : null);
    return (l, o) => e.pack.docs?.length ? (S(), P("section", Nd, [
      f("div", Fd, [
        (S(!0), P(K, null, me(e.pack.docs, (A, a) => (S(), P("button", {
          key: a,
          class: be({ on: n.value === a }),
          onClick: (c) => n.value = a
        }, O(A.title), 11, Rd))), 128))
      ]),
      f("article", Od, [
        i.value ? (S(), P("div", {
          key: 0,
          innerHTML: i.value
        }, null, 8, jd)) : U("", !0),
        r.value ? (S(), P("img", {
          key: 1,
          src: r.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, Ld)) : s.value?.image && !r.value ? (S(), P("p", Dd, "图片无法加载：" + O(s.value.image), 1)) : U("", !0)
      ])
    ])) : U("", !0);
  }
}), Bd = { class: "rlzc-system" }, Vd = { class: "rlzc-card rlzc-hero" }, Wd = { class: "rlzc-hero-top" }, Ud = { class: "rlzc-level" }, Gd = {
  key: 0,
  class: "rlzc-chip"
}, Yd = {
  key: 0,
  class: "rlzc-goal"
}, Hd = { class: "rlzc-grid" }, Kd = {
  key: 0,
  class: "rlzc-stat"
}, Zd = {
  key: 1,
  class: "rlzc-stat"
}, Jd = {
  key: 2,
  class: "rlzc-stat"
}, qd = {
  key: 3,
  class: "rlzc-stat"
}, Qd = {
  key: 0,
  class: "rlzc-subline"
}, Xd = {
  key: 1,
  class: "rlzc-note"
}, ef = {
  key: 2,
  class: "rlzc-card"
}, tf = { class: "rlzc-kv" }, nf = { class: "rlzc-kv" }, sf = {
  key: 3,
  class: "rlzc-note"
}, rf = {
  key: 4,
  class: "rlzc-card"
}, of = {
  key: 0,
  class: "rlzc-kv"
}, lf = { class: "rlzc-mono" }, Af = {
  key: 1,
  class: "rlzc-tasks"
}, af = {
  key: 2,
  class: "rlzc-ps"
}, cf = { class: "rlzc-actions" }, uf = ["disabled"], df = ["disabled"], ff = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, pf = {
  key: 2,
  class: "rlzc-card"
}, hf = { class: "rlzc-row" }, mf = ["value"], gf = ["disabled"], xf = /* @__PURE__ */ ut({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ we(""), n = ne(() => !!m.session && !!m.pack), s = ne(() => m.progress), i = ne(() => n.value && !!s.value && !s.value.ended), r = ne(() => m.packs.find((h) => h.id === t.value) ?? null), l = ne(() => !!m.pack?.phases.length), o = ne(() => m.settings.panelDisplay !== "statusbar"), A = ne(() => {
      const h = s.value;
      return h ? l.value ? `${h.warn ? "⚠️ " : ""}${h.round}/${h.phase.cap}` : `第${h.round}轮` : "";
    }), a = ne(() => {
      const h = s.value;
      return h ? h.limit?.text ? h.limit.text : h.panel?.limit || m.session?.briefing?.limit || "—" : "";
    }), c = ne(() => {
      const h = s.value;
      return !!h && !h.ended && l.value && h.phase.cap > 0 && h.nextRound < h.phase.cap;
    });
    async function d() {
      t.value && (await gd(t.value), t.value = "");
    }
    return (h, x) => (S(), P("div", Bd, [
      n.value && s.value ? (S(), P(K, { key: 0 }, [
        f("div", Vd, [
          f("div", Wd, [
            f("span", Ud, O(j(m).pack.level), 1),
            f("h3", null, O(j(m).pack.name), 1),
            s.value.ended ? (S(), P("span", Gd, "已结束")) : U("", !0)
          ]),
          j(m).session?.briefing?.goal ? (S(), P("p", Yd, "目标：" + O(j(m).session.briefing.goal), 1)) : U("", !0)
        ]),
        f("div", Hd, [
          l.value ? (S(), P("div", Kd, [
            x[3] || (x[3] = f("span", null, "阶段", -1)),
            f("b", null, O(s.value.phase.name), 1)
          ])) : U("", !0),
          f("div", {
            class: be(["rlzc-stat", { warn: s.value.warn }])
          }, [
            x[4] || (x[4] = f("span", null, "轮次", -1)),
            f("b", null, O(A.value), 1)
          ], 2),
          s.value.currentClock ? (S(), P("div", Zd, [
            x[5] || (x[5] = f("span", null, "钟时", -1)),
            f("b", null, O(s.value.currentClock), 1)
          ])) : U("", !0),
          s.value.roundsLeft ? (S(), P("div", Jd, [
            x[6] || (x[6] = f("span", null, "最多剩余轮次", -1)),
            f("b", null, O(s.value.roundsLeft.x) + "/" + O(s.value.roundsLeft.y), 1)
          ])) : U("", !0),
          o.value ? (S(), P("div", qd, [
            x[7] || (x[7] = f("span", null, "剩余时间", -1)),
            f("b", null, O(a.value), 1)
          ])) : U("", !0)
        ]),
        j(m).subLine ? (S(), P("p", Qd, O(j(m).subLine), 1)) : U("", !0),
        s.value.skipGoal ? (S(), P("div", Xd, "快进中：目标 " + O(j(m).pack.phases.find((F) => F.id === s.value.skipGoal.phase)?.name) + " 第" + O(s.value.skipGoal.round) + "轮", 1)) : U("", !0),
        s.value.ended && s.value.settlement ? (S(), P("div", ef, [
          f("div", tf, [
            x[8] || (x[8] = f("span", null, "结果", -1)),
            f("b", null, O(s.value.settlement.result ?? "—"), 1)
          ]),
          f("div", nf, [
            x[9] || (x[9] = f("span", null, "评价", -1)),
            f("b", null, O(s.value.settlement.rating ?? "—"), 1)
          ])
        ])) : s.value.ended ? (S(), P("div", sf, "副本已手动结束。")) : U("", !0),
        o.value && s.value.panel ? (S(), P("div", rf, [
          s.value.panel.progressBar ? (S(), P("div", of, [
            x[10] || (x[10] = f("span", null, "进度", -1)),
            f("b", lf, O(s.value.panel.progressBar), 1)
          ])) : U("", !0),
          s.value.panel.tasks.length ? (S(), P("div", Af, [
            x[11] || (x[11] = f("span", null, "任务", -1)),
            f("ul", null, [
              (S(!0), P(K, null, me(s.value.panel.tasks, (F, v) => (S(), P("li", { key: v }, O(F), 1))), 128))
            ])
          ])) : U("", !0),
          s.value.panel.ps ? (S(), P("div", af, "ps：" + O(s.value.panel.ps), 1)) : U("", !0)
        ])) : U("", !0),
        f("div", cf, [
          f("button", {
            class: "rlzc-btn",
            disabled: !c.value,
            onClick: x[0] || (x[0] = //@ts-ignore
            (...F) => j(tr) && j(tr)(...F))
          }, "跳过（到本阶段结束）", 8, uf),
          f("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: x[1] || (x[1] = //@ts-ignore
            (...F) => j(nr) && j(nr)(...F))
          }, "手动结束副本", 8, df)
        ]),
        i.value && j(m).pack.docs?.length ? (S(), it(or, {
          key: 5,
          pack: j(m).pack
        }, null, 8, ["pack"])) : U("", !0)
      ], 64)) : (S(), P("div", ff, [...x[12] || (x[12] = [
        f("h3", null, "休整中", -1),
        f("p", null, "当前没有进行中的副本，不会注入任何提示词。", -1)
      ])])),
      i.value ? U("", !0) : (S(), P("div", pf, [
        x[14] || (x[14] = f("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        f("div", hf, [
          _n(f("select", {
            "onUpdate:modelValue": x[2] || (x[2] = (F) => t.value = F),
            class: "rlzc-input"
          }, [
            x[13] || (x[13] = f("option", { value: "" }, "选择副本…", -1)),
            (S(!0), P(K, null, me(j(m).packs, (F) => (S(), P("option", {
              key: F.id,
              value: F.id
            }, O(F.level) + "｜" + O(F.name), 9, mf))), 128))
          ], 512), [
            [uo, t.value]
          ]),
          f("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: d
          }, "进入", 8, gf)
        ])
      ])),
      !i.value && r.value?.docs?.length ? (S(), it(or, {
        key: 3,
        pack: r.value
      }, null, 8, ["pack"])) : U("", !0)
    ]));
  }
}), bf = { class: "rlzc-card rlzc-subapi" }, vf = { class: "rlzc-subapi-head" }, yf = ["data-kind"], wf = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, _f = {
  key: 0,
  class: "rlzc-preset-area"
}, kf = { class: "rlzc-preset-row" }, zf = ["value"], $f = {
  key: 0,
  value: ""
}, Sf = ["value"], Ef = ["disabled"], Cf = ["disabled"], Mf = { class: "rlzc-stacked-field" }, If = ["value"], Tf = { class: "rlzc-stacked-field" }, Pf = { class: "rlzc-key-wrap" }, Nf = ["type", "value"], Ff = ["aria-label"], Rf = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Of = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, jf = { class: "rlzc-stacked-field" }, Lf = ["value"], Df = ["value"], Bf = ["value"], Vf = ["value"], Wf = { class: "rlzc-conn-row" }, Uf = ["data-kind"], Gf = ["disabled"], Yf = {
  key: 1,
  class: "rlzc-option-list"
}, Hf = { class: "rlzc-option-row" }, Kf = ["aria-checked"], Zf = { class: "rlzc-option-row" }, Jf = ["aria-checked"], qf = { class: "rlzc-option-row rlzc-option-row-timeout" }, Qf = { class: "rlzc-timeout-wrap" }, Xf = ["value"], ep = /* @__PURE__ */ ut({
  __name: "SubApiCard",
  setup(e) {
    const t = ne(() => m.settings.subApi), n = ne(() => t.value.presets.find((L) => L.id === t.value.presetId) ?? null), s = /* @__PURE__ */ we([]), i = /* @__PURE__ */ we(!1), r = /* @__PURE__ */ we(!1), l = /* @__PURE__ */ we("none"), o = /* @__PURE__ */ we(""), A = ne(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : l.value === "ok" ? { kind: "on", text: "已连接" } : l.value === "fail" ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" }), a = ne(() => l.value === "ok" ? `已连接 · 共 ${s.value.length} 个模型` : l.value === "fail" ? `连接失败：${o.value}` : "未测试");
    function c() {
      Ee();
    }
    function d(L) {
      t.value.source = L, l.value = "none", c();
    }
    function h() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function x() {
      const L = (await qi("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!L) return;
      const E = { id: h(), name: L, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, E], t.value.presetId = E.id, s.value = [], l.value = "none", c();
    }
    async function F() {
      if (!n.value) return;
      const L = (await qi("改名为：", n.value.name))?.trim();
      L && (n.value.name = L, c());
    }
    async function v() {
      n.value && await Ue(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((L) => L.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", s.value = [], l.value = "none", c());
    }
    function _(L) {
      t.value.presetId = L.target.value, s.value = [], l.value = "none", c();
    }
    function z(L, E) {
      n.value && (n.value[L] = E.target.value.trim(), c());
    }
    async function M() {
      if (n.value) {
        r.value = !0, l.value = "none", o.value = "";
        try {
          const L = await Zu(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          s.value = L.models, !n.value.model && L.models.length && (n.value.model = L.models[0], c()), l.value = "ok";
        } catch (L) {
          l.value = "fail", o.value = Ro(L), s.value = await Uo(n.value).catch(() => []);
        } finally {
          r.value = !1;
        }
      }
    }
    function b(L) {
      const E = Math.floor(Number(L.target.value));
      if (!Number.isFinite(E) || E < 5) {
        Ce("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = E, c();
    }
    function I(L, E) {
      t.value[L] = E, c();
    }
    return (L, E) => (S(), P("div", bf, [
      f("div", vf, [
        E[9] || (E[9] = f("h4", null, "副本事件检测", -1)),
        f("span", {
          class: "rlzc-dot",
          "data-kind": A.value.kind
        }, O(A.value.text), 9, yf)
      ]),
      E[24] || (E[24] = f("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
      f("div", wf, [
        f("button", {
          class: be({ on: t.value.source === "off" }),
          onClick: E[0] || (E[0] = (G) => d("off"))
        }, "关闭", 2),
        f("button", {
          class: be({ on: t.value.source === "main" }),
          onClick: E[1] || (E[1] = (G) => d("main"))
        }, "跟随主API", 2),
        f("button", {
          class: be({ on: t.value.source === "preset" }),
          onClick: E[2] || (E[2] = (G) => d("preset"))
        }, "自设API", 2)
      ]),
      t.value.source === "preset" ? (S(), P("div", _f, [
        f("div", kf, [
          f("select", {
            class: "rlzc-input",
            value: t.value.presetId,
            onChange: _
          }, [
            t.value.presets.length ? U("", !0) : (S(), P("option", $f, "还没有保存的接口")),
            (S(!0), P(K, null, me(t.value.presets, (G) => (S(), P("option", {
              key: G.id,
              value: G.id
            }, O(G.name), 9, Sf))), 128))
          ], 40, zf),
          f("button", {
            class: "rlzc-icon-btn",
            "aria-label": "新建接口",
            type: "button",
            onClick: x
          }, [...E[10] || (E[10] = [
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
            onClick: F
          }, [...E[11] || (E[11] = [
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
          ])], 8, Ef),
          f("button", {
            class: "rlzc-icon-btn rlzc-danger",
            "aria-label": "删除接口",
            type: "button",
            disabled: !n.value,
            onClick: v
          }, [...E[12] || (E[12] = [
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
          ])], 8, Cf)
        ]),
        n.value ? (S(), P(K, { key: 0 }, [
          f("div", Mf, [
            E[13] || (E[13] = f("label", { class: "rlzc-label" }, "地址", -1)),
            f("input", {
              class: "rlzc-input",
              value: n.value.url,
              placeholder: "https://…/v1",
              onChange: E[3] || (E[3] = (G) => z("url", G))
            }, null, 40, If)
          ]),
          f("div", Tf, [
            E[16] || (E[16] = f("label", { class: "rlzc-label" }, "密钥", -1)),
            f("div", Pf, [
              f("input", {
                class: "rlzc-input",
                type: i.value ? "text" : "password",
                value: n.value.key,
                autocomplete: "off",
                onChange: E[4] || (E[4] = (G) => z("key", G))
              }, null, 40, Nf),
              f("button", {
                class: "rlzc-eye-btn",
                type: "button",
                "aria-label": i.value ? "隐藏密钥" : "显示密钥",
                onClick: E[5] || (E[5] = (G) => i.value = !i.value)
              }, [
                i.value ? (S(), P("svg", Rf, [...E[14] || (E[14] = [
                  f("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                  f("circle", {
                    cx: "8",
                    cy: "8",
                    r: "2"
                  }, null, -1),
                  f("path", { d: "M2 2l12 12" }, null, -1)
                ])])) : (S(), P("svg", Of, [...E[15] || (E[15] = [
                  f("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                  f("circle", {
                    cx: "8",
                    cy: "8",
                    r: "2"
                  }, null, -1)
                ])]))
              ], 8, Ff)
            ])
          ]),
          f("div", jf, [
            E[17] || (E[17] = f("label", { class: "rlzc-label" }, "模型", -1)),
            s.value.length ? (S(), P("select", {
              key: 0,
              class: "rlzc-input",
              value: n.value.model,
              onChange: E[6] || (E[6] = (G) => z("model", G))
            }, [
              s.value.includes(n.value.model) ? U("", !0) : (S(), P("option", {
                key: 0,
                value: n.value.model
              }, O(n.value.model || "请选择…"), 9, Df)),
              (S(!0), P(K, null, me(s.value, (G) => (S(), P("option", {
                key: G,
                value: G
              }, O(G), 9, Bf))), 128))
            ], 40, Lf)) : (S(), P("input", {
              key: 1,
              class: "rlzc-input rlzc-input-disabled",
              value: n.value.model ? n.value.model : "先测试连接",
              readonly: "",
              tabindex: "-1"
            }, null, 8, Vf))
          ]),
          f("div", Wf, [
            f("span", {
              class: "rlzc-dot",
              "data-kind": l.value === "ok" ? "on" : l.value === "fail" ? "warn" : "off"
            }, O(a.value), 9, Uf),
            f("button", {
              class: "rlzc-btn ghost",
              disabled: r.value || !n.value.url,
              onClick: M
            }, "测试连接", 8, Gf)
          ])
        ], 64)) : U("", !0)
      ])) : U("", !0),
      t.value.source !== "off" ? (S(), P("div", Yf, [
        f("div", Hf, [
          E[19] || (E[19] = f("div", { class: "rlzc-option-label" }, [
            f("span", null, "省钱模式"),
            f("small", null, "只在有预设事件的轮次检测")
          ], -1)),
          f("button", {
            role: "switch",
            type: "button",
            "aria-checked": t.value.saveMode ? "true" : "false",
            class: be(["rlzc-toggle", { on: t.value.saveMode }]),
            onClick: E[7] || (E[7] = (G) => I("saveMode", !t.value.saveMode))
          }, [...E[18] || (E[18] = [
            f("span", null, null, -1)
          ])], 10, Kf)
        ]),
        f("div", Zf, [
          E[21] || (E[21] = f("div", { class: "rlzc-option-label" }, [
            f("span", null, "等检测完再写下一轮"),
            f("small", null, "关掉更快，状态可能晚一轮")
          ], -1)),
          f("button", {
            role: "switch",
            type: "button",
            "aria-checked": t.value.wait ? "true" : "false",
            class: be(["rlzc-toggle", { on: t.value.wait }]),
            onClick: E[8] || (E[8] = (G) => I("wait", !t.value.wait))
          }, [...E[20] || (E[20] = [
            f("span", null, null, -1)
          ])], 10, Jf)
        ]),
        f("div", qf, [
          E[23] || (E[23] = f("span", null, "超时", -1)),
          f("div", Qf, [
            f("input", {
              type: "number",
              min: "5",
              class: "rlzc-input rlzc-input-num",
              value: t.value.timeoutSec,
              onChange: b
            }, null, 40, Xf),
            E[22] || (E[22] = f("span", { class: "rlzc-unit" }, "秒", -1))
          ])
        ])
      ])) : U("", !0)
    ]));
  }
}), tp = { class: "rlzc-settings" }, np = { class: "rlzc-card" }, sp = ["value"], ip = { class: "rlzc-card" }, rp = { class: "rlzc-depth" }, op = { class: "rlzc-field" }, lp = ["value"], Ap = { class: "rlzc-field" }, ap = ["value"], cp = { class: "rlzc-field" }, up = ["value"], dp = { class: "rlzc-card" }, fp = ["value", "onChange"], pp = { class: "rlzc-card" }, hp = {
  key: 0,
  class: "rlzc-list"
}, mp = ["onClick"], gp = {
  key: 1,
  class: "rlzc-hint"
}, xp = {
  key: 2,
  class: "rlzc-errors"
}, bp = { class: "rlzc-card" }, vp = { class: "rlzc-check" }, yp = ["checked"], wp = { class: "rlzc-check" }, _p = ["checked"], kp = /* @__PURE__ */ ut({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ we([]), n = /* @__PURE__ */ we(null);
    function s(c, d) {
      const h = Math.max(0, Math.min(1e4, Math.floor(Number(d.target.value) || 0)));
      m.settings.depths[c] = h, Ee();
    }
    async function i(c) {
      const d = c.target, h = d.files?.[0];
      d.value = "", h && (t.value = cd(await h.text()), t.value.length || Ce("success", `已导入副本包：${h.name}`));
    }
    async function r(c, d) {
      await Ue(`确定删除自定义副本包《${d}》吗？`) && ud(c);
    }
    const l = ["D", "C", "B", "A", "S"];
    function o(c, d) {
      const h = Math.floor(Number(d.target.value));
      !Number.isFinite(h) || h < 1 || (m.settings.genericCaps = { ...m.settings.genericCaps, [c]: h }, Ee());
    }
    function A(c) {
      Cd(c.target.value);
    }
    function a(c, d) {
      m.settings[c] = d.target.checked, Ee();
    }
    return (c, d) => (S(), P(K, null, [
      f("div", tp, [
        f("div", np, [
          d[7] || (d[7] = f("h4", null, "副本信息显示位置", -1)),
          f("select", {
            class: "rlzc-input",
            value: j(m).settings.panelDisplay,
            onChange: A
          }, [...d[6] || (d[6] = [
            f("option", { value: "panel" }, "扩展面板（默认）", -1),
            f("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, sp),
          d[8] || (d[8] = f("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        f("div", ip, [
          d[12] || (d[12] = f("h4", null, "注入深度", -1)),
          d[13] || (d[13] = f("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
          f("div", rp, [
            f("label", op, [
              d[9] || (d[9] = f("span", null, [
                tt("副本暗号"),
                f("small", null, "触发世界书的副本条目")
              ], -1)),
              f("input", {
                type: "number",
                min: "0",
                class: "rlzc-input",
                value: j(m).settings.depths.token,
                onChange: d[0] || (d[0] = (h) => s("token", h))
              }, null, 40, lp)
            ]),
            f("label", Ap, [
              d[10] || (d[10] = f("span", null, [
                tt("副本进度"),
                f("small", null, "阶段、轮次、时限、副本状态")
              ], -1)),
              f("input", {
                type: "number",
                min: "0",
                class: "rlzc-input",
                value: j(m).settings.depths.progress,
                onChange: d[1] || (d[1] = (h) => s("progress", h))
              }, null, 40, ap)
            ]),
            f("label", cp, [
              d[11] || (d[11] = f("span", null, [
                tt("本轮指令"),
                f("small", null, "本轮事件与时限写法")
              ], -1)),
              f("input", {
                type: "number",
                min: "0",
                class: "rlzc-input",
                value: j(m).settings.depths.turn,
                onChange: d[2] || (d[2] = (h) => s("turn", h))
              }, null, 40, up)
            ])
          ])
        ]),
        Le(ep),
        f("div", dp, [
          d[14] || (d[14] = f("h4", null, "通用副本默认轮数上限", -1)),
          d[15] || (d[15] = f("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
          (S(), P(K, null, me(l, (h) => f("label", {
            key: h,
            class: "rlzc-field"
          }, [
            f("span", null, O(h) + " 级", 1),
            f("input", {
              type: "number",
              min: "1",
              class: "rlzc-input",
              value: j(m).settings.genericCaps[h],
              onChange: (x) => o(h, x)
            }, null, 40, fp)
          ])), 64))
        ]),
        f("div", pp, [
          d[16] || (d[16] = f("h4", null, "自定义副本包", -1)),
          j(m).settings.customPacks.length ? (S(), P("ul", hp, [
            (S(!0), P(K, null, me(j(m).settings.customPacks, (h) => (S(), P("li", {
              key: h.id
            }, [
              f("span", null, [
                tt(O(h.level) + "｜" + O(h.name) + " ", 1),
                f("small", null, "v" + O(h.version), 1)
              ]),
              f("button", {
                class: "rlzc-btn ghost small",
                onClick: (x) => r(h.id, h.name)
              }, "删除", 8, mp)
            ]))), 128))
          ])) : (S(), P("p", gp, "还没有导入自定义副本包。")),
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
            onClick: d[3] || (d[3] = (h) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (S(), P("ul", xp, [
            (S(!0), P(K, null, me(t.value, (h, x) => (S(), P("li", { key: x }, O(h), 1))), 128))
          ])) : U("", !0)
        ]),
        f("div", bp, [
          d[19] || (d[19] = f("h4", null, "其他", -1)),
          f("label", vp, [
            f("input", {
              type: "checkbox",
              checked: j(m).settings.showBall,
              onChange: d[4] || (d[4] = (h) => a("showBall", h))
            }, null, 40, yp),
            d[17] || (d[17] = tt("显示悬浮球", -1))
          ]),
          f("label", wp, [
            f("input", {
              type: "checkbox",
              checked: j(m).settings.debug,
              onChange: d[5] || (d[5] = (h) => a("debug", h))
            }, null, 40, _p),
            d[18] || (d[18] = tt("调试模式", -1))
          ])
        ])
      ]),
      d[20] || (d[20] = f("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), zp = { class: "rlzc-debug" }, $p = {
  key: 0,
  class: "rlzc-note"
}, Sp = {
  key: 0,
  class: "rlzc-note"
}, Ep = {
  key: 1,
  class: "rlzc-note"
}, Cp = {
  key: 2,
  class: "rlzc-card"
}, Mp = { class: "rlzc-row" }, Ip = ["disabled"], Tp = ["value"], Pp = ["disabled"], Np = { class: "rlzc-row" }, Fp = ["disabled"], Rp = ["disabled"], Op = {
  key: 3,
  class: "rlzc-card"
}, jp = ["onUpdate:modelValue", "disabled"], Lp = ["disabled"], Dp = { class: "rlzc-card" }, Bp = {
  key: 0,
  class: "rlzc-hint"
}, Vp = { class: "rlzc-hint" }, Wp = { class: "rlzc-list rlzc-warns" }, Up = { class: "rlzc-card" }, Gp = {
  key: 0,
  class: "rlzc-list"
}, Yp = ["disabled", "onClick"], Hp = {
  key: 1,
  class: "rlzc-hint"
}, Kp = {
  key: 4,
  class: "rlzc-card"
}, Zp = { class: "rlzc-pre" }, Jp = {
  key: 0,
  class: "rlzc-pre"
}, qp = {
  class: "rlzc-card",
  open: ""
}, Qp = { class: "rlzc-pre" }, Xp = { class: "rlzc-card" }, eh = { class: "rlzc-pre" }, th = { class: "rlzc-card" }, nh = { class: "rlzc-pre" }, sh = { class: "rlzc-card" }, ih = { class: "rlzc-table" }, rh = ["disabled"], oh = /* @__PURE__ */ ut({
  __name: "DebugTab",
  setup(e) {
    const t = ne(() => m.settings.debug), n = /* @__PURE__ */ we(""), s = /* @__PURE__ */ we(null), i = /* @__PURE__ */ Kn({});
    Jn(
      () => [m.tick, m.pack?.id],
      () => {
        for (const _ of Object.keys(i)) delete i[_];
        const v = Jo() ?? {};
        for (const _ of m.pack?.roles ?? []) i[_] = v[_] ?? "";
      },
      { immediate: !0 }
    );
    const r = ne(() => {
      m.tick;
      const v = ae(), _ = [], z = m.session?.entryIndex ?? 0;
      for (let M = z; M < v.length; M++) {
        const b = v[M]?.extra?.rlzc;
        b && _.push({ index: M, snap: b });
      }
      return _.reverse().slice(0, 60);
    }), l = ne(
      () => new Set((m.audit?.warnings ?? []).filter((v) => v.kind === "limit" || v.kind === "eventMissed").map((v) => v.index))
    ), o = ne(() => {
      if (m.tick, !m.session || !m.pack || !m.progress) return null;
      const v = ae(), _ = is(v, m.progress.entryIndex);
      let z = null;
      for (let M = v.length - 1; M >= m.progress.entryIndex; M--) {
        const b = v[M]?.extra?.rlzc?.sub;
        if (b) {
          z = b;
          break;
        }
      }
      return {
        text: _ ? jo(m.pack, _.state) : "",
        state: _?.state ?? null,
        record: z
      };
    }), A = { done: "✓", missed: "✗", void: "–" };
    function a(v) {
      if (!v.sub && !v.skippedEvents?.length) return "";
      const _ = [];
      v.sub?.skipped && _.push(`未更新（${v.sub.error ?? ""}）`);
      for (const z of v.sub?.events ?? []) _.push(`${z.id}${A[z.status]}`);
      for (const z of v.skippedEvents ?? []) _.push(`跳过${z.id}`);
      return v.sub && !v.sub.skipped && !_.length && _.push("已整理"), _.join(" ");
    }
    const c = ne(() => {
      const v = m.progress;
      if (!v) return null;
      const { perMessage: _, phase: z, next: M, ...b } = v;
      return {
        phase: z.id + " " + z.name,
        ...b,
        next: M ? { round: M.round, skipFrom: M.skipFrom, events: M.events.map((I) => I.id) } : null,
        messages: Object.keys(_).length
      };
    });
    function d() {
      n.value && xd(n.value);
    }
    function h() {
      s.value !== null && s.value >= 0 && bd(s.value);
    }
    function x() {
      vd({ ...i });
    }
    const F = (v) => JSON.stringify(v, null, 2);
    return (v, _) => (S(), P("div", zp, [
      j(m).session ? (S(), P(K, { key: 1 }, [
        t.value ? U("", !0) : (S(), P("p", Sp, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        j(m).pack && j(m).session.packVersion !== j(m).pack.version ? (S(), P("p", Ep, " 入场时副本包版本为 " + O(j(m).session.packVersion) + "，当前为 " + O(j(m).pack.version) + "。 ", 1)) : U("", !0),
        j(m).pack?.phases.length ? (S(), P("div", Cp, [
          _[4] || (_[4] = f("h4", null, "手动修正", -1)),
          f("div", Mp, [
            _n(f("select", {
              "onUpdate:modelValue": _[0] || (_[0] = (z) => n.value = z),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              _[3] || (_[3] = f("option", { value: "" }, "切换到阶段…", -1)),
              (S(!0), P(K, null, me(j(m).pack.phases, (z) => (S(), P("option", {
                key: z.id,
                value: z.id
              }, O(z.name), 9, Tp))), 128))
            ], 8, Ip), [
              [uo, n.value]
            ]),
            f("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: d
            }, "切换", 8, Pp)
          ]),
          f("div", Np, [
            _n(f("input", {
              "onUpdate:modelValue": _[1] || (_[1] = (z) => s.value = z),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, Fp), [
              [
                Vi,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            f("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: h
            }, "修正轮次", 8, Rp)
          ])
        ])) : U("", !0),
        j(m).pack?.roles?.length ? (S(), P("div", Op, [
          _[5] || (_[5] = f("h4", null, "角色登记", -1)),
          (S(!0), P(K, null, me(j(m).pack.roles, (z) => (S(), P("label", {
            key: z,
            class: "rlzc-field"
          }, [
            f("span", null, O(z), 1),
            _n(f("input", {
              "onUpdate:modelValue": (M) => i[z] = M,
              class: "rlzc-input",
              disabled: !t.value,
              placeholder: "未登记"
            }, null, 8, jp), [
              [Vi, i[z]]
            ])
          ]))), 128)),
          f("button", {
            class: "rlzc-btn small",
            disabled: !t.value,
            onClick: x
          }, "保存登记", 8, Lp)
        ])) : U("", !0),
        f("div", Dp, [
          _[7] || (_[7] = f("h4", null, "<副本> 核对", -1)),
          j(m).audit?.warnings.length ? (S(), P(K, { key: 1 }, [
            f("p", Vp, "共 " + O(j(m).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            f("ul", Wp, [
              (S(!0), P(K, null, me(j(m).audit.warnings.slice(-30).reverse(), (z, M) => (S(), P("li", { key: M }, [
                f("span", null, [
                  f("small", null, "#" + O(z.index) + "｜" + O(z.phase) + "第" + O(z.round) + "轮", 1),
                  _[6] || (_[6] = f("br", null, null, -1)),
                  tt("⚠️ " + O(z.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (S(), P("p", Bp, "没有发现问题。"))
        ]),
        f("div", Up, [
          _[8] || (_[8] = f("h4", null, "手动操作记录", -1)),
          j(m).session.manual.length ? (S(), P("ul", Gp, [
            (S(!0), P(K, null, me(j(m).session.manual, (z, M) => (S(), P("li", { key: M }, [
              f("code", null, "#" + O(z.atIndex) + " " + O(z.kind) + " " + O("phase" in z ? z.phase : "") + O("round" in z ? z.round : "") + O("targetPhase" in z ? `${z.targetPhase}:${z.targetRound}` : ""), 1),
              f("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (b) => j(yd)(M)
              }, "撤销", 8, Yp)
            ]))), 128))
          ])) : (S(), P("p", Hp, "无"))
        ]),
        o.value && (o.value.state || o.value.record) ? (S(), P("details", Kp, [
          _[9] || (_[9] = f("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          f("pre", Zp, O(o.value.text || "（尚无状态）"), 1),
          o.value.record ? (S(), P("pre", Jp, O(F(o.value.record)), 1)) : U("", !0),
          _[10] || (_[10] = f("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : U("", !0),
        f("details", qp, [
          _[11] || (_[11] = f("summary", null, "本次注入", -1)),
          f("pre", Qp, O([j(m).lastInjection.token, j(m).lastInjection.progress, j(m).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        f("details", Xp, [
          _[12] || (_[12] = f("summary", null, "重放结果", -1)),
          f("pre", eh, O(F(c.value)), 1)
        ]),
        f("details", th, [
          _[13] || (_[13] = f("summary", null, "会话原始数据", -1)),
          f("pre", nh, O(F(j(m).session)), 1)
        ]),
        f("details", sh, [
          _[15] || (_[15] = f("summary", null, "每楼快照（最近60条）", -1)),
          f("table", ih, [
            _[14] || (_[14] = f("thead", null, [
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
              (S(!0), P(K, null, me(r.value, (z) => (S(), P("tr", {
                key: z.index,
                class: be({ "rlzc-row-warn": l.value.has(z.index) })
              }, [
                f("td", null, O(z.index) + O(z.snap.entry ? "★" : ""), 1),
                f("td", null, O(z.snap.phase), 1),
                f("td", null, O(z.snap.round), 1),
                f("td", null, O(z.snap.clock ?? ""), 1),
                f("td", null, O(z.snap.limit?.text ?? ""), 1),
                f("td", null, O(z.snap.injected.join(" ")), 1),
                f("td", null, O(a(z.snap)), 1)
              ], 2))), 128))
            ])
          ])
        ]),
        f("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: _[2] || (_[2] = //@ts-ignore
          (...z) => j(sr) && j(sr)(...z))
        }, "删除副本会话", 8, rh)
      ], 64)) : (S(), P("p", $p, "当前聊天没有副本会话。"))
    ]));
  }
}), lh = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, Ah = { class: "rlzc-head" }, ah = { class: "rlzc-tabs" }, ch = ["onClick"], uh = { class: "rlzc-body" }, dh = /* @__PURE__ */ ut({
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
    return (s, i) => (S(), P("div", {
      class: "rlzc-backdrop",
      onClick: i[1] || (i[1] = ma((r) => j(m).panelOpen = !1, ["self"]))
    }, [
      f("section", lh, [
        f("header", Ah, [
          i[2] || (i[2] = f("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          f("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: i[0] || (i[0] = (r) => j(m).panelOpen = !1)
          }, "×")
        ]),
        f("nav", ah, [
          (S(), P(K, null, me(t, (r) => f("button", {
            key: r.id,
            class: be({ on: j(m).tab === r.id }),
            onClick: (l) => n(r.id)
          }, O(r.label), 11, ch)), 64))
        ]),
        f("div", uh, [
          j(m).tab === "system" ? (S(), it(xf, { key: 0 })) : j(m).tab === "settings" ? (S(), it(kp, { key: 1 })) : j(m).tab === "debug" && j(m).debugUnlocked ? (S(), it(oh, { key: 2 })) : U("", !0)
        ])
      ])
    ]));
  }
}), fh = /* @__PURE__ */ ut({
  __name: "App",
  setup(e) {
    return (t, n) => (S(), P(K, null, [
      j(m).settings.showBall ? (S(), it(Id, { key: 0 })) : U("", !0),
      j(m).panelOpen ? (S(), it(dh, { key: 1 })) : U("", !0)
    ], 64));
  }
}), ph = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field{align-items:flex-start}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-depth .rlzc-field>.rlzc-input{flex:0 0 72px;width:72px}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-conn-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout{justify-content:flex-start;gap:16px}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px}.rlzc-input-num{width:72px}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-key-notice{text-align:center;margin-top:4px}';
function hh(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function sl(e, t, n) {
  const s = oe().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function mh() {
  const e = hh();
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
async function gh(e) {
  const t = await sl("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const lr = "rlzc-host", Ar = "rlzc-menu-btn", ar = "rlzc-settings-drawer";
function xh() {
  if (document.getElementById(lr)) return;
  const e = document.createElement("div");
  e.id = lr, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = ph, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), ba(fh).mount(s), il(), rl();
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
  const n = (E, G = "", ge = "") => {
    const Ge = document.createElement(E);
    return G && (Ge.className = G), ge && (Ge.textContent = ge), Ge;
  }, s = n("div");
  s.id = ar;
  const i = n("div", "inline-drawer"), r = n("div", "inline-drawer-toggle inline-drawer-header"), l = n("div", "flex-container alignitemscenter margin0"), o = n("small", "rlzc-update-badge", "有更新");
  o.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", l.append(n("b", "", "回廊种菜系统"), o), r.append(l, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const A = n("div", "inline-drawer-content"), a = n("div", "menu_button menu_button_icon", "打开面板");
  a.prepend(n("i", "fa-solid fa-seedling")), a.addEventListener("click", () => m.panelOpen = !0);
  const c = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  c.addEventListener("click", () => {
    m.settings.ball = { x: null, y: null }, m.settings.showBall = !0, Ee();
  });
  const d = n("label", "checkbox_label"), h = document.createElement("input");
  h.type = "checkbox", h.addEventListener("change", () => {
    m.settings.showBall = h.checked, Ee();
  }), d.append(h, n("span", "", "显示悬浮球")), Jn(() => m.settings.showBall, (E) => h.checked = E, { immediate: !0 });
  const x = n("div", "flex-container");
  x.append(a, c);
  const F = n("div", "flex-container alignitemscenter"), v = n("small", "rlzc-update-status", "正在检查更新…"), _ = n("div", "menu_button menu_button_icon", "检查更新"), z = n("div", "menu_button menu_button_icon", "立即更新"), M = n("div", "menu_button menu_button_icon", "刷新页面");
  z.style.display = "none", M.style.display = "none", F.append(v, _, z, M);
  let b = null, I = !1;
  const L = async () => {
    if (!I) {
      I = !0, v.textContent = "正在检查更新…", z.style.display = "none";
      try {
        b = await mh();
        const E = b.commit ? `（${b.commit}）` : "";
        b.isGit ? b.isUpToDate ? v.textContent = `已是最新版本${E}` : (v.textContent = `有新版本可以更新，当前${E || "版本较旧"}`, z.style.display = "") : v.textContent = "不是用仓库地址安装的，无法检查更新。", o.style.display = b.isGit && !b.isUpToDate ? "" : "none";
      } catch (E) {
        v.textContent = `检查更新失败：${E.message}`;
      } finally {
        I = !1;
      }
    }
  };
  _.addEventListener("click", () => void L()), z.addEventListener("click", async () => {
    if (!(!b || I)) {
      I = !0, v.textContent = "正在更新…", z.style.display = "none";
      try {
        await gh(b), o.style.display = "none", v.textContent = "更新完成，刷新页面后生效。", M.style.display = "";
      } catch (E) {
        v.textContent = `更新失败：${E.message}`, z.style.display = "";
      } finally {
        I = !1;
      }
    }
  }), M.addEventListener("click", () => location.reload()), setTimeout(() => void L(), 3e3), A.append(x, d, F, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), i.append(r, A), s.append(i), t.append(s);
}
globalThis.rlzcInterceptor = hd;
function Ms() {
  ad(), Xe("MESSAGE_RECEIVED", (e, t) => Ed(Number(e), t)), Xe("CHARACTER_MESSAGE_RENDERED", (e) => Es(Number(e))), Xe("MESSAGE_DELETED", () => Ss()), Xe("MESSAGE_SWIPED", (e) => {
    md(Number(e)), Es(Number(e));
  }), Xe("MESSAGE_EDITED", () => Ss()), Xe("MESSAGE_UPDATED", (e) => {
    Ss(), Es(Number(e));
  }), Xe("CHAT_CHANGED", () => rr()), Xe("MORE_MESSAGES_LOADED", () => ci()), xh(), rr(), console.log("[rlzc] 回廊种菜系统已加载", m.settings);
}
const cr = window.jQuery;
typeof cr == "function" ? cr(() => Ms()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ms) : Ms();
