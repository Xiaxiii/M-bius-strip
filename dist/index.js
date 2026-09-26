/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ii(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const le = {}, Rt = [], Lt = () => {
}, uo = () => !1, ws = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), _s = (e) => e.startsWith("onUpdate:"), Oe = Object.assign, fo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Pa = Object.prototype.hasOwnProperty, re = (e, t) => Pa.call(e, t), J = Array.isArray, yt = (e) => Dn(e) === "[object Map]", Vt = (e) => Dn(e) === "[object Set]", ur = (e) => Dn(e) === "[object Date]", se = (e) => typeof e == "function", ue = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", po = (e) => (ae(e) || se(e)) && se(e.then) && se(e.catch), ho = Object.prototype.toString, Dn = (e) => ho.call(e), Na = (e) => Dn(e).slice(8, -1), mo = (e) => Dn(e) === "[object Object]", Ti = (e) => ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, yn = /* @__PURE__ */ Ii(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ja = /-\w/g, Re = zs(
  (e) => e.replace(ja, (t) => t.slice(1).toUpperCase())
), Ra = /\B([A-Z])/g, Yt = zs(
  (e) => e.replace(Ra, "-$1").toLowerCase()
), go = zs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ys = zs(
  (e) => e ? `on${go(e)}` : ""
), Je = (e, t) => !Object.is(e, t), ss = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, xo = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, $s = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let dr;
const Ss = () => dr || (dr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Es(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = ue(s) ? Da(s) : Es(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ue(e) || ae(e))
    return e;
}
const Fa = /;(?![^(]*\))/g, Oa = /:([^]+)/, La = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Da(e) {
  const t = {};
  return e.replace(La, (n) => n.startsWith("/*") ? "" : n).split(Fa).forEach((n) => {
    if (n) {
      const s = n.split(Oa);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ne(e) {
  let t = "";
  if (ue(e))
    t = e;
  else if (J(e))
    for (let n = 0; n < e.length; n++) {
      const s = ne(e[n]);
      s && (t += s + " ");
    }
  else if (ae(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ba = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Va = /* @__PURE__ */ Ii(Ba);
function yo(e) {
  return !!e || e === "";
}
function Ua(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = kt(e[i], t[i], n);
  return s;
}
function fr(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const r of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!i[l] && kt(r, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    i[o] = 1;
  }
  return !0;
}
function Wa(e, t, n) {
  let s = yt(e), i = yt(t);
  if (s || i || (s = Vt(e), i = Vt(t), s || i))
    return s && i ? fr(e, t, n) : !1;
  const r = Object.keys(e).length, o = Object.keys(t).length;
  if (r !== o)
    return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
    if (a && !c || !a && c || !kt(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function pr(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, r] = n;
  if (i.has(e) || r.has(t))
    return i.get(e) === t && r.get(t) === e;
  i.set(e, t), r.set(t, e);
  const o = s(e, t, n);
  return i.delete(e), r.delete(t), o;
}
function kt(e, t, n) {
  if (e === t) return !0;
  let s = ur(e), i = ur(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = Ze(e), i = Ze(t), s || i ? e === t : (s = J(e), i = J(t), s || i ? s && i ? pr(e, t, n, Ua) : !1 : (s = ae(e), i = ae(t), s || i ? !s || !i ? !1 : pr(e, t, n, Wa) : String(e) === String(t))));
}
function Ha(e, t) {
  return e.findIndex((n) => kt(n, t));
}
const vo = (e) => !!(e && e.__v_isRef === !0), P = (e) => ue(e) ? e : e == null ? "" : J(e) || ae(e) && (e.toString === ho || !se(e.toString)) ? vo(e) ? P(e.value) : JSON.stringify(e, bo, 2) : String(e), bo = (e, t) => vo(t) ? bo(e, t.value) : yt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[Ks(s, r) + " =>"] = i, n),
    {}
  )
} : Vt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ks(n))
} : Ze(t) ? Ks(t) : ae(t) && !J(t) && !mo(t) ? String(t) : t, Ks = (e, t = "") => {
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
let pe;
class Ga {
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
function Ya() {
  return pe;
}
let oe;
const qs = /* @__PURE__ */ new WeakSet();
class ko {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pe && (pe.active ? pe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qs.has(this) && (qs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _o(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, hr(this), zo(this);
    const t = oe, n = Fe;
    oe = this, Fe = !0;
    try {
      return this.fn();
    } finally {
      $o(this), oe = t, Fe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ji(t);
      this.deps = this.depsTail = void 0, hr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    yi(this) && this.run();
  }
  get dirty() {
    return yi(this);
  }
}
let wo = 0, vn, bn;
function _o(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = bn, bn = e;
    return;
  }
  e.next = vn, vn = e;
}
function Pi() {
  wo++;
}
function Ni() {
  if (--wo > 0)
    return;
  if (bn) {
    let t = bn;
    for (bn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; vn; ) {
    let t = vn;
    for (vn = void 0; t; ) {
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
function zo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function $o(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), ji(s), Ka(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function yi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (So(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function So(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Cn) || (e.globalVersion = Cn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !yi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = oe, s = Fe;
  oe = e, Fe = !0;
  try {
    zo(e);
    const i = e.fn(e._value);
    (t.version === 0 || Je(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    oe = n, Fe = s, $o(e), e.flags &= -3;
  }
}
function ji(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      ji(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ka(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Fe = !0;
const Eo = [];
function wt() {
  Eo.push(Fe), Fe = !1;
}
function _t() {
  const e = Eo.pop();
  Fe = e === void 0 ? !0 : e;
}
function hr(e) {
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
let Cn = 0;
class qa {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ri {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!oe || !Fe || oe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== oe)
      n = this.activeLink = new qa(oe, this), oe.deps ? (n.prevDep = oe.depsTail, oe.depsTail.nextDep = n, oe.depsTail = n) : oe.deps = oe.depsTail = n, Co(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = oe.depsTail, n.nextDep = void 0, oe.depsTail.nextDep = n, oe.depsTail = n, oe.deps === n && (oe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Cn++, this.notify(t);
  }
  notify(t) {
    Pi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ni();
    }
  }
}
function Co(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Co(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const vi = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ Symbol(
  ""
), bi = /* @__PURE__ */ Symbol(
  ""
), Mn = /* @__PURE__ */ Symbol(
  ""
);
function ge(e, t, n) {
  if (Fe && oe) {
    let s = vi.get(e);
    s || vi.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Ri()), i.map = s, i.key = n), i.track();
  }
}
function ot(e, t, n, s, i, r) {
  const o = vi.get(e);
  if (!o) {
    Cn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Pi(), t === "clear")
    o.forEach(l);
  else {
    const a = J(e), c = a && Ti(n);
    if (a && n === "length") {
      const A = Number(s);
      o.forEach((d, h) => {
        (h === "length" || h === Mn || !Ze(h) && h >= A) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(Mn)), t) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(Dt)), yt(e) && l(o.get(bi)));
          break;
        case "delete":
          a || (l(o.get(Dt)), yt(e) && l(o.get(bi)));
          break;
        case "set":
          yt(e) && l(o.get(Dt));
          break;
      }
  }
  Ni();
}
function Qt(e) {
  const t = /* @__PURE__ */ ee(e);
  return t === e || (ge(t, "iterate", Mn), /* @__PURE__ */ Pe(e)) ? t : /* @__PURE__ */ Qe(e) ? /* @__PURE__ */ vt(e) ? t.map((n) => zt(Ne(n))) : t.map(zt) : t.map(Ne);
}
function Cs(e) {
  return ge(e = /* @__PURE__ */ ee(e), "iterate", Mn), e;
}
function Ke(e, t) {
  return /* @__PURE__ */ Qe(e) ? zt(/* @__PURE__ */ vt(e) ? Ne(t) : t) : Ne(t);
}
const Ja = {
  __proto__: null,
  [Symbol.iterator]() {
    return Js(this, Symbol.iterator, (e) => Ke(this, e));
  },
  concat(...e) {
    return Qt(this).concat(
      ...e.map((t) => J(t) ? Qt(t) : t)
    );
  },
  entries() {
    return Js(this, "entries", (e) => (e[1] = Ke(this, e[1]), e));
  },
  every(e, t) {
    return st(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return st(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ke(this, s)),
      arguments
    );
  },
  find(e, t) {
    return st(
      this,
      "find",
      e,
      t,
      (n) => Ke(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return st(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return st(
      this,
      "findLast",
      e,
      t,
      (n) => Ke(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return st(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return st(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zs(this, "includes", e);
  },
  indexOf(...e) {
    return Zs(this, "indexOf", e);
  },
  join(e) {
    return Qt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return st(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return pn(this, "pop");
  },
  push(...e) {
    return pn(this, "push", e);
  },
  reduce(e, ...t) {
    return mr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return mr(this, "reduceRight", e, t);
  },
  shift() {
    return pn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return st(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return pn(this, "splice", e);
  },
  toReversed() {
    return Qt(this).toReversed();
  },
  toSorted(e) {
    return Qt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Qt(this).toSpliced(...e);
  },
  unshift(...e) {
    return pn(this, "unshift", e);
  },
  values() {
    return Js(this, "values", (e) => Ke(this, e));
  }
};
function Js(e, t, n) {
  const s = Cs(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Pe(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const Za = Array.prototype;
function st(e, t, n, s, i, r) {
  const o = Cs(e), l = o !== e && !/* @__PURE__ */ Pe(e), a = o[t];
  if (a !== Za[t]) {
    const d = a.apply(e, r);
    return l ? Ne(d) : d;
  }
  let c = n;
  o !== e && (l ? c = function(d, h) {
    return n.call(this, Ke(e, d), h, e);
  } : n.length > 2 && (c = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const A = a.call(o, c, s);
  return l && i ? i(A) : A;
}
function mr(e, t, n, s) {
  const i = Cs(e), r = i !== e && !/* @__PURE__ */ Pe(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(c, A, d) {
    return l && (l = !1, c = Ke(e, c)), n.call(this, c, Ke(e, A), d, e);
  }) : n.length > 3 && (o = function(c, A, d) {
    return n.call(this, c, A, d, e);
  }));
  const a = i[t](o, ...s);
  return l ? Ke(e, a) : a;
}
function Zs(e, t, n) {
  const s = /* @__PURE__ */ ee(e);
  ge(s, "iterate", Mn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Li(n[0]) ? (n[0] = /* @__PURE__ */ ee(n[0]), s[t](...n)) : i;
}
function pn(e, t, n = []) {
  wt(), Pi();
  const s = (/* @__PURE__ */ ee(e))[t].apply(e, n);
  return Ni(), _t(), s;
}
const Qa = /* @__PURE__ */ Ii("__proto__,__v_isRef,__isVue"), Mo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
);
function Xa(e) {
  Ze(e) || (e = String(e));
  const t = /* @__PURE__ */ ee(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
class Io {
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
      return s === (i ? r ? cc : jo : r ? No : Po).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = J(t);
    if (!i) {
      let a;
      if (o && (a = Ja[n]))
        return a;
      if (n === "hasOwnProperty")
        return Xa;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ye(t) ? t : s
    );
    if ((Ze(n) ? Mo.has(n) : Qa(n)) || (i || ge(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ ye(l)) {
      const a = o && Ti(n) ? l : l.value;
      return i && ae(a) ? /* @__PURE__ */ wi(a) : a;
    }
    return ae(l) ? i ? /* @__PURE__ */ wi(l) : /* @__PURE__ */ Ms(l) : l;
  }
}
class To extends Io {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = J(t) && Ti(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Qe(r);
      if (!/* @__PURE__ */ Pe(s) && !/* @__PURE__ */ Qe(s) && (r = /* @__PURE__ */ ee(r), s = /* @__PURE__ */ ee(s)), !o && /* @__PURE__ */ ye(r) && !/* @__PURE__ */ ye(s))
        return c || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : re(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ye(t) ? t : i
    );
    return t === /* @__PURE__ */ ee(i) && a && (l ? Je(s, r) && ot(t, "set", n, s) : ot(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = re(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && ot(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ze(n) || !Mo.has(n)) && ge(t, "has", n), s;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      J(t) ? "length" : Dt
    ), Reflect.ownKeys(t);
  }
}
class ec extends Io {
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
const tc = /* @__PURE__ */ new To(), nc = /* @__PURE__ */ new ec(), sc = /* @__PURE__ */ new To(!0);
const ki = (e) => e, qn = (e) => Reflect.getPrototypeOf(e);
function ic(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ ee(i), o = yt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = i[e](...s), A = n ? ki : t ? zt : Ne;
    return !t && ge(
      r,
      "iterate",
      a ? bi : Dt
    ), Oe(
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
function Jn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function rc(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ee(r), l = /* @__PURE__ */ ee(i);
      e || (Je(i, l) && ge(o, "get", i), ge(o, "get", l));
      const { has: a } = qn(o), c = t ? ki : e ? zt : Ne;
      if (a.call(o, i))
        return c(r.get(i));
      if (a.call(o, l))
        return c(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ge(/* @__PURE__ */ ee(i), "iterate", Dt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ee(r), l = /* @__PURE__ */ ee(i);
      return e || (Je(i, l) && ge(o, "has", i), ge(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ ee(l), c = t ? ki : e ? zt : Ne;
      return !e && ge(a, "iterate", Dt), l.forEach((A, d) => i.call(r, c(A), c(d), o));
    }
  };
  return Oe(
    n,
    e ? {
      add: Jn("add"),
      set: Jn("set"),
      delete: Jn("delete"),
      clear: Jn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ ee(this), o = qn(r), l = /* @__PURE__ */ ee(i), a = !t && !/* @__PURE__ */ Pe(i) && !/* @__PURE__ */ Qe(i) ? l : i;
        return o.has.call(r, a) || Je(i, a) && o.has.call(r, i) || Je(l, a) && o.has.call(r, l) || (r.add(a), ot(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Pe(r) && !/* @__PURE__ */ Qe(r) && (r = /* @__PURE__ */ ee(r));
        const o = /* @__PURE__ */ ee(this), { has: l, get: a } = qn(o);
        let c = l.call(o, i);
        c || (i = /* @__PURE__ */ ee(i), c = l.call(o, i));
        const A = a.call(o, i);
        return o.set(i, r), c ? Je(r, A) && ot(o, "set", i, r) : ot(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ ee(this), { has: o, get: l } = qn(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ ee(i), a = o.call(r, i)), l && l.call(r, i);
        const c = r.delete(i);
        return a && ot(r, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ ee(this), r = i.size !== 0, o = i.clear();
        return r && ot(
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
    n[i] = ic(i, e, t);
  }), n;
}
function Fi(e, t) {
  const n = rc(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    re(n, i) && i in s ? n : s,
    i,
    r
  );
}
const oc = {
  get: /* @__PURE__ */ Fi(!1, !1)
}, lc = {
  get: /* @__PURE__ */ Fi(!1, !0)
}, ac = {
  get: /* @__PURE__ */ Fi(!0, !1)
};
const Po = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap(), cc = /* @__PURE__ */ new WeakMap();
function Ac(e) {
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
function Ms(e) {
  return /* @__PURE__ */ Qe(e) ? e : Oi(
    e,
    !1,
    tc,
    oc,
    Po
  );
}
// @__NO_SIDE_EFFECTS__
function uc(e) {
  return Oi(
    e,
    !1,
    sc,
    lc,
    No
  );
}
// @__NO_SIDE_EFFECTS__
function wi(e) {
  return Oi(
    e,
    !0,
    nc,
    ac,
    jo
  );
}
function Oi(e, t, n, s, i) {
  if (!ae(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = Ac(Na(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
  return /* @__PURE__ */ Qe(e) ? /* @__PURE__ */ vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Li(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ee(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ee(t) : e;
}
function dc(e) {
  return !re(e, "__v_skip") && Object.isExtensible(e) && xo(e, "__v_skip", !0), e;
}
const Ne = (e) => ae(e) ? /* @__PURE__ */ Ms(e) : e, zt = (e) => ae(e) ? /* @__PURE__ */ wi(e) : e;
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  return fc(e, !1);
}
function fc(e, t) {
  return /* @__PURE__ */ ye(e) ? e : new pc(e, t);
}
class pc {
  constructor(t, n) {
    this.dep = new Ri(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ee(t), this._value = n ? t : Ne(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Pe(t) || /* @__PURE__ */ Qe(t);
    t = s ? t : /* @__PURE__ */ ee(t), Je(t, n) && (this._rawValue = t, this._value = s ? t : Ne(t), this.dep.trigger());
  }
}
function F(e) {
  return /* @__PURE__ */ ye(e) ? e.value : e;
}
const hc = {
  get: (e, t, n) => t === "__v_raw" ? e : F(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ ye(i) && !/* @__PURE__ */ ye(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ro(e) {
  return /* @__PURE__ */ vt(e) ? e : new Proxy(e, hc);
}
class mc {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ri(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Cn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    oe !== this)
      return _o(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return So(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function gc(e, t, n = !1) {
  let s, i;
  return se(e) ? s = e : (s = e.get, i = e.set), new mc(s, i, n);
}
const Zn = {}, As = /* @__PURE__ */ new WeakMap();
let Pt;
function xc(e, t = !1, n = Pt) {
  if (n) {
    let s = As.get(n);
    s || As.set(n, s = []), s.push(e);
  }
}
function yc(e, t, n = le) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = n, c = (x) => i ? x : /* @__PURE__ */ Pe(x) || i === !1 || i === 0 ? lt(x, 1) : lt(x);
  let A, d, h, g, v = !1, w = !1;
  if (/* @__PURE__ */ ye(e) ? (d = () => e.value, v = /* @__PURE__ */ Pe(e)) : /* @__PURE__ */ vt(e) ? (d = () => c(e), v = !0) : J(e) ? (w = !0, v = e.some((x) => /* @__PURE__ */ vt(x) || /* @__PURE__ */ Pe(x)), d = () => e.map((x) => {
    if (/* @__PURE__ */ ye(x))
      return x.value;
    if (/* @__PURE__ */ vt(x))
      return c(x);
    if (se(x))
      return a ? a(x, 2) : x();
  })) : se(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (h) {
      wt();
      try {
        h();
      } finally {
        _t();
      }
    }
    const x = Pt;
    Pt = A;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Pt = x;
    }
  } : d = Lt, t && i) {
    const x = d, _ = i === !0 ? 1 / 0 : i;
    d = () => lt(x(), _);
  }
  const L = Ya(), V = () => {
    A.stop(), L && L.active && fo(L.effects, A);
  };
  if (r && t) {
    const x = t;
    t = (..._) => {
      const O = x(..._);
      return V(), O;
    };
  }
  let T = w ? new Array(e.length).fill(Zn) : Zn;
  const y = (x) => {
    if (!(!(A.flags & 1) || !A.dirty && !x))
      if (t) {
        const _ = A.run();
        if (x || i || v || (w ? _.some((O, D) => Je(O, T[D])) : Je(_, T))) {
          h && h();
          const O = Pt;
          Pt = A;
          try {
            const D = [
              _,
              // pass undefined as the old value when it's changed for the first time
              T === Zn ? void 0 : w && T[0] === Zn ? [] : T,
              g
            ];
            T = _, a ? a(t, 3, D) : (
              // @ts-expect-error
              t(...D)
            );
          } finally {
            Pt = O;
          }
        }
      } else
        A.run();
  };
  return l && l(y), A = new ko(d), A.scheduler = o ? () => o(y, !1) : y, g = (x) => xc(x, !1, A), h = A.onStop = () => {
    const x = As.get(A);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const _ of x) _();
      As.delete(A);
    }
  }, t ? s ? y(!0) : T = A.run() : o ? o(y.bind(null, !0), !0) : A.run(), V.pause = A.pause.bind(A), V.resume = A.resume.bind(A), V.stop = V, V;
}
function lt(e, t = 1 / 0, n) {
  if (t <= 0 || !ae(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ye(e))
    lt(e.value, t, n);
  else if (J(e))
    for (let s = 0; s < e.length; s++)
      lt(e[s], t, n);
  else if (Vt(e) || yt(e))
    e.forEach((s) => {
      lt(s, t, n);
    });
  else if (mo(e)) {
    for (const s in e)
      lt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && lt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Bn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Is(i, t, n);
  }
}
function Xe(e, t, n, s) {
  if (se(e)) {
    const i = Bn(e, t, n, s);
    return i && po(i) && i.catch((r) => {
      Is(r, t, n);
    }), i;
  }
  if (J(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Xe(e[r], t, n, s));
    return i;
  }
}
function Is(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || le;
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
      wt(), Bn(r, null, 10, [
        e,
        a,
        c
      ]), _t();
      return;
    }
  }
  vc(e, n, i, s, o);
}
function vc(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const xe = [];
let Ye = -1;
const nn = [];
let gt = null, Xt = 0;
const Fo = /* @__PURE__ */ Promise.resolve();
let us = null;
function Oo(e) {
  const t = us || Fo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bc(e) {
  let t = Ye + 1, n = xe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = xe[s], r = In(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Di(e) {
  if (!(e.flags & 1)) {
    const t = In(e), n = xe[xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= In(n) ? xe.push(e) : xe.splice(bc(t), 0, e), e.flags |= 1, Lo();
  }
}
function Lo() {
  us || (us = Fo.then(Bo));
}
function kc(e) {
  if (!J(e))
    gt && e.id === -1 ? gt.splice(Xt + 1, 0, e) : e.flags & 1 || (nn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      nn.push(e[t]);
  Lo();
}
function gr(e, t, n = Ye + 1) {
  for (; n < xe.length; n++) {
    const s = xe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      xe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Do(e) {
  if (nn.length) {
    const t = [...new Set(nn)].sort(
      (n, s) => In(n) - In(s)
    );
    if (nn.length = 0, gt) {
      for (let n = 0; n < t.length; n++)
        gt.push(t[n]);
      return;
    }
    for (gt = t, Xt = 0; Xt < gt.length; Xt++) {
      const n = gt[Xt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    gt = null, Xt = 0;
  }
}
const In = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bo(e) {
  try {
    for (Ye = 0; Ye < xe.length; Ye++) {
      const t = xe[Ye];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ye < xe.length; Ye++) {
      const t = xe[Ye];
      t && (t.flags &= -2);
    }
    Ye = -1, xe.length = 0, Do(), us = null, (xe.length || nn.length) && Bo();
  }
}
let Ie = null, Vo = null;
function ds(e) {
  const t = Ie;
  return Ie = e, Vo = e && e.type.__scopeId || null, t;
}
function wc(e, t = Ie, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && _r(-1);
    const r = ds(t), o = Bt.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = Bt.length; a > o; a--) rl();
      ds(r), s._d && _r(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function xt(e, t) {
  if (Ie === null)
    return e;
  const n = Rs(Ie), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = le] = t[i];
    r && (se(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && lt(o), s.push({
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
function It(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[s];
    a && (wt(), Xe(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), _t());
  }
}
function _c(e, t, n = !1) {
  const s = aA();
  if (s || sn) {
    let i = sn ? sn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && se(t) ? t.call(s && s.proxy) : t;
  }
}
const zc = /* @__PURE__ */ Symbol.for("v-scx"), $c = () => _c(zc);
function Ts(e, t, n) {
  return Sc(e, t, n);
}
function Sc(e, t, n = le) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = Oe({}, n), a = t && s || !t && r !== "post";
  let c;
  if (Nn) {
    if (r === "sync") {
      const g = $c();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = Lt, g.resume = Lt, g.pause = Lt, g;
    }
  }
  const A = $t;
  l.call = (g, v, w) => Xe(g, A, v, w);
  let d = !1;
  r === "post" ? l.scheduler = (g) => {
    ke(g, A && A.suspense);
  } : r !== "sync" && (d = !0, l.scheduler = (g, v) => {
    v ? g() : Di(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), d && (g.flags |= 2, A && (g.id = A.uid, g.i = A));
  };
  const h = yc(e, t, l);
  return Nn && (c ? c.push(h) : a && h()), h;
}
const Ec = /* @__PURE__ */ Symbol("_vte"), Ps = (e) => e.__isTeleport, Qs = /* @__PURE__ */ Symbol("_leaveCb");
function Cc(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== At) {
        t = n;
        break;
      }
  }
  return t;
}
function Uo(e) {
  if (!Wo(e))
    return Ps(e.type) && e.children ? Cc(e.children) : e;
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
function Bi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Bi(
      Ps(n.type) && Uo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  return se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Oe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Mc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function xr(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const fs = /* @__PURE__ */ new WeakMap();
function kn(e, t, n, s, i = !1) {
  if (J(e)) {
    e.forEach(
      (w, L) => kn(
        w,
        t && (J(t) ? t[L] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (wn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && kn(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Rs(s.component) : s.el, o = i ? null : r, { i: l, r: a } = e, c = t && t.r, A = l.refs === le ? l.refs = {} : l.refs, d = l.setupState, h = /* @__PURE__ */ ee(d), g = d === le ? uo : (w) => xr(A, w) ? !1 : re(h, w), v = (w, L) => !(L && xr(A, L));
  if (c != null && c !== a) {
    if (yr(t), ue(c))
      A[c] = null, g(c) && (d[c] = null);
    else if (/* @__PURE__ */ ye(c)) {
      const w = t;
      v(c, w.k) && (c.value = null), w.k && (A[w.k] = null);
    }
  }
  if (se(a))
    Bn(a, l, 12, [o, A]);
  else {
    const w = ue(a), L = /* @__PURE__ */ ye(a);
    if (w || L) {
      const V = () => {
        if (e.f) {
          const T = w ? g(a) ? d[a] : A[a] : v() || !e.k ? a.value : A[e.k];
          if (i)
            J(T) && fo(T, r);
          else if (J(T))
            T.includes(r) || T.push(r);
          else if (w)
            A[a] = [r], g(a) && (d[a] = A[a]);
          else {
            const y = [r];
            v(a, e.k) && (a.value = y), e.k && (A[e.k] = y);
          }
        } else w ? (A[a] = o, g(a) && (d[a] = o)) : L && (v(a, e.k) && (a.value = o), e.k && (A[e.k] = o));
      };
      if (o) {
        const T = () => {
          V(), fs.delete(e);
        };
        T.id = -1, fs.set(e, T), ke(T, n);
      } else
        yr(e), V();
    }
  }
}
function yr(e) {
  const t = fs.get(e);
  t && (t.flags |= 8, fs.delete(e));
}
Ss().requestIdleCallback;
Ss().cancelIdleCallback;
const wn = (e) => !!e.type.__asyncLoader, Wo = (e) => e.type.__isKeepAlive;
function Ic(e, t, n = $t, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      wt();
      const l = Wi(n), a = Xe(t, n, e, o);
      return l(), _t(), a;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const Ho = (e) => (t, n = $t) => {
  (!Nn || e === "sp") && Ic(e, (...s) => t(...s), n);
}, Tc = Ho("m"), Pc = Ho(
  "bum"
), Nc = /* @__PURE__ */ Symbol.for("v-ndc");
function me(e, t, n, s) {
  let i;
  const r = n, o = J(e);
  if (o || ue(e)) {
    const l = o && /* @__PURE__ */ vt(e);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ Pe(e), c = /* @__PURE__ */ Qe(e), e = Cs(e)), i = new Array(e.length);
    for (let A = 0, d = e.length; A < d; A++)
      i[A] = t(
        a ? c ? zt(Ne(e[A])) : Ne(e[A]) : e[A],
        A,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (ae(e))
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
const _i = (e) => e ? cl(e) ? Rs(e) : _i(e.parent) : null, _n = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Oe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _i(e.parent),
    $root: (e) => _i(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Di(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Oo.bind(e.proxy)),
    $watch: (e) => Lt
  })
), Xs = (e, t) => e !== le && !e.__isScriptSetup && re(e, t), jc = {
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
        if (Xs(s, t))
          return o[t] = 1, s[t];
        if (re(r, t))
          return o[t] = 3, r[t];
        if (n !== le && re(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = _n[t];
    let A, d;
    if (c)
      return t === "$attrs" && ge(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (A = l.__cssModules) && (A = A[t])
    )
      return A;
    if (n !== le && re(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, re(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return Xs(i, t) ? (i[t] = n, !0) : re(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(n[l] || Xs(t, l) || re(r, l) || re(s, l) || re(_n, l) || re(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : re(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Go() {
  return {
    app: null,
    config: {
      isNativeTag: uo,
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
let Rc = 0;
function Fc(e, t) {
  return function(s, i = null) {
    se(s) || (s = Oe({}, s)), i != null && !ae(i) && (i = null);
    const r = Go(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = r.app = {
      _uid: Rc++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: pA,
      get config() {
        return r.config;
      },
      set config(A) {
      },
      use(A, ...d) {
        return o.has(A) || (A && se(A.install) ? (o.add(A), A.install(c, ...d)) : se(A) && (o.add(A), A(c, ...d))), c;
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
          const g = c._ceVNode || Se(s, i);
          return g.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(g, A, h), a = !0, c._container = A, A.__vue_app__ = c, Rs(g.component);
        }
      },
      onUnmount(A) {
        l.push(A);
      },
      unmount() {
        a && (Xe(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(A, d) {
        return r.provides[A] = d, c;
      },
      runWithContext(A) {
        const d = sn;
        sn = c;
        try {
          return A();
        } finally {
          sn = d;
        }
      }
    };
    return c;
  };
}
let sn = null;
const Oc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Re(t)}Modifiers`] || e[`${Yt(t)}Modifiers`];
function Lc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || le;
  let i = n;
  const r = t.startsWith("update:"), o = r && Oc(s, t.slice(7));
  o && (o.trim && (i = n.map((A) => ue(A) ? A.trim() : A)), o.number && (i = i.map($s)));
  let l, a = s[l = Ys(t)] || // also try camelCase event handler (#2249)
  s[l = Ys(Re(t))];
  !a && r && (a = s[l = Ys(Yt(t))]), a && Xe(
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
    e.emitted[l] = !0, Xe(
      c,
      e,
      6,
      i
    );
  }
}
function Dc(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {};
  return r ? (J(r) ? r.forEach((l) => o[l] = null) : Oe(o, r), ae(e) && s.set(e, o), o) : (ae(e) && s.set(e, null), null);
}
function Ns(e, t) {
  return !e || !ws(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), re(e, t[0].toLowerCase() + t.slice(1)) || re(e, Yt(t)) || re(e, t));
}
function vr(e) {
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
    setupState: g,
    ctx: v,
    inheritAttrs: w
  } = e, L = ds(e);
  let V, T;
  try {
    if (n.shapeFlag & 4) {
      const x = i || s, _ = x;
      V = qe(
        c.call(
          _,
          x,
          A,
          d,
          g,
          h,
          v
        )
      ), T = l;
    } else {
      const x = t;
      V = qe(
        x.length > 1 ? x(
          d,
          { attrs: l, slots: o, emit: a }
        ) : x(
          d,
          null
        )
      ), T = t.props ? l : Bc(l);
    }
  } catch (x) {
    Bt.length = 0, Is(x, e, 1), V = Se(At);
  }
  let y = V;
  if (T && w !== !1) {
    const x = Object.keys(T), { shapeFlag: _ } = y;
    x.length && _ & 7 && (r && x.some(_s) && (T = Vc(
      T,
      r
    )), y = rn(y, T, !1, !0));
  }
  if (n.dirs && (y = rn(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const x = Ps(y.type) && Uo(y) || y;
    Bi(x, n.transition);
  }
  return V = y, ds(L), V;
}
const Bc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ws(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Vc = (e, t) => {
  const n = {};
  for (const s in e)
    (!_s(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Uc(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, c = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? br(s, o, c) : !!o;
    if (a & 8) {
      const A = t.dynamicProps;
      for (let d = 0; d < A.length; d++) {
        const h = A[d];
        if (Yo(o, s, h) && !Ns(c, h))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? br(s, o, c) : !0 : !!o;
  return !1;
}
function br(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (Yo(t, e, r) && !Ns(n, r))
      return !0;
  }
  return !1;
}
function Yo(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && ae(s) && ae(i) ? !kt(s, i) : s !== i;
}
function Wc({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Ko = {}, qo = () => Object.create(Ko), Jo = (e) => Object.getPrototypeOf(e) === Ko;
function Hc(e, t, n, s = !1) {
  const i = {}, r = qo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Zo(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ uc(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Gc(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ee(i), [a] = e.propsOptions;
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
        if (Ns(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (a)
          if (re(r, h))
            g !== r[h] && (r[h] = g, c = !0);
          else {
            const v = Re(h);
            i[v] = zi(
              a,
              l,
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
    Zo(e, t, i, r) && (c = !0);
    let A;
    for (const d in l)
      (!t || // for camelCase
      !re(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((A = Yt(d)) === d || !re(t, A))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[A] !== void 0) && (i[d] = zi(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== l)
      for (const d in r)
        (!t || !re(t, d)) && (delete r[d], c = !0);
  }
  c && ot(e.attrs, "set", "");
}
function Zo(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (yn(a))
        continue;
      const c = t[a];
      let A;
      i && re(i, A = Re(a)) ? !r || !r.includes(A) ? n[A] = c : (l || (l = {}))[A] = c : Ns(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ ee(n), c = l || le;
    for (let A = 0; A < r.length; A++) {
      const d = r[A];
      n[d] = zi(
        i,
        a,
        d,
        c[d],
        e,
        !re(c, d)
      );
    }
  }
  return o;
}
function zi(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = re(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && se(a)) {
        const { propsDefaults: c } = i;
        if (n in c)
          s = c[n];
        else {
          const A = Wi(i);
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
    ] && (s === "" || s === Yt(n)) && (s = !0));
  }
  return s;
}
function Yc(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  if (!r)
    return ae(e) && s.set(e, Rt), Rt;
  if (J(r))
    for (let c = 0; c < r.length; c++) {
      const A = Re(r[c]);
      kr(A) && (o[A] = le);
    }
  else if (r)
    for (const c in r) {
      const A = Re(c);
      if (kr(A)) {
        const d = r[c], h = o[A] = J(d) || se(d) ? { type: d } : Oe({}, d), g = h.type;
        let v = !1, w = !0;
        if (J(g))
          for (let L = 0; L < g.length; ++L) {
            const V = g[L], T = se(V) && V.name;
            if (T === "Boolean") {
              v = !0;
              break;
            } else T === "String" && (w = !1);
          }
        else
          v = se(g) && g.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = v, h[
          1
          /* shouldCastTrue */
        ] = w, (v || re(h, "default")) && l.push(A);
      }
    }
  const a = [o, l];
  return ae(e) && s.set(e, a), a;
}
function kr(e) {
  return e[0] !== "$" && !yn(e);
}
const Vi = (e) => e === "_" || e === "_ctx" || e === "$stable", Ui = (e) => J(e) ? e.map(qe) : [qe(e)], Kc = (e, t, n) => {
  if (t._n)
    return t;
  const s = wc((...i) => Ui(t(...i)), n);
  return s._c = !1, s;
}, Qo = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Vi(i)) continue;
    const r = e[i];
    if (se(r))
      t[i] = Kc(i, r, s);
    else if (r != null) {
      const o = Ui(r);
      t[i] = () => o;
    }
  }
}, Xo = (e, t) => {
  const n = Ui(t);
  e.slots.default = () => n;
}, el = (e, t, n) => {
  for (const s in t)
    (n || !Vi(s)) && (e[s] = t[s]);
}, qc = (e, t, n) => {
  const s = e.slots = qo();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (el(s, t, n), n && xo(s, "_", i, !0)) : Qo(t, s);
  } else t && Xo(e, t);
}, Jc = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = le;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : el(i, t, n) : (r = !t.$stable, Qo(t, i)), o = t;
  } else t && (Xo(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Vi(l) && o[l] == null && delete i[l];
}, ke = tA;
function Zc(e) {
  return Qc(e);
}
function Qc(e, t) {
  const n = Ss();
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
    setScopeId: g = Lt,
    insertStaticContent: v
  } = e, w = (p, m, k, I = null, S = null, M = null, R = void 0, j = null, N = !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !hn(p, m) && (I = Kn(p), Me(p, S, M, !0), p = null), m.patchFlag === -2 && (N = !1, m.dynamicChildren = null), m.dynamicChildren && p && p.dynamicChildren && p.dynamicChildren.hasOnce && (m.dynamicChildren === Rt && (m.dynamicChildren = []), m.dynamicChildren.hasOnce = !0);
    const { type: C, ref: G, shapeFlag: B } = m;
    switch (C) {
      case js:
        L(p, m, k, I);
        break;
      case At:
        V(p, m, k, I);
        break;
      case ti:
        p == null && T(m, k, I, R);
        break;
      case Q:
        Ve(
          p,
          m,
          k,
          I,
          S,
          M,
          R,
          j,
          N
        );
        break;
      default:
        B & 1 ? _(
          p,
          m,
          k,
          I,
          S,
          M,
          R,
          j,
          N
        ) : B & 6 ? X(
          p,
          m,
          k,
          I,
          S,
          M,
          R,
          j,
          N
        ) : (B & 64 || B & 128) && C.process(
          p,
          m,
          k,
          I,
          S,
          M,
          R,
          j,
          N,
          dn
        );
    }
    G != null && S ? kn(G, p && p.ref, M, m || p, !m) : G == null && p && p.ref != null && kn(p.ref, null, M, p, !0);
  }, L = (p, m, k, I) => {
    if (p == null)
      s(
        m.el = l(m.children),
        k,
        I
      );
    else {
      const S = m.el = p.el;
      m.children !== p.children && c(S, m.children);
    }
  }, V = (p, m, k, I) => {
    p == null ? s(
      m.el = a(m.children || ""),
      k,
      I
    ) : m.el = p.el;
  }, T = (p, m, k, I) => {
    [p.el, p.anchor] = v(
      p.children,
      m,
      k,
      I,
      p.el,
      p.anchor
    );
  }, y = ({ el: p, anchor: m }, k, I) => {
    let S;
    for (; p && p !== m; )
      S = h(p), s(p, k, I), p = S;
    s(m, k, I);
  }, x = ({ el: p, anchor: m }) => {
    let k;
    for (; p && p !== m; )
      k = h(p), i(p), p = k;
    i(m);
  }, _ = (p, m, k, I, S, M, R, j, N) => {
    if (m.type === "svg" ? R = "svg" : m.type === "math" && (R = "mathml"), p == null)
      O(
        m,
        k,
        I,
        S,
        M,
        R,
        j,
        N
      );
    else {
      const C = p.el && p.el._isVueCE ? p.el : null;
      try {
        C && C._beginPatch(), b(
          p,
          m,
          S,
          M,
          R,
          j,
          N
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, O = (p, m, k, I, S, M, R, j) => {
    let N, C;
    const { props: G, shapeFlag: B, transition: W, dirs: K } = p;
    if (N = p.el = o(
      p.type,
      M,
      G && G.is,
      G
    ), B & 8 ? A(N, p.children) : B & 16 && E(
      p.children,
      N,
      null,
      I,
      S,
      ei(p, M),
      R,
      j
    ), K && It(p, null, I, "created"), D(N, p, p.scopeId, R, I), G) {
      for (const ie in G)
        ie !== "value" && !yn(ie) && r(N, ie, null, G[ie], M, I);
      "value" in G && r(N, "value", null, G.value, M), (C = G.onVnodeBeforeMount) && Ge(C, I, p);
    }
    K && It(p, null, I, "beforeMount");
    const Z = Xc(S, W);
    Z && W.beforeEnter(N), s(N, m, k), ((C = G && G.onVnodeMounted) || Z || K) && ke(() => {
      try {
        C && Ge(C, I, p), Z && W.enter(N), K && It(p, null, I, "mounted");
      } finally {
      }
    }, S);
  }, D = (p, m, k, I, S) => {
    if (k && g(p, k), I)
      for (let M = 0; M < I.length; M++)
        g(p, I[M]);
    if (S) {
      let M = S.subTree;
      if (m === M || il(M.type) && (M.ssContent === m || M.ssFallback === m)) {
        const R = S.vnode;
        D(
          p,
          R,
          R.scopeId,
          R.slotScopeIds,
          S.parent
        );
      }
    }
  }, E = (p, m, k, I, S, M, R, j, N = 0) => {
    for (let C = N; C < p.length; C++) {
      const G = p[C] = j ? rt(p[C]) : qe(p[C]);
      w(
        null,
        G,
        m,
        k,
        I,
        S,
        M,
        R,
        j
      );
    }
  }, b = (p, m, k, I, S, M, R) => {
    const j = m.el = p.el;
    let { patchFlag: N, dynamicChildren: C, dirs: G } = m;
    N |= p.patchFlag & 16;
    const B = p.props || le, W = m.props || le;
    let K;
    if (k && Tt(k, !1), (K = W.onVnodeBeforeUpdate) && Ge(K, k, m, p), G && It(m, p, k, "beforeUpdate"), k && Tt(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    C && (!p.dynamicChildren || p.dynamicChildren.length !== C.length) && (N = 0, R = !1, C = null), (B.innerHTML && W.innerHTML == null || B.textContent && W.textContent == null) && A(j, ""), C ? U(
      p.dynamicChildren,
      C,
      j,
      k,
      I,
      ei(m, S),
      M
    ) : R || Ct(
      p,
      m,
      j,
      null,
      k,
      I,
      ei(m, S),
      M,
      !1
    ), N > 0) {
      if (N & 16)
        we(j, B, W, k, S);
      else if (N & 2 && B.class !== W.class && r(j, "class", null, W.class, S), N & 4 && r(j, "style", B.style, W.style, S), N & 8) {
        const Z = m.dynamicProps;
        for (let ie = 0; ie < Z.length; ie++) {
          const te = Z[ie], Ae = B[te], fe = W[te];
          (fe !== Ae || te === "value") && r(j, te, Ae, fe, S, k);
        }
      }
      N & 1 && p.children !== m.children && A(j, m.children);
    } else !R && C == null && we(j, B, W, k, S);
    ((K = W.onVnodeUpdated) || G) && ke(() => {
      K && Ge(K, k, m, p), G && It(m, p, k, "updated");
    }, I);
  }, U = (p, m, k, I, S, M, R) => {
    for (let j = 0; j < m.length; j++) {
      const N = p[j], C = m[j], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === Q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !hn(N, C) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? d(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      w(
        N,
        C,
        G,
        null,
        I,
        S,
        M,
        R,
        !0
      );
    }
  }, we = (p, m, k, I, S) => {
    if (m !== k) {
      if (m !== le)
        for (const M in m)
          !yn(M) && !(M in k) && r(
            p,
            M,
            m[M],
            null,
            S,
            I
          );
      for (const M in k) {
        if (yn(M)) continue;
        const R = k[M], j = m[M];
        R !== j && M !== "value" && r(p, M, j, R, S, I);
      }
      "value" in k && r(p, "value", m.value, k.value, S);
    }
  }, Ve = (p, m, k, I, S, M, R, j, N) => {
    const C = m.el = p ? p.el : l(""), G = m.anchor = p ? p.anchor : l("");
    let { patchFlag: B, dynamicChildren: W, slotScopeIds: K } = m;
    K && (j = j ? j.concat(K) : K), p == null ? (s(C, k, I), s(G, k, I), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      k,
      G,
      S,
      M,
      R,
      j,
      N
    )) : B > 0 && B & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === W.length ? (U(
      p.dynamicChildren,
      W,
      k,
      S,
      M,
      R,
      j
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || S && m === S.subTree) && tl(
      p,
      m,
      !0
      /* shallow */
    )) : Ct(
      p,
      m,
      k,
      G,
      S,
      M,
      R,
      j,
      N
    );
  }, X = (p, m, k, I, S, M, R, j, N) => {
    m.slotScopeIds = j, p == null ? m.shapeFlag & 512 ? S.ctx.activate(
      m,
      k,
      I,
      R,
      N
    ) : ft(
      m,
      k,
      I,
      S,
      M,
      R,
      N
    ) : ve(p, m, N);
  }, ft = (p, m, k, I, S, M, R) => {
    const j = p.component = lA(
      p,
      I,
      S
    );
    if (Wo(p) && (j.ctx.renderer = dn), cA(j, !1, R), j.asyncDep) {
      if (S && S.registerDep(j, pt, R), !p.el) {
        const N = j.subTree = Se(At);
        V(null, N, m, k), p.placeholder = N.el;
      }
    } else
      pt(
        j,
        p,
        m,
        k,
        S,
        M,
        R
      );
  }, ve = (p, m, k) => {
    const I = m.component = p.component;
    if (Uc(p, m, k))
      if (I.asyncDep && !I.asyncResolved) {
        m.el = p.el, ht(I, m, k);
        return;
      } else
        I.next = m, I.update();
    else
      m.el = p.el, I.vnode = m;
  }, pt = (p, m, k, I, S, M, R) => {
    const j = () => {
      if (p.isMounted) {
        let { next: B, bu: W, u: K, parent: Z, vnode: ie } = p;
        {
          const We = nl(p);
          if (We) {
            B && (B.el = ie.el, ht(p, B, R)), We.asyncDep.then(() => {
              ke(() => {
                p.isUnmounted || C();
              }, S);
            });
            return;
          }
        }
        let te = B, Ae;
        Tt(p, !1), B ? (B.el = ie.el, ht(p, B, R)) : B = ie, W && ss(W), (Ae = B.props && B.props.onVnodeBeforeUpdate) && Ge(Ae, Z, B, ie), Tt(p, !0);
        const fe = vr(p), Ue = p.subTree;
        p.subTree = fe, w(
          Ue,
          fe,
          // parent may have changed if it's in a teleport
          d(Ue.el),
          // anchor may have changed if it's in a fragment
          Kn(Ue),
          p,
          S,
          M
        ), B.el = fe.el, te === null && Wc(p, fe.el), K && ke(K, S), (Ae = B.props && B.props.onVnodeUpdated) && ke(
          () => Ge(Ae, Z, B, ie),
          S
        );
      } else {
        let B;
        const { el: W, props: K } = m, { bm: Z, m: ie, parent: te, root: Ae, type: fe } = p, Ue = wn(m);
        Tt(p, !1), Z && ss(Z), !Ue && (B = K && K.onVnodeBeforeMount) && Ge(B, te, m), Tt(p, !0);
        {
          Ae.ce && Ae.ce._hasShadowRoot() && Ae.ce._injectChildStyle(
            fe,
            p.parent ? p.parent.type : void 0
          );
          const We = p.subTree = vr(p);
          w(
            null,
            We,
            k,
            I,
            p,
            S,
            M
          ), m.el = We.el;
        }
        if (ie && ke(ie, S), !Ue && (B = K && K.onVnodeMounted)) {
          const We = m;
          ke(
            () => Ge(B, te, We),
            S
          );
        }
        (m.shapeFlag & 256 || te && wn(te.vnode) && te.vnode.shapeFlag & 256) && p.a && ke(p.a, S), p.isMounted = !0, m = k = I = null;
      }
    };
    p.scope.on();
    const N = p.effect = new ko(j);
    p.scope.off();
    const C = p.update = N.run.bind(N), G = p.job = N.runIfDirty.bind(N);
    G.i = p, G.id = p.uid, N.scheduler = () => Di(G), Tt(p, !0), C();
  }, ht = (p, m, k) => {
    m.component = p;
    const I = p.vnode.props;
    p.vnode = m, p.next = null, Gc(p, m.props, I, k), Jc(p, m.children, k), wt(), gr(p), _t();
  }, Ct = (p, m, k, I, S, M, R, j, N = !1) => {
    const C = p && p.children, G = p ? p.shapeFlag : 0, B = m.children, { patchFlag: W, shapeFlag: K } = m;
    if (W > 0) {
      if (W & 128) {
        An(
          C,
          B,
          k,
          I,
          S,
          M,
          R,
          j,
          N
        );
        return;
      } else if (W & 256) {
        Yn(
          C,
          B,
          k,
          I,
          S,
          M,
          R,
          j,
          N
        );
        return;
      }
    }
    K & 8 ? (G & 16 && un(C, S, M), B !== C && A(k, B)) : G & 16 ? K & 16 ? An(
      C,
      B,
      k,
      I,
      S,
      M,
      R,
      j,
      N
    ) : un(C, S, M, !0) : (G & 8 && A(k, ""), K & 16 && E(
      B,
      k,
      I,
      S,
      M,
      R,
      j,
      N
    ));
  }, Yn = (p, m, k, I, S, M, R, j, N) => {
    p = p || Rt, m = m || Rt;
    const C = p.length, G = m.length, B = Math.min(C, G);
    let W;
    for (W = 0; W < B; W++) {
      const K = m[W] = N ? rt(m[W]) : qe(m[W]);
      w(
        p[W],
        K,
        k,
        null,
        S,
        M,
        R,
        j,
        N
      );
    }
    C > G ? un(
      p,
      S,
      M,
      !0,
      !1,
      B
    ) : E(
      m,
      k,
      I,
      S,
      M,
      R,
      j,
      N,
      B
    );
  }, An = (p, m, k, I, S, M, R, j, N) => {
    let C = 0;
    const G = m.length;
    let B = p.length - 1, W = G - 1;
    for (; C <= B && C <= W; ) {
      const K = p[C], Z = m[C] = N ? rt(m[C]) : qe(m[C]);
      if (hn(K, Z))
        w(
          K,
          Z,
          k,
          null,
          S,
          M,
          R,
          j,
          N
        );
      else
        break;
      C++;
    }
    for (; C <= B && C <= W; ) {
      const K = p[B], Z = m[W] = N ? rt(m[W]) : qe(m[W]);
      if (hn(K, Z))
        w(
          K,
          Z,
          k,
          null,
          S,
          M,
          R,
          j,
          N
        );
      else
        break;
      B--, W--;
    }
    if (C > B) {
      if (C <= W) {
        const K = W + 1, Z = K < G ? m[K].el : I;
        for (; C <= W; )
          w(
            null,
            m[C] = N ? rt(m[C]) : qe(m[C]),
            k,
            Z,
            S,
            M,
            R,
            j,
            N
          ), C++;
      }
    } else if (C > W)
      for (; C <= B; )
        Me(p[C], S, M, !0), C++;
    else {
      const K = C, Z = C, ie = /* @__PURE__ */ new Map();
      for (C = Z; C <= W; C++) {
        const _e = m[C] = N ? rt(m[C]) : qe(m[C]);
        _e.key != null && ie.set(_e.key, C);
      }
      let te, Ae = 0;
      const fe = W - Z + 1;
      let Ue = !1, We = 0;
      const fn = new Array(fe);
      for (C = 0; C < fe; C++) fn[C] = 0;
      for (C = K; C <= B; C++) {
        const _e = p[C];
        if (Ae >= fe) {
          Me(_e, S, M, !0);
          continue;
        }
        let He;
        if (_e.key != null)
          He = ie.get(_e.key);
        else
          for (te = Z; te <= W; te++)
            if (fn[te - Z] === 0 && hn(_e, m[te])) {
              He = te;
              break;
            }
        He === void 0 ? Me(_e, S, M, !0) : (fn[He - Z] = C + 1, He >= We ? We = He : Ue = !0, w(
          _e,
          m[He],
          k,
          null,
          S,
          M,
          R,
          j,
          N
        ), Ae++);
      }
      const ar = Ue ? eA(fn) : Rt;
      for (te = ar.length - 1, C = fe - 1; C >= 0; C--) {
        const _e = Z + C, He = m[_e], cr = m[_e + 1], Ar = _e + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          cr.el || sl(cr)
        ) : I;
        fn[C] === 0 ? w(
          null,
          He,
          k,
          Ar,
          S,
          M,
          R,
          j,
          N
        ) : Ue && (te < 0 || C !== ar[te] ? be(He, k, Ar, 2) : te--);
      }
    }
  }, be = (p, m, k, I, S = null) => {
    const { el: M, type: R, transition: j, children: N, shapeFlag: C } = p;
    if (C & 6) {
      be(p.component.subTree, m, k, I);
      return;
    }
    if (C & 128) {
      p.suspense.move(m, k, I);
      return;
    }
    if (C & 64) {
      R.move(p, m, k, dn);
      return;
    }
    if (R === Q) {
      s(M, m, k);
      for (let B = 0; B < N.length; B++)
        be(N[B], m, k, I);
      s(p.anchor, m, k);
      return;
    }
    if (R === ti) {
      y(p, m, k);
      return;
    }
    if (I !== 2 && C & 1 && j)
      if (I === 0)
        j.persisted && !M[Qs] ? s(M, m, k) : (j.beforeEnter(M), s(M, m, k), ke(() => j.enter(M), S));
      else {
        const { leave: B, delayLeave: W, afterLeave: K } = j, Z = () => {
          p.ctx.isUnmounted ? i(M) : s(M, m, k);
        }, ie = () => {
          const te = M._isLeaving || !!M[Qs];
          M._isLeaving && M[Qs](
            !0
            /* cancelled */
          ), j.persisted && !te ? Z() : B(M, () => {
            Z(), K && K();
          });
        };
        W ? W(M, Z, ie) : ie();
      }
    else
      s(M, m, k);
  }, Me = (p, m, k, I = !1, S = !1) => {
    const {
      type: M,
      props: R,
      ref: j,
      children: N,
      dynamicChildren: C,
      shapeFlag: G,
      patchFlag: B,
      dirs: W,
      cacheIndex: K,
      memo: Z
    } = p;
    if ((B === -2 || C && C.hasOnce) && (S = !1), j != null && (wt(), kn(j, null, k, p, !0), _t()), K != null && (!p.ctx || p.ctx === m) && (m.renderCache[K] = void 0), G & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const ie = G & 1 && W, te = !wn(p);
    let Ae;
    if (te && (Ae = R && R.onVnodeBeforeUnmount) && Ge(Ae, m, p), G & 6)
      Ta(p.component, k, I);
    else {
      if (G & 128) {
        p.suspense.unmount(k, I);
        return;
      }
      ie && It(p, null, m, "beforeUnmount"), G & 64 ? p.type.remove(
        p,
        m,
        k,
        dn,
        I
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== Q || B > 0 && B & 64) ? un(
        C,
        m,
        k,
        !1,
        !0
      ) : (M === Q && B & 384 || !S && G & 16) && un(N, m, k), I && Mt(p);
    }
    const fe = Z != null && K == null;
    (te && (Ae = R && R.onVnodeUnmounted) || ie || fe) && ke(() => {
      Ae && Ge(Ae, m, p), ie && It(p, null, m, "unmounted"), fe && (p.el = null);
    }, k);
  }, Mt = (p) => {
    const { type: m, el: k, anchor: I, transition: S } = p;
    if (m === Q) {
      Ia(k, I);
      return;
    }
    if (m === ti) {
      x(p), S && !S.persisted && S.afterLeave && S.afterLeave();
      return;
    }
    const M = () => {
      i(k), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (p.shapeFlag & 1 && S && !S.persisted) {
      const { leave: R, delayLeave: j } = S, N = () => R(k, M);
      j ? j(p.el, M, N) : N();
    } else
      M();
  }, Ia = (p, m) => {
    let k;
    for (; p !== m; )
      k = h(p), i(p), p = k;
    i(m);
  }, Ta = (p, m, k) => {
    const { bum: I, scope: S, job: M, subTree: R, um: j, m: N, a: C } = p;
    wr(N), wr(C), I && ss(I), S.stop(), M ? (M.flags |= 8, Me(R, p, m, k)) : p.vnode.el && R && (R.transition = p.vnode.transition, Me(R, p, m, k)), j && ke(j, m), ke(() => {
      p.isUnmounted = !0;
    }, m);
  }, un = (p, m, k, I = !1, S = !1, M = 0) => {
    for (let R = M; R < p.length; R++)
      Me(p[R], m, k, I, S);
  }, Kn = (p) => {
    if (p.shapeFlag & 6)
      return Kn(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = h(p.anchor || p.el), k = m && m[Ec];
    return k ? h(k) : m;
  };
  let Gs = !1;
  const lr = (p, m, k) => {
    let I;
    p == null ? m._vnode && (Me(m._vnode, null, null, !0), I = m._vnode.component) : w(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      k
    ), m._vnode = p, Gs || (Gs = !0, gr(I), Do(), Gs = !1);
  }, dn = {
    p: w,
    um: Me,
    m: be,
    r: Mt,
    mt: ft,
    mc: E,
    pc: Ct,
    pbc: U,
    n: Kn,
    o: e
  };
  return {
    render: lr,
    hydrate: void 0,
    createApp: Fc(lr)
  };
}
function ei({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Tt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function tl(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (J(s) && J(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = rt(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && tl(o, l)), l.type === js && (l.patchFlag === -1 && (l = i[r] = rt(l)), l.el = o.el), l.type === At && !l.el && (l.el = o.el);
    }
}
function eA(e) {
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
function nl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : nl(t);
}
function wr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function sl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? sl(t.subTree) : null;
}
const il = (e) => e.__isSuspense;
function tA(e, t) {
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : kc(e);
}
const Q = /* @__PURE__ */ Symbol.for("v-fgt"), js = /* @__PURE__ */ Symbol.for("v-txt"), At = /* @__PURE__ */ Symbol.for("v-cmt"), ti = /* @__PURE__ */ Symbol.for("v-stc"), Bt = [];
let ze = null;
function z(e = !1) {
  Bt.push(ze = e ? null : []);
}
function rl() {
  Bt.pop(), ze = Bt[Bt.length - 1] || null;
}
let Tn = 1;
function _r(e, t = !1) {
  Tn += e, e < 0 && ze && t && (ze.hasOnce = !0);
}
function ol(e) {
  return e.dynamicChildren = Tn > 0 ? ze || Rt : null, rl(), Tn > 0 && ze && ze.push(e), e;
}
function $(e, t, n, s, i, r) {
  return ol(
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
function at(e, t, n, s, i) {
  return ol(
    Se(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function ll(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function hn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const al = ({ key: e }) => e ?? null, is = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ue(e) || /* @__PURE__ */ ye(e) || se(e) ? { i: Ie, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, i = null, r = e === Q ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && al(t),
    ref: t && is(t),
    scopeId: Vo,
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
    ctx: Ie
  };
  return l ? (ps(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= ue(n) ? 8 : 16), Tn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ze && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ze.push(a), a;
}
const Se = nA;
function nA(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === Nc) && (e = At), ll(e)) {
    const l = rn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ps(l, n), Tn > 0 && !r && ze && (l.shapeFlag & 6 ? ze[ze.indexOf(e)] = l : ze.push(l)), l.patchFlag = -2, l;
  }
  if (fA(e) && (e = e.__vccOpts), t) {
    t = sA(t);
    let { class: l, style: a } = t;
    l && !ue(l) && (t.class = ne(l)), ae(a) && (/* @__PURE__ */ Li(a) && !J(a) && (a = Oe({}, a)), t.style = Es(a));
  }
  const o = ue(e) ? 1 : il(e) ? 128 : Ps(e) ? 64 : ae(e) ? 4 : se(e) ? 2 : 0;
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
function sA(e) {
  return e ? /* @__PURE__ */ Li(e) || Jo(e) ? Oe({}, e) : e : null;
}
function rn(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, c = t ? iA(i || {}, t) : i, A = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && al(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? J(r) ? r.concat(is(t)) : [r, is(t)] : is(t)
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
    ssContent: e.ssContent && rn(e.ssContent),
    ssFallback: e.ssFallback && rn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && Bi(
    A,
    a.clone(A)
  ), A;
}
function je(e = " ", t = 0) {
  return Se(js, null, e, t);
}
function Y(e = "", t = !1) {
  return t ? (z(), at(At, null, e)) : Se(At, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean" ? Se(At) : J(e) ? Se(
    Q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ll(e) ? rt(e) : Se(js, null, String(e));
}
function rt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : rn(e);
}
function ps(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (J(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ps(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Jo(t) ? t._ctx = Ie : i === 3 && Ie && (Ie.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (se(t)) {
    if (s & 65) {
      ps(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ie }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [je(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function iA(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = ne([t.class, s.class]));
      else if (i === "style")
        t.style = Es([t.style, s.style]);
      else if (ws(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(J(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !_s(i) && (t[i] = o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Ge(e, t, n, s = null) {
  Xe(e, t, 7, [
    n,
    s
  ]);
}
const rA = Go();
let oA = 0;
function lA(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || rA, r = {
    uid: oA++,
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
    scope: new Ga(
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
    propsOptions: Yc(s, i),
    emitsOptions: Dc(s, i),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Lc.bind(null, r), e.ce && e.ce(r), r;
}
let $t = null;
const aA = () => $t || Ie;
let hs, Pn;
{
  const e = Ss(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  hs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => $t = n
  ), Pn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Nn = n
  );
}
const Wi = (e) => {
  const t = $t;
  return hs(e), e.scope.on(), () => {
    e.scope.off(), hs(t);
  };
}, zr = () => {
  $t && $t.scope.off(), hs(null);
};
function cl(e) {
  return e.vnode.shapeFlag & 4;
}
let Nn = !1;
function cA(e, t = !1, n = !1) {
  t && Pn(t);
  const { props: s, children: i } = e.vnode, r = cl(e);
  Hc(e, s, r, t), qc(e, i, n || t);
  const o = r ? AA(e, t) : void 0;
  return t && Pn(!1), o;
}
function AA(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, jc);
  const { setup: s } = n;
  if (s) {
    wt();
    const i = e.setupContext = s.length > 1 ? dA(e) : null, r = Wi(e), o = Bn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = po(o);
    if (_t(), r(), (l || e.sp) && !wn(e) && Mc(e), l) {
      if (o.then(zr, zr), t)
        return o.then((a) => {
          Pn(!0);
          try {
            $r(e, a, t);
          } finally {
            Pn(!1);
          }
        }).catch((a) => {
          Is(a, e, 0);
        });
      e.asyncDep = o;
    } else
      $r(e, o);
  } else
    Al(e);
}
function $r(e, t, n) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = Ro(t)), Al(e);
}
function Al(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Lt);
}
const uA = {
  get(e, t) {
    return ge(e, "get", ""), e[t];
  }
};
function dA(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, uA),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Rs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ro(dc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in _n)
        return _n[n](e);
    },
    has(t, n) {
      return n in t || n in _n;
    }
  })) : e.proxy;
}
function fA(e) {
  return se(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ gc(e, t, Nn), pA = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $i;
const Sr = typeof window < "u" && window.trustedTypes;
if (Sr)
  try {
    $i = /* @__PURE__ */ Sr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ul = $i ? (e) => $i.createHTML(e) : (e) => e, hA = "http://www.w3.org/2000/svg", mA = "http://www.w3.org/1998/Math/MathML", it = typeof document < "u" ? document : null, Er = it && /* @__PURE__ */ it.createElement("template"), gA = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? it.createElementNS(hA, e) : t === "mathml" ? it.createElementNS(mA, e) : n ? it.createElement(e, { is: n }) : it.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => it.createTextNode(e),
  createComment: (e) => it.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => it.querySelector(e),
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
      Er.innerHTML = ul(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Er.content;
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
}, xA = /* @__PURE__ */ Symbol("_vtc");
function yA(e, t, n) {
  const s = e[xA];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Cr = /* @__PURE__ */ Symbol("_vod"), vA = /* @__PURE__ */ Symbol("_vsh"), bA = /* @__PURE__ */ Symbol(""), kA = /(?:^|;)\s*display\s*:/;
function wA(e, t, n) {
  const s = e.style, i = ue(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (ue(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && gn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && gn(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null ? zA(
        e,
        o,
        !ue(t) && t ? t[o] : void 0,
        l
      ) || gn(s, o, l) : gn(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[bA];
      o && (n += ";" + o), s.cssText = n, r = kA.test(n);
    }
  } else t && e.removeAttribute("style");
  Cr in e && (e[Cr] = r ? s.display : "", e[vA] && (s.display = "none"));
}
const Qn = /\s*!important$/;
function gn(e, t, n) {
  if (J(n))
    n.forEach((s) => gn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    Qn.test(n) ? e.setProperty(t, n.replace(Qn, ""), "important") : e.setProperty(t, n);
  else {
    const s = _A(e, t);
    Qn.test(n) ? e.setProperty(
      Yt(s),
      n.replace(Qn, ""),
      "important"
    ) : e[s] = n;
  }
}
const Mr = ["Webkit", "Moz", "ms"], ni = {};
function _A(e, t) {
  const n = ni[t];
  if (n)
    return n;
  let s = Re(t);
  if (s !== "filter" && s in e)
    return ni[t] = s;
  s = go(s);
  for (let i = 0; i < Mr.length; i++) {
    const r = Mr[i] + s;
    if (r in e)
      return ni[t] = r;
  }
  return t;
}
function zA(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ue(s) && n === s;
}
const Ir = "http://www.w3.org/1999/xlink";
function Tr(e, t, n, s, i, r = Va(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ir, t.slice(6, t.length)) : e.setAttributeNS(Ir, t, n) : n == null || r && !yo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ze(n) ? String(n) : n
  );
}
function Pr(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ul(n) : n);
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
    l === "boolean" ? n = yo(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function jt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function $A(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Nr = /* @__PURE__ */ Symbol("_vei");
function SA(e, t, n, s, i = null) {
  const r = e[Nr] || (e[Nr] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = MA(t);
    if (s) {
      const c = r[t] = PA(
        s,
        i
      );
      jt(e, l, c, a);
    } else o && ($A(e, l, o, a), r[t] = void 0);
  }
}
const EA = /(Once|Passive|Capture)$/, CA = /^on:?(?:Once|Passive|Capture)$/;
function MA(e) {
  let t, n;
  for (; (n = e.match(EA)) && !CA.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Yt(e.slice(2)), t];
}
let si = 0;
const IA = /* @__PURE__ */ Promise.resolve(), TA = () => si || (IA.then(() => si = 0), si = Date.now());
function PA(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (J(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        r.call(s), s._stopped = !0;
      };
      const o = i.slice(), l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const c = o[a];
        c && Xe(
          c,
          t,
          5,
          l
        );
      }
    } else
      Xe(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = TA(), n;
}
const jr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, NA = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? yA(e, s, o) : t === "style" ? wA(e, n, s) : ws(t) ? _s(t) || SA(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : jA(e, t, s, o)) ? (Pr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Tr(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (RA(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ue(s))) ? Pr(e, Re(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Tr(e, t, s, o));
};
function jA(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && jr(t) && se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return jr(t) && ue(n) ? !1 : t in e;
}
function RA(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Re(t);
  return Array.isArray(n) ? n.some((i) => Re(i) === s) : Object.keys(n).some((i) => Re(i) === s);
}
const ms = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return J(t) ? (n) => ss(t, n) : t;
};
function FA(e) {
  e.target.composing = !0;
}
function Rr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ft = /* @__PURE__ */ Symbol("_assign"), Xn = /* @__PURE__ */ Symbol("_initialValue");
function ii(e, t, n) {
  return t && (e = e.trim()), n && (e = $s(e)), e;
}
const en = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[Xn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Xn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Ft] = ms(i);
    const r = s || i.props && i.props.type === "number";
    jt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ft](ii(e.value, n, r));
    }), (n || r) && jt(e, "change", () => {
      e.value = ii(e.value, n, r);
    }), t || (jt(e, "compositionstart", FA), jt(e, "compositionend", Rr), jt(e, "change", Rr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", r = e[Xn];
    delete e[Xn], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Ft](ii(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, o) {
    if (e[Ft] = ms(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? $s(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, dl = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, jt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? $s(gs(a)) : gs(a)
      ), r = e.multiple, o = r ? Vt(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        r,
        r ? J(o) ? i.slice() : i : o
      ];
      try {
        e[Ft](o);
      } finally {
        Oo(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[Ft] = ms(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Fr(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Ft] = ms(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !OA(t, n[1], n[0])) && Fr(e, t);
  }
};
function OA(e, t, n) {
  if (!n || J(e)) return kt(e, t);
  if (Vt(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Fr(e, t) {
  const n = e.multiple, s = J(t);
  if (!(n && !s && !Vt(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const o = e.options[i], l = gs(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? o.selected = t.some((c) => String(c) === String(l)) : o.selected = Ha(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (kt(gs(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function gs(e) {
  return "_value" in e ? e._value : e.value;
}
const LA = ["ctrl", "shift", "alt", "meta"], DA = {
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
  exact: (e, t) => LA.some((n) => e[`${n}Key`] && !t.includes(n))
}, BA = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = DA[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  }));
}, VA = /* @__PURE__ */ Oe({ patchProp: NA }, gA);
let Or;
function UA() {
  return Or || (Or = Zc(VA));
}
const WA = ((...e) => {
  const t = UA().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = GA(s);
    if (!i) return;
    const r = t._component;
    !se(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, HA(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function HA(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function GA(e) {
  return ue(e) ? document.querySelector(e) : e;
}
const YA = "zhonglou", KA = "钟楼", qA = "1.4.0", JA = "S", ZA = 10, QA = "【副本进行中：钟楼】", XA = [], eu = { briefingName: "钟楼" }, tu = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, nu = { type: "nights", template: "剩余{n}夜" }, su = "至第四日日出", iu = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], ru = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", ou = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], lu = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], au = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], cu = [{ id: "M1", q: "第一夜的值班签会抽中主播吗", yes: "会", no: "不会", p: 0.1, by: "d1", judge: "第一日日落的抽签结果是{{user}}本人当夜值班" }, { id: "M2", q: "塔里会出人命吗", yes: "会", no: "不会", p: 0.5, judge: "有人死于他人之手，系统宣布钟楼停摆、开启审判" }, { id: "M3", q: "主播会亲手摇响大钟吗", yes: "会", no: "不会", p: 0.35, judge: "{{user}}本人在4F机房摇动曲柄，让大钟鸣响" }], Au = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], uu = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], du = {
  id: YA,
  name: KA,
  version: qA,
  level: JA,
  players: ZA,
  token: QA,
  legacyKeys: XA,
  detect: eu,
  time: tu,
  remaining: nu,
  deadline: su,
  roles: iu,
  rolesNote: ru,
  stateFields: ou,
  phases: lu,
  events: au,
  markets: cu,
  docs: Au,
  danmaku: uu
}, fu = "jingjie", pu = "境界游乐园", hu = "1.1.0", mu = "A", gu = "【副本进行中：境界游乐园】", xu = [], yu = { briefingName: "境界游乐园" }, vu = { type: "none" }, bu = { type: "fromPanel" }, ku = [], wu = [], _u = [{ id: "M1", q: "15:30演出时主播会回头吗", yes: "会", no: "不会", p: 0.3, judge: "15:30表演区演出期间，{{user}}本人回头了" }, { id: "M2", q: "主播会坐上摩天轮吗", yes: "会", no: "不会", p: 0.55, judge: "{{user}}本人乘坐了摩天轮" }, { id: "M3", q: "主播会走进镜宫吗", yes: "会", no: "不会", p: 0.45, judge: "{{user}}本人进入了镜宫" }], zu = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], $u = {
  id: fu,
  name: pu,
  version: hu,
  level: mu,
  token: gu,
  legacyKeys: xu,
  detect: yu,
  time: vu,
  remaining: bu,
  phases: ku,
  events: wu,
  markets: _u,
  docs: zu
}, Su = "kaoshi", Eu = "考试", Cu = "1.1.0", Mu = "A", Iu = "【副本进行中：考试】", Tu = [], Pu = { briefingName: "考试" }, Nu = { type: "countdown", minutesPerRound: 3 }, ju = { type: "fromPanel" }, Ru = "至考试结束", Fu = [{ id: "main", name: "考试", cap: 100, next: null }], Ou = [], Lu = [], Du = {
  id: Su,
  name: Eu,
  version: Cu,
  level: Mu,
  token: Iu,
  legacyKeys: Tu,
  detect: Pu,
  time: Nu,
  remaining: ju,
  deadline: Ru,
  phases: Fu,
  events: Ou,
  docs: Lu
}, Bu = "xiyan", Vu = "喜宴", Uu = "1.2.0", Wu = "D", Hu = "【副本进行中：喜宴】", Gu = [], Yu = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, Ku = { type: "countdown", minutesPerRound: 3 }, qu = { type: "fromPanel" }, Ju = "至天亮", Zu = [{ id: "main", name: "喜宴", cap: 160, next: null }], Qu = [], Xu = [{ id: "M1", q: "主播会穿上喜服吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人穿上了喜服" }, { id: "M2", q: "这场婚礼的新人会是主播吗", yes: "是", no: "不是", p: 0.17, judge: "{{user}}被认定为这场婚礼的新郎或新娘", judgeNo: "{{user}}以外的某个人被认定为这场婚礼的新郎或新娘" }, { id: "M3", q: "天亮前会有人死吗", yes: "会", no: "不会", p: 0.4, judge: "有人死亡" }], ed = [], td = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], nd = {
  id: Bu,
  name: Vu,
  version: Uu,
  level: Wu,
  token: Hu,
  legacyKeys: Gu,
  detect: Yu,
  time: Ku,
  remaining: qu,
  deadline: Ju,
  phases: Zu,
  events: Qu,
  markets: Xu,
  docs: ed,
  danmaku: td
}, sd = "youxi", id = "游戏", rd = "1.2.0", od = "C", ld = "【副本进行中：游戏】", ad = [], cd = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Ad = { type: "countdown", minutesPerRound: 8 }, ud = { type: "fromPanel" }, dd = "至结算", fd = [{ id: "main", name: "游戏", cap: 90, next: null }], pd = [], hd = [{ id: "M1", q: "第一个出局的会是主播吗", yes: "是", no: "不是", p: 0.08, judge: "第一个被淘汰出局的人是{{user}}", judgeNo: "{{user}}以外的某个人成为第一个被淘汰出局的人" }, { id: "M2", q: "三场游戏能全部玩完吗", yes: "能", no: "不能", p: 0.55, judge: "第三场游戏结束" }, { id: "M3", q: "喊数抱团时主播会拉陌生人吗", yes: "会", no: "不会", p: 0.5, judge: "喊数抱团时，{{user}}主动拉了自己同伴以外的人一起抱团" }], md = [], gd = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], xd = {
  id: sd,
  name: id,
  version: rd,
  level: od,
  token: ld,
  legacyKeys: ad,
  detect: cd,
  time: Ad,
  remaining: ud,
  deadline: dd,
  phases: fd,
  events: pd,
  markets: hd,
  docs: md,
  danmaku: gd
}, yd = "wuming", vd = "污名", bd = "1.1.0", kd = "B", wd = "4-8", _d = "【副本进行中：污名】", zd = ["污名"], $d = { briefingName: "污名" }, Sd = { type: "countdown", minutesPerRound: 3 }, Ed = { type: "countdown", template: "剩余{m}分钟" }, Cd = "至收播", Md = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], Id = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], Td = [], Pd = !0, Nd = {
  id: yd,
  name: vd,
  version: bd,
  level: kd,
  players: wd,
  token: _d,
  legacyKeys: zd,
  detect: $d,
  time: Sd,
  remaining: Ed,
  deadline: Cd,
  phases: Md,
  events: Id,
  docs: Td,
  disableLive: Pd
}, jd = "dusongshu", Rd = "杜松树", Fd = "1.1.0", Od = "A", Ld = 6, Dd = "【副本进行中：杜松树】", Bd = [], Vd = { briefingName: "杜松树" }, Ud = { type: "countdown", minutesPerRound: 30 }, Wd = { type: "fromPanel" }, Hd = "至第四日日出", Gd = ["父亲", "继母", "玛琳", "男孩", "其余"], Yd = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", Kd = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], qd = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], Jd = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], Zd = [{ id: "M1", q: "第一夜会有人死在苹果箱里吗", yes: "会", no: "不会", p: 0.5, by: "n1", judge: "有人在苹果箱里被箱盖压死或死在箱中" }, { id: "M2", q: "主播会吃下锅里的炖肉吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人吃了灶上铁锅里炖的肉" }, { id: "M3", q: "杜松树上的鸟会开口吗", yes: "会", no: "不会", p: 0.6, judge: "杜松树上那只红绿羽毛的鸟开口说话或唱歌" }], Qd = [{ title: "游玩说明", md: `## 副本概况
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
最后一页被撕掉了，装订线上只剩一条不整齐的纸茬。` }], Xd = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], ef = {
  id: jd,
  name: Rd,
  version: Fd,
  level: Od,
  players: Ld,
  token: Dd,
  legacyKeys: Bd,
  detect: Vd,
  time: Ud,
  remaining: Wd,
  deadline: Hd,
  roles: Gd,
  rolesNote: Yd,
  phases: Kd,
  events: qd,
  stateFields: Jd,
  markets: Zd,
  docs: Qd,
  danmaku: Xd
}, tf = "nongxian", nf = "农闲", sf = "1.0.0", rf = "D", of = !0, lf = "不限", af = "【副本进行中：农闲】", cf = [], Af = { briefingName: "农闲" }, uf = { type: "none" }, df = { type: "fromPanel" }, ff = [], pf = [], hf = [{ title: "游玩说明", md: `## 系统简报

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
梅姨教新菜，会添在配方板上。` }], mf = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], gf = {
  id: tf,
  name: nf,
  version: sf,
  level: rf,
  rest: of,
  players: lf,
  token: af,
  legacyKeys: cf,
  detect: Af,
  time: uf,
  remaining: df,
  phases: ff,
  events: pf,
  docs: hf,
  danmaku: mf
}, xf = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function tn(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const yf = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function Lr(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(yf)) {
    const i = Number(s[1]), r = s[2];
    n = !0, r === "天" ? t += i * 1440 : r === "小时" || r === "个小时" || r === "h" || r === "H" ? t += i * 60 : t += i;
  }
  return n ? Math.round(t) : null;
}
function fl(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: Lr(t), total: n === void 0 ? null : Lr(n) };
}
function vf(e, t) {
  return e.phases.find((n) => n.id === t);
}
function jn(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); )
    n.push(i), s.add(i.id), i = vf(e, i.next);
  return n;
}
function pl(e, t) {
  return jn(e, t).filter((n) => n.night).length;
}
function bf(e, t, n) {
  if (jn(e, t).some((i) => i.id === n.id)) return t;
  const s = e.phases[0];
  return s && jn(e, s).some((i) => i.id === n.id) ? s : n;
}
function ri(e, t, n, s, i) {
  if (!e.phases.length || !e.phases.some((d) => d.id === t.id)) return;
  let r = jn(e, n), o = r.findIndex((d) => d.id === t.id);
  o < 0 && (r = jn(e, t), o = 0);
  const l = r.reduce((d, h) => d + Math.max(0, h.cap), 0), a = Math.max(0, t.cap - s) + r.slice(o + 1).reduce((d, h) => d + Math.max(0, h.cap), 0), c = t.deadline ?? r[0].deadline ?? e.deadline, A = { x: a, y: l, deadline: c };
  if (e.time.type === "countdown") {
    const d = e.time.minutesPerRound, h = e.time.totalMinutes, g = h && h > 0 ? h : l * d;
    let v = h && h > 0 && l > 0 ? Math.round(g * a / l) : a * d;
    const w = fl(i).remaining;
    w !== null && (v = Math.min(v, w - d)), v = Math.max(0, v), Object.assign(A, { minutes: v, total: g, text: `约剩${tn(v)}/${tn(g)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) A.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const d = e.remaining.template.replace("{n}", String(pl(e, t)));
      A.text = c ? `${c}·${d}` : d;
    } else c && (A.text = c);
  return A;
}
const Rn = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function hl(e, t, n = Rn) {
  const s = e ?? "", i = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), r = i ? Math.max(1, Number(i[1])) : Math.max(1, Math.round(n[t] ?? Rn[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: r };
  const l = Number(o[1]), a = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return a <= 0 ? { rounds: r } : { rounds: r, totalMinutes: a, minutesPerRound: Math.max(1, Math.round(a / r)) };
}
const xs = "generic", Si = [du, $u, Du, nd, xd, Nd, ef, gf], kf = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xf)
  }
};
function wf(e, t) {
  const n = kf[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const ml = ["D", "C", "B", "A", "S"];
function gl(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === xs && t.push(`id 不能是保留字 ${xs}`), ml.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((c) => typeof c != "string")) && t.push("detect.patterns 必须是文本数组");
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
  if (Array.isArray(n.events) ? n.events.forEach((c, A) => {
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
function _f(e) {
  const t = new Set(e.phases.map((n) => n.id));
  return (e.markets ?? []).filter((n) => n.by !== void 0 && !t.has(n.by) ? (console.warn(`[rlzc] 副本包 ${e.id} 的事件盘 ${n.id}：by「${n.by}」不是本包的阶段 id，已跳过`), !1) : !0);
}
function xl(e) {
  return ml.includes(e.level ?? "") ? e.level : "D";
}
function yl(e, t = Rn) {
  const n = xl(e), s = hl(e.limit, n, t), i = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, r = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / i)) : void 0;
  return {
    id: xs,
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
function Hi(e) {
  const t = new Set(Si.map((n) => n.id));
  return [...Si, ...e.filter((n) => !t.has(n.id))];
}
const zf = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, $f = /<阶段切换>([\s\S]*?)<\/阶段切换>/, Sf = /<副本结算>([\s\S]*?)<\/副本结算>/, vl = /<副本>([\s\S]*?)<\/副本>/, Ef = /<角色登记>([\s\S]*?)<\/角色登记>/, Cf = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, Mf = /<积分变动>([\s\S]*?)<\/积分变动>/g;
function bl(e) {
  const t = zf.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (o) => {
    const l = new RegExp(`${o}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return l ? l[1].trim() : void 0;
  }, r = i("等级");
  return r && (n.level = r.replace(/级$/, "").trim().toUpperCase()), n.goal = i("目标"), n.limit = i("时限"), n.players = i("人数"), n;
}
function If(e) {
  const t = $f.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function kl(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const i = n.slice(0, s).trim(), r = n.slice(s + 1).trim();
    i && (t[i] = r);
  }
  return t;
}
function Fs(e) {
  const t = Sf.exec(e ?? "");
  if (!t) return null;
  const n = kl(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function wl(e) {
  const t = Ef.exec(e ?? "");
  if (!t) return null;
  const n = kl(t[1]);
  return Object.keys(n).length ? n : null;
}
function es(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function _l(e) {
  const t = vl.exec(e ?? "");
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
      l === "时限" ? (n.limit = a, s = null) : l === "进度条" ? (n.progressBar = a, s = null) : l === "任务" ? (es(a) && n.tasks.push(es(a)), s = "tasks") : (n.ps = a, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(r)) {
      s = null;
      continue;
    }
    s === "tasks" ? es(r) && n.tasks.push(es(r)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${r}` : r);
  }
  return n;
}
function Tf(e) {
  const t = Cf.exec(e ?? "");
  return t ? t[2] : null;
}
function oi(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (n(i)) return i;
    s.add(i.id), i = i.next ? e.phases.find((r) => r.id === i.next) : void 0;
  }
  return null;
}
function Pf(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const i = (l) => !!l.clock && !l.night;
  let r = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      r = oi(e, t, i), o = r?.cap ?? 0;
      break;
    case "晚饭":
      r = oi(e, t, i), r && (o = Math.ceil(r.cap * 0.75), r.id === t.id && o <= n && (o = r.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      r = oi(e, t, (l) => !!l.night), o = r?.cap ?? 0;
      break;
  }
  return !r || r.id === t.id && o <= n + 1 ? null : { phase: r.id, round: o, label: `${r.name}第${o}轮` };
}
const Nf = /<状态栏>([\s\S]*?)<\/状态栏>/;
function jf(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function li(e, t) {
  const n = jf(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const ai = /* @__PURE__ */ new Map();
function Rf(e, t) {
  const n = `${e}\0${t}`;
  if (!ai.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (i) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, i);
    }
    ai.set(n, s);
  }
  return ai.get(n);
}
function Ff(e, t) {
  const n = String(e ?? ""), s = (l, a) => l ? { signal: a, pack: l, info: { name: l.name, level: l.level } } : null, i = bl(n);
  if (i)
    return { signal: 1, pack: t.find((a) => a.detect.briefingName === i.name), info: i };
  const r = vl.exec(n);
  if (r) {
    const l = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(r[1]), a = l && s(li(t, l[1]), 2);
    if (a) return a;
  }
  for (const l of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const a = s(li(t, l[1]), 3);
    if (a) return a;
  }
  const o = Nf.exec(n);
  if (o) {
    for (const l of o[1].split(`
`))
      if (l.includes("地点"))
        for (const a of l.matchAll(/副本《([^》]+)》/g)) {
          const c = s(li(t, a[1]), 4);
          if (c) return c;
        }
  }
  for (const l of t)
    for (const a of l.detect.patterns ?? []) {
      const c = Rf(l.id, a);
      if (c && c.test(n)) return s(l, 5);
    }
  return null;
}
const Dr = 5, Of = { id: "_open", name: "进行中", cap: 0, next: null };
function Ee(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function Lf(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function zl(e, t, n) {
  const s = Lf(e) + Math.max(0, n - 1) * t, i = Math.floor(s / 60) % 24, r = (s % 60 + 60) % 60;
  return `${i % 12 === 0 ? 12 : i % 12}:${String(r).padStart(2, "0")}`;
}
function Br(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return zl(e.time.dayStart, e.time.minutesPerRound, n);
}
function $l(e) {
  return e.phases.length ? e.phases : [Of];
}
function rs(e, t) {
  return $l(e).find((n) => n.id === t);
}
function Vr(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (i.id === n) return !0;
    s.add(i.id), i = rs(e, i.next);
  }
  return !1;
}
function Ur(e, t, n, s) {
  const i = n + 1, r = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > i) {
      let l = r.map((c, A) => ({ e: c, i: A })).filter(({ e: c }) => c.from >= i && c.from <= o).sort((c, A) => c.e.from - A.e.from || c.i - A.i).map(({ e: c }) => c), a = o;
      return l.length > Dr && (a = l[Dr - 1].from, l = l.filter((c) => c.from <= a)), { phase: t, round: a, events: l, skipFrom: i };
    }
  }
  return { phase: t, round: i, events: r.filter((o) => o.from === i) };
}
function Sl(e, t, n) {
  const s = t.entryIndex;
  if (!Ee(e[s])) return null;
  const i = $l(n);
  let r = i[0], o = i[0], l = 0, a, c = !1, A, d, h = null, g, v, w;
  const L = /* @__PURE__ */ new Set(), V = {}, T = {}, y = /* @__PURE__ */ new Map();
  for (const X of t.manual ?? [])
    y.has(X.atIndex) || y.set(X.atIndex, []), y.get(X.atIndex).push(X);
  const x = (X, ft) => {
    T[r.id] === void 0 && X.id !== r.id && (T[r.id] = ft), n.phases.length && (o = bf(n, o, X)), r = X, l = 0, h && !Vr(n, r, h.phase) && (h = null);
  };
  for (let X = s; X < e.length; X++) {
    const ft = e[X];
    if (!c && Ee(ft)) {
      const ve = Ur(n, r, l, h);
      l = ve.round;
      const pt = new Set((ft.extra?.rlzc?.skippedEvents ?? []).map((be) => be.id));
      ve.events.forEach((be) => {
        pt.has(be.id) || L.add(be.id);
      }), V[X] = {
        phase: r.id,
        round: l,
        events: ve.events.map((be) => be.id),
        skipFrom: ve.skipFrom,
        limit: ri(n, r, o, l, a)
      }, h && r.id === h.phase && l >= h.round && (h = null);
      const ht = String(ft.mes ?? ""), Ct = _l(ht);
      Ct && (v = Ct), a = Ct?.limit;
      const Yn = wl(ht);
      Yn && (w = Yn);
      const An = Fs(ht);
      if (An)
        c = !0, A = "tag", d = X, g = An;
      else {
        const be = If(ht), Me = be ? i.find((Mt) => Mt.name === be) : void 0;
        if (Me && n.phases.length)
          x(Me, X);
        else if (r.cap > 0 && l >= r.cap && r.next) {
          const Mt = rs(n, r.next);
          Mt && x(Mt, X);
        }
      }
    }
    for (const ve of y.get(X) ?? []) {
      if (c) break;
      switch (ve.kind) {
        case "skip": {
          h = rs(n, ve.targetPhase) && Vr(n, r, ve.targetPhase) ? { phase: ve.targetPhase, round: ve.targetRound } : null;
          break;
        }
        case "setPhase": {
          const pt = rs(n, ve.phase);
          pt && (h = null, x(pt, X));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(ve.round)), h = null;
          break;
        case "end":
          c = !0, A = "manual", d = X;
          break;
      }
    }
  }
  const _ = c ? null : Ur(n, r, l, h), O = _ ? _.round : l + 1, D = r.cap > 0, E = n.events.filter((X) => L.has(X.id)).map((X) => X.id), b = c ? void 0 : ri(n, r, o, O, a), U = c ? void 0 : ri(n, r, o, l);
  let we;
  const Ve = n.remaining;
  return !c && Ve.type === "nights" && n.phases.length && !r.byTag && !r.frozen ? we = Ve.template.replace("{n}", String(pl(n, r))) : !c && Ve.type === "countdown" && b?.minutes !== void 0 && (we = Ve.template.replace("{m}", String(b.minutes))), {
    phase: r,
    round: l,
    nextRound: O,
    clock: c ? void 0 : Br(n, r, O),
    currentClock: Br(n, r, l),
    remainingText: we,
    limit: b,
    roundsLeft: U ? { x: U.x, y: U.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: c,
    endedBy: A,
    endIndex: d,
    firedEvents: E,
    warn: !c && D && O >= r.cap - 2,
    isLastRound: !c && D && O === r.cap,
    overdue: !c && D && !r.next && O > r.cap,
    next: _,
    skipGoal: h,
    settlement: g,
    panel: v,
    rolesFromChat: w,
    perMessage: V,
    phaseEnds: T,
    entryIndex: s
  };
}
const El = "rlzc_token", Cl = "rlzc_progress", Ml = "rlzc_turn", Il = "rlzc_state", Tl = "rlzc_ledger", Pl = "rlzc_live", Df = [El, Cl, Ml, Il, Tl, Pl], Fn = { token: "", progress: "", turn: "", injected: [] };
function Bf(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ys(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const i = new RegExp(`(?<!\\{)\\{(${s.map(Bf).join("|")})\\}(?!\\})`, "g");
  return e.replace(i, (r, o) => n?.[o]?.trim() || o);
}
function Vf(e, t) {
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
function Wr(e, t, n, s = !1) {
  let i = ys(e.text, t, n);
  return e.to > e.from && (i = `在本阶段第${e.from}到${e.to}轮之间发生：${i}`), e.if && !s && (i += `（条件：${ys(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${i}`;
}
function Uf(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Wf(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...Fn, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return Fn;
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
    const y = e.roles.filter((x) => i?.[x]);
    c.push(
      y.length ? `角色登记：${e.roles.map((x) => `${x}=${i?.[x] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const A = Vf(e, t.firedEvents);
  A && c.push(`已发生事件：${A}`);
  const d = [];
  o.skipFrom !== void 0 && d.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const h = new Map((s.subNext ?? []).map((y) => [y.id, y])), g = o.events.filter((y) => y.if && h.get(y.id)?.ok === !1).map((y) => ({ id: y.id, reason: h.get(y.id).reason })), v = o.events.filter((y) => !g.some((x) => x.id === y.id)), w = (y) => !!y.if && h.get(y.id)?.ok === !0, L = v.filter((y) => y.kind === "event"), V = v.filter((y) => y.kind === "directive");
  if (L.length && (d.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), L.forEach((y) => d.push(Wr(y, e, i, w(y))))), V.length && (d.push("本轮写作要求："), V.forEach((y) => d.push(Wr(y, e, i, w(y))))), t.isLastRound ? d.push(Uf(t)) : t.overdue && d.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && d.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && d.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((y) => i?.[y])) {
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
const Hf = 1, Gf = 0;
function ce() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function Yf() {
  const e = ce();
  return e.eventTypes ?? e.event_types ?? {};
}
function mt(e, t) {
  const n = Yf()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  ce().eventSource.on(n, t);
}
function q() {
  return ce().chat ?? [];
}
function on() {
  const e = ce();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function tt() {
  return ce().chatMetadata ?? {};
}
function nt() {
  const e = ce();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Nt(e, t, n, s) {
  ce().setExtensionPrompt(e, t, Hf, n, s, Gf);
}
function Ce(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function St(e) {
  const t = ce();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function Hr(e, t = "") {
  const n = ce();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const i = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof i == "string" ? i : null;
  }
  return window.prompt(e, t);
}
async function Nl(e, t) {
  const n = ce(), s = document.createElement("div"), i = document.createElement("div");
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
const Ut = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function jl(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function Kf(e, t = Ut) {
  return t.length ? e.replace(jl(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function Rl(e, t = Ut, n = !1) {
  const s = q()[e];
  if (!s || s.is_user) return;
  const i = String(s.extra?.display_text ?? s.mes ?? "");
  if (!jl(n ? Ut : t, "").test(i)) return;
  const r = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!r) return;
  const o = ce().messageFormatting;
  if (typeof o != "function") return;
  const l = o(Kf(i, t), s.name ?? "", !!s.is_system, !1, e);
  r.innerHTML !== l && (r.innerHTML = l);
}
function qf(e = Ut, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && Rl(s, e, t);
  });
}
const Jf = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function Fl(e) {
  return e.stateFields?.length ? e.stateFields : [Jf];
}
const Zf = [...Ut, "状态栏"], Qf = new RegExp(`<(${Zf.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function Ol(e) {
  return String(e ?? "").replace(Qf, "").replace(/\n{3,}/g, `

`).trim();
}
function Xf(e) {
  const t = Fl(e.pack), n = e.markets ?? [], s = [
    "你是角色扮演副本的记录员，不写剧情，只整理事实。",
    "根据本轮正文完成三件事：",
    "1. 事件核对：逐条判断「本轮后台事件」在正文里是 done（已发生）、missed（该发生但没写出来）还是 void（条件已不成立，不该发生），各附一句理由。后台事件即使{{user}}看不到，只要正文与之不矛盾、且没有写出相反的事实，就算 done。标明「第X到Y轮之间」的事件不一定在本轮写出：本轮没写到、也没写出相反的事实，同样算 done。",
    "2. 隐藏状态：在「上一轮状态」的基础上更新下列字段，只依据正文里已经发生的事实，没有变化就照抄上一轮：",
    ...t.map((a) => `   - ${a.key}（${a.label}）：${a.hint}`),
    "3. 条件预判：逐条判断「下一轮事件」的条件现在是否仍成立（ok 为 true/false），附一句理由。",
    "4. hype：0–100 整数，按本轮正文的紧张、冲突、转折打分；hurt：true/false，本轮正文是否有人受伤或死亡。这两项只写数字和真假，不写理由。",
    ...n.length ? ["5. markets：逐条判断「盘口陈述」，只有本轮正文明确写到才填 true，否则填 false，不写理由。"] : [],
    "只输出一个 JSON 对象，不要任何解释，格式：",
    n.length ? `{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}],"hype":50,"hurt":false,"markets":{${n.map((a) => `"${a.id}":false`).join(",")}}}` : '{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}],"hype":50,"hurt":false}',
    "没有本轮事件时 events 为 []；没有下一轮事件时 next 为 []。"
  ].join(`
`), i = (a) => a.to > a.from ? `（本阶段第${a.from}到${a.to}轮之间）` : "", r = e.events.length ? e.events.map((a) => `- ${a.id}${i(a)}：${a.text}${a.if ? `（条件：${a.if}）` : ""}`).join(`
`) : "（无）", o = e.nextConditional.length ? e.nextConditional.map((a) => `- ${a.id}：${a.text}（条件：${a.if}）`).join(`
`) : "（无）", l = [
    `【副本】${e.pack.name}　阶段：${e.phaseName}　第${e.round}轮`,
    `【上一轮状态】${e.prevState ? JSON.stringify(e.prevState) : "（尚无，请根据正文建立）"}`,
    `【本轮后台事件】
${r}`,
    `【下一轮事件】
${o}`,
    ...n.length ? [`【盘口陈述】
${n.map((a) => `- ${a.id}：${a.judge}`).join(`
`)}`] : [],
    `【本轮正文】
${Ol(e.text)}`
  ].join(`

`);
  return { system: s, user: l };
}
function ep(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class $e extends Error {
}
function tp(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), i = t.lastIndexOf("}");
  if (s < 0 || i <= s) throw new $e("返回里没有 JSON");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new $e("返回的 JSON 无法解析");
  }
  if (!r || typeof r != "object" || Array.isArray(r)) throw new $e("返回的不是 JSON 对象");
  if (!r.state || typeof r.state != "object" || Array.isArray(r.state)) throw new $e("缺少 state");
  const o = ["done", "missed", "void"], l = (Array.isArray(r.events) ? r.events : []).filter((d) => d && typeof d.id == "string" && o.includes(d.status)).map((d) => ({ id: d.id, status: d.status, reason: String(d.reason ?? "") })), a = (Array.isArray(r.next) ? r.next : []).filter((d) => d && typeof d.id == "string" && typeof d.ok == "boolean").map((d) => ({ id: d.id, ok: d.ok, reason: String(d.reason ?? "") })), c = { events: l, state: r.state, next: a }, A = typeof r.hype == "number" ? r.hype : typeof r.hype == "string" && r.hype.trim() !== "" ? Number(r.hype) : NaN;
  if (Number.isFinite(A) && (c.hype = Math.max(0, Math.min(100, Math.round(A)))), typeof r.hurt == "boolean" ? c.hurt = r.hurt : (r.hurt === "true" || r.hurt === "false") && (c.hurt = r.hurt === "true"), r.markets && typeof r.markets == "object" && !Array.isArray(r.markets)) {
    const d = {};
    for (const [h, g] of Object.entries(r.markets))
      typeof g == "boolean" ? d[h] = g : (g === "true" || g === "false") && (d[h] = g === "true");
    c.markets = d;
  }
  return c;
}
function np(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function sp(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((i) => String(i ?? "")).join("|");
  return `${e}:${t}:${s}:${np(String(n?.mes ?? ""))}`;
}
function ip(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function rp(e, t, n = 2) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return tp(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
class Ll extends Error {
}
function Os(e) {
  if (e instanceof Ll) return "超时";
  if (e instanceof $e) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function Dl(e) {
  return e?.extra?.rlzc;
}
function Ls(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Ee(s)) continue;
    const i = Dl(s)?.sub;
    if (i?.state && !i.skipped) return { index: n, state: i.state };
  }
  return null;
}
function op(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Ee(s)) continue;
    const i = Dl(s)?.sub;
    return i && !i.skipped && Array.isArray(i.next) ? i.next : void 0;
  }
}
function vs(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => vs(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${vs(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function Bl(e, t) {
  const n = Fl(e), s = new Set(n.map((r) => r.key)), i = n.filter((r) => t[r.key] !== void 0).map((r) => `${r.label}：${vs(t[r.key])}`);
  for (const [r, o] of Object.entries(t)) s.has(r) || i.push(`${r}：${vs(o)}`);
  return i.length ? ["［副本状态·仅供AI］", ...i].join(`
`) : "";
}
const lp = "你在写回廊直播间的观众弹幕。观众是回廊里的其他玩家，只看得到直播画面。什么人都有：夸赞、祝福、讨论、泼冷水、嫉妒、抹黑、造谣，正面的稍多。每条30字以内，口语，称{{user}}为主播，不用性别代词。只能根据画面里已经发生的事说话，不猜测、不透露画面外的信息。", ap = ["praise", "bless", "discuss", "cold", "envy", "smear", "rumor"];
function cp(e) {
  if (!e.aiSource || !e.subOn) return !1;
  const t = Math.max(1, Math.min(10, Math.floor(e.freq) || 3));
  return e.roundInShow > 0 && e.roundInShow % t === 0 ? !0 : e.phaseSwitch || e.hurt || e.eventDone;
}
function Vl(e) {
  return String(e ?? "").replace(/<(副本|状态栏|阶段切换|副本结算|角色登记|积分变动|直播|thinking|think)>[\s\S]*?<\/\1>/g, "").replace(/<\/?[A-Za-z一-龥][^<>]*>/g, "").replace(/\n{3,}/g, `

`).trim();
}
function Ap(e, t, n) {
  const s = e.map((o) => o.text), i = [], r = /* @__PURE__ */ new Set();
  for (let o = 0; o < t * 10 && i.length < Math.min(t, s.length); o++) {
    const l = Math.floor(n() * s.length);
    r.has(l) || (r.add(l), i.push(s[l]));
  }
  return i;
}
function up(e) {
  const t = [
    lp,
    "只输出一个 JSON 数组，8–12条，不要任何解释，格式：",
    '[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]'
  ].join(`
`), n = [
    `【直播间】${e.scene}`,
    `【在场角色】${e.cast.length ? e.cast.join("、") : "（无）"}`,
    `【最近两轮画面】
${e.texts.map((s) => Vl(s)).filter(Boolean).join(`

`) || "（无）"}`,
    `【语气示例】
${e.samples.map((s) => `- ${s}`).join(`
`)}`
  ].join(`

`);
  return { system: t, user: n };
}
function dp(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), i = t.lastIndexOf("]");
  if (s < 0 || i <= s) throw new $e("返回里没有 JSON 数组");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new $e("返回的 JSON 无法解析");
  }
  if (!Array.isArray(r)) throw new $e("返回的不是 JSON 数组");
  const o = r.filter((l) => l && typeof l.text == "string" && l.text.trim()).map((l) => ({
    type: ap.includes(l.type) ? l.type : "discuss",
    name: typeof l.name == "string" && l.name.trim() ? l.name.trim().slice(0, 16) : "匿名",
    text: l.text.trim()
  })).slice(0, 12);
  if (!o.length) throw new $e("返回的弹幕为空");
  return o;
}
async function fp(e, t, n = 1) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return dp(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
function pp(e) {
  return e.t === "tip" ? `${e.name} 打赏${e.amount}` : `${e.name}：${e.text}`;
}
function hp(e, t = 5) {
  if (!e.on) return "";
  const n = e.feed.filter((i) => i.t === "msg" || i.t === "tip").slice(-t), s = `［直播·仅供AI］{{user}}正在直播，约${e.viewers}人在看。`;
  return n.length ? `${s}最近弹幕：${n.map(pp).join("／")}` : s;
}
const Ul = 1500;
function Wl() {
  return ce().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function Hl(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Gl(e, t) {
  const n = new AbortController();
  let s;
  const i = new Promise((r, o) => {
    s = setTimeout(() => {
      n.abort(), o(new Ll(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), i]);
  } finally {
    clearTimeout(s);
  }
}
function Yl(e, t) {
  const n = t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : "") ?? "", s = new Error(`${e || ""} ${n}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return s.status = e, s;
}
async function Kl(e, t, n, s = Ul, i = 0.2) {
  const r = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: Wl(),
    signal: n,
    body: JSON.stringify({
      ...Hl(e),
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
  if (!r.ok || l?.error) throw Yl(r.status === 200 ? 0 : r.status, l);
  const a = l?.choices?.[0]?.message?.content ?? l?.choices?.[0]?.text ?? l?.content;
  if (typeof a != "string") throw new Error("返回里没有正文");
  return a;
}
async function mp(e) {
  const t = ce();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function Gi(e, t, n = {}) {
  return Gl(e.timeoutMs, (s) => {
    if (e.source === "main") return mp(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return Kl(e.preset, t, s, Ul, n.temperature ?? 0.2);
  });
}
async function ql(e) {
  const t = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: Wl(),
    body: JSON.stringify(Hl(e))
  }), n = await t.json().catch(() => null);
  if (!t.ok || n?.error) throw Yl(t.status, n);
  return (Array.isArray(n) ? n : Array.isArray(n?.data) ? n.data : Array.isArray(n?.models) ? n.models : []).map((i) => typeof i == "string" ? i : i?.id ?? i?.name).filter(Boolean).sort();
}
async function gp(e, t) {
  const n = await ql(e).catch(() => []), s = { ...e, model: e.model || n[0] || "" }, i = await Gl(
    t,
    (r) => Kl(s, { system: "只回复 OK。", user: "ping" }, r, 5)
  );
  return { models: n, reply: i };
}
const Jl = "rlzc_ledger", Kt = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, xp = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function yp(e) {
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
function ut(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), i = String(t.getHours()).padStart(2, "0"), r = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${i}:${r}`;
}
function Yi(e) {
  const t = /等级[：:]\s*([DCBAS])/.exec(e);
  return t ? t[1] : null;
}
function Zl(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function vp(e, t, n, s, i, r = "") {
  const o = n.结果 ?? "", l = (n.评价 ?? "").toUpperCase().trim(), a = ["D", "C", "B", "A", "S"].includes(l) ? l : null, c = o === "通关" || o === "成功" || o === "胜利", A = o === "失败", d = o === "死亡" || o === "阵亡";
  if (!c && !A && !d)
    return { delta: 0, source: "" };
  if (d)
    return { delta: 0, source: "" };
  if (A)
    return i ? { delta: 0, source: "清算未通关" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣除30%" };
  if (i) {
    const T = Kt[t] + 500;
    return { delta: Math.max(0, T - s), source: "清算通关·续存至斩杀线+500", clearWin: !0 };
  }
  if (!a)
    return { delta: 0, source: "", warn: "评价缺失或无法识别，不发奖励" };
  let h = xp[e][a];
  const g = r || e, v = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", w = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", L = e !== t;
  let V = `副本奖励·${g} ${a}评`;
  return v ? (h = Math.floor(h * 0.5), V += "（×50%）") : (w || L) && (h = Math.floor(h * 0.6), V += "（×60%）"), { delta: h, source: V };
}
function ln(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function Vn(e, t, n) {
  let s = e, i = !1;
  for (const r of t)
    s += r.delta, s < n && (i = !0), r.clear && (i = !1);
  return i;
}
function bp(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function kp(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const i = s ?? Kt[n], r = Math.max(0, i - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${r}分（${n}级斩杀线${i}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const bt = "rlzc";
function wp() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function _p(e, t, n) {
  return {
    id: wp(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function zp(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function Ql(e, t) {
  return e.packId === xs ? e.briefing ? yl(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function $p(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return Ee(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function Sp(e, t) {
  const n = $p(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((i) => ({ ...i, atIndex: i.atIndex + s }))), t.manual = t.manual.filter((i) => i.atIndex < e.length && i.atIndex >= t.entryIndex), !0;
}
function Xl(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Gr = "rlzc_declined";
function Ki(e, t) {
  return `${e}:${t}`;
}
const ea = Ee;
function Ds(e, t, n) {
  if (!ea(e[t])) return null;
  const s = Ff(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function Ep(e, t, n, s, i = []) {
  for (let r = Math.max(0, n); r <= Math.min(s, e.length - 1); r++) {
    const o = Ds(e, r, t);
    if (o && !i.includes(Ki(r, o.info.name))) return o;
  }
  return null;
}
function Cp(e, t, n = [], s = Si, i = 0) {
  if (t?.status === "active") return null;
  let r = -1;
  for (let l = Math.max(0, i); l < e.length; l++) if (ea(e[l])) {
    r = l;
    break;
  }
  if (r < 0 || t && t.entryIndex === r) return null;
  const o = Ds(e, r, s);
  return !o || n.includes(Ki(r, o.info.name)) ? null : o;
}
const Mp = /[■█▰●◆★▮▓]/g, Ip = /[□░▱○◇☆▯▒]/g;
function Tp(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const r = Number(n[2]);
    return r === 100 ? Number(n[1]) : r > 0 ? Math.round(Number(n[1]) / r * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(Mp) ?? []).length, i = (t.match(Ip) ?? []).length;
  return s + i > 0 ? Math.round(s / (s + i) * 100) : null;
}
function Yr(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function Pp(e, t) {
  return Yr(e).includes(Yr(t));
}
function Np(e, t, n) {
  const s = [], i = Object.keys(n.perMessage).map(Number).sort((a, c) => a - c);
  let r = !1, o = null, l = !1;
  for (const a of i) {
    const c = n.perMessage[a], d = t.phases.find((y) => y.id === c.phase)?.name ?? "进行中", h = (y, x) => s.push({ index: a, phase: d, round: c.round, kind: y, text: x }), g = e[a]?.extra?.rlzc;
    for (const y of g?.sub?.events ?? []) y.status === "missed" && h("eventMissed", `${y.id} 未写出来：${y.reason}`);
    for (const y of g?.skippedEvents ?? []) h("eventSkipped", `${y.id} 条件不成立，已跳过：${y.reason}`);
    const v = _l(String(e[a]?.mes ?? "")), w = a === n.entryIndex;
    if (!v) {
      w || h("missing", "本轮回复缺少 <副本> 面板"), l = !w;
      continue;
    }
    l = !1;
    const L = Tp(v.progressBar);
    v.progressBar === void 0 ? h("progressUnreadable", "<副本> 中没有进度条一栏") : L === null ? h("progressUnreadable", `进度条无法读出数值：「${v.progressBar}」`) : (!r && L !== 0 && h("progressStart", `入场后第一轮的进度条应为0，实际为 ${L}`), (L < 0 || L > 100) && h("progressRange", `进度条数值 ${L} 超出 0–100`), o !== null && L < o && h("progressDrop", `进度条比上一轮低：${o} → ${L}`), o = L), r = !0;
    const V = e[a]?.extra?.rlzc?.limit, T = V?.text ? V : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (T) {
      const y = v.limit;
      if (T.minutes !== void 0) {
        const x = fl(y);
        !y || x.remaining === null || x.total === null ? h("limit", `时限读不到「剩余时间/总时长」：写的是「${y ?? "（没有时限一栏）"}」，注入的是「${T.text}」`) : (x.remaining > T.minutes && h("limit", `剩余时间比注入值多：写的是${tn(x.remaining)}，注入的是${tn(T.minutes)}`), T.total !== void 0 && x.total !== T.total && h("limit", `总时长与注入值不一致：写的是${tn(x.total)}，注入的是${tn(T.total)}`));
      } else (!y || !Pp(y, T.text)) && h("limit", `时限与注入文字不一致：写的是「${y ?? "（没有时限一栏）"}」，注入的是「${T.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: r };
}
const jp = {
  D: 2e3,
  C: 8e3,
  B: 3e4,
  A: 1e5,
  S: 3e5
}, Rp = [
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
function ta(e) {
  return Rp.some((t) => e.includes(t));
}
function Fp(e) {
  if (e.subHype !== void 0)
    return Math.max(0, Math.min(100, Math.round(e.subHype)));
  const t = e.subHurt !== void 0 ? e.subHurt : e.bodyText ? ta(e.bodyText) : !1;
  let n = 20;
  return e.hasEvents && (n += 20), e.hasPhaseSwitch && (n += 20), t && (n += 30), Math.min(100, n);
}
function Op(e, t) {
  return Math.round(e * 0.6 + t * 0.4);
}
function qi(e) {
  const t = !e.packLevel || e.isRest ? e.playerLevel : e.packLevel, n = jp[t], s = !e.packLevel || e.isRest ? 0.3 : 1;
  return Math.round(n * s * (0.5 + e.heat / 100) * e.rand);
}
const Lp = [10, 20, 50, 100, 200, 500, 1e3], Dp = [20, 25, 15, 20, 10, 8, 2], Bp = [15, 20, 15, 20, 10, 16, 4];
function Vp(e, t, n) {
  const s = t.reduce((r, o) => r + o, 0);
  let i = n * s;
  for (let r = 0; r < e.length; r++)
    if (i -= t[r], i <= 0) return e[r];
  return e[e.length - 1];
}
function Up(e) {
  const { hype: t, isCorr: n, rand: s, names: i } = e, r = t / 40, o = [], l = [], a = t >= 70 ? Bp : Dp;
  for (let h = 1; h <= 3; h++) {
    const g = Math.min(1, Math.max(0, r - (h - 1)));
    if (s() < g) {
      let v = Vp(Lp, a, s());
      n && (v = Math.max(10, Math.round(v * 0.3 / 10) * 10)), o.push(v), l.push(i[Math.floor(s() * i.length)] ?? "匿名");
    }
  }
  const c = o.reduce((h, g) => h + g, 0), A = Math.floor(c * 0.6);
  let d = "";
  return o.length === 1 ? d = `直播打赏${o[0]}×60%` : o.length > 1 && (d = `直播打赏${o.length}笔·共${c}×60%`), { count: o.length, totalFace: c, faces: o, netTotal: A, source: d, names: l };
}
function ci(e, t, n, s, i, r, o) {
  const l = t && !n;
  return !(e.scope === "inst" && !l || e.scope === "corr" && l || e.when === "hurt" && !s || e.when === "calm" && i >= 30 || e.when === "open" && !r || e.when === "end" && !o);
}
function Wp(e) {
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
    whoNames: g,
    rand: v
  } = e, w = 5 + Math.floor(v() * 4), L = [], V = new Set(d), T = t.filter(
    (E) => ci(E, r, o, l, a, c, A)
  ), x = g.length > 0 ? n.filter(
    (E) => ci(E, r, o, l, a, c, A)
  ) : [], _ = s.filter((E) => ci(E, r, o, l, a, c, A) ? E.phase && E.phase.length > 0 && i ? E.phase.includes(i) : !0 : !1), O = () => h[Math.floor(v() * h.length)] ?? "匿名", D = () => g[Math.floor(v() * g.length)] ?? "";
  for (let E = 0; E < w * 5 && L.length < w; E++) {
    let b = "", U = "discuss";
    if (_.length > 0 && v() < 0.3) {
      const Ve = _[Math.floor(v() * _.length)];
      b = Ve.text, U = Ve.type;
    } else if (x.length > 0 && v() < 0.5) {
      const X = x[Math.floor(v() * x.length)];
      b = X.text.replace("{who}", D()), U = X.type;
    } else if (T.length > 0) {
      const X = T[Math.floor(v() * T.length)];
      b = X.text, U = X.type;
    }
    !b || V.has(b) || (V.add(b), L.push({ name: O(), text: b, type: U }));
  }
  return L;
}
const na = "rlzc_live", Hp = "本局直播打赏撤回", sa = 20, Wt = {
  corridorOn: "回廊直播开始。",
  corridorOff: "已下播。",
  enterOff: "进入副本，回廊直播已结束。",
  instanceOn: "本局副本直播开始。",
  instanceOff: "副本结束，直播已下播。",
  revoke: "主播在副本中死亡，本局打赏已全部撤回。"
};
function Gp(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.corridor ?? {};
  return {
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0,
    corridor: { on: !!n.on, show: typeof n.show == "string" ? n.show : "", viewers: Number.isFinite(n.viewers) ? n.viewers : void 0 },
    sys: Array.isArray(t.sys) ? t.sys.filter((s) => s && typeof s.id == "number") : []
  };
}
function ia(e, t) {
  return e.disableLive ? { show: !1, checked: !1 } : { show: !0, checked: !!t };
}
function qt(e) {
  const t = e?.extra?.rlzc?.live;
  return t && typeof t.show == "string" && Array.isArray(t.feed) ? t : void 0;
}
function Ji(e, t, n = e.length) {
  const s = [];
  for (let i = 0; i < Math.min(n, e.length); i++) {
    const r = e[i];
    if (!r || r.is_user) continue;
    const o = qt(r);
    o && o.show === t && s.push({ index: i, rec: o });
  }
  return s;
}
function ra(e, t) {
  return Ji(e, t).reduce((n, { rec: s }) => n + (s.tipNet || 0) - (s.revoke || 0), 0);
}
function Zi(e, t) {
  let n = t.seq;
  for (const s of t.sys) n = Math.max(n, s.id);
  for (const s of e) for (const i of qt(s)?.feed ?? []) n = Math.max(n, i.id);
  return n;
}
function Yp(e, t = 30) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const i = qt(e[s])?.feed ?? [];
    for (let r = i.length - 1; r >= 0 && n.length < t; r--) i[r].t === "msg" && n.push(i[r].text);
  }
  return n;
}
const oa = /<状态栏>([\s\S]*?)<\/状态栏>/, Kp = /^(积分|位格|道具|在场)$/, qp = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;
function la(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const i = oa.exec(s.mes);
    if (i) return i[1];
  }
  return null;
}
function Bs(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const i = oa.exec(s.mes);
    if (!i) continue;
    const r = /等级[：:]\s*([DCBAS])/.exec(i[1]);
    if (r) return r[1];
  }
  return "D";
}
function aa(e, t = "") {
  if (!e) return [];
  const n = [];
  let s = null;
  for (const r of e.split(`
`)) {
    const o = r.trim();
    if (!o || /^[━─—=\-]{3,}$/.test(o)) continue;
    const l = qp.exec(o);
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
    if (o === 0 && [...r.keys].some((a) => Kp.test(a))) return;
    const l = r.name.replace(/[（(][\s\S]*$/, "").trim();
    !l || /^(陌生|路人)/.test(l) || l === "{{user}}" || t && l === t || i.includes(l) || i.push(l);
  }), i;
}
function Jp(e) {
  const { rand: t } = e, n = Ol(e.text), s = e.sub?.hurt !== void 0 ? e.sub.hurt : ta(n), i = Fp({ subHype: e.sub?.hype, subHurt: s, hasEvents: e.hasEvents, hasPhaseSwitch: e.hasPhaseSwitch, bodyText: n }), r = Op(e.prevHeat ?? sa, i), o = e.scope === "corridor" || e.isRest, l = qi({
    packLevel: e.scope === "instance" ? e.packLevel : null,
    playerLevel: e.playerLevel,
    isRest: e.isRest,
    heat: r,
    rand: 0.9 + t() * 0.2
  }), a = Wp({
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
  }), c = Up({ hype: i, isCorr: o, rand: t, names: e.names }), A = [...a, ...e.extraDanmaku ?? []].map((v) => ({ t: "msg", name: v.name, text: v.text, amount: 0, net: 0 }));
  for (let v = A.length - 1; v > 0; v--) {
    const w = Math.floor(t() * (v + 1));
    [A[v], A[w]] = [A[w], A[v]];
  }
  c.faces.forEach((v, w) => {
    const L = A.length ? 1 + Math.floor(t() * A.length) : 0;
    A.splice(Math.min(L, A.length), 0, { t: "tip", name: c.names[w], text: "", amount: v, net: Math.floor(v * 0.6) });
  });
  let d;
  e.settle && (e.settle.died && (d = e.settle.tipsBefore + c.netTotal, d > 0 ? A.push({ t: "sys", name: "", text: Wt.revoke, amount: 0, net: -d }) : d = void 0), A.push({ t: "sys", name: "", text: Wt.instanceOff, amount: 0, net: 0 }));
  const h = A.map((v, w) => ({ id: e.firstId + w, ...v })), g = {
    show: e.show,
    scope: e.scope,
    hype: i,
    heat: r,
    viewers: l,
    hurt: s,
    feed: h,
    tipNet: c.netTotal,
    tipFace: c.totalFace,
    tipSource: c.source
  };
  return d && (g.revoke = d), g;
}
function Zp(e, t) {
  if (!e) return [];
  const n = [];
  return e.tipNet > 0 && n.push({ delta: e.tipNet, source: e.tipSource, type: "tip", at: t }), e.revoke && e.revoke > 0 && n.push({ delta: -e.revoke, source: Hp, type: "tip", at: t }), n;
}
function Qp(e) {
  return `其中本局直播打赏${e}分，副本内不可使用，离开副本后可用。`;
}
function Xp(e, t) {
  return e && `${e}${e.endsWith("。") ? "" : "。"}${Qp(t)}`;
}
function eh(e, t, n) {
  const s = Ji(e, n), i = [];
  for (const { rec: r } of s) i.push(...r.feed);
  for (const r of t.sys) r.show === n && i.push({ id: r.id, t: r.t, name: r.name, text: r.text, amount: r.amount, net: r.net });
  return i.sort((r, o) => r.id - o.id), { items: i, last: s[s.length - 1]?.rec };
}
function th(e, t) {
  let n = "", s = -1;
  for (const i of t.sys) i.id > s && (s = i.id, n = i.show);
  for (const i of e) {
    const r = qt(i);
    if (r)
      for (const o of r.feed) o.id > s && (s = o.id, n = r.show);
  }
  return n;
}
function nh(e, t, n, s = /* @__PURE__ */ new Set()) {
  const i = n.inInstance ? "instance" : "corridor", r = n.inInstance ? n.instanceLive : t.corridor.on, o = n.inInstance ? n.instanceLive ? n.instanceShow ?? "" : "" : r ? t.corridor.show : th(e, t), l = { on: r, canToggle: !n.inInstance, scope: i, viewers: 0, heat: 0, tipTotal: 0, injectToAI: n.injectToAI, feed: [], lastTip: null };
  if (!o) return l;
  const { items: a, last: c } = eh(e, t, o), A = a.filter((g) => !s.has(g.id));
  let d = 0, h = null;
  for (const g of A)
    d += g.net, g.t === "tip" && (h = { id: g.id, net: g.net });
  return {
    ...l,
    viewers: r ? c?.viewers ?? n.startViewers ?? 0 : 0,
    heat: r ? c?.heat ?? sa : 0,
    tipTotal: d,
    feed: A.slice(-60),
    lastTip: h
  };
}
const sh = ["小满", "好运来", "路过的D级", "一个路过的A级", "数据党", "理性讨论", "吃瓜", "夜班保安", "柠檬汁", "阿柒", "东区卖菜的", "西区摆摊的", "情报社小号", "失眠第三天", "房租交不起", "今天也在种土豆", "匿名", "光幕前的咸鱼", "刚通关的C级", "排行榜第九十九", "不想进本", "炸鱼被抓过", "黑市常客", "训练场打卡人", "药剂站熬夜班", "公会跑腿的", "一个路人", "今日份幸运", "积分快见底", "刚升B级", "看录像长大的", "老观众", "新来的", "别叫我大佬", "蹲一个结算", "白开水", "半夜不睡", "又是我", "打工人", "瓜田里的猹", "慢热", "晴天", "阿九", "十一", "小绿", "老周", "木子", "苏苏", "七七", "一颗橘子", "等天亮", "北风", "不吃香菜", "没抢到号", "退役S级", "D级万岁", "靠运气活着", "只看不说", "路过打个卡", "最后一排"], ih = [{ type: "praise", text: "这反应速度，不愧是主播" }, { type: "praise", text: "冷静得不像第一次进这个级别的本", scope: "inst" }, { type: "praise", text: "刚才那个判断绝了" }, { type: "praise", text: "主播脑子转得是真快" }, { type: "praise", text: "这波我服" }, { type: "praise", text: "稳，太稳了" }, { type: "praise", text: "讲道理，换我早慌了" }, { type: "praise", text: "这就是高手吗" }, { type: "praise", text: "看得我手心出汗，主播还面不改色" }, { type: "praise", text: "刚才那句话说得漂亮" }, { type: "praise", text: "细节拉满，这都注意到了", scope: "inst" }, { type: "praise", text: "主播说话好有条理" }, { type: "praise", text: "这才叫会玩" }, { type: "praise", text: "就冲这个判断，关注了" }, { type: "praise", text: "有勇有谋" }, { type: "praise", text: "比上一个主播强多了" }, { type: "praise", text: "队友拖后腿，主播一个人在带", scope: "inst" }, { type: "praise", text: "这个位置站得好", scope: "inst" }, { type: "praise", text: "我宣布这是本周最佳直播" }, { type: "praise", text: "主播镇定得让我也镇定了" }, { type: "praise", text: "那个眼神，太帅了" }, { type: "praise", text: "心态真好，要是我早骂人了" }, { type: "praise", text: "这个节奏把握得好", scope: "inst" }, { type: "praise", text: "看出来是做过功课的" }, { type: "praise", text: "夸一句，主播是真的会说话" }, { type: "praise", text: "一句话就把场面稳住了", scope: "inst" }, { type: "praise", text: "这份胆量我是没有" }, { type: "praise", text: "学到了，下次我也这么干" }, { type: "praise", text: "主播好好看" }, { type: "praise", text: "声音也好听，别下播" }, { type: "praise", text: "越看越顺眼" }, { type: "praise", text: "这气质，放在哪个本都是主角" }, { type: "praise", text: "能屈能伸，佩服" }, { type: "praise", text: "刚才那一下我起立鼓掌" }, { type: "praise", text: "不慌不忙，高手风范" }, { type: "praise", text: "回廊里也过得这么讲究，爱了", scope: "corr" }, { type: "praise", text: "主播种的菜看着真水灵", scope: "corr" }, { type: "praise", text: "这手艺可以去西区摆摊了", scope: "corr" }, { type: "praise", text: "休整都不忘练，怪不得排名涨", scope: "corr" }, { type: "praise", text: "房间收拾得真干净", scope: "corr" }, { type: "bless", text: "祝平安出来！！", scope: "inst" }, { type: "bless", text: "主播一定要活着回来", scope: "inst" }, { type: "bless", text: "保佑保佑" }, { type: "bless", text: "冲啊主播！" }, { type: "bless", text: "这把一定能过", scope: "inst" }, { type: "bless", text: "结算见！", scope: "inst", when: "end" }, { type: "bless", text: "平安就好，评级无所谓", scope: "inst" }, { type: "bless", text: "等你出来请你吃饭", scope: "inst" }, { type: "bless", text: "好运加满，霉运退散" }, { type: "bless", text: "希望别再有人出事了", scope: "inst", when: "hurt" }, { type: "bless", text: "主播加油，我在东区超市门口看着呢" }, { type: "bless", text: "撑住，天总会亮的", scope: "inst" }, { type: "bless", text: "别怕，我们都在" }, { type: "bless", text: "好人一生平安" }, { type: "bless", text: "这波过了就能歇歇了", scope: "inst" }, { type: "bless", text: "下个副本抽个简单的吧", scope: "corr" }, { type: "bless", text: "注意安全，别逞强", scope: "inst" }, { type: "bless", text: "保重身体啊", when: "hurt" }, { type: "bless", text: "受伤了先处理伤口", scope: "inst", when: "hurt" }, { type: "bless", text: "一路绿灯，一路绿灯" }, { type: "bless", text: "今天也要好好活着" }, { type: "bless", text: "愿系统对你手下留情" }, { type: "bless", text: "别哭，我们陪你", when: "hurt" }, { type: "bless", text: "等着看你升级" }, { type: "bless", text: "最后一口气了，撑住", scope: "inst", when: "end" }, { type: "bless", text: "最后几轮，稳住！", scope: "inst", when: "end" }, { type: "bless", text: "主播今天早点睡", scope: "corr" }, { type: "bless", text: "休息好了再进本", scope: "corr" }, { type: "bless", text: "希望房租别涨", scope: "corr" }, { type: "bless", text: "回廊安稳一天是一天", scope: "corr" }, { type: "discuss", text: "现在什么情况，我刚进来" }, { type: "discuss", text: "来了来了，这把什么本", scope: "inst", when: "open" }, { type: "discuss", text: "开播了开播了", when: "open" }, { type: "discuss", text: "新主播？没见过", when: "open" }, { type: "discuss", text: "先别吵，看局势" }, { type: "discuss", text: "我觉得还有线索没找到", scope: "inst" }, { type: "discuss", text: "按往届，这本不好打", scope: "inst" }, { type: "discuss", text: "有没有人看过这本的录像", scope: "inst" }, { type: "discuss", text: "黑市那种录像别全信" }, { type: "discuss", text: "这队人各怀心思吧", scope: "inst" }, { type: "discuss", text: "现在还剩几个人？", scope: "inst" }, { type: "discuss", text: "前面说的那个我也注意到了" }, { type: "discuss", text: "理性讨论，别带节奏" }, { type: "discuss", text: "我赌主播能过" }, { type: "discuss", text: "有人算过这把能拿什么评吗", scope: "inst" }, { type: "discuss", text: "主播刚才是不是话里有话" }, { type: "discuss", text: "这个人说话一直留半句", scope: "inst" }, { type: "discuss", text: "注意细节，刚才那句不对劲", scope: "inst" }, { type: "discuss", text: "我在光幕前面站了一个小时了" }, { type: "discuss", text: "回放能看吗，刚才没看清" }, { type: "discuss", text: "有没有懂的解释一下" }, { type: "discuss", text: "你们看出来了吗，我看不出来" }, { type: "discuss", text: "这一段要是剪进录像会卖爆" }, { type: "discuss", text: "楼上别剧透……虽然我也不知道" }, { type: "discuss", text: "好无聊，快进", when: "calm" }, { type: "discuss", text: "主播在发呆吗", when: "calm" }, { type: "discuss", text: "挂着当背景音了", when: "calm" }, { type: "discuss", text: "去泡了碗面回来还是这样", when: "calm" }, { type: "discuss", text: "这么安静，要出事了吧", scope: "inst", when: "calm" }, { type: "discuss", text: "暴风雨前的宁静", scope: "inst", when: "calm" }, { type: "discuss", text: "啊啊啊有人倒了", scope: "inst", when: "hurt" }, { type: "discuss", text: "刚才那一下我没敢看", when: "hurt" }, { type: "discuss", text: "又走一个……", scope: "inst", when: "hurt" }, { type: "discuss", text: "手在抖吧，换我也抖", when: "hurt" }, { type: "discuss", text: "快结束了吧", scope: "inst", when: "end" }, { type: "discuss", text: "结算前最后几轮最容易出事", scope: "inst", when: "end" }, { type: "discuss", text: "今天种什么？", scope: "corr" }, { type: "discuss", text: "回廊直播也有人看，我服了我自己", scope: "corr" }, { type: "discuss", text: "排行榜又变了，你们看了吗", scope: "corr" }, { type: "discuss", text: "下个本打算报哪个？", scope: "corr" }, { type: "cold", text: "别高兴太早" }, { type: "cold", text: "我看悬" }, { type: "cold", text: "这把凉了吧" }, { type: "cold", text: "就这？" }, { type: "cold", text: "也就一般" }, { type: "cold", text: "运气好而已" }, { type: "cold", text: "换个人也能做到" }, { type: "cold", text: "等着翻车吧" }, { type: "cold", text: "这种判断，迟早出事" }, { type: "cold", text: "看了半天也没看出哪里厉害" }, { type: "cold", text: "太磨叽了" }, { type: "cold", text: "说了这么多，一点用没有" }, { type: "cold", text: "我押失败", scope: "inst" }, { type: "cold", text: "评级能拿个C就不错了", scope: "inst" }, { type: "cold", text: "队友再强也带不动", scope: "inst" }, { type: "cold", text: "太自信了，这本专治自信", scope: "inst" }, { type: "cold", text: "往届比这厉害的都栽在这", scope: "inst" }, { type: "cold", text: "真以为能全身而退？", scope: "inst" }, { type: "cold", text: "没意思，我换台了" }, { type: "cold", text: "这操作也就D级水平" }, { type: "cold", text: "这不是冷静，是反应慢" }, { type: "cold", text: "别吹了，看结算", scope: "inst" }, { type: "cold", text: "种菜有什么好看的", scope: "corr" }, { type: "cold", text: "回廊里直播，缺积分缺疯了吧", scope: "corr" }, { type: "cold", text: "天天摆烂，等着被清算吧", scope: "corr" }, { type: "envy", text: "凭什么这种人能上热门" }, { type: "envy", text: "我直播三天没人看，这也行？" }, { type: "envy", text: "长得好就是占便宜" }, { type: "envy", text: "又是这种运气好的" }, { type: "envy", text: "打赏的是托吧" }, { type: "envy", text: "我也想有人给我刷" }, { type: "envy", text: "这点本事也能拿打赏" }, { type: "envy", text: "同样是D级进来的，差距怎么这么大" }, { type: "envy", text: "分到这么好的队友，换我我也行", scope: "inst" }, { type: "envy", text: "酸了，真的酸了" }, { type: "envy", text: "一进来就有大佬带，羡慕不来", scope: "inst" }, { type: "envy", text: "这热度买的吧" }, { type: "envy", text: "凭什么打赏都往这边跑" }, { type: "envy", text: "我通关都没人看" }, { type: "envy", text: "排行榜上那些名字，一半靠运气" }, { type: "envy", text: "有人天生就是被偏爱的" }, { type: "envy", text: "我要是有这配置，比这还稳", scope: "inst" }, { type: "envy", text: "住的地方比我好十倍", scope: "corr" }, { type: "envy", text: "在回廊都能开播赚积分，羡慕哭了", scope: "corr" }, { type: "envy", text: "这菜种得，比我吃的还好", scope: "corr" }, { type: "smear", text: "装什么装" }, { type: "smear", text: "演的吧，这反应太假了" }, { type: "smear", text: "人设立得挺好" }, { type: "smear", text: "会说话而已，真打起来就露馅" }, { type: "smear", text: "这种人最会卖队友" }, { type: "smear", text: "表面客气，背地里肯定算计着" }, { type: "smear", text: "我不信真这么淡定" }, { type: "smear", text: "刚才那个眼神，心虚了吧" }, { type: "smear", text: "故意卖惨要打赏" }, { type: "smear", text: "刚才明明可以救，没救", scope: "inst", when: "hurt" }, { type: "smear", text: "自私，只顾自己", scope: "inst" }, { type: "smear", text: "队友出事了还这么冷静，冷血吧", scope: "inst", when: "hurt" }, { type: "smear", text: "这是在拿别人探路", scope: "inst" }, { type: "smear", text: "满嘴好话，一件实事没干" }, { type: "smear", text: "装新人的吧" }, { type: "smear", text: "就是冲着打赏来的" }, { type: "smear", text: "看着就不是好人" }, { type: "smear", text: "别被骗了，都是算计好的" }, { type: "smear", text: "下了本也要直播，吃相难看", scope: "corr" }, { type: "smear", text: "种田人设，炒给谁看", scope: "corr" }, { type: "rumor", text: "听说积分是借的，真的假的" }, { type: "rumor", text: "肯定是抱大腿进来的" }, { type: "rumor", text: "我朋友说在黑市见过这人" }, { type: "rumor", text: "据说上一个本是被人带飞的" }, { type: "rumor", text: "听说欠了一屁股积分" }, { type: "rumor", text: "有人说是买了攻略才敢进的", scope: "inst" }, { type: "rumor", text: "听说被公会踢出来过" }, { type: "rumor", text: "情报社的人说，这人被抽查过" }, { type: "rumor", text: "有人在西区看到这人跟黑市贩子说话" }, { type: "rumor", text: "据说是走后门才越级的" }, { type: "rumor", text: "听说上个本的队友都没出来" }, { type: "rumor", text: "有人说这人其实早就待清算了" }, { type: "rumor", text: "我听说排名是刷的" }, { type: "rumor", text: "传闻进本前偷偷买了防抽查道具" }, { type: "rumor", text: "听说有人专门花钱买这人的录像" }], rh = [{ type: "praise", text: "{who}刚才那下好帅" }, { type: "praise", text: "{who}挺靠谱的" }, { type: "bless", text: "{who}别出事啊" }, { type: "bless", text: "心疼{who}" }, { type: "bless", text: "{who}还好吗", when: "hurt" }, { type: "discuss", text: "{who}靠谱吗，我看不透" }, { type: "discuss", text: "{who}又不说话了" }, { type: "discuss", text: "{who}刚才那句什么意思" }, { type: "discuss", text: "盯紧{who}" }, { type: "discuss", text: "{who}和主播配合挺默契" }, { type: "discuss", text: "{who}好像知道点什么" }, { type: "cold", text: "{who}也就那样" }, { type: "cold", text: "指望{who}？算了吧" }, { type: "envy", text: "凭什么{who}也有人喜欢" }, { type: "smear", text: "我就说{who}有问题" }, { type: "smear", text: "{who}在演" }, { type: "smear", text: "{who}那个表情不对劲" }, { type: "rumor", text: "听说{who}在排行榜上挂过名" }, { type: "rumor", text: "我听说{who}以前出过事" }, { type: "rumor", text: "{who}跟主播是不是早就认识" }], oh = {
  names: sh,
  pool: ih,
  templates: rh
}, On = /* @__PURE__ */ new Set(), Ot = [];
let ct = null, os = [], Ai = null;
function Un() {
  for (const e of os.slice())
    try {
      e();
    } catch (t) {
      console.warn("[rlzc] RLZC_LIVE 订阅回调出错", t);
    }
}
function lh() {
  return 1500 + Math.random() * 1500;
}
function ca() {
  ct = null;
  const e = Ot.shift();
  e !== void 0 && (On.delete(e), Un()), Ot.length && (ct = setTimeout(ca, lh()));
}
function Qi(e, t = !1) {
  if (t && Ot.length) {
    for (const n of Ot) On.delete(n);
    Ot.length = 0, ct && clearTimeout(ct), ct = null;
  }
  if (e.length) {
    for (const n of e)
      On.add(n.id), Ot.push(n.id);
    ct ? Un() : ca();
  }
}
function ah() {
  ct && clearTimeout(ct), ct = null, Ot.length = 0, On.clear();
}
function ch(e) {
  Ai = e, window.RLZC_LIVE = {
    get: () => Ai.view(On),
    subscribe(t) {
      return typeof t != "function" ? () => {
      } : (os.push(t), () => {
        os = os.filter((n) => n !== t);
      });
    },
    toggle: () => Ai.toggle()
  };
}
const Aa = "rlzc_market", Kr = { D: 0, C: 1, B: 2, A: 3, S: 4 }, Ah = 0.8, uh = "ending", dh = "rating", ua = ["S", "A", "B", "C", "D"];
function fh(e, t) {
  return Kr[e] - Kr[t];
}
function ph(e) {
  return e <= -2 ? 0.85 : e === -1 ? 0.75 : e === 0 ? 0.6 : e === 1 ? 0.4 : e === 2 ? 0.25 : 0.15;
}
const ts = {
  "le-1": { S: 0.15, A: 0.3, B: 0.3, C: 0.17, D: 0.08 },
  0: { S: 0.08, A: 0.2, B: 0.35, C: 0.25, D: 0.12 },
  1: { S: 0.04, A: 0.12, B: 0.3, C: 0.32, D: 0.22 },
  ge2: { S: 0.02, A: 0.08, B: 0.25, C: 0.35, D: 0.3 }
};
function hh(e) {
  return e <= -1 ? ts["le-1"] : e === 0 ? ts[0] : e === 1 ? ts[1] : ts.ge2;
}
function Vs(e) {
  return Math.round(e * 100) / 100;
}
function mh(e, t) {
  const n = 0.93 + t() * 0.14;
  return Math.max(1.01, Vs(1 / e * Ah * n));
}
function gh(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function zn(e, t, n, s) {
  return { id: e, label: t, p: n, odds: mh(n, s) };
}
function da(e, t, n) {
  const s = {
    id: t.id,
    kind: e,
    q: t.q,
    options: [zn("yes", t.yes, t.p, n), zn("no", t.no, Vs(1 - t.p), n)],
    judge: t.judge
  };
  return t.judgeNo && (s.judgeNo = t.judgeNo), t.by && (s.by = t.by), s;
}
function xh(e) {
  const { pack: t, rand: n } = e;
  if (t.rest) return [];
  const s = fh(t.level, e.playerLevel), i = ph(s), r = [
    { id: uh, kind: "ending", q: "本局结果", options: [zn("win", "通关", i, n), zn("lose", "失败", Vs(1 - i), n)] }
  ], o = hh(s);
  if (r.push({ id: dh, kind: "rating", q: "本局评价", options: ua.map((l) => zn(l, l, o[l], n)) }), e.withEvents) for (const l of _f(t)) r.push(da("event", l, n));
  return r;
}
function yh(e, t) {
  return Object.keys(e).map(Number).filter((n) => n >= t).length >= 2;
}
const fa = ["通关", "成功", "胜利"], Xi = ["死亡", "阵亡"];
function vh(e) {
  return Xi.includes(String(e ?? "").trim());
}
function bh(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  return Xi.includes(n) ? { kind: "lost", index: t } : fa.includes(n) ? { kind: "option", option: "win", index: t } : n === "失败" ? { kind: "option", option: "lose", index: t } : { kind: "refund", index: t };
}
function kh(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  if (Xi.includes(n)) return { kind: "lost", index: t };
  const s = String(e.rating ?? "").trim().toUpperCase();
  return fa.includes(n) && ua.includes(s) ? { kind: "option", option: s, index: t } : { kind: "refund", index: t };
}
function wh(e, t) {
  const n = t.outcome, s = e.by !== void 0 ? t.phaseEnds[e.by] : void 0;
  let i;
  s !== void 0 && (!n.ended || n.endIndex === void 0 || s < n.endIndex) ? i = s : n.ended && (i = n.endIndex ?? -1);
  let r = !0, o = !1, l = 0;
  for (const c of t.rounds) {
    if (i !== void 0 && c.index > i) break;
    if (!(n.ended && n.endedBy === "tag" && c.index === n.endIndex))
      if (l++, c.state === "ok") {
        if (c.hits[e.id] === !0) return { kind: "option", option: "yes", index: c.index };
        if (e.judgeNo && c.hits[`${e.id}:no`] === !0) return { kind: "option", option: "no", index: c.index };
      } else
        r = !1, c.state === "pending" && (o = !0);
  }
  if (i === void 0) return null;
  const a = n.ended && i === (n.endIndex ?? -1);
  return a && n.endedBy === "tag" && vh(n.result) ? { kind: "lost", index: i } : a && n.endedBy !== "tag" ? { kind: "refund", index: i } : o ? null : r && l > 0 ? { kind: "option", option: "no", index: i } : { kind: "refund", index: i };
}
function _h(e) {
  const t = {};
  for (const n of e.markets)
    e.outcome.voided ? t[n.id] = { kind: "refund", index: -1 } : n.kind === "ending" ? t[n.id] = bh(e.outcome) : n.kind === "rating" ? t[n.id] = kh(e.outcome) : t[n.id] = wh(n, e);
  return t;
}
function Ei(e, t) {
  const n = {};
  for (const s of e.tickets) {
    if (e.frozen) {
      n[s.id] = e.frozen[s.id] ?? { stamp: "refund", index: -1 };
      continue;
    }
    const i = t[s.market];
    i ? i.kind === "refund" ? n[s.id] = { stamp: "refund", index: i.index } : i.kind === "lost" ? n[s.id] = { stamp: "lose", index: i.index } : n[s.id] = { stamp: s.option === i.option ? "win" : "lose", index: i.index } : n[s.id] = null;
  }
  return n;
}
function zh(e, t) {
  const n = {}, s = Ei({ ...e, frozen: void 0 }, t);
  for (const i of e.tickets) n[i.id] = s[i.id] ?? { stamp: "refund", index: -1 };
  return n;
}
function $h(e, t, n, s = []) {
  const i = new Set(Array.isArray(s) ? s : [s]);
  return Object.keys(t).map(Number).filter((r) => r > n && Ee(e[r])).sort((r, o) => r - o).map((r) => {
    const o = e[r]?.extra?.rlzc?.sub;
    return o && !o.skipped && o.markets && typeof o.markets == "object" ? { index: r, state: "ok", hits: o.markets } : !o && i.has(r) ? { index: r, state: "pending", hits: {} } : { index: r, state: "miss", hits: {} };
  });
}
function Sh(e, t) {
  const n = [];
  if (e.frozen) return n;
  for (const s of e.markets)
    s.kind !== "event" && s.kind !== "freak" || t[s.id] || !s.judge || (n.push({ id: s.id, judge: s.judge }), s.judgeNo && n.push({ id: `${s.id}:no`, judge: s.judgeNo }));
  return n;
}
function pa(e, t) {
  return e.markets.find((n) => n.id === t);
}
function Eh(e, t) {
  return e?.options.find((n) => n.id === t)?.label ?? t;
}
function Ch(e, t) {
  const n = pa(e, t.market);
  return `下注·${e.packName}·${n?.q ?? t.market}·${Eh(n, t.option)}`;
}
function Mh(e, t, n) {
  const s = [];
  for (const i of e.tickets) {
    s.push({ delta: -i.stake, source: Ch(e, i), type: "bet", at: i.at, pos: i.after, seq: i.seq ?? 0 });
    const r = t[i.id];
    if (!r || r.stamp === "lose") continue;
    const o = pa(e, i.market)?.q ?? i.market, l = (r.index >= 0 ? n(r.index) : void 0) ?? i.at;
    r.stamp === "win" ? s.push({ delta: gh(i.stake, i.odds), source: `赌票兑付·${e.packName}·${o}`, type: "bet", at: l, pos: r.index }) : s.push({ delta: i.stake, source: `赌票退还·${e.packName}·${o}`, type: "bet", at: l, pos: r.index });
  }
  return s;
}
const Ih = '你是回廊黑市的庄家，要为主播即将进入的副本开几个离谱但有趣的盘口。你只知道下面这些公开信息，不知道剧情会怎么走。出2到3道是非题：题目20字以内，称{{user}}为主播，不用性别代词；必须能从之后的正文里直接看出是或否；不要问结局、评价和生死，那些已经有盘了；不要涉及公开信息以外的设定。每题给一个你估计「是」的概率p（0.05到0.95）。只输出JSON：[{"q":"题目","judge":"用来判断是否发生的一句陈述","p":0.3}]', Th = 4e3;
function Ph(e) {
  const n = Vl(e).split(`
`), s = n.findIndex((r) => /副本简报/.test(r));
  return (s >= 0 ? n.slice(s, s + 6) : n).join(`
`).trim().slice(0, 1e3);
}
function Nh(e) {
  const t = e.docs.filter((s) => s.md && s.md.trim()).map((s) => `## ${s.title}
${s.md.trim()}`).join(`

`).slice(0, Th), n = [
    `【副本】${e.name}　等级：${e.level}`,
    `【简报】
${e.briefing || "（无）"}`,
    `【公开资料】
${t || "（无）"}`
  ].join(`

`);
  return { system: Ih, user: n };
}
function jh(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), i = t.lastIndexOf("]");
  if (s < 0 || i <= s) throw new $e("返回里没有 JSON 数组");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new $e("返回的 JSON 无法解析");
  }
  if (!Array.isArray(r)) throw new $e("返回的不是 JSON 数组");
  const o = [];
  for (const l of r) {
    if (!l || typeof l.q != "string" || typeof l.judge != "string") continue;
    const a = l.q.trim(), c = l.judge.trim(), A = typeof l.p == "number" ? l.p : Number(l.p);
    if (!(!a || a.length > 20 || !c || !Number.isFinite(A) || A < 0.05 || A > 0.95) && (o.push({ q: a, judge: c, p: Vs(A) }), o.length >= 3))
      break;
  }
  if (!o.length) throw new $e("没有合格的题");
  return o;
}
async function Rh(e, t, n = 1) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return jh(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
function Fh(e, t) {
  return e.map((n, s) => da("freak", { id: `F${s + 1}`, q: n.q, yes: "会", no: "不会", p: n.p, judge: n.judge }, t));
}
function Oh(e) {
  return `{{user}}在黑市押了自己本局失败，押注${e}分。`;
}
function Lh(e) {
  return `{{user}}刚在赌坊输掉${e}分，余额已低于斩杀线。`;
}
function Dh(e) {
  return `{{user}}刚在赌坊一局赢了${e}分。`;
}
function Bh(e) {
  return e.kind === "betLose" ? Oh(e.amount) : e.kind === "casinoLoss" ? Lh(e.amount) : Dh(e.amount);
}
function Vh(e) {
  return e.filter((t) => !t.sent);
}
function Uh(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.casino ?? {}, s = {};
  for (const [i, r] of Object.entries(t.books ?? {}))
    r && typeof r == "object" && Array.isArray(r.markets) && (s[i] = { ...r, tickets: Array.isArray(r.tickets) ? r.tickets : [] });
  return {
    books: s,
    casino: {
      tables: Array.isArray(n.tables) ? n.tables.filter((i) => typeof i == "string") : [],
      key: typeof n.key == "string" ? n.key : "",
      plays: Array.isArray(n.plays) ? n.plays : []
    },
    hints: Array.isArray(t.hints) ? t.hints.filter((i) => i && typeof i.kind == "string" && Number.isFinite(i.amount)) : [],
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0
  };
}
const ui = (e) => Array.from({ length: e }, (t, n) => n + 1), ha = [
  {
    id: "bell",
    name: "听钟",
    desc: "押钟声单双、大小，或猜几下。",
    bets: [
      { id: "odd", label: "单", mult: 1.6 },
      { id: "even", label: "双", mult: 1.6 },
      { id: "small", label: "小", mult: 1.6 },
      { id: "big", label: "大", mult: 1.6 },
      ...ui(12).map((e) => ({ id: `n${e}`, label: `${e}下`, mult: 9.6 }))
    ]
  },
  {
    id: "door",
    name: "门牌",
    desc: "押指针停在哪扇门。",
    bets: [
      { id: "r1", label: "1–5", mult: 3.2 },
      { id: "r2", label: "6–10", mult: 3.2 },
      { id: "r3", label: "11–15", mult: 3.2 },
      { id: "r4", label: "16–20", mult: 3.2 },
      ...ui(20).map((e) => ({ id: `d${e}`, label: `${e}号`, mult: 16 }))
    ]
  },
  {
    id: "lot",
    name: "抽签",
    desc: "三支签，一支大吉。",
    bets: ui(3).map((e) => ({ id: `s${e}`, label: `第${e}支`, mult: 2.4 }))
  },
  {
    id: "card",
    name: "翻牌",
    desc: "和庄家各翻一张，大的赢，平局庄家赢。",
    bets: [{ id: "high", label: "比大小", mult: 1.73 }]
  }
];
function ma(e) {
  return ha.find((t) => t.id === e);
}
function Wh(e, t) {
  return `赌坊·${ma(e)?.name ?? e}·${t}`;
}
function Hh(e) {
  const t = ha.map((r) => r.id), n = Math.min(t.length - 1, Math.floor(e() * t.length)), s = t.filter((r, o) => o !== n), i = Math.min(s.length - 1, Math.floor(e() * s.length));
  return [t[n], s[i]];
}
function Gh(e, t, n) {
  return e.tables.length === 2 && e.tables.every((i) => ma(i)) && e.key === t ? { tables: e.tables, key: t, changed: !1 } : { tables: Hh(n), key: t, changed: !0 };
}
const Ci = "rlzc", ls = { optIn: !1, injectToAI: !1, source: "local", freq: 3 }, ga = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, xn = {
  depths: { token: 4, progress: 4, turn: 0, ledger: 4, live: 4 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...Rn },
  subApi: structuredClone(ga),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0, live: !0 },
  live: { ...ls }
}, f = /* @__PURE__ */ Ms({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(xn),
  packs: [],
  lastInjection: Fn,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: [],
  /** 黑市（第四期）：本局盘口、赌票、摆桌 */
  market: _m()
});
function et(e) {
  return JSON.parse(JSON.stringify(e));
}
function Wn(...e) {
  f.settings.debug && console.log("[rlzc]", ...e);
}
function Yh() {
  const e = ce().extensionSettings, t = e[Ci] ?? {}, n = {
    ...structuredClone(xn),
    ...t,
    depths: { ...xn.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? xn.depths.ledger },
    ball: { ...xn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => gl(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...Rn, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(ga),
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
    live: Kh(t.live)
  };
  e[Ci] = n, f.settings = n, f.packs = Hi(n.customPacks);
}
function Kh(e) {
  const t = e ?? {}, n = Math.floor(Number(t.freq));
  return {
    optIn: typeof t.optIn == "boolean" ? t.optIn : ls.optIn,
    injectToAI: typeof t.injectToAI == "boolean" ? t.injectToAI : ls.injectToAI,
    source: t.source === "ai" ? "ai" : "local",
    freq: Number.isFinite(n) ? Math.max(1, Math.min(10, n)) : ls.freq
  };
}
function de() {
  ce().extensionSettings[Ci] = /* @__PURE__ */ ee(f.settings), ce().saveSettingsDebounced(), f.packs = Hi(f.settings.customPacks);
}
function qh(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = gl(t);
  if (n.length) return n;
  const s = t;
  return Hi([]).some((i) => i.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (f.settings.customPacks = [...f.settings.customPacks.filter((i) => i.id !== s.id), s], de(), []);
}
function Jh(e) {
  f.settings.customPacks = f.settings.customPacks.filter((t) => t.id !== e), de();
}
function De() {
  const e = tt()[Jl];
  return !e || Array.isArray(e) ? {} : e;
}
function Hn(e) {
  tt()[Jl] = e, nt();
}
function an(e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    if (r.is_user || r.is_system) continue;
    const o = r.extra?.rlzc?.ledger;
    if (Array.isArray(o))
      for (const l of o) t.push({ e: { ...l, mesIndex: i }, pos: i, g: 0, seq: 0 });
  }
  for (const { pos: i, seq: r, ...o } of Sm(e))
    t.push({ e: { ...o, mesIndex: i }, pos: i < 0 ? Number.MAX_SAFE_INTEGER : i, g: r === void 0 ? 1 : 2, seq: r ?? 0 });
  t.sort((i, r) => i.pos - r.pos || i.g - r.g || i.seq - r.seq);
  const n = t.map((i) => i.e), s = De();
  for (const i of s.adjust ?? [])
    n.push({ delta: i.amount, source: `手动：${i.note}`, type: "manual", at: i.at, mesIndex: -1 });
  return n;
}
function Jt(e) {
  const t = De();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const i = e[s];
    if (i.is_user || !i.mes) continue;
    const r = n.exec(i.mes);
    if (!r) continue;
    const o = Zl(r[1]);
    if (o !== null) {
      const l = ut(i.send_date ?? i.gen_finished ?? void 0);
      return Hn({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function Zh(e) {
  const t = De();
  if (!(t.init != null || f.ledger.length > 0)) return "";
  const s = Jt(e), i = ln(s.value, f.ledger), r = /<状态栏>([\s\S]*?)<\/状态栏>/;
  let o = "D";
  const l = t.fix?.level;
  if (l && ["D", "C", "B", "A", "S"].includes(l))
    o = l;
  else
    for (let h = e.length - 1; h >= 0; h--) {
      if (e[h].is_user || !e[h].mes) continue;
      const g = r.exec(e[h].mes);
      if (!g) continue;
      const v = Yi(g[1]);
      if (v) {
        o = v;
        break;
      }
    }
  const a = Kt[o], c = Vn(s.value, f.ledger, a), A = kp(i, c, o, a), d = Be();
  return d?.status === "active" && d.live ? Xp(A, ra(e, d.id)) : A;
}
function qr(e, t = !0) {
  const n = q(), s = n[e];
  if (!s || s.is_user) return;
  const i = s.mes ?? "", r = ut(s.send_date ?? s.gen_finished ?? void 0), o = [], l = new RegExp(Mf.source, "g");
  let a;
  for (; (a = l.exec(i)) !== null; ) {
    const A = yp(a[1]);
    A && o.push({ delta: A.delta, source: A.source, type: "tag", at: r });
  }
  const c = t ? Fs(i) : null;
  if (c && f.pack && !f.pack.rest) {
    const A = {
      结果: c.result ?? "",
      评价: c.rating ?? "",
      ...c.fields
    }, d = De(), h = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let g = "D";
    const v = d.fix?.level;
    if (v && ["D", "C", "B", "A", "S"].includes(v))
      g = v;
    else
      for (let y = e - 1; y >= 0; y--) {
        if (n[y].is_user || !n[y].mes) continue;
        const x = h.exec(n[y].mes);
        if (!x) continue;
        const _ = Yi(x[1]);
        if (_) {
          g = _;
          break;
        }
      }
    const w = Jt(n), L = ln(w.value, f.ledger), V = !!f.session?.clearance, T = vp(f.pack.level, g, A, L, V, f.pack.name);
    if (T.warn) {
      s.extra = s.extra ?? {};
      const y = s.extra.rlzc ?? { phase: "", round: 0, injected: [] };
      s.extra.rlzc = et({ ...y, settleWarn: T.warn });
    }
    if (T.delta !== 0) {
      const y = { delta: T.delta, source: T.source, type: "settle", at: r };
      T.clearWin && (y.clear = !0), o.push(y);
    }
  }
  if (o.length || s.extra?.rlzc?.ledger?.length) {
    s.extra = s.extra ?? {};
    const A = s.extra.rlzc ?? { phase: "", round: 0, injected: [] }, d = [...o, ...(A.ledger ?? []).filter((h) => h.type === "tip")];
    s.extra.rlzc = et({ ...A, ledger: d.length ? d : void 0 }), nt();
  }
  f.ledger = an(q());
}
function Qh(e, t) {
  const n = De(), s = ut(void 0), i = [...n.adjust ?? [], { amount: e, note: t, at: s }];
  Hn({ ...n, adjust: i });
  const r = { delta: e, source: `手动：${t}`, type: "manual", at: s, mesIndex: -1 };
  f.ledger = [...f.ledger, r];
}
function Xh(e, t) {
  Qh(e, t);
}
function em(e) {
  const t = De(), n = ut(void 0);
  Hn({ ...t, init: { value: e, source: "手动设置", at: n } }), f.ledger = an(q());
}
function tm(e, t) {
  if (!e && !t) return;
  const n = De(), s = q(), i = ut(void 0);
  Hn({ ...n, fix: { level: e, rank: t, at: i, afterIndex: s.length - 1 } });
}
function Be() {
  return zp(tt()[bt]);
}
function Us() {
  const e = tt(), t = Array.isArray(e[bt]?.declined) ? e[bt].declined : [], n = Array.isArray(e[Gr]) ? e[Gr] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function nm(e) {
  const t = tt(), n = [...Us().filter((s) => s !== e), e];
  t[bt] = { ...t[bt] ?? {}, declined: n }, nt();
}
function Ht(e) {
  const t = tt(), n = Us(), s = n.length ? { declined: n } : {};
  e ? t[bt] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[bt] = s : delete t[bt], nt();
}
function er(e) {
  const t = Be();
  t && (e(t), Ht(t), Te());
}
function xa(e) {
  const t = q();
  return (e === "swipe" || e === "continue") && Ee(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function bs(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Ql(t, f.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = Sl(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? Np(e, n, s) : null };
}
function Te() {
  const e = q();
  let t = Be();
  if (t) {
    const s = JSON.stringify(t);
    if (!Sp(e, t))
      Sa(t.id), Ht(null), Ce("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const i = bs(e, t);
      i.progress && (t.status = i.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && Ht(t);
    }
  }
  const n = bs(e, t);
  f.session = n.session, f.pack = n.pack, f.progress = n.progress, f.audit = n.audit, f.subLine = _a(e, n.progress), Tm(e, n.session), f.ledger = an(e), f.tick++, Un();
}
function ya() {
  if (f.session)
    return Xl(f.session, f.progress?.rolesFromChat);
}
function ks() {
  for (const e of Df) Nt(e, "", 0, !1);
}
let $n = -1;
function sm(e) {
  const t = xa(e), n = Be(), { pack: s, progress: i, audit: r } = bs(t, n), o = n ? Xl(n, i?.rolesFromChat) : void 0, l = cn() && !!i, a = l ? Ls(t, i.entryIndex) : null, c = s ? Wf(s, i, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: i?.panel?.limit,
    audit: r ?? void 0,
    subNext: l ? op(t, i.entryIndex) : void 0,
    stateText: a ? Bl(s, a.state) : void 0
  }) : Fn;
  ks();
  const A = f.settings.depths;
  c.token && Nt(El, c.token, A.token, !0), c.progress && Nt(Cl, c.progress, A.progress, !1), c.turn && Nt(Ml, c.turn, A.turn, !1), c.state && Nt(Il, c.state, A.progress, !1);
  const d = De();
  let h = Zh(t);
  if (d.fix) {
    const v = bp(d.fix);
    v && (h = h ? `${h}
${v}` : v);
  }
  const g = dt();
  if (g.hints.length) {
    const v = g.hints.map(Bh).join("");
    h = h ? `${h}
${v}` : v, g.hints.some((w) => !w.sent) && (g.hints = g.hints.map((w) => ({ ...w, sent: !0 })), Zt(g));
  }
  if (h && Nt(Tl, h, A.ledger, !1), f.settings.live.injectToAI) {
    const v = hp(rr(/* @__PURE__ */ new Set(), t));
    v && Nt(Pl, v, A.live, !1);
  }
  f.lastInjection = c, $n = t.length, Wn("注入", e, c);
}
const Mi = /* @__PURE__ */ new Set();
async function im() {
  const e = q(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Tf(n.mes);
  if (!s) return;
  const i = Be();
  if (!i || i.status !== "active" || i.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const r = `${on()}:${t}:${n.mes}`;
  if (Mi.has(r)) return;
  Mi.add(r);
  const { pack: o, progress: l } = bs(e, i);
  if (!o || !l || l.ended) return;
  const a = Pf(o, l.phase, l.round, s);
  a && await St(`是否跳到${s}？（${a.label}）`) && (i.manual.push({ kind: "skip", atIndex: t, targetPhase: a.phase, targetRound: a.round }), Ht(i));
}
async function rm(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      ks();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await im(), await mm(s), sm(s);
  } catch (i) {
    console.error("[rlzc] 拦截器出错", i), ks();
  }
}
const as = /* @__PURE__ */ new Set();
function tr() {
  const e = Be();
  if (!e || e.status !== "ended") return 0;
  const t = f.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
async function va(e) {
  const { index: t, info: n } = e, s = on(), i = `${s}:${t}:${n.name}`;
  if (as.has(i)) return;
  as.add(i);
  const r = e.pack ? `检测到进入《${e.pack.name}》，是否启用？` : `检测到进入《${n.name}》，是否启用？（未收录的副本，将使用通用副本包）`, o = ia(e.pack ?? {}, f.settings.live.optIn), l = await Nl(r, o.show ? { label: "开启直播", checked: o.checked } : null);
  if (on() !== s) {
    as.delete(i);
    return;
  }
  if (!l.ok) {
    nm(Ki(t, n.name));
    return;
  }
  o.show && ba(l.checked);
  const a = Ds(q(), t, f.packs);
  if (!a || a.info.name !== n.name) {
    Ce("warning", "入场消息已变化，未启用。");
    return;
  }
  const c = { ...n };
  e.pack || (c.rounds = hl(n.limit, xl(n), f.settings.genericCaps).rounds), wa(e.pack ?? yl(c, f.settings.genericCaps), t, c, o.show && l.checked);
}
function ba(e) {
  f.settings.live.optIn !== e && (f.settings.live.optIn = e, de());
}
function ka() {
  const e = Cp(q(), Be(), Us(), f.packs, tr());
  e && va(e);
}
function om(e) {
  Te();
  const t = q(), n = tr();
  let s = -1;
  for (let i = n; i < t.length; i++) if (Ee(t[i])) {
    s = i;
    break;
  }
  e === s && ka();
}
function wa(e, t, n, s = !1) {
  const i = q(), r = i[t], o = Be();
  o && Em(o);
  const l = _p(e, t, n), a = Et();
  if (a.corridor.on && (a.corridor.on = !1, Ln(a, a.corridor.show, Wt.enterOff)), s && !e.disableLive && (l.live = !0, Ln(a, l.id, Wt.instanceOn)), Gn(a), !e.rest) {
    const c = Jt(i), A = De(), d = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let h = "D";
    const g = A.fix?.level;
    if (g && ["D", "C", "B", "A", "S"].includes(g))
      h = g;
    else
      for (let v = i.length - 1; v >= 0; v--) {
        if (i[v].is_user || !i[v].mes) continue;
        const w = d.exec(i[v].mes);
        if (!w) continue;
        const L = Yi(w[1]);
        if (L) {
          h = L;
          break;
        }
      }
    Vn(c.value, f.ledger, Kt[h]) && (l.clearance = !0);
  }
  r.extra = r.extra ?? {}, r.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: l.id }, Ht(l), Cm(l, e, t), Te(), f.progress && (r.extra.rlzc.injected = et(f.progress.perMessage[t]?.events ?? [])), nt(), Ce("success", `已进入副本《${e.name}》。`);
}
async function lm(e) {
  const t = f.packs.find((l) => l.id === e);
  if (!t) return;
  const n = q();
  let s = n.length - 1;
  for (; s >= 0 && !Ee(n[s]); ) s--;
  if (s < 0) {
    Ce("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  if (Be()?.status === "active" && !await St("当前已有进行中的副本，确定要替换吗？")) return;
  const r = ia(t, f.settings.live.optIn), o = await Nl(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`, r.show ? { label: "开启直播", checked: r.checked } : null);
  o.ok && (r.show && ba(o.checked), wa(t, s, bl(n[s].mes) ?? { name: t.name }, r.show && o.checked));
}
function Ws(e) {
  er((t) => t.manual.push(e));
}
function Hs() {
  return q().length - 1;
}
async function Jr() {
  const e = f.progress;
  if (!(!e || e.ended || !f.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Ce("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await St(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (Ws({ kind: "skip", atIndex: Hs(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Ce("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function Zr() {
  if (!(!f.session || f.progress?.ended) && await St("确定要手动结束当前副本吗？")) {
    if (f.session.live) {
      const e = Et();
      Ln(e, f.session.id, Wt.instanceOff), Gn(e);
    }
    Ws({ kind: "end", atIndex: Hs() });
  }
}
function am(e) {
  Ws({ kind: "setPhase", atIndex: Hs(), phase: e });
}
function cm(e) {
  Ws({ kind: "setRound", atIndex: Hs(), round: e });
}
function Am(e) {
  er((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function um(e) {
  er((t) => t.manual.splice(e, 1));
}
async function Qr() {
  f.session && await St("确定要删除当前副本会话吗？（不会改动聊天记录）") && (Sa(f.session.id), Ht(null), Te());
}
function cn() {
  return f.settings.subApi.source !== "off";
}
function nr() {
  const e = f.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function dm(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function _a(e, t) {
  if (!cn() || !t || t.ended) return "";
  if (f.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const i = Ls(e, t.entryIndex);
  return i && t.perMessage[i.index] ? `副本记录：已更新（第${t.perMessage[i.index].round}轮）` : "副本记录：尚未整理";
}
let Sn = null;
const sr = /* @__PURE__ */ new Set();
function Gt(e) {
  return sp(on(), e, q()[e]);
}
function Xr(e) {
  f.subBusy = e, f.subLine = _a(q(), f.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && f.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function za(e, t, n) {
  if (Gt(e) !== t) return;
  const s = q()[e];
  s?.extra?.rlzc && (s.extra.rlzc = et({ ...s.extra.rlzc, sub: n }), nt(), Te());
}
function fm(e, t) {
  const n = q(), s = f.progress, i = f.pack, r = n[e], o = s?.perMessage[e];
  if (!i || !s || !o || !r) return null;
  const l = ya(), a = (x) => ({ ...x, text: ys(x.text, i, l), if: x.if ? ys(x.if, i, l) : void 0 }), c = ep(i, r.extra?.rlzc?.injected ?? []).map(a), A = (s.next?.events ?? []).filter((x) => x.if).map(a);
  if (!ip({
    enabled: cn(),
    active: !s.ended && f.session?.status === "active",
    type: t,
    saveMode: f.settings.subApi.saveMode,
    hasEvents: c.length > 0,
    hasNextConditional: A.length > 0
  })) return null;
  const h = Gt(e);
  if (sr.has(h)) return null;
  const g = i.phases.find((x) => x.id === o.phase), v = Ls(n.slice(0, e), s.entryIndex), w = f.session ? dt().books[f.session.id] : void 0, L = Xf({
    pack: i,
    phaseName: g?.name ?? o.phase,
    round: o.round,
    prevState: v?.state ?? null,
    events: c,
    nextConditional: A,
    text: String(r.mes ?? ""),
    markets: w ? Sh(w, f.market.results) : []
  }), V = ce().substituteParams, T = V ? { system: V(L.system), user: V(L.user) } : L, y = pm(e, h, o.round, T);
  return Sn = { key: h, index: e, promise: y }, y.finally(() => {
    Sn?.key === h && (Sn = null);
  }), y;
}
async function pm(e, t, n, s) {
  Xr(!0);
  try {
    let i = 2;
    for (; ; ) {
      const r = nr();
      if (!r) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await rp((a) => Gi(r, a), s, i);
        za(e, t, { ...l, ms: Date.now() - o, via: dm(r), at: (/* @__PURE__ */ new Date()).toISOString() }), sr.add(t);
        return;
      } catch (l) {
        if (Gt(e) !== t) return;
        const a = Os(l), c = String(l?.message ?? l).slice(0, 200);
        if (Wn("副本事件检测失败", a, l), !f.settings.subApi.wait) {
          Ce("warning", `第${n}轮事件检测失败（${a}），已沿用上一轮状态。`), di(e, t, a);
          return;
        }
        if (await hm(n, a, c) === "skip") {
          di(e, t, a);
          return;
        }
        i = 0;
      }
    }
  } catch (i) {
    Ce("error", String(i?.message ?? i)), di(e, t, "其他");
  } finally {
    Xr(!1);
  }
}
function di(e, t, n) {
  sr.add(t), za(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function hm(e, t, n) {
  const s = ce();
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
  for (const w of i.presets) i.source === "preset" && w.id === i.presetId || h.push({ value: `preset:${w.id}`, text: `自设API：${w.name}` });
  i.source !== "main" && h.push({ value: "main", text: "跟随主API" });
  for (const w of h) {
    const L = document.createElement("option");
    L.value = w.value, L.textContent = w.text, d.append(L);
  }
  A.append(d), c.append(A), r.append(o, l, a, c);
  let g;
  d.addEventListener("change", () => {
    const w = d.value;
    w && (w === "main" ? i.source = "main" : (i.source = "preset", i.presetId = w.slice(7)), de(), g.complete(s.POPUP_RESULT.CUSTOM1));
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
async function mm(e) {
  const t = Sn;
  if (!(!t || !f.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= xa(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function gm(e, t) {
  const n = q(), s = n[e];
  if (!Ee(s)) return;
  const i = Be();
  if (!i || i.status === "ended") {
    if (Ds(n, e, f.packs)) {
      const c = Ep(n, f.packs, tr(), e, Us());
      c && va(c);
    }
    if (t === "first_message") return;
    Te(), qr(e, !1), to(e), hi(e, t), eo(), io();
    return;
  }
  if (t === "first_message") return;
  let r = null;
  cn() && (En = e);
  const o = wl(s.mes);
  o && (i.roles = { ...i.roles ?? {}, ...o }), Ht(i), Te();
  const l = f.progress?.perMessage[e];
  if (l && f.pack) {
    const c = f.pack.phases.find((w) => w.id === l.phase), A = {
      phase: c?.name ?? l.phase,
      round: l.round,
      injected: $n === e ? f.lastInjection.injected : l.events
    }, d = f.pack.time;
    d.type === "clock" && c?.clock && !c.night && !c.frozen && (A.clock = zl(d.dayStart, d.minutesPerRound, l.round));
    const h = $n === e ? f.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    h && (A.limit = h);
    const g = s.extra?.rlzc?.entry;
    g && (A.entry = g), $n === e && f.lastInjection.skipped?.length && (A.skippedEvents = f.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (A.sub = s.extra.rlzc.sub), t === "continue" && s.extra?.rlzc?.live && (A.live = s.extra.rlzc.live);
    const v = (s.extra?.rlzc?.ledger ?? []).filter((w) => w.type === "tip");
    t === "continue" && v.length && (A.ledger = v), s.extra = s.extra ?? {}, s.extra.rlzc = et(A), nt(), Te(), r = fm(e, t);
  }
  En >= 0 && (En = -1, r || Te());
  const a = Fs(s.mes);
  if (a && Ce("info", `副本结算：${a.result ?? "—"}${a.rating ? `，评价 ${a.rating}` : ""}`), qr(e), to(e), r) {
    const c = Gt(e);
    r.then(() => {
      Gt(e) === c && hi(e, t);
    });
  } else hi(e, t);
  eo(), io();
}
function eo() {
  const e = De();
  e.fix && Hn({ ...e, fix: void 0 });
}
function to(e) {
  const t = q(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const i = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!i) return;
  const r = Zl(i[1]);
  if (r === null) return;
  const o = Jt(t), l = (c) => c.mesIndex === e && (c.type === "tip" || c.type === "bet" && /^赌票/.test(c.source)), a = ln(o.value, an(t).filter((c) => !l(c)));
  r !== a && (Wn(`积分核对不符（楼层${e}）：状态栏 ${r}，账本 ${a}`), n.extra?.rlzc && (n.extra.rlzc = et({ ...n.extra.rlzc, ledgerMismatch: { status: r, ledger: a } }), nt()));
}
function no() {
  Mi.clear(), as.clear(), $n = -1, En = -1, f.chatId = on(), f.debugUnlocked = !1, f.lastInjection = Fn, ks(), ah(), f.ledger = an(q()), Te(), ka(), setTimeout(() => ir(), 50);
}
function fi() {
  Te();
}
function $a() {
  return f.settings.panelDisplay === "statusbar" ? Ut.filter((e) => e !== "副本") : Ut;
}
function pi(e) {
  Rl(e, $a());
}
function ir(e = !1) {
  qf($a(), e);
}
function xm(e) {
  f.settings.panelDisplay !== e && (f.settings.panelDisplay = e, de(), ir(!0));
}
const cs = oh;
function Et() {
  return Gp(tt()[na]);
}
function Gn(e) {
  tt()[na] = et(e), nt();
}
function Ln(e, t, n) {
  if (!t) return;
  const s = Zi(q(), e) + 1, i = { id: s, t: "sys", name: "", text: n, amount: 0, net: 0, show: t };
  e.sys = [...e.sys, i].slice(-100), e.seq = s, Qi([i]);
}
function ym() {
  return "c" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function vm(e) {
  const t = f.session, n = f.progress;
  if (!!t && e > t.entryIndex && (!n?.ended || n.endIndex !== void 0 && e <= n.endIndex)) return t.live && f.pack ? { show: t.id, scope: "instance", pack: f.pack } : null;
  const i = Et();
  return i.corridor.on && i.corridor.show ? { show: i.corridor.show, scope: "corridor", pack: null } : null;
}
function hi(e, t) {
  if (t === "continue" || t === "first_message") return;
  const n = q(), s = n[e];
  if (!Ee(s) || qt(s)) return;
  const i = vm(e);
  if (!i) return;
  const r = Et(), { show: o, scope: l, pack: a } = i, c = f.progress, A = s.extra?.rlzc ?? { phase: "", round: 0, injected: [] }, d = Ji(n, o, e), h = A.sub && !A.sub.skipped ? { hype: A.sub.hype, hurt: A.sub.hurt } : void 0, g = l === "instance" && c?.endIndex === e && c.endedBy === "tag" ? Fs(s.mes) : null, v = !!g && ["死亡", "阵亡"].includes(String(g.result ?? "").trim()), w = c?.roundsLeft, L = /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(s.mes ?? "")), V = new Set((a?.events ?? []).filter((D) => D.kind !== "directive").map((D) => D.id)), T = Jp({
    show: o,
    scope: l,
    packLevel: a?.level ?? null,
    playerLevel: Bs(n, e + 1),
    isRest: !!a?.rest,
    prevHeat: d.length ? d[d.length - 1].rec.heat : null,
    roundsInShow: d.length,
    text: String(s.mes ?? ""),
    hasEvents: (A.injected ?? []).some((D) => V.has(D)),
    hasPhaseSwitch: L,
    sub: h,
    isEnd: l === "instance" && !!w && w.y > 0 && w.x < w.y * 0.1,
    phaseId: l === "instance" ? c?.perMessage[e]?.phase : void 0,
    pool: cs.pool,
    templates: cs.templates,
    packDanmaku: a?.danmaku,
    names: cs.names,
    whoNames: aa(la(n, e + 1), String(ce().name1 ?? "")),
    recentTexts: Yp(n.slice(0, e)),
    firstId: Zi(n, r) + 1,
    settle: g ? { died: v, tipsBefore: ra(n.slice(0, e), o) } : void 0,
    rand: Math.random
  }), y = cp({
    aiSource: f.settings.live.source === "ai",
    subOn: cn(),
    roundInShow: d.length + 1,
    freq: f.settings.live.freq,
    phaseSwitch: L,
    hurt: T.hurt,
    eventDone: !!A.sub && !A.sub.skipped && (A.sub.events ?? []).some((D) => D.status === "done")
  });
  y && (T.ai = { ok: !1, pending: !0 });
  const x = ut(s.send_date ?? s.gen_finished ?? void 0), O = [...(A.ledger ?? []).filter((D) => D.type !== "tip"), ...Zp(T, x)];
  s.extra = s.extra ?? {}, s.extra.rlzc = et({ ...A, live: T, ledger: O.length ? O : void 0 }), r.seq = Math.max(r.seq, ...T.feed.map((D) => D.id)), Gn(r), f.ledger = an(q()), f.tick++, Qi(T.feed, !0), y && bm(e, T.scope === "instance" ? a?.name : void 0);
}
function bm(e, t) {
  const n = q(), s = Gt(e), i = nr();
  if (!i) {
    mi(e, s, [], "副本事件检测没有设置好", 0);
    return;
  }
  const r = [];
  for (let A = e; A >= 0 && r.length < 2; A--) Ee(n[A]) && r.unshift(String(n[A].mes ?? ""));
  const o = up({
    scene: t ?? "回廊",
    texts: r,
    cast: aa(la(n, e + 1), String(ce().name1 ?? "")),
    samples: Ap(cs.pool, 10, Math.random)
  }), l = ce().substituteParams, a = l ? { system: l(o.system), user: l(o.user) } : o, c = Date.now();
  fp((A) => Gi(i, A, { temperature: 0.9 }), a, 1).then((A) => mi(e, s, A, null, Date.now() - c)).catch((A) => {
    Wn("AI 弹幕生成失败", A);
    const d = String(A?.message ?? A).slice(0, 120);
    mi(e, s, [], `${Os(A)}：${d}`, Date.now() - c);
  });
}
function mi(e, t, n, s, i) {
  if (Gt(e) !== t) return;
  const r = q(), o = r[e], l = qt(o);
  if (!l || !o.extra?.rlzc) return;
  const a = Et();
  let c = Zi(r, a);
  const A = n.map((h) => ({ id: ++c, t: "msg", name: h.name, text: h.text, amount: 0, net: 0 })), d = { ...l, feed: [...l.feed, ...A], ai: s ? { ok: !1, error: s, ms: i } : { ok: !0, count: A.length, ms: i } };
  o.extra.rlzc = et({ ...o.extra.rlzc, live: d }), a.seq = Math.max(a.seq, c), Gn(a), f.tick++, A.length ? Qi(A) : Un();
}
function km() {
  const e = Et();
  return f.session?.status === "active" && f.pack ? qi({ packLevel: f.pack.level, playerLevel: Bs(q()), isRest: !!f.pack.rest, heat: 20, rand: 1 }) : e.corridor.viewers ?? 0;
}
function rr(e, t = q()) {
  const n = f.session, s = n?.status === "active";
  return nh(
    t,
    Et(),
    {
      inInstance: s,
      instanceLive: !!(s && n?.live),
      instanceShow: n?.id,
      startViewers: km(),
      injectToAI: f.settings.live.injectToAI
    },
    e
  );
}
function wm() {
  if (f.session?.status === "active") return !1;
  const e = Et();
  if (e.corridor.on)
    e.corridor.on = !1, Ln(e, e.corridor.show, Wt.corridorOff);
  else {
    const t = ym();
    e.corridor = {
      on: !0,
      show: t,
      viewers: qi({ packLevel: null, playerLevel: Bs(q()), isRest: !1, heat: 20, rand: 0.9 + Math.random() * 0.2 })
    }, Ln(e, t, Wt.corridorOn);
  }
  return Gn(e), f.tick++, Un(), !0;
}
function _m() {
  return { book: null, results: {}, tickets: [], pending: 0, tables: [], casinoOpen: !0 };
}
function dt() {
  return Uh(tt()[Aa]);
}
function Zt(e) {
  tt()[Aa] = et(e), nt();
}
let En = -1;
function zm() {
  return [En, Sn?.index ?? -1].filter((e) => e >= 0);
}
function $m(e = q()) {
  const t = De().fix?.level;
  return t && ["D", "C", "B", "A", "S"].includes(t) ? t : Bs(e);
}
function or(e, t, n) {
  if (t.frozen) return { results: {}, tickets: Ei(t, {}), rounds: [] };
  let s = { voided: !0, ended: !1 }, i = [], r = {};
  if (n && n.id === t.session) {
    const l = Ql(n, f.packs), a = l ? Sl(e, n, l) : null;
    a && (s = {
      ended: a.ended,
      endedBy: a.endedBy,
      endIndex: a.endIndex,
      result: a.settlement?.result,
      rating: a.settlement?.rating
    }, i = $h(e, a.perMessage, a.entryIndex, zm()), r = a.phaseEnds);
  }
  const o = _h({ markets: t.markets, rounds: i, outcome: s, phaseEnds: r });
  return { results: o, tickets: Ei(t, o), rounds: i };
}
function Sm(e) {
  const t = dt(), n = Be(), s = (r) => e[r] ? ut(e[r].send_date ?? e[r].gen_finished ?? void 0) : void 0, i = [];
  for (const r of Object.values(t.books)) i.push(...Mh(r, or(e, r, n).tickets, s));
  for (const r of t.casino.plays)
    i.push({ delta: r.net, source: Wh(r.table, r.label), type: "bet", at: r.at, pos: r.after, seq: r.seq ?? 0 });
  return i;
}
function Em(e) {
  const t = dt(), n = t.books[e.id];
  if (!n || n.frozen) return;
  const s = q(), i = zh(n, or(s, n, e).results);
  for (const r of n.tickets) i[r.id].index < 0 && (i[r.id].index = Math.max(s.length, r.after + 1));
  n.frozen = i, Zt(t);
}
function Sa(e) {
  const t = dt(), n = t.books[e];
  if (!n || n.frozen) return;
  const s = q().length;
  n.frozen = Object.fromEntries(n.tickets.map((i) => [i.id, { stamp: "refund", index: Math.max(s, i.after + 1) }])), Zt(t);
}
function Cm(e, t, n) {
  if (t.rest) return;
  const s = q(), i = cn(), r = xh({ pack: t, playerLevel: $m(s), withEvents: i, rand: Math.random });
  if (!r.length) return;
  const o = dt(), l = { session: e.id, packId: t.id, packName: t.name, openedAt: ut(void 0), markets: r, tickets: [] };
  i && (l.freak = { status: "pending" }), o.books[e.id] = l, Zt(o), i && Mm(e.id, t, n);
}
function Mm(e, t, n) {
  const s = (c, A) => {
    const d = dt(), h = d.books[e];
    h && (A && (h.closedAt || h.frozen) ? h.freak = { ...c, status: "late" } : (A && (h.markets = [...h.markets.filter((g) => g.kind !== "freak"), ...Fh(A, Math.random)]), h.freak = c), Zt(d), Te());
  }, i = nr();
  if (!i) {
    s({ status: "failed", error: "副本事件检测没有设置好" });
    return;
  }
  const r = Nh({
    name: t.name,
    level: t.level,
    briefing: Ph(String(q()[n]?.mes ?? "")),
    docs: t.docs
  }), o = ce().substituteParams, l = o ? { system: o(r.system), user: o(r.user) } : r, a = Date.now();
  Rh((c) => Gi(i, c), l, 1).then((c) => s({ status: "ok", count: c.length, ms: Date.now() - a }, c)).catch((c) => {
    Wn("庄家怪盘出题失败", c);
    const A = String(c?.message ?? c).slice(0, 120);
    s({ status: "failed", error: `${Os(c)}：${A}`, ms: Date.now() - a });
  });
}
const ns = /* @__PURE__ */ new Map();
let so = null;
function Im(e) {
  const t = on(), n = so !== t;
  n && ns.clear(), so = t;
  const s = { win: 0, lose: 0, refund: 0 };
  for (const r of e) {
    const o = r.res?.stamp ?? null, l = ns.has(r.ticket.id), a = ns.get(r.ticket.id);
    ns.set(r.ticket.id, o), !n && l && o && o !== a && s[o]++;
  }
  const i = [s.win ? `兑 ${s.win} 张` : "", s.lose ? `废 ${s.lose} 张` : "", s.refund ? `退 ${s.refund} 张` : ""].filter(Boolean);
  i.length && Ce("info", `赌票开奖：${i.join("，")}。`);
}
function Tm(e, t) {
  const n = dt();
  let s = !1;
  const i = t?.status === "active", r = t ? n.books[t.id] : void 0;
  r && !r.closedAt && !r.frozen && f.progress && yh(f.progress.perMessage, f.progress.entryIndex) && (r.closedAt = ut(void 0), s = !0);
  const o = i ? n.casino.key : t?.status === "ended" ? t.id : "", l = Gh(n.casino, o, Math.random);
  l.changed && (!i || n.casino.tables.length !== 2) && (n.casino.tables = l.tables, n.casino.key = l.key, s = !0), s && Zt(n);
  const a = [];
  let c = {};
  for (const A of Object.values(n.books)) {
    const d = or(e, A, t);
    r && A.session === r.session && (c = d.results);
    for (const h of A.tickets) a.push({ ticket: h, book: A, market: A.markets.find((g) => g.id === h.market), res: d.tickets[h.id] ?? null });
  }
  a.sort((A, d) => (d.ticket.seq ?? 0) - (A.ticket.seq ?? 0)), Im(a), f.market = {
    book: i && r ? r : null,
    results: c,
    tickets: a,
    pending: a.filter((A) => !A.res).length,
    tables: n.casino.tables,
    casinoOpen: !i || !!f.pack?.casino
  };
}
function io() {
  const e = dt();
  if (!e.hints.length) return;
  const t = Vh(e.hints);
  t.length !== e.hints.length && (e.hints = t, Zt(e));
}
const Pm = { class: "rlzc-ball-mark" }, Nm = {
  key: 0,
  class: "rlzc-ball-badge",
  title: "待开奖赌票"
}, gi = 44, jm = /* @__PURE__ */ Le({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ he({ x: 0, y: 0 });
    let n = null;
    function s(A, d) {
      const h = window.innerWidth - gi - 4, g = window.innerHeight - gi - 4;
      return { x: Math.min(Math.max(4, A), h), y: Math.min(Math.max(4, d), g) };
    }
    function i() {
      const A = f.settings.ball;
      t.value = s(A.x ?? window.innerWidth - gi - 12, A.y ?? Math.round(window.innerHeight * 0.35));
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
      n = null, d ? (f.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, de()) : f.panelOpen = !f.panelOpen;
    }
    const a = H(() => !!f.session && !f.progress?.ended), c = H(() => !!f.progress?.warn);
    return Ts(() => f.settings.ball, i, { deep: !0 }), Tc(() => {
      i(), window.addEventListener("resize", i);
    }), Pc(() => window.removeEventListener("resize", i)), (A, d) => (z(), $("button", {
      class: ne(["rlzc-ball", { "is-active": a.value, "is-warn": c.value }]),
      style: Es({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: r,
      onPointermove: o,
      onPointerup: l,
      onPointercancel: l
    }, [
      u("span", Pm, P(a.value ? F(f).pack?.level ?? "副" : "廊"), 1),
      F(f).market.pending > 0 ? (z(), $("span", Nm, P(F(f).market.pending), 1)) : Y("", !0)
    ], 38));
  }
});
function Rm(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function mn(e) {
  return Rm(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Fm(e) {
  const t = [];
  let n = null, s = [];
  const i = () => {
    s.length && t.push(`<p>${s.map(mn).join("<br>")}</p>`), s = [];
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
      t.push(`<h${h}>${mn(a[2])}</h${h}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(l), A = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (c || A) {
      i();
      const h = c ? "ul" : "ol", g = c ? c[1] : A[2];
      n !== h ? (r(), n = h, t.push(h === "ol" ? `<ol start="${A[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(mn(g));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${mn(l.trim())}`);
      continue;
    }
    const d = /^>\s?(.*)$/.exec(l);
    if (d) {
      i(), r(), t.push(`<blockquote>${mn(d[1])}</blockquote>`);
      continue;
    }
    r(), s.push(l);
  }
  return i(), r(), t.join("");
}
const Om = {
  key: 0,
  class: "rlzc-docs"
}, Lm = { class: "rlzc-subtabs" }, Dm = ["onClick"], Bm = { class: "rlzc-md" }, Vm = ["innerHTML"], Um = ["src", "alt"], Wm = {
  key: 2,
  class: "rlzc-note"
}, ro = /* @__PURE__ */ Le({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ he(0);
    Ts(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = H(() => t.pack.docs?.[n.value]), i = H(() => s.value?.md ? Fm(s.value.md) : ""), r = H(() => s.value?.image ? wf(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (z(), $("section", Om, [
      u("div", Lm, [
        (z(!0), $(Q, null, me(e.pack.docs, (a, c) => (z(), $("button", {
          key: c,
          class: ne({ on: n.value === c }),
          onClick: (A) => n.value = c
        }, P(a.title), 11, Dm))), 128))
      ]),
      u("article", Bm, [
        i.value ? (z(), $("div", {
          key: 0,
          innerHTML: i.value
        }, null, 8, Vm)) : Y("", !0),
        r.value ? (z(), $("img", {
          key: 1,
          src: r.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, Um)) : s.value?.image && !r.value ? (z(), $("p", Wm, "图片无法加载：" + P(s.value.image), 1)) : Y("", !0)
      ])
    ])) : Y("", !0);
  }
}), Hm = {
  key: 0,
  class: "rlzc-ledger-summary"
}, Gm = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, oo = /* @__PURE__ */ Le({
  __name: "LedgerSummary",
  setup(e) {
    const t = H(() => q()), n = H(() => Jt(t.value)), s = H(() => ln(n.value.value, f.ledger)), i = H(() => f.pack?.level ?? "D"), r = H(() => Kt[i.value]), o = H(() => Vn(n.value.value, f.ledger, r.value)), l = H(() => f.ledger.length > 0 || n.value.source !== "默认值");
    return (a, c) => l.value ? (z(), $("div", Hm, [
      u("span", {
        class: ne(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + P(s.value >= 0 ? "+" : "") + P(s.value), 3),
      o.value ? (z(), $("span", Gm, "待清算")) : Y("", !0)
    ])) : Y("", !0);
  }
}), Ym = { class: "rlzc-system" }, Km = { class: "rlzc-card rlzc-hero" }, qm = { class: "rlzc-hero-top" }, Jm = { class: "rlzc-level" }, Zm = {
  key: 0,
  class: "rlzc-chip"
}, Qm = {
  key: 0,
  class: "rlzc-goal"
}, Xm = { class: "rlzc-grid" }, eg = {
  key: 0,
  class: "rlzc-stat"
}, tg = {
  key: 1,
  class: "rlzc-stat"
}, ng = {
  key: 2,
  class: "rlzc-stat"
}, sg = {
  key: 3,
  class: "rlzc-stat"
}, ig = {
  key: 0,
  class: "rlzc-subline"
}, rg = {
  key: 1,
  class: "rlzc-note"
}, og = {
  key: 2,
  class: "rlzc-card"
}, lg = { class: "rlzc-kv" }, ag = { class: "rlzc-kv" }, cg = {
  key: 0,
  class: "rlzc-note rlzc-note-warn"
}, Ag = {
  key: 3,
  class: "rlzc-note"
}, ug = {
  key: 4,
  class: "rlzc-card"
}, dg = {
  key: 0,
  class: "rlzc-kv"
}, fg = { class: "rlzc-mono" }, pg = {
  key: 1,
  class: "rlzc-tasks"
}, hg = {
  key: 2,
  class: "rlzc-ps"
}, mg = { class: "rlzc-actions" }, gg = ["disabled"], xg = ["disabled"], yg = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, vg = {
  key: 2,
  class: "rlzc-card"
}, bg = { class: "rlzc-row" }, kg = ["value"], wg = ["disabled"], _g = /* @__PURE__ */ Le({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ he(""), n = H(() => !!f.session && !!f.pack), s = H(() => f.progress), i = H(() => n.value && !!s.value && !s.value.ended), r = H(() => f.packs.find((h) => h.id === t.value) ?? null), o = H(() => !!f.pack?.phases.length), l = H(() => f.settings.panelDisplay !== "statusbar"), a = H(() => {
      const h = s.value;
      return h ? o.value ? `${h.warn ? "⚠️ " : ""}${h.round}/${h.phase.cap}` : `第${h.round}轮` : "";
    }), c = H(() => {
      const h = s.value;
      return h ? h.limit?.text ? h.limit.text : h.panel?.limit || f.session?.briefing?.limit || "—" : "";
    }), A = H(() => {
      const h = s.value;
      return !!h && !h.ended && o.value && h.phase.cap > 0 && h.nextRound < h.phase.cap;
    });
    async function d() {
      t.value && (await lm(t.value), t.value = "");
    }
    return (h, g) => (z(), $("div", Ym, [
      n.value && s.value ? (z(), $(Q, { key: 0 }, [
        u("div", Km, [
          u("div", qm, [
            u("span", Jm, P(F(f).pack?.rest ? "—" : F(f).pack.level), 1),
            u("h3", null, P(F(f).pack.name), 1),
            s.value.ended ? (z(), $("span", Zm, "已结束")) : Y("", !0)
          ]),
          F(f).session?.briefing?.goal ? (z(), $("p", Qm, "目标：" + P(F(f).session.briefing.goal), 1)) : Y("", !0)
        ]),
        u("div", Xm, [
          o.value ? (z(), $("div", eg, [
            g[3] || (g[3] = u("span", null, "阶段", -1)),
            u("b", null, P(s.value.phase.name), 1)
          ])) : Y("", !0),
          u("div", {
            class: ne(["rlzc-stat", { warn: s.value.warn }])
          }, [
            g[4] || (g[4] = u("span", null, "轮次", -1)),
            u("b", null, P(a.value), 1)
          ], 2),
          s.value.currentClock ? (z(), $("div", tg, [
            g[5] || (g[5] = u("span", null, "钟时", -1)),
            u("b", null, P(s.value.currentClock), 1)
          ])) : Y("", !0),
          s.value.roundsLeft ? (z(), $("div", ng, [
            g[6] || (g[6] = u("span", null, "最多剩余轮次", -1)),
            u("b", null, P(s.value.roundsLeft.x) + "/" + P(s.value.roundsLeft.y), 1)
          ])) : Y("", !0),
          l.value ? (z(), $("div", sg, [
            g[7] || (g[7] = u("span", null, "剩余时间", -1)),
            u("b", null, P(c.value), 1)
          ])) : Y("", !0),
          Se(oo)
        ]),
        F(f).subLine ? (z(), $("p", ig, P(F(f).subLine), 1)) : Y("", !0),
        s.value.skipGoal ? (z(), $("div", rg, "快进中：目标 " + P(F(f).pack.phases.find((v) => v.id === s.value.skipGoal.phase)?.name) + " 第" + P(s.value.skipGoal.round) + "轮", 1)) : Y("", !0),
        s.value.ended && s.value.settlement ? (z(), $("div", og, [
          u("div", lg, [
            g[8] || (g[8] = u("span", null, "结果", -1)),
            u("b", null, P(s.value.settlement.result ?? "—"), 1)
          ]),
          u("div", ag, [
            g[9] || (g[9] = u("span", null, "评价", -1)),
            u("b", null, P(s.value.settlement.rating ?? "—"), 1)
          ]),
          F(f).session?.clearance && s.value.settlement.result === "失败" ? (z(), $("div", cg, " 清算未通关 ")) : Y("", !0)
        ])) : s.value.ended ? (z(), $("div", Ag, "副本已手动结束。")) : Y("", !0),
        l.value && s.value.panel ? (z(), $("div", ug, [
          s.value.panel.progressBar ? (z(), $("div", dg, [
            g[10] || (g[10] = u("span", null, "进度", -1)),
            u("b", fg, P(s.value.panel.progressBar), 1)
          ])) : Y("", !0),
          s.value.panel.tasks.length ? (z(), $("div", pg, [
            g[11] || (g[11] = u("span", null, "任务", -1)),
            u("ul", null, [
              (z(!0), $(Q, null, me(s.value.panel.tasks, (v, w) => (z(), $("li", { key: w }, P(v), 1))), 128))
            ])
          ])) : Y("", !0),
          s.value.panel.ps ? (z(), $("div", hg, "ps：" + P(s.value.panel.ps), 1)) : Y("", !0)
        ])) : Y("", !0),
        u("div", mg, [
          u("button", {
            class: "rlzc-btn",
            disabled: !A.value,
            onClick: g[0] || (g[0] = //@ts-ignore
            (...v) => F(Jr) && F(Jr)(...v))
          }, "跳过（到本阶段结束）", 8, gg),
          u("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: g[1] || (g[1] = //@ts-ignore
            (...v) => F(Zr) && F(Zr)(...v))
          }, "手动结束副本", 8, xg)
        ]),
        i.value && F(f).pack.docs?.length ? (z(), at(ro, {
          key: 5,
          pack: F(f).pack
        }, null, 8, ["pack"])) : Y("", !0)
      ], 64)) : (z(), $("div", yg, [
        g[12] || (g[12] = u("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        Se(oo)
      ])),
      i.value ? Y("", !0) : (z(), $("div", vg, [
        g[14] || (g[14] = u("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        u("div", bg, [
          xt(u("select", {
            "onUpdate:modelValue": g[2] || (g[2] = (v) => t.value = v),
            class: "rlzc-input"
          }, [
            g[13] || (g[13] = u("option", { value: "" }, "选择副本…", -1)),
            (z(!0), $(Q, null, me(F(f).packs, (v) => (z(), $("option", {
              key: v.id,
              value: v.id
            }, P(v.level) + "｜" + P(v.name), 9, kg))), 128))
          ], 512), [
            [dl, t.value]
          ]),
          u("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: d
          }, "进入", 8, wg)
        ])
      ])),
      !i.value && r.value?.docs?.length ? (z(), at(ro, {
        key: 3,
        pack: r.value
      }, null, 8, ["pack"])) : Y("", !0)
    ]));
  }
}), zg = { class: "rlzc-ledger" }, $g = { class: "rlzc-card rlzc-ledger-hero-card" }, Sg = { class: "rlzc-ledger-hero-cols" }, Eg = { class: "rlzc-ledger-hero-col" }, Cg = { class: "rlzc-ledger-hero-col-val" }, Mg = { class: "rlzc-ledger-hero-col" }, Ig = { class: "rlzc-ledger-hero-col-val" }, Tg = { class: "rlzc-ledger-hero-col" }, Pg = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, Ng = { class: "rlzc-card" }, jg = {
  key: 0,
  class: "rlzc-ledger-list"
}, Rg = { class: "rlzc-ledger-item-left" }, Fg = { class: "rlzc-ledger-item-src" }, Og = { class: "rlzc-ledger-item-time" }, Lg = {
  key: 1,
  class: "rlzc-hint"
}, Dg = /* @__PURE__ */ Le({
  __name: "LedgerTab",
  setup(e) {
    const t = H(() => q()), n = H(() => Jt(t.value)), s = H(() => f.ledger), i = H(() => ln(n.value.value, s.value)), r = H(() => f.pack?.level ?? "D"), o = H(() => Kt[r.value]), l = H(() => Vn(n.value.value, s.value, o.value)), a = H(() => Math.max(0, o.value - i.value)), c = H(() => n.value.source === "默认值");
    function A(g) {
      return new Intl.NumberFormat("zh-CN").format(g);
    }
    function d(g) {
      return (g >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(g);
    }
    function h(g) {
      try {
        const v = new Date(g), w = String(v.getMonth() + 1).padStart(2, "0"), L = String(v.getDate()).padStart(2, "0"), V = String(v.getHours()).padStart(2, "0"), T = String(v.getMinutes()).padStart(2, "0");
        return `${w}-${L} ${V}:${T}`;
      } catch {
        return g;
      }
    }
    return (g, v) => (z(), $("div", zg, [
      u("div", $g, [
        v[3] || (v[3] = u("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        u("b", {
          class: ne(["rlzc-ledger-hero-num", { negative: i.value < 0 }])
        }, P(A(i.value)), 3),
        v[4] || (v[4] = u("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        u("div", Sg, [
          u("div", Eg, [
            v[0] || (v[0] = u("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            u("span", Cg, P(r.value), 1)
          ]),
          u("div", Mg, [
            v[1] || (v[1] = u("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            u("span", Ig, P(A(o.value)), 1)
          ]),
          u("div", Tg, [
            v[2] || (v[2] = u("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            u("span", {
              class: ne(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": l.value }])
            }, P(l.value ? `距线 ${A(a.value)}` : "无"), 3)
          ])
        ]),
        c.value ? (z(), $("p", Pg, "初始积分按 1000 计，可在设置页修改")) : Y("", !0)
      ]),
      u("div", Ng, [
        v[5] || (v[5] = u("h4", null, "流水", -1)),
        s.value.length ? (z(), $("ul", jg, [
          (z(!0), $(Q, null, me([...s.value].reverse(), (w) => (z(), $("li", {
            key: `${w.mesIndex}-${w.delta}-${w.at}`,
            class: "rlzc-ledger-item"
          }, [
            u("div", Rg, [
              u("span", Fg, P(w.source), 1),
              u("span", Og, P(h(w.at)), 1)
            ]),
            u("span", {
              class: ne(["rlzc-ledger-item-delta", w.delta >= 0 ? "pos" : "neg"])
            }, P(d(w.delta)), 3)
          ]))), 128))
        ])) : (z(), $("p", Lg, "还没有收支记录。"))
      ])
    ]));
  }
}), Bg = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, Vg = ["aria-expanded"], Ug = ["data-kind"], Wg = {
  key: 0,
  class: "rlzc-collapse-body"
}, Hg = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, Gg = {
  key: 0,
  class: "rlzc-preset-area"
}, Yg = { class: "rlzc-preset-row" }, Kg = ["value"], qg = {
  key: 0,
  value: ""
}, Jg = ["value"], Zg = ["disabled"], Qg = ["disabled"], Xg = { class: "rlzc-stacked-field" }, ex = ["value"], tx = { class: "rlzc-stacked-field" }, nx = { class: "rlzc-key-wrap" }, sx = ["type", "value"], ix = ["aria-label"], rx = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, ox = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, lx = { class: "rlzc-stacked-field" }, ax = ["value"], cx = ["value"], Ax = ["value"], ux = ["value"], dx = { class: "rlzc-conn-row" }, fx = ["data-kind"], px = ["disabled"], hx = {
  key: 1,
  class: "rlzc-option-list"
}, mx = { class: "rlzc-option-row" }, gx = ["aria-checked"], xx = { class: "rlzc-option-row" }, yx = ["aria-checked"], vx = { class: "rlzc-option-row rlzc-option-row-timeout" }, bx = { class: "rlzc-timeout-wrap" }, kx = ["value"], wx = /* @__PURE__ */ Le({
  __name: "SubApiCard",
  setup(e) {
    const t = H(() => f.settings.subApi), n = H(() => t.value.presets.find((D) => D.id === t.value.presetId) ?? null), s = /* @__PURE__ */ he([]), i = /* @__PURE__ */ he(!1), r = /* @__PURE__ */ he(!1), o = /* @__PURE__ */ he("none"), l = /* @__PURE__ */ he(""), a = H(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : o.value === "ok" ? { kind: "on", text: "已连接" } : o.value === "fail" ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" }), c = H(() => f.settings.cardCollapsed.subApi);
    function A() {
      f.settings.cardCollapsed.subApi = !f.settings.cardCollapsed.subApi, h();
    }
    const d = H(() => o.value === "ok" ? `已连接 · 共 ${s.value.length} 个模型` : o.value === "fail" ? `连接失败：${l.value}` : "未测试");
    function h() {
      de();
    }
    function g(D) {
      t.value.source = D, o.value = "none", h();
    }
    function v() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function w() {
      const D = (await Hr("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!D) return;
      const E = { id: v(), name: D, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, E], t.value.presetId = E.id, s.value = [], o.value = "none", h();
    }
    async function L() {
      if (!n.value) return;
      const D = (await Hr("改名为：", n.value.name))?.trim();
      D && (n.value.name = D, h());
    }
    async function V() {
      n.value && await St(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((D) => D.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", s.value = [], o.value = "none", h());
    }
    function T(D) {
      t.value.presetId = D.target.value, s.value = [], o.value = "none", h();
    }
    function y(D, E) {
      n.value && (n.value[D] = E.target.value.trim(), h());
    }
    async function x() {
      if (n.value) {
        r.value = !0, o.value = "none", l.value = "";
        try {
          const D = await gp(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          s.value = D.models, !n.value.model && D.models.length && (n.value.model = D.models[0], h()), o.value = "ok";
        } catch (D) {
          o.value = "fail", l.value = Os(D), s.value = await ql(n.value).catch(() => []);
        } finally {
          r.value = !1;
        }
      }
    }
    function _(D) {
      const E = Math.floor(Number(D.target.value));
      if (!Number.isFinite(E) || E < 5) {
        Ce("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = E, h();
    }
    function O(D, E) {
      t.value[D] = E, h();
    }
    return (D, E) => (z(), $("div", Bg, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !c.value,
        onClick: A
      }, [
        E[9] || (E[9] = u("h4", null, "副本事件检测", -1)),
        u("span", {
          class: "rlzc-dot",
          "data-kind": a.value.kind
        }, P(a.value.text), 9, Ug),
        u("span", {
          class: ne(["rlzc-collapse-arrow", { open: !c.value }])
        }, "▸", 2)
      ], 8, Vg),
      c.value ? Y("", !0) : (z(), $("div", Wg, [
        E[24] || (E[24] = u("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        u("div", Hg, [
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
        t.value.source === "preset" ? (z(), $("div", Gg, [
          u("div", Yg, [
            u("select", {
              class: "rlzc-input",
              value: t.value.presetId,
              onChange: T
            }, [
              t.value.presets.length ? Y("", !0) : (z(), $("option", qg, "还没有保存的接口")),
              (z(!0), $(Q, null, me(t.value.presets, (b) => (z(), $("option", {
                key: b.id,
                value: b.id
              }, P(b.name), 9, Jg))), 128))
            ], 40, Kg),
            u("button", {
              class: "rlzc-icon-btn",
              "aria-label": "新建接口",
              type: "button",
              onClick: w
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
              onClick: L
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
            ])], 8, Zg),
            u("button", {
              class: "rlzc-icon-btn rlzc-danger",
              "aria-label": "删除接口",
              type: "button",
              disabled: !n.value,
              onClick: V
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
            ])], 8, Qg)
          ]),
          n.value ? (z(), $(Q, { key: 0 }, [
            u("div", Xg, [
              E[13] || (E[13] = u("label", { class: "rlzc-label" }, "地址", -1)),
              u("input", {
                class: "rlzc-input",
                value: n.value.url,
                placeholder: "https://…/v1",
                onChange: E[3] || (E[3] = (b) => y("url", b))
              }, null, 40, ex)
            ]),
            u("div", tx, [
              E[16] || (E[16] = u("label", { class: "rlzc-label" }, "密钥", -1)),
              u("div", nx, [
                u("input", {
                  class: "rlzc-input",
                  type: i.value ? "text" : "password",
                  value: n.value.key,
                  autocomplete: "off",
                  onChange: E[4] || (E[4] = (b) => y("key", b))
                }, null, 40, sx),
                u("button", {
                  class: "rlzc-eye-btn",
                  type: "button",
                  "aria-label": i.value ? "隐藏密钥" : "显示密钥",
                  onClick: E[5] || (E[5] = (b) => i.value = !i.value)
                }, [
                  i.value ? (z(), $("svg", rx, [...E[14] || (E[14] = [
                    u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    u("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1),
                    u("path", { d: "M2 2l12 12" }, null, -1)
                  ])])) : (z(), $("svg", ox, [...E[15] || (E[15] = [
                    u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    u("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1)
                  ])]))
                ], 8, ix)
              ])
            ]),
            u("div", lx, [
              E[17] || (E[17] = u("label", { class: "rlzc-label" }, "模型", -1)),
              s.value.length ? (z(), $("select", {
                key: 0,
                class: "rlzc-input",
                value: n.value.model,
                onChange: E[6] || (E[6] = (b) => y("model", b))
              }, [
                s.value.includes(n.value.model) ? Y("", !0) : (z(), $("option", {
                  key: 0,
                  value: n.value.model
                }, P(n.value.model || "请选择…"), 9, cx)),
                (z(!0), $(Q, null, me(s.value, (b) => (z(), $("option", {
                  key: b,
                  value: b
                }, P(b), 9, Ax))), 128))
              ], 40, ax)) : (z(), $("input", {
                key: 1,
                class: "rlzc-input rlzc-input-disabled",
                value: n.value.model ? n.value.model : "先测试连接",
                readonly: "",
                tabindex: "-1"
              }, null, 8, ux))
            ]),
            u("div", dx, [
              u("span", {
                class: "rlzc-dot",
                "data-kind": o.value === "ok" ? "on" : o.value === "fail" ? "warn" : "off"
              }, P(d.value), 9, fx),
              u("button", {
                class: "rlzc-btn ghost",
                disabled: r.value || !n.value.url,
                onClick: x
              }, "测试连接", 8, px)
            ])
          ], 64)) : Y("", !0)
        ])) : Y("", !0),
        t.value.source !== "off" ? (z(), $("div", hx, [
          u("div", mx, [
            E[19] || (E[19] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "省钱模式"),
              u("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: ne(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: E[7] || (E[7] = (b) => O("saveMode", !t.value.saveMode))
            }, [...E[18] || (E[18] = [
              u("span", null, null, -1)
            ])], 10, gx)
          ]),
          u("div", xx, [
            E[21] || (E[21] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "等检测完再写下一轮"),
              u("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: ne(["rlzc-toggle", { on: t.value.wait }]),
              onClick: E[8] || (E[8] = (b) => O("wait", !t.value.wait))
            }, [...E[20] || (E[20] = [
              u("span", null, null, -1)
            ])], 10, yx)
          ]),
          u("div", vx, [
            E[23] || (E[23] = u("span", null, "超时", -1)),
            u("div", bx, [
              u("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: _
              }, null, 40, kx),
              E[22] || (E[22] = u("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : Y("", !0)
      ]))
    ]));
  }
}), _x = { class: "rlzc-card rlzc-collapsible rlzc-live-card" }, zx = ["aria-expanded"], $x = {
  key: 0,
  class: "rlzc-dot",
  "data-kind": "on"
}, Sx = {
  key: 0,
  class: "rlzc-collapse-body"
}, Ex = { class: "rlzc-option-list" }, Cx = { class: "rlzc-option-row rlzc-option-row-stack" }, Mx = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "弹幕来源"
}, Ix = ["disabled"], Tx = {
  key: 0,
  class: "rlzc-hint"
}, Px = {
  key: 0,
  class: "rlzc-option-row"
}, Nx = { class: "rlzc-timeout-wrap" }, jx = ["value"], Rx = { class: "rlzc-option-row" }, Fx = ["aria-checked"], Ox = /* @__PURE__ */ Le({
  __name: "LiveCard",
  setup(e) {
    const t = H(() => f.settings.live), n = H(() => f.settings.subApi.source !== "off"), s = H(() => n.value ? t.value.source : "local"), i = H(() => (f.tick, f.session, rr(/* @__PURE__ */ new Set()).on)), r = H(() => f.settings.cardCollapsed.live);
    function o() {
      f.settings.cardCollapsed.live = !f.settings.cardCollapsed.live, de();
    }
    function l(A) {
      A === "ai" && !n.value || (t.value.source = A, de());
    }
    function a(A) {
      const d = Math.floor(Number(A.target.value));
      t.value.freq = Number.isFinite(d) ? Math.max(1, Math.min(10, d)) : 3, A.target.value = String(t.value.freq), de();
    }
    function c(A) {
      t.value.injectToAI = A, de();
    }
    return (A, d) => (z(), $("div", _x, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !r.value,
        onClick: o
      }, [
        d[3] || (d[3] = u("h4", null, "直播", -1)),
        i.value ? (z(), $("span", $x, "直播中")) : Y("", !0),
        u("span", {
          class: ne(["rlzc-collapse-arrow", { open: !r.value }])
        }, "▸", 2)
      ], 8, zx),
      r.value ? Y("", !0) : (z(), $("div", Sx, [
        d[10] || (d[10] = u("p", { class: "rlzc-hint" }, "开播后有观众弹幕和打赏，打赏计入积分。画面在状态栏的直播页。", -1)),
        u("div", Ex, [
          u("div", Cx, [
            d[4] || (d[4] = u("span", { class: "rlzc-option-label" }, [
              u("span", null, "弹幕来源")
            ], -1)),
            u("div", Mx, [
              u("button", {
                class: ne({ on: s.value === "local" }),
                onClick: d[0] || (d[0] = (h) => l("local"))
              }, "本地", 2),
              u("button", {
                class: ne({ on: s.value === "ai" }),
                disabled: !n.value,
                onClick: d[1] || (d[1] = (h) => l("ai"))
              }, "本地+AI", 10, Ix)
            ]),
            n.value ? Y("", !0) : (z(), $("small", Tx, "需先在副本事件检测里选接口"))
          ]),
          s.value === "ai" ? (z(), $("div", Px, [
            d[7] || (d[7] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "生成频率"),
              u("small", null, "关键事件时另加一次")
            ], -1)),
            u("div", Nx, [
              d[5] || (d[5] = u("span", { class: "rlzc-unit" }, "每", -1)),
              u("input", {
                type: "number",
                min: "1",
                max: "10",
                class: "rlzc-input rlzc-input-num",
                value: t.value.freq,
                onChange: a
              }, null, 40, jx),
              d[6] || (d[6] = u("span", { class: "rlzc-unit" }, "轮", -1))
            ])
          ])) : Y("", !0),
          u("div", Rx, [
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
            ])], 10, Fx)
          ])
        ])
      ]))
    ]));
  }
}), Lx = { class: "rlzc-settings" }, Dx = { class: "rlzc-card" }, Bx = ["value"], Vx = { class: "rlzc-card rlzc-collapsible" }, Ux = ["aria-expanded"], Wx = {
  key: 0,
  class: "rlzc-collapse-body"
}, Hx = { class: "rlzc-ledger-status" }, Gx = { class: "rlzc-row" }, Yx = ["placeholder"], Kx = ["disabled"], qx = { class: "rlzc-row" }, Jx = ["disabled"], Zx = { class: "rlzc-row" }, Qx = { class: "rlzc-seg-group" }, Xx = ["onClick"], ey = ["disabled"], ty = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, ny = { class: "rlzc-card rlzc-collapsible" }, sy = ["aria-expanded"], iy = {
  key: 0,
  class: "rlzc-collapse-body"
}, ry = { class: "rlzc-depth" }, oy = { class: "rlzc-field" }, ly = ["value"], ay = { class: "rlzc-field" }, cy = ["value"], Ay = { class: "rlzc-field" }, uy = ["value"], dy = { class: "rlzc-field" }, fy = ["value"], py = { class: "rlzc-field" }, hy = ["value"], my = { class: "rlzc-card rlzc-collapsible" }, gy = ["aria-expanded"], xy = {
  key: 0,
  class: "rlzc-collapse-body"
}, yy = ["value", "onChange"], vy = { class: "rlzc-card" }, by = {
  key: 0,
  class: "rlzc-list"
}, ky = ["onClick"], wy = {
  key: 1,
  class: "rlzc-hint"
}, _y = {
  key: 2,
  class: "rlzc-errors"
}, zy = { class: "rlzc-card" }, $y = { class: "rlzc-check" }, Sy = ["checked"], Ey = { class: "rlzc-check" }, Cy = ["checked"], My = /* @__PURE__ */ Le({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ he([]), n = /* @__PURE__ */ he(null), s = /* @__PURE__ */ he(null), i = /* @__PURE__ */ he(null), r = /* @__PURE__ */ he(""), o = /* @__PURE__ */ he(""), l = /* @__PURE__ */ he(""), a = ["D", "C", "B", "A", "S"], c = H(() => Jt(q())), A = H(() => ln(c.value.value, f.ledger)), d = H(() => f.pack?.level ?? "D"), h = H(() => Kt[d.value]), g = H(() => Vn(c.value.value, f.ledger, h.value));
    function v() {
      s.value !== null && (em(s.value), s.value = null);
    }
    function w() {
      i.value !== null && (Xh(i.value, r.value || "手动"), i.value = null, r.value = "");
    }
    function L() {
      !o.value && !l.value || (tm(o.value || void 0, l.value || void 0), o.value = "", l.value = "", Ce("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function V(E, b) {
      const U = Math.max(0, Math.min(1e4, Math.floor(Number(b.target.value) || 0)));
      f.settings.depths[E] = U, de();
    }
    async function T(E) {
      const b = E.target, U = b.files?.[0];
      b.value = "", U && (t.value = qh(await U.text()), t.value.length || Ce("success", `已导入副本包：${U.name}`));
    }
    async function y(E, b) {
      await St(`确定删除自定义副本包《${b}》吗？`) && Jh(E);
    }
    function x(E, b) {
      const U = Math.floor(Number(b.target.value));
      !Number.isFinite(U) || U < 1 || (f.settings.genericCaps = { ...f.settings.genericCaps, [E]: U }, de());
    }
    function _(E) {
      xm(E.target.value);
    }
    function O(E, b) {
      f.settings[E] = b.target.checked, de();
    }
    function D(E) {
      f.settings.cardCollapsed[E] = !f.settings.cardCollapsed[E], de();
    }
    return (E, b) => (z(), $(Q, null, [
      u("div", Lx, [
        u("div", Dx, [
          b[16] || (b[16] = u("h4", null, "副本信息显示位置", -1)),
          u("select", {
            class: "rlzc-input",
            value: F(f).settings.panelDisplay,
            onChange: _
          }, [...b[15] || (b[15] = [
            u("option", { value: "panel" }, "扩展面板（默认）", -1),
            u("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, Bx),
          b[17] || (b[17] = u("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        u("div", Vx, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !F(f).settings.cardCollapsed.accountFix,
            onClick: b[0] || (b[0] = (U) => D("accountFix"))
          }, [
            b[18] || (b[18] = u("h4", null, "账户校正", -1)),
            u("span", {
              class: ne(["rlzc-collapse-arrow", { open: !F(f).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, Ux),
          F(f).settings.cardCollapsed.accountFix ? Y("", !0) : (z(), $("div", Wx, [
            b[20] || (b[20] = u("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            u("div", Hx, [
              u("span", null, [
                b[19] || (b[19] = je("当前余额：", -1)),
                u("b", null, P(A.value), 1)
              ]),
              u("span", null, P(g.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            b[21] || (b[21] = u("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            u("div", Gx, [
              xt(u("input", {
                "onUpdate:modelValue": b[1] || (b[1] = (U) => s.value = U),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${c.value.value}`
              }, null, 8, Yx), [
                [
                  en,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: v
              }, "保存", 8, Kx)
            ]),
            b[22] || (b[22] = u("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            u("div", qx, [
              xt(u("input", {
                "onUpdate:modelValue": b[2] || (b[2] = (U) => i.value = U),
                type: "number",
                class: "rlzc-input",
                placeholder: "金额（正/负）"
              }, null, 512), [
                [
                  en,
                  i.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              xt(u("input", {
                "onUpdate:modelValue": b[3] || (b[3] = (U) => r.value = U),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [en, r.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: i.value === null,
                onClick: w
              }, "追加", 8, Jx)
            ]),
            b[23] || (b[23] = u("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            b[24] || (b[24] = u("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            u("div", Zx, [
              u("div", Qx, [
                (z(), $(Q, null, me(a, (U) => u("button", {
                  key: U,
                  class: ne(["rlzc-seg", { active: o.value === U }]),
                  onClick: (we) => o.value = o.value === U ? "" : U
                }, P(U), 11, Xx)), 64))
              ]),
              xt(u("input", {
                "onUpdate:modelValue": b[4] || (b[4] = (U) => l.value = U),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [en, l.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: !o.value && !l.value,
                onClick: L
              }, "校正", 8, ey)
            ]),
            F(f).ledger.length === 0 && c.value.source === "默认值" ? (z(), $("p", ty, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : Y("", !0)
          ]))
        ]),
        u("div", ny, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !F(f).settings.cardCollapsed.depths,
            onClick: b[5] || (b[5] = (U) => D("depths"))
          }, [
            b[25] || (b[25] = u("h4", null, "注入深度", -1)),
            u("span", {
              class: ne(["rlzc-collapse-arrow", { open: !F(f).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, sy),
          F(f).settings.cardCollapsed.depths ? Y("", !0) : (z(), $("div", iy, [
            b[31] || (b[31] = u("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            u("div", ry, [
              u("label", oy, [
                b[26] || (b[26] = u("span", null, [
                  je("副本暗号"),
                  u("small", null, "触发世界书的副本条目")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: F(f).settings.depths.token,
                  onChange: b[6] || (b[6] = (U) => V("token", U))
                }, null, 40, ly)
              ]),
              u("label", ay, [
                b[27] || (b[27] = u("span", null, [
                  je("副本进度"),
                  u("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: F(f).settings.depths.progress,
                  onChange: b[7] || (b[7] = (U) => V("progress", U))
                }, null, 40, cy)
              ]),
              u("label", Ay, [
                b[28] || (b[28] = u("span", null, [
                  je("本轮指令"),
                  u("small", null, "本轮事件与时限写法")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: F(f).settings.depths.turn,
                  onChange: b[8] || (b[8] = (U) => V("turn", U))
                }, null, 40, uy)
              ]),
              u("label", dy, [
                b[29] || (b[29] = u("span", null, [
                  je("账户"),
                  u("small", null, "积分余额与清算状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: F(f).settings.depths.ledger,
                  onChange: b[9] || (b[9] = (U) => V("ledger", U))
                }, null, 40, fy)
              ]),
              u("label", py, [
                b[30] || (b[30] = u("span", null, [
                  je("直播"),
                  u("small", null, "在看人数与最近弹幕")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: F(f).settings.depths.live,
                  onChange: b[10] || (b[10] = (U) => V("live", U))
                }, null, 40, hy)
              ])
            ])
          ]))
        ]),
        Se(wx),
        Se(Ox),
        u("div", my, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !F(f).settings.cardCollapsed.genericCaps,
            onClick: b[11] || (b[11] = (U) => D("genericCaps"))
          }, [
            b[32] || (b[32] = u("h4", null, "通用副本默认轮数上限", -1)),
            u("span", {
              class: ne(["rlzc-collapse-arrow", { open: !F(f).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, gy),
          F(f).settings.cardCollapsed.genericCaps ? Y("", !0) : (z(), $("div", xy, [
            b[33] || (b[33] = u("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (z(), $(Q, null, me(a, (U) => u("label", {
              key: U,
              class: "rlzc-field"
            }, [
              u("span", null, P(U) + " 级", 1),
              u("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: F(f).settings.genericCaps[U],
                onChange: (we) => x(U, we)
              }, null, 40, yy)
            ])), 64))
          ]))
        ]),
        u("div", vy, [
          b[34] || (b[34] = u("h4", null, "自定义副本包", -1)),
          F(f).settings.customPacks.length ? (z(), $("ul", by, [
            (z(!0), $(Q, null, me(F(f).settings.customPacks, (U) => (z(), $("li", {
              key: U.id
            }, [
              u("span", null, [
                je(P(U.level) + "｜" + P(U.name) + " ", 1),
                u("small", null, "v" + P(U.version), 1)
              ]),
              u("button", {
                class: "rlzc-btn ghost small",
                onClick: (we) => y(U.id, U.name)
              }, "删除", 8, ky)
            ]))), 128))
          ])) : (z(), $("p", wy, "还没有导入自定义副本包。")),
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
            onClick: b[12] || (b[12] = (U) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (z(), $("ul", _y, [
            (z(!0), $(Q, null, me(t.value, (U, we) => (z(), $("li", { key: we }, P(U), 1))), 128))
          ])) : Y("", !0)
        ]),
        u("div", zy, [
          b[37] || (b[37] = u("h4", null, "其他", -1)),
          u("label", $y, [
            u("input", {
              type: "checkbox",
              checked: F(f).settings.showBall,
              onChange: b[13] || (b[13] = (U) => O("showBall", U))
            }, null, 40, Sy),
            b[35] || (b[35] = je("显示悬浮球", -1))
          ]),
          u("label", Ey, [
            u("input", {
              type: "checkbox",
              checked: F(f).settings.debug,
              onChange: b[14] || (b[14] = (U) => O("debug", U))
            }, null, 40, Cy),
            b[36] || (b[36] = je("调试模式", -1))
          ])
        ])
      ]),
      b[38] || (b[38] = u("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), Iy = { class: "rlzc-debug" }, Ty = {
  key: 0,
  class: "rlzc-note"
}, Py = {
  key: 0,
  class: "rlzc-note"
}, Ny = {
  key: 1,
  class: "rlzc-note"
}, jy = {
  key: 2,
  class: "rlzc-card"
}, Ry = { class: "rlzc-row" }, Fy = ["disabled"], Oy = ["value"], Ly = ["disabled"], Dy = { class: "rlzc-row" }, By = ["disabled"], Vy = ["disabled"], Uy = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, Wy = ["aria-expanded"], Hy = {
  key: 0,
  class: "rlzc-collapse-body"
}, Gy = ["onUpdate:modelValue", "disabled"], Yy = ["disabled"], Ky = { class: "rlzc-card" }, qy = {
  key: 0,
  class: "rlzc-hint"
}, Jy = { class: "rlzc-hint" }, Zy = { class: "rlzc-list rlzc-warns" }, Qy = { class: "rlzc-card" }, Xy = {
  key: 0,
  class: "rlzc-list"
}, e0 = ["disabled", "onClick"], t0 = {
  key: 1,
  class: "rlzc-hint"
}, n0 = {
  key: 4,
  class: "rlzc-card"
}, s0 = { class: "rlzc-pre" }, i0 = {
  key: 0,
  class: "rlzc-pre"
}, r0 = {
  class: "rlzc-card",
  open: ""
}, o0 = { class: "rlzc-pre" }, l0 = { class: "rlzc-card" }, a0 = { class: "rlzc-pre" }, c0 = { class: "rlzc-card" }, A0 = { class: "rlzc-pre" }, u0 = { class: "rlzc-card" }, d0 = { class: "rlzc-table" }, f0 = {
  key: 0,
  class: "rlzc-warn-text"
}, p0 = { key: 1 }, h0 = ["disabled"], m0 = {
  key: 2,
  class: "rlzc-card"
}, g0 = { class: "rlzc-table" }, x0 = /* @__PURE__ */ Le({
  __name: "DebugTab",
  setup(e) {
    const t = H(() => f.settings.debug), n = /* @__PURE__ */ he(""), s = /* @__PURE__ */ he(null), i = /* @__PURE__ */ Ms({});
    Ts(
      () => [f.tick, f.pack?.id],
      () => {
        for (const x of Object.keys(i)) delete i[x];
        const y = ya() ?? {};
        for (const x of f.pack?.roles ?? []) i[x] = y[x] ?? "";
      },
      { immediate: !0 }
    );
    const r = H(() => {
      f.tick;
      const y = q(), x = [], _ = f.session?.entryIndex ?? 0;
      for (let O = _; O < y.length; O++) {
        const D = y[O]?.extra?.rlzc;
        D && x.push({ index: O, snap: D });
      }
      return x.reverse().slice(0, 60);
    }), o = H(() => {
      const y = new Set((f.audit?.warnings ?? []).filter((O) => O.kind === "limit" || O.kind === "eventMissed").map((O) => O.index)), x = q(), _ = f.session?.entryIndex ?? 0;
      for (let O = _; O < x.length; O++)
        x[O]?.extra?.rlzc?.ledgerMismatch && y.add(O);
      return y;
    }), l = H(() => {
      if (f.tick, !f.session || !f.pack || !f.progress) return null;
      const y = q(), x = Ls(y, f.progress.entryIndex);
      let _ = null;
      for (let O = y.length - 1; O >= f.progress.entryIndex; O--) {
        const D = y[O]?.extra?.rlzc?.sub;
        if (D) {
          _ = D;
          break;
        }
      }
      return {
        text: x ? Bl(f.pack, x.state) : "",
        state: x?.state ?? null,
        record: _
      };
    }), a = H(() => {
      f.tick;
      const y = q(), x = [];
      for (let _ = y.length - 1; _ >= 0 && x.length < 60; _--) {
        const O = qt(y[_]);
        O && x.push({ index: _, rec: O });
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
      const { perMessage: x, phase: _, next: O, ...D } = y;
      return {
        phase: _.id + " " + _.name,
        ...D,
        next: O ? { round: O.round, skipFrom: O.skipFrom, events: O.events.map((E) => E.id) } : null,
        messages: Object.keys(x).length
      };
    });
    function v() {
      n.value && am(n.value);
    }
    function w() {
      s.value !== null && s.value >= 0 && cm(s.value);
    }
    function L() {
      Am({ ...i });
    }
    const V = (y) => JSON.stringify(y, null, 2);
    function T(y) {
      f.settings.cardCollapsed[y] = !f.settings.cardCollapsed[y], de();
    }
    return (y, x) => (z(), $("div", Iy, [
      F(f).session ? (z(), $(Q, { key: 1 }, [
        t.value ? Y("", !0) : (z(), $("p", Py, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        F(f).pack && F(f).session.packVersion !== F(f).pack.version ? (z(), $("p", Ny, " 入场时副本包版本为 " + P(F(f).session.packVersion) + "，当前为 " + P(F(f).pack.version) + "。 ", 1)) : Y("", !0),
        F(f).pack?.phases.length ? (z(), $("div", jy, [
          x[5] || (x[5] = u("h4", null, "手动修正", -1)),
          u("div", Ry, [
            xt(u("select", {
              "onUpdate:modelValue": x[0] || (x[0] = (_) => n.value = _),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              x[4] || (x[4] = u("option", { value: "" }, "切换到阶段…", -1)),
              (z(!0), $(Q, null, me(F(f).pack.phases, (_) => (z(), $("option", {
                key: _.id,
                value: _.id
              }, P(_.name), 9, Oy))), 128))
            ], 8, Fy), [
              [dl, n.value]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: v
            }, "切换", 8, Ly)
          ]),
          u("div", Dy, [
            xt(u("input", {
              "onUpdate:modelValue": x[1] || (x[1] = (_) => s.value = _),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, By), [
              [
                en,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: w
            }, "修正轮次", 8, Vy)
          ])
        ])) : Y("", !0),
        F(f).pack?.roles?.length ? (z(), $("div", Uy, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !F(f).settings.cardCollapsed.rolesDebug,
            onClick: x[2] || (x[2] = (_) => T("rolesDebug"))
          }, [
            x[6] || (x[6] = u("h4", null, "角色登记", -1)),
            u("span", {
              class: ne(["rlzc-collapse-arrow", { open: !F(f).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, Wy),
          F(f).settings.cardCollapsed.rolesDebug ? Y("", !0) : (z(), $("div", Hy, [
            (z(!0), $(Q, null, me(F(f).pack.roles, (_) => (z(), $("label", {
              key: _,
              class: "rlzc-field"
            }, [
              u("span", null, P(_), 1),
              xt(u("input", {
                "onUpdate:modelValue": (O) => i[_] = O,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, Gy), [
                [en, i[_]]
              ])
            ]))), 128)),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: L
            }, "保存登记", 8, Yy)
          ]))
        ])) : Y("", !0),
        u("div", Ky, [
          x[8] || (x[8] = u("h4", null, "<副本> 核对", -1)),
          F(f).audit?.warnings.length ? (z(), $(Q, { key: 1 }, [
            u("p", Jy, "共 " + P(F(f).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            u("ul", Zy, [
              (z(!0), $(Q, null, me(F(f).audit.warnings.slice(-30).reverse(), (_, O) => (z(), $("li", { key: O }, [
                u("span", null, [
                  u("small", null, "#" + P(_.index) + "｜" + P(_.phase) + "第" + P(_.round) + "轮", 1),
                  x[7] || (x[7] = u("br", null, null, -1)),
                  je("⚠️ " + P(_.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (z(), $("p", qy, "没有发现问题。"))
        ]),
        u("div", Qy, [
          x[9] || (x[9] = u("h4", null, "手动操作记录", -1)),
          F(f).session.manual.length ? (z(), $("ul", Xy, [
            (z(!0), $(Q, null, me(F(f).session.manual, (_, O) => (z(), $("li", { key: O }, [
              u("code", null, "#" + P(_.atIndex) + " " + P(_.kind) + " " + P("phase" in _ ? _.phase : "") + P("round" in _ ? _.round : "") + P("targetPhase" in _ ? `${_.targetPhase}:${_.targetRound}` : ""), 1),
              u("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (D) => F(um)(O)
              }, "撤销", 8, e0)
            ]))), 128))
          ])) : (z(), $("p", t0, "无"))
        ]),
        l.value && (l.value.state || l.value.record) ? (z(), $("details", n0, [
          x[10] || (x[10] = u("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          u("pre", s0, P(l.value.text || "（尚无状态）"), 1),
          l.value.record ? (z(), $("pre", i0, P(V(l.value.record)), 1)) : Y("", !0),
          x[11] || (x[11] = u("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : Y("", !0),
        u("details", r0, [
          x[12] || (x[12] = u("summary", null, "本次注入", -1)),
          u("pre", o0, P([F(f).lastInjection.token, F(f).lastInjection.progress, F(f).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        u("details", l0, [
          x[13] || (x[13] = u("summary", null, "重放结果", -1)),
          u("pre", a0, P(V(g.value)), 1)
        ]),
        u("details", c0, [
          x[14] || (x[14] = u("summary", null, "会话原始数据", -1)),
          u("pre", A0, P(V(F(f).session)), 1)
        ]),
        u("details", u0, [
          x[16] || (x[16] = u("summary", null, "每楼快照（最近60条）", -1)),
          u("table", d0, [
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
              (z(!0), $(Q, null, me(r.value, (_) => (z(), $("tr", {
                key: _.index,
                class: ne({ "rlzc-row-warn": o.value.has(_.index) })
              }, [
                u("td", null, P(_.index) + P(_.snap.entry ? "★" : ""), 1),
                u("td", null, P(_.snap.phase), 1),
                u("td", null, P(_.snap.round), 1),
                u("td", null, P(_.snap.clock ?? ""), 1),
                u("td", null, P(_.snap.limit?.text ?? ""), 1),
                u("td", null, P(_.snap.injected.join(" ")), 1),
                u("td", null, P(h(_.snap)), 1),
                _.snap.ledgerMismatch ? (z(), $("td", f0, "状态栏 " + P(_.snap.ledgerMismatch.status) + " / 账本 " + P(_.snap.ledgerMismatch.ledger), 1)) : (z(), $("td", p0))
              ], 2))), 128))
            ])
          ])
        ]),
        u("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: x[3] || (x[3] = //@ts-ignore
          (..._) => F(Qr) && F(Qr)(..._))
        }, "删除副本会话", 8, h0)
      ], 64)) : (z(), $("p", Ty, "当前聊天没有副本会话。")),
      a.value.length ? (z(), $("details", m0, [
        x[18] || (x[18] = u("summary", null, "直播（每楼，最近60条）", -1)),
        u("table", g0, [
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
            (z(!0), $(Q, null, me(a.value, (_) => (z(), $("tr", {
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
}), y0 = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, v0 = { class: "rlzc-head" }, b0 = { class: "rlzc-tabs" }, k0 = ["onClick"], w0 = { class: "rlzc-body" }, _0 = /* @__PURE__ */ Le({
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
        if (!await St("此页会显示副本真相，确定要打开吗？")) return;
        f.debugUnlocked = !0;
      }
      f.tab = s;
    }
    return (s, i) => (z(), $("div", {
      class: "rlzc-backdrop",
      onClick: i[1] || (i[1] = BA((r) => F(f).panelOpen = !1, ["self"]))
    }, [
      u("section", y0, [
        u("header", v0, [
          i[2] || (i[2] = u("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          u("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: i[0] || (i[0] = (r) => F(f).panelOpen = !1)
          }, "×")
        ]),
        u("nav", b0, [
          (z(), $(Q, null, me(t, (r) => u("button", {
            key: r.id,
            class: ne({ on: F(f).tab === r.id }),
            onClick: (o) => n(r.id)
          }, P(r.label), 11, k0)), 64))
        ]),
        u("div", w0, [
          F(f).tab === "system" ? (z(), at(_g, { key: 0 })) : F(f).tab === "ledger" ? (z(), at(Dg, { key: 1 })) : F(f).tab === "settings" ? (z(), at(My, { key: 2 })) : F(f).tab === "debug" && F(f).debugUnlocked ? (z(), at(x0, { key: 3 })) : Y("", !0)
        ])
      ])
    ]));
  }
}), z0 = /* @__PURE__ */ Le({
  __name: "App",
  setup(e) {
    return (t, n) => (z(), $(Q, null, [
      F(f).settings.showBall ? (z(), at(jm, { key: 0 })) : Y("", !0),
      F(f).panelOpen ? (z(), at(_0, { key: 1 })) : Y("", !0)
    ], 64));
  }
}), $0 = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-ball-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--accent);color:var(--bg);font-size:11px;font-weight:700;line-height:18px;text-align:center;pointer-events:none}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field{align-items:flex-start}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-depth .rlzc-field>.rlzc-input{flex:0 0 72px;width:72px}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-conn-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout{justify-content:flex-start;gap:16px}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px}.rlzc-input-num{width:72px;text-align:right;font-variant-numeric:tabular-nums}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-toggle:after{content:"";position:absolute;inset:-10px 0}.rlzc-segsrc button:disabled{opacity:.4;cursor:not-allowed}.rlzc-segsrc button:disabled:hover{background:none;color:var(--muted)}.rlzc-live-card .rlzc-input-num{min-height:44px}.rlzc-option-row-stack{flex-direction:column;align-items:stretch;gap:0}.rlzc-option-row-stack .rlzc-segsrc{margin:6px 0 2px}.rlzc-option-row-stack .rlzc-hint{margin:2px 0 0}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-head .rlzc-dot{font-size:12px}';
function S0(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function Ea(e, t, n) {
  const s = ce().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function E0() {
  const e = S0();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await Ea("/api/extensions/version", e, t);
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
async function C0(e) {
  const t = await Ea("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const lo = "rlzc-host", ao = "rlzc-menu-btn", co = "rlzc-settings-drawer";
function M0() {
  if (document.getElementById(lo)) return;
  const e = document.createElement("div");
  e.id = lo, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = $0, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), WA(z0).mount(s), Ca(), Ma();
}
function Ca(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => Ca(e + 1), 500);
    return;
  }
  if (document.getElementById(ao)) return;
  const n = document.createElement("div");
  n.id = ao, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const i = document.createElement("span");
  i.textContent = "回廊种菜系统", n.append(s, i), n.addEventListener("click", () => {
    f.panelOpen = !f.panelOpen;
  }), t.appendChild(n);
}
function Ma(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => Ma(e + 1), 500);
    return;
  }
  if (document.getElementById(co)) return;
  const n = (O, D = "", E = "") => {
    const b = document.createElement(O);
    return D && (b.className = D), E && (b.textContent = E), b;
  }, s = n("div");
  s.id = co;
  const i = n("div", "inline-drawer"), r = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), r.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const a = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => f.panelOpen = !0);
  const A = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  A.addEventListener("click", () => {
    f.settings.ball = { x: null, y: null }, f.settings.showBall = !0, de();
  });
  const d = n("label", "checkbox_label"), h = document.createElement("input");
  h.type = "checkbox", h.addEventListener("change", () => {
    f.settings.showBall = h.checked, de();
  }), d.append(h, n("span", "", "显示悬浮球")), Ts(() => f.settings.showBall, (O) => h.checked = O, { immediate: !0 });
  const g = n("div", "flex-container");
  g.append(c, A);
  const v = n("div", "flex-container alignitemscenter"), w = n("small", "rlzc-update-status", "正在检查更新…"), L = n("div", "menu_button menu_button_icon", "检查更新"), V = n("div", "menu_button menu_button_icon", "立即更新"), T = n("div", "menu_button menu_button_icon", "刷新页面");
  V.style.display = "none", T.style.display = "none", v.append(w, L, V, T);
  let y = null, x = !1;
  const _ = async () => {
    if (!x) {
      x = !0, w.textContent = "正在检查更新…", V.style.display = "none";
      try {
        y = await E0();
        const O = y.commit ? `（${y.commit}）` : "";
        y.isGit ? y.isUpToDate ? w.textContent = `已是最新版本${O}` : (w.textContent = `有新版本可以更新，当前${O || "版本较旧"}`, V.style.display = "") : w.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = y.isGit && !y.isUpToDate ? "" : "none";
      } catch (O) {
        w.textContent = `检查更新失败：${O.message}`;
      } finally {
        x = !1;
      }
    }
  };
  L.addEventListener("click", () => void _()), V.addEventListener("click", async () => {
    if (!(!y || x)) {
      x = !0, w.textContent = "正在更新…", V.style.display = "none";
      try {
        await C0(y), l.style.display = "none", w.textContent = "更新完成，刷新页面后生效。", T.style.display = "";
      } catch (O) {
        w.textContent = `更新失败：${O.message}`, V.style.display = "";
      } finally {
        x = !1;
      }
    }
  }), T.addEventListener("click", () => location.reload()), setTimeout(() => void _(), 3e3), a.append(g, d, v, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), i.append(r, a), s.append(i), t.append(s);
}
globalThis.rlzcInterceptor = rm;
function xi() {
  Yh(), mt("MESSAGE_RECEIVED", (e, t) => gm(Number(e), t)), mt("CHARACTER_MESSAGE_RENDERED", (e) => pi(Number(e))), mt("MESSAGE_DELETED", () => fi()), mt("MESSAGE_SWIPED", (e) => {
    om(Number(e)), pi(Number(e));
  }), mt("MESSAGE_EDITED", () => fi()), mt("MESSAGE_UPDATED", (e) => {
    fi(), pi(Number(e));
  }), mt("CHAT_CHANGED", () => no()), mt("MORE_MESSAGES_LOADED", () => ir()), M0(), ch({ view: rr, toggle: wm }), no(), console.log("[rlzc] 回廊种菜系统已加载", f.settings);
}
const Ao = window.jQuery;
typeof Ao == "function" ? Ao(() => xi()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", xi) : xi();
