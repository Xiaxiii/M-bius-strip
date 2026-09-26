/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function vi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const le = {}, Nt = [], Ot = () => {
}, Zr = () => !1, hs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ms = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, Jr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, aa = Object.prototype.hasOwnProperty, re = (e, t) => aa.call(e, t), Z = Array.isArray, mt = (e) => Nn(e) === "[object Map]", Dt = (e) => Nn(e) === "[object Set]", Qi = (e) => Nn(e) === "[object Date]", se = (e) => typeof e == "function", ue = (e) => typeof e == "string", Ke = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", qr = (e) => (ae(e) || se(e)) && se(e.then) && se(e.catch), Qr = Object.prototype.toString, Nn = (e) => Qr.call(e), ca = (e) => Nn(e).slice(8, -1), Xr = (e) => Nn(e) === "[object Object]", bi = (e) => ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hn = /* @__PURE__ */ vi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), gs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Aa = /-\w/g, Ne = gs(
  (e) => e.replace(Aa, (t) => t.slice(1).toUpperCase())
), ua = /\B([A-Z])/g, Ht = gs(
  (e) => e.replace(ua, "-$1").toLowerCase()
), eo = gs((e) => e.charAt(0).toUpperCase() + e.slice(1)), js = gs(
  (e) => e ? `on${eo(e)}` : ""
), Ge = (e, t) => !Object.is(e, t), Kn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, to = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, xs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Xi;
const ys = () => Xi || (Xi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vs(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = ue(s) ? ha(s) : vs(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ue(e) || ae(e))
    return e;
}
const da = /;(?![^(]*\))/g, fa = /:([^]+)/, pa = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function ha(e) {
  const t = {};
  return e.replace(pa, (n) => n.startsWith("/*") ? "" : n).split(da).forEach((n) => {
    if (n) {
      const s = n.split(fa);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ne(e) {
  let t = "";
  if (ue(e))
    t = e;
  else if (Z(e))
    for (let n = 0; n < e.length; n++) {
      const s = ne(e[n]);
      s && (t += s + " ");
    }
  else if (ae(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ma = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ga = /* @__PURE__ */ vi(ma);
function no(e) {
  return !!e || e === "";
}
function xa(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = yt(e[i], t[i], n);
  return s;
}
function er(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const r of e) {
    let l = -1;
    for (let o = 0; o < s.length; o++)
      if (!i[o] && yt(r, s[o], n)) {
        l = o;
        break;
      }
    if (l < 0) return !1;
    i[l] = 1;
  }
  return !0;
}
function ya(e, t, n) {
  let s = mt(e), i = mt(t);
  if (s || i || (s = Dt(e), i = Dt(t), s || i))
    return s && i ? er(e, t, n) : !1;
  const r = Object.keys(e).length, l = Object.keys(t).length;
  if (r !== l)
    return !1;
  for (const o in e) {
    const a = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
    if (a && !c || !a && c || !yt(e[o], t[o], n))
      return !1;
  }
  return String(e) === String(t);
}
function tr(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, r] = n;
  if (i.has(e) || r.has(t))
    return i.get(e) === t && r.get(t) === e;
  i.set(e, t), r.set(t, e);
  const l = s(e, t, n);
  return i.delete(e), r.delete(t), l;
}
function yt(e, t, n) {
  if (e === t) return !0;
  let s = Qi(e), i = Qi(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = Ke(e), i = Ke(t), s || i ? e === t : (s = Z(e), i = Z(t), s || i ? s && i ? tr(e, t, n, xa) : !1 : (s = ae(e), i = ae(t), s || i ? !s || !i ? !1 : tr(e, t, n, ya) : String(e) === String(t))));
}
function va(e, t) {
  return e.findIndex((n) => yt(n, t));
}
const so = (e) => !!(e && e.__v_isRef === !0), P = (e) => ue(e) ? e : e == null ? "" : Z(e) || ae(e) && (e.toString === Qr || !se(e.toString)) ? so(e) ? P(e.value) : JSON.stringify(e, io, 2) : String(e), io = (e, t) => so(t) ? io(e, t.value) : mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[Ls(s, r) + " =>"] = i, n),
    {}
  )
} : Dt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ls(n))
} : Ke(t) ? Ls(t) : ae(t) && !Z(t) && !Xr(t) ? String(t) : t, Ls = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ke(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let pe;
class ba {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && pe && (pe.active ? (this.parent = pe, this.index = (pe.scopes || (pe.scopes = [])).push(
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
      const n = pe;
      try {
        return pe = this, t();
      } finally {
        pe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = pe, pe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (pe === this)
        pe = this.prevScope;
      else {
        let t = pe;
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
function wa() {
  return pe;
}
let oe;
const Ds = /* @__PURE__ */ new WeakSet();
class ro {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pe && (pe.active ? pe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ds.has(this) && (Ds.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, nr(this), ao(this);
    const t = oe, n = Re;
    oe = this, Re = !0;
    try {
      return this.fn();
    } finally {
      co(this), oe = t, Re = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        _i(t);
      this.deps = this.depsTail = void 0, nr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ds.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ci(this) && this.run();
  }
  get dirty() {
    return ci(this);
  }
}
let oo = 0, mn, gn;
function lo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = gn, gn = e;
    return;
  }
  e.next = mn, mn = e;
}
function wi() {
  oo++;
}
function ki() {
  if (--oo > 0)
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
function ao(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function co(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), _i(s), ka(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function ci(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ao(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ao(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wn) || (e.globalVersion = wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ci(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = oe, s = Re;
  oe = e, Re = !0;
  try {
    ao(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ge(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    oe = n, Re = s, co(e), e.flags &= -3;
  }
}
function _i(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      _i(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ka(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Re = !0;
const uo = [];
function vt() {
  uo.push(Re), Re = !1;
}
function bt() {
  const e = uo.pop();
  Re = e === void 0 ? !0 : e;
}
function nr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = oe;
    oe = void 0;
    try {
      t();
    } finally {
      oe = n;
    }
  }
}
let wn = 0;
class _a {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!oe || !Re || oe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== oe)
      n = this.activeLink = new _a(oe, this), oe.deps ? (n.prevDep = oe.depsTail, oe.depsTail.nextDep = n, oe.depsTail = n) : oe.deps = oe.depsTail = n, fo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = oe.depsTail, n.nextDep = void 0, oe.depsTail.nextDep = n, oe.depsTail = n, oe.deps === n && (oe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, wn++, this.notify(t);
  }
  notify(t) {
    wi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ki();
    }
  }
}
function fo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        fo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ai = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ Symbol(
  ""
), ui = /* @__PURE__ */ Symbol(
  ""
), kn = /* @__PURE__ */ Symbol(
  ""
);
function ge(e, t, n) {
  if (Re && oe) {
    let s = Ai.get(e);
    s || Ai.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new zi()), i.map = s, i.key = n), i.track();
  }
}
function tt(e, t, n, s, i, r) {
  const l = Ai.get(e);
  if (!l) {
    wn++;
    return;
  }
  const o = (a) => {
    a && a.trigger();
  };
  if (wi(), t === "clear")
    l.forEach(o);
  else {
    const a = Z(e), c = a && bi(n);
    if (a && n === "length") {
      const A = Number(s);
      l.forEach((d, h) => {
        (h === "length" || h === kn || !Ke(h) && h >= A) && o(d);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && o(l.get(n)), c && o(l.get(kn)), t) {
        case "add":
          a ? c && o(l.get("length")) : (o(l.get(jt)), mt(e) && o(l.get(ui)));
          break;
        case "delete":
          a || (o(l.get(jt)), mt(e) && o(l.get(ui)));
          break;
        case "set":
          mt(e) && o(l.get(jt));
          break;
      }
  }
  ki();
}
function Zt(e) {
  const t = /* @__PURE__ */ ee(e);
  return t === e || (ge(t, "iterate", kn), /* @__PURE__ */ Ce(e)) ? t : /* @__PURE__ */ Ze(e) ? /* @__PURE__ */ gt(e) ? t.map((n) => wt(Me(n))) : t.map(wt) : t.map(Me);
}
function bs(e) {
  return ge(e = /* @__PURE__ */ ee(e), "iterate", kn), e;
}
function We(e, t) {
  return /* @__PURE__ */ Ze(e) ? wt(/* @__PURE__ */ gt(e) ? Me(t) : t) : Me(t);
}
const za = {
  __proto__: null,
  [Symbol.iterator]() {
    return Bs(this, Symbol.iterator, (e) => We(this, e));
  },
  concat(...e) {
    return Zt(this).concat(
      ...e.map((t) => Z(t) ? Zt(t) : t)
    );
  },
  entries() {
    return Bs(this, "entries", (e) => (e[1] = We(this, e[1]), e));
  },
  every(e, t) {
    return Qe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Qe(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => We(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Qe(
      this,
      "find",
      e,
      t,
      (n) => We(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Qe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Qe(
      this,
      "findLast",
      e,
      t,
      (n) => We(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Qe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Qe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Vs(this, "includes", e);
  },
  indexOf(...e) {
    return Vs(this, "indexOf", e);
  },
  join(e) {
    return Zt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Vs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Qe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return An(this, "pop");
  },
  push(...e) {
    return An(this, "push", e);
  },
  reduce(e, ...t) {
    return sr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return sr(this, "reduceRight", e, t);
  },
  shift() {
    return An(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Qe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return An(this, "splice", e);
  },
  toReversed() {
    return Zt(this).toReversed();
  },
  toSorted(e) {
    return Zt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Zt(this).toSpliced(...e);
  },
  unshift(...e) {
    return An(this, "unshift", e);
  },
  values() {
    return Bs(this, "values", (e) => We(this, e));
  }
};
function Bs(e, t, n) {
  const s = bs(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Ce(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const $a = Array.prototype;
function Qe(e, t, n, s, i, r) {
  const l = bs(e), o = l !== e && !/* @__PURE__ */ Ce(e), a = l[t];
  if (a !== $a[t]) {
    const d = a.apply(e, r);
    return o ? Me(d) : d;
  }
  let c = n;
  l !== e && (o ? c = function(d, h) {
    return n.call(this, We(e, d), h, e);
  } : n.length > 2 && (c = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const A = a.call(l, c, s);
  return o && i ? i(A) : A;
}
function sr(e, t, n, s) {
  const i = bs(e), r = i !== e && !/* @__PURE__ */ Ce(e);
  let l = n, o = !1;
  i !== e && (r ? (o = s.length === 0, l = function(c, A, d) {
    return o && (o = !1, c = We(e, c)), n.call(this, c, We(e, A), d, e);
  }) : n.length > 3 && (l = function(c, A, d) {
    return n.call(this, c, A, d, e);
  }));
  const a = i[t](l, ...s);
  return o ? We(e, a) : a;
}
function Vs(e, t, n) {
  const s = /* @__PURE__ */ ee(e);
  ge(s, "iterate", kn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ei(n[0]) ? (n[0] = /* @__PURE__ */ ee(n[0]), s[t](...n)) : i;
}
function An(e, t, n = []) {
  vt(), wi();
  const s = (/* @__PURE__ */ ee(e))[t].apply(e, n);
  return ki(), bt(), s;
}
const Sa = /* @__PURE__ */ vi("__proto__,__v_isRef,__isVue"), po = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ke)
);
function Ea(e) {
  Ke(e) || (e = String(e));
  const t = /* @__PURE__ */ ee(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
class ho {
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
      return s === (i ? r ? ja : yo : r ? xo : go).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = Z(t);
    if (!i) {
      let a;
      if (l && (a = za[n]))
        return a;
      if (n === "hasOwnProperty")
        return Ea;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ye(t) ? t : s
    );
    if ((Ke(n) ? po.has(n) : Sa(n)) || (i || ge(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ ye(o)) {
      const a = l && bi(n) ? o : o.value;
      return i && ae(a) ? /* @__PURE__ */ fi(a) : a;
    }
    return ae(o) ? i ? /* @__PURE__ */ fi(o) : /* @__PURE__ */ ws(o) : o;
  }
}
class mo extends ho {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const l = Z(t) && bi(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Ze(r);
      if (!/* @__PURE__ */ Ce(s) && !/* @__PURE__ */ Ze(s) && (r = /* @__PURE__ */ ee(r), s = /* @__PURE__ */ ee(s)), !l && /* @__PURE__ */ ye(r) && !/* @__PURE__ */ ye(s))
        return c || (r.value = s), !0;
    }
    const o = l ? Number(n) < t.length : re(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ye(t) ? t : i
    );
    return t === /* @__PURE__ */ ee(i) && a && (o ? Ge(s, r) && tt(t, "set", n, s) : tt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = re(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && tt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ke(n) || !po.has(n)) && ge(t, "has", n), s;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      Z(t) ? "length" : jt
    ), Reflect.ownKeys(t);
  }
}
class Ca extends ho {
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
const Ma = /* @__PURE__ */ new mo(), Ia = /* @__PURE__ */ new Ca(), Ta = /* @__PURE__ */ new mo(!0);
const di = (e) => e, Vn = (e) => Reflect.getPrototypeOf(e);
function Pa(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ ee(i), l = mt(r), o = e === "entries" || e === Symbol.iterator && l, a = e === "keys" && l, c = i[e](...s), A = n ? di : t ? wt : Me;
    return !t && ge(
      r,
      "iterate",
      a ? ui : jt
    ), Fe(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: h } = c.next();
          return h ? { value: d, done: h } : {
            value: o ? [A(d[0]), A(d[1])] : A(d),
            done: h
          };
        }
      }
    );
  };
}
function Un(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Na(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, l = /* @__PURE__ */ ee(r), o = /* @__PURE__ */ ee(i);
      e || (Ge(i, o) && ge(l, "get", i), ge(l, "get", o));
      const { has: a } = Vn(l), c = t ? di : e ? wt : Me;
      if (a.call(l, i))
        return c(r.get(i));
      if (a.call(l, o))
        return c(r.get(o));
      r !== l && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ge(/* @__PURE__ */ ee(i), "iterate", jt), i.size;
    },
    has(i) {
      const r = this.__v_raw, l = /* @__PURE__ */ ee(r), o = /* @__PURE__ */ ee(i);
      return e || (Ge(i, o) && ge(l, "has", i), ge(l, "has", o)), i === o ? r.has(i) : r.has(i) || r.has(o);
    },
    forEach(i, r) {
      const l = this, o = l.__v_raw, a = /* @__PURE__ */ ee(o), c = t ? di : e ? wt : Me;
      return !e && ge(a, "iterate", jt), o.forEach((A, d) => i.call(r, c(A), c(d), l));
    }
  };
  return Fe(
    n,
    e ? {
      add: Un("add"),
      set: Un("set"),
      delete: Un("delete"),
      clear: Un("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ ee(this), l = Vn(r), o = /* @__PURE__ */ ee(i), a = !t && !/* @__PURE__ */ Ce(i) && !/* @__PURE__ */ Ze(i) ? o : i;
        return l.has.call(r, a) || Ge(i, a) && l.has.call(r, i) || Ge(o, a) && l.has.call(r, o) || (r.add(a), tt(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Ce(r) && !/* @__PURE__ */ Ze(r) && (r = /* @__PURE__ */ ee(r));
        const l = /* @__PURE__ */ ee(this), { has: o, get: a } = Vn(l);
        let c = o.call(l, i);
        c || (i = /* @__PURE__ */ ee(i), c = o.call(l, i));
        const A = a.call(l, i);
        return l.set(i, r), c ? Ge(r, A) && tt(l, "set", i, r) : tt(l, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ ee(this), { has: l, get: o } = Vn(r);
        let a = l.call(r, i);
        a || (i = /* @__PURE__ */ ee(i), a = l.call(r, i)), o && o.call(r, i);
        const c = r.delete(i);
        return a && tt(r, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ ee(this), r = i.size !== 0, l = i.clear();
        return r && tt(
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
    n[i] = Pa(i, e, t);
  }), n;
}
function $i(e, t) {
  const n = Na(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    re(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Ra = {
  get: /* @__PURE__ */ $i(!1, !1)
}, Fa = {
  get: /* @__PURE__ */ $i(!1, !0)
}, Oa = {
  get: /* @__PURE__ */ $i(!0, !1)
};
const go = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap(), ja = /* @__PURE__ */ new WeakMap();
function La(e) {
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
function ws(e) {
  return /* @__PURE__ */ Ze(e) ? e : Si(
    e,
    !1,
    Ma,
    Ra,
    go
  );
}
// @__NO_SIDE_EFFECTS__
function Da(e) {
  return Si(
    e,
    !1,
    Ta,
    Fa,
    xo
  );
}
// @__NO_SIDE_EFFECTS__
function fi(e) {
  return Si(
    e,
    !0,
    Ia,
    Oa,
    yo
  );
}
function Si(e, t, n, s, i) {
  if (!ae(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const l = La(ca(e));
  if (l === 0)
    return e;
  const o = new Proxy(
    e,
    l === 2 ? s : n
  );
  return i.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return /* @__PURE__ */ Ze(e) ? /* @__PURE__ */ gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ei(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ee(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ee(t) : e;
}
function Ba(e) {
  return !re(e, "__v_skip") && Object.isExtensible(e) && to(e, "__v_skip", !0), e;
}
const Me = (e) => ae(e) ? /* @__PURE__ */ ws(e) : e, wt = (e) => ae(e) ? /* @__PURE__ */ fi(e) : e;
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  return Va(e, !1);
}
function Va(e, t) {
  return /* @__PURE__ */ ye(e) ? e : new Ua(e, t);
}
class Ua {
  constructor(t, n) {
    this.dep = new zi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ee(t), this._value = n ? t : Me(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ce(t) || /* @__PURE__ */ Ze(t);
    t = s ? t : /* @__PURE__ */ ee(t), Ge(t, n) && (this._rawValue = t, this._value = s ? t : Me(t), this.dep.trigger());
  }
}
function O(e) {
  return /* @__PURE__ */ ye(e) ? e.value : e;
}
const Wa = {
  get: (e, t, n) => t === "__v_raw" ? e : O(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ ye(i) && !/* @__PURE__ */ ye(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function vo(e) {
  return /* @__PURE__ */ gt(e) ? e : new Proxy(e, Wa);
}
class Ha {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new zi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    oe !== this)
      return lo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ao(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ga(e, t, n = !1) {
  let s, i;
  return se(e) ? s = e : (s = e.get, i = e.set), new Ha(s, i, n);
}
const Wn = {}, ns = /* @__PURE__ */ new WeakMap();
let It;
function Ya(e, t = !1, n = It) {
  if (n) {
    let s = ns.get(n);
    s || ns.set(n, s = []), s.push(e);
  }
}
function Ka(e, t, n = le) {
  const { immediate: s, deep: i, once: r, scheduler: l, augmentJob: o, call: a } = n, c = (x) => i ? x : /* @__PURE__ */ Ce(x) || i === !1 || i === 0 ? nt(x, 1) : nt(x);
  let A, d, h, g, v = !1, k = !1;
  if (/* @__PURE__ */ ye(e) ? (d = () => e.value, v = /* @__PURE__ */ Ce(e)) : /* @__PURE__ */ gt(e) ? (d = () => c(e), v = !0) : Z(e) ? (k = !0, v = e.some((x) => /* @__PURE__ */ gt(x) || /* @__PURE__ */ Ce(x)), d = () => e.map((x) => {
    if (/* @__PURE__ */ ye(x))
      return x.value;
    if (/* @__PURE__ */ gt(x))
      return c(x);
    if (se(x))
      return a ? a(x, 2) : x();
  })) : se(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (h) {
      vt();
      try {
        h();
      } finally {
        bt();
      }
    }
    const x = It;
    It = A;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      It = x;
    }
  } : d = Ot, t && i) {
    const x = d, _ = i === !0 ? 1 / 0 : i;
    d = () => nt(x(), _);
  }
  const V = wa(), U = () => {
    A.stop(), V && V.active && Jr(V.effects, A);
  };
  if (r && t) {
    const x = t;
    t = (..._) => {
      const j = x(..._);
      return U(), j;
    };
  }
  let T = k ? new Array(e.length).fill(Wn) : Wn;
  const y = (x) => {
    if (!(!(A.flags & 1) || !A.dirty && !x))
      if (t) {
        const _ = A.run();
        if (x || i || v || (k ? _.some((j, L) => Ge(j, T[L])) : Ge(_, T))) {
          h && h();
          const j = It;
          It = A;
          try {
            const L = [
              _,
              // pass undefined as the old value when it's changed for the first time
              T === Wn ? void 0 : k && T[0] === Wn ? [] : T,
              g
            ];
            T = _, a ? a(t, 3, L) : (
              // @ts-expect-error
              t(...L)
            );
          } finally {
            It = j;
          }
        }
      } else
        A.run();
  };
  return o && o(y), A = new ro(d), A.scheduler = l ? () => l(y, !1) : y, g = (x) => Ya(x, !1, A), h = A.onStop = () => {
    const x = ns.get(A);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const _ of x) _();
      ns.delete(A);
    }
  }, t ? s ? y(!0) : T = A.run() : l ? l(y.bind(null, !0), !0) : A.run(), U.pause = A.pause.bind(A), U.resume = A.resume.bind(A), U.stop = U, U;
}
function nt(e, t = 1 / 0, n) {
  if (t <= 0 || !ae(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ye(e))
    nt(e.value, t, n);
  else if (Z(e))
    for (let s = 0; s < e.length; s++)
      nt(e[s], t, n);
  else if (Dt(e) || mt(e))
    e.forEach((s) => {
      nt(s, t, n);
    });
  else if (Xr(e)) {
    for (const s in e)
      nt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && nt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Rn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    ks(i, t, n);
  }
}
function Je(e, t, n, s) {
  if (se(e)) {
    const i = Rn(e, t, n, s);
    return i && qr(i) && i.catch((r) => {
      ks(r, t, n);
    }), i;
  }
  if (Z(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Je(e[r], t, n, s));
    return i;
  }
}
function ks(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: l } = t && t.appContext.config || le;
  if (t) {
    let o = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const A = o.ec;
      if (A) {
        for (let d = 0; d < A.length; d++)
          if (A[d](e, a, c) === !1)
            return;
      }
      o = o.parent;
    }
    if (r) {
      vt(), Rn(r, null, 10, [
        e,
        a,
        c
      ]), bt();
      return;
    }
  }
  Za(e, n, i, s, l);
}
function Za(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const xe = [];
let Ue = -1;
const Xt = [];
let pt = null, Jt = 0;
const bo = /* @__PURE__ */ Promise.resolve();
let ss = null;
function wo(e) {
  const t = ss || bo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ja(e) {
  let t = Ue + 1, n = xe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = xe[s], r = _n(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ci(e) {
  if (!(e.flags & 1)) {
    const t = _n(e), n = xe[xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= _n(n) ? xe.push(e) : xe.splice(Ja(t), 0, e), e.flags |= 1, ko();
  }
}
function ko() {
  ss || (ss = bo.then(zo));
}
function qa(e) {
  if (!Z(e))
    pt && e.id === -1 ? pt.splice(Jt + 1, 0, e) : e.flags & 1 || (Xt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Xt.push(e[t]);
  ko();
}
function ir(e, t, n = Ue + 1) {
  for (; n < xe.length; n++) {
    const s = xe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      xe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function _o(e) {
  if (Xt.length) {
    const t = [...new Set(Xt)].sort(
      (n, s) => _n(n) - _n(s)
    );
    if (Xt.length = 0, pt) {
      for (let n = 0; n < t.length; n++)
        pt.push(t[n]);
      return;
    }
    for (pt = t, Jt = 0; Jt < pt.length; Jt++) {
      const n = pt[Jt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    pt = null, Jt = 0;
  }
}
const _n = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zo(e) {
  try {
    for (Ue = 0; Ue < xe.length; Ue++) {
      const t = xe[Ue];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Rn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ue < xe.length; Ue++) {
      const t = xe[Ue];
      t && (t.flags &= -2);
    }
    Ue = -1, xe.length = 0, _o(), ss = null, (xe.length || Xt.length) && zo();
  }
}
let Ee = null, $o = null;
function is(e) {
  const t = Ee;
  return Ee = e, $o = e && e.type.__scopeId || null, t;
}
function Qa(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && ur(-1);
    const r = is(t), l = Lt.length;
    let o;
    try {
      o = e(...i);
    } finally {
      for (let a = Lt.length; a > l; a--) Uo();
      is(r), s._d && ur(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ht(e, t) {
  if (Ee === null)
    return e;
  const n = Es(Ee), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, l, o, a = le] = t[i];
    r && (se(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && nt(l), s.push({
      dir: r,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: o,
      modifiers: a
    }));
  }
  return e;
}
function Ct(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let l = 0; l < i.length; l++) {
    const o = i[l];
    r && (o.oldValue = r[l].value);
    let a = o.dir[s];
    a && (vt(), Je(a, n, 8, [
      e.el,
      o,
      e,
      t
    ]), bt());
  }
}
function Xa(e, t, n = !1) {
  const s = Oc();
  if (s || en) {
    let i = en ? en._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && se(t) ? t.call(s && s.proxy) : t;
  }
}
const ec = /* @__PURE__ */ Symbol.for("v-scx"), tc = () => Xa(ec);
function _s(e, t, n) {
  return nc(e, t, n);
}
function nc(e, t, n = le) {
  const { immediate: s, deep: i, flush: r, once: l } = n, o = Fe({}, n), a = t && s || !t && r !== "post";
  let c;
  if (Sn) {
    if (r === "sync") {
      const g = tc();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = Ot, g.resume = Ot, g.pause = Ot, g;
    }
  }
  const A = kt;
  o.call = (g, v, k) => Je(g, A, v, k);
  let d = !1;
  r === "post" ? o.scheduler = (g) => {
    we(g, A && A.suspense);
  } : r !== "sync" && (d = !0, o.scheduler = (g, v) => {
    v ? g() : Ci(g);
  }), o.augmentJob = (g) => {
    t && (g.flags |= 4), d && (g.flags |= 2, A && (g.id = A.uid, g.i = A));
  };
  const h = Ka(e, t, o);
  return Sn && (c ? c.push(h) : a && h()), h;
}
const sc = /* @__PURE__ */ Symbol("_vte"), zs = (e) => e.__isTeleport, Us = /* @__PURE__ */ Symbol("_leaveCb");
function ic(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ot) {
        t = n;
        break;
      }
  }
  return t;
}
function So(e) {
  if (!Eo(e))
    return zs(e.type) && e.children ? ic(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && se(n.default))
      return n.default();
  }
}
function Mi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Mi(
      zs(n.type) && So(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Oe(e, t) {
  return se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function rc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function rr(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const rs = /* @__PURE__ */ new WeakMap();
function xn(e, t, n, s, i = !1) {
  if (Z(e)) {
    e.forEach(
      (k, V) => xn(
        k,
        t && (Z(t) ? t[V] : t),
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
  const r = s.shapeFlag & 4 ? Es(s.component) : s.el, l = i ? null : r, { i: o, r: a } = e, c = t && t.r, A = o.refs === le ? o.refs = {} : o.refs, d = o.setupState, h = /* @__PURE__ */ ee(d), g = d === le ? Zr : (k) => rr(A, k) ? !1 : re(h, k), v = (k, V) => !(V && rr(A, V));
  if (c != null && c !== a) {
    if (or(t), ue(c))
      A[c] = null, g(c) && (d[c] = null);
    else if (/* @__PURE__ */ ye(c)) {
      const k = t;
      v(c, k.k) && (c.value = null), k.k && (A[k.k] = null);
    }
  }
  if (se(a))
    Rn(a, o, 12, [l, A]);
  else {
    const k = ue(a), V = /* @__PURE__ */ ye(a);
    if (k || V) {
      const U = () => {
        if (e.f) {
          const T = k ? g(a) ? d[a] : A[a] : v() || !e.k ? a.value : A[e.k];
          if (i)
            Z(T) && Jr(T, r);
          else if (Z(T))
            T.includes(r) || T.push(r);
          else if (k)
            A[a] = [r], g(a) && (d[a] = A[a]);
          else {
            const y = [r];
            v(a, e.k) && (a.value = y), e.k && (A[e.k] = y);
          }
        } else k ? (A[a] = l, g(a) && (d[a] = l)) : V && (v(a, e.k) && (a.value = l), e.k && (A[e.k] = l));
      };
      if (l) {
        const T = () => {
          U(), rs.delete(e);
        };
        T.id = -1, rs.set(e, T), we(T, n);
      } else
        or(e), U();
    }
  }
}
function or(e) {
  const t = rs.get(e);
  t && (t.flags |= 8, rs.delete(e));
}
ys().requestIdleCallback;
ys().cancelIdleCallback;
const yn = (e) => !!e.type.__asyncLoader, Eo = (e) => e.type.__isKeepAlive;
function oc(e, t, n = kt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
      vt();
      const o = Pi(n), a = Je(t, n, e, l);
      return o(), bt(), a;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const Co = (e) => (t, n = kt) => {
  (!Sn || e === "sp") && oc(e, (...s) => t(...s), n);
}, lc = Co("m"), ac = Co(
  "bum"
), cc = /* @__PURE__ */ Symbol.for("v-ndc");
function me(e, t, n, s) {
  let i;
  const r = n, l = Z(e);
  if (l || ue(e)) {
    const o = l && /* @__PURE__ */ gt(e);
    let a = !1, c = !1;
    o && (a = !/* @__PURE__ */ Ce(e), c = /* @__PURE__ */ Ze(e), e = bs(e)), i = new Array(e.length);
    for (let A = 0, d = e.length; A < d; A++)
      i[A] = t(
        a ? c ? wt(Me(e[A])) : Me(e[A]) : e[A],
        A,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let o = 0; o < e; o++)
      i[o] = t(o + 1, o, void 0, r);
  } else if (ae(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (o, a) => t(o, a, void 0, r)
      );
    else {
      const o = Object.keys(e);
      i = new Array(o.length);
      for (let a = 0, c = o.length; a < c; a++) {
        const A = o[a];
        i[a] = t(e[A], A, a, r);
      }
    }
  else
    i = [];
  return i;
}
const pi = (e) => e ? Yo(e) ? Es(e) : pi(e.parent) : null, vn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pi(e.parent),
    $root: (e) => pi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ci(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wo.bind(e.proxy)),
    $watch: (e) => Ot
  })
), Ws = (e, t) => e !== le && !e.__isScriptSetup && re(e, t), Ac = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: l, type: o, appContext: a } = e;
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
        if (Ws(s, t))
          return l[t] = 1, s[t];
        if (re(r, t))
          return l[t] = 3, r[t];
        if (n !== le && re(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const c = vn[t];
    let A, d;
    if (c)
      return t === "$attrs" && ge(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (A = o.__cssModules) && (A = A[t])
    )
      return A;
    if (n !== le && re(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, re(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return Ws(i, t) ? (i[t] = n, !0) : re(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: l }
  }, o) {
    let a;
    return !!(n[o] || Ws(t, o) || re(r, o) || re(s, o) || re(vn, o) || re(i.config.globalProperties, o) || (a = l.__cssModules) && a[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : re(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Mo() {
  return {
    app: null,
    config: {
      isNativeTag: Zr,
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
let uc = 0;
function dc(e, t) {
  return function(s, i = null) {
    se(s) || (s = Fe({}, s)), i != null && !ae(i) && (i = null);
    const r = Mo(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let a = !1;
    const c = r.app = {
      _uid: uc++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Uc,
      get config() {
        return r.config;
      },
      set config(A) {
      },
      use(A, ...d) {
        return l.has(A) || (A && se(A.install) ? (l.add(A), A.install(c, ...d)) : se(A) && (l.add(A), A(c, ...d))), c;
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
          const g = c._ceVNode || $e(s, i);
          return g.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(g, A, h), a = !0, c._container = A, A.__vue_app__ = c, Es(g.component);
        }
      },
      onUnmount(A) {
        o.push(A);
      },
      unmount() {
        a && (Je(
          o,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(A, d) {
        return r.provides[A] = d, c;
      },
      runWithContext(A) {
        const d = en;
        en = c;
        try {
          return A();
        } finally {
          en = d;
        }
      }
    };
    return c;
  };
}
let en = null;
const fc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ne(t)}Modifiers`] || e[`${Ht(t)}Modifiers`];
function pc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || le;
  let i = n;
  const r = t.startsWith("update:"), l = r && fc(s, t.slice(7));
  l && (l.trim && (i = n.map((A) => ue(A) ? A.trim() : A)), l.number && (i = i.map(xs)));
  let o, a = s[o = js(t)] || // also try camelCase event handler (#2249)
  s[o = js(Ne(t))];
  !a && r && (a = s[o = js(Ht(t))]), a && Je(
    a,
    e,
    6,
    i
  );
  const c = s[o + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, Je(
      c,
      e,
      6,
      i
    );
  }
}
function hc(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let l = {};
  return r ? (Z(r) ? r.forEach((o) => l[o] = null) : Fe(l, r), ae(e) && s.set(e, l), l) : (ae(e) && s.set(e, null), null);
}
function $s(e, t) {
  return !e || !hs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), re(e, t[0].toLowerCase() + t.slice(1)) || re(e, Ht(t)) || re(e, t));
}
function lr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: l,
    attrs: o,
    emit: a,
    render: c,
    renderCache: A,
    props: d,
    data: h,
    setupState: g,
    ctx: v,
    inheritAttrs: k
  } = e, V = is(e);
  let U, T;
  try {
    if (n.shapeFlag & 4) {
      const x = i || s, _ = x;
      U = He(
        c.call(
          _,
          x,
          A,
          d,
          g,
          h,
          v
        )
      ), T = o;
    } else {
      const x = t;
      U = He(
        x.length > 1 ? x(
          d,
          { attrs: o, slots: l, emit: a }
        ) : x(
          d,
          null
        )
      ), T = t.props ? o : mc(o);
    }
  } catch (x) {
    Lt.length = 0, ks(x, e, 1), U = $e(ot);
  }
  let y = U;
  if (T && k !== !1) {
    const x = Object.keys(T), { shapeFlag: _ } = y;
    x.length && _ & 7 && (r && x.some(ms) && (T = gc(
      T,
      r
    )), y = tn(y, T, !1, !0));
  }
  if (n.dirs && (y = tn(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const x = zs(y.type) && So(y) || y;
    Mi(x, n.transition);
  }
  return U = y, is(V), U;
}
const mc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || hs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, gc = (e, t) => {
  const n = {};
  for (const s in e)
    (!ms(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function xc(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: l, children: o, patchFlag: a } = t, c = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? ar(s, l, c) : !!l;
    if (a & 8) {
      const A = t.dynamicProps;
      for (let d = 0; d < A.length; d++) {
        const h = A[d];
        if (Io(l, s, h) && !$s(c, h))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : s === l ? !1 : s ? l ? ar(s, l, c) : !0 : !!l;
  return !1;
}
function ar(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (Io(t, e, r) && !$s(n, r))
      return !0;
  }
  return !1;
}
function Io(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && ae(s) && ae(i) ? !yt(s, i) : s !== i;
}
function yc({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const To = {}, Po = () => Object.create(To), No = (e) => Object.getPrototypeOf(e) === To;
function vc(e, t, n, s = !1) {
  const i = {}, r = Po();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ro(e, t, i, r);
  for (const l in e.propsOptions[0])
    l in i || (i[l] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Da(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function bc(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: l }
  } = e, o = /* @__PURE__ */ ee(i), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const A = e.vnode.dynamicProps;
      for (let d = 0; d < A.length; d++) {
        let h = A[d];
        if ($s(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (a)
          if (re(r, h))
            g !== r[h] && (r[h] = g, c = !0);
          else {
            const v = Ne(h);
            i[v] = hi(
              a,
              o,
              v,
              g,
              e,
              !1
            );
          }
        else
          g !== r[h] && (r[h] = g, c = !0);
      }
    }
  } else {
    Ro(e, t, i, r) && (c = !0);
    let A;
    for (const d in o)
      (!t || // for camelCase
      !re(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((A = Ht(d)) === d || !re(t, A))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[A] !== void 0) && (i[d] = hi(
        a,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== o)
      for (const d in r)
        (!t || !re(t, d)) && (delete r[d], c = !0);
  }
  c && tt(e.attrs, "set", "");
}
function Ro(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let a in t) {
      if (hn(a))
        continue;
      const c = t[a];
      let A;
      i && re(i, A = Ne(a)) ? !r || !r.includes(A) ? n[A] = c : (o || (o = {}))[A] = c : $s(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, l = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ ee(n), c = o || le;
    for (let A = 0; A < r.length; A++) {
      const d = r[A];
      n[d] = hi(
        i,
        a,
        d,
        c[d],
        e,
        !re(c, d)
      );
    }
  }
  return l;
}
function hi(e, t, n, s, i, r) {
  const l = e[n];
  if (l != null) {
    const o = re(l, "default");
    if (o && s === void 0) {
      const a = l.default;
      if (l.type !== Function && !l.skipFactory && se(a)) {
        const { propsDefaults: c } = i;
        if (n in c)
          s = c[n];
        else {
          const A = Pi(i);
          s = c[n] = a.call(
            null,
            t
          ), A();
        }
      } else
        s = a;
      i.ce && i.ce._setProp(n, s);
    }
    l[
      0
      /* shouldCast */
    ] && (r && !o ? s = !1 : l[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Ht(n)) && (s = !0));
  }
  return s;
}
function wc(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, l = {}, o = [];
  if (!r)
    return ae(e) && s.set(e, Nt), Nt;
  if (Z(r))
    for (let c = 0; c < r.length; c++) {
      const A = Ne(r[c]);
      cr(A) && (l[A] = le);
    }
  else if (r)
    for (const c in r) {
      const A = Ne(c);
      if (cr(A)) {
        const d = r[c], h = l[A] = Z(d) || se(d) ? { type: d } : Fe({}, d), g = h.type;
        let v = !1, k = !0;
        if (Z(g))
          for (let V = 0; V < g.length; ++V) {
            const U = g[V], T = se(U) && U.name;
            if (T === "Boolean") {
              v = !0;
              break;
            } else T === "String" && (k = !1);
          }
        else
          v = se(g) && g.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = v, h[
          1
          /* shouldCastTrue */
        ] = k, (v || re(h, "default")) && o.push(A);
      }
    }
  const a = [l, o];
  return ae(e) && s.set(e, a), a;
}
function cr(e) {
  return e[0] !== "$" && !hn(e);
}
const Ii = (e) => e === "_" || e === "_ctx" || e === "$stable", Ti = (e) => Z(e) ? e.map(He) : [He(e)], kc = (e, t, n) => {
  if (t._n)
    return t;
  const s = Qa((...i) => Ti(t(...i)), n);
  return s._c = !1, s;
}, Fo = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Ii(i)) continue;
    const r = e[i];
    if (se(r))
      t[i] = kc(i, r, s);
    else if (r != null) {
      const l = Ti(r);
      t[i] = () => l;
    }
  }
}, Oo = (e, t) => {
  const n = Ti(t);
  e.slots.default = () => n;
}, jo = (e, t, n) => {
  for (const s in t)
    (n || !Ii(s)) && (e[s] = t[s]);
}, _c = (e, t, n) => {
  const s = e.slots = Po();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (jo(s, t, n), n && to(s, "_", i, !0)) : Fo(t, s);
  } else t && Oo(e, t);
}, zc = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, l = le;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : jo(i, t, n) : (r = !t.$stable, Fo(t, i)), l = t;
  } else t && (Oo(e, t), l = { default: 1 });
  if (r)
    for (const o in i)
      !Ii(o) && l[o] == null && delete i[o];
}, we = Mc;
function $c(e) {
  return Sc(e);
}
function Sc(e, t) {
  const n = ys();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: l,
    createText: o,
    createComment: a,
    setText: c,
    setElementText: A,
    parentNode: d,
    nextSibling: h,
    setScopeId: g = Ot,
    insertStaticContent: v
  } = e, k = (p, m, w, I = null, $ = null, M = null, F = void 0, R = null, N = !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !un(p, m) && (I = Bn(p), Se(p, $, M, !0), p = null), m.patchFlag === -2 && (N = !1, m.dynamicChildren = null), m.dynamicChildren && p && p.dynamicChildren && p.dynamicChildren.hasOnce && (m.dynamicChildren === Nt && (m.dynamicChildren = []), m.dynamicChildren.hasOnce = !0);
    const { type: C, ref: G, shapeFlag: D } = m;
    switch (C) {
      case Ss:
        V(p, m, w, I);
        break;
      case ot:
        U(p, m, w, I);
        break;
      case Gs:
        p == null && T(m, w, I, F);
        break;
      case Q:
        je(
          p,
          m,
          w,
          I,
          $,
          M,
          F,
          R,
          N
        );
        break;
      default:
        D & 1 ? _(
          p,
          m,
          w,
          I,
          $,
          M,
          F,
          R,
          N
        ) : D & 6 ? X(
          p,
          m,
          w,
          I,
          $,
          M,
          F,
          R,
          N
        ) : (D & 64 || D & 128) && C.process(
          p,
          m,
          w,
          I,
          $,
          M,
          F,
          R,
          N,
          an
        );
    }
    G != null && $ ? xn(G, p && p.ref, M, m || p, !m) : G == null && p && p.ref != null && xn(p.ref, null, M, p, !0);
  }, V = (p, m, w, I) => {
    if (p == null)
      s(
        m.el = o(m.children),
        w,
        I
      );
    else {
      const $ = m.el = p.el;
      m.children !== p.children && c($, m.children);
    }
  }, U = (p, m, w, I) => {
    p == null ? s(
      m.el = a(m.children || ""),
      w,
      I
    ) : m.el = p.el;
  }, T = (p, m, w, I) => {
    [p.el, p.anchor] = v(
      p.children,
      m,
      w,
      I,
      p.el,
      p.anchor
    );
  }, y = ({ el: p, anchor: m }, w, I) => {
    let $;
    for (; p && p !== m; )
      $ = h(p), s(p, w, I), p = $;
    s(m, w, I);
  }, x = ({ el: p, anchor: m }) => {
    let w;
    for (; p && p !== m; )
      w = h(p), i(p), p = w;
    i(m);
  }, _ = (p, m, w, I, $, M, F, R, N) => {
    if (m.type === "svg" ? F = "svg" : m.type === "math" && (F = "mathml"), p == null)
      j(
        m,
        w,
        I,
        $,
        M,
        F,
        R,
        N
      );
    else {
      const C = p.el && p.el._isVueCE ? p.el : null;
      try {
        C && C._beginPatch(), b(
          p,
          m,
          $,
          M,
          F,
          R,
          N
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, j = (p, m, w, I, $, M, F, R) => {
    let N, C;
    const { props: G, shapeFlag: D, transition: W, dirs: K } = p;
    if (N = p.el = l(
      p.type,
      M,
      G && G.is,
      G
    ), D & 8 ? A(N, p.children) : D & 16 && E(
      p.children,
      N,
      null,
      I,
      $,
      Hs(p, M),
      F,
      R
    ), K && Ct(p, null, I, "created"), L(N, p, p.scopeId, F, I), G) {
      for (const ie in G)
        ie !== "value" && !hn(ie) && r(N, ie, null, G[ie], M, I);
      "value" in G && r(N, "value", null, G.value, M), (C = G.onVnodeBeforeMount) && Ve(C, I, p);
    }
    K && Ct(p, null, I, "beforeMount");
    const q = Ec($, W);
    q && W.beforeEnter(N), s(N, m, w), ((C = G && G.onVnodeMounted) || q || K) && we(() => {
      try {
        C && Ve(C, I, p), q && W.enter(N), K && Ct(p, null, I, "mounted");
      } finally {
      }
    }, $);
  }, L = (p, m, w, I, $) => {
    if (w && g(p, w), I)
      for (let M = 0; M < I.length; M++)
        g(p, I[M]);
    if ($) {
      let M = $.subTree;
      if (m === M || Vo(M.type) && (M.ssContent === m || M.ssFallback === m)) {
        const F = $.vnode;
        L(
          p,
          F,
          F.scopeId,
          F.slotScopeIds,
          $.parent
        );
      }
    }
  }, E = (p, m, w, I, $, M, F, R, N = 0) => {
    for (let C = N; C < p.length; C++) {
      const G = p[C] = R ? et(p[C]) : He(p[C]);
      k(
        null,
        G,
        m,
        w,
        I,
        $,
        M,
        F,
        R
      );
    }
  }, b = (p, m, w, I, $, M, F) => {
    const R = m.el = p.el;
    let { patchFlag: N, dynamicChildren: C, dirs: G } = m;
    N |= p.patchFlag & 16;
    const D = p.props || le, W = m.props || le;
    let K;
    if (w && Mt(w, !1), (K = W.onVnodeBeforeUpdate) && Ve(K, w, m, p), G && Ct(m, p, w, "beforeUpdate"), w && Mt(w, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    C && (!p.dynamicChildren || p.dynamicChildren.length !== C.length) && (N = 0, F = !1, C = null), (D.innerHTML && W.innerHTML == null || D.textContent && W.textContent == null) && A(R, ""), C ? B(
      p.dynamicChildren,
      C,
      R,
      w,
      I,
      Hs(m, $),
      M
    ) : F || St(
      p,
      m,
      R,
      null,
      w,
      I,
      Hs(m, $),
      M,
      !1
    ), N > 0) {
      if (N & 16)
        ke(R, D, W, w, $);
      else if (N & 2 && D.class !== W.class && r(R, "class", null, W.class, $), N & 4 && r(R, "style", D.style, W.style, $), N & 8) {
        const q = m.dynamicProps;
        for (let ie = 0; ie < q.length; ie++) {
          const te = q[ie], Ae = D[te], fe = W[te];
          (fe !== Ae || te === "value") && r(R, te, Ae, fe, $, w);
        }
      }
      N & 1 && p.children !== m.children && A(R, m.children);
    } else !F && C == null && ke(R, D, W, w, $);
    ((K = W.onVnodeUpdated) || G) && we(() => {
      K && Ve(K, w, m, p), G && Ct(m, p, w, "updated");
    }, I);
  }, B = (p, m, w, I, $, M, F) => {
    for (let R = 0; R < m.length; R++) {
      const N = p[R], C = m[R], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === Q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !un(N, C) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? d(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      k(
        N,
        C,
        G,
        null,
        I,
        $,
        M,
        F,
        !0
      );
    }
  }, ke = (p, m, w, I, $) => {
    if (m !== w) {
      if (m !== le)
        for (const M in m)
          !hn(M) && !(M in w) && r(
            p,
            M,
            m[M],
            null,
            $,
            I
          );
      for (const M in w) {
        if (hn(M)) continue;
        const F = w[M], R = m[M];
        F !== R && M !== "value" && r(p, M, R, F, $, I);
      }
      "value" in w && r(p, "value", m.value, w.value, $);
    }
  }, je = (p, m, w, I, $, M, F, R, N) => {
    const C = m.el = p ? p.el : o(""), G = m.anchor = p ? p.anchor : o("");
    let { patchFlag: D, dynamicChildren: W, slotScopeIds: K } = m;
    K && (R = R ? R.concat(K) : K), p == null ? (s(C, w, I), s(G, w, I), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      w,
      G,
      $,
      M,
      F,
      R,
      N
    )) : D > 0 && D & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === W.length ? (B(
      p.dynamicChildren,
      W,
      w,
      $,
      M,
      F,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || $ && m === $.subTree) && Lo(
      p,
      m,
      !0
      /* shallow */
    )) : St(
      p,
      m,
      w,
      G,
      $,
      M,
      F,
      R,
      N
    );
  }, X = (p, m, w, I, $, M, F, R, N) => {
    m.slotScopeIds = R, p == null ? m.shapeFlag & 512 ? $.ctx.activate(
      m,
      w,
      I,
      F,
      N
    ) : At(
      m,
      w,
      I,
      $,
      M,
      F,
      N
    ) : ve(p, m, N);
  }, At = (p, m, w, I, $, M, F) => {
    const R = p.component = Fc(
      p,
      I,
      $
    );
    if (Eo(p) && (R.ctx.renderer = an), jc(R, !1, F), R.asyncDep) {
      if ($ && $.registerDep(R, ut, F), !p.el) {
        const N = R.subTree = $e(ot);
        U(null, N, m, w), p.placeholder = N.el;
      }
    } else
      ut(
        R,
        p,
        m,
        w,
        $,
        M,
        F
      );
  }, ve = (p, m, w) => {
    const I = m.component = p.component;
    if (xc(p, m, w))
      if (I.asyncDep && !I.asyncResolved) {
        m.el = p.el, dt(I, m, w);
        return;
      } else
        I.next = m, I.update();
    else
      m.el = p.el, I.vnode = m;
  }, ut = (p, m, w, I, $, M, F) => {
    const R = () => {
      if (p.isMounted) {
        let { next: D, bu: W, u: K, parent: q, vnode: ie } = p;
        {
          const De = Do(p);
          if (De) {
            D && (D.el = ie.el, dt(p, D, F)), De.asyncDep.then(() => {
              we(() => {
                p.isUnmounted || C();
              }, $);
            });
            return;
          }
        }
        let te = D, Ae;
        Mt(p, !1), D ? (D.el = ie.el, dt(p, D, F)) : D = ie, W && Kn(W), (Ae = D.props && D.props.onVnodeBeforeUpdate) && Ve(Ae, q, D, ie), Mt(p, !0);
        const fe = lr(p), Le = p.subTree;
        p.subTree = fe, k(
          Le,
          fe,
          // parent may have changed if it's in a teleport
          d(Le.el),
          // anchor may have changed if it's in a fragment
          Bn(Le),
          p,
          $,
          M
        ), D.el = fe.el, te === null && yc(p, fe.el), K && we(K, $), (Ae = D.props && D.props.onVnodeUpdated) && we(
          () => Ve(Ae, q, D, ie),
          $
        );
      } else {
        let D;
        const { el: W, props: K } = m, { bm: q, m: ie, parent: te, root: Ae, type: fe } = p, Le = yn(m);
        Mt(p, !1), q && Kn(q), !Le && (D = K && K.onVnodeBeforeMount) && Ve(D, te, m), Mt(p, !0);
        {
          Ae.ce && Ae.ce._hasShadowRoot() && Ae.ce._injectChildStyle(
            fe,
            p.parent ? p.parent.type : void 0
          );
          const De = p.subTree = lr(p);
          k(
            null,
            De,
            w,
            I,
            p,
            $,
            M
          ), m.el = De.el;
        }
        if (ie && we(ie, $), !Le && (D = K && K.onVnodeMounted)) {
          const De = m;
          we(
            () => Ve(D, te, De),
            $
          );
        }
        (m.shapeFlag & 256 || te && yn(te.vnode) && te.vnode.shapeFlag & 256) && p.a && we(p.a, $), p.isMounted = !0, m = w = I = null;
      }
    };
    p.scope.on();
    const N = p.effect = new ro(R);
    p.scope.off();
    const C = p.update = N.run.bind(N), G = p.job = N.runIfDirty.bind(N);
    G.i = p, G.id = p.uid, N.scheduler = () => Ci(G), Mt(p, !0), C();
  }, dt = (p, m, w) => {
    m.component = p;
    const I = p.vnode.props;
    p.vnode = m, p.next = null, bc(p, m.props, I, w), zc(p, m.children, w), vt(), ir(p), bt();
  }, St = (p, m, w, I, $, M, F, R, N = !1) => {
    const C = p && p.children, G = p ? p.shapeFlag : 0, D = m.children, { patchFlag: W, shapeFlag: K } = m;
    if (W > 0) {
      if (W & 128) {
        on(
          C,
          D,
          w,
          I,
          $,
          M,
          F,
          R,
          N
        );
        return;
      } else if (W & 256) {
        Dn(
          C,
          D,
          w,
          I,
          $,
          M,
          F,
          R,
          N
        );
        return;
      }
    }
    K & 8 ? (G & 16 && ln(C, $, M), D !== C && A(w, D)) : G & 16 ? K & 16 ? on(
      C,
      D,
      w,
      I,
      $,
      M,
      F,
      R,
      N
    ) : ln(C, $, M, !0) : (G & 8 && A(w, ""), K & 16 && E(
      D,
      w,
      I,
      $,
      M,
      F,
      R,
      N
    ));
  }, Dn = (p, m, w, I, $, M, F, R, N) => {
    p = p || Nt, m = m || Nt;
    const C = p.length, G = m.length, D = Math.min(C, G);
    let W;
    for (W = 0; W < D; W++) {
      const K = m[W] = N ? et(m[W]) : He(m[W]);
      k(
        p[W],
        K,
        w,
        null,
        $,
        M,
        F,
        R,
        N
      );
    }
    C > G ? ln(
      p,
      $,
      M,
      !0,
      !1,
      D
    ) : E(
      m,
      w,
      I,
      $,
      M,
      F,
      R,
      N,
      D
    );
  }, on = (p, m, w, I, $, M, F, R, N) => {
    let C = 0;
    const G = m.length;
    let D = p.length - 1, W = G - 1;
    for (; C <= D && C <= W; ) {
      const K = p[C], q = m[C] = N ? et(m[C]) : He(m[C]);
      if (un(K, q))
        k(
          K,
          q,
          w,
          null,
          $,
          M,
          F,
          R,
          N
        );
      else
        break;
      C++;
    }
    for (; C <= D && C <= W; ) {
      const K = p[D], q = m[W] = N ? et(m[W]) : He(m[W]);
      if (un(K, q))
        k(
          K,
          q,
          w,
          null,
          $,
          M,
          F,
          R,
          N
        );
      else
        break;
      D--, W--;
    }
    if (C > D) {
      if (C <= W) {
        const K = W + 1, q = K < G ? m[K].el : I;
        for (; C <= W; )
          k(
            null,
            m[C] = N ? et(m[C]) : He(m[C]),
            w,
            q,
            $,
            M,
            F,
            R,
            N
          ), C++;
      }
    } else if (C > W)
      for (; C <= D; )
        Se(p[C], $, M, !0), C++;
    else {
      const K = C, q = C, ie = /* @__PURE__ */ new Map();
      for (C = q; C <= W; C++) {
        const _e = m[C] = N ? et(m[C]) : He(m[C]);
        _e.key != null && ie.set(_e.key, C);
      }
      let te, Ae = 0;
      const fe = W - q + 1;
      let Le = !1, De = 0;
      const cn = new Array(fe);
      for (C = 0; C < fe; C++) cn[C] = 0;
      for (C = K; C <= D; C++) {
        const _e = p[C];
        if (Ae >= fe) {
          Se(_e, $, M, !0);
          continue;
        }
        let Be;
        if (_e.key != null)
          Be = ie.get(_e.key);
        else
          for (te = q; te <= W; te++)
            if (cn[te - q] === 0 && un(_e, m[te])) {
              Be = te;
              break;
            }
        Be === void 0 ? Se(_e, $, M, !0) : (cn[Be - q] = C + 1, Be >= De ? De = Be : Le = !0, k(
          _e,
          m[Be],
          w,
          null,
          $,
          M,
          F,
          R,
          N
        ), Ae++);
      }
      const Zi = Le ? Cc(cn) : Nt;
      for (te = Zi.length - 1, C = fe - 1; C >= 0; C--) {
        const _e = q + C, Be = m[_e], Ji = m[_e + 1], qi = _e + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ji.el || Bo(Ji)
        ) : I;
        cn[C] === 0 ? k(
          null,
          Be,
          w,
          qi,
          $,
          M,
          F,
          R,
          N
        ) : Le && (te < 0 || C !== Zi[te] ? be(Be, w, qi, 2) : te--);
      }
    }
  }, be = (p, m, w, I, $ = null) => {
    const { el: M, type: F, transition: R, children: N, shapeFlag: C } = p;
    if (C & 6) {
      be(p.component.subTree, m, w, I);
      return;
    }
    if (C & 128) {
      p.suspense.move(m, w, I);
      return;
    }
    if (C & 64) {
      F.move(p, m, w, an);
      return;
    }
    if (F === Q) {
      s(M, m, w);
      for (let D = 0; D < N.length; D++)
        be(N[D], m, w, I);
      s(p.anchor, m, w);
      return;
    }
    if (F === Gs) {
      y(p, m, w);
      return;
    }
    if (I !== 2 && C & 1 && R)
      if (I === 0)
        R.persisted && !M[Us] ? s(M, m, w) : (R.beforeEnter(M), s(M, m, w), we(() => R.enter(M), $));
      else {
        const { leave: D, delayLeave: W, afterLeave: K } = R, q = () => {
          p.ctx.isUnmounted ? i(M) : s(M, m, w);
        }, ie = () => {
          const te = M._isLeaving || !!M[Us];
          M._isLeaving && M[Us](
            !0
            /* cancelled */
          ), R.persisted && !te ? q() : D(M, () => {
            q(), K && K();
          });
        };
        W ? W(M, q, ie) : ie();
      }
    else
      s(M, m, w);
  }, Se = (p, m, w, I = !1, $ = !1) => {
    const {
      type: M,
      props: F,
      ref: R,
      children: N,
      dynamicChildren: C,
      shapeFlag: G,
      patchFlag: D,
      dirs: W,
      cacheIndex: K,
      memo: q
    } = p;
    if ((D === -2 || C && C.hasOnce) && ($ = !1), R != null && (vt(), xn(R, null, w, p, !0), bt()), K != null && (!p.ctx || p.ctx === m) && (m.renderCache[K] = void 0), G & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const ie = G & 1 && W, te = !yn(p);
    let Ae;
    if (te && (Ae = F && F.onVnodeBeforeUnmount) && Ve(Ae, m, p), G & 6)
      la(p.component, w, I);
    else {
      if (G & 128) {
        p.suspense.unmount(w, I);
        return;
      }
      ie && Ct(p, null, m, "beforeUnmount"), G & 64 ? p.type.remove(
        p,
        m,
        w,
        an,
        I
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== Q || D > 0 && D & 64) ? ln(
        C,
        m,
        w,
        !1,
        !0
      ) : (M === Q && D & 384 || !$ && G & 16) && ln(N, m, w), I && Et(p);
    }
    const fe = q != null && K == null;
    (te && (Ae = F && F.onVnodeUnmounted) || ie || fe) && we(() => {
      Ae && Ve(Ae, m, p), ie && Ct(p, null, m, "unmounted"), fe && (p.el = null);
    }, w);
  }, Et = (p) => {
    const { type: m, el: w, anchor: I, transition: $ } = p;
    if (m === Q) {
      oa(w, I);
      return;
    }
    if (m === Gs) {
      x(p), $ && !$.persisted && $.afterLeave && $.afterLeave();
      return;
    }
    const M = () => {
      i(w), $ && !$.persisted && $.afterLeave && $.afterLeave();
    };
    if (p.shapeFlag & 1 && $ && !$.persisted) {
      const { leave: F, delayLeave: R } = $, N = () => F(w, M);
      R ? R(p.el, M, N) : N();
    } else
      M();
  }, oa = (p, m) => {
    let w;
    for (; p !== m; )
      w = h(p), i(p), p = w;
    i(m);
  }, la = (p, m, w) => {
    const { bum: I, scope: $, job: M, subTree: F, um: R, m: N, a: C } = p;
    Ar(N), Ar(C), I && Kn(I), $.stop(), M ? (M.flags |= 8, Se(F, p, m, w)) : p.vnode.el && F && (F.transition = p.vnode.transition, Se(F, p, m, w)), R && we(R, m), we(() => {
      p.isUnmounted = !0;
    }, m);
  }, ln = (p, m, w, I = !1, $ = !1, M = 0) => {
    for (let F = M; F < p.length; F++)
      Se(p[F], m, w, I, $);
  }, Bn = (p) => {
    if (p.shapeFlag & 6)
      return Bn(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = h(p.anchor || p.el), w = m && m[sc];
    return w ? h(w) : m;
  };
  let Os = !1;
  const Ki = (p, m, w) => {
    let I;
    p == null ? m._vnode && (Se(m._vnode, null, null, !0), I = m._vnode.component) : k(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      w
    ), m._vnode = p, Os || (Os = !0, ir(I), _o(), Os = !1);
  }, an = {
    p: k,
    um: Se,
    m: be,
    r: Et,
    mt: At,
    mc: E,
    pc: St,
    pbc: B,
    n: Bn,
    o: e
  };
  return {
    render: Ki,
    hydrate: void 0,
    createApp: dc(Ki)
  };
}
function Hs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Mt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ec(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Lo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (Z(s) && Z(i))
    for (let r = 0; r < s.length; r++) {
      const l = s[r];
      let o = i[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[r] = et(i[r]), o.el = l.el), !n && o.patchFlag !== -2 && Lo(l, o)), o.type === Ss && (o.patchFlag === -1 && (o = i[r] = et(o)), o.el = l.el), o.type === ot && !o.el && (o.el = l.el);
    }
}
function Cc(e) {
  const t = e.slice(), n = [0];
  let s, i, r, l, o;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (i = n[n.length - 1], e[i] < c) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, l = n.length - 1; r < l; )
        o = r + l >> 1, e[n[o]] < c ? r = o + 1 : l = o;
      c < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, l = n[r - 1]; r-- > 0; )
    n[r] = l, l = t[l];
  return n;
}
function Do(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Do(t);
}
function Ar(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Bo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Bo(t.subTree) : null;
}
const Vo = (e) => e.__isSuspense;
function Mc(e, t) {
  t && t.pendingBranch ? Z(e) ? t.effects.push(...e) : t.effects.push(e) : qa(e);
}
const Q = /* @__PURE__ */ Symbol.for("v-fgt"), Ss = /* @__PURE__ */ Symbol.for("v-txt"), ot = /* @__PURE__ */ Symbol.for("v-cmt"), Gs = /* @__PURE__ */ Symbol.for("v-stc"), Lt = [];
let ze = null;
function z(e = !1) {
  Lt.push(ze = e ? null : []);
}
function Uo() {
  Lt.pop(), ze = Lt[Lt.length - 1] || null;
}
let zn = 1;
function ur(e, t = !1) {
  zn += e, e < 0 && ze && t && (ze.hasOnce = !0);
}
function Wo(e) {
  return e.dynamicChildren = zn > 0 ? ze || Nt : null, Uo(), zn > 0 && ze && ze.push(e), e;
}
function S(e, t, n, s, i, r) {
  return Wo(
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
function st(e, t, n, s, i) {
  return Wo(
    $e(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function Ho(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function un(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Go = ({ key: e }) => e ?? null, Zn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ue(e) || /* @__PURE__ */ ye(e) || se(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, i = null, r = e === Q ? 0 : 1, l = !1, o = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Go(t),
    ref: t && Zn(t),
    scopeId: $o,
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
  return o ? (os(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= ue(n) ? 8 : 16), zn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ze && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ze.push(a), a;
}
const $e = Ic;
function Ic(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === cc) && (e = ot), Ho(e)) {
    const o = tn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && os(o, n), zn > 0 && !r && ze && (o.shapeFlag & 6 ? ze[ze.indexOf(e)] = o : ze.push(o)), o.patchFlag = -2, o;
  }
  if (Vc(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: o, style: a } = t;
    o && !ue(o) && (t.class = ne(o)), ae(a) && (/* @__PURE__ */ Ei(a) && !Z(a) && (a = Fe({}, a)), t.style = vs(a));
  }
  const l = ue(e) ? 1 : Vo(e) ? 128 : zs(e) ? 64 : ae(e) ? 4 : se(e) ? 2 : 0;
  return u(
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
function Tc(e) {
  return e ? /* @__PURE__ */ Ei(e) || No(e) ? Fe({}, e) : e : null;
}
function tn(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: l, children: o, transition: a } = e, c = t ? Pc(i || {}, t) : i, A = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Go(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Z(r) ? r.concat(Zn(t)) : [r, Zn(t)] : Zn(t)
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
    patchFlag: t && e.type !== Q ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && tn(e.ssContent),
    ssFallback: e.ssFallback && tn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && Mi(
    A,
    a.clone(A)
  ), A;
}
function Pe(e = " ", t = 0) {
  return $e(Ss, null, e, t);
}
function Y(e = "", t = !1) {
  return t ? (z(), st(ot, null, e)) : $e(ot, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? $e(ot) : Z(e) ? $e(
    Q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ho(e) ? et(e) : $e(Ss, null, String(e));
}
function et(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tn(e);
}
function os(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Z(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), os(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !No(t) ? t._ctx = Ee : i === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (se(t)) {
    if (s & 65) {
      os(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ee }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Pe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Pc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = ne([t.class, s.class]));
      else if (i === "style")
        t.style = vs([t.style, s.style]);
      else if (hs(i)) {
        const r = t[i], l = s[i];
        l && r !== l && !(Z(r) && r.includes(l)) ? t[i] = r ? [].concat(r, l) : l : l == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ms(i) && (t[i] = l);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Ve(e, t, n, s = null) {
  Je(e, t, 7, [
    n,
    s
  ]);
}
const Nc = Mo();
let Rc = 0;
function Fc(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || Nc, r = {
    uid: Rc++,
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
    scope: new ba(
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
    propsOptions: wc(s, i),
    emitsOptions: hc(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: le,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: le,
    data: le,
    props: le,
    attrs: le,
    slots: le,
    refs: le,
    setupState: le,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = pc.bind(null, r), e.ce && e.ce(r), r;
}
let kt = null;
const Oc = () => kt || Ee;
let ls, $n;
{
  const e = ys(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((l) => l(r)) : i[0](r);
    };
  };
  ls = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => kt = n
  ), $n = t(
    "__VUE_SSR_SETTERS__",
    (n) => Sn = n
  );
}
const Pi = (e) => {
  const t = kt;
  return ls(e), e.scope.on(), () => {
    e.scope.off(), ls(t);
  };
}, dr = () => {
  kt && kt.scope.off(), ls(null);
};
function Yo(e) {
  return e.vnode.shapeFlag & 4;
}
let Sn = !1;
function jc(e, t = !1, n = !1) {
  t && $n(t);
  const { props: s, children: i } = e.vnode, r = Yo(e);
  vc(e, s, r, t), _c(e, i, n || t);
  const l = r ? Lc(e, t) : void 0;
  return t && $n(!1), l;
}
function Lc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ac);
  const { setup: s } = n;
  if (s) {
    vt();
    const i = e.setupContext = s.length > 1 ? Bc(e) : null, r = Pi(e), l = Rn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), o = qr(l);
    if (bt(), r(), (o || e.sp) && !yn(e) && rc(e), o) {
      if (l.then(dr, dr), t)
        return l.then((a) => {
          $n(!0);
          try {
            fr(e, a, t);
          } finally {
            $n(!1);
          }
        }).catch((a) => {
          ks(a, e, 0);
        });
      e.asyncDep = l;
    } else
      fr(e, l);
  } else
    Ko(e);
}
function fr(e, t, n) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = vo(t)), Ko(e);
}
function Ko(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ot);
}
const Dc = {
  get(e, t) {
    return ge(e, "get", ""), e[t];
  }
};
function Bc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Dc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Es(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vo(Ba(e.exposed)), {
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
function Vc(e) {
  return se(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ Ga(e, t, Sn), Uc = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let mi;
const pr = typeof window < "u" && window.trustedTypes;
if (pr)
  try {
    mi = /* @__PURE__ */ pr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Zo = mi ? (e) => mi.createHTML(e) : (e) => e, Wc = "http://www.w3.org/2000/svg", Hc = "http://www.w3.org/1998/Math/MathML", Xe = typeof document < "u" ? document : null, hr = Xe && /* @__PURE__ */ Xe.createElement("template"), Gc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? Xe.createElementNS(Wc, e) : t === "mathml" ? Xe.createElementNS(Hc, e) : n ? Xe.createElement(e, { is: n }) : Xe.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
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
      hr.innerHTML = Zo(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const o = hr.content;
      if (s === "svg" || s === "mathml") {
        const a = o.firstChild;
        for (; a.firstChild; )
          o.appendChild(a.firstChild);
        o.removeChild(a);
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
}, Yc = /* @__PURE__ */ Symbol("_vtc");
function Kc(e, t, n) {
  const s = e[Yc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const mr = /* @__PURE__ */ Symbol("_vod"), Zc = /* @__PURE__ */ Symbol("_vsh"), Jc = /* @__PURE__ */ Symbol(""), qc = /(?:^|;)\s*display\s*:/;
function Qc(e, t, n) {
  const s = e.style, i = ue(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (ue(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          n[o] == null && fn(s, o, "");
        }
      else
        for (const l in t)
          n[l] == null && fn(s, l, "");
    for (const l in n) {
      l === "display" && (r = !0);
      const o = n[l];
      o != null ? eA(
        e,
        l,
        !ue(t) && t ? t[l] : void 0,
        o
      ) || fn(s, l, o) : fn(s, l, "");
    }
  } else if (i) {
    if (t !== n) {
      const l = s[Jc];
      l && (n += ";" + l), s.cssText = n, r = qc.test(n);
    }
  } else t && e.removeAttribute("style");
  mr in e && (e[mr] = r ? s.display : "", e[Zc] && (s.display = "none"));
}
const Hn = /\s*!important$/;
function fn(e, t, n) {
  if (Z(n))
    n.forEach((s) => fn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    Hn.test(n) ? e.setProperty(t, n.replace(Hn, ""), "important") : e.setProperty(t, n);
  else {
    const s = Xc(e, t);
    Hn.test(n) ? e.setProperty(
      Ht(s),
      n.replace(Hn, ""),
      "important"
    ) : e[s] = n;
  }
}
const gr = ["Webkit", "Moz", "ms"], Ys = {};
function Xc(e, t) {
  const n = Ys[t];
  if (n)
    return n;
  let s = Ne(t);
  if (s !== "filter" && s in e)
    return Ys[t] = s;
  s = eo(s);
  for (let i = 0; i < gr.length; i++) {
    const r = gr[i] + s;
    if (r in e)
      return Ys[t] = r;
  }
  return t;
}
function eA(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ue(s) && n === s;
}
const xr = "http://www.w3.org/1999/xlink";
function yr(e, t, n, s, i, r = ga(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(xr, t.slice(6, t.length)) : e.setAttributeNS(xr, t, n) : n == null || r && !no(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ke(n) ? String(n) : n
  );
}
function vr(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Zo(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const o = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = no(n) : n == null && o === "string" ? (n = "", l = !0) : o === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(i || t);
}
function Pt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function tA(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const br = /* @__PURE__ */ Symbol("_vei");
function nA(e, t, n, s, i = null) {
  const r = e[br] || (e[br] = {}), l = r[t];
  if (s && l)
    l.value = s;
  else {
    const [o, a] = rA(t);
    if (s) {
      const c = r[t] = aA(
        s,
        i
      );
      Pt(e, o, c, a);
    } else l && (tA(e, o, l, a), r[t] = void 0);
  }
}
const sA = /(Once|Passive|Capture)$/, iA = /^on:?(?:Once|Passive|Capture)$/;
function rA(e) {
  let t, n;
  for (; (n = e.match(sA)) && !iA.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ht(e.slice(2)), t];
}
let Ks = 0;
const oA = /* @__PURE__ */ Promise.resolve(), lA = () => Ks || (oA.then(() => Ks = 0), Ks = Date.now());
function aA(e, t) {
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
      const l = i.slice(), o = [s];
      for (let a = 0; a < l.length && !s._stopped; a++) {
        const c = l[a];
        c && Je(
          c,
          t,
          5,
          o
        );
      }
    } else
      Je(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = lA(), n;
}
const wr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cA = (e, t, n, s, i, r) => {
  const l = i === "svg";
  t === "class" ? Kc(e, s, l) : t === "style" ? Qc(e, n, s) : hs(t) ? ms(t) || nA(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : AA(e, t, s, l)) ? (vr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && yr(e, t, s, l, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (uA(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ue(s))) ? vr(e, Ne(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), yr(e, t, s, l));
};
function AA(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && wr(t) && se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return wr(t) && ue(n) ? !1 : t in e;
}
function uA(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ne(t);
  return Array.isArray(n) ? n.some((i) => Ne(i) === s) : Object.keys(n).some((i) => Ne(i) === s);
}
const as = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Z(t) ? (n) => Kn(t, n) : t;
};
function dA(e) {
  e.target.composing = !0;
}
function kr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Rt = /* @__PURE__ */ Symbol("_assign"), Gn = /* @__PURE__ */ Symbol("_initialValue");
function Zs(e, t, n) {
  return t && (e = e.trim()), n && (e = xs(e)), e;
}
const qt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[Gn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Gn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Rt] = as(i);
    const r = s || i.props && i.props.type === "number";
    Pt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[Rt](Zs(e.value, n, r));
    }), (n || r) && Pt(e, "change", () => {
      e.value = Zs(e.value, n, r);
    }), t || (Pt(e, "compositionstart", dA), Pt(e, "compositionend", kr), Pt(e, "change", kr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", r = e[Gn];
    delete e[Gn], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Rt](Zs(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, l) {
    if (e[Rt] = as(l), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? xs(e.value) : e.value, a = t ?? "";
    if (o === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, Jo = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, Pt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? xs(cs(a)) : cs(a)
      ), r = e.multiple, l = r ? Dt(e._modelValue) ? new Set(i) : i : i[0], o = e._pendingValue = [
        r,
        r ? Z(l) ? i.slice() : i : l
      ];
      try {
        e[Rt](l);
      } finally {
        wo(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[Rt] = as(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    _r(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Rt] = as(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !fA(t, n[1], n[0])) && _r(e, t);
  }
};
function fA(e, t, n) {
  if (!n || Z(e)) return yt(e, t);
  if (Dt(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function _r(e, t) {
  const n = e.multiple, s = Z(t);
  if (!(n && !s && !Dt(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const l = e.options[i], o = cs(l);
      if (n)
        if (s) {
          const a = typeof o;
          a === "string" || a === "number" ? l.selected = t.some((c) => String(c) === String(o)) : l.selected = va(t, o) > -1;
        } else
          l.selected = t.has(o);
      else if (yt(cs(l), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function cs(e) {
  return "_value" in e ? e._value : e.value;
}
const pA = ["ctrl", "shift", "alt", "meta"], hA = {
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
  exact: (e, t) => pA.some((n) => e[`${n}Key`] && !t.includes(n))
}, mA = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((i, ...r) => {
    for (let l = 0; l < t.length; l++) {
      const o = hA[t[l]];
      if (o && o(i, t)) return;
    }
    return e(i, ...r);
  }));
}, gA = /* @__PURE__ */ Fe({ patchProp: cA }, Gc);
let zr;
function xA() {
  return zr || (zr = $c(gA));
}
const yA = ((...e) => {
  const t = xA().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = bA(s);
    if (!i) return;
    const r = t._component;
    !se(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const l = n(i, !1, vA(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), l;
  }, t;
});
function vA(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bA(e) {
  return ue(e) ? document.querySelector(e) : e;
}
const wA = "zhonglou", kA = "钟楼", _A = "1.4.0", zA = "S", $A = 10, SA = "【副本进行中：钟楼】", EA = [], CA = { briefingName: "钟楼" }, MA = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, IA = { type: "nights", template: "剩余{n}夜" }, TA = "至第四日日出", PA = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], NA = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", RA = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], FA = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], OA = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], jA = [{ id: "M1", q: "第一夜的值班签会抽中主播吗", yes: "会", no: "不会", p: 0.1, by: "d1", judge: "第一日日落的抽签结果是{{user}}本人当夜值班" }, { id: "M2", q: "塔里会出人命吗", yes: "会", no: "不会", p: 0.5, judge: "有人死于他人之手，系统宣布钟楼停摆、开启审判" }, { id: "M3", q: "主播会亲手摇响大钟吗", yes: "会", no: "不会", p: 0.35, judge: "{{user}}本人在4F机房摇动曲柄，让大钟鸣响" }], LA = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], DA = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], BA = {
  id: wA,
  name: kA,
  version: _A,
  level: zA,
  players: $A,
  token: SA,
  legacyKeys: EA,
  detect: CA,
  time: MA,
  remaining: IA,
  deadline: TA,
  roles: PA,
  rolesNote: NA,
  stateFields: RA,
  phases: FA,
  events: OA,
  markets: jA,
  docs: LA,
  danmaku: DA
}, VA = "jingjie", UA = "境界游乐园", WA = "1.1.0", HA = "A", GA = "【副本进行中：境界游乐园】", YA = [], KA = { briefingName: "境界游乐园" }, ZA = { type: "none" }, JA = { type: "fromPanel" }, qA = [], QA = [], XA = [{ id: "M1", q: "15:30演出时主播会回头吗", yes: "会", no: "不会", p: 0.3, judge: "15:30表演区演出期间，{{user}}本人回头了" }, { id: "M2", q: "主播会坐上摩天轮吗", yes: "会", no: "不会", p: 0.55, judge: "{{user}}本人乘坐了摩天轮" }, { id: "M3", q: "主播会走进镜宫吗", yes: "会", no: "不会", p: 0.45, judge: "{{user}}本人进入了镜宫" }], eu = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], tu = {
  id: VA,
  name: UA,
  version: WA,
  level: HA,
  token: GA,
  legacyKeys: YA,
  detect: KA,
  time: ZA,
  remaining: JA,
  phases: qA,
  events: QA,
  markets: XA,
  docs: eu
}, nu = "kaoshi", su = "考试", iu = "1.1.0", ru = "A", ou = "【副本进行中：考试】", lu = [], au = { briefingName: "考试" }, cu = { type: "countdown", minutesPerRound: 3 }, Au = { type: "fromPanel" }, uu = "至考试结束", du = [{ id: "main", name: "考试", cap: 100, next: null }], fu = [], pu = [], hu = {
  id: nu,
  name: su,
  version: iu,
  level: ru,
  token: ou,
  legacyKeys: lu,
  detect: au,
  time: cu,
  remaining: Au,
  deadline: uu,
  phases: du,
  events: fu,
  docs: pu
}, mu = "xiyan", gu = "喜宴", xu = "1.2.0", yu = "D", vu = "【副本进行中：喜宴】", bu = [], wu = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, ku = { type: "countdown", minutesPerRound: 3 }, _u = { type: "fromPanel" }, zu = "至天亮", $u = [{ id: "main", name: "喜宴", cap: 160, next: null }], Su = [], Eu = [{ id: "M1", q: "主播会穿上喜服吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人穿上了喜服" }, { id: "M2", q: "这场婚礼的新人会是主播吗", yes: "是", no: "不是", p: 0.17, judge: "{{user}}被认定为这场婚礼的新郎或新娘", judgeNo: "{{user}}以外的某个人被认定为这场婚礼的新郎或新娘" }, { id: "M3", q: "天亮前会有人死吗", yes: "会", no: "不会", p: 0.4, judge: "有人死亡" }], Cu = [], Mu = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], Iu = {
  id: mu,
  name: gu,
  version: xu,
  level: yu,
  token: vu,
  legacyKeys: bu,
  detect: wu,
  time: ku,
  remaining: _u,
  deadline: zu,
  phases: $u,
  events: Su,
  markets: Eu,
  docs: Cu,
  danmaku: Mu
}, Tu = "youxi", Pu = "游戏", Nu = "1.2.0", Ru = "C", Fu = "【副本进行中：游戏】", Ou = [], ju = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Lu = { type: "countdown", minutesPerRound: 8 }, Du = { type: "fromPanel" }, Bu = "至结算", Vu = [{ id: "main", name: "游戏", cap: 90, next: null }], Uu = [], Wu = [{ id: "M1", q: "第一个出局的会是主播吗", yes: "是", no: "不是", p: 0.08, judge: "第一个被淘汰出局的人是{{user}}", judgeNo: "{{user}}以外的某个人成为第一个被淘汰出局的人" }, { id: "M2", q: "三场游戏能全部玩完吗", yes: "能", no: "不能", p: 0.55, judge: "第三场游戏结束" }, { id: "M3", q: "喊数抱团时主播会拉陌生人吗", yes: "会", no: "不会", p: 0.5, judge: "喊数抱团时，{{user}}主动拉了自己同伴以外的人一起抱团" }], Hu = [], Gu = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], Yu = {
  id: Tu,
  name: Pu,
  version: Nu,
  level: Ru,
  token: Fu,
  legacyKeys: Ou,
  detect: ju,
  time: Lu,
  remaining: Du,
  deadline: Bu,
  phases: Vu,
  events: Uu,
  markets: Wu,
  docs: Hu,
  danmaku: Gu
}, Ku = "wuming", Zu = "污名", Ju = "1.1.0", qu = "B", Qu = "4-8", Xu = "【副本进行中：污名】", ed = ["污名"], td = { briefingName: "污名" }, nd = { type: "countdown", minutesPerRound: 3 }, sd = { type: "countdown", template: "剩余{m}分钟" }, id = "至收播", rd = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], od = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], ld = [], ad = !0, cd = {
  id: Ku,
  name: Zu,
  version: Ju,
  level: qu,
  players: Qu,
  token: Xu,
  legacyKeys: ed,
  detect: td,
  time: nd,
  remaining: sd,
  deadline: id,
  phases: rd,
  events: od,
  docs: ld,
  disableLive: ad
}, Ad = "dusongshu", ud = "杜松树", dd = "1.1.0", fd = "A", pd = 6, hd = "【副本进行中：杜松树】", md = [], gd = { briefingName: "杜松树" }, xd = { type: "countdown", minutesPerRound: 30 }, yd = { type: "fromPanel" }, vd = "至第四日日出", bd = ["父亲", "继母", "玛琳", "男孩", "其余"], wd = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", kd = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], _d = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], zd = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], $d = [{ id: "M1", q: "第一夜会有人死在苹果箱里吗", yes: "会", no: "不会", p: 0.5, by: "n1", judge: "有人在苹果箱里被箱盖压死或死在箱中" }, { id: "M2", q: "主播会吃下锅里的炖肉吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人吃了灶上铁锅里炖的肉" }, { id: "M3", q: "杜松树上的鸟会开口吗", yes: "会", no: "不会", p: 0.6, judge: "杜松树上那只红绿羽毛的鸟开口说话或唱歌" }], Sd = [{ title: "游玩说明", md: `## 副本概况
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
最后一页被撕掉了，装订线上只剩一条不整齐的纸茬。` }], Ed = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], Cd = {
  id: Ad,
  name: ud,
  version: dd,
  level: fd,
  players: pd,
  token: hd,
  legacyKeys: md,
  detect: gd,
  time: xd,
  remaining: yd,
  deadline: vd,
  roles: bd,
  rolesNote: wd,
  phases: kd,
  events: _d,
  stateFields: zd,
  markets: $d,
  docs: Sd,
  danmaku: Ed
}, Md = "nongxian", Id = "农闲", Td = "1.0.0", Pd = "D", Nd = !0, Rd = "不限", Fd = "【副本进行中：农闲】", Od = [], jd = { briefingName: "农闲" }, Ld = { type: "none" }, Dd = { type: "fromPanel" }, Bd = [], Vd = [], Ud = [{ title: "游玩说明", md: `## 系统简报

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
梅姨教新菜，会添在配方板上。` }], Wd = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], Hd = {
  id: Md,
  name: Id,
  version: Td,
  level: Pd,
  rest: Nd,
  players: Rd,
  token: Fd,
  legacyKeys: Od,
  detect: jd,
  time: Ld,
  remaining: Dd,
  phases: Bd,
  events: Vd,
  docs: Ud,
  danmaku: Wd
}, Gd = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function Qt(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const Yd = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function $r(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(Yd)) {
    const i = Number(s[1]), r = s[2];
    n = !0, r === "天" ? t += i * 1440 : r === "小时" || r === "个小时" || r === "h" || r === "H" ? t += i * 60 : t += i;
  }
  return n ? Math.round(t) : null;
}
function qo(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: $r(t), total: n === void 0 ? null : $r(n) };
}
function Kd(e, t) {
  return e.phases.find((n) => n.id === t);
}
function En(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); )
    n.push(i), s.add(i.id), i = Kd(e, i.next);
  return n;
}
function Qo(e, t) {
  return En(e, t).filter((n) => n.night).length;
}
function Zd(e, t, n) {
  if (En(e, t).some((i) => i.id === n.id)) return t;
  const s = e.phases[0];
  return s && En(e, s).some((i) => i.id === n.id) ? s : n;
}
function Js(e, t, n, s, i) {
  if (!e.phases.length || !e.phases.some((d) => d.id === t.id)) return;
  let r = En(e, n), l = r.findIndex((d) => d.id === t.id);
  l < 0 && (r = En(e, t), l = 0);
  const o = r.reduce((d, h) => d + Math.max(0, h.cap), 0), a = Math.max(0, t.cap - s) + r.slice(l + 1).reduce((d, h) => d + Math.max(0, h.cap), 0), c = t.deadline ?? r[0].deadline ?? e.deadline, A = { x: a, y: o, deadline: c };
  if (e.time.type === "countdown") {
    const d = e.time.minutesPerRound, h = e.time.totalMinutes, g = h && h > 0 ? h : o * d;
    let v = h && h > 0 && o > 0 ? Math.round(g * a / o) : a * d;
    const k = qo(i).remaining;
    k !== null && (v = Math.min(v, k - d)), v = Math.max(0, v), Object.assign(A, { minutes: v, total: g, text: `约剩${Qt(v)}/${Qt(g)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) A.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const d = e.remaining.template.replace("{n}", String(Qo(e, t)));
      A.text = c ? `${c}·${d}` : d;
    } else c && (A.text = c);
  return A;
}
const Cn = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function Xo(e, t, n = Cn) {
  const s = e ?? "", i = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), r = i ? Math.max(1, Number(i[1])) : Math.max(1, Math.round(n[t] ?? Cn[t])), l = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!l) return { rounds: r };
  const o = Number(l[1]), a = Math.round(l[2] === "天" ? o * 1440 : l[2].includes("小时") ? o * 60 : o);
  return a <= 0 ? { rounds: r } : { rounds: r, totalMinutes: a, minutesPerRound: Math.max(1, Math.round(a / r)) };
}
const As = "generic", gi = [BA, tu, hu, Iu, Yu, cd, Cd, Hd], Jd = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(Gd)
  }
};
function qd(e, t) {
  const n = Jd[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const el = ["D", "C", "B", "A", "S"];
function tl(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === As && t.push(`id 不能是保留字 ${As}`), el.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((c) => typeof c != "string")) && t.push("detect.patterns 必须是文本数组");
  const i = n.time;
  !i || !["none", "clock", "countdown"].includes(i.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (i.type === "clock" && (typeof i.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(i.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), i.type !== "none" && (typeof i.minutesPerRound != "number" || i.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), i.type === "countdown" && i.totalMinutes !== void 0 && (typeof i.totalMinutes != "number" || i.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const r = n.remaining;
  !r || !["nights", "countdown", "fromPanel"].includes(r.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : r.type !== "fromPanel" && typeof r.template != "string" && t.push("remaining.template 必须是文本"), r?.type === "countdown" && i?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.rest !== void 0 && typeof n.rest != "boolean" && t.push("rest 必须是 true 或 false"), n.stateFields !== void 0 && (Array.isArray(n.stateFields) ? n.stateFields.forEach((c, A) => {
    (!c || typeof c.key != "string" || !c.key || typeof c.label != "string" || typeof c.hint != "string") && t.push(`stateFields[${A}] 需要 key、label、hint 三个文本`);
  }) : t.push("stateFields 必须是数组")), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((c) => typeof c != "string" || !c)) && t.push("roles 必须是文本数组");
  const l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((c, A) => {
    if (!c || typeof c.id != "string" || typeof c.name != "string") {
      t.push(`phases[${A}] 缺少 id 或 name`);
      return;
    }
    l.has(c.id) && t.push(`阶段 id 重复：${c.id}`), o.has(c.name) && t.push(`阶段名称重复：${c.name}`), l.add(c.id), o.add(c.name), (typeof c.cap != "number" || c.cap < 1 || !Number.isInteger(c.cap)) && t.push(`阶段 ${c.id} 的 cap 必须是正整数`), c.next !== null && typeof c.next != "string" && t.push(`阶段 ${c.id} 的 next 必须是阶段 id 或 null`), c.deadline !== void 0 && typeof c.deadline != "string" && t.push(`阶段 ${c.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((c) => {
    c && typeof c.next == "string" && !l.has(c.next) && t.push(`阶段 ${c.id} 的 next 指向不存在的阶段：${c.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const a = /* @__PURE__ */ new Set();
  if (Array.isArray(n.events) ? n.events.forEach((c, A) => {
    if (!c || typeof c.id != "string" || typeof c.text != "string") {
      t.push(`events[${A}] 缺少 id 或 text`);
      return;
    }
    a.has(c.id) && t.push(`事件 id 重复：${c.id}`), a.add(c.id), l.has(c.phase) || t.push(`事件 ${c.id} 的 phase 不存在：${c.phase}`), (!Number.isInteger(c.from) || !Number.isInteger(c.to) || c.from < 1 || c.to < c.from) && t.push(`事件 ${c.id} 的轮次区间无效`), c.kind !== "event" && c.kind !== "directive" && t.push(`事件 ${c.id} 的 kind 必须是 event 或 directive`), c.if !== void 0 && typeof c.if != "string" && t.push(`事件 ${c.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((c, A) => {
    !c || typeof c.title != "string" ? t.push(`docs[${A}] 缺少 title`) : c.md !== void 0 && typeof c.md != "string" ? t.push(`docs[${A}].md 必须是文本`) : c.image !== void 0 && typeof c.image != "string" && t.push(`docs[${A}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), n.danmaku !== void 0 && (Array.isArray(n.danmaku) ? n.danmaku.forEach((c, A) => {
    if (!c || typeof c.type != "string" || typeof c.text != "string") {
      t.push(`danmaku[${A}] 需要 type 和 text`);
      return;
    }
    c.when !== void 0 && typeof c.when != "string" && t.push(`danmaku[${A}].when 必须是文本`), c.scope !== void 0 && typeof c.scope != "string" && t.push(`danmaku[${A}].scope 必须是文本`), c.phase !== void 0 && (!Array.isArray(c.phase) || c.phase.some((d) => typeof d != "string") ? t.push(`danmaku[${A}].phase 必须是文本数组`) : c.phase.forEach((d) => {
      l.size > 0 && !l.has(d) && console.warn(`[rlzc] danmaku[${A}] 的 phase "${d}" 不在阶段表中，已跳过`);
    }));
  }) : t.push("danmaku 必须是数组")), n.markets !== void 0)
    if (!Array.isArray(n.markets)) t.push("markets 必须是数组");
    else {
      const c = /* @__PURE__ */ new Set();
      n.markets.forEach((A, d) => {
        if (!A || typeof A != "object") {
          t.push(`markets[${d}] 必须是对象`);
          return;
        }
        for (const h of ["id", "q", "yes", "no", "judge"])
          (typeof A[h] != "string" || !A[h].trim()) && t.push(`markets[${d}] 缺少文本字段 ${h}`);
        (typeof A.p != "number" || !(A.p >= 0.01 && A.p <= 0.99)) && t.push(`markets[${d}].p 必须是 0.01–0.99 的数`), A.judgeNo !== void 0 && (typeof A.judgeNo != "string" || !A.judgeNo.trim()) && t.push(`markets[${d}].judgeNo 必须是文本`), A.by !== void 0 && typeof A.by != "string" && t.push(`markets[${d}].by 必须是阶段 id`), typeof A.id == "string" && (c.has(A.id) && t.push(`事件盘 id 重复：${A.id}`), c.add(A.id));
      });
    }
  return t;
}
function nl(e) {
  return el.includes(e.level ?? "") ? e.level : "D";
}
function sl(e, t = Cn) {
  const n = nl(e), s = Xo(e.limit, n, t), i = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, r = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / i)) : void 0;
  return {
    id: As,
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
function Ni(e) {
  const t = new Set(gi.map((n) => n.id));
  return [...gi, ...e.filter((n) => !t.has(n.id))];
}
const Qd = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, Xd = /<阶段切换>([\s\S]*?)<\/阶段切换>/, ef = /<副本结算>([\s\S]*?)<\/副本结算>/, il = /<副本>([\s\S]*?)<\/副本>/, tf = /<角色登记>([\s\S]*?)<\/角色登记>/, nf = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, sf = /<积分变动>([\s\S]*?)<\/积分变动>/g;
function rl(e) {
  const t = Qd.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (l) => {
    const o = new RegExp(`${l}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return o ? o[1].trim() : void 0;
  }, r = i("等级");
  return r && (n.level = r.replace(/级$/, "").trim().toUpperCase()), n.goal = i("目标"), n.limit = i("时限"), n.players = i("人数"), n;
}
function rf(e) {
  const t = Xd.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function ol(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const i = n.slice(0, s).trim(), r = n.slice(s + 1).trim();
    i && (t[i] = r);
  }
  return t;
}
function Cs(e) {
  const t = ef.exec(e ?? "");
  if (!t) return null;
  const n = ol(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function ll(e) {
  const t = tf.exec(e ?? "");
  if (!t) return null;
  const n = ol(t[1]);
  return Object.keys(n).length ? n : null;
}
function Yn(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function al(e) {
  const t = il.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let s = null;
  for (const i of t[1].split(`
`)) {
    const r = i.trim();
    if (!r) continue;
    const l = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(r);
    if (l) {
      const o = l[1].toLowerCase(), a = l[2].trim();
      o === "时限" ? (n.limit = a, s = null) : o === "进度条" ? (n.progressBar = a, s = null) : o === "任务" ? (Yn(a) && n.tasks.push(Yn(a)), s = "tasks") : (n.ps = a, s = "ps");
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
function of(e) {
  const t = nf.exec(e ?? "");
  return t ? t[2] : null;
}
function qs(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (n(i)) return i;
    s.add(i.id), i = i.next ? e.phases.find((r) => r.id === i.next) : void 0;
  }
  return null;
}
function lf(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((o) => o.id === t.id)) return null;
  const i = (o) => !!o.clock && !o.night;
  let r = null, l = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      r = qs(e, t, i), l = r?.cap ?? 0;
      break;
    case "晚饭":
      r = qs(e, t, i), r && (l = Math.ceil(r.cap * 0.75), r.id === t.id && l <= n && (l = r.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      r = qs(e, t, (o) => !!o.night), l = r?.cap ?? 0;
      break;
  }
  return !r || r.id === t.id && l <= n + 1 ? null : { phase: r.id, round: l, label: `${r.name}第${l}轮` };
}
const af = /<状态栏>([\s\S]*?)<\/状态栏>/;
function cf(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function Qs(e, t) {
  const n = cf(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const Xs = /* @__PURE__ */ new Map();
function Af(e, t) {
  const n = `${e}\0${t}`;
  if (!Xs.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (i) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, i);
    }
    Xs.set(n, s);
  }
  return Xs.get(n);
}
function uf(e, t) {
  const n = String(e ?? ""), s = (o, a) => o ? { signal: a, pack: o, info: { name: o.name, level: o.level } } : null, i = rl(n);
  if (i)
    return { signal: 1, pack: t.find((a) => a.detect.briefingName === i.name), info: i };
  const r = il.exec(n);
  if (r) {
    const o = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(r[1]), a = o && s(Qs(t, o[1]), 2);
    if (a) return a;
  }
  for (const o of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const a = s(Qs(t, o[1]), 3);
    if (a) return a;
  }
  const l = af.exec(n);
  if (l) {
    for (const o of l[1].split(`
`))
      if (o.includes("地点"))
        for (const a of o.matchAll(/副本《([^》]+)》/g)) {
          const c = s(Qs(t, a[1]), 4);
          if (c) return c;
        }
  }
  for (const o of t)
    for (const a of o.detect.patterns ?? []) {
      const c = Af(o.id, a);
      if (c && c.test(n)) return s(o, 5);
    }
  return null;
}
const Sr = 5, df = { id: "_open", name: "进行中", cap: 0, next: null };
function Ie(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function ff(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function cl(e, t, n) {
  const s = ff(e) + Math.max(0, n - 1) * t, i = Math.floor(s / 60) % 24, r = (s % 60 + 60) % 60;
  return `${i % 12 === 0 ? 12 : i % 12}:${String(r).padStart(2, "0")}`;
}
function Er(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return cl(e.time.dayStart, e.time.minutesPerRound, n);
}
function Al(e) {
  return e.phases.length ? e.phases : [df];
}
function Jn(e, t) {
  return Al(e).find((n) => n.id === t);
}
function Cr(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (i.id === n) return !0;
    s.add(i.id), i = Jn(e, i.next);
  }
  return !1;
}
function Mr(e, t, n, s) {
  const i = n + 1, r = e.events.filter((l) => l.phase === t.id);
  if (s) {
    const l = t.id === s.phase ? s.round : t.cap;
    if (l > i) {
      let o = r.map((c, A) => ({ e: c, i: A })).filter(({ e: c }) => c.from >= i && c.from <= l).sort((c, A) => c.e.from - A.e.from || c.i - A.i).map(({ e: c }) => c), a = l;
      return o.length > Sr && (a = o[Sr - 1].from, o = o.filter((c) => c.from <= a)), { phase: t, round: a, events: o, skipFrom: i };
    }
  }
  return { phase: t, round: i, events: r.filter((l) => l.from === i) };
}
function pf(e, t, n) {
  const s = t.entryIndex;
  if (!Ie(e[s])) return null;
  const i = Al(n);
  let r = i[0], l = i[0], o = 0, a, c = !1, A, d, h = null, g, v, k;
  const V = /* @__PURE__ */ new Set(), U = {}, T = {}, y = /* @__PURE__ */ new Map();
  for (const X of t.manual ?? [])
    y.has(X.atIndex) || y.set(X.atIndex, []), y.get(X.atIndex).push(X);
  const x = (X, At) => {
    T[r.id] === void 0 && X.id !== r.id && (T[r.id] = At), n.phases.length && (l = Zd(n, l, X)), r = X, o = 0, h && !Cr(n, r, h.phase) && (h = null);
  };
  for (let X = s; X < e.length; X++) {
    const At = e[X];
    if (!c && Ie(At)) {
      const ve = Mr(n, r, o, h);
      o = ve.round;
      const ut = new Set((At.extra?.rlzc?.skippedEvents ?? []).map((be) => be.id));
      ve.events.forEach((be) => {
        ut.has(be.id) || V.add(be.id);
      }), U[X] = {
        phase: r.id,
        round: o,
        events: ve.events.map((be) => be.id),
        skipFrom: ve.skipFrom,
        limit: Js(n, r, l, o, a)
      }, h && r.id === h.phase && o >= h.round && (h = null);
      const dt = String(At.mes ?? ""), St = al(dt);
      St && (v = St), a = St?.limit;
      const Dn = ll(dt);
      Dn && (k = Dn);
      const on = Cs(dt);
      if (on)
        c = !0, A = "tag", d = X, g = on;
      else {
        const be = rf(dt), Se = be ? i.find((Et) => Et.name === be) : void 0;
        if (Se && n.phases.length)
          x(Se, X);
        else if (r.cap > 0 && o >= r.cap && r.next) {
          const Et = Jn(n, r.next);
          Et && x(Et, X);
        }
      }
    }
    for (const ve of y.get(X) ?? []) {
      if (c) break;
      switch (ve.kind) {
        case "skip": {
          h = Jn(n, ve.targetPhase) && Cr(n, r, ve.targetPhase) ? { phase: ve.targetPhase, round: ve.targetRound } : null;
          break;
        }
        case "setPhase": {
          const ut = Jn(n, ve.phase);
          ut && (h = null, x(ut, X));
          break;
        }
        case "setRound":
          o = Math.max(0, Math.floor(ve.round)), h = null;
          break;
        case "end":
          c = !0, A = "manual", d = X;
          break;
      }
    }
  }
  const _ = c ? null : Mr(n, r, o, h), j = _ ? _.round : o + 1, L = r.cap > 0, E = n.events.filter((X) => V.has(X.id)).map((X) => X.id), b = c ? void 0 : Js(n, r, l, j, a), B = c ? void 0 : Js(n, r, l, o);
  let ke;
  const je = n.remaining;
  return !c && je.type === "nights" && n.phases.length && !r.byTag && !r.frozen ? ke = je.template.replace("{n}", String(Qo(n, r))) : !c && je.type === "countdown" && b?.minutes !== void 0 && (ke = je.template.replace("{m}", String(b.minutes))), {
    phase: r,
    round: o,
    nextRound: j,
    clock: c ? void 0 : Er(n, r, j),
    currentClock: Er(n, r, o),
    remainingText: ke,
    limit: b,
    roundsLeft: B ? { x: B.x, y: B.y } : void 0,
    chainStart: n.phases.length ? l.id : void 0,
    ended: c,
    endedBy: A,
    endIndex: d,
    firedEvents: E,
    warn: !c && L && j >= r.cap - 2,
    isLastRound: !c && L && j === r.cap,
    overdue: !c && L && !r.next && j > r.cap,
    next: _,
    skipGoal: h,
    settlement: g,
    panel: v,
    rolesFromChat: k,
    perMessage: U,
    phaseEnds: T,
    entryIndex: s
  };
}
const ul = "rlzc_token", dl = "rlzc_progress", fl = "rlzc_turn", pl = "rlzc_state", hl = "rlzc_ledger", ml = "rlzc_live", hf = [ul, dl, fl, pl, hl, ml], Mn = { token: "", progress: "", turn: "", injected: [] };
function mf(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function us(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const i = new RegExp(`(?<!\\{)\\{(${s.map(mf).join("|")})\\}(?!\\})`, "g");
  return e.replace(i, (r, l) => n?.[l]?.trim() || l);
}
function gf(e, t) {
  if (!t.length) return "";
  const n = e.events.map((a) => a.id), s = t.map((a) => n.indexOf(a)).filter((a) => a >= 0).sort((a, c) => a - c), i = [];
  let r = s[0], l = s[0];
  const o = () => i.push(r === l ? n[r] : `${n[r]}–${n[l]}`);
  for (let a = 1; a < s.length; a++) {
    if (s[a] === l + 1) {
      l = s[a];
      continue;
    }
    o(), r = l = s[a];
  }
  return o(), i.join("、");
}
function Ir(e, t, n, s = !1) {
  let i = us(e.text, t, n);
  return e.to > e.from && (i = `在本阶段第${e.from}到${e.to}轮之间发生：${i}`), e.if && !s && (i += `（条件：${us(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${i}`;
}
function xf(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function yf(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...Mn, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return Mn;
  const i = s.roles, r = e.phases.length > 0, l = t.next, o = [`副本：${e.name}（${e.level}级）`], a = t.limit;
  if (r)
    o.push(`阶段：${t.phase.name}`), o.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), a && o.push(`剩余${a.x}/${a.y}轮`), t.clock && o.push(`钟时：${t.clock}`), a?.text && o.push(`时限：${a.text}`), e.remaining.type === "countdown" && t.remainingText && o.push(t.remainingText), a?.deadline && !a.text?.includes(a.deadline) && o.push(`截止：${a.deadline}`);
  else {
    o.push(`本轮：第${t.nextRound}轮`), t.clock && o.push(`钟时：${t.clock}`);
    const y = s.panelLimit || s.briefing?.limit;
    y && o.push(`时限：${y}`);
  }
  const c = ["［副本进度·仅供AI］", o.join("　")];
  if (s.briefing?.goal && (!r || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const y = e.roles.filter((x) => i?.[x]);
    c.push(
      y.length ? `角色登记：${e.roles.map((x) => `${x}=${i?.[x] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const A = gf(e, t.firedEvents);
  A && c.push(`已发生事件：${A}`);
  const d = [];
  l.skipFrom !== void 0 && d.push(`玩家选择快进：本轮从「${t.phase.name}」第${l.skipFrom}轮快进到第${l.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const h = new Map((s.subNext ?? []).map((y) => [y.id, y])), g = l.events.filter((y) => y.if && h.get(y.id)?.ok === !1).map((y) => ({ id: y.id, reason: h.get(y.id).reason })), v = l.events.filter((y) => !g.some((x) => x.id === y.id)), k = (y) => !!y.if && h.get(y.id)?.ok === !0, V = v.filter((y) => y.kind === "event"), U = v.filter((y) => y.kind === "directive");
  if (V.length && (d.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), V.forEach((y) => d.push(Ir(y, e, i, k(y))))), U.length && (d.push("本轮写作要求："), U.forEach((y) => d.push(Ir(y, e, i, k(y))))), t.isLastRound ? d.push(xf(t)) : t.overdue && d.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && d.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && d.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((y) => i?.[y])) {
    let y = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((x) => `${x}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
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
    injected: v.map((y) => y.id),
    limit: T,
    skipped: g.length ? g : void 0,
    state: s.stateText || void 0
  };
}
const vf = 1, bf = 0;
function ce() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function wf() {
  const e = ce();
  return e.eventTypes ?? e.event_types ?? {};
}
function ft(e, t) {
  const n = wf()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  ce().eventSource.on(n, t);
}
function J() {
  return ce().chat ?? [];
}
function In() {
  const e = ce();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function _t() {
  return ce().chatMetadata ?? {};
}
function at() {
  const e = ce();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Tt(e, t, n, s) {
  ce().setExtensionPrompt(e, t, vf, n, s, bf);
}
function Te(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function zt(e) {
  const t = ce();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function Tr(e, t = "") {
  const n = ce();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const i = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof i == "string" ? i : null;
  }
  return window.prompt(e, t);
}
async function gl(e, t) {
  const n = ce(), s = document.createElement("div"), i = document.createElement("div");
  i.textContent = e, s.append(i);
  let r = null;
  if (t) {
    const o = document.createElement("label");
    o.className = "checkbox_label rlzc-live-optin", o.style.cssText = "display:inline-flex;align-items:center;justify-content:center;gap:8px;margin-top:10px;min-height:44px;padding:0 8px;cursor:pointer;", r = document.createElement("input"), r.type = "checkbox", r.id = "rlzc-live-optin", r.checked = t.checked;
    const a = document.createElement("span");
    a.textContent = t.label, o.append(r, a), s.append(o);
  }
  if (n.callGenericPopup && n.POPUP_TYPE && n.POPUP_RESULT)
    return { ok: await n.callGenericPopup(s, n.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === n.POPUP_RESULT.AFFIRMATIVE, checked: !!r?.checked };
  const l = window.confirm(e);
  return { ok: l, checked: l && !!t?.checked };
}
const Bt = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function xl(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function kf(e, t = Bt) {
  return t.length ? e.replace(xl(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function yl(e, t = Bt, n = !1) {
  const s = J()[e];
  if (!s || s.is_user) return;
  const i = String(s.extra?.display_text ?? s.mes ?? "");
  if (!xl(n ? Bt : t, "").test(i)) return;
  const r = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!r) return;
  const l = ce().messageFormatting;
  if (typeof l != "function") return;
  const o = l(kf(i, t), s.name ?? "", !!s.is_system, !1, e);
  r.innerHTML !== o && (r.innerHTML = o);
}
function _f(e = Bt, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && yl(s, e, t);
  });
}
const zf = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function vl(e) {
  return e.stateFields?.length ? e.stateFields : [zf];
}
const $f = [...Bt, "状态栏"], Sf = new RegExp(`<(${$f.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function bl(e) {
  return String(e ?? "").replace(Sf, "").replace(/\n{3,}/g, `

`).trim();
}
function Ef(e) {
  const n = [
    "你是角色扮演副本的记录员，不写剧情，只整理事实。",
    "根据本轮正文完成三件事：",
    "1. 事件核对：逐条判断「本轮后台事件」在正文里是 done（已发生）、missed（该发生但没写出来）还是 void（条件已不成立，不该发生），各附一句理由。后台事件即使{{user}}看不到，只要正文与之不矛盾、且没有写出相反的事实，就算 done。标明「第X到Y轮之间」的事件不一定在本轮写出：本轮没写到、也没写出相反的事实，同样算 done。",
    "2. 隐藏状态：在「上一轮状态」的基础上更新下列字段，只依据正文里已经发生的事实，没有变化就照抄上一轮：",
    ...vl(e.pack).map((o) => `   - ${o.key}（${o.label}）：${o.hint}`),
    "3. 条件预判：逐条判断「下一轮事件」的条件现在是否仍成立（ok 为 true/false），附一句理由。",
    "4. hype：0–100 整数，按本轮正文的紧张、冲突、转折打分；hurt：true/false，本轮正文是否有人受伤或死亡。这两项只写数字和真假，不写理由。",
    "只输出一个 JSON 对象，不要任何解释，格式：",
    '{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}],"hype":50,"hurt":false}',
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
${bl(e.text)}`
  ].join(`

`);
  return { system: n, user: l };
}
function Cf(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class it extends Error {
}
function Mf(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), i = t.lastIndexOf("}");
  if (s < 0 || i <= s) throw new it("返回里没有 JSON");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new it("返回的 JSON 无法解析");
  }
  if (!r || typeof r != "object" || Array.isArray(r)) throw new it("返回的不是 JSON 对象");
  if (!r.state || typeof r.state != "object" || Array.isArray(r.state)) throw new it("缺少 state");
  const l = ["done", "missed", "void"], o = (Array.isArray(r.events) ? r.events : []).filter((d) => d && typeof d.id == "string" && l.includes(d.status)).map((d) => ({ id: d.id, status: d.status, reason: String(d.reason ?? "") })), a = (Array.isArray(r.next) ? r.next : []).filter((d) => d && typeof d.id == "string" && typeof d.ok == "boolean").map((d) => ({ id: d.id, ok: d.ok, reason: String(d.reason ?? "") })), c = { events: o, state: r.state, next: a }, A = typeof r.hype == "number" ? r.hype : typeof r.hype == "string" && r.hype.trim() !== "" ? Number(r.hype) : NaN;
  return Number.isFinite(A) && (c.hype = Math.max(0, Math.min(100, Math.round(A)))), typeof r.hurt == "boolean" ? c.hurt = r.hurt : (r.hurt === "true" || r.hurt === "false") && (c.hurt = r.hurt === "true"), c;
}
function If(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function Tf(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((i) => String(i ?? "")).join("|");
  return `${e}:${t}:${s}:${If(String(n?.mes ?? ""))}`;
}
function Pf(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function Nf(e, t, n = 2) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return Mf(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
class wl extends Error {
}
function Ri(e) {
  if (e instanceof wl) return "超时";
  if (e instanceof it) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function kl(e) {
  return e?.extra?.rlzc;
}
function Ms(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Ie(s)) continue;
    const i = kl(s)?.sub;
    if (i?.state && !i.skipped) return { index: n, state: i.state };
  }
  return null;
}
function Rf(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Ie(s)) continue;
    const i = kl(s)?.sub;
    return i && !i.skipped && Array.isArray(i.next) ? i.next : void 0;
  }
}
function ds(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => ds(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${ds(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function _l(e, t) {
  const n = vl(e), s = new Set(n.map((r) => r.key)), i = n.filter((r) => t[r.key] !== void 0).map((r) => `${r.label}：${ds(t[r.key])}`);
  for (const [r, l] of Object.entries(t)) s.has(r) || i.push(`${r}：${ds(l)}`);
  return i.length ? ["［副本状态·仅供AI］", ...i].join(`
`) : "";
}
const Ff = "你在写回廊直播间的观众弹幕。观众是回廊里的其他玩家，只看得到直播画面。什么人都有：夸赞、祝福、讨论、泼冷水、嫉妒、抹黑、造谣，正面的稍多。每条30字以内，口语，称{{user}}为主播，不用性别代词。只能根据画面里已经发生的事说话，不猜测、不透露画面外的信息。", Of = ["praise", "bless", "discuss", "cold", "envy", "smear", "rumor"];
function jf(e) {
  if (!e.aiSource || !e.subOn) return !1;
  const t = Math.max(1, Math.min(10, Math.floor(e.freq) || 3));
  return e.roundInShow > 0 && e.roundInShow % t === 0 ? !0 : e.phaseSwitch || e.hurt || e.eventDone;
}
function Lf(e) {
  return String(e ?? "").replace(/<(副本|状态栏|阶段切换|副本结算|角色登记|积分变动|直播|thinking|think)>[\s\S]*?<\/\1>/g, "").replace(/<\/?[A-Za-z一-龥][^<>]*>/g, "").replace(/\n{3,}/g, `

`).trim();
}
function Df(e, t, n) {
  const s = e.map((l) => l.text), i = [], r = /* @__PURE__ */ new Set();
  for (let l = 0; l < t * 10 && i.length < Math.min(t, s.length); l++) {
    const o = Math.floor(n() * s.length);
    r.has(o) || (r.add(o), i.push(s[o]));
  }
  return i;
}
function Bf(e) {
  const t = [
    Ff,
    "只输出一个 JSON 数组，8–12条，不要任何解释，格式：",
    '[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]'
  ].join(`
`), n = [
    `【直播间】${e.scene}`,
    `【在场角色】${e.cast.length ? e.cast.join("、") : "（无）"}`,
    `【最近两轮画面】
${e.texts.map((s) => Lf(s)).filter(Boolean).join(`

`) || "（无）"}`,
    `【语气示例】
${e.samples.map((s) => `- ${s}`).join(`
`)}`
  ].join(`

`);
  return { system: t, user: n };
}
function Vf(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), i = t.lastIndexOf("]");
  if (s < 0 || i <= s) throw new it("返回里没有 JSON 数组");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new it("返回的 JSON 无法解析");
  }
  if (!Array.isArray(r)) throw new it("返回的不是 JSON 数组");
  const l = r.filter((o) => o && typeof o.text == "string" && o.text.trim()).map((o) => ({
    type: Of.includes(o.type) ? o.type : "discuss",
    name: typeof o.name == "string" && o.name.trim() ? o.name.trim().slice(0, 16) : "匿名",
    text: o.text.trim()
  })).slice(0, 12);
  if (!l.length) throw new it("返回的弹幕为空");
  return l;
}
async function Uf(e, t, n = 1) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return Vf(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
function Wf(e) {
  return e.t === "tip" ? `${e.name} 打赏${e.amount}` : `${e.name}：${e.text}`;
}
function Hf(e, t = 5) {
  if (!e.on) return "";
  const n = e.feed.filter((i) => i.t === "msg" || i.t === "tip").slice(-t), s = `［直播·仅供AI］{{user}}正在直播，约${e.viewers}人在看。`;
  return n.length ? `${s}最近弹幕：${n.map(Wf).join("／")}` : s;
}
const zl = 1500;
function $l() {
  return ce().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function Sl(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function El(e, t) {
  const n = new AbortController();
  let s;
  const i = new Promise((r, l) => {
    s = setTimeout(() => {
      n.abort(), l(new wl(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), i]);
  } finally {
    clearTimeout(s);
  }
}
function Cl(e, t) {
  const n = t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : "") ?? "", s = new Error(`${e || ""} ${n}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return s.status = e, s;
}
async function Ml(e, t, n, s = zl, i = 0.2) {
  const r = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: $l(),
    signal: n,
    body: JSON.stringify({
      ...Sl(e),
      model: e.model,
      messages: [
        { role: "system", content: t.system },
        { role: "user", content: t.user }
      ],
      max_tokens: s,
      temperature: i,
      stream: !1
    })
  }), l = await r.text();
  let o;
  try {
    o = JSON.parse(l);
  } catch {
    o = l;
  }
  if (!r.ok || o?.error) throw Cl(r.status === 200 ? 0 : r.status, o);
  const a = o?.choices?.[0]?.message?.content ?? o?.choices?.[0]?.text ?? o?.content;
  if (typeof a != "string") throw new Error("返回里没有正文");
  return a;
}
async function Gf(e) {
  const t = ce();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function Il(e, t, n = {}) {
  return El(e.timeoutMs, (s) => {
    if (e.source === "main") return Gf(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return Ml(e.preset, t, s, zl, n.temperature ?? 0.2);
  });
}
async function Tl(e) {
  const t = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: $l(),
    body: JSON.stringify(Sl(e))
  }), n = await t.json().catch(() => null);
  if (!t.ok || n?.error) throw Cl(t.status, n);
  return (Array.isArray(n) ? n : Array.isArray(n?.data) ? n.data : Array.isArray(n?.models) ? n.models : []).map((i) => typeof i == "string" ? i : i?.id ?? i?.name).filter(Boolean).sort();
}
async function Yf(e, t) {
  const n = await Tl(e).catch(() => []), s = { ...e, model: e.model || n[0] || "" }, i = await El(
    t,
    (r) => Ml(s, { system: "只回复 OK。", user: "ping" }, r, 5)
  );
  return { models: n, reply: i };
}
const Pl = "rlzc_ledger", Gt = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, Kf = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function Zf(e) {
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
function nn(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), i = String(t.getHours()).padStart(2, "0"), r = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${i}:${r}`;
}
function Fi(e) {
  const t = /等级[：:]\s*([DCBAS])/.exec(e);
  return t ? t[1] : null;
}
function Nl(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function Jf(e, t, n, s, i, r = "") {
  const l = n.结果 ?? "", o = (n.评价 ?? "").toUpperCase().trim(), a = ["D", "C", "B", "A", "S"].includes(o) ? o : null, c = l === "通关" || l === "成功" || l === "胜利", A = l === "失败", d = l === "死亡" || l === "阵亡";
  if (!c && !A && !d)
    return { delta: 0, source: "" };
  if (d)
    return { delta: 0, source: "" };
  if (A)
    return i ? { delta: 0, source: "清算未通关" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣除30%" };
  if (i) {
    const T = Gt[t] + 500;
    return { delta: Math.max(0, T - s), source: "清算通关·续存至斩杀线+500", clearWin: !0 };
  }
  if (!a)
    return { delta: 0, source: "", warn: "评价缺失或无法识别，不发奖励" };
  let h = Kf[e][a];
  const g = r || e, v = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", k = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", V = e !== t;
  let U = `副本奖励·${g} ${a}评`;
  return v ? (h = Math.floor(h * 0.5), U += "（×50%）") : (k || V) && (h = Math.floor(h * 0.6), U += "（×60%）"), { delta: h, source: U };
}
function sn(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function Fn(e, t, n) {
  let s = e, i = !1;
  for (const r of t)
    s += r.delta, s < n && (i = !0), r.clear && (i = !1);
  return i;
}
function qf(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function Qf(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const i = s ?? Gt[n], r = Math.max(0, i - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${r}分（${n}级斩杀线${i}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const xt = "rlzc";
function Xf() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function ep(e, t, n) {
  return {
    id: Xf(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function tp(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function np(e, t) {
  return e.packId === As ? e.briefing ? sl(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function sp(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return Ie(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function ip(e, t) {
  const n = sp(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((i) => ({ ...i, atIndex: i.atIndex + s }))), t.manual = t.manual.filter((i) => i.atIndex < e.length && i.atIndex >= t.entryIndex), !0;
}
function Rl(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Pr = "rlzc_declined";
function Oi(e, t) {
  return `${e}:${t}`;
}
const Fl = Ie;
function Is(e, t, n) {
  if (!Fl(e[t])) return null;
  const s = uf(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function rp(e, t, n, s, i = []) {
  for (let r = Math.max(0, n); r <= Math.min(s, e.length - 1); r++) {
    const l = Is(e, r, t);
    if (l && !i.includes(Oi(r, l.info.name))) return l;
  }
  return null;
}
function op(e, t, n = [], s = gi, i = 0) {
  if (t?.status === "active") return null;
  let r = -1;
  for (let o = Math.max(0, i); o < e.length; o++) if (Fl(e[o])) {
    r = o;
    break;
  }
  if (r < 0 || t && t.entryIndex === r) return null;
  const l = Is(e, r, s);
  return !l || n.includes(Oi(r, l.info.name)) ? null : l;
}
const lp = /[■█▰●◆★▮▓]/g, ap = /[□░▱○◇☆▯▒]/g;
function cp(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const r = Number(n[2]);
    return r === 100 ? Number(n[1]) : r > 0 ? Math.round(Number(n[1]) / r * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(lp) ?? []).length, i = (t.match(ap) ?? []).length;
  return s + i > 0 ? Math.round(s / (s + i) * 100) : null;
}
function Nr(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function Ap(e, t) {
  return Nr(e).includes(Nr(t));
}
function up(e, t, n) {
  const s = [], i = Object.keys(n.perMessage).map(Number).sort((a, c) => a - c);
  let r = !1, l = null, o = !1;
  for (const a of i) {
    const c = n.perMessage[a], d = t.phases.find((y) => y.id === c.phase)?.name ?? "进行中", h = (y, x) => s.push({ index: a, phase: d, round: c.round, kind: y, text: x }), g = e[a]?.extra?.rlzc;
    for (const y of g?.sub?.events ?? []) y.status === "missed" && h("eventMissed", `${y.id} 未写出来：${y.reason}`);
    for (const y of g?.skippedEvents ?? []) h("eventSkipped", `${y.id} 条件不成立，已跳过：${y.reason}`);
    const v = al(String(e[a]?.mes ?? "")), k = a === n.entryIndex;
    if (!v) {
      k || h("missing", "本轮回复缺少 <副本> 面板"), o = !k;
      continue;
    }
    o = !1;
    const V = cp(v.progressBar);
    v.progressBar === void 0 ? h("progressUnreadable", "<副本> 中没有进度条一栏") : V === null ? h("progressUnreadable", `进度条无法读出数值：「${v.progressBar}」`) : (!r && V !== 0 && h("progressStart", `入场后第一轮的进度条应为0，实际为 ${V}`), (V < 0 || V > 100) && h("progressRange", `进度条数值 ${V} 超出 0–100`), l !== null && V < l && h("progressDrop", `进度条比上一轮低：${l} → ${V}`), l = V), r = !0;
    const U = e[a]?.extra?.rlzc?.limit, T = U?.text ? U : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (T) {
      const y = v.limit;
      if (T.minutes !== void 0) {
        const x = qo(y);
        !y || x.remaining === null || x.total === null ? h("limit", `时限读不到「剩余时间/总时长」：写的是「${y ?? "（没有时限一栏）"}」，注入的是「${T.text}」`) : (x.remaining > T.minutes && h("limit", `剩余时间比注入值多：写的是${Qt(x.remaining)}，注入的是${Qt(T.minutes)}`), T.total !== void 0 && x.total !== T.total && h("limit", `总时长与注入值不一致：写的是${Qt(x.total)}，注入的是${Qt(T.total)}`));
      } else (!y || !Ap(y, T.text)) && h("limit", `时限与注入文字不一致：写的是「${y ?? "（没有时限一栏）"}」，注入的是「${T.text}」`);
    }
  }
  return { warnings: s, missingLast: o, hasPanel: r };
}
const dp = {
  D: 2e3,
  C: 8e3,
  B: 3e4,
  A: 1e5,
  S: 3e5
}, fp = [
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
function Ol(e) {
  return fp.some((t) => e.includes(t));
}
function pp(e) {
  if (e.subHype !== void 0)
    return Math.max(0, Math.min(100, Math.round(e.subHype)));
  const t = e.subHurt !== void 0 ? e.subHurt : e.bodyText ? Ol(e.bodyText) : !1;
  let n = 20;
  return e.hasEvents && (n += 20), e.hasPhaseSwitch && (n += 20), t && (n += 30), Math.min(100, n);
}
function hp(e, t) {
  return Math.round(e * 0.6 + t * 0.4);
}
function ji(e) {
  const t = !e.packLevel || e.isRest ? e.playerLevel : e.packLevel, n = dp[t], s = !e.packLevel || e.isRest ? 0.3 : 1;
  return Math.round(n * s * (0.5 + e.heat / 100) * e.rand);
}
const mp = [10, 20, 50, 100, 200, 500, 1e3], gp = [20, 25, 15, 20, 10, 8, 2], xp = [15, 20, 15, 20, 10, 16, 4];
function yp(e, t, n) {
  const s = t.reduce((r, l) => r + l, 0);
  let i = n * s;
  for (let r = 0; r < e.length; r++)
    if (i -= t[r], i <= 0) return e[r];
  return e[e.length - 1];
}
function vp(e) {
  const { hype: t, isCorr: n, rand: s, names: i } = e, r = t / 40, l = [], o = [], a = t >= 70 ? xp : gp;
  for (let h = 1; h <= 3; h++) {
    const g = Math.min(1, Math.max(0, r - (h - 1)));
    if (s() < g) {
      let v = yp(mp, a, s());
      n && (v = Math.max(10, Math.round(v * 0.3 / 10) * 10)), l.push(v), o.push(i[Math.floor(s() * i.length)] ?? "匿名");
    }
  }
  const c = l.reduce((h, g) => h + g, 0), A = Math.floor(c * 0.6);
  let d = "";
  return l.length === 1 ? d = `直播打赏${l[0]}×60%` : l.length > 1 && (d = `直播打赏${l.length}笔·共${c}×60%`), { count: l.length, totalFace: c, faces: l, netTotal: A, source: d, names: o };
}
function ei(e, t, n, s, i, r, l) {
  const o = t && !n;
  return !(e.scope === "inst" && !o || e.scope === "corr" && o || e.when === "hurt" && !s || e.when === "calm" && i >= 30 || e.when === "open" && !r || e.when === "end" && !l);
}
function bp(e) {
  const {
    pool: t,
    templates: n,
    packDanmaku: s = [],
    currentPhase: i,
    isInst: r,
    isRest: l,
    isHurt: o,
    hype: a,
    isOpen: c,
    isEnd: A,
    recentTexts: d,
    names: h,
    whoNames: g,
    rand: v
  } = e, k = 5 + Math.floor(v() * 4), V = [], U = new Set(d), T = t.filter(
    (E) => ei(E, r, l, o, a, c, A)
  ), x = g.length > 0 ? n.filter(
    (E) => ei(E, r, l, o, a, c, A)
  ) : [], _ = s.filter((E) => ei(E, r, l, o, a, c, A) ? E.phase && E.phase.length > 0 && i ? E.phase.includes(i) : !0 : !1), j = () => h[Math.floor(v() * h.length)] ?? "匿名", L = () => g[Math.floor(v() * g.length)] ?? "";
  for (let E = 0; E < k * 5 && V.length < k; E++) {
    let b = "", B = "discuss";
    if (_.length > 0 && v() < 0.3) {
      const je = _[Math.floor(v() * _.length)];
      b = je.text, B = je.type;
    } else if (x.length > 0 && v() < 0.5) {
      const X = x[Math.floor(v() * x.length)];
      b = X.text.replace("{who}", L()), B = X.type;
    } else if (T.length > 0) {
      const X = T[Math.floor(v() * T.length)];
      b = X.text, B = X.type;
    }
    !b || U.has(b) || (U.add(b), V.push({ name: j(), text: b, type: B }));
  }
  return V;
}
const jl = "rlzc_live", wp = "本局直播打赏撤回", Ll = 20, Vt = {
  corridorOn: "回廊直播开始。",
  corridorOff: "已下播。",
  enterOff: "进入副本，回廊直播已结束。",
  instanceOn: "本局副本直播开始。",
  instanceOff: "副本结束，直播已下播。",
  revoke: "主播在副本中死亡，本局打赏已全部撤回。"
};
function kp(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.corridor ?? {};
  return {
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0,
    corridor: { on: !!n.on, show: typeof n.show == "string" ? n.show : "", viewers: Number.isFinite(n.viewers) ? n.viewers : void 0 },
    sys: Array.isArray(t.sys) ? t.sys.filter((s) => s && typeof s.id == "number") : []
  };
}
function Dl(e, t) {
  return e.disableLive ? { show: !1, checked: !1 } : { show: !0, checked: !!t };
}
function Yt(e) {
  const t = e?.extra?.rlzc?.live;
  return t && typeof t.show == "string" && Array.isArray(t.feed) ? t : void 0;
}
function Li(e, t, n = e.length) {
  const s = [];
  for (let i = 0; i < Math.min(n, e.length); i++) {
    const r = e[i];
    if (!r || r.is_user) continue;
    const l = Yt(r);
    l && l.show === t && s.push({ index: i, rec: l });
  }
  return s;
}
function Bl(e, t) {
  return Li(e, t).reduce((n, { rec: s }) => n + (s.tipNet || 0) - (s.revoke || 0), 0);
}
function Di(e, t) {
  let n = t.seq;
  for (const s of t.sys) n = Math.max(n, s.id);
  for (const s of e) for (const i of Yt(s)?.feed ?? []) n = Math.max(n, i.id);
  return n;
}
function _p(e, t = 30) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const i = Yt(e[s])?.feed ?? [];
    for (let r = i.length - 1; r >= 0 && n.length < t; r--) i[r].t === "msg" && n.push(i[r].text);
  }
  return n;
}
const Vl = /<状态栏>([\s\S]*?)<\/状态栏>/, zp = /^(积分|位格|道具|在场)$/, $p = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;
function Ul(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const i = Vl.exec(s.mes);
    if (i) return i[1];
  }
  return null;
}
function Bi(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const i = Vl.exec(s.mes);
    if (!i) continue;
    const r = /等级[：:]\s*([DCBAS])/.exec(i[1]);
    if (r) return r[1];
  }
  return "D";
}
function Wl(e, t = "") {
  if (!e) return [];
  const n = [];
  let s = null;
  for (const r of e.split(`
`)) {
    const l = r.trim();
    if (!l || /^[━─—=\-]{3,}$/.test(l)) continue;
    const o = $p.exec(l);
    if (o) {
      s?.keys.add(o[1]);
      continue;
    }
    const a = /^(.+?)\s*[：:]\s*$/.exec(l);
    if (a) {
      s = { name: a[1].trim(), keys: /* @__PURE__ */ new Set() }, n.push(s);
      continue;
    }
    l.includes("｜") && (n.push({ name: l.split("｜")[0].trim(), keys: /* @__PURE__ */ new Set() }), s = null);
  }
  const i = [];
  return n.forEach((r, l) => {
    if (l === 0 && [...r.keys].some((a) => zp.test(a))) return;
    const o = r.name.replace(/[（(][\s\S]*$/, "").trim();
    !o || /^(陌生|路人)/.test(o) || o === "{{user}}" || t && o === t || i.includes(o) || i.push(o);
  }), i;
}
function Sp(e) {
  const { rand: t } = e, n = bl(e.text), s = e.sub?.hurt !== void 0 ? e.sub.hurt : Ol(n), i = pp({ subHype: e.sub?.hype, subHurt: s, hasEvents: e.hasEvents, hasPhaseSwitch: e.hasPhaseSwitch, bodyText: n }), r = hp(e.prevHeat ?? Ll, i), l = e.scope === "corridor" || e.isRest, o = ji({
    packLevel: e.scope === "instance" ? e.packLevel : null,
    playerLevel: e.playerLevel,
    isRest: e.isRest,
    heat: r,
    rand: 0.9 + t() * 0.2
  }), a = bp({
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
    rand: t
  }), c = vp({ hype: i, isCorr: l, rand: t, names: e.names }), A = [...a, ...e.extraDanmaku ?? []].map((v) => ({ t: "msg", name: v.name, text: v.text, amount: 0, net: 0 }));
  for (let v = A.length - 1; v > 0; v--) {
    const k = Math.floor(t() * (v + 1));
    [A[v], A[k]] = [A[k], A[v]];
  }
  c.faces.forEach((v, k) => {
    const V = A.length ? 1 + Math.floor(t() * A.length) : 0;
    A.splice(Math.min(V, A.length), 0, { t: "tip", name: c.names[k], text: "", amount: v, net: Math.floor(v * 0.6) });
  });
  let d;
  e.settle && (e.settle.died && (d = e.settle.tipsBefore + c.netTotal, d > 0 ? A.push({ t: "sys", name: "", text: Vt.revoke, amount: 0, net: -d }) : d = void 0), A.push({ t: "sys", name: "", text: Vt.instanceOff, amount: 0, net: 0 }));
  const h = A.map((v, k) => ({ id: e.firstId + k, ...v })), g = {
    show: e.show,
    scope: e.scope,
    hype: i,
    heat: r,
    viewers: o,
    hurt: s,
    feed: h,
    tipNet: c.netTotal,
    tipFace: c.totalFace,
    tipSource: c.source
  };
  return d && (g.revoke = d), g;
}
function Ep(e, t) {
  if (!e) return [];
  const n = [];
  return e.tipNet > 0 && n.push({ delta: e.tipNet, source: e.tipSource, type: "tip", at: t }), e.revoke && e.revoke > 0 && n.push({ delta: -e.revoke, source: wp, type: "tip", at: t }), n;
}
function Cp(e) {
  return `其中本局直播打赏${e}分，副本内不可使用，离开副本后可用。`;
}
function Mp(e, t) {
  return e && `${e}${e.endsWith("。") ? "" : "。"}${Cp(t)}`;
}
function Ip(e, t, n) {
  const s = Li(e, n), i = [];
  for (const { rec: r } of s) i.push(...r.feed);
  for (const r of t.sys) r.show === n && i.push({ id: r.id, t: r.t, name: r.name, text: r.text, amount: r.amount, net: r.net });
  return i.sort((r, l) => r.id - l.id), { items: i, last: s[s.length - 1]?.rec };
}
function Tp(e, t) {
  let n = "", s = -1;
  for (const i of t.sys) i.id > s && (s = i.id, n = i.show);
  for (const i of e) {
    const r = Yt(i);
    if (r)
      for (const l of r.feed) l.id > s && (s = l.id, n = r.show);
  }
  return n;
}
function Pp(e, t, n, s = /* @__PURE__ */ new Set()) {
  const i = n.inInstance ? "instance" : "corridor", r = n.inInstance ? n.instanceLive : t.corridor.on, l = n.inInstance ? n.instanceLive ? n.instanceShow ?? "" : "" : r ? t.corridor.show : Tp(e, t), o = { on: r, canToggle: !n.inInstance, scope: i, viewers: 0, heat: 0, tipTotal: 0, injectToAI: n.injectToAI, feed: [], lastTip: null };
  if (!l) return o;
  const { items: a, last: c } = Ip(e, t, l), A = a.filter((g) => !s.has(g.id));
  let d = 0, h = null;
  for (const g of A)
    d += g.net, g.t === "tip" && (h = { id: g.id, net: g.net });
  return {
    ...o,
    viewers: r ? c?.viewers ?? n.startViewers ?? 0 : 0,
    heat: r ? c?.heat ?? Ll : 0,
    tipTotal: d,
    feed: A.slice(-60),
    lastTip: h
  };
}
const Np = ["小满", "好运来", "路过的D级", "一个路过的A级", "数据党", "理性讨论", "吃瓜", "夜班保安", "柠檬汁", "阿柒", "东区卖菜的", "西区摆摊的", "情报社小号", "失眠第三天", "房租交不起", "今天也在种土豆", "匿名", "光幕前的咸鱼", "刚通关的C级", "排行榜第九十九", "不想进本", "炸鱼被抓过", "黑市常客", "训练场打卡人", "药剂站熬夜班", "公会跑腿的", "一个路人", "今日份幸运", "积分快见底", "刚升B级", "看录像长大的", "老观众", "新来的", "别叫我大佬", "蹲一个结算", "白开水", "半夜不睡", "又是我", "打工人", "瓜田里的猹", "慢热", "晴天", "阿九", "十一", "小绿", "老周", "木子", "苏苏", "七七", "一颗橘子", "等天亮", "北风", "不吃香菜", "没抢到号", "退役S级", "D级万岁", "靠运气活着", "只看不说", "路过打个卡", "最后一排"], Rp = [{ type: "praise", text: "这反应速度，不愧是主播" }, { type: "praise", text: "冷静得不像第一次进这个级别的本", scope: "inst" }, { type: "praise", text: "刚才那个判断绝了" }, { type: "praise", text: "主播脑子转得是真快" }, { type: "praise", text: "这波我服" }, { type: "praise", text: "稳，太稳了" }, { type: "praise", text: "讲道理，换我早慌了" }, { type: "praise", text: "这就是高手吗" }, { type: "praise", text: "看得我手心出汗，主播还面不改色" }, { type: "praise", text: "刚才那句话说得漂亮" }, { type: "praise", text: "细节拉满，这都注意到了", scope: "inst" }, { type: "praise", text: "主播说话好有条理" }, { type: "praise", text: "这才叫会玩" }, { type: "praise", text: "就冲这个判断，关注了" }, { type: "praise", text: "有勇有谋" }, { type: "praise", text: "比上一个主播强多了" }, { type: "praise", text: "队友拖后腿，主播一个人在带", scope: "inst" }, { type: "praise", text: "这个位置站得好", scope: "inst" }, { type: "praise", text: "我宣布这是本周最佳直播" }, { type: "praise", text: "主播镇定得让我也镇定了" }, { type: "praise", text: "那个眼神，太帅了" }, { type: "praise", text: "心态真好，要是我早骂人了" }, { type: "praise", text: "这个节奏把握得好", scope: "inst" }, { type: "praise", text: "看出来是做过功课的" }, { type: "praise", text: "夸一句，主播是真的会说话" }, { type: "praise", text: "一句话就把场面稳住了", scope: "inst" }, { type: "praise", text: "这份胆量我是没有" }, { type: "praise", text: "学到了，下次我也这么干" }, { type: "praise", text: "主播好好看" }, { type: "praise", text: "声音也好听，别下播" }, { type: "praise", text: "越看越顺眼" }, { type: "praise", text: "这气质，放在哪个本都是主角" }, { type: "praise", text: "能屈能伸，佩服" }, { type: "praise", text: "刚才那一下我起立鼓掌" }, { type: "praise", text: "不慌不忙，高手风范" }, { type: "praise", text: "回廊里也过得这么讲究，爱了", scope: "corr" }, { type: "praise", text: "主播种的菜看着真水灵", scope: "corr" }, { type: "praise", text: "这手艺可以去西区摆摊了", scope: "corr" }, { type: "praise", text: "休整都不忘练，怪不得排名涨", scope: "corr" }, { type: "praise", text: "房间收拾得真干净", scope: "corr" }, { type: "bless", text: "祝平安出来！！", scope: "inst" }, { type: "bless", text: "主播一定要活着回来", scope: "inst" }, { type: "bless", text: "保佑保佑" }, { type: "bless", text: "冲啊主播！" }, { type: "bless", text: "这把一定能过", scope: "inst" }, { type: "bless", text: "结算见！", scope: "inst", when: "end" }, { type: "bless", text: "平安就好，评级无所谓", scope: "inst" }, { type: "bless", text: "等你出来请你吃饭", scope: "inst" }, { type: "bless", text: "好运加满，霉运退散" }, { type: "bless", text: "希望别再有人出事了", scope: "inst", when: "hurt" }, { type: "bless", text: "主播加油，我在东区超市门口看着呢" }, { type: "bless", text: "撑住，天总会亮的", scope: "inst" }, { type: "bless", text: "别怕，我们都在" }, { type: "bless", text: "好人一生平安" }, { type: "bless", text: "这波过了就能歇歇了", scope: "inst" }, { type: "bless", text: "下个副本抽个简单的吧", scope: "corr" }, { type: "bless", text: "注意安全，别逞强", scope: "inst" }, { type: "bless", text: "保重身体啊", when: "hurt" }, { type: "bless", text: "受伤了先处理伤口", scope: "inst", when: "hurt" }, { type: "bless", text: "一路绿灯，一路绿灯" }, { type: "bless", text: "今天也要好好活着" }, { type: "bless", text: "愿系统对你手下留情" }, { type: "bless", text: "别哭，我们陪你", when: "hurt" }, { type: "bless", text: "等着看你升级" }, { type: "bless", text: "最后一口气了，撑住", scope: "inst", when: "end" }, { type: "bless", text: "最后几轮，稳住！", scope: "inst", when: "end" }, { type: "bless", text: "主播今天早点睡", scope: "corr" }, { type: "bless", text: "休息好了再进本", scope: "corr" }, { type: "bless", text: "希望房租别涨", scope: "corr" }, { type: "bless", text: "回廊安稳一天是一天", scope: "corr" }, { type: "discuss", text: "现在什么情况，我刚进来" }, { type: "discuss", text: "来了来了，这把什么本", scope: "inst", when: "open" }, { type: "discuss", text: "开播了开播了", when: "open" }, { type: "discuss", text: "新主播？没见过", when: "open" }, { type: "discuss", text: "先别吵，看局势" }, { type: "discuss", text: "我觉得还有线索没找到", scope: "inst" }, { type: "discuss", text: "按往届，这本不好打", scope: "inst" }, { type: "discuss", text: "有没有人看过这本的录像", scope: "inst" }, { type: "discuss", text: "黑市那种录像别全信" }, { type: "discuss", text: "这队人各怀心思吧", scope: "inst" }, { type: "discuss", text: "现在还剩几个人？", scope: "inst" }, { type: "discuss", text: "前面说的那个我也注意到了" }, { type: "discuss", text: "理性讨论，别带节奏" }, { type: "discuss", text: "我赌主播能过" }, { type: "discuss", text: "有人算过这把能拿什么评吗", scope: "inst" }, { type: "discuss", text: "主播刚才是不是话里有话" }, { type: "discuss", text: "这个人说话一直留半句", scope: "inst" }, { type: "discuss", text: "注意细节，刚才那句不对劲", scope: "inst" }, { type: "discuss", text: "我在光幕前面站了一个小时了" }, { type: "discuss", text: "回放能看吗，刚才没看清" }, { type: "discuss", text: "有没有懂的解释一下" }, { type: "discuss", text: "你们看出来了吗，我看不出来" }, { type: "discuss", text: "这一段要是剪进录像会卖爆" }, { type: "discuss", text: "楼上别剧透……虽然我也不知道" }, { type: "discuss", text: "好无聊，快进", when: "calm" }, { type: "discuss", text: "主播在发呆吗", when: "calm" }, { type: "discuss", text: "挂着当背景音了", when: "calm" }, { type: "discuss", text: "去泡了碗面回来还是这样", when: "calm" }, { type: "discuss", text: "这么安静，要出事了吧", scope: "inst", when: "calm" }, { type: "discuss", text: "暴风雨前的宁静", scope: "inst", when: "calm" }, { type: "discuss", text: "啊啊啊有人倒了", scope: "inst", when: "hurt" }, { type: "discuss", text: "刚才那一下我没敢看", when: "hurt" }, { type: "discuss", text: "又走一个……", scope: "inst", when: "hurt" }, { type: "discuss", text: "手在抖吧，换我也抖", when: "hurt" }, { type: "discuss", text: "快结束了吧", scope: "inst", when: "end" }, { type: "discuss", text: "结算前最后几轮最容易出事", scope: "inst", when: "end" }, { type: "discuss", text: "今天种什么？", scope: "corr" }, { type: "discuss", text: "回廊直播也有人看，我服了我自己", scope: "corr" }, { type: "discuss", text: "排行榜又变了，你们看了吗", scope: "corr" }, { type: "discuss", text: "下个本打算报哪个？", scope: "corr" }, { type: "cold", text: "别高兴太早" }, { type: "cold", text: "我看悬" }, { type: "cold", text: "这把凉了吧" }, { type: "cold", text: "就这？" }, { type: "cold", text: "也就一般" }, { type: "cold", text: "运气好而已" }, { type: "cold", text: "换个人也能做到" }, { type: "cold", text: "等着翻车吧" }, { type: "cold", text: "这种判断，迟早出事" }, { type: "cold", text: "看了半天也没看出哪里厉害" }, { type: "cold", text: "太磨叽了" }, { type: "cold", text: "说了这么多，一点用没有" }, { type: "cold", text: "我押失败", scope: "inst" }, { type: "cold", text: "评级能拿个C就不错了", scope: "inst" }, { type: "cold", text: "队友再强也带不动", scope: "inst" }, { type: "cold", text: "太自信了，这本专治自信", scope: "inst" }, { type: "cold", text: "往届比这厉害的都栽在这", scope: "inst" }, { type: "cold", text: "真以为能全身而退？", scope: "inst" }, { type: "cold", text: "没意思，我换台了" }, { type: "cold", text: "这操作也就D级水平" }, { type: "cold", text: "这不是冷静，是反应慢" }, { type: "cold", text: "别吹了，看结算", scope: "inst" }, { type: "cold", text: "种菜有什么好看的", scope: "corr" }, { type: "cold", text: "回廊里直播，缺积分缺疯了吧", scope: "corr" }, { type: "cold", text: "天天摆烂，等着被清算吧", scope: "corr" }, { type: "envy", text: "凭什么这种人能上热门" }, { type: "envy", text: "我直播三天没人看，这也行？" }, { type: "envy", text: "长得好就是占便宜" }, { type: "envy", text: "又是这种运气好的" }, { type: "envy", text: "打赏的是托吧" }, { type: "envy", text: "我也想有人给我刷" }, { type: "envy", text: "这点本事也能拿打赏" }, { type: "envy", text: "同样是D级进来的，差距怎么这么大" }, { type: "envy", text: "分到这么好的队友，换我我也行", scope: "inst" }, { type: "envy", text: "酸了，真的酸了" }, { type: "envy", text: "一进来就有大佬带，羡慕不来", scope: "inst" }, { type: "envy", text: "这热度买的吧" }, { type: "envy", text: "凭什么打赏都往这边跑" }, { type: "envy", text: "我通关都没人看" }, { type: "envy", text: "排行榜上那些名字，一半靠运气" }, { type: "envy", text: "有人天生就是被偏爱的" }, { type: "envy", text: "我要是有这配置，比这还稳", scope: "inst" }, { type: "envy", text: "住的地方比我好十倍", scope: "corr" }, { type: "envy", text: "在回廊都能开播赚积分，羡慕哭了", scope: "corr" }, { type: "envy", text: "这菜种得，比我吃的还好", scope: "corr" }, { type: "smear", text: "装什么装" }, { type: "smear", text: "演的吧，这反应太假了" }, { type: "smear", text: "人设立得挺好" }, { type: "smear", text: "会说话而已，真打起来就露馅" }, { type: "smear", text: "这种人最会卖队友" }, { type: "smear", text: "表面客气，背地里肯定算计着" }, { type: "smear", text: "我不信真这么淡定" }, { type: "smear", text: "刚才那个眼神，心虚了吧" }, { type: "smear", text: "故意卖惨要打赏" }, { type: "smear", text: "刚才明明可以救，没救", scope: "inst", when: "hurt" }, { type: "smear", text: "自私，只顾自己", scope: "inst" }, { type: "smear", text: "队友出事了还这么冷静，冷血吧", scope: "inst", when: "hurt" }, { type: "smear", text: "这是在拿别人探路", scope: "inst" }, { type: "smear", text: "满嘴好话，一件实事没干" }, { type: "smear", text: "装新人的吧" }, { type: "smear", text: "就是冲着打赏来的" }, { type: "smear", text: "看着就不是好人" }, { type: "smear", text: "别被骗了，都是算计好的" }, { type: "smear", text: "下了本也要直播，吃相难看", scope: "corr" }, { type: "smear", text: "种田人设，炒给谁看", scope: "corr" }, { type: "rumor", text: "听说积分是借的，真的假的" }, { type: "rumor", text: "肯定是抱大腿进来的" }, { type: "rumor", text: "我朋友说在黑市见过这人" }, { type: "rumor", text: "据说上一个本是被人带飞的" }, { type: "rumor", text: "听说欠了一屁股积分" }, { type: "rumor", text: "有人说是买了攻略才敢进的", scope: "inst" }, { type: "rumor", text: "听说被公会踢出来过" }, { type: "rumor", text: "情报社的人说，这人被抽查过" }, { type: "rumor", text: "有人在西区看到这人跟黑市贩子说话" }, { type: "rumor", text: "据说是走后门才越级的" }, { type: "rumor", text: "听说上个本的队友都没出来" }, { type: "rumor", text: "有人说这人其实早就待清算了" }, { type: "rumor", text: "我听说排名是刷的" }, { type: "rumor", text: "传闻进本前偷偷买了防抽查道具" }, { type: "rumor", text: "听说有人专门花钱买这人的录像" }], Fp = [{ type: "praise", text: "{who}刚才那下好帅" }, { type: "praise", text: "{who}挺靠谱的" }, { type: "bless", text: "{who}别出事啊" }, { type: "bless", text: "心疼{who}" }, { type: "bless", text: "{who}还好吗", when: "hurt" }, { type: "discuss", text: "{who}靠谱吗，我看不透" }, { type: "discuss", text: "{who}又不说话了" }, { type: "discuss", text: "{who}刚才那句什么意思" }, { type: "discuss", text: "盯紧{who}" }, { type: "discuss", text: "{who}和主播配合挺默契" }, { type: "discuss", text: "{who}好像知道点什么" }, { type: "cold", text: "{who}也就那样" }, { type: "cold", text: "指望{who}？算了吧" }, { type: "envy", text: "凭什么{who}也有人喜欢" }, { type: "smear", text: "我就说{who}有问题" }, { type: "smear", text: "{who}在演" }, { type: "smear", text: "{who}那个表情不对劲" }, { type: "rumor", text: "听说{who}在排行榜上挂过名" }, { type: "rumor", text: "我听说{who}以前出过事" }, { type: "rumor", text: "{who}跟主播是不是早就认识" }], Op = {
  names: Np,
  pool: Rp,
  templates: Fp
}, Tn = /* @__PURE__ */ new Set(), Ft = [];
let rt = null, qn = [], ti = null;
function On() {
  for (const e of qn.slice())
    try {
      e();
    } catch (t) {
      console.warn("[rlzc] RLZC_LIVE 订阅回调出错", t);
    }
}
function jp() {
  return 1500 + Math.random() * 1500;
}
function Hl() {
  rt = null;
  const e = Ft.shift();
  e !== void 0 && (Tn.delete(e), On()), Ft.length && (rt = setTimeout(Hl, jp()));
}
function Vi(e, t = !1) {
  if (t && Ft.length) {
    for (const n of Ft) Tn.delete(n);
    Ft.length = 0, rt && clearTimeout(rt), rt = null;
  }
  if (e.length) {
    for (const n of e)
      Tn.add(n.id), Ft.push(n.id);
    rt ? On() : Hl();
  }
}
function Lp() {
  rt && clearTimeout(rt), rt = null, Ft.length = 0, Tn.clear();
}
function Dp(e) {
  ti = e, window.RLZC_LIVE = {
    get: () => ti.view(Tn),
    subscribe(t) {
      return typeof t != "function" ? () => {
      } : (qn.push(t), () => {
        qn = qn.filter((n) => n !== t);
      });
    },
    toggle: () => ti.toggle()
  };
}
const xi = "rlzc", Qn = { optIn: !1, injectToAI: !1, source: "local", freq: 3 }, Gl = {
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
  subApi: structuredClone(Gl),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0, live: !0 },
  live: { ...Qn }
}, f = /* @__PURE__ */ ws({
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
function lt(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ts(...e) {
  f.settings.debug && console.log("[rlzc]", ...e);
}
function Bp() {
  const e = ce().extensionSettings, t = e[xi] ?? {}, n = {
    ...structuredClone(pn),
    ...t,
    depths: { ...pn.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? pn.depths.ledger },
    ball: { ...pn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => tl(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...Cn, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(Gl),
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
      live: t.cardCollapsed?.live ?? !0
    },
    live: Vp(t.live)
  };
  e[xi] = n, f.settings = n, f.packs = Ni(n.customPacks);
}
function Vp(e) {
  const t = e ?? {}, n = Math.floor(Number(t.freq));
  return {
    optIn: typeof t.optIn == "boolean" ? t.optIn : Qn.optIn,
    injectToAI: typeof t.injectToAI == "boolean" ? t.injectToAI : Qn.injectToAI,
    source: t.source === "ai" ? "ai" : "local",
    freq: Number.isFinite(n) ? Math.max(1, Math.min(10, n)) : Qn.freq
  };
}
function de() {
  ce().extensionSettings[xi] = /* @__PURE__ */ ee(f.settings), ce().saveSettingsDebounced(), f.packs = Ni(f.settings.customPacks);
}
function Up(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = tl(t);
  if (n.length) return n;
  const s = t;
  return Ni([]).some((i) => i.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (f.settings.customPacks = [...f.settings.customPacks.filter((i) => i.id !== s.id), s], de(), []);
}
function Wp(e) {
  f.settings.customPacks = f.settings.customPacks.filter((t) => t.id !== e), de();
}
function qe() {
  const e = _t()[Pl];
  return !e || Array.isArray(e) ? {} : e;
}
function jn(e) {
  _t()[Pl] = e, at();
}
function rn(e) {
  const t = [];
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (i.is_user || i.is_system) continue;
    const r = i.extra?.rlzc?.ledger;
    if (Array.isArray(r))
      for (const l of r) t.push({ ...l, mesIndex: s });
  }
  const n = qe();
  for (const s of n.adjust ?? [])
    t.push({ delta: s.amount, source: `手动：${s.note}`, type: "manual", at: s.at, mesIndex: -1 });
  return t;
}
function Kt(e) {
  const t = qe();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const i = e[s];
    if (i.is_user || !i.mes) continue;
    const r = n.exec(i.mes);
    if (!r) continue;
    const l = Nl(r[1]);
    if (l !== null) {
      const o = nn(i.send_date ?? i.gen_finished ?? void 0);
      return jn({ ...t, init: { value: l, source: "状态栏读取", at: o } }), { value: l, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function Hp(e) {
  const t = qe();
  if (!(t.init != null || f.ledger.length > 0)) return "";
  const s = Kt(e), i = sn(s.value, f.ledger), r = /<状态栏>([\s\S]*?)<\/状态栏>/;
  let l = "D";
  const o = t.fix?.level;
  if (o && ["D", "C", "B", "A", "S"].includes(o))
    l = o;
  else
    for (let h = e.length - 1; h >= 0; h--) {
      if (e[h].is_user || !e[h].mes) continue;
      const g = r.exec(e[h].mes);
      if (!g) continue;
      const v = Fi(g[1]);
      if (v) {
        l = v;
        break;
      }
    }
  const a = Gt[l], c = Fn(s.value, f.ledger, a), A = Qf(i, c, l, a), d = ct();
  return d?.status === "active" && d.live ? Mp(A, Bl(e, d.id)) : A;
}
function Rr(e, t = !0) {
  const n = J(), s = n[e];
  if (!s || s.is_user) return;
  const i = s.mes ?? "", r = nn(s.send_date ?? s.gen_finished ?? void 0), l = [], o = new RegExp(sf.source, "g");
  let a;
  for (; (a = o.exec(i)) !== null; ) {
    const A = Zf(a[1]);
    A && l.push({ delta: A.delta, source: A.source, type: "tag", at: r });
  }
  const c = t ? Cs(i) : null;
  if (c && f.pack && !f.pack.rest) {
    const A = {
      结果: c.result ?? "",
      评价: c.rating ?? "",
      ...c.fields
    }, d = qe(), h = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let g = "D";
    const v = d.fix?.level;
    if (v && ["D", "C", "B", "A", "S"].includes(v))
      g = v;
    else
      for (let y = e - 1; y >= 0; y--) {
        if (n[y].is_user || !n[y].mes) continue;
        const x = h.exec(n[y].mes);
        if (!x) continue;
        const _ = Fi(x[1]);
        if (_) {
          g = _;
          break;
        }
      }
    const k = Kt(n), V = sn(k.value, f.ledger), U = !!f.session?.clearance, T = Jf(f.pack.level, g, A, V, U, f.pack.name);
    if (T.warn) {
      s.extra = s.extra ?? {};
      const y = s.extra.rlzc ?? { phase: "", round: 0, injected: [] };
      s.extra.rlzc = lt({ ...y, settleWarn: T.warn });
    }
    if (T.delta !== 0) {
      const y = { delta: T.delta, source: T.source, type: "settle", at: r };
      T.clearWin && (y.clear = !0), l.push(y);
    }
  }
  if (l.length || s.extra?.rlzc?.ledger?.length) {
    s.extra = s.extra ?? {};
    const A = s.extra.rlzc ?? { phase: "", round: 0, injected: [] }, d = [...l, ...(A.ledger ?? []).filter((h) => h.type === "tip")];
    s.extra.rlzc = lt({ ...A, ledger: d.length ? d : void 0 }), at();
  }
  f.ledger = rn(J());
}
function Gp(e, t) {
  const n = qe(), s = nn(void 0), i = [...n.adjust ?? [], { amount: e, note: t, at: s }];
  jn({ ...n, adjust: i });
  const r = { delta: e, source: `手动：${t}`, type: "manual", at: s, mesIndex: -1 };
  f.ledger = [...f.ledger, r];
}
function Yp(e, t) {
  Gp(e, t);
}
function Kp(e) {
  const t = qe(), n = nn(void 0);
  jn({ ...t, init: { value: e, source: "手动设置", at: n } }), f.ledger = rn(J());
}
function Zp(e, t) {
  if (!e && !t) return;
  const n = qe(), s = J(), i = nn(void 0);
  jn({ ...n, fix: { level: e, rank: t, at: i, afterIndex: s.length - 1 } });
}
function ct() {
  return tp(_t()[xt]);
}
function Ps() {
  const e = _t(), t = Array.isArray(e[xt]?.declined) ? e[xt].declined : [], n = Array.isArray(e[Pr]) ? e[Pr] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function Jp(e) {
  const t = _t(), n = [...Ps().filter((s) => s !== e), e];
  t[xt] = { ...t[xt] ?? {}, declined: n }, at();
}
function Ut(e) {
  const t = _t(), n = Ps(), s = n.length ? { declined: n } : {};
  e ? t[xt] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[xt] = s : delete t[xt], at();
}
function Ui(e) {
  const t = ct();
  t && (e(t), Ut(t), Ye());
}
function Yl(e) {
  const t = J();
  return (e === "swipe" || e === "continue") && Ie(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function fs(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = np(t, f.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = pf(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? up(e, n, s) : null };
}
function Ye() {
  const e = J();
  let t = ct();
  if (t) {
    const s = JSON.stringify(t);
    if (!ip(e, t))
      Ut(null), Te("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const i = fs(e, t);
      i.progress && (t.status = i.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && Ut(t);
    }
  }
  const n = fs(e, t);
  f.session = n.session, f.pack = n.pack, f.progress = n.progress, f.audit = n.audit, f.subLine = ea(e, n.progress), f.ledger = rn(e), f.tick++, On();
}
function Kl() {
  if (f.session)
    return Rl(f.session, f.progress?.rolesFromChat);
}
function ps() {
  for (const e of hf) Tt(e, "", 0, !1);
}
let bn = -1;
function qp(e) {
  const t = Yl(e), n = ct(), { pack: s, progress: i, audit: r } = fs(t, n), l = n ? Rl(n, i?.rolesFromChat) : void 0, o = Fs() && !!i, a = o ? Ms(t, i.entryIndex) : null, c = s ? yf(s, i, n, {
    roles: l,
    briefing: n?.briefing,
    panelLimit: i?.panel?.limit,
    audit: r ?? void 0,
    subNext: o ? Rf(t, i.entryIndex) : void 0,
    stateText: a ? _l(s, a.state) : void 0
  }) : Mn;
  ps();
  const A = f.settings.depths;
  c.token && Tt(ul, c.token, A.token, !0), c.progress && Tt(dl, c.progress, A.progress, !1), c.turn && Tt(fl, c.turn, A.turn, !1), c.state && Tt(pl, c.state, A.progress, !1);
  const d = qe();
  let h = Hp(t);
  if (d.fix) {
    const g = qf(d.fix);
    g && (h = h ? `${h}
${g}` : g);
  }
  if (h && Tt(hl, h, A.ledger, !1), f.settings.live.injectToAI) {
    const g = Hf(Yi(/* @__PURE__ */ new Set(), t));
    g && Tt(ml, g, A.live, !1);
  }
  f.lastInjection = c, bn = t.length, Ts("注入", e, c);
}
const yi = /* @__PURE__ */ new Set();
async function Qp() {
  const e = J(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = of(n.mes);
  if (!s) return;
  const i = ct();
  if (!i || i.status !== "active" || i.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const r = `${In()}:${t}:${n.mes}`;
  if (yi.has(r)) return;
  yi.add(r);
  const { pack: l, progress: o } = fs(e, i);
  if (!l || !o || o.ended) return;
  const a = lf(l, o.phase, o.round, s);
  a && await zt(`是否跳到${s}？（${a.label}）`) && (i.manual.push({ kind: "skip", atIndex: t, targetPhase: a.phase, targetRound: a.round }), Ut(i));
}
async function Xp(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      ps();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await Qp(), await Ah(s), qp(s);
  } catch (i) {
    console.error("[rlzc] 拦截器出错", i), ps();
  }
}
const Xn = /* @__PURE__ */ new Set();
function Wi() {
  const e = ct();
  if (!e || e.status !== "ended") return 0;
  const t = f.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
async function Zl(e) {
  const { index: t, info: n } = e, s = In(), i = `${s}:${t}:${n.name}`;
  if (Xn.has(i)) return;
  Xn.add(i);
  const r = e.pack ? `检测到进入《${e.pack.name}》，是否启用？` : `检测到进入《${n.name}》，是否启用？（未收录的副本，将使用通用副本包）`, l = Dl(e.pack ?? {}, f.settings.live.optIn), o = await gl(r, l.show ? { label: "开启直播", checked: l.checked } : null);
  if (In() !== s) {
    Xn.delete(i);
    return;
  }
  if (!o.ok) {
    Jp(Oi(t, n.name));
    return;
  }
  l.show && Jl(o.checked);
  const a = Is(J(), t, f.packs);
  if (!a || a.info.name !== n.name) {
    Te("warning", "入场消息已变化，未启用。");
    return;
  }
  const c = { ...n };
  e.pack || (c.rounds = Xo(n.limit, nl(n), f.settings.genericCaps).rounds), Ql(e.pack ?? sl(c, f.settings.genericCaps), t, c, l.show && o.checked);
}
function Jl(e) {
  f.settings.live.optIn !== e && (f.settings.live.optIn = e, de());
}
function ql() {
  const e = op(J(), ct(), Ps(), f.packs, Wi());
  e && Zl(e);
}
function eh(e) {
  Ye();
  const t = J(), n = Wi();
  let s = -1;
  for (let i = n; i < t.length; i++) if (Ie(t[i])) {
    s = i;
    break;
  }
  e === s && ql();
}
function Ql(e, t, n, s = !1) {
  const i = J(), r = i[t], l = ep(e, t, n), o = $t();
  if (o.corridor.on && (o.corridor.on = !1, Pn(o, o.corridor.show, Vt.enterOff)), s && !e.disableLive && (l.live = !0, Pn(o, l.id, Vt.instanceOn)), Ln(o), !e.rest) {
    const a = Kt(i), c = qe(), A = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let d = "D";
    const h = c.fix?.level;
    if (h && ["D", "C", "B", "A", "S"].includes(h))
      d = h;
    else
      for (let g = i.length - 1; g >= 0; g--) {
        if (i[g].is_user || !i[g].mes) continue;
        const v = A.exec(i[g].mes);
        if (!v) continue;
        const k = Fi(v[1]);
        if (k) {
          d = k;
          break;
        }
      }
    Fn(a.value, f.ledger, Gt[d]) && (l.clearance = !0);
  }
  r.extra = r.extra ?? {}, r.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: l.id }, Ut(l), Ye(), f.progress && (r.extra.rlzc.injected = lt(f.progress.perMessage[t]?.events ?? [])), at(), Te("success", `已进入副本《${e.name}》。`);
}
async function th(e) {
  const t = f.packs.find((o) => o.id === e);
  if (!t) return;
  const n = J();
  let s = n.length - 1;
  for (; s >= 0 && !Ie(n[s]); ) s--;
  if (s < 0) {
    Te("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  if (ct()?.status === "active" && !await zt("当前已有进行中的副本，确定要替换吗？")) return;
  const r = Dl(t, f.settings.live.optIn), l = await gl(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`, r.show ? { label: "开启直播", checked: r.checked } : null);
  l.ok && (r.show && Jl(l.checked), Ql(t, s, rl(n[s].mes) ?? { name: t.name }, r.show && l.checked));
}
function Ns(e) {
  Ui((t) => t.manual.push(e));
}
function Rs() {
  return J().length - 1;
}
async function Fr() {
  const e = f.progress;
  if (!(!e || e.ended || !f.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Te("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await zt(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (Ns({ kind: "skip", atIndex: Rs(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Te("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function Or() {
  if (!(!f.session || f.progress?.ended) && await zt("确定要手动结束当前副本吗？")) {
    if (f.session.live) {
      const e = $t();
      Pn(e, f.session.id, Vt.instanceOff), Ln(e);
    }
    Ns({ kind: "end", atIndex: Rs() });
  }
}
function nh(e) {
  Ns({ kind: "setPhase", atIndex: Rs(), phase: e });
}
function sh(e) {
  Ns({ kind: "setRound", atIndex: Rs(), round: e });
}
function ih(e) {
  Ui((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function rh(e) {
  Ui((t) => t.manual.splice(e, 1));
}
async function jr() {
  f.session && await zt("确定要删除当前副本会话吗？（不会改动聊天记录）") && (Ut(null), Ye());
}
function Fs() {
  return f.settings.subApi.source !== "off";
}
function Xl() {
  const e = f.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function oh(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function ea(e, t) {
  if (!Fs() || !t || t.ended) return "";
  if (f.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const i = Ms(e, t.entryIndex);
  return i && t.perMessage[i.index] ? `副本记录：已更新（第${t.perMessage[i.index].round}轮）` : "副本记录：尚未整理";
}
let es = null;
const Hi = /* @__PURE__ */ new Set();
function Wt(e) {
  return Tf(In(), e, J()[e]);
}
function Lr(e) {
  f.subBusy = e, f.subLine = ea(J(), f.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && f.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function ta(e, t, n) {
  if (Wt(e) !== t) return;
  const s = J()[e];
  s?.extra?.rlzc && (s.extra.rlzc = lt({ ...s.extra.rlzc, sub: n }), at(), Ye());
}
function lh(e, t) {
  const n = J(), s = f.progress, i = f.pack, r = n[e], l = s?.perMessage[e];
  if (!i || !s || !l || !r) return null;
  const o = Kl(), a = (y) => ({ ...y, text: us(y.text, i, o), if: y.if ? us(y.if, i, o) : void 0 }), c = Cf(i, r.extra?.rlzc?.injected ?? []).map(a), A = (s.next?.events ?? []).filter((y) => y.if).map(a);
  if (!Pf({
    enabled: Fs(),
    active: !s.ended && f.session?.status === "active",
    type: t,
    saveMode: f.settings.subApi.saveMode,
    hasEvents: c.length > 0,
    hasNextConditional: A.length > 0
  })) return null;
  const h = Wt(e);
  if (Hi.has(h)) return null;
  const g = i.phases.find((y) => y.id === l.phase), v = Ms(n.slice(0, e), s.entryIndex), k = Ef({
    pack: i,
    phaseName: g?.name ?? l.phase,
    round: l.round,
    prevState: v?.state ?? null,
    events: c,
    nextConditional: A,
    text: String(r.mes ?? "")
  }), V = ce().substituteParams, U = V ? { system: V(k.system), user: V(k.user) } : k, T = ah(e, h, l.round, U);
  return es = { key: h, index: e, promise: T }, T.finally(() => {
    es?.key === h && (es = null);
  }), T;
}
async function ah(e, t, n, s) {
  Lr(!0);
  try {
    let i = 2;
    for (; ; ) {
      const r = Xl();
      if (!r) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const l = Date.now();
      try {
        const o = await Nf((a) => Il(r, a), s, i);
        ta(e, t, { ...o, ms: Date.now() - l, via: oh(r), at: (/* @__PURE__ */ new Date()).toISOString() }), Hi.add(t);
        return;
      } catch (o) {
        if (Wt(e) !== t) return;
        const a = Ri(o), c = String(o?.message ?? o).slice(0, 200);
        if (Ts("副本事件检测失败", a, o), !f.settings.subApi.wait) {
          Te("warning", `第${n}轮事件检测失败（${a}），已沿用上一轮状态。`), ni(e, t, a);
          return;
        }
        if (await ch(n, a, c) === "skip") {
          ni(e, t, a);
          return;
        }
        i = 0;
      }
    }
  } catch (i) {
    Te("error", String(i?.message ?? i)), ni(e, t, "其他");
  } finally {
    Lr(!1);
  }
}
function ni(e, t, n) {
  Hi.add(t), ta(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function ch(e, t, n) {
  const s = ce();
  if (!s.Popup || !s.POPUP_TYPE)
    return window.confirm(`第${e}轮事件检测失败（${t}）。重试吗？取消则这轮先跳过。`) ? "retry" : "skip";
  const i = f.settings.subApi, r = document.createElement("div"), l = document.createElement("h3");
  l.textContent = `第${e}轮事件检测失败`;
  const o = document.createElement("p");
  o.textContent = `原因：${t}`;
  const a = document.createElement("small");
  a.textContent = n, a.style.opacity = "0.7";
  const c = document.createElement("div");
  c.style.cssText = "display:none;margin-top:10px;";
  const A = document.createElement("label");
  A.textContent = "换成：";
  const d = document.createElement("select");
  d.className = "text_pole";
  const h = [{ value: "", text: "请选择…" }];
  for (const k of i.presets) i.source === "preset" && k.id === i.presetId || h.push({ value: `preset:${k.id}`, text: `自设API：${k.name}` });
  i.source !== "main" && h.push({ value: "main", text: "跟随主API" });
  for (const k of h) {
    const V = document.createElement("option");
    V.value = k.value, V.textContent = k.text, d.append(V);
  }
  A.append(d), c.append(A), r.append(l, o, a, c);
  let g;
  d.addEventListener("change", () => {
    const k = d.value;
    k && (k === "main" ? i.source = "main" : (i.source = "preset", i.presetId = k.slice(7)), de(), g.complete(s.POPUP_RESULT.CUSTOM1));
  }), g = new s.Popup(r, s.POPUP_TYPE.TEXT, "", {
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
  const v = await g.show();
  return v === s.POPUP_RESULT.AFFIRMATIVE || v === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function Ah(e) {
  const t = es;
  if (!(!t || !f.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= Yl(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function uh(e, t) {
  const n = J(), s = n[e];
  if (!Ie(s)) return;
  const i = ct();
  if (!i || i.status === "ended") {
    if (Is(n, e, f.packs)) {
      const c = rp(n, f.packs, Wi(), e, Ps());
      c && Zl(c);
    }
    if (t === "first_message") return;
    Ye(), Rr(e, !1), Br(e), ri(e, t), Dr();
    return;
  }
  if (t === "first_message") return;
  let r = null;
  const l = ll(s.mes);
  l && (i.roles = { ...i.roles ?? {}, ...l }), Ut(i), Ye();
  const o = f.progress?.perMessage[e];
  if (o && f.pack) {
    const c = f.pack.phases.find((k) => k.id === o.phase), A = {
      phase: c?.name ?? o.phase,
      round: o.round,
      injected: bn === e ? f.lastInjection.injected : o.events
    }, d = f.pack.time;
    d.type === "clock" && c?.clock && !c.night && !c.frozen && (A.clock = cl(d.dayStart, d.minutesPerRound, o.round));
    const h = bn === e ? f.lastInjection.limit : o.limit?.text ? { text: o.limit.text, minutes: o.limit.minutes, total: o.limit.total } : void 0;
    h && (A.limit = h);
    const g = s.extra?.rlzc?.entry;
    g && (A.entry = g), bn === e && f.lastInjection.skipped?.length && (A.skippedEvents = f.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (A.sub = s.extra.rlzc.sub), t === "continue" && s.extra?.rlzc?.live && (A.live = s.extra.rlzc.live);
    const v = (s.extra?.rlzc?.ledger ?? []).filter((k) => k.type === "tip");
    t === "continue" && v.length && (A.ledger = v), s.extra = s.extra ?? {}, s.extra.rlzc = lt(A), at(), Ye(), r = lh(e, t);
  }
  const a = Cs(s.mes);
  if (a && Te("info", `副本结算：${a.result ?? "—"}${a.rating ? `，评价 ${a.rating}` : ""}`), Rr(e), Br(e), r) {
    const c = Wt(e);
    r.then(() => {
      Wt(e) === c && ri(e, t);
    });
  } else ri(e, t);
  Dr();
}
function Dr() {
  const e = qe();
  e.fix && jn({ ...e, fix: void 0 });
}
function Br(e) {
  const t = J(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const i = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!i) return;
  const r = Nl(i[1]);
  if (r === null) return;
  const l = Kt(t), o = sn(l.value, rn(t).filter((a) => !(a.mesIndex === e && a.type === "tip")));
  r !== o && (Ts(`积分核对不符（楼层${e}）：状态栏 ${r}，账本 ${o}`), n.extra?.rlzc && (n.extra.rlzc = lt({ ...n.extra.rlzc, ledgerMismatch: { status: r, ledger: o } }), at()));
}
function Vr() {
  yi.clear(), Xn.clear(), bn = -1, f.chatId = In(), f.debugUnlocked = !1, f.lastInjection = Mn, ps(), Lp(), f.ledger = rn(J()), Ye(), ql(), setTimeout(() => Gi(), 50);
}
function si() {
  Ye();
}
function na() {
  return f.settings.panelDisplay === "statusbar" ? Bt.filter((e) => e !== "副本") : Bt;
}
function ii(e) {
  yl(e, na());
}
function Gi(e = !1) {
  _f(na(), e);
}
function dh(e) {
  f.settings.panelDisplay !== e && (f.settings.panelDisplay = e, de(), Gi(!0));
}
const ts = Op;
function $t() {
  return kp(_t()[jl]);
}
function Ln(e) {
  _t()[jl] = lt(e), at();
}
function Pn(e, t, n) {
  if (!t) return;
  const s = Di(J(), e) + 1, i = { id: s, t: "sys", name: "", text: n, amount: 0, net: 0, show: t };
  e.sys = [...e.sys, i].slice(-100), e.seq = s, Vi([i]);
}
function fh() {
  return "c" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function ph(e) {
  const t = f.session, n = f.progress;
  if (!!t && e > t.entryIndex && (!n?.ended || n.endIndex !== void 0 && e <= n.endIndex)) return t.live && f.pack ? { show: t.id, scope: "instance", pack: f.pack } : null;
  const i = $t();
  return i.corridor.on && i.corridor.show ? { show: i.corridor.show, scope: "corridor", pack: null } : null;
}
function ri(e, t) {
  if (t === "continue" || t === "first_message") return;
  const n = J(), s = n[e];
  if (!Ie(s) || Yt(s)) return;
  const i = ph(e);
  if (!i) return;
  const r = $t(), { show: l, scope: o, pack: a } = i, c = f.progress, A = s.extra?.rlzc ?? { phase: "", round: 0, injected: [] }, d = Li(n, l, e), h = A.sub && !A.sub.skipped ? { hype: A.sub.hype, hurt: A.sub.hurt } : void 0, g = o === "instance" && c?.endIndex === e && c.endedBy === "tag" ? Cs(s.mes) : null, v = !!g && ["死亡", "阵亡"].includes(String(g.result ?? "").trim()), k = c?.roundsLeft, V = /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(s.mes ?? "")), U = new Set((a?.events ?? []).filter((L) => L.kind !== "directive").map((L) => L.id)), T = Sp({
    show: l,
    scope: o,
    packLevel: a?.level ?? null,
    playerLevel: Bi(n, e + 1),
    isRest: !!a?.rest,
    prevHeat: d.length ? d[d.length - 1].rec.heat : null,
    roundsInShow: d.length,
    text: String(s.mes ?? ""),
    hasEvents: (A.injected ?? []).some((L) => U.has(L)),
    hasPhaseSwitch: V,
    sub: h,
    isEnd: o === "instance" && !!k && k.y > 0 && k.x < k.y * 0.1,
    phaseId: o === "instance" ? c?.perMessage[e]?.phase : void 0,
    pool: ts.pool,
    templates: ts.templates,
    packDanmaku: a?.danmaku,
    names: ts.names,
    whoNames: Wl(Ul(n, e + 1), String(ce().name1 ?? "")),
    recentTexts: _p(n.slice(0, e)),
    firstId: Di(n, r) + 1,
    settle: g ? { died: v, tipsBefore: Bl(n.slice(0, e), l) } : void 0,
    rand: Math.random
  }), y = jf({
    aiSource: f.settings.live.source === "ai",
    subOn: Fs(),
    roundInShow: d.length + 1,
    freq: f.settings.live.freq,
    phaseSwitch: V,
    hurt: T.hurt,
    eventDone: !!A.sub && !A.sub.skipped && (A.sub.events ?? []).some((L) => L.status === "done")
  });
  y && (T.ai = { ok: !1, pending: !0 });
  const x = nn(s.send_date ?? s.gen_finished ?? void 0), j = [...(A.ledger ?? []).filter((L) => L.type !== "tip"), ...Ep(T, x)];
  s.extra = s.extra ?? {}, s.extra.rlzc = lt({ ...A, live: T, ledger: j.length ? j : void 0 }), r.seq = Math.max(r.seq, ...T.feed.map((L) => L.id)), Ln(r), f.ledger = rn(J()), f.tick++, Vi(T.feed, !0), y && hh(e, T.scope === "instance" ? a?.name : void 0);
}
function hh(e, t) {
  const n = J(), s = Wt(e), i = Xl();
  if (!i) {
    oi(e, s, [], "副本事件检测没有设置好", 0);
    return;
  }
  const r = [];
  for (let A = e; A >= 0 && r.length < 2; A--) Ie(n[A]) && r.unshift(String(n[A].mes ?? ""));
  const l = Bf({
    scene: t ?? "回廊",
    texts: r,
    cast: Wl(Ul(n, e + 1), String(ce().name1 ?? "")),
    samples: Df(ts.pool, 10, Math.random)
  }), o = ce().substituteParams, a = o ? { system: o(l.system), user: o(l.user) } : l, c = Date.now();
  Uf((A) => Il(i, A, { temperature: 0.9 }), a, 1).then((A) => oi(e, s, A, null, Date.now() - c)).catch((A) => {
    Ts("AI 弹幕生成失败", A);
    const d = String(A?.message ?? A).slice(0, 120);
    oi(e, s, [], `${Ri(A)}：${d}`, Date.now() - c);
  });
}
function oi(e, t, n, s, i) {
  if (Wt(e) !== t) return;
  const r = J(), l = r[e], o = Yt(l);
  if (!o || !l.extra?.rlzc) return;
  const a = $t();
  let c = Di(r, a);
  const A = n.map((h) => ({ id: ++c, t: "msg", name: h.name, text: h.text, amount: 0, net: 0 })), d = { ...o, feed: [...o.feed, ...A], ai: s ? { ok: !1, error: s, ms: i } : { ok: !0, count: A.length, ms: i } };
  l.extra.rlzc = lt({ ...l.extra.rlzc, live: d }), a.seq = Math.max(a.seq, c), Ln(a), f.tick++, A.length ? Vi(A) : On();
}
function mh() {
  const e = $t();
  return f.session?.status === "active" && f.pack ? ji({ packLevel: f.pack.level, playerLevel: Bi(J()), isRest: !!f.pack.rest, heat: 20, rand: 1 }) : e.corridor.viewers ?? 0;
}
function Yi(e, t = J()) {
  const n = f.session, s = n?.status === "active";
  return Pp(
    t,
    $t(),
    {
      inInstance: s,
      instanceLive: !!(s && n?.live),
      instanceShow: n?.id,
      startViewers: mh(),
      injectToAI: f.settings.live.injectToAI
    },
    e
  );
}
function gh() {
  if (f.session?.status === "active") return !1;
  const e = $t();
  if (e.corridor.on)
    e.corridor.on = !1, Pn(e, e.corridor.show, Vt.corridorOff);
  else {
    const t = fh();
    e.corridor = {
      on: !0,
      show: t,
      viewers: ji({ packLevel: null, playerLevel: Bi(J()), isRest: !1, heat: 20, rand: 0.9 + Math.random() * 0.2 })
    }, Pn(e, t, Vt.corridorOn);
  }
  return Ln(e), f.tick++, On(), !0;
}
const xh = { class: "rlzc-ball-mark" }, li = 44, yh = /* @__PURE__ */ Oe({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ he({ x: 0, y: 0 });
    let n = null;
    function s(A, d) {
      const h = window.innerWidth - li - 4, g = window.innerHeight - li - 4;
      return { x: Math.min(Math.max(4, A), h), y: Math.min(Math.max(4, d), g) };
    }
    function i() {
      const A = f.settings.ball;
      t.value = s(A.x ?? window.innerWidth - li - 12, A.y ?? Math.round(window.innerHeight * 0.35));
    }
    function r(A) {
      A.currentTarget.setPointerCapture(A.pointerId), n = { id: A.pointerId, dx: A.clientX - t.value.x, dy: A.clientY - t.value.y, moved: !1, sx: A.clientX, sy: A.clientY };
    }
    function l(A) {
      !n || n.id !== A.pointerId || (Math.abs(A.clientX - n.sx) + Math.abs(A.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(A.clientX - n.dx, A.clientY - n.dy)));
    }
    function o(A) {
      if (!n || n.id !== A.pointerId) return;
      const d = n.moved;
      n = null, d ? (f.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, de()) : f.panelOpen = !f.panelOpen;
    }
    const a = H(() => !!f.session && !f.progress?.ended), c = H(() => !!f.progress?.warn);
    return _s(() => f.settings.ball, i, { deep: !0 }), lc(() => {
      i(), window.addEventListener("resize", i);
    }), ac(() => window.removeEventListener("resize", i)), (A, d) => (z(), S("button", {
      class: ne(["rlzc-ball", { "is-active": a.value, "is-warn": c.value }]),
      style: vs({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: r,
      onPointermove: l,
      onPointerup: o,
      onPointercancel: o
    }, [
      u("span", xh, P(a.value ? O(f).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
});
function vh(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function dn(e) {
  return vh(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function bh(e) {
  const t = [];
  let n = null, s = [];
  const i = () => {
    s.length && t.push(`<p>${s.map(dn).join("<br>")}</p>`), s = [];
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
    const a = /^(#{1,4})\s+(.*)$/.exec(o);
    if (a) {
      i(), r();
      const h = Math.min(a[1].length + 2, 6);
      t.push(`<h${h}>${dn(a[2])}</h${h}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(o), A = /^\s*(\d+)[.、]\s+(.*)$/.exec(o);
    if (c || A) {
      i();
      const h = c ? "ul" : "ol", g = c ? c[1] : A[2];
      n !== h ? (r(), n = h, t.push(h === "ol" ? `<ol start="${A[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(dn(g));
      continue;
    }
    if (n && /^\s{2,}/.test(l)) {
      t.push(`<br>${dn(o.trim())}`);
      continue;
    }
    const d = /^>\s?(.*)$/.exec(o);
    if (d) {
      i(), r(), t.push(`<blockquote>${dn(d[1])}</blockquote>`);
      continue;
    }
    r(), s.push(o);
  }
  return i(), r(), t.join("");
}
const wh = {
  key: 0,
  class: "rlzc-docs"
}, kh = { class: "rlzc-subtabs" }, _h = ["onClick"], zh = { class: "rlzc-md" }, $h = ["innerHTML"], Sh = ["src", "alt"], Eh = {
  key: 2,
  class: "rlzc-note"
}, Ur = /* @__PURE__ */ Oe({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ he(0);
    _s(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = H(() => t.pack.docs?.[n.value]), i = H(() => s.value?.md ? bh(s.value.md) : ""), r = H(() => s.value?.image ? qd(t.pack, s.value.image) : null);
    return (l, o) => e.pack.docs?.length ? (z(), S("section", wh, [
      u("div", kh, [
        (z(!0), S(Q, null, me(e.pack.docs, (a, c) => (z(), S("button", {
          key: c,
          class: ne({ on: n.value === c }),
          onClick: (A) => n.value = c
        }, P(a.title), 11, _h))), 128))
      ]),
      u("article", zh, [
        i.value ? (z(), S("div", {
          key: 0,
          innerHTML: i.value
        }, null, 8, $h)) : Y("", !0),
        r.value ? (z(), S("img", {
          key: 1,
          src: r.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, Sh)) : s.value?.image && !r.value ? (z(), S("p", Eh, "图片无法加载：" + P(s.value.image), 1)) : Y("", !0)
      ])
    ])) : Y("", !0);
  }
}), Ch = {
  key: 0,
  class: "rlzc-ledger-summary"
}, Mh = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, Wr = /* @__PURE__ */ Oe({
  __name: "LedgerSummary",
  setup(e) {
    const t = H(() => J()), n = H(() => Kt(t.value)), s = H(() => sn(n.value.value, f.ledger)), i = H(() => f.pack?.level ?? "D"), r = H(() => Gt[i.value]), l = H(() => Fn(n.value.value, f.ledger, r.value)), o = H(() => f.ledger.length > 0 || n.value.source !== "默认值");
    return (a, c) => o.value ? (z(), S("div", Ch, [
      u("span", {
        class: ne(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + P(s.value >= 0 ? "+" : "") + P(s.value), 3),
      l.value ? (z(), S("span", Mh, "待清算")) : Y("", !0)
    ])) : Y("", !0);
  }
}), Ih = { class: "rlzc-system" }, Th = { class: "rlzc-card rlzc-hero" }, Ph = { class: "rlzc-hero-top" }, Nh = { class: "rlzc-level" }, Rh = {
  key: 0,
  class: "rlzc-chip"
}, Fh = {
  key: 0,
  class: "rlzc-goal"
}, Oh = { class: "rlzc-grid" }, jh = {
  key: 0,
  class: "rlzc-stat"
}, Lh = {
  key: 1,
  class: "rlzc-stat"
}, Dh = {
  key: 2,
  class: "rlzc-stat"
}, Bh = {
  key: 3,
  class: "rlzc-stat"
}, Vh = {
  key: 0,
  class: "rlzc-subline"
}, Uh = {
  key: 1,
  class: "rlzc-note"
}, Wh = {
  key: 2,
  class: "rlzc-card"
}, Hh = { class: "rlzc-kv" }, Gh = { class: "rlzc-kv" }, Yh = {
  key: 0,
  class: "rlzc-note rlzc-note-warn"
}, Kh = {
  key: 3,
  class: "rlzc-note"
}, Zh = {
  key: 4,
  class: "rlzc-card"
}, Jh = {
  key: 0,
  class: "rlzc-kv"
}, qh = { class: "rlzc-mono" }, Qh = {
  key: 1,
  class: "rlzc-tasks"
}, Xh = {
  key: 2,
  class: "rlzc-ps"
}, em = { class: "rlzc-actions" }, tm = ["disabled"], nm = ["disabled"], sm = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, im = {
  key: 2,
  class: "rlzc-card"
}, rm = { class: "rlzc-row" }, om = ["value"], lm = ["disabled"], am = /* @__PURE__ */ Oe({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ he(""), n = H(() => !!f.session && !!f.pack), s = H(() => f.progress), i = H(() => n.value && !!s.value && !s.value.ended), r = H(() => f.packs.find((h) => h.id === t.value) ?? null), l = H(() => !!f.pack?.phases.length), o = H(() => f.settings.panelDisplay !== "statusbar"), a = H(() => {
      const h = s.value;
      return h ? l.value ? `${h.warn ? "⚠️ " : ""}${h.round}/${h.phase.cap}` : `第${h.round}轮` : "";
    }), c = H(() => {
      const h = s.value;
      return h ? h.limit?.text ? h.limit.text : h.panel?.limit || f.session?.briefing?.limit || "—" : "";
    }), A = H(() => {
      const h = s.value;
      return !!h && !h.ended && l.value && h.phase.cap > 0 && h.nextRound < h.phase.cap;
    });
    async function d() {
      t.value && (await th(t.value), t.value = "");
    }
    return (h, g) => (z(), S("div", Ih, [
      n.value && s.value ? (z(), S(Q, { key: 0 }, [
        u("div", Th, [
          u("div", Ph, [
            u("span", Nh, P(O(f).pack?.rest ? "—" : O(f).pack.level), 1),
            u("h3", null, P(O(f).pack.name), 1),
            s.value.ended ? (z(), S("span", Rh, "已结束")) : Y("", !0)
          ]),
          O(f).session?.briefing?.goal ? (z(), S("p", Fh, "目标：" + P(O(f).session.briefing.goal), 1)) : Y("", !0)
        ]),
        u("div", Oh, [
          l.value ? (z(), S("div", jh, [
            g[3] || (g[3] = u("span", null, "阶段", -1)),
            u("b", null, P(s.value.phase.name), 1)
          ])) : Y("", !0),
          u("div", {
            class: ne(["rlzc-stat", { warn: s.value.warn }])
          }, [
            g[4] || (g[4] = u("span", null, "轮次", -1)),
            u("b", null, P(a.value), 1)
          ], 2),
          s.value.currentClock ? (z(), S("div", Lh, [
            g[5] || (g[5] = u("span", null, "钟时", -1)),
            u("b", null, P(s.value.currentClock), 1)
          ])) : Y("", !0),
          s.value.roundsLeft ? (z(), S("div", Dh, [
            g[6] || (g[6] = u("span", null, "最多剩余轮次", -1)),
            u("b", null, P(s.value.roundsLeft.x) + "/" + P(s.value.roundsLeft.y), 1)
          ])) : Y("", !0),
          o.value ? (z(), S("div", Bh, [
            g[7] || (g[7] = u("span", null, "剩余时间", -1)),
            u("b", null, P(c.value), 1)
          ])) : Y("", !0),
          $e(Wr)
        ]),
        O(f).subLine ? (z(), S("p", Vh, P(O(f).subLine), 1)) : Y("", !0),
        s.value.skipGoal ? (z(), S("div", Uh, "快进中：目标 " + P(O(f).pack.phases.find((v) => v.id === s.value.skipGoal.phase)?.name) + " 第" + P(s.value.skipGoal.round) + "轮", 1)) : Y("", !0),
        s.value.ended && s.value.settlement ? (z(), S("div", Wh, [
          u("div", Hh, [
            g[8] || (g[8] = u("span", null, "结果", -1)),
            u("b", null, P(s.value.settlement.result ?? "—"), 1)
          ]),
          u("div", Gh, [
            g[9] || (g[9] = u("span", null, "评价", -1)),
            u("b", null, P(s.value.settlement.rating ?? "—"), 1)
          ]),
          O(f).session?.clearance && s.value.settlement.result === "失败" ? (z(), S("div", Yh, " 清算未通关 ")) : Y("", !0)
        ])) : s.value.ended ? (z(), S("div", Kh, "副本已手动结束。")) : Y("", !0),
        o.value && s.value.panel ? (z(), S("div", Zh, [
          s.value.panel.progressBar ? (z(), S("div", Jh, [
            g[10] || (g[10] = u("span", null, "进度", -1)),
            u("b", qh, P(s.value.panel.progressBar), 1)
          ])) : Y("", !0),
          s.value.panel.tasks.length ? (z(), S("div", Qh, [
            g[11] || (g[11] = u("span", null, "任务", -1)),
            u("ul", null, [
              (z(!0), S(Q, null, me(s.value.panel.tasks, (v, k) => (z(), S("li", { key: k }, P(v), 1))), 128))
            ])
          ])) : Y("", !0),
          s.value.panel.ps ? (z(), S("div", Xh, "ps：" + P(s.value.panel.ps), 1)) : Y("", !0)
        ])) : Y("", !0),
        u("div", em, [
          u("button", {
            class: "rlzc-btn",
            disabled: !A.value,
            onClick: g[0] || (g[0] = //@ts-ignore
            (...v) => O(Fr) && O(Fr)(...v))
          }, "跳过（到本阶段结束）", 8, tm),
          u("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: g[1] || (g[1] = //@ts-ignore
            (...v) => O(Or) && O(Or)(...v))
          }, "手动结束副本", 8, nm)
        ]),
        i.value && O(f).pack.docs?.length ? (z(), st(Ur, {
          key: 5,
          pack: O(f).pack
        }, null, 8, ["pack"])) : Y("", !0)
      ], 64)) : (z(), S("div", sm, [
        g[12] || (g[12] = u("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        $e(Wr)
      ])),
      i.value ? Y("", !0) : (z(), S("div", im, [
        g[14] || (g[14] = u("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        u("div", rm, [
          ht(u("select", {
            "onUpdate:modelValue": g[2] || (g[2] = (v) => t.value = v),
            class: "rlzc-input"
          }, [
            g[13] || (g[13] = u("option", { value: "" }, "选择副本…", -1)),
            (z(!0), S(Q, null, me(O(f).packs, (v) => (z(), S("option", {
              key: v.id,
              value: v.id
            }, P(v.level) + "｜" + P(v.name), 9, om))), 128))
          ], 512), [
            [Jo, t.value]
          ]),
          u("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: d
          }, "进入", 8, lm)
        ])
      ])),
      !i.value && r.value?.docs?.length ? (z(), st(Ur, {
        key: 3,
        pack: r.value
      }, null, 8, ["pack"])) : Y("", !0)
    ]));
  }
}), cm = { class: "rlzc-ledger" }, Am = { class: "rlzc-card rlzc-ledger-hero-card" }, um = { class: "rlzc-ledger-hero-cols" }, dm = { class: "rlzc-ledger-hero-col" }, fm = { class: "rlzc-ledger-hero-col-val" }, pm = { class: "rlzc-ledger-hero-col" }, hm = { class: "rlzc-ledger-hero-col-val" }, mm = { class: "rlzc-ledger-hero-col" }, gm = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, xm = { class: "rlzc-card" }, ym = {
  key: 0,
  class: "rlzc-ledger-list"
}, vm = { class: "rlzc-ledger-item-left" }, bm = { class: "rlzc-ledger-item-src" }, wm = { class: "rlzc-ledger-item-time" }, km = {
  key: 1,
  class: "rlzc-hint"
}, _m = /* @__PURE__ */ Oe({
  __name: "LedgerTab",
  setup(e) {
    const t = H(() => J()), n = H(() => Kt(t.value)), s = H(() => f.ledger), i = H(() => sn(n.value.value, s.value)), r = H(() => f.pack?.level ?? "D"), l = H(() => Gt[r.value]), o = H(() => Fn(n.value.value, s.value, l.value)), a = H(() => Math.max(0, l.value - i.value)), c = H(() => n.value.source === "默认值");
    function A(g) {
      return new Intl.NumberFormat("zh-CN").format(g);
    }
    function d(g) {
      return (g >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(g);
    }
    function h(g) {
      try {
        const v = new Date(g), k = String(v.getMonth() + 1).padStart(2, "0"), V = String(v.getDate()).padStart(2, "0"), U = String(v.getHours()).padStart(2, "0"), T = String(v.getMinutes()).padStart(2, "0");
        return `${k}-${V} ${U}:${T}`;
      } catch {
        return g;
      }
    }
    return (g, v) => (z(), S("div", cm, [
      u("div", Am, [
        v[3] || (v[3] = u("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        u("b", {
          class: ne(["rlzc-ledger-hero-num", { negative: i.value < 0 }])
        }, P(A(i.value)), 3),
        v[4] || (v[4] = u("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        u("div", um, [
          u("div", dm, [
            v[0] || (v[0] = u("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            u("span", fm, P(r.value), 1)
          ]),
          u("div", pm, [
            v[1] || (v[1] = u("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            u("span", hm, P(A(l.value)), 1)
          ]),
          u("div", mm, [
            v[2] || (v[2] = u("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            u("span", {
              class: ne(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": o.value }])
            }, P(o.value ? `距线 ${A(a.value)}` : "无"), 3)
          ])
        ]),
        c.value ? (z(), S("p", gm, "初始积分按 1000 计，可在设置页修改")) : Y("", !0)
      ]),
      u("div", xm, [
        v[5] || (v[5] = u("h4", null, "流水", -1)),
        s.value.length ? (z(), S("ul", ym, [
          (z(!0), S(Q, null, me([...s.value].reverse(), (k) => (z(), S("li", {
            key: `${k.mesIndex}-${k.delta}-${k.at}`,
            class: "rlzc-ledger-item"
          }, [
            u("div", vm, [
              u("span", bm, P(k.source), 1),
              u("span", wm, P(h(k.at)), 1)
            ]),
            u("span", {
              class: ne(["rlzc-ledger-item-delta", k.delta >= 0 ? "pos" : "neg"])
            }, P(d(k.delta)), 3)
          ]))), 128))
        ])) : (z(), S("p", km, "还没有收支记录。"))
      ])
    ]));
  }
}), zm = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, $m = ["aria-expanded"], Sm = ["data-kind"], Em = {
  key: 0,
  class: "rlzc-collapse-body"
}, Cm = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, Mm = {
  key: 0,
  class: "rlzc-preset-area"
}, Im = { class: "rlzc-preset-row" }, Tm = ["value"], Pm = {
  key: 0,
  value: ""
}, Nm = ["value"], Rm = ["disabled"], Fm = ["disabled"], Om = { class: "rlzc-stacked-field" }, jm = ["value"], Lm = { class: "rlzc-stacked-field" }, Dm = { class: "rlzc-key-wrap" }, Bm = ["type", "value"], Vm = ["aria-label"], Um = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Wm = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Hm = { class: "rlzc-stacked-field" }, Gm = ["value"], Ym = ["value"], Km = ["value"], Zm = ["value"], Jm = { class: "rlzc-conn-row" }, qm = ["data-kind"], Qm = ["disabled"], Xm = {
  key: 1,
  class: "rlzc-option-list"
}, eg = { class: "rlzc-option-row" }, tg = ["aria-checked"], ng = { class: "rlzc-option-row" }, sg = ["aria-checked"], ig = { class: "rlzc-option-row rlzc-option-row-timeout" }, rg = { class: "rlzc-timeout-wrap" }, og = ["value"], lg = /* @__PURE__ */ Oe({
  __name: "SubApiCard",
  setup(e) {
    const t = H(() => f.settings.subApi), n = H(() => t.value.presets.find((L) => L.id === t.value.presetId) ?? null), s = /* @__PURE__ */ he([]), i = /* @__PURE__ */ he(!1), r = /* @__PURE__ */ he(!1), l = /* @__PURE__ */ he("none"), o = /* @__PURE__ */ he(""), a = H(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : l.value === "ok" ? { kind: "on", text: "已连接" } : l.value === "fail" ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" }), c = H(() => f.settings.cardCollapsed.subApi);
    function A() {
      f.settings.cardCollapsed.subApi = !f.settings.cardCollapsed.subApi, h();
    }
    const d = H(() => l.value === "ok" ? `已连接 · 共 ${s.value.length} 个模型` : l.value === "fail" ? `连接失败：${o.value}` : "未测试");
    function h() {
      de();
    }
    function g(L) {
      t.value.source = L, l.value = "none", h();
    }
    function v() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function k() {
      const L = (await Tr("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!L) return;
      const E = { id: v(), name: L, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, E], t.value.presetId = E.id, s.value = [], l.value = "none", h();
    }
    async function V() {
      if (!n.value) return;
      const L = (await Tr("改名为：", n.value.name))?.trim();
      L && (n.value.name = L, h());
    }
    async function U() {
      n.value && await zt(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((L) => L.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", s.value = [], l.value = "none", h());
    }
    function T(L) {
      t.value.presetId = L.target.value, s.value = [], l.value = "none", h();
    }
    function y(L, E) {
      n.value && (n.value[L] = E.target.value.trim(), h());
    }
    async function x() {
      if (n.value) {
        r.value = !0, l.value = "none", o.value = "";
        try {
          const L = await Yf(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          s.value = L.models, !n.value.model && L.models.length && (n.value.model = L.models[0], h()), l.value = "ok";
        } catch (L) {
          l.value = "fail", o.value = Ri(L), s.value = await Tl(n.value).catch(() => []);
        } finally {
          r.value = !1;
        }
      }
    }
    function _(L) {
      const E = Math.floor(Number(L.target.value));
      if (!Number.isFinite(E) || E < 5) {
        Te("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = E, h();
    }
    function j(L, E) {
      t.value[L] = E, h();
    }
    return (L, E) => (z(), S("div", zm, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !c.value,
        onClick: A
      }, [
        E[9] || (E[9] = u("h4", null, "副本事件检测", -1)),
        u("span", {
          class: "rlzc-dot",
          "data-kind": a.value.kind
        }, P(a.value.text), 9, Sm),
        u("span", {
          class: ne(["rlzc-collapse-arrow", { open: !c.value }])
        }, "▸", 2)
      ], 8, $m),
      c.value ? Y("", !0) : (z(), S("div", Em, [
        E[24] || (E[24] = u("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        u("div", Cm, [
          u("button", {
            class: ne({ on: t.value.source === "off" }),
            onClick: E[0] || (E[0] = (b) => g("off"))
          }, "关闭", 2),
          u("button", {
            class: ne({ on: t.value.source === "main" }),
            onClick: E[1] || (E[1] = (b) => g("main"))
          }, "跟随主API", 2),
          u("button", {
            class: ne({ on: t.value.source === "preset" }),
            onClick: E[2] || (E[2] = (b) => g("preset"))
          }, "自设API", 2)
        ]),
        t.value.source === "preset" ? (z(), S("div", Mm, [
          u("div", Im, [
            u("select", {
              class: "rlzc-input",
              value: t.value.presetId,
              onChange: T
            }, [
              t.value.presets.length ? Y("", !0) : (z(), S("option", Pm, "还没有保存的接口")),
              (z(!0), S(Q, null, me(t.value.presets, (b) => (z(), S("option", {
                key: b.id,
                value: b.id
              }, P(b.name), 9, Nm))), 128))
            ], 40, Tm),
            u("button", {
              class: "rlzc-icon-btn",
              "aria-label": "新建接口",
              type: "button",
              onClick: k
            }, [...E[10] || (E[10] = [
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
              onClick: V
            }, [...E[11] || (E[11] = [
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
            ])], 8, Rm),
            u("button", {
              class: "rlzc-icon-btn rlzc-danger",
              "aria-label": "删除接口",
              type: "button",
              disabled: !n.value,
              onClick: U
            }, [...E[12] || (E[12] = [
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
            ])], 8, Fm)
          ]),
          n.value ? (z(), S(Q, { key: 0 }, [
            u("div", Om, [
              E[13] || (E[13] = u("label", { class: "rlzc-label" }, "地址", -1)),
              u("input", {
                class: "rlzc-input",
                value: n.value.url,
                placeholder: "https://…/v1",
                onChange: E[3] || (E[3] = (b) => y("url", b))
              }, null, 40, jm)
            ]),
            u("div", Lm, [
              E[16] || (E[16] = u("label", { class: "rlzc-label" }, "密钥", -1)),
              u("div", Dm, [
                u("input", {
                  class: "rlzc-input",
                  type: i.value ? "text" : "password",
                  value: n.value.key,
                  autocomplete: "off",
                  onChange: E[4] || (E[4] = (b) => y("key", b))
                }, null, 40, Bm),
                u("button", {
                  class: "rlzc-eye-btn",
                  type: "button",
                  "aria-label": i.value ? "隐藏密钥" : "显示密钥",
                  onClick: E[5] || (E[5] = (b) => i.value = !i.value)
                }, [
                  i.value ? (z(), S("svg", Um, [...E[14] || (E[14] = [
                    u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    u("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1),
                    u("path", { d: "M2 2l12 12" }, null, -1)
                  ])])) : (z(), S("svg", Wm, [...E[15] || (E[15] = [
                    u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    u("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1)
                  ])]))
                ], 8, Vm)
              ])
            ]),
            u("div", Hm, [
              E[17] || (E[17] = u("label", { class: "rlzc-label" }, "模型", -1)),
              s.value.length ? (z(), S("select", {
                key: 0,
                class: "rlzc-input",
                value: n.value.model,
                onChange: E[6] || (E[6] = (b) => y("model", b))
              }, [
                s.value.includes(n.value.model) ? Y("", !0) : (z(), S("option", {
                  key: 0,
                  value: n.value.model
                }, P(n.value.model || "请选择…"), 9, Ym)),
                (z(!0), S(Q, null, me(s.value, (b) => (z(), S("option", {
                  key: b,
                  value: b
                }, P(b), 9, Km))), 128))
              ], 40, Gm)) : (z(), S("input", {
                key: 1,
                class: "rlzc-input rlzc-input-disabled",
                value: n.value.model ? n.value.model : "先测试连接",
                readonly: "",
                tabindex: "-1"
              }, null, 8, Zm))
            ]),
            u("div", Jm, [
              u("span", {
                class: "rlzc-dot",
                "data-kind": l.value === "ok" ? "on" : l.value === "fail" ? "warn" : "off"
              }, P(d.value), 9, qm),
              u("button", {
                class: "rlzc-btn ghost",
                disabled: r.value || !n.value.url,
                onClick: x
              }, "测试连接", 8, Qm)
            ])
          ], 64)) : Y("", !0)
        ])) : Y("", !0),
        t.value.source !== "off" ? (z(), S("div", Xm, [
          u("div", eg, [
            E[19] || (E[19] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "省钱模式"),
              u("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: ne(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: E[7] || (E[7] = (b) => j("saveMode", !t.value.saveMode))
            }, [...E[18] || (E[18] = [
              u("span", null, null, -1)
            ])], 10, tg)
          ]),
          u("div", ng, [
            E[21] || (E[21] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "等检测完再写下一轮"),
              u("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: ne(["rlzc-toggle", { on: t.value.wait }]),
              onClick: E[8] || (E[8] = (b) => j("wait", !t.value.wait))
            }, [...E[20] || (E[20] = [
              u("span", null, null, -1)
            ])], 10, sg)
          ]),
          u("div", ig, [
            E[23] || (E[23] = u("span", null, "超时", -1)),
            u("div", rg, [
              u("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: _
              }, null, 40, og),
              E[22] || (E[22] = u("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : Y("", !0)
      ]))
    ]));
  }
}), ag = { class: "rlzc-card rlzc-collapsible rlzc-live-card" }, cg = ["aria-expanded"], Ag = {
  key: 0,
  class: "rlzc-dot",
  "data-kind": "on"
}, ug = {
  key: 0,
  class: "rlzc-collapse-body"
}, dg = { class: "rlzc-option-list" }, fg = { class: "rlzc-option-row rlzc-option-row-stack" }, pg = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "弹幕来源"
}, hg = ["disabled"], mg = {
  key: 0,
  class: "rlzc-hint"
}, gg = {
  key: 0,
  class: "rlzc-option-row"
}, xg = { class: "rlzc-timeout-wrap" }, yg = ["value"], vg = { class: "rlzc-option-row" }, bg = ["aria-checked"], wg = /* @__PURE__ */ Oe({
  __name: "LiveCard",
  setup(e) {
    const t = H(() => f.settings.live), n = H(() => f.settings.subApi.source !== "off"), s = H(() => n.value ? t.value.source : "local"), i = H(() => (f.tick, f.session, Yi(/* @__PURE__ */ new Set()).on)), r = H(() => f.settings.cardCollapsed.live);
    function l() {
      f.settings.cardCollapsed.live = !f.settings.cardCollapsed.live, de();
    }
    function o(A) {
      A === "ai" && !n.value || (t.value.source = A, de());
    }
    function a(A) {
      const d = Math.floor(Number(A.target.value));
      t.value.freq = Number.isFinite(d) ? Math.max(1, Math.min(10, d)) : 3, A.target.value = String(t.value.freq), de();
    }
    function c(A) {
      t.value.injectToAI = A, de();
    }
    return (A, d) => (z(), S("div", ag, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !r.value,
        onClick: l
      }, [
        d[3] || (d[3] = u("h4", null, "直播", -1)),
        i.value ? (z(), S("span", Ag, "直播中")) : Y("", !0),
        u("span", {
          class: ne(["rlzc-collapse-arrow", { open: !r.value }])
        }, "▸", 2)
      ], 8, cg),
      r.value ? Y("", !0) : (z(), S("div", ug, [
        d[10] || (d[10] = u("p", { class: "rlzc-hint" }, "开播后有观众弹幕和打赏，打赏计入积分。画面在状态栏的直播页。", -1)),
        u("div", dg, [
          u("div", fg, [
            d[4] || (d[4] = u("span", { class: "rlzc-option-label" }, [
              u("span", null, "弹幕来源")
            ], -1)),
            u("div", pg, [
              u("button", {
                class: ne({ on: s.value === "local" }),
                onClick: d[0] || (d[0] = (h) => o("local"))
              }, "本地", 2),
              u("button", {
                class: ne({ on: s.value === "ai" }),
                disabled: !n.value,
                onClick: d[1] || (d[1] = (h) => o("ai"))
              }, "本地+AI", 10, hg)
            ]),
            n.value ? Y("", !0) : (z(), S("small", mg, "需先在副本事件检测里选接口"))
          ]),
          s.value === "ai" ? (z(), S("div", gg, [
            d[7] || (d[7] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "生成频率"),
              u("small", null, "关键事件时另加一次")
            ], -1)),
            u("div", xg, [
              d[5] || (d[5] = u("span", { class: "rlzc-unit" }, "每", -1)),
              u("input", {
                type: "number",
                min: "1",
                max: "10",
                class: "rlzc-input rlzc-input-num",
                value: t.value.freq,
                onChange: a
              }, null, 40, yg),
              d[6] || (d[6] = u("span", { class: "rlzc-unit" }, "轮", -1))
            ])
          ])) : Y("", !0),
          u("div", vg, [
            d[9] || (d[9] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "弹幕传给AI"),
              u("small", null, "主AI能看到最近弹幕")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.injectToAI ? "true" : "false",
              class: ne(["rlzc-toggle", { on: t.value.injectToAI }]),
              onClick: d[2] || (d[2] = (h) => c(!t.value.injectToAI))
            }, [...d[8] || (d[8] = [
              u("span", null, null, -1)
            ])], 10, bg)
          ])
        ])
      ]))
    ]));
  }
}), kg = { class: "rlzc-settings" }, _g = { class: "rlzc-card" }, zg = ["value"], $g = { class: "rlzc-card rlzc-collapsible" }, Sg = ["aria-expanded"], Eg = {
  key: 0,
  class: "rlzc-collapse-body"
}, Cg = { class: "rlzc-ledger-status" }, Mg = { class: "rlzc-row" }, Ig = ["placeholder"], Tg = ["disabled"], Pg = { class: "rlzc-row" }, Ng = ["disabled"], Rg = { class: "rlzc-row" }, Fg = { class: "rlzc-seg-group" }, Og = ["onClick"], jg = ["disabled"], Lg = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, Dg = { class: "rlzc-card rlzc-collapsible" }, Bg = ["aria-expanded"], Vg = {
  key: 0,
  class: "rlzc-collapse-body"
}, Ug = { class: "rlzc-depth" }, Wg = { class: "rlzc-field" }, Hg = ["value"], Gg = { class: "rlzc-field" }, Yg = ["value"], Kg = { class: "rlzc-field" }, Zg = ["value"], Jg = { class: "rlzc-field" }, qg = ["value"], Qg = { class: "rlzc-field" }, Xg = ["value"], ex = { class: "rlzc-card rlzc-collapsible" }, tx = ["aria-expanded"], nx = {
  key: 0,
  class: "rlzc-collapse-body"
}, sx = ["value", "onChange"], ix = { class: "rlzc-card" }, rx = {
  key: 0,
  class: "rlzc-list"
}, ox = ["onClick"], lx = {
  key: 1,
  class: "rlzc-hint"
}, ax = {
  key: 2,
  class: "rlzc-errors"
}, cx = { class: "rlzc-card" }, Ax = { class: "rlzc-check" }, ux = ["checked"], dx = { class: "rlzc-check" }, fx = ["checked"], px = /* @__PURE__ */ Oe({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ he([]), n = /* @__PURE__ */ he(null), s = /* @__PURE__ */ he(null), i = /* @__PURE__ */ he(null), r = /* @__PURE__ */ he(""), l = /* @__PURE__ */ he(""), o = /* @__PURE__ */ he(""), a = ["D", "C", "B", "A", "S"], c = H(() => Kt(J())), A = H(() => sn(c.value.value, f.ledger)), d = H(() => f.pack?.level ?? "D"), h = H(() => Gt[d.value]), g = H(() => Fn(c.value.value, f.ledger, h.value));
    function v() {
      s.value !== null && (Kp(s.value), s.value = null);
    }
    function k() {
      i.value !== null && (Yp(i.value, r.value || "手动"), i.value = null, r.value = "");
    }
    function V() {
      !l.value && !o.value || (Zp(l.value || void 0, o.value || void 0), l.value = "", o.value = "", Te("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function U(E, b) {
      const B = Math.max(0, Math.min(1e4, Math.floor(Number(b.target.value) || 0)));
      f.settings.depths[E] = B, de();
    }
    async function T(E) {
      const b = E.target, B = b.files?.[0];
      b.value = "", B && (t.value = Up(await B.text()), t.value.length || Te("success", `已导入副本包：${B.name}`));
    }
    async function y(E, b) {
      await zt(`确定删除自定义副本包《${b}》吗？`) && Wp(E);
    }
    function x(E, b) {
      const B = Math.floor(Number(b.target.value));
      !Number.isFinite(B) || B < 1 || (f.settings.genericCaps = { ...f.settings.genericCaps, [E]: B }, de());
    }
    function _(E) {
      dh(E.target.value);
    }
    function j(E, b) {
      f.settings[E] = b.target.checked, de();
    }
    function L(E) {
      f.settings.cardCollapsed[E] = !f.settings.cardCollapsed[E], de();
    }
    return (E, b) => (z(), S(Q, null, [
      u("div", kg, [
        u("div", _g, [
          b[16] || (b[16] = u("h4", null, "副本信息显示位置", -1)),
          u("select", {
            class: "rlzc-input",
            value: O(f).settings.panelDisplay,
            onChange: _
          }, [...b[15] || (b[15] = [
            u("option", { value: "panel" }, "扩展面板（默认）", -1),
            u("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, zg),
          b[17] || (b[17] = u("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        u("div", $g, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !O(f).settings.cardCollapsed.accountFix,
            onClick: b[0] || (b[0] = (B) => L("accountFix"))
          }, [
            b[18] || (b[18] = u("h4", null, "账户校正", -1)),
            u("span", {
              class: ne(["rlzc-collapse-arrow", { open: !O(f).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, Sg),
          O(f).settings.cardCollapsed.accountFix ? Y("", !0) : (z(), S("div", Eg, [
            b[20] || (b[20] = u("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            u("div", Cg, [
              u("span", null, [
                b[19] || (b[19] = Pe("当前余额：", -1)),
                u("b", null, P(A.value), 1)
              ]),
              u("span", null, P(g.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            b[21] || (b[21] = u("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            u("div", Mg, [
              ht(u("input", {
                "onUpdate:modelValue": b[1] || (b[1] = (B) => s.value = B),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${c.value.value}`
              }, null, 8, Ig), [
                [
                  qt,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: v
              }, "保存", 8, Tg)
            ]),
            b[22] || (b[22] = u("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            u("div", Pg, [
              ht(u("input", {
                "onUpdate:modelValue": b[2] || (b[2] = (B) => i.value = B),
                type: "number",
                class: "rlzc-input",
                placeholder: "金额（正/负）"
              }, null, 512), [
                [
                  qt,
                  i.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              ht(u("input", {
                "onUpdate:modelValue": b[3] || (b[3] = (B) => r.value = B),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [qt, r.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: i.value === null,
                onClick: k
              }, "追加", 8, Ng)
            ]),
            b[23] || (b[23] = u("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            b[24] || (b[24] = u("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            u("div", Rg, [
              u("div", Fg, [
                (z(), S(Q, null, me(a, (B) => u("button", {
                  key: B,
                  class: ne(["rlzc-seg", { active: l.value === B }]),
                  onClick: (ke) => l.value = l.value === B ? "" : B
                }, P(B), 11, Og)), 64))
              ]),
              ht(u("input", {
                "onUpdate:modelValue": b[4] || (b[4] = (B) => o.value = B),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [qt, o.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: !l.value && !o.value,
                onClick: V
              }, "校正", 8, jg)
            ]),
            O(f).ledger.length === 0 && c.value.source === "默认值" ? (z(), S("p", Lg, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : Y("", !0)
          ]))
        ]),
        u("div", Dg, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !O(f).settings.cardCollapsed.depths,
            onClick: b[5] || (b[5] = (B) => L("depths"))
          }, [
            b[25] || (b[25] = u("h4", null, "注入深度", -1)),
            u("span", {
              class: ne(["rlzc-collapse-arrow", { open: !O(f).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, Bg),
          O(f).settings.cardCollapsed.depths ? Y("", !0) : (z(), S("div", Vg, [
            b[31] || (b[31] = u("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            u("div", Ug, [
              u("label", Wg, [
                b[26] || (b[26] = u("span", null, [
                  Pe("副本暗号"),
                  u("small", null, "触发世界书的副本条目")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: O(f).settings.depths.token,
                  onChange: b[6] || (b[6] = (B) => U("token", B))
                }, null, 40, Hg)
              ]),
              u("label", Gg, [
                b[27] || (b[27] = u("span", null, [
                  Pe("副本进度"),
                  u("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: O(f).settings.depths.progress,
                  onChange: b[7] || (b[7] = (B) => U("progress", B))
                }, null, 40, Yg)
              ]),
              u("label", Kg, [
                b[28] || (b[28] = u("span", null, [
                  Pe("本轮指令"),
                  u("small", null, "本轮事件与时限写法")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: O(f).settings.depths.turn,
                  onChange: b[8] || (b[8] = (B) => U("turn", B))
                }, null, 40, Zg)
              ]),
              u("label", Jg, [
                b[29] || (b[29] = u("span", null, [
                  Pe("账户"),
                  u("small", null, "积分余额与清算状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: O(f).settings.depths.ledger,
                  onChange: b[9] || (b[9] = (B) => U("ledger", B))
                }, null, 40, qg)
              ]),
              u("label", Qg, [
                b[30] || (b[30] = u("span", null, [
                  Pe("直播"),
                  u("small", null, "在看人数与最近弹幕")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: O(f).settings.depths.live,
                  onChange: b[10] || (b[10] = (B) => U("live", B))
                }, null, 40, Xg)
              ])
            ])
          ]))
        ]),
        $e(lg),
        $e(wg),
        u("div", ex, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !O(f).settings.cardCollapsed.genericCaps,
            onClick: b[11] || (b[11] = (B) => L("genericCaps"))
          }, [
            b[32] || (b[32] = u("h4", null, "通用副本默认轮数上限", -1)),
            u("span", {
              class: ne(["rlzc-collapse-arrow", { open: !O(f).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, tx),
          O(f).settings.cardCollapsed.genericCaps ? Y("", !0) : (z(), S("div", nx, [
            b[33] || (b[33] = u("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (z(), S(Q, null, me(a, (B) => u("label", {
              key: B,
              class: "rlzc-field"
            }, [
              u("span", null, P(B) + " 级", 1),
              u("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: O(f).settings.genericCaps[B],
                onChange: (ke) => x(B, ke)
              }, null, 40, sx)
            ])), 64))
          ]))
        ]),
        u("div", ix, [
          b[34] || (b[34] = u("h4", null, "自定义副本包", -1)),
          O(f).settings.customPacks.length ? (z(), S("ul", rx, [
            (z(!0), S(Q, null, me(O(f).settings.customPacks, (B) => (z(), S("li", {
              key: B.id
            }, [
              u("span", null, [
                Pe(P(B.level) + "｜" + P(B.name) + " ", 1),
                u("small", null, "v" + P(B.version), 1)
              ]),
              u("button", {
                class: "rlzc-btn ghost small",
                onClick: (ke) => y(B.id, B.name)
              }, "删除", 8, ox)
            ]))), 128))
          ])) : (z(), S("p", lx, "还没有导入自定义副本包。")),
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
            onClick: b[12] || (b[12] = (B) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (z(), S("ul", ax, [
            (z(!0), S(Q, null, me(t.value, (B, ke) => (z(), S("li", { key: ke }, P(B), 1))), 128))
          ])) : Y("", !0)
        ]),
        u("div", cx, [
          b[37] || (b[37] = u("h4", null, "其他", -1)),
          u("label", Ax, [
            u("input", {
              type: "checkbox",
              checked: O(f).settings.showBall,
              onChange: b[13] || (b[13] = (B) => j("showBall", B))
            }, null, 40, ux),
            b[35] || (b[35] = Pe("显示悬浮球", -1))
          ]),
          u("label", dx, [
            u("input", {
              type: "checkbox",
              checked: O(f).settings.debug,
              onChange: b[14] || (b[14] = (B) => j("debug", B))
            }, null, 40, fx),
            b[36] || (b[36] = Pe("调试模式", -1))
          ])
        ])
      ]),
      b[38] || (b[38] = u("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), hx = { class: "rlzc-debug" }, mx = {
  key: 0,
  class: "rlzc-note"
}, gx = {
  key: 0,
  class: "rlzc-note"
}, xx = {
  key: 1,
  class: "rlzc-note"
}, yx = {
  key: 2,
  class: "rlzc-card"
}, vx = { class: "rlzc-row" }, bx = ["disabled"], wx = ["value"], kx = ["disabled"], _x = { class: "rlzc-row" }, zx = ["disabled"], $x = ["disabled"], Sx = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, Ex = ["aria-expanded"], Cx = {
  key: 0,
  class: "rlzc-collapse-body"
}, Mx = ["onUpdate:modelValue", "disabled"], Ix = ["disabled"], Tx = { class: "rlzc-card" }, Px = {
  key: 0,
  class: "rlzc-hint"
}, Nx = { class: "rlzc-hint" }, Rx = { class: "rlzc-list rlzc-warns" }, Fx = { class: "rlzc-card" }, Ox = {
  key: 0,
  class: "rlzc-list"
}, jx = ["disabled", "onClick"], Lx = {
  key: 1,
  class: "rlzc-hint"
}, Dx = {
  key: 4,
  class: "rlzc-card"
}, Bx = { class: "rlzc-pre" }, Vx = {
  key: 0,
  class: "rlzc-pre"
}, Ux = {
  class: "rlzc-card",
  open: ""
}, Wx = { class: "rlzc-pre" }, Hx = { class: "rlzc-card" }, Gx = { class: "rlzc-pre" }, Yx = { class: "rlzc-card" }, Kx = { class: "rlzc-pre" }, Zx = { class: "rlzc-card" }, Jx = { class: "rlzc-table" }, qx = {
  key: 0,
  class: "rlzc-warn-text"
}, Qx = { key: 1 }, Xx = ["disabled"], ey = {
  key: 2,
  class: "rlzc-card"
}, ty = { class: "rlzc-table" }, ny = /* @__PURE__ */ Oe({
  __name: "DebugTab",
  setup(e) {
    const t = H(() => f.settings.debug), n = /* @__PURE__ */ he(""), s = /* @__PURE__ */ he(null), i = /* @__PURE__ */ ws({});
    _s(
      () => [f.tick, f.pack?.id],
      () => {
        for (const x of Object.keys(i)) delete i[x];
        const y = Kl() ?? {};
        for (const x of f.pack?.roles ?? []) i[x] = y[x] ?? "";
      },
      { immediate: !0 }
    );
    const r = H(() => {
      f.tick;
      const y = J(), x = [], _ = f.session?.entryIndex ?? 0;
      for (let j = _; j < y.length; j++) {
        const L = y[j]?.extra?.rlzc;
        L && x.push({ index: j, snap: L });
      }
      return x.reverse().slice(0, 60);
    }), l = H(() => {
      const y = new Set((f.audit?.warnings ?? []).filter((j) => j.kind === "limit" || j.kind === "eventMissed").map((j) => j.index)), x = J(), _ = f.session?.entryIndex ?? 0;
      for (let j = _; j < x.length; j++)
        x[j]?.extra?.rlzc?.ledgerMismatch && y.add(j);
      return y;
    }), o = H(() => {
      if (f.tick, !f.session || !f.pack || !f.progress) return null;
      const y = J(), x = Ms(y, f.progress.entryIndex);
      let _ = null;
      for (let j = y.length - 1; j >= f.progress.entryIndex; j--) {
        const L = y[j]?.extra?.rlzc?.sub;
        if (L) {
          _ = L;
          break;
        }
      }
      return {
        text: x ? _l(f.pack, x.state) : "",
        state: x?.state ?? null,
        record: _
      };
    }), a = H(() => {
      f.tick;
      const y = J(), x = [];
      for (let _ = y.length - 1; _ >= 0 && x.length < 60; _--) {
        const j = Yt(y[_]);
        j && x.push({ index: _, rec: j });
      }
      return x;
    });
    function c(y) {
      const x = y.feed.filter((_) => _.t === "tip").map((_) => `${_.name} ${_.amount}→${_.net}`);
      return y.revoke && x.push(`撤回 −${y.revoke}`), x.join("；");
    }
    function A(y) {
      const x = y.ai;
      return x ? x.pending ? "生成中…" : x.ok ? `${x.count}条（${x.ms}ms）` : `失败：${x.error ?? ""}` : "";
    }
    const d = { done: "✓", missed: "✗", void: "–" };
    function h(y) {
      if (!y.sub && !y.skippedEvents?.length) return "";
      const x = [];
      y.sub?.skipped && x.push(`未更新（${y.sub.error ?? ""}）`);
      for (const _ of y.sub?.events ?? []) x.push(`${_.id}${d[_.status]}`);
      for (const _ of y.skippedEvents ?? []) x.push(`跳过${_.id}`);
      return y.sub && !y.sub.skipped && !x.length && x.push("已整理"), x.join(" ");
    }
    const g = H(() => {
      const y = f.progress;
      if (!y) return null;
      const { perMessage: x, phase: _, next: j, ...L } = y;
      return {
        phase: _.id + " " + _.name,
        ...L,
        next: j ? { round: j.round, skipFrom: j.skipFrom, events: j.events.map((E) => E.id) } : null,
        messages: Object.keys(x).length
      };
    });
    function v() {
      n.value && nh(n.value);
    }
    function k() {
      s.value !== null && s.value >= 0 && sh(s.value);
    }
    function V() {
      ih({ ...i });
    }
    const U = (y) => JSON.stringify(y, null, 2);
    function T(y) {
      f.settings.cardCollapsed[y] = !f.settings.cardCollapsed[y], de();
    }
    return (y, x) => (z(), S("div", hx, [
      O(f).session ? (z(), S(Q, { key: 1 }, [
        t.value ? Y("", !0) : (z(), S("p", gx, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        O(f).pack && O(f).session.packVersion !== O(f).pack.version ? (z(), S("p", xx, " 入场时副本包版本为 " + P(O(f).session.packVersion) + "，当前为 " + P(O(f).pack.version) + "。 ", 1)) : Y("", !0),
        O(f).pack?.phases.length ? (z(), S("div", yx, [
          x[5] || (x[5] = u("h4", null, "手动修正", -1)),
          u("div", vx, [
            ht(u("select", {
              "onUpdate:modelValue": x[0] || (x[0] = (_) => n.value = _),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              x[4] || (x[4] = u("option", { value: "" }, "切换到阶段…", -1)),
              (z(!0), S(Q, null, me(O(f).pack.phases, (_) => (z(), S("option", {
                key: _.id,
                value: _.id
              }, P(_.name), 9, wx))), 128))
            ], 8, bx), [
              [Jo, n.value]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: v
            }, "切换", 8, kx)
          ]),
          u("div", _x, [
            ht(u("input", {
              "onUpdate:modelValue": x[1] || (x[1] = (_) => s.value = _),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, zx), [
              [
                qt,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: k
            }, "修正轮次", 8, $x)
          ])
        ])) : Y("", !0),
        O(f).pack?.roles?.length ? (z(), S("div", Sx, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !O(f).settings.cardCollapsed.rolesDebug,
            onClick: x[2] || (x[2] = (_) => T("rolesDebug"))
          }, [
            x[6] || (x[6] = u("h4", null, "角色登记", -1)),
            u("span", {
              class: ne(["rlzc-collapse-arrow", { open: !O(f).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, Ex),
          O(f).settings.cardCollapsed.rolesDebug ? Y("", !0) : (z(), S("div", Cx, [
            (z(!0), S(Q, null, me(O(f).pack.roles, (_) => (z(), S("label", {
              key: _,
              class: "rlzc-field"
            }, [
              u("span", null, P(_), 1),
              ht(u("input", {
                "onUpdate:modelValue": (j) => i[_] = j,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, Mx), [
                [qt, i[_]]
              ])
            ]))), 128)),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: V
            }, "保存登记", 8, Ix)
          ]))
        ])) : Y("", !0),
        u("div", Tx, [
          x[8] || (x[8] = u("h4", null, "<副本> 核对", -1)),
          O(f).audit?.warnings.length ? (z(), S(Q, { key: 1 }, [
            u("p", Nx, "共 " + P(O(f).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            u("ul", Rx, [
              (z(!0), S(Q, null, me(O(f).audit.warnings.slice(-30).reverse(), (_, j) => (z(), S("li", { key: j }, [
                u("span", null, [
                  u("small", null, "#" + P(_.index) + "｜" + P(_.phase) + "第" + P(_.round) + "轮", 1),
                  x[7] || (x[7] = u("br", null, null, -1)),
                  Pe("⚠️ " + P(_.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (z(), S("p", Px, "没有发现问题。"))
        ]),
        u("div", Fx, [
          x[9] || (x[9] = u("h4", null, "手动操作记录", -1)),
          O(f).session.manual.length ? (z(), S("ul", Ox, [
            (z(!0), S(Q, null, me(O(f).session.manual, (_, j) => (z(), S("li", { key: j }, [
              u("code", null, "#" + P(_.atIndex) + " " + P(_.kind) + " " + P("phase" in _ ? _.phase : "") + P("round" in _ ? _.round : "") + P("targetPhase" in _ ? `${_.targetPhase}:${_.targetRound}` : ""), 1),
              u("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (L) => O(rh)(j)
              }, "撤销", 8, jx)
            ]))), 128))
          ])) : (z(), S("p", Lx, "无"))
        ]),
        o.value && (o.value.state || o.value.record) ? (z(), S("details", Dx, [
          x[10] || (x[10] = u("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          u("pre", Bx, P(o.value.text || "（尚无状态）"), 1),
          o.value.record ? (z(), S("pre", Vx, P(U(o.value.record)), 1)) : Y("", !0),
          x[11] || (x[11] = u("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : Y("", !0),
        u("details", Ux, [
          x[12] || (x[12] = u("summary", null, "本次注入", -1)),
          u("pre", Wx, P([O(f).lastInjection.token, O(f).lastInjection.progress, O(f).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        u("details", Hx, [
          x[13] || (x[13] = u("summary", null, "重放结果", -1)),
          u("pre", Gx, P(U(g.value)), 1)
        ]),
        u("details", Yx, [
          x[14] || (x[14] = u("summary", null, "会话原始数据", -1)),
          u("pre", Kx, P(U(O(f).session)), 1)
        ]),
        u("details", Zx, [
          x[16] || (x[16] = u("summary", null, "每楼快照（最近60条）", -1)),
          u("table", Jx, [
            x[15] || (x[15] = u("thead", null, [
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
              (z(!0), S(Q, null, me(r.value, (_) => (z(), S("tr", {
                key: _.index,
                class: ne({ "rlzc-row-warn": l.value.has(_.index) })
              }, [
                u("td", null, P(_.index) + P(_.snap.entry ? "★" : ""), 1),
                u("td", null, P(_.snap.phase), 1),
                u("td", null, P(_.snap.round), 1),
                u("td", null, P(_.snap.clock ?? ""), 1),
                u("td", null, P(_.snap.limit?.text ?? ""), 1),
                u("td", null, P(_.snap.injected.join(" ")), 1),
                u("td", null, P(h(_.snap)), 1),
                _.snap.ledgerMismatch ? (z(), S("td", qx, "状态栏 " + P(_.snap.ledgerMismatch.status) + " / 账本 " + P(_.snap.ledgerMismatch.ledger), 1)) : (z(), S("td", Qx))
              ], 2))), 128))
            ])
          ])
        ]),
        u("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: x[3] || (x[3] = //@ts-ignore
          (..._) => O(jr) && O(jr)(..._))
        }, "删除副本会话", 8, Xx)
      ], 64)) : (z(), S("p", mx, "当前聊天没有副本会话。")),
      a.value.length ? (z(), S("details", ey, [
        x[18] || (x[18] = u("summary", null, "直播（每楼，最近60条）", -1)),
        u("table", ty, [
          x[17] || (x[17] = u("thead", null, [
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
            (z(!0), S(Q, null, me(a.value, (_) => (z(), S("tr", {
              key: _.index,
              class: ne({ "rlzc-row-warn": _.rec.ai && !_.rec.ai.ok && !_.rec.ai.pending })
            }, [
              u("td", null, P(_.index) + P(_.rec.scope === "corridor" ? "·回廊" : ""), 1),
              u("td", null, P(_.rec.hype) + P(_.rec.hurt ? "·伤" : ""), 1),
              u("td", null, P(_.rec.heat), 1),
              u("td", null, P(_.rec.viewers), 1),
              u("td", null, P(c(_.rec)), 1),
              u("td", null, P(A(_.rec)), 1)
            ], 2))), 128))
          ])
        ])
      ])) : Y("", !0)
    ]));
  }
}), sy = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, iy = { class: "rlzc-head" }, ry = { class: "rlzc-tabs" }, oy = ["onClick"], ly = { class: "rlzc-body" }, ay = /* @__PURE__ */ Oe({
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
        if (!await zt("此页会显示副本真相，确定要打开吗？")) return;
        f.debugUnlocked = !0;
      }
      f.tab = s;
    }
    return (s, i) => (z(), S("div", {
      class: "rlzc-backdrop",
      onClick: i[1] || (i[1] = mA((r) => O(f).panelOpen = !1, ["self"]))
    }, [
      u("section", sy, [
        u("header", iy, [
          i[2] || (i[2] = u("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          u("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: i[0] || (i[0] = (r) => O(f).panelOpen = !1)
          }, "×")
        ]),
        u("nav", ry, [
          (z(), S(Q, null, me(t, (r) => u("button", {
            key: r.id,
            class: ne({ on: O(f).tab === r.id }),
            onClick: (l) => n(r.id)
          }, P(r.label), 11, oy)), 64))
        ]),
        u("div", ly, [
          O(f).tab === "system" ? (z(), st(am, { key: 0 })) : O(f).tab === "ledger" ? (z(), st(_m, { key: 1 })) : O(f).tab === "settings" ? (z(), st(px, { key: 2 })) : O(f).tab === "debug" && O(f).debugUnlocked ? (z(), st(ny, { key: 3 })) : Y("", !0)
        ])
      ])
    ]));
  }
}), cy = /* @__PURE__ */ Oe({
  __name: "App",
  setup(e) {
    return (t, n) => (z(), S(Q, null, [
      O(f).settings.showBall ? (z(), st(yh, { key: 0 })) : Y("", !0),
      O(f).panelOpen ? (z(), st(ay, { key: 1 })) : Y("", !0)
    ], 64));
  }
}), Ay = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field{align-items:flex-start}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-depth .rlzc-field>.rlzc-input{flex:0 0 72px;width:72px}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-conn-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout{justify-content:flex-start;gap:16px}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px}.rlzc-input-num{width:72px;text-align:right;font-variant-numeric:tabular-nums}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-toggle:after{content:"";position:absolute;inset:-10px 0}.rlzc-segsrc button:disabled{opacity:.4;cursor:not-allowed}.rlzc-segsrc button:disabled:hover{background:none;color:var(--muted)}.rlzc-live-card .rlzc-input-num{min-height:44px}.rlzc-option-row-stack{flex-direction:column;align-items:stretch;gap:0}.rlzc-option-row-stack .rlzc-segsrc{margin:6px 0 2px}.rlzc-option-row-stack .rlzc-hint{margin:2px 0 0}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-head .rlzc-dot{font-size:12px}';
function uy(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function sa(e, t, n) {
  const s = ce().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function dy() {
  const e = uy();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await sa("/api/extensions/version", e, t);
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
async function fy(e) {
  const t = await sa("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const Hr = "rlzc-host", Gr = "rlzc-menu-btn", Yr = "rlzc-settings-drawer";
function py() {
  if (document.getElementById(Hr)) return;
  const e = document.createElement("div");
  e.id = Hr, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Ay, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), yA(cy).mount(s), ia(), ra();
}
function ia(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => ia(e + 1), 500);
    return;
  }
  if (document.getElementById(Gr)) return;
  const n = document.createElement("div");
  n.id = Gr, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const i = document.createElement("span");
  i.textContent = "回廊种菜系统", n.append(s, i), n.addEventListener("click", () => {
    f.panelOpen = !f.panelOpen;
  }), t.appendChild(n);
}
function ra(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => ra(e + 1), 500);
    return;
  }
  if (document.getElementById(Yr)) return;
  const n = (j, L = "", E = "") => {
    const b = document.createElement(j);
    return L && (b.className = L), E && (b.textContent = E), b;
  }, s = n("div");
  s.id = Yr;
  const i = n("div", "inline-drawer"), r = n("div", "inline-drawer-toggle inline-drawer-header"), l = n("div", "flex-container alignitemscenter margin0"), o = n("small", "rlzc-update-badge", "有更新");
  o.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", l.append(n("b", "", "回廊种菜系统"), o), r.append(l, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const a = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => f.panelOpen = !0);
  const A = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  A.addEventListener("click", () => {
    f.settings.ball = { x: null, y: null }, f.settings.showBall = !0, de();
  });
  const d = n("label", "checkbox_label"), h = document.createElement("input");
  h.type = "checkbox", h.addEventListener("change", () => {
    f.settings.showBall = h.checked, de();
  }), d.append(h, n("span", "", "显示悬浮球")), _s(() => f.settings.showBall, (j) => h.checked = j, { immediate: !0 });
  const g = n("div", "flex-container");
  g.append(c, A);
  const v = n("div", "flex-container alignitemscenter"), k = n("small", "rlzc-update-status", "正在检查更新…"), V = n("div", "menu_button menu_button_icon", "检查更新"), U = n("div", "menu_button menu_button_icon", "立即更新"), T = n("div", "menu_button menu_button_icon", "刷新页面");
  U.style.display = "none", T.style.display = "none", v.append(k, V, U, T);
  let y = null, x = !1;
  const _ = async () => {
    if (!x) {
      x = !0, k.textContent = "正在检查更新…", U.style.display = "none";
      try {
        y = await dy();
        const j = y.commit ? `（${y.commit}）` : "";
        y.isGit ? y.isUpToDate ? k.textContent = `已是最新版本${j}` : (k.textContent = `有新版本可以更新，当前${j || "版本较旧"}`, U.style.display = "") : k.textContent = "不是用仓库地址安装的，无法检查更新。", o.style.display = y.isGit && !y.isUpToDate ? "" : "none";
      } catch (j) {
        k.textContent = `检查更新失败：${j.message}`;
      } finally {
        x = !1;
      }
    }
  };
  V.addEventListener("click", () => void _()), U.addEventListener("click", async () => {
    if (!(!y || x)) {
      x = !0, k.textContent = "正在更新…", U.style.display = "none";
      try {
        await fy(y), o.style.display = "none", k.textContent = "更新完成，刷新页面后生效。", T.style.display = "";
      } catch (j) {
        k.textContent = `更新失败：${j.message}`, U.style.display = "";
      } finally {
        x = !1;
      }
    }
  }), T.addEventListener("click", () => location.reload()), setTimeout(() => void _(), 3e3), a.append(g, d, v, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), i.append(r, a), s.append(i), t.append(s);
}
globalThis.rlzcInterceptor = Xp;
function ai() {
  Bp(), ft("MESSAGE_RECEIVED", (e, t) => uh(Number(e), t)), ft("CHARACTER_MESSAGE_RENDERED", (e) => ii(Number(e))), ft("MESSAGE_DELETED", () => si()), ft("MESSAGE_SWIPED", (e) => {
    eh(Number(e)), ii(Number(e));
  }), ft("MESSAGE_EDITED", () => si()), ft("MESSAGE_UPDATED", (e) => {
    si(), ii(Number(e));
  }), ft("CHAT_CHANGED", () => Vr()), ft("MORE_MESSAGES_LOADED", () => Gi()), py(), Dp({ view: Yi, toggle: gh }), Vr(), console.log("[rlzc] 回廊种菜系统已加载", f.settings);
}
const Kr = window.jQuery;
typeof Kr == "function" ? Kr(() => ai()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ai) : ai();
