/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function wi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ae = {}, Pt = [], Ft = () => {
}, Qr = () => !1, ms = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), gs = (e) => e.startsWith("onUpdate:"), Re = Object.assign, Xr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, pa = Object.prototype.hasOwnProperty, ie = (e, t) => pa.call(e, t), Z = Array.isArray, pt = (e) => Nn(e) === "[object Map]", Lt = (e) => Nn(e) === "[object Set]", tr = (e) => Nn(e) === "[object Date]", ne = (e) => typeof e == "function", de = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", eo = (e) => (ce(e) || ne(e)) && ne(e.then) && ne(e.catch), to = Object.prototype.toString, Nn = (e) => to.call(e), ha = (e) => Nn(e).slice(8, -1), no = (e) => Nn(e) === "[object Object]", ki = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hn = /* @__PURE__ */ wi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), xs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ma = /-\w/g, De = xs(
  (e) => e.replace(ma, (t) => t.slice(1).toUpperCase())
), ga = /\B([A-Z])/g, Wt = xs(
  (e) => e.replace(ga, "-$1").toLowerCase()
), so = xs((e) => e.charAt(0).toUpperCase() + e.slice(1)), js = xs(
  (e) => e ? `on${so(e)}` : ""
), Ye = (e, t) => !Object.is(e, t), Gn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, io = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, ys = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let nr;
const vs = () => nr || (nr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function bs(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = de(s) ? ba(s) : bs(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (de(e) || ce(e))
    return e;
}
const xa = /;(?![^(]*\))/g, ya = /:([^]+)/, va = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function ba(e) {
  const t = {};
  return e.replace(va, (n) => n.startsWith("/*") ? "" : n).split(xa).forEach((n) => {
    if (n) {
      const s = n.split(ya);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ee(e) {
  let t = "";
  if (de(e))
    t = e;
  else if (Z(e))
    for (let n = 0; n < e.length; n++) {
      const s = ee(e[n]);
      s && (t += s + " ");
    }
  else if (ce(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const wa = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ka = /* @__PURE__ */ wi(wa);
function ro(e) {
  return !!e || e === "";
}
function _a(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = gt(e[i], t[i], n);
  return s;
}
function sr(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const r of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!i[l] && gt(r, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    i[o] = 1;
  }
  return !0;
}
function za(e, t, n) {
  let s = pt(e), i = pt(t);
  if (s || i || (s = Lt(e), i = Lt(t), s || i))
    return s && i ? sr(e, t, n) : !1;
  const r = Object.keys(e).length, o = Object.keys(t).length;
  if (r !== o)
    return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
    if (a && !c || !a && c || !gt(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function ir(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, r] = n;
  if (i.has(e) || r.has(t))
    return i.get(e) === t && r.get(t) === e;
  i.set(e, t), r.set(t, e);
  const o = s(e, t, n);
  return i.delete(e), r.delete(t), o;
}
function gt(e, t, n) {
  if (e === t) return !0;
  let s = tr(e), i = tr(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = Ze(e), i = Ze(t), s || i ? e === t : (s = Z(e), i = Z(t), s || i ? s && i ? ir(e, t, n, _a) : !1 : (s = ce(e), i = ce(t), s || i ? !s || !i ? !1 : ir(e, t, n, za) : String(e) === String(t))));
}
function $a(e, t) {
  return e.findIndex((n) => gt(n, t));
}
const oo = (e) => !!(e && e.__v_isRef === !0), N = (e) => de(e) ? e : e == null ? "" : Z(e) || ce(e) && (e.toString === to || !ne(e.toString)) ? oo(e) ? N(e.value) : JSON.stringify(e, lo, 2) : String(e), lo = (e, t) => oo(t) ? lo(e, t.value) : pt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[Bs(s, r) + " =>"] = i, n),
    {}
  )
} : Lt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Bs(n))
} : Ze(t) ? Bs(t) : ce(t) && !Z(t) && !no(t) ? String(t) : t, Bs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let me;
class Sa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && me && (me.active ? (this.parent = me, this.index = (me.scopes || (me.scopes = [])).push(
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
      const n = me;
      try {
        return me = this, t();
      } finally {
        me = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = me, me = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (me === this)
        me = this.prevScope;
      else {
        let t = me;
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
function Ea() {
  return me;
}
let le;
const Vs = /* @__PURE__ */ new WeakSet();
class ao {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, me && (me.active ? me.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Vs.has(this) && (Vs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ao(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, rr(this), uo(this);
    const t = le, n = Fe;
    le = this, Fe = !0;
    try {
      return this.fn();
    } finally {
      fo(this), le = t, Fe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        $i(t);
      this.deps = this.depsTail = void 0, rr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Vs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ui(this) && this.run();
  }
  get dirty() {
    return ui(this);
  }
}
let co = 0, mn, gn;
function Ao(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = gn, gn = e;
    return;
  }
  e.next = mn, mn = e;
}
function _i() {
  co++;
}
function zi() {
  if (--co > 0)
    return;
  if (gn) {
    let t = gn;
    for (gn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; mn; ) {
    let t = mn;
    for (mn = void 0; t; ) {
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
function uo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function fo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), $i(s), Ca(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function ui(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (po(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function po(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wn) || (e.globalVersion = wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ui(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = le, s = Fe;
  le = e, Fe = !0;
  try {
    uo(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ye(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    le = n, Fe = s, fo(e), e.flags &= -3;
  }
}
function $i(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      $i(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ca(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Fe = !0;
const ho = [];
function xt() {
  ho.push(Fe), Fe = !1;
}
function yt() {
  const e = ho.pop();
  Fe = e === void 0 ? !0 : e;
}
function rr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = le;
    le = void 0;
    try {
      t();
    } finally {
      le = n;
    }
  }
}
let wn = 0;
class Ma {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Si {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!le || !Fe || le === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== le)
      n = this.activeLink = new Ma(le, this), le.deps ? (n.prevDep = le.depsTail, le.depsTail.nextDep = n, le.depsTail = n) : le.deps = le.depsTail = n, mo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = le.depsTail, n.nextDep = void 0, le.depsTail.nextDep = n, le.depsTail = n, le.deps === n && (le.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, wn++, this.notify(t);
  }
  notify(t) {
    _i();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      zi();
    }
  }
}
function mo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        mo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const di = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ Symbol(
  ""
), fi = /* @__PURE__ */ Symbol(
  ""
), kn = /* @__PURE__ */ Symbol(
  ""
);
function ye(e, t, n) {
  if (Fe && le) {
    let s = di.get(e);
    s || di.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Si()), i.map = s, i.key = n), i.track();
  }
}
function it(e, t, n, s, i, r) {
  const o = di.get(e);
  if (!o) {
    wn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (_i(), t === "clear")
    o.forEach(l);
  else {
    const a = Z(e), c = a && ki(n);
    if (a && n === "length") {
      const A = Number(s);
      o.forEach((d, h) => {
        (h === "length" || h === kn || !Ze(h) && h >= A) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(kn)), t) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(Rt)), pt(e) && l(o.get(fi)));
          break;
        case "delete":
          a || (l(o.get(Rt)), pt(e) && l(o.get(fi)));
          break;
        case "set":
          pt(e) && l(o.get(Rt));
          break;
      }
  }
  zi();
}
function Jt(e) {
  const t = /* @__PURE__ */ X(e);
  return t === e || (ye(t, "iterate", kn), /* @__PURE__ */ Ce(e)) ? t : /* @__PURE__ */ Je(e) ? /* @__PURE__ */ ht(e) ? t.map((n) => vt(Ie(n))) : t.map(vt) : t.map(Ie);
}
function ws(e) {
  return ye(e = /* @__PURE__ */ X(e), "iterate", kn), e;
}
function We(e, t) {
  return /* @__PURE__ */ Je(e) ? vt(/* @__PURE__ */ ht(e) ? Ie(t) : t) : Ie(t);
}
const Ia = {
  __proto__: null,
  [Symbol.iterator]() {
    return Us(this, Symbol.iterator, (e) => We(this, e));
  },
  concat(...e) {
    return Jt(this).concat(
      ...e.map((t) => Z(t) ? Jt(t) : t)
    );
  },
  entries() {
    return Us(this, "entries", (e) => (e[1] = We(this, e[1]), e));
  },
  every(e, t) {
    return tt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return tt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => We(this, s)),
      arguments
    );
  },
  find(e, t) {
    return tt(
      this,
      "find",
      e,
      t,
      (n) => We(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return tt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return tt(
      this,
      "findLast",
      e,
      t,
      (n) => We(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return tt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return tt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ws(this, "includes", e);
  },
  indexOf(...e) {
    return Ws(this, "indexOf", e);
  },
  join(e) {
    return Jt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ws(this, "lastIndexOf", e);
  },
  map(e, t) {
    return tt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return An(this, "pop");
  },
  push(...e) {
    return An(this, "push", e);
  },
  reduce(e, ...t) {
    return or(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return or(this, "reduceRight", e, t);
  },
  shift() {
    return An(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return tt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return An(this, "splice", e);
  },
  toReversed() {
    return Jt(this).toReversed();
  },
  toSorted(e) {
    return Jt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Jt(this).toSpliced(...e);
  },
  unshift(...e) {
    return An(this, "unshift", e);
  },
  values() {
    return Us(this, "values", (e) => We(this, e));
  }
};
function Us(e, t, n) {
  const s = ws(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Ce(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const Ta = Array.prototype;
function tt(e, t, n, s, i, r) {
  const o = ws(e), l = o !== e && !/* @__PURE__ */ Ce(e), a = o[t];
  if (a !== Ta[t]) {
    const d = a.apply(e, r);
    return l ? Ie(d) : d;
  }
  let c = n;
  o !== e && (l ? c = function(d, h) {
    return n.call(this, We(e, d), h, e);
  } : n.length > 2 && (c = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const A = a.call(o, c, s);
  return l && i ? i(A) : A;
}
function or(e, t, n, s) {
  const i = ws(e), r = i !== e && !/* @__PURE__ */ Ce(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(c, A, d) {
    return l && (l = !1, c = We(e, c)), n.call(this, c, We(e, A), d, e);
  }) : n.length > 3 && (o = function(c, A, d) {
    return n.call(this, c, A, d, e);
  }));
  const a = i[t](o, ...s);
  return l ? We(e, a) : a;
}
function Ws(e, t, n) {
  const s = /* @__PURE__ */ X(e);
  ye(s, "iterate", kn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Mi(n[0]) ? (n[0] = /* @__PURE__ */ X(n[0]), s[t](...n)) : i;
}
function An(e, t, n = []) {
  xt(), _i();
  const s = (/* @__PURE__ */ X(e))[t].apply(e, n);
  return zi(), yt(), s;
}
const Pa = /* @__PURE__ */ wi("__proto__,__v_isRef,__isVue"), go = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
);
function Na(e) {
  Ze(e) || (e = String(e));
  const t = /* @__PURE__ */ X(this);
  return ye(t, "has", e), t.hasOwnProperty(e);
}
class xo {
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
      return s === (i ? r ? Wa : wo : r ? bo : vo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = Z(t);
    if (!i) {
      let a;
      if (o && (a = Ia[n]))
        return a;
      if (n === "hasOwnProperty")
        return Na;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ be(t) ? t : s
    );
    if ((Ze(n) ? go.has(n) : Pa(n)) || (i || ye(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ be(l)) {
      const a = o && ki(n) ? l : l.value;
      return i && ce(a) ? /* @__PURE__ */ hi(a) : a;
    }
    return ce(l) ? i ? /* @__PURE__ */ hi(l) : /* @__PURE__ */ ks(l) : l;
  }
}
class yo extends xo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = Z(t) && ki(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Je(r);
      if (!/* @__PURE__ */ Ce(s) && !/* @__PURE__ */ Je(s) && (r = /* @__PURE__ */ X(r), s = /* @__PURE__ */ X(s)), !o && /* @__PURE__ */ be(r) && !/* @__PURE__ */ be(s))
        return c || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : ie(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ be(t) ? t : i
    );
    return t === /* @__PURE__ */ X(i) && a && (l ? Ye(s, r) && it(t, "set", n, s) : it(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = ie(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && it(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ze(n) || !go.has(n)) && ye(t, "has", n), s;
  }
  ownKeys(t) {
    return ye(
      t,
      "iterate",
      Z(t) ? "length" : Rt
    ), Reflect.ownKeys(t);
  }
}
class Da extends xo {
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
const Fa = /* @__PURE__ */ new yo(), Ra = /* @__PURE__ */ new Da(), Oa = /* @__PURE__ */ new yo(!0);
const pi = (e) => e, Bn = (e) => Reflect.getPrototypeOf(e);
function La(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ X(i), o = pt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = i[e](...s), A = n ? pi : t ? vt : Ie;
    return !t && ye(
      r,
      "iterate",
      a ? fi : Rt
    ), Re(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: h } = c.next();
          return h ? { value: d, done: h } : {
            value: l ? [A(d[0]), A(d[1])] : A(d),
            done: h
          };
        }
      }
    );
  };
}
function Vn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ja(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ X(r), l = /* @__PURE__ */ X(i);
      e || (Ye(i, l) && ye(o, "get", i), ye(o, "get", l));
      const { has: a } = Bn(o), c = t ? pi : e ? vt : Ie;
      if (a.call(o, i))
        return c(r.get(i));
      if (a.call(o, l))
        return c(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ye(/* @__PURE__ */ X(i), "iterate", Rt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ X(r), l = /* @__PURE__ */ X(i);
      return e || (Ye(i, l) && ye(o, "has", i), ye(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ X(l), c = t ? pi : e ? vt : Ie;
      return !e && ye(a, "iterate", Rt), l.forEach((A, d) => i.call(r, c(A), c(d), o));
    }
  };
  return Re(
    n,
    e ? {
      add: Vn("add"),
      set: Vn("set"),
      delete: Vn("delete"),
      clear: Vn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ X(this), o = Bn(r), l = /* @__PURE__ */ X(i), a = !t && !/* @__PURE__ */ Ce(i) && !/* @__PURE__ */ Je(i) ? l : i;
        return o.has.call(r, a) || Ye(i, a) && o.has.call(r, i) || Ye(l, a) && o.has.call(r, l) || (r.add(a), it(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Ce(r) && !/* @__PURE__ */ Je(r) && (r = /* @__PURE__ */ X(r));
        const o = /* @__PURE__ */ X(this), { has: l, get: a } = Bn(o);
        let c = l.call(o, i);
        c || (i = /* @__PURE__ */ X(i), c = l.call(o, i));
        const A = a.call(o, i);
        return o.set(i, r), c ? Ye(r, A) && it(o, "set", i, r) : it(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ X(this), { has: o, get: l } = Bn(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ X(i), a = o.call(r, i)), l && l.call(r, i);
        const c = r.delete(i);
        return a && it(r, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ X(this), r = i.size !== 0, o = i.clear();
        return r && it(
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
    n[i] = La(i, e, t);
  }), n;
}
function Ei(e, t) {
  const n = ja(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    ie(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Ba = {
  get: /* @__PURE__ */ Ei(!1, !1)
}, Va = {
  get: /* @__PURE__ */ Ei(!1, !0)
}, Ua = {
  get: /* @__PURE__ */ Ei(!0, !1)
};
const vo = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakMap();
function Ha(e) {
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
function ks(e) {
  return /* @__PURE__ */ Je(e) ? e : Ci(
    e,
    !1,
    Fa,
    Ba,
    vo
  );
}
// @__NO_SIDE_EFFECTS__
function Ya(e) {
  return Ci(
    e,
    !1,
    Oa,
    Va,
    bo
  );
}
// @__NO_SIDE_EFFECTS__
function hi(e) {
  return Ci(
    e,
    !0,
    Ra,
    Ua,
    wo
  );
}
function Ci(e, t, n, s, i) {
  if (!ce(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = Ha(ha(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return /* @__PURE__ */ Je(e) ? /* @__PURE__ */ ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Mi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function X(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ X(t) : e;
}
function Ga(e) {
  return !ie(e, "__v_skip") && Object.isExtensible(e) && io(e, "__v_skip", !0), e;
}
const Ie = (e) => ce(e) ? /* @__PURE__ */ ks(e) : e, vt = (e) => ce(e) ? /* @__PURE__ */ hi(e) : e;
// @__NO_SIDE_EFFECTS__
function be(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return Ka(e, !1);
}
function Ka(e, t) {
  return /* @__PURE__ */ be(e) ? e : new Za(e, t);
}
class Za {
  constructor(t, n) {
    this.dep = new Si(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ X(t), this._value = n ? t : Ie(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ce(t) || /* @__PURE__ */ Je(t);
    t = s ? t : /* @__PURE__ */ X(t), Ye(t, n) && (this._rawValue = t, this._value = s ? t : Ie(t), this.dep.trigger());
  }
}
function P(e) {
  return /* @__PURE__ */ be(e) ? e.value : e;
}
const Ja = {
  get: (e, t, n) => t === "__v_raw" ? e : P(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ be(i) && !/* @__PURE__ */ be(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ko(e) {
  return /* @__PURE__ */ ht(e) ? e : new Proxy(e, Ja);
}
class qa {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Si(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    le !== this)
      return Ao(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return po(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Qa(e, t, n = !1) {
  let s, i;
  return ne(e) ? s = e : (s = e.get, i = e.set), new qa(s, i, n);
}
const Un = {}, ts = /* @__PURE__ */ new WeakMap();
let Mt;
function Xa(e, t = !1, n = Mt) {
  if (n) {
    let s = ts.get(n);
    s || ts.set(n, s = []), s.push(e);
  }
}
function ec(e, t, n = ae) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = n, c = (g) => i ? g : /* @__PURE__ */ Ce(g) || i === !1 || i === 0 ? rt(g, 1) : rt(g);
  let A, d, h, x, k = !1, v = !1;
  if (/* @__PURE__ */ be(e) ? (d = () => e.value, k = /* @__PURE__ */ Ce(e)) : /* @__PURE__ */ ht(e) ? (d = () => c(e), k = !0) : Z(e) ? (v = !0, k = e.some((g) => /* @__PURE__ */ ht(g) || /* @__PURE__ */ Ce(g)), d = () => e.map((g) => {
    if (/* @__PURE__ */ be(g))
      return g.value;
    if (/* @__PURE__ */ ht(g))
      return c(g);
    if (ne(g))
      return a ? a(g, 2) : g();
  })) : ne(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (h) {
      xt();
      try {
        h();
      } finally {
        yt();
      }
    }
    const g = Mt;
    Mt = A;
    try {
      return a ? a(e, 3, [x]) : e(x);
    } finally {
      Mt = g;
    }
  } : d = Ft, t && i) {
    const g = d, w = i === !0 ? 1 / 0 : i;
    d = () => rt(g(), w);
  }
  const F = Ea(), j = () => {
    A.stop(), F && F.active && Xr(F.effects, A);
  };
  if (r && t) {
    const g = t;
    t = (...w) => {
      const B = g(...w);
      return j(), B;
    };
  }
  let T = v ? new Array(e.length).fill(Un) : Un;
  const y = (g) => {
    if (!(!(A.flags & 1) || !A.dirty && !g))
      if (t) {
        const w = A.run();
        if (g || i || k || (v ? w.some((B, U) => Ye(B, T[U])) : Ye(w, T))) {
          h && h();
          const B = Mt;
          Mt = A;
          try {
            const U = [
              w,
              // pass undefined as the old value when it's changed for the first time
              T === Un ? void 0 : v && T[0] === Un ? [] : T,
              x
            ];
            T = w, a ? a(t, 3, U) : (
              // @ts-expect-error
              t(...U)
            );
          } finally {
            Mt = B;
          }
        }
      } else
        A.run();
  };
  return l && l(y), A = new ao(d), A.scheduler = o ? () => o(y, !1) : y, x = (g) => Xa(g, !1, A), h = A.onStop = () => {
    const g = ts.get(A);
    if (g) {
      if (a)
        a(g, 4);
      else
        for (const w of g) w();
      ts.delete(A);
    }
  }, t ? s ? y(!0) : T = A.run() : o ? o(y.bind(null, !0), !0) : A.run(), j.pause = A.pause.bind(A), j.resume = A.resume.bind(A), j.stop = j, j;
}
function rt(e, t = 1 / 0, n) {
  if (t <= 0 || !ce(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ be(e))
    rt(e.value, t, n);
  else if (Z(e))
    for (let s = 0; s < e.length; s++)
      rt(e[s], t, n);
  else if (Lt(e) || pt(e))
    e.forEach((s) => {
      rt(s, t, n);
    });
  else if (no(e)) {
    for (const s in e)
      rt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && rt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Dn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    _s(i, t, n);
  }
}
function qe(e, t, n, s) {
  if (ne(e)) {
    const i = Dn(e, t, n, s);
    return i && eo(i) && i.catch((r) => {
      _s(r, t, n);
    }), i;
  }
  if (Z(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(qe(e[r], t, n, s));
    return i;
  }
}
function _s(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ae;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const A = l.ec;
      if (A) {
        for (let d = 0; d < A.length; d++)
          if (A[d](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      xt(), Dn(r, null, 10, [
        e,
        a,
        c
      ]), yt();
      return;
    }
  }
  tc(e, n, i, s, o);
}
function tc(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ve = [];
let Ue = -1;
const en = [];
let dt = null, qt = 0;
const _o = /* @__PURE__ */ Promise.resolve();
let ns = null;
function zo(e) {
  const t = ns || _o;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function nc(e) {
  let t = Ue + 1, n = ve.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = ve[s], r = _n(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ii(e) {
  if (!(e.flags & 1)) {
    const t = _n(e), n = ve[ve.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= _n(n) ? ve.push(e) : ve.splice(nc(t), 0, e), e.flags |= 1, $o();
  }
}
function $o() {
  ns || (ns = _o.then(Eo));
}
function sc(e) {
  if (!Z(e))
    dt && e.id === -1 ? dt.splice(qt + 1, 0, e) : e.flags & 1 || (en.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      en.push(e[t]);
  $o();
}
function lr(e, t, n = Ue + 1) {
  for (; n < ve.length; n++) {
    const s = ve[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ve.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function So(e) {
  if (en.length) {
    const t = [...new Set(en)].sort(
      (n, s) => _n(n) - _n(s)
    );
    if (en.length = 0, dt) {
      for (let n = 0; n < t.length; n++)
        dt.push(t[n]);
      return;
    }
    for (dt = t, qt = 0; qt < dt.length; qt++) {
      const n = dt[qt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    dt = null, qt = 0;
  }
}
const _n = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Eo(e) {
  try {
    for (Ue = 0; Ue < ve.length; Ue++) {
      const t = ve[Ue];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Dn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ue < ve.length; Ue++) {
      const t = ve[Ue];
      t && (t.flags &= -2);
    }
    Ue = -1, ve.length = 0, So(), ns = null, (ve.length || en.length) && Eo();
  }
}
let Ee = null, Co = null;
function ss(e) {
  const t = Ee;
  return Ee = e, Co = e && e.type.__scopeId || null, t;
}
function ic(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && pr(-1);
    const r = ss(t), o = Ot.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = Ot.length; a > o; a--) Yo();
      ss(r), s._d && pr(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ft(e, t) {
  if (Ee === null)
    return e;
  const n = Cs(Ee), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = ae] = t[i];
    r && (ne(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && rt(o), s.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Et(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[s];
    a && (xt(), qe(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), yt());
  }
}
function rc(e, t, n = !1) {
  const s = Uc();
  if (s || tn) {
    let i = tn ? tn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(s && s.proxy) : t;
  }
}
const oc = /* @__PURE__ */ Symbol.for("v-scx"), lc = () => rc(oc);
function zs(e, t, n) {
  return ac(e, t, n);
}
function ac(e, t, n = ae) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = Re({}, n), a = t && s || !t && r !== "post";
  let c;
  if (Sn) {
    if (r === "sync") {
      const x = lc();
      c = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!a) {
      const x = () => {
      };
      return x.stop = Ft, x.resume = Ft, x.pause = Ft, x;
    }
  }
  const A = bt;
  l.call = (x, k, v) => qe(x, A, k, v);
  let d = !1;
  r === "post" ? l.scheduler = (x) => {
    ke(x, A && A.suspense);
  } : r !== "sync" && (d = !0, l.scheduler = (x, k) => {
    k ? x() : Ii(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), d && (x.flags |= 2, A && (x.id = A.uid, x.i = A));
  };
  const h = ec(e, t, l);
  return Sn && (c ? c.push(h) : a && h()), h;
}
const cc = /* @__PURE__ */ Symbol("_vte"), $s = (e) => e.__isTeleport, Hs = /* @__PURE__ */ Symbol("_leaveCb");
function Ac(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== at) {
        t = n;
        break;
      }
  }
  return t;
}
function Mo(e) {
  if (!Io(e))
    return $s(e.type) && e.children ? Ac(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ne(n.default))
      return n.default();
  }
}
function Ti(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Ti(
      $s(n.type) && Mo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Oe(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Re({ name: e.name }, t, { setup: e })
  ) : e;
}
function uc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ar(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const is = /* @__PURE__ */ new WeakMap();
function xn(e, t, n, s, i = !1) {
  if (Z(e)) {
    e.forEach(
      (v, F) => xn(
        v,
        t && (Z(t) ? t[F] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (yn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && xn(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Cs(s.component) : s.el, o = i ? null : r, { i: l, r: a } = e, c = t && t.r, A = l.refs === ae ? l.refs = {} : l.refs, d = l.setupState, h = /* @__PURE__ */ X(d), x = d === ae ? Qr : (v) => ar(A, v) ? !1 : ie(h, v), k = (v, F) => !(F && ar(A, F));
  if (c != null && c !== a) {
    if (cr(t), de(c))
      A[c] = null, x(c) && (d[c] = null);
    else if (/* @__PURE__ */ be(c)) {
      const v = t;
      k(c, v.k) && (c.value = null), v.k && (A[v.k] = null);
    }
  }
  if (ne(a))
    Dn(a, l, 12, [o, A]);
  else {
    const v = de(a), F = /* @__PURE__ */ be(a);
    if (v || F) {
      const j = () => {
        if (e.f) {
          const T = v ? x(a) ? d[a] : A[a] : k() || !e.k ? a.value : A[e.k];
          if (i)
            Z(T) && Xr(T, r);
          else if (Z(T))
            T.includes(r) || T.push(r);
          else if (v)
            A[a] = [r], x(a) && (d[a] = A[a]);
          else {
            const y = [r];
            k(a, e.k) && (a.value = y), e.k && (A[e.k] = y);
          }
        } else v ? (A[a] = o, x(a) && (d[a] = o)) : F && (k(a, e.k) && (a.value = o), e.k && (A[e.k] = o));
      };
      if (o) {
        const T = () => {
          j(), is.delete(e);
        };
        T.id = -1, is.set(e, T), ke(T, n);
      } else
        cr(e), j();
    }
  }
}
function cr(e) {
  const t = is.get(e);
  t && (t.flags |= 8, is.delete(e));
}
vs().requestIdleCallback;
vs().cancelIdleCallback;
const yn = (e) => !!e.type.__asyncLoader, Io = (e) => e.type.__isKeepAlive;
function dc(e, t, n = bt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      xt();
      const l = Di(n), a = qe(t, n, e, o);
      return l(), yt(), a;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const To = (e) => (t, n = bt) => {
  (!Sn || e === "sp") && dc(e, (...s) => t(...s), n);
}, fc = To("m"), pc = To(
  "bum"
), hc = /* @__PURE__ */ Symbol.for("v-ndc");
function xe(e, t, n, s) {
  let i;
  const r = n, o = Z(e);
  if (o || de(e)) {
    const l = o && /* @__PURE__ */ ht(e);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ Ce(e), c = /* @__PURE__ */ Je(e), e = ws(e)), i = new Array(e.length);
    for (let A = 0, d = e.length; A < d; A++)
      i[A] = t(
        a ? c ? vt(Ie(e[A])) : Ie(e[A]) : e[A],
        A,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (ce(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const A = l[a];
        i[a] = t(e[A], A, a, r);
      }
    }
  else
    i = [];
  return i;
}
const mi = (e) => e ? Jo(e) ? Cs(e) : mi(e.parent) : null, vn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Re(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => mi(e.parent),
    $root: (e) => mi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ii(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = zo.bind(e.proxy)),
    $watch: (e) => Ft
  })
), Ys = (e, t) => e !== ae && !e.__isScriptSetup && ie(e, t), mc = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: a } = e;
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
        if (Ys(s, t))
          return o[t] = 1, s[t];
        if (ie(r, t))
          return o[t] = 3, r[t];
        if (n !== ae && ie(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = vn[t];
    let A, d;
    if (c)
      return t === "$attrs" && ye(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (A = l.__cssModules) && (A = A[t])
    )
      return A;
    if (n !== ae && ie(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, ie(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return Ys(i, t) ? (i[t] = n, !0) : ie(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(n[l] || Ys(t, l) || ie(r, l) || ie(s, l) || ie(vn, l) || ie(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Po() {
  return {
    app: null,
    config: {
      isNativeTag: Qr,
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
let gc = 0;
function xc(e, t) {
  return function(s, i = null) {
    ne(s) || (s = Re({}, s)), i != null && !ce(i) && (i = null);
    const r = Po(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = r.app = {
      _uid: gc++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Zc,
      get config() {
        return r.config;
      },
      set config(A) {
      },
      use(A, ...d) {
        return o.has(A) || (A && ne(A.install) ? (o.add(A), A.install(c, ...d)) : ne(A) && (o.add(A), A(c, ...d))), c;
      },
      mixin(A) {
        return c;
      },
      component(A, d) {
        return d ? (r.components[A] = d, c) : r.components[A];
      },
      directive(A, d) {
        return d ? (r.directives[A] = d, c) : r.directives[A];
      },
      mount(A, d, h) {
        if (!a) {
          const x = c._ceVNode || Me(s, i);
          return x.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(x, A, h), a = !0, c._container = A, A.__vue_app__ = c, Cs(x.component);
        }
      },
      onUnmount(A) {
        l.push(A);
      },
      unmount() {
        a && (qe(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(A, d) {
        return r.provides[A] = d, c;
      },
      runWithContext(A) {
        const d = tn;
        tn = c;
        try {
          return A();
        } finally {
          tn = d;
        }
      }
    };
    return c;
  };
}
let tn = null;
const yc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${De(t)}Modifiers`] || e[`${Wt(t)}Modifiers`];
function vc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ae;
  let i = n;
  const r = t.startsWith("update:"), o = r && yc(s, t.slice(7));
  o && (o.trim && (i = n.map((A) => de(A) ? A.trim() : A)), o.number && (i = i.map(ys)));
  let l, a = s[l = js(t)] || // also try camelCase event handler (#2249)
  s[l = js(De(t))];
  !a && r && (a = s[l = js(Wt(t))]), a && qe(
    a,
    e,
    6,
    i
  );
  const c = s[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, qe(
      c,
      e,
      6,
      i
    );
  }
}
function bc(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {};
  return r ? (Z(r) ? r.forEach((l) => o[l] = null) : Re(o, r), ce(e) && s.set(e, o), o) : (ce(e) && s.set(e, null), null);
}
function Ss(e, t) {
  return !e || !ms(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, Wt(t)) || ie(e, t));
}
function Ar(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: c,
    renderCache: A,
    props: d,
    data: h,
    setupState: x,
    ctx: k,
    inheritAttrs: v
  } = e, F = ss(e);
  let j, T;
  try {
    if (n.shapeFlag & 4) {
      const g = i || s, w = g;
      j = He(
        c.call(
          w,
          g,
          A,
          d,
          x,
          h,
          k
        )
      ), T = l;
    } else {
      const g = t;
      j = He(
        g.length > 1 ? g(
          d,
          { attrs: l, slots: o, emit: a }
        ) : g(
          d,
          null
        )
      ), T = t.props ? l : wc(l);
    }
  } catch (g) {
    Ot.length = 0, _s(g, e, 1), j = Me(at);
  }
  let y = j;
  if (T && v !== !1) {
    const g = Object.keys(T), { shapeFlag: w } = y;
    g.length && w & 7 && (r && g.some(gs) && (T = kc(
      T,
      r
    )), y = nn(y, T, !1, !0));
  }
  if (n.dirs && (y = nn(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const g = $s(y.type) && Mo(y) || y;
    Ti(g, n.transition);
  }
  return j = y, ss(F), j;
}
const wc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ms(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, kc = (e, t) => {
  const n = {};
  for (const s in e)
    (!gs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function _c(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, c = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? ur(s, o, c) : !!o;
    if (a & 8) {
      const A = t.dynamicProps;
      for (let d = 0; d < A.length; d++) {
        const h = A[d];
        if (No(o, s, h) && !Ss(c, h))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? ur(s, o, c) : !0 : !!o;
  return !1;
}
function ur(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (No(t, e, r) && !Ss(n, r))
      return !0;
  }
  return !1;
}
function No(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && ce(s) && ce(i) ? !gt(s, i) : s !== i;
}
function zc({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Do = {}, Fo = () => Object.create(Do), Ro = (e) => Object.getPrototypeOf(e) === Do;
function $c(e, t, n, s = !1) {
  const i = {}, r = Fo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Oo(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Ya(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Sc(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ X(i), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const A = e.vnode.dynamicProps;
      for (let d = 0; d < A.length; d++) {
        let h = A[d];
        if (Ss(e.emitsOptions, h))
          continue;
        const x = t[h];
        if (a)
          if (ie(r, h))
            x !== r[h] && (r[h] = x, c = !0);
          else {
            const k = De(h);
            i[k] = gi(
              a,
              l,
              k,
              x,
              e,
              !1
            );
          }
        else
          x !== r[h] && (r[h] = x, c = !0);
      }
    }
  } else {
    Oo(e, t, i, r) && (c = !0);
    let A;
    for (const d in l)
      (!t || // for camelCase
      !ie(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((A = Wt(d)) === d || !ie(t, A))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[A] !== void 0) && (i[d] = gi(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== l)
      for (const d in r)
        (!t || !ie(t, d)) && (delete r[d], c = !0);
  }
  c && it(e.attrs, "set", "");
}
function Oo(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (hn(a))
        continue;
      const c = t[a];
      let A;
      i && ie(i, A = De(a)) ? !r || !r.includes(A) ? n[A] = c : (l || (l = {}))[A] = c : Ss(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ X(n), c = l || ae;
    for (let A = 0; A < r.length; A++) {
      const d = r[A];
      n[d] = gi(
        i,
        a,
        d,
        c[d],
        e,
        !ie(c, d)
      );
    }
  }
  return o;
}
function gi(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = ie(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && ne(a)) {
        const { propsDefaults: c } = i;
        if (n in c)
          s = c[n];
        else {
          const A = Di(i);
          s = c[n] = a.call(
            null,
            t
          ), A();
        }
      } else
        s = a;
      i.ce && i.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Wt(n)) && (s = !0));
  }
  return s;
}
function Ec(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  if (!r)
    return ce(e) && s.set(e, Pt), Pt;
  if (Z(r))
    for (let c = 0; c < r.length; c++) {
      const A = De(r[c]);
      dr(A) && (o[A] = ae);
    }
  else if (r)
    for (const c in r) {
      const A = De(c);
      if (dr(A)) {
        const d = r[c], h = o[A] = Z(d) || ne(d) ? { type: d } : Re({}, d), x = h.type;
        let k = !1, v = !0;
        if (Z(x))
          for (let F = 0; F < x.length; ++F) {
            const j = x[F], T = ne(j) && j.name;
            if (T === "Boolean") {
              k = !0;
              break;
            } else T === "String" && (v = !1);
          }
        else
          k = ne(x) && x.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = k, h[
          1
          /* shouldCastTrue */
        ] = v, (k || ie(h, "default")) && l.push(A);
      }
    }
  const a = [o, l];
  return ce(e) && s.set(e, a), a;
}
function dr(e) {
  return e[0] !== "$" && !hn(e);
}
const Pi = (e) => e === "_" || e === "_ctx" || e === "$stable", Ni = (e) => Z(e) ? e.map(He) : [He(e)], Cc = (e, t, n) => {
  if (t._n)
    return t;
  const s = ic((...i) => Ni(t(...i)), n);
  return s._c = !1, s;
}, Lo = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Pi(i)) continue;
    const r = e[i];
    if (ne(r))
      t[i] = Cc(i, r, s);
    else if (r != null) {
      const o = Ni(r);
      t[i] = () => o;
    }
  }
}, jo = (e, t) => {
  const n = Ni(t);
  e.slots.default = () => n;
}, Bo = (e, t, n) => {
  for (const s in t)
    (n || !Pi(s)) && (e[s] = t[s]);
}, Mc = (e, t, n) => {
  const s = e.slots = Fo();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Bo(s, t, n), n && io(s, "_", i, !0)) : Lo(t, s);
  } else t && jo(e, t);
}, Ic = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = ae;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Bo(i, t, n) : (r = !t.$stable, Lo(t, i)), o = t;
  } else t && (jo(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Pi(l) && o[l] == null && delete i[l];
}, ke = Fc;
function Tc(e) {
  return Pc(e);
}
function Pc(e, t) {
  const n = vs();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: A,
    parentNode: d,
    nextSibling: h,
    setScopeId: x = Ft,
    insertStaticContent: k
  } = e, v = (p, m, b, I = null, S = null, C = null, L = void 0, O = null, D = !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !un(p, m) && (I = jn(p), we(p, S, C, !0), p = null), m.patchFlag === -2 && (D = !1, m.dynamicChildren = null), m.dynamicChildren && p && p.dynamicChildren && p.dynamicChildren.hasOnce && (m.dynamicChildren === Pt && (m.dynamicChildren = []), m.dynamicChildren.hasOnce = !0);
    const { type: E, ref: G, shapeFlag: V } = m;
    switch (E) {
      case Es:
        F(p, m, b, I);
        break;
      case at:
        j(p, m, b, I);
        break;
      case Ks:
        p == null && T(m, b, I, L);
        break;
      case Q:
        oe(
          p,
          m,
          b,
          I,
          S,
          C,
          L,
          O,
          D
        );
        break;
      default:
        V & 1 ? w(
          p,
          m,
          b,
          I,
          S,
          C,
          L,
          O,
          D
        ) : V & 6 ? Kt(
          p,
          m,
          b,
          I,
          S,
          C,
          L,
          O,
          D
        ) : (V & 64 || V & 128) && E.process(
          p,
          m,
          b,
          I,
          S,
          C,
          L,
          O,
          D,
          an
        );
    }
    G != null && S ? xn(G, p && p.ref, C, m || p, !m) : G == null && p && p.ref != null && xn(p.ref, null, C, p, !0);
  }, F = (p, m, b, I) => {
    if (p == null)
      s(
        m.el = l(m.children),
        b,
        I
      );
    else {
      const S = m.el = p.el;
      m.children !== p.children && c(S, m.children);
    }
  }, j = (p, m, b, I) => {
    p == null ? s(
      m.el = a(m.children || ""),
      b,
      I
    ) : m.el = p.el;
  }, T = (p, m, b, I) => {
    [p.el, p.anchor] = k(
      p.children,
      m,
      b,
      I,
      p.el,
      p.anchor
    );
  }, y = ({ el: p, anchor: m }, b, I) => {
    let S;
    for (; p && p !== m; )
      S = h(p), s(p, b, I), p = S;
    s(m, b, I);
  }, g = ({ el: p, anchor: m }) => {
    let b;
    for (; p && p !== m; )
      b = h(p), i(p), p = b;
    i(m);
  }, w = (p, m, b, I, S, C, L, O, D) => {
    if (m.type === "svg" ? L = "svg" : m.type === "math" && (L = "mathml"), p == null)
      B(
        m,
        b,
        I,
        S,
        C,
        L,
        O,
        D
      );
    else {
      const E = p.el && p.el._isVueCE ? p.el : null;
      try {
        E && E._beginPatch(), _(
          p,
          m,
          S,
          C,
          L,
          O,
          D
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, B = (p, m, b, I, S, C, L, O) => {
    let D, E;
    const { props: G, shapeFlag: V, transition: H, dirs: K } = p;
    if (D = p.el = o(
      p.type,
      C,
      G && G.is,
      G
    ), V & 8 ? A(D, p.children) : V & 16 && M(
      p.children,
      D,
      null,
      I,
      S,
      Gs(p, C),
      L,
      O
    ), K && Et(p, null, I, "created"), U(D, p, p.scopeId, L, I), G) {
      for (const se in G)
        se !== "value" && !hn(se) && r(D, se, null, G[se], C, I);
      "value" in G && r(D, "value", null, G.value, C), (E = G.onVnodeBeforeMount) && Ve(E, I, p);
    }
    K && Et(p, null, I, "beforeMount");
    const q = Nc(S, H);
    q && H.beforeEnter(D), s(D, m, b), ((E = G && G.onVnodeMounted) || q || K) && ke(() => {
      try {
        E && Ve(E, I, p), q && H.enter(D), K && Et(p, null, I, "mounted");
      } finally {
      }
    }, S);
  }, U = (p, m, b, I, S) => {
    if (b && x(p, b), I)
      for (let C = 0; C < I.length; C++)
        x(p, I[C]);
    if (S) {
      let C = S.subTree;
      if (m === C || Ho(C.type) && (C.ssContent === m || C.ssFallback === m)) {
        const L = S.vnode;
        U(
          p,
          L,
          L.scopeId,
          L.slotScopeIds,
          S.parent
        );
      }
    }
  }, M = (p, m, b, I, S, C, L, O, D = 0) => {
    for (let E = D; E < p.length; E++) {
      const G = p[E] = O ? st(p[E]) : He(p[E]);
      v(
        null,
        G,
        m,
        b,
        I,
        S,
        C,
        L,
        O
      );
    }
  }, _ = (p, m, b, I, S, C, L) => {
    const O = m.el = p.el;
    let { patchFlag: D, dynamicChildren: E, dirs: G } = m;
    D |= p.patchFlag & 16;
    const V = p.props || ae, H = m.props || ae;
    let K;
    if (b && Ct(b, !1), (K = H.onVnodeBeforeUpdate) && Ve(K, b, m, p), G && Et(m, p, b, "beforeUpdate"), b && Ct(b, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    E && (!p.dynamicChildren || p.dynamicChildren.length !== E.length) && (D = 0, L = !1, E = null), (V.innerHTML && H.innerHTML == null || V.textContent && H.textContent == null) && A(O, ""), E ? R(
      p.dynamicChildren,
      E,
      O,
      b,
      I,
      Gs(m, S),
      C
    ) : L || Zt(
      p,
      m,
      O,
      null,
      b,
      I,
      Gs(m, S),
      C,
      !1
    ), D > 0) {
      if (D & 16)
        re(O, V, H, b, S);
      else if (D & 2 && V.class !== H.class && r(O, "class", null, H.class, S), D & 4 && r(O, "style", V.style, H.style, S), D & 8) {
        const q = m.dynamicProps;
        for (let se = 0; se < q.length; se++) {
          const te = q[se], ue = V[te], he = H[te];
          (he !== ue || te === "value") && r(O, te, ue, he, S, b);
        }
      }
      D & 1 && p.children !== m.children && A(O, m.children);
    } else !L && E == null && re(O, V, H, b, S);
    ((K = H.onVnodeUpdated) || G) && ke(() => {
      K && Ve(K, b, m, p), G && Et(m, p, b, "updated");
    }, I);
  }, R = (p, m, b, I, S, C, L) => {
    for (let O = 0; O < m.length; O++) {
      const D = p[O], E = m[O], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === Q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !un(D, E) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? d(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          b
        )
      );
      v(
        D,
        E,
        G,
        null,
        I,
        S,
        C,
        L,
        !0
      );
    }
  }, re = (p, m, b, I, S) => {
    if (m !== b) {
      if (m !== ae)
        for (const C in m)
          !hn(C) && !(C in b) && r(
            p,
            C,
            m[C],
            null,
            S,
            I
          );
      for (const C in b) {
        if (hn(C)) continue;
        const L = b[C], O = m[C];
        L !== O && C !== "value" && r(p, C, O, L, S, I);
      }
      "value" in b && r(p, "value", m.value, b.value, S);
    }
  }, oe = (p, m, b, I, S, C, L, O, D) => {
    const E = m.el = p ? p.el : l(""), G = m.anchor = p ? p.anchor : l("");
    let { patchFlag: V, dynamicChildren: H, slotScopeIds: K } = m;
    K && (O = O ? O.concat(K) : K), p == null ? (s(E, b, I), s(G, b, I), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      b,
      G,
      S,
      C,
      L,
      O,
      D
    )) : V > 0 && V & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === H.length ? (R(
      p.dynamicChildren,
      H,
      b,
      S,
      C,
      L,
      O
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || S && m === S.subTree) && Vo(
      p,
      m,
      !0
      /* shallow */
    )) : Zt(
      p,
      m,
      b,
      G,
      S,
      C,
      L,
      O,
      D
    );
  }, Kt = (p, m, b, I, S, C, L, O, D) => {
    m.slotScopeIds = O, p == null ? m.shapeFlag & 512 ? S.ctx.activate(
      m,
      b,
      I,
      L,
      D
    ) : fe(
      m,
      b,
      I,
      S,
      C,
      L,
      D
    ) : _e(p, m, D);
  }, fe = (p, m, b, I, S, C, L) => {
    const O = p.component = Vc(
      p,
      I,
      S
    );
    if (Io(p) && (O.ctx.renderer = an), Wc(O, !1, L), O.asyncDep) {
      if (S && S.registerDep(O, zt, L), !p.el) {
        const D = O.subTree = Me(at);
        j(null, D, m, b), p.placeholder = D.el;
      }
    } else
      zt(
        O,
        p,
        m,
        b,
        S,
        C,
        L
      );
  }, _e = (p, m, b) => {
    const I = m.component = p.component;
    if (_c(p, m, b))
      if (I.asyncDep && !I.asyncResolved) {
        m.el = p.el, $t(I, m, b);
        return;
      } else
        I.next = m, I.update();
    else
      m.el = p.el, I.vnode = m;
  }, zt = (p, m, b, I, S, C, L) => {
    const O = () => {
      if (p.isMounted) {
        let { next: V, bu: H, u: K, parent: q, vnode: se } = p;
        {
          const je = Uo(p);
          if (je) {
            V && (V.el = se.el, $t(p, V, L)), je.asyncDep.then(() => {
              ke(() => {
                p.isUnmounted || E();
              }, S);
            });
            return;
          }
        }
        let te = V, ue;
        Ct(p, !1), V ? (V.el = se.el, $t(p, V, L)) : V = se, H && Gn(H), (ue = V.props && V.props.onVnodeBeforeUpdate) && Ve(ue, q, V, se), Ct(p, !0);
        const he = Ar(p), Le = p.subTree;
        p.subTree = he, v(
          Le,
          he,
          // parent may have changed if it's in a teleport
          d(Le.el),
          // anchor may have changed if it's in a fragment
          jn(Le),
          p,
          S,
          C
        ), V.el = he.el, te === null && zc(p, he.el), K && ke(K, S), (ue = V.props && V.props.onVnodeUpdated) && ke(
          () => Ve(ue, q, V, se),
          S
        );
      } else {
        let V;
        const { el: H, props: K } = m, { bm: q, m: se, parent: te, root: ue, type: he } = p, Le = yn(m);
        Ct(p, !1), q && Gn(q), !Le && (V = K && K.onVnodeBeforeMount) && Ve(V, te, m), Ct(p, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            he,
            p.parent ? p.parent.type : void 0
          );
          const je = p.subTree = Ar(p);
          v(
            null,
            je,
            b,
            I,
            p,
            S,
            C
          ), m.el = je.el;
        }
        if (se && ke(se, S), !Le && (V = K && K.onVnodeMounted)) {
          const je = m;
          ke(
            () => Ve(V, te, je),
            S
          );
        }
        (m.shapeFlag & 256 || te && yn(te.vnode) && te.vnode.shapeFlag & 256) && p.a && ke(p.a, S), p.isMounted = !0, m = b = I = null;
      }
    };
    p.scope.on();
    const D = p.effect = new ao(O);
    p.scope.off();
    const E = p.update = D.run.bind(D), G = p.job = D.runIfDirty.bind(D);
    G.i = p, G.id = p.uid, D.scheduler = () => Ii(G), Ct(p, !0), E();
  }, $t = (p, m, b) => {
    m.component = p;
    const I = p.vnode.props;
    p.vnode = m, p.next = null, Sc(p, m.props, I, b), Ic(p, m.children, b), xt(), lr(p), yt();
  }, Zt = (p, m, b, I, S, C, L, O, D = !1) => {
    const E = p && p.children, G = p ? p.shapeFlag : 0, V = m.children, { patchFlag: H, shapeFlag: K } = m;
    if (H > 0) {
      if (H & 128) {
        Se(
          E,
          V,
          b,
          I,
          S,
          C,
          L,
          O,
          D
        );
        return;
      } else if (H & 256) {
        Ln(
          E,
          V,
          b,
          I,
          S,
          C,
          L,
          O,
          D
        );
        return;
      }
    }
    K & 8 ? (G & 16 && ln(E, S, C), V !== E && A(b, V)) : G & 16 ? K & 16 ? Se(
      E,
      V,
      b,
      I,
      S,
      C,
      L,
      O,
      D
    ) : ln(E, S, C, !0) : (G & 8 && A(b, ""), K & 16 && M(
      V,
      b,
      I,
      S,
      C,
      L,
      O,
      D
    ));
  }, Ln = (p, m, b, I, S, C, L, O, D) => {
    p = p || Pt, m = m || Pt;
    const E = p.length, G = m.length, V = Math.min(E, G);
    let H;
    for (H = 0; H < V; H++) {
      const K = m[H] = D ? st(m[H]) : He(m[H]);
      v(
        p[H],
        K,
        b,
        null,
        S,
        C,
        L,
        O,
        D
      );
    }
    E > G ? ln(
      p,
      S,
      C,
      !0,
      !1,
      V
    ) : M(
      m,
      b,
      I,
      S,
      C,
      L,
      O,
      D,
      V
    );
  }, Se = (p, m, b, I, S, C, L, O, D) => {
    let E = 0;
    const G = m.length;
    let V = p.length - 1, H = G - 1;
    for (; E <= V && E <= H; ) {
      const K = p[E], q = m[E] = D ? st(m[E]) : He(m[E]);
      if (un(K, q))
        v(
          K,
          q,
          b,
          null,
          S,
          C,
          L,
          O,
          D
        );
      else
        break;
      E++;
    }
    for (; E <= V && E <= H; ) {
      const K = p[V], q = m[H] = D ? st(m[H]) : He(m[H]);
      if (un(K, q))
        v(
          K,
          q,
          b,
          null,
          S,
          C,
          L,
          O,
          D
        );
      else
        break;
      V--, H--;
    }
    if (E > V) {
      if (E <= H) {
        const K = H + 1, q = K < G ? m[K].el : I;
        for (; E <= H; )
          v(
            null,
            m[E] = D ? st(m[E]) : He(m[E]),
            b,
            q,
            S,
            C,
            L,
            O,
            D
          ), E++;
      }
    } else if (E > H)
      for (; E <= V; )
        we(p[E], S, C, !0), E++;
    else {
      const K = E, q = E, se = /* @__PURE__ */ new Map();
      for (E = q; E <= H; E++) {
        const ze = m[E] = D ? st(m[E]) : He(m[E]);
        ze.key != null && se.set(ze.key, E);
      }
      let te, ue = 0;
      const he = H - q + 1;
      let Le = !1, je = 0;
      const cn = new Array(he);
      for (E = 0; E < he; E++) cn[E] = 0;
      for (E = K; E <= V; E++) {
        const ze = p[E];
        if (ue >= he) {
          we(ze, S, C, !0);
          continue;
        }
        let Be;
        if (ze.key != null)
          Be = se.get(ze.key);
        else
          for (te = q; te <= H; te++)
            if (cn[te - q] === 0 && un(ze, m[te])) {
              Be = te;
              break;
            }
        Be === void 0 ? we(ze, S, C, !0) : (cn[Be - q] = E + 1, Be >= je ? je = Be : Le = !0, v(
          ze,
          m[Be],
          b,
          null,
          S,
          C,
          L,
          O,
          D
        ), ue++);
      }
      const Qi = Le ? Dc(cn) : Pt;
      for (te = Qi.length - 1, E = he - 1; E >= 0; E--) {
        const ze = q + E, Be = m[ze], Xi = m[ze + 1], er = ze + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Xi.el || Wo(Xi)
        ) : I;
        cn[E] === 0 ? v(
          null,
          Be,
          b,
          er,
          S,
          C,
          L,
          O,
          D
        ) : Le && (te < 0 || E !== Qi[te] ? St(Be, b, er, 2) : te--);
      }
    }
  }, St = (p, m, b, I, S = null) => {
    const { el: C, type: L, transition: O, children: D, shapeFlag: E } = p;
    if (E & 6) {
      St(p.component.subTree, m, b, I);
      return;
    }
    if (E & 128) {
      p.suspense.move(m, b, I);
      return;
    }
    if (E & 64) {
      L.move(p, m, b, an);
      return;
    }
    if (L === Q) {
      s(C, m, b);
      for (let V = 0; V < D.length; V++)
        St(D[V], m, b, I);
      s(p.anchor, m, b);
      return;
    }
    if (L === Ks) {
      y(p, m, b);
      return;
    }
    if (I !== 2 && E & 1 && O)
      if (I === 0)
        O.persisted && !C[Hs] ? s(C, m, b) : (O.beforeEnter(C), s(C, m, b), ke(() => O.enter(C), S));
      else {
        const { leave: V, delayLeave: H, afterLeave: K } = O, q = () => {
          p.ctx.isUnmounted ? i(C) : s(C, m, b);
        }, se = () => {
          const te = C._isLeaving || !!C[Hs];
          C._isLeaving && C[Hs](
            !0
            /* cancelled */
          ), O.persisted && !te ? q() : V(C, () => {
            q(), K && K();
          });
        };
        H ? H(C, q, se) : se();
      }
    else
      s(C, m, b);
  }, we = (p, m, b, I = !1, S = !1) => {
    const {
      type: C,
      props: L,
      ref: O,
      children: D,
      dynamicChildren: E,
      shapeFlag: G,
      patchFlag: V,
      dirs: H,
      cacheIndex: K,
      memo: q
    } = p;
    if ((V === -2 || E && E.hasOnce) && (S = !1), O != null && (xt(), xn(O, null, b, p, !0), yt()), K != null && (!p.ctx || p.ctx === m) && (m.renderCache[K] = void 0), G & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const se = G & 1 && H, te = !yn(p);
    let ue;
    if (te && (ue = L && L.onVnodeBeforeUnmount) && Ve(ue, m, p), G & 6)
      fa(p.component, b, I);
    else {
      if (G & 128) {
        p.suspense.unmount(b, I);
        return;
      }
      se && Et(p, null, m, "beforeUnmount"), G & 64 ? p.type.remove(
        p,
        m,
        b,
        an,
        I
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== Q || V > 0 && V & 64) ? ln(
        E,
        m,
        b,
        !1,
        !0
      ) : (C === Q && V & 384 || !S && G & 16) && ln(D, m, b), I && Ji(p);
    }
    const he = q != null && K == null;
    (te && (ue = L && L.onVnodeUnmounted) || se || he) && ke(() => {
      ue && Ve(ue, m, p), se && Et(p, null, m, "unmounted"), he && (p.el = null);
    }, b);
  }, Ji = (p) => {
    const { type: m, el: b, anchor: I, transition: S } = p;
    if (m === Q) {
      da(b, I);
      return;
    }
    if (m === Ks) {
      g(p), S && !S.persisted && S.afterLeave && S.afterLeave();
      return;
    }
    const C = () => {
      i(b), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (p.shapeFlag & 1 && S && !S.persisted) {
      const { leave: L, delayLeave: O } = S, D = () => L(b, C);
      O ? O(p.el, C, D) : D();
    } else
      C();
  }, da = (p, m) => {
    let b;
    for (; p !== m; )
      b = h(p), i(p), p = b;
    i(m);
  }, fa = (p, m, b) => {
    const { bum: I, scope: S, job: C, subTree: L, um: O, m: D, a: E } = p;
    fr(D), fr(E), I && Gn(I), S.stop(), C ? (C.flags |= 8, we(L, p, m, b)) : p.vnode.el && L && (L.transition = p.vnode.transition, we(L, p, m, b)), O && ke(O, m), ke(() => {
      p.isUnmounted = !0;
    }, m);
  }, ln = (p, m, b, I = !1, S = !1, C = 0) => {
    for (let L = C; L < p.length; L++)
      we(p[L], m, b, I, S);
  }, jn = (p) => {
    if (p.shapeFlag & 6)
      return jn(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = h(p.anchor || p.el), b = m && m[cc];
    return b ? h(b) : m;
  };
  let Ls = !1;
  const qi = (p, m, b) => {
    let I;
    p == null ? m._vnode && (we(m._vnode, null, null, !0), I = m._vnode.component) : v(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      b
    ), m._vnode = p, Ls || (Ls = !0, lr(I), So(), Ls = !1);
  }, an = {
    p: v,
    um: we,
    m: St,
    r: Ji,
    mt: fe,
    mc: M,
    pc: Zt,
    pbc: R,
    n: jn,
    o: e
  };
  return {
    render: qi,
    hydrate: void 0,
    createApp: xc(qi)
  };
}
function Gs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ct({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Nc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Vo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (Z(s) && Z(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = st(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && Vo(o, l)), l.type === Es && (l.patchFlag === -1 && (l = i[r] = st(l)), l.el = o.el), l.type === at && !l.el && (l.el = o.el);
    }
}
function Dc(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (i = n[n.length - 1], e[i] < c) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < c ? r = l + 1 : o = l;
      c < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function Uo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Uo(t);
}
function fr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Wo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Wo(t.subTree) : null;
}
const Ho = (e) => e.__isSuspense;
function Fc(e, t) {
  t && t.pendingBranch ? Z(e) ? t.effects.push(...e) : t.effects.push(e) : sc(e);
}
const Q = /* @__PURE__ */ Symbol.for("v-fgt"), Es = /* @__PURE__ */ Symbol.for("v-txt"), at = /* @__PURE__ */ Symbol.for("v-cmt"), Ks = /* @__PURE__ */ Symbol.for("v-stc"), Ot = [];
let $e = null;
function z(e = !1) {
  Ot.push($e = e ? null : []);
}
function Yo() {
  Ot.pop(), $e = Ot[Ot.length - 1] || null;
}
let zn = 1;
function pr(e, t = !1) {
  zn += e, e < 0 && $e && t && ($e.hasOnce = !0);
}
function Go(e) {
  return e.dynamicChildren = zn > 0 ? $e || Pt : null, Yo(), zn > 0 && $e && $e.push(e), e;
}
function $(e, t, n, s, i, r) {
  return Go(
    u(
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
function Ge(e, t, n, s, i) {
  return Go(
    Me(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function Ko(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function un(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zo = ({ key: e }) => e ?? null, Kn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || /* @__PURE__ */ be(e) || ne(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, i = null, r = e === Q ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zo(t),
    ref: t && Kn(t),
    scopeId: Co,
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
    ctx: Ee
  };
  return l ? (rs(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= de(n) ? 8 : 16), zn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  $e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && $e.push(a), a;
}
const Me = Rc;
function Rc(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === hc) && (e = at), Ko(e)) {
    const l = nn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && rs(l, n), zn > 0 && !r && $e && (l.shapeFlag & 6 ? $e[$e.indexOf(e)] = l : $e.push(l)), l.patchFlag = -2, l;
  }
  if (Kc(e) && (e = e.__vccOpts), t) {
    t = Oc(t);
    let { class: l, style: a } = t;
    l && !de(l) && (t.class = ee(l)), ce(a) && (/* @__PURE__ */ Mi(a) && !Z(a) && (a = Re({}, a)), t.style = bs(a));
  }
  const o = de(e) ? 1 : Ho(e) ? 128 : $s(e) ? 64 : ce(e) ? 4 : ne(e) ? 2 : 0;
  return u(
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
function Oc(e) {
  return e ? /* @__PURE__ */ Mi(e) || Ro(e) ? Re({}, e) : e : null;
}
function nn(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, c = t ? Lc(i || {}, t) : i, A = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Zo(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Z(r) ? r.concat(Kn(t)) : [r, Kn(t)] : Kn(t)
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
    patchFlag: t && e.type !== Q ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && nn(e.ssContent),
    ssFallback: e.ssFallback && nn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && Ti(
    A,
    a.clone(A)
  ), A;
}
function Ne(e = " ", t = 0) {
  return Me(Es, null, e, t);
}
function W(e = "", t = !1) {
  return t ? (z(), Ge(at, null, e)) : Me(at, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? Me(at) : Z(e) ? Me(
    Q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ko(e) ? st(e) : Me(Es, null, String(e));
}
function st(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : nn(e);
}
function rs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Z(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), rs(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Ro(t) ? t._ctx = Ee : i === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ne(t)) {
    if (s & 65) {
      rs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ee }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Ne(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Lc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = ee([t.class, s.class]));
      else if (i === "style")
        t.style = bs([t.style, s.style]);
      else if (ms(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(Z(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !gs(i) && (t[i] = o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Ve(e, t, n, s = null) {
  qe(e, t, 7, [
    n,
    s
  ]);
}
const jc = Po();
let Bc = 0;
function Vc(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || jc, r = {
    uid: Bc++,
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
    scope: new Sa(
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
    propsOptions: Ec(s, i),
    emitsOptions: bc(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ae,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ae,
    data: ae,
    props: ae,
    attrs: ae,
    slots: ae,
    refs: ae,
    setupState: ae,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = vc.bind(null, r), e.ce && e.ce(r), r;
}
let bt = null;
const Uc = () => bt || Ee;
let os, $n;
{
  const e = vs(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  os = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => bt = n
  ), $n = t(
    "__VUE_SSR_SETTERS__",
    (n) => Sn = n
  );
}
const Di = (e) => {
  const t = bt;
  return os(e), e.scope.on(), () => {
    e.scope.off(), os(t);
  };
}, hr = () => {
  bt && bt.scope.off(), os(null);
};
function Jo(e) {
  return e.vnode.shapeFlag & 4;
}
let Sn = !1;
function Wc(e, t = !1, n = !1) {
  t && $n(t);
  const { props: s, children: i } = e.vnode, r = Jo(e);
  $c(e, s, r, t), Mc(e, i, n || t);
  const o = r ? Hc(e, t) : void 0;
  return t && $n(!1), o;
}
function Hc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, mc);
  const { setup: s } = n;
  if (s) {
    xt();
    const i = e.setupContext = s.length > 1 ? Gc(e) : null, r = Di(e), o = Dn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = eo(o);
    if (yt(), r(), (l || e.sp) && !yn(e) && uc(e), l) {
      if (o.then(hr, hr), t)
        return o.then((a) => {
          $n(!0);
          try {
            mr(e, a, t);
          } finally {
            $n(!1);
          }
        }).catch((a) => {
          _s(a, e, 0);
        });
      e.asyncDep = o;
    } else
      mr(e, o);
  } else
    qo(e);
}
function mr(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ce(t) && (e.setupState = ko(t)), qo(e);
}
function qo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ft);
}
const Yc = {
  get(e, t) {
    return ye(e, "get", ""), e[t];
  }
};
function Gc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Yc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Cs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ko(Ga(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in vn)
        return vn[n](e);
    },
    has(t, n) {
      return n in t || n in vn;
    }
  })) : e.proxy;
}
function Kc(e) {
  return ne(e) && "__vccOpts" in e;
}
const Y = (e, t) => /* @__PURE__ */ Qa(e, t, Sn), Zc = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xi;
const gr = typeof window < "u" && window.trustedTypes;
if (gr)
  try {
    xi = /* @__PURE__ */ gr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Qo = xi ? (e) => xi.createHTML(e) : (e) => e, Jc = "http://www.w3.org/2000/svg", qc = "http://www.w3.org/1998/Math/MathML", nt = typeof document < "u" ? document : null, xr = nt && /* @__PURE__ */ nt.createElement("template"), Qc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? nt.createElementNS(Jc, e) : t === "mathml" ? nt.createElementNS(qc, e) : n ? nt.createElement(e, { is: n }) : nt.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => nt.createTextNode(e),
  createComment: (e) => nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => nt.querySelector(e),
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
      xr.innerHTML = Qo(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = xr.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
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
}, Xc = /* @__PURE__ */ Symbol("_vtc");
function eA(e, t, n) {
  const s = e[Xc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const yr = /* @__PURE__ */ Symbol("_vod"), tA = /* @__PURE__ */ Symbol("_vsh"), nA = /* @__PURE__ */ Symbol(""), sA = /(?:^|;)\s*display\s*:/;
function iA(e, t, n) {
  const s = e.style, i = de(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (de(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && fn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && fn(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null ? oA(
        e,
        o,
        !de(t) && t ? t[o] : void 0,
        l
      ) || fn(s, o, l) : fn(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[nA];
      o && (n += ";" + o), s.cssText = n, r = sA.test(n);
    }
  } else t && e.removeAttribute("style");
  yr in e && (e[yr] = r ? s.display : "", e[tA] && (s.display = "none"));
}
const Wn = /\s*!important$/;
function fn(e, t, n) {
  if (Z(n))
    n.forEach((s) => fn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    Wn.test(n) ? e.setProperty(t, n.replace(Wn, ""), "important") : e.setProperty(t, n);
  else {
    const s = rA(e, t);
    Wn.test(n) ? e.setProperty(
      Wt(s),
      n.replace(Wn, ""),
      "important"
    ) : e[s] = n;
  }
}
const vr = ["Webkit", "Moz", "ms"], Zs = {};
function rA(e, t) {
  const n = Zs[t];
  if (n)
    return n;
  let s = De(t);
  if (s !== "filter" && s in e)
    return Zs[t] = s;
  s = so(s);
  for (let i = 0; i < vr.length; i++) {
    const r = vr[i] + s;
    if (r in e)
      return Zs[t] = r;
  }
  return t;
}
function oA(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && de(s) && n === s;
}
const br = "http://www.w3.org/1999/xlink";
function wr(e, t, n, s, i, r = ka(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(br, t.slice(6, t.length)) : e.setAttributeNS(br, t, n) : n == null || r && !ro(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ze(n) ? String(n) : n
  );
}
function kr(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Qo(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = ro(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Tt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function lA(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const _r = /* @__PURE__ */ Symbol("_vei");
function aA(e, t, n, s, i = null) {
  const r = e[_r] || (e[_r] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = uA(t);
    if (s) {
      const c = r[t] = pA(
        s,
        i
      );
      Tt(e, l, c, a);
    } else o && (lA(e, l, o, a), r[t] = void 0);
  }
}
const cA = /(Once|Passive|Capture)$/, AA = /^on:?(?:Once|Passive|Capture)$/;
function uA(e) {
  let t, n;
  for (; (n = e.match(cA)) && !AA.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Wt(e.slice(2)), t];
}
let Js = 0;
const dA = /* @__PURE__ */ Promise.resolve(), fA = () => Js || (dA.then(() => Js = 0), Js = Date.now());
function pA(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (Z(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        r.call(s), s._stopped = !0;
      };
      const o = i.slice(), l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const c = o[a];
        c && qe(
          c,
          t,
          5,
          l
        );
      }
    } else
      qe(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = fA(), n;
}
const zr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hA = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? eA(e, s, o) : t === "style" ? iA(e, n, s) : ms(t) ? gs(t) || aA(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mA(e, t, s, o)) ? (kr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && wr(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (gA(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !de(s))) ? kr(e, De(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), wr(e, t, s, o));
};
function mA(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && zr(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return zr(t) && de(n) ? !1 : t in e;
}
function gA(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = De(t);
  return Array.isArray(n) ? n.some((i) => De(i) === s) : Object.keys(n).some((i) => De(i) === s);
}
const ls = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Z(t) ? (n) => Gn(t, n) : t;
};
function xA(e) {
  e.target.composing = !0;
}
function $r(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Nt = /* @__PURE__ */ Symbol("_assign"), Hn = /* @__PURE__ */ Symbol("_initialValue");
function qs(e, t, n) {
  return t && (e = e.trim()), n && (e = ys(e)), e;
}
const Qt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[Hn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Hn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Nt] = ls(i);
    const r = s || i.props && i.props.type === "number";
    Tt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Nt](qs(e.value, n, r));
    }), (n || r) && Tt(e, "change", () => {
      e.value = qs(e.value, n, r);
    }), t || (Tt(e, "compositionstart", xA), Tt(e, "compositionend", $r), Tt(e, "change", $r));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", r = e[Hn];
    delete e[Hn], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Nt](qs(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, o) {
    if (e[Nt] = ls(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? ys(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, Xo = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, Tt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? ys(as(a)) : as(a)
      ), r = e.multiple, o = r ? Lt(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        r,
        r ? Z(o) ? i.slice() : i : o
      ];
      try {
        e[Nt](o);
      } finally {
        zo(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[Nt] = ls(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Sr(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Nt] = ls(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !yA(t, n[1], n[0])) && Sr(e, t);
  }
};
function yA(e, t, n) {
  if (!n || Z(e)) return gt(e, t);
  if (Lt(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Sr(e, t) {
  const n = e.multiple, s = Z(t);
  if (!(n && !s && !Lt(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const o = e.options[i], l = as(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? o.selected = t.some((c) => String(c) === String(l)) : o.selected = $a(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (gt(as(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function as(e) {
  return "_value" in e ? e._value : e.value;
}
const vA = ["ctrl", "shift", "alt", "meta"], bA = {
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
  exact: (e, t) => vA.some((n) => e[`${n}Key`] && !t.includes(n))
}, wA = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = bA[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  }));
}, kA = /* @__PURE__ */ Re({ patchProp: hA }, Qc);
let Er;
function _A() {
  return Er || (Er = Tc(kA));
}
const zA = ((...e) => {
  const t = _A().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = SA(s);
    if (!i) return;
    const r = t._component;
    !ne(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, $A(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function $A(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function SA(e) {
  return de(e) ? document.querySelector(e) : e;
}
const EA = "zhonglou", CA = "钟楼", MA = "1.3.1", IA = "S", TA = 10, PA = "【副本进行中：钟楼】", NA = [], DA = { briefingName: "钟楼" }, FA = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, RA = { type: "nights", template: "剩余{n}夜" }, OA = "至第四日日出", LA = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], jA = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", BA = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], VA = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], UA = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], WA = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], HA = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], YA = {
  id: EA,
  name: CA,
  version: MA,
  level: IA,
  players: TA,
  token: PA,
  legacyKeys: NA,
  detect: DA,
  time: FA,
  remaining: RA,
  deadline: OA,
  roles: LA,
  rolesNote: jA,
  stateFields: BA,
  phases: VA,
  events: UA,
  docs: WA,
  danmaku: HA
}, GA = "jingjie", KA = "境界游乐园", ZA = "1.0.0", JA = "A", qA = "【副本进行中：境界游乐园】", QA = [], XA = { briefingName: "境界游乐园" }, eu = { type: "none" }, tu = { type: "fromPanel" }, nu = [], su = [], iu = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], ru = {
  id: GA,
  name: KA,
  version: ZA,
  level: JA,
  token: qA,
  legacyKeys: QA,
  detect: XA,
  time: eu,
  remaining: tu,
  phases: nu,
  events: su,
  docs: iu
}, ou = "kaoshi", lu = "考试", au = "1.1.0", cu = "A", Au = "【副本进行中：考试】", uu = [], du = { briefingName: "考试" }, fu = { type: "countdown", minutesPerRound: 3 }, pu = { type: "fromPanel" }, hu = "至考试结束", mu = [{ id: "main", name: "考试", cap: 100, next: null }], gu = [], xu = [], yu = {
  id: ou,
  name: lu,
  version: au,
  level: cu,
  token: Au,
  legacyKeys: uu,
  detect: du,
  time: fu,
  remaining: pu,
  deadline: hu,
  phases: mu,
  events: gu,
  docs: xu
}, vu = "xiyan", bu = "喜宴", wu = "1.1.1", ku = "D", _u = "【副本进行中：喜宴】", zu = [], $u = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, Su = { type: "countdown", minutesPerRound: 3 }, Eu = { type: "fromPanel" }, Cu = "至天亮", Mu = [{ id: "main", name: "喜宴", cap: 160, next: null }], Iu = [], Tu = [], Pu = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], Nu = {
  id: vu,
  name: bu,
  version: wu,
  level: ku,
  token: _u,
  legacyKeys: zu,
  detect: $u,
  time: Su,
  remaining: Eu,
  deadline: Cu,
  phases: Mu,
  events: Iu,
  docs: Tu,
  danmaku: Pu
}, Du = "youxi", Fu = "游戏", Ru = "1.1.1", Ou = "C", Lu = "【副本进行中：游戏】", ju = [], Bu = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Vu = { type: "countdown", minutesPerRound: 8 }, Uu = { type: "fromPanel" }, Wu = "至结算", Hu = [{ id: "main", name: "游戏", cap: 90, next: null }], Yu = [], Gu = [], Ku = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], Zu = {
  id: Du,
  name: Fu,
  version: Ru,
  level: Ou,
  token: Lu,
  legacyKeys: ju,
  detect: Bu,
  time: Vu,
  remaining: Uu,
  deadline: Wu,
  phases: Hu,
  events: Yu,
  docs: Gu,
  danmaku: Ku
}, Ju = "wuming", qu = "污名", Qu = "1.1.0", Xu = "B", ed = "4-8", td = "【副本进行中：污名】", nd = ["污名"], sd = { briefingName: "污名" }, id = { type: "countdown", minutesPerRound: 3 }, rd = { type: "countdown", template: "剩余{m}分钟" }, od = "至收播", ld = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], ad = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], cd = [], Ad = !0, ud = {
  id: Ju,
  name: qu,
  version: Qu,
  level: Xu,
  players: ed,
  token: td,
  legacyKeys: nd,
  detect: sd,
  time: id,
  remaining: rd,
  deadline: od,
  phases: ld,
  events: ad,
  docs: cd,
  disableLive: Ad
}, dd = "dusongshu", fd = "杜松树", pd = "1.0.0", hd = "A", md = 6, gd = "【副本进行中：杜松树】", xd = [], yd = { briefingName: "杜松树" }, vd = { type: "countdown", minutesPerRound: 30 }, bd = { type: "fromPanel" }, wd = "至第四日日出", kd = ["父亲", "继母", "玛琳", "男孩", "其余"], _d = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", zd = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], $d = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], Sd = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], Ed = [{ title: "游玩说明", md: `## 副本概况
- 名称：杜松树
- 等级：A
- 人数：6人（你、最多3名携带角色、其余为系统生成的参与者）
- 时限：60小时，至第四日日出
- 简报：找出是谁杀了那个孩子。

## 你需要知道的
1. 所有人在第一日日落时醒来，这是第1轮。每轮约半小时，最多120轮。
2. 想快进可以直接说，比如「睡到天亮」「跳到日落」。遇到必须由你亲自决定的事，快进会停下。
3. 本副本不压制位格、异能与道具。

## 身份牌

每个人醒来时，口袋里都有一块掌心大小的木牌，上面刻着一个身份。身份只是故事里的位置，与本人的性别、年龄无关。
牌面可能是：父亲、继母、玛琳、男孩、金匠、鞋匠、磨坊工。其中「继母」与「男孩」一定有人拿到。
每个人醒来的房间，与自己牌面上的身份一致。` }, { title: "屋子与院子", md: `## 公开环境

- 一栋两层的木屋，孤零零地立在一片杜松林中间。屋子很旧，但干净、暖和，像是一直有人住。
- 二楼有五间卧室，门上钉着小木牌：「父亲」「继母」「玛琳」「男孩」「客人」。「玛琳」房梳妆台的抽屉里叠着一条丝巾。
- 所有人在日落时分醒来。
- 一楼：厨房兼餐厅。一张长木桌，六把椅子，六只木碗。灶台上架着一口空铁锅，灶膛是冷的。灶台边是柴堆和一把斧头，柴都是松木和橡木。厨房角落放着一只沉重的橡木苹果箱，箱盖包着铁边，平时用一根木撑杆撑开，里面装满了红苹果。橱柜里有面包、奶酪和一小罐腌菜。
- 一楼墙上挂着一幅旧画像：一个男人、一个女人、一个女孩、一个男孩，站在一棵杜松树前。四个人的脸都很模糊，像被雨水泡过。
- 屋外是一小片院子。院子正中是一棵很老的杜松树。院角有一口石井。工具棚外墙上斜靠着一块旧磨盘。
- 院子外面四面都是杜松林。
- 杜松树上停着一只小鸟，羽毛红绿相间，脖子上有一圈金色。它一直停在那里，没有叫过。` }, { title: "故事书", md: `## 故事书

一楼壁炉边矮柜里有一本手绘插图的旧故事书，书名《杜松树》。
公开内容（任何人翻开都能读到）：
一个富人的妻子死了，葬在院子里的杜松树下，留下一个男孩。富人再娶，新妻子生了一个女孩，叫玛琳。新妻子厌恶那个男孩。有一天，她对男孩说：「去箱子里拿个苹果吧。」男孩弯腰去拿，她猛地合上箱盖。
她把男孩剁碎，炖成一锅肉。父亲回家，吃得很香，说这是他吃过最好吃的东西，一碗接一碗，把骨头扔到桌子底下。玛琳哭着把骨头一根根拾起来，用她最好的丝巾包好，埋在杜松树下。
杜松树动了起来，树里升起一团雾，雾里飞出一只美丽的鸟。鸟一遍遍地唱：
「母亲杀了我，
父亲吃了我，
妹妹玛琳拾起了我所有的骨头，
用丝巾包好，放在杜松树下。
叽微，叽微，我是多么漂亮的鸟！」
鸟飞到金匠那里唱歌，金匠送给它一条金链子；飞到鞋匠那里唱歌，鞋匠送给它一双红鞋子；飞到磨坊那里唱歌，磨坊工送给它一块磨盘。

——书到这里就断了。
最后一页被撕掉了，装订线上只剩一条不整齐的纸茬。` }], Cd = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], Md = {
  id: dd,
  name: fd,
  version: pd,
  level: hd,
  players: md,
  token: gd,
  legacyKeys: xd,
  detect: yd,
  time: vd,
  remaining: bd,
  deadline: wd,
  roles: kd,
  rolesNote: _d,
  phases: zd,
  events: $d,
  stateFields: Sd,
  docs: Ed,
  danmaku: Cd
}, Id = "nongxian", Td = "农闲", Pd = "1.0.0", Nd = "D", Dd = !0, Fd = "不限", Rd = "【副本进行中：农闲】", Od = [], Ld = { briefingName: "农闲" }, jd = { type: "none" }, Bd = { type: "fromPanel" }, Vd = [], Ud = [], Wd = [{ title: "游玩说明", md: `## 系统简报

「副本简报 - 农闲」
「人数：不限人数」
「等级：-」
「时限：15天，可随时退出」
「简报：休息」

## 入场公告

「本副本为休整副本。」
「不适用评级，不消耗积分，不设失败条件。」
「本副本内不存在敌对生物与致死机关。」
「祝各位玩家，休息愉快~」` }, { title: "山谷", md: `## 山谷

- 一座被雾围着的小山谷。山谷里的一切都由一米见方的方块拼成：泥土、石头、树干、溪水、草，连太阳和月亮都是方的。方块可以挖起来揣进兜里，也可以放下去，想盖什么就盖什么。
- 进山谷的路：沿着一条方块小溪走，两岸是一大片桃林，花瓣是粉色的小方块，落在水面上不沉。桃林尽头的山脚下有一个小洞口，钻过去，豁然开朗。
- 山谷里有一个小村子，六户人家，屋舍整齐，鸡犬相闻。村民待人和气，看见生人来了也不奇怪，只笑着问一句："来住几天？"
- 村东头有一间空着的两层木屋，是给{{user}}一行人住的：楼上四间小卧室，楼下有灶台、饭桌、几把椅子。屋前有一片翻好的田，四格乘四格，共十六格；屋后有一架秋千；屋顶是平的，可以爬上去。
- 小溪穿过村子，溪里有鱼，溪上有石桥。村南有一块晒谷场，北坡有蜂箱，西北角的山坡上有一个小山洞，洞壁上嵌着会发淡蓝色光的方块。
- 雾是山谷的边界，走进去会从另一头绕回来。
- 一到晚上人就犯困。天黑以后在外头走得太远，会在自己床上醒过来。` }, { title: "换货单", md: `## 换东西

村子里不用钱，也不用积分，东西都是拿来换的。
- 自己种的、养的、钓的、做的、从山里捡的，都可以拿去跟村民换。
- 外头带进来的道具，村民看不懂，也不要。
- 价钱没那么死板。多给少给，村民都不计较；送东西给他们，他们会记得，下次多塞你一把。

村民和他们的换货单（玩家→村民）：

阿禾｜杂货铺
- 任意作物×3 → 一种种子×4（小麦、胡萝卜、土豆、甜菜、南瓜、草莓、西瓜任选）
- 鸡蛋×4 → 一把铁锄头（开地快一倍）
- 鱼×3 → 一个铁水壶（一次能浇一整排）
- 蜂蜜×1 → 一包花种子（种在哪里开在哪里）

老石｜木匠
- 原木×8 → 一张床、一张桌子或一把摇椅
- 原木×12 → 一只小木船（可以在溪里划）
- 原木×6 + 任意作物×2 → 一圈篱笆或一座小凉亭
- 帮他搬一上午木头 → 他给你做一个你想要的小玩意

阿潮｜渔家
- 任意作物×4 → 一根好钓竿（更容易钓到稀罕鱼）
- 面包×2 → 一罐鱼饵
- 鱼×5 → 一张渔网（下在溪里，第二天早上收鱼）
- 陪她坐着钓一下午 → 她教你认溪里的鱼

桑婆婆｜织布
- 羊毛×3 → 一匹布
- 布×1 + 任意作物×2 → 一件衣裳、一床被子或一副窗帘
- 羊毛×1 → 一团毛线
- 给她带一束花 → 她给你缝一个小布偶

蜂叔｜养蜂、养牲口
- 任意作物×6 → 一只小鸡、一只小鸭或一只兔子
- 任意作物×12 → 一只羊或一头牛
- 苹果×4 → 一个蜂箱（放在花旁边，每三天出一罐蜂蜜）
- 帮他收一次蜂蜜 → 他分你一罐

梅姨｜灶房、酒坊
- 任意作物×3 → 一顿现做的饭
- 桃子×6 → 一坛桃花酿
- 任意作物×2 → 教一道新菜（她会写在你家墙上的配方板上）
- 进她灶房帮一次忙 → 她留你吃饭` }, { title: "作物", md: `## 作物（种子袋在木屋门边：小麦种子8、胡萝卜4、土豆4、甜菜种子4、南瓜种子2）

作物只在早上长：
- 胡萝卜、土豆、草莓：种下后过2个早上成熟。胡萝卜、土豆每格收2个，留1个可以再种；草莓成熟后每天早上都能摘。
- 小麦、甜菜：过3个早上成熟，每格收1份，外加1~2颗种子。
- 南瓜、西瓜：过4个早上成熟，藤旁边要留一格空地，瓜结在空地上，之后每过2个早上再结一个。
- 离溪水四格以内的田自己湿润；其余的田每天浇一次水，没浇的第二天早上不长。下雨天全都不用浇。
- 骨粉：让一格作物多长一天，每格每天只能用一次。

桃林里的桃子、村口的苹果树，想摘就摘，第二天会长出来。` }, { title: "配方板", md: `## 配方板（木屋墙上）

- 原木 → 木板×4
- 木板×2 → 木棍×4
- 木板×2 + 木棍×2 → 木锄头
- 木板×3 → 木桶
- 原木放进灶膛烧 → 木炭
- 木棍×1 + 木炭×1 → 火把×4
- 羊毛×3 → 绳子
- 鱼骨 → 骨粉×3（钓鱼时偶尔会钓上来）
- 小麦×3 → 面包
- 南瓜×1 + 鸡蛋×1 + 小麦×1 → 南瓜饼
- 苹果×2 + 蜂蜜×1 → 苹果酱
- 发光方块 → 一盏不会灭的小灯
梅姨教新菜，会添在配方板上。` }], Hd = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], Yd = {
  id: Id,
  name: Td,
  version: Pd,
  level: Nd,
  rest: Dd,
  players: Fd,
  token: Rd,
  legacyKeys: Od,
  detect: Ld,
  time: jd,
  remaining: Bd,
  phases: Vd,
  events: Ud,
  docs: Wd,
  danmaku: Hd
}, Gd = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function Xt(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const Kd = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function Cr(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(Kd)) {
    const i = Number(s[1]), r = s[2];
    n = !0, r === "天" ? t += i * 1440 : r === "小时" || r === "个小时" || r === "h" || r === "H" ? t += i * 60 : t += i;
  }
  return n ? Math.round(t) : null;
}
function el(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: Cr(t), total: n === void 0 ? null : Cr(n) };
}
function Zd(e, t) {
  return e.phases.find((n) => n.id === t);
}
function En(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); )
    n.push(i), s.add(i.id), i = Zd(e, i.next);
  return n;
}
function tl(e, t) {
  return En(e, t).filter((n) => n.night).length;
}
function Jd(e, t, n) {
  if (En(e, t).some((i) => i.id === n.id)) return t;
  const s = e.phases[0];
  return s && En(e, s).some((i) => i.id === n.id) ? s : n;
}
function Qs(e, t, n, s, i) {
  if (!e.phases.length || !e.phases.some((d) => d.id === t.id)) return;
  let r = En(e, n), o = r.findIndex((d) => d.id === t.id);
  o < 0 && (r = En(e, t), o = 0);
  const l = r.reduce((d, h) => d + Math.max(0, h.cap), 0), a = Math.max(0, t.cap - s) + r.slice(o + 1).reduce((d, h) => d + Math.max(0, h.cap), 0), c = t.deadline ?? r[0].deadline ?? e.deadline, A = { x: a, y: l, deadline: c };
  if (e.time.type === "countdown") {
    const d = e.time.minutesPerRound, h = e.time.totalMinutes, x = h && h > 0 ? h : l * d;
    let k = h && h > 0 && l > 0 ? Math.round(x * a / l) : a * d;
    const v = el(i).remaining;
    v !== null && (k = Math.min(k, v - d)), k = Math.max(0, k), Object.assign(A, { minutes: k, total: x, text: `约剩${Xt(k)}/${Xt(x)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) A.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const d = e.remaining.template.replace("{n}", String(tl(e, t)));
      A.text = c ? `${c}·${d}` : d;
    } else c && (A.text = c);
  return A;
}
const Cn = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function nl(e, t, n = Cn) {
  const s = e ?? "", i = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), r = i ? Math.max(1, Number(i[1])) : Math.max(1, Math.round(n[t] ?? Cn[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: r };
  const l = Number(o[1]), a = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return a <= 0 ? { rounds: r } : { rounds: r, totalMinutes: a, minutesPerRound: Math.max(1, Math.round(a / r)) };
}
const cs = "generic", yi = [YA, ru, yu, Nu, Zu, ud, Md, Yd], qd = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(Gd)
  }
};
function Qd(e, t) {
  const n = qd[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const sl = ["D", "C", "B", "A", "S"];
function il(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === cs && t.push(`id 不能是保留字 ${cs}`), sl.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((c) => typeof c != "string")) && t.push("detect.patterns 必须是文本数组");
  const i = n.time;
  !i || !["none", "clock", "countdown"].includes(i.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (i.type === "clock" && (typeof i.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(i.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), i.type !== "none" && (typeof i.minutesPerRound != "number" || i.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), i.type === "countdown" && i.totalMinutes !== void 0 && (typeof i.totalMinutes != "number" || i.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const r = n.remaining;
  !r || !["nights", "countdown", "fromPanel"].includes(r.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : r.type !== "fromPanel" && typeof r.template != "string" && t.push("remaining.template 必须是文本"), r?.type === "countdown" && i?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.rest !== void 0 && typeof n.rest != "boolean" && t.push("rest 必须是 true 或 false"), n.stateFields !== void 0 && (Array.isArray(n.stateFields) ? n.stateFields.forEach((c, A) => {
    (!c || typeof c.key != "string" || !c.key || typeof c.label != "string" || typeof c.hint != "string") && t.push(`stateFields[${A}] 需要 key、label、hint 三个文本`);
  }) : t.push("stateFields 必须是数组")), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((c) => typeof c != "string" || !c)) && t.push("roles 必须是文本数组");
  const o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((c, A) => {
    if (!c || typeof c.id != "string" || typeof c.name != "string") {
      t.push(`phases[${A}] 缺少 id 或 name`);
      return;
    }
    o.has(c.id) && t.push(`阶段 id 重复：${c.id}`), l.has(c.name) && t.push(`阶段名称重复：${c.name}`), o.add(c.id), l.add(c.name), (typeof c.cap != "number" || c.cap < 1 || !Number.isInteger(c.cap)) && t.push(`阶段 ${c.id} 的 cap 必须是正整数`), c.next !== null && typeof c.next != "string" && t.push(`阶段 ${c.id} 的 next 必须是阶段 id 或 null`), c.deadline !== void 0 && typeof c.deadline != "string" && t.push(`阶段 ${c.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((c) => {
    c && typeof c.next == "string" && !o.has(c.next) && t.push(`阶段 ${c.id} 的 next 指向不存在的阶段：${c.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const a = /* @__PURE__ */ new Set();
  return Array.isArray(n.events) ? n.events.forEach((c, A) => {
    if (!c || typeof c.id != "string" || typeof c.text != "string") {
      t.push(`events[${A}] 缺少 id 或 text`);
      return;
    }
    a.has(c.id) && t.push(`事件 id 重复：${c.id}`), a.add(c.id), o.has(c.phase) || t.push(`事件 ${c.id} 的 phase 不存在：${c.phase}`), (!Number.isInteger(c.from) || !Number.isInteger(c.to) || c.from < 1 || c.to < c.from) && t.push(`事件 ${c.id} 的轮次区间无效`), c.kind !== "event" && c.kind !== "directive" && t.push(`事件 ${c.id} 的 kind 必须是 event 或 directive`), c.if !== void 0 && typeof c.if != "string" && t.push(`事件 ${c.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((c, A) => {
    !c || typeof c.title != "string" ? t.push(`docs[${A}] 缺少 title`) : c.md !== void 0 && typeof c.md != "string" ? t.push(`docs[${A}].md 必须是文本`) : c.image !== void 0 && typeof c.image != "string" && t.push(`docs[${A}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), n.danmaku !== void 0 && (Array.isArray(n.danmaku) ? n.danmaku.forEach((c, A) => {
    if (!c || typeof c.type != "string" || typeof c.text != "string") {
      t.push(`danmaku[${A}] 需要 type 和 text`);
      return;
    }
    c.when !== void 0 && typeof c.when != "string" && t.push(`danmaku[${A}].when 必须是文本`), c.scope !== void 0 && typeof c.scope != "string" && t.push(`danmaku[${A}].scope 必须是文本`), c.phase !== void 0 && (!Array.isArray(c.phase) || c.phase.some((d) => typeof d != "string") ? t.push(`danmaku[${A}].phase 必须是文本数组`) : c.phase.forEach((d) => {
      o.size > 0 && !o.has(d) && console.warn(`[rlzc] danmaku[${A}] 的 phase "${d}" 不在阶段表中，已跳过`);
    }));
  }) : t.push("danmaku 必须是数组")), t;
}
function rl(e) {
  return sl.includes(e.level ?? "") ? e.level : "D";
}
function ol(e, t = Cn) {
  const n = rl(e), s = nl(e.limit, n, t), i = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, r = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / i)) : void 0;
  return {
    id: cs,
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
function Fi(e) {
  const t = new Set(yi.map((n) => n.id));
  return [...yi, ...e.filter((n) => !t.has(n.id))];
}
const Xd = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, ef = /<阶段切换>([\s\S]*?)<\/阶段切换>/, tf = /<副本结算>([\s\S]*?)<\/副本结算>/, ll = /<副本>([\s\S]*?)<\/副本>/, nf = /<角色登记>([\s\S]*?)<\/角色登记>/, sf = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, rf = /<积分变动>([\s\S]*?)<\/积分变动>/g;
function al(e) {
  const t = Xd.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (o) => {
    const l = new RegExp(`${o}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return l ? l[1].trim() : void 0;
  }, r = i("等级");
  return r && (n.level = r.replace(/级$/, "").trim().toUpperCase()), n.goal = i("目标"), n.limit = i("时限"), n.players = i("人数"), n;
}
function of(e) {
  const t = ef.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function cl(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const i = n.slice(0, s).trim(), r = n.slice(s + 1).trim();
    i && (t[i] = r);
  }
  return t;
}
function Ms(e) {
  const t = tf.exec(e ?? "");
  if (!t) return null;
  const n = cl(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function Al(e) {
  const t = nf.exec(e ?? "");
  if (!t) return null;
  const n = cl(t[1]);
  return Object.keys(n).length ? n : null;
}
function Yn(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function ul(e) {
  const t = ll.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let s = null;
  for (const i of t[1].split(`
`)) {
    const r = i.trim();
    if (!r) continue;
    const o = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(r);
    if (o) {
      const l = o[1].toLowerCase(), a = o[2].trim();
      l === "时限" ? (n.limit = a, s = null) : l === "进度条" ? (n.progressBar = a, s = null) : l === "任务" ? (Yn(a) && n.tasks.push(Yn(a)), s = "tasks") : (n.ps = a, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(r)) {
      s = null;
      continue;
    }
    s === "tasks" ? Yn(r) && n.tasks.push(Yn(r)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${r}` : r);
  }
  return n;
}
function lf(e) {
  const t = sf.exec(e ?? "");
  return t ? t[2] : null;
}
function Xs(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (n(i)) return i;
    s.add(i.id), i = i.next ? e.phases.find((r) => r.id === i.next) : void 0;
  }
  return null;
}
function af(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const i = (l) => !!l.clock && !l.night;
  let r = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      r = Xs(e, t, i), o = r?.cap ?? 0;
      break;
    case "晚饭":
      r = Xs(e, t, i), r && (o = Math.ceil(r.cap * 0.75), r.id === t.id && o <= n && (o = r.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      r = Xs(e, t, (l) => !!l.night), o = r?.cap ?? 0;
      break;
  }
  return !r || r.id === t.id && o <= n + 1 ? null : { phase: r.id, round: o, label: `${r.name}第${o}轮` };
}
const cf = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Af(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function ei(e, t) {
  const n = Af(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const ti = /* @__PURE__ */ new Map();
function uf(e, t) {
  const n = `${e}\0${t}`;
  if (!ti.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (i) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, i);
    }
    ti.set(n, s);
  }
  return ti.get(n);
}
function df(e, t) {
  const n = String(e ?? ""), s = (l, a) => l ? { signal: a, pack: l, info: { name: l.name, level: l.level } } : null, i = al(n);
  if (i)
    return { signal: 1, pack: t.find((a) => a.detect.briefingName === i.name), info: i };
  const r = ll.exec(n);
  if (r) {
    const l = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(r[1]), a = l && s(ei(t, l[1]), 2);
    if (a) return a;
  }
  for (const l of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const a = s(ei(t, l[1]), 3);
    if (a) return a;
  }
  const o = cf.exec(n);
  if (o) {
    for (const l of o[1].split(`
`))
      if (l.includes("地点"))
        for (const a of l.matchAll(/副本《([^》]+)》/g)) {
          const c = s(ei(t, a[1]), 4);
          if (c) return c;
        }
  }
  for (const l of t)
    for (const a of l.detect.patterns ?? []) {
      const c = uf(l.id, a);
      if (c && c.test(n)) return s(l, 5);
    }
  return null;
}
const Mr = 5, ff = { id: "_open", name: "进行中", cap: 0, next: null };
function Te(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function pf(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function dl(e, t, n) {
  const s = pf(e) + Math.max(0, n - 1) * t, i = Math.floor(s / 60) % 24, r = (s % 60 + 60) % 60;
  return `${i % 12 === 0 ? 12 : i % 12}:${String(r).padStart(2, "0")}`;
}
function Ir(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return dl(e.time.dayStart, e.time.minutesPerRound, n);
}
function fl(e) {
  return e.phases.length ? e.phases : [ff];
}
function Zn(e, t) {
  return fl(e).find((n) => n.id === t);
}
function Tr(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (i.id === n) return !0;
    s.add(i.id), i = Zn(e, i.next);
  }
  return !1;
}
function Pr(e, t, n, s) {
  const i = n + 1, r = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > i) {
      let l = r.map((c, A) => ({ e: c, i: A })).filter(({ e: c }) => c.from >= i && c.from <= o).sort((c, A) => c.e.from - A.e.from || c.i - A.i).map(({ e: c }) => c), a = o;
      return l.length > Mr && (a = l[Mr - 1].from, l = l.filter((c) => c.from <= a)), { phase: t, round: a, events: l, skipFrom: i };
    }
  }
  return { phase: t, round: i, events: r.filter((o) => o.from === i) };
}
function hf(e, t, n) {
  const s = t.entryIndex;
  if (!Te(e[s])) return null;
  const i = fl(n);
  let r = i[0], o = i[0], l = 0, a, c = !1, A, d, h = null, x, k, v;
  const F = /* @__PURE__ */ new Set(), j = {}, T = /* @__PURE__ */ new Map();
  for (const oe of t.manual ?? [])
    T.has(oe.atIndex) || T.set(oe.atIndex, []), T.get(oe.atIndex).push(oe);
  const y = (oe) => {
    n.phases.length && (o = Jd(n, o, oe)), r = oe, l = 0, h && !Tr(n, r, h.phase) && (h = null);
  };
  for (let oe = s; oe < e.length; oe++) {
    const Kt = e[oe];
    if (!c && Te(Kt)) {
      const fe = Pr(n, r, l, h);
      l = fe.round;
      const _e = new Set((Kt.extra?.rlzc?.skippedEvents ?? []).map((Se) => Se.id));
      fe.events.forEach((Se) => {
        _e.has(Se.id) || F.add(Se.id);
      }), j[oe] = {
        phase: r.id,
        round: l,
        events: fe.events.map((Se) => Se.id),
        skipFrom: fe.skipFrom,
        limit: Qs(n, r, o, l, a)
      }, h && r.id === h.phase && l >= h.round && (h = null);
      const zt = String(Kt.mes ?? ""), $t = ul(zt);
      $t && (k = $t), a = $t?.limit;
      const Zt = Al(zt);
      Zt && (v = Zt);
      const Ln = Ms(zt);
      if (Ln)
        c = !0, A = "tag", d = oe, x = Ln;
      else {
        const Se = of(zt), St = Se ? i.find((we) => we.name === Se) : void 0;
        if (St && n.phases.length)
          y(St);
        else if (r.cap > 0 && l >= r.cap && r.next) {
          const we = Zn(n, r.next);
          we && y(we);
        }
      }
    }
    for (const fe of T.get(oe) ?? []) {
      if (c) break;
      switch (fe.kind) {
        case "skip": {
          h = Zn(n, fe.targetPhase) && Tr(n, r, fe.targetPhase) ? { phase: fe.targetPhase, round: fe.targetRound } : null;
          break;
        }
        case "setPhase": {
          const _e = Zn(n, fe.phase);
          _e && (h = null, y(_e));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(fe.round)), h = null;
          break;
        case "end":
          c = !0, A = "manual", d = oe;
          break;
      }
    }
  }
  const g = c ? null : Pr(n, r, l, h), w = g ? g.round : l + 1, B = r.cap > 0, U = n.events.filter((oe) => F.has(oe.id)).map((oe) => oe.id), M = c ? void 0 : Qs(n, r, o, w, a), _ = c ? void 0 : Qs(n, r, o, l);
  let R;
  const re = n.remaining;
  return !c && re.type === "nights" && n.phases.length && !r.byTag && !r.frozen ? R = re.template.replace("{n}", String(tl(n, r))) : !c && re.type === "countdown" && M?.minutes !== void 0 && (R = re.template.replace("{m}", String(M.minutes))), {
    phase: r,
    round: l,
    nextRound: w,
    clock: c ? void 0 : Ir(n, r, w),
    currentClock: Ir(n, r, l),
    remainingText: R,
    limit: M,
    roundsLeft: _ ? { x: _.x, y: _.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: c,
    endedBy: A,
    endIndex: d,
    firedEvents: U,
    warn: !c && B && w >= r.cap - 2,
    isLastRound: !c && B && w === r.cap,
    overdue: !c && B && !r.next && w > r.cap,
    next: g,
    skipGoal: h,
    settlement: x,
    panel: k,
    rolesFromChat: v,
    perMessage: j,
    entryIndex: s
  };
}
const pl = "rlzc_token", hl = "rlzc_progress", ml = "rlzc_turn", gl = "rlzc_state", xl = "rlzc_ledger", yl = "rlzc_live", mf = [pl, hl, ml, gl, xl, yl], Mn = { token: "", progress: "", turn: "", injected: [] };
function gf(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function As(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const i = new RegExp(`(?<!\\{)\\{(${s.map(gf).join("|")})\\}(?!\\})`, "g");
  return e.replace(i, (r, o) => n?.[o]?.trim() || o);
}
function xf(e, t) {
  if (!t.length) return "";
  const n = e.events.map((a) => a.id), s = t.map((a) => n.indexOf(a)).filter((a) => a >= 0).sort((a, c) => a - c), i = [];
  let r = s[0], o = s[0];
  const l = () => i.push(r === o ? n[r] : `${n[r]}–${n[o]}`);
  for (let a = 1; a < s.length; a++) {
    if (s[a] === o + 1) {
      o = s[a];
      continue;
    }
    l(), r = o = s[a];
  }
  return l(), i.join("、");
}
function Nr(e, t, n, s = !1) {
  let i = As(e.text, t, n);
  return e.to > e.from && (i = `在本阶段第${e.from}到${e.to}轮之间发生：${i}`), e.if && !s && (i += `（条件：${As(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${i}`;
}
function yf(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function vf(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...Mn, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return Mn;
  const i = s.roles, r = e.phases.length > 0, o = t.next, l = [`副本：${e.name}（${e.level}级）`], a = t.limit;
  if (r)
    l.push(`阶段：${t.phase.name}`), l.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), a && l.push(`剩余${a.x}/${a.y}轮`), t.clock && l.push(`钟时：${t.clock}`), a?.text && l.push(`时限：${a.text}`), e.remaining.type === "countdown" && t.remainingText && l.push(t.remainingText), a?.deadline && !a.text?.includes(a.deadline) && l.push(`截止：${a.deadline}`);
  else {
    l.push(`本轮：第${t.nextRound}轮`), t.clock && l.push(`钟时：${t.clock}`);
    const y = s.panelLimit || s.briefing?.limit;
    y && l.push(`时限：${y}`);
  }
  const c = ["［副本进度·仅供AI］", l.join("　")];
  if (s.briefing?.goal && (!r || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const y = e.roles.filter((g) => i?.[g]);
    c.push(
      y.length ? `角色登记：${e.roles.map((g) => `${g}=${i?.[g] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const A = xf(e, t.firedEvents);
  A && c.push(`已发生事件：${A}`);
  const d = [];
  o.skipFrom !== void 0 && d.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const h = new Map((s.subNext ?? []).map((y) => [y.id, y])), x = o.events.filter((y) => y.if && h.get(y.id)?.ok === !1).map((y) => ({ id: y.id, reason: h.get(y.id).reason })), k = o.events.filter((y) => !x.some((g) => g.id === y.id)), v = (y) => !!y.if && h.get(y.id)?.ok === !0, F = k.filter((y) => y.kind === "event"), j = k.filter((y) => y.kind === "directive");
  if (F.length && (d.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), F.forEach((y) => d.push(Nr(y, e, i, v(y))))), j.length && (d.push("本轮写作要求："), j.forEach((y) => d.push(Nr(y, e, i, v(y))))), t.isLastRound ? d.push(yf(t)) : t.overdue && d.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && d.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && d.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((y) => i?.[y])) {
    let y = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((g) => `${g}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (y += "死者不得是{{user}}或其同伴。"), d.push(y);
  }
  let T;
  return a?.text && (a.minutes !== void 0 ? (d.push(
    `本轮<副本>的时限一栏写：${a.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), T = { text: a.text, minutes: a.minutes, total: a.total }) : (d.push(`本轮<副本>的时限一栏写：${a.text}（照抄）。`), T = { text: a.text })), {
    token: e.token,
    progress: c.join(`
`),
    turn: d.length ? ["［本轮指令·仅供AI］", ...d].join(`
`) : "",
    injected: k.map((y) => y.id),
    limit: T,
    skipped: x.length ? x : void 0,
    state: s.stateText || void 0
  };
}
const bf = 1, wf = 0;
function Ae() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function kf() {
  const e = Ae();
  return e.eventTypes ?? e.event_types ?? {};
}
function ut(e, t) {
  const n = kf()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  Ae().eventSource.on(n, t);
}
function J() {
  return Ae().chat ?? [];
}
function In() {
  const e = Ae();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function wt() {
  return Ae().chatMetadata ?? {};
}
function Xe() {
  const e = Ae();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function It(e, t, n, s) {
  Ae().setExtensionPrompt(e, t, bf, n, s, wf);
}
function Pe(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function kt(e) {
  const t = Ae();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function Dr(e, t = "") {
  const n = Ae();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const i = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof i == "string" ? i : null;
  }
  return window.prompt(e, t);
}
async function vl(e, t) {
  const n = Ae(), s = document.createElement("div"), i = document.createElement("div");
  i.textContent = e, s.append(i);
  let r = null;
  if (t) {
    const l = document.createElement("label");
    l.className = "checkbox_label rlzc-live-optin", l.style.cssText = "display:inline-flex;align-items:center;justify-content:center;gap:8px;margin-top:10px;min-height:44px;padding:0 8px;cursor:pointer;", r = document.createElement("input"), r.type = "checkbox", r.id = "rlzc-live-optin", r.checked = t.checked;
    const a = document.createElement("span");
    a.textContent = t.label, l.append(r, a), s.append(l);
  }
  if (n.callGenericPopup && n.POPUP_TYPE && n.POPUP_RESULT)
    return { ok: await n.callGenericPopup(s, n.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === n.POPUP_RESULT.AFFIRMATIVE, checked: !!r?.checked };
  const o = window.confirm(e);
  return { ok: o, checked: o && !!t?.checked };
}
const jt = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function bl(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function _f(e, t = jt) {
  return t.length ? e.replace(bl(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function wl(e, t = jt, n = !1) {
  const s = J()[e];
  if (!s || s.is_user) return;
  const i = String(s.extra?.display_text ?? s.mes ?? "");
  if (!bl(n ? jt : t, "").test(i)) return;
  const r = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!r) return;
  const o = Ae().messageFormatting;
  if (typeof o != "function") return;
  const l = o(_f(i, t), s.name ?? "", !!s.is_system, !1, e);
  r.innerHTML !== l && (r.innerHTML = l);
}
function zf(e = jt, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && wl(s, e, t);
  });
}
const $f = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function kl(e) {
  return e.stateFields?.length ? e.stateFields : [$f];
}
const Sf = [...jt, "状态栏"], Ef = new RegExp(`<(${Sf.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function Ri(e) {
  return String(e ?? "").replace(Ef, "").replace(/\n{3,}/g, `

`).trim();
}
function Cf(e) {
  const n = [
    "你是角色扮演副本的记录员，不写剧情，只整理事实。",
    "根据本轮正文完成三件事：",
    "1. 事件核对：逐条判断「本轮后台事件」在正文里是 done（已发生）、missed（该发生但没写出来）还是 void（条件已不成立，不该发生），各附一句理由。后台事件即使{{user}}看不到，只要正文与之不矛盾、且没有写出相反的事实，就算 done。标明「第X到Y轮之间」的事件不一定在本轮写出：本轮没写到、也没写出相反的事实，同样算 done。",
    "2. 隐藏状态：在「上一轮状态」的基础上更新下列字段，只依据正文里已经发生的事实，没有变化就照抄上一轮：",
    ...kl(e.pack).map((l) => `   - ${l.key}（${l.label}）：${l.hint}`),
    "3. 条件预判：逐条判断「下一轮事件」的条件现在是否仍成立（ok 为 true/false），附一句理由。",
    "4. hype：0–100 整数，按本轮正文的紧张、冲突、转折打分；hurt：true/false，本轮正文是否有人受伤或死亡。这两项只写数字和真假，不写理由。",
    "只输出一个 JSON 对象，不要任何解释，格式：",
    '{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}],"hype":50,"hurt":false}',
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
${Ri(e.text)}`
  ].join(`

`);
  return { system: n, user: o };
}
function Mf(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class ot extends Error {
}
function If(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), i = t.lastIndexOf("}");
  if (s < 0 || i <= s) throw new ot("返回里没有 JSON");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new ot("返回的 JSON 无法解析");
  }
  if (!r || typeof r != "object" || Array.isArray(r)) throw new ot("返回的不是 JSON 对象");
  if (!r.state || typeof r.state != "object" || Array.isArray(r.state)) throw new ot("缺少 state");
  const o = ["done", "missed", "void"], l = (Array.isArray(r.events) ? r.events : []).filter((d) => d && typeof d.id == "string" && o.includes(d.status)).map((d) => ({ id: d.id, status: d.status, reason: String(d.reason ?? "") })), a = (Array.isArray(r.next) ? r.next : []).filter((d) => d && typeof d.id == "string" && typeof d.ok == "boolean").map((d) => ({ id: d.id, ok: d.ok, reason: String(d.reason ?? "") })), c = { events: l, state: r.state, next: a }, A = typeof r.hype == "number" ? r.hype : typeof r.hype == "string" && r.hype.trim() !== "" ? Number(r.hype) : NaN;
  return Number.isFinite(A) && (c.hype = Math.max(0, Math.min(100, Math.round(A)))), typeof r.hurt == "boolean" ? c.hurt = r.hurt : (r.hurt === "true" || r.hurt === "false") && (c.hurt = r.hurt === "true"), c;
}
function Tf(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function Pf(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((i) => String(i ?? "")).join("|");
  return `${e}:${t}:${s}:${Tf(String(n?.mes ?? ""))}`;
}
function Nf(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function Df(e, t, n = 2) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return If(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
class _l extends Error {
}
function Oi(e) {
  if (e instanceof _l) return "超时";
  if (e instanceof ot) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function zl(e) {
  return e?.extra?.rlzc;
}
function Is(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Te(s)) continue;
    const i = zl(s)?.sub;
    if (i?.state && !i.skipped) return { index: n, state: i.state };
  }
  return null;
}
function Ff(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Te(s)) continue;
    const i = zl(s)?.sub;
    return i && !i.skipped && Array.isArray(i.next) ? i.next : void 0;
  }
}
function us(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => us(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${us(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function $l(e, t) {
  const n = kl(e), s = new Set(n.map((r) => r.key)), i = n.filter((r) => t[r.key] !== void 0).map((r) => `${r.label}：${us(t[r.key])}`);
  for (const [r, o] of Object.entries(t)) s.has(r) || i.push(`${r}：${us(o)}`);
  return i.length ? ["［副本状态·仅供AI］", ...i].join(`
`) : "";
}
const Rf = "你在写回廊直播间的观众弹幕。观众是回廊里的其他玩家，只看得到直播画面。什么人都有：夸赞、祝福、讨论、泼冷水、嫉妒、抹黑、造谣，正面的稍多。每条30字以内，口语，称{{user}}为主播，不用性别代词。只能根据画面里已经发生的事说话，不猜测、不透露画面外的信息。", Of = ["praise", "bless", "discuss", "cold", "envy", "smear", "rumor"];
function Lf(e) {
  if (!e.aiSource || !e.subOn) return !1;
  const t = Math.max(1, Math.min(10, Math.floor(e.freq) || 3));
  return e.roundInShow > 0 && e.roundInShow % t === 0 ? !0 : e.phaseSwitch || e.hurt || e.eventDone;
}
function jf(e) {
  return String(e ?? "").replace(/<(副本|状态栏|阶段切换|副本结算|角色登记|积分变动|直播|thinking|think)>[\s\S]*?<\/\1>/g, "").replace(/<\/?[A-Za-z一-龥][^<>]*>/g, "").replace(/\n{3,}/g, `

`).trim();
}
function Bf(e, t, n) {
  const s = e.map((o) => o.text), i = [], r = /* @__PURE__ */ new Set();
  for (let o = 0; o < t * 10 && i.length < Math.min(t, s.length); o++) {
    const l = Math.floor(n() * s.length);
    r.has(l) || (r.add(l), i.push(s[l]));
  }
  return i;
}
function Vf(e) {
  const t = [
    Rf,
    "只输出一个 JSON 数组，8–12条，不要任何解释，格式：",
    '[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]'
  ].join(`
`), n = [
    `【直播间】${e.scene}`,
    `【在场角色】${e.cast.length ? e.cast.join("、") : "（无）"}`,
    `【最近两轮画面】
${e.texts.map((s) => jf(s)).filter(Boolean).join(`

`) || "（无）"}`,
    `【语气示例】
${e.samples.map((s) => `- ${s}`).join(`
`)}`
  ].join(`

`);
  return { system: t, user: n };
}
function Uf(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), i = t.lastIndexOf("]");
  if (s < 0 || i <= s) throw new ot("返回里没有 JSON 数组");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new ot("返回的 JSON 无法解析");
  }
  if (!Array.isArray(r)) throw new ot("返回的不是 JSON 数组");
  const o = r.filter((l) => l && typeof l.text == "string" && l.text.trim()).map((l) => ({
    type: Of.includes(l.type) ? l.type : "discuss",
    name: typeof l.name == "string" && l.name.trim() ? l.name.trim().slice(0, 16) : "匿名",
    text: l.text.trim()
  })).slice(0, 13);
  if (!o.length) throw new ot("返回的弹幕为空");
  return o;
}
async function Wf(e, t, n = 1) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return Uf(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
function Hf(e) {
  return e.t === "tip" ? `${e.name} 打赏${e.amount}` : `${e.name}：${e.text}`;
}
function Yf(e, t = 5) {
  if (!e.on) return "";
  const n = e.feed.filter((i) => i.t === "msg" || i.t === "tip").slice(-t), s = `［直播·仅供AI］{{user}}正在直播，约${e.viewers}人在看。`;
  return n.length ? `${s}最近弹幕：${n.map(Hf).join("／")}` : s;
}
const Sl = 1500;
function El() {
  return Ae().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function Cl(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Ml(e, t) {
  const n = new AbortController();
  let s;
  const i = new Promise((r, o) => {
    s = setTimeout(() => {
      n.abort(), o(new _l(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), i]);
  } finally {
    clearTimeout(s);
  }
}
function Il(e, t) {
  const n = t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : "") ?? "", s = new Error(`${e || ""} ${n}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return s.status = e, s;
}
async function Tl(e, t, n, s = Sl, i = 0.2) {
  const r = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: El(),
    signal: n,
    body: JSON.stringify({
      ...Cl(e),
      model: e.model,
      messages: [
        { role: "system", content: t.system },
        { role: "user", content: t.user }
      ],
      max_tokens: s,
      temperature: i,
      stream: !1
    })
  }), o = await r.text();
  let l;
  try {
    l = JSON.parse(o);
  } catch {
    l = o;
  }
  if (!r.ok || l?.error) throw Il(r.status === 200 ? 0 : r.status, l);
  const a = l?.choices?.[0]?.message?.content ?? l?.choices?.[0]?.text ?? l?.content;
  if (typeof a != "string") throw new Error("返回里没有正文");
  return a;
}
async function Gf(e) {
  const t = Ae();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function Pl(e, t, n = {}) {
  return Ml(e.timeoutMs, (s) => {
    if (e.source === "main") return Gf(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return Tl(e.preset, t, s, Sl, n.temperature ?? 0.2);
  });
}
async function Nl(e) {
  const t = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: El(),
    body: JSON.stringify(Cl(e))
  }), n = await t.json().catch(() => null);
  if (!t.ok || n?.error) throw Il(t.status, n);
  return (Array.isArray(n) ? n : Array.isArray(n?.data) ? n.data : Array.isArray(n?.models) ? n.models : []).map((i) => typeof i == "string" ? i : i?.id ?? i?.name).filter(Boolean).sort();
}
async function Kf(e, t) {
  const n = await Nl(e).catch(() => []), s = { ...e, model: e.model || n[0] || "" }, i = await Ml(
    t,
    (r) => Tl(s, { system: "只回复 OK。", user: "ping" }, r, 5)
  );
  return { models: n, reply: i };
}
const Dl = "rlzc_ledger", Ht = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, Zf = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function Jf(e) {
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
function sn(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), i = String(t.getHours()).padStart(2, "0"), r = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${i}:${r}`;
}
function Li(e) {
  const t = /等级[：:]\s*([DCBAS])/.exec(e);
  return t ? t[1] : null;
}
function Fl(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function qf(e, t, n, s, i, r = "") {
  const o = n.结果 ?? "", l = (n.评价 ?? "").toUpperCase().trim(), a = ["D", "C", "B", "A", "S"].includes(l) ? l : null, c = o === "通关" || o === "成功" || o === "胜利", A = o === "失败", d = o === "死亡" || o === "阵亡";
  if (!c && !A && !d)
    return { delta: 0, source: "" };
  if (d)
    return { delta: 0, source: "" };
  if (A)
    return i ? { delta: 0, source: "清算未通关" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣除30%" };
  if (i) {
    const T = Ht[t] + 500;
    return { delta: Math.max(0, T - s), source: "清算通关·续存至斩杀线+500", clearWin: !0 };
  }
  if (!a)
    return { delta: 0, source: "", warn: "评价缺失或无法识别，不发奖励" };
  let h = Zf[e][a];
  const x = r || e, k = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", v = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", F = e !== t;
  let j = `副本奖励·${x} ${a}评`;
  return k ? (h = Math.floor(h * 0.5), j += "（×50%）") : (v || F) && (h = Math.floor(h * 0.6), j += "（×60%）"), { delta: h, source: j };
}
function Qf(e, t = (/* @__PURE__ */ new Date()).getFullYear()) {
  const n = /^(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
  if (!n) return;
  const s = new Date(t, Number(n[1]) - 1, Number(n[2]), Number(n[3]), Number(n[4])).getTime();
  return Number.isFinite(s) ? s : void 0;
}
function Xf(e, t) {
  const n = [...e], s = t.map((r, o) => ({ m: r, k: o })).sort((r, o) => (r.m.ts ?? 1 / 0) - (o.m.ts ?? 1 / 0) || r.k - o.k).map((r) => r.m);
  let i = 0;
  for (const r of s) {
    let o = n.length;
    if (r.ts !== void 0)
      for (let l = i; l < n.length; l++) {
        const a = n[l].ts;
        if (a !== void 0 && a > r.ts) {
          o = l;
          break;
        }
      }
    n.splice(o, 0, r), i = o + 1;
  }
  return n;
}
function ep(e, t) {
  let n = e;
  return t.map((s) => n += s.delta);
}
function rn(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function Fn(e, t, n) {
  let s = e, i = !1;
  for (const r of t)
    s += r.delta, s < n && (i = !0), r.clear && (i = !1);
  return i;
}
function tp(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function np(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const i = s ?? Ht[n], r = Math.max(0, i - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${r}分（${n}级斩杀线${i}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const mt = "rlzc";
function sp() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function ip(e, t, n) {
  return {
    id: sp(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function rp(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function op(e, t) {
  return e.packId === cs ? e.briefing ? ol(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function lp(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return Te(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function ap(e, t) {
  const n = lp(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((i) => ({ ...i, atIndex: i.atIndex + s }))), t.manual = t.manual.filter((i) => i.atIndex < e.length && i.atIndex >= t.entryIndex), !0;
}
function Rl(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Fr = "rlzc_declined";
function ji(e, t) {
  return `${e}:${t}`;
}
const Ol = Te;
function Ts(e, t, n) {
  if (!Ol(e[t])) return null;
  const s = df(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function cp(e, t, n, s, i = []) {
  for (let r = Math.max(0, n); r <= Math.min(s, e.length - 1); r++) {
    const o = Ts(e, r, t);
    if (o && !i.includes(ji(r, o.info.name))) return o;
  }
  return null;
}
function Ap(e, t, n = [], s = yi, i = 0) {
  if (t?.status === "active") return null;
  let r = -1;
  for (let l = Math.max(0, i); l < e.length; l++) if (Ol(e[l])) {
    r = l;
    break;
  }
  if (r < 0 || t && t.entryIndex === r) return null;
  const o = Ts(e, r, s);
  return !o || n.includes(ji(r, o.info.name)) ? null : o;
}
const up = /[■█▰●◆★▮▓]/g, dp = /[□░▱○◇☆▯▒]/g;
function fp(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const r = Number(n[2]);
    return r === 100 ? Number(n[1]) : r > 0 ? Math.round(Number(n[1]) / r * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(up) ?? []).length, i = (t.match(dp) ?? []).length;
  return s + i > 0 ? Math.round(s / (s + i) * 100) : null;
}
function Rr(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function pp(e, t) {
  return Rr(e).includes(Rr(t));
}
function hp(e, t, n) {
  const s = [], i = Object.keys(n.perMessage).map(Number).sort((a, c) => a - c);
  let r = !1, o = null, l = !1;
  for (const a of i) {
    const c = n.perMessage[a], d = t.phases.find((y) => y.id === c.phase)?.name ?? "进行中", h = (y, g) => s.push({ index: a, phase: d, round: c.round, kind: y, text: g }), x = e[a]?.extra?.rlzc;
    for (const y of x?.sub?.events ?? []) y.status === "missed" && h("eventMissed", `${y.id} 未写出来：${y.reason}`);
    for (const y of x?.skippedEvents ?? []) h("eventSkipped", `${y.id} 条件不成立，已跳过：${y.reason}`);
    const k = ul(String(e[a]?.mes ?? "")), v = a === n.entryIndex;
    if (!k) {
      v || h("missing", "本轮回复缺少 <副本> 面板"), l = !v;
      continue;
    }
    l = !1;
    const F = fp(k.progressBar);
    k.progressBar === void 0 ? h("progressUnreadable", "<副本> 中没有进度条一栏") : F === null ? h("progressUnreadable", `进度条无法读出数值：「${k.progressBar}」`) : (!r && F !== 0 && h("progressStart", `入场后第一轮的进度条应为0，实际为 ${F}`), (F < 0 || F > 100) && h("progressRange", `进度条数值 ${F} 超出 0–100`), o !== null && F < o && h("progressDrop", `进度条比上一轮低：${o} → ${F}`), o = F), r = !0;
    const j = e[a]?.extra?.rlzc?.limit, T = j?.text ? j : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (T) {
      const y = k.limit;
      if (T.minutes !== void 0) {
        const g = el(y);
        !y || g.remaining === null || g.total === null ? h("limit", `时限读不到「剩余时间/总时长」：写的是「${y ?? "（没有时限一栏）"}」，注入的是「${T.text}」`) : (g.remaining > T.minutes && h("limit", `剩余时间比注入值多：写的是${Xt(g.remaining)}，注入的是${Xt(T.minutes)}`), T.total !== void 0 && g.total !== T.total && h("limit", `总时长与注入值不一致：写的是${Xt(g.total)}，注入的是${Xt(T.total)}`));
      } else (!y || !pp(y, T.text)) && h("limit", `时限与注入文字不一致：写的是「${y ?? "（没有时限一栏）"}」，注入的是「${T.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: r };
}
const mp = {
  D: 2e3,
  C: 8e3,
  B: 3e4,
  A: 1e5,
  S: 3e5
}, gp = [
  "受伤",
  "受伤了",
  "流血",
  "骨折",
  "昏迷",
  "倒下",
  "晕倒",
  "死亡",
  "死了",
  "牺牲",
  "阵亡",
  "重伤",
  "负伤",
  "受了伤",
  "被打中",
  "被击中",
  "命殒",
  "丧命",
  "伤亡"
];
function Ll(e) {
  return gp.some((t) => e.includes(t));
}
function xp(e) {
  if (e.subHype !== void 0)
    return Math.max(0, Math.min(100, Math.round(e.subHype)));
  const t = e.subHurt !== void 0 ? e.subHurt : e.bodyText ? Ll(e.bodyText) : !1;
  let n = 20;
  return e.hasEvents && (n += 20), e.hasPhaseSwitch && (n += 20), t && (n += 30), Math.min(100, n);
}
function yp(e, t) {
  return Math.round(e * 0.6 + t * 0.4);
}
function Bi(e) {
  const t = !e.packLevel || e.isRest ? e.playerLevel : e.packLevel, n = mp[t], s = !e.packLevel || e.isRest ? 0.3 : 1;
  return Math.round(n * s * (0.5 + e.heat / 100) * e.rand);
}
const vp = [10, 20, 50, 100, 200, 500, 1e3], bp = [20, 25, 15, 20, 10, 8, 2], wp = [15, 20, 15, 20, 10, 16, 4];
function kp(e, t, n) {
  const s = t.reduce((r, o) => r + o, 0);
  let i = n * s;
  for (let r = 0; r < e.length; r++)
    if (i -= t[r], i <= 0) return e[r];
  return e[e.length - 1];
}
function _p(e) {
  const { hype: t, isCorr: n, rand: s, names: i } = e, r = t / 40, o = [], l = [], a = t >= 70 ? wp : bp;
  for (let h = 1; h <= 3; h++) {
    const x = Math.min(1, Math.max(0, r - (h - 1)));
    if (s() < x) {
      let k = kp(vp, a, s());
      n && (k = Math.max(10, Math.round(k * 0.3 / 10) * 10)), o.push(k), l.push(i[Math.floor(s() * i.length)] ?? "匿名");
    }
  }
  const c = o.reduce((h, x) => h + x, 0), A = Math.floor(c * 0.6);
  let d = "";
  return o.length === 1 ? d = `直播打赏${o[0]}×60%` : o.length > 1 && (d = `直播打赏${o.length}笔·共${c}×60%`), { count: o.length, totalFace: c, faces: o, netTotal: A, source: d, names: l };
}
const ds = 10, fs = 13;
function jl(e) {
  return ds + Math.floor(e() * (fs - ds + 1));
}
function ni(e, t, n, s, i, r, o) {
  const l = t && !n;
  return !(e.scope === "inst" && !l || e.scope === "corr" && l || e.when === "hurt" && !s || e.when === "calm" && i >= 30 || e.when === "open" && !r || e.when === "end" && !o);
}
function zp(e) {
  const {
    pool: t,
    templates: n,
    packDanmaku: s = [],
    currentPhase: i,
    isInst: r,
    isRest: o,
    isHurt: l,
    hype: a,
    isOpen: c,
    isEnd: A,
    recentTexts: d,
    names: h,
    whoNames: x,
    rand: k
  } = e, v = e.count ?? jl(k), F = [], j = new Set(d), T = t.filter(
    (R) => ni(R, r, o, l, a, c, A)
  ), g = x.length > 0 ? n.filter(
    (R) => ni(R, r, o, l, a, c, A)
  ) : [], w = s.filter((R) => ni(R, r, o, l, a, c, A) ? R.phase && R.phase.length > 0 && i ? R.phase.includes(i) : !0 : !1), B = () => h[Math.floor(k() * h.length)] ?? "匿名", U = () => x[Math.floor(k() * x.length)] ?? "";
  for (let R = 0; R < v * 5 && F.length < v; R++) {
    let re = "", oe = "discuss";
    if (w.length > 0 && k() < 0.3) {
      const fe = w[Math.floor(k() * w.length)];
      re = fe.text, oe = fe.type;
    } else if (g.length > 0 && k() < 0.5) {
      const _e = g[Math.floor(k() * g.length)];
      re = _e.text.replace("{who}", U()), oe = _e.type;
    } else if (T.length > 0) {
      const _e = T[Math.floor(k() * T.length)];
      re = _e.text, oe = _e.type;
    }
    !re || j.has(re) || (j.add(re), F.push({ name: B(), text: re, type: oe }));
  }
  const M = [...w, ...T], _ = M.length ? Math.floor(k() * M.length) : 0;
  for (let R = 0; R < M.length && F.length < v; R++) {
    const re = M[(_ + R) % M.length];
    j.has(re.text) || (j.add(re.text), F.push({ name: B(), text: re.text, type: re.type }));
  }
  return F;
}
const Bl = "rlzc_live", $p = "本局直播打赏撤回", Vl = 20, Bt = {
  corridorOn: "回廊直播开始。",
  corridorOff: "已下播。",
  enterOff: "进入副本，回廊直播已结束。",
  instanceOn: "本局副本直播开始。",
  instanceOff: "副本结束，直播已下播。",
  revoke: "主播在副本中死亡，本局打赏已全部撤回。"
};
function Sp(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.corridor ?? {};
  return {
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0,
    corridor: { on: !!n.on, show: typeof n.show == "string" ? n.show : "", viewers: Number.isFinite(n.viewers) ? n.viewers : void 0 },
    sys: Array.isArray(t.sys) ? t.sys.filter((s) => s && typeof s.id == "number") : []
  };
}
function Ul(e, t) {
  return e.disableLive ? { show: !1, checked: !1 } : { show: !0, checked: !!t };
}
function _t(e) {
  const t = e?.extra?.rlzc?.live;
  return t && typeof t.show == "string" && Array.isArray(t.feed) ? t : void 0;
}
function Vi(e, t, n = e.length) {
  const s = [];
  for (let i = 0; i < Math.min(n, e.length); i++) {
    const r = e[i];
    if (!r || r.is_user) continue;
    const o = _t(r);
    o && o.show === t && s.push({ index: i, rec: o });
  }
  return s;
}
function Wl(e, t) {
  return Vi(e, t).reduce((n, { rec: s }) => n + (s.tipNet || 0) - (s.revoke || 0), 0);
}
function Ps(e, t) {
  let n = t.seq;
  for (const s of t.sys) n = Math.max(n, s.id);
  for (const s of e) for (const i of _t(s)?.feed ?? []) n = Math.max(n, i.id);
  return n;
}
function Ep(e, t = 30) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const i = _t(e[s])?.feed ?? [];
    for (let r = i.length - 1; r >= 0 && n.length < t; r--) i[r].t === "msg" && n.push(i[r].text);
  }
  return n;
}
const Hl = /<状态栏>([\s\S]*?)<\/状态栏>/, Cp = /^(积分|位格|道具|在场)$/, Mp = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;
function Yl(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const i = Hl.exec(s.mes);
    if (i) return i[1];
  }
  return null;
}
function Ui(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const i = Hl.exec(s.mes);
    if (!i) continue;
    const r = /等级[：:]\s*([DCBAS])/.exec(i[1]);
    if (r) return r[1];
  }
  return "D";
}
function Gl(e, t = "") {
  if (!e) return [];
  const n = [];
  let s = null;
  for (const r of e.split(`
`)) {
    const o = r.trim();
    if (!o || /^[━─—=\-]{3,}$/.test(o)) continue;
    const l = Mp.exec(o);
    if (l) {
      s?.keys.add(l[1]);
      continue;
    }
    const a = /^(.+?)\s*[：:]\s*$/.exec(o);
    if (a) {
      s = { name: a[1].trim(), keys: /* @__PURE__ */ new Set() }, n.push(s);
      continue;
    }
    o.includes("｜") && (n.push({ name: o.split("｜")[0].trim(), keys: /* @__PURE__ */ new Set() }), s = null);
  }
  const i = [];
  return n.forEach((r, o) => {
    if (o === 0 && [...r.keys].some((a) => Cp.test(a))) return;
    const l = r.name.replace(/[（(][\s\S]*$/, "").trim();
    !l || /^(陌生|路人)/.test(l) || l === "{{user}}" || t && l === t || i.includes(l) || i.push(l);
  }), i;
}
function Kl(e, t) {
  return t?.hurt !== void 0 ? t.hurt : Ll(Ri(e));
}
function Ip(e) {
  const { rand: t } = e, n = Ri(e.text), s = Kl(e.text, e.sub), i = xp({ subHype: e.sub?.hype, subHurt: s, hasEvents: e.hasEvents, hasPhaseSwitch: e.hasPhaseSwitch, bodyText: n }), r = yp(e.prevHeat ?? Vl, i), o = e.scope === "corridor" || e.isRest, l = Bi({
    packLevel: e.scope === "instance" ? e.packLevel : null,
    playerLevel: e.playerLevel,
    isRest: e.isRest,
    heat: r,
    rand: 0.9 + t() * 0.2
  }), a = jl(t), c = zp({
    pool: e.pool,
    templates: e.templates,
    packDanmaku: e.packDanmaku,
    currentPhase: e.phaseId,
    isInst: e.scope === "instance",
    isRest: e.isRest,
    isHurt: s,
    hype: i,
    isOpen: e.roundsInShow < 2,
    isEnd: e.isEnd,
    recentTexts: e.recentTexts,
    names: e.names,
    whoNames: e.whoNames,
    rand: t,
    count: e.awaitAi ? fs : a
  }), A = _p({ hype: i, isCorr: o, rand: t, names: e.names }), d = A.faces.map((v, F) => ({ t: "tip", name: A.names[F], text: "", amount: v, net: Math.floor(v * 0.6) })), h = [];
  let x;
  e.settle && (e.settle.died && (x = e.settle.tipsBefore + A.netTotal, x > 0 ? h.push({ t: "sys", name: "", text: Bt.revoke, amount: 0, net: -x }) : x = void 0), h.push({ t: "sys", name: "", text: Bt.instanceOff, amount: 0, net: 0 }));
  const k = {
    show: e.show,
    scope: e.scope,
    hype: i,
    heat: r,
    viewers: l,
    hurt: s,
    feed: [],
    tipNet: A.netTotal,
    tipFace: A.totalFace,
    tipSource: A.source
  };
  return x && (k.revoke = x), e.awaitAi ? k.pending = { local: c, tips: d, sys: h, target: a } : k.feed = Zl(c.slice(0, a), d, h, e.firstId, t), k;
}
function Tp(e, t, n) {
  const s = Math.max(ds, Math.min(fs, n));
  if (!e?.length) return t.slice(0, s);
  const i = e.slice(0, fs);
  if (i.length >= ds) return i;
  const r = new Set(i.map((o) => o.text));
  for (const o of t) {
    if (i.length >= s) break;
    r.has(o.text) || (r.add(o.text), i.push(o));
  }
  return i;
}
function Zl(e, t, n, s, i) {
  const r = e.map((o) => ({ t: "msg", name: o.name, text: o.text, amount: 0, net: 0 }));
  for (let o = r.length - 1; o > 0; o--) {
    const l = Math.floor(i() * (o + 1));
    [r[o], r[l]] = [r[l], r[o]];
  }
  for (const o of t) {
    const l = r.length ? 1 + Math.floor(i() * r.length) : 0;
    r.splice(Math.min(l, r.length), 0, o);
  }
  return r.push(...n), r.map((o, l) => ({ id: s + l, ...o }));
}
function Jl(e, t, n, s) {
  if (!e.pending) return e;
  const { pending: i, ...r } = e, o = Tp(t, i.local, i.target);
  return { ...r, feed: Zl(o, i.tips, i.sys, n, s) };
}
function Pp(e, t) {
  if (!e) return [];
  const n = [];
  return e.tipNet > 0 && n.push({ delta: e.tipNet, source: e.tipSource, type: "tip", at: t }), e.revoke && e.revoke > 0 && n.push({ delta: -e.revoke, source: $p, type: "tip", at: t }), n;
}
function Np(e) {
  return `其中本局直播打赏${e}分，副本内不可使用，离开副本后可用。`;
}
function Dp(e, t) {
  return e && `${e}${e.endsWith("。") ? "" : "。"}${Np(t)}`;
}
function Fp(e, t, n) {
  const s = Vi(e, n), i = [];
  for (const { rec: r } of s) i.push(...r.feed);
  for (const r of t.sys) r.show === n && i.push({ id: r.id, t: r.t, name: r.name, text: r.text, amount: r.amount, net: r.net });
  return i.sort((r, o) => r.id - o.id), { items: i, last: s[s.length - 1]?.rec };
}
function Rp(e, t) {
  let n = "", s = -1;
  for (const i of t.sys) i.id > s && (s = i.id, n = i.show);
  for (const i of e) {
    const r = _t(i);
    if (r)
      for (const o of r.feed) o.id > s && (s = o.id, n = r.show);
  }
  return n;
}
function Op(e, t, n, s = /* @__PURE__ */ new Set()) {
  const i = n.inInstance ? "instance" : "corridor", r = n.inInstance ? n.instanceLive : t.corridor.on, o = n.inInstance ? n.instanceLive ? n.instanceShow ?? "" : "" : r ? t.corridor.show : Rp(e, t), l = { on: r, canToggle: !n.inInstance, scope: i, viewers: 0, heat: 0, tipTotal: 0, injectToAI: n.injectToAI, feed: [], lastTip: null };
  if (!o) return l;
  const { items: a, last: c } = Fp(e, t, o), A = a.filter((x) => !s.has(x.id));
  let d = 0, h = null;
  for (const x of A)
    d += x.net, x.t === "tip" && (h = { id: x.id, net: x.net });
  return {
    ...l,
    viewers: r ? c?.viewers ?? n.startViewers ?? 0 : 0,
    heat: r ? c?.heat ?? Vl : 0,
    tipTotal: d,
    feed: A.slice(-60),
    lastTip: h
  };
}
const Lp = ["小满", "好运来", "路过的D级", "一个路过的A级", "数据党", "理性讨论", "吃瓜", "夜班保安", "柠檬汁", "阿柒", "东区卖菜的", "西区摆摊的", "情报社小号", "失眠第三天", "房租交不起", "今天也在种土豆", "匿名", "光幕前的咸鱼", "刚通关的C级", "排行榜第九十九", "不想进本", "炸鱼被抓过", "黑市常客", "训练场打卡人", "药剂站熬夜班", "公会跑腿的", "一个路人", "今日份幸运", "积分快见底", "刚升B级", "看录像长大的", "老观众", "新来的", "别叫我大佬", "蹲一个结算", "白开水", "半夜不睡", "又是我", "打工人", "瓜田里的猹", "慢热", "晴天", "阿九", "十一", "小绿", "老周", "木子", "苏苏", "七七", "一颗橘子", "等天亮", "北风", "不吃香菜", "没抢到号", "退役S级", "D级万岁", "靠运气活着", "只看不说", "路过打个卡", "最后一排"], jp = [{ type: "praise", text: "这反应速度，不愧是主播" }, { type: "praise", text: "冷静得不像第一次进这个级别的本", scope: "inst" }, { type: "praise", text: "刚才那个判断绝了" }, { type: "praise", text: "主播脑子转得是真快" }, { type: "praise", text: "这波我服" }, { type: "praise", text: "稳，太稳了" }, { type: "praise", text: "讲道理，换我早慌了" }, { type: "praise", text: "这就是高手吗" }, { type: "praise", text: "看得我手心出汗，主播还面不改色" }, { type: "praise", text: "刚才那句话说得漂亮" }, { type: "praise", text: "细节拉满，这都注意到了", scope: "inst" }, { type: "praise", text: "主播说话好有条理" }, { type: "praise", text: "这才叫会玩" }, { type: "praise", text: "就冲这个判断，关注了" }, { type: "praise", text: "有勇有谋" }, { type: "praise", text: "比上一个主播强多了" }, { type: "praise", text: "队友拖后腿，主播一个人在带", scope: "inst" }, { type: "praise", text: "这个位置站得好", scope: "inst" }, { type: "praise", text: "我宣布这是本周最佳直播" }, { type: "praise", text: "主播镇定得让我也镇定了" }, { type: "praise", text: "那个眼神，太帅了" }, { type: "praise", text: "心态真好，要是我早骂人了" }, { type: "praise", text: "这个节奏把握得好", scope: "inst" }, { type: "praise", text: "看出来是做过功课的" }, { type: "praise", text: "夸一句，主播是真的会说话" }, { type: "praise", text: "一句话就把场面稳住了", scope: "inst" }, { type: "praise", text: "这份胆量我是没有" }, { type: "praise", text: "学到了，下次我也这么干" }, { type: "praise", text: "主播好好看" }, { type: "praise", text: "声音也好听，别下播" }, { type: "praise", text: "越看越顺眼" }, { type: "praise", text: "这气质，放在哪个本都是主角" }, { type: "praise", text: "能屈能伸，佩服" }, { type: "praise", text: "刚才那一下我起立鼓掌" }, { type: "praise", text: "不慌不忙，高手风范" }, { type: "praise", text: "回廊里也过得这么讲究，爱了", scope: "corr" }, { type: "praise", text: "主播种的菜看着真水灵", scope: "corr" }, { type: "praise", text: "这手艺可以去西区摆摊了", scope: "corr" }, { type: "praise", text: "休整都不忘练，怪不得排名涨", scope: "corr" }, { type: "praise", text: "房间收拾得真干净", scope: "corr" }, { type: "bless", text: "祝平安出来！！", scope: "inst" }, { type: "bless", text: "主播一定要活着回来", scope: "inst" }, { type: "bless", text: "保佑保佑" }, { type: "bless", text: "冲啊主播！" }, { type: "bless", text: "这把一定能过", scope: "inst" }, { type: "bless", text: "结算见！", scope: "inst", when: "end" }, { type: "bless", text: "平安就好，评级无所谓", scope: "inst" }, { type: "bless", text: "等你出来请你吃饭", scope: "inst" }, { type: "bless", text: "好运加满，霉运退散" }, { type: "bless", text: "希望别再有人出事了", scope: "inst", when: "hurt" }, { type: "bless", text: "主播加油，我在东区超市门口看着呢" }, { type: "bless", text: "撑住，天总会亮的", scope: "inst" }, { type: "bless", text: "别怕，我们都在" }, { type: "bless", text: "好人一生平安" }, { type: "bless", text: "这波过了就能歇歇了", scope: "inst" }, { type: "bless", text: "下个副本抽个简单的吧", scope: "corr" }, { type: "bless", text: "注意安全，别逞强", scope: "inst" }, { type: "bless", text: "保重身体啊", when: "hurt" }, { type: "bless", text: "受伤了先处理伤口", scope: "inst", when: "hurt" }, { type: "bless", text: "一路绿灯，一路绿灯" }, { type: "bless", text: "今天也要好好活着" }, { type: "bless", text: "愿系统对你手下留情" }, { type: "bless", text: "别哭，我们陪你", when: "hurt" }, { type: "bless", text: "等着看你升级" }, { type: "bless", text: "最后一口气了，撑住", scope: "inst", when: "end" }, { type: "bless", text: "最后几轮，稳住！", scope: "inst", when: "end" }, { type: "bless", text: "主播今天早点睡", scope: "corr" }, { type: "bless", text: "休息好了再进本", scope: "corr" }, { type: "bless", text: "希望房租别涨", scope: "corr" }, { type: "bless", text: "回廊安稳一天是一天", scope: "corr" }, { type: "discuss", text: "现在什么情况，我刚进来" }, { type: "discuss", text: "来了来了，这把什么本", scope: "inst", when: "open" }, { type: "discuss", text: "开播了开播了", when: "open" }, { type: "discuss", text: "新主播？没见过", when: "open" }, { type: "discuss", text: "先别吵，看局势" }, { type: "discuss", text: "我觉得还有线索没找到", scope: "inst" }, { type: "discuss", text: "按往届，这本不好打", scope: "inst" }, { type: "discuss", text: "有没有人看过这本的录像", scope: "inst" }, { type: "discuss", text: "黑市那种录像别全信" }, { type: "discuss", text: "这队人各怀心思吧", scope: "inst" }, { type: "discuss", text: "现在还剩几个人？", scope: "inst" }, { type: "discuss", text: "前面说的那个我也注意到了" }, { type: "discuss", text: "理性讨论，别带节奏" }, { type: "discuss", text: "我赌主播能过" }, { type: "discuss", text: "有人算过这把能拿什么评吗", scope: "inst" }, { type: "discuss", text: "主播刚才是不是话里有话" }, { type: "discuss", text: "这个人说话一直留半句", scope: "inst" }, { type: "discuss", text: "注意细节，刚才那句不对劲", scope: "inst" }, { type: "discuss", text: "我在光幕前面站了一个小时了" }, { type: "discuss", text: "回放能看吗，刚才没看清" }, { type: "discuss", text: "有没有懂的解释一下" }, { type: "discuss", text: "你们看出来了吗，我看不出来" }, { type: "discuss", text: "这一段要是剪进录像会卖爆" }, { type: "discuss", text: "楼上别剧透……虽然我也不知道" }, { type: "discuss", text: "好无聊，快进", when: "calm" }, { type: "discuss", text: "主播在发呆吗", when: "calm" }, { type: "discuss", text: "挂着当背景音了", when: "calm" }, { type: "discuss", text: "去泡了碗面回来还是这样", when: "calm" }, { type: "discuss", text: "这么安静，要出事了吧", scope: "inst", when: "calm" }, { type: "discuss", text: "暴风雨前的宁静", scope: "inst", when: "calm" }, { type: "discuss", text: "啊啊啊有人倒了", scope: "inst", when: "hurt" }, { type: "discuss", text: "刚才那一下我没敢看", when: "hurt" }, { type: "discuss", text: "又走一个……", scope: "inst", when: "hurt" }, { type: "discuss", text: "手在抖吧，换我也抖", when: "hurt" }, { type: "discuss", text: "快结束了吧", scope: "inst", when: "end" }, { type: "discuss", text: "结算前最后几轮最容易出事", scope: "inst", when: "end" }, { type: "discuss", text: "今天种什么？", scope: "corr" }, { type: "discuss", text: "回廊直播也有人看，我服了我自己", scope: "corr" }, { type: "discuss", text: "排行榜又变了，你们看了吗", scope: "corr" }, { type: "discuss", text: "下个本打算报哪个？", scope: "corr" }, { type: "cold", text: "别高兴太早" }, { type: "cold", text: "我看悬" }, { type: "cold", text: "这把凉了吧" }, { type: "cold", text: "就这？" }, { type: "cold", text: "也就一般" }, { type: "cold", text: "运气好而已" }, { type: "cold", text: "换个人也能做到" }, { type: "cold", text: "等着翻车吧" }, { type: "cold", text: "这种判断，迟早出事" }, { type: "cold", text: "看了半天也没看出哪里厉害" }, { type: "cold", text: "太磨叽了" }, { type: "cold", text: "说了这么多，一点用没有" }, { type: "cold", text: "我押失败", scope: "inst" }, { type: "cold", text: "评级能拿个C就不错了", scope: "inst" }, { type: "cold", text: "队友再强也带不动", scope: "inst" }, { type: "cold", text: "太自信了，这本专治自信", scope: "inst" }, { type: "cold", text: "往届比这厉害的都栽在这", scope: "inst" }, { type: "cold", text: "真以为能全身而退？", scope: "inst" }, { type: "cold", text: "没意思，我换台了" }, { type: "cold", text: "这操作也就D级水平" }, { type: "cold", text: "这不是冷静，是反应慢" }, { type: "cold", text: "别吹了，看结算", scope: "inst" }, { type: "cold", text: "种菜有什么好看的", scope: "corr" }, { type: "cold", text: "回廊里直播，缺积分缺疯了吧", scope: "corr" }, { type: "cold", text: "天天摆烂，等着被清算吧", scope: "corr" }, { type: "envy", text: "凭什么这种人能上热门" }, { type: "envy", text: "我直播三天没人看，这也行？" }, { type: "envy", text: "长得好就是占便宜" }, { type: "envy", text: "又是这种运气好的" }, { type: "envy", text: "打赏的是托吧" }, { type: "envy", text: "我也想有人给我刷" }, { type: "envy", text: "这点本事也能拿打赏" }, { type: "envy", text: "同样是D级进来的，差距怎么这么大" }, { type: "envy", text: "分到这么好的队友，换我我也行", scope: "inst" }, { type: "envy", text: "酸了，真的酸了" }, { type: "envy", text: "一进来就有大佬带，羡慕不来", scope: "inst" }, { type: "envy", text: "这热度买的吧" }, { type: "envy", text: "凭什么打赏都往这边跑" }, { type: "envy", text: "我通关都没人看" }, { type: "envy", text: "排行榜上那些名字，一半靠运气" }, { type: "envy", text: "有人天生就是被偏爱的" }, { type: "envy", text: "我要是有这配置，比这还稳", scope: "inst" }, { type: "envy", text: "住的地方比我好十倍", scope: "corr" }, { type: "envy", text: "在回廊都能开播赚积分，羡慕哭了", scope: "corr" }, { type: "envy", text: "这菜种得，比我吃的还好", scope: "corr" }, { type: "smear", text: "装什么装" }, { type: "smear", text: "演的吧，这反应太假了" }, { type: "smear", text: "人设立得挺好" }, { type: "smear", text: "会说话而已，真打起来就露馅" }, { type: "smear", text: "这种人最会卖队友" }, { type: "smear", text: "表面客气，背地里肯定算计着" }, { type: "smear", text: "我不信真这么淡定" }, { type: "smear", text: "刚才那个眼神，心虚了吧" }, { type: "smear", text: "故意卖惨要打赏" }, { type: "smear", text: "刚才明明可以救，没救", scope: "inst", when: "hurt" }, { type: "smear", text: "自私，只顾自己", scope: "inst" }, { type: "smear", text: "队友出事了还这么冷静，冷血吧", scope: "inst", when: "hurt" }, { type: "smear", text: "这是在拿别人探路", scope: "inst" }, { type: "smear", text: "满嘴好话，一件实事没干" }, { type: "smear", text: "装新人的吧" }, { type: "smear", text: "就是冲着打赏来的" }, { type: "smear", text: "看着就不是好人" }, { type: "smear", text: "别被骗了，都是算计好的" }, { type: "smear", text: "下了本也要直播，吃相难看", scope: "corr" }, { type: "smear", text: "种田人设，炒给谁看", scope: "corr" }, { type: "rumor", text: "听说积分是借的，真的假的" }, { type: "rumor", text: "肯定是抱大腿进来的" }, { type: "rumor", text: "我朋友说在黑市见过这人" }, { type: "rumor", text: "据说上一个本是被人带飞的" }, { type: "rumor", text: "听说欠了一屁股积分" }, { type: "rumor", text: "有人说是买了攻略才敢进的", scope: "inst" }, { type: "rumor", text: "听说被公会踢出来过" }, { type: "rumor", text: "情报社的人说，这人被抽查过" }, { type: "rumor", text: "有人在西区看到这人跟黑市贩子说话" }, { type: "rumor", text: "据说是走后门才越级的" }, { type: "rumor", text: "听说上个本的队友都没出来" }, { type: "rumor", text: "有人说这人其实早就待清算了" }, { type: "rumor", text: "我听说排名是刷的" }, { type: "rumor", text: "传闻进本前偷偷买了防抽查道具" }, { type: "rumor", text: "听说有人专门花钱买这人的录像" }], Bp = [{ type: "praise", text: "{who}刚才那下好帅" }, { type: "praise", text: "{who}挺靠谱的" }, { type: "bless", text: "{who}别出事啊" }, { type: "bless", text: "心疼{who}" }, { type: "bless", text: "{who}还好吗", when: "hurt" }, { type: "discuss", text: "{who}靠谱吗，我看不透" }, { type: "discuss", text: "{who}又不说话了" }, { type: "discuss", text: "{who}刚才那句什么意思" }, { type: "discuss", text: "盯紧{who}" }, { type: "discuss", text: "{who}和主播配合挺默契" }, { type: "discuss", text: "{who}好像知道点什么" }, { type: "cold", text: "{who}也就那样" }, { type: "cold", text: "指望{who}？算了吧" }, { type: "envy", text: "凭什么{who}也有人喜欢" }, { type: "smear", text: "我就说{who}有问题" }, { type: "smear", text: "{who}在演" }, { type: "smear", text: "{who}那个表情不对劲" }, { type: "rumor", text: "听说{who}在排行榜上挂过名" }, { type: "rumor", text: "我听说{who}以前出过事" }, { type: "rumor", text: "{who}跟主播是不是早就认识" }], Vp = {
  names: Lp,
  pool: jp,
  templates: Bp
}, Tn = /* @__PURE__ */ new Set(), Dt = [];
let lt = null, Jn = [], si = null;
function Rn() {
  for (const e of Jn.slice())
    try {
      e();
    } catch (t) {
      console.warn("[rlzc] RLZC_LIVE 订阅回调出错", t);
    }
}
function Up() {
  return 1500 + Math.random() * 1500;
}
function ql() {
  lt = null;
  const e = Dt.shift();
  e !== void 0 && (Tn.delete(e), Rn()), Dt.length && (lt = setTimeout(ql, Up()));
}
function Wi(e, t = !1) {
  if (t && Dt.length) {
    for (const n of Dt) Tn.delete(n);
    Dt.length = 0, lt && clearTimeout(lt), lt = null;
  }
  if (e.length) {
    for (const n of e)
      Tn.add(n.id), Dt.push(n.id);
    lt ? Rn() : ql();
  }
}
function Wp() {
  lt && clearTimeout(lt), lt = null, Dt.length = 0, Tn.clear();
}
function Hp(e) {
  si = e, window.RLZC_LIVE = {
    get: () => si.view(Tn),
    subscribe(t) {
      return typeof t != "function" ? () => {
      } : (Jn.push(t), () => {
        Jn = Jn.filter((n) => n !== t);
      });
    },
    toggle: () => si.toggle()
  };
}
const vi = "rlzc", qn = { optIn: !1, injectToAI: !1, source: "local", freq: 3 }, Ql = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, pn = {
  depths: { token: 4, progress: 4, turn: 0, ledger: 4, live: 4 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...Cn },
  subApi: structuredClone(Ql),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0, live: !0, auditDebug: !0, manualDebug: !0, injectionDebug: !0 },
  live: { ...qn }
}, f = /* @__PURE__ */ ks({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(pn),
  packs: [],
  lastInjection: Mn,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: []
});
function Qe(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ns(...e) {
  f.settings.debug && console.log("[rlzc]", ...e);
}
function Yp() {
  const e = Ae().extensionSettings, t = e[vi] ?? {}, n = {
    ...structuredClone(pn),
    ...t,
    depths: { ...pn.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? pn.depths.ledger },
    ball: { ...pn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => il(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...Cn, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(Ql),
      ...t.subApi ?? {},
      presets: Array.isArray(t.subApi?.presets) ? t.subApi.presets : [],
      // 旧版本里的「酒馆连接配置」来源已删除，按关闭处理
      source: ["off", "main", "preset"].includes(t.subApi?.source) ? t.subApi.source : "off"
    },
    cardCollapsed: {
      depths: t.cardCollapsed?.depths ?? !0,
      subApi: t.cardCollapsed?.subApi ?? !0,
      genericCaps: t.cardCollapsed?.genericCaps ?? !0,
      accountFix: t.cardCollapsed?.accountFix ?? !0,
      rolesDebug: t.cardCollapsed?.rolesDebug ?? !0,
      live: t.cardCollapsed?.live ?? !0,
      auditDebug: t.cardCollapsed?.auditDebug ?? !0,
      manualDebug: t.cardCollapsed?.manualDebug ?? !0,
      injectionDebug: t.cardCollapsed?.injectionDebug ?? !0
    },
    live: Gp(t.live)
  };
  e[vi] = n, f.settings = n, f.packs = Fi(n.customPacks);
}
function Gp(e) {
  const t = e ?? {}, n = Math.floor(Number(t.freq));
  return {
    optIn: typeof t.optIn == "boolean" ? t.optIn : qn.optIn,
    injectToAI: typeof t.injectToAI == "boolean" ? t.injectToAI : qn.injectToAI,
    source: t.source === "ai" ? "ai" : "local",
    freq: Number.isFinite(n) ? Math.max(1, Math.min(10, n)) : qn.freq
  };
}
function pe() {
  Ae().extensionSettings[vi] = /* @__PURE__ */ X(f.settings), Ae().saveSettingsDebounced(), f.packs = Fi(f.settings.customPacks);
}
function Kp(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = il(t);
  if (n.length) return n;
  const s = t;
  return Fi([]).some((i) => i.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (f.settings.customPacks = [...f.settings.customPacks.filter((i) => i.id !== s.id), s], pe(), []);
}
function Zp(e) {
  f.settings.customPacks = f.settings.customPacks.filter((t) => t.id !== e), pe();
}
function et() {
  const e = wt()[Dl];
  return !e || Array.isArray(e) ? {} : e;
}
function On(e) {
  wt()[Dl] = e, Xe();
}
function Yt(e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    if (r.is_user || r.is_system) continue;
    const o = r.extra?.rlzc?.ledger;
    if (!Array.isArray(o)) continue;
    const l = [r.send_date, r.gen_finished].map((a) => a instanceof Date ? a.getTime() : Date.parse(String(a ?? ""))).find((a) => Number.isFinite(a));
    for (const a of o) t.push({ ...a, mesIndex: i, ts: l });
  }
  const s = (et().adjust ?? []).map((i) => ({
    delta: i.amount,
    source: `手动：${i.note}`,
    type: "manual",
    at: i.at,
    mesIndex: -1,
    ts: i.ts ?? Qf(i.at)
  }));
  return Xf(t, s);
}
function Gt(e) {
  const t = et();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const i = e[s];
    if (i.is_user || !i.mes) continue;
    const r = n.exec(i.mes);
    if (!r) continue;
    const o = Fl(r[1]);
    if (o !== null) {
      const l = sn(i.send_date ?? i.gen_finished ?? void 0);
      return On({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function Jp(e) {
  const t = et();
  if (!(t.init != null || f.ledger.length > 0)) return "";
  const s = Gt(e), i = rn(s.value, f.ledger), r = /<状态栏>([\s\S]*?)<\/状态栏>/;
  let o = "D";
  const l = t.fix?.level;
  if (l && ["D", "C", "B", "A", "S"].includes(l))
    o = l;
  else
    for (let h = e.length - 1; h >= 0; h--) {
      if (e[h].is_user || !e[h].mes) continue;
      const x = r.exec(e[h].mes);
      if (!x) continue;
      const k = Li(x[1]);
      if (k) {
        o = k;
        break;
      }
    }
  const a = Ht[o], c = Fn(s.value, f.ledger, a), A = np(i, c, o, a), d = ct();
  return d?.status === "active" && d.live ? Dp(A, Wl(e, d.id)) : A;
}
function Or(e, t = !0) {
  const n = J(), s = n[e];
  if (!s || s.is_user) return;
  const i = s.mes ?? "", r = sn(s.send_date ?? s.gen_finished ?? void 0), o = [], l = new RegExp(rf.source, "g");
  let a;
  for (; (a = l.exec(i)) !== null; ) {
    const A = Jf(a[1]);
    A && o.push({ delta: A.delta, source: A.source, type: "tag", at: r });
  }
  const c = t ? Ms(i) : null;
  if (c && f.pack && !f.pack.rest) {
    const A = {
      结果: c.result ?? "",
      评价: c.rating ?? "",
      ...c.fields
    }, d = et(), h = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let x = "D";
    const k = d.fix?.level;
    if (k && ["D", "C", "B", "A", "S"].includes(k))
      x = k;
    else
      for (let y = e - 1; y >= 0; y--) {
        if (n[y].is_user || !n[y].mes) continue;
        const g = h.exec(n[y].mes);
        if (!g) continue;
        const w = Li(g[1]);
        if (w) {
          x = w;
          break;
        }
      }
    const v = Gt(n), F = rn(v.value, f.ledger), j = !!f.session?.clearance, T = qf(f.pack.level, x, A, F, j, f.pack.name);
    if (T.warn) {
      s.extra = s.extra ?? {};
      const y = s.extra.rlzc ?? { phase: "", round: 0, injected: [] };
      s.extra.rlzc = Qe({ ...y, settleWarn: T.warn });
    }
    if (T.delta !== 0) {
      const y = { delta: T.delta, source: T.source, type: "settle", at: r };
      T.clearWin && (y.clear = !0), o.push(y);
    }
  }
  if (o.length || s.extra?.rlzc?.ledger?.length) {
    s.extra = s.extra ?? {};
    const A = s.extra.rlzc ?? { phase: "", round: 0, injected: [] }, d = [...o, ...(A.ledger ?? []).filter((h) => h.type === "tip")];
    s.extra.rlzc = Qe({ ...A, ledger: d.length ? d : void 0 }), Xe();
  }
  f.ledger = Yt(J());
}
function qp(e, t) {
  const n = et(), s = sn(void 0), i = [...n.adjust ?? [], { amount: e, note: t, at: s, ts: Date.now() }];
  On({ ...n, adjust: i }), f.ledger = Yt(J());
}
function Qp(e, t) {
  qp(e, t);
}
function Xp(e) {
  const t = et(), n = sn(void 0);
  On({ ...t, init: { value: e, source: "手动设置", at: n } }), f.ledger = Yt(J());
}
function eh(e, t) {
  if (!e && !t) return;
  const n = et(), s = J(), i = sn(void 0);
  On({ ...n, fix: { level: e, rank: t, at: i, afterIndex: s.length - 1 } });
}
function ct() {
  return rp(wt()[mt]);
}
function Ds() {
  const e = wt(), t = Array.isArray(e[mt]?.declined) ? e[mt].declined : [], n = Array.isArray(e[Fr]) ? e[Fr] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function th(e) {
  const t = wt(), n = [...Ds().filter((s) => s !== e), e];
  t[mt] = { ...t[mt] ?? {}, declined: n }, Xe();
}
function Vt(e) {
  const t = wt(), n = Ds(), s = n.length ? { declined: n } : {};
  e ? t[mt] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[mt] = s : delete t[mt], Xe();
}
function Hi(e) {
  const t = ct();
  t && (e(t), Vt(t), Ke());
}
function Xl(e) {
  const t = J();
  return (e === "swipe" || e === "continue") && Te(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function ps(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = op(t, f.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = hf(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? hp(e, n, s) : null };
}
function Ke() {
  const e = J();
  let t = ct();
  if (t) {
    const s = JSON.stringify(t);
    if (!ap(e, t))
      Vt(null), Pe("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const i = ps(e, t);
      i.progress && (t.status = i.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && Vt(t);
    }
  }
  const n = ps(e, t);
  f.session = n.session, f.pack = n.pack, f.progress = n.progress, f.audit = n.audit, f.subLine = oa(e, n.progress), f.ledger = Yt(e), f.tick++, Rn();
}
function ea() {
  if (f.session)
    return Rl(f.session, f.progress?.rolesFromChat);
}
function hs() {
  for (const e of mf) It(e, "", 0, !1);
}
let bn = -1;
function nh(e) {
  const t = Xl(e), n = ct(), { pack: s, progress: i, audit: r } = ps(t, n), o = n ? Rl(n, i?.rolesFromChat) : void 0, l = Os() && !!i, a = l ? Is(t, i.entryIndex) : null, c = s ? vf(s, i, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: i?.panel?.limit,
    audit: r ?? void 0,
    subNext: l ? Ff(t, i.entryIndex) : void 0,
    stateText: a ? $l(s, a.state) : void 0
  }) : Mn;
  hs();
  const A = f.settings.depths;
  c.token && It(pl, c.token, A.token, !0), c.progress && It(hl, c.progress, A.progress, !1), c.turn && It(ml, c.turn, A.turn, !1), c.state && It(gl, c.state, A.progress, !1);
  const d = et();
  let h = Jp(t);
  if (d.fix) {
    const x = tp(d.fix);
    x && (h = h ? `${h}
${x}` : x);
  }
  if (h && It(xl, h, A.ledger, !1), f.settings.live.injectToAI) {
    const x = Yf(Zi(/* @__PURE__ */ new Set(), t));
    x && It(yl, x, A.live, !1);
  }
  f.lastInjection = c, bn = t.length, Ns("注入", e, c);
}
const bi = /* @__PURE__ */ new Set();
async function sh() {
  const e = J(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = lf(n.mes);
  if (!s) return;
  const i = ct();
  if (!i || i.status !== "active" || i.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const r = `${In()}:${t}:${n.mes}`;
  if (bi.has(r)) return;
  bi.add(r);
  const { pack: o, progress: l } = ps(e, i);
  if (!o || !l || l.ended) return;
  const a = af(o, l.phase, l.round, s);
  a && await kt(`是否跳到${s}？（${a.label}）`) && (i.manual.push({ kind: "skip", atIndex: t, targetPhase: a.phase, targetRound: a.round }), Vt(i));
}
async function ih(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      hs();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await sh(), await hh(s), nh(s);
  } catch (i) {
    console.error("[rlzc] 拦截器出错", i), hs();
  }
}
const Qn = /* @__PURE__ */ new Set();
function Yi() {
  const e = ct();
  if (!e || e.status !== "ended") return 0;
  const t = f.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
async function ta(e) {
  const { index: t, info: n } = e, s = In(), i = `${s}:${t}:${n.name}`;
  if (Qn.has(i)) return;
  Qn.add(i);
  const r = e.pack ? `检测到进入《${e.pack.name}》，是否启用？` : `检测到进入《${n.name}》，是否启用？（未收录的副本，将使用通用副本包）`, o = Ul(e.pack ?? {}, f.settings.live.optIn), l = await vl(r, o.show ? { label: "开启直播", checked: o.checked } : null);
  if (In() !== s) {
    Qn.delete(i);
    return;
  }
  if (!l.ok) {
    th(ji(t, n.name));
    return;
  }
  o.show && na(l.checked);
  const a = Ts(J(), t, f.packs);
  if (!a || a.info.name !== n.name) {
    Pe("warning", "入场消息已变化，未启用。");
    return;
  }
  const c = { ...n };
  e.pack || (c.rounds = nl(n.limit, rl(n), f.settings.genericCaps).rounds), ia(e.pack ?? ol(c, f.settings.genericCaps), t, c, o.show && l.checked);
}
function na(e) {
  f.settings.live.optIn !== e && (f.settings.live.optIn = e, pe());
}
function sa() {
  const e = Ap(J(), ct(), Ds(), f.packs, Yi());
  e && ta(e);
}
function rh(e) {
  Ke();
  const t = J(), n = Yi();
  let s = -1;
  for (let i = n; i < t.length; i++) if (Te(t[i])) {
    s = i;
    break;
  }
  e === s && sa();
}
function ia(e, t, n, s = !1) {
  const i = J(), r = i[t], o = ip(e, t, n), l = At();
  if (l.corridor.on && (l.corridor.on = !1, Pn(l, l.corridor.show, Bt.enterOff)), s && !e.disableLive && (o.live = !0, Pn(l, o.id, Bt.instanceOn)), on(l), !e.rest) {
    const a = Gt(i), c = et(), A = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let d = "D";
    const h = c.fix?.level;
    if (h && ["D", "C", "B", "A", "S"].includes(h))
      d = h;
    else
      for (let x = i.length - 1; x >= 0; x--) {
        if (i[x].is_user || !i[x].mes) continue;
        const k = A.exec(i[x].mes);
        if (!k) continue;
        const v = Li(k[1]);
        if (v) {
          d = v;
          break;
        }
      }
    Fn(a.value, f.ledger, Ht[d]) && (o.clearance = !0);
  }
  r.extra = r.extra ?? {}, r.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: o.id }, Vt(o), Ke(), f.progress && (r.extra.rlzc.injected = Qe(f.progress.perMessage[t]?.events ?? [])), Xe(), Pe("success", `已进入副本《${e.name}》。`);
}
async function oh(e) {
  const t = f.packs.find((l) => l.id === e);
  if (!t) return;
  const n = J();
  let s = n.length - 1;
  for (; s >= 0 && !Te(n[s]); ) s--;
  if (s < 0) {
    Pe("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  if (ct()?.status === "active" && !await kt("当前已有进行中的副本，确定要替换吗？")) return;
  const r = Ul(t, f.settings.live.optIn), o = await vl(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`, r.show ? { label: "开启直播", checked: r.checked } : null);
  o.ok && (r.show && na(o.checked), ia(t, s, al(n[s].mes) ?? { name: t.name }, r.show && o.checked));
}
function Fs(e) {
  Hi((t) => t.manual.push(e));
}
function Rs() {
  return J().length - 1;
}
async function Lr() {
  const e = f.progress;
  if (!(!e || e.ended || !f.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Pe("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await kt(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (Fs({ kind: "skip", atIndex: Rs(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Pe("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function jr() {
  if (!(!f.session || f.progress?.ended) && await kt("确定要手动结束当前副本吗？")) {
    if (f.session.live) {
      const e = At();
      Pn(e, f.session.id, Bt.instanceOff), on(e);
    }
    Fs({ kind: "end", atIndex: Rs() });
  }
}
function lh(e) {
  Fs({ kind: "setPhase", atIndex: Rs(), phase: e });
}
function ah(e) {
  Fs({ kind: "setRound", atIndex: Rs(), round: e });
}
function ch(e) {
  Hi((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function Ah(e) {
  Hi((t) => t.manual.splice(e, 1));
}
async function Br() {
  f.session && await kt("确定要删除当前副本会话吗？（不会改动聊天记录）") && (Vt(null), Ke());
}
function Os() {
  return f.settings.subApi.source !== "off";
}
function ra() {
  const e = f.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function uh(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function oa(e, t) {
  if (!Os() || !t || t.ended) return "";
  if (f.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const i = Is(e, t.entryIndex);
  return i && t.perMessage[i.index] ? `副本记录：已更新（第${t.perMessage[i.index].round}轮）` : "副本记录：尚未整理";
}
let Xn = null;
const Gi = /* @__PURE__ */ new Set();
function Ut(e) {
  return Pf(In(), e, J()[e]);
}
function Vr(e) {
  f.subBusy = e, f.subLine = oa(J(), f.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && f.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function la(e, t, n) {
  if (Ut(e) !== t) return;
  const s = J()[e];
  s?.extra?.rlzc && (s.extra.rlzc = Qe({ ...s.extra.rlzc, sub: n }), Xe(), Ke());
}
function dh(e, t) {
  const n = J(), s = f.progress, i = f.pack, r = n[e], o = s?.perMessage[e];
  if (!i || !s || !o || !r) return null;
  const l = ea(), a = (y) => ({ ...y, text: As(y.text, i, l), if: y.if ? As(y.if, i, l) : void 0 }), c = Mf(i, r.extra?.rlzc?.injected ?? []).map(a), A = (s.next?.events ?? []).filter((y) => y.if).map(a);
  if (!Nf({
    enabled: Os(),
    active: !s.ended && f.session?.status === "active",
    type: t,
    saveMode: f.settings.subApi.saveMode,
    hasEvents: c.length > 0,
    hasNextConditional: A.length > 0
  })) return null;
  const h = Ut(e);
  if (Gi.has(h)) return null;
  const x = i.phases.find((y) => y.id === o.phase), k = Is(n.slice(0, e), s.entryIndex), v = Cf({
    pack: i,
    phaseName: x?.name ?? o.phase,
    round: o.round,
    prevState: k?.state ?? null,
    events: c,
    nextConditional: A,
    text: String(r.mes ?? "")
  }), F = Ae().substituteParams, j = F ? { system: F(v.system), user: F(v.user) } : v, T = fh(e, h, o.round, j);
  return Xn = { key: h, index: e, promise: T }, T.finally(() => {
    Xn?.key === h && (Xn = null);
  }), T;
}
async function fh(e, t, n, s) {
  Vr(!0);
  try {
    let i = 2;
    for (; ; ) {
      const r = ra();
      if (!r) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await Df((a) => Pl(r, a), s, i);
        la(e, t, { ...l, ms: Date.now() - o, via: uh(r), at: (/* @__PURE__ */ new Date()).toISOString() }), Gi.add(t);
        return;
      } catch (l) {
        if (Ut(e) !== t) return;
        const a = Oi(l), c = String(l?.message ?? l).slice(0, 200);
        if (Ns("副本事件检测失败", a, l), !f.settings.subApi.wait) {
          Pe("warning", `第${n}轮事件检测失败（${a}），已沿用上一轮状态。`), ii(e, t, a);
          return;
        }
        if (await ph(n, a, c) === "skip") {
          ii(e, t, a);
          return;
        }
        i = 0;
      }
    }
  } catch (i) {
    Pe("error", String(i?.message ?? i)), ii(e, t, "其他");
  } finally {
    Vr(!1);
  }
}
function ii(e, t, n) {
  Gi.add(t), la(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function ph(e, t, n) {
  const s = Ae();
  if (!s.Popup || !s.POPUP_TYPE)
    return window.confirm(`第${e}轮事件检测失败（${t}）。重试吗？取消则这轮先跳过。`) ? "retry" : "skip";
  const i = f.settings.subApi, r = document.createElement("div"), o = document.createElement("h3");
  o.textContent = `第${e}轮事件检测失败`;
  const l = document.createElement("p");
  l.textContent = `原因：${t}`;
  const a = document.createElement("small");
  a.textContent = n, a.style.opacity = "0.7";
  const c = document.createElement("div");
  c.style.cssText = "display:none;margin-top:10px;";
  const A = document.createElement("label");
  A.textContent = "换成：";
  const d = document.createElement("select");
  d.className = "text_pole";
  const h = [{ value: "", text: "请选择…" }];
  for (const v of i.presets) i.source === "preset" && v.id === i.presetId || h.push({ value: `preset:${v.id}`, text: `自设API：${v.name}` });
  i.source !== "main" && h.push({ value: "main", text: "跟随主API" });
  for (const v of h) {
    const F = document.createElement("option");
    F.value = v.value, F.textContent = v.text, d.append(F);
  }
  A.append(d), c.append(A), r.append(o, l, a, c);
  let x;
  d.addEventListener("change", () => {
    const v = d.value;
    v && (v === "main" ? i.source = "main" : (i.source = "preset", i.presetId = v.slice(7)), pe(), x.complete(s.POPUP_RESULT.CUSTOM1));
  }), x = new s.Popup(r, s.POPUP_TYPE.TEXT, "", {
    okButton: "重试",
    cancelButton: "这轮先跳过",
    customButtons: [
      {
        text: "换一个接口",
        action: () => {
          c.style.display = "", d.focus();
        }
      }
    ]
  });
  const k = await x.show();
  return k === s.POPUP_RESULT.AFFIRMATIVE || k === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function hh(e) {
  const t = Xn;
  if (!(!t || !f.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= Xl(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function mh(e, t) {
  const n = J(), s = n[e];
  if (!Te(s)) return;
  const i = ct();
  if (!i || i.status === "ended") {
    if (Ts(n, e, f.packs)) {
      const c = cp(n, f.packs, Yi(), e, Ds());
      c && ta(c);
    }
    if (t === "first_message") return;
    Ke(), Or(e, !1), Wr(e), li(e, t), Ur();
    return;
  }
  if (t === "first_message") return;
  let r = null;
  const o = Al(s.mes);
  o && (i.roles = { ...i.roles ?? {}, ...o }), Vt(i), Ke();
  const l = f.progress?.perMessage[e];
  if (l && f.pack) {
    const c = f.pack.phases.find((v) => v.id === l.phase), A = {
      phase: c?.name ?? l.phase,
      round: l.round,
      injected: bn === e ? f.lastInjection.injected : l.events
    }, d = f.pack.time;
    d.type === "clock" && c?.clock && !c.night && !c.frozen && (A.clock = dl(d.dayStart, d.minutesPerRound, l.round));
    const h = bn === e ? f.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    h && (A.limit = h);
    const x = s.extra?.rlzc?.entry;
    x && (A.entry = x), bn === e && f.lastInjection.skipped?.length && (A.skippedEvents = f.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (A.sub = s.extra.rlzc.sub), t === "continue" && s.extra?.rlzc?.live && (A.live = s.extra.rlzc.live);
    const k = (s.extra?.rlzc?.ledger ?? []).filter((v) => v.type === "tip");
    t === "continue" && k.length && (A.ledger = k), s.extra = s.extra ?? {}, s.extra.rlzc = Qe(A), Xe(), Ke(), r = dh(e, t);
  }
  const a = Ms(s.mes);
  if (a && Pe("info", `副本结算：${a.result ?? "—"}${a.rating ? `，评价 ${a.rating}` : ""}`), Or(e), Wr(e), r) {
    const c = Ut(e);
    r.then(() => {
      Ut(e) === c && li(e, t);
    });
  } else li(e, t);
  Ur();
}
function Ur() {
  const e = et();
  e.fix && On({ ...e, fix: void 0 });
}
function Wr(e) {
  const t = J(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const i = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!i) return;
  const r = Fl(i[1]);
  if (r === null) return;
  const o = Gt(t), l = rn(o.value, Yt(t).filter((a) => !(a.mesIndex === e && a.type === "tip")));
  r !== l && (Ns(`积分核对不符（楼层${e}）：状态栏 ${r}，账本 ${l}`), n.extra?.rlzc && (n.extra.rlzc = Qe({ ...n.extra.rlzc, ledgerMismatch: { status: r, ledger: l } }), Xe()));
}
function Hr() {
  bi.clear(), Qn.clear(), bn = -1, f.chatId = In(), f.debugUnlocked = !1, f.lastInjection = Mn, hs(), Wp(), bh(), f.ledger = Yt(J()), Ke(), sa(), setTimeout(() => Ki(), 50);
}
function ri() {
  Ke();
}
function aa() {
  return f.settings.panelDisplay === "statusbar" ? jt.filter((e) => e !== "副本") : jt;
}
function oi(e) {
  wl(e, aa());
}
function Ki(e = !1) {
  zf(aa(), e);
}
function gh(e) {
  f.settings.panelDisplay !== e && (f.settings.panelDisplay = e, pe(), Ki(!0));
}
const es = Vp;
function At() {
  return Sp(wt()[Bl]);
}
function on(e) {
  wt()[Bl] = Qe(e), Xe();
}
function Pn(e, t, n) {
  if (!t) return;
  const s = Ps(J(), e) + 1, i = { id: s, t: "sys", name: "", text: n, amount: 0, net: 0, show: t };
  e.sys = [...e.sys, i].slice(-100), e.seq = s, Wi([i]);
}
function xh() {
  return "c" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function yh(e) {
  const t = f.session, n = f.progress;
  if (!!t && e > t.entryIndex && (!n?.ended || n.endIndex !== void 0 && e <= n.endIndex)) return t.live && f.pack ? { show: t.id, scope: "instance", pack: f.pack } : null;
  const i = At();
  return i.corridor.on && i.corridor.show ? { show: i.corridor.show, scope: "corridor", pack: null } : null;
}
function li(e, t) {
  if (t === "continue" || t === "first_message") return;
  const n = J(), s = n[e];
  if (!Te(s) || _t(s)) return;
  const i = yh(e);
  if (!i) return;
  const r = At(), { show: o, scope: l, pack: a } = i, c = f.progress, A = s.extra?.rlzc ?? { phase: "", round: 0, injected: [] }, d = Vi(n, o, e), h = A.sub && !A.sub.skipped ? { hype: A.sub.hype, hurt: A.sub.hurt } : void 0, x = l === "instance" && c?.endIndex === e && c.endedBy === "tag" ? Ms(s.mes) : null, k = !!x && ["死亡", "阵亡"].includes(String(x.result ?? "").trim()), v = c?.roundsLeft, F = /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(s.mes ?? "")), j = new Set((a?.events ?? []).filter((U) => U.kind !== "directive").map((U) => U.id)), T = Lf({
    aiSource: f.settings.live.source === "ai",
    subOn: Os(),
    roundInShow: d.length + 1,
    freq: f.settings.live.freq,
    phaseSwitch: F,
    hurt: Kl(String(s.mes ?? ""), h),
    eventDone: !!A.sub && !A.sub.skipped && (A.sub.events ?? []).some((U) => U.status === "done")
  }), y = Ip({
    show: o,
    scope: l,
    packLevel: a?.level ?? null,
    playerLevel: Ui(n, e + 1),
    isRest: !!a?.rest,
    prevHeat: d.length ? d[d.length - 1].rec.heat : null,
    roundsInShow: d.length,
    text: String(s.mes ?? ""),
    hasEvents: (A.injected ?? []).some((U) => j.has(U)),
    hasPhaseSwitch: F,
    sub: h,
    isEnd: l === "instance" && !!v && v.y > 0 && v.x < v.y * 0.1,
    phaseId: l === "instance" ? c?.perMessage[e]?.phase : void 0,
    pool: es.pool,
    templates: es.templates,
    packDanmaku: a?.danmaku,
    names: es.names,
    whoNames: Gl(Yl(n, e + 1), String(Ae().name1 ?? "")),
    recentTexts: Ep(n.slice(0, e)),
    firstId: Ps(n, r) + 1,
    settle: x ? { died: k, tipsBefore: Wl(n.slice(0, e), o) } : void 0,
    awaitAi: T,
    rand: Math.random
  });
  T && (y.ai = { ok: !1, pending: !0 });
  const g = sn(s.send_date ?? s.gen_finished ?? void 0), B = [...(A.ledger ?? []).filter((U) => U.type !== "tip"), ...Pp(y, g)];
  s.extra = s.extra ?? {}, s.extra.rlzc = Qe({ ...A, live: y, ledger: B.length ? B : void 0 }), r.seq = Math.max(r.seq, ...y.feed.map((U) => U.id)), on(r), f.ledger = Yt(J()), f.tick++, y.feed.length ? Wi(y.feed, !0) : Rn(), T && vh(e, y.scope === "instance" ? a?.name : void 0);
}
function vh(e, t) {
  const n = J(), s = Ut(e), i = ra();
  if (!i) {
    ai(e, s, [], "副本事件检测没有设置好", 0);
    return;
  }
  const r = [];
  for (let A = e; A >= 0 && r.length < 2; A--) Te(n[A]) && r.unshift(String(n[A].mes ?? ""));
  const o = Vf({
    scene: t ?? "回廊",
    texts: r,
    cast: Gl(Yl(n, e + 1), String(Ae().name1 ?? "")),
    samples: Bf(es.pool, 10, Math.random)
  }), l = Ae().substituteParams, a = l ? { system: l(o.system), user: l(o.user) } : o, c = Date.now();
  Wf((A) => Pl(i, A, { temperature: 0.9 }), a, 1).then((A) => ai(e, s, A, null, Date.now() - c)).catch((A) => {
    Ns("AI 弹幕生成失败", A);
    const d = String(A?.message ?? A).slice(0, 120);
    ai(e, s, [], `${Oi(A)}：${d}`, Date.now() - c);
  });
}
function ai(e, t, n, s, i) {
  if (Ut(e) !== t) return;
  const r = J(), o = r[e], l = _t(o);
  if (!l?.pending || !o.extra?.rlzc) return;
  const a = At(), c = Jl(l, s ? null : n, Ps(r, a) + 1, Math.random), A = s ? 0 : Math.min(n.length, 13), d = { ...c, ai: s ? { ok: !1, error: s, ms: i } : { ok: !0, count: A, ms: i } };
  o.extra.rlzc = Qe({ ...o.extra.rlzc, live: d }), a.seq = Math.max(a.seq, ...d.feed.map((h) => h.id)), on(a), f.tick++, Wi(d.feed, !0);
}
function bh() {
  const e = J();
  let t = !1;
  for (const n of e) {
    const s = _t(n);
    if (!s?.pending || !n.extra?.rlzc) continue;
    const i = At(), r = Jl(s, null, Ps(e, i) + 1, Math.random);
    n.extra.rlzc = Qe({ ...n.extra.rlzc, live: { ...r, ai: { ok: !1, error: "没有等到结果" } } }), i.seq = Math.max(i.seq, ...r.feed.map((o) => o.id)), on(i), t = !0;
  }
  t && Xe();
}
function wh() {
  const e = At();
  return f.session?.status === "active" && f.pack ? Bi({ packLevel: f.pack.level, playerLevel: Ui(J()), isRest: !!f.pack.rest, heat: 20, rand: 1 }) : e.corridor.viewers ?? 0;
}
function Zi(e, t = J()) {
  const n = f.session, s = n?.status === "active";
  return Op(
    t,
    At(),
    {
      inInstance: s,
      instanceLive: !!(s && n?.live),
      instanceShow: n?.id,
      startViewers: wh(),
      injectToAI: f.settings.live.injectToAI
    },
    e
  );
}
function kh() {
  if (f.session?.status === "active") return !1;
  const e = At();
  if (e.corridor.on)
    e.corridor.on = !1, Pn(e, e.corridor.show, Bt.corridorOff);
  else {
    const t = xh();
    e.corridor = {
      on: !0,
      show: t,
      viewers: Bi({ packLevel: null, playerLevel: Ui(J()), isRest: !1, heat: 20, rand: 0.9 + Math.random() * 0.2 })
    }, Pn(e, t, Bt.corridorOn);
  }
  return on(e), f.tick++, Rn(), !0;
}
const _h = { class: "rlzc-ball-mark" }, ci = 44, zh = /* @__PURE__ */ Oe({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ ge({ x: 0, y: 0 });
    let n = null;
    function s(A, d) {
      const h = window.innerWidth - ci - 4, x = window.innerHeight - ci - 4;
      return { x: Math.min(Math.max(4, A), h), y: Math.min(Math.max(4, d), x) };
    }
    function i() {
      const A = f.settings.ball;
      t.value = s(A.x ?? window.innerWidth - ci - 12, A.y ?? Math.round(window.innerHeight * 0.35));
    }
    function r(A) {
      A.currentTarget.setPointerCapture(A.pointerId), n = { id: A.pointerId, dx: A.clientX - t.value.x, dy: A.clientY - t.value.y, moved: !1, sx: A.clientX, sy: A.clientY };
    }
    function o(A) {
      !n || n.id !== A.pointerId || (Math.abs(A.clientX - n.sx) + Math.abs(A.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(A.clientX - n.dx, A.clientY - n.dy)));
    }
    function l(A) {
      if (!n || n.id !== A.pointerId) return;
      const d = n.moved;
      n = null, d ? (f.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, pe()) : f.panelOpen = !f.panelOpen;
    }
    const a = Y(() => !!f.session && !f.progress?.ended), c = Y(() => !!f.progress?.warn);
    return zs(() => f.settings.ball, i, { deep: !0 }), fc(() => {
      i(), window.addEventListener("resize", i);
    }), pc(() => window.removeEventListener("resize", i)), (A, d) => (z(), $("button", {
      class: ee(["rlzc-ball", { "is-active": a.value, "is-warn": c.value }]),
      style: bs({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: r,
      onPointermove: o,
      onPointerup: l,
      onPointercancel: l
    }, [
      u("span", _h, N(a.value ? P(f).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
});
function $h(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function dn(e) {
  return $h(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Sh(e) {
  const t = [];
  let n = null, s = [];
  const i = () => {
    s.length && t.push(`<p>${s.map(dn).join("<br>")}</p>`), s = [];
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
    const a = /^(#{1,4})\s+(.*)$/.exec(l);
    if (a) {
      i(), r();
      const h = Math.min(a[1].length + 2, 6);
      t.push(`<h${h}>${dn(a[2])}</h${h}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(l), A = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (c || A) {
      i();
      const h = c ? "ul" : "ol", x = c ? c[1] : A[2];
      n !== h ? (r(), n = h, t.push(h === "ol" ? `<ol start="${A[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(dn(x));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${dn(l.trim())}`);
      continue;
    }
    const d = /^>\s?(.*)$/.exec(l);
    if (d) {
      i(), r(), t.push(`<blockquote>${dn(d[1])}</blockquote>`);
      continue;
    }
    r(), s.push(l);
  }
  return i(), r(), t.join("");
}
const Eh = {
  key: 0,
  class: "rlzc-docs"
}, Ch = { class: "rlzc-subtabs" }, Mh = ["onClick"], Ih = { class: "rlzc-md" }, Th = ["innerHTML"], Ph = ["src", "alt"], Nh = {
  key: 2,
  class: "rlzc-note"
}, Yr = /* @__PURE__ */ Oe({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ ge(0);
    zs(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = Y(() => t.pack.docs?.[n.value]), i = Y(() => s.value?.md ? Sh(s.value.md) : ""), r = Y(() => s.value?.image ? Qd(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (z(), $("section", Eh, [
      u("div", Ch, [
        (z(!0), $(Q, null, xe(e.pack.docs, (a, c) => (z(), $("button", {
          key: c,
          class: ee({ on: n.value === c }),
          onClick: (A) => n.value = c
        }, N(a.title), 11, Mh))), 128))
      ]),
      u("article", Ih, [
        i.value ? (z(), $("div", {
          key: 0,
          innerHTML: i.value
        }, null, 8, Th)) : W("", !0),
        r.value ? (z(), $("img", {
          key: 1,
          src: r.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, Ph)) : s.value?.image && !r.value ? (z(), $("p", Nh, "图片无法加载：" + N(s.value.image), 1)) : W("", !0)
      ])
    ])) : W("", !0);
  }
}), Dh = {
  key: 0,
  class: "rlzc-ledger-summary"
}, Fh = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, Gr = /* @__PURE__ */ Oe({
  __name: "LedgerSummary",
  setup(e) {
    const t = Y(() => J()), n = Y(() => Gt(t.value)), s = Y(() => rn(n.value.value, f.ledger)), i = Y(() => f.pack?.level ?? "D"), r = Y(() => Ht[i.value]), o = Y(() => Fn(n.value.value, f.ledger, r.value)), l = Y(() => f.ledger.length > 0 || n.value.source !== "默认值");
    return (a, c) => l.value ? (z(), $("div", Dh, [
      u("span", {
        class: ee(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + N(s.value >= 0 ? "+" : "") + N(s.value), 3),
      o.value ? (z(), $("span", Fh, "待清算")) : W("", !0)
    ])) : W("", !0);
  }
}), Rh = { class: "rlzc-system" }, Oh = { class: "rlzc-card rlzc-hero" }, Lh = { class: "rlzc-hero-top" }, jh = { class: "rlzc-level" }, Bh = {
  key: 0,
  class: "rlzc-chip"
}, Vh = {
  key: 0,
  class: "rlzc-goal"
}, Uh = { class: "rlzc-grid" }, Wh = {
  key: 0,
  class: "rlzc-stat"
}, Hh = {
  key: 1,
  class: "rlzc-stat"
}, Yh = {
  key: 2,
  class: "rlzc-stat"
}, Gh = {
  key: 3,
  class: "rlzc-stat"
}, Kh = {
  key: 0,
  class: "rlzc-subline"
}, Zh = {
  key: 1,
  class: "rlzc-note"
}, Jh = {
  key: 2,
  class: "rlzc-card"
}, qh = { class: "rlzc-kv" }, Qh = { class: "rlzc-kv" }, Xh = {
  key: 0,
  class: "rlzc-note rlzc-note-warn"
}, em = {
  key: 3,
  class: "rlzc-note"
}, tm = {
  key: 4,
  class: "rlzc-card"
}, nm = {
  key: 0,
  class: "rlzc-kv"
}, sm = { class: "rlzc-mono" }, im = {
  key: 1,
  class: "rlzc-tasks"
}, rm = {
  key: 2,
  class: "rlzc-ps"
}, om = { class: "rlzc-actions" }, lm = ["disabled"], am = ["disabled"], cm = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, Am = {
  key: 2,
  class: "rlzc-card"
}, um = { class: "rlzc-row" }, dm = ["value"], fm = ["disabled"], pm = /* @__PURE__ */ Oe({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ ge(""), n = Y(() => !!f.session && !!f.pack), s = Y(() => f.progress), i = Y(() => n.value && !!s.value && !s.value.ended), r = Y(() => f.packs.find((h) => h.id === t.value) ?? null), o = Y(() => !!f.pack?.phases.length), l = Y(() => f.settings.panelDisplay !== "statusbar"), a = Y(() => {
      const h = s.value;
      return h ? o.value ? `${h.warn ? "⚠️ " : ""}${h.round}/${h.phase.cap}` : `第${h.round}轮` : "";
    }), c = Y(() => {
      const h = s.value;
      return h ? h.limit?.text ? h.limit.text : h.panel?.limit || f.session?.briefing?.limit || "—" : "";
    }), A = Y(() => {
      const h = s.value;
      return !!h && !h.ended && o.value && h.phase.cap > 0 && h.nextRound < h.phase.cap;
    });
    async function d() {
      t.value && (await oh(t.value), t.value = "");
    }
    return (h, x) => (z(), $("div", Rh, [
      n.value && s.value ? (z(), $(Q, { key: 0 }, [
        u("div", Oh, [
          u("div", Lh, [
            u("span", jh, N(P(f).pack?.rest ? "—" : P(f).pack.level), 1),
            u("h3", null, N(P(f).pack.name), 1),
            s.value.ended ? (z(), $("span", Bh, "已结束")) : W("", !0)
          ]),
          P(f).session?.briefing?.goal ? (z(), $("p", Vh, "目标：" + N(P(f).session.briefing.goal), 1)) : W("", !0)
        ]),
        u("div", Uh, [
          o.value ? (z(), $("div", Wh, [
            x[3] || (x[3] = u("span", null, "阶段", -1)),
            u("b", null, N(s.value.phase.name), 1)
          ])) : W("", !0),
          u("div", {
            class: ee(["rlzc-stat", { warn: s.value.warn }])
          }, [
            x[4] || (x[4] = u("span", null, "轮次", -1)),
            u("b", null, N(a.value), 1)
          ], 2),
          s.value.currentClock ? (z(), $("div", Hh, [
            x[5] || (x[5] = u("span", null, "钟时", -1)),
            u("b", null, N(s.value.currentClock), 1)
          ])) : W("", !0),
          s.value.roundsLeft ? (z(), $("div", Yh, [
            x[6] || (x[6] = u("span", null, "最多剩余轮次", -1)),
            u("b", null, N(s.value.roundsLeft.x) + "/" + N(s.value.roundsLeft.y), 1)
          ])) : W("", !0),
          l.value ? (z(), $("div", Gh, [
            x[7] || (x[7] = u("span", null, "剩余时间", -1)),
            u("b", null, N(c.value), 1)
          ])) : W("", !0),
          i.value ? W("", !0) : (z(), Ge(Gr, { key: 4 }))
        ]),
        P(f).subLine ? (z(), $("p", Kh, N(P(f).subLine), 1)) : W("", !0),
        s.value.skipGoal ? (z(), $("div", Zh, "快进中：目标 " + N(P(f).pack.phases.find((k) => k.id === s.value.skipGoal.phase)?.name) + " 第" + N(s.value.skipGoal.round) + "轮", 1)) : W("", !0),
        s.value.ended && s.value.settlement ? (z(), $("div", Jh, [
          u("div", qh, [
            x[8] || (x[8] = u("span", null, "结果", -1)),
            u("b", null, N(s.value.settlement.result ?? "—"), 1)
          ]),
          u("div", Qh, [
            x[9] || (x[9] = u("span", null, "评价", -1)),
            u("b", null, N(s.value.settlement.rating ?? "—"), 1)
          ]),
          P(f).session?.clearance && s.value.settlement.result === "失败" ? (z(), $("div", Xh, " 清算未通关 ")) : W("", !0)
        ])) : s.value.ended ? (z(), $("div", em, "副本已手动结束。")) : W("", !0),
        l.value && s.value.panel ? (z(), $("div", tm, [
          s.value.panel.progressBar ? (z(), $("div", nm, [
            x[10] || (x[10] = u("span", null, "进度", -1)),
            u("b", sm, N(s.value.panel.progressBar), 1)
          ])) : W("", !0),
          s.value.panel.tasks.length ? (z(), $("div", im, [
            x[11] || (x[11] = u("span", null, "任务", -1)),
            u("ul", null, [
              (z(!0), $(Q, null, xe(s.value.panel.tasks, (k, v) => (z(), $("li", { key: v }, N(k), 1))), 128))
            ])
          ])) : W("", !0),
          s.value.panel.ps ? (z(), $("div", rm, "ps：" + N(s.value.panel.ps), 1)) : W("", !0)
        ])) : W("", !0),
        u("div", om, [
          u("button", {
            class: "rlzc-btn",
            disabled: !A.value,
            onClick: x[0] || (x[0] = //@ts-ignore
            (...k) => P(Lr) && P(Lr)(...k))
          }, "跳过（到本阶段结束）", 8, lm),
          u("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: x[1] || (x[1] = //@ts-ignore
            (...k) => P(jr) && P(jr)(...k))
          }, "手动结束副本", 8, am)
        ]),
        i.value && P(f).pack.docs?.length ? (z(), Ge(Yr, {
          key: 5,
          pack: P(f).pack
        }, null, 8, ["pack"])) : W("", !0)
      ], 64)) : (z(), $("div", cm, [
        x[12] || (x[12] = u("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        Me(Gr)
      ])),
      i.value ? W("", !0) : (z(), $("div", Am, [
        x[14] || (x[14] = u("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        u("div", um, [
          ft(u("select", {
            "onUpdate:modelValue": x[2] || (x[2] = (k) => t.value = k),
            class: "rlzc-input"
          }, [
            x[13] || (x[13] = u("option", { value: "" }, "选择副本…", -1)),
            (z(!0), $(Q, null, xe(P(f).packs, (k) => (z(), $("option", {
              key: k.id,
              value: k.id
            }, N(k.level) + "｜" + N(k.name), 9, dm))), 128))
          ], 512), [
            [Xo, t.value]
          ]),
          u("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: d
          }, "进入", 8, fm)
        ])
      ])),
      !i.value && r.value?.docs?.length ? (z(), Ge(Yr, {
        key: 3,
        pack: r.value
      }, null, 8, ["pack"])) : W("", !0)
    ]));
  }
}), hm = { class: "rlzc-ledger" }, mm = { class: "rlzc-card rlzc-ledger-hero-card" }, gm = { class: "rlzc-ledger-hero-cols" }, xm = { class: "rlzc-ledger-hero-col" }, ym = { class: "rlzc-ledger-hero-col-val" }, vm = { class: "rlzc-ledger-hero-col" }, bm = { class: "rlzc-ledger-hero-col-val" }, wm = { class: "rlzc-ledger-hero-col" }, km = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, _m = { class: "rlzc-card" }, zm = {
  key: 0,
  class: "rlzc-ledger-list"
}, $m = { class: "rlzc-ledger-item-left" }, Sm = { class: "rlzc-ledger-item-src" }, Em = { class: "rlzc-ledger-item-time" }, Cm = { class: "rlzc-ledger-item-right" }, Mm = { class: "rlzc-ledger-item-after" }, Im = {
  key: 1,
  class: "rlzc-hint"
}, Tm = /* @__PURE__ */ Oe({
  __name: "LedgerTab",
  setup(e) {
    const t = Y(() => J()), n = Y(() => Gt(t.value)), s = Y(() => f.ledger), i = Y(() => rn(n.value.value, s.value)), r = Y(() => {
      const k = ep(n.value.value, s.value);
      return s.value.map((v, F) => ({ e: v, after: k[F] })).reverse();
    }), o = Y(() => f.pack?.level ?? "D"), l = Y(() => Ht[o.value]), a = Y(() => Fn(n.value.value, s.value, l.value)), c = Y(() => Math.max(0, l.value - i.value)), A = Y(() => n.value.source === "默认值");
    function d(k) {
      return new Intl.NumberFormat("zh-CN").format(k);
    }
    function h(k) {
      return (k >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(k);
    }
    function x(k) {
      try {
        const v = new Date(k), F = String(v.getMonth() + 1).padStart(2, "0"), j = String(v.getDate()).padStart(2, "0"), T = String(v.getHours()).padStart(2, "0"), y = String(v.getMinutes()).padStart(2, "0");
        return `${F}-${j} ${T}:${y}`;
      } catch {
        return k;
      }
    }
    return (k, v) => (z(), $("div", hm, [
      u("div", mm, [
        v[3] || (v[3] = u("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        u("b", {
          class: ee(["rlzc-ledger-hero-num", { negative: i.value < 0 }])
        }, N(d(i.value)), 3),
        v[4] || (v[4] = u("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        u("div", gm, [
          u("div", xm, [
            v[0] || (v[0] = u("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            u("span", ym, N(o.value), 1)
          ]),
          u("div", vm, [
            v[1] || (v[1] = u("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            u("span", bm, N(d(l.value)), 1)
          ]),
          u("div", wm, [
            v[2] || (v[2] = u("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            u("span", {
              class: ee(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": a.value }])
            }, N(a.value ? `距线 ${d(c.value)}` : "无"), 3)
          ])
        ]),
        A.value ? (z(), $("p", km, "初始积分按 1000 计，可在设置页修改")) : W("", !0)
      ]),
      u("div", _m, [
        v[5] || (v[5] = u("h4", null, "流水", -1)),
        s.value.length ? (z(), $("ul", zm, [
          (z(!0), $(Q, null, xe(r.value, (F, j) => (z(), $("li", {
            key: `${j}-${F.e.mesIndex}-${F.e.delta}-${F.e.at}`,
            class: "rlzc-ledger-item"
          }, [
            u("div", $m, [
              u("span", Sm, N(F.e.source), 1),
              u("span", Em, N(x(F.e.at)), 1)
            ]),
            u("div", Cm, [
              u("span", {
                class: ee(["rlzc-ledger-item-delta", F.e.delta >= 0 ? "pos" : "neg"])
              }, N(h(F.e.delta)), 3),
              u("span", Mm, "余额 " + N(d(F.after)), 1)
            ])
          ]))), 128))
        ])) : (z(), $("p", Im, "还没有收支记录。"))
      ])
    ]));
  }
}), Pm = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, Nm = ["aria-expanded"], Dm = ["data-kind"], Fm = {
  key: 0,
  class: "rlzc-collapse-body"
}, Rm = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, Om = {
  key: 0,
  class: "rlzc-preset-area"
}, Lm = { class: "rlzc-preset-row" }, jm = ["value"], Bm = {
  key: 0,
  value: ""
}, Vm = ["value"], Um = ["disabled"], Wm = ["disabled"], Hm = { class: "rlzc-stacked-field" }, Ym = ["value"], Gm = { class: "rlzc-stacked-field" }, Km = { class: "rlzc-key-wrap" }, Zm = ["type", "value"], Jm = ["aria-label"], qm = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Qm = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Xm = { class: "rlzc-stacked-field" }, eg = ["value"], tg = ["value"], ng = ["value"], sg = ["value"], ig = { class: "rlzc-conn-row" }, rg = ["data-kind"], og = ["disabled"], lg = {
  key: 1,
  class: "rlzc-option-list"
}, ag = { class: "rlzc-option-row" }, cg = ["aria-checked"], Ag = { class: "rlzc-option-row" }, ug = ["aria-checked"], dg = { class: "rlzc-option-row rlzc-option-row-timeout" }, fg = { class: "rlzc-timeout-wrap" }, pg = ["value"], hg = /* @__PURE__ */ Oe({
  __name: "SubApiCard",
  setup(e) {
    const t = Y(() => f.settings.subApi), n = Y(() => t.value.presets.find((U) => U.id === t.value.presetId) ?? null), s = /* @__PURE__ */ ge([]), i = /* @__PURE__ */ ge(!1), r = /* @__PURE__ */ ge(!1), o = /* @__PURE__ */ ge("none"), l = /* @__PURE__ */ ge(""), a = Y(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : o.value === "ok" ? { kind: "on", text: "已连接" } : o.value === "fail" ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" }), c = Y(() => f.settings.cardCollapsed.subApi);
    function A() {
      f.settings.cardCollapsed.subApi = !f.settings.cardCollapsed.subApi, h();
    }
    const d = Y(() => o.value === "ok" ? `已连接 · 共 ${s.value.length} 个模型` : o.value === "fail" ? `连接失败：${l.value}` : "未测试");
    function h() {
      pe();
    }
    function x(U) {
      t.value.source = U, o.value = "none", h();
    }
    function k() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function v() {
      const U = (await Dr("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!U) return;
      const M = { id: k(), name: U, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, M], t.value.presetId = M.id, s.value = [], o.value = "none", h();
    }
    async function F() {
      if (!n.value) return;
      const U = (await Dr("改名为：", n.value.name))?.trim();
      U && (n.value.name = U, h());
    }
    async function j() {
      n.value && await kt(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((U) => U.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", s.value = [], o.value = "none", h());
    }
    function T(U) {
      t.value.presetId = U.target.value, s.value = [], o.value = "none", h();
    }
    function y(U, M) {
      n.value && (n.value[U] = M.target.value.trim(), h());
    }
    async function g() {
      if (n.value) {
        r.value = !0, o.value = "none", l.value = "";
        try {
          const U = await Kf(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          s.value = U.models, !n.value.model && U.models.length && (n.value.model = U.models[0], h()), o.value = "ok";
        } catch (U) {
          o.value = "fail", l.value = Oi(U), s.value = await Nl(n.value).catch(() => []);
        } finally {
          r.value = !1;
        }
      }
    }
    function w(U) {
      const M = Math.floor(Number(U.target.value));
      if (!Number.isFinite(M) || M < 5) {
        Pe("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = M, h();
    }
    function B(U, M) {
      t.value[U] = M, h();
    }
    return (U, M) => (z(), $("div", Pm, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !c.value,
        onClick: A
      }, [
        M[9] || (M[9] = u("h4", null, "副本事件检测", -1)),
        u("span", {
          class: "rlzc-dot",
          "data-kind": a.value.kind
        }, N(a.value.text), 9, Dm),
        u("span", {
          class: ee(["rlzc-collapse-arrow", { open: !c.value }])
        }, "▸", 2)
      ], 8, Nm),
      c.value ? W("", !0) : (z(), $("div", Fm, [
        M[24] || (M[24] = u("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        u("div", Rm, [
          u("button", {
            class: ee({ on: t.value.source === "off" }),
            onClick: M[0] || (M[0] = (_) => x("off"))
          }, "关闭", 2),
          u("button", {
            class: ee({ on: t.value.source === "main" }),
            onClick: M[1] || (M[1] = (_) => x("main"))
          }, "跟随主API", 2),
          u("button", {
            class: ee({ on: t.value.source === "preset" }),
            onClick: M[2] || (M[2] = (_) => x("preset"))
          }, "自设API", 2)
        ]),
        t.value.source === "preset" ? (z(), $("div", Om, [
          u("div", Lm, [
            u("select", {
              class: "rlzc-input",
              value: t.value.presetId,
              onChange: T
            }, [
              t.value.presets.length ? W("", !0) : (z(), $("option", Bm, "还没有保存的接口")),
              (z(!0), $(Q, null, xe(t.value.presets, (_) => (z(), $("option", {
                key: _.id,
                value: _.id
              }, N(_.name), 9, Vm))), 128))
            ], 40, jm),
            u("button", {
              class: "rlzc-icon-btn",
              "aria-label": "新建接口",
              type: "button",
              onClick: v
            }, [...M[10] || (M[10] = [
              u("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "aria-hidden": "true"
              }, [
                u("path", { d: "M8 3v10M3 8h10" })
              ], -1)
            ])]),
            u("button", {
              class: "rlzc-icon-btn",
              "aria-label": "改名",
              type: "button",
              disabled: !n.value,
              onClick: F
            }, [...M[11] || (M[11] = [
              u("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "aria-hidden": "true"
              }, [
                u("path", { d: "M11 2L14 5 5 14H2v-3L11 2z" })
              ], -1)
            ])], 8, Um),
            u("button", {
              class: "rlzc-icon-btn rlzc-danger",
              "aria-label": "删除接口",
              type: "button",
              disabled: !n.value,
              onClick: j
            }, [...M[12] || (M[12] = [
              u("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "aria-hidden": "true"
              }, [
                u("path", { d: "M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10" })
              ], -1)
            ])], 8, Wm)
          ]),
          n.value ? (z(), $(Q, { key: 0 }, [
            u("div", Hm, [
              M[13] || (M[13] = u("label", { class: "rlzc-label" }, "地址", -1)),
              u("input", {
                class: "rlzc-input",
                value: n.value.url,
                placeholder: "https://…/v1",
                onChange: M[3] || (M[3] = (_) => y("url", _))
              }, null, 40, Ym)
            ]),
            u("div", Gm, [
              M[16] || (M[16] = u("label", { class: "rlzc-label" }, "密钥", -1)),
              u("div", Km, [
                u("input", {
                  class: "rlzc-input",
                  type: i.value ? "text" : "password",
                  value: n.value.key,
                  autocomplete: "off",
                  onChange: M[4] || (M[4] = (_) => y("key", _))
                }, null, 40, Zm),
                u("button", {
                  class: "rlzc-eye-btn",
                  type: "button",
                  "aria-label": i.value ? "隐藏密钥" : "显示密钥",
                  onClick: M[5] || (M[5] = (_) => i.value = !i.value)
                }, [
                  i.value ? (z(), $("svg", qm, [...M[14] || (M[14] = [
                    u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    u("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1),
                    u("path", { d: "M2 2l12 12" }, null, -1)
                  ])])) : (z(), $("svg", Qm, [...M[15] || (M[15] = [
                    u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    u("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1)
                  ])]))
                ], 8, Jm)
              ])
            ]),
            u("div", Xm, [
              M[17] || (M[17] = u("label", { class: "rlzc-label" }, "模型", -1)),
              s.value.length ? (z(), $("select", {
                key: 0,
                class: "rlzc-input",
                value: n.value.model,
                onChange: M[6] || (M[6] = (_) => y("model", _))
              }, [
                s.value.includes(n.value.model) ? W("", !0) : (z(), $("option", {
                  key: 0,
                  value: n.value.model
                }, N(n.value.model || "请选择…"), 9, tg)),
                (z(!0), $(Q, null, xe(s.value, (_) => (z(), $("option", {
                  key: _,
                  value: _
                }, N(_), 9, ng))), 128))
              ], 40, eg)) : (z(), $("input", {
                key: 1,
                class: "rlzc-input rlzc-input-disabled",
                value: n.value.model ? n.value.model : "先测试连接",
                readonly: "",
                tabindex: "-1"
              }, null, 8, sg))
            ]),
            u("div", ig, [
              u("span", {
                class: "rlzc-dot",
                "data-kind": o.value === "ok" ? "on" : o.value === "fail" ? "warn" : "off"
              }, N(d.value), 9, rg),
              u("button", {
                class: "rlzc-btn ghost",
                disabled: r.value || !n.value.url,
                onClick: g
              }, "测试连接", 8, og)
            ])
          ], 64)) : W("", !0)
        ])) : W("", !0),
        t.value.source !== "off" ? (z(), $("div", lg, [
          u("div", ag, [
            M[19] || (M[19] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "省钱模式"),
              u("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: ee(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: M[7] || (M[7] = (_) => B("saveMode", !t.value.saveMode))
            }, [...M[18] || (M[18] = [
              u("span", null, null, -1)
            ])], 10, cg)
          ]),
          u("div", Ag, [
            M[21] || (M[21] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "等检测完再写下一轮"),
              u("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: ee(["rlzc-toggle", { on: t.value.wait }]),
              onClick: M[8] || (M[8] = (_) => B("wait", !t.value.wait))
            }, [...M[20] || (M[20] = [
              u("span", null, null, -1)
            ])], 10, ug)
          ]),
          u("div", dg, [
            M[23] || (M[23] = u("span", null, "超时", -1)),
            u("div", fg, [
              u("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: w
              }, null, 40, pg),
              M[22] || (M[22] = u("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : W("", !0)
      ]))
    ]));
  }
}), mg = { class: "rlzc-card rlzc-collapsible rlzc-live-card" }, gg = ["aria-expanded"], xg = {
  key: 0,
  class: "rlzc-dot",
  "data-kind": "on"
}, yg = {
  key: 0,
  class: "rlzc-collapse-body"
}, vg = { class: "rlzc-option-list" }, bg = { class: "rlzc-option-row rlzc-option-row-stack" }, wg = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "弹幕来源"
}, kg = ["disabled"], _g = {
  key: 0,
  class: "rlzc-hint"
}, zg = {
  key: 0,
  class: "rlzc-option-row"
}, $g = { class: "rlzc-timeout-wrap" }, Sg = ["value"], Eg = { class: "rlzc-option-row" }, Cg = ["aria-checked"], Mg = /* @__PURE__ */ Oe({
  __name: "LiveCard",
  setup(e) {
    const t = Y(() => f.settings.live), n = Y(() => f.settings.subApi.source !== "off"), s = Y(() => n.value ? t.value.source : "local"), i = Y(() => (f.tick, f.session, Zi(/* @__PURE__ */ new Set()).on)), r = Y(() => f.settings.cardCollapsed.live);
    function o() {
      f.settings.cardCollapsed.live = !f.settings.cardCollapsed.live, pe();
    }
    function l(A) {
      A === "ai" && !n.value || (t.value.source = A, pe());
    }
    function a(A) {
      const d = Math.floor(Number(A.target.value));
      t.value.freq = Number.isFinite(d) ? Math.max(1, Math.min(10, d)) : 3, A.target.value = String(t.value.freq), pe();
    }
    function c(A) {
      t.value.injectToAI = A, pe();
    }
    return (A, d) => (z(), $("div", mg, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !r.value,
        onClick: o
      }, [
        d[3] || (d[3] = u("h4", null, "直播", -1)),
        i.value ? (z(), $("span", xg, "直播中")) : W("", !0),
        u("span", {
          class: ee(["rlzc-collapse-arrow", { open: !r.value }])
        }, "▸", 2)
      ], 8, gg),
      r.value ? W("", !0) : (z(), $("div", yg, [
        d[10] || (d[10] = u("p", { class: "rlzc-hint" }, "开播后有观众弹幕和打赏，打赏计入积分。画面在状态栏的直播页。", -1)),
        u("div", vg, [
          u("div", bg, [
            d[4] || (d[4] = u("span", { class: "rlzc-option-label" }, [
              u("span", null, "弹幕来源")
            ], -1)),
            u("div", wg, [
              u("button", {
                class: ee({ on: s.value === "local" }),
                onClick: d[0] || (d[0] = (h) => l("local"))
              }, "本地", 2),
              u("button", {
                class: ee({ on: s.value === "ai" }),
                disabled: !n.value,
                onClick: d[1] || (d[1] = (h) => l("ai"))
              }, "本地+AI", 10, kg)
            ]),
            n.value ? W("", !0) : (z(), $("small", _g, "需先在副本事件检测里选接口"))
          ]),
          s.value === "ai" ? (z(), $("div", zg, [
            d[7] || (d[7] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "生成频率"),
              u("small", null, "关键事件时另加一次")
            ], -1)),
            u("div", $g, [
              d[5] || (d[5] = u("span", { class: "rlzc-unit" }, "每", -1)),
              u("input", {
                type: "number",
                min: "1",
                max: "10",
                class: "rlzc-input rlzc-input-num",
                value: t.value.freq,
                onChange: a
              }, null, 40, Sg),
              d[6] || (d[6] = u("span", { class: "rlzc-unit" }, "轮", -1))
            ])
          ])) : W("", !0),
          u("div", Eg, [
            d[9] || (d[9] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "弹幕传给AI"),
              u("small", null, "主AI能看到最近弹幕")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.injectToAI ? "true" : "false",
              class: ee(["rlzc-toggle", { on: t.value.injectToAI }]),
              onClick: d[2] || (d[2] = (h) => c(!t.value.injectToAI))
            }, [...d[8] || (d[8] = [
              u("span", null, null, -1)
            ])], 10, Cg)
          ])
        ])
      ]))
    ]));
  }
}), Ig = { class: "rlzc-settings" }, Tg = { class: "rlzc-card" }, Pg = ["value"], Ng = { class: "rlzc-card rlzc-collapsible" }, Dg = ["aria-expanded"], Fg = {
  key: 0,
  class: "rlzc-collapse-body"
}, Rg = { class: "rlzc-ledger-status" }, Og = { class: "rlzc-row" }, Lg = ["placeholder"], jg = ["disabled"], Bg = { class: "rlzc-row" }, Vg = ["disabled"], Ug = { class: "rlzc-row" }, Wg = { class: "rlzc-seg-group" }, Hg = ["onClick"], Yg = ["disabled"], Gg = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, Kg = { class: "rlzc-card rlzc-collapsible" }, Zg = ["aria-expanded"], Jg = {
  key: 0,
  class: "rlzc-collapse-body"
}, qg = { class: "rlzc-depth" }, Qg = { class: "rlzc-field" }, Xg = ["value"], ex = { class: "rlzc-field" }, tx = ["value"], nx = { class: "rlzc-field" }, sx = ["value"], ix = { class: "rlzc-field" }, rx = ["value"], ox = { class: "rlzc-field" }, lx = ["value"], ax = { class: "rlzc-card rlzc-collapsible" }, cx = ["aria-expanded"], Ax = {
  key: 0,
  class: "rlzc-collapse-body"
}, ux = ["value", "onChange"], dx = { class: "rlzc-card" }, fx = {
  key: 0,
  class: "rlzc-list"
}, px = ["onClick"], hx = {
  key: 1,
  class: "rlzc-hint"
}, mx = {
  key: 2,
  class: "rlzc-errors"
}, gx = { class: "rlzc-card" }, xx = { class: "rlzc-check" }, yx = ["checked"], vx = { class: "rlzc-check" }, bx = ["checked"], wx = /* @__PURE__ */ Oe({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ ge([]), n = /* @__PURE__ */ ge(null), s = /* @__PURE__ */ ge(null), i = /* @__PURE__ */ ge(null), r = /* @__PURE__ */ ge(""), o = /* @__PURE__ */ ge(""), l = /* @__PURE__ */ ge(""), a = ["D", "C", "B", "A", "S"], c = Y(() => Gt(J())), A = Y(() => rn(c.value.value, f.ledger)), d = Y(() => f.pack?.level ?? "D"), h = Y(() => Ht[d.value]), x = Y(() => Fn(c.value.value, f.ledger, h.value));
    function k() {
      s.value !== null && (Xp(s.value), s.value = null);
    }
    function v() {
      i.value !== null && (Qp(i.value, r.value || "手动"), i.value = null, r.value = "");
    }
    function F() {
      !o.value && !l.value || (eh(o.value || void 0, l.value || void 0), o.value = "", l.value = "", Pe("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function j(M, _) {
      const R = Math.max(0, Math.min(1e4, Math.floor(Number(_.target.value) || 0)));
      f.settings.depths[M] = R, pe();
    }
    async function T(M) {
      const _ = M.target, R = _.files?.[0];
      _.value = "", R && (t.value = Kp(await R.text()), t.value.length || Pe("success", `已导入副本包：${R.name}`));
    }
    async function y(M, _) {
      await kt(`确定删除自定义副本包《${_}》吗？`) && Zp(M);
    }
    function g(M, _) {
      const R = Math.floor(Number(_.target.value));
      !Number.isFinite(R) || R < 1 || (f.settings.genericCaps = { ...f.settings.genericCaps, [M]: R }, pe());
    }
    function w(M) {
      gh(M.target.value);
    }
    function B(M, _) {
      f.settings[M] = _.target.checked, pe();
    }
    function U(M) {
      f.settings.cardCollapsed[M] = !f.settings.cardCollapsed[M], pe();
    }
    return (M, _) => (z(), $(Q, null, [
      u("div", Ig, [
        u("div", Tg, [
          _[16] || (_[16] = u("h4", null, "副本信息显示位置", -1)),
          u("select", {
            class: "rlzc-input",
            value: P(f).settings.panelDisplay,
            onChange: w
          }, [..._[15] || (_[15] = [
            u("option", { value: "panel" }, "扩展面板（默认）", -1),
            u("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, Pg),
          _[17] || (_[17] = u("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        u("div", Ng, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !P(f).settings.cardCollapsed.accountFix,
            onClick: _[0] || (_[0] = (R) => U("accountFix"))
          }, [
            _[18] || (_[18] = u("h4", null, "账户校正", -1)),
            u("span", {
              class: ee(["rlzc-collapse-arrow", { open: !P(f).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, Dg),
          P(f).settings.cardCollapsed.accountFix ? W("", !0) : (z(), $("div", Fg, [
            _[20] || (_[20] = u("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            u("div", Rg, [
              u("span", null, [
                _[19] || (_[19] = Ne("当前余额：", -1)),
                u("b", null, N(A.value), 1)
              ]),
              u("span", null, N(x.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            _[21] || (_[21] = u("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            u("div", Og, [
              ft(u("input", {
                "onUpdate:modelValue": _[1] || (_[1] = (R) => s.value = R),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${c.value.value}`
              }, null, 8, Lg), [
                [
                  Qt,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: k
              }, "保存", 8, jg)
            ]),
            _[22] || (_[22] = u("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            u("div", Bg, [
              ft(u("input", {
                "onUpdate:modelValue": _[2] || (_[2] = (R) => i.value = R),
                type: "number",
                class: "rlzc-input",
                placeholder: "金额（正/负）"
              }, null, 512), [
                [
                  Qt,
                  i.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              ft(u("input", {
                "onUpdate:modelValue": _[3] || (_[3] = (R) => r.value = R),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [Qt, r.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: i.value === null,
                onClick: v
              }, "追加", 8, Vg)
            ]),
            _[23] || (_[23] = u("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            _[24] || (_[24] = u("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            u("div", Ug, [
              u("div", Wg, [
                (z(), $(Q, null, xe(a, (R) => u("button", {
                  key: R,
                  class: ee(["rlzc-seg", { active: o.value === R }]),
                  onClick: (re) => o.value = o.value === R ? "" : R
                }, N(R), 11, Hg)), 64))
              ]),
              ft(u("input", {
                "onUpdate:modelValue": _[4] || (_[4] = (R) => l.value = R),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [Qt, l.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: !o.value && !l.value,
                onClick: F
              }, "校正", 8, Yg)
            ]),
            P(f).ledger.length === 0 && c.value.source === "默认值" ? (z(), $("p", Gg, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : W("", !0)
          ]))
        ]),
        u("div", Kg, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !P(f).settings.cardCollapsed.depths,
            onClick: _[5] || (_[5] = (R) => U("depths"))
          }, [
            _[25] || (_[25] = u("h4", null, "注入深度", -1)),
            u("span", {
              class: ee(["rlzc-collapse-arrow", { open: !P(f).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, Zg),
          P(f).settings.cardCollapsed.depths ? W("", !0) : (z(), $("div", Jg, [
            _[31] || (_[31] = u("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            u("div", qg, [
              u("label", Qg, [
                _[26] || (_[26] = u("span", null, [
                  Ne("副本暗号"),
                  u("small", null, "触发世界书的副本条目")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: P(f).settings.depths.token,
                  onChange: _[6] || (_[6] = (R) => j("token", R))
                }, null, 40, Xg)
              ]),
              u("label", ex, [
                _[27] || (_[27] = u("span", null, [
                  Ne("副本进度"),
                  u("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: P(f).settings.depths.progress,
                  onChange: _[7] || (_[7] = (R) => j("progress", R))
                }, null, 40, tx)
              ]),
              u("label", nx, [
                _[28] || (_[28] = u("span", null, [
                  Ne("本轮指令"),
                  u("small", null, "本轮事件与时限写法")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: P(f).settings.depths.turn,
                  onChange: _[8] || (_[8] = (R) => j("turn", R))
                }, null, 40, sx)
              ]),
              u("label", ix, [
                _[29] || (_[29] = u("span", null, [
                  Ne("账户"),
                  u("small", null, "积分余额与清算状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: P(f).settings.depths.ledger,
                  onChange: _[9] || (_[9] = (R) => j("ledger", R))
                }, null, 40, rx)
              ]),
              u("label", ox, [
                _[30] || (_[30] = u("span", null, [
                  Ne("直播"),
                  u("small", null, "在看人数与最近弹幕")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: P(f).settings.depths.live,
                  onChange: _[10] || (_[10] = (R) => j("live", R))
                }, null, 40, lx)
              ])
            ])
          ]))
        ]),
        Me(hg),
        Me(Mg),
        u("div", ax, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !P(f).settings.cardCollapsed.genericCaps,
            onClick: _[11] || (_[11] = (R) => U("genericCaps"))
          }, [
            _[32] || (_[32] = u("h4", null, "通用副本默认轮数上限", -1)),
            u("span", {
              class: ee(["rlzc-collapse-arrow", { open: !P(f).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, cx),
          P(f).settings.cardCollapsed.genericCaps ? W("", !0) : (z(), $("div", Ax, [
            _[33] || (_[33] = u("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (z(), $(Q, null, xe(a, (R) => u("label", {
              key: R,
              class: "rlzc-field"
            }, [
              u("span", null, N(R) + " 级", 1),
              u("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: P(f).settings.genericCaps[R],
                onChange: (re) => g(R, re)
              }, null, 40, ux)
            ])), 64))
          ]))
        ]),
        u("div", dx, [
          _[34] || (_[34] = u("h4", null, "自定义副本包", -1)),
          P(f).settings.customPacks.length ? (z(), $("ul", fx, [
            (z(!0), $(Q, null, xe(P(f).settings.customPacks, (R) => (z(), $("li", {
              key: R.id
            }, [
              u("span", null, [
                Ne(N(R.level) + "｜" + N(R.name) + " ", 1),
                u("small", null, "v" + N(R.version), 1)
              ]),
              u("button", {
                class: "rlzc-btn ghost small",
                onClick: (re) => y(R.id, R.name)
              }, "删除", 8, px)
            ]))), 128))
          ])) : (z(), $("p", hx, "还没有导入自定义副本包。")),
          u("input", {
            ref_key: "fileInput",
            ref: n,
            type: "file",
            accept: ".json,application/json",
            hidden: "",
            onChange: T
          }, null, 544),
          u("button", {
            class: "rlzc-btn",
            onClick: _[12] || (_[12] = (R) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (z(), $("ul", mx, [
            (z(!0), $(Q, null, xe(t.value, (R, re) => (z(), $("li", { key: re }, N(R), 1))), 128))
          ])) : W("", !0)
        ]),
        u("div", gx, [
          _[37] || (_[37] = u("h4", null, "其他", -1)),
          u("label", xx, [
            u("input", {
              type: "checkbox",
              checked: P(f).settings.showBall,
              onChange: _[13] || (_[13] = (R) => B("showBall", R))
            }, null, 40, yx),
            _[35] || (_[35] = Ne("显示悬浮球", -1))
          ]),
          u("label", vx, [
            u("input", {
              type: "checkbox",
              checked: P(f).settings.debug,
              onChange: _[14] || (_[14] = (R) => B("debug", R))
            }, null, 40, bx),
            _[36] || (_[36] = Ne("调试模式", -1))
          ])
        ])
      ]),
      _[38] || (_[38] = u("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), kx = { class: "rlzc-debug" }, _x = {
  key: 0,
  class: "rlzc-note"
}, zx = {
  key: 0,
  class: "rlzc-note"
}, $x = {
  key: 1,
  class: "rlzc-note"
}, Sx = {
  key: 2,
  class: "rlzc-card"
}, Ex = { class: "rlzc-row" }, Cx = ["disabled"], Mx = ["value"], Ix = ["disabled"], Tx = { class: "rlzc-row" }, Px = ["disabled"], Nx = ["disabled"], Dx = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, Fx = ["aria-expanded"], Rx = {
  key: 0,
  class: "rlzc-collapse-body"
}, Ox = ["onUpdate:modelValue", "disabled"], Lx = ["disabled"], jx = { class: "rlzc-card rlzc-collapsible" }, Bx = ["aria-expanded"], Vx = {
  key: 0,
  class: "rlzc-collapse-status"
}, Ux = {
  key: 0,
  class: "rlzc-collapse-body"
}, Wx = {
  key: 0,
  class: "rlzc-hint"
}, Hx = { class: "rlzc-hint" }, Yx = { class: "rlzc-list rlzc-warns" }, Gx = { class: "rlzc-card rlzc-collapsible" }, Kx = ["aria-expanded"], Zx = {
  key: 0,
  class: "rlzc-collapse-status"
}, Jx = {
  key: 0,
  class: "rlzc-collapse-body"
}, qx = {
  key: 0,
  class: "rlzc-list"
}, Qx = ["disabled", "onClick"], Xx = {
  key: 1,
  class: "rlzc-hint"
}, ey = {
  key: 4,
  class: "rlzc-card"
}, ty = { class: "rlzc-pre" }, ny = {
  key: 0,
  class: "rlzc-pre"
}, sy = { class: "rlzc-card rlzc-collapsible" }, iy = ["aria-expanded"], ry = {
  key: 0,
  class: "rlzc-collapse-body"
}, oy = { class: "rlzc-pre" }, ly = { class: "rlzc-card" }, ay = { class: "rlzc-pre" }, cy = { class: "rlzc-card" }, Ay = { class: "rlzc-pre" }, uy = { class: "rlzc-card" }, dy = { class: "rlzc-table" }, fy = {
  key: 0,
  class: "rlzc-warn-text"
}, py = { key: 1 }, hy = ["disabled"], my = {
  key: 2,
  class: "rlzc-card"
}, gy = { class: "rlzc-table" }, xy = /* @__PURE__ */ Oe({
  __name: "DebugTab",
  setup(e) {
    const t = Y(() => f.settings.debug), n = /* @__PURE__ */ ge(""), s = /* @__PURE__ */ ge(null), i = /* @__PURE__ */ ks({});
    zs(
      () => [f.tick, f.pack?.id],
      () => {
        for (const g of Object.keys(i)) delete i[g];
        const y = ea() ?? {};
        for (const g of f.pack?.roles ?? []) i[g] = y[g] ?? "";
      },
      { immediate: !0 }
    );
    const r = Y(() => {
      f.tick;
      const y = J(), g = [], w = f.session?.entryIndex ?? 0;
      for (let B = w; B < y.length; B++) {
        const U = y[B]?.extra?.rlzc;
        U && g.push({ index: B, snap: U });
      }
      return g.reverse().slice(0, 60);
    }), o = Y(() => {
      const y = new Set((f.audit?.warnings ?? []).filter((B) => B.kind === "limit" || B.kind === "eventMissed").map((B) => B.index)), g = J(), w = f.session?.entryIndex ?? 0;
      for (let B = w; B < g.length; B++)
        g[B]?.extra?.rlzc?.ledgerMismatch && y.add(B);
      return y;
    }), l = Y(() => {
      if (f.tick, !f.session || !f.pack || !f.progress) return null;
      const y = J(), g = Is(y, f.progress.entryIndex);
      let w = null;
      for (let B = y.length - 1; B >= f.progress.entryIndex; B--) {
        const U = y[B]?.extra?.rlzc?.sub;
        if (U) {
          w = U;
          break;
        }
      }
      return {
        text: g ? $l(f.pack, g.state) : "",
        state: g?.state ?? null,
        record: w
      };
    }), a = Y(() => {
      f.tick;
      const y = J(), g = [];
      for (let w = y.length - 1; w >= 0 && g.length < 60; w--) {
        const B = _t(y[w]);
        B && g.push({ index: w, rec: B });
      }
      return g;
    });
    function c(y) {
      const g = y.feed.filter((w) => w.t === "tip").map((w) => `${w.name} ${w.amount}→${w.net}`);
      return y.revoke && g.push(`撤回 −${y.revoke}`), g.join("；");
    }
    function A(y) {
      const g = y.ai;
      return g ? g.pending ? "生成中…" : g.ok ? `${g.count}条（${g.ms}ms）` : `失败：${g.error ?? ""}` : "";
    }
    const d = { done: "✓", missed: "✗", void: "–" };
    function h(y) {
      if (!y.sub && !y.skippedEvents?.length) return "";
      const g = [];
      y.sub?.skipped && g.push(`未更新（${y.sub.error ?? ""}）`);
      for (const w of y.sub?.events ?? []) g.push(`${w.id}${d[w.status]}`);
      for (const w of y.skippedEvents ?? []) g.push(`跳过${w.id}`);
      return y.sub && !y.sub.skipped && !g.length && g.push("已整理"), g.join(" ");
    }
    const x = Y(() => {
      const y = f.progress;
      if (!y) return null;
      const { perMessage: g, phase: w, next: B, ...U } = y;
      return {
        phase: w.id + " " + w.name,
        ...U,
        next: B ? { round: B.round, skipFrom: B.skipFrom, events: B.events.map((M) => M.id) } : null,
        messages: Object.keys(g).length
      };
    });
    function k() {
      n.value && lh(n.value);
    }
    function v() {
      s.value !== null && s.value >= 0 && ah(s.value);
    }
    function F() {
      ch({ ...i });
    }
    const j = (y) => JSON.stringify(y, null, 2);
    function T(y) {
      f.settings.cardCollapsed[y] = !f.settings.cardCollapsed[y], pe();
    }
    return (y, g) => (z(), $("div", kx, [
      P(f).session ? (z(), $(Q, { key: 1 }, [
        t.value ? W("", !0) : (z(), $("p", zx, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        P(f).pack && P(f).session.packVersion !== P(f).pack.version ? (z(), $("p", $x, " 入场时副本包版本为 " + N(P(f).session.packVersion) + "，当前为 " + N(P(f).pack.version) + "。 ", 1)) : W("", !0),
        P(f).pack?.phases.length ? (z(), $("div", Sx, [
          g[8] || (g[8] = u("h4", null, "手动修正", -1)),
          u("div", Ex, [
            ft(u("select", {
              "onUpdate:modelValue": g[0] || (g[0] = (w) => n.value = w),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              g[7] || (g[7] = u("option", { value: "" }, "切换到阶段…", -1)),
              (z(!0), $(Q, null, xe(P(f).pack.phases, (w) => (z(), $("option", {
                key: w.id,
                value: w.id
              }, N(w.name), 9, Mx))), 128))
            ], 8, Cx), [
              [Xo, n.value]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: k
            }, "切换", 8, Ix)
          ]),
          u("div", Tx, [
            ft(u("input", {
              "onUpdate:modelValue": g[1] || (g[1] = (w) => s.value = w),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, Px), [
              [
                Qt,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: v
            }, "修正轮次", 8, Nx)
          ])
        ])) : W("", !0),
        P(f).pack?.roles?.length ? (z(), $("div", Dx, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !P(f).settings.cardCollapsed.rolesDebug,
            onClick: g[2] || (g[2] = (w) => T("rolesDebug"))
          }, [
            g[9] || (g[9] = u("h4", null, "角色登记", -1)),
            u("span", {
              class: ee(["rlzc-collapse-arrow", { open: !P(f).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, Fx),
          P(f).settings.cardCollapsed.rolesDebug ? W("", !0) : (z(), $("div", Rx, [
            (z(!0), $(Q, null, xe(P(f).pack.roles, (w) => (z(), $("label", {
              key: w,
              class: "rlzc-field"
            }, [
              u("span", null, N(w), 1),
              ft(u("input", {
                "onUpdate:modelValue": (B) => i[w] = B,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, Ox), [
                [Qt, i[w]]
              ])
            ]))), 128)),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: F
            }, "保存登记", 8, Lx)
          ]))
        ])) : W("", !0),
        u("div", jx, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !P(f).settings.cardCollapsed.auditDebug,
            onClick: g[3] || (g[3] = (w) => T("auditDebug"))
          }, [
            g[10] || (g[10] = u("h4", null, "<副本> 核对", -1)),
            P(f).settings.cardCollapsed.auditDebug ? (z(), $("span", Vx, N(P(f).audit?.warnings.length ? "⚠️" : "无"), 1)) : W("", !0),
            u("span", {
              class: ee(["rlzc-collapse-arrow", { open: !P(f).settings.cardCollapsed.auditDebug }])
            }, "▸", 2)
          ], 8, Bx),
          P(f).settings.cardCollapsed.auditDebug ? W("", !0) : (z(), $("div", Ux, [
            P(f).audit?.warnings.length ? (z(), $(Q, { key: 1 }, [
              u("p", Hx, "共 " + N(P(f).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
              u("ul", Yx, [
                (z(!0), $(Q, null, xe(P(f).audit.warnings.slice(-30).reverse(), (w, B) => (z(), $("li", { key: B }, [
                  u("span", null, [
                    u("small", null, "#" + N(w.index) + "｜" + N(w.phase) + "第" + N(w.round) + "轮", 1),
                    g[11] || (g[11] = u("br", null, null, -1)),
                    Ne("⚠️ " + N(w.text), 1)
                  ])
                ]))), 128))
              ])
            ], 64)) : (z(), $("p", Wx, "没有发现问题。"))
          ]))
        ]),
        u("div", Gx, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !P(f).settings.cardCollapsed.manualDebug,
            onClick: g[4] || (g[4] = (w) => T("manualDebug"))
          }, [
            g[12] || (g[12] = u("h4", null, "手动操作记录", -1)),
            P(f).settings.cardCollapsed.manualDebug && P(f).session.manual.length ? (z(), $("span", Zx, "×" + N(P(f).session.manual.length), 1)) : W("", !0),
            u("span", {
              class: ee(["rlzc-collapse-arrow", { open: !P(f).settings.cardCollapsed.manualDebug }])
            }, "▸", 2)
          ], 8, Kx),
          P(f).settings.cardCollapsed.manualDebug ? W("", !0) : (z(), $("div", Jx, [
            P(f).session.manual.length ? (z(), $("ul", qx, [
              (z(!0), $(Q, null, xe(P(f).session.manual, (w, B) => (z(), $("li", { key: B }, [
                u("code", null, "#" + N(w.atIndex) + " " + N(w.kind) + " " + N("phase" in w ? w.phase : "") + N("round" in w ? w.round : "") + N("targetPhase" in w ? `${w.targetPhase}:${w.targetRound}` : ""), 1),
                u("button", {
                  class: "rlzc-btn ghost small",
                  disabled: !t.value,
                  onClick: (U) => P(Ah)(B)
                }, "撤销", 8, Qx)
              ]))), 128))
            ])) : (z(), $("p", Xx, "无"))
          ]))
        ]),
        l.value && (l.value.state || l.value.record) ? (z(), $("details", ey, [
          g[13] || (g[13] = u("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          u("pre", ty, N(l.value.text || "（尚无状态）"), 1),
          l.value.record ? (z(), $("pre", ny, N(j(l.value.record)), 1)) : W("", !0),
          g[14] || (g[14] = u("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : W("", !0),
        u("div", sy, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !P(f).settings.cardCollapsed.injectionDebug,
            onClick: g[5] || (g[5] = (w) => T("injectionDebug"))
          }, [
            g[15] || (g[15] = u("h4", null, "本次注入", -1)),
            u("span", {
              class: ee(["rlzc-collapse-arrow", { open: !P(f).settings.cardCollapsed.injectionDebug }])
            }, "▸", 2)
          ], 8, iy),
          P(f).settings.cardCollapsed.injectionDebug ? W("", !0) : (z(), $("div", ry, [
            u("pre", oy, N([P(f).lastInjection.token, P(f).lastInjection.progress, P(f).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
          ]))
        ]),
        u("details", ly, [
          g[16] || (g[16] = u("summary", null, "重放结果", -1)),
          u("pre", ay, N(j(x.value)), 1)
        ]),
        u("details", cy, [
          g[17] || (g[17] = u("summary", null, "会话原始数据", -1)),
          u("pre", Ay, N(j(P(f).session)), 1)
        ]),
        u("details", uy, [
          g[19] || (g[19] = u("summary", null, "每楼快照（最近60条）", -1)),
          u("table", dy, [
            g[18] || (g[18] = u("thead", null, [
              u("tr", null, [
                u("th", null, "楼"),
                u("th", null, "阶段"),
                u("th", null, "轮"),
                u("th", null, "钟时"),
                u("th", null, "时限"),
                u("th", null, "事件"),
                u("th", null, "检测")
              ])
            ], -1)),
            u("tbody", null, [
              (z(!0), $(Q, null, xe(r.value, (w) => (z(), $("tr", {
                key: w.index,
                class: ee({ "rlzc-row-warn": o.value.has(w.index) })
              }, [
                u("td", null, N(w.index) + N(w.snap.entry ? "★" : ""), 1),
                u("td", null, N(w.snap.phase), 1),
                u("td", null, N(w.snap.round), 1),
                u("td", null, N(w.snap.clock ?? ""), 1),
                u("td", null, N(w.snap.limit?.text ?? ""), 1),
                u("td", null, N(w.snap.injected.join(" ")), 1),
                u("td", null, N(h(w.snap)), 1),
                w.snap.ledgerMismatch ? (z(), $("td", fy, "状态栏 " + N(w.snap.ledgerMismatch.status) + " / 账本 " + N(w.snap.ledgerMismatch.ledger), 1)) : (z(), $("td", py))
              ], 2))), 128))
            ])
          ])
        ]),
        u("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: g[6] || (g[6] = //@ts-ignore
          (...w) => P(Br) && P(Br)(...w))
        }, "删除副本会话", 8, hy)
      ], 64)) : (z(), $("p", _x, "当前聊天没有副本会话。")),
      a.value.length ? (z(), $("details", my, [
        g[21] || (g[21] = u("summary", null, "直播（每楼，最近60条）", -1)),
        u("table", gy, [
          g[20] || (g[20] = u("thead", null, [
            u("tr", null, [
              u("th", null, "楼"),
              u("th", null, "精彩度"),
              u("th", null, "热度"),
              u("th", null, "人数"),
              u("th", null, "打赏"),
              u("th", null, "AI弹幕")
            ])
          ], -1)),
          u("tbody", null, [
            (z(!0), $(Q, null, xe(a.value, (w) => (z(), $("tr", {
              key: w.index,
              class: ee({ "rlzc-row-warn": w.rec.ai && !w.rec.ai.ok && !w.rec.ai.pending })
            }, [
              u("td", null, N(w.index) + N(w.rec.scope === "corridor" ? "·回廊" : ""), 1),
              u("td", null, N(w.rec.hype) + N(w.rec.hurt ? "·伤" : ""), 1),
              u("td", null, N(w.rec.heat), 1),
              u("td", null, N(w.rec.viewers), 1),
              u("td", null, N(c(w.rec)), 1),
              u("td", null, N(A(w.rec)), 1)
            ], 2))), 128))
          ])
        ])
      ])) : W("", !0)
    ]));
  }
}), yy = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, vy = { class: "rlzc-head" }, by = { class: "rlzc-tabs" }, wy = ["onClick"], ky = { class: "rlzc-body" }, _y = /* @__PURE__ */ Oe({
  __name: "Panel",
  setup(e) {
    const t = [
      { id: "system", label: "系统" },
      { id: "ledger", label: "账本" },
      { id: "settings", label: "设置" },
      { id: "debug", label: "调试" }
    ];
    async function n(s) {
      if (s === "debug" && !f.debugUnlocked) {
        if (!await kt("此页会显示副本真相，确定要打开吗？")) return;
        f.debugUnlocked = !0;
      }
      f.tab = s;
    }
    return (s, i) => (z(), $("div", {
      class: "rlzc-backdrop",
      onClick: i[1] || (i[1] = wA((r) => P(f).panelOpen = !1, ["self"]))
    }, [
      u("section", yy, [
        u("header", vy, [
          i[2] || (i[2] = u("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          u("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: i[0] || (i[0] = (r) => P(f).panelOpen = !1)
          }, "×")
        ]),
        u("nav", by, [
          (z(), $(Q, null, xe(t, (r) => u("button", {
            key: r.id,
            class: ee({ on: P(f).tab === r.id }),
            onClick: (o) => n(r.id)
          }, N(r.label), 11, wy)), 64))
        ]),
        u("div", ky, [
          P(f).tab === "system" ? (z(), Ge(pm, { key: 0 })) : P(f).tab === "ledger" ? (z(), Ge(Tm, { key: 1 })) : P(f).tab === "settings" ? (z(), Ge(wx, { key: 2 })) : P(f).tab === "debug" && P(f).debugUnlocked ? (z(), Ge(xy, { key: 3 })) : W("", !0)
        ])
      ])
    ]));
  }
}), zy = /* @__PURE__ */ Oe({
  __name: "App",
  setup(e) {
    return (t, n) => (z(), $(Q, null, [
      P(f).settings.showBall ? (z(), Ge(zh, { key: 0 })) : W("", !0),
      P(f).panelOpen ? (z(), Ge(_y, { key: 1 })) : W("", !0)
    ], 64));
  }
}), $y = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field{align-items:flex-start}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-depth .rlzc-field>.rlzc-input{flex:0 0 72px;width:72px}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-conn-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout{justify-content:flex-start;gap:16px}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px}.rlzc-input-num{width:72px;text-align:right;font-variant-numeric:tabular-nums}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-toggle:after{content:"";position:absolute;inset:-10px 0}.rlzc-segsrc button:disabled{opacity:.4;cursor:not-allowed}.rlzc-segsrc button:disabled:hover{background:none;color:var(--muted)}.rlzc-live-card .rlzc-input-num{min-height:44px}.rlzc-option-row-stack{flex-direction:column;align-items:stretch;gap:0}.rlzc-option-row-stack .rlzc-segsrc{margin:6px 0 2px}.rlzc-option-row-stack .rlzc-hint{margin:2px 0 0}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-right{flex:0 0 auto;display:flex;flex-direction:column;align-items:flex-end;gap:2px}.rlzc-ledger-item-after{font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-status{flex:0 0 auto;font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-collapse-head .rlzc-dot{font-size:12px}';
function Sy(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function ca(e, t, n) {
  const s = Ae().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function Ey() {
  const e = Sy();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await ca("/api/extensions/version", e, t);
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
async function Cy(e) {
  const t = await ca("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const Kr = "rlzc-host", Zr = "rlzc-menu-btn", Jr = "rlzc-settings-drawer";
function My() {
  if (document.getElementById(Kr)) return;
  const e = document.createElement("div");
  e.id = Kr, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = $y, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), zA(zy).mount(s), Aa(), ua();
}
function Aa(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => Aa(e + 1), 500);
    return;
  }
  if (document.getElementById(Zr)) return;
  const n = document.createElement("div");
  n.id = Zr, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const i = document.createElement("span");
  i.textContent = "回廊种菜系统", n.append(s, i), n.addEventListener("click", () => {
    f.panelOpen = !f.panelOpen;
  }), t.appendChild(n);
}
function ua(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => ua(e + 1), 500);
    return;
  }
  if (document.getElementById(Jr)) return;
  const n = (B, U = "", M = "") => {
    const _ = document.createElement(B);
    return U && (_.className = U), M && (_.textContent = M), _;
  }, s = n("div");
  s.id = Jr;
  const i = n("div", "inline-drawer"), r = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), r.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const a = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => f.panelOpen = !0);
  const A = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  A.addEventListener("click", () => {
    f.settings.ball = { x: null, y: null }, f.settings.showBall = !0, pe();
  });
  const d = n("label", "checkbox_label"), h = document.createElement("input");
  h.type = "checkbox", h.addEventListener("change", () => {
    f.settings.showBall = h.checked, pe();
  }), d.append(h, n("span", "", "显示悬浮球")), zs(() => f.settings.showBall, (B) => h.checked = B, { immediate: !0 });
  const x = n("div", "flex-container");
  x.append(c, A);
  const k = n("div", "flex-container alignitemscenter"), v = n("small", "rlzc-update-status", "正在检查更新…"), F = n("div", "menu_button menu_button_icon", "检查更新"), j = n("div", "menu_button menu_button_icon", "立即更新"), T = n("div", "menu_button menu_button_icon", "刷新页面");
  j.style.display = "none", T.style.display = "none", k.append(v, F, j, T);
  let y = null, g = !1;
  const w = async () => {
    if (!g) {
      g = !0, v.textContent = "正在检查更新…", j.style.display = "none";
      try {
        y = await Ey();
        const B = y.commit ? `（${y.commit}）` : "";
        y.isGit ? y.isUpToDate ? v.textContent = `已是最新版本${B}` : (v.textContent = `有新版本可以更新，当前${B || "版本较旧"}`, j.style.display = "") : v.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = y.isGit && !y.isUpToDate ? "" : "none";
      } catch (B) {
        v.textContent = `检查更新失败：${B.message}`;
      } finally {
        g = !1;
      }
    }
  };
  F.addEventListener("click", () => void w()), j.addEventListener("click", async () => {
    if (!(!y || g)) {
      g = !0, v.textContent = "正在更新…", j.style.display = "none";
      try {
        await Cy(y), l.style.display = "none", v.textContent = "更新完成，刷新页面后生效。", T.style.display = "";
      } catch (B) {
        v.textContent = `更新失败：${B.message}`, j.style.display = "";
      } finally {
        g = !1;
      }
    }
  }), T.addEventListener("click", () => location.reload()), setTimeout(() => void w(), 3e3), a.append(x, d, k, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), i.append(r, a), s.append(i), t.append(s);
}
globalThis.rlzcInterceptor = ih;
function Ai() {
  Yp(), ut("MESSAGE_RECEIVED", (e, t) => mh(Number(e), t)), ut("CHARACTER_MESSAGE_RENDERED", (e) => oi(Number(e))), ut("MESSAGE_DELETED", () => ri()), ut("MESSAGE_SWIPED", (e) => {
    rh(Number(e)), oi(Number(e));
  }), ut("MESSAGE_EDITED", () => ri()), ut("MESSAGE_UPDATED", (e) => {
    ri(), oi(Number(e));
  }), ut("CHAT_CHANGED", () => Hr()), ut("MORE_MESSAGES_LOADED", () => Ki()), My(), Hp({ view: Zi, toggle: kh }), Hr(), console.log("[rlzc] 回廊种菜系统已加载", f.settings);
}
const qr = window.jQuery;
typeof qr == "function" ? qr(() => Ai()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ai) : Ai();
