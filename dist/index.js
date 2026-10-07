/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ki(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ve = {}, nn = [], on = () => {
}, Vl = () => !1, rr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ir = (e) => e.startsWith("onUpdate:"), Ue = Object.assign, Hl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, _u = Object.prototype.hasOwnProperty, fe = (e, t) => _u.call(e, t), se = Array.isArray, Dt = (e) => ps(e) === "[object Map]", cn = (e) => ps(e) === "[object Set]", yo = (e) => ps(e) === "[object Date]", de = (e) => typeof e == "function", be = (e) => typeof e == "string", gt = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", Wl = (e) => (me(e) || de(e)) && de(e.then) && de(e.catch), Gl = Object.prototype.toString, ps = (e) => Gl.call(e), $u = (e) => ps(e).slice(8, -1), Kl = (e) => ps(e) === "[object Object]", wi = (e) => be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vn = /* @__PURE__ */ ki(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), or = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Su = /-\w/g, et = or(
  (e) => e.replace(Su, (t) => t.slice(1).toUpperCase())
), Cu = /\B([A-Z])/g, pn = or(
  (e) => e.replace(Cu, "-$1").toLowerCase()
), ql = or((e) => e.charAt(0).toUpperCase() + e.slice(1)), Tr = or(
  (e) => e ? `on${ql(e)}` : ""
), ht = (e, t) => !Object.is(e, t), Ns = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Yl = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, lr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Eu = (e) => {
  const t = be(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let bo;
const ar = () => bo || (bo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function cr(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = be(s) ? Nu(s) : cr(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (be(e) || me(e))
    return e;
}
const Mu = /;(?![^(]*\))/g, Tu = /:([^]+)/, Iu = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Nu(e) {
  const t = {};
  return e.replace(Iu, (n) => n.startsWith("/*") ? "" : n).split(Mu).forEach((n) => {
    if (n) {
      const s = n.split(Tu);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Q(e) {
  let t = "";
  if (be(e))
    t = e;
  else if (se(e))
    for (let n = 0; n < e.length; n++) {
      const s = Q(e[n]);
      s && (t += s + " ");
    }
  else if (me(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Pu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ou = /* @__PURE__ */ ki(Pu);
function Jl(e) {
  return !!e || e === "";
}
function Du(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = Rt(e[r], t[r], n);
  return s;
}
function ko(e, t, n) {
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
function Lu(e, t, n) {
  let s = Dt(e), r = Dt(t);
  if (s || r || (s = cn(e), r = cn(t), s || r))
    return s && r ? ko(e, t, n) : !1;
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
function wo(e, t, n, s) {
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
  let s = yo(e), r = yo(t);
  return s || r ? s && r ? e.getTime() === t.getTime() : !1 : (s = gt(e), r = gt(t), s || r ? e === t : (s = se(e), r = se(t), s || r ? s && r ? wo(e, t, n, Du) : !1 : (s = me(e), r = me(t), s || r ? !s || !r ? !1 : wo(e, t, n, Lu) : String(e) === String(t))));
}
function Ru(e, t) {
  return e.findIndex((n) => Rt(n, t));
}
const Zl = (e) => !!(e && e.__v_isRef === !0), $ = (e) => be(e) ? e : e == null ? "" : se(e) || me(e) && (e.toString === Gl || !de(e.toString)) ? Zl(e) ? $(e.value) : JSON.stringify(e, Xl, 2) : String(e), Xl = (e, t) => Zl(t) ? Xl(e, t.value) : Dt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Ir(s, i) + " =>"] = r, n),
    {}
  )
} : cn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ir(n))
} : gt(t) ? Ir(t) : me(t) && !se(t) && !Kl(t) ? String(t) : t, Ir = (e, t = "") => {
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
class Fu {
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
function ju() {
  return Ce;
}
let pe;
const Nr = /* @__PURE__ */ new WeakSet();
class Ql {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ce && (Ce.active ? Ce.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Nr.has(this) && (Nr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ta(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, zo(this), na(this);
    const t = pe, n = tt;
    pe = this, tt = !0;
    try {
      return this.fn();
    } finally {
      sa(this), pe = t, tt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        $i(t);
      this.deps = this.depsTail = void 0, zo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Nr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    si(this) && this.run();
  }
  get dirty() {
    return si(this);
  }
}
let ea = 0, Hn, Wn;
function ta(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wn, Wn = e;
    return;
  }
  e.next = Hn, Hn = e;
}
function zi() {
  ea++;
}
function _i() {
  if (--ea > 0)
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
function na(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function sa(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), $i(s), Bu(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function si(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ra(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ra(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qn) || (e.globalVersion = Qn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !si(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = pe, s = tt;
  pe = e, tt = !0;
  try {
    na(e);
    const r = e.fn(e._value);
    (t.version === 0 || ht(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    pe = n, tt = s, sa(e), e.flags &= -3;
  }
}
function $i(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      $i(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Bu(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let tt = !0;
const ia = [];
function Ft() {
  ia.push(tt), tt = !1;
}
function jt() {
  const e = ia.pop();
  tt = e === void 0 ? !0 : e;
}
function zo(e) {
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
let Qn = 0;
class Uu {
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
    if (!pe || !tt || pe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== pe)
      n = this.activeLink = new Uu(pe, this), pe.deps ? (n.prevDep = pe.depsTail, pe.depsTail.nextDep = n, pe.depsTail = n) : pe.deps = pe.depsTail = n, oa(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = pe.depsTail, n.nextDep = void 0, pe.depsTail.nextDep = n, pe.depsTail = n, pe.deps === n && (pe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Qn++, this.notify(t);
  }
  notify(t) {
    zi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      _i();
    }
  }
}
function oa(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        oa(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ri = /* @__PURE__ */ new WeakMap(), ln = /* @__PURE__ */ Symbol(
  ""
), ii = /* @__PURE__ */ Symbol(
  ""
), es = /* @__PURE__ */ Symbol(
  ""
);
function Te(e, t, n) {
  if (tt && pe) {
    let s = ri.get(e);
    s || ri.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Si()), r.map = s, r.key = n), r.track();
  }
}
function zt(e, t, n, s, r, i) {
  const o = ri.get(e);
  if (!o) {
    Qn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (zi(), t === "clear")
    o.forEach(l);
  else {
    const a = se(e), c = a && wi(n);
    if (a && n === "length") {
      const d = Number(s);
      o.forEach((A, p) => {
        (p === "length" || p === es || !gt(p) && p >= d) && l(A);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(es)), t) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(ln)), Dt(e) && l(o.get(ii)));
          break;
        case "delete":
          a || (l(o.get(ln)), Dt(e) && l(o.get(ii)));
          break;
        case "set":
          Dt(e) && l(o.get(ln));
          break;
      }
  }
  _i();
}
function yn(e) {
  const t = /* @__PURE__ */ ae(e);
  return t === e || (Te(t, "iterate", es), /* @__PURE__ */ qe(e)) ? t : /* @__PURE__ */ xt(e) ? /* @__PURE__ */ Lt(e) ? t.map((n) => Bt(Ye(n))) : t.map(Bt) : t.map(Ye);
}
function ur(e) {
  return Te(e = /* @__PURE__ */ ae(e), "iterate", es), e;
}
function At(e, t) {
  return /* @__PURE__ */ xt(e) ? Bt(/* @__PURE__ */ Lt(e) ? Ye(t) : t) : Ye(t);
}
const Vu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Pr(this, Symbol.iterator, (e) => At(this, e));
  },
  concat(...e) {
    return yn(this).concat(
      ...e.map((t) => se(t) ? yn(t) : t)
    );
  },
  entries() {
    return Pr(this, "entries", (e) => (e[1] = At(this, e[1]), e));
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
    return Or(this, "includes", e);
  },
  indexOf(...e) {
    return Or(this, "indexOf", e);
  },
  join(e) {
    return yn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Or(this, "lastIndexOf", e);
  },
  map(e, t) {
    return yt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return On(this, "pop");
  },
  push(...e) {
    return On(this, "push", e);
  },
  reduce(e, ...t) {
    return _o(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _o(this, "reduceRight", e, t);
  },
  shift() {
    return On(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return yt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return On(this, "splice", e);
  },
  toReversed() {
    return yn(this).toReversed();
  },
  toSorted(e) {
    return yn(this).toSorted(e);
  },
  toSpliced(...e) {
    return yn(this).toSpliced(...e);
  },
  unshift(...e) {
    return On(this, "unshift", e);
  },
  values() {
    return Pr(this, "values", (e) => At(this, e));
  }
};
function Pr(e, t, n) {
  const s = ur(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ qe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const Hu = Array.prototype;
function yt(e, t, n, s, r, i) {
  const o = ur(e), l = o !== e && !/* @__PURE__ */ qe(e), a = o[t];
  if (a !== Hu[t]) {
    const A = a.apply(e, i);
    return l ? Ye(A) : A;
  }
  let c = n;
  o !== e && (l ? c = function(A, p) {
    return n.call(this, At(e, A), p, e);
  } : n.length > 2 && (c = function(A, p) {
    return n.call(this, A, p, e);
  }));
  const d = a.call(o, c, s);
  return l && r ? r(d) : d;
}
function _o(e, t, n, s) {
  const r = ur(e), i = r !== e && !/* @__PURE__ */ qe(e);
  let o = n, l = !1;
  r !== e && (i ? (l = s.length === 0, o = function(c, d, A) {
    return l && (l = !1, c = At(e, c)), n.call(this, c, At(e, d), A, e);
  }) : n.length > 3 && (o = function(c, d, A) {
    return n.call(this, c, d, A, e);
  }));
  const a = r[t](o, ...s);
  return l ? At(e, a) : a;
}
function Or(e, t, n) {
  const s = /* @__PURE__ */ ae(e);
  Te(s, "iterate", es);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Mi(n[0]) ? (n[0] = /* @__PURE__ */ ae(n[0]), s[t](...n)) : r;
}
function On(e, t, n = []) {
  Ft(), zi();
  const s = (/* @__PURE__ */ ae(e))[t].apply(e, n);
  return _i(), jt(), s;
}
const Wu = /* @__PURE__ */ ki("__proto__,__v_isRef,__isVue"), la = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gt)
);
function Gu(e) {
  gt(e) || (e = String(e));
  const t = /* @__PURE__ */ ae(this);
  return Te(t, "has", e), t.hasOwnProperty(e);
}
class aa {
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
      return s === (r ? i ? nd : Aa : i ? da : ua).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = se(t);
    if (!r) {
      let a;
      if (o && (a = Vu[n]))
        return a;
      if (n === "hasOwnProperty")
        return Gu;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Pe(t) ? t : s
    );
    if ((gt(n) ? la.has(n) : Wu(n)) || (r || Te(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Pe(l)) {
      const a = o && wi(n) ? l : l.value;
      return r && me(a) ? /* @__PURE__ */ li(a) : a;
    }
    return me(l) ? r ? /* @__PURE__ */ li(l) : /* @__PURE__ */ dr(l) : l;
  }
}
class ca extends aa {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = se(t) && wi(n);
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
    return (!gt(n) || !la.has(n)) && Te(t, "has", n), s;
  }
  ownKeys(t) {
    return Te(
      t,
      "iterate",
      se(t) ? "length" : ln
    ), Reflect.ownKeys(t);
  }
}
class Ku extends aa {
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
const qu = /* @__PURE__ */ new ca(), Yu = /* @__PURE__ */ new Ku(), Ju = /* @__PURE__ */ new ca(!0);
const oi = (e) => e, zs = (e) => Reflect.getPrototypeOf(e);
function Zu(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ ae(r), o = Dt(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = r[e](...s), d = n ? oi : t ? Bt : Ye;
    return !t && Te(
      i,
      "iterate",
      a ? ii : ln
    ), Ue(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: A, done: p } = c.next();
          return p ? { value: A, done: p } : {
            value: l ? [d(A[0]), d(A[1])] : d(A),
            done: p
          };
        }
      }
    );
  };
}
function _s(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xu(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(r);
      e || (ht(r, l) && Te(o, "get", r), Te(o, "get", l));
      const { has: a } = zs(o), c = t ? oi : e ? Bt : Ye;
      if (a.call(o, r))
        return c(i.get(r));
      if (a.call(o, l))
        return c(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Te(/* @__PURE__ */ ae(r), "iterate", ln), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(r);
      return e || (ht(r, l) && Te(o, "has", r), Te(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ ae(l), c = t ? oi : e ? Bt : Ye;
      return !e && Te(a, "iterate", ln), l.forEach((d, A) => r.call(i, c(d), c(A), o));
    }
  };
  return Ue(
    n,
    e ? {
      add: _s("add"),
      set: _s("set"),
      delete: _s("delete"),
      clear: _s("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ ae(this), o = zs(i), l = /* @__PURE__ */ ae(r), a = !t && !/* @__PURE__ */ qe(r) && !/* @__PURE__ */ xt(r) ? l : r;
        return o.has.call(i, a) || ht(r, a) && o.has.call(i, r) || ht(l, a) && o.has.call(i, l) || (i.add(a), zt(i, "add", a, a)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ qe(i) && !/* @__PURE__ */ xt(i) && (i = /* @__PURE__ */ ae(i));
        const o = /* @__PURE__ */ ae(this), { has: l, get: a } = zs(o);
        let c = l.call(o, r);
        c || (r = /* @__PURE__ */ ae(r), c = l.call(o, r));
        const d = a.call(o, r);
        return o.set(r, i), c ? ht(i, d) && zt(o, "set", r, i) : zt(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ ae(this), { has: o, get: l } = zs(i);
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
    n[r] = Zu(r, e, t);
  }), n;
}
function Ci(e, t) {
  const n = Xu(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    fe(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Qu = {
  get: /* @__PURE__ */ Ci(!1, !1)
}, ed = {
  get: /* @__PURE__ */ Ci(!1, !0)
}, td = {
  get: /* @__PURE__ */ Ci(!0, !1)
};
const ua = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap(), nd = /* @__PURE__ */ new WeakMap();
function sd(e) {
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
function dr(e) {
  return /* @__PURE__ */ xt(e) ? e : Ei(
    e,
    !1,
    qu,
    Qu,
    ua
  );
}
// @__NO_SIDE_EFFECTS__
function rd(e) {
  return Ei(
    e,
    !1,
    Ju,
    ed,
    da
  );
}
// @__NO_SIDE_EFFECTS__
function li(e) {
  return Ei(
    e,
    !0,
    Yu,
    td,
    Aa
  );
}
function Ei(e, t, n, s, r) {
  if (!me(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = sd($u(e));
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
function Mi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ae(t) : e;
}
function id(e) {
  return !fe(e, "__v_skip") && Object.isExtensible(e) && Yl(e, "__v_skip", !0), e;
}
const Ye = (e) => me(e) ? /* @__PURE__ */ dr(e) : e, Bt = (e) => me(e) ? /* @__PURE__ */ li(e) : e;
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  return od(e, !1);
}
function od(e, t) {
  return /* @__PURE__ */ Pe(e) ? e : new ld(e, t);
}
class ld {
  constructor(t, n) {
    this.dep = new Si(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ae(t), this._value = n ? t : Ye(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ qe(t) || /* @__PURE__ */ xt(t);
    t = s ? t : /* @__PURE__ */ ae(t), ht(t, n) && (this._rawValue = t, this._value = s ? t : Ye(t), this.dep.trigger());
  }
}
function E(e) {
  return /* @__PURE__ */ Pe(e) ? e.value : e;
}
const ad = {
  get: (e, t, n) => t === "__v_raw" ? e : E(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ Pe(r) && !/* @__PURE__ */ Pe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function fa(e) {
  return /* @__PURE__ */ Lt(e) ? e : new Proxy(e, ad);
}
class cd {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Si(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    pe !== this)
      return ta(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ra(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ud(e, t, n = !1) {
  let s, r;
  return de(e) ? s = e : (s = e.get, r = e.set), new cd(s, r, n);
}
const $s = {}, js = /* @__PURE__ */ new WeakMap();
let Qt;
function dd(e, t = !1, n = Qt) {
  if (n) {
    let s = js.get(n);
    s || js.set(n, s = []), s.push(e);
  }
}
function Ad(e, t, n = ve) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = n, c = (I) => r ? I : /* @__PURE__ */ qe(I) || r === !1 || r === 0 ? _t(I, 1) : _t(I);
  let d, A, p, z, w = !1, x = !1;
  if (/* @__PURE__ */ Pe(e) ? (A = () => e.value, w = /* @__PURE__ */ qe(e)) : /* @__PURE__ */ Lt(e) ? (A = () => c(e), w = !0) : se(e) ? (x = !0, w = e.some((I) => /* @__PURE__ */ Lt(I) || /* @__PURE__ */ qe(I)), A = () => e.map((I) => {
    if (/* @__PURE__ */ Pe(I))
      return I.value;
    if (/* @__PURE__ */ Lt(I))
      return c(I);
    if (de(I))
      return a ? a(I, 2) : I();
  })) : de(e) ? t ? A = a ? () => a(e, 2) : e : A = () => {
    if (p) {
      Ft();
      try {
        p();
      } finally {
        jt();
      }
    }
    const I = Qt;
    Qt = d;
    try {
      return a ? a(e, 3, [z]) : e(z);
    } finally {
      Qt = I;
    }
  } : A = on, t && r) {
    const I = A, F = r === !0 ? 1 / 0 : r;
    A = () => _t(I(), F);
  }
  const _ = ju(), S = () => {
    d.stop(), _ && _.active && Hl(_.effects, d);
  };
  if (i && t) {
    const I = t;
    t = (...F) => {
      const L = I(...F);
      return S(), L;
    };
  }
  let T = x ? new Array(e.length).fill($s) : $s;
  const C = (I) => {
    if (!(!(d.flags & 1) || !d.dirty && !I))
      if (t) {
        const F = d.run();
        if (I || r || w || (x ? F.some((L, B) => ht(L, T[B])) : ht(F, T))) {
          p && p();
          const L = Qt;
          Qt = d;
          try {
            const B = [
              F,
              // pass undefined as the old value when it's changed for the first time
              T === $s ? void 0 : x && T[0] === $s ? [] : T,
              z
            ];
            T = F, a ? a(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            Qt = L;
          }
        }
      } else
        d.run();
  };
  return l && l(C), d = new Ql(A), d.scheduler = o ? () => o(C, !1) : C, z = (I) => dd(I, !1, d), p = d.onStop = () => {
    const I = js.get(d);
    if (I) {
      if (a)
        a(I, 4);
      else
        for (const F of I) F();
      js.delete(d);
    }
  }, t ? s ? C(!0) : T = d.run() : o ? o(C.bind(null, !0), !0) : d.run(), S.pause = d.pause.bind(d), S.resume = d.resume.bind(d), S.stop = S, S;
}
function _t(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Pe(e))
    _t(e.value, t, n);
  else if (se(e))
    for (let s = 0; s < e.length; s++)
      _t(e[s], t, n);
  else if (cn(e) || Dt(e))
    e.forEach((s) => {
      _t(s, t, n);
    });
  else if (Kl(e)) {
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
    Ar(r, t, n);
  }
}
function st(e, t, n, s) {
  if (de(e)) {
    const r = hs(e, t, n, s);
    return r && Wl(r) && r.catch((i) => {
      Ar(i, t, n);
    }), r;
  }
  if (se(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(st(e[i], t, n, s));
    return r;
  }
}
function Ar(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ve;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let A = 0; A < d.length; A++)
          if (d[A](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ft(), hs(i, null, 10, [
        e,
        a,
        c
      ]), jt();
      return;
    }
  }
  fd(e, n, r, s, o);
}
function fd(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Ie = [];
let dt = -1;
const _n = [];
let Pt = null, kn = 0;
const pa = /* @__PURE__ */ Promise.resolve();
let Bs = null;
function ha(e) {
  const t = Bs || pa;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pd(e) {
  let t = dt + 1, n = Ie.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Ie[s], i = ts(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ti(e) {
  if (!(e.flags & 1)) {
    const t = ts(e), n = Ie[Ie.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ts(n) ? Ie.push(e) : Ie.splice(pd(t), 0, e), e.flags |= 1, ma();
  }
}
function ma() {
  Bs || (Bs = pa.then(xa));
}
function hd(e) {
  if (!se(e))
    Pt && e.id === -1 ? Pt.splice(kn + 1, 0, e) : e.flags & 1 || (_n.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      _n.push(e[t]);
  ma();
}
function $o(e, t, n = dt + 1) {
  for (; n < Ie.length; n++) {
    const s = Ie[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ie.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ga(e) {
  if (_n.length) {
    const t = [...new Set(_n)].sort(
      (n, s) => ts(n) - ts(s)
    );
    if (_n.length = 0, Pt) {
      for (let n = 0; n < t.length; n++)
        Pt.push(t[n]);
      return;
    }
    for (Pt = t, kn = 0; kn < Pt.length; kn++) {
      const n = Pt[kn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pt = null, kn = 0;
  }
}
const ts = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xa(e) {
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
    dt = -1, Ie.length = 0, ga(), Bs = null, (Ie.length || _n.length) && xa();
  }
}
let Ke = null, va = null;
function Us(e) {
  const t = Ke;
  return Ke = e, va = e && e.type.__scopeId || null, t;
}
function ya(e, t = Ke, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Ws(-1);
    const i = Us(t), o = an.length;
    let l;
    try {
      l = e(...r);
    } finally {
      for (let a = an.length; a > o; a--) Ba();
      Us(i), s._d && Ws(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function mt(e, t) {
  if (Ke === null)
    return e;
  const n = gr(Ke), s = e.dirs || (e.dirs = []);
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
function Yt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (Ft(), st(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), jt());
  }
}
function md(e, t, n = !1) {
  const s = Ha();
  if (s || $n) {
    let r = $n ? $n._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && de(t) ? t.call(s && s.proxy) : t;
  }
}
const gd = /* @__PURE__ */ Symbol.for("v-scx"), xd = () => md(gd);
function fr(e, t, n) {
  return vd(e, t, n);
}
function vd(e, t, n = ve) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = Ue({}, n), a = t && s || !t && i !== "post";
  let c;
  if (is) {
    if (i === "sync") {
      const z = xd();
      c = z.__watcherHandles || (z.__watcherHandles = []);
    } else if (!a) {
      const z = () => {
      };
      return z.stop = on, z.resume = on, z.pause = on, z;
    }
  }
  const d = Vt;
  l.call = (z, w, x) => st(z, d, w, x);
  let A = !1;
  i === "post" ? l.scheduler = (z) => {
    De(z, d && d.suspense);
  } : i !== "sync" && (A = !0, l.scheduler = (z, w) => {
    w ? z() : Ti(z);
  }), l.augmentJob = (z) => {
    t && (z.flags |= 4), A && (z.flags |= 2, d && (z.id = d.uid, z.i = d));
  };
  const p = Ad(e, t, l);
  return is && (c ? c.push(p) : a && p()), p;
}
const yd = /* @__PURE__ */ Symbol("_vte"), pr = (e) => e.__isTeleport, Ge = /* @__PURE__ */ Symbol("_leaveCb"), Dn = /* @__PURE__ */ Symbol("_enterCb");
function bd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Sa(() => {
    e.isMounted = !0;
  }), Ni(() => {
    e.isUnmounting = !0;
  }), e;
}
const We = [Function, Array], ba = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: We,
  onEnter: We,
  onAfterEnter: We,
  onEnterCancelled: We,
  // leave
  onBeforeLeave: We,
  onLeave: We,
  onAfterLeave: We,
  onLeaveCancelled: We,
  // appear
  onBeforeAppear: We,
  onAppear: We,
  onAfterAppear: We,
  onAppearCancelled: We
}, ka = (e) => {
  const t = e.subTree;
  return t.component ? ka(t.component) : t;
}, kd = {
  name: "BaseTransition",
  props: ba,
  setup(e, { slots: t }) {
    const n = Ha(), s = bd();
    return () => {
      const r = t.default && _a(t.default(), !0), i = r && r.length ? wa(r) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? j() : void 0
      );
      if (!i)
        return;
      const o = /* @__PURE__ */ ae(e), { mode: l } = o;
      if (s.isLeaving)
        return Dr(i);
      const a = Vs(i);
      if (!a)
        return Dr(i);
      let c = ai(
        a,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (A) => c = A
      );
      a.type !== Ne && ns(a, c);
      let d = n.subTree && Vs(n.subTree);
      if (d && d.type !== Ne && !en(d, a) && ka(n).type !== Ne) {
        let A = ai(
          d,
          o,
          s,
          n
        );
        if (ns(d, A), l === "out-in" && a.type !== Ne)
          return s.isLeaving = !0, A.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete A.afterLeave, d = void 0;
          }, Dr(i);
        l === "in-out" && a.type !== Ne ? A.delayLeave = (p, z, w) => {
          const x = za(
            s,
            d
          );
          x[String(d.key)] = d, p[Ge] = () => {
            z(), p[Ge] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            w(), delete c.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return i;
    };
  }
};
function wa(e) {
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
const wd = kd;
function za(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function ai(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: d,
    onEnterCancelled: A,
    onBeforeLeave: p,
    onLeave: z,
    onAfterLeave: w,
    onLeaveCancelled: x,
    onBeforeAppear: _,
    onAppear: S,
    onAfterAppear: T,
    onAppearCancelled: C
  } = t, I = String(e.key), F = za(n, e), L = (H, m) => {
    H && st(
      H,
      s,
      9,
      m
    );
  }, B = (H, m) => {
    const g = m[1];
    L(H, m), se(H) ? H.every((y) => y.length <= 1) && g() : H.length <= 1 && g();
  }, re = {
    mode: o,
    persisted: l,
    beforeEnter(H) {
      let m = a;
      if (!n.isMounted)
        if (i)
          m = _ || a;
        else
          return;
      H[Ge] && H[Ge](
        !0
        /* cancelled */
      );
      const g = F[I];
      g && en(e, g) && g.el[Ge] && g.el[Ge](), L(m, [H]);
    },
    enter(H) {
      if (F[I] === e) return;
      let m = c, g = d, y = A;
      if (!n.isMounted)
        if (i)
          m = S || c, g = T || d, y = C || A;
        else
          return;
      let D = !1;
      H[Dn] = (le) => {
        D || (D = !0, le ? L(y, [H]) : L(g, [H]), re.delayedLeave && re.delayedLeave(), H[Dn] = void 0);
      };
      const ie = H[Dn].bind(null, !1);
      m ? B(m, [H, ie]) : ie();
    },
    leave(H, m) {
      const g = String(e.key);
      if (H[Dn] && H[Dn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return m();
      L(p, [H]);
      let y = !1;
      H[Ge] = (ie) => {
        y || (y = !0, m(), ie ? L(x, [H]) : L(w, [H]), H[Ge] = void 0, F[g] === e && delete F[g]);
      };
      const D = H[Ge].bind(null, !1);
      F[g] = e, z ? B(z, [H, D]) : D();
    },
    clone(H) {
      const m = ai(
        H,
        t,
        n,
        s,
        r
      );
      return r && r(m), m;
    }
  };
  return re;
}
function Dr(e) {
  if (Ii(e))
    return e = Ut(e), e.children = null, e;
}
function Vs(e) {
  if (!Ii(e))
    return pr(e.type) && e.children ? wa(e.children) : e;
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
      pr(n.type) && Vs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function _a(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === X ? (o.patchFlag & 128 && r++, s = s.concat(
      _a(o.children, t, l)
    )) : (t || o.type !== Ne) && s.push(l != null ? Ut(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  return de(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ue({ name: e.name }, t, { setup: e })
  ) : e;
}
function zd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function So(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Hs = /* @__PURE__ */ new WeakMap();
function Gn(e, t, n, s, r = !1) {
  if (se(e)) {
    e.forEach(
      (x, _) => Gn(
        x,
        t && (se(t) ? t[_] : t),
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
  const i = s.shapeFlag & 4 ? gr(s.component) : s.el, o = r ? null : i, { i: l, r: a } = e, c = t && t.r, d = l.refs === ve ? l.refs = {} : l.refs, A = l.setupState, p = /* @__PURE__ */ ae(A), z = A === ve ? Vl : (x) => So(d, x) ? !1 : fe(p, x), w = (x, _) => !(_ && So(d, _));
  if (c != null && c !== a) {
    if (Co(t), be(c))
      d[c] = null, z(c) && (A[c] = null);
    else if (/* @__PURE__ */ Pe(c)) {
      const x = t;
      w(c, x.k) && (c.value = null), x.k && (d[x.k] = null);
    }
  }
  if (de(a))
    hs(a, l, 12, [o, d]);
  else {
    const x = be(a), _ = /* @__PURE__ */ Pe(a);
    if (x || _) {
      const S = () => {
        if (e.f) {
          const T = x ? z(a) ? A[a] : d[a] : w() || !e.k ? a.value : d[e.k];
          if (r)
            se(T) && Hl(T, i);
          else if (se(T))
            T.includes(i) || T.push(i);
          else if (x)
            d[a] = [i], z(a) && (A[a] = d[a]);
          else {
            const C = [i];
            w(a, e.k) && (a.value = C), e.k && (d[e.k] = C);
          }
        } else x ? (d[a] = o, z(a) && (A[a] = o)) : _ && (w(a, e.k) && (a.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const T = () => {
          S(), Hs.delete(e);
        };
        T.id = -1, Hs.set(e, T), De(T, n);
      } else
        Co(e), S();
    }
  }
}
function Co(e) {
  const t = Hs.get(e);
  t && (t.flags |= 8, Hs.delete(e));
}
ar().requestIdleCallback;
ar().cancelIdleCallback;
const Kn = (e) => !!e.type.__asyncLoader, Ii = (e) => e.type.__isKeepAlive;
function _d(e, t, n = Vt, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ft();
      const l = Di(n), a = st(t, n, e, o);
      return l(), jt(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const $a = (e) => (t, n = Vt) => {
  (!is || e === "sp") && _d(e, (...s) => t(...s), n);
}, Sa = $a("m"), Ni = $a(
  "bum"
), $d = /* @__PURE__ */ Symbol.for("v-ndc");
function ce(e, t, n, s) {
  let r;
  const i = n, o = se(e);
  if (o || be(e)) {
    const l = o && /* @__PURE__ */ Lt(e);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ qe(e), c = /* @__PURE__ */ xt(e), e = ur(e)), r = new Array(e.length);
    for (let d = 0, A = e.length; d < A; d++)
      r[d] = t(
        a ? c ? Bt(Ye(e[d])) : Ye(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (me(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, a) => t(l, a, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const d = l[a];
        r[a] = t(e[d], d, a, i);
      }
    }
  else
    r = [];
  return r;
}
const ci = (e) => e ? Wa(e) ? gr(e) : ci(e.parent) : null, qn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ue(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ci(e.parent),
    $root: (e) => ci(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ti(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ha.bind(e.proxy)),
    $watch: (e) => on
  })
), Lr = (e, t) => e !== ve && !e.__isScriptSetup && fe(e, t), Sd = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const p = o[t];
      if (p !== void 0)
        switch (p) {
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
        if (Lr(s, t))
          return o[t] = 1, s[t];
        if (fe(i, t))
          return o[t] = 3, i[t];
        if (n !== ve && fe(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = qn[t];
    let d, A;
    if (c)
      return t === "$attrs" && Te(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== ve && fe(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      A = a.config.globalProperties, fe(A, t)
    )
      return A[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Lr(r, t) ? (r[t] = n, !0) : fe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let a;
    return !!(n[l] || Lr(t, l) || fe(i, l) || fe(s, l) || fe(qn, l) || fe(r.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : fe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ca() {
  return {
    app: null,
    config: {
      isNativeTag: Vl,
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
let Cd = 0;
function Ed(e, t) {
  return function(s, r = null) {
    de(s) || (s = Ue({}, s)), r != null && !me(r) && (r = null);
    const i = Ca(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = i.app = {
      _uid: Cd++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: oA,
      get config() {
        return i.config;
      },
      set config(d) {
      },
      use(d, ...A) {
        return o.has(d) || (d && de(d.install) ? (o.add(d), d.install(c, ...A)) : de(d) && (o.add(d), d(c, ...A))), c;
      },
      mixin(d) {
        return c;
      },
      component(d, A) {
        return A ? (i.components[d] = A, c) : i.components[d];
      },
      directive(d, A) {
        return A ? (i.directives[d] = A, c) : i.directives[d];
      },
      mount(d, A, p) {
        if (!a) {
          const z = c._ceVNode || Ee(s, r);
          return z.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(z, d, p), a = !0, c._container = d, d.__vue_app__ = c, gr(z.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        a && (st(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, A) {
        return i.provides[d] = A, c;
      },
      runWithContext(d) {
        const A = $n;
        $n = c;
        try {
          return d();
        } finally {
          $n = A;
        }
      }
    };
    return c;
  };
}
let $n = null;
const Md = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${et(t)}Modifiers`] || e[`${pn(t)}Modifiers`];
function Td(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ve;
  let r = n;
  const i = t.startsWith("update:"), o = i && Md(s, t.slice(7));
  o && (o.trim && (r = n.map((d) => be(d) ? d.trim() : d)), o.number && (r = r.map(lr)));
  let l, a = s[l = Tr(t)] || // also try camelCase event handler (#2249)
  s[l = Tr(et(t))];
  !a && i && (a = s[l = Tr(pn(t))]), a && st(
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
function Id(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {};
  return i ? (se(i) ? i.forEach((l) => o[l] = null) : Ue(o, i), me(e) && s.set(e, o), o) : (me(e) && s.set(e, null), null);
}
function hr(e, t) {
  return !e || !rr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), fe(e, t[0].toLowerCase() + t.slice(1)) || fe(e, pn(t)) || fe(e, t));
}
function Eo(e) {
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
    renderCache: d,
    props: A,
    data: p,
    setupState: z,
    ctx: w,
    inheritAttrs: x
  } = e, _ = Us(e);
  let S, T;
  try {
    if (n.shapeFlag & 4) {
      const I = r || s, F = I;
      S = ft(
        c.call(
          F,
          I,
          d,
          A,
          z,
          p,
          w
        )
      ), T = l;
    } else {
      const I = t;
      S = ft(
        I.length > 1 ? I(
          A,
          { attrs: l, slots: o, emit: a }
        ) : I(
          A,
          null
        )
      ), T = t.props ? l : Nd(l);
    }
  } catch (I) {
    an.length = 0, Ar(I, e, 1), S = Ee(Ne);
  }
  let C = S;
  if (T && x !== !1) {
    const I = Object.keys(T), { shapeFlag: F } = C;
    I.length && F & 7 && (i && I.some(ir) && (T = Pd(
      T,
      i
    )), C = Ut(C, T, !1, !0));
  }
  if (n.dirs && (C = Ut(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const I = pr(C.type) && Vs(C) || C;
    ns(I, n.transition);
  }
  return S = C, Us(_), S;
}
const Nd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || rr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Pd = (e, t) => {
  const n = {};
  for (const s in e)
    (!ir(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Od(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: a } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Mo(s, o, c) : !!o;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let A = 0; A < d.length; A++) {
        const p = d[A];
        if (Ea(o, s, p) && !hr(c, p))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Mo(s, o, c) : !0 : !!o;
  return !1;
}
function Mo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (Ea(t, e, i) && !hr(n, i))
      return !0;
  }
  return !1;
}
function Ea(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && me(s) && me(r) ? !Rt(s, r) : s !== r;
}
function Dd({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Ma = {}, Ta = () => Object.create(Ma), Ia = (e) => Object.getPrototypeOf(e) === Ma;
function Ld(e, t, n, s = !1) {
  const r = {}, i = Ta();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Na(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ rd(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Rd(e, t, n, s) {
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
      const d = e.vnode.dynamicProps;
      for (let A = 0; A < d.length; A++) {
        let p = d[A];
        if (hr(e.emitsOptions, p))
          continue;
        const z = t[p];
        if (a)
          if (fe(i, p))
            z !== i[p] && (i[p] = z, c = !0);
          else {
            const w = et(p);
            r[w] = ui(
              a,
              l,
              w,
              z,
              e,
              !1
            );
          }
        else
          z !== i[p] && (i[p] = z, c = !0);
      }
    }
  } else {
    Na(e, t, r, i) && (c = !0);
    let d;
    for (const A in l)
      (!t || // for camelCase
      !fe(t, A) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = pn(A)) === A || !fe(t, d))) && (a ? n && // for camelCase
      (n[A] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[A] = ui(
        a,
        l,
        A,
        void 0,
        e,
        !0
      )) : delete r[A]);
    if (i !== l)
      for (const A in i)
        (!t || !fe(t, A)) && (delete i[A], c = !0);
  }
  c && zt(e.attrs, "set", "");
}
function Na(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (Vn(a))
        continue;
      const c = t[a];
      let d;
      r && fe(r, d = et(a)) ? !i || !i.includes(d) ? n[d] = c : (l || (l = {}))[d] = c : hr(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ ae(n), c = l || ve;
    for (let d = 0; d < i.length; d++) {
      const A = i[d];
      n[A] = ui(
        r,
        a,
        A,
        c[A],
        e,
        !fe(c, A)
      );
    }
  }
  return o;
}
function ui(e, t, n, s, r, i) {
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
          const d = Di(r);
          s = c[n] = a.call(
            null,
            t
          ), d();
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
    ] && (s === "" || s === pn(n)) && (s = !0));
  }
  return s;
}
function Fd(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  if (!i)
    return me(e) && s.set(e, nn), nn;
  if (se(i))
    for (let c = 0; c < i.length; c++) {
      const d = et(i[c]);
      To(d) && (o[d] = ve);
    }
  else if (i)
    for (const c in i) {
      const d = et(c);
      if (To(d)) {
        const A = i[c], p = o[d] = se(A) || de(A) ? { type: A } : Ue({}, A), z = p.type;
        let w = !1, x = !0;
        if (se(z))
          for (let _ = 0; _ < z.length; ++_) {
            const S = z[_], T = de(S) && S.name;
            if (T === "Boolean") {
              w = !0;
              break;
            } else T === "String" && (x = !1);
          }
        else
          w = de(z) && z.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = w, p[
          1
          /* shouldCastTrue */
        ] = x, (w || fe(p, "default")) && l.push(d);
      }
    }
  const a = [o, l];
  return me(e) && s.set(e, a), a;
}
function To(e) {
  return e[0] !== "$" && !Vn(e);
}
const Pi = (e) => e === "_" || e === "_ctx" || e === "$stable", Oi = (e) => se(e) ? e.map(ft) : [ft(e)], jd = (e, t, n) => {
  if (t._n)
    return t;
  const s = ya((...r) => Oi(t(...r)), n);
  return s._c = !1, s;
}, Pa = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Pi(r)) continue;
    const i = e[r];
    if (de(i))
      t[r] = jd(r, i, s);
    else if (i != null) {
      const o = Oi(i);
      t[r] = () => o;
    }
  }
}, Oa = (e, t) => {
  const n = Oi(t);
  e.slots.default = () => n;
}, Da = (e, t, n) => {
  for (const s in t)
    (n || !Pi(s)) && (e[s] = t[s]);
}, Bd = (e, t, n) => {
  const s = e.slots = Ta();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Da(s, t, n), n && Yl(s, "_", r, !0)) : Pa(t, s);
  } else t && Oa(e, t);
}, Ud = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = ve;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Da(r, t, n) : (i = !t.$stable, Pa(t, r)), o = t;
  } else t && (Oa(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Pi(l) && o[l] == null && delete r[l];
}, De = Kd;
function Vd(e) {
  return Hd(e);
}
function Hd(e, t) {
  const n = ar();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: d,
    parentNode: A,
    nextSibling: p,
    setScopeId: z = on,
    insertStaticContent: w
  } = e, x = (h, b, M, R = null, N = null, O = null, G = void 0, W = null, V = !!b.dynamicChildren) => {
    if (h === b)
      return;
    h && !en(h, b) && (R = ws(h), J(h, N, O, !0), h = null), b.patchFlag === -2 && (V = !1, b.dynamicChildren = null), b.dynamicChildren && h && h.dynamicChildren && h.dynamicChildren.hasOnce && (b.dynamicChildren === nn && (b.dynamicChildren = []), b.dynamicChildren.hasOnce = !0);
    const { type: P, ref: te, shapeFlag: q } = b;
    switch (P) {
      case mr:
        _(h, b, M, R);
        break;
      case Ne:
        S(h, b, M, R);
        break;
      case Fr:
        h == null && T(b, M, R, G);
        break;
      case X:
        y(
          h,
          b,
          M,
          R,
          N,
          O,
          G,
          W,
          V
        );
        break;
      default:
        q & 1 ? F(
          h,
          b,
          M,
          R,
          N,
          O,
          G,
          W,
          V
        ) : q & 6 ? D(
          h,
          b,
          M,
          R,
          N,
          O,
          G,
          W,
          V
        ) : (q & 64 || q & 128) && P.process(
          h,
          b,
          M,
          R,
          N,
          O,
          G,
          W,
          V,
          Nn
        );
    }
    te != null && N ? Gn(te, h && h.ref, O, b || h, !b) : te == null && h && h.ref != null && Gn(h.ref, null, O, h, !0);
  }, _ = (h, b, M, R) => {
    if (h == null)
      s(
        b.el = l(b.children),
        M,
        R
      );
    else {
      const N = b.el = h.el;
      b.children !== h.children && c(N, b.children);
    }
  }, S = (h, b, M, R) => {
    h == null ? s(
      b.el = a(b.children || ""),
      M,
      R
    ) : b.el = h.el;
  }, T = (h, b, M, R) => {
    [h.el, h.anchor] = w(
      h.children,
      b,
      M,
      R,
      h.el,
      h.anchor
    );
  }, C = ({ el: h, anchor: b }, M, R) => {
    let N;
    for (; h && h !== b; )
      N = p(h), s(h, M, R), h = N;
    s(b, M, R);
  }, I = ({ el: h, anchor: b }) => {
    let M;
    for (; h && h !== b; )
      M = p(h), r(h), h = M;
    r(b);
  }, F = (h, b, M, R, N, O, G, W, V) => {
    if (b.type === "svg" ? G = "svg" : b.type === "math" && (G = "mathml"), h == null)
      L(
        b,
        M,
        R,
        N,
        O,
        G,
        W,
        V
      );
    else {
      const P = h.el && h.el._isVueCE ? h.el : null;
      try {
        P && P._beginPatch(), H(
          h,
          b,
          N,
          O,
          G,
          W,
          V
        );
      } finally {
        P && P._endPatch();
      }
    }
  }, L = (h, b, M, R, N, O, G, W) => {
    let V, P;
    const { props: te, shapeFlag: q, transition: ee, dirs: ne } = h;
    if (V = h.el = o(
      h.type,
      O,
      te && te.is,
      te
    ), q & 8 ? d(V, h.children) : q & 16 && re(
      h.children,
      V,
      null,
      R,
      N,
      Rr(h, O),
      G,
      W
    ), ne && Yt(h, null, R, "created"), B(V, h, h.scopeId, G, R), te) {
      for (const Ae in te)
        Ae !== "value" && !Vn(Ae) && i(V, Ae, null, te[Ae], O, R);
      "value" in te && i(V, "value", null, te.value, O), (P = te.onVnodeBeforeMount) && ut(P, R, h);
    }
    ne && Yt(h, null, R, "beforeMount");
    const oe = Wd(N, ee);
    oe && ee.beforeEnter(V), s(V, b, M), ((P = te && te.onVnodeMounted) || oe || ne) && De(() => {
      try {
        P && ut(P, R, h), oe && ee.enter(V), ne && Yt(h, null, R, "mounted");
      } finally {
      }
    }, N);
  }, B = (h, b, M, R, N) => {
    if (M && z(h, M), R)
      for (let O = 0; O < R.length; O++)
        z(h, R[O]);
    if (N) {
      let O = N.subTree;
      if (b === O || ja(O.type) && (O.ssContent === b || O.ssFallback === b)) {
        const G = N.vnode;
        B(
          h,
          G,
          G.scopeId,
          G.slotScopeIds,
          N.parent
        );
      }
    }
  }, re = (h, b, M, R, N, O, G, W, V = 0) => {
    for (let P = V; P < h.length; P++) {
      const te = h[P] = W ? wt(h[P]) : ft(h[P]);
      x(
        null,
        te,
        b,
        M,
        R,
        N,
        O,
        G,
        W
      );
    }
  }, H = (h, b, M, R, N, O, G) => {
    const W = b.el = h.el;
    let { patchFlag: V, dynamicChildren: P, dirs: te } = b;
    V |= h.patchFlag & 16;
    const q = h.props || ve, ee = b.props || ve;
    let ne;
    if (M && Jt(M, !1), (ne = ee.onVnodeBeforeUpdate) && ut(ne, M, b, h), te && Yt(b, h, M, "beforeUpdate"), M && Jt(M, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    P && (!h.dynamicChildren || h.dynamicChildren.length !== P.length) && (V = 0, G = !1, P = null), (q.innerHTML && ee.innerHTML == null || q.textContent && ee.textContent == null) && d(W, ""), P ? m(
      h.dynamicChildren,
      P,
      W,
      M,
      R,
      Rr(b, N),
      O
    ) : G || Qe(
      h,
      b,
      W,
      null,
      M,
      R,
      Rr(b, N),
      O,
      !1
    ), V > 0) {
      if (V & 16)
        g(W, q, ee, M, N);
      else if (V & 2 && q.class !== ee.class && i(W, "class", null, ee.class, N), V & 4 && i(W, "style", q.style, ee.style, N), V & 8) {
        const oe = b.dynamicProps;
        for (let Ae = 0; Ae < oe.length; Ae++) {
          const ue = oe[Ae], ke = q[ue], Se = ee[ue];
          (Se !== ke || ue === "value") && i(W, ue, ke, Se, N, M);
        }
      }
      V & 1 && h.children !== b.children && d(W, b.children);
    } else !G && P == null && g(W, q, ee, M, N);
    ((ne = ee.onVnodeUpdated) || te) && De(() => {
      ne && ut(ne, M, b, h), te && Yt(b, h, M, "updated");
    }, R);
  }, m = (h, b, M, R, N, O, G) => {
    for (let W = 0; W < b.length; W++) {
      const V = h[W], P = b[W], te = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        V.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (V.type === X || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !en(V, P) || // - In the case of a component, it could contain anything.
        V.shapeFlag & 198) ? A(V.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          M
        )
      );
      x(
        V,
        P,
        te,
        null,
        R,
        N,
        O,
        G,
        !0
      );
    }
  }, g = (h, b, M, R, N) => {
    if (b !== M) {
      if (b !== ve)
        for (const O in b)
          !Vn(O) && !(O in M) && i(
            h,
            O,
            b[O],
            null,
            N,
            R
          );
      for (const O in M) {
        if (Vn(O)) continue;
        const G = M[O], W = b[O];
        G !== W && O !== "value" && i(h, O, W, G, N, R);
      }
      "value" in M && i(h, "value", b.value, M.value, N);
    }
  }, y = (h, b, M, R, N, O, G, W, V) => {
    const P = b.el = h ? h.el : l(""), te = b.anchor = h ? h.anchor : l("");
    let { patchFlag: q, dynamicChildren: ee, slotScopeIds: ne } = b;
    ne && (W = W ? W.concat(ne) : ne), h == null ? (s(P, M, R), s(te, M, R), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      M,
      te,
      N,
      O,
      G,
      W,
      V
    )) : q > 0 && q & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === ee.length ? (m(
      h.dynamicChildren,
      ee,
      M,
      N,
      O,
      G,
      W
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || N && b === N.subTree) && La(
      h,
      b,
      !0
      /* shallow */
    )) : Qe(
      h,
      b,
      M,
      te,
      N,
      O,
      G,
      W,
      V
    );
  }, D = (h, b, M, R, N, O, G, W, V) => {
    b.slotScopeIds = W, h == null ? b.shapeFlag & 512 ? N.ctx.activate(
      b,
      M,
      R,
      G,
      V
    ) : ie(
      b,
      M,
      R,
      N,
      O,
      G,
      V
    ) : le(h, b, V);
  }, ie = (h, b, M, R, N, O, G) => {
    const W = h.component = Qd(
      h,
      R,
      N
    );
    if (Ii(h) && (W.ctx.renderer = Nn), eA(W, !1, G), W.asyncDep) {
      if (N && N.registerDep(W, Oe, G), !h.el) {
        const V = W.subTree = Ee(Ne);
        S(null, V, b, M), h.placeholder = V.el;
      }
    } else
      Oe(
        W,
        h,
        b,
        M,
        N,
        O,
        G
      );
  }, le = (h, b, M) => {
    const R = b.component = h.component;
    if (Od(h, b, M))
      if (R.asyncDep && !R.asyncResolved) {
        b.el = h.el, ot(R, b, M);
        return;
      } else
        R.next = b, R.update();
    else
      b.el = h.el, R.vnode = b;
  }, Oe = (h, b, M, R, N, O, G) => {
    const W = () => {
      if (h.isMounted) {
        let { next: q, bu: ee, u: ne, parent: oe, vnode: Ae } = h;
        {
          const at = Ra(h);
          if (at) {
            q && (q.el = Ae.el, ot(h, q, G)), at.asyncDep.then(() => {
              De(() => {
                h.isUnmounted || P();
              }, N);
            });
            return;
          }
        }
        let ue = q, ke;
        Jt(h, !1), q ? (q.el = Ae.el, ot(h, q, G)) : q = Ae, ee && Ns(ee), (ke = q.props && q.props.onVnodeBeforeUpdate) && ut(ke, oe, q, Ae), Jt(h, !0);
        const Se = Eo(h), lt = h.subTree;
        h.subTree = Se, x(
          lt,
          Se,
          // parent may have changed if it's in a teleport
          A(lt.el),
          // anchor may have changed if it's in a fragment
          ws(lt),
          h,
          N,
          O
        ), q.el = Se.el, ue === null && Dd(h, Se.el), ne && De(ne, N), (ke = q.props && q.props.onVnodeUpdated) && De(
          () => ut(ke, oe, q, Ae),
          N
        );
      } else {
        let q;
        const { el: ee, props: ne } = b, { bm: oe, m: Ae, parent: ue, root: ke, type: Se } = h, lt = Kn(b);
        Jt(h, !1), oe && Ns(oe), !lt && (q = ne && ne.onVnodeBeforeMount) && ut(q, ue, b), Jt(h, !0);
        {
          ke.ce && ke.ce._hasShadowRoot() && ke.ce._injectChildStyle(
            Se,
            h.parent ? h.parent.type : void 0
          );
          const at = h.subTree = Eo(h);
          x(
            null,
            at,
            M,
            R,
            h,
            N,
            O
          ), b.el = at.el;
        }
        if (Ae && De(Ae, N), !lt && (q = ne && ne.onVnodeMounted)) {
          const at = b;
          De(
            () => ut(q, ue, at),
            N
          );
        }
        (b.shapeFlag & 256 || ue && Kn(ue.vnode) && ue.vnode.shapeFlag & 256) && h.a && De(h.a, N), h.isMounted = !0, b = M = R = null;
      }
    };
    h.scope.on();
    const V = h.effect = new Ql(W);
    h.scope.off();
    const P = h.update = V.run.bind(V), te = h.job = V.runIfDirty.bind(V);
    te.i = h, te.id = h.uid, V.scheduler = () => Ti(te), Jt(h, !0), P();
  }, ot = (h, b, M) => {
    b.component = h;
    const R = h.vnode.props;
    h.vnode = b, h.next = null, Rd(h, b.props, R, M), Ud(h, b.children, M), Ft(), $o(h), jt();
  }, Qe = (h, b, M, R, N, O, G, W, V = !1) => {
    const P = h && h.children, te = h ? h.shapeFlag : 0, q = b.children, { patchFlag: ee, shapeFlag: ne } = b;
    if (ee > 0) {
      if (ee & 128) {
        qt(
          P,
          q,
          M,
          R,
          N,
          O,
          G,
          W,
          V
        );
        return;
      } else if (ee & 256) {
        vn(
          P,
          q,
          M,
          R,
          N,
          O,
          G,
          W,
          V
        );
        return;
      }
    }
    ne & 8 ? (te & 16 && Mt(P, N, O), q !== P && d(M, q)) : te & 16 ? ne & 16 ? qt(
      P,
      q,
      M,
      R,
      N,
      O,
      G,
      W,
      V
    ) : Mt(P, N, O, !0) : (te & 8 && d(M, ""), ne & 16 && re(
      q,
      M,
      R,
      N,
      O,
      G,
      W,
      V
    ));
  }, vn = (h, b, M, R, N, O, G, W, V) => {
    h = h || nn, b = b || nn;
    const P = h.length, te = b.length, q = Math.min(P, te);
    let ee;
    for (ee = 0; ee < q; ee++) {
      const ne = b[ee] = V ? wt(b[ee]) : ft(b[ee]);
      x(
        h[ee],
        ne,
        M,
        null,
        N,
        O,
        G,
        W,
        V
      );
    }
    P > te ? Mt(
      h,
      N,
      O,
      !0,
      !1,
      q
    ) : re(
      b,
      M,
      R,
      N,
      O,
      G,
      W,
      V,
      q
    );
  }, qt = (h, b, M, R, N, O, G, W, V) => {
    let P = 0;
    const te = b.length;
    let q = h.length - 1, ee = te - 1;
    for (; P <= q && P <= ee; ) {
      const ne = h[P], oe = b[P] = V ? wt(b[P]) : ft(b[P]);
      if (en(ne, oe))
        x(
          ne,
          oe,
          M,
          null,
          N,
          O,
          G,
          W,
          V
        );
      else
        break;
      P++;
    }
    for (; P <= q && P <= ee; ) {
      const ne = h[q], oe = b[ee] = V ? wt(b[ee]) : ft(b[ee]);
      if (en(ne, oe))
        x(
          ne,
          oe,
          M,
          null,
          N,
          O,
          G,
          W,
          V
        );
      else
        break;
      q--, ee--;
    }
    if (P > q) {
      if (P <= ee) {
        const ne = ee + 1, oe = ne < te ? b[ne].el : R;
        for (; P <= ee; )
          x(
            null,
            b[P] = V ? wt(b[P]) : ft(b[P]),
            M,
            oe,
            N,
            O,
            G,
            W,
            V
          ), P++;
      }
    } else if (P > ee)
      for (; P <= q; )
        J(h[P], N, O, !0), P++;
    else {
      const ne = P, oe = P, Ae = /* @__PURE__ */ new Map();
      for (P = oe; P <= ee; P++) {
        const Fe = b[P] = V ? wt(b[P]) : ft(b[P]);
        Fe.key != null && Ae.set(Fe.key, P);
      }
      let ue, ke = 0;
      const Se = ee - oe + 1;
      let lt = !1, at = 0;
      const Pn = new Array(Se);
      for (P = 0; P < Se; P++) Pn[P] = 0;
      for (P = ne; P <= q; P++) {
        const Fe = h[P];
        if (ke >= Se) {
          J(Fe, N, O, !0);
          continue;
        }
        let ct;
        if (Fe.key != null)
          ct = Ae.get(Fe.key);
        else
          for (ue = oe; ue <= ee; ue++)
            if (Pn[ue - oe] === 0 && en(Fe, b[ue])) {
              ct = ue;
              break;
            }
        ct === void 0 ? J(Fe, N, O, !0) : (Pn[ct - oe] = P + 1, ct >= at ? at = ct : lt = !0, x(
          Fe,
          b[ct],
          M,
          null,
          N,
          O,
          G,
          W,
          V
        ), ke++);
      }
      const go = lt ? Gd(Pn) : nn;
      for (ue = go.length - 1, P = Se - 1; P >= 0; P--) {
        const Fe = oe + P, ct = b[Fe], xo = b[Fe + 1], vo = Fe + 1 < te ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xo.el || Fa(xo)
        ) : R;
        Pn[P] === 0 ? x(
          null,
          ct,
          M,
          vo,
          N,
          O,
          G,
          W,
          V
        ) : lt && (ue < 0 || P !== go[ue] ? U(ct, M, vo, 2) : ue--);
      }
    }
  }, U = (h, b, M, R, N = null) => {
    const { el: O, type: G, transition: W, children: V, shapeFlag: P } = h;
    if (P & 6) {
      U(h.component.subTree, b, M, R);
      return;
    }
    if (P & 128) {
      h.suspense.move(b, M, R);
      return;
    }
    if (P & 64) {
      G.move(h, b, M, Nn);
      return;
    }
    if (G === X) {
      s(O, b, M);
      for (let q = 0; q < V.length; q++)
        U(V[q], b, M, R);
      s(h.anchor, b, M);
      return;
    }
    if (G === Fr) {
      C(h, b, M);
      return;
    }
    if (R !== 2 && P & 1 && W)
      if (R === 0)
        W.persisted && !O[Ge] ? s(O, b, M) : (W.beforeEnter(O), s(O, b, M), De(() => W.enter(O), N));
      else {
        const { leave: q, delayLeave: ee, afterLeave: ne } = W, oe = () => {
          h.ctx.isUnmounted ? r(O) : s(O, b, M);
        }, Ae = () => {
          const ue = O._isLeaving || !!O[Ge];
          O._isLeaving && O[Ge](
            !0
            /* cancelled */
          ), W.persisted && !ue ? oe() : q(O, () => {
            oe(), ne && ne();
          });
        };
        ee ? ee(O, oe, Ae) : Ae();
      }
    else
      s(O, b, M);
  }, J = (h, b, M, R = !1, N = !1) => {
    const {
      type: O,
      props: G,
      ref: W,
      children: V,
      dynamicChildren: P,
      shapeFlag: te,
      patchFlag: q,
      dirs: ee,
      cacheIndex: ne,
      memo: oe
    } = h;
    if ((q === -2 || P && P.hasOnce) && (N = !1), W != null && (Ft(), Gn(W, null, M, h, !0), jt()), ne != null && (!h.ctx || h.ctx === b) && (b.renderCache[ne] = void 0), te & 256) {
      b.ctx.deactivate(h);
      return;
    }
    const Ae = te & 1 && ee, ue = !Kn(h);
    let ke;
    if (ue && (ke = G && G.onVnodeBeforeUnmount) && ut(ke, b, h), te & 6)
      ks(h.component, M, R);
    else {
      if (te & 128) {
        h.suspense.unmount(M, R);
        return;
      }
      Ae && Yt(h, null, b, "beforeUnmount"), te & 64 ? h.type.remove(
        h,
        b,
        M,
        Nn,
        R
      ) : P && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !P.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (O !== X || q > 0 && q & 64) ? Mt(
        P,
        b,
        M,
        !1,
        !0
      ) : (O === X && q & 384 || !N && te & 16) && Mt(V, b, M), R && Y(h);
    }
    const Se = oe != null && ne == null;
    (ue && (ke = G && G.onVnodeUnmounted) || Ae || Se) && De(() => {
      ke && ut(ke, b, h), Ae && Yt(h, null, b, "unmounted"), Se && (h.el = null);
    }, M);
  }, Y = (h) => {
    const { type: b, el: M, anchor: R, transition: N } = h;
    if (b === X) {
      xe(M, R);
      return;
    }
    if (b === Fr) {
      I(h), N && !N.persisted && N.afterLeave && N.afterLeave();
      return;
    }
    const O = () => {
      r(M), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (h.shapeFlag & 1 && N && !N.persisted) {
      const { leave: G, delayLeave: W } = N, V = () => G(M, O);
      W ? W(h.el, O, V) : V();
    } else
      O();
  }, xe = (h, b) => {
    let M;
    for (; h !== b; )
      M = p(h), r(h), h = M;
    r(b);
  }, ks = (h, b, M) => {
    const { bum: R, scope: N, job: O, subTree: G, um: W, m: V, a: P } = h;
    Io(V), Io(P), R && Ns(R), N.stop(), O ? (O.flags |= 8, J(G, h, b, M)) : h.vnode.el && G && (G.transition = h.vnode.transition, J(G, h, b, M)), W && De(W, b), De(() => {
      h.isUnmounted = !0;
    }, b);
  }, Mt = (h, b, M, R = !1, N = !1, O = 0) => {
    for (let G = O; G < h.length; G++)
      J(h[G], b, M, R, N);
  }, ws = (h) => {
    if (h.shapeFlag & 6)
      return ws(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const b = p(h.anchor || h.el), M = b && b[yd];
    return M ? p(M) : b;
  };
  let Mr = !1;
  const mo = (h, b, M) => {
    let R;
    h == null ? b._vnode && (J(b._vnode, null, null, !0), R = b._vnode.component) : x(
      b._vnode || null,
      h,
      b,
      null,
      null,
      null,
      M
    ), b._vnode = h, Mr || (Mr = !0, $o(R), ga(), Mr = !1);
  }, Nn = {
    p: x,
    um: J,
    m: U,
    r: Y,
    mt: ie,
    mc: re,
    pc: Qe,
    pbc: m,
    n: ws,
    o: e
  };
  return {
    render: mo,
    hydrate: void 0,
    createApp: Ed(mo)
  };
}
function Rr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function La(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (se(s) && se(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = wt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && La(o, l)), l.type === mr && (l.patchFlag === -1 && (l = r[i] = wt(l)), l.el = o.el), l.type === Ne && !l.el && (l.el = o.el);
    }
}
function Gd(e) {
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
function Ra(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ra(t);
}
function Io(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Fa(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Fa(t.subTree) : null;
}
const ja = (e) => e.__isSuspense;
function Kd(e, t) {
  t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : hd(e);
}
const X = /* @__PURE__ */ Symbol.for("v-fgt"), mr = /* @__PURE__ */ Symbol.for("v-txt"), Ne = /* @__PURE__ */ Symbol.for("v-cmt"), Fr = /* @__PURE__ */ Symbol.for("v-stc"), an = [];
let je = null;
function v(e = !1) {
  an.push(je = e ? null : []);
}
function Ba() {
  an.pop(), je = an[an.length - 1] || null;
}
let ss = 1;
function Ws(e, t = !1) {
  ss += e, e < 0 && je && t && (je.hasOnce = !0);
}
function Ua(e) {
  return e.dynamicChildren = ss > 0 ? je || nn : null, Ba(), ss > 0 && je && je.push(e), e;
}
function k(e, t, n, s, r, i) {
  return Ua(
    u(
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
function Le(e, t, n, s, r) {
  return Ua(
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
function en(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Va = ({ key: e }) => e ?? null, Ps = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? be(e) || /* @__PURE__ */ Pe(e) || de(e) ? { i: Ke, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, r = null, i = e === X ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Va(t),
    ref: t && Ps(t),
    scopeId: va,
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
  je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && je.push(a), a;
}
const Ee = qd;
function qd(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === $d) && (e = Ne), Gs(e)) {
    const l = Ut(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ks(l, n), ss > 0 && !i && je && (l.shapeFlag & 6 ? je[je.indexOf(e)] = l : je.push(l)), l.patchFlag = -2, l;
  }
  if (rA(e) && (e = e.__vccOpts), t) {
    t = Yd(t);
    let { class: l, style: a } = t;
    l && !be(l) && (t.class = Q(l)), me(a) && (/* @__PURE__ */ Mi(a) && !se(a) && (a = Ue({}, a)), t.style = cr(a));
  }
  const o = be(e) ? 1 : ja(e) ? 128 : pr(e) ? 64 : me(e) ? 4 : de(e) ? 2 : 0;
  return u(
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
function Yd(e) {
  return e ? /* @__PURE__ */ Mi(e) || Ia(e) ? Ue({}, e) : e : null;
}
function Ut(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e, c = t ? Jd(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Va(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? se(i) ? i.concat(Ps(t)) : [i, Ps(t)] : Ps(t)
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
    ssContent: e.ssContent && Ut(e.ssContent),
    ssFallback: e.ssFallback && Ut(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && ns(
    d,
    a.clone(d)
  ), d;
}
function Me(e = " ", t = 0) {
  return Ee(mr, null, e, t);
}
function j(e = "", t = !1) {
  return t ? (v(), Le(Ne, null, e)) : Ee(Ne, null, e);
}
function ft(e) {
  return e == null || typeof e == "boolean" ? Ee(Ne) : se(e) ? Ee(
    X,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gs(e) ? wt(e) : Ee(mr, null, String(e));
}
function wt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ut(e);
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
      !r && !Ia(t) ? t._ctx = Ke : r === 3 && Ke && (Ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
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
function Jd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Q([t.class, s.class]));
      else if (r === "style")
        t.style = cr([t.style, s.style]);
      else if (rr(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(se(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ir(r) && (t[r] = o);
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
const Zd = Ca();
let Xd = 0;
function Qd(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Zd, i = {
    uid: Xd++,
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
    scope: new Fu(
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
    propsOptions: Fd(s, r),
    emitsOptions: Id(s, r),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Td.bind(null, i), e.ce && e.ce(i), i;
}
let Vt = null;
const Ha = () => Vt || Ke;
let qs, rs;
{
  const e = ar(), t = (n, s) => {
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
const Di = (e) => {
  const t = Vt;
  return qs(e), e.scope.on(), () => {
    e.scope.off(), qs(t);
  };
}, No = () => {
  Vt && Vt.scope.off(), qs(null);
};
function Wa(e) {
  return e.vnode.shapeFlag & 4;
}
let is = !1;
function eA(e, t = !1, n = !1) {
  t && rs(t);
  const { props: s, children: r } = e.vnode, i = Wa(e);
  Ld(e, s, i, t), Bd(e, r, n || t);
  const o = i ? tA(e, t) : void 0;
  return t && rs(!1), o;
}
function tA(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Sd);
  const { setup: s } = n;
  if (s) {
    Ft();
    const r = e.setupContext = s.length > 1 ? sA(e) : null, i = Di(e), o = hs(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Wl(o);
    if (jt(), i(), (l || e.sp) && !Kn(e) && zd(e), l) {
      if (o.then(No, No), t)
        return o.then((a) => {
          rs(!0);
          try {
            Po(e, a, t);
          } finally {
            rs(!1);
          }
        }).catch((a) => {
          Ar(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Po(e, o);
  } else
    Ga(e);
}
function Po(e, t, n) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) && (e.setupState = fa(t)), Ga(e);
}
function Ga(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || on);
}
const nA = {
  get(e, t) {
    return Te(e, "get", ""), e[t];
  }
};
function sA(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, nA),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function gr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fa(id(e.exposed)), {
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
function rA(e) {
  return de(e) && "__vccOpts" in e;
}
const K = (e, t) => /* @__PURE__ */ ud(e, t, is);
function iA(e, t, n) {
  try {
    Ws(-1);
    const s = arguments.length;
    return s === 2 ? me(t) && !se(t) ? Gs(t) ? Ee(e, null, [t]) : Ee(e, t) : Ee(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Gs(n) && (n = [n]), Ee(e, t, n));
  } finally {
    Ws(1);
  }
}
const oA = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let di;
const Oo = typeof window < "u" && window.trustedTypes;
if (Oo)
  try {
    di = /* @__PURE__ */ Oo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ka = di ? (e) => di.createHTML(e) : (e) => e, lA = "http://www.w3.org/2000/svg", aA = "http://www.w3.org/1998/Math/MathML", kt = typeof document < "u" ? document : null, Do = kt && /* @__PURE__ */ kt.createElement("template"), cA = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? kt.createElementNS(lA, e) : t === "mathml" ? kt.createElementNS(aA, e) : n ? kt.createElement(e, { is: n }) : kt.createElement(e);
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
      Do.innerHTML = Ka(
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
}, Tt = "transition", Ln = "animation", os = /* @__PURE__ */ Symbol("_vtc"), qa = {
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
}, uA = /* @__PURE__ */ Ue(
  {},
  ba,
  qa
), dA = (e) => (e.displayName = "Transition", e.props = uA, e), AA = /* @__PURE__ */ dA(
  (e, { slots: t }) => iA(wd, fA(e), t)
), Zt = (e, t = []) => {
  se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Lo = (e) => e ? se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function fA(e) {
  const t = {};
  for (const y in e)
    y in qa || (t[y] = e[y]);
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
    appearToClass: d = l,
    leaveFromClass: A = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: z = `${n}-leave-to`
  } = e, w = pA(r), x = w && w[0], _ = w && w[1], {
    onBeforeEnter: S,
    onEnter: T,
    onEnterCancelled: C,
    onLeave: I,
    onLeaveCancelled: F,
    onBeforeAppear: L = S,
    onAppear: B = T,
    onAppearCancelled: re = C
  } = t, H = (y, D, ie, le) => {
    y._enterCancelled = le, Xt(y, D ? d : l), Xt(y, D ? c : o), ie && ie();
  }, m = (y, D) => {
    y._isLeaving = !1, Xt(y, A), Xt(y, z), Xt(y, p), D && D();
  }, g = (y) => (D, ie) => {
    const le = y ? B : T, Oe = () => H(D, y, ie);
    Zt(le, [D, Oe]), Ro(() => {
      Xt(D, y ? a : i), bt(D, y ? d : l), Lo(le) || Fo(D, s, x, Oe);
    });
  };
  return Ue(t, {
    onBeforeEnter(y) {
      Zt(S, [y]), bt(y, i), bt(y, o);
    },
    onBeforeAppear(y) {
      Zt(L, [y]), bt(y, a), bt(y, c);
    },
    onEnter: g(!1),
    onAppear: g(!0),
    onLeave(y, D) {
      y._isLeaving = !0;
      const ie = () => m(y, D);
      bt(y, A), y._enterCancelled ? (bt(y, p), Uo(y)) : (Uo(y), bt(y, p)), Ro(() => {
        y._isLeaving && (Xt(y, A), bt(y, z), Lo(I) || Fo(y, s, _, ie));
      }), Zt(I, [y, ie]);
    },
    onEnterCancelled(y) {
      H(y, !1, void 0, !0), Zt(C, [y]);
    },
    onAppearCancelled(y) {
      H(y, !0, void 0, !0), Zt(re, [y]);
    },
    onLeaveCancelled(y) {
      m(y), Zt(F, [y]);
    }
  });
}
function pA(e) {
  if (e == null)
    return null;
  if (me(e))
    return [jr(e.enter), jr(e.leave)];
  {
    const t = jr(e);
    return [t, t];
  }
}
function jr(e) {
  return Eu(e);
}
function bt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[os] || (e[os] = /* @__PURE__ */ new Set())).add(t);
}
function Xt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[os];
  n && (n.delete(t), n.size || (e[os] = void 0));
}
function Ro(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hA = 0;
function Fo(e, t, n, s) {
  const r = e._endId = ++hA, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: a } = mA(e, t);
  if (!o)
    return s();
  const c = o + "end";
  let d = 0;
  const A = () => {
    e.removeEventListener(c, p), i();
  }, p = (z) => {
    z.target === e && ++d >= a && A();
  };
  setTimeout(() => {
    d < a && A();
  }, l + 1), e.addEventListener(c, p);
}
function mA(e, t) {
  const n = window.getComputedStyle(e), s = (w) => (n[w] || "").split(", "), r = s(`${Tt}Delay`), i = s(`${Tt}Duration`), o = jo(r, i), l = s(`${Ln}Delay`), a = s(`${Ln}Duration`), c = jo(l, a);
  let d = null, A = 0, p = 0;
  t === Tt ? o > 0 && (d = Tt, A = o, p = i.length) : t === Ln ? c > 0 && (d = Ln, A = c, p = a.length) : (A = Math.max(o, c), d = A > 0 ? o > c ? Tt : Ln : null, p = d ? d === Tt ? i.length : a.length : 0);
  const z = d === Tt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Tt}Property`).toString()
  );
  return {
    type: d,
    timeout: A,
    propCount: p,
    hasTransform: z
  };
}
function jo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Bo(n) + Bo(e[s])));
}
function Bo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Uo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function gA(e, t, n) {
  const s = e[os];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Vo = /* @__PURE__ */ Symbol("_vod"), xA = /* @__PURE__ */ Symbol("_vsh"), vA = /* @__PURE__ */ Symbol(""), yA = /(?:^|;)\s*display\s*:/;
function bA(e, t, n) {
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
      l != null ? wA(
        e,
        o,
        !be(t) && t ? t[o] : void 0,
        l
      ) || Bn(s, o, l) : Bn(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[vA];
      o && (n += ";" + o), s.cssText = n, i = yA.test(n);
    }
  } else t && e.removeAttribute("style");
  Vo in e && (e[Vo] = i ? s.display : "", e[xA] && (s.display = "none"));
}
const Ss = /\s*!important$/;
function Bn(e, t, n) {
  if (se(n))
    n.forEach((s) => Bn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    Ss.test(n) ? e.setProperty(t, n.replace(Ss, ""), "important") : e.setProperty(t, n);
  else {
    const s = kA(e, t);
    Ss.test(n) ? e.setProperty(
      pn(s),
      n.replace(Ss, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ho = ["Webkit", "Moz", "ms"], Br = {};
function kA(e, t) {
  const n = Br[t];
  if (n)
    return n;
  let s = et(t);
  if (s !== "filter" && s in e)
    return Br[t] = s;
  s = ql(s);
  for (let r = 0; r < Ho.length; r++) {
    const i = Ho[r] + s;
    if (i in e)
      return Br[t] = i;
  }
  return t;
}
function wA(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && be(s) && n === s;
}
const Wo = "http://www.w3.org/1999/xlink";
function Go(e, t, n, s, r, i = Ou(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Wo, t.slice(6, t.length)) : e.setAttributeNS(Wo, t, n) : n == null || i && !Jl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : gt(n) ? String(n) : n
  );
}
function Ko(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ka(n) : n);
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
    l === "boolean" ? n = Jl(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function tn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function zA(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const qo = /* @__PURE__ */ Symbol("_vei");
function _A(e, t, n, s, r = null) {
  const i = e[qo] || (e[qo] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = CA(t);
    if (s) {
      const c = i[t] = TA(
        s,
        r
      );
      tn(e, l, c, a);
    } else o && (zA(e, l, o, a), i[t] = void 0);
  }
}
const $A = /(Once|Passive|Capture)$/, SA = /^on:?(?:Once|Passive|Capture)$/;
function CA(e) {
  let t, n;
  for (; (n = e.match($A)) && !SA.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : pn(e.slice(2)), t];
}
let Ur = 0;
const EA = /* @__PURE__ */ Promise.resolve(), MA = () => Ur || (EA.then(() => Ur = 0), Ur = Date.now());
function TA(e, t) {
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
  return n.value = e, n.attached = MA(), n;
}
const Yo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, IA = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? gA(e, s, o) : t === "style" ? bA(e, n, s) : rr(t) ? ir(t) || _A(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : NA(e, t, s, o)) ? (Ko(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Go(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (PA(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !be(s))) ? Ko(e, et(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Go(e, t, s, o));
};
function NA(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Yo(t) && de(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Yo(t) && be(n) ? !1 : t in e;
}
function PA(e, t) {
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
  return se(t) ? (n) => Ns(t, n) : t;
};
function OA(e) {
  e.target.composing = !0;
}
function Jo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const sn = /* @__PURE__ */ Symbol("_assign"), Cs = /* @__PURE__ */ Symbol("_initialValue");
function Vr(e, t, n) {
  return t && (e = e.trim()), n && (e = lr(e)), e;
}
const Ot = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[Cs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Cs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[sn] = Ys(r);
    const i = s || r.props && r.props.type === "number";
    tn(e, t ? "change" : "input", (o) => {
      o.target.composing || e[sn](Vr(e.value, n, i));
    }), (n || i) && tn(e, "change", () => {
      e.value = Vr(e.value, n, i);
    }), t || (tn(e, "compositionstart", OA), tn(e, "compositionend", Jo), tn(e, "change", Jo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const r = t ?? "", i = e[Cs];
    delete e[Cs], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[sn](Vr(e.value, n, s)) : e.value = r;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[sn] = Ys(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? lr(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a);
  }
}, Ya = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, tn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? lr(Js(a)) : Js(a)
      ), i = e.multiple, o = i ? cn(e._modelValue) ? new Set(r) : r : r[0], l = e._pendingValue = [
        i,
        i ? se(o) ? r.slice() : r : o
      ];
      try {
        e[sn](o);
      } finally {
        ha(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[sn] = Ys(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Zo(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[sn] = Ys(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !DA(t, n[1], n[0])) && Zo(e, t);
  }
};
function DA(e, t, n) {
  if (!n || se(e)) return Rt(e, t);
  if (cn(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Zo(e, t) {
  const n = e.multiple, s = se(t);
  if (!(n && !s && !cn(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r], l = Js(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? o.selected = t.some((c) => String(c) === String(l)) : o.selected = Ru(t, l) > -1;
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
const LA = ["ctrl", "shift", "alt", "meta"], RA = {
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
}, FA = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = RA[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, jA = /* @__PURE__ */ Ue({ patchProp: IA }, cA);
let Xo;
function BA() {
  return Xo || (Xo = Vd(jA));
}
const UA = ((...e) => {
  const t = BA().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = HA(s);
    if (!r) return;
    const i = t._component;
    !de(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, VA(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function VA(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function HA(e) {
  return be(e) ? document.querySelector(e) : e;
}
const WA = "zhonglou", GA = "钟楼", KA = "1.6.0", qA = "S", YA = 10, JA = "【副本进行中：钟楼】", ZA = [], XA = { briefingName: "钟楼" }, QA = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, ef = { type: "nights", template: "剩余{n}夜" }, tf = "至第四日日出", nf = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], sf = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", rf = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], of = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], lf = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], af = [{ id: "M1", q: "第一夜的值班签会抽中主播吗", yes: "会", no: "不会", p: 0.1, by: "d1", judge: "第一日日落的抽签结果是{{user}}本人当夜值班" }, { id: "M2", q: "塔里会出人命吗", yes: "会", no: "不会", p: 0.5, judge: "有人死于他人之手，系统宣布钟楼停摆、开启审判" }, { id: "M3", q: "主播会亲手摇响大钟吗", yes: "会", no: "不会", p: 0.35, judge: "{{user}}本人在4F机房摇动曲柄，让大钟鸣响" }], cf = [{ title: "游玩说明", md: `## 副本概况

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
- 1F文具柜：一沓纸、两支铅笔，是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], uf = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], df = {
  id: WA,
  name: GA,
  version: KA,
  level: qA,
  players: YA,
  token: JA,
  legacyKeys: ZA,
  detect: XA,
  time: QA,
  remaining: ef,
  deadline: tf,
  roles: nf,
  rolesNote: sf,
  stateFields: rf,
  phases: of,
  events: lf,
  markets: af,
  docs: cf,
  danmaku: uf
}, Af = "jingjie", ff = "境界游乐园", pf = "1.2.0", hf = "A", mf = "【副本进行中：境界游乐园】", gf = [], xf = { briefingName: "境界游乐园" }, vf = { type: "none" }, yf = { type: "fromPanel" }, bf = [], kf = [], wf = [{ id: "M1", q: "15:30演出时主播会回头吗", yes: "会", no: "不会", p: 0.3, judge: "15:30表演区演出期间，{{user}}本人回头了" }, { id: "M2", q: "主播会坐上摩天轮吗", yes: "会", no: "不会", p: 0.55, judge: "{{user}}本人乘坐了摩天轮" }, { id: "M3", q: "主播会走进镜宫吗", yes: "会", no: "不会", p: 0.45, judge: "{{user}}本人进入了镜宫" }], zf = [{ title: "游客须知", md: `## 《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], _f = {
  id: Af,
  name: ff,
  version: pf,
  level: hf,
  token: mf,
  legacyKeys: gf,
  detect: xf,
  time: vf,
  remaining: yf,
  phases: bf,
  events: kf,
  markets: wf,
  docs: zf
}, $f = "kaoshi", Sf = "考试", Cf = "1.1.0", Ef = "A", Mf = "【副本进行中：考试】", Tf = [], If = { briefingName: "考试" }, Nf = { type: "countdown", minutesPerRound: 3 }, Pf = { type: "fromPanel" }, Of = "至考试结束", Df = [{ id: "main", name: "考试", cap: 100, next: null }], Lf = [], Rf = [], Ff = {
  id: $f,
  name: Sf,
  version: Cf,
  level: Ef,
  token: Mf,
  legacyKeys: Tf,
  detect: If,
  time: Nf,
  remaining: Pf,
  deadline: Of,
  phases: Df,
  events: Lf,
  docs: Rf
}, jf = "xiyan", Bf = "喜宴", Uf = "1.2.0", Vf = "D", Hf = "【副本进行中：喜宴】", Wf = [], Gf = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, Kf = { type: "countdown", minutesPerRound: 3 }, qf = { type: "fromPanel" }, Yf = "至天亮", Jf = [{ id: "main", name: "喜宴", cap: 160, next: null }], Zf = [], Xf = [{ id: "M1", q: "主播会穿上喜服吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人穿上了喜服" }, { id: "M2", q: "这场婚礼的新人会是主播吗", yes: "是", no: "不是", p: 0.17, judge: "{{user}}被认定为这场婚礼的新郎或新娘", judgeNo: "{{user}}以外的某个人被认定为这场婚礼的新郎或新娘" }, { id: "M3", q: "天亮前会有人死吗", yes: "会", no: "不会", p: 0.4, judge: "有人死亡" }], Qf = [], ep = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], tp = {
  id: jf,
  name: Bf,
  version: Uf,
  level: Vf,
  token: Hf,
  legacyKeys: Wf,
  detect: Gf,
  time: Kf,
  remaining: qf,
  deadline: Yf,
  phases: Jf,
  events: Zf,
  markets: Xf,
  docs: Qf,
  danmaku: ep
}, np = "youxi", sp = "游戏", rp = "1.2.0", ip = "C", op = "【副本进行中：游戏】", lp = [], ap = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, cp = { type: "countdown", minutesPerRound: 8 }, up = { type: "fromPanel" }, dp = "至结算", Ap = [{ id: "main", name: "游戏", cap: 90, next: null }], fp = [], pp = [{ id: "M1", q: "第一个出局的会是主播吗", yes: "是", no: "不是", p: 0.08, judge: "第一个被淘汰出局的人是{{user}}", judgeNo: "{{user}}以外的某个人成为第一个被淘汰出局的人" }, { id: "M2", q: "三场游戏能全部玩完吗", yes: "能", no: "不能", p: 0.55, judge: "第三场游戏结束" }, { id: "M3", q: "喊数抱团时主播会拉陌生人吗", yes: "会", no: "不会", p: 0.5, judge: "喊数抱团时，{{user}}主动拉了自己同伴以外的人一起抱团" }], hp = [], mp = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], gp = {
  id: np,
  name: sp,
  version: rp,
  level: ip,
  token: op,
  legacyKeys: lp,
  detect: ap,
  time: cp,
  remaining: up,
  deadline: dp,
  phases: Ap,
  events: fp,
  markets: pp,
  docs: hp,
  danmaku: mp
}, xp = "wuming", vp = "污名", yp = "1.1.0", bp = "B", kp = "4-8", wp = "【副本进行中：污名】", zp = ["污名"], _p = { briefingName: "污名" }, $p = { type: "countdown", minutesPerRound: 3 }, Sp = { type: "countdown", template: "剩余{m}分钟" }, Cp = "至收播", Ep = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], Mp = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], Tp = [], Ip = !0, Np = {
  id: xp,
  name: vp,
  version: yp,
  level: bp,
  players: kp,
  token: wp,
  legacyKeys: zp,
  detect: _p,
  time: $p,
  remaining: Sp,
  deadline: Cp,
  phases: Ep,
  events: Mp,
  docs: Tp,
  disableLive: Ip
}, Pp = "dusongshu", Op = "杜松树", Dp = "1.3.0", Lp = "A", Rp = 6, Fp = "【副本进行中：杜松树】", jp = [], Bp = { briefingName: "杜松树" }, Up = { type: "countdown", minutesPerRound: 30 }, Vp = { type: "fromPanel" }, Hp = "至第四日日出", Wp = ["父亲", "继母", "玛琳", "男孩", "其余"], Gp = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", Kp = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], qp = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], Yp = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], Jp = [{ id: "M1", q: "第一夜会有人死在苹果箱里吗", yes: "会", no: "不会", p: 0.5, by: "n1", judge: "有人在苹果箱里被箱盖压死或死在箱中" }, { id: "M2", q: "主播会吃下锅里的炖肉吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人吃了灶上铁锅里炖的肉" }, { id: "M3", q: "杜松树上的鸟会开口吗", yes: "会", no: "不会", p: 0.6, judge: "杜松树上那只红绿羽毛的鸟开口说话或唱歌" }], Zp = [{ title: "游玩说明", md: `## 副本概况

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
鸟飞到金匠那里唱歌，金匠送给它一条金链子；飞到鞋匠那里唱歌，鞋匠送给它一双红鞋子；飞到磨坊那里唱歌，磨坊工送给它一块磨盘。` }], Xp = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], Qp = {
  id: Pp,
  name: Op,
  version: Dp,
  level: Lp,
  players: Rp,
  token: Fp,
  legacyKeys: jp,
  detect: Bp,
  time: Up,
  remaining: Vp,
  deadline: Hp,
  roles: Wp,
  rolesNote: Gp,
  phases: Kp,
  events: qp,
  stateFields: Yp,
  markets: Jp,
  docs: Zp,
  danmaku: Xp
}, eh = "nongxian", th = "农闲", nh = "1.2.0", sh = "D", rh = !0, ih = "不限", oh = "【副本进行中：农闲】", lh = [], ah = { briefingName: "农闲" }, ch = { type: "none" }, uh = { type: "fromPanel" }, dh = [], Ah = [], fh = [{ title: "游玩说明", md: `## 系统简报

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
  梅姨教新菜，会添在配方板上。` }], ph = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], hh = {
  id: eh,
  name: th,
  version: nh,
  level: sh,
  rest: rh,
  players: ih,
  token: oh,
  legacyKeys: lh,
  detect: ah,
  time: ch,
  remaining: uh,
  phases: dh,
  events: Ah,
  docs: fh,
  danmaku: ph
}, mh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function wn(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const gh = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function Qo(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(gh)) {
    const r = Number(s[1]), i = s[2];
    n = !0, i === "天" ? t += r * 1440 : i === "小时" || i === "个小时" || i === "h" || i === "H" ? t += r * 60 : t += r;
  }
  return n ? Math.round(t) : null;
}
function Ja(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: Qo(t), total: n === void 0 ? null : Qo(n) };
}
function xh(e, t) {
  return e.phases.find((n) => n.id === t);
}
function ls(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); )
    n.push(r), s.add(r.id), r = xh(e, r.next);
  return n;
}
function Za(e, t) {
  return ls(e, t).filter((n) => n.night).length;
}
function vh(e, t, n) {
  if (ls(e, t).some((r) => r.id === n.id)) return t;
  const s = e.phases[0];
  return s && ls(e, s).some((r) => r.id === n.id) ? s : n;
}
function Hr(e, t, n, s, r) {
  if (!e.phases.length || !e.phases.some((A) => A.id === t.id)) return;
  let i = ls(e, n), o = i.findIndex((A) => A.id === t.id);
  o < 0 && (i = ls(e, t), o = 0);
  const l = i.reduce((A, p) => A + Math.max(0, p.cap), 0), a = Math.max(0, t.cap - s) + i.slice(o + 1).reduce((A, p) => A + Math.max(0, p.cap), 0), c = t.deadline ?? i[0].deadline ?? e.deadline, d = { x: a, y: l, deadline: c };
  if (e.time.type === "countdown") {
    const A = e.time.minutesPerRound, p = e.time.totalMinutes, z = p && p > 0 ? p : l * A;
    let w = p && p > 0 && l > 0 ? Math.round(z * a / l) : a * A;
    const x = Ja(r).remaining;
    x !== null && (w = Math.min(w, x - A)), w = Math.max(0, w), Object.assign(d, { minutes: w, total: z, text: `约剩${wn(w)}/${wn(z)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) d.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const A = e.remaining.template.replace("{n}", String(Za(e, t)));
      d.text = c ? `${c}·${A}` : A;
    } else c && (d.text = c);
  return d;
}
const as = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function xr(e, t, n = as) {
  const s = e ?? "", r = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), i = r ? Math.max(1, Number(r[1])) : Math.max(1, Math.round(n[t] ?? as[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: i };
  const l = Number(o[1]), a = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return a <= 0 ? { rounds: i } : { rounds: i, totalMinutes: a, minutesPerRound: Math.max(1, Math.round(a / i)) };
}
const Zs = "generic", Ai = [df, _f, Ff, tp, gp, Np, Qp, hh], yh = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(mh)
  }
};
function bh(e, t) {
  const n = yh[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const Xa = ["D", "C", "B", "A", "S"];
function Qa(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Zs && t.push(`id 不能是保留字 ${Zs}`), Xa.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((c) => typeof c != "string")) && t.push("detect.patterns 必须是文本数组");
  const r = n.time;
  !r || !["none", "clock", "countdown"].includes(r.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (r.type === "clock" && (typeof r.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(r.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), r.type !== "none" && (typeof r.minutesPerRound != "number" || r.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), r.type === "countdown" && r.totalMinutes !== void 0 && (typeof r.totalMinutes != "number" || r.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const i = n.remaining;
  !i || !["nights", "countdown", "fromPanel"].includes(i.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : i.type !== "fromPanel" && typeof i.template != "string" && t.push("remaining.template 必须是文本"), i?.type === "countdown" && r?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.rest !== void 0 && typeof n.rest != "boolean" && t.push("rest 必须是 true 或 false"), n.stateFields !== void 0 && (Array.isArray(n.stateFields) ? n.stateFields.forEach((c, d) => {
    (!c || typeof c.key != "string" || !c.key || typeof c.label != "string" || typeof c.hint != "string") && t.push(`stateFields[${d}] 需要 key、label、hint 三个文本`);
  }) : t.push("stateFields 必须是数组")), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((c) => typeof c != "string" || !c)) && t.push("roles 必须是文本数组");
  const o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((c, d) => {
    if (!c || typeof c.id != "string" || typeof c.name != "string") {
      t.push(`phases[${d}] 缺少 id 或 name`);
      return;
    }
    o.has(c.id) && t.push(`阶段 id 重复：${c.id}`), l.has(c.name) && t.push(`阶段名称重复：${c.name}`), o.add(c.id), l.add(c.name), (typeof c.cap != "number" || c.cap < 1 || !Number.isInteger(c.cap)) && t.push(`阶段 ${c.id} 的 cap 必须是正整数`), c.next !== null && typeof c.next != "string" && t.push(`阶段 ${c.id} 的 next 必须是阶段 id 或 null`), c.deadline !== void 0 && typeof c.deadline != "string" && t.push(`阶段 ${c.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((c) => {
    c && typeof c.next == "string" && !o.has(c.next) && t.push(`阶段 ${c.id} 的 next 指向不存在的阶段：${c.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const a = /* @__PURE__ */ new Set();
  if (Array.isArray(n.events) ? n.events.forEach((c, d) => {
    if (!c || typeof c.id != "string" || typeof c.text != "string") {
      t.push(`events[${d}] 缺少 id 或 text`);
      return;
    }
    a.has(c.id) && t.push(`事件 id 重复：${c.id}`), a.add(c.id), o.has(c.phase) || t.push(`事件 ${c.id} 的 phase 不存在：${c.phase}`), (!Number.isInteger(c.from) || !Number.isInteger(c.to) || c.from < 1 || c.to < c.from) && t.push(`事件 ${c.id} 的轮次区间无效`), c.kind !== "event" && c.kind !== "directive" && t.push(`事件 ${c.id} 的 kind 必须是 event 或 directive`), c.if !== void 0 && typeof c.if != "string" && t.push(`事件 ${c.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((c, d) => {
    !c || typeof c.title != "string" ? t.push(`docs[${d}] 缺少 title`) : c.md !== void 0 && typeof c.md != "string" ? t.push(`docs[${d}].md 必须是文本`) : c.image !== void 0 && typeof c.image != "string" && t.push(`docs[${d}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), n.danmaku !== void 0 && (Array.isArray(n.danmaku) ? n.danmaku.forEach((c, d) => {
    if (!c || typeof c.type != "string" || typeof c.text != "string") {
      t.push(`danmaku[${d}] 需要 type 和 text`);
      return;
    }
    c.when !== void 0 && typeof c.when != "string" && t.push(`danmaku[${d}].when 必须是文本`), c.scope !== void 0 && typeof c.scope != "string" && t.push(`danmaku[${d}].scope 必须是文本`), c.phase !== void 0 && (!Array.isArray(c.phase) || c.phase.some((A) => typeof A != "string") ? t.push(`danmaku[${d}].phase 必须是文本数组`) : c.phase.forEach((A) => {
      o.size > 0 && !o.has(A) && console.warn(`[rlzc] danmaku[${d}] 的 phase "${A}" 不在阶段表中，已跳过`);
    }));
  }) : t.push("danmaku 必须是数组")), n.markets !== void 0)
    if (!Array.isArray(n.markets)) t.push("markets 必须是数组");
    else {
      const c = /* @__PURE__ */ new Set();
      n.markets.forEach((d, A) => {
        if (!d || typeof d != "object") {
          t.push(`markets[${A}] 必须是对象`);
          return;
        }
        for (const p of ["id", "q", "yes", "no", "judge"])
          (typeof d[p] != "string" || !d[p].trim()) && t.push(`markets[${A}] 缺少文本字段 ${p}`);
        (typeof d.p != "number" || !(d.p >= 0.01 && d.p <= 0.99)) && t.push(`markets[${A}].p 必须是 0.01–0.99 的数`), d.judgeNo !== void 0 && (typeof d.judgeNo != "string" || !d.judgeNo.trim()) && t.push(`markets[${A}].judgeNo 必须是文本`), d.by !== void 0 && typeof d.by != "string" && t.push(`markets[${A}].by 必须是阶段 id`), typeof d.id == "string" && (c.has(d.id) && t.push(`事件盘 id 重复：${d.id}`), c.add(d.id));
      });
    }
  return t;
}
function kh(e) {
  const t = new Set(e.phases.map((n) => n.id));
  return (e.markets ?? []).filter((n) => n.by !== void 0 && !t.has(n.by) ? (console.warn(`[rlzc] 副本包 ${e.id} 的事件盘 ${n.id}：by「${n.by}」不是本包的阶段 id，已跳过`), !1) : !0);
}
function Cn(e) {
  return Xa.includes(e.level ?? "") ? e.level : "D";
}
function vr(e, t = as) {
  const n = Cn(e), s = xr(e.limit, n, t), r = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, i = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / r)) : void 0;
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
function wh(e, t, n, s = "") {
  const r = Cn(e), i = e.rounds && e.rounds > 0 ? e.rounds : xr(e.limit, r, t).rounds, o = vr({ ...e, rounds: i }, t), l = s.split(`
`).map((a) => a.trim().replace(/^[「『]|[」』]$/g, "")).filter(Boolean).join(`

`);
  return {
    ...o,
    id: n,
    ...e.players ? { players: e.players } : {},
    docs: l ? [{ title: "副本简报", md: l }] : []
  };
}
function Li(e) {
  const t = new Set(Ai.map((n) => n.id));
  return [...Ai, ...e.filter((n) => !t.has(n.id))];
}
const zh = /副本简报[^\S\n]*(?:——|[-－—：:·・])[^\S\n]*([^\n」』]*)/, _h = /<阶段切换>([\s\S]*?)<\/阶段切换>/, $h = /<副本结算>([\s\S]*?)<\/副本结算>/, ec = /<副本>([\s\S]*?)<\/副本>/, Sh = /<角色登记>([\s\S]*?)<\/角色登记>/, Ch = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, Eh = /<积分变动>([\s\S]*?)<\/积分变动>/g, Mh = "《「『【", Th = "》」』】";
function Ih(e) {
  let t = e.trim();
  for (; ; ) {
    const n = t;
    if (Mh.includes(t[0] ?? "\0") && (t = t.slice(1).trim()), Th.includes(t[t.length - 1] ?? "\0") && (t = t.slice(0, -1).trim()), t === n) return t;
  }
}
function Nh(e) {
  const t = e.charCodeAt(0);
  return t >= 65281 && t <= 65374 ? String.fromCharCode(t - 65248) : e;
}
function yr(e) {
  const t = zh.exec(e ?? ""), n = t ? Ih(t[1]) : "";
  if (!t || !n) return null;
  const s = { name: n }, r = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (a) => {
    const c = new RegExp(`${a}\\s*[：:]\\s*([^」』\\n]+)`).exec(r);
    return c ? c[1].trim() : void 0;
  }, o = i("等级"), l = o && /[DCBASｄｃｂａｓＤＣＢＡＳ]/i.exec(o);
  return l && (s.level = Nh(l[0]).toUpperCase()), s.goal = i("目标"), s.limit = i("时限"), s.players = i("人数"), s;
}
function Ph(e) {
  const t = _h.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function tc(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const r = n.slice(0, s).trim(), i = n.slice(s + 1).trim();
    r && (t[r] = i);
  }
  return t;
}
function br(e) {
  const t = $h.exec(e ?? "");
  if (!t) return null;
  const n = tc(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function nc(e) {
  const t = Sh.exec(e ?? "");
  if (!t) return null;
  const n = tc(t[1]);
  return Object.keys(n).length ? n : null;
}
function Es(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function sc(e) {
  const t = ec.exec(e ?? "");
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
      l === "时限" ? (n.limit = a, s = null) : l === "进度条" ? (n.progressBar = a, s = null) : l === "任务" ? (Es(a) && n.tasks.push(Es(a)), s = "tasks") : (n.ps = a, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(i)) {
      s = null;
      continue;
    }
    s === "tasks" ? Es(i) && n.tasks.push(Es(i)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${i}` : i);
  }
  return n;
}
function Oh(e) {
  const t = Ch.exec(e ?? "");
  return t ? t[2] : null;
}
function Wr(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (n(r)) return r;
    s.add(r.id), r = r.next ? e.phases.find((i) => i.id === r.next) : void 0;
  }
  return null;
}
function Dh(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const r = (l) => !!l.clock && !l.night;
  let i = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      i = Wr(e, t, r), o = i?.cap ?? 0;
      break;
    case "晚饭":
      i = Wr(e, t, r), i && (o = Math.ceil(i.cap * 0.75), i.id === t.id && o <= n && (o = i.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      i = Wr(e, t, (l) => !!l.night), o = i?.cap ?? 0;
      break;
  }
  return !i || i.id === t.id && o <= n + 1 ? null : { phase: i.id, round: o, label: `${i.name}第${o}轮` };
}
const Lh = /<状态栏>([\s\S]*?)<\/状态栏>/;
function fi(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function Rh(e, t) {
  const n = fi(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const Gr = /* @__PURE__ */ new Map();
function Fh(e, t) {
  const n = `${e}\0${t}`;
  if (!Gr.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (r) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, r);
    }
    Gr.set(n, s);
  }
  return Gr.get(n);
}
function jh(e, t, n = []) {
  const s = String(e ?? ""), r = (c, d) => c ? { signal: d, pack: c, info: { name: c.name, level: c.level } } : null, i = (c, d) => {
    const A = r(Rh(t, c), d);
    if (A) return A;
    const p = fi(c), z = p ? [...n].reverse().find((w) => fi(w.name) === p) : void 0;
    return z ? { signal: d, info: { ...z } } : null;
  }, o = yr(s);
  if (o)
    return { signal: 1, pack: t.find((d) => d.detect.briefingName === o.name), info: o };
  const l = ec.exec(s);
  if (l) {
    const c = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(l[1]), d = c && i(c[1], 2);
    if (d) return d;
  }
  for (const c of s.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const d = i(c[1], 3);
    if (d) return d;
  }
  const a = Lh.exec(s);
  if (a) {
    for (const c of a[1].split(`
`))
      if (c.includes("地点"))
        for (const d of c.matchAll(/副本《([^》]+)》/g)) {
          const A = i(d[1], 4);
          if (A) return A;
        }
  }
  for (const c of t)
    for (const d of c.detect.patterns ?? []) {
      const A = Fh(c.id, d);
      if (A && A.test(s)) return r(c, 5);
    }
  return null;
}
const el = 5, Bh = { id: "_open", name: "进行中", cap: 0, next: null };
function _e(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function Uh(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function rc(e, t, n) {
  const s = Uh(e) + Math.max(0, n - 1) * t, r = Math.floor(s / 60) % 24, i = (s % 60 + 60) % 60;
  return `${r % 12 === 0 ? 12 : r % 12}:${String(i).padStart(2, "0")}`;
}
function tl(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return rc(e.time.dayStart, e.time.minutesPerRound, n);
}
function ic(e) {
  return e.phases.length ? e.phases : [Bh];
}
function Os(e, t) {
  return ic(e).find((n) => n.id === t);
}
function nl(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (r.id === n) return !0;
    s.add(r.id), r = Os(e, r.next);
  }
  return !1;
}
function sl(e, t, n, s) {
  const r = n + 1, i = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > r) {
      let l = i.map((c, d) => ({ e: c, i: d })).filter(({ e: c }) => c.from >= r && c.from <= o).sort((c, d) => c.e.from - d.e.from || c.i - d.i).map(({ e: c }) => c), a = o;
      return l.length > el && (a = l[el - 1].from, l = l.filter((c) => c.from <= a)), { phase: t, round: a, events: l, skipFrom: r };
    }
  }
  return { phase: t, round: r, events: i.filter((o) => o.from === r) };
}
function oc(e, t, n) {
  const s = t.entryIndex;
  if (!_e(e[s])) return null;
  const r = ic(n);
  let i = r[0], o = r[0], l = 0, a, c = !1, d, A, p = null, z, w, x;
  const _ = /* @__PURE__ */ new Set(), S = {}, T = {}, C = /* @__PURE__ */ new Map();
  for (const D of t.manual ?? [])
    C.has(D.atIndex) || C.set(D.atIndex, []), C.get(D.atIndex).push(D);
  const I = (D, ie) => {
    T[i.id] === void 0 && D.id !== i.id && (T[i.id] = ie), n.phases.length && (o = vh(n, o, D)), i = D, l = 0, p && !nl(n, i, p.phase) && (p = null);
  };
  for (let D = s; D < e.length; D++) {
    const ie = e[D];
    if (!c && _e(ie)) {
      const le = sl(n, i, l, p);
      l = le.round;
      const Oe = new Set((ie.extra?.rlzc?.skippedEvents ?? []).map((U) => U.id));
      le.events.forEach((U) => {
        Oe.has(U.id) || _.add(U.id);
      }), S[D] = {
        phase: i.id,
        round: l,
        events: le.events.map((U) => U.id),
        skipFrom: le.skipFrom,
        limit: Hr(n, i, o, l, a)
      }, p && i.id === p.phase && l >= p.round && (p = null);
      const ot = String(ie.mes ?? ""), Qe = sc(ot);
      Qe && (w = Qe), a = Qe?.limit;
      const vn = nc(ot);
      vn && (x = vn);
      const qt = br(ot);
      if (qt)
        c = !0, d = "tag", A = D, z = qt;
      else {
        const U = Ph(ot), J = U ? r.find((Y) => Y.name === U) : void 0;
        if (J && n.phases.length)
          I(J, D);
        else if (i.cap > 0 && l >= i.cap && i.next) {
          const Y = Os(n, i.next);
          Y && I(Y, D);
        }
      }
    }
    for (const le of C.get(D) ?? []) {
      if (c) break;
      switch (le.kind) {
        case "skip": {
          p = Os(n, le.targetPhase) && nl(n, i, le.targetPhase) ? { phase: le.targetPhase, round: le.targetRound } : null;
          break;
        }
        case "setPhase": {
          const Oe = Os(n, le.phase);
          Oe && (p = null, I(Oe, D));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(le.round)), p = null;
          break;
        case "end":
          c = !0, d = "manual", A = D;
          break;
      }
    }
  }
  const F = c ? null : sl(n, i, l, p), L = F ? F.round : l + 1, B = i.cap > 0, re = n.events.filter((D) => _.has(D.id)).map((D) => D.id), H = c ? void 0 : Hr(n, i, o, L, a), m = c ? void 0 : Hr(n, i, o, l);
  let g;
  const y = n.remaining;
  return !c && y.type === "nights" && n.phases.length && !i.byTag && !i.frozen ? g = y.template.replace("{n}", String(Za(n, i))) : !c && y.type === "countdown" && H?.minutes !== void 0 && (g = y.template.replace("{m}", String(H.minutes))), {
    phase: i,
    round: l,
    nextRound: L,
    clock: c ? void 0 : tl(n, i, L),
    currentClock: tl(n, i, l),
    remainingText: g,
    limit: H,
    roundsLeft: m ? { x: m.x, y: m.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: c,
    endedBy: d,
    endIndex: A,
    firedEvents: re,
    warn: !c && B && L >= i.cap - 2,
    isLastRound: !c && B && L === i.cap,
    overdue: !c && B && !i.next && L > i.cap,
    next: F,
    skipGoal: p,
    settlement: z,
    panel: w,
    rolesFromChat: x,
    perMessage: S,
    phaseEnds: T,
    entryIndex: s
  };
}
const lc = "rlzc_token", ac = "rlzc_progress", cc = "rlzc_turn", uc = "rlzc_state", dc = "rlzc_ledger", Ac = "rlzc_live", fc = "rlzc_format", Vh = [lc, ac, cc, uc, dc, Ac, fc], cs = { token: "", progress: "", turn: "", injected: [] };
function Hh(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Xs(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const r = new RegExp(`(?<!\\{)\\{(${s.map(Hh).join("|")})\\}(?!\\})`, "g");
  return e.replace(r, (i, o) => n?.[o]?.trim() || o);
}
function Wh(e, t) {
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
function rl(e, t, n, s = !1) {
  let r = Xs(e.text, t, n);
  return e.to > e.from && (r = `在本阶段第${e.from}到${e.to}轮之间发生：${r}`), e.if && !s && (r += `（条件：${Xs(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${r}`;
}
function Gh(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Kh(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...cs, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return cs;
  const r = s.roles, i = e.phases.length > 0, o = t.next, l = [`副本：${e.name}（${e.level}级）`], a = t.limit;
  if (i)
    l.push(`阶段：${t.phase.name}`), l.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), a && l.push(`剩余${a.x}/${a.y}轮`), t.clock && l.push(`钟时：${t.clock}`), a?.text && l.push(`时限：${a.text}`), e.remaining.type === "countdown" && t.remainingText && l.push(t.remainingText), a?.deadline && !a.text?.includes(a.deadline) && l.push(`截止：${a.deadline}`);
  else {
    l.push(`本轮：第${t.nextRound}轮`), t.clock && l.push(`钟时：${t.clock}`);
    const C = s.panelLimit || s.briefing?.limit;
    C && l.push(`时限：${C}`);
  }
  const c = ["［副本进度·仅供AI］", l.join("　")];
  if (s.briefing?.goal && (!i || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const C = e.roles.filter((I) => r?.[I]);
    c.push(
      C.length ? `角色登记：${e.roles.map((I) => `${I}=${r?.[I] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const d = Wh(e, t.firedEvents);
  d && c.push(`已发生事件：${d}`);
  const A = [];
  o.skipFrom !== void 0 && A.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const p = new Map((s.subNext ?? []).map((C) => [C.id, C])), z = o.events.filter((C) => C.if && p.get(C.id)?.ok === !1).map((C) => ({ id: C.id, reason: p.get(C.id).reason })), w = o.events.filter((C) => !z.some((I) => I.id === C.id)), x = (C) => !!C.if && p.get(C.id)?.ok === !0, _ = w.filter((C) => C.kind === "event"), S = w.filter((C) => C.kind === "directive");
  if (_.length && (A.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), _.forEach((C) => A.push(rl(C, e, r, x(C))))), S.length && (A.push("本轮写作要求："), S.forEach((C) => A.push(rl(C, e, r, x(C))))), t.isLastRound ? A.push(Gh(t)) : t.overdue && A.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && A.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && A.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((C) => r?.[C])) {
    let C = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((I) => `${I}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (C += "死者不得是{{user}}或其同伴。"), A.push(C);
  }
  let T;
  return a?.text && (a.minutes !== void 0 ? (A.push(
    `本轮<副本>的时限一栏写：${a.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), T = { text: a.text, minutes: a.minutes, total: a.total }) : (A.push(`本轮<副本>的时限一栏写：${a.text}（照抄）。`), T = { text: a.text })), {
    token: e.token,
    progress: c.join(`
`),
    turn: A.length ? ["［本轮指令·仅供AI］", ...A].join(`
`) : "",
    injected: w.map((C) => C.id),
    limit: T,
    skipped: z.length ? z : void 0,
    state: s.stateText || void 0
  };
}
const pt = "<状态栏>", zn = "</状态栏>", qh = {
  missing: "缺失",
  misnamed: "标签名写错",
  unpaired: "不成对",
  duplicate: "多于一对"
}, Ri = /* @__PURE__ */ new Set(["副本", "阶段切换", "副本结算", "角色登记", "积分变动", "直播"]), Yh = /* @__PURE__ */ new Set(["系统面板", "状态面板", "状态", "面板", "系统状态", "状态信息", "人物状态", "角色状态", "状态条", "状态框", "系统任务状态栏", "任务状态栏", "状态栏位", "status", "statusbar", "status_bar", "status-bar"]), Jh = ["等级", "积分", "位格", "道具", "待清算", "在场"];
function Zh(e) {
  return Jh.filter((t) => new RegExp(`${t}\\s*[：:]`).test(e)).length;
}
function Fi(e) {
  const t = e.trim().toLowerCase();
  return Yh.has(t) || /状态|面板/.test(t);
}
function il(e, t) {
  if (Ri.has(e)) return !1;
  const n = Zh(t);
  return Fi(e) ? n >= 1 : /[^\x00-\x7f]/.test(e) && n >= 2;
}
function ol(e, t) {
  return e.split(t).length - 1;
}
function pc(e) {
  const t = /<([^<>\/\s][^<>\/]{0,11})>|【([^【】\/]{1,12})】|\[([^\[\]\/]{1,12})\]/g;
  let n;
  for (; (n = t.exec(e)) !== null; ) {
    const s = (n[1] ?? n[2] ?? n[3]).trim();
    if (Ri.has(s)) continue;
    const r = n.index + n[0].length, i = n[1] !== void 0 ? `</${n[1]}>` : n[2] !== void 0 ? `【/${n[2]}】` : `[/${n[3]}]`, o = e.indexOf(i, r);
    if (o >= 0) {
      if (il(s, e.slice(r, o))) return { open: n[0], start: n.index, close: i, closeAt: o };
      continue;
    }
    if (Fi(s) && il(s, e.slice(r, Qs(e, r)))) return { open: n[0], start: n.index };
  }
  return null;
}
function Qs(e, t) {
  const n = e.indexOf("<副本>", t);
  let s = n >= 0 ? n : e.length;
  for (; s > t && /\s/.test(e[s - 1]); ) s--;
  return s;
}
function hc(e, t) {
  const n = Qs(e, t), s = /<\/([^<>\s]{1,12})>|【\/([^【】]{1,12})】|\[\/([^\[\]]{1,12})\]/g;
  s.lastIndex = t;
  let r;
  for (; (r = s.exec(e)) !== null && r.index < n; ) {
    const i = (r[1] ?? r[2] ?? r[3]).trim();
    if (!Ri.has(i) && Fi(i))
      return { tok: r[0], at: r.index };
  }
  return null;
}
function ji(e) {
  const t = String(e ?? ""), n = ol(t, pt), s = ol(t, zn);
  if (n === 1 && s === 1)
    return t.indexOf(pt) < t.indexOf(zn) ? { kind: "ok" } : { kind: "unpaired", detail: "结尾在开头之前", fixable: !1 };
  if (n === 0 && s === 0) {
    const r = pc(t);
    return r ? { kind: "misnamed", detail: r.close ? `${r.open}…${r.close}` : `${r.open}（没有结尾）`, fixable: !0 } : { kind: "missing" };
  }
  if (n === s) return { kind: "duplicate", detail: `${n}对`, fixable: !1 };
  if (n === 1 && s === 0) {
    const r = hc(t, t.indexOf(pt) + pt.length);
    return { kind: "unpaired", detail: r ? `结尾写成了${r.tok}` : "只有开头", fixable: !0 };
  }
  return n === 0 ? { kind: "unpaired", detail: "只有结尾", fixable: !1 } : { kind: "unpaired", detail: `开头${n}个、结尾${s}个`, fixable: !1 };
}
function Xh(e) {
  const t = String(e ?? ""), n = ji(t);
  if (!n.fixable) return null;
  if (n.kind === "misnamed") {
    const o = pc(t), l = o.start + o.open.length;
    if (o.close !== void 0 && o.closeAt !== void 0)
      return { text: t.slice(0, o.start) + pt + t.slice(l, o.closeAt) + zn + t.slice(o.closeAt + o.close.length), from: `${o.open}…${o.close}` };
    const a = Qs(t, l);
    return { text: t.slice(0, o.start) + pt + t.slice(l, a) + `
` + zn + t.slice(a), from: o.open };
  }
  const s = t.indexOf(pt) + pt.length, r = hc(t, s);
  if (r) return { text: t.slice(0, r.at) + zn + t.slice(r.at + r.tok.length), from: `${pt}…${r.tok}` };
  const i = Qs(t, s);
  return { text: t.slice(0, i) + `
` + zn + t.slice(i), from: pt };
}
function mc(e, t) {
  for (let n = 0; n < t; n++) if (e[n]?.is_user) return !1;
  return !0;
}
function gc(e, t) {
  const n = e[t];
  if (!_e(n) || mc(e, t)) return null;
  const s = ji(n.mes);
  return s.kind === "ok" ? null : s;
}
const Qh = "［格式·仅供AI］上一轮的状态栏格式不对。本轮必须在正文末尾完整输出一次<状态栏>……</状态栏>，开头结尾的标签名一字不改，不得写成其他名字。";
function em(e) {
  for (let t = e.length - 1; t >= 0; t--)
    if (_e(e[t]))
      return gc(e, t) !== null;
  return !1;
}
function tm(e, t = 60) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const r = e[s]?.extra?.rlzc?.format, i = gc(e, s);
    i ? n.push({ index: s, kind: i.kind, detail: i.detail, fixed: !1 }) : r?.fixed && _e(e[s]) && n.push({ index: s, kind: r.kind, detail: r.detail, fixed: !0, from: r.from });
  }
  return n;
}
const nm = 1, sm = 0;
function ge() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function xc() {
  const e = ge();
  return e.eventTypes ?? e.event_types ?? {};
}
function bn(e, t) {
  const n = xc()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  ge().eventSource.on(n, t);
}
function Rn(e, t) {
  const n = xc()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  const s = ge().eventSource;
  typeof s.makeFirst == "function" ? s.makeFirst(n, t) : s.on(n, t);
}
function Z() {
  return ge().chat ?? [];
}
function Ht() {
  const e = ge();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function Ze() {
  return ge().chatMetadata ?? {};
}
function Ve() {
  const e = ge();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function It(e, t, n, s) {
  ge().setExtensionPrompt(e, t, nm, n, s, sm);
}
function rm() {
  const e = ge();
  typeof e.saveChat == "function" ? e.saveChat() : e.saveChatDebounced?.();
}
function im(e) {
  const t = ge(), n = Z()[e];
  !n || !document.querySelector(`#chat .mes[mesid="${e}"]`) || typeof t.updateMessageBlock == "function" && t.updateMessageBlock(e, n);
}
function we(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Gt(e) {
  const t = ge();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
function ll(e, t, n, s = "回廊种菜系统") {
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
async function pi(e, t = "") {
  const n = ge();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const r = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof r == "string" ? r : null;
  }
  return window.prompt(e, t);
}
async function om(e, t) {
  const n = ge(), s = document.createElement("div"), r = document.createElement("div");
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
const un = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function vc(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function lm(e, t = un) {
  return t.length ? e.replace(vc(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
const hi = "rlzc-hide:";
function am(e) {
  let t = 5381;
  for (let n = 0; n < e.length; n++) t = (t << 5) + t + e.charCodeAt(n) | 0;
  return (t >>> 0).toString(36);
}
function cm(e) {
  const t = e.firstChild;
  return t && t.nodeType === Node.COMMENT_NODE && t.data.startsWith(hi) ? t.data.slice(hi.length) : null;
}
function um(e) {
  return e.querySelector(".TH-render, iframe") ? !0 : !!e.parentElement && Array.from(e.parentElement.children).some((t) => t.classList.contains("TH-streaming"));
}
function dm() {
  const e = globalThis.TavernHelper?.refreshOneMessage;
  return typeof e == "function" ? e : null;
}
const Kr = /* @__PURE__ */ new Set();
function yc(e, t = un, n = !1, s = !1) {
  const r = Z()[e];
  if (!r || r.is_user) return;
  const i = String(r.extra?.display_text ?? r.mes ?? "");
  if (!vc(n ? un : t, "").test(i)) return;
  const o = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!o) return;
  const l = ge().messageFormatting;
  if (typeof l != "function") return;
  const a = lm(i, t), c = am(`${t.join("|")}
${a}`), d = cm(o);
  if (d === c) return;
  const A = l(a, r.name ?? "", !!r.is_system, !1, e);
  if (!s && um(o)) {
    if (d === null && l(i, r.name ?? "", !!r.is_system, !1, e) === A) return;
    const p = dm();
    if (p && !Kr.has(e)) {
      Kr.add(e), Promise.resolve().then(() => p(e)).catch((z) => console.warn("[rlzc] 请酒馆助手重渲染消息失败", e, z)).finally(() => Kr.delete(e));
      return;
    }
  }
  o.innerHTML = `<!--${hi}${c}-->${A}`;
}
function Am(e = un, t = !1, n = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((s) => {
    const r = Number(s.getAttribute("mesid"));
    Number.isFinite(r) && yc(r, e, t, n);
  });
}
const fm = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function bc(e) {
  return e.stateFields?.length ? e.stateFields : [fm];
}
const pm = [...un, "状态栏"], hm = new RegExp(`<(${pm.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function Bi(e) {
  return String(e ?? "").replace(hm, "").replace(/\n{3,}/g, `

`).trim();
}
function mm(e) {
  const t = bc(e.pack), n = e.markets ?? [], s = [
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
${Bi(e.text)}`
  ].join(`

`);
  return { system: s, user: l };
}
function gm(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class Be extends Error {
}
function xm(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), r = t.lastIndexOf("}");
  if (s < 0 || r <= s) throw new Be("返回里没有 JSON");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new Be("返回的 JSON 无法解析");
  }
  if (!i || typeof i != "object" || Array.isArray(i)) throw new Be("返回的不是 JSON 对象");
  if (!i.state || typeof i.state != "object" || Array.isArray(i.state)) throw new Be("缺少 state");
  const o = ["done", "missed", "void"], l = (Array.isArray(i.events) ? i.events : []).filter((A) => A && typeof A.id == "string" && o.includes(A.status)).map((A) => ({ id: A.id, status: A.status, reason: String(A.reason ?? "") })), a = (Array.isArray(i.next) ? i.next : []).filter((A) => A && typeof A.id == "string" && typeof A.ok == "boolean").map((A) => ({ id: A.id, ok: A.ok, reason: String(A.reason ?? "") })), c = { events: l, state: i.state, next: a }, d = typeof i.hype == "number" ? i.hype : typeof i.hype == "string" && i.hype.trim() !== "" ? Number(i.hype) : NaN;
  if (Number.isFinite(d) && (c.hype = Math.max(0, Math.min(100, Math.round(d)))), typeof i.hurt == "boolean" ? c.hurt = i.hurt : (i.hurt === "true" || i.hurt === "false") && (c.hurt = i.hurt === "true"), i.markets && typeof i.markets == "object" && !Array.isArray(i.markets)) {
    const A = {};
    for (const [p, z] of Object.entries(i.markets))
      typeof z == "boolean" ? A[p] = z : (z === "true" || z === "false") && (A[p] = z === "true");
    c.markets = A;
  }
  return c;
}
function vm(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function ym(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((r) => String(r ?? "")).join("|");
  return `${e}:${t}:${s}:${vm(String(n?.mes ?? ""))}`;
}
function bm(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function km(e, t, n = 2) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return xm(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
class kc extends Error {
}
function kr(e) {
  if (e instanceof kc) return "超时";
  if (e instanceof Be) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function wc(e) {
  return e?.extra?.rlzc;
}
function wr(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!_e(s)) continue;
    const r = wc(s)?.sub;
    if (r?.state && !r.skipped) return { index: n, state: r.state };
  }
  return null;
}
function wm(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!_e(s)) continue;
    const r = wc(s)?.sub;
    return r && !r.skipped && Array.isArray(r.next) ? r.next : void 0;
  }
}
function er(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => er(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${er(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function zc(e, t) {
  const n = bc(e), s = new Set(n.map((i) => i.key)), r = n.filter((i) => t[i.key] !== void 0).map((i) => `${i.label}：${er(t[i.key])}`);
  for (const [i, o] of Object.entries(t)) s.has(i) || r.push(`${i}：${er(o)}`);
  return r.length ? ["［副本状态·仅供AI］", ...r].join(`
`) : "";
}
const zm = "你在写回廊直播间的观众弹幕。观众是回廊里的其他玩家，只看得到直播画面。什么人都有：夸赞、祝福、讨论、泼冷水、嫉妒、抹黑、造谣，正面的稍多。每条30字以内，口语，称{{user}}为主播，不用性别代词。只能根据画面里已经发生的事说话，不猜测、不透露画面外的信息。", _m = ["praise", "bless", "discuss", "cold", "envy", "smear", "rumor"];
function $m(e) {
  if (!e.aiOn) return !1;
  const t = Math.max(1, Math.min(10, Math.floor(e.freq) || 3));
  return e.roundInShow > 0 && e.roundInShow % t === 0 ? !0 : e.phaseSwitch || e.hurt || e.eventDone;
}
function _c(e) {
  return String(e ?? "").replace(/<(副本|状态栏|阶段切换|副本结算|角色登记|积分变动|直播|thinking|think)>[\s\S]*?<\/\1>/g, "").replace(/<\/?[A-Za-z一-龥][^<>]*>/g, "").replace(/\n{3,}/g, `

`).trim();
}
function Sm(e, t, n) {
  const s = e.map((o) => o.text), r = [], i = /* @__PURE__ */ new Set();
  for (let o = 0; o < t * 10 && r.length < Math.min(t, s.length); o++) {
    const l = Math.floor(n() * s.length);
    i.has(l) || (i.add(l), r.push(s[l]));
  }
  return r;
}
function Ui(e) {
  return Math.max(8, Math.round(Number(e) || 10) + 3);
}
function Cm(e) {
  return Ui(e) + 2;
}
function Em(e) {
  return Math.min(4e3, Math.max(1500, 600 + Ui(e) * 80));
}
function Mm(e) {
  const t = [
    zm,
    `只输出一个 JSON 数组，${Ui(e.count)}条左右，不要任何解释，格式：`,
    '[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]'
  ].join(`
`), n = [
    `【直播间】${e.scene}`,
    `【在场角色】${e.cast.length ? e.cast.join("、") : "（无）"}`,
    `【最近两轮画面】
${e.texts.map((s) => _c(s)).filter(Boolean).join(`

`) || "（无）"}`,
    `【语气示例】
${e.samples.map((s) => `- ${s}`).join(`
`)}`
  ].join(`

`);
  return { system: t, user: n };
}
function Tm(e, t = 13) {
  let n = String(e ?? "").trim();
  const s = /```(?:json)?\s*([\s\S]*?)```/i.exec(n);
  s && (n = s[1].trim());
  const r = n.indexOf("["), i = n.lastIndexOf("]");
  if (r < 0 || i <= r) throw new Be("返回里没有 JSON 数组");
  let o;
  try {
    o = JSON.parse(n.slice(r, i + 1));
  } catch {
    throw new Be("返回的 JSON 无法解析");
  }
  if (!Array.isArray(o)) throw new Be("返回的不是 JSON 数组");
  const l = o.filter((a) => a && typeof a.text == "string" && a.text.trim()).map((a) => ({
    type: _m.includes(a.type) ? a.type : "discuss",
    name: typeof a.name == "string" && a.name.trim() ? a.name.trim().slice(0, 16) : "匿名",
    text: a.text.trim()
  })).slice(0, t);
  if (!l.length) throw new Be("返回的弹幕为空");
  return l;
}
async function Im(e, t, n = 1, s = 13) {
  let r;
  for (let i = 0; i <= n; i++)
    try {
      return Tm(await e(t), s);
    } catch (o) {
      r = o;
    }
  throw r;
}
function Nm(e) {
  return e.t === "tip" ? `${e.name} 打赏${e.amount}` : `${e.name}：${e.text}`;
}
function Pm(e, t = 5) {
  if (!e.on) return "";
  const n = e.feed.filter((r) => r.t === "msg" || r.t === "tip").slice(-t), s = `［直播·仅供AI］{{user}}正在直播，约${e.viewers}人在看。`;
  return n.length ? `${s}最近弹幕：${n.map(Nm).join("／")}` : s;
}
const $c = 1500;
function Sc() {
  return ge().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function Cc(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Vi(e, t) {
  const n = new AbortController();
  let s;
  const r = new Promise((i, o) => {
    s = setTimeout(() => {
      n.abort(), o(new kc(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), r]);
  } finally {
    clearTimeout(s);
  }
}
function Ec(e, t) {
  const n = typeof t?.error == "string" ? t.error : t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : ""), s = String(n ?? "").trim(), r = new Error(`${e || ""} ${s}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return r.status = e, r.detail = s, r;
}
async function Mc(e) {
  const t = await e.text().catch(() => "");
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
async function Tc(e, t, n, s = $c, r = 0.2, i = !1) {
  const o = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: Sc(),
    signal: n,
    body: JSON.stringify({
      ...Cc(e),
      model: e.model,
      messages: [
        { role: "system", content: t.system },
        { role: "user", content: t.user }
      ],
      max_tokens: s,
      temperature: r,
      stream: !1
    })
  }), l = await Mc(o);
  if (!o.ok || l?.error) throw Ec(o.status === 200 ? 0 : o.status, l);
  const a = l?.choices?.[0]?.message?.content ?? l?.choices?.[0]?.text ?? l?.content;
  if (typeof a != "string") {
    if (i) return "";
    throw new Error("返回里没有正文");
  }
  return a;
}
async function Om(e) {
  const t = ge();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function Hi(e, t, n = {}) {
  return Vi(e.timeoutMs, (s) => {
    if (e.source === "main") return Om(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return Tc(e.preset, t, s, n.maxTokens ?? $c, n.temperature ?? 0.2);
  });
}
async function Dm(e, t) {
  const n = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: Sc(),
    signal: t,
    body: JSON.stringify(Cc(e))
  }), s = await Mc(n);
  if (!n.ok || s?.error) throw Ec(n.status === 200 ? 0 : n.status, s);
  const i = (Array.isArray(s) ? s : Array.isArray(s?.data) ? s.data : Array.isArray(s?.models) ? s.models : []).map((o) => typeof o == "string" ? o : o?.id ?? o?.name).filter(Boolean);
  return [...new Set(i)].sort();
}
function Lm(e, t) {
  return Vi(t, (n) => Dm(e, n));
}
const Rm = 64;
async function Fm(e, t) {
  if (!e.model.trim()) throw new Error("还没有选模型");
  return Vi(
    t,
    (n) => Tc(e, { system: "只回复 OK。", user: "ping" }, n, Rm, 0.2, !0)
  );
}
function al(e) {
  if (!e || typeof e != "object" || typeof e.ok != "boolean") return;
  const t = Number(e.at);
  return { ok: e.ok, reason: String(e.reason ?? ""), at: Number.isFinite(t) ? t : 0 };
}
function jm(e) {
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
function Bm(e, t, n) {
  const s = String(n ?? "").trim();
  return e[t] === s ? !1 : (e[t] = s, t === "model" || (delete e.models, delete e.fetchResult), delete e.testResult, !0);
}
function dl(e, t, n = Date.now()) {
  t.ok ? (e.models = [...t.models], e.fetchResult = { ok: !0, reason: "", at: n }) : e.fetchResult = { ok: !1, reason: t.reason, at: n };
}
function Al(e, t, n = Date.now()) {
  e.testResult = { ok: t.ok, reason: t.ok ? "" : t.reason, at: n };
}
function Um(e) {
  const t = new Date(e);
  return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
}
function Vm(e) {
  const t = e.fetchResult;
  return t ? t.ok ? `✓ 读到${e.models?.length ?? 0}个模型` : `✗ ${t.reason}` : "";
}
function Hm(e) {
  const t = e.testResult;
  return t ? t.ok ? "✓ 可以回复" : `✗ ${t.reason}` : "";
}
function Wm(e) {
  const t = e?.testResult;
  return t?.ok ? { kind: "on", text: "已连接" } : t ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" };
}
const Gm = 80;
function mi(e) {
  const t = kr(e), n = Number(e?.status) || 0, s = String(e?.detail ?? "").replace(/\s+/g, " ").trim(), r = Array.from(s).slice(0, Gm).join("");
  return n && r ? `${t}（${n}：${r}）` : n ? `${t}（${n}）` : r ? `${t}（${r}）` : t;
}
const Ic = "rlzc_ledger", St = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, Km = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function qm(e) {
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
function Xe(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), r = String(t.getHours()).padStart(2, "0"), i = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${r}:${i}`;
}
const Ym = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]\s*([\s\S]*)$/i, Jm = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Zm(e) {
  const t = String(e ?? "").replace(/[Ａ-Ｚａ-ｚ]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248)), n = /[SABCD]/i.exec(t);
  return n ? n[0].toUpperCase() : null;
}
function Xm(e) {
  const t = {}, n = [];
  let s = null;
  for (const l of String(e ?? "").split(`
`)) {
    const a = l.replace(/\*\*/g, "").trim();
    if (!a || /^[━─—=\-]{3,}$/.test(a)) continue;
    const c = Ym.exec(a);
    if (c) {
      const A = /^os$/i.test(c[1]) ? "os" : c[1];
      s && !["地点", "时间", "日期"].includes(A) ? s[A] = c[2].trim() : t[A] = c[2].trim();
      continue;
    }
    const d = /^(.+?)\s*[：:]\s*$/.exec(a);
    if (d) {
      s = { 名: d[1].trim() }, n.push(s);
      continue;
    }
    if (a.includes("｜")) {
      const A = a.split("｜").map((p) => p.trim());
      n.push({ 名: A[0], 等级: A[1] ?? "" }), s = null;
    }
  }
  const r = n[0], o = !!r && ["积分", "位格", "道具", "在场"].some((l) => l in r) ? r.等级 : t.等级;
  return o ? Zm(o) : null;
}
function Nc(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = Jm.exec(s.mes);
    if (!r) continue;
    const i = Xm(r[1]);
    if (i) return i;
  }
  return null;
}
function Pc(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function Qm(e, t, n, s, r, i = "") {
  const o = n.结果 ?? "", l = (n.评价 ?? "").toUpperCase().trim(), a = ["D", "C", "B", "A", "S"].includes(l) ? l : null, c = o === "通关" || o === "成功" || o === "胜利", d = o === "失败", A = o === "死亡" || o === "阵亡";
  if (!c && !d && !A)
    return { delta: 0, source: "" };
  if (A)
    return { delta: 0, source: "" };
  if (d)
    return r ? { delta: 0, source: "清算未通关" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣除30%" };
  if (r) {
    const T = St[t] + 500;
    return { delta: Math.max(0, T - s), source: "清算通关·续存至斩杀线+500", clearWin: !0 };
  }
  if (!a)
    return { delta: 0, source: "", warn: "评价缺失或无法识别，不发奖励" };
  let p = Km[e][a];
  const z = i || e, w = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", x = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", _ = e !== t;
  let S = `副本奖励·${z} ${a}评`;
  return w ? (p = Math.floor(p * 0.5), S += "（×50%）") : (x || _) && (p = Math.floor(p * 0.6), S += "（×60%）"), { delta: p, source: S };
}
function fl(e, t = (/* @__PURE__ */ new Date()).getFullYear()) {
  const n = /^(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
  if (!n) return;
  const s = new Date(t, Number(n[1]) - 1, Number(n[2]), Number(n[3]), Number(n[4])).getTime();
  return Number.isFinite(s) ? s : void 0;
}
function eg(e, t) {
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
function tg(e) {
  let t = -1 / 0;
  return e.map((n, s) => (n.ts !== void 0 && Number.isFinite(n.ts) && (t = Math.floor(n.ts / 6e4)), { e: n, k: s, key: t })).sort((n, s) => n.key - s.key || n.k - s.k).map((n) => n.e);
}
function ng(e, t) {
  let n = e;
  return t.map((s) => n += s.delta);
}
function hn(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function ms(e, t, n) {
  let s = e, r = !1;
  for (const i of t)
    s += i.delta, s < n && (r = !0), i.clear && (r = !1);
  return r;
}
function sg(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function rg(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const r = s ?? St[n], i = Math.max(0, r - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${i}分（${n}级斩杀线${r}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const nt = "rlzc";
function ig() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function og(e, t, n) {
  return {
    id: ig(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function lg(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function Oc(e, t) {
  return e.packId === Zs ? e.briefing ? vr(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function ag(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return _e(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function cg(e, t) {
  const n = ag(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((r) => ({ ...r, atIndex: r.atIndex + s }))), t.manual = t.manual.filter((r) => r.atIndex < e.length && r.atIndex >= t.entryIndex), !0;
}
function Dc(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const pl = "rlzc_declined";
function Wt(e, t) {
  return `${e}:${t}`;
}
const Wi = _e;
function Lc(e, t, n, s = []) {
  const r = [];
  for (let i = Math.max(0, t); i < Math.min(n, e.length); i++) {
    if (!Wi(e[i])) continue;
    const o = yr(String(e[i].mes ?? ""));
    if (!o || s.includes(Wt(i, o.name))) continue;
    const l = r.findIndex((a) => a.name === o.name);
    l >= 0 && r.splice(l, 1), r.push(o);
  }
  return r;
}
function En(e, t, n, s = []) {
  if (!Wi(e[t])) return null;
  const r = jh(String(e[t].mes ?? ""), n, s);
  return r ? { ...r, index: t } : null;
}
function ug(e, t, n, s, r = [], i = []) {
  const o = [];
  for (let l = Math.max(0, n); l <= Math.min(s, e.length - 1); l++) {
    const a = En(e, l, t, o);
    if (a && !r.includes(Wt(l, a.info.name))) return a;
    if (a?.signal === 1 && !i.includes(Wt(l, a.info.name))) {
      const c = o.findIndex((d) => d.name === a.info.name);
      c >= 0 && o.splice(c, 1), o.push(a.info);
    }
  }
  return null;
}
function dg(e, t, n, s = [], r = []) {
  const i = /* @__PURE__ */ new Map();
  for (const o of s) {
    if (r.includes(o)) continue;
    const l = o.indexOf(":"), a = Number(o.slice(0, l)), c = o.slice(l + 1);
    if (!Number.isInteger(a) || a < n || a >= e.length) continue;
    const d = En(e, a, t, Lc(e, n, a, r));
    if (!d || d.info.name !== c) continue;
    const A = i.get(c);
    (!A || A.index < a) && i.set(c, d);
  }
  return [...i.values()].sort((o, l) => l.index - o.index);
}
function Ag(e, t, n = [], s = Ai, r = 0) {
  if (t?.status === "active") return null;
  let i = -1;
  for (let l = Math.max(0, r); l < e.length; l++) if (Wi(e[l])) {
    i = l;
    break;
  }
  if (i < 0 || t && t.entryIndex === i) return null;
  const o = En(e, i, s);
  return !o || n.includes(Wt(i, o.info.name)) ? null : o;
}
const fg = /[■█▰●◆★▮▓]/g, pg = /[□░▱○◇☆▯▒]/g;
function hg(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const i = Number(n[2]);
    return i === 100 ? Number(n[1]) : i > 0 ? Math.round(Number(n[1]) / i * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(fg) ?? []).length, r = (t.match(pg) ?? []).length;
  return s + r > 0 ? Math.round(s / (s + r) * 100) : null;
}
function hl(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function mg(e, t) {
  return hl(e).includes(hl(t));
}
function gg(e, t, n) {
  const s = [], r = Object.keys(n.perMessage).map(Number).sort((a, c) => a - c);
  let i = !1, o = null, l = !1;
  for (const a of r) {
    const c = n.perMessage[a], A = t.phases.find((C) => C.id === c.phase)?.name ?? "进行中", p = (C, I) => s.push({ index: a, phase: A, round: c.round, kind: C, text: I }), z = e[a]?.extra?.rlzc;
    for (const C of z?.sub?.events ?? []) C.status === "missed" && p("eventMissed", `${C.id} 未写出来：${C.reason}`);
    for (const C of z?.skippedEvents ?? []) p("eventSkipped", `${C.id} 条件不成立，已跳过：${C.reason}`);
    const w = sc(String(e[a]?.mes ?? "")), x = a === n.entryIndex;
    if (!w) {
      x || p("missing", "本轮回复缺少 <副本> 面板"), l = !x;
      continue;
    }
    l = !1;
    const _ = hg(w.progressBar);
    w.progressBar === void 0 ? p("progressUnreadable", "<副本> 中没有进度条一栏") : _ === null ? p("progressUnreadable", `进度条无法读出数值：「${w.progressBar}」`) : (!i && _ !== 0 && p("progressStart", `入场后第一轮的进度条应为0，实际为 ${_}`), (_ < 0 || _ > 100) && p("progressRange", `进度条数值 ${_} 超出 0–100`), o !== null && _ < o && p("progressDrop", `进度条比上一轮低：${o} → ${_}`), o = _), i = !0;
    const S = e[a]?.extra?.rlzc?.limit, T = S?.text ? S : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (T) {
      const C = w.limit;
      if (T.minutes !== void 0) {
        const I = Ja(C);
        !C || I.remaining === null || I.total === null ? p("limit", `时限读不到「剩余时间/总时长」：写的是「${C ?? "（没有时限一栏）"}」，注入的是「${T.text}」`) : (I.remaining > T.minutes && p("limit", `剩余时间比注入值多：写的是${wn(I.remaining)}，注入的是${wn(T.minutes)}`), T.total !== void 0 && I.total !== T.total && p("limit", `总时长与注入值不一致：写的是${wn(I.total)}，注入的是${wn(T.total)}`));
      } else (!C || !mg(C, T.text)) && p("limit", `时限与注入文字不一致：写的是「${C ?? "（没有时限一栏）"}」，注入的是「${T.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: i };
}
const xg = {
  D: 2e3,
  C: 8e3,
  B: 3e4,
  A: 1e5,
  S: 3e5
}, vg = [
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
function Rc(e) {
  return vg.some((t) => e.includes(t));
}
function yg(e) {
  if (e.subHype !== void 0)
    return Math.max(0, Math.min(100, Math.round(e.subHype)));
  const t = e.subHurt !== void 0 ? e.subHurt : e.bodyText ? Rc(e.bodyText) : !1;
  let n = 20;
  return e.hasEvents && (n += 20), e.hasPhaseSwitch && (n += 20), t && (n += 30), Math.min(100, n);
}
function bg(e, t) {
  return Math.round(e * 0.6 + t * 0.4);
}
function Gi(e) {
  const t = !e.packLevel || e.isRest ? e.playerLevel : e.packLevel, n = xg[t], s = !e.packLevel || e.isRest ? 0.3 : 1;
  return Math.round(n * s * (0.5 + e.heat / 100) * e.rand);
}
const kg = [10, 20, 50, 100, 200, 500, 1e3], wg = [20, 25, 15, 20, 10, 8, 2], zg = [15, 20, 15, 20, 10, 16, 4];
function _g(e, t, n) {
  const s = t.reduce((i, o) => i + o, 0);
  let r = n * s;
  for (let i = 0; i < e.length; i++)
    if (r -= t[i], r <= 0) return e[i];
  return e[e.length - 1];
}
function $g(e) {
  const { hype: t, isCorr: n, rand: s, names: r } = e, i = t / 40, o = [], l = [], a = t >= 70 ? zg : wg;
  for (let p = 1; p <= 3; p++) {
    const z = Math.min(1, Math.max(0, i - (p - 1)));
    if (s() < z) {
      let w = _g(kg, a, s());
      n && (w = Math.max(10, Math.round(w * 0.3 / 10) * 10)), o.push(w), l.push(r[Math.floor(s() * r.length)] ?? "匿名");
    }
  }
  const c = o.reduce((p, z) => p + z, 0), d = Math.floor(c * 0.6);
  let A = "";
  return o.length === 1 ? A = `直播打赏${o[0]}×60%` : o.length > 1 && (A = `直播打赏${o.length}笔·共${c}×60%`), { count: o.length, totalFace: c, faces: o, netTotal: d, source: A, names: l };
}
const ml = 10, gl = 13, Sg = 5, Cg = 25, Ki = 12, xl = 5, qi = 8;
function Fc(e, t = Ki) {
  const n = jc(t);
  return Math.max(1, n - 1 + Math.floor(e() * 3));
}
function jc(e) {
  const t = Math.round(Number(e));
  return Number.isFinite(t) ? Math.max(Sg, Math.min(Cg, t)) : Ki;
}
function Eg(e) {
  return xl + Math.floor(e() * (qi - xl + 1));
}
function qr(e, t, n, s, r, i, o) {
  const l = t && !n;
  return !(e.scope === "inst" && !l || e.scope === "corr" && l || e.when === "hurt" && !s || e.when === "calm" && r >= 30 || e.when === "open" && !i || e.when === "end" && !o);
}
function Mg(e) {
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
    isEnd: d,
    recentTexts: A,
    names: p,
    whoNames: z,
    rand: w
  } = e, x = e.count ?? Fc(w), _ = [], S = new Set(A), T = t.filter(
    (m) => qr(m, i, o, l, a, c, d)
  ), I = z.length > 0 ? n.filter(
    (m) => qr(m, i, o, l, a, c, d)
  ) : [], F = s.filter((m) => qr(m, i, o, l, a, c, d) ? m.phase && m.phase.length > 0 && r ? m.phase.includes(r) : !0 : !1), L = () => p[Math.floor(w() * p.length)] ?? "匿名", B = () => z[Math.floor(w() * z.length)] ?? "";
  for (let m = 0; m < x * 5 && _.length < x; m++) {
    let g = "", y = "discuss";
    if (F.length > 0 && w() < 0.3) {
      const ie = F[Math.floor(w() * F.length)];
      g = ie.text, y = ie.type;
    } else if (I.length > 0 && w() < 0.5) {
      const le = I[Math.floor(w() * I.length)];
      g = le.text.replace("{who}", B()), y = le.type;
    } else if (T.length > 0) {
      const le = T[Math.floor(w() * T.length)];
      g = le.text, y = le.type;
    }
    !g || S.has(g) || (S.add(g), _.push({ name: L(), text: g, type: y }));
  }
  const re = [...F, ...T], H = re.length ? Math.floor(w() * re.length) : 0;
  for (let m = 0; m < re.length && _.length < x; m++) {
    const g = re[(H + m) % re.length];
    S.has(g.text) || (S.add(g.text), _.push({ name: L(), text: g.text, type: g.type }));
  }
  return _;
}
const Bc = "rlzc_live", Tg = "本局直播打赏撤回", Uc = 20, dn = {
  corridorOn: "回廊直播开始。",
  corridorOff: "已下播。",
  enterOff: "进入副本，回廊直播已结束。",
  instanceOn: "本局副本直播开始。",
  instanceOff: "副本结束，直播已下播。",
  revoke: "主播在副本中死亡，本局打赏已全部撤回。"
}, Ig = { library: !0, total: 12, ratio: 100 };
function Ng(e, t) {
  if (!t.library) return e;
  const n = Math.max(10, Math.min(100, Math.round(Number(t.ratio) || 100)));
  return Math.max(1, Math.min(e, Math.round(e * n / 100)));
}
function Pg(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.corridor ?? {};
  return {
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0,
    corridor: { on: !!n.on, show: typeof n.show == "string" ? n.show : "", viewers: Number.isFinite(n.viewers) ? n.viewers : void 0 },
    sys: Array.isArray(t.sys) ? t.sys.filter((s) => s && typeof s.id == "number") : []
  };
}
function zr(e, t) {
  return e.disableLive ? { show: !1, checked: !1 } : { show: !0, checked: !!t };
}
function Kt(e) {
  const t = e?.extra?.rlzc?.live;
  return t && typeof t.show == "string" && Array.isArray(t.feed) ? t : void 0;
}
function Yi(e, t, n = e.length) {
  const s = [];
  for (let r = 0; r < Math.min(n, e.length); r++) {
    const i = e[r];
    if (!i || i.is_user) continue;
    const o = Kt(i);
    o && o.show === t && s.push({ index: r, rec: o });
  }
  return s;
}
function Ji(e, t) {
  return Yi(e, t).reduce((n, { rec: s }) => n + (s.tipNet || 0) - (s.revoke || 0), 0);
}
function _r(e, t) {
  let n = t.seq;
  for (const s of t.sys) n = Math.max(n, s.id);
  for (const s of e) for (const r of Kt(s)?.feed ?? []) n = Math.max(n, r.id);
  return n;
}
function Og(e, t = 30) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const r = Kt(e[s])?.feed ?? [];
    for (let i = r.length - 1; i >= 0 && n.length < t; i--) r[i].t === "msg" && n.push(r[i].text);
  }
  return n;
}
const Dg = /<状态栏>([\s\S]*?)<\/状态栏>/, Lg = /^(积分|位格|道具|在场)$/, Rg = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;
function Vc(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = Dg.exec(s.mes);
    if (r) return r[1];
  }
  return null;
}
function Zi(e, t = e.length) {
  return Nc(e, t) ?? "D";
}
function Hc(e, t = "") {
  if (!e) return [];
  const n = [];
  let s = null;
  for (const i of e.split(`
`)) {
    const o = i.trim();
    if (!o || /^[━─—=\-]{3,}$/.test(o)) continue;
    const l = Rg.exec(o);
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
    if (o === 0 && [...i.keys].some((a) => Lg.test(a))) return;
    const l = i.name.replace(/[（(][\s\S]*$/, "").trim();
    !l || /^(陌生|路人)/.test(l) || l === "{{user}}" || t && l === t || r.includes(l) || r.push(l);
  }), r;
}
function Wc(e, t) {
  return t?.hurt !== void 0 ? t.hurt : Rc(Bi(e));
}
function Fg(e) {
  const { rand: t } = e, n = Bi(e.text), s = Wc(e.text, e.sub), r = yg({ subHype: e.sub?.hype, subHurt: s, hasEvents: e.hasEvents, hasPhaseSwitch: e.hasPhaseSwitch, bodyText: n }), i = bg(e.prevHeat ?? Uc, r), o = e.scope === "corridor" || e.isRest, l = Gi({
    packLevel: e.scope === "instance" ? e.packLevel : null,
    playerLevel: e.playerLevel,
    isRest: e.isRest,
    heat: i,
    rand: 0.9 + t() * 0.2
  }), a = e.mix ?? Ig, c = Fc(t, a.total), d = e.awaitAi ? Math.max(c, qi) : a.library ? c : 0, A = d ? Mg({
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
    count: d
  }) : [], p = $g({ hype: r, isCorr: o, rand: t, names: e.names }), z = p.faces.map((S, T) => ({ t: "tip", name: p.names[T], text: "", amount: S, net: Math.floor(S * 0.6) })), w = [];
  let x;
  e.settle && (e.settle.died && (x = e.settle.tipsBefore + p.netTotal, x > 0 ? w.push({ t: "sys", name: "", text: dn.revoke, amount: 0, net: -x }) : x = void 0), w.push({ t: "sys", name: "", text: dn.instanceOff, amount: 0, net: 0 }));
  const _ = {
    show: e.show,
    scope: e.scope,
    hype: r,
    heat: i,
    viewers: l,
    hurt: s,
    feed: [],
    tipNet: p.netTotal,
    tipFace: p.totalFace,
    tipSource: p.source
  };
  return x && (_.revoke = x), e.awaitAi ? (_.pending = { local: A, tips: z, sys: w, target: c, aiWant: Ng(c, a), library: a.library }, a.library || (_.pending.borrow = Eg(t))) : _.feed = Gc(A.slice(0, c), z, w, e.firstId, t), _;
}
function jg(e, t, n) {
  if (n.aiWant === void 0) return Bg(e, t, n.target);
  const s = n.library !== !1;
  if (!e?.length) return s ? t.slice(0, n.target) : t.slice(0, n.borrow ?? qi);
  const r = e.slice(0, n.aiWant);
  if (!s) return r;
  const i = new Set(r.map((o) => o.text));
  for (const o of t) {
    if (r.length >= n.target) break;
    i.has(o.text) || (i.add(o.text), r.push(o));
  }
  return r;
}
function Bg(e, t, n) {
  const s = Math.max(ml, Math.min(gl, n));
  if (!e?.length) return t.slice(0, s);
  const r = e.slice(0, gl);
  if (r.length >= ml) return r;
  const i = new Set(r.map((o) => o.text));
  for (const o of t) {
    if (r.length >= s) break;
    i.has(o.text) || (i.add(o.text), r.push(o));
  }
  return r;
}
function Gc(e, t, n, s, r) {
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
function Kc(e, t, n, s) {
  if (!e.pending) return e;
  const { pending: r, ...i } = e, o = jg(t, r.local, r);
  return { ...i, feed: Gc(o, r.tips, r.sys, n, s) };
}
function Ug(e, t) {
  if (!e) return [];
  const n = [];
  return e.tipNet > 0 && n.push({ delta: e.tipNet, source: e.tipSource, type: "tip", at: t }), e.revoke && e.revoke > 0 && n.push({ delta: -e.revoke, source: Tg, type: "tip", at: t }), n;
}
function Vg(e) {
  return `其中本局直播打赏${e}分，副本内不可使用，离开副本后可用。`;
}
function Hg(e, t) {
  return e && `${e}${e.endsWith("。") ? "" : "。"}${Vg(t)}`;
}
function Wg(e, t, n) {
  const s = Yi(e, n), r = [];
  for (const { rec: i } of s) r.push(...i.feed);
  for (const i of t.sys) i.show === n && r.push({ id: i.id, t: i.t, name: i.name, text: i.text, amount: i.amount, net: i.net });
  return r.sort((i, o) => i.id - o.id), { items: r, last: s[s.length - 1]?.rec };
}
function Gg(e, t) {
  let n = "", s = -1;
  for (const r of t.sys) r.id > s && (s = r.id, n = r.show);
  for (const r of e) {
    const i = Kt(r);
    if (i)
      for (const o of i.feed) o.id > s && (s = o.id, n = i.show);
  }
  return n;
}
function Kg(e, t, n, s = /* @__PURE__ */ new Set()) {
  const r = n.inInstance ? "instance" : "corridor", i = n.inInstance ? n.instanceLive : t.corridor.on, o = n.inInstance ? n.instanceLive ? n.instanceShow ?? "" : "" : i ? t.corridor.show : Gg(e, t), l = { on: i, canToggle: !n.inInstance, scope: r, viewers: 0, heat: 0, tipTotal: 0, injectToAI: n.injectToAI, feed: [], lastTip: null };
  if (!o) return l;
  const { items: a, last: c } = Wg(e, t, o), d = a.filter((z) => !s.has(z.id));
  let A = 0, p = null;
  for (const z of d)
    A += z.net, z.t === "tip" && (p = { id: z.id, net: z.net });
  return {
    ...l,
    viewers: i ? c?.viewers ?? n.startViewers ?? 0 : 0,
    heat: i ? c?.heat ?? Uc : 0,
    tipTotal: A,
    feed: d.slice(-60),
    lastTip: p
  };
}
const qg = ["小满", "好运来", "路过的D级", "一个路过的A级", "数据党", "理性讨论", "吃瓜", "夜班保安", "柠檬汁", "阿柒", "东区卖菜的", "西区摆摊的", "情报社小号", "失眠第三天", "房租交不起", "今天也在种土豆", "匿名", "光幕前的咸鱼", "刚通关的C级", "排行榜第九十九", "不想进本", "炸鱼被抓过", "黑市常客", "训练场打卡人", "药剂站熬夜班", "公会跑腿的", "一个路人", "今日份幸运", "积分快见底", "刚升B级", "看录像长大的", "老观众", "新来的", "别叫我大佬", "蹲一个结算", "白开水", "半夜不睡", "又是我", "打工人", "瓜田里的猹", "慢热", "晴天", "阿九", "十一", "小绿", "老周", "木子", "苏苏", "七七", "一颗橘子", "等天亮", "北风", "不吃香菜", "没抢到号", "退役S级", "D级万岁", "靠运气活着", "只看不说", "路过打个卡", "最后一排"], Yg = [{ type: "praise", text: "这反应速度，不愧是主播" }, { type: "praise", text: "冷静得不像第一次进这个级别的本", scope: "inst" }, { type: "praise", text: "刚才那个判断绝了" }, { type: "praise", text: "主播脑子转得是真快" }, { type: "praise", text: "这波我服" }, { type: "praise", text: "稳，太稳了" }, { type: "praise", text: "讲道理，换我早慌了" }, { type: "praise", text: "这就是高手吗" }, { type: "praise", text: "看得我手心出汗，主播还面不改色" }, { type: "praise", text: "刚才那句话说得漂亮" }, { type: "praise", text: "细节拉满，这都注意到了", scope: "inst" }, { type: "praise", text: "主播说话好有条理" }, { type: "praise", text: "这才叫会玩" }, { type: "praise", text: "就冲这个判断，关注了" }, { type: "praise", text: "有勇有谋" }, { type: "praise", text: "比上一个主播强多了" }, { type: "praise", text: "队友拖后腿，主播一个人在带", scope: "inst" }, { type: "praise", text: "这个位置站得好", scope: "inst" }, { type: "praise", text: "我宣布这是本周最佳直播" }, { type: "praise", text: "主播镇定得让我也镇定了" }, { type: "praise", text: "那个眼神，太帅了" }, { type: "praise", text: "心态真好，要是我早骂人了" }, { type: "praise", text: "这个节奏把握得好", scope: "inst" }, { type: "praise", text: "看出来是做过功课的" }, { type: "praise", text: "夸一句，主播是真的会说话" }, { type: "praise", text: "一句话就把场面稳住了", scope: "inst" }, { type: "praise", text: "这份胆量我是没有" }, { type: "praise", text: "学到了，下次我也这么干" }, { type: "praise", text: "主播好好看" }, { type: "praise", text: "声音也好听，别下播" }, { type: "praise", text: "越看越顺眼" }, { type: "praise", text: "这气质，放在哪个本都是主角" }, { type: "praise", text: "能屈能伸，佩服" }, { type: "praise", text: "刚才那一下我起立鼓掌" }, { type: "praise", text: "不慌不忙，高手风范" }, { type: "praise", text: "回廊里也过得这么讲究，爱了", scope: "corr" }, { type: "praise", text: "主播种的菜看着真水灵", scope: "corr" }, { type: "praise", text: "这手艺可以去西区摆摊了", scope: "corr" }, { type: "praise", text: "休整都不忘练，怪不得排名涨", scope: "corr" }, { type: "praise", text: "房间收拾得真干净", scope: "corr" }, { type: "bless", text: "祝平安出来！！", scope: "inst" }, { type: "bless", text: "主播一定要活着回来", scope: "inst" }, { type: "bless", text: "保佑保佑" }, { type: "bless", text: "冲啊主播！" }, { type: "bless", text: "这把一定能过", scope: "inst" }, { type: "bless", text: "结算见！", scope: "inst", when: "end" }, { type: "bless", text: "平安就好，评级无所谓", scope: "inst" }, { type: "bless", text: "等你出来请你吃饭", scope: "inst" }, { type: "bless", text: "好运加满，霉运退散" }, { type: "bless", text: "希望别再有人出事了", scope: "inst", when: "hurt" }, { type: "bless", text: "主播加油，我在东区超市门口看着呢" }, { type: "bless", text: "撑住，天总会亮的", scope: "inst" }, { type: "bless", text: "别怕，我们都在" }, { type: "bless", text: "好人一生平安" }, { type: "bless", text: "这波过了就能歇歇了", scope: "inst" }, { type: "bless", text: "下个副本抽个简单的吧", scope: "corr" }, { type: "bless", text: "注意安全，别逞强", scope: "inst" }, { type: "bless", text: "保重身体啊", when: "hurt" }, { type: "bless", text: "受伤了先处理伤口", scope: "inst", when: "hurt" }, { type: "bless", text: "一路绿灯，一路绿灯" }, { type: "bless", text: "今天也要好好活着" }, { type: "bless", text: "愿系统对你手下留情" }, { type: "bless", text: "别哭，我们陪你", when: "hurt" }, { type: "bless", text: "等着看你升级" }, { type: "bless", text: "最后一口气了，撑住", scope: "inst", when: "end" }, { type: "bless", text: "最后几轮，稳住！", scope: "inst", when: "end" }, { type: "bless", text: "主播今天早点睡", scope: "corr" }, { type: "bless", text: "休息好了再进本", scope: "corr" }, { type: "bless", text: "希望房租别涨", scope: "corr" }, { type: "bless", text: "回廊安稳一天是一天", scope: "corr" }, { type: "discuss", text: "现在什么情况，我刚进来" }, { type: "discuss", text: "来了来了，这把什么本", scope: "inst", when: "open" }, { type: "discuss", text: "开播了开播了", when: "open" }, { type: "discuss", text: "新主播？没见过", when: "open" }, { type: "discuss", text: "先别吵，看局势" }, { type: "discuss", text: "我觉得还有线索没找到", scope: "inst" }, { type: "discuss", text: "按往届，这本不好打", scope: "inst" }, { type: "discuss", text: "有没有人看过这本的录像", scope: "inst" }, { type: "discuss", text: "黑市那种录像别全信" }, { type: "discuss", text: "这队人各怀心思吧", scope: "inst" }, { type: "discuss", text: "现在还剩几个人？", scope: "inst" }, { type: "discuss", text: "前面说的那个我也注意到了" }, { type: "discuss", text: "理性讨论，别带节奏" }, { type: "discuss", text: "我赌主播能过" }, { type: "discuss", text: "有人算过这把能拿什么评吗", scope: "inst" }, { type: "discuss", text: "主播刚才是不是话里有话" }, { type: "discuss", text: "这个人说话一直留半句", scope: "inst" }, { type: "discuss", text: "注意细节，刚才那句不对劲", scope: "inst" }, { type: "discuss", text: "我在光幕前面站了一个小时了" }, { type: "discuss", text: "回放能看吗，刚才没看清" }, { type: "discuss", text: "有没有懂的解释一下" }, { type: "discuss", text: "你们看出来了吗，我看不出来" }, { type: "discuss", text: "这一段要是剪进录像会卖爆" }, { type: "discuss", text: "楼上别剧透……虽然我也不知道" }, { type: "discuss", text: "好无聊，快进", when: "calm" }, { type: "discuss", text: "主播在发呆吗", when: "calm" }, { type: "discuss", text: "挂着当背景音了", when: "calm" }, { type: "discuss", text: "去泡了碗面回来还是这样", when: "calm" }, { type: "discuss", text: "这么安静，要出事了吧", scope: "inst", when: "calm" }, { type: "discuss", text: "暴风雨前的宁静", scope: "inst", when: "calm" }, { type: "discuss", text: "啊啊啊有人倒了", scope: "inst", when: "hurt" }, { type: "discuss", text: "刚才那一下我没敢看", when: "hurt" }, { type: "discuss", text: "又走一个……", scope: "inst", when: "hurt" }, { type: "discuss", text: "手在抖吧，换我也抖", when: "hurt" }, { type: "discuss", text: "快结束了吧", scope: "inst", when: "end" }, { type: "discuss", text: "结算前最后几轮最容易出事", scope: "inst", when: "end" }, { type: "discuss", text: "今天种什么？", scope: "corr" }, { type: "discuss", text: "回廊直播也有人看，我服了我自己", scope: "corr" }, { type: "discuss", text: "排行榜又变了，你们看了吗", scope: "corr" }, { type: "discuss", text: "下个本打算报哪个？", scope: "corr" }, { type: "cold", text: "别高兴太早" }, { type: "cold", text: "我看悬" }, { type: "cold", text: "这把凉了吧" }, { type: "cold", text: "就这？" }, { type: "cold", text: "也就一般" }, { type: "cold", text: "运气好而已" }, { type: "cold", text: "换个人也能做到" }, { type: "cold", text: "等着翻车吧" }, { type: "cold", text: "这种判断，迟早出事" }, { type: "cold", text: "看了半天也没看出哪里厉害" }, { type: "cold", text: "太磨叽了" }, { type: "cold", text: "说了这么多，一点用没有" }, { type: "cold", text: "我押失败", scope: "inst" }, { type: "cold", text: "评级能拿个C就不错了", scope: "inst" }, { type: "cold", text: "队友再强也带不动", scope: "inst" }, { type: "cold", text: "太自信了，这本专治自信", scope: "inst" }, { type: "cold", text: "往届比这厉害的都栽在这", scope: "inst" }, { type: "cold", text: "真以为能全身而退？", scope: "inst" }, { type: "cold", text: "没意思，我换台了" }, { type: "cold", text: "这操作也就D级水平" }, { type: "cold", text: "这不是冷静，是反应慢" }, { type: "cold", text: "别吹了，看结算", scope: "inst" }, { type: "cold", text: "种菜有什么好看的", scope: "corr" }, { type: "cold", text: "回廊里直播，缺积分缺疯了吧", scope: "corr" }, { type: "cold", text: "天天摆烂，等着被清算吧", scope: "corr" }, { type: "envy", text: "凭什么这种人能上热门" }, { type: "envy", text: "我直播三天没人看，这也行？" }, { type: "envy", text: "长得好就是占便宜" }, { type: "envy", text: "又是这种运气好的" }, { type: "envy", text: "打赏的是托吧" }, { type: "envy", text: "我也想有人给我刷" }, { type: "envy", text: "这点本事也能拿打赏" }, { type: "envy", text: "同样是D级进来的，差距怎么这么大" }, { type: "envy", text: "分到这么好的队友，换我我也行", scope: "inst" }, { type: "envy", text: "酸了，真的酸了" }, { type: "envy", text: "一进来就有大佬带，羡慕不来", scope: "inst" }, { type: "envy", text: "这热度买的吧" }, { type: "envy", text: "凭什么打赏都往这边跑" }, { type: "envy", text: "我通关都没人看" }, { type: "envy", text: "排行榜上那些名字，一半靠运气" }, { type: "envy", text: "有人天生就是被偏爱的" }, { type: "envy", text: "我要是有这配置，比这还稳", scope: "inst" }, { type: "envy", text: "住的地方比我好十倍", scope: "corr" }, { type: "envy", text: "在回廊都能开播赚积分，羡慕哭了", scope: "corr" }, { type: "envy", text: "这菜种得，比我吃的还好", scope: "corr" }, { type: "smear", text: "装什么装" }, { type: "smear", text: "演的吧，这反应太假了" }, { type: "smear", text: "人设立得挺好" }, { type: "smear", text: "会说话而已，真打起来就露馅" }, { type: "smear", text: "这种人最会卖队友" }, { type: "smear", text: "表面客气，背地里肯定算计着" }, { type: "smear", text: "我不信真这么淡定" }, { type: "smear", text: "刚才那个眼神，心虚了吧" }, { type: "smear", text: "故意卖惨要打赏" }, { type: "smear", text: "刚才明明可以救，没救", scope: "inst", when: "hurt" }, { type: "smear", text: "自私，只顾自己", scope: "inst" }, { type: "smear", text: "队友出事了还这么冷静，冷血吧", scope: "inst", when: "hurt" }, { type: "smear", text: "这是在拿别人探路", scope: "inst" }, { type: "smear", text: "满嘴好话，一件实事没干" }, { type: "smear", text: "装新人的吧" }, { type: "smear", text: "就是冲着打赏来的" }, { type: "smear", text: "看着就不是好人" }, { type: "smear", text: "别被骗了，都是算计好的" }, { type: "smear", text: "下了本也要直播，吃相难看", scope: "corr" }, { type: "smear", text: "种田人设，炒给谁看", scope: "corr" }, { type: "rumor", text: "听说积分是借的，真的假的" }, { type: "rumor", text: "肯定是抱大腿进来的" }, { type: "rumor", text: "我朋友说在黑市见过这人" }, { type: "rumor", text: "据说上一个本是被人带飞的" }, { type: "rumor", text: "听说欠了一屁股积分" }, { type: "rumor", text: "有人说是买了攻略才敢进的", scope: "inst" }, { type: "rumor", text: "听说被公会踢出来过" }, { type: "rumor", text: "情报社的人说，这人被抽查过" }, { type: "rumor", text: "有人在西区看到这人跟黑市贩子说话" }, { type: "rumor", text: "据说是走后门才越级的" }, { type: "rumor", text: "听说上个本的队友都没出来" }, { type: "rumor", text: "有人说这人其实早就待清算了" }, { type: "rumor", text: "我听说排名是刷的" }, { type: "rumor", text: "传闻进本前偷偷买了防抽查道具" }, { type: "rumor", text: "听说有人专门花钱买这人的录像" }], Jg = [{ type: "praise", text: "{who}刚才那下好帅" }, { type: "praise", text: "{who}挺靠谱的" }, { type: "bless", text: "{who}别出事啊" }, { type: "bless", text: "心疼{who}" }, { type: "bless", text: "{who}还好吗", when: "hurt" }, { type: "discuss", text: "{who}靠谱吗，我看不透" }, { type: "discuss", text: "{who}又不说话了" }, { type: "discuss", text: "{who}刚才那句什么意思" }, { type: "discuss", text: "盯紧{who}" }, { type: "discuss", text: "{who}和主播配合挺默契" }, { type: "discuss", text: "{who}好像知道点什么" }, { type: "cold", text: "{who}也就那样" }, { type: "cold", text: "指望{who}？算了吧" }, { type: "envy", text: "凭什么{who}也有人喜欢" }, { type: "smear", text: "我就说{who}有问题" }, { type: "smear", text: "{who}在演" }, { type: "smear", text: "{who}那个表情不对劲" }, { type: "rumor", text: "听说{who}在排行榜上挂过名" }, { type: "rumor", text: "我听说{who}以前出过事" }, { type: "rumor", text: "{who}跟主播是不是早就认识" }], Zg = {
  names: qg,
  pool: Yg,
  templates: Jg
}, us = /* @__PURE__ */ new Set(), rn = [];
let $t = null, Ds = [], Yr = null;
function gs() {
  for (const e of Ds.slice())
    try {
      e();
    } catch (t) {
      console.warn("[rlzc] RLZC_LIVE 订阅回调出错", t);
    }
}
function Xg() {
  return 1500 + Math.random() * 1500;
}
function qc() {
  $t = null;
  const e = rn.shift();
  e !== void 0 && (us.delete(e), gs()), rn.length && ($t = setTimeout(qc, Xg()));
}
function Xi(e, t = !1) {
  if (t && rn.length) {
    for (const n of rn) us.delete(n);
    rn.length = 0, $t && clearTimeout($t), $t = null;
  }
  if (e.length) {
    for (const n of e)
      us.add(n.id), rn.push(n.id);
    $t ? gs() : qc();
  }
}
function Qg() {
  $t && clearTimeout($t), $t = null, rn.length = 0, us.clear();
}
function ex(e) {
  Yr = e, window.RLZC_LIVE = {
    get: () => Yr.view(us),
    subscribe(t) {
      return typeof t != "function" ? () => {
      } : (Ds.push(t), () => {
        Ds = Ds.filter((n) => n !== t);
      });
    },
    toggle: () => Yr.toggle()
  };
}
function tx(e, t = 100) {
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
function nx() {
  const e = document.getElementById("mes_stop");
  return !!e && getComputedStyle(e).display !== "none";
}
const Yc = "rlzc_market", vl = { D: 0, C: 1, B: 2, A: 3, S: 4 }, Jc = { D: 1e3, C: 5e3, B: 2e4, A: 8e4, S: 3e5 }, yl = 10, sx = 0.8, rx = "ending", ix = "rating", Zc = ["S", "A", "B", "C", "D"];
function ox(e, t) {
  return vl[e] - vl[t];
}
function lx(e) {
  return e <= -2 ? 0.85 : e === -1 ? 0.75 : e === 0 ? 0.6 : e === 1 ? 0.4 : e === 2 ? 0.25 : 0.15;
}
const Ms = {
  "le-1": { S: 0.15, A: 0.3, B: 0.3, C: 0.17, D: 0.08 },
  0: { S: 0.08, A: 0.2, B: 0.35, C: 0.25, D: 0.12 },
  1: { S: 0.04, A: 0.12, B: 0.3, C: 0.32, D: 0.22 },
  ge2: { S: 0.02, A: 0.08, B: 0.25, C: 0.35, D: 0.3 }
};
function ax(e) {
  return e <= -1 ? Ms["le-1"] : e === 0 ? Ms[0] : e === 1 ? Ms[1] : Ms.ge2;
}
function $r(e) {
  return Math.round(e * 100) / 100;
}
function cx(e, t) {
  const n = 0.93 + t() * 0.14;
  return Math.max(1.01, $r(1 / e * sx * n));
}
function Xc(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function Yn(e, t, n, s) {
  return { id: e, label: t, p: n, odds: cx(n, s) };
}
function Qc(e, t, n) {
  const s = {
    id: t.id,
    kind: e,
    q: t.q,
    options: [Yn("yes", t.yes, t.p, n), Yn("no", t.no, $r(1 - t.p), n)],
    judge: t.judge
  };
  return t.judgeNo && (s.judgeNo = t.judgeNo), t.by && (s.by = t.by), s;
}
function ux(e) {
  const { pack: t, rand: n } = e;
  if (t.rest) return [];
  const s = ox(t.level, e.playerLevel), r = lx(s), i = [
    { id: rx, kind: "ending", q: "本局结果", options: [Yn("win", "通关", r, n), Yn("lose", "失败", $r(1 - r), n)] }
  ], o = ax(s);
  if (i.push({ id: ix, kind: "rating", q: "本局评价", options: Zc.map((l) => Yn(l, l, o[l], n)) }), e.withEvents) for (const l of kh(t)) i.push(Qc("event", l, n));
  return i;
}
const bl = 2, dx = 5;
function gi(e, t, n) {
  const s = e.map((i, o) => o), r = [];
  for (; r.length < t && s.length; ) r.push(s.splice(Math.floor(n() * s.length), 1)[0]);
  return r.sort((i, o) => i - o).map((i) => e[i]);
}
function Ax(e, t, n) {
  if (!t) return { markets: e.filter((o) => o.kind === "ending" || o.kind === "rating") };
  const s = bl + Math.floor(n() * (dx - bl + 1)), r = 1 + Math.floor(n() * 2), i = gi(e, s - r, n);
  return { markets: i, plan: { total: s, freak: r, order: e.map((o) => o.id) }, reserve: e.filter((o) => !i.includes(o)) };
}
function fx(e, t, n) {
  const s = e.markets.filter((c) => c.kind !== "freak"), r = e.reserve ?? [];
  if (!e.plan) return { markets: [...s, ...t ? kl(t, n) : []], reserve: r };
  const i = kl(gi(t ?? [], e.plan.freak, n), n), o = gi(r, e.plan.freak - i.length, n), l = (c) => e.plan.order.indexOf(c.id);
  return { markets: [...[...s, ...o].sort((c, d) => l(c) - l(d)), ...i], reserve: r.filter((c) => !o.includes(c)) };
}
function px(e, t) {
  return e - Math.max(0, t);
}
function eu(e) {
  const t = Jc[e.playerLevel], n = px(e.balance, e.lockedTips), s = Math.max(0, Math.min(t - e.already, n)), r = e.stake, i = Number.isFinite(r) && r > 0 && e.balance - r < St[e.playerLevel];
  let o;
  return !Number.isInteger(r) || r < yl ? o = `最少押${yl}` : e.already + r > t ? o = "超过单注上限" : r > n && (o = "可用余额不足"), { ok: !o, reason: o, cap: t, max: s, belowKill: i };
}
function hx(e, t) {
  return e.tickets.filter((n) => n.market === t).reduce((n, s) => n + s.stake, 0);
}
function mx(e, t) {
  return Object.keys(e).map(Number).filter((n) => n >= t).length >= 2;
}
const tu = ["通关", "成功", "胜利"], Qi = ["死亡", "阵亡"];
function gx(e) {
  return Qi.includes(String(e ?? "").trim());
}
function xx(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  return Qi.includes(n) ? { kind: "lost", index: t } : tu.includes(n) ? { kind: "option", option: "win", index: t } : n === "失败" ? { kind: "option", option: "lose", index: t } : { kind: "refund", index: t };
}
function vx(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  if (Qi.includes(n)) return { kind: "lost", index: t };
  const s = String(e.rating ?? "").trim().toUpperCase();
  return tu.includes(n) && Zc.includes(s) ? { kind: "option", option: s, index: t } : { kind: "refund", index: t };
}
function yx(e, t) {
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
  return a && n.endedBy === "tag" && gx(n.result) ? { kind: "lost", index: r } : a && n.endedBy !== "tag" ? { kind: "refund", index: r } : o ? null : i && l > 0 ? { kind: "option", option: "no", index: r } : { kind: "refund", index: r };
}
function bx(e) {
  const t = {};
  for (const n of e.markets)
    e.outcome.voided ? t[n.id] = { kind: "refund", index: -1 } : n.kind === "ending" ? t[n.id] = xx(e.outcome) : n.kind === "rating" ? t[n.id] = vx(e.outcome) : t[n.id] = yx(n, e);
  return t;
}
function xi(e, t) {
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
function kx(e, t) {
  const n = {}, s = xi({ ...e, frozen: void 0 }, t);
  for (const r of e.tickets) n[r.id] = s[r.id] ?? { stamp: "refund", index: -1 };
  return n;
}
function wx(e, t, n, s = []) {
  const r = new Set(Array.isArray(s) ? s : [s]);
  return Object.keys(t).map(Number).filter((i) => i > n && _e(e[i])).sort((i, o) => i - o).map((i) => {
    const o = e[i]?.extra?.rlzc?.sub;
    return o && !o.skipped && o.markets && typeof o.markets == "object" ? { index: i, state: "ok", hits: o.markets } : !o && r.has(i) ? { index: i, state: "pending", hits: {} } : { index: i, state: "miss", hits: {} };
  });
}
function zx(e, t) {
  const n = [];
  if (e.frozen) return n;
  for (const s of e.markets)
    s.kind !== "event" && s.kind !== "freak" || t[s.id] || !s.judge || (n.push({ id: s.id, judge: s.judge }), s.judgeNo && n.push({ id: `${s.id}:no`, judge: s.judgeNo }));
  return n;
}
function nu(e, t) {
  return e.markets.find((n) => n.id === t);
}
function _x(e, t) {
  return e?.options.find((n) => n.id === t)?.label ?? t;
}
function $x(e, t) {
  const n = nu(e, t.market);
  return `下注·${e.packName}·${n?.q ?? t.market}·${_x(n, t.option)}`;
}
function Sx(e, t, n) {
  const s = [];
  for (const r of e.tickets) {
    s.push({ delta: -r.stake, source: $x(e, r), type: "bet", at: r.at, pos: r.after, seq: r.seq ?? 0 });
    const i = t[r.id];
    if (!i || i.stamp === "lose") continue;
    const o = nu(e, r.market)?.q ?? r.market, l = (i.index >= 0 ? n(i.index) : void 0) ?? r.at;
    i.stamp === "win" ? s.push({ delta: Xc(r.stake, r.odds), source: `赌票兑付·${e.packName}·${o}`, type: "bet", at: l, pos: i.index }) : s.push({ delta: r.stake, source: `赌票退还·${e.packName}·${o}`, type: "bet", at: l, pos: i.index });
  }
  return s;
}
const Cx = '你是回廊黑市的庄家，要为主播即将进入的副本开几个离谱但有趣的盘口。你只知道下面这些公开信息，不知道剧情会怎么走。出2到3道是非题：题目20字以内，称{{user}}为主播，不用性别代词；必须能从之后的正文里直接看出是或否；不要问结局、评价和生死，那些已经有盘了；不要涉及公开信息以外的设定。每题给一个你估计「是」的概率p（0.05到0.95）。只输出JSON：[{"q":"题目","judge":"用来判断是否发生的一句陈述","p":0.3}]', Ex = 4e3;
function su(e) {
  const n = _c(e).split(`
`), s = n.findIndex((i) => /副本简报/.test(i));
  return (s >= 0 ? n.slice(s, s + 6) : n).join(`
`).trim().slice(0, 1e3);
}
function Mx(e) {
  const t = e.docs.filter((s) => s.md && s.md.trim()).map((s) => `## ${s.title}
${s.md.trim()}`).join(`

`).slice(0, Ex), n = [
    `【副本】${e.name}　等级：${e.level}`,
    `【简报】
${e.briefing || "（无）"}`,
    `【公开资料】
${t || "（无）"}`
  ].join(`

`);
  return { system: Cx, user: n };
}
function Tx(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), r = t.lastIndexOf("]");
  if (s < 0 || r <= s) throw new Be("返回里没有 JSON 数组");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new Be("返回的 JSON 无法解析");
  }
  if (!Array.isArray(i)) throw new Be("返回的不是 JSON 数组");
  const o = [];
  for (const l of i) {
    if (!l || typeof l.q != "string" || typeof l.judge != "string") continue;
    const a = l.q.trim(), c = l.judge.trim(), d = typeof l.p == "number" ? l.p : Number(l.p);
    if (!(!a || a.length > 20 || !c || !Number.isFinite(d) || d < 0.05 || d > 0.95) && (o.push({ q: a, judge: c, p: $r(d) }), o.length >= 3))
      break;
  }
  if (!o.length) throw new Be("没有合格的题");
  return o;
}
async function Ix(e, t, n = 1) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return Tx(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
function kl(e, t) {
  return e.map((n, s) => Qc("freak", { id: `F${s + 1}`, q: n.q, yes: "会", no: "不会", p: n.p, judge: n.judge }, t));
}
function Nx(e) {
  return `{{user}}在黑市押了自己本局失败，押注${e}分。`;
}
function Px(e) {
  return `{{user}}刚在赌坊输掉${e}分，余额已低于斩杀线。`;
}
function Ox(e) {
  return `{{user}}刚在赌坊一局赢了${e}分。`;
}
function Dx(e) {
  return e.kind === "betLose" ? Nx(e.amount) : e.kind === "casinoLoss" ? Px(e.amount) : Ox(e.amount);
}
function vi(e, t) {
  if (t.kind === "betLose") {
    const n = e.find((s) => s.kind === "betLose");
    if (n && !n.sent) return e.map((s) => s === n ? { ...s, amount: s.amount + t.amount, after: t.after } : s);
  }
  return [...e, t];
}
function Lx(e) {
  return e.filter((t) => !t.sent);
}
function Rx(e) {
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
const Jr = (e) => Array.from({ length: e }, (t, n) => n + 1), eo = [
  {
    id: "bell",
    name: "听钟",
    desc: "押钟声单双、大小，或猜几下。",
    bets: [
      { id: "odd", label: "单", mult: 1.6 },
      { id: "even", label: "双", mult: 1.6 },
      { id: "small", label: "小", mult: 1.6 },
      { id: "big", label: "大", mult: 1.6 },
      ...Jr(12).map((e) => ({ id: `n${e}`, label: `${e}下`, mult: 9.6 }))
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
      ...Jr(20).map((e) => ({ id: `d${e}`, label: `${e}号`, mult: 16 }))
    ]
  },
  {
    id: "lot",
    name: "抽签",
    desc: "三支签，一支大吉。",
    bets: Jr(3).map((e) => ({ id: `s${e}`, label: `第${e}支`, mult: 2.4 }))
  },
  {
    id: "card",
    name: "翻牌",
    desc: "和庄家各翻一张，大的赢，平局庄家赢。",
    bets: [{ id: "high", label: "比大小", mult: 1.73 }]
  }
];
function Sn(e) {
  return eo.find((t) => t.id === e);
}
function Fn(e, t) {
  return Math.min(e, 1 + Math.floor(t() * e));
}
function Fx(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function jx(e, t, n, s) {
  const r = Sn(e), i = r?.bets.find((d) => d.id === t);
  if (!r || !i) return null;
  let o = !1, l = "", a = [];
  switch (r.id) {
    case "bell": {
      const d = Fn(12, s);
      a = [d], i.id === "odd" || i.id === "even" ? (o = d % 2 === 1 == (i.id === "odd"), l = `${d}下，${d % 2 ? "单" : "双"}`) : i.id === "small" || i.id === "big" ? (o = d <= 6 == (i.id === "small"), l = `${d}下，${d <= 6 ? "小" : "大"}`) : (o = i.id === `n${d}`, l = `${d}下`);
      break;
    }
    case "door": {
      const d = Fn(20, s);
      if (a = [d], i.id.startsWith("r")) {
        const A = Number(i.id.slice(1));
        o = d > (A - 1) * 5 && d <= A * 5;
      } else o = i.id === `d${d}`;
      l = `${d}号门`;
      break;
    }
    case "lot": {
      const d = Fn(3, s);
      a = [d], o = i.id === `s${d}`, l = `第${d}支大吉`;
      break;
    }
    case "card": {
      const d = Fn(13, s), A = Fn(13, s);
      a = [d, A], o = d > A, l = `你 ${d}，庄家 ${A}`;
      break;
    }
  }
  const c = o ? Fx(n, i.mult) : 0;
  return { win: o, payout: c, net: o ? c - n : -n, result: l, label: `押${i.label}`, faces: a };
}
function Bx(e, t) {
  return `赌坊·${Sn(e)?.name ?? e}·${t}`;
}
function wl(e) {
  const t = eo.map((i) => i.id), n = Math.min(t.length - 1, Math.floor(e() * t.length)), s = t.filter((i, o) => o !== n), r = Math.min(s.length - 1, Math.floor(e() * s.length));
  return [t[n], s[r]];
}
function Ux(e, t, n) {
  const s = e.tables.length === 2 && e.tables.every((o) => Sn(o));
  if (s && e.key === t) return { tables: e.tables, key: t, changed: !1 };
  const r = (o) => s && o.length === 2 && o.every((l) => e.tables.includes(l));
  let i = wl(n);
  for (let o = 0; o < 20 && r(i); o++) i = wl(n);
  return r(i) && (i = eo.map((o) => o.id).filter((o) => !e.tables.includes(o))), { tables: i, key: t, changed: !0 };
}
const yi = "rlzc", Nt = {
  optIn: !1,
  injectToAI: !1,
  library: !0,
  aiOn: !1,
  api: "main",
  presetId: "",
  ratio: 50,
  freq: 3,
  total: Ki
}, ru = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, Un = {
  depths: { token: 4, progress: 4, turn: 0, ledger: 4, live: 4, format: 0 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  statusBarFix: !0,
  genericCaps: { ...as },
  subApi: structuredClone(ru),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0, live: !0, statusBar: !0, auditDebug: !0, manualDebug: !0, injectionDebug: !0, formatDebug: !0 },
  live: { ...Nt }
}, f = /* @__PURE__ */ dr({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(Un),
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
  market: Iv(),
  /** 入场提示小卡片（右上角，不挡操作）；同一时间只有一张 */
  entryCard: null,
  /** 待确认的副本：点过「不是」的入场信号，系统页里二次确认（进入 / 关掉不再提示） */
  pendingEntries: []
});
function Je(e) {
  return JSON.parse(JSON.stringify(e));
}
function xs(...e) {
  f.settings.debug && console.log("[rlzc]", ...e);
}
function Vx() {
  const e = ge().extensionSettings, t = e[yi] ?? {}, n = {
    ...structuredClone(Un),
    ...t,
    depths: { ...Un.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? Un.depths.ledger },
    ball: { ...Un.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => Qa(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    statusBarFix: typeof t.statusBarFix == "boolean" ? t.statusBarFix : !0,
    genericCaps: { ...as, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(ru),
      ...t.subApi ?? {},
      presets: Array.isArray(t.subApi?.presets) ? t.subApi.presets.map(jm) : [],
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
    live: Hx(t.live, t.subApi)
  };
  e[yi] = n, f.settings = n, f.packs = Li(n.customPacks);
}
function Hx(e, t) {
  const n = e ?? {}, s = (c, d, A, p) => {
    const z = Math.round(Number(c));
    return Number.isFinite(z) ? Math.max(d, Math.min(A, z)) : p;
  }, r = n.aiOn === void 0 && n.source === "ai";
  let i = typeof n.library == "boolean" ? n.library : Nt.library;
  const o = typeof n.aiOn == "boolean" ? n.aiOn : r;
  !i && !o && (i = !0);
  let l = n.api === "preset" || n.api === "main" ? n.api : Nt.api, a = typeof n.presetId == "string" ? n.presetId : "";
  return r && t?.source === "preset" && (l = "preset", a = String(t.presetId ?? "")), {
    optIn: typeof n.optIn == "boolean" ? n.optIn : Nt.optIn,
    injectToAI: typeof n.injectToAI == "boolean" ? n.injectToAI : Nt.injectToAI,
    library: i,
    aiOn: o,
    api: l,
    presetId: a,
    ratio: r ? 100 : Math.round(s(n.ratio, 10, 100, Nt.ratio) / 10) * 10,
    freq: s(n.freq, 1, 10, Nt.freq),
    total: jc(n.total ?? Nt.total)
  };
}
function ye() {
  ge().extensionSettings[yi] = /* @__PURE__ */ ae(f.settings), ge().saveSettingsDebounced(), f.packs = Li(f.settings.customPacks);
}
function Wx(e, t, n = f.settings.subApi.presetId) {
  const s = f.settings.subApi.presets.find((r) => r.id === n);
  s && Bm(s, e, t) && ye();
}
function Gx(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = Qa(t);
  if (n.length) return n;
  const s = t;
  return Li([]).some((r) => r.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (f.settings.customPacks = [...f.settings.customPacks.filter((r) => r.id !== s.id), s], ye(), []);
}
function Kx(e) {
  f.settings.customPacks = f.settings.customPacks.filter((t) => t.id !== e), ye();
}
function rt() {
  const e = Ze()[Ic];
  return !e || Array.isArray(e) ? {} : e;
}
function Mn(e) {
  Ze()[Ic] = e, Ve();
}
function mn(e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (o.is_user || o.is_system) continue;
    const l = o.extra?.rlzc?.ledger;
    if (!Array.isArray(l)) continue;
    const a = [o.send_date, o.gen_finished].map((c) => c instanceof Date ? c.getTime() : Date.parse(String(c ?? ""))).find((c) => Number.isFinite(c));
    for (const c of l) t.push({ e: { ...c, mesIndex: i, ts: a }, pos: i, g: 0, seq: 0 });
  }
  for (const { pos: i, seq: o, ...l } of Pv(e))
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
  return tg(eg(n, r));
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
    const o = Pc(i[1]);
    if (o !== null) {
      const l = Xe(r.send_date ?? r.gen_finished ?? void 0);
      return Mn({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function it(e = Z(), t = e.length) {
  const n = rt().fix?.level;
  return n && ["D", "C", "B", "A", "S"].includes(n) ? n : Nc(e, t) ?? "D";
}
function qx(e) {
  if (!(rt().init != null || f.ledger.length > 0)) return "";
  const s = Ct(e), r = hn(s.value, f.ledger), i = it(e), o = St[i], l = ms(s.value, f.ledger, o), a = rg(r, l, i, o), c = $e();
  return c?.status === "active" && c.live ? Hg(a, Ji(e, c.id)) : a;
}
function zl(e, t = !0) {
  const n = Z(), s = n[e];
  if (!s || s.is_user) return;
  const r = s.mes ?? "", i = Xe(s.send_date ?? s.gen_finished ?? void 0), o = [], l = new RegExp(Eh.source, "g");
  let a;
  for (; (a = l.exec(r)) !== null; ) {
    const d = qm(a[1]);
    d && o.push({ delta: d.delta, source: d.source, type: "tag", at: i });
  }
  const c = t ? br(r) : null;
  if (c && f.pack && !f.pack.rest) {
    const d = {
      结果: c.result ?? "",
      评价: c.rating ?? "",
      ...c.fields
    }, A = it(n, e), p = Ct(n), z = hn(p.value, f.ledger), w = !!f.session?.clearance, x = Qm(f.pack.level, A, d, z, w, f.pack.name);
    if (x.warn) {
      s.extra = s.extra ?? {};
      const _ = s.extra.rlzc ?? { phase: "", round: 0, injected: [] };
      s.extra.rlzc = Je({ ..._, settleWarn: x.warn });
    }
    if (x.delta !== 0) {
      const _ = { delta: x.delta, source: x.source, type: "settle", at: i };
      x.clearWin && (_.clear = !0), o.push(_);
    }
  }
  if (o.length || s.extra?.rlzc?.ledger?.length) {
    s.extra = s.extra ?? {};
    const d = s.extra.rlzc ?? { phase: "", round: 0, injected: [] }, A = [...o, ...(d.ledger ?? []).filter((p) => p.type === "tip")];
    s.extra.rlzc = Je({ ...d, ledger: A.length ? A : void 0 }), Ve();
  }
  f.ledger = mn(Z());
}
function Yx(e, t) {
  const n = rt(), s = Xe(void 0), r = [...n.adjust ?? [], { amount: e, note: t, at: s, ts: Date.now() }];
  Mn({ ...n, adjust: r }), f.ledger = mn(Z());
}
function Jx(e, t) {
  Yx(e, t);
}
function Zx(e) {
  const t = rt(), n = Xe(void 0);
  Mn({ ...t, init: { value: e, source: "手动设置", at: n } }), f.ledger = mn(Z());
}
function Xx(e, t) {
  if (!e && !t) return;
  const n = rt(), s = Z(), r = Xe(void 0);
  Mn({ ...n, fix: { level: e, rank: t, at: r, afterIndex: s.length - 1 } });
}
function $e() {
  return lg(Ze()[nt]);
}
function gn() {
  const e = Ze(), t = Array.isArray(e[nt]?.declined) ? e[nt].declined : [], n = Array.isArray(e[pl]) ? e[pl] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function Qx(e) {
  const t = Ze(), n = [...gn().filter((s) => s !== e), e];
  t[nt] = { ...t[nt] ?? {}, declined: n }, Ve();
}
function vs() {
  const e = Ze()[nt]?.dropped;
  return Array.isArray(e) ? e : [];
}
function iu(e) {
  const t = Ze(), n = [.../* @__PURE__ */ new Set([...vs(), ...e])];
  t[nt] = { ...t[nt] ?? {}, dropped: n }, Ve();
}
function An(e) {
  const t = Ze(), n = gn(), s = vs(), r = { ...n.length ? { declined: n } : {}, ...s.length ? { dropped: s } : {} };
  e ? t[nt] = { ...JSON.parse(JSON.stringify(e)), ...r } : n.length || s.length ? t[nt] = r : delete t[nt], Ve();
}
function to(e) {
  const t = $e();
  t && (e(t), An(t), ze());
}
function ou(e) {
  const t = Z();
  return (e === "swipe" || e === "continue") && _e(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function tr(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Oc(t, f.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = oc(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? gg(e, n, s) : null };
}
function ze() {
  const e = Z();
  let t = $e();
  if (t) {
    const s = JSON.stringify(t);
    if (!cg(e, t))
      xu(t.id), An(null), we("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const r = tr(e, t);
      r.progress && (t.status = r.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && An(t);
    }
  }
  const n = tr(e, t);
  f.session = n.session, f.pack = n.pack, f.progress = n.progress, f.audit = n.audit, f.subLine = Au(e, n.progress), Fv(e, n.session), f.ledger = mn(e), f.pendingEntries = n.session?.status === "active" ? [] : av(e), f.tick++, gs(), iv(n.session);
}
function lu() {
  if (f.session)
    return Dc(f.session, f.progress?.rolesFromChat);
}
function nr() {
  for (const e of Vh) It(e, "", 0, !1);
}
let Jn = -1;
function ev(e) {
  const t = ou(e), n = $e(), { pack: s, progress: r, audit: i } = tr(t, n), o = n ? Dc(n, r?.rolesFromChat) : void 0, l = bs() && !!r, a = l ? wr(t, r.entryIndex) : null, c = s ? Kh(s, r, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: r?.panel?.limit,
    audit: i ?? void 0,
    subNext: l ? wm(t, r.entryIndex) : void 0,
    stateText: a ? zc(s, a.state) : void 0
  }) : cs;
  nr();
  const d = f.settings.depths;
  c.token && It(lc, c.token, d.token, !0), c.progress && It(ac, c.progress, d.progress, !1), c.turn && It(cc, c.turn, d.turn, !1), c.state && It(uc, c.state, d.progress, !1);
  const A = rt();
  let p = qx(t);
  if (A.fix) {
    const x = sg(A.fix);
    x && (p = p ? `${p}
${x}` : x);
  }
  const z = He();
  if (z.hints.length) {
    const x = z.hints.map(Dx).join("");
    p = p ? `${p}
${x}` : x, z.hints.some((_) => !_.sent) && (z.hints = z.hints.map((_) => ({ ..._, sent: !0 })), Et(z));
  }
  if (p && It(dc, p, d.ledger, !1), f.settings.live.injectToAI) {
    const x = Pm(fo(/* @__PURE__ */ new Set(), t));
    x && It(Ac, x, d.live, !1);
  }
  const w = em(t) ? Qh : "";
  w && It(fc, w, d.format, !1), f.lastInjection = w ? { ...c, format: w } : c, Jn = t.length, xs("注入", e, c);
}
const bi = /* @__PURE__ */ new Set();
async function tv() {
  const e = Z(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Oh(n.mes);
  if (!s) return;
  const r = $e();
  if (!r || r.status !== "active" || r.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const i = `${Ht()}:${t}:${n.mes}`;
  if (bi.has(i)) return;
  bi.add(i);
  const { pack: o, progress: l } = tr(e, r);
  if (!o || !l || l.ended) return;
  const a = Dh(o, l.phase, l.round, s);
  a && await Gt(`是否跳到${s}？（${a.label}）`) && (r.manual.push({ kind: "skip", atIndex: t, targetPhase: a.phase, targetRound: a.round }), An(r));
}
async function nv(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      nr();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await tv(), await yv(s), ev(s);
  } catch (r) {
    console.error("[rlzc] 拦截器出错", r), nr();
  }
}
const ds = /* @__PURE__ */ new Set();
function xn() {
  const e = $e();
  if (!e || e.status !== "ended") return 0;
  const t = f.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
function no(e, t) {
  return Lc(e, xn(), t, vs());
}
let sv = 0, Tn = null;
function au(e) {
  const { index: t, info: n, pack: s } = e, r = Ht(), i = `${r}:${t}:${n.name}`;
  if (ds.has(i) || $e()?.status === "active") return;
  ds.add(i);
  const l = zr(s ?? {}, f.settings.live.optIn);
  Tn = e, f.entryCard = {
    id: ++sv,
    key: i,
    chatId: r,
    index: t,
    name: s?.name ?? n.name,
    level: s ? s.rest ? "—" : s.level : Cn(n),
    unknown: !s,
    liveShow: l.show,
    live: l.checked
  };
}
function ys() {
  const e = f.entryCard;
  e && (ds.delete(e.key), f.entryCard = null, Tn = null);
}
function rv(e) {
  f.entryCard && (f.entryCard.live = e);
}
function As() {
  f.entryCard = null, Tn = null;
}
function _l() {
  const e = f.entryCard, t = Tn;
  As(), !(!e || !t || Ht() !== e.chatId) && (Qx(Wt(t.index, t.info.name)), ze());
}
function $l() {
  const e = f.entryCard, t = Tn;
  if (As(), !e || !t) return;
  if (Ht() !== e.chatId) {
    ds.delete(e.key);
    return;
  }
  const { index: n, info: s } = t;
  e.liveShow && so(e.live);
  const r = En(Z(), n, f.packs, no(Z(), n));
  if (!r || r.info.name !== s.name) {
    we("warning", "入场消息已变化，未启用。");
    return;
  }
  if ($e()?.status === "active") return;
  const i = { ...s };
  t.pack || (i.rounds = xr(s.limit, Cn(s), f.settings.genericCaps).rounds), co(t.pack ?? vr(i, f.settings.genericCaps), n, i, e.liveShow && e.live);
}
function so(e) {
  f.settings.live.optIn !== e && (f.settings.live.optIn = e, ye());
}
function ro(e = Z()) {
  for (let t = xn(); t < e.length; t++) if (_e(e[t])) return t;
  return -1;
}
function io() {
  const e = Z(), t = ro(e);
  return t < 0 ? "" : `${t}${e[t].swipe_id ?? ""}${e[t].mes ?? ""}`;
}
let oo = "";
function lo() {
  oo = io();
  const e = Ag(Z(), $e(), gn(), f.packs, xn());
  e && au(e);
}
function cu() {
  const e = f.entryCard;
  e && En(Z(), e.index, f.packs, no(Z(), e.index))?.info.name !== Tn?.info.name && ys();
}
function ao() {
  $e()?.status !== "active" && (cu(), lo());
}
const Ls = tx(() => {
  !nx() && io() !== oo && ao();
});
function iv(e) {
  e?.status === "active" ? Ls.stop() : Ls.running || (oo = io(), Ls.start());
}
function ov(e) {
  ze();
  const t = ro();
  f.entryCard && (e === t || e === f.entryCard.index) && ys(), e === t && lo();
}
function co(e, t, n, s = !1) {
  const r = Z(), i = r[t], o = $e();
  o && Ov(o);
  const l = og(e, t, n), a = vt();
  if (a.corridor.on && (a.corridor.on = !1, fs(a, a.corridor.show, dn.enterOff)), s && !e.disableLive && (l.live = !0, fs(a, l.id, dn.instanceOn)), In(a), !e.rest) {
    const d = Ct(r);
    ms(d.value, f.ledger, St[it(r)]) && (l.clearance = !0);
  }
  As(), i.extra = i.extra ?? {};
  const c = i.extra.rlzc?.format;
  i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: l.id, ...c ? { format: c } : {} }, An(l), Dv(l, e, t), ze(), f.progress && (i.extra.rlzc.injected = Je(f.progress.perMessage[t]?.events ?? [])), Ve(), we("success", `已进入副本《${e.name}》。`);
}
async function lv(e) {
  const t = f.packs.find((o) => o.id === e);
  if (!t) return;
  const n = uu();
  if (n < 0) {
    we("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  if ($e()?.status === "active" && !await Gt("当前已有进行中的副本，确定要替换吗？")) return;
  const r = zr(t, f.settings.live.optIn), i = await om(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`, r.show ? { label: "开启直播", checked: r.checked } : null);
  i.ok && (r.show && so(i.checked), co(t, n, yr(Z()[n].mes) ?? { name: t.name }, r.show && i.checked));
}
function uu(e = Z()) {
  let t = e.length - 1;
  for (; t >= 0 && !_e(e[t]); ) t--;
  return t;
}
function uo(e = Z()) {
  return dg(e, f.packs, xn(), gn(), vs());
}
function av(e) {
  return uo(e).map(({ index: t, info: n, pack: s }) => {
    const r = zr(s ?? {}, f.settings.live.optIn);
    return {
      key: Wt(t, n.name),
      index: t,
      name: s?.name ?? n.name,
      level: s ? s.rest ? "—" : s.level : Cn(n),
      unknown: !s,
      liveShow: r.show,
      live: r.checked
    };
  });
}
function cv(e, t) {
  const n = uo().find((o) => Wt(o.index, o.info.name) === e);
  if (!n) {
    we("warning", "这条副本信息已不存在。"), ze();
    return;
  }
  if ($e()?.status === "active") return;
  const s = uu();
  if (s < 0) return;
  const r = zr(n.pack ?? {}, f.settings.live.optIn);
  r.show && so(t);
  const i = { ...n.info };
  n.pack || (i.rounds = xr(i.limit, Cn(i), f.settings.genericCaps).rounds), ys(), co(n.pack ?? vr(i, f.settings.genericCaps), s, i, r.show && t);
}
function uv(e) {
  const t = Z(), n = uo(t).find((o) => Wt(o.index, o.info.name) === e);
  if (!n) {
    we("warning", "这条副本信息已不存在。"), ze();
    return;
  }
  if (n.pack) return;
  let s = "";
  for (let o = n.index; o >= 0 && !s; o--)
    _e(t[o]) && yr(String(t[o].mes ?? ""))?.name === n.info.name && (s = su(String(t[o].mes ?? "")));
  const r = wh(n.info, f.settings.genericCaps, `saved_${Date.now().toString(36)}`, s);
  f.settings.customPacks = [...f.settings.customPacks, r], ye();
  const i = gn().filter((o) => o.slice(o.indexOf(":") + 1) === n.info.name && Number(o.slice(0, o.indexOf(":"))) >= xn());
  iu(i.length ? i : [e]), ze(), we("success", `叮咚～《${r.name}》已收录`);
}
function dv(e) {
  const t = e.slice(e.indexOf(":") + 1), n = xn(), s = gn().filter((r) => r.slice(r.indexOf(":") + 1) === t && Number(r.slice(0, r.indexOf(":"))) >= n);
  iu(s.length ? s : [e]), ze();
}
function Sr(e) {
  to((t) => t.manual.push(e));
}
function Cr() {
  return Z().length - 1;
}
async function Sl() {
  const e = f.progress;
  if (!(!e || e.ended || !f.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      we("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Gt(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (Sr({ kind: "skip", atIndex: Cr(), targetPhase: e.phase.id, targetRound: e.phase.cap }), we("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function Cl() {
  if (!(!f.session || f.progress?.ended) && await Gt("确定要手动结束当前副本吗？")) {
    if (f.session.live) {
      const e = vt();
      fs(e, f.session.id, dn.instanceOff), In(e);
    }
    Sr({ kind: "end", atIndex: Cr() });
  }
}
function Av(e) {
  Sr({ kind: "setPhase", atIndex: Cr(), phase: e });
}
function fv(e) {
  Sr({ kind: "setRound", atIndex: Cr(), round: e });
}
function pv(e) {
  to((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function hv(e) {
  to((t) => t.manual.splice(e, 1));
}
async function El() {
  f.session && await Gt("确定要删除当前副本会话吗？（不会改动聊天记录）") && (xu(f.session.id), An(null), ze());
}
function bs() {
  return f.settings.subApi.source !== "off";
}
function du() {
  const e = f.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function mv(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function Au(e, t) {
  if (!bs() || !t || t.ended) return "";
  if (f.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const r = wr(e, t.entryIndex);
  return r && t.perMessage[r.index] ? `副本记录：已更新（第${t.perMessage[r.index].round}轮）` : "副本记录：尚未整理";
}
let Zn = null;
const Ao = /* @__PURE__ */ new Set();
function fn(e) {
  return ym(Ht(), e, Z()[e]);
}
function Ml(e) {
  f.subBusy = e, f.subLine = Au(Z(), f.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && f.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function fu(e, t, n) {
  if (fn(e) !== t) return;
  const s = Z()[e];
  s?.extra?.rlzc && (s.extra.rlzc = Je({ ...s.extra.rlzc, sub: n }), Ve(), ze());
}
function gv(e, t) {
  const n = Z(), s = f.progress, r = f.pack, i = n[e], o = s?.perMessage[e];
  if (!r || !s || !o || !i) return null;
  const l = lu(), a = (I) => ({ ...I, text: Xs(I.text, r, l), if: I.if ? Xs(I.if, r, l) : void 0 }), c = gm(r, i.extra?.rlzc?.injected ?? []).map(a), d = (s.next?.events ?? []).filter((I) => I.if).map(a);
  if (!bm({
    enabled: bs(),
    active: !s.ended && f.session?.status === "active",
    type: t,
    saveMode: f.settings.subApi.saveMode,
    hasEvents: c.length > 0,
    hasNextConditional: d.length > 0
  })) return null;
  const p = fn(e);
  if (Ao.has(p)) return null;
  const z = r.phases.find((I) => I.id === o.phase), w = wr(n.slice(0, e), s.entryIndex), x = f.session ? He().books[f.session.id] : void 0, _ = mm({
    pack: r,
    phaseName: z?.name ?? o.phase,
    round: o.round,
    prevState: w?.state ?? null,
    events: c,
    nextConditional: d,
    text: String(i.mes ?? ""),
    markets: x ? zx(x, f.market.results) : []
  }), S = ge().substituteParams, T = S ? { system: S(_.system), user: S(_.user) } : _, C = xv(e, p, o.round, T);
  return Zn = { key: p, index: e, promise: C }, C.finally(() => {
    Zn?.key === p && (Zn = null);
  }), C;
}
async function xv(e, t, n, s) {
  Ml(!0);
  try {
    let r = 2;
    for (; ; ) {
      const i = du();
      if (!i) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await km((a) => Hi(i, a), s, r);
        fu(e, t, { ...l, ms: Date.now() - o, via: mv(i), at: (/* @__PURE__ */ new Date()).toISOString() }), Ao.add(t);
        return;
      } catch (l) {
        if (fn(e) !== t) return;
        const a = kr(l), c = mi(l), d = c === a ? String(l?.message ?? l).slice(0, 200) : "";
        if (xs("副本事件检测失败", c, l), !f.settings.subApi.wait) {
          we("warning", `第${n}轮事件检测失败：${c}，已沿用上一轮状态。`), Zr(e, t, c);
          return;
        }
        if (await vv(n, c, d) === "skip") {
          Zr(e, t, c);
          return;
        }
        r = 0;
      }
    }
  } catch (r) {
    we("error", String(r?.message ?? r)), Zr(e, t, "其他");
  } finally {
    Ml(!1);
  }
}
function Zr(e, t, n) {
  Ao.add(t), fu(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function vv(e, t, n) {
  const s = ge();
  if (!s.Popup || !s.POPUP_TYPE)
    return window.confirm(`第${e}轮事件检测失败：${t}。重试吗？取消则这轮先跳过。`) ? "retry" : "skip";
  const r = f.settings.subApi, i = document.createElement("div"), o = document.createElement("h3");
  o.textContent = `第${e}轮事件检测失败`;
  const l = document.createElement("p");
  l.textContent = `原因：${t}`;
  const a = document.createElement("small");
  a.textContent = n, a.style.opacity = "0.7", n || (a.style.display = "none");
  const c = document.createElement("div");
  c.style.cssText = "display:none;margin-top:10px;";
  const d = document.createElement("label");
  d.textContent = "换成：";
  const A = document.createElement("select");
  A.className = "text_pole";
  const p = [{ value: "", text: "请选择…" }];
  for (const x of r.presets) r.source === "preset" && x.id === r.presetId || p.push({ value: `preset:${x.id}`, text: `自设API：${x.name}` });
  r.source !== "main" && p.push({ value: "main", text: "跟随主API" });
  for (const x of p) {
    const _ = document.createElement("option");
    _.value = x.value, _.textContent = x.text, A.append(_);
  }
  d.append(A), c.append(d), i.append(o, l, a, c);
  let z;
  A.addEventListener("change", () => {
    const x = A.value;
    x && (x === "main" ? r.source = "main" : (r.source = "preset", r.presetId = x.slice(7)), ye(), z.complete(s.POPUP_RESULT.CUSTOM1));
  }), z = new s.Popup(i, s.POPUP_TYPE.TEXT, "", {
    okButton: "重试",
    cancelButton: "这轮先跳过",
    customButtons: [
      {
        text: "换一个接口",
        action: () => {
          c.style.display = "", A.focus();
        }
      }
    ]
  });
  const w = await z.show();
  return w === s.POPUP_RESULT.AFFIRMATIVE || w === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function yv(e) {
  const t = Zn;
  if (!(!t || !f.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= ou(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function bv(e, t) {
  const n = Z(), s = n[e];
  if (!_e(s)) return;
  kv(e, t);
  const r = $e();
  if (t !== "first_message" && ys(), !r || r.status === "ended") {
    if (En(n, e, f.packs, no(n, e))) {
      const c = ug(n, f.packs, xn(), e, gn(), vs());
      c && au(c);
    }
    if (t === "first_message") return;
    ze(), zl(e, !1), Il(e), Qr(e, t), Tl(), Ol();
    return;
  }
  if (t === "first_message") return;
  let i = null;
  bs() && (Xn = e);
  const o = nc(s.mes);
  o && (r.roles = { ...r.roles ?? {}, ...o }), An(r), ze();
  const l = f.progress?.perMessage[e];
  if (l && f.pack) {
    const c = f.pack.phases.find((x) => x.id === l.phase), d = {
      phase: c?.name ?? l.phase,
      round: l.round,
      injected: Jn === e ? f.lastInjection.injected : l.events
    }, A = f.pack.time;
    A.type === "clock" && c?.clock && !c.night && !c.frozen && (d.clock = rc(A.dayStart, A.minutesPerRound, l.round));
    const p = Jn === e ? f.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    p && (d.limit = p);
    const z = s.extra?.rlzc?.entry;
    z && (d.entry = z), s.extra?.rlzc?.format && (d.format = s.extra.rlzc.format), Jn === e && f.lastInjection.skipped?.length && (d.skippedEvents = f.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (d.sub = s.extra.rlzc.sub), t === "continue" && s.extra?.rlzc?.live && (d.live = s.extra.rlzc.live);
    const w = (s.extra?.rlzc?.ledger ?? []).filter((x) => x.type === "tip");
    t === "continue" && w.length && (d.ledger = w), s.extra = s.extra ?? {}, s.extra.rlzc = Je(d), Ve(), ze(), i = gv(e, t);
  }
  Xn >= 0 && (Xn = -1, i || ze());
  const a = br(s.mes);
  if (a && we("info", `副本结算：${a.result ?? "—"}${a.rating ? `，评价 ${a.rating}` : ""}`), zl(e), Il(e), i) {
    const c = fn(e);
    i.then(() => {
      fn(e) === c && Qr(e, t);
    });
  } else Qr(e, t);
  Tl(), Ol();
}
function kv(e, t) {
  if (t === "first_message" || t === "quiet" || t === "impersonate") return;
  const n = Z(), s = n[e];
  if (!_e(s) || mc(n, e)) return;
  const r = ji(s.mes);
  let i;
  if (r.kind !== "ok") {
    i = { kind: r.kind, detail: r.detail };
    const a = f.settings.statusBarFix ? Xh(s.mes) : null;
    a && (s.mes = a.text, Array.isArray(s.swipes) && s.swipe_id !== void 0 && s.swipe_id < s.swipes.length && (s.swipes[s.swipe_id] = a.text), i.fixed = !0, i.from = a.from, rm(), im(e), Rs(e), we("info", "已修正本轮状态栏标签"));
  }
  const o = s.extra?.rlzc;
  if (!i && (t === "continue" || !o?.format)) return;
  s.extra = s.extra ?? {};
  const l = o ?? { phase: "", round: 0, injected: [] };
  s.extra.rlzc = Je({ ...l, format: i }), Ve();
}
function Tl() {
  const e = rt();
  e.fix && Mn({ ...e, fix: void 0 });
}
function Il(e) {
  const t = Z(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const r = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!r) return;
  const i = Pc(r[1]);
  if (i === null) return;
  const o = Ct(t), l = (c) => c.mesIndex === e && (c.type === "tip" || c.type === "bet" && /^赌票/.test(c.source)), a = hn(o.value, mn(t).filter((c) => !l(c)));
  i !== a && (xs(`积分核对不符（楼层${e}）：状态栏 ${i}，账本 ${a}`), n.extra?.rlzc && (n.extra.rlzc = Je({ ...n.extra.rlzc, ledgerMismatch: { status: i, ledger: a } }), Ve()));
}
let Ts = null;
function Nl() {
  Ls.stop(), Ts && clearTimeout(Ts), bi.clear(), ys(), ds.clear(), Jn = -1, Xn = -1, f.chatId = Ht(), f.debugUnlocked = !1, f.lastInjection = cs, nr(), Qg(), Cv(), f.ledger = mn(Z()), ze(), lo();
  const e = f.chatId;
  Ts = setTimeout(() => {
    Ts = null, Ht() === e && ao();
  }, 300), sr();
}
function Xr(e) {
  ze(), cu(), e !== void 0 && e === ro() && ao();
}
function pu() {
  return f.settings.panelDisplay === "statusbar" ? un.filter((e) => e !== "副本") : un;
}
function Rs(e, t = !1) {
  yc(e, pu(), !1, t);
}
function sr(e = !1, t = !1) {
  Am(pu(), e, t);
}
function wv(e) {
  f.settings.panelDisplay !== e && (f.settings.panelDisplay = e, ye(), sr(!0));
}
const Fs = Zg;
function vt() {
  return Pg(Ze()[Bc]);
}
function In(e) {
  Ze()[Bc] = Je(e), Ve();
}
function fs(e, t, n) {
  if (!t) return;
  const s = _r(Z(), e) + 1, r = { id: s, t: "sys", name: "", text: n, amount: 0, net: 0, show: t };
  e.sys = [...e.sys, r].slice(-100), e.seq = s, Xi([r]);
}
function zv() {
  return "c" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function _v(e) {
  const t = f.session, n = f.progress;
  if (!!t && e > t.entryIndex && (!n?.ended || n.endIndex !== void 0 && e <= n.endIndex)) return t.live && f.pack ? { show: t.id, scope: "instance", pack: f.pack } : null;
  const r = vt();
  return r.corridor.on && r.corridor.show ? { show: r.corridor.show, scope: "corridor", pack: null } : null;
}
function Qr(e, t) {
  if (t === "continue" || t === "first_message") return;
  const n = Z(), s = n[e];
  if (!_e(s) || Kt(s)) return;
  const r = _v(e);
  if (!r) return;
  const i = vt(), { show: o, scope: l, pack: a } = r, c = f.progress, d = s.extra?.rlzc ?? { phase: "", round: 0, injected: [] }, A = Yi(n, o, e), p = d.sub && !d.sub.skipped ? { hype: d.sub.hype, hurt: d.sub.hurt } : void 0, z = l === "instance" && c?.endIndex === e && c.endedBy === "tag" ? br(s.mes) : null, w = !!z && ["死亡", "阵亡"].includes(String(z.result ?? "").trim()), x = c?.roundsLeft, _ = /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(s.mes ?? "")), S = new Set((a?.events ?? []).filter((B) => B.kind !== "directive").map((B) => B.id)), T = $m({
    aiOn: f.settings.live.aiOn,
    roundInShow: A.length + 1,
    freq: f.settings.live.freq,
    phaseSwitch: _,
    hurt: Wc(String(s.mes ?? ""), p),
    eventDone: !!d.sub && !d.sub.skipped && (d.sub.events ?? []).some((B) => B.status === "done")
  }), C = Fg({
    show: o,
    scope: l,
    packLevel: a?.level ?? null,
    playerLevel: Zi(n, e + 1),
    isRest: !!a?.rest,
    prevHeat: A.length ? A[A.length - 1].rec.heat : null,
    roundsInShow: A.length,
    text: String(s.mes ?? ""),
    hasEvents: (d.injected ?? []).some((B) => S.has(B)),
    hasPhaseSwitch: _,
    sub: p,
    isEnd: l === "instance" && !!x && x.y > 0 && x.x < x.y * 0.1,
    phaseId: l === "instance" ? c?.perMessage[e]?.phase : void 0,
    pool: Fs.pool,
    templates: Fs.templates,
    packDanmaku: a?.danmaku,
    names: Fs.names,
    whoNames: Hc(Vc(n, e + 1), String(ge().name1 ?? "")),
    recentTexts: Og(n.slice(0, e)),
    firstId: _r(n, i) + 1,
    settle: z ? { died: w, tipsBefore: Ji(n.slice(0, e), o) } : void 0,
    awaitAi: T,
    mix: { library: f.settings.live.library, total: f.settings.live.total, ratio: f.settings.live.ratio },
    rand: Math.random
  });
  T && (C.ai = { ok: !1, pending: !0 });
  const I = Xe(s.send_date ?? s.gen_finished ?? void 0), L = [...(d.ledger ?? []).filter((B) => B.type !== "tip"), ...Ug(C, I)];
  s.extra = s.extra ?? {}, s.extra.rlzc = Je({ ...d, live: C, ledger: L.length ? L : void 0 }), i.seq = Math.max(i.seq, ...C.feed.map((B) => B.id)), In(i), f.ledger = mn(Z()), f.tick++, C.feed.length ? Xi(C.feed, !0) : gs(), T && Sv(e, C.scope === "instance" ? a?.name : void 0, C.pending?.aiWant);
}
function $v() {
  const e = f.settings.live, t = Math.max(5, Number(f.settings.subApi.timeoutSec) || 60) * 1e3;
  if (e.api === "main") return { source: "main", timeoutMs: t };
  const n = f.settings.subApi.presets.find((s) => s.id === e.presetId);
  return n ? { source: "preset", preset: n, timeoutMs: t } : null;
}
function Sv(e, t, n) {
  const s = Z(), r = fn(e), i = $v();
  if (!i) {
    ei(e, r, [], "新弹幕的接口没有设置好", 0);
    return;
  }
  const o = [];
  for (let A = e; A >= 0 && o.length < 2; A--) _e(s[A]) && o.unshift(String(s[A].mes ?? ""));
  const l = Mm({
    scene: t ?? "回廊",
    texts: o,
    cast: Hc(Vc(s, e + 1), String(ge().name1 ?? "")),
    samples: Sm(Fs.pool, 10, Math.random),
    count: n
  }), a = ge().substituteParams, c = a ? { system: a(l.system), user: a(l.user) } : l, d = Date.now();
  Im((A) => Hi(i, A, { temperature: 0.9, maxTokens: Em(n) }), c, 1, Cm(n)).then((A) => ei(e, r, A, null, Date.now() - d)).catch((A) => {
    xs("AI 弹幕生成失败", A);
    const p = String(A?.message ?? A).slice(0, 120);
    ei(e, r, [], `${kr(A)}：${p}`, Date.now() - d);
  });
}
function ei(e, t, n, s, r) {
  if (fn(e) !== t) return;
  const i = Z(), o = i[e], l = Kt(o);
  if (!l?.pending || !o.extra?.rlzc) return;
  const a = vt(), c = Kc(l, s ? null : n, _r(i, a) + 1, Math.random), d = s ? 0 : c.feed.filter((p) => p.t === "msg" && n.some((z) => z.text === p.text)).length, A = { ...c, ai: s ? { ok: !1, error: s, ms: r } : { ok: !0, count: d, ms: r } };
  o.extra.rlzc = Je({ ...o.extra.rlzc, live: A }), a.seq = Math.max(a.seq, ...A.feed.map((p) => p.id)), In(a), f.tick++, Xi(A.feed, !0);
}
function Cv() {
  const e = Z();
  let t = !1;
  for (const n of e) {
    const s = Kt(n);
    if (!s?.pending || !n.extra?.rlzc) continue;
    const r = vt(), i = Kc(s, null, _r(e, r) + 1, Math.random);
    n.extra.rlzc = Je({ ...n.extra.rlzc, live: { ...i, ai: { ok: !1, error: "没有等到结果" } } }), r.seq = Math.max(r.seq, ...i.feed.map((o) => o.id)), In(r), t = !0;
  }
  t && Ve();
}
function Ev() {
  const e = vt();
  return f.session?.status === "active" && f.pack ? Gi({ packLevel: f.pack.level, playerLevel: Zi(Z()), isRest: !!f.pack.rest, heat: 20, rand: 1 }) : e.corridor.viewers ?? 0;
}
function Mv() {
  const e = f.session;
  return e?.status === "active" ? !!e.live : vt().corridor.on;
}
function fo(e, t = Z()) {
  const n = f.session, s = n?.status === "active";
  return Kg(
    t,
    vt(),
    {
      inInstance: s,
      instanceLive: !!(s && n?.live),
      instanceShow: n?.id,
      startViewers: Ev(),
      injectToAI: f.settings.live.injectToAI
    },
    e
  );
}
function Tv() {
  const e = f.session, t = fo(/* @__PURE__ */ new Set()), n = t.viewers > 0 ? ` · ${t.viewers.toLocaleString("en-US")}人在看` : "";
  if (e?.status === "active") {
    const s = f.pack?.disableLive ? "本副本自带直播玩法" : t.on ? `副本内锁定${n}` : "副本内锁定，回廊可开播";
    return { on: t.on, locked: !0, scope: "instance", note: s };
  }
  return { on: t.on, locked: !1, scope: "corridor", note: t.on ? `回廊直播${n}` : "回廊中可随时开播" };
}
function hu() {
  if (f.session?.status === "active") return !1;
  const e = vt();
  if (e.corridor.on)
    e.corridor.on = !1, fs(e, e.corridor.show, dn.corridorOff);
  else {
    const t = zv();
    e.corridor = {
      on: !0,
      show: t,
      viewers: Gi({ packLevel: null, playerLevel: Zi(Z()), isRest: !1, heat: 20, rand: 0.9 + Math.random() * 0.2 })
    }, fs(e, t, dn.corridorOn);
  }
  return In(e), f.tick++, gs(), !0;
}
function Iv() {
  return { book: null, results: {}, tickets: [], pending: 0, tables: [], casinoOpen: !0 };
}
function He() {
  return Rx(Ze()[Yc]);
}
function Et(e) {
  Ze()[Yc] = Je(e), Ve();
}
let Xn = -1;
function Nv() {
  return [Xn, Zn?.index ?? -1].filter((e) => e >= 0);
}
function po(e = Z()) {
  return hn(Ct(e).value, f.ledger);
}
function mu(e) {
  if (rt().init) return;
  const t = Ct(e), n = rt();
  n.init || Mn({ ...n, init: { value: t.value, source: t.source, at: Xe(void 0) } });
}
function gu() {
  const e = $e();
  return e?.status === "active" && e.live ? Ji(Z(), e.id) : 0;
}
function Er(e, t, n) {
  if (t.frozen) return { results: {}, tickets: xi(t, {}), rounds: [] };
  let s = { voided: !0, ended: !1 }, r = [], i = {};
  if (n && n.id === t.session) {
    const l = Oc(n, f.packs), a = l ? oc(e, n, l) : null;
    a && (s = {
      ended: a.ended,
      endedBy: a.endedBy,
      endIndex: a.endIndex,
      result: a.settlement?.result,
      rating: a.settlement?.rating
    }, r = wx(e, a.perMessage, a.entryIndex, Nv()), i = a.phaseEnds);
  }
  const o = bx({ markets: t.markets, rounds: r, outcome: s, phaseEnds: i });
  return { results: o, tickets: xi(t, o), rounds: r };
}
function Pv(e) {
  const t = He(), n = $e(), s = (i) => e[i] ? Xe(e[i].send_date ?? e[i].gen_finished ?? void 0) : void 0, r = [];
  for (const i of Object.values(t.books)) r.push(...Sx(i, Er(e, i, n).tickets, s));
  for (const i of t.casino.plays)
    r.push({ delta: i.net, source: Bx(i.table, i.label), type: "bet", at: i.at, pos: i.after, seq: i.seq ?? 0 });
  return r;
}
function Ov(e) {
  const t = He(), n = t.books[e.id];
  if (!n || n.frozen) return;
  const s = Z(), r = kx(n, Er(s, n, e).results);
  for (const i of n.tickets) r[i.id].index < 0 && (r[i.id].index = Math.max(s.length, i.after + 1));
  n.frozen = r, Et(t);
}
function xu(e) {
  const t = He(), n = t.books[e];
  if (!n || n.frozen) return;
  const s = Z().length;
  n.frozen = Object.fromEntries(n.tickets.map((r) => [r.id, { stamp: "refund", index: Math.max(s, r.after + 1) }])), Et(t);
}
function Dv(e, t, n) {
  if (t.rest) return;
  const s = Z(), r = bs(), i = ux({ pack: t, playerLevel: it(s), withEvents: r, rand: Math.random });
  if (!i.length) return;
  const o = Ax(i, r, Math.random), l = He(), a = { session: e.id, packId: t.id, packName: t.name, openedAt: Xe(void 0), markets: o.markets, tickets: [] };
  o.plan && (a.plan = o.plan, a.reserve = o.reserve), r && (a.freak = { status: "pending" }), l.books[e.id] = a, Et(l), r && Lv(e.id, t, n);
}
function Lv(e, t, n) {
  const s = (c, d) => {
    const A = He(), p = A.books[e];
    p && (p.closedAt || p.frozen ? d ? p.freak = { ...c, status: "late" } : p.freak = c : (Object.assign(p, fx(p, d ?? null, Math.random)), p.freak = c), Et(A), ze());
  }, r = du();
  if (!r) {
    s({ status: "failed", error: "副本事件检测没有设置好" });
    return;
  }
  const i = Mx({
    name: t.name,
    level: t.level,
    briefing: su(String(Z()[n]?.mes ?? "")),
    docs: t.docs
  }), o = ge().substituteParams, l = o ? { system: o(i.system), user: o(i.user) } : i, a = Date.now();
  Ix((c) => Hi(r, c), l, 1).then((c) => s({ status: "ok", count: c.length, ms: Date.now() - a }, c)).catch((c) => {
    xs("庄家怪盘出题失败", c);
    const d = String(c?.message ?? c).slice(0, 120);
    s({ status: "failed", error: `${kr(c)}：${d}`, ms: Date.now() - a });
  });
}
const Is = /* @__PURE__ */ new Map();
let Pl = null;
function Rv(e) {
  const t = Ht(), n = Pl !== t;
  n && Is.clear(), Pl = t;
  const s = { win: 0, lose: 0, refund: 0 };
  for (const i of e) {
    const o = i.res?.stamp ?? null, l = Is.has(i.ticket.id), a = Is.get(i.ticket.id);
    Is.set(i.ticket.id, o), !n && l && o && o !== a && s[o]++;
  }
  const r = [s.win ? `兑 ${s.win} 张` : "", s.lose ? `废 ${s.lose} 张` : "", s.refund ? `退 ${s.refund} 张` : ""].filter(Boolean);
  r.length && we("info", `赌票开奖：${r.join("，")}。`);
}
function Fv(e, t) {
  const n = He();
  let s = !1;
  const r = t?.status === "active", i = t ? n.books[t.id] : void 0;
  i && !i.closedAt && !i.frozen && f.progress && mx(f.progress.perMessage, f.progress.entryIndex) && (i.closedAt = Xe(void 0), s = !0);
  const o = r ? n.casino.key : t?.status === "ended" ? t.id : "", l = Ux(n.casino, o, Math.random);
  l.changed && (!r || n.casino.tables.length !== 2) && (n.casino.tables = l.tables, n.casino.key = l.key, s = !0), s && Et(n);
  const a = [];
  let c = {};
  for (const d of Object.values(n.books)) {
    const A = Er(e, d, t);
    i && d.session === i.session && (c = A.results);
    for (const p of d.tickets) a.push({ ticket: p, book: d, market: d.markets.find((z) => z.id === p.market), res: A.tickets[p.id] ?? null });
  }
  a.sort((d, A) => (A.ticket.seq ?? 0) - (d.ticket.seq ?? 0)), Rv(a), f.market = {
    book: r && i ? i : null,
    results: c,
    tickets: a,
    pending: a.filter((d) => !d.res).length,
    tables: n.casino.tables,
    casinoOpen: !r || !!f.pack?.casino
  };
}
function vu(e, t) {
  const n = Z(), s = f.market.book;
  return eu({
    playerLevel: it(n),
    stake: t,
    already: s ? hx(s, e) : 0,
    balance: po(n),
    lockedTips: gu()
  });
}
function jv(e, t, n) {
  const s = $e();
  if (!s || s.status !== "active") return "没有进行中的副本";
  const r = He(), i = r.books[s.id];
  if (!i || i.frozen) return "本局没有开盘";
  if (i.closedAt) return "已封盘";
  const o = i.markets.find((A) => A.id === e), l = o?.options.find((A) => A.id === t);
  if (!o || !l) return "没有这个盘口";
  if (f.market.results[e]) return "已开奖";
  const a = vu(e, n);
  if (!a.ok) return a.reason ?? "不能下注";
  const c = Z();
  mu(c);
  const d = r.seq + 1;
  return r.seq = d, i.tickets.push({ id: `t${d}`, seq: d, market: e, option: t, stake: n, odds: l.odds, at: Xe(void 0), after: c.length - 1 }), o.kind === "ending" && t === "lose" && (r.hints = vi(r.hints, { kind: "betLose", amount: n, after: c.length - 1 })), Et(r), ze(), null;
}
function yu(e) {
  const t = Z();
  return eu({ playerLevel: it(t), stake: e, already: 0, balance: po(t), lockedTips: gu() });
}
function Bv(e, t, n) {
  if (!f.market.casinoOpen) return { error: "赌坊只在回廊营业。" };
  const s = He();
  if (!s.casino.tables.includes(e)) return { error: "这张桌今晚没开" };
  const r = yu(n);
  if (!r.ok) return { error: r.reason };
  const i = jx(e, t, n, Math.random);
  if (!i) return { error: "没有这种押法" };
  const o = Z();
  mu(o);
  const l = it(o), a = po(o), c = o.length - 1, d = s.seq + 1;
  return s.seq = d, s.casino.plays = [
    ...s.casino.plays,
    { id: `g${d}`, seq: d, table: e, bet: t, label: i.label, stake: n, win: i.win, payout: i.payout, net: i.net, result: i.result, at: Xe(void 0), after: c }
  ], !i.win && a - n < St[l] && (s.hints = vi(s.hints, { kind: "casinoLoss", amount: n, after: c })), i.win && i.net > Jc[l] * 5 && (s.hints = vi(s.hints, { kind: "casinoWin", amount: i.net, after: c })), Et(s), ze(), { outcome: i };
}
function Ol() {
  const e = He();
  if (!e.hints.length) return;
  const t = Lx(e.hints);
  t.length !== e.hints.length && (e.hints = t, Et(e));
}
function Uv() {
  const e = $e(), t = e ? He().books[e.id] : void 0;
  return t ? Er(Z(), t, e).rounds : [];
}
const ho = "M16 16c-2.6-3.4-5-5.2-7.6-5.2a5.2 5.2 0 000 10.4c2.6 0 5-1.8 7.6-5.2s5-5.2 7.6-5.2a5.2 5.2 0 010 10.4c-2.6 0-5-1.8-7.6-5.2z", Vv = { class: "rlzc-entry-kicker" }, Hv = {
  class: "rlzc-entry-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, Wv = ["d"], Gv = { class: "rlzc-entry-title" }, Kv = { class: "rlzc-entry-level" }, qv = { class: "rlzc-entry-name" }, Yv = {
  key: 0,
  class: "rlzc-entry-note"
}, Jv = { class: "rlzc-entry-foot" }, Zv = ["aria-checked"], Xv = { key: 1 }, Qv = { class: "rlzc-entry-actions" }, e0 = /* @__PURE__ */ Re({
  __name: "EntryCard",
  setup(e) {
    const t = K(() => f.entryCard);
    return (n, s) => (v(), Le(AA, {
      name: "rlzc-entry-fade",
      mode: "out-in"
    }, {
      default: ya(() => [
        t.value ? (v(), k("div", {
          key: t.value.id,
          class: Q(["rlzc-entry-card", { "beside-panel": E(f).panelOpen }]),
          role: "dialog",
          "aria-label": "检测到副本"
        }, [
          u("button", {
            class: "rlzc-entry-close",
            type: "button",
            "aria-label": "关闭",
            title: "这次先不处理",
            onClick: s[0] || (s[0] = //@ts-ignore
            (...r) => E(As) && E(As)(...r))
          }, "✕"),
          u("div", Vv, [
            (v(), k("svg", Hv, [
              u("path", { d: E(ho) }, null, 8, Wv)
            ])),
            s[4] || (s[4] = u("span", null, "检测到副本", -1))
          ]),
          u("div", Gv, [
            u("span", Kv, $(t.value.level), 1),
            u("span", qv, $(t.value.name), 1)
          ]),
          t.value.unknown ? (v(), k("div", Yv, "未收录，将使用通用副本包")) : j("", !0),
          u("div", Jv, [
            t.value.liveShow ? (v(), k("button", {
              key: 0,
              type: "button",
              class: Q(["rlzc-entry-live", { on: t.value.live }]),
              role: "switch",
              "aria-checked": t.value.live,
              onClick: s[1] || (s[1] = (r) => E(rv)(!t.value.live))
            }, [
              u("span", {
                class: Q(["rlzc-toggle danger", { on: t.value.live }])
              }, [...s[5] || (s[5] = [
                u("span", null, null, -1)
              ])], 2),
              s[6] || (s[6] = u("span", null, "直播", -1))
            ], 10, Zv)) : (v(), k("span", Xv)),
            u("div", Qv, [
              u("button", {
                type: "button",
                class: "rlzc-btn ghost",
                onClick: s[2] || (s[2] = //@ts-ignore
                (...r) => E(_l) && E(_l)(...r))
              }, "不是"),
              u("button", {
                type: "button",
                class: "rlzc-btn rlzc-entry-go",
                onClick: s[3] || (s[3] = //@ts-ignore
                (...r) => E($l) && E($l)(...r))
              }, "进入")
            ])
          ])
        ], 2)) : j("", !0)
      ]),
      _: 1
    }));
  }
}), t0 = {
  key: 0,
  class: "rlzc-ball-ring",
  viewBox: "0 0 48 48",
  "aria-hidden": "true"
}, n0 = ["stroke-dasharray"], s0 = {
  class: "rlzc-ball-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, r0 = ["d"], i0 = {
  key: 1,
  class: "rlzc-ball-live",
  title: "直播中"
}, o0 = {
  key: 2,
  class: "rlzc-ball-badge",
  title: "待开奖赌票"
}, ti = 48, l0 = /* @__PURE__ */ Re({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ he({ x: 0, y: 0 });
    let n = null, s = !1;
    function r(w, x) {
      const _ = window.innerWidth - ti - 4, S = window.innerHeight - ti - 4;
      return { x: Math.min(Math.max(4, w), _), y: Math.min(Math.max(4, x), S) };
    }
    function i() {
      const w = f.settings.ball;
      t.value = r(w.x ?? window.innerWidth - ti - 12, w.y ?? Math.round(window.innerHeight * 0.35));
    }
    function o(w) {
      w.currentTarget.setPointerCapture(w.pointerId), s = !1, n = { id: w.pointerId, dx: w.clientX - t.value.x, dy: w.clientY - t.value.y, moved: !1, sx: w.clientX, sy: w.clientY };
    }
    function l(w) {
      !n || n.id !== w.pointerId || (Math.abs(w.clientX - n.sx) + Math.abs(w.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = r(w.clientX - n.dx, w.clientY - n.dy)));
    }
    function a(w) {
      if (!n || n.id !== w.pointerId) return;
      const x = n.moved;
      n = null, x && (s = !0, f.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, ye());
    }
    function c() {
      if (s) {
        s = !1;
        return;
      }
      f.panelOpen = !f.panelOpen;
    }
    const d = K(() => !!f.session && !!f.progress && !f.progress.ended), A = K(() => d.value && !!f.progress?.warn), p = K(() => {
      const w = f.progress;
      return !d.value || !w || !f.pack?.phases.length || !(w.phase.cap > 0) ? null : Math.min(100, Math.max(0, w.round / w.phase.cap * 100));
    }), z = K(() => (f.tick, f.session, Mv()));
    return fr(() => f.settings.ball, i, { deep: !0 }), Sa(() => {
      i(), window.addEventListener("resize", i);
    }), Ni(() => window.removeEventListener("resize", i)), (w, x) => (v(), k("button", {
      class: Q(["rlzc-ball", { "is-active": d.value, "is-warn": A.value, "has-ring": p.value !== null }]),
      style: cr({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: o,
      onPointermove: l,
      onPointerup: a,
      onPointercancel: a,
      onClick: c
    }, [
      p.value !== null ? (v(), k("svg", t0, [
        x[0] || (x[0] = u("circle", {
          class: "rlzc-ball-ring-base",
          cx: "24",
          cy: "24",
          r: "22.5"
        }, null, -1)),
        p.value > 0 ? (v(), k("circle", {
          key: 0,
          class: "rlzc-ball-ring-bar",
          cx: "24",
          cy: "24",
          r: "22.5",
          pathLength: "100",
          "stroke-dasharray": `${p.value} 100`
        }, null, 8, n0)) : j("", !0)
      ])) : j("", !0),
      (v(), k("svg", s0, [
        u("path", { d: E(ho) }, null, 8, r0)
      ])),
      z.value ? (v(), k("span", i0)) : j("", !0),
      E(f).market.pending > 0 ? (v(), k("span", o0, $(E(f).market.pending), 1)) : j("", !0)
    ], 38));
  }
});
function a0(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function jn(e) {
  return a0(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function c0(e) {
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
      const p = Math.min(a[1].length + 2, 6);
      t.push(`<h${p}>${jn(a[2])}</h${p}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(l), d = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (c || d) {
      r();
      const p = c ? "ul" : "ol", z = c ? c[1] : d[2];
      n !== p ? (i(), n = p, t.push(p === "ol" ? `<ol start="${d[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(jn(z));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${jn(l.trim())}`);
      continue;
    }
    const A = /^>\s?(.*)$/.exec(l);
    if (A) {
      r(), i(), t.push(`<blockquote>${jn(A[1])}</blockquote>`);
      continue;
    }
    i(), s.push(l);
  }
  return r(), i(), t.join("");
}
const u0 = {
  key: 0,
  class: "rlzc-docs"
}, d0 = { class: "rlzc-subtabs" }, A0 = ["onClick"], f0 = { class: "rlzc-md" }, p0 = ["innerHTML"], h0 = ["src", "alt"], m0 = {
  key: 2,
  class: "rlzc-note"
}, Dl = /* @__PURE__ */ Re({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ he(0);
    fr(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = K(() => t.pack.docs?.[n.value]), r = K(() => s.value?.md ? c0(s.value.md) : ""), i = K(() => s.value?.image ? bh(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (v(), k("section", u0, [
      u("div", d0, [
        (v(!0), k(X, null, ce(e.pack.docs, (a, c) => (v(), k("button", {
          key: c,
          class: Q({ on: n.value === c }),
          onClick: (d) => n.value = c
        }, $(a.title), 11, A0))), 128))
      ]),
      u("article", f0, [
        r.value ? (v(), k("div", {
          key: 0,
          innerHTML: r.value
        }, null, 8, p0)) : j("", !0),
        i.value ? (v(), k("img", {
          key: 1,
          src: i.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, h0)) : s.value?.image && !i.value ? (v(), k("p", m0, "图片无法加载：" + $(s.value.image), 1)) : j("", !0)
      ])
    ])) : j("", !0);
  }
}), g0 = {
  key: 0,
  class: "rlzc-ledger-summary"
}, x0 = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, Ll = /* @__PURE__ */ Re({
  __name: "LedgerSummary",
  setup(e) {
    const t = K(() => Z()), n = K(() => Ct(t.value)), s = K(() => hn(n.value.value, f.ledger)), r = K(() => (f.tick, it(t.value))), i = K(() => St[r.value]), o = K(() => ms(n.value.value, f.ledger, i.value)), l = K(() => f.ledger.length > 0 || n.value.source !== "默认值");
    return (a, c) => l.value ? (v(), k("div", g0, [
      u("span", {
        class: Q(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + $(s.value >= 0 ? "+" : "") + $(s.value), 3),
      o.value ? (v(), k("span", x0, "待清算")) : j("", !0)
    ])) : j("", !0);
  }
}), v0 = { class: "rlzc-system" }, y0 = { class: "rlzc-card rlzc-hero" }, b0 = { class: "rlzc-hero-top" }, k0 = { class: "rlzc-level" }, w0 = {
  key: 0,
  class: "rlzc-chip"
}, z0 = {
  key: 0,
  class: "rlzc-goal"
}, _0 = { class: "rlzc-grid" }, $0 = {
  key: 0,
  class: "rlzc-stat"
}, S0 = {
  key: 1,
  class: "rlzc-stat"
}, C0 = {
  key: 2,
  class: "rlzc-stat"
}, E0 = {
  key: 3,
  class: "rlzc-stat"
}, M0 = {
  key: 0,
  class: "rlzc-subline"
}, T0 = {
  key: 1,
  class: "rlzc-note"
}, I0 = {
  key: 2,
  class: "rlzc-card"
}, N0 = { class: "rlzc-kv" }, P0 = { class: "rlzc-kv" }, O0 = {
  key: 0,
  class: "rlzc-note rlzc-note-warn"
}, D0 = {
  key: 3,
  class: "rlzc-note"
}, L0 = {
  key: 4,
  class: "rlzc-card"
}, R0 = {
  key: 0,
  class: "rlzc-kv"
}, F0 = { class: "rlzc-mono" }, j0 = {
  key: 1,
  class: "rlzc-tasks"
}, B0 = {
  key: 2,
  class: "rlzc-ps"
}, U0 = { class: "rlzc-actions" }, V0 = ["disabled"], H0 = ["disabled"], W0 = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, G0 = ["onClick"], K0 = { class: "rlzc-entry-kicker" }, q0 = {
  class: "rlzc-entry-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, Y0 = ["d"], J0 = { class: "rlzc-entry-title" }, Z0 = { class: "rlzc-entry-level" }, X0 = { class: "rlzc-entry-name" }, Q0 = {
  key: 0,
  class: "rlzc-entry-note"
}, ey = { class: "rlzc-entry-foot" }, ty = ["aria-checked", "onClick"], ny = { key: 1 }, sy = { class: "rlzc-entry-actions" }, ry = ["onClick"], iy = ["onClick"], oy = {
  key: 3,
  class: "rlzc-card"
}, ly = { class: "rlzc-row" }, ay = ["value"], cy = ["disabled"], uy = /* @__PURE__ */ Re({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ he(""), n = K(() => !!f.session && !!f.pack), s = K(() => f.progress), r = K(() => n.value && !!s.value && !s.value.ended), i = K(() => f.packs.find((w) => w.id === t.value) ?? null), o = /* @__PURE__ */ he({}), l = (w, x) => o.value[w] ?? x, a = K(() => !!f.pack?.phases.length), c = K(() => f.settings.panelDisplay !== "statusbar"), d = K(() => {
      const w = s.value;
      return w ? a.value ? `${w.warn ? "⚠️ " : ""}${w.round}/${w.phase.cap}` : `第${w.round}轮` : "";
    }), A = K(() => {
      const w = s.value;
      return w ? w.limit?.text ? w.limit.text : w.panel?.limit || f.session?.briefing?.limit || "—" : "";
    }), p = K(() => {
      const w = s.value;
      return !!w && !w.ended && a.value && w.phase.cap > 0 && w.nextRound < w.phase.cap;
    });
    async function z() {
      t.value && (await lv(t.value), t.value = "");
    }
    return (w, x) => (v(), k("div", v0, [
      n.value && s.value ? (v(), k(X, { key: 0 }, [
        u("div", y0, [
          u("div", b0, [
            u("span", k0, $(E(f).pack?.rest ? "—" : E(f).pack.level), 1),
            u("h3", null, $(E(f).pack.name), 1),
            s.value.ended ? (v(), k("span", w0, "已结束")) : j("", !0)
          ]),
          E(f).session?.briefing?.goal ? (v(), k("p", z0, "目标：" + $(E(f).session.briefing.goal), 1)) : j("", !0)
        ]),
        u("div", _0, [
          a.value ? (v(), k("div", $0, [
            x[3] || (x[3] = u("span", null, "阶段", -1)),
            u("b", null, $(s.value.phase.name), 1)
          ])) : j("", !0),
          u("div", {
            class: Q(["rlzc-stat", { warn: s.value.warn }])
          }, [
            x[4] || (x[4] = u("span", null, "轮次", -1)),
            u("b", null, $(d.value), 1)
          ], 2),
          s.value.currentClock ? (v(), k("div", S0, [
            x[5] || (x[5] = u("span", null, "钟时", -1)),
            u("b", null, $(s.value.currentClock), 1)
          ])) : j("", !0),
          s.value.roundsLeft ? (v(), k("div", C0, [
            x[6] || (x[6] = u("span", null, "最多剩余轮次", -1)),
            u("b", null, $(s.value.roundsLeft.x) + "/" + $(s.value.roundsLeft.y), 1)
          ])) : j("", !0),
          c.value ? (v(), k("div", E0, [
            x[7] || (x[7] = u("span", null, "剩余时间", -1)),
            u("b", null, $(A.value), 1)
          ])) : j("", !0),
          r.value ? j("", !0) : (v(), Le(Ll, { key: 4 }))
        ]),
        E(f).subLine ? (v(), k("p", M0, $(E(f).subLine), 1)) : j("", !0),
        s.value.skipGoal ? (v(), k("div", T0, "快进中：目标 " + $(E(f).pack.phases.find((_) => _.id === s.value.skipGoal.phase)?.name) + " 第" + $(s.value.skipGoal.round) + "轮", 1)) : j("", !0),
        s.value.ended && s.value.settlement ? (v(), k("div", I0, [
          u("div", N0, [
            x[8] || (x[8] = u("span", null, "结果", -1)),
            u("b", null, $(s.value.settlement.result ?? "—"), 1)
          ]),
          u("div", P0, [
            x[9] || (x[9] = u("span", null, "评价", -1)),
            u("b", null, $(s.value.settlement.rating ?? "—"), 1)
          ]),
          E(f).session?.clearance && s.value.settlement.result === "失败" ? (v(), k("div", O0, " 清算未通关 ")) : j("", !0)
        ])) : s.value.ended ? (v(), k("div", D0, "副本已手动结束。")) : j("", !0),
        c.value && s.value.panel ? (v(), k("div", L0, [
          s.value.panel.progressBar ? (v(), k("div", R0, [
            x[10] || (x[10] = u("span", null, "进度", -1)),
            u("b", F0, $(s.value.panel.progressBar), 1)
          ])) : j("", !0),
          s.value.panel.tasks.length ? (v(), k("div", j0, [
            x[11] || (x[11] = u("span", null, "任务", -1)),
            u("ul", null, [
              (v(!0), k(X, null, ce(s.value.panel.tasks, (_, S) => (v(), k("li", { key: S }, $(_), 1))), 128))
            ])
          ])) : j("", !0),
          s.value.panel.ps ? (v(), k("div", B0, "ps：" + $(s.value.panel.ps), 1)) : j("", !0)
        ])) : j("", !0),
        u("div", U0, [
          u("button", {
            class: "rlzc-btn",
            disabled: !p.value,
            onClick: x[0] || (x[0] = //@ts-ignore
            (..._) => E(Sl) && E(Sl)(..._))
          }, "跳过（到本阶段结束）", 8, V0),
          u("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: x[1] || (x[1] = //@ts-ignore
            (..._) => E(Cl) && E(Cl)(..._))
          }, "手动结束副本", 8, H0)
        ]),
        r.value && E(f).pack.docs?.length ? (v(), Le(Dl, {
          key: 5,
          pack: E(f).pack
        }, null, 8, ["pack"])) : j("", !0)
      ], 64)) : (v(), k("div", W0, [
        x[12] || (x[12] = u("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        Ee(Ll)
      ])),
      r.value ? j("", !0) : (v(!0), k(X, { key: 2 }, ce(E(f).pendingEntries, (_) => (v(), k("div", {
        key: _.key,
        class: "rlzc-card rlzc-pending"
      }, [
        u("button", {
          class: "rlzc-entry-close",
          type: "button",
          "aria-label": "不再提示",
          title: "不再提示",
          onClick: (S) => E(dv)(_.key)
        }, "✕", 8, G0),
        u("div", K0, [
          (v(), k("svg", q0, [
            u("path", { d: E(ho) }, null, 8, Y0)
          ])),
          x[13] || (x[13] = u("span", null, "待确认的副本", -1))
        ]),
        u("div", J0, [
          u("span", Z0, $(_.level), 1),
          u("span", X0, $(_.name), 1)
        ]),
        _.unknown ? (v(), k("div", Q0, "未收录，将使用通用副本包")) : j("", !0),
        x[16] || (x[16] = u("div", { class: "rlzc-entry-note" }, "进入后以最新一条AI回复为第1轮", -1)),
        u("div", ey, [
          _.liveShow ? (v(), k("button", {
            key: 0,
            type: "button",
            class: Q(["rlzc-entry-live", { on: l(_.key, _.live) }]),
            role: "switch",
            "aria-checked": l(_.key, _.live),
            onClick: (S) => o.value[_.key] = !l(_.key, _.live)
          }, [
            u("span", {
              class: Q(["rlzc-toggle danger", { on: l(_.key, _.live) }])
            }, [...x[14] || (x[14] = [
              u("span", null, null, -1)
            ])], 2),
            x[15] || (x[15] = u("span", null, "直播", -1))
          ], 10, ty)) : (v(), k("span", ny)),
          u("div", sy, [
            _.unknown ? (v(), k("button", {
              key: 0,
              type: "button",
              class: "rlzc-btn ghost rlzc-pending-save",
              title: "现在不玩，以后在手动选择副本里进入",
              onClick: (S) => E(uv)(_.key)
            }, "收录", 8, ry)) : j("", !0),
            u("button", {
              type: "button",
              class: "rlzc-btn rlzc-entry-go",
              onClick: (S) => E(cv)(_.key, l(_.key, _.live))
            }, "进入", 8, iy)
          ])
        ])
      ]))), 128)),
      r.value ? j("", !0) : (v(), k("div", oy, [
        x[18] || (x[18] = u("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        u("div", ly, [
          mt(u("select", {
            "onUpdate:modelValue": x[2] || (x[2] = (_) => t.value = _),
            class: "rlzc-input"
          }, [
            x[17] || (x[17] = u("option", { value: "" }, "选择副本…", -1)),
            (v(!0), k(X, null, ce(E(f).packs, (_) => (v(), k("option", {
              key: _.id,
              value: _.id
            }, $(_.level) + "｜" + $(_.name), 9, ay))), 128))
          ], 512), [
            [Ya, t.value]
          ]),
          u("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: z
          }, "进入", 8, cy)
        ])
      ])),
      !r.value && i.value?.docs?.length ? (v(), Le(Dl, {
        key: 4,
        pack: i.value
      }, null, 8, ["pack"])) : j("", !0)
    ]));
  }
}), dy = { class: "rlzc-ledger" }, Ay = { class: "rlzc-card rlzc-ledger-hero-card" }, fy = { class: "rlzc-ledger-hero-cols" }, py = { class: "rlzc-ledger-hero-col" }, hy = { class: "rlzc-ledger-hero-col-val" }, my = { class: "rlzc-ledger-hero-col" }, gy = { class: "rlzc-ledger-hero-col-val" }, xy = { class: "rlzc-ledger-hero-col" }, vy = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, yy = { class: "rlzc-card" }, by = {
  key: 0,
  class: "rlzc-ledger-list"
}, ky = { class: "rlzc-ledger-item-left" }, wy = { class: "rlzc-ledger-item-src" }, zy = { class: "rlzc-ledger-item-time" }, _y = { class: "rlzc-ledger-item-right" }, $y = { class: "rlzc-ledger-item-after" }, Sy = {
  key: 1,
  class: "rlzc-hint"
}, Cy = /* @__PURE__ */ Re({
  __name: "LedgerTab",
  setup(e) {
    const t = K(() => Z()), n = K(() => Ct(t.value)), s = K(() => f.ledger), r = K(() => hn(n.value.value, s.value)), i = K(() => {
      const w = ng(n.value.value, s.value);
      return s.value.map((x, _) => ({ e: x, after: w[_] })).reverse();
    }), o = K(() => (f.tick, it(t.value))), l = K(() => St[o.value]), a = K(() => ms(n.value.value, s.value, l.value)), c = K(() => Math.max(0, l.value - r.value)), d = K(() => n.value.source === "默认值");
    function A(w) {
      return new Intl.NumberFormat("zh-CN").format(w);
    }
    function p(w) {
      return (w >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(w);
    }
    function z(w) {
      try {
        const x = new Date(w), _ = String(x.getMonth() + 1).padStart(2, "0"), S = String(x.getDate()).padStart(2, "0"), T = String(x.getHours()).padStart(2, "0"), C = String(x.getMinutes()).padStart(2, "0");
        return `${_}-${S} ${T}:${C}`;
      } catch {
        return w;
      }
    }
    return (w, x) => (v(), k("div", dy, [
      u("div", Ay, [
        x[3] || (x[3] = u("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        u("b", {
          class: Q(["rlzc-ledger-hero-num", { negative: r.value < 0 }])
        }, $(A(r.value)), 3),
        x[4] || (x[4] = u("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        u("div", fy, [
          u("div", py, [
            x[0] || (x[0] = u("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            u("span", hy, $(o.value), 1)
          ]),
          u("div", my, [
            x[1] || (x[1] = u("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            u("span", gy, $(A(l.value)), 1)
          ]),
          u("div", xy, [
            x[2] || (x[2] = u("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            u("span", {
              class: Q(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": a.value }])
            }, $(a.value ? `距线 ${A(c.value)}` : "无"), 3)
          ])
        ]),
        d.value ? (v(), k("p", vy, "初始积分按 1000 计，可在设置页修改")) : j("", !0)
      ]),
      u("div", yy, [
        x[5] || (x[5] = u("h4", null, "流水", -1)),
        s.value.length ? (v(), k("ul", by, [
          (v(!0), k(X, null, ce(i.value, (_, S) => (v(), k("li", {
            key: `${S}-${_.e.mesIndex}-${_.e.delta}-${_.e.at}`,
            class: "rlzc-ledger-item"
          }, [
            u("div", ky, [
              u("span", wy, $(_.e.source), 1),
              u("span", zy, $(z(_.e.at)), 1)
            ]),
            u("div", _y, [
              u("span", {
                class: Q(["rlzc-ledger-item-delta", _.e.delta >= 0 ? "pos" : "neg"])
              }, $(p(_.e.delta)), 3),
              u("span", $y, "余额 " + $(A(_.after)), 1)
            ])
          ]))), 128))
        ])) : (v(), k("p", Sy, "还没有收支记录。"))
      ])
    ]));
  }
}), Ey = { class: "rlzc-market" }, My = { class: "rlzc-subtabs rlzc-market-tabs" }, Ty = { class: "rlzc-card rlzc-mk-status" }, Iy = { class: "rlzc-mk-q" }, Ny = { class: "rlzc-mk-tag" }, Py = { class: "rlzc-mk-opts" }, Oy = ["disabled", "onClick"], Dy = { class: "rlzc-row rlzc-mk-bet" }, Ly = ["onUpdate:modelValue"], Ry = ["disabled", "onClick"], Fy = { class: "rlzc-hint" }, jy = {
  key: 0,
  class: "rlzc-mk-red"
}, By = {
  key: 1,
  class: "rlzc-mk-mine"
}, Uy = {
  key: 1,
  class: "rlzc-card"
}, Vy = {
  key: 0,
  class: "rlzc-tk-list"
}, Hy = { class: "rlzc-tk-left" }, Wy = { class: "rlzc-tk-title" }, Gy = {
  key: 1,
  class: "rlzc-hint"
}, Ky = {
  key: 0,
  class: "rlzc-card rlzc-mk-status"
}, qy = { class: "rlzc-cs-tables" }, Yy = ["onClick"], Jy = {
  key: 0,
  class: "rlzc-card rlzc-cs-play"
}, Zy = {
  key: 0,
  class: "rlzc-segsrc rlzc-cs-seg"
}, Xy = ["onClick"], Qy = ["onClick"], eb = { class: "rlzc-row rlzc-mk-bet" }, tb = ["disabled"], nb = { class: "rlzc-hint" }, sb = {
  key: 2,
  class: "rlzc-mk-red"
}, rb = /* @__PURE__ */ Re({
  __name: "MarketTab",
  setup(e) {
    const t = /* @__PURE__ */ he("book"), n = (U) => new Intl.NumberFormat("en-US").format(U), s = (U) => `×${U.toFixed(2)}`, r = K(() => f.market.pending), i = K(() => (f.tick, it())), o = K(() => f.market.book), l = K(() => !!o.value?.closedAt), a = K(() => {
      const U = o.value;
      return U && U.closedAt ? `《${U.packName}》已封盘` : U ? `《${U.packName}》开盘中 · 第1轮结束封盘${U.freak?.status === "pending" ? " · 庄家出题中" : ""}` : f.session?.status === "active" && f.pack?.rest ? "休整副本不开盘。" : "进副本后开盘。";
    }), c = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" }, d = /* @__PURE__ */ he({}), A = /* @__PURE__ */ he({});
    function p(U, J) {
      l.value || f.market.results[U.id] || (d.value = { ...d.value, [U.id]: d.value[U.id] === J ? "" : J });
    }
    function z(U) {
      f.tick;
      const J = A.value[U.id];
      return vu(U.id, typeof J == "number" ? J : 0);
    }
    function w(U) {
      const J = d.value[U.id], Y = A.value[U.id];
      if (!J || typeof Y != "number") return;
      const xe = jv(U.id, J, Y);
      if (xe) {
        we("warning", xe);
        return;
      }
      A.value = { ...A.value, [U.id]: null }, d.value = { ...d.value, [U.id]: "" };
    }
    function x(U) {
      const J = o.value;
      return J ? f.market.tickets.filter((Y) => Y.book.session === J.session && Y.ticket.market === U.id) : [];
    }
    function _(U) {
      return U.market?.options.find((J) => J.id === U.ticket.option)?.label ?? U.ticket.option;
    }
    function S(U) {
      return `${U.book.packName} · ${U.market?.q ?? U.ticket.market} · ${_(U)}`;
    }
    function T(U) {
      const J = U.ticket, Y = U.res?.stamp;
      return Y ? Y === "win" ? `押 ${n(J.stake)} · ${s(J.odds)} · 兑 ${n(Xc(J.stake, J.odds))}` : Y === "lose" ? `押 ${n(J.stake)} · ${s(J.odds)}` : `押 ${n(J.stake)} · 原数退还` : `押 ${n(J.stake)} · ${s(J.odds)} · 待开奖`;
    }
    const C = { win: "兑", lose: "废", refund: "退" }, I = K(() => f.market.tables.map((U) => Sn(U)).filter((U) => !!U)), F = /* @__PURE__ */ he(""), L = K(() => F.value ? Sn(F.value) : void 0), B = /* @__PURE__ */ he(""), re = /* @__PURE__ */ he(null), H = /* @__PURE__ */ he(!1), m = /* @__PURE__ */ he(""), g = /* @__PURE__ */ he(null);
    let y = null;
    function D(U) {
      if (F.value === U) {
        F.value = "";
        return;
      }
      F.value = U;
      const J = Sn(U);
      B.value = J && J.bets.length === 1 ? J.bets[0].id : "", g.value = null;
    }
    const ie = K(() => (L.value?.bets ?? []).filter((U) => !/^[nd]\d+$/.test(U.id))), le = K(() => (L.value?.bets ?? []).filter((U) => /^[nd]\d+$/.test(U.id))), Oe = K(() => (f.tick, yu(typeof re.value == "number" ? re.value : 0)));
    function ot() {
      try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      } catch {
        return !1;
      }
    }
    function Qe(U, J) {
      return U === "bell" ? `${J[0]}下` : U === "door" ? `${J[0]}号门` : U === "lot" ? `第${J[0]}支` : `${J[0]} : ${J[1]}`;
    }
    function vn() {
      const U = L.value, J = re.value;
      if (!U || !B.value || typeof J != "number" || H.value) return;
      const Y = Bv(U.id, B.value, J);
      if (Y.error || !Y.outcome) {
        we("warning", Y.error ?? "不能下注");
        return;
      }
      const xe = { ...Y.outcome, stake: J };
      if (g.value = null, ot()) {
        m.value = Qe(U.id, xe.faces), g.value = xe;
        return;
      }
      H.value = !0;
      const ks = U.id === "bell" ? 12 : U.id === "door" ? 20 : U.id === "lot" ? 3 : 13, Mt = () => 1 + Math.floor(Math.random() * ks);
      y = setInterval(() => m.value = Qe(U.id, [Mt(), Mt()]), 80), setTimeout(() => {
        y && clearInterval(y), y = null, m.value = Qe(U.id, xe.faces), H.value = !1, g.value = xe;
      }, 1200);
    }
    const qt = K(() => {
      const U = g.value;
      return U ? `结果：${U.result}。${U.win ? `赢 ${n(U.payout)}` : `输 ${n(U.stake)}`}` : "";
    });
    return Ni(() => {
      y && clearInterval(y);
    }), (U, J) => (v(), k("div", Ey, [
      u("nav", My, [
        u("button", {
          class: Q({ on: t.value === "book" }),
          onClick: J[0] || (J[0] = (Y) => t.value = "book")
        }, "盘口", 2),
        u("button", {
          class: Q({ on: t.value === "tickets" }),
          onClick: J[1] || (J[1] = (Y) => t.value = "tickets")
        }, $(r.value ? `票夹 · ${r.value}` : "票夹"), 3),
        u("button", {
          class: Q({ on: t.value === "casino" }),
          onClick: J[2] || (J[2] = (Y) => t.value = "casino")
        }, "赌坊", 2)
      ]),
      t.value === "book" ? (v(), k(X, { key: 0 }, [
        u("div", Ty, $(a.value), 1),
        (v(!0), k(X, null, ce(o.value?.markets ?? [], (Y) => (v(), k("div", {
          key: Y.id,
          class: "rlzc-card rlzc-mk-card"
        }, [
          u("div", Iy, [
            u("span", Ny, $(c[Y.kind]), 1),
            Me($(Y.q), 1)
          ]),
          u("div", Py, [
            (v(!0), k(X, null, ce(Y.options, (xe) => (v(), k("button", {
              key: xe.id,
              class: Q(["rlzc-mk-opt", { on: d.value[Y.id] === xe.id }]),
              disabled: l.value || !!E(f).market.results[Y.id],
              onClick: (ks) => p(Y, xe.id)
            }, [
              u("span", null, $(xe.label), 1),
              u("b", null, $(s(xe.odds)), 1)
            ], 10, Oy))), 128))
          ]),
          d.value[Y.id] && !l.value ? (v(), k(X, { key: 0 }, [
            u("div", Dy, [
              mt(u("input", {
                "onUpdate:modelValue": (xe) => A.value[Y.id] = xe,
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 8, Ly), [
                [
                  Ot,
                  A.value[Y.id],
                  void 0,
                  { number: !0 }
                ]
              ]),
              u("button", {
                class: "rlzc-btn",
                disabled: typeof A.value[Y.id] != "number",
                onClick: (xe) => w(Y)
              }, "下注", 8, Ry)
            ]),
            u("p", Fy, "单注上限 " + $(n(z(Y).cap)) + "（" + $(i.value) + "级）", 1),
            z(Y).belowKill ? (v(), k("p", jy, "押完余额低于斩杀线")) : j("", !0)
          ], 64)) : j("", !0),
          x(Y).length ? (v(), k("ul", By, [
            (v(!0), k(X, null, ce(x(Y), (xe) => (v(), k("li", {
              key: xe.ticket.id
            }, $(_(xe)) + " · " + $(T(xe)), 1))), 128))
          ])) : j("", !0)
        ]))), 128))
      ], 64)) : t.value === "tickets" ? (v(), k("div", Uy, [
        E(f).market.tickets.length ? (v(), k("ul", Vy, [
          (v(!0), k(X, null, ce(E(f).market.tickets, (Y) => (v(), k("li", {
            key: Y.ticket.id,
            class: "rlzc-tk"
          }, [
            u("div", Hy, [
              u("span", Wy, $(S(Y)), 1),
              u("small", null, $(T(Y)), 1)
            ]),
            u("span", {
              class: Q(["rlzc-stamp", Y.res ? Y.res.stamp : "pending"])
            }, $(Y.res ? C[Y.res.stamp] : "待"), 3)
          ]))), 128))
        ])) : (v(), k("p", Gy, "还没有赌票。"))
      ])) : (v(), k(X, { key: 2 }, [
        E(f).market.casinoOpen ? (v(), k(X, { key: 1 }, [
          J[4] || (J[4] = u("p", { class: "rlzc-hint" }, "今晚开两张桌，回到回廊换一批。", -1)),
          u("div", qy, [
            (v(!0), k(X, null, ce(I.value, (Y) => (v(), k("button", {
              key: Y.id,
              class: Q(["rlzc-card rlzc-cs-table", { on: F.value === Y.id }]),
              onClick: (xe) => D(Y.id)
            }, [
              u("b", null, $(Y.name), 1),
              u("small", null, $(Y.desc), 1)
            ], 10, Yy))), 128))
          ]),
          L.value ? (v(), k("div", Jy, [
            u("h4", null, $(L.value.name), 1),
            ie.value.length ? (v(), k("div", Zy, [
              (v(!0), k(X, null, ce(ie.value, (Y) => (v(), k("button", {
                key: Y.id,
                class: Q({ on: B.value === Y.id }),
                onClick: (xe) => B.value = Y.id
              }, $(Y.label), 11, Xy))), 128))
            ])) : j("", !0),
            le.value.length ? (v(), k("div", {
              key: 1,
              class: Q(["rlzc-cs-grid", L.value.id])
            }, [
              (v(!0), k(X, null, ce(le.value, (Y) => (v(), k("button", {
                key: Y.id,
                class: Q({ on: B.value === Y.id }),
                onClick: (xe) => B.value = Y.id
              }, $(Y.label), 11, Qy))), 128))
            ], 2)) : j("", !0),
            u("div", eb, [
              mt(u("input", {
                "onUpdate:modelValue": J[3] || (J[3] = (Y) => re.value = Y),
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 512), [
                [
                  Ot,
                  re.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              u("button", {
                class: "rlzc-btn",
                disabled: !B.value || typeof re.value != "number" || H.value,
                onClick: vn
              }, "开", 8, tb)
            ]),
            u("p", nb, "单注上限 " + $(n(Oe.value.cap)) + "（" + $(i.value) + "级）", 1),
            Oe.value.belowKill ? (v(), k("p", sb, "押完余额低于斩杀线")) : j("", !0),
            H.value || g.value ? (v(), k("div", {
              key: 3,
              class: Q(["rlzc-cs-face", { rolling: H.value }])
            }, $(m.value || ""), 3)) : j("", !0),
            g.value ? (v(), k("p", {
              key: 4,
              class: Q(["rlzc-cs-result", g.value.win ? "win" : "lose"])
            }, $(qt.value), 3)) : j("", !0)
          ])) : j("", !0)
        ], 64)) : (v(), k("div", Ky, "赌坊只在回廊营业。"))
      ], 64))
    ]));
  }
}), ib = { class: "rlzc-preset-area" }, ob = {
  key: 0,
  class: "rlzc-preset-row"
}, lb = ["value"], ab = {
  key: 0,
  value: ""
}, cb = ["value"], ub = ["disabled"], db = ["disabled"], Ab = { class: "rlzc-stacked-field" }, fb = ["value"], pb = { class: "rlzc-stacked-field" }, hb = { class: "rlzc-key-wrap" }, mb = ["type", "value"], gb = ["aria-label"], xb = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, vb = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, yb = { class: "rlzc-stacked-field" }, bb = {
  key: 0,
  value: "",
  selected: "",
  disabled: ""
}, kb = ["value"], wb = ["value", "selected"], zb = ["value"], _b = { class: "rlzc-check-btns" }, $b = ["disabled"], Sb = ["disabled"], Cb = {
  key: 0,
  class: "rlzc-check-list"
}, Eb = ["data-kind"], Mb = { class: "rlzc-check-text" }, Tb = {
  key: 0,
  class: "rlzc-check-time"
}, Ib = {
  key: 1,
  class: "rlzc-check-btns"
}, bu = /* @__PURE__ */ Re({
  __name: "PresetEditor",
  props: {
    owner: {},
    bare: { type: Boolean }
  },
  setup(e) {
    const n = e.owner, s = K(() => f.settings.subApi.presets), r = K(() => s.value.find((F) => F.id === n.presetId) ?? null), i = K(() => r.value?.models ?? []), o = /* @__PURE__ */ he(!1), l = /* @__PURE__ */ he(""), a = /* @__PURE__ */ he(""), c = K(() => {
      const F = r.value;
      if (!F) return [];
      const L = (B, re, H) => re && H ? [{ id: B, text: re, kind: H.ok ? "on" : "warn", time: H.at ? Um(H.at) : "" }] : [];
      return [...L("fetch", Vm(F), F.fetchResult), ...L("test", Hm(F), F.testResult)];
    });
    function d() {
      ye();
    }
    function A() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function p() {
      const F = (await pi("给这个API起个名字：", `我的API ${s.value.length + 1}`))?.trim();
      if (!F) return;
      const L = { id: A(), name: F, url: "", key: "", model: "" };
      f.settings.subApi.presets = [...s.value, L], n.presetId = L.id, d();
    }
    async function z() {
      if (!r.value) return;
      const F = (await pi("改名为：", r.value.name))?.trim();
      F && (r.value.name = F, d());
    }
    async function w() {
      if (!r.value || !await Gt(`确定删除「${r.value.name}」吗？`)) return;
      const F = n.presetId, L = s.value.filter((B) => B.id !== F);
      f.settings.subApi.presets = L;
      for (const B of [f.settings.subApi, f.settings.live, n]) B.presetId === F && (B.presetId = L[0]?.id ?? "");
      d();
    }
    function x(F) {
      n.presetId = F.target.value, d();
    }
    function _(F, L) {
      Wx(F, L.target.value, n.presetId);
    }
    function S() {
      return Math.max(5, Number(f.settings.subApi.timeoutSec) || 60) * 1e3;
    }
    function T(F, L, B) {
      return F.url === L.url && F.key === L.key && (!B || F.model === L.model);
    }
    async function C() {
      const F = r.value;
      if (!F || !cl(F) || l.value) return;
      const L = { ...F };
      l.value = F.id;
      try {
        const B = await Lm(L, S());
        T(F, L, !1) && dl(F, { ok: !0, models: B });
      } catch (B) {
        T(F, L, !1) && dl(F, { ok: !1, reason: mi(B) });
      } finally {
        l.value = "", d();
      }
    }
    async function I() {
      const F = r.value;
      if (!F || !ul(F) || a.value) return;
      const L = { ...F };
      a.value = F.id;
      try {
        await Fm(L, S()), T(F, L, !0) && Al(F, { ok: !0 });
      } catch (B) {
        T(F, L, !0) && Al(F, { ok: !1, reason: mi(B) });
      } finally {
        a.value = "", d();
      }
    }
    return (F, L) => (v(), k("div", ib, [
      e.bare ? j("", !0) : (v(), k("div", ob, [
        u("select", {
          class: "rlzc-input",
          value: E(n).presetId,
          onChange: x
        }, [
          s.value.length ? j("", !0) : (v(), k("option", ab, "还没有保存的接口")),
          (v(!0), k(X, null, ce(s.value, (B) => (v(), k("option", {
            key: B.id,
            value: B.id
          }, $(B.name), 9, cb))), 128))
        ], 40, lb),
        u("button", {
          class: "rlzc-icon-btn",
          "aria-label": "新建接口",
          type: "button",
          onClick: p
        }, [...L[4] || (L[4] = [
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
          disabled: !r.value,
          onClick: z
        }, [...L[5] || (L[5] = [
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
        ])], 8, ub),
        u("button", {
          class: "rlzc-icon-btn rlzc-danger",
          "aria-label": "删除接口",
          type: "button",
          disabled: !r.value,
          onClick: w
        }, [...L[6] || (L[6] = [
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
        ])], 8, db)
      ])),
      r.value ? (v(), k(X, { key: 1 }, [
        u("div", Ab, [
          L[7] || (L[7] = u("label", { class: "rlzc-label" }, "地址", -1)),
          u("input", {
            class: "rlzc-input",
            value: r.value.url,
            placeholder: "https://…/v1",
            onInput: L[0] || (L[0] = (B) => _("url", B))
          }, null, 40, fb)
        ]),
        u("div", pb, [
          L[10] || (L[10] = u("label", { class: "rlzc-label" }, "密钥", -1)),
          u("div", hb, [
            u("input", {
              class: "rlzc-input",
              type: o.value ? "text" : "password",
              value: r.value.key,
              autocomplete: "off",
              onInput: L[1] || (L[1] = (B) => _("key", B))
            }, null, 40, mb),
            u("button", {
              class: "rlzc-eye-btn",
              type: "button",
              "aria-label": o.value ? "隐藏密钥" : "显示密钥",
              onClick: L[2] || (L[2] = (B) => o.value = !o.value)
            }, [
              o.value ? (v(), k("svg", xb, [...L[8] || (L[8] = [
                u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                u("circle", {
                  cx: "8",
                  cy: "8",
                  r: "2"
                }, null, -1),
                u("path", { d: "M2 2l12 12" }, null, -1)
              ])])) : (v(), k("svg", vb, [...L[9] || (L[9] = [
                u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                u("circle", {
                  cx: "8",
                  cy: "8",
                  r: "2"
                }, null, -1)
              ])]))
            ], 8, gb)
          ])
        ]),
        u("div", yb, [
          L[11] || (L[11] = u("label", { class: "rlzc-label" }, "模型", -1)),
          i.value.length ? (v(), k("select", {
            key: 0,
            class: "rlzc-input",
            onChange: L[3] || (L[3] = (B) => _("model", B))
          }, [
            r.value.model ? j("", !0) : (v(), k("option", bb, "请选择…")),
            r.value.model && !i.value.includes(r.value.model) ? (v(), k("option", {
              key: 1,
              value: r.value.model,
              selected: ""
            }, $(r.value.model), 9, kb)) : j("", !0),
            (v(!0), k(X, null, ce(i.value, (B) => (v(), k("option", {
              key: B,
              value: B,
              selected: B === r.value.model
            }, $(B), 9, wb))), 128))
          ], 32)) : (v(), k("input", {
            key: 1,
            class: "rlzc-input rlzc-input-disabled",
            value: r.value.model ? r.value.model : "先拉取模型",
            readonly: "",
            tabindex: "-1"
          }, null, 8, zb))
        ]),
        u("div", _b, [
          u("button", {
            class: "rlzc-btn ghost",
            type: "button",
            disabled: !!l.value || !E(cl)(r.value),
            onClick: C
          }, $(l.value === r.value.id ? "拉取中…" : "拉取模型"), 9, $b),
          u("button", {
            class: "rlzc-btn ghost",
            type: "button",
            disabled: !!a.value || !E(ul)(r.value),
            onClick: I
          }, $(a.value === r.value.id ? "测试中…" : "测试模型"), 9, Sb)
        ]),
        c.value.length ? (v(), k("ul", Cb, [
          (v(!0), k(X, null, ce(c.value, (B) => (v(), k("li", {
            key: B.id,
            "data-kind": B.kind
          }, [
            u("span", Mb, $(B.text), 1),
            B.time ? (v(), k("time", Tb, $(B.time), 1)) : j("", !0)
          ], 8, Eb))), 128))
        ])) : j("", !0),
        e.bare ? (v(), k("div", Ib, [
          u("button", {
            class: "rlzc-btn ghost small",
            type: "button",
            onClick: z
          }, "改名"),
          u("button", {
            class: "rlzc-btn ghost small rlzc-danger-text",
            type: "button",
            onClick: w
          }, "删除接口")
        ])) : j("", !0)
      ], 64)) : j("", !0)
    ]));
  }
}), Nb = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, Pb = ["aria-expanded"], Ob = ["data-kind"], Db = {
  key: 0,
  class: "rlzc-collapse-body"
}, Lb = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, Rb = {
  key: 1,
  class: "rlzc-option-list"
}, Fb = { class: "rlzc-option-row" }, jb = ["aria-checked"], Bb = { class: "rlzc-option-row" }, Ub = ["aria-checked"], Vb = { class: "rlzc-option-row rlzc-option-row-timeout" }, Hb = { class: "rlzc-timeout-wrap" }, Wb = ["value"], Gb = /* @__PURE__ */ Re({
  __name: "SubApiCard",
  setup(e) {
    const t = K(() => f.settings.subApi), n = K(() => t.value.presets.find((d) => d.id === t.value.presetId) ?? null), s = K(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : Wm(n.value)), r = K(() => f.settings.cardCollapsed.subApi);
    function i() {
      f.settings.cardCollapsed.subApi = !f.settings.cardCollapsed.subApi, o();
    }
    function o() {
      ye();
    }
    function l(d) {
      t.value.source = d, o();
    }
    function a(d) {
      const A = Math.floor(Number(d.target.value));
      if (!Number.isFinite(A) || A < 5) {
        we("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = A, o();
    }
    function c(d, A) {
      t.value[d] = A, o();
    }
    return (d, A) => (v(), k("div", Nb, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !r.value,
        onClick: i
      }, [
        A[5] || (A[5] = u("h4", null, "副本事件检测", -1)),
        u("span", {
          class: "rlzc-dot",
          "data-kind": s.value.kind
        }, $(s.value.text), 9, Ob),
        u("span", {
          class: Q(["rlzc-collapse-arrow", { open: !r.value }])
        }, "▸", 2)
      ], 8, Pb),
      r.value ? j("", !0) : (v(), k("div", Db, [
        A[12] || (A[12] = u("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        u("div", Lb, [
          u("button", {
            class: Q({ on: t.value.source === "off" }),
            onClick: A[0] || (A[0] = (p) => l("off"))
          }, "关闭", 2),
          u("button", {
            class: Q({ on: t.value.source === "main" }),
            onClick: A[1] || (A[1] = (p) => l("main"))
          }, "跟随主API", 2),
          u("button", {
            class: Q({ on: t.value.source === "preset" }),
            onClick: A[2] || (A[2] = (p) => l("preset"))
          }, "自设API", 2)
        ]),
        t.value.source === "preset" ? (v(), Le(bu, {
          key: 0,
          owner: t.value
        }, null, 8, ["owner"])) : j("", !0),
        t.value.source !== "off" ? (v(), k("div", Rb, [
          u("div", Fb, [
            A[7] || (A[7] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "省钱模式"),
              u("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: Q(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: A[3] || (A[3] = (p) => c("saveMode", !t.value.saveMode))
            }, [...A[6] || (A[6] = [
              u("span", null, null, -1)
            ])], 10, jb)
          ]),
          u("div", Bb, [
            A[9] || (A[9] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "等检测完再写下一轮"),
              u("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: Q(["rlzc-toggle", { on: t.value.wait }]),
              onClick: A[4] || (A[4] = (p) => c("wait", !t.value.wait))
            }, [...A[8] || (A[8] = [
              u("span", null, null, -1)
            ])], 10, Ub)
          ]),
          u("div", Vb, [
            A[11] || (A[11] = u("span", null, "超时", -1)),
            u("div", Hb, [
              u("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: a
              }, null, 40, Wb),
              A[10] || (A[10] = u("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : j("", !0)
      ]))
    ]));
  }
}), Kb = { class: "rlzc-card rlzc-collapsible rlzc-live-card" }, qb = ["aria-expanded"], Yb = {
  key: 0,
  class: "rlzc-dot",
  "data-kind": "on"
}, Jb = {
  key: 0,
  class: "rlzc-collapse-body"
}, Zb = { class: "rlzc-onair-text" }, Xb = {
  key: 0,
  class: "rlzc-onair-lock",
  "aria-label": "副本内已锁定"
}, Qb = { class: "rlzc-option-list rlzc-live-opts" }, e1 = { class: "rlzc-option-row" }, t1 = {
  class: "rlzc-segsrc rlzc-live-ctl",
  role: "group",
  "aria-label": "弹幕来源"
}, n1 = { class: "rlzc-option-row" }, s1 = { class: "rlzc-range-wrap rlzc-live-ctl" }, r1 = ["value"], i1 = { class: "rlzc-range-val" }, o1 = {
  key: 0,
  class: "rlzc-option-row"
}, l1 = { class: "rlzc-range-wrap rlzc-live-ctl" }, a1 = ["value"], c1 = { class: "rlzc-range-val" }, u1 = { class: "rlzc-option-row" }, d1 = { class: "rlzc-live-ctl rlzc-live-api" }, A1 = ["value"], f1 = ["value"], p1 = { class: "rlzc-option-row" }, h1 = { class: "rlzc-timeout-wrap" }, m1 = ["value"], g1 = { class: "rlzc-hint rlzc-live-summary" }, x1 = { class: "rlzc-option-row" }, v1 = ["aria-checked"], y1 = /* @__PURE__ */ Re({
  __name: "LiveCard",
  setup(e) {
    const t = K(() => f.settings.live), n = K(() => (f.tick, f.session, Tv())), s = K(() => n.value.on);
    function r() {
      n.value.locked || hu();
    }
    const i = K(() => f.settings.cardCollapsed.live);
    function o() {
      f.settings.cardCollapsed.live = !f.settings.cardCollapsed.live, ye();
    }
    const l = K(() => t.value.aiOn ? t.value.library ? "mix" : "fresh" : "library");
    function a(_) {
      t.value.library = _ !== "fresh", t.value.aiOn = _ !== "library", ye();
    }
    const c = K(() => t.value.api === "main" ? "main" : t.value.presetId || "main"), d = K(() => f.settings.subApi.presets), A = /* @__PURE__ */ he(!1);
    async function p(_) {
      const S = _.target, T = S.value;
      if (T === "new") {
        const C = (await pi("给这个API起个名字：", `我的API ${d.value.length + 1}`))?.trim();
        if (C) {
          const I = { id: Math.random().toString(36).slice(2, 10), name: C, url: "", key: "", model: "" };
          f.settings.subApi.presets = [...d.value, I], t.value.api = "preset", t.value.presetId = I.id, A.value = !0, ye();
        }
        S.value = c.value;
        return;
      }
      T === "main" ? t.value.api = "main" : (t.value.api = "preset", t.value.presetId = T), A.value = !1, ye();
    }
    function z(_, S, T, C, I) {
      const F = I.target, L = Math.round(Number(F.value) / C) * C;
      t.value[_] = Number.isFinite(L) ? Math.max(S, Math.min(T, L)) : t.value[_], F.value = String(t.value[_]), ye();
    }
    const w = K(() => {
      const _ = t.value.freq;
      return l.value === "library" ? "每轮来源弹幕库" : l.value === "fresh" ? _ === 1 ? "每轮输出全新弹幕" : `每 ${_} 轮只输出 1 次弹幕` : _ === 1 ? "每轮输出混合弹幕" : `每 ${_} 轮输出 1 次混合弹幕；其余轮来源弹幕库`;
    });
    function x(_) {
      t.value.injectToAI = _, ye();
    }
    return (_, S) => (v(), k("div", Kb, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !i.value,
        onClick: o
      }, [
        S[8] || (S[8] = u("h4", null, "直播", -1)),
        s.value ? (v(), k("span", Yb, "直播中")) : j("", !0),
        u("span", {
          class: Q(["rlzc-collapse-arrow", { open: !i.value }])
        }, "▸", 2)
      ], 8, qb),
      i.value ? j("", !0) : (v(), k("div", Jb, [
        S[22] || (S[22] = u("p", { class: "rlzc-hint" }, "开播后有观众弹幕和打赏，打赏计入积分。画面在状态栏的直播页。", -1)),
        u("div", {
          class: Q(["rlzc-onair", { on: n.value.on, locked: n.value.locked }])
        }, [
          S[10] || (S[10] = u("span", {
            class: "rlzc-onair-dot",
            "aria-hidden": "true"
          }, null, -1)),
          u("div", Zb, [
            u("strong", null, $(n.value.on ? "直播中" : "未开播"), 1),
            u("small", null, $(n.value.note), 1)
          ]),
          n.value.locked ? (v(), k("span", Xb, [...S[9] || (S[9] = [
            u("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "aria-hidden": "true"
            }, [
              u("rect", {
                x: "3",
                y: "7",
                width: "10",
                height: "7",
                rx: "1.5"
              }),
              u("path", { d: "M5.5 7V5a2.5 2.5 0 0 1 5 0v2" })
            ], -1),
            Me(" 已锁定 ", -1)
          ])])) : (v(), k("button", {
            key: 1,
            type: "button",
            class: Q(["rlzc-onair-btn", { stop: n.value.on }]),
            onClick: r
          }, $(n.value.on ? "下播" : "开播"), 3))
        ], 2),
        u("div", Qb, [
          u("div", e1, [
            S[11] || (S[11] = u("span", { class: "rlzc-live-key" }, "弹幕", -1)),
            u("div", t1, [
              u("button", {
                class: Q({ on: l.value === "library" }),
                onClick: S[0] || (S[0] = (T) => a("library"))
              }, "弹幕库", 2),
              u("button", {
                class: Q({ on: l.value === "mix" }),
                onClick: S[1] || (S[1] = (T) => a("mix"))
              }, "混合", 2),
              u("button", {
                class: Q({ on: l.value === "fresh" }),
                onClick: S[2] || (S[2] = (T) => a("fresh"))
              }, "全新", 2)
            ])
          ]),
          u("div", n1, [
            S[12] || (S[12] = u("span", { class: "rlzc-live-key" }, "每轮", -1)),
            u("div", s1, [
              u("input", {
                type: "range",
                min: "5",
                max: "25",
                step: "1",
                class: "rlzc-range",
                "aria-label": "每轮弹幕数",
                value: t.value.total,
                onInput: S[3] || (S[3] = (T) => z("total", 5, 25, 1, T))
              }, null, 40, r1),
              u("span", i1, $(t.value.total) + " 条", 1)
            ])
          ]),
          l.value === "mix" ? (v(), k("div", o1, [
            S[13] || (S[13] = u("span", { class: "rlzc-live-key" }, "新弹幕占", -1)),
            u("div", l1, [
              u("input", {
                type: "range",
                min: "10",
                max: "100",
                step: "10",
                class: "rlzc-range",
                "aria-label": "新弹幕占比",
                value: t.value.ratio,
                onInput: S[4] || (S[4] = (T) => z("ratio", 10, 100, 10, T))
              }, null, 40, a1),
              u("span", c1, $(t.value.ratio) + "%", 1)
            ])
          ])) : j("", !0),
          l.value !== "library" ? (v(), k(X, { key: 1 }, [
            u("div", u1, [
              S[16] || (S[16] = u("span", { class: "rlzc-live-key" }, "接口", -1)),
              u("div", d1, [
                u("select", {
                  class: "rlzc-input",
                  "aria-label": "新弹幕接口",
                  value: c.value,
                  onChange: p
                }, [
                  S[14] || (S[14] = u("option", { value: "main" }, "跟随主API", -1)),
                  (v(!0), k(X, null, ce(d.value, (T) => (v(), k("option", {
                    key: T.id,
                    value: T.id
                  }, $(T.name), 9, f1))), 128)),
                  S[15] || (S[15] = u("option", { value: "new" }, "＋ 新建接口", -1))
                ], 40, A1),
                t.value.api === "preset" && t.value.presetId ? (v(), k("button", {
                  key: 0,
                  class: "rlzc-btn ghost small",
                  type: "button",
                  onClick: S[5] || (S[5] = (T) => A.value = !A.value)
                }, $(A.value ? "收起" : "编辑"), 1)) : j("", !0)
              ])
            ]),
            A.value && t.value.api === "preset" && t.value.presetId ? (v(), Le(bu, {
              key: 0,
              owner: t.value,
              bare: ""
            }, null, 8, ["owner"])) : j("", !0),
            u("div", p1, [
              S[19] || (S[19] = u("span", { class: "rlzc-live-key" }, "生成频率", -1)),
              u("div", h1, [
                S[17] || (S[17] = u("span", { class: "rlzc-unit" }, "每", -1)),
                u("input", {
                  type: "number",
                  min: "1",
                  max: "10",
                  class: "rlzc-input rlzc-input-num",
                  "aria-label": "生成频率",
                  value: t.value.freq,
                  onChange: S[6] || (S[6] = (T) => z("freq", 1, 10, 1, T))
                }, null, 40, m1),
                S[18] || (S[18] = u("span", { class: "rlzc-unit" }, "轮", -1))
              ])
            ])
          ], 64)) : j("", !0),
          u("p", g1, $(w.value), 1),
          u("div", x1, [
            S[21] || (S[21] = u("span", { class: "rlzc-live-key" }, "弹幕传给AI", -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.injectToAI ? "true" : "false",
              class: Q(["rlzc-toggle", { on: t.value.injectToAI }]),
              onClick: S[7] || (S[7] = (T) => x(!t.value.injectToAI))
            }, [...S[20] || (S[20] = [
              u("span", null, null, -1)
            ])], 10, v1)
          ])
        ])
      ]))
    ]));
  }
}), b1 = { class: "rlzc-settings" }, k1 = { class: "rlzc-card" }, w1 = ["value"], z1 = { class: "rlzc-card rlzc-collapsible rlzc-format-card" }, _1 = ["aria-expanded"], $1 = {
  key: 0,
  class: "rlzc-collapse-status"
}, S1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, C1 = { class: "rlzc-option-row" }, E1 = ["aria-checked"], M1 = { class: "rlzc-card rlzc-collapsible" }, T1 = ["aria-expanded"], I1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, N1 = { class: "rlzc-ledger-status" }, P1 = { class: "rlzc-row" }, O1 = ["placeholder"], D1 = ["disabled"], L1 = { class: "rlzc-row" }, R1 = ["disabled"], F1 = { class: "rlzc-row" }, j1 = { class: "rlzc-seg-group" }, B1 = ["aria-pressed", "onClick"], U1 = ["disabled"], V1 = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, H1 = { class: "rlzc-card rlzc-collapsible" }, W1 = ["aria-expanded"], G1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, K1 = { class: "rlzc-depth" }, q1 = { class: "rlzc-field rlzc-field-num" }, Y1 = ["value"], J1 = { class: "rlzc-field rlzc-field-num" }, Z1 = ["value"], X1 = { class: "rlzc-field rlzc-field-num" }, Q1 = ["value"], ek = { class: "rlzc-field rlzc-field-num" }, tk = ["value"], nk = { class: "rlzc-field rlzc-field-num" }, sk = ["value"], rk = { class: "rlzc-field rlzc-field-num" }, ik = ["value"], ok = { class: "rlzc-card rlzc-collapsible" }, lk = ["aria-expanded"], ak = {
  key: 0,
  class: "rlzc-collapse-body"
}, ck = ["value", "onChange"], uk = { class: "rlzc-card" }, dk = {
  key: 0,
  class: "rlzc-list"
}, Ak = ["onClick"], fk = {
  key: 1,
  class: "rlzc-hint"
}, pk = {
  key: 2,
  class: "rlzc-errors"
}, hk = { class: "rlzc-card" }, mk = { class: "rlzc-check" }, gk = ["checked"], xk = { class: "rlzc-check" }, vk = ["checked"], yk = /* @__PURE__ */ Re({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ he([]), n = /* @__PURE__ */ he(null), s = /* @__PURE__ */ he(null), r = /* @__PURE__ */ he(null), i = /* @__PURE__ */ he(""), o = /* @__PURE__ */ he(""), l = /* @__PURE__ */ he(""), a = ["D", "C", "B", "A", "S"], c = K(() => Ct(Z())), d = K(() => hn(c.value.value, f.ledger)), A = K(() => (f.tick, it(Z()))), p = K(() => St[A.value]), z = K(() => ms(c.value.value, f.ledger, p.value));
    function w() {
      s.value !== null && (Zx(s.value), s.value = null);
    }
    function x() {
      r.value !== null && (Jx(r.value, i.value || "手动"), r.value = null, i.value = "");
    }
    function _() {
      !o.value && !l.value || (Xx(o.value || void 0, l.value || void 0), o.value = "", l.value = "", we("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function S(H, m) {
      const g = Math.max(0, Math.min(1e4, Math.floor(Number(m.target.value) || 0)));
      f.settings.depths[H] = g, ye();
    }
    async function T(H) {
      const m = H.target, g = m.files?.[0];
      m.value = "", g && (t.value = Gx(await g.text()), t.value.length || we("success", `已导入副本包：${g.name}`));
    }
    async function C(H, m) {
      await Gt(`确定删除自定义副本包《${m}》吗？`) && Kx(H);
    }
    function I(H, m) {
      const g = Math.floor(Number(m.target.value));
      !Number.isFinite(g) || g < 1 || (f.settings.genericCaps = { ...f.settings.genericCaps, [H]: g }, ye());
    }
    function F(H) {
      wv(H.target.value);
    }
    function L(H) {
      f.settings.statusBarFix = H, ye();
    }
    function B(H, m) {
      f.settings[H] = m.target.checked, ye();
    }
    function re(H) {
      f.settings.cardCollapsed[H] = !f.settings.cardCollapsed[H], ye();
    }
    return (H, m) => (v(), k(X, null, [
      u("div", b1, [
        u("div", k1, [
          m[19] || (m[19] = u("h4", null, "副本信息显示位置", -1)),
          u("select", {
            class: "rlzc-input",
            value: E(f).settings.panelDisplay,
            onChange: F
          }, [...m[18] || (m[18] = [
            u("option", { value: "panel" }, "扩展面板（默认）", -1),
            u("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, w1),
          m[20] || (m[20] = u("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        u("div", z1, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(f).settings.cardCollapsed.statusBar,
            onClick: m[0] || (m[0] = (g) => re("statusBar"))
          }, [
            m[21] || (m[21] = u("h4", null, "状态栏格式", -1)),
            E(f).settings.cardCollapsed.statusBar ? (v(), k("span", $1, $(E(f).settings.statusBarFix ? "自动修正" : "只提醒"), 1)) : j("", !0),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !E(f).settings.cardCollapsed.statusBar }])
            }, "▸", 2)
          ], 8, _1),
          E(f).settings.cardCollapsed.statusBar ? j("", !0) : (v(), k("div", S1, [
            m[24] || (m[24] = u("p", { class: "rlzc-hint" }, "AI 回复的状态栏缺失或标签写错时，下一轮提醒 AI 按原样输出。", -1)),
            u("div", C1, [
              m[23] || (m[23] = u("div", { class: "rlzc-option-label" }, [
                u("span", null, "自动修正状态栏标签"),
                u("small", null, "只改标签名，不动内容")
              ], -1)),
              u("button", {
                role: "switch",
                type: "button",
                class: Q(["rlzc-toggle rlzc-format-fix", { on: E(f).settings.statusBarFix }]),
                "aria-checked": E(f).settings.statusBarFix ? "true" : "false",
                onClick: m[1] || (m[1] = (g) => L(!E(f).settings.statusBarFix))
              }, [...m[22] || (m[22] = [
                u("span", null, null, -1)
              ])], 10, E1)
            ])
          ]))
        ]),
        u("div", M1, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(f).settings.cardCollapsed.accountFix,
            onClick: m[2] || (m[2] = (g) => re("accountFix"))
          }, [
            m[25] || (m[25] = u("h4", null, "账户校正", -1)),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !E(f).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, T1),
          E(f).settings.cardCollapsed.accountFix ? j("", !0) : (v(), k("div", I1, [
            m[27] || (m[27] = u("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            u("div", N1, [
              u("span", null, [
                m[26] || (m[26] = Me("当前余额：", -1)),
                u("b", null, $(d.value), 1)
              ]),
              u("span", null, $(z.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            m[28] || (m[28] = u("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            u("div", P1, [
              mt(u("input", {
                "onUpdate:modelValue": m[3] || (m[3] = (g) => s.value = g),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${c.value.value}`
              }, null, 8, O1), [
                [
                  Ot,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: w
              }, "保存", 8, D1)
            ]),
            m[29] || (m[29] = u("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            u("div", L1, [
              mt(u("input", {
                "onUpdate:modelValue": m[4] || (m[4] = (g) => r.value = g),
                type: "number",
                class: "rlzc-input",
                placeholder: "金额（正/负）"
              }, null, 512), [
                [
                  Ot,
                  r.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              mt(u("input", {
                "onUpdate:modelValue": m[5] || (m[5] = (g) => i.value = g),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [Ot, i.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: r.value === null,
                onClick: x
              }, "追加", 8, R1)
            ]),
            m[30] || (m[30] = u("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            m[31] || (m[31] = u("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            u("div", F1, [
              u("div", j1, [
                (v(), k(X, null, ce(a, (g) => u("button", {
                  key: g,
                  type: "button",
                  class: Q(["rlzc-seg", { active: o.value === g }]),
                  "aria-pressed": o.value === g ? "true" : "false",
                  onClick: (y) => o.value = o.value === g ? "" : g
                }, $(g), 11, B1)), 64))
              ]),
              mt(u("input", {
                "onUpdate:modelValue": m[6] || (m[6] = (g) => l.value = g),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [Ot, l.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: !o.value && !l.value,
                onClick: _
              }, "校正", 8, U1)
            ]),
            E(f).ledger.length === 0 && c.value.source === "默认值" ? (v(), k("p", V1, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : j("", !0)
          ]))
        ]),
        u("div", H1, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(f).settings.cardCollapsed.depths,
            onClick: m[7] || (m[7] = (g) => re("depths"))
          }, [
            m[32] || (m[32] = u("h4", null, "注入深度", -1)),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !E(f).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, W1),
          E(f).settings.cardCollapsed.depths ? j("", !0) : (v(), k("div", G1, [
            m[39] || (m[39] = u("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            u("div", K1, [
              u("label", q1, [
                m[33] || (m[33] = u("span", null, [
                  Me("副本暗号"),
                  u("small", null, "触发世界书的副本条目")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: E(f).settings.depths.token,
                  onChange: m[8] || (m[8] = (g) => S("token", g))
                }, null, 40, Y1)
              ]),
              u("label", J1, [
                m[34] || (m[34] = u("span", null, [
                  Me("副本进度"),
                  u("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: E(f).settings.depths.progress,
                  onChange: m[9] || (m[9] = (g) => S("progress", g))
                }, null, 40, Z1)
              ]),
              u("label", X1, [
                m[35] || (m[35] = u("span", null, [
                  Me("本轮指令"),
                  u("small", null, "本轮事件与时限写法")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: E(f).settings.depths.turn,
                  onChange: m[10] || (m[10] = (g) => S("turn", g))
                }, null, 40, Q1)
              ]),
              u("label", ek, [
                m[36] || (m[36] = u("span", null, [
                  Me("账户"),
                  u("small", null, "积分余额与清算状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: E(f).settings.depths.ledger,
                  onChange: m[11] || (m[11] = (g) => S("ledger", g))
                }, null, 40, tk)
              ]),
              u("label", nk, [
                m[37] || (m[37] = u("span", null, [
                  Me("直播"),
                  u("small", null, "在看人数与最近弹幕")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: E(f).settings.depths.live,
                  onChange: m[12] || (m[12] = (g) => S("live", g))
                }, null, 40, sk)
              ]),
              u("label", rk, [
                m[38] || (m[38] = u("span", null, [
                  Me("格式提醒"),
                  u("small", null, "状态栏格式出错后的提醒")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: E(f).settings.depths.format,
                  onChange: m[13] || (m[13] = (g) => S("format", g))
                }, null, 40, ik)
              ])
            ])
          ]))
        ]),
        Ee(Gb),
        Ee(y1),
        u("div", ok, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(f).settings.cardCollapsed.genericCaps,
            onClick: m[14] || (m[14] = (g) => re("genericCaps"))
          }, [
            m[40] || (m[40] = u("h4", null, "通用副本默认轮数上限", -1)),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !E(f).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, lk),
          E(f).settings.cardCollapsed.genericCaps ? j("", !0) : (v(), k("div", ak, [
            m[41] || (m[41] = u("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (v(), k(X, null, ce(a, (g) => u("label", {
              key: g,
              class: "rlzc-field rlzc-field-num"
            }, [
              u("span", null, $(g) + " 级", 1),
              u("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: E(f).settings.genericCaps[g],
                onChange: (y) => I(g, y)
              }, null, 40, ck)
            ])), 64))
          ]))
        ]),
        u("div", uk, [
          m[42] || (m[42] = u("h4", null, "自定义副本包", -1)),
          E(f).settings.customPacks.length ? (v(), k("ul", dk, [
            (v(!0), k(X, null, ce(E(f).settings.customPacks, (g) => (v(), k("li", {
              key: g.id
            }, [
              u("span", null, [
                Me($(g.level) + "｜" + $(g.name) + " ", 1),
                u("small", null, "v" + $(g.version), 1)
              ]),
              u("button", {
                class: "rlzc-btn ghost small",
                onClick: (y) => C(g.id, g.name)
              }, "删除", 8, Ak)
            ]))), 128))
          ])) : (v(), k("p", fk, "还没有导入自定义副本包。")),
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
            onClick: m[15] || (m[15] = (g) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (v(), k("ul", pk, [
            (v(!0), k(X, null, ce(t.value, (g, y) => (v(), k("li", { key: y }, $(g), 1))), 128))
          ])) : j("", !0)
        ]),
        u("div", hk, [
          m[45] || (m[45] = u("h4", null, "其他", -1)),
          u("label", mk, [
            u("input", {
              type: "checkbox",
              checked: E(f).settings.showBall,
              onChange: m[16] || (m[16] = (g) => B("showBall", g))
            }, null, 40, gk),
            m[43] || (m[43] = Me("显示悬浮球", -1))
          ]),
          u("label", xk, [
            u("input", {
              type: "checkbox",
              checked: E(f).settings.debug,
              onChange: m[17] || (m[17] = (g) => B("debug", g))
            }, null, 40, vk),
            m[44] || (m[44] = Me("调试模式", -1))
          ])
        ])
      ]),
      m[46] || (m[46] = u("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), bk = { class: "rlzc-debug" }, kk = {
  key: 0,
  class: "rlzc-note"
}, wk = {
  key: 0,
  class: "rlzc-note"
}, zk = {
  key: 1,
  class: "rlzc-note"
}, _k = {
  key: 2,
  class: "rlzc-card"
}, $k = { class: "rlzc-row" }, Sk = ["disabled"], Ck = ["value"], Ek = ["disabled"], Mk = { class: "rlzc-row" }, Tk = ["disabled"], Ik = ["disabled"], Nk = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, Pk = ["aria-expanded"], Ok = {
  key: 0,
  class: "rlzc-collapse-body"
}, Dk = ["onUpdate:modelValue", "disabled"], Lk = ["disabled"], Rk = { class: "rlzc-card rlzc-collapsible" }, Fk = ["aria-expanded"], jk = {
  key: 0,
  class: "rlzc-collapse-status"
}, Bk = {
  key: 0,
  class: "rlzc-collapse-body"
}, Uk = {
  key: 0,
  class: "rlzc-hint"
}, Vk = { class: "rlzc-hint" }, Hk = { class: "rlzc-list rlzc-warns" }, Wk = { class: "rlzc-card rlzc-collapsible" }, Gk = ["aria-expanded"], Kk = {
  key: 0,
  class: "rlzc-collapse-status"
}, qk = {
  key: 0,
  class: "rlzc-collapse-body"
}, Yk = {
  key: 0,
  class: "rlzc-list"
}, Jk = ["disabled", "onClick"], Zk = {
  key: 1,
  class: "rlzc-hint"
}, Xk = {
  key: 4,
  class: "rlzc-card"
}, Qk = { class: "rlzc-pre" }, ew = {
  key: 0,
  class: "rlzc-pre"
}, tw = {
  key: 5,
  class: "rlzc-card"
}, nw = { class: "rlzc-table" }, sw = { class: "rlzc-hint" }, rw = {
  key: 0,
  class: "rlzc-hint"
}, iw = { class: "rlzc-hint" }, ow = {
  key: 1,
  class: "rlzc-table"
}, lw = { class: "rlzc-card rlzc-collapsible" }, aw = ["aria-expanded"], cw = {
  key: 0,
  class: "rlzc-collapse-body"
}, uw = { class: "rlzc-pre" }, dw = { class: "rlzc-card" }, Aw = { class: "rlzc-pre" }, fw = { class: "rlzc-card" }, pw = { class: "rlzc-pre" }, hw = { class: "rlzc-card" }, mw = { class: "rlzc-table" }, gw = {
  key: 0,
  class: "rlzc-warn-text"
}, xw = { key: 1 }, vw = ["disabled"], yw = { class: "rlzc-card rlzc-collapsible rlzc-format-debug" }, bw = ["aria-expanded"], kw = {
  key: 0,
  class: "rlzc-collapse-status"
}, ww = {
  key: 0,
  class: "rlzc-collapse-body"
}, zw = {
  key: 0,
  class: "rlzc-hint"
}, _w = {
  key: 1,
  class: "rlzc-table"
}, $w = {
  key: 2,
  class: "rlzc-card"
}, Sw = { class: "rlzc-table" }, Cw = /* @__PURE__ */ Re({
  __name: "DebugTab",
  setup(e) {
    const t = K(() => f.settings.debug), n = /* @__PURE__ */ he(""), s = /* @__PURE__ */ he(null), r = /* @__PURE__ */ dr({});
    fr(
      () => [f.tick, f.pack?.id],
      () => {
        for (const g of Object.keys(r)) delete r[g];
        const m = lu() ?? {};
        for (const g of f.pack?.roles ?? []) r[g] = m[g] ?? "";
      },
      { immediate: !0 }
    );
    const i = K(() => {
      f.tick;
      const m = Z(), g = [], y = f.session?.entryIndex ?? 0;
      for (let D = y; D < m.length; D++) {
        const ie = m[D]?.extra?.rlzc;
        ie && g.push({ index: D, snap: ie });
      }
      return g.reverse().slice(0, 60);
    }), o = K(() => {
      const m = new Set((f.audit?.warnings ?? []).filter((D) => D.kind === "limit" || D.kind === "eventMissed").map((D) => D.index)), g = Z(), y = f.session?.entryIndex ?? 0;
      for (let D = y; D < g.length; D++)
        g[D]?.extra?.rlzc?.ledgerMismatch && m.add(D);
      for (const D of l.value) m.add(D.index);
      return m;
    }), l = K(() => (f.tick, tm(Z()))), a = K(() => l.value.filter((m) => !m.fixed).length), c = K(() => {
      if (f.tick, !f.session || !f.pack || !f.progress) return null;
      const m = Z(), g = wr(m, f.progress.entryIndex);
      let y = null;
      for (let D = m.length - 1; D >= f.progress.entryIndex; D--) {
        const ie = m[D]?.extra?.rlzc?.sub;
        if (ie) {
          y = ie;
          break;
        }
      }
      return {
        text: g ? zc(f.pack, g.state) : "",
        state: g?.state ?? null,
        record: y
      };
    }), d = K(() => {
      f.tick;
      const m = Z(), g = [];
      for (let y = m.length - 1; y >= 0 && g.length < 60; y--) {
        const D = Kt(m[y]);
        D && g.push({ index: y, rec: D });
      }
      return g;
    });
    function A(m) {
      const g = m.feed.filter((y) => y.t === "tip").map((y) => `${y.name} ${y.amount}→${y.net}`);
      return m.revoke && g.push(`撤回 −${m.revoke}`), g.join("；");
    }
    function p(m) {
      const g = m.ai;
      return g ? g.pending ? "生成中…" : g.ok ? `${g.count}条（${g.ms}ms）` : `失败：${g.error ?? ""}` : "";
    }
    const z = { done: "✓", missed: "✗", void: "–" };
    function w(m) {
      if (!m.sub && !m.skippedEvents?.length) return "";
      const g = [];
      m.sub?.skipped && g.push(`未更新（${m.sub.error ?? ""}）`);
      for (const y of m.sub?.events ?? []) g.push(`${y.id}${z[y.status]}`);
      for (const y of m.skippedEvents ?? []) g.push(`跳过${y.id}`);
      return m.sub && !m.sub.skipped && !g.length && g.push("已整理"), g.join(" ");
    }
    const x = K(() => {
      if (f.tick, !f.session) return null;
      const m = He().books[f.session.id];
      return m ? { book: m, rounds: Uv() } : null;
    }), _ = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" };
    function S(m, g) {
      return m ? m.kind === "refund" ? `全退（#${m.index}）` : m.kind === "lost" ? `全废（#${m.index}）` : `${g[m.option] ?? m.option}（#${m.index}）` : "待开奖";
    }
    function T(m) {
      return m ? m.status === "pending" ? "出题中…" : m.status === "ok" ? `已出 ${m.count} 题（${m.ms}ms）` : m.status === "late" ? `晚于封盘到达，已丢弃（${m.ms}ms）` : `失败：${m.error ?? ""}` : "事件检测关闭，未出题";
    }
    const C = { ok: "已检测", miss: "没检测", pending: "检测中" }, I = K(() => {
      const m = f.progress;
      if (!m) return null;
      const { perMessage: g, phase: y, next: D, ...ie } = m;
      return {
        phase: y.id + " " + y.name,
        ...ie,
        next: D ? { round: D.round, skipFrom: D.skipFrom, events: D.events.map((le) => le.id) } : null,
        messages: Object.keys(g).length
      };
    });
    function F() {
      n.value && Av(n.value);
    }
    function L() {
      s.value !== null && s.value >= 0 && fv(s.value);
    }
    function B() {
      pv({ ...r });
    }
    const re = (m) => JSON.stringify(m, null, 2);
    function H(m) {
      f.settings.cardCollapsed[m] = !f.settings.cardCollapsed[m], ye();
    }
    return (m, g) => (v(), k("div", bk, [
      E(f).session ? (v(), k(X, { key: 1 }, [
        t.value ? j("", !0) : (v(), k("p", wk, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        E(f).pack && E(f).session.packVersion !== E(f).pack.version ? (v(), k("p", zk, " 入场时副本包版本为 " + $(E(f).session.packVersion) + "，当前为 " + $(E(f).pack.version) + "。 ", 1)) : j("", !0),
        E(f).pack?.phases.length ? (v(), k("div", _k, [
          g[9] || (g[9] = u("h4", null, "手动修正", -1)),
          u("div", $k, [
            mt(u("select", {
              "onUpdate:modelValue": g[0] || (g[0] = (y) => n.value = y),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              g[8] || (g[8] = u("option", { value: "" }, "切换到阶段…", -1)),
              (v(!0), k(X, null, ce(E(f).pack.phases, (y) => (v(), k("option", {
                key: y.id,
                value: y.id
              }, $(y.name), 9, Ck))), 128))
            ], 8, Sk), [
              [Ya, n.value]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: F
            }, "切换", 8, Ek)
          ]),
          u("div", Mk, [
            mt(u("input", {
              "onUpdate:modelValue": g[1] || (g[1] = (y) => s.value = y),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, Tk), [
              [
                Ot,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: L
            }, "修正轮次", 8, Ik)
          ])
        ])) : j("", !0),
        E(f).pack?.roles?.length ? (v(), k("div", Nk, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(f).settings.cardCollapsed.rolesDebug,
            onClick: g[2] || (g[2] = (y) => H("rolesDebug"))
          }, [
            g[10] || (g[10] = u("h4", null, "角色登记", -1)),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !E(f).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, Pk),
          E(f).settings.cardCollapsed.rolesDebug ? j("", !0) : (v(), k("div", Ok, [
            (v(!0), k(X, null, ce(E(f).pack.roles, (y) => (v(), k("label", {
              key: y,
              class: "rlzc-field"
            }, [
              u("span", null, $(y), 1),
              mt(u("input", {
                "onUpdate:modelValue": (D) => r[y] = D,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, Dk), [
                [Ot, r[y]]
              ])
            ]))), 128)),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: B
            }, "保存登记", 8, Lk)
          ]))
        ])) : j("", !0),
        u("div", Rk, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(f).settings.cardCollapsed.auditDebug,
            onClick: g[3] || (g[3] = (y) => H("auditDebug"))
          }, [
            g[11] || (g[11] = u("h4", null, "<副本> 核对", -1)),
            E(f).settings.cardCollapsed.auditDebug ? (v(), k("span", jk, $(E(f).audit?.warnings.length ? "⚠️" : "无"), 1)) : j("", !0),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !E(f).settings.cardCollapsed.auditDebug }])
            }, "▸", 2)
          ], 8, Fk),
          E(f).settings.cardCollapsed.auditDebug ? j("", !0) : (v(), k("div", Bk, [
            E(f).audit?.warnings.length ? (v(), k(X, { key: 1 }, [
              u("p", Vk, "共 " + $(E(f).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
              u("ul", Hk, [
                (v(!0), k(X, null, ce(E(f).audit.warnings.slice(-30).reverse(), (y, D) => (v(), k("li", { key: D }, [
                  u("span", null, [
                    u("small", null, "#" + $(y.index) + "｜" + $(y.phase) + "第" + $(y.round) + "轮", 1),
                    g[12] || (g[12] = u("br", null, null, -1)),
                    Me("⚠️ " + $(y.text), 1)
                  ])
                ]))), 128))
              ])
            ], 64)) : (v(), k("p", Uk, "没有发现问题。"))
          ]))
        ]),
        u("div", Wk, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(f).settings.cardCollapsed.manualDebug,
            onClick: g[4] || (g[4] = (y) => H("manualDebug"))
          }, [
            g[13] || (g[13] = u("h4", null, "手动操作记录", -1)),
            E(f).settings.cardCollapsed.manualDebug && E(f).session.manual.length ? (v(), k("span", Kk, "×" + $(E(f).session.manual.length), 1)) : j("", !0),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !E(f).settings.cardCollapsed.manualDebug }])
            }, "▸", 2)
          ], 8, Gk),
          E(f).settings.cardCollapsed.manualDebug ? j("", !0) : (v(), k("div", qk, [
            E(f).session.manual.length ? (v(), k("ul", Yk, [
              (v(!0), k(X, null, ce(E(f).session.manual, (y, D) => (v(), k("li", { key: D }, [
                u("code", null, "#" + $(y.atIndex) + " " + $(y.kind) + " " + $("phase" in y ? y.phase : "") + $("round" in y ? y.round : "") + $("targetPhase" in y ? `${y.targetPhase}:${y.targetRound}` : ""), 1),
                u("button", {
                  class: "rlzc-btn ghost small",
                  disabled: !t.value,
                  onClick: (ie) => E(hv)(D)
                }, "撤销", 8, Jk)
              ]))), 128))
            ])) : (v(), k("p", Zk, "无"))
          ]))
        ]),
        c.value && (c.value.state || c.value.record) ? (v(), k("details", Xk, [
          g[14] || (g[14] = u("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          u("pre", Qk, $(c.value.text || "（尚无状态）"), 1),
          c.value.record ? (v(), k("pre", ew, $(re(c.value.record)), 1)) : j("", !0),
          g[15] || (g[15] = u("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : j("", !0),
        x.value ? (v(), k("details", tw, [
          g[21] || (g[21] = u("summary", null, "黑市：盘口赔率与检测判定", -1)),
          u("table", nw, [
            g[19] || (g[19] = u("thead", null, [
              u("tr", null, [
                u("th", null, "盘"),
                u("th", null, "题目"),
                u("th", null, "赔率"),
                u("th", null, "结果")
              ])
            ], -1)),
            u("tbody", null, [
              (v(!0), k(X, null, ce(x.value.book.markets, (y) => (v(), k("tr", {
                key: y.id
              }, [
                u("td", null, $(_[y.kind]) + " " + $(y.id), 1),
                u("td", null, [
                  Me($(y.q), 1),
                  y.judge ? (v(), k(X, { key: 0 }, [
                    g[16] || (g[16] = u("br", null, null, -1)),
                    u("small", null, $(y.judge), 1)
                  ], 64)) : j("", !0),
                  y.judgeNo ? (v(), k(X, { key: 1 }, [
                    g[17] || (g[17] = u("br", null, null, -1)),
                    u("small", null, "否：" + $(y.judgeNo), 1)
                  ], 64)) : j("", !0),
                  y.by ? (v(), k(X, { key: 2 }, [
                    g[18] || (g[18] = u("br", null, null, -1)),
                    u("small", null, "by " + $(y.by), 1)
                  ], 64)) : j("", !0)
                ]),
                u("td", null, $(y.options.map((D) => `${D.label}(${Math.round(D.p * 100)}%) ×${D.odds.toFixed(2)}`).join("　")), 1),
                u("td", null, $(S(E(f).market.results[y.id], Object.fromEntries(y.options.map((D) => [D.id, D.label])))), 1)
              ]))), 128))
            ])
          ]),
          u("p", sw, "庄家怪盘：" + $(T(x.value.book.freak)), 1),
          x.value.book.plan ? (v(), k("p", rw, "计划开 " + $(x.value.book.plan.total) + " 个盘，其中怪盘 " + $(x.value.book.plan.freak) + " 个；实开 " + $(x.value.book.markets.length) + " 个", 1)) : j("", !0),
          u("p", iw, "开盘 " + $(x.value.book.openedAt) + "　" + $(x.value.book.closedAt ? `封盘 ${x.value.book.closedAt}` : "未封盘") + $(x.value.book.frozen ? "　已定格" : ""), 1),
          x.value.rounds.length ? (v(), k("table", ow, [
            g[20] || (g[20] = u("thead", null, [
              u("tr", null, [
                u("th", null, "楼"),
                u("th", null, "检测"),
                u("th", null, "判定为真")
              ])
            ], -1)),
            u("tbody", null, [
              (v(!0), k(X, null, ce(x.value.rounds, (y) => (v(), k("tr", {
                key: y.index,
                class: Q({ "rlzc-row-warn": y.state === "miss" })
              }, [
                u("td", null, $(y.index), 1),
                u("td", null, $(C[y.state]), 1),
                u("td", null, $(Object.keys(y.hits).filter((D) => y.hits[D]).join(" ") || "—"), 1)
              ], 2))), 128))
            ])
          ])) : j("", !0)
        ])) : j("", !0),
        u("div", lw, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(f).settings.cardCollapsed.injectionDebug,
            onClick: g[5] || (g[5] = (y) => H("injectionDebug"))
          }, [
            g[22] || (g[22] = u("h4", null, "本次注入", -1)),
            u("span", {
              class: Q(["rlzc-collapse-arrow", { open: !E(f).settings.cardCollapsed.injectionDebug }])
            }, "▸", 2)
          ], 8, aw),
          E(f).settings.cardCollapsed.injectionDebug ? j("", !0) : (v(), k("div", cw, [
            u("pre", uw, $([E(f).lastInjection.token, E(f).lastInjection.progress, E(f).lastInjection.turn, E(f).lastInjection.format].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
          ]))
        ]),
        u("details", dw, [
          g[23] || (g[23] = u("summary", null, "重放结果", -1)),
          u("pre", Aw, $(re(I.value)), 1)
        ]),
        u("details", fw, [
          g[24] || (g[24] = u("summary", null, "会话原始数据", -1)),
          u("pre", pw, $(re(E(f).session)), 1)
        ]),
        u("details", hw, [
          g[26] || (g[26] = u("summary", null, "每楼快照（最近60条）", -1)),
          u("table", mw, [
            g[25] || (g[25] = u("thead", null, [
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
              (v(!0), k(X, null, ce(i.value, (y) => (v(), k("tr", {
                key: y.index,
                class: Q({ "rlzc-row-warn": o.value.has(y.index) })
              }, [
                u("td", null, $(y.index) + $(y.snap.entry ? "★" : ""), 1),
                u("td", null, $(y.snap.phase), 1),
                u("td", null, $(y.snap.round), 1),
                u("td", null, $(y.snap.clock ?? ""), 1),
                u("td", null, $(y.snap.limit?.text ?? ""), 1),
                u("td", null, $(y.snap.injected.join(" ")), 1),
                u("td", null, $(w(y.snap)), 1),
                y.snap.ledgerMismatch ? (v(), k("td", gw, "状态栏 " + $(y.snap.ledgerMismatch.status) + " / 账本 " + $(y.snap.ledgerMismatch.ledger), 1)) : (v(), k("td", xw))
              ], 2))), 128))
            ])
          ])
        ]),
        u("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: g[6] || (g[6] = //@ts-ignore
          (...y) => E(El) && E(El)(...y))
        }, "删除副本会话", 8, vw)
      ], 64)) : (v(), k("p", kk, "当前聊天没有副本会话。")),
      u("div", yw, [
        u("button", {
          class: "rlzc-collapse-head",
          "aria-expanded": !E(f).settings.cardCollapsed.formatDebug,
          onClick: g[7] || (g[7] = (y) => H("formatDebug"))
        }, [
          g[27] || (g[27] = u("h4", null, "状态栏格式", -1)),
          E(f).settings.cardCollapsed.formatDebug ? (v(), k("span", kw, $(a.value ? "⚠️" : l.value.length ? `已修正×${l.value.length}` : "无"), 1)) : j("", !0),
          u("span", {
            class: Q(["rlzc-collapse-arrow", { open: !E(f).settings.cardCollapsed.formatDebug }])
          }, "▸", 2)
        ], 8, bw),
        E(f).settings.cardCollapsed.formatDebug ? j("", !0) : (v(), k("div", ww, [
          l.value.length ? (v(), k("table", _w, [
            g[29] || (g[29] = u("thead", null, [
              u("tr", null, [
                u("th", null, "楼"),
                u("th", null, "问题"),
                u("th", null, "处理")
              ])
            ], -1)),
            u("tbody", null, [
              (v(!0), k(X, null, ce(l.value, (y) => (v(), k("tr", {
                key: y.index,
                class: "rlzc-row-warn"
              }, [
                u("td", null, $(y.index), 1),
                u("td", null, [
                  Me($(E(qh)[y.kind]), 1),
                  y.detail ? (v(), k(X, { key: 0 }, [
                    g[28] || (g[28] = u("br", null, null, -1)),
                    u("small", null, $(y.detail), 1)
                  ], 64)) : j("", !0)
                ]),
                u("td", null, $(y.fixed ? `已自动修正（原标签 ${y.from}）` : "未修正"), 1)
              ]))), 128))
            ])
          ])) : (v(), k("p", zw, "没有发现问题。"))
        ]))
      ]),
      d.value.length ? (v(), k("details", $w, [
        g[31] || (g[31] = u("summary", null, "直播（每楼，最近60条）", -1)),
        u("table", Sw, [
          g[30] || (g[30] = u("thead", null, [
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
            (v(!0), k(X, null, ce(d.value, (y) => (v(), k("tr", {
              key: y.index,
              class: Q({ "rlzc-row-warn": y.rec.ai && !y.rec.ai.ok && !y.rec.ai.pending })
            }, [
              u("td", null, $(y.index) + $(y.rec.scope === "corridor" ? "·回廊" : ""), 1),
              u("td", null, $(y.rec.hype) + $(y.rec.hurt ? "·伤" : ""), 1),
              u("td", null, $(y.rec.heat), 1),
              u("td", null, $(y.rec.viewers), 1),
              u("td", null, $(A(y.rec)), 1),
              u("td", null, $(p(y.rec)), 1)
            ], 2))), 128))
          ])
        ])
      ])) : j("", !0)
    ]));
  }
}), Ew = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, Mw = { class: "rlzc-head" }, Tw = { class: "rlzc-tabs" }, Iw = ["onClick"], Nw = { class: "rlzc-body" }, Pw = /* @__PURE__ */ Re({
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
        if (!await Gt("此页会显示副本真相，确定要打开吗？")) return;
        f.debugUnlocked = !0;
      }
      f.tab = s;
    }
    return (s, r) => (v(), k("div", {
      class: "rlzc-backdrop",
      onClick: r[1] || (r[1] = FA((i) => E(f).panelOpen = !1, ["self"]))
    }, [
      u("section", Ew, [
        u("header", Mw, [
          r[2] || (r[2] = u("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          u("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: r[0] || (r[0] = (i) => E(f).panelOpen = !1)
          }, "×")
        ]),
        u("nav", Tw, [
          (v(), k(X, null, ce(t, (i) => u("button", {
            key: i.id,
            class: Q({ on: E(f).tab === i.id }),
            onClick: (o) => n(i.id)
          }, $(i.label), 11, Iw)), 64))
        ]),
        u("div", Nw, [
          E(f).tab === "system" ? (v(), Le(uy, { key: 0 })) : E(f).tab === "ledger" ? (v(), Le(Cy, { key: 1 })) : E(f).tab === "market" ? (v(), Le(rb, { key: 2 })) : E(f).tab === "settings" ? (v(), Le(yk, { key: 3 })) : E(f).tab === "debug" && E(f).debugUnlocked ? (v(), Le(Cw, { key: 4 })) : j("", !0)
        ])
      ])
    ]));
  }
}), Ow = /* @__PURE__ */ Re({
  __name: "App",
  setup(e) {
    return (t, n) => (v(), k(X, null, [
      E(f).settings.showBall ? (v(), Le(l0, { key: 0 })) : j("", !0),
      E(f).panelOpen ? (v(), Le(Pw, { key: 1 })) : j("", !0),
      Ee(e0)
    ], 64));
  }
}), Dw = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);--ok: #4caf72;--bad: #c9534f;font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:5000;width:48px;height:48px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--muted);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball.is-active{color:var(--accent);border-color:var(--accent)}.rlzc-ball.has-ring{border-color:transparent}.rlzc-ball.is-warn{color:var(--bad)}.rlzc-ball-inf{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;pointer-events:none}.rlzc-ball-ring{position:absolute;inset:-1px;width:48px;height:48px;transform:rotate(-90deg);pointer-events:none}.rlzc-ball-ring circle{fill:none;stroke-width:3}.rlzc-ball-ring-base{stroke:var(--line)}.rlzc-ball-ring-bar{stroke:var(--accent);stroke-linecap:round;transition:stroke-dasharray .3s ease}.rlzc-ball.is-warn .rlzc-ball-ring-bar{stroke:var(--bad)}@media(prefers-reduced-motion:reduce){.rlzc-ball-ring-bar{transition:none}}.rlzc-ball-live{position:absolute;top:1px;left:1px;width:12px;height:12px;border-radius:50%;background:var(--bad);border:2px solid var(--solid);pointer-events:none}.rlzc-ball-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--accent);color:var(--bg);font-size:11px;font-weight:700;line-height:18px;text-align:center;pointer-events:none}.rlzc-entry-card{position:fixed;z-index:9000;top:calc(var(--topBarBlockSize, 40px) + 12px);right:12px;width:300px;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:12px;box-shadow:0 6px 24px #0000004d;padding:10px 12px 4px 14px}@media(max-width:323.98px){.rlzc-entry-card{left:12px;width:auto}}@media(min-width:800px){.rlzc-entry-card.beside-panel{right:476px}}.rlzc-entry-close{position:absolute;top:0;right:0;width:44px;height:44px;display:grid;place-items:center;background:none;border:0;color:var(--muted);font:inherit;font-size:14px;cursor:pointer;padding:0}.rlzc-entry-close:hover{color:var(--fg)}.rlzc-pending{position:relative;padding:10px 12px 4px 14px}.rlzc-entry-kicker{display:flex;align-items:center;gap:5px;font-size:12px;color:var(--muted);padding-right:36px}.rlzc-entry-inf{width:16px;height:16px;fill:none;stroke:var(--accent);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}.rlzc-entry-title{display:flex;align-items:center;gap:8px;margin:6px 0 2px;padding-right:30px}.rlzc-entry-level{flex:0 0 auto;display:inline-grid;place-items:center;min-width:24px;height:24px;padding:0 4px;border-radius:6px;border:1px solid var(--accent);color:var(--accent);font-size:13px;font-weight:800;line-height:1}.rlzc-entry-name{font-size:16px;font-weight:700;min-width:0;overflow-wrap:anywhere}.rlzc-entry-note{font-size:12px;color:var(--muted);margin-top:2px}.rlzc-entry-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:10px;padding-top:2px;border-top:1px solid var(--line)}.rlzc-entry-live{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0;margin-left:-2px;background:none;border:0;color:var(--fg);font:inherit;font-size:13px;cursor:pointer}.rlzc-entry-live .rlzc-toggle{display:inline-block;width:44px}.rlzc-entry-live .rlzc-toggle:after{content:none}.rlzc-entry-live:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:6px}.rlzc-toggle.danger.on{background:color-mix(in srgb,var(--bad) 75%,transparent);border-color:var(--bad)}.rlzc-entry-live.on{color:var(--bad)}.rlzc-entry-actions{display:flex;gap:6px}.rlzc-entry-actions .rlzc-btn{min-height:44px;min-width:60px}.rlzc-entry-actions .rlzc-entry-go{background:var(--accent);border-color:var(--accent);font-weight:700;color:var(--bg);color:rgb(from var(--bg) r g b)}.rlzc-entry-fade-enter-active,.rlzc-entry-fade-leave-active{transition:opacity .16s ease,transform .16s ease}.rlzc-entry-fade-enter-from,.rlzc-entry-fade-leave-to{opacity:0;transform:translateY(-4px)}@media(prefers-reduced-motion:reduce){.rlzc-entry-fade-enter-active,.rlzc-entry-fade-leave-active{transition:none}.rlzc-entry-fade-enter-from,.rlzc-entry-fade-leave-to{transform:none}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:5001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-field.rlzc-field-num>span{flex:1 1 auto;min-width:0}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-check-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px}.rlzc-check-btns .rlzc-btn{min-height:44px;width:100%}.rlzc-check-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}.rlzc-check-list li{display:flex;align-items:baseline;gap:10px;font-size:12px;line-height:1.45}.rlzc-check-list li[data-kind=on]{color:#4caf72}.rlzc-check-list li[data-kind=warn]{color:#c9833a}.rlzc-check-text{flex:1;min-width:0;overflow-wrap:anywhere}.rlzc-check-time{flex:none;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px;flex:0 0 auto}.rlzc-input.rlzc-input-num{flex:0 0 auto;width:calc(4ch + 20px);margin-left:auto;text-align:right;font-variant-numeric:tabular-nums;-moz-appearance:textfield;appearance:textfield}.rlzc-input-num::-webkit-inner-spin-button,.rlzc-input-num::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.rlzc-seg.active{background:var(--accent);border-color:var(--accent);font-weight:700;color:var(--bg);color:rgb(from var(--bg) r g b)}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-toggle:after{content:"";position:absolute;inset:-10px 0}.rlzc-segsrc button:disabled{opacity:.4;cursor:not-allowed}.rlzc-segsrc button:disabled:hover{background:none;color:var(--muted)}.rlzc-live-card .rlzc-input-num{min-height:44px}.rlzc-onair{display:flex;align-items:center;gap:12px;margin:10px 0 4px;padding:10px 10px 10px 14px;border:1px solid var(--line);border-radius:10px;background:var(--soft)}.rlzc-onair.on{border-color:color-mix(in srgb,var(--bad) 45%,transparent);background:color-mix(in srgb,var(--bad) 8%,transparent)}.rlzc-onair-dot{flex:none;width:10px;height:10px;border-radius:50%;background:color-mix(in srgb,var(--muted) 55%,transparent)}.rlzc-onair.on .rlzc-onair-dot{background:var(--bad);box-shadow:0 0 0 4px color-mix(in srgb,var(--bad) 22%,transparent);animation:rlzc-onair-pulse 1.8s ease-in-out infinite}@keyframes rlzc-onair-pulse{50%{box-shadow:0 0 0 7px color-mix(in srgb,var(--bad) 8%,transparent)}}@media(prefers-reduced-motion:reduce){.rlzc-onair.on .rlzc-onair-dot{animation:none}}.rlzc-onair-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-onair-text strong{font-size:14px;font-weight:600;color:var(--fg)}.rlzc-onair.on .rlzc-onair-text strong{color:var(--bad)}.rlzc-onair-text small{font-size:12px;color:var(--muted);overflow-wrap:anywhere}.rlzc-onair-btn{flex:none;min-width:76px;min-height:44px;padding:0 16px;border-radius:22px;font:inherit;font-weight:600;cursor:pointer;border:1px solid var(--bad);background:var(--bad);color:#fff}.rlzc-onair-btn.stop{background:none;color:var(--bad)}.rlzc-onair-btn:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-onair-lock{flex:none;display:inline-flex;align-items:center;gap:5px;min-height:44px;padding:0 12px;font-size:12px;color:var(--muted);border:1px dashed var(--line);border-radius:22px}.rlzc-option-row-stack{flex-direction:column;align-items:stretch;gap:0}.rlzc-option-row-stack .rlzc-segsrc{margin:6px 0 2px}.rlzc-option-row-stack .rlzc-hint{margin:2px 0 0}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-right{flex:0 0 auto;display:flex;flex-direction:column;align-items:flex-end;gap:2px}.rlzc-ledger-item-after{font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-status{flex:0 0 auto;font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-collapse-head .rlzc-dot{font-size:12px}.rlzc-market-tabs button{flex:1 1 0;min-height:44px}.rlzc-mk-status{font-size:14px}.rlzc-mk-q{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;font-weight:600;overflow-wrap:anywhere}.rlzc-mk-tag{flex:0 0 auto;font-size:11px;font-weight:600;color:var(--accent);padding:1px 6px;border:1px solid color-mix(in srgb,var(--accent) 60%,transparent);border-radius:4px}.rlzc-mk-opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.rlzc-mk-opt{display:flex;align-items:center;justify-content:space-between;gap:6px;min-height:44px;padding:6px 10px;font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 60%,transparent);border:1px solid var(--line);border-radius:8px;cursor:pointer;text-align:left}.rlzc-mk-opt b{font-weight:600;font-variant-numeric:tabular-nums;color:var(--muted)}.rlzc-mk-opt.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 16%,transparent)}.rlzc-mk-opt.on b{color:var(--fg)}.rlzc-mk-opt:disabled{opacity:.55;cursor:not-allowed}.rlzc-mk-bet{margin-top:8px}.rlzc-mk-bet .rlzc-input,.rlzc-mk-bet .rlzc-btn{min-height:44px}.rlzc-mk-bet .rlzc-btn{flex:0 0 auto;min-width:64px}.rlzc-mk-red{color:var(--bad);font-size:12px;margin:2px 0}.rlzc-mk-mine{list-style:none;margin:8px 0 0;padding:6px 0 0;border-top:1px dashed var(--line);font-size:12px;color:var(--muted)}.rlzc-mk-mine li{padding:2px 0;font-variant-numeric:tabular-nums}.rlzc-tk-list{list-style:none;margin:0;padding:0}.rlzc-tk{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:52px;padding:6px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-tk:last-child{border-bottom:none}.rlzc-tk-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-tk-title{font-size:13px;overflow-wrap:anywhere}.rlzc-tk-left small{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-stamp{flex:0 0 40px;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:16px;border:2px solid currentColor;transform:rotate(-14deg);box-shadow:inset 0 0 0 2px color-mix(in srgb,currentColor 18%,transparent)}.rlzc-stamp.win{color:var(--ok)}.rlzc-stamp.lose{color:var(--bad)}.rlzc-stamp.refund{color:var(--muted)}.rlzc-stamp.pending{color:var(--muted);border-style:dashed;border-width:1px;box-shadow:none;transform:none;font-weight:600;font-size:14px}.rlzc-cs-tables{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-cs-table{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-height:76px;text-align:left;font:inherit;color:var(--fg);cursor:pointer}.rlzc-cs-table b{font-size:15px}.rlzc-cs-table small{font-size:12px;color:var(--muted);line-height:1.45}.rlzc-cs-table.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent)}.rlzc-cs-play h4{margin-bottom:4px}.rlzc-cs-seg{margin:6px 0}.rlzc-cs-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:4px;margin:6px 0}.rlzc-cs-grid.door{grid-template-columns:repeat(5,minmax(0,1fr))}.rlzc-cs-grid button{min-height:44px;padding:0 2px;font:inherit;font-size:13px;color:var(--muted);cursor:pointer;background:none;border:1px solid var(--line);border-radius:8px;font-variant-numeric:tabular-nums}.rlzc-cs-grid button.on{color:var(--fg);border-color:var(--accent);background:color-mix(in srgb,var(--accent) 15%,transparent);font-weight:600}.rlzc-cs-face{margin-top:10px;min-height:52px;display:grid;place-items:center;font-size:26px;font-weight:800;font-variant-numeric:tabular-nums;border:1px dashed var(--line);border-radius:10px}.rlzc-cs-face.rolling{color:var(--muted)}.rlzc-cs-result{margin:8px 0 0;font-weight:600;font-variant-numeric:tabular-nums}.rlzc-cs-result.win{color:var(--ok)}.rlzc-cs-result.lose{color:var(--bad)}.rlzc-live-key{font-size:13px;flex:none}.rlzc-live-ctl{flex:1;min-width:0;max-width:240px;margin:0}.rlzc-live-opts .rlzc-segsrc{margin:0}.rlzc-live-opts .rlzc-segsrc button{min-height:40px}.rlzc-live-api{display:flex;gap:6px;align-items:center}.rlzc-live-api .rlzc-input{flex:1;min-width:0}.rlzc-live-opts .rlzc-preset-area{margin:2px 0 6px}.rlzc-range-wrap{display:flex;align-items:center;gap:10px;min-height:44px}.rlzc-range{flex:1;min-width:0;accent-color:var(--accent);height:28px}.rlzc-range-val{min-width:44px;text-align:right;font-variant-numeric:tabular-nums;color:var(--fg);font-size:13px}.rlzc-live-summary{margin:6px 0 2px}.rlzc-danger-text{color:#c9534f}';
function Lw(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function ku(e, t, n) {
  const s = ge().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function Rw() {
  const e = Lw();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await ku("/api/extensions/version", e, t);
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
async function Fw(e) {
  const t = await ku("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const jw = "回廊种菜系统", Bw = 100, Uw = [], Vw = [], Hw = "dist/index.js", Ww = "xiaxiii", Gw = "1.2.0", Kw = "https://github.com/xiaxiii/M-bius-strip", qw = !0, Yw = "rlzcInterceptor", Rl = {
  display_name: jw,
  loading_order: Bw,
  requires: Uw,
  optional: Vw,
  js: Hw,
  author: Ww,
  version: Gw,
  homePageUrl: Kw,
  auto_update: qw,
  generate_interceptor: Yw
}, Jw = {
  /** 有新版本、还没更新时：打开酒馆弹窗与扩展设置里的更新状态 */
  有新版本: [
    "喂喂喂，有新版本啦～（现在是 {版本}）",
    "EC 偷偷改咗少少嘢，bb 嚟更新下啦～（现在是 {版本}）",
    "bb呀，EC叫你嚟更新喇喂～（现在是 {版本}）",
    "EC 又给回廊添了点新东西，bb 快来看看！（现在是 {版本}）",
    "叩叩叩，新版本到啦～（现在是 {版本}）"
  ]
};
function Zw(e, t = {}, n = Math.random) {
  const s = Jw[e];
  return (s[Math.floor(n() * s.length)] ?? s[0] ?? "").replace(/\{([^{}]+)\}/g, (i, o) => t[o] ?? i);
}
const Fl = "rlzc-host", jl = "rlzc-menu-btn", Bl = "rlzc-settings-drawer";
function Xw() {
  if (document.getElementById(Fl)) return;
  const e = document.createElement("div");
  e.id = Fl, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Dw, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), UA(Ow).mount(s), wu(), zu();
}
function wu(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => wu(e + 1), 500);
    return;
  }
  if (document.getElementById(jl)) return;
  const n = document.createElement("div");
  n.id = jl, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const r = document.createElement("span");
  r.textContent = "回廊种菜系统", n.append(s, r), n.addEventListener("click", () => {
    f.panelOpen = !f.panelOpen;
  }), t.appendChild(n);
}
function zu(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => zu(e + 1), 500);
    return;
  }
  if (document.getElementById(Bl)) return;
  const n = (m, g = "", y = "") => {
    const D = document.createElement(m);
    return g && (D.className = g), y && (D.textContent = y), D;
  }, s = n("div");
  s.id = Bl;
  const r = n("div", "inline-drawer"), i = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), i.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const a = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => f.panelOpen = !0);
  const d = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  d.addEventListener("click", () => {
    f.settings.ball = { x: null, y: null }, f.settings.showBall = !0, ye();
  });
  const A = n("label", "checkbox_label"), p = document.createElement("input");
  p.type = "checkbox", p.addEventListener("change", () => {
    f.settings.showBall = p.checked, ye();
  }), A.append(p, n("span", "", "显示悬浮球")), fr(() => f.settings.showBall, (m) => p.checked = m, { immediate: !0 });
  const z = n("div", "flex-container");
  z.append(c, d);
  const w = n("div", "flex-container alignitemscenter"), x = n("small", "rlzc-update-status", "正在检查更新…"), _ = n("div", "menu_button menu_button_icon", "检查更新"), S = n("div", "menu_button menu_button_icon", "立即更新"), T = n("div", "menu_button menu_button_icon", "刷新页面");
  S.style.display = "none", T.style.display = "none", w.append(x, _, S, T);
  let C = null, I = !1, F = "";
  const L = () => F || (F = Zw("有新版本", { 版本: Rl.version })), B = async (m = !1) => {
    if (!I) {
      I = !0, x.textContent = "正在检查更新…", S.style.display = "none";
      try {
        C = await Rw();
        const g = `（${Rl.version}）`;
        C.isGit ? C.isUpToDate ? x.textContent = `已是最新版本${g}` : (x.textContent = L(), S.style.display = "") : x.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = C.isGit && !C.isUpToDate ? "" : "none";
      } catch (g) {
        x.textContent = `检查更新失败：${g.message}`;
        return;
      } finally {
        I = !1;
      }
      m && C?.isGit && !C.isUpToDate && H();
    }
  }, re = async () => {
    if (!C || I) return !1;
    I = !0, x.textContent = "正在更新…", S.style.display = "none";
    try {
      return await Fw(C), l.style.display = "none", x.textContent = "更新完成，刷新页面后生效。", T.style.display = "", !0;
    } catch (m) {
      throw x.textContent = `更新失败：${m.message}`, S.style.display = "", m;
    } finally {
      I = !1;
    }
  }, H = () => ll(L(), "立即更新", () => {
    re().then((m) => {
      m && ll("更新完成，刷新页面后生效。", "刷新页面", () => location.reload());
    }).catch((m) => we("error", `更新失败：${m.message}`));
  });
  _.addEventListener("click", () => void B()), S.addEventListener("click", () => void re().catch(() => {
  })), T.addEventListener("click", () => location.reload()), setTimeout(() => void B(!0), 1e3), a.append(z, A, w, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), r.append(i, a), s.append(r), t.append(s);
}
globalThis.rlzcInterceptor = nv;
function ni() {
  Vx(), bn("MESSAGE_RECEIVED", (e, t) => bv(Number(e), t)), bn("MESSAGE_DELETED", () => Xr()), bn("MESSAGE_SWIPED", (e) => ov(Number(e))), bn("MESSAGE_EDITED", (e) => Xr(Number(e))), bn("MESSAGE_UPDATED", (e) => Xr(Number(e))), bn("CHAT_CHANGED", () => Nl()), Rn("CHARACTER_MESSAGE_RENDERED", (e) => Rs(Number(e), !0)), Rn("MESSAGE_SWIPED", (e) => Rs(Number(e), !0)), Rn("MESSAGE_UPDATED", (e) => Rs(Number(e), !0)), Rn("MORE_MESSAGES_LOADED", () => sr(!1, !0)), Rn("CHAT_LOADED", () => sr(!1, !0)), Xw(), ex({ view: fo, toggle: hu }), Nl(), console.log("[rlzc] 回廊种菜系统已加载", f.settings);
}
const Ul = window.jQuery;
typeof Ul == "function" ? Ul(() => ni()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ni) : ni();
