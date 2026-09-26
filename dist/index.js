/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function mi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const oe = {}, Ct = [], It = () => {
}, Wr = () => !1, as = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), cs = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, Hr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ea = Object.prototype.hasOwnProperty, se = (e, t) => ea.call(e, t), K = Array.isArray, At = (e) => Cn(e) === "[object Map]", Nt = (e) => Cn(e) === "[object Set]", Yi = (e) => Cn(e) === "[object Date]", te = (e) => typeof e == "function", Ae = (e) => typeof e == "string", Ye = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", Gr = (e) => (le(e) || te(e)) && te(e.then) && te(e.catch), Yr = Object.prototype.toString, Cn = (e) => Yr.call(e), ta = (e) => Cn(e).slice(8, -1), Kr = (e) => Cn(e) === "[object Object]", gi = (e) => Ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, un = /* @__PURE__ */ mi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), As = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, na = /-\w/g, Pe = As(
  (e) => e.replace(na, (t) => t.slice(1).toUpperCase())
), sa = /\B([A-Z])/g, Ot = As(
  (e) => e.replace(sa, "-$1").toLowerCase()
), Zr = As((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ps = As(
  (e) => e ? `on${Zr(e)}` : ""
), He = (e, t) => !Object.is(e, t), Vn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Jr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, us = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ki;
const ds = () => Ki || (Ki = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fs(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = Ae(s) ? la(s) : fs(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (Ae(e) || le(e))
    return e;
}
const ia = /;(?![^(]*\))/g, ra = /:([^]+)/, oa = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function la(e) {
  const t = {};
  return e.replace(oa, (n) => n.startsWith("/*") ? "" : n).split(ia).forEach((n) => {
    if (n) {
      const s = n.split(ra);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ae(e) {
  let t = "";
  if (Ae(e))
    t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const s = ae(e[n]);
      s && (t += s + " ");
    }
  else if (le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const aa = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ca = /* @__PURE__ */ mi(aa);
function qr(e) {
  return !!e || e === "";
}
function Aa(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = ft(e[i], t[i], n);
  return s;
}
function Zi(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const r of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!i[l] && ft(r, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    i[o] = 1;
  }
  return !0;
}
function ua(e, t, n) {
  let s = At(e), i = At(t);
  if (s || i || (s = Nt(e), i = Nt(t), s || i))
    return s && i ? Zi(e, t, n) : !1;
  const r = Object.keys(e).length, o = Object.keys(t).length;
  if (r !== o)
    return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
    if (a && !c || !a && c || !ft(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function Ji(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, r] = n;
  if (i.has(e) || r.has(t))
    return i.get(e) === t && r.get(t) === e;
  i.set(e, t), r.set(t, e);
  const o = s(e, t, n);
  return i.delete(e), r.delete(t), o;
}
function ft(e, t, n) {
  if (e === t) return !0;
  let s = Yi(e), i = Yi(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = Ye(e), i = Ye(t), s || i ? e === t : (s = K(e), i = K(t), s || i ? s && i ? Ji(e, t, n, Aa) : !1 : (s = le(e), i = le(t), s || i ? !s || !i ? !1 : Ji(e, t, n, ua) : String(e) === String(t))));
}
function da(e, t) {
  return e.findIndex((n) => ft(n, t));
}
const Qr = (e) => !!(e && e.__v_isRef === !0), L = (e) => Ae(e) ? e : e == null ? "" : K(e) || le(e) && (e.toString === Yr || !te(e.toString)) ? Qr(e) ? L(e.value) : JSON.stringify(e, Xr, 2) : String(e), Xr = (e, t) => Qr(t) ? Xr(e, t.value) : At(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[Ns(s, r) + " =>"] = i, n),
    {}
  )
} : Nt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ns(n))
} : Ye(t) ? Ns(t) : le(t) && !K(t) && !Kr(t) ? String(t) : t, Ns = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ye(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let fe;
class fa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && fe && (fe.active ? (this.parent = fe, this.index = (fe.scopes || (fe.scopes = [])).push(
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
      const n = fe;
      try {
        return fe = this, t();
      } finally {
        fe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = fe, fe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (fe === this)
        fe = this.prevScope;
      else {
        let t = fe;
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
function pa() {
  return fe;
}
let ie;
const Rs = /* @__PURE__ */ new WeakSet();
class eo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, fe && (fe.active ? fe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Rs.has(this) && (Rs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || no(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, qi(this), so(this);
    const t = ie, n = Ne;
    ie = this, Ne = !0;
    try {
      return this.fn();
    } finally {
      io(this), ie = t, Ne = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        vi(t);
      this.deps = this.depsTail = void 0, qi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Rs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let to = 0, dn, fn;
function no(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = fn, fn = e;
    return;
  }
  e.next = dn, dn = e;
}
function xi() {
  to++;
}
function yi() {
  if (--to > 0)
    return;
  if (fn) {
    let t = fn;
    for (fn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; dn; ) {
    let t = dn;
    for (dn = void 0; t; ) {
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
function so(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function io(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), vi(s), ha(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function ii(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ro(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ro(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xn) || (e.globalVersion = xn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ii(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ie, s = Ne;
  ie = e, Ne = !0;
  try {
    so(e);
    const i = e.fn(e._value);
    (t.version === 0 || He(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ie = n, Ne = s, io(e), e.flags &= -3;
  }
}
function vi(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      vi(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ha(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ne = !0;
const oo = [];
function pt() {
  oo.push(Ne), Ne = !1;
}
function ht() {
  const e = oo.pop();
  Ne = e === void 0 ? !0 : e;
}
function qi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ie;
    ie = void 0;
    try {
      t();
    } finally {
      ie = n;
    }
  }
}
let xn = 0;
class ma {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class bi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ie || !Ne || ie === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ie)
      n = this.activeLink = new ma(ie, this), ie.deps ? (n.prevDep = ie.depsTail, ie.depsTail.nextDep = n, ie.depsTail = n) : ie.deps = ie.depsTail = n, lo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ie.depsTail, n.nextDep = void 0, ie.depsTail.nextDep = n, ie.depsTail = n, ie.deps === n && (ie.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, xn++, this.notify(t);
  }
  notify(t) {
    xi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      yi();
    }
  }
}
function lo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        lo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ri = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ Symbol(
  ""
), oi = /* @__PURE__ */ Symbol(
  ""
), yn = /* @__PURE__ */ Symbol(
  ""
);
function he(e, t, n) {
  if (Ne && ie) {
    let s = ri.get(e);
    s || ri.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new bi()), i.map = s, i.key = n), i.track();
  }
}
function tt(e, t, n, s, i, r) {
  const o = ri.get(e);
  if (!o) {
    xn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (xi(), t === "clear")
    o.forEach(l);
  else {
    const a = K(e), c = a && gi(n);
    if (a && n === "length") {
      const A = Number(s);
      o.forEach((p, h) => {
        (h === "length" || h === yn || !Ye(h) && h >= A) && l(p);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(yn)), t) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(Tt)), At(e) && l(o.get(oi)));
          break;
        case "delete":
          a || (l(o.get(Tt)), At(e) && l(o.get(oi)));
          break;
        case "set":
          At(e) && l(o.get(Tt));
          break;
      }
  }
  yi();
}
function Ut(e) {
  const t = /* @__PURE__ */ Q(e);
  return t === e || (he(t, "iterate", yn), /* @__PURE__ */ Ee(e)) ? t : /* @__PURE__ */ Ke(e) ? /* @__PURE__ */ ut(e) ? t.map((n) => mt(Me(n))) : t.map(mt) : t.map(Me);
}
function ps(e) {
  return he(e = /* @__PURE__ */ Q(e), "iterate", yn), e;
}
function Ue(e, t) {
  return /* @__PURE__ */ Ke(e) ? mt(/* @__PURE__ */ ut(e) ? Me(t) : t) : Me(t);
}
const ga = {
  __proto__: null,
  [Symbol.iterator]() {
    return Fs(this, Symbol.iterator, (e) => Ue(this, e));
  },
  concat(...e) {
    return Ut(this).concat(
      ...e.map((t) => K(t) ? Ut(t) : t)
    );
  },
  entries() {
    return Fs(this, "entries", (e) => (e[1] = Ue(this, e[1]), e));
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
      (n) => n.map((s) => Ue(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Qe(
      this,
      "find",
      e,
      t,
      (n) => Ue(this, n),
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
      (n) => Ue(this, n),
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
    return Ls(this, "includes", e);
  },
  indexOf(...e) {
    return Ls(this, "indexOf", e);
  },
  join(e) {
    return Ut(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ls(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Qe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rn(this, "pop");
  },
  push(...e) {
    return rn(this, "push", e);
  },
  reduce(e, ...t) {
    return Qi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Qi(this, "reduceRight", e, t);
  },
  shift() {
    return rn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Qe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rn(this, "splice", e);
  },
  toReversed() {
    return Ut(this).toReversed();
  },
  toSorted(e) {
    return Ut(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ut(this).toSpliced(...e);
  },
  unshift(...e) {
    return rn(this, "unshift", e);
  },
  values() {
    return Fs(this, "values", (e) => Ue(this, e));
  }
};
function Fs(e, t, n) {
  const s = ps(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Ee(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const xa = Array.prototype;
function Qe(e, t, n, s, i, r) {
  const o = ps(e), l = o !== e && !/* @__PURE__ */ Ee(e), a = o[t];
  if (a !== xa[t]) {
    const p = a.apply(e, r);
    return l ? Me(p) : p;
  }
  let c = n;
  o !== e && (l ? c = function(p, h) {
    return n.call(this, Ue(e, p), h, e);
  } : n.length > 2 && (c = function(p, h) {
    return n.call(this, p, h, e);
  }));
  const A = a.call(o, c, s);
  return l && i ? i(A) : A;
}
function Qi(e, t, n, s) {
  const i = ps(e), r = i !== e && !/* @__PURE__ */ Ee(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(c, A, p) {
    return l && (l = !1, c = Ue(e, c)), n.call(this, c, Ue(e, A), p, e);
  }) : n.length > 3 && (o = function(c, A, p) {
    return n.call(this, c, A, p, e);
  }));
  const a = i[t](o, ...s);
  return l ? Ue(e, a) : a;
}
function Ls(e, t, n) {
  const s = /* @__PURE__ */ Q(e);
  he(s, "iterate", yn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ _i(n[0]) ? (n[0] = /* @__PURE__ */ Q(n[0]), s[t](...n)) : i;
}
function rn(e, t, n = []) {
  pt(), xi();
  const s = (/* @__PURE__ */ Q(e))[t].apply(e, n);
  return yi(), ht(), s;
}
const ya = /* @__PURE__ */ mi("__proto__,__v_isRef,__isVue"), ao = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ye)
);
function va(e) {
  Ye(e) || (e = String(e));
  const t = /* @__PURE__ */ Q(this);
  return he(t, "has", e), t.hasOwnProperty(e);
}
class co {
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
      return s === (i ? r ? Ma : po : r ? fo : uo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = K(t);
    if (!i) {
      let a;
      if (o && (a = ga[n]))
        return a;
      if (n === "hasOwnProperty")
        return va;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ye(t) ? t : s
    );
    if ((Ye(n) ? ao.has(n) : ya(n)) || (i || he(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ ye(l)) {
      const a = o && gi(n) ? l : l.value;
      return i && le(a) ? /* @__PURE__ */ ai(a) : a;
    }
    return le(l) ? i ? /* @__PURE__ */ ai(l) : /* @__PURE__ */ hs(l) : l;
  }
}
class Ao extends co {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = K(t) && gi(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Ke(r);
      if (!/* @__PURE__ */ Ee(s) && !/* @__PURE__ */ Ke(s) && (r = /* @__PURE__ */ Q(r), s = /* @__PURE__ */ Q(s)), !o && /* @__PURE__ */ ye(r) && !/* @__PURE__ */ ye(s))
        return c || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : se(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ye(t) ? t : i
    );
    return t === /* @__PURE__ */ Q(i) && a && (l ? He(s, r) && tt(t, "set", n, s) : tt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = se(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && tt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ye(n) || !ao.has(n)) && he(t, "has", n), s;
  }
  ownKeys(t) {
    return he(
      t,
      "iterate",
      K(t) ? "length" : Tt
    ), Reflect.ownKeys(t);
  }
}
class ba extends co {
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
const wa = /* @__PURE__ */ new Ao(), ka = /* @__PURE__ */ new ba(), _a = /* @__PURE__ */ new Ao(!0);
const li = (e) => e, Fn = (e) => Reflect.getPrototypeOf(e);
function za(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ Q(i), o = At(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = i[e](...s), A = n ? li : t ? mt : Me;
    return !t && he(
      r,
      "iterate",
      a ? oi : Tt
    ), Fe(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: p, done: h } = c.next();
          return h ? { value: p, done: h } : {
            value: l ? [A(p[0]), A(p[1])] : A(p),
            done: h
          };
        }
      }
    );
  };
}
function Ln(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $a(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ Q(r), l = /* @__PURE__ */ Q(i);
      e || (He(i, l) && he(o, "get", i), he(o, "get", l));
      const { has: a } = Fn(o), c = t ? li : e ? mt : Me;
      if (a.call(o, i))
        return c(r.get(i));
      if (a.call(o, l))
        return c(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && he(/* @__PURE__ */ Q(i), "iterate", Tt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ Q(r), l = /* @__PURE__ */ Q(i);
      return e || (He(i, l) && he(o, "has", i), he(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ Q(l), c = t ? li : e ? mt : Me;
      return !e && he(a, "iterate", Tt), l.forEach((A, p) => i.call(r, c(A), c(p), o));
    }
  };
  return Fe(
    n,
    e ? {
      add: Ln("add"),
      set: Ln("set"),
      delete: Ln("delete"),
      clear: Ln("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ Q(this), o = Fn(r), l = /* @__PURE__ */ Q(i), a = !t && !/* @__PURE__ */ Ee(i) && !/* @__PURE__ */ Ke(i) ? l : i;
        return o.has.call(r, a) || He(i, a) && o.has.call(r, i) || He(l, a) && o.has.call(r, l) || (r.add(a), tt(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Ee(r) && !/* @__PURE__ */ Ke(r) && (r = /* @__PURE__ */ Q(r));
        const o = /* @__PURE__ */ Q(this), { has: l, get: a } = Fn(o);
        let c = l.call(o, i);
        c || (i = /* @__PURE__ */ Q(i), c = l.call(o, i));
        const A = a.call(o, i);
        return o.set(i, r), c ? He(r, A) && tt(o, "set", i, r) : tt(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ Q(this), { has: o, get: l } = Fn(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ Q(i), a = o.call(r, i)), l && l.call(r, i);
        const c = r.delete(i);
        return a && tt(r, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ Q(this), r = i.size !== 0, o = i.clear();
        return r && tt(
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
    n[i] = za(i, e, t);
  }), n;
}
function wi(e, t) {
  const n = $a(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    se(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Sa = {
  get: /* @__PURE__ */ wi(!1, !1)
}, Ea = {
  get: /* @__PURE__ */ wi(!1, !0)
}, Ca = {
  get: /* @__PURE__ */ wi(!0, !1)
};
const uo = /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ new WeakMap(), po = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ new WeakMap();
function Ia(e) {
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
function hs(e) {
  return /* @__PURE__ */ Ke(e) ? e : ki(
    e,
    !1,
    wa,
    Sa,
    uo
  );
}
// @__NO_SIDE_EFFECTS__
function Ta(e) {
  return ki(
    e,
    !1,
    _a,
    Ea,
    fo
  );
}
// @__NO_SIDE_EFFECTS__
function ai(e) {
  return ki(
    e,
    !0,
    ka,
    Ca,
    po
  );
}
function ki(e, t, n, s, i) {
  if (!le(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = Ia(ta(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return /* @__PURE__ */ Ke(e) ? /* @__PURE__ */ ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function _i(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Q(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Q(t) : e;
}
function Pa(e) {
  return !se(e, "__v_skip") && Object.isExtensible(e) && Jr(e, "__v_skip", !0), e;
}
const Me = (e) => le(e) ? /* @__PURE__ */ hs(e) : e, mt = (e) => le(e) ? /* @__PURE__ */ ai(e) : e;
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return Na(e, !1);
}
function Na(e, t) {
  return /* @__PURE__ */ ye(e) ? e : new Ra(e, t);
}
class Ra {
  constructor(t, n) {
    this.dep = new bi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Q(t), this._value = n ? t : Me(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ee(t) || /* @__PURE__ */ Ke(t);
    t = s ? t : /* @__PURE__ */ Q(t), He(t, n) && (this._rawValue = t, this._value = s ? t : Me(t), this.dep.trigger());
  }
}
function O(e) {
  return /* @__PURE__ */ ye(e) ? e.value : e;
}
const Fa = {
  get: (e, t, n) => t === "__v_raw" ? e : O(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ ye(i) && !/* @__PURE__ */ ye(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ho(e) {
  return /* @__PURE__ */ ut(e) ? e : new Proxy(e, Fa);
}
class La {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new bi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ie !== this)
      return no(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ro(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Oa(e, t, n = !1) {
  let s, i;
  return te(e) ? s = e : (s = e.get, i = e.set), new La(s, i, n);
}
const On = {}, Kn = /* @__PURE__ */ new WeakMap();
let St;
function Da(e, t = !1, n = St) {
  if (n) {
    let s = Kn.get(n);
    s || Kn.set(n, s = []), s.push(e);
  }
}
function ja(e, t, n = oe) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = n, c = (M) => i ? M : /* @__PURE__ */ Ee(M) || i === !1 || i === 0 ? nt(M, 1) : nt(M);
  let A, p, h, g, v = !1, _ = !1;
  if (/* @__PURE__ */ ye(e) ? (p = () => e.value, v = /* @__PURE__ */ Ee(e)) : /* @__PURE__ */ ut(e) ? (p = () => c(e), v = !0) : K(e) ? (_ = !0, v = e.some((M) => /* @__PURE__ */ ut(M) || /* @__PURE__ */ Ee(M)), p = () => e.map((M) => {
    if (/* @__PURE__ */ ye(M))
      return M.value;
    if (/* @__PURE__ */ ut(M))
      return c(M);
    if (te(M))
      return a ? a(M, 2) : M();
  })) : te(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (h) {
      pt();
      try {
        h();
      } finally {
        ht();
      }
    }
    const M = St;
    St = A;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      St = M;
    }
  } : p = It, t && i) {
    const M = p, U = i === !0 ? 1 / 0 : i;
    p = () => nt(M(), U);
  }
  const P = pa(), w = () => {
    A.stop(), P && P.active && Hr(P.effects, A);
  };
  if (r && t) {
    const M = t;
    t = (...U) => {
      const q = M(...U);
      return w(), q;
    };
  }
  let y = _ ? new Array(e.length).fill(On) : On;
  const x = (M) => {
    if (!(!(A.flags & 1) || !A.dirty && !M))
      if (t) {
        const U = A.run();
        if (M || i || v || (_ ? U.some((q, W) => He(q, y[W])) : He(U, y))) {
          h && h();
          const q = St;
          St = A;
          try {
            const W = [
              U,
              // pass undefined as the old value when it's changed for the first time
              y === On ? void 0 : _ && y[0] === On ? [] : y,
              g
            ];
            y = U, a ? a(t, 3, W) : (
              // @ts-expect-error
              t(...W)
            );
          } finally {
            St = q;
          }
        }
      } else
        A.run();
  };
  return l && l(x), A = new eo(p), A.scheduler = o ? () => o(x, !1) : x, g = (M) => Da(M, !1, A), h = A.onStop = () => {
    const M = Kn.get(A);
    if (M) {
      if (a)
        a(M, 4);
      else
        for (const U of M) U();
      Kn.delete(A);
    }
  }, t ? s ? x(!0) : y = A.run() : o ? o(x.bind(null, !0), !0) : A.run(), w.pause = A.pause.bind(A), w.resume = A.resume.bind(A), w.stop = w, w;
}
function nt(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ye(e))
    nt(e.value, t, n);
  else if (K(e))
    for (let s = 0; s < e.length; s++)
      nt(e[s], t, n);
  else if (Nt(e) || At(e))
    e.forEach((s) => {
      nt(s, t, n);
    });
  else if (Kr(e)) {
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
function Mn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    ms(i, t, n);
  }
}
function Ze(e, t, n, s) {
  if (te(e)) {
    const i = Mn(e, t, n, s);
    return i && Gr(i) && i.catch((r) => {
      ms(r, t, n);
    }), i;
  }
  if (K(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ze(e[r], t, n, s));
    return i;
  }
}
function ms(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || oe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const A = l.ec;
      if (A) {
        for (let p = 0; p < A.length; p++)
          if (A[p](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      pt(), Mn(r, null, 10, [
        e,
        a,
        c
      ]), ht();
      return;
    }
  }
  Ba(e, n, i, s, o);
}
function Ba(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const xe = [];
let Be = -1;
const Kt = [];
let at = null, Wt = 0;
const mo = /* @__PURE__ */ Promise.resolve();
let Zn = null;
function go(e) {
  const t = Zn || mo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Va(e) {
  let t = Be + 1, n = xe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = xe[s], r = vn(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function zi(e) {
  if (!(e.flags & 1)) {
    const t = vn(e), n = xe[xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= vn(n) ? xe.push(e) : xe.splice(Va(t), 0, e), e.flags |= 1, xo();
  }
}
function xo() {
  Zn || (Zn = mo.then(vo));
}
function Ua(e) {
  if (!K(e))
    at && e.id === -1 ? at.splice(Wt + 1, 0, e) : e.flags & 1 || (Kt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Kt.push(e[t]);
  xo();
}
function Xi(e, t, n = Be + 1) {
  for (; n < xe.length; n++) {
    const s = xe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      xe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function yo(e) {
  if (Kt.length) {
    const t = [...new Set(Kt)].sort(
      (n, s) => vn(n) - vn(s)
    );
    if (Kt.length = 0, at) {
      for (let n = 0; n < t.length; n++)
        at.push(t[n]);
      return;
    }
    for (at = t, Wt = 0; Wt < at.length; Wt++) {
      const n = at[Wt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    at = null, Wt = 0;
  }
}
const vn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function vo(e) {
  try {
    for (Be = 0; Be < xe.length; Be++) {
      const t = xe[Be];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Mn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Be < xe.length; Be++) {
      const t = xe[Be];
      t && (t.flags &= -2);
    }
    Be = -1, xe.length = 0, yo(), Zn = null, (xe.length || Kt.length) && vo();
  }
}
let Se = null, bo = null;
function Jn(e) {
  const t = Se;
  return Se = e, bo = e && e.type.__scopeId || null, t;
}
function Wa(e, t = Se, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && or(-1);
    const r = Jn(t), o = Pt.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = Pt.length; a > o; a--) Oo();
      Jn(r), s._d && or(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ct(e, t) {
  if (Se === null)
    return e;
  const n = bs(Se), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = oe] = t[i];
    r && (te(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && nt(o), s.push({
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
function zt(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[s];
    a && (pt(), Ze(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ht());
  }
}
function Ha(e, t, n = !1) {
  const s = Cc();
  if (s || Zt) {
    let i = Zt ? Zt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && te(t) ? t.call(s && s.proxy) : t;
  }
}
const Ga = /* @__PURE__ */ Symbol.for("v-scx"), Ya = () => Ha(Ga);
function gs(e, t, n) {
  return Ka(e, t, n);
}
function Ka(e, t, n = oe) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = Fe({}, n), a = t && s || !t && r !== "post";
  let c;
  if (kn) {
    if (r === "sync") {
      const g = Ya();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = It, g.resume = It, g.pause = It, g;
    }
  }
  const A = gt;
  l.call = (g, v, _) => Ze(g, A, v, _);
  let p = !1;
  r === "post" ? l.scheduler = (g) => {
    we(g, A && A.suspense);
  } : r !== "sync" && (p = !0, l.scheduler = (g, v) => {
    v ? g() : zi(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, A && (g.id = A.uid, g.i = A));
  };
  const h = ja(e, t, l);
  return kn && (c ? c.push(h) : a && h()), h;
}
const Za = /* @__PURE__ */ Symbol("_vte"), xs = (e) => e.__isTeleport, Os = /* @__PURE__ */ Symbol("_leaveCb");
function Ja(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== it) {
        t = n;
        break;
      }
  }
  return t;
}
function wo(e) {
  if (!ko(e))
    return xs(e.type) && e.children ? Ja(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && te(n.default))
      return n.default();
  }
}
function $i(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    $i(
      xs(n.type) && wo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Je(e, t) {
  return te(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function qa(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function er(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const qn = /* @__PURE__ */ new WeakMap();
function pn(e, t, n, s, i = !1) {
  if (K(e)) {
    e.forEach(
      (_, P) => pn(
        _,
        t && (K(t) ? t[P] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (hn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && pn(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? bs(s.component) : s.el, o = i ? null : r, { i: l, r: a } = e, c = t && t.r, A = l.refs === oe ? l.refs = {} : l.refs, p = l.setupState, h = /* @__PURE__ */ Q(p), g = p === oe ? Wr : (_) => er(A, _) ? !1 : se(h, _), v = (_, P) => !(P && er(A, P));
  if (c != null && c !== a) {
    if (tr(t), Ae(c))
      A[c] = null, g(c) && (p[c] = null);
    else if (/* @__PURE__ */ ye(c)) {
      const _ = t;
      v(c, _.k) && (c.value = null), _.k && (A[_.k] = null);
    }
  }
  if (te(a))
    Mn(a, l, 12, [o, A]);
  else {
    const _ = Ae(a), P = /* @__PURE__ */ ye(a);
    if (_ || P) {
      const w = () => {
        if (e.f) {
          const y = _ ? g(a) ? p[a] : A[a] : v() || !e.k ? a.value : A[e.k];
          if (i)
            K(y) && Hr(y, r);
          else if (K(y))
            y.includes(r) || y.push(r);
          else if (_)
            A[a] = [r], g(a) && (p[a] = A[a]);
          else {
            const x = [r];
            v(a, e.k) && (a.value = x), e.k && (A[e.k] = x);
          }
        } else _ ? (A[a] = o, g(a) && (p[a] = o)) : P && (v(a, e.k) && (a.value = o), e.k && (A[e.k] = o));
      };
      if (o) {
        const y = () => {
          w(), qn.delete(e);
        };
        y.id = -1, qn.set(e, y), we(y, n);
      } else
        tr(e), w();
    }
  }
}
function tr(e) {
  const t = qn.get(e);
  t && (t.flags |= 8, qn.delete(e));
}
ds().requestIdleCallback;
ds().cancelIdleCallback;
const hn = (e) => !!e.type.__asyncLoader, ko = (e) => e.type.__isKeepAlive;
function Qa(e, t, n = gt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      pt();
      const l = Ci(n), a = Ze(t, n, e, o);
      return l(), ht(), a;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const _o = (e) => (t, n = gt) => {
  (!kn || e === "sp") && Qa(e, (...s) => t(...s), n);
}, Xa = _o("m"), ec = _o(
  "bum"
), tc = /* @__PURE__ */ Symbol.for("v-ndc");
function me(e, t, n, s) {
  let i;
  const r = n, o = K(e);
  if (o || Ae(e)) {
    const l = o && /* @__PURE__ */ ut(e);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ Ee(e), c = /* @__PURE__ */ Ke(e), e = ps(e)), i = new Array(e.length);
    for (let A = 0, p = e.length; A < p; A++)
      i[A] = t(
        a ? c ? mt(Me(e[A])) : Me(e[A]) : e[A],
        A,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (le(e))
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
const ci = (e) => e ? Vo(e) ? bs(e) : ci(e.parent) : null, mn = (
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
    $parent: (e) => ci(e.parent),
    $root: (e) => ci(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      zi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = go.bind(e.proxy)),
    $watch: (e) => It
  })
), Ds = (e, t) => e !== oe && !e.__isScriptSetup && se(e, t), nc = {
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
        if (Ds(s, t))
          return o[t] = 1, s[t];
        if (se(r, t))
          return o[t] = 3, r[t];
        if (n !== oe && se(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = mn[t];
    let A, p;
    if (c)
      return t === "$attrs" && he(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (A = l.__cssModules) && (A = A[t])
    )
      return A;
    if (n !== oe && se(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, se(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return Ds(i, t) ? (i[t] = n, !0) : se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(n[l] || Ds(t, l) || se(r, l) || se(s, l) || se(mn, l) || se(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function zo() {
  return {
    app: null,
    config: {
      isNativeTag: Wr,
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
let sc = 0;
function ic(e, t) {
  return function(s, i = null) {
    te(s) || (s = Fe({}, s)), i != null && !le(i) && (i = null);
    const r = zo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = r.app = {
      _uid: sc++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Rc,
      get config() {
        return r.config;
      },
      set config(A) {
      },
      use(A, ...p) {
        return o.has(A) || (A && te(A.install) ? (o.add(A), A.install(c, ...p)) : te(A) && (o.add(A), A(c, ...p))), c;
      },
      mixin(A) {
        return c;
      },
      component(A, p) {
        return p ? (r.components[A] = p, c) : r.components[A];
      },
      directive(A, p) {
        return p ? (r.directives[A] = p, c) : r.directives[A];
      },
      mount(A, p, h) {
        if (!a) {
          const g = c._ceVNode || Ce(s, i);
          return g.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(g, A, h), a = !0, c._container = A, A.__vue_app__ = c, bs(g.component);
        }
      },
      onUnmount(A) {
        l.push(A);
      },
      unmount() {
        a && (Ze(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(A, p) {
        return r.provides[A] = p, c;
      },
      runWithContext(A) {
        const p = Zt;
        Zt = c;
        try {
          return A();
        } finally {
          Zt = p;
        }
      }
    };
    return c;
  };
}
let Zt = null;
const rc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pe(t)}Modifiers`] || e[`${Ot(t)}Modifiers`];
function oc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || oe;
  let i = n;
  const r = t.startsWith("update:"), o = r && rc(s, t.slice(7));
  o && (o.trim && (i = n.map((A) => Ae(A) ? A.trim() : A)), o.number && (i = i.map(us)));
  let l, a = s[l = Ps(t)] || // also try camelCase event handler (#2249)
  s[l = Ps(Pe(t))];
  !a && r && (a = s[l = Ps(Ot(t))]), a && Ze(
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
    e.emitted[l] = !0, Ze(
      c,
      e,
      6,
      i
    );
  }
}
function lc(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {};
  return r ? (K(r) ? r.forEach((l) => o[l] = null) : Fe(o, r), le(e) && s.set(e, o), o) : (le(e) && s.set(e, null), null);
}
function ys(e, t) {
  return !e || !as(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, Ot(t)) || se(e, t));
}
function nr(e) {
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
    props: p,
    data: h,
    setupState: g,
    ctx: v,
    inheritAttrs: _
  } = e, P = Jn(e);
  let w, y;
  try {
    if (n.shapeFlag & 4) {
      const M = i || s, U = M;
      w = We(
        c.call(
          U,
          M,
          A,
          p,
          g,
          h,
          v
        )
      ), y = l;
    } else {
      const M = t;
      w = We(
        M.length > 1 ? M(
          p,
          { attrs: l, slots: o, emit: a }
        ) : M(
          p,
          null
        )
      ), y = t.props ? l : ac(l);
    }
  } catch (M) {
    Pt.length = 0, ms(M, e, 1), w = Ce(it);
  }
  let x = w;
  if (y && _ !== !1) {
    const M = Object.keys(y), { shapeFlag: U } = x;
    M.length && U & 7 && (r && M.some(cs) && (y = cc(
      y,
      r
    )), x = qt(x, y, !1, !0));
  }
  if (n.dirs && (x = qt(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const M = xs(x.type) && wo(x) || x;
    $i(M, n.transition);
  }
  return w = x, Jn(P), w;
}
const ac = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || as(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, cc = (e, t) => {
  const n = {};
  for (const s in e)
    (!cs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Ac(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, c = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? sr(s, o, c) : !!o;
    if (a & 8) {
      const A = t.dynamicProps;
      for (let p = 0; p < A.length; p++) {
        const h = A[p];
        if ($o(o, s, h) && !ys(c, h))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? sr(s, o, c) : !0 : !!o;
  return !1;
}
function sr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if ($o(t, e, r) && !ys(n, r))
      return !0;
  }
  return !1;
}
function $o(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && le(s) && le(i) ? !ft(s, i) : s !== i;
}
function uc({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const So = {}, Eo = () => Object.create(So), Co = (e) => Object.getPrototypeOf(e) === So;
function dc(e, t, n, s = !1) {
  const i = {}, r = Eo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Mo(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Ta(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function fc(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ Q(i), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const A = e.vnode.dynamicProps;
      for (let p = 0; p < A.length; p++) {
        let h = A[p];
        if (ys(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (a)
          if (se(r, h))
            g !== r[h] && (r[h] = g, c = !0);
          else {
            const v = Pe(h);
            i[v] = Ai(
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
    Mo(e, t, i, r) && (c = !0);
    let A;
    for (const p in l)
      (!t || // for camelCase
      !se(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((A = Ot(p)) === p || !se(t, A))) && (a ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[A] !== void 0) && (i[p] = Ai(
        a,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (r !== l)
      for (const p in r)
        (!t || !se(t, p)) && (delete r[p], c = !0);
  }
  c && tt(e.attrs, "set", "");
}
function Mo(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (un(a))
        continue;
      const c = t[a];
      let A;
      i && se(i, A = Pe(a)) ? !r || !r.includes(A) ? n[A] = c : (l || (l = {}))[A] = c : ys(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ Q(n), c = l || oe;
    for (let A = 0; A < r.length; A++) {
      const p = r[A];
      n[p] = Ai(
        i,
        a,
        p,
        c[p],
        e,
        !se(c, p)
      );
    }
  }
  return o;
}
function Ai(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = se(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && te(a)) {
        const { propsDefaults: c } = i;
        if (n in c)
          s = c[n];
        else {
          const A = Ci(i);
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
    ] && (s === "" || s === Ot(n)) && (s = !0));
  }
  return s;
}
function pc(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  if (!r)
    return le(e) && s.set(e, Ct), Ct;
  if (K(r))
    for (let c = 0; c < r.length; c++) {
      const A = Pe(r[c]);
      ir(A) && (o[A] = oe);
    }
  else if (r)
    for (const c in r) {
      const A = Pe(c);
      if (ir(A)) {
        const p = r[c], h = o[A] = K(p) || te(p) ? { type: p } : Fe({}, p), g = h.type;
        let v = !1, _ = !0;
        if (K(g))
          for (let P = 0; P < g.length; ++P) {
            const w = g[P], y = te(w) && w.name;
            if (y === "Boolean") {
              v = !0;
              break;
            } else y === "String" && (_ = !1);
          }
        else
          v = te(g) && g.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = v, h[
          1
          /* shouldCastTrue */
        ] = _, (v || se(h, "default")) && l.push(A);
      }
    }
  const a = [o, l];
  return le(e) && s.set(e, a), a;
}
function ir(e) {
  return e[0] !== "$" && !un(e);
}
const Si = (e) => e === "_" || e === "_ctx" || e === "$stable", Ei = (e) => K(e) ? e.map(We) : [We(e)], hc = (e, t, n) => {
  if (t._n)
    return t;
  const s = Wa((...i) => Ei(t(...i)), n);
  return s._c = !1, s;
}, Io = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Si(i)) continue;
    const r = e[i];
    if (te(r))
      t[i] = hc(i, r, s);
    else if (r != null) {
      const o = Ei(r);
      t[i] = () => o;
    }
  }
}, To = (e, t) => {
  const n = Ei(t);
  e.slots.default = () => n;
}, Po = (e, t, n) => {
  for (const s in t)
    (n || !Si(s)) && (e[s] = t[s]);
}, mc = (e, t, n) => {
  const s = e.slots = Eo();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Po(s, t, n), n && Jr(s, "_", i, !0)) : Io(t, s);
  } else t && To(e, t);
}, gc = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = oe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Po(i, t, n) : (r = !t.$stable, Io(t, i)), o = t;
  } else t && (To(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Si(l) && o[l] == null && delete i[l];
}, we = wc;
function xc(e) {
  return yc(e);
}
function yc(e, t) {
  const n = ds();
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
    parentNode: p,
    nextSibling: h,
    setScopeId: g = It,
    insertStaticContent: v
  } = e, _ = (d, m, b, T = null, $ = null, C = null, F = void 0, R = null, N = !!m.dynamicChildren) => {
    if (d === m)
      return;
    d && !on(d, m) && (T = Rn(d), be(d, $, C, !0), d = null), m.patchFlag === -2 && (N = !1, m.dynamicChildren = null), m.dynamicChildren && d && d.dynamicChildren && d.dynamicChildren.hasOnce && (m.dynamicChildren === Ct && (m.dynamicChildren = []), m.dynamicChildren.hasOnce = !0);
    const { type: E, ref: V, shapeFlag: D } = m;
    switch (E) {
      case vs:
        P(d, m, b, T);
        break;
      case it:
        w(d, m, b, T);
        break;
      case Bs:
        d == null && y(m, b, T, F);
        break;
      case X:
        re(
          d,
          m,
          b,
          T,
          $,
          C,
          F,
          R,
          N
        );
        break;
      default:
        D & 1 ? U(
          d,
          m,
          b,
          T,
          $,
          C,
          F,
          R,
          N
        ) : D & 6 ? Te(
          d,
          m,
          b,
          T,
          $,
          C,
          F,
          R,
          N
        ) : (D & 64 || D & 128) && E.process(
          d,
          m,
          b,
          T,
          $,
          C,
          F,
          R,
          N,
          nn
        );
    }
    V != null && $ ? pn(V, d && d.ref, C, m || d, !m) : V == null && d && d.ref != null && pn(d.ref, null, C, d, !0);
  }, P = (d, m, b, T) => {
    if (d == null)
      s(
        m.el = l(m.children),
        b,
        T
      );
    else {
      const $ = m.el = d.el;
      m.children !== d.children && c($, m.children);
    }
  }, w = (d, m, b, T) => {
    d == null ? s(
      m.el = a(m.children || ""),
      b,
      T
    ) : m.el = d.el;
  }, y = (d, m, b, T) => {
    [d.el, d.anchor] = v(
      d.children,
      m,
      b,
      T,
      d.el,
      d.anchor
    );
  }, x = ({ el: d, anchor: m }, b, T) => {
    let $;
    for (; d && d !== m; )
      $ = h(d), s(d, b, T), d = $;
    s(m, b, T);
  }, M = ({ el: d, anchor: m }) => {
    let b;
    for (; d && d !== m; )
      b = h(d), i(d), d = b;
    i(m);
  }, U = (d, m, b, T, $, C, F, R, N) => {
    if (m.type === "svg" ? F = "svg" : m.type === "math" && (F = "mathml"), d == null)
      q(
        m,
        b,
        T,
        $,
        C,
        F,
        R,
        N
      );
    else {
      const E = d.el && d.el._isVueCE ? d.el : null;
      try {
        E && E._beginPatch(), k(
          d,
          m,
          $,
          C,
          F,
          R,
          N
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, q = (d, m, b, T, $, C, F, R) => {
    let N, E;
    const { props: V, shapeFlag: D, transition: B, dirs: H } = d;
    if (N = d.el = o(
      d.type,
      C,
      V && V.is,
      V
    ), D & 8 ? A(N, d.children) : D & 16 && S(
      d.children,
      N,
      null,
      T,
      $,
      js(d, C),
      F,
      R
    ), H && zt(d, null, T, "created"), W(N, d, d.scopeId, F, T), V) {
      for (const ne in V)
        ne !== "value" && !un(ne) && r(N, ne, null, V[ne], C, T);
      "value" in V && r(N, "value", null, V.value, C), (E = V.onVnodeBeforeMount) && je(E, T, d);
    }
    H && zt(d, null, T, "beforeMount");
    const Z = vc($, B);
    Z && B.beforeEnter(N), s(N, m, b), ((E = V && V.onVnodeMounted) || Z || H) && we(() => {
      try {
        E && je(E, T, d), Z && B.enter(N), H && zt(d, null, T, "mounted");
      } finally {
      }
    }, $);
  }, W = (d, m, b, T, $) => {
    if (b && g(d, b), T)
      for (let C = 0; C < T.length; C++)
        g(d, T[C]);
    if ($) {
      let C = $.subTree;
      if (m === C || Lo(C.type) && (C.ssContent === m || C.ssFallback === m)) {
        const F = $.vnode;
        W(
          d,
          F,
          F.scopeId,
          F.slotScopeIds,
          $.parent
        );
      }
    }
  }, S = (d, m, b, T, $, C, F, R, N = 0) => {
    for (let E = N; E < d.length; E++) {
      const V = d[E] = R ? et(d[E]) : We(d[E]);
      _(
        null,
        V,
        m,
        b,
        T,
        $,
        C,
        F,
        R
      );
    }
  }, k = (d, m, b, T, $, C, F) => {
    const R = m.el = d.el;
    let { patchFlag: N, dynamicChildren: E, dirs: V } = m;
    N |= d.patchFlag & 16;
    const D = d.props || oe, B = m.props || oe;
    let H;
    if (b && $t(b, !1), (H = B.onVnodeBeforeUpdate) && je(H, b, m, d), V && zt(m, d, b, "beforeUpdate"), b && $t(b, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    E && (!d.dynamicChildren || d.dynamicChildren.length !== E.length) && (N = 0, F = !1, E = null), (D.innerHTML && B.innerHTML == null || D.textContent && B.textContent == null) && A(R, ""), E ? j(
      d.dynamicChildren,
      E,
      R,
      b,
      T,
      js(m, $),
      C
    ) : F || Vt(
      d,
      m,
      R,
      null,
      b,
      T,
      js(m, $),
      C,
      !1
    ), N > 0) {
      if (N & 16)
        ve(R, D, B, b, $);
      else if (N & 2 && D.class !== B.class && r(R, "class", null, B.class, $), N & 4 && r(R, "style", D.style, B.style, $), N & 8) {
        const Z = m.dynamicProps;
        for (let ne = 0; ne < Z.length; ne++) {
          const ee = Z[ne], ce = D[ee], de = B[ee];
          (de !== ce || ee === "value") && r(R, ee, ce, de, $, b);
        }
      }
      N & 1 && d.children !== m.children && A(R, m.children);
    } else !F && E == null && ve(R, D, B, b, $);
    ((H = B.onVnodeUpdated) || V) && we(() => {
      H && je(H, b, m, d), V && zt(m, d, b, "updated");
    }, T);
  }, j = (d, m, b, T, $, C, F) => {
    for (let R = 0; R < m.length; R++) {
      const N = d[R], E = m[R], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === X || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !on(N, E) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? p(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          b
        )
      );
      _(
        N,
        E,
        V,
        null,
        T,
        $,
        C,
        F,
        !0
      );
    }
  }, ve = (d, m, b, T, $) => {
    if (m !== b) {
      if (m !== oe)
        for (const C in m)
          !un(C) && !(C in b) && r(
            d,
            C,
            m[C],
            null,
            $,
            T
          );
      for (const C in b) {
        if (un(C)) continue;
        const F = b[C], R = m[C];
        F !== R && C !== "value" && r(d, C, R, F, $, T);
      }
      "value" in b && r(d, "value", m.value, b.value, $);
    }
  }, re = (d, m, b, T, $, C, F, R, N) => {
    const E = m.el = d ? d.el : l(""), V = m.anchor = d ? d.anchor : l("");
    let { patchFlag: D, dynamicChildren: B, slotScopeIds: H } = m;
    H && (R = R ? R.concat(H) : H), d == null ? (s(E, b, T), s(V, b, T), S(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      b,
      V,
      $,
      C,
      F,
      R,
      N
    )) : D > 0 && D & 64 && B && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === B.length ? (j(
      d.dynamicChildren,
      B,
      b,
      $,
      C,
      F,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || $ && m === $.subTree) && No(
      d,
      m,
      !0
      /* shallow */
    )) : Vt(
      d,
      m,
      b,
      V,
      $,
      C,
      F,
      R,
      N
    );
  }, Te = (d, m, b, T, $, C, F, R, N) => {
    m.slotScopeIds = R, d == null ? m.shapeFlag & 512 ? $.ctx.activate(
      m,
      b,
      T,
      F,
      N
    ) : ge(
      m,
      b,
      T,
      $,
      C,
      F,
      N
    ) : bt(d, m, N);
  }, ge = (d, m, b, T, $, C, F) => {
    const R = d.component = Ec(
      d,
      T,
      $
    );
    if (ko(d) && (R.ctx.renderer = nn), Mc(R, !1, F), R.asyncDep) {
      if ($ && $.registerDep(R, wt, F), !d.el) {
        const N = R.subTree = Ce(it);
        w(null, N, m, b), d.placeholder = N.el;
      }
    } else
      wt(
        R,
        d,
        m,
        b,
        $,
        C,
        F
      );
  }, bt = (d, m, b) => {
    const T = m.component = d.component;
    if (Ac(d, m, b))
      if (T.asyncDep && !T.asyncResolved) {
        m.el = d.el, kt(T, m, b);
        return;
      } else
        T.next = m, T.update();
    else
      m.el = d.el, T.vnode = m;
  }, wt = (d, m, b, T, $, C, F) => {
    const R = () => {
      if (d.isMounted) {
        let { next: D, bu: B, u: H, parent: Z, vnode: ne } = d;
        {
          const Oe = Ro(d);
          if (Oe) {
            D && (D.el = ne.el, kt(d, D, F)), Oe.asyncDep.then(() => {
              we(() => {
                d.isUnmounted || E();
              }, $);
            });
            return;
          }
        }
        let ee = D, ce;
        $t(d, !1), D ? (D.el = ne.el, kt(d, D, F)) : D = ne, B && Vn(B), (ce = D.props && D.props.onVnodeBeforeUpdate) && je(ce, Z, D, ne), $t(d, !0);
        const de = nr(d), Le = d.subTree;
        d.subTree = de, _(
          Le,
          de,
          // parent may have changed if it's in a teleport
          p(Le.el),
          // anchor may have changed if it's in a fragment
          Rn(Le),
          d,
          $,
          C
        ), D.el = de.el, ee === null && uc(d, de.el), H && we(H, $), (ce = D.props && D.props.onVnodeUpdated) && we(
          () => je(ce, Z, D, ne),
          $
        );
      } else {
        let D;
        const { el: B, props: H } = m, { bm: Z, m: ne, parent: ee, root: ce, type: de } = d, Le = hn(m);
        $t(d, !1), Z && Vn(Z), !Le && (D = H && H.onVnodeBeforeMount) && je(D, ee, m), $t(d, !0);
        {
          ce.ce && ce.ce._hasShadowRoot() && ce.ce._injectChildStyle(
            de,
            d.parent ? d.parent.type : void 0
          );
          const Oe = d.subTree = nr(d);
          _(
            null,
            Oe,
            b,
            T,
            d,
            $,
            C
          ), m.el = Oe.el;
        }
        if (ne && we(ne, $), !Le && (D = H && H.onVnodeMounted)) {
          const Oe = m;
          we(
            () => je(D, ee, Oe),
            $
          );
        }
        (m.shapeFlag & 256 || ee && hn(ee.vnode) && ee.vnode.shapeFlag & 256) && d.a && we(d.a, $), d.isMounted = !0, m = b = T = null;
      }
    };
    d.scope.on();
    const N = d.effect = new eo(R);
    d.scope.off();
    const E = d.update = N.run.bind(N), V = d.job = N.runIfDirty.bind(N);
    V.i = d, V.id = d.uid, N.scheduler = () => zi(V), $t(d, !0), E();
  }, kt = (d, m, b) => {
    m.component = d;
    const T = d.vnode.props;
    d.vnode = m, d.next = null, fc(d, m.props, T, b), gc(d, m.children, b), pt(), Xi(d), ht();
  }, Vt = (d, m, b, T, $, C, F, R, N = !1) => {
    const E = d && d.children, V = d ? d.shapeFlag : 0, D = m.children, { patchFlag: B, shapeFlag: H } = m;
    if (B > 0) {
      if (B & 128) {
        $e(
          E,
          D,
          b,
          T,
          $,
          C,
          F,
          R,
          N
        );
        return;
      } else if (B & 256) {
        Nn(
          E,
          D,
          b,
          T,
          $,
          C,
          F,
          R,
          N
        );
        return;
      }
    }
    H & 8 ? (V & 16 && tn(E, $, C), D !== E && A(b, D)) : V & 16 ? H & 16 ? $e(
      E,
      D,
      b,
      T,
      $,
      C,
      F,
      R,
      N
    ) : tn(E, $, C, !0) : (V & 8 && A(b, ""), H & 16 && S(
      D,
      b,
      T,
      $,
      C,
      F,
      R,
      N
    ));
  }, Nn = (d, m, b, T, $, C, F, R, N) => {
    d = d || Ct, m = m || Ct;
    const E = d.length, V = m.length, D = Math.min(E, V);
    let B;
    for (B = 0; B < D; B++) {
      const H = m[B] = N ? et(m[B]) : We(m[B]);
      _(
        d[B],
        H,
        b,
        null,
        $,
        C,
        F,
        R,
        N
      );
    }
    E > V ? tn(
      d,
      $,
      C,
      !0,
      !1,
      D
    ) : S(
      m,
      b,
      T,
      $,
      C,
      F,
      R,
      N,
      D
    );
  }, $e = (d, m, b, T, $, C, F, R, N) => {
    let E = 0;
    const V = m.length;
    let D = d.length - 1, B = V - 1;
    for (; E <= D && E <= B; ) {
      const H = d[E], Z = m[E] = N ? et(m[E]) : We(m[E]);
      if (on(H, Z))
        _(
          H,
          Z,
          b,
          null,
          $,
          C,
          F,
          R,
          N
        );
      else
        break;
      E++;
    }
    for (; E <= D && E <= B; ) {
      const H = d[D], Z = m[B] = N ? et(m[B]) : We(m[B]);
      if (on(H, Z))
        _(
          H,
          Z,
          b,
          null,
          $,
          C,
          F,
          R,
          N
        );
      else
        break;
      D--, B--;
    }
    if (E > D) {
      if (E <= B) {
        const H = B + 1, Z = H < V ? m[H].el : T;
        for (; E <= B; )
          _(
            null,
            m[E] = N ? et(m[E]) : We(m[E]),
            b,
            Z,
            $,
            C,
            F,
            R,
            N
          ), E++;
      }
    } else if (E > B)
      for (; E <= D; )
        be(d[E], $, C, !0), E++;
    else {
      const H = E, Z = E, ne = /* @__PURE__ */ new Map();
      for (E = Z; E <= B; E++) {
        const _e = m[E] = N ? et(m[E]) : We(m[E]);
        _e.key != null && ne.set(_e.key, E);
      }
      let ee, ce = 0;
      const de = B - Z + 1;
      let Le = !1, Oe = 0;
      const sn = new Array(de);
      for (E = 0; E < de; E++) sn[E] = 0;
      for (E = H; E <= D; E++) {
        const _e = d[E];
        if (ce >= de) {
          be(_e, $, C, !0);
          continue;
        }
        let De;
        if (_e.key != null)
          De = ne.get(_e.key);
        else
          for (ee = Z; ee <= B; ee++)
            if (sn[ee - Z] === 0 && on(_e, m[ee])) {
              De = ee;
              break;
            }
        De === void 0 ? be(_e, $, C, !0) : (sn[De - Z] = E + 1, De >= Oe ? Oe = De : Le = !0, _(
          _e,
          m[De],
          b,
          null,
          $,
          C,
          F,
          R,
          N
        ), ce++);
      }
      const Wi = Le ? bc(sn) : Ct;
      for (ee = Wi.length - 1, E = de - 1; E >= 0; E--) {
        const _e = Z + E, De = m[_e], Hi = m[_e + 1], Gi = _e + 1 < V ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Hi.el || Fo(Hi)
        ) : T;
        sn[E] === 0 ? _(
          null,
          De,
          b,
          Gi,
          $,
          C,
          F,
          R,
          N
        ) : Le && (ee < 0 || E !== Wi[ee] ? _t(De, b, Gi, 2) : ee--);
      }
    }
  }, _t = (d, m, b, T, $ = null) => {
    const { el: C, type: F, transition: R, children: N, shapeFlag: E } = d;
    if (E & 6) {
      _t(d.component.subTree, m, b, T);
      return;
    }
    if (E & 128) {
      d.suspense.move(m, b, T);
      return;
    }
    if (E & 64) {
      F.move(d, m, b, nn);
      return;
    }
    if (F === X) {
      s(C, m, b);
      for (let D = 0; D < N.length; D++)
        _t(N[D], m, b, T);
      s(d.anchor, m, b);
      return;
    }
    if (F === Bs) {
      x(d, m, b);
      return;
    }
    if (T !== 2 && E & 1 && R)
      if (T === 0)
        R.persisted && !C[Os] ? s(C, m, b) : (R.beforeEnter(C), s(C, m, b), we(() => R.enter(C), $));
      else {
        const { leave: D, delayLeave: B, afterLeave: H } = R, Z = () => {
          d.ctx.isUnmounted ? i(C) : s(C, m, b);
        }, ne = () => {
          const ee = C._isLeaving || !!C[Os];
          C._isLeaving && C[Os](
            !0
            /* cancelled */
          ), R.persisted && !ee ? Z() : D(C, () => {
            Z(), H && H();
          });
        };
        B ? B(C, Z, ne) : ne();
      }
    else
      s(C, m, b);
  }, be = (d, m, b, T = !1, $ = !1) => {
    const {
      type: C,
      props: F,
      ref: R,
      children: N,
      dynamicChildren: E,
      shapeFlag: V,
      patchFlag: D,
      dirs: B,
      cacheIndex: H,
      memo: Z
    } = d;
    if ((D === -2 || E && E.hasOnce) && ($ = !1), R != null && (pt(), pn(R, null, b, d, !0), ht()), H != null && (!d.ctx || d.ctx === m) && (m.renderCache[H] = void 0), V & 256) {
      m.ctx.deactivate(d);
      return;
    }
    const ne = V & 1 && B, ee = !hn(d);
    let ce;
    if (ee && (ce = F && F.onVnodeBeforeUnmount) && je(ce, m, d), V & 6)
      Xl(d.component, b, T);
    else {
      if (V & 128) {
        d.suspense.unmount(b, T);
        return;
      }
      ne && zt(d, null, m, "beforeUnmount"), V & 64 ? d.type.remove(
        d,
        m,
        b,
        nn,
        T
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== X || D > 0 && D & 64) ? tn(
        E,
        m,
        b,
        !1,
        !0
      ) : (C === X && D & 384 || !$ && V & 16) && tn(N, m, b), T && Vi(d);
    }
    const de = Z != null && H == null;
    (ee && (ce = F && F.onVnodeUnmounted) || ne || de) && we(() => {
      ce && je(ce, m, d), ne && zt(d, null, m, "unmounted"), de && (d.el = null);
    }, b);
  }, Vi = (d) => {
    const { type: m, el: b, anchor: T, transition: $ } = d;
    if (m === X) {
      Ql(b, T);
      return;
    }
    if (m === Bs) {
      M(d), $ && !$.persisted && $.afterLeave && $.afterLeave();
      return;
    }
    const C = () => {
      i(b), $ && !$.persisted && $.afterLeave && $.afterLeave();
    };
    if (d.shapeFlag & 1 && $ && !$.persisted) {
      const { leave: F, delayLeave: R } = $, N = () => F(b, C);
      R ? R(d.el, C, N) : N();
    } else
      C();
  }, Ql = (d, m) => {
    let b;
    for (; d !== m; )
      b = h(d), i(d), d = b;
    i(m);
  }, Xl = (d, m, b) => {
    const { bum: T, scope: $, job: C, subTree: F, um: R, m: N, a: E } = d;
    rr(N), rr(E), T && Vn(T), $.stop(), C ? (C.flags |= 8, be(F, d, m, b)) : d.vnode.el && F && (F.transition = d.vnode.transition, be(F, d, m, b)), R && we(R, m), we(() => {
      d.isUnmounted = !0;
    }, m);
  }, tn = (d, m, b, T = !1, $ = !1, C = 0) => {
    for (let F = C; F < d.length; F++)
      be(d[F], m, b, T, $);
  }, Rn = (d) => {
    if (d.shapeFlag & 6)
      return Rn(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const m = h(d.anchor || d.el), b = m && m[Za];
    return b ? h(b) : m;
  };
  let Ts = !1;
  const Ui = (d, m, b) => {
    let T;
    d == null ? m._vnode && (be(m._vnode, null, null, !0), T = m._vnode.component) : _(
      m._vnode || null,
      d,
      m,
      null,
      null,
      null,
      b
    ), m._vnode = d, Ts || (Ts = !0, Xi(T), yo(), Ts = !1);
  }, nn = {
    p: _,
    um: be,
    m: _t,
    r: Vi,
    mt: ge,
    mc: S,
    pc: Vt,
    pbc: j,
    n: Rn,
    o: e
  };
  return {
    render: Ui,
    hydrate: void 0,
    createApp: ic(Ui)
  };
}
function js({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function $t({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function vc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function No(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (K(s) && K(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = et(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && No(o, l)), l.type === vs && (l.patchFlag === -1 && (l = i[r] = et(l)), l.el = o.el), l.type === it && !l.el && (l.el = o.el);
    }
}
function bc(e) {
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
function Ro(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ro(t);
}
function rr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Fo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Fo(t.subTree) : null;
}
const Lo = (e) => e.__isSuspense;
function wc(e, t) {
  t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : Ua(e);
}
const X = /* @__PURE__ */ Symbol.for("v-fgt"), vs = /* @__PURE__ */ Symbol.for("v-txt"), it = /* @__PURE__ */ Symbol.for("v-cmt"), Bs = /* @__PURE__ */ Symbol.for("v-stc"), Pt = [];
let ze = null;
function z(e = !1) {
  Pt.push(ze = e ? null : []);
}
function Oo() {
  Pt.pop(), ze = Pt[Pt.length - 1] || null;
}
let bn = 1;
function or(e, t = !1) {
  bn += e, e < 0 && ze && t && (ze.hasOnce = !0);
}
function Do(e) {
  return e.dynamicChildren = bn > 0 ? ze || Ct : null, Oo(), bn > 0 && ze && ze.push(e), e;
}
function I(e, t, n, s, i, r) {
  return Do(
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
  return Do(
    Ce(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function jo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function on(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Bo = ({ key: e }) => e ?? null, Un = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ae(e) || /* @__PURE__ */ ye(e) || te(e) ? { i: Se, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, i = null, r = e === X ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Bo(t),
    ref: t && Un(t),
    scopeId: bo,
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
    ctx: Se
  };
  return l ? (Qn(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= Ae(n) ? 8 : 16), bn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ze && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ze.push(a), a;
}
const Ce = kc;
function kc(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === tc) && (e = it), jo(e)) {
    const l = qt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Qn(l, n), bn > 0 && !r && ze && (l.shapeFlag & 6 ? ze[ze.indexOf(e)] = l : ze.push(l)), l.patchFlag = -2, l;
  }
  if (Nc(e) && (e = e.__vccOpts), t) {
    t = _c(t);
    let { class: l, style: a } = t;
    l && !Ae(l) && (t.class = ae(l)), le(a) && (/* @__PURE__ */ _i(a) && !K(a) && (a = Fe({}, a)), t.style = fs(a));
  }
  const o = Ae(e) ? 1 : Lo(e) ? 128 : xs(e) ? 64 : le(e) ? 4 : te(e) ? 2 : 0;
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
function _c(e) {
  return e ? /* @__PURE__ */ _i(e) || Co(e) ? Fe({}, e) : e : null;
}
function qt(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, c = t ? zc(i || {}, t) : i, A = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Bo(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? K(r) ? r.concat(Un(t)) : [r, Un(t)] : Un(t)
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
    ssContent: e.ssContent && qt(e.ssContent),
    ssFallback: e.ssFallback && qt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && $i(
    A,
    a.clone(A)
  ), A;
}
function Ve(e = " ", t = 0) {
  return Ce(vs, null, e, t);
}
function Y(e = "", t = !1) {
  return t ? (z(), st(it, null, e)) : Ce(it, null, e);
}
function We(e) {
  return e == null || typeof e == "boolean" ? Ce(it) : K(e) ? Ce(
    X,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : jo(e) ? et(e) : Ce(vs, null, String(e));
}
function et(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qt(e);
}
function Qn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (K(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Qn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Co(t) ? t._ctx = Se : i === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (te(t)) {
    if (s & 65) {
      Qn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Se }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Ve(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function zc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = ae([t.class, s.class]));
      else if (i === "style")
        t.style = fs([t.style, s.style]);
      else if (as(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(K(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !cs(i) && (t[i] = o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function je(e, t, n, s = null) {
  Ze(e, t, 7, [
    n,
    s
  ]);
}
const $c = zo();
let Sc = 0;
function Ec(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || $c, r = {
    uid: Sc++,
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
    scope: new fa(
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
    propsOptions: pc(s, i),
    emitsOptions: lc(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: oe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: oe,
    data: oe,
    props: oe,
    attrs: oe,
    slots: oe,
    refs: oe,
    setupState: oe,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = oc.bind(null, r), e.ce && e.ce(r), r;
}
let gt = null;
const Cc = () => gt || Se;
let Xn, wn;
{
  const e = ds(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Xn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => gt = n
  ), wn = t(
    "__VUE_SSR_SETTERS__",
    (n) => kn = n
  );
}
const Ci = (e) => {
  const t = gt;
  return Xn(e), e.scope.on(), () => {
    e.scope.off(), Xn(t);
  };
}, lr = () => {
  gt && gt.scope.off(), Xn(null);
};
function Vo(e) {
  return e.vnode.shapeFlag & 4;
}
let kn = !1;
function Mc(e, t = !1, n = !1) {
  t && wn(t);
  const { props: s, children: i } = e.vnode, r = Vo(e);
  dc(e, s, r, t), mc(e, i, n || t);
  const o = r ? Ic(e, t) : void 0;
  return t && wn(!1), o;
}
function Ic(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, nc);
  const { setup: s } = n;
  if (s) {
    pt();
    const i = e.setupContext = s.length > 1 ? Pc(e) : null, r = Ci(e), o = Mn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Gr(o);
    if (ht(), r(), (l || e.sp) && !hn(e) && qa(e), l) {
      if (o.then(lr, lr), t)
        return o.then((a) => {
          wn(!0);
          try {
            ar(e, a, t);
          } finally {
            wn(!1);
          }
        }).catch((a) => {
          ms(a, e, 0);
        });
      e.asyncDep = o;
    } else
      ar(e, o);
  } else
    Uo(e);
}
function ar(e, t, n) {
  te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) && (e.setupState = ho(t)), Uo(e);
}
function Uo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || It);
}
const Tc = {
  get(e, t) {
    return he(e, "get", ""), e[t];
  }
};
function Pc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Tc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function bs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ho(Pa(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in mn)
        return mn[n](e);
    },
    has(t, n) {
      return n in t || n in mn;
    }
  })) : e.proxy;
}
function Nc(e) {
  return te(e) && "__vccOpts" in e;
}
const G = (e, t) => /* @__PURE__ */ Oa(e, t, kn), Rc = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ui;
const cr = typeof window < "u" && window.trustedTypes;
if (cr)
  try {
    ui = /* @__PURE__ */ cr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Wo = ui ? (e) => ui.createHTML(e) : (e) => e, Fc = "http://www.w3.org/2000/svg", Lc = "http://www.w3.org/1998/Math/MathML", Xe = typeof document < "u" ? document : null, Ar = Xe && /* @__PURE__ */ Xe.createElement("template"), Oc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? Xe.createElementNS(Fc, e) : t === "mathml" ? Xe.createElementNS(Lc, e) : n ? Xe.createElement(e, { is: n }) : Xe.createElement(e);
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
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      Ar.innerHTML = Wo(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ar.content;
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
}, Dc = /* @__PURE__ */ Symbol("_vtc");
function jc(e, t, n) {
  const s = e[Dc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ur = /* @__PURE__ */ Symbol("_vod"), Bc = /* @__PURE__ */ Symbol("_vsh"), Vc = /* @__PURE__ */ Symbol(""), Uc = /(?:^|;)\s*display\s*:/;
function Wc(e, t, n) {
  const s = e.style, i = Ae(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (Ae(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && an(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && an(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null ? Gc(
        e,
        o,
        !Ae(t) && t ? t[o] : void 0,
        l
      ) || an(s, o, l) : an(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[Vc];
      o && (n += ";" + o), s.cssText = n, r = Uc.test(n);
    }
  } else t && e.removeAttribute("style");
  ur in e && (e[ur] = r ? s.display : "", e[Bc] && (s.display = "none"));
}
const Dn = /\s*!important$/;
function an(e, t, n) {
  if (K(n))
    n.forEach((s) => an(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    Dn.test(n) ? e.setProperty(t, n.replace(Dn, ""), "important") : e.setProperty(t, n);
  else {
    const s = Hc(e, t);
    Dn.test(n) ? e.setProperty(
      Ot(s),
      n.replace(Dn, ""),
      "important"
    ) : e[s] = n;
  }
}
const dr = ["Webkit", "Moz", "ms"], Vs = {};
function Hc(e, t) {
  const n = Vs[t];
  if (n)
    return n;
  let s = Pe(t);
  if (s !== "filter" && s in e)
    return Vs[t] = s;
  s = Zr(s);
  for (let i = 0; i < dr.length; i++) {
    const r = dr[i] + s;
    if (r in e)
      return Vs[t] = r;
  }
  return t;
}
function Gc(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ae(s) && n === s;
}
const fr = "http://www.w3.org/1999/xlink";
function pr(e, t, n, s, i, r = ca(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(fr, t.slice(6, t.length)) : e.setAttributeNS(fr, t, n) : n == null || r && !qr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ye(n) ? String(n) : n
  );
}
function hr(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Wo(n) : n);
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
    l === "boolean" ? n = qr(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Et(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Yc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const mr = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, n, s, i = null) {
  const r = e[mr] || (e[mr] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = qc(t);
    if (s) {
      const c = r[t] = eA(
        s,
        i
      );
      Et(e, l, c, a);
    } else o && (Yc(e, l, o, a), r[t] = void 0);
  }
}
const Zc = /(Once|Passive|Capture)$/, Jc = /^on:?(?:Once|Passive|Capture)$/;
function qc(e) {
  let t, n;
  for (; (n = e.match(Zc)) && !Jc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ot(e.slice(2)), t];
}
let Us = 0;
const Qc = /* @__PURE__ */ Promise.resolve(), Xc = () => Us || (Qc.then(() => Us = 0), Us = Date.now());
function eA(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (K(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        r.call(s), s._stopped = !0;
      };
      const o = i.slice(), l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const c = o[a];
        c && Ze(
          c,
          t,
          5,
          l
        );
      }
    } else
      Ze(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Xc(), n;
}
const gr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, tA = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? jc(e, s, o) : t === "style" ? Wc(e, n, s) : as(t) ? cs(t) || Kc(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : nA(e, t, s, o)) ? (hr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && pr(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (sA(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ae(s))) ? hr(e, Pe(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), pr(e, t, s, o));
};
function nA(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gr(t) && te(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return gr(t) && Ae(n) ? !1 : t in e;
}
function sA(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Pe(t);
  return Array.isArray(n) ? n.some((i) => Pe(i) === s) : Object.keys(n).some((i) => Pe(i) === s);
}
const es = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return K(t) ? (n) => Vn(t, n) : t;
};
function iA(e) {
  e.target.composing = !0;
}
function xr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Mt = /* @__PURE__ */ Symbol("_assign"), jn = /* @__PURE__ */ Symbol("_initialValue");
function Ws(e, t, n) {
  return t && (e = e.trim()), n && (e = us(e)), e;
}
const Gt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[jn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[jn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Mt] = es(i);
    const r = s || i.props && i.props.type === "number";
    Et(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Mt](Ws(e.value, n, r));
    }), (n || r) && Et(e, "change", () => {
      e.value = Ws(e.value, n, r);
    }), t || (Et(e, "compositionstart", iA), Et(e, "compositionend", xr), Et(e, "change", xr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", r = e[jn];
    delete e[jn], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Mt](Ws(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, o) {
    if (e[Mt] = es(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? us(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, Ho = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, Et(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? us(ts(a)) : ts(a)
      ), r = e.multiple, o = r ? Nt(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        r,
        r ? K(o) ? i.slice() : i : o
      ];
      try {
        e[Mt](o);
      } finally {
        go(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[Mt] = es(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    yr(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Mt] = es(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !rA(t, n[1], n[0])) && yr(e, t);
  }
};
function rA(e, t, n) {
  if (!n || K(e)) return ft(e, t);
  if (Nt(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function yr(e, t) {
  const n = e.multiple, s = K(t);
  if (!(n && !s && !Nt(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const o = e.options[i], l = ts(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? o.selected = t.some((c) => String(c) === String(l)) : o.selected = da(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (ft(ts(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ts(e) {
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
}, cA = /* @__PURE__ */ Fe({ patchProp: tA }, Oc);
let vr;
function AA() {
  return vr || (vr = xc(cA));
}
const uA = ((...e) => {
  const t = AA().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = fA(s);
    if (!i) return;
    const r = t._component;
    !te(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
  return Ae(e) ? document.querySelector(e) : e;
}
const pA = "zhonglou", hA = "钟楼", mA = "1.3.1", gA = "S", xA = 10, yA = "【副本进行中：钟楼】", vA = [], bA = { briefingName: "钟楼" }, wA = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, kA = { type: "nights", template: "剩余{n}夜" }, _A = "至第四日日出", zA = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], $A = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", SA = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], EA = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], CA = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], MA = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], IA = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], TA = {
  id: pA,
  name: hA,
  version: mA,
  level: gA,
  players: xA,
  token: yA,
  legacyKeys: vA,
  detect: bA,
  time: wA,
  remaining: kA,
  deadline: _A,
  roles: zA,
  rolesNote: $A,
  stateFields: SA,
  phases: EA,
  events: CA,
  docs: MA,
  danmaku: IA
}, PA = "jingjie", NA = "境界游乐园", RA = "1.0.0", FA = "A", LA = "【副本进行中：境界游乐园】", OA = [], DA = { briefingName: "境界游乐园" }, jA = { type: "none" }, BA = { type: "fromPanel" }, VA = [], UA = [], WA = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], HA = {
  id: PA,
  name: NA,
  version: RA,
  level: FA,
  token: LA,
  legacyKeys: OA,
  detect: DA,
  time: jA,
  remaining: BA,
  phases: VA,
  events: UA,
  docs: WA
}, GA = "kaoshi", YA = "考试", KA = "1.1.0", ZA = "A", JA = "【副本进行中：考试】", qA = [], QA = { briefingName: "考试" }, XA = { type: "countdown", minutesPerRound: 3 }, eu = { type: "fromPanel" }, tu = "至考试结束", nu = [{ id: "main", name: "考试", cap: 100, next: null }], su = [], iu = [], ru = {
  id: GA,
  name: YA,
  version: KA,
  level: ZA,
  token: JA,
  legacyKeys: qA,
  detect: QA,
  time: XA,
  remaining: eu,
  deadline: tu,
  phases: nu,
  events: su,
  docs: iu
}, ou = "xiyan", lu = "喜宴", au = "1.1.1", cu = "D", Au = "【副本进行中：喜宴】", uu = [], du = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, fu = { type: "countdown", minutesPerRound: 3 }, pu = { type: "fromPanel" }, hu = "至天亮", mu = [{ id: "main", name: "喜宴", cap: 160, next: null }], gu = [], xu = [], yu = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], vu = {
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
  docs: xu,
  danmaku: yu
}, bu = "youxi", wu = "游戏", ku = "1.1.1", _u = "C", zu = "【副本进行中：游戏】", $u = [], Su = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Eu = { type: "countdown", minutesPerRound: 8 }, Cu = { type: "fromPanel" }, Mu = "至结算", Iu = [{ id: "main", name: "游戏", cap: 90, next: null }], Tu = [], Pu = [], Nu = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], Ru = {
  id: bu,
  name: wu,
  version: ku,
  level: _u,
  token: zu,
  legacyKeys: $u,
  detect: Su,
  time: Eu,
  remaining: Cu,
  deadline: Mu,
  phases: Iu,
  events: Tu,
  docs: Pu,
  danmaku: Nu
}, Fu = "wuming", Lu = "污名", Ou = "1.1.0", Du = "B", ju = "4-8", Bu = "【副本进行中：污名】", Vu = ["污名"], Uu = { briefingName: "污名" }, Wu = { type: "countdown", minutesPerRound: 3 }, Hu = { type: "countdown", template: "剩余{m}分钟" }, Gu = "至收播", Yu = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], Ku = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], Zu = [], Ju = !0, qu = {
  id: Fu,
  name: Lu,
  version: Ou,
  level: Du,
  players: ju,
  token: Bu,
  legacyKeys: Vu,
  detect: Uu,
  time: Wu,
  remaining: Hu,
  deadline: Gu,
  phases: Yu,
  events: Ku,
  docs: Zu,
  disableLive: Ju
}, Qu = "dusongshu", Xu = "杜松树", ed = "1.0.0", td = "A", nd = 6, sd = "【副本进行中：杜松树】", id = [], rd = { briefingName: "杜松树" }, od = { type: "countdown", minutesPerRound: 30 }, ld = { type: "fromPanel" }, ad = "至第四日日出", cd = ["父亲", "继母", "玛琳", "男孩", "其余"], Ad = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", ud = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], dd = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], fd = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], pd = [{ title: "游玩说明", md: `## 副本概况
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
最后一页被撕掉了，装订线上只剩一条不整齐的纸茬。` }], hd = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], md = {
  id: Qu,
  name: Xu,
  version: ed,
  level: td,
  players: nd,
  token: sd,
  legacyKeys: id,
  detect: rd,
  time: od,
  remaining: ld,
  deadline: ad,
  roles: cd,
  rolesNote: Ad,
  phases: ud,
  events: dd,
  stateFields: fd,
  docs: pd,
  danmaku: hd
}, gd = "nongxian", xd = "农闲", yd = "1.0.0", vd = "D", bd = !0, wd = "不限", kd = "【副本进行中：农闲】", _d = [], zd = { briefingName: "农闲" }, $d = { type: "none" }, Sd = { type: "fromPanel" }, Ed = [], Cd = [], Md = [{ title: "游玩说明", md: `## 系统简报

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
梅姨教新菜，会添在配方板上。` }], Id = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], Td = {
  id: gd,
  name: xd,
  version: yd,
  level: vd,
  rest: bd,
  players: wd,
  token: kd,
  legacyKeys: _d,
  detect: zd,
  time: $d,
  remaining: Sd,
  phases: Ed,
  events: Cd,
  docs: Md,
  danmaku: Id
}, Pd = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function Yt(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const Nd = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function br(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(Nd)) {
    const i = Number(s[1]), r = s[2];
    n = !0, r === "天" ? t += i * 1440 : r === "小时" || r === "个小时" || r === "h" || r === "H" ? t += i * 60 : t += i;
  }
  return n ? Math.round(t) : null;
}
function Go(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: br(t), total: n === void 0 ? null : br(n) };
}
function Rd(e, t) {
  return e.phases.find((n) => n.id === t);
}
function _n(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); )
    n.push(i), s.add(i.id), i = Rd(e, i.next);
  return n;
}
function Yo(e, t) {
  return _n(e, t).filter((n) => n.night).length;
}
function Fd(e, t, n) {
  if (_n(e, t).some((i) => i.id === n.id)) return t;
  const s = e.phases[0];
  return s && _n(e, s).some((i) => i.id === n.id) ? s : n;
}
function Hs(e, t, n, s, i) {
  if (!e.phases.length || !e.phases.some((p) => p.id === t.id)) return;
  let r = _n(e, n), o = r.findIndex((p) => p.id === t.id);
  o < 0 && (r = _n(e, t), o = 0);
  const l = r.reduce((p, h) => p + Math.max(0, h.cap), 0), a = Math.max(0, t.cap - s) + r.slice(o + 1).reduce((p, h) => p + Math.max(0, h.cap), 0), c = t.deadline ?? r[0].deadline ?? e.deadline, A = { x: a, y: l, deadline: c };
  if (e.time.type === "countdown") {
    const p = e.time.minutesPerRound, h = e.time.totalMinutes, g = h && h > 0 ? h : l * p;
    let v = h && h > 0 && l > 0 ? Math.round(g * a / l) : a * p;
    const _ = Go(i).remaining;
    _ !== null && (v = Math.min(v, _ - p)), v = Math.max(0, v), Object.assign(A, { minutes: v, total: g, text: `约剩${Yt(v)}/${Yt(g)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) A.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const p = e.remaining.template.replace("{n}", String(Yo(e, t)));
      A.text = c ? `${c}·${p}` : p;
    } else c && (A.text = c);
  return A;
}
const zn = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function Ko(e, t, n = zn) {
  const s = e ?? "", i = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), r = i ? Math.max(1, Number(i[1])) : Math.max(1, Math.round(n[t] ?? zn[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: r };
  const l = Number(o[1]), a = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return a <= 0 ? { rounds: r } : { rounds: r, totalMinutes: a, minutesPerRound: Math.max(1, Math.round(a / r)) };
}
const ns = "generic", di = [TA, HA, ru, vu, Ru, qu, md, Td], Ld = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(Pd)
  }
};
function Od(e, t) {
  const n = Ld[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const Zo = ["D", "C", "B", "A", "S"];
function Jo(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === ns && t.push(`id 不能是保留字 ${ns}`), Zo.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((c) => typeof c != "string")) && t.push("detect.patterns 必须是文本数组");
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
    c.when !== void 0 && typeof c.when != "string" && t.push(`danmaku[${A}].when 必须是文本`), c.scope !== void 0 && typeof c.scope != "string" && t.push(`danmaku[${A}].scope 必须是文本`), c.phase !== void 0 && (!Array.isArray(c.phase) || c.phase.some((p) => typeof p != "string") ? t.push(`danmaku[${A}].phase 必须是文本数组`) : c.phase.forEach((p) => {
      o.size > 0 && !o.has(p) && console.warn(`[rlzc] danmaku[${A}] 的 phase "${p}" 不在阶段表中，已跳过`);
    }));
  }) : t.push("danmaku 必须是数组")), t;
}
function qo(e) {
  return Zo.includes(e.level ?? "") ? e.level : "D";
}
function Qo(e, t = zn) {
  const n = qo(e), s = Ko(e.limit, n, t), i = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, r = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / i)) : void 0;
  return {
    id: ns,
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
function Mi(e) {
  const t = new Set(di.map((n) => n.id));
  return [...di, ...e.filter((n) => !t.has(n.id))];
}
const Dd = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, jd = /<阶段切换>([\s\S]*?)<\/阶段切换>/, Bd = /<副本结算>([\s\S]*?)<\/副本结算>/, Xo = /<副本>([\s\S]*?)<\/副本>/, Vd = /<角色登记>([\s\S]*?)<\/角色登记>/, Ud = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, Wd = /<积分变动>([\s\S]*?)<\/积分变动>/g;
function el(e) {
  const t = Dd.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (o) => {
    const l = new RegExp(`${o}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return l ? l[1].trim() : void 0;
  }, r = i("等级");
  return r && (n.level = r.replace(/级$/, "").trim().toUpperCase()), n.goal = i("目标"), n.limit = i("时限"), n.players = i("人数"), n;
}
function Hd(e) {
  const t = jd.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function tl(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const i = n.slice(0, s).trim(), r = n.slice(s + 1).trim();
    i && (t[i] = r);
  }
  return t;
}
function ws(e) {
  const t = Bd.exec(e ?? "");
  if (!t) return null;
  const n = tl(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function nl(e) {
  const t = Vd.exec(e ?? "");
  if (!t) return null;
  const n = tl(t[1]);
  return Object.keys(n).length ? n : null;
}
function Bn(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function sl(e) {
  const t = Xo.exec(e ?? "");
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
      l === "时限" ? (n.limit = a, s = null) : l === "进度条" ? (n.progressBar = a, s = null) : l === "任务" ? (Bn(a) && n.tasks.push(Bn(a)), s = "tasks") : (n.ps = a, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(r)) {
      s = null;
      continue;
    }
    s === "tasks" ? Bn(r) && n.tasks.push(Bn(r)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${r}` : r);
  }
  return n;
}
function Gd(e) {
  const t = Ud.exec(e ?? "");
  return t ? t[2] : null;
}
function Gs(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (n(i)) return i;
    s.add(i.id), i = i.next ? e.phases.find((r) => r.id === i.next) : void 0;
  }
  return null;
}
function Yd(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const i = (l) => !!l.clock && !l.night;
  let r = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      r = Gs(e, t, i), o = r?.cap ?? 0;
      break;
    case "晚饭":
      r = Gs(e, t, i), r && (o = Math.ceil(r.cap * 0.75), r.id === t.id && o <= n && (o = r.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      r = Gs(e, t, (l) => !!l.night), o = r?.cap ?? 0;
      break;
  }
  return !r || r.id === t.id && o <= n + 1 ? null : { phase: r.id, round: o, label: `${r.name}第${o}轮` };
}
const Kd = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Zd(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function Ys(e, t) {
  const n = Zd(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const Ks = /* @__PURE__ */ new Map();
function Jd(e, t) {
  const n = `${e}\0${t}`;
  if (!Ks.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (i) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, i);
    }
    Ks.set(n, s);
  }
  return Ks.get(n);
}
function qd(e, t) {
  const n = String(e ?? ""), s = (l, a) => l ? { signal: a, pack: l, info: { name: l.name, level: l.level } } : null, i = el(n);
  if (i)
    return { signal: 1, pack: t.find((a) => a.detect.briefingName === i.name), info: i };
  const r = Xo.exec(n);
  if (r) {
    const l = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(r[1]), a = l && s(Ys(t, l[1]), 2);
    if (a) return a;
  }
  for (const l of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const a = s(Ys(t, l[1]), 3);
    if (a) return a;
  }
  const o = Kd.exec(n);
  if (o) {
    for (const l of o[1].split(`
`))
      if (l.includes("地点"))
        for (const a of l.matchAll(/副本《([^》]+)》/g)) {
          const c = s(Ys(t, a[1]), 4);
          if (c) return c;
        }
  }
  for (const l of t)
    for (const a of l.detect.patterns ?? []) {
      const c = Jd(l.id, a);
      if (c && c.test(n)) return s(l, 5);
    }
  return null;
}
const wr = 5, Qd = { id: "_open", name: "进行中", cap: 0, next: null };
function Re(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function Xd(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function il(e, t, n) {
  const s = Xd(e) + Math.max(0, n - 1) * t, i = Math.floor(s / 60) % 24, r = (s % 60 + 60) % 60;
  return `${i % 12 === 0 ? 12 : i % 12}:${String(r).padStart(2, "0")}`;
}
function kr(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return il(e.time.dayStart, e.time.minutesPerRound, n);
}
function rl(e) {
  return e.phases.length ? e.phases : [Qd];
}
function Wn(e, t) {
  return rl(e).find((n) => n.id === t);
}
function _r(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (i.id === n) return !0;
    s.add(i.id), i = Wn(e, i.next);
  }
  return !1;
}
function zr(e, t, n, s) {
  const i = n + 1, r = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > i) {
      let l = r.map((c, A) => ({ e: c, i: A })).filter(({ e: c }) => c.from >= i && c.from <= o).sort((c, A) => c.e.from - A.e.from || c.i - A.i).map(({ e: c }) => c), a = o;
      return l.length > wr && (a = l[wr - 1].from, l = l.filter((c) => c.from <= a)), { phase: t, round: a, events: l, skipFrom: i };
    }
  }
  return { phase: t, round: i, events: r.filter((o) => o.from === i) };
}
function ef(e, t, n) {
  const s = t.entryIndex;
  if (!Re(e[s])) return null;
  const i = rl(n);
  let r = i[0], o = i[0], l = 0, a, c = !1, A, p, h = null, g, v, _;
  const P = /* @__PURE__ */ new Set(), w = {}, y = /* @__PURE__ */ new Map();
  for (const re of t.manual ?? [])
    y.has(re.atIndex) || y.set(re.atIndex, []), y.get(re.atIndex).push(re);
  const x = (re) => {
    n.phases.length && (o = Fd(n, o, re)), r = re, l = 0, h && !_r(n, r, h.phase) && (h = null);
  };
  for (let re = s; re < e.length; re++) {
    const Te = e[re];
    if (!c && Re(Te)) {
      const ge = zr(n, r, l, h);
      l = ge.round;
      const bt = new Set((Te.extra?.rlzc?.skippedEvents ?? []).map(($e) => $e.id));
      ge.events.forEach(($e) => {
        bt.has($e.id) || P.add($e.id);
      }), w[re] = {
        phase: r.id,
        round: l,
        events: ge.events.map(($e) => $e.id),
        skipFrom: ge.skipFrom,
        limit: Hs(n, r, o, l, a)
      }, h && r.id === h.phase && l >= h.round && (h = null);
      const wt = String(Te.mes ?? ""), kt = sl(wt);
      kt && (v = kt), a = kt?.limit;
      const Vt = nl(wt);
      Vt && (_ = Vt);
      const Nn = ws(wt);
      if (Nn)
        c = !0, A = "tag", p = re, g = Nn;
      else {
        const $e = Hd(wt), _t = $e ? i.find((be) => be.name === $e) : void 0;
        if (_t && n.phases.length)
          x(_t);
        else if (r.cap > 0 && l >= r.cap && r.next) {
          const be = Wn(n, r.next);
          be && x(be);
        }
      }
    }
    for (const ge of y.get(re) ?? []) {
      if (c) break;
      switch (ge.kind) {
        case "skip": {
          h = Wn(n, ge.targetPhase) && _r(n, r, ge.targetPhase) ? { phase: ge.targetPhase, round: ge.targetRound } : null;
          break;
        }
        case "setPhase": {
          const bt = Wn(n, ge.phase);
          bt && (h = null, x(bt));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(ge.round)), h = null;
          break;
        case "end":
          c = !0, A = "manual", p = re;
          break;
      }
    }
  }
  const M = c ? null : zr(n, r, l, h), U = M ? M.round : l + 1, q = r.cap > 0, W = n.events.filter((re) => P.has(re.id)).map((re) => re.id), S = c ? void 0 : Hs(n, r, o, U, a), k = c ? void 0 : Hs(n, r, o, l);
  let j;
  const ve = n.remaining;
  return !c && ve.type === "nights" && n.phases.length && !r.byTag && !r.frozen ? j = ve.template.replace("{n}", String(Yo(n, r))) : !c && ve.type === "countdown" && S?.minutes !== void 0 && (j = ve.template.replace("{m}", String(S.minutes))), {
    phase: r,
    round: l,
    nextRound: U,
    clock: c ? void 0 : kr(n, r, U),
    currentClock: kr(n, r, l),
    remainingText: j,
    limit: S,
    roundsLeft: k ? { x: k.x, y: k.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: c,
    endedBy: A,
    endIndex: p,
    firedEvents: W,
    warn: !c && q && U >= r.cap - 2,
    isLastRound: !c && q && U === r.cap,
    overdue: !c && q && !r.next && U > r.cap,
    next: M,
    skipGoal: h,
    settlement: g,
    panel: v,
    rolesFromChat: _,
    perMessage: w,
    entryIndex: s
  };
}
const ol = "rlzc_token", ll = "rlzc_progress", al = "rlzc_turn", cl = "rlzc_state", Al = "rlzc_ledger", tf = [ol, ll, al, cl, Al], $n = { token: "", progress: "", turn: "", injected: [] };
function nf(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ss(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const i = new RegExp(`(?<!\\{)\\{(${s.map(nf).join("|")})\\}(?!\\})`, "g");
  return e.replace(i, (r, o) => n?.[o]?.trim() || o);
}
function sf(e, t) {
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
function $r(e, t, n, s = !1) {
  let i = ss(e.text, t, n);
  return e.to > e.from && (i = `在本阶段第${e.from}到${e.to}轮之间发生：${i}`), e.if && !s && (i += `（条件：${ss(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${i}`;
}
function rf(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function of(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...$n, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return $n;
  const i = s.roles, r = e.phases.length > 0, o = t.next, l = [`副本：${e.name}（${e.level}级）`], a = t.limit;
  if (r)
    l.push(`阶段：${t.phase.name}`), l.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), a && l.push(`剩余${a.x}/${a.y}轮`), t.clock && l.push(`钟时：${t.clock}`), a?.text && l.push(`时限：${a.text}`), e.remaining.type === "countdown" && t.remainingText && l.push(t.remainingText), a?.deadline && !a.text?.includes(a.deadline) && l.push(`截止：${a.deadline}`);
  else {
    l.push(`本轮：第${t.nextRound}轮`), t.clock && l.push(`钟时：${t.clock}`);
    const x = s.panelLimit || s.briefing?.limit;
    x && l.push(`时限：${x}`);
  }
  const c = ["［副本进度·仅供AI］", l.join("　")];
  if (s.briefing?.goal && (!r || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const x = e.roles.filter((M) => i?.[M]);
    c.push(
      x.length ? `角色登记：${e.roles.map((M) => `${M}=${i?.[M] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const A = sf(e, t.firedEvents);
  A && c.push(`已发生事件：${A}`);
  const p = [];
  o.skipFrom !== void 0 && p.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const h = new Map((s.subNext ?? []).map((x) => [x.id, x])), g = o.events.filter((x) => x.if && h.get(x.id)?.ok === !1).map((x) => ({ id: x.id, reason: h.get(x.id).reason })), v = o.events.filter((x) => !g.some((M) => M.id === x.id)), _ = (x) => !!x.if && h.get(x.id)?.ok === !0, P = v.filter((x) => x.kind === "event"), w = v.filter((x) => x.kind === "directive");
  if (P.length && (p.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), P.forEach((x) => p.push($r(x, e, i, _(x))))), w.length && (p.push("本轮写作要求："), w.forEach((x) => p.push($r(x, e, i, _(x))))), t.isLastRound ? p.push(rf(t)) : t.overdue && p.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && p.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && p.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((x) => i?.[x])) {
    let x = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((M) => `${M}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (x += "死者不得是{{user}}或其同伴。"), p.push(x);
  }
  let y;
  return a?.text && (a.minutes !== void 0 ? (p.push(
    `本轮<副本>的时限一栏写：${a.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), y = { text: a.text, minutes: a.minutes, total: a.total }) : (p.push(`本轮<副本>的时限一栏写：${a.text}（照抄）。`), y = { text: a.text })), {
    token: e.token,
    progress: c.join(`
`),
    turn: p.length ? ["［本轮指令·仅供AI］", ...p].join(`
`) : "",
    injected: v.map((x) => x.id),
    limit: y,
    skipped: g.length ? g : void 0,
    state: s.stateText || void 0
  };
}
const lf = 1, af = 0;
function ue() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function cf() {
  const e = ue();
  return e.eventTypes ?? e.event_types ?? {};
}
function lt(e, t) {
  const n = cf()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  ue().eventSource.on(n, t);
}
function J() {
  return ue().chat ?? [];
}
function ks() {
  const e = ue();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function yt() {
  return ue().chatMetadata ?? {};
}
function rt() {
  const e = ue();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Ht(e, t, n, s) {
  ue().setExtensionPrompt(e, t, lf, n, s, af);
}
function Ie(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function vt(e) {
  const t = ue();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function Sr(e, t = "") {
  const n = ue();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const i = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof i == "string" ? i : null;
  }
  return window.prompt(e, t);
}
async function ul(e, t) {
  const n = ue(), s = document.createElement("div"), i = document.createElement("div");
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
const Rt = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function dl(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function Af(e, t = Rt) {
  return t.length ? e.replace(dl(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function fl(e, t = Rt, n = !1) {
  const s = J()[e];
  if (!s || s.is_user) return;
  const i = String(s.extra?.display_text ?? s.mes ?? "");
  if (!dl(n ? Rt : t, "").test(i)) return;
  const r = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!r) return;
  const o = ue().messageFormatting;
  if (typeof o != "function") return;
  const l = o(Af(i, t), s.name ?? "", !!s.is_system, !1, e);
  r.innerHTML !== l && (r.innerHTML = l);
}
function uf(e = Rt, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && fl(s, e, t);
  });
}
const df = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function pl(e) {
  return e.stateFields?.length ? e.stateFields : [df];
}
const ff = [...Rt, "状态栏"], pf = new RegExp(`<(${ff.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function hl(e) {
  return String(e ?? "").replace(pf, "").replace(/\n{3,}/g, `

`).trim();
}
function hf(e) {
  const n = [
    "你是角色扮演副本的记录员，不写剧情，只整理事实。",
    "根据本轮正文完成三件事：",
    "1. 事件核对：逐条判断「本轮后台事件」在正文里是 done（已发生）、missed（该发生但没写出来）还是 void（条件已不成立，不该发生），各附一句理由。后台事件即使{{user}}看不到，只要正文与之不矛盾、且没有写出相反的事实，就算 done。标明「第X到Y轮之间」的事件不一定在本轮写出：本轮没写到、也没写出相反的事实，同样算 done。",
    "2. 隐藏状态：在「上一轮状态」的基础上更新下列字段，只依据正文里已经发生的事实，没有变化就照抄上一轮：",
    ...pl(e.pack).map((l) => `   - ${l.key}（${l.label}）：${l.hint}`),
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
${hl(e.text)}`
  ].join(`

`);
  return { system: n, user: o };
}
function mf(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class cn extends Error {
}
function gf(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), i = t.lastIndexOf("}");
  if (s < 0 || i <= s) throw new cn("返回里没有 JSON");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new cn("返回的 JSON 无法解析");
  }
  if (!r || typeof r != "object" || Array.isArray(r)) throw new cn("返回的不是 JSON 对象");
  if (!r.state || typeof r.state != "object" || Array.isArray(r.state)) throw new cn("缺少 state");
  const o = ["done", "missed", "void"], l = (Array.isArray(r.events) ? r.events : []).filter((p) => p && typeof p.id == "string" && o.includes(p.status)).map((p) => ({ id: p.id, status: p.status, reason: String(p.reason ?? "") })), a = (Array.isArray(r.next) ? r.next : []).filter((p) => p && typeof p.id == "string" && typeof p.ok == "boolean").map((p) => ({ id: p.id, ok: p.ok, reason: String(p.reason ?? "") })), c = { events: l, state: r.state, next: a }, A = typeof r.hype == "number" ? r.hype : typeof r.hype == "string" && r.hype.trim() !== "" ? Number(r.hype) : NaN;
  return Number.isFinite(A) && (c.hype = Math.max(0, Math.min(100, Math.round(A)))), typeof r.hurt == "boolean" ? c.hurt = r.hurt : (r.hurt === "true" || r.hurt === "false") && (c.hurt = r.hurt === "true"), c;
}
function xf(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function yf(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((i) => String(i ?? "")).join("|");
  return `${e}:${t}:${s}:${xf(String(n?.mes ?? ""))}`;
}
function vf(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function bf(e, t, n = 2) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return gf(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
class ml extends Error {
}
function gl(e) {
  if (e instanceof ml) return "超时";
  if (e instanceof cn) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function xl(e) {
  return e?.extra?.rlzc;
}
function _s(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Re(s)) continue;
    const i = xl(s)?.sub;
    if (i?.state && !i.skipped) return { index: n, state: i.state };
  }
  return null;
}
function wf(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Re(s)) continue;
    const i = xl(s)?.sub;
    return i && !i.skipped && Array.isArray(i.next) ? i.next : void 0;
  }
}
function is(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => is(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${is(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function yl(e, t) {
  const n = pl(e), s = new Set(n.map((r) => r.key)), i = n.filter((r) => t[r.key] !== void 0).map((r) => `${r.label}：${is(t[r.key])}`);
  for (const [r, o] of Object.entries(t)) s.has(r) || i.push(`${r}：${is(o)}`);
  return i.length ? ["［副本状态·仅供AI］", ...i].join(`
`) : "";
}
const kf = 1500;
function vl() {
  return ue().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function bl(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function wl(e, t) {
  const n = new AbortController();
  let s;
  const i = new Promise((r, o) => {
    s = setTimeout(() => {
      n.abort(), o(new ml(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), i]);
  } finally {
    clearTimeout(s);
  }
}
function kl(e, t) {
  const n = t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : "") ?? "", s = new Error(`${e || ""} ${n}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return s.status = e, s;
}
async function _l(e, t, n, s = kf) {
  const i = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: vl(),
    signal: n,
    body: JSON.stringify({
      ...bl(e),
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
  if (!i.ok || o?.error) throw kl(i.status === 200 ? 0 : i.status, o);
  const l = o?.choices?.[0]?.message?.content ?? o?.choices?.[0]?.text ?? o?.content;
  if (typeof l != "string") throw new Error("返回里没有正文");
  return l;
}
async function _f(e) {
  const t = ue();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function zf(e, t) {
  return wl(e.timeoutMs, (n) => {
    if (e.source === "main") return _f(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return _l(e.preset, t, n);
  });
}
async function zl(e) {
  const t = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: vl(),
    body: JSON.stringify(bl(e))
  }), n = await t.json().catch(() => null);
  if (!t.ok || n?.error) throw kl(t.status, n);
  return (Array.isArray(n) ? n : Array.isArray(n?.data) ? n.data : Array.isArray(n?.models) ? n.models : []).map((i) => typeof i == "string" ? i : i?.id ?? i?.name).filter(Boolean).sort();
}
async function $f(e, t) {
  const n = await zl(e).catch(() => []), s = { ...e, model: e.model || n[0] || "" }, i = await wl(
    t,
    (r) => _l(s, { system: "只回复 OK。", user: "ping" }, r, 5)
  );
  return { models: n, reply: i };
}
const $l = "rlzc_ledger", Dt = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, Sf = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function Ef(e) {
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
function Qt(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), i = String(t.getHours()).padStart(2, "0"), r = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${i}:${r}`;
}
function Ii(e) {
  const t = /等级[：:]\s*([DCBAS])/.exec(e);
  return t ? t[1] : null;
}
function Sl(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function Cf(e, t, n, s, i, r = "") {
  const o = n.结果 ?? "", l = (n.评价 ?? "").toUpperCase().trim(), a = ["D", "C", "B", "A", "S"].includes(l) ? l : null, c = o === "通关" || o === "成功" || o === "胜利", A = o === "失败", p = o === "死亡" || o === "阵亡";
  if (!c && !A && !p)
    return { delta: 0, source: "" };
  if (p)
    return { delta: 0, source: "" };
  if (A)
    return i ? { delta: 0, source: "清算未通关" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣除30%" };
  if (i) {
    const y = Dt[t] + 500;
    return { delta: Math.max(0, y - s), source: "清算通关·续存至斩杀线+500", clearWin: !0 };
  }
  if (!a)
    return { delta: 0, source: "", warn: "评价缺失或无法识别，不发奖励" };
  let h = Sf[e][a];
  const g = r || e, v = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", _ = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", P = e !== t;
  let w = `副本奖励·${g} ${a}评`;
  return v ? (h = Math.floor(h * 0.5), w += "（×50%）") : (_ || P) && (h = Math.floor(h * 0.6), w += "（×60%）"), { delta: h, source: w };
}
function Xt(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function In(e, t, n) {
  let s = e, i = !1;
  for (const r of t)
    s += r.delta, s < n && (i = !0), r.clear && (i = !1);
  return i;
}
function Mf(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function If(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const i = s ?? Dt[n], r = Math.max(0, i - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${r}分（${n}级斩杀线${i}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const dt = "rlzc";
function Tf() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function Pf(e, t, n) {
  return {
    id: Tf(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function Nf(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function Rf(e, t) {
  return e.packId === ns ? e.briefing ? Qo(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function Ff(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return Re(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function Lf(e, t) {
  const n = Ff(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((i) => ({ ...i, atIndex: i.atIndex + s }))), t.manual = t.manual.filter((i) => i.atIndex < e.length && i.atIndex >= t.entryIndex), !0;
}
function El(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Er = "rlzc_declined";
function Ti(e, t) {
  return `${e}:${t}`;
}
const Cl = Re;
function zs(e, t, n) {
  if (!Cl(e[t])) return null;
  const s = qd(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function Of(e, t, n, s, i = []) {
  for (let r = Math.max(0, n); r <= Math.min(s, e.length - 1); r++) {
    const o = zs(e, r, t);
    if (o && !i.includes(Ti(r, o.info.name))) return o;
  }
  return null;
}
function Df(e, t, n = [], s = di, i = 0) {
  if (t?.status === "active") return null;
  let r = -1;
  for (let l = Math.max(0, i); l < e.length; l++) if (Cl(e[l])) {
    r = l;
    break;
  }
  if (r < 0 || t && t.entryIndex === r) return null;
  const o = zs(e, r, s);
  return !o || n.includes(Ti(r, o.info.name)) ? null : o;
}
const jf = /[■█▰●◆★▮▓]/g, Bf = /[□░▱○◇☆▯▒]/g;
function Vf(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const r = Number(n[2]);
    return r === 100 ? Number(n[1]) : r > 0 ? Math.round(Number(n[1]) / r * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(jf) ?? []).length, i = (t.match(Bf) ?? []).length;
  return s + i > 0 ? Math.round(s / (s + i) * 100) : null;
}
function Cr(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function Uf(e, t) {
  return Cr(e).includes(Cr(t));
}
function Wf(e, t, n) {
  const s = [], i = Object.keys(n.perMessage).map(Number).sort((a, c) => a - c);
  let r = !1, o = null, l = !1;
  for (const a of i) {
    const c = n.perMessage[a], p = t.phases.find((x) => x.id === c.phase)?.name ?? "进行中", h = (x, M) => s.push({ index: a, phase: p, round: c.round, kind: x, text: M }), g = e[a]?.extra?.rlzc;
    for (const x of g?.sub?.events ?? []) x.status === "missed" && h("eventMissed", `${x.id} 未写出来：${x.reason}`);
    for (const x of g?.skippedEvents ?? []) h("eventSkipped", `${x.id} 条件不成立，已跳过：${x.reason}`);
    const v = sl(String(e[a]?.mes ?? "")), _ = a === n.entryIndex;
    if (!v) {
      _ || h("missing", "本轮回复缺少 <副本> 面板"), l = !_;
      continue;
    }
    l = !1;
    const P = Vf(v.progressBar);
    v.progressBar === void 0 ? h("progressUnreadable", "<副本> 中没有进度条一栏") : P === null ? h("progressUnreadable", `进度条无法读出数值：「${v.progressBar}」`) : (!r && P !== 0 && h("progressStart", `入场后第一轮的进度条应为0，实际为 ${P}`), (P < 0 || P > 100) && h("progressRange", `进度条数值 ${P} 超出 0–100`), o !== null && P < o && h("progressDrop", `进度条比上一轮低：${o} → ${P}`), o = P), r = !0;
    const w = e[a]?.extra?.rlzc?.limit, y = w?.text ? w : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (y) {
      const x = v.limit;
      if (y.minutes !== void 0) {
        const M = Go(x);
        !x || M.remaining === null || M.total === null ? h("limit", `时限读不到「剩余时间/总时长」：写的是「${x ?? "（没有时限一栏）"}」，注入的是「${y.text}」`) : (M.remaining > y.minutes && h("limit", `剩余时间比注入值多：写的是${Yt(M.remaining)}，注入的是${Yt(y.minutes)}`), y.total !== void 0 && M.total !== y.total && h("limit", `总时长与注入值不一致：写的是${Yt(M.total)}，注入的是${Yt(y.total)}`));
      } else (!x || !Uf(x, y.text)) && h("limit", `时限与注入文字不一致：写的是「${x ?? "（没有时限一栏）"}」，注入的是「${y.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: r };
}
const Hf = {
  D: 2e3,
  C: 8e3,
  B: 3e4,
  A: 1e5,
  S: 3e5
}, Gf = [
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
function Ml(e) {
  return Gf.some((t) => e.includes(t));
}
function Yf(e) {
  if (e.subHype !== void 0)
    return Math.max(0, Math.min(100, Math.round(e.subHype)));
  const t = e.subHurt !== void 0 ? e.subHurt : e.bodyText ? Ml(e.bodyText) : !1;
  let n = 20;
  return e.hasEvents && (n += 20), e.hasPhaseSwitch && (n += 20), t && (n += 30), Math.min(100, n);
}
function Kf(e, t) {
  return Math.round(e * 0.6 + t * 0.4);
}
function Pi(e) {
  const t = !e.packLevel || e.isRest ? e.playerLevel : e.packLevel, n = Hf[t], s = !e.packLevel || e.isRest ? 0.3 : 1;
  return Math.round(n * s * (0.5 + e.heat / 100) * e.rand);
}
const Zf = [10, 20, 50, 100, 200, 500, 1e3], Jf = [20, 25, 15, 20, 10, 8, 2], qf = [15, 20, 15, 20, 10, 16, 4];
function Qf(e, t, n) {
  const s = t.reduce((r, o) => r + o, 0);
  let i = n * s;
  for (let r = 0; r < e.length; r++)
    if (i -= t[r], i <= 0) return e[r];
  return e[e.length - 1];
}
function Xf(e) {
  const { hype: t, isCorr: n, rand: s, names: i } = e, r = t / 40, o = [], l = [], a = t >= 70 ? qf : Jf;
  for (let h = 1; h <= 3; h++) {
    const g = Math.min(1, Math.max(0, r - (h - 1)));
    if (s() < g) {
      let v = Qf(Zf, a, s());
      n && (v = Math.max(10, Math.round(v * 0.3 / 10) * 10)), o.push(v), l.push(i[Math.floor(s() * i.length)] ?? "匿名");
    }
  }
  const c = o.reduce((h, g) => h + g, 0), A = Math.floor(c * 0.6);
  let p = "";
  return o.length === 1 ? p = `直播打赏${o[0]}×60%` : o.length > 1 && (p = `直播打赏${o.length}笔·共${c}×60%`), { count: o.length, totalFace: c, faces: o, netTotal: A, source: p, names: l };
}
function Zs(e, t, n, s, i, r, o) {
  const l = t && !n;
  return !(e.scope === "inst" && !l || e.scope === "corr" && l || e.when === "hurt" && !s || e.when === "calm" && i >= 30 || e.when === "open" && !r || e.when === "end" && !o);
}
function ep(e) {
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
    recentTexts: p,
    names: h,
    whoNames: g,
    rand: v
  } = e, _ = 5 + Math.floor(v() * 4), P = [], w = new Set(p), y = t.filter(
    (S) => Zs(S, r, o, l, a, c, A)
  ), M = g.length > 0 ? n.filter(
    (S) => Zs(S, r, o, l, a, c, A)
  ) : [], U = s.filter((S) => Zs(S, r, o, l, a, c, A) ? S.phase && S.phase.length > 0 && i ? S.phase.includes(i) : !0 : !1), q = () => h[Math.floor(v() * h.length)] ?? "匿名", W = () => g[Math.floor(v() * g.length)] ?? "";
  for (let S = 0; S < _ * 5 && P.length < _; S++) {
    let k = "", j = "discuss";
    if (U.length > 0 && v() < 0.3) {
      const re = U[Math.floor(v() * U.length)];
      k = re.text, j = re.type;
    } else if (M.length > 0 && v() < 0.5) {
      const Te = M[Math.floor(v() * M.length)];
      k = Te.text.replace("{who}", W()), j = Te.type;
    } else if (y.length > 0) {
      const Te = y[Math.floor(v() * y.length)];
      k = Te.text, j = Te.type;
    }
    !k || w.has(k) || (w.add(k), P.push({ name: q(), text: k, type: j }));
  }
  return P;
}
const Il = "rlzc_live", tp = "本局直播打赏撤回", Tl = 20, Ft = {
  corridorOn: "回廊直播开始。",
  corridorOff: "已下播。",
  enterOff: "进入副本，回廊直播已结束。",
  instanceOn: "本局副本直播开始。",
  instanceOff: "副本结束，直播已下播。",
  revoke: "主播在副本中死亡，本局打赏已全部撤回。"
};
function np(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.corridor ?? {};
  return {
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0,
    corridor: { on: !!n.on, show: typeof n.show == "string" ? n.show : "", viewers: Number.isFinite(n.viewers) ? n.viewers : void 0 },
    sys: Array.isArray(t.sys) ? t.sys.filter((s) => s && typeof s.id == "number") : []
  };
}
function Pl(e, t) {
  return e.disableLive ? { show: !1, checked: !1 } : { show: !0, checked: !!t };
}
function Tn(e) {
  const t = e?.extra?.rlzc?.live;
  return t && typeof t.show == "string" && Array.isArray(t.feed) ? t : void 0;
}
function Ni(e, t, n = e.length) {
  const s = [];
  for (let i = 0; i < Math.min(n, e.length); i++) {
    const r = e[i];
    if (!r || r.is_user) continue;
    const o = Tn(r);
    o && o.show === t && s.push({ index: i, rec: o });
  }
  return s;
}
function Nl(e, t) {
  return Ni(e, t).reduce((n, { rec: s }) => n + (s.tipNet || 0) - (s.revoke || 0), 0);
}
function Rl(e, t) {
  let n = t.seq;
  for (const s of t.sys) n = Math.max(n, s.id);
  for (const s of e) for (const i of Tn(s)?.feed ?? []) n = Math.max(n, i.id);
  return n;
}
function sp(e, t = 30) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const i = Tn(e[s])?.feed ?? [];
    for (let r = i.length - 1; r >= 0 && n.length < t; r--) i[r].t === "msg" && n.push(i[r].text);
  }
  return n;
}
const Fl = /<状态栏>([\s\S]*?)<\/状态栏>/, ip = /^(积分|位格|道具|在场)$/, rp = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;
function op(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const i = Fl.exec(s.mes);
    if (i) return i[1];
  }
  return null;
}
function Ri(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const i = Fl.exec(s.mes);
    if (!i) continue;
    const r = /等级[：:]\s*([DCBAS])/.exec(i[1]);
    if (r) return r[1];
  }
  return "D";
}
function lp(e, t = "") {
  if (!e) return [];
  const n = [];
  let s = null;
  for (const r of e.split(`
`)) {
    const o = r.trim();
    if (!o || /^[━─—=\-]{3,}$/.test(o)) continue;
    const l = rp.exec(o);
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
    if (o === 0 && [...r.keys].some((a) => ip.test(a))) return;
    const l = r.name.replace(/[（(][\s\S]*$/, "").trim();
    !l || /^(陌生|路人)/.test(l) || l === "{{user}}" || t && l === t || i.includes(l) || i.push(l);
  }), i;
}
function ap(e) {
  const { rand: t } = e, n = hl(e.text), s = e.sub?.hurt !== void 0 ? e.sub.hurt : Ml(n), i = Yf({ subHype: e.sub?.hype, subHurt: s, hasEvents: e.hasEvents, hasPhaseSwitch: e.hasPhaseSwitch, bodyText: n }), r = Kf(e.prevHeat ?? Tl, i), o = e.scope === "corridor" || e.isRest, l = Pi({
    packLevel: e.scope === "instance" ? e.packLevel : null,
    playerLevel: e.playerLevel,
    isRest: e.isRest,
    heat: r,
    rand: 0.9 + t() * 0.2
  }), a = ep({
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
  }), c = Xf({ hype: i, isCorr: o, rand: t, names: e.names }), A = [...a, ...e.extraDanmaku ?? []].map((v) => ({ t: "msg", name: v.name, text: v.text, amount: 0, net: 0 }));
  for (let v = A.length - 1; v > 0; v--) {
    const _ = Math.floor(t() * (v + 1));
    [A[v], A[_]] = [A[_], A[v]];
  }
  c.faces.forEach((v, _) => {
    const P = A.length ? 1 + Math.floor(t() * A.length) : 0;
    A.splice(Math.min(P, A.length), 0, { t: "tip", name: c.names[_], text: "", amount: v, net: Math.floor(v * 0.6) });
  });
  let p;
  e.settle && (e.settle.died && (p = e.settle.tipsBefore + c.netTotal, p > 0 ? A.push({ t: "sys", name: "", text: Ft.revoke, amount: 0, net: -p }) : p = void 0), A.push({ t: "sys", name: "", text: Ft.instanceOff, amount: 0, net: 0 }));
  const h = A.map((v, _) => ({ id: e.firstId + _, ...v })), g = {
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
  return p && (g.revoke = p), g;
}
function cp(e, t) {
  if (!e) return [];
  const n = [];
  return e.tipNet > 0 && n.push({ delta: e.tipNet, source: e.tipSource, type: "tip", at: t }), e.revoke && e.revoke > 0 && n.push({ delta: -e.revoke, source: tp, type: "tip", at: t }), n;
}
function Ap(e) {
  return `其中本局直播打赏${e}分，副本内不可使用，离开副本后可用。`;
}
function up(e, t) {
  return e && `${e}${e.endsWith("。") ? "" : "。"}${Ap(t)}`;
}
function dp(e, t, n) {
  const s = Ni(e, n), i = [];
  for (const { rec: r } of s) i.push(...r.feed);
  for (const r of t.sys) r.show === n && i.push({ id: r.id, t: r.t, name: r.name, text: r.text, amount: r.amount, net: r.net });
  return i.sort((r, o) => r.id - o.id), { items: i, last: s[s.length - 1]?.rec };
}
function fp(e, t) {
  let n = "", s = -1;
  for (const i of t.sys) i.id > s && (s = i.id, n = i.show);
  for (const i of e) {
    const r = Tn(i);
    if (r)
      for (const o of r.feed) o.id > s && (s = o.id, n = r.show);
  }
  return n;
}
function pp(e, t, n, s = /* @__PURE__ */ new Set()) {
  const i = n.inInstance ? "instance" : "corridor", r = n.inInstance ? n.instanceLive : t.corridor.on, o = n.inInstance ? n.instanceLive ? n.instanceShow ?? "" : "" : r ? t.corridor.show : fp(e, t), l = { on: r, canToggle: !n.inInstance, scope: i, viewers: 0, heat: 0, tipTotal: 0, injectToAI: n.injectToAI, feed: [], lastTip: null };
  if (!o) return l;
  const { items: a, last: c } = dp(e, t, o), A = a.filter((g) => !s.has(g.id));
  let p = 0, h = null;
  for (const g of A)
    p += g.net, g.t === "tip" && (h = { id: g.id, net: g.net });
  return {
    ...l,
    viewers: r ? c?.viewers ?? n.startViewers ?? 0 : 0,
    heat: r ? c?.heat ?? Tl : 0,
    tipTotal: p,
    feed: A.slice(-60),
    lastTip: h
  };
}
const hp = ["小满", "好运来", "路过的D级", "一个路过的A级", "数据党", "理性讨论", "吃瓜", "夜班保安", "柠檬汁", "阿柒", "东区卖菜的", "西区摆摊的", "情报社小号", "失眠第三天", "房租交不起", "今天也在种土豆", "匿名", "光幕前的咸鱼", "刚通关的C级", "排行榜第九十九", "不想进本", "炸鱼被抓过", "黑市常客", "训练场打卡人", "药剂站熬夜班", "公会跑腿的", "一个路人", "今日份幸运", "积分快见底", "刚升B级", "看录像长大的", "老观众", "新来的", "别叫我大佬", "蹲一个结算", "白开水", "半夜不睡", "又是我", "打工人", "瓜田里的猹", "慢热", "晴天", "阿九", "十一", "小绿", "老周", "木子", "苏苏", "七七", "一颗橘子", "等天亮", "北风", "不吃香菜", "没抢到号", "退役S级", "D级万岁", "靠运气活着", "只看不说", "路过打个卡", "最后一排"], mp = [{ type: "praise", text: "这反应速度，不愧是主播" }, { type: "praise", text: "冷静得不像第一次进这个级别的本", scope: "inst" }, { type: "praise", text: "刚才那个判断绝了" }, { type: "praise", text: "主播脑子转得是真快" }, { type: "praise", text: "这波我服" }, { type: "praise", text: "稳，太稳了" }, { type: "praise", text: "讲道理，换我早慌了" }, { type: "praise", text: "这就是高手吗" }, { type: "praise", text: "看得我手心出汗，主播还面不改色" }, { type: "praise", text: "刚才那句话说得漂亮" }, { type: "praise", text: "细节拉满，这都注意到了", scope: "inst" }, { type: "praise", text: "主播说话好有条理" }, { type: "praise", text: "这才叫会玩" }, { type: "praise", text: "就冲这个判断，关注了" }, { type: "praise", text: "有勇有谋" }, { type: "praise", text: "比上一个主播强多了" }, { type: "praise", text: "队友拖后腿，主播一个人在带", scope: "inst" }, { type: "praise", text: "这个位置站得好", scope: "inst" }, { type: "praise", text: "我宣布这是本周最佳直播" }, { type: "praise", text: "主播镇定得让我也镇定了" }, { type: "praise", text: "那个眼神，太帅了" }, { type: "praise", text: "心态真好，要是我早骂人了" }, { type: "praise", text: "这个节奏把握得好", scope: "inst" }, { type: "praise", text: "看出来是做过功课的" }, { type: "praise", text: "夸一句，主播是真的会说话" }, { type: "praise", text: "一句话就把场面稳住了", scope: "inst" }, { type: "praise", text: "这份胆量我是没有" }, { type: "praise", text: "学到了，下次我也这么干" }, { type: "praise", text: "主播好好看" }, { type: "praise", text: "声音也好听，别下播" }, { type: "praise", text: "越看越顺眼" }, { type: "praise", text: "这气质，放在哪个本都是主角" }, { type: "praise", text: "能屈能伸，佩服" }, { type: "praise", text: "刚才那一下我起立鼓掌" }, { type: "praise", text: "不慌不忙，高手风范" }, { type: "praise", text: "回廊里也过得这么讲究，爱了", scope: "corr" }, { type: "praise", text: "主播种的菜看着真水灵", scope: "corr" }, { type: "praise", text: "这手艺可以去西区摆摊了", scope: "corr" }, { type: "praise", text: "休整都不忘练，怪不得排名涨", scope: "corr" }, { type: "praise", text: "房间收拾得真干净", scope: "corr" }, { type: "bless", text: "祝平安出来！！", scope: "inst" }, { type: "bless", text: "主播一定要活着回来", scope: "inst" }, { type: "bless", text: "保佑保佑" }, { type: "bless", text: "冲啊主播！" }, { type: "bless", text: "这把一定能过", scope: "inst" }, { type: "bless", text: "结算见！", scope: "inst", when: "end" }, { type: "bless", text: "平安就好，评级无所谓", scope: "inst" }, { type: "bless", text: "等你出来请你吃饭", scope: "inst" }, { type: "bless", text: "好运加满，霉运退散" }, { type: "bless", text: "希望别再有人出事了", scope: "inst", when: "hurt" }, { type: "bless", text: "主播加油，我在东区超市门口看着呢" }, { type: "bless", text: "撑住，天总会亮的", scope: "inst" }, { type: "bless", text: "别怕，我们都在" }, { type: "bless", text: "好人一生平安" }, { type: "bless", text: "这波过了就能歇歇了", scope: "inst" }, { type: "bless", text: "下个副本抽个简单的吧", scope: "corr" }, { type: "bless", text: "注意安全，别逞强", scope: "inst" }, { type: "bless", text: "保重身体啊", when: "hurt" }, { type: "bless", text: "受伤了先处理伤口", scope: "inst", when: "hurt" }, { type: "bless", text: "一路绿灯，一路绿灯" }, { type: "bless", text: "今天也要好好活着" }, { type: "bless", text: "愿系统对你手下留情" }, { type: "bless", text: "别哭，我们陪你", when: "hurt" }, { type: "bless", text: "等着看你升级" }, { type: "bless", text: "最后一口气了，撑住", scope: "inst", when: "end" }, { type: "bless", text: "最后几轮，稳住！", scope: "inst", when: "end" }, { type: "bless", text: "主播今天早点睡", scope: "corr" }, { type: "bless", text: "休息好了再进本", scope: "corr" }, { type: "bless", text: "希望房租别涨", scope: "corr" }, { type: "bless", text: "回廊安稳一天是一天", scope: "corr" }, { type: "discuss", text: "现在什么情况，我刚进来" }, { type: "discuss", text: "来了来了，这把什么本", scope: "inst", when: "open" }, { type: "discuss", text: "开播了开播了", when: "open" }, { type: "discuss", text: "新主播？没见过", when: "open" }, { type: "discuss", text: "先别吵，看局势" }, { type: "discuss", text: "我觉得还有线索没找到", scope: "inst" }, { type: "discuss", text: "按往届，这本不好打", scope: "inst" }, { type: "discuss", text: "有没有人看过这本的录像", scope: "inst" }, { type: "discuss", text: "黑市那种录像别全信" }, { type: "discuss", text: "这队人各怀心思吧", scope: "inst" }, { type: "discuss", text: "现在还剩几个人？", scope: "inst" }, { type: "discuss", text: "前面说的那个我也注意到了" }, { type: "discuss", text: "理性讨论，别带节奏" }, { type: "discuss", text: "我赌主播能过" }, { type: "discuss", text: "有人算过这把能拿什么评吗", scope: "inst" }, { type: "discuss", text: "主播刚才是不是话里有话" }, { type: "discuss", text: "这个人说话一直留半句", scope: "inst" }, { type: "discuss", text: "注意细节，刚才那句不对劲", scope: "inst" }, { type: "discuss", text: "我在光幕前面站了一个小时了" }, { type: "discuss", text: "回放能看吗，刚才没看清" }, { type: "discuss", text: "有没有懂的解释一下" }, { type: "discuss", text: "你们看出来了吗，我看不出来" }, { type: "discuss", text: "这一段要是剪进录像会卖爆" }, { type: "discuss", text: "楼上别剧透……虽然我也不知道" }, { type: "discuss", text: "好无聊，快进", when: "calm" }, { type: "discuss", text: "主播在发呆吗", when: "calm" }, { type: "discuss", text: "挂着当背景音了", when: "calm" }, { type: "discuss", text: "去泡了碗面回来还是这样", when: "calm" }, { type: "discuss", text: "这么安静，要出事了吧", scope: "inst", when: "calm" }, { type: "discuss", text: "暴风雨前的宁静", scope: "inst", when: "calm" }, { type: "discuss", text: "啊啊啊有人倒了", scope: "inst", when: "hurt" }, { type: "discuss", text: "刚才那一下我没敢看", when: "hurt" }, { type: "discuss", text: "又走一个……", scope: "inst", when: "hurt" }, { type: "discuss", text: "手在抖吧，换我也抖", when: "hurt" }, { type: "discuss", text: "快结束了吧", scope: "inst", when: "end" }, { type: "discuss", text: "结算前最后几轮最容易出事", scope: "inst", when: "end" }, { type: "discuss", text: "今天种什么？", scope: "corr" }, { type: "discuss", text: "回廊直播也有人看，我服了我自己", scope: "corr" }, { type: "discuss", text: "排行榜又变了，你们看了吗", scope: "corr" }, { type: "discuss", text: "下个本打算报哪个？", scope: "corr" }, { type: "cold", text: "别高兴太早" }, { type: "cold", text: "我看悬" }, { type: "cold", text: "这把凉了吧" }, { type: "cold", text: "就这？" }, { type: "cold", text: "也就一般" }, { type: "cold", text: "运气好而已" }, { type: "cold", text: "换个人也能做到" }, { type: "cold", text: "等着翻车吧" }, { type: "cold", text: "这种判断，迟早出事" }, { type: "cold", text: "看了半天也没看出哪里厉害" }, { type: "cold", text: "太磨叽了" }, { type: "cold", text: "说了这么多，一点用没有" }, { type: "cold", text: "我押失败", scope: "inst" }, { type: "cold", text: "评级能拿个C就不错了", scope: "inst" }, { type: "cold", text: "队友再强也带不动", scope: "inst" }, { type: "cold", text: "太自信了，这本专治自信", scope: "inst" }, { type: "cold", text: "往届比这厉害的都栽在这", scope: "inst" }, { type: "cold", text: "真以为能全身而退？", scope: "inst" }, { type: "cold", text: "没意思，我换台了" }, { type: "cold", text: "这操作也就D级水平" }, { type: "cold", text: "这不是冷静，是反应慢" }, { type: "cold", text: "别吹了，看结算", scope: "inst" }, { type: "cold", text: "种菜有什么好看的", scope: "corr" }, { type: "cold", text: "回廊里直播，缺积分缺疯了吧", scope: "corr" }, { type: "cold", text: "天天摆烂，等着被清算吧", scope: "corr" }, { type: "envy", text: "凭什么这种人能上热门" }, { type: "envy", text: "我直播三天没人看，这也行？" }, { type: "envy", text: "长得好就是占便宜" }, { type: "envy", text: "又是这种运气好的" }, { type: "envy", text: "打赏的是托吧" }, { type: "envy", text: "我也想有人给我刷" }, { type: "envy", text: "这点本事也能拿打赏" }, { type: "envy", text: "同样是D级进来的，差距怎么这么大" }, { type: "envy", text: "分到这么好的队友，换我我也行", scope: "inst" }, { type: "envy", text: "酸了，真的酸了" }, { type: "envy", text: "一进来就有大佬带，羡慕不来", scope: "inst" }, { type: "envy", text: "这热度买的吧" }, { type: "envy", text: "凭什么打赏都往这边跑" }, { type: "envy", text: "我通关都没人看" }, { type: "envy", text: "排行榜上那些名字，一半靠运气" }, { type: "envy", text: "有人天生就是被偏爱的" }, { type: "envy", text: "我要是有这配置，比这还稳", scope: "inst" }, { type: "envy", text: "住的地方比我好十倍", scope: "corr" }, { type: "envy", text: "在回廊都能开播赚积分，羡慕哭了", scope: "corr" }, { type: "envy", text: "这菜种得，比我吃的还好", scope: "corr" }, { type: "smear", text: "装什么装" }, { type: "smear", text: "演的吧，这反应太假了" }, { type: "smear", text: "人设立得挺好" }, { type: "smear", text: "会说话而已，真打起来就露馅" }, { type: "smear", text: "这种人最会卖队友" }, { type: "smear", text: "表面客气，背地里肯定算计着" }, { type: "smear", text: "我不信真这么淡定" }, { type: "smear", text: "刚才那个眼神，心虚了吧" }, { type: "smear", text: "故意卖惨要打赏" }, { type: "smear", text: "刚才明明可以救，没救", scope: "inst", when: "hurt" }, { type: "smear", text: "自私，只顾自己", scope: "inst" }, { type: "smear", text: "队友出事了还这么冷静，冷血吧", scope: "inst", when: "hurt" }, { type: "smear", text: "这是在拿别人探路", scope: "inst" }, { type: "smear", text: "满嘴好话，一件实事没干" }, { type: "smear", text: "装新人的吧" }, { type: "smear", text: "就是冲着打赏来的" }, { type: "smear", text: "看着就不是好人" }, { type: "smear", text: "别被骗了，都是算计好的" }, { type: "smear", text: "下了本也要直播，吃相难看", scope: "corr" }, { type: "smear", text: "种田人设，炒给谁看", scope: "corr" }, { type: "rumor", text: "听说积分是借的，真的假的" }, { type: "rumor", text: "肯定是抱大腿进来的" }, { type: "rumor", text: "我朋友说在黑市见过这人" }, { type: "rumor", text: "据说上一个本是被人带飞的" }, { type: "rumor", text: "听说欠了一屁股积分" }, { type: "rumor", text: "有人说是买了攻略才敢进的", scope: "inst" }, { type: "rumor", text: "听说被公会踢出来过" }, { type: "rumor", text: "情报社的人说，这人被抽查过" }, { type: "rumor", text: "有人在西区看到这人跟黑市贩子说话" }, { type: "rumor", text: "据说是走后门才越级的" }, { type: "rumor", text: "听说上个本的队友都没出来" }, { type: "rumor", text: "有人说这人其实早就待清算了" }, { type: "rumor", text: "我听说排名是刷的" }, { type: "rumor", text: "传闻进本前偷偷买了防抽查道具" }, { type: "rumor", text: "听说有人专门花钱买这人的录像" }], gp = [{ type: "praise", text: "{who}刚才那下好帅" }, { type: "praise", text: "{who}挺靠谱的" }, { type: "bless", text: "{who}别出事啊" }, { type: "bless", text: "心疼{who}" }, { type: "bless", text: "{who}还好吗", when: "hurt" }, { type: "discuss", text: "{who}靠谱吗，我看不透" }, { type: "discuss", text: "{who}又不说话了" }, { type: "discuss", text: "{who}刚才那句什么意思" }, { type: "discuss", text: "盯紧{who}" }, { type: "discuss", text: "{who}和主播配合挺默契" }, { type: "discuss", text: "{who}好像知道点什么" }, { type: "cold", text: "{who}也就那样" }, { type: "cold", text: "指望{who}？算了吧" }, { type: "envy", text: "凭什么{who}也有人喜欢" }, { type: "smear", text: "我就说{who}有问题" }, { type: "smear", text: "{who}在演" }, { type: "smear", text: "{who}那个表情不对劲" }, { type: "rumor", text: "听说{who}在排行榜上挂过名" }, { type: "rumor", text: "我听说{who}以前出过事" }, { type: "rumor", text: "{who}跟主播是不是早就认识" }], xp = {
  names: hp,
  pool: mp,
  templates: gp
}, $s = /* @__PURE__ */ new Set(), rs = [];
let Jt = null, Hn = [], Js = null;
function Ss() {
  for (const e of Hn.slice())
    try {
      e();
    } catch (t) {
      console.warn("[rlzc] RLZC_LIVE 订阅回调出错", t);
    }
}
function yp() {
  return 1500 + Math.random() * 1500;
}
function Ll() {
  Jt = null;
  const e = rs.shift();
  e !== void 0 && ($s.delete(e), Ss()), rs.length && (Jt = setTimeout(Ll, yp()));
}
function Ol(e) {
  if (e.length) {
    for (const t of e)
      $s.add(t.id), rs.push(t.id);
    Jt ? Ss() : Ll();
  }
}
function vp() {
  Jt && clearTimeout(Jt), Jt = null, rs.length = 0, $s.clear();
}
function bp(e) {
  Js = e, window.RLZC_LIVE = {
    get: () => Js.view($s),
    subscribe(t) {
      return typeof t != "function" ? () => {
      } : (Hn.push(t), () => {
        Hn = Hn.filter((n) => n !== t);
      });
    },
    toggle: () => Js.toggle()
  };
}
const fi = "rlzc", Gn = { optIn: !1, injectToAI: !1, source: "local", freq: 3 }, Dl = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, An = {
  depths: { token: 4, progress: 4, turn: 0, ledger: 4 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...zn },
  subApi: structuredClone(Dl),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0, live: !0 },
  live: { ...Gn }
}, f = /* @__PURE__ */ hs({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(An),
  packs: [],
  lastInjection: $n,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: []
});
function xt(e) {
  return JSON.parse(JSON.stringify(e));
}
function Fi(...e) {
  f.settings.debug && console.log("[rlzc]", ...e);
}
function wp() {
  const e = ue().extensionSettings, t = e[fi] ?? {}, n = {
    ...structuredClone(An),
    ...t,
    depths: { ...An.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? An.depths.ledger },
    ball: { ...An.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => Jo(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...zn, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(Dl),
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
    live: kp(t.live)
  };
  e[fi] = n, f.settings = n, f.packs = Mi(n.customPacks);
}
function kp(e) {
  const t = e ?? {}, n = Math.floor(Number(t.freq));
  return {
    optIn: typeof t.optIn == "boolean" ? t.optIn : Gn.optIn,
    injectToAI: typeof t.injectToAI == "boolean" ? t.injectToAI : Gn.injectToAI,
    source: t.source === "ai" ? "ai" : "local",
    freq: Number.isFinite(n) ? Math.max(1, Math.min(10, n)) : Gn.freq
  };
}
function ke() {
  ue().extensionSettings[fi] = /* @__PURE__ */ Q(f.settings), ue().saveSettingsDebounced(), f.packs = Mi(f.settings.customPacks);
}
function _p(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = Jo(t);
  if (n.length) return n;
  const s = t;
  return Mi([]).some((i) => i.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (f.settings.customPacks = [...f.settings.customPacks.filter((i) => i.id !== s.id), s], ke(), []);
}
function zp(e) {
  f.settings.customPacks = f.settings.customPacks.filter((t) => t.id !== e), ke();
}
function qe() {
  const e = yt()[$l];
  return !e || Array.isArray(e) ? {} : e;
}
function Pn(e) {
  yt()[$l] = e, rt();
}
function en(e) {
  const t = [];
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (i.is_user || i.is_system) continue;
    const r = i.extra?.rlzc?.ledger;
    if (Array.isArray(r))
      for (const o of r) t.push({ ...o, mesIndex: s });
  }
  const n = qe();
  for (const s of n.adjust ?? [])
    t.push({ delta: s.amount, source: `手动：${s.note}`, type: "manual", at: s.at, mesIndex: -1 });
  return t;
}
function jt(e) {
  const t = qe();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const i = e[s];
    if (i.is_user || !i.mes) continue;
    const r = n.exec(i.mes);
    if (!r) continue;
    const o = Sl(r[1]);
    if (o !== null) {
      const l = Qt(i.send_date ?? i.gen_finished ?? void 0);
      return Pn({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function $p(e) {
  const t = qe();
  if (!(t.init != null || f.ledger.length > 0)) return "";
  const s = jt(e), i = Xt(s.value, f.ledger), r = /<状态栏>([\s\S]*?)<\/状态栏>/;
  let o = "D";
  const l = t.fix?.level;
  if (l && ["D", "C", "B", "A", "S"].includes(l))
    o = l;
  else
    for (let h = e.length - 1; h >= 0; h--) {
      if (e[h].is_user || !e[h].mes) continue;
      const g = r.exec(e[h].mes);
      if (!g) continue;
      const v = Ii(g[1]);
      if (v) {
        o = v;
        break;
      }
    }
  const a = Dt[o], c = In(s.value, f.ledger, a), A = If(i, c, o, a), p = ot();
  return p?.status === "active" && p.live ? up(A, Nl(e, p.id)) : A;
}
function Mr(e, t = !0) {
  const n = J(), s = n[e];
  if (!s || s.is_user) return;
  const i = s.mes ?? "", r = Qt(s.send_date ?? s.gen_finished ?? void 0), o = [], l = new RegExp(Wd.source, "g");
  let a;
  for (; (a = l.exec(i)) !== null; ) {
    const A = Ef(a[1]);
    A && o.push({ delta: A.delta, source: A.source, type: "tag", at: r });
  }
  const c = t ? ws(i) : null;
  if (c && f.pack && !f.pack.rest) {
    const A = {
      结果: c.result ?? "",
      评价: c.rating ?? "",
      ...c.fields
    }, p = qe(), h = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let g = "D";
    const v = p.fix?.level;
    if (v && ["D", "C", "B", "A", "S"].includes(v))
      g = v;
    else
      for (let x = e - 1; x >= 0; x--) {
        if (n[x].is_user || !n[x].mes) continue;
        const M = h.exec(n[x].mes);
        if (!M) continue;
        const U = Ii(M[1]);
        if (U) {
          g = U;
          break;
        }
      }
    const _ = jt(n), P = Xt(_.value, f.ledger), w = !!f.session?.clearance, y = Cf(f.pack.level, g, A, P, w, f.pack.name);
    if (y.warn) {
      s.extra = s.extra ?? {};
      const x = s.extra.rlzc ?? { phase: "", round: 0, injected: [] };
      s.extra.rlzc = xt({ ...x, settleWarn: y.warn });
    }
    if (y.delta !== 0) {
      const x = { delta: y.delta, source: y.source, type: "settle", at: r };
      y.clearWin && (x.clear = !0), o.push(x);
    }
  }
  if (o.length || s.extra?.rlzc?.ledger?.length) {
    s.extra = s.extra ?? {};
    const A = s.extra.rlzc ?? { phase: "", round: 0, injected: [] }, p = [...o, ...(A.ledger ?? []).filter((h) => h.type === "tip")];
    s.extra.rlzc = xt({ ...A, ledger: p.length ? p : void 0 }), rt();
  }
  f.ledger = en(J());
}
function Sp(e, t) {
  const n = qe(), s = Qt(void 0), i = [...n.adjust ?? [], { amount: e, note: t, at: s }];
  Pn({ ...n, adjust: i });
  const r = { delta: e, source: `手动：${t}`, type: "manual", at: s, mesIndex: -1 };
  f.ledger = [...f.ledger, r];
}
function Ep(e, t) {
  Sp(e, t);
}
function Cp(e) {
  const t = qe(), n = Qt(void 0);
  Pn({ ...t, init: { value: e, source: "手动设置", at: n } }), f.ledger = en(J());
}
function Mp(e, t) {
  if (!e && !t) return;
  const n = qe(), s = J(), i = Qt(void 0);
  Pn({ ...n, fix: { level: e, rank: t, at: i, afterIndex: s.length - 1 } });
}
function ot() {
  return Nf(yt()[dt]);
}
function Es() {
  const e = yt(), t = Array.isArray(e[dt]?.declined) ? e[dt].declined : [], n = Array.isArray(e[Er]) ? e[Er] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function Ip(e) {
  const t = yt(), n = [...Es().filter((s) => s !== e), e];
  t[dt] = { ...t[dt] ?? {}, declined: n }, rt();
}
function Lt(e) {
  const t = yt(), n = Es(), s = n.length ? { declined: n } : {};
  e ? t[dt] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[dt] = s : delete t[dt], rt();
}
function Li(e) {
  const t = ot();
  t && (e(t), Lt(t), Ge());
}
function jl(e) {
  const t = J();
  return (e === "swipe" || e === "continue") && Re(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function os(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Rf(t, f.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = ef(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? Wf(e, n, s) : null };
}
function Ge() {
  const e = J();
  let t = ot();
  if (t) {
    const s = JSON.stringify(t);
    if (!Lf(e, t))
      Lt(null), Ie("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const i = os(e, t);
      i.progress && (t.status = i.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && Lt(t);
    }
  }
  const n = os(e, t);
  f.session = n.session, f.pack = n.pack, f.progress = n.progress, f.audit = n.audit, f.subLine = Gl(e, n.progress), f.ledger = en(e), f.tick++, Ss();
}
function Bl() {
  if (f.session)
    return El(f.session, f.progress?.rolesFromChat);
}
function ls() {
  for (const e of tf) Ht(e, "", 0, !1);
}
let gn = -1;
function Tp(e) {
  const t = jl(e), n = ot(), { pack: s, progress: i, audit: r } = os(t, n), o = n ? El(n, i?.rolesFromChat) : void 0, l = Di() && !!i, a = l ? _s(t, i.entryIndex) : null, c = s ? of(s, i, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: i?.panel?.limit,
    audit: r ?? void 0,
    subNext: l ? wf(t, i.entryIndex) : void 0,
    stateText: a ? yl(s, a.state) : void 0
  }) : $n;
  ls();
  const A = f.settings.depths;
  c.token && Ht(ol, c.token, A.token, !0), c.progress && Ht(ll, c.progress, A.progress, !1), c.turn && Ht(al, c.turn, A.turn, !1), c.state && Ht(cl, c.state, A.progress, !1);
  const p = qe();
  let h = $p(t);
  if (p.fix) {
    const g = Mf(p.fix);
    g && (h = h ? `${h}
${g}` : g);
  }
  h && Ht(Al, h, A.ledger, !1), f.lastInjection = c, gn = t.length, Fi("注入", e, c);
}
const pi = /* @__PURE__ */ new Set();
async function Pp() {
  const e = J(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Gd(n.mes);
  if (!s) return;
  const i = ot();
  if (!i || i.status !== "active" || i.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const r = `${ks()}:${t}:${n.mes}`;
  if (pi.has(r)) return;
  pi.add(r);
  const { pack: o, progress: l } = os(e, i);
  if (!o || !l || l.ended) return;
  const a = Yd(o, l.phase, l.round, s);
  a && await vt(`是否跳到${s}？（${a.label}）`) && (i.manual.push({ kind: "skip", atIndex: t, targetPhase: a.phase, targetRound: a.round }), Lt(i));
}
async function Np(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      ls();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await Pp(), await Gp(s), Tp(s);
  } catch (i) {
    console.error("[rlzc] 拦截器出错", i), ls();
  }
}
const hi = /* @__PURE__ */ new Set();
function Oi() {
  const e = ot();
  if (!e || e.status !== "ended") return 0;
  const t = f.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
async function Vl(e) {
  const { index: t, info: n } = e, s = `${ks()}:${t}:${n.name}`;
  if (hi.has(s)) return;
  hi.add(s);
  const i = e.pack ? `检测到进入《${e.pack.name}》，是否启用？` : `检测到进入《${n.name}》，是否启用？（未收录的副本，将使用通用副本包）`, r = Pl(e.pack ?? {}, f.settings.live.optIn), o = await ul(i, r.show ? { label: "开启直播", checked: r.checked } : null);
  if (!o.ok) {
    Ip(Ti(t, n.name));
    return;
  }
  r.show && Ul(o.checked);
  const l = zs(J(), t, f.packs);
  if (!l || l.info.name !== n.name) {
    Ie("warning", "入场消息已变化，未启用。");
    return;
  }
  const a = { ...n };
  e.pack || (a.rounds = Ko(n.limit, qo(n), f.settings.genericCaps).rounds), Hl(e.pack ?? Qo(a, f.settings.genericCaps), t, a, r.show && o.checked);
}
function Ul(e) {
  f.settings.live.optIn !== e && (f.settings.live.optIn = e, ke());
}
function Wl() {
  const e = Df(J(), ot(), Es(), f.packs, Oi());
  e && Vl(e);
}
function Rp(e) {
  Ge();
  const t = J(), n = Oi();
  let s = -1;
  for (let i = n; i < t.length; i++) if (Re(t[i])) {
    s = i;
    break;
  }
  e === s && Wl();
}
function Hl(e, t, n, s = !1) {
  const i = J(), r = i[t], o = Pf(e, t, n), l = Bt();
  if (l.corridor.on && (l.corridor.on = !1, En(l, l.corridor.show, Ft.enterOff)), s && !e.disableLive && (o.live = !0, En(l, o.id, Ft.instanceOn)), Is(l), !e.rest) {
    const a = jt(i), c = qe(), A = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let p = "D";
    const h = c.fix?.level;
    if (h && ["D", "C", "B", "A", "S"].includes(h))
      p = h;
    else
      for (let g = i.length - 1; g >= 0; g--) {
        if (i[g].is_user || !i[g].mes) continue;
        const v = A.exec(i[g].mes);
        if (!v) continue;
        const _ = Ii(v[1]);
        if (_) {
          p = _;
          break;
        }
      }
    In(a.value, f.ledger, Dt[p]) && (o.clearance = !0);
  }
  r.extra = r.extra ?? {}, r.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: o.id }, Lt(o), Ge(), f.progress && (r.extra.rlzc.injected = xt(f.progress.perMessage[t]?.events ?? [])), rt(), Ie("success", `已进入副本《${e.name}》。`);
}
async function Fp(e) {
  const t = f.packs.find((l) => l.id === e);
  if (!t) return;
  const n = J();
  let s = n.length - 1;
  for (; s >= 0 && !Re(n[s]); ) s--;
  if (s < 0) {
    Ie("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  if (ot()?.status === "active" && !await vt("当前已有进行中的副本，确定要替换吗？")) return;
  const r = Pl(t, f.settings.live.optIn), o = await ul(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`, r.show ? { label: "开启直播", checked: r.checked } : null);
  o.ok && (r.show && Ul(o.checked), Hl(t, s, el(n[s].mes) ?? { name: t.name }, r.show && o.checked));
}
function Cs(e) {
  Li((t) => t.manual.push(e));
}
function Ms() {
  return J().length - 1;
}
async function Ir() {
  const e = f.progress;
  if (!(!e || e.ended || !f.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Ie("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await vt(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (Cs({ kind: "skip", atIndex: Ms(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Ie("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function Tr() {
  if (!(!f.session || f.progress?.ended) && await vt("确定要手动结束当前副本吗？")) {
    if (f.session.live) {
      const e = Bt();
      En(e, f.session.id, Ft.instanceOff), Is(e);
    }
    Cs({ kind: "end", atIndex: Ms() });
  }
}
function Lp(e) {
  Cs({ kind: "setPhase", atIndex: Ms(), phase: e });
}
function Op(e) {
  Cs({ kind: "setRound", atIndex: Ms(), round: e });
}
function Dp(e) {
  Li((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function jp(e) {
  Li((t) => t.manual.splice(e, 1));
}
async function Pr() {
  f.session && await vt("确定要删除当前副本会话吗？（不会改动聊天记录）") && (Lt(null), Ge());
}
function Di() {
  return f.settings.subApi.source !== "off";
}
function Bp() {
  const e = f.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function Vp(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function Gl(e, t) {
  if (!Di() || !t || t.ended) return "";
  if (f.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const i = _s(e, t.entryIndex);
  return i && t.perMessage[i.index] ? `副本记录：已更新（第${t.perMessage[i.index].round}轮）` : "副本记录：尚未整理";
}
let Yn = null;
const ji = /* @__PURE__ */ new Set();
function Sn(e) {
  return yf(ks(), e, J()[e]);
}
function Nr(e) {
  f.subBusy = e, f.subLine = Gl(J(), f.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && f.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function Yl(e, t, n) {
  if (Sn(e) !== t) return;
  const s = J()[e];
  s?.extra?.rlzc && (s.extra.rlzc = xt({ ...s.extra.rlzc, sub: n }), rt(), Ge());
}
function Up(e, t) {
  const n = J(), s = f.progress, i = f.pack, r = n[e], o = s?.perMessage[e];
  if (!i || !s || !o || !r) return null;
  const l = Bl(), a = (x) => ({ ...x, text: ss(x.text, i, l), if: x.if ? ss(x.if, i, l) : void 0 }), c = mf(i, r.extra?.rlzc?.injected ?? []).map(a), A = (s.next?.events ?? []).filter((x) => x.if).map(a);
  if (!vf({
    enabled: Di(),
    active: !s.ended && f.session?.status === "active",
    type: t,
    saveMode: f.settings.subApi.saveMode,
    hasEvents: c.length > 0,
    hasNextConditional: A.length > 0
  })) return null;
  const h = Sn(e);
  if (ji.has(h)) return null;
  const g = i.phases.find((x) => x.id === o.phase), v = _s(n.slice(0, e), s.entryIndex), _ = hf({
    pack: i,
    phaseName: g?.name ?? o.phase,
    round: o.round,
    prevState: v?.state ?? null,
    events: c,
    nextConditional: A,
    text: String(r.mes ?? "")
  }), P = ue().substituteParams, w = P ? { system: P(_.system), user: P(_.user) } : _, y = Wp(e, h, o.round, w);
  return Yn = { key: h, index: e, promise: y }, y.finally(() => {
    Yn?.key === h && (Yn = null);
  }), y;
}
async function Wp(e, t, n, s) {
  Nr(!0);
  try {
    let i = 2;
    for (; ; ) {
      const r = Bp();
      if (!r) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await bf((a) => zf(r, a), s, i);
        Yl(e, t, { ...l, ms: Date.now() - o, via: Vp(r), at: (/* @__PURE__ */ new Date()).toISOString() }), ji.add(t);
        return;
      } catch (l) {
        if (Sn(e) !== t) return;
        const a = gl(l), c = String(l?.message ?? l).slice(0, 200);
        if (Fi("副本事件检测失败", a, l), !f.settings.subApi.wait) {
          Ie("warning", `第${n}轮事件检测失败（${a}），已沿用上一轮状态。`), qs(e, t, a);
          return;
        }
        if (await Hp(n, a, c) === "skip") {
          qs(e, t, a);
          return;
        }
        i = 0;
      }
    }
  } catch (i) {
    Ie("error", String(i?.message ?? i)), qs(e, t, "其他");
  } finally {
    Nr(!1);
  }
}
function qs(e, t, n) {
  ji.add(t), Yl(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function Hp(e, t, n) {
  const s = ue();
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
  const p = document.createElement("select");
  p.className = "text_pole";
  const h = [{ value: "", text: "请选择…" }];
  for (const _ of i.presets) i.source === "preset" && _.id === i.presetId || h.push({ value: `preset:${_.id}`, text: `自设API：${_.name}` });
  i.source !== "main" && h.push({ value: "main", text: "跟随主API" });
  for (const _ of h) {
    const P = document.createElement("option");
    P.value = _.value, P.textContent = _.text, p.append(P);
  }
  A.append(p), c.append(A), r.append(o, l, a, c);
  let g;
  p.addEventListener("change", () => {
    const _ = p.value;
    _ && (_ === "main" ? i.source = "main" : (i.source = "preset", i.presetId = _.slice(7)), ke(), g.complete(s.POPUP_RESULT.CUSTOM1));
  }), g = new s.Popup(r, s.POPUP_TYPE.TEXT, "", {
    okButton: "重试",
    cancelButton: "这轮先跳过",
    customButtons: [
      {
        text: "换一个接口",
        action: () => {
          c.style.display = "", p.focus();
        }
      }
    ]
  });
  const v = await g.show();
  return v === s.POPUP_RESULT.AFFIRMATIVE || v === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function Gp(e) {
  const t = Yn;
  if (!(!t || !f.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= jl(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function Yp(e, t) {
  const n = J(), s = n[e];
  if (!Re(s)) return;
  const i = ot();
  if (!i || i.status === "ended") {
    if (zs(n, e, f.packs)) {
      const c = Of(n, f.packs, Oi(), e, Es());
      c && Vl(c);
    }
    if (t === "first_message") return;
    Ge(), Mr(e, !1), Fr(e), ti(e, t), Rr();
    return;
  }
  if (t === "first_message") return;
  let r = null;
  const o = nl(s.mes);
  o && (i.roles = { ...i.roles ?? {}, ...o }), Lt(i), Ge();
  const l = f.progress?.perMessage[e];
  if (l && f.pack) {
    const c = f.pack.phases.find((_) => _.id === l.phase), A = {
      phase: c?.name ?? l.phase,
      round: l.round,
      injected: gn === e ? f.lastInjection.injected : l.events
    }, p = f.pack.time;
    p.type === "clock" && c?.clock && !c.night && !c.frozen && (A.clock = il(p.dayStart, p.minutesPerRound, l.round));
    const h = gn === e ? f.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    h && (A.limit = h);
    const g = s.extra?.rlzc?.entry;
    g && (A.entry = g), gn === e && f.lastInjection.skipped?.length && (A.skippedEvents = f.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (A.sub = s.extra.rlzc.sub), t === "continue" && s.extra?.rlzc?.live && (A.live = s.extra.rlzc.live);
    const v = (s.extra?.rlzc?.ledger ?? []).filter((_) => _.type === "tip");
    t === "continue" && v.length && (A.ledger = v), s.extra = s.extra ?? {}, s.extra.rlzc = xt(A), rt(), Ge(), r = Up(e, t);
  }
  const a = ws(s.mes);
  if (a && Ie("info", `副本结算：${a.result ?? "—"}${a.rating ? `，评价 ${a.rating}` : ""}`), Mr(e), Fr(e), r) {
    const c = Sn(e);
    r.then(() => {
      Sn(e) === c && ti(e, t);
    });
  } else ti(e, t);
  Rr();
}
function Rr() {
  const e = qe();
  e.fix && Pn({ ...e, fix: void 0 });
}
function Fr(e) {
  const t = J(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const i = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!i) return;
  const r = Sl(i[1]);
  if (r === null) return;
  const o = jt(t), l = Xt(o.value, en(t).filter((a) => !(a.mesIndex === e && a.type === "tip")));
  r !== l && (Fi(`积分核对不符（楼层${e}）：状态栏 ${r}，账本 ${l}`), n.extra?.rlzc && (n.extra.rlzc = xt({ ...n.extra.rlzc, ledgerMismatch: { status: r, ledger: l } }), rt()));
}
function Lr() {
  pi.clear(), hi.clear(), gn = -1, f.chatId = ks(), f.debugUnlocked = !1, f.lastInjection = $n, ls(), vp(), f.ledger = en(J()), Ge(), Wl(), setTimeout(() => Bi(), 50);
}
function Qs() {
  Ge();
}
function Kl() {
  return f.settings.panelDisplay === "statusbar" ? Rt.filter((e) => e !== "副本") : Rt;
}
function Xs(e) {
  fl(e, Kl());
}
function Bi(e = !1) {
  uf(Kl(), e);
}
function Kp(e) {
  f.settings.panelDisplay !== e && (f.settings.panelDisplay = e, ke(), Bi(!0));
}
const ei = xp;
function Bt() {
  return np(yt()[Il]);
}
function Is(e) {
  yt()[Il] = xt(e), rt();
}
function En(e, t, n) {
  if (!t) return;
  const s = Rl(J(), e) + 1, i = { id: s, t: "sys", name: "", text: n, amount: 0, net: 0, show: t };
  e.sys = [...e.sys, i].slice(-100), e.seq = s, Ol([i]);
}
function Zp() {
  return "c" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function Jp(e) {
  const t = f.session, n = f.progress;
  if (!!t && e > t.entryIndex && (!n?.ended || n.endIndex !== void 0 && e <= n.endIndex)) return t.live && f.pack ? { show: t.id, scope: "instance", pack: f.pack } : null;
  const i = Bt();
  return i.corridor.on && i.corridor.show ? { show: i.corridor.show, scope: "corridor", pack: null } : null;
}
function ti(e, t) {
  if (t === "continue" || t === "first_message") return;
  const n = J(), s = n[e];
  if (!Re(s) || Tn(s)) return;
  const i = Jp(e);
  if (!i) return;
  const r = Bt(), { show: o, scope: l, pack: a } = i, c = f.progress, A = s.extra?.rlzc ?? { phase: "", round: 0, injected: [] }, p = Ni(n, o, e), h = A.sub && !A.sub.skipped ? { hype: A.sub.hype, hurt: A.sub.hurt } : void 0, g = l === "instance" && c?.endIndex === e && c.endedBy === "tag" ? ws(s.mes) : null, v = !!g && ["死亡", "阵亡"].includes(String(g.result ?? "").trim()), _ = c?.roundsLeft, P = new Set((a?.events ?? []).filter((U) => U.kind !== "directive").map((U) => U.id)), w = ap({
    show: o,
    scope: l,
    packLevel: a?.level ?? null,
    playerLevel: Ri(n, e + 1),
    isRest: !!a?.rest,
    prevHeat: p.length ? p[p.length - 1].rec.heat : null,
    roundsInShow: p.length,
    text: String(s.mes ?? ""),
    hasEvents: (A.injected ?? []).some((U) => P.has(U)),
    hasPhaseSwitch: /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(s.mes ?? "")),
    sub: h,
    isEnd: l === "instance" && !!_ && _.y > 0 && _.x < _.y * 0.1,
    phaseId: l === "instance" ? c?.perMessage[e]?.phase : void 0,
    pool: ei.pool,
    templates: ei.templates,
    packDanmaku: a?.danmaku,
    names: ei.names,
    whoNames: lp(op(n, e + 1), String(ue().name1 ?? "")),
    recentTexts: sp(n.slice(0, e)),
    firstId: Rl(n, r) + 1,
    settle: g ? { died: v, tipsBefore: Nl(n.slice(0, e), o) } : void 0,
    rand: Math.random
  }), y = Qt(s.send_date ?? s.gen_finished ?? void 0), M = [...(A.ledger ?? []).filter((U) => U.type !== "tip"), ...cp(w, y)];
  s.extra = s.extra ?? {}, s.extra.rlzc = xt({ ...A, live: w, ledger: M.length ? M : void 0 }), r.seq = Math.max(r.seq, ...w.feed.map((U) => U.id)), Is(r), f.ledger = en(J()), f.tick++, Ol(w.feed);
}
function qp() {
  const e = Bt();
  return f.session?.status === "active" && f.pack ? Pi({ packLevel: f.pack.level, playerLevel: Ri(J()), isRest: !!f.pack.rest, heat: 20, rand: 1 }) : e.corridor.viewers ?? 0;
}
function Qp(e) {
  const t = f.session, n = t?.status === "active";
  return pp(
    J(),
    Bt(),
    {
      inInstance: n,
      instanceLive: !!(n && t?.live),
      instanceShow: t?.id,
      startViewers: qp(),
      injectToAI: f.settings.live.injectToAI
    },
    e
  );
}
function Xp() {
  if (f.session?.status === "active") return !1;
  const e = Bt();
  if (e.corridor.on)
    e.corridor.on = !1, En(e, e.corridor.show, Ft.corridorOff);
  else {
    const t = Zp();
    e.corridor = {
      on: !0,
      show: t,
      viewers: Pi({ packLevel: null, playerLevel: Ri(J()), isRest: !1, heat: 20, rand: 0.9 + Math.random() * 0.2 })
    }, En(e, t, Ft.corridorOn);
  }
  return Is(e), f.tick++, Ss(), !0;
}
const eh = { class: "rlzc-ball-mark" }, ni = 44, th = /* @__PURE__ */ Je({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ pe({ x: 0, y: 0 });
    let n = null;
    function s(A, p) {
      const h = window.innerWidth - ni - 4, g = window.innerHeight - ni - 4;
      return { x: Math.min(Math.max(4, A), h), y: Math.min(Math.max(4, p), g) };
    }
    function i() {
      const A = f.settings.ball;
      t.value = s(A.x ?? window.innerWidth - ni - 12, A.y ?? Math.round(window.innerHeight * 0.35));
    }
    function r(A) {
      A.currentTarget.setPointerCapture(A.pointerId), n = { id: A.pointerId, dx: A.clientX - t.value.x, dy: A.clientY - t.value.y, moved: !1, sx: A.clientX, sy: A.clientY };
    }
    function o(A) {
      !n || n.id !== A.pointerId || (Math.abs(A.clientX - n.sx) + Math.abs(A.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(A.clientX - n.dx, A.clientY - n.dy)));
    }
    function l(A) {
      if (!n || n.id !== A.pointerId) return;
      const p = n.moved;
      n = null, p ? (f.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, ke()) : f.panelOpen = !f.panelOpen;
    }
    const a = G(() => !!f.session && !f.progress?.ended), c = G(() => !!f.progress?.warn);
    return gs(() => f.settings.ball, i, { deep: !0 }), Xa(() => {
      i(), window.addEventListener("resize", i);
    }), ec(() => window.removeEventListener("resize", i)), (A, p) => (z(), I("button", {
      class: ae(["rlzc-ball", { "is-active": a.value, "is-warn": c.value }]),
      style: fs({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: r,
      onPointermove: o,
      onPointerup: l,
      onPointercancel: l
    }, [
      u("span", eh, L(a.value ? O(f).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
});
function nh(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function ln(e) {
  return nh(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function sh(e) {
  const t = [];
  let n = null, s = [];
  const i = () => {
    s.length && t.push(`<p>${s.map(ln).join("<br>")}</p>`), s = [];
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
      t.push(`<h${h}>${ln(a[2])}</h${h}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(l), A = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (c || A) {
      i();
      const h = c ? "ul" : "ol", g = c ? c[1] : A[2];
      n !== h ? (r(), n = h, t.push(h === "ol" ? `<ol start="${A[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(ln(g));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${ln(l.trim())}`);
      continue;
    }
    const p = /^>\s?(.*)$/.exec(l);
    if (p) {
      i(), r(), t.push(`<blockquote>${ln(p[1])}</blockquote>`);
      continue;
    }
    r(), s.push(l);
  }
  return i(), r(), t.join("");
}
const ih = {
  key: 0,
  class: "rlzc-docs"
}, rh = { class: "rlzc-subtabs" }, oh = ["onClick"], lh = { class: "rlzc-md" }, ah = ["innerHTML"], ch = ["src", "alt"], Ah = {
  key: 2,
  class: "rlzc-note"
}, Or = /* @__PURE__ */ Je({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ pe(0);
    gs(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = G(() => t.pack.docs?.[n.value]), i = G(() => s.value?.md ? sh(s.value.md) : ""), r = G(() => s.value?.image ? Od(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (z(), I("section", ih, [
      u("div", rh, [
        (z(!0), I(X, null, me(e.pack.docs, (a, c) => (z(), I("button", {
          key: c,
          class: ae({ on: n.value === c }),
          onClick: (A) => n.value = c
        }, L(a.title), 11, oh))), 128))
      ]),
      u("article", lh, [
        i.value ? (z(), I("div", {
          key: 0,
          innerHTML: i.value
        }, null, 8, ah)) : Y("", !0),
        r.value ? (z(), I("img", {
          key: 1,
          src: r.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, ch)) : s.value?.image && !r.value ? (z(), I("p", Ah, "图片无法加载：" + L(s.value.image), 1)) : Y("", !0)
      ])
    ])) : Y("", !0);
  }
}), uh = {
  key: 0,
  class: "rlzc-ledger-summary"
}, dh = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, Dr = /* @__PURE__ */ Je({
  __name: "LedgerSummary",
  setup(e) {
    const t = G(() => J()), n = G(() => jt(t.value)), s = G(() => Xt(n.value.value, f.ledger)), i = G(() => f.pack?.level ?? "D"), r = G(() => Dt[i.value]), o = G(() => In(n.value.value, f.ledger, r.value)), l = G(() => f.ledger.length > 0 || n.value.source !== "默认值");
    return (a, c) => l.value ? (z(), I("div", uh, [
      u("span", {
        class: ae(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + L(s.value >= 0 ? "+" : "") + L(s.value), 3),
      o.value ? (z(), I("span", dh, "待清算")) : Y("", !0)
    ])) : Y("", !0);
  }
}), fh = { class: "rlzc-system" }, ph = { class: "rlzc-card rlzc-hero" }, hh = { class: "rlzc-hero-top" }, mh = { class: "rlzc-level" }, gh = {
  key: 0,
  class: "rlzc-chip"
}, xh = {
  key: 0,
  class: "rlzc-goal"
}, yh = { class: "rlzc-grid" }, vh = {
  key: 0,
  class: "rlzc-stat"
}, bh = {
  key: 1,
  class: "rlzc-stat"
}, wh = {
  key: 2,
  class: "rlzc-stat"
}, kh = {
  key: 3,
  class: "rlzc-stat"
}, _h = {
  key: 0,
  class: "rlzc-subline"
}, zh = {
  key: 1,
  class: "rlzc-note"
}, $h = {
  key: 2,
  class: "rlzc-card"
}, Sh = { class: "rlzc-kv" }, Eh = { class: "rlzc-kv" }, Ch = {
  key: 0,
  class: "rlzc-note rlzc-note-warn"
}, Mh = {
  key: 3,
  class: "rlzc-note"
}, Ih = {
  key: 4,
  class: "rlzc-card"
}, Th = {
  key: 0,
  class: "rlzc-kv"
}, Ph = { class: "rlzc-mono" }, Nh = {
  key: 1,
  class: "rlzc-tasks"
}, Rh = {
  key: 2,
  class: "rlzc-ps"
}, Fh = { class: "rlzc-actions" }, Lh = ["disabled"], Oh = ["disabled"], Dh = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, jh = {
  key: 2,
  class: "rlzc-card"
}, Bh = { class: "rlzc-row" }, Vh = ["value"], Uh = ["disabled"], Wh = /* @__PURE__ */ Je({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ pe(""), n = G(() => !!f.session && !!f.pack), s = G(() => f.progress), i = G(() => n.value && !!s.value && !s.value.ended), r = G(() => f.packs.find((h) => h.id === t.value) ?? null), o = G(() => !!f.pack?.phases.length), l = G(() => f.settings.panelDisplay !== "statusbar"), a = G(() => {
      const h = s.value;
      return h ? o.value ? `${h.warn ? "⚠️ " : ""}${h.round}/${h.phase.cap}` : `第${h.round}轮` : "";
    }), c = G(() => {
      const h = s.value;
      return h ? h.limit?.text ? h.limit.text : h.panel?.limit || f.session?.briefing?.limit || "—" : "";
    }), A = G(() => {
      const h = s.value;
      return !!h && !h.ended && o.value && h.phase.cap > 0 && h.nextRound < h.phase.cap;
    });
    async function p() {
      t.value && (await Fp(t.value), t.value = "");
    }
    return (h, g) => (z(), I("div", fh, [
      n.value && s.value ? (z(), I(X, { key: 0 }, [
        u("div", ph, [
          u("div", hh, [
            u("span", mh, L(O(f).pack?.rest ? "—" : O(f).pack.level), 1),
            u("h3", null, L(O(f).pack.name), 1),
            s.value.ended ? (z(), I("span", gh, "已结束")) : Y("", !0)
          ]),
          O(f).session?.briefing?.goal ? (z(), I("p", xh, "目标：" + L(O(f).session.briefing.goal), 1)) : Y("", !0)
        ]),
        u("div", yh, [
          o.value ? (z(), I("div", vh, [
            g[3] || (g[3] = u("span", null, "阶段", -1)),
            u("b", null, L(s.value.phase.name), 1)
          ])) : Y("", !0),
          u("div", {
            class: ae(["rlzc-stat", { warn: s.value.warn }])
          }, [
            g[4] || (g[4] = u("span", null, "轮次", -1)),
            u("b", null, L(a.value), 1)
          ], 2),
          s.value.currentClock ? (z(), I("div", bh, [
            g[5] || (g[5] = u("span", null, "钟时", -1)),
            u("b", null, L(s.value.currentClock), 1)
          ])) : Y("", !0),
          s.value.roundsLeft ? (z(), I("div", wh, [
            g[6] || (g[6] = u("span", null, "最多剩余轮次", -1)),
            u("b", null, L(s.value.roundsLeft.x) + "/" + L(s.value.roundsLeft.y), 1)
          ])) : Y("", !0),
          l.value ? (z(), I("div", kh, [
            g[7] || (g[7] = u("span", null, "剩余时间", -1)),
            u("b", null, L(c.value), 1)
          ])) : Y("", !0),
          Ce(Dr)
        ]),
        O(f).subLine ? (z(), I("p", _h, L(O(f).subLine), 1)) : Y("", !0),
        s.value.skipGoal ? (z(), I("div", zh, "快进中：目标 " + L(O(f).pack.phases.find((v) => v.id === s.value.skipGoal.phase)?.name) + " 第" + L(s.value.skipGoal.round) + "轮", 1)) : Y("", !0),
        s.value.ended && s.value.settlement ? (z(), I("div", $h, [
          u("div", Sh, [
            g[8] || (g[8] = u("span", null, "结果", -1)),
            u("b", null, L(s.value.settlement.result ?? "—"), 1)
          ]),
          u("div", Eh, [
            g[9] || (g[9] = u("span", null, "评价", -1)),
            u("b", null, L(s.value.settlement.rating ?? "—"), 1)
          ]),
          O(f).session?.clearance && s.value.settlement.result === "失败" ? (z(), I("div", Ch, " 清算未通关 ")) : Y("", !0)
        ])) : s.value.ended ? (z(), I("div", Mh, "副本已手动结束。")) : Y("", !0),
        l.value && s.value.panel ? (z(), I("div", Ih, [
          s.value.panel.progressBar ? (z(), I("div", Th, [
            g[10] || (g[10] = u("span", null, "进度", -1)),
            u("b", Ph, L(s.value.panel.progressBar), 1)
          ])) : Y("", !0),
          s.value.panel.tasks.length ? (z(), I("div", Nh, [
            g[11] || (g[11] = u("span", null, "任务", -1)),
            u("ul", null, [
              (z(!0), I(X, null, me(s.value.panel.tasks, (v, _) => (z(), I("li", { key: _ }, L(v), 1))), 128))
            ])
          ])) : Y("", !0),
          s.value.panel.ps ? (z(), I("div", Rh, "ps：" + L(s.value.panel.ps), 1)) : Y("", !0)
        ])) : Y("", !0),
        u("div", Fh, [
          u("button", {
            class: "rlzc-btn",
            disabled: !A.value,
            onClick: g[0] || (g[0] = //@ts-ignore
            (...v) => O(Ir) && O(Ir)(...v))
          }, "跳过（到本阶段结束）", 8, Lh),
          u("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: g[1] || (g[1] = //@ts-ignore
            (...v) => O(Tr) && O(Tr)(...v))
          }, "手动结束副本", 8, Oh)
        ]),
        i.value && O(f).pack.docs?.length ? (z(), st(Or, {
          key: 5,
          pack: O(f).pack
        }, null, 8, ["pack"])) : Y("", !0)
      ], 64)) : (z(), I("div", Dh, [
        g[12] || (g[12] = u("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        Ce(Dr)
      ])),
      i.value ? Y("", !0) : (z(), I("div", jh, [
        g[14] || (g[14] = u("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        u("div", Bh, [
          ct(u("select", {
            "onUpdate:modelValue": g[2] || (g[2] = (v) => t.value = v),
            class: "rlzc-input"
          }, [
            g[13] || (g[13] = u("option", { value: "" }, "选择副本…", -1)),
            (z(!0), I(X, null, me(O(f).packs, (v) => (z(), I("option", {
              key: v.id,
              value: v.id
            }, L(v.level) + "｜" + L(v.name), 9, Vh))), 128))
          ], 512), [
            [Ho, t.value]
          ]),
          u("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: p
          }, "进入", 8, Uh)
        ])
      ])),
      !i.value && r.value?.docs?.length ? (z(), st(Or, {
        key: 3,
        pack: r.value
      }, null, 8, ["pack"])) : Y("", !0)
    ]));
  }
}), Hh = { class: "rlzc-ledger" }, Gh = { class: "rlzc-card rlzc-ledger-hero-card" }, Yh = { class: "rlzc-ledger-hero-cols" }, Kh = { class: "rlzc-ledger-hero-col" }, Zh = { class: "rlzc-ledger-hero-col-val" }, Jh = { class: "rlzc-ledger-hero-col" }, qh = { class: "rlzc-ledger-hero-col-val" }, Qh = { class: "rlzc-ledger-hero-col" }, Xh = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, em = { class: "rlzc-card" }, tm = {
  key: 0,
  class: "rlzc-ledger-list"
}, nm = { class: "rlzc-ledger-item-left" }, sm = { class: "rlzc-ledger-item-src" }, im = { class: "rlzc-ledger-item-time" }, rm = {
  key: 1,
  class: "rlzc-hint"
}, om = /* @__PURE__ */ Je({
  __name: "LedgerTab",
  setup(e) {
    const t = G(() => J()), n = G(() => jt(t.value)), s = G(() => f.ledger), i = G(() => Xt(n.value.value, s.value)), r = G(() => f.pack?.level ?? "D"), o = G(() => Dt[r.value]), l = G(() => In(n.value.value, s.value, o.value)), a = G(() => Math.max(0, o.value - i.value)), c = G(() => n.value.source === "默认值");
    function A(g) {
      return new Intl.NumberFormat("zh-CN").format(g);
    }
    function p(g) {
      return (g >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(g);
    }
    function h(g) {
      try {
        const v = new Date(g), _ = String(v.getMonth() + 1).padStart(2, "0"), P = String(v.getDate()).padStart(2, "0"), w = String(v.getHours()).padStart(2, "0"), y = String(v.getMinutes()).padStart(2, "0");
        return `${_}-${P} ${w}:${y}`;
      } catch {
        return g;
      }
    }
    return (g, v) => (z(), I("div", Hh, [
      u("div", Gh, [
        v[3] || (v[3] = u("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        u("b", {
          class: ae(["rlzc-ledger-hero-num", { negative: i.value < 0 }])
        }, L(A(i.value)), 3),
        v[4] || (v[4] = u("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        u("div", Yh, [
          u("div", Kh, [
            v[0] || (v[0] = u("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            u("span", Zh, L(r.value), 1)
          ]),
          u("div", Jh, [
            v[1] || (v[1] = u("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            u("span", qh, L(A(o.value)), 1)
          ]),
          u("div", Qh, [
            v[2] || (v[2] = u("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            u("span", {
              class: ae(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": l.value }])
            }, L(l.value ? `距线 ${A(a.value)}` : "无"), 3)
          ])
        ]),
        c.value ? (z(), I("p", Xh, "初始积分按 1000 计，可在设置页修改")) : Y("", !0)
      ]),
      u("div", em, [
        v[5] || (v[5] = u("h4", null, "流水", -1)),
        s.value.length ? (z(), I("ul", tm, [
          (z(!0), I(X, null, me([...s.value].reverse(), (_) => (z(), I("li", {
            key: `${_.mesIndex}-${_.delta}-${_.at}`,
            class: "rlzc-ledger-item"
          }, [
            u("div", nm, [
              u("span", sm, L(_.source), 1),
              u("span", im, L(h(_.at)), 1)
            ]),
            u("span", {
              class: ae(["rlzc-ledger-item-delta", _.delta >= 0 ? "pos" : "neg"])
            }, L(p(_.delta)), 3)
          ]))), 128))
        ])) : (z(), I("p", rm, "还没有收支记录。"))
      ])
    ]));
  }
}), lm = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, am = ["aria-expanded"], cm = ["data-kind"], Am = {
  key: 0,
  class: "rlzc-collapse-body"
}, um = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, dm = {
  key: 0,
  class: "rlzc-preset-area"
}, fm = { class: "rlzc-preset-row" }, pm = ["value"], hm = {
  key: 0,
  value: ""
}, mm = ["value"], gm = ["disabled"], xm = ["disabled"], ym = { class: "rlzc-stacked-field" }, vm = ["value"], bm = { class: "rlzc-stacked-field" }, wm = { class: "rlzc-key-wrap" }, km = ["type", "value"], _m = ["aria-label"], zm = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, $m = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Sm = { class: "rlzc-stacked-field" }, Em = ["value"], Cm = ["value"], Mm = ["value"], Im = ["value"], Tm = { class: "rlzc-conn-row" }, Pm = ["data-kind"], Nm = ["disabled"], Rm = {
  key: 1,
  class: "rlzc-option-list"
}, Fm = { class: "rlzc-option-row" }, Lm = ["aria-checked"], Om = { class: "rlzc-option-row" }, Dm = ["aria-checked"], jm = { class: "rlzc-option-row rlzc-option-row-timeout" }, Bm = { class: "rlzc-timeout-wrap" }, Vm = ["value"], Um = /* @__PURE__ */ Je({
  __name: "SubApiCard",
  setup(e) {
    const t = G(() => f.settings.subApi), n = G(() => t.value.presets.find((W) => W.id === t.value.presetId) ?? null), s = /* @__PURE__ */ pe([]), i = /* @__PURE__ */ pe(!1), r = /* @__PURE__ */ pe(!1), o = /* @__PURE__ */ pe("none"), l = /* @__PURE__ */ pe(""), a = G(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : o.value === "ok" ? { kind: "on", text: "已连接" } : o.value === "fail" ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" }), c = G(() => f.settings.cardCollapsed.subApi);
    function A() {
      f.settings.cardCollapsed.subApi = !f.settings.cardCollapsed.subApi, h();
    }
    const p = G(() => o.value === "ok" ? `已连接 · 共 ${s.value.length} 个模型` : o.value === "fail" ? `连接失败：${l.value}` : "未测试");
    function h() {
      ke();
    }
    function g(W) {
      t.value.source = W, o.value = "none", h();
    }
    function v() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function _() {
      const W = (await Sr("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!W) return;
      const S = { id: v(), name: W, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, S], t.value.presetId = S.id, s.value = [], o.value = "none", h();
    }
    async function P() {
      if (!n.value) return;
      const W = (await Sr("改名为：", n.value.name))?.trim();
      W && (n.value.name = W, h());
    }
    async function w() {
      n.value && await vt(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((W) => W.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", s.value = [], o.value = "none", h());
    }
    function y(W) {
      t.value.presetId = W.target.value, s.value = [], o.value = "none", h();
    }
    function x(W, S) {
      n.value && (n.value[W] = S.target.value.trim(), h());
    }
    async function M() {
      if (n.value) {
        r.value = !0, o.value = "none", l.value = "";
        try {
          const W = await $f(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          s.value = W.models, !n.value.model && W.models.length && (n.value.model = W.models[0], h()), o.value = "ok";
        } catch (W) {
          o.value = "fail", l.value = gl(W), s.value = await zl(n.value).catch(() => []);
        } finally {
          r.value = !1;
        }
      }
    }
    function U(W) {
      const S = Math.floor(Number(W.target.value));
      if (!Number.isFinite(S) || S < 5) {
        Ie("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = S, h();
    }
    function q(W, S) {
      t.value[W] = S, h();
    }
    return (W, S) => (z(), I("div", lm, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !c.value,
        onClick: A
      }, [
        S[9] || (S[9] = u("h4", null, "副本事件检测", -1)),
        u("span", {
          class: "rlzc-dot",
          "data-kind": a.value.kind
        }, L(a.value.text), 9, cm),
        u("span", {
          class: ae(["rlzc-collapse-arrow", { open: !c.value }])
        }, "▸", 2)
      ], 8, am),
      c.value ? Y("", !0) : (z(), I("div", Am, [
        S[24] || (S[24] = u("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        u("div", um, [
          u("button", {
            class: ae({ on: t.value.source === "off" }),
            onClick: S[0] || (S[0] = (k) => g("off"))
          }, "关闭", 2),
          u("button", {
            class: ae({ on: t.value.source === "main" }),
            onClick: S[1] || (S[1] = (k) => g("main"))
          }, "跟随主API", 2),
          u("button", {
            class: ae({ on: t.value.source === "preset" }),
            onClick: S[2] || (S[2] = (k) => g("preset"))
          }, "自设API", 2)
        ]),
        t.value.source === "preset" ? (z(), I("div", dm, [
          u("div", fm, [
            u("select", {
              class: "rlzc-input",
              value: t.value.presetId,
              onChange: y
            }, [
              t.value.presets.length ? Y("", !0) : (z(), I("option", hm, "还没有保存的接口")),
              (z(!0), I(X, null, me(t.value.presets, (k) => (z(), I("option", {
                key: k.id,
                value: k.id
              }, L(k.name), 9, mm))), 128))
            ], 40, pm),
            u("button", {
              class: "rlzc-icon-btn",
              "aria-label": "新建接口",
              type: "button",
              onClick: _
            }, [...S[10] || (S[10] = [
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
              onClick: P
            }, [...S[11] || (S[11] = [
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
            ])], 8, gm),
            u("button", {
              class: "rlzc-icon-btn rlzc-danger",
              "aria-label": "删除接口",
              type: "button",
              disabled: !n.value,
              onClick: w
            }, [...S[12] || (S[12] = [
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
            ])], 8, xm)
          ]),
          n.value ? (z(), I(X, { key: 0 }, [
            u("div", ym, [
              S[13] || (S[13] = u("label", { class: "rlzc-label" }, "地址", -1)),
              u("input", {
                class: "rlzc-input",
                value: n.value.url,
                placeholder: "https://…/v1",
                onChange: S[3] || (S[3] = (k) => x("url", k))
              }, null, 40, vm)
            ]),
            u("div", bm, [
              S[16] || (S[16] = u("label", { class: "rlzc-label" }, "密钥", -1)),
              u("div", wm, [
                u("input", {
                  class: "rlzc-input",
                  type: i.value ? "text" : "password",
                  value: n.value.key,
                  autocomplete: "off",
                  onChange: S[4] || (S[4] = (k) => x("key", k))
                }, null, 40, km),
                u("button", {
                  class: "rlzc-eye-btn",
                  type: "button",
                  "aria-label": i.value ? "隐藏密钥" : "显示密钥",
                  onClick: S[5] || (S[5] = (k) => i.value = !i.value)
                }, [
                  i.value ? (z(), I("svg", zm, [...S[14] || (S[14] = [
                    u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    u("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1),
                    u("path", { d: "M2 2l12 12" }, null, -1)
                  ])])) : (z(), I("svg", $m, [...S[15] || (S[15] = [
                    u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    u("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1)
                  ])]))
                ], 8, _m)
              ])
            ]),
            u("div", Sm, [
              S[17] || (S[17] = u("label", { class: "rlzc-label" }, "模型", -1)),
              s.value.length ? (z(), I("select", {
                key: 0,
                class: "rlzc-input",
                value: n.value.model,
                onChange: S[6] || (S[6] = (k) => x("model", k))
              }, [
                s.value.includes(n.value.model) ? Y("", !0) : (z(), I("option", {
                  key: 0,
                  value: n.value.model
                }, L(n.value.model || "请选择…"), 9, Cm)),
                (z(!0), I(X, null, me(s.value, (k) => (z(), I("option", {
                  key: k,
                  value: k
                }, L(k), 9, Mm))), 128))
              ], 40, Em)) : (z(), I("input", {
                key: 1,
                class: "rlzc-input rlzc-input-disabled",
                value: n.value.model ? n.value.model : "先测试连接",
                readonly: "",
                tabindex: "-1"
              }, null, 8, Im))
            ]),
            u("div", Tm, [
              u("span", {
                class: "rlzc-dot",
                "data-kind": o.value === "ok" ? "on" : o.value === "fail" ? "warn" : "off"
              }, L(p.value), 9, Pm),
              u("button", {
                class: "rlzc-btn ghost",
                disabled: r.value || !n.value.url,
                onClick: M
              }, "测试连接", 8, Nm)
            ])
          ], 64)) : Y("", !0)
        ])) : Y("", !0),
        t.value.source !== "off" ? (z(), I("div", Rm, [
          u("div", Fm, [
            S[19] || (S[19] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "省钱模式"),
              u("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: ae(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: S[7] || (S[7] = (k) => q("saveMode", !t.value.saveMode))
            }, [...S[18] || (S[18] = [
              u("span", null, null, -1)
            ])], 10, Lm)
          ]),
          u("div", Om, [
            S[21] || (S[21] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "等检测完再写下一轮"),
              u("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: ae(["rlzc-toggle", { on: t.value.wait }]),
              onClick: S[8] || (S[8] = (k) => q("wait", !t.value.wait))
            }, [...S[20] || (S[20] = [
              u("span", null, null, -1)
            ])], 10, Dm)
          ]),
          u("div", jm, [
            S[23] || (S[23] = u("span", null, "超时", -1)),
            u("div", Bm, [
              u("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: U
              }, null, 40, Vm),
              S[22] || (S[22] = u("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : Y("", !0)
      ]))
    ]));
  }
}), Wm = { class: "rlzc-settings" }, Hm = { class: "rlzc-card" }, Gm = ["value"], Ym = { class: "rlzc-card rlzc-collapsible" }, Km = ["aria-expanded"], Zm = {
  key: 0,
  class: "rlzc-collapse-body"
}, Jm = { class: "rlzc-ledger-status" }, qm = { class: "rlzc-row" }, Qm = ["placeholder"], Xm = ["disabled"], eg = { class: "rlzc-row" }, tg = ["disabled"], ng = { class: "rlzc-row" }, sg = { class: "rlzc-seg-group" }, ig = ["onClick"], rg = ["disabled"], og = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, lg = { class: "rlzc-card rlzc-collapsible" }, ag = ["aria-expanded"], cg = {
  key: 0,
  class: "rlzc-collapse-body"
}, Ag = { class: "rlzc-depth" }, ug = { class: "rlzc-field" }, dg = ["value"], fg = { class: "rlzc-field" }, pg = ["value"], hg = { class: "rlzc-field" }, mg = ["value"], gg = { class: "rlzc-field" }, xg = ["value"], yg = { class: "rlzc-card rlzc-collapsible" }, vg = ["aria-expanded"], bg = {
  key: 0,
  class: "rlzc-collapse-body"
}, wg = ["value", "onChange"], kg = { class: "rlzc-card" }, _g = {
  key: 0,
  class: "rlzc-list"
}, zg = ["onClick"], $g = {
  key: 1,
  class: "rlzc-hint"
}, Sg = {
  key: 2,
  class: "rlzc-errors"
}, Eg = { class: "rlzc-card" }, Cg = { class: "rlzc-check" }, Mg = ["checked"], Ig = { class: "rlzc-check" }, Tg = ["checked"], Pg = /* @__PURE__ */ Je({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ pe([]), n = /* @__PURE__ */ pe(null), s = /* @__PURE__ */ pe(null), i = /* @__PURE__ */ pe(null), r = /* @__PURE__ */ pe(""), o = /* @__PURE__ */ pe(""), l = /* @__PURE__ */ pe(""), a = ["D", "C", "B", "A", "S"], c = G(() => jt(J())), A = G(() => Xt(c.value.value, f.ledger)), p = G(() => f.pack?.level ?? "D"), h = G(() => Dt[p.value]), g = G(() => In(c.value.value, f.ledger, h.value));
    function v() {
      s.value !== null && (Cp(s.value), s.value = null);
    }
    function _() {
      i.value !== null && (Ep(i.value, r.value || "手动"), i.value = null, r.value = "");
    }
    function P() {
      !o.value && !l.value || (Mp(o.value || void 0, l.value || void 0), o.value = "", l.value = "", Ie("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function w(S, k) {
      const j = Math.max(0, Math.min(1e4, Math.floor(Number(k.target.value) || 0)));
      f.settings.depths[S] = j, ke();
    }
    async function y(S) {
      const k = S.target, j = k.files?.[0];
      k.value = "", j && (t.value = _p(await j.text()), t.value.length || Ie("success", `已导入副本包：${j.name}`));
    }
    async function x(S, k) {
      await vt(`确定删除自定义副本包《${k}》吗？`) && zp(S);
    }
    function M(S, k) {
      const j = Math.floor(Number(k.target.value));
      !Number.isFinite(j) || j < 1 || (f.settings.genericCaps = { ...f.settings.genericCaps, [S]: j }, ke());
    }
    function U(S) {
      Kp(S.target.value);
    }
    function q(S, k) {
      f.settings[S] = k.target.checked, ke();
    }
    function W(S) {
      f.settings.cardCollapsed[S] = !f.settings.cardCollapsed[S], ke();
    }
    return (S, k) => (z(), I(X, null, [
      u("div", Wm, [
        u("div", Hm, [
          k[15] || (k[15] = u("h4", null, "副本信息显示位置", -1)),
          u("select", {
            class: "rlzc-input",
            value: O(f).settings.panelDisplay,
            onChange: U
          }, [...k[14] || (k[14] = [
            u("option", { value: "panel" }, "扩展面板（默认）", -1),
            u("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, Gm),
          k[16] || (k[16] = u("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        u("div", Ym, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !O(f).settings.cardCollapsed.accountFix,
            onClick: k[0] || (k[0] = (j) => W("accountFix"))
          }, [
            k[17] || (k[17] = u("h4", null, "账户校正", -1)),
            u("span", {
              class: ae(["rlzc-collapse-arrow", { open: !O(f).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, Km),
          O(f).settings.cardCollapsed.accountFix ? Y("", !0) : (z(), I("div", Zm, [
            k[19] || (k[19] = u("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            u("div", Jm, [
              u("span", null, [
                k[18] || (k[18] = Ve("当前余额：", -1)),
                u("b", null, L(A.value), 1)
              ]),
              u("span", null, L(g.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            k[20] || (k[20] = u("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            u("div", qm, [
              ct(u("input", {
                "onUpdate:modelValue": k[1] || (k[1] = (j) => s.value = j),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${c.value.value}`
              }, null, 8, Qm), [
                [
                  Gt,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: v
              }, "保存", 8, Xm)
            ]),
            k[21] || (k[21] = u("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            u("div", eg, [
              ct(u("input", {
                "onUpdate:modelValue": k[2] || (k[2] = (j) => i.value = j),
                type: "number",
                class: "rlzc-input",
                placeholder: "金额（正/负）"
              }, null, 512), [
                [
                  Gt,
                  i.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              ct(u("input", {
                "onUpdate:modelValue": k[3] || (k[3] = (j) => r.value = j),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [Gt, r.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: i.value === null,
                onClick: _
              }, "追加", 8, tg)
            ]),
            k[22] || (k[22] = u("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            k[23] || (k[23] = u("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            u("div", ng, [
              u("div", sg, [
                (z(), I(X, null, me(a, (j) => u("button", {
                  key: j,
                  class: ae(["rlzc-seg", { active: o.value === j }]),
                  onClick: (ve) => o.value = o.value === j ? "" : j
                }, L(j), 11, ig)), 64))
              ]),
              ct(u("input", {
                "onUpdate:modelValue": k[4] || (k[4] = (j) => l.value = j),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [Gt, l.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: !o.value && !l.value,
                onClick: P
              }, "校正", 8, rg)
            ]),
            O(f).ledger.length === 0 && c.value.source === "默认值" ? (z(), I("p", og, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : Y("", !0)
          ]))
        ]),
        u("div", lg, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !O(f).settings.cardCollapsed.depths,
            onClick: k[5] || (k[5] = (j) => W("depths"))
          }, [
            k[24] || (k[24] = u("h4", null, "注入深度", -1)),
            u("span", {
              class: ae(["rlzc-collapse-arrow", { open: !O(f).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, ag),
          O(f).settings.cardCollapsed.depths ? Y("", !0) : (z(), I("div", cg, [
            k[29] || (k[29] = u("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            u("div", Ag, [
              u("label", ug, [
                k[25] || (k[25] = u("span", null, [
                  Ve("副本暗号"),
                  u("small", null, "触发世界书的副本条目")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: O(f).settings.depths.token,
                  onChange: k[6] || (k[6] = (j) => w("token", j))
                }, null, 40, dg)
              ]),
              u("label", fg, [
                k[26] || (k[26] = u("span", null, [
                  Ve("副本进度"),
                  u("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: O(f).settings.depths.progress,
                  onChange: k[7] || (k[7] = (j) => w("progress", j))
                }, null, 40, pg)
              ]),
              u("label", hg, [
                k[27] || (k[27] = u("span", null, [
                  Ve("本轮指令"),
                  u("small", null, "本轮事件与时限写法")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: O(f).settings.depths.turn,
                  onChange: k[8] || (k[8] = (j) => w("turn", j))
                }, null, 40, mg)
              ]),
              u("label", gg, [
                k[28] || (k[28] = u("span", null, [
                  Ve("账户"),
                  u("small", null, "积分余额与清算状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: O(f).settings.depths.ledger,
                  onChange: k[9] || (k[9] = (j) => w("ledger", j))
                }, null, 40, xg)
              ])
            ])
          ]))
        ]),
        Ce(Um),
        u("div", yg, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !O(f).settings.cardCollapsed.genericCaps,
            onClick: k[10] || (k[10] = (j) => W("genericCaps"))
          }, [
            k[30] || (k[30] = u("h4", null, "通用副本默认轮数上限", -1)),
            u("span", {
              class: ae(["rlzc-collapse-arrow", { open: !O(f).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, vg),
          O(f).settings.cardCollapsed.genericCaps ? Y("", !0) : (z(), I("div", bg, [
            k[31] || (k[31] = u("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (z(), I(X, null, me(a, (j) => u("label", {
              key: j,
              class: "rlzc-field"
            }, [
              u("span", null, L(j) + " 级", 1),
              u("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: O(f).settings.genericCaps[j],
                onChange: (ve) => M(j, ve)
              }, null, 40, wg)
            ])), 64))
          ]))
        ]),
        u("div", kg, [
          k[32] || (k[32] = u("h4", null, "自定义副本包", -1)),
          O(f).settings.customPacks.length ? (z(), I("ul", _g, [
            (z(!0), I(X, null, me(O(f).settings.customPacks, (j) => (z(), I("li", {
              key: j.id
            }, [
              u("span", null, [
                Ve(L(j.level) + "｜" + L(j.name) + " ", 1),
                u("small", null, "v" + L(j.version), 1)
              ]),
              u("button", {
                class: "rlzc-btn ghost small",
                onClick: (ve) => x(j.id, j.name)
              }, "删除", 8, zg)
            ]))), 128))
          ])) : (z(), I("p", $g, "还没有导入自定义副本包。")),
          u("input", {
            ref_key: "fileInput",
            ref: n,
            type: "file",
            accept: ".json,application/json",
            hidden: "",
            onChange: y
          }, null, 544),
          u("button", {
            class: "rlzc-btn",
            onClick: k[11] || (k[11] = (j) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (z(), I("ul", Sg, [
            (z(!0), I(X, null, me(t.value, (j, ve) => (z(), I("li", { key: ve }, L(j), 1))), 128))
          ])) : Y("", !0)
        ]),
        u("div", Eg, [
          k[35] || (k[35] = u("h4", null, "其他", -1)),
          u("label", Cg, [
            u("input", {
              type: "checkbox",
              checked: O(f).settings.showBall,
              onChange: k[12] || (k[12] = (j) => q("showBall", j))
            }, null, 40, Mg),
            k[33] || (k[33] = Ve("显示悬浮球", -1))
          ]),
          u("label", Ig, [
            u("input", {
              type: "checkbox",
              checked: O(f).settings.debug,
              onChange: k[13] || (k[13] = (j) => q("debug", j))
            }, null, 40, Tg),
            k[34] || (k[34] = Ve("调试模式", -1))
          ])
        ])
      ]),
      k[36] || (k[36] = u("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), Ng = { class: "rlzc-debug" }, Rg = {
  key: 0,
  class: "rlzc-note"
}, Fg = {
  key: 0,
  class: "rlzc-note"
}, Lg = {
  key: 1,
  class: "rlzc-note"
}, Og = {
  key: 2,
  class: "rlzc-card"
}, Dg = { class: "rlzc-row" }, jg = ["disabled"], Bg = ["value"], Vg = ["disabled"], Ug = { class: "rlzc-row" }, Wg = ["disabled"], Hg = ["disabled"], Gg = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, Yg = ["aria-expanded"], Kg = {
  key: 0,
  class: "rlzc-collapse-body"
}, Zg = ["onUpdate:modelValue", "disabled"], Jg = ["disabled"], qg = { class: "rlzc-card" }, Qg = {
  key: 0,
  class: "rlzc-hint"
}, Xg = { class: "rlzc-hint" }, ex = { class: "rlzc-list rlzc-warns" }, tx = { class: "rlzc-card" }, nx = {
  key: 0,
  class: "rlzc-list"
}, sx = ["disabled", "onClick"], ix = {
  key: 1,
  class: "rlzc-hint"
}, rx = {
  key: 4,
  class: "rlzc-card"
}, ox = { class: "rlzc-pre" }, lx = {
  key: 0,
  class: "rlzc-pre"
}, ax = {
  class: "rlzc-card",
  open: ""
}, cx = { class: "rlzc-pre" }, Ax = { class: "rlzc-card" }, ux = { class: "rlzc-pre" }, dx = { class: "rlzc-card" }, fx = { class: "rlzc-pre" }, px = { class: "rlzc-card" }, hx = { class: "rlzc-table" }, mx = {
  key: 0,
  class: "rlzc-warn-text"
}, gx = { key: 1 }, xx = ["disabled"], yx = /* @__PURE__ */ Je({
  __name: "DebugTab",
  setup(e) {
    const t = G(() => f.settings.debug), n = /* @__PURE__ */ pe(""), s = /* @__PURE__ */ pe(null), i = /* @__PURE__ */ hs({});
    gs(
      () => [f.tick, f.pack?.id],
      () => {
        for (const w of Object.keys(i)) delete i[w];
        const P = Bl() ?? {};
        for (const w of f.pack?.roles ?? []) i[w] = P[w] ?? "";
      },
      { immediate: !0 }
    );
    const r = G(() => {
      f.tick;
      const P = J(), w = [], y = f.session?.entryIndex ?? 0;
      for (let x = y; x < P.length; x++) {
        const M = P[x]?.extra?.rlzc;
        M && w.push({ index: x, snap: M });
      }
      return w.reverse().slice(0, 60);
    }), o = G(() => {
      const P = new Set((f.audit?.warnings ?? []).filter((x) => x.kind === "limit" || x.kind === "eventMissed").map((x) => x.index)), w = J(), y = f.session?.entryIndex ?? 0;
      for (let x = y; x < w.length; x++)
        w[x]?.extra?.rlzc?.ledgerMismatch && P.add(x);
      return P;
    }), l = G(() => {
      if (f.tick, !f.session || !f.pack || !f.progress) return null;
      const P = J(), w = _s(P, f.progress.entryIndex);
      let y = null;
      for (let x = P.length - 1; x >= f.progress.entryIndex; x--) {
        const M = P[x]?.extra?.rlzc?.sub;
        if (M) {
          y = M;
          break;
        }
      }
      return {
        text: w ? yl(f.pack, w.state) : "",
        state: w?.state ?? null,
        record: y
      };
    }), a = { done: "✓", missed: "✗", void: "–" };
    function c(P) {
      if (!P.sub && !P.skippedEvents?.length) return "";
      const w = [];
      P.sub?.skipped && w.push(`未更新（${P.sub.error ?? ""}）`);
      for (const y of P.sub?.events ?? []) w.push(`${y.id}${a[y.status]}`);
      for (const y of P.skippedEvents ?? []) w.push(`跳过${y.id}`);
      return P.sub && !P.sub.skipped && !w.length && w.push("已整理"), w.join(" ");
    }
    const A = G(() => {
      const P = f.progress;
      if (!P) return null;
      const { perMessage: w, phase: y, next: x, ...M } = P;
      return {
        phase: y.id + " " + y.name,
        ...M,
        next: x ? { round: x.round, skipFrom: x.skipFrom, events: x.events.map((U) => U.id) } : null,
        messages: Object.keys(w).length
      };
    });
    function p() {
      n.value && Lp(n.value);
    }
    function h() {
      s.value !== null && s.value >= 0 && Op(s.value);
    }
    function g() {
      Dp({ ...i });
    }
    const v = (P) => JSON.stringify(P, null, 2);
    function _(P) {
      f.settings.cardCollapsed[P] = !f.settings.cardCollapsed[P], ke();
    }
    return (P, w) => (z(), I("div", Ng, [
      O(f).session ? (z(), I(X, { key: 1 }, [
        t.value ? Y("", !0) : (z(), I("p", Fg, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        O(f).pack && O(f).session.packVersion !== O(f).pack.version ? (z(), I("p", Lg, " 入场时副本包版本为 " + L(O(f).session.packVersion) + "，当前为 " + L(O(f).pack.version) + "。 ", 1)) : Y("", !0),
        O(f).pack?.phases.length ? (z(), I("div", Og, [
          w[5] || (w[5] = u("h4", null, "手动修正", -1)),
          u("div", Dg, [
            ct(u("select", {
              "onUpdate:modelValue": w[0] || (w[0] = (y) => n.value = y),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              w[4] || (w[4] = u("option", { value: "" }, "切换到阶段…", -1)),
              (z(!0), I(X, null, me(O(f).pack.phases, (y) => (z(), I("option", {
                key: y.id,
                value: y.id
              }, L(y.name), 9, Bg))), 128))
            ], 8, jg), [
              [Ho, n.value]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: p
            }, "切换", 8, Vg)
          ]),
          u("div", Ug, [
            ct(u("input", {
              "onUpdate:modelValue": w[1] || (w[1] = (y) => s.value = y),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, Wg), [
              [
                Gt,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: h
            }, "修正轮次", 8, Hg)
          ])
        ])) : Y("", !0),
        O(f).pack?.roles?.length ? (z(), I("div", Gg, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !O(f).settings.cardCollapsed.rolesDebug,
            onClick: w[2] || (w[2] = (y) => _("rolesDebug"))
          }, [
            w[6] || (w[6] = u("h4", null, "角色登记", -1)),
            u("span", {
              class: ae(["rlzc-collapse-arrow", { open: !O(f).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, Yg),
          O(f).settings.cardCollapsed.rolesDebug ? Y("", !0) : (z(), I("div", Kg, [
            (z(!0), I(X, null, me(O(f).pack.roles, (y) => (z(), I("label", {
              key: y,
              class: "rlzc-field"
            }, [
              u("span", null, L(y), 1),
              ct(u("input", {
                "onUpdate:modelValue": (x) => i[y] = x,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, Zg), [
                [Gt, i[y]]
              ])
            ]))), 128)),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: g
            }, "保存登记", 8, Jg)
          ]))
        ])) : Y("", !0),
        u("div", qg, [
          w[8] || (w[8] = u("h4", null, "<副本> 核对", -1)),
          O(f).audit?.warnings.length ? (z(), I(X, { key: 1 }, [
            u("p", Xg, "共 " + L(O(f).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            u("ul", ex, [
              (z(!0), I(X, null, me(O(f).audit.warnings.slice(-30).reverse(), (y, x) => (z(), I("li", { key: x }, [
                u("span", null, [
                  u("small", null, "#" + L(y.index) + "｜" + L(y.phase) + "第" + L(y.round) + "轮", 1),
                  w[7] || (w[7] = u("br", null, null, -1)),
                  Ve("⚠️ " + L(y.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (z(), I("p", Qg, "没有发现问题。"))
        ]),
        u("div", tx, [
          w[9] || (w[9] = u("h4", null, "手动操作记录", -1)),
          O(f).session.manual.length ? (z(), I("ul", nx, [
            (z(!0), I(X, null, me(O(f).session.manual, (y, x) => (z(), I("li", { key: x }, [
              u("code", null, "#" + L(y.atIndex) + " " + L(y.kind) + " " + L("phase" in y ? y.phase : "") + L("round" in y ? y.round : "") + L("targetPhase" in y ? `${y.targetPhase}:${y.targetRound}` : ""), 1),
              u("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (M) => O(jp)(x)
              }, "撤销", 8, sx)
            ]))), 128))
          ])) : (z(), I("p", ix, "无"))
        ]),
        l.value && (l.value.state || l.value.record) ? (z(), I("details", rx, [
          w[10] || (w[10] = u("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          u("pre", ox, L(l.value.text || "（尚无状态）"), 1),
          l.value.record ? (z(), I("pre", lx, L(v(l.value.record)), 1)) : Y("", !0),
          w[11] || (w[11] = u("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : Y("", !0),
        u("details", ax, [
          w[12] || (w[12] = u("summary", null, "本次注入", -1)),
          u("pre", cx, L([O(f).lastInjection.token, O(f).lastInjection.progress, O(f).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        u("details", Ax, [
          w[13] || (w[13] = u("summary", null, "重放结果", -1)),
          u("pre", ux, L(v(A.value)), 1)
        ]),
        u("details", dx, [
          w[14] || (w[14] = u("summary", null, "会话原始数据", -1)),
          u("pre", fx, L(v(O(f).session)), 1)
        ]),
        u("details", px, [
          w[16] || (w[16] = u("summary", null, "每楼快照（最近60条）", -1)),
          u("table", hx, [
            w[15] || (w[15] = u("thead", null, [
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
              (z(!0), I(X, null, me(r.value, (y) => (z(), I("tr", {
                key: y.index,
                class: ae({ "rlzc-row-warn": o.value.has(y.index) })
              }, [
                u("td", null, L(y.index) + L(y.snap.entry ? "★" : ""), 1),
                u("td", null, L(y.snap.phase), 1),
                u("td", null, L(y.snap.round), 1),
                u("td", null, L(y.snap.clock ?? ""), 1),
                u("td", null, L(y.snap.limit?.text ?? ""), 1),
                u("td", null, L(y.snap.injected.join(" ")), 1),
                u("td", null, L(c(y.snap)), 1),
                y.snap.ledgerMismatch ? (z(), I("td", mx, "状态栏 " + L(y.snap.ledgerMismatch.status) + " / 账本 " + L(y.snap.ledgerMismatch.ledger), 1)) : (z(), I("td", gx))
              ], 2))), 128))
            ])
          ])
        ]),
        u("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: w[3] || (w[3] = //@ts-ignore
          (...y) => O(Pr) && O(Pr)(...y))
        }, "删除副本会话", 8, xx)
      ], 64)) : (z(), I("p", Rg, "当前聊天没有副本会话。"))
    ]));
  }
}), vx = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, bx = { class: "rlzc-head" }, wx = { class: "rlzc-tabs" }, kx = ["onClick"], _x = { class: "rlzc-body" }, zx = /* @__PURE__ */ Je({
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
        if (!await vt("此页会显示副本真相，确定要打开吗？")) return;
        f.debugUnlocked = !0;
      }
      f.tab = s;
    }
    return (s, i) => (z(), I("div", {
      class: "rlzc-backdrop",
      onClick: i[1] || (i[1] = aA((r) => O(f).panelOpen = !1, ["self"]))
    }, [
      u("section", vx, [
        u("header", bx, [
          i[2] || (i[2] = u("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          u("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: i[0] || (i[0] = (r) => O(f).panelOpen = !1)
          }, "×")
        ]),
        u("nav", wx, [
          (z(), I(X, null, me(t, (r) => u("button", {
            key: r.id,
            class: ae({ on: O(f).tab === r.id }),
            onClick: (o) => n(r.id)
          }, L(r.label), 11, kx)), 64))
        ]),
        u("div", _x, [
          O(f).tab === "system" ? (z(), st(Wh, { key: 0 })) : O(f).tab === "ledger" ? (z(), st(om, { key: 1 })) : O(f).tab === "settings" ? (z(), st(Pg, { key: 2 })) : O(f).tab === "debug" && O(f).debugUnlocked ? (z(), st(yx, { key: 3 })) : Y("", !0)
        ])
      ])
    ]));
  }
}), $x = /* @__PURE__ */ Je({
  __name: "App",
  setup(e) {
    return (t, n) => (z(), I(X, null, [
      O(f).settings.showBall ? (z(), st(th, { key: 0 })) : Y("", !0),
      O(f).panelOpen ? (z(), st(zx, { key: 1 })) : Y("", !0)
    ], 64));
  }
}), Sx = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field{align-items:flex-start}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-depth .rlzc-field>.rlzc-input{flex:0 0 72px;width:72px}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-conn-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout{justify-content:flex-start;gap:16px}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px}.rlzc-input-num{width:72px;text-align:right;font-variant-numeric:tabular-nums}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-head .rlzc-dot{font-size:12px}';
function Ex(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function Zl(e, t, n) {
  const s = ue().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function Cx() {
  const e = Ex();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await Zl("/api/extensions/version", e, t);
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
async function Mx(e) {
  const t = await Zl("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const jr = "rlzc-host", Br = "rlzc-menu-btn", Vr = "rlzc-settings-drawer";
function Ix() {
  if (document.getElementById(jr)) return;
  const e = document.createElement("div");
  e.id = jr, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Sx, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), uA($x).mount(s), Jl(), ql();
}
function Jl(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => Jl(e + 1), 500);
    return;
  }
  if (document.getElementById(Br)) return;
  const n = document.createElement("div");
  n.id = Br, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const i = document.createElement("span");
  i.textContent = "回廊种菜系统", n.append(s, i), n.addEventListener("click", () => {
    f.panelOpen = !f.panelOpen;
  }), t.appendChild(n);
}
function ql(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => ql(e + 1), 500);
    return;
  }
  if (document.getElementById(Vr)) return;
  const n = (q, W = "", S = "") => {
    const k = document.createElement(q);
    return W && (k.className = W), S && (k.textContent = S), k;
  }, s = n("div");
  s.id = Vr;
  const i = n("div", "inline-drawer"), r = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), r.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const a = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => f.panelOpen = !0);
  const A = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  A.addEventListener("click", () => {
    f.settings.ball = { x: null, y: null }, f.settings.showBall = !0, ke();
  });
  const p = n("label", "checkbox_label"), h = document.createElement("input");
  h.type = "checkbox", h.addEventListener("change", () => {
    f.settings.showBall = h.checked, ke();
  }), p.append(h, n("span", "", "显示悬浮球")), gs(() => f.settings.showBall, (q) => h.checked = q, { immediate: !0 });
  const g = n("div", "flex-container");
  g.append(c, A);
  const v = n("div", "flex-container alignitemscenter"), _ = n("small", "rlzc-update-status", "正在检查更新…"), P = n("div", "menu_button menu_button_icon", "检查更新"), w = n("div", "menu_button menu_button_icon", "立即更新"), y = n("div", "menu_button menu_button_icon", "刷新页面");
  w.style.display = "none", y.style.display = "none", v.append(_, P, w, y);
  let x = null, M = !1;
  const U = async () => {
    if (!M) {
      M = !0, _.textContent = "正在检查更新…", w.style.display = "none";
      try {
        x = await Cx();
        const q = x.commit ? `（${x.commit}）` : "";
        x.isGit ? x.isUpToDate ? _.textContent = `已是最新版本${q}` : (_.textContent = `有新版本可以更新，当前${q || "版本较旧"}`, w.style.display = "") : _.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = x.isGit && !x.isUpToDate ? "" : "none";
      } catch (q) {
        _.textContent = `检查更新失败：${q.message}`;
      } finally {
        M = !1;
      }
    }
  };
  P.addEventListener("click", () => void U()), w.addEventListener("click", async () => {
    if (!(!x || M)) {
      M = !0, _.textContent = "正在更新…", w.style.display = "none";
      try {
        await Mx(x), l.style.display = "none", _.textContent = "更新完成，刷新页面后生效。", y.style.display = "";
      } catch (q) {
        _.textContent = `更新失败：${q.message}`, w.style.display = "";
      } finally {
        M = !1;
      }
    }
  }), y.addEventListener("click", () => location.reload()), setTimeout(() => void U(), 3e3), a.append(g, p, v, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), i.append(r, a), s.append(i), t.append(s);
}
globalThis.rlzcInterceptor = Np;
function si() {
  wp(), lt("MESSAGE_RECEIVED", (e, t) => Yp(Number(e), t)), lt("CHARACTER_MESSAGE_RENDERED", (e) => Xs(Number(e))), lt("MESSAGE_DELETED", () => Qs()), lt("MESSAGE_SWIPED", (e) => {
    Rp(Number(e)), Xs(Number(e));
  }), lt("MESSAGE_EDITED", () => Qs()), lt("MESSAGE_UPDATED", (e) => {
    Qs(), Xs(Number(e));
  }), lt("CHAT_CHANGED", () => Lr()), lt("MORE_MESSAGES_LOADED", () => Bi()), Ix(), bp({ view: Qp, toggle: Xp }), Lr(), console.log("[rlzc] 回廊种菜系统已加载", f.settings);
}
const Ur = window.jQuery;
typeof Ur == "function" ? Ur(() => si()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", si) : si();
