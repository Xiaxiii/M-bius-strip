/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const re = {}, $t = [], Et = () => {
}, wr = () => !1, Qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xn = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, _r = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, vl = Object.prototype.hasOwnProperty, ne = (e, t) => vl.call(e, t), H = Array.isArray, lt = (e) => yn(e) === "[object Map]", It = (e) => yn(e) === "[object Set]", Ei = (e) => yn(e) === "[object Date]", ee = (e) => typeof e == "function", ce = (e) => typeof e == "string", We = (e) => typeof e == "symbol", oe = (e) => e !== null && typeof e == "object", kr = (e) => (oe(e) || ee(e)) && ee(e.then) && ee(e.catch), zr = Object.prototype.toString, yn = (e) => zr.call(e), yl = (e) => yn(e).slice(8, -1), $r = (e) => yn(e) === "[object Object]", ei = (e) => ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rn = /* @__PURE__ */ Xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), es = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, wl = /-\w/g, Te = es(
  (e) => e.replace(wl, (t) => t.slice(1).toUpperCase())
), _l = /\B([A-Z])/g, Ft = es(
  (e) => e.replace(_l, "-$1").toLowerCase()
), Sr = es((e) => e.charAt(0).toUpperCase() + e.slice(1)), vs = es(
  (e) => e ? `on${Sr(e)}` : ""
), Ue = (e, t) => !Object.is(e, t), Nn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Er = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, ts = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ci;
const ns = () => Ci || (Ci = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ss(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = ce(s) ? Sl(s) : ss(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ce(e) || oe(e))
    return e;
}
const kl = /;(?![^(]*\))/g, zl = /:([^]+)/, $l = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Sl(e) {
  const t = {};
  return e.replace($l, (n) => n.startsWith("/*") ? "" : n).split(kl).forEach((n) => {
    if (n) {
      const s = n.split(zl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function le(e) {
  let t = "";
  if (ce(e))
    t = e;
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const s = le(e[n]);
      s && (t += s + " ");
    }
  else if (oe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const El = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Cl = /* @__PURE__ */ Xs(El);
function Cr(e) {
  return !!e || e === "";
}
function Ml(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = ct(e[i], t[i], n);
  return s;
}
function Mi(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const r of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!i[l] && ct(r, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    i[o] = 1;
  }
  return !0;
}
function Il(e, t, n) {
  let s = lt(e), i = lt(t);
  if (s || i || (s = It(e), i = It(t), s || i))
    return s && i ? Mi(e, t, n) : !1;
  const r = Object.keys(e).length, o = Object.keys(t).length;
  if (r !== o)
    return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l), A = t.hasOwnProperty(l);
    if (a && !A || !a && A || !ct(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function Ii(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, r] = n;
  if (i.has(e) || r.has(t))
    return i.get(e) === t && r.get(t) === e;
  i.set(e, t), r.set(t, e);
  const o = s(e, t, n);
  return i.delete(e), r.delete(t), o;
}
function ct(e, t, n) {
  if (e === t) return !0;
  let s = Ei(e), i = Ei(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = We(e), i = We(t), s || i ? e === t : (s = H(e), i = H(t), s || i ? s && i ? Ii(e, t, n, Ml) : !1 : (s = oe(e), i = oe(t), s || i ? !s || !i ? !1 : Ii(e, t, n, Il) : String(e) === String(t))));
}
function Tl(e, t) {
  return e.findIndex((n) => ct(n, t));
}
const Mr = (e) => !!(e && e.__v_isRef === !0), O = (e) => ce(e) ? e : e == null ? "" : H(e) || oe(e) && (e.toString === zr || !ee(e.toString)) ? Mr(e) ? O(e.value) : JSON.stringify(e, Ir, 2) : String(e), Ir = (e, t) => Mr(t) ? Ir(e, t.value) : lt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[ys(s, r) + " =>"] = i, n),
    {}
  )
} : It(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ys(n))
} : We(t) ? ys(t) : oe(t) && !H(t) && !$r(t) ? String(t) : t, ys = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    We(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let fe;
class Pl {
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
function Fl() {
  return fe;
}
let ie;
const ws = /* @__PURE__ */ new WeakSet();
class Tr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, fe && (fe.active ? fe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ws.has(this) && (ws.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ti(this), Nr(this);
    const t = ie, n = Pe;
    ie = this, Pe = !0;
    try {
      return this.fn();
    } finally {
      Rr(this), ie = t, Pe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        si(t);
      this.deps = this.depsTail = void 0, Ti(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ws.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ls(this) && this.run();
  }
  get dirty() {
    return Ls(this);
  }
}
let Pr = 0, on, ln;
function Fr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ln, ln = e;
    return;
  }
  e.next = on, on = e;
}
function ti() {
  Pr++;
}
function ni() {
  if (--Pr > 0)
    return;
  if (ln) {
    let t = ln;
    for (ln = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; on; ) {
    let t = on;
    for (on = void 0; t; ) {
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
function Nr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Rr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), si(s), Nl(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Ls(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Or(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Or(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dn) || (e.globalVersion = dn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ls(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ie, s = Pe;
  ie = e, Pe = !0;
  try {
    Nr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ue(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ie = n, Pe = s, Rr(e), e.flags &= -3;
  }
}
function si(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      si(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Nl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Pe = !0;
const Dr = [];
function ut() {
  Dr.push(Pe), Pe = !1;
}
function dt() {
  const e = Dr.pop();
  Pe = e === void 0 ? !0 : e;
}
function Ti(e) {
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
let dn = 0;
class Rl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ii {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ie || !Pe || ie === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ie)
      n = this.activeLink = new Rl(ie, this), ie.deps ? (n.prevDep = ie.depsTail, ie.depsTail.nextDep = n, ie.depsTail = n) : ie.deps = ie.depsTail = n, jr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ie.depsTail, n.nextDep = void 0, ie.depsTail.nextDep = n, ie.depsTail = n, ie.deps === n && (ie.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, dn++, this.notify(t);
  }
  notify(t) {
    ti();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ni();
    }
  }
}
function jr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        jr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Vs = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ Symbol(
  ""
), Us = /* @__PURE__ */ Symbol(
  ""
), fn = /* @__PURE__ */ Symbol(
  ""
);
function he(e, t, n) {
  if (Pe && ie) {
    let s = Vs.get(e);
    s || Vs.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new ii()), i.map = s, i.key = n), i.track();
  }
}
function Xe(e, t, n, s, i, r) {
  const o = Vs.get(e);
  if (!o) {
    dn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (ti(), t === "clear")
    o.forEach(l);
  else {
    const a = H(e), A = a && ei(n);
    if (a && n === "length") {
      const u = Number(s);
      o.forEach((h, m) => {
        (m === "length" || m === fn || !We(m) && m >= u) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), A && l(o.get(fn)), t) {
        case "add":
          a ? A && l(o.get("length")) : (l(o.get(Ct)), lt(e) && l(o.get(Us)));
          break;
        case "delete":
          a || (l(o.get(Ct)), lt(e) && l(o.get(Us)));
          break;
        case "set":
          lt(e) && l(o.get(Ct));
          break;
      }
  }
  ni();
}
function Ot(e) {
  const t = /* @__PURE__ */ J(e);
  return t === e || (he(t, "iterate", fn), /* @__PURE__ */ Ee(e)) ? t : /* @__PURE__ */ Ge(e) ? /* @__PURE__ */ At(e) ? t.map((n) => ft(Me(n))) : t.map(ft) : t.map(Me);
}
function is(e) {
  return he(e = /* @__PURE__ */ J(e), "iterate", fn), e;
}
function Le(e, t) {
  return /* @__PURE__ */ Ge(e) ? ft(/* @__PURE__ */ At(e) ? Me(t) : t) : Me(t);
}
const Ol = {
  __proto__: null,
  [Symbol.iterator]() {
    return _s(this, Symbol.iterator, (e) => Le(this, e));
  },
  concat(...e) {
    return Ot(this).concat(
      ...e.map((t) => H(t) ? Ot(t) : t)
    );
  },
  entries() {
    return _s(this, "entries", (e) => (e[1] = Le(this, e[1]), e));
  },
  every(e, t) {
    return Je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Je(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Le(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Je(
      this,
      "find",
      e,
      t,
      (n) => Le(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Je(
      this,
      "findLast",
      e,
      t,
      (n) => Le(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ks(this, "includes", e);
  },
  indexOf(...e) {
    return ks(this, "indexOf", e);
  },
  join(e) {
    return Ot(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ks(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qt(this, "pop");
  },
  push(...e) {
    return Qt(this, "push", e);
  },
  reduce(e, ...t) {
    return Pi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Pi(this, "reduceRight", e, t);
  },
  shift() {
    return Qt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Qt(this, "splice", e);
  },
  toReversed() {
    return Ot(this).toReversed();
  },
  toSorted(e) {
    return Ot(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ot(this).toSpliced(...e);
  },
  unshift(...e) {
    return Qt(this, "unshift", e);
  },
  values() {
    return _s(this, "values", (e) => Le(this, e));
  }
};
function _s(e, t, n) {
  const s = is(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Ee(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const Dl = Array.prototype;
function Je(e, t, n, s, i, r) {
  const o = is(e), l = o !== e && !/* @__PURE__ */ Ee(e), a = o[t];
  if (a !== Dl[t]) {
    const h = a.apply(e, r);
    return l ? Me(h) : h;
  }
  let A = n;
  o !== e && (l ? A = function(h, m) {
    return n.call(this, Le(e, h), m, e);
  } : n.length > 2 && (A = function(h, m) {
    return n.call(this, h, m, e);
  }));
  const u = a.call(o, A, s);
  return l && i ? i(u) : u;
}
function Pi(e, t, n, s) {
  const i = is(e), r = i !== e && !/* @__PURE__ */ Ee(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(A, u, h) {
    return l && (l = !1, A = Le(e, A)), n.call(this, A, Le(e, u), h, e);
  }) : n.length > 3 && (o = function(A, u, h) {
    return n.call(this, A, u, h, e);
  }));
  const a = i[t](o, ...s);
  return l ? Le(e, a) : a;
}
function ks(e, t, n) {
  const s = /* @__PURE__ */ J(e);
  he(s, "iterate", fn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ li(n[0]) ? (n[0] = /* @__PURE__ */ J(n[0]), s[t](...n)) : i;
}
function Qt(e, t, n = []) {
  ut(), ti();
  const s = (/* @__PURE__ */ J(e))[t].apply(e, n);
  return ni(), dt(), s;
}
const jl = /* @__PURE__ */ Xs("__proto__,__v_isRef,__isVue"), Br = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(We)
);
function Bl(e) {
  We(e) || (e = String(e));
  const t = /* @__PURE__ */ J(this);
  return he(t, "has", e), t.hasOwnProperty(e);
}
class Lr {
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
      return s === (i ? r ? Jl : Gr : r ? Wr : Ur).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = H(t);
    if (!i) {
      let a;
      if (o && (a = Ol[n]))
        return a;
      if (n === "hasOwnProperty")
        return Bl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ be(t) ? t : s
    );
    if ((We(n) ? Br.has(n) : jl(n)) || (i || he(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ be(l)) {
      const a = o && ei(n) ? l : l.value;
      return i && oe(a) ? /* @__PURE__ */ Gs(a) : a;
    }
    return oe(l) ? i ? /* @__PURE__ */ Gs(l) : /* @__PURE__ */ rs(l) : l;
  }
}
class Vr extends Lr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = H(t) && ei(n);
    if (!this._isShallow) {
      const A = /* @__PURE__ */ Ge(r);
      if (!/* @__PURE__ */ Ee(s) && !/* @__PURE__ */ Ge(s) && (r = /* @__PURE__ */ J(r), s = /* @__PURE__ */ J(s)), !o && /* @__PURE__ */ be(r) && !/* @__PURE__ */ be(s))
        return A || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : ne(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ be(t) ? t : i
    );
    return t === /* @__PURE__ */ J(i) && a && (l ? Ue(s, r) && Xe(t, "set", n, s) : Xe(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = ne(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && Xe(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!We(n) || !Br.has(n)) && he(t, "has", n), s;
  }
  ownKeys(t) {
    return he(
      t,
      "iterate",
      H(t) ? "length" : Ct
    ), Reflect.ownKeys(t);
  }
}
class Ll extends Lr {
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
const Vl = /* @__PURE__ */ new Vr(), Ul = /* @__PURE__ */ new Ll(), Wl = /* @__PURE__ */ new Vr(!0);
const Ws = (e) => e, Cn = (e) => Reflect.getPrototypeOf(e);
function Gl(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ J(i), o = lt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, A = i[e](...s), u = n ? Ws : t ? ft : Me;
    return !t && he(
      r,
      "iterate",
      a ? Us : Ct
    ), Fe(
      // inheriting all iterator properties
      Object.create(A),
      {
        // iterator protocol
        next() {
          const { value: h, done: m } = A.next();
          return m ? { value: h, done: m } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
            done: m
          };
        }
      }
    );
  };
}
function Mn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Yl(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ J(r), l = /* @__PURE__ */ J(i);
      e || (Ue(i, l) && he(o, "get", i), he(o, "get", l));
      const { has: a } = Cn(o), A = t ? Ws : e ? ft : Me;
      if (a.call(o, i))
        return A(r.get(i));
      if (a.call(o, l))
        return A(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && he(/* @__PURE__ */ J(i), "iterate", Ct), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ J(r), l = /* @__PURE__ */ J(i);
      return e || (Ue(i, l) && he(o, "has", i), he(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ J(l), A = t ? Ws : e ? ft : Me;
      return !e && he(a, "iterate", Ct), l.forEach((u, h) => i.call(r, A(u), A(h), o));
    }
  };
  return Fe(
    n,
    e ? {
      add: Mn("add"),
      set: Mn("set"),
      delete: Mn("delete"),
      clear: Mn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ J(this), o = Cn(r), l = /* @__PURE__ */ J(i), a = !t && !/* @__PURE__ */ Ee(i) && !/* @__PURE__ */ Ge(i) ? l : i;
        return o.has.call(r, a) || Ue(i, a) && o.has.call(r, i) || Ue(l, a) && o.has.call(r, l) || (r.add(a), Xe(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ Ee(r) && !/* @__PURE__ */ Ge(r) && (r = /* @__PURE__ */ J(r));
        const o = /* @__PURE__ */ J(this), { has: l, get: a } = Cn(o);
        let A = l.call(o, i);
        A || (i = /* @__PURE__ */ J(i), A = l.call(o, i));
        const u = a.call(o, i);
        return o.set(i, r), A ? Ue(r, u) && Xe(o, "set", i, r) : Xe(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ J(this), { has: o, get: l } = Cn(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ J(i), a = o.call(r, i)), l && l.call(r, i);
        const A = r.delete(i);
        return a && Xe(r, "delete", i, void 0), A;
      },
      clear() {
        const i = /* @__PURE__ */ J(this), r = i.size !== 0, o = i.clear();
        return r && Xe(
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
    n[i] = Gl(i, e, t);
  }), n;
}
function ri(e, t) {
  const n = Yl(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    ne(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Hl = {
  get: /* @__PURE__ */ ri(!1, !1)
}, Kl = {
  get: /* @__PURE__ */ ri(!1, !0)
}, Zl = {
  get: /* @__PURE__ */ ri(!0, !1)
};
const Ur = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Jl = /* @__PURE__ */ new WeakMap();
function ql(e) {
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
function rs(e) {
  return /* @__PURE__ */ Ge(e) ? e : oi(
    e,
    !1,
    Vl,
    Hl,
    Ur
  );
}
// @__NO_SIDE_EFFECTS__
function Ql(e) {
  return oi(
    e,
    !1,
    Wl,
    Kl,
    Wr
  );
}
// @__NO_SIDE_EFFECTS__
function Gs(e) {
  return oi(
    e,
    !0,
    Ul,
    Zl,
    Gr
  );
}
function oi(e, t, n, s, i) {
  if (!oe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = ql(yl(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function At(e) {
  return /* @__PURE__ */ Ge(e) ? /* @__PURE__ */ At(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function li(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function J(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ J(t) : e;
}
function Xl(e) {
  return !ne(e, "__v_skip") && Object.isExtensible(e) && Er(e, "__v_skip", !0), e;
}
const Me = (e) => oe(e) ? /* @__PURE__ */ rs(e) : e, ft = (e) => oe(e) ? /* @__PURE__ */ Gs(e) : e;
// @__NO_SIDE_EFFECTS__
function be(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return eA(e, !1);
}
function eA(e, t) {
  return /* @__PURE__ */ be(e) ? e : new tA(e, t);
}
class tA {
  constructor(t, n) {
    this.dep = new ii(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ J(t), this._value = n ? t : Me(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ee(t) || /* @__PURE__ */ Ge(t);
    t = s ? t : /* @__PURE__ */ J(t), Ue(t, n) && (this._rawValue = t, this._value = s ? t : Me(t), this.dep.trigger());
  }
}
function D(e) {
  return /* @__PURE__ */ be(e) ? e.value : e;
}
const nA = {
  get: (e, t, n) => t === "__v_raw" ? e : D(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ be(i) && !/* @__PURE__ */ be(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Yr(e) {
  return /* @__PURE__ */ At(e) ? e : new Proxy(e, nA);
}
class sA {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ii(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ie !== this)
      return Fr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Or(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function iA(e, t, n = !1) {
  let s, i;
  return ee(e) ? s = e : (s = e.get, i = e.set), new sA(s, i, n);
}
const In = {}, jn = /* @__PURE__ */ new WeakMap();
let kt;
function rA(e, t = !1, n = kt) {
  if (n) {
    let s = jn.get(n);
    s || jn.set(n, s = []), s.push(e);
  }
}
function oA(e, t, n = re) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = n, A = (P) => i ? P : /* @__PURE__ */ Ee(P) || i === !1 || i === 0 ? et(P, 1) : et(P);
  let u, h, m, x, $ = !1, S = !1;
  if (/* @__PURE__ */ be(e) ? (h = () => e.value, $ = /* @__PURE__ */ Ee(e)) : /* @__PURE__ */ At(e) ? (h = () => A(e), $ = !0) : H(e) ? (S = !0, $ = e.some((P) => /* @__PURE__ */ At(P) || /* @__PURE__ */ Ee(P)), h = () => e.map((P) => {
    if (/* @__PURE__ */ be(P))
      return P.value;
    if (/* @__PURE__ */ At(P))
      return A(P);
    if (ee(P))
      return a ? a(P, 2) : P();
  })) : ee(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      ut();
      try {
        m();
      } finally {
        dt();
      }
    }
    const P = kt;
    kt = u;
    try {
      return a ? a(e, 3, [x]) : e(x);
    } finally {
      kt = P;
    }
  } : h = Et, t && i) {
    const P = h, Z = i === !0 ? 1 / 0 : i;
    h = () => et(P(), Z);
  }
  const T = Fl(), w = () => {
    u.stop(), T && T.active && _r(T.effects, u);
  };
  if (r && t) {
    const P = t;
    t = (...Z) => {
      const Q = P(...Z);
      return w(), Q;
    };
  }
  let b = S ? new Array(e.length).fill(In) : In;
  const g = (P) => {
    if (!(!(u.flags & 1) || !u.dirty && !P))
      if (t) {
        const Z = u.run();
        if (P || i || $ || (S ? Z.some((Q, G) => Ue(Q, b[G])) : Ue(Z, b))) {
          m && m();
          const Q = kt;
          kt = u;
          try {
            const G = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              b === In ? void 0 : S && b[0] === In ? [] : b,
              x
            ];
            b = Z, a ? a(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            kt = Q;
          }
        }
      } else
        u.run();
  };
  return l && l(g), u = new Tr(h), u.scheduler = o ? () => o(g, !1) : g, x = (P) => rA(P, !1, u), m = u.onStop = () => {
    const P = jn.get(u);
    if (P) {
      if (a)
        a(P, 4);
      else
        for (const Z of P) Z();
      jn.delete(u);
    }
  }, t ? s ? g(!0) : b = u.run() : o ? o(g.bind(null, !0), !0) : u.run(), w.pause = u.pause.bind(u), w.resume = u.resume.bind(u), w.stop = w, w;
}
function et(e, t = 1 / 0, n) {
  if (t <= 0 || !oe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ be(e))
    et(e.value, t, n);
  else if (H(e))
    for (let s = 0; s < e.length; s++)
      et(e[s], t, n);
  else if (It(e) || lt(e))
    e.forEach((s) => {
      et(s, t, n);
    });
  else if ($r(e)) {
    for (const s in e)
      et(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && et(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function wn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    os(i, t, n);
  }
}
function Ye(e, t, n, s) {
  if (ee(e)) {
    const i = wn(e, t, n, s);
    return i && kr(i) && i.catch((r) => {
      os(r, t, n);
    }), i;
  }
  if (H(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ye(e[r], t, n, s));
    return i;
  }
}
function os(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || re;
  if (t) {
    let l = t.parent;
    const a = t.proxy, A = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, a, A) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      ut(), wn(r, null, 10, [
        e,
        a,
        A
      ]), dt();
      return;
    }
  }
  lA(e, n, i, s, o);
}
function lA(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const xe = [];
let je = -1;
const Vt = [];
let rt = null, Dt = 0;
const Hr = /* @__PURE__ */ Promise.resolve();
let Bn = null;
function Kr(e) {
  const t = Bn || Hr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function AA(e) {
  let t = je + 1, n = xe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = xe[s], r = pn(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ai(e) {
  if (!(e.flags & 1)) {
    const t = pn(e), n = xe[xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= pn(n) ? xe.push(e) : xe.splice(AA(t), 0, e), e.flags |= 1, Zr();
  }
}
function Zr() {
  Bn || (Bn = Hr.then(qr));
}
function aA(e) {
  if (!H(e))
    rt && e.id === -1 ? rt.splice(Dt + 1, 0, e) : e.flags & 1 || (Vt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Vt.push(e[t]);
  Zr();
}
function Fi(e, t, n = je + 1) {
  for (; n < xe.length; n++) {
    const s = xe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      xe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Jr(e) {
  if (Vt.length) {
    const t = [...new Set(Vt)].sort(
      (n, s) => pn(n) - pn(s)
    );
    if (Vt.length = 0, rt) {
      for (let n = 0; n < t.length; n++)
        rt.push(t[n]);
      return;
    }
    for (rt = t, Dt = 0; Dt < rt.length; Dt++) {
      const n = rt[Dt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    rt = null, Dt = 0;
  }
}
const pn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function qr(e) {
  try {
    for (je = 0; je < xe.length; je++) {
      const t = xe[je];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), wn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; je < xe.length; je++) {
      const t = xe[je];
      t && (t.flags &= -2);
    }
    je = -1, xe.length = 0, Jr(), Bn = null, (xe.length || Vt.length) && qr();
  }
}
let Se = null, Qr = null;
function Ln(e) {
  const t = Se;
  return Se = e, Qr = e && e.type.__scopeId || null, t;
}
function cA(e, t = Se, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Li(-1);
    const r = Ln(t), o = Mt.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = Mt.length; a > o; a--) mo();
      Ln(r), s._d && Li(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ot(e, t) {
  if (Se === null)
    return e;
  const n = us(Se), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = re] = t[i];
    r && (ee(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && et(o), s.push({
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
function wt(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[s];
    a && (ut(), Ye(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), dt());
  }
}
function uA(e, t, n = !1) {
  const s = ZA();
  if (s || Ut) {
    let i = Ut ? Ut._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ee(t) ? t.call(s && s.proxy) : t;
  }
}
const dA = /* @__PURE__ */ Symbol.for("v-scx"), fA = () => uA(dA);
function ls(e, t, n) {
  return pA(e, t, n);
}
function pA(e, t, n = re) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = Fe({}, n), a = t && s || !t && r !== "post";
  let A;
  if (gn) {
    if (r === "sync") {
      const x = fA();
      A = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!a) {
      const x = () => {
      };
      return x.stop = Et, x.resume = Et, x.pause = Et, x;
    }
  }
  const u = pt;
  l.call = (x, $, S) => Ye(x, u, $, S);
  let h = !1;
  r === "post" ? l.scheduler = (x) => {
    ye(x, u && u.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (x, $) => {
    $ ? x() : Ai(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), h && (x.flags |= 2, u && (x.id = u.uid, x.i = u));
  };
  const m = oA(e, t, l);
  return gn && (A ? A.push(m) : a && m()), m;
}
const hA = /* @__PURE__ */ Symbol("_vte"), As = (e) => e.__isTeleport, zs = /* @__PURE__ */ Symbol("_leaveCb");
function mA(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== nt) {
        t = n;
        break;
      }
  }
  return t;
}
function Xr(e) {
  if (!eo(e))
    return As(e.type) && e.children ? mA(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ee(n.default))
      return n.default();
  }
}
function ai(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    ai(
      As(n.type) && Xr(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ze(e, t) {
  return ee(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function gA(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ni(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Vn = /* @__PURE__ */ new WeakMap();
function An(e, t, n, s, i = !1) {
  if (H(e)) {
    e.forEach(
      (S, T) => An(
        S,
        t && (H(t) ? t[T] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (an(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && An(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? us(s.component) : s.el, o = i ? null : r, { i: l, r: a } = e, A = t && t.r, u = l.refs === re ? l.refs = {} : l.refs, h = l.setupState, m = /* @__PURE__ */ J(h), x = h === re ? wr : (S) => Ni(u, S) ? !1 : ne(m, S), $ = (S, T) => !(T && Ni(u, T));
  if (A != null && A !== a) {
    if (Ri(t), ce(A))
      u[A] = null, x(A) && (h[A] = null);
    else if (/* @__PURE__ */ be(A)) {
      const S = t;
      $(A, S.k) && (A.value = null), S.k && (u[S.k] = null);
    }
  }
  if (ee(a))
    wn(a, l, 12, [o, u]);
  else {
    const S = ce(a), T = /* @__PURE__ */ be(a);
    if (S || T) {
      const w = () => {
        if (e.f) {
          const b = S ? x(a) ? h[a] : u[a] : $() || !e.k ? a.value : u[e.k];
          if (i)
            H(b) && _r(b, r);
          else if (H(b))
            b.includes(r) || b.push(r);
          else if (S)
            u[a] = [r], x(a) && (h[a] = u[a]);
          else {
            const g = [r];
            $(a, e.k) && (a.value = g), e.k && (u[e.k] = g);
          }
        } else S ? (u[a] = o, x(a) && (h[a] = o)) : T && ($(a, e.k) && (a.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const b = () => {
          w(), Vn.delete(e);
        };
        b.id = -1, Vn.set(e, b), ye(b, n);
      } else
        Ri(e), w();
    }
  }
}
function Ri(e) {
  const t = Vn.get(e);
  t && (t.flags |= 8, Vn.delete(e));
}
ns().requestIdleCallback;
ns().cancelIdleCallback;
const an = (e) => !!e.type.__asyncLoader, eo = (e) => e.type.__isKeepAlive;
function xA(e, t, n = pt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      ut();
      const l = di(n), a = Ye(t, n, e, o);
      return l(), dt(), a;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const to = (e) => (t, n = pt) => {
  (!gn || e === "sp") && xA(e, (...s) => t(...s), n);
}, bA = to("m"), vA = to(
  "bum"
), yA = /* @__PURE__ */ Symbol.for("v-ndc");
function me(e, t, n, s) {
  let i;
  const r = n, o = H(e);
  if (o || ce(e)) {
    const l = o && /* @__PURE__ */ At(e);
    let a = !1, A = !1;
    l && (a = !/* @__PURE__ */ Ee(e), A = /* @__PURE__ */ Ge(e), e = is(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        a ? A ? ft(Me(e[u])) : Me(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (oe(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, A = l.length; a < A; a++) {
        const u = l[a];
        i[a] = t(e[u], u, a, r);
      }
    }
  else
    i = [];
  return i;
}
const Ys = (e) => e ? vo(e) ? us(e) : Ys(e.parent) : null, cn = (
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
    $parent: (e) => Ys(e.parent),
    $root: (e) => Ys(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ai(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Kr.bind(e.proxy)),
    $watch: (e) => Et
  })
), $s = (e, t) => e !== re && !e.__isScriptSetup && ne(e, t), wA = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const m = o[t];
      if (m !== void 0)
        switch (m) {
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
        if ($s(s, t))
          return o[t] = 1, s[t];
        if (ne(r, t))
          return o[t] = 3, r[t];
        if (n !== re && ne(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const A = cn[t];
    let u, h;
    if (A)
      return t === "$attrs" && he(e.attrs, "get", ""), A(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== re && ne(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, ne(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return $s(i, t) ? (i[t] = n, !0) : ne(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(n[l] || $s(t, l) || ne(r, l) || ne(s, l) || ne(cn, l) || ne(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ne(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function no() {
  return {
    app: null,
    config: {
      isNativeTag: wr,
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
let _A = 0;
function kA(e, t) {
  return function(s, i = null) {
    ee(s) || (s = Fe({}, s)), i != null && !oe(i) && (i = null);
    const r = no(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const A = r.app = {
      _uid: _A++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: ta,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && ee(u.install) ? (o.add(u), u.install(A, ...h)) : ee(u) && (o.add(u), u(A, ...h))), A;
      },
      mixin(u) {
        return A;
      },
      component(u, h) {
        return h ? (r.components[u] = h, A) : r.components[u];
      },
      directive(u, h) {
        return h ? (r.directives[u] = h, A) : r.directives[u];
      },
      mount(u, h, m) {
        if (!a) {
          const x = A._ceVNode || Ce(s, i);
          return x.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(x, u, m), a = !0, A._container = u, u.__vue_app__ = A, us(x.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (Ye(
          l,
          A._instance,
          16
        ), e(null, A._container), delete A._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, A;
      },
      runWithContext(u) {
        const h = Ut;
        Ut = A;
        try {
          return u();
        } finally {
          Ut = h;
        }
      }
    };
    return A;
  };
}
let Ut = null;
const zA = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Te(t)}Modifiers`] || e[`${Ft(t)}Modifiers`];
function $A(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || re;
  let i = n;
  const r = t.startsWith("update:"), o = r && zA(s, t.slice(7));
  o && (o.trim && (i = n.map((u) => ce(u) ? u.trim() : u)), o.number && (i = i.map(ts)));
  let l, a = s[l = vs(t)] || // also try camelCase event handler (#2249)
  s[l = vs(Te(t))];
  !a && r && (a = s[l = vs(Ft(t))]), a && Ye(
    a,
    e,
    6,
    i
  );
  const A = s[l + "Once"];
  if (A) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ye(
      A,
      e,
      6,
      i
    );
  }
}
function SA(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {};
  return r ? (H(r) ? r.forEach((l) => o[l] = null) : Fe(o, r), oe(e) && s.set(e, o), o) : (oe(e) && s.set(e, null), null);
}
function as(e, t) {
  return !e || !Qn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ne(e, t[0].toLowerCase() + t.slice(1)) || ne(e, Ft(t)) || ne(e, t));
}
function Oi(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: A,
    renderCache: u,
    props: h,
    data: m,
    setupState: x,
    ctx: $,
    inheritAttrs: S
  } = e, T = Ln(e);
  let w, b;
  try {
    if (n.shapeFlag & 4) {
      const P = i || s, Z = P;
      w = Ve(
        A.call(
          Z,
          P,
          u,
          h,
          x,
          m,
          $
        )
      ), b = l;
    } else {
      const P = t;
      w = Ve(
        P.length > 1 ? P(
          h,
          { attrs: l, slots: o, emit: a }
        ) : P(
          h,
          null
        )
      ), b = t.props ? l : EA(l);
    }
  } catch (P) {
    Mt.length = 0, os(P, e, 1), w = Ce(nt);
  }
  let g = w;
  if (b && S !== !1) {
    const P = Object.keys(b), { shapeFlag: Z } = g;
    P.length && Z & 7 && (r && P.some(Xn) && (b = CA(
      b,
      r
    )), g = Wt(g, b, !1, !0));
  }
  if (n.dirs && (g = Wt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const P = As(g.type) && Xr(g) || g;
    ai(P, n.transition);
  }
  return w = g, Ln(T), w;
}
const EA = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, CA = (e, t) => {
  const n = {};
  for (const s in e)
    (!Xn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function MA(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, A = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Di(s, o, A) : !!o;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const m = u[h];
        if (so(o, s, m) && !as(A, m))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Di(s, o, A) : !0 : !!o;
  return !1;
}
function Di(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (so(t, e, r) && !as(n, r))
      return !0;
  }
  return !1;
}
function so(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && oe(s) && oe(i) ? !ct(s, i) : s !== i;
}
function IA({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const io = {}, ro = () => Object.create(io), oo = (e) => Object.getPrototypeOf(e) === io;
function TA(e, t, n, s = !1) {
  const i = {}, r = ro();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), lo(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Ql(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function PA(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ J(i), [a] = e.propsOptions;
  let A = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let m = u[h];
        if (as(e.emitsOptions, m))
          continue;
        const x = t[m];
        if (a)
          if (ne(r, m))
            x !== r[m] && (r[m] = x, A = !0);
          else {
            const $ = Te(m);
            i[$] = Hs(
              a,
              l,
              $,
              x,
              e,
              !1
            );
          }
        else
          x !== r[m] && (r[m] = x, A = !0);
      }
    }
  } else {
    lo(e, t, i, r) && (A = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !ne(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ft(h)) === h || !ne(t, u))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[h] = Hs(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (r !== l)
      for (const h in r)
        (!t || !ne(t, h)) && (delete r[h], A = !0);
  }
  A && Xe(e.attrs, "set", "");
}
function lo(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (rn(a))
        continue;
      const A = t[a];
      let u;
      i && ne(i, u = Te(a)) ? !r || !r.includes(u) ? n[u] = A : (l || (l = {}))[u] = A : as(e.emitsOptions, a) || (!(a in s) || A !== s[a]) && (s[a] = A, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ J(n), A = l || re;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = Hs(
        i,
        a,
        h,
        A[h],
        e,
        !ne(A, h)
      );
    }
  }
  return o;
}
function Hs(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = ne(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && ee(a)) {
        const { propsDefaults: A } = i;
        if (n in A)
          s = A[n];
        else {
          const u = di(i);
          s = A[n] = a.call(
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
    ] && (s === "" || s === Ft(n)) && (s = !0));
  }
  return s;
}
function FA(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  if (!r)
    return oe(e) && s.set(e, $t), $t;
  if (H(r))
    for (let A = 0; A < r.length; A++) {
      const u = Te(r[A]);
      ji(u) && (o[u] = re);
    }
  else if (r)
    for (const A in r) {
      const u = Te(A);
      if (ji(u)) {
        const h = r[A], m = o[u] = H(h) || ee(h) ? { type: h } : Fe({}, h), x = m.type;
        let $ = !1, S = !0;
        if (H(x))
          for (let T = 0; T < x.length; ++T) {
            const w = x[T], b = ee(w) && w.name;
            if (b === "Boolean") {
              $ = !0;
              break;
            } else b === "String" && (S = !1);
          }
        else
          $ = ee(x) && x.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = $, m[
          1
          /* shouldCastTrue */
        ] = S, ($ || ne(m, "default")) && l.push(u);
      }
    }
  const a = [o, l];
  return oe(e) && s.set(e, a), a;
}
function ji(e) {
  return e[0] !== "$" && !rn(e);
}
const ci = (e) => e === "_" || e === "_ctx" || e === "$stable", ui = (e) => H(e) ? e.map(Ve) : [Ve(e)], NA = (e, t, n) => {
  if (t._n)
    return t;
  const s = cA((...i) => ui(t(...i)), n);
  return s._c = !1, s;
}, Ao = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (ci(i)) continue;
    const r = e[i];
    if (ee(r))
      t[i] = NA(i, r, s);
    else if (r != null) {
      const o = ui(r);
      t[i] = () => o;
    }
  }
}, ao = (e, t) => {
  const n = ui(t);
  e.slots.default = () => n;
}, co = (e, t, n) => {
  for (const s in t)
    (n || !ci(s)) && (e[s] = t[s]);
}, RA = (e, t, n) => {
  const s = e.slots = ro();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (co(s, t, n), n && Er(s, "_", i, !0)) : Ao(t, s);
  } else t && ao(e, t);
}, OA = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = re;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : co(i, t, n) : (r = !t.$stable, Ao(t, i)), o = t;
  } else t && (ao(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !ci(l) && o[l] == null && delete i[l];
}, ye = VA;
function DA(e) {
  return jA(e);
}
function jA(e, t) {
  const n = ns();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: A,
    setElementText: u,
    parentNode: h,
    nextSibling: m,
    setScopeId: x = Et,
    insertStaticContent: $
  } = e, S = (d, p, v, C = null, _ = null, E = null, R = void 0, N = null, F = !!p.dynamicChildren) => {
    if (d === p)
      return;
    d && !Xt(d, p) && (C = En(d), ve(d, _, E, !0), d = null), p.patchFlag === -2 && (F = !1, p.dynamicChildren = null), p.dynamicChildren && d && d.dynamicChildren && d.dynamicChildren.hasOnce && (p.dynamicChildren === $t && (p.dynamicChildren = []), p.dynamicChildren.hasOnce = !0);
    const { type: z, ref: V, shapeFlag: j } = p;
    switch (z) {
      case cs:
        T(d, p, v, C);
        break;
      case nt:
        w(d, p, v, C);
        break;
      case Es:
        d == null && b(p, v, C, R);
        break;
      case q:
        Ae(
          d,
          p,
          v,
          C,
          _,
          E,
          R,
          N,
          F
        );
        break;
      default:
        j & 1 ? Z(
          d,
          p,
          v,
          C,
          _,
          E,
          R,
          N,
          F
        ) : j & 6 ? Kt(
          d,
          p,
          v,
          C,
          _,
          E,
          R,
          N,
          F
        ) : (j & 64 || j & 128) && z.process(
          d,
          p,
          v,
          C,
          _,
          E,
          R,
          N,
          F,
          Jt
        );
    }
    V != null && _ ? An(V, d && d.ref, E, p || d, !p) : V == null && d && d.ref != null && An(d.ref, null, E, d, !0);
  }, T = (d, p, v, C) => {
    if (d == null)
      s(
        p.el = l(p.children),
        v,
        C
      );
    else {
      const _ = p.el = d.el;
      p.children !== d.children && A(_, p.children);
    }
  }, w = (d, p, v, C) => {
    d == null ? s(
      p.el = a(p.children || ""),
      v,
      C
    ) : p.el = d.el;
  }, b = (d, p, v, C) => {
    [d.el, d.anchor] = $(
      d.children,
      p,
      v,
      C,
      d.el,
      d.anchor
    );
  }, g = ({ el: d, anchor: p }, v, C) => {
    let _;
    for (; d && d !== p; )
      _ = m(d), s(d, v, C), d = _;
    s(p, v, C);
  }, P = ({ el: d, anchor: p }) => {
    let v;
    for (; d && d !== p; )
      v = m(d), i(d), d = v;
    i(p);
  }, Z = (d, p, v, C, _, E, R, N, F) => {
    if (p.type === "svg" ? R = "svg" : p.type === "math" && (R = "mathml"), d == null)
      Q(
        p,
        v,
        C,
        _,
        E,
        R,
        N,
        F
      );
    else {
      const z = d.el && d.el._isVueCE ? d.el : null;
      try {
        z && z._beginPatch(), y(
          d,
          p,
          _,
          E,
          R,
          N,
          F
        );
      } finally {
        z && z._endPatch();
      }
    }
  }, Q = (d, p, v, C, _, E, R, N) => {
    let F, z;
    const { props: V, shapeFlag: j, transition: L, dirs: U } = d;
    if (F = d.el = o(
      d.type,
      E,
      V && V.is,
      V
    ), j & 8 ? u(F, d.children) : j & 16 && I(
      d.children,
      F,
      null,
      C,
      _,
      Ss(d, E),
      R,
      N
    ), U && wt(d, null, C, "created"), G(F, d, d.scopeId, R, C), V) {
      for (const te in V)
        te !== "value" && !rn(te) && r(F, te, null, V[te], E, C);
      "value" in V && r(F, "value", null, V.value, E), (z = V.onVnodeBeforeMount) && De(z, C, d);
    }
    U && wt(d, null, C, "beforeMount");
    const K = BA(_, L);
    K && L.beforeEnter(F), s(F, p, v), ((z = V && V.onVnodeMounted) || K || U) && ye(() => {
      try {
        z && De(z, C, d), K && L.enter(F), U && wt(d, null, C, "mounted");
      } finally {
      }
    }, _);
  }, G = (d, p, v, C, _) => {
    if (v && x(d, v), C)
      for (let E = 0; E < C.length; E++)
        x(d, C[E]);
    if (_) {
      let E = _.subTree;
      if (p === E || ho(E.type) && (E.ssContent === p || E.ssFallback === p)) {
        const R = _.vnode;
        G(
          d,
          R,
          R.scopeId,
          R.slotScopeIds,
          _.parent
        );
      }
    }
  }, I = (d, p, v, C, _, E, R, N, F = 0) => {
    for (let z = F; z < d.length; z++) {
      const V = d[z] = N ? Qe(d[z]) : Ve(d[z]);
      S(
        null,
        V,
        p,
        v,
        C,
        _,
        E,
        R,
        N
      );
    }
  }, y = (d, p, v, C, _, E, R) => {
    const N = p.el = d.el;
    let { patchFlag: F, dynamicChildren: z, dirs: V } = p;
    F |= d.patchFlag & 16;
    const j = d.props || re, L = p.props || re;
    let U;
    if (v && _t(v, !1), (U = L.onVnodeBeforeUpdate) && De(U, v, p, d), V && wt(p, d, v, "beforeUpdate"), v && _t(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    z && (!d.dynamicChildren || d.dynamicChildren.length !== z.length) && (F = 0, R = !1, z = null), (j.innerHTML && L.innerHTML == null || j.textContent && L.textContent == null) && u(N, ""), z ? B(
      d.dynamicChildren,
      z,
      N,
      v,
      C,
      Ss(p, _),
      E
    ) : R || Rt(
      d,
      p,
      N,
      null,
      v,
      C,
      Ss(p, _),
      E,
      !1
    ), F > 0) {
      if (F & 16)
        we(N, j, L, v, _);
      else if (F & 2 && j.class !== L.class && r(N, "class", null, L.class, _), F & 4 && r(N, "style", j.style, L.style, _), F & 8) {
        const K = p.dynamicProps;
        for (let te = 0; te < K.length; te++) {
          const X = K[te], ae = j[X], de = L[X];
          (de !== ae || X === "value") && r(N, X, ae, de, _, v);
        }
      }
      F & 1 && d.children !== p.children && u(N, p.children);
    } else !R && z == null && we(N, j, L, v, _);
    ((U = L.onVnodeUpdated) || V) && ye(() => {
      U && De(U, v, p, d), V && wt(p, d, v, "updated");
    }, C);
  }, B = (d, p, v, C, _, E, R) => {
    for (let N = 0; N < p.length; N++) {
      const F = d[N], z = p[N], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xt(F, z) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 198) ? h(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      S(
        F,
        z,
        V,
        null,
        C,
        _,
        E,
        R,
        !0
      );
    }
  }, we = (d, p, v, C, _) => {
    if (p !== v) {
      if (p !== re)
        for (const E in p)
          !rn(E) && !(E in v) && r(
            d,
            E,
            p[E],
            null,
            _,
            C
          );
      for (const E in v) {
        if (rn(E)) continue;
        const R = v[E], N = p[E];
        R !== N && E !== "value" && r(d, E, N, R, _, C);
      }
      "value" in v && r(d, "value", p.value, v.value, _);
    }
  }, Ae = (d, p, v, C, _, E, R, N, F) => {
    const z = p.el = d ? d.el : l(""), V = p.anchor = d ? d.anchor : l("");
    let { patchFlag: j, dynamicChildren: L, slotScopeIds: U } = p;
    U && (N = N ? N.concat(U) : U), d == null ? (s(z, v, C), s(V, v, C), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      v,
      V,
      _,
      E,
      R,
      N,
      F
    )) : j > 0 && j & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === L.length ? (B(
      d.dynamicChildren,
      L,
      v,
      _,
      E,
      R,
      N
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || _ && p === _.subTree) && uo(
      d,
      p,
      !0
      /* shallow */
    )) : Rt(
      d,
      p,
      v,
      V,
      _,
      E,
      R,
      N,
      F
    );
  }, Kt = (d, p, v, C, _, E, R, N, F) => {
    p.slotScopeIds = N, d == null ? p.shapeFlag & 512 ? _.ctx.activate(
      p,
      v,
      C,
      R,
      F
    ) : ge(
      p,
      v,
      C,
      _,
      E,
      R,
      F
    ) : xt(d, p, F);
  }, ge = (d, p, v, C, _, E, R) => {
    const N = d.component = KA(
      d,
      C,
      _
    );
    if (eo(d) && (N.ctx.renderer = Jt), JA(N, !1, R), N.asyncDep) {
      if (_ && _.registerDep(N, bt, R), !d.el) {
        const F = N.subTree = Ce(nt);
        w(null, F, p, v), d.placeholder = F.el;
      }
    } else
      bt(
        N,
        d,
        p,
        v,
        _,
        E,
        R
      );
  }, xt = (d, p, v) => {
    const C = p.component = d.component;
    if (MA(d, p, v))
      if (C.asyncDep && !C.asyncResolved) {
        p.el = d.el, vt(C, p, v);
        return;
      } else
        C.next = p, C.update();
    else
      p.el = d.el, C.vnode = p;
  }, bt = (d, p, v, C, _, E, R) => {
    const N = () => {
      if (d.isMounted) {
        let { next: j, bu: L, u: U, parent: K, vnode: te } = d;
        {
          const Re = fo(d);
          if (Re) {
            j && (j.el = te.el, vt(d, j, R)), Re.asyncDep.then(() => {
              ye(() => {
                d.isUnmounted || z();
              }, _);
            });
            return;
          }
        }
        let X = j, ae;
        _t(d, !1), j ? (j.el = te.el, vt(d, j, R)) : j = te, L && Nn(L), (ae = j.props && j.props.onVnodeBeforeUpdate) && De(ae, K, j, te), _t(d, !0);
        const de = Oi(d), Ne = d.subTree;
        d.subTree = de, S(
          Ne,
          de,
          // parent may have changed if it's in a teleport
          h(Ne.el),
          // anchor may have changed if it's in a fragment
          En(Ne),
          d,
          _,
          E
        ), j.el = de.el, X === null && IA(d, de.el), U && ye(U, _), (ae = j.props && j.props.onVnodeUpdated) && ye(
          () => De(ae, K, j, te),
          _
        );
      } else {
        let j;
        const { el: L, props: U } = p, { bm: K, m: te, parent: X, root: ae, type: de } = d, Ne = an(p);
        _t(d, !1), K && Nn(K), !Ne && (j = U && U.onVnodeBeforeMount) && De(j, X, p), _t(d, !0);
        {
          ae.ce && ae.ce._hasShadowRoot() && ae.ce._injectChildStyle(
            de,
            d.parent ? d.parent.type : void 0
          );
          const Re = d.subTree = Oi(d);
          S(
            null,
            Re,
            v,
            C,
            d,
            _,
            E
          ), p.el = Re.el;
        }
        if (te && ye(te, _), !Ne && (j = U && U.onVnodeMounted)) {
          const Re = p;
          ye(
            () => De(j, X, Re),
            _
          );
        }
        (p.shapeFlag & 256 || X && an(X.vnode) && X.vnode.shapeFlag & 256) && d.a && ye(d.a, _), d.isMounted = !0, p = v = C = null;
      }
    };
    d.scope.on();
    const F = d.effect = new Tr(N);
    d.scope.off();
    const z = d.update = F.run.bind(F), V = d.job = F.runIfDirty.bind(F);
    V.i = d, V.id = d.uid, F.scheduler = () => Ai(V), _t(d, !0), z();
  }, vt = (d, p, v) => {
    p.component = d;
    const C = d.vnode.props;
    d.vnode = p, d.next = null, PA(d, p.props, C, v), OA(d, p.children, v), ut(), Fi(d), dt();
  }, Rt = (d, p, v, C, _, E, R, N, F = !1) => {
    const z = d && d.children, V = d ? d.shapeFlag : 0, j = p.children, { patchFlag: L, shapeFlag: U } = p;
    if (L > 0) {
      if (L & 128) {
        $e(
          z,
          j,
          v,
          C,
          _,
          E,
          R,
          N,
          F
        );
        return;
      } else if (L & 256) {
        Sn(
          z,
          j,
          v,
          C,
          _,
          E,
          R,
          N,
          F
        );
        return;
      }
    }
    U & 8 ? (V & 16 && Zt(z, _, E), j !== z && u(v, j)) : V & 16 ? U & 16 ? $e(
      z,
      j,
      v,
      C,
      _,
      E,
      R,
      N,
      F
    ) : Zt(z, _, E, !0) : (V & 8 && u(v, ""), U & 16 && I(
      j,
      v,
      C,
      _,
      E,
      R,
      N,
      F
    ));
  }, Sn = (d, p, v, C, _, E, R, N, F) => {
    d = d || $t, p = p || $t;
    const z = d.length, V = p.length, j = Math.min(z, V);
    let L;
    for (L = 0; L < j; L++) {
      const U = p[L] = F ? Qe(p[L]) : Ve(p[L]);
      S(
        d[L],
        U,
        v,
        null,
        _,
        E,
        R,
        N,
        F
      );
    }
    z > V ? Zt(
      d,
      _,
      E,
      !0,
      !1,
      j
    ) : I(
      p,
      v,
      C,
      _,
      E,
      R,
      N,
      F,
      j
    );
  }, $e = (d, p, v, C, _, E, R, N, F) => {
    let z = 0;
    const V = p.length;
    let j = d.length - 1, L = V - 1;
    for (; z <= j && z <= L; ) {
      const U = d[z], K = p[z] = F ? Qe(p[z]) : Ve(p[z]);
      if (Xt(U, K))
        S(
          U,
          K,
          v,
          null,
          _,
          E,
          R,
          N,
          F
        );
      else
        break;
      z++;
    }
    for (; z <= j && z <= L; ) {
      const U = d[j], K = p[L] = F ? Qe(p[L]) : Ve(p[L]);
      if (Xt(U, K))
        S(
          U,
          K,
          v,
          null,
          _,
          E,
          R,
          N,
          F
        );
      else
        break;
      j--, L--;
    }
    if (z > j) {
      if (z <= L) {
        const U = L + 1, K = U < V ? p[U].el : C;
        for (; z <= L; )
          S(
            null,
            p[z] = F ? Qe(p[z]) : Ve(p[z]),
            v,
            K,
            _,
            E,
            R,
            N,
            F
          ), z++;
      }
    } else if (z > L)
      for (; z <= j; )
        ve(d[z], _, E, !0), z++;
    else {
      const U = z, K = z, te = /* @__PURE__ */ new Map();
      for (z = K; z <= L; z++) {
        const _e = p[z] = F ? Qe(p[z]) : Ve(p[z]);
        _e.key != null && te.set(_e.key, z);
      }
      let X, ae = 0;
      const de = L - K + 1;
      let Ne = !1, Re = 0;
      const qt = new Array(de);
      for (z = 0; z < de; z++) qt[z] = 0;
      for (z = U; z <= j; z++) {
        const _e = d[z];
        if (ae >= de) {
          ve(_e, _, E, !0);
          continue;
        }
        let Oe;
        if (_e.key != null)
          Oe = te.get(_e.key);
        else
          for (X = K; X <= L; X++)
            if (qt[X - K] === 0 && Xt(_e, p[X])) {
              Oe = X;
              break;
            }
        Oe === void 0 ? ve(_e, _, E, !0) : (qt[Oe - K] = z + 1, Oe >= Re ? Re = Oe : Ne = !0, S(
          _e,
          p[Oe],
          v,
          null,
          _,
          E,
          R,
          N,
          F
        ), ae++);
      }
      const zi = Ne ? LA(qt) : $t;
      for (X = zi.length - 1, z = de - 1; z >= 0; z--) {
        const _e = K + z, Oe = p[_e], $i = p[_e + 1], Si = _e + 1 < V ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          $i.el || po($i)
        ) : C;
        qt[z] === 0 ? S(
          null,
          Oe,
          v,
          Si,
          _,
          E,
          R,
          N,
          F
        ) : Ne && (X < 0 || z !== zi[X] ? yt(Oe, v, Si, 2) : X--);
      }
    }
  }, yt = (d, p, v, C, _ = null) => {
    const { el: E, type: R, transition: N, children: F, shapeFlag: z } = d;
    if (z & 6) {
      yt(d.component.subTree, p, v, C);
      return;
    }
    if (z & 128) {
      d.suspense.move(p, v, C);
      return;
    }
    if (z & 64) {
      R.move(d, p, v, Jt);
      return;
    }
    if (R === q) {
      s(E, p, v);
      for (let j = 0; j < F.length; j++)
        yt(F[j], p, v, C);
      s(d.anchor, p, v);
      return;
    }
    if (R === Es) {
      g(d, p, v);
      return;
    }
    if (C !== 2 && z & 1 && N)
      if (C === 0)
        N.persisted && !E[zs] ? s(E, p, v) : (N.beforeEnter(E), s(E, p, v), ye(() => N.enter(E), _));
      else {
        const { leave: j, delayLeave: L, afterLeave: U } = N, K = () => {
          d.ctx.isUnmounted ? i(E) : s(E, p, v);
        }, te = () => {
          const X = E._isLeaving || !!E[zs];
          E._isLeaving && E[zs](
            !0
            /* cancelled */
          ), N.persisted && !X ? K() : j(E, () => {
            K(), U && U();
          });
        };
        L ? L(E, K, te) : te();
      }
    else
      s(E, p, v);
  }, ve = (d, p, v, C = !1, _ = !1) => {
    const {
      type: E,
      props: R,
      ref: N,
      children: F,
      dynamicChildren: z,
      shapeFlag: V,
      patchFlag: j,
      dirs: L,
      cacheIndex: U,
      memo: K
    } = d;
    if ((j === -2 || z && z.hasOnce) && (_ = !1), N != null && (ut(), An(N, null, v, d, !0), dt()), U != null && (!d.ctx || d.ctx === p) && (p.renderCache[U] = void 0), V & 256) {
      p.ctx.deactivate(d);
      return;
    }
    const te = V & 1 && L, X = !an(d);
    let ae;
    if (X && (ae = R && R.onVnodeBeforeUnmount) && De(ae, p, d), V & 6)
      bl(d.component, v, C);
    else {
      if (V & 128) {
        d.suspense.unmount(v, C);
        return;
      }
      te && wt(d, null, p, "beforeUnmount"), V & 64 ? d.type.remove(
        d,
        p,
        v,
        Jt,
        C
      ) : z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== q || j > 0 && j & 64) ? Zt(
        z,
        p,
        v,
        !1,
        !0
      ) : (E === q && j & 384 || !_ && V & 16) && Zt(F, p, v), C && _i(d);
    }
    const de = K != null && U == null;
    (X && (ae = R && R.onVnodeUnmounted) || te || de) && ye(() => {
      ae && De(ae, p, d), te && wt(d, null, p, "unmounted"), de && (d.el = null);
    }, v);
  }, _i = (d) => {
    const { type: p, el: v, anchor: C, transition: _ } = d;
    if (p === q) {
      xl(v, C);
      return;
    }
    if (p === Es) {
      P(d), _ && !_.persisted && _.afterLeave && _.afterLeave();
      return;
    }
    const E = () => {
      i(v), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (d.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: R, delayLeave: N } = _, F = () => R(v, E);
      N ? N(d.el, E, F) : F();
    } else
      E();
  }, xl = (d, p) => {
    let v;
    for (; d !== p; )
      v = m(d), i(d), d = v;
    i(p);
  }, bl = (d, p, v) => {
    const { bum: C, scope: _, job: E, subTree: R, um: N, m: F, a: z } = d;
    Bi(F), Bi(z), C && Nn(C), _.stop(), E ? (E.flags |= 8, ve(R, d, p, v)) : d.vnode.el && R && (R.transition = d.vnode.transition, ve(R, d, p, v)), N && ye(N, p), ye(() => {
      d.isUnmounted = !0;
    }, p);
  }, Zt = (d, p, v, C = !1, _ = !1, E = 0) => {
    for (let R = E; R < d.length; R++)
      ve(d[R], p, v, C, _);
  }, En = (d) => {
    if (d.shapeFlag & 6)
      return En(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const p = m(d.anchor || d.el), v = p && p[hA];
    return v ? m(v) : p;
  };
  let bs = !1;
  const ki = (d, p, v) => {
    let C;
    d == null ? p._vnode && (ve(p._vnode, null, null, !0), C = p._vnode.component) : S(
      p._vnode || null,
      d,
      p,
      null,
      null,
      null,
      v
    ), p._vnode = d, bs || (bs = !0, Fi(C), Jr(), bs = !1);
  }, Jt = {
    p: S,
    um: ve,
    m: yt,
    r: _i,
    mt: ge,
    mc: I,
    pc: Rt,
    pbc: B,
    n: En,
    o: e
  };
  return {
    render: ki,
    hydrate: void 0,
    createApp: kA(ki)
  };
}
function Ss({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function _t({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function BA(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function uo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (H(s) && H(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Qe(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && uo(o, l)), l.type === cs && (l.patchFlag === -1 && (l = i[r] = Qe(l)), l.el = o.el), l.type === nt && !l.el && (l.el = o.el);
    }
}
function LA(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const A = e[s];
    if (A !== 0) {
      if (i = n[n.length - 1], e[i] < A) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < A ? r = l + 1 : o = l;
      A < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function fo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fo(t);
}
function Bi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function po(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? po(t.subTree) : null;
}
const ho = (e) => e.__isSuspense;
function VA(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : aA(e);
}
const q = /* @__PURE__ */ Symbol.for("v-fgt"), cs = /* @__PURE__ */ Symbol.for("v-txt"), nt = /* @__PURE__ */ Symbol.for("v-cmt"), Es = /* @__PURE__ */ Symbol.for("v-stc"), Mt = [];
let ke = null;
function k(e = !1) {
  Mt.push(ke = e ? null : []);
}
function mo() {
  Mt.pop(), ke = Mt[Mt.length - 1] || null;
}
let hn = 1;
function Li(e, t = !1) {
  hn += e, e < 0 && ke && t && (ke.hasOnce = !0);
}
function go(e) {
  return e.dynamicChildren = hn > 0 ? ke || $t : null, mo(), hn > 0 && ke && ke.push(e), e;
}
function M(e, t, n, s, i, r) {
  return go(
    c(
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
function tt(e, t, n, s, i) {
  return go(
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
function xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bo = ({ key: e }) => e ?? null, Rn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ce(e) || /* @__PURE__ */ be(e) || ee(e) ? { i: Se, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, s = 0, i = null, r = e === q ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bo(t),
    ref: t && Rn(t),
    scopeId: Qr,
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
  return l ? (Un(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= ce(n) ? 8 : 16), hn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ke.push(a), a;
}
const Ce = UA;
function UA(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === yA) && (e = nt), xo(e)) {
    const l = Wt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Un(l, n), hn > 0 && !r && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
  }
  if (ea(e) && (e = e.__vccOpts), t) {
    t = WA(t);
    let { class: l, style: a } = t;
    l && !ce(l) && (t.class = le(l)), oe(a) && (/* @__PURE__ */ li(a) && !H(a) && (a = Fe({}, a)), t.style = ss(a));
  }
  const o = ce(e) ? 1 : ho(e) ? 128 : As(e) ? 64 : oe(e) ? 4 : ee(e) ? 2 : 0;
  return c(
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
function WA(e) {
  return e ? /* @__PURE__ */ li(e) || oo(e) ? Fe({}, e) : e : null;
}
function Wt(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, A = t ? GA(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: A,
    key: A && bo(A),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? H(r) ? r.concat(Rn(t)) : [r, Rn(t)] : Rn(t)
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
    patchFlag: t && e.type !== q ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Wt(e.ssContent),
    ssFallback: e.ssFallback && Wt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && ai(
    u,
    a.clone(u)
  ), u;
}
function Be(e = " ", t = 0) {
  return Ce(cs, null, e, t);
}
function Y(e = "", t = !1) {
  return t ? (k(), tt(nt, null, e)) : Ce(nt, null, e);
}
function Ve(e) {
  return e == null || typeof e == "boolean" ? Ce(nt) : H(e) ? Ce(
    q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : xo(e) ? Qe(e) : Ce(cs, null, String(e));
}
function Qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wt(e);
}
function Un(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (H(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Un(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !oo(t) ? t._ctx = Se : i === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ee(t)) {
    if (s & 65) {
      Un(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Se }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Be(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function GA(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = le([t.class, s.class]));
      else if (i === "style")
        t.style = ss([t.style, s.style]);
      else if (Qn(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(H(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Xn(i) && (t[i] = o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function De(e, t, n, s = null) {
  Ye(e, t, 7, [
    n,
    s
  ]);
}
const YA = no();
let HA = 0;
function KA(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || YA, r = {
    uid: HA++,
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
    scope: new Pl(
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
    propsOptions: FA(s, i),
    emitsOptions: SA(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: re,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: re,
    data: re,
    props: re,
    attrs: re,
    slots: re,
    refs: re,
    setupState: re,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = $A.bind(null, r), e.ce && e.ce(r), r;
}
let pt = null;
const ZA = () => pt || Se;
let Wn, mn;
{
  const e = ns(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Wn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => pt = n
  ), mn = t(
    "__VUE_SSR_SETTERS__",
    (n) => gn = n
  );
}
const di = (e) => {
  const t = pt;
  return Wn(e), e.scope.on(), () => {
    e.scope.off(), Wn(t);
  };
}, Vi = () => {
  pt && pt.scope.off(), Wn(null);
};
function vo(e) {
  return e.vnode.shapeFlag & 4;
}
let gn = !1;
function JA(e, t = !1, n = !1) {
  t && mn(t);
  const { props: s, children: i } = e.vnode, r = vo(e);
  TA(e, s, r, t), RA(e, i, n || t);
  const o = r ? qA(e, t) : void 0;
  return t && mn(!1), o;
}
function qA(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, wA);
  const { setup: s } = n;
  if (s) {
    ut();
    const i = e.setupContext = s.length > 1 ? XA(e) : null, r = di(e), o = wn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = kr(o);
    if (dt(), r(), (l || e.sp) && !an(e) && gA(e), l) {
      if (o.then(Vi, Vi), t)
        return o.then((a) => {
          mn(!0);
          try {
            Ui(e, a, t);
          } finally {
            mn(!1);
          }
        }).catch((a) => {
          os(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Ui(e, o);
  } else
    yo(e);
}
function Ui(e, t, n) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : oe(t) && (e.setupState = Yr(t)), yo(e);
}
function yo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Et);
}
const QA = {
  get(e, t) {
    return he(e, "get", ""), e[t];
  }
};
function XA(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, QA),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function us(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yr(Xl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in cn)
        return cn[n](e);
    },
    has(t, n) {
      return n in t || n in cn;
    }
  })) : e.proxy;
}
function ea(e) {
  return ee(e) && "__vccOpts" in e;
}
const W = (e, t) => /* @__PURE__ */ iA(e, t, gn), ta = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ks;
const Wi = typeof window < "u" && window.trustedTypes;
if (Wi)
  try {
    Ks = /* @__PURE__ */ Wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const wo = Ks ? (e) => Ks.createHTML(e) : (e) => e, na = "http://www.w3.org/2000/svg", sa = "http://www.w3.org/1998/Math/MathML", qe = typeof document < "u" ? document : null, Gi = qe && /* @__PURE__ */ qe.createElement("template"), ia = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? qe.createElementNS(na, e) : t === "mathml" ? qe.createElementNS(sa, e) : n ? qe.createElement(e, { is: n }) : qe.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => qe.createTextNode(e),
  createComment: (e) => qe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => qe.querySelector(e),
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
      Gi.innerHTML = wo(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Gi.content;
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
}, ra = /* @__PURE__ */ Symbol("_vtc");
function oa(e, t, n) {
  const s = e[ra];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Yi = /* @__PURE__ */ Symbol("_vod"), la = /* @__PURE__ */ Symbol("_vsh"), Aa = /* @__PURE__ */ Symbol(""), aa = /(?:^|;)\s*display\s*:/;
function ca(e, t, n) {
  const s = e.style, i = ce(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (ce(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && tn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && tn(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null ? da(
        e,
        o,
        !ce(t) && t ? t[o] : void 0,
        l
      ) || tn(s, o, l) : tn(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[Aa];
      o && (n += ";" + o), s.cssText = n, r = aa.test(n);
    }
  } else t && e.removeAttribute("style");
  Yi in e && (e[Yi] = r ? s.display : "", e[la] && (s.display = "none"));
}
const Tn = /\s*!important$/;
function tn(e, t, n) {
  if (H(n))
    n.forEach((s) => tn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    Tn.test(n) ? e.setProperty(t, n.replace(Tn, ""), "important") : e.setProperty(t, n);
  else {
    const s = ua(e, t);
    Tn.test(n) ? e.setProperty(
      Ft(s),
      n.replace(Tn, ""),
      "important"
    ) : e[s] = n;
  }
}
const Hi = ["Webkit", "Moz", "ms"], Cs = {};
function ua(e, t) {
  const n = Cs[t];
  if (n)
    return n;
  let s = Te(t);
  if (s !== "filter" && s in e)
    return Cs[t] = s;
  s = Sr(s);
  for (let i = 0; i < Hi.length; i++) {
    const r = Hi[i] + s;
    if (r in e)
      return Cs[t] = r;
  }
  return t;
}
function da(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ce(s) && n === s;
}
const Ki = "http://www.w3.org/1999/xlink";
function Zi(e, t, n, s, i, r = Cl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ki, t.slice(6, t.length)) : e.setAttributeNS(Ki, t, n) : n == null || r && !Cr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : We(n) ? String(n) : n
  );
}
function Ji(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? wo(n) : n);
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
    l === "boolean" ? n = Cr(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function zt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function fa(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const qi = /* @__PURE__ */ Symbol("_vei");
function pa(e, t, n, s, i = null) {
  const r = e[qi] || (e[qi] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = ga(t);
    if (s) {
      const A = r[t] = va(
        s,
        i
      );
      zt(e, l, A, a);
    } else o && (fa(e, l, o, a), r[t] = void 0);
  }
}
const ha = /(Once|Passive|Capture)$/, ma = /^on:?(?:Once|Passive|Capture)$/;
function ga(e) {
  let t, n;
  for (; (n = e.match(ha)) && !ma.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ft(e.slice(2)), t];
}
let Ms = 0;
const xa = /* @__PURE__ */ Promise.resolve(), ba = () => Ms || (xa.then(() => Ms = 0), Ms = Date.now());
function va(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (H(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        r.call(s), s._stopped = !0;
      };
      const o = i.slice(), l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const A = o[a];
        A && Ye(
          A,
          t,
          5,
          l
        );
      }
    } else
      Ye(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = ba(), n;
}
const Qi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ya = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? oa(e, s, o) : t === "style" ? ca(e, n, s) : Qn(t) ? Xn(t) || pa(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wa(e, t, s, o)) ? (Ji(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zi(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (_a(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ce(s))) ? Ji(e, Te(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Zi(e, t, s, o));
};
function wa(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qi(t) && ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Qi(t) && ce(n) ? !1 : t in e;
}
function _a(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Te(t);
  return Array.isArray(n) ? n.some((i) => Te(i) === s) : Object.keys(n).some((i) => Te(i) === s);
}
const Gn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return H(t) ? (n) => Nn(t, n) : t;
};
function ka(e) {
  e.target.composing = !0;
}
function Xi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const St = /* @__PURE__ */ Symbol("_assign"), Pn = /* @__PURE__ */ Symbol("_initialValue");
function Is(e, t, n) {
  return t && (e = e.trim()), n && (e = ts(e)), e;
}
const Bt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[Pn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Pn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[St] = Gn(i);
    const r = s || i.props && i.props.type === "number";
    zt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[St](Is(e.value, n, r));
    }), (n || r) && zt(e, "change", () => {
      e.value = Is(e.value, n, r);
    }), t || (zt(e, "compositionstart", ka), zt(e, "compositionend", Xi), zt(e, "change", Xi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", r = e[Pn];
    delete e[Pn], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[St](Is(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, o) {
    if (e[St] = Gn(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? ts(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const A = e.getRootNode();
    (A instanceof Document || A instanceof ShadowRoot) && A.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, _o = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, zt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? ts(Yn(a)) : Yn(a)
      ), r = e.multiple, o = r ? It(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        r,
        r ? H(o) ? i.slice() : i : o
      ];
      try {
        e[St](o);
      } finally {
        Kr(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[St] = Gn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    er(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[St] = Gn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !za(t, n[1], n[0])) && er(e, t);
  }
};
function za(e, t, n) {
  if (!n || H(e)) return ct(e, t);
  if (It(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function er(e, t) {
  const n = e.multiple, s = H(t);
  if (!(n && !s && !It(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const o = e.options[i], l = Yn(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? o.selected = t.some((A) => String(A) === String(l)) : o.selected = Tl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (ct(Yn(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Yn(e) {
  return "_value" in e ? e._value : e.value;
}
const $a = ["ctrl", "shift", "alt", "meta"], Sa = {
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
  exact: (e, t) => $a.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ea = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = Sa[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  }));
}, Ca = /* @__PURE__ */ Fe({ patchProp: ya }, ia);
let tr;
function Ma() {
  return tr || (tr = DA(Ca));
}
const Ia = ((...e) => {
  const t = Ma().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Pa(s);
    if (!i) return;
    const r = t._component;
    !ee(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, Ta(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function Ta(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pa(e) {
  return ce(e) ? document.querySelector(e) : e;
}
const Fa = "zhonglou", Na = "钟楼", Ra = "1.3.1", Oa = "S", Da = 10, ja = "【副本进行中：钟楼】", Ba = [], La = { briefingName: "钟楼" }, Va = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, Ua = { type: "nights", template: "剩余{n}夜" }, Wa = "至第四日日出", Ga = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], Ya = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", Ha = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], Ka = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], Za = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], Ja = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], qa = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], Qa = {
  id: Fa,
  name: Na,
  version: Ra,
  level: Oa,
  players: Da,
  token: ja,
  legacyKeys: Ba,
  detect: La,
  time: Va,
  remaining: Ua,
  deadline: Wa,
  roles: Ga,
  rolesNote: Ya,
  stateFields: Ha,
  phases: Ka,
  events: Za,
  docs: Ja,
  danmaku: qa
}, Xa = "jingjie", ec = "境界游乐园", tc = "1.0.0", nc = "A", sc = "【副本进行中：境界游乐园】", ic = [], rc = { briefingName: "境界游乐园" }, oc = { type: "none" }, lc = { type: "fromPanel" }, Ac = [], ac = [], cc = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], uc = {
  id: Xa,
  name: ec,
  version: tc,
  level: nc,
  token: sc,
  legacyKeys: ic,
  detect: rc,
  time: oc,
  remaining: lc,
  phases: Ac,
  events: ac,
  docs: cc
}, dc = "kaoshi", fc = "考试", pc = "1.1.0", hc = "A", mc = "【副本进行中：考试】", gc = [], xc = { briefingName: "考试" }, bc = { type: "countdown", minutesPerRound: 3 }, vc = { type: "fromPanel" }, yc = "至考试结束", wc = [{ id: "main", name: "考试", cap: 100, next: null }], _c = [], kc = [], zc = {
  id: dc,
  name: fc,
  version: pc,
  level: hc,
  token: mc,
  legacyKeys: gc,
  detect: xc,
  time: bc,
  remaining: vc,
  deadline: yc,
  phases: wc,
  events: _c,
  docs: kc
}, $c = "xiyan", Sc = "喜宴", Ec = "1.1.1", Cc = "D", Mc = "【副本进行中：喜宴】", Ic = [], Tc = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, Pc = { type: "countdown", minutesPerRound: 3 }, Fc = { type: "fromPanel" }, Nc = "至天亮", Rc = [{ id: "main", name: "喜宴", cap: 160, next: null }], Oc = [], Dc = [], jc = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], Bc = {
  id: $c,
  name: Sc,
  version: Ec,
  level: Cc,
  token: Mc,
  legacyKeys: Ic,
  detect: Tc,
  time: Pc,
  remaining: Fc,
  deadline: Nc,
  phases: Rc,
  events: Oc,
  docs: Dc,
  danmaku: jc
}, Lc = "youxi", Vc = "游戏", Uc = "1.1.1", Wc = "C", Gc = "【副本进行中：游戏】", Yc = [], Hc = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Kc = { type: "countdown", minutesPerRound: 8 }, Zc = { type: "fromPanel" }, Jc = "至结算", qc = [{ id: "main", name: "游戏", cap: 90, next: null }], Qc = [], Xc = [], eu = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], tu = {
  id: Lc,
  name: Vc,
  version: Uc,
  level: Wc,
  token: Gc,
  legacyKeys: Yc,
  detect: Hc,
  time: Kc,
  remaining: Zc,
  deadline: Jc,
  phases: qc,
  events: Qc,
  docs: Xc,
  danmaku: eu
}, nu = "wuming", su = "污名", iu = "1.1.0", ru = "B", ou = "4-8", lu = "【副本进行中：污名】", Au = ["污名"], au = { briefingName: "污名" }, cu = { type: "countdown", minutesPerRound: 3 }, uu = { type: "countdown", template: "剩余{m}分钟" }, du = "至收播", fu = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], pu = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], hu = [], mu = !0, gu = {
  id: nu,
  name: su,
  version: iu,
  level: ru,
  players: ou,
  token: lu,
  legacyKeys: Au,
  detect: au,
  time: cu,
  remaining: uu,
  deadline: du,
  phases: fu,
  events: pu,
  docs: hu,
  disableLive: mu
}, xu = "dusongshu", bu = "杜松树", vu = "1.0.0", yu = "A", wu = 6, _u = "【副本进行中：杜松树】", ku = [], zu = { briefingName: "杜松树" }, $u = { type: "countdown", minutesPerRound: 30 }, Su = { type: "fromPanel" }, Eu = "至第四日日出", Cu = ["父亲", "继母", "玛琳", "男孩", "其余"], Mu = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", Iu = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], Tu = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], Pu = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], Fu = [{ title: "游玩说明", md: `## 副本概况
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
最后一页被撕掉了，装订线上只剩一条不整齐的纸茬。` }], Nu = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], Ru = {
  id: xu,
  name: bu,
  version: vu,
  level: yu,
  players: wu,
  token: _u,
  legacyKeys: ku,
  detect: zu,
  time: $u,
  remaining: Su,
  deadline: Eu,
  roles: Cu,
  rolesNote: Mu,
  phases: Iu,
  events: Tu,
  stateFields: Pu,
  docs: Fu,
  danmaku: Nu
}, Ou = "nongxian", Du = "农闲", ju = "1.0.0", Bu = "D", Lu = !0, Vu = "不限", Uu = "【副本进行中：农闲】", Wu = [], Gu = { briefingName: "农闲" }, Yu = { type: "none" }, Hu = { type: "fromPanel" }, Ku = [], Zu = [], Ju = [{ title: "游玩说明", md: `## 系统简报

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
梅姨教新菜，会添在配方板上。` }], qu = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], Qu = {
  id: Ou,
  name: Du,
  version: ju,
  level: Bu,
  rest: Lu,
  players: Vu,
  token: Uu,
  legacyKeys: Wu,
  detect: Gu,
  time: Yu,
  remaining: Hu,
  phases: Ku,
  events: Zu,
  docs: Ju,
  danmaku: qu
}, Xu = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function Lt(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const ed = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function nr(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(ed)) {
    const i = Number(s[1]), r = s[2];
    n = !0, r === "天" ? t += i * 1440 : r === "小时" || r === "个小时" || r === "h" || r === "H" ? t += i * 60 : t += i;
  }
  return n ? Math.round(t) : null;
}
function ko(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: nr(t), total: n === void 0 ? null : nr(n) };
}
function td(e, t) {
  return e.phases.find((n) => n.id === t);
}
function xn(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); )
    n.push(i), s.add(i.id), i = td(e, i.next);
  return n;
}
function zo(e, t) {
  return xn(e, t).filter((n) => n.night).length;
}
function nd(e, t, n) {
  if (xn(e, t).some((i) => i.id === n.id)) return t;
  const s = e.phases[0];
  return s && xn(e, s).some((i) => i.id === n.id) ? s : n;
}
function Ts(e, t, n, s, i) {
  if (!e.phases.length || !e.phases.some((h) => h.id === t.id)) return;
  let r = xn(e, n), o = r.findIndex((h) => h.id === t.id);
  o < 0 && (r = xn(e, t), o = 0);
  const l = r.reduce((h, m) => h + Math.max(0, m.cap), 0), a = Math.max(0, t.cap - s) + r.slice(o + 1).reduce((h, m) => h + Math.max(0, m.cap), 0), A = t.deadline ?? r[0].deadline ?? e.deadline, u = { x: a, y: l, deadline: A };
  if (e.time.type === "countdown") {
    const h = e.time.minutesPerRound, m = e.time.totalMinutes, x = m && m > 0 ? m : l * h;
    let $ = m && m > 0 && l > 0 ? Math.round(x * a / l) : a * h;
    const S = ko(i).remaining;
    S !== null && ($ = Math.min($, S - h)), $ = Math.max(0, $), Object.assign(u, { minutes: $, total: x, text: `约剩${Lt($)}/${Lt(x)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) u.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const h = e.remaining.template.replace("{n}", String(zo(e, t)));
      u.text = A ? `${A}·${h}` : h;
    } else A && (u.text = A);
  return u;
}
const bn = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function $o(e, t, n = bn) {
  const s = e ?? "", i = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), r = i ? Math.max(1, Number(i[1])) : Math.max(1, Math.round(n[t] ?? bn[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: r };
  const l = Number(o[1]), a = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return a <= 0 ? { rounds: r } : { rounds: r, totalMinutes: a, minutesPerRound: Math.max(1, Math.round(a / r)) };
}
const Hn = "generic", Zs = [Qa, uc, zc, Bc, tu, gu, Ru, Qu], sd = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(Xu)
  }
};
function id(e, t) {
  const n = sd[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const So = ["D", "C", "B", "A", "S"];
function Eo(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (A) => {
    (typeof n[A] != "string" || !n[A].trim()) && t.push(`缺少字段或不是文本：${A}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Hn && t.push(`id 不能是保留字 ${Hn}`), So.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((A) => typeof A != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((A) => typeof A != "string")) && t.push("detect.patterns 必须是文本数组");
  const i = n.time;
  !i || !["none", "clock", "countdown"].includes(i.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (i.type === "clock" && (typeof i.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(i.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), i.type !== "none" && (typeof i.minutesPerRound != "number" || i.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), i.type === "countdown" && i.totalMinutes !== void 0 && (typeof i.totalMinutes != "number" || i.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const r = n.remaining;
  !r || !["nights", "countdown", "fromPanel"].includes(r.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : r.type !== "fromPanel" && typeof r.template != "string" && t.push("remaining.template 必须是文本"), r?.type === "countdown" && i?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.rest !== void 0 && typeof n.rest != "boolean" && t.push("rest 必须是 true 或 false"), n.stateFields !== void 0 && (Array.isArray(n.stateFields) ? n.stateFields.forEach((A, u) => {
    (!A || typeof A.key != "string" || !A.key || typeof A.label != "string" || typeof A.hint != "string") && t.push(`stateFields[${u}] 需要 key、label、hint 三个文本`);
  }) : t.push("stateFields 必须是数组")), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((A) => typeof A != "string" || !A)) && t.push("roles 必须是文本数组");
  const o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((A, u) => {
    if (!A || typeof A.id != "string" || typeof A.name != "string") {
      t.push(`phases[${u}] 缺少 id 或 name`);
      return;
    }
    o.has(A.id) && t.push(`阶段 id 重复：${A.id}`), l.has(A.name) && t.push(`阶段名称重复：${A.name}`), o.add(A.id), l.add(A.name), (typeof A.cap != "number" || A.cap < 1 || !Number.isInteger(A.cap)) && t.push(`阶段 ${A.id} 的 cap 必须是正整数`), A.next !== null && typeof A.next != "string" && t.push(`阶段 ${A.id} 的 next 必须是阶段 id 或 null`), A.deadline !== void 0 && typeof A.deadline != "string" && t.push(`阶段 ${A.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((A) => {
    A && typeof A.next == "string" && !o.has(A.next) && t.push(`阶段 ${A.id} 的 next 指向不存在的阶段：${A.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const a = /* @__PURE__ */ new Set();
  return Array.isArray(n.events) ? n.events.forEach((A, u) => {
    if (!A || typeof A.id != "string" || typeof A.text != "string") {
      t.push(`events[${u}] 缺少 id 或 text`);
      return;
    }
    a.has(A.id) && t.push(`事件 id 重复：${A.id}`), a.add(A.id), o.has(A.phase) || t.push(`事件 ${A.id} 的 phase 不存在：${A.phase}`), (!Number.isInteger(A.from) || !Number.isInteger(A.to) || A.from < 1 || A.to < A.from) && t.push(`事件 ${A.id} 的轮次区间无效`), A.kind !== "event" && A.kind !== "directive" && t.push(`事件 ${A.id} 的 kind 必须是 event 或 directive`), A.if !== void 0 && typeof A.if != "string" && t.push(`事件 ${A.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((A, u) => {
    !A || typeof A.title != "string" ? t.push(`docs[${u}] 缺少 title`) : A.md !== void 0 && typeof A.md != "string" ? t.push(`docs[${u}].md 必须是文本`) : A.image !== void 0 && typeof A.image != "string" && t.push(`docs[${u}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), n.danmaku !== void 0 && (Array.isArray(n.danmaku) ? n.danmaku.forEach((A, u) => {
    if (!A || typeof A.type != "string" || typeof A.text != "string") {
      t.push(`danmaku[${u}] 需要 type 和 text`);
      return;
    }
    A.when !== void 0 && typeof A.when != "string" && t.push(`danmaku[${u}].when 必须是文本`), A.scope !== void 0 && typeof A.scope != "string" && t.push(`danmaku[${u}].scope 必须是文本`), A.phase !== void 0 && (!Array.isArray(A.phase) || A.phase.some((h) => typeof h != "string") ? t.push(`danmaku[${u}].phase 必须是文本数组`) : A.phase.forEach((h) => {
      o.size > 0 && !o.has(h) && console.warn(`[rlzc] danmaku[${u}] 的 phase "${h}" 不在阶段表中，已跳过`);
    }));
  }) : t.push("danmaku 必须是数组")), t;
}
function Co(e) {
  return So.includes(e.level ?? "") ? e.level : "D";
}
function Mo(e, t = bn) {
  const n = Co(e), s = $o(e.limit, n, t), i = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, r = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / i)) : void 0;
  return {
    id: Hn,
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
function fi(e) {
  const t = new Set(Zs.map((n) => n.id));
  return [...Zs, ...e.filter((n) => !t.has(n.id))];
}
const rd = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, od = /<阶段切换>([\s\S]*?)<\/阶段切换>/, ld = /<副本结算>([\s\S]*?)<\/副本结算>/, Io = /<副本>([\s\S]*?)<\/副本>/, Ad = /<角色登记>([\s\S]*?)<\/角色登记>/, ad = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, cd = /<积分变动>([\s\S]*?)<\/积分变动>/g;
function To(e) {
  const t = rd.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (o) => {
    const l = new RegExp(`${o}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return l ? l[1].trim() : void 0;
  }, r = i("等级");
  return r && (n.level = r.replace(/级$/, "").trim().toUpperCase()), n.goal = i("目标"), n.limit = i("时限"), n.players = i("人数"), n;
}
function ud(e) {
  const t = od.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function Po(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const i = n.slice(0, s).trim(), r = n.slice(s + 1).trim();
    i && (t[i] = r);
  }
  return t;
}
function pi(e) {
  const t = ld.exec(e ?? "");
  if (!t) return null;
  const n = Po(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function Fo(e) {
  const t = Ad.exec(e ?? "");
  if (!t) return null;
  const n = Po(t[1]);
  return Object.keys(n).length ? n : null;
}
function Fn(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function No(e) {
  const t = Io.exec(e ?? "");
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
      l === "时限" ? (n.limit = a, s = null) : l === "进度条" ? (n.progressBar = a, s = null) : l === "任务" ? (Fn(a) && n.tasks.push(Fn(a)), s = "tasks") : (n.ps = a, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(r)) {
      s = null;
      continue;
    }
    s === "tasks" ? Fn(r) && n.tasks.push(Fn(r)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${r}` : r);
  }
  return n;
}
function dd(e) {
  const t = ad.exec(e ?? "");
  return t ? t[2] : null;
}
function Ps(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (n(i)) return i;
    s.add(i.id), i = i.next ? e.phases.find((r) => r.id === i.next) : void 0;
  }
  return null;
}
function fd(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const i = (l) => !!l.clock && !l.night;
  let r = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      r = Ps(e, t, i), o = r?.cap ?? 0;
      break;
    case "晚饭":
      r = Ps(e, t, i), r && (o = Math.ceil(r.cap * 0.75), r.id === t.id && o <= n && (o = r.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      r = Ps(e, t, (l) => !!l.night), o = r?.cap ?? 0;
      break;
  }
  return !r || r.id === t.id && o <= n + 1 ? null : { phase: r.id, round: o, label: `${r.name}第${o}轮` };
}
const pd = /<状态栏>([\s\S]*?)<\/状态栏>/;
function hd(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function Fs(e, t) {
  const n = hd(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const Ns = /* @__PURE__ */ new Map();
function md(e, t) {
  const n = `${e}\0${t}`;
  if (!Ns.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (i) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, i);
    }
    Ns.set(n, s);
  }
  return Ns.get(n);
}
function gd(e, t) {
  const n = String(e ?? ""), s = (l, a) => l ? { signal: a, pack: l, info: { name: l.name, level: l.level } } : null, i = To(n);
  if (i)
    return { signal: 1, pack: t.find((a) => a.detect.briefingName === i.name), info: i };
  const r = Io.exec(n);
  if (r) {
    const l = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(r[1]), a = l && s(Fs(t, l[1]), 2);
    if (a) return a;
  }
  for (const l of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const a = s(Fs(t, l[1]), 3);
    if (a) return a;
  }
  const o = pd.exec(n);
  if (o) {
    for (const l of o[1].split(`
`))
      if (l.includes("地点"))
        for (const a of l.matchAll(/副本《([^》]+)》/g)) {
          const A = s(Fs(t, a[1]), 4);
          if (A) return A;
        }
  }
  for (const l of t)
    for (const a of l.detect.patterns ?? []) {
      const A = md(l.id, a);
      if (A && A.test(n)) return s(l, 5);
    }
  return null;
}
const sr = 5, xd = { id: "_open", name: "进行中", cap: 0, next: null };
function He(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function bd(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function Ro(e, t, n) {
  const s = bd(e) + Math.max(0, n - 1) * t, i = Math.floor(s / 60) % 24, r = (s % 60 + 60) % 60;
  return `${i % 12 === 0 ? 12 : i % 12}:${String(r).padStart(2, "0")}`;
}
function ir(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return Ro(e.time.dayStart, e.time.minutesPerRound, n);
}
function Oo(e) {
  return e.phases.length ? e.phases : [xd];
}
function On(e, t) {
  return Oo(e).find((n) => n.id === t);
}
function rr(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (i.id === n) return !0;
    s.add(i.id), i = On(e, i.next);
  }
  return !1;
}
function or(e, t, n, s) {
  const i = n + 1, r = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > i) {
      let l = r.map((A, u) => ({ e: A, i: u })).filter(({ e: A }) => A.from >= i && A.from <= o).sort((A, u) => A.e.from - u.e.from || A.i - u.i).map(({ e: A }) => A), a = o;
      return l.length > sr && (a = l[sr - 1].from, l = l.filter((A) => A.from <= a)), { phase: t, round: a, events: l, skipFrom: i };
    }
  }
  return { phase: t, round: i, events: r.filter((o) => o.from === i) };
}
function vd(e, t, n) {
  const s = t.entryIndex;
  if (!He(e[s])) return null;
  const i = Oo(n);
  let r = i[0], o = i[0], l = 0, a, A = !1, u, h, m = null, x, $, S;
  const T = /* @__PURE__ */ new Set(), w = {}, b = /* @__PURE__ */ new Map();
  for (const Ae of t.manual ?? [])
    b.has(Ae.atIndex) || b.set(Ae.atIndex, []), b.get(Ae.atIndex).push(Ae);
  const g = (Ae) => {
    n.phases.length && (o = nd(n, o, Ae)), r = Ae, l = 0, m && !rr(n, r, m.phase) && (m = null);
  };
  for (let Ae = s; Ae < e.length; Ae++) {
    const Kt = e[Ae];
    if (!A && He(Kt)) {
      const ge = or(n, r, l, m);
      l = ge.round;
      const xt = new Set((Kt.extra?.rlzc?.skippedEvents ?? []).map(($e) => $e.id));
      ge.events.forEach(($e) => {
        xt.has($e.id) || T.add($e.id);
      }), w[Ae] = {
        phase: r.id,
        round: l,
        events: ge.events.map(($e) => $e.id),
        skipFrom: ge.skipFrom,
        limit: Ts(n, r, o, l, a)
      }, m && r.id === m.phase && l >= m.round && (m = null);
      const bt = String(Kt.mes ?? ""), vt = No(bt);
      vt && ($ = vt), a = vt?.limit;
      const Rt = Fo(bt);
      Rt && (S = Rt);
      const Sn = pi(bt);
      if (Sn)
        A = !0, u = "tag", h = Ae, x = Sn;
      else {
        const $e = ud(bt), yt = $e ? i.find((ve) => ve.name === $e) : void 0;
        if (yt && n.phases.length)
          g(yt);
        else if (r.cap > 0 && l >= r.cap && r.next) {
          const ve = On(n, r.next);
          ve && g(ve);
        }
      }
    }
    for (const ge of b.get(Ae) ?? []) {
      if (A) break;
      switch (ge.kind) {
        case "skip": {
          m = On(n, ge.targetPhase) && rr(n, r, ge.targetPhase) ? { phase: ge.targetPhase, round: ge.targetRound } : null;
          break;
        }
        case "setPhase": {
          const xt = On(n, ge.phase);
          xt && (m = null, g(xt));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(ge.round)), m = null;
          break;
        case "end":
          A = !0, u = "manual", h = Ae;
          break;
      }
    }
  }
  const P = A ? null : or(n, r, l, m), Z = P ? P.round : l + 1, Q = r.cap > 0, G = n.events.filter((Ae) => T.has(Ae.id)).map((Ae) => Ae.id), I = A ? void 0 : Ts(n, r, o, Z, a), y = A ? void 0 : Ts(n, r, o, l);
  let B;
  const we = n.remaining;
  return !A && we.type === "nights" && n.phases.length && !r.byTag && !r.frozen ? B = we.template.replace("{n}", String(zo(n, r))) : !A && we.type === "countdown" && I?.minutes !== void 0 && (B = we.template.replace("{m}", String(I.minutes))), {
    phase: r,
    round: l,
    nextRound: Z,
    clock: A ? void 0 : ir(n, r, Z),
    currentClock: ir(n, r, l),
    remainingText: B,
    limit: I,
    roundsLeft: y ? { x: y.x, y: y.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: A,
    endedBy: u,
    endIndex: h,
    firedEvents: G,
    warn: !A && Q && Z >= r.cap - 2,
    isLastRound: !A && Q && Z === r.cap,
    overdue: !A && Q && !r.next && Z > r.cap,
    next: P,
    skipGoal: m,
    settlement: x,
    panel: $,
    rolesFromChat: S,
    perMessage: w,
    entryIndex: s
  };
}
const Do = "rlzc_token", jo = "rlzc_progress", Bo = "rlzc_turn", Lo = "rlzc_state", Vo = "rlzc_ledger", yd = [Do, jo, Bo, Lo, Vo], vn = { token: "", progress: "", turn: "", injected: [] };
function wd(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Kn(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const i = new RegExp(`(?<!\\{)\\{(${s.map(wd).join("|")})\\}(?!\\})`, "g");
  return e.replace(i, (r, o) => n?.[o]?.trim() || o);
}
function _d(e, t) {
  if (!t.length) return "";
  const n = e.events.map((a) => a.id), s = t.map((a) => n.indexOf(a)).filter((a) => a >= 0).sort((a, A) => a - A), i = [];
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
function lr(e, t, n, s = !1) {
  let i = Kn(e.text, t, n);
  return e.to > e.from && (i = `在本阶段第${e.from}到${e.to}轮之间发生：${i}`), e.if && !s && (i += `（条件：${Kn(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${i}`;
}
function kd(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function zd(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...vn, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return vn;
  const i = s.roles, r = e.phases.length > 0, o = t.next, l = [`副本：${e.name}（${e.level}级）`], a = t.limit;
  if (r)
    l.push(`阶段：${t.phase.name}`), l.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), a && l.push(`剩余${a.x}/${a.y}轮`), t.clock && l.push(`钟时：${t.clock}`), a?.text && l.push(`时限：${a.text}`), e.remaining.type === "countdown" && t.remainingText && l.push(t.remainingText), a?.deadline && !a.text?.includes(a.deadline) && l.push(`截止：${a.deadline}`);
  else {
    l.push(`本轮：第${t.nextRound}轮`), t.clock && l.push(`钟时：${t.clock}`);
    const g = s.panelLimit || s.briefing?.limit;
    g && l.push(`时限：${g}`);
  }
  const A = ["［副本进度·仅供AI］", l.join("　")];
  if (s.briefing?.goal && (!r || e.id === "generic") && A.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const g = e.roles.filter((P) => i?.[P]);
    A.push(
      g.length ? `角色登记：${e.roles.map((P) => `${P}=${i?.[P] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const u = _d(e, t.firedEvents);
  u && A.push(`已发生事件：${u}`);
  const h = [];
  o.skipFrom !== void 0 && h.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const m = new Map((s.subNext ?? []).map((g) => [g.id, g])), x = o.events.filter((g) => g.if && m.get(g.id)?.ok === !1).map((g) => ({ id: g.id, reason: m.get(g.id).reason })), $ = o.events.filter((g) => !x.some((P) => P.id === g.id)), S = (g) => !!g.if && m.get(g.id)?.ok === !0, T = $.filter((g) => g.kind === "event"), w = $.filter((g) => g.kind === "directive");
  if (T.length && (h.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), T.forEach((g) => h.push(lr(g, e, i, S(g))))), w.length && (h.push("本轮写作要求："), w.forEach((g) => h.push(lr(g, e, i, S(g))))), t.isLastRound ? h.push(kd(t)) : t.overdue && h.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && h.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && h.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((g) => i?.[g])) {
    let g = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((P) => `${P}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (g += "死者不得是{{user}}或其同伴。"), h.push(g);
  }
  let b;
  return a?.text && (a.minutes !== void 0 ? (h.push(
    `本轮<副本>的时限一栏写：${a.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), b = { text: a.text, minutes: a.minutes, total: a.total }) : (h.push(`本轮<副本>的时限一栏写：${a.text}（照抄）。`), b = { text: a.text })), {
    token: e.token,
    progress: A.join(`
`),
    turn: h.length ? ["［本轮指令·仅供AI］", ...h].join(`
`) : "",
    injected: $.map((g) => g.id),
    limit: b,
    skipped: x.length ? x : void 0,
    state: s.stateText || void 0
  };
}
const $d = 1, Sd = 0;
function ue() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function Ed() {
  const e = ue();
  return e.eventTypes ?? e.event_types ?? {};
}
function it(e, t) {
  const n = Ed()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  ue().eventSource.on(n, t);
}
function se() {
  return ue().chat ?? [];
}
function ds() {
  const e = ue();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function Gt() {
  return ue().chatMetadata ?? {};
}
function ht() {
  const e = ue();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function jt(e, t, n, s) {
  ue().setExtensionPrompt(e, t, $d, n, s, Sd);
}
function Ie(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Ke(e) {
  const t = ue();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function Ar(e, t = "") {
  const n = ue();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const i = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof i == "string" ? i : null;
  }
  return window.prompt(e, t);
}
const Tt = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function Uo(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function Cd(e, t = Tt) {
  return t.length ? e.replace(Uo(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function Wo(e, t = Tt, n = !1) {
  const s = se()[e];
  if (!s || s.is_user) return;
  const i = String(s.extra?.display_text ?? s.mes ?? "");
  if (!Uo(n ? Tt : t, "").test(i)) return;
  const r = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!r) return;
  const o = ue().messageFormatting;
  if (typeof o != "function") return;
  const l = o(Cd(i, t), s.name ?? "", !!s.is_system, !1, e);
  r.innerHTML !== l && (r.innerHTML = l);
}
function Md(e = Tt, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && Wo(s, e, t);
  });
}
const Id = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function Go(e) {
  return e.stateFields?.length ? e.stateFields : [Id];
}
const Td = [...Tt, "状态栏"], Pd = new RegExp(`<(${Td.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function Fd(e) {
  return String(e ?? "").replace(Pd, "").replace(/\n{3,}/g, `

`).trim();
}
function Nd(e) {
  const n = [
    "你是角色扮演副本的记录员，不写剧情，只整理事实。",
    "根据本轮正文完成三件事：",
    "1. 事件核对：逐条判断「本轮后台事件」在正文里是 done（已发生）、missed（该发生但没写出来）还是 void（条件已不成立，不该发生），各附一句理由。后台事件即使{{user}}看不到，只要正文与之不矛盾、且没有写出相反的事实，就算 done。标明「第X到Y轮之间」的事件不一定在本轮写出：本轮没写到、也没写出相反的事实，同样算 done。",
    "2. 隐藏状态：在「上一轮状态」的基础上更新下列字段，只依据正文里已经发生的事实，没有变化就照抄上一轮：",
    ...Go(e.pack).map((l) => `   - ${l.key}（${l.label}）：${l.hint}`),
    "3. 条件预判：逐条判断「下一轮事件」的条件现在是否仍成立（ok 为 true/false），附一句理由。",
    "只输出一个 JSON 对象，不要任何解释，格式：",
    '{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}]}',
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
${Fd(e.text)}`
  ].join(`

`);
  return { system: n, user: o };
}
function Rd(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class nn extends Error {
}
function Od(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), i = t.lastIndexOf("}");
  if (s < 0 || i <= s) throw new nn("返回里没有 JSON");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new nn("返回的 JSON 无法解析");
  }
  if (!r || typeof r != "object" || Array.isArray(r)) throw new nn("返回的不是 JSON 对象");
  if (!r.state || typeof r.state != "object" || Array.isArray(r.state)) throw new nn("缺少 state");
  const o = ["done", "missed", "void"], l = (Array.isArray(r.events) ? r.events : []).filter((A) => A && typeof A.id == "string" && o.includes(A.status)).map((A) => ({ id: A.id, status: A.status, reason: String(A.reason ?? "") })), a = (Array.isArray(r.next) ? r.next : []).filter((A) => A && typeof A.id == "string" && typeof A.ok == "boolean").map((A) => ({ id: A.id, ok: A.ok, reason: String(A.reason ?? "") }));
  return { events: l, state: r.state, next: a };
}
function Dd(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function jd(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((i) => String(i ?? "")).join("|");
  return `${e}:${t}:${s}:${Dd(String(n?.mes ?? ""))}`;
}
function Bd(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function Ld(e, t, n = 2) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return Od(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
class Yo extends Error {
}
function Ho(e) {
  if (e instanceof Yo) return "超时";
  if (e instanceof nn) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function Ko(e) {
  return e?.extra?.rlzc;
}
function fs(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!He(s)) continue;
    const i = Ko(s)?.sub;
    if (i?.state && !i.skipped) return { index: n, state: i.state };
  }
  return null;
}
function Vd(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!He(s)) continue;
    const i = Ko(s)?.sub;
    return i && !i.skipped && Array.isArray(i.next) ? i.next : void 0;
  }
}
function Zn(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => Zn(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${Zn(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function Zo(e, t) {
  const n = Go(e), s = new Set(n.map((r) => r.key)), i = n.filter((r) => t[r.key] !== void 0).map((r) => `${r.label}：${Zn(t[r.key])}`);
  for (const [r, o] of Object.entries(t)) s.has(r) || i.push(`${r}：${Zn(o)}`);
  return i.length ? ["［副本状态·仅供AI］", ...i].join(`
`) : "";
}
const Ud = 1500;
function Jo() {
  return ue().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function qo(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Qo(e, t) {
  const n = new AbortController();
  let s;
  const i = new Promise((r, o) => {
    s = setTimeout(() => {
      n.abort(), o(new Yo(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), i]);
  } finally {
    clearTimeout(s);
  }
}
function Xo(e, t) {
  const n = t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : "") ?? "", s = new Error(`${e || ""} ${n}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return s.status = e, s;
}
async function el(e, t, n, s = Ud) {
  const i = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: Jo(),
    signal: n,
    body: JSON.stringify({
      ...qo(e),
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
  if (!i.ok || o?.error) throw Xo(i.status === 200 ? 0 : i.status, o);
  const l = o?.choices?.[0]?.message?.content ?? o?.choices?.[0]?.text ?? o?.content;
  if (typeof l != "string") throw new Error("返回里没有正文");
  return l;
}
async function Wd(e) {
  const t = ue();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function Gd(e, t) {
  return Qo(e.timeoutMs, (n) => {
    if (e.source === "main") return Wd(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return el(e.preset, t, n);
  });
}
async function tl(e) {
  const t = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: Jo(),
    body: JSON.stringify(qo(e))
  }), n = await t.json().catch(() => null);
  if (!t.ok || n?.error) throw Xo(t.status, n);
  return (Array.isArray(n) ? n : Array.isArray(n?.data) ? n.data : Array.isArray(n?.models) ? n.models : []).map((i) => typeof i == "string" ? i : i?.id ?? i?.name).filter(Boolean).sort();
}
async function Yd(e, t) {
  const n = await tl(e).catch(() => []), s = { ...e, model: e.model || n[0] || "" }, i = await Qo(
    t,
    (r) => el(s, { system: "只回复 OK。", user: "ping" }, r, 5)
  );
  return { models: n, reply: i };
}
const nl = "rlzc_ledger", Nt = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, Hd = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function Kd(e) {
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
function _n(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), i = String(t.getHours()).padStart(2, "0"), r = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${i}:${r}`;
}
function Zd(e) {
  const t = /等级[：:]\s*([DCBAS])/.exec(e);
  return t ? t[1] : null;
}
function sl(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function Jd(e, t, n, s, i) {
  const r = n.结果 ?? "", o = (n.评价 ?? "B").toUpperCase(), l = r === "通关" || r === "成功" || r === "胜利", a = r === "失败" || r === "阵亡";
  if (!l && !a)
    return { delta: 0, source: "" };
  if (a)
    return i ? { delta: 0, source: "清算副本失败·不记账" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣30%" };
  if (i) {
    const S = Nt[t] + 500;
    return { delta: Math.max(0, S - s), source: `清算副本通关·补至${S}` };
  }
  const A = ["D", "C", "B", "A", "S"].includes(o) ? o : "B";
  let u = Hd[e][A];
  const h = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", m = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", x = e !== t;
  let $ = `副本结算·通关·${A}`;
  return h ? (u = Math.round(u * 0.5), $ += "·抽查×0.5") : (m || x) && (u = Math.round(u * 0.6), $ += m ? "·越级×0.6" : "·等级不符×0.6"), { delta: u, source: $ };
}
function Yt(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function kn(e, t, n) {
  let s = e, i = !1;
  for (const r of t)
    s += r.delta, s < n && (i = !0), r.type === "settle" && r.delta > 0 && (i = !1);
  return i;
}
function qd(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function Qd(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const i = s ?? Nt[n], r = Math.max(0, i - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${r}分（${n}级斩杀线${i}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const at = "rlzc";
function Xd() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function ef(e, t, n) {
  return {
    id: Xd(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function tf(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function nf(e, t) {
  return e.packId === Hn ? e.briefing ? Mo(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function sf(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return He(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function rf(e, t) {
  const n = sf(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((i) => ({ ...i, atIndex: i.atIndex + s }))), t.manual = t.manual.filter((i) => i.atIndex < e.length && i.atIndex >= t.entryIndex), !0;
}
function il(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const ar = "rlzc_declined";
function hi(e, t) {
  return `${e}:${t}`;
}
const rl = He;
function ps(e, t, n) {
  if (!rl(e[t])) return null;
  const s = gd(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function of(e, t, n, s, i = []) {
  for (let r = Math.max(0, n); r <= Math.min(s, e.length - 1); r++) {
    const o = ps(e, r, t);
    if (o && !i.includes(hi(r, o.info.name))) return o;
  }
  return null;
}
function lf(e, t, n = [], s = Zs, i = 0) {
  if (t?.status === "active") return null;
  let r = -1;
  for (let l = Math.max(0, i); l < e.length; l++) if (rl(e[l])) {
    r = l;
    break;
  }
  if (r < 0 || t && t.entryIndex === r) return null;
  const o = ps(e, r, s);
  return !o || n.includes(hi(r, o.info.name)) ? null : o;
}
const Af = /[■█▰●◆★▮▓]/g, af = /[□░▱○◇☆▯▒]/g;
function cf(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const r = Number(n[2]);
    return r === 100 ? Number(n[1]) : r > 0 ? Math.round(Number(n[1]) / r * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(Af) ?? []).length, i = (t.match(af) ?? []).length;
  return s + i > 0 ? Math.round(s / (s + i) * 100) : null;
}
function cr(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function uf(e, t) {
  return cr(e).includes(cr(t));
}
function df(e, t, n) {
  const s = [], i = Object.keys(n.perMessage).map(Number).sort((a, A) => a - A);
  let r = !1, o = null, l = !1;
  for (const a of i) {
    const A = n.perMessage[a], h = t.phases.find((g) => g.id === A.phase)?.name ?? "进行中", m = (g, P) => s.push({ index: a, phase: h, round: A.round, kind: g, text: P }), x = e[a]?.extra?.rlzc;
    for (const g of x?.sub?.events ?? []) g.status === "missed" && m("eventMissed", `${g.id} 未写出来：${g.reason}`);
    for (const g of x?.skippedEvents ?? []) m("eventSkipped", `${g.id} 条件不成立，已跳过：${g.reason}`);
    const $ = No(String(e[a]?.mes ?? "")), S = a === n.entryIndex;
    if (!$) {
      S || m("missing", "本轮回复缺少 <副本> 面板"), l = !S;
      continue;
    }
    l = !1;
    const T = cf($.progressBar);
    $.progressBar === void 0 ? m("progressUnreadable", "<副本> 中没有进度条一栏") : T === null ? m("progressUnreadable", `进度条无法读出数值：「${$.progressBar}」`) : (!r && T !== 0 && m("progressStart", `入场后第一轮的进度条应为0，实际为 ${T}`), (T < 0 || T > 100) && m("progressRange", `进度条数值 ${T} 超出 0–100`), o !== null && T < o && m("progressDrop", `进度条比上一轮低：${o} → ${T}`), o = T), r = !0;
    const w = e[a]?.extra?.rlzc?.limit, b = w?.text ? w : A.limit?.text ? { text: A.limit.text, minutes: A.limit.minutes, total: A.limit.total } : void 0;
    if (b) {
      const g = $.limit;
      if (b.minutes !== void 0) {
        const P = ko(g);
        !g || P.remaining === null || P.total === null ? m("limit", `时限读不到「剩余时间/总时长」：写的是「${g ?? "（没有时限一栏）"}」，注入的是「${b.text}」`) : (P.remaining > b.minutes && m("limit", `剩余时间比注入值多：写的是${Lt(P.remaining)}，注入的是${Lt(b.minutes)}`), b.total !== void 0 && P.total !== b.total && m("limit", `总时长与注入值不一致：写的是${Lt(P.total)}，注入的是${Lt(b.total)}`));
      } else (!g || !uf(g, b.text)) && m("limit", `时限与注入文字不一致：写的是「${g ?? "（没有时限一栏）"}」，注入的是「${b.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: r };
}
const Js = "rlzc", ol = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, sn = {
  depths: { token: 4, progress: 4, turn: 0, ledger: 4 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...bn },
  subApi: structuredClone(ol),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0 }
}, f = /* @__PURE__ */ rs({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(sn),
  packs: [],
  lastInjection: vn,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: []
});
function zn(e) {
  return JSON.parse(JSON.stringify(e));
}
function mi(...e) {
  f.settings.debug && console.log("[rlzc]", ...e);
}
function ff() {
  const e = ue().extensionSettings, t = e[Js] ?? {}, n = {
    ...structuredClone(sn),
    ...t,
    depths: { ...sn.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? sn.depths.ledger },
    ball: { ...sn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => Eo(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...bn, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(ol),
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
      rolesDebug: t.cardCollapsed?.rolesDebug ?? !0
    }
  };
  e[Js] = n, f.settings = n, f.packs = fi(n.customPacks);
}
function ze() {
  ue().extensionSettings[Js] = /* @__PURE__ */ J(f.settings), ue().saveSettingsDebounced(), f.packs = fi(f.settings.customPacks);
}
function pf(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = Eo(t);
  if (n.length) return n;
  const s = t;
  return fi([]).some((i) => i.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (f.settings.customPacks = [...f.settings.customPacks.filter((i) => i.id !== s.id), s], ze(), []);
}
function hf(e) {
  f.settings.customPacks = f.settings.customPacks.filter((t) => t.id !== e), ze();
}
function mt() {
  const e = Gt()[nl];
  return !e || Array.isArray(e) ? {} : e;
}
function $n(e) {
  Gt()[nl] = e, ht();
}
function hs(e) {
  const t = [];
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (i.is_user || i.is_system) continue;
    const r = i.extra?.rlzc?.ledger;
    if (Array.isArray(r))
      for (const o of r) t.push({ ...o, mesIndex: s });
  }
  const n = mt();
  for (const s of n.adjust ?? [])
    t.push({ delta: s.amount, source: `手动：${s.note}`, type: "manual", at: s.at, mesIndex: -1 });
  return t;
}
function Ht(e) {
  const t = mt();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const i = e[s];
    if (i.is_user || !i.mes) continue;
    const r = n.exec(i.mes);
    if (!r) continue;
    const o = sl(r[1]);
    if (o !== null) {
      const l = _n(i.send_date ?? i.gen_finished ?? void 0);
      return $n({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function mf(e) {
  if (!(mt().init != null || f.ledger.length > 0)) return "";
  const s = Ht(e), i = Yt(s.value, f.ledger), r = f.pack?.level ?? "D", o = Nt[r], l = kn(s.value, f.ledger, o);
  return Qd(i, l, r, o);
}
function gf(e) {
  const t = se(), n = t[e];
  if (!n || n.is_user) return;
  const s = n.mes ?? "", i = _n(n.send_date ?? n.gen_finished ?? void 0), r = [], o = new RegExp(cd.source, "g");
  let l;
  for (; (l = o.exec(s)) !== null; ) {
    const A = Kd(l[1]);
    A && r.push({ delta: A.delta, source: A.source, type: "tag", at: i });
  }
  const a = pi(s);
  if (a && f.pack && !f.pack.rest) {
    const A = {
      结果: a.result ?? "",
      评价: a.rating ?? "",
      ...a.fields
    }, u = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let h = f.pack.level;
    for (let T = t.length - 1; T >= 0; T--) {
      if (t[T].is_user || !t[T].mes) continue;
      const w = u.exec(t[T].mes);
      if (!w) continue;
      const b = Zd(w[1]);
      if (b) {
        h = b;
        break;
      }
    }
    const m = Ht(t), x = Yt(m.value, f.ledger), $ = kn(m.value, f.ledger, Nt[h]), S = Jd(f.pack.level, h, A, x, $);
    S.delta !== 0 && r.push({ delta: S.delta, source: S.source, type: "settle", at: i });
  }
  if (r.length || n.extra?.rlzc?.ledger?.length) {
    n.extra = n.extra ?? {};
    const A = n.extra.rlzc ?? { phase: "", round: 0, injected: [] };
    n.extra.rlzc = zn({ ...A, ledger: r.length ? r : void 0 }), ht();
  }
  f.ledger = hs(se());
}
function xf(e, t) {
  const n = mt(), s = _n(void 0), i = [...n.adjust ?? [], { amount: e, note: t, at: s }];
  $n({ ...n, adjust: i });
  const r = { delta: e, source: `手动：${t}`, type: "manual", at: s, mesIndex: -1 };
  f.ledger = [...f.ledger, r];
}
function bf(e, t) {
  xf(e, t);
}
function vf(e) {
  const t = mt(), n = _n(void 0);
  $n({ ...t, init: { value: e, source: "手动设置", at: n } }), f.ledger = hs(se());
}
function yf(e, t) {
  if (!e && !t) return;
  const n = mt(), s = se(), i = _n(void 0);
  $n({ ...n, fix: { level: e, rank: t, at: i, afterIndex: s.length - 1 } });
}
function gt() {
  return tf(Gt()[at]);
}
function ms() {
  const e = Gt(), t = Array.isArray(e[at]?.declined) ? e[at].declined : [], n = Array.isArray(e[ar]) ? e[ar] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function wf(e) {
  const t = Gt(), n = [...ms().filter((s) => s !== e), e];
  t[at] = { ...t[at] ?? {}, declined: n }, ht();
}
function Pt(e) {
  const t = Gt(), n = ms(), s = n.length ? { declined: n } : {};
  e ? t[at] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[at] = s : delete t[at], ht();
}
function gi(e) {
  const t = gt();
  t && (e(t), Pt(t), st());
}
function ll(e) {
  const t = se();
  return (e === "swipe" || e === "continue") && He(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Jn(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = nf(t, f.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = vd(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? df(e, n, s) : null };
}
function st() {
  const e = se();
  let t = gt();
  if (t) {
    const s = JSON.stringify(t);
    if (!rf(e, t))
      Pt(null), Ie("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const i = Jn(e, t);
      i.progress && (t.status = i.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && Pt(t);
    }
  }
  const n = Jn(e, t);
  f.session = n.session, f.pack = n.pack, f.progress = n.progress, f.audit = n.audit, f.subLine = dl(e, n.progress), f.tick++;
}
function Al() {
  if (f.session)
    return il(f.session, f.progress?.rolesFromChat);
}
function qn() {
  for (const e of yd) jt(e, "", 0, !1);
}
let un = -1;
function _f(e) {
  const t = ll(e), n = gt(), { pack: s, progress: i, audit: r } = Jn(t, n), o = n ? il(n, i?.rolesFromChat) : void 0, l = bi() && !!i, a = l ? fs(t, i.entryIndex) : null, A = s ? zd(s, i, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: i?.panel?.limit,
    audit: r ?? void 0,
    subNext: l ? Vd(t, i.entryIndex) : void 0,
    stateText: a ? Zo(s, a.state) : void 0
  }) : vn;
  qn();
  const u = f.settings.depths;
  A.token && jt(Do, A.token, u.token, !0), A.progress && jt(jo, A.progress, u.progress, !1), A.turn && jt(Bo, A.turn, u.turn, !1), A.state && jt(Lo, A.state, u.progress, !1);
  const h = mt();
  let m = mf(t);
  if (h.fix) {
    const x = qd(h.fix);
    x && (m = m ? `${m}
${x}` : x);
  }
  m && jt(Vo, m, u.ledger, !1), f.lastInjection = A, un = t.length, mi("注入", e, A);
}
const qs = /* @__PURE__ */ new Set();
async function kf() {
  const e = se(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = dd(n.mes);
  if (!s) return;
  const i = gt();
  if (!i || i.status !== "active" || i.manual.some((A) => A.kind === "skip" && A.atIndex === t)) return;
  const r = `${ds()}:${t}:${n.mes}`;
  if (qs.has(r)) return;
  qs.add(r);
  const { pack: o, progress: l } = Jn(e, i);
  if (!o || !l || l.ended) return;
  const a = fd(o, l.phase, l.round, s);
  a && await Ke(`是否跳到${s}？（${a.label}）`) && (i.manual.push({ kind: "skip", atIndex: t, targetPhase: a.phase, targetRound: a.round }), Pt(i));
}
async function zf(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      qn();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await kf(), await Of(s), _f(s);
  } catch (i) {
    console.error("[rlzc] 拦截器出错", i), qn();
  }
}
const Qs = /* @__PURE__ */ new Set();
function xi() {
  const e = gt();
  if (!e || e.status !== "ended") return 0;
  const t = f.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
async function al(e) {
  const { index: t, info: n } = e, s = `${ds()}:${t}:${n.name}`;
  if (Qs.has(s)) return;
  Qs.add(s);
  const i = e.pack ? `检测到进入《${e.pack.name}》，是否启用？` : `检测到进入《${n.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!await Ke(i)) {
    wf(hi(t, n.name));
    return;
  }
  const r = ps(se(), t, f.packs);
  if (!r || r.info.name !== n.name) {
    Ie("warning", "入场消息已变化，未启用。");
    return;
  }
  const o = { ...n };
  e.pack || (o.rounds = $o(n.limit, Co(n), f.settings.genericCaps).rounds), ul(e.pack ?? Mo(o, f.settings.genericCaps), t, o);
}
function cl() {
  const e = lf(se(), gt(), ms(), f.packs, xi());
  e && al(e);
}
function $f(e) {
  st();
  const t = se(), n = xi();
  let s = -1;
  for (let i = n; i < t.length; i++) if (He(t[i])) {
    s = i;
    break;
  }
  e === s && cl();
}
function ul(e, t, n) {
  const i = se()[t], r = ef(e, t, n);
  i.extra = i.extra ?? {}, i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: r.id }, Pt(r), st(), f.progress && (i.extra.rlzc.injected = zn(f.progress.perMessage[t]?.events ?? [])), ht(), Ie("success", `已进入副本《${e.name}》。`);
}
async function Sf(e) {
  const t = f.packs.find((r) => r.id === e);
  if (!t) return;
  const n = se();
  let s = n.length - 1;
  for (; s >= 0 && !He(n[s]); ) s--;
  if (s < 0) {
    Ie("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  gt()?.status === "active" && !await Ke("当前已有进行中的副本，确定要替换吗？") || await Ke(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && ul(t, s, To(n[s].mes) ?? { name: t.name });
}
function gs(e) {
  gi((t) => t.manual.push(e));
}
function xs() {
  return se().length - 1;
}
async function ur() {
  const e = f.progress;
  if (!(!e || e.ended || !f.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Ie("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ke(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (gs({ kind: "skip", atIndex: xs(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Ie("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function dr() {
  !f.session || f.progress?.ended || await Ke("确定要手动结束当前副本吗？") && gs({ kind: "end", atIndex: xs() });
}
function Ef(e) {
  gs({ kind: "setPhase", atIndex: xs(), phase: e });
}
function Cf(e) {
  gs({ kind: "setRound", atIndex: xs(), round: e });
}
function Mf(e) {
  gi((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function If(e) {
  gi((t) => t.manual.splice(e, 1));
}
async function fr() {
  f.session && await Ke("确定要删除当前副本会话吗？（不会改动聊天记录）") && (Pt(null), st());
}
function bi() {
  return f.settings.subApi.source !== "off";
}
function Tf() {
  const e = f.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function Pf(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function dl(e, t) {
  if (!bi() || !t || t.ended) return "";
  if (f.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const i = fs(e, t.entryIndex);
  return i && t.perMessage[i.index] ? `副本记录：已更新（第${t.perMessage[i.index].round}轮）` : "副本记录：尚未整理";
}
let Dn = null;
const vi = /* @__PURE__ */ new Set();
function yi(e) {
  return jd(ds(), e, se()[e]);
}
function pr(e) {
  f.subBusy = e, f.subLine = dl(se(), f.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && f.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function fl(e, t, n) {
  if (yi(e) !== t) return;
  const s = se()[e];
  s?.extra?.rlzc && (s.extra.rlzc = zn({ ...s.extra.rlzc, sub: n }), ht(), st());
}
function Ff(e, t) {
  const n = se(), s = f.progress, i = f.pack, r = n[e], o = s?.perMessage[e];
  if (!i || !s || !o || !r) return;
  const l = Al(), a = (g) => ({ ...g, text: Kn(g.text, i, l), if: g.if ? Kn(g.if, i, l) : void 0 }), A = Rd(i, r.extra?.rlzc?.injected ?? []).map(a), u = (s.next?.events ?? []).filter((g) => g.if).map(a);
  if (!Bd({
    enabled: bi(),
    active: !s.ended && f.session?.status === "active",
    type: t,
    saveMode: f.settings.subApi.saveMode,
    hasEvents: A.length > 0,
    hasNextConditional: u.length > 0
  })) return;
  const m = yi(e);
  if (vi.has(m)) return;
  const x = i.phases.find((g) => g.id === o.phase), $ = fs(n.slice(0, e), s.entryIndex), S = Nd({
    pack: i,
    phaseName: x?.name ?? o.phase,
    round: o.round,
    prevState: $?.state ?? null,
    events: A,
    nextConditional: u,
    text: String(r.mes ?? "")
  }), T = ue().substituteParams, w = T ? { system: T(S.system), user: T(S.user) } : S, b = Nf(e, m, o.round, w);
  Dn = { key: m, index: e, promise: b }, b.finally(() => {
    Dn?.key === m && (Dn = null);
  });
}
async function Nf(e, t, n, s) {
  pr(!0);
  try {
    let i = 2;
    for (; ; ) {
      const r = Tf();
      if (!r) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await Ld((a) => Gd(r, a), s, i);
        fl(e, t, { ...l, ms: Date.now() - o, via: Pf(r), at: (/* @__PURE__ */ new Date()).toISOString() }), vi.add(t);
        return;
      } catch (l) {
        if (yi(e) !== t) return;
        const a = Ho(l), A = String(l?.message ?? l).slice(0, 200);
        if (mi("副本事件检测失败", a, l), !f.settings.subApi.wait) {
          Ie("warning", `第${n}轮事件检测失败（${a}），已沿用上一轮状态。`), Rs(e, t, a);
          return;
        }
        if (await Rf(n, a, A) === "skip") {
          Rs(e, t, a);
          return;
        }
        i = 0;
      }
    }
  } catch (i) {
    Ie("error", String(i?.message ?? i)), Rs(e, t, "其他");
  } finally {
    pr(!1);
  }
}
function Rs(e, t, n) {
  vi.add(t), fl(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function Rf(e, t, n) {
  const s = ue();
  if (!s.Popup || !s.POPUP_TYPE)
    return window.confirm(`第${e}轮事件检测失败（${t}）。重试吗？取消则这轮先跳过。`) ? "retry" : "skip";
  const i = f.settings.subApi, r = document.createElement("div"), o = document.createElement("h3");
  o.textContent = `第${e}轮事件检测失败`;
  const l = document.createElement("p");
  l.textContent = `原因：${t}`;
  const a = document.createElement("small");
  a.textContent = n, a.style.opacity = "0.7";
  const A = document.createElement("div");
  A.style.cssText = "display:none;margin-top:10px;";
  const u = document.createElement("label");
  u.textContent = "换成：";
  const h = document.createElement("select");
  h.className = "text_pole";
  const m = [{ value: "", text: "请选择…" }];
  for (const S of i.presets) i.source === "preset" && S.id === i.presetId || m.push({ value: `preset:${S.id}`, text: `自设API：${S.name}` });
  i.source !== "main" && m.push({ value: "main", text: "跟随主API" });
  for (const S of m) {
    const T = document.createElement("option");
    T.value = S.value, T.textContent = S.text, h.append(T);
  }
  u.append(h), A.append(u), r.append(o, l, a, A);
  let x;
  h.addEventListener("change", () => {
    const S = h.value;
    S && (S === "main" ? i.source = "main" : (i.source = "preset", i.presetId = S.slice(7)), ze(), x.complete(s.POPUP_RESULT.CUSTOM1));
  }), x = new s.Popup(r, s.POPUP_TYPE.TEXT, "", {
    okButton: "重试",
    cancelButton: "这轮先跳过",
    customButtons: [
      {
        text: "换一个接口",
        action: () => {
          A.style.display = "", h.focus();
        }
      }
    ]
  });
  const $ = await x.show();
  return $ === s.POPUP_RESULT.AFFIRMATIVE || $ === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function Of(e) {
  const t = Dn;
  if (!(!t || !f.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= ll(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function Df(e, t) {
  const n = se(), s = n[e];
  if (!He(s)) return;
  const i = gt();
  if (!i || i.status === "ended") {
    if (ps(n, e, f.packs)) {
      const A = of(n, f.packs, xi(), e, ms());
      A && al(A);
    }
    return;
  }
  if (t === "first_message") return;
  const r = Fo(s.mes);
  r && (i.roles = { ...i.roles ?? {}, ...r }), Pt(i), st();
  const o = f.progress?.perMessage[e];
  if (o && f.pack) {
    const A = f.pack.phases.find(($) => $.id === o.phase), u = {
      phase: A?.name ?? o.phase,
      round: o.round,
      injected: un === e ? f.lastInjection.injected : o.events
    }, h = f.pack.time;
    h.type === "clock" && A?.clock && !A.night && !A.frozen && (u.clock = Ro(h.dayStart, h.minutesPerRound, o.round));
    const m = un === e ? f.lastInjection.limit : o.limit?.text ? { text: o.limit.text, minutes: o.limit.minutes, total: o.limit.total } : void 0;
    m && (u.limit = m);
    const x = s.extra?.rlzc?.entry;
    x && (u.entry = x), un === e && f.lastInjection.skipped?.length && (u.skippedEvents = f.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (u.sub = s.extra.rlzc.sub), s.extra = s.extra ?? {}, s.extra.rlzc = zn(u), ht(), st(), Ff(e, t);
  }
  const l = pi(s.mes);
  l && Ie("info", `副本结算：${l.result ?? "—"}${l.rating ? `，评价 ${l.rating}` : ""}`), gf(e), jf(e);
  const a = mt();
  a.fix && $n({ ...a, fix: void 0 });
}
function jf(e) {
  const t = se(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const i = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!i) return;
  const r = sl(i[1]);
  if (r === null) return;
  const o = Ht(t), l = Yt(o.value, hs(t));
  r !== l && (mi(`积分核对不符（楼层${e}）：状态栏 ${r}，账本 ${l}`), n.extra?.rlzc && (n.extra.rlzc = zn({ ...n.extra.rlzc, ledgerMismatch: { status: r, ledger: l } }), ht()));
}
function hr() {
  qs.clear(), Qs.clear(), un = -1, f.chatId = ds(), f.debugUnlocked = !1, f.lastInjection = vn, qn(), f.ledger = hs(se()), st(), cl(), setTimeout(() => wi(), 50);
}
function Os() {
  st();
}
function pl() {
  return f.settings.panelDisplay === "statusbar" ? Tt.filter((e) => e !== "副本") : Tt;
}
function Ds(e) {
  Wo(e, pl());
}
function wi(e = !1) {
  Md(pl(), e);
}
function Bf(e) {
  f.settings.panelDisplay !== e && (f.settings.panelDisplay = e, ze(), wi(!0));
}
const Lf = { class: "rlzc-ball-mark" }, js = 44, Vf = /* @__PURE__ */ Ze({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ pe({ x: 0, y: 0 });
    let n = null;
    function s(u, h) {
      const m = window.innerWidth - js - 4, x = window.innerHeight - js - 4;
      return { x: Math.min(Math.max(4, u), m), y: Math.min(Math.max(4, h), x) };
    }
    function i() {
      const u = f.settings.ball;
      t.value = s(u.x ?? window.innerWidth - js - 12, u.y ?? Math.round(window.innerHeight * 0.35));
    }
    function r(u) {
      u.currentTarget.setPointerCapture(u.pointerId), n = { id: u.pointerId, dx: u.clientX - t.value.x, dy: u.clientY - t.value.y, moved: !1, sx: u.clientX, sy: u.clientY };
    }
    function o(u) {
      !n || n.id !== u.pointerId || (Math.abs(u.clientX - n.sx) + Math.abs(u.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(u.clientX - n.dx, u.clientY - n.dy)));
    }
    function l(u) {
      if (!n || n.id !== u.pointerId) return;
      const h = n.moved;
      n = null, h ? (f.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, ze()) : f.panelOpen = !f.panelOpen;
    }
    const a = W(() => !!f.session && !f.progress?.ended), A = W(() => !!f.progress?.warn);
    return ls(() => f.settings.ball, i, { deep: !0 }), bA(() => {
      i(), window.addEventListener("resize", i);
    }), vA(() => window.removeEventListener("resize", i)), (u, h) => (k(), M("button", {
      class: le(["rlzc-ball", { "is-active": a.value, "is-warn": A.value }]),
      style: ss({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: r,
      onPointermove: o,
      onPointerup: l,
      onPointercancel: l
    }, [
      c("span", Lf, O(a.value ? D(f).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
});
function Uf(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function en(e) {
  return Uf(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Wf(e) {
  const t = [];
  let n = null, s = [];
  const i = () => {
    s.length && t.push(`<p>${s.map(en).join("<br>")}</p>`), s = [];
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
      const m = Math.min(a[1].length + 2, 6);
      t.push(`<h${m}>${en(a[2])}</h${m}>`);
      continue;
    }
    const A = /^\s*[-*]\s+(.*)$/.exec(l), u = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (A || u) {
      i();
      const m = A ? "ul" : "ol", x = A ? A[1] : u[2];
      n !== m ? (r(), n = m, t.push(m === "ol" ? `<ol start="${u[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(en(x));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${en(l.trim())}`);
      continue;
    }
    const h = /^>\s?(.*)$/.exec(l);
    if (h) {
      i(), r(), t.push(`<blockquote>${en(h[1])}</blockquote>`);
      continue;
    }
    r(), s.push(l);
  }
  return i(), r(), t.join("");
}
const Gf = {
  key: 0,
  class: "rlzc-docs"
}, Yf = { class: "rlzc-subtabs" }, Hf = ["onClick"], Kf = { class: "rlzc-md" }, Zf = ["innerHTML"], Jf = ["src", "alt"], qf = {
  key: 2,
  class: "rlzc-note"
}, mr = /* @__PURE__ */ Ze({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ pe(0);
    ls(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = W(() => t.pack.docs?.[n.value]), i = W(() => s.value?.md ? Wf(s.value.md) : ""), r = W(() => s.value?.image ? id(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (k(), M("section", Gf, [
      c("div", Yf, [
        (k(!0), M(q, null, me(e.pack.docs, (a, A) => (k(), M("button", {
          key: A,
          class: le({ on: n.value === A }),
          onClick: (u) => n.value = A
        }, O(a.title), 11, Hf))), 128))
      ]),
      c("article", Kf, [
        i.value ? (k(), M("div", {
          key: 0,
          innerHTML: i.value
        }, null, 8, Zf)) : Y("", !0),
        r.value ? (k(), M("img", {
          key: 1,
          src: r.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, Jf)) : s.value?.image && !r.value ? (k(), M("p", qf, "图片无法加载：" + O(s.value.image), 1)) : Y("", !0)
      ])
    ])) : Y("", !0);
  }
}), Qf = {
  key: 0,
  class: "rlzc-ledger-summary"
}, Xf = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, gr = /* @__PURE__ */ Ze({
  __name: "LedgerSummary",
  setup(e) {
    const t = W(() => se()), n = W(() => Ht(t.value)), s = W(() => Yt(n.value.value, f.ledger)), i = W(() => f.pack?.level ?? "D"), r = W(() => Nt[i.value]), o = W(() => kn(n.value.value, f.ledger, r.value)), l = W(() => f.ledger.length > 0 || n.value.source !== "默认值");
    return (a, A) => l.value ? (k(), M("div", Qf, [
      c("span", {
        class: le(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + O(s.value >= 0 ? "+" : "") + O(s.value), 3),
      o.value ? (k(), M("span", Xf, "待清算")) : Y("", !0)
    ])) : Y("", !0);
  }
}), ep = { class: "rlzc-system" }, tp = { class: "rlzc-card rlzc-hero" }, np = { class: "rlzc-hero-top" }, sp = { class: "rlzc-level" }, ip = {
  key: 0,
  class: "rlzc-chip"
}, rp = {
  key: 0,
  class: "rlzc-goal"
}, op = { class: "rlzc-grid" }, lp = {
  key: 0,
  class: "rlzc-stat"
}, Ap = {
  key: 1,
  class: "rlzc-stat"
}, ap = {
  key: 2,
  class: "rlzc-stat"
}, cp = {
  key: 3,
  class: "rlzc-stat"
}, up = {
  key: 0,
  class: "rlzc-subline"
}, dp = {
  key: 1,
  class: "rlzc-note"
}, fp = {
  key: 2,
  class: "rlzc-card"
}, pp = { class: "rlzc-kv" }, hp = { class: "rlzc-kv" }, mp = {
  key: 3,
  class: "rlzc-note"
}, gp = {
  key: 4,
  class: "rlzc-card"
}, xp = {
  key: 0,
  class: "rlzc-kv"
}, bp = { class: "rlzc-mono" }, vp = {
  key: 1,
  class: "rlzc-tasks"
}, yp = {
  key: 2,
  class: "rlzc-ps"
}, wp = { class: "rlzc-actions" }, _p = ["disabled"], kp = ["disabled"], zp = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, $p = {
  key: 2,
  class: "rlzc-card"
}, Sp = { class: "rlzc-row" }, Ep = ["value"], Cp = ["disabled"], Mp = /* @__PURE__ */ Ze({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ pe(""), n = W(() => !!f.session && !!f.pack), s = W(() => f.progress), i = W(() => n.value && !!s.value && !s.value.ended), r = W(() => f.packs.find((m) => m.id === t.value) ?? null), o = W(() => !!f.pack?.phases.length), l = W(() => f.settings.panelDisplay !== "statusbar"), a = W(() => {
      const m = s.value;
      return m ? o.value ? `${m.warn ? "⚠️ " : ""}${m.round}/${m.phase.cap}` : `第${m.round}轮` : "";
    }), A = W(() => {
      const m = s.value;
      return m ? m.limit?.text ? m.limit.text : m.panel?.limit || f.session?.briefing?.limit || "—" : "";
    }), u = W(() => {
      const m = s.value;
      return !!m && !m.ended && o.value && m.phase.cap > 0 && m.nextRound < m.phase.cap;
    });
    async function h() {
      t.value && (await Sf(t.value), t.value = "");
    }
    return (m, x) => (k(), M("div", ep, [
      n.value && s.value ? (k(), M(q, { key: 0 }, [
        c("div", tp, [
          c("div", np, [
            c("span", sp, O(D(f).pack?.rest ? "—" : D(f).pack.level), 1),
            c("h3", null, O(D(f).pack.name), 1),
            s.value.ended ? (k(), M("span", ip, "已结束")) : Y("", !0)
          ]),
          D(f).session?.briefing?.goal ? (k(), M("p", rp, "目标：" + O(D(f).session.briefing.goal), 1)) : Y("", !0)
        ]),
        c("div", op, [
          o.value ? (k(), M("div", lp, [
            x[3] || (x[3] = c("span", null, "阶段", -1)),
            c("b", null, O(s.value.phase.name), 1)
          ])) : Y("", !0),
          c("div", {
            class: le(["rlzc-stat", { warn: s.value.warn }])
          }, [
            x[4] || (x[4] = c("span", null, "轮次", -1)),
            c("b", null, O(a.value), 1)
          ], 2),
          s.value.currentClock ? (k(), M("div", Ap, [
            x[5] || (x[5] = c("span", null, "钟时", -1)),
            c("b", null, O(s.value.currentClock), 1)
          ])) : Y("", !0),
          s.value.roundsLeft ? (k(), M("div", ap, [
            x[6] || (x[6] = c("span", null, "最多剩余轮次", -1)),
            c("b", null, O(s.value.roundsLeft.x) + "/" + O(s.value.roundsLeft.y), 1)
          ])) : Y("", !0),
          l.value ? (k(), M("div", cp, [
            x[7] || (x[7] = c("span", null, "剩余时间", -1)),
            c("b", null, O(A.value), 1)
          ])) : Y("", !0),
          Ce(gr)
        ]),
        D(f).subLine ? (k(), M("p", up, O(D(f).subLine), 1)) : Y("", !0),
        s.value.skipGoal ? (k(), M("div", dp, "快进中：目标 " + O(D(f).pack.phases.find(($) => $.id === s.value.skipGoal.phase)?.name) + " 第" + O(s.value.skipGoal.round) + "轮", 1)) : Y("", !0),
        s.value.ended && s.value.settlement ? (k(), M("div", fp, [
          c("div", pp, [
            x[8] || (x[8] = c("span", null, "结果", -1)),
            c("b", null, O(s.value.settlement.result ?? "—"), 1)
          ]),
          c("div", hp, [
            x[9] || (x[9] = c("span", null, "评价", -1)),
            c("b", null, O(s.value.settlement.rating ?? "—"), 1)
          ])
        ])) : s.value.ended ? (k(), M("div", mp, "副本已手动结束。")) : Y("", !0),
        l.value && s.value.panel ? (k(), M("div", gp, [
          s.value.panel.progressBar ? (k(), M("div", xp, [
            x[10] || (x[10] = c("span", null, "进度", -1)),
            c("b", bp, O(s.value.panel.progressBar), 1)
          ])) : Y("", !0),
          s.value.panel.tasks.length ? (k(), M("div", vp, [
            x[11] || (x[11] = c("span", null, "任务", -1)),
            c("ul", null, [
              (k(!0), M(q, null, me(s.value.panel.tasks, ($, S) => (k(), M("li", { key: S }, O($), 1))), 128))
            ])
          ])) : Y("", !0),
          s.value.panel.ps ? (k(), M("div", yp, "ps：" + O(s.value.panel.ps), 1)) : Y("", !0)
        ])) : Y("", !0),
        c("div", wp, [
          c("button", {
            class: "rlzc-btn",
            disabled: !u.value,
            onClick: x[0] || (x[0] = //@ts-ignore
            (...$) => D(ur) && D(ur)(...$))
          }, "跳过（到本阶段结束）", 8, _p),
          c("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: x[1] || (x[1] = //@ts-ignore
            (...$) => D(dr) && D(dr)(...$))
          }, "手动结束副本", 8, kp)
        ]),
        i.value && D(f).pack.docs?.length ? (k(), tt(mr, {
          key: 5,
          pack: D(f).pack
        }, null, 8, ["pack"])) : Y("", !0)
      ], 64)) : (k(), M("div", zp, [
        x[12] || (x[12] = c("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        Ce(gr)
      ])),
      i.value ? Y("", !0) : (k(), M("div", $p, [
        x[14] || (x[14] = c("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        c("div", Sp, [
          ot(c("select", {
            "onUpdate:modelValue": x[2] || (x[2] = ($) => t.value = $),
            class: "rlzc-input"
          }, [
            x[13] || (x[13] = c("option", { value: "" }, "选择副本…", -1)),
            (k(!0), M(q, null, me(D(f).packs, ($) => (k(), M("option", {
              key: $.id,
              value: $.id
            }, O($.level) + "｜" + O($.name), 9, Ep))), 128))
          ], 512), [
            [_o, t.value]
          ]),
          c("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: h
          }, "进入", 8, Cp)
        ])
      ])),
      !i.value && r.value?.docs?.length ? (k(), tt(mr, {
        key: 3,
        pack: r.value
      }, null, 8, ["pack"])) : Y("", !0)
    ]));
  }
}), Ip = { class: "rlzc-ledger" }, Tp = { class: "rlzc-card rlzc-ledger-hero-card" }, Pp = { class: "rlzc-ledger-hero-cols" }, Fp = { class: "rlzc-ledger-hero-col" }, Np = { class: "rlzc-ledger-hero-col-val" }, Rp = { class: "rlzc-ledger-hero-col" }, Op = { class: "rlzc-ledger-hero-col-val" }, Dp = { class: "rlzc-ledger-hero-col" }, jp = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, Bp = { class: "rlzc-card" }, Lp = {
  key: 0,
  class: "rlzc-ledger-list"
}, Vp = { class: "rlzc-ledger-item-left" }, Up = { class: "rlzc-ledger-item-src" }, Wp = { class: "rlzc-ledger-item-time" }, Gp = {
  key: 1,
  class: "rlzc-hint"
}, Yp = /* @__PURE__ */ Ze({
  __name: "LedgerTab",
  setup(e) {
    const t = W(() => se()), n = W(() => Ht(t.value)), s = W(() => f.ledger), i = W(() => Yt(n.value.value, s.value)), r = W(() => f.pack?.level ?? "D"), o = W(() => Nt[r.value]), l = W(() => kn(n.value.value, s.value, o.value)), a = W(() => Math.max(0, o.value - i.value)), A = W(() => n.value.source === "默认值");
    function u(x) {
      return new Intl.NumberFormat("zh-CN").format(x);
    }
    function h(x) {
      return (x >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(x);
    }
    function m(x) {
      try {
        const $ = new Date(x), S = String($.getMonth() + 1).padStart(2, "0"), T = String($.getDate()).padStart(2, "0"), w = String($.getHours()).padStart(2, "0"), b = String($.getMinutes()).padStart(2, "0");
        return `${S}-${T} ${w}:${b}`;
      } catch {
        return x;
      }
    }
    return (x, $) => (k(), M("div", Ip, [
      c("div", Tp, [
        $[3] || ($[3] = c("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        c("b", {
          class: le(["rlzc-ledger-hero-num", { negative: i.value < 0 }])
        }, O(u(i.value)), 3),
        $[4] || ($[4] = c("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        c("div", Pp, [
          c("div", Fp, [
            $[0] || ($[0] = c("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            c("span", Np, O(r.value), 1)
          ]),
          c("div", Rp, [
            $[1] || ($[1] = c("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            c("span", Op, O(u(o.value)), 1)
          ]),
          c("div", Dp, [
            $[2] || ($[2] = c("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            c("span", {
              class: le(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": l.value }])
            }, O(l.value ? `距线 ${u(a.value)}` : "无"), 3)
          ])
        ]),
        A.value ? (k(), M("p", jp, "初始积分按 1000 计，可在设置页修改")) : Y("", !0)
      ]),
      c("div", Bp, [
        $[5] || ($[5] = c("h4", null, "流水", -1)),
        s.value.length ? (k(), M("ul", Lp, [
          (k(!0), M(q, null, me([...s.value].reverse(), (S) => (k(), M("li", {
            key: `${S.mesIndex}-${S.delta}-${S.at}`,
            class: "rlzc-ledger-item"
          }, [
            c("div", Vp, [
              c("span", Up, O(S.source), 1),
              c("span", Wp, O(m(S.at)), 1)
            ]),
            c("span", {
              class: le(["rlzc-ledger-item-delta", S.delta >= 0 ? "pos" : "neg"])
            }, O(h(S.delta)), 3)
          ]))), 128))
        ])) : (k(), M("p", Gp, "还没有收支记录。"))
      ])
    ]));
  }
}), Hp = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, Kp = ["aria-expanded"], Zp = ["data-kind"], Jp = {
  key: 0,
  class: "rlzc-collapse-body"
}, qp = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, Qp = {
  key: 0,
  class: "rlzc-preset-area"
}, Xp = { class: "rlzc-preset-row" }, eh = ["value"], th = {
  key: 0,
  value: ""
}, nh = ["value"], sh = ["disabled"], ih = ["disabled"], rh = { class: "rlzc-stacked-field" }, oh = ["value"], lh = { class: "rlzc-stacked-field" }, Ah = { class: "rlzc-key-wrap" }, ah = ["type", "value"], ch = ["aria-label"], uh = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, dh = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, fh = { class: "rlzc-stacked-field" }, ph = ["value"], hh = ["value"], mh = ["value"], gh = ["value"], xh = { class: "rlzc-conn-row" }, bh = ["data-kind"], vh = ["disabled"], yh = {
  key: 1,
  class: "rlzc-option-list"
}, wh = { class: "rlzc-option-row" }, _h = ["aria-checked"], kh = { class: "rlzc-option-row" }, zh = ["aria-checked"], $h = { class: "rlzc-option-row rlzc-option-row-timeout" }, Sh = { class: "rlzc-timeout-wrap" }, Eh = ["value"], Ch = /* @__PURE__ */ Ze({
  __name: "SubApiCard",
  setup(e) {
    const t = W(() => f.settings.subApi), n = W(() => t.value.presets.find((G) => G.id === t.value.presetId) ?? null), s = /* @__PURE__ */ pe([]), i = /* @__PURE__ */ pe(!1), r = /* @__PURE__ */ pe(!1), o = /* @__PURE__ */ pe("none"), l = /* @__PURE__ */ pe(""), a = W(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : o.value === "ok" ? { kind: "on", text: "已连接" } : o.value === "fail" ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" }), A = W(() => f.settings.cardCollapsed.subApi);
    function u() {
      f.settings.cardCollapsed.subApi = !f.settings.cardCollapsed.subApi, m();
    }
    const h = W(() => o.value === "ok" ? `已连接 · 共 ${s.value.length} 个模型` : o.value === "fail" ? `连接失败：${l.value}` : "未测试");
    function m() {
      ze();
    }
    function x(G) {
      t.value.source = G, o.value = "none", m();
    }
    function $() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function S() {
      const G = (await Ar("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!G) return;
      const I = { id: $(), name: G, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, I], t.value.presetId = I.id, s.value = [], o.value = "none", m();
    }
    async function T() {
      if (!n.value) return;
      const G = (await Ar("改名为：", n.value.name))?.trim();
      G && (n.value.name = G, m());
    }
    async function w() {
      n.value && await Ke(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((G) => G.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", s.value = [], o.value = "none", m());
    }
    function b(G) {
      t.value.presetId = G.target.value, s.value = [], o.value = "none", m();
    }
    function g(G, I) {
      n.value && (n.value[G] = I.target.value.trim(), m());
    }
    async function P() {
      if (n.value) {
        r.value = !0, o.value = "none", l.value = "";
        try {
          const G = await Yd(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          s.value = G.models, !n.value.model && G.models.length && (n.value.model = G.models[0], m()), o.value = "ok";
        } catch (G) {
          o.value = "fail", l.value = Ho(G), s.value = await tl(n.value).catch(() => []);
        } finally {
          r.value = !1;
        }
      }
    }
    function Z(G) {
      const I = Math.floor(Number(G.target.value));
      if (!Number.isFinite(I) || I < 5) {
        Ie("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = I, m();
    }
    function Q(G, I) {
      t.value[G] = I, m();
    }
    return (G, I) => (k(), M("div", Hp, [
      c("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !A.value,
        onClick: u
      }, [
        I[9] || (I[9] = c("h4", null, "副本事件检测", -1)),
        c("span", {
          class: "rlzc-dot",
          "data-kind": a.value.kind
        }, O(a.value.text), 9, Zp),
        c("span", {
          class: le(["rlzc-collapse-arrow", { open: !A.value }])
        }, "▸", 2)
      ], 8, Kp),
      A.value ? Y("", !0) : (k(), M("div", Jp, [
        I[24] || (I[24] = c("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        c("div", qp, [
          c("button", {
            class: le({ on: t.value.source === "off" }),
            onClick: I[0] || (I[0] = (y) => x("off"))
          }, "关闭", 2),
          c("button", {
            class: le({ on: t.value.source === "main" }),
            onClick: I[1] || (I[1] = (y) => x("main"))
          }, "跟随主API", 2),
          c("button", {
            class: le({ on: t.value.source === "preset" }),
            onClick: I[2] || (I[2] = (y) => x("preset"))
          }, "自设API", 2)
        ]),
        t.value.source === "preset" ? (k(), M("div", Qp, [
          c("div", Xp, [
            c("select", {
              class: "rlzc-input",
              value: t.value.presetId,
              onChange: b
            }, [
              t.value.presets.length ? Y("", !0) : (k(), M("option", th, "还没有保存的接口")),
              (k(!0), M(q, null, me(t.value.presets, (y) => (k(), M("option", {
                key: y.id,
                value: y.id
              }, O(y.name), 9, nh))), 128))
            ], 40, eh),
            c("button", {
              class: "rlzc-icon-btn",
              "aria-label": "新建接口",
              type: "button",
              onClick: S
            }, [...I[10] || (I[10] = [
              c("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "aria-hidden": "true"
              }, [
                c("path", { d: "M8 3v10M3 8h10" })
              ], -1)
            ])]),
            c("button", {
              class: "rlzc-icon-btn",
              "aria-label": "改名",
              type: "button",
              disabled: !n.value,
              onClick: T
            }, [...I[11] || (I[11] = [
              c("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "aria-hidden": "true"
              }, [
                c("path", { d: "M11 2L14 5 5 14H2v-3L11 2z" })
              ], -1)
            ])], 8, sh),
            c("button", {
              class: "rlzc-icon-btn rlzc-danger",
              "aria-label": "删除接口",
              type: "button",
              disabled: !n.value,
              onClick: w
            }, [...I[12] || (I[12] = [
              c("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "aria-hidden": "true"
              }, [
                c("path", { d: "M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10" })
              ], -1)
            ])], 8, ih)
          ]),
          n.value ? (k(), M(q, { key: 0 }, [
            c("div", rh, [
              I[13] || (I[13] = c("label", { class: "rlzc-label" }, "地址", -1)),
              c("input", {
                class: "rlzc-input",
                value: n.value.url,
                placeholder: "https://…/v1",
                onChange: I[3] || (I[3] = (y) => g("url", y))
              }, null, 40, oh)
            ]),
            c("div", lh, [
              I[16] || (I[16] = c("label", { class: "rlzc-label" }, "密钥", -1)),
              c("div", Ah, [
                c("input", {
                  class: "rlzc-input",
                  type: i.value ? "text" : "password",
                  value: n.value.key,
                  autocomplete: "off",
                  onChange: I[4] || (I[4] = (y) => g("key", y))
                }, null, 40, ah),
                c("button", {
                  class: "rlzc-eye-btn",
                  type: "button",
                  "aria-label": i.value ? "隐藏密钥" : "显示密钥",
                  onClick: I[5] || (I[5] = (y) => i.value = !i.value)
                }, [
                  i.value ? (k(), M("svg", uh, [...I[14] || (I[14] = [
                    c("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    c("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1),
                    c("path", { d: "M2 2l12 12" }, null, -1)
                  ])])) : (k(), M("svg", dh, [...I[15] || (I[15] = [
                    c("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    c("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1)
                  ])]))
                ], 8, ch)
              ])
            ]),
            c("div", fh, [
              I[17] || (I[17] = c("label", { class: "rlzc-label" }, "模型", -1)),
              s.value.length ? (k(), M("select", {
                key: 0,
                class: "rlzc-input",
                value: n.value.model,
                onChange: I[6] || (I[6] = (y) => g("model", y))
              }, [
                s.value.includes(n.value.model) ? Y("", !0) : (k(), M("option", {
                  key: 0,
                  value: n.value.model
                }, O(n.value.model || "请选择…"), 9, hh)),
                (k(!0), M(q, null, me(s.value, (y) => (k(), M("option", {
                  key: y,
                  value: y
                }, O(y), 9, mh))), 128))
              ], 40, ph)) : (k(), M("input", {
                key: 1,
                class: "rlzc-input rlzc-input-disabled",
                value: n.value.model ? n.value.model : "先测试连接",
                readonly: "",
                tabindex: "-1"
              }, null, 8, gh))
            ]),
            c("div", xh, [
              c("span", {
                class: "rlzc-dot",
                "data-kind": o.value === "ok" ? "on" : o.value === "fail" ? "warn" : "off"
              }, O(h.value), 9, bh),
              c("button", {
                class: "rlzc-btn ghost",
                disabled: r.value || !n.value.url,
                onClick: P
              }, "测试连接", 8, vh)
            ])
          ], 64)) : Y("", !0)
        ])) : Y("", !0),
        t.value.source !== "off" ? (k(), M("div", yh, [
          c("div", wh, [
            I[19] || (I[19] = c("div", { class: "rlzc-option-label" }, [
              c("span", null, "省钱模式"),
              c("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            c("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: le(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: I[7] || (I[7] = (y) => Q("saveMode", !t.value.saveMode))
            }, [...I[18] || (I[18] = [
              c("span", null, null, -1)
            ])], 10, _h)
          ]),
          c("div", kh, [
            I[21] || (I[21] = c("div", { class: "rlzc-option-label" }, [
              c("span", null, "等检测完再写下一轮"),
              c("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            c("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: le(["rlzc-toggle", { on: t.value.wait }]),
              onClick: I[8] || (I[8] = (y) => Q("wait", !t.value.wait))
            }, [...I[20] || (I[20] = [
              c("span", null, null, -1)
            ])], 10, zh)
          ]),
          c("div", $h, [
            I[23] || (I[23] = c("span", null, "超时", -1)),
            c("div", Sh, [
              c("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: Z
              }, null, 40, Eh),
              I[22] || (I[22] = c("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : Y("", !0)
      ]))
    ]));
  }
}), Mh = { class: "rlzc-settings" }, Ih = { class: "rlzc-card" }, Th = ["value"], Ph = { class: "rlzc-card rlzc-collapsible" }, Fh = ["aria-expanded"], Nh = {
  key: 0,
  class: "rlzc-collapse-body"
}, Rh = { class: "rlzc-ledger-status" }, Oh = { class: "rlzc-row" }, Dh = ["placeholder"], jh = ["disabled"], Bh = { class: "rlzc-row" }, Lh = ["disabled"], Vh = { class: "rlzc-row" }, Uh = { class: "rlzc-seg-group" }, Wh = ["onClick"], Gh = ["disabled"], Yh = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, Hh = { class: "rlzc-card rlzc-collapsible" }, Kh = ["aria-expanded"], Zh = {
  key: 0,
  class: "rlzc-collapse-body"
}, Jh = { class: "rlzc-depth" }, qh = { class: "rlzc-field" }, Qh = ["value"], Xh = { class: "rlzc-field" }, em = ["value"], tm = { class: "rlzc-field" }, nm = ["value"], sm = { class: "rlzc-field" }, im = ["value"], rm = { class: "rlzc-card rlzc-collapsible" }, om = ["aria-expanded"], lm = {
  key: 0,
  class: "rlzc-collapse-body"
}, Am = ["value", "onChange"], am = { class: "rlzc-card" }, cm = {
  key: 0,
  class: "rlzc-list"
}, um = ["onClick"], dm = {
  key: 1,
  class: "rlzc-hint"
}, fm = {
  key: 2,
  class: "rlzc-errors"
}, pm = { class: "rlzc-card" }, hm = { class: "rlzc-check" }, mm = ["checked"], gm = { class: "rlzc-check" }, xm = ["checked"], bm = /* @__PURE__ */ Ze({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ pe([]), n = /* @__PURE__ */ pe(null), s = /* @__PURE__ */ pe(null), i = /* @__PURE__ */ pe(null), r = /* @__PURE__ */ pe(""), o = /* @__PURE__ */ pe(""), l = /* @__PURE__ */ pe(""), a = ["D", "C", "B", "A", "S"], A = W(() => Ht(se())), u = W(() => Yt(A.value.value, f.ledger)), h = W(() => f.pack?.level ?? "D"), m = W(() => Nt[h.value]), x = W(() => kn(A.value.value, f.ledger, m.value));
    function $() {
      s.value !== null && (vf(s.value), s.value = null);
    }
    function S() {
      i.value !== null && (bf(i.value, r.value || "手动"), i.value = null, r.value = "");
    }
    function T() {
      !o.value && !l.value || (yf(o.value || void 0, l.value || void 0), o.value = "", l.value = "", Ie("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function w(I, y) {
      const B = Math.max(0, Math.min(1e4, Math.floor(Number(y.target.value) || 0)));
      f.settings.depths[I] = B, ze();
    }
    async function b(I) {
      const y = I.target, B = y.files?.[0];
      y.value = "", B && (t.value = pf(await B.text()), t.value.length || Ie("success", `已导入副本包：${B.name}`));
    }
    async function g(I, y) {
      await Ke(`确定删除自定义副本包《${y}》吗？`) && hf(I);
    }
    function P(I, y) {
      const B = Math.floor(Number(y.target.value));
      !Number.isFinite(B) || B < 1 || (f.settings.genericCaps = { ...f.settings.genericCaps, [I]: B }, ze());
    }
    function Z(I) {
      Bf(I.target.value);
    }
    function Q(I, y) {
      f.settings[I] = y.target.checked, ze();
    }
    function G(I) {
      f.settings.cardCollapsed[I] = !f.settings.cardCollapsed[I], ze();
    }
    return (I, y) => (k(), M(q, null, [
      c("div", Mh, [
        c("div", Ih, [
          y[15] || (y[15] = c("h4", null, "副本信息显示位置", -1)),
          c("select", {
            class: "rlzc-input",
            value: D(f).settings.panelDisplay,
            onChange: Z
          }, [...y[14] || (y[14] = [
            c("option", { value: "panel" }, "扩展面板（默认）", -1),
            c("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, Th),
          y[16] || (y[16] = c("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        c("div", Ph, [
          c("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !D(f).settings.cardCollapsed.accountFix,
            onClick: y[0] || (y[0] = (B) => G("accountFix"))
          }, [
            y[17] || (y[17] = c("h4", null, "账户校正", -1)),
            c("span", {
              class: le(["rlzc-collapse-arrow", { open: !D(f).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, Fh),
          D(f).settings.cardCollapsed.accountFix ? Y("", !0) : (k(), M("div", Nh, [
            y[19] || (y[19] = c("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            c("div", Rh, [
              c("span", null, [
                y[18] || (y[18] = Be("当前余额：", -1)),
                c("b", null, O(u.value), 1)
              ]),
              c("span", null, O(x.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            y[20] || (y[20] = c("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            c("div", Oh, [
              ot(c("input", {
                "onUpdate:modelValue": y[1] || (y[1] = (B) => s.value = B),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${A.value.value}`
              }, null, 8, Dh), [
                [
                  Bt,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              c("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: $
              }, "保存", 8, jh)
            ]),
            y[21] || (y[21] = c("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            c("div", Bh, [
              ot(c("input", {
                "onUpdate:modelValue": y[2] || (y[2] = (B) => i.value = B),
                type: "number",
                class: "rlzc-input",
                placeholder: "金额（正/负）"
              }, null, 512), [
                [
                  Bt,
                  i.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              ot(c("input", {
                "onUpdate:modelValue": y[3] || (y[3] = (B) => r.value = B),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [Bt, r.value]
              ]),
              c("button", {
                class: "rlzc-btn small",
                disabled: i.value === null,
                onClick: S
              }, "追加", 8, Lh)
            ]),
            y[22] || (y[22] = c("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            y[23] || (y[23] = c("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            c("div", Vh, [
              c("div", Uh, [
                (k(), M(q, null, me(a, (B) => c("button", {
                  key: B,
                  class: le(["rlzc-seg", { active: o.value === B }]),
                  onClick: (we) => o.value = o.value === B ? "" : B
                }, O(B), 11, Wh)), 64))
              ]),
              ot(c("input", {
                "onUpdate:modelValue": y[4] || (y[4] = (B) => l.value = B),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [Bt, l.value]
              ]),
              c("button", {
                class: "rlzc-btn small",
                disabled: !o.value && !l.value,
                onClick: T
              }, "校正", 8, Gh)
            ]),
            D(f).ledger.length === 0 && A.value.source === "默认值" ? (k(), M("p", Yh, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : Y("", !0)
          ]))
        ]),
        c("div", Hh, [
          c("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !D(f).settings.cardCollapsed.depths,
            onClick: y[5] || (y[5] = (B) => G("depths"))
          }, [
            y[24] || (y[24] = c("h4", null, "注入深度", -1)),
            c("span", {
              class: le(["rlzc-collapse-arrow", { open: !D(f).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, Kh),
          D(f).settings.cardCollapsed.depths ? Y("", !0) : (k(), M("div", Zh, [
            y[29] || (y[29] = c("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            c("div", Jh, [
              c("label", qh, [
                y[25] || (y[25] = c("span", null, [
                  Be("副本暗号"),
                  c("small", null, "触发世界书的副本条目")
                ], -1)),
                c("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: D(f).settings.depths.token,
                  onChange: y[6] || (y[6] = (B) => w("token", B))
                }, null, 40, Qh)
              ]),
              c("label", Xh, [
                y[26] || (y[26] = c("span", null, [
                  Be("副本进度"),
                  c("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                c("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: D(f).settings.depths.progress,
                  onChange: y[7] || (y[7] = (B) => w("progress", B))
                }, null, 40, em)
              ]),
              c("label", tm, [
                y[27] || (y[27] = c("span", null, [
                  Be("本轮指令"),
                  c("small", null, "本轮事件与时限写法")
                ], -1)),
                c("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: D(f).settings.depths.turn,
                  onChange: y[8] || (y[8] = (B) => w("turn", B))
                }, null, 40, nm)
              ]),
              c("label", sm, [
                y[28] || (y[28] = c("span", null, [
                  Be("账户"),
                  c("small", null, "积分余额与清算状态")
                ], -1)),
                c("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: D(f).settings.depths.ledger,
                  onChange: y[9] || (y[9] = (B) => w("ledger", B))
                }, null, 40, im)
              ])
            ])
          ]))
        ]),
        Ce(Ch),
        c("div", rm, [
          c("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !D(f).settings.cardCollapsed.genericCaps,
            onClick: y[10] || (y[10] = (B) => G("genericCaps"))
          }, [
            y[30] || (y[30] = c("h4", null, "通用副本默认轮数上限", -1)),
            c("span", {
              class: le(["rlzc-collapse-arrow", { open: !D(f).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, om),
          D(f).settings.cardCollapsed.genericCaps ? Y("", !0) : (k(), M("div", lm, [
            y[31] || (y[31] = c("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (k(), M(q, null, me(a, (B) => c("label", {
              key: B,
              class: "rlzc-field"
            }, [
              c("span", null, O(B) + " 级", 1),
              c("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: D(f).settings.genericCaps[B],
                onChange: (we) => P(B, we)
              }, null, 40, Am)
            ])), 64))
          ]))
        ]),
        c("div", am, [
          y[32] || (y[32] = c("h4", null, "自定义副本包", -1)),
          D(f).settings.customPacks.length ? (k(), M("ul", cm, [
            (k(!0), M(q, null, me(D(f).settings.customPacks, (B) => (k(), M("li", {
              key: B.id
            }, [
              c("span", null, [
                Be(O(B.level) + "｜" + O(B.name) + " ", 1),
                c("small", null, "v" + O(B.version), 1)
              ]),
              c("button", {
                class: "rlzc-btn ghost small",
                onClick: (we) => g(B.id, B.name)
              }, "删除", 8, um)
            ]))), 128))
          ])) : (k(), M("p", dm, "还没有导入自定义副本包。")),
          c("input", {
            ref_key: "fileInput",
            ref: n,
            type: "file",
            accept: ".json,application/json",
            hidden: "",
            onChange: b
          }, null, 544),
          c("button", {
            class: "rlzc-btn",
            onClick: y[11] || (y[11] = (B) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (k(), M("ul", fm, [
            (k(!0), M(q, null, me(t.value, (B, we) => (k(), M("li", { key: we }, O(B), 1))), 128))
          ])) : Y("", !0)
        ]),
        c("div", pm, [
          y[35] || (y[35] = c("h4", null, "其他", -1)),
          c("label", hm, [
            c("input", {
              type: "checkbox",
              checked: D(f).settings.showBall,
              onChange: y[12] || (y[12] = (B) => Q("showBall", B))
            }, null, 40, mm),
            y[33] || (y[33] = Be("显示悬浮球", -1))
          ]),
          c("label", gm, [
            c("input", {
              type: "checkbox",
              checked: D(f).settings.debug,
              onChange: y[13] || (y[13] = (B) => Q("debug", B))
            }, null, 40, xm),
            y[34] || (y[34] = Be("调试模式", -1))
          ])
        ])
      ]),
      y[36] || (y[36] = c("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), vm = { class: "rlzc-debug" }, ym = {
  key: 0,
  class: "rlzc-note"
}, wm = {
  key: 0,
  class: "rlzc-note"
}, _m = {
  key: 1,
  class: "rlzc-note"
}, km = {
  key: 2,
  class: "rlzc-card"
}, zm = { class: "rlzc-row" }, $m = ["disabled"], Sm = ["value"], Em = ["disabled"], Cm = { class: "rlzc-row" }, Mm = ["disabled"], Im = ["disabled"], Tm = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, Pm = ["aria-expanded"], Fm = {
  key: 0,
  class: "rlzc-collapse-body"
}, Nm = ["onUpdate:modelValue", "disabled"], Rm = ["disabled"], Om = { class: "rlzc-card" }, Dm = {
  key: 0,
  class: "rlzc-hint"
}, jm = { class: "rlzc-hint" }, Bm = { class: "rlzc-list rlzc-warns" }, Lm = { class: "rlzc-card" }, Vm = {
  key: 0,
  class: "rlzc-list"
}, Um = ["disabled", "onClick"], Wm = {
  key: 1,
  class: "rlzc-hint"
}, Gm = {
  key: 4,
  class: "rlzc-card"
}, Ym = { class: "rlzc-pre" }, Hm = {
  key: 0,
  class: "rlzc-pre"
}, Km = {
  class: "rlzc-card",
  open: ""
}, Zm = { class: "rlzc-pre" }, Jm = { class: "rlzc-card" }, qm = { class: "rlzc-pre" }, Qm = { class: "rlzc-card" }, Xm = { class: "rlzc-pre" }, eg = { class: "rlzc-card" }, tg = { class: "rlzc-table" }, ng = {
  key: 0,
  class: "rlzc-warn-text"
}, sg = { key: 1 }, ig = ["disabled"], rg = /* @__PURE__ */ Ze({
  __name: "DebugTab",
  setup(e) {
    const t = W(() => f.settings.debug), n = /* @__PURE__ */ pe(""), s = /* @__PURE__ */ pe(null), i = /* @__PURE__ */ rs({});
    ls(
      () => [f.tick, f.pack?.id],
      () => {
        for (const w of Object.keys(i)) delete i[w];
        const T = Al() ?? {};
        for (const w of f.pack?.roles ?? []) i[w] = T[w] ?? "";
      },
      { immediate: !0 }
    );
    const r = W(() => {
      f.tick;
      const T = se(), w = [], b = f.session?.entryIndex ?? 0;
      for (let g = b; g < T.length; g++) {
        const P = T[g]?.extra?.rlzc;
        P && w.push({ index: g, snap: P });
      }
      return w.reverse().slice(0, 60);
    }), o = W(() => {
      const T = new Set((f.audit?.warnings ?? []).filter((g) => g.kind === "limit" || g.kind === "eventMissed").map((g) => g.index)), w = se(), b = f.session?.entryIndex ?? 0;
      for (let g = b; g < w.length; g++)
        w[g]?.extra?.rlzc?.ledgerMismatch && T.add(g);
      return T;
    }), l = W(() => {
      if (f.tick, !f.session || !f.pack || !f.progress) return null;
      const T = se(), w = fs(T, f.progress.entryIndex);
      let b = null;
      for (let g = T.length - 1; g >= f.progress.entryIndex; g--) {
        const P = T[g]?.extra?.rlzc?.sub;
        if (P) {
          b = P;
          break;
        }
      }
      return {
        text: w ? Zo(f.pack, w.state) : "",
        state: w?.state ?? null,
        record: b
      };
    }), a = { done: "✓", missed: "✗", void: "–" };
    function A(T) {
      if (!T.sub && !T.skippedEvents?.length) return "";
      const w = [];
      T.sub?.skipped && w.push(`未更新（${T.sub.error ?? ""}）`);
      for (const b of T.sub?.events ?? []) w.push(`${b.id}${a[b.status]}`);
      for (const b of T.skippedEvents ?? []) w.push(`跳过${b.id}`);
      return T.sub && !T.sub.skipped && !w.length && w.push("已整理"), w.join(" ");
    }
    const u = W(() => {
      const T = f.progress;
      if (!T) return null;
      const { perMessage: w, phase: b, next: g, ...P } = T;
      return {
        phase: b.id + " " + b.name,
        ...P,
        next: g ? { round: g.round, skipFrom: g.skipFrom, events: g.events.map((Z) => Z.id) } : null,
        messages: Object.keys(w).length
      };
    });
    function h() {
      n.value && Ef(n.value);
    }
    function m() {
      s.value !== null && s.value >= 0 && Cf(s.value);
    }
    function x() {
      Mf({ ...i });
    }
    const $ = (T) => JSON.stringify(T, null, 2);
    function S(T) {
      f.settings.cardCollapsed[T] = !f.settings.cardCollapsed[T], ze();
    }
    return (T, w) => (k(), M("div", vm, [
      D(f).session ? (k(), M(q, { key: 1 }, [
        t.value ? Y("", !0) : (k(), M("p", wm, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        D(f).pack && D(f).session.packVersion !== D(f).pack.version ? (k(), M("p", _m, " 入场时副本包版本为 " + O(D(f).session.packVersion) + "，当前为 " + O(D(f).pack.version) + "。 ", 1)) : Y("", !0),
        D(f).pack?.phases.length ? (k(), M("div", km, [
          w[5] || (w[5] = c("h4", null, "手动修正", -1)),
          c("div", zm, [
            ot(c("select", {
              "onUpdate:modelValue": w[0] || (w[0] = (b) => n.value = b),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              w[4] || (w[4] = c("option", { value: "" }, "切换到阶段…", -1)),
              (k(!0), M(q, null, me(D(f).pack.phases, (b) => (k(), M("option", {
                key: b.id,
                value: b.id
              }, O(b.name), 9, Sm))), 128))
            ], 8, $m), [
              [_o, n.value]
            ]),
            c("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: h
            }, "切换", 8, Em)
          ]),
          c("div", Cm, [
            ot(c("input", {
              "onUpdate:modelValue": w[1] || (w[1] = (b) => s.value = b),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, Mm), [
              [
                Bt,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            c("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: m
            }, "修正轮次", 8, Im)
          ])
        ])) : Y("", !0),
        D(f).pack?.roles?.length ? (k(), M("div", Tm, [
          c("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !D(f).settings.cardCollapsed.rolesDebug,
            onClick: w[2] || (w[2] = (b) => S("rolesDebug"))
          }, [
            w[6] || (w[6] = c("h4", null, "角色登记", -1)),
            c("span", {
              class: le(["rlzc-collapse-arrow", { open: !D(f).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, Pm),
          D(f).settings.cardCollapsed.rolesDebug ? Y("", !0) : (k(), M("div", Fm, [
            (k(!0), M(q, null, me(D(f).pack.roles, (b) => (k(), M("label", {
              key: b,
              class: "rlzc-field"
            }, [
              c("span", null, O(b), 1),
              ot(c("input", {
                "onUpdate:modelValue": (g) => i[b] = g,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, Nm), [
                [Bt, i[b]]
              ])
            ]))), 128)),
            c("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: x
            }, "保存登记", 8, Rm)
          ]))
        ])) : Y("", !0),
        c("div", Om, [
          w[8] || (w[8] = c("h4", null, "<副本> 核对", -1)),
          D(f).audit?.warnings.length ? (k(), M(q, { key: 1 }, [
            c("p", jm, "共 " + O(D(f).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            c("ul", Bm, [
              (k(!0), M(q, null, me(D(f).audit.warnings.slice(-30).reverse(), (b, g) => (k(), M("li", { key: g }, [
                c("span", null, [
                  c("small", null, "#" + O(b.index) + "｜" + O(b.phase) + "第" + O(b.round) + "轮", 1),
                  w[7] || (w[7] = c("br", null, null, -1)),
                  Be("⚠️ " + O(b.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (k(), M("p", Dm, "没有发现问题。"))
        ]),
        c("div", Lm, [
          w[9] || (w[9] = c("h4", null, "手动操作记录", -1)),
          D(f).session.manual.length ? (k(), M("ul", Vm, [
            (k(!0), M(q, null, me(D(f).session.manual, (b, g) => (k(), M("li", { key: g }, [
              c("code", null, "#" + O(b.atIndex) + " " + O(b.kind) + " " + O("phase" in b ? b.phase : "") + O("round" in b ? b.round : "") + O("targetPhase" in b ? `${b.targetPhase}:${b.targetRound}` : ""), 1),
              c("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (P) => D(If)(g)
              }, "撤销", 8, Um)
            ]))), 128))
          ])) : (k(), M("p", Wm, "无"))
        ]),
        l.value && (l.value.state || l.value.record) ? (k(), M("details", Gm, [
          w[10] || (w[10] = c("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          c("pre", Ym, O(l.value.text || "（尚无状态）"), 1),
          l.value.record ? (k(), M("pre", Hm, O($(l.value.record)), 1)) : Y("", !0),
          w[11] || (w[11] = c("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : Y("", !0),
        c("details", Km, [
          w[12] || (w[12] = c("summary", null, "本次注入", -1)),
          c("pre", Zm, O([D(f).lastInjection.token, D(f).lastInjection.progress, D(f).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        c("details", Jm, [
          w[13] || (w[13] = c("summary", null, "重放结果", -1)),
          c("pre", qm, O($(u.value)), 1)
        ]),
        c("details", Qm, [
          w[14] || (w[14] = c("summary", null, "会话原始数据", -1)),
          c("pre", Xm, O($(D(f).session)), 1)
        ]),
        c("details", eg, [
          w[16] || (w[16] = c("summary", null, "每楼快照（最近60条）", -1)),
          c("table", tg, [
            w[15] || (w[15] = c("thead", null, [
              c("tr", null, [
                c("th", null, "楼"),
                c("th", null, "阶段"),
                c("th", null, "轮"),
                c("th", null, "钟时"),
                c("th", null, "时限"),
                c("th", null, "事件"),
                c("th", null, "检测")
              ])
            ], -1)),
            c("tbody", null, [
              (k(!0), M(q, null, me(r.value, (b) => (k(), M("tr", {
                key: b.index,
                class: le({ "rlzc-row-warn": o.value.has(b.index) })
              }, [
                c("td", null, O(b.index) + O(b.snap.entry ? "★" : ""), 1),
                c("td", null, O(b.snap.phase), 1),
                c("td", null, O(b.snap.round), 1),
                c("td", null, O(b.snap.clock ?? ""), 1),
                c("td", null, O(b.snap.limit?.text ?? ""), 1),
                c("td", null, O(b.snap.injected.join(" ")), 1),
                c("td", null, O(A(b.snap)), 1),
                b.snap.ledgerMismatch ? (k(), M("td", ng, "状态栏 " + O(b.snap.ledgerMismatch.status) + " / 账本 " + O(b.snap.ledgerMismatch.ledger), 1)) : (k(), M("td", sg))
              ], 2))), 128))
            ])
          ])
        ]),
        c("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: w[3] || (w[3] = //@ts-ignore
          (...b) => D(fr) && D(fr)(...b))
        }, "删除副本会话", 8, ig)
      ], 64)) : (k(), M("p", ym, "当前聊天没有副本会话。"))
    ]));
  }
}), og = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, lg = { class: "rlzc-head" }, Ag = { class: "rlzc-tabs" }, ag = ["onClick"], cg = { class: "rlzc-body" }, ug = /* @__PURE__ */ Ze({
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
        if (!await Ke("此页会显示副本真相，确定要打开吗？")) return;
        f.debugUnlocked = !0;
      }
      f.tab = s;
    }
    return (s, i) => (k(), M("div", {
      class: "rlzc-backdrop",
      onClick: i[1] || (i[1] = Ea((r) => D(f).panelOpen = !1, ["self"]))
    }, [
      c("section", og, [
        c("header", lg, [
          i[2] || (i[2] = c("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          c("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: i[0] || (i[0] = (r) => D(f).panelOpen = !1)
          }, "×")
        ]),
        c("nav", Ag, [
          (k(), M(q, null, me(t, (r) => c("button", {
            key: r.id,
            class: le({ on: D(f).tab === r.id }),
            onClick: (o) => n(r.id)
          }, O(r.label), 11, ag)), 64))
        ]),
        c("div", cg, [
          D(f).tab === "system" ? (k(), tt(Mp, { key: 0 })) : D(f).tab === "ledger" ? (k(), tt(Yp, { key: 1 })) : D(f).tab === "settings" ? (k(), tt(bm, { key: 2 })) : D(f).tab === "debug" && D(f).debugUnlocked ? (k(), tt(rg, { key: 3 })) : Y("", !0)
        ])
      ])
    ]));
  }
}), dg = /* @__PURE__ */ Ze({
  __name: "App",
  setup(e) {
    return (t, n) => (k(), M(q, null, [
      D(f).settings.showBall ? (k(), tt(Vf, { key: 0 })) : Y("", !0),
      D(f).panelOpen ? (k(), tt(ug, { key: 1 })) : Y("", !0)
    ], 64));
  }
}), fg = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field{align-items:flex-start}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-depth .rlzc-field>.rlzc-input{flex:0 0 72px;width:72px}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-conn-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout{justify-content:flex-start;gap:16px}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px}.rlzc-input-num{width:72px;text-align:right;font-variant-numeric:tabular-nums}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-head .rlzc-dot{font-size:12px}';
function pg(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function hl(e, t, n) {
  const s = ue().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function hg() {
  const e = pg();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await hl("/api/extensions/version", e, t);
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
async function mg(e) {
  const t = await hl("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const xr = "rlzc-host", br = "rlzc-menu-btn", vr = "rlzc-settings-drawer";
function gg() {
  if (document.getElementById(xr)) return;
  const e = document.createElement("div");
  e.id = xr, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = fg, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), Ia(dg).mount(s), ml(), gl();
}
function ml(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => ml(e + 1), 500);
    return;
  }
  if (document.getElementById(br)) return;
  const n = document.createElement("div");
  n.id = br, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const i = document.createElement("span");
  i.textContent = "回廊种菜系统", n.append(s, i), n.addEventListener("click", () => {
    f.panelOpen = !f.panelOpen;
  }), t.appendChild(n);
}
function gl(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => gl(e + 1), 500);
    return;
  }
  if (document.getElementById(vr)) return;
  const n = (Q, G = "", I = "") => {
    const y = document.createElement(Q);
    return G && (y.className = G), I && (y.textContent = I), y;
  }, s = n("div");
  s.id = vr;
  const i = n("div", "inline-drawer"), r = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), r.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const a = n("div", "inline-drawer-content"), A = n("div", "menu_button menu_button_icon", "打开面板");
  A.prepend(n("i", "fa-solid fa-seedling")), A.addEventListener("click", () => f.panelOpen = !0);
  const u = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  u.addEventListener("click", () => {
    f.settings.ball = { x: null, y: null }, f.settings.showBall = !0, ze();
  });
  const h = n("label", "checkbox_label"), m = document.createElement("input");
  m.type = "checkbox", m.addEventListener("change", () => {
    f.settings.showBall = m.checked, ze();
  }), h.append(m, n("span", "", "显示悬浮球")), ls(() => f.settings.showBall, (Q) => m.checked = Q, { immediate: !0 });
  const x = n("div", "flex-container");
  x.append(A, u);
  const $ = n("div", "flex-container alignitemscenter"), S = n("small", "rlzc-update-status", "正在检查更新…"), T = n("div", "menu_button menu_button_icon", "检查更新"), w = n("div", "menu_button menu_button_icon", "立即更新"), b = n("div", "menu_button menu_button_icon", "刷新页面");
  w.style.display = "none", b.style.display = "none", $.append(S, T, w, b);
  let g = null, P = !1;
  const Z = async () => {
    if (!P) {
      P = !0, S.textContent = "正在检查更新…", w.style.display = "none";
      try {
        g = await hg();
        const Q = g.commit ? `（${g.commit}）` : "";
        g.isGit ? g.isUpToDate ? S.textContent = `已是最新版本${Q}` : (S.textContent = `有新版本可以更新，当前${Q || "版本较旧"}`, w.style.display = "") : S.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = g.isGit && !g.isUpToDate ? "" : "none";
      } catch (Q) {
        S.textContent = `检查更新失败：${Q.message}`;
      } finally {
        P = !1;
      }
    }
  };
  T.addEventListener("click", () => void Z()), w.addEventListener("click", async () => {
    if (!(!g || P)) {
      P = !0, S.textContent = "正在更新…", w.style.display = "none";
      try {
        await mg(g), l.style.display = "none", S.textContent = "更新完成，刷新页面后生效。", b.style.display = "";
      } catch (Q) {
        S.textContent = `更新失败：${Q.message}`, w.style.display = "";
      } finally {
        P = !1;
      }
    }
  }), b.addEventListener("click", () => location.reload()), setTimeout(() => void Z(), 3e3), a.append(x, h, $, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), i.append(r, a), s.append(i), t.append(s);
}
globalThis.rlzcInterceptor = zf;
function Bs() {
  ff(), it("MESSAGE_RECEIVED", (e, t) => Df(Number(e), t)), it("CHARACTER_MESSAGE_RENDERED", (e) => Ds(Number(e))), it("MESSAGE_DELETED", () => Os()), it("MESSAGE_SWIPED", (e) => {
    $f(Number(e)), Ds(Number(e));
  }), it("MESSAGE_EDITED", () => Os()), it("MESSAGE_UPDATED", (e) => {
    Os(), Ds(Number(e));
  }), it("CHAT_CHANGED", () => hr()), it("MORE_MESSAGES_LOADED", () => wi()), gg(), hr(), console.log("[rlzc] 回廊种菜系统已加载", f.settings);
}
const yr = window.jQuery;
typeof yr == "function" ? yr(() => Bs()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Bs) : Bs();
