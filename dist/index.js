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
const ve = {}, tn = [], rn = () => {
}, jl = () => !1, or = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), lr = (e) => e.startsWith("onUpdate:"), je = Object.assign, Bl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, vu = Object.prototype.hasOwnProperty, fe = (e, t) => vu.call(e, t), se = Array.isArray, Dt = (e) => ps(e) === "[object Map]", an = (e) => ps(e) === "[object Set]", vo = (e) => ps(e) === "[object Date]", de = (e) => typeof e == "function", be = (e) => typeof e == "string", gt = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", Vl = (e) => (he(e) || de(e)) && de(e.then) && de(e.catch), Ul = Object.prototype.toString, ps = (e) => Ul.call(e), yu = (e) => ps(e).slice(8, -1), Hl = (e) => ps(e) === "[object Object]", zi = (e) => be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Un = /* @__PURE__ */ wi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, bu = /-\w/g, et = ar(
  (e) => e.replace(bu, (t) => t.slice(1).toUpperCase())
), ku = /\B([A-Z])/g, fn = ar(
  (e) => e.replace(ku, "-$1").toLowerCase()
), Wl = ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), Nr = ar(
  (e) => e ? `on${Wl(e)}` : ""
), ht = (e, t) => !Object.is(e, t), Is = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Gl = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, cr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, wu = (e) => {
  const t = be(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let yo;
const ur = () => yo || (yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function dr(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = be(s) ? Su(s) : dr(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (be(e) || he(e))
    return e;
}
const zu = /;(?![^(]*\))/g, _u = /:([^]+)/, $u = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Su(e) {
  const t = {};
  return e.replace($u, (n) => n.startsWith("/*") ? "" : n).split(zu).forEach((n) => {
    if (n) {
      const s = n.split(_u);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Z(e) {
  let t = "";
  if (be(e))
    t = e;
  else if (se(e))
    for (let n = 0; n < e.length; n++) {
      const s = Z(e[n]);
      s && (t += s + " ");
    }
  else if (he(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Cu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Eu = /* @__PURE__ */ wi(Cu);
function Kl(e) {
  return !!e || e === "";
}
function Mu(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = Rt(e[r], t[r], n);
  return s;
}
function bo(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), r = new Uint8Array(s.length);
  for (const i of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!r[l] && Rt(i, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function Tu(e, t, n) {
  let s = Dt(e), r = Dt(t);
  if (s || r || (s = an(e), r = an(t), s || r))
    return s && r ? bo(e, t, n) : !1;
  const i = Object.keys(e).length, o = Object.keys(t).length;
  if (i !== o)
    return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
    if (a && !c || !a && c || !Rt(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function ko(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [r, i] = n;
  if (r.has(e) || i.has(t))
    return r.get(e) === t && i.get(t) === e;
  r.set(e, t), i.set(t, e);
  const o = s(e, t, n);
  return r.delete(e), i.delete(t), o;
}
function Rt(e, t, n) {
  if (e === t) return !0;
  let s = vo(e), r = vo(t);
  return s || r ? s && r ? e.getTime() === t.getTime() : !1 : (s = gt(e), r = gt(t), s || r ? e === t : (s = se(e), r = se(t), s || r ? s && r ? ko(e, t, n, Mu) : !1 : (s = he(e), r = he(t), s || r ? !s || !r ? !1 : ko(e, t, n, Tu) : String(e) === String(t))));
}
function Iu(e, t) {
  return e.findIndex((n) => Rt(n, t));
}
const ql = (e) => !!(e && e.__v_isRef === !0), _ = (e) => be(e) ? e : e == null ? "" : se(e) || he(e) && (e.toString === Ul || !de(e.toString)) ? ql(e) ? _(e.value) : JSON.stringify(e, Yl, 2) : String(e), Yl = (e, t) => ql(t) ? Yl(e, t.value) : Dt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Pr(s, i) + " =>"] = r, n),
    {}
  )
} : an(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Pr(n))
} : gt(t) ? Pr(t) : he(t) && !se(t) && !Hl(t) ? String(t) : t, Pr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    gt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ce;
class Nu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ce && (Ce.active ? (this.parent = Ce, this.index = (Ce.scopes || (Ce.scopes = [])).push(
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
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].resume();
      }
      const s = this.effects.slice();
      for (t = 0, n = s.length; t < n; t++)
        s[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ce;
      try {
        return Ce = this, t();
      } finally {
        Ce = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ce, Ce = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ce === this)
        Ce = this.prevScope;
      else {
        let t = Ce;
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
        const r = this.scopes.slice();
        for (n = 0, s = r.length; n < s; n++)
          r[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Pu() {
  return Ce;
}
let pe;
const Dr = /* @__PURE__ */ new WeakSet();
class Jl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ce && (Ce.active ? Ce.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Dr.has(this) && (Dr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ql(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, wo(this), Xl(this);
    const t = pe, n = tt;
    pe = this, tt = !0;
    try {
      return this.fn();
    } finally {
      ea(this), pe = t, tt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Si(t);
      this.deps = this.depsTail = void 0, wo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Dr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ii(this) && this.run();
  }
  get dirty() {
    return ii(this);
  }
}
let Zl = 0, Hn, Wn;
function Ql(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wn, Wn = e;
    return;
  }
  e.next = Hn, Hn = e;
}
function _i() {
  Zl++;
}
function $i() {
  if (--Zl > 0)
    return;
  if (Wn) {
    let t = Wn;
    for (Wn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Hn; ) {
    let t = Hn;
    for (Hn = void 0; t; ) {
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
function Xl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ea(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Si(s), Du(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function ii(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ta(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ta(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xn) || (e.globalVersion = Xn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ii(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = pe, s = tt;
  pe = e, tt = !0;
  try {
    Xl(e);
    const r = e.fn(e._value);
    (t.version === 0 || ht(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    pe = n, tt = s, ea(e), e.flags &= -3;
  }
}
function Si(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Si(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Du(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let tt = !0;
const na = [];
function Ot() {
  na.push(tt), tt = !1;
}
function Ft() {
  const e = na.pop();
  tt = e === void 0 ? !0 : e;
}
function wo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = pe;
    pe = void 0;
    try {
      t();
    } finally {
      pe = n;
    }
  }
}
let Xn = 0;
class Lu {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ci {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!pe || !tt || pe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== pe)
      n = this.activeLink = new Lu(pe, this), pe.deps ? (n.prevDep = pe.depsTail, pe.depsTail.nextDep = n, pe.depsTail = n) : pe.deps = pe.depsTail = n, sa(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = pe.depsTail, n.nextDep = void 0, pe.depsTail.nextDep = n, pe.depsTail = n, pe.deps === n && (pe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Xn++, this.notify(t);
  }
  notify(t) {
    _i();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      $i();
    }
  }
}
function sa(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        sa(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const oi = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ Symbol(
  ""
), li = /* @__PURE__ */ Symbol(
  ""
), es = /* @__PURE__ */ Symbol(
  ""
);
function Te(e, t, n) {
  if (tt && pe) {
    let s = oi.get(e);
    s || oi.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Ci()), r.map = s, r.key = n), r.track();
  }
}
function zt(e, t, n, s, r, i) {
  const o = oi.get(e);
  if (!o) {
    Xn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (_i(), t === "clear")
    o.forEach(l);
  else {
    const a = se(e), c = a && zi(n);
    if (a && n === "length") {
      const u = Number(s);
      o.forEach((f, m) => {
        (m === "length" || m === es || !gt(m) && m >= u) && l(f);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(es)), t) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(on)), Dt(e) && l(o.get(li)));
          break;
        case "delete":
          a || (l(o.get(on)), Dt(e) && l(o.get(li)));
          break;
        case "set":
          Dt(e) && l(o.get(on));
          break;
      }
  }
  $i();
}
function vn(e) {
  const t = /* @__PURE__ */ ae(e);
  return t === e || (Te(t, "iterate", es), /* @__PURE__ */ qe(e)) ? t : /* @__PURE__ */ xt(e) ? /* @__PURE__ */ Lt(e) ? t.map((n) => jt(Ye(n))) : t.map(jt) : t.map(Ye);
}
function Ar(e) {
  return Te(e = /* @__PURE__ */ ae(e), "iterate", es), e;
}
function At(e, t) {
  return /* @__PURE__ */ xt(e) ? jt(/* @__PURE__ */ Lt(e) ? Ye(t) : t) : Ye(t);
}
const Ru = {
  __proto__: null,
  [Symbol.iterator]() {
    return Lr(this, Symbol.iterator, (e) => At(this, e));
  },
  concat(...e) {
    return vn(this).concat(
      ...e.map((t) => se(t) ? vn(t) : t)
    );
  },
  entries() {
    return Lr(this, "entries", (e) => (e[1] = At(this, e[1]), e));
  },
  every(e, t) {
    return yt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return yt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => At(this, s)),
      arguments
    );
  },
  find(e, t) {
    return yt(
      this,
      "find",
      e,
      t,
      (n) => At(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return yt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return yt(
      this,
      "findLast",
      e,
      t,
      (n) => At(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return yt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return yt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Rr(this, "includes", e);
  },
  indexOf(...e) {
    return Rr(this, "indexOf", e);
  },
  join(e) {
    return vn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Rr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return yt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Dn(this, "pop");
  },
  push(...e) {
    return Dn(this, "push", e);
  },
  reduce(e, ...t) {
    return zo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return zo(this, "reduceRight", e, t);
  },
  shift() {
    return Dn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return yt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Dn(this, "splice", e);
  },
  toReversed() {
    return vn(this).toReversed();
  },
  toSorted(e) {
    return vn(this).toSorted(e);
  },
  toSpliced(...e) {
    return vn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Dn(this, "unshift", e);
  },
  values() {
    return Lr(this, "values", (e) => At(this, e));
  }
};
function Lr(e, t, n) {
  const s = Ar(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ qe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const Ou = Array.prototype;
function yt(e, t, n, s, r, i) {
  const o = Ar(e), l = o !== e && !/* @__PURE__ */ qe(e), a = o[t];
  if (a !== Ou[t]) {
    const f = a.apply(e, i);
    return l ? Ye(f) : f;
  }
  let c = n;
  o !== e && (l ? c = function(f, m) {
    return n.call(this, At(e, f), m, e);
  } : n.length > 2 && (c = function(f, m) {
    return n.call(this, f, m, e);
  }));
  const u = a.call(o, c, s);
  return l && r ? r(u) : u;
}
function zo(e, t, n, s) {
  const r = Ar(e), i = r !== e && !/* @__PURE__ */ qe(e);
  let o = n, l = !1;
  r !== e && (i ? (l = s.length === 0, o = function(c, u, f) {
    return l && (l = !1, c = At(e, c)), n.call(this, c, At(e, u), f, e);
  }) : n.length > 3 && (o = function(c, u, f) {
    return n.call(this, c, u, f, e);
  }));
  const a = r[t](o, ...s);
  return l ? At(e, a) : a;
}
function Rr(e, t, n) {
  const s = /* @__PURE__ */ ae(e);
  Te(s, "iterate", es);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Ti(n[0]) ? (n[0] = /* @__PURE__ */ ae(n[0]), s[t](...n)) : r;
}
function Dn(e, t, n = []) {
  Ot(), _i();
  const s = (/* @__PURE__ */ ae(e))[t].apply(e, n);
  return $i(), Ft(), s;
}
const Fu = /* @__PURE__ */ wi("__proto__,__v_isRef,__isVue"), ra = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gt)
);
function ju(e) {
  gt(e) || (e = String(e));
  const t = /* @__PURE__ */ ae(this);
  return Te(t, "has", e), t.hasOwnProperty(e);
}
class ia {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? Ju : ca : i ? aa : la).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = se(t);
    if (!r) {
      let a;
      if (o && (a = Ru[n]))
        return a;
      if (n === "hasOwnProperty")
        return ju;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Pe(t) ? t : s
    );
    if ((gt(n) ? ra.has(n) : Fu(n)) || (r || Te(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Pe(l)) {
      const a = o && zi(n) ? l : l.value;
      return r && he(a) ? /* @__PURE__ */ ci(a) : a;
    }
    return he(l) ? r ? /* @__PURE__ */ ci(l) : /* @__PURE__ */ fr(l) : l;
  }
}
class oa extends ia {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = se(t) && zi(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ xt(i);
      if (!/* @__PURE__ */ qe(s) && !/* @__PURE__ */ xt(s) && (i = /* @__PURE__ */ ae(i), s = /* @__PURE__ */ ae(s)), !o && /* @__PURE__ */ Pe(i) && !/* @__PURE__ */ Pe(s))
        return c || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : fe(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Pe(t) ? t : r
    );
    return t === /* @__PURE__ */ ae(r) && a && (l ? ht(s, i) && zt(t, "set", n, s) : zt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = fe(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && zt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!gt(n) || !ra.has(n)) && Te(t, "has", n), s;
  }
  ownKeys(t) {
    return Te(
      t,
      "iterate",
      se(t) ? "length" : on
    ), Reflect.ownKeys(t);
  }
}
class Bu extends ia {
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
const Vu = /* @__PURE__ */ new oa(), Uu = /* @__PURE__ */ new Bu(), Hu = /* @__PURE__ */ new oa(!0);
const ai = (e) => e, ws = (e) => Reflect.getPrototypeOf(e);
function Wu(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ ae(r), o = Dt(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = r[e](...s), u = n ? ai : t ? jt : Ye;
    return !t && Te(
      i,
      "iterate",
      a ? li : on
    ), je(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: f, done: m } = c.next();
          return m ? { value: f, done: m } : {
            value: l ? [u(f[0]), u(f[1])] : u(f),
            done: m
          };
        }
      }
    );
  };
}
function zs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Gu(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(r);
      e || (ht(r, l) && Te(o, "get", r), Te(o, "get", l));
      const { has: a } = ws(o), c = t ? ai : e ? jt : Ye;
      if (a.call(o, r))
        return c(i.get(r));
      if (a.call(o, l))
        return c(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Te(/* @__PURE__ */ ae(r), "iterate", on), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(r);
      return e || (ht(r, l) && Te(o, "has", r), Te(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ ae(l), c = t ? ai : e ? jt : Ye;
      return !e && Te(a, "iterate", on), l.forEach((u, f) => r.call(i, c(u), c(f), o));
    }
  };
  return je(
    n,
    e ? {
      add: zs("add"),
      set: zs("set"),
      delete: zs("delete"),
      clear: zs("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ ae(this), o = ws(i), l = /* @__PURE__ */ ae(r), a = !t && !/* @__PURE__ */ qe(r) && !/* @__PURE__ */ xt(r) ? l : r;
        return o.has.call(i, a) || ht(r, a) && o.has.call(i, r) || ht(l, a) && o.has.call(i, l) || (i.add(a), zt(i, "add", a, a)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ qe(i) && !/* @__PURE__ */ xt(i) && (i = /* @__PURE__ */ ae(i));
        const o = /* @__PURE__ */ ae(this), { has: l, get: a } = ws(o);
        let c = l.call(o, r);
        c || (r = /* @__PURE__ */ ae(r), c = l.call(o, r));
        const u = a.call(o, r);
        return o.set(r, i), c ? ht(i, u) && zt(o, "set", r, i) : zt(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ ae(this), { has: o, get: l } = ws(i);
        let a = o.call(i, r);
        a || (r = /* @__PURE__ */ ae(r), a = o.call(i, r)), l && l.call(i, r);
        const c = i.delete(r);
        return a && zt(i, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ ae(this), i = r.size !== 0, o = r.clear();
        return i && zt(
          r,
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
  ].forEach((r) => {
    n[r] = Wu(r, e, t);
  }), n;
}
function Ei(e, t) {
  const n = Gu(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    fe(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Ku = {
  get: /* @__PURE__ */ Ei(!1, !1)
}, qu = {
  get: /* @__PURE__ */ Ei(!1, !0)
}, Yu = {
  get: /* @__PURE__ */ Ei(!0, !1)
};
const la = /* @__PURE__ */ new WeakMap(), aa = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), Ju = /* @__PURE__ */ new WeakMap();
function Zu(e) {
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
function fr(e) {
  return /* @__PURE__ */ xt(e) ? e : Mi(
    e,
    !1,
    Vu,
    Ku,
    la
  );
}
// @__NO_SIDE_EFFECTS__
function Qu(e) {
  return Mi(
    e,
    !1,
    Hu,
    qu,
    aa
  );
}
// @__NO_SIDE_EFFECTS__
function ci(e) {
  return Mi(
    e,
    !0,
    Uu,
    Yu,
    ca
  );
}
function Mi(e, t, n, s, r) {
  if (!he(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = Zu(yu(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return /* @__PURE__ */ xt(e) ? /* @__PURE__ */ Lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ti(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ae(t) : e;
}
function Xu(e) {
  return !fe(e, "__v_skip") && Object.isExtensible(e) && Gl(e, "__v_skip", !0), e;
}
const Ye = (e) => he(e) ? /* @__PURE__ */ fr(e) : e, jt = (e) => he(e) ? /* @__PURE__ */ ci(e) : e;
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return ed(e, !1);
}
function ed(e, t) {
  return /* @__PURE__ */ Pe(e) ? e : new td(e, t);
}
class td {
  constructor(t, n) {
    this.dep = new Ci(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ae(t), this._value = n ? t : Ye(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ qe(t) || /* @__PURE__ */ xt(t);
    t = s ? t : /* @__PURE__ */ ae(t), ht(t, n) && (this._rawValue = t, this._value = s ? t : Ye(t), this.dep.trigger());
  }
}
function C(e) {
  return /* @__PURE__ */ Pe(e) ? e.value : e;
}
const nd = {
  get: (e, t, n) => t === "__v_raw" ? e : C(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ Pe(r) && !/* @__PURE__ */ Pe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ua(e) {
  return /* @__PURE__ */ Lt(e) ? e : new Proxy(e, nd);
}
class sd {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ci(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    pe !== this)
      return Ql(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ta(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function rd(e, t, n = !1) {
  let s, r;
  return de(e) ? s = e : (s = e.get, r = e.set), new sd(s, r, n);
}
const _s = {}, js = /* @__PURE__ */ new WeakMap();
let Qt;
function id(e, t = !1, n = Qt) {
  if (n) {
    let s = js.get(n);
    s || js.set(n, s = []), s.push(e);
  }
}
function od(e, t, n = ve) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = n, c = (T) => r ? T : /* @__PURE__ */ qe(T) || r === !1 || r === 0 ? _t(T, 1) : _t(T);
  let u, f, m, k, z = !1, x = !1;
  if (/* @__PURE__ */ Pe(e) ? (f = () => e.value, z = /* @__PURE__ */ qe(e)) : /* @__PURE__ */ Lt(e) ? (f = () => c(e), z = !0) : se(e) ? (x = !0, z = e.some((T) => /* @__PURE__ */ Lt(T) || /* @__PURE__ */ qe(T)), f = () => e.map((T) => {
    if (/* @__PURE__ */ Pe(T))
      return T.value;
    if (/* @__PURE__ */ Lt(T))
      return c(T);
    if (de(T))
      return a ? a(T, 2) : T();
  })) : de(e) ? t ? f = a ? () => a(e, 2) : e : f = () => {
    if (m) {
      Ot();
      try {
        m();
      } finally {
        Ft();
      }
    }
    const T = Qt;
    Qt = u;
    try {
      return a ? a(e, 3, [k]) : e(k);
    } finally {
      Qt = T;
    }
  } : f = rn, t && r) {
    const T = f, ee = r === !0 ? 1 / 0 : r;
    f = () => _t(T(), ee);
  }
  const $ = Pu(), F = () => {
    u.stop(), $ && $.active && Bl($.effects, u);
  };
  if (i && t) {
    const T = t;
    t = (...ee) => {
      const te = T(...ee);
      return F(), te;
    };
  }
  let O = x ? new Array(e.length).fill(_s) : _s;
  const M = (T) => {
    if (!(!(u.flags & 1) || !u.dirty && !T))
      if (t) {
        const ee = u.run();
        if (T || r || z || (x ? ee.some((te, Q) => ht(te, O[Q])) : ht(ee, O))) {
          m && m();
          const te = Qt;
          Qt = u;
          try {
            const Q = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              O === _s ? void 0 : x && O[0] === _s ? [] : O,
              k
            ];
            O = ee, a ? a(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            Qt = te;
          }
        }
      } else
        u.run();
  };
  return l && l(M), u = new Jl(f), u.scheduler = o ? () => o(M, !1) : M, k = (T) => id(T, !1, u), m = u.onStop = () => {
    const T = js.get(u);
    if (T) {
      if (a)
        a(T, 4);
      else
        for (const ee of T) ee();
      js.delete(u);
    }
  }, t ? s ? M(!0) : O = u.run() : o ? o(M.bind(null, !0), !0) : u.run(), F.pause = u.pause.bind(u), F.resume = u.resume.bind(u), F.stop = F, F;
}
function _t(e, t = 1 / 0, n) {
  if (t <= 0 || !he(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Pe(e))
    _t(e.value, t, n);
  else if (se(e))
    for (let s = 0; s < e.length; s++)
      _t(e[s], t, n);
  else if (an(e) || Dt(e))
    e.forEach((s) => {
      _t(s, t, n);
    });
  else if (Hl(e)) {
    for (const s in e)
      _t(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && _t(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function hs(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    pr(r, t, n);
  }
}
function st(e, t, n, s) {
  if (de(e)) {
    const r = hs(e, t, n, s);
    return r && Vl(r) && r.catch((i) => {
      pr(i, t, n);
    }), r;
  }
  if (se(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(st(e[i], t, n, s));
    return r;
  }
}
function pr(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ve;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ot(), hs(i, null, 10, [
        e,
        a,
        c
      ]), Ft();
      return;
    }
  }
  ld(e, n, r, s, o);
}
function ld(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Ie = [];
let dt = -1;
const zn = [];
let Nt = null, bn = 0;
const da = /* @__PURE__ */ Promise.resolve();
let Bs = null;
function Aa(e) {
  const t = Bs || da;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ad(e) {
  let t = dt + 1, n = Ie.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Ie[s], i = ts(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ii(e) {
  if (!(e.flags & 1)) {
    const t = ts(e), n = Ie[Ie.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ts(n) ? Ie.push(e) : Ie.splice(ad(t), 0, e), e.flags |= 1, fa();
  }
}
function fa() {
  Bs || (Bs = da.then(ha));
}
function cd(e) {
  if (!se(e))
    Nt && e.id === -1 ? Nt.splice(bn + 1, 0, e) : e.flags & 1 || (zn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      zn.push(e[t]);
  fa();
}
function _o(e, t, n = dt + 1) {
  for (; n < Ie.length; n++) {
    const s = Ie[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ie.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function pa(e) {
  if (zn.length) {
    const t = [...new Set(zn)].sort(
      (n, s) => ts(n) - ts(s)
    );
    if (zn.length = 0, Nt) {
      for (let n = 0; n < t.length; n++)
        Nt.push(t[n]);
      return;
    }
    for (Nt = t, bn = 0; bn < Nt.length; bn++) {
      const n = Nt[bn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Nt = null, bn = 0;
  }
}
const ts = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ha(e) {
  try {
    for (dt = 0; dt < Ie.length; dt++) {
      const t = Ie[dt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), hs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; dt < Ie.length; dt++) {
      const t = Ie[dt];
      t && (t.flags &= -2);
    }
    dt = -1, Ie.length = 0, pa(), Bs = null, (Ie.length || zn.length) && ha();
  }
}
let Ke = null, ma = null;
function Vs(e) {
  const t = Ke;
  return Ke = e, ma = e && e.type.__scopeId || null, t;
}
function ga(e, t = Ke, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Ws(-1);
    const i = Vs(t), o = ln.length;
    let l;
    try {
      l = e(...r);
    } finally {
      for (let a = ln.length; a > o; a--) Oa();
      Vs(i), s._d && Ws(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function mt(e, t) {
  if (Ke === null)
    return e;
  const n = vr(Ke), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = ve] = t[r];
    i && (de(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && _t(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function qt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (Ot(), st(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ft());
  }
}
function ud(e, t, n = !1) {
  const s = Ba();
  if (s || _n) {
    let r = _n ? _n._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && de(t) ? t.call(s && s.proxy) : t;
  }
}
const dd = /* @__PURE__ */ Symbol.for("v-scx"), Ad = () => ud(dd);
function hr(e, t, n) {
  return fd(e, t, n);
}
function fd(e, t, n = ve) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = je({}, n), a = t && s || !t && i !== "post";
  let c;
  if (is) {
    if (i === "sync") {
      const k = Ad();
      c = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!a) {
      const k = () => {
      };
      return k.stop = rn, k.resume = rn, k.pause = rn, k;
    }
  }
  const u = Vt;
  l.call = (k, z, x) => st(k, u, z, x);
  let f = !1;
  i === "post" ? l.scheduler = (k) => {
    Le(k, u && u.suspense);
  } : i !== "sync" && (f = !0, l.scheduler = (k, z) => {
    z ? k() : Ii(k);
  }), l.augmentJob = (k) => {
    t && (k.flags |= 4), f && (k.flags |= 2, u && (k.id = u.uid, k.i = u));
  };
  const m = od(e, t, l);
  return is && (c ? c.push(m) : a && m()), m;
}
const pd = /* @__PURE__ */ Symbol("_vte"), mr = (e) => e.__isTeleport, We = /* @__PURE__ */ Symbol("_leaveCb"), Ln = /* @__PURE__ */ Symbol("_enterCb");
function hd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return za(() => {
    e.isMounted = !0;
  }), Pi(() => {
    e.isUnmounting = !0;
  }), e;
}
const He = [Function, Array], xa = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: He,
  onEnter: He,
  onAfterEnter: He,
  onEnterCancelled: He,
  // leave
  onBeforeLeave: He,
  onLeave: He,
  onAfterLeave: He,
  onLeaveCancelled: He,
  // appear
  onBeforeAppear: He,
  onAppear: He,
  onAfterAppear: He,
  onAppearCancelled: He
}, va = (e) => {
  const t = e.subTree;
  return t.component ? va(t.component) : t;
}, md = {
  name: "BaseTransition",
  props: xa,
  setup(e, { slots: t }) {
    const n = Ba(), s = hd();
    return () => {
      const r = t.default && ka(t.default(), !0), i = r && r.length ? ya(r) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? R() : void 0
      );
      if (!i)
        return;
      const o = /* @__PURE__ */ ae(e), { mode: l } = o;
      if (s.isLeaving)
        return Or(i);
      const a = Us(i);
      if (!a)
        return Or(i);
      let c = ui(
        a,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => c = f
      );
      a.type !== Ne && ns(a, c);
      let u = n.subTree && Us(n.subTree);
      if (u && u.type !== Ne && !Xt(u, a) && va(n).type !== Ne) {
        let f = ui(
          u,
          o,
          s,
          n
        );
        if (ns(u, f), l === "out-in" && a.type !== Ne)
          return s.isLeaving = !0, f.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, u = void 0;
          }, Or(i);
        l === "in-out" && a.type !== Ne ? f.delayLeave = (m, k, z) => {
          const x = ba(
            s,
            u
          );
          x[String(u.key)] = u, m[We] = () => {
            k(), m[We] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            z(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function ya(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ne) {
        t = n;
        break;
      }
  }
  return t;
}
const gd = md;
function ba(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function ui(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: m,
    onLeave: k,
    onAfterLeave: z,
    onLeaveCancelled: x,
    onBeforeAppear: $,
    onAppear: F,
    onAfterAppear: O,
    onAppearCancelled: M
  } = t, T = String(e.key), ee = ba(n, e), te = (E, p) => {
    E && st(
      E,
      s,
      9,
      p
    );
  }, Q = (E, p) => {
    const h = p[1];
    te(E, p), se(E) ? E.every((v) => v.length <= 1) && h() : E.length <= 1 && h();
  }, re = {
    mode: o,
    persisted: l,
    beforeEnter(E) {
      let p = a;
      if (!n.isMounted)
        if (i)
          p = $ || a;
        else
          return;
      E[We] && E[We](
        !0
        /* cancelled */
      );
      const h = ee[T];
      h && Xt(e, h) && h.el[We] && h.el[We](), te(p, [E]);
    },
    enter(E) {
      if (ee[T] === e) return;
      let p = c, h = u, v = f;
      if (!n.isMounted)
        if (i)
          p = F || c, h = O || u, v = M || f;
        else
          return;
      let P = !1;
      E[Ln] = (le) => {
        P || (P = !0, le ? te(v, [E]) : te(h, [E]), re.delayedLeave && re.delayedLeave(), E[Ln] = void 0);
      };
      const ie = E[Ln].bind(null, !1);
      p ? Q(p, [E, ie]) : ie();
    },
    leave(E, p) {
      const h = String(e.key);
      if (E[Ln] && E[Ln](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return p();
      te(m, [E]);
      let v = !1;
      E[We] = (ie) => {
        v || (v = !0, p(), ie ? te(x, [E]) : te(z, [E]), E[We] = void 0, ee[h] === e && delete ee[h]);
      };
      const P = E[We].bind(null, !1);
      ee[h] = e, k ? Q(k, [E, P]) : P();
    },
    clone(E) {
      const p = ui(
        E,
        t,
        n,
        s,
        r
      );
      return r && r(p), p;
    }
  };
  return re;
}
function Or(e) {
  if (Ni(e))
    return e = Bt(e), e.children = null, e;
}
function Us(e) {
  if (!Ni(e))
    return mr(e.type) && e.children ? ya(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && de(n.default))
      return n.default();
  }
}
function ns(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    ns(
      mr(n.type) && Us(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ka(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === J ? (o.patchFlag & 128 && r++, s = s.concat(
      ka(o.children, t, l)
    )) : (t || o.type !== Ne) && s.push(l != null ? Bt(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Be(e, t) {
  return de(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    je({ name: e.name }, t, { setup: e })
  ) : e;
}
function xd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function $o(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Hs = /* @__PURE__ */ new WeakMap();
function Gn(e, t, n, s, r = !1) {
  if (se(e)) {
    e.forEach(
      (x, $) => Gn(
        x,
        t && (se(t) ? t[$] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Kn(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Gn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? vr(s.component) : s.el, o = r ? null : i, { i: l, r: a } = e, c = t && t.r, u = l.refs === ve ? l.refs = {} : l.refs, f = l.setupState, m = /* @__PURE__ */ ae(f), k = f === ve ? jl : (x) => $o(u, x) ? !1 : fe(m, x), z = (x, $) => !($ && $o(u, $));
  if (c != null && c !== a) {
    if (So(t), be(c))
      u[c] = null, k(c) && (f[c] = null);
    else if (/* @__PURE__ */ Pe(c)) {
      const x = t;
      z(c, x.k) && (c.value = null), x.k && (u[x.k] = null);
    }
  }
  if (de(a))
    hs(a, l, 12, [o, u]);
  else {
    const x = be(a), $ = /* @__PURE__ */ Pe(a);
    if (x || $) {
      const F = () => {
        if (e.f) {
          const O = x ? k(a) ? f[a] : u[a] : z() || !e.k ? a.value : u[e.k];
          if (r)
            se(O) && Bl(O, i);
          else if (se(O))
            O.includes(i) || O.push(i);
          else if (x)
            u[a] = [i], k(a) && (f[a] = u[a]);
          else {
            const M = [i];
            z(a, e.k) && (a.value = M), e.k && (u[e.k] = M);
          }
        } else x ? (u[a] = o, k(a) && (f[a] = o)) : $ && (z(a, e.k) && (a.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const O = () => {
          F(), Hs.delete(e);
        };
        O.id = -1, Hs.set(e, O), Le(O, n);
      } else
        So(e), F();
    }
  }
}
function So(e) {
  const t = Hs.get(e);
  t && (t.flags |= 8, Hs.delete(e));
}
ur().requestIdleCallback;
ur().cancelIdleCallback;
const Kn = (e) => !!e.type.__asyncLoader, Ni = (e) => e.type.__isKeepAlive;
function vd(e, t, n = Vt, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ot();
      const l = Ri(n), a = st(t, n, e, o);
      return l(), Ft(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const wa = (e) => (t, n = Vt) => {
  (!is || e === "sp") && vd(e, (...s) => t(...s), n);
}, za = wa("m"), Pi = wa(
  "bum"
), yd = /* @__PURE__ */ Symbol.for("v-ndc");
function ce(e, t, n, s) {
  let r;
  const i = n, o = se(e);
  if (o || be(e)) {
    const l = o && /* @__PURE__ */ Lt(e);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ qe(e), c = /* @__PURE__ */ xt(e), e = Ar(e)), r = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      r[u] = t(
        a ? c ? jt(Ye(e[u])) : Ye(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (he(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, a) => t(l, a, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const u = l[a];
        r[a] = t(e[u], u, a, i);
      }
    }
  else
    r = [];
  return r;
}
const di = (e) => e ? Va(e) ? vr(e) : di(e.parent) : null, qn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ je(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => di(e.parent),
    $root: (e) => di(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ii(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Aa.bind(e.proxy)),
    $watch: (e) => rn
  })
), Fr = (e, t) => e !== ve && !e.__isScriptSetup && fe(e, t), bd = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const m = o[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Fr(s, t))
          return o[t] = 1, s[t];
        if (fe(i, t))
          return o[t] = 3, i[t];
        if (n !== ve && fe(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = qn[t];
    let u, f;
    if (c)
      return t === "$attrs" && Te(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ve && fe(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      f = a.config.globalProperties, fe(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Fr(r, t) ? (r[t] = n, !0) : fe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let a;
    return !!(n[l] || Fr(t, l) || fe(i, l) || fe(s, l) || fe(qn, l) || fe(r.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : fe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function _a() {
  return {
    app: null,
    config: {
      isNativeTag: jl,
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
let kd = 0;
function wd(e, t) {
  return function(s, r = null) {
    de(s) || (s = je({}, s)), r != null && !he(r) && (r = null);
    const i = _a(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = i.app = {
      _uid: kd++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: eA,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...f) {
        return o.has(u) || (u && de(u.install) ? (o.add(u), u.install(c, ...f)) : de(u) && (o.add(u), u(c, ...f))), c;
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
      mount(u, f, m) {
        if (!a) {
          const k = c._ceVNode || Ee(s, r);
          return k.appContext = i, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(k, u, m), a = !0, c._container = u, u.__vue_app__ = c, vr(k.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (st(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, f) {
        return i.provides[u] = f, c;
      },
      runWithContext(u) {
        const f = _n;
        _n = c;
        try {
          return u();
        } finally {
          _n = f;
        }
      }
    };
    return c;
  };
}
let _n = null;
const zd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${et(t)}Modifiers`] || e[`${fn(t)}Modifiers`];
function _d(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ve;
  let r = n;
  const i = t.startsWith("update:"), o = i && zd(s, t.slice(7));
  o && (o.trim && (r = n.map((u) => be(u) ? u.trim() : u)), o.number && (r = r.map(cr)));
  let l, a = s[l = Nr(t)] || // also try camelCase event handler (#2249)
  s[l = Nr(et(t))];
  !a && i && (a = s[l = Nr(fn(t))]), a && st(
    a,
    e,
    6,
    r
  );
  const c = s[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, st(
      c,
      e,
      6,
      r
    );
  }
}
function $d(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {};
  return i ? (se(i) ? i.forEach((l) => o[l] = null) : je(o, i), he(e) && s.set(e, o), o) : (he(e) && s.set(e, null), null);
}
function gr(e, t) {
  return !e || !or(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), fe(e, t[0].toLowerCase() + t.slice(1)) || fe(e, fn(t)) || fe(e, t));
}
function Co(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: a,
    render: c,
    renderCache: u,
    props: f,
    data: m,
    setupState: k,
    ctx: z,
    inheritAttrs: x
  } = e, $ = Vs(e);
  let F, O;
  try {
    if (n.shapeFlag & 4) {
      const T = r || s, ee = T;
      F = ft(
        c.call(
          ee,
          T,
          u,
          f,
          k,
          m,
          z
        )
      ), O = l;
    } else {
      const T = t;
      F = ft(
        T.length > 1 ? T(
          f,
          { attrs: l, slots: o, emit: a }
        ) : T(
          f,
          null
        )
      ), O = t.props ? l : Sd(l);
    }
  } catch (T) {
    ln.length = 0, pr(T, e, 1), F = Ee(Ne);
  }
  let M = F;
  if (O && x !== !1) {
    const T = Object.keys(O), { shapeFlag: ee } = M;
    T.length && ee & 7 && (i && T.some(lr) && (O = Cd(
      O,
      i
    )), M = Bt(M, O, !1, !0));
  }
  if (n.dirs && (M = Bt(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const T = mr(M.type) && Us(M) || M;
    ns(T, n.transition);
  }
  return F = M, Vs($), F;
}
const Sd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || or(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Cd = (e, t) => {
  const n = {};
  for (const s in e)
    (!lr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Ed(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: a } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Eo(s, o, c) : !!o;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const m = u[f];
        if ($a(o, s, m) && !gr(c, m))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Eo(s, o, c) : !0 : !!o;
  return !1;
}
function Eo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if ($a(t, e, i) && !gr(n, i))
      return !0;
  }
  return !1;
}
function $a(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && he(s) && he(r) ? !Rt(s, r) : s !== r;
}
function Md({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Sa = {}, Ca = () => Object.create(Sa), Ea = (e) => Object.getPrototypeOf(e) === Sa;
function Td(e, t, n, s = !1) {
  const r = {}, i = Ca();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ma(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ Qu(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Id(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ae(r), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let m = u[f];
        if (gr(e.emitsOptions, m))
          continue;
        const k = t[m];
        if (a)
          if (fe(i, m))
            k !== i[m] && (i[m] = k, c = !0);
          else {
            const z = et(m);
            r[z] = Ai(
              a,
              l,
              z,
              k,
              e,
              !1
            );
          }
        else
          k !== i[m] && (i[m] = k, c = !0);
      }
    }
  } else {
    Ma(e, t, r, i) && (c = !0);
    let u;
    for (const f in l)
      (!t || // for camelCase
      !fe(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = fn(f)) === f || !fe(t, u))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[f] = Ai(
        a,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete r[f]);
    if (i !== l)
      for (const f in i)
        (!t || !fe(t, f)) && (delete i[f], c = !0);
  }
  c && zt(e.attrs, "set", "");
}
function Ma(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (Un(a))
        continue;
      const c = t[a];
      let u;
      r && fe(r, u = et(a)) ? !i || !i.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : gr(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ ae(n), c = l || ve;
    for (let u = 0; u < i.length; u++) {
      const f = i[u];
      n[f] = Ai(
        r,
        a,
        f,
        c[f],
        e,
        !fe(c, f)
      );
    }
  }
  return o;
}
function Ai(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = fe(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && de(a)) {
        const { propsDefaults: c } = r;
        if (n in c)
          s = c[n];
        else {
          const u = Ri(r);
          s = c[n] = a.call(
            null,
            t
          ), u();
        }
      } else
        s = a;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === fn(n)) && (s = !0));
  }
  return s;
}
function Nd(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  if (!i)
    return he(e) && s.set(e, tn), tn;
  if (se(i))
    for (let c = 0; c < i.length; c++) {
      const u = et(i[c]);
      Mo(u) && (o[u] = ve);
    }
  else if (i)
    for (const c in i) {
      const u = et(c);
      if (Mo(u)) {
        const f = i[c], m = o[u] = se(f) || de(f) ? { type: f } : je({}, f), k = m.type;
        let z = !1, x = !0;
        if (se(k))
          for (let $ = 0; $ < k.length; ++$) {
            const F = k[$], O = de(F) && F.name;
            if (O === "Boolean") {
              z = !0;
              break;
            } else O === "String" && (x = !1);
          }
        else
          z = de(k) && k.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = z, m[
          1
          /* shouldCastTrue */
        ] = x, (z || fe(m, "default")) && l.push(u);
      }
    }
  const a = [o, l];
  return he(e) && s.set(e, a), a;
}
function Mo(e) {
  return e[0] !== "$" && !Un(e);
}
const Di = (e) => e === "_" || e === "_ctx" || e === "$stable", Li = (e) => se(e) ? e.map(ft) : [ft(e)], Pd = (e, t, n) => {
  if (t._n)
    return t;
  const s = ga((...r) => Li(t(...r)), n);
  return s._c = !1, s;
}, Ta = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Di(r)) continue;
    const i = e[r];
    if (de(i))
      t[r] = Pd(r, i, s);
    else if (i != null) {
      const o = Li(i);
      t[r] = () => o;
    }
  }
}, Ia = (e, t) => {
  const n = Li(t);
  e.slots.default = () => n;
}, Na = (e, t, n) => {
  for (const s in t)
    (n || !Di(s)) && (e[s] = t[s]);
}, Dd = (e, t, n) => {
  const s = e.slots = Ca();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Na(s, t, n), n && Gl(s, "_", r, !0)) : Ta(t, s);
  } else t && Ia(e, t);
}, Ld = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = ve;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Na(r, t, n) : (i = !t.$stable, Ta(t, r)), o = t;
  } else t && (Ia(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Di(l) && o[l] == null && delete r[l];
}, Le = Bd;
function Rd(e) {
  return Od(e);
}
function Od(e, t) {
  const n = ur();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: m,
    setScopeId: k = rn,
    insertStaticContent: z
  } = e, x = (g, b, S, L = null, I = null, D = null, U = void 0, V = null, B = !!b.dynamicChildren) => {
    if (g === b)
      return;
    g && !Xt(g, b) && (L = ks(g), K(g, I, D, !0), g = null), b.patchFlag === -2 && (B = !1, b.dynamicChildren = null), b.dynamicChildren && g && g.dynamicChildren && g.dynamicChildren.hasOnce && (b.dynamicChildren === tn && (b.dynamicChildren = []), b.dynamicChildren.hasOnce = !0);
    const { type: N, ref: X, shapeFlag: W } = b;
    switch (N) {
      case xr:
        $(g, b, S, L);
        break;
      case Ne:
        F(g, b, S, L);
        break;
      case Br:
        g == null && O(b, S, L, U);
        break;
      case J:
        v(
          g,
          b,
          S,
          L,
          I,
          D,
          U,
          V,
          B
        );
        break;
      default:
        W & 1 ? ee(
          g,
          b,
          S,
          L,
          I,
          D,
          U,
          V,
          B
        ) : W & 6 ? P(
          g,
          b,
          S,
          L,
          I,
          D,
          U,
          V,
          B
        ) : (W & 64 || W & 128) && N.process(
          g,
          b,
          S,
          L,
          I,
          D,
          U,
          V,
          B,
          Nn
        );
    }
    X != null && I ? Gn(X, g && g.ref, D, b || g, !b) : X == null && g && g.ref != null && Gn(g.ref, null, D, g, !0);
  }, $ = (g, b, S, L) => {
    if (g == null)
      s(
        b.el = l(b.children),
        S,
        L
      );
    else {
      const I = b.el = g.el;
      b.children !== g.children && c(I, b.children);
    }
  }, F = (g, b, S, L) => {
    g == null ? s(
      b.el = a(b.children || ""),
      S,
      L
    ) : b.el = g.el;
  }, O = (g, b, S, L) => {
    [g.el, g.anchor] = z(
      g.children,
      b,
      S,
      L,
      g.el,
      g.anchor
    );
  }, M = ({ el: g, anchor: b }, S, L) => {
    let I;
    for (; g && g !== b; )
      I = m(g), s(g, S, L), g = I;
    s(b, S, L);
  }, T = ({ el: g, anchor: b }) => {
    let S;
    for (; g && g !== b; )
      S = m(g), r(g), g = S;
    r(b);
  }, ee = (g, b, S, L, I, D, U, V, B) => {
    if (b.type === "svg" ? U = "svg" : b.type === "math" && (U = "mathml"), g == null)
      te(
        b,
        S,
        L,
        I,
        D,
        U,
        V,
        B
      );
    else {
      const N = g.el && g.el._isVueCE ? g.el : null;
      try {
        N && N._beginPatch(), E(
          g,
          b,
          I,
          D,
          U,
          V,
          B
        );
      } finally {
        N && N._endPatch();
      }
    }
  }, te = (g, b, S, L, I, D, U, V) => {
    let B, N;
    const { props: X, shapeFlag: W, transition: Y, dirs: ne } = g;
    if (B = g.el = o(
      g.type,
      D,
      X && X.is,
      X
    ), W & 8 ? u(B, g.children) : W & 16 && re(
      g.children,
      B,
      null,
      L,
      I,
      jr(g, D),
      U,
      V
    ), ne && qt(g, null, L, "created"), Q(B, g, g.scopeId, U, L), X) {
      for (const Ae in X)
        Ae !== "value" && !Un(Ae) && i(B, Ae, null, X[Ae], D, L);
      "value" in X && i(B, "value", null, X.value, D), (N = X.onVnodeBeforeMount) && ut(N, L, g);
    }
    ne && qt(g, null, L, "beforeMount");
    const oe = Fd(I, Y);
    oe && Y.beforeEnter(B), s(B, b, S), ((N = X && X.onVnodeMounted) || oe || ne) && Le(() => {
      try {
        N && ut(N, L, g), oe && Y.enter(B), ne && qt(g, null, L, "mounted");
      } finally {
      }
    }, I);
  }, Q = (g, b, S, L, I) => {
    if (S && k(g, S), L)
      for (let D = 0; D < L.length; D++)
        k(g, L[D]);
    if (I) {
      let D = I.subTree;
      if (b === D || Ra(D.type) && (D.ssContent === b || D.ssFallback === b)) {
        const U = I.vnode;
        Q(
          g,
          U,
          U.scopeId,
          U.slotScopeIds,
          I.parent
        );
      }
    }
  }, re = (g, b, S, L, I, D, U, V, B = 0) => {
    for (let N = B; N < g.length; N++) {
      const X = g[N] = V ? wt(g[N]) : ft(g[N]);
      x(
        null,
        X,
        b,
        S,
        L,
        I,
        D,
        U,
        V
      );
    }
  }, E = (g, b, S, L, I, D, U) => {
    const V = b.el = g.el;
    let { patchFlag: B, dynamicChildren: N, dirs: X } = b;
    B |= g.patchFlag & 16;
    const W = g.props || ve, Y = b.props || ve;
    let ne;
    if (S && Yt(S, !1), (ne = Y.onVnodeBeforeUpdate) && ut(ne, S, b, g), X && qt(b, g, S, "beforeUpdate"), S && Yt(S, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    N && (!g.dynamicChildren || g.dynamicChildren.length !== N.length) && (B = 0, U = !1, N = null), (W.innerHTML && Y.innerHTML == null || W.textContent && Y.textContent == null) && u(V, ""), N ? p(
      g.dynamicChildren,
      N,
      V,
      S,
      L,
      jr(b, I),
      D
    ) : U || Xe(
      g,
      b,
      V,
      null,
      S,
      L,
      jr(b, I),
      D,
      !1
    ), B > 0) {
      if (B & 16)
        h(V, W, Y, S, I);
      else if (B & 2 && W.class !== Y.class && i(V, "class", null, Y.class, I), B & 4 && i(V, "style", W.style, Y.style, I), B & 8) {
        const oe = b.dynamicProps;
        for (let Ae = 0; Ae < oe.length; Ae++) {
          const ue = oe[Ae], ke = W[ue], Se = Y[ue];
          (Se !== ke || ue === "value") && i(V, ue, ke, Se, I, S);
        }
      }
      B & 1 && g.children !== b.children && u(V, b.children);
    } else !U && N == null && h(V, W, Y, S, I);
    ((ne = Y.onVnodeUpdated) || X) && Le(() => {
      ne && ut(ne, S, b, g), X && qt(b, g, S, "updated");
    }, L);
  }, p = (g, b, S, L, I, D, U) => {
    for (let V = 0; V < b.length; V++) {
      const B = g[V], N = b[V], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        B.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (B.type === J || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xt(B, N) || // - In the case of a component, it could contain anything.
        B.shapeFlag & 198) ? f(B.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          S
        )
      );
      x(
        B,
        N,
        X,
        null,
        L,
        I,
        D,
        U,
        !0
      );
    }
  }, h = (g, b, S, L, I) => {
    if (b !== S) {
      if (b !== ve)
        for (const D in b)
          !Un(D) && !(D in S) && i(
            g,
            D,
            b[D],
            null,
            I,
            L
          );
      for (const D in S) {
        if (Un(D)) continue;
        const U = S[D], V = b[D];
        U !== V && D !== "value" && i(g, D, V, U, I, L);
      }
      "value" in S && i(g, "value", b.value, S.value, I);
    }
  }, v = (g, b, S, L, I, D, U, V, B) => {
    const N = b.el = g ? g.el : l(""), X = b.anchor = g ? g.anchor : l("");
    let { patchFlag: W, dynamicChildren: Y, slotScopeIds: ne } = b;
    ne && (V = V ? V.concat(ne) : ne), g == null ? (s(N, S, L), s(X, S, L), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      S,
      X,
      I,
      D,
      U,
      V,
      B
    )) : W > 0 && W & 64 && Y && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === Y.length ? (p(
      g.dynamicChildren,
      Y,
      S,
      I,
      D,
      U,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || I && b === I.subTree) && Pa(
      g,
      b,
      !0
      /* shallow */
    )) : Xe(
      g,
      b,
      S,
      X,
      I,
      D,
      U,
      V,
      B
    );
  }, P = (g, b, S, L, I, D, U, V, B) => {
    b.slotScopeIds = V, g == null ? b.shapeFlag & 512 ? I.ctx.activate(
      b,
      S,
      L,
      U,
      B
    ) : ie(
      b,
      S,
      L,
      I,
      D,
      U,
      B
    ) : le(g, b, B);
  }, ie = (g, b, S, L, I, D, U) => {
    const V = g.component = Kd(
      g,
      L,
      I
    );
    if (Ni(g) && (V.ctx.renderer = Nn), qd(V, !1, U), V.asyncDep) {
      if (I && I.registerDep(V, De, U), !g.el) {
        const B = V.subTree = Ee(Ne);
        F(null, B, b, S), g.placeholder = B.el;
      }
    } else
      De(
        V,
        g,
        b,
        S,
        I,
        D,
        U
      );
  }, le = (g, b, S) => {
    const L = b.component = g.component;
    if (Ed(g, b, S))
      if (L.asyncDep && !L.asyncResolved) {
        b.el = g.el, ot(L, b, S);
        return;
      } else
        L.next = b, L.update();
    else
      b.el = g.el, L.vnode = b;
  }, De = (g, b, S, L, I, D, U) => {
    const V = () => {
      if (g.isMounted) {
        let { next: W, bu: Y, u: ne, parent: oe, vnode: Ae } = g;
        {
          const at = Da(g);
          if (at) {
            W && (W.el = Ae.el, ot(g, W, U)), at.asyncDep.then(() => {
              Le(() => {
                g.isUnmounted || N();
              }, I);
            });
            return;
          }
        }
        let ue = W, ke;
        Yt(g, !1), W ? (W.el = Ae.el, ot(g, W, U)) : W = Ae, Y && Is(Y), (ke = W.props && W.props.onVnodeBeforeUpdate) && ut(ke, oe, W, Ae), Yt(g, !0);
        const Se = Co(g), lt = g.subTree;
        g.subTree = Se, x(
          lt,
          Se,
          // parent may have changed if it's in a teleport
          f(lt.el),
          // anchor may have changed if it's in a fragment
          ks(lt),
          g,
          I,
          D
        ), W.el = Se.el, ue === null && Md(g, Se.el), ne && Le(ne, I), (ke = W.props && W.props.onVnodeUpdated) && Le(
          () => ut(ke, oe, W, Ae),
          I
        );
      } else {
        let W;
        const { el: Y, props: ne } = b, { bm: oe, m: Ae, parent: ue, root: ke, type: Se } = g, lt = Kn(b);
        Yt(g, !1), oe && Is(oe), !lt && (W = ne && ne.onVnodeBeforeMount) && ut(W, ue, b), Yt(g, !0);
        {
          ke.ce && ke.ce._hasShadowRoot() && ke.ce._injectChildStyle(
            Se,
            g.parent ? g.parent.type : void 0
          );
          const at = g.subTree = Co(g);
          x(
            null,
            at,
            S,
            L,
            g,
            I,
            D
          ), b.el = at.el;
        }
        if (Ae && Le(Ae, I), !lt && (W = ne && ne.onVnodeMounted)) {
          const at = b;
          Le(
            () => ut(W, ue, at),
            I
          );
        }
        (b.shapeFlag & 256 || ue && Kn(ue.vnode) && ue.vnode.shapeFlag & 256) && g.a && Le(g.a, I), g.isMounted = !0, b = S = L = null;
      }
    };
    g.scope.on();
    const B = g.effect = new Jl(V);
    g.scope.off();
    const N = g.update = B.run.bind(B), X = g.job = B.runIfDirty.bind(B);
    X.i = g, X.id = g.uid, B.scheduler = () => Ii(X), Yt(g, !0), N();
  }, ot = (g, b, S) => {
    b.component = g;
    const L = g.vnode.props;
    g.vnode = b, g.next = null, Id(g, b.props, L, S), Ld(g, b.children, S), Ot(), _o(g), Ft();
  }, Xe = (g, b, S, L, I, D, U, V, B = !1) => {
    const N = g && g.children, X = g ? g.shapeFlag : 0, W = b.children, { patchFlag: Y, shapeFlag: ne } = b;
    if (Y > 0) {
      if (Y & 128) {
        Kt(
          N,
          W,
          S,
          L,
          I,
          D,
          U,
          V,
          B
        );
        return;
      } else if (Y & 256) {
        xn(
          N,
          W,
          S,
          L,
          I,
          D,
          U,
          V,
          B
        );
        return;
      }
    }
    ne & 8 ? (X & 16 && Mt(N, I, D), W !== N && u(S, W)) : X & 16 ? ne & 16 ? Kt(
      N,
      W,
      S,
      L,
      I,
      D,
      U,
      V,
      B
    ) : Mt(N, I, D, !0) : (X & 8 && u(S, ""), ne & 16 && re(
      W,
      S,
      L,
      I,
      D,
      U,
      V,
      B
    ));
  }, xn = (g, b, S, L, I, D, U, V, B) => {
    g = g || tn, b = b || tn;
    const N = g.length, X = b.length, W = Math.min(N, X);
    let Y;
    for (Y = 0; Y < W; Y++) {
      const ne = b[Y] = B ? wt(b[Y]) : ft(b[Y]);
      x(
        g[Y],
        ne,
        S,
        null,
        I,
        D,
        U,
        V,
        B
      );
    }
    N > X ? Mt(
      g,
      I,
      D,
      !0,
      !1,
      W
    ) : re(
      b,
      S,
      L,
      I,
      D,
      U,
      V,
      B,
      W
    );
  }, Kt = (g, b, S, L, I, D, U, V, B) => {
    let N = 0;
    const X = b.length;
    let W = g.length - 1, Y = X - 1;
    for (; N <= W && N <= Y; ) {
      const ne = g[N], oe = b[N] = B ? wt(b[N]) : ft(b[N]);
      if (Xt(ne, oe))
        x(
          ne,
          oe,
          S,
          null,
          I,
          D,
          U,
          V,
          B
        );
      else
        break;
      N++;
    }
    for (; N <= W && N <= Y; ) {
      const ne = g[W], oe = b[Y] = B ? wt(b[Y]) : ft(b[Y]);
      if (Xt(ne, oe))
        x(
          ne,
          oe,
          S,
          null,
          I,
          D,
          U,
          V,
          B
        );
      else
        break;
      W--, Y--;
    }
    if (N > W) {
      if (N <= Y) {
        const ne = Y + 1, oe = ne < X ? b[ne].el : L;
        for (; N <= Y; )
          x(
            null,
            b[N] = B ? wt(b[N]) : ft(b[N]),
            S,
            oe,
            I,
            D,
            U,
            V,
            B
          ), N++;
      }
    } else if (N > Y)
      for (; N <= W; )
        K(g[N], I, D, !0), N++;
    else {
      const ne = N, oe = N, Ae = /* @__PURE__ */ new Map();
      for (N = oe; N <= Y; N++) {
        const Re = b[N] = B ? wt(b[N]) : ft(b[N]);
        Re.key != null && Ae.set(Re.key, N);
      }
      let ue, ke = 0;
      const Se = Y - oe + 1;
      let lt = !1, at = 0;
      const Pn = new Array(Se);
      for (N = 0; N < Se; N++) Pn[N] = 0;
      for (N = ne; N <= W; N++) {
        const Re = g[N];
        if (ke >= Se) {
          K(Re, I, D, !0);
          continue;
        }
        let ct;
        if (Re.key != null)
          ct = Ae.get(Re.key);
        else
          for (ue = oe; ue <= Y; ue++)
            if (Pn[ue - oe] === 0 && Xt(Re, b[ue])) {
              ct = ue;
              break;
            }
        ct === void 0 ? K(Re, I, D, !0) : (Pn[ct - oe] = N + 1, ct >= at ? at = ct : lt = !0, x(
          Re,
          b[ct],
          S,
          null,
          I,
          D,
          U,
          V,
          B
        ), ke++);
      }
      const mo = lt ? jd(Pn) : tn;
      for (ue = mo.length - 1, N = Se - 1; N >= 0; N--) {
        const Re = oe + N, ct = b[Re], go = b[Re + 1], xo = Re + 1 < X ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          go.el || La(go)
        ) : L;
        Pn[N] === 0 ? x(
          null,
          ct,
          S,
          xo,
          I,
          D,
          U,
          V,
          B
        ) : lt && (ue < 0 || N !== mo[ue] ? j(ct, S, xo, 2) : ue--);
      }
    }
  }, j = (g, b, S, L, I = null) => {
    const { el: D, type: U, transition: V, children: B, shapeFlag: N } = g;
    if (N & 6) {
      j(g.component.subTree, b, S, L);
      return;
    }
    if (N & 128) {
      g.suspense.move(b, S, L);
      return;
    }
    if (N & 64) {
      U.move(g, b, S, Nn);
      return;
    }
    if (U === J) {
      s(D, b, S);
      for (let W = 0; W < B.length; W++)
        j(B[W], b, S, L);
      s(g.anchor, b, S);
      return;
    }
    if (U === Br) {
      M(g, b, S);
      return;
    }
    if (L !== 2 && N & 1 && V)
      if (L === 0)
        V.persisted && !D[We] ? s(D, b, S) : (V.beforeEnter(D), s(D, b, S), Le(() => V.enter(D), I));
      else {
        const { leave: W, delayLeave: Y, afterLeave: ne } = V, oe = () => {
          g.ctx.isUnmounted ? r(D) : s(D, b, S);
        }, Ae = () => {
          const ue = D._isLeaving || !!D[We];
          D._isLeaving && D[We](
            !0
            /* cancelled */
          ), V.persisted && !ue ? oe() : W(D, () => {
            oe(), ne && ne();
          });
        };
        Y ? Y(D, oe, Ae) : Ae();
      }
    else
      s(D, b, S);
  }, K = (g, b, S, L = !1, I = !1) => {
    const {
      type: D,
      props: U,
      ref: V,
      children: B,
      dynamicChildren: N,
      shapeFlag: X,
      patchFlag: W,
      dirs: Y,
      cacheIndex: ne,
      memo: oe
    } = g;
    if ((W === -2 || N && N.hasOnce) && (I = !1), V != null && (Ot(), Gn(V, null, S, g, !0), Ft()), ne != null && (!g.ctx || g.ctx === b) && (b.renderCache[ne] = void 0), X & 256) {
      b.ctx.deactivate(g);
      return;
    }
    const Ae = X & 1 && Y, ue = !Kn(g);
    let ke;
    if (ue && (ke = U && U.onVnodeBeforeUnmount) && ut(ke, b, g), X & 6)
      bs(g.component, S, L);
    else {
      if (X & 128) {
        g.suspense.unmount(S, L);
        return;
      }
      Ae && qt(g, null, b, "beforeUnmount"), X & 64 ? g.type.remove(
        g,
        b,
        S,
        Nn,
        L
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (D !== J || W > 0 && W & 64) ? Mt(
        N,
        b,
        S,
        !1,
        !0
      ) : (D === J && W & 384 || !I && X & 16) && Mt(B, b, S), L && G(g);
    }
    const Se = oe != null && ne == null;
    (ue && (ke = U && U.onVnodeUnmounted) || Ae || Se) && Le(() => {
      ke && ut(ke, b, g), Ae && qt(g, null, b, "unmounted"), Se && (g.el = null);
    }, S);
  }, G = (g) => {
    const { type: b, el: S, anchor: L, transition: I } = g;
    if (b === J) {
      ge(S, L);
      return;
    }
    if (b === Br) {
      T(g), I && !I.persisted && I.afterLeave && I.afterLeave();
      return;
    }
    const D = () => {
      r(S), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (g.shapeFlag & 1 && I && !I.persisted) {
      const { leave: U, delayLeave: V } = I, B = () => U(S, D);
      V ? V(g.el, D, B) : B();
    } else
      D();
  }, ge = (g, b) => {
    let S;
    for (; g !== b; )
      S = m(g), r(g), g = S;
    r(b);
  }, bs = (g, b, S) => {
    const { bum: L, scope: I, job: D, subTree: U, um: V, m: B, a: N } = g;
    To(B), To(N), L && Is(L), I.stop(), D ? (D.flags |= 8, K(U, g, b, S)) : g.vnode.el && U && (U.transition = g.vnode.transition, K(U, g, b, S)), V && Le(V, b), Le(() => {
      g.isUnmounted = !0;
    }, b);
  }, Mt = (g, b, S, L = !1, I = !1, D = 0) => {
    for (let U = D; U < g.length; U++)
      K(g[U], b, S, L, I);
  }, ks = (g) => {
    if (g.shapeFlag & 6)
      return ks(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const b = m(g.anchor || g.el), S = b && b[pd];
    return S ? m(S) : b;
  };
  let Ir = !1;
  const ho = (g, b, S) => {
    let L;
    g == null ? b._vnode && (K(b._vnode, null, null, !0), L = b._vnode.component) : x(
      b._vnode || null,
      g,
      b,
      null,
      null,
      null,
      S
    ), b._vnode = g, Ir || (Ir = !0, _o(L), pa(), Ir = !1);
  }, Nn = {
    p: x,
    um: K,
    m: j,
    r: G,
    mt: ie,
    mc: re,
    pc: Xe,
    pbc: p,
    n: ks,
    o: e
  };
  return {
    render: ho,
    hydrate: void 0,
    createApp: wd(ho)
  };
}
function jr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Yt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Fd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pa(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (se(s) && se(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = wt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Pa(o, l)), l.type === xr && (l.patchFlag === -1 && (l = r[i] = wt(l)), l.el = o.el), l.type === Ne && !l.el && (l.el = o.el);
    }
}
function jd(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (r = n[n.length - 1], e[r] < c) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < c ? i = l + 1 : o = l;
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Da(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Da(t);
}
function To(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function La(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? La(t.subTree) : null;
}
const Ra = (e) => e.__isSuspense;
function Bd(e, t) {
  t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : cd(e);
}
const J = /* @__PURE__ */ Symbol.for("v-fgt"), xr = /* @__PURE__ */ Symbol.for("v-txt"), Ne = /* @__PURE__ */ Symbol.for("v-cmt"), Br = /* @__PURE__ */ Symbol.for("v-stc"), ln = [];
let Oe = null;
function y(e = !1) {
  ln.push(Oe = e ? null : []);
}
function Oa() {
  ln.pop(), Oe = ln[ln.length - 1] || null;
}
let ss = 1;
function Ws(e, t = !1) {
  ss += e, e < 0 && Oe && t && (Oe.hasOnce = !0);
}
function Fa(e) {
  return e.dynamicChildren = ss > 0 ? Oe || tn : null, Oa(), ss > 0 && Oe && Oe.push(e), e;
}
function w(e, t, n, s, r, i) {
  return Fa(
    d(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Ge(e, t, n, s, r) {
  return Fa(
    Ee(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Gs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ja = ({ key: e }) => e ?? null, Ns = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? be(e) || /* @__PURE__ */ Pe(e) || de(e) ? { i: Ke, r: e, k: t, f: !!n } : e : null);
function d(e, t = null, n = null, s = 0, r = null, i = e === J ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ja(t),
    ref: t && Ns(t),
    scopeId: ma,
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
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ke
  };
  return l ? (Ks(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= be(n) ? 8 : 16), ss > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Oe.push(a), a;
}
const Ee = Vd;
function Vd(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === yd) && (e = Ne), Gs(e)) {
    const l = Bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ks(l, n), ss > 0 && !i && Oe && (l.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = l : Oe.push(l)), l.patchFlag = -2, l;
  }
  if (Qd(e) && (e = e.__vccOpts), t) {
    t = Ud(t);
    let { class: l, style: a } = t;
    l && !be(l) && (t.class = Z(l)), he(a) && (/* @__PURE__ */ Ti(a) && !se(a) && (a = je({}, a)), t.style = dr(a));
  }
  const o = be(e) ? 1 : Ra(e) ? 128 : mr(e) ? 64 : he(e) ? 4 : de(e) ? 2 : 0;
  return d(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function Ud(e) {
  return e ? /* @__PURE__ */ Ti(e) || Ea(e) ? je({}, e) : e : null;
}
function Bt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e, c = t ? Hd(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ja(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? se(i) ? i.concat(Ns(t)) : [i, Ns(t)] : Ns(t)
    ) : i,
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
    patchFlag: t && e.type !== J ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Bt(e.ssContent),
    ssFallback: e.ssFallback && Bt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && ns(
    u,
    a.clone(u)
  ), u;
}
function Me(e = " ", t = 0) {
  return Ee(xr, null, e, t);
}
function R(e = "", t = !1) {
  return t ? (y(), Ge(Ne, null, e)) : Ee(Ne, null, e);
}
function ft(e) {
  return e == null || typeof e == "boolean" ? Ee(Ne) : se(e) ? Ee(
    J,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gs(e) ? wt(e) : Ee(xr, null, String(e));
}
function wt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bt(e);
}
function Ks(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (se(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ks(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ea(t) ? t._ctx = Ke : r === 3 && Ke && (Ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (s & 65) {
      Ks(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ke }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Me(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Hd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Z([t.class, s.class]));
      else if (r === "style")
        t.style = dr([t.style, s.style]);
      else if (or(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(se(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !lr(r) && (t[r] = o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function ut(e, t, n, s = null) {
  st(e, t, 7, [
    n,
    s
  ]);
}
const Wd = _a();
let Gd = 0;
function Kd(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Wd, i = {
    uid: Gd++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Nu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Nd(s, r),
    emitsOptions: $d(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ve,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ve,
    data: ve,
    props: ve,
    attrs: ve,
    slots: ve,
    refs: ve,
    setupState: ve,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = _d.bind(null, i), e.ce && e.ce(i), i;
}
let Vt = null;
const Ba = () => Vt || Ke;
let qs, rs;
{
  const e = ur(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  qs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Vt = n
  ), rs = t(
    "__VUE_SSR_SETTERS__",
    (n) => is = n
  );
}
const Ri = (e) => {
  const t = Vt;
  return qs(e), e.scope.on(), () => {
    e.scope.off(), qs(t);
  };
}, Io = () => {
  Vt && Vt.scope.off(), qs(null);
};
function Va(e) {
  return e.vnode.shapeFlag & 4;
}
let is = !1;
function qd(e, t = !1, n = !1) {
  t && rs(t);
  const { props: s, children: r } = e.vnode, i = Va(e);
  Td(e, s, i, t), Dd(e, r, n || t);
  const o = i ? Yd(e, t) : void 0;
  return t && rs(!1), o;
}
function Yd(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, bd);
  const { setup: s } = n;
  if (s) {
    Ot();
    const r = e.setupContext = s.length > 1 ? Zd(e) : null, i = Ri(e), o = hs(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Vl(o);
    if (Ft(), i(), (l || e.sp) && !Kn(e) && xd(e), l) {
      if (o.then(Io, Io), t)
        return o.then((a) => {
          rs(!0);
          try {
            No(e, a, t);
          } finally {
            rs(!1);
          }
        }).catch((a) => {
          pr(a, e, 0);
        });
      e.asyncDep = o;
    } else
      No(e, o);
  } else
    Ua(e);
}
function No(e, t, n) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = ua(t)), Ua(e);
}
function Ua(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || rn);
}
const Jd = {
  get(e, t) {
    return Te(e, "get", ""), e[t];
  }
};
function Zd(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Jd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ua(Xu(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in qn)
        return qn[n](e);
    },
    has(t, n) {
      return n in t || n in qn;
    }
  })) : e.proxy;
}
function Qd(e) {
  return de(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ rd(e, t, is);
function Xd(e, t, n) {
  try {
    Ws(-1);
    const s = arguments.length;
    return s === 2 ? he(t) && !se(t) ? Gs(t) ? Ee(e, null, [t]) : Ee(e, t) : Ee(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Gs(n) && (n = [n]), Ee(e, t, n));
  } finally {
    Ws(1);
  }
}
const eA = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let fi;
const Po = typeof window < "u" && window.trustedTypes;
if (Po)
  try {
    fi = /* @__PURE__ */ Po.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ha = fi ? (e) => fi.createHTML(e) : (e) => e, tA = "http://www.w3.org/2000/svg", nA = "http://www.w3.org/1998/Math/MathML", kt = typeof document < "u" ? document : null, Do = kt && /* @__PURE__ */ kt.createElement("template"), sA = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? kt.createElementNS(tA, e) : t === "mathml" ? kt.createElementNS(nA, e) : n ? kt.createElement(e, { is: n }) : kt.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => kt.createTextNode(e),
  createComment: (e) => kt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => kt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Do.innerHTML = Ha(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Do.content;
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
}, Tt = "transition", Rn = "animation", os = /* @__PURE__ */ Symbol("_vtc"), Wa = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, rA = /* @__PURE__ */ je(
  {},
  xa,
  Wa
), iA = (e) => (e.displayName = "Transition", e.props = rA, e), oA = /* @__PURE__ */ iA(
  (e, { slots: t }) => Xd(gd, lA(e), t)
), Jt = (e, t = []) => {
  se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Lo = (e) => e ? se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function lA(e) {
  const t = {};
  for (const v in e)
    v in Wa || (t[v] = e[v]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = i,
    appearActiveClass: c = o,
    appearToClass: u = l,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: m = `${n}-leave-active`,
    leaveToClass: k = `${n}-leave-to`
  } = e, z = aA(r), x = z && z[0], $ = z && z[1], {
    onBeforeEnter: F,
    onEnter: O,
    onEnterCancelled: M,
    onLeave: T,
    onLeaveCancelled: ee,
    onBeforeAppear: te = F,
    onAppear: Q = O,
    onAppearCancelled: re = M
  } = t, E = (v, P, ie, le) => {
    v._enterCancelled = le, Zt(v, P ? u : l), Zt(v, P ? c : o), ie && ie();
  }, p = (v, P) => {
    v._isLeaving = !1, Zt(v, f), Zt(v, k), Zt(v, m), P && P();
  }, h = (v) => (P, ie) => {
    const le = v ? Q : O, De = () => E(P, v, ie);
    Jt(le, [P, De]), Ro(() => {
      Zt(P, v ? a : i), bt(P, v ? u : l), Lo(le) || Oo(P, s, x, De);
    });
  };
  return je(t, {
    onBeforeEnter(v) {
      Jt(F, [v]), bt(v, i), bt(v, o);
    },
    onBeforeAppear(v) {
      Jt(te, [v]), bt(v, a), bt(v, c);
    },
    onEnter: h(!1),
    onAppear: h(!0),
    onLeave(v, P) {
      v._isLeaving = !0;
      const ie = () => p(v, P);
      bt(v, f), v._enterCancelled ? (bt(v, m), Bo(v)) : (Bo(v), bt(v, m)), Ro(() => {
        v._isLeaving && (Zt(v, f), bt(v, k), Lo(T) || Oo(v, s, $, ie));
      }), Jt(T, [v, ie]);
    },
    onEnterCancelled(v) {
      E(v, !1, void 0, !0), Jt(M, [v]);
    },
    onAppearCancelled(v) {
      E(v, !0, void 0, !0), Jt(re, [v]);
    },
    onLeaveCancelled(v) {
      p(v), Jt(ee, [v]);
    }
  });
}
function aA(e) {
  if (e == null)
    return null;
  if (he(e))
    return [Vr(e.enter), Vr(e.leave)];
  {
    const t = Vr(e);
    return [t, t];
  }
}
function Vr(e) {
  return wu(e);
}
function bt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[os] || (e[os] = /* @__PURE__ */ new Set())).add(t);
}
function Zt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[os];
  n && (n.delete(t), n.size || (e[os] = void 0));
}
function Ro(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let cA = 0;
function Oo(e, t, n, s) {
  const r = e._endId = ++cA, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: a } = uA(e, t);
  if (!o)
    return s();
  const c = o + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(c, m), i();
  }, m = (k) => {
    k.target === e && ++u >= a && f();
  };
  setTimeout(() => {
    u < a && f();
  }, l + 1), e.addEventListener(c, m);
}
function uA(e, t) {
  const n = window.getComputedStyle(e), s = (z) => (n[z] || "").split(", "), r = s(`${Tt}Delay`), i = s(`${Tt}Duration`), o = Fo(r, i), l = s(`${Rn}Delay`), a = s(`${Rn}Duration`), c = Fo(l, a);
  let u = null, f = 0, m = 0;
  t === Tt ? o > 0 && (u = Tt, f = o, m = i.length) : t === Rn ? c > 0 && (u = Rn, f = c, m = a.length) : (f = Math.max(o, c), u = f > 0 ? o > c ? Tt : Rn : null, m = u ? u === Tt ? i.length : a.length : 0);
  const k = u === Tt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Tt}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: m,
    hasTransform: k
  };
}
function Fo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => jo(n) + jo(e[s])));
}
function jo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Bo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function dA(e, t, n) {
  const s = e[os];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Vo = /* @__PURE__ */ Symbol("_vod"), AA = /* @__PURE__ */ Symbol("_vsh"), fA = /* @__PURE__ */ Symbol(""), pA = /(?:^|;)\s*display\s*:/;
function hA(e, t, n) {
  const s = e.style, r = be(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (be(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Bn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Bn(s, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? gA(
        e,
        o,
        !be(t) && t ? t[o] : void 0,
        l
      ) || Bn(s, o, l) : Bn(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[fA];
      o && (n += ";" + o), s.cssText = n, i = pA.test(n);
    }
  } else t && e.removeAttribute("style");
  Vo in e && (e[Vo] = i ? s.display : "", e[AA] && (s.display = "none"));
}
const $s = /\s*!important$/;
function Bn(e, t, n) {
  if (se(n))
    n.forEach((s) => Bn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    $s.test(n) ? e.setProperty(t, n.replace($s, ""), "important") : e.setProperty(t, n);
  else {
    const s = mA(e, t);
    $s.test(n) ? e.setProperty(
      fn(s),
      n.replace($s, ""),
      "important"
    ) : e[s] = n;
  }
}
const Uo = ["Webkit", "Moz", "ms"], Ur = {};
function mA(e, t) {
  const n = Ur[t];
  if (n)
    return n;
  let s = et(t);
  if (s !== "filter" && s in e)
    return Ur[t] = s;
  s = Wl(s);
  for (let r = 0; r < Uo.length; r++) {
    const i = Uo[r] + s;
    if (i in e)
      return Ur[t] = i;
  }
  return t;
}
function gA(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && be(s) && n === s;
}
const Ho = "http://www.w3.org/1999/xlink";
function Wo(e, t, n, s, r, i = Eu(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ho, t.slice(6, t.length)) : e.setAttributeNS(Ho, t, n) : n == null || i && !Kl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : gt(n) ? String(n) : n
  );
}
function Go(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ha(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
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
    l === "boolean" ? n = Kl(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function en(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function xA(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ko = /* @__PURE__ */ Symbol("_vei");
function vA(e, t, n, s, r = null) {
  const i = e[Ko] || (e[Ko] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = kA(t);
    if (s) {
      const c = i[t] = _A(
        s,
        r
      );
      en(e, l, c, a);
    } else o && (xA(e, l, o, a), i[t] = void 0);
  }
}
const yA = /(Once|Passive|Capture)$/, bA = /^on:?(?:Once|Passive|Capture)$/;
function kA(e) {
  let t, n;
  for (; (n = e.match(yA)) && !bA.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : fn(e.slice(2)), t];
}
let Hr = 0;
const wA = /* @__PURE__ */ Promise.resolve(), zA = () => Hr || (wA.then(() => Hr = 0), Hr = Date.now());
function _A(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const r = n.value;
    if (se(r)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const o = r.slice(), l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const c = o[a];
        c && st(
          c,
          t,
          5,
          l
        );
      }
    } else
      st(
        r,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = zA(), n;
}
const qo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, $A = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? dA(e, s, o) : t === "style" ? hA(e, n, s) : or(t) ? lr(t) || vA(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : SA(e, t, s, o)) ? (Go(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Wo(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (CA(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !be(s))) ? Go(e, et(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Wo(e, t, s, o));
};
function SA(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && qo(t) && de(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return qo(t) && be(n) ? !1 : t in e;
}
function CA(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = et(t);
  return Array.isArray(n) ? n.some((r) => et(r) === s) : Object.keys(n).some((r) => et(r) === s);
}
const Ys = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return se(t) ? (n) => Is(t, n) : t;
};
function EA(e) {
  e.target.composing = !0;
}
function Yo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const nn = /* @__PURE__ */ Symbol("_assign"), Ss = /* @__PURE__ */ Symbol("_initialValue");
function Wr(e, t, n) {
  return t && (e = e.trim()), n && (e = cr(e)), e;
}
const Pt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[Ss] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ss] = e.defaultValue.replace(/\r\n?/g, `
`))), e[nn] = Ys(r);
    const i = s || r.props && r.props.type === "number";
    en(e, t ? "change" : "input", (o) => {
      o.target.composing || e[nn](Wr(e.value, n, i));
    }), (n || i) && en(e, "change", () => {
      e.value = Wr(e.value, n, i);
    }), t || (en(e, "compositionstart", EA), en(e, "compositionend", Yo), en(e, "change", Yo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const r = t ?? "", i = e[Ss];
    delete e[Ss], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[nn](Wr(e.value, n, s)) : e.value = r;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[nn] = Ys(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? cr(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a);
  }
}, Ga = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, en(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? cr(Js(a)) : Js(a)
      ), i = e.multiple, o = i ? an(e._modelValue) ? new Set(r) : r : r[0], l = e._pendingValue = [
        i,
        i ? se(o) ? r.slice() : r : o
      ];
      try {
        e[nn](o);
      } finally {
        Aa(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[nn] = Ys(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Jo(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[nn] = Ys(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !MA(t, n[1], n[0])) && Jo(e, t);
  }
};
function MA(e, t, n) {
  if (!n || se(e)) return Rt(e, t);
  if (an(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Jo(e, t) {
  const n = e.multiple, s = se(t);
  if (!(n && !s && !an(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r], l = Js(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? o.selected = t.some((c) => String(c) === String(l)) : o.selected = Iu(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Rt(Js(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Js(e) {
  return "_value" in e ? e._value : e.value;
}
const TA = ["ctrl", "shift", "alt", "meta"], IA = {
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
  exact: (e, t) => TA.some((n) => e[`${n}Key`] && !t.includes(n))
}, NA = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = IA[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, PA = /* @__PURE__ */ je({ patchProp: $A }, sA);
let Zo;
function DA() {
  return Zo || (Zo = Rd(PA));
}
const LA = ((...e) => {
  const t = DA().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = OA(s);
    if (!r) return;
    const i = t._component;
    !de(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, RA(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function RA(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function OA(e) {
  return be(e) ? document.querySelector(e) : e;
}
const FA = "zhonglou", jA = "钟楼", BA = "1.6.0", VA = "S", UA = 10, HA = "【副本进行中：钟楼】", WA = [], GA = { briefingName: "钟楼" }, KA = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, qA = { type: "nights", template: "剩余{n}夜" }, YA = "至第四日日出", JA = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], ZA = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", QA = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], XA = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], ef = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], tf = [{ id: "M1", q: "第一夜的值班签会抽中主播吗", yes: "会", no: "不会", p: 0.1, by: "d1", judge: "第一日日落的抽签结果是{{user}}本人当夜值班" }, { id: "M2", q: "塔里会出人命吗", yes: "会", no: "不会", p: 0.5, judge: "有人死于他人之手，系统宣布钟楼停摆、开启审判" }, { id: "M3", q: "主播会亲手摇响大钟吗", yes: "会", no: "不会", p: 0.35, judge: "{{user}}本人在4F机房摇动曲柄，让大钟鸣响" }], nf = [{ title: "游玩说明", md: `## 副本概况

- 名称：钟楼
- 等级：S
- 人数：10人
- 时限：以钟楼为准，至第四日日出
- 目标：存活三夜，请避免成为钟守

## 需知

1. 时间以钟楼为准。塔里没有钟，只有走出塔门才能看到钟面。
2. 每天最多100轮对话：白天72轮，夜晚28轮。到点会自动日落、日出。
3. 在场与否，事情都会发生。
4. 可以用指令快进，如"跳到日落""睡到天亮"。遇到必须决定的事，快进会自动停下。
5. 入塔后所有人的位格按基准值执行，异能封存，道具栏冻结。
6. 塔内一砖一石不可损毁，海是副本的边界。
7. 有人死于他人之手时开启审判。调查最多50轮，审判最多50轮。每位存活者投一票，得票最多者为结果，平票算作没有找出凶手。
   投中凶手：凶手被抹杀，其余人通关，副本结束。
   没有投中：凶手独自通关，其余所有人被抹杀。
8. 若无命案发生，第四日日出时，第三夜最后一个摇动曲柄的人会被钟楼留下，成为钟守，其余人通关。

## 小提示

- 看到的、听见的、纸上画的，都值得反复对照。
- 值班不是小事。
- 多记，多问，多回头看。` }, { title: "钟楼守则", md: `## 一、系统简报

「副本简报 - 钟楼」
「人数：10人」
「等级：S」
「时限：以钟楼为准，至第四日日出」
「简报：存活三夜，请避免成为钟守。」

## 二、系统公告

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

## 四、楼层图（每人一份）

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
- 1F文具柜：一沓纸、两支铅笔，是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], sf = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], rf = {
  id: FA,
  name: jA,
  version: BA,
  level: VA,
  players: UA,
  token: HA,
  legacyKeys: WA,
  detect: GA,
  time: KA,
  remaining: qA,
  deadline: YA,
  roles: JA,
  rolesNote: ZA,
  stateFields: QA,
  phases: XA,
  events: ef,
  markets: tf,
  docs: nf,
  danmaku: sf
}, of = "jingjie", lf = "境界游乐园", af = "1.2.0", cf = "A", uf = "【副本进行中：境界游乐园】", df = [], Af = { briefingName: "境界游乐园" }, ff = { type: "none" }, pf = { type: "fromPanel" }, hf = [], mf = [], gf = [{ id: "M1", q: "15:30演出时主播会回头吗", yes: "会", no: "不会", p: 0.3, judge: "15:30表演区演出期间，{{user}}本人回头了" }, { id: "M2", q: "主播会坐上摩天轮吗", yes: "会", no: "不会", p: 0.55, judge: "{{user}}本人乘坐了摩天轮" }, { id: "M3", q: "主播会走进镜宫吗", yes: "会", no: "不会", p: 0.45, judge: "{{user}}本人进入了镜宫" }], xf = [{ title: "游客须知", md: `## 《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], vf = {
  id: of,
  name: lf,
  version: af,
  level: cf,
  token: uf,
  legacyKeys: df,
  detect: Af,
  time: ff,
  remaining: pf,
  phases: hf,
  events: mf,
  markets: gf,
  docs: xf
}, yf = "kaoshi", bf = "考试", kf = "1.1.0", wf = "A", zf = "【副本进行中：考试】", _f = [], $f = { briefingName: "考试" }, Sf = { type: "countdown", minutesPerRound: 3 }, Cf = { type: "fromPanel" }, Ef = "至考试结束", Mf = [{ id: "main", name: "考试", cap: 100, next: null }], Tf = [], If = [], Nf = {
  id: yf,
  name: bf,
  version: kf,
  level: wf,
  token: zf,
  legacyKeys: _f,
  detect: $f,
  time: Sf,
  remaining: Cf,
  deadline: Ef,
  phases: Mf,
  events: Tf,
  docs: If
}, Pf = "xiyan", Df = "喜宴", Lf = "1.2.0", Rf = "D", Of = "【副本进行中：喜宴】", Ff = [], jf = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, Bf = { type: "countdown", minutesPerRound: 3 }, Vf = { type: "fromPanel" }, Uf = "至天亮", Hf = [{ id: "main", name: "喜宴", cap: 160, next: null }], Wf = [], Gf = [{ id: "M1", q: "主播会穿上喜服吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人穿上了喜服" }, { id: "M2", q: "这场婚礼的新人会是主播吗", yes: "是", no: "不是", p: 0.17, judge: "{{user}}被认定为这场婚礼的新郎或新娘", judgeNo: "{{user}}以外的某个人被认定为这场婚礼的新郎或新娘" }, { id: "M3", q: "天亮前会有人死吗", yes: "会", no: "不会", p: 0.4, judge: "有人死亡" }], Kf = [], qf = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], Yf = {
  id: Pf,
  name: Df,
  version: Lf,
  level: Rf,
  token: Of,
  legacyKeys: Ff,
  detect: jf,
  time: Bf,
  remaining: Vf,
  deadline: Uf,
  phases: Hf,
  events: Wf,
  markets: Gf,
  docs: Kf,
  danmaku: qf
}, Jf = "youxi", Zf = "游戏", Qf = "1.2.0", Xf = "C", ep = "【副本进行中：游戏】", tp = [], np = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, sp = { type: "countdown", minutesPerRound: 8 }, rp = { type: "fromPanel" }, ip = "至结算", op = [{ id: "main", name: "游戏", cap: 90, next: null }], lp = [], ap = [{ id: "M1", q: "第一个出局的会是主播吗", yes: "是", no: "不是", p: 0.08, judge: "第一个被淘汰出局的人是{{user}}", judgeNo: "{{user}}以外的某个人成为第一个被淘汰出局的人" }, { id: "M2", q: "三场游戏能全部玩完吗", yes: "能", no: "不能", p: 0.55, judge: "第三场游戏结束" }, { id: "M3", q: "喊数抱团时主播会拉陌生人吗", yes: "会", no: "不会", p: 0.5, judge: "喊数抱团时，{{user}}主动拉了自己同伴以外的人一起抱团" }], cp = [], up = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], dp = {
  id: Jf,
  name: Zf,
  version: Qf,
  level: Xf,
  token: ep,
  legacyKeys: tp,
  detect: np,
  time: sp,
  remaining: rp,
  deadline: ip,
  phases: op,
  events: lp,
  markets: ap,
  docs: cp,
  danmaku: up
}, Ap = "wuming", fp = "污名", pp = "1.1.0", hp = "B", mp = "4-8", gp = "【副本进行中：污名】", xp = ["污名"], vp = { briefingName: "污名" }, yp = { type: "countdown", minutesPerRound: 3 }, bp = { type: "countdown", template: "剩余{m}分钟" }, kp = "至收播", wp = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], zp = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], _p = [], $p = !0, Sp = {
  id: Ap,
  name: fp,
  version: pp,
  level: hp,
  players: mp,
  token: gp,
  legacyKeys: xp,
  detect: vp,
  time: yp,
  remaining: bp,
  deadline: kp,
  phases: wp,
  events: zp,
  docs: _p,
  disableLive: $p
}, Cp = "dusongshu", Ep = "杜松树", Mp = "1.3.0", Tp = "A", Ip = 6, Np = "【副本进行中：杜松树】", Pp = [], Dp = { briefingName: "杜松树" }, Lp = { type: "countdown", minutesPerRound: 30 }, Rp = { type: "fromPanel" }, Op = "至第四日日出", Fp = ["父亲", "继母", "玛琳", "男孩", "其余"], jp = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", Bp = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], Vp = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], Up = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], Hp = [{ id: "M1", q: "第一夜会有人死在苹果箱里吗", yes: "会", no: "不会", p: 0.5, by: "n1", judge: "有人在苹果箱里被箱盖压死或死在箱中" }, { id: "M2", q: "主播会吃下锅里的炖肉吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人吃了灶上铁锅里炖的肉" }, { id: "M3", q: "杜松树上的鸟会开口吗", yes: "会", no: "不会", p: 0.6, judge: "杜松树上那只红绿羽毛的鸟开口说话或唱歌" }], Wp = [{ title: "游玩说明", md: `## 副本概况

- 名称：杜松树
- 等级：A
- 人数：6人
- 时限：60小时，至第四日日出
- 简报：找出是谁杀了那个孩子。

## 身份牌

牌面：父亲、继母、玛琳、男孩、金匠、鞋匠、磨坊工。

身份是故事里的位置，与本人的性别、年龄无关。

每个人醒来的房间，与牌面上的身份一致。` }, { title: "屋子与院子", md: `## 公开环境

- 一栋两层的木屋，孤零零地立在一片杜松林中间。屋子很旧，但干净、暖和。
- 二楼有五间卧室，门上钉着小木牌：「父亲」「继母」「玛琳」「男孩」「客人」。「玛琳」房梳妆台的抽屉里叠着一条丝巾。
- 所有人在日落时分醒来。
- 一楼：厨房兼餐厅。

  - 一张长木桌，六把椅子，六只木碗。
  - 灶台上架着一口空铁锅，灶膛是冷的。
  - 灶台边是柴堆和一把斧头，柴都是松木和橡木。
  - 厨房角落放着一只沉重的橡木苹果箱，箱盖包着铁边，用一根木撑杆撑开，里面装满了红苹果。
  - 橱柜里有面包、奶酪和一小罐腌菜。
- 一楼墙上挂着一幅旧画像：一个男人、一个女人、一个女孩、一个男孩，站在一棵杜松树前，四个人的脸都很模糊。
- 屋外是一小片院子。院子正中是一棵很老的杜松树。院角有一口石井。工具棚外墙上斜靠着一块旧磨盘。
- 院子外面四面都是杜松林。
- 杜松树上停着一只小鸟，羽毛红绿相间，脖子上有一圈金色。` }, { title: "故事书", md: `## 故事书

一楼壁炉边矮柜里有一本手绘插图的旧故事书

书名《杜松树》

故事内容（残缺）：

一个富人的妻子死了，葬在院子里的杜松树下，留下一个男孩。富人再娶，新妻子生了一个女孩，叫玛琳。新妻子厌恶那个男孩。有一天，她对男孩说：「去箱子里拿个苹果吧。」男孩弯腰去拿，她猛地合上箱盖。
她把男孩剁碎，炖成一锅肉。父亲回家，吃得很香，说这是他吃过最好吃的东西，一碗接一碗，把骨头扔到桌子底下。玛琳哭着把骨头一根根拾起来，用她最好的丝巾包好，埋在杜松树下。
杜松树动了起来，树里升起一团雾，雾里飞出一只美丽的鸟。鸟一遍遍地唱：
「母亲杀了我，
父亲吃了我，
妹妹玛琳拾起了我所有的骨头，
用丝巾包好，放在杜松树下。
叽微，叽微，我是多么漂亮的鸟！」
鸟飞到金匠那里唱歌，金匠送给它一条金链子；飞到鞋匠那里唱歌，鞋匠送给它一双红鞋子；飞到磨坊那里唱歌，磨坊工送给它一块磨盘。` }], Gp = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], Kp = {
  id: Cp,
  name: Ep,
  version: Mp,
  level: Tp,
  players: Ip,
  token: Np,
  legacyKeys: Pp,
  detect: Dp,
  time: Lp,
  remaining: Rp,
  deadline: Op,
  roles: Fp,
  rolesNote: jp,
  phases: Bp,
  events: Vp,
  stateFields: Up,
  markets: Hp,
  docs: Wp,
  danmaku: Gp
}, qp = "nongxian", Yp = "农闲", Jp = "1.2.0", Zp = "D", Qp = !0, Xp = "不限", eh = "【副本进行中：农闲】", th = [], nh = { briefingName: "农闲" }, sh = { type: "none" }, rh = { type: "fromPanel" }, ih = [], oh = [], lh = [{ title: "游玩说明", md: `## 系统简报

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

- 一座被雾围着的小山谷。
- 进山谷的路：沿着一条方块小溪走，两岸是一大片桃林，花瓣是粉色的小方块。桃林尽头的山脚下有一个小洞口，钻过去，豁然开朗。
- 山谷里有一个小村子，屋舍整齐，鸡犬相闻，村民待人和气。
- 村东头有一间空着的两层木屋，提供给玩家居住：

  - 楼上四间小卧室，楼下有灶台、饭桌、几把椅子。
  - 屋前有一片翻好的田，4×4共十六格；
  - 屋后有一架秋千
- 小溪穿过村子，溪里有鱼，溪上有石桥；村南有一块晒谷场，北坡有蜂箱，西北角的山坡上有一个小山洞，洞壁上嵌着会发淡蓝色光的方块。
- 雾是山谷的边界，走进去会从另一头绕回来。
- 天黑以后在外头走得太远，会在自己床上醒过来。` }, { title: "换货单", md: `## 交换

- 自己种的、养的、钓的、做的、从山里捡的，都可以和跟村民交换。
- 村民不接受外带进来的道具。
- 价钱不死板。

## 换货单（玩家→村民）：

### 阿禾｜杂货铺

- 任意作物×3 → 一种种子×4（小麦、胡萝卜、土豆、甜菜、南瓜、草莓、西瓜任选）
- 鸡蛋×4 → 一把铁锄头（开地快一倍）
- 鱼×3 → 一个铁水壶（一次能浇一整排）
- 蜂蜜×1 → 一包花种子（种在哪里开在哪里）

### 老石｜木匠

- 原木×8 → 一张床、一张桌子或一把摇椅
- 原木×12 → 一只小木船（可以在溪里划）
- 原木×6 + 任意作物×2 → 一圈篱笆或一座小凉亭
- 帮他搬一上午木头 → 他给你做一个你想要的小玩意

### 阿潮｜渔家

- 任意作物×4 → 一根好钓竿（更容易钓到稀罕鱼）
- 面包×2 → 一罐鱼饵
- 鱼×5 → 一张渔网（下在溪里，第二天早上收鱼）
- 陪她坐着钓一下午 → 她教你认溪里的鱼

### 桑婆婆｜织布

- 羊毛×3 → 一匹布
- 布×1 + 任意作物×2 → 一件衣裳、一床被子或一副窗帘
- 羊毛×1 → 一团毛线
- 给她带一束花 → 她给你缝一个小布偶

### 蜂叔｜养蜂、养牲口

- 任意作物×6 → 一只小鸡、一只小鸭或一只兔子
- 任意作物×12 → 一只羊或一头牛
- 苹果×4 → 一个蜂箱（放在花旁边，每三天出一罐蜂蜜）
- 帮他收一次蜂蜜 → 他分你一罐

### 梅姨｜灶房、酒坊

- 任意作物×3 → 一顿现做的饭
- 桃子×6 → 一坛桃花酿
- 任意作物×2 → 教一道新菜（她会写在你家墙上的配方板上）
- 进她灶房帮一次忙 → 她留你吃饭` }, { title: "作物", md: `## 作物

种子袋（木屋门边）：小麦种子8、胡萝卜4、土豆4、甜菜种子4、南瓜种子2

- 胡萝卜、土豆、草莓：种下后过2个早上成熟。胡萝卜、土豆每格收2个，留1个可以再种；草莓成熟后每天早上都能摘。
- 小麦、甜菜：过3个早上成熟，每格收1份，外加1~2颗种子。
- 南瓜、西瓜：过4个早上成熟，藤旁边要留一格空地，瓜结在空地上，之后每过2个早上再结一个。
- 离溪水四格以内的田自己湿润；其余的田每天浇一次水，没浇的第二天早上不长。下雨天全都不用浇。
- 骨粉：让一格作物多长一天，每格每天只能用一次。` }, { title: "配方板", md: `## 配方板（木屋墙上）

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
  梅姨教新菜，会添在配方板上。` }], ah = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], ch = {
  id: qp,
  name: Yp,
  version: Jp,
  level: Zp,
  rest: Qp,
  players: Xp,
  token: eh,
  legacyKeys: th,
  detect: nh,
  time: sh,
  remaining: rh,
  phases: ih,
  events: oh,
  docs: lh,
  danmaku: ah
}, uh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function kn(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const dh = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function Qo(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(dh)) {
    const r = Number(s[1]), i = s[2];
    n = !0, i === "天" ? t += r * 1440 : i === "小时" || i === "个小时" || i === "h" || i === "H" ? t += r * 60 : t += r;
  }
  return n ? Math.round(t) : null;
}
function Ka(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: Qo(t), total: n === void 0 ? null : Qo(n) };
}
function Ah(e, t) {
  return e.phases.find((n) => n.id === t);
}
function ls(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); )
    n.push(r), s.add(r.id), r = Ah(e, r.next);
  return n;
}
function qa(e, t) {
  return ls(e, t).filter((n) => n.night).length;
}
function fh(e, t, n) {
  if (ls(e, t).some((r) => r.id === n.id)) return t;
  const s = e.phases[0];
  return s && ls(e, s).some((r) => r.id === n.id) ? s : n;
}
function Gr(e, t, n, s, r) {
  if (!e.phases.length || !e.phases.some((f) => f.id === t.id)) return;
  let i = ls(e, n), o = i.findIndex((f) => f.id === t.id);
  o < 0 && (i = ls(e, t), o = 0);
  const l = i.reduce((f, m) => f + Math.max(0, m.cap), 0), a = Math.max(0, t.cap - s) + i.slice(o + 1).reduce((f, m) => f + Math.max(0, m.cap), 0), c = t.deadline ?? i[0].deadline ?? e.deadline, u = { x: a, y: l, deadline: c };
  if (e.time.type === "countdown") {
    const f = e.time.minutesPerRound, m = e.time.totalMinutes, k = m && m > 0 ? m : l * f;
    let z = m && m > 0 && l > 0 ? Math.round(k * a / l) : a * f;
    const x = Ka(r).remaining;
    x !== null && (z = Math.min(z, x - f)), z = Math.max(0, z), Object.assign(u, { minutes: z, total: k, text: `约剩${kn(z)}/${kn(k)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) u.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const f = e.remaining.template.replace("{n}", String(qa(e, t)));
      u.text = c ? `${c}·${f}` : f;
    } else c && (u.text = c);
  return u;
}
const as = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function yr(e, t, n = as) {
  const s = e ?? "", r = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), i = r ? Math.max(1, Number(r[1])) : Math.max(1, Math.round(n[t] ?? as[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: i };
  const l = Number(o[1]), a = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return a <= 0 ? { rounds: i } : { rounds: i, totalMinutes: a, minutesPerRound: Math.max(1, Math.round(a / i)) };
}
const Zs = "generic", pi = [rf, vf, Nf, Yf, dp, Sp, Kp, ch], ph = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(uh)
  }
};
function hh(e, t) {
  const n = ph[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const Ya = ["D", "C", "B", "A", "S"];
function Ja(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Zs && t.push(`id 不能是保留字 ${Zs}`), Ya.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((c) => typeof c != "string")) && t.push("detect.patterns 必须是文本数组");
  const r = n.time;
  !r || !["none", "clock", "countdown"].includes(r.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (r.type === "clock" && (typeof r.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(r.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), r.type !== "none" && (typeof r.minutesPerRound != "number" || r.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), r.type === "countdown" && r.totalMinutes !== void 0 && (typeof r.totalMinutes != "number" || r.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const i = n.remaining;
  !i || !["nights", "countdown", "fromPanel"].includes(i.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : i.type !== "fromPanel" && typeof i.template != "string" && t.push("remaining.template 必须是文本"), i?.type === "countdown" && r?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.rest !== void 0 && typeof n.rest != "boolean" && t.push("rest 必须是 true 或 false"), n.stateFields !== void 0 && (Array.isArray(n.stateFields) ? n.stateFields.forEach((c, u) => {
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
    c.when !== void 0 && typeof c.when != "string" && t.push(`danmaku[${u}].when 必须是文本`), c.scope !== void 0 && typeof c.scope != "string" && t.push(`danmaku[${u}].scope 必须是文本`), c.phase !== void 0 && (!Array.isArray(c.phase) || c.phase.some((f) => typeof f != "string") ? t.push(`danmaku[${u}].phase 必须是文本数组`) : c.phase.forEach((f) => {
      o.size > 0 && !o.has(f) && console.warn(`[rlzc] danmaku[${u}] 的 phase "${f}" 不在阶段表中，已跳过`);
    }));
  }) : t.push("danmaku 必须是数组")), n.markets !== void 0)
    if (!Array.isArray(n.markets)) t.push("markets 必须是数组");
    else {
      const c = /* @__PURE__ */ new Set();
      n.markets.forEach((u, f) => {
        if (!u || typeof u != "object") {
          t.push(`markets[${f}] 必须是对象`);
          return;
        }
        for (const m of ["id", "q", "yes", "no", "judge"])
          (typeof u[m] != "string" || !u[m].trim()) && t.push(`markets[${f}] 缺少文本字段 ${m}`);
        (typeof u.p != "number" || !(u.p >= 0.01 && u.p <= 0.99)) && t.push(`markets[${f}].p 必须是 0.01–0.99 的数`), u.judgeNo !== void 0 && (typeof u.judgeNo != "string" || !u.judgeNo.trim()) && t.push(`markets[${f}].judgeNo 必须是文本`), u.by !== void 0 && typeof u.by != "string" && t.push(`markets[${f}].by 必须是阶段 id`), typeof u.id == "string" && (c.has(u.id) && t.push(`事件盘 id 重复：${u.id}`), c.add(u.id));
      });
    }
  return t;
}
function mh(e) {
  const t = new Set(e.phases.map((n) => n.id));
  return (e.markets ?? []).filter((n) => n.by !== void 0 && !t.has(n.by) ? (console.warn(`[rlzc] 副本包 ${e.id} 的事件盘 ${n.id}：by「${n.by}」不是本包的阶段 id，已跳过`), !1) : !0);
}
function Sn(e) {
  return Ya.includes(e.level ?? "") ? e.level : "D";
}
function br(e, t = as) {
  const n = Sn(e), s = yr(e.limit, n, t), r = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, i = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / r)) : void 0;
  return {
    id: Zs,
    name: e.name,
    version: "1.0.0",
    level: n,
    token: `【副本进行中：${e.name}】`,
    legacyKeys: [],
    detect: { briefingName: e.name },
    // 总时长按简报的值；每轮分钟四舍五入只用于“每轮至少减去”的判断
    time: i ? { type: "countdown", minutesPerRound: i, totalMinutes: s.totalMinutes } : { type: "none" },
    remaining: { type: "fromPanel" },
    phases: [{ id: "main", name: e.name, cap: r, next: null }],
    events: [],
    docs: []
  };
}
function gh(e, t, n, s = "") {
  const r = Sn(e), i = e.rounds && e.rounds > 0 ? e.rounds : yr(e.limit, r, t).rounds, o = br({ ...e, rounds: i }, t), l = s.split(`
`).map((a) => a.trim().replace(/^[「『]|[」』]$/g, "")).filter(Boolean).join(`

`);
  return {
    ...o,
    id: n,
    ...e.players ? { players: e.players } : {},
    docs: l ? [{ title: "副本简报", md: l }] : []
  };
}
function Oi(e) {
  const t = new Set(pi.map((n) => n.id));
  return [...pi, ...e.filter((n) => !t.has(n.id))];
}
const xh = /副本简报[^\S\n]*(?:——|[-－—：:·・])[^\S\n]*([^\n」』]*)/, vh = /<阶段切换>([\s\S]*?)<\/阶段切换>/, yh = /<副本结算>([\s\S]*?)<\/副本结算>/, Za = /<副本>([\s\S]*?)<\/副本>/, bh = /<角色登记>([\s\S]*?)<\/角色登记>/, kh = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, wh = /<积分变动>([\s\S]*?)<\/积分变动>/g, zh = "《「『【", _h = "》」』】";
function $h(e) {
  let t = e.trim();
  for (; ; ) {
    const n = t;
    if (zh.includes(t[0] ?? "\0") && (t = t.slice(1).trim()), _h.includes(t[t.length - 1] ?? "\0") && (t = t.slice(0, -1).trim()), t === n) return t;
  }
}
function Sh(e) {
  const t = e.charCodeAt(0);
  return t >= 65281 && t <= 65374 ? String.fromCharCode(t - 65248) : e;
}
function kr(e) {
  const t = xh.exec(e ?? ""), n = t ? $h(t[1]) : "";
  if (!t || !n) return null;
  const s = { name: n }, r = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (a) => {
    const c = new RegExp(`${a}\\s*[：:]\\s*([^」』\\n]+)`).exec(r);
    return c ? c[1].trim() : void 0;
  }, o = i("等级"), l = o && /[DCBASｄｃｂａｓＤＣＢＡＳ]/i.exec(o);
  return l && (s.level = Sh(l[0]).toUpperCase()), s.goal = i("目标"), s.limit = i("时限"), s.players = i("人数"), s;
}
function Ch(e) {
  const t = vh.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function Qa(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const r = n.slice(0, s).trim(), i = n.slice(s + 1).trim();
    r && (t[r] = i);
  }
  return t;
}
function wr(e) {
  const t = yh.exec(e ?? "");
  if (!t) return null;
  const n = Qa(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function Xa(e) {
  const t = bh.exec(e ?? "");
  if (!t) return null;
  const n = Qa(t[1]);
  return Object.keys(n).length ? n : null;
}
function Cs(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function ec(e) {
  const t = Za.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let s = null;
  for (const r of t[1].split(`
`)) {
    const i = r.trim();
    if (!i) continue;
    const o = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(i);
    if (o) {
      const l = o[1].toLowerCase(), a = o[2].trim();
      l === "时限" ? (n.limit = a, s = null) : l === "进度条" ? (n.progressBar = a, s = null) : l === "任务" ? (Cs(a) && n.tasks.push(Cs(a)), s = "tasks") : (n.ps = a, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(i)) {
      s = null;
      continue;
    }
    s === "tasks" ? Cs(i) && n.tasks.push(Cs(i)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${i}` : i);
  }
  return n;
}
function Eh(e) {
  const t = kh.exec(e ?? "");
  return t ? t[2] : null;
}
function Kr(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (n(r)) return r;
    s.add(r.id), r = r.next ? e.phases.find((i) => i.id === r.next) : void 0;
  }
  return null;
}
function Mh(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const r = (l) => !!l.clock && !l.night;
  let i = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      i = Kr(e, t, r), o = i?.cap ?? 0;
      break;
    case "晚饭":
      i = Kr(e, t, r), i && (o = Math.ceil(i.cap * 0.75), i.id === t.id && o <= n && (o = i.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      i = Kr(e, t, (l) => !!l.night), o = i?.cap ?? 0;
      break;
  }
  return !i || i.id === t.id && o <= n + 1 ? null : { phase: i.id, round: o, label: `${i.name}第${o}轮` };
}
const Th = /<状态栏>([\s\S]*?)<\/状态栏>/;
function hi(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function Ih(e, t) {
  const n = hi(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const qr = /* @__PURE__ */ new Map();
function Nh(e, t) {
  const n = `${e}\0${t}`;
  if (!qr.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (r) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, r);
    }
    qr.set(n, s);
  }
  return qr.get(n);
}
function Ph(e, t, n = []) {
  const s = String(e ?? ""), r = (c, u) => c ? { signal: u, pack: c, info: { name: c.name, level: c.level } } : null, i = (c, u) => {
    const f = r(Ih(t, c), u);
    if (f) return f;
    const m = hi(c), k = m ? [...n].reverse().find((z) => hi(z.name) === m) : void 0;
    return k ? { signal: u, info: { ...k } } : null;
  }, o = kr(s);
  if (o)
    return { signal: 1, pack: t.find((u) => u.detect.briefingName === o.name), info: o };
  const l = Za.exec(s);
  if (l) {
    const c = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(l[1]), u = c && i(c[1], 2);
    if (u) return u;
  }
  for (const c of s.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const u = i(c[1], 3);
    if (u) return u;
  }
  const a = Th.exec(s);
  if (a) {
    for (const c of a[1].split(`
`))
      if (c.includes("地点"))
        for (const u of c.matchAll(/副本《([^》]+)》/g)) {
          const f = i(u[1], 4);
          if (f) return f;
        }
  }
  for (const c of t)
    for (const u of c.detect.patterns ?? []) {
      const f = Nh(c.id, u);
      if (f && f.test(s)) return r(c, 5);
    }
  return null;
}
const Xo = 5, Dh = { id: "_open", name: "进行中", cap: 0, next: null };
function _e(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function Lh(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function tc(e, t, n) {
  const s = Lh(e) + Math.max(0, n - 1) * t, r = Math.floor(s / 60) % 24, i = (s % 60 + 60) % 60;
  return `${r % 12 === 0 ? 12 : r % 12}:${String(i).padStart(2, "0")}`;
}
function el(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return tc(e.time.dayStart, e.time.minutesPerRound, n);
}
function nc(e) {
  return e.phases.length ? e.phases : [Dh];
}
function Ps(e, t) {
  return nc(e).find((n) => n.id === t);
}
function tl(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (r.id === n) return !0;
    s.add(r.id), r = Ps(e, r.next);
  }
  return !1;
}
function nl(e, t, n, s) {
  const r = n + 1, i = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > r) {
      let l = i.map((c, u) => ({ e: c, i: u })).filter(({ e: c }) => c.from >= r && c.from <= o).sort((c, u) => c.e.from - u.e.from || c.i - u.i).map(({ e: c }) => c), a = o;
      return l.length > Xo && (a = l[Xo - 1].from, l = l.filter((c) => c.from <= a)), { phase: t, round: a, events: l, skipFrom: r };
    }
  }
  return { phase: t, round: r, events: i.filter((o) => o.from === r) };
}
function sc(e, t, n) {
  const s = t.entryIndex;
  if (!_e(e[s])) return null;
  const r = nc(n);
  let i = r[0], o = r[0], l = 0, a, c = !1, u, f, m = null, k, z, x;
  const $ = /* @__PURE__ */ new Set(), F = {}, O = {}, M = /* @__PURE__ */ new Map();
  for (const P of t.manual ?? [])
    M.has(P.atIndex) || M.set(P.atIndex, []), M.get(P.atIndex).push(P);
  const T = (P, ie) => {
    O[i.id] === void 0 && P.id !== i.id && (O[i.id] = ie), n.phases.length && (o = fh(n, o, P)), i = P, l = 0, m && !tl(n, i, m.phase) && (m = null);
  };
  for (let P = s; P < e.length; P++) {
    const ie = e[P];
    if (!c && _e(ie)) {
      const le = nl(n, i, l, m);
      l = le.round;
      const De = new Set((ie.extra?.rlzc?.skippedEvents ?? []).map((j) => j.id));
      le.events.forEach((j) => {
        De.has(j.id) || $.add(j.id);
      }), F[P] = {
        phase: i.id,
        round: l,
        events: le.events.map((j) => j.id),
        skipFrom: le.skipFrom,
        limit: Gr(n, i, o, l, a)
      }, m && i.id === m.phase && l >= m.round && (m = null);
      const ot = String(ie.mes ?? ""), Xe = ec(ot);
      Xe && (z = Xe), a = Xe?.limit;
      const xn = Xa(ot);
      xn && (x = xn);
      const Kt = wr(ot);
      if (Kt)
        c = !0, u = "tag", f = P, k = Kt;
      else {
        const j = Ch(ot), K = j ? r.find((G) => G.name === j) : void 0;
        if (K && n.phases.length)
          T(K, P);
        else if (i.cap > 0 && l >= i.cap && i.next) {
          const G = Ps(n, i.next);
          G && T(G, P);
        }
      }
    }
    for (const le of M.get(P) ?? []) {
      if (c) break;
      switch (le.kind) {
        case "skip": {
          m = Ps(n, le.targetPhase) && tl(n, i, le.targetPhase) ? { phase: le.targetPhase, round: le.targetRound } : null;
          break;
        }
        case "setPhase": {
          const De = Ps(n, le.phase);
          De && (m = null, T(De, P));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(le.round)), m = null;
          break;
        case "end":
          c = !0, u = "manual", f = P;
          break;
      }
    }
  }
  const ee = c ? null : nl(n, i, l, m), te = ee ? ee.round : l + 1, Q = i.cap > 0, re = n.events.filter((P) => $.has(P.id)).map((P) => P.id), E = c ? void 0 : Gr(n, i, o, te, a), p = c ? void 0 : Gr(n, i, o, l);
  let h;
  const v = n.remaining;
  return !c && v.type === "nights" && n.phases.length && !i.byTag && !i.frozen ? h = v.template.replace("{n}", String(qa(n, i))) : !c && v.type === "countdown" && E?.minutes !== void 0 && (h = v.template.replace("{m}", String(E.minutes))), {
    phase: i,
    round: l,
    nextRound: te,
    clock: c ? void 0 : el(n, i, te),
    currentClock: el(n, i, l),
    remainingText: h,
    limit: E,
    roundsLeft: p ? { x: p.x, y: p.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: c,
    endedBy: u,
    endIndex: f,
    firedEvents: re,
    warn: !c && Q && te >= i.cap - 2,
    isLastRound: !c && Q && te === i.cap,
    overdue: !c && Q && !i.next && te > i.cap,
    next: ee,
    skipGoal: m,
    settlement: k,
    panel: z,
    rolesFromChat: x,
    perMessage: F,
    phaseEnds: O,
    entryIndex: s
  };
}
const rc = "rlzc_token", ic = "rlzc_progress", oc = "rlzc_turn", lc = "rlzc_state", ac = "rlzc_ledger", cc = "rlzc_live", uc = "rlzc_format", Rh = [rc, ic, oc, lc, ac, cc, uc], cs = { token: "", progress: "", turn: "", injected: [] };
function Oh(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Qs(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const r = new RegExp(`(?<!\\{)\\{(${s.map(Oh).join("|")})\\}(?!\\})`, "g");
  return e.replace(r, (i, o) => n?.[o]?.trim() || o);
}
function Fh(e, t) {
  if (!t.length) return "";
  const n = e.events.map((a) => a.id), s = t.map((a) => n.indexOf(a)).filter((a) => a >= 0).sort((a, c) => a - c), r = [];
  let i = s[0], o = s[0];
  const l = () => r.push(i === o ? n[i] : `${n[i]}–${n[o]}`);
  for (let a = 1; a < s.length; a++) {
    if (s[a] === o + 1) {
      o = s[a];
      continue;
    }
    l(), i = o = s[a];
  }
  return l(), r.join("、");
}
function sl(e, t, n, s = !1) {
  let r = Qs(e.text, t, n);
  return e.to > e.from && (r = `在本阶段第${e.from}到${e.to}轮之间发生：${r}`), e.if && !s && (r += `（条件：${Qs(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${r}`;
}
function jh(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Bh(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...cs, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return cs;
  const r = s.roles, i = e.phases.length > 0, o = t.next, l = [`副本：${e.name}（${e.level}级）`], a = t.limit;
  if (i)
    l.push(`阶段：${t.phase.name}`), l.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), a && l.push(`剩余${a.x}/${a.y}轮`), t.clock && l.push(`钟时：${t.clock}`), a?.text && l.push(`时限：${a.text}`), e.remaining.type === "countdown" && t.remainingText && l.push(t.remainingText), a?.deadline && !a.text?.includes(a.deadline) && l.push(`截止：${a.deadline}`);
  else {
    l.push(`本轮：第${t.nextRound}轮`), t.clock && l.push(`钟时：${t.clock}`);
    const M = s.panelLimit || s.briefing?.limit;
    M && l.push(`时限：${M}`);
  }
  const c = ["［副本进度·仅供AI］", l.join("　")];
  if (s.briefing?.goal && (!i || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const M = e.roles.filter((T) => r?.[T]);
    c.push(
      M.length ? `角色登记：${e.roles.map((T) => `${T}=${r?.[T] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const u = Fh(e, t.firedEvents);
  u && c.push(`已发生事件：${u}`);
  const f = [];
  o.skipFrom !== void 0 && f.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const m = new Map((s.subNext ?? []).map((M) => [M.id, M])), k = o.events.filter((M) => M.if && m.get(M.id)?.ok === !1).map((M) => ({ id: M.id, reason: m.get(M.id).reason })), z = o.events.filter((M) => !k.some((T) => T.id === M.id)), x = (M) => !!M.if && m.get(M.id)?.ok === !0, $ = z.filter((M) => M.kind === "event"), F = z.filter((M) => M.kind === "directive");
  if ($.length && (f.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), $.forEach((M) => f.push(sl(M, e, r, x(M))))), F.length && (f.push("本轮写作要求："), F.forEach((M) => f.push(sl(M, e, r, x(M))))), t.isLastRound ? f.push(jh(t)) : t.overdue && f.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && f.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && f.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((M) => r?.[M])) {
    let M = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((T) => `${T}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (M += "死者不得是{{user}}或其同伴。"), f.push(M);
  }
  let O;
  return a?.text && (a.minutes !== void 0 ? (f.push(
    `本轮<副本>的时限一栏写：${a.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), O = { text: a.text, minutes: a.minutes, total: a.total }) : (f.push(`本轮<副本>的时限一栏写：${a.text}（照抄）。`), O = { text: a.text })), {
    token: e.token,
    progress: c.join(`
`),
    turn: f.length ? ["［本轮指令·仅供AI］", ...f].join(`
`) : "",
    injected: z.map((M) => M.id),
    limit: O,
    skipped: k.length ? k : void 0,
    state: s.stateText || void 0
  };
}
const pt = "<状态栏>", wn = "</状态栏>", Vh = {
  missing: "缺失",
  misnamed: "标签名写错",
  unpaired: "不成对",
  duplicate: "多于一对"
}, Fi = /* @__PURE__ */ new Set(["副本", "阶段切换", "副本结算", "角色登记", "积分变动", "直播"]), Uh = /* @__PURE__ */ new Set(["系统面板", "状态面板", "状态", "面板", "系统状态", "状态信息", "人物状态", "角色状态", "状态条", "状态框", "系统任务状态栏", "任务状态栏", "状态栏位", "status", "statusbar", "status_bar", "status-bar"]), Hh = ["等级", "积分", "位格", "道具", "待清算", "在场"];
function Wh(e) {
  return Hh.filter((t) => new RegExp(`${t}\\s*[：:]`).test(e)).length;
}
function ji(e) {
  const t = e.trim().toLowerCase();
  return Uh.has(t) || /状态|面板/.test(t);
}
function rl(e, t) {
  if (Fi.has(e)) return !1;
  const n = Wh(t);
  return ji(e) ? n >= 1 : /[^\x00-\x7f]/.test(e) && n >= 2;
}
function il(e, t) {
  return e.split(t).length - 1;
}
function dc(e) {
  const t = /<([^<>\/\s][^<>\/]{0,11})>|【([^【】\/]{1,12})】|\[([^\[\]\/]{1,12})\]/g;
  let n;
  for (; (n = t.exec(e)) !== null; ) {
    const s = (n[1] ?? n[2] ?? n[3]).trim();
    if (Fi.has(s)) continue;
    const r = n.index + n[0].length, i = n[1] !== void 0 ? `</${n[1]}>` : n[2] !== void 0 ? `【/${n[2]}】` : `[/${n[3]}]`, o = e.indexOf(i, r);
    if (o >= 0) {
      if (rl(s, e.slice(r, o))) return { open: n[0], start: n.index, close: i, closeAt: o };
      continue;
    }
    if (ji(s) && rl(s, e.slice(r, Xs(e, r)))) return { open: n[0], start: n.index };
  }
  return null;
}
function Xs(e, t) {
  const n = e.indexOf("<副本>", t);
  let s = n >= 0 ? n : e.length;
  for (; s > t && /\s/.test(e[s - 1]); ) s--;
  return s;
}
function Ac(e, t) {
  const n = Xs(e, t), s = /<\/([^<>\s]{1,12})>|【\/([^【】]{1,12})】|\[\/([^\[\]]{1,12})\]/g;
  s.lastIndex = t;
  let r;
  for (; (r = s.exec(e)) !== null && r.index < n; ) {
    const i = (r[1] ?? r[2] ?? r[3]).trim();
    if (!Fi.has(i) && ji(i))
      return { tok: r[0], at: r.index };
  }
  return null;
}
function Bi(e) {
  const t = String(e ?? ""), n = il(t, pt), s = il(t, wn);
  if (n === 1 && s === 1)
    return t.indexOf(pt) < t.indexOf(wn) ? { kind: "ok" } : { kind: "unpaired", detail: "结尾在开头之前", fixable: !1 };
  if (n === 0 && s === 0) {
    const r = dc(t);
    return r ? { kind: "misnamed", detail: r.close ? `${r.open}…${r.close}` : `${r.open}（没有结尾）`, fixable: !0 } : { kind: "missing" };
  }
  if (n === s) return { kind: "duplicate", detail: `${n}对`, fixable: !1 };
  if (n === 1 && s === 0) {
    const r = Ac(t, t.indexOf(pt) + pt.length);
    return { kind: "unpaired", detail: r ? `结尾写成了${r.tok}` : "只有开头", fixable: !0 };
  }
  return n === 0 ? { kind: "unpaired", detail: "只有结尾", fixable: !1 } : { kind: "unpaired", detail: `开头${n}个、结尾${s}个`, fixable: !1 };
}
function Gh(e) {
  const t = String(e ?? ""), n = Bi(t);
  if (!n.fixable) return null;
  if (n.kind === "misnamed") {
    const o = dc(t), l = o.start + o.open.length;
    if (o.close !== void 0 && o.closeAt !== void 0)
      return { text: t.slice(0, o.start) + pt + t.slice(l, o.closeAt) + wn + t.slice(o.closeAt + o.close.length), from: `${o.open}…${o.close}` };
    const a = Xs(t, l);
    return { text: t.slice(0, o.start) + pt + t.slice(l, a) + `
` + wn + t.slice(a), from: o.open };
  }
  const s = t.indexOf(pt) + pt.length, r = Ac(t, s);
  if (r) return { text: t.slice(0, r.at) + wn + t.slice(r.at + r.tok.length), from: `${pt}…${r.tok}` };
  const i = Xs(t, s);
  return { text: t.slice(0, i) + `
` + wn + t.slice(i), from: pt };
}
function fc(e, t) {
  for (let n = 0; n < t; n++) if (e[n]?.is_user) return !1;
  return !0;
}
function pc(e, t) {
  const n = e[t];
  if (!_e(n) || fc(e, t)) return null;
  const s = Bi(n.mes);
  return s.kind === "ok" ? null : s;
}
const Kh = "［格式·仅供AI］上一轮的状态栏格式不对。本轮必须在正文末尾完整输出一次<状态栏>……</状态栏>，开头结尾的标签名一字不改，不得写成其他名字。";
function qh(e) {
  for (let t = e.length - 1; t >= 0; t--)
    if (_e(e[t]))
      return pc(e, t) !== null;
  return !1;
}
function Yh(e, t = 60) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const r = e[s]?.extra?.rlzc?.format, i = pc(e, s);
    i ? n.push({ index: s, kind: i.kind, detail: i.detail, fixed: !1 }) : r?.fixed && _e(e[s]) && n.push({ index: s, kind: r.kind, detail: r.detail, fixed: !0, from: r.from });
  }
  return n;
}
const Jh = 1, Zh = 0;
function me() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function hc() {
  const e = me();
  return e.eventTypes ?? e.event_types ?? {};
}
function yn(e, t) {
  const n = hc()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  me().eventSource.on(n, t);
}
function On(e, t) {
  const n = hc()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  const s = me().eventSource;
  typeof s.makeFirst == "function" ? s.makeFirst(n, t) : s.on(n, t);
}
function q() {
  return me().chat ?? [];
}
function Ut() {
  const e = me();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function Ze() {
  return me().chatMetadata ?? {};
}
function Ve() {
  const e = me();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function It(e, t, n, s) {
  me().setExtensionPrompt(e, t, Jh, n, s, Zh);
}
function Qh() {
  const e = me();
  typeof e.saveChat == "function" ? e.saveChat() : e.saveChatDebounced?.();
}
function Xh(e) {
  const t = me(), n = q()[e];
  !n || !document.querySelector(`#chat .mes[mesid="${e}"]`) || typeof t.updateMessageBlock == "function" && t.updateMessageBlock(e, n);
}
function we(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Wt(e) {
  const t = me();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
function ol(e, t, n, s = "回廊种菜系统") {
  const r = window.toastr, i = window.jQuery;
  if (!r || typeof i != "function") return;
  const o = document.createElement("div");
  o.style.cssText = "overflow-wrap:anywhere;", o.append(document.createTextNode(e));
  const l = document.createElement("a");
  l.href = "#", l.textContent = t, l.className = "rlzc-toast-action", l.style.cssText = "margin-left:.5em;color:inherit;font-weight:bold;text-decoration:underline;white-space:nowrap;cursor:pointer;", o.append(l);
  const a = r.info(i(o), s, { timeOut: 6e3, extendedTimeOut: 2e3, closeButton: !0, escapeHtml: !1 });
  l.addEventListener("click", (c) => {
    c.preventDefault(), c.stopPropagation(), r.clear(a), n();
  });
}
async function ll(e, t = "") {
  const n = me();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const r = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof r == "string" ? r : null;
  }
  return window.prompt(e, t);
}
async function em(e, t) {
  const n = me(), s = document.createElement("div"), r = document.createElement("div");
  r.textContent = e, s.append(r);
  let i = null;
  if (t) {
    const l = document.createElement("label");
    l.className = "checkbox_label rlzc-live-optin", l.style.cssText = "display:inline-flex;align-items:center;justify-content:center;gap:8px;margin-top:10px;min-height:44px;padding:0 8px;cursor:pointer;", i = document.createElement("input"), i.type = "checkbox", i.id = "rlzc-live-optin", i.checked = t.checked;
    const a = document.createElement("span");
    a.textContent = t.label, l.append(i, a), s.append(l);
  }
  if (n.callGenericPopup && n.POPUP_TYPE && n.POPUP_RESULT)
    return { ok: await n.callGenericPopup(s, n.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === n.POPUP_RESULT.AFFIRMATIVE, checked: !!i?.checked };
  const o = window.confirm(e);
  return { ok: o, checked: o && !!t?.checked };
}
const cn = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function mc(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function tm(e, t = cn) {
  return t.length ? e.replace(mc(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
const mi = "rlzc-hide:";
function nm(e) {
  let t = 5381;
  for (let n = 0; n < e.length; n++) t = (t << 5) + t + e.charCodeAt(n) | 0;
  return (t >>> 0).toString(36);
}
function sm(e) {
  const t = e.firstChild;
  return t && t.nodeType === Node.COMMENT_NODE && t.data.startsWith(mi) ? t.data.slice(mi.length) : null;
}
function rm(e) {
  return e.querySelector(".TH-render, iframe") ? !0 : !!e.parentElement && Array.from(e.parentElement.children).some((t) => t.classList.contains("TH-streaming"));
}
function im() {
  const e = globalThis.TavernHelper?.refreshOneMessage;
  return typeof e == "function" ? e : null;
}
const Yr = /* @__PURE__ */ new Set();
function gc(e, t = cn, n = !1, s = !1) {
  const r = q()[e];
  if (!r || r.is_user) return;
  const i = String(r.extra?.display_text ?? r.mes ?? "");
  if (!mc(n ? cn : t, "").test(i)) return;
  const o = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!o) return;
  const l = me().messageFormatting;
  if (typeof l != "function") return;
  const a = tm(i, t), c = nm(`${t.join("|")}
${a}`), u = sm(o);
  if (u === c) return;
  const f = l(a, r.name ?? "", !!r.is_system, !1, e);
  if (!s && rm(o)) {
    if (u === null && l(i, r.name ?? "", !!r.is_system, !1, e) === f) return;
    const m = im();
    if (m && !Yr.has(e)) {
      Yr.add(e), Promise.resolve().then(() => m(e)).catch((k) => console.warn("[rlzc] 请酒馆助手重渲染消息失败", e, k)).finally(() => Yr.delete(e));
      return;
    }
  }
  o.innerHTML = `<!--${mi}${c}-->${f}`;
}
function om(e = cn, t = !1, n = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((s) => {
    const r = Number(s.getAttribute("mesid"));
    Number.isFinite(r) && gc(r, e, t, n);
  });
}
const lm = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function xc(e) {
  return e.stateFields?.length ? e.stateFields : [lm];
}
const am = [...cn, "状态栏"], cm = new RegExp(`<(${am.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function Vi(e) {
  return String(e ?? "").replace(cm, "").replace(/\n{3,}/g, `

`).trim();
}
function um(e) {
  const t = xc(e.pack), n = e.markets ?? [], s = [
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
`), r = (a) => a.to > a.from ? `（本阶段第${a.from}到${a.to}轮之间）` : "", i = e.events.length ? e.events.map((a) => `- ${a.id}${r(a)}：${a.text}${a.if ? `（条件：${a.if}）` : ""}`).join(`
`) : "（无）", o = e.nextConditional.length ? e.nextConditional.map((a) => `- ${a.id}：${a.text}（条件：${a.if}）`).join(`
`) : "（无）", l = [
    `【副本】${e.pack.name}　阶段：${e.phaseName}　第${e.round}轮`,
    `【上一轮状态】${e.prevState ? JSON.stringify(e.prevState) : "（尚无，请根据正文建立）"}`,
    `【本轮后台事件】
${i}`,
    `【下一轮事件】
${o}`,
    ...n.length ? [`【盘口陈述】
${n.map((a) => `- ${a.id}：${a.judge}`).join(`
`)}`] : [],
    `【本轮正文】
${Vi(e.text)}`
  ].join(`

`);
  return { system: s, user: l };
}
function dm(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class Fe extends Error {
}
function Am(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), r = t.lastIndexOf("}");
  if (s < 0 || r <= s) throw new Fe("返回里没有 JSON");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new Fe("返回的 JSON 无法解析");
  }
  if (!i || typeof i != "object" || Array.isArray(i)) throw new Fe("返回的不是 JSON 对象");
  if (!i.state || typeof i.state != "object" || Array.isArray(i.state)) throw new Fe("缺少 state");
  const o = ["done", "missed", "void"], l = (Array.isArray(i.events) ? i.events : []).filter((f) => f && typeof f.id == "string" && o.includes(f.status)).map((f) => ({ id: f.id, status: f.status, reason: String(f.reason ?? "") })), a = (Array.isArray(i.next) ? i.next : []).filter((f) => f && typeof f.id == "string" && typeof f.ok == "boolean").map((f) => ({ id: f.id, ok: f.ok, reason: String(f.reason ?? "") })), c = { events: l, state: i.state, next: a }, u = typeof i.hype == "number" ? i.hype : typeof i.hype == "string" && i.hype.trim() !== "" ? Number(i.hype) : NaN;
  if (Number.isFinite(u) && (c.hype = Math.max(0, Math.min(100, Math.round(u)))), typeof i.hurt == "boolean" ? c.hurt = i.hurt : (i.hurt === "true" || i.hurt === "false") && (c.hurt = i.hurt === "true"), i.markets && typeof i.markets == "object" && !Array.isArray(i.markets)) {
    const f = {};
    for (const [m, k] of Object.entries(i.markets))
      typeof k == "boolean" ? f[m] = k : (k === "true" || k === "false") && (f[m] = k === "true");
    c.markets = f;
  }
  return c;
}
function fm(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function pm(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((r) => String(r ?? "")).join("|");
  return `${e}:${t}:${s}:${fm(String(n?.mes ?? ""))}`;
}
function hm(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function mm(e, t, n = 2) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return Am(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
class vc extends Error {
}
function zr(e) {
  if (e instanceof vc) return "超时";
  if (e instanceof Fe) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function yc(e) {
  return e?.extra?.rlzc;
}
function _r(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!_e(s)) continue;
    const r = yc(s)?.sub;
    if (r?.state && !r.skipped) return { index: n, state: r.state };
  }
  return null;
}
function gm(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!_e(s)) continue;
    const r = yc(s)?.sub;
    return r && !r.skipped && Array.isArray(r.next) ? r.next : void 0;
  }
}
function er(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => er(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${er(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function bc(e, t) {
  const n = xc(e), s = new Set(n.map((i) => i.key)), r = n.filter((i) => t[i.key] !== void 0).map((i) => `${i.label}：${er(t[i.key])}`);
  for (const [i, o] of Object.entries(t)) s.has(i) || r.push(`${i}：${er(o)}`);
  return r.length ? ["［副本状态·仅供AI］", ...r].join(`
`) : "";
}
const xm = "你在写回廊直播间的观众弹幕。观众是回廊里的其他玩家，只看得到直播画面。什么人都有：夸赞、祝福、讨论、泼冷水、嫉妒、抹黑、造谣，正面的稍多。每条30字以内，口语，称{{user}}为主播，不用性别代词。只能根据画面里已经发生的事说话，不猜测、不透露画面外的信息。", vm = ["praise", "bless", "discuss", "cold", "envy", "smear", "rumor"];
function ym(e) {
  if (!e.aiSource || !e.subOn) return !1;
  const t = Math.max(1, Math.min(10, Math.floor(e.freq) || 3));
  return e.roundInShow > 0 && e.roundInShow % t === 0 ? !0 : e.phaseSwitch || e.hurt || e.eventDone;
}
function kc(e) {
  return String(e ?? "").replace(/<(副本|状态栏|阶段切换|副本结算|角色登记|积分变动|直播|thinking|think)>[\s\S]*?<\/\1>/g, "").replace(/<\/?[A-Za-z一-龥][^<>]*>/g, "").replace(/\n{3,}/g, `

`).trim();
}
function bm(e, t, n) {
  const s = e.map((o) => o.text), r = [], i = /* @__PURE__ */ new Set();
  for (let o = 0; o < t * 10 && r.length < Math.min(t, s.length); o++) {
    const l = Math.floor(n() * s.length);
    i.has(l) || (i.add(l), r.push(s[l]));
  }
  return r;
}
function km(e) {
  const t = [
    xm,
    "只输出一个 JSON 数组，8–12条，不要任何解释，格式：",
    '[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]'
  ].join(`
`), n = [
    `【直播间】${e.scene}`,
    `【在场角色】${e.cast.length ? e.cast.join("、") : "（无）"}`,
    `【最近两轮画面】
${e.texts.map((s) => kc(s)).filter(Boolean).join(`

`) || "（无）"}`,
    `【语气示例】
${e.samples.map((s) => `- ${s}`).join(`
`)}`
  ].join(`

`);
  return { system: t, user: n };
}
function wm(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), r = t.lastIndexOf("]");
  if (s < 0 || r <= s) throw new Fe("返回里没有 JSON 数组");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new Fe("返回的 JSON 无法解析");
  }
  if (!Array.isArray(i)) throw new Fe("返回的不是 JSON 数组");
  const o = i.filter((l) => l && typeof l.text == "string" && l.text.trim()).map((l) => ({
    type: vm.includes(l.type) ? l.type : "discuss",
    name: typeof l.name == "string" && l.name.trim() ? l.name.trim().slice(0, 16) : "匿名",
    text: l.text.trim()
  })).slice(0, 13);
  if (!o.length) throw new Fe("返回的弹幕为空");
  return o;
}
async function zm(e, t, n = 1) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return wm(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
function _m(e) {
  return e.t === "tip" ? `${e.name} 打赏${e.amount}` : `${e.name}：${e.text}`;
}
function $m(e, t = 5) {
  if (!e.on) return "";
  const n = e.feed.filter((r) => r.t === "msg" || r.t === "tip").slice(-t), s = `［直播·仅供AI］{{user}}正在直播，约${e.viewers}人在看。`;
  return n.length ? `${s}最近弹幕：${n.map(_m).join("／")}` : s;
}
const wc = 1500;
function zc() {
  return me().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function _c(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Ui(e, t) {
  const n = new AbortController();
  let s;
  const r = new Promise((i, o) => {
    s = setTimeout(() => {
      n.abort(), o(new vc(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), r]);
  } finally {
    clearTimeout(s);
  }
}
function $c(e, t) {
  const n = typeof t?.error == "string" ? t.error : t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : ""), s = String(n ?? "").trim(), r = new Error(`${e || ""} ${s}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return r.status = e, r.detail = s, r;
}
async function Sc(e) {
  const t = await e.text().catch(() => "");
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
async function Cc(e, t, n, s = wc, r = 0.2, i = !1) {
  const o = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: zc(),
    signal: n,
    body: JSON.stringify({
      ..._c(e),
      model: e.model,
      messages: [
        { role: "system", content: t.system },
        { role: "user", content: t.user }
      ],
      max_tokens: s,
      temperature: r,
      stream: !1
    })
  }), l = await Sc(o);
  if (!o.ok || l?.error) throw $c(o.status === 200 ? 0 : o.status, l);
  const a = l?.choices?.[0]?.message?.content ?? l?.choices?.[0]?.text ?? l?.content;
  if (typeof a != "string") {
    if (i) return "";
    throw new Error("返回里没有正文");
  }
  return a;
}
async function Sm(e) {
  const t = me();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function Hi(e, t, n = {}) {
  return Ui(e.timeoutMs, (s) => {
    if (e.source === "main") return Sm(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return Cc(e.preset, t, s, wc, n.temperature ?? 0.2);
  });
}
async function Cm(e, t) {
  const n = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: zc(),
    signal: t,
    body: JSON.stringify(_c(e))
  }), s = await Sc(n);
  if (!n.ok || s?.error) throw $c(n.status === 200 ? 0 : n.status, s);
  const i = (Array.isArray(s) ? s : Array.isArray(s?.data) ? s.data : Array.isArray(s?.models) ? s.models : []).map((o) => typeof o == "string" ? o : o?.id ?? o?.name).filter(Boolean);
  return [...new Set(i)].sort();
}
function Em(e, t) {
  return Ui(t, (n) => Cm(e, n));
}
const Mm = 64;
async function Tm(e, t) {
  if (!e.model.trim()) throw new Error("还没有选模型");
  return Ui(
    t,
    (n) => Cc(e, { system: "只回复 OK。", user: "ping" }, n, Mm, 0.2, !0)
  );
}
function al(e) {
  if (!e || typeof e != "object" || typeof e.ok != "boolean") return;
  const t = Number(e.at);
  return { ok: e.ok, reason: String(e.reason ?? ""), at: Number.isFinite(t) ? t : 0 };
}
function Im(e) {
  const t = {
    id: String(e?.id ?? ""),
    name: String(e?.name ?? ""),
    url: String(e?.url ?? ""),
    key: String(e?.key ?? ""),
    model: String(e?.model ?? "")
  };
  Array.isArray(e?.models) && (t.models = e.models.filter((r) => typeof r == "string" && r));
  const n = al(e?.fetchResult);
  n && (t.fetchResult = n);
  const s = al(e?.testResult);
  return s && (t.testResult = s), t;
}
function cl(e) {
  return !!e && !!e.url.trim();
}
function ul(e) {
  return !!e && !!e.url.trim() && !!e.model.trim();
}
function Nm(e, t, n) {
  const s = String(n ?? "").trim();
  return e[t] === s ? !1 : (e[t] = s, t === "model" || (delete e.models, delete e.fetchResult), delete e.testResult, !0);
}
function dl(e, t, n = Date.now()) {
  t.ok ? (e.models = [...t.models], e.fetchResult = { ok: !0, reason: "", at: n }) : e.fetchResult = { ok: !1, reason: t.reason, at: n };
}
function Al(e, t, n = Date.now()) {
  e.testResult = { ok: t.ok, reason: t.ok ? "" : t.reason, at: n };
}
function Pm(e) {
  const t = new Date(e);
  return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
}
function Dm(e) {
  const t = e.fetchResult;
  return t ? t.ok ? `✓ 读到${e.models?.length ?? 0}个模型` : `✗ ${t.reason}` : "";
}
function Lm(e) {
  const t = e.testResult;
  return t ? t.ok ? "✓ 可以回复" : `✗ ${t.reason}` : "";
}
function Rm(e) {
  const t = e?.testResult;
  return t?.ok ? { kind: "on", text: "已连接" } : t ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" };
}
const Om = 80;
function gi(e) {
  const t = zr(e), n = Number(e?.status) || 0, s = String(e?.detail ?? "").replace(/\s+/g, " ").trim(), r = Array.from(s).slice(0, Om).join("");
  return n && r ? `${t}（${n}：${r}）` : n ? `${t}（${n}）` : r ? `${t}（${r}）` : t;
}
const Ec = "rlzc_ledger", St = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, Fm = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function jm(e) {
  const t = e.trim(), n = /^([+-]?\d+)\s*[｜|]\s*(.*)$/.exec(t);
  if (n) {
    const i = parseInt(n[1], 10);
    return Number.isFinite(i) ? { delta: i, source: n[2].trim() } : null;
  }
  const s = /^([+-]?\d+)(?:\s*[（(]([^）)]*)[）)])?/.exec(t);
  if (!s) return null;
  const r = parseInt(s[1], 10);
  return Number.isFinite(r) ? { delta: r, source: s[2]?.trim() ?? "" } : null;
}
function Qe(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), r = String(t.getHours()).padStart(2, "0"), i = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${r}:${i}`;
}
const Bm = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]\s*([\s\S]*)$/i, Vm = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Um(e) {
  const t = String(e ?? "").replace(/[Ａ-Ｚａ-ｚ]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248)), n = /[SABCD]/i.exec(t);
  return n ? n[0].toUpperCase() : null;
}
function Hm(e) {
  const t = {}, n = [];
  let s = null;
  for (const l of String(e ?? "").split(`
`)) {
    const a = l.replace(/\*\*/g, "").trim();
    if (!a || /^[━─—=\-]{3,}$/.test(a)) continue;
    const c = Bm.exec(a);
    if (c) {
      const f = /^os$/i.test(c[1]) ? "os" : c[1];
      s && !["地点", "时间", "日期"].includes(f) ? s[f] = c[2].trim() : t[f] = c[2].trim();
      continue;
    }
    const u = /^(.+?)\s*[：:]\s*$/.exec(a);
    if (u) {
      s = { 名: u[1].trim() }, n.push(s);
      continue;
    }
    if (a.includes("｜")) {
      const f = a.split("｜").map((m) => m.trim());
      n.push({ 名: f[0], 等级: f[1] ?? "" }), s = null;
    }
  }
  const r = n[0], o = !!r && ["积分", "位格", "道具", "在场"].some((l) => l in r) ? r.等级 : t.等级;
  return o ? Um(o) : null;
}
function Mc(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = Vm.exec(s.mes);
    if (!r) continue;
    const i = Hm(r[1]);
    if (i) return i;
  }
  return null;
}
function Tc(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function Wm(e, t, n, s, r, i = "") {
  const o = n.结果 ?? "", l = (n.评价 ?? "").toUpperCase().trim(), a = ["D", "C", "B", "A", "S"].includes(l) ? l : null, c = o === "通关" || o === "成功" || o === "胜利", u = o === "失败", f = o === "死亡" || o === "阵亡";
  if (!c && !u && !f)
    return { delta: 0, source: "" };
  if (f)
    return { delta: 0, source: "" };
  if (u)
    return r ? { delta: 0, source: "清算未通关" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣除30%" };
  if (r) {
    const O = St[t] + 500;
    return { delta: Math.max(0, O - s), source: "清算通关·续存至斩杀线+500", clearWin: !0 };
  }
  if (!a)
    return { delta: 0, source: "", warn: "评价缺失或无法识别，不发奖励" };
  let m = Fm[e][a];
  const k = i || e, z = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", x = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", $ = e !== t;
  let F = `副本奖励·${k} ${a}评`;
  return z ? (m = Math.floor(m * 0.5), F += "（×50%）") : (x || $) && (m = Math.floor(m * 0.6), F += "（×60%）"), { delta: m, source: F };
}
function fl(e, t = (/* @__PURE__ */ new Date()).getFullYear()) {
  const n = /^(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
  if (!n) return;
  const s = new Date(t, Number(n[1]) - 1, Number(n[2]), Number(n[3]), Number(n[4])).getTime();
  return Number.isFinite(s) ? s : void 0;
}
function Gm(e, t) {
  const n = [...e], s = t.map((i, o) => ({ m: i, k: o })).sort((i, o) => (i.m.ts ?? 1 / 0) - (o.m.ts ?? 1 / 0) || i.k - o.k).map((i) => i.m);
  let r = 0;
  for (const i of s) {
    let o = n.length;
    if (i.ts !== void 0)
      for (let l = r; l < n.length; l++) {
        const a = n[l].ts;
        if (a !== void 0 && a > i.ts) {
          o = l;
          break;
        }
      }
    n.splice(o, 0, i), r = o + 1;
  }
  return n;
}
function Km(e) {
  let t = -1 / 0;
  return e.map((n, s) => (n.ts !== void 0 && Number.isFinite(n.ts) && (t = Math.floor(n.ts / 6e4)), { e: n, k: s, key: t })).sort((n, s) => n.key - s.key || n.k - s.k).map((n) => n.e);
}
function qm(e, t) {
  let n = e;
  return t.map((s) => n += s.delta);
}
function pn(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function ms(e, t, n) {
  let s = e, r = !1;
  for (const i of t)
    s += i.delta, s < n && (r = !0), i.clear && (r = !1);
  return r;
}
function Ym(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function Jm(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const r = s ?? St[n], i = Math.max(0, r - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${i}分（${n}级斩杀线${r}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const nt = "rlzc";
function Zm() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function Qm(e, t, n) {
  return {
    id: Zm(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function Xm(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function Ic(e, t) {
  return e.packId === Zs ? e.briefing ? br(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function eg(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return _e(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function tg(e, t) {
  const n = eg(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((r) => ({ ...r, atIndex: r.atIndex + s }))), t.manual = t.manual.filter((r) => r.atIndex < e.length && r.atIndex >= t.entryIndex), !0;
}
function Nc(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const pl = "rlzc_declined";
function Ht(e, t) {
  return `${e}:${t}`;
}
const Wi = _e;
function Pc(e, t, n, s = []) {
  const r = [];
  for (let i = Math.max(0, t); i < Math.min(n, e.length); i++) {
    if (!Wi(e[i])) continue;
    const o = kr(String(e[i].mes ?? ""));
    if (!o || s.includes(Ht(i, o.name))) continue;
    const l = r.findIndex((a) => a.name === o.name);
    l >= 0 && r.splice(l, 1), r.push(o);
  }
  return r;
}
function Cn(e, t, n, s = []) {
  if (!Wi(e[t])) return null;
  const r = Ph(String(e[t].mes ?? ""), n, s);
  return r ? { ...r, index: t } : null;
}
function ng(e, t, n, s, r = [], i = []) {
  const o = [];
  for (let l = Math.max(0, n); l <= Math.min(s, e.length - 1); l++) {
    const a = Cn(e, l, t, o);
    if (a && !r.includes(Ht(l, a.info.name))) return a;
    if (a?.signal === 1 && !i.includes(Ht(l, a.info.name))) {
      const c = o.findIndex((u) => u.name === a.info.name);
      c >= 0 && o.splice(c, 1), o.push(a.info);
    }
  }
  return null;
}
function sg(e, t, n, s = [], r = []) {
  const i = /* @__PURE__ */ new Map();
  for (const o of s) {
    if (r.includes(o)) continue;
    const l = o.indexOf(":"), a = Number(o.slice(0, l)), c = o.slice(l + 1);
    if (!Number.isInteger(a) || a < n || a >= e.length) continue;
    const u = Cn(e, a, t, Pc(e, n, a, r));
    if (!u || u.info.name !== c) continue;
    const f = i.get(c);
    (!f || f.index < a) && i.set(c, u);
  }
  return [...i.values()].sort((o, l) => l.index - o.index);
}
function rg(e, t, n = [], s = pi, r = 0) {
  if (t?.status === "active") return null;
  let i = -1;
  for (let l = Math.max(0, r); l < e.length; l++) if (Wi(e[l])) {
    i = l;
    break;
  }
  if (i < 0 || t && t.entryIndex === i) return null;
  const o = Cn(e, i, s);
  return !o || n.includes(Ht(i, o.info.name)) ? null : o;
}
const ig = /[■█▰●◆★▮▓]/g, og = /[□░▱○◇☆▯▒]/g;
function lg(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const i = Number(n[2]);
    return i === 100 ? Number(n[1]) : i > 0 ? Math.round(Number(n[1]) / i * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(ig) ?? []).length, r = (t.match(og) ?? []).length;
  return s + r > 0 ? Math.round(s / (s + r) * 100) : null;
}
function hl(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function ag(e, t) {
  return hl(e).includes(hl(t));
}
function cg(e, t, n) {
  const s = [], r = Object.keys(n.perMessage).map(Number).sort((a, c) => a - c);
  let i = !1, o = null, l = !1;
  for (const a of r) {
    const c = n.perMessage[a], f = t.phases.find((M) => M.id === c.phase)?.name ?? "进行中", m = (M, T) => s.push({ index: a, phase: f, round: c.round, kind: M, text: T }), k = e[a]?.extra?.rlzc;
    for (const M of k?.sub?.events ?? []) M.status === "missed" && m("eventMissed", `${M.id} 未写出来：${M.reason}`);
    for (const M of k?.skippedEvents ?? []) m("eventSkipped", `${M.id} 条件不成立，已跳过：${M.reason}`);
    const z = ec(String(e[a]?.mes ?? "")), x = a === n.entryIndex;
    if (!z) {
      x || m("missing", "本轮回复缺少 <副本> 面板"), l = !x;
      continue;
    }
    l = !1;
    const $ = lg(z.progressBar);
    z.progressBar === void 0 ? m("progressUnreadable", "<副本> 中没有进度条一栏") : $ === null ? m("progressUnreadable", `进度条无法读出数值：「${z.progressBar}」`) : (!i && $ !== 0 && m("progressStart", `入场后第一轮的进度条应为0，实际为 ${$}`), ($ < 0 || $ > 100) && m("progressRange", `进度条数值 ${$} 超出 0–100`), o !== null && $ < o && m("progressDrop", `进度条比上一轮低：${o} → ${$}`), o = $), i = !0;
    const F = e[a]?.extra?.rlzc?.limit, O = F?.text ? F : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (O) {
      const M = z.limit;
      if (O.minutes !== void 0) {
        const T = Ka(M);
        !M || T.remaining === null || T.total === null ? m("limit", `时限读不到「剩余时间/总时长」：写的是「${M ?? "（没有时限一栏）"}」，注入的是「${O.text}」`) : (T.remaining > O.minutes && m("limit", `剩余时间比注入值多：写的是${kn(T.remaining)}，注入的是${kn(O.minutes)}`), O.total !== void 0 && T.total !== O.total && m("limit", `总时长与注入值不一致：写的是${kn(T.total)}，注入的是${kn(O.total)}`));
      } else (!M || !ag(M, O.text)) && m("limit", `时限与注入文字不一致：写的是「${M ?? "（没有时限一栏）"}」，注入的是「${O.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: i };
}
const ug = {
  D: 2e3,
  C: 8e3,
  B: 3e4,
  A: 1e5,
  S: 3e5
}, dg = [
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
function Dc(e) {
  return dg.some((t) => e.includes(t));
}
function Ag(e) {
  if (e.subHype !== void 0)
    return Math.max(0, Math.min(100, Math.round(e.subHype)));
  const t = e.subHurt !== void 0 ? e.subHurt : e.bodyText ? Dc(e.bodyText) : !1;
  let n = 20;
  return e.hasEvents && (n += 20), e.hasPhaseSwitch && (n += 20), t && (n += 30), Math.min(100, n);
}
function fg(e, t) {
  return Math.round(e * 0.6 + t * 0.4);
}
function Gi(e) {
  const t = !e.packLevel || e.isRest ? e.playerLevel : e.packLevel, n = ug[t], s = !e.packLevel || e.isRest ? 0.3 : 1;
  return Math.round(n * s * (0.5 + e.heat / 100) * e.rand);
}
const pg = [10, 20, 50, 100, 200, 500, 1e3], hg = [20, 25, 15, 20, 10, 8, 2], mg = [15, 20, 15, 20, 10, 16, 4];
function gg(e, t, n) {
  const s = t.reduce((i, o) => i + o, 0);
  let r = n * s;
  for (let i = 0; i < e.length; i++)
    if (r -= t[i], r <= 0) return e[i];
  return e[e.length - 1];
}
function xg(e) {
  const { hype: t, isCorr: n, rand: s, names: r } = e, i = t / 40, o = [], l = [], a = t >= 70 ? mg : hg;
  for (let m = 1; m <= 3; m++) {
    const k = Math.min(1, Math.max(0, i - (m - 1)));
    if (s() < k) {
      let z = gg(pg, a, s());
      n && (z = Math.max(10, Math.round(z * 0.3 / 10) * 10)), o.push(z), l.push(r[Math.floor(s() * r.length)] ?? "匿名");
    }
  }
  const c = o.reduce((m, k) => m + k, 0), u = Math.floor(c * 0.6);
  let f = "";
  return o.length === 1 ? f = `直播打赏${o[0]}×60%` : o.length > 1 && (f = `直播打赏${o.length}笔·共${c}×60%`), { count: o.length, totalFace: c, faces: o, netTotal: u, source: f, names: l };
}
const tr = 10, nr = 13;
function Lc(e) {
  return tr + Math.floor(e() * (nr - tr + 1));
}
function Jr(e, t, n, s, r, i, o) {
  const l = t && !n;
  return !(e.scope === "inst" && !l || e.scope === "corr" && l || e.when === "hurt" && !s || e.when === "calm" && r >= 30 || e.when === "open" && !i || e.when === "end" && !o);
}
function vg(e) {
  const {
    pool: t,
    templates: n,
    packDanmaku: s = [],
    currentPhase: r,
    isInst: i,
    isRest: o,
    isHurt: l,
    hype: a,
    isOpen: c,
    isEnd: u,
    recentTexts: f,
    names: m,
    whoNames: k,
    rand: z
  } = e, x = e.count ?? Lc(z), $ = [], F = new Set(f), O = t.filter(
    (p) => Jr(p, i, o, l, a, c, u)
  ), T = k.length > 0 ? n.filter(
    (p) => Jr(p, i, o, l, a, c, u)
  ) : [], ee = s.filter((p) => Jr(p, i, o, l, a, c, u) ? p.phase && p.phase.length > 0 && r ? p.phase.includes(r) : !0 : !1), te = () => m[Math.floor(z() * m.length)] ?? "匿名", Q = () => k[Math.floor(z() * k.length)] ?? "";
  for (let p = 0; p < x * 5 && $.length < x; p++) {
    let h = "", v = "discuss";
    if (ee.length > 0 && z() < 0.3) {
      const ie = ee[Math.floor(z() * ee.length)];
      h = ie.text, v = ie.type;
    } else if (T.length > 0 && z() < 0.5) {
      const le = T[Math.floor(z() * T.length)];
      h = le.text.replace("{who}", Q()), v = le.type;
    } else if (O.length > 0) {
      const le = O[Math.floor(z() * O.length)];
      h = le.text, v = le.type;
    }
    !h || F.has(h) || (F.add(h), $.push({ name: te(), text: h, type: v }));
  }
  const re = [...ee, ...O], E = re.length ? Math.floor(z() * re.length) : 0;
  for (let p = 0; p < re.length && $.length < x; p++) {
    const h = re[(E + p) % re.length];
    F.has(h.text) || (F.add(h.text), $.push({ name: te(), text: h.text, type: h.type }));
  }
  return $;
}
const Rc = "rlzc_live", yg = "本局直播打赏撤回", Oc = 20, un = {
  corridorOn: "回廊直播开始。",
  corridorOff: "已下播。",
  enterOff: "进入副本，回廊直播已结束。",
  instanceOn: "本局副本直播开始。",
  instanceOff: "副本结束，直播已下播。",
  revoke: "主播在副本中死亡，本局打赏已全部撤回。"
};
function bg(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.corridor ?? {};
  return {
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0,
    corridor: { on: !!n.on, show: typeof n.show == "string" ? n.show : "", viewers: Number.isFinite(n.viewers) ? n.viewers : void 0 },
    sys: Array.isArray(t.sys) ? t.sys.filter((s) => s && typeof s.id == "number") : []
  };
}
function $r(e, t) {
  return e.disableLive ? { show: !1, checked: !1 } : { show: !0, checked: !!t };
}
function Gt(e) {
  const t = e?.extra?.rlzc?.live;
  return t && typeof t.show == "string" && Array.isArray(t.feed) ? t : void 0;
}
function Ki(e, t, n = e.length) {
  const s = [];
  for (let r = 0; r < Math.min(n, e.length); r++) {
    const i = e[r];
    if (!i || i.is_user) continue;
    const o = Gt(i);
    o && o.show === t && s.push({ index: r, rec: o });
  }
  return s;
}
function qi(e, t) {
  return Ki(e, t).reduce((n, { rec: s }) => n + (s.tipNet || 0) - (s.revoke || 0), 0);
}
function Sr(e, t) {
  let n = t.seq;
  for (const s of t.sys) n = Math.max(n, s.id);
  for (const s of e) for (const r of Gt(s)?.feed ?? []) n = Math.max(n, r.id);
  return n;
}
function kg(e, t = 30) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const r = Gt(e[s])?.feed ?? [];
    for (let i = r.length - 1; i >= 0 && n.length < t; i--) r[i].t === "msg" && n.push(r[i].text);
  }
  return n;
}
const wg = /<状态栏>([\s\S]*?)<\/状态栏>/, zg = /^(积分|位格|道具|在场)$/, _g = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;
function Fc(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = wg.exec(s.mes);
    if (r) return r[1];
  }
  return null;
}
function Yi(e, t = e.length) {
  return Mc(e, t) ?? "D";
}
function jc(e, t = "") {
  if (!e) return [];
  const n = [];
  let s = null;
  for (const i of e.split(`
`)) {
    const o = i.trim();
    if (!o || /^[━─—=\-]{3,}$/.test(o)) continue;
    const l = _g.exec(o);
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
  const r = [];
  return n.forEach((i, o) => {
    if (o === 0 && [...i.keys].some((a) => zg.test(a))) return;
    const l = i.name.replace(/[（(][\s\S]*$/, "").trim();
    !l || /^(陌生|路人)/.test(l) || l === "{{user}}" || t && l === t || r.includes(l) || r.push(l);
  }), r;
}
function Bc(e, t) {
  return t?.hurt !== void 0 ? t.hurt : Dc(Vi(e));
}
function $g(e) {
  const { rand: t } = e, n = Vi(e.text), s = Bc(e.text, e.sub), r = Ag({ subHype: e.sub?.hype, subHurt: s, hasEvents: e.hasEvents, hasPhaseSwitch: e.hasPhaseSwitch, bodyText: n }), i = fg(e.prevHeat ?? Oc, r), o = e.scope === "corridor" || e.isRest, l = Gi({
    packLevel: e.scope === "instance" ? e.packLevel : null,
    playerLevel: e.playerLevel,
    isRest: e.isRest,
    heat: i,
    rand: 0.9 + t() * 0.2
  }), a = Lc(t), c = vg({
    pool: e.pool,
    templates: e.templates,
    packDanmaku: e.packDanmaku,
    currentPhase: e.phaseId,
    isInst: e.scope === "instance",
    isRest: e.isRest,
    isHurt: s,
    hype: r,
    isOpen: e.roundsInShow < 2,
    isEnd: e.isEnd,
    recentTexts: e.recentTexts,
    names: e.names,
    whoNames: e.whoNames,
    rand: t,
    count: e.awaitAi ? nr : a
  }), u = xg({ hype: r, isCorr: o, rand: t, names: e.names }), f = u.faces.map((x, $) => ({ t: "tip", name: u.names[$], text: "", amount: x, net: Math.floor(x * 0.6) })), m = [];
  let k;
  e.settle && (e.settle.died && (k = e.settle.tipsBefore + u.netTotal, k > 0 ? m.push({ t: "sys", name: "", text: un.revoke, amount: 0, net: -k }) : k = void 0), m.push({ t: "sys", name: "", text: un.instanceOff, amount: 0, net: 0 }));
  const z = {
    show: e.show,
    scope: e.scope,
    hype: r,
    heat: i,
    viewers: l,
    hurt: s,
    feed: [],
    tipNet: u.netTotal,
    tipFace: u.totalFace,
    tipSource: u.source
  };
  return k && (z.revoke = k), e.awaitAi ? z.pending = { local: c, tips: f, sys: m, target: a } : z.feed = Vc(c.slice(0, a), f, m, e.firstId, t), z;
}
function Sg(e, t, n) {
  const s = Math.max(tr, Math.min(nr, n));
  if (!e?.length) return t.slice(0, s);
  const r = e.slice(0, nr);
  if (r.length >= tr) return r;
  const i = new Set(r.map((o) => o.text));
  for (const o of t) {
    if (r.length >= s) break;
    i.has(o.text) || (i.add(o.text), r.push(o));
  }
  return r;
}
function Vc(e, t, n, s, r) {
  const i = e.map((o) => ({ t: "msg", name: o.name, text: o.text, amount: 0, net: 0 }));
  for (let o = i.length - 1; o > 0; o--) {
    const l = Math.floor(r() * (o + 1));
    [i[o], i[l]] = [i[l], i[o]];
  }
  for (const o of t) {
    const l = i.length ? 1 + Math.floor(r() * i.length) : 0;
    i.splice(Math.min(l, i.length), 0, o);
  }
  return i.push(...n), i.map((o, l) => ({ id: s + l, ...o }));
}
function Uc(e, t, n, s) {
  if (!e.pending) return e;
  const { pending: r, ...i } = e, o = Sg(t, r.local, r.target);
  return { ...i, feed: Vc(o, r.tips, r.sys, n, s) };
}
function Cg(e, t) {
  if (!e) return [];
  const n = [];
  return e.tipNet > 0 && n.push({ delta: e.tipNet, source: e.tipSource, type: "tip", at: t }), e.revoke && e.revoke > 0 && n.push({ delta: -e.revoke, source: yg, type: "tip", at: t }), n;
}
function Eg(e) {
  return `其中本局直播打赏${e}分，副本内不可使用，离开副本后可用。`;
}
function Mg(e, t) {
  return e && `${e}${e.endsWith("。") ? "" : "。"}${Eg(t)}`;
}
function Tg(e, t, n) {
  const s = Ki(e, n), r = [];
  for (const { rec: i } of s) r.push(...i.feed);
  for (const i of t.sys) i.show === n && r.push({ id: i.id, t: i.t, name: i.name, text: i.text, amount: i.amount, net: i.net });
  return r.sort((i, o) => i.id - o.id), { items: r, last: s[s.length - 1]?.rec };
}
function Ig(e, t) {
  let n = "", s = -1;
  for (const r of t.sys) r.id > s && (s = r.id, n = r.show);
  for (const r of e) {
    const i = Gt(r);
    if (i)
      for (const o of i.feed) o.id > s && (s = o.id, n = i.show);
  }
  return n;
}
function Ng(e, t, n, s = /* @__PURE__ */ new Set()) {
  const r = n.inInstance ? "instance" : "corridor", i = n.inInstance ? n.instanceLive : t.corridor.on, o = n.inInstance ? n.instanceLive ? n.instanceShow ?? "" : "" : i ? t.corridor.show : Ig(e, t), l = { on: i, canToggle: !n.inInstance, scope: r, viewers: 0, heat: 0, tipTotal: 0, injectToAI: n.injectToAI, feed: [], lastTip: null };
  if (!o) return l;
  const { items: a, last: c } = Tg(e, t, o), u = a.filter((k) => !s.has(k.id));
  let f = 0, m = null;
  for (const k of u)
    f += k.net, k.t === "tip" && (m = { id: k.id, net: k.net });
  return {
    ...l,
    viewers: i ? c?.viewers ?? n.startViewers ?? 0 : 0,
    heat: i ? c?.heat ?? Oc : 0,
    tipTotal: f,
    feed: u.slice(-60),
    lastTip: m
  };
}
const Pg = ["小满", "好运来", "路过的D级", "一个路过的A级", "数据党", "理性讨论", "吃瓜", "夜班保安", "柠檬汁", "阿柒", "东区卖菜的", "西区摆摊的", "情报社小号", "失眠第三天", "房租交不起", "今天也在种土豆", "匿名", "光幕前的咸鱼", "刚通关的C级", "排行榜第九十九", "不想进本", "炸鱼被抓过", "黑市常客", "训练场打卡人", "药剂站熬夜班", "公会跑腿的", "一个路人", "今日份幸运", "积分快见底", "刚升B级", "看录像长大的", "老观众", "新来的", "别叫我大佬", "蹲一个结算", "白开水", "半夜不睡", "又是我", "打工人", "瓜田里的猹", "慢热", "晴天", "阿九", "十一", "小绿", "老周", "木子", "苏苏", "七七", "一颗橘子", "等天亮", "北风", "不吃香菜", "没抢到号", "退役S级", "D级万岁", "靠运气活着", "只看不说", "路过打个卡", "最后一排"], Dg = [{ type: "praise", text: "这反应速度，不愧是主播" }, { type: "praise", text: "冷静得不像第一次进这个级别的本", scope: "inst" }, { type: "praise", text: "刚才那个判断绝了" }, { type: "praise", text: "主播脑子转得是真快" }, { type: "praise", text: "这波我服" }, { type: "praise", text: "稳，太稳了" }, { type: "praise", text: "讲道理，换我早慌了" }, { type: "praise", text: "这就是高手吗" }, { type: "praise", text: "看得我手心出汗，主播还面不改色" }, { type: "praise", text: "刚才那句话说得漂亮" }, { type: "praise", text: "细节拉满，这都注意到了", scope: "inst" }, { type: "praise", text: "主播说话好有条理" }, { type: "praise", text: "这才叫会玩" }, { type: "praise", text: "就冲这个判断，关注了" }, { type: "praise", text: "有勇有谋" }, { type: "praise", text: "比上一个主播强多了" }, { type: "praise", text: "队友拖后腿，主播一个人在带", scope: "inst" }, { type: "praise", text: "这个位置站得好", scope: "inst" }, { type: "praise", text: "我宣布这是本周最佳直播" }, { type: "praise", text: "主播镇定得让我也镇定了" }, { type: "praise", text: "那个眼神，太帅了" }, { type: "praise", text: "心态真好，要是我早骂人了" }, { type: "praise", text: "这个节奏把握得好", scope: "inst" }, { type: "praise", text: "看出来是做过功课的" }, { type: "praise", text: "夸一句，主播是真的会说话" }, { type: "praise", text: "一句话就把场面稳住了", scope: "inst" }, { type: "praise", text: "这份胆量我是没有" }, { type: "praise", text: "学到了，下次我也这么干" }, { type: "praise", text: "主播好好看" }, { type: "praise", text: "声音也好听，别下播" }, { type: "praise", text: "越看越顺眼" }, { type: "praise", text: "这气质，放在哪个本都是主角" }, { type: "praise", text: "能屈能伸，佩服" }, { type: "praise", text: "刚才那一下我起立鼓掌" }, { type: "praise", text: "不慌不忙，高手风范" }, { type: "praise", text: "回廊里也过得这么讲究，爱了", scope: "corr" }, { type: "praise", text: "主播种的菜看着真水灵", scope: "corr" }, { type: "praise", text: "这手艺可以去西区摆摊了", scope: "corr" }, { type: "praise", text: "休整都不忘练，怪不得排名涨", scope: "corr" }, { type: "praise", text: "房间收拾得真干净", scope: "corr" }, { type: "bless", text: "祝平安出来！！", scope: "inst" }, { type: "bless", text: "主播一定要活着回来", scope: "inst" }, { type: "bless", text: "保佑保佑" }, { type: "bless", text: "冲啊主播！" }, { type: "bless", text: "这把一定能过", scope: "inst" }, { type: "bless", text: "结算见！", scope: "inst", when: "end" }, { type: "bless", text: "平安就好，评级无所谓", scope: "inst" }, { type: "bless", text: "等你出来请你吃饭", scope: "inst" }, { type: "bless", text: "好运加满，霉运退散" }, { type: "bless", text: "希望别再有人出事了", scope: "inst", when: "hurt" }, { type: "bless", text: "主播加油，我在东区超市门口看着呢" }, { type: "bless", text: "撑住，天总会亮的", scope: "inst" }, { type: "bless", text: "别怕，我们都在" }, { type: "bless", text: "好人一生平安" }, { type: "bless", text: "这波过了就能歇歇了", scope: "inst" }, { type: "bless", text: "下个副本抽个简单的吧", scope: "corr" }, { type: "bless", text: "注意安全，别逞强", scope: "inst" }, { type: "bless", text: "保重身体啊", when: "hurt" }, { type: "bless", text: "受伤了先处理伤口", scope: "inst", when: "hurt" }, { type: "bless", text: "一路绿灯，一路绿灯" }, { type: "bless", text: "今天也要好好活着" }, { type: "bless", text: "愿系统对你手下留情" }, { type: "bless", text: "别哭，我们陪你", when: "hurt" }, { type: "bless", text: "等着看你升级" }, { type: "bless", text: "最后一口气了，撑住", scope: "inst", when: "end" }, { type: "bless", text: "最后几轮，稳住！", scope: "inst", when: "end" }, { type: "bless", text: "主播今天早点睡", scope: "corr" }, { type: "bless", text: "休息好了再进本", scope: "corr" }, { type: "bless", text: "希望房租别涨", scope: "corr" }, { type: "bless", text: "回廊安稳一天是一天", scope: "corr" }, { type: "discuss", text: "现在什么情况，我刚进来" }, { type: "discuss", text: "来了来了，这把什么本", scope: "inst", when: "open" }, { type: "discuss", text: "开播了开播了", when: "open" }, { type: "discuss", text: "新主播？没见过", when: "open" }, { type: "discuss", text: "先别吵，看局势" }, { type: "discuss", text: "我觉得还有线索没找到", scope: "inst" }, { type: "discuss", text: "按往届，这本不好打", scope: "inst" }, { type: "discuss", text: "有没有人看过这本的录像", scope: "inst" }, { type: "discuss", text: "黑市那种录像别全信" }, { type: "discuss", text: "这队人各怀心思吧", scope: "inst" }, { type: "discuss", text: "现在还剩几个人？", scope: "inst" }, { type: "discuss", text: "前面说的那个我也注意到了" }, { type: "discuss", text: "理性讨论，别带节奏" }, { type: "discuss", text: "我赌主播能过" }, { type: "discuss", text: "有人算过这把能拿什么评吗", scope: "inst" }, { type: "discuss", text: "主播刚才是不是话里有话" }, { type: "discuss", text: "这个人说话一直留半句", scope: "inst" }, { type: "discuss", text: "注意细节，刚才那句不对劲", scope: "inst" }, { type: "discuss", text: "我在光幕前面站了一个小时了" }, { type: "discuss", text: "回放能看吗，刚才没看清" }, { type: "discuss", text: "有没有懂的解释一下" }, { type: "discuss", text: "你们看出来了吗，我看不出来" }, { type: "discuss", text: "这一段要是剪进录像会卖爆" }, { type: "discuss", text: "楼上别剧透……虽然我也不知道" }, { type: "discuss", text: "好无聊，快进", when: "calm" }, { type: "discuss", text: "主播在发呆吗", when: "calm" }, { type: "discuss", text: "挂着当背景音了", when: "calm" }, { type: "discuss", text: "去泡了碗面回来还是这样", when: "calm" }, { type: "discuss", text: "这么安静，要出事了吧", scope: "inst", when: "calm" }, { type: "discuss", text: "暴风雨前的宁静", scope: "inst", when: "calm" }, { type: "discuss", text: "啊啊啊有人倒了", scope: "inst", when: "hurt" }, { type: "discuss", text: "刚才那一下我没敢看", when: "hurt" }, { type: "discuss", text: "又走一个……", scope: "inst", when: "hurt" }, { type: "discuss", text: "手在抖吧，换我也抖", when: "hurt" }, { type: "discuss", text: "快结束了吧", scope: "inst", when: "end" }, { type: "discuss", text: "结算前最后几轮最容易出事", scope: "inst", when: "end" }, { type: "discuss", text: "今天种什么？", scope: "corr" }, { type: "discuss", text: "回廊直播也有人看，我服了我自己", scope: "corr" }, { type: "discuss", text: "排行榜又变了，你们看了吗", scope: "corr" }, { type: "discuss", text: "下个本打算报哪个？", scope: "corr" }, { type: "cold", text: "别高兴太早" }, { type: "cold", text: "我看悬" }, { type: "cold", text: "这把凉了吧" }, { type: "cold", text: "就这？" }, { type: "cold", text: "也就一般" }, { type: "cold", text: "运气好而已" }, { type: "cold", text: "换个人也能做到" }, { type: "cold", text: "等着翻车吧" }, { type: "cold", text: "这种判断，迟早出事" }, { type: "cold", text: "看了半天也没看出哪里厉害" }, { type: "cold", text: "太磨叽了" }, { type: "cold", text: "说了这么多，一点用没有" }, { type: "cold", text: "我押失败", scope: "inst" }, { type: "cold", text: "评级能拿个C就不错了", scope: "inst" }, { type: "cold", text: "队友再强也带不动", scope: "inst" }, { type: "cold", text: "太自信了，这本专治自信", scope: "inst" }, { type: "cold", text: "往届比这厉害的都栽在这", scope: "inst" }, { type: "cold", text: "真以为能全身而退？", scope: "inst" }, { type: "cold", text: "没意思，我换台了" }, { type: "cold", text: "这操作也就D级水平" }, { type: "cold", text: "这不是冷静，是反应慢" }, { type: "cold", text: "别吹了，看结算", scope: "inst" }, { type: "cold", text: "种菜有什么好看的", scope: "corr" }, { type: "cold", text: "回廊里直播，缺积分缺疯了吧", scope: "corr" }, { type: "cold", text: "天天摆烂，等着被清算吧", scope: "corr" }, { type: "envy", text: "凭什么这种人能上热门" }, { type: "envy", text: "我直播三天没人看，这也行？" }, { type: "envy", text: "长得好就是占便宜" }, { type: "envy", text: "又是这种运气好的" }, { type: "envy", text: "打赏的是托吧" }, { type: "envy", text: "我也想有人给我刷" }, { type: "envy", text: "这点本事也能拿打赏" }, { type: "envy", text: "同样是D级进来的，差距怎么这么大" }, { type: "envy", text: "分到这么好的队友，换我我也行", scope: "inst" }, { type: "envy", text: "酸了，真的酸了" }, { type: "envy", text: "一进来就有大佬带，羡慕不来", scope: "inst" }, { type: "envy", text: "这热度买的吧" }, { type: "envy", text: "凭什么打赏都往这边跑" }, { type: "envy", text: "我通关都没人看" }, { type: "envy", text: "排行榜上那些名字，一半靠运气" }, { type: "envy", text: "有人天生就是被偏爱的" }, { type: "envy", text: "我要是有这配置，比这还稳", scope: "inst" }, { type: "envy", text: "住的地方比我好十倍", scope: "corr" }, { type: "envy", text: "在回廊都能开播赚积分，羡慕哭了", scope: "corr" }, { type: "envy", text: "这菜种得，比我吃的还好", scope: "corr" }, { type: "smear", text: "装什么装" }, { type: "smear", text: "演的吧，这反应太假了" }, { type: "smear", text: "人设立得挺好" }, { type: "smear", text: "会说话而已，真打起来就露馅" }, { type: "smear", text: "这种人最会卖队友" }, { type: "smear", text: "表面客气，背地里肯定算计着" }, { type: "smear", text: "我不信真这么淡定" }, { type: "smear", text: "刚才那个眼神，心虚了吧" }, { type: "smear", text: "故意卖惨要打赏" }, { type: "smear", text: "刚才明明可以救，没救", scope: "inst", when: "hurt" }, { type: "smear", text: "自私，只顾自己", scope: "inst" }, { type: "smear", text: "队友出事了还这么冷静，冷血吧", scope: "inst", when: "hurt" }, { type: "smear", text: "这是在拿别人探路", scope: "inst" }, { type: "smear", text: "满嘴好话，一件实事没干" }, { type: "smear", text: "装新人的吧" }, { type: "smear", text: "就是冲着打赏来的" }, { type: "smear", text: "看着就不是好人" }, { type: "smear", text: "别被骗了，都是算计好的" }, { type: "smear", text: "下了本也要直播，吃相难看", scope: "corr" }, { type: "smear", text: "种田人设，炒给谁看", scope: "corr" }, { type: "rumor", text: "听说积分是借的，真的假的" }, { type: "rumor", text: "肯定是抱大腿进来的" }, { type: "rumor", text: "我朋友说在黑市见过这人" }, { type: "rumor", text: "据说上一个本是被人带飞的" }, { type: "rumor", text: "听说欠了一屁股积分" }, { type: "rumor", text: "有人说是买了攻略才敢进的", scope: "inst" }, { type: "rumor", text: "听说被公会踢出来过" }, { type: "rumor", text: "情报社的人说，这人被抽查过" }, { type: "rumor", text: "有人在西区看到这人跟黑市贩子说话" }, { type: "rumor", text: "据说是走后门才越级的" }, { type: "rumor", text: "听说上个本的队友都没出来" }, { type: "rumor", text: "有人说这人其实早就待清算了" }, { type: "rumor", text: "我听说排名是刷的" }, { type: "rumor", text: "传闻进本前偷偷买了防抽查道具" }, { type: "rumor", text: "听说有人专门花钱买这人的录像" }], Lg = [{ type: "praise", text: "{who}刚才那下好帅" }, { type: "praise", text: "{who}挺靠谱的" }, { type: "bless", text: "{who}别出事啊" }, { type: "bless", text: "心疼{who}" }, { type: "bless", text: "{who}还好吗", when: "hurt" }, { type: "discuss", text: "{who}靠谱吗，我看不透" }, { type: "discuss", text: "{who}又不说话了" }, { type: "discuss", text: "{who}刚才那句什么意思" }, { type: "discuss", text: "盯紧{who}" }, { type: "discuss", text: "{who}和主播配合挺默契" }, { type: "discuss", text: "{who}好像知道点什么" }, { type: "cold", text: "{who}也就那样" }, { type: "cold", text: "指望{who}？算了吧" }, { type: "envy", text: "凭什么{who}也有人喜欢" }, { type: "smear", text: "我就说{who}有问题" }, { type: "smear", text: "{who}在演" }, { type: "smear", text: "{who}那个表情不对劲" }, { type: "rumor", text: "听说{who}在排行榜上挂过名" }, { type: "rumor", text: "我听说{who}以前出过事" }, { type: "rumor", text: "{who}跟主播是不是早就认识" }], Rg = {
  names: Pg,
  pool: Dg,
  templates: Lg
}, us = /* @__PURE__ */ new Set(), sn = [];
let $t = null, Ds = [], Zr = null;
function gs() {
  for (const e of Ds.slice())
    try {
      e();
    } catch (t) {
      console.warn("[rlzc] RLZC_LIVE 订阅回调出错", t);
    }
}
function Og() {
  return 1500 + Math.random() * 1500;
}
function Hc() {
  $t = null;
  const e = sn.shift();
  e !== void 0 && (us.delete(e), gs()), sn.length && ($t = setTimeout(Hc, Og()));
}
function Ji(e, t = !1) {
  if (t && sn.length) {
    for (const n of sn) us.delete(n);
    sn.length = 0, $t && clearTimeout($t), $t = null;
  }
  if (e.length) {
    for (const n of e)
      us.add(n.id), sn.push(n.id);
    $t ? gs() : Hc();
  }
}
function Fg() {
  $t && clearTimeout($t), $t = null, sn.length = 0, us.clear();
}
function jg(e) {
  Zr = e, window.RLZC_LIVE = {
    get: () => Zr.view(us),
    subscribe(t) {
      return typeof t != "function" ? () => {
      } : (Ds.push(t), () => {
        Ds = Ds.filter((n) => n !== t);
      });
    },
    toggle: () => Zr.toggle()
  };
}
function Bg(e, t = 100) {
  let n = null, s = null;
  const r = () => {
    s = null, e();
  };
  return {
    get running() {
      return n !== null;
    },
    start() {
      if (n || typeof MutationObserver > "u") return;
      const i = document.getElementById("chat");
      i && (n = new MutationObserver(() => {
        s || (s = setTimeout(r, t));
      }), n.observe(i, { childList: !0, subtree: !0, characterData: !0 }));
    },
    stop() {
      n?.disconnect(), n = null, s && clearTimeout(s), s = null;
    }
  };
}
function Vg() {
  const e = document.getElementById("mes_stop");
  return !!e && getComputedStyle(e).display !== "none";
}
const Wc = "rlzc_market", ml = { D: 0, C: 1, B: 2, A: 3, S: 4 }, Gc = { D: 1e3, C: 5e3, B: 2e4, A: 8e4, S: 3e5 }, gl = 10, Ug = 0.8, Hg = "ending", Wg = "rating", Kc = ["S", "A", "B", "C", "D"];
function Gg(e, t) {
  return ml[e] - ml[t];
}
function Kg(e) {
  return e <= -2 ? 0.85 : e === -1 ? 0.75 : e === 0 ? 0.6 : e === 1 ? 0.4 : e === 2 ? 0.25 : 0.15;
}
const Es = {
  "le-1": { S: 0.15, A: 0.3, B: 0.3, C: 0.17, D: 0.08 },
  0: { S: 0.08, A: 0.2, B: 0.35, C: 0.25, D: 0.12 },
  1: { S: 0.04, A: 0.12, B: 0.3, C: 0.32, D: 0.22 },
  ge2: { S: 0.02, A: 0.08, B: 0.25, C: 0.35, D: 0.3 }
};
function qg(e) {
  return e <= -1 ? Es["le-1"] : e === 0 ? Es[0] : e === 1 ? Es[1] : Es.ge2;
}
function Cr(e) {
  return Math.round(e * 100) / 100;
}
function Yg(e, t) {
  const n = 0.93 + t() * 0.14;
  return Math.max(1.01, Cr(1 / e * Ug * n));
}
function qc(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function Yn(e, t, n, s) {
  return { id: e, label: t, p: n, odds: Yg(n, s) };
}
function Yc(e, t, n) {
  const s = {
    id: t.id,
    kind: e,
    q: t.q,
    options: [Yn("yes", t.yes, t.p, n), Yn("no", t.no, Cr(1 - t.p), n)],
    judge: t.judge
  };
  return t.judgeNo && (s.judgeNo = t.judgeNo), t.by && (s.by = t.by), s;
}
function Jg(e) {
  const { pack: t, rand: n } = e;
  if (t.rest) return [];
  const s = Gg(t.level, e.playerLevel), r = Kg(s), i = [
    { id: Hg, kind: "ending", q: "本局结果", options: [Yn("win", "通关", r, n), Yn("lose", "失败", Cr(1 - r), n)] }
  ], o = qg(s);
  if (i.push({ id: Wg, kind: "rating", q: "本局评价", options: Kc.map((l) => Yn(l, l, o[l], n)) }), e.withEvents) for (const l of mh(t)) i.push(Yc("event", l, n));
  return i;
}
const xl = 2, Zg = 5;
function xi(e, t, n) {
  const s = e.map((i, o) => o), r = [];
  for (; r.length < t && s.length; ) r.push(s.splice(Math.floor(n() * s.length), 1)[0]);
  return r.sort((i, o) => i - o).map((i) => e[i]);
}
function Qg(e, t, n) {
  if (!t) return { markets: e.filter((o) => o.kind === "ending" || o.kind === "rating") };
  const s = xl + Math.floor(n() * (Zg - xl + 1)), r = 1 + Math.floor(n() * 2), i = xi(e, s - r, n);
  return { markets: i, plan: { total: s, freak: r, order: e.map((o) => o.id) }, reserve: e.filter((o) => !i.includes(o)) };
}
function Xg(e, t, n) {
  const s = e.markets.filter((c) => c.kind !== "freak"), r = e.reserve ?? [];
  if (!e.plan) return { markets: [...s, ...t ? vl(t, n) : []], reserve: r };
  const i = vl(xi(t ?? [], e.plan.freak, n), n), o = xi(r, e.plan.freak - i.length, n), l = (c) => e.plan.order.indexOf(c.id);
  return { markets: [...[...s, ...o].sort((c, u) => l(c) - l(u)), ...i], reserve: r.filter((c) => !o.includes(c)) };
}
function ex(e, t) {
  return e - Math.max(0, t);
}
function Jc(e) {
  const t = Gc[e.playerLevel], n = ex(e.balance, e.lockedTips), s = Math.max(0, Math.min(t - e.already, n)), r = e.stake, i = Number.isFinite(r) && r > 0 && e.balance - r < St[e.playerLevel];
  let o;
  return !Number.isInteger(r) || r < gl ? o = `最少押${gl}` : e.already + r > t ? o = "超过单注上限" : r > n && (o = "可用余额不足"), { ok: !o, reason: o, cap: t, max: s, belowKill: i };
}
function tx(e, t) {
  return e.tickets.filter((n) => n.market === t).reduce((n, s) => n + s.stake, 0);
}
function nx(e, t) {
  return Object.keys(e).map(Number).filter((n) => n >= t).length >= 2;
}
const Zc = ["通关", "成功", "胜利"], Zi = ["死亡", "阵亡"];
function sx(e) {
  return Zi.includes(String(e ?? "").trim());
}
function rx(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  return Zi.includes(n) ? { kind: "lost", index: t } : Zc.includes(n) ? { kind: "option", option: "win", index: t } : n === "失败" ? { kind: "option", option: "lose", index: t } : { kind: "refund", index: t };
}
function ix(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  if (Zi.includes(n)) return { kind: "lost", index: t };
  const s = String(e.rating ?? "").trim().toUpperCase();
  return Zc.includes(n) && Kc.includes(s) ? { kind: "option", option: s, index: t } : { kind: "refund", index: t };
}
function ox(e, t) {
  const n = t.outcome, s = e.by !== void 0 ? t.phaseEnds[e.by] : void 0;
  let r;
  s !== void 0 && (!n.ended || n.endIndex === void 0 || s < n.endIndex) ? r = s : n.ended && (r = n.endIndex ?? -1);
  let i = !0, o = !1, l = 0;
  for (const c of t.rounds) {
    if (r !== void 0 && c.index > r) break;
    if (!(n.ended && n.endedBy === "tag" && c.index === n.endIndex))
      if (l++, c.state === "ok") {
        if (c.hits[e.id] === !0) return { kind: "option", option: "yes", index: c.index };
        if (e.judgeNo && c.hits[`${e.id}:no`] === !0) return { kind: "option", option: "no", index: c.index };
      } else
        i = !1, c.state === "pending" && (o = !0);
  }
  if (r === void 0) return null;
  const a = n.ended && r === (n.endIndex ?? -1);
  return a && n.endedBy === "tag" && sx(n.result) ? { kind: "lost", index: r } : a && n.endedBy !== "tag" ? { kind: "refund", index: r } : o ? null : i && l > 0 ? { kind: "option", option: "no", index: r } : { kind: "refund", index: r };
}
function lx(e) {
  const t = {};
  for (const n of e.markets)
    e.outcome.voided ? t[n.id] = { kind: "refund", index: -1 } : n.kind === "ending" ? t[n.id] = rx(e.outcome) : n.kind === "rating" ? t[n.id] = ix(e.outcome) : t[n.id] = ox(n, e);
  return t;
}
function vi(e, t) {
  const n = {};
  for (const s of e.tickets) {
    if (e.frozen) {
      n[s.id] = e.frozen[s.id] ?? { stamp: "refund", index: -1 };
      continue;
    }
    const r = t[s.market];
    r ? r.kind === "refund" ? n[s.id] = { stamp: "refund", index: r.index } : r.kind === "lost" ? n[s.id] = { stamp: "lose", index: r.index } : n[s.id] = { stamp: s.option === r.option ? "win" : "lose", index: r.index } : n[s.id] = null;
  }
  return n;
}
function ax(e, t) {
  const n = {}, s = vi({ ...e, frozen: void 0 }, t);
  for (const r of e.tickets) n[r.id] = s[r.id] ?? { stamp: "refund", index: -1 };
  return n;
}
function cx(e, t, n, s = []) {
  const r = new Set(Array.isArray(s) ? s : [s]);
  return Object.keys(t).map(Number).filter((i) => i > n && _e(e[i])).sort((i, o) => i - o).map((i) => {
    const o = e[i]?.extra?.rlzc?.sub;
    return o && !o.skipped && o.markets && typeof o.markets == "object" ? { index: i, state: "ok", hits: o.markets } : !o && r.has(i) ? { index: i, state: "pending", hits: {} } : { index: i, state: "miss", hits: {} };
  });
}
function ux(e, t) {
  const n = [];
  if (e.frozen) return n;
  for (const s of e.markets)
    s.kind !== "event" && s.kind !== "freak" || t[s.id] || !s.judge || (n.push({ id: s.id, judge: s.judge }), s.judgeNo && n.push({ id: `${s.id}:no`, judge: s.judgeNo }));
  return n;
}
function Qc(e, t) {
  return e.markets.find((n) => n.id === t);
}
function dx(e, t) {
  return e?.options.find((n) => n.id === t)?.label ?? t;
}
function Ax(e, t) {
  const n = Qc(e, t.market);
  return `下注·${e.packName}·${n?.q ?? t.market}·${dx(n, t.option)}`;
}
function fx(e, t, n) {
  const s = [];
  for (const r of e.tickets) {
    s.push({ delta: -r.stake, source: Ax(e, r), type: "bet", at: r.at, pos: r.after, seq: r.seq ?? 0 });
    const i = t[r.id];
    if (!i || i.stamp === "lose") continue;
    const o = Qc(e, r.market)?.q ?? r.market, l = (i.index >= 0 ? n(i.index) : void 0) ?? r.at;
    i.stamp === "win" ? s.push({ delta: qc(r.stake, r.odds), source: `赌票兑付·${e.packName}·${o}`, type: "bet", at: l, pos: i.index }) : s.push({ delta: r.stake, source: `赌票退还·${e.packName}·${o}`, type: "bet", at: l, pos: i.index });
  }
  return s;
}
const px = '你是回廊黑市的庄家，要为主播即将进入的副本开几个离谱但有趣的盘口。你只知道下面这些公开信息，不知道剧情会怎么走。出2到3道是非题：题目20字以内，称{{user}}为主播，不用性别代词；必须能从之后的正文里直接看出是或否；不要问结局、评价和生死，那些已经有盘了；不要涉及公开信息以外的设定。每题给一个你估计「是」的概率p（0.05到0.95）。只输出JSON：[{"q":"题目","judge":"用来判断是否发生的一句陈述","p":0.3}]', hx = 4e3;
function Xc(e) {
  const n = kc(e).split(`
`), s = n.findIndex((i) => /副本简报/.test(i));
  return (s >= 0 ? n.slice(s, s + 6) : n).join(`
`).trim().slice(0, 1e3);
}
function mx(e) {
  const t = e.docs.filter((s) => s.md && s.md.trim()).map((s) => `## ${s.title}
${s.md.trim()}`).join(`

`).slice(0, hx), n = [
    `【副本】${e.name}　等级：${e.level}`,
    `【简报】
${e.briefing || "（无）"}`,
    `【公开资料】
${t || "（无）"}`
  ].join(`

`);
  return { system: px, user: n };
}
function gx(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), r = t.lastIndexOf("]");
  if (s < 0 || r <= s) throw new Fe("返回里没有 JSON 数组");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new Fe("返回的 JSON 无法解析");
  }
  if (!Array.isArray(i)) throw new Fe("返回的不是 JSON 数组");
  const o = [];
  for (const l of i) {
    if (!l || typeof l.q != "string" || typeof l.judge != "string") continue;
    const a = l.q.trim(), c = l.judge.trim(), u = typeof l.p == "number" ? l.p : Number(l.p);
    if (!(!a || a.length > 20 || !c || !Number.isFinite(u) || u < 0.05 || u > 0.95) && (o.push({ q: a, judge: c, p: Cr(u) }), o.length >= 3))
      break;
  }
  if (!o.length) throw new Fe("没有合格的题");
  return o;
}
async function xx(e, t, n = 1) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return gx(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
function vl(e, t) {
  return e.map((n, s) => Yc("freak", { id: `F${s + 1}`, q: n.q, yes: "会", no: "不会", p: n.p, judge: n.judge }, t));
}
function vx(e) {
  return `{{user}}在黑市押了自己本局失败，押注${e}分。`;
}
function yx(e) {
  return `{{user}}刚在赌坊输掉${e}分，余额已低于斩杀线。`;
}
function bx(e) {
  return `{{user}}刚在赌坊一局赢了${e}分。`;
}
function kx(e) {
  return e.kind === "betLose" ? vx(e.amount) : e.kind === "casinoLoss" ? yx(e.amount) : bx(e.amount);
}
function yi(e, t) {
  if (t.kind === "betLose") {
    const n = e.find((s) => s.kind === "betLose");
    if (n && !n.sent) return e.map((s) => s === n ? { ...s, amount: s.amount + t.amount, after: t.after } : s);
  }
  return [...e, t];
}
function wx(e) {
  return e.filter((t) => !t.sent);
}
function zx(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.casino ?? {}, s = {};
  for (const [r, i] of Object.entries(t.books ?? {}))
    i && typeof i == "object" && Array.isArray(i.markets) && (s[r] = { ...i, tickets: Array.isArray(i.tickets) ? i.tickets : [] });
  return {
    books: s,
    casino: {
      tables: Array.isArray(n.tables) ? n.tables.filter((r) => typeof r == "string") : [],
      key: typeof n.key == "string" ? n.key : "",
      plays: Array.isArray(n.plays) ? n.plays : []
    },
    hints: Array.isArray(t.hints) ? t.hints.filter((r) => r && typeof r.kind == "string" && Number.isFinite(r.amount)) : [],
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0
  };
}
const Qr = (e) => Array.from({ length: e }, (t, n) => n + 1), Qi = [
  {
    id: "bell",
    name: "听钟",
    desc: "押钟声单双、大小，或猜几下。",
    bets: [
      { id: "odd", label: "单", mult: 1.6 },
      { id: "even", label: "双", mult: 1.6 },
      { id: "small", label: "小", mult: 1.6 },
      { id: "big", label: "大", mult: 1.6 },
      ...Qr(12).map((e) => ({ id: `n${e}`, label: `${e}下`, mult: 9.6 }))
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
      ...Qr(20).map((e) => ({ id: `d${e}`, label: `${e}号`, mult: 16 }))
    ]
  },
  {
    id: "lot",
    name: "抽签",
    desc: "三支签，一支大吉。",
    bets: Qr(3).map((e) => ({ id: `s${e}`, label: `第${e}支`, mult: 2.4 }))
  },
  {
    id: "card",
    name: "翻牌",
    desc: "和庄家各翻一张，大的赢，平局庄家赢。",
    bets: [{ id: "high", label: "比大小", mult: 1.73 }]
  }
];
function $n(e) {
  return Qi.find((t) => t.id === e);
}
function Fn(e, t) {
  return Math.min(e, 1 + Math.floor(t() * e));
}
function _x(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function $x(e, t, n, s) {
  const r = $n(e), i = r?.bets.find((u) => u.id === t);
  if (!r || !i) return null;
  let o = !1, l = "", a = [];
  switch (r.id) {
    case "bell": {
      const u = Fn(12, s);
      a = [u], i.id === "odd" || i.id === "even" ? (o = u % 2 === 1 == (i.id === "odd"), l = `${u}下，${u % 2 ? "单" : "双"}`) : i.id === "small" || i.id === "big" ? (o = u <= 6 == (i.id === "small"), l = `${u}下，${u <= 6 ? "小" : "大"}`) : (o = i.id === `n${u}`, l = `${u}下`);
      break;
    }
    case "door": {
      const u = Fn(20, s);
      if (a = [u], i.id.startsWith("r")) {
        const f = Number(i.id.slice(1));
        o = u > (f - 1) * 5 && u <= f * 5;
      } else o = i.id === `d${u}`;
      l = `${u}号门`;
      break;
    }
    case "lot": {
      const u = Fn(3, s);
      a = [u], o = i.id === `s${u}`, l = `第${u}支大吉`;
      break;
    }
    case "card": {
      const u = Fn(13, s), f = Fn(13, s);
      a = [u, f], o = u > f, l = `你 ${u}，庄家 ${f}`;
      break;
    }
  }
  const c = o ? _x(n, i.mult) : 0;
  return { win: o, payout: c, net: o ? c - n : -n, result: l, label: `押${i.label}`, faces: a };
}
function Sx(e, t) {
  return `赌坊·${$n(e)?.name ?? e}·${t}`;
}
function yl(e) {
  const t = Qi.map((i) => i.id), n = Math.min(t.length - 1, Math.floor(e() * t.length)), s = t.filter((i, o) => o !== n), r = Math.min(s.length - 1, Math.floor(e() * s.length));
  return [t[n], s[r]];
}
function Cx(e, t, n) {
  const s = e.tables.length === 2 && e.tables.every((o) => $n(o));
  if (s && e.key === t) return { tables: e.tables, key: t, changed: !1 };
  const r = (o) => s && o.length === 2 && o.every((l) => e.tables.includes(l));
  let i = yl(n);
  for (let o = 0; o < 20 && r(i); o++) i = yl(n);
  return r(i) && (i = Qi.map((o) => o.id).filter((o) => !e.tables.includes(o))), { tables: i, key: t, changed: !0 };
}
const bi = "rlzc", Ls = { optIn: !1, injectToAI: !1, source: "local", freq: 3 }, eu = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, Vn = {
  depths: { token: 4, progress: 4, turn: 0, ledger: 4, live: 4, format: 0 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  statusBarFix: !0,
  genericCaps: { ...as },
  subApi: structuredClone(eu),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0, live: !0, statusBar: !0, auditDebug: !0, manualDebug: !0, injectionDebug: !0, formatDebug: !0 },
  live: { ...Ls }
}, A = /* @__PURE__ */ fr({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(Vn),
  packs: [],
  lastInjection: cs,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: [],
  /** 黑市（第四期）：本局盘口、赌票、摆桌 */
  market: gv(),
  /** 入场提示小卡片（右上角，不挡操作）；同一时间只有一张 */
  entryCard: null,
  /** 待确认的副本：点过「不是」的入场信号，系统页里二次确认（进入 / 关掉不再提示） */
  pendingEntries: []
});
function Je(e) {
  return JSON.parse(JSON.stringify(e));
}
function xs(...e) {
  A.settings.debug && console.log("[rlzc]", ...e);
}
function Ex() {
  const e = me().extensionSettings, t = e[bi] ?? {}, n = {
    ...structuredClone(Vn),
    ...t,
    depths: { ...Vn.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? Vn.depths.ledger },
    ball: { ...Vn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => Ja(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    statusBarFix: typeof t.statusBarFix == "boolean" ? t.statusBarFix : !0,
    genericCaps: { ...as, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(eu),
      ...t.subApi ?? {},
      presets: Array.isArray(t.subApi?.presets) ? t.subApi.presets.map(Im) : [],
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
      statusBar: t.cardCollapsed?.statusBar ?? !0,
      auditDebug: t.cardCollapsed?.auditDebug ?? !0,
      manualDebug: t.cardCollapsed?.manualDebug ?? !0,
      injectionDebug: t.cardCollapsed?.injectionDebug ?? !0,
      formatDebug: t.cardCollapsed?.formatDebug ?? !0
    },
    live: Mx(t.live)
  };
  e[bi] = n, A.settings = n, A.packs = Oi(n.customPacks);
}
function Mx(e) {
  const t = e ?? {}, n = Math.floor(Number(t.freq));
  return {
    optIn: typeof t.optIn == "boolean" ? t.optIn : Ls.optIn,
    injectToAI: typeof t.injectToAI == "boolean" ? t.injectToAI : Ls.injectToAI,
    source: t.source === "ai" ? "ai" : "local",
    freq: Number.isFinite(n) ? Math.max(1, Math.min(10, n)) : Ls.freq
  };
}
function ye() {
  me().extensionSettings[bi] = /* @__PURE__ */ ae(A.settings), me().saveSettingsDebounced(), A.packs = Oi(A.settings.customPacks);
}
function Tx(e, t) {
  const n = A.settings.subApi, s = n.presets.find((r) => r.id === n.presetId);
  s && Nm(s, e, t) && ye();
}
function Ix(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = Ja(t);
  if (n.length) return n;
  const s = t;
  return Oi([]).some((r) => r.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (A.settings.customPacks = [...A.settings.customPacks.filter((r) => r.id !== s.id), s], ye(), []);
}
function Nx(e) {
  A.settings.customPacks = A.settings.customPacks.filter((t) => t.id !== e), ye();
}
function rt() {
  const e = Ze()[Ec];
  return !e || Array.isArray(e) ? {} : e;
}
function En(e) {
  Ze()[Ec] = e, Ve();
}
function hn(e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (o.is_user || o.is_system) continue;
    const l = o.extra?.rlzc?.ledger;
    if (!Array.isArray(l)) continue;
    const a = [o.send_date, o.gen_finished].map((c) => c instanceof Date ? c.getTime() : Date.parse(String(c ?? ""))).find((c) => Number.isFinite(c));
    for (const c of l) t.push({ e: { ...c, mesIndex: i, ts: a }, pos: i, g: 0, seq: 0 });
  }
  for (const { pos: i, seq: o, ...l } of vv(e))
    t.push({ e: { ...l, mesIndex: i, ts: fl(l.at) }, pos: i < 0 ? Number.MAX_SAFE_INTEGER : i, g: o === void 0 ? 1 : 2, seq: o ?? 0 });
  t.sort((i, o) => i.pos - o.pos || i.g - o.g || i.seq - o.seq);
  const n = t.map((i) => i.e), r = (rt().adjust ?? []).map((i) => ({
    delta: i.amount,
    source: `手动：${i.note}`,
    type: "manual",
    at: i.at,
    mesIndex: -1,
    ts: i.ts ?? fl(i.at)
  }));
  return Km(Gm(n, r));
}
function Ct(e) {
  const t = rt();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const r = e[s];
    if (r.is_user || !r.mes) continue;
    const i = n.exec(r.mes);
    if (!i) continue;
    const o = Tc(i[1]);
    if (o !== null) {
      const l = Qe(r.send_date ?? r.gen_finished ?? void 0);
      return En({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function it(e = q(), t = e.length) {
  const n = rt().fix?.level;
  return n && ["D", "C", "B", "A", "S"].includes(n) ? n : Mc(e, t) ?? "D";
}
function Px(e) {
  if (!(rt().init != null || A.ledger.length > 0)) return "";
  const s = Ct(e), r = pn(s.value, A.ledger), i = it(e), o = St[i], l = ms(s.value, A.ledger, o), a = Jm(r, l, i, o), c = $e();
  return c?.status === "active" && c.live ? Mg(a, qi(e, c.id)) : a;
}
function bl(e, t = !0) {
  const n = q(), s = n[e];
  if (!s || s.is_user) return;
  const r = s.mes ?? "", i = Qe(s.send_date ?? s.gen_finished ?? void 0), o = [], l = new RegExp(wh.source, "g");
  let a;
  for (; (a = l.exec(r)) !== null; ) {
    const u = jm(a[1]);
    u && o.push({ delta: u.delta, source: u.source, type: "tag", at: i });
  }
  const c = t ? wr(r) : null;
  if (c && A.pack && !A.pack.rest) {
    const u = {
      结果: c.result ?? "",
      评价: c.rating ?? "",
      ...c.fields
    }, f = it(n, e), m = Ct(n), k = pn(m.value, A.ledger), z = !!A.session?.clearance, x = Wm(A.pack.level, f, u, k, z, A.pack.name);
    if (x.warn) {
      s.extra = s.extra ?? {};
      const $ = s.extra.rlzc ?? { phase: "", round: 0, injected: [] };
      s.extra.rlzc = Je({ ...$, settleWarn: x.warn });
    }
    if (x.delta !== 0) {
      const $ = { delta: x.delta, source: x.source, type: "settle", at: i };
      x.clearWin && ($.clear = !0), o.push($);
    }
  }
  if (o.length || s.extra?.rlzc?.ledger?.length) {
    s.extra = s.extra ?? {};
    const u = s.extra.rlzc ?? { phase: "", round: 0, injected: [] }, f = [...o, ...(u.ledger ?? []).filter((m) => m.type === "tip")];
    s.extra.rlzc = Je({ ...u, ledger: f.length ? f : void 0 }), Ve();
  }
  A.ledger = hn(q());
}
function Dx(e, t) {
  const n = rt(), s = Qe(void 0), r = [...n.adjust ?? [], { amount: e, note: t, at: s, ts: Date.now() }];
  En({ ...n, adjust: r }), A.ledger = hn(q());
}
function Lx(e, t) {
  Dx(e, t);
}
function Rx(e) {
  const t = rt(), n = Qe(void 0);
  En({ ...t, init: { value: e, source: "手动设置", at: n } }), A.ledger = hn(q());
}
function Ox(e, t) {
  if (!e && !t) return;
  const n = rt(), s = q(), r = Qe(void 0);
  En({ ...n, fix: { level: e, rank: t, at: r, afterIndex: s.length - 1 } });
}
function $e() {
  return Xm(Ze()[nt]);
}
function mn() {
  const e = Ze(), t = Array.isArray(e[nt]?.declined) ? e[nt].declined : [], n = Array.isArray(e[pl]) ? e[pl] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function Fx(e) {
  const t = Ze(), n = [...mn().filter((s) => s !== e), e];
  t[nt] = { ...t[nt] ?? {}, declined: n }, Ve();
}
function vs() {
  const e = Ze()[nt]?.dropped;
  return Array.isArray(e) ? e : [];
}
function tu(e) {
  const t = Ze(), n = [.../* @__PURE__ */ new Set([...vs(), ...e])];
  t[nt] = { ...t[nt] ?? {}, dropped: n }, Ve();
}
function dn(e) {
  const t = Ze(), n = mn(), s = vs(), r = { ...n.length ? { declined: n } : {}, ...s.length ? { dropped: s } : {} };
  e ? t[nt] = { ...JSON.parse(JSON.stringify(e)), ...r } : n.length || s.length ? t[nt] = r : delete t[nt], Ve();
}
function Xi(e) {
  const t = $e();
  t && (e(t), dn(t), ze());
}
function nu(e) {
  const t = q();
  return (e === "swipe" || e === "continue") && _e(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function sr(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Ic(t, A.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = sc(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? cg(e, n, s) : null };
}
function ze() {
  const e = q();
  let t = $e();
  if (t) {
    const s = JSON.stringify(t);
    if (!tg(e, t))
      fu(t.id), dn(null), we("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const r = sr(e, t);
      r.progress && (t.status = r.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && dn(t);
    }
  }
  const n = sr(e, t);
  A.session = n.session, A.pack = n.pack, A.progress = n.progress, A.audit = n.audit, A.subLine = lu(e, n.progress), zv(e, n.session), A.ledger = hn(e), A.pendingEntries = n.session?.status === "active" ? [] : qx(e), A.tick++, gs(), Wx(n.session);
}
function su() {
  if (A.session)
    return Nc(A.session, A.progress?.rolesFromChat);
}
function rr() {
  for (const e of Rh) It(e, "", 0, !1);
}
let Jn = -1;
function jx(e) {
  const t = nu(e), n = $e(), { pack: s, progress: r, audit: i } = sr(t, n), o = n ? Nc(n, r?.rolesFromChat) : void 0, l = Tn() && !!r, a = l ? _r(t, r.entryIndex) : null, c = s ? Bh(s, r, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: r?.panel?.limit,
    audit: i ?? void 0,
    subNext: l ? gm(t, r.entryIndex) : void 0,
    stateText: a ? bc(s, a.state) : void 0
  }) : cs;
  rr();
  const u = A.settings.depths;
  c.token && It(rc, c.token, u.token, !0), c.progress && It(ic, c.progress, u.progress, !1), c.turn && It(oc, c.turn, u.turn, !1), c.state && It(lc, c.state, u.progress, !1);
  const f = rt();
  let m = Px(t);
  if (f.fix) {
    const x = Ym(f.fix);
    x && (m = m ? `${m}
${x}` : x);
  }
  const k = Ue();
  if (k.hints.length) {
    const x = k.hints.map(kx).join("");
    m = m ? `${m}
${x}` : x, k.hints.some(($) => !$.sent) && (k.hints = k.hints.map(($) => ({ ...$, sent: !0 })), Et(k));
  }
  if (m && It(ac, m, u.ledger, !1), A.settings.live.injectToAI) {
    const x = $m(Ao(/* @__PURE__ */ new Set(), t));
    x && It(cc, x, u.live, !1);
  }
  const z = qh(t) ? Kh : "";
  z && It(uc, z, u.format, !1), A.lastInjection = z ? { ...c, format: z } : c, Jn = t.length, xs("注入", e, c);
}
const ki = /* @__PURE__ */ new Set();
async function Bx() {
  const e = q(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Eh(n.mes);
  if (!s) return;
  const r = $e();
  if (!r || r.status !== "active" || r.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const i = `${Ut()}:${t}:${n.mes}`;
  if (ki.has(i)) return;
  ki.add(i);
  const { pack: o, progress: l } = sr(e, r);
  if (!o || !l || l.ended) return;
  const a = Mh(o, l.phase, l.round, s);
  a && await Wt(`是否跳到${s}？（${a.label}）`) && (r.manual.push({ kind: "skip", atIndex: t, targetPhase: a.phase, targetRound: a.round }), dn(r));
}
async function Vx(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      rr();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await Bx(), await ov(s), jx(s);
  } catch (r) {
    console.error("[rlzc] 拦截器出错", r), rr();
  }
}
const ds = /* @__PURE__ */ new Set();
function gn() {
  const e = $e();
  if (!e || e.status !== "ended") return 0;
  const t = A.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
function eo(e, t) {
  return Pc(e, gn(), t, vs());
}
let Ux = 0, Mn = null;
function ru(e) {
  const { index: t, info: n, pack: s } = e, r = Ut(), i = `${r}:${t}:${n.name}`;
  if (ds.has(i) || $e()?.status === "active") return;
  ds.add(i);
  const l = $r(s ?? {}, A.settings.live.optIn);
  Mn = e, A.entryCard = {
    id: ++Ux,
    key: i,
    chatId: r,
    index: t,
    name: s?.name ?? n.name,
    level: s ? s.rest ? "—" : s.level : Sn(n),
    unknown: !s,
    liveShow: l.show,
    live: l.checked
  };
}
function ys() {
  const e = A.entryCard;
  e && (ds.delete(e.key), A.entryCard = null, Mn = null);
}
function Hx(e) {
  A.entryCard && (A.entryCard.live = e);
}
function As() {
  A.entryCard = null, Mn = null;
}
function kl() {
  const e = A.entryCard, t = Mn;
  As(), !(!e || !t || Ut() !== e.chatId) && (Fx(Ht(t.index, t.info.name)), ze());
}
function wl() {
  const e = A.entryCard, t = Mn;
  if (As(), !e || !t) return;
  if (Ut() !== e.chatId) {
    ds.delete(e.key);
    return;
  }
  const { index: n, info: s } = t;
  e.liveShow && to(e.live);
  const r = Cn(q(), n, A.packs, eo(q(), n));
  if (!r || r.info.name !== s.name) {
    we("warning", "入场消息已变化，未启用。");
    return;
  }
  if ($e()?.status === "active") return;
  const i = { ...s };
  t.pack || (i.rounds = yr(s.limit, Sn(s), A.settings.genericCaps).rounds), lo(t.pack ?? br(i, A.settings.genericCaps), n, i, e.liveShow && e.live);
}
function to(e) {
  A.settings.live.optIn !== e && (A.settings.live.optIn = e, ye());
}
function no(e = q()) {
  for (let t = gn(); t < e.length; t++) if (_e(e[t])) return t;
  return -1;
}
function so() {
  const e = q(), t = no(e);
  return t < 0 ? "" : `${t}${e[t].swipe_id ?? ""}${e[t].mes ?? ""}`;
}
let ro = "";
function io() {
  ro = so();
  const e = rg(q(), $e(), mn(), A.packs, gn());
  e && ru(e);
}
function iu() {
  const e = A.entryCard;
  e && Cn(q(), e.index, A.packs, eo(q(), e.index))?.info.name !== Mn?.info.name && ys();
}
function oo() {
  $e()?.status !== "active" && (iu(), io());
}
const Rs = Bg(() => {
  !Vg() && so() !== ro && oo();
});
function Wx(e) {
  e?.status === "active" ? Rs.stop() : Rs.running || (ro = so(), Rs.start());
}
function Gx(e) {
  ze();
  const t = no();
  A.entryCard && (e === t || e === A.entryCard.index) && ys(), e === t && io();
}
function lo(e, t, n, s = !1) {
  const r = q(), i = r[t], o = $e();
  o && yv(o);
  const l = Qm(e, t, n), a = vt();
  if (a.corridor.on && (a.corridor.on = !1, fs(a, a.corridor.show, un.enterOff)), s && !e.disableLive && (l.live = !0, fs(a, l.id, un.instanceOn)), In(a), !e.rest) {
    const u = Ct(r);
    ms(u.value, A.ledger, St[it(r)]) && (l.clearance = !0);
  }
  As(), i.extra = i.extra ?? {};
  const c = i.extra.rlzc?.format;
  i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: l.id, ...c ? { format: c } : {} }, dn(l), bv(l, e, t), ze(), A.progress && (i.extra.rlzc.injected = Je(A.progress.perMessage[t]?.events ?? [])), Ve(), we("success", `已进入副本《${e.name}》。`);
}
async function Kx(e) {
  const t = A.packs.find((o) => o.id === e);
  if (!t) return;
  const n = ou();
  if (n < 0) {
    we("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  if ($e()?.status === "active" && !await Wt("当前已有进行中的副本，确定要替换吗？")) return;
  const r = $r(t, A.settings.live.optIn), i = await em(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`, r.show ? { label: "开启直播", checked: r.checked } : null);
  i.ok && (r.show && to(i.checked), lo(t, n, kr(q()[n].mes) ?? { name: t.name }, r.show && i.checked));
}
function ou(e = q()) {
  let t = e.length - 1;
  for (; t >= 0 && !_e(e[t]); ) t--;
  return t;
}
function ao(e = q()) {
  return sg(e, A.packs, gn(), mn(), vs());
}
function qx(e) {
  return ao(e).map(({ index: t, info: n, pack: s }) => {
    const r = $r(s ?? {}, A.settings.live.optIn);
    return {
      key: Ht(t, n.name),
      index: t,
      name: s?.name ?? n.name,
      level: s ? s.rest ? "—" : s.level : Sn(n),
      unknown: !s,
      liveShow: r.show,
      live: r.checked
    };
  });
}
function Yx(e, t) {
  const n = ao().find((o) => Ht(o.index, o.info.name) === e);
  if (!n) {
    we("warning", "这条副本信息已不存在。"), ze();
    return;
  }
  if ($e()?.status === "active") return;
  const s = ou();
  if (s < 0) return;
  const r = $r(n.pack ?? {}, A.settings.live.optIn);
  r.show && to(t);
  const i = { ...n.info };
  n.pack || (i.rounds = yr(i.limit, Sn(i), A.settings.genericCaps).rounds), ys(), lo(n.pack ?? br(i, A.settings.genericCaps), s, i, r.show && t);
}
function Jx(e) {
  const t = q(), n = ao(t).find((o) => Ht(o.index, o.info.name) === e);
  if (!n) {
    we("warning", "这条副本信息已不存在。"), ze();
    return;
  }
  if (n.pack) return;
  let s = "";
  for (let o = n.index; o >= 0 && !s; o--)
    _e(t[o]) && kr(String(t[o].mes ?? ""))?.name === n.info.name && (s = Xc(String(t[o].mes ?? "")));
  const r = gh(n.info, A.settings.genericCaps, `saved_${Date.now().toString(36)}`, s);
  A.settings.customPacks = [...A.settings.customPacks, r], ye();
  const i = mn().filter((o) => o.slice(o.indexOf(":") + 1) === n.info.name && Number(o.slice(0, o.indexOf(":"))) >= gn());
  tu(i.length ? i : [e]), ze(), we("success", `已收录《${r.name}》，可在「手动选择副本」里进入`);
}
function Zx(e) {
  const t = e.slice(e.indexOf(":") + 1), n = gn(), s = mn().filter((r) => r.slice(r.indexOf(":") + 1) === t && Number(r.slice(0, r.indexOf(":"))) >= n);
  tu(s.length ? s : [e]), ze();
}
function Er(e) {
  Xi((t) => t.manual.push(e));
}
function Mr() {
  return q().length - 1;
}
async function zl() {
  const e = A.progress;
  if (!(!e || e.ended || !A.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      we("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Wt(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (Er({ kind: "skip", atIndex: Mr(), targetPhase: e.phase.id, targetRound: e.phase.cap }), we("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function _l() {
  if (!(!A.session || A.progress?.ended) && await Wt("确定要手动结束当前副本吗？")) {
    if (A.session.live) {
      const e = vt();
      fs(e, A.session.id, un.instanceOff), In(e);
    }
    Er({ kind: "end", atIndex: Mr() });
  }
}
function Qx(e) {
  Er({ kind: "setPhase", atIndex: Mr(), phase: e });
}
function Xx(e) {
  Er({ kind: "setRound", atIndex: Mr(), round: e });
}
function ev(e) {
  Xi((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function tv(e) {
  Xi((t) => t.manual.splice(e, 1));
}
async function $l() {
  A.session && await Wt("确定要删除当前副本会话吗？（不会改动聊天记录）") && (fu(A.session.id), dn(null), ze());
}
function Tn() {
  return A.settings.subApi.source !== "off";
}
function co() {
  const e = A.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function nv(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function lu(e, t) {
  if (!Tn() || !t || t.ended) return "";
  if (A.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const r = _r(e, t.entryIndex);
  return r && t.perMessage[r.index] ? `副本记录：已更新（第${t.perMessage[r.index].round}轮）` : "副本记录：尚未整理";
}
let Zn = null;
const uo = /* @__PURE__ */ new Set();
function An(e) {
  return pm(Ut(), e, q()[e]);
}
function Sl(e) {
  A.subBusy = e, A.subLine = lu(q(), A.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && A.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function au(e, t, n) {
  if (An(e) !== t) return;
  const s = q()[e];
  s?.extra?.rlzc && (s.extra.rlzc = Je({ ...s.extra.rlzc, sub: n }), Ve(), ze());
}
function sv(e, t) {
  const n = q(), s = A.progress, r = A.pack, i = n[e], o = s?.perMessage[e];
  if (!r || !s || !o || !i) return null;
  const l = su(), a = (T) => ({ ...T, text: Qs(T.text, r, l), if: T.if ? Qs(T.if, r, l) : void 0 }), c = dm(r, i.extra?.rlzc?.injected ?? []).map(a), u = (s.next?.events ?? []).filter((T) => T.if).map(a);
  if (!hm({
    enabled: Tn(),
    active: !s.ended && A.session?.status === "active",
    type: t,
    saveMode: A.settings.subApi.saveMode,
    hasEvents: c.length > 0,
    hasNextConditional: u.length > 0
  })) return null;
  const m = An(e);
  if (uo.has(m)) return null;
  const k = r.phases.find((T) => T.id === o.phase), z = _r(n.slice(0, e), s.entryIndex), x = A.session ? Ue().books[A.session.id] : void 0, $ = um({
    pack: r,
    phaseName: k?.name ?? o.phase,
    round: o.round,
    prevState: z?.state ?? null,
    events: c,
    nextConditional: u,
    text: String(i.mes ?? ""),
    markets: x ? ux(x, A.market.results) : []
  }), F = me().substituteParams, O = F ? { system: F($.system), user: F($.user) } : $, M = rv(e, m, o.round, O);
  return Zn = { key: m, index: e, promise: M }, M.finally(() => {
    Zn?.key === m && (Zn = null);
  }), M;
}
async function rv(e, t, n, s) {
  Sl(!0);
  try {
    let r = 2;
    for (; ; ) {
      const i = co();
      if (!i) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await mm((a) => Hi(i, a), s, r);
        au(e, t, { ...l, ms: Date.now() - o, via: nv(i), at: (/* @__PURE__ */ new Date()).toISOString() }), uo.add(t);
        return;
      } catch (l) {
        if (An(e) !== t) return;
        const a = zr(l), c = gi(l), u = c === a ? String(l?.message ?? l).slice(0, 200) : "";
        if (xs("副本事件检测失败", c, l), !A.settings.subApi.wait) {
          we("warning", `第${n}轮事件检测失败：${c}，已沿用上一轮状态。`), Xr(e, t, c);
          return;
        }
        if (await iv(n, c, u) === "skip") {
          Xr(e, t, c);
          return;
        }
        r = 0;
      }
    }
  } catch (r) {
    we("error", String(r?.message ?? r)), Xr(e, t, "其他");
  } finally {
    Sl(!1);
  }
}
function Xr(e, t, n) {
  uo.add(t), au(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function iv(e, t, n) {
  const s = me();
  if (!s.Popup || !s.POPUP_TYPE)
    return window.confirm(`第${e}轮事件检测失败：${t}。重试吗？取消则这轮先跳过。`) ? "retry" : "skip";
  const r = A.settings.subApi, i = document.createElement("div"), o = document.createElement("h3");
  o.textContent = `第${e}轮事件检测失败`;
  const l = document.createElement("p");
  l.textContent = `原因：${t}`;
  const a = document.createElement("small");
  a.textContent = n, a.style.opacity = "0.7", n || (a.style.display = "none");
  const c = document.createElement("div");
  c.style.cssText = "display:none;margin-top:10px;";
  const u = document.createElement("label");
  u.textContent = "换成：";
  const f = document.createElement("select");
  f.className = "text_pole";
  const m = [{ value: "", text: "请选择…" }];
  for (const x of r.presets) r.source === "preset" && x.id === r.presetId || m.push({ value: `preset:${x.id}`, text: `自设API：${x.name}` });
  r.source !== "main" && m.push({ value: "main", text: "跟随主API" });
  for (const x of m) {
    const $ = document.createElement("option");
    $.value = x.value, $.textContent = x.text, f.append($);
  }
  u.append(f), c.append(u), i.append(o, l, a, c);
  let k;
  f.addEventListener("change", () => {
    const x = f.value;
    x && (x === "main" ? r.source = "main" : (r.source = "preset", r.presetId = x.slice(7)), ye(), k.complete(s.POPUP_RESULT.CUSTOM1));
  }), k = new s.Popup(i, s.POPUP_TYPE.TEXT, "", {
    okButton: "重试",
    cancelButton: "这轮先跳过",
    customButtons: [
      {
        text: "换一个接口",
        action: () => {
          c.style.display = "", f.focus();
        }
      }
    ]
  });
  const z = await k.show();
  return z === s.POPUP_RESULT.AFFIRMATIVE || z === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function ov(e) {
  const t = Zn;
  if (!(!t || !A.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= nu(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function lv(e, t) {
  const n = q(), s = n[e];
  if (!_e(s)) return;
  av(e, t);
  const r = $e();
  if (t !== "first_message" && ys(), !r || r.status === "ended") {
    if (Cn(n, e, A.packs, eo(n, e))) {
      const c = ng(n, A.packs, gn(), e, mn(), vs());
      c && ru(c);
    }
    if (t === "first_message") return;
    ze(), bl(e, !1), El(e), ti(e, t), Cl(), Il();
    return;
  }
  if (t === "first_message") return;
  let i = null;
  Tn() && (Qn = e);
  const o = Xa(s.mes);
  o && (r.roles = { ...r.roles ?? {}, ...o }), dn(r), ze();
  const l = A.progress?.perMessage[e];
  if (l && A.pack) {
    const c = A.pack.phases.find((x) => x.id === l.phase), u = {
      phase: c?.name ?? l.phase,
      round: l.round,
      injected: Jn === e ? A.lastInjection.injected : l.events
    }, f = A.pack.time;
    f.type === "clock" && c?.clock && !c.night && !c.frozen && (u.clock = tc(f.dayStart, f.minutesPerRound, l.round));
    const m = Jn === e ? A.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    m && (u.limit = m);
    const k = s.extra?.rlzc?.entry;
    k && (u.entry = k), s.extra?.rlzc?.format && (u.format = s.extra.rlzc.format), Jn === e && A.lastInjection.skipped?.length && (u.skippedEvents = A.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (u.sub = s.extra.rlzc.sub), t === "continue" && s.extra?.rlzc?.live && (u.live = s.extra.rlzc.live);
    const z = (s.extra?.rlzc?.ledger ?? []).filter((x) => x.type === "tip");
    t === "continue" && z.length && (u.ledger = z), s.extra = s.extra ?? {}, s.extra.rlzc = Je(u), Ve(), ze(), i = sv(e, t);
  }
  Qn >= 0 && (Qn = -1, i || ze());
  const a = wr(s.mes);
  if (a && we("info", `副本结算：${a.result ?? "—"}${a.rating ? `，评价 ${a.rating}` : ""}`), bl(e), El(e), i) {
    const c = An(e);
    i.then(() => {
      An(e) === c && ti(e, t);
    });
  } else ti(e, t);
  Cl(), Il();
}
function av(e, t) {
  if (t === "first_message" || t === "quiet" || t === "impersonate") return;
  const n = q(), s = n[e];
  if (!_e(s) || fc(n, e)) return;
  const r = Bi(s.mes);
  let i;
  if (r.kind !== "ok") {
    i = { kind: r.kind, detail: r.detail };
    const a = A.settings.statusBarFix ? Gh(s.mes) : null;
    a && (s.mes = a.text, Array.isArray(s.swipes) && s.swipe_id !== void 0 && s.swipe_id < s.swipes.length && (s.swipes[s.swipe_id] = a.text), i.fixed = !0, i.from = a.from, Qh(), Xh(e), Os(e), we("info", "已修正本轮状态栏标签"));
  }
  const o = s.extra?.rlzc;
  if (!i && (t === "continue" || !o?.format)) return;
  s.extra = s.extra ?? {};
  const l = o ?? { phase: "", round: 0, injected: [] };
  s.extra.rlzc = Je({ ...l, format: i }), Ve();
}
function Cl() {
  const e = rt();
  e.fix && En({ ...e, fix: void 0 });
}
function El(e) {
  const t = q(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const r = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!r) return;
  const i = Tc(r[1]);
  if (i === null) return;
  const o = Ct(t), l = (c) => c.mesIndex === e && (c.type === "tip" || c.type === "bet" && /^赌票/.test(c.source)), a = pn(o.value, hn(t).filter((c) => !l(c)));
  i !== a && (xs(`积分核对不符（楼层${e}）：状态栏 ${i}，账本 ${a}`), n.extra?.rlzc && (n.extra.rlzc = Je({ ...n.extra.rlzc, ledgerMismatch: { status: i, ledger: a } }), Ve()));
}
let Ms = null;
function Ml() {
  Rs.stop(), Ms && clearTimeout(Ms), ki.clear(), ys(), ds.clear(), Jn = -1, Qn = -1, A.chatId = Ut(), A.debugUnlocked = !1, A.lastInjection = cs, rr(), Fg(), fv(), A.ledger = hn(q()), ze(), io();
  const e = A.chatId;
  Ms = setTimeout(() => {
    Ms = null, Ut() === e && oo();
  }, 300), ir();
}
function ei(e) {
  ze(), iu(), e !== void 0 && e === no() && oo();
}
function cu() {
  return A.settings.panelDisplay === "statusbar" ? cn.filter((e) => e !== "副本") : cn;
}
function Os(e, t = !1) {
  gc(e, cu(), !1, t);
}
function ir(e = !1, t = !1) {
  om(cu(), e, t);
}
function cv(e) {
  A.settings.panelDisplay !== e && (A.settings.panelDisplay = e, ye(), ir(!0));
}
const Fs = Rg;
function vt() {
  return bg(Ze()[Rc]);
}
function In(e) {
  Ze()[Rc] = Je(e), Ve();
}
function fs(e, t, n) {
  if (!t) return;
  const s = Sr(q(), e) + 1, r = { id: s, t: "sys", name: "", text: n, amount: 0, net: 0, show: t };
  e.sys = [...e.sys, r].slice(-100), e.seq = s, Ji([r]);
}
function uv() {
  return "c" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function dv(e) {
  const t = A.session, n = A.progress;
  if (!!t && e > t.entryIndex && (!n?.ended || n.endIndex !== void 0 && e <= n.endIndex)) return t.live && A.pack ? { show: t.id, scope: "instance", pack: A.pack } : null;
  const r = vt();
  return r.corridor.on && r.corridor.show ? { show: r.corridor.show, scope: "corridor", pack: null } : null;
}
function ti(e, t) {
  if (t === "continue" || t === "first_message") return;
  const n = q(), s = n[e];
  if (!_e(s) || Gt(s)) return;
  const r = dv(e);
  if (!r) return;
  const i = vt(), { show: o, scope: l, pack: a } = r, c = A.progress, u = s.extra?.rlzc ?? { phase: "", round: 0, injected: [] }, f = Ki(n, o, e), m = u.sub && !u.sub.skipped ? { hype: u.sub.hype, hurt: u.sub.hurt } : void 0, k = l === "instance" && c?.endIndex === e && c.endedBy === "tag" ? wr(s.mes) : null, z = !!k && ["死亡", "阵亡"].includes(String(k.result ?? "").trim()), x = c?.roundsLeft, $ = /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(s.mes ?? "")), F = new Set((a?.events ?? []).filter((Q) => Q.kind !== "directive").map((Q) => Q.id)), O = ym({
    aiSource: A.settings.live.source === "ai",
    subOn: Tn(),
    roundInShow: f.length + 1,
    freq: A.settings.live.freq,
    phaseSwitch: $,
    hurt: Bc(String(s.mes ?? ""), m),
    eventDone: !!u.sub && !u.sub.skipped && (u.sub.events ?? []).some((Q) => Q.status === "done")
  }), M = $g({
    show: o,
    scope: l,
    packLevel: a?.level ?? null,
    playerLevel: Yi(n, e + 1),
    isRest: !!a?.rest,
    prevHeat: f.length ? f[f.length - 1].rec.heat : null,
    roundsInShow: f.length,
    text: String(s.mes ?? ""),
    hasEvents: (u.injected ?? []).some((Q) => F.has(Q)),
    hasPhaseSwitch: $,
    sub: m,
    isEnd: l === "instance" && !!x && x.y > 0 && x.x < x.y * 0.1,
    phaseId: l === "instance" ? c?.perMessage[e]?.phase : void 0,
    pool: Fs.pool,
    templates: Fs.templates,
    packDanmaku: a?.danmaku,
    names: Fs.names,
    whoNames: jc(Fc(n, e + 1), String(me().name1 ?? "")),
    recentTexts: kg(n.slice(0, e)),
    firstId: Sr(n, i) + 1,
    settle: k ? { died: z, tipsBefore: qi(n.slice(0, e), o) } : void 0,
    awaitAi: O,
    rand: Math.random
  });
  O && (M.ai = { ok: !1, pending: !0 });
  const T = Qe(s.send_date ?? s.gen_finished ?? void 0), te = [...(u.ledger ?? []).filter((Q) => Q.type !== "tip"), ...Cg(M, T)];
  s.extra = s.extra ?? {}, s.extra.rlzc = Je({ ...u, live: M, ledger: te.length ? te : void 0 }), i.seq = Math.max(i.seq, ...M.feed.map((Q) => Q.id)), In(i), A.ledger = hn(q()), A.tick++, M.feed.length ? Ji(M.feed, !0) : gs(), O && Av(e, M.scope === "instance" ? a?.name : void 0);
}
function Av(e, t) {
  const n = q(), s = An(e), r = co();
  if (!r) {
    ni(e, s, [], "副本事件检测没有设置好", 0);
    return;
  }
  const i = [];
  for (let u = e; u >= 0 && i.length < 2; u--) _e(n[u]) && i.unshift(String(n[u].mes ?? ""));
  const o = km({
    scene: t ?? "回廊",
    texts: i,
    cast: jc(Fc(n, e + 1), String(me().name1 ?? "")),
    samples: bm(Fs.pool, 10, Math.random)
  }), l = me().substituteParams, a = l ? { system: l(o.system), user: l(o.user) } : o, c = Date.now();
  zm((u) => Hi(r, u, { temperature: 0.9 }), a, 1).then((u) => ni(e, s, u, null, Date.now() - c)).catch((u) => {
    xs("AI 弹幕生成失败", u);
    const f = String(u?.message ?? u).slice(0, 120);
    ni(e, s, [], `${zr(u)}：${f}`, Date.now() - c);
  });
}
function ni(e, t, n, s, r) {
  if (An(e) !== t) return;
  const i = q(), o = i[e], l = Gt(o);
  if (!l?.pending || !o.extra?.rlzc) return;
  const a = vt(), c = Uc(l, s ? null : n, Sr(i, a) + 1, Math.random), u = s ? 0 : Math.min(n.length, 13), f = { ...c, ai: s ? { ok: !1, error: s, ms: r } : { ok: !0, count: u, ms: r } };
  o.extra.rlzc = Je({ ...o.extra.rlzc, live: f }), a.seq = Math.max(a.seq, ...f.feed.map((m) => m.id)), In(a), A.tick++, Ji(f.feed, !0);
}
function fv() {
  const e = q();
  let t = !1;
  for (const n of e) {
    const s = Gt(n);
    if (!s?.pending || !n.extra?.rlzc) continue;
    const r = vt(), i = Uc(s, null, Sr(e, r) + 1, Math.random);
    n.extra.rlzc = Je({ ...n.extra.rlzc, live: { ...i, ai: { ok: !1, error: "没有等到结果" } } }), r.seq = Math.max(r.seq, ...i.feed.map((o) => o.id)), In(r), t = !0;
  }
  t && Ve();
}
function pv() {
  const e = vt();
  return A.session?.status === "active" && A.pack ? Gi({ packLevel: A.pack.level, playerLevel: Yi(q()), isRest: !!A.pack.rest, heat: 20, rand: 1 }) : e.corridor.viewers ?? 0;
}
function hv() {
  const e = A.session;
  return e?.status === "active" ? !!e.live : vt().corridor.on;
}
function Ao(e, t = q()) {
  const n = A.session, s = n?.status === "active";
  return Ng(
    t,
    vt(),
    {
      inInstance: s,
      instanceLive: !!(s && n?.live),
      instanceShow: n?.id,
      startViewers: pv(),
      injectToAI: A.settings.live.injectToAI
    },
    e
  );
}
function mv() {
  const e = A.session, t = Ao(/* @__PURE__ */ new Set()), n = t.viewers > 0 ? ` · ${t.viewers.toLocaleString("en-US")}人在看` : "";
  if (e?.status === "active") {
    const s = A.pack?.disableLive ? "本副本自带直播玩法" : t.on ? `副本内锁定${n}` : "副本内锁定，回廊可开播";
    return { on: t.on, locked: !0, scope: "instance", note: s };
  }
  return { on: t.on, locked: !1, scope: "corridor", note: t.on ? `回廊直播${n}` : "回廊中可随时开播" };
}
function uu() {
  if (A.session?.status === "active") return !1;
  const e = vt();
  if (e.corridor.on)
    e.corridor.on = !1, fs(e, e.corridor.show, un.corridorOff);
  else {
    const t = uv();
    e.corridor = {
      on: !0,
      show: t,
      viewers: Gi({ packLevel: null, playerLevel: Yi(q()), isRest: !1, heat: 20, rand: 0.9 + Math.random() * 0.2 })
    }, fs(e, t, un.corridorOn);
  }
  return In(e), A.tick++, gs(), !0;
}
function gv() {
  return { book: null, results: {}, tickets: [], pending: 0, tables: [], casinoOpen: !0 };
}
function Ue() {
  return zx(Ze()[Wc]);
}
function Et(e) {
  Ze()[Wc] = Je(e), Ve();
}
let Qn = -1;
function xv() {
  return [Qn, Zn?.index ?? -1].filter((e) => e >= 0);
}
function fo(e = q()) {
  return pn(Ct(e).value, A.ledger);
}
function du(e) {
  if (rt().init) return;
  const t = Ct(e), n = rt();
  n.init || En({ ...n, init: { value: t.value, source: t.source, at: Qe(void 0) } });
}
function Au() {
  const e = $e();
  return e?.status === "active" && e.live ? qi(q(), e.id) : 0;
}
function Tr(e, t, n) {
  if (t.frozen) return { results: {}, tickets: vi(t, {}), rounds: [] };
  let s = { voided: !0, ended: !1 }, r = [], i = {};
  if (n && n.id === t.session) {
    const l = Ic(n, A.packs), a = l ? sc(e, n, l) : null;
    a && (s = {
      ended: a.ended,
      endedBy: a.endedBy,
      endIndex: a.endIndex,
      result: a.settlement?.result,
      rating: a.settlement?.rating
    }, r = cx(e, a.perMessage, a.entryIndex, xv()), i = a.phaseEnds);
  }
  const o = lx({ markets: t.markets, rounds: r, outcome: s, phaseEnds: i });
  return { results: o, tickets: vi(t, o), rounds: r };
}
function vv(e) {
  const t = Ue(), n = $e(), s = (i) => e[i] ? Qe(e[i].send_date ?? e[i].gen_finished ?? void 0) : void 0, r = [];
  for (const i of Object.values(t.books)) r.push(...fx(i, Tr(e, i, n).tickets, s));
  for (const i of t.casino.plays)
    r.push({ delta: i.net, source: Sx(i.table, i.label), type: "bet", at: i.at, pos: i.after, seq: i.seq ?? 0 });
  return r;
}
function yv(e) {
  const t = Ue(), n = t.books[e.id];
  if (!n || n.frozen) return;
  const s = q(), r = ax(n, Tr(s, n, e).results);
  for (const i of n.tickets) r[i.id].index < 0 && (r[i.id].index = Math.max(s.length, i.after + 1));
  n.frozen = r, Et(t);
}
function fu(e) {
  const t = Ue(), n = t.books[e];
  if (!n || n.frozen) return;
  const s = q().length;
  n.frozen = Object.fromEntries(n.tickets.map((r) => [r.id, { stamp: "refund", index: Math.max(s, r.after + 1) }])), Et(t);
}
function bv(e, t, n) {
  if (t.rest) return;
  const s = q(), r = Tn(), i = Jg({ pack: t, playerLevel: it(s), withEvents: r, rand: Math.random });
  if (!i.length) return;
  const o = Qg(i, r, Math.random), l = Ue(), a = { session: e.id, packId: t.id, packName: t.name, openedAt: Qe(void 0), markets: o.markets, tickets: [] };
  o.plan && (a.plan = o.plan, a.reserve = o.reserve), r && (a.freak = { status: "pending" }), l.books[e.id] = a, Et(l), r && kv(e.id, t, n);
}
function kv(e, t, n) {
  const s = (c, u) => {
    const f = Ue(), m = f.books[e];
    m && (m.closedAt || m.frozen ? u ? m.freak = { ...c, status: "late" } : m.freak = c : (Object.assign(m, Xg(m, u ?? null, Math.random)), m.freak = c), Et(f), ze());
  }, r = co();
  if (!r) {
    s({ status: "failed", error: "副本事件检测没有设置好" });
    return;
  }
  const i = mx({
    name: t.name,
    level: t.level,
    briefing: Xc(String(q()[n]?.mes ?? "")),
    docs: t.docs
  }), o = me().substituteParams, l = o ? { system: o(i.system), user: o(i.user) } : i, a = Date.now();
  xx((c) => Hi(r, c), l, 1).then((c) => s({ status: "ok", count: c.length, ms: Date.now() - a }, c)).catch((c) => {
    xs("庄家怪盘出题失败", c);
    const u = String(c?.message ?? c).slice(0, 120);
    s({ status: "failed", error: `${zr(c)}：${u}`, ms: Date.now() - a });
  });
}
const Ts = /* @__PURE__ */ new Map();
let Tl = null;
function wv(e) {
  const t = Ut(), n = Tl !== t;
  n && Ts.clear(), Tl = t;
  const s = { win: 0, lose: 0, refund: 0 };
  for (const i of e) {
    const o = i.res?.stamp ?? null, l = Ts.has(i.ticket.id), a = Ts.get(i.ticket.id);
    Ts.set(i.ticket.id, o), !n && l && o && o !== a && s[o]++;
  }
  const r = [s.win ? `兑 ${s.win} 张` : "", s.lose ? `废 ${s.lose} 张` : "", s.refund ? `退 ${s.refund} 张` : ""].filter(Boolean);
  r.length && we("info", `赌票开奖：${r.join("，")}。`);
}
function zv(e, t) {
  const n = Ue();
  let s = !1;
  const r = t?.status === "active", i = t ? n.books[t.id] : void 0;
  i && !i.closedAt && !i.frozen && A.progress && nx(A.progress.perMessage, A.progress.entryIndex) && (i.closedAt = Qe(void 0), s = !0);
  const o = r ? n.casino.key : t?.status === "ended" ? t.id : "", l = Cx(n.casino, o, Math.random);
  l.changed && (!r || n.casino.tables.length !== 2) && (n.casino.tables = l.tables, n.casino.key = l.key, s = !0), s && Et(n);
  const a = [];
  let c = {};
  for (const u of Object.values(n.books)) {
    const f = Tr(e, u, t);
    i && u.session === i.session && (c = f.results);
    for (const m of u.tickets) a.push({ ticket: m, book: u, market: u.markets.find((k) => k.id === m.market), res: f.tickets[m.id] ?? null });
  }
  a.sort((u, f) => (f.ticket.seq ?? 0) - (u.ticket.seq ?? 0)), wv(a), A.market = {
    book: r && i ? i : null,
    results: c,
    tickets: a,
    pending: a.filter((u) => !u.res).length,
    tables: n.casino.tables,
    casinoOpen: !r || !!A.pack?.casino
  };
}
function pu(e, t) {
  const n = q(), s = A.market.book;
  return Jc({
    playerLevel: it(n),
    stake: t,
    already: s ? tx(s, e) : 0,
    balance: fo(n),
    lockedTips: Au()
  });
}
function _v(e, t, n) {
  const s = $e();
  if (!s || s.status !== "active") return "没有进行中的副本";
  const r = Ue(), i = r.books[s.id];
  if (!i || i.frozen) return "本局没有开盘";
  if (i.closedAt) return "已封盘";
  const o = i.markets.find((f) => f.id === e), l = o?.options.find((f) => f.id === t);
  if (!o || !l) return "没有这个盘口";
  if (A.market.results[e]) return "已开奖";
  const a = pu(e, n);
  if (!a.ok) return a.reason ?? "不能下注";
  const c = q();
  du(c);
  const u = r.seq + 1;
  return r.seq = u, i.tickets.push({ id: `t${u}`, seq: u, market: e, option: t, stake: n, odds: l.odds, at: Qe(void 0), after: c.length - 1 }), o.kind === "ending" && t === "lose" && (r.hints = yi(r.hints, { kind: "betLose", amount: n, after: c.length - 1 })), Et(r), ze(), null;
}
function hu(e) {
  const t = q();
  return Jc({ playerLevel: it(t), stake: e, already: 0, balance: fo(t), lockedTips: Au() });
}
function $v(e, t, n) {
  if (!A.market.casinoOpen) return { error: "赌坊只在回廊营业。" };
  const s = Ue();
  if (!s.casino.tables.includes(e)) return { error: "这张桌今晚没开" };
  const r = hu(n);
  if (!r.ok) return { error: r.reason };
  const i = $x(e, t, n, Math.random);
  if (!i) return { error: "没有这种押法" };
  const o = q();
  du(o);
  const l = it(o), a = fo(o), c = o.length - 1, u = s.seq + 1;
  return s.seq = u, s.casino.plays = [
    ...s.casino.plays,
    { id: `g${u}`, seq: u, table: e, bet: t, label: i.label, stake: n, win: i.win, payout: i.payout, net: i.net, result: i.result, at: Qe(void 0), after: c }
  ], !i.win && a - n < St[l] && (s.hints = yi(s.hints, { kind: "casinoLoss", amount: n, after: c })), i.win && i.net > Gc[l] * 5 && (s.hints = yi(s.hints, { kind: "casinoWin", amount: i.net, after: c })), Et(s), ze(), { outcome: i };
}
function Il() {
  const e = Ue();
  if (!e.hints.length) return;
  const t = wx(e.hints);
  t.length !== e.hints.length && (e.hints = t, Et(e));
}
function Sv() {
  const e = $e(), t = e ? Ue().books[e.id] : void 0;
  return t ? Tr(q(), t, e).rounds : [];
}
const po = "M16 16c-2.6-3.4-5-5.2-7.6-5.2a5.2 5.2 0 000 10.4c2.6 0 5-1.8 7.6-5.2s5-5.2 7.6-5.2a5.2 5.2 0 010 10.4c-2.6 0-5-1.8-7.6-5.2z", Cv = { class: "rlzc-entry-kicker" }, Ev = {
  class: "rlzc-entry-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, Mv = ["d"], Tv = { class: "rlzc-entry-title" }, Iv = { class: "rlzc-entry-level" }, Nv = { class: "rlzc-entry-name" }, Pv = {
  key: 0,
  class: "rlzc-entry-note"
}, Dv = { class: "rlzc-entry-foot" }, Lv = ["aria-checked"], Rv = { key: 1 }, Ov = { class: "rlzc-entry-actions" }, Fv = /* @__PURE__ */ Be({
  __name: "EntryCard",
  setup(e) {
    const t = H(() => A.entryCard);
    return (n, s) => (y(), Ge(oA, {
      name: "rlzc-entry-fade",
      mode: "out-in"
    }, {
      default: ga(() => [
        t.value ? (y(), w("div", {
          key: t.value.id,
          class: Z(["rlzc-entry-card", { "beside-panel": C(A).panelOpen }]),
          role: "dialog",
          "aria-label": "检测到副本"
        }, [
          d("button", {
            class: "rlzc-entry-close",
            type: "button",
            "aria-label": "关闭",
            title: "这次先不处理",
            onClick: s[0] || (s[0] = //@ts-ignore
            (...r) => C(As) && C(As)(...r))
          }, "✕"),
          d("div", Cv, [
            (y(), w("svg", Ev, [
              d("path", { d: C(po) }, null, 8, Mv)
            ])),
            s[4] || (s[4] = d("span", null, "检测到副本", -1))
          ]),
          d("div", Tv, [
            d("span", Iv, _(t.value.level), 1),
            d("span", Nv, _(t.value.name), 1)
          ]),
          t.value.unknown ? (y(), w("div", Pv, "未收录，将使用通用副本包")) : R("", !0),
          d("div", Dv, [
            t.value.liveShow ? (y(), w("button", {
              key: 0,
              type: "button",
              class: Z(["rlzc-entry-live", { on: t.value.live }]),
              role: "switch",
              "aria-checked": t.value.live,
              onClick: s[1] || (s[1] = (r) => C(Hx)(!t.value.live))
            }, [
              d("span", {
                class: Z(["rlzc-toggle danger", { on: t.value.live }])
              }, [...s[5] || (s[5] = [
                d("span", null, null, -1)
              ])], 2),
              s[6] || (s[6] = d("span", null, "直播", -1))
            ], 10, Lv)) : (y(), w("span", Rv)),
            d("div", Ov, [
              d("button", {
                type: "button",
                class: "rlzc-btn ghost",
                onClick: s[2] || (s[2] = //@ts-ignore
                (...r) => C(kl) && C(kl)(...r))
              }, "不是"),
              d("button", {
                type: "button",
                class: "rlzc-btn rlzc-entry-go",
                onClick: s[3] || (s[3] = //@ts-ignore
                (...r) => C(wl) && C(wl)(...r))
              }, "进入")
            ])
          ])
        ], 2)) : R("", !0)
      ]),
      _: 1
    }));
  }
}), jv = {
  key: 0,
  class: "rlzc-ball-ring",
  viewBox: "0 0 48 48",
  "aria-hidden": "true"
}, Bv = ["stroke-dasharray"], Vv = {
  class: "rlzc-ball-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, Uv = ["d"], Hv = {
  key: 1,
  class: "rlzc-ball-live",
  title: "直播中"
}, Wv = {
  key: 2,
  class: "rlzc-ball-badge",
  title: "待开奖赌票"
}, si = 48, Gv = /* @__PURE__ */ Be({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ xe({ x: 0, y: 0 });
    let n = null, s = !1;
    function r(z, x) {
      const $ = window.innerWidth - si - 4, F = window.innerHeight - si - 4;
      return { x: Math.min(Math.max(4, z), $), y: Math.min(Math.max(4, x), F) };
    }
    function i() {
      const z = A.settings.ball;
      t.value = r(z.x ?? window.innerWidth - si - 12, z.y ?? Math.round(window.innerHeight * 0.35));
    }
    function o(z) {
      z.currentTarget.setPointerCapture(z.pointerId), s = !1, n = { id: z.pointerId, dx: z.clientX - t.value.x, dy: z.clientY - t.value.y, moved: !1, sx: z.clientX, sy: z.clientY };
    }
    function l(z) {
      !n || n.id !== z.pointerId || (Math.abs(z.clientX - n.sx) + Math.abs(z.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = r(z.clientX - n.dx, z.clientY - n.dy)));
    }
    function a(z) {
      if (!n || n.id !== z.pointerId) return;
      const x = n.moved;
      n = null, x && (s = !0, A.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, ye());
    }
    function c() {
      if (s) {
        s = !1;
        return;
      }
      A.panelOpen = !A.panelOpen;
    }
    const u = H(() => !!A.session && !!A.progress && !A.progress.ended), f = H(() => u.value && !!A.progress?.warn), m = H(() => {
      const z = A.progress;
      return !u.value || !z || !A.pack?.phases.length || !(z.phase.cap > 0) ? null : Math.min(100, Math.max(0, z.round / z.phase.cap * 100));
    }), k = H(() => (A.tick, A.session, hv()));
    return hr(() => A.settings.ball, i, { deep: !0 }), za(() => {
      i(), window.addEventListener("resize", i);
    }), Pi(() => window.removeEventListener("resize", i)), (z, x) => (y(), w("button", {
      class: Z(["rlzc-ball", { "is-active": u.value, "is-warn": f.value, "has-ring": m.value !== null }]),
      style: dr({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: o,
      onPointermove: l,
      onPointerup: a,
      onPointercancel: a,
      onClick: c
    }, [
      m.value !== null ? (y(), w("svg", jv, [
        x[0] || (x[0] = d("circle", {
          class: "rlzc-ball-ring-base",
          cx: "24",
          cy: "24",
          r: "22.5"
        }, null, -1)),
        m.value > 0 ? (y(), w("circle", {
          key: 0,
          class: "rlzc-ball-ring-bar",
          cx: "24",
          cy: "24",
          r: "22.5",
          pathLength: "100",
          "stroke-dasharray": `${m.value} 100`
        }, null, 8, Bv)) : R("", !0)
      ])) : R("", !0),
      (y(), w("svg", Vv, [
        d("path", { d: C(po) }, null, 8, Uv)
      ])),
      k.value ? (y(), w("span", Hv)) : R("", !0),
      C(A).market.pending > 0 ? (y(), w("span", Wv, _(C(A).market.pending), 1)) : R("", !0)
    ], 38));
  }
});
function Kv(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function jn(e) {
  return Kv(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function qv(e) {
  const t = [];
  let n = null, s = [];
  const r = () => {
    s.length && t.push(`<p>${s.map(jn).join("<br>")}</p>`), s = [];
  }, i = () => {
    n && t.push(`</li></${n}>`), n = null;
  };
  for (const o of e.replace(/\r/g, "").split(`
`)) {
    const l = o.trimEnd();
    if (!l.trim()) {
      r(), i();
      continue;
    }
    const a = /^(#{1,4})\s+(.*)$/.exec(l);
    if (a) {
      r(), i();
      const m = Math.min(a[1].length + 2, 6);
      t.push(`<h${m}>${jn(a[2])}</h${m}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(l), u = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (c || u) {
      r();
      const m = c ? "ul" : "ol", k = c ? c[1] : u[2];
      n !== m ? (i(), n = m, t.push(m === "ol" ? `<ol start="${u[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(jn(k));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${jn(l.trim())}`);
      continue;
    }
    const f = /^>\s?(.*)$/.exec(l);
    if (f) {
      r(), i(), t.push(`<blockquote>${jn(f[1])}</blockquote>`);
      continue;
    }
    i(), s.push(l);
  }
  return r(), i(), t.join("");
}
const Yv = {
  key: 0,
  class: "rlzc-docs"
}, Jv = { class: "rlzc-subtabs" }, Zv = ["onClick"], Qv = { class: "rlzc-md" }, Xv = ["innerHTML"], ey = ["src", "alt"], ty = {
  key: 2,
  class: "rlzc-note"
}, Nl = /* @__PURE__ */ Be({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ xe(0);
    hr(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = H(() => t.pack.docs?.[n.value]), r = H(() => s.value?.md ? qv(s.value.md) : ""), i = H(() => s.value?.image ? hh(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (y(), w("section", Yv, [
      d("div", Jv, [
        (y(!0), w(J, null, ce(e.pack.docs, (a, c) => (y(), w("button", {
          key: c,
          class: Z({ on: n.value === c }),
          onClick: (u) => n.value = c
        }, _(a.title), 11, Zv))), 128))
      ]),
      d("article", Qv, [
        r.value ? (y(), w("div", {
          key: 0,
          innerHTML: r.value
        }, null, 8, Xv)) : R("", !0),
        i.value ? (y(), w("img", {
          key: 1,
          src: i.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, ey)) : s.value?.image && !i.value ? (y(), w("p", ty, "图片无法加载：" + _(s.value.image), 1)) : R("", !0)
      ])
    ])) : R("", !0);
  }
}), ny = {
  key: 0,
  class: "rlzc-ledger-summary"
}, sy = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, Pl = /* @__PURE__ */ Be({
  __name: "LedgerSummary",
  setup(e) {
    const t = H(() => q()), n = H(() => Ct(t.value)), s = H(() => pn(n.value.value, A.ledger)), r = H(() => (A.tick, it(t.value))), i = H(() => St[r.value]), o = H(() => ms(n.value.value, A.ledger, i.value)), l = H(() => A.ledger.length > 0 || n.value.source !== "默认值");
    return (a, c) => l.value ? (y(), w("div", ny, [
      d("span", {
        class: Z(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + _(s.value >= 0 ? "+" : "") + _(s.value), 3),
      o.value ? (y(), w("span", sy, "待清算")) : R("", !0)
    ])) : R("", !0);
  }
}), ry = { class: "rlzc-system" }, iy = { class: "rlzc-card rlzc-hero" }, oy = { class: "rlzc-hero-top" }, ly = { class: "rlzc-level" }, ay = {
  key: 0,
  class: "rlzc-chip"
}, cy = {
  key: 0,
  class: "rlzc-goal"
}, uy = { class: "rlzc-grid" }, dy = {
  key: 0,
  class: "rlzc-stat"
}, Ay = {
  key: 1,
  class: "rlzc-stat"
}, fy = {
  key: 2,
  class: "rlzc-stat"
}, py = {
  key: 3,
  class: "rlzc-stat"
}, hy = {
  key: 0,
  class: "rlzc-subline"
}, my = {
  key: 1,
  class: "rlzc-note"
}, gy = {
  key: 2,
  class: "rlzc-card"
}, xy = { class: "rlzc-kv" }, vy = { class: "rlzc-kv" }, yy = {
  key: 0,
  class: "rlzc-note rlzc-note-warn"
}, by = {
  key: 3,
  class: "rlzc-note"
}, ky = {
  key: 4,
  class: "rlzc-card"
}, wy = {
  key: 0,
  class: "rlzc-kv"
}, zy = { class: "rlzc-mono" }, _y = {
  key: 1,
  class: "rlzc-tasks"
}, $y = {
  key: 2,
  class: "rlzc-ps"
}, Sy = { class: "rlzc-actions" }, Cy = ["disabled"], Ey = ["disabled"], My = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, Ty = ["onClick"], Iy = { class: "rlzc-entry-kicker" }, Ny = {
  class: "rlzc-entry-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, Py = ["d"], Dy = { class: "rlzc-entry-title" }, Ly = { class: "rlzc-entry-level" }, Ry = { class: "rlzc-entry-name" }, Oy = {
  key: 0,
  class: "rlzc-entry-note"
}, Fy = { class: "rlzc-entry-foot" }, jy = ["aria-checked", "onClick"], By = { key: 1 }, Vy = { class: "rlzc-entry-actions" }, Uy = ["onClick"], Hy = ["onClick"], Wy = {
  key: 3,
  class: "rlzc-card"
}, Gy = { class: "rlzc-row" }, Ky = ["value"], qy = ["disabled"], Yy = /* @__PURE__ */ Be({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ xe(""), n = H(() => !!A.session && !!A.pack), s = H(() => A.progress), r = H(() => n.value && !!s.value && !s.value.ended), i = H(() => A.packs.find((z) => z.id === t.value) ?? null), o = /* @__PURE__ */ xe({}), l = (z, x) => o.value[z] ?? x, a = H(() => !!A.pack?.phases.length), c = H(() => A.settings.panelDisplay !== "statusbar"), u = H(() => {
      const z = s.value;
      return z ? a.value ? `${z.warn ? "⚠️ " : ""}${z.round}/${z.phase.cap}` : `第${z.round}轮` : "";
    }), f = H(() => {
      const z = s.value;
      return z ? z.limit?.text ? z.limit.text : z.panel?.limit || A.session?.briefing?.limit || "—" : "";
    }), m = H(() => {
      const z = s.value;
      return !!z && !z.ended && a.value && z.phase.cap > 0 && z.nextRound < z.phase.cap;
    });
    async function k() {
      t.value && (await Kx(t.value), t.value = "");
    }
    return (z, x) => (y(), w("div", ry, [
      n.value && s.value ? (y(), w(J, { key: 0 }, [
        d("div", iy, [
          d("div", oy, [
            d("span", ly, _(C(A).pack?.rest ? "—" : C(A).pack.level), 1),
            d("h3", null, _(C(A).pack.name), 1),
            s.value.ended ? (y(), w("span", ay, "已结束")) : R("", !0)
          ]),
          C(A).session?.briefing?.goal ? (y(), w("p", cy, "目标：" + _(C(A).session.briefing.goal), 1)) : R("", !0)
        ]),
        d("div", uy, [
          a.value ? (y(), w("div", dy, [
            x[3] || (x[3] = d("span", null, "阶段", -1)),
            d("b", null, _(s.value.phase.name), 1)
          ])) : R("", !0),
          d("div", {
            class: Z(["rlzc-stat", { warn: s.value.warn }])
          }, [
            x[4] || (x[4] = d("span", null, "轮次", -1)),
            d("b", null, _(u.value), 1)
          ], 2),
          s.value.currentClock ? (y(), w("div", Ay, [
            x[5] || (x[5] = d("span", null, "钟时", -1)),
            d("b", null, _(s.value.currentClock), 1)
          ])) : R("", !0),
          s.value.roundsLeft ? (y(), w("div", fy, [
            x[6] || (x[6] = d("span", null, "最多剩余轮次", -1)),
            d("b", null, _(s.value.roundsLeft.x) + "/" + _(s.value.roundsLeft.y), 1)
          ])) : R("", !0),
          c.value ? (y(), w("div", py, [
            x[7] || (x[7] = d("span", null, "剩余时间", -1)),
            d("b", null, _(f.value), 1)
          ])) : R("", !0),
          r.value ? R("", !0) : (y(), Ge(Pl, { key: 4 }))
        ]),
        C(A).subLine ? (y(), w("p", hy, _(C(A).subLine), 1)) : R("", !0),
        s.value.skipGoal ? (y(), w("div", my, "快进中：目标 " + _(C(A).pack.phases.find(($) => $.id === s.value.skipGoal.phase)?.name) + " 第" + _(s.value.skipGoal.round) + "轮", 1)) : R("", !0),
        s.value.ended && s.value.settlement ? (y(), w("div", gy, [
          d("div", xy, [
            x[8] || (x[8] = d("span", null, "结果", -1)),
            d("b", null, _(s.value.settlement.result ?? "—"), 1)
          ]),
          d("div", vy, [
            x[9] || (x[9] = d("span", null, "评价", -1)),
            d("b", null, _(s.value.settlement.rating ?? "—"), 1)
          ]),
          C(A).session?.clearance && s.value.settlement.result === "失败" ? (y(), w("div", yy, " 清算未通关 ")) : R("", !0)
        ])) : s.value.ended ? (y(), w("div", by, "副本已手动结束。")) : R("", !0),
        c.value && s.value.panel ? (y(), w("div", ky, [
          s.value.panel.progressBar ? (y(), w("div", wy, [
            x[10] || (x[10] = d("span", null, "进度", -1)),
            d("b", zy, _(s.value.panel.progressBar), 1)
          ])) : R("", !0),
          s.value.panel.tasks.length ? (y(), w("div", _y, [
            x[11] || (x[11] = d("span", null, "任务", -1)),
            d("ul", null, [
              (y(!0), w(J, null, ce(s.value.panel.tasks, ($, F) => (y(), w("li", { key: F }, _($), 1))), 128))
            ])
          ])) : R("", !0),
          s.value.panel.ps ? (y(), w("div", $y, "ps：" + _(s.value.panel.ps), 1)) : R("", !0)
        ])) : R("", !0),
        d("div", Sy, [
          d("button", {
            class: "rlzc-btn",
            disabled: !m.value,
            onClick: x[0] || (x[0] = //@ts-ignore
            (...$) => C(zl) && C(zl)(...$))
          }, "跳过（到本阶段结束）", 8, Cy),
          d("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: x[1] || (x[1] = //@ts-ignore
            (...$) => C(_l) && C(_l)(...$))
          }, "手动结束副本", 8, Ey)
        ]),
        r.value && C(A).pack.docs?.length ? (y(), Ge(Nl, {
          key: 5,
          pack: C(A).pack
        }, null, 8, ["pack"])) : R("", !0)
      ], 64)) : (y(), w("div", My, [
        x[12] || (x[12] = d("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        Ee(Pl)
      ])),
      r.value ? R("", !0) : (y(!0), w(J, { key: 2 }, ce(C(A).pendingEntries, ($) => (y(), w("div", {
        key: $.key,
        class: "rlzc-card rlzc-pending"
      }, [
        d("button", {
          class: "rlzc-entry-close",
          type: "button",
          "aria-label": "不再提示",
          title: "不再提示",
          onClick: (F) => C(Zx)($.key)
        }, "✕", 8, Ty),
        d("div", Iy, [
          (y(), w("svg", Ny, [
            d("path", { d: C(po) }, null, 8, Py)
          ])),
          x[13] || (x[13] = d("span", null, "待确认的副本", -1))
        ]),
        d("div", Dy, [
          d("span", Ly, _($.level), 1),
          d("span", Ry, _($.name), 1)
        ]),
        $.unknown ? (y(), w("div", Oy, "未收录，将使用通用副本包")) : R("", !0),
        x[16] || (x[16] = d("div", { class: "rlzc-entry-note" }, "进入后以最新一条AI回复为第1轮", -1)),
        d("div", Fy, [
          $.liveShow ? (y(), w("button", {
            key: 0,
            type: "button",
            class: Z(["rlzc-entry-live", { on: l($.key, $.live) }]),
            role: "switch",
            "aria-checked": l($.key, $.live),
            onClick: (F) => o.value[$.key] = !l($.key, $.live)
          }, [
            d("span", {
              class: Z(["rlzc-toggle danger", { on: l($.key, $.live) }])
            }, [...x[14] || (x[14] = [
              d("span", null, null, -1)
            ])], 2),
            x[15] || (x[15] = d("span", null, "直播", -1))
          ], 10, jy)) : (y(), w("span", By)),
          d("div", Vy, [
            $.unknown ? (y(), w("button", {
              key: 0,
              type: "button",
              class: "rlzc-btn ghost rlzc-pending-save",
              title: "现在不玩，以后在手动选择副本里进入",
              onClick: (F) => C(Jx)($.key)
            }, "收录", 8, Uy)) : R("", !0),
            d("button", {
              type: "button",
              class: "rlzc-btn rlzc-entry-go",
              onClick: (F) => C(Yx)($.key, l($.key, $.live))
            }, "进入", 8, Hy)
          ])
        ])
      ]))), 128)),
      r.value ? R("", !0) : (y(), w("div", Wy, [
        x[18] || (x[18] = d("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        d("div", Gy, [
          mt(d("select", {
            "onUpdate:modelValue": x[2] || (x[2] = ($) => t.value = $),
            class: "rlzc-input"
          }, [
            x[17] || (x[17] = d("option", { value: "" }, "选择副本…", -1)),
            (y(!0), w(J, null, ce(C(A).packs, ($) => (y(), w("option", {
              key: $.id,
              value: $.id
            }, _($.level) + "｜" + _($.name), 9, Ky))), 128))
          ], 512), [
            [Ga, t.value]
          ]),
          d("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: k
          }, "进入", 8, qy)
        ])
      ])),
      !r.value && i.value?.docs?.length ? (y(), Ge(Nl, {
        key: 4,
        pack: i.value
      }, null, 8, ["pack"])) : R("", !0)
    ]));
  }
}), Jy = { class: "rlzc-ledger" }, Zy = { class: "rlzc-card rlzc-ledger-hero-card" }, Qy = { class: "rlzc-ledger-hero-cols" }, Xy = { class: "rlzc-ledger-hero-col" }, e0 = { class: "rlzc-ledger-hero-col-val" }, t0 = { class: "rlzc-ledger-hero-col" }, n0 = { class: "rlzc-ledger-hero-col-val" }, s0 = { class: "rlzc-ledger-hero-col" }, r0 = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, i0 = { class: "rlzc-card" }, o0 = {
  key: 0,
  class: "rlzc-ledger-list"
}, l0 = { class: "rlzc-ledger-item-left" }, a0 = { class: "rlzc-ledger-item-src" }, c0 = { class: "rlzc-ledger-item-time" }, u0 = { class: "rlzc-ledger-item-right" }, d0 = { class: "rlzc-ledger-item-after" }, A0 = {
  key: 1,
  class: "rlzc-hint"
}, f0 = /* @__PURE__ */ Be({
  __name: "LedgerTab",
  setup(e) {
    const t = H(() => q()), n = H(() => Ct(t.value)), s = H(() => A.ledger), r = H(() => pn(n.value.value, s.value)), i = H(() => {
      const z = qm(n.value.value, s.value);
      return s.value.map((x, $) => ({ e: x, after: z[$] })).reverse();
    }), o = H(() => (A.tick, it(t.value))), l = H(() => St[o.value]), a = H(() => ms(n.value.value, s.value, l.value)), c = H(() => Math.max(0, l.value - r.value)), u = H(() => n.value.source === "默认值");
    function f(z) {
      return new Intl.NumberFormat("zh-CN").format(z);
    }
    function m(z) {
      return (z >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(z);
    }
    function k(z) {
      try {
        const x = new Date(z), $ = String(x.getMonth() + 1).padStart(2, "0"), F = String(x.getDate()).padStart(2, "0"), O = String(x.getHours()).padStart(2, "0"), M = String(x.getMinutes()).padStart(2, "0");
        return `${$}-${F} ${O}:${M}`;
      } catch {
        return z;
      }
    }
    return (z, x) => (y(), w("div", Jy, [
      d("div", Zy, [
        x[3] || (x[3] = d("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        d("b", {
          class: Z(["rlzc-ledger-hero-num", { negative: r.value < 0 }])
        }, _(f(r.value)), 3),
        x[4] || (x[4] = d("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        d("div", Qy, [
          d("div", Xy, [
            x[0] || (x[0] = d("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            d("span", e0, _(o.value), 1)
          ]),
          d("div", t0, [
            x[1] || (x[1] = d("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            d("span", n0, _(f(l.value)), 1)
          ]),
          d("div", s0, [
            x[2] || (x[2] = d("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            d("span", {
              class: Z(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": a.value }])
            }, _(a.value ? `距线 ${f(c.value)}` : "无"), 3)
          ])
        ]),
        u.value ? (y(), w("p", r0, "初始积分按 1000 计，可在设置页修改")) : R("", !0)
      ]),
      d("div", i0, [
        x[5] || (x[5] = d("h4", null, "流水", -1)),
        s.value.length ? (y(), w("ul", o0, [
          (y(!0), w(J, null, ce(i.value, ($, F) => (y(), w("li", {
            key: `${F}-${$.e.mesIndex}-${$.e.delta}-${$.e.at}`,
            class: "rlzc-ledger-item"
          }, [
            d("div", l0, [
              d("span", a0, _($.e.source), 1),
              d("span", c0, _(k($.e.at)), 1)
            ]),
            d("div", u0, [
              d("span", {
                class: Z(["rlzc-ledger-item-delta", $.e.delta >= 0 ? "pos" : "neg"])
              }, _(m($.e.delta)), 3),
              d("span", d0, "余额 " + _(f($.after)), 1)
            ])
          ]))), 128))
        ])) : (y(), w("p", A0, "还没有收支记录。"))
      ])
    ]));
  }
}), p0 = { class: "rlzc-market" }, h0 = { class: "rlzc-subtabs rlzc-market-tabs" }, m0 = { class: "rlzc-card rlzc-mk-status" }, g0 = { class: "rlzc-mk-q" }, x0 = { class: "rlzc-mk-tag" }, v0 = { class: "rlzc-mk-opts" }, y0 = ["disabled", "onClick"], b0 = { class: "rlzc-row rlzc-mk-bet" }, k0 = ["onUpdate:modelValue"], w0 = ["disabled", "onClick"], z0 = { class: "rlzc-hint" }, _0 = {
  key: 0,
  class: "rlzc-mk-red"
}, $0 = {
  key: 1,
  class: "rlzc-mk-mine"
}, S0 = {
  key: 1,
  class: "rlzc-card"
}, C0 = {
  key: 0,
  class: "rlzc-tk-list"
}, E0 = { class: "rlzc-tk-left" }, M0 = { class: "rlzc-tk-title" }, T0 = {
  key: 1,
  class: "rlzc-hint"
}, I0 = {
  key: 0,
  class: "rlzc-card rlzc-mk-status"
}, N0 = { class: "rlzc-cs-tables" }, P0 = ["onClick"], D0 = {
  key: 0,
  class: "rlzc-card rlzc-cs-play"
}, L0 = {
  key: 0,
  class: "rlzc-segsrc rlzc-cs-seg"
}, R0 = ["onClick"], O0 = ["onClick"], F0 = { class: "rlzc-row rlzc-mk-bet" }, j0 = ["disabled"], B0 = { class: "rlzc-hint" }, V0 = {
  key: 2,
  class: "rlzc-mk-red"
}, U0 = /* @__PURE__ */ Be({
  __name: "MarketTab",
  setup(e) {
    const t = /* @__PURE__ */ xe("book"), n = (j) => new Intl.NumberFormat("en-US").format(j), s = (j) => `×${j.toFixed(2)}`, r = H(() => A.market.pending), i = H(() => (A.tick, it())), o = H(() => A.market.book), l = H(() => !!o.value?.closedAt), a = H(() => {
      const j = o.value;
      return j && j.closedAt ? `《${j.packName}》已封盘` : j ? `《${j.packName}》开盘中 · 第1轮结束封盘${j.freak?.status === "pending" ? " · 庄家出题中" : ""}` : A.session?.status === "active" && A.pack?.rest ? "休整副本不开盘。" : "进副本后开盘。";
    }), c = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" }, u = /* @__PURE__ */ xe({}), f = /* @__PURE__ */ xe({});
    function m(j, K) {
      l.value || A.market.results[j.id] || (u.value = { ...u.value, [j.id]: u.value[j.id] === K ? "" : K });
    }
    function k(j) {
      A.tick;
      const K = f.value[j.id];
      return pu(j.id, typeof K == "number" ? K : 0);
    }
    function z(j) {
      const K = u.value[j.id], G = f.value[j.id];
      if (!K || typeof G != "number") return;
      const ge = _v(j.id, K, G);
      if (ge) {
        we("warning", ge);
        return;
      }
      f.value = { ...f.value, [j.id]: null }, u.value = { ...u.value, [j.id]: "" };
    }
    function x(j) {
      const K = o.value;
      return K ? A.market.tickets.filter((G) => G.book.session === K.session && G.ticket.market === j.id) : [];
    }
    function $(j) {
      return j.market?.options.find((K) => K.id === j.ticket.option)?.label ?? j.ticket.option;
    }
    function F(j) {
      return `${j.book.packName} · ${j.market?.q ?? j.ticket.market} · ${$(j)}`;
    }
    function O(j) {
      const K = j.ticket, G = j.res?.stamp;
      return G ? G === "win" ? `押 ${n(K.stake)} · ${s(K.odds)} · 兑 ${n(qc(K.stake, K.odds))}` : G === "lose" ? `押 ${n(K.stake)} · ${s(K.odds)}` : `押 ${n(K.stake)} · 原数退还` : `押 ${n(K.stake)} · ${s(K.odds)} · 待开奖`;
    }
    const M = { win: "兑", lose: "废", refund: "退" }, T = H(() => A.market.tables.map((j) => $n(j)).filter((j) => !!j)), ee = /* @__PURE__ */ xe(""), te = H(() => ee.value ? $n(ee.value) : void 0), Q = /* @__PURE__ */ xe(""), re = /* @__PURE__ */ xe(null), E = /* @__PURE__ */ xe(!1), p = /* @__PURE__ */ xe(""), h = /* @__PURE__ */ xe(null);
    let v = null;
    function P(j) {
      if (ee.value === j) {
        ee.value = "";
        return;
      }
      ee.value = j;
      const K = $n(j);
      Q.value = K && K.bets.length === 1 ? K.bets[0].id : "", h.value = null;
    }
    const ie = H(() => (te.value?.bets ?? []).filter((j) => !/^[nd]\d+$/.test(j.id))), le = H(() => (te.value?.bets ?? []).filter((j) => /^[nd]\d+$/.test(j.id))), De = H(() => (A.tick, hu(typeof re.value == "number" ? re.value : 0)));
    function ot() {
      try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      } catch {
        return !1;
      }
    }
    function Xe(j, K) {
      return j === "bell" ? `${K[0]}下` : j === "door" ? `${K[0]}号门` : j === "lot" ? `第${K[0]}支` : `${K[0]} : ${K[1]}`;
    }
    function xn() {
      const j = te.value, K = re.value;
      if (!j || !Q.value || typeof K != "number" || E.value) return;
      const G = $v(j.id, Q.value, K);
      if (G.error || !G.outcome) {
        we("warning", G.error ?? "不能下注");
        return;
      }
      const ge = { ...G.outcome, stake: K };
      if (h.value = null, ot()) {
        p.value = Xe(j.id, ge.faces), h.value = ge;
        return;
      }
      E.value = !0;
      const bs = j.id === "bell" ? 12 : j.id === "door" ? 20 : j.id === "lot" ? 3 : 13, Mt = () => 1 + Math.floor(Math.random() * bs);
      v = setInterval(() => p.value = Xe(j.id, [Mt(), Mt()]), 80), setTimeout(() => {
        v && clearInterval(v), v = null, p.value = Xe(j.id, ge.faces), E.value = !1, h.value = ge;
      }, 1200);
    }
    const Kt = H(() => {
      const j = h.value;
      return j ? `结果：${j.result}。${j.win ? `赢 ${n(j.payout)}` : `输 ${n(j.stake)}`}` : "";
    });
    return Pi(() => {
      v && clearInterval(v);
    }), (j, K) => (y(), w("div", p0, [
      d("nav", h0, [
        d("button", {
          class: Z({ on: t.value === "book" }),
          onClick: K[0] || (K[0] = (G) => t.value = "book")
        }, "盘口", 2),
        d("button", {
          class: Z({ on: t.value === "tickets" }),
          onClick: K[1] || (K[1] = (G) => t.value = "tickets")
        }, _(r.value ? `票夹 · ${r.value}` : "票夹"), 3),
        d("button", {
          class: Z({ on: t.value === "casino" }),
          onClick: K[2] || (K[2] = (G) => t.value = "casino")
        }, "赌坊", 2)
      ]),
      t.value === "book" ? (y(), w(J, { key: 0 }, [
        d("div", m0, _(a.value), 1),
        (y(!0), w(J, null, ce(o.value?.markets ?? [], (G) => (y(), w("div", {
          key: G.id,
          class: "rlzc-card rlzc-mk-card"
        }, [
          d("div", g0, [
            d("span", x0, _(c[G.kind]), 1),
            Me(_(G.q), 1)
          ]),
          d("div", v0, [
            (y(!0), w(J, null, ce(G.options, (ge) => (y(), w("button", {
              key: ge.id,
              class: Z(["rlzc-mk-opt", { on: u.value[G.id] === ge.id }]),
              disabled: l.value || !!C(A).market.results[G.id],
              onClick: (bs) => m(G, ge.id)
            }, [
              d("span", null, _(ge.label), 1),
              d("b", null, _(s(ge.odds)), 1)
            ], 10, y0))), 128))
          ]),
          u.value[G.id] && !l.value ? (y(), w(J, { key: 0 }, [
            d("div", b0, [
              mt(d("input", {
                "onUpdate:modelValue": (ge) => f.value[G.id] = ge,
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 8, k0), [
                [
                  Pt,
                  f.value[G.id],
                  void 0,
                  { number: !0 }
                ]
              ]),
              d("button", {
                class: "rlzc-btn",
                disabled: typeof f.value[G.id] != "number",
                onClick: (ge) => z(G)
              }, "下注", 8, w0)
            ]),
            d("p", z0, "单注上限 " + _(n(k(G).cap)) + "（" + _(i.value) + "级）", 1),
            k(G).belowKill ? (y(), w("p", _0, "押完余额低于斩杀线")) : R("", !0)
          ], 64)) : R("", !0),
          x(G).length ? (y(), w("ul", $0, [
            (y(!0), w(J, null, ce(x(G), (ge) => (y(), w("li", {
              key: ge.ticket.id
            }, _($(ge)) + " · " + _(O(ge)), 1))), 128))
          ])) : R("", !0)
        ]))), 128))
      ], 64)) : t.value === "tickets" ? (y(), w("div", S0, [
        C(A).market.tickets.length ? (y(), w("ul", C0, [
          (y(!0), w(J, null, ce(C(A).market.tickets, (G) => (y(), w("li", {
            key: G.ticket.id,
            class: "rlzc-tk"
          }, [
            d("div", E0, [
              d("span", M0, _(F(G)), 1),
              d("small", null, _(O(G)), 1)
            ]),
            d("span", {
              class: Z(["rlzc-stamp", G.res ? G.res.stamp : "pending"])
            }, _(G.res ? M[G.res.stamp] : "待"), 3)
          ]))), 128))
        ])) : (y(), w("p", T0, "还没有赌票。"))
      ])) : (y(), w(J, { key: 2 }, [
        C(A).market.casinoOpen ? (y(), w(J, { key: 1 }, [
          K[4] || (K[4] = d("p", { class: "rlzc-hint" }, "今晚开两张桌，回到回廊换一批。", -1)),
          d("div", N0, [
            (y(!0), w(J, null, ce(T.value, (G) => (y(), w("button", {
              key: G.id,
              class: Z(["rlzc-card rlzc-cs-table", { on: ee.value === G.id }]),
              onClick: (ge) => P(G.id)
            }, [
              d("b", null, _(G.name), 1),
              d("small", null, _(G.desc), 1)
            ], 10, P0))), 128))
          ]),
          te.value ? (y(), w("div", D0, [
            d("h4", null, _(te.value.name), 1),
            ie.value.length ? (y(), w("div", L0, [
              (y(!0), w(J, null, ce(ie.value, (G) => (y(), w("button", {
                key: G.id,
                class: Z({ on: Q.value === G.id }),
                onClick: (ge) => Q.value = G.id
              }, _(G.label), 11, R0))), 128))
            ])) : R("", !0),
            le.value.length ? (y(), w("div", {
              key: 1,
              class: Z(["rlzc-cs-grid", te.value.id])
            }, [
              (y(!0), w(J, null, ce(le.value, (G) => (y(), w("button", {
                key: G.id,
                class: Z({ on: Q.value === G.id }),
                onClick: (ge) => Q.value = G.id
              }, _(G.label), 11, O0))), 128))
            ], 2)) : R("", !0),
            d("div", F0, [
              mt(d("input", {
                "onUpdate:modelValue": K[3] || (K[3] = (G) => re.value = G),
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 512), [
                [
                  Pt,
                  re.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              d("button", {
                class: "rlzc-btn",
                disabled: !Q.value || typeof re.value != "number" || E.value,
                onClick: xn
              }, "开", 8, j0)
            ]),
            d("p", B0, "单注上限 " + _(n(De.value.cap)) + "（" + _(i.value) + "级）", 1),
            De.value.belowKill ? (y(), w("p", V0, "押完余额低于斩杀线")) : R("", !0),
            E.value || h.value ? (y(), w("div", {
              key: 3,
              class: Z(["rlzc-cs-face", { rolling: E.value }])
            }, _(p.value || ""), 3)) : R("", !0),
            h.value ? (y(), w("p", {
              key: 4,
              class: Z(["rlzc-cs-result", h.value.win ? "win" : "lose"])
            }, _(Kt.value), 3)) : R("", !0)
          ])) : R("", !0)
        ], 64)) : (y(), w("div", I0, "赌坊只在回廊营业。"))
      ], 64))
    ]));
  }
}), H0 = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, W0 = ["aria-expanded"], G0 = ["data-kind"], K0 = {
  key: 0,
  class: "rlzc-collapse-body"
}, q0 = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, Y0 = {
  key: 0,
  class: "rlzc-preset-area"
}, J0 = { class: "rlzc-preset-row" }, Z0 = ["value"], Q0 = {
  key: 0,
  value: ""
}, X0 = ["value"], eb = ["disabled"], tb = ["disabled"], nb = { class: "rlzc-stacked-field" }, sb = ["value"], rb = { class: "rlzc-stacked-field" }, ib = { class: "rlzc-key-wrap" }, ob = ["type", "value"], lb = ["aria-label"], ab = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, cb = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, ub = { class: "rlzc-stacked-field" }, db = {
  key: 0,
  value: "",
  selected: "",
  disabled: ""
}, Ab = ["value"], fb = ["value", "selected"], pb = ["value"], hb = { class: "rlzc-check-btns" }, mb = ["disabled"], gb = ["disabled"], xb = {
  key: 0,
  class: "rlzc-check-list"
}, vb = ["data-kind"], yb = { class: "rlzc-check-text" }, bb = {
  key: 0,
  class: "rlzc-check-time"
}, kb = {
  key: 1,
  class: "rlzc-option-list"
}, wb = { class: "rlzc-option-row" }, zb = ["aria-checked"], _b = { class: "rlzc-option-row" }, $b = ["aria-checked"], Sb = { class: "rlzc-option-row rlzc-option-row-timeout" }, Cb = { class: "rlzc-timeout-wrap" }, Eb = ["value"], Mb = /* @__PURE__ */ Be({
  __name: "SubApiCard",
  setup(e) {
    const t = H(() => A.settings.subApi), n = H(() => t.value.presets.find((E) => E.id === t.value.presetId) ?? null), s = H(() => n.value?.models ?? []), r = /* @__PURE__ */ xe(!1), i = /* @__PURE__ */ xe(""), o = /* @__PURE__ */ xe(""), l = H(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : Rm(n.value)), a = H(() => {
      const E = n.value;
      if (!E) return [];
      const p = (h, v, P) => v && P ? [{ id: h, text: v, kind: P.ok ? "on" : "warn", time: P.at ? Pm(P.at) : "" }] : [];
      return [...p("fetch", Dm(E), E.fetchResult), ...p("test", Lm(E), E.testResult)];
    }), c = H(() => A.settings.cardCollapsed.subApi);
    function u() {
      A.settings.cardCollapsed.subApi = !A.settings.cardCollapsed.subApi, f();
    }
    function f() {
      ye();
    }
    function m(E) {
      t.value.source = E, f();
    }
    function k() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function z() {
      const E = (await ll("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!E) return;
      const p = { id: k(), name: E, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, p], t.value.presetId = p.id, f();
    }
    async function x() {
      if (!n.value) return;
      const E = (await ll("改名为：", n.value.name))?.trim();
      E && (n.value.name = E, f());
    }
    async function $() {
      n.value && await Wt(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((E) => E.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", f());
    }
    function F(E) {
      t.value.presetId = E.target.value, f();
    }
    function O(E, p) {
      Tx(E, p.target.value);
    }
    function M() {
      return Math.max(5, Number(t.value.timeoutSec) || 60) * 1e3;
    }
    function T(E, p, h) {
      return E.url === p.url && E.key === p.key && (!h || E.model === p.model);
    }
    async function ee() {
      const E = n.value;
      if (!E || !cl(E) || i.value) return;
      const p = { ...E };
      i.value = E.id;
      try {
        const h = await Em(p, M());
        T(E, p, !1) && dl(E, { ok: !0, models: h });
      } catch (h) {
        T(E, p, !1) && dl(E, { ok: !1, reason: gi(h) });
      } finally {
        i.value = "", f();
      }
    }
    async function te() {
      const E = n.value;
      if (!E || !ul(E) || o.value) return;
      const p = { ...E };
      o.value = E.id;
      try {
        await Tm(p, M()), T(E, p, !0) && Al(E, { ok: !0 });
      } catch (h) {
        T(E, p, !0) && Al(E, { ok: !1, reason: gi(h) });
      } finally {
        o.value = "", f();
      }
    }
    function Q(E) {
      const p = Math.floor(Number(E.target.value));
      if (!Number.isFinite(p) || p < 5) {
        we("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = p, f();
    }
    function re(E, p) {
      t.value[E] = p, f();
    }
    return (E, p) => (y(), w("div", H0, [
      d("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !c.value,
        onClick: u
      }, [
        p[9] || (p[9] = d("h4", null, "副本事件检测", -1)),
        d("span", {
          class: "rlzc-dot",
          "data-kind": l.value.kind
        }, _(l.value.text), 9, G0),
        d("span", {
          class: Z(["rlzc-collapse-arrow", { open: !c.value }])
        }, "▸", 2)
      ], 8, W0),
      c.value ? R("", !0) : (y(), w("div", K0, [
        p[24] || (p[24] = d("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        d("div", q0, [
          d("button", {
            class: Z({ on: t.value.source === "off" }),
            onClick: p[0] || (p[0] = (h) => m("off"))
          }, "关闭", 2),
          d("button", {
            class: Z({ on: t.value.source === "main" }),
            onClick: p[1] || (p[1] = (h) => m("main"))
          }, "跟随主API", 2),
          d("button", {
            class: Z({ on: t.value.source === "preset" }),
            onClick: p[2] || (p[2] = (h) => m("preset"))
          }, "自设API", 2)
        ]),
        t.value.source === "preset" ? (y(), w("div", Y0, [
          d("div", J0, [
            d("select", {
              class: "rlzc-input",
              value: t.value.presetId,
              onChange: F
            }, [
              t.value.presets.length ? R("", !0) : (y(), w("option", Q0, "还没有保存的接口")),
              (y(!0), w(J, null, ce(t.value.presets, (h) => (y(), w("option", {
                key: h.id,
                value: h.id
              }, _(h.name), 9, X0))), 128))
            ], 40, Z0),
            d("button", {
              class: "rlzc-icon-btn",
              "aria-label": "新建接口",
              type: "button",
              onClick: z
            }, [...p[10] || (p[10] = [
              d("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "aria-hidden": "true"
              }, [
                d("path", { d: "M8 3v10M3 8h10" })
              ], -1)
            ])]),
            d("button", {
              class: "rlzc-icon-btn",
              "aria-label": "改名",
              type: "button",
              disabled: !n.value,
              onClick: x
            }, [...p[11] || (p[11] = [
              d("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "aria-hidden": "true"
              }, [
                d("path", { d: "M11 2L14 5 5 14H2v-3L11 2z" })
              ], -1)
            ])], 8, eb),
            d("button", {
              class: "rlzc-icon-btn rlzc-danger",
              "aria-label": "删除接口",
              type: "button",
              disabled: !n.value,
              onClick: $
            }, [...p[12] || (p[12] = [
              d("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "aria-hidden": "true"
              }, [
                d("path", { d: "M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10" })
              ], -1)
            ])], 8, tb)
          ]),
          n.value ? (y(), w(J, { key: 0 }, [
            d("div", nb, [
              p[13] || (p[13] = d("label", { class: "rlzc-label" }, "地址", -1)),
              d("input", {
                class: "rlzc-input",
                value: n.value.url,
                placeholder: "https://…/v1",
                onInput: p[3] || (p[3] = (h) => O("url", h))
              }, null, 40, sb)
            ]),
            d("div", rb, [
              p[16] || (p[16] = d("label", { class: "rlzc-label" }, "密钥", -1)),
              d("div", ib, [
                d("input", {
                  class: "rlzc-input",
                  type: r.value ? "text" : "password",
                  value: n.value.key,
                  autocomplete: "off",
                  onInput: p[4] || (p[4] = (h) => O("key", h))
                }, null, 40, ob),
                d("button", {
                  class: "rlzc-eye-btn",
                  type: "button",
                  "aria-label": r.value ? "隐藏密钥" : "显示密钥",
                  onClick: p[5] || (p[5] = (h) => r.value = !r.value)
                }, [
                  r.value ? (y(), w("svg", ab, [...p[14] || (p[14] = [
                    d("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    d("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1),
                    d("path", { d: "M2 2l12 12" }, null, -1)
                  ])])) : (y(), w("svg", cb, [...p[15] || (p[15] = [
                    d("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    d("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1)
                  ])]))
                ], 8, lb)
              ])
            ]),
            d("div", ub, [
              p[17] || (p[17] = d("label", { class: "rlzc-label" }, "模型", -1)),
              s.value.length ? (y(), w("select", {
                key: 0,
                class: "rlzc-input",
                onChange: p[6] || (p[6] = (h) => O("model", h))
              }, [
                n.value.model ? R("", !0) : (y(), w("option", db, "请选择…")),
                n.value.model && !s.value.includes(n.value.model) ? (y(), w("option", {
                  key: 1,
                  value: n.value.model,
                  selected: ""
                }, _(n.value.model), 9, Ab)) : R("", !0),
                (y(!0), w(J, null, ce(s.value, (h) => (y(), w("option", {
                  key: h,
                  value: h,
                  selected: h === n.value.model
                }, _(h), 9, fb))), 128))
              ], 32)) : (y(), w("input", {
                key: 1,
                class: "rlzc-input rlzc-input-disabled",
                value: n.value.model ? n.value.model : "先拉取模型",
                readonly: "",
                tabindex: "-1"
              }, null, 8, pb))
            ]),
            d("div", hb, [
              d("button", {
                class: "rlzc-btn ghost",
                type: "button",
                disabled: !!i.value || !C(cl)(n.value),
                onClick: ee
              }, _(i.value === n.value.id ? "拉取中…" : "拉取模型"), 9, mb),
              d("button", {
                class: "rlzc-btn ghost",
                type: "button",
                disabled: !!o.value || !C(ul)(n.value),
                onClick: te
              }, _(o.value === n.value.id ? "测试中…" : "测试模型"), 9, gb)
            ]),
            a.value.length ? (y(), w("ul", xb, [
              (y(!0), w(J, null, ce(a.value, (h) => (y(), w("li", {
                key: h.id,
                "data-kind": h.kind
              }, [
                d("span", yb, _(h.text), 1),
                h.time ? (y(), w("time", bb, _(h.time), 1)) : R("", !0)
              ], 8, vb))), 128))
            ])) : R("", !0)
          ], 64)) : R("", !0)
        ])) : R("", !0),
        t.value.source !== "off" ? (y(), w("div", kb, [
          d("div", wb, [
            p[19] || (p[19] = d("div", { class: "rlzc-option-label" }, [
              d("span", null, "省钱模式"),
              d("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            d("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: Z(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: p[7] || (p[7] = (h) => re("saveMode", !t.value.saveMode))
            }, [...p[18] || (p[18] = [
              d("span", null, null, -1)
            ])], 10, zb)
          ]),
          d("div", _b, [
            p[21] || (p[21] = d("div", { class: "rlzc-option-label" }, [
              d("span", null, "等检测完再写下一轮"),
              d("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            d("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: Z(["rlzc-toggle", { on: t.value.wait }]),
              onClick: p[8] || (p[8] = (h) => re("wait", !t.value.wait))
            }, [...p[20] || (p[20] = [
              d("span", null, null, -1)
            ])], 10, $b)
          ]),
          d("div", Sb, [
            p[23] || (p[23] = d("span", null, "超时", -1)),
            d("div", Cb, [
              d("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: Q
              }, null, 40, Eb),
              p[22] || (p[22] = d("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : R("", !0)
      ]))
    ]));
  }
}), Tb = { class: "rlzc-card rlzc-collapsible rlzc-live-card" }, Ib = ["aria-expanded"], Nb = {
  key: 0,
  class: "rlzc-dot",
  "data-kind": "on"
}, Pb = {
  key: 0,
  class: "rlzc-collapse-body"
}, Db = { class: "rlzc-onair-text" }, Lb = {
  key: 0,
  class: "rlzc-onair-lock",
  "aria-label": "副本内已锁定"
}, Rb = { class: "rlzc-option-list" }, Ob = { class: "rlzc-option-row rlzc-option-row-stack" }, Fb = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "弹幕来源"
}, jb = ["disabled"], Bb = {
  key: 0,
  class: "rlzc-hint"
}, Vb = {
  key: 0,
  class: "rlzc-option-row"
}, Ub = { class: "rlzc-timeout-wrap" }, Hb = ["value"], Wb = { class: "rlzc-option-row" }, Gb = ["aria-checked"], Kb = /* @__PURE__ */ Be({
  __name: "LiveCard",
  setup(e) {
    const t = H(() => A.settings.live), n = H(() => A.settings.subApi.source !== "off"), s = H(() => n.value ? t.value.source : "local"), r = H(() => (A.tick, A.session, mv())), i = H(() => r.value.on);
    function o() {
      r.value.locked || uu();
    }
    const l = H(() => A.settings.cardCollapsed.live);
    function a() {
      A.settings.cardCollapsed.live = !A.settings.cardCollapsed.live, ye();
    }
    function c(m) {
      m === "ai" && !n.value || (t.value.source = m, ye());
    }
    function u(m) {
      const k = Math.floor(Number(m.target.value));
      t.value.freq = Number.isFinite(k) ? Math.max(1, Math.min(10, k)) : 3, m.target.value = String(t.value.freq), ye();
    }
    function f(m) {
      t.value.injectToAI = m, ye();
    }
    return (m, k) => (y(), w("div", Tb, [
      d("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !l.value,
        onClick: a
      }, [
        k[3] || (k[3] = d("h4", null, "直播", -1)),
        i.value ? (y(), w("span", Nb, "直播中")) : R("", !0),
        d("span", {
          class: Z(["rlzc-collapse-arrow", { open: !l.value }])
        }, "▸", 2)
      ], 8, Ib),
      l.value ? R("", !0) : (y(), w("div", Pb, [
        k[12] || (k[12] = d("p", { class: "rlzc-hint" }, "开播后有观众弹幕和打赏，打赏计入积分。画面在状态栏的直播页。", -1)),
        d("div", {
          class: Z(["rlzc-onair", { on: r.value.on, locked: r.value.locked }])
        }, [
          k[5] || (k[5] = d("span", {
            class: "rlzc-onair-dot",
            "aria-hidden": "true"
          }, null, -1)),
          d("div", Db, [
            d("strong", null, _(r.value.on ? "直播中" : "未开播"), 1),
            d("small", null, _(r.value.note), 1)
          ]),
          r.value.locked ? (y(), w("span", Lb, [...k[4] || (k[4] = [
            d("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "aria-hidden": "true"
            }, [
              d("rect", {
                x: "3",
                y: "7",
                width: "10",
                height: "7",
                rx: "1.5"
              }),
              d("path", { d: "M5.5 7V5a2.5 2.5 0 0 1 5 0v2" })
            ], -1),
            Me(" 已锁定 ", -1)
          ])])) : (y(), w("button", {
            key: 1,
            type: "button",
            class: Z(["rlzc-onair-btn", { stop: r.value.on }]),
            onClick: o
          }, _(r.value.on ? "下播" : "开播"), 3))
        ], 2),
        d("div", Rb, [
          d("div", Ob, [
            k[6] || (k[6] = d("span", { class: "rlzc-option-label" }, [
              d("span", null, "弹幕来源")
            ], -1)),
            d("div", Fb, [
              d("button", {
                class: Z({ on: s.value === "local" }),
                onClick: k[0] || (k[0] = (z) => c("local"))
              }, "本地", 2),
              d("button", {
                class: Z({ on: s.value === "ai" }),
                disabled: !n.value,
                onClick: k[1] || (k[1] = (z) => c("ai"))
              }, "本地+AI", 10, jb)
            ]),
            n.value ? R("", !0) : (y(), w("small", Bb, "需先在副本事件检测里选接口"))
          ]),
          s.value === "ai" ? (y(), w("div", Vb, [
            k[9] || (k[9] = d("div", { class: "rlzc-option-label" }, [
              d("span", null, "生成频率"),
              d("small", null, "关键事件时另加一次")
            ], -1)),
            d("div", Ub, [
              k[7] || (k[7] = d("span", { class: "rlzc-unit" }, "每", -1)),
              d("input", {
                type: "number",
                min: "1",
                max: "10",
                class: "rlzc-input rlzc-input-num",
                value: t.value.freq,
                onChange: u
              }, null, 40, Hb),
              k[8] || (k[8] = d("span", { class: "rlzc-unit" }, "轮", -1))
            ])
          ])) : R("", !0),
          d("div", Wb, [
            k[11] || (k[11] = d("div", { class: "rlzc-option-label" }, [
              d("span", null, "弹幕传给AI"),
              d("small", null, "主AI能看到最近弹幕")
            ], -1)),
            d("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.injectToAI ? "true" : "false",
              class: Z(["rlzc-toggle", { on: t.value.injectToAI }]),
              onClick: k[2] || (k[2] = (z) => f(!t.value.injectToAI))
            }, [...k[10] || (k[10] = [
              d("span", null, null, -1)
            ])], 10, Gb)
          ])
        ])
      ]))
    ]));
  }
}), qb = { class: "rlzc-settings" }, Yb = { class: "rlzc-card" }, Jb = ["value"], Zb = { class: "rlzc-card rlzc-collapsible rlzc-format-card" }, Qb = ["aria-expanded"], Xb = {
  key: 0,
  class: "rlzc-collapse-status"
}, e1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, t1 = { class: "rlzc-option-row" }, n1 = ["aria-checked"], s1 = { class: "rlzc-card rlzc-collapsible" }, r1 = ["aria-expanded"], i1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, o1 = { class: "rlzc-ledger-status" }, l1 = { class: "rlzc-row" }, a1 = ["placeholder"], c1 = ["disabled"], u1 = { class: "rlzc-row" }, d1 = ["disabled"], A1 = { class: "rlzc-row" }, f1 = { class: "rlzc-seg-group" }, p1 = ["aria-pressed", "onClick"], h1 = ["disabled"], m1 = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, g1 = { class: "rlzc-card rlzc-collapsible" }, x1 = ["aria-expanded"], v1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, y1 = { class: "rlzc-depth" }, b1 = { class: "rlzc-field rlzc-field-num" }, k1 = ["value"], w1 = { class: "rlzc-field rlzc-field-num" }, z1 = ["value"], _1 = { class: "rlzc-field rlzc-field-num" }, $1 = ["value"], S1 = { class: "rlzc-field rlzc-field-num" }, C1 = ["value"], E1 = { class: "rlzc-field rlzc-field-num" }, M1 = ["value"], T1 = { class: "rlzc-field rlzc-field-num" }, I1 = ["value"], N1 = { class: "rlzc-card rlzc-collapsible" }, P1 = ["aria-expanded"], D1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, L1 = ["value", "onChange"], R1 = { class: "rlzc-card" }, O1 = {
  key: 0,
  class: "rlzc-list"
}, F1 = ["onClick"], j1 = {
  key: 1,
  class: "rlzc-hint"
}, B1 = {
  key: 2,
  class: "rlzc-errors"
}, V1 = { class: "rlzc-card" }, U1 = { class: "rlzc-check" }, H1 = ["checked"], W1 = { class: "rlzc-check" }, G1 = ["checked"], K1 = /* @__PURE__ */ Be({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ xe([]), n = /* @__PURE__ */ xe(null), s = /* @__PURE__ */ xe(null), r = /* @__PURE__ */ xe(null), i = /* @__PURE__ */ xe(""), o = /* @__PURE__ */ xe(""), l = /* @__PURE__ */ xe(""), a = ["D", "C", "B", "A", "S"], c = H(() => Ct(q())), u = H(() => pn(c.value.value, A.ledger)), f = H(() => (A.tick, it(q()))), m = H(() => St[f.value]), k = H(() => ms(c.value.value, A.ledger, m.value));
    function z() {
      s.value !== null && (Rx(s.value), s.value = null);
    }
    function x() {
      r.value !== null && (Lx(r.value, i.value || "手动"), r.value = null, i.value = "");
    }
    function $() {
      !o.value && !l.value || (Ox(o.value || void 0, l.value || void 0), o.value = "", l.value = "", we("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function F(E, p) {
      const h = Math.max(0, Math.min(1e4, Math.floor(Number(p.target.value) || 0)));
      A.settings.depths[E] = h, ye();
    }
    async function O(E) {
      const p = E.target, h = p.files?.[0];
      p.value = "", h && (t.value = Ix(await h.text()), t.value.length || we("success", `已导入副本包：${h.name}`));
    }
    async function M(E, p) {
      await Wt(`确定删除自定义副本包《${p}》吗？`) && Nx(E);
    }
    function T(E, p) {
      const h = Math.floor(Number(p.target.value));
      !Number.isFinite(h) || h < 1 || (A.settings.genericCaps = { ...A.settings.genericCaps, [E]: h }, ye());
    }
    function ee(E) {
      cv(E.target.value);
    }
    function te(E) {
      A.settings.statusBarFix = E, ye();
    }
    function Q(E, p) {
      A.settings[E] = p.target.checked, ye();
    }
    function re(E) {
      A.settings.cardCollapsed[E] = !A.settings.cardCollapsed[E], ye();
    }
    return (E, p) => (y(), w(J, null, [
      d("div", qb, [
        d("div", Yb, [
          p[19] || (p[19] = d("h4", null, "副本信息显示位置", -1)),
          d("select", {
            class: "rlzc-input",
            value: C(A).settings.panelDisplay,
            onChange: ee
          }, [...p[18] || (p[18] = [
            d("option", { value: "panel" }, "扩展面板（默认）", -1),
            d("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, Jb),
          p[20] || (p[20] = d("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        d("div", Zb, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(A).settings.cardCollapsed.statusBar,
            onClick: p[0] || (p[0] = (h) => re("statusBar"))
          }, [
            p[21] || (p[21] = d("h4", null, "状态栏格式", -1)),
            C(A).settings.cardCollapsed.statusBar ? (y(), w("span", Xb, _(C(A).settings.statusBarFix ? "自动修正" : "只提醒"), 1)) : R("", !0),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !C(A).settings.cardCollapsed.statusBar }])
            }, "▸", 2)
          ], 8, Qb),
          C(A).settings.cardCollapsed.statusBar ? R("", !0) : (y(), w("div", e1, [
            p[24] || (p[24] = d("p", { class: "rlzc-hint" }, "AI 回复的状态栏缺失或标签写错时，下一轮提醒 AI 按原样输出。", -1)),
            d("div", t1, [
              p[23] || (p[23] = d("div", { class: "rlzc-option-label" }, [
                d("span", null, "自动修正状态栏标签"),
                d("small", null, "只改标签名，不动内容")
              ], -1)),
              d("button", {
                role: "switch",
                type: "button",
                class: Z(["rlzc-toggle rlzc-format-fix", { on: C(A).settings.statusBarFix }]),
                "aria-checked": C(A).settings.statusBarFix ? "true" : "false",
                onClick: p[1] || (p[1] = (h) => te(!C(A).settings.statusBarFix))
              }, [...p[22] || (p[22] = [
                d("span", null, null, -1)
              ])], 10, n1)
            ])
          ]))
        ]),
        d("div", s1, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(A).settings.cardCollapsed.accountFix,
            onClick: p[2] || (p[2] = (h) => re("accountFix"))
          }, [
            p[25] || (p[25] = d("h4", null, "账户校正", -1)),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !C(A).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, r1),
          C(A).settings.cardCollapsed.accountFix ? R("", !0) : (y(), w("div", i1, [
            p[27] || (p[27] = d("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            d("div", o1, [
              d("span", null, [
                p[26] || (p[26] = Me("当前余额：", -1)),
                d("b", null, _(u.value), 1)
              ]),
              d("span", null, _(k.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            p[28] || (p[28] = d("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            d("div", l1, [
              mt(d("input", {
                "onUpdate:modelValue": p[3] || (p[3] = (h) => s.value = h),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${c.value.value}`
              }, null, 8, a1), [
                [
                  Pt,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              d("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: z
              }, "保存", 8, c1)
            ]),
            p[29] || (p[29] = d("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            d("div", u1, [
              mt(d("input", {
                "onUpdate:modelValue": p[4] || (p[4] = (h) => r.value = h),
                type: "number",
                class: "rlzc-input",
                placeholder: "金额（正/负）"
              }, null, 512), [
                [
                  Pt,
                  r.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              mt(d("input", {
                "onUpdate:modelValue": p[5] || (p[5] = (h) => i.value = h),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [Pt, i.value]
              ]),
              d("button", {
                class: "rlzc-btn small",
                disabled: r.value === null,
                onClick: x
              }, "追加", 8, d1)
            ]),
            p[30] || (p[30] = d("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            p[31] || (p[31] = d("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            d("div", A1, [
              d("div", f1, [
                (y(), w(J, null, ce(a, (h) => d("button", {
                  key: h,
                  type: "button",
                  class: Z(["rlzc-seg", { active: o.value === h }]),
                  "aria-pressed": o.value === h ? "true" : "false",
                  onClick: (v) => o.value = o.value === h ? "" : h
                }, _(h), 11, p1)), 64))
              ]),
              mt(d("input", {
                "onUpdate:modelValue": p[6] || (p[6] = (h) => l.value = h),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [Pt, l.value]
              ]),
              d("button", {
                class: "rlzc-btn small",
                disabled: !o.value && !l.value,
                onClick: $
              }, "校正", 8, h1)
            ]),
            C(A).ledger.length === 0 && c.value.source === "默认值" ? (y(), w("p", m1, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : R("", !0)
          ]))
        ]),
        d("div", g1, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(A).settings.cardCollapsed.depths,
            onClick: p[7] || (p[7] = (h) => re("depths"))
          }, [
            p[32] || (p[32] = d("h4", null, "注入深度", -1)),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !C(A).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, x1),
          C(A).settings.cardCollapsed.depths ? R("", !0) : (y(), w("div", v1, [
            p[39] || (p[39] = d("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            d("div", y1, [
              d("label", b1, [
                p[33] || (p[33] = d("span", null, [
                  Me("副本暗号"),
                  d("small", null, "触发世界书的副本条目")
                ], -1)),
                d("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(A).settings.depths.token,
                  onChange: p[8] || (p[8] = (h) => F("token", h))
                }, null, 40, k1)
              ]),
              d("label", w1, [
                p[34] || (p[34] = d("span", null, [
                  Me("副本进度"),
                  d("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                d("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(A).settings.depths.progress,
                  onChange: p[9] || (p[9] = (h) => F("progress", h))
                }, null, 40, z1)
              ]),
              d("label", _1, [
                p[35] || (p[35] = d("span", null, [
                  Me("本轮指令"),
                  d("small", null, "本轮事件与时限写法")
                ], -1)),
                d("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(A).settings.depths.turn,
                  onChange: p[10] || (p[10] = (h) => F("turn", h))
                }, null, 40, $1)
              ]),
              d("label", S1, [
                p[36] || (p[36] = d("span", null, [
                  Me("账户"),
                  d("small", null, "积分余额与清算状态")
                ], -1)),
                d("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(A).settings.depths.ledger,
                  onChange: p[11] || (p[11] = (h) => F("ledger", h))
                }, null, 40, C1)
              ]),
              d("label", E1, [
                p[37] || (p[37] = d("span", null, [
                  Me("直播"),
                  d("small", null, "在看人数与最近弹幕")
                ], -1)),
                d("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(A).settings.depths.live,
                  onChange: p[12] || (p[12] = (h) => F("live", h))
                }, null, 40, M1)
              ]),
              d("label", T1, [
                p[38] || (p[38] = d("span", null, [
                  Me("格式提醒"),
                  d("small", null, "状态栏格式出错后的提醒")
                ], -1)),
                d("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(A).settings.depths.format,
                  onChange: p[13] || (p[13] = (h) => F("format", h))
                }, null, 40, I1)
              ])
            ])
          ]))
        ]),
        Ee(Mb),
        Ee(Kb),
        d("div", N1, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(A).settings.cardCollapsed.genericCaps,
            onClick: p[14] || (p[14] = (h) => re("genericCaps"))
          }, [
            p[40] || (p[40] = d("h4", null, "通用副本默认轮数上限", -1)),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !C(A).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, P1),
          C(A).settings.cardCollapsed.genericCaps ? R("", !0) : (y(), w("div", D1, [
            p[41] || (p[41] = d("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (y(), w(J, null, ce(a, (h) => d("label", {
              key: h,
              class: "rlzc-field rlzc-field-num"
            }, [
              d("span", null, _(h) + " 级", 1),
              d("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: C(A).settings.genericCaps[h],
                onChange: (v) => T(h, v)
              }, null, 40, L1)
            ])), 64))
          ]))
        ]),
        d("div", R1, [
          p[42] || (p[42] = d("h4", null, "自定义副本包", -1)),
          C(A).settings.customPacks.length ? (y(), w("ul", O1, [
            (y(!0), w(J, null, ce(C(A).settings.customPacks, (h) => (y(), w("li", {
              key: h.id
            }, [
              d("span", null, [
                Me(_(h.level) + "｜" + _(h.name) + " ", 1),
                d("small", null, "v" + _(h.version), 1)
              ]),
              d("button", {
                class: "rlzc-btn ghost small",
                onClick: (v) => M(h.id, h.name)
              }, "删除", 8, F1)
            ]))), 128))
          ])) : (y(), w("p", j1, "还没有导入自定义副本包。")),
          d("input", {
            ref_key: "fileInput",
            ref: n,
            type: "file",
            accept: ".json,application/json",
            hidden: "",
            onChange: O
          }, null, 544),
          d("button", {
            class: "rlzc-btn",
            onClick: p[15] || (p[15] = (h) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (y(), w("ul", B1, [
            (y(!0), w(J, null, ce(t.value, (h, v) => (y(), w("li", { key: v }, _(h), 1))), 128))
          ])) : R("", !0)
        ]),
        d("div", V1, [
          p[45] || (p[45] = d("h4", null, "其他", -1)),
          d("label", U1, [
            d("input", {
              type: "checkbox",
              checked: C(A).settings.showBall,
              onChange: p[16] || (p[16] = (h) => Q("showBall", h))
            }, null, 40, H1),
            p[43] || (p[43] = Me("显示悬浮球", -1))
          ]),
          d("label", W1, [
            d("input", {
              type: "checkbox",
              checked: C(A).settings.debug,
              onChange: p[17] || (p[17] = (h) => Q("debug", h))
            }, null, 40, G1),
            p[44] || (p[44] = Me("调试模式", -1))
          ])
        ])
      ]),
      p[46] || (p[46] = d("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), q1 = { class: "rlzc-debug" }, Y1 = {
  key: 0,
  class: "rlzc-note"
}, J1 = {
  key: 0,
  class: "rlzc-note"
}, Z1 = {
  key: 1,
  class: "rlzc-note"
}, Q1 = {
  key: 2,
  class: "rlzc-card"
}, X1 = { class: "rlzc-row" }, ek = ["disabled"], tk = ["value"], nk = ["disabled"], sk = { class: "rlzc-row" }, rk = ["disabled"], ik = ["disabled"], ok = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, lk = ["aria-expanded"], ak = {
  key: 0,
  class: "rlzc-collapse-body"
}, ck = ["onUpdate:modelValue", "disabled"], uk = ["disabled"], dk = { class: "rlzc-card rlzc-collapsible" }, Ak = ["aria-expanded"], fk = {
  key: 0,
  class: "rlzc-collapse-status"
}, pk = {
  key: 0,
  class: "rlzc-collapse-body"
}, hk = {
  key: 0,
  class: "rlzc-hint"
}, mk = { class: "rlzc-hint" }, gk = { class: "rlzc-list rlzc-warns" }, xk = { class: "rlzc-card rlzc-collapsible" }, vk = ["aria-expanded"], yk = {
  key: 0,
  class: "rlzc-collapse-status"
}, bk = {
  key: 0,
  class: "rlzc-collapse-body"
}, kk = {
  key: 0,
  class: "rlzc-list"
}, wk = ["disabled", "onClick"], zk = {
  key: 1,
  class: "rlzc-hint"
}, _k = {
  key: 4,
  class: "rlzc-card"
}, $k = { class: "rlzc-pre" }, Sk = {
  key: 0,
  class: "rlzc-pre"
}, Ck = {
  key: 5,
  class: "rlzc-card"
}, Ek = { class: "rlzc-table" }, Mk = { class: "rlzc-hint" }, Tk = {
  key: 0,
  class: "rlzc-hint"
}, Ik = { class: "rlzc-hint" }, Nk = {
  key: 1,
  class: "rlzc-table"
}, Pk = { class: "rlzc-card rlzc-collapsible" }, Dk = ["aria-expanded"], Lk = {
  key: 0,
  class: "rlzc-collapse-body"
}, Rk = { class: "rlzc-pre" }, Ok = { class: "rlzc-card" }, Fk = { class: "rlzc-pre" }, jk = { class: "rlzc-card" }, Bk = { class: "rlzc-pre" }, Vk = { class: "rlzc-card" }, Uk = { class: "rlzc-table" }, Hk = {
  key: 0,
  class: "rlzc-warn-text"
}, Wk = { key: 1 }, Gk = ["disabled"], Kk = { class: "rlzc-card rlzc-collapsible rlzc-format-debug" }, qk = ["aria-expanded"], Yk = {
  key: 0,
  class: "rlzc-collapse-status"
}, Jk = {
  key: 0,
  class: "rlzc-collapse-body"
}, Zk = {
  key: 0,
  class: "rlzc-hint"
}, Qk = {
  key: 1,
  class: "rlzc-table"
}, Xk = {
  key: 2,
  class: "rlzc-card"
}, ew = { class: "rlzc-table" }, tw = /* @__PURE__ */ Be({
  __name: "DebugTab",
  setup(e) {
    const t = H(() => A.settings.debug), n = /* @__PURE__ */ xe(""), s = /* @__PURE__ */ xe(null), r = /* @__PURE__ */ fr({});
    hr(
      () => [A.tick, A.pack?.id],
      () => {
        for (const h of Object.keys(r)) delete r[h];
        const p = su() ?? {};
        for (const h of A.pack?.roles ?? []) r[h] = p[h] ?? "";
      },
      { immediate: !0 }
    );
    const i = H(() => {
      A.tick;
      const p = q(), h = [], v = A.session?.entryIndex ?? 0;
      for (let P = v; P < p.length; P++) {
        const ie = p[P]?.extra?.rlzc;
        ie && h.push({ index: P, snap: ie });
      }
      return h.reverse().slice(0, 60);
    }), o = H(() => {
      const p = new Set((A.audit?.warnings ?? []).filter((P) => P.kind === "limit" || P.kind === "eventMissed").map((P) => P.index)), h = q(), v = A.session?.entryIndex ?? 0;
      for (let P = v; P < h.length; P++)
        h[P]?.extra?.rlzc?.ledgerMismatch && p.add(P);
      for (const P of l.value) p.add(P.index);
      return p;
    }), l = H(() => (A.tick, Yh(q()))), a = H(() => l.value.filter((p) => !p.fixed).length), c = H(() => {
      if (A.tick, !A.session || !A.pack || !A.progress) return null;
      const p = q(), h = _r(p, A.progress.entryIndex);
      let v = null;
      for (let P = p.length - 1; P >= A.progress.entryIndex; P--) {
        const ie = p[P]?.extra?.rlzc?.sub;
        if (ie) {
          v = ie;
          break;
        }
      }
      return {
        text: h ? bc(A.pack, h.state) : "",
        state: h?.state ?? null,
        record: v
      };
    }), u = H(() => {
      A.tick;
      const p = q(), h = [];
      for (let v = p.length - 1; v >= 0 && h.length < 60; v--) {
        const P = Gt(p[v]);
        P && h.push({ index: v, rec: P });
      }
      return h;
    });
    function f(p) {
      const h = p.feed.filter((v) => v.t === "tip").map((v) => `${v.name} ${v.amount}→${v.net}`);
      return p.revoke && h.push(`撤回 −${p.revoke}`), h.join("；");
    }
    function m(p) {
      const h = p.ai;
      return h ? h.pending ? "生成中…" : h.ok ? `${h.count}条（${h.ms}ms）` : `失败：${h.error ?? ""}` : "";
    }
    const k = { done: "✓", missed: "✗", void: "–" };
    function z(p) {
      if (!p.sub && !p.skippedEvents?.length) return "";
      const h = [];
      p.sub?.skipped && h.push(`未更新（${p.sub.error ?? ""}）`);
      for (const v of p.sub?.events ?? []) h.push(`${v.id}${k[v.status]}`);
      for (const v of p.skippedEvents ?? []) h.push(`跳过${v.id}`);
      return p.sub && !p.sub.skipped && !h.length && h.push("已整理"), h.join(" ");
    }
    const x = H(() => {
      if (A.tick, !A.session) return null;
      const p = Ue().books[A.session.id];
      return p ? { book: p, rounds: Sv() } : null;
    }), $ = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" };
    function F(p, h) {
      return p ? p.kind === "refund" ? `全退（#${p.index}）` : p.kind === "lost" ? `全废（#${p.index}）` : `${h[p.option] ?? p.option}（#${p.index}）` : "待开奖";
    }
    function O(p) {
      return p ? p.status === "pending" ? "出题中…" : p.status === "ok" ? `已出 ${p.count} 题（${p.ms}ms）` : p.status === "late" ? `晚于封盘到达，已丢弃（${p.ms}ms）` : `失败：${p.error ?? ""}` : "事件检测关闭，未出题";
    }
    const M = { ok: "已检测", miss: "没检测", pending: "检测中" }, T = H(() => {
      const p = A.progress;
      if (!p) return null;
      const { perMessage: h, phase: v, next: P, ...ie } = p;
      return {
        phase: v.id + " " + v.name,
        ...ie,
        next: P ? { round: P.round, skipFrom: P.skipFrom, events: P.events.map((le) => le.id) } : null,
        messages: Object.keys(h).length
      };
    });
    function ee() {
      n.value && Qx(n.value);
    }
    function te() {
      s.value !== null && s.value >= 0 && Xx(s.value);
    }
    function Q() {
      ev({ ...r });
    }
    const re = (p) => JSON.stringify(p, null, 2);
    function E(p) {
      A.settings.cardCollapsed[p] = !A.settings.cardCollapsed[p], ye();
    }
    return (p, h) => (y(), w("div", q1, [
      C(A).session ? (y(), w(J, { key: 1 }, [
        t.value ? R("", !0) : (y(), w("p", J1, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        C(A).pack && C(A).session.packVersion !== C(A).pack.version ? (y(), w("p", Z1, " 入场时副本包版本为 " + _(C(A).session.packVersion) + "，当前为 " + _(C(A).pack.version) + "。 ", 1)) : R("", !0),
        C(A).pack?.phases.length ? (y(), w("div", Q1, [
          h[9] || (h[9] = d("h4", null, "手动修正", -1)),
          d("div", X1, [
            mt(d("select", {
              "onUpdate:modelValue": h[0] || (h[0] = (v) => n.value = v),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              h[8] || (h[8] = d("option", { value: "" }, "切换到阶段…", -1)),
              (y(!0), w(J, null, ce(C(A).pack.phases, (v) => (y(), w("option", {
                key: v.id,
                value: v.id
              }, _(v.name), 9, tk))), 128))
            ], 8, ek), [
              [Ga, n.value]
            ]),
            d("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: ee
            }, "切换", 8, nk)
          ]),
          d("div", sk, [
            mt(d("input", {
              "onUpdate:modelValue": h[1] || (h[1] = (v) => s.value = v),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, rk), [
              [
                Pt,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            d("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: te
            }, "修正轮次", 8, ik)
          ])
        ])) : R("", !0),
        C(A).pack?.roles?.length ? (y(), w("div", ok, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(A).settings.cardCollapsed.rolesDebug,
            onClick: h[2] || (h[2] = (v) => E("rolesDebug"))
          }, [
            h[10] || (h[10] = d("h4", null, "角色登记", -1)),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !C(A).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, lk),
          C(A).settings.cardCollapsed.rolesDebug ? R("", !0) : (y(), w("div", ak, [
            (y(!0), w(J, null, ce(C(A).pack.roles, (v) => (y(), w("label", {
              key: v,
              class: "rlzc-field"
            }, [
              d("span", null, _(v), 1),
              mt(d("input", {
                "onUpdate:modelValue": (P) => r[v] = P,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, ck), [
                [Pt, r[v]]
              ])
            ]))), 128)),
            d("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: Q
            }, "保存登记", 8, uk)
          ]))
        ])) : R("", !0),
        d("div", dk, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(A).settings.cardCollapsed.auditDebug,
            onClick: h[3] || (h[3] = (v) => E("auditDebug"))
          }, [
            h[11] || (h[11] = d("h4", null, "<副本> 核对", -1)),
            C(A).settings.cardCollapsed.auditDebug ? (y(), w("span", fk, _(C(A).audit?.warnings.length ? "⚠️" : "无"), 1)) : R("", !0),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !C(A).settings.cardCollapsed.auditDebug }])
            }, "▸", 2)
          ], 8, Ak),
          C(A).settings.cardCollapsed.auditDebug ? R("", !0) : (y(), w("div", pk, [
            C(A).audit?.warnings.length ? (y(), w(J, { key: 1 }, [
              d("p", mk, "共 " + _(C(A).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
              d("ul", gk, [
                (y(!0), w(J, null, ce(C(A).audit.warnings.slice(-30).reverse(), (v, P) => (y(), w("li", { key: P }, [
                  d("span", null, [
                    d("small", null, "#" + _(v.index) + "｜" + _(v.phase) + "第" + _(v.round) + "轮", 1),
                    h[12] || (h[12] = d("br", null, null, -1)),
                    Me("⚠️ " + _(v.text), 1)
                  ])
                ]))), 128))
              ])
            ], 64)) : (y(), w("p", hk, "没有发现问题。"))
          ]))
        ]),
        d("div", xk, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(A).settings.cardCollapsed.manualDebug,
            onClick: h[4] || (h[4] = (v) => E("manualDebug"))
          }, [
            h[13] || (h[13] = d("h4", null, "手动操作记录", -1)),
            C(A).settings.cardCollapsed.manualDebug && C(A).session.manual.length ? (y(), w("span", yk, "×" + _(C(A).session.manual.length), 1)) : R("", !0),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !C(A).settings.cardCollapsed.manualDebug }])
            }, "▸", 2)
          ], 8, vk),
          C(A).settings.cardCollapsed.manualDebug ? R("", !0) : (y(), w("div", bk, [
            C(A).session.manual.length ? (y(), w("ul", kk, [
              (y(!0), w(J, null, ce(C(A).session.manual, (v, P) => (y(), w("li", { key: P }, [
                d("code", null, "#" + _(v.atIndex) + " " + _(v.kind) + " " + _("phase" in v ? v.phase : "") + _("round" in v ? v.round : "") + _("targetPhase" in v ? `${v.targetPhase}:${v.targetRound}` : ""), 1),
                d("button", {
                  class: "rlzc-btn ghost small",
                  disabled: !t.value,
                  onClick: (ie) => C(tv)(P)
                }, "撤销", 8, wk)
              ]))), 128))
            ])) : (y(), w("p", zk, "无"))
          ]))
        ]),
        c.value && (c.value.state || c.value.record) ? (y(), w("details", _k, [
          h[14] || (h[14] = d("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          d("pre", $k, _(c.value.text || "（尚无状态）"), 1),
          c.value.record ? (y(), w("pre", Sk, _(re(c.value.record)), 1)) : R("", !0),
          h[15] || (h[15] = d("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : R("", !0),
        x.value ? (y(), w("details", Ck, [
          h[21] || (h[21] = d("summary", null, "黑市：盘口赔率与检测判定", -1)),
          d("table", Ek, [
            h[19] || (h[19] = d("thead", null, [
              d("tr", null, [
                d("th", null, "盘"),
                d("th", null, "题目"),
                d("th", null, "赔率"),
                d("th", null, "结果")
              ])
            ], -1)),
            d("tbody", null, [
              (y(!0), w(J, null, ce(x.value.book.markets, (v) => (y(), w("tr", {
                key: v.id
              }, [
                d("td", null, _($[v.kind]) + " " + _(v.id), 1),
                d("td", null, [
                  Me(_(v.q), 1),
                  v.judge ? (y(), w(J, { key: 0 }, [
                    h[16] || (h[16] = d("br", null, null, -1)),
                    d("small", null, _(v.judge), 1)
                  ], 64)) : R("", !0),
                  v.judgeNo ? (y(), w(J, { key: 1 }, [
                    h[17] || (h[17] = d("br", null, null, -1)),
                    d("small", null, "否：" + _(v.judgeNo), 1)
                  ], 64)) : R("", !0),
                  v.by ? (y(), w(J, { key: 2 }, [
                    h[18] || (h[18] = d("br", null, null, -1)),
                    d("small", null, "by " + _(v.by), 1)
                  ], 64)) : R("", !0)
                ]),
                d("td", null, _(v.options.map((P) => `${P.label}(${Math.round(P.p * 100)}%) ×${P.odds.toFixed(2)}`).join("　")), 1),
                d("td", null, _(F(C(A).market.results[v.id], Object.fromEntries(v.options.map((P) => [P.id, P.label])))), 1)
              ]))), 128))
            ])
          ]),
          d("p", Mk, "庄家怪盘：" + _(O(x.value.book.freak)), 1),
          x.value.book.plan ? (y(), w("p", Tk, "计划开 " + _(x.value.book.plan.total) + " 个盘，其中怪盘 " + _(x.value.book.plan.freak) + " 个；实开 " + _(x.value.book.markets.length) + " 个", 1)) : R("", !0),
          d("p", Ik, "开盘 " + _(x.value.book.openedAt) + "　" + _(x.value.book.closedAt ? `封盘 ${x.value.book.closedAt}` : "未封盘") + _(x.value.book.frozen ? "　已定格" : ""), 1),
          x.value.rounds.length ? (y(), w("table", Nk, [
            h[20] || (h[20] = d("thead", null, [
              d("tr", null, [
                d("th", null, "楼"),
                d("th", null, "检测"),
                d("th", null, "判定为真")
              ])
            ], -1)),
            d("tbody", null, [
              (y(!0), w(J, null, ce(x.value.rounds, (v) => (y(), w("tr", {
                key: v.index,
                class: Z({ "rlzc-row-warn": v.state === "miss" })
              }, [
                d("td", null, _(v.index), 1),
                d("td", null, _(M[v.state]), 1),
                d("td", null, _(Object.keys(v.hits).filter((P) => v.hits[P]).join(" ") || "—"), 1)
              ], 2))), 128))
            ])
          ])) : R("", !0)
        ])) : R("", !0),
        d("div", Pk, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(A).settings.cardCollapsed.injectionDebug,
            onClick: h[5] || (h[5] = (v) => E("injectionDebug"))
          }, [
            h[22] || (h[22] = d("h4", null, "本次注入", -1)),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !C(A).settings.cardCollapsed.injectionDebug }])
            }, "▸", 2)
          ], 8, Dk),
          C(A).settings.cardCollapsed.injectionDebug ? R("", !0) : (y(), w("div", Lk, [
            d("pre", Rk, _([C(A).lastInjection.token, C(A).lastInjection.progress, C(A).lastInjection.turn, C(A).lastInjection.format].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
          ]))
        ]),
        d("details", Ok, [
          h[23] || (h[23] = d("summary", null, "重放结果", -1)),
          d("pre", Fk, _(re(T.value)), 1)
        ]),
        d("details", jk, [
          h[24] || (h[24] = d("summary", null, "会话原始数据", -1)),
          d("pre", Bk, _(re(C(A).session)), 1)
        ]),
        d("details", Vk, [
          h[26] || (h[26] = d("summary", null, "每楼快照（最近60条）", -1)),
          d("table", Uk, [
            h[25] || (h[25] = d("thead", null, [
              d("tr", null, [
                d("th", null, "楼"),
                d("th", null, "阶段"),
                d("th", null, "轮"),
                d("th", null, "钟时"),
                d("th", null, "时限"),
                d("th", null, "事件"),
                d("th", null, "检测")
              ])
            ], -1)),
            d("tbody", null, [
              (y(!0), w(J, null, ce(i.value, (v) => (y(), w("tr", {
                key: v.index,
                class: Z({ "rlzc-row-warn": o.value.has(v.index) })
              }, [
                d("td", null, _(v.index) + _(v.snap.entry ? "★" : ""), 1),
                d("td", null, _(v.snap.phase), 1),
                d("td", null, _(v.snap.round), 1),
                d("td", null, _(v.snap.clock ?? ""), 1),
                d("td", null, _(v.snap.limit?.text ?? ""), 1),
                d("td", null, _(v.snap.injected.join(" ")), 1),
                d("td", null, _(z(v.snap)), 1),
                v.snap.ledgerMismatch ? (y(), w("td", Hk, "状态栏 " + _(v.snap.ledgerMismatch.status) + " / 账本 " + _(v.snap.ledgerMismatch.ledger), 1)) : (y(), w("td", Wk))
              ], 2))), 128))
            ])
          ])
        ]),
        d("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: h[6] || (h[6] = //@ts-ignore
          (...v) => C($l) && C($l)(...v))
        }, "删除副本会话", 8, Gk)
      ], 64)) : (y(), w("p", Y1, "当前聊天没有副本会话。")),
      d("div", Kk, [
        d("button", {
          class: "rlzc-collapse-head",
          "aria-expanded": !C(A).settings.cardCollapsed.formatDebug,
          onClick: h[7] || (h[7] = (v) => E("formatDebug"))
        }, [
          h[27] || (h[27] = d("h4", null, "状态栏格式", -1)),
          C(A).settings.cardCollapsed.formatDebug ? (y(), w("span", Yk, _(a.value ? "⚠️" : l.value.length ? `已修正×${l.value.length}` : "无"), 1)) : R("", !0),
          d("span", {
            class: Z(["rlzc-collapse-arrow", { open: !C(A).settings.cardCollapsed.formatDebug }])
          }, "▸", 2)
        ], 8, qk),
        C(A).settings.cardCollapsed.formatDebug ? R("", !0) : (y(), w("div", Jk, [
          l.value.length ? (y(), w("table", Qk, [
            h[29] || (h[29] = d("thead", null, [
              d("tr", null, [
                d("th", null, "楼"),
                d("th", null, "问题"),
                d("th", null, "处理")
              ])
            ], -1)),
            d("tbody", null, [
              (y(!0), w(J, null, ce(l.value, (v) => (y(), w("tr", {
                key: v.index,
                class: "rlzc-row-warn"
              }, [
                d("td", null, _(v.index), 1),
                d("td", null, [
                  Me(_(C(Vh)[v.kind]), 1),
                  v.detail ? (y(), w(J, { key: 0 }, [
                    h[28] || (h[28] = d("br", null, null, -1)),
                    d("small", null, _(v.detail), 1)
                  ], 64)) : R("", !0)
                ]),
                d("td", null, _(v.fixed ? `已自动修正（原标签 ${v.from}）` : "未修正"), 1)
              ]))), 128))
            ])
          ])) : (y(), w("p", Zk, "没有发现问题。"))
        ]))
      ]),
      u.value.length ? (y(), w("details", Xk, [
        h[31] || (h[31] = d("summary", null, "直播（每楼，最近60条）", -1)),
        d("table", ew, [
          h[30] || (h[30] = d("thead", null, [
            d("tr", null, [
              d("th", null, "楼"),
              d("th", null, "精彩度"),
              d("th", null, "热度"),
              d("th", null, "人数"),
              d("th", null, "打赏"),
              d("th", null, "AI弹幕")
            ])
          ], -1)),
          d("tbody", null, [
            (y(!0), w(J, null, ce(u.value, (v) => (y(), w("tr", {
              key: v.index,
              class: Z({ "rlzc-row-warn": v.rec.ai && !v.rec.ai.ok && !v.rec.ai.pending })
            }, [
              d("td", null, _(v.index) + _(v.rec.scope === "corridor" ? "·回廊" : ""), 1),
              d("td", null, _(v.rec.hype) + _(v.rec.hurt ? "·伤" : ""), 1),
              d("td", null, _(v.rec.heat), 1),
              d("td", null, _(v.rec.viewers), 1),
              d("td", null, _(f(v.rec)), 1),
              d("td", null, _(m(v.rec)), 1)
            ], 2))), 128))
          ])
        ])
      ])) : R("", !0)
    ]));
  }
}), nw = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, sw = { class: "rlzc-head" }, rw = { class: "rlzc-tabs" }, iw = ["onClick"], ow = { class: "rlzc-body" }, lw = /* @__PURE__ */ Be({
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
      if (s === "debug" && !A.debugUnlocked) {
        if (!await Wt("此页会显示副本真相，确定要打开吗？")) return;
        A.debugUnlocked = !0;
      }
      A.tab = s;
    }
    return (s, r) => (y(), w("div", {
      class: "rlzc-backdrop",
      onClick: r[1] || (r[1] = NA((i) => C(A).panelOpen = !1, ["self"]))
    }, [
      d("section", nw, [
        d("header", sw, [
          r[2] || (r[2] = d("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          d("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: r[0] || (r[0] = (i) => C(A).panelOpen = !1)
          }, "×")
        ]),
        d("nav", rw, [
          (y(), w(J, null, ce(t, (i) => d("button", {
            key: i.id,
            class: Z({ on: C(A).tab === i.id }),
            onClick: (o) => n(i.id)
          }, _(i.label), 11, iw)), 64))
        ]),
        d("div", ow, [
          C(A).tab === "system" ? (y(), Ge(Yy, { key: 0 })) : C(A).tab === "ledger" ? (y(), Ge(f0, { key: 1 })) : C(A).tab === "market" ? (y(), Ge(U0, { key: 2 })) : C(A).tab === "settings" ? (y(), Ge(K1, { key: 3 })) : C(A).tab === "debug" && C(A).debugUnlocked ? (y(), Ge(tw, { key: 4 })) : R("", !0)
        ])
      ])
    ]));
  }
}), aw = /* @__PURE__ */ Be({
  __name: "App",
  setup(e) {
    return (t, n) => (y(), w(J, null, [
      C(A).settings.showBall ? (y(), Ge(Gv, { key: 0 })) : R("", !0),
      C(A).panelOpen ? (y(), Ge(lw, { key: 1 })) : R("", !0),
      Ee(Fv)
    ], 64));
  }
}), cw = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);--ok: #4caf72;--bad: #c9534f;font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:5000;width:48px;height:48px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--muted);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball.is-active{color:var(--accent);border-color:var(--accent)}.rlzc-ball.has-ring{border-color:transparent}.rlzc-ball.is-warn{color:var(--bad)}.rlzc-ball-inf{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;pointer-events:none}.rlzc-ball-ring{position:absolute;inset:-1px;width:48px;height:48px;transform:rotate(-90deg);pointer-events:none}.rlzc-ball-ring circle{fill:none;stroke-width:3}.rlzc-ball-ring-base{stroke:var(--line)}.rlzc-ball-ring-bar{stroke:var(--accent);stroke-linecap:round;transition:stroke-dasharray .3s ease}.rlzc-ball.is-warn .rlzc-ball-ring-bar{stroke:var(--bad)}@media(prefers-reduced-motion:reduce){.rlzc-ball-ring-bar{transition:none}}.rlzc-ball-live{position:absolute;top:1px;left:1px;width:12px;height:12px;border-radius:50%;background:var(--bad);border:2px solid var(--solid);pointer-events:none}.rlzc-ball-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--accent);color:var(--bg);font-size:11px;font-weight:700;line-height:18px;text-align:center;pointer-events:none}.rlzc-entry-card{position:fixed;z-index:9000;top:calc(var(--topBarBlockSize, 40px) + 12px);right:12px;width:300px;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:12px;box-shadow:0 6px 24px #0000004d;padding:10px 12px 4px 14px}@media(max-width:323.98px){.rlzc-entry-card{left:12px;width:auto}}@media(min-width:800px){.rlzc-entry-card.beside-panel{right:476px}}.rlzc-entry-close{position:absolute;top:0;right:0;width:44px;height:44px;display:grid;place-items:center;background:none;border:0;color:var(--muted);font:inherit;font-size:14px;cursor:pointer;padding:0}.rlzc-entry-close:hover{color:var(--fg)}.rlzc-pending{position:relative;padding:10px 12px 4px 14px}.rlzc-entry-kicker{display:flex;align-items:center;gap:5px;font-size:12px;color:var(--muted);padding-right:36px}.rlzc-entry-inf{width:16px;height:16px;fill:none;stroke:var(--accent);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}.rlzc-entry-title{display:flex;align-items:center;gap:8px;margin:6px 0 2px;padding-right:30px}.rlzc-entry-level{flex:0 0 auto;display:inline-grid;place-items:center;min-width:24px;height:24px;padding:0 4px;border-radius:6px;border:1px solid var(--accent);color:var(--accent);font-size:13px;font-weight:800;line-height:1}.rlzc-entry-name{font-size:16px;font-weight:700;min-width:0;overflow-wrap:anywhere}.rlzc-entry-note{font-size:12px;color:var(--muted);margin-top:2px}.rlzc-entry-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:10px;padding-top:2px;border-top:1px solid var(--line)}.rlzc-entry-live{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0;margin-left:-2px;background:none;border:0;color:var(--fg);font:inherit;font-size:13px;cursor:pointer}.rlzc-entry-live .rlzc-toggle{display:inline-block;width:44px}.rlzc-entry-live .rlzc-toggle:after{content:none}.rlzc-entry-live:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:6px}.rlzc-toggle.danger.on{background:color-mix(in srgb,var(--bad) 75%,transparent);border-color:var(--bad)}.rlzc-entry-live.on{color:var(--bad)}.rlzc-entry-actions{display:flex;gap:6px}.rlzc-entry-actions .rlzc-btn{min-height:44px;min-width:60px}.rlzc-entry-actions .rlzc-entry-go{background:var(--accent);border-color:var(--accent);font-weight:700;color:var(--bg);color:rgb(from var(--bg) r g b)}.rlzc-entry-fade-enter-active,.rlzc-entry-fade-leave-active{transition:opacity .16s ease,transform .16s ease}.rlzc-entry-fade-enter-from,.rlzc-entry-fade-leave-to{opacity:0;transform:translateY(-4px)}@media(prefers-reduced-motion:reduce){.rlzc-entry-fade-enter-active,.rlzc-entry-fade-leave-active{transition:none}.rlzc-entry-fade-enter-from,.rlzc-entry-fade-leave-to{transform:none}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:5001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-field.rlzc-field-num>span{flex:1 1 auto;min-width:0}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-check-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px}.rlzc-check-btns .rlzc-btn{min-height:44px;width:100%}.rlzc-check-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}.rlzc-check-list li{display:flex;align-items:baseline;gap:10px;font-size:12px;line-height:1.45}.rlzc-check-list li[data-kind=on]{color:#4caf72}.rlzc-check-list li[data-kind=warn]{color:#c9833a}.rlzc-check-text{flex:1;min-width:0;overflow-wrap:anywhere}.rlzc-check-time{flex:none;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px;flex:0 0 auto}.rlzc-input.rlzc-input-num{flex:0 0 auto;width:calc(4ch + 20px);margin-left:auto;text-align:right;font-variant-numeric:tabular-nums;-moz-appearance:textfield;appearance:textfield}.rlzc-input-num::-webkit-inner-spin-button,.rlzc-input-num::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.rlzc-seg.active{background:var(--accent);border-color:var(--accent);font-weight:700;color:var(--bg);color:rgb(from var(--bg) r g b)}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-toggle:after{content:"";position:absolute;inset:-10px 0}.rlzc-segsrc button:disabled{opacity:.4;cursor:not-allowed}.rlzc-segsrc button:disabled:hover{background:none;color:var(--muted)}.rlzc-live-card .rlzc-input-num{min-height:44px}.rlzc-onair{display:flex;align-items:center;gap:12px;margin:10px 0 4px;padding:10px 10px 10px 14px;border:1px solid var(--line);border-radius:10px;background:var(--soft)}.rlzc-onair.on{border-color:color-mix(in srgb,var(--bad) 45%,transparent);background:color-mix(in srgb,var(--bad) 8%,transparent)}.rlzc-onair-dot{flex:none;width:10px;height:10px;border-radius:50%;background:color-mix(in srgb,var(--muted) 55%,transparent)}.rlzc-onair.on .rlzc-onair-dot{background:var(--bad);box-shadow:0 0 0 4px color-mix(in srgb,var(--bad) 22%,transparent);animation:rlzc-onair-pulse 1.8s ease-in-out infinite}@keyframes rlzc-onair-pulse{50%{box-shadow:0 0 0 7px color-mix(in srgb,var(--bad) 8%,transparent)}}@media(prefers-reduced-motion:reduce){.rlzc-onair.on .rlzc-onair-dot{animation:none}}.rlzc-onair-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-onair-text strong{font-size:14px;font-weight:600;color:var(--fg)}.rlzc-onair.on .rlzc-onair-text strong{color:var(--bad)}.rlzc-onair-text small{font-size:12px;color:var(--muted);overflow-wrap:anywhere}.rlzc-onair-btn{flex:none;min-width:76px;min-height:44px;padding:0 16px;border-radius:22px;font:inherit;font-weight:600;cursor:pointer;border:1px solid var(--bad);background:var(--bad);color:#fff}.rlzc-onair-btn.stop{background:none;color:var(--bad)}.rlzc-onair-btn:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-onair-lock{flex:none;display:inline-flex;align-items:center;gap:5px;min-height:44px;padding:0 12px;font-size:12px;color:var(--muted);border:1px dashed var(--line);border-radius:22px}.rlzc-option-row-stack{flex-direction:column;align-items:stretch;gap:0}.rlzc-option-row-stack .rlzc-segsrc{margin:6px 0 2px}.rlzc-option-row-stack .rlzc-hint{margin:2px 0 0}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-right{flex:0 0 auto;display:flex;flex-direction:column;align-items:flex-end;gap:2px}.rlzc-ledger-item-after{font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-status{flex:0 0 auto;font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-collapse-head .rlzc-dot{font-size:12px}.rlzc-market-tabs button{flex:1 1 0;min-height:44px}.rlzc-mk-status{font-size:14px}.rlzc-mk-q{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;font-weight:600;overflow-wrap:anywhere}.rlzc-mk-tag{flex:0 0 auto;font-size:11px;font-weight:600;color:var(--accent);padding:1px 6px;border:1px solid color-mix(in srgb,var(--accent) 60%,transparent);border-radius:4px}.rlzc-mk-opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.rlzc-mk-opt{display:flex;align-items:center;justify-content:space-between;gap:6px;min-height:44px;padding:6px 10px;font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 60%,transparent);border:1px solid var(--line);border-radius:8px;cursor:pointer;text-align:left}.rlzc-mk-opt b{font-weight:600;font-variant-numeric:tabular-nums;color:var(--muted)}.rlzc-mk-opt.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 16%,transparent)}.rlzc-mk-opt.on b{color:var(--fg)}.rlzc-mk-opt:disabled{opacity:.55;cursor:not-allowed}.rlzc-mk-bet{margin-top:8px}.rlzc-mk-bet .rlzc-input,.rlzc-mk-bet .rlzc-btn{min-height:44px}.rlzc-mk-bet .rlzc-btn{flex:0 0 auto;min-width:64px}.rlzc-mk-red{color:var(--bad);font-size:12px;margin:2px 0}.rlzc-mk-mine{list-style:none;margin:8px 0 0;padding:6px 0 0;border-top:1px dashed var(--line);font-size:12px;color:var(--muted)}.rlzc-mk-mine li{padding:2px 0;font-variant-numeric:tabular-nums}.rlzc-tk-list{list-style:none;margin:0;padding:0}.rlzc-tk{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:52px;padding:6px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-tk:last-child{border-bottom:none}.rlzc-tk-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-tk-title{font-size:13px;overflow-wrap:anywhere}.rlzc-tk-left small{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-stamp{flex:0 0 40px;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:16px;border:2px solid currentColor;transform:rotate(-14deg);box-shadow:inset 0 0 0 2px color-mix(in srgb,currentColor 18%,transparent)}.rlzc-stamp.win{color:var(--ok)}.rlzc-stamp.lose{color:var(--bad)}.rlzc-stamp.refund{color:var(--muted)}.rlzc-stamp.pending{color:var(--muted);border-style:dashed;border-width:1px;box-shadow:none;transform:none;font-weight:600;font-size:14px}.rlzc-cs-tables{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-cs-table{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-height:76px;text-align:left;font:inherit;color:var(--fg);cursor:pointer}.rlzc-cs-table b{font-size:15px}.rlzc-cs-table small{font-size:12px;color:var(--muted);line-height:1.45}.rlzc-cs-table.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent)}.rlzc-cs-play h4{margin-bottom:4px}.rlzc-cs-seg{margin:6px 0}.rlzc-cs-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:4px;margin:6px 0}.rlzc-cs-grid.door{grid-template-columns:repeat(5,minmax(0,1fr))}.rlzc-cs-grid button{min-height:44px;padding:0 2px;font:inherit;font-size:13px;color:var(--muted);cursor:pointer;background:none;border:1px solid var(--line);border-radius:8px;font-variant-numeric:tabular-nums}.rlzc-cs-grid button.on{color:var(--fg);border-color:var(--accent);background:color-mix(in srgb,var(--accent) 15%,transparent);font-weight:600}.rlzc-cs-face{margin-top:10px;min-height:52px;display:grid;place-items:center;font-size:26px;font-weight:800;font-variant-numeric:tabular-nums;border:1px dashed var(--line);border-radius:10px}.rlzc-cs-face.rolling{color:var(--muted)}.rlzc-cs-result{margin:8px 0 0;font-weight:600;font-variant-numeric:tabular-nums}.rlzc-cs-result.win{color:var(--ok)}.rlzc-cs-result.lose{color:var(--bad)}';
function uw(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function mu(e, t, n) {
  const s = me().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function dw() {
  const e = uw();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await mu("/api/extensions/version", e, t);
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
async function Aw(e) {
  const t = await mu("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const fw = "回廊种菜系统", pw = 100, hw = [], mw = [], gw = "dist/index.js", xw = "xiaxiii", vw = "1.1.9", yw = "https://github.com/xiaxiii/M-bius-strip", bw = !0, kw = "rlzcInterceptor", Dl = {
  display_name: fw,
  loading_order: pw,
  requires: hw,
  optional: mw,
  js: gw,
  author: xw,
  version: vw,
  homePageUrl: yw,
  auto_update: bw,
  generate_interceptor: kw
}, ww = {
  /** 有新版本、还没更新时：打开酒馆弹窗与扩展设置里的更新状态 */
  有新版本: [
    "喂喂喂，有新版本啦～（现在是 {版本}）",
    "EC 偷偷改咗少少嘢，bb 嚟更新下啦～（现在是 {版本}）",
    "bb呀，EC叫你嚟更新喇喂～（现在是 {版本}）",
    "EC 又给回廊添了点新东西，bb 快来看看！（现在是 {版本}）",
    "叩叩叩，新版本到啦～（现在是 {版本}）"
  ]
};
function zw(e, t = {}, n = Math.random) {
  const s = ww[e];
  return (s[Math.floor(n() * s.length)] ?? s[0] ?? "").replace(/\{([^{}]+)\}/g, (i, o) => t[o] ?? i);
}
const Ll = "rlzc-host", Rl = "rlzc-menu-btn", Ol = "rlzc-settings-drawer";
function _w() {
  if (document.getElementById(Ll)) return;
  const e = document.createElement("div");
  e.id = Ll, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = cw, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), LA(aw).mount(s), gu(), xu();
}
function gu(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => gu(e + 1), 500);
    return;
  }
  if (document.getElementById(Rl)) return;
  const n = document.createElement("div");
  n.id = Rl, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const r = document.createElement("span");
  r.textContent = "回廊种菜系统", n.append(s, r), n.addEventListener("click", () => {
    A.panelOpen = !A.panelOpen;
  }), t.appendChild(n);
}
function xu(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => xu(e + 1), 500);
    return;
  }
  if (document.getElementById(Ol)) return;
  const n = (p, h = "", v = "") => {
    const P = document.createElement(p);
    return h && (P.className = h), v && (P.textContent = v), P;
  }, s = n("div");
  s.id = Ol;
  const r = n("div", "inline-drawer"), i = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), i.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const a = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => A.panelOpen = !0);
  const u = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  u.addEventListener("click", () => {
    A.settings.ball = { x: null, y: null }, A.settings.showBall = !0, ye();
  });
  const f = n("label", "checkbox_label"), m = document.createElement("input");
  m.type = "checkbox", m.addEventListener("change", () => {
    A.settings.showBall = m.checked, ye();
  }), f.append(m, n("span", "", "显示悬浮球")), hr(() => A.settings.showBall, (p) => m.checked = p, { immediate: !0 });
  const k = n("div", "flex-container");
  k.append(c, u);
  const z = n("div", "flex-container alignitemscenter"), x = n("small", "rlzc-update-status", "正在检查更新…"), $ = n("div", "menu_button menu_button_icon", "检查更新"), F = n("div", "menu_button menu_button_icon", "立即更新"), O = n("div", "menu_button menu_button_icon", "刷新页面");
  F.style.display = "none", O.style.display = "none", z.append(x, $, F, O);
  let M = null, T = !1, ee = "";
  const te = () => ee || (ee = zw("有新版本", { 版本: Dl.version })), Q = async (p = !1) => {
    if (!T) {
      T = !0, x.textContent = "正在检查更新…", F.style.display = "none";
      try {
        M = await dw();
        const h = `（${Dl.version}）`;
        M.isGit ? M.isUpToDate ? x.textContent = `已是最新版本${h}` : (x.textContent = te(), F.style.display = "") : x.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = M.isGit && !M.isUpToDate ? "" : "none";
      } catch (h) {
        x.textContent = `检查更新失败：${h.message}`;
        return;
      } finally {
        T = !1;
      }
      p && M?.isGit && !M.isUpToDate && E();
    }
  }, re = async () => {
    if (!M || T) return !1;
    T = !0, x.textContent = "正在更新…", F.style.display = "none";
    try {
      return await Aw(M), l.style.display = "none", x.textContent = "更新完成，刷新页面后生效。", O.style.display = "", !0;
    } catch (p) {
      throw x.textContent = `更新失败：${p.message}`, F.style.display = "", p;
    } finally {
      T = !1;
    }
  }, E = () => ol(te(), "立即更新", () => {
    re().then((p) => {
      p && ol("更新完成，刷新页面后生效。", "刷新页面", () => location.reload());
    }).catch((p) => we("error", `更新失败：${p.message}`));
  });
  $.addEventListener("click", () => void Q()), F.addEventListener("click", () => void re().catch(() => {
  })), O.addEventListener("click", () => location.reload()), setTimeout(() => void Q(!0), 1e3), a.append(k, f, z, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), r.append(i, a), s.append(r), t.append(s);
}
globalThis.rlzcInterceptor = Vx;
function ri() {
  Ex(), yn("MESSAGE_RECEIVED", (e, t) => lv(Number(e), t)), yn("MESSAGE_DELETED", () => ei()), yn("MESSAGE_SWIPED", (e) => Gx(Number(e))), yn("MESSAGE_EDITED", (e) => ei(Number(e))), yn("MESSAGE_UPDATED", (e) => ei(Number(e))), yn("CHAT_CHANGED", () => Ml()), On("CHARACTER_MESSAGE_RENDERED", (e) => Os(Number(e), !0)), On("MESSAGE_SWIPED", (e) => Os(Number(e), !0)), On("MESSAGE_UPDATED", (e) => Os(Number(e), !0)), On("MORE_MESSAGES_LOADED", () => ir(!1, !0)), On("CHAT_LOADED", () => ir(!1, !0)), _w(), jg({ view: Ao, toggle: uu }), Ml(), console.log("[rlzc] 回廊种菜系统已加载", A.settings);
}
const Fl = window.jQuery;
typeof Fl == "function" ? Fl(() => ri()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ri) : ri();
