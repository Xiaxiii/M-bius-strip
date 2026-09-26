/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Bi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const he = {}, Wt = [], Kt = () => {
}, Eo = () => !1, Is = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ts = (e) => e.startsWith("onUpdate:"), Ze = Object.assign, Co = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, tc = Object.prototype.hasOwnProperty, ue = (e, t) => tc.call(e, t), ne = Array.isArray, Et = (e) => Gn(e) === "[object Map]", Jt = (e) => Gn(e) === "[object Set]", _r = (e) => Gn(e) === "[object Date]", le = (e) => typeof e == "function", be = (e) => typeof e == "string", ct = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", Mo = (e) => (me(e) || le(e)) && le(e.then) && le(e.catch), Io = Object.prototype.toString, Gn = (e) => Io.call(e), nc = (e) => Gn(e).slice(8, -1), To = (e) => Gn(e) === "[object Object]", Vi = (e) => be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zn = /* @__PURE__ */ Bi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ns = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, sc = /-\w/g, qe = Ns(
  (e) => e.replace(sc, (t) => t.slice(1).toUpperCase())
), ic = /\B([A-Z])/g, tn = Ns(
  (e) => e.replace(ic, "-$1").toLowerCase()
), No = Ns((e) => e.charAt(0).toUpperCase() + e.slice(1)), ni = Ns(
  (e) => e ? `on${No(e)}` : ""
), lt = (e, t) => !Object.is(e, t), cs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Po = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ps = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let zr;
const js = () => zr || (zr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ds(e) {
  if (ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = be(s) ? ac(s) : Ds(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (be(e) || me(e))
    return e;
}
const rc = /;(?![^(]*\))/g, oc = /:([^]+)/, lc = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function ac(e) {
  const t = {};
  return e.replace(lc, (n) => n.startsWith("/*") ? "" : n).split(rc).forEach((n) => {
    if (n) {
      const s = n.split(oc);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function te(e) {
  let t = "";
  if (be(e))
    t = e;
  else if (ne(e))
    for (let n = 0; n < e.length; n++) {
      const s = te(e[n]);
      s && (t += s + " ");
    }
  else if (me(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const cc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", uc = /* @__PURE__ */ Bi(cc);
function jo(e) {
  return !!e || e === "";
}
function Ac(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = It(e[i], t[i], n);
  return s;
}
function $r(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const r of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!i[l] && It(r, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    i[o] = 1;
  }
  return !0;
}
function dc(e, t, n) {
  let s = Et(e), i = Et(t);
  if (s || i || (s = Jt(e), i = Jt(t), s || i))
    return s && i ? $r(e, t, n) : !1;
  const r = Object.keys(e).length, o = Object.keys(t).length;
  if (r !== o)
    return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
    if (a && !c || !a && c || !It(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function Sr(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, r] = n;
  if (i.has(e) || r.has(t))
    return i.get(e) === t && r.get(t) === e;
  i.set(e, t), r.set(t, e);
  const o = s(e, t, n);
  return i.delete(e), r.delete(t), o;
}
function It(e, t, n) {
  if (e === t) return !0;
  let s = _r(e), i = _r(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = ct(e), i = ct(t), s || i ? e === t : (s = ne(e), i = ne(t), s || i ? s && i ? Sr(e, t, n, Ac) : !1 : (s = me(e), i = me(t), s || i ? !s || !i ? !1 : Sr(e, t, n, dc) : String(e) === String(t))));
}
function fc(e, t) {
  return e.findIndex((n) => It(n, t));
}
const Do = (e) => !!(e && e.__v_isRef === !0), S = (e) => be(e) ? e : e == null ? "" : ne(e) || me(e) && (e.toString === Io || !le(e.toString)) ? Do(e) ? S(e.value) : JSON.stringify(e, Ro, 2) : String(e), Ro = (e, t) => Do(t) ? Ro(e, t.value) : Et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[si(s, r) + " =>"] = i, n),
    {}
  )
} : Jt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => si(n))
} : ct(t) ? si(t) : me(t) && !ne(t) && !To(t) ? String(t) : t, si = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ct(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let we;
class pc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && we && (we.active ? (this.parent = we, this.index = (we.scopes || (we.scopes = [])).push(
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
      const n = we;
      try {
        return we = this, t();
      } finally {
        we = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = we, we = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (we === this)
        we = this.prevScope;
      else {
        let t = we;
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
function hc() {
  return we;
}
let Ae;
const ii = /* @__PURE__ */ new WeakSet();
class Fo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, we && (we.active ? we.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ii.has(this) && (ii.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Lo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Er(this), Bo(this);
    const t = Ae, n = Ye;
    Ae = this, Ye = !0;
    try {
      return this.fn();
    } finally {
      Vo(this), Ae = t, Ye = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Hi(t);
      this.deps = this.depsTail = void 0, Er(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ii.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ei(this) && this.run();
  }
  get dirty() {
    return Ei(this);
  }
}
let Oo = 0, $n, Sn;
function Lo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Sn, Sn = e;
    return;
  }
  e.next = $n, $n = e;
}
function Ui() {
  Oo++;
}
function Wi() {
  if (--Oo > 0)
    return;
  if (Sn) {
    let t = Sn;
    for (Sn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; $n; ) {
    let t = $n;
    for ($n = void 0; t; ) {
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
function Bo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Vo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Hi(s), mc(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Ei(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Uo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Uo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jn) || (e.globalVersion = jn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ei(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ae, s = Ye;
  Ae = e, Ye = !0;
  try {
    Bo(e);
    const i = e.fn(e._value);
    (t.version === 0 || lt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ae = n, Ye = s, Vo(e), e.flags &= -3;
  }
}
function Hi(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Hi(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function mc(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ye = !0;
const Wo = [];
function Tt() {
  Wo.push(Ye), Ye = !1;
}
function Nt() {
  const e = Wo.pop();
  Ye = e === void 0 ? !0 : e;
}
function Er(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ae;
    Ae = void 0;
    try {
      t();
    } finally {
      Ae = n;
    }
  }
}
let jn = 0;
class gc {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Gi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ae || !Ye || Ae === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ae)
      n = this.activeLink = new gc(Ae, this), Ae.deps ? (n.prevDep = Ae.depsTail, Ae.depsTail.nextDep = n, Ae.depsTail = n) : Ae.deps = Ae.depsTail = n, Ho(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Ae.depsTail, n.nextDep = void 0, Ae.depsTail.nextDep = n, Ae.depsTail = n, Ae.deps === n && (Ae.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, jn++, this.notify(t);
  }
  notify(t) {
    Ui();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Wi();
    }
  }
}
function Ho(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ho(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ci = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ Symbol(
  ""
), Mi = /* @__PURE__ */ Symbol(
  ""
), Dn = /* @__PURE__ */ Symbol(
  ""
);
function _e(e, t, n) {
  if (Ye && Ae) {
    let s = Ci.get(e);
    s || Ci.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Gi()), i.map = s, i.key = n), i.track();
  }
}
function mt(e, t, n, s, i, r) {
  const o = Ci.get(e);
  if (!o) {
    jn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Ui(), t === "clear")
    o.forEach(l);
  else {
    const a = ne(e), c = a && Vi(n);
    if (a && n === "length") {
      const u = Number(s);
      o.forEach((d, h) => {
        (h === "length" || h === Dn || !ct(h) && h >= u) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(Dn)), t) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(qt)), Et(e) && l(o.get(Mi)));
          break;
        case "delete":
          a || (l(o.get(qt)), Et(e) && l(o.get(Mi)));
          break;
        case "set":
          Et(e) && l(o.get(qt));
          break;
      }
  }
  Wi();
}
function on(e) {
  const t = /* @__PURE__ */ ie(e);
  return t === e || (_e(t, "iterate", Dn), /* @__PURE__ */ Le(e)) ? t : /* @__PURE__ */ ut(e) ? /* @__PURE__ */ Ct(e) ? t.map((n) => Pt(Ve(n))) : t.map(Pt) : t.map(Ve);
}
function Rs(e) {
  return _e(e = /* @__PURE__ */ ie(e), "iterate", Dn), e;
}
function rt(e, t) {
  return /* @__PURE__ */ ut(e) ? Pt(/* @__PURE__ */ Ct(e) ? Ve(t) : t) : Ve(t);
}
const xc = {
  __proto__: null,
  [Symbol.iterator]() {
    return ri(this, Symbol.iterator, (e) => rt(this, e));
  },
  concat(...e) {
    return on(this).concat(
      ...e.map((t) => ne(t) ? on(t) : t)
    );
  },
  entries() {
    return ri(this, "entries", (e) => (e[1] = rt(this, e[1]), e));
  },
  every(e, t) {
    return ft(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ft(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => rt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return ft(
      this,
      "find",
      e,
      t,
      (n) => rt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ft(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ft(
      this,
      "findLast",
      e,
      t,
      (n) => rt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ft(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ft(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return oi(this, "includes", e);
  },
  indexOf(...e) {
    return oi(this, "indexOf", e);
  },
  join(e) {
    return on(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return oi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ft(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return yn(this, "pop");
  },
  push(...e) {
    return yn(this, "push", e);
  },
  reduce(e, ...t) {
    return Cr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Cr(this, "reduceRight", e, t);
  },
  shift() {
    return yn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ft(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return yn(this, "splice", e);
  },
  toReversed() {
    return on(this).toReversed();
  },
  toSorted(e) {
    return on(this).toSorted(e);
  },
  toSpliced(...e) {
    return on(this).toSpliced(...e);
  },
  unshift(...e) {
    return yn(this, "unshift", e);
  },
  values() {
    return ri(this, "values", (e) => rt(this, e));
  }
};
function ri(e, t, n) {
  const s = Rs(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Le(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const yc = Array.prototype;
function ft(e, t, n, s, i, r) {
  const o = Rs(e), l = o !== e && !/* @__PURE__ */ Le(e), a = o[t];
  if (a !== yc[t]) {
    const d = a.apply(e, r);
    return l ? Ve(d) : d;
  }
  let c = n;
  o !== e && (l ? c = function(d, h) {
    return n.call(this, rt(e, d), h, e);
  } : n.length > 2 && (c = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const u = a.call(o, c, s);
  return l && i ? i(u) : u;
}
function Cr(e, t, n, s) {
  const i = Rs(e), r = i !== e && !/* @__PURE__ */ Le(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(c, u, d) {
    return l && (l = !1, c = rt(e, c)), n.call(this, c, rt(e, u), d, e);
  }) : n.length > 3 && (o = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const a = i[t](o, ...s);
  return l ? rt(e, a) : a;
}
function oi(e, t, n) {
  const s = /* @__PURE__ */ ie(e);
  _e(s, "iterate", Dn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Yi(n[0]) ? (n[0] = /* @__PURE__ */ ie(n[0]), s[t](...n)) : i;
}
function yn(e, t, n = []) {
  Tt(), Ui();
  const s = (/* @__PURE__ */ ie(e))[t].apply(e, n);
  return Wi(), Nt(), s;
}
const bc = /* @__PURE__ */ Bi("__proto__,__v_isRef,__isVue"), Go = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ct)
);
function vc(e) {
  ct(e) || (e = String(e));
  const t = /* @__PURE__ */ ie(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
}
class Ko {
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
      return s === (i ? r ? Ic : Zo : r ? Jo : Yo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = ne(t);
    if (!i) {
      let a;
      if (o && (a = xc[n]))
        return a;
      if (n === "hasOwnProperty")
        return vc;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Se(t) ? t : s
    );
    if ((ct(n) ? Go.has(n) : bc(n)) || (i || _e(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ Se(l)) {
      const a = o && Vi(n) ? l : l.value;
      return i && me(a) ? /* @__PURE__ */ Ti(a) : a;
    }
    return me(l) ? i ? /* @__PURE__ */ Ti(l) : /* @__PURE__ */ Fs(l) : l;
  }
}
class qo extends Ko {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = ne(t) && Vi(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ ut(r);
      if (!/* @__PURE__ */ Le(s) && !/* @__PURE__ */ ut(s) && (r = /* @__PURE__ */ ie(r), s = /* @__PURE__ */ ie(s)), !o && /* @__PURE__ */ Se(r) && !/* @__PURE__ */ Se(s))
        return c || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : ue(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Se(t) ? t : i
    );
    return t === /* @__PURE__ */ ie(i) && a && (l ? lt(s, r) && mt(t, "set", n, s) : mt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = ue(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && mt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ct(n) || !Go.has(n)) && _e(t, "has", n), s;
  }
  ownKeys(t) {
    return _e(
      t,
      "iterate",
      ne(t) ? "length" : qt
    ), Reflect.ownKeys(t);
  }
}
class kc extends Ko {
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
const wc = /* @__PURE__ */ new qo(), _c = /* @__PURE__ */ new kc(), zc = /* @__PURE__ */ new qo(!0);
const Ii = (e) => e, ts = (e) => Reflect.getPrototypeOf(e);
function $c(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ ie(i), o = Et(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = i[e](...s), u = n ? Ii : t ? Pt : Ve;
    return !t && _e(
      r,
      "iterate",
      a ? Mi : qt
    ), Ze(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: h } = c.next();
          return h ? { value: d, done: h } : {
            value: l ? [u(d[0]), u(d[1])] : u(d),
            done: h
          };
        }
      }
    );
  };
}
function ns(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Sc(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ie(r), l = /* @__PURE__ */ ie(i);
      e || (lt(i, l) && _e(o, "get", i), _e(o, "get", l));
      const { has: a } = ts(o), c = t ? Ii : e ? Pt : Ve;
      if (a.call(o, i))
        return c(r.get(i));
      if (a.call(o, l))
        return c(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && _e(/* @__PURE__ */ ie(i), "iterate", qt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ ie(r), l = /* @__PURE__ */ ie(i);
      return e || (lt(i, l) && _e(o, "has", i), _e(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ ie(l), c = t ? Ii : e ? Pt : Ve;
      return !e && _e(a, "iterate", qt), l.forEach((u, d) => i.call(r, c(u), c(d), o));
    }
  };
  return Ze(
    n,
    e ? {
      add: ns("add"),
      set: ns("set"),
      delete: ns("delete"),
      clear: ns("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ ie(this), o = ts(r), l = /* @__PURE__ */ ie(i), a = !t && !/* @__PURE__ */ Le(i) && !/* @__PURE__ */ ut(i) ? l : i;
        return o.has.call(r, a) || lt(i, a) && o.has.call(r, i) || lt(l, a) && o.has.call(r, l) || (r.add(a), mt(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Le(r) && !/* @__PURE__ */ ut(r) && (r = /* @__PURE__ */ ie(r));
        const o = /* @__PURE__ */ ie(this), { has: l, get: a } = ts(o);
        let c = l.call(o, i);
        c || (i = /* @__PURE__ */ ie(i), c = l.call(o, i));
        const u = a.call(o, i);
        return o.set(i, r), c ? lt(r, u) && mt(o, "set", i, r) : mt(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ ie(this), { has: o, get: l } = ts(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ ie(i), a = o.call(r, i)), l && l.call(r, i);
        const c = r.delete(i);
        return a && mt(r, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ ie(this), r = i.size !== 0, o = i.clear();
        return r && mt(
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
    n[i] = $c(i, e, t);
  }), n;
}
function Ki(e, t) {
  const n = Sc(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    ue(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Ec = {
  get: /* @__PURE__ */ Ki(!1, !1)
}, Cc = {
  get: /* @__PURE__ */ Ki(!1, !0)
}, Mc = {
  get: /* @__PURE__ */ Ki(!0, !1)
};
const Yo = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), Zo = /* @__PURE__ */ new WeakMap(), Ic = /* @__PURE__ */ new WeakMap();
function Tc(e) {
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
function Fs(e) {
  return /* @__PURE__ */ ut(e) ? e : qi(
    e,
    !1,
    wc,
    Ec,
    Yo
  );
}
// @__NO_SIDE_EFFECTS__
function Nc(e) {
  return qi(
    e,
    !1,
    zc,
    Cc,
    Jo
  );
}
// @__NO_SIDE_EFFECTS__
function Ti(e) {
  return qi(
    e,
    !0,
    _c,
    Mc,
    Zo
  );
}
function qi(e, t, n, s, i) {
  if (!me(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = Tc(nc(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return /* @__PURE__ */ ut(e) ? /* @__PURE__ */ Ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ie(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ie(t) : e;
}
function Pc(e) {
  return !ue(e, "__v_skip") && Object.isExtensible(e) && Po(e, "__v_skip", !0), e;
}
const Ve = (e) => me(e) ? /* @__PURE__ */ Fs(e) : e, Pt = (e) => me(e) ? /* @__PURE__ */ Ti(e) : e;
// @__NO_SIDE_EFFECTS__
function Se(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function de(e) {
  return jc(e, !1);
}
function jc(e, t) {
  return /* @__PURE__ */ Se(e) ? e : new Dc(e, t);
}
class Dc {
  constructor(t, n) {
    this.dep = new Gi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ie(t), this._value = n ? t : Ve(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Le(t) || /* @__PURE__ */ ut(t);
    t = s ? t : /* @__PURE__ */ ie(t), lt(t, n) && (this._rawValue = t, this._value = s ? t : Ve(t), this.dep.trigger());
  }
}
function T(e) {
  return /* @__PURE__ */ Se(e) ? e.value : e;
}
const Rc = {
  get: (e, t, n) => t === "__v_raw" ? e : T(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ Se(i) && !/* @__PURE__ */ Se(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Xo(e) {
  return /* @__PURE__ */ Ct(e) ? e : new Proxy(e, Rc);
}
class Fc {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Gi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ae !== this)
      return Lo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Uo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Oc(e, t, n = !1) {
  let s, i;
  return le(e) ? s = e : (s = e.get, i = e.set), new Fc(s, i, n);
}
const ss = {}, ms = /* @__PURE__ */ new WeakMap();
let Bt;
function Lc(e, t = !1, n = Bt) {
  if (n) {
    let s = ms.get(n);
    s || ms.set(n, s = []), s.push(e);
  }
}
function Bc(e, t, n = he) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = n, c = (I) => i ? I : /* @__PURE__ */ Le(I) || i === !1 || i === 0 ? gt(I, 1) : gt(I);
  let u, d, h, y, w = !1, _ = !1;
  if (/* @__PURE__ */ Se(e) ? (d = () => e.value, w = /* @__PURE__ */ Le(e)) : /* @__PURE__ */ Ct(e) ? (d = () => c(e), w = !0) : ne(e) ? (_ = !0, w = e.some((I) => /* @__PURE__ */ Ct(I) || /* @__PURE__ */ Le(I)), d = () => e.map((I) => {
    if (/* @__PURE__ */ Se(I))
      return I.value;
    if (/* @__PURE__ */ Ct(I))
      return c(I);
    if (le(I))
      return a ? a(I, 2) : I();
  })) : le(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (h) {
      Tt();
      try {
        h();
      } finally {
        Nt();
      }
    }
    const I = Bt;
    Bt = u;
    try {
      return a ? a(e, 3, [y]) : e(y);
    } finally {
      Bt = I;
    }
  } : d = Kt, t && i) {
    const I = d, ee = i === !0 ? 1 / 0 : i;
    d = () => gt(I(), ee);
  }
  const P = hc(), V = () => {
    u.stop(), P && P.active && Co(P.effects, u);
  };
  if (r && t) {
    const I = t;
    t = (...ee) => {
      const Z = I(...ee);
      return V(), Z;
    };
  }
  let j = _ ? new Array(e.length).fill(ss) : ss;
  const z = (I) => {
    if (!(!(u.flags & 1) || !u.dirty && !I))
      if (t) {
        const ee = u.run();
        if (I || i || w || (_ ? ee.some((Z, B) => lt(Z, j[B])) : lt(ee, j))) {
          h && h();
          const Z = Bt;
          Bt = u;
          try {
            const B = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              j === ss ? void 0 : _ && j[0] === ss ? [] : j,
              y
            ];
            j = ee, a ? a(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            Bt = Z;
          }
        }
      } else
        u.run();
  };
  return l && l(z), u = new Fo(d), u.scheduler = o ? () => o(z, !1) : z, y = (I) => Lc(I, !1, u), h = u.onStop = () => {
    const I = ms.get(u);
    if (I) {
      if (a)
        a(I, 4);
      else
        for (const ee of I) ee();
      ms.delete(u);
    }
  }, t ? s ? z(!0) : j = u.run() : o ? o(z.bind(null, !0), !0) : u.run(), V.pause = u.pause.bind(u), V.resume = u.resume.bind(u), V.stop = V, V;
}
function gt(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Se(e))
    gt(e.value, t, n);
  else if (ne(e))
    for (let s = 0; s < e.length; s++)
      gt(e[s], t, n);
  else if (Jt(e) || Et(e))
    e.forEach((s) => {
      gt(s, t, n);
    });
  else if (To(e)) {
    for (const s in e)
      gt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && gt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Kn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Os(i, t, n);
  }
}
function At(e, t, n, s) {
  if (le(e)) {
    const i = Kn(e, t, n, s);
    return i && Mo(i) && i.catch((r) => {
      Os(r, t, n);
    }), i;
  }
  if (ne(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(At(e[r], t, n, s));
    return i;
  }
}
function Os(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || he;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Tt(), Kn(r, null, 10, [
        e,
        a,
        c
      ]), Nt();
      return;
    }
  }
  Vc(e, n, i, s, o);
}
function Vc(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const $e = [];
let it = -1;
const cn = [];
let $t = null, ln = 0;
const Qo = /* @__PURE__ */ Promise.resolve();
let gs = null;
function el(e) {
  const t = gs || Qo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Uc(e) {
  let t = it + 1, n = $e.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = $e[s], r = Rn(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ji(e) {
  if (!(e.flags & 1)) {
    const t = Rn(e), n = $e[$e.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Rn(n) ? $e.push(e) : $e.splice(Uc(t), 0, e), e.flags |= 1, tl();
  }
}
function tl() {
  gs || (gs = Qo.then(sl));
}
function Wc(e) {
  if (!ne(e))
    $t && e.id === -1 ? $t.splice(ln + 1, 0, e) : e.flags & 1 || (cn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      cn.push(e[t]);
  tl();
}
function Mr(e, t, n = it + 1) {
  for (; n < $e.length; n++) {
    const s = $e[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      $e.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function nl(e) {
  if (cn.length) {
    const t = [...new Set(cn)].sort(
      (n, s) => Rn(n) - Rn(s)
    );
    if (cn.length = 0, $t) {
      for (let n = 0; n < t.length; n++)
        $t.push(t[n]);
      return;
    }
    for ($t = t, ln = 0; ln < $t.length; ln++) {
      const n = $t[ln];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    $t = null, ln = 0;
  }
}
const Rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function sl(e) {
  try {
    for (it = 0; it < $e.length; it++) {
      const t = $e[it];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Kn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; it < $e.length; it++) {
      const t = $e[it];
      t && (t.flags &= -2);
    }
    it = -1, $e.length = 0, nl(), gs = null, ($e.length || cn.length) && sl();
  }
}
let Oe = null, il = null;
function xs(e) {
  const t = Oe;
  return Oe = e, il = e && e.type.__scopeId || null, t;
}
function Hc(e, t = Oe, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Rr(-1);
    const r = xs(t), o = Yt.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = Yt.length; a > o; a--) kl();
      xs(r), s._d && Rr(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function at(e, t) {
  if (Oe === null)
    return e;
  const n = Ws(Oe), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = he] = t[i];
    r && (le(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && gt(o), s.push({
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
function Ot(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[s];
    a && (Tt(), At(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Nt());
  }
}
function Gc(e, t, n = !1) {
  const s = Cu();
  if (s || un) {
    let i = un ? un._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && le(t) ? t.call(s && s.proxy) : t;
  }
}
const Kc = /* @__PURE__ */ Symbol.for("v-scx"), qc = () => Gc(Kc);
function Ls(e, t, n) {
  return Yc(e, t, n);
}
function Yc(e, t, n = he) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = Ze({}, n), a = t && s || !t && r !== "post";
  let c;
  if (Ln) {
    if (r === "sync") {
      const y = qc();
      c = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!a) {
      const y = () => {
      };
      return y.stop = Kt, y.resume = Kt, y.pause = Kt, y;
    }
  }
  const u = jt;
  l.call = (y, w, _) => At(y, u, w, _);
  let d = !1;
  r === "post" ? l.scheduler = (y) => {
    Ce(y, u && u.suspense);
  } : r !== "sync" && (d = !0, l.scheduler = (y, w) => {
    w ? y() : Ji(y);
  }), l.augmentJob = (y) => {
    t && (y.flags |= 4), d && (y.flags |= 2, u && (y.id = u.uid, y.i = u));
  };
  const h = Bc(e, t, l);
  return Ln && (c ? c.push(h) : a && h()), h;
}
const Jc = /* @__PURE__ */ Symbol("_vte"), Bs = (e) => e.__isTeleport, li = /* @__PURE__ */ Symbol("_leaveCb");
function Zc(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== yt) {
        t = n;
        break;
      }
  }
  return t;
}
function rl(e) {
  if (!ol(e))
    return Bs(e.type) && e.children ? Zc(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && le(n.default))
      return n.default();
  }
}
function Zi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Zi(
      Bs(n.type) && rl(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ue(e, t) {
  return le(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ze({ name: e.name }, t, { setup: e })
  ) : e;
}
function Xc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ir(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ys = /* @__PURE__ */ new WeakMap();
function En(e, t, n, s, i = !1) {
  if (ne(e)) {
    e.forEach(
      (_, P) => En(
        _,
        t && (ne(t) ? t[P] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (Cn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && En(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Ws(s.component) : s.el, o = i ? null : r, { i: l, r: a } = e, c = t && t.r, u = l.refs === he ? l.refs = {} : l.refs, d = l.setupState, h = /* @__PURE__ */ ie(d), y = d === he ? Eo : (_) => Ir(u, _) ? !1 : ue(h, _), w = (_, P) => !(P && Ir(u, P));
  if (c != null && c !== a) {
    if (Tr(t), be(c))
      u[c] = null, y(c) && (d[c] = null);
    else if (/* @__PURE__ */ Se(c)) {
      const _ = t;
      w(c, _.k) && (c.value = null), _.k && (u[_.k] = null);
    }
  }
  if (le(a))
    Kn(a, l, 12, [o, u]);
  else {
    const _ = be(a), P = /* @__PURE__ */ Se(a);
    if (_ || P) {
      const V = () => {
        if (e.f) {
          const j = _ ? y(a) ? d[a] : u[a] : w() || !e.k ? a.value : u[e.k];
          if (i)
            ne(j) && Co(j, r);
          else if (ne(j))
            j.includes(r) || j.push(r);
          else if (_)
            u[a] = [r], y(a) && (d[a] = u[a]);
          else {
            const z = [r];
            w(a, e.k) && (a.value = z), e.k && (u[e.k] = z);
          }
        } else _ ? (u[a] = o, y(a) && (d[a] = o)) : P && (w(a, e.k) && (a.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const j = () => {
          V(), ys.delete(e);
        };
        j.id = -1, ys.set(e, j), Ce(j, n);
      } else
        Tr(e), V();
    }
  }
}
function Tr(e) {
  const t = ys.get(e);
  t && (t.flags |= 8, ys.delete(e));
}
js().requestIdleCallback;
js().cancelIdleCallback;
const Cn = (e) => !!e.type.__asyncLoader, ol = (e) => e.type.__isKeepAlive;
function Qc(e, t, n = jt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Tt();
      const l = er(n), a = At(t, n, e, o);
      return l(), Nt(), a;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const ll = (e) => (t, n = jt) => {
  (!Ln || e === "sp") && Qc(e, (...s) => t(...s), n);
}, eu = ll("m"), al = ll(
  "bum"
), tu = /* @__PURE__ */ Symbol.for("v-ndc");
function fe(e, t, n, s) {
  let i;
  const r = n, o = ne(e);
  if (o || be(e)) {
    const l = o && /* @__PURE__ */ Ct(e);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ Le(e), c = /* @__PURE__ */ ut(e), e = Rs(e)), i = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      i[u] = t(
        a ? c ? Pt(Ve(e[u])) : Ve(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (me(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const u = l[a];
        i[a] = t(e[u], u, a, r);
      }
    }
  else
    i = [];
  return i;
}
const Ni = (e) => e ? $l(e) ? Ws(e) : Ni(e.parent) : null, Mn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ze(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ni(e.parent),
    $root: (e) => Ni(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ji(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = el.bind(e.proxy)),
    $watch: (e) => Kt
  })
), ai = (e, t) => e !== he && !e.__isScriptSetup && ue(e, t), nu = {
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
        if (ai(s, t))
          return o[t] = 1, s[t];
        if (ue(r, t))
          return o[t] = 3, r[t];
        if (n !== he && ue(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = Mn[t];
    let u, d;
    if (c)
      return t === "$attrs" && _e(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== he && ue(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, ue(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return ai(i, t) ? (i[t] = n, !0) : ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(n[l] || ai(t, l) || ue(r, l) || ue(s, l) || ue(Mn, l) || ue(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function cl() {
  return {
    app: null,
    config: {
      isNativeTag: Eo,
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
let su = 0;
function iu(e, t) {
  return function(s, i = null) {
    le(s) || (s = Ze({}, s)), i != null && !me(i) && (i = null);
    const r = cl(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = r.app = {
      _uid: su++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: ju,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return o.has(u) || (u && le(u.install) ? (o.add(u), u.install(c, ...d)) : le(u) && (o.add(u), u(c, ...d))), c;
      },
      mixin(u) {
        return c;
      },
      component(u, d) {
        return d ? (r.components[u] = d, c) : r.components[u];
      },
      directive(u, d) {
        return d ? (r.directives[u] = d, c) : r.directives[u];
      },
      mount(u, d, h) {
        if (!a) {
          const y = c._ceVNode || Be(s, i);
          return y.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(y, u, h), a = !0, c._container = u, u.__vue_app__ = c, Ws(y.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (At(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return r.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = un;
        un = c;
        try {
          return u();
        } finally {
          un = d;
        }
      }
    };
    return c;
  };
}
let un = null;
const ru = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qe(t)}Modifiers`] || e[`${tn(t)}Modifiers`];
function ou(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || he;
  let i = n;
  const r = t.startsWith("update:"), o = r && ru(s, t.slice(7));
  o && (o.trim && (i = n.map((u) => be(u) ? u.trim() : u)), o.number && (i = i.map(Ps)));
  let l, a = s[l = ni(t)] || // also try camelCase event handler (#2249)
  s[l = ni(qe(t))];
  !a && r && (a = s[l = ni(tn(t))]), a && At(
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
    e.emitted[l] = !0, At(
      c,
      e,
      6,
      i
    );
  }
}
function lu(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {};
  return r ? (ne(r) ? r.forEach((l) => o[l] = null) : Ze(o, r), me(e) && s.set(e, o), o) : (me(e) && s.set(e, null), null);
}
function Vs(e, t) {
  return !e || !Is(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, tn(t)) || ue(e, t));
}
function Nr(e) {
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
    renderCache: u,
    props: d,
    data: h,
    setupState: y,
    ctx: w,
    inheritAttrs: _
  } = e, P = xs(e);
  let V, j;
  try {
    if (n.shapeFlag & 4) {
      const I = i || s, ee = I;
      V = ot(
        c.call(
          ee,
          I,
          u,
          d,
          y,
          h,
          w
        )
      ), j = l;
    } else {
      const I = t;
      V = ot(
        I.length > 1 ? I(
          d,
          { attrs: l, slots: o, emit: a }
        ) : I(
          d,
          null
        )
      ), j = t.props ? l : au(l);
    }
  } catch (I) {
    Yt.length = 0, Os(I, e, 1), V = Be(yt);
  }
  let z = V;
  if (j && _ !== !1) {
    const I = Object.keys(j), { shapeFlag: ee } = z;
    I.length && ee & 7 && (r && I.some(Ts) && (j = cu(
      j,
      r
    )), z = dn(z, j, !1, !0));
  }
  if (n.dirs && (z = dn(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const I = Bs(z.type) && rl(z) || z;
    Zi(I, n.transition);
  }
  return V = z, xs(P), V;
}
const au = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Is(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, cu = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ts(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function uu(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, c = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Pr(s, o, c) : !!o;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        if (ul(o, s, h) && !Vs(c, h))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Pr(s, o, c) : !0 : !!o;
  return !1;
}
function Pr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (ul(t, e, r) && !Vs(n, r))
      return !0;
  }
  return !1;
}
function ul(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && me(s) && me(i) ? !It(s, i) : s !== i;
}
function Au({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Al = {}, dl = () => Object.create(Al), fl = (e) => Object.getPrototypeOf(e) === Al;
function du(e, t, n, s = !1) {
  const i = {}, r = dl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pl(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Nc(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function fu(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ie(i), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let h = u[d];
        if (Vs(e.emitsOptions, h))
          continue;
        const y = t[h];
        if (a)
          if (ue(r, h))
            y !== r[h] && (r[h] = y, c = !0);
          else {
            const w = qe(h);
            i[w] = Pi(
              a,
              l,
              w,
              y,
              e,
              !1
            );
          }
        else
          y !== r[h] && (r[h] = y, c = !0);
      }
    }
  } else {
    pl(e, t, i, r) && (c = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !ue(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = tn(d)) === d || !ue(t, u))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[d] = Pi(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== l)
      for (const d in r)
        (!t || !ue(t, d)) && (delete r[d], c = !0);
  }
  c && mt(e.attrs, "set", "");
}
function pl(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (zn(a))
        continue;
      const c = t[a];
      let u;
      i && ue(i, u = qe(a)) ? !r || !r.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : Vs(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ ie(n), c = l || he;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Pi(
        i,
        a,
        d,
        c[d],
        e,
        !ue(c, d)
      );
    }
  }
  return o;
}
function Pi(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = ue(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && le(a)) {
        const { propsDefaults: c } = i;
        if (n in c)
          s = c[n];
        else {
          const u = er(i);
          s = c[n] = a.call(
            null,
            t
          ), u();
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
    ] && (s === "" || s === tn(n)) && (s = !0));
  }
  return s;
}
function pu(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  if (!r)
    return me(e) && s.set(e, Wt), Wt;
  if (ne(r))
    for (let c = 0; c < r.length; c++) {
      const u = qe(r[c]);
      jr(u) && (o[u] = he);
    }
  else if (r)
    for (const c in r) {
      const u = qe(c);
      if (jr(u)) {
        const d = r[c], h = o[u] = ne(d) || le(d) ? { type: d } : Ze({}, d), y = h.type;
        let w = !1, _ = !0;
        if (ne(y))
          for (let P = 0; P < y.length; ++P) {
            const V = y[P], j = le(V) && V.name;
            if (j === "Boolean") {
              w = !0;
              break;
            } else j === "String" && (_ = !1);
          }
        else
          w = le(y) && y.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = w, h[
          1
          /* shouldCastTrue */
        ] = _, (w || ue(h, "default")) && l.push(u);
      }
    }
  const a = [o, l];
  return me(e) && s.set(e, a), a;
}
function jr(e) {
  return e[0] !== "$" && !zn(e);
}
const Xi = (e) => e === "_" || e === "_ctx" || e === "$stable", Qi = (e) => ne(e) ? e.map(ot) : [ot(e)], hu = (e, t, n) => {
  if (t._n)
    return t;
  const s = Hc((...i) => Qi(t(...i)), n);
  return s._c = !1, s;
}, hl = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Xi(i)) continue;
    const r = e[i];
    if (le(r))
      t[i] = hu(i, r, s);
    else if (r != null) {
      const o = Qi(r);
      t[i] = () => o;
    }
  }
}, ml = (e, t) => {
  const n = Qi(t);
  e.slots.default = () => n;
}, gl = (e, t, n) => {
  for (const s in t)
    (n || !Xi(s)) && (e[s] = t[s]);
}, mu = (e, t, n) => {
  const s = e.slots = dl();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (gl(s, t, n), n && Po(s, "_", i, !0)) : hl(t, s);
  } else t && ml(e, t);
}, gu = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = he;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : gl(i, t, n) : (r = !t.$stable, hl(t, i)), o = t;
  } else t && (ml(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Xi(l) && o[l] == null && delete i[l];
}, Ce = ku;
function xu(e) {
  return yu(e);
}
function yu(e, t) {
  const n = js();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: h,
    setScopeId: y = Kt,
    insertStaticContent: w
  } = e, _ = (p, x, $, N = null, E = null, M = null, L = void 0, F = null, R = !!x.dynamicChildren) => {
    if (p === x)
      return;
    p && !bn(p, x) && (N = es(p), K(p, E, M, !0), p = null), x.patchFlag === -2 && (R = !1, x.dynamicChildren = null), x.dynamicChildren && p && p.dynamicChildren && p.dynamicChildren.hasOnce && (x.dynamicChildren === Wt && (x.dynamicChildren = []), x.dynamicChildren.hasOnce = !0);
    const { type: C, ref: J, shapeFlag: W } = x;
    switch (C) {
      case Us:
        P(p, x, $, N);
        break;
      case yt:
        V(p, x, $, N);
        break;
      case ui:
        p == null && j(x, $, N, L);
        break;
      case X:
        ae(
          p,
          x,
          $,
          N,
          E,
          M,
          L,
          F,
          R
        );
        break;
      default:
        W & 1 ? ee(
          p,
          x,
          $,
          N,
          E,
          M,
          L,
          F,
          R
        ) : W & 6 ? re(
          p,
          x,
          $,
          N,
          E,
          M,
          L,
          F,
          R
        ) : (W & 64 || W & 128) && C.process(
          p,
          x,
          $,
          N,
          E,
          M,
          L,
          F,
          R,
          gn
        );
    }
    J != null && E ? En(J, p && p.ref, M, x || p, !x) : J == null && p && p.ref != null && En(p.ref, null, M, p, !0);
  }, P = (p, x, $, N) => {
    if (p == null)
      s(
        x.el = l(x.children),
        $,
        N
      );
    else {
      const E = x.el = p.el;
      x.children !== p.children && c(E, x.children);
    }
  }, V = (p, x, $, N) => {
    p == null ? s(
      x.el = a(x.children || ""),
      $,
      N
    ) : x.el = p.el;
  }, j = (p, x, $, N) => {
    [p.el, p.anchor] = w(
      p.children,
      x,
      $,
      N,
      p.el,
      p.anchor
    );
  }, z = ({ el: p, anchor: x }, $, N) => {
    let E;
    for (; p && p !== x; )
      E = h(p), s(p, $, N), p = E;
    s(x, $, N);
  }, I = ({ el: p, anchor: x }) => {
    let $;
    for (; p && p !== x; )
      $ = h(p), i(p), p = $;
    i(x);
  }, ee = (p, x, $, N, E, M, L, F, R) => {
    if (x.type === "svg" ? L = "svg" : x.type === "math" && (L = "mathml"), p == null)
      Z(
        x,
        $,
        N,
        E,
        M,
        L,
        F,
        R
      );
    else {
      const C = p.el && p.el._isVueCE ? p.el : null;
      try {
        C && C._beginPatch(), m(
          p,
          x,
          E,
          M,
          L,
          F,
          R
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, Z = (p, x, $, N, E, M, L, F) => {
    let R, C;
    const { props: J, shapeFlag: W, transition: q, dirs: Q } = p;
    if (R = p.el = o(
      p.type,
      M,
      J && J.is,
      J
    ), W & 8 ? u(R, p.children) : W & 16 && b(
      p.children,
      R,
      null,
      N,
      E,
      ci(p, M),
      L,
      F
    ), Q && Ot(p, null, N, "created"), B(R, p, p.scopeId, L, N), J) {
      for (const ce in J)
        ce !== "value" && !zn(ce) && r(R, ce, null, J[ce], M, N);
      "value" in J && r(R, "value", null, J.value, M), (C = J.onVnodeBeforeMount) && st(C, N, p);
    }
    Q && Ot(p, null, N, "beforeMount");
    const se = bu(E, q);
    se && q.beforeEnter(R), s(R, x, $), ((C = J && J.onVnodeMounted) || se || Q) && Ce(() => {
      try {
        C && st(C, N, p), se && q.enter(R), Q && Ot(p, null, N, "mounted");
      } finally {
      }
    }, E);
  }, B = (p, x, $, N, E) => {
    if ($ && y(p, $), N)
      for (let M = 0; M < N.length; M++)
        y(p, N[M]);
    if (E) {
      let M = E.subTree;
      if (x === M || vl(M.type) && (M.ssContent === x || M.ssFallback === x)) {
        const L = E.vnode;
        B(
          p,
          L,
          L.scopeId,
          L.slotScopeIds,
          E.parent
        );
      }
    }
  }, b = (p, x, $, N, E, M, L, F, R = 0) => {
    for (let C = R; C < p.length; C++) {
      const J = p[C] = F ? ht(p[C]) : ot(p[C]);
      _(
        null,
        J,
        x,
        $,
        N,
        E,
        M,
        L,
        F
      );
    }
  }, m = (p, x, $, N, E, M, L) => {
    const F = x.el = p.el;
    let { patchFlag: R, dynamicChildren: C, dirs: J } = x;
    R |= p.patchFlag & 16;
    const W = p.props || he, q = x.props || he;
    let Q;
    if ($ && Lt($, !1), (Q = q.onVnodeBeforeUpdate) && st(Q, $, x, p), J && Ot(x, p, $, "beforeUpdate"), $ && Lt($, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    C && (!p.dynamicChildren || p.dynamicChildren.length !== C.length) && (R = 0, L = !1, C = null), (W.innerHTML && q.innerHTML == null || W.textContent && q.textContent == null) && u(F, ""), C ? g(
      p.dynamicChildren,
      C,
      F,
      $,
      N,
      ci(x, E),
      M
    ) : L || Ge(
      p,
      x,
      F,
      null,
      $,
      N,
      ci(x, E),
      M,
      !1
    ), R > 0) {
      if (R & 16)
        O(F, W, q, $, E);
      else if (R & 2 && W.class !== q.class && r(F, "class", null, q.class, E), R & 4 && r(F, "style", W.style, q.style, E), R & 8) {
        const se = x.dynamicProps;
        for (let ce = 0; ce < se.length; ce++) {
          const oe = se[ce], ye = W[oe], ke = q[oe];
          (ke !== ye || oe === "value") && r(F, oe, ye, ke, E, $);
        }
      }
      R & 1 && p.children !== x.children && u(F, x.children);
    } else !L && C == null && O(F, W, q, $, E);
    ((Q = q.onVnodeUpdated) || J) && Ce(() => {
      Q && st(Q, $, x, p), J && Ot(x, p, $, "updated");
    }, N);
  }, g = (p, x, $, N, E, M, L) => {
    for (let F = 0; F < x.length; F++) {
      const R = p[F], C = x[F], J = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        R.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (R.type === X || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !bn(R, C) || // - In the case of a component, it could contain anything.
        R.shapeFlag & 198) ? d(R.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          $
        )
      );
      _(
        R,
        C,
        J,
        null,
        N,
        E,
        M,
        L,
        !0
      );
    }
  }, O = (p, x, $, N, E) => {
    if (x !== $) {
      if (x !== he)
        for (const M in x)
          !zn(M) && !(M in $) && r(
            p,
            M,
            x[M],
            null,
            E,
            N
          );
      for (const M in $) {
        if (zn(M)) continue;
        const L = $[M], F = x[M];
        L !== F && M !== "value" && r(p, M, F, L, E, N);
      }
      "value" in $ && r(p, "value", x.value, $.value, E);
    }
  }, ae = (p, x, $, N, E, M, L, F, R) => {
    const C = x.el = p ? p.el : l(""), J = x.anchor = p ? p.anchor : l("");
    let { patchFlag: W, dynamicChildren: q, slotScopeIds: Q } = x;
    Q && (F = F ? F.concat(Q) : Q), p == null ? (s(C, $, N), s(J, $, N), b(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      $,
      J,
      E,
      M,
      L,
      F,
      R
    )) : W > 0 && W & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === q.length ? (g(
      p.dynamicChildren,
      q,
      $,
      E,
      M,
      L,
      F
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (x.key != null || E && x === E.subTree) && xl(
      p,
      x,
      !0
      /* shallow */
    )) : Ge(
      p,
      x,
      $,
      J,
      E,
      M,
      L,
      F,
      R
    );
  }, re = (p, x, $, N, E, M, L, F, R) => {
    x.slotScopeIds = F, p == null ? x.shapeFlag & 512 ? E.ctx.activate(
      x,
      $,
      N,
      L,
      R
    ) : ze(
      x,
      $,
      N,
      E,
      M,
      L,
      R
    ) : ge(p, x, R);
  }, ze = (p, x, $, N, E, M, L) => {
    const F = p.component = Eu(
      p,
      N,
      E
    );
    if (ol(p) && (F.ctx.renderer = gn), Mu(F, !1, L), F.asyncDep) {
      if (E && E.registerDep(F, He, L), !p.el) {
        const R = F.subTree = Be(yt);
        V(null, R, x, $), p.placeholder = R.el;
      }
    } else
      He(
        F,
        p,
        x,
        $,
        E,
        M,
        L
      );
  }, ge = (p, x, $) => {
    const N = x.component = p.component;
    if (uu(p, x, $))
      if (N.asyncDep && !N.asyncResolved) {
        x.el = p.el, Qe(N, x, $);
        return;
      } else
        N.next = x, N.update();
    else
      x.el = p.el, N.vnode = x;
  }, He = (p, x, $, N, E, M, L) => {
    const F = () => {
      if (p.isMounted) {
        let { next: W, bu: q, u: Q, parent: se, vnode: ce } = p;
        {
          const tt = yl(p);
          if (tt) {
            W && (W.el = ce.el, Qe(p, W, L)), tt.asyncDep.then(() => {
              Ce(() => {
                p.isUnmounted || C();
              }, E);
            });
            return;
          }
        }
        let oe = W, ye;
        Lt(p, !1), W ? (W.el = ce.el, Qe(p, W, L)) : W = ce, q && cs(q), (ye = W.props && W.props.onVnodeBeforeUpdate) && st(ye, se, W, ce), Lt(p, !0);
        const ke = Nr(p), et = p.subTree;
        p.subTree = ke, _(
          et,
          ke,
          // parent may have changed if it's in a teleport
          d(et.el),
          // anchor may have changed if it's in a fragment
          es(et),
          p,
          E,
          M
        ), W.el = ke.el, oe === null && Au(p, ke.el), Q && Ce(Q, E), (ye = W.props && W.props.onVnodeUpdated) && Ce(
          () => st(ye, se, W, ce),
          E
        );
      } else {
        let W;
        const { el: q, props: Q } = x, { bm: se, m: ce, parent: oe, root: ye, type: ke } = p, et = Cn(x);
        Lt(p, !1), se && cs(se), !et && (W = Q && Q.onVnodeBeforeMount) && st(W, oe, x), Lt(p, !0);
        {
          ye.ce && ye.ce._hasShadowRoot() && ye.ce._injectChildStyle(
            ke,
            p.parent ? p.parent.type : void 0
          );
          const tt = p.subTree = Nr(p);
          _(
            null,
            tt,
            $,
            N,
            p,
            E,
            M
          ), x.el = tt.el;
        }
        if (ce && Ce(ce, E), !et && (W = Q && Q.onVnodeMounted)) {
          const tt = x;
          Ce(
            () => st(W, oe, tt),
            E
          );
        }
        (x.shapeFlag & 256 || oe && Cn(oe.vnode) && oe.vnode.shapeFlag & 256) && p.a && Ce(p.a, E), p.isMounted = !0, x = $ = N = null;
      }
    };
    p.scope.on();
    const R = p.effect = new Fo(F);
    p.scope.off();
    const C = p.update = R.run.bind(R), J = p.job = R.runIfDirty.bind(R);
    J.i = p, J.id = p.uid, R.scheduler = () => Ji(J), Lt(p, !0), C();
  }, Qe = (p, x, $) => {
    x.component = p;
    const N = p.vnode.props;
    p.vnode = x, p.next = null, fu(p, x.props, N, $), gu(p, x.children, $), Tt(), Mr(p), Nt();
  }, Ge = (p, x, $, N, E, M, L, F, R = !1) => {
    const C = p && p.children, J = p ? p.shapeFlag : 0, W = x.children, { patchFlag: q, shapeFlag: Q } = x;
    if (q > 0) {
      if (q & 128) {
        Ft(
          C,
          W,
          $,
          N,
          E,
          M,
          L,
          F,
          R
        );
        return;
      } else if (q & 256) {
        rn(
          C,
          W,
          $,
          N,
          E,
          M,
          L,
          F,
          R
        );
        return;
      }
    }
    Q & 8 ? (J & 16 && _t(C, E, M), W !== C && u($, W)) : J & 16 ? Q & 16 ? Ft(
      C,
      W,
      $,
      N,
      E,
      M,
      L,
      F,
      R
    ) : _t(C, E, M, !0) : (J & 8 && u($, ""), Q & 16 && b(
      W,
      $,
      N,
      E,
      M,
      L,
      F,
      R
    ));
  }, rn = (p, x, $, N, E, M, L, F, R) => {
    p = p || Wt, x = x || Wt;
    const C = p.length, J = x.length, W = Math.min(C, J);
    let q;
    for (q = 0; q < W; q++) {
      const Q = x[q] = R ? ht(x[q]) : ot(x[q]);
      _(
        p[q],
        Q,
        $,
        null,
        E,
        M,
        L,
        F,
        R
      );
    }
    C > J ? _t(
      p,
      E,
      M,
      !0,
      !1,
      W
    ) : b(
      x,
      $,
      N,
      E,
      M,
      L,
      F,
      R,
      W
    );
  }, Ft = (p, x, $, N, E, M, L, F, R) => {
    let C = 0;
    const J = x.length;
    let W = p.length - 1, q = J - 1;
    for (; C <= W && C <= q; ) {
      const Q = p[C], se = x[C] = R ? ht(x[C]) : ot(x[C]);
      if (bn(Q, se))
        _(
          Q,
          se,
          $,
          null,
          E,
          M,
          L,
          F,
          R
        );
      else
        break;
      C++;
    }
    for (; C <= W && C <= q; ) {
      const Q = p[W], se = x[q] = R ? ht(x[q]) : ot(x[q]);
      if (bn(Q, se))
        _(
          Q,
          se,
          $,
          null,
          E,
          M,
          L,
          F,
          R
        );
      else
        break;
      W--, q--;
    }
    if (C > W) {
      if (C <= q) {
        const Q = q + 1, se = Q < J ? x[Q].el : N;
        for (; C <= q; )
          _(
            null,
            x[C] = R ? ht(x[C]) : ot(x[C]),
            $,
            se,
            E,
            M,
            L,
            F,
            R
          ), C++;
      }
    } else if (C > q)
      for (; C <= W; )
        K(p[C], E, M, !0), C++;
    else {
      const Q = C, se = C, ce = /* @__PURE__ */ new Map();
      for (C = se; C <= q; C++) {
        const Te = x[C] = R ? ht(x[C]) : ot(x[C]);
        Te.key != null && ce.set(Te.key, C);
      }
      let oe, ye = 0;
      const ke = q - se + 1;
      let et = !1, tt = 0;
      const xn = new Array(ke);
      for (C = 0; C < ke; C++) xn[C] = 0;
      for (C = Q; C <= W; C++) {
        const Te = p[C];
        if (ye >= ke) {
          K(Te, E, M, !0);
          continue;
        }
        let nt;
        if (Te.key != null)
          nt = ce.get(Te.key);
        else
          for (oe = se; oe <= q; oe++)
            if (xn[oe - se] === 0 && bn(Te, x[oe])) {
              nt = oe;
              break;
            }
        nt === void 0 ? K(Te, E, M, !0) : (xn[nt - se] = C + 1, nt >= tt ? tt = nt : et = !0, _(
          Te,
          x[nt],
          $,
          null,
          E,
          M,
          L,
          F,
          R
        ), ye++);
      }
      const vr = et ? vu(xn) : Wt;
      for (oe = vr.length - 1, C = ke - 1; C >= 0; C--) {
        const Te = se + C, nt = x[Te], kr = x[Te + 1], wr = Te + 1 < J ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          kr.el || bl(kr)
        ) : N;
        xn[C] === 0 ? _(
          null,
          nt,
          $,
          wr,
          E,
          M,
          L,
          F,
          R
        ) : et && (oe < 0 || C !== vr[oe] ? D(nt, $, wr, 2) : oe--);
      }
    }
  }, D = (p, x, $, N, E = null) => {
    const { el: M, type: L, transition: F, children: R, shapeFlag: C } = p;
    if (C & 6) {
      D(p.component.subTree, x, $, N);
      return;
    }
    if (C & 128) {
      p.suspense.move(x, $, N);
      return;
    }
    if (C & 64) {
      L.move(p, x, $, gn);
      return;
    }
    if (L === X) {
      s(M, x, $);
      for (let W = 0; W < R.length; W++)
        D(R[W], x, $, N);
      s(p.anchor, x, $);
      return;
    }
    if (L === ui) {
      z(p, x, $);
      return;
    }
    if (N !== 2 && C & 1 && F)
      if (N === 0)
        F.persisted && !M[li] ? s(M, x, $) : (F.beforeEnter(M), s(M, x, $), Ce(() => F.enter(M), E));
      else {
        const { leave: W, delayLeave: q, afterLeave: Q } = F, se = () => {
          p.ctx.isUnmounted ? i(M) : s(M, x, $);
        }, ce = () => {
          const oe = M._isLeaving || !!M[li];
          M._isLeaving && M[li](
            !0
            /* cancelled */
          ), F.persisted && !oe ? se() : W(M, () => {
            se(), Q && Q();
          });
        };
        q ? q(M, se, ce) : ce();
      }
    else
      s(M, x, $);
  }, K = (p, x, $, N = !1, E = !1) => {
    const {
      type: M,
      props: L,
      ref: F,
      children: R,
      dynamicChildren: C,
      shapeFlag: J,
      patchFlag: W,
      dirs: q,
      cacheIndex: Q,
      memo: se
    } = p;
    if ((W === -2 || C && C.hasOnce) && (E = !1), F != null && (Tt(), En(F, null, $, p, !0), Nt()), Q != null && (!p.ctx || p.ctx === x) && (x.renderCache[Q] = void 0), J & 256) {
      x.ctx.deactivate(p);
      return;
    }
    const ce = J & 1 && q, oe = !Cn(p);
    let ye;
    if (oe && (ye = L && L.onVnodeBeforeUnmount) && st(ye, x, p), J & 6)
      Qn(p.component, $, N);
    else {
      if (J & 128) {
        p.suspense.unmount($, N);
        return;
      }
      ce && Ot(p, null, x, "beforeUnmount"), J & 64 ? p.type.remove(
        p,
        x,
        $,
        gn,
        N
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== X || W > 0 && W & 64) ? _t(
        C,
        x,
        $,
        !1,
        !0
      ) : (M === X && W & 384 || !E && J & 16) && _t(R, x, $), N && H(p);
    }
    const ke = se != null && Q == null;
    (oe && (ye = L && L.onVnodeUnmounted) || ce || ke) && Ce(() => {
      ye && st(ye, x, p), ce && Ot(p, null, x, "unmounted"), ke && (p.el = null);
    }, $);
  }, H = (p) => {
    const { type: x, el: $, anchor: N, transition: E } = p;
    if (x === X) {
      pe($, N);
      return;
    }
    if (x === ui) {
      I(p), E && !E.persisted && E.afterLeave && E.afterLeave();
      return;
    }
    const M = () => {
      i($), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (p.shapeFlag & 1 && E && !E.persisted) {
      const { leave: L, delayLeave: F } = E, R = () => L($, M);
      F ? F(p.el, M, R) : R();
    } else
      M();
  }, pe = (p, x) => {
    let $;
    for (; p !== x; )
      $ = h(p), i(p), p = $;
    i(x);
  }, Qn = (p, x, $) => {
    const { bum: N, scope: E, job: M, subTree: L, um: F, m: R, a: C } = p;
    Dr(R), Dr(C), N && cs(N), E.stop(), M ? (M.flags |= 8, K(L, p, x, $)) : p.vnode.el && L && (L.transition = p.vnode.transition, K(L, p, x, $)), F && Ce(F, x), Ce(() => {
      p.isUnmounted = !0;
    }, x);
  }, _t = (p, x, $, N = !1, E = !1, M = 0) => {
    for (let L = M; L < p.length; L++)
      K(p[L], x, $, N, E);
  }, es = (p) => {
    if (p.shapeFlag & 6)
      return es(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const x = h(p.anchor || p.el), $ = x && x[Jc];
    return $ ? h($) : x;
  };
  let ti = !1;
  const br = (p, x, $) => {
    let N;
    p == null ? x._vnode && (K(x._vnode, null, null, !0), N = x._vnode.component) : _(
      x._vnode || null,
      p,
      x,
      null,
      null,
      null,
      $
    ), x._vnode = p, ti || (ti = !0, Mr(N), nl(), ti = !1);
  }, gn = {
    p: _,
    um: K,
    m: D,
    r: H,
    mt: ze,
    mc: b,
    pc: Ge,
    pbc: g,
    n: es,
    o: e
  };
  return {
    render: br,
    hydrate: void 0,
    createApp: iu(br)
  };
}
function ci({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function bu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function xl(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (ne(s) && ne(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = ht(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && xl(o, l)), l.type === Us && (l.patchFlag === -1 && (l = i[r] = ht(l)), l.el = o.el), l.type === yt && !l.el && (l.el = o.el);
    }
}
function vu(e) {
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
function yl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : yl(t);
}
function Dr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function bl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? bl(t.subTree) : null;
}
const vl = (e) => e.__isSuspense;
function ku(e, t) {
  t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : Wc(e);
}
const X = /* @__PURE__ */ Symbol.for("v-fgt"), Us = /* @__PURE__ */ Symbol.for("v-txt"), yt = /* @__PURE__ */ Symbol.for("v-cmt"), ui = /* @__PURE__ */ Symbol.for("v-stc"), Yt = [];
let Pe = null;
function v(e = !1) {
  Yt.push(Pe = e ? null : []);
}
function kl() {
  Yt.pop(), Pe = Yt[Yt.length - 1] || null;
}
let Fn = 1;
function Rr(e, t = !1) {
  Fn += e, e < 0 && Pe && t && (Pe.hasOnce = !0);
}
function wl(e) {
  return e.dynamicChildren = Fn > 0 ? Pe || Wt : null, kl(), Fn > 0 && Pe && Pe.push(e), e;
}
function k(e, t, n, s, i, r) {
  return wl(
    A(
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
function Ke(e, t, n, s, i) {
  return wl(
    Be(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function _l(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function bn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const zl = ({ key: e }) => e ?? null, us = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? be(e) || /* @__PURE__ */ Se(e) || le(e) ? { i: Oe, r: e, k: t, f: !!n } : e : null);
function A(e, t = null, n = null, s = 0, i = null, r = e === X ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && zl(t),
    ref: t && us(t),
    scopeId: il,
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
    ctx: Oe
  };
  return l ? (bs(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= be(n) ? 8 : 16), Fn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Pe.push(a), a;
}
const Be = wu;
function wu(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === tu) && (e = yt), _l(e)) {
    const l = dn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && bs(l, n), Fn > 0 && !r && Pe && (l.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = l : Pe.push(l)), l.patchFlag = -2, l;
  }
  if (Pu(e) && (e = e.__vccOpts), t) {
    t = _u(t);
    let { class: l, style: a } = t;
    l && !be(l) && (t.class = te(l)), me(a) && (/* @__PURE__ */ Yi(a) && !ne(a) && (a = Ze({}, a)), t.style = Ds(a));
  }
  const o = be(e) ? 1 : vl(e) ? 128 : Bs(e) ? 64 : me(e) ? 4 : le(e) ? 2 : 0;
  return A(
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
function _u(e) {
  return e ? /* @__PURE__ */ Yi(e) || fl(e) ? Ze({}, e) : e : null;
}
function dn(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, c = t ? zu(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && zl(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? ne(r) ? r.concat(us(t)) : [r, us(t)] : us(t)
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
    patchFlag: t && e.type !== X ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && dn(e.ssContent),
    ssFallback: e.ssFallback && dn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && Zi(
    u,
    a.clone(u)
  ), u;
}
function Ne(e = " ", t = 0) {
  return Be(Us, null, e, t);
}
function U(e = "", t = !1) {
  return t ? (v(), Ke(yt, null, e)) : Be(yt, null, e);
}
function ot(e) {
  return e == null || typeof e == "boolean" ? Be(yt) : ne(e) ? Be(
    X,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _l(e) ? ht(e) : Be(Us, null, String(e));
}
function ht(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : dn(e);
}
function bs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), bs(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !fl(t) ? t._ctx = Oe : i === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (le(t)) {
    if (s & 65) {
      bs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Oe }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Ne(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function zu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = te([t.class, s.class]));
      else if (i === "style")
        t.style = Ds([t.style, s.style]);
      else if (Is(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(ne(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ts(i) && (t[i] = o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function st(e, t, n, s = null) {
  At(e, t, 7, [
    n,
    s
  ]);
}
const $u = cl();
let Su = 0;
function Eu(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || $u, r = {
    uid: Su++,
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
    scope: new pc(
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
    propsOptions: pu(s, i),
    emitsOptions: lu(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: he,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: he,
    data: he,
    props: he,
    attrs: he,
    slots: he,
    refs: he,
    setupState: he,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ou.bind(null, r), e.ce && e.ce(r), r;
}
let jt = null;
const Cu = () => jt || Oe;
let vs, On;
{
  const e = js(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  vs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => jt = n
  ), On = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ln = n
  );
}
const er = (e) => {
  const t = jt;
  return vs(e), e.scope.on(), () => {
    e.scope.off(), vs(t);
  };
}, Fr = () => {
  jt && jt.scope.off(), vs(null);
};
function $l(e) {
  return e.vnode.shapeFlag & 4;
}
let Ln = !1;
function Mu(e, t = !1, n = !1) {
  t && On(t);
  const { props: s, children: i } = e.vnode, r = $l(e);
  du(e, s, r, t), mu(e, i, n || t);
  const o = r ? Iu(e, t) : void 0;
  return t && On(!1), o;
}
function Iu(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, nu);
  const { setup: s } = n;
  if (s) {
    Tt();
    const i = e.setupContext = s.length > 1 ? Nu(e) : null, r = er(e), o = Kn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Mo(o);
    if (Nt(), r(), (l || e.sp) && !Cn(e) && Xc(e), l) {
      if (o.then(Fr, Fr), t)
        return o.then((a) => {
          On(!0);
          try {
            Or(e, a, t);
          } finally {
            On(!1);
          }
        }).catch((a) => {
          Os(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Or(e, o);
  } else
    Sl(e);
}
function Or(e, t, n) {
  le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) && (e.setupState = Xo(t)), Sl(e);
}
function Sl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Kt);
}
const Tu = {
  get(e, t) {
    return _e(e, "get", ""), e[t];
  }
};
function Nu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Tu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ws(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Xo(Pc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Mn)
        return Mn[n](e);
    },
    has(t, n) {
      return n in t || n in Mn;
    }
  })) : e.proxy;
}
function Pu(e) {
  return le(e) && "__vccOpts" in e;
}
const G = (e, t) => /* @__PURE__ */ Oc(e, t, Ln), ju = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ji;
const Lr = typeof window < "u" && window.trustedTypes;
if (Lr)
  try {
    ji = /* @__PURE__ */ Lr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const El = ji ? (e) => ji.createHTML(e) : (e) => e, Du = "http://www.w3.org/2000/svg", Ru = "http://www.w3.org/1998/Math/MathML", pt = typeof document < "u" ? document : null, Br = pt && /* @__PURE__ */ pt.createElement("template"), Fu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? pt.createElementNS(Du, e) : t === "mathml" ? pt.createElementNS(Ru, e) : n ? pt.createElement(e, { is: n }) : pt.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => pt.createTextNode(e),
  createComment: (e) => pt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => pt.querySelector(e),
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
      Br.innerHTML = El(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Br.content;
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
}, Ou = /* @__PURE__ */ Symbol("_vtc");
function Lu(e, t, n) {
  const s = e[Ou];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Vr = /* @__PURE__ */ Symbol("_vod"), Bu = /* @__PURE__ */ Symbol("_vsh"), Vu = /* @__PURE__ */ Symbol(""), Uu = /(?:^|;)\s*display\s*:/;
function Wu(e, t, n) {
  const s = e.style, i = be(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (be(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && wn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && wn(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null ? Gu(
        e,
        o,
        !be(t) && t ? t[o] : void 0,
        l
      ) || wn(s, o, l) : wn(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[Vu];
      o && (n += ";" + o), s.cssText = n, r = Uu.test(n);
    }
  } else t && e.removeAttribute("style");
  Vr in e && (e[Vr] = r ? s.display : "", e[Bu] && (s.display = "none"));
}
const is = /\s*!important$/;
function wn(e, t, n) {
  if (ne(n))
    n.forEach((s) => wn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    is.test(n) ? e.setProperty(t, n.replace(is, ""), "important") : e.setProperty(t, n);
  else {
    const s = Hu(e, t);
    is.test(n) ? e.setProperty(
      tn(s),
      n.replace(is, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ur = ["Webkit", "Moz", "ms"], Ai = {};
function Hu(e, t) {
  const n = Ai[t];
  if (n)
    return n;
  let s = qe(t);
  if (s !== "filter" && s in e)
    return Ai[t] = s;
  s = No(s);
  for (let i = 0; i < Ur.length; i++) {
    const r = Ur[i] + s;
    if (r in e)
      return Ai[t] = r;
  }
  return t;
}
function Gu(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && be(s) && n === s;
}
const Wr = "http://www.w3.org/1999/xlink";
function Hr(e, t, n, s, i, r = uc(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Wr, t.slice(6, t.length)) : e.setAttributeNS(Wr, t, n) : n == null || r && !jo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ct(n) ? String(n) : n
  );
}
function Gr(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? El(n) : n);
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
    l === "boolean" ? n = jo(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Ut(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ku(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Kr = /* @__PURE__ */ Symbol("_vei");
function qu(e, t, n, s, i = null) {
  const r = e[Kr] || (e[Kr] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = Zu(t);
    if (s) {
      const c = r[t] = eA(
        s,
        i
      );
      Ut(e, l, c, a);
    } else o && (Ku(e, l, o, a), r[t] = void 0);
  }
}
const Yu = /(Once|Passive|Capture)$/, Ju = /^on:?(?:Once|Passive|Capture)$/;
function Zu(e) {
  let t, n;
  for (; (n = e.match(Yu)) && !Ju.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : tn(e.slice(2)), t];
}
let di = 0;
const Xu = /* @__PURE__ */ Promise.resolve(), Qu = () => di || (Xu.then(() => di = 0), di = Date.now());
function eA(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (ne(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        r.call(s), s._stopped = !0;
      };
      const o = i.slice(), l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const c = o[a];
        c && At(
          c,
          t,
          5,
          l
        );
      }
    } else
      At(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Qu(), n;
}
const qr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, tA = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? Lu(e, s, o) : t === "style" ? Wu(e, n, s) : Is(t) ? Ts(t) || qu(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : nA(e, t, s, o)) ? (Gr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Hr(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (sA(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !be(s))) ? Gr(e, qe(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Hr(e, t, s, o));
};
function nA(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && qr(t) && le(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return qr(t) && be(n) ? !1 : t in e;
}
function sA(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = qe(t);
  return Array.isArray(n) ? n.some((i) => qe(i) === s) : Object.keys(n).some((i) => qe(i) === s);
}
const ks = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (n) => cs(t, n) : t;
};
function iA(e) {
  e.target.composing = !0;
}
function Yr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ht = /* @__PURE__ */ Symbol("_assign"), rs = /* @__PURE__ */ Symbol("_initialValue");
function fi(e, t, n) {
  return t && (e = e.trim()), n && (e = Ps(e)), e;
}
const St = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[rs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[rs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Ht] = ks(i);
    const r = s || i.props && i.props.type === "number";
    Ut(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ht](fi(e.value, n, r));
    }), (n || r) && Ut(e, "change", () => {
      e.value = fi(e.value, n, r);
    }), t || (Ut(e, "compositionstart", iA), Ut(e, "compositionend", Yr), Ut(e, "change", Yr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", r = e[rs];
    delete e[rs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Ht](fi(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, o) {
    if (e[Ht] = ks(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Ps(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, Cl = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, Ut(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? Ps(ws(a)) : ws(a)
      ), r = e.multiple, o = r ? Jt(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        r,
        r ? ne(o) ? i.slice() : i : o
      ];
      try {
        e[Ht](o);
      } finally {
        el(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[Ht] = ks(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Jr(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Ht] = ks(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !rA(t, n[1], n[0])) && Jr(e, t);
  }
};
function rA(e, t, n) {
  if (!n || ne(e)) return It(e, t);
  if (Jt(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Jr(e, t) {
  const n = e.multiple, s = ne(t);
  if (!(n && !s && !Jt(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const o = e.options[i], l = ws(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? o.selected = t.some((c) => String(c) === String(l)) : o.selected = fc(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (It(ws(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ws(e) {
  return "_value" in e ? e._value : e.value;
}
const oA = ["ctrl", "shift", "alt", "meta"], lA = {
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
  exact: (e, t) => oA.some((n) => e[`${n}Key`] && !t.includes(n))
}, aA = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = lA[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  }));
}, cA = /* @__PURE__ */ Ze({ patchProp: tA }, Fu);
let Zr;
function uA() {
  return Zr || (Zr = xu(cA));
}
const AA = ((...e) => {
  const t = uA().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = fA(s);
    if (!i) return;
    const r = t._component;
    !le(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, dA(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function dA(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function fA(e) {
  return be(e) ? document.querySelector(e) : e;
}
const pA = "zhonglou", hA = "钟楼", mA = "1.4.0", gA = "S", xA = 10, yA = "【副本进行中：钟楼】", bA = [], vA = { briefingName: "钟楼" }, kA = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, wA = { type: "nights", template: "剩余{n}夜" }, _A = "至第四日日出", zA = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], $A = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", SA = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], EA = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], CA = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], MA = [{ id: "M1", q: "第一夜的值班签会抽中主播吗", yes: "会", no: "不会", p: 0.1, by: "d1", judge: "第一日日落的抽签结果是{{user}}本人当夜值班" }, { id: "M2", q: "塔里会出人命吗", yes: "会", no: "不会", p: 0.5, judge: "有人死于他人之手，系统宣布钟楼停摆、开启审判" }, { id: "M3", q: "主播会亲手摇响大钟吗", yes: "会", no: "不会", p: 0.35, judge: "{{user}}本人在4F机房摇动曲柄，让大钟鸣响" }], IA = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], TA = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], NA = {
  id: pA,
  name: hA,
  version: mA,
  level: gA,
  players: xA,
  token: yA,
  legacyKeys: bA,
  detect: vA,
  time: kA,
  remaining: wA,
  deadline: _A,
  roles: zA,
  rolesNote: $A,
  stateFields: SA,
  phases: EA,
  events: CA,
  markets: MA,
  docs: IA,
  danmaku: TA
}, PA = "jingjie", jA = "境界游乐园", DA = "1.1.0", RA = "A", FA = "【副本进行中：境界游乐园】", OA = [], LA = { briefingName: "境界游乐园" }, BA = { type: "none" }, VA = { type: "fromPanel" }, UA = [], WA = [], HA = [{ id: "M1", q: "15:30演出时主播会回头吗", yes: "会", no: "不会", p: 0.3, judge: "15:30表演区演出期间，{{user}}本人回头了" }, { id: "M2", q: "主播会坐上摩天轮吗", yes: "会", no: "不会", p: 0.55, judge: "{{user}}本人乘坐了摩天轮" }, { id: "M3", q: "主播会走进镜宫吗", yes: "会", no: "不会", p: 0.45, judge: "{{user}}本人进入了镜宫" }], GA = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], KA = {
  id: PA,
  name: jA,
  version: DA,
  level: RA,
  token: FA,
  legacyKeys: OA,
  detect: LA,
  time: BA,
  remaining: VA,
  phases: UA,
  events: WA,
  markets: HA,
  docs: GA
}, qA = "kaoshi", YA = "考试", JA = "1.1.0", ZA = "A", XA = "【副本进行中：考试】", QA = [], ed = { briefingName: "考试" }, td = { type: "countdown", minutesPerRound: 3 }, nd = { type: "fromPanel" }, sd = "至考试结束", id = [{ id: "main", name: "考试", cap: 100, next: null }], rd = [], od = [], ld = {
  id: qA,
  name: YA,
  version: JA,
  level: ZA,
  token: XA,
  legacyKeys: QA,
  detect: ed,
  time: td,
  remaining: nd,
  deadline: sd,
  phases: id,
  events: rd,
  docs: od
}, ad = "xiyan", cd = "喜宴", ud = "1.2.0", Ad = "D", dd = "【副本进行中：喜宴】", fd = [], pd = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, hd = { type: "countdown", minutesPerRound: 3 }, md = { type: "fromPanel" }, gd = "至天亮", xd = [{ id: "main", name: "喜宴", cap: 160, next: null }], yd = [], bd = [{ id: "M1", q: "主播会穿上喜服吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人穿上了喜服" }, { id: "M2", q: "这场婚礼的新人会是主播吗", yes: "是", no: "不是", p: 0.17, judge: "{{user}}被认定为这场婚礼的新郎或新娘", judgeNo: "{{user}}以外的某个人被认定为这场婚礼的新郎或新娘" }, { id: "M3", q: "天亮前会有人死吗", yes: "会", no: "不会", p: 0.4, judge: "有人死亡" }], vd = [], kd = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], wd = {
  id: ad,
  name: cd,
  version: ud,
  level: Ad,
  token: dd,
  legacyKeys: fd,
  detect: pd,
  time: hd,
  remaining: md,
  deadline: gd,
  phases: xd,
  events: yd,
  markets: bd,
  docs: vd,
  danmaku: kd
}, _d = "youxi", zd = "游戏", $d = "1.2.0", Sd = "C", Ed = "【副本进行中：游戏】", Cd = [], Md = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Id = { type: "countdown", minutesPerRound: 8 }, Td = { type: "fromPanel" }, Nd = "至结算", Pd = [{ id: "main", name: "游戏", cap: 90, next: null }], jd = [], Dd = [{ id: "M1", q: "第一个出局的会是主播吗", yes: "是", no: "不是", p: 0.08, judge: "第一个被淘汰出局的人是{{user}}", judgeNo: "{{user}}以外的某个人成为第一个被淘汰出局的人" }, { id: "M2", q: "三场游戏能全部玩完吗", yes: "能", no: "不能", p: 0.55, judge: "第三场游戏结束" }, { id: "M3", q: "喊数抱团时主播会拉陌生人吗", yes: "会", no: "不会", p: 0.5, judge: "喊数抱团时，{{user}}主动拉了自己同伴以外的人一起抱团" }], Rd = [], Fd = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], Od = {
  id: _d,
  name: zd,
  version: $d,
  level: Sd,
  token: Ed,
  legacyKeys: Cd,
  detect: Md,
  time: Id,
  remaining: Td,
  deadline: Nd,
  phases: Pd,
  events: jd,
  markets: Dd,
  docs: Rd,
  danmaku: Fd
}, Ld = "wuming", Bd = "污名", Vd = "1.1.0", Ud = "B", Wd = "4-8", Hd = "【副本进行中：污名】", Gd = ["污名"], Kd = { briefingName: "污名" }, qd = { type: "countdown", minutesPerRound: 3 }, Yd = { type: "countdown", template: "剩余{m}分钟" }, Jd = "至收播", Zd = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], Xd = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], Qd = [], ef = !0, tf = {
  id: Ld,
  name: Bd,
  version: Vd,
  level: Ud,
  players: Wd,
  token: Hd,
  legacyKeys: Gd,
  detect: Kd,
  time: qd,
  remaining: Yd,
  deadline: Jd,
  phases: Zd,
  events: Xd,
  docs: Qd,
  disableLive: ef
}, nf = "dusongshu", sf = "杜松树", rf = "1.1.0", of = "A", lf = 6, af = "【副本进行中：杜松树】", cf = [], uf = { briefingName: "杜松树" }, Af = { type: "countdown", minutesPerRound: 30 }, df = { type: "fromPanel" }, ff = "至第四日日出", pf = ["父亲", "继母", "玛琳", "男孩", "其余"], hf = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", mf = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], gf = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], xf = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], yf = [{ id: "M1", q: "第一夜会有人死在苹果箱里吗", yes: "会", no: "不会", p: 0.5, by: "n1", judge: "有人在苹果箱里被箱盖压死或死在箱中" }, { id: "M2", q: "主播会吃下锅里的炖肉吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人吃了灶上铁锅里炖的肉" }, { id: "M3", q: "杜松树上的鸟会开口吗", yes: "会", no: "不会", p: 0.6, judge: "杜松树上那只红绿羽毛的鸟开口说话或唱歌" }], bf = [{ title: "游玩说明", md: `## 副本概况
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
最后一页被撕掉了，装订线上只剩一条不整齐的纸茬。` }], vf = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], kf = {
  id: nf,
  name: sf,
  version: rf,
  level: of,
  players: lf,
  token: af,
  legacyKeys: cf,
  detect: uf,
  time: Af,
  remaining: df,
  deadline: ff,
  roles: pf,
  rolesNote: hf,
  phases: mf,
  events: gf,
  stateFields: xf,
  markets: yf,
  docs: bf,
  danmaku: vf
}, wf = "nongxian", _f = "农闲", zf = "1.0.0", $f = "D", Sf = !0, Ef = "不限", Cf = "【副本进行中：农闲】", Mf = [], If = { briefingName: "农闲" }, Tf = { type: "none" }, Nf = { type: "fromPanel" }, Pf = [], jf = [], Df = [{ title: "游玩说明", md: `## 系统简报

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
梅姨教新菜，会添在配方板上。` }], Rf = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], Ff = {
  id: wf,
  name: _f,
  version: zf,
  level: $f,
  rest: Sf,
  players: Ef,
  token: Cf,
  legacyKeys: Mf,
  detect: If,
  time: Tf,
  remaining: Nf,
  phases: Pf,
  events: jf,
  docs: Df,
  danmaku: Rf
}, Of = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function an(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const Lf = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function Xr(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(Lf)) {
    const i = Number(s[1]), r = s[2];
    n = !0, r === "天" ? t += i * 1440 : r === "小时" || r === "个小时" || r === "h" || r === "H" ? t += i * 60 : t += i;
  }
  return n ? Math.round(t) : null;
}
function Ml(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: Xr(t), total: n === void 0 ? null : Xr(n) };
}
function Bf(e, t) {
  return e.phases.find((n) => n.id === t);
}
function Bn(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); )
    n.push(i), s.add(i.id), i = Bf(e, i.next);
  return n;
}
function Il(e, t) {
  return Bn(e, t).filter((n) => n.night).length;
}
function Vf(e, t, n) {
  if (Bn(e, t).some((i) => i.id === n.id)) return t;
  const s = e.phases[0];
  return s && Bn(e, s).some((i) => i.id === n.id) ? s : n;
}
function pi(e, t, n, s, i) {
  if (!e.phases.length || !e.phases.some((d) => d.id === t.id)) return;
  let r = Bn(e, n), o = r.findIndex((d) => d.id === t.id);
  o < 0 && (r = Bn(e, t), o = 0);
  const l = r.reduce((d, h) => d + Math.max(0, h.cap), 0), a = Math.max(0, t.cap - s) + r.slice(o + 1).reduce((d, h) => d + Math.max(0, h.cap), 0), c = t.deadline ?? r[0].deadline ?? e.deadline, u = { x: a, y: l, deadline: c };
  if (e.time.type === "countdown") {
    const d = e.time.minutesPerRound, h = e.time.totalMinutes, y = h && h > 0 ? h : l * d;
    let w = h && h > 0 && l > 0 ? Math.round(y * a / l) : a * d;
    const _ = Ml(i).remaining;
    _ !== null && (w = Math.min(w, _ - d)), w = Math.max(0, w), Object.assign(u, { minutes: w, total: y, text: `约剩${an(w)}/${an(y)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) u.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const d = e.remaining.template.replace("{n}", String(Il(e, t)));
      u.text = c ? `${c}·${d}` : d;
    } else c && (u.text = c);
  return u;
}
const Vn = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function Tl(e, t, n = Vn) {
  const s = e ?? "", i = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), r = i ? Math.max(1, Number(i[1])) : Math.max(1, Math.round(n[t] ?? Vn[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: r };
  const l = Number(o[1]), a = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return a <= 0 ? { rounds: r } : { rounds: r, totalMinutes: a, minutesPerRound: Math.max(1, Math.round(a / r)) };
}
const _s = "generic", Di = [NA, KA, ld, wd, Od, tf, kf, Ff], Uf = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(Of)
  }
};
function Wf(e, t) {
  const n = Uf[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const Nl = ["D", "C", "B", "A", "S"];
function Pl(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === _s && t.push(`id 不能是保留字 ${_s}`), Nl.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((c) => typeof c != "string")) && t.push("detect.patterns 必须是文本数组");
  const i = n.time;
  !i || !["none", "clock", "countdown"].includes(i.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (i.type === "clock" && (typeof i.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(i.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), i.type !== "none" && (typeof i.minutesPerRound != "number" || i.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), i.type === "countdown" && i.totalMinutes !== void 0 && (typeof i.totalMinutes != "number" || i.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const r = n.remaining;
  !r || !["nights", "countdown", "fromPanel"].includes(r.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : r.type !== "fromPanel" && typeof r.template != "string" && t.push("remaining.template 必须是文本"), r?.type === "countdown" && i?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.rest !== void 0 && typeof n.rest != "boolean" && t.push("rest 必须是 true 或 false"), n.stateFields !== void 0 && (Array.isArray(n.stateFields) ? n.stateFields.forEach((c, u) => {
    (!c || typeof c.key != "string" || !c.key || typeof c.label != "string" || typeof c.hint != "string") && t.push(`stateFields[${u}] 需要 key、label、hint 三个文本`);
  }) : t.push("stateFields 必须是数组")), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((c) => typeof c != "string" || !c)) && t.push("roles 必须是文本数组");
  const o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((c, u) => {
    if (!c || typeof c.id != "string" || typeof c.name != "string") {
      t.push(`phases[${u}] 缺少 id 或 name`);
      return;
    }
    o.has(c.id) && t.push(`阶段 id 重复：${c.id}`), l.has(c.name) && t.push(`阶段名称重复：${c.name}`), o.add(c.id), l.add(c.name), (typeof c.cap != "number" || c.cap < 1 || !Number.isInteger(c.cap)) && t.push(`阶段 ${c.id} 的 cap 必须是正整数`), c.next !== null && typeof c.next != "string" && t.push(`阶段 ${c.id} 的 next 必须是阶段 id 或 null`), c.deadline !== void 0 && typeof c.deadline != "string" && t.push(`阶段 ${c.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((c) => {
    c && typeof c.next == "string" && !o.has(c.next) && t.push(`阶段 ${c.id} 的 next 指向不存在的阶段：${c.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const a = /* @__PURE__ */ new Set();
  if (Array.isArray(n.events) ? n.events.forEach((c, u) => {
    if (!c || typeof c.id != "string" || typeof c.text != "string") {
      t.push(`events[${u}] 缺少 id 或 text`);
      return;
    }
    a.has(c.id) && t.push(`事件 id 重复：${c.id}`), a.add(c.id), o.has(c.phase) || t.push(`事件 ${c.id} 的 phase 不存在：${c.phase}`), (!Number.isInteger(c.from) || !Number.isInteger(c.to) || c.from < 1 || c.to < c.from) && t.push(`事件 ${c.id} 的轮次区间无效`), c.kind !== "event" && c.kind !== "directive" && t.push(`事件 ${c.id} 的 kind 必须是 event 或 directive`), c.if !== void 0 && typeof c.if != "string" && t.push(`事件 ${c.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((c, u) => {
    !c || typeof c.title != "string" ? t.push(`docs[${u}] 缺少 title`) : c.md !== void 0 && typeof c.md != "string" ? t.push(`docs[${u}].md 必须是文本`) : c.image !== void 0 && typeof c.image != "string" && t.push(`docs[${u}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), n.danmaku !== void 0 && (Array.isArray(n.danmaku) ? n.danmaku.forEach((c, u) => {
    if (!c || typeof c.type != "string" || typeof c.text != "string") {
      t.push(`danmaku[${u}] 需要 type 和 text`);
      return;
    }
    c.when !== void 0 && typeof c.when != "string" && t.push(`danmaku[${u}].when 必须是文本`), c.scope !== void 0 && typeof c.scope != "string" && t.push(`danmaku[${u}].scope 必须是文本`), c.phase !== void 0 && (!Array.isArray(c.phase) || c.phase.some((d) => typeof d != "string") ? t.push(`danmaku[${u}].phase 必须是文本数组`) : c.phase.forEach((d) => {
      o.size > 0 && !o.has(d) && console.warn(`[rlzc] danmaku[${u}] 的 phase "${d}" 不在阶段表中，已跳过`);
    }));
  }) : t.push("danmaku 必须是数组")), n.markets !== void 0)
    if (!Array.isArray(n.markets)) t.push("markets 必须是数组");
    else {
      const c = /* @__PURE__ */ new Set();
      n.markets.forEach((u, d) => {
        if (!u || typeof u != "object") {
          t.push(`markets[${d}] 必须是对象`);
          return;
        }
        for (const h of ["id", "q", "yes", "no", "judge"])
          (typeof u[h] != "string" || !u[h].trim()) && t.push(`markets[${d}] 缺少文本字段 ${h}`);
        (typeof u.p != "number" || !(u.p >= 0.01 && u.p <= 0.99)) && t.push(`markets[${d}].p 必须是 0.01–0.99 的数`), u.judgeNo !== void 0 && (typeof u.judgeNo != "string" || !u.judgeNo.trim()) && t.push(`markets[${d}].judgeNo 必须是文本`), u.by !== void 0 && typeof u.by != "string" && t.push(`markets[${d}].by 必须是阶段 id`), typeof u.id == "string" && (c.has(u.id) && t.push(`事件盘 id 重复：${u.id}`), c.add(u.id));
      });
    }
  return t;
}
function Hf(e) {
  const t = new Set(e.phases.map((n) => n.id));
  return (e.markets ?? []).filter((n) => n.by !== void 0 && !t.has(n.by) ? (console.warn(`[rlzc] 副本包 ${e.id} 的事件盘 ${n.id}：by「${n.by}」不是本包的阶段 id，已跳过`), !1) : !0);
}
function jl(e) {
  return Nl.includes(e.level ?? "") ? e.level : "D";
}
function Dl(e, t = Vn) {
  const n = jl(e), s = Tl(e.limit, n, t), i = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, r = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / i)) : void 0;
  return {
    id: _s,
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
function tr(e) {
  const t = new Set(Di.map((n) => n.id));
  return [...Di, ...e.filter((n) => !t.has(n.id))];
}
const Gf = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, Kf = /<阶段切换>([\s\S]*?)<\/阶段切换>/, qf = /<副本结算>([\s\S]*?)<\/副本结算>/, Rl = /<副本>([\s\S]*?)<\/副本>/, Yf = /<角色登记>([\s\S]*?)<\/角色登记>/, Jf = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, Zf = /<积分变动>([\s\S]*?)<\/积分变动>/g;
function Fl(e) {
  const t = Gf.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (o) => {
    const l = new RegExp(`${o}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return l ? l[1].trim() : void 0;
  }, r = i("等级");
  return r && (n.level = r.replace(/级$/, "").trim().toUpperCase()), n.goal = i("目标"), n.limit = i("时限"), n.players = i("人数"), n;
}
function Xf(e) {
  const t = Kf.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function Ol(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const i = n.slice(0, s).trim(), r = n.slice(s + 1).trim();
    i && (t[i] = r);
  }
  return t;
}
function Hs(e) {
  const t = qf.exec(e ?? "");
  if (!t) return null;
  const n = Ol(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function Ll(e) {
  const t = Yf.exec(e ?? "");
  if (!t) return null;
  const n = Ol(t[1]);
  return Object.keys(n).length ? n : null;
}
function os(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function Bl(e) {
  const t = Rl.exec(e ?? "");
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
      l === "时限" ? (n.limit = a, s = null) : l === "进度条" ? (n.progressBar = a, s = null) : l === "任务" ? (os(a) && n.tasks.push(os(a)), s = "tasks") : (n.ps = a, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(r)) {
      s = null;
      continue;
    }
    s === "tasks" ? os(r) && n.tasks.push(os(r)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${r}` : r);
  }
  return n;
}
function Qf(e) {
  const t = Jf.exec(e ?? "");
  return t ? t[2] : null;
}
function hi(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (n(i)) return i;
    s.add(i.id), i = i.next ? e.phases.find((r) => r.id === i.next) : void 0;
  }
  return null;
}
function ep(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const i = (l) => !!l.clock && !l.night;
  let r = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      r = hi(e, t, i), o = r?.cap ?? 0;
      break;
    case "晚饭":
      r = hi(e, t, i), r && (o = Math.ceil(r.cap * 0.75), r.id === t.id && o <= n && (o = r.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      r = hi(e, t, (l) => !!l.night), o = r?.cap ?? 0;
      break;
  }
  return !r || r.id === t.id && o <= n + 1 ? null : { phase: r.id, round: o, label: `${r.name}第${o}轮` };
}
const tp = /<状态栏>([\s\S]*?)<\/状态栏>/;
function np(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function mi(e, t) {
  const n = np(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const gi = /* @__PURE__ */ new Map();
function sp(e, t) {
  const n = `${e}\0${t}`;
  if (!gi.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (i) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, i);
    }
    gi.set(n, s);
  }
  return gi.get(n);
}
function ip(e, t) {
  const n = String(e ?? ""), s = (l, a) => l ? { signal: a, pack: l, info: { name: l.name, level: l.level } } : null, i = Fl(n);
  if (i)
    return { signal: 1, pack: t.find((a) => a.detect.briefingName === i.name), info: i };
  const r = Rl.exec(n);
  if (r) {
    const l = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(r[1]), a = l && s(mi(t, l[1]), 2);
    if (a) return a;
  }
  for (const l of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const a = s(mi(t, l[1]), 3);
    if (a) return a;
  }
  const o = tp.exec(n);
  if (o) {
    for (const l of o[1].split(`
`))
      if (l.includes("地点"))
        for (const a of l.matchAll(/副本《([^》]+)》/g)) {
          const c = s(mi(t, a[1]), 4);
          if (c) return c;
        }
  }
  for (const l of t)
    for (const a of l.detect.patterns ?? []) {
      const c = sp(l.id, a);
      if (c && c.test(n)) return s(l, 5);
    }
  return null;
}
const Qr = 5, rp = { id: "_open", name: "进行中", cap: 0, next: null };
function De(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function op(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function Vl(e, t, n) {
  const s = op(e) + Math.max(0, n - 1) * t, i = Math.floor(s / 60) % 24, r = (s % 60 + 60) % 60;
  return `${i % 12 === 0 ? 12 : i % 12}:${String(r).padStart(2, "0")}`;
}
function eo(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return Vl(e.time.dayStart, e.time.minutesPerRound, n);
}
function Ul(e) {
  return e.phases.length ? e.phases : [rp];
}
function As(e, t) {
  return Ul(e).find((n) => n.id === t);
}
function to(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (i.id === n) return !0;
    s.add(i.id), i = As(e, i.next);
  }
  return !1;
}
function no(e, t, n, s) {
  const i = n + 1, r = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > i) {
      let l = r.map((c, u) => ({ e: c, i: u })).filter(({ e: c }) => c.from >= i && c.from <= o).sort((c, u) => c.e.from - u.e.from || c.i - u.i).map(({ e: c }) => c), a = o;
      return l.length > Qr && (a = l[Qr - 1].from, l = l.filter((c) => c.from <= a)), { phase: t, round: a, events: l, skipFrom: i };
    }
  }
  return { phase: t, round: i, events: r.filter((o) => o.from === i) };
}
function Wl(e, t, n) {
  const s = t.entryIndex;
  if (!De(e[s])) return null;
  const i = Ul(n);
  let r = i[0], o = i[0], l = 0, a, c = !1, u, d, h = null, y, w, _;
  const P = /* @__PURE__ */ new Set(), V = {}, j = {}, z = /* @__PURE__ */ new Map();
  for (const re of t.manual ?? [])
    z.has(re.atIndex) || z.set(re.atIndex, []), z.get(re.atIndex).push(re);
  const I = (re, ze) => {
    j[r.id] === void 0 && re.id !== r.id && (j[r.id] = ze), n.phases.length && (o = Vf(n, o, re)), r = re, l = 0, h && !to(n, r, h.phase) && (h = null);
  };
  for (let re = s; re < e.length; re++) {
    const ze = e[re];
    if (!c && De(ze)) {
      const ge = no(n, r, l, h);
      l = ge.round;
      const He = new Set((ze.extra?.rlzc?.skippedEvents ?? []).map((D) => D.id));
      ge.events.forEach((D) => {
        He.has(D.id) || P.add(D.id);
      }), V[re] = {
        phase: r.id,
        round: l,
        events: ge.events.map((D) => D.id),
        skipFrom: ge.skipFrom,
        limit: pi(n, r, o, l, a)
      }, h && r.id === h.phase && l >= h.round && (h = null);
      const Qe = String(ze.mes ?? ""), Ge = Bl(Qe);
      Ge && (w = Ge), a = Ge?.limit;
      const rn = Ll(Qe);
      rn && (_ = rn);
      const Ft = Hs(Qe);
      if (Ft)
        c = !0, u = "tag", d = re, y = Ft;
      else {
        const D = Xf(Qe), K = D ? i.find((H) => H.name === D) : void 0;
        if (K && n.phases.length)
          I(K, re);
        else if (r.cap > 0 && l >= r.cap && r.next) {
          const H = As(n, r.next);
          H && I(H, re);
        }
      }
    }
    for (const ge of z.get(re) ?? []) {
      if (c) break;
      switch (ge.kind) {
        case "skip": {
          h = As(n, ge.targetPhase) && to(n, r, ge.targetPhase) ? { phase: ge.targetPhase, round: ge.targetRound } : null;
          break;
        }
        case "setPhase": {
          const He = As(n, ge.phase);
          He && (h = null, I(He, re));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(ge.round)), h = null;
          break;
        case "end":
          c = !0, u = "manual", d = re;
          break;
      }
    }
  }
  const ee = c ? null : no(n, r, l, h), Z = ee ? ee.round : l + 1, B = r.cap > 0, b = n.events.filter((re) => P.has(re.id)).map((re) => re.id), m = c ? void 0 : pi(n, r, o, Z, a), g = c ? void 0 : pi(n, r, o, l);
  let O;
  const ae = n.remaining;
  return !c && ae.type === "nights" && n.phases.length && !r.byTag && !r.frozen ? O = ae.template.replace("{n}", String(Il(n, r))) : !c && ae.type === "countdown" && m?.minutes !== void 0 && (O = ae.template.replace("{m}", String(m.minutes))), {
    phase: r,
    round: l,
    nextRound: Z,
    clock: c ? void 0 : eo(n, r, Z),
    currentClock: eo(n, r, l),
    remainingText: O,
    limit: m,
    roundsLeft: g ? { x: g.x, y: g.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: c,
    endedBy: u,
    endIndex: d,
    firedEvents: b,
    warn: !c && B && Z >= r.cap - 2,
    isLastRound: !c && B && Z === r.cap,
    overdue: !c && B && !r.next && Z > r.cap,
    next: ee,
    skipGoal: h,
    settlement: y,
    panel: w,
    rolesFromChat: _,
    perMessage: V,
    phaseEnds: j,
    entryIndex: s
  };
}
const Hl = "rlzc_token", Gl = "rlzc_progress", Kl = "rlzc_turn", ql = "rlzc_state", Yl = "rlzc_ledger", Jl = "rlzc_live", lp = [Hl, Gl, Kl, ql, Yl, Jl], Un = { token: "", progress: "", turn: "", injected: [] };
function ap(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function zs(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const i = new RegExp(`(?<!\\{)\\{(${s.map(ap).join("|")})\\}(?!\\})`, "g");
  return e.replace(i, (r, o) => n?.[o]?.trim() || o);
}
function cp(e, t) {
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
function so(e, t, n, s = !1) {
  let i = zs(e.text, t, n);
  return e.to > e.from && (i = `在本阶段第${e.from}到${e.to}轮之间发生：${i}`), e.if && !s && (i += `（条件：${zs(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${i}`;
}
function up(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Ap(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...Un, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return Un;
  const i = s.roles, r = e.phases.length > 0, o = t.next, l = [`副本：${e.name}（${e.level}级）`], a = t.limit;
  if (r)
    l.push(`阶段：${t.phase.name}`), l.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), a && l.push(`剩余${a.x}/${a.y}轮`), t.clock && l.push(`钟时：${t.clock}`), a?.text && l.push(`时限：${a.text}`), e.remaining.type === "countdown" && t.remainingText && l.push(t.remainingText), a?.deadline && !a.text?.includes(a.deadline) && l.push(`截止：${a.deadline}`);
  else {
    l.push(`本轮：第${t.nextRound}轮`), t.clock && l.push(`钟时：${t.clock}`);
    const z = s.panelLimit || s.briefing?.limit;
    z && l.push(`时限：${z}`);
  }
  const c = ["［副本进度·仅供AI］", l.join("　")];
  if (s.briefing?.goal && (!r || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const z = e.roles.filter((I) => i?.[I]);
    c.push(
      z.length ? `角色登记：${e.roles.map((I) => `${I}=${i?.[I] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const u = cp(e, t.firedEvents);
  u && c.push(`已发生事件：${u}`);
  const d = [];
  o.skipFrom !== void 0 && d.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const h = new Map((s.subNext ?? []).map((z) => [z.id, z])), y = o.events.filter((z) => z.if && h.get(z.id)?.ok === !1).map((z) => ({ id: z.id, reason: h.get(z.id).reason })), w = o.events.filter((z) => !y.some((I) => I.id === z.id)), _ = (z) => !!z.if && h.get(z.id)?.ok === !0, P = w.filter((z) => z.kind === "event"), V = w.filter((z) => z.kind === "directive");
  if (P.length && (d.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), P.forEach((z) => d.push(so(z, e, i, _(z))))), V.length && (d.push("本轮写作要求："), V.forEach((z) => d.push(so(z, e, i, _(z))))), t.isLastRound ? d.push(up(t)) : t.overdue && d.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && d.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && d.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((z) => i?.[z])) {
    let z = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((I) => `${I}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (z += "死者不得是{{user}}或其同伴。"), d.push(z);
  }
  let j;
  return a?.text && (a.minutes !== void 0 ? (d.push(
    `本轮<副本>的时限一栏写：${a.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), j = { text: a.text, minutes: a.minutes, total: a.total }) : (d.push(`本轮<副本>的时限一栏写：${a.text}（照抄）。`), j = { text: a.text })), {
    token: e.token,
    progress: c.join(`
`),
    turn: d.length ? ["［本轮指令·仅供AI］", ...d].join(`
`) : "",
    injected: w.map((z) => z.id),
    limit: j,
    skipped: y.length ? y : void 0,
    state: s.stateText || void 0
  };
}
const dp = 1, fp = 0;
function xe() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function pp() {
  const e = xe();
  return e.eventTypes ?? e.event_types ?? {};
}
function zt(e, t) {
  const n = pp()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  xe().eventSource.on(n, t);
}
function Y() {
  return xe().chat ?? [];
}
function fn() {
  const e = xe();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function dt() {
  return xe().chatMetadata ?? {};
}
function Xe() {
  const e = xe();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Vt(e, t, n, s) {
  xe().setExtensionPrompt(e, t, dp, n, s, fp);
}
function Ee(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Dt(e) {
  const t = xe();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function io(e, t = "") {
  const n = xe();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const i = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof i == "string" ? i : null;
  }
  return window.prompt(e, t);
}
async function Zl(e, t) {
  const n = xe(), s = document.createElement("div"), i = document.createElement("div");
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
const Zt = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function Xl(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function hp(e, t = Zt) {
  return t.length ? e.replace(Xl(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function Ql(e, t = Zt, n = !1) {
  const s = Y()[e];
  if (!s || s.is_user) return;
  const i = String(s.extra?.display_text ?? s.mes ?? "");
  if (!Xl(n ? Zt : t, "").test(i)) return;
  const r = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!r) return;
  const o = xe().messageFormatting;
  if (typeof o != "function") return;
  const l = o(hp(i, t), s.name ?? "", !!s.is_system, !1, e);
  r.innerHTML !== l && (r.innerHTML = l);
}
function mp(e = Zt, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && Ql(s, e, t);
  });
}
const gp = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function ea(e) {
  return e.stateFields?.length ? e.stateFields : [gp];
}
const xp = [...Zt, "状态栏"], yp = new RegExp(`<(${xp.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function nr(e) {
  return String(e ?? "").replace(yp, "").replace(/\n{3,}/g, `

`).trim();
}
function bp(e) {
  const t = ea(e.pack), n = e.markets ?? [], s = [
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
${nr(e.text)}`
  ].join(`

`);
  return { system: s, user: l };
}
function vp(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class je extends Error {
}
function kp(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), i = t.lastIndexOf("}");
  if (s < 0 || i <= s) throw new je("返回里没有 JSON");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new je("返回的 JSON 无法解析");
  }
  if (!r || typeof r != "object" || Array.isArray(r)) throw new je("返回的不是 JSON 对象");
  if (!r.state || typeof r.state != "object" || Array.isArray(r.state)) throw new je("缺少 state");
  const o = ["done", "missed", "void"], l = (Array.isArray(r.events) ? r.events : []).filter((d) => d && typeof d.id == "string" && o.includes(d.status)).map((d) => ({ id: d.id, status: d.status, reason: String(d.reason ?? "") })), a = (Array.isArray(r.next) ? r.next : []).filter((d) => d && typeof d.id == "string" && typeof d.ok == "boolean").map((d) => ({ id: d.id, ok: d.ok, reason: String(d.reason ?? "") })), c = { events: l, state: r.state, next: a }, u = typeof r.hype == "number" ? r.hype : typeof r.hype == "string" && r.hype.trim() !== "" ? Number(r.hype) : NaN;
  if (Number.isFinite(u) && (c.hype = Math.max(0, Math.min(100, Math.round(u)))), typeof r.hurt == "boolean" ? c.hurt = r.hurt : (r.hurt === "true" || r.hurt === "false") && (c.hurt = r.hurt === "true"), r.markets && typeof r.markets == "object" && !Array.isArray(r.markets)) {
    const d = {};
    for (const [h, y] of Object.entries(r.markets))
      typeof y == "boolean" ? d[h] = y : (y === "true" || y === "false") && (d[h] = y === "true");
    c.markets = d;
  }
  return c;
}
function wp(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function _p(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((i) => String(i ?? "")).join("|");
  return `${e}:${t}:${s}:${wp(String(n?.mes ?? ""))}`;
}
function zp(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function $p(e, t, n = 2) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return kp(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
class ta extends Error {
}
function Gs(e) {
  if (e instanceof ta) return "超时";
  if (e instanceof je) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function na(e) {
  return e?.extra?.rlzc;
}
function Ks(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!De(s)) continue;
    const i = na(s)?.sub;
    if (i?.state && !i.skipped) return { index: n, state: i.state };
  }
  return null;
}
function Sp(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!De(s)) continue;
    const i = na(s)?.sub;
    return i && !i.skipped && Array.isArray(i.next) ? i.next : void 0;
  }
}
function $s(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => $s(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${$s(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function sa(e, t) {
  const n = ea(e), s = new Set(n.map((r) => r.key)), i = n.filter((r) => t[r.key] !== void 0).map((r) => `${r.label}：${$s(t[r.key])}`);
  for (const [r, o] of Object.entries(t)) s.has(r) || i.push(`${r}：${$s(o)}`);
  return i.length ? ["［副本状态·仅供AI］", ...i].join(`
`) : "";
}
const Ep = "你在写回廊直播间的观众弹幕。观众是回廊里的其他玩家，只看得到直播画面。什么人都有：夸赞、祝福、讨论、泼冷水、嫉妒、抹黑、造谣，正面的稍多。每条30字以内，口语，称{{user}}为主播，不用性别代词。只能根据画面里已经发生的事说话，不猜测、不透露画面外的信息。", Cp = ["praise", "bless", "discuss", "cold", "envy", "smear", "rumor"];
function Mp(e) {
  if (!e.aiSource || !e.subOn) return !1;
  const t = Math.max(1, Math.min(10, Math.floor(e.freq) || 3));
  return e.roundInShow > 0 && e.roundInShow % t === 0 ? !0 : e.phaseSwitch || e.hurt || e.eventDone;
}
function ia(e) {
  return String(e ?? "").replace(/<(副本|状态栏|阶段切换|副本结算|角色登记|积分变动|直播|thinking|think)>[\s\S]*?<\/\1>/g, "").replace(/<\/?[A-Za-z一-龥][^<>]*>/g, "").replace(/\n{3,}/g, `

`).trim();
}
function Ip(e, t, n) {
  const s = e.map((o) => o.text), i = [], r = /* @__PURE__ */ new Set();
  for (let o = 0; o < t * 10 && i.length < Math.min(t, s.length); o++) {
    const l = Math.floor(n() * s.length);
    r.has(l) || (r.add(l), i.push(s[l]));
  }
  return i;
}
function Tp(e) {
  const t = [
    Ep,
    "只输出一个 JSON 数组，8–12条，不要任何解释，格式：",
    '[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]'
  ].join(`
`), n = [
    `【直播间】${e.scene}`,
    `【在场角色】${e.cast.length ? e.cast.join("、") : "（无）"}`,
    `【最近两轮画面】
${e.texts.map((s) => ia(s)).filter(Boolean).join(`

`) || "（无）"}`,
    `【语气示例】
${e.samples.map((s) => `- ${s}`).join(`
`)}`
  ].join(`

`);
  return { system: t, user: n };
}
function Np(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), i = t.lastIndexOf("]");
  if (s < 0 || i <= s) throw new je("返回里没有 JSON 数组");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new je("返回的 JSON 无法解析");
  }
  if (!Array.isArray(r)) throw new je("返回的不是 JSON 数组");
  const o = r.filter((l) => l && typeof l.text == "string" && l.text.trim()).map((l) => ({
    type: Cp.includes(l.type) ? l.type : "discuss",
    name: typeof l.name == "string" && l.name.trim() ? l.name.trim().slice(0, 16) : "匿名",
    text: l.text.trim()
  })).slice(0, 13);
  if (!o.length) throw new je("返回的弹幕为空");
  return o;
}
async function Pp(e, t, n = 1) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return Np(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
function jp(e) {
  return e.t === "tip" ? `${e.name} 打赏${e.amount}` : `${e.name}：${e.text}`;
}
function Dp(e, t = 5) {
  if (!e.on) return "";
  const n = e.feed.filter((i) => i.t === "msg" || i.t === "tip").slice(-t), s = `［直播·仅供AI］{{user}}正在直播，约${e.viewers}人在看。`;
  return n.length ? `${s}最近弹幕：${n.map(jp).join("／")}` : s;
}
const ra = 1500;
function oa() {
  return xe().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function la(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function aa(e, t) {
  const n = new AbortController();
  let s;
  const i = new Promise((r, o) => {
    s = setTimeout(() => {
      n.abort(), o(new ta(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), i]);
  } finally {
    clearTimeout(s);
  }
}
function ca(e, t) {
  const n = t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : "") ?? "", s = new Error(`${e || ""} ${n}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return s.status = e, s;
}
async function ua(e, t, n, s = ra, i = 0.2) {
  const r = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: oa(),
    signal: n,
    body: JSON.stringify({
      ...la(e),
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
  if (!r.ok || l?.error) throw ca(r.status === 200 ? 0 : r.status, l);
  const a = l?.choices?.[0]?.message?.content ?? l?.choices?.[0]?.text ?? l?.content;
  if (typeof a != "string") throw new Error("返回里没有正文");
  return a;
}
async function Rp(e) {
  const t = xe();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function sr(e, t, n = {}) {
  return aa(e.timeoutMs, (s) => {
    if (e.source === "main") return Rp(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return ua(e.preset, t, s, ra, n.temperature ?? 0.2);
  });
}
async function Aa(e) {
  const t = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: oa(),
    body: JSON.stringify(la(e))
  }), n = await t.json().catch(() => null);
  if (!t.ok || n?.error) throw ca(t.status, n);
  return (Array.isArray(n) ? n : Array.isArray(n?.data) ? n.data : Array.isArray(n?.models) ? n.models : []).map((i) => typeof i == "string" ? i : i?.id ?? i?.name).filter(Boolean).sort();
}
async function Fp(e, t) {
  const n = await Aa(e).catch(() => []), s = { ...e, model: e.model || n[0] || "" }, i = await aa(
    t,
    (r) => ua(s, { system: "只回复 OK。", user: "ping" }, r, 5)
  );
  return { models: n, reply: i };
}
const da = "rlzc_ledger", bt = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, Op = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function Lp(e) {
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
function We(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), i = String(t.getHours()).padStart(2, "0"), r = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${i}:${r}`;
}
function ir(e) {
  const t = /等级[：:]\s*([DCBAS])/.exec(e);
  return t ? t[1] : null;
}
function fa(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function Bp(e, t, n, s, i, r = "") {
  const o = n.结果 ?? "", l = (n.评价 ?? "").toUpperCase().trim(), a = ["D", "C", "B", "A", "S"].includes(l) ? l : null, c = o === "通关" || o === "成功" || o === "胜利", u = o === "失败", d = o === "死亡" || o === "阵亡";
  if (!c && !u && !d)
    return { delta: 0, source: "" };
  if (d)
    return { delta: 0, source: "" };
  if (u)
    return i ? { delta: 0, source: "清算未通关" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣除30%" };
  if (i) {
    const j = bt[t] + 500;
    return { delta: Math.max(0, j - s), source: "清算通关·续存至斩杀线+500", clearWin: !0 };
  }
  if (!a)
    return { delta: 0, source: "", warn: "评价缺失或无法识别，不发奖励" };
  let h = Op[e][a];
  const y = r || e, w = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", _ = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", P = e !== t;
  let V = `副本奖励·${y} ${a}评`;
  return w ? (h = Math.floor(h * 0.5), V += "（×50%）") : (_ || P) && (h = Math.floor(h * 0.6), V += "（×60%）"), { delta: h, source: V };
}
function ro(e, t = (/* @__PURE__ */ new Date()).getFullYear()) {
  const n = /^(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
  if (!n) return;
  const s = new Date(t, Number(n[1]) - 1, Number(n[2]), Number(n[3]), Number(n[4])).getTime();
  return Number.isFinite(s) ? s : void 0;
}
function Vp(e, t) {
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
function Up(e, t) {
  let n = e;
  return t.map((s) => n += s.delta);
}
function nn(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function qn(e, t, n) {
  let s = e, i = !1;
  for (const r of t)
    s += r.delta, s < n && (i = !0), r.clear && (i = !1);
  return i;
}
function Wp(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function Hp(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const i = s ?? bt[n], r = Math.max(0, i - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${r}分（${n}级斩杀线${i}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const Mt = "rlzc";
function Gp() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function Kp(e, t, n) {
  return {
    id: Gp(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function qp(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function pa(e, t) {
  return e.packId === _s ? e.briefing ? Dl(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function Yp(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return De(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function Jp(e, t) {
  const n = Yp(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((i) => ({ ...i, atIndex: i.atIndex + s }))), t.manual = t.manual.filter((i) => i.atIndex < e.length && i.atIndex >= t.entryIndex), !0;
}
function ha(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const oo = "rlzc_declined";
function rr(e, t) {
  return `${e}:${t}`;
}
const ma = De;
function qs(e, t, n) {
  if (!ma(e[t])) return null;
  const s = ip(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function Zp(e, t, n, s, i = []) {
  for (let r = Math.max(0, n); r <= Math.min(s, e.length - 1); r++) {
    const o = qs(e, r, t);
    if (o && !i.includes(rr(r, o.info.name))) return o;
  }
  return null;
}
function Xp(e, t, n = [], s = Di, i = 0) {
  if (t?.status === "active") return null;
  let r = -1;
  for (let l = Math.max(0, i); l < e.length; l++) if (ma(e[l])) {
    r = l;
    break;
  }
  if (r < 0 || t && t.entryIndex === r) return null;
  const o = qs(e, r, s);
  return !o || n.includes(rr(r, o.info.name)) ? null : o;
}
const Qp = /[■█▰●◆★▮▓]/g, eh = /[□░▱○◇☆▯▒]/g;
function th(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const r = Number(n[2]);
    return r === 100 ? Number(n[1]) : r > 0 ? Math.round(Number(n[1]) / r * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(Qp) ?? []).length, i = (t.match(eh) ?? []).length;
  return s + i > 0 ? Math.round(s / (s + i) * 100) : null;
}
function lo(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function nh(e, t) {
  return lo(e).includes(lo(t));
}
function sh(e, t, n) {
  const s = [], i = Object.keys(n.perMessage).map(Number).sort((a, c) => a - c);
  let r = !1, o = null, l = !1;
  for (const a of i) {
    const c = n.perMessage[a], d = t.phases.find((z) => z.id === c.phase)?.name ?? "进行中", h = (z, I) => s.push({ index: a, phase: d, round: c.round, kind: z, text: I }), y = e[a]?.extra?.rlzc;
    for (const z of y?.sub?.events ?? []) z.status === "missed" && h("eventMissed", `${z.id} 未写出来：${z.reason}`);
    for (const z of y?.skippedEvents ?? []) h("eventSkipped", `${z.id} 条件不成立，已跳过：${z.reason}`);
    const w = Bl(String(e[a]?.mes ?? "")), _ = a === n.entryIndex;
    if (!w) {
      _ || h("missing", "本轮回复缺少 <副本> 面板"), l = !_;
      continue;
    }
    l = !1;
    const P = th(w.progressBar);
    w.progressBar === void 0 ? h("progressUnreadable", "<副本> 中没有进度条一栏") : P === null ? h("progressUnreadable", `进度条无法读出数值：「${w.progressBar}」`) : (!r && P !== 0 && h("progressStart", `入场后第一轮的进度条应为0，实际为 ${P}`), (P < 0 || P > 100) && h("progressRange", `进度条数值 ${P} 超出 0–100`), o !== null && P < o && h("progressDrop", `进度条比上一轮低：${o} → ${P}`), o = P), r = !0;
    const V = e[a]?.extra?.rlzc?.limit, j = V?.text ? V : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (j) {
      const z = w.limit;
      if (j.minutes !== void 0) {
        const I = Ml(z);
        !z || I.remaining === null || I.total === null ? h("limit", `时限读不到「剩余时间/总时长」：写的是「${z ?? "（没有时限一栏）"}」，注入的是「${j.text}」`) : (I.remaining > j.minutes && h("limit", `剩余时间比注入值多：写的是${an(I.remaining)}，注入的是${an(j.minutes)}`), j.total !== void 0 && I.total !== j.total && h("limit", `总时长与注入值不一致：写的是${an(I.total)}，注入的是${an(j.total)}`));
      } else (!z || !nh(z, j.text)) && h("limit", `时限与注入文字不一致：写的是「${z ?? "（没有时限一栏）"}」，注入的是「${j.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: r };
}
const ih = {
  D: 2e3,
  C: 8e3,
  B: 3e4,
  A: 1e5,
  S: 3e5
}, rh = [
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
function ga(e) {
  return rh.some((t) => e.includes(t));
}
function oh(e) {
  if (e.subHype !== void 0)
    return Math.max(0, Math.min(100, Math.round(e.subHype)));
  const t = e.subHurt !== void 0 ? e.subHurt : e.bodyText ? ga(e.bodyText) : !1;
  let n = 20;
  return e.hasEvents && (n += 20), e.hasPhaseSwitch && (n += 20), t && (n += 30), Math.min(100, n);
}
function lh(e, t) {
  return Math.round(e * 0.6 + t * 0.4);
}
function or(e) {
  const t = !e.packLevel || e.isRest ? e.playerLevel : e.packLevel, n = ih[t], s = !e.packLevel || e.isRest ? 0.3 : 1;
  return Math.round(n * s * (0.5 + e.heat / 100) * e.rand);
}
const ah = [10, 20, 50, 100, 200, 500, 1e3], ch = [20, 25, 15, 20, 10, 8, 2], uh = [15, 20, 15, 20, 10, 16, 4];
function Ah(e, t, n) {
  const s = t.reduce((r, o) => r + o, 0);
  let i = n * s;
  for (let r = 0; r < e.length; r++)
    if (i -= t[r], i <= 0) return e[r];
  return e[e.length - 1];
}
function dh(e) {
  const { hype: t, isCorr: n, rand: s, names: i } = e, r = t / 40, o = [], l = [], a = t >= 70 ? uh : ch;
  for (let h = 1; h <= 3; h++) {
    const y = Math.min(1, Math.max(0, r - (h - 1)));
    if (s() < y) {
      let w = Ah(ah, a, s());
      n && (w = Math.max(10, Math.round(w * 0.3 / 10) * 10)), o.push(w), l.push(i[Math.floor(s() * i.length)] ?? "匿名");
    }
  }
  const c = o.reduce((h, y) => h + y, 0), u = Math.floor(c * 0.6);
  let d = "";
  return o.length === 1 ? d = `直播打赏${o[0]}×60%` : o.length > 1 && (d = `直播打赏${o.length}笔·共${c}×60%`), { count: o.length, totalFace: c, faces: o, netTotal: u, source: d, names: l };
}
const Ss = 10, Es = 13;
function xa(e) {
  return Ss + Math.floor(e() * (Es - Ss + 1));
}
function xi(e, t, n, s, i, r, o) {
  const l = t && !n;
  return !(e.scope === "inst" && !l || e.scope === "corr" && l || e.when === "hurt" && !s || e.when === "calm" && i >= 30 || e.when === "open" && !r || e.when === "end" && !o);
}
function fh(e) {
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
    isEnd: u,
    recentTexts: d,
    names: h,
    whoNames: y,
    rand: w
  } = e, _ = e.count ?? xa(w), P = [], V = new Set(d), j = t.filter(
    (g) => xi(g, r, o, l, a, c, u)
  ), I = y.length > 0 ? n.filter(
    (g) => xi(g, r, o, l, a, c, u)
  ) : [], ee = s.filter((g) => xi(g, r, o, l, a, c, u) ? g.phase && g.phase.length > 0 && i ? g.phase.includes(i) : !0 : !1), Z = () => h[Math.floor(w() * h.length)] ?? "匿名", B = () => y[Math.floor(w() * y.length)] ?? "";
  for (let g = 0; g < _ * 5 && P.length < _; g++) {
    let O = "", ae = "discuss";
    if (ee.length > 0 && w() < 0.3) {
      const ze = ee[Math.floor(w() * ee.length)];
      O = ze.text, ae = ze.type;
    } else if (I.length > 0 && w() < 0.5) {
      const ge = I[Math.floor(w() * I.length)];
      O = ge.text.replace("{who}", B()), ae = ge.type;
    } else if (j.length > 0) {
      const ge = j[Math.floor(w() * j.length)];
      O = ge.text, ae = ge.type;
    }
    !O || V.has(O) || (V.add(O), P.push({ name: Z(), text: O, type: ae }));
  }
  const b = [...ee, ...j], m = b.length ? Math.floor(w() * b.length) : 0;
  for (let g = 0; g < b.length && P.length < _; g++) {
    const O = b[(m + g) % b.length];
    V.has(O.text) || (V.add(O.text), P.push({ name: Z(), text: O.text, type: O.type }));
  }
  return P;
}
const ya = "rlzc_live", ph = "本局直播打赏撤回", ba = 20, Xt = {
  corridorOn: "回廊直播开始。",
  corridorOff: "已下播。",
  enterOff: "进入副本，回廊直播已结束。",
  instanceOn: "本局副本直播开始。",
  instanceOff: "副本结束，直播已下播。",
  revoke: "主播在副本中死亡，本局打赏已全部撤回。"
};
function hh(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.corridor ?? {};
  return {
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0,
    corridor: { on: !!n.on, show: typeof n.show == "string" ? n.show : "", viewers: Number.isFinite(n.viewers) ? n.viewers : void 0 },
    sys: Array.isArray(t.sys) ? t.sys.filter((s) => s && typeof s.id == "number") : []
  };
}
function va(e, t) {
  return e.disableLive ? { show: !1, checked: !1 } : { show: !0, checked: !!t };
}
function Rt(e) {
  const t = e?.extra?.rlzc?.live;
  return t && typeof t.show == "string" && Array.isArray(t.feed) ? t : void 0;
}
function lr(e, t, n = e.length) {
  const s = [];
  for (let i = 0; i < Math.min(n, e.length); i++) {
    const r = e[i];
    if (!r || r.is_user) continue;
    const o = Rt(r);
    o && o.show === t && s.push({ index: i, rec: o });
  }
  return s;
}
function ar(e, t) {
  return lr(e, t).reduce((n, { rec: s }) => n + (s.tipNet || 0) - (s.revoke || 0), 0);
}
function Ys(e, t) {
  let n = t.seq;
  for (const s of t.sys) n = Math.max(n, s.id);
  for (const s of e) for (const i of Rt(s)?.feed ?? []) n = Math.max(n, i.id);
  return n;
}
function mh(e, t = 30) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const i = Rt(e[s])?.feed ?? [];
    for (let r = i.length - 1; r >= 0 && n.length < t; r--) i[r].t === "msg" && n.push(i[r].text);
  }
  return n;
}
const ka = /<状态栏>([\s\S]*?)<\/状态栏>/, gh = /^(积分|位格|道具|在场)$/, xh = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;
function wa(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const i = ka.exec(s.mes);
    if (i) return i[1];
  }
  return null;
}
function cr(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const i = ka.exec(s.mes);
    if (!i) continue;
    const r = /等级[：:]\s*([DCBAS])/.exec(i[1]);
    if (r) return r[1];
  }
  return "D";
}
function _a(e, t = "") {
  if (!e) return [];
  const n = [];
  let s = null;
  for (const r of e.split(`
`)) {
    const o = r.trim();
    if (!o || /^[━─—=\-]{3,}$/.test(o)) continue;
    const l = xh.exec(o);
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
    if (o === 0 && [...r.keys].some((a) => gh.test(a))) return;
    const l = r.name.replace(/[（(][\s\S]*$/, "").trim();
    !l || /^(陌生|路人)/.test(l) || l === "{{user}}" || t && l === t || i.includes(l) || i.push(l);
  }), i;
}
function za(e, t) {
  return t?.hurt !== void 0 ? t.hurt : ga(nr(e));
}
function yh(e) {
  const { rand: t } = e, n = nr(e.text), s = za(e.text, e.sub), i = oh({ subHype: e.sub?.hype, subHurt: s, hasEvents: e.hasEvents, hasPhaseSwitch: e.hasPhaseSwitch, bodyText: n }), r = lh(e.prevHeat ?? ba, i), o = e.scope === "corridor" || e.isRest, l = or({
    packLevel: e.scope === "instance" ? e.packLevel : null,
    playerLevel: e.playerLevel,
    isRest: e.isRest,
    heat: r,
    rand: 0.9 + t() * 0.2
  }), a = xa(t), c = fh({
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
    count: e.awaitAi ? Es : a
  }), u = dh({ hype: i, isCorr: o, rand: t, names: e.names }), d = u.faces.map((_, P) => ({ t: "tip", name: u.names[P], text: "", amount: _, net: Math.floor(_ * 0.6) })), h = [];
  let y;
  e.settle && (e.settle.died && (y = e.settle.tipsBefore + u.netTotal, y > 0 ? h.push({ t: "sys", name: "", text: Xt.revoke, amount: 0, net: -y }) : y = void 0), h.push({ t: "sys", name: "", text: Xt.instanceOff, amount: 0, net: 0 }));
  const w = {
    show: e.show,
    scope: e.scope,
    hype: i,
    heat: r,
    viewers: l,
    hurt: s,
    feed: [],
    tipNet: u.netTotal,
    tipFace: u.totalFace,
    tipSource: u.source
  };
  return y && (w.revoke = y), e.awaitAi ? w.pending = { local: c, tips: d, sys: h, target: a } : w.feed = $a(c.slice(0, a), d, h, e.firstId, t), w;
}
function bh(e, t, n) {
  const s = Math.max(Ss, Math.min(Es, n));
  if (!e?.length) return t.slice(0, s);
  const i = e.slice(0, Es);
  if (i.length >= Ss) return i;
  const r = new Set(i.map((o) => o.text));
  for (const o of t) {
    if (i.length >= s) break;
    r.has(o.text) || (r.add(o.text), i.push(o));
  }
  return i;
}
function $a(e, t, n, s, i) {
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
function Sa(e, t, n, s) {
  if (!e.pending) return e;
  const { pending: i, ...r } = e, o = bh(t, i.local, i.target);
  return { ...r, feed: $a(o, i.tips, i.sys, n, s) };
}
function vh(e, t) {
  if (!e) return [];
  const n = [];
  return e.tipNet > 0 && n.push({ delta: e.tipNet, source: e.tipSource, type: "tip", at: t }), e.revoke && e.revoke > 0 && n.push({ delta: -e.revoke, source: ph, type: "tip", at: t }), n;
}
function kh(e) {
  return `其中本局直播打赏${e}分，副本内不可使用，离开副本后可用。`;
}
function wh(e, t) {
  return e && `${e}${e.endsWith("。") ? "" : "。"}${kh(t)}`;
}
function _h(e, t, n) {
  const s = lr(e, n), i = [];
  for (const { rec: r } of s) i.push(...r.feed);
  for (const r of t.sys) r.show === n && i.push({ id: r.id, t: r.t, name: r.name, text: r.text, amount: r.amount, net: r.net });
  return i.sort((r, o) => r.id - o.id), { items: i, last: s[s.length - 1]?.rec };
}
function zh(e, t) {
  let n = "", s = -1;
  for (const i of t.sys) i.id > s && (s = i.id, n = i.show);
  for (const i of e) {
    const r = Rt(i);
    if (r)
      for (const o of r.feed) o.id > s && (s = o.id, n = r.show);
  }
  return n;
}
function $h(e, t, n, s = /* @__PURE__ */ new Set()) {
  const i = n.inInstance ? "instance" : "corridor", r = n.inInstance ? n.instanceLive : t.corridor.on, o = n.inInstance ? n.instanceLive ? n.instanceShow ?? "" : "" : r ? t.corridor.show : zh(e, t), l = { on: r, canToggle: !n.inInstance, scope: i, viewers: 0, heat: 0, tipTotal: 0, injectToAI: n.injectToAI, feed: [], lastTip: null };
  if (!o) return l;
  const { items: a, last: c } = _h(e, t, o), u = a.filter((y) => !s.has(y.id));
  let d = 0, h = null;
  for (const y of u)
    d += y.net, y.t === "tip" && (h = { id: y.id, net: y.net });
  return {
    ...l,
    viewers: r ? c?.viewers ?? n.startViewers ?? 0 : 0,
    heat: r ? c?.heat ?? ba : 0,
    tipTotal: d,
    feed: u.slice(-60),
    lastTip: h
  };
}
const Sh = ["小满", "好运来", "路过的D级", "一个路过的A级", "数据党", "理性讨论", "吃瓜", "夜班保安", "柠檬汁", "阿柒", "东区卖菜的", "西区摆摊的", "情报社小号", "失眠第三天", "房租交不起", "今天也在种土豆", "匿名", "光幕前的咸鱼", "刚通关的C级", "排行榜第九十九", "不想进本", "炸鱼被抓过", "黑市常客", "训练场打卡人", "药剂站熬夜班", "公会跑腿的", "一个路人", "今日份幸运", "积分快见底", "刚升B级", "看录像长大的", "老观众", "新来的", "别叫我大佬", "蹲一个结算", "白开水", "半夜不睡", "又是我", "打工人", "瓜田里的猹", "慢热", "晴天", "阿九", "十一", "小绿", "老周", "木子", "苏苏", "七七", "一颗橘子", "等天亮", "北风", "不吃香菜", "没抢到号", "退役S级", "D级万岁", "靠运气活着", "只看不说", "路过打个卡", "最后一排"], Eh = [{ type: "praise", text: "这反应速度，不愧是主播" }, { type: "praise", text: "冷静得不像第一次进这个级别的本", scope: "inst" }, { type: "praise", text: "刚才那个判断绝了" }, { type: "praise", text: "主播脑子转得是真快" }, { type: "praise", text: "这波我服" }, { type: "praise", text: "稳，太稳了" }, { type: "praise", text: "讲道理，换我早慌了" }, { type: "praise", text: "这就是高手吗" }, { type: "praise", text: "看得我手心出汗，主播还面不改色" }, { type: "praise", text: "刚才那句话说得漂亮" }, { type: "praise", text: "细节拉满，这都注意到了", scope: "inst" }, { type: "praise", text: "主播说话好有条理" }, { type: "praise", text: "这才叫会玩" }, { type: "praise", text: "就冲这个判断，关注了" }, { type: "praise", text: "有勇有谋" }, { type: "praise", text: "比上一个主播强多了" }, { type: "praise", text: "队友拖后腿，主播一个人在带", scope: "inst" }, { type: "praise", text: "这个位置站得好", scope: "inst" }, { type: "praise", text: "我宣布这是本周最佳直播" }, { type: "praise", text: "主播镇定得让我也镇定了" }, { type: "praise", text: "那个眼神，太帅了" }, { type: "praise", text: "心态真好，要是我早骂人了" }, { type: "praise", text: "这个节奏把握得好", scope: "inst" }, { type: "praise", text: "看出来是做过功课的" }, { type: "praise", text: "夸一句，主播是真的会说话" }, { type: "praise", text: "一句话就把场面稳住了", scope: "inst" }, { type: "praise", text: "这份胆量我是没有" }, { type: "praise", text: "学到了，下次我也这么干" }, { type: "praise", text: "主播好好看" }, { type: "praise", text: "声音也好听，别下播" }, { type: "praise", text: "越看越顺眼" }, { type: "praise", text: "这气质，放在哪个本都是主角" }, { type: "praise", text: "能屈能伸，佩服" }, { type: "praise", text: "刚才那一下我起立鼓掌" }, { type: "praise", text: "不慌不忙，高手风范" }, { type: "praise", text: "回廊里也过得这么讲究，爱了", scope: "corr" }, { type: "praise", text: "主播种的菜看着真水灵", scope: "corr" }, { type: "praise", text: "这手艺可以去西区摆摊了", scope: "corr" }, { type: "praise", text: "休整都不忘练，怪不得排名涨", scope: "corr" }, { type: "praise", text: "房间收拾得真干净", scope: "corr" }, { type: "bless", text: "祝平安出来！！", scope: "inst" }, { type: "bless", text: "主播一定要活着回来", scope: "inst" }, { type: "bless", text: "保佑保佑" }, { type: "bless", text: "冲啊主播！" }, { type: "bless", text: "这把一定能过", scope: "inst" }, { type: "bless", text: "结算见！", scope: "inst", when: "end" }, { type: "bless", text: "平安就好，评级无所谓", scope: "inst" }, { type: "bless", text: "等你出来请你吃饭", scope: "inst" }, { type: "bless", text: "好运加满，霉运退散" }, { type: "bless", text: "希望别再有人出事了", scope: "inst", when: "hurt" }, { type: "bless", text: "主播加油，我在东区超市门口看着呢" }, { type: "bless", text: "撑住，天总会亮的", scope: "inst" }, { type: "bless", text: "别怕，我们都在" }, { type: "bless", text: "好人一生平安" }, { type: "bless", text: "这波过了就能歇歇了", scope: "inst" }, { type: "bless", text: "下个副本抽个简单的吧", scope: "corr" }, { type: "bless", text: "注意安全，别逞强", scope: "inst" }, { type: "bless", text: "保重身体啊", when: "hurt" }, { type: "bless", text: "受伤了先处理伤口", scope: "inst", when: "hurt" }, { type: "bless", text: "一路绿灯，一路绿灯" }, { type: "bless", text: "今天也要好好活着" }, { type: "bless", text: "愿系统对你手下留情" }, { type: "bless", text: "别哭，我们陪你", when: "hurt" }, { type: "bless", text: "等着看你升级" }, { type: "bless", text: "最后一口气了，撑住", scope: "inst", when: "end" }, { type: "bless", text: "最后几轮，稳住！", scope: "inst", when: "end" }, { type: "bless", text: "主播今天早点睡", scope: "corr" }, { type: "bless", text: "休息好了再进本", scope: "corr" }, { type: "bless", text: "希望房租别涨", scope: "corr" }, { type: "bless", text: "回廊安稳一天是一天", scope: "corr" }, { type: "discuss", text: "现在什么情况，我刚进来" }, { type: "discuss", text: "来了来了，这把什么本", scope: "inst", when: "open" }, { type: "discuss", text: "开播了开播了", when: "open" }, { type: "discuss", text: "新主播？没见过", when: "open" }, { type: "discuss", text: "先别吵，看局势" }, { type: "discuss", text: "我觉得还有线索没找到", scope: "inst" }, { type: "discuss", text: "按往届，这本不好打", scope: "inst" }, { type: "discuss", text: "有没有人看过这本的录像", scope: "inst" }, { type: "discuss", text: "黑市那种录像别全信" }, { type: "discuss", text: "这队人各怀心思吧", scope: "inst" }, { type: "discuss", text: "现在还剩几个人？", scope: "inst" }, { type: "discuss", text: "前面说的那个我也注意到了" }, { type: "discuss", text: "理性讨论，别带节奏" }, { type: "discuss", text: "我赌主播能过" }, { type: "discuss", text: "有人算过这把能拿什么评吗", scope: "inst" }, { type: "discuss", text: "主播刚才是不是话里有话" }, { type: "discuss", text: "这个人说话一直留半句", scope: "inst" }, { type: "discuss", text: "注意细节，刚才那句不对劲", scope: "inst" }, { type: "discuss", text: "我在光幕前面站了一个小时了" }, { type: "discuss", text: "回放能看吗，刚才没看清" }, { type: "discuss", text: "有没有懂的解释一下" }, { type: "discuss", text: "你们看出来了吗，我看不出来" }, { type: "discuss", text: "这一段要是剪进录像会卖爆" }, { type: "discuss", text: "楼上别剧透……虽然我也不知道" }, { type: "discuss", text: "好无聊，快进", when: "calm" }, { type: "discuss", text: "主播在发呆吗", when: "calm" }, { type: "discuss", text: "挂着当背景音了", when: "calm" }, { type: "discuss", text: "去泡了碗面回来还是这样", when: "calm" }, { type: "discuss", text: "这么安静，要出事了吧", scope: "inst", when: "calm" }, { type: "discuss", text: "暴风雨前的宁静", scope: "inst", when: "calm" }, { type: "discuss", text: "啊啊啊有人倒了", scope: "inst", when: "hurt" }, { type: "discuss", text: "刚才那一下我没敢看", when: "hurt" }, { type: "discuss", text: "又走一个……", scope: "inst", when: "hurt" }, { type: "discuss", text: "手在抖吧，换我也抖", when: "hurt" }, { type: "discuss", text: "快结束了吧", scope: "inst", when: "end" }, { type: "discuss", text: "结算前最后几轮最容易出事", scope: "inst", when: "end" }, { type: "discuss", text: "今天种什么？", scope: "corr" }, { type: "discuss", text: "回廊直播也有人看，我服了我自己", scope: "corr" }, { type: "discuss", text: "排行榜又变了，你们看了吗", scope: "corr" }, { type: "discuss", text: "下个本打算报哪个？", scope: "corr" }, { type: "cold", text: "别高兴太早" }, { type: "cold", text: "我看悬" }, { type: "cold", text: "这把凉了吧" }, { type: "cold", text: "就这？" }, { type: "cold", text: "也就一般" }, { type: "cold", text: "运气好而已" }, { type: "cold", text: "换个人也能做到" }, { type: "cold", text: "等着翻车吧" }, { type: "cold", text: "这种判断，迟早出事" }, { type: "cold", text: "看了半天也没看出哪里厉害" }, { type: "cold", text: "太磨叽了" }, { type: "cold", text: "说了这么多，一点用没有" }, { type: "cold", text: "我押失败", scope: "inst" }, { type: "cold", text: "评级能拿个C就不错了", scope: "inst" }, { type: "cold", text: "队友再强也带不动", scope: "inst" }, { type: "cold", text: "太自信了，这本专治自信", scope: "inst" }, { type: "cold", text: "往届比这厉害的都栽在这", scope: "inst" }, { type: "cold", text: "真以为能全身而退？", scope: "inst" }, { type: "cold", text: "没意思，我换台了" }, { type: "cold", text: "这操作也就D级水平" }, { type: "cold", text: "这不是冷静，是反应慢" }, { type: "cold", text: "别吹了，看结算", scope: "inst" }, { type: "cold", text: "种菜有什么好看的", scope: "corr" }, { type: "cold", text: "回廊里直播，缺积分缺疯了吧", scope: "corr" }, { type: "cold", text: "天天摆烂，等着被清算吧", scope: "corr" }, { type: "envy", text: "凭什么这种人能上热门" }, { type: "envy", text: "我直播三天没人看，这也行？" }, { type: "envy", text: "长得好就是占便宜" }, { type: "envy", text: "又是这种运气好的" }, { type: "envy", text: "打赏的是托吧" }, { type: "envy", text: "我也想有人给我刷" }, { type: "envy", text: "这点本事也能拿打赏" }, { type: "envy", text: "同样是D级进来的，差距怎么这么大" }, { type: "envy", text: "分到这么好的队友，换我我也行", scope: "inst" }, { type: "envy", text: "酸了，真的酸了" }, { type: "envy", text: "一进来就有大佬带，羡慕不来", scope: "inst" }, { type: "envy", text: "这热度买的吧" }, { type: "envy", text: "凭什么打赏都往这边跑" }, { type: "envy", text: "我通关都没人看" }, { type: "envy", text: "排行榜上那些名字，一半靠运气" }, { type: "envy", text: "有人天生就是被偏爱的" }, { type: "envy", text: "我要是有这配置，比这还稳", scope: "inst" }, { type: "envy", text: "住的地方比我好十倍", scope: "corr" }, { type: "envy", text: "在回廊都能开播赚积分，羡慕哭了", scope: "corr" }, { type: "envy", text: "这菜种得，比我吃的还好", scope: "corr" }, { type: "smear", text: "装什么装" }, { type: "smear", text: "演的吧，这反应太假了" }, { type: "smear", text: "人设立得挺好" }, { type: "smear", text: "会说话而已，真打起来就露馅" }, { type: "smear", text: "这种人最会卖队友" }, { type: "smear", text: "表面客气，背地里肯定算计着" }, { type: "smear", text: "我不信真这么淡定" }, { type: "smear", text: "刚才那个眼神，心虚了吧" }, { type: "smear", text: "故意卖惨要打赏" }, { type: "smear", text: "刚才明明可以救，没救", scope: "inst", when: "hurt" }, { type: "smear", text: "自私，只顾自己", scope: "inst" }, { type: "smear", text: "队友出事了还这么冷静，冷血吧", scope: "inst", when: "hurt" }, { type: "smear", text: "这是在拿别人探路", scope: "inst" }, { type: "smear", text: "满嘴好话，一件实事没干" }, { type: "smear", text: "装新人的吧" }, { type: "smear", text: "就是冲着打赏来的" }, { type: "smear", text: "看着就不是好人" }, { type: "smear", text: "别被骗了，都是算计好的" }, { type: "smear", text: "下了本也要直播，吃相难看", scope: "corr" }, { type: "smear", text: "种田人设，炒给谁看", scope: "corr" }, { type: "rumor", text: "听说积分是借的，真的假的" }, { type: "rumor", text: "肯定是抱大腿进来的" }, { type: "rumor", text: "我朋友说在黑市见过这人" }, { type: "rumor", text: "据说上一个本是被人带飞的" }, { type: "rumor", text: "听说欠了一屁股积分" }, { type: "rumor", text: "有人说是买了攻略才敢进的", scope: "inst" }, { type: "rumor", text: "听说被公会踢出来过" }, { type: "rumor", text: "情报社的人说，这人被抽查过" }, { type: "rumor", text: "有人在西区看到这人跟黑市贩子说话" }, { type: "rumor", text: "据说是走后门才越级的" }, { type: "rumor", text: "听说上个本的队友都没出来" }, { type: "rumor", text: "有人说这人其实早就待清算了" }, { type: "rumor", text: "我听说排名是刷的" }, { type: "rumor", text: "传闻进本前偷偷买了防抽查道具" }, { type: "rumor", text: "听说有人专门花钱买这人的录像" }], Ch = [{ type: "praise", text: "{who}刚才那下好帅" }, { type: "praise", text: "{who}挺靠谱的" }, { type: "bless", text: "{who}别出事啊" }, { type: "bless", text: "心疼{who}" }, { type: "bless", text: "{who}还好吗", when: "hurt" }, { type: "discuss", text: "{who}靠谱吗，我看不透" }, { type: "discuss", text: "{who}又不说话了" }, { type: "discuss", text: "{who}刚才那句什么意思" }, { type: "discuss", text: "盯紧{who}" }, { type: "discuss", text: "{who}和主播配合挺默契" }, { type: "discuss", text: "{who}好像知道点什么" }, { type: "cold", text: "{who}也就那样" }, { type: "cold", text: "指望{who}？算了吧" }, { type: "envy", text: "凭什么{who}也有人喜欢" }, { type: "smear", text: "我就说{who}有问题" }, { type: "smear", text: "{who}在演" }, { type: "smear", text: "{who}那个表情不对劲" }, { type: "rumor", text: "听说{who}在排行榜上挂过名" }, { type: "rumor", text: "我听说{who}以前出过事" }, { type: "rumor", text: "{who}跟主播是不是早就认识" }], Mh = {
  names: Sh,
  pool: Eh,
  templates: Ch
}, Wn = /* @__PURE__ */ new Set(), Gt = [];
let xt = null, ds = [], yi = null;
function Yn() {
  for (const e of ds.slice())
    try {
      e();
    } catch (t) {
      console.warn("[rlzc] RLZC_LIVE 订阅回调出错", t);
    }
}
function Ih() {
  return 1500 + Math.random() * 1500;
}
function Ea() {
  xt = null;
  const e = Gt.shift();
  e !== void 0 && (Wn.delete(e), Yn()), Gt.length && (xt = setTimeout(Ea, Ih()));
}
function ur(e, t = !1) {
  if (t && Gt.length) {
    for (const n of Gt) Wn.delete(n);
    Gt.length = 0, xt && clearTimeout(xt), xt = null;
  }
  if (e.length) {
    for (const n of e)
      Wn.add(n.id), Gt.push(n.id);
    xt ? Yn() : Ea();
  }
}
function Th() {
  xt && clearTimeout(xt), xt = null, Gt.length = 0, Wn.clear();
}
function Nh(e) {
  yi = e, window.RLZC_LIVE = {
    get: () => yi.view(Wn),
    subscribe(t) {
      return typeof t != "function" ? () => {
      } : (ds.push(t), () => {
        ds = ds.filter((n) => n !== t);
      });
    },
    toggle: () => yi.toggle()
  };
}
const Ca = "rlzc_market", ao = { D: 0, C: 1, B: 2, A: 3, S: 4 }, Ma = { D: 1e3, C: 5e3, B: 2e4, A: 8e4, S: 3e5 }, co = 10, Ph = 0.8, jh = "ending", Dh = "rating", Ia = ["S", "A", "B", "C", "D"];
function Rh(e, t) {
  return ao[e] - ao[t];
}
function Fh(e) {
  return e <= -2 ? 0.85 : e === -1 ? 0.75 : e === 0 ? 0.6 : e === 1 ? 0.4 : e === 2 ? 0.25 : 0.15;
}
const ls = {
  "le-1": { S: 0.15, A: 0.3, B: 0.3, C: 0.17, D: 0.08 },
  0: { S: 0.08, A: 0.2, B: 0.35, C: 0.25, D: 0.12 },
  1: { S: 0.04, A: 0.12, B: 0.3, C: 0.32, D: 0.22 },
  ge2: { S: 0.02, A: 0.08, B: 0.25, C: 0.35, D: 0.3 }
};
function Oh(e) {
  return e <= -1 ? ls["le-1"] : e === 0 ? ls[0] : e === 1 ? ls[1] : ls.ge2;
}
function Js(e) {
  return Math.round(e * 100) / 100;
}
function Lh(e, t) {
  const n = 0.93 + t() * 0.14;
  return Math.max(1.01, Js(1 / e * Ph * n));
}
function Ta(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function In(e, t, n, s) {
  return { id: e, label: t, p: n, odds: Lh(n, s) };
}
function Na(e, t, n) {
  const s = {
    id: t.id,
    kind: e,
    q: t.q,
    options: [In("yes", t.yes, t.p, n), In("no", t.no, Js(1 - t.p), n)],
    judge: t.judge
  };
  return t.judgeNo && (s.judgeNo = t.judgeNo), t.by && (s.by = t.by), s;
}
function Bh(e) {
  const { pack: t, rand: n } = e;
  if (t.rest) return [];
  const s = Rh(t.level, e.playerLevel), i = Fh(s), r = [
    { id: jh, kind: "ending", q: "本局结果", options: [In("win", "通关", i, n), In("lose", "失败", Js(1 - i), n)] }
  ], o = Oh(s);
  if (r.push({ id: Dh, kind: "rating", q: "本局评价", options: Ia.map((l) => In(l, l, o[l], n)) }), e.withEvents) for (const l of Hf(t)) r.push(Na("event", l, n));
  return r;
}
function Vh(e, t) {
  return e - Math.max(0, t);
}
function Pa(e) {
  const t = Ma[e.playerLevel], n = Vh(e.balance, e.lockedTips), s = Math.max(0, Math.min(t - e.already, n)), i = e.stake, r = Number.isFinite(i) && i > 0 && e.balance - i < bt[e.playerLevel];
  let o;
  return !Number.isInteger(i) || i < co ? o = `最少押${co}` : e.already + i > t ? o = "超过单注上限" : i > n && (o = "可用余额不足"), { ok: !o, reason: o, cap: t, max: s, belowKill: r };
}
function Uh(e, t) {
  return e.tickets.filter((n) => n.market === t).reduce((n, s) => n + s.stake, 0);
}
function Wh(e, t) {
  return Object.keys(e).map(Number).filter((n) => n >= t).length >= 2;
}
const ja = ["通关", "成功", "胜利"], Ar = ["死亡", "阵亡"];
function Hh(e) {
  return Ar.includes(String(e ?? "").trim());
}
function Gh(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  return Ar.includes(n) ? { kind: "lost", index: t } : ja.includes(n) ? { kind: "option", option: "win", index: t } : n === "失败" ? { kind: "option", option: "lose", index: t } : { kind: "refund", index: t };
}
function Kh(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  if (Ar.includes(n)) return { kind: "lost", index: t };
  const s = String(e.rating ?? "").trim().toUpperCase();
  return ja.includes(n) && Ia.includes(s) ? { kind: "option", option: s, index: t } : { kind: "refund", index: t };
}
function qh(e, t) {
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
  return a && n.endedBy === "tag" && Hh(n.result) ? { kind: "lost", index: i } : a && n.endedBy !== "tag" ? { kind: "refund", index: i } : o ? null : r && l > 0 ? { kind: "option", option: "no", index: i } : { kind: "refund", index: i };
}
function Yh(e) {
  const t = {};
  for (const n of e.markets)
    e.outcome.voided ? t[n.id] = { kind: "refund", index: -1 } : n.kind === "ending" ? t[n.id] = Gh(e.outcome) : n.kind === "rating" ? t[n.id] = Kh(e.outcome) : t[n.id] = qh(n, e);
  return t;
}
function Ri(e, t) {
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
function Jh(e, t) {
  const n = {}, s = Ri({ ...e, frozen: void 0 }, t);
  for (const i of e.tickets) n[i.id] = s[i.id] ?? { stamp: "refund", index: -1 };
  return n;
}
function Zh(e, t, n, s = []) {
  const i = new Set(Array.isArray(s) ? s : [s]);
  return Object.keys(t).map(Number).filter((r) => r > n && De(e[r])).sort((r, o) => r - o).map((r) => {
    const o = e[r]?.extra?.rlzc?.sub;
    return o && !o.skipped && o.markets && typeof o.markets == "object" ? { index: r, state: "ok", hits: o.markets } : !o && i.has(r) ? { index: r, state: "pending", hits: {} } : { index: r, state: "miss", hits: {} };
  });
}
function Xh(e, t) {
  const n = [];
  if (e.frozen) return n;
  for (const s of e.markets)
    s.kind !== "event" && s.kind !== "freak" || t[s.id] || !s.judge || (n.push({ id: s.id, judge: s.judge }), s.judgeNo && n.push({ id: `${s.id}:no`, judge: s.judgeNo }));
  return n;
}
function Da(e, t) {
  return e.markets.find((n) => n.id === t);
}
function Qh(e, t) {
  return e?.options.find((n) => n.id === t)?.label ?? t;
}
function em(e, t) {
  const n = Da(e, t.market);
  return `下注·${e.packName}·${n?.q ?? t.market}·${Qh(n, t.option)}`;
}
function tm(e, t, n) {
  const s = [];
  for (const i of e.tickets) {
    s.push({ delta: -i.stake, source: em(e, i), type: "bet", at: i.at, pos: i.after, seq: i.seq ?? 0 });
    const r = t[i.id];
    if (!r || r.stamp === "lose") continue;
    const o = Da(e, i.market)?.q ?? i.market, l = (r.index >= 0 ? n(r.index) : void 0) ?? i.at;
    r.stamp === "win" ? s.push({ delta: Ta(i.stake, i.odds), source: `赌票兑付·${e.packName}·${o}`, type: "bet", at: l, pos: r.index }) : s.push({ delta: i.stake, source: `赌票退还·${e.packName}·${o}`, type: "bet", at: l, pos: r.index });
  }
  return s;
}
const nm = '你是回廊黑市的庄家，要为主播即将进入的副本开几个离谱但有趣的盘口。你只知道下面这些公开信息，不知道剧情会怎么走。出2到3道是非题：题目20字以内，称{{user}}为主播，不用性别代词；必须能从之后的正文里直接看出是或否；不要问结局、评价和生死，那些已经有盘了；不要涉及公开信息以外的设定。每题给一个你估计「是」的概率p（0.05到0.95）。只输出JSON：[{"q":"题目","judge":"用来判断是否发生的一句陈述","p":0.3}]', sm = 4e3;
function im(e) {
  const n = ia(e).split(`
`), s = n.findIndex((r) => /副本简报/.test(r));
  return (s >= 0 ? n.slice(s, s + 6) : n).join(`
`).trim().slice(0, 1e3);
}
function rm(e) {
  const t = e.docs.filter((s) => s.md && s.md.trim()).map((s) => `## ${s.title}
${s.md.trim()}`).join(`

`).slice(0, sm), n = [
    `【副本】${e.name}　等级：${e.level}`,
    `【简报】
${e.briefing || "（无）"}`,
    `【公开资料】
${t || "（无）"}`
  ].join(`

`);
  return { system: nm, user: n };
}
function om(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), i = t.lastIndexOf("]");
  if (s < 0 || i <= s) throw new je("返回里没有 JSON 数组");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new je("返回的 JSON 无法解析");
  }
  if (!Array.isArray(r)) throw new je("返回的不是 JSON 数组");
  const o = [];
  for (const l of r) {
    if (!l || typeof l.q != "string" || typeof l.judge != "string") continue;
    const a = l.q.trim(), c = l.judge.trim(), u = typeof l.p == "number" ? l.p : Number(l.p);
    if (!(!a || a.length > 20 || !c || !Number.isFinite(u) || u < 0.05 || u > 0.95) && (o.push({ q: a, judge: c, p: Js(u) }), o.length >= 3))
      break;
  }
  if (!o.length) throw new je("没有合格的题");
  return o;
}
async function lm(e, t, n = 1) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return om(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
function am(e, t) {
  return e.map((n, s) => Na("freak", { id: `F${s + 1}`, q: n.q, yes: "会", no: "不会", p: n.p, judge: n.judge }, t));
}
function cm(e) {
  return `{{user}}在黑市押了自己本局失败，押注${e}分。`;
}
function um(e) {
  return `{{user}}刚在赌坊输掉${e}分，余额已低于斩杀线。`;
}
function Am(e) {
  return `{{user}}刚在赌坊一局赢了${e}分。`;
}
function dm(e) {
  return e.kind === "betLose" ? cm(e.amount) : e.kind === "casinoLoss" ? um(e.amount) : Am(e.amount);
}
function Fi(e, t) {
  if (t.kind === "betLose") {
    const n = e.find((s) => s.kind === "betLose");
    if (n && !n.sent) return e.map((s) => s === n ? { ...s, amount: s.amount + t.amount, after: t.after } : s);
  }
  return [...e, t];
}
function fm(e) {
  return e.filter((t) => !t.sent);
}
function pm(e) {
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
const bi = (e) => Array.from({ length: e }, (t, n) => n + 1), dr = [
  {
    id: "bell",
    name: "听钟",
    desc: "押钟声单双、大小，或猜几下。",
    bets: [
      { id: "odd", label: "单", mult: 1.6 },
      { id: "even", label: "双", mult: 1.6 },
      { id: "small", label: "小", mult: 1.6 },
      { id: "big", label: "大", mult: 1.6 },
      ...bi(12).map((e) => ({ id: `n${e}`, label: `${e}下`, mult: 9.6 }))
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
      ...bi(20).map((e) => ({ id: `d${e}`, label: `${e}号`, mult: 16 }))
    ]
  },
  {
    id: "lot",
    name: "抽签",
    desc: "三支签，一支大吉。",
    bets: bi(3).map((e) => ({ id: `s${e}`, label: `第${e}支`, mult: 2.4 }))
  },
  {
    id: "card",
    name: "翻牌",
    desc: "和庄家各翻一张，大的赢，平局庄家赢。",
    bets: [{ id: "high", label: "比大小", mult: 1.73 }]
  }
];
function An(e) {
  return dr.find((t) => t.id === e);
}
function vn(e, t) {
  return Math.min(e, 1 + Math.floor(t() * e));
}
function hm(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function mm(e, t, n, s) {
  const i = An(e), r = i?.bets.find((u) => u.id === t);
  if (!i || !r) return null;
  let o = !1, l = "", a = [];
  switch (i.id) {
    case "bell": {
      const u = vn(12, s);
      a = [u], r.id === "odd" || r.id === "even" ? (o = u % 2 === 1 == (r.id === "odd"), l = `${u}下，${u % 2 ? "单" : "双"}`) : r.id === "small" || r.id === "big" ? (o = u <= 6 == (r.id === "small"), l = `${u}下，${u <= 6 ? "小" : "大"}`) : (o = r.id === `n${u}`, l = `${u}下`);
      break;
    }
    case "door": {
      const u = vn(20, s);
      if (a = [u], r.id.startsWith("r")) {
        const d = Number(r.id.slice(1));
        o = u > (d - 1) * 5 && u <= d * 5;
      } else o = r.id === `d${u}`;
      l = `${u}号门`;
      break;
    }
    case "lot": {
      const u = vn(3, s);
      a = [u], o = r.id === `s${u}`, l = `第${u}支大吉`;
      break;
    }
    case "card": {
      const u = vn(13, s), d = vn(13, s);
      a = [u, d], o = u > d, l = `你 ${u}，庄家 ${d}`;
      break;
    }
  }
  const c = o ? hm(n, r.mult) : 0;
  return { win: o, payout: c, net: o ? c - n : -n, result: l, label: `押${r.label}`, faces: a };
}
function gm(e, t) {
  return `赌坊·${An(e)?.name ?? e}·${t}`;
}
function uo(e) {
  const t = dr.map((r) => r.id), n = Math.min(t.length - 1, Math.floor(e() * t.length)), s = t.filter((r, o) => o !== n), i = Math.min(s.length - 1, Math.floor(e() * s.length));
  return [t[n], s[i]];
}
function xm(e, t, n) {
  const s = e.tables.length === 2 && e.tables.every((o) => An(o));
  if (s && e.key === t) return { tables: e.tables, key: t, changed: !1 };
  const i = (o) => s && o.length === 2 && o.every((l) => e.tables.includes(l));
  let r = uo(n);
  for (let o = 0; o < 20 && i(r); o++) r = uo(n);
  return i(r) && (r = dr.map((o) => o.id).filter((o) => !e.tables.includes(o))), { tables: r, key: t, changed: !0 };
}
const Oi = "rlzc", fs = { optIn: !1, injectToAI: !1, source: "local", freq: 3 }, Ra = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, _n = {
  depths: { token: 4, progress: 4, turn: 0, ledger: 4, live: 4 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...Vn },
  subApi: structuredClone(Ra),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0, live: !0, auditDebug: !0, manualDebug: !0, injectionDebug: !0 },
  live: { ...fs }
}, f = /* @__PURE__ */ Fs({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(_n),
  packs: [],
  lastInjection: Un,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: [],
  /** 黑市（第四期）：本局盘口、赌票、摆桌 */
  market: Zm()
});
function Je(e) {
  return JSON.parse(JSON.stringify(e));
}
function Jn(...e) {
  f.settings.debug && console.log("[rlzc]", ...e);
}
function ym() {
  const e = xe().extensionSettings, t = e[Oi] ?? {}, n = {
    ...structuredClone(_n),
    ...t,
    depths: { ..._n.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? _n.depths.ledger },
    ball: { ..._n.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => Pl(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...Vn, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(Ra),
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
    live: bm(t.live)
  };
  e[Oi] = n, f.settings = n, f.packs = tr(n.customPacks);
}
function bm(e) {
  const t = e ?? {}, n = Math.floor(Number(t.freq));
  return {
    optIn: typeof t.optIn == "boolean" ? t.optIn : fs.optIn,
    injectToAI: typeof t.injectToAI == "boolean" ? t.injectToAI : fs.injectToAI,
    source: t.source === "ai" ? "ai" : "local",
    freq: Number.isFinite(n) ? Math.max(1, Math.min(10, n)) : fs.freq
  };
}
function ve() {
  xe().extensionSettings[Oi] = /* @__PURE__ */ ie(f.settings), xe().saveSettingsDebounced(), f.packs = tr(f.settings.customPacks);
}
function vm(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = Pl(t);
  if (n.length) return n;
  const s = t;
  return tr([]).some((i) => i.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (f.settings.customPacks = [...f.settings.customPacks.filter((i) => i.id !== s.id), s], ve(), []);
}
function km(e) {
  f.settings.customPacks = f.settings.customPacks.filter((t) => t.id !== e), ve();
}
function Re() {
  const e = dt()[da];
  return !e || Array.isArray(e) ? {} : e;
}
function pn(e) {
  dt()[da] = e, Xe();
}
function sn(e) {
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (o.is_user || o.is_system) continue;
    const l = o.extra?.rlzc?.ledger;
    if (!Array.isArray(l)) continue;
    const a = [o.send_date, o.gen_finished].map((c) => c instanceof Date ? c.getTime() : Date.parse(String(c ?? ""))).find((c) => Number.isFinite(c));
    for (const c of l) t.push({ e: { ...c, mesIndex: r, ts: a }, pos: r, g: 0, seq: 0 });
  }
  for (const { pos: r, seq: o, ...l } of Qm(e))
    t.push({ e: { ...l, mesIndex: r, ts: ro(l.at) }, pos: r < 0 ? Number.MAX_SAFE_INTEGER : r, g: o === void 0 ? 1 : 2, seq: o ?? 0 });
  t.sort((r, o) => r.pos - o.pos || r.g - o.g || r.seq - o.seq);
  const n = t.map((r) => r.e), i = (Re().adjust ?? []).map((r) => ({
    delta: r.amount,
    source: `手动：${r.note}`,
    type: "manual",
    at: r.at,
    mesIndex: -1,
    ts: r.ts ?? ro(r.at)
  }));
  return Vp(n, i);
}
function vt(e) {
  const t = Re();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const i = e[s];
    if (i.is_user || !i.mes) continue;
    const r = n.exec(i.mes);
    if (!r) continue;
    const o = fa(r[1]);
    if (o !== null) {
      const l = We(i.send_date ?? i.gen_finished ?? void 0);
      return pn({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function Zn(e = Y()) {
  const t = Re().fix?.level;
  if (t && ["D", "C", "B", "A", "S"].includes(t)) return t;
  for (let n = e.length - 1; n >= 0; n--) {
    if (e[n].is_user || !e[n].mes) continue;
    const s = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(e[n].mes);
    if (!s) continue;
    const i = ir(s[1]);
    if (i) return i;
  }
  return "D";
}
function wm(e) {
  if (!(Re().init != null || f.ledger.length > 0)) return "";
  const s = vt(e), i = nn(s.value, f.ledger), r = Zn(e), o = bt[r], l = qn(s.value, f.ledger, o), a = Hp(i, l, r, o), c = Ie();
  return c?.status === "active" && c.live ? wh(a, ar(e, c.id)) : a;
}
function Ao(e, t = !0) {
  const n = Y(), s = n[e];
  if (!s || s.is_user) return;
  const i = s.mes ?? "", r = We(s.send_date ?? s.gen_finished ?? void 0), o = [], l = new RegExp(Zf.source, "g");
  let a;
  for (; (a = l.exec(i)) !== null; ) {
    const u = Lp(a[1]);
    u && o.push({ delta: u.delta, source: u.source, type: "tag", at: r });
  }
  const c = t ? Hs(i) : null;
  if (c && f.pack && !f.pack.rest) {
    const u = {
      结果: c.result ?? "",
      评价: c.rating ?? "",
      ...c.fields
    }, d = Re(), h = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let y = "D";
    const w = d.fix?.level;
    if (w && ["D", "C", "B", "A", "S"].includes(w))
      y = w;
    else
      for (let z = e - 1; z >= 0; z--) {
        if (n[z].is_user || !n[z].mes) continue;
        const I = h.exec(n[z].mes);
        if (!I) continue;
        const ee = ir(I[1]);
        if (ee) {
          y = ee;
          break;
        }
      }
    const _ = vt(n), P = nn(_.value, f.ledger), V = !!f.session?.clearance, j = Bp(f.pack.level, y, u, P, V, f.pack.name);
    if (j.warn) {
      s.extra = s.extra ?? {};
      const z = s.extra.rlzc ?? { phase: "", round: 0, injected: [] };
      s.extra.rlzc = Je({ ...z, settleWarn: j.warn });
    }
    if (j.delta !== 0) {
      const z = { delta: j.delta, source: j.source, type: "settle", at: r };
      j.clearWin && (z.clear = !0), o.push(z);
    }
  }
  if (o.length || s.extra?.rlzc?.ledger?.length) {
    s.extra = s.extra ?? {};
    const u = s.extra.rlzc ?? { phase: "", round: 0, injected: [] }, d = [...o, ...(u.ledger ?? []).filter((h) => h.type === "tip")];
    s.extra.rlzc = Je({ ...u, ledger: d.length ? d : void 0 }), Xe();
  }
  f.ledger = sn(Y());
}
function _m(e, t) {
  const n = Re(), s = We(void 0), i = [...n.adjust ?? [], { amount: e, note: t, at: s, ts: Date.now() }];
  pn({ ...n, adjust: i }), f.ledger = sn(Y());
}
function zm(e, t) {
  _m(e, t);
}
function $m(e) {
  const t = Re(), n = We(void 0);
  pn({ ...t, init: { value: e, source: "手动设置", at: n } }), f.ledger = sn(Y());
}
function Sm(e, t) {
  if (!e && !t) return;
  const n = Re(), s = Y(), i = We(void 0);
  pn({ ...n, fix: { level: e, rank: t, at: i, afterIndex: s.length - 1 } });
}
function Ie() {
  return qp(dt()[Mt]);
}
function Zs() {
  const e = dt(), t = Array.isArray(e[Mt]?.declined) ? e[Mt].declined : [], n = Array.isArray(e[oo]) ? e[oo] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function Em(e) {
  const t = dt(), n = [...Zs().filter((s) => s !== e), e];
  t[Mt] = { ...t[Mt] ?? {}, declined: n }, Xe();
}
function Qt(e) {
  const t = dt(), n = Zs(), s = n.length ? { declined: n } : {};
  e ? t[Mt] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[Mt] = s : delete t[Mt], Xe();
}
function fr(e) {
  const t = Ie();
  t && (e(t), Qt(t), Me());
}
function Fa(e) {
  const t = Y();
  return (e === "swipe" || e === "continue") && De(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Cs(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = pa(t, f.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = Wl(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? sh(e, n, s) : null };
}
function Me() {
  const e = Y();
  let t = Ie();
  if (t) {
    const s = JSON.stringify(t);
    if (!Jp(e, t))
      Ya(t.id), Qt(null), Ee("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const i = Cs(e, t);
      i.progress && (t.status = i.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && Qt(t);
    }
  }
  const n = Cs(e, t);
  f.session = n.session, f.pack = n.pack, f.progress = n.progress, f.audit = n.audit, f.subLine = Wa(e, n.progress), ig(e, n.session), f.ledger = sn(e), f.tick++, Yn();
}
function Oa() {
  if (f.session)
    return ha(f.session, f.progress?.rolesFromChat);
}
function Ms() {
  for (const e of lp) Vt(e, "", 0, !1);
}
let Tn = -1;
function Cm(e) {
  const t = Fa(e), n = Ie(), { pack: s, progress: i, audit: r } = Cs(t, n), o = n ? ha(n, i?.rolesFromChat) : void 0, l = hn() && !!i, a = l ? Ks(t, i.entryIndex) : null, c = s ? Ap(s, i, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: i?.panel?.limit,
    audit: r ?? void 0,
    subNext: l ? Sp(t, i.entryIndex) : void 0,
    stateText: a ? sa(s, a.state) : void 0
  }) : Un;
  Ms();
  const u = f.settings.depths;
  c.token && Vt(Hl, c.token, u.token, !0), c.progress && Vt(Gl, c.progress, u.progress, !1), c.turn && Vt(Kl, c.turn, u.turn, !1), c.state && Vt(ql, c.state, u.progress, !1);
  const d = Re();
  let h = wm(t);
  if (d.fix) {
    const w = Wp(d.fix);
    w && (h = h ? `${h}
${w}` : w);
  }
  const y = Fe();
  if (y.hints.length) {
    const w = y.hints.map(dm).join("");
    h = h ? `${h}
${w}` : w, y.hints.some((_) => !_.sent) && (y.hints = y.hints.map((_) => ({ ..._, sent: !0 })), wt(y));
  }
  if (h && Vt(Yl, h, u.ledger, !1), f.settings.live.injectToAI) {
    const w = Dp(xr(/* @__PURE__ */ new Set(), t));
    w && Vt(Jl, w, u.live, !1);
  }
  f.lastInjection = c, Tn = t.length, Jn("注入", e, c);
}
const Li = /* @__PURE__ */ new Set();
async function Mm() {
  const e = Y(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Qf(n.mes);
  if (!s) return;
  const i = Ie();
  if (!i || i.status !== "active" || i.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const r = `${fn()}:${t}:${n.mes}`;
  if (Li.has(r)) return;
  Li.add(r);
  const { pack: o, progress: l } = Cs(e, i);
  if (!o || !l || l.ended) return;
  const a = ep(o, l.phase, l.round, s);
  a && await Dt(`是否跳到${s}？（${a.label}）`) && (i.manual.push({ kind: "skip", atIndex: t, targetPhase: a.phase, targetRound: a.round }), Qt(i));
}
async function Im(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Ms();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await Mm(), await Vm(s), Cm(s);
  } catch (i) {
    console.error("[rlzc] 拦截器出错", i), Ms();
  }
}
const ps = /* @__PURE__ */ new Set();
function pr() {
  const e = Ie();
  if (!e || e.status !== "ended") return 0;
  const t = f.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
async function La(e) {
  const { index: t, info: n } = e, s = fn(), i = `${s}:${t}:${n.name}`;
  if (ps.has(i)) return;
  ps.add(i);
  const r = e.pack ? `检测到进入《${e.pack.name}》，是否启用？` : `检测到进入《${n.name}》，是否启用？（未收录的副本，将使用通用副本包）`, o = va(e.pack ?? {}, f.settings.live.optIn), l = await Zl(r, o.show ? { label: "开启直播", checked: o.checked } : null);
  if (fn() !== s) {
    ps.delete(i);
    return;
  }
  if (!l.ok) {
    Em(rr(t, n.name));
    return;
  }
  o.show && Ba(l.checked);
  const a = qs(Y(), t, f.packs);
  if (!a || a.info.name !== n.name) {
    Ee("warning", "入场消息已变化，未启用。");
    return;
  }
  const c = { ...n };
  e.pack || (c.rounds = Tl(n.limit, jl(n), f.settings.genericCaps).rounds), Ua(e.pack ?? Dl(c, f.settings.genericCaps), t, c, o.show && l.checked);
}
function Ba(e) {
  f.settings.live.optIn !== e && (f.settings.live.optIn = e, ve());
}
function Va() {
  const e = Xp(Y(), Ie(), Zs(), f.packs, pr());
  e && La(e);
}
function Tm(e) {
  Me();
  const t = Y(), n = pr();
  let s = -1;
  for (let i = n; i < t.length; i++) if (De(t[i])) {
    s = i;
    break;
  }
  e === s && Va();
}
function Ua(e, t, n, s = !1) {
  const i = Y(), r = i[t], o = Ie();
  o && eg(o);
  const l = Kp(e, t, n), a = kt();
  if (a.corridor.on && (a.corridor.on = !1, Hn(a, a.corridor.show, Xt.enterOff)), s && !e.disableLive && (l.live = !0, Hn(a, l.id, Xt.instanceOn)), mn(a), !e.rest) {
    const c = vt(i), u = Re(), d = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let h = "D";
    const y = u.fix?.level;
    if (y && ["D", "C", "B", "A", "S"].includes(y))
      h = y;
    else
      for (let w = i.length - 1; w >= 0; w--) {
        if (i[w].is_user || !i[w].mes) continue;
        const _ = d.exec(i[w].mes);
        if (!_) continue;
        const P = ir(_[1]);
        if (P) {
          h = P;
          break;
        }
      }
    qn(c.value, f.ledger, bt[h]) && (l.clearance = !0);
  }
  r.extra = r.extra ?? {}, r.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: l.id }, Qt(l), tg(l, e, t), Me(), f.progress && (r.extra.rlzc.injected = Je(f.progress.perMessage[t]?.events ?? [])), Xe(), Ee("success", `已进入副本《${e.name}》。`);
}
async function Nm(e) {
  const t = f.packs.find((l) => l.id === e);
  if (!t) return;
  const n = Y();
  let s = n.length - 1;
  for (; s >= 0 && !De(n[s]); ) s--;
  if (s < 0) {
    Ee("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  if (Ie()?.status === "active" && !await Dt("当前已有进行中的副本，确定要替换吗？")) return;
  const r = va(t, f.settings.live.optIn), o = await Zl(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`, r.show ? { label: "开启直播", checked: r.checked } : null);
  o.ok && (r.show && Ba(o.checked), Ua(t, s, Fl(n[s].mes) ?? { name: t.name }, r.show && o.checked));
}
function Xs(e) {
  fr((t) => t.manual.push(e));
}
function Qs() {
  return Y().length - 1;
}
async function fo() {
  const e = f.progress;
  if (!(!e || e.ended || !f.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Ee("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Dt(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (Xs({ kind: "skip", atIndex: Qs(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Ee("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function po() {
  if (!(!f.session || f.progress?.ended) && await Dt("确定要手动结束当前副本吗？")) {
    if (f.session.live) {
      const e = kt();
      Hn(e, f.session.id, Xt.instanceOff), mn(e);
    }
    Xs({ kind: "end", atIndex: Qs() });
  }
}
function Pm(e) {
  Xs({ kind: "setPhase", atIndex: Qs(), phase: e });
}
function jm(e) {
  Xs({ kind: "setRound", atIndex: Qs(), round: e });
}
function Dm(e) {
  fr((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function Rm(e) {
  fr((t) => t.manual.splice(e, 1));
}
async function ho() {
  f.session && await Dt("确定要删除当前副本会话吗？（不会改动聊天记录）") && (Ya(f.session.id), Qt(null), Me());
}
function hn() {
  return f.settings.subApi.source !== "off";
}
function hr() {
  const e = f.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function Fm(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function Wa(e, t) {
  if (!hn() || !t || t.ended) return "";
  if (f.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const i = Ks(e, t.entryIndex);
  return i && t.perMessage[i.index] ? `副本记录：已更新（第${t.perMessage[i.index].round}轮）` : "副本记录：尚未整理";
}
let Nn = null;
const mr = /* @__PURE__ */ new Set();
function en(e) {
  return _p(fn(), e, Y()[e]);
}
function mo(e) {
  f.subBusy = e, f.subLine = Wa(Y(), f.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && f.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function Ha(e, t, n) {
  if (en(e) !== t) return;
  const s = Y()[e];
  s?.extra?.rlzc && (s.extra.rlzc = Je({ ...s.extra.rlzc, sub: n }), Xe(), Me());
}
function Om(e, t) {
  const n = Y(), s = f.progress, i = f.pack, r = n[e], o = s?.perMessage[e];
  if (!i || !s || !o || !r) return null;
  const l = Oa(), a = (I) => ({ ...I, text: zs(I.text, i, l), if: I.if ? zs(I.if, i, l) : void 0 }), c = vp(i, r.extra?.rlzc?.injected ?? []).map(a), u = (s.next?.events ?? []).filter((I) => I.if).map(a);
  if (!zp({
    enabled: hn(),
    active: !s.ended && f.session?.status === "active",
    type: t,
    saveMode: f.settings.subApi.saveMode,
    hasEvents: c.length > 0,
    hasNextConditional: u.length > 0
  })) return null;
  const h = en(e);
  if (mr.has(h)) return null;
  const y = i.phases.find((I) => I.id === o.phase), w = Ks(n.slice(0, e), s.entryIndex), _ = f.session ? Fe().books[f.session.id] : void 0, P = bp({
    pack: i,
    phaseName: y?.name ?? o.phase,
    round: o.round,
    prevState: w?.state ?? null,
    events: c,
    nextConditional: u,
    text: String(r.mes ?? ""),
    markets: _ ? Xh(_, f.market.results) : []
  }), V = xe().substituteParams, j = V ? { system: V(P.system), user: V(P.user) } : P, z = Lm(e, h, o.round, j);
  return Nn = { key: h, index: e, promise: z }, z.finally(() => {
    Nn?.key === h && (Nn = null);
  }), z;
}
async function Lm(e, t, n, s) {
  mo(!0);
  try {
    let i = 2;
    for (; ; ) {
      const r = hr();
      if (!r) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await $p((a) => sr(r, a), s, i);
        Ha(e, t, { ...l, ms: Date.now() - o, via: Fm(r), at: (/* @__PURE__ */ new Date()).toISOString() }), mr.add(t);
        return;
      } catch (l) {
        if (en(e) !== t) return;
        const a = Gs(l), c = String(l?.message ?? l).slice(0, 200);
        if (Jn("副本事件检测失败", a, l), !f.settings.subApi.wait) {
          Ee("warning", `第${n}轮事件检测失败（${a}），已沿用上一轮状态。`), vi(e, t, a);
          return;
        }
        if (await Bm(n, a, c) === "skip") {
          vi(e, t, a);
          return;
        }
        i = 0;
      }
    }
  } catch (i) {
    Ee("error", String(i?.message ?? i)), vi(e, t, "其他");
  } finally {
    mo(!1);
  }
}
function vi(e, t, n) {
  mr.add(t), Ha(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function Bm(e, t, n) {
  const s = xe();
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
  const u = document.createElement("label");
  u.textContent = "换成：";
  const d = document.createElement("select");
  d.className = "text_pole";
  const h = [{ value: "", text: "请选择…" }];
  for (const _ of i.presets) i.source === "preset" && _.id === i.presetId || h.push({ value: `preset:${_.id}`, text: `自设API：${_.name}` });
  i.source !== "main" && h.push({ value: "main", text: "跟随主API" });
  for (const _ of h) {
    const P = document.createElement("option");
    P.value = _.value, P.textContent = _.text, d.append(P);
  }
  u.append(d), c.append(u), r.append(o, l, a, c);
  let y;
  d.addEventListener("change", () => {
    const _ = d.value;
    _ && (_ === "main" ? i.source = "main" : (i.source = "preset", i.presetId = _.slice(7)), ve(), y.complete(s.POPUP_RESULT.CUSTOM1));
  }), y = new s.Popup(r, s.POPUP_TYPE.TEXT, "", {
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
  const w = await y.show();
  return w === s.POPUP_RESULT.AFFIRMATIVE || w === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function Vm(e) {
  const t = Nn;
  if (!(!t || !f.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= Fa(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function Um(e, t) {
  const n = Y(), s = n[e];
  if (!De(s)) return;
  const i = Ie();
  if (!i || i.status === "ended") {
    if (qs(n, e, f.packs)) {
      const c = Zp(n, f.packs, pr(), e, Zs());
      c && La(c);
    }
    if (t === "first_message") return;
    Me(), Ao(e, !1), xo(e), _i(e, t), go(), vo();
    return;
  }
  if (t === "first_message") return;
  let r = null;
  hn() && (Pn = e);
  const o = Ll(s.mes);
  o && (i.roles = { ...i.roles ?? {}, ...o }), Qt(i), Me();
  const l = f.progress?.perMessage[e];
  if (l && f.pack) {
    const c = f.pack.phases.find((_) => _.id === l.phase), u = {
      phase: c?.name ?? l.phase,
      round: l.round,
      injected: Tn === e ? f.lastInjection.injected : l.events
    }, d = f.pack.time;
    d.type === "clock" && c?.clock && !c.night && !c.frozen && (u.clock = Vl(d.dayStart, d.minutesPerRound, l.round));
    const h = Tn === e ? f.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    h && (u.limit = h);
    const y = s.extra?.rlzc?.entry;
    y && (u.entry = y), Tn === e && f.lastInjection.skipped?.length && (u.skippedEvents = f.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (u.sub = s.extra.rlzc.sub), t === "continue" && s.extra?.rlzc?.live && (u.live = s.extra.rlzc.live);
    const w = (s.extra?.rlzc?.ledger ?? []).filter((_) => _.type === "tip");
    t === "continue" && w.length && (u.ledger = w), s.extra = s.extra ?? {}, s.extra.rlzc = Je(u), Xe(), Me(), r = Om(e, t);
  }
  Pn >= 0 && (Pn = -1, r || Me());
  const a = Hs(s.mes);
  if (a && Ee("info", `副本结算：${a.result ?? "—"}${a.rating ? `，评价 ${a.rating}` : ""}`), Ao(e), xo(e), r) {
    const c = en(e);
    r.then(() => {
      en(e) === c && _i(e, t);
    });
  } else _i(e, t);
  go(), vo();
}
function go() {
  const e = Re();
  e.fix && pn({ ...e, fix: void 0 });
}
function xo(e) {
  const t = Y(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const i = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!i) return;
  const r = fa(i[1]);
  if (r === null) return;
  const o = vt(t), l = (c) => c.mesIndex === e && (c.type === "tip" || c.type === "bet" && /^赌票/.test(c.source)), a = nn(o.value, sn(t).filter((c) => !l(c)));
  r !== a && (Jn(`积分核对不符（楼层${e}）：状态栏 ${r}，账本 ${a}`), n.extra?.rlzc && (n.extra.rlzc = Je({ ...n.extra.rlzc, ledgerMismatch: { status: r, ledger: a } }), Xe()));
}
function yo() {
  Li.clear(), ps.clear(), Tn = -1, Pn = -1, f.chatId = fn(), f.debugUnlocked = !1, f.lastInjection = Un, Ms(), Th(), qm(), f.ledger = sn(Y()), Me(), Va(), setTimeout(() => gr(), 50);
}
function ki() {
  Me();
}
function Ga() {
  return f.settings.panelDisplay === "statusbar" ? Zt.filter((e) => e !== "副本") : Zt;
}
function wi(e) {
  Ql(e, Ga());
}
function gr(e = !1) {
  mp(Ga(), e);
}
function Wm(e) {
  f.settings.panelDisplay !== e && (f.settings.panelDisplay = e, ve(), gr(!0));
}
const hs = Mh;
function kt() {
  return hh(dt()[ya]);
}
function mn(e) {
  dt()[ya] = Je(e), Xe();
}
function Hn(e, t, n) {
  if (!t) return;
  const s = Ys(Y(), e) + 1, i = { id: s, t: "sys", name: "", text: n, amount: 0, net: 0, show: t };
  e.sys = [...e.sys, i].slice(-100), e.seq = s, ur([i]);
}
function Hm() {
  return "c" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function Gm(e) {
  const t = f.session, n = f.progress;
  if (!!t && e > t.entryIndex && (!n?.ended || n.endIndex !== void 0 && e <= n.endIndex)) return t.live && f.pack ? { show: t.id, scope: "instance", pack: f.pack } : null;
  const i = kt();
  return i.corridor.on && i.corridor.show ? { show: i.corridor.show, scope: "corridor", pack: null } : null;
}
function _i(e, t) {
  if (t === "continue" || t === "first_message") return;
  const n = Y(), s = n[e];
  if (!De(s) || Rt(s)) return;
  const i = Gm(e);
  if (!i) return;
  const r = kt(), { show: o, scope: l, pack: a } = i, c = f.progress, u = s.extra?.rlzc ?? { phase: "", round: 0, injected: [] }, d = lr(n, o, e), h = u.sub && !u.sub.skipped ? { hype: u.sub.hype, hurt: u.sub.hurt } : void 0, y = l === "instance" && c?.endIndex === e && c.endedBy === "tag" ? Hs(s.mes) : null, w = !!y && ["死亡", "阵亡"].includes(String(y.result ?? "").trim()), _ = c?.roundsLeft, P = /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(s.mes ?? "")), V = new Set((a?.events ?? []).filter((B) => B.kind !== "directive").map((B) => B.id)), j = Mp({
    aiSource: f.settings.live.source === "ai",
    subOn: hn(),
    roundInShow: d.length + 1,
    freq: f.settings.live.freq,
    phaseSwitch: P,
    hurt: za(String(s.mes ?? ""), h),
    eventDone: !!u.sub && !u.sub.skipped && (u.sub.events ?? []).some((B) => B.status === "done")
  }), z = yh({
    show: o,
    scope: l,
    packLevel: a?.level ?? null,
    playerLevel: cr(n, e + 1),
    isRest: !!a?.rest,
    prevHeat: d.length ? d[d.length - 1].rec.heat : null,
    roundsInShow: d.length,
    text: String(s.mes ?? ""),
    hasEvents: (u.injected ?? []).some((B) => V.has(B)),
    hasPhaseSwitch: P,
    sub: h,
    isEnd: l === "instance" && !!_ && _.y > 0 && _.x < _.y * 0.1,
    phaseId: l === "instance" ? c?.perMessage[e]?.phase : void 0,
    pool: hs.pool,
    templates: hs.templates,
    packDanmaku: a?.danmaku,
    names: hs.names,
    whoNames: _a(wa(n, e + 1), String(xe().name1 ?? "")),
    recentTexts: mh(n.slice(0, e)),
    firstId: Ys(n, r) + 1,
    settle: y ? { died: w, tipsBefore: ar(n.slice(0, e), o) } : void 0,
    awaitAi: j,
    rand: Math.random
  });
  j && (z.ai = { ok: !1, pending: !0 });
  const I = We(s.send_date ?? s.gen_finished ?? void 0), Z = [...(u.ledger ?? []).filter((B) => B.type !== "tip"), ...vh(z, I)];
  s.extra = s.extra ?? {}, s.extra.rlzc = Je({ ...u, live: z, ledger: Z.length ? Z : void 0 }), r.seq = Math.max(r.seq, ...z.feed.map((B) => B.id)), mn(r), f.ledger = sn(Y()), f.tick++, z.feed.length ? ur(z.feed, !0) : Yn(), j && Km(e, z.scope === "instance" ? a?.name : void 0);
}
function Km(e, t) {
  const n = Y(), s = en(e), i = hr();
  if (!i) {
    zi(e, s, [], "副本事件检测没有设置好", 0);
    return;
  }
  const r = [];
  for (let u = e; u >= 0 && r.length < 2; u--) De(n[u]) && r.unshift(String(n[u].mes ?? ""));
  const o = Tp({
    scene: t ?? "回廊",
    texts: r,
    cast: _a(wa(n, e + 1), String(xe().name1 ?? "")),
    samples: Ip(hs.pool, 10, Math.random)
  }), l = xe().substituteParams, a = l ? { system: l(o.system), user: l(o.user) } : o, c = Date.now();
  Pp((u) => sr(i, u, { temperature: 0.9 }), a, 1).then((u) => zi(e, s, u, null, Date.now() - c)).catch((u) => {
    Jn("AI 弹幕生成失败", u);
    const d = String(u?.message ?? u).slice(0, 120);
    zi(e, s, [], `${Gs(u)}：${d}`, Date.now() - c);
  });
}
function zi(e, t, n, s, i) {
  if (en(e) !== t) return;
  const r = Y(), o = r[e], l = Rt(o);
  if (!l?.pending || !o.extra?.rlzc) return;
  const a = kt(), c = Sa(l, s ? null : n, Ys(r, a) + 1, Math.random), u = s ? 0 : Math.min(n.length, 13), d = { ...c, ai: s ? { ok: !1, error: s, ms: i } : { ok: !0, count: u, ms: i } };
  o.extra.rlzc = Je({ ...o.extra.rlzc, live: d }), a.seq = Math.max(a.seq, ...d.feed.map((h) => h.id)), mn(a), f.tick++, ur(d.feed, !0);
}
function qm() {
  const e = Y();
  let t = !1;
  for (const n of e) {
    const s = Rt(n);
    if (!s?.pending || !n.extra?.rlzc) continue;
    const i = kt(), r = Sa(s, null, Ys(e, i) + 1, Math.random);
    n.extra.rlzc = Je({ ...n.extra.rlzc, live: { ...r, ai: { ok: !1, error: "没有等到结果" } } }), i.seq = Math.max(i.seq, ...r.feed.map((o) => o.id)), mn(i), t = !0;
  }
  t && Xe();
}
function Ym() {
  const e = kt();
  return f.session?.status === "active" && f.pack ? or({ packLevel: f.pack.level, playerLevel: cr(Y()), isRest: !!f.pack.rest, heat: 20, rand: 1 }) : e.corridor.viewers ?? 0;
}
function xr(e, t = Y()) {
  const n = f.session, s = n?.status === "active";
  return $h(
    t,
    kt(),
    {
      inInstance: s,
      instanceLive: !!(s && n?.live),
      instanceShow: n?.id,
      startViewers: Ym(),
      injectToAI: f.settings.live.injectToAI
    },
    e
  );
}
function Jm() {
  if (f.session?.status === "active") return !1;
  const e = kt();
  if (e.corridor.on)
    e.corridor.on = !1, Hn(e, e.corridor.show, Xt.corridorOff);
  else {
    const t = Hm();
    e.corridor = {
      on: !0,
      show: t,
      viewers: or({ packLevel: null, playerLevel: cr(Y()), isRest: !1, heat: 20, rand: 0.9 + Math.random() * 0.2 })
    }, Hn(e, t, Xt.corridorOn);
  }
  return mn(e), f.tick++, Yn(), !0;
}
function Zm() {
  return { book: null, results: {}, tickets: [], pending: 0, tables: [], casinoOpen: !0 };
}
function Fe() {
  return pm(dt()[Ca]);
}
function wt(e) {
  dt()[Ca] = Je(e), Xe();
}
let Pn = -1;
function Xm() {
  return [Pn, Nn?.index ?? -1].filter((e) => e >= 0);
}
function Xn(e = Y()) {
  return Zn(e);
}
function yr(e = Y()) {
  return nn(vt(e).value, f.ledger);
}
function Ka(e) {
  if (Re().init) return;
  const t = vt(e), n = Re();
  n.init || pn({ ...n, init: { value: t.value, source: t.source, at: We(void 0) } });
}
function qa() {
  const e = Ie();
  return e?.status === "active" && e.live ? ar(Y(), e.id) : 0;
}
function ei(e, t, n) {
  if (t.frozen) return { results: {}, tickets: Ri(t, {}), rounds: [] };
  let s = { voided: !0, ended: !1 }, i = [], r = {};
  if (n && n.id === t.session) {
    const l = pa(n, f.packs), a = l ? Wl(e, n, l) : null;
    a && (s = {
      ended: a.ended,
      endedBy: a.endedBy,
      endIndex: a.endIndex,
      result: a.settlement?.result,
      rating: a.settlement?.rating
    }, i = Zh(e, a.perMessage, a.entryIndex, Xm()), r = a.phaseEnds);
  }
  const o = Yh({ markets: t.markets, rounds: i, outcome: s, phaseEnds: r });
  return { results: o, tickets: Ri(t, o), rounds: i };
}
function Qm(e) {
  const t = Fe(), n = Ie(), s = (r) => e[r] ? We(e[r].send_date ?? e[r].gen_finished ?? void 0) : void 0, i = [];
  for (const r of Object.values(t.books)) i.push(...tm(r, ei(e, r, n).tickets, s));
  for (const r of t.casino.plays)
    i.push({ delta: r.net, source: gm(r.table, r.label), type: "bet", at: r.at, pos: r.after, seq: r.seq ?? 0 });
  return i;
}
function eg(e) {
  const t = Fe(), n = t.books[e.id];
  if (!n || n.frozen) return;
  const s = Y(), i = Jh(n, ei(s, n, e).results);
  for (const r of n.tickets) i[r.id].index < 0 && (i[r.id].index = Math.max(s.length, r.after + 1));
  n.frozen = i, wt(t);
}
function Ya(e) {
  const t = Fe(), n = t.books[e];
  if (!n || n.frozen) return;
  const s = Y().length;
  n.frozen = Object.fromEntries(n.tickets.map((i) => [i.id, { stamp: "refund", index: Math.max(s, i.after + 1) }])), wt(t);
}
function tg(e, t, n) {
  if (t.rest) return;
  const s = Y(), i = hn(), r = Bh({ pack: t, playerLevel: Xn(s), withEvents: i, rand: Math.random });
  if (!r.length) return;
  const o = Fe(), l = { session: e.id, packId: t.id, packName: t.name, openedAt: We(void 0), markets: r, tickets: [] };
  i && (l.freak = { status: "pending" }), o.books[e.id] = l, wt(o), i && ng(e.id, t, n);
}
function ng(e, t, n) {
  const s = (c, u) => {
    const d = Fe(), h = d.books[e];
    h && (u && (h.closedAt || h.frozen) ? h.freak = { ...c, status: "late" } : (u && (h.markets = [...h.markets.filter((y) => y.kind !== "freak"), ...am(u, Math.random)]), h.freak = c), wt(d), Me());
  }, i = hr();
  if (!i) {
    s({ status: "failed", error: "副本事件检测没有设置好" });
    return;
  }
  const r = rm({
    name: t.name,
    level: t.level,
    briefing: im(String(Y()[n]?.mes ?? "")),
    docs: t.docs
  }), o = xe().substituteParams, l = o ? { system: o(r.system), user: o(r.user) } : r, a = Date.now();
  lm((c) => sr(i, c), l, 1).then((c) => s({ status: "ok", count: c.length, ms: Date.now() - a }, c)).catch((c) => {
    Jn("庄家怪盘出题失败", c);
    const u = String(c?.message ?? c).slice(0, 120);
    s({ status: "failed", error: `${Gs(c)}：${u}`, ms: Date.now() - a });
  });
}
const as = /* @__PURE__ */ new Map();
let bo = null;
function sg(e) {
  const t = fn(), n = bo !== t;
  n && as.clear(), bo = t;
  const s = { win: 0, lose: 0, refund: 0 };
  for (const r of e) {
    const o = r.res?.stamp ?? null, l = as.has(r.ticket.id), a = as.get(r.ticket.id);
    as.set(r.ticket.id, o), !n && l && o && o !== a && s[o]++;
  }
  const i = [s.win ? `兑 ${s.win} 张` : "", s.lose ? `废 ${s.lose} 张` : "", s.refund ? `退 ${s.refund} 张` : ""].filter(Boolean);
  i.length && Ee("info", `赌票开奖：${i.join("，")}。`);
}
function ig(e, t) {
  const n = Fe();
  let s = !1;
  const i = t?.status === "active", r = t ? n.books[t.id] : void 0;
  r && !r.closedAt && !r.frozen && f.progress && Wh(f.progress.perMessage, f.progress.entryIndex) && (r.closedAt = We(void 0), s = !0);
  const o = i ? n.casino.key : t?.status === "ended" ? t.id : "", l = xm(n.casino, o, Math.random);
  l.changed && (!i || n.casino.tables.length !== 2) && (n.casino.tables = l.tables, n.casino.key = l.key, s = !0), s && wt(n);
  const a = [];
  let c = {};
  for (const u of Object.values(n.books)) {
    const d = ei(e, u, t);
    r && u.session === r.session && (c = d.results);
    for (const h of u.tickets) a.push({ ticket: h, book: u, market: u.markets.find((y) => y.id === h.market), res: d.tickets[h.id] ?? null });
  }
  a.sort((u, d) => (d.ticket.seq ?? 0) - (u.ticket.seq ?? 0)), sg(a), f.market = {
    book: i && r ? r : null,
    results: c,
    tickets: a,
    pending: a.filter((u) => !u.res).length,
    tables: n.casino.tables,
    casinoOpen: !i || !!f.pack?.casino
  };
}
function Ja(e, t) {
  const n = Y(), s = f.market.book;
  return Pa({
    playerLevel: Xn(n),
    stake: t,
    already: s ? Uh(s, e) : 0,
    balance: yr(n),
    lockedTips: qa()
  });
}
function rg(e, t, n) {
  const s = Ie();
  if (!s || s.status !== "active") return "没有进行中的副本";
  const i = Fe(), r = i.books[s.id];
  if (!r || r.frozen) return "本局没有开盘";
  if (r.closedAt) return "已封盘";
  const o = r.markets.find((d) => d.id === e), l = o?.options.find((d) => d.id === t);
  if (!o || !l) return "没有这个盘口";
  if (f.market.results[e]) return "已开奖";
  const a = Ja(e, n);
  if (!a.ok) return a.reason ?? "不能下注";
  const c = Y();
  Ka(c);
  const u = i.seq + 1;
  return i.seq = u, r.tickets.push({ id: `t${u}`, seq: u, market: e, option: t, stake: n, odds: l.odds, at: We(void 0), after: c.length - 1 }), o.kind === "ending" && t === "lose" && (i.hints = Fi(i.hints, { kind: "betLose", amount: n, after: c.length - 1 })), wt(i), Me(), null;
}
function Za(e) {
  const t = Y();
  return Pa({ playerLevel: Xn(t), stake: e, already: 0, balance: yr(t), lockedTips: qa() });
}
function og(e, t, n) {
  if (!f.market.casinoOpen) return { error: "赌坊只在回廊营业。" };
  const s = Fe();
  if (!s.casino.tables.includes(e)) return { error: "这张桌今晚没开" };
  const i = Za(n);
  if (!i.ok) return { error: i.reason };
  const r = mm(e, t, n, Math.random);
  if (!r) return { error: "没有这种押法" };
  const o = Y();
  Ka(o);
  const l = Xn(o), a = yr(o), c = o.length - 1, u = s.seq + 1;
  return s.seq = u, s.casino.plays = [
    ...s.casino.plays,
    { id: `g${u}`, seq: u, table: e, bet: t, label: r.label, stake: n, win: r.win, payout: r.payout, net: r.net, result: r.result, at: We(void 0), after: c }
  ], !r.win && a - n < bt[l] && (s.hints = Fi(s.hints, { kind: "casinoLoss", amount: n, after: c })), r.win && r.net > Ma[l] * 5 && (s.hints = Fi(s.hints, { kind: "casinoWin", amount: r.net, after: c })), wt(s), Me(), { outcome: r };
}
function vo() {
  const e = Fe();
  if (!e.hints.length) return;
  const t = fm(e.hints);
  t.length !== e.hints.length && (e.hints = t, wt(e));
}
function lg() {
  const e = Ie(), t = e ? Fe().books[e.id] : void 0;
  return t ? ei(Y(), t, e).rounds : [];
}
const ag = { class: "rlzc-ball-mark" }, cg = {
  key: 0,
  class: "rlzc-ball-badge",
  title: "待开奖赌票"
}, $i = 44, ug = /* @__PURE__ */ Ue({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ de({ x: 0, y: 0 });
    let n = null;
    function s(u, d) {
      const h = window.innerWidth - $i - 4, y = window.innerHeight - $i - 4;
      return { x: Math.min(Math.max(4, u), h), y: Math.min(Math.max(4, d), y) };
    }
    function i() {
      const u = f.settings.ball;
      t.value = s(u.x ?? window.innerWidth - $i - 12, u.y ?? Math.round(window.innerHeight * 0.35));
    }
    function r(u) {
      u.currentTarget.setPointerCapture(u.pointerId), n = { id: u.pointerId, dx: u.clientX - t.value.x, dy: u.clientY - t.value.y, moved: !1, sx: u.clientX, sy: u.clientY };
    }
    function o(u) {
      !n || n.id !== u.pointerId || (Math.abs(u.clientX - n.sx) + Math.abs(u.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(u.clientX - n.dx, u.clientY - n.dy)));
    }
    function l(u) {
      if (!n || n.id !== u.pointerId) return;
      const d = n.moved;
      n = null, d ? (f.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, ve()) : f.panelOpen = !f.panelOpen;
    }
    const a = G(() => !!f.session && !f.progress?.ended), c = G(() => !!f.progress?.warn);
    return Ls(() => f.settings.ball, i, { deep: !0 }), eu(() => {
      i(), window.addEventListener("resize", i);
    }), al(() => window.removeEventListener("resize", i)), (u, d) => (v(), k("button", {
      class: te(["rlzc-ball", { "is-active": a.value, "is-warn": c.value }]),
      style: Ds({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: r,
      onPointermove: o,
      onPointerup: l,
      onPointercancel: l
    }, [
      A("span", ag, S(a.value ? T(f).pack?.level ?? "副" : "廊"), 1),
      T(f).market.pending > 0 ? (v(), k("span", cg, S(T(f).market.pending), 1)) : U("", !0)
    ], 38));
  }
});
function Ag(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function kn(e) {
  return Ag(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function dg(e) {
  const t = [];
  let n = null, s = [];
  const i = () => {
    s.length && t.push(`<p>${s.map(kn).join("<br>")}</p>`), s = [];
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
      t.push(`<h${h}>${kn(a[2])}</h${h}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(l), u = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (c || u) {
      i();
      const h = c ? "ul" : "ol", y = c ? c[1] : u[2];
      n !== h ? (r(), n = h, t.push(h === "ol" ? `<ol start="${u[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(kn(y));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${kn(l.trim())}`);
      continue;
    }
    const d = /^>\s?(.*)$/.exec(l);
    if (d) {
      i(), r(), t.push(`<blockquote>${kn(d[1])}</blockquote>`);
      continue;
    }
    r(), s.push(l);
  }
  return i(), r(), t.join("");
}
const fg = {
  key: 0,
  class: "rlzc-docs"
}, pg = { class: "rlzc-subtabs" }, hg = ["onClick"], mg = { class: "rlzc-md" }, gg = ["innerHTML"], xg = ["src", "alt"], yg = {
  key: 2,
  class: "rlzc-note"
}, ko = /* @__PURE__ */ Ue({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ de(0);
    Ls(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = G(() => t.pack.docs?.[n.value]), i = G(() => s.value?.md ? dg(s.value.md) : ""), r = G(() => s.value?.image ? Wf(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (v(), k("section", fg, [
      A("div", pg, [
        (v(!0), k(X, null, fe(e.pack.docs, (a, c) => (v(), k("button", {
          key: c,
          class: te({ on: n.value === c }),
          onClick: (u) => n.value = c
        }, S(a.title), 11, hg))), 128))
      ]),
      A("article", mg, [
        i.value ? (v(), k("div", {
          key: 0,
          innerHTML: i.value
        }, null, 8, gg)) : U("", !0),
        r.value ? (v(), k("img", {
          key: 1,
          src: r.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, xg)) : s.value?.image && !r.value ? (v(), k("p", yg, "图片无法加载：" + S(s.value.image), 1)) : U("", !0)
      ])
    ])) : U("", !0);
  }
}), bg = {
  key: 0,
  class: "rlzc-ledger-summary"
}, vg = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, wo = /* @__PURE__ */ Ue({
  __name: "LedgerSummary",
  setup(e) {
    const t = G(() => Y()), n = G(() => vt(t.value)), s = G(() => nn(n.value.value, f.ledger)), i = G(() => (f.tick, Zn(t.value))), r = G(() => bt[i.value]), o = G(() => qn(n.value.value, f.ledger, r.value)), l = G(() => f.ledger.length > 0 || n.value.source !== "默认值");
    return (a, c) => l.value ? (v(), k("div", bg, [
      A("span", {
        class: te(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + S(s.value >= 0 ? "+" : "") + S(s.value), 3),
      o.value ? (v(), k("span", vg, "待清算")) : U("", !0)
    ])) : U("", !0);
  }
}), kg = { class: "rlzc-system" }, wg = { class: "rlzc-card rlzc-hero" }, _g = { class: "rlzc-hero-top" }, zg = { class: "rlzc-level" }, $g = {
  key: 0,
  class: "rlzc-chip"
}, Sg = {
  key: 0,
  class: "rlzc-goal"
}, Eg = { class: "rlzc-grid" }, Cg = {
  key: 0,
  class: "rlzc-stat"
}, Mg = {
  key: 1,
  class: "rlzc-stat"
}, Ig = {
  key: 2,
  class: "rlzc-stat"
}, Tg = {
  key: 3,
  class: "rlzc-stat"
}, Ng = {
  key: 0,
  class: "rlzc-subline"
}, Pg = {
  key: 1,
  class: "rlzc-note"
}, jg = {
  key: 2,
  class: "rlzc-card"
}, Dg = { class: "rlzc-kv" }, Rg = { class: "rlzc-kv" }, Fg = {
  key: 0,
  class: "rlzc-note rlzc-note-warn"
}, Og = {
  key: 3,
  class: "rlzc-note"
}, Lg = {
  key: 4,
  class: "rlzc-card"
}, Bg = {
  key: 0,
  class: "rlzc-kv"
}, Vg = { class: "rlzc-mono" }, Ug = {
  key: 1,
  class: "rlzc-tasks"
}, Wg = {
  key: 2,
  class: "rlzc-ps"
}, Hg = { class: "rlzc-actions" }, Gg = ["disabled"], Kg = ["disabled"], qg = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, Yg = {
  key: 2,
  class: "rlzc-card"
}, Jg = { class: "rlzc-row" }, Zg = ["value"], Xg = ["disabled"], Qg = /* @__PURE__ */ Ue({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ de(""), n = G(() => !!f.session && !!f.pack), s = G(() => f.progress), i = G(() => n.value && !!s.value && !s.value.ended), r = G(() => f.packs.find((h) => h.id === t.value) ?? null), o = G(() => !!f.pack?.phases.length), l = G(() => f.settings.panelDisplay !== "statusbar"), a = G(() => {
      const h = s.value;
      return h ? o.value ? `${h.warn ? "⚠️ " : ""}${h.round}/${h.phase.cap}` : `第${h.round}轮` : "";
    }), c = G(() => {
      const h = s.value;
      return h ? h.limit?.text ? h.limit.text : h.panel?.limit || f.session?.briefing?.limit || "—" : "";
    }), u = G(() => {
      const h = s.value;
      return !!h && !h.ended && o.value && h.phase.cap > 0 && h.nextRound < h.phase.cap;
    });
    async function d() {
      t.value && (await Nm(t.value), t.value = "");
    }
    return (h, y) => (v(), k("div", kg, [
      n.value && s.value ? (v(), k(X, { key: 0 }, [
        A("div", wg, [
          A("div", _g, [
            A("span", zg, S(T(f).pack?.rest ? "—" : T(f).pack.level), 1),
            A("h3", null, S(T(f).pack.name), 1),
            s.value.ended ? (v(), k("span", $g, "已结束")) : U("", !0)
          ]),
          T(f).session?.briefing?.goal ? (v(), k("p", Sg, "目标：" + S(T(f).session.briefing.goal), 1)) : U("", !0)
        ]),
        A("div", Eg, [
          o.value ? (v(), k("div", Cg, [
            y[3] || (y[3] = A("span", null, "阶段", -1)),
            A("b", null, S(s.value.phase.name), 1)
          ])) : U("", !0),
          A("div", {
            class: te(["rlzc-stat", { warn: s.value.warn }])
          }, [
            y[4] || (y[4] = A("span", null, "轮次", -1)),
            A("b", null, S(a.value), 1)
          ], 2),
          s.value.currentClock ? (v(), k("div", Mg, [
            y[5] || (y[5] = A("span", null, "钟时", -1)),
            A("b", null, S(s.value.currentClock), 1)
          ])) : U("", !0),
          s.value.roundsLeft ? (v(), k("div", Ig, [
            y[6] || (y[6] = A("span", null, "最多剩余轮次", -1)),
            A("b", null, S(s.value.roundsLeft.x) + "/" + S(s.value.roundsLeft.y), 1)
          ])) : U("", !0),
          l.value ? (v(), k("div", Tg, [
            y[7] || (y[7] = A("span", null, "剩余时间", -1)),
            A("b", null, S(c.value), 1)
          ])) : U("", !0),
          i.value ? U("", !0) : (v(), Ke(wo, { key: 4 }))
        ]),
        T(f).subLine ? (v(), k("p", Ng, S(T(f).subLine), 1)) : U("", !0),
        s.value.skipGoal ? (v(), k("div", Pg, "快进中：目标 " + S(T(f).pack.phases.find((w) => w.id === s.value.skipGoal.phase)?.name) + " 第" + S(s.value.skipGoal.round) + "轮", 1)) : U("", !0),
        s.value.ended && s.value.settlement ? (v(), k("div", jg, [
          A("div", Dg, [
            y[8] || (y[8] = A("span", null, "结果", -1)),
            A("b", null, S(s.value.settlement.result ?? "—"), 1)
          ]),
          A("div", Rg, [
            y[9] || (y[9] = A("span", null, "评价", -1)),
            A("b", null, S(s.value.settlement.rating ?? "—"), 1)
          ]),
          T(f).session?.clearance && s.value.settlement.result === "失败" ? (v(), k("div", Fg, " 清算未通关 ")) : U("", !0)
        ])) : s.value.ended ? (v(), k("div", Og, "副本已手动结束。")) : U("", !0),
        l.value && s.value.panel ? (v(), k("div", Lg, [
          s.value.panel.progressBar ? (v(), k("div", Bg, [
            y[10] || (y[10] = A("span", null, "进度", -1)),
            A("b", Vg, S(s.value.panel.progressBar), 1)
          ])) : U("", !0),
          s.value.panel.tasks.length ? (v(), k("div", Ug, [
            y[11] || (y[11] = A("span", null, "任务", -1)),
            A("ul", null, [
              (v(!0), k(X, null, fe(s.value.panel.tasks, (w, _) => (v(), k("li", { key: _ }, S(w), 1))), 128))
            ])
          ])) : U("", !0),
          s.value.panel.ps ? (v(), k("div", Wg, "ps：" + S(s.value.panel.ps), 1)) : U("", !0)
        ])) : U("", !0),
        A("div", Hg, [
          A("button", {
            class: "rlzc-btn",
            disabled: !u.value,
            onClick: y[0] || (y[0] = //@ts-ignore
            (...w) => T(fo) && T(fo)(...w))
          }, "跳过（到本阶段结束）", 8, Gg),
          A("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: y[1] || (y[1] = //@ts-ignore
            (...w) => T(po) && T(po)(...w))
          }, "手动结束副本", 8, Kg)
        ]),
        i.value && T(f).pack.docs?.length ? (v(), Ke(ko, {
          key: 5,
          pack: T(f).pack
        }, null, 8, ["pack"])) : U("", !0)
      ], 64)) : (v(), k("div", qg, [
        y[12] || (y[12] = A("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        Be(wo)
      ])),
      i.value ? U("", !0) : (v(), k("div", Yg, [
        y[14] || (y[14] = A("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        A("div", Jg, [
          at(A("select", {
            "onUpdate:modelValue": y[2] || (y[2] = (w) => t.value = w),
            class: "rlzc-input"
          }, [
            y[13] || (y[13] = A("option", { value: "" }, "选择副本…", -1)),
            (v(!0), k(X, null, fe(T(f).packs, (w) => (v(), k("option", {
              key: w.id,
              value: w.id
            }, S(w.level) + "｜" + S(w.name), 9, Zg))), 128))
          ], 512), [
            [Cl, t.value]
          ]),
          A("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: d
          }, "进入", 8, Xg)
        ])
      ])),
      !i.value && r.value?.docs?.length ? (v(), Ke(ko, {
        key: 3,
        pack: r.value
      }, null, 8, ["pack"])) : U("", !0)
    ]));
  }
}), ex = { class: "rlzc-ledger" }, tx = { class: "rlzc-card rlzc-ledger-hero-card" }, nx = { class: "rlzc-ledger-hero-cols" }, sx = { class: "rlzc-ledger-hero-col" }, ix = { class: "rlzc-ledger-hero-col-val" }, rx = { class: "rlzc-ledger-hero-col" }, ox = { class: "rlzc-ledger-hero-col-val" }, lx = { class: "rlzc-ledger-hero-col" }, ax = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, cx = { class: "rlzc-card" }, ux = {
  key: 0,
  class: "rlzc-ledger-list"
}, Ax = { class: "rlzc-ledger-item-left" }, dx = { class: "rlzc-ledger-item-src" }, fx = { class: "rlzc-ledger-item-time" }, px = { class: "rlzc-ledger-item-right" }, hx = { class: "rlzc-ledger-item-after" }, mx = {
  key: 1,
  class: "rlzc-hint"
}, gx = /* @__PURE__ */ Ue({
  __name: "LedgerTab",
  setup(e) {
    const t = G(() => Y()), n = G(() => vt(t.value)), s = G(() => f.ledger), i = G(() => nn(n.value.value, s.value)), r = G(() => {
      const w = Up(n.value.value, s.value);
      return s.value.map((_, P) => ({ e: _, after: w[P] })).reverse();
    }), o = G(() => (f.tick, Zn(t.value))), l = G(() => bt[o.value]), a = G(() => qn(n.value.value, s.value, l.value)), c = G(() => Math.max(0, l.value - i.value)), u = G(() => n.value.source === "默认值");
    function d(w) {
      return new Intl.NumberFormat("zh-CN").format(w);
    }
    function h(w) {
      return (w >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(w);
    }
    function y(w) {
      try {
        const _ = new Date(w), P = String(_.getMonth() + 1).padStart(2, "0"), V = String(_.getDate()).padStart(2, "0"), j = String(_.getHours()).padStart(2, "0"), z = String(_.getMinutes()).padStart(2, "0");
        return `${P}-${V} ${j}:${z}`;
      } catch {
        return w;
      }
    }
    return (w, _) => (v(), k("div", ex, [
      A("div", tx, [
        _[3] || (_[3] = A("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        A("b", {
          class: te(["rlzc-ledger-hero-num", { negative: i.value < 0 }])
        }, S(d(i.value)), 3),
        _[4] || (_[4] = A("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        A("div", nx, [
          A("div", sx, [
            _[0] || (_[0] = A("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            A("span", ix, S(o.value), 1)
          ]),
          A("div", rx, [
            _[1] || (_[1] = A("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            A("span", ox, S(d(l.value)), 1)
          ]),
          A("div", lx, [
            _[2] || (_[2] = A("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            A("span", {
              class: te(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": a.value }])
            }, S(a.value ? `距线 ${d(c.value)}` : "无"), 3)
          ])
        ]),
        u.value ? (v(), k("p", ax, "初始积分按 1000 计，可在设置页修改")) : U("", !0)
      ]),
      A("div", cx, [
        _[5] || (_[5] = A("h4", null, "流水", -1)),
        s.value.length ? (v(), k("ul", ux, [
          (v(!0), k(X, null, fe(r.value, (P, V) => (v(), k("li", {
            key: `${V}-${P.e.mesIndex}-${P.e.delta}-${P.e.at}`,
            class: "rlzc-ledger-item"
          }, [
            A("div", Ax, [
              A("span", dx, S(P.e.source), 1),
              A("span", fx, S(y(P.e.at)), 1)
            ]),
            A("div", px, [
              A("span", {
                class: te(["rlzc-ledger-item-delta", P.e.delta >= 0 ? "pos" : "neg"])
              }, S(h(P.e.delta)), 3),
              A("span", hx, "余额 " + S(d(P.after)), 1)
            ])
          ]))), 128))
        ])) : (v(), k("p", mx, "还没有收支记录。"))
      ])
    ]));
  }
}), xx = { class: "rlzc-market" }, yx = { class: "rlzc-subtabs rlzc-market-tabs" }, bx = { class: "rlzc-card rlzc-mk-status" }, vx = { class: "rlzc-mk-q" }, kx = { class: "rlzc-mk-tag" }, wx = { class: "rlzc-mk-opts" }, _x = ["disabled", "onClick"], zx = { class: "rlzc-row rlzc-mk-bet" }, $x = ["onUpdate:modelValue"], Sx = ["disabled", "onClick"], Ex = { class: "rlzc-hint" }, Cx = {
  key: 0,
  class: "rlzc-mk-red"
}, Mx = {
  key: 1,
  class: "rlzc-mk-mine"
}, Ix = {
  key: 1,
  class: "rlzc-card"
}, Tx = {
  key: 0,
  class: "rlzc-tk-list"
}, Nx = { class: "rlzc-tk-left" }, Px = { class: "rlzc-tk-title" }, jx = {
  key: 1,
  class: "rlzc-hint"
}, Dx = {
  key: 0,
  class: "rlzc-card rlzc-mk-status"
}, Rx = { class: "rlzc-cs-tables" }, Fx = ["onClick"], Ox = {
  key: 0,
  class: "rlzc-card rlzc-cs-play"
}, Lx = {
  key: 0,
  class: "rlzc-segsrc rlzc-cs-seg"
}, Bx = ["onClick"], Vx = ["onClick"], Ux = { class: "rlzc-row rlzc-mk-bet" }, Wx = ["disabled"], Hx = { class: "rlzc-hint" }, Gx = {
  key: 2,
  class: "rlzc-mk-red"
}, Kx = /* @__PURE__ */ Ue({
  __name: "MarketTab",
  setup(e) {
    const t = /* @__PURE__ */ de("book"), n = (D) => new Intl.NumberFormat("en-US").format(D), s = (D) => `×${D.toFixed(2)}`, i = G(() => f.market.pending), r = G(() => (f.tick, Xn())), o = G(() => f.market.book), l = G(() => !!o.value?.closedAt), a = G(() => {
      const D = o.value;
      return D ? D.closedAt ? `《${D.packName}》已封盘` : `《${D.packName}》开盘中 · 第1轮结束封盘` : f.session?.status === "active" && f.pack?.rest ? "休整副本不开盘。" : "进副本后开盘。";
    }), c = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" }, u = /* @__PURE__ */ de({}), d = /* @__PURE__ */ de({});
    function h(D, K) {
      l.value || f.market.results[D.id] || (u.value = { ...u.value, [D.id]: u.value[D.id] === K ? "" : K });
    }
    function y(D) {
      f.tick;
      const K = d.value[D.id];
      return Ja(D.id, typeof K == "number" ? K : 0);
    }
    function w(D) {
      const K = u.value[D.id], H = d.value[D.id];
      if (!K || typeof H != "number") return;
      const pe = rg(D.id, K, H);
      if (pe) {
        Ee("warning", pe);
        return;
      }
      d.value = { ...d.value, [D.id]: null }, u.value = { ...u.value, [D.id]: "" };
    }
    function _(D) {
      const K = o.value;
      return K ? f.market.tickets.filter((H) => H.book.session === K.session && H.ticket.market === D.id) : [];
    }
    function P(D) {
      return D.market?.options.find((K) => K.id === D.ticket.option)?.label ?? D.ticket.option;
    }
    function V(D) {
      return `${D.book.packName} · ${D.market?.q ?? D.ticket.market} · ${P(D)}`;
    }
    function j(D) {
      const K = D.ticket, H = D.res?.stamp;
      return H ? H === "win" ? `押 ${n(K.stake)} · ${s(K.odds)} · 兑 ${n(Ta(K.stake, K.odds))}` : H === "lose" ? `押 ${n(K.stake)} · ${s(K.odds)}` : `押 ${n(K.stake)} · 原数退还` : `押 ${n(K.stake)} · ${s(K.odds)} · 待开奖`;
    }
    const z = { win: "兑", lose: "废", refund: "退" }, I = G(() => f.market.tables.map((D) => An(D)).filter((D) => !!D)), ee = /* @__PURE__ */ de(""), Z = G(() => ee.value ? An(ee.value) : void 0), B = /* @__PURE__ */ de(""), b = /* @__PURE__ */ de(null), m = /* @__PURE__ */ de(!1), g = /* @__PURE__ */ de(""), O = /* @__PURE__ */ de(null);
    let ae = null;
    function re(D) {
      if (ee.value === D) {
        ee.value = "";
        return;
      }
      ee.value = D;
      const K = An(D);
      B.value = K && K.bets.length === 1 ? K.bets[0].id : "", O.value = null;
    }
    const ze = G(() => (Z.value?.bets ?? []).filter((D) => !/^[nd]\d+$/.test(D.id))), ge = G(() => (Z.value?.bets ?? []).filter((D) => /^[nd]\d+$/.test(D.id))), He = G(() => (f.tick, Za(typeof b.value == "number" ? b.value : 0)));
    function Qe() {
      try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      } catch {
        return !1;
      }
    }
    function Ge(D, K) {
      return D === "bell" ? `${K[0]}下` : D === "door" ? `${K[0]}号门` : D === "lot" ? `第${K[0]}支` : `${K[0]} : ${K[1]}`;
    }
    function rn() {
      const D = Z.value, K = b.value;
      if (!D || !B.value || typeof K != "number" || m.value) return;
      const H = og(D.id, B.value, K);
      if (H.error || !H.outcome) {
        Ee("warning", H.error ?? "不能下注");
        return;
      }
      const pe = { ...H.outcome, stake: K };
      if (O.value = null, Qe()) {
        g.value = Ge(D.id, pe.faces), O.value = pe;
        return;
      }
      m.value = !0;
      const Qn = D.id === "bell" ? 12 : D.id === "door" ? 20 : D.id === "lot" ? 3 : 13, _t = () => 1 + Math.floor(Math.random() * Qn);
      ae = setInterval(() => g.value = Ge(D.id, [_t(), _t()]), 80), setTimeout(() => {
        ae && clearInterval(ae), ae = null, g.value = Ge(D.id, pe.faces), m.value = !1, O.value = pe;
      }, 1200);
    }
    const Ft = G(() => {
      const D = O.value;
      return D ? `结果：${D.result}。${D.win ? `赢 ${n(D.payout)}` : `输 ${n(D.stake)}`}` : "";
    });
    return al(() => {
      ae && clearInterval(ae);
    }), (D, K) => (v(), k("div", xx, [
      A("nav", yx, [
        A("button", {
          class: te({ on: t.value === "book" }),
          onClick: K[0] || (K[0] = (H) => t.value = "book")
        }, "盘口", 2),
        A("button", {
          class: te({ on: t.value === "tickets" }),
          onClick: K[1] || (K[1] = (H) => t.value = "tickets")
        }, S(i.value ? `票夹 · ${i.value}` : "票夹"), 3),
        A("button", {
          class: te({ on: t.value === "casino" }),
          onClick: K[2] || (K[2] = (H) => t.value = "casino")
        }, "赌坊", 2)
      ]),
      t.value === "book" ? (v(), k(X, { key: 0 }, [
        A("div", bx, S(a.value), 1),
        (v(!0), k(X, null, fe(o.value?.markets ?? [], (H) => (v(), k("div", {
          key: H.id,
          class: "rlzc-card rlzc-mk-card"
        }, [
          A("div", vx, [
            A("span", kx, S(c[H.kind]), 1),
            Ne(S(H.q), 1)
          ]),
          A("div", wx, [
            (v(!0), k(X, null, fe(H.options, (pe) => (v(), k("button", {
              key: pe.id,
              class: te(["rlzc-mk-opt", { on: u.value[H.id] === pe.id }]),
              disabled: l.value || !!T(f).market.results[H.id],
              onClick: (Qn) => h(H, pe.id)
            }, [
              A("span", null, S(pe.label), 1),
              A("b", null, S(s(pe.odds)), 1)
            ], 10, _x))), 128))
          ]),
          u.value[H.id] && !l.value ? (v(), k(X, { key: 0 }, [
            A("div", zx, [
              at(A("input", {
                "onUpdate:modelValue": (pe) => d.value[H.id] = pe,
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 8, $x), [
                [
                  St,
                  d.value[H.id],
                  void 0,
                  { number: !0 }
                ]
              ]),
              A("button", {
                class: "rlzc-btn",
                disabled: typeof d.value[H.id] != "number",
                onClick: (pe) => w(H)
              }, "下注", 8, Sx)
            ]),
            A("p", Ex, "单注上限 " + S(n(y(H).cap)) + "（" + S(r.value) + "级）", 1),
            y(H).belowKill ? (v(), k("p", Cx, "押完余额低于斩杀线")) : U("", !0)
          ], 64)) : U("", !0),
          _(H).length ? (v(), k("ul", Mx, [
            (v(!0), k(X, null, fe(_(H), (pe) => (v(), k("li", {
              key: pe.ticket.id
            }, S(P(pe)) + " · " + S(j(pe)), 1))), 128))
          ])) : U("", !0)
        ]))), 128))
      ], 64)) : t.value === "tickets" ? (v(), k("div", Ix, [
        T(f).market.tickets.length ? (v(), k("ul", Tx, [
          (v(!0), k(X, null, fe(T(f).market.tickets, (H) => (v(), k("li", {
            key: H.ticket.id,
            class: "rlzc-tk"
          }, [
            A("div", Nx, [
              A("span", Px, S(V(H)), 1),
              A("small", null, S(j(H)), 1)
            ]),
            A("span", {
              class: te(["rlzc-stamp", H.res ? H.res.stamp : "pending"])
            }, S(H.res ? z[H.res.stamp] : "待"), 3)
          ]))), 128))
        ])) : (v(), k("p", jx, "还没有赌票。"))
      ])) : (v(), k(X, { key: 2 }, [
        T(f).market.casinoOpen ? (v(), k(X, { key: 1 }, [
          K[4] || (K[4] = A("p", { class: "rlzc-hint" }, "今晚开两张桌，回到回廊换一批。", -1)),
          A("div", Rx, [
            (v(!0), k(X, null, fe(I.value, (H) => (v(), k("button", {
              key: H.id,
              class: te(["rlzc-card rlzc-cs-table", { on: ee.value === H.id }]),
              onClick: (pe) => re(H.id)
            }, [
              A("b", null, S(H.name), 1),
              A("small", null, S(H.desc), 1)
            ], 10, Fx))), 128))
          ]),
          Z.value ? (v(), k("div", Ox, [
            A("h4", null, S(Z.value.name), 1),
            ze.value.length ? (v(), k("div", Lx, [
              (v(!0), k(X, null, fe(ze.value, (H) => (v(), k("button", {
                key: H.id,
                class: te({ on: B.value === H.id }),
                onClick: (pe) => B.value = H.id
              }, S(H.label), 11, Bx))), 128))
            ])) : U("", !0),
            ge.value.length ? (v(), k("div", {
              key: 1,
              class: te(["rlzc-cs-grid", Z.value.id])
            }, [
              (v(!0), k(X, null, fe(ge.value, (H) => (v(), k("button", {
                key: H.id,
                class: te({ on: B.value === H.id }),
                onClick: (pe) => B.value = H.id
              }, S(H.label), 11, Vx))), 128))
            ], 2)) : U("", !0),
            A("div", Ux, [
              at(A("input", {
                "onUpdate:modelValue": K[3] || (K[3] = (H) => b.value = H),
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 512), [
                [
                  St,
                  b.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              A("button", {
                class: "rlzc-btn",
                disabled: !B.value || typeof b.value != "number" || m.value,
                onClick: rn
              }, "开", 8, Wx)
            ]),
            A("p", Hx, "单注上限 " + S(n(He.value.cap)) + "（" + S(r.value) + "级）", 1),
            He.value.belowKill ? (v(), k("p", Gx, "押完余额低于斩杀线")) : U("", !0),
            m.value || O.value ? (v(), k("div", {
              key: 3,
              class: te(["rlzc-cs-face", { rolling: m.value }])
            }, S(g.value || ""), 3)) : U("", !0),
            O.value ? (v(), k("p", {
              key: 4,
              class: te(["rlzc-cs-result", O.value.win ? "win" : "lose"])
            }, S(Ft.value), 3)) : U("", !0)
          ])) : U("", !0)
        ], 64)) : (v(), k("div", Dx, "赌坊只在回廊营业。"))
      ], 64))
    ]));
  }
}), qx = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, Yx = ["aria-expanded"], Jx = ["data-kind"], Zx = {
  key: 0,
  class: "rlzc-collapse-body"
}, Xx = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, Qx = {
  key: 0,
  class: "rlzc-preset-area"
}, e0 = { class: "rlzc-preset-row" }, t0 = ["value"], n0 = {
  key: 0,
  value: ""
}, s0 = ["value"], i0 = ["disabled"], r0 = ["disabled"], o0 = { class: "rlzc-stacked-field" }, l0 = ["value"], a0 = { class: "rlzc-stacked-field" }, c0 = { class: "rlzc-key-wrap" }, u0 = ["type", "value"], A0 = ["aria-label"], d0 = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, f0 = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, p0 = { class: "rlzc-stacked-field" }, h0 = ["value"], m0 = ["value"], g0 = ["value"], x0 = ["value"], y0 = { class: "rlzc-conn-row" }, b0 = ["data-kind"], v0 = ["disabled"], k0 = {
  key: 1,
  class: "rlzc-option-list"
}, w0 = { class: "rlzc-option-row" }, _0 = ["aria-checked"], z0 = { class: "rlzc-option-row" }, $0 = ["aria-checked"], S0 = { class: "rlzc-option-row rlzc-option-row-timeout" }, E0 = { class: "rlzc-timeout-wrap" }, C0 = ["value"], M0 = /* @__PURE__ */ Ue({
  __name: "SubApiCard",
  setup(e) {
    const t = G(() => f.settings.subApi), n = G(() => t.value.presets.find((B) => B.id === t.value.presetId) ?? null), s = /* @__PURE__ */ de([]), i = /* @__PURE__ */ de(!1), r = /* @__PURE__ */ de(!1), o = /* @__PURE__ */ de("none"), l = /* @__PURE__ */ de(""), a = G(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : o.value === "ok" ? { kind: "on", text: "已连接" } : o.value === "fail" ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" }), c = G(() => f.settings.cardCollapsed.subApi);
    function u() {
      f.settings.cardCollapsed.subApi = !f.settings.cardCollapsed.subApi, h();
    }
    const d = G(() => o.value === "ok" ? `已连接 · 共 ${s.value.length} 个模型` : o.value === "fail" ? `连接失败：${l.value}` : "未测试");
    function h() {
      ve();
    }
    function y(B) {
      t.value.source = B, o.value = "none", h();
    }
    function w() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function _() {
      const B = (await io("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!B) return;
      const b = { id: w(), name: B, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, b], t.value.presetId = b.id, s.value = [], o.value = "none", h();
    }
    async function P() {
      if (!n.value) return;
      const B = (await io("改名为：", n.value.name))?.trim();
      B && (n.value.name = B, h());
    }
    async function V() {
      n.value && await Dt(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((B) => B.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", s.value = [], o.value = "none", h());
    }
    function j(B) {
      t.value.presetId = B.target.value, s.value = [], o.value = "none", h();
    }
    function z(B, b) {
      n.value && (n.value[B] = b.target.value.trim(), h());
    }
    async function I() {
      if (n.value) {
        r.value = !0, o.value = "none", l.value = "";
        try {
          const B = await Fp(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          s.value = B.models, !n.value.model && B.models.length && (n.value.model = B.models[0], h()), o.value = "ok";
        } catch (B) {
          o.value = "fail", l.value = Gs(B), s.value = await Aa(n.value).catch(() => []);
        } finally {
          r.value = !1;
        }
      }
    }
    function ee(B) {
      const b = Math.floor(Number(B.target.value));
      if (!Number.isFinite(b) || b < 5) {
        Ee("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = b, h();
    }
    function Z(B, b) {
      t.value[B] = b, h();
    }
    return (B, b) => (v(), k("div", qx, [
      A("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !c.value,
        onClick: u
      }, [
        b[9] || (b[9] = A("h4", null, "副本事件检测", -1)),
        A("span", {
          class: "rlzc-dot",
          "data-kind": a.value.kind
        }, S(a.value.text), 9, Jx),
        A("span", {
          class: te(["rlzc-collapse-arrow", { open: !c.value }])
        }, "▸", 2)
      ], 8, Yx),
      c.value ? U("", !0) : (v(), k("div", Zx, [
        b[24] || (b[24] = A("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        A("div", Xx, [
          A("button", {
            class: te({ on: t.value.source === "off" }),
            onClick: b[0] || (b[0] = (m) => y("off"))
          }, "关闭", 2),
          A("button", {
            class: te({ on: t.value.source === "main" }),
            onClick: b[1] || (b[1] = (m) => y("main"))
          }, "跟随主API", 2),
          A("button", {
            class: te({ on: t.value.source === "preset" }),
            onClick: b[2] || (b[2] = (m) => y("preset"))
          }, "自设API", 2)
        ]),
        t.value.source === "preset" ? (v(), k("div", Qx, [
          A("div", e0, [
            A("select", {
              class: "rlzc-input",
              value: t.value.presetId,
              onChange: j
            }, [
              t.value.presets.length ? U("", !0) : (v(), k("option", n0, "还没有保存的接口")),
              (v(!0), k(X, null, fe(t.value.presets, (m) => (v(), k("option", {
                key: m.id,
                value: m.id
              }, S(m.name), 9, s0))), 128))
            ], 40, t0),
            A("button", {
              class: "rlzc-icon-btn",
              "aria-label": "新建接口",
              type: "button",
              onClick: _
            }, [...b[10] || (b[10] = [
              A("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "aria-hidden": "true"
              }, [
                A("path", { d: "M8 3v10M3 8h10" })
              ], -1)
            ])]),
            A("button", {
              class: "rlzc-icon-btn",
              "aria-label": "改名",
              type: "button",
              disabled: !n.value,
              onClick: P
            }, [...b[11] || (b[11] = [
              A("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "aria-hidden": "true"
              }, [
                A("path", { d: "M11 2L14 5 5 14H2v-3L11 2z" })
              ], -1)
            ])], 8, i0),
            A("button", {
              class: "rlzc-icon-btn rlzc-danger",
              "aria-label": "删除接口",
              type: "button",
              disabled: !n.value,
              onClick: V
            }, [...b[12] || (b[12] = [
              A("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "aria-hidden": "true"
              }, [
                A("path", { d: "M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10" })
              ], -1)
            ])], 8, r0)
          ]),
          n.value ? (v(), k(X, { key: 0 }, [
            A("div", o0, [
              b[13] || (b[13] = A("label", { class: "rlzc-label" }, "地址", -1)),
              A("input", {
                class: "rlzc-input",
                value: n.value.url,
                placeholder: "https://…/v1",
                onChange: b[3] || (b[3] = (m) => z("url", m))
              }, null, 40, l0)
            ]),
            A("div", a0, [
              b[16] || (b[16] = A("label", { class: "rlzc-label" }, "密钥", -1)),
              A("div", c0, [
                A("input", {
                  class: "rlzc-input",
                  type: i.value ? "text" : "password",
                  value: n.value.key,
                  autocomplete: "off",
                  onChange: b[4] || (b[4] = (m) => z("key", m))
                }, null, 40, u0),
                A("button", {
                  class: "rlzc-eye-btn",
                  type: "button",
                  "aria-label": i.value ? "隐藏密钥" : "显示密钥",
                  onClick: b[5] || (b[5] = (m) => i.value = !i.value)
                }, [
                  i.value ? (v(), k("svg", d0, [...b[14] || (b[14] = [
                    A("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    A("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1),
                    A("path", { d: "M2 2l12 12" }, null, -1)
                  ])])) : (v(), k("svg", f0, [...b[15] || (b[15] = [
                    A("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    A("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1)
                  ])]))
                ], 8, A0)
              ])
            ]),
            A("div", p0, [
              b[17] || (b[17] = A("label", { class: "rlzc-label" }, "模型", -1)),
              s.value.length ? (v(), k("select", {
                key: 0,
                class: "rlzc-input",
                value: n.value.model,
                onChange: b[6] || (b[6] = (m) => z("model", m))
              }, [
                s.value.includes(n.value.model) ? U("", !0) : (v(), k("option", {
                  key: 0,
                  value: n.value.model
                }, S(n.value.model || "请选择…"), 9, m0)),
                (v(!0), k(X, null, fe(s.value, (m) => (v(), k("option", {
                  key: m,
                  value: m
                }, S(m), 9, g0))), 128))
              ], 40, h0)) : (v(), k("input", {
                key: 1,
                class: "rlzc-input rlzc-input-disabled",
                value: n.value.model ? n.value.model : "先测试连接",
                readonly: "",
                tabindex: "-1"
              }, null, 8, x0))
            ]),
            A("div", y0, [
              A("span", {
                class: "rlzc-dot",
                "data-kind": o.value === "ok" ? "on" : o.value === "fail" ? "warn" : "off"
              }, S(d.value), 9, b0),
              A("button", {
                class: "rlzc-btn ghost",
                disabled: r.value || !n.value.url,
                onClick: I
              }, "测试连接", 8, v0)
            ])
          ], 64)) : U("", !0)
        ])) : U("", !0),
        t.value.source !== "off" ? (v(), k("div", k0, [
          A("div", w0, [
            b[19] || (b[19] = A("div", { class: "rlzc-option-label" }, [
              A("span", null, "省钱模式"),
              A("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            A("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: te(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: b[7] || (b[7] = (m) => Z("saveMode", !t.value.saveMode))
            }, [...b[18] || (b[18] = [
              A("span", null, null, -1)
            ])], 10, _0)
          ]),
          A("div", z0, [
            b[21] || (b[21] = A("div", { class: "rlzc-option-label" }, [
              A("span", null, "等检测完再写下一轮"),
              A("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            A("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: te(["rlzc-toggle", { on: t.value.wait }]),
              onClick: b[8] || (b[8] = (m) => Z("wait", !t.value.wait))
            }, [...b[20] || (b[20] = [
              A("span", null, null, -1)
            ])], 10, $0)
          ]),
          A("div", S0, [
            b[23] || (b[23] = A("span", null, "超时", -1)),
            A("div", E0, [
              A("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: ee
              }, null, 40, C0),
              b[22] || (b[22] = A("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : U("", !0)
      ]))
    ]));
  }
}), I0 = { class: "rlzc-card rlzc-collapsible rlzc-live-card" }, T0 = ["aria-expanded"], N0 = {
  key: 0,
  class: "rlzc-dot",
  "data-kind": "on"
}, P0 = {
  key: 0,
  class: "rlzc-collapse-body"
}, j0 = { class: "rlzc-option-list" }, D0 = { class: "rlzc-option-row rlzc-option-row-stack" }, R0 = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "弹幕来源"
}, F0 = ["disabled"], O0 = {
  key: 0,
  class: "rlzc-hint"
}, L0 = {
  key: 0,
  class: "rlzc-option-row"
}, B0 = { class: "rlzc-timeout-wrap" }, V0 = ["value"], U0 = { class: "rlzc-option-row" }, W0 = ["aria-checked"], H0 = /* @__PURE__ */ Ue({
  __name: "LiveCard",
  setup(e) {
    const t = G(() => f.settings.live), n = G(() => f.settings.subApi.source !== "off"), s = G(() => n.value ? t.value.source : "local"), i = G(() => (f.tick, f.session, xr(/* @__PURE__ */ new Set()).on)), r = G(() => f.settings.cardCollapsed.live);
    function o() {
      f.settings.cardCollapsed.live = !f.settings.cardCollapsed.live, ve();
    }
    function l(u) {
      u === "ai" && !n.value || (t.value.source = u, ve());
    }
    function a(u) {
      const d = Math.floor(Number(u.target.value));
      t.value.freq = Number.isFinite(d) ? Math.max(1, Math.min(10, d)) : 3, u.target.value = String(t.value.freq), ve();
    }
    function c(u) {
      t.value.injectToAI = u, ve();
    }
    return (u, d) => (v(), k("div", I0, [
      A("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !r.value,
        onClick: o
      }, [
        d[3] || (d[3] = A("h4", null, "直播", -1)),
        i.value ? (v(), k("span", N0, "直播中")) : U("", !0),
        A("span", {
          class: te(["rlzc-collapse-arrow", { open: !r.value }])
        }, "▸", 2)
      ], 8, T0),
      r.value ? U("", !0) : (v(), k("div", P0, [
        d[10] || (d[10] = A("p", { class: "rlzc-hint" }, "开播后有观众弹幕和打赏，打赏计入积分。画面在状态栏的直播页。", -1)),
        A("div", j0, [
          A("div", D0, [
            d[4] || (d[4] = A("span", { class: "rlzc-option-label" }, [
              A("span", null, "弹幕来源")
            ], -1)),
            A("div", R0, [
              A("button", {
                class: te({ on: s.value === "local" }),
                onClick: d[0] || (d[0] = (h) => l("local"))
              }, "本地", 2),
              A("button", {
                class: te({ on: s.value === "ai" }),
                disabled: !n.value,
                onClick: d[1] || (d[1] = (h) => l("ai"))
              }, "本地+AI", 10, F0)
            ]),
            n.value ? U("", !0) : (v(), k("small", O0, "需先在副本事件检测里选接口"))
          ]),
          s.value === "ai" ? (v(), k("div", L0, [
            d[7] || (d[7] = A("div", { class: "rlzc-option-label" }, [
              A("span", null, "生成频率"),
              A("small", null, "关键事件时另加一次")
            ], -1)),
            A("div", B0, [
              d[5] || (d[5] = A("span", { class: "rlzc-unit" }, "每", -1)),
              A("input", {
                type: "number",
                min: "1",
                max: "10",
                class: "rlzc-input rlzc-input-num",
                value: t.value.freq,
                onChange: a
              }, null, 40, V0),
              d[6] || (d[6] = A("span", { class: "rlzc-unit" }, "轮", -1))
            ])
          ])) : U("", !0),
          A("div", U0, [
            d[9] || (d[9] = A("div", { class: "rlzc-option-label" }, [
              A("span", null, "弹幕传给AI"),
              A("small", null, "主AI能看到最近弹幕")
            ], -1)),
            A("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.injectToAI ? "true" : "false",
              class: te(["rlzc-toggle", { on: t.value.injectToAI }]),
              onClick: d[2] || (d[2] = (h) => c(!t.value.injectToAI))
            }, [...d[8] || (d[8] = [
              A("span", null, null, -1)
            ])], 10, W0)
          ])
        ])
      ]))
    ]));
  }
}), G0 = { class: "rlzc-settings" }, K0 = { class: "rlzc-card" }, q0 = ["value"], Y0 = { class: "rlzc-card rlzc-collapsible" }, J0 = ["aria-expanded"], Z0 = {
  key: 0,
  class: "rlzc-collapse-body"
}, X0 = { class: "rlzc-ledger-status" }, Q0 = { class: "rlzc-row" }, e1 = ["placeholder"], t1 = ["disabled"], n1 = { class: "rlzc-row" }, s1 = ["disabled"], i1 = { class: "rlzc-row" }, r1 = { class: "rlzc-seg-group" }, o1 = ["onClick"], l1 = ["disabled"], a1 = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, c1 = { class: "rlzc-card rlzc-collapsible" }, u1 = ["aria-expanded"], A1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, d1 = { class: "rlzc-depth" }, f1 = { class: "rlzc-field" }, p1 = ["value"], h1 = { class: "rlzc-field" }, m1 = ["value"], g1 = { class: "rlzc-field" }, x1 = ["value"], y1 = { class: "rlzc-field" }, b1 = ["value"], v1 = { class: "rlzc-field" }, k1 = ["value"], w1 = { class: "rlzc-card rlzc-collapsible" }, _1 = ["aria-expanded"], z1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, $1 = ["value", "onChange"], S1 = { class: "rlzc-card" }, E1 = {
  key: 0,
  class: "rlzc-list"
}, C1 = ["onClick"], M1 = {
  key: 1,
  class: "rlzc-hint"
}, I1 = {
  key: 2,
  class: "rlzc-errors"
}, T1 = { class: "rlzc-card" }, N1 = { class: "rlzc-check" }, P1 = ["checked"], j1 = { class: "rlzc-check" }, D1 = ["checked"], R1 = /* @__PURE__ */ Ue({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ de([]), n = /* @__PURE__ */ de(null), s = /* @__PURE__ */ de(null), i = /* @__PURE__ */ de(null), r = /* @__PURE__ */ de(""), o = /* @__PURE__ */ de(""), l = /* @__PURE__ */ de(""), a = ["D", "C", "B", "A", "S"], c = G(() => vt(Y())), u = G(() => nn(c.value.value, f.ledger)), d = G(() => (f.tick, Zn(Y()))), h = G(() => bt[d.value]), y = G(() => qn(c.value.value, f.ledger, h.value));
    function w() {
      s.value !== null && ($m(s.value), s.value = null);
    }
    function _() {
      i.value !== null && (zm(i.value, r.value || "手动"), i.value = null, r.value = "");
    }
    function P() {
      !o.value && !l.value || (Sm(o.value || void 0, l.value || void 0), o.value = "", l.value = "", Ee("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function V(b, m) {
      const g = Math.max(0, Math.min(1e4, Math.floor(Number(m.target.value) || 0)));
      f.settings.depths[b] = g, ve();
    }
    async function j(b) {
      const m = b.target, g = m.files?.[0];
      m.value = "", g && (t.value = vm(await g.text()), t.value.length || Ee("success", `已导入副本包：${g.name}`));
    }
    async function z(b, m) {
      await Dt(`确定删除自定义副本包《${m}》吗？`) && km(b);
    }
    function I(b, m) {
      const g = Math.floor(Number(m.target.value));
      !Number.isFinite(g) || g < 1 || (f.settings.genericCaps = { ...f.settings.genericCaps, [b]: g }, ve());
    }
    function ee(b) {
      Wm(b.target.value);
    }
    function Z(b, m) {
      f.settings[b] = m.target.checked, ve();
    }
    function B(b) {
      f.settings.cardCollapsed[b] = !f.settings.cardCollapsed[b], ve();
    }
    return (b, m) => (v(), k(X, null, [
      A("div", G0, [
        A("div", K0, [
          m[16] || (m[16] = A("h4", null, "副本信息显示位置", -1)),
          A("select", {
            class: "rlzc-input",
            value: T(f).settings.panelDisplay,
            onChange: ee
          }, [...m[15] || (m[15] = [
            A("option", { value: "panel" }, "扩展面板（默认）", -1),
            A("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, q0),
          m[17] || (m[17] = A("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        A("div", Y0, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !T(f).settings.cardCollapsed.accountFix,
            onClick: m[0] || (m[0] = (g) => B("accountFix"))
          }, [
            m[18] || (m[18] = A("h4", null, "账户校正", -1)),
            A("span", {
              class: te(["rlzc-collapse-arrow", { open: !T(f).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, J0),
          T(f).settings.cardCollapsed.accountFix ? U("", !0) : (v(), k("div", Z0, [
            m[20] || (m[20] = A("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            A("div", X0, [
              A("span", null, [
                m[19] || (m[19] = Ne("当前余额：", -1)),
                A("b", null, S(u.value), 1)
              ]),
              A("span", null, S(y.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            m[21] || (m[21] = A("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            A("div", Q0, [
              at(A("input", {
                "onUpdate:modelValue": m[1] || (m[1] = (g) => s.value = g),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${c.value.value}`
              }, null, 8, e1), [
                [
                  St,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              A("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: w
              }, "保存", 8, t1)
            ]),
            m[22] || (m[22] = A("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            A("div", n1, [
              at(A("input", {
                "onUpdate:modelValue": m[2] || (m[2] = (g) => i.value = g),
                type: "number",
                class: "rlzc-input",
                placeholder: "金额（正/负）"
              }, null, 512), [
                [
                  St,
                  i.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              at(A("input", {
                "onUpdate:modelValue": m[3] || (m[3] = (g) => r.value = g),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [St, r.value]
              ]),
              A("button", {
                class: "rlzc-btn small",
                disabled: i.value === null,
                onClick: _
              }, "追加", 8, s1)
            ]),
            m[23] || (m[23] = A("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            m[24] || (m[24] = A("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            A("div", i1, [
              A("div", r1, [
                (v(), k(X, null, fe(a, (g) => A("button", {
                  key: g,
                  class: te(["rlzc-seg", { active: o.value === g }]),
                  onClick: (O) => o.value = o.value === g ? "" : g
                }, S(g), 11, o1)), 64))
              ]),
              at(A("input", {
                "onUpdate:modelValue": m[4] || (m[4] = (g) => l.value = g),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [St, l.value]
              ]),
              A("button", {
                class: "rlzc-btn small",
                disabled: !o.value && !l.value,
                onClick: P
              }, "校正", 8, l1)
            ]),
            T(f).ledger.length === 0 && c.value.source === "默认值" ? (v(), k("p", a1, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : U("", !0)
          ]))
        ]),
        A("div", c1, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !T(f).settings.cardCollapsed.depths,
            onClick: m[5] || (m[5] = (g) => B("depths"))
          }, [
            m[25] || (m[25] = A("h4", null, "注入深度", -1)),
            A("span", {
              class: te(["rlzc-collapse-arrow", { open: !T(f).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, u1),
          T(f).settings.cardCollapsed.depths ? U("", !0) : (v(), k("div", A1, [
            m[31] || (m[31] = A("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            A("div", d1, [
              A("label", f1, [
                m[26] || (m[26] = A("span", null, [
                  Ne("副本暗号"),
                  A("small", null, "触发世界书的副本条目")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: T(f).settings.depths.token,
                  onChange: m[6] || (m[6] = (g) => V("token", g))
                }, null, 40, p1)
              ]),
              A("label", h1, [
                m[27] || (m[27] = A("span", null, [
                  Ne("副本进度"),
                  A("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: T(f).settings.depths.progress,
                  onChange: m[7] || (m[7] = (g) => V("progress", g))
                }, null, 40, m1)
              ]),
              A("label", g1, [
                m[28] || (m[28] = A("span", null, [
                  Ne("本轮指令"),
                  A("small", null, "本轮事件与时限写法")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: T(f).settings.depths.turn,
                  onChange: m[8] || (m[8] = (g) => V("turn", g))
                }, null, 40, x1)
              ]),
              A("label", y1, [
                m[29] || (m[29] = A("span", null, [
                  Ne("账户"),
                  A("small", null, "积分余额与清算状态")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: T(f).settings.depths.ledger,
                  onChange: m[9] || (m[9] = (g) => V("ledger", g))
                }, null, 40, b1)
              ]),
              A("label", v1, [
                m[30] || (m[30] = A("span", null, [
                  Ne("直播"),
                  A("small", null, "在看人数与最近弹幕")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: T(f).settings.depths.live,
                  onChange: m[10] || (m[10] = (g) => V("live", g))
                }, null, 40, k1)
              ])
            ])
          ]))
        ]),
        Be(M0),
        Be(H0),
        A("div", w1, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !T(f).settings.cardCollapsed.genericCaps,
            onClick: m[11] || (m[11] = (g) => B("genericCaps"))
          }, [
            m[32] || (m[32] = A("h4", null, "通用副本默认轮数上限", -1)),
            A("span", {
              class: te(["rlzc-collapse-arrow", { open: !T(f).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, _1),
          T(f).settings.cardCollapsed.genericCaps ? U("", !0) : (v(), k("div", z1, [
            m[33] || (m[33] = A("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (v(), k(X, null, fe(a, (g) => A("label", {
              key: g,
              class: "rlzc-field"
            }, [
              A("span", null, S(g) + " 级", 1),
              A("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: T(f).settings.genericCaps[g],
                onChange: (O) => I(g, O)
              }, null, 40, $1)
            ])), 64))
          ]))
        ]),
        A("div", S1, [
          m[34] || (m[34] = A("h4", null, "自定义副本包", -1)),
          T(f).settings.customPacks.length ? (v(), k("ul", E1, [
            (v(!0), k(X, null, fe(T(f).settings.customPacks, (g) => (v(), k("li", {
              key: g.id
            }, [
              A("span", null, [
                Ne(S(g.level) + "｜" + S(g.name) + " ", 1),
                A("small", null, "v" + S(g.version), 1)
              ]),
              A("button", {
                class: "rlzc-btn ghost small",
                onClick: (O) => z(g.id, g.name)
              }, "删除", 8, C1)
            ]))), 128))
          ])) : (v(), k("p", M1, "还没有导入自定义副本包。")),
          A("input", {
            ref_key: "fileInput",
            ref: n,
            type: "file",
            accept: ".json,application/json",
            hidden: "",
            onChange: j
          }, null, 544),
          A("button", {
            class: "rlzc-btn",
            onClick: m[12] || (m[12] = (g) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (v(), k("ul", I1, [
            (v(!0), k(X, null, fe(t.value, (g, O) => (v(), k("li", { key: O }, S(g), 1))), 128))
          ])) : U("", !0)
        ]),
        A("div", T1, [
          m[37] || (m[37] = A("h4", null, "其他", -1)),
          A("label", N1, [
            A("input", {
              type: "checkbox",
              checked: T(f).settings.showBall,
              onChange: m[13] || (m[13] = (g) => Z("showBall", g))
            }, null, 40, P1),
            m[35] || (m[35] = Ne("显示悬浮球", -1))
          ]),
          A("label", j1, [
            A("input", {
              type: "checkbox",
              checked: T(f).settings.debug,
              onChange: m[14] || (m[14] = (g) => Z("debug", g))
            }, null, 40, D1),
            m[36] || (m[36] = Ne("调试模式", -1))
          ])
        ])
      ]),
      m[38] || (m[38] = A("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), F1 = { class: "rlzc-debug" }, O1 = {
  key: 0,
  class: "rlzc-note"
}, L1 = {
  key: 0,
  class: "rlzc-note"
}, B1 = {
  key: 1,
  class: "rlzc-note"
}, V1 = {
  key: 2,
  class: "rlzc-card"
}, U1 = { class: "rlzc-row" }, W1 = ["disabled"], H1 = ["value"], G1 = ["disabled"], K1 = { class: "rlzc-row" }, q1 = ["disabled"], Y1 = ["disabled"], J1 = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, Z1 = ["aria-expanded"], X1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, Q1 = ["onUpdate:modelValue", "disabled"], ey = ["disabled"], ty = { class: "rlzc-card rlzc-collapsible" }, ny = ["aria-expanded"], sy = {
  key: 0,
  class: "rlzc-collapse-status"
}, iy = {
  key: 0,
  class: "rlzc-collapse-body"
}, ry = {
  key: 0,
  class: "rlzc-hint"
}, oy = { class: "rlzc-hint" }, ly = { class: "rlzc-list rlzc-warns" }, ay = { class: "rlzc-card rlzc-collapsible" }, cy = ["aria-expanded"], uy = {
  key: 0,
  class: "rlzc-collapse-status"
}, Ay = {
  key: 0,
  class: "rlzc-collapse-body"
}, dy = {
  key: 0,
  class: "rlzc-list"
}, fy = ["disabled", "onClick"], py = {
  key: 1,
  class: "rlzc-hint"
}, hy = {
  key: 4,
  class: "rlzc-card"
}, my = { class: "rlzc-pre" }, gy = {
  key: 0,
  class: "rlzc-pre"
}, xy = {
  key: 5,
  class: "rlzc-card"
}, yy = { class: "rlzc-table" }, by = { class: "rlzc-hint" }, vy = { class: "rlzc-hint" }, ky = {
  key: 0,
  class: "rlzc-table"
}, wy = { class: "rlzc-card rlzc-collapsible" }, _y = ["aria-expanded"], zy = {
  key: 0,
  class: "rlzc-collapse-body"
}, $y = { class: "rlzc-pre" }, Sy = { class: "rlzc-card" }, Ey = { class: "rlzc-pre" }, Cy = { class: "rlzc-card" }, My = { class: "rlzc-pre" }, Iy = { class: "rlzc-card" }, Ty = { class: "rlzc-table" }, Ny = {
  key: 0,
  class: "rlzc-warn-text"
}, Py = { key: 1 }, jy = ["disabled"], Dy = {
  key: 2,
  class: "rlzc-card"
}, Ry = { class: "rlzc-table" }, Fy = /* @__PURE__ */ Ue({
  __name: "DebugTab",
  setup(e) {
    const t = G(() => f.settings.debug), n = /* @__PURE__ */ de(""), s = /* @__PURE__ */ de(null), i = /* @__PURE__ */ Fs({});
    Ls(
      () => [f.tick, f.pack?.id],
      () => {
        for (const m of Object.keys(i)) delete i[m];
        const b = Oa() ?? {};
        for (const m of f.pack?.roles ?? []) i[m] = b[m] ?? "";
      },
      { immediate: !0 }
    );
    const r = G(() => {
      f.tick;
      const b = Y(), m = [], g = f.session?.entryIndex ?? 0;
      for (let O = g; O < b.length; O++) {
        const ae = b[O]?.extra?.rlzc;
        ae && m.push({ index: O, snap: ae });
      }
      return m.reverse().slice(0, 60);
    }), o = G(() => {
      const b = new Set((f.audit?.warnings ?? []).filter((O) => O.kind === "limit" || O.kind === "eventMissed").map((O) => O.index)), m = Y(), g = f.session?.entryIndex ?? 0;
      for (let O = g; O < m.length; O++)
        m[O]?.extra?.rlzc?.ledgerMismatch && b.add(O);
      return b;
    }), l = G(() => {
      if (f.tick, !f.session || !f.pack || !f.progress) return null;
      const b = Y(), m = Ks(b, f.progress.entryIndex);
      let g = null;
      for (let O = b.length - 1; O >= f.progress.entryIndex; O--) {
        const ae = b[O]?.extra?.rlzc?.sub;
        if (ae) {
          g = ae;
          break;
        }
      }
      return {
        text: m ? sa(f.pack, m.state) : "",
        state: m?.state ?? null,
        record: g
      };
    }), a = G(() => {
      f.tick;
      const b = Y(), m = [];
      for (let g = b.length - 1; g >= 0 && m.length < 60; g--) {
        const O = Rt(b[g]);
        O && m.push({ index: g, rec: O });
      }
      return m;
    });
    function c(b) {
      const m = b.feed.filter((g) => g.t === "tip").map((g) => `${g.name} ${g.amount}→${g.net}`);
      return b.revoke && m.push(`撤回 −${b.revoke}`), m.join("；");
    }
    function u(b) {
      const m = b.ai;
      return m ? m.pending ? "生成中…" : m.ok ? `${m.count}条（${m.ms}ms）` : `失败：${m.error ?? ""}` : "";
    }
    const d = { done: "✓", missed: "✗", void: "–" };
    function h(b) {
      if (!b.sub && !b.skippedEvents?.length) return "";
      const m = [];
      b.sub?.skipped && m.push(`未更新（${b.sub.error ?? ""}）`);
      for (const g of b.sub?.events ?? []) m.push(`${g.id}${d[g.status]}`);
      for (const g of b.skippedEvents ?? []) m.push(`跳过${g.id}`);
      return b.sub && !b.sub.skipped && !m.length && m.push("已整理"), m.join(" ");
    }
    const y = G(() => {
      if (f.tick, !f.session) return null;
      const b = Fe().books[f.session.id];
      return b ? { book: b, rounds: lg() } : null;
    }), w = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" };
    function _(b, m) {
      return b ? b.kind === "refund" ? `全退（#${b.index}）` : b.kind === "lost" ? `全废（#${b.index}）` : `${m[b.option] ?? b.option}（#${b.index}）` : "待开奖";
    }
    function P(b) {
      return b ? b.status === "pending" ? "出题中…" : b.status === "ok" ? `已出 ${b.count} 题（${b.ms}ms）` : b.status === "late" ? `晚于封盘到达，已丢弃（${b.ms}ms）` : `失败：${b.error ?? ""}` : "事件检测关闭，未出题";
    }
    const V = { ok: "已检测", miss: "没检测", pending: "检测中" }, j = G(() => {
      const b = f.progress;
      if (!b) return null;
      const { perMessage: m, phase: g, next: O, ...ae } = b;
      return {
        phase: g.id + " " + g.name,
        ...ae,
        next: O ? { round: O.round, skipFrom: O.skipFrom, events: O.events.map((re) => re.id) } : null,
        messages: Object.keys(m).length
      };
    });
    function z() {
      n.value && Pm(n.value);
    }
    function I() {
      s.value !== null && s.value >= 0 && jm(s.value);
    }
    function ee() {
      Dm({ ...i });
    }
    const Z = (b) => JSON.stringify(b, null, 2);
    function B(b) {
      f.settings.cardCollapsed[b] = !f.settings.cardCollapsed[b], ve();
    }
    return (b, m) => (v(), k("div", F1, [
      T(f).session ? (v(), k(X, { key: 1 }, [
        t.value ? U("", !0) : (v(), k("p", L1, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        T(f).pack && T(f).session.packVersion !== T(f).pack.version ? (v(), k("p", B1, " 入场时副本包版本为 " + S(T(f).session.packVersion) + "，当前为 " + S(T(f).pack.version) + "。 ", 1)) : U("", !0),
        T(f).pack?.phases.length ? (v(), k("div", V1, [
          m[8] || (m[8] = A("h4", null, "手动修正", -1)),
          A("div", U1, [
            at(A("select", {
              "onUpdate:modelValue": m[0] || (m[0] = (g) => n.value = g),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              m[7] || (m[7] = A("option", { value: "" }, "切换到阶段…", -1)),
              (v(!0), k(X, null, fe(T(f).pack.phases, (g) => (v(), k("option", {
                key: g.id,
                value: g.id
              }, S(g.name), 9, H1))), 128))
            ], 8, W1), [
              [Cl, n.value]
            ]),
            A("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: z
            }, "切换", 8, G1)
          ]),
          A("div", K1, [
            at(A("input", {
              "onUpdate:modelValue": m[1] || (m[1] = (g) => s.value = g),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, q1), [
              [
                St,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            A("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: I
            }, "修正轮次", 8, Y1)
          ])
        ])) : U("", !0),
        T(f).pack?.roles?.length ? (v(), k("div", J1, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !T(f).settings.cardCollapsed.rolesDebug,
            onClick: m[2] || (m[2] = (g) => B("rolesDebug"))
          }, [
            m[9] || (m[9] = A("h4", null, "角色登记", -1)),
            A("span", {
              class: te(["rlzc-collapse-arrow", { open: !T(f).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, Z1),
          T(f).settings.cardCollapsed.rolesDebug ? U("", !0) : (v(), k("div", X1, [
            (v(!0), k(X, null, fe(T(f).pack.roles, (g) => (v(), k("label", {
              key: g,
              class: "rlzc-field"
            }, [
              A("span", null, S(g), 1),
              at(A("input", {
                "onUpdate:modelValue": (O) => i[g] = O,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, Q1), [
                [St, i[g]]
              ])
            ]))), 128)),
            A("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: ee
            }, "保存登记", 8, ey)
          ]))
        ])) : U("", !0),
        A("div", ty, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !T(f).settings.cardCollapsed.auditDebug,
            onClick: m[3] || (m[3] = (g) => B("auditDebug"))
          }, [
            m[10] || (m[10] = A("h4", null, "<副本> 核对", -1)),
            T(f).settings.cardCollapsed.auditDebug ? (v(), k("span", sy, S(T(f).audit?.warnings.length ? "⚠️" : "无"), 1)) : U("", !0),
            A("span", {
              class: te(["rlzc-collapse-arrow", { open: !T(f).settings.cardCollapsed.auditDebug }])
            }, "▸", 2)
          ], 8, ny),
          T(f).settings.cardCollapsed.auditDebug ? U("", !0) : (v(), k("div", iy, [
            T(f).audit?.warnings.length ? (v(), k(X, { key: 1 }, [
              A("p", oy, "共 " + S(T(f).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
              A("ul", ly, [
                (v(!0), k(X, null, fe(T(f).audit.warnings.slice(-30).reverse(), (g, O) => (v(), k("li", { key: O }, [
                  A("span", null, [
                    A("small", null, "#" + S(g.index) + "｜" + S(g.phase) + "第" + S(g.round) + "轮", 1),
                    m[11] || (m[11] = A("br", null, null, -1)),
                    Ne("⚠️ " + S(g.text), 1)
                  ])
                ]))), 128))
              ])
            ], 64)) : (v(), k("p", ry, "没有发现问题。"))
          ]))
        ]),
        A("div", ay, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !T(f).settings.cardCollapsed.manualDebug,
            onClick: m[4] || (m[4] = (g) => B("manualDebug"))
          }, [
            m[12] || (m[12] = A("h4", null, "手动操作记录", -1)),
            T(f).settings.cardCollapsed.manualDebug && T(f).session.manual.length ? (v(), k("span", uy, "×" + S(T(f).session.manual.length), 1)) : U("", !0),
            A("span", {
              class: te(["rlzc-collapse-arrow", { open: !T(f).settings.cardCollapsed.manualDebug }])
            }, "▸", 2)
          ], 8, cy),
          T(f).settings.cardCollapsed.manualDebug ? U("", !0) : (v(), k("div", Ay, [
            T(f).session.manual.length ? (v(), k("ul", dy, [
              (v(!0), k(X, null, fe(T(f).session.manual, (g, O) => (v(), k("li", { key: O }, [
                A("code", null, "#" + S(g.atIndex) + " " + S(g.kind) + " " + S("phase" in g ? g.phase : "") + S("round" in g ? g.round : "") + S("targetPhase" in g ? `${g.targetPhase}:${g.targetRound}` : ""), 1),
                A("button", {
                  class: "rlzc-btn ghost small",
                  disabled: !t.value,
                  onClick: (ae) => T(Rm)(O)
                }, "撤销", 8, fy)
              ]))), 128))
            ])) : (v(), k("p", py, "无"))
          ]))
        ]),
        l.value && (l.value.state || l.value.record) ? (v(), k("details", hy, [
          m[13] || (m[13] = A("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          A("pre", my, S(l.value.text || "（尚无状态）"), 1),
          l.value.record ? (v(), k("pre", gy, S(Z(l.value.record)), 1)) : U("", !0),
          m[14] || (m[14] = A("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : U("", !0),
        y.value ? (v(), k("details", xy, [
          m[20] || (m[20] = A("summary", null, "黑市：盘口赔率与检测判定", -1)),
          A("table", yy, [
            m[18] || (m[18] = A("thead", null, [
              A("tr", null, [
                A("th", null, "盘"),
                A("th", null, "题目"),
                A("th", null, "赔率"),
                A("th", null, "结果")
              ])
            ], -1)),
            A("tbody", null, [
              (v(!0), k(X, null, fe(y.value.book.markets, (g) => (v(), k("tr", {
                key: g.id
              }, [
                A("td", null, S(w[g.kind]) + " " + S(g.id), 1),
                A("td", null, [
                  Ne(S(g.q), 1),
                  g.judge ? (v(), k(X, { key: 0 }, [
                    m[15] || (m[15] = A("br", null, null, -1)),
                    A("small", null, S(g.judge), 1)
                  ], 64)) : U("", !0),
                  g.judgeNo ? (v(), k(X, { key: 1 }, [
                    m[16] || (m[16] = A("br", null, null, -1)),
                    A("small", null, "否：" + S(g.judgeNo), 1)
                  ], 64)) : U("", !0),
                  g.by ? (v(), k(X, { key: 2 }, [
                    m[17] || (m[17] = A("br", null, null, -1)),
                    A("small", null, "by " + S(g.by), 1)
                  ], 64)) : U("", !0)
                ]),
                A("td", null, S(g.options.map((O) => `${O.label}(${Math.round(O.p * 100)}%) ×${O.odds.toFixed(2)}`).join("　")), 1),
                A("td", null, S(_(T(f).market.results[g.id], Object.fromEntries(g.options.map((O) => [O.id, O.label])))), 1)
              ]))), 128))
            ])
          ]),
          A("p", by, "庄家怪盘：" + S(P(y.value.book.freak)), 1),
          A("p", vy, "开盘 " + S(y.value.book.openedAt) + "　" + S(y.value.book.closedAt ? `封盘 ${y.value.book.closedAt}` : "未封盘") + S(y.value.book.frozen ? "　已定格" : ""), 1),
          y.value.rounds.length ? (v(), k("table", ky, [
            m[19] || (m[19] = A("thead", null, [
              A("tr", null, [
                A("th", null, "楼"),
                A("th", null, "检测"),
                A("th", null, "判定为真")
              ])
            ], -1)),
            A("tbody", null, [
              (v(!0), k(X, null, fe(y.value.rounds, (g) => (v(), k("tr", {
                key: g.index,
                class: te({ "rlzc-row-warn": g.state === "miss" })
              }, [
                A("td", null, S(g.index), 1),
                A("td", null, S(V[g.state]), 1),
                A("td", null, S(Object.keys(g.hits).filter((O) => g.hits[O]).join(" ") || "—"), 1)
              ], 2))), 128))
            ])
          ])) : U("", !0)
        ])) : U("", !0),
        A("div", wy, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !T(f).settings.cardCollapsed.injectionDebug,
            onClick: m[5] || (m[5] = (g) => B("injectionDebug"))
          }, [
            m[21] || (m[21] = A("h4", null, "本次注入", -1)),
            A("span", {
              class: te(["rlzc-collapse-arrow", { open: !T(f).settings.cardCollapsed.injectionDebug }])
            }, "▸", 2)
          ], 8, _y),
          T(f).settings.cardCollapsed.injectionDebug ? U("", !0) : (v(), k("div", zy, [
            A("pre", $y, S([T(f).lastInjection.token, T(f).lastInjection.progress, T(f).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
          ]))
        ]),
        A("details", Sy, [
          m[22] || (m[22] = A("summary", null, "重放结果", -1)),
          A("pre", Ey, S(Z(j.value)), 1)
        ]),
        A("details", Cy, [
          m[23] || (m[23] = A("summary", null, "会话原始数据", -1)),
          A("pre", My, S(Z(T(f).session)), 1)
        ]),
        A("details", Iy, [
          m[25] || (m[25] = A("summary", null, "每楼快照（最近60条）", -1)),
          A("table", Ty, [
            m[24] || (m[24] = A("thead", null, [
              A("tr", null, [
                A("th", null, "楼"),
                A("th", null, "阶段"),
                A("th", null, "轮"),
                A("th", null, "钟时"),
                A("th", null, "时限"),
                A("th", null, "事件"),
                A("th", null, "检测")
              ])
            ], -1)),
            A("tbody", null, [
              (v(!0), k(X, null, fe(r.value, (g) => (v(), k("tr", {
                key: g.index,
                class: te({ "rlzc-row-warn": o.value.has(g.index) })
              }, [
                A("td", null, S(g.index) + S(g.snap.entry ? "★" : ""), 1),
                A("td", null, S(g.snap.phase), 1),
                A("td", null, S(g.snap.round), 1),
                A("td", null, S(g.snap.clock ?? ""), 1),
                A("td", null, S(g.snap.limit?.text ?? ""), 1),
                A("td", null, S(g.snap.injected.join(" ")), 1),
                A("td", null, S(h(g.snap)), 1),
                g.snap.ledgerMismatch ? (v(), k("td", Ny, "状态栏 " + S(g.snap.ledgerMismatch.status) + " / 账本 " + S(g.snap.ledgerMismatch.ledger), 1)) : (v(), k("td", Py))
              ], 2))), 128))
            ])
          ])
        ]),
        A("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: m[6] || (m[6] = //@ts-ignore
          (...g) => T(ho) && T(ho)(...g))
        }, "删除副本会话", 8, jy)
      ], 64)) : (v(), k("p", O1, "当前聊天没有副本会话。")),
      a.value.length ? (v(), k("details", Dy, [
        m[27] || (m[27] = A("summary", null, "直播（每楼，最近60条）", -1)),
        A("table", Ry, [
          m[26] || (m[26] = A("thead", null, [
            A("tr", null, [
              A("th", null, "楼"),
              A("th", null, "精彩度"),
              A("th", null, "热度"),
              A("th", null, "人数"),
              A("th", null, "打赏"),
              A("th", null, "AI弹幕")
            ])
          ], -1)),
          A("tbody", null, [
            (v(!0), k(X, null, fe(a.value, (g) => (v(), k("tr", {
              key: g.index,
              class: te({ "rlzc-row-warn": g.rec.ai && !g.rec.ai.ok && !g.rec.ai.pending })
            }, [
              A("td", null, S(g.index) + S(g.rec.scope === "corridor" ? "·回廊" : ""), 1),
              A("td", null, S(g.rec.hype) + S(g.rec.hurt ? "·伤" : ""), 1),
              A("td", null, S(g.rec.heat), 1),
              A("td", null, S(g.rec.viewers), 1),
              A("td", null, S(c(g.rec)), 1),
              A("td", null, S(u(g.rec)), 1)
            ], 2))), 128))
          ])
        ])
      ])) : U("", !0)
    ]));
  }
}), Oy = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, Ly = { class: "rlzc-head" }, By = { class: "rlzc-tabs" }, Vy = ["onClick"], Uy = { class: "rlzc-body" }, Wy = /* @__PURE__ */ Ue({
  __name: "Panel",
  setup(e) {
    const t = [
      { id: "system", label: "系统" },
      { id: "ledger", label: "账本" },
      { id: "market", label: "黑市" },
      { id: "settings", label: "设置" },
      { id: "debug", label: "调试" }
    ];
    async function n(s) {
      if (s === "debug" && !f.debugUnlocked) {
        if (!await Dt("此页会显示副本真相，确定要打开吗？")) return;
        f.debugUnlocked = !0;
      }
      f.tab = s;
    }
    return (s, i) => (v(), k("div", {
      class: "rlzc-backdrop",
      onClick: i[1] || (i[1] = aA((r) => T(f).panelOpen = !1, ["self"]))
    }, [
      A("section", Oy, [
        A("header", Ly, [
          i[2] || (i[2] = A("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          A("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: i[0] || (i[0] = (r) => T(f).panelOpen = !1)
          }, "×")
        ]),
        A("nav", By, [
          (v(), k(X, null, fe(t, (r) => A("button", {
            key: r.id,
            class: te({ on: T(f).tab === r.id }),
            onClick: (o) => n(r.id)
          }, S(r.label), 11, Vy)), 64))
        ]),
        A("div", Uy, [
          T(f).tab === "system" ? (v(), Ke(Qg, { key: 0 })) : T(f).tab === "ledger" ? (v(), Ke(gx, { key: 1 })) : T(f).tab === "market" ? (v(), Ke(Kx, { key: 2 })) : T(f).tab === "settings" ? (v(), Ke(R1, { key: 3 })) : T(f).tab === "debug" && T(f).debugUnlocked ? (v(), Ke(Fy, { key: 4 })) : U("", !0)
        ])
      ])
    ]));
  }
}), Hy = /* @__PURE__ */ Ue({
  __name: "App",
  setup(e) {
    return (t, n) => (v(), k(X, null, [
      T(f).settings.showBall ? (v(), Ke(ug, { key: 0 })) : U("", !0),
      T(f).panelOpen ? (v(), Ke(Wy, { key: 1 })) : U("", !0)
    ], 64));
  }
}), Gy = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);--ok: #4caf72;--bad: #c9534f;font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-ball-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--accent);color:var(--bg);font-size:11px;font-weight:700;line-height:18px;text-align:center;pointer-events:none}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field{align-items:flex-start}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-depth .rlzc-field>.rlzc-input{flex:0 0 72px;width:72px}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-conn-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout{justify-content:flex-start;gap:16px}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px}.rlzc-input-num{width:72px;text-align:right;font-variant-numeric:tabular-nums}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-toggle:after{content:"";position:absolute;inset:-10px 0}.rlzc-segsrc button:disabled{opacity:.4;cursor:not-allowed}.rlzc-segsrc button:disabled:hover{background:none;color:var(--muted)}.rlzc-live-card .rlzc-input-num{min-height:44px}.rlzc-option-row-stack{flex-direction:column;align-items:stretch;gap:0}.rlzc-option-row-stack .rlzc-segsrc{margin:6px 0 2px}.rlzc-option-row-stack .rlzc-hint{margin:2px 0 0}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-right{flex:0 0 auto;display:flex;flex-direction:column;align-items:flex-end;gap:2px}.rlzc-ledger-item-after{font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-status{flex:0 0 auto;font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-collapse-head .rlzc-dot{font-size:12px}.rlzc-market-tabs button{flex:1 1 0;min-height:44px}.rlzc-mk-status{font-size:14px}.rlzc-mk-q{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;font-weight:600;overflow-wrap:anywhere}.rlzc-mk-tag{flex:0 0 auto;font-size:11px;font-weight:600;color:var(--accent);padding:1px 6px;border:1px solid color-mix(in srgb,var(--accent) 60%,transparent);border-radius:4px}.rlzc-mk-opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.rlzc-mk-opt{display:flex;align-items:center;justify-content:space-between;gap:6px;min-height:44px;padding:6px 10px;font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 60%,transparent);border:1px solid var(--line);border-radius:8px;cursor:pointer;text-align:left}.rlzc-mk-opt b{font-weight:600;font-variant-numeric:tabular-nums;color:var(--muted)}.rlzc-mk-opt.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 16%,transparent)}.rlzc-mk-opt.on b{color:var(--fg)}.rlzc-mk-opt:disabled{opacity:.55;cursor:not-allowed}.rlzc-mk-bet{margin-top:8px}.rlzc-mk-bet .rlzc-input,.rlzc-mk-bet .rlzc-btn{min-height:44px}.rlzc-mk-bet .rlzc-btn{flex:0 0 auto;min-width:64px}.rlzc-mk-red{color:var(--bad);font-size:12px;margin:2px 0}.rlzc-mk-mine{list-style:none;margin:8px 0 0;padding:6px 0 0;border-top:1px dashed var(--line);font-size:12px;color:var(--muted)}.rlzc-mk-mine li{padding:2px 0;font-variant-numeric:tabular-nums}.rlzc-tk-list{list-style:none;margin:0;padding:0}.rlzc-tk{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:52px;padding:6px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-tk:last-child{border-bottom:none}.rlzc-tk-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-tk-title{font-size:13px;overflow-wrap:anywhere}.rlzc-tk-left small{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-stamp{flex:0 0 40px;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:16px;border:2px solid currentColor;transform:rotate(-14deg);box-shadow:inset 0 0 0 2px color-mix(in srgb,currentColor 18%,transparent)}.rlzc-stamp.win{color:var(--ok)}.rlzc-stamp.lose{color:var(--bad)}.rlzc-stamp.refund{color:var(--muted)}.rlzc-stamp.pending{color:var(--muted);border-style:dashed;border-width:1px;box-shadow:none;transform:none;font-weight:600;font-size:14px}.rlzc-cs-tables{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-cs-table{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-height:76px;text-align:left;font:inherit;color:var(--fg);cursor:pointer}.rlzc-cs-table b{font-size:15px}.rlzc-cs-table small{font-size:12px;color:var(--muted);line-height:1.45}.rlzc-cs-table.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent)}.rlzc-cs-play h4{margin-bottom:4px}.rlzc-cs-seg{margin:6px 0}.rlzc-cs-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:4px;margin:6px 0}.rlzc-cs-grid.door{grid-template-columns:repeat(5,minmax(0,1fr))}.rlzc-cs-grid button{min-height:44px;padding:0 2px;font:inherit;font-size:13px;color:var(--muted);cursor:pointer;background:none;border:1px solid var(--line);border-radius:8px;font-variant-numeric:tabular-nums}.rlzc-cs-grid button.on{color:var(--fg);border-color:var(--accent);background:color-mix(in srgb,var(--accent) 15%,transparent);font-weight:600}.rlzc-cs-face{margin-top:10px;min-height:52px;display:grid;place-items:center;font-size:26px;font-weight:800;font-variant-numeric:tabular-nums;border:1px dashed var(--line);border-radius:10px}.rlzc-cs-face.rolling{color:var(--muted)}.rlzc-cs-result{margin:8px 0 0;font-weight:600;font-variant-numeric:tabular-nums}.rlzc-cs-result.win{color:var(--ok)}.rlzc-cs-result.lose{color:var(--bad)}';
function Ky(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function Xa(e, t, n) {
  const s = xe().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function qy() {
  const e = Ky();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await Xa("/api/extensions/version", e, t);
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
async function Yy(e) {
  const t = await Xa("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const _o = "rlzc-host", zo = "rlzc-menu-btn", $o = "rlzc-settings-drawer";
function Jy() {
  if (document.getElementById(_o)) return;
  const e = document.createElement("div");
  e.id = _o, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Gy, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), AA(Hy).mount(s), Qa(), ec();
}
function Qa(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => Qa(e + 1), 500);
    return;
  }
  if (document.getElementById(zo)) return;
  const n = document.createElement("div");
  n.id = zo, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const i = document.createElement("span");
  i.textContent = "回廊种菜系统", n.append(s, i), n.addEventListener("click", () => {
    f.panelOpen = !f.panelOpen;
  }), t.appendChild(n);
}
function ec(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => ec(e + 1), 500);
    return;
  }
  if (document.getElementById($o)) return;
  const n = (Z, B = "", b = "") => {
    const m = document.createElement(Z);
    return B && (m.className = B), b && (m.textContent = b), m;
  }, s = n("div");
  s.id = $o;
  const i = n("div", "inline-drawer"), r = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), r.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const a = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => f.panelOpen = !0);
  const u = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  u.addEventListener("click", () => {
    f.settings.ball = { x: null, y: null }, f.settings.showBall = !0, ve();
  });
  const d = n("label", "checkbox_label"), h = document.createElement("input");
  h.type = "checkbox", h.addEventListener("change", () => {
    f.settings.showBall = h.checked, ve();
  }), d.append(h, n("span", "", "显示悬浮球")), Ls(() => f.settings.showBall, (Z) => h.checked = Z, { immediate: !0 });
  const y = n("div", "flex-container");
  y.append(c, u);
  const w = n("div", "flex-container alignitemscenter"), _ = n("small", "rlzc-update-status", "正在检查更新…"), P = n("div", "menu_button menu_button_icon", "检查更新"), V = n("div", "menu_button menu_button_icon", "立即更新"), j = n("div", "menu_button menu_button_icon", "刷新页面");
  V.style.display = "none", j.style.display = "none", w.append(_, P, V, j);
  let z = null, I = !1;
  const ee = async () => {
    if (!I) {
      I = !0, _.textContent = "正在检查更新…", V.style.display = "none";
      try {
        z = await qy();
        const Z = z.commit ? `（${z.commit}）` : "";
        z.isGit ? z.isUpToDate ? _.textContent = `已是最新版本${Z}` : (_.textContent = `有新版本可以更新，当前${Z || "版本较旧"}`, V.style.display = "") : _.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = z.isGit && !z.isUpToDate ? "" : "none";
      } catch (Z) {
        _.textContent = `检查更新失败：${Z.message}`;
      } finally {
        I = !1;
      }
    }
  };
  P.addEventListener("click", () => void ee()), V.addEventListener("click", async () => {
    if (!(!z || I)) {
      I = !0, _.textContent = "正在更新…", V.style.display = "none";
      try {
        await Yy(z), l.style.display = "none", _.textContent = "更新完成，刷新页面后生效。", j.style.display = "";
      } catch (Z) {
        _.textContent = `更新失败：${Z.message}`, V.style.display = "";
      } finally {
        I = !1;
      }
    }
  }), j.addEventListener("click", () => location.reload()), setTimeout(() => void ee(), 3e3), a.append(y, d, w, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), i.append(r, a), s.append(i), t.append(s);
}
globalThis.rlzcInterceptor = Im;
function Si() {
  ym(), zt("MESSAGE_RECEIVED", (e, t) => Um(Number(e), t)), zt("CHARACTER_MESSAGE_RENDERED", (e) => wi(Number(e))), zt("MESSAGE_DELETED", () => ki()), zt("MESSAGE_SWIPED", (e) => {
    Tm(Number(e)), wi(Number(e));
  }), zt("MESSAGE_EDITED", () => ki()), zt("MESSAGE_UPDATED", (e) => {
    ki(), wi(Number(e));
  }), zt("CHAT_CHANGED", () => yo()), zt("MORE_MESSAGES_LOADED", () => gr()), Jy(), Nh({ view: xr, toggle: Jm }), yo(), console.log("[rlzc] 回廊种菜系统已加载", f.settings);
}
const So = window.jQuery;
typeof So == "function" ? So(() => Si()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Si) : Si();
