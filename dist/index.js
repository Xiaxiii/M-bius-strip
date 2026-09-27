/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function li(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const xe = {}, en = [], sn = () => {
}, cl = () => !1, qs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ys = (e) => e.startsWith("onUpdate:"), Oe = Object.assign, ul = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Oc = Object.prototype.hasOwnProperty, de = (e, t) => Oc.call(e, t), re = Array.isArray, Nt = (e) => os(e) === "[object Map]", ln = (e) => os(e) === "[object Set]", Ji = (e) => os(e) === "[object Date]", ue = (e) => typeof e == "function", ye = (e) => typeof e == "string", pt = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", Al = (e) => (me(e) || ue(e)) && ue(e.then) && ue(e.catch), dl = Object.prototype.toString, os = (e) => dl.call(e), Bc = (e) => os(e).slice(8, -1), fl = (e) => os(e) === "[object Object]", ai = (e) => ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jn = /* @__PURE__ */ li(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Js = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Vc = /-\w/g, Ze = Js(
  (e) => e.replace(Vc, (t) => t.slice(1).toUpperCase())
), Uc = /\B([A-Z])/g, dn = Js(
  (e) => e.replace(Uc, "-$1").toLowerCase()
), pl = Js((e) => e.charAt(0).toUpperCase() + e.slice(1)), vr = Js(
  (e) => e ? `on${pl(e)}` : ""
), dt = (e, t) => !Object.is(e, t), ws = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, hl = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Zs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Hc = (e) => {
  const t = ye(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Zi;
const Xs = () => Zi || (Zi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qs(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ye(s) ? qc(s) : Qs(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ye(e) || me(e))
    return e;
}
const Wc = /;(?![^(]*\))/g, Gc = /:([^]+)/, Kc = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function qc(e) {
  const t = {};
  return e.replace(Kc, (n) => n.startsWith("/*") ? "" : n).split(Wc).forEach((n) => {
    if (n) {
      const s = n.split(Gc);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function se(e) {
  let t = "";
  if (ye(e))
    t = e;
  else if (re(e))
    for (let n = 0; n < e.length; n++) {
      const s = se(e[n]);
      s && (t += s + " ");
    }
  else if (me(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Yc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jc = /* @__PURE__ */ li(Yc);
function ml(e) {
  return !!e || e === "";
}
function Zc(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = Lt(e[r], t[r], n);
  return s;
}
function Xi(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), r = new Uint8Array(s.length);
  for (const i of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!r[l] && Lt(i, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function Xc(e, t, n) {
  let s = Nt(e), r = Nt(t);
  if (s || r || (s = ln(e), r = ln(t), s || r))
    return s && r ? Xi(e, t, n) : !1;
  const i = Object.keys(e).length, o = Object.keys(t).length;
  if (i !== o)
    return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
    if (a && !c || !a && c || !Lt(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function Qi(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [r, i] = n;
  if (r.has(e) || i.has(t))
    return r.get(e) === t && i.get(t) === e;
  r.set(e, t), i.set(t, e);
  const o = s(e, t, n);
  return r.delete(e), i.delete(t), o;
}
function Lt(e, t, n) {
  if (e === t) return !0;
  let s = Ji(e), r = Ji(t);
  return s || r ? s && r ? e.getTime() === t.getTime() : !1 : (s = pt(e), r = pt(t), s || r ? e === t : (s = re(e), r = re(t), s || r ? s && r ? Qi(e, t, n, Zc) : !1 : (s = me(e), r = me(t), s || r ? !s || !r ? !1 : Qi(e, t, n, Xc) : String(e) === String(t))));
}
function Qc(e, t) {
  return e.findIndex((n) => Lt(n, t));
}
const gl = (e) => !!(e && e.__v_isRef === !0), _ = (e) => ye(e) ? e : e == null ? "" : re(e) || me(e) && (e.toString === dl || !ue(e.toString)) ? gl(e) ? _(e.value) : JSON.stringify(e, xl, 2) : String(e), xl = (e, t) => gl(t) ? xl(e, t.value) : Nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[yr(s, i) + " =>"] = r, n),
    {}
  )
} : ln(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => yr(n))
} : pt(t) ? yr(t) : me(t) && !re(t) && !fl(t) ? String(t) : t, yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    pt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ze;
class eu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ze && (ze.active ? (this.parent = ze, this.index = (ze.scopes || (ze.scopes = [])).push(
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
      const n = ze;
      try {
        return ze = this, t();
      } finally {
        ze = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ze, ze = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ze === this)
        ze = this.prevScope;
      else {
        let t = ze;
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
function tu() {
  return ze;
}
let fe;
const br = /* @__PURE__ */ new WeakSet();
class vl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ze && (ze.active ? ze.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, br.has(this) && (br.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || bl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, eo(this), kl(this);
    const t = fe, n = Xe;
    fe = this, Xe = !0;
    try {
      return this.fn();
    } finally {
      wl(this), fe = t, Xe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ai(t);
      this.deps = this.depsTail = void 0, eo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? br.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Gr(this) && this.run();
  }
  get dirty() {
    return Gr(this);
  }
}
let yl = 0, Ln, Dn;
function bl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Dn, Dn = e;
    return;
  }
  e.next = Ln, Ln = e;
}
function ci() {
  yl++;
}
function ui() {
  if (--yl > 0)
    return;
  if (Dn) {
    let t = Dn;
    for (Dn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ln; ) {
    let t = Ln;
    for (Ln = void 0; t; ) {
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
function kl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function wl(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Ai(s), nu(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Gr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (zl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function zl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wn) || (e.globalVersion = Wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Gr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = fe, s = Xe;
  fe = e, Xe = !0;
  try {
    kl(e);
    const r = e.fn(e._value);
    (t.version === 0 || dt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    fe = n, Xe = s, wl(e), e.flags &= -3;
  }
}
function Ai(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ai(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function nu(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Xe = !0;
const _l = [];
function Dt() {
  _l.push(Xe), Xe = !1;
}
function Ft() {
  const e = _l.pop();
  Xe = e === void 0 ? !0 : e;
}
function eo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = fe;
    fe = void 0;
    try {
      t();
    } finally {
      fe = n;
    }
  }
}
let Wn = 0;
class su {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class di {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!fe || !Xe || fe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== fe)
      n = this.activeLink = new su(fe, this), fe.deps ? (n.prevDep = fe.depsTail, fe.depsTail.nextDep = n, fe.depsTail = n) : fe.deps = fe.depsTail = n, $l(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = fe.depsTail, n.nextDep = void 0, fe.depsTail.nextDep = n, fe.depsTail = n, fe.deps === n && (fe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Wn++, this.notify(t);
  }
  notify(t) {
    ci();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ui();
    }
  }
}
function $l(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        $l(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Kr = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ Symbol(
  ""
), qr = /* @__PURE__ */ Symbol(
  ""
), Gn = /* @__PURE__ */ Symbol(
  ""
);
function Se(e, t, n) {
  if (Xe && fe) {
    let s = Kr.get(e);
    s || Kr.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new di()), r.map = s, r.key = n), r.track();
  }
}
function kt(e, t, n, s, r, i) {
  const o = Kr.get(e);
  if (!o) {
    Wn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (ci(), t === "clear")
    o.forEach(l);
  else {
    const a = re(e), c = a && ai(n);
    if (a && n === "length") {
      const u = Number(s);
      o.forEach((d, p) => {
        (p === "length" || p === Gn || !pt(p) && p >= u) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(Gn)), t) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(rn)), Nt(e) && l(o.get(qr)));
          break;
        case "delete":
          a || (l(o.get(rn)), Nt(e) && l(o.get(qr)));
          break;
        case "set":
          Nt(e) && l(o.get(rn));
          break;
      }
  }
  ui();
}
function mn(e) {
  const t = /* @__PURE__ */ oe(e);
  return t === e || (Se(t, "iterate", Gn), /* @__PURE__ */ Ke(e)) ? t : /* @__PURE__ */ ht(e) ? /* @__PURE__ */ Pt(e) ? t.map((n) => Rt(qe(n))) : t.map(Rt) : t.map(qe);
}
function er(e) {
  return Se(e = /* @__PURE__ */ oe(e), "iterate", Gn), e;
}
function ut(e, t) {
  return /* @__PURE__ */ ht(e) ? Rt(/* @__PURE__ */ Pt(e) ? qe(t) : t) : qe(t);
}
const ru = {
  __proto__: null,
  [Symbol.iterator]() {
    return kr(this, Symbol.iterator, (e) => ut(this, e));
  },
  concat(...e) {
    return mn(this).concat(
      ...e.map((t) => re(t) ? mn(t) : t)
    );
  },
  entries() {
    return kr(this, "entries", (e) => (e[1] = ut(this, e[1]), e));
  },
  every(e, t) {
    return xt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return xt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => ut(this, s)),
      arguments
    );
  },
  find(e, t) {
    return xt(
      this,
      "find",
      e,
      t,
      (n) => ut(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return xt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return xt(
      this,
      "findLast",
      e,
      t,
      (n) => ut(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return xt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return xt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return wr(this, "includes", e);
  },
  indexOf(...e) {
    return wr(this, "indexOf", e);
  },
  join(e) {
    return mn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return wr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return xt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Cn(this, "pop");
  },
  push(...e) {
    return Cn(this, "push", e);
  },
  reduce(e, ...t) {
    return to(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return to(this, "reduceRight", e, t);
  },
  shift() {
    return Cn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return xt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Cn(this, "splice", e);
  },
  toReversed() {
    return mn(this).toReversed();
  },
  toSorted(e) {
    return mn(this).toSorted(e);
  },
  toSpliced(...e) {
    return mn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Cn(this, "unshift", e);
  },
  values() {
    return kr(this, "values", (e) => ut(this, e));
  }
};
function kr(e, t, n) {
  const s = er(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Ke(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const iu = Array.prototype;
function xt(e, t, n, s, r, i) {
  const o = er(e), l = o !== e && !/* @__PURE__ */ Ke(e), a = o[t];
  if (a !== iu[t]) {
    const d = a.apply(e, i);
    return l ? qe(d) : d;
  }
  let c = n;
  o !== e && (l ? c = function(d, p) {
    return n.call(this, ut(e, d), p, e);
  } : n.length > 2 && (c = function(d, p) {
    return n.call(this, d, p, e);
  }));
  const u = a.call(o, c, s);
  return l && r ? r(u) : u;
}
function to(e, t, n, s) {
  const r = er(e), i = r !== e && !/* @__PURE__ */ Ke(e);
  let o = n, l = !1;
  r !== e && (i ? (l = s.length === 0, o = function(c, u, d) {
    return l && (l = !1, c = ut(e, c)), n.call(this, c, ut(e, u), d, e);
  }) : n.length > 3 && (o = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const a = r[t](o, ...s);
  return l ? ut(e, a) : a;
}
function wr(e, t, n) {
  const s = /* @__PURE__ */ oe(e);
  Se(s, "iterate", Gn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ hi(n[0]) ? (n[0] = /* @__PURE__ */ oe(n[0]), s[t](...n)) : r;
}
function Cn(e, t, n = []) {
  Dt(), ci();
  const s = (/* @__PURE__ */ oe(e))[t].apply(e, n);
  return ui(), Ft(), s;
}
const ou = /* @__PURE__ */ li("__proto__,__v_isRef,__isVue"), Sl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pt)
);
function lu(e) {
  pt(e) || (e = String(e));
  const t = /* @__PURE__ */ oe(this);
  return Se(t, "has", e), t.hasOwnProperty(e);
}
class Cl {
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
      return s === (r ? i ? gu : Il : i ? Tl : Ml).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = re(t);
    if (!r) {
      let a;
      if (o && (a = ru[n]))
        return a;
      if (n === "hasOwnProperty")
        return lu;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Me(t) ? t : s
    );
    if ((pt(n) ? Sl.has(n) : ou(n)) || (r || Se(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Me(l)) {
      const a = o && ai(n) ? l : l.value;
      return r && me(a) ? /* @__PURE__ */ Jr(a) : a;
    }
    return me(l) ? r ? /* @__PURE__ */ Jr(l) : /* @__PURE__ */ tr(l) : l;
  }
}
class El extends Cl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = re(t) && ai(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ ht(i);
      if (!/* @__PURE__ */ Ke(s) && !/* @__PURE__ */ ht(s) && (i = /* @__PURE__ */ oe(i), s = /* @__PURE__ */ oe(s)), !o && /* @__PURE__ */ Me(i) && !/* @__PURE__ */ Me(s))
        return c || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : de(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Me(t) ? t : r
    );
    return t === /* @__PURE__ */ oe(r) && a && (l ? dt(s, i) && kt(t, "set", n, s) : kt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = de(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && kt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!pt(n) || !Sl.has(n)) && Se(t, "has", n), s;
  }
  ownKeys(t) {
    return Se(
      t,
      "iterate",
      re(t) ? "length" : rn
    ), Reflect.ownKeys(t);
  }
}
class au extends Cl {
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
const cu = /* @__PURE__ */ new El(), uu = /* @__PURE__ */ new au(), Au = /* @__PURE__ */ new El(!0);
const Yr = (e) => e, ps = (e) => Reflect.getPrototypeOf(e);
function du(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ oe(r), o = Nt(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = r[e](...s), u = n ? Yr : t ? Rt : qe;
    return !t && Se(
      i,
      "iterate",
      a ? qr : rn
    ), Oe(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: p } = c.next();
          return p ? { value: d, done: p } : {
            value: l ? [u(d[0]), u(d[1])] : u(d),
            done: p
          };
        }
      }
    );
  };
}
function hs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fu(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ oe(i), l = /* @__PURE__ */ oe(r);
      e || (dt(r, l) && Se(o, "get", r), Se(o, "get", l));
      const { has: a } = ps(o), c = t ? Yr : e ? Rt : qe;
      if (a.call(o, r))
        return c(i.get(r));
      if (a.call(o, l))
        return c(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Se(/* @__PURE__ */ oe(r), "iterate", rn), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ oe(i), l = /* @__PURE__ */ oe(r);
      return e || (dt(r, l) && Se(o, "has", r), Se(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ oe(l), c = t ? Yr : e ? Rt : qe;
      return !e && Se(a, "iterate", rn), l.forEach((u, d) => r.call(i, c(u), c(d), o));
    }
  };
  return Oe(
    n,
    e ? {
      add: hs("add"),
      set: hs("set"),
      delete: hs("delete"),
      clear: hs("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ oe(this), o = ps(i), l = /* @__PURE__ */ oe(r), a = !t && !/* @__PURE__ */ Ke(r) && !/* @__PURE__ */ ht(r) ? l : r;
        return o.has.call(i, a) || dt(r, a) && o.has.call(i, r) || dt(l, a) && o.has.call(i, l) || (i.add(a), kt(i, "add", a, a)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Ke(i) && !/* @__PURE__ */ ht(i) && (i = /* @__PURE__ */ oe(i));
        const o = /* @__PURE__ */ oe(this), { has: l, get: a } = ps(o);
        let c = l.call(o, r);
        c || (r = /* @__PURE__ */ oe(r), c = l.call(o, r));
        const u = a.call(o, r);
        return o.set(r, i), c ? dt(i, u) && kt(o, "set", r, i) : kt(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ oe(this), { has: o, get: l } = ps(i);
        let a = o.call(i, r);
        a || (r = /* @__PURE__ */ oe(r), a = o.call(i, r)), l && l.call(i, r);
        const c = i.delete(r);
        return a && kt(i, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ oe(this), i = r.size !== 0, o = r.clear();
        return i && kt(
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
    n[r] = du(r, e, t);
  }), n;
}
function fi(e, t) {
  const n = fu(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    de(n, r) && r in s ? n : s,
    r,
    i
  );
}
const pu = {
  get: /* @__PURE__ */ fi(!1, !1)
}, hu = {
  get: /* @__PURE__ */ fi(!1, !0)
}, mu = {
  get: /* @__PURE__ */ fi(!0, !1)
};
const Ml = /* @__PURE__ */ new WeakMap(), Tl = /* @__PURE__ */ new WeakMap(), Il = /* @__PURE__ */ new WeakMap(), gu = /* @__PURE__ */ new WeakMap();
function xu(e) {
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
function tr(e) {
  return /* @__PURE__ */ ht(e) ? e : pi(
    e,
    !1,
    cu,
    pu,
    Ml
  );
}
// @__NO_SIDE_EFFECTS__
function vu(e) {
  return pi(
    e,
    !1,
    Au,
    hu,
    Tl
  );
}
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  return pi(
    e,
    !0,
    uu,
    mu,
    Il
  );
}
function pi(e, t, n, s, r) {
  if (!me(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = xu(Bc(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  return /* @__PURE__ */ ht(e) ? /* @__PURE__ */ Pt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function hi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ oe(t) : e;
}
function yu(e) {
  return !de(e, "__v_skip") && Object.isExtensible(e) && hl(e, "__v_skip", !0), e;
}
const qe = (e) => me(e) ? /* @__PURE__ */ tr(e) : e, Rt = (e) => me(e) ? /* @__PURE__ */ Jr(e) : e;
// @__NO_SIDE_EFFECTS__
function Me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return bu(e, !1);
}
function bu(e, t) {
  return /* @__PURE__ */ Me(e) ? e : new ku(e, t);
}
class ku {
  constructor(t, n) {
    this.dep = new di(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ oe(t), this._value = n ? t : qe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ke(t) || /* @__PURE__ */ ht(t);
    t = s ? t : /* @__PURE__ */ oe(t), dt(t, n) && (this._rawValue = t, this._value = s ? t : qe(t), this.dep.trigger());
  }
}
function C(e) {
  return /* @__PURE__ */ Me(e) ? e.value : e;
}
const wu = {
  get: (e, t, n) => t === "__v_raw" ? e : C(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ Me(r) && !/* @__PURE__ */ Me(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Nl(e) {
  return /* @__PURE__ */ Pt(e) ? e : new Proxy(e, wu);
}
class zu {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new di(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    fe !== this)
      return bl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return zl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function _u(e, t, n = !1) {
  let s, r;
  return ue(e) ? s = e : (s = e.get, r = e.set), new zu(s, r, n);
}
const ms = {}, Ms = /* @__PURE__ */ new WeakMap();
let Jt;
function $u(e, t = !1, n = Jt) {
  if (n) {
    let s = Ms.get(n);
    s || Ms.set(n, s = []), s.push(e);
  }
}
function Su(e, t, n = xe) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = n, c = (E) => r ? E : /* @__PURE__ */ Ke(E) || r === !1 || r === 0 ? wt(E, 1) : wt(E);
  let u, d, p, x, z = !1, w = !1;
  if (/* @__PURE__ */ Me(e) ? (d = () => e.value, z = /* @__PURE__ */ Ke(e)) : /* @__PURE__ */ Pt(e) ? (d = () => c(e), z = !0) : re(e) ? (w = !0, z = e.some((E) => /* @__PURE__ */ Pt(E) || /* @__PURE__ */ Ke(E)), d = () => e.map((E) => {
    if (/* @__PURE__ */ Me(E))
      return E.value;
    if (/* @__PURE__ */ Pt(E))
      return c(E);
    if (ue(E))
      return a ? a(E, 2) : E();
  })) : ue(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (p) {
      Dt();
      try {
        p();
      } finally {
        Ft();
      }
    }
    const E = Jt;
    Jt = u;
    try {
      return a ? a(e, 3, [x]) : e(x);
    } finally {
      Jt = E;
    }
  } : d = sn, t && r) {
    const E = d, X = r === !0 ? 1 / 0 : r;
    d = () => wt(E(), X);
  }
  const j = tu(), H = () => {
    u.stop(), j && j.active && ul(j.effects, u);
  };
  if (i && t) {
    const E = t;
    t = (...X) => {
      const Y = E(...X);
      return H(), Y;
    };
  }
  let L = w ? new Array(e.length).fill(ms) : ms;
  const S = (E) => {
    if (!(!(u.flags & 1) || !u.dirty && !E))
      if (t) {
        const X = u.run();
        if (E || r || z || (w ? X.some((Y, O) => dt(Y, L[O])) : dt(X, L))) {
          p && p();
          const Y = Jt;
          Jt = u;
          try {
            const O = [
              X,
              // pass undefined as the old value when it's changed for the first time
              L === ms ? void 0 : w && L[0] === ms ? [] : L,
              x
            ];
            L = X, a ? a(t, 3, O) : (
              // @ts-expect-error
              t(...O)
            );
          } finally {
            Jt = Y;
          }
        }
      } else
        u.run();
  };
  return l && l(S), u = new vl(d), u.scheduler = o ? () => o(S, !1) : S, x = (E) => $u(E, !1, u), p = u.onStop = () => {
    const E = Ms.get(u);
    if (E) {
      if (a)
        a(E, 4);
      else
        for (const X of E) X();
      Ms.delete(u);
    }
  }, t ? s ? S(!0) : L = u.run() : o ? o(S.bind(null, !0), !0) : u.run(), H.pause = u.pause.bind(u), H.resume = u.resume.bind(u), H.stop = H, H;
}
function wt(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Me(e))
    wt(e.value, t, n);
  else if (re(e))
    for (let s = 0; s < e.length; s++)
      wt(e[s], t, n);
  else if (ln(e) || Nt(e))
    e.forEach((s) => {
      wt(s, t, n);
    });
  else if (fl(e)) {
    for (const s in e)
      wt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && wt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ls(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    nr(r, t, n);
  }
}
function Qe(e, t, n, s) {
  if (ue(e)) {
    const r = ls(e, t, n, s);
    return r && Al(r) && r.catch((i) => {
      nr(i, t, n);
    }), r;
  }
  if (re(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Qe(e[i], t, n, s));
    return r;
  }
}
function nr(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || xe;
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
    if (i) {
      Dt(), ls(i, null, 10, [
        e,
        a,
        c
      ]), Ft();
      return;
    }
  }
  Cu(e, n, r, s, o);
}
function Cu(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Ce = [];
let ct = -1;
const vn = [];
let Tt = null, gn = 0;
const Pl = /* @__PURE__ */ Promise.resolve();
let Ts = null;
function jl(e) {
  const t = Ts || Pl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Eu(e) {
  let t = ct + 1, n = Ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Ce[s], i = Kn(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function mi(e) {
  if (!(e.flags & 1)) {
    const t = Kn(e), n = Ce[Ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kn(n) ? Ce.push(e) : Ce.splice(Eu(t), 0, e), e.flags |= 1, Ll();
  }
}
function Ll() {
  Ts || (Ts = Pl.then(Fl));
}
function Mu(e) {
  if (!re(e))
    Tt && e.id === -1 ? Tt.splice(gn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      vn.push(e[t]);
  Ll();
}
function no(e, t, n = ct + 1) {
  for (; n < Ce.length; n++) {
    const s = Ce[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ce.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Dl(e) {
  if (vn.length) {
    const t = [...new Set(vn)].sort(
      (n, s) => Kn(n) - Kn(s)
    );
    if (vn.length = 0, Tt) {
      for (let n = 0; n < t.length; n++)
        Tt.push(t[n]);
      return;
    }
    for (Tt = t, gn = 0; gn < Tt.length; gn++) {
      const n = Tt[gn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Tt = null, gn = 0;
  }
}
const Kn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Fl(e) {
  try {
    for (ct = 0; ct < Ce.length; ct++) {
      const t = Ce[ct];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ls(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ct < Ce.length; ct++) {
      const t = Ce[ct];
      t && (t.flags &= -2);
    }
    ct = -1, Ce.length = 0, Dl(), Ts = null, (Ce.length || vn.length) && Fl();
  }
}
let Ge = null, Rl = null;
function Is(e) {
  const t = Ge;
  return Ge = e, Rl = e && e.type.__scopeId || null, t;
}
function Ol(e, t = Ge, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && js(-1);
    const i = Is(t), o = on.length;
    let l;
    try {
      l = e(...r);
    } finally {
      for (let a = on.length; a > o; a--) la();
      Is(i), s._d && js(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ft(e, t) {
  if (Ge === null)
    return e;
  const n = lr(Ge), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = xe] = t[r];
    i && (ue(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && wt(o), s.push({
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
function Gt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (Dt(), Qe(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ft());
  }
}
function Tu(e, t, n = !1) {
  const s = ua();
  if (s || yn) {
    let r = yn ? yn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ue(t) ? t.call(s && s.proxy) : t;
  }
}
const Iu = /* @__PURE__ */ Symbol.for("v-scx"), Nu = () => Tu(Iu);
function sr(e, t, n) {
  return Pu(e, t, n);
}
function Pu(e, t, n = xe) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = Oe({}, n), a = t && s || !t && i !== "post";
  let c;
  if (Zn) {
    if (i === "sync") {
      const x = Nu();
      c = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!a) {
      const x = () => {
      };
      return x.stop = sn, x.resume = sn, x.pause = sn, x;
    }
  }
  const u = Bt;
  l.call = (x, z, w) => Qe(x, u, z, w);
  let d = !1;
  i === "post" ? l.scheduler = (x) => {
    Ne(x, u && u.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (x, z) => {
    z ? x() : mi(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), d && (x.flags |= 2, u && (x.id = u.uid, x.i = u));
  };
  const p = Su(e, t, l);
  return Zn && (c ? c.push(p) : a && p()), p;
}
const ju = /* @__PURE__ */ Symbol("_vte"), rr = (e) => e.__isTeleport, He = /* @__PURE__ */ Symbol("_leaveCb"), En = /* @__PURE__ */ Symbol("_enterCb");
function Lu() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Kl(() => {
    e.isMounted = !0;
  }), xi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ue = [Function, Array], Bl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ue,
  onEnter: Ue,
  onAfterEnter: Ue,
  onEnterCancelled: Ue,
  // leave
  onBeforeLeave: Ue,
  onLeave: Ue,
  onAfterLeave: Ue,
  onLeaveCancelled: Ue,
  // appear
  onBeforeAppear: Ue,
  onAppear: Ue,
  onAfterAppear: Ue,
  onAppearCancelled: Ue
}, Vl = (e) => {
  const t = e.subTree;
  return t.component ? Vl(t.component) : t;
}, Du = {
  name: "BaseTransition",
  props: Bl,
  setup(e, { slots: t }) {
    const n = ua(), s = Lu();
    return () => {
      const r = t.default && Wl(t.default(), !0), i = r && r.length ? Ul(r) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? U() : void 0
      );
      if (!i)
        return;
      const o = /* @__PURE__ */ oe(e), { mode: l } = o;
      if (s.isLeaving)
        return zr(i);
      const a = Ns(i);
      if (!a)
        return zr(i);
      let c = Zr(
        a,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => c = d
      );
      a.type !== Ee && qn(a, c);
      let u = n.subTree && Ns(n.subTree);
      if (u && u.type !== Ee && !Xt(u, a) && Vl(n).type !== Ee) {
        let d = Zr(
          u,
          o,
          s,
          n
        );
        if (qn(u, d), l === "out-in" && a.type !== Ee)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, zr(i);
        l === "in-out" && a.type !== Ee ? d.delayLeave = (p, x, z) => {
          const w = Hl(
            s,
            u
          );
          w[String(u.key)] = u, p[He] = () => {
            x(), p[He] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            z(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function Ul(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ee) {
        t = n;
        break;
      }
  }
  return t;
}
const Fu = Du;
function Hl(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Zr(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: p,
    onLeave: x,
    onAfterLeave: z,
    onLeaveCancelled: w,
    onBeforeAppear: j,
    onAppear: H,
    onAfterAppear: L,
    onAppearCancelled: S
  } = t, E = String(e.key), X = Hl(n, e), Y = (h, g) => {
    h && Qe(
      h,
      s,
      9,
      g
    );
  }, O = (h, g) => {
    const N = g[1];
    Y(h, g), re(h) ? h.every((D) => D.length <= 1) && N() : h.length <= 1 && N();
  }, b = {
    mode: o,
    persisted: l,
    beforeEnter(h) {
      let g = a;
      if (!n.isMounted)
        if (i)
          g = j || a;
        else
          return;
      h[He] && h[He](
        !0
        /* cancelled */
      );
      const N = X[E];
      N && Xt(e, N) && N.el[He] && N.el[He](), Y(g, [h]);
    },
    enter(h) {
      if (X[E] === e) return;
      let g = c, N = u, D = d;
      if (!n.isMounted)
        if (i)
          g = H || c, N = L || u, D = S || d;
        else
          return;
      let Q = !1;
      h[En] = (le) => {
        Q || (Q = !0, le ? Y(D, [h]) : Y(N, [h]), b.delayedLeave && b.delayedLeave(), h[En] = void 0);
      };
      const ae = h[En].bind(null, !1);
      g ? O(g, [h, ae]) : ae();
    },
    leave(h, g) {
      const N = String(e.key);
      if (h[En] && h[En](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return g();
      Y(p, [h]);
      let D = !1;
      h[He] = (ae) => {
        D || (D = !0, g(), ae ? Y(w, [h]) : Y(z, [h]), h[He] = void 0, X[N] === e && delete X[N]);
      };
      const Q = h[He].bind(null, !1);
      X[N] = e, x ? O(x, [h, Q]) : Q();
    },
    clone(h) {
      const g = Zr(
        h,
        t,
        n,
        s,
        r
      );
      return r && r(g), g;
    }
  };
  return b;
}
function zr(e) {
  if (gi(e))
    return e = Ot(e), e.children = null, e;
}
function Ns(e) {
  if (!gi(e))
    return rr(e.type) && e.children ? Ul(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ue(n.default))
      return n.default();
  }
}
function qn(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    qn(
      rr(n.type) && Ns(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Wl(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === te ? (o.patchFlag & 128 && r++, s = s.concat(
      Wl(o.children, t, l)
    )) : (t || o.type !== Ee) && s.push(l != null ? Ot(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Be(e, t) {
  return ue(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Oe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ru(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function so(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ps = /* @__PURE__ */ new WeakMap();
function Fn(e, t, n, s, r = !1) {
  if (re(e)) {
    e.forEach(
      (w, j) => Fn(
        w,
        t && (re(t) ? t[j] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Rn(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Fn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? lr(s.component) : s.el, o = r ? null : i, { i: l, r: a } = e, c = t && t.r, u = l.refs === xe ? l.refs = {} : l.refs, d = l.setupState, p = /* @__PURE__ */ oe(d), x = d === xe ? cl : (w) => so(u, w) ? !1 : de(p, w), z = (w, j) => !(j && so(u, j));
  if (c != null && c !== a) {
    if (ro(t), ye(c))
      u[c] = null, x(c) && (d[c] = null);
    else if (/* @__PURE__ */ Me(c)) {
      const w = t;
      z(c, w.k) && (c.value = null), w.k && (u[w.k] = null);
    }
  }
  if (ue(a))
    ls(a, l, 12, [o, u]);
  else {
    const w = ye(a), j = /* @__PURE__ */ Me(a);
    if (w || j) {
      const H = () => {
        if (e.f) {
          const L = w ? x(a) ? d[a] : u[a] : z() || !e.k ? a.value : u[e.k];
          if (r)
            re(L) && ul(L, i);
          else if (re(L))
            L.includes(i) || L.push(i);
          else if (w)
            u[a] = [i], x(a) && (d[a] = u[a]);
          else {
            const S = [i];
            z(a, e.k) && (a.value = S), e.k && (u[e.k] = S);
          }
        } else w ? (u[a] = o, x(a) && (d[a] = o)) : j && (z(a, e.k) && (a.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const L = () => {
          H(), Ps.delete(e);
        };
        L.id = -1, Ps.set(e, L), Ne(L, n);
      } else
        ro(e), H();
    }
  }
}
function ro(e) {
  const t = Ps.get(e);
  t && (t.flags |= 8, Ps.delete(e));
}
Xs().requestIdleCallback;
Xs().cancelIdleCallback;
const Rn = (e) => !!e.type.__asyncLoader, gi = (e) => e.type.__isKeepAlive;
function Ou(e, t, n = Bt, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Dt();
      const l = bi(n), a = Qe(t, n, e, o);
      return l(), Ft(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Gl = (e) => (t, n = Bt) => {
  (!Zn || e === "sp") && Ou(e, (...s) => t(...s), n);
}, Kl = Gl("m"), xi = Gl(
  "bum"
), Bu = /* @__PURE__ */ Symbol.for("v-ndc");
function he(e, t, n, s) {
  let r;
  const i = n, o = re(e);
  if (o || ye(e)) {
    const l = o && /* @__PURE__ */ Pt(e);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ Ke(e), c = /* @__PURE__ */ ht(e), e = er(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        a ? c ? Rt(qe(e[u])) : qe(e[u]) : e[u],
        u,
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
        const u = l[a];
        r[a] = t(e[u], u, a, i);
      }
    }
  else
    r = [];
  return r;
}
const Xr = (e) => e ? Aa(e) ? lr(e) : Xr(e.parent) : null, On = (
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
    $parent: (e) => Xr(e.parent),
    $root: (e) => Xr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      mi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = jl.bind(e.proxy)),
    $watch: (e) => sn
  })
), _r = (e, t) => e !== xe && !e.__isScriptSetup && de(e, t), Vu = {
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
        if (_r(s, t))
          return o[t] = 1, s[t];
        if (de(i, t))
          return o[t] = 3, i[t];
        if (n !== xe && de(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = On[t];
    let u, d;
    if (c)
      return t === "$attrs" && Se(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== xe && de(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, de(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return _r(r, t) ? (r[t] = n, !0) : de(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let a;
    return !!(n[l] || _r(t, l) || de(i, l) || de(s, l) || de(On, l) || de(r.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : de(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ql() {
  return {
    app: null,
    config: {
      isNativeTag: cl,
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
let Uu = 0;
function Hu(e, t) {
  return function(s, r = null) {
    ue(s) || (s = Oe({}, s)), r != null && !me(r) && (r = null);
    const i = ql(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = i.app = {
      _uid: Uu++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: bA,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return o.has(u) || (u && ue(u.install) ? (o.add(u), u.install(c, ...d)) : ue(u) && (o.add(u), u(c, ...d))), c;
      },
      mixin(u) {
        return c;
      },
      component(u, d) {
        return d ? (i.components[u] = d, c) : i.components[u];
      },
      directive(u, d) {
        return d ? (i.directives[u] = d, c) : i.directives[u];
      },
      mount(u, d, p) {
        if (!a) {
          const x = c._ceVNode || _e(s, r);
          return x.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(x, u, p), a = !0, c._container = u, u.__vue_app__ = c, lr(x.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (Qe(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return i.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = yn;
        yn = c;
        try {
          return u();
        } finally {
          yn = d;
        }
      }
    };
    return c;
  };
}
let yn = null;
const Wu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ze(t)}Modifiers`] || e[`${dn(t)}Modifiers`];
function Gu(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || xe;
  let r = n;
  const i = t.startsWith("update:"), o = i && Wu(s, t.slice(7));
  o && (o.trim && (r = n.map((u) => ye(u) ? u.trim() : u)), o.number && (r = r.map(Zs)));
  let l, a = s[l = vr(t)] || // also try camelCase event handler (#2249)
  s[l = vr(Ze(t))];
  !a && i && (a = s[l = vr(dn(t))]), a && Qe(
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
    e.emitted[l] = !0, Qe(
      c,
      e,
      6,
      r
    );
  }
}
function Ku(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {};
  return i ? (re(i) ? i.forEach((l) => o[l] = null) : Oe(o, i), me(e) && s.set(e, o), o) : (me(e) && s.set(e, null), null);
}
function ir(e, t) {
  return !e || !qs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), de(e, t[0].toLowerCase() + t.slice(1)) || de(e, dn(t)) || de(e, t));
}
function io(e) {
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
    props: d,
    data: p,
    setupState: x,
    ctx: z,
    inheritAttrs: w
  } = e, j = Is(e);
  let H, L;
  try {
    if (n.shapeFlag & 4) {
      const E = r || s, X = E;
      H = At(
        c.call(
          X,
          E,
          u,
          d,
          x,
          p,
          z
        )
      ), L = l;
    } else {
      const E = t;
      H = At(
        E.length > 1 ? E(
          d,
          { attrs: l, slots: o, emit: a }
        ) : E(
          d,
          null
        )
      ), L = t.props ? l : qu(l);
    }
  } catch (E) {
    on.length = 0, nr(E, e, 1), H = _e(Ee);
  }
  let S = H;
  if (L && w !== !1) {
    const E = Object.keys(L), { shapeFlag: X } = S;
    E.length && X & 7 && (i && E.some(Ys) && (L = Yu(
      L,
      i
    )), S = Ot(S, L, !1, !0));
  }
  if (n.dirs && (S = Ot(S, null, !1, !0), S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const E = rr(S.type) && Ns(S) || S;
    qn(E, n.transition);
  }
  return H = S, Is(j), H;
}
const qu = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || qs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Yu = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ys(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Ju(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: a } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? oo(s, o, c) : !!o;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (Yl(o, s, p) && !ir(c, p))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? oo(s, o, c) : !0 : !!o;
  return !1;
}
function oo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (Yl(t, e, i) && !ir(n, i))
      return !0;
  }
  return !1;
}
function Yl(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && me(s) && me(r) ? !Lt(s, r) : s !== r;
}
function Zu({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Jl = {}, Zl = () => Object.create(Jl), Xl = (e) => Object.getPrototypeOf(e) === Jl;
function Xu(e, t, n, s = !1) {
  const r = {}, i = Zl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ql(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ vu(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Qu(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ oe(r), [a] = e.propsOptions;
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
        let p = u[d];
        if (ir(e.emitsOptions, p))
          continue;
        const x = t[p];
        if (a)
          if (de(i, p))
            x !== i[p] && (i[p] = x, c = !0);
          else {
            const z = Ze(p);
            r[z] = Qr(
              a,
              l,
              z,
              x,
              e,
              !1
            );
          }
        else
          x !== i[p] && (i[p] = x, c = !0);
      }
    }
  } else {
    Ql(e, t, r, i) && (c = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !de(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = dn(d)) === d || !de(t, u))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = Qr(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (i !== l)
      for (const d in i)
        (!t || !de(t, d)) && (delete i[d], c = !0);
  }
  c && kt(e.attrs, "set", "");
}
function Ql(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (jn(a))
        continue;
      const c = t[a];
      let u;
      r && de(r, u = Ze(a)) ? !i || !i.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : ir(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ oe(n), c = l || xe;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = Qr(
        r,
        a,
        d,
        c[d],
        e,
        !de(c, d)
      );
    }
  }
  return o;
}
function Qr(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = de(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && ue(a)) {
        const { propsDefaults: c } = r;
        if (n in c)
          s = c[n];
        else {
          const u = bi(r);
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
    ] && (s === "" || s === dn(n)) && (s = !0));
  }
  return s;
}
function eA(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  if (!i)
    return me(e) && s.set(e, en), en;
  if (re(i))
    for (let c = 0; c < i.length; c++) {
      const u = Ze(i[c]);
      lo(u) && (o[u] = xe);
    }
  else if (i)
    for (const c in i) {
      const u = Ze(c);
      if (lo(u)) {
        const d = i[c], p = o[u] = re(d) || ue(d) ? { type: d } : Oe({}, d), x = p.type;
        let z = !1, w = !0;
        if (re(x))
          for (let j = 0; j < x.length; ++j) {
            const H = x[j], L = ue(H) && H.name;
            if (L === "Boolean") {
              z = !0;
              break;
            } else L === "String" && (w = !1);
          }
        else
          z = ue(x) && x.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = z, p[
          1
          /* shouldCastTrue */
        ] = w, (z || de(p, "default")) && l.push(u);
      }
    }
  const a = [o, l];
  return me(e) && s.set(e, a), a;
}
function lo(e) {
  return e[0] !== "$" && !jn(e);
}
const vi = (e) => e === "_" || e === "_ctx" || e === "$stable", yi = (e) => re(e) ? e.map(At) : [At(e)], tA = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ol((...r) => yi(t(...r)), n);
  return s._c = !1, s;
}, ea = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (vi(r)) continue;
    const i = e[r];
    if (ue(i))
      t[r] = tA(r, i, s);
    else if (i != null) {
      const o = yi(i);
      t[r] = () => o;
    }
  }
}, ta = (e, t) => {
  const n = yi(t);
  e.slots.default = () => n;
}, na = (e, t, n) => {
  for (const s in t)
    (n || !vi(s)) && (e[s] = t[s]);
}, nA = (e, t, n) => {
  const s = e.slots = Zl();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (na(s, t, n), n && hl(s, "_", r, !0)) : ea(t, s);
  } else t && ta(e, t);
}, sA = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = xe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : na(r, t, n) : (i = !t.$stable, ea(t, r)), o = t;
  } else t && (ta(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !vi(l) && o[l] == null && delete r[l];
}, Ne = aA;
function rA(e) {
  return iA(e);
}
function iA(e, t) {
  const n = Xs();
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
    parentNode: d,
    nextSibling: p,
    setScopeId: x = sn,
    insertStaticContent: z
  } = e, w = (m, v, $, P = null, M = null, I = null, V = void 0, B = null, R = !!v.dynamicChildren) => {
    if (m === v)
      return;
    m && !Xt(m, v) && (P = fs(m), q(m, M, I, !0), m = null), v.patchFlag === -2 && (R = !1, v.dynamicChildren = null), v.dynamicChildren && m && m.dynamicChildren && m.dynamicChildren.hasOnce && (v.dynamicChildren === en && (v.dynamicChildren = []), v.dynamicChildren.hasOnce = !0);
    const { type: T, ref: ee, shapeFlag: W } = v;
    switch (T) {
      case or:
        j(m, v, $, P);
        break;
      case Ee:
        H(m, v, $, P);
        break;
      case Sr:
        m == null && L(v, $, P, V);
        break;
      case te:
        D(
          m,
          v,
          $,
          P,
          M,
          I,
          V,
          B,
          R
        );
        break;
      default:
        W & 1 ? X(
          m,
          v,
          $,
          P,
          M,
          I,
          V,
          B,
          R
        ) : W & 6 ? Q(
          m,
          v,
          $,
          P,
          M,
          I,
          V,
          B,
          R
        ) : (W & 64 || W & 128) && T.process(
          m,
          v,
          $,
          P,
          M,
          I,
          V,
          B,
          R,
          $n
        );
    }
    ee != null && M ? Fn(ee, m && m.ref, I, v || m, !v) : ee == null && m && m.ref != null && Fn(m.ref, null, I, m, !0);
  }, j = (m, v, $, P) => {
    if (m == null)
      s(
        v.el = l(v.children),
        $,
        P
      );
    else {
      const M = v.el = m.el;
      v.children !== m.children && c(M, v.children);
    }
  }, H = (m, v, $, P) => {
    m == null ? s(
      v.el = a(v.children || ""),
      $,
      P
    ) : v.el = m.el;
  }, L = (m, v, $, P) => {
    [m.el, m.anchor] = z(
      m.children,
      v,
      $,
      P,
      m.el,
      m.anchor
    );
  }, S = ({ el: m, anchor: v }, $, P) => {
    let M;
    for (; m && m !== v; )
      M = p(m), s(m, $, P), m = M;
    s(v, $, P);
  }, E = ({ el: m, anchor: v }) => {
    let $;
    for (; m && m !== v; )
      $ = p(m), r(m), m = $;
    r(v);
  }, X = (m, v, $, P, M, I, V, B, R) => {
    if (v.type === "svg" ? V = "svg" : v.type === "math" && (V = "mathml"), m == null)
      Y(
        v,
        $,
        P,
        M,
        I,
        V,
        B,
        R
      );
    else {
      const T = m.el && m.el._isVueCE ? m.el : null;
      try {
        T && T._beginPatch(), h(
          m,
          v,
          M,
          I,
          V,
          B,
          R
        );
      } finally {
        T && T._endPatch();
      }
    }
  }, Y = (m, v, $, P, M, I, V, B) => {
    let R, T;
    const { props: ee, shapeFlag: W, transition: J, dirs: ne } = m;
    if (R = m.el = o(
      m.type,
      I,
      ee && ee.is,
      ee
    ), W & 8 ? u(R, m.children) : W & 16 && b(
      m.children,
      R,
      null,
      P,
      M,
      $r(m, I),
      V,
      B
    ), ne && Gt(m, null, P, "created"), O(R, m, m.scopeId, V, P), ee) {
      for (const Ae in ee)
        Ae !== "value" && !jn(Ae) && i(R, Ae, null, ee[Ae], I, P);
      "value" in ee && i(R, "value", null, ee.value, I), (T = ee.onVnodeBeforeMount) && at(T, P, m);
    }
    ne && Gt(m, null, P, "beforeMount");
    const ie = oA(M, J);
    ie && J.beforeEnter(R), s(R, v, $), ((T = ee && ee.onVnodeMounted) || ie || ne) && Ne(() => {
      try {
        T && at(T, P, m), ie && J.enter(R), ne && Gt(m, null, P, "mounted");
      } finally {
      }
    }, M);
  }, O = (m, v, $, P, M) => {
    if ($ && x(m, $), P)
      for (let I = 0; I < P.length; I++)
        x(m, P[I]);
    if (M) {
      let I = M.subTree;
      if (v === I || oa(I.type) && (I.ssContent === v || I.ssFallback === v)) {
        const V = M.vnode;
        O(
          m,
          V,
          V.scopeId,
          V.slotScopeIds,
          M.parent
        );
      }
    }
  }, b = (m, v, $, P, M, I, V, B, R = 0) => {
    for (let T = R; T < m.length; T++) {
      const ee = m[T] = B ? bt(m[T]) : At(m[T]);
      w(
        null,
        ee,
        v,
        $,
        P,
        M,
        I,
        V,
        B
      );
    }
  }, h = (m, v, $, P, M, I, V) => {
    const B = v.el = m.el;
    let { patchFlag: R, dynamicChildren: T, dirs: ee } = v;
    R |= m.patchFlag & 16;
    const W = m.props || xe, J = v.props || xe;
    let ne;
    if ($ && Kt($, !1), (ne = J.onVnodeBeforeUpdate) && at(ne, $, v, m), ee && Gt(v, m, $, "beforeUpdate"), $ && Kt($, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    T && (!m.dynamicChildren || m.dynamicChildren.length !== T.length) && (R = 0, V = !1, T = null), (W.innerHTML && J.innerHTML == null || W.textContent && J.textContent == null) && u(B, ""), T ? g(
      m.dynamicChildren,
      T,
      B,
      $,
      P,
      $r(v, M),
      I
    ) : V || Je(
      m,
      v,
      B,
      null,
      $,
      P,
      $r(v, M),
      I,
      !1
    ), R > 0) {
      if (R & 16)
        N(B, W, J, $, M);
      else if (R & 2 && W.class !== J.class && i(B, "class", null, J.class, M), R & 4 && i(B, "style", W.style, J.style, M), R & 8) {
        const ie = v.dynamicProps;
        for (let Ae = 0; Ae < ie.length; Ae++) {
          const ce = ie[Ae], be = W[ce], we = J[ce];
          (we !== be || ce === "value") && i(B, ce, be, we, M, $);
        }
      }
      R & 1 && m.children !== v.children && u(B, v.children);
    } else !V && T == null && N(B, W, J, $, M);
    ((ne = J.onVnodeUpdated) || ee) && Ne(() => {
      ne && at(ne, $, v, m), ee && Gt(v, m, $, "updated");
    }, P);
  }, g = (m, v, $, P, M, I, V) => {
    for (let B = 0; B < v.length; B++) {
      const R = m[B], T = v[B], ee = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        R.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (R.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xt(R, T) || // - In the case of a component, it could contain anything.
        R.shapeFlag & 198) ? d(R.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          $
        )
      );
      w(
        R,
        T,
        ee,
        null,
        P,
        M,
        I,
        V,
        !0
      );
    }
  }, N = (m, v, $, P, M) => {
    if (v !== $) {
      if (v !== xe)
        for (const I in v)
          !jn(I) && !(I in $) && i(
            m,
            I,
            v[I],
            null,
            M,
            P
          );
      for (const I in $) {
        if (jn(I)) continue;
        const V = $[I], B = v[I];
        V !== B && I !== "value" && i(m, I, B, V, M, P);
      }
      "value" in $ && i(m, "value", v.value, $.value, M);
    }
  }, D = (m, v, $, P, M, I, V, B, R) => {
    const T = v.el = m ? m.el : l(""), ee = v.anchor = m ? m.anchor : l("");
    let { patchFlag: W, dynamicChildren: J, slotScopeIds: ne } = v;
    ne && (B = B ? B.concat(ne) : ne), m == null ? (s(T, $, P), s(ee, $, P), b(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      $,
      ee,
      M,
      I,
      V,
      B,
      R
    )) : W > 0 && W & 64 && J && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === J.length ? (g(
      m.dynamicChildren,
      J,
      $,
      M,
      I,
      V,
      B
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (v.key != null || M && v === M.subTree) && sa(
      m,
      v,
      !0
      /* shallow */
    )) : Je(
      m,
      v,
      $,
      ee,
      M,
      I,
      V,
      B,
      R
    );
  }, Q = (m, v, $, P, M, I, V, B, R) => {
    v.slotScopeIds = B, m == null ? v.shapeFlag & 512 ? M.ctx.activate(
      v,
      $,
      P,
      V,
      R
    ) : ae(
      v,
      $,
      P,
      M,
      I,
      V,
      R
    ) : le(m, v, R);
  }, ae = (m, v, $, P, M, I, V) => {
    const B = m.component = pA(
      m,
      P,
      M
    );
    if (gi(m) && (B.ctx.renderer = $n), hA(B, !1, V), B.asyncDep) {
      if (M && M.registerDep(B, Ie, V), !m.el) {
        const R = B.subTree = _e(Ee);
        H(null, R, v, $), m.placeholder = R.el;
      }
    } else
      Ie(
        B,
        m,
        v,
        $,
        M,
        I,
        V
      );
  }, le = (m, v, $) => {
    const P = v.component = m.component;
    if (Ju(m, v, $))
      if (P.asyncDep && !P.asyncResolved) {
        v.el = m.el, rt(P, v, $);
        return;
      } else
        P.next = v, P.update();
    else
      v.el = m.el, P.vnode = v;
  }, Ie = (m, v, $, P, M, I, V) => {
    const B = () => {
      if (m.isMounted) {
        let { next: W, bu: J, u: ne, parent: ie, vnode: Ae } = m;
        {
          const ot = ra(m);
          if (ot) {
            W && (W.el = Ae.el, rt(m, W, V)), ot.asyncDep.then(() => {
              Ne(() => {
                m.isUnmounted || T();
              }, M);
            });
            return;
          }
        }
        let ce = W, be;
        Kt(m, !1), W ? (W.el = Ae.el, rt(m, W, V)) : W = Ae, J && ws(J), (be = W.props && W.props.onVnodeBeforeUpdate) && at(be, ie, W, Ae), Kt(m, !0);
        const we = io(m), it = m.subTree;
        m.subTree = we, w(
          it,
          we,
          // parent may have changed if it's in a teleport
          d(it.el),
          // anchor may have changed if it's in a fragment
          fs(it),
          m,
          M,
          I
        ), W.el = we.el, ce === null && Zu(m, we.el), ne && Ne(ne, M), (be = W.props && W.props.onVnodeUpdated) && Ne(
          () => at(be, ie, W, Ae),
          M
        );
      } else {
        let W;
        const { el: J, props: ne } = v, { bm: ie, m: Ae, parent: ce, root: be, type: we } = m, it = Rn(v);
        Kt(m, !1), ie && ws(ie), !it && (W = ne && ne.onVnodeBeforeMount) && at(W, ce, v), Kt(m, !0);
        {
          be.ce && be.ce._hasShadowRoot() && be.ce._injectChildStyle(
            we,
            m.parent ? m.parent.type : void 0
          );
          const ot = m.subTree = io(m);
          w(
            null,
            ot,
            $,
            P,
            m,
            M,
            I
          ), v.el = ot.el;
        }
        if (Ae && Ne(Ae, M), !it && (W = ne && ne.onVnodeMounted)) {
          const ot = v;
          Ne(
            () => at(W, ce, ot),
            M
          );
        }
        (v.shapeFlag & 256 || ce && Rn(ce.vnode) && ce.vnode.shapeFlag & 256) && m.a && Ne(m.a, M), m.isMounted = !0, v = $ = P = null;
      }
    };
    m.scope.on();
    const R = m.effect = new vl(B);
    m.scope.off();
    const T = m.update = R.run.bind(R), ee = m.job = R.runIfDirty.bind(R);
    ee.i = m, ee.id = m.uid, R.scheduler = () => mi(ee), Kt(m, !0), T();
  }, rt = (m, v, $) => {
    v.component = m;
    const P = m.vnode.props;
    m.vnode = v, m.next = null, Qu(m, v.props, P, $), sA(m, v.children, $), Dt(), no(m), Ft();
  }, Je = (m, v, $, P, M, I, V, B, R = !1) => {
    const T = m && m.children, ee = m ? m.shapeFlag : 0, W = v.children, { patchFlag: J, shapeFlag: ne } = v;
    if (J > 0) {
      if (J & 128) {
        Wt(
          T,
          W,
          $,
          P,
          M,
          I,
          V,
          B,
          R
        );
        return;
      } else if (J & 256) {
        hn(
          T,
          W,
          $,
          P,
          M,
          I,
          V,
          B,
          R
        );
        return;
      }
    }
    ne & 8 ? (ee & 16 && Ct(T, M, I), W !== T && u($, W)) : ee & 16 ? ne & 16 ? Wt(
      T,
      W,
      $,
      P,
      M,
      I,
      V,
      B,
      R
    ) : Ct(T, M, I, !0) : (ee & 8 && u($, ""), ne & 16 && b(
      W,
      $,
      P,
      M,
      I,
      V,
      B,
      R
    ));
  }, hn = (m, v, $, P, M, I, V, B, R) => {
    m = m || en, v = v || en;
    const T = m.length, ee = v.length, W = Math.min(T, ee);
    let J;
    for (J = 0; J < W; J++) {
      const ne = v[J] = R ? bt(v[J]) : At(v[J]);
      w(
        m[J],
        ne,
        $,
        null,
        M,
        I,
        V,
        B,
        R
      );
    }
    T > ee ? Ct(
      m,
      M,
      I,
      !0,
      !1,
      W
    ) : b(
      v,
      $,
      P,
      M,
      I,
      V,
      B,
      R,
      W
    );
  }, Wt = (m, v, $, P, M, I, V, B, R) => {
    let T = 0;
    const ee = v.length;
    let W = m.length - 1, J = ee - 1;
    for (; T <= W && T <= J; ) {
      const ne = m[T], ie = v[T] = R ? bt(v[T]) : At(v[T]);
      if (Xt(ne, ie))
        w(
          ne,
          ie,
          $,
          null,
          M,
          I,
          V,
          B,
          R
        );
      else
        break;
      T++;
    }
    for (; T <= W && T <= J; ) {
      const ne = m[W], ie = v[J] = R ? bt(v[J]) : At(v[J]);
      if (Xt(ne, ie))
        w(
          ne,
          ie,
          $,
          null,
          M,
          I,
          V,
          B,
          R
        );
      else
        break;
      W--, J--;
    }
    if (T > W) {
      if (T <= J) {
        const ne = J + 1, ie = ne < ee ? v[ne].el : P;
        for (; T <= J; )
          w(
            null,
            v[T] = R ? bt(v[T]) : At(v[T]),
            $,
            ie,
            M,
            I,
            V,
            B,
            R
          ), T++;
      }
    } else if (T > J)
      for (; T <= W; )
        q(m[T], M, I, !0), T++;
    else {
      const ne = T, ie = T, Ae = /* @__PURE__ */ new Map();
      for (T = ie; T <= J; T++) {
        const je = v[T] = R ? bt(v[T]) : At(v[T]);
        je.key != null && Ae.set(je.key, T);
      }
      let ce, be = 0;
      const we = J - ie + 1;
      let it = !1, ot = 0;
      const Sn = new Array(we);
      for (T = 0; T < we; T++) Sn[T] = 0;
      for (T = ne; T <= W; T++) {
        const je = m[T];
        if (be >= we) {
          q(je, M, I, !0);
          continue;
        }
        let lt;
        if (je.key != null)
          lt = Ae.get(je.key);
        else
          for (ce = ie; ce <= J; ce++)
            if (Sn[ce - ie] === 0 && Xt(je, v[ce])) {
              lt = ce;
              break;
            }
        lt === void 0 ? q(je, M, I, !0) : (Sn[lt - ie] = T + 1, lt >= ot ? ot = lt : it = !0, w(
          je,
          v[lt],
          $,
          null,
          M,
          I,
          V,
          B,
          R
        ), be++);
      }
      const Ki = it ? lA(Sn) : en;
      for (ce = Ki.length - 1, T = we - 1; T >= 0; T--) {
        const je = ie + T, lt = v[je], qi = v[je + 1], Yi = je + 1 < ee ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          qi.el || ia(qi)
        ) : P;
        Sn[T] === 0 ? w(
          null,
          lt,
          $,
          Yi,
          M,
          I,
          V,
          B,
          R
        ) : it && (ce < 0 || T !== Ki[ce] ? F(lt, $, Yi, 2) : ce--);
      }
    }
  }, F = (m, v, $, P, M = null) => {
    const { el: I, type: V, transition: B, children: R, shapeFlag: T } = m;
    if (T & 6) {
      F(m.component.subTree, v, $, P);
      return;
    }
    if (T & 128) {
      m.suspense.move(v, $, P);
      return;
    }
    if (T & 64) {
      V.move(m, v, $, $n);
      return;
    }
    if (V === te) {
      s(I, v, $);
      for (let W = 0; W < R.length; W++)
        F(R[W], v, $, P);
      s(m.anchor, v, $);
      return;
    }
    if (V === Sr) {
      S(m, v, $);
      return;
    }
    if (P !== 2 && T & 1 && B)
      if (P === 0)
        B.persisted && !I[He] ? s(I, v, $) : (B.beforeEnter(I), s(I, v, $), Ne(() => B.enter(I), M));
      else {
        const { leave: W, delayLeave: J, afterLeave: ne } = B, ie = () => {
          m.ctx.isUnmounted ? r(I) : s(I, v, $);
        }, Ae = () => {
          const ce = I._isLeaving || !!I[He];
          I._isLeaving && I[He](
            !0
            /* cancelled */
          ), B.persisted && !ce ? ie() : W(I, () => {
            ie(), ne && ne();
          });
        };
        J ? J(I, ie, Ae) : Ae();
      }
    else
      s(I, v, $);
  }, q = (m, v, $, P = !1, M = !1) => {
    const {
      type: I,
      props: V,
      ref: B,
      children: R,
      dynamicChildren: T,
      shapeFlag: ee,
      patchFlag: W,
      dirs: J,
      cacheIndex: ne,
      memo: ie
    } = m;
    if ((W === -2 || T && T.hasOnce) && (M = !1), B != null && (Dt(), Fn(B, null, $, m, !0), Ft()), ne != null && (!m.ctx || m.ctx === v) && (v.renderCache[ne] = void 0), ee & 256) {
      v.ctx.deactivate(m);
      return;
    }
    const Ae = ee & 1 && J, ce = !Rn(m);
    let be;
    if (ce && (be = V && V.onVnodeBeforeUnmount) && at(be, v, m), ee & 6)
      ds(m.component, $, P);
    else {
      if (ee & 128) {
        m.suspense.unmount($, P);
        return;
      }
      Ae && Gt(m, null, v, "beforeUnmount"), ee & 64 ? m.type.remove(
        m,
        v,
        $,
        $n,
        P
      ) : T && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !T.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== te || W > 0 && W & 64) ? Ct(
        T,
        v,
        $,
        !1,
        !0
      ) : (I === te && W & 384 || !M && ee & 16) && Ct(R, v, $), P && G(m);
    }
    const we = ie != null && ne == null;
    (ce && (be = V && V.onVnodeUnmounted) || Ae || we) && Ne(() => {
      be && at(be, v, m), Ae && Gt(m, null, v, "unmounted"), we && (m.el = null);
    }, $);
  }, G = (m) => {
    const { type: v, el: $, anchor: P, transition: M } = m;
    if (v === te) {
      ge($, P);
      return;
    }
    if (v === Sr) {
      E(m), M && !M.persisted && M.afterLeave && M.afterLeave();
      return;
    }
    const I = () => {
      r($), M && !M.persisted && M.afterLeave && M.afterLeave();
    };
    if (m.shapeFlag & 1 && M && !M.persisted) {
      const { leave: V, delayLeave: B } = M, R = () => V($, I);
      B ? B(m.el, I, R) : R();
    } else
      I();
  }, ge = (m, v) => {
    let $;
    for (; m !== v; )
      $ = p(m), r(m), m = $;
    r(v);
  }, ds = (m, v, $) => {
    const { bum: P, scope: M, job: I, subTree: V, um: B, m: R, a: T } = m;
    ao(R), ao(T), P && ws(P), M.stop(), I ? (I.flags |= 8, q(V, m, v, $)) : m.vnode.el && V && (V.transition = m.vnode.transition, q(V, m, v, $)), B && Ne(B, v), Ne(() => {
      m.isUnmounted = !0;
    }, v);
  }, Ct = (m, v, $, P = !1, M = !1, I = 0) => {
    for (let V = I; V < m.length; V++)
      q(m[V], v, $, P, M);
  }, fs = (m) => {
    if (m.shapeFlag & 6)
      return fs(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const v = p(m.anchor || m.el), $ = v && v[ju];
    return $ ? p($) : v;
  };
  let xr = !1;
  const Gi = (m, v, $) => {
    let P;
    m == null ? v._vnode && (q(v._vnode, null, null, !0), P = v._vnode.component) : w(
      v._vnode || null,
      m,
      v,
      null,
      null,
      null,
      $
    ), v._vnode = m, xr || (xr = !0, no(P), Dl(), xr = !1);
  }, $n = {
    p: w,
    um: q,
    m: F,
    r: G,
    mt: ae,
    mc: b,
    pc: Je,
    pbc: g,
    n: fs,
    o: e
  };
  return {
    render: Gi,
    hydrate: void 0,
    createApp: Hu(Gi)
  };
}
function $r({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Kt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function oA(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sa(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (re(s) && re(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = bt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && sa(o, l)), l.type === or && (l.patchFlag === -1 && (l = r[i] = bt(l)), l.el = o.el), l.type === Ee && !l.el && (l.el = o.el);
    }
}
function lA(e) {
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
function ra(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ra(t);
}
function ao(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ia(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ia(t.subTree) : null;
}
const oa = (e) => e.__isSuspense;
function aA(e, t) {
  t && t.pendingBranch ? re(e) ? t.effects.push(...e) : t.effects.push(e) : Mu(e);
}
const te = /* @__PURE__ */ Symbol.for("v-fgt"), or = /* @__PURE__ */ Symbol.for("v-txt"), Ee = /* @__PURE__ */ Symbol.for("v-cmt"), Sr = /* @__PURE__ */ Symbol.for("v-stc"), on = [];
let De = null;
function y(e = !1) {
  on.push(De = e ? null : []);
}
function la() {
  on.pop(), De = on[on.length - 1] || null;
}
let Yn = 1;
function js(e, t = !1) {
  Yn += e, e < 0 && De && t && (De.hasOnce = !0);
}
function aa(e) {
  return e.dynamicChildren = Yn > 0 ? De || en : null, la(), Yn > 0 && De && De.push(e), e;
}
function k(e, t, n, s, r, i) {
  return aa(
    A(
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
function We(e, t, n, s, r) {
  return aa(
    _e(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Ls(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ca = ({ key: e }) => e ?? null, zs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ye(e) || /* @__PURE__ */ Me(e) || ue(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null);
function A(e, t = null, n = null, s = 0, r = null, i = e === te ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ca(t),
    ref: t && zs(t),
    scopeId: Rl,
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
    ctx: Ge
  };
  return l ? (Ds(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ye(n) ? 8 : 16), Yn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  De && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && De.push(a), a;
}
const _e = cA;
function cA(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Bu) && (e = Ee), Ls(e)) {
    const l = Ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ds(l, n), Yn > 0 && !i && De && (l.shapeFlag & 6 ? De[De.indexOf(e)] = l : De.push(l)), l.patchFlag = -2, l;
  }
  if (vA(e) && (e = e.__vccOpts), t) {
    t = uA(t);
    let { class: l, style: a } = t;
    l && !ye(l) && (t.class = se(l)), me(a) && (/* @__PURE__ */ hi(a) && !re(a) && (a = Oe({}, a)), t.style = Qs(a));
  }
  const o = ye(e) ? 1 : oa(e) ? 128 : rr(e) ? 64 : me(e) ? 4 : ue(e) ? 2 : 0;
  return A(
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
function uA(e) {
  return e ? /* @__PURE__ */ hi(e) || Xl(e) ? Oe({}, e) : e : null;
}
function Ot(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e, c = t ? AA(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ca(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? re(i) ? i.concat(zs(t)) : [i, zs(t)] : zs(t)
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
    patchFlag: t && e.type !== te ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Ot(e.ssContent),
    ssFallback: e.ssFallback && Ot(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && qn(
    u,
    a.clone(u)
  ), u;
}
function Le(e = " ", t = 0) {
  return _e(or, null, e, t);
}
function U(e = "", t = !1) {
  return t ? (y(), We(Ee, null, e)) : _e(Ee, null, e);
}
function At(e) {
  return e == null || typeof e == "boolean" ? _e(Ee) : re(e) ? _e(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ls(e) ? bt(e) : _e(or, null, String(e));
}
function bt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ot(e);
}
function Ds(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (re(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ds(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Xl(t) ? t._ctx = Ge : r === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ue(t)) {
    if (s & 65) {
      Ds(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ge }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Le(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function AA(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = se([t.class, s.class]));
      else if (r === "style")
        t.style = Qs([t.style, s.style]);
      else if (qs(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(re(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ys(r) && (t[r] = o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function at(e, t, n, s = null) {
  Qe(e, t, 7, [
    n,
    s
  ]);
}
const dA = ql();
let fA = 0;
function pA(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || dA, i = {
    uid: fA++,
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
    scope: new eu(
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
    propsOptions: eA(s, r),
    emitsOptions: Ku(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: xe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: xe,
    data: xe,
    props: xe,
    attrs: xe,
    slots: xe,
    refs: xe,
    setupState: xe,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Gu.bind(null, i), e.ce && e.ce(i), i;
}
let Bt = null;
const ua = () => Bt || Ge;
let Fs, Jn;
{
  const e = Xs(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Fs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Bt = n
  ), Jn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Zn = n
  );
}
const bi = (e) => {
  const t = Bt;
  return Fs(e), e.scope.on(), () => {
    e.scope.off(), Fs(t);
  };
}, co = () => {
  Bt && Bt.scope.off(), Fs(null);
};
function Aa(e) {
  return e.vnode.shapeFlag & 4;
}
let Zn = !1;
function hA(e, t = !1, n = !1) {
  t && Jn(t);
  const { props: s, children: r } = e.vnode, i = Aa(e);
  Xu(e, s, i, t), nA(e, r, n || t);
  const o = i ? mA(e, t) : void 0;
  return t && Jn(!1), o;
}
function mA(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Vu);
  const { setup: s } = n;
  if (s) {
    Dt();
    const r = e.setupContext = s.length > 1 ? xA(e) : null, i = bi(e), o = ls(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Al(o);
    if (Ft(), i(), (l || e.sp) && !Rn(e) && Ru(e), l) {
      if (o.then(co, co), t)
        return o.then((a) => {
          Jn(!0);
          try {
            uo(e, a, t);
          } finally {
            Jn(!1);
          }
        }).catch((a) => {
          nr(a, e, 0);
        });
      e.asyncDep = o;
    } else
      uo(e, o);
  } else
    da(e);
}
function uo(e, t, n) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) && (e.setupState = Nl(t)), da(e);
}
function da(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || sn);
}
const gA = {
  get(e, t) {
    return Se(e, "get", ""), e[t];
  }
};
function xA(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, gA),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function lr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nl(yu(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in On)
        return On[n](e);
    },
    has(t, n) {
      return n in t || n in On;
    }
  })) : e.proxy;
}
function vA(e) {
  return ue(e) && "__vccOpts" in e;
}
const K = (e, t) => /* @__PURE__ */ _u(e, t, Zn);
function yA(e, t, n) {
  try {
    js(-1);
    const s = arguments.length;
    return s === 2 ? me(t) && !re(t) ? Ls(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Ls(n) && (n = [n]), _e(e, t, n));
  } finally {
    js(1);
  }
}
const bA = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ei;
const Ao = typeof window < "u" && window.trustedTypes;
if (Ao)
  try {
    ei = /* @__PURE__ */ Ao.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const fa = ei ? (e) => ei.createHTML(e) : (e) => e, kA = "http://www.w3.org/2000/svg", wA = "http://www.w3.org/1998/Math/MathML", yt = typeof document < "u" ? document : null, fo = yt && /* @__PURE__ */ yt.createElement("template"), zA = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? yt.createElementNS(kA, e) : t === "mathml" ? yt.createElementNS(wA, e) : n ? yt.createElement(e, { is: n }) : yt.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => yt.createTextNode(e),
  createComment: (e) => yt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => yt.querySelector(e),
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
      fo.innerHTML = fa(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = fo.content;
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
}, Et = "transition", Mn = "animation", Xn = /* @__PURE__ */ Symbol("_vtc"), pa = {
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
}, _A = /* @__PURE__ */ Oe(
  {},
  Bl,
  pa
), $A = (e) => (e.displayName = "Transition", e.props = _A, e), SA = /* @__PURE__ */ $A(
  (e, { slots: t }) => yA(Fu, CA(e), t)
), qt = (e, t = []) => {
  re(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, po = (e) => e ? re(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function CA(e) {
  const t = {};
  for (const D in e)
    D in pa || (t[D] = e[D]);
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
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: x = `${n}-leave-to`
  } = e, z = EA(r), w = z && z[0], j = z && z[1], {
    onBeforeEnter: H,
    onEnter: L,
    onEnterCancelled: S,
    onLeave: E,
    onLeaveCancelled: X,
    onBeforeAppear: Y = H,
    onAppear: O = L,
    onAppearCancelled: b = S
  } = t, h = (D, Q, ae, le) => {
    D._enterCancelled = le, Yt(D, Q ? u : l), Yt(D, Q ? c : o), ae && ae();
  }, g = (D, Q) => {
    D._isLeaving = !1, Yt(D, d), Yt(D, x), Yt(D, p), Q && Q();
  }, N = (D) => (Q, ae) => {
    const le = D ? O : L, Ie = () => h(Q, D, ae);
    qt(le, [Q, Ie]), ho(() => {
      Yt(Q, D ? a : i), vt(Q, D ? u : l), po(le) || mo(Q, s, w, Ie);
    });
  };
  return Oe(t, {
    onBeforeEnter(D) {
      qt(H, [D]), vt(D, i), vt(D, o);
    },
    onBeforeAppear(D) {
      qt(Y, [D]), vt(D, a), vt(D, c);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(D, Q) {
      D._isLeaving = !0;
      const ae = () => g(D, Q);
      vt(D, d), D._enterCancelled ? (vt(D, p), vo(D)) : (vo(D), vt(D, p)), ho(() => {
        D._isLeaving && (Yt(D, d), vt(D, x), po(E) || mo(D, s, j, ae));
      }), qt(E, [D, ae]);
    },
    onEnterCancelled(D) {
      h(D, !1, void 0, !0), qt(S, [D]);
    },
    onAppearCancelled(D) {
      h(D, !0, void 0, !0), qt(b, [D]);
    },
    onLeaveCancelled(D) {
      g(D), qt(X, [D]);
    }
  });
}
function EA(e) {
  if (e == null)
    return null;
  if (me(e))
    return [Cr(e.enter), Cr(e.leave)];
  {
    const t = Cr(e);
    return [t, t];
  }
}
function Cr(e) {
  return Hc(e);
}
function vt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Xn] || (e[Xn] = /* @__PURE__ */ new Set())).add(t);
}
function Yt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Xn];
  n && (n.delete(t), n.size || (e[Xn] = void 0));
}
function ho(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let MA = 0;
function mo(e, t, n, s) {
  const r = e._endId = ++MA, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: a } = TA(e, t);
  if (!o)
    return s();
  const c = o + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, p), i();
  }, p = (x) => {
    x.target === e && ++u >= a && d();
  };
  setTimeout(() => {
    u < a && d();
  }, l + 1), e.addEventListener(c, p);
}
function TA(e, t) {
  const n = window.getComputedStyle(e), s = (z) => (n[z] || "").split(", "), r = s(`${Et}Delay`), i = s(`${Et}Duration`), o = go(r, i), l = s(`${Mn}Delay`), a = s(`${Mn}Duration`), c = go(l, a);
  let u = null, d = 0, p = 0;
  t === Et ? o > 0 && (u = Et, d = o, p = i.length) : t === Mn ? c > 0 && (u = Mn, d = c, p = a.length) : (d = Math.max(o, c), u = d > 0 ? o > c ? Et : Mn : null, p = u ? u === Et ? i.length : a.length : 0);
  const x = u === Et && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Et}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: p,
    hasTransform: x
  };
}
function go(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => xo(n) + xo(e[s])));
}
function xo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function vo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function IA(e, t, n) {
  const s = e[Xn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const yo = /* @__PURE__ */ Symbol("_vod"), NA = /* @__PURE__ */ Symbol("_vsh"), PA = /* @__PURE__ */ Symbol(""), jA = /(?:^|;)\s*display\s*:/;
function LA(e, t, n) {
  const s = e.style, r = ye(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ye(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Nn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Nn(s, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? FA(
        e,
        o,
        !ye(t) && t ? t[o] : void 0,
        l
      ) || Nn(s, o, l) : Nn(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[PA];
      o && (n += ";" + o), s.cssText = n, i = jA.test(n);
    }
  } else t && e.removeAttribute("style");
  yo in e && (e[yo] = i ? s.display : "", e[NA] && (s.display = "none"));
}
const gs = /\s*!important$/;
function Nn(e, t, n) {
  if (re(n))
    n.forEach((s) => Nn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    gs.test(n) ? e.setProperty(t, n.replace(gs, ""), "important") : e.setProperty(t, n);
  else {
    const s = DA(e, t);
    gs.test(n) ? e.setProperty(
      dn(s),
      n.replace(gs, ""),
      "important"
    ) : e[s] = n;
  }
}
const bo = ["Webkit", "Moz", "ms"], Er = {};
function DA(e, t) {
  const n = Er[t];
  if (n)
    return n;
  let s = Ze(t);
  if (s !== "filter" && s in e)
    return Er[t] = s;
  s = pl(s);
  for (let r = 0; r < bo.length; r++) {
    const i = bo[r] + s;
    if (i in e)
      return Er[t] = i;
  }
  return t;
}
function FA(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ye(s) && n === s;
}
const ko = "http://www.w3.org/1999/xlink";
function wo(e, t, n, s, r, i = Jc(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ko, t.slice(6, t.length)) : e.setAttributeNS(ko, t, n) : n == null || i && !ml(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : pt(n) ? String(n) : n
  );
}
function zo(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? fa(n) : n);
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
    l === "boolean" ? n = ml(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Qt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function RA(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const _o = /* @__PURE__ */ Symbol("_vei");
function OA(e, t, n, s, r = null) {
  const i = e[_o] || (e[_o] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = UA(t);
    if (s) {
      const c = i[t] = GA(
        s,
        r
      );
      Qt(e, l, c, a);
    } else o && (RA(e, l, o, a), i[t] = void 0);
  }
}
const BA = /(Once|Passive|Capture)$/, VA = /^on:?(?:Once|Passive|Capture)$/;
function UA(e) {
  let t, n;
  for (; (n = e.match(BA)) && !VA.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : dn(e.slice(2)), t];
}
let Mr = 0;
const HA = /* @__PURE__ */ Promise.resolve(), WA = () => Mr || (HA.then(() => Mr = 0), Mr = Date.now());
function GA(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const r = n.value;
    if (re(r)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const o = r.slice(), l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const c = o[a];
        c && Qe(
          c,
          t,
          5,
          l
        );
      }
    } else
      Qe(
        r,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = WA(), n;
}
const $o = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, KA = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? IA(e, s, o) : t === "style" ? LA(e, n, s) : qs(t) ? Ys(t) || OA(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qA(e, t, s, o)) ? (zo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && wo(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (YA(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ye(s))) ? zo(e, Ze(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), wo(e, t, s, o));
};
function qA(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $o(t) && ue(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return $o(t) && ye(n) ? !1 : t in e;
}
function YA(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ze(t);
  return Array.isArray(n) ? n.some((r) => Ze(r) === s) : Object.keys(n).some((r) => Ze(r) === s);
}
const Rs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return re(t) ? (n) => ws(t, n) : t;
};
function JA(e) {
  e.target.composing = !0;
}
function So(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const tn = /* @__PURE__ */ Symbol("_assign"), xs = /* @__PURE__ */ Symbol("_initialValue");
function Tr(e, t, n) {
  return t && (e = e.trim()), n && (e = Zs(e)), e;
}
const It = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[xs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[xs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[tn] = Rs(r);
    const i = s || r.props && r.props.type === "number";
    Qt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[tn](Tr(e.value, n, i));
    }), (n || i) && Qt(e, "change", () => {
      e.value = Tr(e.value, n, i);
    }), t || (Qt(e, "compositionstart", JA), Qt(e, "compositionend", So), Qt(e, "change", So));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const r = t ?? "", i = e[xs];
    delete e[xs], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[tn](Tr(e.value, n, s)) : e.value = r;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[tn] = Rs(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Zs(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a);
  }
}, ha = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, Qt(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? Zs(Os(a)) : Os(a)
      ), i = e.multiple, o = i ? ln(e._modelValue) ? new Set(r) : r : r[0], l = e._pendingValue = [
        i,
        i ? re(o) ? r.slice() : r : o
      ];
      try {
        e[tn](o);
      } finally {
        jl(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[tn] = Rs(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Co(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[tn] = Rs(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !ZA(t, n[1], n[0])) && Co(e, t);
  }
};
function ZA(e, t, n) {
  if (!n || re(e)) return Lt(e, t);
  if (ln(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Co(e, t) {
  const n = e.multiple, s = re(t);
  if (!(n && !s && !ln(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r], l = Os(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? o.selected = t.some((c) => String(c) === String(l)) : o.selected = Qc(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Lt(Os(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Os(e) {
  return "_value" in e ? e._value : e.value;
}
const XA = ["ctrl", "shift", "alt", "meta"], QA = {
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
  exact: (e, t) => XA.some((n) => e[`${n}Key`] && !t.includes(n))
}, ed = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = QA[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, td = /* @__PURE__ */ Oe({ patchProp: KA }, zA);
let Eo;
function nd() {
  return Eo || (Eo = rA(td));
}
const sd = ((...e) => {
  const t = nd().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = id(s);
    if (!r) return;
    const i = t._component;
    !ue(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, rd(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function rd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function id(e) {
  return ye(e) ? document.querySelector(e) : e;
}
const od = "zhonglou", ld = "钟楼", ad = "1.6.0", cd = "S", ud = 10, Ad = "【副本进行中：钟楼】", dd = [], fd = { briefingName: "钟楼" }, pd = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, hd = { type: "nights", template: "剩余{n}夜" }, md = "至第四日日出", gd = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], xd = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", vd = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], yd = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], bd = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], kd = [{ id: "M1", q: "第一夜的值班签会抽中主播吗", yes: "会", no: "不会", p: 0.1, by: "d1", judge: "第一日日落的抽签结果是{{user}}本人当夜值班" }, { id: "M2", q: "塔里会出人命吗", yes: "会", no: "不会", p: 0.5, judge: "有人死于他人之手，系统宣布钟楼停摆、开启审判" }, { id: "M3", q: "主播会亲手摇响大钟吗", yes: "会", no: "不会", p: 0.35, judge: "{{user}}本人在4F机房摇动曲柄，让大钟鸣响" }], wd = [{ title: "游玩说明", md: `## 副本概况

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
- 1F文具柜：一沓纸、两支铅笔，是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], zd = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], _d = {
  id: od,
  name: ld,
  version: ad,
  level: cd,
  players: ud,
  token: Ad,
  legacyKeys: dd,
  detect: fd,
  time: pd,
  remaining: hd,
  deadline: md,
  roles: gd,
  rolesNote: xd,
  stateFields: vd,
  phases: yd,
  events: bd,
  markets: kd,
  docs: wd,
  danmaku: zd
}, $d = "jingjie", Sd = "境界游乐园", Cd = "1.2.0", Ed = "A", Md = "【副本进行中：境界游乐园】", Td = [], Id = { briefingName: "境界游乐园" }, Nd = { type: "none" }, Pd = { type: "fromPanel" }, jd = [], Ld = [], Dd = [{ id: "M1", q: "15:30演出时主播会回头吗", yes: "会", no: "不会", p: 0.3, judge: "15:30表演区演出期间，{{user}}本人回头了" }, { id: "M2", q: "主播会坐上摩天轮吗", yes: "会", no: "不会", p: 0.55, judge: "{{user}}本人乘坐了摩天轮" }, { id: "M3", q: "主播会走进镜宫吗", yes: "会", no: "不会", p: 0.45, judge: "{{user}}本人进入了镜宫" }], Fd = [{ title: "游客须知", md: `## 《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], Rd = {
  id: $d,
  name: Sd,
  version: Cd,
  level: Ed,
  token: Md,
  legacyKeys: Td,
  detect: Id,
  time: Nd,
  remaining: Pd,
  phases: jd,
  events: Ld,
  markets: Dd,
  docs: Fd
}, Od = "kaoshi", Bd = "考试", Vd = "1.1.0", Ud = "A", Hd = "【副本进行中：考试】", Wd = [], Gd = { briefingName: "考试" }, Kd = { type: "countdown", minutesPerRound: 3 }, qd = { type: "fromPanel" }, Yd = "至考试结束", Jd = [{ id: "main", name: "考试", cap: 100, next: null }], Zd = [], Xd = [], Qd = {
  id: Od,
  name: Bd,
  version: Vd,
  level: Ud,
  token: Hd,
  legacyKeys: Wd,
  detect: Gd,
  time: Kd,
  remaining: qd,
  deadline: Yd,
  phases: Jd,
  events: Zd,
  docs: Xd
}, ef = "xiyan", tf = "喜宴", nf = "1.2.0", sf = "D", rf = "【副本进行中：喜宴】", of = [], lf = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, af = { type: "countdown", minutesPerRound: 3 }, cf = { type: "fromPanel" }, uf = "至天亮", Af = [{ id: "main", name: "喜宴", cap: 160, next: null }], df = [], ff = [{ id: "M1", q: "主播会穿上喜服吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人穿上了喜服" }, { id: "M2", q: "这场婚礼的新人会是主播吗", yes: "是", no: "不是", p: 0.17, judge: "{{user}}被认定为这场婚礼的新郎或新娘", judgeNo: "{{user}}以外的某个人被认定为这场婚礼的新郎或新娘" }, { id: "M3", q: "天亮前会有人死吗", yes: "会", no: "不会", p: 0.4, judge: "有人死亡" }], pf = [], hf = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], mf = {
  id: ef,
  name: tf,
  version: nf,
  level: sf,
  token: rf,
  legacyKeys: of,
  detect: lf,
  time: af,
  remaining: cf,
  deadline: uf,
  phases: Af,
  events: df,
  markets: ff,
  docs: pf,
  danmaku: hf
}, gf = "youxi", xf = "游戏", vf = "1.2.0", yf = "C", bf = "【副本进行中：游戏】", kf = [], wf = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, zf = { type: "countdown", minutesPerRound: 8 }, _f = { type: "fromPanel" }, $f = "至结算", Sf = [{ id: "main", name: "游戏", cap: 90, next: null }], Cf = [], Ef = [{ id: "M1", q: "第一个出局的会是主播吗", yes: "是", no: "不是", p: 0.08, judge: "第一个被淘汰出局的人是{{user}}", judgeNo: "{{user}}以外的某个人成为第一个被淘汰出局的人" }, { id: "M2", q: "三场游戏能全部玩完吗", yes: "能", no: "不能", p: 0.55, judge: "第三场游戏结束" }, { id: "M3", q: "喊数抱团时主播会拉陌生人吗", yes: "会", no: "不会", p: 0.5, judge: "喊数抱团时，{{user}}主动拉了自己同伴以外的人一起抱团" }], Mf = [], Tf = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], If = {
  id: gf,
  name: xf,
  version: vf,
  level: yf,
  token: bf,
  legacyKeys: kf,
  detect: wf,
  time: zf,
  remaining: _f,
  deadline: $f,
  phases: Sf,
  events: Cf,
  markets: Ef,
  docs: Mf,
  danmaku: Tf
}, Nf = "wuming", Pf = "污名", jf = "1.1.0", Lf = "B", Df = "4-8", Ff = "【副本进行中：污名】", Rf = ["污名"], Of = { briefingName: "污名" }, Bf = { type: "countdown", minutesPerRound: 3 }, Vf = { type: "countdown", template: "剩余{m}分钟" }, Uf = "至收播", Hf = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], Wf = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], Gf = [], Kf = !0, qf = {
  id: Nf,
  name: Pf,
  version: jf,
  level: Lf,
  players: Df,
  token: Ff,
  legacyKeys: Rf,
  detect: Of,
  time: Bf,
  remaining: Vf,
  deadline: Uf,
  phases: Hf,
  events: Wf,
  docs: Gf,
  disableLive: Kf
}, Yf = "dusongshu", Jf = "杜松树", Zf = "1.3.0", Xf = "A", Qf = 6, ep = "【副本进行中：杜松树】", tp = [], np = { briefingName: "杜松树" }, sp = { type: "countdown", minutesPerRound: 30 }, rp = { type: "fromPanel" }, ip = "至第四日日出", op = ["父亲", "继母", "玛琳", "男孩", "其余"], lp = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", ap = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], cp = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], up = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], Ap = [{ id: "M1", q: "第一夜会有人死在苹果箱里吗", yes: "会", no: "不会", p: 0.5, by: "n1", judge: "有人在苹果箱里被箱盖压死或死在箱中" }, { id: "M2", q: "主播会吃下锅里的炖肉吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人吃了灶上铁锅里炖的肉" }, { id: "M3", q: "杜松树上的鸟会开口吗", yes: "会", no: "不会", p: 0.6, judge: "杜松树上那只红绿羽毛的鸟开口说话或唱歌" }], dp = [{ title: "游玩说明", md: `## 副本概况

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
鸟飞到金匠那里唱歌，金匠送给它一条金链子；飞到鞋匠那里唱歌，鞋匠送给它一双红鞋子；飞到磨坊那里唱歌，磨坊工送给它一块磨盘。` }], fp = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], pp = {
  id: Yf,
  name: Jf,
  version: Zf,
  level: Xf,
  players: Qf,
  token: ep,
  legacyKeys: tp,
  detect: np,
  time: sp,
  remaining: rp,
  deadline: ip,
  roles: op,
  rolesNote: lp,
  phases: ap,
  events: cp,
  stateFields: up,
  markets: Ap,
  docs: dp,
  danmaku: fp
}, hp = "nongxian", mp = "农闲", gp = "1.2.0", xp = "D", vp = !0, yp = "不限", bp = "【副本进行中：农闲】", kp = [], wp = { briefingName: "农闲" }, zp = { type: "none" }, _p = { type: "fromPanel" }, $p = [], Sp = [], Cp = [{ title: "游玩说明", md: `## 系统简报

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
  梅姨教新菜，会添在配方板上。` }], Ep = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], Mp = {
  id: hp,
  name: mp,
  version: gp,
  level: xp,
  rest: vp,
  players: yp,
  token: bp,
  legacyKeys: kp,
  detect: wp,
  time: zp,
  remaining: _p,
  phases: $p,
  events: Sp,
  docs: Cp,
  danmaku: Ep
}, Tp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function xn(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const Ip = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function Mo(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(Ip)) {
    const r = Number(s[1]), i = s[2];
    n = !0, i === "天" ? t += r * 1440 : i === "小时" || i === "个小时" || i === "h" || i === "H" ? t += r * 60 : t += r;
  }
  return n ? Math.round(t) : null;
}
function ma(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: Mo(t), total: n === void 0 ? null : Mo(n) };
}
function Np(e, t) {
  return e.phases.find((n) => n.id === t);
}
function Qn(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); )
    n.push(r), s.add(r.id), r = Np(e, r.next);
  return n;
}
function ga(e, t) {
  return Qn(e, t).filter((n) => n.night).length;
}
function Pp(e, t, n) {
  if (Qn(e, t).some((r) => r.id === n.id)) return t;
  const s = e.phases[0];
  return s && Qn(e, s).some((r) => r.id === n.id) ? s : n;
}
function Ir(e, t, n, s, r) {
  if (!e.phases.length || !e.phases.some((d) => d.id === t.id)) return;
  let i = Qn(e, n), o = i.findIndex((d) => d.id === t.id);
  o < 0 && (i = Qn(e, t), o = 0);
  const l = i.reduce((d, p) => d + Math.max(0, p.cap), 0), a = Math.max(0, t.cap - s) + i.slice(o + 1).reduce((d, p) => d + Math.max(0, p.cap), 0), c = t.deadline ?? i[0].deadline ?? e.deadline, u = { x: a, y: l, deadline: c };
  if (e.time.type === "countdown") {
    const d = e.time.minutesPerRound, p = e.time.totalMinutes, x = p && p > 0 ? p : l * d;
    let z = p && p > 0 && l > 0 ? Math.round(x * a / l) : a * d;
    const w = ma(r).remaining;
    w !== null && (z = Math.min(z, w - d)), z = Math.max(0, z), Object.assign(u, { minutes: z, total: x, text: `约剩${xn(z)}/${xn(x)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) u.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const d = e.remaining.template.replace("{n}", String(ga(e, t)));
      u.text = c ? `${c}·${d}` : d;
    } else c && (u.text = c);
  return u;
}
const es = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function xa(e, t, n = es) {
  const s = e ?? "", r = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), i = r ? Math.max(1, Number(r[1])) : Math.max(1, Math.round(n[t] ?? es[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: i };
  const l = Number(o[1]), a = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return a <= 0 ? { rounds: i } : { rounds: i, totalMinutes: a, minutesPerRound: Math.max(1, Math.round(a / i)) };
}
const Bs = "generic", ti = [_d, Rd, Qd, mf, If, qf, pp, Mp], jp = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(Tp)
  }
};
function Lp(e, t) {
  const n = jp[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const va = ["D", "C", "B", "A", "S"];
function ya(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Bs && t.push(`id 不能是保留字 ${Bs}`), va.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((c) => typeof c != "string")) && t.push("detect.patterns 必须是文本数组");
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
        for (const p of ["id", "q", "yes", "no", "judge"])
          (typeof u[p] != "string" || !u[p].trim()) && t.push(`markets[${d}] 缺少文本字段 ${p}`);
        (typeof u.p != "number" || !(u.p >= 0.01 && u.p <= 0.99)) && t.push(`markets[${d}].p 必须是 0.01–0.99 的数`), u.judgeNo !== void 0 && (typeof u.judgeNo != "string" || !u.judgeNo.trim()) && t.push(`markets[${d}].judgeNo 必须是文本`), u.by !== void 0 && typeof u.by != "string" && t.push(`markets[${d}].by 必须是阶段 id`), typeof u.id == "string" && (c.has(u.id) && t.push(`事件盘 id 重复：${u.id}`), c.add(u.id));
      });
    }
  return t;
}
function Dp(e) {
  const t = new Set(e.phases.map((n) => n.id));
  return (e.markets ?? []).filter((n) => n.by !== void 0 && !t.has(n.by) ? (console.warn(`[rlzc] 副本包 ${e.id} 的事件盘 ${n.id}：by「${n.by}」不是本包的阶段 id，已跳过`), !1) : !0);
}
function ki(e) {
  return va.includes(e.level ?? "") ? e.level : "D";
}
function ba(e, t = es) {
  const n = ki(e), s = xa(e.limit, n, t), r = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, i = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / r)) : void 0;
  return {
    id: Bs,
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
function wi(e) {
  const t = new Set(ti.map((n) => n.id));
  return [...ti, ...e.filter((n) => !t.has(n.id))];
}
const Fp = /副本简报[^\S\n]*(?:——|[-－—：:·・])[^\S\n]*([^\n」』]*)/, Rp = /<阶段切换>([\s\S]*?)<\/阶段切换>/, Op = /<副本结算>([\s\S]*?)<\/副本结算>/, ka = /<副本>([\s\S]*?)<\/副本>/, Bp = /<角色登记>([\s\S]*?)<\/角色登记>/, Vp = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, Up = /<积分变动>([\s\S]*?)<\/积分变动>/g, Hp = "《「『【", Wp = "》」』】";
function Gp(e) {
  let t = e.trim();
  for (; ; ) {
    const n = t;
    if (Hp.includes(t[0] ?? "\0") && (t = t.slice(1).trim()), Wp.includes(t[t.length - 1] ?? "\0") && (t = t.slice(0, -1).trim()), t === n) return t;
  }
}
function Kp(e) {
  const t = e.charCodeAt(0);
  return t >= 65281 && t <= 65374 ? String.fromCharCode(t - 65248) : e;
}
function wa(e) {
  const t = Fp.exec(e ?? ""), n = t ? Gp(t[1]) : "";
  if (!t || !n) return null;
  const s = { name: n }, r = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (a) => {
    const c = new RegExp(`${a}\\s*[：:]\\s*([^」』\\n]+)`).exec(r);
    return c ? c[1].trim() : void 0;
  }, o = i("等级"), l = o && /[DCBASｄｃｂａｓＤＣＢＡＳ]/i.exec(o);
  return l && (s.level = Kp(l[0]).toUpperCase()), s.goal = i("目标"), s.limit = i("时限"), s.players = i("人数"), s;
}
function qp(e) {
  const t = Rp.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function za(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const r = n.slice(0, s).trim(), i = n.slice(s + 1).trim();
    r && (t[r] = i);
  }
  return t;
}
function ar(e) {
  const t = Op.exec(e ?? "");
  if (!t) return null;
  const n = za(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function _a(e) {
  const t = Bp.exec(e ?? "");
  if (!t) return null;
  const n = za(t[1]);
  return Object.keys(n).length ? n : null;
}
function vs(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function $a(e) {
  const t = ka.exec(e ?? "");
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
      l === "时限" ? (n.limit = a, s = null) : l === "进度条" ? (n.progressBar = a, s = null) : l === "任务" ? (vs(a) && n.tasks.push(vs(a)), s = "tasks") : (n.ps = a, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(i)) {
      s = null;
      continue;
    }
    s === "tasks" ? vs(i) && n.tasks.push(vs(i)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${i}` : i);
  }
  return n;
}
function Yp(e) {
  const t = Vp.exec(e ?? "");
  return t ? t[2] : null;
}
function Nr(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (n(r)) return r;
    s.add(r.id), r = r.next ? e.phases.find((i) => i.id === r.next) : void 0;
  }
  return null;
}
function Jp(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const r = (l) => !!l.clock && !l.night;
  let i = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      i = Nr(e, t, r), o = i?.cap ?? 0;
      break;
    case "晚饭":
      i = Nr(e, t, r), i && (o = Math.ceil(i.cap * 0.75), i.id === t.id && o <= n && (o = i.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      i = Nr(e, t, (l) => !!l.night), o = i?.cap ?? 0;
      break;
  }
  return !i || i.id === t.id && o <= n + 1 ? null : { phase: i.id, round: o, label: `${i.name}第${o}轮` };
}
const Zp = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Xp(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function Pr(e, t) {
  const n = Xp(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const jr = /* @__PURE__ */ new Map();
function Qp(e, t) {
  const n = `${e}\0${t}`;
  if (!jr.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (r) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, r);
    }
    jr.set(n, s);
  }
  return jr.get(n);
}
function eh(e, t) {
  const n = String(e ?? ""), s = (l, a) => l ? { signal: a, pack: l, info: { name: l.name, level: l.level } } : null, r = wa(n);
  if (r)
    return { signal: 1, pack: t.find((a) => a.detect.briefingName === r.name), info: r };
  const i = ka.exec(n);
  if (i) {
    const l = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(i[1]), a = l && s(Pr(t, l[1]), 2);
    if (a) return a;
  }
  for (const l of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const a = s(Pr(t, l[1]), 3);
    if (a) return a;
  }
  const o = Zp.exec(n);
  if (o) {
    for (const l of o[1].split(`
`))
      if (l.includes("地点"))
        for (const a of l.matchAll(/副本《([^》]+)》/g)) {
          const c = s(Pr(t, a[1]), 4);
          if (c) return c;
        }
  }
  for (const l of t)
    for (const a of l.detect.patterns ?? []) {
      const c = Qp(l.id, a);
      if (c && c.test(n)) return s(l, 5);
    }
  return null;
}
const To = 5, th = { id: "_open", name: "进行中", cap: 0, next: null };
function Re(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function nh(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function Sa(e, t, n) {
  const s = nh(e) + Math.max(0, n - 1) * t, r = Math.floor(s / 60) % 24, i = (s % 60 + 60) % 60;
  return `${r % 12 === 0 ? 12 : r % 12}:${String(i).padStart(2, "0")}`;
}
function Io(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return Sa(e.time.dayStart, e.time.minutesPerRound, n);
}
function Ca(e) {
  return e.phases.length ? e.phases : [th];
}
function _s(e, t) {
  return Ca(e).find((n) => n.id === t);
}
function No(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (r.id === n) return !0;
    s.add(r.id), r = _s(e, r.next);
  }
  return !1;
}
function Po(e, t, n, s) {
  const r = n + 1, i = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > r) {
      let l = i.map((c, u) => ({ e: c, i: u })).filter(({ e: c }) => c.from >= r && c.from <= o).sort((c, u) => c.e.from - u.e.from || c.i - u.i).map(({ e: c }) => c), a = o;
      return l.length > To && (a = l[To - 1].from, l = l.filter((c) => c.from <= a)), { phase: t, round: a, events: l, skipFrom: r };
    }
  }
  return { phase: t, round: r, events: i.filter((o) => o.from === r) };
}
function Ea(e, t, n) {
  const s = t.entryIndex;
  if (!Re(e[s])) return null;
  const r = Ca(n);
  let i = r[0], o = r[0], l = 0, a, c = !1, u, d, p = null, x, z, w;
  const j = /* @__PURE__ */ new Set(), H = {}, L = {}, S = /* @__PURE__ */ new Map();
  for (const Q of t.manual ?? [])
    S.has(Q.atIndex) || S.set(Q.atIndex, []), S.get(Q.atIndex).push(Q);
  const E = (Q, ae) => {
    L[i.id] === void 0 && Q.id !== i.id && (L[i.id] = ae), n.phases.length && (o = Pp(n, o, Q)), i = Q, l = 0, p && !No(n, i, p.phase) && (p = null);
  };
  for (let Q = s; Q < e.length; Q++) {
    const ae = e[Q];
    if (!c && Re(ae)) {
      const le = Po(n, i, l, p);
      l = le.round;
      const Ie = new Set((ae.extra?.rlzc?.skippedEvents ?? []).map((F) => F.id));
      le.events.forEach((F) => {
        Ie.has(F.id) || j.add(F.id);
      }), H[Q] = {
        phase: i.id,
        round: l,
        events: le.events.map((F) => F.id),
        skipFrom: le.skipFrom,
        limit: Ir(n, i, o, l, a)
      }, p && i.id === p.phase && l >= p.round && (p = null);
      const rt = String(ae.mes ?? ""), Je = $a(rt);
      Je && (z = Je), a = Je?.limit;
      const hn = _a(rt);
      hn && (w = hn);
      const Wt = ar(rt);
      if (Wt)
        c = !0, u = "tag", d = Q, x = Wt;
      else {
        const F = qp(rt), q = F ? r.find((G) => G.name === F) : void 0;
        if (q && n.phases.length)
          E(q, Q);
        else if (i.cap > 0 && l >= i.cap && i.next) {
          const G = _s(n, i.next);
          G && E(G, Q);
        }
      }
    }
    for (const le of S.get(Q) ?? []) {
      if (c) break;
      switch (le.kind) {
        case "skip": {
          p = _s(n, le.targetPhase) && No(n, i, le.targetPhase) ? { phase: le.targetPhase, round: le.targetRound } : null;
          break;
        }
        case "setPhase": {
          const Ie = _s(n, le.phase);
          Ie && (p = null, E(Ie, Q));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(le.round)), p = null;
          break;
        case "end":
          c = !0, u = "manual", d = Q;
          break;
      }
    }
  }
  const X = c ? null : Po(n, i, l, p), Y = X ? X.round : l + 1, O = i.cap > 0, b = n.events.filter((Q) => j.has(Q.id)).map((Q) => Q.id), h = c ? void 0 : Ir(n, i, o, Y, a), g = c ? void 0 : Ir(n, i, o, l);
  let N;
  const D = n.remaining;
  return !c && D.type === "nights" && n.phases.length && !i.byTag && !i.frozen ? N = D.template.replace("{n}", String(ga(n, i))) : !c && D.type === "countdown" && h?.minutes !== void 0 && (N = D.template.replace("{m}", String(h.minutes))), {
    phase: i,
    round: l,
    nextRound: Y,
    clock: c ? void 0 : Io(n, i, Y),
    currentClock: Io(n, i, l),
    remainingText: N,
    limit: h,
    roundsLeft: g ? { x: g.x, y: g.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: c,
    endedBy: u,
    endIndex: d,
    firedEvents: b,
    warn: !c && O && Y >= i.cap - 2,
    isLastRound: !c && O && Y === i.cap,
    overdue: !c && O && !i.next && Y > i.cap,
    next: X,
    skipGoal: p,
    settlement: x,
    panel: z,
    rolesFromChat: w,
    perMessage: H,
    phaseEnds: L,
    entryIndex: s
  };
}
const Ma = "rlzc_token", Ta = "rlzc_progress", Ia = "rlzc_turn", Na = "rlzc_state", Pa = "rlzc_ledger", ja = "rlzc_live", sh = [Ma, Ta, Ia, Na, Pa, ja], ts = { token: "", progress: "", turn: "", injected: [] };
function rh(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Vs(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const r = new RegExp(`(?<!\\{)\\{(${s.map(rh).join("|")})\\}(?!\\})`, "g");
  return e.replace(r, (i, o) => n?.[o]?.trim() || o);
}
function ih(e, t) {
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
function jo(e, t, n, s = !1) {
  let r = Vs(e.text, t, n);
  return e.to > e.from && (r = `在本阶段第${e.from}到${e.to}轮之间发生：${r}`), e.if && !s && (r += `（条件：${Vs(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${r}`;
}
function oh(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function lh(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...ts, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return ts;
  const r = s.roles, i = e.phases.length > 0, o = t.next, l = [`副本：${e.name}（${e.level}级）`], a = t.limit;
  if (i)
    l.push(`阶段：${t.phase.name}`), l.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), a && l.push(`剩余${a.x}/${a.y}轮`), t.clock && l.push(`钟时：${t.clock}`), a?.text && l.push(`时限：${a.text}`), e.remaining.type === "countdown" && t.remainingText && l.push(t.remainingText), a?.deadline && !a.text?.includes(a.deadline) && l.push(`截止：${a.deadline}`);
  else {
    l.push(`本轮：第${t.nextRound}轮`), t.clock && l.push(`钟时：${t.clock}`);
    const S = s.panelLimit || s.briefing?.limit;
    S && l.push(`时限：${S}`);
  }
  const c = ["［副本进度·仅供AI］", l.join("　")];
  if (s.briefing?.goal && (!i || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const S = e.roles.filter((E) => r?.[E]);
    c.push(
      S.length ? `角色登记：${e.roles.map((E) => `${E}=${r?.[E] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const u = ih(e, t.firedEvents);
  u && c.push(`已发生事件：${u}`);
  const d = [];
  o.skipFrom !== void 0 && d.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const p = new Map((s.subNext ?? []).map((S) => [S.id, S])), x = o.events.filter((S) => S.if && p.get(S.id)?.ok === !1).map((S) => ({ id: S.id, reason: p.get(S.id).reason })), z = o.events.filter((S) => !x.some((E) => E.id === S.id)), w = (S) => !!S.if && p.get(S.id)?.ok === !0, j = z.filter((S) => S.kind === "event"), H = z.filter((S) => S.kind === "directive");
  if (j.length && (d.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), j.forEach((S) => d.push(jo(S, e, r, w(S))))), H.length && (d.push("本轮写作要求："), H.forEach((S) => d.push(jo(S, e, r, w(S))))), t.isLastRound ? d.push(oh(t)) : t.overdue && d.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && d.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && d.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((S) => r?.[S])) {
    let S = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((E) => `${E}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (S += "死者不得是{{user}}或其同伴。"), d.push(S);
  }
  let L;
  return a?.text && (a.minutes !== void 0 ? (d.push(
    `本轮<副本>的时限一栏写：${a.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), L = { text: a.text, minutes: a.minutes, total: a.total }) : (d.push(`本轮<副本>的时限一栏写：${a.text}（照抄）。`), L = { text: a.text })), {
    token: e.token,
    progress: c.join(`
`),
    turn: d.length ? ["［本轮指令·仅供AI］", ...d].join(`
`) : "",
    injected: z.map((S) => S.id),
    limit: L,
    skipped: x.length ? x : void 0,
    state: s.stateText || void 0
  };
}
const ah = 1, ch = 0;
function ve() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function uh() {
  const e = ve();
  return e.eventTypes ?? e.event_types ?? {};
}
function Mt(e, t) {
  const n = uh()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  ve().eventSource.on(n, t);
}
function Z() {
  return ve().chat ?? [];
}
function Vt() {
  const e = ve();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function mt() {
  return ve().chatMetadata ?? {};
}
function nt() {
  const e = ve();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Zt(e, t, n, s) {
  ve().setExtensionPrompt(e, t, ah, n, s, ch);
}
function Te(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Ut(e) {
  const t = ve();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function Lo(e, t = "") {
  const n = ve();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const r = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof r == "string" ? r : null;
  }
  return window.prompt(e, t);
}
async function Ah(e, t) {
  const n = ve(), s = document.createElement("div"), r = document.createElement("div");
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
const an = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function La(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function dh(e, t = an) {
  return t.length ? e.replace(La(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function Da(e, t = an, n = !1) {
  const s = Z()[e];
  if (!s || s.is_user) return;
  const r = String(s.extra?.display_text ?? s.mes ?? "");
  if (!La(n ? an : t, "").test(r)) return;
  const i = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!i) return;
  const o = ve().messageFormatting;
  if (typeof o != "function") return;
  const l = o(dh(r, t), s.name ?? "", !!s.is_system, !1, e);
  i.innerHTML !== l && (i.innerHTML = l);
}
function fh(e = an, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && Da(s, e, t);
  });
}
const ph = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function Fa(e) {
  return e.stateFields?.length ? e.stateFields : [ph];
}
const hh = [...an, "状态栏"], mh = new RegExp(`<(${hh.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function zi(e) {
  return String(e ?? "").replace(mh, "").replace(/\n{3,}/g, `

`).trim();
}
function gh(e) {
  const t = Fa(e.pack), n = e.markets ?? [], s = [
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
${zi(e.text)}`
  ].join(`

`);
  return { system: s, user: l };
}
function xh(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class Fe extends Error {
}
function vh(e) {
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
  const o = ["done", "missed", "void"], l = (Array.isArray(i.events) ? i.events : []).filter((d) => d && typeof d.id == "string" && o.includes(d.status)).map((d) => ({ id: d.id, status: d.status, reason: String(d.reason ?? "") })), a = (Array.isArray(i.next) ? i.next : []).filter((d) => d && typeof d.id == "string" && typeof d.ok == "boolean").map((d) => ({ id: d.id, ok: d.ok, reason: String(d.reason ?? "") })), c = { events: l, state: i.state, next: a }, u = typeof i.hype == "number" ? i.hype : typeof i.hype == "string" && i.hype.trim() !== "" ? Number(i.hype) : NaN;
  if (Number.isFinite(u) && (c.hype = Math.max(0, Math.min(100, Math.round(u)))), typeof i.hurt == "boolean" ? c.hurt = i.hurt : (i.hurt === "true" || i.hurt === "false") && (c.hurt = i.hurt === "true"), i.markets && typeof i.markets == "object" && !Array.isArray(i.markets)) {
    const d = {};
    for (const [p, x] of Object.entries(i.markets))
      typeof x == "boolean" ? d[p] = x : (x === "true" || x === "false") && (d[p] = x === "true");
    c.markets = d;
  }
  return c;
}
function yh(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function bh(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((r) => String(r ?? "")).join("|");
  return `${e}:${t}:${s}:${yh(String(n?.mes ?? ""))}`;
}
function kh(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function wh(e, t, n = 2) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return vh(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
class Ra extends Error {
}
function cr(e) {
  if (e instanceof Ra) return "超时";
  if (e instanceof Fe) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function Oa(e) {
  return e?.extra?.rlzc;
}
function ur(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Re(s)) continue;
    const r = Oa(s)?.sub;
    if (r?.state && !r.skipped) return { index: n, state: r.state };
  }
  return null;
}
function zh(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Re(s)) continue;
    const r = Oa(s)?.sub;
    return r && !r.skipped && Array.isArray(r.next) ? r.next : void 0;
  }
}
function Us(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => Us(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${Us(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function Ba(e, t) {
  const n = Fa(e), s = new Set(n.map((i) => i.key)), r = n.filter((i) => t[i.key] !== void 0).map((i) => `${i.label}：${Us(t[i.key])}`);
  for (const [i, o] of Object.entries(t)) s.has(i) || r.push(`${i}：${Us(o)}`);
  return r.length ? ["［副本状态·仅供AI］", ...r].join(`
`) : "";
}
const _h = "你在写回廊直播间的观众弹幕。观众是回廊里的其他玩家，只看得到直播画面。什么人都有：夸赞、祝福、讨论、泼冷水、嫉妒、抹黑、造谣，正面的稍多。每条30字以内，口语，称{{user}}为主播，不用性别代词。只能根据画面里已经发生的事说话，不猜测、不透露画面外的信息。", $h = ["praise", "bless", "discuss", "cold", "envy", "smear", "rumor"];
function Sh(e) {
  if (!e.aiSource || !e.subOn) return !1;
  const t = Math.max(1, Math.min(10, Math.floor(e.freq) || 3));
  return e.roundInShow > 0 && e.roundInShow % t === 0 ? !0 : e.phaseSwitch || e.hurt || e.eventDone;
}
function Va(e) {
  return String(e ?? "").replace(/<(副本|状态栏|阶段切换|副本结算|角色登记|积分变动|直播|thinking|think)>[\s\S]*?<\/\1>/g, "").replace(/<\/?[A-Za-z一-龥][^<>]*>/g, "").replace(/\n{3,}/g, `

`).trim();
}
function Ch(e, t, n) {
  const s = e.map((o) => o.text), r = [], i = /* @__PURE__ */ new Set();
  for (let o = 0; o < t * 10 && r.length < Math.min(t, s.length); o++) {
    const l = Math.floor(n() * s.length);
    i.has(l) || (i.add(l), r.push(s[l]));
  }
  return r;
}
function Eh(e) {
  const t = [
    _h,
    "只输出一个 JSON 数组，8–12条，不要任何解释，格式：",
    '[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]'
  ].join(`
`), n = [
    `【直播间】${e.scene}`,
    `【在场角色】${e.cast.length ? e.cast.join("、") : "（无）"}`,
    `【最近两轮画面】
${e.texts.map((s) => Va(s)).filter(Boolean).join(`

`) || "（无）"}`,
    `【语气示例】
${e.samples.map((s) => `- ${s}`).join(`
`)}`
  ].join(`

`);
  return { system: t, user: n };
}
function Mh(e) {
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
    type: $h.includes(l.type) ? l.type : "discuss",
    name: typeof l.name == "string" && l.name.trim() ? l.name.trim().slice(0, 16) : "匿名",
    text: l.text.trim()
  })).slice(0, 13);
  if (!o.length) throw new Fe("返回的弹幕为空");
  return o;
}
async function Th(e, t, n = 1) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return Mh(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
function Ih(e) {
  return e.t === "tip" ? `${e.name} 打赏${e.amount}` : `${e.name}：${e.text}`;
}
function Nh(e, t = 5) {
  if (!e.on) return "";
  const n = e.feed.filter((r) => r.t === "msg" || r.t === "tip").slice(-t), s = `［直播·仅供AI］{{user}}正在直播，约${e.viewers}人在看。`;
  return n.length ? `${s}最近弹幕：${n.map(Ih).join("／")}` : s;
}
const Ua = 1500;
function Ha() {
  return ve().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function Wa(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Ga(e, t) {
  const n = new AbortController();
  let s;
  const r = new Promise((i, o) => {
    s = setTimeout(() => {
      n.abort(), o(new Ra(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), r]);
  } finally {
    clearTimeout(s);
  }
}
function Ka(e, t) {
  const n = t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : "") ?? "", s = new Error(`${e || ""} ${n}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return s.status = e, s;
}
async function qa(e, t, n, s = Ua, r = 0.2) {
  const i = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: Ha(),
    signal: n,
    body: JSON.stringify({
      ...Wa(e),
      model: e.model,
      messages: [
        { role: "system", content: t.system },
        { role: "user", content: t.user }
      ],
      max_tokens: s,
      temperature: r,
      stream: !1
    })
  }), o = await i.text();
  let l;
  try {
    l = JSON.parse(o);
  } catch {
    l = o;
  }
  if (!i.ok || l?.error) throw Ka(i.status === 200 ? 0 : i.status, l);
  const a = l?.choices?.[0]?.message?.content ?? l?.choices?.[0]?.text ?? l?.content;
  if (typeof a != "string") throw new Error("返回里没有正文");
  return a;
}
async function Ph(e) {
  const t = ve();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function _i(e, t, n = {}) {
  return Ga(e.timeoutMs, (s) => {
    if (e.source === "main") return Ph(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return qa(e.preset, t, s, Ua, n.temperature ?? 0.2);
  });
}
async function Ya(e) {
  const t = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: Ha(),
    body: JSON.stringify(Wa(e))
  }), n = await t.json().catch(() => null);
  if (!t.ok || n?.error) throw Ka(t.status, n);
  return (Array.isArray(n) ? n : Array.isArray(n?.data) ? n.data : Array.isArray(n?.models) ? n.models : []).map((r) => typeof r == "string" ? r : r?.id ?? r?.name).filter(Boolean).sort();
}
async function jh(e, t) {
  const n = await Ya(e).catch(() => []), s = { ...e, model: e.model || n[0] || "" }, r = await Ga(
    t,
    (i) => qa(s, { system: "只回复 OK。", user: "ping" }, i, 5)
  );
  return { models: n, reply: r };
}
const Ja = "rlzc_ledger", _t = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, Lh = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function Dh(e) {
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
function Ye(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), r = String(t.getHours()).padStart(2, "0"), i = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${r}:${i}`;
}
const Fh = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]\s*([\s\S]*)$/i, Rh = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Oh(e) {
  const t = String(e ?? "").replace(/[Ａ-Ｚａ-ｚ]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248)), n = /[SABCD]/i.exec(t);
  return n ? n[0].toUpperCase() : null;
}
function Bh(e) {
  const t = {}, n = [];
  let s = null;
  for (const l of String(e ?? "").split(`
`)) {
    const a = l.replace(/\*\*/g, "").trim();
    if (!a || /^[━─—=\-]{3,}$/.test(a)) continue;
    const c = Fh.exec(a);
    if (c) {
      const d = /^os$/i.test(c[1]) ? "os" : c[1];
      s && !["地点", "时间", "日期"].includes(d) ? s[d] = c[2].trim() : t[d] = c[2].trim();
      continue;
    }
    const u = /^(.+?)\s*[：:]\s*$/.exec(a);
    if (u) {
      s = { 名: u[1].trim() }, n.push(s);
      continue;
    }
    if (a.includes("｜")) {
      const d = a.split("｜").map((p) => p.trim());
      n.push({ 名: d[0], 等级: d[1] ?? "" }), s = null;
    }
  }
  const r = n[0], o = !!r && ["积分", "位格", "道具", "在场"].some((l) => l in r) ? r.等级 : t.等级;
  return o ? Oh(o) : null;
}
function Za(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = Rh.exec(s.mes);
    if (!r) continue;
    const i = Bh(r[1]);
    if (i) return i;
  }
  return null;
}
function Xa(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function Vh(e, t, n, s, r, i = "") {
  const o = n.结果 ?? "", l = (n.评价 ?? "").toUpperCase().trim(), a = ["D", "C", "B", "A", "S"].includes(l) ? l : null, c = o === "通关" || o === "成功" || o === "胜利", u = o === "失败", d = o === "死亡" || o === "阵亡";
  if (!c && !u && !d)
    return { delta: 0, source: "" };
  if (d)
    return { delta: 0, source: "" };
  if (u)
    return r ? { delta: 0, source: "清算未通关" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣除30%" };
  if (r) {
    const L = _t[t] + 500;
    return { delta: Math.max(0, L - s), source: "清算通关·续存至斩杀线+500", clearWin: !0 };
  }
  if (!a)
    return { delta: 0, source: "", warn: "评价缺失或无法识别，不发奖励" };
  let p = Lh[e][a];
  const x = i || e, z = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", w = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", j = e !== t;
  let H = `副本奖励·${x} ${a}评`;
  return z ? (p = Math.floor(p * 0.5), H += "（×50%）") : (w || j) && (p = Math.floor(p * 0.6), H += "（×60%）"), { delta: p, source: H };
}
function Do(e, t = (/* @__PURE__ */ new Date()).getFullYear()) {
  const n = /^(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
  if (!n) return;
  const s = new Date(t, Number(n[1]) - 1, Number(n[2]), Number(n[3]), Number(n[4])).getTime();
  return Number.isFinite(s) ? s : void 0;
}
function Uh(e, t) {
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
function Hh(e, t) {
  let n = e;
  return t.map((s) => n += s.delta);
}
function fn(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function as(e, t, n) {
  let s = e, r = !1;
  for (const i of t)
    s += i.delta, s < n && (r = !0), i.clear && (r = !1);
  return r;
}
function Wh(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function Gh(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const r = s ?? _t[n], i = Math.max(0, r - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${i}分（${n}级斩杀线${r}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const jt = "rlzc";
function Kh() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function qh(e, t, n) {
  return {
    id: Kh(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function Yh(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function Qa(e, t) {
  return e.packId === Bs ? e.briefing ? ba(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function Jh(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return Re(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function Zh(e, t) {
  const n = Jh(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((r) => ({ ...r, atIndex: r.atIndex + s }))), t.manual = t.manual.filter((r) => r.atIndex < e.length && r.atIndex >= t.entryIndex), !0;
}
function ec(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Fo = "rlzc_declined";
function $i(e, t) {
  return `${e}:${t}`;
}
const tc = Re;
function cs(e, t, n) {
  if (!tc(e[t])) return null;
  const s = eh(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function Xh(e, t, n, s, r = []) {
  for (let i = Math.max(0, n); i <= Math.min(s, e.length - 1); i++) {
    const o = cs(e, i, t);
    if (o && !r.includes($i(i, o.info.name))) return o;
  }
  return null;
}
function Qh(e, t, n = [], s = ti, r = 0) {
  if (t?.status === "active") return null;
  let i = -1;
  for (let l = Math.max(0, r); l < e.length; l++) if (tc(e[l])) {
    i = l;
    break;
  }
  if (i < 0 || t && t.entryIndex === i) return null;
  const o = cs(e, i, s);
  return !o || n.includes($i(i, o.info.name)) ? null : o;
}
const em = /[■█▰●◆★▮▓]/g, tm = /[□░▱○◇☆▯▒]/g;
function nm(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const i = Number(n[2]);
    return i === 100 ? Number(n[1]) : i > 0 ? Math.round(Number(n[1]) / i * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(em) ?? []).length, r = (t.match(tm) ?? []).length;
  return s + r > 0 ? Math.round(s / (s + r) * 100) : null;
}
function Ro(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function sm(e, t) {
  return Ro(e).includes(Ro(t));
}
function rm(e, t, n) {
  const s = [], r = Object.keys(n.perMessage).map(Number).sort((a, c) => a - c);
  let i = !1, o = null, l = !1;
  for (const a of r) {
    const c = n.perMessage[a], d = t.phases.find((S) => S.id === c.phase)?.name ?? "进行中", p = (S, E) => s.push({ index: a, phase: d, round: c.round, kind: S, text: E }), x = e[a]?.extra?.rlzc;
    for (const S of x?.sub?.events ?? []) S.status === "missed" && p("eventMissed", `${S.id} 未写出来：${S.reason}`);
    for (const S of x?.skippedEvents ?? []) p("eventSkipped", `${S.id} 条件不成立，已跳过：${S.reason}`);
    const z = $a(String(e[a]?.mes ?? "")), w = a === n.entryIndex;
    if (!z) {
      w || p("missing", "本轮回复缺少 <副本> 面板"), l = !w;
      continue;
    }
    l = !1;
    const j = nm(z.progressBar);
    z.progressBar === void 0 ? p("progressUnreadable", "<副本> 中没有进度条一栏") : j === null ? p("progressUnreadable", `进度条无法读出数值：「${z.progressBar}」`) : (!i && j !== 0 && p("progressStart", `入场后第一轮的进度条应为0，实际为 ${j}`), (j < 0 || j > 100) && p("progressRange", `进度条数值 ${j} 超出 0–100`), o !== null && j < o && p("progressDrop", `进度条比上一轮低：${o} → ${j}`), o = j), i = !0;
    const H = e[a]?.extra?.rlzc?.limit, L = H?.text ? H : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (L) {
      const S = z.limit;
      if (L.minutes !== void 0) {
        const E = ma(S);
        !S || E.remaining === null || E.total === null ? p("limit", `时限读不到「剩余时间/总时长」：写的是「${S ?? "（没有时限一栏）"}」，注入的是「${L.text}」`) : (E.remaining > L.minutes && p("limit", `剩余时间比注入值多：写的是${xn(E.remaining)}，注入的是${xn(L.minutes)}`), L.total !== void 0 && E.total !== L.total && p("limit", `总时长与注入值不一致：写的是${xn(E.total)}，注入的是${xn(L.total)}`));
      } else (!S || !sm(S, L.text)) && p("limit", `时限与注入文字不一致：写的是「${S ?? "（没有时限一栏）"}」，注入的是「${L.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: i };
}
const im = {
  D: 2e3,
  C: 8e3,
  B: 3e4,
  A: 1e5,
  S: 3e5
}, om = [
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
function nc(e) {
  return om.some((t) => e.includes(t));
}
function lm(e) {
  if (e.subHype !== void 0)
    return Math.max(0, Math.min(100, Math.round(e.subHype)));
  const t = e.subHurt !== void 0 ? e.subHurt : e.bodyText ? nc(e.bodyText) : !1;
  let n = 20;
  return e.hasEvents && (n += 20), e.hasPhaseSwitch && (n += 20), t && (n += 30), Math.min(100, n);
}
function am(e, t) {
  return Math.round(e * 0.6 + t * 0.4);
}
function Si(e) {
  const t = !e.packLevel || e.isRest ? e.playerLevel : e.packLevel, n = im[t], s = !e.packLevel || e.isRest ? 0.3 : 1;
  return Math.round(n * s * (0.5 + e.heat / 100) * e.rand);
}
const cm = [10, 20, 50, 100, 200, 500, 1e3], um = [20, 25, 15, 20, 10, 8, 2], Am = [15, 20, 15, 20, 10, 16, 4];
function dm(e, t, n) {
  const s = t.reduce((i, o) => i + o, 0);
  let r = n * s;
  for (let i = 0; i < e.length; i++)
    if (r -= t[i], r <= 0) return e[i];
  return e[e.length - 1];
}
function fm(e) {
  const { hype: t, isCorr: n, rand: s, names: r } = e, i = t / 40, o = [], l = [], a = t >= 70 ? Am : um;
  for (let p = 1; p <= 3; p++) {
    const x = Math.min(1, Math.max(0, i - (p - 1)));
    if (s() < x) {
      let z = dm(cm, a, s());
      n && (z = Math.max(10, Math.round(z * 0.3 / 10) * 10)), o.push(z), l.push(r[Math.floor(s() * r.length)] ?? "匿名");
    }
  }
  const c = o.reduce((p, x) => p + x, 0), u = Math.floor(c * 0.6);
  let d = "";
  return o.length === 1 ? d = `直播打赏${o[0]}×60%` : o.length > 1 && (d = `直播打赏${o.length}笔·共${c}×60%`), { count: o.length, totalFace: c, faces: o, netTotal: u, source: d, names: l };
}
const Hs = 10, Ws = 13;
function sc(e) {
  return Hs + Math.floor(e() * (Ws - Hs + 1));
}
function Lr(e, t, n, s, r, i, o) {
  const l = t && !n;
  return !(e.scope === "inst" && !l || e.scope === "corr" && l || e.when === "hurt" && !s || e.when === "calm" && r >= 30 || e.when === "open" && !i || e.when === "end" && !o);
}
function pm(e) {
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
    recentTexts: d,
    names: p,
    whoNames: x,
    rand: z
  } = e, w = e.count ?? sc(z), j = [], H = new Set(d), L = t.filter(
    (g) => Lr(g, i, o, l, a, c, u)
  ), E = x.length > 0 ? n.filter(
    (g) => Lr(g, i, o, l, a, c, u)
  ) : [], X = s.filter((g) => Lr(g, i, o, l, a, c, u) ? g.phase && g.phase.length > 0 && r ? g.phase.includes(r) : !0 : !1), Y = () => p[Math.floor(z() * p.length)] ?? "匿名", O = () => x[Math.floor(z() * x.length)] ?? "";
  for (let g = 0; g < w * 5 && j.length < w; g++) {
    let N = "", D = "discuss";
    if (X.length > 0 && z() < 0.3) {
      const ae = X[Math.floor(z() * X.length)];
      N = ae.text, D = ae.type;
    } else if (E.length > 0 && z() < 0.5) {
      const le = E[Math.floor(z() * E.length)];
      N = le.text.replace("{who}", O()), D = le.type;
    } else if (L.length > 0) {
      const le = L[Math.floor(z() * L.length)];
      N = le.text, D = le.type;
    }
    !N || H.has(N) || (H.add(N), j.push({ name: Y(), text: N, type: D }));
  }
  const b = [...X, ...L], h = b.length ? Math.floor(z() * b.length) : 0;
  for (let g = 0; g < b.length && j.length < w; g++) {
    const N = b[(h + g) % b.length];
    H.has(N.text) || (H.add(N.text), j.push({ name: Y(), text: N.text, type: N.type }));
  }
  return j;
}
const rc = "rlzc_live", hm = "本局直播打赏撤回", ic = 20, cn = {
  corridorOn: "回廊直播开始。",
  corridorOff: "已下播。",
  enterOff: "进入副本，回廊直播已结束。",
  instanceOn: "本局副本直播开始。",
  instanceOff: "副本结束，直播已下播。",
  revoke: "主播在副本中死亡，本局打赏已全部撤回。"
};
function mm(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.corridor ?? {};
  return {
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0,
    corridor: { on: !!n.on, show: typeof n.show == "string" ? n.show : "", viewers: Number.isFinite(n.viewers) ? n.viewers : void 0 },
    sys: Array.isArray(t.sys) ? t.sys.filter((s) => s && typeof s.id == "number") : []
  };
}
function oc(e, t) {
  return e.disableLive ? { show: !1, checked: !1 } : { show: !0, checked: !!t };
}
function Ht(e) {
  const t = e?.extra?.rlzc?.live;
  return t && typeof t.show == "string" && Array.isArray(t.feed) ? t : void 0;
}
function Ci(e, t, n = e.length) {
  const s = [];
  for (let r = 0; r < Math.min(n, e.length); r++) {
    const i = e[r];
    if (!i || i.is_user) continue;
    const o = Ht(i);
    o && o.show === t && s.push({ index: r, rec: o });
  }
  return s;
}
function Ei(e, t) {
  return Ci(e, t).reduce((n, { rec: s }) => n + (s.tipNet || 0) - (s.revoke || 0), 0);
}
function Ar(e, t) {
  let n = t.seq;
  for (const s of t.sys) n = Math.max(n, s.id);
  for (const s of e) for (const r of Ht(s)?.feed ?? []) n = Math.max(n, r.id);
  return n;
}
function gm(e, t = 30) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const r = Ht(e[s])?.feed ?? [];
    for (let i = r.length - 1; i >= 0 && n.length < t; i--) r[i].t === "msg" && n.push(r[i].text);
  }
  return n;
}
const xm = /<状态栏>([\s\S]*?)<\/状态栏>/, vm = /^(积分|位格|道具|在场)$/, ym = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;
function lc(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = xm.exec(s.mes);
    if (r) return r[1];
  }
  return null;
}
function Mi(e, t = e.length) {
  return Za(e, t) ?? "D";
}
function ac(e, t = "") {
  if (!e) return [];
  const n = [];
  let s = null;
  for (const i of e.split(`
`)) {
    const o = i.trim();
    if (!o || /^[━─—=\-]{3,}$/.test(o)) continue;
    const l = ym.exec(o);
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
    if (o === 0 && [...i.keys].some((a) => vm.test(a))) return;
    const l = i.name.replace(/[（(][\s\S]*$/, "").trim();
    !l || /^(陌生|路人)/.test(l) || l === "{{user}}" || t && l === t || r.includes(l) || r.push(l);
  }), r;
}
function cc(e, t) {
  return t?.hurt !== void 0 ? t.hurt : nc(zi(e));
}
function bm(e) {
  const { rand: t } = e, n = zi(e.text), s = cc(e.text, e.sub), r = lm({ subHype: e.sub?.hype, subHurt: s, hasEvents: e.hasEvents, hasPhaseSwitch: e.hasPhaseSwitch, bodyText: n }), i = am(e.prevHeat ?? ic, r), o = e.scope === "corridor" || e.isRest, l = Si({
    packLevel: e.scope === "instance" ? e.packLevel : null,
    playerLevel: e.playerLevel,
    isRest: e.isRest,
    heat: i,
    rand: 0.9 + t() * 0.2
  }), a = sc(t), c = pm({
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
    count: e.awaitAi ? Ws : a
  }), u = fm({ hype: r, isCorr: o, rand: t, names: e.names }), d = u.faces.map((w, j) => ({ t: "tip", name: u.names[j], text: "", amount: w, net: Math.floor(w * 0.6) })), p = [];
  let x;
  e.settle && (e.settle.died && (x = e.settle.tipsBefore + u.netTotal, x > 0 ? p.push({ t: "sys", name: "", text: cn.revoke, amount: 0, net: -x }) : x = void 0), p.push({ t: "sys", name: "", text: cn.instanceOff, amount: 0, net: 0 }));
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
  return x && (z.revoke = x), e.awaitAi ? z.pending = { local: c, tips: d, sys: p, target: a } : z.feed = uc(c.slice(0, a), d, p, e.firstId, t), z;
}
function km(e, t, n) {
  const s = Math.max(Hs, Math.min(Ws, n));
  if (!e?.length) return t.slice(0, s);
  const r = e.slice(0, Ws);
  if (r.length >= Hs) return r;
  const i = new Set(r.map((o) => o.text));
  for (const o of t) {
    if (r.length >= s) break;
    i.has(o.text) || (i.add(o.text), r.push(o));
  }
  return r;
}
function uc(e, t, n, s, r) {
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
function Ac(e, t, n, s) {
  if (!e.pending) return e;
  const { pending: r, ...i } = e, o = km(t, r.local, r.target);
  return { ...i, feed: uc(o, r.tips, r.sys, n, s) };
}
function wm(e, t) {
  if (!e) return [];
  const n = [];
  return e.tipNet > 0 && n.push({ delta: e.tipNet, source: e.tipSource, type: "tip", at: t }), e.revoke && e.revoke > 0 && n.push({ delta: -e.revoke, source: hm, type: "tip", at: t }), n;
}
function zm(e) {
  return `其中本局直播打赏${e}分，副本内不可使用，离开副本后可用。`;
}
function _m(e, t) {
  return e && `${e}${e.endsWith("。") ? "" : "。"}${zm(t)}`;
}
function $m(e, t, n) {
  const s = Ci(e, n), r = [];
  for (const { rec: i } of s) r.push(...i.feed);
  for (const i of t.sys) i.show === n && r.push({ id: i.id, t: i.t, name: i.name, text: i.text, amount: i.amount, net: i.net });
  return r.sort((i, o) => i.id - o.id), { items: r, last: s[s.length - 1]?.rec };
}
function Sm(e, t) {
  let n = "", s = -1;
  for (const r of t.sys) r.id > s && (s = r.id, n = r.show);
  for (const r of e) {
    const i = Ht(r);
    if (i)
      for (const o of i.feed) o.id > s && (s = o.id, n = i.show);
  }
  return n;
}
function Cm(e, t, n, s = /* @__PURE__ */ new Set()) {
  const r = n.inInstance ? "instance" : "corridor", i = n.inInstance ? n.instanceLive : t.corridor.on, o = n.inInstance ? n.instanceLive ? n.instanceShow ?? "" : "" : i ? t.corridor.show : Sm(e, t), l = { on: i, canToggle: !n.inInstance, scope: r, viewers: 0, heat: 0, tipTotal: 0, injectToAI: n.injectToAI, feed: [], lastTip: null };
  if (!o) return l;
  const { items: a, last: c } = $m(e, t, o), u = a.filter((x) => !s.has(x.id));
  let d = 0, p = null;
  for (const x of u)
    d += x.net, x.t === "tip" && (p = { id: x.id, net: x.net });
  return {
    ...l,
    viewers: i ? c?.viewers ?? n.startViewers ?? 0 : 0,
    heat: i ? c?.heat ?? ic : 0,
    tipTotal: d,
    feed: u.slice(-60),
    lastTip: p
  };
}
const Em = ["小满", "好运来", "路过的D级", "一个路过的A级", "数据党", "理性讨论", "吃瓜", "夜班保安", "柠檬汁", "阿柒", "东区卖菜的", "西区摆摊的", "情报社小号", "失眠第三天", "房租交不起", "今天也在种土豆", "匿名", "光幕前的咸鱼", "刚通关的C级", "排行榜第九十九", "不想进本", "炸鱼被抓过", "黑市常客", "训练场打卡人", "药剂站熬夜班", "公会跑腿的", "一个路人", "今日份幸运", "积分快见底", "刚升B级", "看录像长大的", "老观众", "新来的", "别叫我大佬", "蹲一个结算", "白开水", "半夜不睡", "又是我", "打工人", "瓜田里的猹", "慢热", "晴天", "阿九", "十一", "小绿", "老周", "木子", "苏苏", "七七", "一颗橘子", "等天亮", "北风", "不吃香菜", "没抢到号", "退役S级", "D级万岁", "靠运气活着", "只看不说", "路过打个卡", "最后一排"], Mm = [{ type: "praise", text: "这反应速度，不愧是主播" }, { type: "praise", text: "冷静得不像第一次进这个级别的本", scope: "inst" }, { type: "praise", text: "刚才那个判断绝了" }, { type: "praise", text: "主播脑子转得是真快" }, { type: "praise", text: "这波我服" }, { type: "praise", text: "稳，太稳了" }, { type: "praise", text: "讲道理，换我早慌了" }, { type: "praise", text: "这就是高手吗" }, { type: "praise", text: "看得我手心出汗，主播还面不改色" }, { type: "praise", text: "刚才那句话说得漂亮" }, { type: "praise", text: "细节拉满，这都注意到了", scope: "inst" }, { type: "praise", text: "主播说话好有条理" }, { type: "praise", text: "这才叫会玩" }, { type: "praise", text: "就冲这个判断，关注了" }, { type: "praise", text: "有勇有谋" }, { type: "praise", text: "比上一个主播强多了" }, { type: "praise", text: "队友拖后腿，主播一个人在带", scope: "inst" }, { type: "praise", text: "这个位置站得好", scope: "inst" }, { type: "praise", text: "我宣布这是本周最佳直播" }, { type: "praise", text: "主播镇定得让我也镇定了" }, { type: "praise", text: "那个眼神，太帅了" }, { type: "praise", text: "心态真好，要是我早骂人了" }, { type: "praise", text: "这个节奏把握得好", scope: "inst" }, { type: "praise", text: "看出来是做过功课的" }, { type: "praise", text: "夸一句，主播是真的会说话" }, { type: "praise", text: "一句话就把场面稳住了", scope: "inst" }, { type: "praise", text: "这份胆量我是没有" }, { type: "praise", text: "学到了，下次我也这么干" }, { type: "praise", text: "主播好好看" }, { type: "praise", text: "声音也好听，别下播" }, { type: "praise", text: "越看越顺眼" }, { type: "praise", text: "这气质，放在哪个本都是主角" }, { type: "praise", text: "能屈能伸，佩服" }, { type: "praise", text: "刚才那一下我起立鼓掌" }, { type: "praise", text: "不慌不忙，高手风范" }, { type: "praise", text: "回廊里也过得这么讲究，爱了", scope: "corr" }, { type: "praise", text: "主播种的菜看着真水灵", scope: "corr" }, { type: "praise", text: "这手艺可以去西区摆摊了", scope: "corr" }, { type: "praise", text: "休整都不忘练，怪不得排名涨", scope: "corr" }, { type: "praise", text: "房间收拾得真干净", scope: "corr" }, { type: "bless", text: "祝平安出来！！", scope: "inst" }, { type: "bless", text: "主播一定要活着回来", scope: "inst" }, { type: "bless", text: "保佑保佑" }, { type: "bless", text: "冲啊主播！" }, { type: "bless", text: "这把一定能过", scope: "inst" }, { type: "bless", text: "结算见！", scope: "inst", when: "end" }, { type: "bless", text: "平安就好，评级无所谓", scope: "inst" }, { type: "bless", text: "等你出来请你吃饭", scope: "inst" }, { type: "bless", text: "好运加满，霉运退散" }, { type: "bless", text: "希望别再有人出事了", scope: "inst", when: "hurt" }, { type: "bless", text: "主播加油，我在东区超市门口看着呢" }, { type: "bless", text: "撑住，天总会亮的", scope: "inst" }, { type: "bless", text: "别怕，我们都在" }, { type: "bless", text: "好人一生平安" }, { type: "bless", text: "这波过了就能歇歇了", scope: "inst" }, { type: "bless", text: "下个副本抽个简单的吧", scope: "corr" }, { type: "bless", text: "注意安全，别逞强", scope: "inst" }, { type: "bless", text: "保重身体啊", when: "hurt" }, { type: "bless", text: "受伤了先处理伤口", scope: "inst", when: "hurt" }, { type: "bless", text: "一路绿灯，一路绿灯" }, { type: "bless", text: "今天也要好好活着" }, { type: "bless", text: "愿系统对你手下留情" }, { type: "bless", text: "别哭，我们陪你", when: "hurt" }, { type: "bless", text: "等着看你升级" }, { type: "bless", text: "最后一口气了，撑住", scope: "inst", when: "end" }, { type: "bless", text: "最后几轮，稳住！", scope: "inst", when: "end" }, { type: "bless", text: "主播今天早点睡", scope: "corr" }, { type: "bless", text: "休息好了再进本", scope: "corr" }, { type: "bless", text: "希望房租别涨", scope: "corr" }, { type: "bless", text: "回廊安稳一天是一天", scope: "corr" }, { type: "discuss", text: "现在什么情况，我刚进来" }, { type: "discuss", text: "来了来了，这把什么本", scope: "inst", when: "open" }, { type: "discuss", text: "开播了开播了", when: "open" }, { type: "discuss", text: "新主播？没见过", when: "open" }, { type: "discuss", text: "先别吵，看局势" }, { type: "discuss", text: "我觉得还有线索没找到", scope: "inst" }, { type: "discuss", text: "按往届，这本不好打", scope: "inst" }, { type: "discuss", text: "有没有人看过这本的录像", scope: "inst" }, { type: "discuss", text: "黑市那种录像别全信" }, { type: "discuss", text: "这队人各怀心思吧", scope: "inst" }, { type: "discuss", text: "现在还剩几个人？", scope: "inst" }, { type: "discuss", text: "前面说的那个我也注意到了" }, { type: "discuss", text: "理性讨论，别带节奏" }, { type: "discuss", text: "我赌主播能过" }, { type: "discuss", text: "有人算过这把能拿什么评吗", scope: "inst" }, { type: "discuss", text: "主播刚才是不是话里有话" }, { type: "discuss", text: "这个人说话一直留半句", scope: "inst" }, { type: "discuss", text: "注意细节，刚才那句不对劲", scope: "inst" }, { type: "discuss", text: "我在光幕前面站了一个小时了" }, { type: "discuss", text: "回放能看吗，刚才没看清" }, { type: "discuss", text: "有没有懂的解释一下" }, { type: "discuss", text: "你们看出来了吗，我看不出来" }, { type: "discuss", text: "这一段要是剪进录像会卖爆" }, { type: "discuss", text: "楼上别剧透……虽然我也不知道" }, { type: "discuss", text: "好无聊，快进", when: "calm" }, { type: "discuss", text: "主播在发呆吗", when: "calm" }, { type: "discuss", text: "挂着当背景音了", when: "calm" }, { type: "discuss", text: "去泡了碗面回来还是这样", when: "calm" }, { type: "discuss", text: "这么安静，要出事了吧", scope: "inst", when: "calm" }, { type: "discuss", text: "暴风雨前的宁静", scope: "inst", when: "calm" }, { type: "discuss", text: "啊啊啊有人倒了", scope: "inst", when: "hurt" }, { type: "discuss", text: "刚才那一下我没敢看", when: "hurt" }, { type: "discuss", text: "又走一个……", scope: "inst", when: "hurt" }, { type: "discuss", text: "手在抖吧，换我也抖", when: "hurt" }, { type: "discuss", text: "快结束了吧", scope: "inst", when: "end" }, { type: "discuss", text: "结算前最后几轮最容易出事", scope: "inst", when: "end" }, { type: "discuss", text: "今天种什么？", scope: "corr" }, { type: "discuss", text: "回廊直播也有人看，我服了我自己", scope: "corr" }, { type: "discuss", text: "排行榜又变了，你们看了吗", scope: "corr" }, { type: "discuss", text: "下个本打算报哪个？", scope: "corr" }, { type: "cold", text: "别高兴太早" }, { type: "cold", text: "我看悬" }, { type: "cold", text: "这把凉了吧" }, { type: "cold", text: "就这？" }, { type: "cold", text: "也就一般" }, { type: "cold", text: "运气好而已" }, { type: "cold", text: "换个人也能做到" }, { type: "cold", text: "等着翻车吧" }, { type: "cold", text: "这种判断，迟早出事" }, { type: "cold", text: "看了半天也没看出哪里厉害" }, { type: "cold", text: "太磨叽了" }, { type: "cold", text: "说了这么多，一点用没有" }, { type: "cold", text: "我押失败", scope: "inst" }, { type: "cold", text: "评级能拿个C就不错了", scope: "inst" }, { type: "cold", text: "队友再强也带不动", scope: "inst" }, { type: "cold", text: "太自信了，这本专治自信", scope: "inst" }, { type: "cold", text: "往届比这厉害的都栽在这", scope: "inst" }, { type: "cold", text: "真以为能全身而退？", scope: "inst" }, { type: "cold", text: "没意思，我换台了" }, { type: "cold", text: "这操作也就D级水平" }, { type: "cold", text: "这不是冷静，是反应慢" }, { type: "cold", text: "别吹了，看结算", scope: "inst" }, { type: "cold", text: "种菜有什么好看的", scope: "corr" }, { type: "cold", text: "回廊里直播，缺积分缺疯了吧", scope: "corr" }, { type: "cold", text: "天天摆烂，等着被清算吧", scope: "corr" }, { type: "envy", text: "凭什么这种人能上热门" }, { type: "envy", text: "我直播三天没人看，这也行？" }, { type: "envy", text: "长得好就是占便宜" }, { type: "envy", text: "又是这种运气好的" }, { type: "envy", text: "打赏的是托吧" }, { type: "envy", text: "我也想有人给我刷" }, { type: "envy", text: "这点本事也能拿打赏" }, { type: "envy", text: "同样是D级进来的，差距怎么这么大" }, { type: "envy", text: "分到这么好的队友，换我我也行", scope: "inst" }, { type: "envy", text: "酸了，真的酸了" }, { type: "envy", text: "一进来就有大佬带，羡慕不来", scope: "inst" }, { type: "envy", text: "这热度买的吧" }, { type: "envy", text: "凭什么打赏都往这边跑" }, { type: "envy", text: "我通关都没人看" }, { type: "envy", text: "排行榜上那些名字，一半靠运气" }, { type: "envy", text: "有人天生就是被偏爱的" }, { type: "envy", text: "我要是有这配置，比这还稳", scope: "inst" }, { type: "envy", text: "住的地方比我好十倍", scope: "corr" }, { type: "envy", text: "在回廊都能开播赚积分，羡慕哭了", scope: "corr" }, { type: "envy", text: "这菜种得，比我吃的还好", scope: "corr" }, { type: "smear", text: "装什么装" }, { type: "smear", text: "演的吧，这反应太假了" }, { type: "smear", text: "人设立得挺好" }, { type: "smear", text: "会说话而已，真打起来就露馅" }, { type: "smear", text: "这种人最会卖队友" }, { type: "smear", text: "表面客气，背地里肯定算计着" }, { type: "smear", text: "我不信真这么淡定" }, { type: "smear", text: "刚才那个眼神，心虚了吧" }, { type: "smear", text: "故意卖惨要打赏" }, { type: "smear", text: "刚才明明可以救，没救", scope: "inst", when: "hurt" }, { type: "smear", text: "自私，只顾自己", scope: "inst" }, { type: "smear", text: "队友出事了还这么冷静，冷血吧", scope: "inst", when: "hurt" }, { type: "smear", text: "这是在拿别人探路", scope: "inst" }, { type: "smear", text: "满嘴好话，一件实事没干" }, { type: "smear", text: "装新人的吧" }, { type: "smear", text: "就是冲着打赏来的" }, { type: "smear", text: "看着就不是好人" }, { type: "smear", text: "别被骗了，都是算计好的" }, { type: "smear", text: "下了本也要直播，吃相难看", scope: "corr" }, { type: "smear", text: "种田人设，炒给谁看", scope: "corr" }, { type: "rumor", text: "听说积分是借的，真的假的" }, { type: "rumor", text: "肯定是抱大腿进来的" }, { type: "rumor", text: "我朋友说在黑市见过这人" }, { type: "rumor", text: "据说上一个本是被人带飞的" }, { type: "rumor", text: "听说欠了一屁股积分" }, { type: "rumor", text: "有人说是买了攻略才敢进的", scope: "inst" }, { type: "rumor", text: "听说被公会踢出来过" }, { type: "rumor", text: "情报社的人说，这人被抽查过" }, { type: "rumor", text: "有人在西区看到这人跟黑市贩子说话" }, { type: "rumor", text: "据说是走后门才越级的" }, { type: "rumor", text: "听说上个本的队友都没出来" }, { type: "rumor", text: "有人说这人其实早就待清算了" }, { type: "rumor", text: "我听说排名是刷的" }, { type: "rumor", text: "传闻进本前偷偷买了防抽查道具" }, { type: "rumor", text: "听说有人专门花钱买这人的录像" }], Tm = [{ type: "praise", text: "{who}刚才那下好帅" }, { type: "praise", text: "{who}挺靠谱的" }, { type: "bless", text: "{who}别出事啊" }, { type: "bless", text: "心疼{who}" }, { type: "bless", text: "{who}还好吗", when: "hurt" }, { type: "discuss", text: "{who}靠谱吗，我看不透" }, { type: "discuss", text: "{who}又不说话了" }, { type: "discuss", text: "{who}刚才那句什么意思" }, { type: "discuss", text: "盯紧{who}" }, { type: "discuss", text: "{who}和主播配合挺默契" }, { type: "discuss", text: "{who}好像知道点什么" }, { type: "cold", text: "{who}也就那样" }, { type: "cold", text: "指望{who}？算了吧" }, { type: "envy", text: "凭什么{who}也有人喜欢" }, { type: "smear", text: "我就说{who}有问题" }, { type: "smear", text: "{who}在演" }, { type: "smear", text: "{who}那个表情不对劲" }, { type: "rumor", text: "听说{who}在排行榜上挂过名" }, { type: "rumor", text: "我听说{who}以前出过事" }, { type: "rumor", text: "{who}跟主播是不是早就认识" }], Im = {
  names: Em,
  pool: Mm,
  templates: Tm
}, ns = /* @__PURE__ */ new Set(), nn = [];
let zt = null, $s = [], Dr = null;
function us() {
  for (const e of $s.slice())
    try {
      e();
    } catch (t) {
      console.warn("[rlzc] RLZC_LIVE 订阅回调出错", t);
    }
}
function Nm() {
  return 1500 + Math.random() * 1500;
}
function dc() {
  zt = null;
  const e = nn.shift();
  e !== void 0 && (ns.delete(e), us()), nn.length && (zt = setTimeout(dc, Nm()));
}
function Ti(e, t = !1) {
  if (t && nn.length) {
    for (const n of nn) ns.delete(n);
    nn.length = 0, zt && clearTimeout(zt), zt = null;
  }
  if (e.length) {
    for (const n of e)
      ns.add(n.id), nn.push(n.id);
    zt ? us() : dc();
  }
}
function Pm() {
  zt && clearTimeout(zt), zt = null, nn.length = 0, ns.clear();
}
function jm(e) {
  Dr = e, window.RLZC_LIVE = {
    get: () => Dr.view(ns),
    subscribe(t) {
      return typeof t != "function" ? () => {
      } : ($s.push(t), () => {
        $s = $s.filter((n) => n !== t);
      });
    },
    toggle: () => Dr.toggle()
  };
}
function Lm(e, t = 100) {
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
function Dm() {
  const e = document.getElementById("mes_stop");
  return !!e && getComputedStyle(e).display !== "none";
}
const fc = "rlzc_market", Oo = { D: 0, C: 1, B: 2, A: 3, S: 4 }, pc = { D: 1e3, C: 5e3, B: 2e4, A: 8e4, S: 3e5 }, Bo = 10, Fm = 0.8, Rm = "ending", Om = "rating", hc = ["S", "A", "B", "C", "D"];
function Bm(e, t) {
  return Oo[e] - Oo[t];
}
function Vm(e) {
  return e <= -2 ? 0.85 : e === -1 ? 0.75 : e === 0 ? 0.6 : e === 1 ? 0.4 : e === 2 ? 0.25 : 0.15;
}
const ys = {
  "le-1": { S: 0.15, A: 0.3, B: 0.3, C: 0.17, D: 0.08 },
  0: { S: 0.08, A: 0.2, B: 0.35, C: 0.25, D: 0.12 },
  1: { S: 0.04, A: 0.12, B: 0.3, C: 0.32, D: 0.22 },
  ge2: { S: 0.02, A: 0.08, B: 0.25, C: 0.35, D: 0.3 }
};
function Um(e) {
  return e <= -1 ? ys["le-1"] : e === 0 ? ys[0] : e === 1 ? ys[1] : ys.ge2;
}
function dr(e) {
  return Math.round(e * 100) / 100;
}
function Hm(e, t) {
  const n = 0.93 + t() * 0.14;
  return Math.max(1.01, dr(1 / e * Fm * n));
}
function mc(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function Bn(e, t, n, s) {
  return { id: e, label: t, p: n, odds: Hm(n, s) };
}
function gc(e, t, n) {
  const s = {
    id: t.id,
    kind: e,
    q: t.q,
    options: [Bn("yes", t.yes, t.p, n), Bn("no", t.no, dr(1 - t.p), n)],
    judge: t.judge
  };
  return t.judgeNo && (s.judgeNo = t.judgeNo), t.by && (s.by = t.by), s;
}
function Wm(e) {
  const { pack: t, rand: n } = e;
  if (t.rest) return [];
  const s = Bm(t.level, e.playerLevel), r = Vm(s), i = [
    { id: Rm, kind: "ending", q: "本局结果", options: [Bn("win", "通关", r, n), Bn("lose", "失败", dr(1 - r), n)] }
  ], o = Um(s);
  if (i.push({ id: Om, kind: "rating", q: "本局评价", options: hc.map((l) => Bn(l, l, o[l], n)) }), e.withEvents) for (const l of Dp(t)) i.push(gc("event", l, n));
  return i;
}
const Vo = 2, Gm = 5;
function ni(e, t, n) {
  const s = e.map((i, o) => o), r = [];
  for (; r.length < t && s.length; ) r.push(s.splice(Math.floor(n() * s.length), 1)[0]);
  return r.sort((i, o) => i - o).map((i) => e[i]);
}
function Km(e, t, n) {
  if (!t) return { markets: e.filter((o) => o.kind === "ending" || o.kind === "rating") };
  const s = Vo + Math.floor(n() * (Gm - Vo + 1)), r = 1 + Math.floor(n() * 2), i = ni(e, s - r, n);
  return { markets: i, plan: { total: s, freak: r, order: e.map((o) => o.id) }, reserve: e.filter((o) => !i.includes(o)) };
}
function qm(e, t, n) {
  const s = e.markets.filter((c) => c.kind !== "freak"), r = e.reserve ?? [];
  if (!e.plan) return { markets: [...s, ...t ? Uo(t, n) : []], reserve: r };
  const i = Uo(ni(t ?? [], e.plan.freak, n), n), o = ni(r, e.plan.freak - i.length, n), l = (c) => e.plan.order.indexOf(c.id);
  return { markets: [...[...s, ...o].sort((c, u) => l(c) - l(u)), ...i], reserve: r.filter((c) => !o.includes(c)) };
}
function Ym(e, t) {
  return e - Math.max(0, t);
}
function xc(e) {
  const t = pc[e.playerLevel], n = Ym(e.balance, e.lockedTips), s = Math.max(0, Math.min(t - e.already, n)), r = e.stake, i = Number.isFinite(r) && r > 0 && e.balance - r < _t[e.playerLevel];
  let o;
  return !Number.isInteger(r) || r < Bo ? o = `最少押${Bo}` : e.already + r > t ? o = "超过单注上限" : r > n && (o = "可用余额不足"), { ok: !o, reason: o, cap: t, max: s, belowKill: i };
}
function Jm(e, t) {
  return e.tickets.filter((n) => n.market === t).reduce((n, s) => n + s.stake, 0);
}
function Zm(e, t) {
  return Object.keys(e).map(Number).filter((n) => n >= t).length >= 2;
}
const vc = ["通关", "成功", "胜利"], Ii = ["死亡", "阵亡"];
function Xm(e) {
  return Ii.includes(String(e ?? "").trim());
}
function Qm(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  return Ii.includes(n) ? { kind: "lost", index: t } : vc.includes(n) ? { kind: "option", option: "win", index: t } : n === "失败" ? { kind: "option", option: "lose", index: t } : { kind: "refund", index: t };
}
function eg(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  if (Ii.includes(n)) return { kind: "lost", index: t };
  const s = String(e.rating ?? "").trim().toUpperCase();
  return vc.includes(n) && hc.includes(s) ? { kind: "option", option: s, index: t } : { kind: "refund", index: t };
}
function tg(e, t) {
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
  return a && n.endedBy === "tag" && Xm(n.result) ? { kind: "lost", index: r } : a && n.endedBy !== "tag" ? { kind: "refund", index: r } : o ? null : i && l > 0 ? { kind: "option", option: "no", index: r } : { kind: "refund", index: r };
}
function ng(e) {
  const t = {};
  for (const n of e.markets)
    e.outcome.voided ? t[n.id] = { kind: "refund", index: -1 } : n.kind === "ending" ? t[n.id] = Qm(e.outcome) : n.kind === "rating" ? t[n.id] = eg(e.outcome) : t[n.id] = tg(n, e);
  return t;
}
function si(e, t) {
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
function sg(e, t) {
  const n = {}, s = si({ ...e, frozen: void 0 }, t);
  for (const r of e.tickets) n[r.id] = s[r.id] ?? { stamp: "refund", index: -1 };
  return n;
}
function rg(e, t, n, s = []) {
  const r = new Set(Array.isArray(s) ? s : [s]);
  return Object.keys(t).map(Number).filter((i) => i > n && Re(e[i])).sort((i, o) => i - o).map((i) => {
    const o = e[i]?.extra?.rlzc?.sub;
    return o && !o.skipped && o.markets && typeof o.markets == "object" ? { index: i, state: "ok", hits: o.markets } : !o && r.has(i) ? { index: i, state: "pending", hits: {} } : { index: i, state: "miss", hits: {} };
  });
}
function ig(e, t) {
  const n = [];
  if (e.frozen) return n;
  for (const s of e.markets)
    s.kind !== "event" && s.kind !== "freak" || t[s.id] || !s.judge || (n.push({ id: s.id, judge: s.judge }), s.judgeNo && n.push({ id: `${s.id}:no`, judge: s.judgeNo }));
  return n;
}
function yc(e, t) {
  return e.markets.find((n) => n.id === t);
}
function og(e, t) {
  return e?.options.find((n) => n.id === t)?.label ?? t;
}
function lg(e, t) {
  const n = yc(e, t.market);
  return `下注·${e.packName}·${n?.q ?? t.market}·${og(n, t.option)}`;
}
function ag(e, t, n) {
  const s = [];
  for (const r of e.tickets) {
    s.push({ delta: -r.stake, source: lg(e, r), type: "bet", at: r.at, pos: r.after, seq: r.seq ?? 0 });
    const i = t[r.id];
    if (!i || i.stamp === "lose") continue;
    const o = yc(e, r.market)?.q ?? r.market, l = (i.index >= 0 ? n(i.index) : void 0) ?? r.at;
    i.stamp === "win" ? s.push({ delta: mc(r.stake, r.odds), source: `赌票兑付·${e.packName}·${o}`, type: "bet", at: l, pos: i.index }) : s.push({ delta: r.stake, source: `赌票退还·${e.packName}·${o}`, type: "bet", at: l, pos: i.index });
  }
  return s;
}
const cg = '你是回廊黑市的庄家，要为主播即将进入的副本开几个离谱但有趣的盘口。你只知道下面这些公开信息，不知道剧情会怎么走。出2到3道是非题：题目20字以内，称{{user}}为主播，不用性别代词；必须能从之后的正文里直接看出是或否；不要问结局、评价和生死，那些已经有盘了；不要涉及公开信息以外的设定。每题给一个你估计「是」的概率p（0.05到0.95）。只输出JSON：[{"q":"题目","judge":"用来判断是否发生的一句陈述","p":0.3}]', ug = 4e3;
function Ag(e) {
  const n = Va(e).split(`
`), s = n.findIndex((i) => /副本简报/.test(i));
  return (s >= 0 ? n.slice(s, s + 6) : n).join(`
`).trim().slice(0, 1e3);
}
function dg(e) {
  const t = e.docs.filter((s) => s.md && s.md.trim()).map((s) => `## ${s.title}
${s.md.trim()}`).join(`

`).slice(0, ug), n = [
    `【副本】${e.name}　等级：${e.level}`,
    `【简报】
${e.briefing || "（无）"}`,
    `【公开资料】
${t || "（无）"}`
  ].join(`

`);
  return { system: cg, user: n };
}
function fg(e) {
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
    if (!(!a || a.length > 20 || !c || !Number.isFinite(u) || u < 0.05 || u > 0.95) && (o.push({ q: a, judge: c, p: dr(u) }), o.length >= 3))
      break;
  }
  if (!o.length) throw new Fe("没有合格的题");
  return o;
}
async function pg(e, t, n = 1) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return fg(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
function Uo(e, t) {
  return e.map((n, s) => gc("freak", { id: `F${s + 1}`, q: n.q, yes: "会", no: "不会", p: n.p, judge: n.judge }, t));
}
function hg(e) {
  return `{{user}}在黑市押了自己本局失败，押注${e}分。`;
}
function mg(e) {
  return `{{user}}刚在赌坊输掉${e}分，余额已低于斩杀线。`;
}
function gg(e) {
  return `{{user}}刚在赌坊一局赢了${e}分。`;
}
function xg(e) {
  return e.kind === "betLose" ? hg(e.amount) : e.kind === "casinoLoss" ? mg(e.amount) : gg(e.amount);
}
function ri(e, t) {
  if (t.kind === "betLose") {
    const n = e.find((s) => s.kind === "betLose");
    if (n && !n.sent) return e.map((s) => s === n ? { ...s, amount: s.amount + t.amount, after: t.after } : s);
  }
  return [...e, t];
}
function vg(e) {
  return e.filter((t) => !t.sent);
}
function yg(e) {
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
const Fr = (e) => Array.from({ length: e }, (t, n) => n + 1), Ni = [
  {
    id: "bell",
    name: "听钟",
    desc: "押钟声单双、大小，或猜几下。",
    bets: [
      { id: "odd", label: "单", mult: 1.6 },
      { id: "even", label: "双", mult: 1.6 },
      { id: "small", label: "小", mult: 1.6 },
      { id: "big", label: "大", mult: 1.6 },
      ...Fr(12).map((e) => ({ id: `n${e}`, label: `${e}下`, mult: 9.6 }))
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
      ...Fr(20).map((e) => ({ id: `d${e}`, label: `${e}号`, mult: 16 }))
    ]
  },
  {
    id: "lot",
    name: "抽签",
    desc: "三支签，一支大吉。",
    bets: Fr(3).map((e) => ({ id: `s${e}`, label: `第${e}支`, mult: 2.4 }))
  },
  {
    id: "card",
    name: "翻牌",
    desc: "和庄家各翻一张，大的赢，平局庄家赢。",
    bets: [{ id: "high", label: "比大小", mult: 1.73 }]
  }
];
function bn(e) {
  return Ni.find((t) => t.id === e);
}
function Tn(e, t) {
  return Math.min(e, 1 + Math.floor(t() * e));
}
function bg(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function kg(e, t, n, s) {
  const r = bn(e), i = r?.bets.find((u) => u.id === t);
  if (!r || !i) return null;
  let o = !1, l = "", a = [];
  switch (r.id) {
    case "bell": {
      const u = Tn(12, s);
      a = [u], i.id === "odd" || i.id === "even" ? (o = u % 2 === 1 == (i.id === "odd"), l = `${u}下，${u % 2 ? "单" : "双"}`) : i.id === "small" || i.id === "big" ? (o = u <= 6 == (i.id === "small"), l = `${u}下，${u <= 6 ? "小" : "大"}`) : (o = i.id === `n${u}`, l = `${u}下`);
      break;
    }
    case "door": {
      const u = Tn(20, s);
      if (a = [u], i.id.startsWith("r")) {
        const d = Number(i.id.slice(1));
        o = u > (d - 1) * 5 && u <= d * 5;
      } else o = i.id === `d${u}`;
      l = `${u}号门`;
      break;
    }
    case "lot": {
      const u = Tn(3, s);
      a = [u], o = i.id === `s${u}`, l = `第${u}支大吉`;
      break;
    }
    case "card": {
      const u = Tn(13, s), d = Tn(13, s);
      a = [u, d], o = u > d, l = `你 ${u}，庄家 ${d}`;
      break;
    }
  }
  const c = o ? bg(n, i.mult) : 0;
  return { win: o, payout: c, net: o ? c - n : -n, result: l, label: `押${i.label}`, faces: a };
}
function wg(e, t) {
  return `赌坊·${bn(e)?.name ?? e}·${t}`;
}
function Ho(e) {
  const t = Ni.map((i) => i.id), n = Math.min(t.length - 1, Math.floor(e() * t.length)), s = t.filter((i, o) => o !== n), r = Math.min(s.length - 1, Math.floor(e() * s.length));
  return [t[n], s[r]];
}
function zg(e, t, n) {
  const s = e.tables.length === 2 && e.tables.every((o) => bn(o));
  if (s && e.key === t) return { tables: e.tables, key: t, changed: !1 };
  const r = (o) => s && o.length === 2 && o.every((l) => e.tables.includes(l));
  let i = Ho(n);
  for (let o = 0; o < 20 && r(i); o++) i = Ho(n);
  return r(i) && (i = Ni.map((o) => o.id).filter((o) => !e.tables.includes(o))), { tables: i, key: t, changed: !0 };
}
const ii = "rlzc", Ss = { optIn: !1, injectToAI: !1, source: "local", freq: 3 }, bc = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, Pn = {
  depths: { token: 4, progress: 4, turn: 0, ledger: 4, live: 4 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...es },
  subApi: structuredClone(bc),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0, live: !0, auditDebug: !0, manualDebug: !0, injectionDebug: !0 },
  live: { ...Ss }
}, f = /* @__PURE__ */ tr({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(Pn),
  packs: [],
  lastInjection: ts,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: [],
  /** 黑市（第四期）：本局盘口、赌票、摆桌 */
  market: lx(),
  /** 入场提示小卡片（右上角，不挡操作）；同一时间只有一张 */
  entryCard: null
});
function et(e) {
  return JSON.parse(JSON.stringify(e));
}
function As(...e) {
  f.settings.debug && console.log("[rlzc]", ...e);
}
function _g() {
  const e = ve().extensionSettings, t = e[ii] ?? {}, n = {
    ...structuredClone(Pn),
    ...t,
    depths: { ...Pn.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? Pn.depths.ledger },
    ball: { ...Pn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => ya(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...es, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(bc),
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
    live: $g(t.live)
  };
  e[ii] = n, f.settings = n, f.packs = wi(n.customPacks);
}
function $g(e) {
  const t = e ?? {}, n = Math.floor(Number(t.freq));
  return {
    optIn: typeof t.optIn == "boolean" ? t.optIn : Ss.optIn,
    injectToAI: typeof t.injectToAI == "boolean" ? t.injectToAI : Ss.injectToAI,
    source: t.source === "ai" ? "ai" : "local",
    freq: Number.isFinite(n) ? Math.max(1, Math.min(10, n)) : Ss.freq
  };
}
function ke() {
  ve().extensionSettings[ii] = /* @__PURE__ */ oe(f.settings), ve().saveSettingsDebounced(), f.packs = wi(f.settings.customPacks);
}
function Sg(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = ya(t);
  if (n.length) return n;
  const s = t;
  return wi([]).some((r) => r.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (f.settings.customPacks = [...f.settings.customPacks.filter((r) => r.id !== s.id), s], ke(), []);
}
function Cg(e) {
  f.settings.customPacks = f.settings.customPacks.filter((t) => t.id !== e), ke();
}
function tt() {
  const e = mt()[Ja];
  return !e || Array.isArray(e) ? {} : e;
}
function kn(e) {
  mt()[Ja] = e, nt();
}
function pn(e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (o.is_user || o.is_system) continue;
    const l = o.extra?.rlzc?.ledger;
    if (!Array.isArray(l)) continue;
    const a = [o.send_date, o.gen_finished].map((c) => c instanceof Date ? c.getTime() : Date.parse(String(c ?? ""))).find((c) => Number.isFinite(c));
    for (const c of l) t.push({ e: { ...c, mesIndex: i, ts: a }, pos: i, g: 0, seq: 0 });
  }
  for (const { pos: i, seq: o, ...l } of cx(e))
    t.push({ e: { ...l, mesIndex: i, ts: Do(l.at) }, pos: i < 0 ? Number.MAX_SAFE_INTEGER : i, g: o === void 0 ? 1 : 2, seq: o ?? 0 });
  t.sort((i, o) => i.pos - o.pos || i.g - o.g || i.seq - o.seq);
  const n = t.map((i) => i.e), r = (tt().adjust ?? []).map((i) => ({
    delta: i.amount,
    source: `手动：${i.note}`,
    type: "manual",
    at: i.at,
    mesIndex: -1,
    ts: i.ts ?? Do(i.at)
  }));
  return Uh(n, r);
}
function $t(e) {
  const t = tt();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const r = e[s];
    if (r.is_user || !r.mes) continue;
    const i = n.exec(r.mes);
    if (!i) continue;
    const o = Xa(i[1]);
    if (o !== null) {
      const l = Ye(r.send_date ?? r.gen_finished ?? void 0);
      return kn({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function st(e = Z(), t = e.length) {
  const n = tt().fix?.level;
  return n && ["D", "C", "B", "A", "S"].includes(n) ? n : Za(e, t) ?? "D";
}
function Eg(e) {
  if (!(tt().init != null || f.ledger.length > 0)) return "";
  const s = $t(e), r = fn(s.value, f.ledger), i = st(e), o = _t[i], l = as(s.value, f.ledger, o), a = Gh(r, l, i, o), c = $e();
  return c?.status === "active" && c.live ? _m(a, Ei(e, c.id)) : a;
}
function Wo(e, t = !0) {
  const n = Z(), s = n[e];
  if (!s || s.is_user) return;
  const r = s.mes ?? "", i = Ye(s.send_date ?? s.gen_finished ?? void 0), o = [], l = new RegExp(Up.source, "g");
  let a;
  for (; (a = l.exec(r)) !== null; ) {
    const u = Dh(a[1]);
    u && o.push({ delta: u.delta, source: u.source, type: "tag", at: i });
  }
  const c = t ? ar(r) : null;
  if (c && f.pack && !f.pack.rest) {
    const u = {
      结果: c.result ?? "",
      评价: c.rating ?? "",
      ...c.fields
    }, d = st(n, e), p = $t(n), x = fn(p.value, f.ledger), z = !!f.session?.clearance, w = Vh(f.pack.level, d, u, x, z, f.pack.name);
    if (w.warn) {
      s.extra = s.extra ?? {};
      const j = s.extra.rlzc ?? { phase: "", round: 0, injected: [] };
      s.extra.rlzc = et({ ...j, settleWarn: w.warn });
    }
    if (w.delta !== 0) {
      const j = { delta: w.delta, source: w.source, type: "settle", at: i };
      w.clearWin && (j.clear = !0), o.push(j);
    }
  }
  if (o.length || s.extra?.rlzc?.ledger?.length) {
    s.extra = s.extra ?? {};
    const u = s.extra.rlzc ?? { phase: "", round: 0, injected: [] }, d = [...o, ...(u.ledger ?? []).filter((p) => p.type === "tip")];
    s.extra.rlzc = et({ ...u, ledger: d.length ? d : void 0 }), nt();
  }
  f.ledger = pn(Z());
}
function Mg(e, t) {
  const n = tt(), s = Ye(void 0), r = [...n.adjust ?? [], { amount: e, note: t, at: s, ts: Date.now() }];
  kn({ ...n, adjust: r }), f.ledger = pn(Z());
}
function Tg(e, t) {
  Mg(e, t);
}
function Ig(e) {
  const t = tt(), n = Ye(void 0);
  kn({ ...t, init: { value: e, source: "手动设置", at: n } }), f.ledger = pn(Z());
}
function Ng(e, t) {
  if (!e && !t) return;
  const n = tt(), s = Z(), r = Ye(void 0);
  kn({ ...n, fix: { level: e, rank: t, at: r, afterIndex: s.length - 1 } });
}
function $e() {
  return Yh(mt()[jt]);
}
function fr() {
  const e = mt(), t = Array.isArray(e[jt]?.declined) ? e[jt].declined : [], n = Array.isArray(e[Fo]) ? e[Fo] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function Pg(e) {
  const t = mt(), n = [...fr().filter((s) => s !== e), e];
  t[jt] = { ...t[jt] ?? {}, declined: n }, nt();
}
function un(e) {
  const t = mt(), n = fr(), s = n.length ? { declined: n } : {};
  e ? t[jt] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[jt] = s : delete t[jt], nt();
}
function Pi(e) {
  const t = $e();
  t && (e(t), un(t), Pe());
}
function kc(e) {
  const t = Z();
  return (e === "swipe" || e === "continue") && Re(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Gs(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Qa(t, f.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = Ea(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? rm(e, n, s) : null };
}
function Pe() {
  const e = Z();
  let t = $e();
  if (t) {
    const s = JSON.stringify(t);
    if (!Zh(e, t))
      Nc(t.id), un(null), Te("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const r = Gs(e, t);
      r.progress && (t.status = r.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && un(t);
    }
  }
  const n = Gs(e, t);
  f.session = n.session, f.pack = n.pack, f.progress = n.progress, f.audit = n.audit, f.subLine = Cc(e, n.progress), px(e, n.session), f.ledger = pn(e), f.tick++, us(), Og(n.session);
}
function wc() {
  if (f.session)
    return ec(f.session, f.progress?.rolesFromChat);
}
function Ks() {
  for (const e of sh) Zt(e, "", 0, !1);
}
let Vn = -1;
function jg(e) {
  const t = kc(e), n = $e(), { pack: s, progress: r, audit: i } = Gs(t, n), o = n ? ec(n, r?.rolesFromChat) : void 0, l = zn() && !!r, a = l ? ur(t, r.entryIndex) : null, c = s ? lh(s, r, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: r?.panel?.limit,
    audit: i ?? void 0,
    subNext: l ? zh(t, r.entryIndex) : void 0,
    stateText: a ? Ba(s, a.state) : void 0
  }) : ts;
  Ks();
  const u = f.settings.depths;
  c.token && Zt(Ma, c.token, u.token, !0), c.progress && Zt(Ta, c.progress, u.progress, !1), c.turn && Zt(Ia, c.turn, u.turn, !1), c.state && Zt(Na, c.state, u.progress, !1);
  const d = tt();
  let p = Eg(t);
  if (d.fix) {
    const z = Wh(d.fix);
    z && (p = p ? `${p}
${z}` : z);
  }
  const x = Ve();
  if (x.hints.length) {
    const z = x.hints.map(xg).join("");
    p = p ? `${p}
${z}` : z, x.hints.some((w) => !w.sent) && (x.hints = x.hints.map((w) => ({ ...w, sent: !0 })), St(x));
  }
  if (p && Zt(Pa, p, u.ledger, !1), f.settings.live.injectToAI) {
    const z = Nh(Hi(/* @__PURE__ */ new Set(), t));
    z && Zt(ja, z, u.live, !1);
  }
  f.lastInjection = c, Vn = t.length, As("注入", e, c);
}
const oi = /* @__PURE__ */ new Set();
async function Lg() {
  const e = Z(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Yp(n.mes);
  if (!s) return;
  const r = $e();
  if (!r || r.status !== "active" || r.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const i = `${Vt()}:${t}:${n.mes}`;
  if (oi.has(i)) return;
  oi.add(i);
  const { pack: o, progress: l } = Gs(e, r);
  if (!o || !l || l.ended) return;
  const a = Jp(o, l.phase, l.round, s);
  a && await Ut(`是否跳到${s}？（${a.label}）`) && (r.manual.push({ kind: "skip", atIndex: t, targetPhase: a.phase, targetRound: a.round }), un(r));
}
async function Dg(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Ks();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await Lg(), await Zg(s), jg(s);
  } catch (r) {
    console.error("[rlzc] 拦截器出错", r), Ks();
  }
}
const ss = /* @__PURE__ */ new Set();
function ji() {
  const e = $e();
  if (!e || e.status !== "ended") return 0;
  const t = f.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
let Fg = 0, wn = null;
function zc(e) {
  const { index: t, info: n, pack: s } = e, r = Vt(), i = `${r}:${t}:${n.name}`;
  if (ss.has(i) || $e()?.status === "active") return;
  ss.add(i);
  const l = oc(s ?? {}, f.settings.live.optIn);
  wn = e, f.entryCard = {
    id: ++Fg,
    key: i,
    chatId: r,
    index: t,
    name: s?.name ?? n.name,
    level: s ? s.rest ? "—" : s.level : ki(n),
    unknown: !s,
    liveShow: l.show,
    live: l.checked
  };
}
function pr() {
  const e = f.entryCard;
  e && (ss.delete(e.key), f.entryCard = null, wn = null);
}
function Rg(e) {
  f.entryCard && (f.entryCard.live = e);
}
function rs() {
  f.entryCard = null, wn = null;
}
function Go() {
  const e = f.entryCard, t = wn;
  rs(), !(!e || !t || Vt() !== e.chatId) && Pg($i(t.index, t.info.name));
}
function Ko() {
  const e = f.entryCard, t = wn;
  if (rs(), !e || !t) return;
  if (Vt() !== e.chatId) {
    ss.delete(e.key);
    return;
  }
  const { index: n, info: s } = t;
  e.liveShow && _c(e.live);
  const r = cs(Z(), n, f.packs);
  if (!r || r.info.name !== s.name) {
    Te("warning", "入场消息已变化，未启用。");
    return;
  }
  if ($e()?.status === "active") return;
  const i = { ...s };
  t.pack || (i.rounds = xa(s.limit, ki(s), f.settings.genericCaps).rounds), Sc(t.pack ?? ba(i, f.settings.genericCaps), n, i, e.liveShow && e.live);
}
function _c(e) {
  f.settings.live.optIn !== e && (f.settings.live.optIn = e, ke());
}
function Li(e = Z()) {
  for (let t = ji(); t < e.length; t++) if (Re(e[t])) return t;
  return -1;
}
function Di() {
  const e = Z(), t = Li(e);
  return t < 0 ? "" : `${t}${e[t].swipe_id ?? ""}${e[t].mes ?? ""}`;
}
let Fi = "";
function Ri() {
  Fi = Di();
  const e = Qh(Z(), $e(), fr(), f.packs, ji());
  e && zc(e);
}
function $c() {
  const e = f.entryCard;
  e && cs(Z(), e.index, f.packs)?.info.name !== wn?.info.name && pr();
}
function Oi() {
  $e()?.status !== "active" && ($c(), Ri());
}
const Cs = Lm(() => {
  !Dm() && Di() !== Fi && Oi();
});
function Og(e) {
  e?.status === "active" ? Cs.stop() : Cs.running || (Fi = Di(), Cs.start());
}
function Bg(e) {
  Pe();
  const t = Li();
  f.entryCard && (e === t || e === f.entryCard.index) && pr(), e === t && Ri();
}
function Sc(e, t, n, s = !1) {
  const r = Z(), i = r[t], o = $e();
  o && ux(o);
  const l = qh(e, t, n), a = gt();
  if (a.corridor.on && (a.corridor.on = !1, is(a, a.corridor.show, cn.enterOff)), s && !e.disableLive && (l.live = !0, is(a, l.id, cn.instanceOn)), _n(a), !e.rest) {
    const c = $t(r);
    as(c.value, f.ledger, _t[st(r)]) && (l.clearance = !0);
  }
  rs(), i.extra = i.extra ?? {}, i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: l.id }, un(l), Ax(l, e, t), Pe(), f.progress && (i.extra.rlzc.injected = et(f.progress.perMessage[t]?.events ?? [])), nt(), Te("success", `已进入副本《${e.name}》。`);
}
async function Vg(e) {
  const t = f.packs.find((l) => l.id === e);
  if (!t) return;
  const n = Z();
  let s = n.length - 1;
  for (; s >= 0 && !Re(n[s]); ) s--;
  if (s < 0) {
    Te("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  if ($e()?.status === "active" && !await Ut("当前已有进行中的副本，确定要替换吗？")) return;
  const i = oc(t, f.settings.live.optIn), o = await Ah(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`, i.show ? { label: "开启直播", checked: i.checked } : null);
  o.ok && (i.show && _c(o.checked), Sc(t, s, wa(n[s].mes) ?? { name: t.name }, i.show && o.checked));
}
function hr(e) {
  Pi((t) => t.manual.push(e));
}
function mr() {
  return Z().length - 1;
}
async function qo() {
  const e = f.progress;
  if (!(!e || e.ended || !f.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Te("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ut(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (hr({ kind: "skip", atIndex: mr(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Te("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function Yo() {
  if (!(!f.session || f.progress?.ended) && await Ut("确定要手动结束当前副本吗？")) {
    if (f.session.live) {
      const e = gt();
      is(e, f.session.id, cn.instanceOff), _n(e);
    }
    hr({ kind: "end", atIndex: mr() });
  }
}
function Ug(e) {
  hr({ kind: "setPhase", atIndex: mr(), phase: e });
}
function Hg(e) {
  hr({ kind: "setRound", atIndex: mr(), round: e });
}
function Wg(e) {
  Pi((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function Gg(e) {
  Pi((t) => t.manual.splice(e, 1));
}
async function Jo() {
  f.session && await Ut("确定要删除当前副本会话吗？（不会改动聊天记录）") && (Nc(f.session.id), un(null), Pe());
}
function zn() {
  return f.settings.subApi.source !== "off";
}
function Bi() {
  const e = f.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function Kg(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function Cc(e, t) {
  if (!zn() || !t || t.ended) return "";
  if (f.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const r = ur(e, t.entryIndex);
  return r && t.perMessage[r.index] ? `副本记录：已更新（第${t.perMessage[r.index].round}轮）` : "副本记录：尚未整理";
}
let Un = null;
const Vi = /* @__PURE__ */ new Set();
function An(e) {
  return bh(Vt(), e, Z()[e]);
}
function Zo(e) {
  f.subBusy = e, f.subLine = Cc(Z(), f.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && f.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function Ec(e, t, n) {
  if (An(e) !== t) return;
  const s = Z()[e];
  s?.extra?.rlzc && (s.extra.rlzc = et({ ...s.extra.rlzc, sub: n }), nt(), Pe());
}
function qg(e, t) {
  const n = Z(), s = f.progress, r = f.pack, i = n[e], o = s?.perMessage[e];
  if (!r || !s || !o || !i) return null;
  const l = wc(), a = (E) => ({ ...E, text: Vs(E.text, r, l), if: E.if ? Vs(E.if, r, l) : void 0 }), c = xh(r, i.extra?.rlzc?.injected ?? []).map(a), u = (s.next?.events ?? []).filter((E) => E.if).map(a);
  if (!kh({
    enabled: zn(),
    active: !s.ended && f.session?.status === "active",
    type: t,
    saveMode: f.settings.subApi.saveMode,
    hasEvents: c.length > 0,
    hasNextConditional: u.length > 0
  })) return null;
  const p = An(e);
  if (Vi.has(p)) return null;
  const x = r.phases.find((E) => E.id === o.phase), z = ur(n.slice(0, e), s.entryIndex), w = f.session ? Ve().books[f.session.id] : void 0, j = gh({
    pack: r,
    phaseName: x?.name ?? o.phase,
    round: o.round,
    prevState: z?.state ?? null,
    events: c,
    nextConditional: u,
    text: String(i.mes ?? ""),
    markets: w ? ig(w, f.market.results) : []
  }), H = ve().substituteParams, L = H ? { system: H(j.system), user: H(j.user) } : j, S = Yg(e, p, o.round, L);
  return Un = { key: p, index: e, promise: S }, S.finally(() => {
    Un?.key === p && (Un = null);
  }), S;
}
async function Yg(e, t, n, s) {
  Zo(!0);
  try {
    let r = 2;
    for (; ; ) {
      const i = Bi();
      if (!i) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await wh((a) => _i(i, a), s, r);
        Ec(e, t, { ...l, ms: Date.now() - o, via: Kg(i), at: (/* @__PURE__ */ new Date()).toISOString() }), Vi.add(t);
        return;
      } catch (l) {
        if (An(e) !== t) return;
        const a = cr(l), c = String(l?.message ?? l).slice(0, 200);
        if (As("副本事件检测失败", a, l), !f.settings.subApi.wait) {
          Te("warning", `第${n}轮事件检测失败（${a}），已沿用上一轮状态。`), Rr(e, t, a);
          return;
        }
        if (await Jg(n, a, c) === "skip") {
          Rr(e, t, a);
          return;
        }
        r = 0;
      }
    }
  } catch (r) {
    Te("error", String(r?.message ?? r)), Rr(e, t, "其他");
  } finally {
    Zo(!1);
  }
}
function Rr(e, t, n) {
  Vi.add(t), Ec(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function Jg(e, t, n) {
  const s = ve();
  if (!s.Popup || !s.POPUP_TYPE)
    return window.confirm(`第${e}轮事件检测失败（${t}）。重试吗？取消则这轮先跳过。`) ? "retry" : "skip";
  const r = f.settings.subApi, i = document.createElement("div"), o = document.createElement("h3");
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
  const p = [{ value: "", text: "请选择…" }];
  for (const w of r.presets) r.source === "preset" && w.id === r.presetId || p.push({ value: `preset:${w.id}`, text: `自设API：${w.name}` });
  r.source !== "main" && p.push({ value: "main", text: "跟随主API" });
  for (const w of p) {
    const j = document.createElement("option");
    j.value = w.value, j.textContent = w.text, d.append(j);
  }
  u.append(d), c.append(u), i.append(o, l, a, c);
  let x;
  d.addEventListener("change", () => {
    const w = d.value;
    w && (w === "main" ? r.source = "main" : (r.source = "preset", r.presetId = w.slice(7)), ke(), x.complete(s.POPUP_RESULT.CUSTOM1));
  }), x = new s.Popup(i, s.POPUP_TYPE.TEXT, "", {
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
  const z = await x.show();
  return z === s.POPUP_RESULT.AFFIRMATIVE || z === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function Zg(e) {
  const t = Un;
  if (!(!t || !f.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= kc(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function Xg(e, t) {
  const n = Z(), s = n[e];
  if (!Re(s)) return;
  const r = $e();
  if (t !== "first_message" && pr(), !r || r.status === "ended") {
    if (cs(n, e, f.packs)) {
      const c = Xh(n, f.packs, ji(), e, fr());
      c && zc(c);
    }
    if (t === "first_message") return;
    Pe(), Wo(e, !1), Qo(e), Vr(e, t), Xo(), nl();
    return;
  }
  if (t === "first_message") return;
  let i = null;
  zn() && (Hn = e);
  const o = _a(s.mes);
  o && (r.roles = { ...r.roles ?? {}, ...o }), un(r), Pe();
  const l = f.progress?.perMessage[e];
  if (l && f.pack) {
    const c = f.pack.phases.find((w) => w.id === l.phase), u = {
      phase: c?.name ?? l.phase,
      round: l.round,
      injected: Vn === e ? f.lastInjection.injected : l.events
    }, d = f.pack.time;
    d.type === "clock" && c?.clock && !c.night && !c.frozen && (u.clock = Sa(d.dayStart, d.minutesPerRound, l.round));
    const p = Vn === e ? f.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    p && (u.limit = p);
    const x = s.extra?.rlzc?.entry;
    x && (u.entry = x), Vn === e && f.lastInjection.skipped?.length && (u.skippedEvents = f.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (u.sub = s.extra.rlzc.sub), t === "continue" && s.extra?.rlzc?.live && (u.live = s.extra.rlzc.live);
    const z = (s.extra?.rlzc?.ledger ?? []).filter((w) => w.type === "tip");
    t === "continue" && z.length && (u.ledger = z), s.extra = s.extra ?? {}, s.extra.rlzc = et(u), nt(), Pe(), i = qg(e, t);
  }
  Hn >= 0 && (Hn = -1, i || Pe());
  const a = ar(s.mes);
  if (a && Te("info", `副本结算：${a.result ?? "—"}${a.rating ? `，评价 ${a.rating}` : ""}`), Wo(e), Qo(e), i) {
    const c = An(e);
    i.then(() => {
      An(e) === c && Vr(e, t);
    });
  } else Vr(e, t);
  Xo(), nl();
}
function Xo() {
  const e = tt();
  e.fix && kn({ ...e, fix: void 0 });
}
function Qo(e) {
  const t = Z(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const r = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!r) return;
  const i = Xa(r[1]);
  if (i === null) return;
  const o = $t(t), l = (c) => c.mesIndex === e && (c.type === "tip" || c.type === "bet" && /^赌票/.test(c.source)), a = fn(o.value, pn(t).filter((c) => !l(c)));
  i !== a && (As(`积分核对不符（楼层${e}）：状态栏 ${i}，账本 ${a}`), n.extra?.rlzc && (n.extra.rlzc = et({ ...n.extra.rlzc, ledgerMismatch: { status: i, ledger: a } }), nt()));
}
let bs = null;
function el() {
  Cs.stop(), bs && clearTimeout(bs), oi.clear(), pr(), ss.clear(), Vn = -1, Hn = -1, f.chatId = Vt(), f.debugUnlocked = !1, f.lastInjection = ts, Ks(), Pm(), sx(), f.ledger = pn(Z()), Pe(), Ri();
  const e = f.chatId;
  bs = setTimeout(() => {
    bs = null, Vt() === e && Oi();
  }, 300), setTimeout(() => Ui(), 50);
}
function Or(e) {
  Pe(), $c(), e !== void 0 && e === Li() && Oi();
}
function Mc() {
  return f.settings.panelDisplay === "statusbar" ? an.filter((e) => e !== "副本") : an;
}
function Br(e) {
  Da(e, Mc());
}
function Ui(e = !1) {
  fh(Mc(), e);
}
function Qg(e) {
  f.settings.panelDisplay !== e && (f.settings.panelDisplay = e, ke(), Ui(!0));
}
const Es = Im;
function gt() {
  return mm(mt()[rc]);
}
function _n(e) {
  mt()[rc] = et(e), nt();
}
function is(e, t, n) {
  if (!t) return;
  const s = Ar(Z(), e) + 1, r = { id: s, t: "sys", name: "", text: n, amount: 0, net: 0, show: t };
  e.sys = [...e.sys, r].slice(-100), e.seq = s, Ti([r]);
}
function ex() {
  return "c" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function tx(e) {
  const t = f.session, n = f.progress;
  if (!!t && e > t.entryIndex && (!n?.ended || n.endIndex !== void 0 && e <= n.endIndex)) return t.live && f.pack ? { show: t.id, scope: "instance", pack: f.pack } : null;
  const r = gt();
  return r.corridor.on && r.corridor.show ? { show: r.corridor.show, scope: "corridor", pack: null } : null;
}
function Vr(e, t) {
  if (t === "continue" || t === "first_message") return;
  const n = Z(), s = n[e];
  if (!Re(s) || Ht(s)) return;
  const r = tx(e);
  if (!r) return;
  const i = gt(), { show: o, scope: l, pack: a } = r, c = f.progress, u = s.extra?.rlzc ?? { phase: "", round: 0, injected: [] }, d = Ci(n, o, e), p = u.sub && !u.sub.skipped ? { hype: u.sub.hype, hurt: u.sub.hurt } : void 0, x = l === "instance" && c?.endIndex === e && c.endedBy === "tag" ? ar(s.mes) : null, z = !!x && ["死亡", "阵亡"].includes(String(x.result ?? "").trim()), w = c?.roundsLeft, j = /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(s.mes ?? "")), H = new Set((a?.events ?? []).filter((O) => O.kind !== "directive").map((O) => O.id)), L = Sh({
    aiSource: f.settings.live.source === "ai",
    subOn: zn(),
    roundInShow: d.length + 1,
    freq: f.settings.live.freq,
    phaseSwitch: j,
    hurt: cc(String(s.mes ?? ""), p),
    eventDone: !!u.sub && !u.sub.skipped && (u.sub.events ?? []).some((O) => O.status === "done")
  }), S = bm({
    show: o,
    scope: l,
    packLevel: a?.level ?? null,
    playerLevel: Mi(n, e + 1),
    isRest: !!a?.rest,
    prevHeat: d.length ? d[d.length - 1].rec.heat : null,
    roundsInShow: d.length,
    text: String(s.mes ?? ""),
    hasEvents: (u.injected ?? []).some((O) => H.has(O)),
    hasPhaseSwitch: j,
    sub: p,
    isEnd: l === "instance" && !!w && w.y > 0 && w.x < w.y * 0.1,
    phaseId: l === "instance" ? c?.perMessage[e]?.phase : void 0,
    pool: Es.pool,
    templates: Es.templates,
    packDanmaku: a?.danmaku,
    names: Es.names,
    whoNames: ac(lc(n, e + 1), String(ve().name1 ?? "")),
    recentTexts: gm(n.slice(0, e)),
    firstId: Ar(n, i) + 1,
    settle: x ? { died: z, tipsBefore: Ei(n.slice(0, e), o) } : void 0,
    awaitAi: L,
    rand: Math.random
  });
  L && (S.ai = { ok: !1, pending: !0 });
  const E = Ye(s.send_date ?? s.gen_finished ?? void 0), Y = [...(u.ledger ?? []).filter((O) => O.type !== "tip"), ...wm(S, E)];
  s.extra = s.extra ?? {}, s.extra.rlzc = et({ ...u, live: S, ledger: Y.length ? Y : void 0 }), i.seq = Math.max(i.seq, ...S.feed.map((O) => O.id)), _n(i), f.ledger = pn(Z()), f.tick++, S.feed.length ? Ti(S.feed, !0) : us(), L && nx(e, S.scope === "instance" ? a?.name : void 0);
}
function nx(e, t) {
  const n = Z(), s = An(e), r = Bi();
  if (!r) {
    Ur(e, s, [], "副本事件检测没有设置好", 0);
    return;
  }
  const i = [];
  for (let u = e; u >= 0 && i.length < 2; u--) Re(n[u]) && i.unshift(String(n[u].mes ?? ""));
  const o = Eh({
    scene: t ?? "回廊",
    texts: i,
    cast: ac(lc(n, e + 1), String(ve().name1 ?? "")),
    samples: Ch(Es.pool, 10, Math.random)
  }), l = ve().substituteParams, a = l ? { system: l(o.system), user: l(o.user) } : o, c = Date.now();
  Th((u) => _i(r, u, { temperature: 0.9 }), a, 1).then((u) => Ur(e, s, u, null, Date.now() - c)).catch((u) => {
    As("AI 弹幕生成失败", u);
    const d = String(u?.message ?? u).slice(0, 120);
    Ur(e, s, [], `${cr(u)}：${d}`, Date.now() - c);
  });
}
function Ur(e, t, n, s, r) {
  if (An(e) !== t) return;
  const i = Z(), o = i[e], l = Ht(o);
  if (!l?.pending || !o.extra?.rlzc) return;
  const a = gt(), c = Ac(l, s ? null : n, Ar(i, a) + 1, Math.random), u = s ? 0 : Math.min(n.length, 13), d = { ...c, ai: s ? { ok: !1, error: s, ms: r } : { ok: !0, count: u, ms: r } };
  o.extra.rlzc = et({ ...o.extra.rlzc, live: d }), a.seq = Math.max(a.seq, ...d.feed.map((p) => p.id)), _n(a), f.tick++, Ti(d.feed, !0);
}
function sx() {
  const e = Z();
  let t = !1;
  for (const n of e) {
    const s = Ht(n);
    if (!s?.pending || !n.extra?.rlzc) continue;
    const r = gt(), i = Ac(s, null, Ar(e, r) + 1, Math.random);
    n.extra.rlzc = et({ ...n.extra.rlzc, live: { ...i, ai: { ok: !1, error: "没有等到结果" } } }), r.seq = Math.max(r.seq, ...i.feed.map((o) => o.id)), _n(r), t = !0;
  }
  t && nt();
}
function rx() {
  const e = gt();
  return f.session?.status === "active" && f.pack ? Si({ packLevel: f.pack.level, playerLevel: Mi(Z()), isRest: !!f.pack.rest, heat: 20, rand: 1 }) : e.corridor.viewers ?? 0;
}
function ix() {
  const e = f.session;
  return e?.status === "active" ? !!e.live : gt().corridor.on;
}
function Hi(e, t = Z()) {
  const n = f.session, s = n?.status === "active";
  return Cm(
    t,
    gt(),
    {
      inInstance: s,
      instanceLive: !!(s && n?.live),
      instanceShow: n?.id,
      startViewers: rx(),
      injectToAI: f.settings.live.injectToAI
    },
    e
  );
}
function ox() {
  if (f.session?.status === "active") return !1;
  const e = gt();
  if (e.corridor.on)
    e.corridor.on = !1, is(e, e.corridor.show, cn.corridorOff);
  else {
    const t = ex();
    e.corridor = {
      on: !0,
      show: t,
      viewers: Si({ packLevel: null, playerLevel: Mi(Z()), isRest: !1, heat: 20, rand: 0.9 + Math.random() * 0.2 })
    }, is(e, t, cn.corridorOn);
  }
  return _n(e), f.tick++, us(), !0;
}
function lx() {
  return { book: null, results: {}, tickets: [], pending: 0, tables: [], casinoOpen: !0 };
}
function Ve() {
  return yg(mt()[fc]);
}
function St(e) {
  mt()[fc] = et(e), nt();
}
let Hn = -1;
function ax() {
  return [Hn, Un?.index ?? -1].filter((e) => e >= 0);
}
function Wi(e = Z()) {
  return fn($t(e).value, f.ledger);
}
function Tc(e) {
  if (tt().init) return;
  const t = $t(e), n = tt();
  n.init || kn({ ...n, init: { value: t.value, source: t.source, at: Ye(void 0) } });
}
function Ic() {
  const e = $e();
  return e?.status === "active" && e.live ? Ei(Z(), e.id) : 0;
}
function gr(e, t, n) {
  if (t.frozen) return { results: {}, tickets: si(t, {}), rounds: [] };
  let s = { voided: !0, ended: !1 }, r = [], i = {};
  if (n && n.id === t.session) {
    const l = Qa(n, f.packs), a = l ? Ea(e, n, l) : null;
    a && (s = {
      ended: a.ended,
      endedBy: a.endedBy,
      endIndex: a.endIndex,
      result: a.settlement?.result,
      rating: a.settlement?.rating
    }, r = rg(e, a.perMessage, a.entryIndex, ax()), i = a.phaseEnds);
  }
  const o = ng({ markets: t.markets, rounds: r, outcome: s, phaseEnds: i });
  return { results: o, tickets: si(t, o), rounds: r };
}
function cx(e) {
  const t = Ve(), n = $e(), s = (i) => e[i] ? Ye(e[i].send_date ?? e[i].gen_finished ?? void 0) : void 0, r = [];
  for (const i of Object.values(t.books)) r.push(...ag(i, gr(e, i, n).tickets, s));
  for (const i of t.casino.plays)
    r.push({ delta: i.net, source: wg(i.table, i.label), type: "bet", at: i.at, pos: i.after, seq: i.seq ?? 0 });
  return r;
}
function ux(e) {
  const t = Ve(), n = t.books[e.id];
  if (!n || n.frozen) return;
  const s = Z(), r = sg(n, gr(s, n, e).results);
  for (const i of n.tickets) r[i.id].index < 0 && (r[i.id].index = Math.max(s.length, i.after + 1));
  n.frozen = r, St(t);
}
function Nc(e) {
  const t = Ve(), n = t.books[e];
  if (!n || n.frozen) return;
  const s = Z().length;
  n.frozen = Object.fromEntries(n.tickets.map((r) => [r.id, { stamp: "refund", index: Math.max(s, r.after + 1) }])), St(t);
}
function Ax(e, t, n) {
  if (t.rest) return;
  const s = Z(), r = zn(), i = Wm({ pack: t, playerLevel: st(s), withEvents: r, rand: Math.random });
  if (!i.length) return;
  const o = Km(i, r, Math.random), l = Ve(), a = { session: e.id, packId: t.id, packName: t.name, openedAt: Ye(void 0), markets: o.markets, tickets: [] };
  o.plan && (a.plan = o.plan, a.reserve = o.reserve), r && (a.freak = { status: "pending" }), l.books[e.id] = a, St(l), r && dx(e.id, t, n);
}
function dx(e, t, n) {
  const s = (c, u) => {
    const d = Ve(), p = d.books[e];
    p && (p.closedAt || p.frozen ? u ? p.freak = { ...c, status: "late" } : p.freak = c : (Object.assign(p, qm(p, u ?? null, Math.random)), p.freak = c), St(d), Pe());
  }, r = Bi();
  if (!r) {
    s({ status: "failed", error: "副本事件检测没有设置好" });
    return;
  }
  const i = dg({
    name: t.name,
    level: t.level,
    briefing: Ag(String(Z()[n]?.mes ?? "")),
    docs: t.docs
  }), o = ve().substituteParams, l = o ? { system: o(i.system), user: o(i.user) } : i, a = Date.now();
  pg((c) => _i(r, c), l, 1).then((c) => s({ status: "ok", count: c.length, ms: Date.now() - a }, c)).catch((c) => {
    As("庄家怪盘出题失败", c);
    const u = String(c?.message ?? c).slice(0, 120);
    s({ status: "failed", error: `${cr(c)}：${u}`, ms: Date.now() - a });
  });
}
const ks = /* @__PURE__ */ new Map();
let tl = null;
function fx(e) {
  const t = Vt(), n = tl !== t;
  n && ks.clear(), tl = t;
  const s = { win: 0, lose: 0, refund: 0 };
  for (const i of e) {
    const o = i.res?.stamp ?? null, l = ks.has(i.ticket.id), a = ks.get(i.ticket.id);
    ks.set(i.ticket.id, o), !n && l && o && o !== a && s[o]++;
  }
  const r = [s.win ? `兑 ${s.win} 张` : "", s.lose ? `废 ${s.lose} 张` : "", s.refund ? `退 ${s.refund} 张` : ""].filter(Boolean);
  r.length && Te("info", `赌票开奖：${r.join("，")}。`);
}
function px(e, t) {
  const n = Ve();
  let s = !1;
  const r = t?.status === "active", i = t ? n.books[t.id] : void 0;
  i && !i.closedAt && !i.frozen && f.progress && Zm(f.progress.perMessage, f.progress.entryIndex) && (i.closedAt = Ye(void 0), s = !0);
  const o = r ? n.casino.key : t?.status === "ended" ? t.id : "", l = zg(n.casino, o, Math.random);
  l.changed && (!r || n.casino.tables.length !== 2) && (n.casino.tables = l.tables, n.casino.key = l.key, s = !0), s && St(n);
  const a = [];
  let c = {};
  for (const u of Object.values(n.books)) {
    const d = gr(e, u, t);
    i && u.session === i.session && (c = d.results);
    for (const p of u.tickets) a.push({ ticket: p, book: u, market: u.markets.find((x) => x.id === p.market), res: d.tickets[p.id] ?? null });
  }
  a.sort((u, d) => (d.ticket.seq ?? 0) - (u.ticket.seq ?? 0)), fx(a), f.market = {
    book: r && i ? i : null,
    results: c,
    tickets: a,
    pending: a.filter((u) => !u.res).length,
    tables: n.casino.tables,
    casinoOpen: !r || !!f.pack?.casino
  };
}
function Pc(e, t) {
  const n = Z(), s = f.market.book;
  return xc({
    playerLevel: st(n),
    stake: t,
    already: s ? Jm(s, e) : 0,
    balance: Wi(n),
    lockedTips: Ic()
  });
}
function hx(e, t, n) {
  const s = $e();
  if (!s || s.status !== "active") return "没有进行中的副本";
  const r = Ve(), i = r.books[s.id];
  if (!i || i.frozen) return "本局没有开盘";
  if (i.closedAt) return "已封盘";
  const o = i.markets.find((d) => d.id === e), l = o?.options.find((d) => d.id === t);
  if (!o || !l) return "没有这个盘口";
  if (f.market.results[e]) return "已开奖";
  const a = Pc(e, n);
  if (!a.ok) return a.reason ?? "不能下注";
  const c = Z();
  Tc(c);
  const u = r.seq + 1;
  return r.seq = u, i.tickets.push({ id: `t${u}`, seq: u, market: e, option: t, stake: n, odds: l.odds, at: Ye(void 0), after: c.length - 1 }), o.kind === "ending" && t === "lose" && (r.hints = ri(r.hints, { kind: "betLose", amount: n, after: c.length - 1 })), St(r), Pe(), null;
}
function jc(e) {
  const t = Z();
  return xc({ playerLevel: st(t), stake: e, already: 0, balance: Wi(t), lockedTips: Ic() });
}
function mx(e, t, n) {
  if (!f.market.casinoOpen) return { error: "赌坊只在回廊营业。" };
  const s = Ve();
  if (!s.casino.tables.includes(e)) return { error: "这张桌今晚没开" };
  const r = jc(n);
  if (!r.ok) return { error: r.reason };
  const i = kg(e, t, n, Math.random);
  if (!i) return { error: "没有这种押法" };
  const o = Z();
  Tc(o);
  const l = st(o), a = Wi(o), c = o.length - 1, u = s.seq + 1;
  return s.seq = u, s.casino.plays = [
    ...s.casino.plays,
    { id: `g${u}`, seq: u, table: e, bet: t, label: i.label, stake: n, win: i.win, payout: i.payout, net: i.net, result: i.result, at: Ye(void 0), after: c }
  ], !i.win && a - n < _t[l] && (s.hints = ri(s.hints, { kind: "casinoLoss", amount: n, after: c })), i.win && i.net > pc[l] * 5 && (s.hints = ri(s.hints, { kind: "casinoWin", amount: i.net, after: c })), St(s), Pe(), { outcome: i };
}
function nl() {
  const e = Ve();
  if (!e.hints.length) return;
  const t = vg(e.hints);
  t.length !== e.hints.length && (e.hints = t, St(e));
}
function gx() {
  const e = $e(), t = e ? Ve().books[e.id] : void 0;
  return t ? gr(Z(), t, e).rounds : [];
}
const Lc = "M16 16c-2.6-3.4-5-5.2-7.6-5.2a5.2 5.2 0 000 10.4c2.6 0 5-1.8 7.6-5.2s5-5.2 7.6-5.2a5.2 5.2 0 010 10.4c-2.6 0-5-1.8-7.6-5.2z", xx = { class: "rlzc-entry-kicker" }, vx = {
  class: "rlzc-entry-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, yx = ["d"], bx = { class: "rlzc-entry-title" }, kx = { class: "rlzc-entry-level" }, wx = { class: "rlzc-entry-name" }, zx = {
  key: 0,
  class: "rlzc-entry-note"
}, _x = { class: "rlzc-entry-foot" }, $x = ["aria-checked"], Sx = { key: 1 }, Cx = { class: "rlzc-entry-actions" }, Ex = /* @__PURE__ */ Be({
  __name: "EntryCard",
  setup(e) {
    const t = K(() => f.entryCard);
    return (n, s) => (y(), We(SA, {
      name: "rlzc-entry-fade",
      mode: "out-in"
    }, {
      default: Ol(() => [
        t.value ? (y(), k("div", {
          key: t.value.id,
          class: se(["rlzc-entry-card", { "beside-panel": C(f).panelOpen }]),
          role: "dialog",
          "aria-label": "检测到副本"
        }, [
          A("button", {
            class: "rlzc-entry-close",
            type: "button",
            "aria-label": "关闭",
            title: "这次先不处理",
            onClick: s[0] || (s[0] = //@ts-ignore
            (...r) => C(rs) && C(rs)(...r))
          }, "✕"),
          A("div", xx, [
            (y(), k("svg", vx, [
              A("path", { d: C(Lc) }, null, 8, yx)
            ])),
            s[4] || (s[4] = A("span", null, "检测到副本", -1))
          ]),
          A("div", bx, [
            A("span", kx, _(t.value.level), 1),
            A("span", wx, _(t.value.name), 1)
          ]),
          t.value.unknown ? (y(), k("div", zx, "未收录，将使用通用副本包")) : U("", !0),
          A("div", _x, [
            t.value.liveShow ? (y(), k("button", {
              key: 0,
              type: "button",
              class: se(["rlzc-entry-live", { on: t.value.live }]),
              role: "switch",
              "aria-checked": t.value.live,
              onClick: s[1] || (s[1] = (r) => C(Rg)(!t.value.live))
            }, [
              A("span", {
                class: se(["rlzc-toggle danger", { on: t.value.live }])
              }, [...s[5] || (s[5] = [
                A("span", null, null, -1)
              ])], 2),
              s[6] || (s[6] = A("span", null, "直播", -1))
            ], 10, $x)) : (y(), k("span", Sx)),
            A("div", Cx, [
              A("button", {
                type: "button",
                class: "rlzc-btn ghost",
                onClick: s[2] || (s[2] = //@ts-ignore
                (...r) => C(Go) && C(Go)(...r))
              }, "不是"),
              A("button", {
                type: "button",
                class: "rlzc-btn rlzc-entry-go",
                onClick: s[3] || (s[3] = //@ts-ignore
                (...r) => C(Ko) && C(Ko)(...r))
              }, "进入")
            ])
          ])
        ], 2)) : U("", !0)
      ]),
      _: 1
    }));
  }
}), Mx = {
  key: 0,
  class: "rlzc-ball-ring",
  viewBox: "0 0 48 48",
  "aria-hidden": "true"
}, Tx = ["stroke-dasharray"], Ix = {
  class: "rlzc-ball-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, Nx = ["d"], Px = {
  key: 1,
  class: "rlzc-ball-live",
  title: "直播中"
}, jx = {
  key: 2,
  class: "rlzc-ball-badge",
  title: "待开奖赌票"
}, Hr = 48, Lx = /* @__PURE__ */ Be({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ pe({ x: 0, y: 0 });
    let n = null;
    function s(p, x) {
      const z = window.innerWidth - Hr - 4, w = window.innerHeight - Hr - 4;
      return { x: Math.min(Math.max(4, p), z), y: Math.min(Math.max(4, x), w) };
    }
    function r() {
      const p = f.settings.ball;
      t.value = s(p.x ?? window.innerWidth - Hr - 12, p.y ?? Math.round(window.innerHeight * 0.35));
    }
    function i(p) {
      p.currentTarget.setPointerCapture(p.pointerId), n = { id: p.pointerId, dx: p.clientX - t.value.x, dy: p.clientY - t.value.y, moved: !1, sx: p.clientX, sy: p.clientY };
    }
    function o(p) {
      !n || n.id !== p.pointerId || (Math.abs(p.clientX - n.sx) + Math.abs(p.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(p.clientX - n.dx, p.clientY - n.dy)));
    }
    function l(p) {
      if (!n || n.id !== p.pointerId) return;
      const x = n.moved;
      n = null, x ? (f.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, ke()) : f.panelOpen = !f.panelOpen;
    }
    const a = K(() => !!f.session && !!f.progress && !f.progress.ended), c = K(() => a.value && !!f.progress?.warn), u = K(() => {
      const p = f.progress;
      return !a.value || !p || !f.pack?.phases.length || !(p.phase.cap > 0) ? null : Math.min(100, Math.max(0, p.round / p.phase.cap * 100));
    }), d = K(() => (f.tick, f.session, ix()));
    return sr(() => f.settings.ball, r, { deep: !0 }), Kl(() => {
      r(), window.addEventListener("resize", r);
    }), xi(() => window.removeEventListener("resize", r)), (p, x) => (y(), k("button", {
      class: se(["rlzc-ball", { "is-active": a.value, "is-warn": c.value, "has-ring": u.value !== null }]),
      style: Qs({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: i,
      onPointermove: o,
      onPointerup: l,
      onPointercancel: l
    }, [
      u.value !== null ? (y(), k("svg", Mx, [
        x[0] || (x[0] = A("circle", {
          class: "rlzc-ball-ring-base",
          cx: "24",
          cy: "24",
          r: "22.5"
        }, null, -1)),
        u.value > 0 ? (y(), k("circle", {
          key: 0,
          class: "rlzc-ball-ring-bar",
          cx: "24",
          cy: "24",
          r: "22.5",
          pathLength: "100",
          "stroke-dasharray": `${u.value} 100`
        }, null, 8, Tx)) : U("", !0)
      ])) : U("", !0),
      (y(), k("svg", Ix, [
        A("path", { d: C(Lc) }, null, 8, Nx)
      ])),
      d.value ? (y(), k("span", Px)) : U("", !0),
      C(f).market.pending > 0 ? (y(), k("span", jx, _(C(f).market.pending), 1)) : U("", !0)
    ], 38));
  }
});
function Dx(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function In(e) {
  return Dx(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Fx(e) {
  const t = [];
  let n = null, s = [];
  const r = () => {
    s.length && t.push(`<p>${s.map(In).join("<br>")}</p>`), s = [];
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
      t.push(`<h${p}>${In(a[2])}</h${p}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(l), u = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (c || u) {
      r();
      const p = c ? "ul" : "ol", x = c ? c[1] : u[2];
      n !== p ? (i(), n = p, t.push(p === "ol" ? `<ol start="${u[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(In(x));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${In(l.trim())}`);
      continue;
    }
    const d = /^>\s?(.*)$/.exec(l);
    if (d) {
      r(), i(), t.push(`<blockquote>${In(d[1])}</blockquote>`);
      continue;
    }
    i(), s.push(l);
  }
  return r(), i(), t.join("");
}
const Rx = {
  key: 0,
  class: "rlzc-docs"
}, Ox = { class: "rlzc-subtabs" }, Bx = ["onClick"], Vx = { class: "rlzc-md" }, Ux = ["innerHTML"], Hx = ["src", "alt"], Wx = {
  key: 2,
  class: "rlzc-note"
}, sl = /* @__PURE__ */ Be({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ pe(0);
    sr(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = K(() => t.pack.docs?.[n.value]), r = K(() => s.value?.md ? Fx(s.value.md) : ""), i = K(() => s.value?.image ? Lp(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (y(), k("section", Rx, [
      A("div", Ox, [
        (y(!0), k(te, null, he(e.pack.docs, (a, c) => (y(), k("button", {
          key: c,
          class: se({ on: n.value === c }),
          onClick: (u) => n.value = c
        }, _(a.title), 11, Bx))), 128))
      ]),
      A("article", Vx, [
        r.value ? (y(), k("div", {
          key: 0,
          innerHTML: r.value
        }, null, 8, Ux)) : U("", !0),
        i.value ? (y(), k("img", {
          key: 1,
          src: i.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, Hx)) : s.value?.image && !i.value ? (y(), k("p", Wx, "图片无法加载：" + _(s.value.image), 1)) : U("", !0)
      ])
    ])) : U("", !0);
  }
}), Gx = {
  key: 0,
  class: "rlzc-ledger-summary"
}, Kx = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, rl = /* @__PURE__ */ Be({
  __name: "LedgerSummary",
  setup(e) {
    const t = K(() => Z()), n = K(() => $t(t.value)), s = K(() => fn(n.value.value, f.ledger)), r = K(() => (f.tick, st(t.value))), i = K(() => _t[r.value]), o = K(() => as(n.value.value, f.ledger, i.value)), l = K(() => f.ledger.length > 0 || n.value.source !== "默认值");
    return (a, c) => l.value ? (y(), k("div", Gx, [
      A("span", {
        class: se(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + _(s.value >= 0 ? "+" : "") + _(s.value), 3),
      o.value ? (y(), k("span", Kx, "待清算")) : U("", !0)
    ])) : U("", !0);
  }
}), qx = { class: "rlzc-system" }, Yx = { class: "rlzc-card rlzc-hero" }, Jx = { class: "rlzc-hero-top" }, Zx = { class: "rlzc-level" }, Xx = {
  key: 0,
  class: "rlzc-chip"
}, Qx = {
  key: 0,
  class: "rlzc-goal"
}, ev = { class: "rlzc-grid" }, tv = {
  key: 0,
  class: "rlzc-stat"
}, nv = {
  key: 1,
  class: "rlzc-stat"
}, sv = {
  key: 2,
  class: "rlzc-stat"
}, rv = {
  key: 3,
  class: "rlzc-stat"
}, iv = {
  key: 0,
  class: "rlzc-subline"
}, ov = {
  key: 1,
  class: "rlzc-note"
}, lv = {
  key: 2,
  class: "rlzc-card"
}, av = { class: "rlzc-kv" }, cv = { class: "rlzc-kv" }, uv = {
  key: 0,
  class: "rlzc-note rlzc-note-warn"
}, Av = {
  key: 3,
  class: "rlzc-note"
}, dv = {
  key: 4,
  class: "rlzc-card"
}, fv = {
  key: 0,
  class: "rlzc-kv"
}, pv = { class: "rlzc-mono" }, hv = {
  key: 1,
  class: "rlzc-tasks"
}, mv = {
  key: 2,
  class: "rlzc-ps"
}, gv = { class: "rlzc-actions" }, xv = ["disabled"], vv = ["disabled"], yv = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, bv = {
  key: 2,
  class: "rlzc-card"
}, kv = { class: "rlzc-row" }, wv = ["value"], zv = ["disabled"], _v = /* @__PURE__ */ Be({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ pe(""), n = K(() => !!f.session && !!f.pack), s = K(() => f.progress), r = K(() => n.value && !!s.value && !s.value.ended), i = K(() => f.packs.find((p) => p.id === t.value) ?? null), o = K(() => !!f.pack?.phases.length), l = K(() => f.settings.panelDisplay !== "statusbar"), a = K(() => {
      const p = s.value;
      return p ? o.value ? `${p.warn ? "⚠️ " : ""}${p.round}/${p.phase.cap}` : `第${p.round}轮` : "";
    }), c = K(() => {
      const p = s.value;
      return p ? p.limit?.text ? p.limit.text : p.panel?.limit || f.session?.briefing?.limit || "—" : "";
    }), u = K(() => {
      const p = s.value;
      return !!p && !p.ended && o.value && p.phase.cap > 0 && p.nextRound < p.phase.cap;
    });
    async function d() {
      t.value && (await Vg(t.value), t.value = "");
    }
    return (p, x) => (y(), k("div", qx, [
      n.value && s.value ? (y(), k(te, { key: 0 }, [
        A("div", Yx, [
          A("div", Jx, [
            A("span", Zx, _(C(f).pack?.rest ? "—" : C(f).pack.level), 1),
            A("h3", null, _(C(f).pack.name), 1),
            s.value.ended ? (y(), k("span", Xx, "已结束")) : U("", !0)
          ]),
          C(f).session?.briefing?.goal ? (y(), k("p", Qx, "目标：" + _(C(f).session.briefing.goal), 1)) : U("", !0)
        ]),
        A("div", ev, [
          o.value ? (y(), k("div", tv, [
            x[3] || (x[3] = A("span", null, "阶段", -1)),
            A("b", null, _(s.value.phase.name), 1)
          ])) : U("", !0),
          A("div", {
            class: se(["rlzc-stat", { warn: s.value.warn }])
          }, [
            x[4] || (x[4] = A("span", null, "轮次", -1)),
            A("b", null, _(a.value), 1)
          ], 2),
          s.value.currentClock ? (y(), k("div", nv, [
            x[5] || (x[5] = A("span", null, "钟时", -1)),
            A("b", null, _(s.value.currentClock), 1)
          ])) : U("", !0),
          s.value.roundsLeft ? (y(), k("div", sv, [
            x[6] || (x[6] = A("span", null, "最多剩余轮次", -1)),
            A("b", null, _(s.value.roundsLeft.x) + "/" + _(s.value.roundsLeft.y), 1)
          ])) : U("", !0),
          l.value ? (y(), k("div", rv, [
            x[7] || (x[7] = A("span", null, "剩余时间", -1)),
            A("b", null, _(c.value), 1)
          ])) : U("", !0),
          r.value ? U("", !0) : (y(), We(rl, { key: 4 }))
        ]),
        C(f).subLine ? (y(), k("p", iv, _(C(f).subLine), 1)) : U("", !0),
        s.value.skipGoal ? (y(), k("div", ov, "快进中：目标 " + _(C(f).pack.phases.find((z) => z.id === s.value.skipGoal.phase)?.name) + " 第" + _(s.value.skipGoal.round) + "轮", 1)) : U("", !0),
        s.value.ended && s.value.settlement ? (y(), k("div", lv, [
          A("div", av, [
            x[8] || (x[8] = A("span", null, "结果", -1)),
            A("b", null, _(s.value.settlement.result ?? "—"), 1)
          ]),
          A("div", cv, [
            x[9] || (x[9] = A("span", null, "评价", -1)),
            A("b", null, _(s.value.settlement.rating ?? "—"), 1)
          ]),
          C(f).session?.clearance && s.value.settlement.result === "失败" ? (y(), k("div", uv, " 清算未通关 ")) : U("", !0)
        ])) : s.value.ended ? (y(), k("div", Av, "副本已手动结束。")) : U("", !0),
        l.value && s.value.panel ? (y(), k("div", dv, [
          s.value.panel.progressBar ? (y(), k("div", fv, [
            x[10] || (x[10] = A("span", null, "进度", -1)),
            A("b", pv, _(s.value.panel.progressBar), 1)
          ])) : U("", !0),
          s.value.panel.tasks.length ? (y(), k("div", hv, [
            x[11] || (x[11] = A("span", null, "任务", -1)),
            A("ul", null, [
              (y(!0), k(te, null, he(s.value.panel.tasks, (z, w) => (y(), k("li", { key: w }, _(z), 1))), 128))
            ])
          ])) : U("", !0),
          s.value.panel.ps ? (y(), k("div", mv, "ps：" + _(s.value.panel.ps), 1)) : U("", !0)
        ])) : U("", !0),
        A("div", gv, [
          A("button", {
            class: "rlzc-btn",
            disabled: !u.value,
            onClick: x[0] || (x[0] = //@ts-ignore
            (...z) => C(qo) && C(qo)(...z))
          }, "跳过（到本阶段结束）", 8, xv),
          A("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: x[1] || (x[1] = //@ts-ignore
            (...z) => C(Yo) && C(Yo)(...z))
          }, "手动结束副本", 8, vv)
        ]),
        r.value && C(f).pack.docs?.length ? (y(), We(sl, {
          key: 5,
          pack: C(f).pack
        }, null, 8, ["pack"])) : U("", !0)
      ], 64)) : (y(), k("div", yv, [
        x[12] || (x[12] = A("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        _e(rl)
      ])),
      r.value ? U("", !0) : (y(), k("div", bv, [
        x[14] || (x[14] = A("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        A("div", kv, [
          ft(A("select", {
            "onUpdate:modelValue": x[2] || (x[2] = (z) => t.value = z),
            class: "rlzc-input"
          }, [
            x[13] || (x[13] = A("option", { value: "" }, "选择副本…", -1)),
            (y(!0), k(te, null, he(C(f).packs, (z) => (y(), k("option", {
              key: z.id,
              value: z.id
            }, _(z.level) + "｜" + _(z.name), 9, wv))), 128))
          ], 512), [
            [ha, t.value]
          ]),
          A("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: d
          }, "进入", 8, zv)
        ])
      ])),
      !r.value && i.value?.docs?.length ? (y(), We(sl, {
        key: 3,
        pack: i.value
      }, null, 8, ["pack"])) : U("", !0)
    ]));
  }
}), $v = { class: "rlzc-ledger" }, Sv = { class: "rlzc-card rlzc-ledger-hero-card" }, Cv = { class: "rlzc-ledger-hero-cols" }, Ev = { class: "rlzc-ledger-hero-col" }, Mv = { class: "rlzc-ledger-hero-col-val" }, Tv = { class: "rlzc-ledger-hero-col" }, Iv = { class: "rlzc-ledger-hero-col-val" }, Nv = { class: "rlzc-ledger-hero-col" }, Pv = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, jv = { class: "rlzc-card" }, Lv = {
  key: 0,
  class: "rlzc-ledger-list"
}, Dv = { class: "rlzc-ledger-item-left" }, Fv = { class: "rlzc-ledger-item-src" }, Rv = { class: "rlzc-ledger-item-time" }, Ov = { class: "rlzc-ledger-item-right" }, Bv = { class: "rlzc-ledger-item-after" }, Vv = {
  key: 1,
  class: "rlzc-hint"
}, Uv = /* @__PURE__ */ Be({
  __name: "LedgerTab",
  setup(e) {
    const t = K(() => Z()), n = K(() => $t(t.value)), s = K(() => f.ledger), r = K(() => fn(n.value.value, s.value)), i = K(() => {
      const z = Hh(n.value.value, s.value);
      return s.value.map((w, j) => ({ e: w, after: z[j] })).reverse();
    }), o = K(() => (f.tick, st(t.value))), l = K(() => _t[o.value]), a = K(() => as(n.value.value, s.value, l.value)), c = K(() => Math.max(0, l.value - r.value)), u = K(() => n.value.source === "默认值");
    function d(z) {
      return new Intl.NumberFormat("zh-CN").format(z);
    }
    function p(z) {
      return (z >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(z);
    }
    function x(z) {
      try {
        const w = new Date(z), j = String(w.getMonth() + 1).padStart(2, "0"), H = String(w.getDate()).padStart(2, "0"), L = String(w.getHours()).padStart(2, "0"), S = String(w.getMinutes()).padStart(2, "0");
        return `${j}-${H} ${L}:${S}`;
      } catch {
        return z;
      }
    }
    return (z, w) => (y(), k("div", $v, [
      A("div", Sv, [
        w[3] || (w[3] = A("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        A("b", {
          class: se(["rlzc-ledger-hero-num", { negative: r.value < 0 }])
        }, _(d(r.value)), 3),
        w[4] || (w[4] = A("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        A("div", Cv, [
          A("div", Ev, [
            w[0] || (w[0] = A("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            A("span", Mv, _(o.value), 1)
          ]),
          A("div", Tv, [
            w[1] || (w[1] = A("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            A("span", Iv, _(d(l.value)), 1)
          ]),
          A("div", Nv, [
            w[2] || (w[2] = A("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            A("span", {
              class: se(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": a.value }])
            }, _(a.value ? `距线 ${d(c.value)}` : "无"), 3)
          ])
        ]),
        u.value ? (y(), k("p", Pv, "初始积分按 1000 计，可在设置页修改")) : U("", !0)
      ]),
      A("div", jv, [
        w[5] || (w[5] = A("h4", null, "流水", -1)),
        s.value.length ? (y(), k("ul", Lv, [
          (y(!0), k(te, null, he(i.value, (j, H) => (y(), k("li", {
            key: `${H}-${j.e.mesIndex}-${j.e.delta}-${j.e.at}`,
            class: "rlzc-ledger-item"
          }, [
            A("div", Dv, [
              A("span", Fv, _(j.e.source), 1),
              A("span", Rv, _(x(j.e.at)), 1)
            ]),
            A("div", Ov, [
              A("span", {
                class: se(["rlzc-ledger-item-delta", j.e.delta >= 0 ? "pos" : "neg"])
              }, _(p(j.e.delta)), 3),
              A("span", Bv, "余额 " + _(d(j.after)), 1)
            ])
          ]))), 128))
        ])) : (y(), k("p", Vv, "还没有收支记录。"))
      ])
    ]));
  }
}), Hv = { class: "rlzc-market" }, Wv = { class: "rlzc-subtabs rlzc-market-tabs" }, Gv = { class: "rlzc-card rlzc-mk-status" }, Kv = { class: "rlzc-mk-q" }, qv = { class: "rlzc-mk-tag" }, Yv = { class: "rlzc-mk-opts" }, Jv = ["disabled", "onClick"], Zv = { class: "rlzc-row rlzc-mk-bet" }, Xv = ["onUpdate:modelValue"], Qv = ["disabled", "onClick"], ey = { class: "rlzc-hint" }, ty = {
  key: 0,
  class: "rlzc-mk-red"
}, ny = {
  key: 1,
  class: "rlzc-mk-mine"
}, sy = {
  key: 1,
  class: "rlzc-card"
}, ry = {
  key: 0,
  class: "rlzc-tk-list"
}, iy = { class: "rlzc-tk-left" }, oy = { class: "rlzc-tk-title" }, ly = {
  key: 1,
  class: "rlzc-hint"
}, ay = {
  key: 0,
  class: "rlzc-card rlzc-mk-status"
}, cy = { class: "rlzc-cs-tables" }, uy = ["onClick"], Ay = {
  key: 0,
  class: "rlzc-card rlzc-cs-play"
}, dy = {
  key: 0,
  class: "rlzc-segsrc rlzc-cs-seg"
}, fy = ["onClick"], py = ["onClick"], hy = { class: "rlzc-row rlzc-mk-bet" }, my = ["disabled"], gy = { class: "rlzc-hint" }, xy = {
  key: 2,
  class: "rlzc-mk-red"
}, vy = /* @__PURE__ */ Be({
  __name: "MarketTab",
  setup(e) {
    const t = /* @__PURE__ */ pe("book"), n = (F) => new Intl.NumberFormat("en-US").format(F), s = (F) => `×${F.toFixed(2)}`, r = K(() => f.market.pending), i = K(() => (f.tick, st())), o = K(() => f.market.book), l = K(() => !!o.value?.closedAt), a = K(() => {
      const F = o.value;
      return F && F.closedAt ? `《${F.packName}》已封盘` : F ? `《${F.packName}》开盘中 · 第1轮结束封盘${F.freak?.status === "pending" ? " · 庄家出题中" : ""}` : f.session?.status === "active" && f.pack?.rest ? "休整副本不开盘。" : "进副本后开盘。";
    }), c = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" }, u = /* @__PURE__ */ pe({}), d = /* @__PURE__ */ pe({});
    function p(F, q) {
      l.value || f.market.results[F.id] || (u.value = { ...u.value, [F.id]: u.value[F.id] === q ? "" : q });
    }
    function x(F) {
      f.tick;
      const q = d.value[F.id];
      return Pc(F.id, typeof q == "number" ? q : 0);
    }
    function z(F) {
      const q = u.value[F.id], G = d.value[F.id];
      if (!q || typeof G != "number") return;
      const ge = hx(F.id, q, G);
      if (ge) {
        Te("warning", ge);
        return;
      }
      d.value = { ...d.value, [F.id]: null }, u.value = { ...u.value, [F.id]: "" };
    }
    function w(F) {
      const q = o.value;
      return q ? f.market.tickets.filter((G) => G.book.session === q.session && G.ticket.market === F.id) : [];
    }
    function j(F) {
      return F.market?.options.find((q) => q.id === F.ticket.option)?.label ?? F.ticket.option;
    }
    function H(F) {
      return `${F.book.packName} · ${F.market?.q ?? F.ticket.market} · ${j(F)}`;
    }
    function L(F) {
      const q = F.ticket, G = F.res?.stamp;
      return G ? G === "win" ? `押 ${n(q.stake)} · ${s(q.odds)} · 兑 ${n(mc(q.stake, q.odds))}` : G === "lose" ? `押 ${n(q.stake)} · ${s(q.odds)}` : `押 ${n(q.stake)} · 原数退还` : `押 ${n(q.stake)} · ${s(q.odds)} · 待开奖`;
    }
    const S = { win: "兑", lose: "废", refund: "退" }, E = K(() => f.market.tables.map((F) => bn(F)).filter((F) => !!F)), X = /* @__PURE__ */ pe(""), Y = K(() => X.value ? bn(X.value) : void 0), O = /* @__PURE__ */ pe(""), b = /* @__PURE__ */ pe(null), h = /* @__PURE__ */ pe(!1), g = /* @__PURE__ */ pe(""), N = /* @__PURE__ */ pe(null);
    let D = null;
    function Q(F) {
      if (X.value === F) {
        X.value = "";
        return;
      }
      X.value = F;
      const q = bn(F);
      O.value = q && q.bets.length === 1 ? q.bets[0].id : "", N.value = null;
    }
    const ae = K(() => (Y.value?.bets ?? []).filter((F) => !/^[nd]\d+$/.test(F.id))), le = K(() => (Y.value?.bets ?? []).filter((F) => /^[nd]\d+$/.test(F.id))), Ie = K(() => (f.tick, jc(typeof b.value == "number" ? b.value : 0)));
    function rt() {
      try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      } catch {
        return !1;
      }
    }
    function Je(F, q) {
      return F === "bell" ? `${q[0]}下` : F === "door" ? `${q[0]}号门` : F === "lot" ? `第${q[0]}支` : `${q[0]} : ${q[1]}`;
    }
    function hn() {
      const F = Y.value, q = b.value;
      if (!F || !O.value || typeof q != "number" || h.value) return;
      const G = mx(F.id, O.value, q);
      if (G.error || !G.outcome) {
        Te("warning", G.error ?? "不能下注");
        return;
      }
      const ge = { ...G.outcome, stake: q };
      if (N.value = null, rt()) {
        g.value = Je(F.id, ge.faces), N.value = ge;
        return;
      }
      h.value = !0;
      const ds = F.id === "bell" ? 12 : F.id === "door" ? 20 : F.id === "lot" ? 3 : 13, Ct = () => 1 + Math.floor(Math.random() * ds);
      D = setInterval(() => g.value = Je(F.id, [Ct(), Ct()]), 80), setTimeout(() => {
        D && clearInterval(D), D = null, g.value = Je(F.id, ge.faces), h.value = !1, N.value = ge;
      }, 1200);
    }
    const Wt = K(() => {
      const F = N.value;
      return F ? `结果：${F.result}。${F.win ? `赢 ${n(F.payout)}` : `输 ${n(F.stake)}`}` : "";
    });
    return xi(() => {
      D && clearInterval(D);
    }), (F, q) => (y(), k("div", Hv, [
      A("nav", Wv, [
        A("button", {
          class: se({ on: t.value === "book" }),
          onClick: q[0] || (q[0] = (G) => t.value = "book")
        }, "盘口", 2),
        A("button", {
          class: se({ on: t.value === "tickets" }),
          onClick: q[1] || (q[1] = (G) => t.value = "tickets")
        }, _(r.value ? `票夹 · ${r.value}` : "票夹"), 3),
        A("button", {
          class: se({ on: t.value === "casino" }),
          onClick: q[2] || (q[2] = (G) => t.value = "casino")
        }, "赌坊", 2)
      ]),
      t.value === "book" ? (y(), k(te, { key: 0 }, [
        A("div", Gv, _(a.value), 1),
        (y(!0), k(te, null, he(o.value?.markets ?? [], (G) => (y(), k("div", {
          key: G.id,
          class: "rlzc-card rlzc-mk-card"
        }, [
          A("div", Kv, [
            A("span", qv, _(c[G.kind]), 1),
            Le(_(G.q), 1)
          ]),
          A("div", Yv, [
            (y(!0), k(te, null, he(G.options, (ge) => (y(), k("button", {
              key: ge.id,
              class: se(["rlzc-mk-opt", { on: u.value[G.id] === ge.id }]),
              disabled: l.value || !!C(f).market.results[G.id],
              onClick: (ds) => p(G, ge.id)
            }, [
              A("span", null, _(ge.label), 1),
              A("b", null, _(s(ge.odds)), 1)
            ], 10, Jv))), 128))
          ]),
          u.value[G.id] && !l.value ? (y(), k(te, { key: 0 }, [
            A("div", Zv, [
              ft(A("input", {
                "onUpdate:modelValue": (ge) => d.value[G.id] = ge,
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 8, Xv), [
                [
                  It,
                  d.value[G.id],
                  void 0,
                  { number: !0 }
                ]
              ]),
              A("button", {
                class: "rlzc-btn",
                disabled: typeof d.value[G.id] != "number",
                onClick: (ge) => z(G)
              }, "下注", 8, Qv)
            ]),
            A("p", ey, "单注上限 " + _(n(x(G).cap)) + "（" + _(i.value) + "级）", 1),
            x(G).belowKill ? (y(), k("p", ty, "押完余额低于斩杀线")) : U("", !0)
          ], 64)) : U("", !0),
          w(G).length ? (y(), k("ul", ny, [
            (y(!0), k(te, null, he(w(G), (ge) => (y(), k("li", {
              key: ge.ticket.id
            }, _(j(ge)) + " · " + _(L(ge)), 1))), 128))
          ])) : U("", !0)
        ]))), 128))
      ], 64)) : t.value === "tickets" ? (y(), k("div", sy, [
        C(f).market.tickets.length ? (y(), k("ul", ry, [
          (y(!0), k(te, null, he(C(f).market.tickets, (G) => (y(), k("li", {
            key: G.ticket.id,
            class: "rlzc-tk"
          }, [
            A("div", iy, [
              A("span", oy, _(H(G)), 1),
              A("small", null, _(L(G)), 1)
            ]),
            A("span", {
              class: se(["rlzc-stamp", G.res ? G.res.stamp : "pending"])
            }, _(G.res ? S[G.res.stamp] : "待"), 3)
          ]))), 128))
        ])) : (y(), k("p", ly, "还没有赌票。"))
      ])) : (y(), k(te, { key: 2 }, [
        C(f).market.casinoOpen ? (y(), k(te, { key: 1 }, [
          q[4] || (q[4] = A("p", { class: "rlzc-hint" }, "今晚开两张桌，回到回廊换一批。", -1)),
          A("div", cy, [
            (y(!0), k(te, null, he(E.value, (G) => (y(), k("button", {
              key: G.id,
              class: se(["rlzc-card rlzc-cs-table", { on: X.value === G.id }]),
              onClick: (ge) => Q(G.id)
            }, [
              A("b", null, _(G.name), 1),
              A("small", null, _(G.desc), 1)
            ], 10, uy))), 128))
          ]),
          Y.value ? (y(), k("div", Ay, [
            A("h4", null, _(Y.value.name), 1),
            ae.value.length ? (y(), k("div", dy, [
              (y(!0), k(te, null, he(ae.value, (G) => (y(), k("button", {
                key: G.id,
                class: se({ on: O.value === G.id }),
                onClick: (ge) => O.value = G.id
              }, _(G.label), 11, fy))), 128))
            ])) : U("", !0),
            le.value.length ? (y(), k("div", {
              key: 1,
              class: se(["rlzc-cs-grid", Y.value.id])
            }, [
              (y(!0), k(te, null, he(le.value, (G) => (y(), k("button", {
                key: G.id,
                class: se({ on: O.value === G.id }),
                onClick: (ge) => O.value = G.id
              }, _(G.label), 11, py))), 128))
            ], 2)) : U("", !0),
            A("div", hy, [
              ft(A("input", {
                "onUpdate:modelValue": q[3] || (q[3] = (G) => b.value = G),
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 512), [
                [
                  It,
                  b.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              A("button", {
                class: "rlzc-btn",
                disabled: !O.value || typeof b.value != "number" || h.value,
                onClick: hn
              }, "开", 8, my)
            ]),
            A("p", gy, "单注上限 " + _(n(Ie.value.cap)) + "（" + _(i.value) + "级）", 1),
            Ie.value.belowKill ? (y(), k("p", xy, "押完余额低于斩杀线")) : U("", !0),
            h.value || N.value ? (y(), k("div", {
              key: 3,
              class: se(["rlzc-cs-face", { rolling: h.value }])
            }, _(g.value || ""), 3)) : U("", !0),
            N.value ? (y(), k("p", {
              key: 4,
              class: se(["rlzc-cs-result", N.value.win ? "win" : "lose"])
            }, _(Wt.value), 3)) : U("", !0)
          ])) : U("", !0)
        ], 64)) : (y(), k("div", ay, "赌坊只在回廊营业。"))
      ], 64))
    ]));
  }
}), yy = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, by = ["aria-expanded"], ky = ["data-kind"], wy = {
  key: 0,
  class: "rlzc-collapse-body"
}, zy = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, _y = {
  key: 0,
  class: "rlzc-preset-area"
}, $y = { class: "rlzc-preset-row" }, Sy = ["value"], Cy = {
  key: 0,
  value: ""
}, Ey = ["value"], My = ["disabled"], Ty = ["disabled"], Iy = { class: "rlzc-stacked-field" }, Ny = ["value"], Py = { class: "rlzc-stacked-field" }, jy = { class: "rlzc-key-wrap" }, Ly = ["type", "value"], Dy = ["aria-label"], Fy = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Ry = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Oy = { class: "rlzc-stacked-field" }, By = ["value"], Vy = ["value"], Uy = ["value"], Hy = ["value"], Wy = { class: "rlzc-conn-row" }, Gy = ["data-kind"], Ky = ["disabled"], qy = {
  key: 1,
  class: "rlzc-option-list"
}, Yy = { class: "rlzc-option-row" }, Jy = ["aria-checked"], Zy = { class: "rlzc-option-row" }, Xy = ["aria-checked"], Qy = { class: "rlzc-option-row rlzc-option-row-timeout" }, e0 = { class: "rlzc-timeout-wrap" }, t0 = ["value"], n0 = /* @__PURE__ */ Be({
  __name: "SubApiCard",
  setup(e) {
    const t = K(() => f.settings.subApi), n = K(() => t.value.presets.find((O) => O.id === t.value.presetId) ?? null), s = /* @__PURE__ */ pe([]), r = /* @__PURE__ */ pe(!1), i = /* @__PURE__ */ pe(!1), o = /* @__PURE__ */ pe("none"), l = /* @__PURE__ */ pe(""), a = K(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : o.value === "ok" ? { kind: "on", text: "已连接" } : o.value === "fail" ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" }), c = K(() => f.settings.cardCollapsed.subApi);
    function u() {
      f.settings.cardCollapsed.subApi = !f.settings.cardCollapsed.subApi, p();
    }
    const d = K(() => o.value === "ok" ? `已连接 · 共 ${s.value.length} 个模型` : o.value === "fail" ? `连接失败：${l.value}` : "未测试");
    function p() {
      ke();
    }
    function x(O) {
      t.value.source = O, o.value = "none", p();
    }
    function z() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function w() {
      const O = (await Lo("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!O) return;
      const b = { id: z(), name: O, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, b], t.value.presetId = b.id, s.value = [], o.value = "none", p();
    }
    async function j() {
      if (!n.value) return;
      const O = (await Lo("改名为：", n.value.name))?.trim();
      O && (n.value.name = O, p());
    }
    async function H() {
      n.value && await Ut(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((O) => O.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", s.value = [], o.value = "none", p());
    }
    function L(O) {
      t.value.presetId = O.target.value, s.value = [], o.value = "none", p();
    }
    function S(O, b) {
      n.value && (n.value[O] = b.target.value.trim(), p());
    }
    async function E() {
      if (n.value) {
        i.value = !0, o.value = "none", l.value = "";
        try {
          const O = await jh(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          s.value = O.models, !n.value.model && O.models.length && (n.value.model = O.models[0], p()), o.value = "ok";
        } catch (O) {
          o.value = "fail", l.value = cr(O), s.value = await Ya(n.value).catch(() => []);
        } finally {
          i.value = !1;
        }
      }
    }
    function X(O) {
      const b = Math.floor(Number(O.target.value));
      if (!Number.isFinite(b) || b < 5) {
        Te("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = b, p();
    }
    function Y(O, b) {
      t.value[O] = b, p();
    }
    return (O, b) => (y(), k("div", yy, [
      A("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !c.value,
        onClick: u
      }, [
        b[9] || (b[9] = A("h4", null, "副本事件检测", -1)),
        A("span", {
          class: "rlzc-dot",
          "data-kind": a.value.kind
        }, _(a.value.text), 9, ky),
        A("span", {
          class: se(["rlzc-collapse-arrow", { open: !c.value }])
        }, "▸", 2)
      ], 8, by),
      c.value ? U("", !0) : (y(), k("div", wy, [
        b[24] || (b[24] = A("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        A("div", zy, [
          A("button", {
            class: se({ on: t.value.source === "off" }),
            onClick: b[0] || (b[0] = (h) => x("off"))
          }, "关闭", 2),
          A("button", {
            class: se({ on: t.value.source === "main" }),
            onClick: b[1] || (b[1] = (h) => x("main"))
          }, "跟随主API", 2),
          A("button", {
            class: se({ on: t.value.source === "preset" }),
            onClick: b[2] || (b[2] = (h) => x("preset"))
          }, "自设API", 2)
        ]),
        t.value.source === "preset" ? (y(), k("div", _y, [
          A("div", $y, [
            A("select", {
              class: "rlzc-input",
              value: t.value.presetId,
              onChange: L
            }, [
              t.value.presets.length ? U("", !0) : (y(), k("option", Cy, "还没有保存的接口")),
              (y(!0), k(te, null, he(t.value.presets, (h) => (y(), k("option", {
                key: h.id,
                value: h.id
              }, _(h.name), 9, Ey))), 128))
            ], 40, Sy),
            A("button", {
              class: "rlzc-icon-btn",
              "aria-label": "新建接口",
              type: "button",
              onClick: w
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
              onClick: j
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
            ])], 8, My),
            A("button", {
              class: "rlzc-icon-btn rlzc-danger",
              "aria-label": "删除接口",
              type: "button",
              disabled: !n.value,
              onClick: H
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
            ])], 8, Ty)
          ]),
          n.value ? (y(), k(te, { key: 0 }, [
            A("div", Iy, [
              b[13] || (b[13] = A("label", { class: "rlzc-label" }, "地址", -1)),
              A("input", {
                class: "rlzc-input",
                value: n.value.url,
                placeholder: "https://…/v1",
                onChange: b[3] || (b[3] = (h) => S("url", h))
              }, null, 40, Ny)
            ]),
            A("div", Py, [
              b[16] || (b[16] = A("label", { class: "rlzc-label" }, "密钥", -1)),
              A("div", jy, [
                A("input", {
                  class: "rlzc-input",
                  type: r.value ? "text" : "password",
                  value: n.value.key,
                  autocomplete: "off",
                  onChange: b[4] || (b[4] = (h) => S("key", h))
                }, null, 40, Ly),
                A("button", {
                  class: "rlzc-eye-btn",
                  type: "button",
                  "aria-label": r.value ? "隐藏密钥" : "显示密钥",
                  onClick: b[5] || (b[5] = (h) => r.value = !r.value)
                }, [
                  r.value ? (y(), k("svg", Fy, [...b[14] || (b[14] = [
                    A("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    A("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1),
                    A("path", { d: "M2 2l12 12" }, null, -1)
                  ])])) : (y(), k("svg", Ry, [...b[15] || (b[15] = [
                    A("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    A("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1)
                  ])]))
                ], 8, Dy)
              ])
            ]),
            A("div", Oy, [
              b[17] || (b[17] = A("label", { class: "rlzc-label" }, "模型", -1)),
              s.value.length ? (y(), k("select", {
                key: 0,
                class: "rlzc-input",
                value: n.value.model,
                onChange: b[6] || (b[6] = (h) => S("model", h))
              }, [
                s.value.includes(n.value.model) ? U("", !0) : (y(), k("option", {
                  key: 0,
                  value: n.value.model
                }, _(n.value.model || "请选择…"), 9, Vy)),
                (y(!0), k(te, null, he(s.value, (h) => (y(), k("option", {
                  key: h,
                  value: h
                }, _(h), 9, Uy))), 128))
              ], 40, By)) : (y(), k("input", {
                key: 1,
                class: "rlzc-input rlzc-input-disabled",
                value: n.value.model ? n.value.model : "先测试连接",
                readonly: "",
                tabindex: "-1"
              }, null, 8, Hy))
            ]),
            A("div", Wy, [
              A("span", {
                class: "rlzc-dot",
                "data-kind": o.value === "ok" ? "on" : o.value === "fail" ? "warn" : "off"
              }, _(d.value), 9, Gy),
              A("button", {
                class: "rlzc-btn ghost",
                disabled: i.value || !n.value.url,
                onClick: E
              }, "测试连接", 8, Ky)
            ])
          ], 64)) : U("", !0)
        ])) : U("", !0),
        t.value.source !== "off" ? (y(), k("div", qy, [
          A("div", Yy, [
            b[19] || (b[19] = A("div", { class: "rlzc-option-label" }, [
              A("span", null, "省钱模式"),
              A("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            A("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: se(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: b[7] || (b[7] = (h) => Y("saveMode", !t.value.saveMode))
            }, [...b[18] || (b[18] = [
              A("span", null, null, -1)
            ])], 10, Jy)
          ]),
          A("div", Zy, [
            b[21] || (b[21] = A("div", { class: "rlzc-option-label" }, [
              A("span", null, "等检测完再写下一轮"),
              A("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            A("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: se(["rlzc-toggle", { on: t.value.wait }]),
              onClick: b[8] || (b[8] = (h) => Y("wait", !t.value.wait))
            }, [...b[20] || (b[20] = [
              A("span", null, null, -1)
            ])], 10, Xy)
          ]),
          A("div", Qy, [
            b[23] || (b[23] = A("span", null, "超时", -1)),
            A("div", e0, [
              A("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: X
              }, null, 40, t0),
              b[22] || (b[22] = A("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : U("", !0)
      ]))
    ]));
  }
}), s0 = { class: "rlzc-card rlzc-collapsible rlzc-live-card" }, r0 = ["aria-expanded"], i0 = {
  key: 0,
  class: "rlzc-dot",
  "data-kind": "on"
}, o0 = {
  key: 0,
  class: "rlzc-collapse-body"
}, l0 = { class: "rlzc-option-list" }, a0 = { class: "rlzc-option-row rlzc-option-row-stack" }, c0 = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "弹幕来源"
}, u0 = ["disabled"], A0 = {
  key: 0,
  class: "rlzc-hint"
}, d0 = {
  key: 0,
  class: "rlzc-option-row"
}, f0 = { class: "rlzc-timeout-wrap" }, p0 = ["value"], h0 = { class: "rlzc-option-row" }, m0 = ["aria-checked"], g0 = /* @__PURE__ */ Be({
  __name: "LiveCard",
  setup(e) {
    const t = K(() => f.settings.live), n = K(() => f.settings.subApi.source !== "off"), s = K(() => n.value ? t.value.source : "local"), r = K(() => (f.tick, f.session, Hi(/* @__PURE__ */ new Set()).on)), i = K(() => f.settings.cardCollapsed.live);
    function o() {
      f.settings.cardCollapsed.live = !f.settings.cardCollapsed.live, ke();
    }
    function l(u) {
      u === "ai" && !n.value || (t.value.source = u, ke());
    }
    function a(u) {
      const d = Math.floor(Number(u.target.value));
      t.value.freq = Number.isFinite(d) ? Math.max(1, Math.min(10, d)) : 3, u.target.value = String(t.value.freq), ke();
    }
    function c(u) {
      t.value.injectToAI = u, ke();
    }
    return (u, d) => (y(), k("div", s0, [
      A("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !i.value,
        onClick: o
      }, [
        d[3] || (d[3] = A("h4", null, "直播", -1)),
        r.value ? (y(), k("span", i0, "直播中")) : U("", !0),
        A("span", {
          class: se(["rlzc-collapse-arrow", { open: !i.value }])
        }, "▸", 2)
      ], 8, r0),
      i.value ? U("", !0) : (y(), k("div", o0, [
        d[10] || (d[10] = A("p", { class: "rlzc-hint" }, "开播后有观众弹幕和打赏，打赏计入积分。画面在状态栏的直播页。", -1)),
        A("div", l0, [
          A("div", a0, [
            d[4] || (d[4] = A("span", { class: "rlzc-option-label" }, [
              A("span", null, "弹幕来源")
            ], -1)),
            A("div", c0, [
              A("button", {
                class: se({ on: s.value === "local" }),
                onClick: d[0] || (d[0] = (p) => l("local"))
              }, "本地", 2),
              A("button", {
                class: se({ on: s.value === "ai" }),
                disabled: !n.value,
                onClick: d[1] || (d[1] = (p) => l("ai"))
              }, "本地+AI", 10, u0)
            ]),
            n.value ? U("", !0) : (y(), k("small", A0, "需先在副本事件检测里选接口"))
          ]),
          s.value === "ai" ? (y(), k("div", d0, [
            d[7] || (d[7] = A("div", { class: "rlzc-option-label" }, [
              A("span", null, "生成频率"),
              A("small", null, "关键事件时另加一次")
            ], -1)),
            A("div", f0, [
              d[5] || (d[5] = A("span", { class: "rlzc-unit" }, "每", -1)),
              A("input", {
                type: "number",
                min: "1",
                max: "10",
                class: "rlzc-input rlzc-input-num",
                value: t.value.freq,
                onChange: a
              }, null, 40, p0),
              d[6] || (d[6] = A("span", { class: "rlzc-unit" }, "轮", -1))
            ])
          ])) : U("", !0),
          A("div", h0, [
            d[9] || (d[9] = A("div", { class: "rlzc-option-label" }, [
              A("span", null, "弹幕传给AI"),
              A("small", null, "主AI能看到最近弹幕")
            ], -1)),
            A("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.injectToAI ? "true" : "false",
              class: se(["rlzc-toggle", { on: t.value.injectToAI }]),
              onClick: d[2] || (d[2] = (p) => c(!t.value.injectToAI))
            }, [...d[8] || (d[8] = [
              A("span", null, null, -1)
            ])], 10, m0)
          ])
        ])
      ]))
    ]));
  }
}), x0 = { class: "rlzc-settings" }, v0 = { class: "rlzc-card" }, y0 = ["value"], b0 = { class: "rlzc-card rlzc-collapsible" }, k0 = ["aria-expanded"], w0 = {
  key: 0,
  class: "rlzc-collapse-body"
}, z0 = { class: "rlzc-ledger-status" }, _0 = { class: "rlzc-row" }, $0 = ["placeholder"], S0 = ["disabled"], C0 = { class: "rlzc-row" }, E0 = ["disabled"], M0 = { class: "rlzc-row" }, T0 = { class: "rlzc-seg-group" }, I0 = ["aria-pressed", "onClick"], N0 = ["disabled"], P0 = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, j0 = { class: "rlzc-card rlzc-collapsible" }, L0 = ["aria-expanded"], D0 = {
  key: 0,
  class: "rlzc-collapse-body"
}, F0 = { class: "rlzc-depth" }, R0 = { class: "rlzc-field rlzc-field-num" }, O0 = ["value"], B0 = { class: "rlzc-field rlzc-field-num" }, V0 = ["value"], U0 = { class: "rlzc-field rlzc-field-num" }, H0 = ["value"], W0 = { class: "rlzc-field rlzc-field-num" }, G0 = ["value"], K0 = { class: "rlzc-field rlzc-field-num" }, q0 = ["value"], Y0 = { class: "rlzc-card rlzc-collapsible" }, J0 = ["aria-expanded"], Z0 = {
  key: 0,
  class: "rlzc-collapse-body"
}, X0 = ["value", "onChange"], Q0 = { class: "rlzc-card" }, eb = {
  key: 0,
  class: "rlzc-list"
}, tb = ["onClick"], nb = {
  key: 1,
  class: "rlzc-hint"
}, sb = {
  key: 2,
  class: "rlzc-errors"
}, rb = { class: "rlzc-card" }, ib = { class: "rlzc-check" }, ob = ["checked"], lb = { class: "rlzc-check" }, ab = ["checked"], cb = /* @__PURE__ */ Be({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ pe([]), n = /* @__PURE__ */ pe(null), s = /* @__PURE__ */ pe(null), r = /* @__PURE__ */ pe(null), i = /* @__PURE__ */ pe(""), o = /* @__PURE__ */ pe(""), l = /* @__PURE__ */ pe(""), a = ["D", "C", "B", "A", "S"], c = K(() => $t(Z())), u = K(() => fn(c.value.value, f.ledger)), d = K(() => (f.tick, st(Z()))), p = K(() => _t[d.value]), x = K(() => as(c.value.value, f.ledger, p.value));
    function z() {
      s.value !== null && (Ig(s.value), s.value = null);
    }
    function w() {
      r.value !== null && (Tg(r.value, i.value || "手动"), r.value = null, i.value = "");
    }
    function j() {
      !o.value && !l.value || (Ng(o.value || void 0, l.value || void 0), o.value = "", l.value = "", Te("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function H(b, h) {
      const g = Math.max(0, Math.min(1e4, Math.floor(Number(h.target.value) || 0)));
      f.settings.depths[b] = g, ke();
    }
    async function L(b) {
      const h = b.target, g = h.files?.[0];
      h.value = "", g && (t.value = Sg(await g.text()), t.value.length || Te("success", `已导入副本包：${g.name}`));
    }
    async function S(b, h) {
      await Ut(`确定删除自定义副本包《${h}》吗？`) && Cg(b);
    }
    function E(b, h) {
      const g = Math.floor(Number(h.target.value));
      !Number.isFinite(g) || g < 1 || (f.settings.genericCaps = { ...f.settings.genericCaps, [b]: g }, ke());
    }
    function X(b) {
      Qg(b.target.value);
    }
    function Y(b, h) {
      f.settings[b] = h.target.checked, ke();
    }
    function O(b) {
      f.settings.cardCollapsed[b] = !f.settings.cardCollapsed[b], ke();
    }
    return (b, h) => (y(), k(te, null, [
      A("div", x0, [
        A("div", v0, [
          h[16] || (h[16] = A("h4", null, "副本信息显示位置", -1)),
          A("select", {
            class: "rlzc-input",
            value: C(f).settings.panelDisplay,
            onChange: X
          }, [...h[15] || (h[15] = [
            A("option", { value: "panel" }, "扩展面板（默认）", -1),
            A("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, y0),
          h[17] || (h[17] = A("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        A("div", b0, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.accountFix,
            onClick: h[0] || (h[0] = (g) => O("accountFix"))
          }, [
            h[18] || (h[18] = A("h4", null, "账户校正", -1)),
            A("span", {
              class: se(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, k0),
          C(f).settings.cardCollapsed.accountFix ? U("", !0) : (y(), k("div", w0, [
            h[20] || (h[20] = A("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            A("div", z0, [
              A("span", null, [
                h[19] || (h[19] = Le("当前余额：", -1)),
                A("b", null, _(u.value), 1)
              ]),
              A("span", null, _(x.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            h[21] || (h[21] = A("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            A("div", _0, [
              ft(A("input", {
                "onUpdate:modelValue": h[1] || (h[1] = (g) => s.value = g),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${c.value.value}`
              }, null, 8, $0), [
                [
                  It,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              A("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: z
              }, "保存", 8, S0)
            ]),
            h[22] || (h[22] = A("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            A("div", C0, [
              ft(A("input", {
                "onUpdate:modelValue": h[2] || (h[2] = (g) => r.value = g),
                type: "number",
                class: "rlzc-input",
                placeholder: "金额（正/负）"
              }, null, 512), [
                [
                  It,
                  r.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              ft(A("input", {
                "onUpdate:modelValue": h[3] || (h[3] = (g) => i.value = g),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [It, i.value]
              ]),
              A("button", {
                class: "rlzc-btn small",
                disabled: r.value === null,
                onClick: w
              }, "追加", 8, E0)
            ]),
            h[23] || (h[23] = A("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            h[24] || (h[24] = A("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            A("div", M0, [
              A("div", T0, [
                (y(), k(te, null, he(a, (g) => A("button", {
                  key: g,
                  type: "button",
                  class: se(["rlzc-seg", { active: o.value === g }]),
                  "aria-pressed": o.value === g ? "true" : "false",
                  onClick: (N) => o.value = o.value === g ? "" : g
                }, _(g), 11, I0)), 64))
              ]),
              ft(A("input", {
                "onUpdate:modelValue": h[4] || (h[4] = (g) => l.value = g),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [It, l.value]
              ]),
              A("button", {
                class: "rlzc-btn small",
                disabled: !o.value && !l.value,
                onClick: j
              }, "校正", 8, N0)
            ]),
            C(f).ledger.length === 0 && c.value.source === "默认值" ? (y(), k("p", P0, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : U("", !0)
          ]))
        ]),
        A("div", j0, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.depths,
            onClick: h[5] || (h[5] = (g) => O("depths"))
          }, [
            h[25] || (h[25] = A("h4", null, "注入深度", -1)),
            A("span", {
              class: se(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, L0),
          C(f).settings.cardCollapsed.depths ? U("", !0) : (y(), k("div", D0, [
            h[31] || (h[31] = A("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            A("div", F0, [
              A("label", R0, [
                h[26] || (h[26] = A("span", null, [
                  Le("副本暗号"),
                  A("small", null, "触发世界书的副本条目")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(f).settings.depths.token,
                  onChange: h[6] || (h[6] = (g) => H("token", g))
                }, null, 40, O0)
              ]),
              A("label", B0, [
                h[27] || (h[27] = A("span", null, [
                  Le("副本进度"),
                  A("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(f).settings.depths.progress,
                  onChange: h[7] || (h[7] = (g) => H("progress", g))
                }, null, 40, V0)
              ]),
              A("label", U0, [
                h[28] || (h[28] = A("span", null, [
                  Le("本轮指令"),
                  A("small", null, "本轮事件与时限写法")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(f).settings.depths.turn,
                  onChange: h[8] || (h[8] = (g) => H("turn", g))
                }, null, 40, H0)
              ]),
              A("label", W0, [
                h[29] || (h[29] = A("span", null, [
                  Le("账户"),
                  A("small", null, "积分余额与清算状态")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(f).settings.depths.ledger,
                  onChange: h[9] || (h[9] = (g) => H("ledger", g))
                }, null, 40, G0)
              ]),
              A("label", K0, [
                h[30] || (h[30] = A("span", null, [
                  Le("直播"),
                  A("small", null, "在看人数与最近弹幕")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: C(f).settings.depths.live,
                  onChange: h[10] || (h[10] = (g) => H("live", g))
                }, null, 40, q0)
              ])
            ])
          ]))
        ]),
        _e(n0),
        _e(g0),
        A("div", Y0, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.genericCaps,
            onClick: h[11] || (h[11] = (g) => O("genericCaps"))
          }, [
            h[32] || (h[32] = A("h4", null, "通用副本默认轮数上限", -1)),
            A("span", {
              class: se(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, J0),
          C(f).settings.cardCollapsed.genericCaps ? U("", !0) : (y(), k("div", Z0, [
            h[33] || (h[33] = A("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (y(), k(te, null, he(a, (g) => A("label", {
              key: g,
              class: "rlzc-field rlzc-field-num"
            }, [
              A("span", null, _(g) + " 级", 1),
              A("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: C(f).settings.genericCaps[g],
                onChange: (N) => E(g, N)
              }, null, 40, X0)
            ])), 64))
          ]))
        ]),
        A("div", Q0, [
          h[34] || (h[34] = A("h4", null, "自定义副本包", -1)),
          C(f).settings.customPacks.length ? (y(), k("ul", eb, [
            (y(!0), k(te, null, he(C(f).settings.customPacks, (g) => (y(), k("li", {
              key: g.id
            }, [
              A("span", null, [
                Le(_(g.level) + "｜" + _(g.name) + " ", 1),
                A("small", null, "v" + _(g.version), 1)
              ]),
              A("button", {
                class: "rlzc-btn ghost small",
                onClick: (N) => S(g.id, g.name)
              }, "删除", 8, tb)
            ]))), 128))
          ])) : (y(), k("p", nb, "还没有导入自定义副本包。")),
          A("input", {
            ref_key: "fileInput",
            ref: n,
            type: "file",
            accept: ".json,application/json",
            hidden: "",
            onChange: L
          }, null, 544),
          A("button", {
            class: "rlzc-btn",
            onClick: h[12] || (h[12] = (g) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (y(), k("ul", sb, [
            (y(!0), k(te, null, he(t.value, (g, N) => (y(), k("li", { key: N }, _(g), 1))), 128))
          ])) : U("", !0)
        ]),
        A("div", rb, [
          h[37] || (h[37] = A("h4", null, "其他", -1)),
          A("label", ib, [
            A("input", {
              type: "checkbox",
              checked: C(f).settings.showBall,
              onChange: h[13] || (h[13] = (g) => Y("showBall", g))
            }, null, 40, ob),
            h[35] || (h[35] = Le("显示悬浮球", -1))
          ]),
          A("label", lb, [
            A("input", {
              type: "checkbox",
              checked: C(f).settings.debug,
              onChange: h[14] || (h[14] = (g) => Y("debug", g))
            }, null, 40, ab),
            h[36] || (h[36] = Le("调试模式", -1))
          ])
        ])
      ]),
      h[38] || (h[38] = A("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), ub = { class: "rlzc-debug" }, Ab = {
  key: 0,
  class: "rlzc-note"
}, db = {
  key: 0,
  class: "rlzc-note"
}, fb = {
  key: 1,
  class: "rlzc-note"
}, pb = {
  key: 2,
  class: "rlzc-card"
}, hb = { class: "rlzc-row" }, mb = ["disabled"], gb = ["value"], xb = ["disabled"], vb = { class: "rlzc-row" }, yb = ["disabled"], bb = ["disabled"], kb = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, wb = ["aria-expanded"], zb = {
  key: 0,
  class: "rlzc-collapse-body"
}, _b = ["onUpdate:modelValue", "disabled"], $b = ["disabled"], Sb = { class: "rlzc-card rlzc-collapsible" }, Cb = ["aria-expanded"], Eb = {
  key: 0,
  class: "rlzc-collapse-status"
}, Mb = {
  key: 0,
  class: "rlzc-collapse-body"
}, Tb = {
  key: 0,
  class: "rlzc-hint"
}, Ib = { class: "rlzc-hint" }, Nb = { class: "rlzc-list rlzc-warns" }, Pb = { class: "rlzc-card rlzc-collapsible" }, jb = ["aria-expanded"], Lb = {
  key: 0,
  class: "rlzc-collapse-status"
}, Db = {
  key: 0,
  class: "rlzc-collapse-body"
}, Fb = {
  key: 0,
  class: "rlzc-list"
}, Rb = ["disabled", "onClick"], Ob = {
  key: 1,
  class: "rlzc-hint"
}, Bb = {
  key: 4,
  class: "rlzc-card"
}, Vb = { class: "rlzc-pre" }, Ub = {
  key: 0,
  class: "rlzc-pre"
}, Hb = {
  key: 5,
  class: "rlzc-card"
}, Wb = { class: "rlzc-table" }, Gb = { class: "rlzc-hint" }, Kb = {
  key: 0,
  class: "rlzc-hint"
}, qb = { class: "rlzc-hint" }, Yb = {
  key: 1,
  class: "rlzc-table"
}, Jb = { class: "rlzc-card rlzc-collapsible" }, Zb = ["aria-expanded"], Xb = {
  key: 0,
  class: "rlzc-collapse-body"
}, Qb = { class: "rlzc-pre" }, e1 = { class: "rlzc-card" }, t1 = { class: "rlzc-pre" }, n1 = { class: "rlzc-card" }, s1 = { class: "rlzc-pre" }, r1 = { class: "rlzc-card" }, i1 = { class: "rlzc-table" }, o1 = {
  key: 0,
  class: "rlzc-warn-text"
}, l1 = { key: 1 }, a1 = ["disabled"], c1 = {
  key: 2,
  class: "rlzc-card"
}, u1 = { class: "rlzc-table" }, A1 = /* @__PURE__ */ Be({
  __name: "DebugTab",
  setup(e) {
    const t = K(() => f.settings.debug), n = /* @__PURE__ */ pe(""), s = /* @__PURE__ */ pe(null), r = /* @__PURE__ */ tr({});
    sr(
      () => [f.tick, f.pack?.id],
      () => {
        for (const h of Object.keys(r)) delete r[h];
        const b = wc() ?? {};
        for (const h of f.pack?.roles ?? []) r[h] = b[h] ?? "";
      },
      { immediate: !0 }
    );
    const i = K(() => {
      f.tick;
      const b = Z(), h = [], g = f.session?.entryIndex ?? 0;
      for (let N = g; N < b.length; N++) {
        const D = b[N]?.extra?.rlzc;
        D && h.push({ index: N, snap: D });
      }
      return h.reverse().slice(0, 60);
    }), o = K(() => {
      const b = new Set((f.audit?.warnings ?? []).filter((N) => N.kind === "limit" || N.kind === "eventMissed").map((N) => N.index)), h = Z(), g = f.session?.entryIndex ?? 0;
      for (let N = g; N < h.length; N++)
        h[N]?.extra?.rlzc?.ledgerMismatch && b.add(N);
      return b;
    }), l = K(() => {
      if (f.tick, !f.session || !f.pack || !f.progress) return null;
      const b = Z(), h = ur(b, f.progress.entryIndex);
      let g = null;
      for (let N = b.length - 1; N >= f.progress.entryIndex; N--) {
        const D = b[N]?.extra?.rlzc?.sub;
        if (D) {
          g = D;
          break;
        }
      }
      return {
        text: h ? Ba(f.pack, h.state) : "",
        state: h?.state ?? null,
        record: g
      };
    }), a = K(() => {
      f.tick;
      const b = Z(), h = [];
      for (let g = b.length - 1; g >= 0 && h.length < 60; g--) {
        const N = Ht(b[g]);
        N && h.push({ index: g, rec: N });
      }
      return h;
    });
    function c(b) {
      const h = b.feed.filter((g) => g.t === "tip").map((g) => `${g.name} ${g.amount}→${g.net}`);
      return b.revoke && h.push(`撤回 −${b.revoke}`), h.join("；");
    }
    function u(b) {
      const h = b.ai;
      return h ? h.pending ? "生成中…" : h.ok ? `${h.count}条（${h.ms}ms）` : `失败：${h.error ?? ""}` : "";
    }
    const d = { done: "✓", missed: "✗", void: "–" };
    function p(b) {
      if (!b.sub && !b.skippedEvents?.length) return "";
      const h = [];
      b.sub?.skipped && h.push(`未更新（${b.sub.error ?? ""}）`);
      for (const g of b.sub?.events ?? []) h.push(`${g.id}${d[g.status]}`);
      for (const g of b.skippedEvents ?? []) h.push(`跳过${g.id}`);
      return b.sub && !b.sub.skipped && !h.length && h.push("已整理"), h.join(" ");
    }
    const x = K(() => {
      if (f.tick, !f.session) return null;
      const b = Ve().books[f.session.id];
      return b ? { book: b, rounds: gx() } : null;
    }), z = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" };
    function w(b, h) {
      return b ? b.kind === "refund" ? `全退（#${b.index}）` : b.kind === "lost" ? `全废（#${b.index}）` : `${h[b.option] ?? b.option}（#${b.index}）` : "待开奖";
    }
    function j(b) {
      return b ? b.status === "pending" ? "出题中…" : b.status === "ok" ? `已出 ${b.count} 题（${b.ms}ms）` : b.status === "late" ? `晚于封盘到达，已丢弃（${b.ms}ms）` : `失败：${b.error ?? ""}` : "事件检测关闭，未出题";
    }
    const H = { ok: "已检测", miss: "没检测", pending: "检测中" }, L = K(() => {
      const b = f.progress;
      if (!b) return null;
      const { perMessage: h, phase: g, next: N, ...D } = b;
      return {
        phase: g.id + " " + g.name,
        ...D,
        next: N ? { round: N.round, skipFrom: N.skipFrom, events: N.events.map((Q) => Q.id) } : null,
        messages: Object.keys(h).length
      };
    });
    function S() {
      n.value && Ug(n.value);
    }
    function E() {
      s.value !== null && s.value >= 0 && Hg(s.value);
    }
    function X() {
      Wg({ ...r });
    }
    const Y = (b) => JSON.stringify(b, null, 2);
    function O(b) {
      f.settings.cardCollapsed[b] = !f.settings.cardCollapsed[b], ke();
    }
    return (b, h) => (y(), k("div", ub, [
      C(f).session ? (y(), k(te, { key: 1 }, [
        t.value ? U("", !0) : (y(), k("p", db, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        C(f).pack && C(f).session.packVersion !== C(f).pack.version ? (y(), k("p", fb, " 入场时副本包版本为 " + _(C(f).session.packVersion) + "，当前为 " + _(C(f).pack.version) + "。 ", 1)) : U("", !0),
        C(f).pack?.phases.length ? (y(), k("div", pb, [
          h[8] || (h[8] = A("h4", null, "手动修正", -1)),
          A("div", hb, [
            ft(A("select", {
              "onUpdate:modelValue": h[0] || (h[0] = (g) => n.value = g),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              h[7] || (h[7] = A("option", { value: "" }, "切换到阶段…", -1)),
              (y(!0), k(te, null, he(C(f).pack.phases, (g) => (y(), k("option", {
                key: g.id,
                value: g.id
              }, _(g.name), 9, gb))), 128))
            ], 8, mb), [
              [ha, n.value]
            ]),
            A("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: S
            }, "切换", 8, xb)
          ]),
          A("div", vb, [
            ft(A("input", {
              "onUpdate:modelValue": h[1] || (h[1] = (g) => s.value = g),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, yb), [
              [
                It,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            A("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: E
            }, "修正轮次", 8, bb)
          ])
        ])) : U("", !0),
        C(f).pack?.roles?.length ? (y(), k("div", kb, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.rolesDebug,
            onClick: h[2] || (h[2] = (g) => O("rolesDebug"))
          }, [
            h[9] || (h[9] = A("h4", null, "角色登记", -1)),
            A("span", {
              class: se(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, wb),
          C(f).settings.cardCollapsed.rolesDebug ? U("", !0) : (y(), k("div", zb, [
            (y(!0), k(te, null, he(C(f).pack.roles, (g) => (y(), k("label", {
              key: g,
              class: "rlzc-field"
            }, [
              A("span", null, _(g), 1),
              ft(A("input", {
                "onUpdate:modelValue": (N) => r[g] = N,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, _b), [
                [It, r[g]]
              ])
            ]))), 128)),
            A("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: X
            }, "保存登记", 8, $b)
          ]))
        ])) : U("", !0),
        A("div", Sb, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.auditDebug,
            onClick: h[3] || (h[3] = (g) => O("auditDebug"))
          }, [
            h[10] || (h[10] = A("h4", null, "<副本> 核对", -1)),
            C(f).settings.cardCollapsed.auditDebug ? (y(), k("span", Eb, _(C(f).audit?.warnings.length ? "⚠️" : "无"), 1)) : U("", !0),
            A("span", {
              class: se(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.auditDebug }])
            }, "▸", 2)
          ], 8, Cb),
          C(f).settings.cardCollapsed.auditDebug ? U("", !0) : (y(), k("div", Mb, [
            C(f).audit?.warnings.length ? (y(), k(te, { key: 1 }, [
              A("p", Ib, "共 " + _(C(f).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
              A("ul", Nb, [
                (y(!0), k(te, null, he(C(f).audit.warnings.slice(-30).reverse(), (g, N) => (y(), k("li", { key: N }, [
                  A("span", null, [
                    A("small", null, "#" + _(g.index) + "｜" + _(g.phase) + "第" + _(g.round) + "轮", 1),
                    h[11] || (h[11] = A("br", null, null, -1)),
                    Le("⚠️ " + _(g.text), 1)
                  ])
                ]))), 128))
              ])
            ], 64)) : (y(), k("p", Tb, "没有发现问题。"))
          ]))
        ]),
        A("div", Pb, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.manualDebug,
            onClick: h[4] || (h[4] = (g) => O("manualDebug"))
          }, [
            h[12] || (h[12] = A("h4", null, "手动操作记录", -1)),
            C(f).settings.cardCollapsed.manualDebug && C(f).session.manual.length ? (y(), k("span", Lb, "×" + _(C(f).session.manual.length), 1)) : U("", !0),
            A("span", {
              class: se(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.manualDebug }])
            }, "▸", 2)
          ], 8, jb),
          C(f).settings.cardCollapsed.manualDebug ? U("", !0) : (y(), k("div", Db, [
            C(f).session.manual.length ? (y(), k("ul", Fb, [
              (y(!0), k(te, null, he(C(f).session.manual, (g, N) => (y(), k("li", { key: N }, [
                A("code", null, "#" + _(g.atIndex) + " " + _(g.kind) + " " + _("phase" in g ? g.phase : "") + _("round" in g ? g.round : "") + _("targetPhase" in g ? `${g.targetPhase}:${g.targetRound}` : ""), 1),
                A("button", {
                  class: "rlzc-btn ghost small",
                  disabled: !t.value,
                  onClick: (D) => C(Gg)(N)
                }, "撤销", 8, Rb)
              ]))), 128))
            ])) : (y(), k("p", Ob, "无"))
          ]))
        ]),
        l.value && (l.value.state || l.value.record) ? (y(), k("details", Bb, [
          h[13] || (h[13] = A("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          A("pre", Vb, _(l.value.text || "（尚无状态）"), 1),
          l.value.record ? (y(), k("pre", Ub, _(Y(l.value.record)), 1)) : U("", !0),
          h[14] || (h[14] = A("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : U("", !0),
        x.value ? (y(), k("details", Hb, [
          h[20] || (h[20] = A("summary", null, "黑市：盘口赔率与检测判定", -1)),
          A("table", Wb, [
            h[18] || (h[18] = A("thead", null, [
              A("tr", null, [
                A("th", null, "盘"),
                A("th", null, "题目"),
                A("th", null, "赔率"),
                A("th", null, "结果")
              ])
            ], -1)),
            A("tbody", null, [
              (y(!0), k(te, null, he(x.value.book.markets, (g) => (y(), k("tr", {
                key: g.id
              }, [
                A("td", null, _(z[g.kind]) + " " + _(g.id), 1),
                A("td", null, [
                  Le(_(g.q), 1),
                  g.judge ? (y(), k(te, { key: 0 }, [
                    h[15] || (h[15] = A("br", null, null, -1)),
                    A("small", null, _(g.judge), 1)
                  ], 64)) : U("", !0),
                  g.judgeNo ? (y(), k(te, { key: 1 }, [
                    h[16] || (h[16] = A("br", null, null, -1)),
                    A("small", null, "否：" + _(g.judgeNo), 1)
                  ], 64)) : U("", !0),
                  g.by ? (y(), k(te, { key: 2 }, [
                    h[17] || (h[17] = A("br", null, null, -1)),
                    A("small", null, "by " + _(g.by), 1)
                  ], 64)) : U("", !0)
                ]),
                A("td", null, _(g.options.map((N) => `${N.label}(${Math.round(N.p * 100)}%) ×${N.odds.toFixed(2)}`).join("　")), 1),
                A("td", null, _(w(C(f).market.results[g.id], Object.fromEntries(g.options.map((N) => [N.id, N.label])))), 1)
              ]))), 128))
            ])
          ]),
          A("p", Gb, "庄家怪盘：" + _(j(x.value.book.freak)), 1),
          x.value.book.plan ? (y(), k("p", Kb, "计划开 " + _(x.value.book.plan.total) + " 个盘，其中怪盘 " + _(x.value.book.plan.freak) + " 个；实开 " + _(x.value.book.markets.length) + " 个", 1)) : U("", !0),
          A("p", qb, "开盘 " + _(x.value.book.openedAt) + "　" + _(x.value.book.closedAt ? `封盘 ${x.value.book.closedAt}` : "未封盘") + _(x.value.book.frozen ? "　已定格" : ""), 1),
          x.value.rounds.length ? (y(), k("table", Yb, [
            h[19] || (h[19] = A("thead", null, [
              A("tr", null, [
                A("th", null, "楼"),
                A("th", null, "检测"),
                A("th", null, "判定为真")
              ])
            ], -1)),
            A("tbody", null, [
              (y(!0), k(te, null, he(x.value.rounds, (g) => (y(), k("tr", {
                key: g.index,
                class: se({ "rlzc-row-warn": g.state === "miss" })
              }, [
                A("td", null, _(g.index), 1),
                A("td", null, _(H[g.state]), 1),
                A("td", null, _(Object.keys(g.hits).filter((N) => g.hits[N]).join(" ") || "—"), 1)
              ], 2))), 128))
            ])
          ])) : U("", !0)
        ])) : U("", !0),
        A("div", Jb, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !C(f).settings.cardCollapsed.injectionDebug,
            onClick: h[5] || (h[5] = (g) => O("injectionDebug"))
          }, [
            h[21] || (h[21] = A("h4", null, "本次注入", -1)),
            A("span", {
              class: se(["rlzc-collapse-arrow", { open: !C(f).settings.cardCollapsed.injectionDebug }])
            }, "▸", 2)
          ], 8, Zb),
          C(f).settings.cardCollapsed.injectionDebug ? U("", !0) : (y(), k("div", Xb, [
            A("pre", Qb, _([C(f).lastInjection.token, C(f).lastInjection.progress, C(f).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
          ]))
        ]),
        A("details", e1, [
          h[22] || (h[22] = A("summary", null, "重放结果", -1)),
          A("pre", t1, _(Y(L.value)), 1)
        ]),
        A("details", n1, [
          h[23] || (h[23] = A("summary", null, "会话原始数据", -1)),
          A("pre", s1, _(Y(C(f).session)), 1)
        ]),
        A("details", r1, [
          h[25] || (h[25] = A("summary", null, "每楼快照（最近60条）", -1)),
          A("table", i1, [
            h[24] || (h[24] = A("thead", null, [
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
              (y(!0), k(te, null, he(i.value, (g) => (y(), k("tr", {
                key: g.index,
                class: se({ "rlzc-row-warn": o.value.has(g.index) })
              }, [
                A("td", null, _(g.index) + _(g.snap.entry ? "★" : ""), 1),
                A("td", null, _(g.snap.phase), 1),
                A("td", null, _(g.snap.round), 1),
                A("td", null, _(g.snap.clock ?? ""), 1),
                A("td", null, _(g.snap.limit?.text ?? ""), 1),
                A("td", null, _(g.snap.injected.join(" ")), 1),
                A("td", null, _(p(g.snap)), 1),
                g.snap.ledgerMismatch ? (y(), k("td", o1, "状态栏 " + _(g.snap.ledgerMismatch.status) + " / 账本 " + _(g.snap.ledgerMismatch.ledger), 1)) : (y(), k("td", l1))
              ], 2))), 128))
            ])
          ])
        ]),
        A("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: h[6] || (h[6] = //@ts-ignore
          (...g) => C(Jo) && C(Jo)(...g))
        }, "删除副本会话", 8, a1)
      ], 64)) : (y(), k("p", Ab, "当前聊天没有副本会话。")),
      a.value.length ? (y(), k("details", c1, [
        h[27] || (h[27] = A("summary", null, "直播（每楼，最近60条）", -1)),
        A("table", u1, [
          h[26] || (h[26] = A("thead", null, [
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
            (y(!0), k(te, null, he(a.value, (g) => (y(), k("tr", {
              key: g.index,
              class: se({ "rlzc-row-warn": g.rec.ai && !g.rec.ai.ok && !g.rec.ai.pending })
            }, [
              A("td", null, _(g.index) + _(g.rec.scope === "corridor" ? "·回廊" : ""), 1),
              A("td", null, _(g.rec.hype) + _(g.rec.hurt ? "·伤" : ""), 1),
              A("td", null, _(g.rec.heat), 1),
              A("td", null, _(g.rec.viewers), 1),
              A("td", null, _(c(g.rec)), 1),
              A("td", null, _(u(g.rec)), 1)
            ], 2))), 128))
          ])
        ])
      ])) : U("", !0)
    ]));
  }
}), d1 = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, f1 = { class: "rlzc-head" }, p1 = { class: "rlzc-tabs" }, h1 = ["onClick"], m1 = { class: "rlzc-body" }, g1 = /* @__PURE__ */ Be({
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
        if (!await Ut("此页会显示副本真相，确定要打开吗？")) return;
        f.debugUnlocked = !0;
      }
      f.tab = s;
    }
    return (s, r) => (y(), k("div", {
      class: "rlzc-backdrop",
      onClick: r[1] || (r[1] = ed((i) => C(f).panelOpen = !1, ["self"]))
    }, [
      A("section", d1, [
        A("header", f1, [
          r[2] || (r[2] = A("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          A("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: r[0] || (r[0] = (i) => C(f).panelOpen = !1)
          }, "×")
        ]),
        A("nav", p1, [
          (y(), k(te, null, he(t, (i) => A("button", {
            key: i.id,
            class: se({ on: C(f).tab === i.id }),
            onClick: (o) => n(i.id)
          }, _(i.label), 11, h1)), 64))
        ]),
        A("div", m1, [
          C(f).tab === "system" ? (y(), We(_v, { key: 0 })) : C(f).tab === "ledger" ? (y(), We(Uv, { key: 1 })) : C(f).tab === "market" ? (y(), We(vy, { key: 2 })) : C(f).tab === "settings" ? (y(), We(cb, { key: 3 })) : C(f).tab === "debug" && C(f).debugUnlocked ? (y(), We(A1, { key: 4 })) : U("", !0)
        ])
      ])
    ]));
  }
}), x1 = /* @__PURE__ */ Be({
  __name: "App",
  setup(e) {
    return (t, n) => (y(), k(te, null, [
      C(f).settings.showBall ? (y(), We(Lx, { key: 0 })) : U("", !0),
      C(f).panelOpen ? (y(), We(g1, { key: 1 })) : U("", !0),
      _e(Ex)
    ], 64));
  }
}), v1 = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);--ok: #4caf72;--bad: #c9534f;font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:5000;width:48px;height:48px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--muted);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball.is-active{color:var(--accent);border-color:var(--accent)}.rlzc-ball.has-ring{border-color:transparent}.rlzc-ball.is-warn{color:var(--bad)}.rlzc-ball-inf{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;pointer-events:none}.rlzc-ball-ring{position:absolute;inset:-1px;width:48px;height:48px;transform:rotate(-90deg);pointer-events:none}.rlzc-ball-ring circle{fill:none;stroke-width:3}.rlzc-ball-ring-base{stroke:var(--line)}.rlzc-ball-ring-bar{stroke:var(--accent);stroke-linecap:round;transition:stroke-dasharray .3s ease}.rlzc-ball.is-warn .rlzc-ball-ring-bar{stroke:var(--bad)}@media(prefers-reduced-motion:reduce){.rlzc-ball-ring-bar{transition:none}}.rlzc-ball-live{position:absolute;top:1px;left:1px;width:12px;height:12px;border-radius:50%;background:var(--bad);border:2px solid var(--solid);pointer-events:none}.rlzc-ball-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--accent);color:var(--bg);font-size:11px;font-weight:700;line-height:18px;text-align:center;pointer-events:none}.rlzc-entry-card{position:fixed;z-index:9000;top:calc(var(--topBarBlockSize, 40px) + 12px);right:12px;width:300px;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:12px;box-shadow:0 6px 24px #0000004d;padding:10px 12px 4px 14px}@media(max-width:323.98px){.rlzc-entry-card{left:12px;width:auto}}@media(min-width:800px){.rlzc-entry-card.beside-panel{right:476px}}.rlzc-entry-close{position:absolute;top:0;right:0;width:44px;height:44px;display:grid;place-items:center;background:none;border:0;color:var(--muted);font:inherit;font-size:14px;cursor:pointer;padding:0}.rlzc-entry-close:hover{color:var(--fg)}.rlzc-entry-kicker{display:flex;align-items:center;gap:5px;font-size:12px;color:var(--muted);padding-right:36px}.rlzc-entry-inf{width:16px;height:16px;fill:none;stroke:var(--accent);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}.rlzc-entry-title{display:flex;align-items:center;gap:8px;margin:6px 0 2px;padding-right:30px}.rlzc-entry-level{flex:0 0 auto;display:inline-grid;place-items:center;min-width:24px;height:24px;padding:0 4px;border-radius:6px;border:1px solid var(--accent);color:var(--accent);font-size:13px;font-weight:800;line-height:1}.rlzc-entry-name{font-size:16px;font-weight:700;min-width:0;overflow-wrap:anywhere}.rlzc-entry-note{font-size:12px;color:var(--muted);margin-top:2px}.rlzc-entry-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:10px;padding-top:2px;border-top:1px solid var(--line)}.rlzc-entry-live{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0;margin-left:-2px;background:none;border:0;color:var(--fg);font:inherit;font-size:13px;cursor:pointer}.rlzc-entry-live .rlzc-toggle{display:inline-block;width:44px}.rlzc-entry-live .rlzc-toggle:after{content:none}.rlzc-entry-live:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:6px}.rlzc-toggle.danger.on{background:color-mix(in srgb,var(--bad) 75%,transparent);border-color:var(--bad)}.rlzc-entry-live.on{color:var(--bad)}.rlzc-entry-actions{display:flex;gap:6px}.rlzc-entry-actions .rlzc-btn{min-height:44px;min-width:60px}.rlzc-entry-actions .rlzc-entry-go{background:var(--accent);border-color:var(--accent);font-weight:700;color:var(--bg);color:rgb(from var(--bg) r g b)}.rlzc-entry-fade-enter-active,.rlzc-entry-fade-leave-active{transition:opacity .16s ease,transform .16s ease}.rlzc-entry-fade-enter-from,.rlzc-entry-fade-leave-to{opacity:0;transform:translateY(-4px)}@media(prefers-reduced-motion:reduce){.rlzc-entry-fade-enter-active,.rlzc-entry-fade-leave-active{transition:none}.rlzc-entry-fade-enter-from,.rlzc-entry-fade-leave-to{transform:none}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:5001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-field.rlzc-field-num>span{flex:1 1 auto;min-width:0}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-conn-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px;flex:0 0 auto}.rlzc-input.rlzc-input-num{flex:0 0 auto;width:calc(4ch + 20px);margin-left:auto;text-align:right;font-variant-numeric:tabular-nums;-moz-appearance:textfield;appearance:textfield}.rlzc-input-num::-webkit-inner-spin-button,.rlzc-input-num::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.rlzc-seg.active{background:var(--accent);border-color:var(--accent);font-weight:700;color:var(--bg);color:rgb(from var(--bg) r g b)}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-toggle:after{content:"";position:absolute;inset:-10px 0}.rlzc-segsrc button:disabled{opacity:.4;cursor:not-allowed}.rlzc-segsrc button:disabled:hover{background:none;color:var(--muted)}.rlzc-live-card .rlzc-input-num{min-height:44px}.rlzc-option-row-stack{flex-direction:column;align-items:stretch;gap:0}.rlzc-option-row-stack .rlzc-segsrc{margin:6px 0 2px}.rlzc-option-row-stack .rlzc-hint{margin:2px 0 0}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-right{flex:0 0 auto;display:flex;flex-direction:column;align-items:flex-end;gap:2px}.rlzc-ledger-item-after{font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-status{flex:0 0 auto;font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-collapse-head .rlzc-dot{font-size:12px}.rlzc-market-tabs button{flex:1 1 0;min-height:44px}.rlzc-mk-status{font-size:14px}.rlzc-mk-q{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;font-weight:600;overflow-wrap:anywhere}.rlzc-mk-tag{flex:0 0 auto;font-size:11px;font-weight:600;color:var(--accent);padding:1px 6px;border:1px solid color-mix(in srgb,var(--accent) 60%,transparent);border-radius:4px}.rlzc-mk-opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.rlzc-mk-opt{display:flex;align-items:center;justify-content:space-between;gap:6px;min-height:44px;padding:6px 10px;font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 60%,transparent);border:1px solid var(--line);border-radius:8px;cursor:pointer;text-align:left}.rlzc-mk-opt b{font-weight:600;font-variant-numeric:tabular-nums;color:var(--muted)}.rlzc-mk-opt.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 16%,transparent)}.rlzc-mk-opt.on b{color:var(--fg)}.rlzc-mk-opt:disabled{opacity:.55;cursor:not-allowed}.rlzc-mk-bet{margin-top:8px}.rlzc-mk-bet .rlzc-input,.rlzc-mk-bet .rlzc-btn{min-height:44px}.rlzc-mk-bet .rlzc-btn{flex:0 0 auto;min-width:64px}.rlzc-mk-red{color:var(--bad);font-size:12px;margin:2px 0}.rlzc-mk-mine{list-style:none;margin:8px 0 0;padding:6px 0 0;border-top:1px dashed var(--line);font-size:12px;color:var(--muted)}.rlzc-mk-mine li{padding:2px 0;font-variant-numeric:tabular-nums}.rlzc-tk-list{list-style:none;margin:0;padding:0}.rlzc-tk{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:52px;padding:6px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-tk:last-child{border-bottom:none}.rlzc-tk-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-tk-title{font-size:13px;overflow-wrap:anywhere}.rlzc-tk-left small{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-stamp{flex:0 0 40px;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:16px;border:2px solid currentColor;transform:rotate(-14deg);box-shadow:inset 0 0 0 2px color-mix(in srgb,currentColor 18%,transparent)}.rlzc-stamp.win{color:var(--ok)}.rlzc-stamp.lose{color:var(--bad)}.rlzc-stamp.refund{color:var(--muted)}.rlzc-stamp.pending{color:var(--muted);border-style:dashed;border-width:1px;box-shadow:none;transform:none;font-weight:600;font-size:14px}.rlzc-cs-tables{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-cs-table{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-height:76px;text-align:left;font:inherit;color:var(--fg);cursor:pointer}.rlzc-cs-table b{font-size:15px}.rlzc-cs-table small{font-size:12px;color:var(--muted);line-height:1.45}.rlzc-cs-table.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent)}.rlzc-cs-play h4{margin-bottom:4px}.rlzc-cs-seg{margin:6px 0}.rlzc-cs-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:4px;margin:6px 0}.rlzc-cs-grid.door{grid-template-columns:repeat(5,minmax(0,1fr))}.rlzc-cs-grid button{min-height:44px;padding:0 2px;font:inherit;font-size:13px;color:var(--muted);cursor:pointer;background:none;border:1px solid var(--line);border-radius:8px;font-variant-numeric:tabular-nums}.rlzc-cs-grid button.on{color:var(--fg);border-color:var(--accent);background:color-mix(in srgb,var(--accent) 15%,transparent);font-weight:600}.rlzc-cs-face{margin-top:10px;min-height:52px;display:grid;place-items:center;font-size:26px;font-weight:800;font-variant-numeric:tabular-nums;border:1px dashed var(--line);border-radius:10px}.rlzc-cs-face.rolling{color:var(--muted)}.rlzc-cs-result{margin:8px 0 0;font-weight:600;font-variant-numeric:tabular-nums}.rlzc-cs-result.win{color:var(--ok)}.rlzc-cs-result.lose{color:var(--bad)}';
function y1(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function Dc(e, t, n) {
  const s = ve().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function b1() {
  const e = y1();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await Dc("/api/extensions/version", e, t);
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
async function k1(e) {
  const t = await Dc("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const w1 = "回廊种菜系统", z1 = 100, _1 = [], $1 = [], S1 = "dist/index.js", C1 = "xiaxiii", E1 = "1.0.5", M1 = "https://github.com/xiaxiii/M-bius-strip", T1 = !0, I1 = "rlzcInterceptor", N1 = {
  display_name: w1,
  loading_order: z1,
  requires: _1,
  optional: $1,
  js: S1,
  author: C1,
  version: E1,
  homePageUrl: M1,
  auto_update: T1,
  generate_interceptor: I1
}, il = "rlzc-host", ol = "rlzc-menu-btn", ll = "rlzc-settings-drawer";
function P1() {
  if (document.getElementById(il)) return;
  const e = document.createElement("div");
  e.id = il, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = v1, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), sd(x1).mount(s), Fc(), Rc();
}
function Fc(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => Fc(e + 1), 500);
    return;
  }
  if (document.getElementById(ol)) return;
  const n = document.createElement("div");
  n.id = ol, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const r = document.createElement("span");
  r.textContent = "回廊种菜系统", n.append(s, r), n.addEventListener("click", () => {
    f.panelOpen = !f.panelOpen;
  }), t.appendChild(n);
}
function Rc(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => Rc(e + 1), 500);
    return;
  }
  if (document.getElementById(ll)) return;
  const n = (Y, O = "", b = "") => {
    const h = document.createElement(Y);
    return O && (h.className = O), b && (h.textContent = b), h;
  }, s = n("div");
  s.id = ll;
  const r = n("div", "inline-drawer"), i = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), i.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const a = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => f.panelOpen = !0);
  const u = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  u.addEventListener("click", () => {
    f.settings.ball = { x: null, y: null }, f.settings.showBall = !0, ke();
  });
  const d = n("label", "checkbox_label"), p = document.createElement("input");
  p.type = "checkbox", p.addEventListener("change", () => {
    f.settings.showBall = p.checked, ke();
  }), d.append(p, n("span", "", "显示悬浮球")), sr(() => f.settings.showBall, (Y) => p.checked = Y, { immediate: !0 });
  const x = n("div", "flex-container");
  x.append(c, u);
  const z = n("div", "flex-container alignitemscenter"), w = n("small", "rlzc-update-status", "正在检查更新…"), j = n("div", "menu_button menu_button_icon", "检查更新"), H = n("div", "menu_button menu_button_icon", "立即更新"), L = n("div", "menu_button menu_button_icon", "刷新页面");
  H.style.display = "none", L.style.display = "none", z.append(w, j, H, L);
  let S = null, E = !1;
  const X = async () => {
    if (!E) {
      E = !0, w.textContent = "正在检查更新…", H.style.display = "none";
      try {
        S = await b1();
        const Y = `（${N1.version}）`;
        S.isGit ? S.isUpToDate ? w.textContent = `已是最新版本${Y}` : (w.textContent = `有新版本可以更新，当前${Y}`, H.style.display = "") : w.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = S.isGit && !S.isUpToDate ? "" : "none";
      } catch (Y) {
        w.textContent = `检查更新失败：${Y.message}`;
      } finally {
        E = !1;
      }
    }
  };
  j.addEventListener("click", () => void X()), H.addEventListener("click", async () => {
    if (!(!S || E)) {
      E = !0, w.textContent = "正在更新…", H.style.display = "none";
      try {
        await k1(S), l.style.display = "none", w.textContent = "更新完成，刷新页面后生效。", L.style.display = "";
      } catch (Y) {
        w.textContent = `更新失败：${Y.message}`, H.style.display = "";
      } finally {
        E = !1;
      }
    }
  }), L.addEventListener("click", () => location.reload()), setTimeout(() => void X(), 3e3), a.append(x, d, z, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), r.append(i, a), s.append(r), t.append(s);
}
globalThis.rlzcInterceptor = Dg;
function Wr() {
  _g(), Mt("MESSAGE_RECEIVED", (e, t) => Xg(Number(e), t)), Mt("CHARACTER_MESSAGE_RENDERED", (e) => Br(Number(e))), Mt("MESSAGE_DELETED", () => Or()), Mt("MESSAGE_SWIPED", (e) => {
    Bg(Number(e)), Br(Number(e));
  }), Mt("MESSAGE_EDITED", (e) => Or(Number(e))), Mt("MESSAGE_UPDATED", (e) => {
    Or(Number(e)), Br(Number(e));
  }), Mt("CHAT_CHANGED", () => el()), Mt("MORE_MESSAGES_LOADED", () => Ui()), P1(), jm({ view: Hi, toggle: ox }), el(), console.log("[rlzc] 回廊种菜系统已加载", f.settings);
}
const al = window.jQuery;
typeof al == "function" ? al(() => Wr()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Wr) : Wr();
