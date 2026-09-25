/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Bs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const X = {}, bt = [], vt = () => {
}, ur = () => !1, Ln = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bn = (e) => e.startsWith("onUpdate:"), ze = Object.assign, fr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, al = Object.prototype.hasOwnProperty, q = (e, t) => al.call(e, t), W = Array.isArray, tt = (e) => un(e) === "[object Map]", $t = (e) => un(e) === "[object Set]", hi = (e) => un(e) === "[object Date]", Z = (e) => typeof e == "function", ie = (e) => typeof e == "string", je = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", dr = (e) => (ee(e) || Z(e)) && Z(e.then) && Z(e.catch), pr = Object.prototype.toString, un = (e) => pr.call(e), cl = (e) => un(e).slice(8, -1), hr = (e) => un(e) === "[object Object]", Vs = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zt = /* @__PURE__ */ Bs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ul = /-\w/g, we = Vn(
  (e) => e.replace(ul, (t) => t.slice(1).toUpperCase())
), fl = /\B([A-Z])/g, Et = Vn(
  (e) => e.replace(fl, "-$1").toLowerCase()
), mr = Vn((e) => e.charAt(0).toUpperCase() + e.slice(1)), as = Vn(
  (e) => e ? `on${mr(e)}` : ""
), Fe = (e, t) => !Object.is(e, t), vn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, gr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Wn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let mi;
const Un = () => mi || (mi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gn(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = ie(s) ? ml(s) : Gn(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ie(e) || ee(e))
    return e;
}
const dl = /;(?![^(]*\))/g, pl = /:([^]+)/, hl = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function ml(e) {
  const t = {};
  return e.replace(hl, (n) => n.startsWith("/*") ? "" : n).split(dl).forEach((n) => {
    if (n) {
      const s = n.split(pl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ct(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (W(e))
    for (let n = 0; n < e.length; n++) {
      const s = ct(e[n]);
      s && (t += s + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const gl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xl = /* @__PURE__ */ Bs(gl);
function xr(e) {
  return !!e || e === "";
}
function bl(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = rt(e[i], t[i], n);
  return s;
}
function gi(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const r of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!i[l] && rt(r, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    i[o] = 1;
  }
  return !0;
}
function yl(e, t, n) {
  let s = tt(e), i = tt(t);
  if (s || i || (s = $t(e), i = $t(t), s || i))
    return s && i ? gi(e, t, n) : !1;
  const r = Object.keys(e).length, o = Object.keys(t).length;
  if (r !== o)
    return !1;
  for (const l in e) {
    const A = e.hasOwnProperty(l), a = t.hasOwnProperty(l);
    if (A && !a || !A && a || !rt(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function xi(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, r] = n;
  if (i.has(e) || r.has(t))
    return i.get(e) === t && r.get(t) === e;
  i.set(e, t), r.set(t, e);
  const o = s(e, t, n);
  return i.delete(e), r.delete(t), o;
}
function rt(e, t, n) {
  if (e === t) return !0;
  let s = hi(e), i = hi(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = je(e), i = je(t), s || i ? e === t : (s = W(e), i = W(t), s || i ? s && i ? xi(e, t, n, bl) : !1 : (s = ee(e), i = ee(t), s || i ? !s || !i ? !1 : xi(e, t, n, yl) : String(e) === String(t))));
}
function vl(e, t) {
  return e.findIndex((n) => rt(n, t));
}
const br = (e) => !!(e && e.__v_isRef === !0), O = (e) => ie(e) ? e : e == null ? "" : W(e) || ee(e) && (e.toString === pr || !Z(e.toString)) ? br(e) ? O(e.value) : JSON.stringify(e, yr, 2) : String(e), yr = (e, t) => br(t) ? yr(e, t.value) : tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[cs(s, r) + " =>"] = i, n),
    {}
  )
} : $t(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => cs(n))
} : je(t) ? cs(t) : ee(t) && !W(t) && !hr(t) ? String(t) : t, cs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let le;
class _l {
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
function wl() {
  return le;
}
let Q;
const us = /* @__PURE__ */ new WeakSet();
class vr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, le && (le.active ? le.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, us.has(this) && (us.delete(this), this.trigger()));
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
    this.flags |= 2, bi(this), kr(this);
    const t = Q, n = ke;
    Q = this, ke = !0;
    try {
      return this.fn();
    } finally {
      $r(this), Q = t, ke = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Gs(t);
      this.deps = this.depsTail = void 0, bi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? us.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ms(this) && this.run();
  }
  get dirty() {
    return Ms(this);
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
function Ws() {
  _r++;
}
function Us() {
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
    s.version === -1 ? (s === n && (n = i), Gs(s), kl(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Ms(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Sr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Sr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nn) || (e.globalVersion = nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ms(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Q, s = ke;
  Q = e, ke = !0;
  try {
    kr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Fe(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Q = n, ke = s, $r(e), e.flags &= -3;
  }
}
function Gs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Gs(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function kl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ke = !0;
const zr = [];
function ot() {
  zr.push(ke), ke = !1;
}
function lt() {
  const e = zr.pop();
  ke = e === void 0 ? !0 : e;
}
function bi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Q;
    Q = void 0;
    try {
      t();
    } finally {
      Q = n;
    }
  }
}
let nn = 0;
class $l {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ys {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Q || !ke || Q === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Q)
      n = this.activeLink = new $l(Q, this), Q.deps ? (n.prevDep = Q.depsTail, Q.depsTail.nextDep = n, Q.depsTail = n) : Q.deps = Q.depsTail = n, Er(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Q.depsTail, n.nextDep = void 0, Q.depsTail.nextDep = n, Q.depsTail = n, Q.deps === n && (Q.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, nn++, this.notify(t);
  }
  notify(t) {
    Ws();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Us();
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
const Is = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ Symbol(
  ""
), Ps = /* @__PURE__ */ Symbol(
  ""
), sn = /* @__PURE__ */ Symbol(
  ""
);
function ae(e, t, n) {
  if (ke && Q) {
    let s = Is.get(e);
    s || Is.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Ys()), i.map = s, i.key = n), i.track();
  }
}
function Ke(e, t, n, s, i, r) {
  const o = Is.get(e);
  if (!o) {
    nn++;
    return;
  }
  const l = (A) => {
    A && A.trigger();
  };
  if (Ws(), t === "clear")
    o.forEach(l);
  else {
    const A = W(e), a = A && Vs(n);
    if (A && n === "length") {
      const c = Number(s);
      o.forEach((f, p) => {
        (p === "length" || p === sn || !je(p) && p >= c) && l(f);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(sn)), t) {
        case "add":
          A ? a && l(o.get("length")) : (l(o.get(_t)), tt(e) && l(o.get(Ps)));
          break;
        case "delete":
          A || (l(o.get(_t)), tt(e) && l(o.get(Ps)));
          break;
        case "set":
          tt(e) && l(o.get(_t));
          break;
      }
  }
  Us();
}
function Pt(e) {
  const t = /* @__PURE__ */ H(e);
  return t === e || (ae(t, "iterate", sn), /* @__PURE__ */ ve(e)) ? t : /* @__PURE__ */ De(e) ? /* @__PURE__ */ nt(e) ? t.map((n) => At(_e(n))) : t.map(At) : t.map(_e);
}
function Yn(e) {
  return ae(e = /* @__PURE__ */ H(e), "iterate", sn), e;
}
function Ne(e, t) {
  return /* @__PURE__ */ De(e) ? At(/* @__PURE__ */ nt(e) ? _e(t) : t) : _e(t);
}
const Sl = {
  __proto__: null,
  [Symbol.iterator]() {
    return fs(this, Symbol.iterator, (e) => Ne(this, e));
  },
  concat(...e) {
    return Pt(this).concat(
      ...e.map((t) => W(t) ? Pt(t) : t)
    );
  },
  entries() {
    return fs(this, "entries", (e) => (e[1] = Ne(this, e[1]), e));
  },
  every(e, t) {
    return Ge(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ge(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ne(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ge(
      this,
      "find",
      e,
      t,
      (n) => Ne(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ge(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ge(
      this,
      "findLast",
      e,
      t,
      (n) => Ne(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ge(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ge(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ds(this, "includes", e);
  },
  indexOf(...e) {
    return ds(this, "indexOf", e);
  },
  join(e) {
    return Pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ds(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ge(this, "map", e, t, void 0, arguments);
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
    return Ge(this, "some", e, t, void 0, arguments);
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
    return fs(this, "values", (e) => Ne(this, e));
  }
};
function fs(e, t, n) {
  const s = Yn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ ve(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const zl = Array.prototype;
function Ge(e, t, n, s, i, r) {
  const o = Yn(e), l = o !== e && !/* @__PURE__ */ ve(e), A = o[t];
  if (A !== zl[t]) {
    const f = A.apply(e, r);
    return l ? _e(f) : f;
  }
  let a = n;
  o !== e && (l ? a = function(f, p) {
    return n.call(this, Ne(e, f), p, e);
  } : n.length > 2 && (a = function(f, p) {
    return n.call(this, f, p, e);
  }));
  const c = A.call(o, a, s);
  return l && i ? i(c) : c;
}
function yi(e, t, n, s) {
  const i = Yn(e), r = i !== e && !/* @__PURE__ */ ve(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(a, c, f) {
    return l && (l = !1, a = Ne(e, a)), n.call(this, a, Ne(e, c), f, e);
  }) : n.length > 3 && (o = function(a, c, f) {
    return n.call(this, a, c, f, e);
  }));
  const A = i[t](o, ...s);
  return l ? Ne(e, A) : A;
}
function ds(e, t, n) {
  const s = /* @__PURE__ */ H(e);
  ae(s, "iterate", sn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Zs(n[0]) ? (n[0] = /* @__PURE__ */ H(n[0]), s[t](...n)) : i;
}
function Wt(e, t, n = []) {
  ot(), Ws();
  const s = (/* @__PURE__ */ H(e))[t].apply(e, n);
  return Us(), lt(), s;
}
const El = /* @__PURE__ */ Bs("__proto__,__v_isRef,__isVue"), Cr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(je)
);
function Cl(e) {
  je(e) || (e = String(e));
  const t = /* @__PURE__ */ H(this);
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
      return s === (i ? r ? Dl : Nr : r ? Tr : Pr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = W(t);
    if (!i) {
      let A;
      if (o && (A = Sl[n]))
        return A;
      if (n === "hasOwnProperty")
        return Cl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ de(t) ? t : s
    );
    if ((je(n) ? Cr.has(n) : El(n)) || (i || ae(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ de(l)) {
      const A = o && Vs(n) ? l : l.value;
      return i && ee(A) ? /* @__PURE__ */ Ns(A) : A;
    }
    return ee(l) ? i ? /* @__PURE__ */ Ns(l) : /* @__PURE__ */ Hn(l) : l;
  }
}
class Ir extends Mr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = W(t) && Vs(n);
    if (!this._isShallow) {
      const a = /* @__PURE__ */ De(r);
      if (!/* @__PURE__ */ ve(s) && !/* @__PURE__ */ De(s) && (r = /* @__PURE__ */ H(r), s = /* @__PURE__ */ H(s)), !o && /* @__PURE__ */ de(r) && !/* @__PURE__ */ de(s))
        return a || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : q(t, n), A = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ de(t) ? t : i
    );
    return t === /* @__PURE__ */ H(i) && A && (l ? Fe(s, r) && Ke(t, "set", n, s) : Ke(t, "add", n, s)), A;
  }
  deleteProperty(t, n) {
    const s = q(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && Ke(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!je(n) || !Cr.has(n)) && ae(t, "has", n), s;
  }
  ownKeys(t) {
    return ae(
      t,
      "iterate",
      W(t) ? "length" : _t
    ), Reflect.ownKeys(t);
  }
}
class Ml extends Mr {
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
const Il = /* @__PURE__ */ new Ir(), Pl = /* @__PURE__ */ new Ml(), Tl = /* @__PURE__ */ new Ir(!0);
const Ts = (e) => e, mn = (e) => Reflect.getPrototypeOf(e);
function Nl(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ H(i), o = tt(r), l = e === "entries" || e === Symbol.iterator && o, A = e === "keys" && o, a = i[e](...s), c = n ? Ts : t ? At : _e;
    return !t && ae(
      r,
      "iterate",
      A ? Ps : _t
    ), ze(
      // inheriting all iterator properties
      Object.create(a),
      {
        // iterator protocol
        next() {
          const { value: f, done: p } = a.next();
          return p ? { value: f, done: p } : {
            value: l ? [c(f[0]), c(f[1])] : c(f),
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
function Rl(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ H(r), l = /* @__PURE__ */ H(i);
      e || (Fe(i, l) && ae(o, "get", i), ae(o, "get", l));
      const { has: A } = mn(o), a = t ? Ts : e ? At : _e;
      if (A.call(o, i))
        return a(r.get(i));
      if (A.call(o, l))
        return a(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ae(/* @__PURE__ */ H(i), "iterate", _t), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ H(r), l = /* @__PURE__ */ H(i);
      return e || (Fe(i, l) && ae(o, "has", i), ae(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, A = /* @__PURE__ */ H(l), a = t ? Ts : e ? At : _e;
      return !e && ae(A, "iterate", _t), l.forEach((c, f) => i.call(r, a(c), a(f), o));
    }
  };
  return ze(
    n,
    e ? {
      add: gn("add"),
      set: gn("set"),
      delete: gn("delete"),
      clear: gn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ H(this), o = mn(r), l = /* @__PURE__ */ H(i), A = !t && !/* @__PURE__ */ ve(i) && !/* @__PURE__ */ De(i) ? l : i;
        return o.has.call(r, A) || Fe(i, A) && o.has.call(r, i) || Fe(l, A) && o.has.call(r, l) || (r.add(A), Ke(r, "add", A, A)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ ve(r) && !/* @__PURE__ */ De(r) && (r = /* @__PURE__ */ H(r));
        const o = /* @__PURE__ */ H(this), { has: l, get: A } = mn(o);
        let a = l.call(o, i);
        a || (i = /* @__PURE__ */ H(i), a = l.call(o, i));
        const c = A.call(o, i);
        return o.set(i, r), a ? Fe(r, c) && Ke(o, "set", i, r) : Ke(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ H(this), { has: o, get: l } = mn(r);
        let A = o.call(r, i);
        A || (i = /* @__PURE__ */ H(i), A = o.call(r, i)), l && l.call(r, i);
        const a = r.delete(i);
        return A && Ke(r, "delete", i, void 0), a;
      },
      clear() {
        const i = /* @__PURE__ */ H(this), r = i.size !== 0, o = i.clear();
        return r && Ke(
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
    n[i] = Nl(i, e, t);
  }), n;
}
function Hs(e, t) {
  const n = Rl(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    q(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Fl = {
  get: /* @__PURE__ */ Hs(!1, !1)
}, Ol = {
  get: /* @__PURE__ */ Hs(!1, !0)
}, jl = {
  get: /* @__PURE__ */ Hs(!0, !1)
};
const Pr = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap();
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
function Hn(e) {
  return /* @__PURE__ */ De(e) ? e : Ks(
    e,
    !1,
    Il,
    Fl,
    Pr
  );
}
// @__NO_SIDE_EFFECTS__
function Bl(e) {
  return Ks(
    e,
    !1,
    Tl,
    Ol,
    Tr
  );
}
// @__NO_SIDE_EFFECTS__
function Ns(e) {
  return Ks(
    e,
    !0,
    Pl,
    jl,
    Nr
  );
}
function Ks(e, t, n, s, i) {
  if (!ee(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = Ll(cl(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  return /* @__PURE__ */ De(e) ? /* @__PURE__ */ nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function H(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ H(t) : e;
}
function Vl(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && gr(e, "__v_skip", !0), e;
}
const _e = (e) => ee(e) ? /* @__PURE__ */ Hn(e) : e, At = (e) => ee(e) ? /* @__PURE__ */ Ns(e) : e;
// @__NO_SIDE_EFFECTS__
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  return Wl(e, !1);
}
function Wl(e, t) {
  return /* @__PURE__ */ de(e) ? e : new Ul(e, t);
}
class Ul {
  constructor(t, n) {
    this.dep = new Ys(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ H(t), this._value = n ? t : _e(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ ve(t) || /* @__PURE__ */ De(t);
    t = s ? t : /* @__PURE__ */ H(t), Fe(t, n) && (this._rawValue = t, this._value = s ? t : _e(t), this.dep.trigger());
  }
}
function j(e) {
  return /* @__PURE__ */ de(e) ? e.value : e;
}
const Gl = {
  get: (e, t, n) => t === "__v_raw" ? e : j(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ de(i) && !/* @__PURE__ */ de(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Rr(e) {
  return /* @__PURE__ */ nt(e) ? e : new Proxy(e, Gl);
}
class Yl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ys(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Q !== this)
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
function Hl(e, t, n = !1) {
  let s, i;
  return Z(e) ? s = e : (s = e.get, i = e.set), new Yl(s, i, n);
}
const xn = {}, zn = /* @__PURE__ */ new WeakMap();
let gt;
function Kl(e, t = !1, n = gt) {
  if (n) {
    let s = zn.get(n);
    s || zn.set(n, s = []), s.push(e);
  }
}
function Zl(e, t, n = X) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: A } = n, a = (b) => i ? b : /* @__PURE__ */ ve(b) || i === !1 || i === 0 ? Ze(b, 1) : Ze(b);
  let c, f, p, x, R = !1, y = !1;
  if (/* @__PURE__ */ de(e) ? (f = () => e.value, R = /* @__PURE__ */ ve(e)) : /* @__PURE__ */ nt(e) ? (f = () => a(e), R = !0) : W(e) ? (y = !0, R = e.some((b) => /* @__PURE__ */ nt(b) || /* @__PURE__ */ ve(b)), f = () => e.map((b) => {
    if (/* @__PURE__ */ de(b))
      return b.value;
    if (/* @__PURE__ */ nt(b))
      return a(b);
    if (Z(b))
      return A ? A(b, 2) : b();
  })) : Z(e) ? t ? f = A ? () => A(e, 2) : e : f = () => {
    if (p) {
      ot();
      try {
        p();
      } finally {
        lt();
      }
    }
    const b = gt;
    gt = c;
    try {
      return A ? A(e, 3, [x]) : e(x);
    } finally {
      gt = b;
    }
  } : f = vt, t && i) {
    const b = f, P = i === !0 ? 1 / 0 : i;
    f = () => Ze(b(), P);
  }
  const k = wl(), S = () => {
    c.stop(), k && k.active && fr(k.effects, c);
  };
  if (r && t) {
    const b = t;
    t = (...P) => {
      const B = b(...P);
      return S(), B;
    };
  }
  let M = y ? new Array(e.length).fill(xn) : xn;
  const v = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const P = c.run();
        if (b || i || R || (y ? P.some((B, he) => Fe(B, M[he])) : Fe(P, M))) {
          p && p();
          const B = gt;
          gt = c;
          try {
            const he = [
              P,
              // pass undefined as the old value when it's changed for the first time
              M === xn ? void 0 : y && M[0] === xn ? [] : M,
              x
            ];
            M = P, A ? A(t, 3, he) : (
              // @ts-expect-error
              t(...he)
            );
          } finally {
            gt = B;
          }
        }
      } else
        c.run();
  };
  return l && l(v), c = new vr(f), c.scheduler = o ? () => o(v, !1) : v, x = (b) => Kl(b, !1, c), p = c.onStop = () => {
    const b = zn.get(c);
    if (b) {
      if (A)
        A(b, 4);
      else
        for (const P of b) P();
      zn.delete(c);
    }
  }, t ? s ? v(!0) : M = c.run() : o ? o(v.bind(null, !0), !0) : c.run(), S.pause = c.pause.bind(c), S.resume = c.resume.bind(c), S.stop = S, S;
}
function Ze(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ de(e))
    Ze(e.value, t, n);
  else if (W(e))
    for (let s = 0; s < e.length; s++)
      Ze(e[s], t, n);
  else if ($t(e) || tt(e))
    e.forEach((s) => {
      Ze(s, t, n);
    });
  else if (hr(e)) {
    for (const s in e)
      Ze(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ze(e[s], t, n);
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
    Kn(i, t, n);
  }
}
function Le(e, t, n, s) {
  if (Z(e)) {
    const i = fn(e, t, n, s);
    return i && dr(i) && i.catch((r) => {
      Kn(r, t, n);
    }), i;
  }
  if (W(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Le(e[r], t, n, s));
    return i;
  }
}
function Kn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || X;
  if (t) {
    let l = t.parent;
    const A = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](e, A, a) === !1)
            return;
      }
      l = l.parent;
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
  Jl(e, n, i, s, o);
}
function Jl(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ue = [];
let Te = -1;
const Rt = [];
let et = null, Tt = 0;
const Fr = /* @__PURE__ */ Promise.resolve();
let En = null;
function Or(e) {
  const t = En || Fr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ql(e) {
  let t = Te + 1, n = ue.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = ue[s], r = rn(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Js(e) {
  if (!(e.flags & 1)) {
    const t = rn(e), n = ue[ue.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rn(n) ? ue.push(e) : ue.splice(ql(t), 0, e), e.flags |= 1, jr();
  }
}
function jr() {
  En || (En = Fr.then(Lr));
}
function Ql(e) {
  if (!W(e))
    et && e.id === -1 ? et.splice(Tt + 1, 0, e) : e.flags & 1 || (Rt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Rt.push(e[t]);
  jr();
}
function vi(e, t, n = Te + 1) {
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
    for (et = t, Tt = 0; Tt < et.length; Tt++) {
      const n = et[Tt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    et = null, Tt = 0;
  }
}
const rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lr(e) {
  try {
    for (Te = 0; Te < ue.length; Te++) {
      const t = ue[Te];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), fn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Te < ue.length; Te++) {
      const t = ue[Te];
      t && (t.flags &= -2);
    }
    Te = -1, ue.length = 0, Dr(), En = null, (ue.length || Rt.length) && Lr();
  }
}
let ye = null, Br = null;
function Cn(e) {
  const t = ye;
  return ye = e, Br = e && e.type.__scopeId || null, t;
}
function Xl(e, t = ye, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Ei(-1);
    const r = Cn(t), o = wt.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let A = wt.length; A > o; A--) io();
      Cn(r), s._d && Ei(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function _n(e, t) {
  if (ye === null)
    return e;
  const n = Xn(ye), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, A = X] = t[i];
    r && (Z(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ze(o), s.push({
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
function ht(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let A = l.dir[s];
    A && (ot(), Le(A, n, 8, [
      e.el,
      l,
      e,
      t
    ]), lt());
  }
}
function eA(e, t, n = !1) {
  const s = jA();
  if (s || Ft) {
    let i = Ft ? Ft._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && Z(t) ? t.call(s && s.proxy) : t;
  }
}
const tA = /* @__PURE__ */ Symbol.for("v-scx"), nA = () => eA(tA);
function Zn(e, t, n) {
  return sA(e, t, n);
}
function sA(e, t, n = X) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = ze({}, n), A = t && s || !t && r !== "post";
  let a;
  if (An) {
    if (r === "sync") {
      const x = nA();
      a = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!A) {
      const x = () => {
      };
      return x.stop = vt, x.resume = vt, x.pause = vt, x;
    }
  }
  const c = at;
  l.call = (x, R, y) => Le(x, c, R, y);
  let f = !1;
  r === "post" ? l.scheduler = (x) => {
    pe(x, c && c.suspense);
  } : r !== "sync" && (f = !0, l.scheduler = (x, R) => {
    R ? x() : Js(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), f && (x.flags |= 2, c && (x.id = c.uid, x.i = c));
  };
  const p = Zl(e, t, l);
  return An && (a ? a.push(p) : A && p()), p;
}
const iA = /* @__PURE__ */ Symbol("_vte"), Jn = (e) => e.__isTeleport, ps = /* @__PURE__ */ Symbol("_leaveCb");
function rA(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Je) {
        t = n;
        break;
      }
  }
  return t;
}
function Vr(e) {
  if (!Wr(e))
    return Jn(e.type) && e.children ? rA(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Z(n.default))
      return n.default();
  }
}
function qs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    qs(
      Jn(n.type) && Vr(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function ut(e, t) {
  return Z(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ze({ name: e.name }, t, { setup: e })
  ) : e;
}
function oA(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function _i(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Mn = /* @__PURE__ */ new WeakMap();
function Qt(e, t, n, s, i = !1) {
  if (W(e)) {
    e.forEach(
      (y, k) => Qt(
        y,
        t && (W(t) ? t[k] : t),
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
  const r = s.shapeFlag & 4 ? Xn(s.component) : s.el, o = i ? null : r, { i: l, r: A } = e, a = t && t.r, c = l.refs === X ? l.refs = {} : l.refs, f = l.setupState, p = /* @__PURE__ */ H(f), x = f === X ? ur : (y) => _i(c, y) ? !1 : q(p, y), R = (y, k) => !(k && _i(c, k));
  if (a != null && a !== A) {
    if (wi(t), ie(a))
      c[a] = null, x(a) && (f[a] = null);
    else if (/* @__PURE__ */ de(a)) {
      const y = t;
      R(a, y.k) && (a.value = null), y.k && (c[y.k] = null);
    }
  }
  if (Z(A))
    fn(A, l, 12, [o, c]);
  else {
    const y = ie(A), k = /* @__PURE__ */ de(A);
    if (y || k) {
      const S = () => {
        if (e.f) {
          const M = y ? x(A) ? f[A] : c[A] : R() || !e.k ? A.value : c[e.k];
          if (i)
            W(M) && fr(M, r);
          else if (W(M))
            M.includes(r) || M.push(r);
          else if (y)
            c[A] = [r], x(A) && (f[A] = c[A]);
          else {
            const v = [r];
            R(A, e.k) && (A.value = v), e.k && (c[e.k] = v);
          }
        } else y ? (c[A] = o, x(A) && (f[A] = o)) : k && (R(A, e.k) && (A.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const M = () => {
          S(), Mn.delete(e);
        };
        M.id = -1, Mn.set(e, M), pe(M, n);
      } else
        wi(e), S();
    }
  }
}
function wi(e) {
  const t = Mn.get(e);
  t && (t.flags |= 8, Mn.delete(e));
}
Un().requestIdleCallback;
Un().cancelIdleCallback;
const Xt = (e) => !!e.type.__asyncLoader, Wr = (e) => e.type.__isKeepAlive;
function lA(e, t, n = at, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      ot();
      const l = ei(n), A = Le(t, n, e, o);
      return l(), lt(), A;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const Ur = (e) => (t, n = at) => {
  (!An || e === "sp") && lA(e, (...s) => t(...s), n);
}, AA = Ur("m"), aA = Ur(
  "bum"
), cA = /* @__PURE__ */ Symbol.for("v-ndc");
function fe(e, t, n, s) {
  let i;
  const r = n, o = W(e);
  if (o || ie(e)) {
    const l = o && /* @__PURE__ */ nt(e);
    let A = !1, a = !1;
    l && (A = !/* @__PURE__ */ ve(e), a = /* @__PURE__ */ De(e), e = Yn(e)), i = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      i[c] = t(
        A ? a ? At(_e(e[c])) : _e(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (ee(e))
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
const Rs = (e) => e ? Ao(e) ? Xn(e) : Rs(e.parent) : null, en = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ze(/* @__PURE__ */ Object.create(null), {
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
      Js(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Or.bind(e.proxy)),
    $watch: (e) => vt
  })
), hs = (e, t) => e !== X && !e.__isScriptSetup && q(e, t), uA = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: A } = e;
    if (t[0] !== "$") {
      const p = o[t];
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
        if (hs(s, t))
          return o[t] = 1, s[t];
        if (q(r, t))
          return o[t] = 3, r[t];
        if (n !== X && q(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const a = en[t];
    let c, f;
    if (a)
      return t === "$attrs" && ae(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== X && q(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      f = A.config.globalProperties, q(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return hs(i, t) ? (i[t] = n, !0) : q(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let A;
    return !!(n[l] || hs(t, l) || q(r, l) || q(s, l) || q(en, l) || q(i.config.globalProperties, l) || (A = o.__cssModules) && A[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
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
let fA = 0;
function dA(e, t) {
  return function(s, i = null) {
    Z(s) || (s = ze({}, s)), i != null && !ee(i) && (i = null);
    const r = Gr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let A = !1;
    const a = r.app = {
      _uid: fA++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: UA,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return o.has(c) || (c && Z(c.install) ? (o.add(c), c.install(a, ...f)) : Z(c) && (o.add(c), c(a, ...f))), a;
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
          const x = a._ceVNode || Oe(s, i);
          return x.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(x, c, p), A = !0, a._container = c, c.__vue_app__ = a, Xn(x.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        A && (Le(
          l,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, f) {
        return r.provides[c] = f, a;
      },
      runWithContext(c) {
        const f = Ft;
        Ft = a;
        try {
          return c();
        } finally {
          Ft = f;
        }
      }
    };
    return a;
  };
}
let Ft = null;
const pA = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${we(t)}Modifiers`] || e[`${Et(t)}Modifiers`];
function hA(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || X;
  let i = n;
  const r = t.startsWith("update:"), o = r && pA(s, t.slice(7));
  o && (o.trim && (i = n.map((c) => ie(c) ? c.trim() : c)), o.number && (i = i.map(Wn)));
  let l, A = s[l = as(t)] || // also try camelCase event handler (#2249)
  s[l = as(we(t))];
  !A && r && (A = s[l = as(Et(t))]), A && Le(
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
    e.emitted[l] = !0, Le(
      a,
      e,
      6,
      i
    );
  }
}
function mA(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {};
  return r ? (W(r) ? r.forEach((l) => o[l] = null) : ze(o, r), ee(e) && s.set(e, o), o) : (ee(e) && s.set(e, null), null);
}
function qn(e, t) {
  return !e || !Ln(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Et(t)) || q(e, t));
}
function ki(e) {
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
    props: f,
    data: p,
    setupState: x,
    ctx: R,
    inheritAttrs: y
  } = e, k = Cn(e);
  let S, M;
  try {
    if (n.shapeFlag & 4) {
      const b = i || s, P = b;
      S = Re(
        a.call(
          P,
          b,
          c,
          f,
          x,
          p,
          R
        )
      ), M = l;
    } else {
      const b = t;
      S = Re(
        b.length > 1 ? b(
          f,
          { attrs: l, slots: o, emit: A }
        ) : b(
          f,
          null
        )
      ), M = t.props ? l : gA(l);
    }
  } catch (b) {
    wt.length = 0, Kn(b, e, 1), S = Oe(Je);
  }
  let v = S;
  if (M && y !== !1) {
    const b = Object.keys(M), { shapeFlag: P } = v;
    b.length && P & 7 && (r && b.some(Bn) && (M = xA(
      M,
      r
    )), v = Ot(v, M, !1, !0));
  }
  if (n.dirs && (v = Ot(v, null, !1, !0), v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const b = Jn(v.type) && Vr(v) || v;
    qs(b, n.transition);
  }
  return S = v, Cn(k), S;
}
const gA = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ln(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, xA = (e, t) => {
  const n = {};
  for (const s in e)
    (!Bn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function bA(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: A } = t, a = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && A >= 0) {
    if (A & 1024)
      return !0;
    if (A & 16)
      return s ? $i(s, o, a) : !!o;
    if (A & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const p = c[f];
        if (Yr(o, s, p) && !qn(a, p))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? $i(s, o, a) : !0 : !!o;
  return !1;
}
function $i(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (Yr(t, e, r) && !qn(n, r))
      return !0;
  }
  return !1;
}
function Yr(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && ee(s) && ee(i) ? !rt(s, i) : s !== i;
}
function yA({ vnode: e, parent: t, suspense: n }, s) {
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
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Bl(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function _A(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ H(i), [A] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let p = c[f];
        if (qn(e.emitsOptions, p))
          continue;
        const x = t[p];
        if (A)
          if (q(r, p))
            x !== r[p] && (r[p] = x, a = !0);
          else {
            const R = we(p);
            i[R] = Fs(
              A,
              l,
              R,
              x,
              e,
              !1
            );
          }
        else
          x !== r[p] && (r[p] = x, a = !0);
      }
    }
  } else {
    Jr(e, t, i, r) && (a = !0);
    let c;
    for (const f in l)
      (!t || // for camelCase
      !q(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Et(f)) === f || !q(t, c))) && (A ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (i[f] = Fs(
        A,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete i[f]);
    if (r !== l)
      for (const f in r)
        (!t || !q(t, f)) && (delete r[f], a = !0);
  }
  a && Ke(e.attrs, "set", "");
}
function Jr(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let A in t) {
      if (Zt(A))
        continue;
      const a = t[A];
      let c;
      i && q(i, c = we(A)) ? !r || !r.includes(c) ? n[c] = a : (l || (l = {}))[c] = a : qn(e.emitsOptions, A) || (!(A in s) || a !== s[A]) && (s[A] = a, o = !0);
    }
  if (r) {
    const A = /* @__PURE__ */ H(n), a = l || X;
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      n[f] = Fs(
        i,
        A,
        f,
        a[f],
        e,
        !q(a, f)
      );
    }
  }
  return o;
}
function Fs(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = q(o, "default");
    if (l && s === void 0) {
      const A = o.default;
      if (o.type !== Function && !o.skipFactory && Z(A)) {
        const { propsDefaults: a } = i;
        if (n in a)
          s = a[n];
        else {
          const c = ei(i);
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
    ] && (s === "" || s === Et(n)) && (s = !0));
  }
  return s;
}
function wA(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  if (!r)
    return ee(e) && s.set(e, bt), bt;
  if (W(r))
    for (let a = 0; a < r.length; a++) {
      const c = we(r[a]);
      Si(c) && (o[c] = X);
    }
  else if (r)
    for (const a in r) {
      const c = we(a);
      if (Si(c)) {
        const f = r[a], p = o[c] = W(f) || Z(f) ? { type: f } : ze({}, f), x = p.type;
        let R = !1, y = !0;
        if (W(x))
          for (let k = 0; k < x.length; ++k) {
            const S = x[k], M = Z(S) && S.name;
            if (M === "Boolean") {
              R = !0;
              break;
            } else M === "String" && (y = !1);
          }
        else
          R = Z(x) && x.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = R, p[
          1
          /* shouldCastTrue */
        ] = y, (R || q(p, "default")) && l.push(c);
      }
    }
  const A = [o, l];
  return ee(e) && s.set(e, A), A;
}
function Si(e) {
  return e[0] !== "$" && !Zt(e);
}
const Qs = (e) => e === "_" || e === "_ctx" || e === "$stable", Xs = (e) => W(e) ? e.map(Re) : [Re(e)], kA = (e, t, n) => {
  if (t._n)
    return t;
  const s = Xl((...i) => Xs(t(...i)), n);
  return s._c = !1, s;
}, qr = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Qs(i)) continue;
    const r = e[i];
    if (Z(r))
      t[i] = kA(i, r, s);
    else if (r != null) {
      const o = Xs(r);
      t[i] = () => o;
    }
  }
}, Qr = (e, t) => {
  const n = Xs(t);
  e.slots.default = () => n;
}, Xr = (e, t, n) => {
  for (const s in t)
    (n || !Qs(s)) && (e[s] = t[s]);
}, $A = (e, t, n) => {
  const s = e.slots = Kr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Xr(s, t, n), n && gr(s, "_", i, !0)) : qr(t, s);
  } else t && Qr(e, t);
}, SA = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = X;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Xr(i, t, n) : (r = !t.$stable, qr(t, i)), o = t;
  } else t && (Qr(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Qs(l) && o[l] == null && delete i[l];
}, pe = IA;
function zA(e) {
  return EA(e);
}
function EA(e, t) {
  const n = Un();
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
    parentNode: f,
    nextSibling: p,
    setScopeId: x = vt,
    insertStaticContent: R
  } = e, y = (u, d, g, z = null, _ = null, $ = null, N = void 0, T = null, C = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !Ut(u, d) && (z = hn(u), Ue(u, _, $, !0), u = null), d.patchFlag === -2 && (C = !1, d.dynamicChildren = null), d.dynamicChildren && u && u.dynamicChildren && u.dynamicChildren.hasOnce && (d.dynamicChildren === bt && (d.dynamicChildren = []), d.dynamicChildren.hasOnce = !0);
    const { type: w, ref: L, shapeFlag: F } = d;
    switch (w) {
      case Qn:
        k(u, d, g, z);
        break;
      case Je:
        S(u, d, g, z);
        break;
      case gs:
        u == null && M(d, g, z, N);
        break;
      case Y:
        te(
          u,
          d,
          g,
          z,
          _,
          $,
          N,
          T,
          C
        );
        break;
      default:
        F & 1 ? P(
          u,
          d,
          g,
          z,
          _,
          $,
          N,
          T,
          C
        ) : F & 6 ? pn(
          u,
          d,
          g,
          z,
          _,
          $,
          N,
          T,
          C
        ) : (F & 64 || F & 128) && w.process(
          u,
          d,
          g,
          z,
          _,
          $,
          N,
          T,
          C,
          Bt
        );
    }
    L != null && _ ? Qt(L, u && u.ref, $, d || u, !d) : L == null && u && u.ref != null && Qt(u.ref, null, $, u, !0);
  }, k = (u, d, g, z) => {
    if (u == null)
      s(
        d.el = l(d.children),
        g,
        z
      );
    else {
      const _ = d.el = u.el;
      d.children !== u.children && a(_, d.children);
    }
  }, S = (u, d, g, z) => {
    u == null ? s(
      d.el = A(d.children || ""),
      g,
      z
    ) : d.el = u.el;
  }, M = (u, d, g, z) => {
    [u.el, u.anchor] = R(
      u.children,
      d,
      g,
      z,
      u.el,
      u.anchor
    );
  }, v = ({ el: u, anchor: d }, g, z) => {
    let _;
    for (; u && u !== d; )
      _ = p(u), s(u, g, z), u = _;
    s(d, g, z);
  }, b = ({ el: u, anchor: d }) => {
    let g;
    for (; u && u !== d; )
      g = p(u), i(u), u = g;
    i(d);
  }, P = (u, d, g, z, _, $, N, T, C) => {
    if (d.type === "svg" ? N = "svg" : d.type === "math" && (N = "mathml"), u == null)
      B(
        d,
        g,
        z,
        _,
        $,
        N,
        T,
        C
      );
    else {
      const w = u.el && u.el._isVueCE ? u.el : null;
      try {
        w && w._beginPatch(), Ve(
          u,
          d,
          _,
          $,
          N,
          T,
          C
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, B = (u, d, g, z, _, $, N, T) => {
    let C, w;
    const { props: L, shapeFlag: F, transition: D, dirs: V } = u;
    if (C = u.el = o(
      u.type,
      $,
      L && L.is,
      L
    ), F & 8 ? c(C, u.children) : F & 16 && me(
      u.children,
      C,
      null,
      z,
      _,
      ms(u, $),
      N,
      T
    ), V && ht(u, null, z, "created"), he(C, u, u.scopeId, N, z), L) {
      for (const J in L)
        J !== "value" && !Zt(J) && r(C, J, null, L[J], $, z);
      "value" in L && r(C, "value", null, L.value, $), (w = L.onVnodeBeforeMount) && Pe(w, z, u);
    }
    V && ht(u, null, z, "beforeMount");
    const G = CA(_, D);
    G && D.beforeEnter(C), s(C, d, g), ((w = L && L.onVnodeMounted) || G || V) && pe(() => {
      try {
        w && Pe(w, z, u), G && D.enter(C), V && ht(u, null, z, "mounted");
      } finally {
      }
    }, _);
  }, he = (u, d, g, z, _) => {
    if (g && x(u, g), z)
      for (let $ = 0; $ < z.length; $++)
        x(u, z[$]);
    if (_) {
      let $ = _.subTree;
      if (d === $ || so($.type) && ($.ssContent === d || $.ssFallback === d)) {
        const N = _.vnode;
        he(
          u,
          N,
          N.scopeId,
          N.slotScopeIds,
          _.parent
        );
      }
    }
  }, me = (u, d, g, z, _, $, N, T, C = 0) => {
    for (let w = C; w < u.length; w++) {
      const L = u[w] = T ? He(u[w]) : Re(u[w]);
      y(
        null,
        L,
        d,
        g,
        z,
        _,
        $,
        N,
        T
      );
    }
  }, Ve = (u, d, g, z, _, $, N) => {
    const T = d.el = u.el;
    let { patchFlag: C, dynamicChildren: w, dirs: L } = d;
    C |= u.patchFlag & 16;
    const F = u.props || X, D = d.props || X;
    let V;
    if (g && mt(g, !1), (V = D.onVnodeBeforeUpdate) && Pe(V, g, d, u), L && ht(d, u, g, "beforeUpdate"), g && mt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    w && (!u.dynamicChildren || u.dynamicChildren.length !== w.length) && (C = 0, N = !1, w = null), (F.innerHTML && D.innerHTML == null || F.textContent && D.textContent == null) && c(T, ""), w ? dt(
      u.dynamicChildren,
      w,
      T,
      g,
      z,
      ms(d, _),
      $
    ) : N || It(
      u,
      d,
      T,
      null,
      g,
      z,
      ms(d, _),
      $,
      !1
    ), C > 0) {
      if (C & 16)
        pt(T, F, D, g, _);
      else if (C & 2 && F.class !== D.class && r(T, "class", null, D.class, _), C & 4 && r(T, "style", F.style, D.style, _), C & 8) {
        const G = d.dynamicProps;
        for (let J = 0; J < G.length; J++) {
          const K = G[J], se = F[K], oe = D[K];
          (oe !== se || K === "value") && r(T, K, se, oe, _, g);
        }
      }
      C & 1 && u.children !== d.children && c(T, d.children);
    } else !N && w == null && pt(T, F, D, g, _);
    ((V = D.onVnodeUpdated) || L) && pe(() => {
      V && Pe(V, g, d, u), L && ht(d, u, g, "updated");
    }, z);
  }, dt = (u, d, g, z, _, $, N) => {
    for (let T = 0; T < d.length; T++) {
      const C = u[T], w = d[T], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === Y || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ut(C, w) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? f(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      y(
        C,
        w,
        L,
        null,
        z,
        _,
        $,
        N,
        !0
      );
    }
  }, pt = (u, d, g, z, _) => {
    if (d !== g) {
      if (d !== X)
        for (const $ in d)
          !Zt($) && !($ in g) && r(
            u,
            $,
            d[$],
            null,
            _,
            z
          );
      for (const $ in g) {
        if (Zt($)) continue;
        const N = g[$], T = d[$];
        N !== T && $ !== "value" && r(u, $, T, N, _, z);
      }
      "value" in g && r(u, "value", d.value, g.value, _);
    }
  }, te = (u, d, g, z, _, $, N, T, C) => {
    const w = d.el = u ? u.el : l(""), L = d.anchor = u ? u.anchor : l("");
    let { patchFlag: F, dynamicChildren: D, slotScopeIds: V } = d;
    V && (T = T ? T.concat(V) : V), u == null ? (s(w, g, z), s(L, g, z), me(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      L,
      _,
      $,
      N,
      T,
      C
    )) : F > 0 && F & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === D.length ? (dt(
      u.dynamicChildren,
      D,
      g,
      _,
      $,
      N,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || _ && d === _.subTree) && eo(
      u,
      d,
      !0
      /* shallow */
    )) : It(
      u,
      d,
      g,
      L,
      _,
      $,
      N,
      T,
      C
    );
  }, pn = (u, d, g, z, _, $, N, T, C) => {
    d.slotScopeIds = T, u == null ? d.shapeFlag & 512 ? _.ctx.activate(
      d,
      g,
      z,
      N,
      C
    ) : ce(
      d,
      g,
      z,
      _,
      $,
      N,
      C
    ) : Ee(u, d, C);
  }, ce = (u, d, g, z, _, $, N) => {
    const T = u.component = OA(
      u,
      z,
      _
    );
    if (Wr(u) && (T.ctx.renderer = Bt), DA(T, !1, N), T.asyncDep) {
      if (_ && _.registerDep(T, Ct, N), !u.el) {
        const C = T.subTree = Oe(Je);
        S(null, C, d, g), u.placeholder = C.el;
      }
    } else
      Ct(
        T,
        u,
        d,
        g,
        _,
        $,
        N
      );
  }, Ee = (u, d, g) => {
    const z = d.component = u.component;
    if (bA(u, d, g))
      if (z.asyncDep && !z.asyncResolved) {
        d.el = u.el, Mt(z, d, g);
        return;
      } else
        z.next = d, z.update();
    else
      d.el = u.el, z.vnode = d;
  }, Ct = (u, d, g, z, _, $, N) => {
    const T = () => {
      if (u.isMounted) {
        let { next: F, bu: D, u: V, parent: G, vnode: J } = u;
        {
          const Me = to(u);
          if (Me) {
            F && (F.el = J.el, Mt(u, F, N)), Me.asyncDep.then(() => {
              pe(() => {
                u.isUnmounted || w();
              }, _);
            });
            return;
          }
        }
        let K = F, se;
        mt(u, !1), F ? (F.el = J.el, Mt(u, F, N)) : F = J, D && vn(D), (se = F.props && F.props.onVnodeBeforeUpdate) && Pe(se, G, F, J), mt(u, !0);
        const oe = ki(u), Ce = u.subTree;
        u.subTree = oe, y(
          Ce,
          oe,
          // parent may have changed if it's in a teleport
          f(Ce.el),
          // anchor may have changed if it's in a fragment
          hn(Ce),
          u,
          _,
          $
        ), F.el = oe.el, K === null && yA(u, oe.el), V && pe(V, _), (se = F.props && F.props.onVnodeUpdated) && pe(
          () => Pe(se, G, F, J),
          _
        );
      } else {
        let F;
        const { el: D, props: V } = d, { bm: G, m: J, parent: K, root: se, type: oe } = u, Ce = Xt(d);
        mt(u, !1), G && vn(G), !Ce && (F = V && V.onVnodeBeforeMount) && Pe(F, K, d), mt(u, !0);
        {
          se.ce && se.ce._hasShadowRoot() && se.ce._injectChildStyle(
            oe,
            u.parent ? u.parent.type : void 0
          );
          const Me = u.subTree = ki(u);
          y(
            null,
            Me,
            g,
            z,
            u,
            _,
            $
          ), d.el = Me.el;
        }
        if (J && pe(J, _), !Ce && (F = V && V.onVnodeMounted)) {
          const Me = d;
          pe(
            () => Pe(F, K, Me),
            _
          );
        }
        (d.shapeFlag & 256 || K && Xt(K.vnode) && K.vnode.shapeFlag & 256) && u.a && pe(u.a, _), u.isMounted = !0, d = g = z = null;
      }
    };
    u.scope.on();
    const C = u.effect = new vr(T);
    u.scope.off();
    const w = u.update = C.run.bind(C), L = u.job = C.runIfDirty.bind(C);
    L.i = u, L.id = u.uid, C.scheduler = () => Js(L), mt(u, !0), w();
  }, Mt = (u, d, g) => {
    d.component = u;
    const z = u.vnode.props;
    u.vnode = d, u.next = null, _A(u, d.props, z, g), SA(u, d.children, g), ot(), vi(u), lt();
  }, It = (u, d, g, z, _, $, N, T, C = !1) => {
    const w = u && u.children, L = u ? u.shapeFlag : 0, F = d.children, { patchFlag: D, shapeFlag: V } = d;
    if (D > 0) {
      if (D & 128) {
        Dt(
          w,
          F,
          g,
          z,
          _,
          $,
          N,
          T,
          C
        );
        return;
      } else if (D & 256) {
        Qe(
          w,
          F,
          g,
          z,
          _,
          $,
          N,
          T,
          C
        );
        return;
      }
    }
    V & 8 ? (L & 16 && Lt(w, _, $), F !== w && c(g, F)) : L & 16 ? V & 16 ? Dt(
      w,
      F,
      g,
      z,
      _,
      $,
      N,
      T,
      C
    ) : Lt(w, _, $, !0) : (L & 8 && c(g, ""), V & 16 && me(
      F,
      g,
      z,
      _,
      $,
      N,
      T,
      C
    ));
  }, Qe = (u, d, g, z, _, $, N, T, C) => {
    u = u || bt, d = d || bt;
    const w = u.length, L = d.length, F = Math.min(w, L);
    let D;
    for (D = 0; D < F; D++) {
      const V = d[D] = C ? He(d[D]) : Re(d[D]);
      y(
        u[D],
        V,
        g,
        null,
        _,
        $,
        N,
        T,
        C
      );
    }
    w > L ? Lt(
      u,
      _,
      $,
      !0,
      !1,
      F
    ) : me(
      d,
      g,
      z,
      _,
      $,
      N,
      T,
      C,
      F
    );
  }, Dt = (u, d, g, z, _, $, N, T, C) => {
    let w = 0;
    const L = d.length;
    let F = u.length - 1, D = L - 1;
    for (; w <= F && w <= D; ) {
      const V = u[w], G = d[w] = C ? He(d[w]) : Re(d[w]);
      if (Ut(V, G))
        y(
          V,
          G,
          g,
          null,
          _,
          $,
          N,
          T,
          C
        );
      else
        break;
      w++;
    }
    for (; w <= F && w <= D; ) {
      const V = u[F], G = d[D] = C ? He(d[D]) : Re(d[D]);
      if (Ut(V, G))
        y(
          V,
          G,
          g,
          null,
          _,
          $,
          N,
          T,
          C
        );
      else
        break;
      F--, D--;
    }
    if (w > F) {
      if (w <= D) {
        const V = D + 1, G = V < L ? d[V].el : z;
        for (; w <= D; )
          y(
            null,
            d[w] = C ? He(d[w]) : Re(d[w]),
            g,
            G,
            _,
            $,
            N,
            T,
            C
          ), w++;
      }
    } else if (w > D)
      for (; w <= F; )
        Ue(u[w], _, $, !0), w++;
    else {
      const V = w, G = w, J = /* @__PURE__ */ new Map();
      for (w = G; w <= D; w++) {
        const ge = d[w] = C ? He(d[w]) : Re(d[w]);
        ge.key != null && J.set(ge.key, w);
      }
      let K, se = 0;
      const oe = D - G + 1;
      let Ce = !1, Me = 0;
      const Vt = new Array(oe);
      for (w = 0; w < oe; w++) Vt[w] = 0;
      for (w = V; w <= F; w++) {
        const ge = u[w];
        if (se >= oe) {
          Ue(ge, _, $, !0);
          continue;
        }
        let Ie;
        if (ge.key != null)
          Ie = J.get(ge.key);
        else
          for (K = G; K <= D; K++)
            if (Vt[K - G] === 0 && Ut(ge, d[K])) {
              Ie = K;
              break;
            }
        Ie === void 0 ? Ue(ge, _, $, !0) : (Vt[Ie - G] = w + 1, Ie >= Me ? Me = Ie : Ce = !0, y(
          ge,
          d[Ie],
          g,
          null,
          _,
          $,
          N,
          T,
          C
        ), se++);
      }
      const fi = Ce ? MA(Vt) : bt;
      for (K = fi.length - 1, w = oe - 1; w >= 0; w--) {
        const ge = G + w, Ie = d[ge], di = d[ge + 1], pi = ge + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          di.el || no(di)
        ) : z;
        Vt[w] === 0 ? y(
          null,
          Ie,
          g,
          pi,
          _,
          $,
          N,
          T,
          C
        ) : Ce && (K < 0 || w !== fi[K] ? We(Ie, g, pi, 2) : K--);
      }
    }
  }, We = (u, d, g, z, _ = null) => {
    const { el: $, type: N, transition: T, children: C, shapeFlag: w } = u;
    if (w & 6) {
      We(u.component.subTree, d, g, z);
      return;
    }
    if (w & 128) {
      u.suspense.move(d, g, z);
      return;
    }
    if (w & 64) {
      N.move(u, d, g, Bt);
      return;
    }
    if (N === Y) {
      s($, d, g);
      for (let F = 0; F < C.length; F++)
        We(C[F], d, g, z);
      s(u.anchor, d, g);
      return;
    }
    if (N === gs) {
      v(u, d, g);
      return;
    }
    if (z !== 2 && w & 1 && T)
      if (z === 0)
        T.persisted && !$[ps] ? s($, d, g) : (T.beforeEnter($), s($, d, g), pe(() => T.enter($), _));
      else {
        const { leave: F, delayLeave: D, afterLeave: V } = T, G = () => {
          u.ctx.isUnmounted ? i($) : s($, d, g);
        }, J = () => {
          const K = $._isLeaving || !!$[ps];
          $._isLeaving && $[ps](
            !0
            /* cancelled */
          ), T.persisted && !K ? G() : F($, () => {
            G(), V && V();
          });
        };
        D ? D($, G, J) : J();
      }
    else
      s($, d, g);
  }, Ue = (u, d, g, z = !1, _ = !1) => {
    const {
      type: $,
      props: N,
      ref: T,
      children: C,
      dynamicChildren: w,
      shapeFlag: L,
      patchFlag: F,
      dirs: D,
      cacheIndex: V,
      memo: G
    } = u;
    if ((F === -2 || w && w.hasOnce) && (_ = !1), T != null && (ot(), Qt(T, null, g, u, !0), lt()), V != null && (!u.ctx || u.ctx === d) && (d.renderCache[V] = void 0), L & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const J = L & 1 && D, K = !Xt(u);
    let se;
    if (K && (se = N && N.onVnodeBeforeUnmount) && Pe(se, d, u), L & 6)
      Al(u.component, g, z);
    else {
      if (L & 128) {
        u.suspense.unmount(g, z);
        return;
      }
      J && ht(u, null, d, "beforeUnmount"), L & 64 ? u.type.remove(
        u,
        d,
        g,
        Bt,
        z
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($ !== Y || F > 0 && F & 64) ? Lt(
        w,
        d,
        g,
        !1,
        !0
      ) : ($ === Y && F & 384 || !_ && L & 16) && Lt(C, d, g), z && ci(u);
    }
    const oe = G != null && V == null;
    (K && (se = N && N.onVnodeUnmounted) || J || oe) && pe(() => {
      se && Pe(se, d, u), J && ht(u, null, d, "unmounted"), oe && (u.el = null);
    }, g);
  }, ci = (u) => {
    const { type: d, el: g, anchor: z, transition: _ } = u;
    if (d === Y) {
      ll(g, z);
      return;
    }
    if (d === gs) {
      b(u), _ && !_.persisted && _.afterLeave && _.afterLeave();
      return;
    }
    const $ = () => {
      i(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (u.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: N, delayLeave: T } = _, C = () => N(g, $);
      T ? T(u.el, $, C) : C();
    } else
      $();
  }, ll = (u, d) => {
    let g;
    for (; u !== d; )
      g = p(u), i(u), u = g;
    i(d);
  }, Al = (u, d, g) => {
    const { bum: z, scope: _, job: $, subTree: N, um: T, m: C, a: w } = u;
    zi(C), zi(w), z && vn(z), _.stop(), $ ? ($.flags |= 8, Ue(N, u, d, g)) : u.vnode.el && N && (N.transition = u.vnode.transition, Ue(N, u, d, g)), T && pe(T, d), pe(() => {
      u.isUnmounted = !0;
    }, d);
  }, Lt = (u, d, g, z = !1, _ = !1, $ = 0) => {
    for (let N = $; N < u.length; N++)
      Ue(u[N], d, g, z, _);
  }, hn = (u) => {
    if (u.shapeFlag & 6)
      return hn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = p(u.anchor || u.el), g = d && d[iA];
    return g ? p(g) : d;
  };
  let As = !1;
  const ui = (u, d, g) => {
    let z;
    u == null ? d._vnode && (Ue(d._vnode, null, null, !0), z = d._vnode.component) : y(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = u, As || (As = !0, vi(z), Dr(), As = !1);
  }, Bt = {
    p: y,
    um: Ue,
    m: We,
    r: ci,
    mt: ce,
    mc: me,
    pc: It,
    pbc: dt,
    n: hn,
    o: e
  };
  return {
    render: ui,
    hydrate: void 0,
    createApp: dA(ui)
  };
}
function ms({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function mt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function CA(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function eo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (W(s) && W(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = He(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && eo(o, l)), l.type === Qn && (l.patchFlag === -1 && (l = i[r] = He(l)), l.el = o.el), l.type === Je && !l.el && (l.el = o.el);
    }
}
function MA(e) {
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
function to(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : to(t);
}
function zi(e) {
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
function IA(e, t) {
  t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : Ql(e);
}
const Y = /* @__PURE__ */ Symbol.for("v-fgt"), Qn = /* @__PURE__ */ Symbol.for("v-txt"), Je = /* @__PURE__ */ Symbol.for("v-cmt"), gs = /* @__PURE__ */ Symbol.for("v-stc"), wt = [];
let xe = null;
function E(e = !1) {
  wt.push(xe = e ? null : []);
}
function io() {
  wt.pop(), xe = wt[wt.length - 1] || null;
}
let on = 1;
function Ei(e, t = !1) {
  on += e, e < 0 && xe && t && (xe.hasOnce = !0);
}
function ro(e) {
  return e.dynamicChildren = on > 0 ? xe || bt : null, io(), on > 0 && xe && xe.push(e), e;
}
function I(e, t, n, s, i, r) {
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
    Oe(
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
const lo = ({ key: e }) => e ?? null, wn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || /* @__PURE__ */ de(e) || Z(e) ? { i: ye, r: e, k: t, f: !!n } : e : null);
function h(e, t = null, n = null, s = 0, i = null, r = e === Y ? 0 : 1, o = !1, l = !1) {
  const A = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && lo(t),
    ref: t && wn(t),
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
    ctx: ye
  };
  return l ? (In(A, n), r & 128 && e.normalize(A)) : n && (A.shapeFlag |= ie(n) ? 8 : 16), on > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (A.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  A.patchFlag !== 32 && xe.push(A), A;
}
const Oe = PA;
function PA(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === cA) && (e = Je), oo(e)) {
    const l = Ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && In(l, n), on > 0 && !r && xe && (l.shapeFlag & 6 ? xe[xe.indexOf(e)] = l : xe.push(l)), l.patchFlag = -2, l;
  }
  if (WA(e) && (e = e.__vccOpts), t) {
    t = TA(t);
    let { class: l, style: A } = t;
    l && !ie(l) && (t.class = ct(l)), ee(A) && (/* @__PURE__ */ Zs(A) && !W(A) && (A = ze({}, A)), t.style = Gn(A));
  }
  const o = ie(e) ? 1 : so(e) ? 128 : Jn(e) ? 64 : ee(e) ? 4 : Z(e) ? 2 : 0;
  return h(
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
function TA(e) {
  return e ? /* @__PURE__ */ Zs(e) || Zr(e) ? ze({}, e) : e : null;
}
function Ot(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: A } = e, a = t ? NA(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && lo(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? W(r) ? r.concat(wn(t)) : [r, wn(t)] : wn(t)
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
    patchFlag: t && e.type !== Y ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Ot(e.ssContent),
    ssFallback: e.ssFallback && Ot(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return A && s && qs(
    c,
    A.clone(c)
  ), c;
}
function kt(e = " ", t = 0) {
  return Oe(Qn, null, e, t);
}
function U(e = "", t = !1) {
  return t ? (E(), st(Je, null, e)) : Oe(Je, null, e);
}
function Re(e) {
  return e == null || typeof e == "boolean" ? Oe(Je) : W(e) ? Oe(
    Y,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : oo(e) ? He(e) : Oe(Qn, null, String(e));
}
function He(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ot(e);
}
function In(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (W(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), In(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Zr(t) ? t._ctx = ye : i === 3 && ye && (ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Z(t)) {
    if (s & 65) {
      In(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ye }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [kt(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function NA(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = ct([t.class, s.class]));
      else if (i === "style")
        t.style = Gn([t.style, s.style]);
      else if (Ln(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(W(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Bn(i) && (t[i] = o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Pe(e, t, n, s = null) {
  Le(e, t, 7, [
    n,
    s
  ]);
}
const RA = Gr();
let FA = 0;
function OA(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || RA, r = {
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
    scope: new _l(
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
    emitsOptions: mA(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = hA.bind(null, r), e.ce && e.ce(r), r;
}
let at = null;
const jA = () => at || ye;
let Pn, ln;
{
  const e = Un(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
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
const ei = (e) => {
  const t = at;
  return Pn(e), e.scope.on(), () => {
    e.scope.off(), Pn(t);
  };
}, Ci = () => {
  at && at.scope.off(), Pn(null);
};
function Ao(e) {
  return e.vnode.shapeFlag & 4;
}
let An = !1;
function DA(e, t = !1, n = !1) {
  t && ln(t);
  const { props: s, children: i } = e.vnode, r = Ao(e);
  vA(e, s, r, t), $A(e, i, n || t);
  const o = r ? LA(e, t) : void 0;
  return t && ln(!1), o;
}
function LA(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, uA);
  const { setup: s } = n;
  if (s) {
    ot();
    const i = e.setupContext = s.length > 1 ? VA(e) : null, r = ei(e), o = fn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = dr(o);
    if (lt(), r(), (l || e.sp) && !Xt(e) && oA(e), l) {
      if (o.then(Ci, Ci), t)
        return o.then((A) => {
          ln(!0);
          try {
            Mi(e, A, t);
          } finally {
            ln(!1);
          }
        }).catch((A) => {
          Kn(A, e, 0);
        });
      e.asyncDep = o;
    } else
      Mi(e, o);
  } else
    ao(e);
}
function Mi(e, t, n) {
  Z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) && (e.setupState = Rr(t)), ao(e);
}
function ao(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || vt);
}
const BA = {
  get(e, t) {
    return ae(e, "get", ""), e[t];
  }
};
function VA(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, BA),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Xn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Rr(Vl(e.exposed)), {
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
function WA(e) {
  return Z(e) && "__vccOpts" in e;
}
const ne = (e, t) => /* @__PURE__ */ Hl(e, t, An), UA = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Os;
const Ii = typeof window < "u" && window.trustedTypes;
if (Ii)
  try {
    Os = /* @__PURE__ */ Ii.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const co = Os ? (e) => Os.createHTML(e) : (e) => e, GA = "http://www.w3.org/2000/svg", YA = "http://www.w3.org/1998/Math/MathML", Ye = typeof document < "u" ? document : null, Pi = Ye && /* @__PURE__ */ Ye.createElement("template"), HA = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? Ye.createElementNS(GA, e) : t === "mathml" ? Ye.createElementNS(YA, e) : n ? Ye.createElement(e, { is: n }) : Ye.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => Ye.createTextNode(e),
  createComment: (e) => Ye.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ye.querySelector(e),
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
      Pi.innerHTML = co(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Pi.content;
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
}, KA = /* @__PURE__ */ Symbol("_vtc");
function ZA(e, t, n) {
  const s = e[KA];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ti = /* @__PURE__ */ Symbol("_vod"), JA = /* @__PURE__ */ Symbol("_vsh"), qA = /* @__PURE__ */ Symbol(""), QA = /(?:^|;)\s*display\s*:/;
function XA(e, t, n) {
  const s = e.style, i = ie(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (ie(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Yt(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Yt(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null ? ta(
        e,
        o,
        !ie(t) && t ? t[o] : void 0,
        l
      ) || Yt(s, o, l) : Yt(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[qA];
      o && (n += ";" + o), s.cssText = n, r = QA.test(n);
    }
  } else t && e.removeAttribute("style");
  Ti in e && (e[Ti] = r ? s.display : "", e[JA] && (s.display = "none"));
}
const bn = /\s*!important$/;
function Yt(e, t, n) {
  if (W(n))
    n.forEach((s) => Yt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    bn.test(n) ? e.setProperty(t, n.replace(bn, ""), "important") : e.setProperty(t, n);
  else {
    const s = ea(e, t);
    bn.test(n) ? e.setProperty(
      Et(s),
      n.replace(bn, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ni = ["Webkit", "Moz", "ms"], xs = {};
function ea(e, t) {
  const n = xs[t];
  if (n)
    return n;
  let s = we(t);
  if (s !== "filter" && s in e)
    return xs[t] = s;
  s = mr(s);
  for (let i = 0; i < Ni.length; i++) {
    const r = Ni[i] + s;
    if (r in e)
      return xs[t] = r;
  }
  return t;
}
function ta(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ie(s) && n === s;
}
const Ri = "http://www.w3.org/1999/xlink";
function Fi(e, t, n, s, i, r = xl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ri, t.slice(6, t.length)) : e.setAttributeNS(Ri, t, n) : n == null || r && !xr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : je(n) ? String(n) : n
  );
}
function Oi(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? co(n) : n);
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
    l === "boolean" ? n = xr(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function xt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function na(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ji = /* @__PURE__ */ Symbol("_vei");
function sa(e, t, n, s, i = null) {
  const r = e[ji] || (e[ji] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, A] = oa(t);
    if (s) {
      const a = r[t] = aa(
        s,
        i
      );
      xt(e, l, a, A);
    } else o && (na(e, l, o, A), r[t] = void 0);
  }
}
const ia = /(Once|Passive|Capture)$/, ra = /^on:?(?:Once|Passive|Capture)$/;
function oa(e) {
  let t, n;
  for (; (n = e.match(ia)) && !ra.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Et(e.slice(2)), t];
}
let bs = 0;
const la = /* @__PURE__ */ Promise.resolve(), Aa = () => bs || (la.then(() => bs = 0), bs = Date.now());
function aa(e, t) {
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
      const o = i.slice(), l = [s];
      for (let A = 0; A < o.length && !s._stopped; A++) {
        const a = o[A];
        a && Le(
          a,
          t,
          5,
          l
        );
      }
    } else
      Le(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Aa(), n;
}
const Di = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ca = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? ZA(e, s, o) : t === "style" ? XA(e, n, s) : Ln(t) ? Bn(t) || sa(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ua(e, t, s, o)) ? (Oi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fi(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (fa(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ie(s))) ? Oi(e, we(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Fi(e, t, s, o));
};
function ua(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Di(t) && Z(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Di(t) && ie(n) ? !1 : t in e;
}
function fa(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = we(t);
  return Array.isArray(n) ? n.some((i) => we(i) === s) : Object.keys(n).some((i) => we(i) === s);
}
const Tn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return W(t) ? (n) => vn(t, n) : t;
};
function da(e) {
  e.target.composing = !0;
}
function Li(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const yt = /* @__PURE__ */ Symbol("_assign"), yn = /* @__PURE__ */ Symbol("_initialValue");
function ys(e, t, n) {
  return t && (e = e.trim()), n && (e = Wn(e)), e;
}
const Bi = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[yn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[yn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[yt] = Tn(i);
    const r = s || i.props && i.props.type === "number";
    xt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[yt](ys(e.value, n, r));
    }), (n || r) && xt(e, "change", () => {
      e.value = ys(e.value, n, r);
    }), t || (xt(e, "compositionstart", da), xt(e, "compositionend", Li), xt(e, "change", Li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", r = e[yn];
    delete e[yn], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[yt](ys(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, o) {
    if (e[yt] = Tn(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Wn(e.value) : e.value, A = t ?? "";
    if (l === A)
      return;
    const a = e.getRootNode();
    (a instanceof Document || a instanceof ShadowRoot) && a.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === A) || (e.value = A);
  }
}, uo = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, xt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (A) => A.selected).map(
        (A) => n ? Wn(Nn(A)) : Nn(A)
      ), r = e.multiple, o = r ? $t(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        r,
        r ? W(o) ? i.slice() : i : o
      ];
      try {
        e[yt](o);
      } finally {
        Or(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[yt] = Tn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Vi(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[yt] = Tn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !pa(t, n[1], n[0])) && Vi(e, t);
  }
};
function pa(e, t, n) {
  if (!n || W(e)) return rt(e, t);
  if ($t(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Vi(e, t) {
  const n = e.multiple, s = W(t);
  if (!(n && !s && !$t(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const o = e.options[i], l = Nn(o);
      if (n)
        if (s) {
          const A = typeof l;
          A === "string" || A === "number" ? o.selected = t.some((a) => String(a) === String(l)) : o.selected = vl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (rt(Nn(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Nn(e) {
  return "_value" in e ? e._value : e.value;
}
const ha = ["ctrl", "shift", "alt", "meta"], ma = {
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
  exact: (e, t) => ha.some((n) => e[`${n}Key`] && !t.includes(n))
}, ga = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = ma[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  }));
}, xa = /* @__PURE__ */ ze({ patchProp: ca }, HA);
let Wi;
function ba() {
  return Wi || (Wi = zA(xa));
}
const ya = ((...e) => {
  const t = ba().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = _a(s);
    if (!i) return;
    const r = t._component;
    !Z(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, va(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function va(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function _a(e) {
  return ie(e) ? document.querySelector(e) : e;
}
const wa = "zhonglou", ka = "钟楼", $a = "1.3.0", Sa = "S", za = 10, Ea = "【副本进行中：钟楼】", Ca = [], Ma = { briefingName: "钟楼" }, Ia = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, Pa = { type: "nights", template: "剩余{n}夜" }, Ta = "至第四日日出", Na = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], Ra = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", Fa = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], Oa = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], ja = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], Da = [{ title: "游玩说明", md: `## 副本概况
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
  name: ka,
  version: $a,
  level: Sa,
  players: za,
  token: Ea,
  legacyKeys: Ca,
  detect: Ma,
  time: Ia,
  remaining: Pa,
  deadline: Ta,
  roles: Na,
  rolesNote: Ra,
  stateFields: Fa,
  phases: Oa,
  events: ja,
  docs: Da
}, Ba = "jingjie", Va = "境界游乐园", Wa = "1.0.0", Ua = "A", Ga = "【副本进行中：境界游乐园】", Ya = [], Ha = { briefingName: "境界游乐园" }, Ka = { type: "none" }, Za = { type: "fromPanel" }, Ja = [], qa = [], Qa = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], Xa = {
  id: Ba,
  name: Va,
  version: Wa,
  level: Ua,
  token: Ga,
  legacyKeys: Ya,
  detect: Ha,
  time: Ka,
  remaining: Za,
  phases: Ja,
  events: qa,
  docs: Qa
}, ec = "kaoshi", tc = "考试", nc = "1.1.0", sc = "A", ic = "【副本进行中：考试】", rc = [], oc = { briefingName: "考试" }, lc = { type: "countdown", minutesPerRound: 3 }, Ac = { type: "fromPanel" }, ac = "至考试结束", cc = [{ id: "main", name: "考试", cap: 100, next: null }], uc = [], fc = [], dc = {
  id: ec,
  name: tc,
  version: nc,
  level: sc,
  token: ic,
  legacyKeys: rc,
  detect: oc,
  time: lc,
  remaining: Ac,
  deadline: ac,
  phases: cc,
  events: uc,
  docs: fc
}, pc = "xiyan", hc = "喜宴", mc = "1.1.0", gc = "D", xc = "【副本进行中：喜宴】", bc = [], yc = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, vc = { type: "countdown", minutesPerRound: 3 }, _c = { type: "fromPanel" }, wc = "至天亮", kc = [{ id: "main", name: "喜宴", cap: 160, next: null }], $c = [], Sc = [], zc = {
  id: pc,
  name: hc,
  version: mc,
  level: gc,
  token: xc,
  legacyKeys: bc,
  detect: yc,
  time: vc,
  remaining: _c,
  deadline: wc,
  phases: kc,
  events: $c,
  docs: Sc
}, Ec = "youxi", Cc = "游戏", Mc = "1.1.0", Ic = "C", Pc = "【副本进行中：游戏】", Tc = [], Nc = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Rc = { type: "countdown", minutesPerRound: 8 }, Fc = { type: "fromPanel" }, Oc = "至结算", jc = [{ id: "main", name: "游戏", cap: 90, next: null }], Dc = [], Lc = [], Bc = {
  id: Ec,
  name: Cc,
  version: Mc,
  level: Ic,
  token: Pc,
  legacyKeys: Tc,
  detect: Nc,
  time: Rc,
  remaining: Fc,
  deadline: Oc,
  phases: jc,
  events: Dc,
  docs: Lc
}, Vc = "wuming", Wc = "污名", Uc = "1.1.0", Gc = "B", Yc = "4-8", Hc = "【副本进行中：污名】", Kc = ["污名"], Zc = { briefingName: "污名" }, Jc = { type: "countdown", minutesPerRound: 3 }, qc = { type: "countdown", template: "剩余{m}分钟" }, Qc = "至收播", Xc = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], eu = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], tu = [], nu = !0, su = {
  id: Vc,
  name: Wc,
  version: Uc,
  level: Gc,
  players: Yc,
  token: Hc,
  legacyKeys: Kc,
  detect: Zc,
  time: Jc,
  remaining: qc,
  deadline: Qc,
  phases: Xc,
  events: eu,
  docs: tu,
  disableLive: nu
}, iu = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function Nt(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const ru = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function Ui(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(ru)) {
    const i = Number(s[1]), r = s[2];
    n = !0, r === "天" ? t += i * 1440 : r === "小时" || r === "个小时" || r === "h" || r === "H" ? t += i * 60 : t += i;
  }
  return n ? Math.round(t) : null;
}
function fo(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: Ui(t), total: n === void 0 ? null : Ui(n) };
}
function ou(e, t) {
  return e.phases.find((n) => n.id === t);
}
function an(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); )
    n.push(i), s.add(i.id), i = ou(e, i.next);
  return n;
}
function po(e, t) {
  return an(e, t).filter((n) => n.night).length;
}
function lu(e, t, n) {
  if (an(e, t).some((i) => i.id === n.id)) return t;
  const s = e.phases[0];
  return s && an(e, s).some((i) => i.id === n.id) ? s : n;
}
function vs(e, t, n, s, i) {
  if (!e.phases.length || !e.phases.some((f) => f.id === t.id)) return;
  let r = an(e, n), o = r.findIndex((f) => f.id === t.id);
  o < 0 && (r = an(e, t), o = 0);
  const l = r.reduce((f, p) => f + Math.max(0, p.cap), 0), A = Math.max(0, t.cap - s) + r.slice(o + 1).reduce((f, p) => f + Math.max(0, p.cap), 0), a = t.deadline ?? r[0].deadline ?? e.deadline, c = { x: A, y: l, deadline: a };
  if (e.time.type === "countdown") {
    const f = e.time.minutesPerRound, p = e.time.totalMinutes, x = p && p > 0 ? p : l * f;
    let R = p && p > 0 && l > 0 ? Math.round(x * A / l) : A * f;
    const y = fo(i).remaining;
    y !== null && (R = Math.min(R, y - f)), R = Math.max(0, R), Object.assign(c, { minutes: R, total: x, text: `约剩${Nt(R)}/${Nt(x)}` });
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
  const s = e ?? "", i = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), r = i ? Math.max(1, Number(i[1])) : Math.max(1, Math.round(n[t] ?? cn[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: r };
  const l = Number(o[1]), A = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return A <= 0 ? { rounds: r } : { rounds: r, totalMinutes: A, minutesPerRound: Math.max(1, Math.round(A / r)) };
}
const Rn = "generic", js = [La, Xa, dc, zc, Bc, su], Au = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(iu)
  }
};
function au(e, t) {
  const n = Au[e.id]?.[t];
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
function ti(e) {
  const t = new Set(js.map((n) => n.id));
  return [...js, ...e.filter((n) => !t.has(n.id))];
}
const cu = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, uu = /<阶段切换>([\s\S]*?)<\/阶段切换>/, fu = /<副本结算>([\s\S]*?)<\/副本结算>/, yo = /<副本>([\s\S]*?)<\/副本>/, du = /<角色登记>([\s\S]*?)<\/角色登记>/, pu = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/;
function vo(e) {
  const t = cu.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (o) => {
    const l = new RegExp(`${o}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return l ? l[1].trim() : void 0;
  }, r = i("等级");
  return r && (n.level = r.replace(/级$/, "").trim().toUpperCase()), n.goal = i("目标"), n.limit = i("时限"), n.players = i("人数"), n;
}
function hu(e) {
  const t = uu.exec(e ?? "");
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
  const t = fu.exec(e ?? "");
  if (!t) return null;
  const n = _o(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function ko(e) {
  const t = du.exec(e ?? "");
  if (!t) return null;
  const n = _o(t[1]);
  return Object.keys(n).length ? n : null;
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
    const o = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(r);
    if (o) {
      const l = o[1].toLowerCase(), A = o[2].trim();
      l === "时限" ? (n.limit = A, s = null) : l === "进度条" ? (n.progressBar = A, s = null) : l === "任务" ? (A && n.tasks.push(A), s = "tasks") : (n.ps = A, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(r)) {
      s = null;
      continue;
    }
    s === "tasks" ? n.tasks.push(r) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${r}` : r);
  }
  return n;
}
function mu(e) {
  const t = pu.exec(e ?? "");
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
function gu(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const i = (l) => !!l.clock && !l.night;
  let r = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      r = _s(e, t, i), o = r?.cap ?? 0;
      break;
    case "晚饭":
      r = _s(e, t, i), r && (o = Math.ceil(r.cap * 0.75), r.id === t.id && o <= n && (o = r.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      r = _s(e, t, (l) => !!l.night), o = r?.cap ?? 0;
      break;
  }
  return !r || r.id === t.id && o <= n + 1 ? null : { phase: r.id, round: o, label: `${r.name}第${o}轮` };
}
const xu = /<状态栏>([\s\S]*?)<\/状态栏>/;
function bu(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function ws(e, t) {
  const n = bu(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const ks = /* @__PURE__ */ new Map();
function yu(e, t) {
  const n = `${e}\0${t}`;
  if (!ks.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (i) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, i);
    }
    ks.set(n, s);
  }
  return ks.get(n);
}
function vu(e, t) {
  const n = String(e ?? ""), s = (l, A) => l ? { signal: A, pack: l, info: { name: l.name, level: l.level } } : null, i = vo(n);
  if (i)
    return { signal: 1, pack: t.find((A) => A.detect.briefingName === i.name), info: i };
  const r = yo.exec(n);
  if (r) {
    const l = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(r[1]), A = l && s(ws(t, l[1]), 2);
    if (A) return A;
  }
  for (const l of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const A = s(ws(t, l[1]), 3);
    if (A) return A;
  }
  const o = xu.exec(n);
  if (o) {
    for (const l of o[1].split(`
`))
      if (l.includes("地点"))
        for (const A of l.matchAll(/副本《([^》]+)》/g)) {
          const a = s(ws(t, A[1]), 4);
          if (a) return a;
        }
  }
  for (const l of t)
    for (const A of l.detect.patterns ?? []) {
      const a = yu(l.id, A);
      if (a && a.test(n)) return s(l, 5);
    }
  return null;
}
const Gi = 5, _u = { id: "_open", name: "进行中", cap: 0, next: null };
function jt(e) {
  return !!e && !e.is_user && !e.is_system;
}
function wu(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function So(e, t, n) {
  const s = wu(e) + Math.max(0, n - 1) * t, i = Math.floor(s / 60) % 24, r = (s % 60 + 60) % 60;
  return `${i % 12 === 0 ? 12 : i % 12}:${String(r).padStart(2, "0")}`;
}
function Yi(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return So(e.time.dayStart, e.time.minutesPerRound, n);
}
function zo(e) {
  return e.phases.length ? e.phases : [_u];
}
function kn(e, t) {
  return zo(e).find((n) => n.id === t);
}
function Hi(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (i.id === n) return !0;
    s.add(i.id), i = kn(e, i.next);
  }
  return !1;
}
function Ki(e, t, n, s) {
  const i = n + 1, r = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > i) {
      let l = r.map((a, c) => ({ e: a, i: c })).filter(({ e: a }) => a.from >= i && a.from <= o).sort((a, c) => a.e.from - c.e.from || a.i - c.i).map(({ e: a }) => a), A = o;
      return l.length > Gi && (A = l[Gi - 1].from, l = l.filter((a) => a.from <= A)), { phase: t, round: A, events: l, skipFrom: i };
    }
  }
  return { phase: t, round: i, events: r.filter((o) => o.from === i) };
}
function ku(e, t, n) {
  const s = t.entryIndex;
  if (!jt(e[s])) return null;
  const i = zo(n);
  let r = i[0], o = i[0], l = 0, A, a = !1, c, f, p = null, x, R, y;
  const k = /* @__PURE__ */ new Set(), S = {}, M = /* @__PURE__ */ new Map();
  for (const te of t.manual ?? [])
    M.has(te.atIndex) || M.set(te.atIndex, []), M.get(te.atIndex).push(te);
  const v = (te) => {
    n.phases.length && (o = lu(n, o, te)), r = te, l = 0, p && !Hi(n, r, p.phase) && (p = null);
  };
  for (let te = s; te < e.length; te++) {
    const pn = e[te];
    if (!a && jt(pn)) {
      const ce = Ki(n, r, l, p);
      l = ce.round, ce.events.forEach((Qe) => k.add(Qe.id)), S[te] = {
        phase: r.id,
        round: l,
        events: ce.events.map((Qe) => Qe.id),
        skipFrom: ce.skipFrom,
        limit: vs(n, r, o, l, A)
      }, p && r.id === p.phase && l >= p.round && (p = null);
      const Ee = String(pn.mes ?? ""), Ct = $o(Ee);
      Ct && (R = Ct), A = Ct?.limit;
      const Mt = ko(Ee);
      Mt && (y = Mt);
      const It = wo(Ee);
      if (It)
        a = !0, c = "tag", f = te, x = It;
      else {
        const Qe = hu(Ee), Dt = Qe ? i.find((We) => We.name === Qe) : void 0;
        if (Dt && n.phases.length)
          v(Dt);
        else if (r.cap > 0 && l >= r.cap && r.next) {
          const We = kn(n, r.next);
          We && v(We);
        }
      }
    }
    for (const ce of M.get(te) ?? []) {
      if (a) break;
      switch (ce.kind) {
        case "skip": {
          p = kn(n, ce.targetPhase) && Hi(n, r, ce.targetPhase) ? { phase: ce.targetPhase, round: ce.targetRound } : null;
          break;
        }
        case "setPhase": {
          const Ee = kn(n, ce.phase);
          Ee && (p = null, v(Ee));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(ce.round)), p = null;
          break;
        case "end":
          a = !0, c = "manual", f = te;
          break;
      }
    }
  }
  const b = a ? null : Ki(n, r, l, p), P = b ? b.round : l + 1, B = r.cap > 0, he = n.events.filter((te) => k.has(te.id)).map((te) => te.id), me = a ? void 0 : vs(n, r, o, P, A), Ve = a ? void 0 : vs(n, r, o, l);
  let dt;
  const pt = n.remaining;
  return !a && pt.type === "nights" && n.phases.length && !r.byTag && !r.frozen ? dt = pt.template.replace("{n}", String(po(n, r))) : !a && pt.type === "countdown" && me?.minutes !== void 0 && (dt = pt.template.replace("{m}", String(me.minutes))), {
    phase: r,
    round: l,
    nextRound: P,
    clock: a ? void 0 : Yi(n, r, P),
    currentClock: Yi(n, r, l),
    remainingText: dt,
    limit: me,
    roundsLeft: Ve ? { x: Ve.x, y: Ve.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: a,
    endedBy: c,
    endIndex: f,
    firedEvents: he,
    warn: !a && B && P >= r.cap - 2,
    isLastRound: !a && B && P === r.cap,
    overdue: !a && B && !r.next && P > r.cap,
    next: b,
    skipGoal: p,
    settlement: x,
    panel: R,
    rolesFromChat: y,
    perMessage: S,
    entryIndex: s
  };
}
const Eo = "rlzc_token", Co = "rlzc_progress", Mo = "rlzc_turn", Io = "rlzc_state", $u = [Eo, Co, Mo, Io], es = { token: "", progress: "", turn: "", injected: [] };
function Su(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Fn(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const i = new RegExp(`(?<!\\{)\\{(${s.map(Su).join("|")})\\}(?!\\})`, "g");
  return e.replace(i, (r, o) => n?.[o]?.trim() || o);
}
function zu(e, t) {
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
function Zi(e, t, n, s = !1) {
  let i = Fn(e.text, t, n);
  return e.to > e.from && (i = `在本阶段第${e.from}到${e.to}轮之间发生：${i}`), e.if && !s && (i += `（条件：${Fn(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${i}`;
}
function Eu(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Cu(e, t, n, s = {}) {
  if (!t || !n || t.ended || n.status !== "active") return es;
  const i = s.roles, r = e.phases.length > 0, o = t.next, l = [`副本：${e.name}（${e.level}级）`], A = t.limit;
  if (r)
    l.push(`阶段：${t.phase.name}`), l.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), A && l.push(`剩余${A.x}/${A.y}轮`), t.clock && l.push(`钟时：${t.clock}`), A?.text && l.push(`时限：${A.text}`), e.remaining.type === "countdown" && t.remainingText && l.push(t.remainingText), A?.deadline && !A.text?.includes(A.deadline) && l.push(`截止：${A.deadline}`);
  else {
    l.push(`本轮：第${t.nextRound}轮`), t.clock && l.push(`钟时：${t.clock}`);
    const v = s.panelLimit || s.briefing?.limit;
    v && l.push(`时限：${v}`);
  }
  const a = ["［副本进度·仅供AI］", l.join("　")];
  if (s.briefing?.goal && (!r || e.id === "generic") && a.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const v = e.roles.filter((b) => i?.[b]);
    a.push(
      v.length ? `角色登记：${e.roles.map((b) => `${b}=${i?.[b] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const c = zu(e, t.firedEvents);
  c && a.push(`已发生事件：${c}`);
  const f = [];
  o.skipFrom !== void 0 && f.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const p = new Map((s.subNext ?? []).map((v) => [v.id, v])), x = o.events.filter((v) => v.if && p.get(v.id)?.ok === !1).map((v) => ({ id: v.id, reason: p.get(v.id).reason })), R = o.events.filter((v) => !x.some((b) => b.id === v.id)), y = (v) => !!v.if && p.get(v.id)?.ok === !0, k = R.filter((v) => v.kind === "event"), S = R.filter((v) => v.kind === "directive");
  if (k.length && (f.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), k.forEach((v) => f.push(Zi(v, e, i, y(v))))), S.length && (f.push("本轮写作要求："), S.forEach((v) => f.push(Zi(v, e, i, y(v))))), t.isLastRound ? f.push(Eu(t)) : t.overdue && f.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && f.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && f.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((v) => i?.[v])) {
    let v = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((b) => `${b}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (v += "死者不得是{{user}}或其同伴。"), f.push(v);
  }
  let M;
  return A?.text && (A.minutes !== void 0 ? (f.push(
    `本轮<副本>的时限一栏写：${A.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), M = { text: A.text, minutes: A.minutes, total: A.total }) : (f.push(`本轮<副本>的时限一栏写：${A.text}（照抄）。`), M = { text: A.text })), {
    token: e.token,
    progress: a.join(`
`),
    turn: f.length ? ["［本轮指令·仅供AI］", ...f].join(`
`) : "",
    injected: R.map((v) => v.id),
    limit: M,
    skipped: x.length ? x : void 0,
    state: s.stateText || void 0
  };
}
const Mu = 1, Iu = 0;
function re() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function Pu() {
  const e = re();
  return e.eventTypes ?? e.event_types ?? {};
}
function Xe(e, t) {
  const n = Pu()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  re().eventSource.on(n, t);
}
function Ae() {
  return re().chat ?? [];
}
function ts() {
  const e = re();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function ns() {
  return re().chatMetadata ?? {};
}
function dn() {
  const e = re();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Ht(e, t, n, s) {
  re().setExtensionPrompt(e, t, Mu, n, s, Iu);
}
function Se(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Be(e) {
  const t = re();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function Ji(e, t = "") {
  const n = re();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const i = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof i == "string" ? i : null;
  }
  return window.prompt(e, t);
}
const St = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function Po(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function Tu(e, t = St) {
  return t.length ? e.replace(Po(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function To(e, t = St, n = !1) {
  const s = Ae()[e];
  if (!s || s.is_user) return;
  const i = String(s.extra?.display_text ?? s.mes ?? "");
  if (!Po(n ? St : t, "").test(i)) return;
  const r = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!r) return;
  const o = re().messageFormatting;
  if (typeof o != "function") return;
  const l = o(Tu(i, t), s.name ?? "", !!s.is_system, !1, e);
  r.innerHTML !== l && (r.innerHTML = l);
}
function Nu(e = St, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && To(s, e, t);
  });
}
const Ru = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function No(e) {
  return e.stateFields?.length ? e.stateFields : [Ru];
}
const Fu = [...St, "状态栏"], Ou = new RegExp(`<(${Fu.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function ju(e) {
  return String(e ?? "").replace(Ou, "").replace(/\n{3,}/g, `

`).trim();
}
function Du(e) {
  const n = [
    "你是角色扮演副本的记录员，不写剧情，只整理事实。",
    "根据本轮正文完成三件事：",
    "1. 事件核对：逐条判断「本轮后台事件」在正文里是 done（已发生）、missed（该发生但没写出来）还是 void（条件已不成立，不该发生），各附一句理由。后台事件即使{{user}}看不到，只要正文与之不矛盾、且没有写出相反的事实，就算 done。",
    "2. 隐藏状态：在「上一轮状态」的基础上更新下列字段，只依据正文里已经发生的事实，没有变化就照抄上一轮：",
    ...No(e.pack).map((o) => `   - ${o.key}（${o.label}）：${o.hint}`),
    "3. 条件预判：逐条判断「下一轮事件」的条件现在是否仍成立（ok 为 true/false），附一句理由。",
    "只输出一个 JSON 对象，不要任何解释，格式：",
    '{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}]}',
    "没有本轮事件时 events 为 []；没有下一轮事件时 next 为 []。"
  ].join(`
`), s = e.events.length ? e.events.map((o) => `- ${o.id}：${o.text}${o.if ? `（条件：${o.if}）` : ""}`).join(`
`) : "（无）", i = e.nextConditional.length ? e.nextConditional.map((o) => `- ${o.id}：${o.text}（条件：${o.if}）`).join(`
`) : "（无）", r = [
    `【副本】${e.pack.name}　阶段：${e.phaseName}　第${e.round}轮`,
    `【上一轮状态】${e.prevState ? JSON.stringify(e.prevState) : "（尚无，请根据正文建立）"}`,
    `【本轮后台事件】
${s}`,
    `【下一轮事件】
${i}`,
    `【本轮正文】
${ju(e.text)}`
  ].join(`

`);
  return { system: n, user: r };
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
  const o = ["done", "missed", "void"], l = (Array.isArray(r.events) ? r.events : []).filter((a) => a && typeof a.id == "string" && o.includes(a.status)).map((a) => ({ id: a.id, status: a.status, reason: String(a.reason ?? "") })), A = (Array.isArray(r.next) ? r.next : []).filter((a) => a && typeof a.id == "string" && typeof a.ok == "boolean").map((a) => ({ id: a.id, ok: a.ok, reason: String(a.reason ?? "") }));
  return { events: l, state: r.state, next: A };
}
function Bu(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function Vu(e, t, n = 2) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return Lu(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
class Ro extends Error {
}
function Fo(e) {
  if (e instanceof Ro) return "超时";
  if (e instanceof Kt) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function Oo(e) {
  return e?.extra?.rlzc;
}
function ss(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || s.is_system) continue;
    const i = Oo(s)?.sub;
    if (i?.state && !i.skipped) return { index: n, state: i.state };
  }
  return null;
}
function Wu(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || s.is_system) continue;
    const i = Oo(s)?.sub;
    return i && !i.skipped && Array.isArray(i.next) ? i.next : void 0;
  }
}
function On(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => On(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${On(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function jo(e, t) {
  const n = No(e), s = new Set(n.map((r) => r.key)), i = n.filter((r) => t[r.key] !== void 0).map((r) => `${r.label}：${On(t[r.key])}`);
  for (const [r, o] of Object.entries(t)) s.has(r) || i.push(`${r}：${On(o)}`);
  return i.length ? ["［副本状态·仅供AI］", ...i].join(`
`) : "";
}
const Do = 1500;
function Lo() {
  return re().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function Bo(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Vo(e, t) {
  const n = new AbortController();
  let s;
  const i = new Promise((r, o) => {
    s = setTimeout(() => {
      n.abort(), o(new Ro(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), i]);
  } finally {
    clearTimeout(s);
  }
}
function Wo(e, t) {
  const n = t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : "") ?? "", s = new Error(`${e || ""} ${n}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return s.status = e, s;
}
async function Uo(e, t, n, s = Do) {
  const i = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: Lo(),
    signal: n,
    body: JSON.stringify({
      ...Bo(e),
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
  if (!i.ok || o?.error) throw Wo(i.status === 200 ? 0 : i.status, o);
  const l = o?.choices?.[0]?.message?.content ?? o?.choices?.[0]?.text ?? o?.content;
  if (typeof l != "string") throw new Error("返回里没有正文");
  return l;
}
async function Uu(e) {
  const t = re();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
async function Gu(e, t, n) {
  const s = re().ConnectionManagerRequestService;
  if (!s) throw new Error("当前酒馆版本没有连接配置接口");
  const i = await s.sendRequest(
    e,
    [
      { role: "system", content: t.system },
      { role: "user", content: t.user }
    ],
    Do,
    { stream: !1, signal: n, extractData: !0, includePreset: !0, includeInstruct: !0 }
  ), r = typeof i == "string" ? i : i?.content;
  if (typeof r != "string") throw new Error("返回里没有正文");
  return r;
}
function Yu(e, t) {
  return Vo(e.timeoutMs, (n) => {
    if (e.source === "main") return Uu(t);
    if (e.source === "profile") return Gu(e.profileId ?? "", t, n);
    if (!e.preset) throw new Error("没有选择接口预设");
    return Uo(e.preset, t, n);
  });
}
async function Go(e) {
  const t = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: Lo(),
    body: JSON.stringify(Bo(e))
  }), n = await t.json().catch(() => null);
  if (!t.ok || n?.error) throw Wo(t.status, n);
  return (Array.isArray(n) ? n : Array.isArray(n?.data) ? n.data : Array.isArray(n?.models) ? n.models : []).map((i) => typeof i == "string" ? i : i?.id ?? i?.name).filter(Boolean).sort();
}
async function Hu(e, t) {
  const n = await Go(e).catch(() => []), s = { ...e, model: e.model || n[0] || "" }, i = await Vo(
    t,
    (r) => Uo(s, { system: "只回复 OK。", user: "ping" }, r, 5)
  );
  return { models: n, reply: i };
}
function qi() {
  try {
    const e = re().ConnectionManagerRequestService;
    return e?.getSupportedProfiles ? e.getSupportedProfiles().map((t) => ({ id: String(t.id), name: String(t.name ?? t.id) })) : null;
  } catch {
    return null;
  }
}
const it = "rlzc";
function Ku() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function Zu(e, t, n) {
  return {
    id: Ku(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function Ju(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function qu(e, t) {
  return e.packId === Rn ? e.briefing ? bo(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function Qu(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id) {
    const s = e[t.entryIndex];
    return s && !s.is_user && !s.is_system ? t.entryIndex : -1;
  }
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function Xu(e, t) {
  const n = Qu(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((i) => ({ ...i, atIndex: i.atIndex + s }))), t.manual = t.manual.filter((i) => i.atIndex < e.length && i.atIndex >= t.entryIndex), !0;
}
function Yo(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Qi = "rlzc_declined";
function ni(e, t) {
  return `${e}:${t}`;
}
function Ho(e) {
  return !!e && !e.is_user && !e.is_system;
}
function is(e, t, n) {
  if (!Ho(e[t])) return null;
  const s = vu(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function ef(e, t, n, s, i = []) {
  for (let r = Math.max(0, n); r <= Math.min(s, e.length - 1); r++) {
    const o = is(e, r, t);
    if (o && !i.includes(ni(r, o.info.name))) return o;
  }
  return null;
}
function tf(e, t, n = [], s = js, i = 0) {
  if (t?.status === "active") return null;
  let r = -1;
  for (let l = Math.max(0, i); l < e.length; l++) if (Ho(e[l])) {
    r = l;
    break;
  }
  if (r < 0 || t && t.entryIndex === r) return null;
  const o = is(e, r, s);
  return !o || n.includes(ni(r, o.info.name)) ? null : o;
}
const nf = /[■█▰●◆★▮▓]/g, sf = /[□░▱○◇☆▯▒]/g;
function rf(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const r = Number(n[2]);
    return r === 100 ? Number(n[1]) : r > 0 ? Math.round(Number(n[1]) / r * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(nf) ?? []).length, i = (t.match(sf) ?? []).length;
  return s + i > 0 ? Math.round(s / (s + i) * 100) : null;
}
function Xi(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function of(e, t) {
  return Xi(e).includes(Xi(t));
}
function lf(e, t, n) {
  const s = [], i = Object.keys(n.perMessage).map(Number).sort((A, a) => A - a);
  let r = !1, o = null, l = !1;
  for (const A of i) {
    const a = n.perMessage[A], f = t.phases.find((v) => v.id === a.phase)?.name ?? "进行中", p = (v, b) => s.push({ index: A, phase: f, round: a.round, kind: v, text: b }), x = e[A]?.extra?.rlzc;
    for (const v of x?.sub?.events ?? []) v.status === "missed" && p("eventMissed", `${v.id} 未写出来：${v.reason}`);
    for (const v of x?.skippedEvents ?? []) p("eventSkipped", `${v.id} 条件不成立，已跳过：${v.reason}`);
    const R = $o(String(e[A]?.mes ?? "")), y = A === n.entryIndex;
    if (!R) {
      y || p("missing", "本轮回复缺少 <副本> 面板"), l = !y;
      continue;
    }
    l = !1;
    const k = rf(R.progressBar);
    R.progressBar === void 0 ? p("progressUnreadable", "<副本> 中没有进度条一栏") : k === null ? p("progressUnreadable", `进度条无法读出数值：「${R.progressBar}」`) : (!r && k !== 0 && p("progressStart", `入场后第一轮的进度条应为0，实际为 ${k}`), (k < 0 || k > 100) && p("progressRange", `进度条数值 ${k} 超出 0–100`), o !== null && k < o && p("progressDrop", `进度条比上一轮低：${o} → ${k}`), o = k), r = !0;
    const S = e[A]?.extra?.rlzc?.limit, M = S?.text ? S : a.limit?.text ? { text: a.limit.text, minutes: a.limit.minutes, total: a.limit.total } : void 0;
    if (M) {
      const v = R.limit;
      if (M.minutes !== void 0) {
        const b = fo(v);
        !v || b.remaining === null || b.total === null ? p("limit", `时限读不到「剩余时间/总时长」：写的是「${v ?? "（没有时限一栏）"}」，注入的是「${M.text}」`) : (b.remaining > M.minutes && p("limit", `剩余时间比注入值多：写的是${Nt(b.remaining)}，注入的是${Nt(M.minutes)}`), M.total !== void 0 && b.total !== M.total && p("limit", `总时长与注入值不一致：写的是${Nt(b.total)}，注入的是${Nt(M.total)}`));
      } else (!v || !of(v, M.text)) && p("limit", `时限与注入文字不一致：写的是「${v ?? "（没有时限一栏）"}」，注入的是「${M.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: r };
}
const Ds = "rlzc", Ko = {
  source: "off",
  presets: [],
  presetId: "",
  profileId: "",
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
  subApi: structuredClone(Ko)
}, m = /* @__PURE__ */ Hn({
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
  lastInjection: es,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0
});
function si(e) {
  return JSON.parse(JSON.stringify(e));
}
function Zo(...e) {
  m.settings.debug && console.log("[rlzc]", ...e);
}
function Af() {
  const e = re().extensionSettings, t = e[Ds] ?? {}, n = {
    ...structuredClone($n),
    ...t,
    depths: { ...$n.depths, ...t.depths ?? {} },
    ball: { ...$n.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => go(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...cn, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(Ko),
      ...t.subApi ?? {},
      presets: Array.isArray(t.subApi?.presets) ? t.subApi.presets : []
    }
  };
  e[Ds] = n, m.settings = n, m.packs = ti(n.customPacks);
}
function $e() {
  re().extensionSettings[Ds] = /* @__PURE__ */ H(m.settings), re().saveSettingsDebounced(), m.packs = ti(m.settings.customPacks);
}
function af(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = go(t);
  if (n.length) return n;
  const s = t;
  return ti([]).some((i) => i.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (m.settings.customPacks = [...m.settings.customPacks.filter((i) => i.id !== s.id), s], $e(), []);
}
function cf(e) {
  m.settings.customPacks = m.settings.customPacks.filter((t) => t.id !== e), $e();
}
function ft() {
  return Ju(ns()[it]);
}
function rs() {
  const e = ns(), t = Array.isArray(e[it]?.declined) ? e[it].declined : [], n = Array.isArray(e[Qi]) ? e[Qi] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function uf(e) {
  const t = ns(), n = [...rs().filter((s) => s !== e), e];
  t[it] = { ...t[it] ?? {}, declined: n }, dn();
}
function zt(e) {
  const t = ns(), n = rs(), s = n.length ? { declined: n } : {};
  e ? t[it] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[it] = s : delete t[it], dn();
}
function ii(e) {
  const t = ft();
  t && (e(t), zt(t), qe());
}
function Jo(e) {
  const t = Ae();
  return (e === "swipe" || e === "continue") && jt(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function jn(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = qu(t, m.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = ku(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? lf(e, n, s) : null };
}
function qe() {
  const e = Ae();
  let t = ft();
  if (t) {
    const s = JSON.stringify(t);
    if (!Xu(e, t))
      zt(null), Se("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const i = jn(e, t);
      i.progress && (t.status = i.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && zt(t);
    }
  }
  const n = jn(e, t);
  m.session = n.session, m.pack = n.pack, m.progress = n.progress, m.audit = n.audit, m.subLine = tl(e, n.progress), m.tick++;
}
function qo() {
  if (m.session)
    return Yo(m.session, m.progress?.rolesFromChat);
}
function Dn() {
  for (const e of $u) Ht(e, "", 0, !1);
}
let tn = -1;
function ff(e) {
  const t = Jo(e), n = ft(), { pack: s, progress: i, audit: r } = jn(t, n), o = n ? Yo(n, i?.rolesFromChat) : void 0, l = oi() && !!i, A = l ? ss(t, i.entryIndex) : null, a = s ? Cu(s, i, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: i?.panel?.limit,
    audit: r ?? void 0,
    subNext: l ? Wu(t, i.entryIndex) : void 0,
    stateText: A ? jo(s, A.state) : void 0
  }) : es;
  Dn();
  const c = m.settings.depths;
  a.token && Ht(Eo, a.token, c.token, !0), a.progress && Ht(Co, a.progress, c.progress, !1), a.turn && Ht(Mo, a.turn, c.turn, !1), a.state && Ht(Io, a.state, c.progress, !1), m.lastInjection = a, tn = t.length, Zo("注入", e, a);
}
const Ls = /* @__PURE__ */ new Set();
async function df() {
  const e = Ae(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = mu(n.mes);
  if (!s) return;
  const i = ft();
  if (!i || i.status !== "active" || i.manual.some((a) => a.kind === "skip" && a.atIndex === t)) return;
  const r = `${ts()}:${t}:${n.mes}`;
  if (Ls.has(r)) return;
  Ls.add(r);
  const { pack: o, progress: l } = jn(e, i);
  if (!o || !l || l.ended) return;
  const A = gu(o, l.phase, l.round, s);
  A && await Be(`是否跳到${s}？（${A.label}）`) && (i.manual.push({ kind: "skip", atIndex: t, targetPhase: A.phase, targetRound: A.round }), zt(i));
}
async function pf(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Dn();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await df(), await zf(s), ff(s);
  } catch (i) {
    console.error("[rlzc] 拦截器出错", i), Dn();
  }
}
const er = /* @__PURE__ */ new Set();
function ri() {
  const e = ft();
  if (!e || e.status !== "ended") return 0;
  const t = m.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
async function Qo(e) {
  const { index: t, info: n } = e, s = `${ts()}:${t}:${n.name}`;
  if (er.has(s)) return;
  er.add(s);
  const i = e.pack ? `检测到进入《${e.pack.name}》，是否启用？` : `检测到进入《${n.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!await Be(i)) {
    uf(ni(t, n.name));
    return;
  }
  const r = is(Ae(), t, m.packs);
  if (!r || r.info.name !== n.name) {
    Se("warning", "入场消息已变化，未启用。");
    return;
  }
  const o = { ...n };
  e.pack || (o.rounds = ho(n.limit, xo(n), m.settings.genericCaps).rounds), el(e.pack ?? bo(o, m.settings.genericCaps), t, o);
}
function Xo() {
  const e = tf(Ae(), ft(), rs(), m.packs, ri());
  e && Qo(e);
}
function hf(e) {
  qe();
  const t = Ae(), n = ri();
  let s = -1;
  for (let i = n; i < t.length; i++) if (jt(t[i])) {
    s = i;
    break;
  }
  e === s && Xo();
}
function el(e, t, n) {
  const i = Ae()[t], r = Zu(e, t, n);
  i.extra = i.extra ?? {}, i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: r.id }, zt(r), qe(), m.progress && (i.extra.rlzc.injected = si(m.progress.perMessage[t]?.events ?? [])), dn(), Se("success", `已进入副本《${e.name}》。`);
}
async function mf(e) {
  const t = m.packs.find((r) => r.id === e);
  if (!t) return;
  const n = Ae();
  let s = n.length - 1;
  for (; s >= 0 && !jt(n[s]); ) s--;
  if (s < 0) {
    Se("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  ft()?.status === "active" && !await Be("当前已有进行中的副本，确定要替换吗？") || await Be(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && el(t, s, vo(n[s].mes) ?? { name: t.name });
}
function os(e) {
  ii((t) => t.manual.push(e));
}
function ls() {
  return Ae().length - 1;
}
async function tr() {
  const e = m.progress;
  if (!(!e || e.ended || !m.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Se("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Be(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (os({ kind: "skip", atIndex: ls(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Se("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function nr() {
  !m.session || m.progress?.ended || await Be("确定要手动结束当前副本吗？") && os({ kind: "end", atIndex: ls() });
}
function gf(e) {
  os({ kind: "setPhase", atIndex: ls(), phase: e });
}
function xf(e) {
  os({ kind: "setRound", atIndex: ls(), round: e });
}
function bf(e) {
  ii((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function yf(e) {
  ii((t) => t.manual.splice(e, 1));
}
async function sr() {
  m.session && await Be("确定要删除当前副本会话吗？（不会改动聊天记录）") && (zt(null), qe());
}
function oi() {
  return m.settings.subApi.source !== "off";
}
function vf() {
  const e = m.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "profile") return e.profileId ? { source: "profile", profileId: e.profileId, timeoutMs: t } : null;
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function _f(e) {
  return e.source === "main" ? "跟随主API" : e.source === "profile" ? `连接配置 ${e.profileId}` : `预设「${e.preset?.name}」`;
}
function tl(e, t) {
  if (!oi() || !t || t.ended) return "";
  if (m.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const i = ss(e, t.entryIndex);
  return i && t.perMessage[i.index] ? `副本记录：已更新（第${t.perMessage[i.index].round}轮）` : "副本记录：尚未整理";
}
let Sn = null;
const li = /* @__PURE__ */ new Set();
function wf(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function Ai(e) {
  return `${ts()}:${e}:${wf(String(Ae()[e]?.mes ?? ""))}`;
}
function ir(e) {
  m.subBusy = e, m.subLine = tl(Ae(), m.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && m.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：副API正在整理本轮状态", n.style.cssText = "align-self:center;margin-right:6px;opacity:.75;white-space:nowrap;", s.prepend(n));
  } else n?.remove();
}
function nl(e, t, n) {
  if (Ai(e) !== t) return;
  const s = Ae()[e];
  s?.extra?.rlzc && (s.extra.rlzc = si({ ...s.extra.rlzc, sub: n }), dn(), qe());
}
function kf(e, t) {
  const n = Ae(), s = m.progress, i = m.pack, r = n[e], o = s?.perMessage[e];
  if (!i || !s || !o || !r) return;
  const l = new Set(r.extra?.rlzc?.injected ?? []), A = qo(), a = (b) => ({ ...b, text: Fn(b.text, i, A), if: b.if ? Fn(b.if, i, A) : void 0 }), c = i.events.filter((b) => l.has(b.id)).map(a), f = (s.next?.events ?? []).filter((b) => b.if).map(a);
  if (!Bu({
    enabled: oi(),
    active: !s.ended && m.session?.status === "active",
    type: t,
    saveMode: m.settings.subApi.saveMode,
    hasEvents: c.length > 0,
    hasNextConditional: f.length > 0
  })) return;
  const x = Ai(e);
  if (li.has(x)) return;
  const R = i.phases.find((b) => b.id === o.phase), y = ss(n.slice(0, e), s.entryIndex), k = Du({
    pack: i,
    phaseName: R?.name ?? o.phase,
    round: o.round,
    prevState: y?.state ?? null,
    events: c,
    nextConditional: f,
    text: String(r.mes ?? "")
  }), S = re().substituteParams, M = S ? { system: S(k.system), user: S(k.user) } : k, v = $f(e, x, o.round, M);
  Sn = { key: x, index: e, promise: v }, v.finally(() => {
    Sn?.key === x && (Sn = null);
  });
}
async function $f(e, t, n, s) {
  ir(!0);
  try {
    let i = 2;
    for (; ; ) {
      const r = vf();
      if (!r) throw new Error("副API没有设置好：独立接口需要先选一个接口预设，连接配置需要先选一个配置");
      const o = Date.now();
      try {
        const l = await Vu((A) => Yu(r, A), s, i);
        nl(e, t, { ...l, ms: Date.now() - o, via: _f(r), at: (/* @__PURE__ */ new Date()).toISOString() }), li.add(t);
        return;
      } catch (l) {
        if (Ai(e) !== t) return;
        const A = Fo(l), a = String(l?.message ?? l).slice(0, 200);
        if (Zo("副API失败", A, l), !m.settings.subApi.wait) {
          Se("warning", `第${n}轮状态整理失败（${A}），已沿用上一轮状态。`), $s(e, t, A);
          return;
        }
        if (await Sf(n, A, a) === "skip") {
          $s(e, t, A);
          return;
        }
        i = 0;
      }
    }
  } catch (i) {
    Se("error", String(i?.message ?? i)), $s(e, t, "其他");
  } finally {
    ir(!1);
  }
}
function $s(e, t, n) {
  li.add(t), nl(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function Sf(e, t, n) {
  const s = re();
  if (!s.Popup || !s.POPUP_TYPE)
    return window.confirm(`第${e}轮状态整理失败（${t}）。重试吗？取消则这轮先跳过。`) ? "retry" : "skip";
  const i = m.settings.subApi, r = document.createElement("div"), o = document.createElement("h3");
  o.textContent = `第${e}轮状态整理失败`;
  const l = document.createElement("p");
  l.textContent = `原因：${t}`;
  const A = document.createElement("small");
  A.textContent = n, A.style.opacity = "0.7";
  const a = document.createElement("div");
  a.style.cssText = "display:none;margin-top:10px;";
  const c = document.createElement("label");
  c.textContent = "换成：";
  const f = document.createElement("select");
  f.className = "text_pole";
  const p = [{ value: "", text: "请选择…" }];
  for (const y of i.presets) i.source === "preset" && y.id === i.presetId || p.push({ value: `preset:${y.id}`, text: `接口预设：${y.name}` });
  i.source !== "main" && p.push({ value: "main", text: "跟随主API" });
  for (const y of p) {
    const k = document.createElement("option");
    k.value = y.value, k.textContent = y.text, f.append(k);
  }
  c.append(f), a.append(c), r.append(o, l, A, a);
  let x;
  f.addEventListener("change", () => {
    const y = f.value;
    y && (y === "main" ? i.source = "main" : (i.source = "preset", i.presetId = y.slice(7)), $e(), x.complete(s.POPUP_RESULT.CUSTOM1));
  }), x = new s.Popup(r, s.POPUP_TYPE.TEXT, "", {
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
  const R = await x.show();
  return R === s.POPUP_RESULT.AFFIRMATIVE || R === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function zf(e) {
  const t = Sn;
  if (!(!t || !m.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= Jo(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function Ef(e, t) {
  const n = Ae(), s = n[e];
  if (!jt(s)) return;
  const i = ft();
  if (!i || i.status === "ended") {
    if (is(n, e, m.packs)) {
      const A = ef(n, m.packs, ri(), e, rs());
      A && Qo(A);
    }
    return;
  }
  if (!i) return;
  const r = ko(s.mes);
  r && (i.roles = { ...i.roles ?? {}, ...r }), zt(i), qe();
  const o = m.progress?.perMessage[e];
  if (o && m.pack) {
    const A = m.pack.phases.find((x) => x.id === o.phase), a = {
      phase: A?.name ?? o.phase,
      round: o.round,
      injected: tn === e ? m.lastInjection.injected : o.events
    }, c = m.pack.time;
    c.type === "clock" && A?.clock && !A.night && !A.frozen && (a.clock = So(c.dayStart, c.minutesPerRound, o.round));
    const f = tn === e ? m.lastInjection.limit : o.limit?.text ? { text: o.limit.text, minutes: o.limit.minutes, total: o.limit.total } : void 0;
    f && (a.limit = f);
    const p = s.extra?.rlzc?.entry;
    p && (a.entry = p), tn === e && m.lastInjection.skipped?.length && (a.skippedEvents = m.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (a.sub = s.extra.rlzc.sub), s.extra = s.extra ?? {}, s.extra.rlzc = si(a), dn(), qe(), kf(e, t);
  }
  const l = wo(s.mes);
  l && Se("info", `副本结算：${l.result ?? "—"}${l.rating ? `，评价 ${l.rating}` : ""}`);
}
function rr() {
  Ls.clear(), tn = -1, m.chatId = ts(), m.debugUnlocked = !1, m.lastInjection = es, Dn(), qe(), Xo(), setTimeout(() => ai(), 50);
}
function Ss() {
  qe();
}
function sl() {
  return m.settings.panelDisplay === "statusbar" ? St.filter((e) => e !== "副本") : St;
}
function zs(e) {
  To(e, sl());
}
function ai(e = !1) {
  Nu(sl(), e);
}
function Cf(e) {
  m.settings.panelDisplay !== e && (m.settings.panelDisplay = e, $e(), ai(!0));
}
const Mf = { class: "rlzc-ball-mark" }, Es = 44, If = /* @__PURE__ */ ut({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ be({ x: 0, y: 0 });
    let n = null;
    function s(c, f) {
      const p = window.innerWidth - Es - 4, x = window.innerHeight - Es - 4;
      return { x: Math.min(Math.max(4, c), p), y: Math.min(Math.max(4, f), x) };
    }
    function i() {
      const c = m.settings.ball;
      t.value = s(c.x ?? window.innerWidth - Es - 12, c.y ?? Math.round(window.innerHeight * 0.35));
    }
    function r(c) {
      c.currentTarget.setPointerCapture(c.pointerId), n = { id: c.pointerId, dx: c.clientX - t.value.x, dy: c.clientY - t.value.y, moved: !1, sx: c.clientX, sy: c.clientY };
    }
    function o(c) {
      !n || n.id !== c.pointerId || (Math.abs(c.clientX - n.sx) + Math.abs(c.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(c.clientX - n.dx, c.clientY - n.dy)));
    }
    function l(c) {
      if (!n || n.id !== c.pointerId) return;
      const f = n.moved;
      n = null, f ? (m.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, $e()) : m.panelOpen = !m.panelOpen;
    }
    const A = ne(() => !!m.session && !m.progress?.ended), a = ne(() => !!m.progress?.warn);
    return Zn(() => m.settings.ball, i, { deep: !0 }), AA(() => {
      i(), window.addEventListener("resize", i);
    }), aA(() => window.removeEventListener("resize", i)), (c, f) => (E(), I("button", {
      class: ct(["rlzc-ball", { "is-active": A.value, "is-warn": a.value }]),
      style: Gn({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: r,
      onPointermove: o,
      onPointerup: l,
      onPointercancel: l
    }, [
      h("span", Mf, O(A.value ? j(m).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
});
function Pf(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Gt(e) {
  return Pf(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Tf(e) {
  const t = [];
  let n = null, s = [];
  const i = () => {
    s.length && t.push(`<p>${s.map(Gt).join("<br>")}</p>`), s = [];
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
      const p = Math.min(A[1].length + 2, 6);
      t.push(`<h${p}>${Gt(A[2])}</h${p}>`);
      continue;
    }
    const a = /^\s*[-*]\s+(.*)$/.exec(l), c = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (a || c) {
      i();
      const p = a ? "ul" : "ol", x = a ? a[1] : c[2];
      n !== p ? (r(), n = p, t.push(p === "ol" ? `<ol start="${c[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Gt(x));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${Gt(l.trim())}`);
      continue;
    }
    const f = /^>\s?(.*)$/.exec(l);
    if (f) {
      i(), r(), t.push(`<blockquote>${Gt(f[1])}</blockquote>`);
      continue;
    }
    r(), s.push(l);
  }
  return i(), r(), t.join("");
}
const Nf = {
  key: 0,
  class: "rlzc-docs"
}, Rf = { class: "rlzc-subtabs" }, Ff = ["onClick"], Of = { class: "rlzc-md" }, jf = ["innerHTML"], Df = ["src", "alt"], Lf = {
  key: 2,
  class: "rlzc-note"
}, or = /* @__PURE__ */ ut({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ be(0);
    Zn(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = ne(() => t.pack.docs?.[n.value]), i = ne(() => s.value?.md ? Tf(s.value.md) : ""), r = ne(() => s.value?.image ? au(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (E(), I("section", Nf, [
      h("div", Rf, [
        (E(!0), I(Y, null, fe(e.pack.docs, (A, a) => (E(), I("button", {
          key: a,
          class: ct({ on: n.value === a }),
          onClick: (c) => n.value = a
        }, O(A.title), 11, Ff))), 128))
      ]),
      h("article", Of, [
        i.value ? (E(), I("div", {
          key: 0,
          innerHTML: i.value
        }, null, 8, jf)) : U("", !0),
        r.value ? (E(), I("img", {
          key: 1,
          src: r.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, Df)) : s.value?.image && !r.value ? (E(), I("p", Lf, "图片无法加载：" + O(s.value.image), 1)) : U("", !0)
      ])
    ])) : U("", !0);
  }
}), Bf = { class: "rlzc-system" }, Vf = { class: "rlzc-card rlzc-hero" }, Wf = { class: "rlzc-hero-top" }, Uf = { class: "rlzc-level" }, Gf = {
  key: 0,
  class: "rlzc-chip"
}, Yf = {
  key: 0,
  class: "rlzc-goal"
}, Hf = { class: "rlzc-grid" }, Kf = {
  key: 0,
  class: "rlzc-stat"
}, Zf = {
  key: 1,
  class: "rlzc-stat"
}, Jf = {
  key: 2,
  class: "rlzc-stat"
}, qf = {
  key: 3,
  class: "rlzc-stat"
}, Qf = {
  key: 0,
  class: "rlzc-subline"
}, Xf = {
  key: 1,
  class: "rlzc-note"
}, ed = {
  key: 2,
  class: "rlzc-card"
}, td = { class: "rlzc-kv" }, nd = { class: "rlzc-kv" }, sd = {
  key: 3,
  class: "rlzc-note"
}, id = {
  key: 4,
  class: "rlzc-card"
}, rd = {
  key: 0,
  class: "rlzc-kv"
}, od = { class: "rlzc-mono" }, ld = {
  key: 1,
  class: "rlzc-tasks"
}, Ad = {
  key: 2,
  class: "rlzc-ps"
}, ad = { class: "rlzc-actions" }, cd = ["disabled"], ud = ["disabled"], fd = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, dd = {
  key: 2,
  class: "rlzc-card"
}, pd = { class: "rlzc-row" }, hd = ["value"], md = ["disabled"], gd = /* @__PURE__ */ ut({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ be(""), n = ne(() => !!m.session && !!m.pack), s = ne(() => m.progress), i = ne(() => n.value && !!s.value && !s.value.ended), r = ne(() => m.packs.find((p) => p.id === t.value) ?? null), o = ne(() => !!m.pack?.phases.length), l = ne(() => m.settings.panelDisplay !== "statusbar"), A = ne(() => {
      const p = s.value;
      return p ? o.value ? `${p.warn ? "⚠️ " : ""}${p.round}/${p.phase.cap}` : `第${p.round}轮` : "";
    }), a = ne(() => {
      const p = s.value;
      return p ? p.limit?.text ? p.limit.text : p.panel?.limit || m.session?.briefing?.limit || "—" : "";
    }), c = ne(() => {
      const p = s.value;
      return !!p && !p.ended && o.value && p.phase.cap > 0 && p.nextRound < p.phase.cap;
    });
    async function f() {
      t.value && (await mf(t.value), t.value = "");
    }
    return (p, x) => (E(), I("div", Bf, [
      n.value && s.value ? (E(), I(Y, { key: 0 }, [
        h("div", Vf, [
          h("div", Wf, [
            h("span", Uf, O(j(m).pack.level), 1),
            h("h3", null, O(j(m).pack.name), 1),
            s.value.ended ? (E(), I("span", Gf, "已结束")) : U("", !0)
          ]),
          j(m).session?.briefing?.goal ? (E(), I("p", Yf, "目标：" + O(j(m).session.briefing.goal), 1)) : U("", !0)
        ]),
        h("div", Hf, [
          o.value ? (E(), I("div", Kf, [
            x[3] || (x[3] = h("span", null, "阶段", -1)),
            h("b", null, O(s.value.phase.name), 1)
          ])) : U("", !0),
          h("div", {
            class: ct(["rlzc-stat", { warn: s.value.warn }])
          }, [
            x[4] || (x[4] = h("span", null, "轮次", -1)),
            h("b", null, O(A.value), 1)
          ], 2),
          s.value.currentClock ? (E(), I("div", Zf, [
            x[5] || (x[5] = h("span", null, "钟时", -1)),
            h("b", null, O(s.value.currentClock), 1)
          ])) : U("", !0),
          s.value.roundsLeft ? (E(), I("div", Jf, [
            x[6] || (x[6] = h("span", null, "最多剩余轮次", -1)),
            h("b", null, O(s.value.roundsLeft.x) + "/" + O(s.value.roundsLeft.y), 1)
          ])) : U("", !0),
          l.value ? (E(), I("div", qf, [
            x[7] || (x[7] = h("span", null, "剩余时间", -1)),
            h("b", null, O(a.value), 1)
          ])) : U("", !0)
        ]),
        j(m).subLine ? (E(), I("p", Qf, O(j(m).subLine), 1)) : U("", !0),
        s.value.skipGoal ? (E(), I("div", Xf, "快进中：目标 " + O(j(m).pack.phases.find((R) => R.id === s.value.skipGoal.phase)?.name) + " 第" + O(s.value.skipGoal.round) + "轮", 1)) : U("", !0),
        s.value.ended && s.value.settlement ? (E(), I("div", ed, [
          h("div", td, [
            x[8] || (x[8] = h("span", null, "结果", -1)),
            h("b", null, O(s.value.settlement.result ?? "—"), 1)
          ]),
          h("div", nd, [
            x[9] || (x[9] = h("span", null, "评价", -1)),
            h("b", null, O(s.value.settlement.rating ?? "—"), 1)
          ])
        ])) : s.value.ended ? (E(), I("div", sd, "副本已手动结束。")) : U("", !0),
        l.value && s.value.panel ? (E(), I("div", id, [
          s.value.panel.progressBar ? (E(), I("div", rd, [
            x[10] || (x[10] = h("span", null, "进度", -1)),
            h("b", od, O(s.value.panel.progressBar), 1)
          ])) : U("", !0),
          s.value.panel.tasks.length ? (E(), I("div", ld, [
            x[11] || (x[11] = h("span", null, "任务", -1)),
            h("ul", null, [
              (E(!0), I(Y, null, fe(s.value.panel.tasks, (R, y) => (E(), I("li", { key: y }, O(R), 1))), 128))
            ])
          ])) : U("", !0),
          s.value.panel.ps ? (E(), I("div", Ad, "ps：" + O(s.value.panel.ps), 1)) : U("", !0)
        ])) : U("", !0),
        h("div", ad, [
          h("button", {
            class: "rlzc-btn",
            disabled: !c.value,
            onClick: x[0] || (x[0] = //@ts-ignore
            (...R) => j(tr) && j(tr)(...R))
          }, "跳过（到本阶段结束）", 8, cd),
          h("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: x[1] || (x[1] = //@ts-ignore
            (...R) => j(nr) && j(nr)(...R))
          }, "手动结束副本", 8, ud)
        ]),
        i.value && j(m).pack.docs?.length ? (E(), st(or, {
          key: 5,
          pack: j(m).pack
        }, null, 8, ["pack"])) : U("", !0)
      ], 64)) : (E(), I("div", fd, [...x[12] || (x[12] = [
        h("h3", null, "休整中", -1),
        h("p", null, "当前在回廊里，没有进行中的副本，也不会注入任何提示词。", -1)
      ])])),
      i.value ? U("", !0) : (E(), I("div", dd, [
        x[14] || (x[14] = h("label", { class: "rlzc-label" }, "手动选择副本（以最新一条AI回复为第1轮）", -1)),
        h("div", pd, [
          _n(h("select", {
            "onUpdate:modelValue": x[2] || (x[2] = (R) => t.value = R),
            class: "rlzc-input"
          }, [
            x[13] || (x[13] = h("option", { value: "" }, "选择副本…", -1)),
            (E(!0), I(Y, null, fe(j(m).packs, (R) => (E(), I("option", {
              key: R.id,
              value: R.id
            }, O(R.level) + "｜" + O(R.name), 9, hd))), 128))
          ], 512), [
            [uo, t.value]
          ]),
          h("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: f
          }, "进入", 8, md)
        ])
      ])),
      !i.value && r.value?.docs?.length ? (E(), st(or, {
        key: 3,
        pack: r.value
      }, null, 8, ["pack"])) : U("", !0)
    ]));
  }
}), xd = { class: "rlzc-card" }, bd = { class: "rlzc-field" }, yd = ["value"], vd = ["disabled"], _d = { class: "rlzc-row" }, wd = ["value"], kd = {
  key: 0,
  value: ""
}, $d = ["value"], Sd = ["disabled"], zd = ["disabled"], Ed = { class: "rlzc-field" }, Cd = ["value"], Md = { class: "rlzc-field" }, Id = { class: "rlzc-row rlzc-grow" }, Pd = ["type", "value"], Td = { class: "rlzc-field" }, Nd = ["value"], Rd = ["value"], Fd = ["value"], Od = ["value"], jd = { class: "rlzc-row" }, Dd = ["disabled"], Ld = { class: "rlzc-hint" }, Bd = { class: "rlzc-field" }, Vd = ["value"], Wd = ["value"], Ud = {
  key: 0,
  class: "rlzc-hint"
}, Gd = { class: "rlzc-check" }, Yd = ["checked"], Hd = { class: "rlzc-check" }, Kd = ["checked"], Zd = { class: "rlzc-field" }, Jd = ["value"], qd = {
  key: 3,
  class: "rlzc-hint"
}, Qd = /* @__PURE__ */ ut({
  __name: "SubApiCard",
  setup(e) {
    const t = ne(() => m.settings.subApi), n = ne(() => t.value.presets.find((b) => b.id === t.value.presetId) ?? null), s = /* @__PURE__ */ be(qi()), i = /* @__PURE__ */ be([]), r = /* @__PURE__ */ be(!1), o = /* @__PURE__ */ be(!1), l = /* @__PURE__ */ be("");
    function A() {
      $e();
    }
    function a(b) {
      t.value.source = b.target.value, t.value.source === "profile" && (s.value = qi()), l.value = "", A();
    }
    function c() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function f() {
      const b = (await Ji("新接口预设的名字：", `接口${t.value.presets.length + 1}`))?.trim();
      if (!b) return;
      const P = { id: c(), name: b, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, P], t.value.presetId = P.id, i.value = [], A();
    }
    async function p() {
      if (!n.value) return;
      const b = (await Ji("改名为：", n.value.name))?.trim();
      b && (n.value.name = b, A());
    }
    async function x() {
      n.value && await Be(`确定删除接口预设「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((b) => b.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", i.value = [], A());
    }
    function R(b) {
      t.value.presetId = b.target.value, i.value = [], l.value = "", A();
    }
    function y(b, P) {
      n.value && (n.value[b] = P.target.value.trim(), A());
    }
    async function k() {
      if (n.value) {
        o.value = !0, l.value = "测试中…";
        try {
          const b = await Hu(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          i.value = b.models, !n.value.model && b.models.length && (n.value.model = b.models[0], A()), l.value = `连接成功${b.models.length ? `，找到 ${b.models.length} 个模型` : ""}。`;
        } catch (b) {
          l.value = `连接失败：${Fo(b)}（${String(b?.message ?? b).slice(0, 120)}）`, i.value = await Go(n.value).catch(() => []);
        } finally {
          o.value = !1;
        }
      }
    }
    function S(b) {
      const P = Math.floor(Number(b.target.value));
      if (!Number.isFinite(P) || P < 5) {
        Se("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = P, A();
    }
    function M(b, P) {
      t.value[b] = P.target.checked, A();
    }
    function v(b) {
      t.value.profileId = b.target.value, A();
    }
    return (b, P) => (E(), I("div", xd, [
      P[19] || (P[19] = h("h4", null, "副API", -1)),
      P[20] || (P[20] = h("p", { class: "rlzc-hint rlzc-intro" }, " 副API是另请一个AI当记录员。副本里每轮，它会读一遍刚写好的正文，记下谁在哪、发生了什么，并检查该发生的事件有没有真的写出来。它不写剧情，只整理，主AI下一轮拿到的就是最新情况。不开也能玩，只是这些检查全靠主AI自觉。开启后每轮会多调用一次接口，会产生额外费用。 ", -1)),
      h("label", bd, [
        P[10] || (P[10] = h("span", null, "来源", -1)),
        h("select", {
          class: "rlzc-input",
          value: t.value.source,
          onChange: a
        }, [
          P[7] || (P[7] = h("option", { value: "off" }, "关闭", -1)),
          P[8] || (P[8] = h("option", { value: "main" }, "跟随主API", -1)),
          P[9] || (P[9] = h("option", { value: "preset" }, "独立接口", -1)),
          h("option", {
            value: "profile",
            disabled: s.value === null
          }, "使用酒馆连接配置" + O(s.value === null ? "（连接配置扩展不可用）" : ""), 9, vd)
        ], 40, yd)
      ]),
      t.value.source === "preset" ? (E(), I(Y, { key: 0 }, [
        h("div", _d, [
          h("select", {
            class: "rlzc-input",
            value: t.value.presetId,
            onChange: R
          }, [
            t.value.presets.length ? U("", !0) : (E(), I("option", kd, "还没有接口预设")),
            (E(!0), I(Y, null, fe(t.value.presets, (B) => (E(), I("option", {
              key: B.id,
              value: B.id
            }, O(B.name), 9, $d))), 128))
          ], 40, wd),
          h("button", {
            class: "rlzc-btn small",
            onClick: f
          }, "新建"),
          h("button", {
            class: "rlzc-btn ghost small",
            disabled: !n.value,
            onClick: p
          }, "改名", 8, Sd),
          h("button", {
            class: "rlzc-btn ghost small",
            disabled: !n.value,
            onClick: x
          }, "删除", 8, zd)
        ]),
        n.value ? (E(), I(Y, { key: 0 }, [
          h("label", Ed, [
            P[11] || (P[11] = h("span", null, "地址", -1)),
            h("input", {
              class: "rlzc-input",
              value: n.value.url,
              placeholder: "https://…/v1",
              onChange: P[0] || (P[0] = (B) => y("url", B))
            }, null, 40, Cd)
          ]),
          h("label", Md, [
            P[12] || (P[12] = h("span", null, "密钥", -1)),
            h("span", Id, [
              h("input", {
                class: "rlzc-input",
                type: r.value ? "text" : "password",
                value: n.value.key,
                autocomplete: "off",
                onChange: P[1] || (P[1] = (B) => y("key", B))
              }, null, 40, Pd),
              h("button", {
                class: "rlzc-btn ghost small",
                onClick: P[2] || (P[2] = (B) => r.value = !r.value)
              }, O(r.value ? "隐藏" : "显示"), 1)
            ])
          ]),
          h("label", Td, [
            P[13] || (P[13] = h("span", null, "模型", -1)),
            i.value.length ? (E(), I("select", {
              key: 0,
              class: "rlzc-input",
              value: n.value.model,
              onChange: P[3] || (P[3] = (B) => y("model", B))
            }, [
              i.value.includes(n.value.model) ? U("", !0) : (E(), I("option", {
                key: 0,
                value: n.value.model
              }, O(n.value.model || "请选择…"), 9, Rd)),
              (E(!0), I(Y, null, fe(i.value, (B) => (E(), I("option", {
                key: B,
                value: B
              }, O(B), 9, Fd))), 128))
            ], 40, Nd)) : (E(), I("input", {
              key: 1,
              class: "rlzc-input",
              value: n.value.model,
              placeholder: "点「测试连接」拉取模型列表",
              onChange: P[4] || (P[4] = (B) => y("model", B))
            }, null, 40, Od))
          ]),
          h("div", jd, [
            h("button", {
              class: "rlzc-btn small",
              disabled: o.value || !n.value.url,
              onClick: k
            }, "测试连接", 8, Dd),
            h("small", Ld, O(l.value), 1)
          ])
        ], 64)) : U("", !0)
      ], 64)) : U("", !0),
      t.value.source === "profile" && s.value ? (E(), I(Y, { key: 1 }, [
        h("label", Bd, [
          P[15] || (P[15] = h("span", null, "连接配置", -1)),
          h("select", {
            class: "rlzc-input",
            value: t.value.profileId,
            onChange: v
          }, [
            P[14] || (P[14] = h("option", { value: "" }, "请选择…", -1)),
            (E(!0), I(Y, null, fe(s.value, (B) => (E(), I("option", {
              key: B.id,
              value: B.id
            }, O(B.name), 9, Wd))), 128))
          ], 40, Vd)
        ]),
        s.value.length ? U("", !0) : (E(), I("p", Ud, "还没有连接配置。可以在酒馆顶部「API 连接」里保存一个。"))
      ], 64)) : U("", !0),
      t.value.source !== "off" ? (E(), I(Y, { key: 2 }, [
        h("label", Gd, [
          h("input", {
            type: "checkbox",
            checked: t.value.saveMode,
            onChange: P[5] || (P[5] = (B) => M("saveMode", B))
          }, null, 40, Yd),
          P[16] || (P[16] = kt("省钱模式：只在本轮有后台事件、或下一轮有带条件的事件时调用，其余轮沿用上一轮状态", -1))
        ]),
        h("label", Hd, [
          h("input", {
            type: "checkbox",
            checked: t.value.wait,
            onChange: P[6] || (P[6] = (B) => M("wait", B))
          }, null, 40, Kd),
          P[17] || (P[17] = kt("等待整理：生成下一轮前等本轮整理完成（关闭后主AI可能拿到晚一轮的状态）", -1))
        ]),
        h("label", Zd, [
          P[18] || (P[18] = h("span", null, "超时（秒）", -1)),
          h("input", {
            type: "number",
            min: "5",
            class: "rlzc-input",
            value: t.value.timeoutSec,
            onChange: S
          }, null, 40, Jd)
        ])
      ], 64)) : U("", !0),
      t.value.source === "preset" ? (E(), I("p", qd, "密钥保存在本机的酒馆设置里。分享设置文件或截图时，请注意不要带出密钥。")) : U("", !0)
    ]));
  }
}), Xd = { class: "rlzc-settings" }, ep = { class: "rlzc-card" }, tp = ["value"], np = { class: "rlzc-hint" }, sp = { class: "rlzc-card" }, ip = { class: "rlzc-field" }, rp = ["value"], op = { class: "rlzc-field" }, lp = ["value"], Ap = { class: "rlzc-field" }, ap = ["value"], cp = { class: "rlzc-card" }, up = ["value", "onChange"], fp = { class: "rlzc-card" }, dp = {
  key: 0,
  class: "rlzc-list"
}, pp = ["onClick"], hp = {
  key: 1,
  class: "rlzc-hint"
}, mp = {
  key: 2,
  class: "rlzc-errors"
}, gp = { class: "rlzc-card" }, xp = { class: "rlzc-check" }, bp = ["checked"], yp = { class: "rlzc-check" }, vp = ["checked"], _p = /* @__PURE__ */ ut({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ be([]), n = /* @__PURE__ */ be(null);
    function s(c, f) {
      const p = Math.max(0, Math.min(1e4, Math.floor(Number(f.target.value) || 0)));
      m.settings.depths[c] = p, $e();
    }
    async function i(c) {
      const f = c.target, p = f.files?.[0];
      f.value = "", p && (t.value = af(await p.text()), t.value.length || Se("success", `已导入副本包：${p.name}`));
    }
    async function r(c, f) {
      await Be(`确定删除自定义副本包《${f}》吗？`) && cf(c);
    }
    const o = ["D", "C", "B", "A", "S"];
    function l(c, f) {
      const p = Math.floor(Number(f.target.value));
      !Number.isFinite(p) || p < 1 || (m.settings.genericCaps = { ...m.settings.genericCaps, [c]: p }, $e());
    }
    function A(c) {
      Cf(c.target.value);
    }
    function a(c, f) {
      m.settings[c] = f.target.checked, $e();
    }
    return (c, f) => (E(), I("div", Xd, [
      h("div", ep, [
        f[7] || (f[7] = h("h4", null, "副本信息显示位置", -1)),
        h("select", {
          class: "rlzc-input",
          value: j(m).settings.panelDisplay,
          onChange: A
        }, [...f[6] || (f[6] = [
          h("option", { value: "panel" }, "扩展面板（默认）", -1),
          h("option", { value: "statusbar" }, "正文状态栏", -1)
        ])], 40, tp),
        h("p", np, O(j(m).settings.panelDisplay === "statusbar" ? "正文中保留 <副本> 标签，由你的状态栏显示；系统页不再显示时限、进度条、任务和 ps。" : "正文中隐藏 <副本> 标签，时限、进度条、任务和 ps 显示在系统页。") + " 两种方式下扩展都会读取 <副本> 做核对。 ", 1)
      ]),
      h("div", sp, [
        f[11] || (f[11] = h("h4", null, "注入深度", -1)),
        h("label", ip, [
          f[8] || (f[8] = h("span", null, "暗号 rlzc_token", -1)),
          h("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: j(m).settings.depths.token,
            onChange: f[0] || (f[0] = (p) => s("token", p))
          }, null, 40, rp)
        ]),
        h("label", op, [
          f[9] || (f[9] = h("span", null, "进度 rlzc_progress", -1)),
          h("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: j(m).settings.depths.progress,
            onChange: f[1] || (f[1] = (p) => s("progress", p))
          }, null, 40, lp)
        ]),
        h("label", Ap, [
          f[10] || (f[10] = h("span", null, "本轮 rlzc_turn", -1)),
          h("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: j(m).settings.depths.turn,
            onChange: f[2] || (f[2] = (p) => s("turn", p))
          }, null, 40, ap)
        ])
      ]),
      Oe(Qd),
      h("div", cp, [
        f[12] || (f[12] = h("h4", null, "通用副本默认轮数上限", -1)),
        f[13] || (f[13] = h("p", { class: "rlzc-hint" }, "未收录的副本按等级取轮数上限；简报时限一行写了「（最多N轮）」时以简报为准。只影响之后进入的副本。", -1)),
        (E(), I(Y, null, fe(o, (p) => h("label", {
          key: p,
          class: "rlzc-field"
        }, [
          h("span", null, O(p) + " 级", 1),
          h("input", {
            type: "number",
            min: "1",
            class: "rlzc-input",
            value: j(m).settings.genericCaps[p],
            onChange: (x) => l(p, x)
          }, null, 40, up)
        ])), 64))
      ]),
      h("div", fp, [
        f[14] || (f[14] = h("h4", null, "自定义副本包", -1)),
        j(m).settings.customPacks.length ? (E(), I("ul", dp, [
          (E(!0), I(Y, null, fe(j(m).settings.customPacks, (p) => (E(), I("li", {
            key: p.id
          }, [
            h("span", null, [
              kt(O(p.level) + "｜" + O(p.name) + " ", 1),
              h("small", null, "v" + O(p.version), 1)
            ]),
            h("button", {
              class: "rlzc-btn ghost small",
              onClick: (x) => r(p.id, p.name)
            }, "删除", 8, pp)
          ]))), 128))
        ])) : (E(), I("p", hp, "还没有导入自定义副本包。")),
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
        t.value.length ? (E(), I("ul", mp, [
          (E(!0), I(Y, null, fe(t.value, (p, x) => (E(), I("li", { key: x }, O(p), 1))), 128))
        ])) : U("", !0)
      ]),
      h("div", gp, [
        f[17] || (f[17] = h("h4", null, "其他", -1)),
        h("label", xp, [
          h("input", {
            type: "checkbox",
            checked: j(m).settings.showBall,
            onChange: f[4] || (f[4] = (p) => a("showBall", p))
          }, null, 40, bp),
          f[15] || (f[15] = kt("显示悬浮球（关闭后可从扩展菜单打开面板）", -1))
        ]),
        h("label", yp, [
          h("input", {
            type: "checkbox",
            checked: j(m).settings.debug,
            onChange: f[5] || (f[5] = (p) => a("debug", p))
          }, null, 40, vp),
          f[16] || (f[16] = kt("调试模式（调试页允许手动修改，并在控制台输出日志）", -1))
        ])
      ])
    ]));
  }
}), wp = { class: "rlzc-debug" }, kp = {
  key: 0,
  class: "rlzc-note"
}, $p = {
  key: 0,
  class: "rlzc-note"
}, Sp = {
  key: 1,
  class: "rlzc-note"
}, zp = {
  key: 2,
  class: "rlzc-card"
}, Ep = { class: "rlzc-row" }, Cp = ["disabled"], Mp = ["value"], Ip = ["disabled"], Pp = { class: "rlzc-row" }, Tp = ["disabled"], Np = ["disabled"], Rp = {
  key: 3,
  class: "rlzc-card"
}, Fp = ["onUpdate:modelValue", "disabled"], Op = ["disabled"], jp = { class: "rlzc-card" }, Dp = {
  key: 0,
  class: "rlzc-hint"
}, Lp = { class: "rlzc-hint" }, Bp = { class: "rlzc-list rlzc-warns" }, Vp = { class: "rlzc-card" }, Wp = {
  key: 0,
  class: "rlzc-list"
}, Up = ["disabled", "onClick"], Gp = {
  key: 1,
  class: "rlzc-hint"
}, Yp = {
  key: 4,
  class: "rlzc-card"
}, Hp = { class: "rlzc-pre" }, Kp = {
  key: 0,
  class: "rlzc-pre"
}, Zp = {
  class: "rlzc-card",
  open: ""
}, Jp = { class: "rlzc-pre" }, qp = { class: "rlzc-card" }, Qp = { class: "rlzc-pre" }, Xp = { class: "rlzc-card" }, eh = { class: "rlzc-pre" }, th = { class: "rlzc-card" }, nh = { class: "rlzc-table" }, sh = ["disabled"], ih = /* @__PURE__ */ ut({
  __name: "DebugTab",
  setup(e) {
    const t = ne(() => m.settings.debug), n = /* @__PURE__ */ be(""), s = /* @__PURE__ */ be(null), i = /* @__PURE__ */ Hn({});
    Zn(
      () => [m.tick, m.pack?.id],
      () => {
        for (const k of Object.keys(i)) delete i[k];
        const y = qo() ?? {};
        for (const k of m.pack?.roles ?? []) i[k] = y[k] ?? "";
      },
      { immediate: !0 }
    );
    const r = ne(() => {
      m.tick;
      const y = Ae(), k = [], S = m.session?.entryIndex ?? 0;
      for (let M = S; M < y.length; M++) {
        const v = y[M]?.extra?.rlzc;
        v && k.push({ index: M, snap: v });
      }
      return k.reverse().slice(0, 60);
    }), o = ne(
      () => new Set((m.audit?.warnings ?? []).filter((y) => y.kind === "limit" || y.kind === "eventMissed").map((y) => y.index))
    ), l = ne(() => {
      if (m.tick, !m.session || !m.pack || !m.progress) return null;
      const y = Ae(), k = ss(y, m.progress.entryIndex);
      let S = null;
      for (let M = y.length - 1; M >= m.progress.entryIndex; M--) {
        const v = y[M]?.extra?.rlzc?.sub;
        if (v) {
          S = v;
          break;
        }
      }
      return {
        text: k ? jo(m.pack, k.state) : "",
        state: k?.state ?? null,
        record: S
      };
    }), A = { done: "✓", missed: "✗", void: "–" };
    function a(y) {
      if (!y.sub && !y.skippedEvents?.length) return "";
      const k = [];
      y.sub?.skipped && k.push(`未更新（${y.sub.error ?? ""}）`);
      for (const S of y.sub?.events ?? []) k.push(`${S.id}${A[S.status]}`);
      for (const S of y.skippedEvents ?? []) k.push(`跳过${S.id}`);
      return y.sub && !y.sub.skipped && !k.length && k.push("已整理"), k.join(" ");
    }
    const c = ne(() => {
      const y = m.progress;
      if (!y) return null;
      const { perMessage: k, phase: S, next: M, ...v } = y;
      return {
        phase: S.id + " " + S.name,
        ...v,
        next: M ? { round: M.round, skipFrom: M.skipFrom, events: M.events.map((b) => b.id) } : null,
        messages: Object.keys(k).length
      };
    });
    function f() {
      n.value && gf(n.value);
    }
    function p() {
      s.value !== null && s.value >= 0 && xf(s.value);
    }
    function x() {
      bf({ ...i });
    }
    const R = (y) => JSON.stringify(y, null, 2);
    return (y, k) => (E(), I("div", wp, [
      j(m).session ? (E(), I(Y, { key: 1 }, [
        t.value ? U("", !0) : (E(), I("p", $p, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        j(m).pack && j(m).session.packVersion !== j(m).pack.version ? (E(), I("p", Sp, " 入场时副本包版本为 " + O(j(m).session.packVersion) + "，当前为 " + O(j(m).pack.version) + "。 ", 1)) : U("", !0),
        j(m).pack?.phases.length ? (E(), I("div", zp, [
          k[4] || (k[4] = h("h4", null, "手动修正", -1)),
          h("div", Ep, [
            _n(h("select", {
              "onUpdate:modelValue": k[0] || (k[0] = (S) => n.value = S),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              k[3] || (k[3] = h("option", { value: "" }, "切换到阶段…", -1)),
              (E(!0), I(Y, null, fe(j(m).pack.phases, (S) => (E(), I("option", {
                key: S.id,
                value: S.id
              }, O(S.name), 9, Mp))), 128))
            ], 8, Cp), [
              [uo, n.value]
            ]),
            h("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: f
            }, "切换", 8, Ip)
          ]),
          h("div", Pp, [
            _n(h("input", {
              "onUpdate:modelValue": k[1] || (k[1] = (S) => s.value = S),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, Tp), [
              [
                Bi,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            h("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: p
            }, "修正轮次", 8, Np)
          ])
        ])) : U("", !0),
        j(m).pack?.roles?.length ? (E(), I("div", Rp, [
          k[5] || (k[5] = h("h4", null, "角色登记", -1)),
          (E(!0), I(Y, null, fe(j(m).pack.roles, (S) => (E(), I("label", {
            key: S,
            class: "rlzc-field"
          }, [
            h("span", null, O(S), 1),
            _n(h("input", {
              "onUpdate:modelValue": (M) => i[S] = M,
              class: "rlzc-input",
              disabled: !t.value,
              placeholder: "未登记"
            }, null, 8, Fp), [
              [Bi, i[S]]
            ])
          ]))), 128)),
          h("button", {
            class: "rlzc-btn small",
            disabled: !t.value,
            onClick: x
          }, "保存登记", 8, Op)
        ])) : U("", !0),
        h("div", jp, [
          k[7] || (k[7] = h("h4", null, "<副本> 核对", -1)),
          j(m).audit?.warnings.length ? (E(), I(Y, { key: 1 }, [
            h("p", Lp, "共 " + O(j(m).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            h("ul", Bp, [
              (E(!0), I(Y, null, fe(j(m).audit.warnings.slice(-30).reverse(), (S, M) => (E(), I("li", { key: M }, [
                h("span", null, [
                  h("small", null, "#" + O(S.index) + "｜" + O(S.phase) + "第" + O(S.round) + "轮", 1),
                  k[6] || (k[6] = h("br", null, null, -1)),
                  kt("⚠️ " + O(S.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (E(), I("p", Dp, "没有发现问题。"))
        ]),
        h("div", Vp, [
          k[8] || (k[8] = h("h4", null, "手动操作记录", -1)),
          j(m).session.manual.length ? (E(), I("ul", Wp, [
            (E(!0), I(Y, null, fe(j(m).session.manual, (S, M) => (E(), I("li", { key: M }, [
              h("code", null, "#" + O(S.atIndex) + " " + O(S.kind) + " " + O("phase" in S ? S.phase : "") + O("round" in S ? S.round : "") + O("targetPhase" in S ? `${S.targetPhase}:${S.targetRound}` : ""), 1),
              h("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (v) => j(yf)(M)
              }, "撤销", 8, Up)
            ]))), 128))
          ])) : (E(), I("p", Gp, "无"))
        ]),
        l.value && (l.value.state || l.value.record) ? (E(), I("details", Yp, [
          k[9] || (k[9] = h("summary", null, "副API：隐藏状态与最近一次整理", -1)),
          h("pre", Hp, O(l.value.text || "（尚无状态）"), 1),
          l.value.record ? (E(), I("pre", Kp, O(R(l.value.record)), 1)) : U("", !0),
          k[10] || (k[10] = h("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 副API预判条件不成立，没有注入", -1))
        ])) : U("", !0),
        h("details", Zp, [
          k[11] || (k[11] = h("summary", null, "本次注入", -1)),
          h("pre", Jp, O([j(m).lastInjection.token, j(m).lastInjection.progress, j(m).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        h("details", qp, [
          k[12] || (k[12] = h("summary", null, "重放结果", -1)),
          h("pre", Qp, O(R(c.value)), 1)
        ]),
        h("details", Xp, [
          k[13] || (k[13] = h("summary", null, "会话原始数据", -1)),
          h("pre", eh, O(R(j(m).session)), 1)
        ]),
        h("details", th, [
          k[15] || (k[15] = h("summary", null, "每楼快照（最近60条）", -1)),
          h("table", nh, [
            k[14] || (k[14] = h("thead", null, [
              h("tr", null, [
                h("th", null, "楼"),
                h("th", null, "阶段"),
                h("th", null, "轮"),
                h("th", null, "钟时"),
                h("th", null, "时限"),
                h("th", null, "事件"),
                h("th", null, "副API")
              ])
            ], -1)),
            h("tbody", null, [
              (E(!0), I(Y, null, fe(r.value, (S) => (E(), I("tr", {
                key: S.index,
                class: ct({ "rlzc-row-warn": o.value.has(S.index) })
              }, [
                h("td", null, O(S.index) + O(S.snap.entry ? "★" : ""), 1),
                h("td", null, O(S.snap.phase), 1),
                h("td", null, O(S.snap.round), 1),
                h("td", null, O(S.snap.clock ?? ""), 1),
                h("td", null, O(S.snap.limit?.text ?? ""), 1),
                h("td", null, O(S.snap.injected.join(" ")), 1),
                h("td", null, O(a(S.snap)), 1)
              ], 2))), 128))
            ])
          ])
        ]),
        h("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: k[2] || (k[2] = //@ts-ignore
          (...S) => j(sr) && j(sr)(...S))
        }, "删除副本会话", 8, sh)
      ], 64)) : (E(), I("p", kp, "当前聊天没有副本会话。"))
    ]));
  }
}), rh = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, oh = { class: "rlzc-head" }, lh = { class: "rlzc-tabs" }, Ah = ["onClick"], ah = { class: "rlzc-body" }, ch = /* @__PURE__ */ ut({
  __name: "Panel",
  setup(e) {
    const t = [
      { id: "system", label: "系统" },
      { id: "settings", label: "设置" },
      { id: "debug", label: "调试" }
    ];
    async function n(s) {
      if (s === "debug" && !m.debugUnlocked) {
        if (!await Be("此页会显示副本真相，确定要打开吗？")) return;
        m.debugUnlocked = !0;
      }
      m.tab = s;
    }
    return (s, i) => (E(), I("div", {
      class: "rlzc-backdrop",
      onClick: i[1] || (i[1] = ga((r) => j(m).panelOpen = !1, ["self"]))
    }, [
      h("section", rh, [
        h("header", oh, [
          i[2] || (i[2] = h("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          h("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: i[0] || (i[0] = (r) => j(m).panelOpen = !1)
          }, "×")
        ]),
        h("nav", lh, [
          (E(), I(Y, null, fe(t, (r) => h("button", {
            key: r.id,
            class: ct({ on: j(m).tab === r.id }),
            onClick: (o) => n(r.id)
          }, O(r.label), 11, Ah)), 64))
        ]),
        h("div", ah, [
          j(m).tab === "system" ? (E(), st(gd, { key: 0 })) : j(m).tab === "settings" ? (E(), st(_p, { key: 1 })) : j(m).tab === "debug" && j(m).debugUnlocked ? (E(), st(ih, { key: 2 })) : U("", !0)
        ])
      ])
    ]));
  }
}), uh = /* @__PURE__ */ ut({
  __name: "App",
  setup(e) {
    return (t, n) => (E(), I(Y, null, [
      j(m).settings.showBall ? (E(), st(If, { key: 0 })) : U("", !0),
      j(m).panelOpen ? (E(), st(ch, { key: 1 })) : U("", !0)
    ], 64));
  }
}), fh = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}';
function dh(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function il(e, t, n) {
  const s = re().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function ph() {
  const e = dh();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await il("/api/extensions/version", e, t);
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
async function hh(e) {
  const t = await il("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const lr = "rlzc-host", Ar = "rlzc-menu-btn", ar = "rlzc-settings-drawer";
function mh() {
  if (document.getElementById(lr)) return;
  const e = document.createElement("div");
  e.id = lr, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = fh, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), ya(uh).mount(s), rl(), ol();
}
function rl(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => rl(e + 1), 500);
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
function ol(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => ol(e + 1), 500);
    return;
  }
  if (document.getElementById(ar)) return;
  const n = (B, he = "", me = "") => {
    const Ve = document.createElement(B);
    return he && (Ve.className = he), me && (Ve.textContent = me), Ve;
  }, s = n("div");
  s.id = ar;
  const i = n("div", "inline-drawer"), r = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), r.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const A = n("div", "inline-drawer-content"), a = n("div", "menu_button menu_button_icon", "打开面板");
  a.prepend(n("i", "fa-solid fa-seedling")), a.addEventListener("click", () => m.panelOpen = !0);
  const c = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  c.addEventListener("click", () => {
    m.settings.ball = { x: null, y: null }, m.settings.showBall = !0, $e();
  });
  const f = n("label", "checkbox_label"), p = document.createElement("input");
  p.type = "checkbox", p.addEventListener("change", () => {
    m.settings.showBall = p.checked, $e();
  }), f.append(p, n("span", "", "显示悬浮球")), Zn(() => m.settings.showBall, (B) => p.checked = B, { immediate: !0 });
  const x = n("div", "flex-container");
  x.append(a, c);
  const R = n("div", "flex-container alignitemscenter"), y = n("small", "rlzc-update-status", "正在检查更新…"), k = n("div", "menu_button menu_button_icon", "检查更新"), S = n("div", "menu_button menu_button_icon", "立即更新"), M = n("div", "menu_button menu_button_icon", "刷新页面");
  S.style.display = "none", M.style.display = "none", R.append(y, k, S, M);
  let v = null, b = !1;
  const P = async () => {
    if (!b) {
      b = !0, y.textContent = "正在检查更新…", S.style.display = "none";
      try {
        v = await ph();
        const B = v.commit ? `（${v.commit}）` : "";
        v.isGit ? v.isUpToDate ? y.textContent = `已是最新版本${B}` : (y.textContent = `有新版本可以更新，当前${B || "版本较旧"}`, S.style.display = "") : y.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = v.isGit && !v.isUpToDate ? "" : "none";
      } catch (B) {
        y.textContent = `检查更新失败：${B.message}`;
      } finally {
        b = !1;
      }
    }
  };
  k.addEventListener("click", () => void P()), S.addEventListener("click", async () => {
    if (!(!v || b)) {
      b = !0, y.textContent = "正在更新…", S.style.display = "none";
      try {
        await hh(v), l.style.display = "none", y.textContent = "更新完成，刷新页面后生效。", M.style.display = "";
      } catch (B) {
        y.textContent = `更新失败：${B.message}`, S.style.display = "";
      } finally {
        b = !1;
      }
    }
  }), M.addEventListener("click", () => location.reload()), setTimeout(() => void P(), 3e3), A.append(x, f, R, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), i.append(r, A), s.append(i), t.append(s);
}
globalThis.rlzcInterceptor = pf;
function Cs() {
  Af(), Xe("MESSAGE_RECEIVED", (e, t) => Ef(Number(e), t)), Xe("CHARACTER_MESSAGE_RENDERED", (e) => zs(Number(e))), Xe("MESSAGE_DELETED", () => Ss()), Xe("MESSAGE_SWIPED", (e) => {
    hf(Number(e)), zs(Number(e));
  }), Xe("MESSAGE_EDITED", () => Ss()), Xe("MESSAGE_UPDATED", (e) => {
    Ss(), zs(Number(e));
  }), Xe("CHAT_CHANGED", () => rr()), Xe("MORE_MESSAGES_LOADED", () => ai()), mh(), rr(), console.log("[rlzc] 回廊种菜系统已加载", m.settings);
}
const cr = window.jQuery;
typeof cr == "function" ? cr(() => Cs()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Cs) : Cs();
