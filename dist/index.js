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
const ve = {}, en = [], sn = () => {
}, Ll = () => !1, sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), rr = (e) => e.startsWith("onUpdate:"), Oe = Object.assign, Dl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, hu = Object.prototype.hasOwnProperty, fe = (e, t) => hu.call(e, t), se = Array.isArray, Pt = (e) => cs(e) === "[object Map]", ln = (e) => cs(e) === "[object Set]", ho = (e) => cs(e) === "[object Date]", de = (e) => typeof e == "function", ye = (e) => typeof e == "string", ht = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", Fl = (e) => (he(e) || de(e)) && de(e.then) && de(e.catch), jl = Object.prototype.toString, cs = (e) => jl.call(e), mu = (e) => cs(e).slice(8, -1), Ol = (e) => cs(e) === "[object Object]", yi = (e) => ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fn = /* @__PURE__ */ vi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ir = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, gu = /-\w/g, Qe = ir(
  (e) => e.replace(gu, (t) => t.slice(1).toUpperCase())
), xu = /\B([A-Z])/g, An = ir(
  (e) => e.replace(xu, "-$1").toLowerCase()
), Bl = ir((e) => e.charAt(0).toUpperCase() + e.slice(1)), Cr = ir(
  (e) => e ? `on${Bl(e)}` : ""
), ft = (e, t) => !Object.is(e, t), Cs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Vl = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, or = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, vu = (e) => {
  const t = ye(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let mo;
const lr = () => mo || (mo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ar(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ye(s) ? wu(s) : ar(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ye(e) || he(e))
    return e;
}
const yu = /;(?![^(]*\))/g, bu = /:([^]+)/, ku = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function wu(e) {
  const t = {};
  return e.replace(ku, (n) => n.startsWith("/*") ? "" : n).split(yu).forEach((n) => {
    if (n) {
      const s = n.split(bu);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Z(e) {
  let t = "";
  if (ye(e))
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
const zu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _u = /* @__PURE__ */ vi(zu);
function Ul(e) {
  return !!e || e === "";
}
function $u(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = Dt(e[r], t[r], n);
  return s;
}
function go(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), r = new Uint8Array(s.length);
  for (const i of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!r[l] && Dt(i, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function Su(e, t, n) {
  let s = Pt(e), r = Pt(t);
  if (s || r || (s = ln(e), r = ln(t), s || r))
    return s && r ? go(e, t, n) : !1;
  const i = Object.keys(e).length, o = Object.keys(t).length;
  if (i !== o)
    return !1;
  for (const l in e) {
    const c = e.hasOwnProperty(l), a = t.hasOwnProperty(l);
    if (c && !a || !c && a || !Dt(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function xo(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [r, i] = n;
  if (r.has(e) || i.has(t))
    return r.get(e) === t && i.get(t) === e;
  r.set(e, t), i.set(t, e);
  const o = s(e, t, n);
  return r.delete(e), i.delete(t), o;
}
function Dt(e, t, n) {
  if (e === t) return !0;
  let s = ho(e), r = ho(t);
  return s || r ? s && r ? e.getTime() === t.getTime() : !1 : (s = ht(e), r = ht(t), s || r ? e === t : (s = se(e), r = se(t), s || r ? s && r ? xo(e, t, n, $u) : !1 : (s = he(e), r = he(t), s || r ? !s || !r ? !1 : xo(e, t, n, Su) : String(e) === String(t))));
}
function Cu(e, t) {
  return e.findIndex((n) => Dt(n, t));
}
const Hl = (e) => !!(e && e.__v_isRef === !0), _ = (e) => ye(e) ? e : e == null ? "" : se(e) || he(e) && (e.toString === jl || !de(e.toString)) ? Hl(e) ? _(e.value) : JSON.stringify(e, Wl, 2) : String(e), Wl = (e, t) => Hl(t) ? Wl(e, t.value) : Pt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Er(s, i) + " =>"] = r, n),
    {}
  )
} : ln(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Er(n))
} : ht(t) ? Er(t) : he(t) && !se(t) && !Ol(t) ? String(t) : t, Er = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ht(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ze;
class Eu {
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
function Mu() {
  return ze;
}
let pe;
const Mr = /* @__PURE__ */ new WeakSet();
class Gl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ze && (ze.active ? ze.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Mr.has(this) && (Mr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ql(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, vo(this), Yl(this);
    const t = pe, n = et;
    pe = this, et = !0;
    try {
      return this.fn();
    } finally {
      Jl(this), pe = t, et = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        wi(t);
      this.deps = this.depsTail = void 0, vo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Mr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ei(this) && this.run();
  }
  get dirty() {
    return ei(this);
  }
}
let Kl = 0, jn, On;
function ql(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = On, On = e;
    return;
  }
  e.next = jn, jn = e;
}
function bi() {
  Kl++;
}
function ki() {
  if (--Kl > 0)
    return;
  if (On) {
    let t = On;
    for (On = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; jn; ) {
    let t = jn;
    for (jn = void 0; t; ) {
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
function Yl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Jl(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), wi(s), Tu(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function ei(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Zl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Zl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qn) || (e.globalVersion = qn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ei(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = pe, s = et;
  pe = e, et = !0;
  try {
    Yl(e);
    const r = e.fn(e._value);
    (t.version === 0 || ft(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    pe = n, et = s, Jl(e), e.flags &= -3;
  }
}
function wi(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      wi(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Tu(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let et = !0;
const Xl = [];
function Ft() {
  Xl.push(et), et = !1;
}
function jt() {
  const e = Xl.pop();
  et = e === void 0 ? !0 : e;
}
function vo(e) {
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
let qn = 0;
class Iu {
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
    if (!pe || !et || pe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== pe)
      n = this.activeLink = new Iu(pe, this), pe.deps ? (n.prevDep = pe.depsTail, pe.depsTail.nextDep = n, pe.depsTail = n) : pe.deps = pe.depsTail = n, Ql(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = pe.depsTail, n.nextDep = void 0, pe.depsTail.nextDep = n, pe.depsTail = n, pe.deps === n && (pe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, qn++, this.notify(t);
  }
  notify(t) {
    bi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ki();
    }
  }
}
function Ql(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ql(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ti = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ Symbol(
  ""
), ni = /* @__PURE__ */ Symbol(
  ""
), Yn = /* @__PURE__ */ Symbol(
  ""
);
function Me(e, t, n) {
  if (et && pe) {
    let s = ti.get(e);
    s || ti.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new zi()), r.map = s, r.key = n), r.track();
  }
}
function wt(e, t, n, s, r, i) {
  const o = ti.get(e);
  if (!o) {
    qn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (bi(), t === "clear")
    o.forEach(l);
  else {
    const c = se(e), a = c && yi(n);
    if (c && n === "length") {
      const u = Number(s);
      o.forEach((f, h) => {
        (h === "length" || h === Yn || !ht(h) && h >= u) && l(f);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(Yn)), t) {
        case "add":
          c ? a && l(o.get("length")) : (l(o.get(rn)), Pt(e) && l(o.get(ni)));
          break;
        case "delete":
          c || (l(o.get(rn)), Pt(e) && l(o.get(ni)));
          break;
        case "set":
          Pt(e) && l(o.get(rn));
          break;
      }
  }
  ki();
}
function mn(e) {
  const t = /* @__PURE__ */ ae(e);
  return t === e || (Me(t, "iterate", Yn), /* @__PURE__ */ Ke(e)) ? t : /* @__PURE__ */ mt(e) ? /* @__PURE__ */ Rt(e) ? t.map((n) => Ot(qe(n))) : t.map(Ot) : t.map(qe);
}
function cr(e) {
  return Me(e = /* @__PURE__ */ ae(e), "iterate", Yn), e;
}
function ut(e, t) {
  return /* @__PURE__ */ mt(e) ? Ot(/* @__PURE__ */ Rt(e) ? qe(t) : t) : qe(t);
}
const Nu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Tr(this, Symbol.iterator, (e) => ut(this, e));
  },
  concat(...e) {
    return mn(this).concat(
      ...e.map((t) => se(t) ? mn(t) : t)
    );
  },
  entries() {
    return Tr(this, "entries", (e) => (e[1] = ut(this, e[1]), e));
  },
  every(e, t) {
    return vt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return vt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => ut(this, s)),
      arguments
    );
  },
  find(e, t) {
    return vt(
      this,
      "find",
      e,
      t,
      (n) => ut(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return vt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return vt(
      this,
      "findLast",
      e,
      t,
      (n) => ut(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return vt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return vt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ir(this, "includes", e);
  },
  indexOf(...e) {
    return Ir(this, "indexOf", e);
  },
  join(e) {
    return mn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ir(this, "lastIndexOf", e);
  },
  map(e, t) {
    return vt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Mn(this, "pop");
  },
  push(...e) {
    return Mn(this, "push", e);
  },
  reduce(e, ...t) {
    return yo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return yo(this, "reduceRight", e, t);
  },
  shift() {
    return Mn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return vt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Mn(this, "splice", e);
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
    return Mn(this, "unshift", e);
  },
  values() {
    return Tr(this, "values", (e) => ut(this, e));
  }
};
function Tr(e, t, n) {
  const s = cr(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Ke(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const Pu = Array.prototype;
function vt(e, t, n, s, r, i) {
  const o = cr(e), l = o !== e && !/* @__PURE__ */ Ke(e), c = o[t];
  if (c !== Pu[t]) {
    const f = c.apply(e, i);
    return l ? qe(f) : f;
  }
  let a = n;
  o !== e && (l ? a = function(f, h) {
    return n.call(this, ut(e, f), h, e);
  } : n.length > 2 && (a = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const u = c.call(o, a, s);
  return l && r ? r(u) : u;
}
function yo(e, t, n, s) {
  const r = cr(e), i = r !== e && !/* @__PURE__ */ Ke(e);
  let o = n, l = !1;
  r !== e && (i ? (l = s.length === 0, o = function(a, u, f) {
    return l && (l = !1, a = ut(e, a)), n.call(this, a, ut(e, u), f, e);
  }) : n.length > 3 && (o = function(a, u, f) {
    return n.call(this, a, u, f, e);
  }));
  const c = r[t](o, ...s);
  return l ? ut(e, c) : c;
}
function Ir(e, t, n) {
  const s = /* @__PURE__ */ ae(e);
  Me(s, "iterate", Yn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Si(n[0]) ? (n[0] = /* @__PURE__ */ ae(n[0]), s[t](...n)) : r;
}
function Mn(e, t, n = []) {
  Ft(), bi();
  const s = (/* @__PURE__ */ ae(e))[t].apply(e, n);
  return ki(), jt(), s;
}
const Ru = /* @__PURE__ */ vi("__proto__,__v_isRef,__isVue"), ea = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ht)
);
function Lu(e) {
  ht(e) || (e = String(e));
  const t = /* @__PURE__ */ ae(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
class ta {
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
      return s === (r ? i ? Gu : ia : i ? ra : sa).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = se(t);
    if (!r) {
      let c;
      if (o && (c = Nu[n]))
        return c;
      if (n === "hasOwnProperty")
        return Lu;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ne(t) ? t : s
    );
    if ((ht(n) ? ea.has(n) : Ru(n)) || (r || Me(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Ne(l)) {
      const c = o && yi(n) ? l : l.value;
      return r && he(c) ? /* @__PURE__ */ ri(c) : c;
    }
    return he(l) ? r ? /* @__PURE__ */ ri(l) : /* @__PURE__ */ ur(l) : l;
  }
}
class na extends ta {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = se(t) && yi(n);
    if (!this._isShallow) {
      const a = /* @__PURE__ */ mt(i);
      if (!/* @__PURE__ */ Ke(s) && !/* @__PURE__ */ mt(s) && (i = /* @__PURE__ */ ae(i), s = /* @__PURE__ */ ae(s)), !o && /* @__PURE__ */ Ne(i) && !/* @__PURE__ */ Ne(s))
        return a || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : fe(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Ne(t) ? t : r
    );
    return t === /* @__PURE__ */ ae(r) && c && (l ? ft(s, i) && wt(t, "set", n, s) : wt(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = fe(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && wt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ht(n) || !ea.has(n)) && Me(t, "has", n), s;
  }
  ownKeys(t) {
    return Me(
      t,
      "iterate",
      se(t) ? "length" : rn
    ), Reflect.ownKeys(t);
  }
}
class Du extends ta {
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
const Fu = /* @__PURE__ */ new na(), ju = /* @__PURE__ */ new Du(), Ou = /* @__PURE__ */ new na(!0);
const si = (e) => e, vs = (e) => Reflect.getPrototypeOf(e);
function Bu(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ ae(r), o = Pt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, a = r[e](...s), u = n ? si : t ? Ot : qe;
    return !t && Me(
      i,
      "iterate",
      c ? ni : rn
    ), Oe(
      // inheriting all iterator properties
      Object.create(a),
      {
        // iterator protocol
        next() {
          const { value: f, done: h } = a.next();
          return h ? { value: f, done: h } : {
            value: l ? [u(f[0]), u(f[1])] : u(f),
            done: h
          };
        }
      }
    );
  };
}
function ys(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Vu(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(r);
      e || (ft(r, l) && Me(o, "get", r), Me(o, "get", l));
      const { has: c } = vs(o), a = t ? si : e ? Ot : qe;
      if (c.call(o, r))
        return a(i.get(r));
      if (c.call(o, l))
        return a(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Me(/* @__PURE__ */ ae(r), "iterate", rn), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(r);
      return e || (ft(r, l) && Me(o, "has", r), Me(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ae(l), a = t ? si : e ? Ot : qe;
      return !e && Me(c, "iterate", rn), l.forEach((u, f) => r.call(i, a(u), a(f), o));
    }
  };
  return Oe(
    n,
    e ? {
      add: ys("add"),
      set: ys("set"),
      delete: ys("delete"),
      clear: ys("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ ae(this), o = vs(i), l = /* @__PURE__ */ ae(r), c = !t && !/* @__PURE__ */ Ke(r) && !/* @__PURE__ */ mt(r) ? l : r;
        return o.has.call(i, c) || ft(r, c) && o.has.call(i, r) || ft(l, c) && o.has.call(i, l) || (i.add(c), wt(i, "add", c, c)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Ke(i) && !/* @__PURE__ */ mt(i) && (i = /* @__PURE__ */ ae(i));
        const o = /* @__PURE__ */ ae(this), { has: l, get: c } = vs(o);
        let a = l.call(o, r);
        a || (r = /* @__PURE__ */ ae(r), a = l.call(o, r));
        const u = c.call(o, r);
        return o.set(r, i), a ? ft(i, u) && wt(o, "set", r, i) : wt(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ ae(this), { has: o, get: l } = vs(i);
        let c = o.call(i, r);
        c || (r = /* @__PURE__ */ ae(r), c = o.call(i, r)), l && l.call(i, r);
        const a = i.delete(r);
        return c && wt(i, "delete", r, void 0), a;
      },
      clear() {
        const r = /* @__PURE__ */ ae(this), i = r.size !== 0, o = r.clear();
        return i && wt(
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
    n[r] = Bu(r, e, t);
  }), n;
}
function _i(e, t) {
  const n = Vu(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    fe(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Uu = {
  get: /* @__PURE__ */ _i(!1, !1)
}, Hu = {
  get: /* @__PURE__ */ _i(!1, !0)
}, Wu = {
  get: /* @__PURE__ */ _i(!0, !1)
};
const sa = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap(), Gu = /* @__PURE__ */ new WeakMap();
function Ku(e) {
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
function ur(e) {
  return /* @__PURE__ */ mt(e) ? e : $i(
    e,
    !1,
    Fu,
    Uu,
    sa
  );
}
// @__NO_SIDE_EFFECTS__
function qu(e) {
  return $i(
    e,
    !1,
    Ou,
    Hu,
    ra
  );
}
// @__NO_SIDE_EFFECTS__
function ri(e) {
  return $i(
    e,
    !0,
    ju,
    Wu,
    ia
  );
}
function $i(e, t, n, s, r) {
  if (!he(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = Ku(mu(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  return /* @__PURE__ */ mt(e) ? /* @__PURE__ */ Rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Si(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ae(t) : e;
}
function Yu(e) {
  return !fe(e, "__v_skip") && Object.isExtensible(e) && Vl(e, "__v_skip", !0), e;
}
const qe = (e) => he(e) ? /* @__PURE__ */ ur(e) : e, Ot = (e) => he(e) ? /* @__PURE__ */ ri(e) : e;
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return Ju(e, !1);
}
function Ju(e, t) {
  return /* @__PURE__ */ Ne(e) ? e : new Zu(e, t);
}
class Zu {
  constructor(t, n) {
    this.dep = new zi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ae(t), this._value = n ? t : qe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ke(t) || /* @__PURE__ */ mt(t);
    t = s ? t : /* @__PURE__ */ ae(t), ft(t, n) && (this._rawValue = t, this._value = s ? t : qe(t), this.dep.trigger());
  }
}
function S(e) {
  return /* @__PURE__ */ Ne(e) ? e.value : e;
}
const Xu = {
  get: (e, t, n) => t === "__v_raw" ? e : S(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ Ne(r) && !/* @__PURE__ */ Ne(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function oa(e) {
  return /* @__PURE__ */ Rt(e) ? e : new Proxy(e, Xu);
}
class Qu {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new zi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    pe !== this)
      return ql(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Zl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ed(e, t, n = !1) {
  let s, r;
  return de(e) ? s = e : (s = e.get, r = e.set), new Qu(s, r, n);
}
const bs = {}, Ls = /* @__PURE__ */ new WeakMap();
let Zt;
function td(e, t = !1, n = Zt) {
  if (n) {
    let s = Ls.get(n);
    s || Ls.set(n, s = []), s.push(e);
  }
}
function nd(e, t, n = ve) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = n, a = (M) => r ? M : /* @__PURE__ */ Ke(M) || r === !1 || r === 0 ? zt(M, 1) : zt(M);
  let u, f, h, x, z = !1, k = !1;
  if (/* @__PURE__ */ Ne(e) ? (f = () => e.value, z = /* @__PURE__ */ Ke(e)) : /* @__PURE__ */ Rt(e) ? (f = () => a(e), z = !0) : se(e) ? (k = !0, z = e.some((M) => /* @__PURE__ */ Rt(M) || /* @__PURE__ */ Ke(M)), f = () => e.map((M) => {
    if (/* @__PURE__ */ Ne(M))
      return M.value;
    if (/* @__PURE__ */ Rt(M))
      return a(M);
    if (de(M))
      return c ? c(M, 2) : M();
  })) : de(e) ? t ? f = c ? () => c(e, 2) : e : f = () => {
    if (h) {
      Ft();
      try {
        h();
      } finally {
        jt();
      }
    }
    const M = Zt;
    Zt = u;
    try {
      return c ? c(e, 3, [x]) : e(x);
    } finally {
      Zt = M;
    }
  } : f = sn, t && r) {
    const M = f, ee = r === !0 ? 1 / 0 : r;
    f = () => zt(M(), ee);
  }
  const R = Mu(), U = () => {
    u.stop(), R && R.active && Dl(R.effects, u);
  };
  if (i && t) {
    const M = t;
    t = (...ee) => {
      const te = M(...ee);
      return U(), te;
    };
  }
  let D = k ? new Array(e.length).fill(bs) : bs;
  const E = (M) => {
    if (!(!(u.flags & 1) || !u.dirty && !M))
      if (t) {
        const ee = u.run();
        if (M || r || z || (k ? ee.some((te, X) => ft(te, D[X])) : ft(ee, D))) {
          h && h();
          const te = Zt;
          Zt = u;
          try {
            const X = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              D === bs ? void 0 : k && D[0] === bs ? [] : D,
              x
            ];
            D = ee, c ? c(t, 3, X) : (
              // @ts-expect-error
              t(...X)
            );
          } finally {
            Zt = te;
          }
        }
      } else
        u.run();
  };
  return l && l(E), u = new Gl(f), u.scheduler = o ? () => o(E, !1) : E, x = (M) => td(M, !1, u), h = u.onStop = () => {
    const M = Ls.get(u);
    if (M) {
      if (c)
        c(M, 4);
      else
        for (const ee of M) ee();
      Ls.delete(u);
    }
  }, t ? s ? E(!0) : D = u.run() : o ? o(E.bind(null, !0), !0) : u.run(), U.pause = u.pause.bind(u), U.resume = u.resume.bind(u), U.stop = U, U;
}
function zt(e, t = 1 / 0, n) {
  if (t <= 0 || !he(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ne(e))
    zt(e.value, t, n);
  else if (se(e))
    for (let s = 0; s < e.length; s++)
      zt(e[s], t, n);
  else if (ln(e) || Pt(e))
    e.forEach((s) => {
      zt(s, t, n);
    });
  else if (Ol(e)) {
    for (const s in e)
      zt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && zt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function us(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    dr(r, t, n);
  }
}
function tt(e, t, n, s) {
  if (de(e)) {
    const r = us(e, t, n, s);
    return r && Fl(r) && r.catch((i) => {
      dr(i, t, n);
    }), r;
  }
  if (se(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(tt(e[i], t, n, s));
    return r;
  }
}
function dr(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ve;
  if (t) {
    let l = t.parent;
    const c = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, c, a) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ft(), us(i, null, 10, [
        e,
        c,
        a
      ]), jt();
      return;
    }
  }
  sd(e, n, r, s, o);
}
function sd(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Te = [];
let ct = -1;
const bn = [];
let It = null, xn = 0;
const la = /* @__PURE__ */ Promise.resolve();
let Ds = null;
function aa(e) {
  const t = Ds || la;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rd(e) {
  let t = ct + 1, n = Te.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Te[s], i = Jn(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ci(e) {
  if (!(e.flags & 1)) {
    const t = Jn(e), n = Te[Te.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jn(n) ? Te.push(e) : Te.splice(rd(t), 0, e), e.flags |= 1, ca();
  }
}
function ca() {
  Ds || (Ds = la.then(da));
}
function id(e) {
  if (!se(e))
    It && e.id === -1 ? It.splice(xn + 1, 0, e) : e.flags & 1 || (bn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      bn.push(e[t]);
  ca();
}
function bo(e, t, n = ct + 1) {
  for (; n < Te.length; n++) {
    const s = Te[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Te.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ua(e) {
  if (bn.length) {
    const t = [...new Set(bn)].sort(
      (n, s) => Jn(n) - Jn(s)
    );
    if (bn.length = 0, It) {
      for (let n = 0; n < t.length; n++)
        It.push(t[n]);
      return;
    }
    for (It = t, xn = 0; xn < It.length; xn++) {
      const n = It[xn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    It = null, xn = 0;
  }
}
const Jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function da(e) {
  try {
    for (ct = 0; ct < Te.length; ct++) {
      const t = Te[ct];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), us(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ct < Te.length; ct++) {
      const t = Te[ct];
      t && (t.flags &= -2);
    }
    ct = -1, Te.length = 0, ua(), Ds = null, (Te.length || bn.length) && da();
  }
}
let Ge = null, Aa = null;
function Fs(e) {
  const t = Ge;
  return Ge = e, Aa = e && e.type.__scopeId || null, t;
}
function fa(e, t = Ge, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Bs(-1);
    const i = Fs(t), o = on.length;
    let l;
    try {
      l = e(...r);
    } finally {
      for (let c = on.length; c > o; c--) Pa();
      Fs(i), s._d && Bs(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function pt(e, t) {
  if (Ge === null)
    return e;
  const n = mr(Ge), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = ve] = t[r];
    i && (de(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && zt(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Kt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[s];
    c && (Ft(), tt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), jt());
  }
}
function od(e, t, n = !1) {
  const s = Da();
  if (s || kn) {
    let r = kn ? kn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && de(t) ? t.call(s && s.proxy) : t;
  }
}
const ld = /* @__PURE__ */ Symbol.for("v-scx"), ad = () => od(ld);
function Ar(e, t, n) {
  return cd(e, t, n);
}
function cd(e, t, n = ve) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = Oe({}, n), c = t && s || !t && i !== "post";
  let a;
  if (es) {
    if (i === "sync") {
      const x = ad();
      a = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!c) {
      const x = () => {
      };
      return x.stop = sn, x.resume = sn, x.pause = sn, x;
    }
  }
  const u = Vt;
  l.call = (x, z, k) => tt(x, u, z, k);
  let f = !1;
  i === "post" ? l.scheduler = (x) => {
    Re(x, u && u.suspense);
  } : i !== "sync" && (f = !0, l.scheduler = (x, z) => {
    z ? x() : Ci(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), f && (x.flags |= 2, u && (x.id = u.uid, x.i = u));
  };
  const h = nd(e, t, l);
  return es && (a ? a.push(h) : c && h()), h;
}
const ud = /* @__PURE__ */ Symbol("_vte"), fr = (e) => e.__isTeleport, He = /* @__PURE__ */ Symbol("_leaveCb"), Tn = /* @__PURE__ */ Symbol("_enterCb");
function dd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ya(() => {
    e.isMounted = !0;
  }), Mi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ue = [Function, Array], pa = {
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
}, ha = (e) => {
  const t = e.subTree;
  return t.component ? ha(t.component) : t;
}, Ad = {
  name: "BaseTransition",
  props: pa,
  setup(e, { slots: t }) {
    const n = Da(), s = dd();
    return () => {
      const r = t.default && xa(t.default(), !0), i = r && r.length ? ma(r) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? F() : void 0
      );
      if (!i)
        return;
      const o = /* @__PURE__ */ ae(e), { mode: l } = o;
      if (s.isLeaving)
        return Nr(i);
      const c = js(i);
      if (!c)
        return Nr(i);
      let a = ii(
        c,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => a = f
      );
      c.type !== Ie && Zn(c, a);
      let u = n.subTree && js(n.subTree);
      if (u && u.type !== Ie && !Xt(u, c) && ha(n).type !== Ie) {
        let f = ii(
          u,
          o,
          s,
          n
        );
        if (Zn(u, f), l === "out-in" && c.type !== Ie)
          return s.isLeaving = !0, f.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, u = void 0;
          }, Nr(i);
        l === "in-out" && c.type !== Ie ? f.delayLeave = (h, x, z) => {
          const k = ga(
            s,
            u
          );
          k[String(u.key)] = u, h[He] = () => {
            x(), h[He] = void 0, delete a.delayedLeave, u = void 0;
          }, a.delayedLeave = () => {
            z(), delete a.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function ma(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ie) {
        t = n;
        break;
      }
  }
  return t;
}
const fd = Ad;
function ga(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function ii(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: a,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: h,
    onLeave: x,
    onAfterLeave: z,
    onLeaveCancelled: k,
    onBeforeAppear: R,
    onAppear: U,
    onAfterAppear: D,
    onAppearCancelled: E
  } = t, M = String(e.key), ee = ga(n, e), te = (C, p) => {
    C && tt(
      C,
      s,
      9,
      p
    );
  }, X = (C, p) => {
    const m = p[1];
    te(C, p), se(C) ? C.every((v) => v.length <= 1) && m() : C.length <= 1 && m();
  }, re = {
    mode: o,
    persisted: l,
    beforeEnter(C) {
      let p = c;
      if (!n.isMounted)
        if (i)
          p = R || c;
        else
          return;
      C[He] && C[He](
        !0
        /* cancelled */
      );
      const m = ee[M];
      m && Xt(e, m) && m.el[He] && m.el[He](), te(p, [C]);
    },
    enter(C) {
      if (ee[M] === e) return;
      let p = a, m = u, v = f;
      if (!n.isMounted)
        if (i)
          p = U || a, m = D || u, v = E || f;
        else
          return;
      let N = !1;
      C[Tn] = (le) => {
        N || (N = !0, le ? te(v, [C]) : te(m, [C]), re.delayedLeave && re.delayedLeave(), C[Tn] = void 0);
      };
      const ie = C[Tn].bind(null, !1);
      p ? X(p, [C, ie]) : ie();
    },
    leave(C, p) {
      const m = String(e.key);
      if (C[Tn] && C[Tn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return p();
      te(h, [C]);
      let v = !1;
      C[He] = (ie) => {
        v || (v = !0, p(), ie ? te(k, [C]) : te(z, [C]), C[He] = void 0, ee[m] === e && delete ee[m]);
      };
      const N = C[He].bind(null, !1);
      ee[m] = e, x ? X(x, [C, N]) : N();
    },
    clone(C) {
      const p = ii(
        C,
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
function Nr(e) {
  if (Ei(e))
    return e = Bt(e), e.children = null, e;
}
function js(e) {
  if (!Ei(e))
    return fr(e.type) && e.children ? ma(e.children) : e;
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
function Zn(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Zn(
      fr(n.type) && js(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function xa(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === J ? (o.patchFlag & 128 && r++, s = s.concat(
      xa(o.children, t, l)
    )) : (t || o.type !== Ie) && s.push(l != null ? Bt(o, { key: l }) : o);
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
    Oe({ name: e.name }, t, { setup: e })
  ) : e;
}
function pd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ko(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Os = /* @__PURE__ */ new WeakMap();
function Bn(e, t, n, s, r = !1) {
  if (se(e)) {
    e.forEach(
      (k, R) => Bn(
        k,
        t && (se(t) ? t[R] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Vn(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Bn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? mr(s.component) : s.el, o = r ? null : i, { i: l, r: c } = e, a = t && t.r, u = l.refs === ve ? l.refs = {} : l.refs, f = l.setupState, h = /* @__PURE__ */ ae(f), x = f === ve ? Ll : (k) => ko(u, k) ? !1 : fe(h, k), z = (k, R) => !(R && ko(u, R));
  if (a != null && a !== c) {
    if (wo(t), ye(a))
      u[a] = null, x(a) && (f[a] = null);
    else if (/* @__PURE__ */ Ne(a)) {
      const k = t;
      z(a, k.k) && (a.value = null), k.k && (u[k.k] = null);
    }
  }
  if (de(c))
    us(c, l, 12, [o, u]);
  else {
    const k = ye(c), R = /* @__PURE__ */ Ne(c);
    if (k || R) {
      const U = () => {
        if (e.f) {
          const D = k ? x(c) ? f[c] : u[c] : z() || !e.k ? c.value : u[e.k];
          if (r)
            se(D) && Dl(D, i);
          else if (se(D))
            D.includes(i) || D.push(i);
          else if (k)
            u[c] = [i], x(c) && (f[c] = u[c]);
          else {
            const E = [i];
            z(c, e.k) && (c.value = E), e.k && (u[e.k] = E);
          }
        } else k ? (u[c] = o, x(c) && (f[c] = o)) : R && (z(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const D = () => {
          U(), Os.delete(e);
        };
        D.id = -1, Os.set(e, D), Re(D, n);
      } else
        wo(e), U();
    }
  }
}
function wo(e) {
  const t = Os.get(e);
  t && (t.flags |= 8, Os.delete(e));
}
lr().requestIdleCallback;
lr().cancelIdleCallback;
const Vn = (e) => !!e.type.__asyncLoader, Ei = (e) => e.type.__isKeepAlive;
function hd(e, t, n = Vt, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ft();
      const l = Ni(n), c = tt(t, n, e, o);
      return l(), jt(), c;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const va = (e) => (t, n = Vt) => {
  (!es || e === "sp") && hd(e, (...s) => t(...s), n);
}, ya = va("m"), Mi = va(
  "bum"
), md = /* @__PURE__ */ Symbol.for("v-ndc");
function ce(e, t, n, s) {
  let r;
  const i = n, o = se(e);
  if (o || ye(e)) {
    const l = o && /* @__PURE__ */ Rt(e);
    let c = !1, a = !1;
    l && (c = !/* @__PURE__ */ Ke(e), a = /* @__PURE__ */ mt(e), e = cr(e)), r = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      r[u] = t(
        c ? a ? Ot(qe(e[u])) : qe(e[u]) : e[u],
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
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, a = l.length; c < a; c++) {
        const u = l[c];
        r[c] = t(e[u], u, c, i);
      }
    }
  else
    r = [];
  return r;
}
const oi = (e) => e ? Fa(e) ? mr(e) : oi(e.parent) : null, Un = (
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
    $parent: (e) => oi(e.parent),
    $root: (e) => oi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ci(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = aa.bind(e.proxy)),
    $watch: (e) => sn
  })
), Pr = (e, t) => e !== ve && !e.__isScriptSetup && fe(e, t), gd = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const h = o[t];
      if (h !== void 0)
        switch (h) {
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
        if (Pr(s, t))
          return o[t] = 1, s[t];
        if (fe(i, t))
          return o[t] = 3, i[t];
        if (n !== ve && fe(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const a = Un[t];
    let u, f;
    if (a)
      return t === "$attrs" && Me(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ve && fe(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      f = c.config.globalProperties, fe(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Pr(r, t) ? (r[t] = n, !0) : fe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || Pr(t, l) || fe(i, l) || fe(s, l) || fe(Un, l) || fe(r.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : fe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ba() {
  return {
    app: null,
    config: {
      isNativeTag: Ll,
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
let xd = 0;
function vd(e, t) {
  return function(s, r = null) {
    de(s) || (s = Oe({}, s)), r != null && !he(r) && (r = null);
    const i = ba(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const a = i.app = {
      _uid: xd++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Jd,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...f) {
        return o.has(u) || (u && de(u.install) ? (o.add(u), u.install(a, ...f)) : de(u) && (o.add(u), u(a, ...f))), a;
      },
      mixin(u) {
        return a;
      },
      component(u, f) {
        return f ? (i.components[u] = f, a) : i.components[u];
      },
      directive(u, f) {
        return f ? (i.directives[u] = f, a) : i.directives[u];
      },
      mount(u, f, h) {
        if (!c) {
          const x = a._ceVNode || _e(s, r);
          return x.appContext = i, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(x, u, h), c = !0, a._container = u, u.__vue_app__ = a, mr(x.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (tt(
          l,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(u, f) {
        return i.provides[u] = f, a;
      },
      runWithContext(u) {
        const f = kn;
        kn = a;
        try {
          return u();
        } finally {
          kn = f;
        }
      }
    };
    return a;
  };
}
let kn = null;
const yd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qe(t)}Modifiers`] || e[`${An(t)}Modifiers`];
function bd(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ve;
  let r = n;
  const i = t.startsWith("update:"), o = i && yd(s, t.slice(7));
  o && (o.trim && (r = n.map((u) => ye(u) ? u.trim() : u)), o.number && (r = r.map(or)));
  let l, c = s[l = Cr(t)] || // also try camelCase event handler (#2249)
  s[l = Cr(Qe(t))];
  !c && i && (c = s[l = Cr(An(t))]), c && tt(
    c,
    e,
    6,
    r
  );
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, tt(
      a,
      e,
      6,
      r
    );
  }
}
function kd(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {};
  return i ? (se(i) ? i.forEach((l) => o[l] = null) : Oe(o, i), he(e) && s.set(e, o), o) : (he(e) && s.set(e, null), null);
}
function pr(e, t) {
  return !e || !sr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), fe(e, t[0].toLowerCase() + t.slice(1)) || fe(e, An(t)) || fe(e, t));
}
function zo(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: a,
    renderCache: u,
    props: f,
    data: h,
    setupState: x,
    ctx: z,
    inheritAttrs: k
  } = e, R = Fs(e);
  let U, D;
  try {
    if (n.shapeFlag & 4) {
      const M = r || s, ee = M;
      U = dt(
        a.call(
          ee,
          M,
          u,
          f,
          x,
          h,
          z
        )
      ), D = l;
    } else {
      const M = t;
      U = dt(
        M.length > 1 ? M(
          f,
          { attrs: l, slots: o, emit: c }
        ) : M(
          f,
          null
        )
      ), D = t.props ? l : wd(l);
    }
  } catch (M) {
    on.length = 0, dr(M, e, 1), U = _e(Ie);
  }
  let E = U;
  if (D && k !== !1) {
    const M = Object.keys(D), { shapeFlag: ee } = E;
    M.length && ee & 7 && (i && M.some(rr) && (D = zd(
      D,
      i
    )), E = Bt(E, D, !1, !0));
  }
  if (n.dirs && (E = Bt(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const M = fr(E.type) && js(E) || E;
    Zn(M, n.transition);
  }
  return U = E, Fs(R), U;
}
const wd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || sr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, zd = (e, t) => {
  const n = {};
  for (const s in e)
    (!rr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function _d(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: c } = t, a = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? _o(s, o, a) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (ka(o, s, h) && !pr(a, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? _o(s, o, a) : !0 : !!o;
  return !1;
}
function _o(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (ka(t, e, i) && !pr(n, i))
      return !0;
  }
  return !1;
}
function ka(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && he(s) && he(r) ? !Dt(s, r) : s !== r;
}
function $d({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const wa = {}, za = () => Object.create(wa), _a = (e) => Object.getPrototypeOf(e) === wa;
function Sd(e, t, n, s = !1) {
  const r = {}, i = za();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), $a(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ qu(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Cd(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ae(r), [c] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (pr(e.emitsOptions, h))
          continue;
        const x = t[h];
        if (c)
          if (fe(i, h))
            x !== i[h] && (i[h] = x, a = !0);
          else {
            const z = Qe(h);
            r[z] = li(
              c,
              l,
              z,
              x,
              e,
              !1
            );
          }
        else
          x !== i[h] && (i[h] = x, a = !0);
      }
    }
  } else {
    $a(e, t, r, i) && (a = !0);
    let u;
    for (const f in l)
      (!t || // for camelCase
      !fe(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = An(f)) === f || !fe(t, u))) && (c ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[f] = li(
        c,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete r[f]);
    if (i !== l)
      for (const f in i)
        (!t || !fe(t, f)) && (delete i[f], a = !0);
  }
  a && wt(e.attrs, "set", "");
}
function $a(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Fn(c))
        continue;
      const a = t[c];
      let u;
      r && fe(r, u = Qe(c)) ? !i || !i.includes(u) ? n[u] = a : (l || (l = {}))[u] = a : pr(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ ae(n), a = l || ve;
    for (let u = 0; u < i.length; u++) {
      const f = i[u];
      n[f] = li(
        r,
        c,
        f,
        a[f],
        e,
        !fe(a, f)
      );
    }
  }
  return o;
}
function li(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = fe(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && de(c)) {
        const { propsDefaults: a } = r;
        if (n in a)
          s = a[n];
        else {
          const u = Ni(r);
          s = a[n] = c.call(
            null,
            t
          ), u();
        }
      } else
        s = c;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === An(n)) && (s = !0));
  }
  return s;
}
function Ed(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  if (!i)
    return he(e) && s.set(e, en), en;
  if (se(i))
    for (let a = 0; a < i.length; a++) {
      const u = Qe(i[a]);
      $o(u) && (o[u] = ve);
    }
  else if (i)
    for (const a in i) {
      const u = Qe(a);
      if ($o(u)) {
        const f = i[a], h = o[u] = se(f) || de(f) ? { type: f } : Oe({}, f), x = h.type;
        let z = !1, k = !0;
        if (se(x))
          for (let R = 0; R < x.length; ++R) {
            const U = x[R], D = de(U) && U.name;
            if (D === "Boolean") {
              z = !0;
              break;
            } else D === "String" && (k = !1);
          }
        else
          z = de(x) && x.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = z, h[
          1
          /* shouldCastTrue */
        ] = k, (z || fe(h, "default")) && l.push(u);
      }
    }
  const c = [o, l];
  return he(e) && s.set(e, c), c;
}
function $o(e) {
  return e[0] !== "$" && !Fn(e);
}
const Ti = (e) => e === "_" || e === "_ctx" || e === "$stable", Ii = (e) => se(e) ? e.map(dt) : [dt(e)], Md = (e, t, n) => {
  if (t._n)
    return t;
  const s = fa((...r) => Ii(t(...r)), n);
  return s._c = !1, s;
}, Sa = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Ti(r)) continue;
    const i = e[r];
    if (de(i))
      t[r] = Md(r, i, s);
    else if (i != null) {
      const o = Ii(i);
      t[r] = () => o;
    }
  }
}, Ca = (e, t) => {
  const n = Ii(t);
  e.slots.default = () => n;
}, Ea = (e, t, n) => {
  for (const s in t)
    (n || !Ti(s)) && (e[s] = t[s]);
}, Td = (e, t, n) => {
  const s = e.slots = za();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ea(s, t, n), n && Vl(s, "_", r, !0)) : Sa(t, s);
  } else t && Ca(e, t);
}, Id = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = ve;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Ea(r, t, n) : (i = !t.$stable, Sa(t, r)), o = t;
  } else t && (Ca(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Ti(l) && o[l] == null && delete r[l];
}, Re = Dd;
function Nd(e) {
  return Pd(e);
}
function Pd(e, t) {
  const n = lr();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: a,
    setElementText: u,
    parentNode: f,
    nextSibling: h,
    setScopeId: x = sn,
    insertStaticContent: z
  } = e, k = (g, y, $, L = null, T = null, P = null, V = void 0, B = null, O = !!y.dynamicChildren) => {
    if (g === y)
      return;
    g && !Xt(g, y) && (L = xs(g), K(g, T, P, !0), g = null), y.patchFlag === -2 && (O = !1, y.dynamicChildren = null), y.dynamicChildren && g && g.dynamicChildren && g.dynamicChildren.hasOnce && (y.dynamicChildren === en && (y.dynamicChildren = []), y.dynamicChildren.hasOnce = !0);
    const { type: I, ref: Q, shapeFlag: W } = y;
    switch (I) {
      case hr:
        R(g, y, $, L);
        break;
      case Ie:
        U(g, y, $, L);
        break;
      case Lr:
        g == null && D(y, $, L, V);
        break;
      case J:
        v(
          g,
          y,
          $,
          L,
          T,
          P,
          V,
          B,
          O
        );
        break;
      default:
        W & 1 ? ee(
          g,
          y,
          $,
          L,
          T,
          P,
          V,
          B,
          O
        ) : W & 6 ? N(
          g,
          y,
          $,
          L,
          T,
          P,
          V,
          B,
          O
        ) : (W & 64 || W & 128) && I.process(
          g,
          y,
          $,
          L,
          T,
          P,
          V,
          B,
          O,
          Cn
        );
    }
    Q != null && T ? Bn(Q, g && g.ref, P, y || g, !y) : Q == null && g && g.ref != null && Bn(g.ref, null, P, g, !0);
  }, R = (g, y, $, L) => {
    if (g == null)
      s(
        y.el = l(y.children),
        $,
        L
      );
    else {
      const T = y.el = g.el;
      y.children !== g.children && a(T, y.children);
    }
  }, U = (g, y, $, L) => {
    g == null ? s(
      y.el = c(y.children || ""),
      $,
      L
    ) : y.el = g.el;
  }, D = (g, y, $, L) => {
    [g.el, g.anchor] = z(
      g.children,
      y,
      $,
      L,
      g.el,
      g.anchor
    );
  }, E = ({ el: g, anchor: y }, $, L) => {
    let T;
    for (; g && g !== y; )
      T = h(g), s(g, $, L), g = T;
    s(y, $, L);
  }, M = ({ el: g, anchor: y }) => {
    let $;
    for (; g && g !== y; )
      $ = h(g), r(g), g = $;
    r(y);
  }, ee = (g, y, $, L, T, P, V, B, O) => {
    if (y.type === "svg" ? V = "svg" : y.type === "math" && (V = "mathml"), g == null)
      te(
        y,
        $,
        L,
        T,
        P,
        V,
        B,
        O
      );
    else {
      const I = g.el && g.el._isVueCE ? g.el : null;
      try {
        I && I._beginPatch(), C(
          g,
          y,
          T,
          P,
          V,
          B,
          O
        );
      } finally {
        I && I._endPatch();
      }
    }
  }, te = (g, y, $, L, T, P, V, B) => {
    let O, I;
    const { props: Q, shapeFlag: W, transition: Y, dirs: ne } = g;
    if (O = g.el = o(
      g.type,
      P,
      Q && Q.is,
      Q
    ), W & 8 ? u(O, g.children) : W & 16 && re(
      g.children,
      O,
      null,
      L,
      T,
      Rr(g, P),
      V,
      B
    ), ne && Kt(g, null, L, "created"), X(O, g, g.scopeId, V, L), Q) {
      for (const Ae in Q)
        Ae !== "value" && !Fn(Ae) && i(O, Ae, null, Q[Ae], P, L);
      "value" in Q && i(O, "value", null, Q.value, P), (I = Q.onVnodeBeforeMount) && at(I, L, g);
    }
    ne && Kt(g, null, L, "beforeMount");
    const oe = Rd(T, Y);
    oe && Y.beforeEnter(O), s(O, y, $), ((I = Q && Q.onVnodeMounted) || oe || ne) && Re(() => {
      try {
        I && at(I, L, g), oe && Y.enter(O), ne && Kt(g, null, L, "mounted");
      } finally {
      }
    }, T);
  }, X = (g, y, $, L, T) => {
    if ($ && x(g, $), L)
      for (let P = 0; P < L.length; P++)
        x(g, L[P]);
    if (T) {
      let P = T.subTree;
      if (y === P || Na(P.type) && (P.ssContent === y || P.ssFallback === y)) {
        const V = T.vnode;
        X(
          g,
          V,
          V.scopeId,
          V.slotScopeIds,
          T.parent
        );
      }
    }
  }, re = (g, y, $, L, T, P, V, B, O = 0) => {
    for (let I = O; I < g.length; I++) {
      const Q = g[I] = B ? kt(g[I]) : dt(g[I]);
      k(
        null,
        Q,
        y,
        $,
        L,
        T,
        P,
        V,
        B
      );
    }
  }, C = (g, y, $, L, T, P, V) => {
    const B = y.el = g.el;
    let { patchFlag: O, dynamicChildren: I, dirs: Q } = y;
    O |= g.patchFlag & 16;
    const W = g.props || ve, Y = y.props || ve;
    let ne;
    if ($ && qt($, !1), (ne = Y.onVnodeBeforeUpdate) && at(ne, $, y, g), Q && Kt(y, g, $, "beforeUpdate"), $ && qt($, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    I && (!g.dynamicChildren || g.dynamicChildren.length !== I.length) && (O = 0, V = !1, I = null), (W.innerHTML && Y.innerHTML == null || W.textContent && Y.textContent == null) && u(B, ""), I ? p(
      g.dynamicChildren,
      I,
      B,
      $,
      L,
      Rr(y, T),
      P
    ) : V || Xe(
      g,
      y,
      B,
      null,
      $,
      L,
      Rr(y, T),
      P,
      !1
    ), O > 0) {
      if (O & 16)
        m(B, W, Y, $, T);
      else if (O & 2 && W.class !== Y.class && i(B, "class", null, Y.class, T), O & 4 && i(B, "style", W.style, Y.style, T), O & 8) {
        const oe = y.dynamicProps;
        for (let Ae = 0; Ae < oe.length; Ae++) {
          const ue = oe[Ae], be = W[ue], we = Y[ue];
          (we !== be || ue === "value") && i(B, ue, be, we, T, $);
        }
      }
      O & 1 && g.children !== y.children && u(B, y.children);
    } else !V && I == null && m(B, W, Y, $, T);
    ((ne = Y.onVnodeUpdated) || Q) && Re(() => {
      ne && at(ne, $, y, g), Q && Kt(y, g, $, "updated");
    }, L);
  }, p = (g, y, $, L, T, P, V) => {
    for (let B = 0; B < y.length; B++) {
      const O = g[B], I = y[B], Q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === J || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xt(O, I) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? f(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          $
        )
      );
      k(
        O,
        I,
        Q,
        null,
        L,
        T,
        P,
        V,
        !0
      );
    }
  }, m = (g, y, $, L, T) => {
    if (y !== $) {
      if (y !== ve)
        for (const P in y)
          !Fn(P) && !(P in $) && i(
            g,
            P,
            y[P],
            null,
            T,
            L
          );
      for (const P in $) {
        if (Fn(P)) continue;
        const V = $[P], B = y[P];
        V !== B && P !== "value" && i(g, P, B, V, T, L);
      }
      "value" in $ && i(g, "value", y.value, $.value, T);
    }
  }, v = (g, y, $, L, T, P, V, B, O) => {
    const I = y.el = g ? g.el : l(""), Q = y.anchor = g ? g.anchor : l("");
    let { patchFlag: W, dynamicChildren: Y, slotScopeIds: ne } = y;
    ne && (B = B ? B.concat(ne) : ne), g == null ? (s(I, $, L), s(Q, $, L), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      $,
      Q,
      T,
      P,
      V,
      B,
      O
    )) : W > 0 && W & 64 && Y && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === Y.length ? (p(
      g.dynamicChildren,
      Y,
      $,
      T,
      P,
      V,
      B
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || T && y === T.subTree) && Ma(
      g,
      y,
      !0
      /* shallow */
    )) : Xe(
      g,
      y,
      $,
      Q,
      T,
      P,
      V,
      B,
      O
    );
  }, N = (g, y, $, L, T, P, V, B, O) => {
    y.slotScopeIds = B, g == null ? y.shapeFlag & 512 ? T.ctx.activate(
      y,
      $,
      L,
      V,
      O
    ) : ie(
      y,
      $,
      L,
      T,
      P,
      V,
      O
    ) : le(g, y, O);
  }, ie = (g, y, $, L, T, P, V) => {
    const B = g.component = Ud(
      g,
      L,
      T
    );
    if (Ei(g) && (B.ctx.renderer = Cn), Hd(B, !1, V), B.asyncDep) {
      if (T && T.registerDep(B, Pe, V), !g.el) {
        const O = B.subTree = _e(Ie);
        U(null, O, y, $), g.placeholder = O.el;
      }
    } else
      Pe(
        B,
        g,
        y,
        $,
        T,
        P,
        V
      );
  }, le = (g, y, $) => {
    const L = y.component = g.component;
    if (_d(g, y, $))
      if (L.asyncDep && !L.asyncResolved) {
        y.el = g.el, rt(L, y, $);
        return;
      } else
        L.next = y, L.update();
    else
      y.el = g.el, L.vnode = y;
  }, Pe = (g, y, $, L, T, P, V) => {
    const B = () => {
      if (g.isMounted) {
        let { next: W, bu: Y, u: ne, parent: oe, vnode: Ae } = g;
        {
          const ot = Ta(g);
          if (ot) {
            W && (W.el = Ae.el, rt(g, W, V)), ot.asyncDep.then(() => {
              Re(() => {
                g.isUnmounted || I();
              }, T);
            });
            return;
          }
        }
        let ue = W, be;
        qt(g, !1), W ? (W.el = Ae.el, rt(g, W, V)) : W = Ae, Y && Cs(Y), (be = W.props && W.props.onVnodeBeforeUpdate) && at(be, oe, W, Ae), qt(g, !0);
        const we = zo(g), it = g.subTree;
        g.subTree = we, k(
          it,
          we,
          // parent may have changed if it's in a teleport
          f(it.el),
          // anchor may have changed if it's in a fragment
          xs(it),
          g,
          T,
          P
        ), W.el = we.el, ue === null && $d(g, we.el), ne && Re(ne, T), (be = W.props && W.props.onVnodeUpdated) && Re(
          () => at(be, oe, W, Ae),
          T
        );
      } else {
        let W;
        const { el: Y, props: ne } = y, { bm: oe, m: Ae, parent: ue, root: be, type: we } = g, it = Vn(y);
        qt(g, !1), oe && Cs(oe), !it && (W = ne && ne.onVnodeBeforeMount) && at(W, ue, y), qt(g, !0);
        {
          be.ce && be.ce._hasShadowRoot() && be.ce._injectChildStyle(
            we,
            g.parent ? g.parent.type : void 0
          );
          const ot = g.subTree = zo(g);
          k(
            null,
            ot,
            $,
            L,
            g,
            T,
            P
          ), y.el = ot.el;
        }
        if (Ae && Re(Ae, T), !it && (W = ne && ne.onVnodeMounted)) {
          const ot = y;
          Re(
            () => at(W, ue, ot),
            T
          );
        }
        (y.shapeFlag & 256 || ue && Vn(ue.vnode) && ue.vnode.shapeFlag & 256) && g.a && Re(g.a, T), g.isMounted = !0, y = $ = L = null;
      }
    };
    g.scope.on();
    const O = g.effect = new Gl(B);
    g.scope.off();
    const I = g.update = O.run.bind(O), Q = g.job = O.runIfDirty.bind(O);
    Q.i = g, Q.id = g.uid, O.scheduler = () => Ci(Q), qt(g, !0), I();
  }, rt = (g, y, $) => {
    y.component = g;
    const L = g.vnode.props;
    g.vnode = y, g.next = null, Cd(g, y.props, L, $), Id(g, y.children, $), Ft(), bo(g), jt();
  }, Xe = (g, y, $, L, T, P, V, B, O = !1) => {
    const I = g && g.children, Q = g ? g.shapeFlag : 0, W = y.children, { patchFlag: Y, shapeFlag: ne } = y;
    if (Y > 0) {
      if (Y & 128) {
        Gt(
          I,
          W,
          $,
          L,
          T,
          P,
          V,
          B,
          O
        );
        return;
      } else if (Y & 256) {
        hn(
          I,
          W,
          $,
          L,
          T,
          P,
          V,
          B,
          O
        );
        return;
      }
    }
    ne & 8 ? (Q & 16 && Et(I, T, P), W !== I && u($, W)) : Q & 16 ? ne & 16 ? Gt(
      I,
      W,
      $,
      L,
      T,
      P,
      V,
      B,
      O
    ) : Et(I, T, P, !0) : (Q & 8 && u($, ""), ne & 16 && re(
      W,
      $,
      L,
      T,
      P,
      V,
      B,
      O
    ));
  }, hn = (g, y, $, L, T, P, V, B, O) => {
    g = g || en, y = y || en;
    const I = g.length, Q = y.length, W = Math.min(I, Q);
    let Y;
    for (Y = 0; Y < W; Y++) {
      const ne = y[Y] = O ? kt(y[Y]) : dt(y[Y]);
      k(
        g[Y],
        ne,
        $,
        null,
        T,
        P,
        V,
        B,
        O
      );
    }
    I > Q ? Et(
      g,
      T,
      P,
      !0,
      !1,
      W
    ) : re(
      y,
      $,
      L,
      T,
      P,
      V,
      B,
      O,
      W
    );
  }, Gt = (g, y, $, L, T, P, V, B, O) => {
    let I = 0;
    const Q = y.length;
    let W = g.length - 1, Y = Q - 1;
    for (; I <= W && I <= Y; ) {
      const ne = g[I], oe = y[I] = O ? kt(y[I]) : dt(y[I]);
      if (Xt(ne, oe))
        k(
          ne,
          oe,
          $,
          null,
          T,
          P,
          V,
          B,
          O
        );
      else
        break;
      I++;
    }
    for (; I <= W && I <= Y; ) {
      const ne = g[W], oe = y[Y] = O ? kt(y[Y]) : dt(y[Y]);
      if (Xt(ne, oe))
        k(
          ne,
          oe,
          $,
          null,
          T,
          P,
          V,
          B,
          O
        );
      else
        break;
      W--, Y--;
    }
    if (I > W) {
      if (I <= Y) {
        const ne = Y + 1, oe = ne < Q ? y[ne].el : L;
        for (; I <= Y; )
          k(
            null,
            y[I] = O ? kt(y[I]) : dt(y[I]),
            $,
            oe,
            T,
            P,
            V,
            B,
            O
          ), I++;
      }
    } else if (I > Y)
      for (; I <= W; )
        K(g[I], T, P, !0), I++;
    else {
      const ne = I, oe = I, Ae = /* @__PURE__ */ new Map();
      for (I = oe; I <= Y; I++) {
        const De = y[I] = O ? kt(y[I]) : dt(y[I]);
        De.key != null && Ae.set(De.key, I);
      }
      let ue, be = 0;
      const we = Y - oe + 1;
      let it = !1, ot = 0;
      const En = new Array(we);
      for (I = 0; I < we; I++) En[I] = 0;
      for (I = ne; I <= W; I++) {
        const De = g[I];
        if (be >= we) {
          K(De, T, P, !0);
          continue;
        }
        let lt;
        if (De.key != null)
          lt = Ae.get(De.key);
        else
          for (ue = oe; ue <= Y; ue++)
            if (En[ue - oe] === 0 && Xt(De, y[ue])) {
              lt = ue;
              break;
            }
        lt === void 0 ? K(De, T, P, !0) : (En[lt - oe] = I + 1, lt >= ot ? ot = lt : it = !0, k(
          De,
          y[lt],
          $,
          null,
          T,
          P,
          V,
          B,
          O
        ), be++);
      }
      const Ao = it ? Ld(En) : en;
      for (ue = Ao.length - 1, I = we - 1; I >= 0; I--) {
        const De = oe + I, lt = y[De], fo = y[De + 1], po = De + 1 < Q ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          fo.el || Ia(fo)
        ) : L;
        En[I] === 0 ? k(
          null,
          lt,
          $,
          po,
          T,
          P,
          V,
          B,
          O
        ) : it && (ue < 0 || I !== Ao[ue] ? j(lt, $, po, 2) : ue--);
      }
    }
  }, j = (g, y, $, L, T = null) => {
    const { el: P, type: V, transition: B, children: O, shapeFlag: I } = g;
    if (I & 6) {
      j(g.component.subTree, y, $, L);
      return;
    }
    if (I & 128) {
      g.suspense.move(y, $, L);
      return;
    }
    if (I & 64) {
      V.move(g, y, $, Cn);
      return;
    }
    if (V === J) {
      s(P, y, $);
      for (let W = 0; W < O.length; W++)
        j(O[W], y, $, L);
      s(g.anchor, y, $);
      return;
    }
    if (V === Lr) {
      E(g, y, $);
      return;
    }
    if (L !== 2 && I & 1 && B)
      if (L === 0)
        B.persisted && !P[He] ? s(P, y, $) : (B.beforeEnter(P), s(P, y, $), Re(() => B.enter(P), T));
      else {
        const { leave: W, delayLeave: Y, afterLeave: ne } = B, oe = () => {
          g.ctx.isUnmounted ? r(P) : s(P, y, $);
        }, Ae = () => {
          const ue = P._isLeaving || !!P[He];
          P._isLeaving && P[He](
            !0
            /* cancelled */
          ), B.persisted && !ue ? oe() : W(P, () => {
            oe(), ne && ne();
          });
        };
        Y ? Y(P, oe, Ae) : Ae();
      }
    else
      s(P, y, $);
  }, K = (g, y, $, L = !1, T = !1) => {
    const {
      type: P,
      props: V,
      ref: B,
      children: O,
      dynamicChildren: I,
      shapeFlag: Q,
      patchFlag: W,
      dirs: Y,
      cacheIndex: ne,
      memo: oe
    } = g;
    if ((W === -2 || I && I.hasOnce) && (T = !1), B != null && (Ft(), Bn(B, null, $, g, !0), jt()), ne != null && (!g.ctx || g.ctx === y) && (y.renderCache[ne] = void 0), Q & 256) {
      y.ctx.deactivate(g);
      return;
    }
    const Ae = Q & 1 && Y, ue = !Vn(g);
    let be;
    if (ue && (be = V && V.onVnodeBeforeUnmount) && at(be, y, g), Q & 6)
      gs(g.component, $, L);
    else {
      if (Q & 128) {
        g.suspense.unmount($, L);
        return;
      }
      Ae && Kt(g, null, y, "beforeUnmount"), Q & 64 ? g.type.remove(
        g,
        y,
        $,
        Cn,
        L
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (P !== J || W > 0 && W & 64) ? Et(
        I,
        y,
        $,
        !1,
        !0
      ) : (P === J && W & 384 || !T && Q & 16) && Et(O, y, $), L && G(g);
    }
    const we = oe != null && ne == null;
    (ue && (be = V && V.onVnodeUnmounted) || Ae || we) && Re(() => {
      be && at(be, y, g), Ae && Kt(g, null, y, "unmounted"), we && (g.el = null);
    }, $);
  }, G = (g) => {
    const { type: y, el: $, anchor: L, transition: T } = g;
    if (y === J) {
      ge($, L);
      return;
    }
    if (y === Lr) {
      M(g), T && !T.persisted && T.afterLeave && T.afterLeave();
      return;
    }
    const P = () => {
      r($), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (g.shapeFlag & 1 && T && !T.persisted) {
      const { leave: V, delayLeave: B } = T, O = () => V($, P);
      B ? B(g.el, P, O) : O();
    } else
      P();
  }, ge = (g, y) => {
    let $;
    for (; g !== y; )
      $ = h(g), r(g), g = $;
    r(y);
  }, gs = (g, y, $) => {
    const { bum: L, scope: T, job: P, subTree: V, um: B, m: O, a: I } = g;
    So(O), So(I), L && Cs(L), T.stop(), P ? (P.flags |= 8, K(V, g, y, $)) : g.vnode.el && V && (V.transition = g.vnode.transition, K(V, g, y, $)), B && Re(B, y), Re(() => {
      g.isUnmounted = !0;
    }, y);
  }, Et = (g, y, $, L = !1, T = !1, P = 0) => {
    for (let V = P; V < g.length; V++)
      K(g[V], y, $, L, T);
  }, xs = (g) => {
    if (g.shapeFlag & 6)
      return xs(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const y = h(g.anchor || g.el), $ = y && y[ud];
    return $ ? h($) : y;
  };
  let Sr = !1;
  const uo = (g, y, $) => {
    let L;
    g == null ? y._vnode && (K(y._vnode, null, null, !0), L = y._vnode.component) : k(
      y._vnode || null,
      g,
      y,
      null,
      null,
      null,
      $
    ), y._vnode = g, Sr || (Sr = !0, bo(L), ua(), Sr = !1);
  }, Cn = {
    p: k,
    um: K,
    m: j,
    r: G,
    mt: ie,
    mc: re,
    pc: Xe,
    pbc: p,
    n: xs,
    o: e
  };
  return {
    render: uo,
    hydrate: void 0,
    createApp: vd(uo)
  };
}
function Rr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function qt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ma(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (se(s) && se(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = kt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Ma(o, l)), l.type === hr && (l.patchFlag === -1 && (l = r[i] = kt(l)), l.el = o.el), l.type === Ie && !l.el && (l.el = o.el);
    }
}
function Ld(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < a ? i = l + 1 : o = l;
      a < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Ta(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ta(t);
}
function So(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ia(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ia(t.subTree) : null;
}
const Na = (e) => e.__isSuspense;
function Dd(e, t) {
  t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : id(e);
}
const J = /* @__PURE__ */ Symbol.for("v-fgt"), hr = /* @__PURE__ */ Symbol.for("v-txt"), Ie = /* @__PURE__ */ Symbol.for("v-cmt"), Lr = /* @__PURE__ */ Symbol.for("v-stc"), on = [];
let Fe = null;
function b(e = !1) {
  on.push(Fe = e ? null : []);
}
function Pa() {
  on.pop(), Fe = on[on.length - 1] || null;
}
let Xn = 1;
function Bs(e, t = !1) {
  Xn += e, e < 0 && Fe && t && (Fe.hasOnce = !0);
}
function Ra(e) {
  return e.dynamicChildren = Xn > 0 ? Fe || en : null, Pa(), Xn > 0 && Fe && Fe.push(e), e;
}
function w(e, t, n, s, r, i) {
  return Ra(
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
function We(e, t, n, s, r) {
  return Ra(
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
function Vs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const La = ({ key: e }) => e ?? null, Es = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ye(e) || /* @__PURE__ */ Ne(e) || de(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null);
function d(e, t = null, n = null, s = 0, r = null, i = e === J ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && La(t),
    ref: t && Es(t),
    scopeId: Aa,
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
  return l ? (Us(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= ye(n) ? 8 : 16), Xn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Fe.push(c), c;
}
const _e = Fd;
function Fd(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === md) && (e = Ie), Vs(e)) {
    const l = Bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Us(l, n), Xn > 0 && !i && Fe && (l.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = l : Fe.push(l)), l.patchFlag = -2, l;
  }
  if (qd(e) && (e = e.__vccOpts), t) {
    t = jd(t);
    let { class: l, style: c } = t;
    l && !ye(l) && (t.class = Z(l)), he(c) && (/* @__PURE__ */ Si(c) && !se(c) && (c = Oe({}, c)), t.style = ar(c));
  }
  const o = ye(e) ? 1 : Na(e) ? 128 : fr(e) ? 64 : he(e) ? 4 : de(e) ? 2 : 0;
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
function jd(e) {
  return e ? /* @__PURE__ */ Si(e) || _a(e) ? Oe({}, e) : e : null;
}
function Bt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e, a = t ? Od(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && La(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? se(i) ? i.concat(Es(t)) : [i, Es(t)] : Es(t)
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
    transition: c,
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
  return c && s && Zn(
    u,
    c.clone(u)
  ), u;
}
function Ee(e = " ", t = 0) {
  return _e(hr, null, e, t);
}
function F(e = "", t = !1) {
  return t ? (b(), We(Ie, null, e)) : _e(Ie, null, e);
}
function dt(e) {
  return e == null || typeof e == "boolean" ? _e(Ie) : se(e) ? _e(
    J,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vs(e) ? kt(e) : _e(hr, null, String(e));
}
function kt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bt(e);
}
function Us(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (se(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Us(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !_a(t) ? t._ctx = Ge : r === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (s & 65) {
      Us(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ge }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Ee(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Od(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Z([t.class, s.class]));
      else if (r === "style")
        t.style = ar([t.style, s.style]);
      else if (sr(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(se(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !rr(r) && (t[r] = o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function at(e, t, n, s = null) {
  tt(e, t, 7, [
    n,
    s
  ]);
}
const Bd = ba();
let Vd = 0;
function Ud(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Bd, i = {
    uid: Vd++,
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
    scope: new Eu(
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
    propsOptions: Ed(s, r),
    emitsOptions: kd(s, r),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = bd.bind(null, i), e.ce && e.ce(i), i;
}
let Vt = null;
const Da = () => Vt || Ge;
let Hs, Qn;
{
  const e = lr(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Hs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Vt = n
  ), Qn = t(
    "__VUE_SSR_SETTERS__",
    (n) => es = n
  );
}
const Ni = (e) => {
  const t = Vt;
  return Hs(e), e.scope.on(), () => {
    e.scope.off(), Hs(t);
  };
}, Co = () => {
  Vt && Vt.scope.off(), Hs(null);
};
function Fa(e) {
  return e.vnode.shapeFlag & 4;
}
let es = !1;
function Hd(e, t = !1, n = !1) {
  t && Qn(t);
  const { props: s, children: r } = e.vnode, i = Fa(e);
  Sd(e, s, i, t), Td(e, r, n || t);
  const o = i ? Wd(e, t) : void 0;
  return t && Qn(!1), o;
}
function Wd(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, gd);
  const { setup: s } = n;
  if (s) {
    Ft();
    const r = e.setupContext = s.length > 1 ? Kd(e) : null, i = Ni(e), o = us(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Fl(o);
    if (jt(), i(), (l || e.sp) && !Vn(e) && pd(e), l) {
      if (o.then(Co, Co), t)
        return o.then((c) => {
          Qn(!0);
          try {
            Eo(e, c, t);
          } finally {
            Qn(!1);
          }
        }).catch((c) => {
          dr(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Eo(e, o);
  } else
    ja(e);
}
function Eo(e, t, n) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = oa(t)), ja(e);
}
function ja(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || sn);
}
const Gd = {
  get(e, t) {
    return Me(e, "get", ""), e[t];
  }
};
function Kd(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Gd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function mr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(oa(Yu(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Un)
        return Un[n](e);
    },
    has(t, n) {
      return n in t || n in Un;
    }
  })) : e.proxy;
}
function qd(e) {
  return de(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ ed(e, t, es);
function Yd(e, t, n) {
  try {
    Bs(-1);
    const s = arguments.length;
    return s === 2 ? he(t) && !se(t) ? Vs(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Vs(n) && (n = [n]), _e(e, t, n));
  } finally {
    Bs(1);
  }
}
const Jd = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ai;
const Mo = typeof window < "u" && window.trustedTypes;
if (Mo)
  try {
    ai = /* @__PURE__ */ Mo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Oa = ai ? (e) => ai.createHTML(e) : (e) => e, Zd = "http://www.w3.org/2000/svg", Xd = "http://www.w3.org/1998/Math/MathML", bt = typeof document < "u" ? document : null, To = bt && /* @__PURE__ */ bt.createElement("template"), Qd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? bt.createElementNS(Zd, e) : t === "mathml" ? bt.createElementNS(Xd, e) : n ? bt.createElement(e, { is: n }) : bt.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => bt.createTextNode(e),
  createComment: (e) => bt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => bt.querySelector(e),
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
      To.innerHTML = Oa(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = To.content;
      if (s === "svg" || s === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
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
}, Mt = "transition", In = "animation", ts = /* @__PURE__ */ Symbol("_vtc"), Ba = {
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
}, eA = /* @__PURE__ */ Oe(
  {},
  pa,
  Ba
), tA = (e) => (e.displayName = "Transition", e.props = eA, e), nA = /* @__PURE__ */ tA(
  (e, { slots: t }) => Yd(fd, sA(e), t)
), Yt = (e, t = []) => {
  se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Io = (e) => e ? se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function sA(e) {
  const t = {};
  for (const v in e)
    v in Ba || (t[v] = e[v]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = i,
    appearActiveClass: a = o,
    appearToClass: u = l,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: x = `${n}-leave-to`
  } = e, z = rA(r), k = z && z[0], R = z && z[1], {
    onBeforeEnter: U,
    onEnter: D,
    onEnterCancelled: E,
    onLeave: M,
    onLeaveCancelled: ee,
    onBeforeAppear: te = U,
    onAppear: X = D,
    onAppearCancelled: re = E
  } = t, C = (v, N, ie, le) => {
    v._enterCancelled = le, Jt(v, N ? u : l), Jt(v, N ? a : o), ie && ie();
  }, p = (v, N) => {
    v._isLeaving = !1, Jt(v, f), Jt(v, x), Jt(v, h), N && N();
  }, m = (v) => (N, ie) => {
    const le = v ? X : D, Pe = () => C(N, v, ie);
    Yt(le, [N, Pe]), No(() => {
      Jt(N, v ? c : i), yt(N, v ? u : l), Io(le) || Po(N, s, k, Pe);
    });
  };
  return Oe(t, {
    onBeforeEnter(v) {
      Yt(U, [v]), yt(v, i), yt(v, o);
    },
    onBeforeAppear(v) {
      Yt(te, [v]), yt(v, c), yt(v, a);
    },
    onEnter: m(!1),
    onAppear: m(!0),
    onLeave(v, N) {
      v._isLeaving = !0;
      const ie = () => p(v, N);
      yt(v, f), v._enterCancelled ? (yt(v, h), Do(v)) : (Do(v), yt(v, h)), No(() => {
        v._isLeaving && (Jt(v, f), yt(v, x), Io(M) || Po(v, s, R, ie));
      }), Yt(M, [v, ie]);
    },
    onEnterCancelled(v) {
      C(v, !1, void 0, !0), Yt(E, [v]);
    },
    onAppearCancelled(v) {
      C(v, !0, void 0, !0), Yt(re, [v]);
    },
    onLeaveCancelled(v) {
      p(v), Yt(ee, [v]);
    }
  });
}
function rA(e) {
  if (e == null)
    return null;
  if (he(e))
    return [Dr(e.enter), Dr(e.leave)];
  {
    const t = Dr(e);
    return [t, t];
  }
}
function Dr(e) {
  return vu(e);
}
function yt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ts] || (e[ts] = /* @__PURE__ */ new Set())).add(t);
}
function Jt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[ts];
  n && (n.delete(t), n.size || (e[ts] = void 0));
}
function No(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let iA = 0;
function Po(e, t, n, s) {
  const r = e._endId = ++iA, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: c } = oA(e, t);
  if (!o)
    return s();
  const a = o + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(a, h), i();
  }, h = (x) => {
    x.target === e && ++u >= c && f();
  };
  setTimeout(() => {
    u < c && f();
  }, l + 1), e.addEventListener(a, h);
}
function oA(e, t) {
  const n = window.getComputedStyle(e), s = (z) => (n[z] || "").split(", "), r = s(`${Mt}Delay`), i = s(`${Mt}Duration`), o = Ro(r, i), l = s(`${In}Delay`), c = s(`${In}Duration`), a = Ro(l, c);
  let u = null, f = 0, h = 0;
  t === Mt ? o > 0 && (u = Mt, f = o, h = i.length) : t === In ? a > 0 && (u = In, f = a, h = c.length) : (f = Math.max(o, a), u = f > 0 ? o > a ? Mt : In : null, h = u ? u === Mt ? i.length : c.length : 0);
  const x = u === Mt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Mt}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: h,
    hasTransform: x
  };
}
function Ro(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Lo(n) + Lo(e[s])));
}
function Lo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Do(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function lA(e, t, n) {
  const s = e[ts];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Fo = /* @__PURE__ */ Symbol("_vod"), aA = /* @__PURE__ */ Symbol("_vsh"), cA = /* @__PURE__ */ Symbol(""), uA = /(?:^|;)\s*display\s*:/;
function dA(e, t, n) {
  const s = e.style, r = ye(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ye(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Ln(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Ln(s, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? fA(
        e,
        o,
        !ye(t) && t ? t[o] : void 0,
        l
      ) || Ln(s, o, l) : Ln(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[cA];
      o && (n += ";" + o), s.cssText = n, i = uA.test(n);
    }
  } else t && e.removeAttribute("style");
  Fo in e && (e[Fo] = i ? s.display : "", e[aA] && (s.display = "none"));
}
const ks = /\s*!important$/;
function Ln(e, t, n) {
  if (se(n))
    n.forEach((s) => Ln(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    ks.test(n) ? e.setProperty(t, n.replace(ks, ""), "important") : e.setProperty(t, n);
  else {
    const s = AA(e, t);
    ks.test(n) ? e.setProperty(
      An(s),
      n.replace(ks, ""),
      "important"
    ) : e[s] = n;
  }
}
const jo = ["Webkit", "Moz", "ms"], Fr = {};
function AA(e, t) {
  const n = Fr[t];
  if (n)
    return n;
  let s = Qe(t);
  if (s !== "filter" && s in e)
    return Fr[t] = s;
  s = Bl(s);
  for (let r = 0; r < jo.length; r++) {
    const i = jo[r] + s;
    if (i in e)
      return Fr[t] = i;
  }
  return t;
}
function fA(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ye(s) && n === s;
}
const Oo = "http://www.w3.org/1999/xlink";
function Bo(e, t, n, s, r, i = _u(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Oo, t.slice(6, t.length)) : e.setAttributeNS(Oo, t, n) : n == null || i && !Ul(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ht(n) ? String(n) : n
  );
}
function Vo(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Oa(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Ul(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
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
function pA(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Uo = /* @__PURE__ */ Symbol("_vei");
function hA(e, t, n, s, r = null) {
  const i = e[Uo] || (e[Uo] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, c] = xA(t);
    if (s) {
      const a = i[t] = bA(
        s,
        r
      );
      Qt(e, l, a, c);
    } else o && (pA(e, l, o, c), i[t] = void 0);
  }
}
const mA = /(Once|Passive|Capture)$/, gA = /^on:?(?:Once|Passive|Capture)$/;
function xA(e) {
  let t, n;
  for (; (n = e.match(mA)) && !gA.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : An(e.slice(2)), t];
}
let jr = 0;
const vA = /* @__PURE__ */ Promise.resolve(), yA = () => jr || (vA.then(() => jr = 0), jr = Date.now());
function bA(e, t) {
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
      for (let c = 0; c < o.length && !s._stopped; c++) {
        const a = o[c];
        a && tt(
          a,
          t,
          5,
          l
        );
      }
    } else
      tt(
        r,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = yA(), n;
}
const Ho = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, kA = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? lA(e, s, o) : t === "style" ? dA(e, n, s) : sr(t) ? rr(t) || hA(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wA(e, t, s, o)) ? (Vo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bo(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (zA(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ye(s))) ? Vo(e, Qe(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Bo(e, t, s, o));
};
function wA(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ho(t) && de(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ho(t) && ye(n) ? !1 : t in e;
}
function zA(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Qe(t);
  return Array.isArray(n) ? n.some((r) => Qe(r) === s) : Object.keys(n).some((r) => Qe(r) === s);
}
const Ws = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return se(t) ? (n) => Cs(t, n) : t;
};
function _A(e) {
  e.target.composing = !0;
}
function Wo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const tn = /* @__PURE__ */ Symbol("_assign"), ws = /* @__PURE__ */ Symbol("_initialValue");
function Or(e, t, n) {
  return t && (e = e.trim()), n && (e = or(e)), e;
}
const Nt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[ws] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[ws] = e.defaultValue.replace(/\r\n?/g, `
`))), e[tn] = Ws(r);
    const i = s || r.props && r.props.type === "number";
    Qt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[tn](Or(e.value, n, i));
    }), (n || i) && Qt(e, "change", () => {
      e.value = Or(e.value, n, i);
    }), t || (Qt(e, "compositionstart", _A), Qt(e, "compositionend", Wo), Qt(e, "change", Wo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const r = t ?? "", i = e[ws];
    delete e[ws], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[tn](Or(e.value, n, s)) : e.value = r;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[tn] = Ws(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? or(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const a = e.getRootNode();
    (a instanceof Document || a instanceof ShadowRoot) && a.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c);
  }
}, Va = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, Qt(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? or(Gs(c)) : Gs(c)
      ), i = e.multiple, o = i ? ln(e._modelValue) ? new Set(r) : r : r[0], l = e._pendingValue = [
        i,
        i ? se(o) ? r.slice() : r : o
      ];
      try {
        e[tn](o);
      } finally {
        aa(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[tn] = Ws(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Go(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[tn] = Ws(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !$A(t, n[1], n[0])) && Go(e, t);
  }
};
function $A(e, t, n) {
  if (!n || se(e)) return Dt(e, t);
  if (ln(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Go(e, t) {
  const n = e.multiple, s = se(t);
  if (!(n && !s && !ln(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r], l = Gs(o);
      if (n)
        if (s) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((a) => String(a) === String(l)) : o.selected = Cu(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Dt(Gs(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Gs(e) {
  return "_value" in e ? e._value : e.value;
}
const SA = ["ctrl", "shift", "alt", "meta"], CA = {
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
  exact: (e, t) => SA.some((n) => e[`${n}Key`] && !t.includes(n))
}, EA = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = CA[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, MA = /* @__PURE__ */ Oe({ patchProp: kA }, Qd);
let Ko;
function TA() {
  return Ko || (Ko = Nd(MA));
}
const IA = ((...e) => {
  const t = TA().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = PA(s);
    if (!r) return;
    const i = t._component;
    !de(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, NA(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function NA(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function PA(e) {
  return ye(e) ? document.querySelector(e) : e;
}
const RA = "zhonglou", LA = "钟楼", DA = "1.6.0", FA = "S", jA = 10, OA = "【副本进行中：钟楼】", BA = [], VA = { briefingName: "钟楼" }, UA = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, HA = { type: "nights", template: "剩余{n}夜" }, WA = "至第四日日出", GA = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], KA = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", qA = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], YA = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], JA = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], ZA = [{ id: "M1", q: "第一夜的值班签会抽中主播吗", yes: "会", no: "不会", p: 0.1, by: "d1", judge: "第一日日落的抽签结果是{{user}}本人当夜值班" }, { id: "M2", q: "塔里会出人命吗", yes: "会", no: "不会", p: 0.5, judge: "有人死于他人之手，系统宣布钟楼停摆、开启审判" }, { id: "M3", q: "主播会亲手摇响大钟吗", yes: "会", no: "不会", p: 0.35, judge: "{{user}}本人在4F机房摇动曲柄，让大钟鸣响" }], XA = [{ title: "游玩说明", md: `## 副本概况

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
- 1F文具柜：一沓纸、两支铅笔，是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], QA = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], ef = {
  id: RA,
  name: LA,
  version: DA,
  level: FA,
  players: jA,
  token: OA,
  legacyKeys: BA,
  detect: VA,
  time: UA,
  remaining: HA,
  deadline: WA,
  roles: GA,
  rolesNote: KA,
  stateFields: qA,
  phases: YA,
  events: JA,
  markets: ZA,
  docs: XA,
  danmaku: QA
}, tf = "jingjie", nf = "境界游乐园", sf = "1.2.0", rf = "A", of = "【副本进行中：境界游乐园】", lf = [], af = { briefingName: "境界游乐园" }, cf = { type: "none" }, uf = { type: "fromPanel" }, df = [], Af = [], ff = [{ id: "M1", q: "15:30演出时主播会回头吗", yes: "会", no: "不会", p: 0.3, judge: "15:30表演区演出期间，{{user}}本人回头了" }, { id: "M2", q: "主播会坐上摩天轮吗", yes: "会", no: "不会", p: 0.55, judge: "{{user}}本人乘坐了摩天轮" }, { id: "M3", q: "主播会走进镜宫吗", yes: "会", no: "不会", p: 0.45, judge: "{{user}}本人进入了镜宫" }], pf = [{ title: "游客须知", md: `## 《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], hf = {
  id: tf,
  name: nf,
  version: sf,
  level: rf,
  token: of,
  legacyKeys: lf,
  detect: af,
  time: cf,
  remaining: uf,
  phases: df,
  events: Af,
  markets: ff,
  docs: pf
}, mf = "kaoshi", gf = "考试", xf = "1.1.0", vf = "A", yf = "【副本进行中：考试】", bf = [], kf = { briefingName: "考试" }, wf = { type: "countdown", minutesPerRound: 3 }, zf = { type: "fromPanel" }, _f = "至考试结束", $f = [{ id: "main", name: "考试", cap: 100, next: null }], Sf = [], Cf = [], Ef = {
  id: mf,
  name: gf,
  version: xf,
  level: vf,
  token: yf,
  legacyKeys: bf,
  detect: kf,
  time: wf,
  remaining: zf,
  deadline: _f,
  phases: $f,
  events: Sf,
  docs: Cf
}, Mf = "xiyan", Tf = "喜宴", If = "1.2.0", Nf = "D", Pf = "【副本进行中：喜宴】", Rf = [], Lf = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, Df = { type: "countdown", minutesPerRound: 3 }, Ff = { type: "fromPanel" }, jf = "至天亮", Of = [{ id: "main", name: "喜宴", cap: 160, next: null }], Bf = [], Vf = [{ id: "M1", q: "主播会穿上喜服吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人穿上了喜服" }, { id: "M2", q: "这场婚礼的新人会是主播吗", yes: "是", no: "不是", p: 0.17, judge: "{{user}}被认定为这场婚礼的新郎或新娘", judgeNo: "{{user}}以外的某个人被认定为这场婚礼的新郎或新娘" }, { id: "M3", q: "天亮前会有人死吗", yes: "会", no: "不会", p: 0.4, judge: "有人死亡" }], Uf = [], Hf = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], Wf = {
  id: Mf,
  name: Tf,
  version: If,
  level: Nf,
  token: Pf,
  legacyKeys: Rf,
  detect: Lf,
  time: Df,
  remaining: Ff,
  deadline: jf,
  phases: Of,
  events: Bf,
  markets: Vf,
  docs: Uf,
  danmaku: Hf
}, Gf = "youxi", Kf = "游戏", qf = "1.2.0", Yf = "C", Jf = "【副本进行中：游戏】", Zf = [], Xf = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Qf = { type: "countdown", minutesPerRound: 8 }, ep = { type: "fromPanel" }, tp = "至结算", np = [{ id: "main", name: "游戏", cap: 90, next: null }], sp = [], rp = [{ id: "M1", q: "第一个出局的会是主播吗", yes: "是", no: "不是", p: 0.08, judge: "第一个被淘汰出局的人是{{user}}", judgeNo: "{{user}}以外的某个人成为第一个被淘汰出局的人" }, { id: "M2", q: "三场游戏能全部玩完吗", yes: "能", no: "不能", p: 0.55, judge: "第三场游戏结束" }, { id: "M3", q: "喊数抱团时主播会拉陌生人吗", yes: "会", no: "不会", p: 0.5, judge: "喊数抱团时，{{user}}主动拉了自己同伴以外的人一起抱团" }], ip = [], op = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], lp = {
  id: Gf,
  name: Kf,
  version: qf,
  level: Yf,
  token: Jf,
  legacyKeys: Zf,
  detect: Xf,
  time: Qf,
  remaining: ep,
  deadline: tp,
  phases: np,
  events: sp,
  markets: rp,
  docs: ip,
  danmaku: op
}, ap = "wuming", cp = "污名", up = "1.1.0", dp = "B", Ap = "4-8", fp = "【副本进行中：污名】", pp = ["污名"], hp = { briefingName: "污名" }, mp = { type: "countdown", minutesPerRound: 3 }, gp = { type: "countdown", template: "剩余{m}分钟" }, xp = "至收播", vp = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], yp = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], bp = [], kp = !0, wp = {
  id: ap,
  name: cp,
  version: up,
  level: dp,
  players: Ap,
  token: fp,
  legacyKeys: pp,
  detect: hp,
  time: mp,
  remaining: gp,
  deadline: xp,
  phases: vp,
  events: yp,
  docs: bp,
  disableLive: kp
}, zp = "dusongshu", _p = "杜松树", $p = "1.3.0", Sp = "A", Cp = 6, Ep = "【副本进行中：杜松树】", Mp = [], Tp = { briefingName: "杜松树" }, Ip = { type: "countdown", minutesPerRound: 30 }, Np = { type: "fromPanel" }, Pp = "至第四日日出", Rp = ["父亲", "继母", "玛琳", "男孩", "其余"], Lp = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", Dp = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], Fp = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], jp = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], Op = [{ id: "M1", q: "第一夜会有人死在苹果箱里吗", yes: "会", no: "不会", p: 0.5, by: "n1", judge: "有人在苹果箱里被箱盖压死或死在箱中" }, { id: "M2", q: "主播会吃下锅里的炖肉吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人吃了灶上铁锅里炖的肉" }, { id: "M3", q: "杜松树上的鸟会开口吗", yes: "会", no: "不会", p: 0.6, judge: "杜松树上那只红绿羽毛的鸟开口说话或唱歌" }], Bp = [{ title: "游玩说明", md: `## 副本概况

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
鸟飞到金匠那里唱歌，金匠送给它一条金链子；飞到鞋匠那里唱歌，鞋匠送给它一双红鞋子；飞到磨坊那里唱歌，磨坊工送给它一块磨盘。` }], Vp = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], Up = {
  id: zp,
  name: _p,
  version: $p,
  level: Sp,
  players: Cp,
  token: Ep,
  legacyKeys: Mp,
  detect: Tp,
  time: Ip,
  remaining: Np,
  deadline: Pp,
  roles: Rp,
  rolesNote: Lp,
  phases: Dp,
  events: Fp,
  stateFields: jp,
  markets: Op,
  docs: Bp,
  danmaku: Vp
}, Hp = "nongxian", Wp = "农闲", Gp = "1.2.0", Kp = "D", qp = !0, Yp = "不限", Jp = "【副本进行中：农闲】", Zp = [], Xp = { briefingName: "农闲" }, Qp = { type: "none" }, eh = { type: "fromPanel" }, th = [], nh = [], sh = [{ title: "游玩说明", md: `## 系统简报

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
  梅姨教新菜，会添在配方板上。` }], rh = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], ih = {
  id: Hp,
  name: Wp,
  version: Gp,
  level: Kp,
  rest: qp,
  players: Yp,
  token: Jp,
  legacyKeys: Zp,
  detect: Xp,
  time: Qp,
  remaining: eh,
  phases: th,
  events: nh,
  docs: sh,
  danmaku: rh
}, oh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function vn(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const lh = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function qo(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(lh)) {
    const r = Number(s[1]), i = s[2];
    n = !0, i === "天" ? t += r * 1440 : i === "小时" || i === "个小时" || i === "h" || i === "H" ? t += r * 60 : t += r;
  }
  return n ? Math.round(t) : null;
}
function Ua(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: qo(t), total: n === void 0 ? null : qo(n) };
}
function ah(e, t) {
  return e.phases.find((n) => n.id === t);
}
function ns(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); )
    n.push(r), s.add(r.id), r = ah(e, r.next);
  return n;
}
function Ha(e, t) {
  return ns(e, t).filter((n) => n.night).length;
}
function ch(e, t, n) {
  if (ns(e, t).some((r) => r.id === n.id)) return t;
  const s = e.phases[0];
  return s && ns(e, s).some((r) => r.id === n.id) ? s : n;
}
function Br(e, t, n, s, r) {
  if (!e.phases.length || !e.phases.some((f) => f.id === t.id)) return;
  let i = ns(e, n), o = i.findIndex((f) => f.id === t.id);
  o < 0 && (i = ns(e, t), o = 0);
  const l = i.reduce((f, h) => f + Math.max(0, h.cap), 0), c = Math.max(0, t.cap - s) + i.slice(o + 1).reduce((f, h) => f + Math.max(0, h.cap), 0), a = t.deadline ?? i[0].deadline ?? e.deadline, u = { x: c, y: l, deadline: a };
  if (e.time.type === "countdown") {
    const f = e.time.minutesPerRound, h = e.time.totalMinutes, x = h && h > 0 ? h : l * f;
    let z = h && h > 0 && l > 0 ? Math.round(x * c / l) : c * f;
    const k = Ua(r).remaining;
    k !== null && (z = Math.min(z, k - f)), z = Math.max(0, z), Object.assign(u, { minutes: z, total: x, text: `约剩${vn(z)}/${vn(x)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) u.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const f = e.remaining.template.replace("{n}", String(Ha(e, t)));
      u.text = a ? `${a}·${f}` : f;
    } else a && (u.text = a);
  return u;
}
const ss = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function Pi(e, t, n = ss) {
  const s = e ?? "", r = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), i = r ? Math.max(1, Number(r[1])) : Math.max(1, Math.round(n[t] ?? ss[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: i };
  const l = Number(o[1]), c = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return c <= 0 ? { rounds: i } : { rounds: i, totalMinutes: c, minutesPerRound: Math.max(1, Math.round(c / i)) };
}
const Ks = "generic", ci = [ef, hf, Ef, Wf, lp, wp, Up, ih], uh = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(oh)
  }
};
function dh(e, t) {
  const n = uh[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const Wa = ["D", "C", "B", "A", "S"];
function Ga(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (a) => {
    (typeof n[a] != "string" || !n[a].trim()) && t.push(`缺少字段或不是文本：${a}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Ks && t.push(`id 不能是保留字 ${Ks}`), Wa.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((a) => typeof a != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((a) => typeof a != "string")) && t.push("detect.patterns 必须是文本数组");
  const r = n.time;
  !r || !["none", "clock", "countdown"].includes(r.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (r.type === "clock" && (typeof r.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(r.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), r.type !== "none" && (typeof r.minutesPerRound != "number" || r.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), r.type === "countdown" && r.totalMinutes !== void 0 && (typeof r.totalMinutes != "number" || r.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const i = n.remaining;
  !i || !["nights", "countdown", "fromPanel"].includes(i.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : i.type !== "fromPanel" && typeof i.template != "string" && t.push("remaining.template 必须是文本"), i?.type === "countdown" && r?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.rest !== void 0 && typeof n.rest != "boolean" && t.push("rest 必须是 true 或 false"), n.stateFields !== void 0 && (Array.isArray(n.stateFields) ? n.stateFields.forEach((a, u) => {
    (!a || typeof a.key != "string" || !a.key || typeof a.label != "string" || typeof a.hint != "string") && t.push(`stateFields[${u}] 需要 key、label、hint 三个文本`);
  }) : t.push("stateFields 必须是数组")), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((a) => typeof a != "string" || !a)) && t.push("roles 必须是文本数组");
  const o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((a, u) => {
    if (!a || typeof a.id != "string" || typeof a.name != "string") {
      t.push(`phases[${u}] 缺少 id 或 name`);
      return;
    }
    o.has(a.id) && t.push(`阶段 id 重复：${a.id}`), l.has(a.name) && t.push(`阶段名称重复：${a.name}`), o.add(a.id), l.add(a.name), (typeof a.cap != "number" || a.cap < 1 || !Number.isInteger(a.cap)) && t.push(`阶段 ${a.id} 的 cap 必须是正整数`), a.next !== null && typeof a.next != "string" && t.push(`阶段 ${a.id} 的 next 必须是阶段 id 或 null`), a.deadline !== void 0 && typeof a.deadline != "string" && t.push(`阶段 ${a.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((a) => {
    a && typeof a.next == "string" && !o.has(a.next) && t.push(`阶段 ${a.id} 的 next 指向不存在的阶段：${a.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const c = /* @__PURE__ */ new Set();
  if (Array.isArray(n.events) ? n.events.forEach((a, u) => {
    if (!a || typeof a.id != "string" || typeof a.text != "string") {
      t.push(`events[${u}] 缺少 id 或 text`);
      return;
    }
    c.has(a.id) && t.push(`事件 id 重复：${a.id}`), c.add(a.id), o.has(a.phase) || t.push(`事件 ${a.id} 的 phase 不存在：${a.phase}`), (!Number.isInteger(a.from) || !Number.isInteger(a.to) || a.from < 1 || a.to < a.from) && t.push(`事件 ${a.id} 的轮次区间无效`), a.kind !== "event" && a.kind !== "directive" && t.push(`事件 ${a.id} 的 kind 必须是 event 或 directive`), a.if !== void 0 && typeof a.if != "string" && t.push(`事件 ${a.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((a, u) => {
    !a || typeof a.title != "string" ? t.push(`docs[${u}] 缺少 title`) : a.md !== void 0 && typeof a.md != "string" ? t.push(`docs[${u}].md 必须是文本`) : a.image !== void 0 && typeof a.image != "string" && t.push(`docs[${u}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), n.danmaku !== void 0 && (Array.isArray(n.danmaku) ? n.danmaku.forEach((a, u) => {
    if (!a || typeof a.type != "string" || typeof a.text != "string") {
      t.push(`danmaku[${u}] 需要 type 和 text`);
      return;
    }
    a.when !== void 0 && typeof a.when != "string" && t.push(`danmaku[${u}].when 必须是文本`), a.scope !== void 0 && typeof a.scope != "string" && t.push(`danmaku[${u}].scope 必须是文本`), a.phase !== void 0 && (!Array.isArray(a.phase) || a.phase.some((f) => typeof f != "string") ? t.push(`danmaku[${u}].phase 必须是文本数组`) : a.phase.forEach((f) => {
      o.size > 0 && !o.has(f) && console.warn(`[rlzc] danmaku[${u}] 的 phase "${f}" 不在阶段表中，已跳过`);
    }));
  }) : t.push("danmaku 必须是数组")), n.markets !== void 0)
    if (!Array.isArray(n.markets)) t.push("markets 必须是数组");
    else {
      const a = /* @__PURE__ */ new Set();
      n.markets.forEach((u, f) => {
        if (!u || typeof u != "object") {
          t.push(`markets[${f}] 必须是对象`);
          return;
        }
        for (const h of ["id", "q", "yes", "no", "judge"])
          (typeof u[h] != "string" || !u[h].trim()) && t.push(`markets[${f}] 缺少文本字段 ${h}`);
        (typeof u.p != "number" || !(u.p >= 0.01 && u.p <= 0.99)) && t.push(`markets[${f}].p 必须是 0.01–0.99 的数`), u.judgeNo !== void 0 && (typeof u.judgeNo != "string" || !u.judgeNo.trim()) && t.push(`markets[${f}].judgeNo 必须是文本`), u.by !== void 0 && typeof u.by != "string" && t.push(`markets[${f}].by 必须是阶段 id`), typeof u.id == "string" && (a.has(u.id) && t.push(`事件盘 id 重复：${u.id}`), a.add(u.id));
      });
    }
  return t;
}
function Ah(e) {
  const t = new Set(e.phases.map((n) => n.id));
  return (e.markets ?? []).filter((n) => n.by !== void 0 && !t.has(n.by) ? (console.warn(`[rlzc] 副本包 ${e.id} 的事件盘 ${n.id}：by「${n.by}」不是本包的阶段 id，已跳过`), !1) : !0);
}
function ds(e) {
  return Wa.includes(e.level ?? "") ? e.level : "D";
}
function Ri(e, t = ss) {
  const n = ds(e), s = Pi(e.limit, n, t), r = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, i = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / r)) : void 0;
  return {
    id: Ks,
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
function Li(e) {
  const t = new Set(ci.map((n) => n.id));
  return [...ci, ...e.filter((n) => !t.has(n.id))];
}
const fh = /副本简报[^\S\n]*(?:——|[-－—：:·・])[^\S\n]*([^\n」』]*)/, ph = /<阶段切换>([\s\S]*?)<\/阶段切换>/, hh = /<副本结算>([\s\S]*?)<\/副本结算>/, Ka = /<副本>([\s\S]*?)<\/副本>/, mh = /<角色登记>([\s\S]*?)<\/角色登记>/, gh = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, xh = /<积分变动>([\s\S]*?)<\/积分变动>/g, vh = "《「『【", yh = "》」』】";
function bh(e) {
  let t = e.trim();
  for (; ; ) {
    const n = t;
    if (vh.includes(t[0] ?? "\0") && (t = t.slice(1).trim()), yh.includes(t[t.length - 1] ?? "\0") && (t = t.slice(0, -1).trim()), t === n) return t;
  }
}
function kh(e) {
  const t = e.charCodeAt(0);
  return t >= 65281 && t <= 65374 ? String.fromCharCode(t - 65248) : e;
}
function Di(e) {
  const t = fh.exec(e ?? ""), n = t ? bh(t[1]) : "";
  if (!t || !n) return null;
  const s = { name: n }, r = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (c) => {
    const a = new RegExp(`${c}\\s*[：:]\\s*([^」』\\n]+)`).exec(r);
    return a ? a[1].trim() : void 0;
  }, o = i("等级"), l = o && /[DCBASｄｃｂａｓＤＣＢＡＳ]/i.exec(o);
  return l && (s.level = kh(l[0]).toUpperCase()), s.goal = i("目标"), s.limit = i("时限"), s.players = i("人数"), s;
}
function wh(e) {
  const t = ph.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function qa(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const r = n.slice(0, s).trim(), i = n.slice(s + 1).trim();
    r && (t[r] = i);
  }
  return t;
}
function gr(e) {
  const t = hh.exec(e ?? "");
  if (!t) return null;
  const n = qa(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function Ya(e) {
  const t = mh.exec(e ?? "");
  if (!t) return null;
  const n = qa(t[1]);
  return Object.keys(n).length ? n : null;
}
function zs(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function Ja(e) {
  const t = Ka.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let s = null;
  for (const r of t[1].split(`
`)) {
    const i = r.trim();
    if (!i) continue;
    const o = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(i);
    if (o) {
      const l = o[1].toLowerCase(), c = o[2].trim();
      l === "时限" ? (n.limit = c, s = null) : l === "进度条" ? (n.progressBar = c, s = null) : l === "任务" ? (zs(c) && n.tasks.push(zs(c)), s = "tasks") : (n.ps = c, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(i)) {
      s = null;
      continue;
    }
    s === "tasks" ? zs(i) && n.tasks.push(zs(i)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${i}` : i);
  }
  return n;
}
function zh(e) {
  const t = gh.exec(e ?? "");
  return t ? t[2] : null;
}
function Vr(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (n(r)) return r;
    s.add(r.id), r = r.next ? e.phases.find((i) => i.id === r.next) : void 0;
  }
  return null;
}
function _h(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const r = (l) => !!l.clock && !l.night;
  let i = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      i = Vr(e, t, r), o = i?.cap ?? 0;
      break;
    case "晚饭":
      i = Vr(e, t, r), i && (o = Math.ceil(i.cap * 0.75), i.id === t.id && o <= n && (o = i.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      i = Vr(e, t, (l) => !!l.night), o = i?.cap ?? 0;
      break;
  }
  return !i || i.id === t.id && o <= n + 1 ? null : { phase: i.id, round: o, label: `${i.name}第${o}轮` };
}
const $h = /<状态栏>([\s\S]*?)<\/状态栏>/;
function ui(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function Sh(e, t) {
  const n = ui(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const Ur = /* @__PURE__ */ new Map();
function Ch(e, t) {
  const n = `${e}\0${t}`;
  if (!Ur.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (r) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, r);
    }
    Ur.set(n, s);
  }
  return Ur.get(n);
}
function Eh(e, t, n = []) {
  const s = String(e ?? ""), r = (a, u) => a ? { signal: u, pack: a, info: { name: a.name, level: a.level } } : null, i = (a, u) => {
    const f = r(Sh(t, a), u);
    if (f) return f;
    const h = ui(a), x = h ? [...n].reverse().find((z) => ui(z.name) === h) : void 0;
    return x ? { signal: u, info: { ...x } } : null;
  }, o = Di(s);
  if (o)
    return { signal: 1, pack: t.find((u) => u.detect.briefingName === o.name), info: o };
  const l = Ka.exec(s);
  if (l) {
    const a = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(l[1]), u = a && i(a[1], 2);
    if (u) return u;
  }
  for (const a of s.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const u = i(a[1], 3);
    if (u) return u;
  }
  const c = $h.exec(s);
  if (c) {
    for (const a of c[1].split(`
`))
      if (a.includes("地点"))
        for (const u of a.matchAll(/副本《([^》]+)》/g)) {
          const f = i(u[1], 4);
          if (f) return f;
        }
  }
  for (const a of t)
    for (const u of a.detect.patterns ?? []) {
      const f = Ch(a.id, u);
      if (f && f.test(s)) return r(a, 5);
    }
  return null;
}
const Yo = 5, Mh = { id: "_open", name: "进行中", cap: 0, next: null };
function $e(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function Th(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function Za(e, t, n) {
  const s = Th(e) + Math.max(0, n - 1) * t, r = Math.floor(s / 60) % 24, i = (s % 60 + 60) % 60;
  return `${r % 12 === 0 ? 12 : r % 12}:${String(i).padStart(2, "0")}`;
}
function Jo(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return Za(e.time.dayStart, e.time.minutesPerRound, n);
}
function Xa(e) {
  return e.phases.length ? e.phases : [Mh];
}
function Ms(e, t) {
  return Xa(e).find((n) => n.id === t);
}
function Zo(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (r.id === n) return !0;
    s.add(r.id), r = Ms(e, r.next);
  }
  return !1;
}
function Xo(e, t, n, s) {
  const r = n + 1, i = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > r) {
      let l = i.map((a, u) => ({ e: a, i: u })).filter(({ e: a }) => a.from >= r && a.from <= o).sort((a, u) => a.e.from - u.e.from || a.i - u.i).map(({ e: a }) => a), c = o;
      return l.length > Yo && (c = l[Yo - 1].from, l = l.filter((a) => a.from <= c)), { phase: t, round: c, events: l, skipFrom: r };
    }
  }
  return { phase: t, round: r, events: i.filter((o) => o.from === r) };
}
function Qa(e, t, n) {
  const s = t.entryIndex;
  if (!$e(e[s])) return null;
  const r = Xa(n);
  let i = r[0], o = r[0], l = 0, c, a = !1, u, f, h = null, x, z, k;
  const R = /* @__PURE__ */ new Set(), U = {}, D = {}, E = /* @__PURE__ */ new Map();
  for (const N of t.manual ?? [])
    E.has(N.atIndex) || E.set(N.atIndex, []), E.get(N.atIndex).push(N);
  const M = (N, ie) => {
    D[i.id] === void 0 && N.id !== i.id && (D[i.id] = ie), n.phases.length && (o = ch(n, o, N)), i = N, l = 0, h && !Zo(n, i, h.phase) && (h = null);
  };
  for (let N = s; N < e.length; N++) {
    const ie = e[N];
    if (!a && $e(ie)) {
      const le = Xo(n, i, l, h);
      l = le.round;
      const Pe = new Set((ie.extra?.rlzc?.skippedEvents ?? []).map((j) => j.id));
      le.events.forEach((j) => {
        Pe.has(j.id) || R.add(j.id);
      }), U[N] = {
        phase: i.id,
        round: l,
        events: le.events.map((j) => j.id),
        skipFrom: le.skipFrom,
        limit: Br(n, i, o, l, c)
      }, h && i.id === h.phase && l >= h.round && (h = null);
      const rt = String(ie.mes ?? ""), Xe = Ja(rt);
      Xe && (z = Xe), c = Xe?.limit;
      const hn = Ya(rt);
      hn && (k = hn);
      const Gt = gr(rt);
      if (Gt)
        a = !0, u = "tag", f = N, x = Gt;
      else {
        const j = wh(rt), K = j ? r.find((G) => G.name === j) : void 0;
        if (K && n.phases.length)
          M(K, N);
        else if (i.cap > 0 && l >= i.cap && i.next) {
          const G = Ms(n, i.next);
          G && M(G, N);
        }
      }
    }
    for (const le of E.get(N) ?? []) {
      if (a) break;
      switch (le.kind) {
        case "skip": {
          h = Ms(n, le.targetPhase) && Zo(n, i, le.targetPhase) ? { phase: le.targetPhase, round: le.targetRound } : null;
          break;
        }
        case "setPhase": {
          const Pe = Ms(n, le.phase);
          Pe && (h = null, M(Pe, N));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(le.round)), h = null;
          break;
        case "end":
          a = !0, u = "manual", f = N;
          break;
      }
    }
  }
  const ee = a ? null : Xo(n, i, l, h), te = ee ? ee.round : l + 1, X = i.cap > 0, re = n.events.filter((N) => R.has(N.id)).map((N) => N.id), C = a ? void 0 : Br(n, i, o, te, c), p = a ? void 0 : Br(n, i, o, l);
  let m;
  const v = n.remaining;
  return !a && v.type === "nights" && n.phases.length && !i.byTag && !i.frozen ? m = v.template.replace("{n}", String(Ha(n, i))) : !a && v.type === "countdown" && C?.minutes !== void 0 && (m = v.template.replace("{m}", String(C.minutes))), {
    phase: i,
    round: l,
    nextRound: te,
    clock: a ? void 0 : Jo(n, i, te),
    currentClock: Jo(n, i, l),
    remainingText: m,
    limit: C,
    roundsLeft: p ? { x: p.x, y: p.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: a,
    endedBy: u,
    endIndex: f,
    firedEvents: re,
    warn: !a && X && te >= i.cap - 2,
    isLastRound: !a && X && te === i.cap,
    overdue: !a && X && !i.next && te > i.cap,
    next: ee,
    skipGoal: h,
    settlement: x,
    panel: z,
    rolesFromChat: k,
    perMessage: U,
    phaseEnds: D,
    entryIndex: s
  };
}
const ec = "rlzc_token", tc = "rlzc_progress", nc = "rlzc_turn", sc = "rlzc_state", rc = "rlzc_ledger", ic = "rlzc_live", oc = "rlzc_format", Ih = [ec, tc, nc, sc, rc, ic, oc], rs = { token: "", progress: "", turn: "", injected: [] };
function Nh(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function qs(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const r = new RegExp(`(?<!\\{)\\{(${s.map(Nh).join("|")})\\}(?!\\})`, "g");
  return e.replace(r, (i, o) => n?.[o]?.trim() || o);
}
function Ph(e, t) {
  if (!t.length) return "";
  const n = e.events.map((c) => c.id), s = t.map((c) => n.indexOf(c)).filter((c) => c >= 0).sort((c, a) => c - a), r = [];
  let i = s[0], o = s[0];
  const l = () => r.push(i === o ? n[i] : `${n[i]}–${n[o]}`);
  for (let c = 1; c < s.length; c++) {
    if (s[c] === o + 1) {
      o = s[c];
      continue;
    }
    l(), i = o = s[c];
  }
  return l(), r.join("、");
}
function Qo(e, t, n, s = !1) {
  let r = qs(e.text, t, n);
  return e.to > e.from && (r = `在本阶段第${e.from}到${e.to}轮之间发生：${r}`), e.if && !s && (r += `（条件：${qs(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${r}`;
}
function Rh(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Lh(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...rs, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return rs;
  const r = s.roles, i = e.phases.length > 0, o = t.next, l = [`副本：${e.name}（${e.level}级）`], c = t.limit;
  if (i)
    l.push(`阶段：${t.phase.name}`), l.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), c && l.push(`剩余${c.x}/${c.y}轮`), t.clock && l.push(`钟时：${t.clock}`), c?.text && l.push(`时限：${c.text}`), e.remaining.type === "countdown" && t.remainingText && l.push(t.remainingText), c?.deadline && !c.text?.includes(c.deadline) && l.push(`截止：${c.deadline}`);
  else {
    l.push(`本轮：第${t.nextRound}轮`), t.clock && l.push(`钟时：${t.clock}`);
    const E = s.panelLimit || s.briefing?.limit;
    E && l.push(`时限：${E}`);
  }
  const a = ["［副本进度·仅供AI］", l.join("　")];
  if (s.briefing?.goal && (!i || e.id === "generic") && a.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const E = e.roles.filter((M) => r?.[M]);
    a.push(
      E.length ? `角色登记：${e.roles.map((M) => `${M}=${r?.[M] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const u = Ph(e, t.firedEvents);
  u && a.push(`已发生事件：${u}`);
  const f = [];
  o.skipFrom !== void 0 && f.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const h = new Map((s.subNext ?? []).map((E) => [E.id, E])), x = o.events.filter((E) => E.if && h.get(E.id)?.ok === !1).map((E) => ({ id: E.id, reason: h.get(E.id).reason })), z = o.events.filter((E) => !x.some((M) => M.id === E.id)), k = (E) => !!E.if && h.get(E.id)?.ok === !0, R = z.filter((E) => E.kind === "event"), U = z.filter((E) => E.kind === "directive");
  if (R.length && (f.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), R.forEach((E) => f.push(Qo(E, e, r, k(E))))), U.length && (f.push("本轮写作要求："), U.forEach((E) => f.push(Qo(E, e, r, k(E))))), t.isLastRound ? f.push(Rh(t)) : t.overdue && f.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && f.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && f.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((E) => r?.[E])) {
    let E = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((M) => `${M}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (E += "死者不得是{{user}}或其同伴。"), f.push(E);
  }
  let D;
  return c?.text && (c.minutes !== void 0 ? (f.push(
    `本轮<副本>的时限一栏写：${c.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), D = { text: c.text, minutes: c.minutes, total: c.total }) : (f.push(`本轮<副本>的时限一栏写：${c.text}（照抄）。`), D = { text: c.text })), {
    token: e.token,
    progress: a.join(`
`),
    turn: f.length ? ["［本轮指令·仅供AI］", ...f].join(`
`) : "",
    injected: z.map((E) => E.id),
    limit: D,
    skipped: x.length ? x : void 0,
    state: s.stateText || void 0
  };
}
const At = "<状态栏>", yn = "</状态栏>", Dh = {
  missing: "缺失",
  misnamed: "标签名写错",
  unpaired: "不成对",
  duplicate: "多于一对"
}, Fi = /* @__PURE__ */ new Set(["副本", "阶段切换", "副本结算", "角色登记", "积分变动", "直播"]), Fh = /* @__PURE__ */ new Set(["系统面板", "状态面板", "状态", "面板", "系统状态", "状态信息", "人物状态", "角色状态", "状态条", "状态框", "系统任务状态栏", "任务状态栏", "状态栏位", "status", "statusbar", "status_bar", "status-bar"]), jh = ["等级", "积分", "位格", "道具", "待清算", "在场"];
function Oh(e) {
  return jh.filter((t) => new RegExp(`${t}\\s*[：:]`).test(e)).length;
}
function ji(e) {
  const t = e.trim().toLowerCase();
  return Fh.has(t) || /状态|面板/.test(t);
}
function el(e, t) {
  if (Fi.has(e)) return !1;
  const n = Oh(t);
  return ji(e) ? n >= 1 : /[^\x00-\x7f]/.test(e) && n >= 2;
}
function tl(e, t) {
  return e.split(t).length - 1;
}
function lc(e) {
  const t = /<([^<>\/\s][^<>\/]{0,11})>|【([^【】\/]{1,12})】|\[([^\[\]\/]{1,12})\]/g;
  let n;
  for (; (n = t.exec(e)) !== null; ) {
    const s = (n[1] ?? n[2] ?? n[3]).trim();
    if (Fi.has(s)) continue;
    const r = n.index + n[0].length, i = n[1] !== void 0 ? `</${n[1]}>` : n[2] !== void 0 ? `【/${n[2]}】` : `[/${n[3]}]`, o = e.indexOf(i, r);
    if (o >= 0) {
      if (el(s, e.slice(r, o))) return { open: n[0], start: n.index, close: i, closeAt: o };
      continue;
    }
    if (ji(s) && el(s, e.slice(r, Ys(e, r)))) return { open: n[0], start: n.index };
  }
  return null;
}
function Ys(e, t) {
  const n = e.indexOf("<副本>", t);
  let s = n >= 0 ? n : e.length;
  for (; s > t && /\s/.test(e[s - 1]); ) s--;
  return s;
}
function ac(e, t) {
  const n = Ys(e, t), s = /<\/([^<>\s]{1,12})>|【\/([^【】]{1,12})】|\[\/([^\[\]]{1,12})\]/g;
  s.lastIndex = t;
  let r;
  for (; (r = s.exec(e)) !== null && r.index < n; ) {
    const i = (r[1] ?? r[2] ?? r[3]).trim();
    if (!Fi.has(i) && ji(i))
      return { tok: r[0], at: r.index };
  }
  return null;
}
function Oi(e) {
  const t = String(e ?? ""), n = tl(t, At), s = tl(t, yn);
  if (n === 1 && s === 1)
    return t.indexOf(At) < t.indexOf(yn) ? { kind: "ok" } : { kind: "unpaired", detail: "结尾在开头之前", fixable: !1 };
  if (n === 0 && s === 0) {
    const r = lc(t);
    return r ? { kind: "misnamed", detail: r.close ? `${r.open}…${r.close}` : `${r.open}（没有结尾）`, fixable: !0 } : { kind: "missing" };
  }
  if (n === s) return { kind: "duplicate", detail: `${n}对`, fixable: !1 };
  if (n === 1 && s === 0) {
    const r = ac(t, t.indexOf(At) + At.length);
    return { kind: "unpaired", detail: r ? `结尾写成了${r.tok}` : "只有开头", fixable: !0 };
  }
  return n === 0 ? { kind: "unpaired", detail: "只有结尾", fixable: !1 } : { kind: "unpaired", detail: `开头${n}个、结尾${s}个`, fixable: !1 };
}
function Bh(e) {
  const t = String(e ?? ""), n = Oi(t);
  if (!n.fixable) return null;
  if (n.kind === "misnamed") {
    const o = lc(t), l = o.start + o.open.length;
    if (o.close !== void 0 && o.closeAt !== void 0)
      return { text: t.slice(0, o.start) + At + t.slice(l, o.closeAt) + yn + t.slice(o.closeAt + o.close.length), from: `${o.open}…${o.close}` };
    const c = Ys(t, l);
    return { text: t.slice(0, o.start) + At + t.slice(l, c) + `
` + yn + t.slice(c), from: o.open };
  }
  const s = t.indexOf(At) + At.length, r = ac(t, s);
  if (r) return { text: t.slice(0, r.at) + yn + t.slice(r.at + r.tok.length), from: `${At}…${r.tok}` };
  const i = Ys(t, s);
  return { text: t.slice(0, i) + `
` + yn + t.slice(i), from: At };
}
function cc(e, t) {
  for (let n = 0; n < t; n++) if (e[n]?.is_user) return !1;
  return !0;
}
function uc(e, t) {
  const n = e[t];
  if (!$e(n) || cc(e, t)) return null;
  const s = Oi(n.mes);
  return s.kind === "ok" ? null : s;
}
const Vh = "［格式·仅供AI］上一轮的状态栏格式不对。本轮必须在正文末尾完整输出一次<状态栏>……</状态栏>，开头结尾的标签名一字不改，不得写成其他名字。";
function Uh(e) {
  for (let t = e.length - 1; t >= 0; t--)
    if ($e(e[t]))
      return uc(e, t) !== null;
  return !1;
}
function Hh(e, t = 60) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const r = e[s]?.extra?.rlzc?.format, i = uc(e, s);
    i ? n.push({ index: s, kind: i.kind, detail: i.detail, fixed: !1 }) : r?.fixed && $e(e[s]) && n.push({ index: s, kind: r.kind, detail: r.detail, fixed: !0, from: r.from });
  }
  return n;
}
const Wh = 1, Gh = 0;
function me() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function dc() {
  const e = me();
  return e.eventTypes ?? e.event_types ?? {};
}
function gn(e, t) {
  const n = dc()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  me().eventSource.on(n, t);
}
function Nn(e, t) {
  const n = dc()[e];
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
function gt() {
  return me().chatMetadata ?? {};
}
function Je() {
  const e = me();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Tt(e, t, n, s) {
  me().setExtensionPrompt(e, t, Wh, n, s, Gh);
}
function Kh() {
  const e = me();
  typeof e.saveChat == "function" ? e.saveChat() : e.saveChatDebounced?.();
}
function qh(e) {
  const t = me(), n = q()[e];
  !n || !document.querySelector(`#chat .mes[mesid="${e}"]`) || typeof t.updateMessageBlock == "function" && t.updateMessageBlock(e, n);
}
function Se(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Ht(e) {
  const t = me();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
function nl(e, t, n, s = "回廊种菜系统") {
  const r = window.toastr, i = window.jQuery;
  if (!r || typeof i != "function") return;
  const o = document.createElement("div");
  o.style.cssText = "overflow-wrap:anywhere;", o.append(document.createTextNode(e));
  const l = document.createElement("a");
  l.href = "#", l.textContent = t, l.className = "rlzc-toast-action", l.style.cssText = "margin-left:.5em;color:inherit;font-weight:bold;text-decoration:underline;white-space:nowrap;cursor:pointer;", o.append(l);
  const c = r.info(i(o), s, { timeOut: 6e3, extendedTimeOut: 2e3, closeButton: !0, escapeHtml: !1 });
  l.addEventListener("click", (a) => {
    a.preventDefault(), a.stopPropagation(), r.clear(c), n();
  });
}
async function sl(e, t = "") {
  const n = me();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const r = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof r == "string" ? r : null;
  }
  return window.prompt(e, t);
}
async function Yh(e, t) {
  const n = me(), s = document.createElement("div"), r = document.createElement("div");
  r.textContent = e, s.append(r);
  let i = null;
  if (t) {
    const l = document.createElement("label");
    l.className = "checkbox_label rlzc-live-optin", l.style.cssText = "display:inline-flex;align-items:center;justify-content:center;gap:8px;margin-top:10px;min-height:44px;padding:0 8px;cursor:pointer;", i = document.createElement("input"), i.type = "checkbox", i.id = "rlzc-live-optin", i.checked = t.checked;
    const c = document.createElement("span");
    c.textContent = t.label, l.append(i, c), s.append(l);
  }
  if (n.callGenericPopup && n.POPUP_TYPE && n.POPUP_RESULT)
    return { ok: await n.callGenericPopup(s, n.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === n.POPUP_RESULT.AFFIRMATIVE, checked: !!i?.checked };
  const o = window.confirm(e);
  return { ok: o, checked: o && !!t?.checked };
}
const an = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function Ac(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function Jh(e, t = an) {
  return t.length ? e.replace(Ac(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
const di = "rlzc-hide:";
function Zh(e) {
  let t = 5381;
  for (let n = 0; n < e.length; n++) t = (t << 5) + t + e.charCodeAt(n) | 0;
  return (t >>> 0).toString(36);
}
function Xh(e) {
  const t = e.firstChild;
  return t && t.nodeType === Node.COMMENT_NODE && t.data.startsWith(di) ? t.data.slice(di.length) : null;
}
function Qh(e) {
  return e.querySelector(".TH-render, iframe") ? !0 : !!e.parentElement && Array.from(e.parentElement.children).some((t) => t.classList.contains("TH-streaming"));
}
function em() {
  const e = globalThis.TavernHelper?.refreshOneMessage;
  return typeof e == "function" ? e : null;
}
const Hr = /* @__PURE__ */ new Set();
function fc(e, t = an, n = !1, s = !1) {
  const r = q()[e];
  if (!r || r.is_user) return;
  const i = String(r.extra?.display_text ?? r.mes ?? "");
  if (!Ac(n ? an : t, "").test(i)) return;
  const o = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!o) return;
  const l = me().messageFormatting;
  if (typeof l != "function") return;
  const c = Jh(i, t), a = Zh(`${t.join("|")}
${c}`), u = Xh(o);
  if (u === a) return;
  const f = l(c, r.name ?? "", !!r.is_system, !1, e);
  if (!s && Qh(o)) {
    if (u === null && l(i, r.name ?? "", !!r.is_system, !1, e) === f) return;
    const h = em();
    if (h && !Hr.has(e)) {
      Hr.add(e), Promise.resolve().then(() => h(e)).catch((x) => console.warn("[rlzc] 请酒馆助手重渲染消息失败", e, x)).finally(() => Hr.delete(e));
      return;
    }
  }
  o.innerHTML = `<!--${di}${a}-->${f}`;
}
function tm(e = an, t = !1, n = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((s) => {
    const r = Number(s.getAttribute("mesid"));
    Number.isFinite(r) && fc(r, e, t, n);
  });
}
const nm = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function pc(e) {
  return e.stateFields?.length ? e.stateFields : [nm];
}
const sm = [...an, "状态栏"], rm = new RegExp(`<(${sm.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function Bi(e) {
  return String(e ?? "").replace(rm, "").replace(/\n{3,}/g, `

`).trim();
}
function im(e) {
  const t = pc(e.pack), n = e.markets ?? [], s = [
    "你是角色扮演副本的记录员，不写剧情，只整理事实。",
    "根据本轮正文完成三件事：",
    "1. 事件核对：逐条判断「本轮后台事件」在正文里是 done（已发生）、missed（该发生但没写出来）还是 void（条件已不成立，不该发生），各附一句理由。后台事件即使{{user}}看不到，只要正文与之不矛盾、且没有写出相反的事实，就算 done。标明「第X到Y轮之间」的事件不一定在本轮写出：本轮没写到、也没写出相反的事实，同样算 done。",
    "2. 隐藏状态：在「上一轮状态」的基础上更新下列字段，只依据正文里已经发生的事实，没有变化就照抄上一轮：",
    ...t.map((c) => `   - ${c.key}（${c.label}）：${c.hint}`),
    "3. 条件预判：逐条判断「下一轮事件」的条件现在是否仍成立（ok 为 true/false），附一句理由。",
    "4. hype：0–100 整数，按本轮正文的紧张、冲突、转折打分；hurt：true/false，本轮正文是否有人受伤或死亡。这两项只写数字和真假，不写理由。",
    ...n.length ? ["5. markets：逐条判断「盘口陈述」，只有本轮正文明确写到才填 true，否则填 false，不写理由。"] : [],
    "只输出一个 JSON 对象，不要任何解释，格式：",
    n.length ? `{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}],"hype":50,"hurt":false,"markets":{${n.map((c) => `"${c.id}":false`).join(",")}}}` : '{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}],"hype":50,"hurt":false}',
    "没有本轮事件时 events 为 []；没有下一轮事件时 next 为 []。"
  ].join(`
`), r = (c) => c.to > c.from ? `（本阶段第${c.from}到${c.to}轮之间）` : "", i = e.events.length ? e.events.map((c) => `- ${c.id}${r(c)}：${c.text}${c.if ? `（条件：${c.if}）` : ""}`).join(`
`) : "（无）", o = e.nextConditional.length ? e.nextConditional.map((c) => `- ${c.id}：${c.text}（条件：${c.if}）`).join(`
`) : "（无）", l = [
    `【副本】${e.pack.name}　阶段：${e.phaseName}　第${e.round}轮`,
    `【上一轮状态】${e.prevState ? JSON.stringify(e.prevState) : "（尚无，请根据正文建立）"}`,
    `【本轮后台事件】
${i}`,
    `【下一轮事件】
${o}`,
    ...n.length ? [`【盘口陈述】
${n.map((c) => `- ${c.id}：${c.judge}`).join(`
`)}`] : [],
    `【本轮正文】
${Bi(e.text)}`
  ].join(`

`);
  return { system: s, user: l };
}
function om(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class je extends Error {
}
function lm(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), r = t.lastIndexOf("}");
  if (s < 0 || r <= s) throw new je("返回里没有 JSON");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new je("返回的 JSON 无法解析");
  }
  if (!i || typeof i != "object" || Array.isArray(i)) throw new je("返回的不是 JSON 对象");
  if (!i.state || typeof i.state != "object" || Array.isArray(i.state)) throw new je("缺少 state");
  const o = ["done", "missed", "void"], l = (Array.isArray(i.events) ? i.events : []).filter((f) => f && typeof f.id == "string" && o.includes(f.status)).map((f) => ({ id: f.id, status: f.status, reason: String(f.reason ?? "") })), c = (Array.isArray(i.next) ? i.next : []).filter((f) => f && typeof f.id == "string" && typeof f.ok == "boolean").map((f) => ({ id: f.id, ok: f.ok, reason: String(f.reason ?? "") })), a = { events: l, state: i.state, next: c }, u = typeof i.hype == "number" ? i.hype : typeof i.hype == "string" && i.hype.trim() !== "" ? Number(i.hype) : NaN;
  if (Number.isFinite(u) && (a.hype = Math.max(0, Math.min(100, Math.round(u)))), typeof i.hurt == "boolean" ? a.hurt = i.hurt : (i.hurt === "true" || i.hurt === "false") && (a.hurt = i.hurt === "true"), i.markets && typeof i.markets == "object" && !Array.isArray(i.markets)) {
    const f = {};
    for (const [h, x] of Object.entries(i.markets))
      typeof x == "boolean" ? f[h] = x : (x === "true" || x === "false") && (f[h] = x === "true");
    a.markets = f;
  }
  return a;
}
function am(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function cm(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((r) => String(r ?? "")).join("|");
  return `${e}:${t}:${s}:${am(String(n?.mes ?? ""))}`;
}
function um(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function dm(e, t, n = 2) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return lm(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
class hc extends Error {
}
function xr(e) {
  if (e instanceof hc) return "超时";
  if (e instanceof je) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function mc(e) {
  return e?.extra?.rlzc;
}
function vr(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!$e(s)) continue;
    const r = mc(s)?.sub;
    if (r?.state && !r.skipped) return { index: n, state: r.state };
  }
  return null;
}
function Am(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!$e(s)) continue;
    const r = mc(s)?.sub;
    return r && !r.skipped && Array.isArray(r.next) ? r.next : void 0;
  }
}
function Js(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => Js(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${Js(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function gc(e, t) {
  const n = pc(e), s = new Set(n.map((i) => i.key)), r = n.filter((i) => t[i.key] !== void 0).map((i) => `${i.label}：${Js(t[i.key])}`);
  for (const [i, o] of Object.entries(t)) s.has(i) || r.push(`${i}：${Js(o)}`);
  return r.length ? ["［副本状态·仅供AI］", ...r].join(`
`) : "";
}
const fm = "你在写回廊直播间的观众弹幕。观众是回廊里的其他玩家，只看得到直播画面。什么人都有：夸赞、祝福、讨论、泼冷水、嫉妒、抹黑、造谣，正面的稍多。每条30字以内，口语，称{{user}}为主播，不用性别代词。只能根据画面里已经发生的事说话，不猜测、不透露画面外的信息。", pm = ["praise", "bless", "discuss", "cold", "envy", "smear", "rumor"];
function hm(e) {
  if (!e.aiSource || !e.subOn) return !1;
  const t = Math.max(1, Math.min(10, Math.floor(e.freq) || 3));
  return e.roundInShow > 0 && e.roundInShow % t === 0 ? !0 : e.phaseSwitch || e.hurt || e.eventDone;
}
function xc(e) {
  return String(e ?? "").replace(/<(副本|状态栏|阶段切换|副本结算|角色登记|积分变动|直播|thinking|think)>[\s\S]*?<\/\1>/g, "").replace(/<\/?[A-Za-z一-龥][^<>]*>/g, "").replace(/\n{3,}/g, `

`).trim();
}
function mm(e, t, n) {
  const s = e.map((o) => o.text), r = [], i = /* @__PURE__ */ new Set();
  for (let o = 0; o < t * 10 && r.length < Math.min(t, s.length); o++) {
    const l = Math.floor(n() * s.length);
    i.has(l) || (i.add(l), r.push(s[l]));
  }
  return r;
}
function gm(e) {
  const t = [
    fm,
    "只输出一个 JSON 数组，8–12条，不要任何解释，格式：",
    '[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]'
  ].join(`
`), n = [
    `【直播间】${e.scene}`,
    `【在场角色】${e.cast.length ? e.cast.join("、") : "（无）"}`,
    `【最近两轮画面】
${e.texts.map((s) => xc(s)).filter(Boolean).join(`

`) || "（无）"}`,
    `【语气示例】
${e.samples.map((s) => `- ${s}`).join(`
`)}`
  ].join(`

`);
  return { system: t, user: n };
}
function xm(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), r = t.lastIndexOf("]");
  if (s < 0 || r <= s) throw new je("返回里没有 JSON 数组");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new je("返回的 JSON 无法解析");
  }
  if (!Array.isArray(i)) throw new je("返回的不是 JSON 数组");
  const o = i.filter((l) => l && typeof l.text == "string" && l.text.trim()).map((l) => ({
    type: pm.includes(l.type) ? l.type : "discuss",
    name: typeof l.name == "string" && l.name.trim() ? l.name.trim().slice(0, 16) : "匿名",
    text: l.text.trim()
  })).slice(0, 13);
  if (!o.length) throw new je("返回的弹幕为空");
  return o;
}
async function vm(e, t, n = 1) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return xm(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
function ym(e) {
  return e.t === "tip" ? `${e.name} 打赏${e.amount}` : `${e.name}：${e.text}`;
}
function bm(e, t = 5) {
  if (!e.on) return "";
  const n = e.feed.filter((r) => r.t === "msg" || r.t === "tip").slice(-t), s = `［直播·仅供AI］{{user}}正在直播，约${e.viewers}人在看。`;
  return n.length ? `${s}最近弹幕：${n.map(ym).join("／")}` : s;
}
const vc = 1500;
function yc() {
  return me().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function bc(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Vi(e, t) {
  const n = new AbortController();
  let s;
  const r = new Promise((i, o) => {
    s = setTimeout(() => {
      n.abort(), o(new hc(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), r]);
  } finally {
    clearTimeout(s);
  }
}
function kc(e, t) {
  const n = typeof t?.error == "string" ? t.error : t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : ""), s = String(n ?? "").trim(), r = new Error(`${e || ""} ${s}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return r.status = e, r.detail = s, r;
}
async function wc(e) {
  const t = await e.text().catch(() => "");
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
async function zc(e, t, n, s = vc, r = 0.2, i = !1) {
  const o = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: yc(),
    signal: n,
    body: JSON.stringify({
      ...bc(e),
      model: e.model,
      messages: [
        { role: "system", content: t.system },
        { role: "user", content: t.user }
      ],
      max_tokens: s,
      temperature: r,
      stream: !1
    })
  }), l = await wc(o);
  if (!o.ok || l?.error) throw kc(o.status === 200 ? 0 : o.status, l);
  const c = l?.choices?.[0]?.message?.content ?? l?.choices?.[0]?.text ?? l?.content;
  if (typeof c != "string") {
    if (i) return "";
    throw new Error("返回里没有正文");
  }
  return c;
}
async function km(e) {
  const t = me();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function Ui(e, t, n = {}) {
  return Vi(e.timeoutMs, (s) => {
    if (e.source === "main") return km(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return zc(e.preset, t, s, vc, n.temperature ?? 0.2);
  });
}
async function wm(e, t) {
  const n = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: yc(),
    signal: t,
    body: JSON.stringify(bc(e))
  }), s = await wc(n);
  if (!n.ok || s?.error) throw kc(n.status === 200 ? 0 : n.status, s);
  const i = (Array.isArray(s) ? s : Array.isArray(s?.data) ? s.data : Array.isArray(s?.models) ? s.models : []).map((o) => typeof o == "string" ? o : o?.id ?? o?.name).filter(Boolean);
  return [...new Set(i)].sort();
}
function zm(e, t) {
  return Vi(t, (n) => wm(e, n));
}
const _m = 64;
async function $m(e, t) {
  if (!e.model.trim()) throw new Error("还没有选模型");
  return Vi(
    t,
    (n) => zc(e, { system: "只回复 OK。", user: "ping" }, n, _m, 0.2, !0)
  );
}
function rl(e) {
  if (!e || typeof e != "object" || typeof e.ok != "boolean") return;
  const t = Number(e.at);
  return { ok: e.ok, reason: String(e.reason ?? ""), at: Number.isFinite(t) ? t : 0 };
}
function Sm(e) {
  const t = {
    id: String(e?.id ?? ""),
    name: String(e?.name ?? ""),
    url: String(e?.url ?? ""),
    key: String(e?.key ?? ""),
    model: String(e?.model ?? "")
  };
  Array.isArray(e?.models) && (t.models = e.models.filter((r) => typeof r == "string" && r));
  const n = rl(e?.fetchResult);
  n && (t.fetchResult = n);
  const s = rl(e?.testResult);
  return s && (t.testResult = s), t;
}
function il(e) {
  return !!e && !!e.url.trim();
}
function ol(e) {
  return !!e && !!e.url.trim() && !!e.model.trim();
}
function Cm(e, t, n) {
  const s = String(n ?? "").trim();
  return e[t] === s ? !1 : (e[t] = s, t === "model" || (delete e.models, delete e.fetchResult), delete e.testResult, !0);
}
function ll(e, t, n = Date.now()) {
  t.ok ? (e.models = [...t.models], e.fetchResult = { ok: !0, reason: "", at: n }) : e.fetchResult = { ok: !1, reason: t.reason, at: n };
}
function al(e, t, n = Date.now()) {
  e.testResult = { ok: t.ok, reason: t.ok ? "" : t.reason, at: n };
}
function Em(e) {
  const t = new Date(e);
  return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
}
function Mm(e) {
  const t = e.fetchResult;
  return t ? t.ok ? `✓ 读到${e.models?.length ?? 0}个模型` : `✗ ${t.reason}` : "";
}
function Tm(e) {
  const t = e.testResult;
  return t ? t.ok ? "✓ 可以回复" : `✗ ${t.reason}` : "";
}
function Im(e) {
  const t = e?.testResult;
  return t?.ok ? { kind: "on", text: "已连接" } : t ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" };
}
const Nm = 80;
function Ai(e) {
  const t = xr(e), n = Number(e?.status) || 0, s = String(e?.detail ?? "").replace(/\s+/g, " ").trim(), r = Array.from(s).slice(0, Nm).join("");
  return n && r ? `${t}（${n}：${r}）` : n ? `${t}（${n}）` : r ? `${t}（${r}）` : t;
}
const _c = "rlzc_ledger", $t = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, Pm = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function Rm(e) {
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
function Ze(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), r = String(t.getHours()).padStart(2, "0"), i = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${r}:${i}`;
}
const Lm = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]\s*([\s\S]*)$/i, Dm = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Fm(e) {
  const t = String(e ?? "").replace(/[Ａ-Ｚａ-ｚ]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248)), n = /[SABCD]/i.exec(t);
  return n ? n[0].toUpperCase() : null;
}
function jm(e) {
  const t = {}, n = [];
  let s = null;
  for (const l of String(e ?? "").split(`
`)) {
    const c = l.replace(/\*\*/g, "").trim();
    if (!c || /^[━─—=\-]{3,}$/.test(c)) continue;
    const a = Lm.exec(c);
    if (a) {
      const f = /^os$/i.test(a[1]) ? "os" : a[1];
      s && !["地点", "时间", "日期"].includes(f) ? s[f] = a[2].trim() : t[f] = a[2].trim();
      continue;
    }
    const u = /^(.+?)\s*[：:]\s*$/.exec(c);
    if (u) {
      s = { 名: u[1].trim() }, n.push(s);
      continue;
    }
    if (c.includes("｜")) {
      const f = c.split("｜").map((h) => h.trim());
      n.push({ 名: f[0], 等级: f[1] ?? "" }), s = null;
    }
  }
  const r = n[0], o = !!r && ["积分", "位格", "道具", "在场"].some((l) => l in r) ? r.等级 : t.等级;
  return o ? Fm(o) : null;
}
function $c(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = Dm.exec(s.mes);
    if (!r) continue;
    const i = jm(r[1]);
    if (i) return i;
  }
  return null;
}
function Sc(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function Om(e, t, n, s, r, i = "") {
  const o = n.结果 ?? "", l = (n.评价 ?? "").toUpperCase().trim(), c = ["D", "C", "B", "A", "S"].includes(l) ? l : null, a = o === "通关" || o === "成功" || o === "胜利", u = o === "失败", f = o === "死亡" || o === "阵亡";
  if (!a && !u && !f)
    return { delta: 0, source: "" };
  if (f)
    return { delta: 0, source: "" };
  if (u)
    return r ? { delta: 0, source: "清算未通关" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣除30%" };
  if (r) {
    const D = $t[t] + 500;
    return { delta: Math.max(0, D - s), source: "清算通关·续存至斩杀线+500", clearWin: !0 };
  }
  if (!c)
    return { delta: 0, source: "", warn: "评价缺失或无法识别，不发奖励" };
  let h = Pm[e][c];
  const x = i || e, z = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", k = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", R = e !== t;
  let U = `副本奖励·${x} ${c}评`;
  return z ? (h = Math.floor(h * 0.5), U += "（×50%）") : (k || R) && (h = Math.floor(h * 0.6), U += "（×60%）"), { delta: h, source: U };
}
function cl(e, t = (/* @__PURE__ */ new Date()).getFullYear()) {
  const n = /^(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
  if (!n) return;
  const s = new Date(t, Number(n[1]) - 1, Number(n[2]), Number(n[3]), Number(n[4])).getTime();
  return Number.isFinite(s) ? s : void 0;
}
function Bm(e, t) {
  const n = [...e], s = t.map((i, o) => ({ m: i, k: o })).sort((i, o) => (i.m.ts ?? 1 / 0) - (o.m.ts ?? 1 / 0) || i.k - o.k).map((i) => i.m);
  let r = 0;
  for (const i of s) {
    let o = n.length;
    if (i.ts !== void 0)
      for (let l = r; l < n.length; l++) {
        const c = n[l].ts;
        if (c !== void 0 && c > i.ts) {
          o = l;
          break;
        }
      }
    n.splice(o, 0, i), r = o + 1;
  }
  return n;
}
function Vm(e) {
  let t = -1 / 0;
  return e.map((n, s) => (n.ts !== void 0 && Number.isFinite(n.ts) && (t = Math.floor(n.ts / 6e4)), { e: n, k: s, key: t })).sort((n, s) => n.key - s.key || n.k - s.k).map((n) => n.e);
}
function Um(e, t) {
  let n = e;
  return t.map((s) => n += s.delta);
}
function fn(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function As(e, t, n) {
  let s = e, r = !1;
  for (const i of t)
    s += i.delta, s < n && (r = !0), i.clear && (r = !1);
  return r;
}
function Hm(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function Wm(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const r = s ?? $t[n], i = Math.max(0, r - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${i}分（${n}级斩杀线${r}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const Lt = "rlzc";
function Gm() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function Km(e, t, n) {
  return {
    id: Gm(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function qm(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function Cc(e, t) {
  return e.packId === Ks ? e.briefing ? Ri(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function Ym(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return $e(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function Jm(e, t) {
  const n = Ym(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((r) => ({ ...r, atIndex: r.atIndex + s }))), t.manual = t.manual.filter((r) => r.atIndex < e.length && r.atIndex >= t.entryIndex), !0;
}
function Ec(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const ul = "rlzc_declined";
function Hi(e, t) {
  return `${e}:${t}`;
}
const Wi = $e;
function Mc(e, t, n) {
  const s = [];
  for (let r = Math.max(0, t); r < Math.min(n, e.length); r++) {
    if (!Wi(e[r])) continue;
    const i = Di(String(e[r].mes ?? ""));
    if (!i) continue;
    const o = s.findIndex((l) => l.name === i.name);
    o >= 0 && s.splice(o, 1), s.push(i);
  }
  return s;
}
function fs(e, t, n, s = []) {
  if (!Wi(e[t])) return null;
  const r = Eh(String(e[t].mes ?? ""), n, s);
  return r ? { ...r, index: t } : null;
}
function Zm(e, t, n, s, r = []) {
  const i = [];
  for (let o = Math.max(0, n); o <= Math.min(s, e.length - 1); o++) {
    const l = fs(e, o, t, i);
    if (l && !r.includes(Hi(o, l.info.name))) return l;
    if (l?.signal === 1) {
      const c = i.findIndex((a) => a.name === l.info.name);
      c >= 0 && i.splice(c, 1), i.push(l.info);
    }
  }
  return null;
}
function Xm(e, t, n = [], s = ci, r = 0) {
  if (t?.status === "active") return null;
  let i = -1;
  for (let l = Math.max(0, r); l < e.length; l++) if (Wi(e[l])) {
    i = l;
    break;
  }
  if (i < 0 || t && t.entryIndex === i) return null;
  const o = fs(e, i, s);
  return !o || n.includes(Hi(i, o.info.name)) ? null : o;
}
const Qm = /[■█▰●◆★▮▓]/g, eg = /[□░▱○◇☆▯▒]/g;
function tg(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const i = Number(n[2]);
    return i === 100 ? Number(n[1]) : i > 0 ? Math.round(Number(n[1]) / i * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(Qm) ?? []).length, r = (t.match(eg) ?? []).length;
  return s + r > 0 ? Math.round(s / (s + r) * 100) : null;
}
function dl(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function ng(e, t) {
  return dl(e).includes(dl(t));
}
function sg(e, t, n) {
  const s = [], r = Object.keys(n.perMessage).map(Number).sort((c, a) => c - a);
  let i = !1, o = null, l = !1;
  for (const c of r) {
    const a = n.perMessage[c], f = t.phases.find((E) => E.id === a.phase)?.name ?? "进行中", h = (E, M) => s.push({ index: c, phase: f, round: a.round, kind: E, text: M }), x = e[c]?.extra?.rlzc;
    for (const E of x?.sub?.events ?? []) E.status === "missed" && h("eventMissed", `${E.id} 未写出来：${E.reason}`);
    for (const E of x?.skippedEvents ?? []) h("eventSkipped", `${E.id} 条件不成立，已跳过：${E.reason}`);
    const z = Ja(String(e[c]?.mes ?? "")), k = c === n.entryIndex;
    if (!z) {
      k || h("missing", "本轮回复缺少 <副本> 面板"), l = !k;
      continue;
    }
    l = !1;
    const R = tg(z.progressBar);
    z.progressBar === void 0 ? h("progressUnreadable", "<副本> 中没有进度条一栏") : R === null ? h("progressUnreadable", `进度条无法读出数值：「${z.progressBar}」`) : (!i && R !== 0 && h("progressStart", `入场后第一轮的进度条应为0，实际为 ${R}`), (R < 0 || R > 100) && h("progressRange", `进度条数值 ${R} 超出 0–100`), o !== null && R < o && h("progressDrop", `进度条比上一轮低：${o} → ${R}`), o = R), i = !0;
    const U = e[c]?.extra?.rlzc?.limit, D = U?.text ? U : a.limit?.text ? { text: a.limit.text, minutes: a.limit.minutes, total: a.limit.total } : void 0;
    if (D) {
      const E = z.limit;
      if (D.minutes !== void 0) {
        const M = Ua(E);
        !E || M.remaining === null || M.total === null ? h("limit", `时限读不到「剩余时间/总时长」：写的是「${E ?? "（没有时限一栏）"}」，注入的是「${D.text}」`) : (M.remaining > D.minutes && h("limit", `剩余时间比注入值多：写的是${vn(M.remaining)}，注入的是${vn(D.minutes)}`), D.total !== void 0 && M.total !== D.total && h("limit", `总时长与注入值不一致：写的是${vn(M.total)}，注入的是${vn(D.total)}`));
      } else (!E || !ng(E, D.text)) && h("limit", `时限与注入文字不一致：写的是「${E ?? "（没有时限一栏）"}」，注入的是「${D.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: i };
}
const rg = {
  D: 2e3,
  C: 8e3,
  B: 3e4,
  A: 1e5,
  S: 3e5
}, ig = [
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
function Tc(e) {
  return ig.some((t) => e.includes(t));
}
function og(e) {
  if (e.subHype !== void 0)
    return Math.max(0, Math.min(100, Math.round(e.subHype)));
  const t = e.subHurt !== void 0 ? e.subHurt : e.bodyText ? Tc(e.bodyText) : !1;
  let n = 20;
  return e.hasEvents && (n += 20), e.hasPhaseSwitch && (n += 20), t && (n += 30), Math.min(100, n);
}
function lg(e, t) {
  return Math.round(e * 0.6 + t * 0.4);
}
function Gi(e) {
  const t = !e.packLevel || e.isRest ? e.playerLevel : e.packLevel, n = rg[t], s = !e.packLevel || e.isRest ? 0.3 : 1;
  return Math.round(n * s * (0.5 + e.heat / 100) * e.rand);
}
const ag = [10, 20, 50, 100, 200, 500, 1e3], cg = [20, 25, 15, 20, 10, 8, 2], ug = [15, 20, 15, 20, 10, 16, 4];
function dg(e, t, n) {
  const s = t.reduce((i, o) => i + o, 0);
  let r = n * s;
  for (let i = 0; i < e.length; i++)
    if (r -= t[i], r <= 0) return e[i];
  return e[e.length - 1];
}
function Ag(e) {
  const { hype: t, isCorr: n, rand: s, names: r } = e, i = t / 40, o = [], l = [], c = t >= 70 ? ug : cg;
  for (let h = 1; h <= 3; h++) {
    const x = Math.min(1, Math.max(0, i - (h - 1)));
    if (s() < x) {
      let z = dg(ag, c, s());
      n && (z = Math.max(10, Math.round(z * 0.3 / 10) * 10)), o.push(z), l.push(r[Math.floor(s() * r.length)] ?? "匿名");
    }
  }
  const a = o.reduce((h, x) => h + x, 0), u = Math.floor(a * 0.6);
  let f = "";
  return o.length === 1 ? f = `直播打赏${o[0]}×60%` : o.length > 1 && (f = `直播打赏${o.length}笔·共${a}×60%`), { count: o.length, totalFace: a, faces: o, netTotal: u, source: f, names: l };
}
const Zs = 10, Xs = 13;
function Ic(e) {
  return Zs + Math.floor(e() * (Xs - Zs + 1));
}
function Wr(e, t, n, s, r, i, o) {
  const l = t && !n;
  return !(e.scope === "inst" && !l || e.scope === "corr" && l || e.when === "hurt" && !s || e.when === "calm" && r >= 30 || e.when === "open" && !i || e.when === "end" && !o);
}
function fg(e) {
  const {
    pool: t,
    templates: n,
    packDanmaku: s = [],
    currentPhase: r,
    isInst: i,
    isRest: o,
    isHurt: l,
    hype: c,
    isOpen: a,
    isEnd: u,
    recentTexts: f,
    names: h,
    whoNames: x,
    rand: z
  } = e, k = e.count ?? Ic(z), R = [], U = new Set(f), D = t.filter(
    (p) => Wr(p, i, o, l, c, a, u)
  ), M = x.length > 0 ? n.filter(
    (p) => Wr(p, i, o, l, c, a, u)
  ) : [], ee = s.filter((p) => Wr(p, i, o, l, c, a, u) ? p.phase && p.phase.length > 0 && r ? p.phase.includes(r) : !0 : !1), te = () => h[Math.floor(z() * h.length)] ?? "匿名", X = () => x[Math.floor(z() * x.length)] ?? "";
  for (let p = 0; p < k * 5 && R.length < k; p++) {
    let m = "", v = "discuss";
    if (ee.length > 0 && z() < 0.3) {
      const ie = ee[Math.floor(z() * ee.length)];
      m = ie.text, v = ie.type;
    } else if (M.length > 0 && z() < 0.5) {
      const le = M[Math.floor(z() * M.length)];
      m = le.text.replace("{who}", X()), v = le.type;
    } else if (D.length > 0) {
      const le = D[Math.floor(z() * D.length)];
      m = le.text, v = le.type;
    }
    !m || U.has(m) || (U.add(m), R.push({ name: te(), text: m, type: v }));
  }
  const re = [...ee, ...D], C = re.length ? Math.floor(z() * re.length) : 0;
  for (let p = 0; p < re.length && R.length < k; p++) {
    const m = re[(C + p) % re.length];
    U.has(m.text) || (U.add(m.text), R.push({ name: te(), text: m.text, type: m.type }));
  }
  return R;
}
const Nc = "rlzc_live", pg = "本局直播打赏撤回", Pc = 20, cn = {
  corridorOn: "回廊直播开始。",
  corridorOff: "已下播。",
  enterOff: "进入副本，回廊直播已结束。",
  instanceOn: "本局副本直播开始。",
  instanceOff: "副本结束，直播已下播。",
  revoke: "主播在副本中死亡，本局打赏已全部撤回。"
};
function hg(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.corridor ?? {};
  return {
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0,
    corridor: { on: !!n.on, show: typeof n.show == "string" ? n.show : "", viewers: Number.isFinite(n.viewers) ? n.viewers : void 0 },
    sys: Array.isArray(t.sys) ? t.sys.filter((s) => s && typeof s.id == "number") : []
  };
}
function Rc(e, t) {
  return e.disableLive ? { show: !1, checked: !1 } : { show: !0, checked: !!t };
}
function Wt(e) {
  const t = e?.extra?.rlzc?.live;
  return t && typeof t.show == "string" && Array.isArray(t.feed) ? t : void 0;
}
function Ki(e, t, n = e.length) {
  const s = [];
  for (let r = 0; r < Math.min(n, e.length); r++) {
    const i = e[r];
    if (!i || i.is_user) continue;
    const o = Wt(i);
    o && o.show === t && s.push({ index: r, rec: o });
  }
  return s;
}
function qi(e, t) {
  return Ki(e, t).reduce((n, { rec: s }) => n + (s.tipNet || 0) - (s.revoke || 0), 0);
}
function yr(e, t) {
  let n = t.seq;
  for (const s of t.sys) n = Math.max(n, s.id);
  for (const s of e) for (const r of Wt(s)?.feed ?? []) n = Math.max(n, r.id);
  return n;
}
function mg(e, t = 30) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const r = Wt(e[s])?.feed ?? [];
    for (let i = r.length - 1; i >= 0 && n.length < t; i--) r[i].t === "msg" && n.push(r[i].text);
  }
  return n;
}
const gg = /<状态栏>([\s\S]*?)<\/状态栏>/, xg = /^(积分|位格|道具|在场)$/, vg = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;
function Lc(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = gg.exec(s.mes);
    if (r) return r[1];
  }
  return null;
}
function Yi(e, t = e.length) {
  return $c(e, t) ?? "D";
}
function Dc(e, t = "") {
  if (!e) return [];
  const n = [];
  let s = null;
  for (const i of e.split(`
`)) {
    const o = i.trim();
    if (!o || /^[━─—=\-]{3,}$/.test(o)) continue;
    const l = vg.exec(o);
    if (l) {
      s?.keys.add(l[1]);
      continue;
    }
    const c = /^(.+?)\s*[：:]\s*$/.exec(o);
    if (c) {
      s = { name: c[1].trim(), keys: /* @__PURE__ */ new Set() }, n.push(s);
      continue;
    }
    o.includes("｜") && (n.push({ name: o.split("｜")[0].trim(), keys: /* @__PURE__ */ new Set() }), s = null);
  }
  const r = [];
  return n.forEach((i, o) => {
    if (o === 0 && [...i.keys].some((c) => xg.test(c))) return;
    const l = i.name.replace(/[（(][\s\S]*$/, "").trim();
    !l || /^(陌生|路人)/.test(l) || l === "{{user}}" || t && l === t || r.includes(l) || r.push(l);
  }), r;
}
function Fc(e, t) {
  return t?.hurt !== void 0 ? t.hurt : Tc(Bi(e));
}
function yg(e) {
  const { rand: t } = e, n = Bi(e.text), s = Fc(e.text, e.sub), r = og({ subHype: e.sub?.hype, subHurt: s, hasEvents: e.hasEvents, hasPhaseSwitch: e.hasPhaseSwitch, bodyText: n }), i = lg(e.prevHeat ?? Pc, r), o = e.scope === "corridor" || e.isRest, l = Gi({
    packLevel: e.scope === "instance" ? e.packLevel : null,
    playerLevel: e.playerLevel,
    isRest: e.isRest,
    heat: i,
    rand: 0.9 + t() * 0.2
  }), c = Ic(t), a = fg({
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
    count: e.awaitAi ? Xs : c
  }), u = Ag({ hype: r, isCorr: o, rand: t, names: e.names }), f = u.faces.map((k, R) => ({ t: "tip", name: u.names[R], text: "", amount: k, net: Math.floor(k * 0.6) })), h = [];
  let x;
  e.settle && (e.settle.died && (x = e.settle.tipsBefore + u.netTotal, x > 0 ? h.push({ t: "sys", name: "", text: cn.revoke, amount: 0, net: -x }) : x = void 0), h.push({ t: "sys", name: "", text: cn.instanceOff, amount: 0, net: 0 }));
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
  return x && (z.revoke = x), e.awaitAi ? z.pending = { local: a, tips: f, sys: h, target: c } : z.feed = jc(a.slice(0, c), f, h, e.firstId, t), z;
}
function bg(e, t, n) {
  const s = Math.max(Zs, Math.min(Xs, n));
  if (!e?.length) return t.slice(0, s);
  const r = e.slice(0, Xs);
  if (r.length >= Zs) return r;
  const i = new Set(r.map((o) => o.text));
  for (const o of t) {
    if (r.length >= s) break;
    i.has(o.text) || (i.add(o.text), r.push(o));
  }
  return r;
}
function jc(e, t, n, s, r) {
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
function Oc(e, t, n, s) {
  if (!e.pending) return e;
  const { pending: r, ...i } = e, o = bg(t, r.local, r.target);
  return { ...i, feed: jc(o, r.tips, r.sys, n, s) };
}
function kg(e, t) {
  if (!e) return [];
  const n = [];
  return e.tipNet > 0 && n.push({ delta: e.tipNet, source: e.tipSource, type: "tip", at: t }), e.revoke && e.revoke > 0 && n.push({ delta: -e.revoke, source: pg, type: "tip", at: t }), n;
}
function wg(e) {
  return `其中本局直播打赏${e}分，副本内不可使用，离开副本后可用。`;
}
function zg(e, t) {
  return e && `${e}${e.endsWith("。") ? "" : "。"}${wg(t)}`;
}
function _g(e, t, n) {
  const s = Ki(e, n), r = [];
  for (const { rec: i } of s) r.push(...i.feed);
  for (const i of t.sys) i.show === n && r.push({ id: i.id, t: i.t, name: i.name, text: i.text, amount: i.amount, net: i.net });
  return r.sort((i, o) => i.id - o.id), { items: r, last: s[s.length - 1]?.rec };
}
function $g(e, t) {
  let n = "", s = -1;
  for (const r of t.sys) r.id > s && (s = r.id, n = r.show);
  for (const r of e) {
    const i = Wt(r);
    if (i)
      for (const o of i.feed) o.id > s && (s = o.id, n = i.show);
  }
  return n;
}
function Sg(e, t, n, s = /* @__PURE__ */ new Set()) {
  const r = n.inInstance ? "instance" : "corridor", i = n.inInstance ? n.instanceLive : t.corridor.on, o = n.inInstance ? n.instanceLive ? n.instanceShow ?? "" : "" : i ? t.corridor.show : $g(e, t), l = { on: i, canToggle: !n.inInstance, scope: r, viewers: 0, heat: 0, tipTotal: 0, injectToAI: n.injectToAI, feed: [], lastTip: null };
  if (!o) return l;
  const { items: c, last: a } = _g(e, t, o), u = c.filter((x) => !s.has(x.id));
  let f = 0, h = null;
  for (const x of u)
    f += x.net, x.t === "tip" && (h = { id: x.id, net: x.net });
  return {
    ...l,
    viewers: i ? a?.viewers ?? n.startViewers ?? 0 : 0,
    heat: i ? a?.heat ?? Pc : 0,
    tipTotal: f,
    feed: u.slice(-60),
    lastTip: h
  };
}
const Cg = ["小满", "好运来", "路过的D级", "一个路过的A级", "数据党", "理性讨论", "吃瓜", "夜班保安", "柠檬汁", "阿柒", "东区卖菜的", "西区摆摊的", "情报社小号", "失眠第三天", "房租交不起", "今天也在种土豆", "匿名", "光幕前的咸鱼", "刚通关的C级", "排行榜第九十九", "不想进本", "炸鱼被抓过", "黑市常客", "训练场打卡人", "药剂站熬夜班", "公会跑腿的", "一个路人", "今日份幸运", "积分快见底", "刚升B级", "看录像长大的", "老观众", "新来的", "别叫我大佬", "蹲一个结算", "白开水", "半夜不睡", "又是我", "打工人", "瓜田里的猹", "慢热", "晴天", "阿九", "十一", "小绿", "老周", "木子", "苏苏", "七七", "一颗橘子", "等天亮", "北风", "不吃香菜", "没抢到号", "退役S级", "D级万岁", "靠运气活着", "只看不说", "路过打个卡", "最后一排"], Eg = [{ type: "praise", text: "这反应速度，不愧是主播" }, { type: "praise", text: "冷静得不像第一次进这个级别的本", scope: "inst" }, { type: "praise", text: "刚才那个判断绝了" }, { type: "praise", text: "主播脑子转得是真快" }, { type: "praise", text: "这波我服" }, { type: "praise", text: "稳，太稳了" }, { type: "praise", text: "讲道理，换我早慌了" }, { type: "praise", text: "这就是高手吗" }, { type: "praise", text: "看得我手心出汗，主播还面不改色" }, { type: "praise", text: "刚才那句话说得漂亮" }, { type: "praise", text: "细节拉满，这都注意到了", scope: "inst" }, { type: "praise", text: "主播说话好有条理" }, { type: "praise", text: "这才叫会玩" }, { type: "praise", text: "就冲这个判断，关注了" }, { type: "praise", text: "有勇有谋" }, { type: "praise", text: "比上一个主播强多了" }, { type: "praise", text: "队友拖后腿，主播一个人在带", scope: "inst" }, { type: "praise", text: "这个位置站得好", scope: "inst" }, { type: "praise", text: "我宣布这是本周最佳直播" }, { type: "praise", text: "主播镇定得让我也镇定了" }, { type: "praise", text: "那个眼神，太帅了" }, { type: "praise", text: "心态真好，要是我早骂人了" }, { type: "praise", text: "这个节奏把握得好", scope: "inst" }, { type: "praise", text: "看出来是做过功课的" }, { type: "praise", text: "夸一句，主播是真的会说话" }, { type: "praise", text: "一句话就把场面稳住了", scope: "inst" }, { type: "praise", text: "这份胆量我是没有" }, { type: "praise", text: "学到了，下次我也这么干" }, { type: "praise", text: "主播好好看" }, { type: "praise", text: "声音也好听，别下播" }, { type: "praise", text: "越看越顺眼" }, { type: "praise", text: "这气质，放在哪个本都是主角" }, { type: "praise", text: "能屈能伸，佩服" }, { type: "praise", text: "刚才那一下我起立鼓掌" }, { type: "praise", text: "不慌不忙，高手风范" }, { type: "praise", text: "回廊里也过得这么讲究，爱了", scope: "corr" }, { type: "praise", text: "主播种的菜看着真水灵", scope: "corr" }, { type: "praise", text: "这手艺可以去西区摆摊了", scope: "corr" }, { type: "praise", text: "休整都不忘练，怪不得排名涨", scope: "corr" }, { type: "praise", text: "房间收拾得真干净", scope: "corr" }, { type: "bless", text: "祝平安出来！！", scope: "inst" }, { type: "bless", text: "主播一定要活着回来", scope: "inst" }, { type: "bless", text: "保佑保佑" }, { type: "bless", text: "冲啊主播！" }, { type: "bless", text: "这把一定能过", scope: "inst" }, { type: "bless", text: "结算见！", scope: "inst", when: "end" }, { type: "bless", text: "平安就好，评级无所谓", scope: "inst" }, { type: "bless", text: "等你出来请你吃饭", scope: "inst" }, { type: "bless", text: "好运加满，霉运退散" }, { type: "bless", text: "希望别再有人出事了", scope: "inst", when: "hurt" }, { type: "bless", text: "主播加油，我在东区超市门口看着呢" }, { type: "bless", text: "撑住，天总会亮的", scope: "inst" }, { type: "bless", text: "别怕，我们都在" }, { type: "bless", text: "好人一生平安" }, { type: "bless", text: "这波过了就能歇歇了", scope: "inst" }, { type: "bless", text: "下个副本抽个简单的吧", scope: "corr" }, { type: "bless", text: "注意安全，别逞强", scope: "inst" }, { type: "bless", text: "保重身体啊", when: "hurt" }, { type: "bless", text: "受伤了先处理伤口", scope: "inst", when: "hurt" }, { type: "bless", text: "一路绿灯，一路绿灯" }, { type: "bless", text: "今天也要好好活着" }, { type: "bless", text: "愿系统对你手下留情" }, { type: "bless", text: "别哭，我们陪你", when: "hurt" }, { type: "bless", text: "等着看你升级" }, { type: "bless", text: "最后一口气了，撑住", scope: "inst", when: "end" }, { type: "bless", text: "最后几轮，稳住！", scope: "inst", when: "end" }, { type: "bless", text: "主播今天早点睡", scope: "corr" }, { type: "bless", text: "休息好了再进本", scope: "corr" }, { type: "bless", text: "希望房租别涨", scope: "corr" }, { type: "bless", text: "回廊安稳一天是一天", scope: "corr" }, { type: "discuss", text: "现在什么情况，我刚进来" }, { type: "discuss", text: "来了来了，这把什么本", scope: "inst", when: "open" }, { type: "discuss", text: "开播了开播了", when: "open" }, { type: "discuss", text: "新主播？没见过", when: "open" }, { type: "discuss", text: "先别吵，看局势" }, { type: "discuss", text: "我觉得还有线索没找到", scope: "inst" }, { type: "discuss", text: "按往届，这本不好打", scope: "inst" }, { type: "discuss", text: "有没有人看过这本的录像", scope: "inst" }, { type: "discuss", text: "黑市那种录像别全信" }, { type: "discuss", text: "这队人各怀心思吧", scope: "inst" }, { type: "discuss", text: "现在还剩几个人？", scope: "inst" }, { type: "discuss", text: "前面说的那个我也注意到了" }, { type: "discuss", text: "理性讨论，别带节奏" }, { type: "discuss", text: "我赌主播能过" }, { type: "discuss", text: "有人算过这把能拿什么评吗", scope: "inst" }, { type: "discuss", text: "主播刚才是不是话里有话" }, { type: "discuss", text: "这个人说话一直留半句", scope: "inst" }, { type: "discuss", text: "注意细节，刚才那句不对劲", scope: "inst" }, { type: "discuss", text: "我在光幕前面站了一个小时了" }, { type: "discuss", text: "回放能看吗，刚才没看清" }, { type: "discuss", text: "有没有懂的解释一下" }, { type: "discuss", text: "你们看出来了吗，我看不出来" }, { type: "discuss", text: "这一段要是剪进录像会卖爆" }, { type: "discuss", text: "楼上别剧透……虽然我也不知道" }, { type: "discuss", text: "好无聊，快进", when: "calm" }, { type: "discuss", text: "主播在发呆吗", when: "calm" }, { type: "discuss", text: "挂着当背景音了", when: "calm" }, { type: "discuss", text: "去泡了碗面回来还是这样", when: "calm" }, { type: "discuss", text: "这么安静，要出事了吧", scope: "inst", when: "calm" }, { type: "discuss", text: "暴风雨前的宁静", scope: "inst", when: "calm" }, { type: "discuss", text: "啊啊啊有人倒了", scope: "inst", when: "hurt" }, { type: "discuss", text: "刚才那一下我没敢看", when: "hurt" }, { type: "discuss", text: "又走一个……", scope: "inst", when: "hurt" }, { type: "discuss", text: "手在抖吧，换我也抖", when: "hurt" }, { type: "discuss", text: "快结束了吧", scope: "inst", when: "end" }, { type: "discuss", text: "结算前最后几轮最容易出事", scope: "inst", when: "end" }, { type: "discuss", text: "今天种什么？", scope: "corr" }, { type: "discuss", text: "回廊直播也有人看，我服了我自己", scope: "corr" }, { type: "discuss", text: "排行榜又变了，你们看了吗", scope: "corr" }, { type: "discuss", text: "下个本打算报哪个？", scope: "corr" }, { type: "cold", text: "别高兴太早" }, { type: "cold", text: "我看悬" }, { type: "cold", text: "这把凉了吧" }, { type: "cold", text: "就这？" }, { type: "cold", text: "也就一般" }, { type: "cold", text: "运气好而已" }, { type: "cold", text: "换个人也能做到" }, { type: "cold", text: "等着翻车吧" }, { type: "cold", text: "这种判断，迟早出事" }, { type: "cold", text: "看了半天也没看出哪里厉害" }, { type: "cold", text: "太磨叽了" }, { type: "cold", text: "说了这么多，一点用没有" }, { type: "cold", text: "我押失败", scope: "inst" }, { type: "cold", text: "评级能拿个C就不错了", scope: "inst" }, { type: "cold", text: "队友再强也带不动", scope: "inst" }, { type: "cold", text: "太自信了，这本专治自信", scope: "inst" }, { type: "cold", text: "往届比这厉害的都栽在这", scope: "inst" }, { type: "cold", text: "真以为能全身而退？", scope: "inst" }, { type: "cold", text: "没意思，我换台了" }, { type: "cold", text: "这操作也就D级水平" }, { type: "cold", text: "这不是冷静，是反应慢" }, { type: "cold", text: "别吹了，看结算", scope: "inst" }, { type: "cold", text: "种菜有什么好看的", scope: "corr" }, { type: "cold", text: "回廊里直播，缺积分缺疯了吧", scope: "corr" }, { type: "cold", text: "天天摆烂，等着被清算吧", scope: "corr" }, { type: "envy", text: "凭什么这种人能上热门" }, { type: "envy", text: "我直播三天没人看，这也行？" }, { type: "envy", text: "长得好就是占便宜" }, { type: "envy", text: "又是这种运气好的" }, { type: "envy", text: "打赏的是托吧" }, { type: "envy", text: "我也想有人给我刷" }, { type: "envy", text: "这点本事也能拿打赏" }, { type: "envy", text: "同样是D级进来的，差距怎么这么大" }, { type: "envy", text: "分到这么好的队友，换我我也行", scope: "inst" }, { type: "envy", text: "酸了，真的酸了" }, { type: "envy", text: "一进来就有大佬带，羡慕不来", scope: "inst" }, { type: "envy", text: "这热度买的吧" }, { type: "envy", text: "凭什么打赏都往这边跑" }, { type: "envy", text: "我通关都没人看" }, { type: "envy", text: "排行榜上那些名字，一半靠运气" }, { type: "envy", text: "有人天生就是被偏爱的" }, { type: "envy", text: "我要是有这配置，比这还稳", scope: "inst" }, { type: "envy", text: "住的地方比我好十倍", scope: "corr" }, { type: "envy", text: "在回廊都能开播赚积分，羡慕哭了", scope: "corr" }, { type: "envy", text: "这菜种得，比我吃的还好", scope: "corr" }, { type: "smear", text: "装什么装" }, { type: "smear", text: "演的吧，这反应太假了" }, { type: "smear", text: "人设立得挺好" }, { type: "smear", text: "会说话而已，真打起来就露馅" }, { type: "smear", text: "这种人最会卖队友" }, { type: "smear", text: "表面客气，背地里肯定算计着" }, { type: "smear", text: "我不信真这么淡定" }, { type: "smear", text: "刚才那个眼神，心虚了吧" }, { type: "smear", text: "故意卖惨要打赏" }, { type: "smear", text: "刚才明明可以救，没救", scope: "inst", when: "hurt" }, { type: "smear", text: "自私，只顾自己", scope: "inst" }, { type: "smear", text: "队友出事了还这么冷静，冷血吧", scope: "inst", when: "hurt" }, { type: "smear", text: "这是在拿别人探路", scope: "inst" }, { type: "smear", text: "满嘴好话，一件实事没干" }, { type: "smear", text: "装新人的吧" }, { type: "smear", text: "就是冲着打赏来的" }, { type: "smear", text: "看着就不是好人" }, { type: "smear", text: "别被骗了，都是算计好的" }, { type: "smear", text: "下了本也要直播，吃相难看", scope: "corr" }, { type: "smear", text: "种田人设，炒给谁看", scope: "corr" }, { type: "rumor", text: "听说积分是借的，真的假的" }, { type: "rumor", text: "肯定是抱大腿进来的" }, { type: "rumor", text: "我朋友说在黑市见过这人" }, { type: "rumor", text: "据说上一个本是被人带飞的" }, { type: "rumor", text: "听说欠了一屁股积分" }, { type: "rumor", text: "有人说是买了攻略才敢进的", scope: "inst" }, { type: "rumor", text: "听说被公会踢出来过" }, { type: "rumor", text: "情报社的人说，这人被抽查过" }, { type: "rumor", text: "有人在西区看到这人跟黑市贩子说话" }, { type: "rumor", text: "据说是走后门才越级的" }, { type: "rumor", text: "听说上个本的队友都没出来" }, { type: "rumor", text: "有人说这人其实早就待清算了" }, { type: "rumor", text: "我听说排名是刷的" }, { type: "rumor", text: "传闻进本前偷偷买了防抽查道具" }, { type: "rumor", text: "听说有人专门花钱买这人的录像" }], Mg = [{ type: "praise", text: "{who}刚才那下好帅" }, { type: "praise", text: "{who}挺靠谱的" }, { type: "bless", text: "{who}别出事啊" }, { type: "bless", text: "心疼{who}" }, { type: "bless", text: "{who}还好吗", when: "hurt" }, { type: "discuss", text: "{who}靠谱吗，我看不透" }, { type: "discuss", text: "{who}又不说话了" }, { type: "discuss", text: "{who}刚才那句什么意思" }, { type: "discuss", text: "盯紧{who}" }, { type: "discuss", text: "{who}和主播配合挺默契" }, { type: "discuss", text: "{who}好像知道点什么" }, { type: "cold", text: "{who}也就那样" }, { type: "cold", text: "指望{who}？算了吧" }, { type: "envy", text: "凭什么{who}也有人喜欢" }, { type: "smear", text: "我就说{who}有问题" }, { type: "smear", text: "{who}在演" }, { type: "smear", text: "{who}那个表情不对劲" }, { type: "rumor", text: "听说{who}在排行榜上挂过名" }, { type: "rumor", text: "我听说{who}以前出过事" }, { type: "rumor", text: "{who}跟主播是不是早就认识" }], Tg = {
  names: Cg,
  pool: Eg,
  templates: Mg
}, is = /* @__PURE__ */ new Set(), nn = [];
let _t = null, Ts = [], Gr = null;
function ps() {
  for (const e of Ts.slice())
    try {
      e();
    } catch (t) {
      console.warn("[rlzc] RLZC_LIVE 订阅回调出错", t);
    }
}
function Ig() {
  return 1500 + Math.random() * 1500;
}
function Bc() {
  _t = null;
  const e = nn.shift();
  e !== void 0 && (is.delete(e), ps()), nn.length && (_t = setTimeout(Bc, Ig()));
}
function Ji(e, t = !1) {
  if (t && nn.length) {
    for (const n of nn) is.delete(n);
    nn.length = 0, _t && clearTimeout(_t), _t = null;
  }
  if (e.length) {
    for (const n of e)
      is.add(n.id), nn.push(n.id);
    _t ? ps() : Bc();
  }
}
function Ng() {
  _t && clearTimeout(_t), _t = null, nn.length = 0, is.clear();
}
function Pg(e) {
  Gr = e, window.RLZC_LIVE = {
    get: () => Gr.view(is),
    subscribe(t) {
      return typeof t != "function" ? () => {
      } : (Ts.push(t), () => {
        Ts = Ts.filter((n) => n !== t);
      });
    },
    toggle: () => Gr.toggle()
  };
}
function Rg(e, t = 100) {
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
function Lg() {
  const e = document.getElementById("mes_stop");
  return !!e && getComputedStyle(e).display !== "none";
}
const Vc = "rlzc_market", Al = { D: 0, C: 1, B: 2, A: 3, S: 4 }, Uc = { D: 1e3, C: 5e3, B: 2e4, A: 8e4, S: 3e5 }, fl = 10, Dg = 0.8, Fg = "ending", jg = "rating", Hc = ["S", "A", "B", "C", "D"];
function Og(e, t) {
  return Al[e] - Al[t];
}
function Bg(e) {
  return e <= -2 ? 0.85 : e === -1 ? 0.75 : e === 0 ? 0.6 : e === 1 ? 0.4 : e === 2 ? 0.25 : 0.15;
}
const _s = {
  "le-1": { S: 0.15, A: 0.3, B: 0.3, C: 0.17, D: 0.08 },
  0: { S: 0.08, A: 0.2, B: 0.35, C: 0.25, D: 0.12 },
  1: { S: 0.04, A: 0.12, B: 0.3, C: 0.32, D: 0.22 },
  ge2: { S: 0.02, A: 0.08, B: 0.25, C: 0.35, D: 0.3 }
};
function Vg(e) {
  return e <= -1 ? _s["le-1"] : e === 0 ? _s[0] : e === 1 ? _s[1] : _s.ge2;
}
function br(e) {
  return Math.round(e * 100) / 100;
}
function Ug(e, t) {
  const n = 0.93 + t() * 0.14;
  return Math.max(1.01, br(1 / e * Dg * n));
}
function Wc(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function Hn(e, t, n, s) {
  return { id: e, label: t, p: n, odds: Ug(n, s) };
}
function Gc(e, t, n) {
  const s = {
    id: t.id,
    kind: e,
    q: t.q,
    options: [Hn("yes", t.yes, t.p, n), Hn("no", t.no, br(1 - t.p), n)],
    judge: t.judge
  };
  return t.judgeNo && (s.judgeNo = t.judgeNo), t.by && (s.by = t.by), s;
}
function Hg(e) {
  const { pack: t, rand: n } = e;
  if (t.rest) return [];
  const s = Og(t.level, e.playerLevel), r = Bg(s), i = [
    { id: Fg, kind: "ending", q: "本局结果", options: [Hn("win", "通关", r, n), Hn("lose", "失败", br(1 - r), n)] }
  ], o = Vg(s);
  if (i.push({ id: jg, kind: "rating", q: "本局评价", options: Hc.map((l) => Hn(l, l, o[l], n)) }), e.withEvents) for (const l of Ah(t)) i.push(Gc("event", l, n));
  return i;
}
const pl = 2, Wg = 5;
function fi(e, t, n) {
  const s = e.map((i, o) => o), r = [];
  for (; r.length < t && s.length; ) r.push(s.splice(Math.floor(n() * s.length), 1)[0]);
  return r.sort((i, o) => i - o).map((i) => e[i]);
}
function Gg(e, t, n) {
  if (!t) return { markets: e.filter((o) => o.kind === "ending" || o.kind === "rating") };
  const s = pl + Math.floor(n() * (Wg - pl + 1)), r = 1 + Math.floor(n() * 2), i = fi(e, s - r, n);
  return { markets: i, plan: { total: s, freak: r, order: e.map((o) => o.id) }, reserve: e.filter((o) => !i.includes(o)) };
}
function Kg(e, t, n) {
  const s = e.markets.filter((a) => a.kind !== "freak"), r = e.reserve ?? [];
  if (!e.plan) return { markets: [...s, ...t ? hl(t, n) : []], reserve: r };
  const i = hl(fi(t ?? [], e.plan.freak, n), n), o = fi(r, e.plan.freak - i.length, n), l = (a) => e.plan.order.indexOf(a.id);
  return { markets: [...[...s, ...o].sort((a, u) => l(a) - l(u)), ...i], reserve: r.filter((a) => !o.includes(a)) };
}
function qg(e, t) {
  return e - Math.max(0, t);
}
function Kc(e) {
  const t = Uc[e.playerLevel], n = qg(e.balance, e.lockedTips), s = Math.max(0, Math.min(t - e.already, n)), r = e.stake, i = Number.isFinite(r) && r > 0 && e.balance - r < $t[e.playerLevel];
  let o;
  return !Number.isInteger(r) || r < fl ? o = `最少押${fl}` : e.already + r > t ? o = "超过单注上限" : r > n && (o = "可用余额不足"), { ok: !o, reason: o, cap: t, max: s, belowKill: i };
}
function Yg(e, t) {
  return e.tickets.filter((n) => n.market === t).reduce((n, s) => n + s.stake, 0);
}
function Jg(e, t) {
  return Object.keys(e).map(Number).filter((n) => n >= t).length >= 2;
}
const qc = ["通关", "成功", "胜利"], Zi = ["死亡", "阵亡"];
function Zg(e) {
  return Zi.includes(String(e ?? "").trim());
}
function Xg(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  return Zi.includes(n) ? { kind: "lost", index: t } : qc.includes(n) ? { kind: "option", option: "win", index: t } : n === "失败" ? { kind: "option", option: "lose", index: t } : { kind: "refund", index: t };
}
function Qg(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  if (Zi.includes(n)) return { kind: "lost", index: t };
  const s = String(e.rating ?? "").trim().toUpperCase();
  return qc.includes(n) && Hc.includes(s) ? { kind: "option", option: s, index: t } : { kind: "refund", index: t };
}
function ex(e, t) {
  const n = t.outcome, s = e.by !== void 0 ? t.phaseEnds[e.by] : void 0;
  let r;
  s !== void 0 && (!n.ended || n.endIndex === void 0 || s < n.endIndex) ? r = s : n.ended && (r = n.endIndex ?? -1);
  let i = !0, o = !1, l = 0;
  for (const a of t.rounds) {
    if (r !== void 0 && a.index > r) break;
    if (!(n.ended && n.endedBy === "tag" && a.index === n.endIndex))
      if (l++, a.state === "ok") {
        if (a.hits[e.id] === !0) return { kind: "option", option: "yes", index: a.index };
        if (e.judgeNo && a.hits[`${e.id}:no`] === !0) return { kind: "option", option: "no", index: a.index };
      } else
        i = !1, a.state === "pending" && (o = !0);
  }
  if (r === void 0) return null;
  const c = n.ended && r === (n.endIndex ?? -1);
  return c && n.endedBy === "tag" && Zg(n.result) ? { kind: "lost", index: r } : c && n.endedBy !== "tag" ? { kind: "refund", index: r } : o ? null : i && l > 0 ? { kind: "option", option: "no", index: r } : { kind: "refund", index: r };
}
function tx(e) {
  const t = {};
  for (const n of e.markets)
    e.outcome.voided ? t[n.id] = { kind: "refund", index: -1 } : n.kind === "ending" ? t[n.id] = Xg(e.outcome) : n.kind === "rating" ? t[n.id] = Qg(e.outcome) : t[n.id] = ex(n, e);
  return t;
}
function pi(e, t) {
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
function nx(e, t) {
  const n = {}, s = pi({ ...e, frozen: void 0 }, t);
  for (const r of e.tickets) n[r.id] = s[r.id] ?? { stamp: "refund", index: -1 };
  return n;
}
function sx(e, t, n, s = []) {
  const r = new Set(Array.isArray(s) ? s : [s]);
  return Object.keys(t).map(Number).filter((i) => i > n && $e(e[i])).sort((i, o) => i - o).map((i) => {
    const o = e[i]?.extra?.rlzc?.sub;
    return o && !o.skipped && o.markets && typeof o.markets == "object" ? { index: i, state: "ok", hits: o.markets } : !o && r.has(i) ? { index: i, state: "pending", hits: {} } : { index: i, state: "miss", hits: {} };
  });
}
function rx(e, t) {
  const n = [];
  if (e.frozen) return n;
  for (const s of e.markets)
    s.kind !== "event" && s.kind !== "freak" || t[s.id] || !s.judge || (n.push({ id: s.id, judge: s.judge }), s.judgeNo && n.push({ id: `${s.id}:no`, judge: s.judgeNo }));
  return n;
}
function Yc(e, t) {
  return e.markets.find((n) => n.id === t);
}
function ix(e, t) {
  return e?.options.find((n) => n.id === t)?.label ?? t;
}
function ox(e, t) {
  const n = Yc(e, t.market);
  return `下注·${e.packName}·${n?.q ?? t.market}·${ix(n, t.option)}`;
}
function lx(e, t, n) {
  const s = [];
  for (const r of e.tickets) {
    s.push({ delta: -r.stake, source: ox(e, r), type: "bet", at: r.at, pos: r.after, seq: r.seq ?? 0 });
    const i = t[r.id];
    if (!i || i.stamp === "lose") continue;
    const o = Yc(e, r.market)?.q ?? r.market, l = (i.index >= 0 ? n(i.index) : void 0) ?? r.at;
    i.stamp === "win" ? s.push({ delta: Wc(r.stake, r.odds), source: `赌票兑付·${e.packName}·${o}`, type: "bet", at: l, pos: i.index }) : s.push({ delta: r.stake, source: `赌票退还·${e.packName}·${o}`, type: "bet", at: l, pos: i.index });
  }
  return s;
}
const ax = '你是回廊黑市的庄家，要为主播即将进入的副本开几个离谱但有趣的盘口。你只知道下面这些公开信息，不知道剧情会怎么走。出2到3道是非题：题目20字以内，称{{user}}为主播，不用性别代词；必须能从之后的正文里直接看出是或否；不要问结局、评价和生死，那些已经有盘了；不要涉及公开信息以外的设定。每题给一个你估计「是」的概率p（0.05到0.95）。只输出JSON：[{"q":"题目","judge":"用来判断是否发生的一句陈述","p":0.3}]', cx = 4e3;
function ux(e) {
  const n = xc(e).split(`
`), s = n.findIndex((i) => /副本简报/.test(i));
  return (s >= 0 ? n.slice(s, s + 6) : n).join(`
`).trim().slice(0, 1e3);
}
function dx(e) {
  const t = e.docs.filter((s) => s.md && s.md.trim()).map((s) => `## ${s.title}
${s.md.trim()}`).join(`

`).slice(0, cx), n = [
    `【副本】${e.name}　等级：${e.level}`,
    `【简报】
${e.briefing || "（无）"}`,
    `【公开资料】
${t || "（无）"}`
  ].join(`

`);
  return { system: ax, user: n };
}
function Ax(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), r = t.lastIndexOf("]");
  if (s < 0 || r <= s) throw new je("返回里没有 JSON 数组");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new je("返回的 JSON 无法解析");
  }
  if (!Array.isArray(i)) throw new je("返回的不是 JSON 数组");
  const o = [];
  for (const l of i) {
    if (!l || typeof l.q != "string" || typeof l.judge != "string") continue;
    const c = l.q.trim(), a = l.judge.trim(), u = typeof l.p == "number" ? l.p : Number(l.p);
    if (!(!c || c.length > 20 || !a || !Number.isFinite(u) || u < 0.05 || u > 0.95) && (o.push({ q: c, judge: a, p: br(u) }), o.length >= 3))
      break;
  }
  if (!o.length) throw new je("没有合格的题");
  return o;
}
async function fx(e, t, n = 1) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return Ax(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
function hl(e, t) {
  return e.map((n, s) => Gc("freak", { id: `F${s + 1}`, q: n.q, yes: "会", no: "不会", p: n.p, judge: n.judge }, t));
}
function px(e) {
  return `{{user}}在黑市押了自己本局失败，押注${e}分。`;
}
function hx(e) {
  return `{{user}}刚在赌坊输掉${e}分，余额已低于斩杀线。`;
}
function mx(e) {
  return `{{user}}刚在赌坊一局赢了${e}分。`;
}
function gx(e) {
  return e.kind === "betLose" ? px(e.amount) : e.kind === "casinoLoss" ? hx(e.amount) : mx(e.amount);
}
function hi(e, t) {
  if (t.kind === "betLose") {
    const n = e.find((s) => s.kind === "betLose");
    if (n && !n.sent) return e.map((s) => s === n ? { ...s, amount: s.amount + t.amount, after: t.after } : s);
  }
  return [...e, t];
}
function xx(e) {
  return e.filter((t) => !t.sent);
}
function vx(e) {
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
const Kr = (e) => Array.from({ length: e }, (t, n) => n + 1), Xi = [
  {
    id: "bell",
    name: "听钟",
    desc: "押钟声单双、大小，或猜几下。",
    bets: [
      { id: "odd", label: "单", mult: 1.6 },
      { id: "even", label: "双", mult: 1.6 },
      { id: "small", label: "小", mult: 1.6 },
      { id: "big", label: "大", mult: 1.6 },
      ...Kr(12).map((e) => ({ id: `n${e}`, label: `${e}下`, mult: 9.6 }))
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
      ...Kr(20).map((e) => ({ id: `d${e}`, label: `${e}号`, mult: 16 }))
    ]
  },
  {
    id: "lot",
    name: "抽签",
    desc: "三支签，一支大吉。",
    bets: Kr(3).map((e) => ({ id: `s${e}`, label: `第${e}支`, mult: 2.4 }))
  },
  {
    id: "card",
    name: "翻牌",
    desc: "和庄家各翻一张，大的赢，平局庄家赢。",
    bets: [{ id: "high", label: "比大小", mult: 1.73 }]
  }
];
function wn(e) {
  return Xi.find((t) => t.id === e);
}
function Pn(e, t) {
  return Math.min(e, 1 + Math.floor(t() * e));
}
function yx(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function bx(e, t, n, s) {
  const r = wn(e), i = r?.bets.find((u) => u.id === t);
  if (!r || !i) return null;
  let o = !1, l = "", c = [];
  switch (r.id) {
    case "bell": {
      const u = Pn(12, s);
      c = [u], i.id === "odd" || i.id === "even" ? (o = u % 2 === 1 == (i.id === "odd"), l = `${u}下，${u % 2 ? "单" : "双"}`) : i.id === "small" || i.id === "big" ? (o = u <= 6 == (i.id === "small"), l = `${u}下，${u <= 6 ? "小" : "大"}`) : (o = i.id === `n${u}`, l = `${u}下`);
      break;
    }
    case "door": {
      const u = Pn(20, s);
      if (c = [u], i.id.startsWith("r")) {
        const f = Number(i.id.slice(1));
        o = u > (f - 1) * 5 && u <= f * 5;
      } else o = i.id === `d${u}`;
      l = `${u}号门`;
      break;
    }
    case "lot": {
      const u = Pn(3, s);
      c = [u], o = i.id === `s${u}`, l = `第${u}支大吉`;
      break;
    }
    case "card": {
      const u = Pn(13, s), f = Pn(13, s);
      c = [u, f], o = u > f, l = `你 ${u}，庄家 ${f}`;
      break;
    }
  }
  const a = o ? yx(n, i.mult) : 0;
  return { win: o, payout: a, net: o ? a - n : -n, result: l, label: `押${i.label}`, faces: c };
}
function kx(e, t) {
  return `赌坊·${wn(e)?.name ?? e}·${t}`;
}
function ml(e) {
  const t = Xi.map((i) => i.id), n = Math.min(t.length - 1, Math.floor(e() * t.length)), s = t.filter((i, o) => o !== n), r = Math.min(s.length - 1, Math.floor(e() * s.length));
  return [t[n], s[r]];
}
function wx(e, t, n) {
  const s = e.tables.length === 2 && e.tables.every((o) => wn(o));
  if (s && e.key === t) return { tables: e.tables, key: t, changed: !1 };
  const r = (o) => s && o.length === 2 && o.every((l) => e.tables.includes(l));
  let i = ml(n);
  for (let o = 0; o < 20 && r(i); o++) i = ml(n);
  return r(i) && (i = Xi.map((o) => o.id).filter((o) => !e.tables.includes(o))), { tables: i, key: t, changed: !0 };
}
const mi = "rlzc", Is = { optIn: !1, injectToAI: !1, source: "local", freq: 3 }, Jc = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, Dn = {
  depths: { token: 4, progress: 4, turn: 0, ledger: 4, live: 4, format: 0 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  statusBarFix: !0,
  genericCaps: { ...ss },
  subApi: structuredClone(Jc),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0, live: !0, statusBar: !0, auditDebug: !0, manualDebug: !0, injectionDebug: !0, formatDebug: !0 },
  live: { ...Is }
}, A = /* @__PURE__ */ ur({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(Dn),
  packs: [],
  lastInjection: rs,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: [],
  /** 黑市（第四期）：本局盘口、赌票、摆桌 */
  market: av(),
  /** 入场提示小卡片（右上角，不挡操作）；同一时间只有一张 */
  entryCard: null,
  /** 本段聊天（开头或上一个副本结算之后）里出现过简报、但没收录的副本：「手动选择副本」里也能选 */
  seenGeneric: []
});
function Ye(e) {
  return JSON.parse(JSON.stringify(e));
}
function hs(...e) {
  A.settings.debug && console.log("[rlzc]", ...e);
}
function zx() {
  const e = me().extensionSettings, t = e[mi] ?? {}, n = {
    ...structuredClone(Dn),
    ...t,
    depths: { ...Dn.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? Dn.depths.ledger },
    ball: { ...Dn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => Ga(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    statusBarFix: typeof t.statusBarFix == "boolean" ? t.statusBarFix : !0,
    genericCaps: { ...ss, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(Jc),
      ...t.subApi ?? {},
      presets: Array.isArray(t.subApi?.presets) ? t.subApi.presets.map(Sm) : [],
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
    live: _x(t.live)
  };
  e[mi] = n, A.settings = n, A.packs = Li(n.customPacks);
}
function _x(e) {
  const t = e ?? {}, n = Math.floor(Number(t.freq));
  return {
    optIn: typeof t.optIn == "boolean" ? t.optIn : Is.optIn,
    injectToAI: typeof t.injectToAI == "boolean" ? t.injectToAI : Is.injectToAI,
    source: t.source === "ai" ? "ai" : "local",
    freq: Number.isFinite(n) ? Math.max(1, Math.min(10, n)) : Is.freq
  };
}
function ke() {
  me().extensionSettings[mi] = /* @__PURE__ */ ae(A.settings), me().saveSettingsDebounced(), A.packs = Li(A.settings.customPacks);
}
function $x(e, t) {
  const n = A.settings.subApi, s = n.presets.find((r) => r.id === n.presetId);
  s && Cm(s, e, t) && ke();
}
function Sx(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = Ga(t);
  if (n.length) return n;
  const s = t;
  return Li([]).some((r) => r.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (A.settings.customPacks = [...A.settings.customPacks.filter((r) => r.id !== s.id), s], ke(), []);
}
function Cx(e) {
  A.settings.customPacks = A.settings.customPacks.filter((t) => t.id !== e), ke();
}
function nt() {
  const e = gt()[_c];
  return !e || Array.isArray(e) ? {} : e;
}
function zn(e) {
  gt()[_c] = e, Je();
}
function pn(e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (o.is_user || o.is_system) continue;
    const l = o.extra?.rlzc?.ledger;
    if (!Array.isArray(l)) continue;
    const c = [o.send_date, o.gen_finished].map((a) => a instanceof Date ? a.getTime() : Date.parse(String(a ?? ""))).find((a) => Number.isFinite(a));
    for (const a of l) t.push({ e: { ...a, mesIndex: i, ts: c }, pos: i, g: 0, seq: 0 });
  }
  for (const { pos: i, seq: o, ...l } of uv(e))
    t.push({ e: { ...l, mesIndex: i, ts: cl(l.at) }, pos: i < 0 ? Number.MAX_SAFE_INTEGER : i, g: o === void 0 ? 1 : 2, seq: o ?? 0 });
  t.sort((i, o) => i.pos - o.pos || i.g - o.g || i.seq - o.seq);
  const n = t.map((i) => i.e), r = (nt().adjust ?? []).map((i) => ({
    delta: i.amount,
    source: `手动：${i.note}`,
    type: "manual",
    at: i.at,
    mesIndex: -1,
    ts: i.ts ?? cl(i.at)
  }));
  return Vm(Bm(n, r));
}
function St(e) {
  const t = nt();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const r = e[s];
    if (r.is_user || !r.mes) continue;
    const i = n.exec(r.mes);
    if (!i) continue;
    const o = Sc(i[1]);
    if (o !== null) {
      const l = Ze(r.send_date ?? r.gen_finished ?? void 0);
      return zn({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function st(e = q(), t = e.length) {
  const n = nt().fix?.level;
  return n && ["D", "C", "B", "A", "S"].includes(n) ? n : $c(e, t) ?? "D";
}
function Ex(e) {
  if (!(nt().init != null || A.ledger.length > 0)) return "";
  const s = St(e), r = fn(s.value, A.ledger), i = st(e), o = $t[i], l = As(s.value, A.ledger, o), c = Wm(r, l, i, o), a = Ce();
  return a?.status === "active" && a.live ? zg(c, qi(e, a.id)) : c;
}
function gl(e, t = !0) {
  const n = q(), s = n[e];
  if (!s || s.is_user) return;
  const r = s.mes ?? "", i = Ze(s.send_date ?? s.gen_finished ?? void 0), o = [], l = new RegExp(xh.source, "g");
  let c;
  for (; (c = l.exec(r)) !== null; ) {
    const u = Rm(c[1]);
    u && o.push({ delta: u.delta, source: u.source, type: "tag", at: i });
  }
  const a = t ? gr(r) : null;
  if (a && A.pack && !A.pack.rest) {
    const u = {
      结果: a.result ?? "",
      评价: a.rating ?? "",
      ...a.fields
    }, f = st(n, e), h = St(n), x = fn(h.value, A.ledger), z = !!A.session?.clearance, k = Om(A.pack.level, f, u, x, z, A.pack.name);
    if (k.warn) {
      s.extra = s.extra ?? {};
      const R = s.extra.rlzc ?? { phase: "", round: 0, injected: [] };
      s.extra.rlzc = Ye({ ...R, settleWarn: k.warn });
    }
    if (k.delta !== 0) {
      const R = { delta: k.delta, source: k.source, type: "settle", at: i };
      k.clearWin && (R.clear = !0), o.push(R);
    }
  }
  if (o.length || s.extra?.rlzc?.ledger?.length) {
    s.extra = s.extra ?? {};
    const u = s.extra.rlzc ?? { phase: "", round: 0, injected: [] }, f = [...o, ...(u.ledger ?? []).filter((h) => h.type === "tip")];
    s.extra.rlzc = Ye({ ...u, ledger: f.length ? f : void 0 }), Je();
  }
  A.ledger = pn(q());
}
function Mx(e, t) {
  const n = nt(), s = Ze(void 0), r = [...n.adjust ?? [], { amount: e, note: t, at: s, ts: Date.now() }];
  zn({ ...n, adjust: r }), A.ledger = pn(q());
}
function Tx(e, t) {
  Mx(e, t);
}
function Ix(e) {
  const t = nt(), n = Ze(void 0);
  zn({ ...t, init: { value: e, source: "手动设置", at: n } }), A.ledger = pn(q());
}
function Nx(e, t) {
  if (!e && !t) return;
  const n = nt(), s = q(), r = Ze(void 0);
  zn({ ...n, fix: { level: e, rank: t, at: r, afterIndex: s.length - 1 } });
}
function Ce() {
  return qm(gt()[Lt]);
}
function kr() {
  const e = gt(), t = Array.isArray(e[Lt]?.declined) ? e[Lt].declined : [], n = Array.isArray(e[ul]) ? e[ul] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function Px(e) {
  const t = gt(), n = [...kr().filter((s) => s !== e), e];
  t[Lt] = { ...t[Lt] ?? {}, declined: n }, Je();
}
function un(e) {
  const t = gt(), n = kr(), s = n.length ? { declined: n } : {};
  e ? t[Lt] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[Lt] = s : delete t[Lt], Je();
}
function Qi(e) {
  const t = Ce();
  t && (e(t), un(t), Le());
}
function Zc(e) {
  const t = q();
  return (e === "swipe" || e === "continue") && $e(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Qs(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Cc(t, A.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = Qa(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? sg(e, n, s) : null };
}
function Le() {
  const e = q();
  let t = Ce();
  if (t) {
    const s = JSON.stringify(t);
    if (!Jm(e, t))
      au(t.id), un(null), Se("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const r = Qs(e, t);
      r.progress && (t.status = r.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && un(t);
    }
  }
  const n = Qs(e, t);
  A.session = n.session, A.pack = n.pack, A.progress = n.progress, A.audit = n.audit, A.subLine = nu(e, n.progress), hv(e, n.session), A.ledger = pn(e), A.seenGeneric = Mc(e, ms(), e.length).filter(
    (s) => !A.packs.some((r) => r.detect.briefingName === s.name)
  ), A.tick++, ps(), Ox(n.session);
}
function Xc() {
  if (A.session)
    return Ec(A.session, A.progress?.rolesFromChat);
}
function er() {
  for (const e of Ih) Tt(e, "", 0, !1);
}
let Wn = -1;
function Rx(e) {
  const t = Zc(e), n = Ce(), { pack: s, progress: r, audit: i } = Qs(t, n), o = n ? Ec(n, r?.rolesFromChat) : void 0, l = $n() && !!r, c = l ? vr(t, r.entryIndex) : null, a = s ? Lh(s, r, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: r?.panel?.limit,
    audit: i ?? void 0,
    subNext: l ? Am(t, r.entryIndex) : void 0,
    stateText: c ? gc(s, c.state) : void 0
  }) : rs;
  er();
  const u = A.settings.depths;
  a.token && Tt(ec, a.token, u.token, !0), a.progress && Tt(tc, a.progress, u.progress, !1), a.turn && Tt(nc, a.turn, u.turn, !1), a.state && Tt(sc, a.state, u.progress, !1);
  const f = nt();
  let h = Ex(t);
  if (f.fix) {
    const k = Hm(f.fix);
    k && (h = h ? `${h}
${k}` : k);
  }
  const x = Ve();
  if (x.hints.length) {
    const k = x.hints.map(gx).join("");
    h = h ? `${h}
${k}` : k, x.hints.some((R) => !R.sent) && (x.hints = x.hints.map((R) => ({ ...R, sent: !0 })), Ct(x));
  }
  if (h && Tt(rc, h, u.ledger, !1), A.settings.live.injectToAI) {
    const k = bm(ao(/* @__PURE__ */ new Set(), t));
    k && Tt(ic, k, u.live, !1);
  }
  const z = Uh(t) ? Vh : "";
  z && Tt(oc, z, u.format, !1), A.lastInjection = z ? { ...a, format: z } : a, Wn = t.length, hs("注入", e, a);
}
const gi = /* @__PURE__ */ new Set();
async function Lx() {
  const e = q(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = zh(n.mes);
  if (!s) return;
  const r = Ce();
  if (!r || r.status !== "active" || r.manual.some((a) => a.kind === "skip" && a.atIndex === t)) return;
  const i = `${Ut()}:${t}:${n.mes}`;
  if (gi.has(i)) return;
  gi.add(i);
  const { pack: o, progress: l } = Qs(e, r);
  if (!o || !l || l.ended) return;
  const c = _h(o, l.phase, l.round, s);
  c && await Ht(`是否跳到${s}？（${c.label}）`) && (r.manual.push({ kind: "skip", atIndex: t, targetPhase: c.phase, targetRound: c.round }), un(r));
}
async function Dx(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      er();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await Lx(), await Zx(s), Rx(s);
  } catch (r) {
    console.error("[rlzc] 拦截器出错", r), er();
  }
}
const os = /* @__PURE__ */ new Set();
function ms() {
  const e = Ce();
  if (!e || e.status !== "ended") return 0;
  const t = A.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
function eo(e, t) {
  return Mc(e, ms(), t);
}
let Fx = 0, _n = null;
function Qc(e) {
  const { index: t, info: n, pack: s } = e, r = Ut(), i = `${r}:${t}:${n.name}`;
  if (os.has(i) || Ce()?.status === "active") return;
  os.add(i);
  const l = Rc(s ?? {}, A.settings.live.optIn);
  _n = e, A.entryCard = {
    id: ++Fx,
    key: i,
    chatId: r,
    index: t,
    name: s?.name ?? n.name,
    level: s ? s.rest ? "—" : s.level : ds(n),
    unknown: !s,
    liveShow: l.show,
    live: l.checked
  };
}
function wr() {
  const e = A.entryCard;
  e && (os.delete(e.key), A.entryCard = null, _n = null);
}
function jx(e) {
  A.entryCard && (A.entryCard.live = e);
}
function ls() {
  A.entryCard = null, _n = null;
}
function xl() {
  const e = A.entryCard, t = _n;
  ls(), !(!e || !t || Ut() !== e.chatId) && Px(Hi(t.index, t.info.name));
}
function vl() {
  const e = A.entryCard, t = _n;
  if (ls(), !e || !t) return;
  if (Ut() !== e.chatId) {
    os.delete(e.key);
    return;
  }
  const { index: n, info: s } = t;
  e.liveShow && eu(e.live);
  const r = fs(q(), n, A.packs, eo(q(), n));
  if (!r || r.info.name !== s.name) {
    Se("warning", "入场消息已变化，未启用。");
    return;
  }
  if (Ce()?.status === "active") return;
  const i = { ...s };
  t.pack || (i.rounds = Pi(s.limit, ds(s), A.settings.genericCaps).rounds), xi(t.pack ?? Ri(i, A.settings.genericCaps), n, i, e.liveShow && e.live);
}
function eu(e) {
  A.settings.live.optIn !== e && (A.settings.live.optIn = e, ke());
}
function to(e = q()) {
  for (let t = ms(); t < e.length; t++) if ($e(e[t])) return t;
  return -1;
}
function no() {
  const e = q(), t = to(e);
  return t < 0 ? "" : `${t}${e[t].swipe_id ?? ""}${e[t].mes ?? ""}`;
}
let so = "";
function ro() {
  so = no();
  const e = Xm(q(), Ce(), kr(), A.packs, ms());
  e && Qc(e);
}
function tu() {
  const e = A.entryCard;
  e && fs(q(), e.index, A.packs, eo(q(), e.index))?.info.name !== _n?.info.name && wr();
}
function io() {
  Ce()?.status !== "active" && (tu(), ro());
}
const Ns = Rg(() => {
  !Lg() && no() !== so && io();
});
function Ox(e) {
  e?.status === "active" ? Ns.stop() : Ns.running || (so = no(), Ns.start());
}
function Bx(e) {
  Le();
  const t = to();
  A.entryCard && (e === t || e === A.entryCard.index) && wr(), e === t && ro();
}
function xi(e, t, n, s = !1) {
  const r = q(), i = r[t], o = Ce();
  o && dv(o);
  const l = Km(e, t, n), c = xt();
  if (c.corridor.on && (c.corridor.on = !1, as(c, c.corridor.show, cn.enterOff)), s && !e.disableLive && (l.live = !0, as(c, l.id, cn.instanceOn)), Sn(c), !e.rest) {
    const u = St(r);
    As(u.value, A.ledger, $t[st(r)]) && (l.clearance = !0);
  }
  ls(), i.extra = i.extra ?? {};
  const a = i.extra.rlzc?.format;
  i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: l.id, ...a ? { format: a } : {} }, un(l), Av(l, e, t), Le(), A.progress && (i.extra.rlzc.injected = Ye(A.progress.perMessage[t]?.events ?? [])), Je(), Se("success", `已进入副本《${e.name}》。`);
}
const tr = "generic:";
async function Vx(e) {
  const t = e.startsWith(tr) ? A.seenGeneric.find((u) => u.name === e.slice(tr.length)) : void 0, n = t ? void 0 : A.packs.find((u) => u.id === e);
  if (!n && !t) return;
  const s = n?.name ?? t.name, r = q();
  let i = r.length - 1;
  for (; i >= 0 && !$e(r[i]); ) i--;
  if (i < 0) {
    Se("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  if (Ce()?.status === "active" && !await Ht("当前已有进行中的副本，确定要替换吗？")) return;
  const l = Rc(n ?? {}, A.settings.live.optIn), c = await Yh(`以最新一条AI回复作为《${s}》的第1轮，确定进入吗？`, l.show ? { label: "开启直播", checked: l.checked } : null);
  if (!c.ok) return;
  if (l.show && eu(c.checked), n) {
    xi(n, i, Di(r[i].mes) ?? { name: n.name }, l.show && c.checked);
    return;
  }
  const a = { ...t };
  a.rounds = Pi(a.limit, ds(a), A.settings.genericCaps).rounds, xi(Ri(a, A.settings.genericCaps), i, a, l.show && c.checked);
}
function zr(e) {
  Qi((t) => t.manual.push(e));
}
function _r() {
  return q().length - 1;
}
async function yl() {
  const e = A.progress;
  if (!(!e || e.ended || !A.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Se("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ht(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (zr({ kind: "skip", atIndex: _r(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Se("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function bl() {
  if (!(!A.session || A.progress?.ended) && await Ht("确定要手动结束当前副本吗？")) {
    if (A.session.live) {
      const e = xt();
      as(e, A.session.id, cn.instanceOff), Sn(e);
    }
    zr({ kind: "end", atIndex: _r() });
  }
}
function Ux(e) {
  zr({ kind: "setPhase", atIndex: _r(), phase: e });
}
function Hx(e) {
  zr({ kind: "setRound", atIndex: _r(), round: e });
}
function Wx(e) {
  Qi((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function Gx(e) {
  Qi((t) => t.manual.splice(e, 1));
}
async function kl() {
  A.session && await Ht("确定要删除当前副本会话吗？（不会改动聊天记录）") && (au(A.session.id), un(null), Le());
}
function $n() {
  return A.settings.subApi.source !== "off";
}
function oo() {
  const e = A.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function Kx(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function nu(e, t) {
  if (!$n() || !t || t.ended) return "";
  if (A.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const r = vr(e, t.entryIndex);
  return r && t.perMessage[r.index] ? `副本记录：已更新（第${t.perMessage[r.index].round}轮）` : "副本记录：尚未整理";
}
let Gn = null;
const lo = /* @__PURE__ */ new Set();
function dn(e) {
  return cm(Ut(), e, q()[e]);
}
function wl(e) {
  A.subBusy = e, A.subLine = nu(q(), A.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && A.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function su(e, t, n) {
  if (dn(e) !== t) return;
  const s = q()[e];
  s?.extra?.rlzc && (s.extra.rlzc = Ye({ ...s.extra.rlzc, sub: n }), Je(), Le());
}
function qx(e, t) {
  const n = q(), s = A.progress, r = A.pack, i = n[e], o = s?.perMessage[e];
  if (!r || !s || !o || !i) return null;
  const l = Xc(), c = (M) => ({ ...M, text: qs(M.text, r, l), if: M.if ? qs(M.if, r, l) : void 0 }), a = om(r, i.extra?.rlzc?.injected ?? []).map(c), u = (s.next?.events ?? []).filter((M) => M.if).map(c);
  if (!um({
    enabled: $n(),
    active: !s.ended && A.session?.status === "active",
    type: t,
    saveMode: A.settings.subApi.saveMode,
    hasEvents: a.length > 0,
    hasNextConditional: u.length > 0
  })) return null;
  const h = dn(e);
  if (lo.has(h)) return null;
  const x = r.phases.find((M) => M.id === o.phase), z = vr(n.slice(0, e), s.entryIndex), k = A.session ? Ve().books[A.session.id] : void 0, R = im({
    pack: r,
    phaseName: x?.name ?? o.phase,
    round: o.round,
    prevState: z?.state ?? null,
    events: a,
    nextConditional: u,
    text: String(i.mes ?? ""),
    markets: k ? rx(k, A.market.results) : []
  }), U = me().substituteParams, D = U ? { system: U(R.system), user: U(R.user) } : R, E = Yx(e, h, o.round, D);
  return Gn = { key: h, index: e, promise: E }, E.finally(() => {
    Gn?.key === h && (Gn = null);
  }), E;
}
async function Yx(e, t, n, s) {
  wl(!0);
  try {
    let r = 2;
    for (; ; ) {
      const i = oo();
      if (!i) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await dm((c) => Ui(i, c), s, r);
        su(e, t, { ...l, ms: Date.now() - o, via: Kx(i), at: (/* @__PURE__ */ new Date()).toISOString() }), lo.add(t);
        return;
      } catch (l) {
        if (dn(e) !== t) return;
        const c = xr(l), a = Ai(l), u = a === c ? String(l?.message ?? l).slice(0, 200) : "";
        if (hs("副本事件检测失败", a, l), !A.settings.subApi.wait) {
          Se("warning", `第${n}轮事件检测失败：${a}，已沿用上一轮状态。`), qr(e, t, a);
          return;
        }
        if (await Jx(n, a, u) === "skip") {
          qr(e, t, a);
          return;
        }
        r = 0;
      }
    }
  } catch (r) {
    Se("error", String(r?.message ?? r)), qr(e, t, "其他");
  } finally {
    wl(!1);
  }
}
function qr(e, t, n) {
  lo.add(t), su(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function Jx(e, t, n) {
  const s = me();
  if (!s.Popup || !s.POPUP_TYPE)
    return window.confirm(`第${e}轮事件检测失败：${t}。重试吗？取消则这轮先跳过。`) ? "retry" : "skip";
  const r = A.settings.subApi, i = document.createElement("div"), o = document.createElement("h3");
  o.textContent = `第${e}轮事件检测失败`;
  const l = document.createElement("p");
  l.textContent = `原因：${t}`;
  const c = document.createElement("small");
  c.textContent = n, c.style.opacity = "0.7", n || (c.style.display = "none");
  const a = document.createElement("div");
  a.style.cssText = "display:none;margin-top:10px;";
  const u = document.createElement("label");
  u.textContent = "换成：";
  const f = document.createElement("select");
  f.className = "text_pole";
  const h = [{ value: "", text: "请选择…" }];
  for (const k of r.presets) r.source === "preset" && k.id === r.presetId || h.push({ value: `preset:${k.id}`, text: `自设API：${k.name}` });
  r.source !== "main" && h.push({ value: "main", text: "跟随主API" });
  for (const k of h) {
    const R = document.createElement("option");
    R.value = k.value, R.textContent = k.text, f.append(R);
  }
  u.append(f), a.append(u), i.append(o, l, c, a);
  let x;
  f.addEventListener("change", () => {
    const k = f.value;
    k && (k === "main" ? r.source = "main" : (r.source = "preset", r.presetId = k.slice(7)), ke(), x.complete(s.POPUP_RESULT.CUSTOM1));
  }), x = new s.Popup(i, s.POPUP_TYPE.TEXT, "", {
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
  const z = await x.show();
  return z === s.POPUP_RESULT.AFFIRMATIVE || z === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function Zx(e) {
  const t = Gn;
  if (!(!t || !A.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= Zc(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function Xx(e, t) {
  const n = q(), s = n[e];
  if (!$e(s)) return;
  Qx(e, t);
  const r = Ce();
  if (t !== "first_message" && wr(), !r || r.status === "ended") {
    if (fs(n, e, A.packs, eo(n, e))) {
      const a = Zm(n, A.packs, ms(), e, kr());
      a && Qc(a);
    }
    if (t === "first_message") return;
    Le(), gl(e, !1), _l(e), Jr(e, t), zl(), Cl();
    return;
  }
  if (t === "first_message") return;
  let i = null;
  $n() && (Kn = e);
  const o = Ya(s.mes);
  o && (r.roles = { ...r.roles ?? {}, ...o }), un(r), Le();
  const l = A.progress?.perMessage[e];
  if (l && A.pack) {
    const a = A.pack.phases.find((k) => k.id === l.phase), u = {
      phase: a?.name ?? l.phase,
      round: l.round,
      injected: Wn === e ? A.lastInjection.injected : l.events
    }, f = A.pack.time;
    f.type === "clock" && a?.clock && !a.night && !a.frozen && (u.clock = Za(f.dayStart, f.minutesPerRound, l.round));
    const h = Wn === e ? A.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    h && (u.limit = h);
    const x = s.extra?.rlzc?.entry;
    x && (u.entry = x), s.extra?.rlzc?.format && (u.format = s.extra.rlzc.format), Wn === e && A.lastInjection.skipped?.length && (u.skippedEvents = A.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (u.sub = s.extra.rlzc.sub), t === "continue" && s.extra?.rlzc?.live && (u.live = s.extra.rlzc.live);
    const z = (s.extra?.rlzc?.ledger ?? []).filter((k) => k.type === "tip");
    t === "continue" && z.length && (u.ledger = z), s.extra = s.extra ?? {}, s.extra.rlzc = Ye(u), Je(), Le(), i = qx(e, t);
  }
  Kn >= 0 && (Kn = -1, i || Le());
  const c = gr(s.mes);
  if (c && Se("info", `副本结算：${c.result ?? "—"}${c.rating ? `，评价 ${c.rating}` : ""}`), gl(e), _l(e), i) {
    const a = dn(e);
    i.then(() => {
      dn(e) === a && Jr(e, t);
    });
  } else Jr(e, t);
  zl(), Cl();
}
function Qx(e, t) {
  if (t === "first_message" || t === "quiet" || t === "impersonate") return;
  const n = q(), s = n[e];
  if (!$e(s) || cc(n, e)) return;
  const r = Oi(s.mes);
  let i;
  if (r.kind !== "ok") {
    i = { kind: r.kind, detail: r.detail };
    const c = A.settings.statusBarFix ? Bh(s.mes) : null;
    c && (s.mes = c.text, Array.isArray(s.swipes) && s.swipe_id !== void 0 && s.swipe_id < s.swipes.length && (s.swipes[s.swipe_id] = c.text), i.fixed = !0, i.from = c.from, Kh(), qh(e), Ps(e), Se("info", "已修正本轮状态栏标签"));
  }
  const o = s.extra?.rlzc;
  if (!i && (t === "continue" || !o?.format)) return;
  s.extra = s.extra ?? {};
  const l = o ?? { phase: "", round: 0, injected: [] };
  s.extra.rlzc = Ye({ ...l, format: i }), Je();
}
function zl() {
  const e = nt();
  e.fix && zn({ ...e, fix: void 0 });
}
function _l(e) {
  const t = q(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const r = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!r) return;
  const i = Sc(r[1]);
  if (i === null) return;
  const o = St(t), l = (a) => a.mesIndex === e && (a.type === "tip" || a.type === "bet" && /^赌票/.test(a.source)), c = fn(o.value, pn(t).filter((a) => !l(a)));
  i !== c && (hs(`积分核对不符（楼层${e}）：状态栏 ${i}，账本 ${c}`), n.extra?.rlzc && (n.extra.rlzc = Ye({ ...n.extra.rlzc, ledgerMismatch: { status: i, ledger: c } }), Je()));
}
let $s = null;
function $l() {
  Ns.stop(), $s && clearTimeout($s), gi.clear(), wr(), os.clear(), Wn = -1, Kn = -1, A.chatId = Ut(), A.debugUnlocked = !1, A.lastInjection = rs, er(), Ng(), rv(), A.ledger = pn(q()), Le(), ro();
  const e = A.chatId;
  $s = setTimeout(() => {
    $s = null, Ut() === e && io();
  }, 300), nr();
}
function Yr(e) {
  Le(), tu(), e !== void 0 && e === to() && io();
}
function ru() {
  return A.settings.panelDisplay === "statusbar" ? an.filter((e) => e !== "副本") : an;
}
function Ps(e, t = !1) {
  fc(e, ru(), !1, t);
}
function nr(e = !1, t = !1) {
  tm(ru(), e, t);
}
function ev(e) {
  A.settings.panelDisplay !== e && (A.settings.panelDisplay = e, ke(), nr(!0));
}
const Rs = Tg;
function xt() {
  return hg(gt()[Nc]);
}
function Sn(e) {
  gt()[Nc] = Ye(e), Je();
}
function as(e, t, n) {
  if (!t) return;
  const s = yr(q(), e) + 1, r = { id: s, t: "sys", name: "", text: n, amount: 0, net: 0, show: t };
  e.sys = [...e.sys, r].slice(-100), e.seq = s, Ji([r]);
}
function tv() {
  return "c" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function nv(e) {
  const t = A.session, n = A.progress;
  if (!!t && e > t.entryIndex && (!n?.ended || n.endIndex !== void 0 && e <= n.endIndex)) return t.live && A.pack ? { show: t.id, scope: "instance", pack: A.pack } : null;
  const r = xt();
  return r.corridor.on && r.corridor.show ? { show: r.corridor.show, scope: "corridor", pack: null } : null;
}
function Jr(e, t) {
  if (t === "continue" || t === "first_message") return;
  const n = q(), s = n[e];
  if (!$e(s) || Wt(s)) return;
  const r = nv(e);
  if (!r) return;
  const i = xt(), { show: o, scope: l, pack: c } = r, a = A.progress, u = s.extra?.rlzc ?? { phase: "", round: 0, injected: [] }, f = Ki(n, o, e), h = u.sub && !u.sub.skipped ? { hype: u.sub.hype, hurt: u.sub.hurt } : void 0, x = l === "instance" && a?.endIndex === e && a.endedBy === "tag" ? gr(s.mes) : null, z = !!x && ["死亡", "阵亡"].includes(String(x.result ?? "").trim()), k = a?.roundsLeft, R = /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(s.mes ?? "")), U = new Set((c?.events ?? []).filter((X) => X.kind !== "directive").map((X) => X.id)), D = hm({
    aiSource: A.settings.live.source === "ai",
    subOn: $n(),
    roundInShow: f.length + 1,
    freq: A.settings.live.freq,
    phaseSwitch: R,
    hurt: Fc(String(s.mes ?? ""), h),
    eventDone: !!u.sub && !u.sub.skipped && (u.sub.events ?? []).some((X) => X.status === "done")
  }), E = yg({
    show: o,
    scope: l,
    packLevel: c?.level ?? null,
    playerLevel: Yi(n, e + 1),
    isRest: !!c?.rest,
    prevHeat: f.length ? f[f.length - 1].rec.heat : null,
    roundsInShow: f.length,
    text: String(s.mes ?? ""),
    hasEvents: (u.injected ?? []).some((X) => U.has(X)),
    hasPhaseSwitch: R,
    sub: h,
    isEnd: l === "instance" && !!k && k.y > 0 && k.x < k.y * 0.1,
    phaseId: l === "instance" ? a?.perMessage[e]?.phase : void 0,
    pool: Rs.pool,
    templates: Rs.templates,
    packDanmaku: c?.danmaku,
    names: Rs.names,
    whoNames: Dc(Lc(n, e + 1), String(me().name1 ?? "")),
    recentTexts: mg(n.slice(0, e)),
    firstId: yr(n, i) + 1,
    settle: x ? { died: z, tipsBefore: qi(n.slice(0, e), o) } : void 0,
    awaitAi: D,
    rand: Math.random
  });
  D && (E.ai = { ok: !1, pending: !0 });
  const M = Ze(s.send_date ?? s.gen_finished ?? void 0), te = [...(u.ledger ?? []).filter((X) => X.type !== "tip"), ...kg(E, M)];
  s.extra = s.extra ?? {}, s.extra.rlzc = Ye({ ...u, live: E, ledger: te.length ? te : void 0 }), i.seq = Math.max(i.seq, ...E.feed.map((X) => X.id)), Sn(i), A.ledger = pn(q()), A.tick++, E.feed.length ? Ji(E.feed, !0) : ps(), D && sv(e, E.scope === "instance" ? c?.name : void 0);
}
function sv(e, t) {
  const n = q(), s = dn(e), r = oo();
  if (!r) {
    Zr(e, s, [], "副本事件检测没有设置好", 0);
    return;
  }
  const i = [];
  for (let u = e; u >= 0 && i.length < 2; u--) $e(n[u]) && i.unshift(String(n[u].mes ?? ""));
  const o = gm({
    scene: t ?? "回廊",
    texts: i,
    cast: Dc(Lc(n, e + 1), String(me().name1 ?? "")),
    samples: mm(Rs.pool, 10, Math.random)
  }), l = me().substituteParams, c = l ? { system: l(o.system), user: l(o.user) } : o, a = Date.now();
  vm((u) => Ui(r, u, { temperature: 0.9 }), c, 1).then((u) => Zr(e, s, u, null, Date.now() - a)).catch((u) => {
    hs("AI 弹幕生成失败", u);
    const f = String(u?.message ?? u).slice(0, 120);
    Zr(e, s, [], `${xr(u)}：${f}`, Date.now() - a);
  });
}
function Zr(e, t, n, s, r) {
  if (dn(e) !== t) return;
  const i = q(), o = i[e], l = Wt(o);
  if (!l?.pending || !o.extra?.rlzc) return;
  const c = xt(), a = Oc(l, s ? null : n, yr(i, c) + 1, Math.random), u = s ? 0 : Math.min(n.length, 13), f = { ...a, ai: s ? { ok: !1, error: s, ms: r } : { ok: !0, count: u, ms: r } };
  o.extra.rlzc = Ye({ ...o.extra.rlzc, live: f }), c.seq = Math.max(c.seq, ...f.feed.map((h) => h.id)), Sn(c), A.tick++, Ji(f.feed, !0);
}
function rv() {
  const e = q();
  let t = !1;
  for (const n of e) {
    const s = Wt(n);
    if (!s?.pending || !n.extra?.rlzc) continue;
    const r = xt(), i = Oc(s, null, yr(e, r) + 1, Math.random);
    n.extra.rlzc = Ye({ ...n.extra.rlzc, live: { ...i, ai: { ok: !1, error: "没有等到结果" } } }), r.seq = Math.max(r.seq, ...i.feed.map((o) => o.id)), Sn(r), t = !0;
  }
  t && Je();
}
function iv() {
  const e = xt();
  return A.session?.status === "active" && A.pack ? Gi({ packLevel: A.pack.level, playerLevel: Yi(q()), isRest: !!A.pack.rest, heat: 20, rand: 1 }) : e.corridor.viewers ?? 0;
}
function ov() {
  const e = A.session;
  return e?.status === "active" ? !!e.live : xt().corridor.on;
}
function ao(e, t = q()) {
  const n = A.session, s = n?.status === "active";
  return Sg(
    t,
    xt(),
    {
      inInstance: s,
      instanceLive: !!(s && n?.live),
      instanceShow: n?.id,
      startViewers: iv(),
      injectToAI: A.settings.live.injectToAI
    },
    e
  );
}
function lv() {
  const e = A.session, t = ao(/* @__PURE__ */ new Set()), n = t.viewers > 0 ? ` · ${t.viewers.toLocaleString("en-US")}人在看` : "";
  if (e?.status === "active") {
    const s = A.pack?.disableLive ? "本副本自带直播玩法" : t.on ? `副本内锁定${n}` : "副本内锁定，回廊可开播";
    return { on: t.on, locked: !0, scope: "instance", note: s };
  }
  return { on: t.on, locked: !1, scope: "corridor", note: t.on ? `回廊直播${n}` : "回廊中可随时开播" };
}
function iu() {
  if (A.session?.status === "active") return !1;
  const e = xt();
  if (e.corridor.on)
    e.corridor.on = !1, as(e, e.corridor.show, cn.corridorOff);
  else {
    const t = tv();
    e.corridor = {
      on: !0,
      show: t,
      viewers: Gi({ packLevel: null, playerLevel: Yi(q()), isRest: !1, heat: 20, rand: 0.9 + Math.random() * 0.2 })
    }, as(e, t, cn.corridorOn);
  }
  return Sn(e), A.tick++, ps(), !0;
}
function av() {
  return { book: null, results: {}, tickets: [], pending: 0, tables: [], casinoOpen: !0 };
}
function Ve() {
  return vx(gt()[Vc]);
}
function Ct(e) {
  gt()[Vc] = Ye(e), Je();
}
let Kn = -1;
function cv() {
  return [Kn, Gn?.index ?? -1].filter((e) => e >= 0);
}
function co(e = q()) {
  return fn(St(e).value, A.ledger);
}
function ou(e) {
  if (nt().init) return;
  const t = St(e), n = nt();
  n.init || zn({ ...n, init: { value: t.value, source: t.source, at: Ze(void 0) } });
}
function lu() {
  const e = Ce();
  return e?.status === "active" && e.live ? qi(q(), e.id) : 0;
}
function $r(e, t, n) {
  if (t.frozen) return { results: {}, tickets: pi(t, {}), rounds: [] };
  let s = { voided: !0, ended: !1 }, r = [], i = {};
  if (n && n.id === t.session) {
    const l = Cc(n, A.packs), c = l ? Qa(e, n, l) : null;
    c && (s = {
      ended: c.ended,
      endedBy: c.endedBy,
      endIndex: c.endIndex,
      result: c.settlement?.result,
      rating: c.settlement?.rating
    }, r = sx(e, c.perMessage, c.entryIndex, cv()), i = c.phaseEnds);
  }
  const o = tx({ markets: t.markets, rounds: r, outcome: s, phaseEnds: i });
  return { results: o, tickets: pi(t, o), rounds: r };
}
function uv(e) {
  const t = Ve(), n = Ce(), s = (i) => e[i] ? Ze(e[i].send_date ?? e[i].gen_finished ?? void 0) : void 0, r = [];
  for (const i of Object.values(t.books)) r.push(...lx(i, $r(e, i, n).tickets, s));
  for (const i of t.casino.plays)
    r.push({ delta: i.net, source: kx(i.table, i.label), type: "bet", at: i.at, pos: i.after, seq: i.seq ?? 0 });
  return r;
}
function dv(e) {
  const t = Ve(), n = t.books[e.id];
  if (!n || n.frozen) return;
  const s = q(), r = nx(n, $r(s, n, e).results);
  for (const i of n.tickets) r[i.id].index < 0 && (r[i.id].index = Math.max(s.length, i.after + 1));
  n.frozen = r, Ct(t);
}
function au(e) {
  const t = Ve(), n = t.books[e];
  if (!n || n.frozen) return;
  const s = q().length;
  n.frozen = Object.fromEntries(n.tickets.map((r) => [r.id, { stamp: "refund", index: Math.max(s, r.after + 1) }])), Ct(t);
}
function Av(e, t, n) {
  if (t.rest) return;
  const s = q(), r = $n(), i = Hg({ pack: t, playerLevel: st(s), withEvents: r, rand: Math.random });
  if (!i.length) return;
  const o = Gg(i, r, Math.random), l = Ve(), c = { session: e.id, packId: t.id, packName: t.name, openedAt: Ze(void 0), markets: o.markets, tickets: [] };
  o.plan && (c.plan = o.plan, c.reserve = o.reserve), r && (c.freak = { status: "pending" }), l.books[e.id] = c, Ct(l), r && fv(e.id, t, n);
}
function fv(e, t, n) {
  const s = (a, u) => {
    const f = Ve(), h = f.books[e];
    h && (h.closedAt || h.frozen ? u ? h.freak = { ...a, status: "late" } : h.freak = a : (Object.assign(h, Kg(h, u ?? null, Math.random)), h.freak = a), Ct(f), Le());
  }, r = oo();
  if (!r) {
    s({ status: "failed", error: "副本事件检测没有设置好" });
    return;
  }
  const i = dx({
    name: t.name,
    level: t.level,
    briefing: ux(String(q()[n]?.mes ?? "")),
    docs: t.docs
  }), o = me().substituteParams, l = o ? { system: o(i.system), user: o(i.user) } : i, c = Date.now();
  fx((a) => Ui(r, a), l, 1).then((a) => s({ status: "ok", count: a.length, ms: Date.now() - c }, a)).catch((a) => {
    hs("庄家怪盘出题失败", a);
    const u = String(a?.message ?? a).slice(0, 120);
    s({ status: "failed", error: `${xr(a)}：${u}`, ms: Date.now() - c });
  });
}
const Ss = /* @__PURE__ */ new Map();
let Sl = null;
function pv(e) {
  const t = Ut(), n = Sl !== t;
  n && Ss.clear(), Sl = t;
  const s = { win: 0, lose: 0, refund: 0 };
  for (const i of e) {
    const o = i.res?.stamp ?? null, l = Ss.has(i.ticket.id), c = Ss.get(i.ticket.id);
    Ss.set(i.ticket.id, o), !n && l && o && o !== c && s[o]++;
  }
  const r = [s.win ? `兑 ${s.win} 张` : "", s.lose ? `废 ${s.lose} 张` : "", s.refund ? `退 ${s.refund} 张` : ""].filter(Boolean);
  r.length && Se("info", `赌票开奖：${r.join("，")}。`);
}
function hv(e, t) {
  const n = Ve();
  let s = !1;
  const r = t?.status === "active", i = t ? n.books[t.id] : void 0;
  i && !i.closedAt && !i.frozen && A.progress && Jg(A.progress.perMessage, A.progress.entryIndex) && (i.closedAt = Ze(void 0), s = !0);
  const o = r ? n.casino.key : t?.status === "ended" ? t.id : "", l = wx(n.casino, o, Math.random);
  l.changed && (!r || n.casino.tables.length !== 2) && (n.casino.tables = l.tables, n.casino.key = l.key, s = !0), s && Ct(n);
  const c = [];
  let a = {};
  for (const u of Object.values(n.books)) {
    const f = $r(e, u, t);
    i && u.session === i.session && (a = f.results);
    for (const h of u.tickets) c.push({ ticket: h, book: u, market: u.markets.find((x) => x.id === h.market), res: f.tickets[h.id] ?? null });
  }
  c.sort((u, f) => (f.ticket.seq ?? 0) - (u.ticket.seq ?? 0)), pv(c), A.market = {
    book: r && i ? i : null,
    results: a,
    tickets: c,
    pending: c.filter((u) => !u.res).length,
    tables: n.casino.tables,
    casinoOpen: !r || !!A.pack?.casino
  };
}
function cu(e, t) {
  const n = q(), s = A.market.book;
  return Kc({
    playerLevel: st(n),
    stake: t,
    already: s ? Yg(s, e) : 0,
    balance: co(n),
    lockedTips: lu()
  });
}
function mv(e, t, n) {
  const s = Ce();
  if (!s || s.status !== "active") return "没有进行中的副本";
  const r = Ve(), i = r.books[s.id];
  if (!i || i.frozen) return "本局没有开盘";
  if (i.closedAt) return "已封盘";
  const o = i.markets.find((f) => f.id === e), l = o?.options.find((f) => f.id === t);
  if (!o || !l) return "没有这个盘口";
  if (A.market.results[e]) return "已开奖";
  const c = cu(e, n);
  if (!c.ok) return c.reason ?? "不能下注";
  const a = q();
  ou(a);
  const u = r.seq + 1;
  return r.seq = u, i.tickets.push({ id: `t${u}`, seq: u, market: e, option: t, stake: n, odds: l.odds, at: Ze(void 0), after: a.length - 1 }), o.kind === "ending" && t === "lose" && (r.hints = hi(r.hints, { kind: "betLose", amount: n, after: a.length - 1 })), Ct(r), Le(), null;
}
function uu(e) {
  const t = q();
  return Kc({ playerLevel: st(t), stake: e, already: 0, balance: co(t), lockedTips: lu() });
}
function gv(e, t, n) {
  if (!A.market.casinoOpen) return { error: "赌坊只在回廊营业。" };
  const s = Ve();
  if (!s.casino.tables.includes(e)) return { error: "这张桌今晚没开" };
  const r = uu(n);
  if (!r.ok) return { error: r.reason };
  const i = bx(e, t, n, Math.random);
  if (!i) return { error: "没有这种押法" };
  const o = q();
  ou(o);
  const l = st(o), c = co(o), a = o.length - 1, u = s.seq + 1;
  return s.seq = u, s.casino.plays = [
    ...s.casino.plays,
    { id: `g${u}`, seq: u, table: e, bet: t, label: i.label, stake: n, win: i.win, payout: i.payout, net: i.net, result: i.result, at: Ze(void 0), after: a }
  ], !i.win && c - n < $t[l] && (s.hints = hi(s.hints, { kind: "casinoLoss", amount: n, after: a })), i.win && i.net > Uc[l] * 5 && (s.hints = hi(s.hints, { kind: "casinoWin", amount: i.net, after: a })), Ct(s), Le(), { outcome: i };
}
function Cl() {
  const e = Ve();
  if (!e.hints.length) return;
  const t = xx(e.hints);
  t.length !== e.hints.length && (e.hints = t, Ct(e));
}
function xv() {
  const e = Ce(), t = e ? Ve().books[e.id] : void 0;
  return t ? $r(q(), t, e).rounds : [];
}
const du = "M16 16c-2.6-3.4-5-5.2-7.6-5.2a5.2 5.2 0 000 10.4c2.6 0 5-1.8 7.6-5.2s5-5.2 7.6-5.2a5.2 5.2 0 010 10.4c-2.6 0-5-1.8-7.6-5.2z", vv = { class: "rlzc-entry-kicker" }, yv = {
  class: "rlzc-entry-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, bv = ["d"], kv = { class: "rlzc-entry-title" }, wv = { class: "rlzc-entry-level" }, zv = { class: "rlzc-entry-name" }, _v = {
  key: 0,
  class: "rlzc-entry-note"
}, $v = { class: "rlzc-entry-foot" }, Sv = ["aria-checked"], Cv = { key: 1 }, Ev = { class: "rlzc-entry-actions" }, Mv = /* @__PURE__ */ Be({
  __name: "EntryCard",
  setup(e) {
    const t = H(() => A.entryCard);
    return (n, s) => (b(), We(nA, {
      name: "rlzc-entry-fade",
      mode: "out-in"
    }, {
      default: fa(() => [
        t.value ? (b(), w("div", {
          key: t.value.id,
          class: Z(["rlzc-entry-card", { "beside-panel": S(A).panelOpen }]),
          role: "dialog",
          "aria-label": "检测到副本"
        }, [
          d("button", {
            class: "rlzc-entry-close",
            type: "button",
            "aria-label": "关闭",
            title: "这次先不处理",
            onClick: s[0] || (s[0] = //@ts-ignore
            (...r) => S(ls) && S(ls)(...r))
          }, "✕"),
          d("div", vv, [
            (b(), w("svg", yv, [
              d("path", { d: S(du) }, null, 8, bv)
            ])),
            s[4] || (s[4] = d("span", null, "检测到副本", -1))
          ]),
          d("div", kv, [
            d("span", wv, _(t.value.level), 1),
            d("span", zv, _(t.value.name), 1)
          ]),
          t.value.unknown ? (b(), w("div", _v, "未收录，将使用通用副本包")) : F("", !0),
          d("div", $v, [
            t.value.liveShow ? (b(), w("button", {
              key: 0,
              type: "button",
              class: Z(["rlzc-entry-live", { on: t.value.live }]),
              role: "switch",
              "aria-checked": t.value.live,
              onClick: s[1] || (s[1] = (r) => S(jx)(!t.value.live))
            }, [
              d("span", {
                class: Z(["rlzc-toggle danger", { on: t.value.live }])
              }, [...s[5] || (s[5] = [
                d("span", null, null, -1)
              ])], 2),
              s[6] || (s[6] = d("span", null, "直播", -1))
            ], 10, Sv)) : (b(), w("span", Cv)),
            d("div", Ev, [
              d("button", {
                type: "button",
                class: "rlzc-btn ghost",
                onClick: s[2] || (s[2] = //@ts-ignore
                (...r) => S(xl) && S(xl)(...r))
              }, "不是"),
              d("button", {
                type: "button",
                class: "rlzc-btn rlzc-entry-go",
                onClick: s[3] || (s[3] = //@ts-ignore
                (...r) => S(vl) && S(vl)(...r))
              }, "进入")
            ])
          ])
        ], 2)) : F("", !0)
      ]),
      _: 1
    }));
  }
}), Tv = {
  key: 0,
  class: "rlzc-ball-ring",
  viewBox: "0 0 48 48",
  "aria-hidden": "true"
}, Iv = ["stroke-dasharray"], Nv = {
  class: "rlzc-ball-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, Pv = ["d"], Rv = {
  key: 1,
  class: "rlzc-ball-live",
  title: "直播中"
}, Lv = {
  key: 2,
  class: "rlzc-ball-badge",
  title: "待开奖赌票"
}, Xr = 48, Dv = /* @__PURE__ */ Be({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ xe({ x: 0, y: 0 });
    let n = null;
    function s(h, x) {
      const z = window.innerWidth - Xr - 4, k = window.innerHeight - Xr - 4;
      return { x: Math.min(Math.max(4, h), z), y: Math.min(Math.max(4, x), k) };
    }
    function r() {
      const h = A.settings.ball;
      t.value = s(h.x ?? window.innerWidth - Xr - 12, h.y ?? Math.round(window.innerHeight * 0.35));
    }
    function i(h) {
      h.currentTarget.setPointerCapture(h.pointerId), n = { id: h.pointerId, dx: h.clientX - t.value.x, dy: h.clientY - t.value.y, moved: !1, sx: h.clientX, sy: h.clientY };
    }
    function o(h) {
      !n || n.id !== h.pointerId || (Math.abs(h.clientX - n.sx) + Math.abs(h.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(h.clientX - n.dx, h.clientY - n.dy)));
    }
    function l(h) {
      if (!n || n.id !== h.pointerId) return;
      const x = n.moved;
      n = null, x ? (A.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, ke()) : A.panelOpen = !A.panelOpen;
    }
    const c = H(() => !!A.session && !!A.progress && !A.progress.ended), a = H(() => c.value && !!A.progress?.warn), u = H(() => {
      const h = A.progress;
      return !c.value || !h || !A.pack?.phases.length || !(h.phase.cap > 0) ? null : Math.min(100, Math.max(0, h.round / h.phase.cap * 100));
    }), f = H(() => (A.tick, A.session, ov()));
    return Ar(() => A.settings.ball, r, { deep: !0 }), ya(() => {
      r(), window.addEventListener("resize", r);
    }), Mi(() => window.removeEventListener("resize", r)), (h, x) => (b(), w("button", {
      class: Z(["rlzc-ball", { "is-active": c.value, "is-warn": a.value, "has-ring": u.value !== null }]),
      style: ar({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: i,
      onPointermove: o,
      onPointerup: l,
      onPointercancel: l
    }, [
      u.value !== null ? (b(), w("svg", Tv, [
        x[0] || (x[0] = d("circle", {
          class: "rlzc-ball-ring-base",
          cx: "24",
          cy: "24",
          r: "22.5"
        }, null, -1)),
        u.value > 0 ? (b(), w("circle", {
          key: 0,
          class: "rlzc-ball-ring-bar",
          cx: "24",
          cy: "24",
          r: "22.5",
          pathLength: "100",
          "stroke-dasharray": `${u.value} 100`
        }, null, 8, Iv)) : F("", !0)
      ])) : F("", !0),
      (b(), w("svg", Nv, [
        d("path", { d: S(du) }, null, 8, Pv)
      ])),
      f.value ? (b(), w("span", Rv)) : F("", !0),
      S(A).market.pending > 0 ? (b(), w("span", Lv, _(S(A).market.pending), 1)) : F("", !0)
    ], 38));
  }
});
function Fv(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Rn(e) {
  return Fv(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function jv(e) {
  const t = [];
  let n = null, s = [];
  const r = () => {
    s.length && t.push(`<p>${s.map(Rn).join("<br>")}</p>`), s = [];
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
    const c = /^(#{1,4})\s+(.*)$/.exec(l);
    if (c) {
      r(), i();
      const h = Math.min(c[1].length + 2, 6);
      t.push(`<h${h}>${Rn(c[2])}</h${h}>`);
      continue;
    }
    const a = /^\s*[-*]\s+(.*)$/.exec(l), u = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (a || u) {
      r();
      const h = a ? "ul" : "ol", x = a ? a[1] : u[2];
      n !== h ? (i(), n = h, t.push(h === "ol" ? `<ol start="${u[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Rn(x));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${Rn(l.trim())}`);
      continue;
    }
    const f = /^>\s?(.*)$/.exec(l);
    if (f) {
      r(), i(), t.push(`<blockquote>${Rn(f[1])}</blockquote>`);
      continue;
    }
    i(), s.push(l);
  }
  return r(), i(), t.join("");
}
const Ov = {
  key: 0,
  class: "rlzc-docs"
}, Bv = { class: "rlzc-subtabs" }, Vv = ["onClick"], Uv = { class: "rlzc-md" }, Hv = ["innerHTML"], Wv = ["src", "alt"], Gv = {
  key: 2,
  class: "rlzc-note"
}, El = /* @__PURE__ */ Be({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ xe(0);
    Ar(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = H(() => t.pack.docs?.[n.value]), r = H(() => s.value?.md ? jv(s.value.md) : ""), i = H(() => s.value?.image ? dh(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (b(), w("section", Ov, [
      d("div", Bv, [
        (b(!0), w(J, null, ce(e.pack.docs, (c, a) => (b(), w("button", {
          key: a,
          class: Z({ on: n.value === a }),
          onClick: (u) => n.value = a
        }, _(c.title), 11, Vv))), 128))
      ]),
      d("article", Uv, [
        r.value ? (b(), w("div", {
          key: 0,
          innerHTML: r.value
        }, null, 8, Hv)) : F("", !0),
        i.value ? (b(), w("img", {
          key: 1,
          src: i.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, Wv)) : s.value?.image && !i.value ? (b(), w("p", Gv, "图片无法加载：" + _(s.value.image), 1)) : F("", !0)
      ])
    ])) : F("", !0);
  }
}), Kv = {
  key: 0,
  class: "rlzc-ledger-summary"
}, qv = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, Ml = /* @__PURE__ */ Be({
  __name: "LedgerSummary",
  setup(e) {
    const t = H(() => q()), n = H(() => St(t.value)), s = H(() => fn(n.value.value, A.ledger)), r = H(() => (A.tick, st(t.value))), i = H(() => $t[r.value]), o = H(() => As(n.value.value, A.ledger, i.value)), l = H(() => A.ledger.length > 0 || n.value.source !== "默认值");
    return (c, a) => l.value ? (b(), w("div", Kv, [
      d("span", {
        class: Z(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + _(s.value >= 0 ? "+" : "") + _(s.value), 3),
      o.value ? (b(), w("span", qv, "待清算")) : F("", !0)
    ])) : F("", !0);
  }
}), Yv = { class: "rlzc-system" }, Jv = { class: "rlzc-card rlzc-hero" }, Zv = { class: "rlzc-hero-top" }, Xv = { class: "rlzc-level" }, Qv = {
  key: 0,
  class: "rlzc-chip"
}, e0 = {
  key: 0,
  class: "rlzc-goal"
}, t0 = { class: "rlzc-grid" }, n0 = {
  key: 0,
  class: "rlzc-stat"
}, s0 = {
  key: 1,
  class: "rlzc-stat"
}, r0 = {
  key: 2,
  class: "rlzc-stat"
}, i0 = {
  key: 3,
  class: "rlzc-stat"
}, o0 = {
  key: 0,
  class: "rlzc-subline"
}, l0 = {
  key: 1,
  class: "rlzc-note"
}, a0 = {
  key: 2,
  class: "rlzc-card"
}, c0 = { class: "rlzc-kv" }, u0 = { class: "rlzc-kv" }, d0 = {
  key: 0,
  class: "rlzc-note rlzc-note-warn"
}, A0 = {
  key: 3,
  class: "rlzc-note"
}, f0 = {
  key: 4,
  class: "rlzc-card"
}, p0 = {
  key: 0,
  class: "rlzc-kv"
}, h0 = { class: "rlzc-mono" }, m0 = {
  key: 1,
  class: "rlzc-tasks"
}, g0 = {
  key: 2,
  class: "rlzc-ps"
}, x0 = { class: "rlzc-actions" }, v0 = ["disabled"], y0 = ["disabled"], b0 = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, k0 = {
  key: 2,
  class: "rlzc-card"
}, w0 = { class: "rlzc-row" }, z0 = ["value"], _0 = ["value"], $0 = ["disabled"], S0 = {
  key: 0,
  class: "rlzc-hint"
}, C0 = /* @__PURE__ */ Be({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ xe(""), n = H(() => !!A.session && !!A.pack), s = H(() => A.progress), r = H(() => n.value && !!s.value && !s.value.ended), i = H(() => A.packs.find((x) => x.id === t.value) ?? null), o = H(() => t.value.startsWith(tr)), l = H(() => !!A.pack?.phases.length), c = H(() => A.settings.panelDisplay !== "statusbar"), a = H(() => {
      const x = s.value;
      return x ? l.value ? `${x.warn ? "⚠️ " : ""}${x.round}/${x.phase.cap}` : `第${x.round}轮` : "";
    }), u = H(() => {
      const x = s.value;
      return x ? x.limit?.text ? x.limit.text : x.panel?.limit || A.session?.briefing?.limit || "—" : "";
    }), f = H(() => {
      const x = s.value;
      return !!x && !x.ended && l.value && x.phase.cap > 0 && x.nextRound < x.phase.cap;
    });
    async function h() {
      t.value && (await Vx(t.value), t.value = "");
    }
    return (x, z) => (b(), w("div", Yv, [
      n.value && s.value ? (b(), w(J, { key: 0 }, [
        d("div", Jv, [
          d("div", Zv, [
            d("span", Xv, _(S(A).pack?.rest ? "—" : S(A).pack.level), 1),
            d("h3", null, _(S(A).pack.name), 1),
            s.value.ended ? (b(), w("span", Qv, "已结束")) : F("", !0)
          ]),
          S(A).session?.briefing?.goal ? (b(), w("p", e0, "目标：" + _(S(A).session.briefing.goal), 1)) : F("", !0)
        ]),
        d("div", t0, [
          l.value ? (b(), w("div", n0, [
            z[3] || (z[3] = d("span", null, "阶段", -1)),
            d("b", null, _(s.value.phase.name), 1)
          ])) : F("", !0),
          d("div", {
            class: Z(["rlzc-stat", { warn: s.value.warn }])
          }, [
            z[4] || (z[4] = d("span", null, "轮次", -1)),
            d("b", null, _(a.value), 1)
          ], 2),
          s.value.currentClock ? (b(), w("div", s0, [
            z[5] || (z[5] = d("span", null, "钟时", -1)),
            d("b", null, _(s.value.currentClock), 1)
          ])) : F("", !0),
          s.value.roundsLeft ? (b(), w("div", r0, [
            z[6] || (z[6] = d("span", null, "最多剩余轮次", -1)),
            d("b", null, _(s.value.roundsLeft.x) + "/" + _(s.value.roundsLeft.y), 1)
          ])) : F("", !0),
          c.value ? (b(), w("div", i0, [
            z[7] || (z[7] = d("span", null, "剩余时间", -1)),
            d("b", null, _(u.value), 1)
          ])) : F("", !0),
          r.value ? F("", !0) : (b(), We(Ml, { key: 4 }))
        ]),
        S(A).subLine ? (b(), w("p", o0, _(S(A).subLine), 1)) : F("", !0),
        s.value.skipGoal ? (b(), w("div", l0, "快进中：目标 " + _(S(A).pack.phases.find((k) => k.id === s.value.skipGoal.phase)?.name) + " 第" + _(s.value.skipGoal.round) + "轮", 1)) : F("", !0),
        s.value.ended && s.value.settlement ? (b(), w("div", a0, [
          d("div", c0, [
            z[8] || (z[8] = d("span", null, "结果", -1)),
            d("b", null, _(s.value.settlement.result ?? "—"), 1)
          ]),
          d("div", u0, [
            z[9] || (z[9] = d("span", null, "评价", -1)),
            d("b", null, _(s.value.settlement.rating ?? "—"), 1)
          ]),
          S(A).session?.clearance && s.value.settlement.result === "失败" ? (b(), w("div", d0, " 清算未通关 ")) : F("", !0)
        ])) : s.value.ended ? (b(), w("div", A0, "副本已手动结束。")) : F("", !0),
        c.value && s.value.panel ? (b(), w("div", f0, [
          s.value.panel.progressBar ? (b(), w("div", p0, [
            z[10] || (z[10] = d("span", null, "进度", -1)),
            d("b", h0, _(s.value.panel.progressBar), 1)
          ])) : F("", !0),
          s.value.panel.tasks.length ? (b(), w("div", m0, [
            z[11] || (z[11] = d("span", null, "任务", -1)),
            d("ul", null, [
              (b(!0), w(J, null, ce(s.value.panel.tasks, (k, R) => (b(), w("li", { key: R }, _(k), 1))), 128))
            ])
          ])) : F("", !0),
          s.value.panel.ps ? (b(), w("div", g0, "ps：" + _(s.value.panel.ps), 1)) : F("", !0)
        ])) : F("", !0),
        d("div", x0, [
          d("button", {
            class: "rlzc-btn",
            disabled: !f.value,
            onClick: z[0] || (z[0] = //@ts-ignore
            (...k) => S(yl) && S(yl)(...k))
          }, "跳过（到本阶段结束）", 8, v0),
          d("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: z[1] || (z[1] = //@ts-ignore
            (...k) => S(bl) && S(bl)(...k))
          }, "手动结束副本", 8, y0)
        ]),
        r.value && S(A).pack.docs?.length ? (b(), We(El, {
          key: 5,
          pack: S(A).pack
        }, null, 8, ["pack"])) : F("", !0)
      ], 64)) : (b(), w("div", b0, [
        z[12] || (z[12] = d("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        _e(Ml)
      ])),
      r.value ? F("", !0) : (b(), w("div", k0, [
        z[14] || (z[14] = d("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        d("div", w0, [
          pt(d("select", {
            "onUpdate:modelValue": z[2] || (z[2] = (k) => t.value = k),
            class: "rlzc-input"
          }, [
            z[13] || (z[13] = d("option", { value: "" }, "选择副本…", -1)),
            (b(!0), w(J, null, ce(S(A).seenGeneric, (k) => (b(), w("option", {
              key: `g-${k.name}`,
              value: S(tr) + k.name
            }, _(S(ds)(k)) + "｜" + _(k.name) + "（未收录）", 9, z0))), 128)),
            (b(!0), w(J, null, ce(S(A).packs, (k) => (b(), w("option", {
              key: k.id,
              value: k.id
            }, _(k.level) + "｜" + _(k.name), 9, _0))), 128))
          ], 512), [
            [Va, t.value]
          ]),
          d("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: h
          }, "进入", 8, $0)
        ]),
        o.value ? (b(), w("p", S0, "未收录，将使用通用副本包")) : F("", !0)
      ])),
      !r.value && i.value?.docs?.length ? (b(), We(El, {
        key: 3,
        pack: i.value
      }, null, 8, ["pack"])) : F("", !0)
    ]));
  }
}), E0 = { class: "rlzc-ledger" }, M0 = { class: "rlzc-card rlzc-ledger-hero-card" }, T0 = { class: "rlzc-ledger-hero-cols" }, I0 = { class: "rlzc-ledger-hero-col" }, N0 = { class: "rlzc-ledger-hero-col-val" }, P0 = { class: "rlzc-ledger-hero-col" }, R0 = { class: "rlzc-ledger-hero-col-val" }, L0 = { class: "rlzc-ledger-hero-col" }, D0 = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, F0 = { class: "rlzc-card" }, j0 = {
  key: 0,
  class: "rlzc-ledger-list"
}, O0 = { class: "rlzc-ledger-item-left" }, B0 = { class: "rlzc-ledger-item-src" }, V0 = { class: "rlzc-ledger-item-time" }, U0 = { class: "rlzc-ledger-item-right" }, H0 = { class: "rlzc-ledger-item-after" }, W0 = {
  key: 1,
  class: "rlzc-hint"
}, G0 = /* @__PURE__ */ Be({
  __name: "LedgerTab",
  setup(e) {
    const t = H(() => q()), n = H(() => St(t.value)), s = H(() => A.ledger), r = H(() => fn(n.value.value, s.value)), i = H(() => {
      const z = Um(n.value.value, s.value);
      return s.value.map((k, R) => ({ e: k, after: z[R] })).reverse();
    }), o = H(() => (A.tick, st(t.value))), l = H(() => $t[o.value]), c = H(() => As(n.value.value, s.value, l.value)), a = H(() => Math.max(0, l.value - r.value)), u = H(() => n.value.source === "默认值");
    function f(z) {
      return new Intl.NumberFormat("zh-CN").format(z);
    }
    function h(z) {
      return (z >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(z);
    }
    function x(z) {
      try {
        const k = new Date(z), R = String(k.getMonth() + 1).padStart(2, "0"), U = String(k.getDate()).padStart(2, "0"), D = String(k.getHours()).padStart(2, "0"), E = String(k.getMinutes()).padStart(2, "0");
        return `${R}-${U} ${D}:${E}`;
      } catch {
        return z;
      }
    }
    return (z, k) => (b(), w("div", E0, [
      d("div", M0, [
        k[3] || (k[3] = d("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        d("b", {
          class: Z(["rlzc-ledger-hero-num", { negative: r.value < 0 }])
        }, _(f(r.value)), 3),
        k[4] || (k[4] = d("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        d("div", T0, [
          d("div", I0, [
            k[0] || (k[0] = d("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            d("span", N0, _(o.value), 1)
          ]),
          d("div", P0, [
            k[1] || (k[1] = d("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            d("span", R0, _(f(l.value)), 1)
          ]),
          d("div", L0, [
            k[2] || (k[2] = d("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            d("span", {
              class: Z(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": c.value }])
            }, _(c.value ? `距线 ${f(a.value)}` : "无"), 3)
          ])
        ]),
        u.value ? (b(), w("p", D0, "初始积分按 1000 计，可在设置页修改")) : F("", !0)
      ]),
      d("div", F0, [
        k[5] || (k[5] = d("h4", null, "流水", -1)),
        s.value.length ? (b(), w("ul", j0, [
          (b(!0), w(J, null, ce(i.value, (R, U) => (b(), w("li", {
            key: `${U}-${R.e.mesIndex}-${R.e.delta}-${R.e.at}`,
            class: "rlzc-ledger-item"
          }, [
            d("div", O0, [
              d("span", B0, _(R.e.source), 1),
              d("span", V0, _(x(R.e.at)), 1)
            ]),
            d("div", U0, [
              d("span", {
                class: Z(["rlzc-ledger-item-delta", R.e.delta >= 0 ? "pos" : "neg"])
              }, _(h(R.e.delta)), 3),
              d("span", H0, "余额 " + _(f(R.after)), 1)
            ])
          ]))), 128))
        ])) : (b(), w("p", W0, "还没有收支记录。"))
      ])
    ]));
  }
}), K0 = { class: "rlzc-market" }, q0 = { class: "rlzc-subtabs rlzc-market-tabs" }, Y0 = { class: "rlzc-card rlzc-mk-status" }, J0 = { class: "rlzc-mk-q" }, Z0 = { class: "rlzc-mk-tag" }, X0 = { class: "rlzc-mk-opts" }, Q0 = ["disabled", "onClick"], ey = { class: "rlzc-row rlzc-mk-bet" }, ty = ["onUpdate:modelValue"], ny = ["disabled", "onClick"], sy = { class: "rlzc-hint" }, ry = {
  key: 0,
  class: "rlzc-mk-red"
}, iy = {
  key: 1,
  class: "rlzc-mk-mine"
}, oy = {
  key: 1,
  class: "rlzc-card"
}, ly = {
  key: 0,
  class: "rlzc-tk-list"
}, ay = { class: "rlzc-tk-left" }, cy = { class: "rlzc-tk-title" }, uy = {
  key: 1,
  class: "rlzc-hint"
}, dy = {
  key: 0,
  class: "rlzc-card rlzc-mk-status"
}, Ay = { class: "rlzc-cs-tables" }, fy = ["onClick"], py = {
  key: 0,
  class: "rlzc-card rlzc-cs-play"
}, hy = {
  key: 0,
  class: "rlzc-segsrc rlzc-cs-seg"
}, my = ["onClick"], gy = ["onClick"], xy = { class: "rlzc-row rlzc-mk-bet" }, vy = ["disabled"], yy = { class: "rlzc-hint" }, by = {
  key: 2,
  class: "rlzc-mk-red"
}, ky = /* @__PURE__ */ Be({
  __name: "MarketTab",
  setup(e) {
    const t = /* @__PURE__ */ xe("book"), n = (j) => new Intl.NumberFormat("en-US").format(j), s = (j) => `×${j.toFixed(2)}`, r = H(() => A.market.pending), i = H(() => (A.tick, st())), o = H(() => A.market.book), l = H(() => !!o.value?.closedAt), c = H(() => {
      const j = o.value;
      return j && j.closedAt ? `《${j.packName}》已封盘` : j ? `《${j.packName}》开盘中 · 第1轮结束封盘${j.freak?.status === "pending" ? " · 庄家出题中" : ""}` : A.session?.status === "active" && A.pack?.rest ? "休整副本不开盘。" : "进副本后开盘。";
    }), a = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" }, u = /* @__PURE__ */ xe({}), f = /* @__PURE__ */ xe({});
    function h(j, K) {
      l.value || A.market.results[j.id] || (u.value = { ...u.value, [j.id]: u.value[j.id] === K ? "" : K });
    }
    function x(j) {
      A.tick;
      const K = f.value[j.id];
      return cu(j.id, typeof K == "number" ? K : 0);
    }
    function z(j) {
      const K = u.value[j.id], G = f.value[j.id];
      if (!K || typeof G != "number") return;
      const ge = mv(j.id, K, G);
      if (ge) {
        Se("warning", ge);
        return;
      }
      f.value = { ...f.value, [j.id]: null }, u.value = { ...u.value, [j.id]: "" };
    }
    function k(j) {
      const K = o.value;
      return K ? A.market.tickets.filter((G) => G.book.session === K.session && G.ticket.market === j.id) : [];
    }
    function R(j) {
      return j.market?.options.find((K) => K.id === j.ticket.option)?.label ?? j.ticket.option;
    }
    function U(j) {
      return `${j.book.packName} · ${j.market?.q ?? j.ticket.market} · ${R(j)}`;
    }
    function D(j) {
      const K = j.ticket, G = j.res?.stamp;
      return G ? G === "win" ? `押 ${n(K.stake)} · ${s(K.odds)} · 兑 ${n(Wc(K.stake, K.odds))}` : G === "lose" ? `押 ${n(K.stake)} · ${s(K.odds)}` : `押 ${n(K.stake)} · 原数退还` : `押 ${n(K.stake)} · ${s(K.odds)} · 待开奖`;
    }
    const E = { win: "兑", lose: "废", refund: "退" }, M = H(() => A.market.tables.map((j) => wn(j)).filter((j) => !!j)), ee = /* @__PURE__ */ xe(""), te = H(() => ee.value ? wn(ee.value) : void 0), X = /* @__PURE__ */ xe(""), re = /* @__PURE__ */ xe(null), C = /* @__PURE__ */ xe(!1), p = /* @__PURE__ */ xe(""), m = /* @__PURE__ */ xe(null);
    let v = null;
    function N(j) {
      if (ee.value === j) {
        ee.value = "";
        return;
      }
      ee.value = j;
      const K = wn(j);
      X.value = K && K.bets.length === 1 ? K.bets[0].id : "", m.value = null;
    }
    const ie = H(() => (te.value?.bets ?? []).filter((j) => !/^[nd]\d+$/.test(j.id))), le = H(() => (te.value?.bets ?? []).filter((j) => /^[nd]\d+$/.test(j.id))), Pe = H(() => (A.tick, uu(typeof re.value == "number" ? re.value : 0)));
    function rt() {
      try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      } catch {
        return !1;
      }
    }
    function Xe(j, K) {
      return j === "bell" ? `${K[0]}下` : j === "door" ? `${K[0]}号门` : j === "lot" ? `第${K[0]}支` : `${K[0]} : ${K[1]}`;
    }
    function hn() {
      const j = te.value, K = re.value;
      if (!j || !X.value || typeof K != "number" || C.value) return;
      const G = gv(j.id, X.value, K);
      if (G.error || !G.outcome) {
        Se("warning", G.error ?? "不能下注");
        return;
      }
      const ge = { ...G.outcome, stake: K };
      if (m.value = null, rt()) {
        p.value = Xe(j.id, ge.faces), m.value = ge;
        return;
      }
      C.value = !0;
      const gs = j.id === "bell" ? 12 : j.id === "door" ? 20 : j.id === "lot" ? 3 : 13, Et = () => 1 + Math.floor(Math.random() * gs);
      v = setInterval(() => p.value = Xe(j.id, [Et(), Et()]), 80), setTimeout(() => {
        v && clearInterval(v), v = null, p.value = Xe(j.id, ge.faces), C.value = !1, m.value = ge;
      }, 1200);
    }
    const Gt = H(() => {
      const j = m.value;
      return j ? `结果：${j.result}。${j.win ? `赢 ${n(j.payout)}` : `输 ${n(j.stake)}`}` : "";
    });
    return Mi(() => {
      v && clearInterval(v);
    }), (j, K) => (b(), w("div", K0, [
      d("nav", q0, [
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
      t.value === "book" ? (b(), w(J, { key: 0 }, [
        d("div", Y0, _(c.value), 1),
        (b(!0), w(J, null, ce(o.value?.markets ?? [], (G) => (b(), w("div", {
          key: G.id,
          class: "rlzc-card rlzc-mk-card"
        }, [
          d("div", J0, [
            d("span", Z0, _(a[G.kind]), 1),
            Ee(_(G.q), 1)
          ]),
          d("div", X0, [
            (b(!0), w(J, null, ce(G.options, (ge) => (b(), w("button", {
              key: ge.id,
              class: Z(["rlzc-mk-opt", { on: u.value[G.id] === ge.id }]),
              disabled: l.value || !!S(A).market.results[G.id],
              onClick: (gs) => h(G, ge.id)
            }, [
              d("span", null, _(ge.label), 1),
              d("b", null, _(s(ge.odds)), 1)
            ], 10, Q0))), 128))
          ]),
          u.value[G.id] && !l.value ? (b(), w(J, { key: 0 }, [
            d("div", ey, [
              pt(d("input", {
                "onUpdate:modelValue": (ge) => f.value[G.id] = ge,
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 8, ty), [
                [
                  Nt,
                  f.value[G.id],
                  void 0,
                  { number: !0 }
                ]
              ]),
              d("button", {
                class: "rlzc-btn",
                disabled: typeof f.value[G.id] != "number",
                onClick: (ge) => z(G)
              }, "下注", 8, ny)
            ]),
            d("p", sy, "单注上限 " + _(n(x(G).cap)) + "（" + _(i.value) + "级）", 1),
            x(G).belowKill ? (b(), w("p", ry, "押完余额低于斩杀线")) : F("", !0)
          ], 64)) : F("", !0),
          k(G).length ? (b(), w("ul", iy, [
            (b(!0), w(J, null, ce(k(G), (ge) => (b(), w("li", {
              key: ge.ticket.id
            }, _(R(ge)) + " · " + _(D(ge)), 1))), 128))
          ])) : F("", !0)
        ]))), 128))
      ], 64)) : t.value === "tickets" ? (b(), w("div", oy, [
        S(A).market.tickets.length ? (b(), w("ul", ly, [
          (b(!0), w(J, null, ce(S(A).market.tickets, (G) => (b(), w("li", {
            key: G.ticket.id,
            class: "rlzc-tk"
          }, [
            d("div", ay, [
              d("span", cy, _(U(G)), 1),
              d("small", null, _(D(G)), 1)
            ]),
            d("span", {
              class: Z(["rlzc-stamp", G.res ? G.res.stamp : "pending"])
            }, _(G.res ? E[G.res.stamp] : "待"), 3)
          ]))), 128))
        ])) : (b(), w("p", uy, "还没有赌票。"))
      ])) : (b(), w(J, { key: 2 }, [
        S(A).market.casinoOpen ? (b(), w(J, { key: 1 }, [
          K[4] || (K[4] = d("p", { class: "rlzc-hint" }, "今晚开两张桌，回到回廊换一批。", -1)),
          d("div", Ay, [
            (b(!0), w(J, null, ce(M.value, (G) => (b(), w("button", {
              key: G.id,
              class: Z(["rlzc-card rlzc-cs-table", { on: ee.value === G.id }]),
              onClick: (ge) => N(G.id)
            }, [
              d("b", null, _(G.name), 1),
              d("small", null, _(G.desc), 1)
            ], 10, fy))), 128))
          ]),
          te.value ? (b(), w("div", py, [
            d("h4", null, _(te.value.name), 1),
            ie.value.length ? (b(), w("div", hy, [
              (b(!0), w(J, null, ce(ie.value, (G) => (b(), w("button", {
                key: G.id,
                class: Z({ on: X.value === G.id }),
                onClick: (ge) => X.value = G.id
              }, _(G.label), 11, my))), 128))
            ])) : F("", !0),
            le.value.length ? (b(), w("div", {
              key: 1,
              class: Z(["rlzc-cs-grid", te.value.id])
            }, [
              (b(!0), w(J, null, ce(le.value, (G) => (b(), w("button", {
                key: G.id,
                class: Z({ on: X.value === G.id }),
                onClick: (ge) => X.value = G.id
              }, _(G.label), 11, gy))), 128))
            ], 2)) : F("", !0),
            d("div", xy, [
              pt(d("input", {
                "onUpdate:modelValue": K[3] || (K[3] = (G) => re.value = G),
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 512), [
                [
                  Nt,
                  re.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              d("button", {
                class: "rlzc-btn",
                disabled: !X.value || typeof re.value != "number" || C.value,
                onClick: hn
              }, "开", 8, vy)
            ]),
            d("p", yy, "单注上限 " + _(n(Pe.value.cap)) + "（" + _(i.value) + "级）", 1),
            Pe.value.belowKill ? (b(), w("p", by, "押完余额低于斩杀线")) : F("", !0),
            C.value || m.value ? (b(), w("div", {
              key: 3,
              class: Z(["rlzc-cs-face", { rolling: C.value }])
            }, _(p.value || ""), 3)) : F("", !0),
            m.value ? (b(), w("p", {
              key: 4,
              class: Z(["rlzc-cs-result", m.value.win ? "win" : "lose"])
            }, _(Gt.value), 3)) : F("", !0)
          ])) : F("", !0)
        ], 64)) : (b(), w("div", dy, "赌坊只在回廊营业。"))
      ], 64))
    ]));
  }
}), wy = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, zy = ["aria-expanded"], _y = ["data-kind"], $y = {
  key: 0,
  class: "rlzc-collapse-body"
}, Sy = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, Cy = {
  key: 0,
  class: "rlzc-preset-area"
}, Ey = { class: "rlzc-preset-row" }, My = ["value"], Ty = {
  key: 0,
  value: ""
}, Iy = ["value"], Ny = ["disabled"], Py = ["disabled"], Ry = { class: "rlzc-stacked-field" }, Ly = ["value"], Dy = { class: "rlzc-stacked-field" }, Fy = { class: "rlzc-key-wrap" }, jy = ["type", "value"], Oy = ["aria-label"], By = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Vy = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Uy = { class: "rlzc-stacked-field" }, Hy = {
  key: 0,
  value: "",
  selected: "",
  disabled: ""
}, Wy = ["value"], Gy = ["value", "selected"], Ky = ["value"], qy = { class: "rlzc-check-btns" }, Yy = ["disabled"], Jy = ["disabled"], Zy = {
  key: 0,
  class: "rlzc-check-list"
}, Xy = ["data-kind"], Qy = { class: "rlzc-check-text" }, eb = {
  key: 0,
  class: "rlzc-check-time"
}, tb = {
  key: 1,
  class: "rlzc-option-list"
}, nb = { class: "rlzc-option-row" }, sb = ["aria-checked"], rb = { class: "rlzc-option-row" }, ib = ["aria-checked"], ob = { class: "rlzc-option-row rlzc-option-row-timeout" }, lb = { class: "rlzc-timeout-wrap" }, ab = ["value"], cb = /* @__PURE__ */ Be({
  __name: "SubApiCard",
  setup(e) {
    const t = H(() => A.settings.subApi), n = H(() => t.value.presets.find((C) => C.id === t.value.presetId) ?? null), s = H(() => n.value?.models ?? []), r = /* @__PURE__ */ xe(!1), i = /* @__PURE__ */ xe(""), o = /* @__PURE__ */ xe(""), l = H(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : Im(n.value)), c = H(() => {
      const C = n.value;
      if (!C) return [];
      const p = (m, v, N) => v && N ? [{ id: m, text: v, kind: N.ok ? "on" : "warn", time: N.at ? Em(N.at) : "" }] : [];
      return [...p("fetch", Mm(C), C.fetchResult), ...p("test", Tm(C), C.testResult)];
    }), a = H(() => A.settings.cardCollapsed.subApi);
    function u() {
      A.settings.cardCollapsed.subApi = !A.settings.cardCollapsed.subApi, f();
    }
    function f() {
      ke();
    }
    function h(C) {
      t.value.source = C, f();
    }
    function x() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function z() {
      const C = (await sl("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!C) return;
      const p = { id: x(), name: C, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, p], t.value.presetId = p.id, f();
    }
    async function k() {
      if (!n.value) return;
      const C = (await sl("改名为：", n.value.name))?.trim();
      C && (n.value.name = C, f());
    }
    async function R() {
      n.value && await Ht(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((C) => C.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", f());
    }
    function U(C) {
      t.value.presetId = C.target.value, f();
    }
    function D(C, p) {
      $x(C, p.target.value);
    }
    function E() {
      return Math.max(5, Number(t.value.timeoutSec) || 60) * 1e3;
    }
    function M(C, p, m) {
      return C.url === p.url && C.key === p.key && (!m || C.model === p.model);
    }
    async function ee() {
      const C = n.value;
      if (!C || !il(C) || i.value) return;
      const p = { ...C };
      i.value = C.id;
      try {
        const m = await zm(p, E());
        M(C, p, !1) && ll(C, { ok: !0, models: m });
      } catch (m) {
        M(C, p, !1) && ll(C, { ok: !1, reason: Ai(m) });
      } finally {
        i.value = "", f();
      }
    }
    async function te() {
      const C = n.value;
      if (!C || !ol(C) || o.value) return;
      const p = { ...C };
      o.value = C.id;
      try {
        await $m(p, E()), M(C, p, !0) && al(C, { ok: !0 });
      } catch (m) {
        M(C, p, !0) && al(C, { ok: !1, reason: Ai(m) });
      } finally {
        o.value = "", f();
      }
    }
    function X(C) {
      const p = Math.floor(Number(C.target.value));
      if (!Number.isFinite(p) || p < 5) {
        Se("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = p, f();
    }
    function re(C, p) {
      t.value[C] = p, f();
    }
    return (C, p) => (b(), w("div", wy, [
      d("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !a.value,
        onClick: u
      }, [
        p[9] || (p[9] = d("h4", null, "副本事件检测", -1)),
        d("span", {
          class: "rlzc-dot",
          "data-kind": l.value.kind
        }, _(l.value.text), 9, _y),
        d("span", {
          class: Z(["rlzc-collapse-arrow", { open: !a.value }])
        }, "▸", 2)
      ], 8, zy),
      a.value ? F("", !0) : (b(), w("div", $y, [
        p[24] || (p[24] = d("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        d("div", Sy, [
          d("button", {
            class: Z({ on: t.value.source === "off" }),
            onClick: p[0] || (p[0] = (m) => h("off"))
          }, "关闭", 2),
          d("button", {
            class: Z({ on: t.value.source === "main" }),
            onClick: p[1] || (p[1] = (m) => h("main"))
          }, "跟随主API", 2),
          d("button", {
            class: Z({ on: t.value.source === "preset" }),
            onClick: p[2] || (p[2] = (m) => h("preset"))
          }, "自设API", 2)
        ]),
        t.value.source === "preset" ? (b(), w("div", Cy, [
          d("div", Ey, [
            d("select", {
              class: "rlzc-input",
              value: t.value.presetId,
              onChange: U
            }, [
              t.value.presets.length ? F("", !0) : (b(), w("option", Ty, "还没有保存的接口")),
              (b(!0), w(J, null, ce(t.value.presets, (m) => (b(), w("option", {
                key: m.id,
                value: m.id
              }, _(m.name), 9, Iy))), 128))
            ], 40, My),
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
              onClick: k
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
            ])], 8, Ny),
            d("button", {
              class: "rlzc-icon-btn rlzc-danger",
              "aria-label": "删除接口",
              type: "button",
              disabled: !n.value,
              onClick: R
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
            ])], 8, Py)
          ]),
          n.value ? (b(), w(J, { key: 0 }, [
            d("div", Ry, [
              p[13] || (p[13] = d("label", { class: "rlzc-label" }, "地址", -1)),
              d("input", {
                class: "rlzc-input",
                value: n.value.url,
                placeholder: "https://…/v1",
                onInput: p[3] || (p[3] = (m) => D("url", m))
              }, null, 40, Ly)
            ]),
            d("div", Dy, [
              p[16] || (p[16] = d("label", { class: "rlzc-label" }, "密钥", -1)),
              d("div", Fy, [
                d("input", {
                  class: "rlzc-input",
                  type: r.value ? "text" : "password",
                  value: n.value.key,
                  autocomplete: "off",
                  onInput: p[4] || (p[4] = (m) => D("key", m))
                }, null, 40, jy),
                d("button", {
                  class: "rlzc-eye-btn",
                  type: "button",
                  "aria-label": r.value ? "隐藏密钥" : "显示密钥",
                  onClick: p[5] || (p[5] = (m) => r.value = !r.value)
                }, [
                  r.value ? (b(), w("svg", By, [...p[14] || (p[14] = [
                    d("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    d("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1),
                    d("path", { d: "M2 2l12 12" }, null, -1)
                  ])])) : (b(), w("svg", Vy, [...p[15] || (p[15] = [
                    d("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    d("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1)
                  ])]))
                ], 8, Oy)
              ])
            ]),
            d("div", Uy, [
              p[17] || (p[17] = d("label", { class: "rlzc-label" }, "模型", -1)),
              s.value.length ? (b(), w("select", {
                key: 0,
                class: "rlzc-input",
                onChange: p[6] || (p[6] = (m) => D("model", m))
              }, [
                n.value.model ? F("", !0) : (b(), w("option", Hy, "请选择…")),
                n.value.model && !s.value.includes(n.value.model) ? (b(), w("option", {
                  key: 1,
                  value: n.value.model,
                  selected: ""
                }, _(n.value.model), 9, Wy)) : F("", !0),
                (b(!0), w(J, null, ce(s.value, (m) => (b(), w("option", {
                  key: m,
                  value: m,
                  selected: m === n.value.model
                }, _(m), 9, Gy))), 128))
              ], 32)) : (b(), w("input", {
                key: 1,
                class: "rlzc-input rlzc-input-disabled",
                value: n.value.model ? n.value.model : "先拉取模型",
                readonly: "",
                tabindex: "-1"
              }, null, 8, Ky))
            ]),
            d("div", qy, [
              d("button", {
                class: "rlzc-btn ghost",
                type: "button",
                disabled: !!i.value || !S(il)(n.value),
                onClick: ee
              }, _(i.value === n.value.id ? "拉取中…" : "拉取模型"), 9, Yy),
              d("button", {
                class: "rlzc-btn ghost",
                type: "button",
                disabled: !!o.value || !S(ol)(n.value),
                onClick: te
              }, _(o.value === n.value.id ? "测试中…" : "测试模型"), 9, Jy)
            ]),
            c.value.length ? (b(), w("ul", Zy, [
              (b(!0), w(J, null, ce(c.value, (m) => (b(), w("li", {
                key: m.id,
                "data-kind": m.kind
              }, [
                d("span", Qy, _(m.text), 1),
                m.time ? (b(), w("time", eb, _(m.time), 1)) : F("", !0)
              ], 8, Xy))), 128))
            ])) : F("", !0)
          ], 64)) : F("", !0)
        ])) : F("", !0),
        t.value.source !== "off" ? (b(), w("div", tb, [
          d("div", nb, [
            p[19] || (p[19] = d("div", { class: "rlzc-option-label" }, [
              d("span", null, "省钱模式"),
              d("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            d("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: Z(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: p[7] || (p[7] = (m) => re("saveMode", !t.value.saveMode))
            }, [...p[18] || (p[18] = [
              d("span", null, null, -1)
            ])], 10, sb)
          ]),
          d("div", rb, [
            p[21] || (p[21] = d("div", { class: "rlzc-option-label" }, [
              d("span", null, "等检测完再写下一轮"),
              d("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            d("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: Z(["rlzc-toggle", { on: t.value.wait }]),
              onClick: p[8] || (p[8] = (m) => re("wait", !t.value.wait))
            }, [...p[20] || (p[20] = [
              d("span", null, null, -1)
            ])], 10, ib)
          ]),
          d("div", ob, [
            p[23] || (p[23] = d("span", null, "超时", -1)),
            d("div", lb, [
              d("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: X
              }, null, 40, ab),
              p[22] || (p[22] = d("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : F("", !0)
      ]))
    ]));
  }
}), ub = { class: "rlzc-card rlzc-collapsible rlzc-live-card" }, db = ["aria-expanded"], Ab = {
  key: 0,
  class: "rlzc-dot",
  "data-kind": "on"
}, fb = {
  key: 0,
  class: "rlzc-collapse-body"
}, pb = { class: "rlzc-onair-text" }, hb = {
  key: 0,
  class: "rlzc-onair-lock",
  "aria-label": "副本内已锁定"
}, mb = { class: "rlzc-option-list" }, gb = { class: "rlzc-option-row rlzc-option-row-stack" }, xb = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "弹幕来源"
}, vb = ["disabled"], yb = {
  key: 0,
  class: "rlzc-hint"
}, bb = {
  key: 0,
  class: "rlzc-option-row"
}, kb = { class: "rlzc-timeout-wrap" }, wb = ["value"], zb = { class: "rlzc-option-row" }, _b = ["aria-checked"], $b = /* @__PURE__ */ Be({
  __name: "LiveCard",
  setup(e) {
    const t = H(() => A.settings.live), n = H(() => A.settings.subApi.source !== "off"), s = H(() => n.value ? t.value.source : "local"), r = H(() => (A.tick, A.session, lv())), i = H(() => r.value.on);
    function o() {
      r.value.locked || iu();
    }
    const l = H(() => A.settings.cardCollapsed.live);
    function c() {
      A.settings.cardCollapsed.live = !A.settings.cardCollapsed.live, ke();
    }
    function a(h) {
      h === "ai" && !n.value || (t.value.source = h, ke());
    }
    function u(h) {
      const x = Math.floor(Number(h.target.value));
      t.value.freq = Number.isFinite(x) ? Math.max(1, Math.min(10, x)) : 3, h.target.value = String(t.value.freq), ke();
    }
    function f(h) {
      t.value.injectToAI = h, ke();
    }
    return (h, x) => (b(), w("div", ub, [
      d("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !l.value,
        onClick: c
      }, [
        x[3] || (x[3] = d("h4", null, "直播", -1)),
        i.value ? (b(), w("span", Ab, "直播中")) : F("", !0),
        d("span", {
          class: Z(["rlzc-collapse-arrow", { open: !l.value }])
        }, "▸", 2)
      ], 8, db),
      l.value ? F("", !0) : (b(), w("div", fb, [
        x[12] || (x[12] = d("p", { class: "rlzc-hint" }, "开播后有观众弹幕和打赏，打赏计入积分。画面在状态栏的直播页。", -1)),
        d("div", {
          class: Z(["rlzc-onair", { on: r.value.on, locked: r.value.locked }])
        }, [
          x[5] || (x[5] = d("span", {
            class: "rlzc-onair-dot",
            "aria-hidden": "true"
          }, null, -1)),
          d("div", pb, [
            d("strong", null, _(r.value.on ? "直播中" : "未开播"), 1),
            d("small", null, _(r.value.note), 1)
          ]),
          r.value.locked ? (b(), w("span", hb, [...x[4] || (x[4] = [
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
            Ee(" 已锁定 ", -1)
          ])])) : (b(), w("button", {
            key: 1,
            type: "button",
            class: Z(["rlzc-onair-btn", { stop: r.value.on }]),
            onClick: o
          }, _(r.value.on ? "下播" : "开播"), 3))
        ], 2),
        d("div", mb, [
          d("div", gb, [
            x[6] || (x[6] = d("span", { class: "rlzc-option-label" }, [
              d("span", null, "弹幕来源")
            ], -1)),
            d("div", xb, [
              d("button", {
                class: Z({ on: s.value === "local" }),
                onClick: x[0] || (x[0] = (z) => a("local"))
              }, "本地", 2),
              d("button", {
                class: Z({ on: s.value === "ai" }),
                disabled: !n.value,
                onClick: x[1] || (x[1] = (z) => a("ai"))
              }, "本地+AI", 10, vb)
            ]),
            n.value ? F("", !0) : (b(), w("small", yb, "需先在副本事件检测里选接口"))
          ]),
          s.value === "ai" ? (b(), w("div", bb, [
            x[9] || (x[9] = d("div", { class: "rlzc-option-label" }, [
              d("span", null, "生成频率"),
              d("small", null, "关键事件时另加一次")
            ], -1)),
            d("div", kb, [
              x[7] || (x[7] = d("span", { class: "rlzc-unit" }, "每", -1)),
              d("input", {
                type: "number",
                min: "1",
                max: "10",
                class: "rlzc-input rlzc-input-num",
                value: t.value.freq,
                onChange: u
              }, null, 40, wb),
              x[8] || (x[8] = d("span", { class: "rlzc-unit" }, "轮", -1))
            ])
          ])) : F("", !0),
          d("div", zb, [
            x[11] || (x[11] = d("div", { class: "rlzc-option-label" }, [
              d("span", null, "弹幕传给AI"),
              d("small", null, "主AI能看到最近弹幕")
            ], -1)),
            d("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.injectToAI ? "true" : "false",
              class: Z(["rlzc-toggle", { on: t.value.injectToAI }]),
              onClick: x[2] || (x[2] = (z) => f(!t.value.injectToAI))
            }, [...x[10] || (x[10] = [
              d("span", null, null, -1)
            ])], 10, _b)
          ])
        ])
      ]))
    ]));
  }
}), Sb = { class: "rlzc-settings" }, Cb = { class: "rlzc-card" }, Eb = ["value"], Mb = { class: "rlzc-card rlzc-collapsible rlzc-format-card" }, Tb = ["aria-expanded"], Ib = {
  key: 0,
  class: "rlzc-collapse-status"
}, Nb = {
  key: 0,
  class: "rlzc-collapse-body"
}, Pb = { class: "rlzc-option-row" }, Rb = ["aria-checked"], Lb = { class: "rlzc-card rlzc-collapsible" }, Db = ["aria-expanded"], Fb = {
  key: 0,
  class: "rlzc-collapse-body"
}, jb = { class: "rlzc-ledger-status" }, Ob = { class: "rlzc-row" }, Bb = ["placeholder"], Vb = ["disabled"], Ub = { class: "rlzc-row" }, Hb = ["disabled"], Wb = { class: "rlzc-row" }, Gb = { class: "rlzc-seg-group" }, Kb = ["aria-pressed", "onClick"], qb = ["disabled"], Yb = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, Jb = { class: "rlzc-card rlzc-collapsible" }, Zb = ["aria-expanded"], Xb = {
  key: 0,
  class: "rlzc-collapse-body"
}, Qb = { class: "rlzc-depth" }, e1 = { class: "rlzc-field rlzc-field-num" }, t1 = ["value"], n1 = { class: "rlzc-field rlzc-field-num" }, s1 = ["value"], r1 = { class: "rlzc-field rlzc-field-num" }, i1 = ["value"], o1 = { class: "rlzc-field rlzc-field-num" }, l1 = ["value"], a1 = { class: "rlzc-field rlzc-field-num" }, c1 = ["value"], u1 = { class: "rlzc-field rlzc-field-num" }, d1 = ["value"], A1 = { class: "rlzc-card rlzc-collapsible" }, f1 = ["aria-expanded"], p1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, h1 = ["value", "onChange"], m1 = { class: "rlzc-card" }, g1 = {
  key: 0,
  class: "rlzc-list"
}, x1 = ["onClick"], v1 = {
  key: 1,
  class: "rlzc-hint"
}, y1 = {
  key: 2,
  class: "rlzc-errors"
}, b1 = { class: "rlzc-card" }, k1 = { class: "rlzc-check" }, w1 = ["checked"], z1 = { class: "rlzc-check" }, _1 = ["checked"], $1 = /* @__PURE__ */ Be({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ xe([]), n = /* @__PURE__ */ xe(null), s = /* @__PURE__ */ xe(null), r = /* @__PURE__ */ xe(null), i = /* @__PURE__ */ xe(""), o = /* @__PURE__ */ xe(""), l = /* @__PURE__ */ xe(""), c = ["D", "C", "B", "A", "S"], a = H(() => St(q())), u = H(() => fn(a.value.value, A.ledger)), f = H(() => (A.tick, st(q()))), h = H(() => $t[f.value]), x = H(() => As(a.value.value, A.ledger, h.value));
    function z() {
      s.value !== null && (Ix(s.value), s.value = null);
    }
    function k() {
      r.value !== null && (Tx(r.value, i.value || "手动"), r.value = null, i.value = "");
    }
    function R() {
      !o.value && !l.value || (Nx(o.value || void 0, l.value || void 0), o.value = "", l.value = "", Se("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function U(C, p) {
      const m = Math.max(0, Math.min(1e4, Math.floor(Number(p.target.value) || 0)));
      A.settings.depths[C] = m, ke();
    }
    async function D(C) {
      const p = C.target, m = p.files?.[0];
      p.value = "", m && (t.value = Sx(await m.text()), t.value.length || Se("success", `已导入副本包：${m.name}`));
    }
    async function E(C, p) {
      await Ht(`确定删除自定义副本包《${p}》吗？`) && Cx(C);
    }
    function M(C, p) {
      const m = Math.floor(Number(p.target.value));
      !Number.isFinite(m) || m < 1 || (A.settings.genericCaps = { ...A.settings.genericCaps, [C]: m }, ke());
    }
    function ee(C) {
      ev(C.target.value);
    }
    function te(C) {
      A.settings.statusBarFix = C, ke();
    }
    function X(C, p) {
      A.settings[C] = p.target.checked, ke();
    }
    function re(C) {
      A.settings.cardCollapsed[C] = !A.settings.cardCollapsed[C], ke();
    }
    return (C, p) => (b(), w(J, null, [
      d("div", Sb, [
        d("div", Cb, [
          p[19] || (p[19] = d("h4", null, "副本信息显示位置", -1)),
          d("select", {
            class: "rlzc-input",
            value: S(A).settings.panelDisplay,
            onChange: ee
          }, [...p[18] || (p[18] = [
            d("option", { value: "panel" }, "扩展面板（默认）", -1),
            d("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, Eb),
          p[20] || (p[20] = d("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        d("div", Mb, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !S(A).settings.cardCollapsed.statusBar,
            onClick: p[0] || (p[0] = (m) => re("statusBar"))
          }, [
            p[21] || (p[21] = d("h4", null, "状态栏格式", -1)),
            S(A).settings.cardCollapsed.statusBar ? (b(), w("span", Ib, _(S(A).settings.statusBarFix ? "自动修正" : "只提醒"), 1)) : F("", !0),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !S(A).settings.cardCollapsed.statusBar }])
            }, "▸", 2)
          ], 8, Tb),
          S(A).settings.cardCollapsed.statusBar ? F("", !0) : (b(), w("div", Nb, [
            p[24] || (p[24] = d("p", { class: "rlzc-hint" }, "AI 回复的状态栏缺失或标签写错时，下一轮提醒 AI 按原样输出。", -1)),
            d("div", Pb, [
              p[23] || (p[23] = d("div", { class: "rlzc-option-label" }, [
                d("span", null, "自动修正状态栏标签"),
                d("small", null, "只改标签名，不动内容")
              ], -1)),
              d("button", {
                role: "switch",
                type: "button",
                class: Z(["rlzc-toggle rlzc-format-fix", { on: S(A).settings.statusBarFix }]),
                "aria-checked": S(A).settings.statusBarFix ? "true" : "false",
                onClick: p[1] || (p[1] = (m) => te(!S(A).settings.statusBarFix))
              }, [...p[22] || (p[22] = [
                d("span", null, null, -1)
              ])], 10, Rb)
            ])
          ]))
        ]),
        d("div", Lb, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !S(A).settings.cardCollapsed.accountFix,
            onClick: p[2] || (p[2] = (m) => re("accountFix"))
          }, [
            p[25] || (p[25] = d("h4", null, "账户校正", -1)),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !S(A).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, Db),
          S(A).settings.cardCollapsed.accountFix ? F("", !0) : (b(), w("div", Fb, [
            p[27] || (p[27] = d("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            d("div", jb, [
              d("span", null, [
                p[26] || (p[26] = Ee("当前余额：", -1)),
                d("b", null, _(u.value), 1)
              ]),
              d("span", null, _(x.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            p[28] || (p[28] = d("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            d("div", Ob, [
              pt(d("input", {
                "onUpdate:modelValue": p[3] || (p[3] = (m) => s.value = m),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${a.value.value}`
              }, null, 8, Bb), [
                [
                  Nt,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              d("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: z
              }, "保存", 8, Vb)
            ]),
            p[29] || (p[29] = d("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            d("div", Ub, [
              pt(d("input", {
                "onUpdate:modelValue": p[4] || (p[4] = (m) => r.value = m),
                type: "number",
                class: "rlzc-input",
                placeholder: "金额（正/负）"
              }, null, 512), [
                [
                  Nt,
                  r.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              pt(d("input", {
                "onUpdate:modelValue": p[5] || (p[5] = (m) => i.value = m),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [Nt, i.value]
              ]),
              d("button", {
                class: "rlzc-btn small",
                disabled: r.value === null,
                onClick: k
              }, "追加", 8, Hb)
            ]),
            p[30] || (p[30] = d("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            p[31] || (p[31] = d("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            d("div", Wb, [
              d("div", Gb, [
                (b(), w(J, null, ce(c, (m) => d("button", {
                  key: m,
                  type: "button",
                  class: Z(["rlzc-seg", { active: o.value === m }]),
                  "aria-pressed": o.value === m ? "true" : "false",
                  onClick: (v) => o.value = o.value === m ? "" : m
                }, _(m), 11, Kb)), 64))
              ]),
              pt(d("input", {
                "onUpdate:modelValue": p[6] || (p[6] = (m) => l.value = m),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [Nt, l.value]
              ]),
              d("button", {
                class: "rlzc-btn small",
                disabled: !o.value && !l.value,
                onClick: R
              }, "校正", 8, qb)
            ]),
            S(A).ledger.length === 0 && a.value.source === "默认值" ? (b(), w("p", Yb, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : F("", !0)
          ]))
        ]),
        d("div", Jb, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !S(A).settings.cardCollapsed.depths,
            onClick: p[7] || (p[7] = (m) => re("depths"))
          }, [
            p[32] || (p[32] = d("h4", null, "注入深度", -1)),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !S(A).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, Zb),
          S(A).settings.cardCollapsed.depths ? F("", !0) : (b(), w("div", Xb, [
            p[39] || (p[39] = d("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            d("div", Qb, [
              d("label", e1, [
                p[33] || (p[33] = d("span", null, [
                  Ee("副本暗号"),
                  d("small", null, "触发世界书的副本条目")
                ], -1)),
                d("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: S(A).settings.depths.token,
                  onChange: p[8] || (p[8] = (m) => U("token", m))
                }, null, 40, t1)
              ]),
              d("label", n1, [
                p[34] || (p[34] = d("span", null, [
                  Ee("副本进度"),
                  d("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                d("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: S(A).settings.depths.progress,
                  onChange: p[9] || (p[9] = (m) => U("progress", m))
                }, null, 40, s1)
              ]),
              d("label", r1, [
                p[35] || (p[35] = d("span", null, [
                  Ee("本轮指令"),
                  d("small", null, "本轮事件与时限写法")
                ], -1)),
                d("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: S(A).settings.depths.turn,
                  onChange: p[10] || (p[10] = (m) => U("turn", m))
                }, null, 40, i1)
              ]),
              d("label", o1, [
                p[36] || (p[36] = d("span", null, [
                  Ee("账户"),
                  d("small", null, "积分余额与清算状态")
                ], -1)),
                d("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: S(A).settings.depths.ledger,
                  onChange: p[11] || (p[11] = (m) => U("ledger", m))
                }, null, 40, l1)
              ]),
              d("label", a1, [
                p[37] || (p[37] = d("span", null, [
                  Ee("直播"),
                  d("small", null, "在看人数与最近弹幕")
                ], -1)),
                d("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: S(A).settings.depths.live,
                  onChange: p[12] || (p[12] = (m) => U("live", m))
                }, null, 40, c1)
              ]),
              d("label", u1, [
                p[38] || (p[38] = d("span", null, [
                  Ee("格式提醒"),
                  d("small", null, "状态栏格式出错后的提醒")
                ], -1)),
                d("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: S(A).settings.depths.format,
                  onChange: p[13] || (p[13] = (m) => U("format", m))
                }, null, 40, d1)
              ])
            ])
          ]))
        ]),
        _e(cb),
        _e($b),
        d("div", A1, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !S(A).settings.cardCollapsed.genericCaps,
            onClick: p[14] || (p[14] = (m) => re("genericCaps"))
          }, [
            p[40] || (p[40] = d("h4", null, "通用副本默认轮数上限", -1)),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !S(A).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, f1),
          S(A).settings.cardCollapsed.genericCaps ? F("", !0) : (b(), w("div", p1, [
            p[41] || (p[41] = d("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (b(), w(J, null, ce(c, (m) => d("label", {
              key: m,
              class: "rlzc-field rlzc-field-num"
            }, [
              d("span", null, _(m) + " 级", 1),
              d("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: S(A).settings.genericCaps[m],
                onChange: (v) => M(m, v)
              }, null, 40, h1)
            ])), 64))
          ]))
        ]),
        d("div", m1, [
          p[42] || (p[42] = d("h4", null, "自定义副本包", -1)),
          S(A).settings.customPacks.length ? (b(), w("ul", g1, [
            (b(!0), w(J, null, ce(S(A).settings.customPacks, (m) => (b(), w("li", {
              key: m.id
            }, [
              d("span", null, [
                Ee(_(m.level) + "｜" + _(m.name) + " ", 1),
                d("small", null, "v" + _(m.version), 1)
              ]),
              d("button", {
                class: "rlzc-btn ghost small",
                onClick: (v) => E(m.id, m.name)
              }, "删除", 8, x1)
            ]))), 128))
          ])) : (b(), w("p", v1, "还没有导入自定义副本包。")),
          d("input", {
            ref_key: "fileInput",
            ref: n,
            type: "file",
            accept: ".json,application/json",
            hidden: "",
            onChange: D
          }, null, 544),
          d("button", {
            class: "rlzc-btn",
            onClick: p[15] || (p[15] = (m) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (b(), w("ul", y1, [
            (b(!0), w(J, null, ce(t.value, (m, v) => (b(), w("li", { key: v }, _(m), 1))), 128))
          ])) : F("", !0)
        ]),
        d("div", b1, [
          p[45] || (p[45] = d("h4", null, "其他", -1)),
          d("label", k1, [
            d("input", {
              type: "checkbox",
              checked: S(A).settings.showBall,
              onChange: p[16] || (p[16] = (m) => X("showBall", m))
            }, null, 40, w1),
            p[43] || (p[43] = Ee("显示悬浮球", -1))
          ]),
          d("label", z1, [
            d("input", {
              type: "checkbox",
              checked: S(A).settings.debug,
              onChange: p[17] || (p[17] = (m) => X("debug", m))
            }, null, 40, _1),
            p[44] || (p[44] = Ee("调试模式", -1))
          ])
        ])
      ]),
      p[46] || (p[46] = d("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), S1 = { class: "rlzc-debug" }, C1 = {
  key: 0,
  class: "rlzc-note"
}, E1 = {
  key: 0,
  class: "rlzc-note"
}, M1 = {
  key: 1,
  class: "rlzc-note"
}, T1 = {
  key: 2,
  class: "rlzc-card"
}, I1 = { class: "rlzc-row" }, N1 = ["disabled"], P1 = ["value"], R1 = ["disabled"], L1 = { class: "rlzc-row" }, D1 = ["disabled"], F1 = ["disabled"], j1 = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, O1 = ["aria-expanded"], B1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, V1 = ["onUpdate:modelValue", "disabled"], U1 = ["disabled"], H1 = { class: "rlzc-card rlzc-collapsible" }, W1 = ["aria-expanded"], G1 = {
  key: 0,
  class: "rlzc-collapse-status"
}, K1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, q1 = {
  key: 0,
  class: "rlzc-hint"
}, Y1 = { class: "rlzc-hint" }, J1 = { class: "rlzc-list rlzc-warns" }, Z1 = { class: "rlzc-card rlzc-collapsible" }, X1 = ["aria-expanded"], Q1 = {
  key: 0,
  class: "rlzc-collapse-status"
}, ek = {
  key: 0,
  class: "rlzc-collapse-body"
}, tk = {
  key: 0,
  class: "rlzc-list"
}, nk = ["disabled", "onClick"], sk = {
  key: 1,
  class: "rlzc-hint"
}, rk = {
  key: 4,
  class: "rlzc-card"
}, ik = { class: "rlzc-pre" }, ok = {
  key: 0,
  class: "rlzc-pre"
}, lk = {
  key: 5,
  class: "rlzc-card"
}, ak = { class: "rlzc-table" }, ck = { class: "rlzc-hint" }, uk = {
  key: 0,
  class: "rlzc-hint"
}, dk = { class: "rlzc-hint" }, Ak = {
  key: 1,
  class: "rlzc-table"
}, fk = { class: "rlzc-card rlzc-collapsible" }, pk = ["aria-expanded"], hk = {
  key: 0,
  class: "rlzc-collapse-body"
}, mk = { class: "rlzc-pre" }, gk = { class: "rlzc-card" }, xk = { class: "rlzc-pre" }, vk = { class: "rlzc-card" }, yk = { class: "rlzc-pre" }, bk = { class: "rlzc-card" }, kk = { class: "rlzc-table" }, wk = {
  key: 0,
  class: "rlzc-warn-text"
}, zk = { key: 1 }, _k = ["disabled"], $k = { class: "rlzc-card rlzc-collapsible rlzc-format-debug" }, Sk = ["aria-expanded"], Ck = {
  key: 0,
  class: "rlzc-collapse-status"
}, Ek = {
  key: 0,
  class: "rlzc-collapse-body"
}, Mk = {
  key: 0,
  class: "rlzc-hint"
}, Tk = {
  key: 1,
  class: "rlzc-table"
}, Ik = {
  key: 2,
  class: "rlzc-card"
}, Nk = { class: "rlzc-table" }, Pk = /* @__PURE__ */ Be({
  __name: "DebugTab",
  setup(e) {
    const t = H(() => A.settings.debug), n = /* @__PURE__ */ xe(""), s = /* @__PURE__ */ xe(null), r = /* @__PURE__ */ ur({});
    Ar(
      () => [A.tick, A.pack?.id],
      () => {
        for (const m of Object.keys(r)) delete r[m];
        const p = Xc() ?? {};
        for (const m of A.pack?.roles ?? []) r[m] = p[m] ?? "";
      },
      { immediate: !0 }
    );
    const i = H(() => {
      A.tick;
      const p = q(), m = [], v = A.session?.entryIndex ?? 0;
      for (let N = v; N < p.length; N++) {
        const ie = p[N]?.extra?.rlzc;
        ie && m.push({ index: N, snap: ie });
      }
      return m.reverse().slice(0, 60);
    }), o = H(() => {
      const p = new Set((A.audit?.warnings ?? []).filter((N) => N.kind === "limit" || N.kind === "eventMissed").map((N) => N.index)), m = q(), v = A.session?.entryIndex ?? 0;
      for (let N = v; N < m.length; N++)
        m[N]?.extra?.rlzc?.ledgerMismatch && p.add(N);
      for (const N of l.value) p.add(N.index);
      return p;
    }), l = H(() => (A.tick, Hh(q()))), c = H(() => l.value.filter((p) => !p.fixed).length), a = H(() => {
      if (A.tick, !A.session || !A.pack || !A.progress) return null;
      const p = q(), m = vr(p, A.progress.entryIndex);
      let v = null;
      for (let N = p.length - 1; N >= A.progress.entryIndex; N--) {
        const ie = p[N]?.extra?.rlzc?.sub;
        if (ie) {
          v = ie;
          break;
        }
      }
      return {
        text: m ? gc(A.pack, m.state) : "",
        state: m?.state ?? null,
        record: v
      };
    }), u = H(() => {
      A.tick;
      const p = q(), m = [];
      for (let v = p.length - 1; v >= 0 && m.length < 60; v--) {
        const N = Wt(p[v]);
        N && m.push({ index: v, rec: N });
      }
      return m;
    });
    function f(p) {
      const m = p.feed.filter((v) => v.t === "tip").map((v) => `${v.name} ${v.amount}→${v.net}`);
      return p.revoke && m.push(`撤回 −${p.revoke}`), m.join("；");
    }
    function h(p) {
      const m = p.ai;
      return m ? m.pending ? "生成中…" : m.ok ? `${m.count}条（${m.ms}ms）` : `失败：${m.error ?? ""}` : "";
    }
    const x = { done: "✓", missed: "✗", void: "–" };
    function z(p) {
      if (!p.sub && !p.skippedEvents?.length) return "";
      const m = [];
      p.sub?.skipped && m.push(`未更新（${p.sub.error ?? ""}）`);
      for (const v of p.sub?.events ?? []) m.push(`${v.id}${x[v.status]}`);
      for (const v of p.skippedEvents ?? []) m.push(`跳过${v.id}`);
      return p.sub && !p.sub.skipped && !m.length && m.push("已整理"), m.join(" ");
    }
    const k = H(() => {
      if (A.tick, !A.session) return null;
      const p = Ve().books[A.session.id];
      return p ? { book: p, rounds: xv() } : null;
    }), R = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" };
    function U(p, m) {
      return p ? p.kind === "refund" ? `全退（#${p.index}）` : p.kind === "lost" ? `全废（#${p.index}）` : `${m[p.option] ?? p.option}（#${p.index}）` : "待开奖";
    }
    function D(p) {
      return p ? p.status === "pending" ? "出题中…" : p.status === "ok" ? `已出 ${p.count} 题（${p.ms}ms）` : p.status === "late" ? `晚于封盘到达，已丢弃（${p.ms}ms）` : `失败：${p.error ?? ""}` : "事件检测关闭，未出题";
    }
    const E = { ok: "已检测", miss: "没检测", pending: "检测中" }, M = H(() => {
      const p = A.progress;
      if (!p) return null;
      const { perMessage: m, phase: v, next: N, ...ie } = p;
      return {
        phase: v.id + " " + v.name,
        ...ie,
        next: N ? { round: N.round, skipFrom: N.skipFrom, events: N.events.map((le) => le.id) } : null,
        messages: Object.keys(m).length
      };
    });
    function ee() {
      n.value && Ux(n.value);
    }
    function te() {
      s.value !== null && s.value >= 0 && Hx(s.value);
    }
    function X() {
      Wx({ ...r });
    }
    const re = (p) => JSON.stringify(p, null, 2);
    function C(p) {
      A.settings.cardCollapsed[p] = !A.settings.cardCollapsed[p], ke();
    }
    return (p, m) => (b(), w("div", S1, [
      S(A).session ? (b(), w(J, { key: 1 }, [
        t.value ? F("", !0) : (b(), w("p", E1, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        S(A).pack && S(A).session.packVersion !== S(A).pack.version ? (b(), w("p", M1, " 入场时副本包版本为 " + _(S(A).session.packVersion) + "，当前为 " + _(S(A).pack.version) + "。 ", 1)) : F("", !0),
        S(A).pack?.phases.length ? (b(), w("div", T1, [
          m[9] || (m[9] = d("h4", null, "手动修正", -1)),
          d("div", I1, [
            pt(d("select", {
              "onUpdate:modelValue": m[0] || (m[0] = (v) => n.value = v),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              m[8] || (m[8] = d("option", { value: "" }, "切换到阶段…", -1)),
              (b(!0), w(J, null, ce(S(A).pack.phases, (v) => (b(), w("option", {
                key: v.id,
                value: v.id
              }, _(v.name), 9, P1))), 128))
            ], 8, N1), [
              [Va, n.value]
            ]),
            d("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: ee
            }, "切换", 8, R1)
          ]),
          d("div", L1, [
            pt(d("input", {
              "onUpdate:modelValue": m[1] || (m[1] = (v) => s.value = v),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, D1), [
              [
                Nt,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            d("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: te
            }, "修正轮次", 8, F1)
          ])
        ])) : F("", !0),
        S(A).pack?.roles?.length ? (b(), w("div", j1, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !S(A).settings.cardCollapsed.rolesDebug,
            onClick: m[2] || (m[2] = (v) => C("rolesDebug"))
          }, [
            m[10] || (m[10] = d("h4", null, "角色登记", -1)),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !S(A).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, O1),
          S(A).settings.cardCollapsed.rolesDebug ? F("", !0) : (b(), w("div", B1, [
            (b(!0), w(J, null, ce(S(A).pack.roles, (v) => (b(), w("label", {
              key: v,
              class: "rlzc-field"
            }, [
              d("span", null, _(v), 1),
              pt(d("input", {
                "onUpdate:modelValue": (N) => r[v] = N,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, V1), [
                [Nt, r[v]]
              ])
            ]))), 128)),
            d("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: X
            }, "保存登记", 8, U1)
          ]))
        ])) : F("", !0),
        d("div", H1, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !S(A).settings.cardCollapsed.auditDebug,
            onClick: m[3] || (m[3] = (v) => C("auditDebug"))
          }, [
            m[11] || (m[11] = d("h4", null, "<副本> 核对", -1)),
            S(A).settings.cardCollapsed.auditDebug ? (b(), w("span", G1, _(S(A).audit?.warnings.length ? "⚠️" : "无"), 1)) : F("", !0),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !S(A).settings.cardCollapsed.auditDebug }])
            }, "▸", 2)
          ], 8, W1),
          S(A).settings.cardCollapsed.auditDebug ? F("", !0) : (b(), w("div", K1, [
            S(A).audit?.warnings.length ? (b(), w(J, { key: 1 }, [
              d("p", Y1, "共 " + _(S(A).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
              d("ul", J1, [
                (b(!0), w(J, null, ce(S(A).audit.warnings.slice(-30).reverse(), (v, N) => (b(), w("li", { key: N }, [
                  d("span", null, [
                    d("small", null, "#" + _(v.index) + "｜" + _(v.phase) + "第" + _(v.round) + "轮", 1),
                    m[12] || (m[12] = d("br", null, null, -1)),
                    Ee("⚠️ " + _(v.text), 1)
                  ])
                ]))), 128))
              ])
            ], 64)) : (b(), w("p", q1, "没有发现问题。"))
          ]))
        ]),
        d("div", Z1, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !S(A).settings.cardCollapsed.manualDebug,
            onClick: m[4] || (m[4] = (v) => C("manualDebug"))
          }, [
            m[13] || (m[13] = d("h4", null, "手动操作记录", -1)),
            S(A).settings.cardCollapsed.manualDebug && S(A).session.manual.length ? (b(), w("span", Q1, "×" + _(S(A).session.manual.length), 1)) : F("", !0),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !S(A).settings.cardCollapsed.manualDebug }])
            }, "▸", 2)
          ], 8, X1),
          S(A).settings.cardCollapsed.manualDebug ? F("", !0) : (b(), w("div", ek, [
            S(A).session.manual.length ? (b(), w("ul", tk, [
              (b(!0), w(J, null, ce(S(A).session.manual, (v, N) => (b(), w("li", { key: N }, [
                d("code", null, "#" + _(v.atIndex) + " " + _(v.kind) + " " + _("phase" in v ? v.phase : "") + _("round" in v ? v.round : "") + _("targetPhase" in v ? `${v.targetPhase}:${v.targetRound}` : ""), 1),
                d("button", {
                  class: "rlzc-btn ghost small",
                  disabled: !t.value,
                  onClick: (ie) => S(Gx)(N)
                }, "撤销", 8, nk)
              ]))), 128))
            ])) : (b(), w("p", sk, "无"))
          ]))
        ]),
        a.value && (a.value.state || a.value.record) ? (b(), w("details", rk, [
          m[14] || (m[14] = d("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          d("pre", ik, _(a.value.text || "（尚无状态）"), 1),
          a.value.record ? (b(), w("pre", ok, _(re(a.value.record)), 1)) : F("", !0),
          m[15] || (m[15] = d("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : F("", !0),
        k.value ? (b(), w("details", lk, [
          m[21] || (m[21] = d("summary", null, "黑市：盘口赔率与检测判定", -1)),
          d("table", ak, [
            m[19] || (m[19] = d("thead", null, [
              d("tr", null, [
                d("th", null, "盘"),
                d("th", null, "题目"),
                d("th", null, "赔率"),
                d("th", null, "结果")
              ])
            ], -1)),
            d("tbody", null, [
              (b(!0), w(J, null, ce(k.value.book.markets, (v) => (b(), w("tr", {
                key: v.id
              }, [
                d("td", null, _(R[v.kind]) + " " + _(v.id), 1),
                d("td", null, [
                  Ee(_(v.q), 1),
                  v.judge ? (b(), w(J, { key: 0 }, [
                    m[16] || (m[16] = d("br", null, null, -1)),
                    d("small", null, _(v.judge), 1)
                  ], 64)) : F("", !0),
                  v.judgeNo ? (b(), w(J, { key: 1 }, [
                    m[17] || (m[17] = d("br", null, null, -1)),
                    d("small", null, "否：" + _(v.judgeNo), 1)
                  ], 64)) : F("", !0),
                  v.by ? (b(), w(J, { key: 2 }, [
                    m[18] || (m[18] = d("br", null, null, -1)),
                    d("small", null, "by " + _(v.by), 1)
                  ], 64)) : F("", !0)
                ]),
                d("td", null, _(v.options.map((N) => `${N.label}(${Math.round(N.p * 100)}%) ×${N.odds.toFixed(2)}`).join("　")), 1),
                d("td", null, _(U(S(A).market.results[v.id], Object.fromEntries(v.options.map((N) => [N.id, N.label])))), 1)
              ]))), 128))
            ])
          ]),
          d("p", ck, "庄家怪盘：" + _(D(k.value.book.freak)), 1),
          k.value.book.plan ? (b(), w("p", uk, "计划开 " + _(k.value.book.plan.total) + " 个盘，其中怪盘 " + _(k.value.book.plan.freak) + " 个；实开 " + _(k.value.book.markets.length) + " 个", 1)) : F("", !0),
          d("p", dk, "开盘 " + _(k.value.book.openedAt) + "　" + _(k.value.book.closedAt ? `封盘 ${k.value.book.closedAt}` : "未封盘") + _(k.value.book.frozen ? "　已定格" : ""), 1),
          k.value.rounds.length ? (b(), w("table", Ak, [
            m[20] || (m[20] = d("thead", null, [
              d("tr", null, [
                d("th", null, "楼"),
                d("th", null, "检测"),
                d("th", null, "判定为真")
              ])
            ], -1)),
            d("tbody", null, [
              (b(!0), w(J, null, ce(k.value.rounds, (v) => (b(), w("tr", {
                key: v.index,
                class: Z({ "rlzc-row-warn": v.state === "miss" })
              }, [
                d("td", null, _(v.index), 1),
                d("td", null, _(E[v.state]), 1),
                d("td", null, _(Object.keys(v.hits).filter((N) => v.hits[N]).join(" ") || "—"), 1)
              ], 2))), 128))
            ])
          ])) : F("", !0)
        ])) : F("", !0),
        d("div", fk, [
          d("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !S(A).settings.cardCollapsed.injectionDebug,
            onClick: m[5] || (m[5] = (v) => C("injectionDebug"))
          }, [
            m[22] || (m[22] = d("h4", null, "本次注入", -1)),
            d("span", {
              class: Z(["rlzc-collapse-arrow", { open: !S(A).settings.cardCollapsed.injectionDebug }])
            }, "▸", 2)
          ], 8, pk),
          S(A).settings.cardCollapsed.injectionDebug ? F("", !0) : (b(), w("div", hk, [
            d("pre", mk, _([S(A).lastInjection.token, S(A).lastInjection.progress, S(A).lastInjection.turn, S(A).lastInjection.format].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
          ]))
        ]),
        d("details", gk, [
          m[23] || (m[23] = d("summary", null, "重放结果", -1)),
          d("pre", xk, _(re(M.value)), 1)
        ]),
        d("details", vk, [
          m[24] || (m[24] = d("summary", null, "会话原始数据", -1)),
          d("pre", yk, _(re(S(A).session)), 1)
        ]),
        d("details", bk, [
          m[26] || (m[26] = d("summary", null, "每楼快照（最近60条）", -1)),
          d("table", kk, [
            m[25] || (m[25] = d("thead", null, [
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
              (b(!0), w(J, null, ce(i.value, (v) => (b(), w("tr", {
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
                v.snap.ledgerMismatch ? (b(), w("td", wk, "状态栏 " + _(v.snap.ledgerMismatch.status) + " / 账本 " + _(v.snap.ledgerMismatch.ledger), 1)) : (b(), w("td", zk))
              ], 2))), 128))
            ])
          ])
        ]),
        d("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: m[6] || (m[6] = //@ts-ignore
          (...v) => S(kl) && S(kl)(...v))
        }, "删除副本会话", 8, _k)
      ], 64)) : (b(), w("p", C1, "当前聊天没有副本会话。")),
      d("div", $k, [
        d("button", {
          class: "rlzc-collapse-head",
          "aria-expanded": !S(A).settings.cardCollapsed.formatDebug,
          onClick: m[7] || (m[7] = (v) => C("formatDebug"))
        }, [
          m[27] || (m[27] = d("h4", null, "状态栏格式", -1)),
          S(A).settings.cardCollapsed.formatDebug ? (b(), w("span", Ck, _(c.value ? "⚠️" : l.value.length ? `已修正×${l.value.length}` : "无"), 1)) : F("", !0),
          d("span", {
            class: Z(["rlzc-collapse-arrow", { open: !S(A).settings.cardCollapsed.formatDebug }])
          }, "▸", 2)
        ], 8, Sk),
        S(A).settings.cardCollapsed.formatDebug ? F("", !0) : (b(), w("div", Ek, [
          l.value.length ? (b(), w("table", Tk, [
            m[29] || (m[29] = d("thead", null, [
              d("tr", null, [
                d("th", null, "楼"),
                d("th", null, "问题"),
                d("th", null, "处理")
              ])
            ], -1)),
            d("tbody", null, [
              (b(!0), w(J, null, ce(l.value, (v) => (b(), w("tr", {
                key: v.index,
                class: "rlzc-row-warn"
              }, [
                d("td", null, _(v.index), 1),
                d("td", null, [
                  Ee(_(S(Dh)[v.kind]), 1),
                  v.detail ? (b(), w(J, { key: 0 }, [
                    m[28] || (m[28] = d("br", null, null, -1)),
                    d("small", null, _(v.detail), 1)
                  ], 64)) : F("", !0)
                ]),
                d("td", null, _(v.fixed ? `已自动修正（原标签 ${v.from}）` : "未修正"), 1)
              ]))), 128))
            ])
          ])) : (b(), w("p", Mk, "没有发现问题。"))
        ]))
      ]),
      u.value.length ? (b(), w("details", Ik, [
        m[31] || (m[31] = d("summary", null, "直播（每楼，最近60条）", -1)),
        d("table", Nk, [
          m[30] || (m[30] = d("thead", null, [
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
            (b(!0), w(J, null, ce(u.value, (v) => (b(), w("tr", {
              key: v.index,
              class: Z({ "rlzc-row-warn": v.rec.ai && !v.rec.ai.ok && !v.rec.ai.pending })
            }, [
              d("td", null, _(v.index) + _(v.rec.scope === "corridor" ? "·回廊" : ""), 1),
              d("td", null, _(v.rec.hype) + _(v.rec.hurt ? "·伤" : ""), 1),
              d("td", null, _(v.rec.heat), 1),
              d("td", null, _(v.rec.viewers), 1),
              d("td", null, _(f(v.rec)), 1),
              d("td", null, _(h(v.rec)), 1)
            ], 2))), 128))
          ])
        ])
      ])) : F("", !0)
    ]));
  }
}), Rk = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, Lk = { class: "rlzc-head" }, Dk = { class: "rlzc-tabs" }, Fk = ["onClick"], jk = { class: "rlzc-body" }, Ok = /* @__PURE__ */ Be({
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
        if (!await Ht("此页会显示副本真相，确定要打开吗？")) return;
        A.debugUnlocked = !0;
      }
      A.tab = s;
    }
    return (s, r) => (b(), w("div", {
      class: "rlzc-backdrop",
      onClick: r[1] || (r[1] = EA((i) => S(A).panelOpen = !1, ["self"]))
    }, [
      d("section", Rk, [
        d("header", Lk, [
          r[2] || (r[2] = d("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          d("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: r[0] || (r[0] = (i) => S(A).panelOpen = !1)
          }, "×")
        ]),
        d("nav", Dk, [
          (b(), w(J, null, ce(t, (i) => d("button", {
            key: i.id,
            class: Z({ on: S(A).tab === i.id }),
            onClick: (o) => n(i.id)
          }, _(i.label), 11, Fk)), 64))
        ]),
        d("div", jk, [
          S(A).tab === "system" ? (b(), We(C0, { key: 0 })) : S(A).tab === "ledger" ? (b(), We(G0, { key: 1 })) : S(A).tab === "market" ? (b(), We(ky, { key: 2 })) : S(A).tab === "settings" ? (b(), We($1, { key: 3 })) : S(A).tab === "debug" && S(A).debugUnlocked ? (b(), We(Pk, { key: 4 })) : F("", !0)
        ])
      ])
    ]));
  }
}), Bk = /* @__PURE__ */ Be({
  __name: "App",
  setup(e) {
    return (t, n) => (b(), w(J, null, [
      S(A).settings.showBall ? (b(), We(Dv, { key: 0 })) : F("", !0),
      S(A).panelOpen ? (b(), We(Ok, { key: 1 })) : F("", !0),
      _e(Mv)
    ], 64));
  }
}), Vk = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);--ok: #4caf72;--bad: #c9534f;font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:5000;width:48px;height:48px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--muted);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball.is-active{color:var(--accent);border-color:var(--accent)}.rlzc-ball.has-ring{border-color:transparent}.rlzc-ball.is-warn{color:var(--bad)}.rlzc-ball-inf{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;pointer-events:none}.rlzc-ball-ring{position:absolute;inset:-1px;width:48px;height:48px;transform:rotate(-90deg);pointer-events:none}.rlzc-ball-ring circle{fill:none;stroke-width:3}.rlzc-ball-ring-base{stroke:var(--line)}.rlzc-ball-ring-bar{stroke:var(--accent);stroke-linecap:round;transition:stroke-dasharray .3s ease}.rlzc-ball.is-warn .rlzc-ball-ring-bar{stroke:var(--bad)}@media(prefers-reduced-motion:reduce){.rlzc-ball-ring-bar{transition:none}}.rlzc-ball-live{position:absolute;top:1px;left:1px;width:12px;height:12px;border-radius:50%;background:var(--bad);border:2px solid var(--solid);pointer-events:none}.rlzc-ball-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--accent);color:var(--bg);font-size:11px;font-weight:700;line-height:18px;text-align:center;pointer-events:none}.rlzc-entry-card{position:fixed;z-index:9000;top:calc(var(--topBarBlockSize, 40px) + 12px);right:12px;width:300px;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:12px;box-shadow:0 6px 24px #0000004d;padding:10px 12px 4px 14px}@media(max-width:323.98px){.rlzc-entry-card{left:12px;width:auto}}@media(min-width:800px){.rlzc-entry-card.beside-panel{right:476px}}.rlzc-entry-close{position:absolute;top:0;right:0;width:44px;height:44px;display:grid;place-items:center;background:none;border:0;color:var(--muted);font:inherit;font-size:14px;cursor:pointer;padding:0}.rlzc-entry-close:hover{color:var(--fg)}.rlzc-entry-kicker{display:flex;align-items:center;gap:5px;font-size:12px;color:var(--muted);padding-right:36px}.rlzc-entry-inf{width:16px;height:16px;fill:none;stroke:var(--accent);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}.rlzc-entry-title{display:flex;align-items:center;gap:8px;margin:6px 0 2px;padding-right:30px}.rlzc-entry-level{flex:0 0 auto;display:inline-grid;place-items:center;min-width:24px;height:24px;padding:0 4px;border-radius:6px;border:1px solid var(--accent);color:var(--accent);font-size:13px;font-weight:800;line-height:1}.rlzc-entry-name{font-size:16px;font-weight:700;min-width:0;overflow-wrap:anywhere}.rlzc-entry-note{font-size:12px;color:var(--muted);margin-top:2px}.rlzc-entry-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:10px;padding-top:2px;border-top:1px solid var(--line)}.rlzc-entry-live{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0;margin-left:-2px;background:none;border:0;color:var(--fg);font:inherit;font-size:13px;cursor:pointer}.rlzc-entry-live .rlzc-toggle{display:inline-block;width:44px}.rlzc-entry-live .rlzc-toggle:after{content:none}.rlzc-entry-live:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:6px}.rlzc-toggle.danger.on{background:color-mix(in srgb,var(--bad) 75%,transparent);border-color:var(--bad)}.rlzc-entry-live.on{color:var(--bad)}.rlzc-entry-actions{display:flex;gap:6px}.rlzc-entry-actions .rlzc-btn{min-height:44px;min-width:60px}.rlzc-entry-actions .rlzc-entry-go{background:var(--accent);border-color:var(--accent);font-weight:700;color:var(--bg);color:rgb(from var(--bg) r g b)}.rlzc-entry-fade-enter-active,.rlzc-entry-fade-leave-active{transition:opacity .16s ease,transform .16s ease}.rlzc-entry-fade-enter-from,.rlzc-entry-fade-leave-to{opacity:0;transform:translateY(-4px)}@media(prefers-reduced-motion:reduce){.rlzc-entry-fade-enter-active,.rlzc-entry-fade-leave-active{transition:none}.rlzc-entry-fade-enter-from,.rlzc-entry-fade-leave-to{transform:none}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:5001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-field.rlzc-field-num>span{flex:1 1 auto;min-width:0}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-check-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px}.rlzc-check-btns .rlzc-btn{min-height:44px;width:100%}.rlzc-check-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}.rlzc-check-list li{display:flex;align-items:baseline;gap:10px;font-size:12px;line-height:1.45}.rlzc-check-list li[data-kind=on]{color:#4caf72}.rlzc-check-list li[data-kind=warn]{color:#c9833a}.rlzc-check-text{flex:1;min-width:0;overflow-wrap:anywhere}.rlzc-check-time{flex:none;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px;flex:0 0 auto}.rlzc-input.rlzc-input-num{flex:0 0 auto;width:calc(4ch + 20px);margin-left:auto;text-align:right;font-variant-numeric:tabular-nums;-moz-appearance:textfield;appearance:textfield}.rlzc-input-num::-webkit-inner-spin-button,.rlzc-input-num::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.rlzc-seg.active{background:var(--accent);border-color:var(--accent);font-weight:700;color:var(--bg);color:rgb(from var(--bg) r g b)}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-toggle:after{content:"";position:absolute;inset:-10px 0}.rlzc-segsrc button:disabled{opacity:.4;cursor:not-allowed}.rlzc-segsrc button:disabled:hover{background:none;color:var(--muted)}.rlzc-live-card .rlzc-input-num{min-height:44px}.rlzc-onair{display:flex;align-items:center;gap:12px;margin:10px 0 4px;padding:10px 10px 10px 14px;border:1px solid var(--line);border-radius:10px;background:var(--soft)}.rlzc-onair.on{border-color:color-mix(in srgb,var(--bad) 45%,transparent);background:color-mix(in srgb,var(--bad) 8%,transparent)}.rlzc-onair-dot{flex:none;width:10px;height:10px;border-radius:50%;background:color-mix(in srgb,var(--muted) 55%,transparent)}.rlzc-onair.on .rlzc-onair-dot{background:var(--bad);box-shadow:0 0 0 4px color-mix(in srgb,var(--bad) 22%,transparent);animation:rlzc-onair-pulse 1.8s ease-in-out infinite}@keyframes rlzc-onair-pulse{50%{box-shadow:0 0 0 7px color-mix(in srgb,var(--bad) 8%,transparent)}}@media(prefers-reduced-motion:reduce){.rlzc-onair.on .rlzc-onair-dot{animation:none}}.rlzc-onair-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-onair-text strong{font-size:14px;font-weight:600;color:var(--fg)}.rlzc-onair.on .rlzc-onair-text strong{color:var(--bad)}.rlzc-onair-text small{font-size:12px;color:var(--muted);overflow-wrap:anywhere}.rlzc-onair-btn{flex:none;min-width:76px;min-height:44px;padding:0 16px;border-radius:22px;font:inherit;font-weight:600;cursor:pointer;border:1px solid var(--bad);background:var(--bad);color:#fff}.rlzc-onair-btn.stop{background:none;color:var(--bad)}.rlzc-onair-btn:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-onair-lock{flex:none;display:inline-flex;align-items:center;gap:5px;min-height:44px;padding:0 12px;font-size:12px;color:var(--muted);border:1px dashed var(--line);border-radius:22px}.rlzc-option-row-stack{flex-direction:column;align-items:stretch;gap:0}.rlzc-option-row-stack .rlzc-segsrc{margin:6px 0 2px}.rlzc-option-row-stack .rlzc-hint{margin:2px 0 0}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-right{flex:0 0 auto;display:flex;flex-direction:column;align-items:flex-end;gap:2px}.rlzc-ledger-item-after{font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-status{flex:0 0 auto;font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-collapse-head .rlzc-dot{font-size:12px}.rlzc-market-tabs button{flex:1 1 0;min-height:44px}.rlzc-mk-status{font-size:14px}.rlzc-mk-q{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;font-weight:600;overflow-wrap:anywhere}.rlzc-mk-tag{flex:0 0 auto;font-size:11px;font-weight:600;color:var(--accent);padding:1px 6px;border:1px solid color-mix(in srgb,var(--accent) 60%,transparent);border-radius:4px}.rlzc-mk-opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.rlzc-mk-opt{display:flex;align-items:center;justify-content:space-between;gap:6px;min-height:44px;padding:6px 10px;font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 60%,transparent);border:1px solid var(--line);border-radius:8px;cursor:pointer;text-align:left}.rlzc-mk-opt b{font-weight:600;font-variant-numeric:tabular-nums;color:var(--muted)}.rlzc-mk-opt.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 16%,transparent)}.rlzc-mk-opt.on b{color:var(--fg)}.rlzc-mk-opt:disabled{opacity:.55;cursor:not-allowed}.rlzc-mk-bet{margin-top:8px}.rlzc-mk-bet .rlzc-input,.rlzc-mk-bet .rlzc-btn{min-height:44px}.rlzc-mk-bet .rlzc-btn{flex:0 0 auto;min-width:64px}.rlzc-mk-red{color:var(--bad);font-size:12px;margin:2px 0}.rlzc-mk-mine{list-style:none;margin:8px 0 0;padding:6px 0 0;border-top:1px dashed var(--line);font-size:12px;color:var(--muted)}.rlzc-mk-mine li{padding:2px 0;font-variant-numeric:tabular-nums}.rlzc-tk-list{list-style:none;margin:0;padding:0}.rlzc-tk{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:52px;padding:6px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-tk:last-child{border-bottom:none}.rlzc-tk-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-tk-title{font-size:13px;overflow-wrap:anywhere}.rlzc-tk-left small{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-stamp{flex:0 0 40px;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:16px;border:2px solid currentColor;transform:rotate(-14deg);box-shadow:inset 0 0 0 2px color-mix(in srgb,currentColor 18%,transparent)}.rlzc-stamp.win{color:var(--ok)}.rlzc-stamp.lose{color:var(--bad)}.rlzc-stamp.refund{color:var(--muted)}.rlzc-stamp.pending{color:var(--muted);border-style:dashed;border-width:1px;box-shadow:none;transform:none;font-weight:600;font-size:14px}.rlzc-cs-tables{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-cs-table{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-height:76px;text-align:left;font:inherit;color:var(--fg);cursor:pointer}.rlzc-cs-table b{font-size:15px}.rlzc-cs-table small{font-size:12px;color:var(--muted);line-height:1.45}.rlzc-cs-table.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent)}.rlzc-cs-play h4{margin-bottom:4px}.rlzc-cs-seg{margin:6px 0}.rlzc-cs-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:4px;margin:6px 0}.rlzc-cs-grid.door{grid-template-columns:repeat(5,minmax(0,1fr))}.rlzc-cs-grid button{min-height:44px;padding:0 2px;font:inherit;font-size:13px;color:var(--muted);cursor:pointer;background:none;border:1px solid var(--line);border-radius:8px;font-variant-numeric:tabular-nums}.rlzc-cs-grid button.on{color:var(--fg);border-color:var(--accent);background:color-mix(in srgb,var(--accent) 15%,transparent);font-weight:600}.rlzc-cs-face{margin-top:10px;min-height:52px;display:grid;place-items:center;font-size:26px;font-weight:800;font-variant-numeric:tabular-nums;border:1px dashed var(--line);border-radius:10px}.rlzc-cs-face.rolling{color:var(--muted)}.rlzc-cs-result{margin:8px 0 0;font-weight:600;font-variant-numeric:tabular-nums}.rlzc-cs-result.win{color:var(--ok)}.rlzc-cs-result.lose{color:var(--bad)}';
function Uk(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function Au(e, t, n) {
  const s = me().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function Hk() {
  const e = Uk();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await Au("/api/extensions/version", e, t);
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
async function Wk(e) {
  const t = await Au("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const Gk = "回廊种菜系统", Kk = 100, qk = [], Yk = [], Jk = "dist/index.js", Zk = "xiaxiii", Xk = "1.1.9", Qk = "https://github.com/xiaxiii/M-bius-strip", e2 = !0, t2 = "rlzcInterceptor", Tl = {
  display_name: Gk,
  loading_order: Kk,
  requires: qk,
  optional: Yk,
  js: Jk,
  author: Zk,
  version: Xk,
  homePageUrl: Qk,
  auto_update: e2,
  generate_interceptor: t2
}, n2 = {
  /** 有新版本、还没更新时：打开酒馆弹窗与扩展设置里的更新状态 */
  有新版本: [
    "喂喂喂，有新版本啦～（现在是 {版本}）",
    "EC 偷偷改咗少少嘢，bb 嚟更新下啦～（现在是 {版本}）",
    "bb呀，EC叫你嚟更新喇喂～（现在是 {版本}）",
    "EC 又给回廊添了点新东西，bb 快来看看！（现在是 {版本}）",
    "叩叩叩，新版本到啦～（现在是 {版本}）"
  ]
};
function s2(e, t = {}, n = Math.random) {
  const s = n2[e];
  return (s[Math.floor(n() * s.length)] ?? s[0] ?? "").replace(/\{([^{}]+)\}/g, (i, o) => t[o] ?? i);
}
const Il = "rlzc-host", Nl = "rlzc-menu-btn", Pl = "rlzc-settings-drawer";
function r2() {
  if (document.getElementById(Il)) return;
  const e = document.createElement("div");
  e.id = Il, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Vk, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), IA(Bk).mount(s), fu(), pu();
}
function fu(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => fu(e + 1), 500);
    return;
  }
  if (document.getElementById(Nl)) return;
  const n = document.createElement("div");
  n.id = Nl, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const r = document.createElement("span");
  r.textContent = "回廊种菜系统", n.append(s, r), n.addEventListener("click", () => {
    A.panelOpen = !A.panelOpen;
  }), t.appendChild(n);
}
function pu(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => pu(e + 1), 500);
    return;
  }
  if (document.getElementById(Pl)) return;
  const n = (p, m = "", v = "") => {
    const N = document.createElement(p);
    return m && (N.className = m), v && (N.textContent = v), N;
  }, s = n("div");
  s.id = Pl;
  const r = n("div", "inline-drawer"), i = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), i.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const c = n("div", "inline-drawer-content"), a = n("div", "menu_button menu_button_icon", "打开面板");
  a.prepend(n("i", "fa-solid fa-seedling")), a.addEventListener("click", () => A.panelOpen = !0);
  const u = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  u.addEventListener("click", () => {
    A.settings.ball = { x: null, y: null }, A.settings.showBall = !0, ke();
  });
  const f = n("label", "checkbox_label"), h = document.createElement("input");
  h.type = "checkbox", h.addEventListener("change", () => {
    A.settings.showBall = h.checked, ke();
  }), f.append(h, n("span", "", "显示悬浮球")), Ar(() => A.settings.showBall, (p) => h.checked = p, { immediate: !0 });
  const x = n("div", "flex-container");
  x.append(a, u);
  const z = n("div", "flex-container alignitemscenter"), k = n("small", "rlzc-update-status", "正在检查更新…"), R = n("div", "menu_button menu_button_icon", "检查更新"), U = n("div", "menu_button menu_button_icon", "立即更新"), D = n("div", "menu_button menu_button_icon", "刷新页面");
  U.style.display = "none", D.style.display = "none", z.append(k, R, U, D);
  let E = null, M = !1, ee = "";
  const te = () => ee || (ee = s2("有新版本", { 版本: Tl.version })), X = async (p = !1) => {
    if (!M) {
      M = !0, k.textContent = "正在检查更新…", U.style.display = "none";
      try {
        E = await Hk();
        const m = `（${Tl.version}）`;
        E.isGit ? E.isUpToDate ? k.textContent = `已是最新版本${m}` : (k.textContent = te(), U.style.display = "") : k.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = E.isGit && !E.isUpToDate ? "" : "none";
      } catch (m) {
        k.textContent = `检查更新失败：${m.message}`;
        return;
      } finally {
        M = !1;
      }
      p && E?.isGit && !E.isUpToDate && C();
    }
  }, re = async () => {
    if (!E || M) return !1;
    M = !0, k.textContent = "正在更新…", U.style.display = "none";
    try {
      return await Wk(E), l.style.display = "none", k.textContent = "更新完成，刷新页面后生效。", D.style.display = "", !0;
    } catch (p) {
      throw k.textContent = `更新失败：${p.message}`, U.style.display = "", p;
    } finally {
      M = !1;
    }
  }, C = () => nl(te(), "立即更新", () => {
    re().then((p) => {
      p && nl("更新完成，刷新页面后生效。", "刷新页面", () => location.reload());
    }).catch((p) => Se("error", `更新失败：${p.message}`));
  });
  R.addEventListener("click", () => void X()), U.addEventListener("click", () => void re().catch(() => {
  })), D.addEventListener("click", () => location.reload()), setTimeout(() => void X(!0), 1e3), c.append(x, f, z, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), r.append(i, c), s.append(r), t.append(s);
}
globalThis.rlzcInterceptor = Dx;
function Qr() {
  zx(), gn("MESSAGE_RECEIVED", (e, t) => Xx(Number(e), t)), gn("MESSAGE_DELETED", () => Yr()), gn("MESSAGE_SWIPED", (e) => Bx(Number(e))), gn("MESSAGE_EDITED", (e) => Yr(Number(e))), gn("MESSAGE_UPDATED", (e) => Yr(Number(e))), gn("CHAT_CHANGED", () => $l()), Nn("CHARACTER_MESSAGE_RENDERED", (e) => Ps(Number(e), !0)), Nn("MESSAGE_SWIPED", (e) => Ps(Number(e), !0)), Nn("MESSAGE_UPDATED", (e) => Ps(Number(e), !0)), Nn("MORE_MESSAGES_LOADED", () => nr(!1, !0)), Nn("CHAT_LOADED", () => nr(!1, !0)), r2(), Pg({ view: ao, toggle: iu }), $l(), console.log("[rlzc] 回廊种菜系统已加载", A.settings);
}
const Rl = window.jQuery;
typeof Rl == "function" ? Rl(() => Qr()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Qr) : Qr();
