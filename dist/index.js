/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function hi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ve = {}, en = [], sn = () => {
}, El = () => !1, er = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tr = (e) => e.startsWith("onUpdate:"), Oe = Object.assign, Ml = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Au = Object.prototype.hasOwnProperty, fe = (e, t) => Au.call(e, t), se = Array.isArray, Pt = (e) => cs(e) === "[object Map]", ln = (e) => cs(e) === "[object Set]", lo = (e) => cs(e) === "[object Date]", de = (e) => typeof e == "function", ye = (e) => typeof e == "string", ht = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", Tl = (e) => (he(e) || de(e)) && de(e.then) && de(e.catch), Il = Object.prototype.toString, cs = (e) => Il.call(e), fu = (e) => cs(e).slice(8, -1), Nl = (e) => cs(e) === "[object Object]", mi = (e) => ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fn = /* @__PURE__ */ hi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), nr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, pu = /-\w/g, Xe = nr(
  (e) => e.replace(pu, (t) => t.slice(1).toUpperCase())
), hu = /\B([A-Z])/g, An = nr(
  (e) => e.replace(hu, "-$1").toLowerCase()
), Pl = nr((e) => e.charAt(0).toUpperCase() + e.slice(1)), _r = nr(
  (e) => e ? `on${Pl(e)}` : ""
), ft = (e, t) => !Object.is(e, t), $s = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Rl = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, sr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, mu = (e) => {
  const t = ye(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ao;
const rr = () => ao || (ao = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ir(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ye(s) ? yu(s) : ir(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ye(e) || he(e))
    return e;
}
const gu = /;(?![^(]*\))/g, xu = /:([^]+)/, vu = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function yu(e) {
  const t = {};
  return e.replace(vu, (n) => n.startsWith("/*") ? "" : n).split(gu).forEach((n) => {
    if (n) {
      const s = n.split(xu);
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
const bu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ku = /* @__PURE__ */ hi(bu);
function Ll(e) {
  return !!e || e === "";
}
function wu(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = Dt(e[r], t[r], n);
  return s;
}
function co(e, t, n) {
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
function zu(e, t, n) {
  let s = Pt(e), r = Pt(t);
  if (s || r || (s = ln(e), r = ln(t), s || r))
    return s && r ? co(e, t, n) : !1;
  const i = Object.keys(e).length, o = Object.keys(t).length;
  if (i !== o)
    return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
    if (a && !c || !a && c || !Dt(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function uo(e, t, n, s) {
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
  let s = lo(e), r = lo(t);
  return s || r ? s && r ? e.getTime() === t.getTime() : !1 : (s = ht(e), r = ht(t), s || r ? e === t : (s = se(e), r = se(t), s || r ? s && r ? uo(e, t, n, wu) : !1 : (s = he(e), r = he(t), s || r ? !s || !r ? !1 : uo(e, t, n, zu) : String(e) === String(t))));
}
function _u(e, t) {
  return e.findIndex((n) => Dt(n, t));
}
const Dl = (e) => !!(e && e.__v_isRef === !0), z = (e) => ye(e) ? e : e == null ? "" : se(e) || he(e) && (e.toString === Il || !de(e.toString)) ? Dl(e) ? z(e.value) : JSON.stringify(e, Fl, 2) : String(e), Fl = (e, t) => Dl(t) ? Fl(e, t.value) : Pt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[$r(s, i) + " =>"] = r, n),
    {}
  )
} : ln(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => $r(n))
} : ht(t) ? $r(t) : he(t) && !se(t) && !Nl(t) ? String(t) : t, $r = (e, t = "") => {
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
class $u {
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
function Su() {
  return ze;
}
let pe;
const Sr = /* @__PURE__ */ new WeakSet();
class jl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ze && (ze.active ? ze.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Sr.has(this) && (Sr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Bl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ao(this), Vl(this);
    const t = pe, n = et;
    pe = this, et = !0;
    try {
      return this.fn();
    } finally {
      Ul(this), pe = t, et = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        vi(t);
      this.deps = this.depsTail = void 0, Ao(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Sr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Qr(this) && this.run();
  }
  get dirty() {
    return Qr(this);
  }
}
let Ol = 0, jn, On;
function Bl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = On, On = e;
    return;
  }
  e.next = jn, jn = e;
}
function gi() {
  Ol++;
}
function xi() {
  if (--Ol > 0)
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
function Vl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ul(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), vi(s), Cu(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Qr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Hl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Hl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qn) || (e.globalVersion = qn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Qr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = pe, s = et;
  pe = e, et = !0;
  try {
    Vl(e);
    const r = e.fn(e._value);
    (t.version === 0 || ft(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    pe = n, et = s, Ul(e), e.flags &= -3;
  }
}
function vi(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      vi(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Cu(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let et = !0;
const Wl = [];
function Ft() {
  Wl.push(et), et = !1;
}
function jt() {
  const e = Wl.pop();
  et = e === void 0 ? !0 : e;
}
function Ao(e) {
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
class Eu {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class yi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!pe || !et || pe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== pe)
      n = this.activeLink = new Eu(pe, this), pe.deps ? (n.prevDep = pe.depsTail, pe.depsTail.nextDep = n, pe.depsTail = n) : pe.deps = pe.depsTail = n, Gl(n);
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
    gi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      xi();
    }
  }
}
function Gl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Gl(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Xr = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ Symbol(
  ""
), ei = /* @__PURE__ */ Symbol(
  ""
), Yn = /* @__PURE__ */ Symbol(
  ""
);
function Me(e, t, n) {
  if (et && pe) {
    let s = Xr.get(e);
    s || Xr.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new yi()), r.map = s, r.key = n), r.track();
  }
}
function wt(e, t, n, s, r, i) {
  const o = Xr.get(e);
  if (!o) {
    qn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (gi(), t === "clear")
    o.forEach(l);
  else {
    const a = se(e), c = a && mi(n);
    if (a && n === "length") {
      const d = Number(s);
      o.forEach((p, h) => {
        (h === "length" || h === Yn || !ht(h) && h >= d) && l(p);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(Yn)), t) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(rn)), Pt(e) && l(o.get(ei)));
          break;
        case "delete":
          a || (l(o.get(rn)), Pt(e) && l(o.get(ei)));
          break;
        case "set":
          Pt(e) && l(o.get(rn));
          break;
      }
  }
  xi();
}
function mn(e) {
  const t = /* @__PURE__ */ ae(e);
  return t === e || (Me(t, "iterate", Yn), /* @__PURE__ */ Ke(e)) ? t : /* @__PURE__ */ mt(e) ? /* @__PURE__ */ Rt(e) ? t.map((n) => Ot(qe(n))) : t.map(Ot) : t.map(qe);
}
function or(e) {
  return Me(e = /* @__PURE__ */ ae(e), "iterate", Yn), e;
}
function ut(e, t) {
  return /* @__PURE__ */ mt(e) ? Ot(/* @__PURE__ */ Rt(e) ? qe(t) : t) : qe(t);
}
const Mu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Cr(this, Symbol.iterator, (e) => ut(this, e));
  },
  concat(...e) {
    return mn(this).concat(
      ...e.map((t) => se(t) ? mn(t) : t)
    );
  },
  entries() {
    return Cr(this, "entries", (e) => (e[1] = ut(this, e[1]), e));
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
    return Er(this, "includes", e);
  },
  indexOf(...e) {
    return Er(this, "indexOf", e);
  },
  join(e) {
    return mn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Er(this, "lastIndexOf", e);
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
    return fo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fo(this, "reduceRight", e, t);
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
    return Cr(this, "values", (e) => ut(this, e));
  }
};
function Cr(e, t, n) {
  const s = or(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Ke(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const Tu = Array.prototype;
function vt(e, t, n, s, r, i) {
  const o = or(e), l = o !== e && !/* @__PURE__ */ Ke(e), a = o[t];
  if (a !== Tu[t]) {
    const p = a.apply(e, i);
    return l ? qe(p) : p;
  }
  let c = n;
  o !== e && (l ? c = function(p, h) {
    return n.call(this, ut(e, p), h, e);
  } : n.length > 2 && (c = function(p, h) {
    return n.call(this, p, h, e);
  }));
  const d = a.call(o, c, s);
  return l && r ? r(d) : d;
}
function fo(e, t, n, s) {
  const r = or(e), i = r !== e && !/* @__PURE__ */ Ke(e);
  let o = n, l = !1;
  r !== e && (i ? (l = s.length === 0, o = function(c, d, p) {
    return l && (l = !1, c = ut(e, c)), n.call(this, c, ut(e, d), p, e);
  }) : n.length > 3 && (o = function(c, d, p) {
    return n.call(this, c, d, p, e);
  }));
  const a = r[t](o, ...s);
  return l ? ut(e, a) : a;
}
function Er(e, t, n) {
  const s = /* @__PURE__ */ ae(e);
  Me(s, "iterate", Yn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ wi(n[0]) ? (n[0] = /* @__PURE__ */ ae(n[0]), s[t](...n)) : r;
}
function Mn(e, t, n = []) {
  Ft(), gi();
  const s = (/* @__PURE__ */ ae(e))[t].apply(e, n);
  return xi(), jt(), s;
}
const Iu = /* @__PURE__ */ hi("__proto__,__v_isRef,__isVue"), Kl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ht)
);
function Nu(e) {
  ht(e) || (e = String(e));
  const t = /* @__PURE__ */ ae(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
class ql {
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
      return s === (r ? i ? Uu : Ql : i ? Zl : Jl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = se(t);
    if (!r) {
      let a;
      if (o && (a = Mu[n]))
        return a;
      if (n === "hasOwnProperty")
        return Nu;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ne(t) ? t : s
    );
    if ((ht(n) ? Kl.has(n) : Iu(n)) || (r || Me(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Ne(l)) {
      const a = o && mi(n) ? l : l.value;
      return r && he(a) ? /* @__PURE__ */ ni(a) : a;
    }
    return he(l) ? r ? /* @__PURE__ */ ni(l) : /* @__PURE__ */ lr(l) : l;
  }
}
class Yl extends ql {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = se(t) && mi(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ mt(i);
      if (!/* @__PURE__ */ Ke(s) && !/* @__PURE__ */ mt(s) && (i = /* @__PURE__ */ ae(i), s = /* @__PURE__ */ ae(s)), !o && /* @__PURE__ */ Ne(i) && !/* @__PURE__ */ Ne(s))
        return c || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : fe(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Ne(t) ? t : r
    );
    return t === /* @__PURE__ */ ae(r) && a && (l ? ft(s, i) && wt(t, "set", n, s) : wt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = fe(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && wt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ht(n) || !Kl.has(n)) && Me(t, "has", n), s;
  }
  ownKeys(t) {
    return Me(
      t,
      "iterate",
      se(t) ? "length" : rn
    ), Reflect.ownKeys(t);
  }
}
class Pu extends ql {
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
const Ru = /* @__PURE__ */ new Yl(), Lu = /* @__PURE__ */ new Pu(), Du = /* @__PURE__ */ new Yl(!0);
const ti = (e) => e, gs = (e) => Reflect.getPrototypeOf(e);
function Fu(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ ae(r), o = Pt(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = r[e](...s), d = n ? ti : t ? Ot : qe;
    return !t && Me(
      i,
      "iterate",
      a ? ei : rn
    ), Oe(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: p, done: h } = c.next();
          return h ? { value: p, done: h } : {
            value: l ? [d(p[0]), d(p[1])] : d(p),
            done: h
          };
        }
      }
    );
  };
}
function xs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ju(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(r);
      e || (ft(r, l) && Me(o, "get", r), Me(o, "get", l));
      const { has: a } = gs(o), c = t ? ti : e ? Ot : qe;
      if (a.call(o, r))
        return c(i.get(r));
      if (a.call(o, l))
        return c(i.get(l));
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
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ ae(l), c = t ? ti : e ? Ot : qe;
      return !e && Me(a, "iterate", rn), l.forEach((d, p) => r.call(i, c(d), c(p), o));
    }
  };
  return Oe(
    n,
    e ? {
      add: xs("add"),
      set: xs("set"),
      delete: xs("delete"),
      clear: xs("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ ae(this), o = gs(i), l = /* @__PURE__ */ ae(r), a = !t && !/* @__PURE__ */ Ke(r) && !/* @__PURE__ */ mt(r) ? l : r;
        return o.has.call(i, a) || ft(r, a) && o.has.call(i, r) || ft(l, a) && o.has.call(i, l) || (i.add(a), wt(i, "add", a, a)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Ke(i) && !/* @__PURE__ */ mt(i) && (i = /* @__PURE__ */ ae(i));
        const o = /* @__PURE__ */ ae(this), { has: l, get: a } = gs(o);
        let c = l.call(o, r);
        c || (r = /* @__PURE__ */ ae(r), c = l.call(o, r));
        const d = a.call(o, r);
        return o.set(r, i), c ? ft(i, d) && wt(o, "set", r, i) : wt(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ ae(this), { has: o, get: l } = gs(i);
        let a = o.call(i, r);
        a || (r = /* @__PURE__ */ ae(r), a = o.call(i, r)), l && l.call(i, r);
        const c = i.delete(r);
        return a && wt(i, "delete", r, void 0), c;
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
    n[r] = Fu(r, e, t);
  }), n;
}
function bi(e, t) {
  const n = ju(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    fe(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Ou = {
  get: /* @__PURE__ */ bi(!1, !1)
}, Bu = {
  get: /* @__PURE__ */ bi(!1, !0)
}, Vu = {
  get: /* @__PURE__ */ bi(!0, !1)
};
const Jl = /* @__PURE__ */ new WeakMap(), Zl = /* @__PURE__ */ new WeakMap(), Ql = /* @__PURE__ */ new WeakMap(), Uu = /* @__PURE__ */ new WeakMap();
function Hu(e) {
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
function lr(e) {
  return /* @__PURE__ */ mt(e) ? e : ki(
    e,
    !1,
    Ru,
    Ou,
    Jl
  );
}
// @__NO_SIDE_EFFECTS__
function Wu(e) {
  return ki(
    e,
    !1,
    Du,
    Bu,
    Zl
  );
}
// @__NO_SIDE_EFFECTS__
function ni(e) {
  return ki(
    e,
    !0,
    Lu,
    Vu,
    Ql
  );
}
function ki(e, t, n, s, r) {
  if (!he(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = Hu(fu(e));
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
function wi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ae(t) : e;
}
function Gu(e) {
  return !fe(e, "__v_skip") && Object.isExtensible(e) && Rl(e, "__v_skip", !0), e;
}
const qe = (e) => he(e) ? /* @__PURE__ */ lr(e) : e, Ot = (e) => he(e) ? /* @__PURE__ */ ni(e) : e;
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return Ku(e, !1);
}
function Ku(e, t) {
  return /* @__PURE__ */ Ne(e) ? e : new qu(e, t);
}
class qu {
  constructor(t, n) {
    this.dep = new yi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ae(t), this._value = n ? t : qe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ke(t) || /* @__PURE__ */ mt(t);
    t = s ? t : /* @__PURE__ */ ae(t), ft(t, n) && (this._rawValue = t, this._value = s ? t : qe(t), this.dep.trigger());
  }
}
function E(e) {
  return /* @__PURE__ */ Ne(e) ? e.value : e;
}
const Yu = {
  get: (e, t, n) => t === "__v_raw" ? e : E(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ Ne(r) && !/* @__PURE__ */ Ne(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Xl(e) {
  return /* @__PURE__ */ Rt(e) ? e : new Proxy(e, Yu);
}
class Ju {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new yi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    pe !== this)
      return Bl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Hl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Zu(e, t, n = !1) {
  let s, r;
  return de(e) ? s = e : (s = e.get, r = e.set), new Ju(s, r, n);
}
const vs = {}, Ps = /* @__PURE__ */ new WeakMap();
let Zt;
function Qu(e, t = !1, n = Zt) {
  if (n) {
    let s = Ps.get(n);
    s || Ps.set(n, s = []), s.push(e);
  }
}
function Xu(e, t, n = ve) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = n, c = (M) => r ? M : /* @__PURE__ */ Ke(M) || r === !1 || r === 0 ? zt(M, 1) : zt(M);
  let d, p, h, x, _ = !1, w = !1;
  if (/* @__PURE__ */ Ne(e) ? (p = () => e.value, _ = /* @__PURE__ */ Ke(e)) : /* @__PURE__ */ Rt(e) ? (p = () => c(e), _ = !0) : se(e) ? (w = !0, _ = e.some((M) => /* @__PURE__ */ Rt(M) || /* @__PURE__ */ Ke(M)), p = () => e.map((M) => {
    if (/* @__PURE__ */ Ne(M))
      return M.value;
    if (/* @__PURE__ */ Rt(M))
      return c(M);
    if (de(M))
      return a ? a(M, 2) : M();
  })) : de(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (h) {
      Ft();
      try {
        h();
      } finally {
        jt();
      }
    }
    const M = Zt;
    Zt = d;
    try {
      return a ? a(e, 3, [x]) : e(x);
    } finally {
      Zt = M;
    }
  } : p = sn, t && r) {
    const M = p, ee = r === !0 ? 1 / 0 : r;
    p = () => zt(M(), ee);
  }
  const L = Su(), U = () => {
    d.stop(), L && L.active && Ml(L.effects, d);
  };
  if (i && t) {
    const M = t;
    t = (...ee) => {
      const te = M(...ee);
      return U(), te;
    };
  }
  let D = w ? new Array(e.length).fill(vs) : vs;
  const C = (M) => {
    if (!(!(d.flags & 1) || !d.dirty && !M))
      if (t) {
        const ee = d.run();
        if (M || r || _ || (w ? ee.some((te, Q) => ft(te, D[Q])) : ft(ee, D))) {
          h && h();
          const te = Zt;
          Zt = d;
          try {
            const Q = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              D === vs ? void 0 : w && D[0] === vs ? [] : D,
              x
            ];
            D = ee, a ? a(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            Zt = te;
          }
        }
      } else
        d.run();
  };
  return l && l(C), d = new jl(p), d.scheduler = o ? () => o(C, !1) : C, x = (M) => Qu(M, !1, d), h = d.onStop = () => {
    const M = Ps.get(d);
    if (M) {
      if (a)
        a(M, 4);
      else
        for (const ee of M) ee();
      Ps.delete(d);
    }
  }, t ? s ? C(!0) : D = d.run() : o ? o(C.bind(null, !0), !0) : d.run(), U.pause = d.pause.bind(d), U.resume = d.resume.bind(d), U.stop = U, U;
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
  else if (Nl(e)) {
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
    ar(r, t, n);
  }
}
function tt(e, t, n, s) {
  if (de(e)) {
    const r = us(e, t, n, s);
    return r && Tl(r) && r.catch((i) => {
      ar(i, t, n);
    }), r;
  }
  if (se(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(tt(e[i], t, n, s));
    return r;
  }
}
function ar(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ve;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let p = 0; p < d.length; p++)
          if (d[p](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ft(), us(i, null, 10, [
        e,
        a,
        c
      ]), jt();
      return;
    }
  }
  ed(e, n, r, s, o);
}
function ed(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Te = [];
let ct = -1;
const bn = [];
let It = null, xn = 0;
const ea = /* @__PURE__ */ Promise.resolve();
let Rs = null;
function ta(e) {
  const t = Rs || ea;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function td(e) {
  let t = ct + 1, n = Te.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Te[s], i = Jn(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function zi(e) {
  if (!(e.flags & 1)) {
    const t = Jn(e), n = Te[Te.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jn(n) ? Te.push(e) : Te.splice(td(t), 0, e), e.flags |= 1, na();
  }
}
function na() {
  Rs || (Rs = ea.then(ra));
}
function nd(e) {
  if (!se(e))
    It && e.id === -1 ? It.splice(xn + 1, 0, e) : e.flags & 1 || (bn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      bn.push(e[t]);
  na();
}
function po(e, t, n = ct + 1) {
  for (; n < Te.length; n++) {
    const s = Te[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Te.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function sa(e) {
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
function ra(e) {
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
    ct = -1, Te.length = 0, sa(), Rs = null, (Te.length || bn.length) && ra();
  }
}
let Ge = null, ia = null;
function Ls(e) {
  const t = Ge;
  return Ge = e, ia = e && e.type.__scopeId || null, t;
}
function oa(e, t = Ge, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && js(-1);
    const i = Ls(t), o = on.length;
    let l;
    try {
      l = e(...r);
    } finally {
      for (let a = on.length; a > o; a--) Sa();
      Ls(i), s._d && js(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function pt(e, t) {
  if (Ge === null)
    return e;
  const n = fr(Ge), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = ve] = t[r];
    i && (de(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && zt(o), s.push({
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
function Kt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (Ft(), tt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), jt());
  }
}
function sd(e, t, n = !1) {
  const s = Ma();
  if (s || kn) {
    let r = kn ? kn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && de(t) ? t.call(s && s.proxy) : t;
  }
}
const rd = /* @__PURE__ */ Symbol.for("v-scx"), id = () => sd(rd);
function cr(e, t, n) {
  return od(e, t, n);
}
function od(e, t, n = ve) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = Oe({}, n), a = t && s || !t && i !== "post";
  let c;
  if (es) {
    if (i === "sync") {
      const x = id();
      c = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!a) {
      const x = () => {
      };
      return x.stop = sn, x.resume = sn, x.pause = sn, x;
    }
  }
  const d = Vt;
  l.call = (x, _, w) => tt(x, d, _, w);
  let p = !1;
  i === "post" ? l.scheduler = (x) => {
    Re(x, d && d.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (x, _) => {
    _ ? x() : zi(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), p && (x.flags |= 2, d && (x.id = d.uid, x.i = d));
  };
  const h = Xu(e, t, l);
  return es && (c ? c.push(h) : a && h()), h;
}
const ld = /* @__PURE__ */ Symbol("_vte"), ur = (e) => e.__isTeleport, He = /* @__PURE__ */ Symbol("_leaveCb"), Tn = /* @__PURE__ */ Symbol("_enterCb");
function ad() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return fa(() => {
    e.isMounted = !0;
  }), $i(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ue = [Function, Array], la = {
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
}, aa = (e) => {
  const t = e.subTree;
  return t.component ? aa(t.component) : t;
}, cd = {
  name: "BaseTransition",
  props: la,
  setup(e, { slots: t }) {
    const n = Ma(), s = ad();
    return () => {
      const r = t.default && da(t.default(), !0), i = r && r.length ? ca(r) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? F() : void 0
      );
      if (!i)
        return;
      const o = /* @__PURE__ */ ae(e), { mode: l } = o;
      if (s.isLeaving)
        return Mr(i);
      const a = Ds(i);
      if (!a)
        return Mr(i);
      let c = si(
        a,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => c = p
      );
      a.type !== Ie && Zn(a, c);
      let d = n.subTree && Ds(n.subTree);
      if (d && d.type !== Ie && !Qt(d, a) && aa(n).type !== Ie) {
        let p = si(
          d,
          o,
          s,
          n
        );
        if (Zn(d, p), l === "out-in" && a.type !== Ie)
          return s.isLeaving = !0, p.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, d = void 0;
          }, Mr(i);
        l === "in-out" && a.type !== Ie ? p.delayLeave = (h, x, _) => {
          const w = ua(
            s,
            d
          );
          w[String(d.key)] = d, h[He] = () => {
            x(), h[He] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            _(), delete c.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return i;
    };
  }
};
function ca(e) {
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
const ud = cd;
function ua(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function si(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: d,
    onEnterCancelled: p,
    onBeforeLeave: h,
    onLeave: x,
    onAfterLeave: _,
    onLeaveCancelled: w,
    onBeforeAppear: L,
    onAppear: U,
    onAfterAppear: D,
    onAppearCancelled: C
  } = t, M = String(e.key), ee = ua(n, e), te = (S, f) => {
    S && tt(
      S,
      s,
      9,
      f
    );
  }, Q = (S, f) => {
    const m = f[1];
    te(S, f), se(S) ? S.every((v) => v.length <= 1) && m() : S.length <= 1 && m();
  }, re = {
    mode: o,
    persisted: l,
    beforeEnter(S) {
      let f = a;
      if (!n.isMounted)
        if (i)
          f = L || a;
        else
          return;
      S[He] && S[He](
        !0
        /* cancelled */
      );
      const m = ee[M];
      m && Qt(e, m) && m.el[He] && m.el[He](), te(f, [S]);
    },
    enter(S) {
      if (ee[M] === e) return;
      let f = c, m = d, v = p;
      if (!n.isMounted)
        if (i)
          f = U || c, m = D || d, v = C || p;
        else
          return;
      let N = !1;
      S[Tn] = (le) => {
        N || (N = !0, le ? te(v, [S]) : te(m, [S]), re.delayedLeave && re.delayedLeave(), S[Tn] = void 0);
      };
      const ie = S[Tn].bind(null, !1);
      f ? Q(f, [S, ie]) : ie();
    },
    leave(S, f) {
      const m = String(e.key);
      if (S[Tn] && S[Tn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return f();
      te(h, [S]);
      let v = !1;
      S[He] = (ie) => {
        v || (v = !0, f(), ie ? te(w, [S]) : te(_, [S]), S[He] = void 0, ee[m] === e && delete ee[m]);
      };
      const N = S[He].bind(null, !1);
      ee[m] = e, x ? Q(x, [S, N]) : N();
    },
    clone(S) {
      const f = si(
        S,
        t,
        n,
        s,
        r
      );
      return r && r(f), f;
    }
  };
  return re;
}
function Mr(e) {
  if (_i(e))
    return e = Bt(e), e.children = null, e;
}
function Ds(e) {
  if (!_i(e))
    return ur(e.type) && e.children ? ca(e.children) : e;
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
      ur(n.type) && Ds(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function da(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === J ? (o.patchFlag & 128 && r++, s = s.concat(
      da(o.children, t, l)
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
function dd(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ho(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Fs = /* @__PURE__ */ new WeakMap();
function Bn(e, t, n, s, r = !1) {
  if (se(e)) {
    e.forEach(
      (w, L) => Bn(
        w,
        t && (se(t) ? t[L] : t),
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
  const i = s.shapeFlag & 4 ? fr(s.component) : s.el, o = r ? null : i, { i: l, r: a } = e, c = t && t.r, d = l.refs === ve ? l.refs = {} : l.refs, p = l.setupState, h = /* @__PURE__ */ ae(p), x = p === ve ? El : (w) => ho(d, w) ? !1 : fe(h, w), _ = (w, L) => !(L && ho(d, L));
  if (c != null && c !== a) {
    if (mo(t), ye(c))
      d[c] = null, x(c) && (p[c] = null);
    else if (/* @__PURE__ */ Ne(c)) {
      const w = t;
      _(c, w.k) && (c.value = null), w.k && (d[w.k] = null);
    }
  }
  if (de(a))
    us(a, l, 12, [o, d]);
  else {
    const w = ye(a), L = /* @__PURE__ */ Ne(a);
    if (w || L) {
      const U = () => {
        if (e.f) {
          const D = w ? x(a) ? p[a] : d[a] : _() || !e.k ? a.value : d[e.k];
          if (r)
            se(D) && Ml(D, i);
          else if (se(D))
            D.includes(i) || D.push(i);
          else if (w)
            d[a] = [i], x(a) && (p[a] = d[a]);
          else {
            const C = [i];
            _(a, e.k) && (a.value = C), e.k && (d[e.k] = C);
          }
        } else w ? (d[a] = o, x(a) && (p[a] = o)) : L && (_(a, e.k) && (a.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const D = () => {
          U(), Fs.delete(e);
        };
        D.id = -1, Fs.set(e, D), Re(D, n);
      } else
        mo(e), U();
    }
  }
}
function mo(e) {
  const t = Fs.get(e);
  t && (t.flags |= 8, Fs.delete(e));
}
rr().requestIdleCallback;
rr().cancelIdleCallback;
const Vn = (e) => !!e.type.__asyncLoader, _i = (e) => e.type.__isKeepAlive;
function Ad(e, t, n = Vt, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ft();
      const l = Ei(n), a = tt(t, n, e, o);
      return l(), jt(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Aa = (e) => (t, n = Vt) => {
  (!es || e === "sp") && Ad(e, (...s) => t(...s), n);
}, fa = Aa("m"), $i = Aa(
  "bum"
), fd = /* @__PURE__ */ Symbol.for("v-ndc");
function ue(e, t, n, s) {
  let r;
  const i = n, o = se(e);
  if (o || ye(e)) {
    const l = o && /* @__PURE__ */ Rt(e);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ Ke(e), c = /* @__PURE__ */ mt(e), e = or(e)), r = new Array(e.length);
    for (let d = 0, p = e.length; d < p; d++)
      r[d] = t(
        a ? c ? Ot(qe(e[d])) : qe(e[d]) : e[d],
        d,
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
        const d = l[a];
        r[a] = t(e[d], d, a, i);
      }
    }
  else
    r = [];
  return r;
}
const ri = (e) => e ? Ta(e) ? fr(e) : ri(e.parent) : null, Un = (
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
    $parent: (e) => ri(e.parent),
    $root: (e) => ri(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      zi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ta.bind(e.proxy)),
    $watch: (e) => sn
  })
), Tr = (e, t) => e !== ve && !e.__isScriptSetup && fe(e, t), pd = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: a } = e;
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
        if (Tr(s, t))
          return o[t] = 1, s[t];
        if (fe(i, t))
          return o[t] = 3, i[t];
        if (n !== ve && fe(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = Un[t];
    let d, p;
    if (c)
      return t === "$attrs" && Me(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== ve && fe(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, fe(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Tr(r, t) ? (r[t] = n, !0) : fe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let a;
    return !!(n[l] || Tr(t, l) || fe(i, l) || fe(s, l) || fe(Un, l) || fe(r.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : fe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function pa() {
  return {
    app: null,
    config: {
      isNativeTag: El,
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
let hd = 0;
function md(e, t) {
  return function(s, r = null) {
    de(s) || (s = Oe({}, s)), r != null && !he(r) && (r = null);
    const i = pa(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = i.app = {
      _uid: hd++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Kd,
      get config() {
        return i.config;
      },
      set config(d) {
      },
      use(d, ...p) {
        return o.has(d) || (d && de(d.install) ? (o.add(d), d.install(c, ...p)) : de(d) && (o.add(d), d(c, ...p))), c;
      },
      mixin(d) {
        return c;
      },
      component(d, p) {
        return p ? (i.components[d] = p, c) : i.components[d];
      },
      directive(d, p) {
        return p ? (i.directives[d] = p, c) : i.directives[d];
      },
      mount(d, p, h) {
        if (!a) {
          const x = c._ceVNode || _e(s, r);
          return x.appContext = i, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(x, d, h), a = !0, c._container = d, d.__vue_app__ = c, fr(x.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        a && (tt(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, p) {
        return i.provides[d] = p, c;
      },
      runWithContext(d) {
        const p = kn;
        kn = c;
        try {
          return d();
        } finally {
          kn = p;
        }
      }
    };
    return c;
  };
}
let kn = null;
const gd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Xe(t)}Modifiers`] || e[`${An(t)}Modifiers`];
function xd(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ve;
  let r = n;
  const i = t.startsWith("update:"), o = i && gd(s, t.slice(7));
  o && (o.trim && (r = n.map((d) => ye(d) ? d.trim() : d)), o.number && (r = r.map(sr)));
  let l, a = s[l = _r(t)] || // also try camelCase event handler (#2249)
  s[l = _r(Xe(t))];
  !a && i && (a = s[l = _r(An(t))]), a && tt(
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
    e.emitted[l] = !0, tt(
      c,
      e,
      6,
      r
    );
  }
}
function vd(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {};
  return i ? (se(i) ? i.forEach((l) => o[l] = null) : Oe(o, i), he(e) && s.set(e, o), o) : (he(e) && s.set(e, null), null);
}
function dr(e, t) {
  return !e || !er(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), fe(e, t[0].toLowerCase() + t.slice(1)) || fe(e, An(t)) || fe(e, t));
}
function go(e) {
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
    props: p,
    data: h,
    setupState: x,
    ctx: _,
    inheritAttrs: w
  } = e, L = Ls(e);
  let U, D;
  try {
    if (n.shapeFlag & 4) {
      const M = r || s, ee = M;
      U = dt(
        c.call(
          ee,
          M,
          d,
          p,
          x,
          h,
          _
        )
      ), D = l;
    } else {
      const M = t;
      U = dt(
        M.length > 1 ? M(
          p,
          { attrs: l, slots: o, emit: a }
        ) : M(
          p,
          null
        )
      ), D = t.props ? l : yd(l);
    }
  } catch (M) {
    on.length = 0, ar(M, e, 1), U = _e(Ie);
  }
  let C = U;
  if (D && w !== !1) {
    const M = Object.keys(D), { shapeFlag: ee } = C;
    M.length && ee & 7 && (i && M.some(tr) && (D = bd(
      D,
      i
    )), C = Bt(C, D, !1, !0));
  }
  if (n.dirs && (C = Bt(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const M = ur(C.type) && Ds(C) || C;
    Zn(M, n.transition);
  }
  return U = C, Ls(L), U;
}
const yd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || er(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, bd = (e, t) => {
  const n = {};
  for (const s in e)
    (!tr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function kd(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: a } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? xo(s, o, c) : !!o;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        const h = d[p];
        if (ha(o, s, h) && !dr(c, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? xo(s, o, c) : !0 : !!o;
  return !1;
}
function xo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (ha(t, e, i) && !dr(n, i))
      return !0;
  }
  return !1;
}
function ha(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && he(s) && he(r) ? !Dt(s, r) : s !== r;
}
function wd({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const ma = {}, ga = () => Object.create(ma), xa = (e) => Object.getPrototypeOf(e) === ma;
function zd(e, t, n, s = !1) {
  const r = {}, i = ga();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), va(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ Wu(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function _d(e, t, n, s) {
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
      for (let p = 0; p < d.length; p++) {
        let h = d[p];
        if (dr(e.emitsOptions, h))
          continue;
        const x = t[h];
        if (a)
          if (fe(i, h))
            x !== i[h] && (i[h] = x, c = !0);
          else {
            const _ = Xe(h);
            r[_] = ii(
              a,
              l,
              _,
              x,
              e,
              !1
            );
          }
        else
          x !== i[h] && (i[h] = x, c = !0);
      }
    }
  } else {
    va(e, t, r, i) && (c = !0);
    let d;
    for (const p in l)
      (!t || // for camelCase
      !fe(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = An(p)) === p || !fe(t, d))) && (a ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[p] = ii(
        a,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== l)
      for (const p in i)
        (!t || !fe(t, p)) && (delete i[p], c = !0);
  }
  c && wt(e.attrs, "set", "");
}
function va(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (Fn(a))
        continue;
      const c = t[a];
      let d;
      r && fe(r, d = Xe(a)) ? !i || !i.includes(d) ? n[d] = c : (l || (l = {}))[d] = c : dr(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ ae(n), c = l || ve;
    for (let d = 0; d < i.length; d++) {
      const p = i[d];
      n[p] = ii(
        r,
        a,
        p,
        c[p],
        e,
        !fe(c, p)
      );
    }
  }
  return o;
}
function ii(e, t, n, s, r, i) {
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
          const d = Ei(r);
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
    ] && (s === "" || s === An(n)) && (s = !0));
  }
  return s;
}
function $d(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  if (!i)
    return he(e) && s.set(e, en), en;
  if (se(i))
    for (let c = 0; c < i.length; c++) {
      const d = Xe(i[c]);
      vo(d) && (o[d] = ve);
    }
  else if (i)
    for (const c in i) {
      const d = Xe(c);
      if (vo(d)) {
        const p = i[c], h = o[d] = se(p) || de(p) ? { type: p } : Oe({}, p), x = h.type;
        let _ = !1, w = !0;
        if (se(x))
          for (let L = 0; L < x.length; ++L) {
            const U = x[L], D = de(U) && U.name;
            if (D === "Boolean") {
              _ = !0;
              break;
            } else D === "String" && (w = !1);
          }
        else
          _ = de(x) && x.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = _, h[
          1
          /* shouldCastTrue */
        ] = w, (_ || fe(h, "default")) && l.push(d);
      }
    }
  const a = [o, l];
  return he(e) && s.set(e, a), a;
}
function vo(e) {
  return e[0] !== "$" && !Fn(e);
}
const Si = (e) => e === "_" || e === "_ctx" || e === "$stable", Ci = (e) => se(e) ? e.map(dt) : [dt(e)], Sd = (e, t, n) => {
  if (t._n)
    return t;
  const s = oa((...r) => Ci(t(...r)), n);
  return s._c = !1, s;
}, ya = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Si(r)) continue;
    const i = e[r];
    if (de(i))
      t[r] = Sd(r, i, s);
    else if (i != null) {
      const o = Ci(i);
      t[r] = () => o;
    }
  }
}, ba = (e, t) => {
  const n = Ci(t);
  e.slots.default = () => n;
}, ka = (e, t, n) => {
  for (const s in t)
    (n || !Si(s)) && (e[s] = t[s]);
}, Cd = (e, t, n) => {
  const s = e.slots = ga();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (ka(s, t, n), n && Rl(s, "_", r, !0)) : ya(t, s);
  } else t && ba(e, t);
}, Ed = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = ve;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : ka(r, t, n) : (i = !t.$stable, ya(t, r)), o = t;
  } else t && (ba(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Si(l) && o[l] == null && delete r[l];
}, Re = Pd;
function Md(e) {
  return Td(e);
}
function Td(e, t) {
  const n = rr();
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
    parentNode: p,
    nextSibling: h,
    setScopeId: x = sn,
    insertStaticContent: _
  } = e, w = (g, y, $, R = null, T = null, P = null, V = void 0, B = null, O = !!y.dynamicChildren) => {
    if (g === y)
      return;
    g && !Qt(g, y) && (R = ms(g), K(g, T, P, !0), g = null), y.patchFlag === -2 && (O = !1, y.dynamicChildren = null), y.dynamicChildren && g && g.dynamicChildren && g.dynamicChildren.hasOnce && (y.dynamicChildren === en && (y.dynamicChildren = []), y.dynamicChildren.hasOnce = !0);
    const { type: I, ref: X, shapeFlag: W } = y;
    switch (I) {
      case Ar:
        L(g, y, $, R);
        break;
      case Ie:
        U(g, y, $, R);
        break;
      case Nr:
        g == null && D(y, $, R, V);
        break;
      case J:
        v(
          g,
          y,
          $,
          R,
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
          R,
          T,
          P,
          V,
          B,
          O
        ) : W & 6 ? N(
          g,
          y,
          $,
          R,
          T,
          P,
          V,
          B,
          O
        ) : (W & 64 || W & 128) && I.process(
          g,
          y,
          $,
          R,
          T,
          P,
          V,
          B,
          O,
          Cn
        );
    }
    X != null && T ? Bn(X, g && g.ref, P, y || g, !y) : X == null && g && g.ref != null && Bn(g.ref, null, P, g, !0);
  }, L = (g, y, $, R) => {
    if (g == null)
      s(
        y.el = l(y.children),
        $,
        R
      );
    else {
      const T = y.el = g.el;
      y.children !== g.children && c(T, y.children);
    }
  }, U = (g, y, $, R) => {
    g == null ? s(
      y.el = a(y.children || ""),
      $,
      R
    ) : y.el = g.el;
  }, D = (g, y, $, R) => {
    [g.el, g.anchor] = _(
      g.children,
      y,
      $,
      R,
      g.el,
      g.anchor
    );
  }, C = ({ el: g, anchor: y }, $, R) => {
    let T;
    for (; g && g !== y; )
      T = h(g), s(g, $, R), g = T;
    s(y, $, R);
  }, M = ({ el: g, anchor: y }) => {
    let $;
    for (; g && g !== y; )
      $ = h(g), r(g), g = $;
    r(y);
  }, ee = (g, y, $, R, T, P, V, B, O) => {
    if (y.type === "svg" ? V = "svg" : y.type === "math" && (V = "mathml"), g == null)
      te(
        y,
        $,
        R,
        T,
        P,
        V,
        B,
        O
      );
    else {
      const I = g.el && g.el._isVueCE ? g.el : null;
      try {
        I && I._beginPatch(), S(
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
  }, te = (g, y, $, R, T, P, V, B) => {
    let O, I;
    const { props: X, shapeFlag: W, transition: Y, dirs: ne } = g;
    if (O = g.el = o(
      g.type,
      P,
      X && X.is,
      X
    ), W & 8 ? d(O, g.children) : W & 16 && re(
      g.children,
      O,
      null,
      R,
      T,
      Ir(g, P),
      V,
      B
    ), ne && Kt(g, null, R, "created"), Q(O, g, g.scopeId, V, R), X) {
      for (const Ae in X)
        Ae !== "value" && !Fn(Ae) && i(O, Ae, null, X[Ae], P, R);
      "value" in X && i(O, "value", null, X.value, P), (I = X.onVnodeBeforeMount) && at(I, R, g);
    }
    ne && Kt(g, null, R, "beforeMount");
    const oe = Id(T, Y);
    oe && Y.beforeEnter(O), s(O, y, $), ((I = X && X.onVnodeMounted) || oe || ne) && Re(() => {
      try {
        I && at(I, R, g), oe && Y.enter(O), ne && Kt(g, null, R, "mounted");
      } finally {
      }
    }, T);
  }, Q = (g, y, $, R, T) => {
    if ($ && x(g, $), R)
      for (let P = 0; P < R.length; P++)
        x(g, R[P]);
    if (T) {
      let P = T.subTree;
      if (y === P || $a(P.type) && (P.ssContent === y || P.ssFallback === y)) {
        const V = T.vnode;
        Q(
          g,
          V,
          V.scopeId,
          V.slotScopeIds,
          T.parent
        );
      }
    }
  }, re = (g, y, $, R, T, P, V, B, O = 0) => {
    for (let I = O; I < g.length; I++) {
      const X = g[I] = B ? kt(g[I]) : dt(g[I]);
      w(
        null,
        X,
        y,
        $,
        R,
        T,
        P,
        V,
        B
      );
    }
  }, S = (g, y, $, R, T, P, V) => {
    const B = y.el = g.el;
    let { patchFlag: O, dynamicChildren: I, dirs: X } = y;
    O |= g.patchFlag & 16;
    const W = g.props || ve, Y = y.props || ve;
    let ne;
    if ($ && qt($, !1), (ne = Y.onVnodeBeforeUpdate) && at(ne, $, y, g), X && Kt(y, g, $, "beforeUpdate"), $ && qt($, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    I && (!g.dynamicChildren || g.dynamicChildren.length !== I.length) && (O = 0, V = !1, I = null), (W.innerHTML && Y.innerHTML == null || W.textContent && Y.textContent == null) && d(B, ""), I ? f(
      g.dynamicChildren,
      I,
      B,
      $,
      R,
      Ir(y, T),
      P
    ) : V || Qe(
      g,
      y,
      B,
      null,
      $,
      R,
      Ir(y, T),
      P,
      !1
    ), O > 0) {
      if (O & 16)
        m(B, W, Y, $, T);
      else if (O & 2 && W.class !== Y.class && i(B, "class", null, Y.class, T), O & 4 && i(B, "style", W.style, Y.style, T), O & 8) {
        const oe = y.dynamicProps;
        for (let Ae = 0; Ae < oe.length; Ae++) {
          const ce = oe[Ae], be = W[ce], we = Y[ce];
          (we !== be || ce === "value") && i(B, ce, be, we, T, $);
        }
      }
      O & 1 && g.children !== y.children && d(B, y.children);
    } else !V && I == null && m(B, W, Y, $, T);
    ((ne = Y.onVnodeUpdated) || X) && Re(() => {
      ne && at(ne, $, y, g), X && Kt(y, g, $, "updated");
    }, R);
  }, f = (g, y, $, R, T, P, V) => {
    for (let B = 0; B < y.length; B++) {
      const O = g[B], I = y[B], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === J || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qt(O, I) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? p(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          $
        )
      );
      w(
        O,
        I,
        X,
        null,
        R,
        T,
        P,
        V,
        !0
      );
    }
  }, m = (g, y, $, R, T) => {
    if (y !== $) {
      if (y !== ve)
        for (const P in y)
          !Fn(P) && !(P in $) && i(
            g,
            P,
            y[P],
            null,
            T,
            R
          );
      for (const P in $) {
        if (Fn(P)) continue;
        const V = $[P], B = y[P];
        V !== B && P !== "value" && i(g, P, B, V, T, R);
      }
      "value" in $ && i(g, "value", y.value, $.value, T);
    }
  }, v = (g, y, $, R, T, P, V, B, O) => {
    const I = y.el = g ? g.el : l(""), X = y.anchor = g ? g.anchor : l("");
    let { patchFlag: W, dynamicChildren: Y, slotScopeIds: ne } = y;
    ne && (B = B ? B.concat(ne) : ne), g == null ? (s(I, $, R), s(X, $, R), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      $,
      X,
      T,
      P,
      V,
      B,
      O
    )) : W > 0 && W & 64 && Y && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === Y.length ? (f(
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
    (y.key != null || T && y === T.subTree) && wa(
      g,
      y,
      !0
      /* shallow */
    )) : Qe(
      g,
      y,
      $,
      X,
      T,
      P,
      V,
      B,
      O
    );
  }, N = (g, y, $, R, T, P, V, B, O) => {
    y.slotScopeIds = B, g == null ? y.shapeFlag & 512 ? T.ctx.activate(
      y,
      $,
      R,
      V,
      O
    ) : ie(
      y,
      $,
      R,
      T,
      P,
      V,
      O
    ) : le(g, y, O);
  }, ie = (g, y, $, R, T, P, V) => {
    const B = g.component = Od(
      g,
      R,
      T
    );
    if (_i(g) && (B.ctx.renderer = Cn), Bd(B, !1, V), B.asyncDep) {
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
    const R = y.component = g.component;
    if (kd(g, y, $))
      if (R.asyncDep && !R.asyncResolved) {
        y.el = g.el, rt(R, y, $);
        return;
      } else
        R.next = y, R.update();
    else
      y.el = g.el, R.vnode = y;
  }, Pe = (g, y, $, R, T, P, V) => {
    const B = () => {
      if (g.isMounted) {
        let { next: W, bu: Y, u: ne, parent: oe, vnode: Ae } = g;
        {
          const ot = za(g);
          if (ot) {
            W && (W.el = Ae.el, rt(g, W, V)), ot.asyncDep.then(() => {
              Re(() => {
                g.isUnmounted || I();
              }, T);
            });
            return;
          }
        }
        let ce = W, be;
        qt(g, !1), W ? (W.el = Ae.el, rt(g, W, V)) : W = Ae, Y && $s(Y), (be = W.props && W.props.onVnodeBeforeUpdate) && at(be, oe, W, Ae), qt(g, !0);
        const we = go(g), it = g.subTree;
        g.subTree = we, w(
          it,
          we,
          // parent may have changed if it's in a teleport
          p(it.el),
          // anchor may have changed if it's in a fragment
          ms(it),
          g,
          T,
          P
        ), W.el = we.el, ce === null && wd(g, we.el), ne && Re(ne, T), (be = W.props && W.props.onVnodeUpdated) && Re(
          () => at(be, oe, W, Ae),
          T
        );
      } else {
        let W;
        const { el: Y, props: ne } = y, { bm: oe, m: Ae, parent: ce, root: be, type: we } = g, it = Vn(y);
        qt(g, !1), oe && $s(oe), !it && (W = ne && ne.onVnodeBeforeMount) && at(W, ce, y), qt(g, !0);
        {
          be.ce && be.ce._hasShadowRoot() && be.ce._injectChildStyle(
            we,
            g.parent ? g.parent.type : void 0
          );
          const ot = g.subTree = go(g);
          w(
            null,
            ot,
            $,
            R,
            g,
            T,
            P
          ), y.el = ot.el;
        }
        if (Ae && Re(Ae, T), !it && (W = ne && ne.onVnodeMounted)) {
          const ot = y;
          Re(
            () => at(W, ce, ot),
            T
          );
        }
        (y.shapeFlag & 256 || ce && Vn(ce.vnode) && ce.vnode.shapeFlag & 256) && g.a && Re(g.a, T), g.isMounted = !0, y = $ = R = null;
      }
    };
    g.scope.on();
    const O = g.effect = new jl(B);
    g.scope.off();
    const I = g.update = O.run.bind(O), X = g.job = O.runIfDirty.bind(O);
    X.i = g, X.id = g.uid, O.scheduler = () => zi(X), qt(g, !0), I();
  }, rt = (g, y, $) => {
    y.component = g;
    const R = g.vnode.props;
    g.vnode = y, g.next = null, _d(g, y.props, R, $), Ed(g, y.children, $), Ft(), po(g), jt();
  }, Qe = (g, y, $, R, T, P, V, B, O = !1) => {
    const I = g && g.children, X = g ? g.shapeFlag : 0, W = y.children, { patchFlag: Y, shapeFlag: ne } = y;
    if (Y > 0) {
      if (Y & 128) {
        Gt(
          I,
          W,
          $,
          R,
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
          R,
          T,
          P,
          V,
          B,
          O
        );
        return;
      }
    }
    ne & 8 ? (X & 16 && Et(I, T, P), W !== I && d($, W)) : X & 16 ? ne & 16 ? Gt(
      I,
      W,
      $,
      R,
      T,
      P,
      V,
      B,
      O
    ) : Et(I, T, P, !0) : (X & 8 && d($, ""), ne & 16 && re(
      W,
      $,
      R,
      T,
      P,
      V,
      B,
      O
    ));
  }, hn = (g, y, $, R, T, P, V, B, O) => {
    g = g || en, y = y || en;
    const I = g.length, X = y.length, W = Math.min(I, X);
    let Y;
    for (Y = 0; Y < W; Y++) {
      const ne = y[Y] = O ? kt(y[Y]) : dt(y[Y]);
      w(
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
    I > X ? Et(
      g,
      T,
      P,
      !0,
      !1,
      W
    ) : re(
      y,
      $,
      R,
      T,
      P,
      V,
      B,
      O,
      W
    );
  }, Gt = (g, y, $, R, T, P, V, B, O) => {
    let I = 0;
    const X = y.length;
    let W = g.length - 1, Y = X - 1;
    for (; I <= W && I <= Y; ) {
      const ne = g[I], oe = y[I] = O ? kt(y[I]) : dt(y[I]);
      if (Qt(ne, oe))
        w(
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
      if (Qt(ne, oe))
        w(
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
        const ne = Y + 1, oe = ne < X ? y[ne].el : R;
        for (; I <= Y; )
          w(
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
      let ce, be = 0;
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
          for (ce = oe; ce <= Y; ce++)
            if (En[ce - oe] === 0 && Qt(De, y[ce])) {
              lt = ce;
              break;
            }
        lt === void 0 ? K(De, T, P, !0) : (En[lt - oe] = I + 1, lt >= ot ? ot = lt : it = !0, w(
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
      const ro = it ? Nd(En) : en;
      for (ce = ro.length - 1, I = we - 1; I >= 0; I--) {
        const De = oe + I, lt = y[De], io = y[De + 1], oo = De + 1 < X ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          io.el || _a(io)
        ) : R;
        En[I] === 0 ? w(
          null,
          lt,
          $,
          oo,
          T,
          P,
          V,
          B,
          O
        ) : it && (ce < 0 || I !== ro[ce] ? j(lt, $, oo, 2) : ce--);
      }
    }
  }, j = (g, y, $, R, T = null) => {
    const { el: P, type: V, transition: B, children: O, shapeFlag: I } = g;
    if (I & 6) {
      j(g.component.subTree, y, $, R);
      return;
    }
    if (I & 128) {
      g.suspense.move(y, $, R);
      return;
    }
    if (I & 64) {
      V.move(g, y, $, Cn);
      return;
    }
    if (V === J) {
      s(P, y, $);
      for (let W = 0; W < O.length; W++)
        j(O[W], y, $, R);
      s(g.anchor, y, $);
      return;
    }
    if (V === Nr) {
      C(g, y, $);
      return;
    }
    if (R !== 2 && I & 1 && B)
      if (R === 0)
        B.persisted && !P[He] ? s(P, y, $) : (B.beforeEnter(P), s(P, y, $), Re(() => B.enter(P), T));
      else {
        const { leave: W, delayLeave: Y, afterLeave: ne } = B, oe = () => {
          g.ctx.isUnmounted ? r(P) : s(P, y, $);
        }, Ae = () => {
          const ce = P._isLeaving || !!P[He];
          P._isLeaving && P[He](
            !0
            /* cancelled */
          ), B.persisted && !ce ? oe() : W(P, () => {
            oe(), ne && ne();
          });
        };
        Y ? Y(P, oe, Ae) : Ae();
      }
    else
      s(P, y, $);
  }, K = (g, y, $, R = !1, T = !1) => {
    const {
      type: P,
      props: V,
      ref: B,
      children: O,
      dynamicChildren: I,
      shapeFlag: X,
      patchFlag: W,
      dirs: Y,
      cacheIndex: ne,
      memo: oe
    } = g;
    if ((W === -2 || I && I.hasOnce) && (T = !1), B != null && (Ft(), Bn(B, null, $, g, !0), jt()), ne != null && (!g.ctx || g.ctx === y) && (y.renderCache[ne] = void 0), X & 256) {
      y.ctx.deactivate(g);
      return;
    }
    const Ae = X & 1 && Y, ce = !Vn(g);
    let be;
    if (ce && (be = V && V.onVnodeBeforeUnmount) && at(be, y, g), X & 6)
      hs(g.component, $, R);
    else {
      if (X & 128) {
        g.suspense.unmount($, R);
        return;
      }
      Ae && Kt(g, null, y, "beforeUnmount"), X & 64 ? g.type.remove(
        g,
        y,
        $,
        Cn,
        R
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
      ) : (P === J && W & 384 || !T && X & 16) && Et(O, y, $), R && G(g);
    }
    const we = oe != null && ne == null;
    (ce && (be = V && V.onVnodeUnmounted) || Ae || we) && Re(() => {
      be && at(be, y, g), Ae && Kt(g, null, y, "unmounted"), we && (g.el = null);
    }, $);
  }, G = (g) => {
    const { type: y, el: $, anchor: R, transition: T } = g;
    if (y === J) {
      ge($, R);
      return;
    }
    if (y === Nr) {
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
  }, hs = (g, y, $) => {
    const { bum: R, scope: T, job: P, subTree: V, um: B, m: O, a: I } = g;
    yo(O), yo(I), R && $s(R), T.stop(), P ? (P.flags |= 8, K(V, g, y, $)) : g.vnode.el && V && (V.transition = g.vnode.transition, K(V, g, y, $)), B && Re(B, y), Re(() => {
      g.isUnmounted = !0;
    }, y);
  }, Et = (g, y, $, R = !1, T = !1, P = 0) => {
    for (let V = P; V < g.length; V++)
      K(g[V], y, $, R, T);
  }, ms = (g) => {
    if (g.shapeFlag & 6)
      return ms(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const y = h(g.anchor || g.el), $ = y && y[ld];
    return $ ? h($) : y;
  };
  let zr = !1;
  const so = (g, y, $) => {
    let R;
    g == null ? y._vnode && (K(y._vnode, null, null, !0), R = y._vnode.component) : w(
      y._vnode || null,
      g,
      y,
      null,
      null,
      null,
      $
    ), y._vnode = g, zr || (zr = !0, po(R), sa(), zr = !1);
  }, Cn = {
    p: w,
    um: K,
    m: j,
    r: G,
    mt: ie,
    mc: re,
    pc: Qe,
    pbc: f,
    n: ms,
    o: e
  };
  return {
    render: so,
    hydrate: void 0,
    createApp: md(so)
  };
}
function Ir({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function qt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Id(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wa(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (se(s) && se(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = kt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && wa(o, l)), l.type === Ar && (l.patchFlag === -1 && (l = r[i] = kt(l)), l.el = o.el), l.type === Ie && !l.el && (l.el = o.el);
    }
}
function Nd(e) {
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
function za(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : za(t);
}
function yo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function _a(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? _a(t.subTree) : null;
}
const $a = (e) => e.__isSuspense;
function Pd(e, t) {
  t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : nd(e);
}
const J = /* @__PURE__ */ Symbol.for("v-fgt"), Ar = /* @__PURE__ */ Symbol.for("v-txt"), Ie = /* @__PURE__ */ Symbol.for("v-cmt"), Nr = /* @__PURE__ */ Symbol.for("v-stc"), on = [];
let Fe = null;
function b(e = !1) {
  on.push(Fe = e ? null : []);
}
function Sa() {
  on.pop(), Fe = on[on.length - 1] || null;
}
let Qn = 1;
function js(e, t = !1) {
  Qn += e, e < 0 && Fe && t && (Fe.hasOnce = !0);
}
function Ca(e) {
  return e.dynamicChildren = Qn > 0 ? Fe || en : null, Sa(), Qn > 0 && Fe && Fe.push(e), e;
}
function k(e, t, n, s, r, i) {
  return Ca(
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
function We(e, t, n, s, r) {
  return Ca(
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
function Os(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ea = ({ key: e }) => e ?? null, Ss = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ye(e) || /* @__PURE__ */ Ne(e) || de(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, r = null, i = e === J ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ea(t),
    ref: t && Ss(t),
    scopeId: ia,
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
  return l ? (Bs(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ye(n) ? 8 : 16), Qn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Fe.push(a), a;
}
const _e = Rd;
function Rd(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === fd) && (e = Ie), Os(e)) {
    const l = Bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Bs(l, n), Qn > 0 && !i && Fe && (l.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = l : Fe.push(l)), l.patchFlag = -2, l;
  }
  if (Wd(e) && (e = e.__vccOpts), t) {
    t = Ld(t);
    let { class: l, style: a } = t;
    l && !ye(l) && (t.class = Z(l)), he(a) && (/* @__PURE__ */ wi(a) && !se(a) && (a = Oe({}, a)), t.style = ir(a));
  }
  const o = ye(e) ? 1 : $a(e) ? 128 : ur(e) ? 64 : he(e) ? 4 : de(e) ? 2 : 0;
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
function Ld(e) {
  return e ? /* @__PURE__ */ wi(e) || xa(e) ? Oe({}, e) : e : null;
}
function Bt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e, c = t ? Dd(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ea(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? se(i) ? i.concat(Ss(t)) : [i, Ss(t)] : Ss(t)
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
  return a && s && Zn(
    d,
    a.clone(d)
  ), d;
}
function Ee(e = " ", t = 0) {
  return _e(Ar, null, e, t);
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
  ) : Os(e) ? kt(e) : _e(Ar, null, String(e));
}
function kt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bt(e);
}
function Bs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (se(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Bs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !xa(t) ? t._ctx = Ge : r === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (s & 65) {
      Bs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ge }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Ee(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Dd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Z([t.class, s.class]));
      else if (r === "style")
        t.style = ir([t.style, s.style]);
      else if (er(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(se(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !tr(r) && (t[r] = o);
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
const Fd = pa();
let jd = 0;
function Od(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Fd, i = {
    uid: jd++,
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
    scope: new $u(
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
    propsOptions: $d(s, r),
    emitsOptions: vd(s, r),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = xd.bind(null, i), e.ce && e.ce(i), i;
}
let Vt = null;
const Ma = () => Vt || Ge;
let Vs, Xn;
{
  const e = rr(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Vs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Vt = n
  ), Xn = t(
    "__VUE_SSR_SETTERS__",
    (n) => es = n
  );
}
const Ei = (e) => {
  const t = Vt;
  return Vs(e), e.scope.on(), () => {
    e.scope.off(), Vs(t);
  };
}, bo = () => {
  Vt && Vt.scope.off(), Vs(null);
};
function Ta(e) {
  return e.vnode.shapeFlag & 4;
}
let es = !1;
function Bd(e, t = !1, n = !1) {
  t && Xn(t);
  const { props: s, children: r } = e.vnode, i = Ta(e);
  zd(e, s, i, t), Cd(e, r, n || t);
  const o = i ? Vd(e, t) : void 0;
  return t && Xn(!1), o;
}
function Vd(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, pd);
  const { setup: s } = n;
  if (s) {
    Ft();
    const r = e.setupContext = s.length > 1 ? Hd(e) : null, i = Ei(e), o = us(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Tl(o);
    if (jt(), i(), (l || e.sp) && !Vn(e) && dd(e), l) {
      if (o.then(bo, bo), t)
        return o.then((a) => {
          Xn(!0);
          try {
            ko(e, a, t);
          } finally {
            Xn(!1);
          }
        }).catch((a) => {
          ar(a, e, 0);
        });
      e.asyncDep = o;
    } else
      ko(e, o);
  } else
    Ia(e);
}
function ko(e, t, n) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = Xl(t)), Ia(e);
}
function Ia(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || sn);
}
const Ud = {
  get(e, t) {
    return Me(e, "get", ""), e[t];
  }
};
function Hd(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ud),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function fr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Xl(Gu(e.exposed)), {
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
function Wd(e) {
  return de(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ Zu(e, t, es);
function Gd(e, t, n) {
  try {
    js(-1);
    const s = arguments.length;
    return s === 2 ? he(t) && !se(t) ? Os(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Os(n) && (n = [n]), _e(e, t, n));
  } finally {
    js(1);
  }
}
const Kd = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let oi;
const wo = typeof window < "u" && window.trustedTypes;
if (wo)
  try {
    oi = /* @__PURE__ */ wo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Na = oi ? (e) => oi.createHTML(e) : (e) => e, qd = "http://www.w3.org/2000/svg", Yd = "http://www.w3.org/1998/Math/MathML", bt = typeof document < "u" ? document : null, zo = bt && /* @__PURE__ */ bt.createElement("template"), Jd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? bt.createElementNS(qd, e) : t === "mathml" ? bt.createElementNS(Yd, e) : n ? bt.createElement(e, { is: n }) : bt.createElement(e);
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
      zo.innerHTML = Na(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = zo.content;
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
}, Mt = "transition", In = "animation", ts = /* @__PURE__ */ Symbol("_vtc"), Pa = {
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
}, Zd = /* @__PURE__ */ Oe(
  {},
  la,
  Pa
), Qd = (e) => (e.displayName = "Transition", e.props = Zd, e), Xd = /* @__PURE__ */ Qd(
  (e, { slots: t }) => Gd(ud, eA(e), t)
), Yt = (e, t = []) => {
  se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, _o = (e) => e ? se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function eA(e) {
  const t = {};
  for (const v in e)
    v in Pa || (t[v] = e[v]);
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
    leaveFromClass: p = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: x = `${n}-leave-to`
  } = e, _ = tA(r), w = _ && _[0], L = _ && _[1], {
    onBeforeEnter: U,
    onEnter: D,
    onEnterCancelled: C,
    onLeave: M,
    onLeaveCancelled: ee,
    onBeforeAppear: te = U,
    onAppear: Q = D,
    onAppearCancelled: re = C
  } = t, S = (v, N, ie, le) => {
    v._enterCancelled = le, Jt(v, N ? d : l), Jt(v, N ? c : o), ie && ie();
  }, f = (v, N) => {
    v._isLeaving = !1, Jt(v, p), Jt(v, x), Jt(v, h), N && N();
  }, m = (v) => (N, ie) => {
    const le = v ? Q : D, Pe = () => S(N, v, ie);
    Yt(le, [N, Pe]), $o(() => {
      Jt(N, v ? a : i), yt(N, v ? d : l), _o(le) || So(N, s, w, Pe);
    });
  };
  return Oe(t, {
    onBeforeEnter(v) {
      Yt(U, [v]), yt(v, i), yt(v, o);
    },
    onBeforeAppear(v) {
      Yt(te, [v]), yt(v, a), yt(v, c);
    },
    onEnter: m(!1),
    onAppear: m(!0),
    onLeave(v, N) {
      v._isLeaving = !0;
      const ie = () => f(v, N);
      yt(v, p), v._enterCancelled ? (yt(v, h), Mo(v)) : (Mo(v), yt(v, h)), $o(() => {
        v._isLeaving && (Jt(v, p), yt(v, x), _o(M) || So(v, s, L, ie));
      }), Yt(M, [v, ie]);
    },
    onEnterCancelled(v) {
      S(v, !1, void 0, !0), Yt(C, [v]);
    },
    onAppearCancelled(v) {
      S(v, !0, void 0, !0), Yt(re, [v]);
    },
    onLeaveCancelled(v) {
      f(v), Yt(ee, [v]);
    }
  });
}
function tA(e) {
  if (e == null)
    return null;
  if (he(e))
    return [Pr(e.enter), Pr(e.leave)];
  {
    const t = Pr(e);
    return [t, t];
  }
}
function Pr(e) {
  return mu(e);
}
function yt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ts] || (e[ts] = /* @__PURE__ */ new Set())).add(t);
}
function Jt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[ts];
  n && (n.delete(t), n.size || (e[ts] = void 0));
}
function $o(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let nA = 0;
function So(e, t, n, s) {
  const r = e._endId = ++nA, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: a } = sA(e, t);
  if (!o)
    return s();
  const c = o + "end";
  let d = 0;
  const p = () => {
    e.removeEventListener(c, h), i();
  }, h = (x) => {
    x.target === e && ++d >= a && p();
  };
  setTimeout(() => {
    d < a && p();
  }, l + 1), e.addEventListener(c, h);
}
function sA(e, t) {
  const n = window.getComputedStyle(e), s = (_) => (n[_] || "").split(", "), r = s(`${Mt}Delay`), i = s(`${Mt}Duration`), o = Co(r, i), l = s(`${In}Delay`), a = s(`${In}Duration`), c = Co(l, a);
  let d = null, p = 0, h = 0;
  t === Mt ? o > 0 && (d = Mt, p = o, h = i.length) : t === In ? c > 0 && (d = In, p = c, h = a.length) : (p = Math.max(o, c), d = p > 0 ? o > c ? Mt : In : null, h = d ? d === Mt ? i.length : a.length : 0);
  const x = d === Mt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Mt}Property`).toString()
  );
  return {
    type: d,
    timeout: p,
    propCount: h,
    hasTransform: x
  };
}
function Co(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Eo(n) + Eo(e[s])));
}
function Eo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Mo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function rA(e, t, n) {
  const s = e[ts];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const To = /* @__PURE__ */ Symbol("_vod"), iA = /* @__PURE__ */ Symbol("_vsh"), oA = /* @__PURE__ */ Symbol(""), lA = /(?:^|;)\s*display\s*:/;
function aA(e, t, n) {
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
      l != null ? uA(
        e,
        o,
        !ye(t) && t ? t[o] : void 0,
        l
      ) || Ln(s, o, l) : Ln(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[oA];
      o && (n += ";" + o), s.cssText = n, i = lA.test(n);
    }
  } else t && e.removeAttribute("style");
  To in e && (e[To] = i ? s.display : "", e[iA] && (s.display = "none"));
}
const ys = /\s*!important$/;
function Ln(e, t, n) {
  if (se(n))
    n.forEach((s) => Ln(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    ys.test(n) ? e.setProperty(t, n.replace(ys, ""), "important") : e.setProperty(t, n);
  else {
    const s = cA(e, t);
    ys.test(n) ? e.setProperty(
      An(s),
      n.replace(ys, ""),
      "important"
    ) : e[s] = n;
  }
}
const Io = ["Webkit", "Moz", "ms"], Rr = {};
function cA(e, t) {
  const n = Rr[t];
  if (n)
    return n;
  let s = Xe(t);
  if (s !== "filter" && s in e)
    return Rr[t] = s;
  s = Pl(s);
  for (let r = 0; r < Io.length; r++) {
    const i = Io[r] + s;
    if (i in e)
      return Rr[t] = i;
  }
  return t;
}
function uA(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ye(s) && n === s;
}
const No = "http://www.w3.org/1999/xlink";
function Po(e, t, n, s, r, i = ku(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(No, t.slice(6, t.length)) : e.setAttributeNS(No, t, n) : n == null || i && !Ll(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ht(n) ? String(n) : n
  );
}
function Ro(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Na(n) : n);
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
    l === "boolean" ? n = Ll(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Xt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function dA(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Lo = /* @__PURE__ */ Symbol("_vei");
function AA(e, t, n, s, r = null) {
  const i = e[Lo] || (e[Lo] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = hA(t);
    if (s) {
      const c = i[t] = xA(
        s,
        r
      );
      Xt(e, l, c, a);
    } else o && (dA(e, l, o, a), i[t] = void 0);
  }
}
const fA = /(Once|Passive|Capture)$/, pA = /^on:?(?:Once|Passive|Capture)$/;
function hA(e) {
  let t, n;
  for (; (n = e.match(fA)) && !pA.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : An(e.slice(2)), t];
}
let Lr = 0;
const mA = /* @__PURE__ */ Promise.resolve(), gA = () => Lr || (mA.then(() => Lr = 0), Lr = Date.now());
function xA(e, t) {
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
        c && tt(
          c,
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
  return n.value = e, n.attached = gA(), n;
}
const Do = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, vA = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? rA(e, s, o) : t === "style" ? aA(e, n, s) : er(t) ? tr(t) || AA(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : yA(e, t, s, o)) ? (Ro(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Po(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (bA(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ye(s))) ? Ro(e, Xe(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Po(e, t, s, o));
};
function yA(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Do(t) && de(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Do(t) && ye(n) ? !1 : t in e;
}
function bA(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Xe(t);
  return Array.isArray(n) ? n.some((r) => Xe(r) === s) : Object.keys(n).some((r) => Xe(r) === s);
}
const Us = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return se(t) ? (n) => $s(t, n) : t;
};
function kA(e) {
  e.target.composing = !0;
}
function Fo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const tn = /* @__PURE__ */ Symbol("_assign"), bs = /* @__PURE__ */ Symbol("_initialValue");
function Dr(e, t, n) {
  return t && (e = e.trim()), n && (e = sr(e)), e;
}
const Nt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[bs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[bs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[tn] = Us(r);
    const i = s || r.props && r.props.type === "number";
    Xt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[tn](Dr(e.value, n, i));
    }), (n || i) && Xt(e, "change", () => {
      e.value = Dr(e.value, n, i);
    }), t || (Xt(e, "compositionstart", kA), Xt(e, "compositionend", Fo), Xt(e, "change", Fo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const r = t ?? "", i = e[bs];
    delete e[bs], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[tn](Dr(e.value, n, s)) : e.value = r;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[tn] = Us(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? sr(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a);
  }
}, Ra = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, Xt(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? sr(Hs(a)) : Hs(a)
      ), i = e.multiple, o = i ? ln(e._modelValue) ? new Set(r) : r : r[0], l = e._pendingValue = [
        i,
        i ? se(o) ? r.slice() : r : o
      ];
      try {
        e[tn](o);
      } finally {
        ta(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[tn] = Us(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    jo(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[tn] = Us(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !wA(t, n[1], n[0])) && jo(e, t);
  }
};
function wA(e, t, n) {
  if (!n || se(e)) return Dt(e, t);
  if (ln(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function jo(e, t) {
  const n = e.multiple, s = se(t);
  if (!(n && !s && !ln(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r], l = Hs(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? o.selected = t.some((c) => String(c) === String(l)) : o.selected = _u(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Dt(Hs(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Hs(e) {
  return "_value" in e ? e._value : e.value;
}
const zA = ["ctrl", "shift", "alt", "meta"], _A = {
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
  exact: (e, t) => zA.some((n) => e[`${n}Key`] && !t.includes(n))
}, $A = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = _A[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, SA = /* @__PURE__ */ Oe({ patchProp: vA }, Jd);
let Oo;
function CA() {
  return Oo || (Oo = Md(SA));
}
const EA = ((...e) => {
  const t = CA().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = TA(s);
    if (!r) return;
    const i = t._component;
    !de(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, MA(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function MA(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function TA(e) {
  return ye(e) ? document.querySelector(e) : e;
}
const IA = "zhonglou", NA = "钟楼", PA = "1.6.0", RA = "S", LA = 10, DA = "【副本进行中：钟楼】", FA = [], jA = { briefingName: "钟楼" }, OA = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, BA = { type: "nights", template: "剩余{n}夜" }, VA = "至第四日日出", UA = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], HA = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", WA = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], GA = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], KA = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], qA = [{ id: "M1", q: "第一夜的值班签会抽中主播吗", yes: "会", no: "不会", p: 0.1, by: "d1", judge: "第一日日落的抽签结果是{{user}}本人当夜值班" }, { id: "M2", q: "塔里会出人命吗", yes: "会", no: "不会", p: 0.5, judge: "有人死于他人之手，系统宣布钟楼停摆、开启审判" }, { id: "M3", q: "主播会亲手摇响大钟吗", yes: "会", no: "不会", p: 0.35, judge: "{{user}}本人在4F机房摇动曲柄，让大钟鸣响" }], YA = [{ title: "游玩说明", md: `## 副本概况

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
- 1F文具柜：一沓纸、两支铅笔，是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], JA = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], ZA = {
  id: IA,
  name: NA,
  version: PA,
  level: RA,
  players: LA,
  token: DA,
  legacyKeys: FA,
  detect: jA,
  time: OA,
  remaining: BA,
  deadline: VA,
  roles: UA,
  rolesNote: HA,
  stateFields: WA,
  phases: GA,
  events: KA,
  markets: qA,
  docs: YA,
  danmaku: JA
}, QA = "jingjie", XA = "境界游乐园", ef = "1.2.0", tf = "A", nf = "【副本进行中：境界游乐园】", sf = [], rf = { briefingName: "境界游乐园" }, of = { type: "none" }, lf = { type: "fromPanel" }, af = [], cf = [], uf = [{ id: "M1", q: "15:30演出时主播会回头吗", yes: "会", no: "不会", p: 0.3, judge: "15:30表演区演出期间，{{user}}本人回头了" }, { id: "M2", q: "主播会坐上摩天轮吗", yes: "会", no: "不会", p: 0.55, judge: "{{user}}本人乘坐了摩天轮" }, { id: "M3", q: "主播会走进镜宫吗", yes: "会", no: "不会", p: 0.45, judge: "{{user}}本人进入了镜宫" }], df = [{ title: "游客须知", md: `## 《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], Af = {
  id: QA,
  name: XA,
  version: ef,
  level: tf,
  token: nf,
  legacyKeys: sf,
  detect: rf,
  time: of,
  remaining: lf,
  phases: af,
  events: cf,
  markets: uf,
  docs: df
}, ff = "kaoshi", pf = "考试", hf = "1.1.0", mf = "A", gf = "【副本进行中：考试】", xf = [], vf = { briefingName: "考试" }, yf = { type: "countdown", minutesPerRound: 3 }, bf = { type: "fromPanel" }, kf = "至考试结束", wf = [{ id: "main", name: "考试", cap: 100, next: null }], zf = [], _f = [], $f = {
  id: ff,
  name: pf,
  version: hf,
  level: mf,
  token: gf,
  legacyKeys: xf,
  detect: vf,
  time: yf,
  remaining: bf,
  deadline: kf,
  phases: wf,
  events: zf,
  docs: _f
}, Sf = "xiyan", Cf = "喜宴", Ef = "1.2.0", Mf = "D", Tf = "【副本进行中：喜宴】", If = [], Nf = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, Pf = { type: "countdown", minutesPerRound: 3 }, Rf = { type: "fromPanel" }, Lf = "至天亮", Df = [{ id: "main", name: "喜宴", cap: 160, next: null }], Ff = [], jf = [{ id: "M1", q: "主播会穿上喜服吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人穿上了喜服" }, { id: "M2", q: "这场婚礼的新人会是主播吗", yes: "是", no: "不是", p: 0.17, judge: "{{user}}被认定为这场婚礼的新郎或新娘", judgeNo: "{{user}}以外的某个人被认定为这场婚礼的新郎或新娘" }, { id: "M3", q: "天亮前会有人死吗", yes: "会", no: "不会", p: 0.4, judge: "有人死亡" }], Of = [], Bf = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], Vf = {
  id: Sf,
  name: Cf,
  version: Ef,
  level: Mf,
  token: Tf,
  legacyKeys: If,
  detect: Nf,
  time: Pf,
  remaining: Rf,
  deadline: Lf,
  phases: Df,
  events: Ff,
  markets: jf,
  docs: Of,
  danmaku: Bf
}, Uf = "youxi", Hf = "游戏", Wf = "1.2.0", Gf = "C", Kf = "【副本进行中：游戏】", qf = [], Yf = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Jf = { type: "countdown", minutesPerRound: 8 }, Zf = { type: "fromPanel" }, Qf = "至结算", Xf = [{ id: "main", name: "游戏", cap: 90, next: null }], ep = [], tp = [{ id: "M1", q: "第一个出局的会是主播吗", yes: "是", no: "不是", p: 0.08, judge: "第一个被淘汰出局的人是{{user}}", judgeNo: "{{user}}以外的某个人成为第一个被淘汰出局的人" }, { id: "M2", q: "三场游戏能全部玩完吗", yes: "能", no: "不能", p: 0.55, judge: "第三场游戏结束" }, { id: "M3", q: "喊数抱团时主播会拉陌生人吗", yes: "会", no: "不会", p: 0.5, judge: "喊数抱团时，{{user}}主动拉了自己同伴以外的人一起抱团" }], np = [], sp = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], rp = {
  id: Uf,
  name: Hf,
  version: Wf,
  level: Gf,
  token: Kf,
  legacyKeys: qf,
  detect: Yf,
  time: Jf,
  remaining: Zf,
  deadline: Qf,
  phases: Xf,
  events: ep,
  markets: tp,
  docs: np,
  danmaku: sp
}, ip = "wuming", op = "污名", lp = "1.1.0", ap = "B", cp = "4-8", up = "【副本进行中：污名】", dp = ["污名"], Ap = { briefingName: "污名" }, fp = { type: "countdown", minutesPerRound: 3 }, pp = { type: "countdown", template: "剩余{m}分钟" }, hp = "至收播", mp = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], gp = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], xp = [], vp = !0, yp = {
  id: ip,
  name: op,
  version: lp,
  level: ap,
  players: cp,
  token: up,
  legacyKeys: dp,
  detect: Ap,
  time: fp,
  remaining: pp,
  deadline: hp,
  phases: mp,
  events: gp,
  docs: xp,
  disableLive: vp
}, bp = "dusongshu", kp = "杜松树", wp = "1.3.0", zp = "A", _p = 6, $p = "【副本进行中：杜松树】", Sp = [], Cp = { briefingName: "杜松树" }, Ep = { type: "countdown", minutesPerRound: 30 }, Mp = { type: "fromPanel" }, Tp = "至第四日日出", Ip = ["父亲", "继母", "玛琳", "男孩", "其余"], Np = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", Pp = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], Rp = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], Lp = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], Dp = [{ id: "M1", q: "第一夜会有人死在苹果箱里吗", yes: "会", no: "不会", p: 0.5, by: "n1", judge: "有人在苹果箱里被箱盖压死或死在箱中" }, { id: "M2", q: "主播会吃下锅里的炖肉吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人吃了灶上铁锅里炖的肉" }, { id: "M3", q: "杜松树上的鸟会开口吗", yes: "会", no: "不会", p: 0.6, judge: "杜松树上那只红绿羽毛的鸟开口说话或唱歌" }], Fp = [{ title: "游玩说明", md: `## 副本概况

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
鸟飞到金匠那里唱歌，金匠送给它一条金链子；飞到鞋匠那里唱歌，鞋匠送给它一双红鞋子；飞到磨坊那里唱歌，磨坊工送给它一块磨盘。` }], jp = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], Op = {
  id: bp,
  name: kp,
  version: wp,
  level: zp,
  players: _p,
  token: $p,
  legacyKeys: Sp,
  detect: Cp,
  time: Ep,
  remaining: Mp,
  deadline: Tp,
  roles: Ip,
  rolesNote: Np,
  phases: Pp,
  events: Rp,
  stateFields: Lp,
  markets: Dp,
  docs: Fp,
  danmaku: jp
}, Bp = "nongxian", Vp = "农闲", Up = "1.2.0", Hp = "D", Wp = !0, Gp = "不限", Kp = "【副本进行中：农闲】", qp = [], Yp = { briefingName: "农闲" }, Jp = { type: "none" }, Zp = { type: "fromPanel" }, Qp = [], Xp = [], eh = [{ title: "游玩说明", md: `## 系统简报

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
  梅姨教新菜，会添在配方板上。` }], th = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], nh = {
  id: Bp,
  name: Vp,
  version: Up,
  level: Hp,
  rest: Wp,
  players: Gp,
  token: Kp,
  legacyKeys: qp,
  detect: Yp,
  time: Jp,
  remaining: Zp,
  phases: Qp,
  events: Xp,
  docs: eh,
  danmaku: th
}, sh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function vn(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const rh = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function Bo(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(rh)) {
    const r = Number(s[1]), i = s[2];
    n = !0, i === "天" ? t += r * 1440 : i === "小时" || i === "个小时" || i === "h" || i === "H" ? t += r * 60 : t += r;
  }
  return n ? Math.round(t) : null;
}
function La(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: Bo(t), total: n === void 0 ? null : Bo(n) };
}
function ih(e, t) {
  return e.phases.find((n) => n.id === t);
}
function ns(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); )
    n.push(r), s.add(r.id), r = ih(e, r.next);
  return n;
}
function Da(e, t) {
  return ns(e, t).filter((n) => n.night).length;
}
function oh(e, t, n) {
  if (ns(e, t).some((r) => r.id === n.id)) return t;
  const s = e.phases[0];
  return s && ns(e, s).some((r) => r.id === n.id) ? s : n;
}
function Fr(e, t, n, s, r) {
  if (!e.phases.length || !e.phases.some((p) => p.id === t.id)) return;
  let i = ns(e, n), o = i.findIndex((p) => p.id === t.id);
  o < 0 && (i = ns(e, t), o = 0);
  const l = i.reduce((p, h) => p + Math.max(0, h.cap), 0), a = Math.max(0, t.cap - s) + i.slice(o + 1).reduce((p, h) => p + Math.max(0, h.cap), 0), c = t.deadline ?? i[0].deadline ?? e.deadline, d = { x: a, y: l, deadline: c };
  if (e.time.type === "countdown") {
    const p = e.time.minutesPerRound, h = e.time.totalMinutes, x = h && h > 0 ? h : l * p;
    let _ = h && h > 0 && l > 0 ? Math.round(x * a / l) : a * p;
    const w = La(r).remaining;
    w !== null && (_ = Math.min(_, w - p)), _ = Math.max(0, _), Object.assign(d, { minutes: _, total: x, text: `约剩${vn(_)}/${vn(x)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) d.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const p = e.remaining.template.replace("{n}", String(Da(e, t)));
      d.text = c ? `${c}·${p}` : p;
    } else c && (d.text = c);
  return d;
}
const ss = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function Fa(e, t, n = ss) {
  const s = e ?? "", r = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), i = r ? Math.max(1, Number(r[1])) : Math.max(1, Math.round(n[t] ?? ss[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: i };
  const l = Number(o[1]), a = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return a <= 0 ? { rounds: i } : { rounds: i, totalMinutes: a, minutesPerRound: Math.max(1, Math.round(a / i)) };
}
const Ws = "generic", li = [ZA, Af, $f, Vf, rp, yp, Op, nh], lh = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(sh)
  }
};
function ah(e, t) {
  const n = lh[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const ja = ["D", "C", "B", "A", "S"];
function Oa(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Ws && t.push(`id 不能是保留字 ${Ws}`), ja.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((c) => typeof c != "string")) && t.push("detect.patterns 必须是文本数组");
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
    c.when !== void 0 && typeof c.when != "string" && t.push(`danmaku[${d}].when 必须是文本`), c.scope !== void 0 && typeof c.scope != "string" && t.push(`danmaku[${d}].scope 必须是文本`), c.phase !== void 0 && (!Array.isArray(c.phase) || c.phase.some((p) => typeof p != "string") ? t.push(`danmaku[${d}].phase 必须是文本数组`) : c.phase.forEach((p) => {
      o.size > 0 && !o.has(p) && console.warn(`[rlzc] danmaku[${d}] 的 phase "${p}" 不在阶段表中，已跳过`);
    }));
  }) : t.push("danmaku 必须是数组")), n.markets !== void 0)
    if (!Array.isArray(n.markets)) t.push("markets 必须是数组");
    else {
      const c = /* @__PURE__ */ new Set();
      n.markets.forEach((d, p) => {
        if (!d || typeof d != "object") {
          t.push(`markets[${p}] 必须是对象`);
          return;
        }
        for (const h of ["id", "q", "yes", "no", "judge"])
          (typeof d[h] != "string" || !d[h].trim()) && t.push(`markets[${p}] 缺少文本字段 ${h}`);
        (typeof d.p != "number" || !(d.p >= 0.01 && d.p <= 0.99)) && t.push(`markets[${p}].p 必须是 0.01–0.99 的数`), d.judgeNo !== void 0 && (typeof d.judgeNo != "string" || !d.judgeNo.trim()) && t.push(`markets[${p}].judgeNo 必须是文本`), d.by !== void 0 && typeof d.by != "string" && t.push(`markets[${p}].by 必须是阶段 id`), typeof d.id == "string" && (c.has(d.id) && t.push(`事件盘 id 重复：${d.id}`), c.add(d.id));
      });
    }
  return t;
}
function ch(e) {
  const t = new Set(e.phases.map((n) => n.id));
  return (e.markets ?? []).filter((n) => n.by !== void 0 && !t.has(n.by) ? (console.warn(`[rlzc] 副本包 ${e.id} 的事件盘 ${n.id}：by「${n.by}」不是本包的阶段 id，已跳过`), !1) : !0);
}
function Mi(e) {
  return ja.includes(e.level ?? "") ? e.level : "D";
}
function Ba(e, t = ss) {
  const n = Mi(e), s = Fa(e.limit, n, t), r = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, i = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / r)) : void 0;
  return {
    id: Ws,
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
function Ti(e) {
  const t = new Set(li.map((n) => n.id));
  return [...li, ...e.filter((n) => !t.has(n.id))];
}
const uh = /副本简报[^\S\n]*(?:——|[-－—：:·・])[^\S\n]*([^\n」』]*)/, dh = /<阶段切换>([\s\S]*?)<\/阶段切换>/, Ah = /<副本结算>([\s\S]*?)<\/副本结算>/, Va = /<副本>([\s\S]*?)<\/副本>/, fh = /<角色登记>([\s\S]*?)<\/角色登记>/, ph = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, hh = /<积分变动>([\s\S]*?)<\/积分变动>/g, mh = "《「『【", gh = "》」』】";
function xh(e) {
  let t = e.trim();
  for (; ; ) {
    const n = t;
    if (mh.includes(t[0] ?? "\0") && (t = t.slice(1).trim()), gh.includes(t[t.length - 1] ?? "\0") && (t = t.slice(0, -1).trim()), t === n) return t;
  }
}
function vh(e) {
  const t = e.charCodeAt(0);
  return t >= 65281 && t <= 65374 ? String.fromCharCode(t - 65248) : e;
}
function Ua(e) {
  const t = uh.exec(e ?? ""), n = t ? xh(t[1]) : "";
  if (!t || !n) return null;
  const s = { name: n }, r = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (a) => {
    const c = new RegExp(`${a}\\s*[：:]\\s*([^」』\\n]+)`).exec(r);
    return c ? c[1].trim() : void 0;
  }, o = i("等级"), l = o && /[DCBASｄｃｂａｓＤＣＢＡＳ]/i.exec(o);
  return l && (s.level = vh(l[0]).toUpperCase()), s.goal = i("目标"), s.limit = i("时限"), s.players = i("人数"), s;
}
function yh(e) {
  const t = dh.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function Ha(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const r = n.slice(0, s).trim(), i = n.slice(s + 1).trim();
    r && (t[r] = i);
  }
  return t;
}
function pr(e) {
  const t = Ah.exec(e ?? "");
  if (!t) return null;
  const n = Ha(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function Wa(e) {
  const t = fh.exec(e ?? "");
  if (!t) return null;
  const n = Ha(t[1]);
  return Object.keys(n).length ? n : null;
}
function ks(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function Ga(e) {
  const t = Va.exec(e ?? "");
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
      l === "时限" ? (n.limit = a, s = null) : l === "进度条" ? (n.progressBar = a, s = null) : l === "任务" ? (ks(a) && n.tasks.push(ks(a)), s = "tasks") : (n.ps = a, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(i)) {
      s = null;
      continue;
    }
    s === "tasks" ? ks(i) && n.tasks.push(ks(i)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${i}` : i);
  }
  return n;
}
function bh(e) {
  const t = ph.exec(e ?? "");
  return t ? t[2] : null;
}
function jr(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (n(r)) return r;
    s.add(r.id), r = r.next ? e.phases.find((i) => i.id === r.next) : void 0;
  }
  return null;
}
function kh(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const r = (l) => !!l.clock && !l.night;
  let i = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      i = jr(e, t, r), o = i?.cap ?? 0;
      break;
    case "晚饭":
      i = jr(e, t, r), i && (o = Math.ceil(i.cap * 0.75), i.id === t.id && o <= n && (o = i.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      i = jr(e, t, (l) => !!l.night), o = i?.cap ?? 0;
      break;
  }
  return !i || i.id === t.id && o <= n + 1 ? null : { phase: i.id, round: o, label: `${i.name}第${o}轮` };
}
const wh = /<状态栏>([\s\S]*?)<\/状态栏>/;
function zh(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function Or(e, t) {
  const n = zh(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const Br = /* @__PURE__ */ new Map();
function _h(e, t) {
  const n = `${e}\0${t}`;
  if (!Br.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (r) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, r);
    }
    Br.set(n, s);
  }
  return Br.get(n);
}
function $h(e, t) {
  const n = String(e ?? ""), s = (l, a) => l ? { signal: a, pack: l, info: { name: l.name, level: l.level } } : null, r = Ua(n);
  if (r)
    return { signal: 1, pack: t.find((a) => a.detect.briefingName === r.name), info: r };
  const i = Va.exec(n);
  if (i) {
    const l = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(i[1]), a = l && s(Or(t, l[1]), 2);
    if (a) return a;
  }
  for (const l of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const a = s(Or(t, l[1]), 3);
    if (a) return a;
  }
  const o = wh.exec(n);
  if (o) {
    for (const l of o[1].split(`
`))
      if (l.includes("地点"))
        for (const a of l.matchAll(/副本《([^》]+)》/g)) {
          const c = s(Or(t, a[1]), 4);
          if (c) return c;
        }
  }
  for (const l of t)
    for (const a of l.detect.patterns ?? []) {
      const c = _h(l.id, a);
      if (c && c.test(n)) return s(l, 5);
    }
  return null;
}
const Vo = 5, Sh = { id: "_open", name: "进行中", cap: 0, next: null };
function $e(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function Ch(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function Ka(e, t, n) {
  const s = Ch(e) + Math.max(0, n - 1) * t, r = Math.floor(s / 60) % 24, i = (s % 60 + 60) % 60;
  return `${r % 12 === 0 ? 12 : r % 12}:${String(i).padStart(2, "0")}`;
}
function Uo(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return Ka(e.time.dayStart, e.time.minutesPerRound, n);
}
function qa(e) {
  return e.phases.length ? e.phases : [Sh];
}
function Cs(e, t) {
  return qa(e).find((n) => n.id === t);
}
function Ho(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (r.id === n) return !0;
    s.add(r.id), r = Cs(e, r.next);
  }
  return !1;
}
function Wo(e, t, n, s) {
  const r = n + 1, i = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > r) {
      let l = i.map((c, d) => ({ e: c, i: d })).filter(({ e: c }) => c.from >= r && c.from <= o).sort((c, d) => c.e.from - d.e.from || c.i - d.i).map(({ e: c }) => c), a = o;
      return l.length > Vo && (a = l[Vo - 1].from, l = l.filter((c) => c.from <= a)), { phase: t, round: a, events: l, skipFrom: r };
    }
  }
  return { phase: t, round: r, events: i.filter((o) => o.from === r) };
}
function Ya(e, t, n) {
  const s = t.entryIndex;
  if (!$e(e[s])) return null;
  const r = qa(n);
  let i = r[0], o = r[0], l = 0, a, c = !1, d, p, h = null, x, _, w;
  const L = /* @__PURE__ */ new Set(), U = {}, D = {}, C = /* @__PURE__ */ new Map();
  for (const N of t.manual ?? [])
    C.has(N.atIndex) || C.set(N.atIndex, []), C.get(N.atIndex).push(N);
  const M = (N, ie) => {
    D[i.id] === void 0 && N.id !== i.id && (D[i.id] = ie), n.phases.length && (o = oh(n, o, N)), i = N, l = 0, h && !Ho(n, i, h.phase) && (h = null);
  };
  for (let N = s; N < e.length; N++) {
    const ie = e[N];
    if (!c && $e(ie)) {
      const le = Wo(n, i, l, h);
      l = le.round;
      const Pe = new Set((ie.extra?.rlzc?.skippedEvents ?? []).map((j) => j.id));
      le.events.forEach((j) => {
        Pe.has(j.id) || L.add(j.id);
      }), U[N] = {
        phase: i.id,
        round: l,
        events: le.events.map((j) => j.id),
        skipFrom: le.skipFrom,
        limit: Fr(n, i, o, l, a)
      }, h && i.id === h.phase && l >= h.round && (h = null);
      const rt = String(ie.mes ?? ""), Qe = Ga(rt);
      Qe && (_ = Qe), a = Qe?.limit;
      const hn = Wa(rt);
      hn && (w = hn);
      const Gt = pr(rt);
      if (Gt)
        c = !0, d = "tag", p = N, x = Gt;
      else {
        const j = yh(rt), K = j ? r.find((G) => G.name === j) : void 0;
        if (K && n.phases.length)
          M(K, N);
        else if (i.cap > 0 && l >= i.cap && i.next) {
          const G = Cs(n, i.next);
          G && M(G, N);
        }
      }
    }
    for (const le of C.get(N) ?? []) {
      if (c) break;
      switch (le.kind) {
        case "skip": {
          h = Cs(n, le.targetPhase) && Ho(n, i, le.targetPhase) ? { phase: le.targetPhase, round: le.targetRound } : null;
          break;
        }
        case "setPhase": {
          const Pe = Cs(n, le.phase);
          Pe && (h = null, M(Pe, N));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(le.round)), h = null;
          break;
        case "end":
          c = !0, d = "manual", p = N;
          break;
      }
    }
  }
  const ee = c ? null : Wo(n, i, l, h), te = ee ? ee.round : l + 1, Q = i.cap > 0, re = n.events.filter((N) => L.has(N.id)).map((N) => N.id), S = c ? void 0 : Fr(n, i, o, te, a), f = c ? void 0 : Fr(n, i, o, l);
  let m;
  const v = n.remaining;
  return !c && v.type === "nights" && n.phases.length && !i.byTag && !i.frozen ? m = v.template.replace("{n}", String(Da(n, i))) : !c && v.type === "countdown" && S?.minutes !== void 0 && (m = v.template.replace("{m}", String(S.minutes))), {
    phase: i,
    round: l,
    nextRound: te,
    clock: c ? void 0 : Uo(n, i, te),
    currentClock: Uo(n, i, l),
    remainingText: m,
    limit: S,
    roundsLeft: f ? { x: f.x, y: f.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: c,
    endedBy: d,
    endIndex: p,
    firedEvents: re,
    warn: !c && Q && te >= i.cap - 2,
    isLastRound: !c && Q && te === i.cap,
    overdue: !c && Q && !i.next && te > i.cap,
    next: ee,
    skipGoal: h,
    settlement: x,
    panel: _,
    rolesFromChat: w,
    perMessage: U,
    phaseEnds: D,
    entryIndex: s
  };
}
const Ja = "rlzc_token", Za = "rlzc_progress", Qa = "rlzc_turn", Xa = "rlzc_state", ec = "rlzc_ledger", tc = "rlzc_live", nc = "rlzc_format", Eh = [Ja, Za, Qa, Xa, ec, tc, nc], rs = { token: "", progress: "", turn: "", injected: [] };
function Mh(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Gs(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const r = new RegExp(`(?<!\\{)\\{(${s.map(Mh).join("|")})\\}(?!\\})`, "g");
  return e.replace(r, (i, o) => n?.[o]?.trim() || o);
}
function Th(e, t) {
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
function Go(e, t, n, s = !1) {
  let r = Gs(e.text, t, n);
  return e.to > e.from && (r = `在本阶段第${e.from}到${e.to}轮之间发生：${r}`), e.if && !s && (r += `（条件：${Gs(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${r}`;
}
function Ih(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Nh(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...rs, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return rs;
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
    const C = e.roles.filter((M) => r?.[M]);
    c.push(
      C.length ? `角色登记：${e.roles.map((M) => `${M}=${r?.[M] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const d = Th(e, t.firedEvents);
  d && c.push(`已发生事件：${d}`);
  const p = [];
  o.skipFrom !== void 0 && p.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const h = new Map((s.subNext ?? []).map((C) => [C.id, C])), x = o.events.filter((C) => C.if && h.get(C.id)?.ok === !1).map((C) => ({ id: C.id, reason: h.get(C.id).reason })), _ = o.events.filter((C) => !x.some((M) => M.id === C.id)), w = (C) => !!C.if && h.get(C.id)?.ok === !0, L = _.filter((C) => C.kind === "event"), U = _.filter((C) => C.kind === "directive");
  if (L.length && (p.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), L.forEach((C) => p.push(Go(C, e, r, w(C))))), U.length && (p.push("本轮写作要求："), U.forEach((C) => p.push(Go(C, e, r, w(C))))), t.isLastRound ? p.push(Ih(t)) : t.overdue && p.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && p.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && p.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((C) => r?.[C])) {
    let C = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((M) => `${M}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (C += "死者不得是{{user}}或其同伴。"), p.push(C);
  }
  let D;
  return a?.text && (a.minutes !== void 0 ? (p.push(
    `本轮<副本>的时限一栏写：${a.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), D = { text: a.text, minutes: a.minutes, total: a.total }) : (p.push(`本轮<副本>的时限一栏写：${a.text}（照抄）。`), D = { text: a.text })), {
    token: e.token,
    progress: c.join(`
`),
    turn: p.length ? ["［本轮指令·仅供AI］", ...p].join(`
`) : "",
    injected: _.map((C) => C.id),
    limit: D,
    skipped: x.length ? x : void 0,
    state: s.stateText || void 0
  };
}
const At = "<状态栏>", yn = "</状态栏>", Ph = {
  missing: "缺失",
  misnamed: "标签名写错",
  unpaired: "不成对",
  duplicate: "多于一对"
}, Ii = /* @__PURE__ */ new Set(["副本", "阶段切换", "副本结算", "角色登记", "积分变动", "直播"]), Rh = /* @__PURE__ */ new Set(["系统面板", "状态面板", "状态", "面板", "系统状态", "状态信息", "人物状态", "角色状态", "状态条", "状态框", "系统任务状态栏", "任务状态栏", "状态栏位", "status", "statusbar", "status_bar", "status-bar"]), Lh = ["等级", "积分", "位格", "道具", "待清算", "在场"];
function Dh(e) {
  return Lh.filter((t) => new RegExp(`${t}\\s*[：:]`).test(e)).length;
}
function Ni(e) {
  const t = e.trim().toLowerCase();
  return Rh.has(t) || /状态|面板/.test(t);
}
function Ko(e, t) {
  if (Ii.has(e)) return !1;
  const n = Dh(t);
  return Ni(e) ? n >= 1 : /[^\x00-\x7f]/.test(e) && n >= 2;
}
function qo(e, t) {
  return e.split(t).length - 1;
}
function sc(e) {
  const t = /<([^<>\/\s][^<>\/]{0,11})>|【([^【】\/]{1,12})】|\[([^\[\]\/]{1,12})\]/g;
  let n;
  for (; (n = t.exec(e)) !== null; ) {
    const s = (n[1] ?? n[2] ?? n[3]).trim();
    if (Ii.has(s)) continue;
    const r = n.index + n[0].length, i = n[1] !== void 0 ? `</${n[1]}>` : n[2] !== void 0 ? `【/${n[2]}】` : `[/${n[3]}]`, o = e.indexOf(i, r);
    if (o >= 0) {
      if (Ko(s, e.slice(r, o))) return { open: n[0], start: n.index, close: i, closeAt: o };
      continue;
    }
    if (Ni(s) && Ko(s, e.slice(r, Ks(e, r)))) return { open: n[0], start: n.index };
  }
  return null;
}
function Ks(e, t) {
  const n = e.indexOf("<副本>", t);
  let s = n >= 0 ? n : e.length;
  for (; s > t && /\s/.test(e[s - 1]); ) s--;
  return s;
}
function rc(e, t) {
  const n = Ks(e, t), s = /<\/([^<>\s]{1,12})>|【\/([^【】]{1,12})】|\[\/([^\[\]]{1,12})\]/g;
  s.lastIndex = t;
  let r;
  for (; (r = s.exec(e)) !== null && r.index < n; ) {
    const i = (r[1] ?? r[2] ?? r[3]).trim();
    if (!Ii.has(i) && Ni(i))
      return { tok: r[0], at: r.index };
  }
  return null;
}
function Pi(e) {
  const t = String(e ?? ""), n = qo(t, At), s = qo(t, yn);
  if (n === 1 && s === 1)
    return t.indexOf(At) < t.indexOf(yn) ? { kind: "ok" } : { kind: "unpaired", detail: "结尾在开头之前", fixable: !1 };
  if (n === 0 && s === 0) {
    const r = sc(t);
    return r ? { kind: "misnamed", detail: r.close ? `${r.open}…${r.close}` : `${r.open}（没有结尾）`, fixable: !0 } : { kind: "missing" };
  }
  if (n === s) return { kind: "duplicate", detail: `${n}对`, fixable: !1 };
  if (n === 1 && s === 0) {
    const r = rc(t, t.indexOf(At) + At.length);
    return { kind: "unpaired", detail: r ? `结尾写成了${r.tok}` : "只有开头", fixable: !0 };
  }
  return n === 0 ? { kind: "unpaired", detail: "只有结尾", fixable: !1 } : { kind: "unpaired", detail: `开头${n}个、结尾${s}个`, fixable: !1 };
}
function Fh(e) {
  const t = String(e ?? ""), n = Pi(t);
  if (!n.fixable) return null;
  if (n.kind === "misnamed") {
    const o = sc(t), l = o.start + o.open.length;
    if (o.close !== void 0 && o.closeAt !== void 0)
      return { text: t.slice(0, o.start) + At + t.slice(l, o.closeAt) + yn + t.slice(o.closeAt + o.close.length), from: `${o.open}…${o.close}` };
    const a = Ks(t, l);
    return { text: t.slice(0, o.start) + At + t.slice(l, a) + `
` + yn + t.slice(a), from: o.open };
  }
  const s = t.indexOf(At) + At.length, r = rc(t, s);
  if (r) return { text: t.slice(0, r.at) + yn + t.slice(r.at + r.tok.length), from: `${At}…${r.tok}` };
  const i = Ks(t, s);
  return { text: t.slice(0, i) + `
` + yn + t.slice(i), from: At };
}
function ic(e, t) {
  for (let n = 0; n < t; n++) if (e[n]?.is_user) return !1;
  return !0;
}
function oc(e, t) {
  const n = e[t];
  if (!$e(n) || ic(e, t)) return null;
  const s = Pi(n.mes);
  return s.kind === "ok" ? null : s;
}
const jh = "［格式·仅供AI］上一轮的状态栏格式不对。本轮必须在正文末尾完整输出一次<状态栏>……</状态栏>，开头结尾的标签名一字不改，不得写成其他名字。";
function Oh(e) {
  for (let t = e.length - 1; t >= 0; t--)
    if ($e(e[t]))
      return oc(e, t) !== null;
  return !1;
}
function Bh(e, t = 60) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const r = e[s]?.extra?.rlzc?.format, i = oc(e, s);
    i ? n.push({ index: s, kind: i.kind, detail: i.detail, fixed: !1 }) : r?.fixed && $e(e[s]) && n.push({ index: s, kind: r.kind, detail: r.detail, fixed: !0, from: r.from });
  }
  return n;
}
const Vh = 1, Uh = 0;
function me() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function lc() {
  const e = me();
  return e.eventTypes ?? e.event_types ?? {};
}
function gn(e, t) {
  const n = lc()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  me().eventSource.on(n, t);
}
function Nn(e, t) {
  const n = lc()[e];
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
  me().setExtensionPrompt(e, t, Vh, n, s, Uh);
}
function Hh() {
  const e = me();
  typeof e.saveChat == "function" ? e.saveChat() : e.saveChatDebounced?.();
}
function Wh(e) {
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
function Yo(e, t, n, s = "回廊种菜系统") {
  const r = window.toastr, i = window.jQuery;
  if (!r || typeof i != "function") return;
  const o = document.createElement("div"), l = document.createElement("div");
  l.style.cssText = "white-space:pre-wrap;overflow-wrap:anywhere;", l.textContent = e;
  const a = document.createElement("a");
  a.href = "#", a.textContent = t, a.className = "rlzc-toast-action", a.style.cssText = "display:inline-block;margin-top:6px;padding:4px 0;text-decoration:underline;cursor:pointer;", o.append(l, a);
  const c = r.info(i(o), s, { timeOut: 12e3, extendedTimeOut: 8e3, closeButton: !0, escapeHtml: !1 });
  a.addEventListener("click", (d) => {
    d.preventDefault(), d.stopPropagation(), r.clear(c), n();
  });
}
async function Jo(e, t = "") {
  const n = me();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const r = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof r == "string" ? r : null;
  }
  return window.prompt(e, t);
}
async function Gh(e, t) {
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
const an = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function ac(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function Kh(e, t = an) {
  return t.length ? e.replace(ac(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
const ai = "rlzc-hide:";
function qh(e) {
  let t = 5381;
  for (let n = 0; n < e.length; n++) t = (t << 5) + t + e.charCodeAt(n) | 0;
  return (t >>> 0).toString(36);
}
function Yh(e) {
  const t = e.firstChild;
  return t && t.nodeType === Node.COMMENT_NODE && t.data.startsWith(ai) ? t.data.slice(ai.length) : null;
}
function Jh(e) {
  return e.querySelector(".TH-render, iframe") ? !0 : !!e.parentElement && Array.from(e.parentElement.children).some((t) => t.classList.contains("TH-streaming"));
}
function Zh() {
  const e = globalThis.TavernHelper?.refreshOneMessage;
  return typeof e == "function" ? e : null;
}
const Vr = /* @__PURE__ */ new Set();
function cc(e, t = an, n = !1, s = !1) {
  const r = q()[e];
  if (!r || r.is_user) return;
  const i = String(r.extra?.display_text ?? r.mes ?? "");
  if (!ac(n ? an : t, "").test(i)) return;
  const o = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!o) return;
  const l = me().messageFormatting;
  if (typeof l != "function") return;
  const a = Kh(i, t), c = qh(`${t.join("|")}
${a}`), d = Yh(o);
  if (d === c) return;
  const p = l(a, r.name ?? "", !!r.is_system, !1, e);
  if (!s && Jh(o)) {
    if (d === null && l(i, r.name ?? "", !!r.is_system, !1, e) === p) return;
    const h = Zh();
    if (h && !Vr.has(e)) {
      Vr.add(e), Promise.resolve().then(() => h(e)).catch((x) => console.warn("[rlzc] 请酒馆助手重渲染消息失败", e, x)).finally(() => Vr.delete(e));
      return;
    }
  }
  o.innerHTML = `<!--${ai}${c}-->${p}`;
}
function Qh(e = an, t = !1, n = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((s) => {
    const r = Number(s.getAttribute("mesid"));
    Number.isFinite(r) && cc(r, e, t, n);
  });
}
const Xh = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function uc(e) {
  return e.stateFields?.length ? e.stateFields : [Xh];
}
const em = [...an, "状态栏"], tm = new RegExp(`<(${em.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function Ri(e) {
  return String(e ?? "").replace(tm, "").replace(/\n{3,}/g, `

`).trim();
}
function nm(e) {
  const t = uc(e.pack), n = e.markets ?? [], s = [
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
${Ri(e.text)}`
  ].join(`

`);
  return { system: s, user: l };
}
function sm(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class je extends Error {
}
function rm(e) {
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
  const o = ["done", "missed", "void"], l = (Array.isArray(i.events) ? i.events : []).filter((p) => p && typeof p.id == "string" && o.includes(p.status)).map((p) => ({ id: p.id, status: p.status, reason: String(p.reason ?? "") })), a = (Array.isArray(i.next) ? i.next : []).filter((p) => p && typeof p.id == "string" && typeof p.ok == "boolean").map((p) => ({ id: p.id, ok: p.ok, reason: String(p.reason ?? "") })), c = { events: l, state: i.state, next: a }, d = typeof i.hype == "number" ? i.hype : typeof i.hype == "string" && i.hype.trim() !== "" ? Number(i.hype) : NaN;
  if (Number.isFinite(d) && (c.hype = Math.max(0, Math.min(100, Math.round(d)))), typeof i.hurt == "boolean" ? c.hurt = i.hurt : (i.hurt === "true" || i.hurt === "false") && (c.hurt = i.hurt === "true"), i.markets && typeof i.markets == "object" && !Array.isArray(i.markets)) {
    const p = {};
    for (const [h, x] of Object.entries(i.markets))
      typeof x == "boolean" ? p[h] = x : (x === "true" || x === "false") && (p[h] = x === "true");
    c.markets = p;
  }
  return c;
}
function im(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function om(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((r) => String(r ?? "")).join("|");
  return `${e}:${t}:${s}:${im(String(n?.mes ?? ""))}`;
}
function lm(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function am(e, t, n = 2) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return rm(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
class dc extends Error {
}
function hr(e) {
  if (e instanceof dc) return "超时";
  if (e instanceof je) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function Ac(e) {
  return e?.extra?.rlzc;
}
function mr(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!$e(s)) continue;
    const r = Ac(s)?.sub;
    if (r?.state && !r.skipped) return { index: n, state: r.state };
  }
  return null;
}
function cm(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!$e(s)) continue;
    const r = Ac(s)?.sub;
    return r && !r.skipped && Array.isArray(r.next) ? r.next : void 0;
  }
}
function qs(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => qs(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${qs(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function fc(e, t) {
  const n = uc(e), s = new Set(n.map((i) => i.key)), r = n.filter((i) => t[i.key] !== void 0).map((i) => `${i.label}：${qs(t[i.key])}`);
  for (const [i, o] of Object.entries(t)) s.has(i) || r.push(`${i}：${qs(o)}`);
  return r.length ? ["［副本状态·仅供AI］", ...r].join(`
`) : "";
}
const um = "你在写回廊直播间的观众弹幕。观众是回廊里的其他玩家，只看得到直播画面。什么人都有：夸赞、祝福、讨论、泼冷水、嫉妒、抹黑、造谣，正面的稍多。每条30字以内，口语，称{{user}}为主播，不用性别代词。只能根据画面里已经发生的事说话，不猜测、不透露画面外的信息。", dm = ["praise", "bless", "discuss", "cold", "envy", "smear", "rumor"];
function Am(e) {
  if (!e.aiSource || !e.subOn) return !1;
  const t = Math.max(1, Math.min(10, Math.floor(e.freq) || 3));
  return e.roundInShow > 0 && e.roundInShow % t === 0 ? !0 : e.phaseSwitch || e.hurt || e.eventDone;
}
function pc(e) {
  return String(e ?? "").replace(/<(副本|状态栏|阶段切换|副本结算|角色登记|积分变动|直播|thinking|think)>[\s\S]*?<\/\1>/g, "").replace(/<\/?[A-Za-z一-龥][^<>]*>/g, "").replace(/\n{3,}/g, `

`).trim();
}
function fm(e, t, n) {
  const s = e.map((o) => o.text), r = [], i = /* @__PURE__ */ new Set();
  for (let o = 0; o < t * 10 && r.length < Math.min(t, s.length); o++) {
    const l = Math.floor(n() * s.length);
    i.has(l) || (i.add(l), r.push(s[l]));
  }
  return r;
}
function pm(e) {
  const t = [
    um,
    "只输出一个 JSON 数组，8–12条，不要任何解释，格式：",
    '[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]'
  ].join(`
`), n = [
    `【直播间】${e.scene}`,
    `【在场角色】${e.cast.length ? e.cast.join("、") : "（无）"}`,
    `【最近两轮画面】
${e.texts.map((s) => pc(s)).filter(Boolean).join(`

`) || "（无）"}`,
    `【语气示例】
${e.samples.map((s) => `- ${s}`).join(`
`)}`
  ].join(`

`);
  return { system: t, user: n };
}
function hm(e) {
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
    type: dm.includes(l.type) ? l.type : "discuss",
    name: typeof l.name == "string" && l.name.trim() ? l.name.trim().slice(0, 16) : "匿名",
    text: l.text.trim()
  })).slice(0, 13);
  if (!o.length) throw new je("返回的弹幕为空");
  return o;
}
async function mm(e, t, n = 1) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return hm(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
function gm(e) {
  return e.t === "tip" ? `${e.name} 打赏${e.amount}` : `${e.name}：${e.text}`;
}
function xm(e, t = 5) {
  if (!e.on) return "";
  const n = e.feed.filter((r) => r.t === "msg" || r.t === "tip").slice(-t), s = `［直播·仅供AI］{{user}}正在直播，约${e.viewers}人在看。`;
  return n.length ? `${s}最近弹幕：${n.map(gm).join("／")}` : s;
}
const hc = 1500;
function mc() {
  return me().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function gc(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Li(e, t) {
  const n = new AbortController();
  let s;
  const r = new Promise((i, o) => {
    s = setTimeout(() => {
      n.abort(), o(new dc(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), r]);
  } finally {
    clearTimeout(s);
  }
}
function xc(e, t) {
  const n = typeof t?.error == "string" ? t.error : t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : ""), s = String(n ?? "").trim(), r = new Error(`${e || ""} ${s}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return r.status = e, r.detail = s, r;
}
async function vc(e) {
  const t = await e.text().catch(() => "");
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
async function yc(e, t, n, s = hc, r = 0.2, i = !1) {
  const o = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: mc(),
    signal: n,
    body: JSON.stringify({
      ...gc(e),
      model: e.model,
      messages: [
        { role: "system", content: t.system },
        { role: "user", content: t.user }
      ],
      max_tokens: s,
      temperature: r,
      stream: !1
    })
  }), l = await vc(o);
  if (!o.ok || l?.error) throw xc(o.status === 200 ? 0 : o.status, l);
  const a = l?.choices?.[0]?.message?.content ?? l?.choices?.[0]?.text ?? l?.content;
  if (typeof a != "string") {
    if (i) return "";
    throw new Error("返回里没有正文");
  }
  return a;
}
async function vm(e) {
  const t = me();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function Di(e, t, n = {}) {
  return Li(e.timeoutMs, (s) => {
    if (e.source === "main") return vm(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return yc(e.preset, t, s, hc, n.temperature ?? 0.2);
  });
}
async function ym(e, t) {
  const n = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: mc(),
    signal: t,
    body: JSON.stringify(gc(e))
  }), s = await vc(n);
  if (!n.ok || s?.error) throw xc(n.status === 200 ? 0 : n.status, s);
  const i = (Array.isArray(s) ? s : Array.isArray(s?.data) ? s.data : Array.isArray(s?.models) ? s.models : []).map((o) => typeof o == "string" ? o : o?.id ?? o?.name).filter(Boolean);
  return [...new Set(i)].sort();
}
function bm(e, t) {
  return Li(t, (n) => ym(e, n));
}
const km = 64;
async function wm(e, t) {
  if (!e.model.trim()) throw new Error("还没有选模型");
  return Li(
    t,
    (n) => yc(e, { system: "只回复 OK。", user: "ping" }, n, km, 0.2, !0)
  );
}
function Zo(e) {
  if (!e || typeof e != "object" || typeof e.ok != "boolean") return;
  const t = Number(e.at);
  return { ok: e.ok, reason: String(e.reason ?? ""), at: Number.isFinite(t) ? t : 0 };
}
function zm(e) {
  const t = {
    id: String(e?.id ?? ""),
    name: String(e?.name ?? ""),
    url: String(e?.url ?? ""),
    key: String(e?.key ?? ""),
    model: String(e?.model ?? "")
  };
  Array.isArray(e?.models) && (t.models = e.models.filter((r) => typeof r == "string" && r));
  const n = Zo(e?.fetchResult);
  n && (t.fetchResult = n);
  const s = Zo(e?.testResult);
  return s && (t.testResult = s), t;
}
function Qo(e) {
  return !!e && !!e.url.trim();
}
function Xo(e) {
  return !!e && !!e.url.trim() && !!e.model.trim();
}
function _m(e, t, n) {
  const s = String(n ?? "").trim();
  return e[t] === s ? !1 : (e[t] = s, t === "model" || (delete e.models, delete e.fetchResult), delete e.testResult, !0);
}
function el(e, t, n = Date.now()) {
  t.ok ? (e.models = [...t.models], e.fetchResult = { ok: !0, reason: "", at: n }) : e.fetchResult = { ok: !1, reason: t.reason, at: n };
}
function tl(e, t, n = Date.now()) {
  e.testResult = { ok: t.ok, reason: t.ok ? "" : t.reason, at: n };
}
function $m(e) {
  const t = new Date(e);
  return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
}
function Sm(e) {
  const t = e.fetchResult;
  return t ? t.ok ? `✓ 读到${e.models?.length ?? 0}个模型` : `✗ ${t.reason}` : "";
}
function Cm(e) {
  const t = e.testResult;
  return t ? t.ok ? "✓ 可以回复" : `✗ ${t.reason}` : "";
}
function Em(e) {
  const t = e?.testResult;
  return t?.ok ? { kind: "on", text: "已连接" } : t ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" };
}
const Mm = 80;
function ci(e) {
  const t = hr(e), n = Number(e?.status) || 0, s = String(e?.detail ?? "").replace(/\s+/g, " ").trim(), r = Array.from(s).slice(0, Mm).join("");
  return n && r ? `${t}（${n}：${r}）` : n ? `${t}（${n}）` : r ? `${t}（${r}）` : t;
}
const bc = "rlzc_ledger", $t = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, Tm = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function Im(e) {
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
const Nm = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]\s*([\s\S]*)$/i, Pm = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Rm(e) {
  const t = String(e ?? "").replace(/[Ａ-Ｚａ-ｚ]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248)), n = /[SABCD]/i.exec(t);
  return n ? n[0].toUpperCase() : null;
}
function Lm(e) {
  const t = {}, n = [];
  let s = null;
  for (const l of String(e ?? "").split(`
`)) {
    const a = l.replace(/\*\*/g, "").trim();
    if (!a || /^[━─—=\-]{3,}$/.test(a)) continue;
    const c = Nm.exec(a);
    if (c) {
      const p = /^os$/i.test(c[1]) ? "os" : c[1];
      s && !["地点", "时间", "日期"].includes(p) ? s[p] = c[2].trim() : t[p] = c[2].trim();
      continue;
    }
    const d = /^(.+?)\s*[：:]\s*$/.exec(a);
    if (d) {
      s = { 名: d[1].trim() }, n.push(s);
      continue;
    }
    if (a.includes("｜")) {
      const p = a.split("｜").map((h) => h.trim());
      n.push({ 名: p[0], 等级: p[1] ?? "" }), s = null;
    }
  }
  const r = n[0], o = !!r && ["积分", "位格", "道具", "在场"].some((l) => l in r) ? r.等级 : t.等级;
  return o ? Rm(o) : null;
}
function kc(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = Pm.exec(s.mes);
    if (!r) continue;
    const i = Lm(r[1]);
    if (i) return i;
  }
  return null;
}
function wc(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function Dm(e, t, n, s, r, i = "") {
  const o = n.结果 ?? "", l = (n.评价 ?? "").toUpperCase().trim(), a = ["D", "C", "B", "A", "S"].includes(l) ? l : null, c = o === "通关" || o === "成功" || o === "胜利", d = o === "失败", p = o === "死亡" || o === "阵亡";
  if (!c && !d && !p)
    return { delta: 0, source: "" };
  if (p)
    return { delta: 0, source: "" };
  if (d)
    return r ? { delta: 0, source: "清算未通关" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣除30%" };
  if (r) {
    const D = $t[t] + 500;
    return { delta: Math.max(0, D - s), source: "清算通关·续存至斩杀线+500", clearWin: !0 };
  }
  if (!a)
    return { delta: 0, source: "", warn: "评价缺失或无法识别，不发奖励" };
  let h = Tm[e][a];
  const x = i || e, _ = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", w = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", L = e !== t;
  let U = `副本奖励·${x} ${a}评`;
  return _ ? (h = Math.floor(h * 0.5), U += "（×50%）") : (w || L) && (h = Math.floor(h * 0.6), U += "（×60%）"), { delta: h, source: U };
}
function nl(e, t = (/* @__PURE__ */ new Date()).getFullYear()) {
  const n = /^(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
  if (!n) return;
  const s = new Date(t, Number(n[1]) - 1, Number(n[2]), Number(n[3]), Number(n[4])).getTime();
  return Number.isFinite(s) ? s : void 0;
}
function Fm(e, t) {
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
function jm(e) {
  let t = -1 / 0;
  return e.map((n, s) => (n.ts !== void 0 && Number.isFinite(n.ts) && (t = Math.floor(n.ts / 6e4)), { e: n, k: s, key: t })).sort((n, s) => n.key - s.key || n.k - s.k).map((n) => n.e);
}
function Om(e, t) {
  let n = e;
  return t.map((s) => n += s.delta);
}
function fn(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function ds(e, t, n) {
  let s = e, r = !1;
  for (const i of t)
    s += i.delta, s < n && (r = !0), i.clear && (r = !1);
  return r;
}
function Bm(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function Vm(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const r = s ?? $t[n], i = Math.max(0, r - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${i}分（${n}级斩杀线${r}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const Lt = "rlzc";
function Um() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function Hm(e, t, n) {
  return {
    id: Um(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function Wm(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function zc(e, t) {
  return e.packId === Ws ? e.briefing ? Ba(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function Gm(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return $e(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function Km(e, t) {
  const n = Gm(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((r) => ({ ...r, atIndex: r.atIndex + s }))), t.manual = t.manual.filter((r) => r.atIndex < e.length && r.atIndex >= t.entryIndex), !0;
}
function _c(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const sl = "rlzc_declined";
function Fi(e, t) {
  return `${e}:${t}`;
}
const $c = $e;
function As(e, t, n) {
  if (!$c(e[t])) return null;
  const s = $h(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function qm(e, t, n, s, r = []) {
  for (let i = Math.max(0, n); i <= Math.min(s, e.length - 1); i++) {
    const o = As(e, i, t);
    if (o && !r.includes(Fi(i, o.info.name))) return o;
  }
  return null;
}
function Ym(e, t, n = [], s = li, r = 0) {
  if (t?.status === "active") return null;
  let i = -1;
  for (let l = Math.max(0, r); l < e.length; l++) if ($c(e[l])) {
    i = l;
    break;
  }
  if (i < 0 || t && t.entryIndex === i) return null;
  const o = As(e, i, s);
  return !o || n.includes(Fi(i, o.info.name)) ? null : o;
}
const Jm = /[■█▰●◆★▮▓]/g, Zm = /[□░▱○◇☆▯▒]/g;
function Qm(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const i = Number(n[2]);
    return i === 100 ? Number(n[1]) : i > 0 ? Math.round(Number(n[1]) / i * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(Jm) ?? []).length, r = (t.match(Zm) ?? []).length;
  return s + r > 0 ? Math.round(s / (s + r) * 100) : null;
}
function rl(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function Xm(e, t) {
  return rl(e).includes(rl(t));
}
function eg(e, t, n) {
  const s = [], r = Object.keys(n.perMessage).map(Number).sort((a, c) => a - c);
  let i = !1, o = null, l = !1;
  for (const a of r) {
    const c = n.perMessage[a], p = t.phases.find((C) => C.id === c.phase)?.name ?? "进行中", h = (C, M) => s.push({ index: a, phase: p, round: c.round, kind: C, text: M }), x = e[a]?.extra?.rlzc;
    for (const C of x?.sub?.events ?? []) C.status === "missed" && h("eventMissed", `${C.id} 未写出来：${C.reason}`);
    for (const C of x?.skippedEvents ?? []) h("eventSkipped", `${C.id} 条件不成立，已跳过：${C.reason}`);
    const _ = Ga(String(e[a]?.mes ?? "")), w = a === n.entryIndex;
    if (!_) {
      w || h("missing", "本轮回复缺少 <副本> 面板"), l = !w;
      continue;
    }
    l = !1;
    const L = Qm(_.progressBar);
    _.progressBar === void 0 ? h("progressUnreadable", "<副本> 中没有进度条一栏") : L === null ? h("progressUnreadable", `进度条无法读出数值：「${_.progressBar}」`) : (!i && L !== 0 && h("progressStart", `入场后第一轮的进度条应为0，实际为 ${L}`), (L < 0 || L > 100) && h("progressRange", `进度条数值 ${L} 超出 0–100`), o !== null && L < o && h("progressDrop", `进度条比上一轮低：${o} → ${L}`), o = L), i = !0;
    const U = e[a]?.extra?.rlzc?.limit, D = U?.text ? U : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (D) {
      const C = _.limit;
      if (D.minutes !== void 0) {
        const M = La(C);
        !C || M.remaining === null || M.total === null ? h("limit", `时限读不到「剩余时间/总时长」：写的是「${C ?? "（没有时限一栏）"}」，注入的是「${D.text}」`) : (M.remaining > D.minutes && h("limit", `剩余时间比注入值多：写的是${vn(M.remaining)}，注入的是${vn(D.minutes)}`), D.total !== void 0 && M.total !== D.total && h("limit", `总时长与注入值不一致：写的是${vn(M.total)}，注入的是${vn(D.total)}`));
      } else (!C || !Xm(C, D.text)) && h("limit", `时限与注入文字不一致：写的是「${C ?? "（没有时限一栏）"}」，注入的是「${D.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: i };
}
const tg = {
  D: 2e3,
  C: 8e3,
  B: 3e4,
  A: 1e5,
  S: 3e5
}, ng = [
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
function Sc(e) {
  return ng.some((t) => e.includes(t));
}
function sg(e) {
  if (e.subHype !== void 0)
    return Math.max(0, Math.min(100, Math.round(e.subHype)));
  const t = e.subHurt !== void 0 ? e.subHurt : e.bodyText ? Sc(e.bodyText) : !1;
  let n = 20;
  return e.hasEvents && (n += 20), e.hasPhaseSwitch && (n += 20), t && (n += 30), Math.min(100, n);
}
function rg(e, t) {
  return Math.round(e * 0.6 + t * 0.4);
}
function ji(e) {
  const t = !e.packLevel || e.isRest ? e.playerLevel : e.packLevel, n = tg[t], s = !e.packLevel || e.isRest ? 0.3 : 1;
  return Math.round(n * s * (0.5 + e.heat / 100) * e.rand);
}
const ig = [10, 20, 50, 100, 200, 500, 1e3], og = [20, 25, 15, 20, 10, 8, 2], lg = [15, 20, 15, 20, 10, 16, 4];
function ag(e, t, n) {
  const s = t.reduce((i, o) => i + o, 0);
  let r = n * s;
  for (let i = 0; i < e.length; i++)
    if (r -= t[i], r <= 0) return e[i];
  return e[e.length - 1];
}
function cg(e) {
  const { hype: t, isCorr: n, rand: s, names: r } = e, i = t / 40, o = [], l = [], a = t >= 70 ? lg : og;
  for (let h = 1; h <= 3; h++) {
    const x = Math.min(1, Math.max(0, i - (h - 1)));
    if (s() < x) {
      let _ = ag(ig, a, s());
      n && (_ = Math.max(10, Math.round(_ * 0.3 / 10) * 10)), o.push(_), l.push(r[Math.floor(s() * r.length)] ?? "匿名");
    }
  }
  const c = o.reduce((h, x) => h + x, 0), d = Math.floor(c * 0.6);
  let p = "";
  return o.length === 1 ? p = `直播打赏${o[0]}×60%` : o.length > 1 && (p = `直播打赏${o.length}笔·共${c}×60%`), { count: o.length, totalFace: c, faces: o, netTotal: d, source: p, names: l };
}
const Ys = 10, Js = 13;
function Cc(e) {
  return Ys + Math.floor(e() * (Js - Ys + 1));
}
function Ur(e, t, n, s, r, i, o) {
  const l = t && !n;
  return !(e.scope === "inst" && !l || e.scope === "corr" && l || e.when === "hurt" && !s || e.when === "calm" && r >= 30 || e.when === "open" && !i || e.when === "end" && !o);
}
function ug(e) {
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
    recentTexts: p,
    names: h,
    whoNames: x,
    rand: _
  } = e, w = e.count ?? Cc(_), L = [], U = new Set(p), D = t.filter(
    (f) => Ur(f, i, o, l, a, c, d)
  ), M = x.length > 0 ? n.filter(
    (f) => Ur(f, i, o, l, a, c, d)
  ) : [], ee = s.filter((f) => Ur(f, i, o, l, a, c, d) ? f.phase && f.phase.length > 0 && r ? f.phase.includes(r) : !0 : !1), te = () => h[Math.floor(_() * h.length)] ?? "匿名", Q = () => x[Math.floor(_() * x.length)] ?? "";
  for (let f = 0; f < w * 5 && L.length < w; f++) {
    let m = "", v = "discuss";
    if (ee.length > 0 && _() < 0.3) {
      const ie = ee[Math.floor(_() * ee.length)];
      m = ie.text, v = ie.type;
    } else if (M.length > 0 && _() < 0.5) {
      const le = M[Math.floor(_() * M.length)];
      m = le.text.replace("{who}", Q()), v = le.type;
    } else if (D.length > 0) {
      const le = D[Math.floor(_() * D.length)];
      m = le.text, v = le.type;
    }
    !m || U.has(m) || (U.add(m), L.push({ name: te(), text: m, type: v }));
  }
  const re = [...ee, ...D], S = re.length ? Math.floor(_() * re.length) : 0;
  for (let f = 0; f < re.length && L.length < w; f++) {
    const m = re[(S + f) % re.length];
    U.has(m.text) || (U.add(m.text), L.push({ name: te(), text: m.text, type: m.type }));
  }
  return L;
}
const Ec = "rlzc_live", dg = "本局直播打赏撤回", Mc = 20, cn = {
  corridorOn: "回廊直播开始。",
  corridorOff: "已下播。",
  enterOff: "进入副本，回廊直播已结束。",
  instanceOn: "本局副本直播开始。",
  instanceOff: "副本结束，直播已下播。",
  revoke: "主播在副本中死亡，本局打赏已全部撤回。"
};
function Ag(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.corridor ?? {};
  return {
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0,
    corridor: { on: !!n.on, show: typeof n.show == "string" ? n.show : "", viewers: Number.isFinite(n.viewers) ? n.viewers : void 0 },
    sys: Array.isArray(t.sys) ? t.sys.filter((s) => s && typeof s.id == "number") : []
  };
}
function Tc(e, t) {
  return e.disableLive ? { show: !1, checked: !1 } : { show: !0, checked: !!t };
}
function Wt(e) {
  const t = e?.extra?.rlzc?.live;
  return t && typeof t.show == "string" && Array.isArray(t.feed) ? t : void 0;
}
function Oi(e, t, n = e.length) {
  const s = [];
  for (let r = 0; r < Math.min(n, e.length); r++) {
    const i = e[r];
    if (!i || i.is_user) continue;
    const o = Wt(i);
    o && o.show === t && s.push({ index: r, rec: o });
  }
  return s;
}
function Bi(e, t) {
  return Oi(e, t).reduce((n, { rec: s }) => n + (s.tipNet || 0) - (s.revoke || 0), 0);
}
function gr(e, t) {
  let n = t.seq;
  for (const s of t.sys) n = Math.max(n, s.id);
  for (const s of e) for (const r of Wt(s)?.feed ?? []) n = Math.max(n, r.id);
  return n;
}
function fg(e, t = 30) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const r = Wt(e[s])?.feed ?? [];
    for (let i = r.length - 1; i >= 0 && n.length < t; i--) r[i].t === "msg" && n.push(r[i].text);
  }
  return n;
}
const pg = /<状态栏>([\s\S]*?)<\/状态栏>/, hg = /^(积分|位格|道具|在场)$/, mg = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;
function Ic(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = pg.exec(s.mes);
    if (r) return r[1];
  }
  return null;
}
function Vi(e, t = e.length) {
  return kc(e, t) ?? "D";
}
function Nc(e, t = "") {
  if (!e) return [];
  const n = [];
  let s = null;
  for (const i of e.split(`
`)) {
    const o = i.trim();
    if (!o || /^[━─—=\-]{3,}$/.test(o)) continue;
    const l = mg.exec(o);
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
    if (o === 0 && [...i.keys].some((a) => hg.test(a))) return;
    const l = i.name.replace(/[（(][\s\S]*$/, "").trim();
    !l || /^(陌生|路人)/.test(l) || l === "{{user}}" || t && l === t || r.includes(l) || r.push(l);
  }), r;
}
function Pc(e, t) {
  return t?.hurt !== void 0 ? t.hurt : Sc(Ri(e));
}
function gg(e) {
  const { rand: t } = e, n = Ri(e.text), s = Pc(e.text, e.sub), r = sg({ subHype: e.sub?.hype, subHurt: s, hasEvents: e.hasEvents, hasPhaseSwitch: e.hasPhaseSwitch, bodyText: n }), i = rg(e.prevHeat ?? Mc, r), o = e.scope === "corridor" || e.isRest, l = ji({
    packLevel: e.scope === "instance" ? e.packLevel : null,
    playerLevel: e.playerLevel,
    isRest: e.isRest,
    heat: i,
    rand: 0.9 + t() * 0.2
  }), a = Cc(t), c = ug({
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
    count: e.awaitAi ? Js : a
  }), d = cg({ hype: r, isCorr: o, rand: t, names: e.names }), p = d.faces.map((w, L) => ({ t: "tip", name: d.names[L], text: "", amount: w, net: Math.floor(w * 0.6) })), h = [];
  let x;
  e.settle && (e.settle.died && (x = e.settle.tipsBefore + d.netTotal, x > 0 ? h.push({ t: "sys", name: "", text: cn.revoke, amount: 0, net: -x }) : x = void 0), h.push({ t: "sys", name: "", text: cn.instanceOff, amount: 0, net: 0 }));
  const _ = {
    show: e.show,
    scope: e.scope,
    hype: r,
    heat: i,
    viewers: l,
    hurt: s,
    feed: [],
    tipNet: d.netTotal,
    tipFace: d.totalFace,
    tipSource: d.source
  };
  return x && (_.revoke = x), e.awaitAi ? _.pending = { local: c, tips: p, sys: h, target: a } : _.feed = Rc(c.slice(0, a), p, h, e.firstId, t), _;
}
function xg(e, t, n) {
  const s = Math.max(Ys, Math.min(Js, n));
  if (!e?.length) return t.slice(0, s);
  const r = e.slice(0, Js);
  if (r.length >= Ys) return r;
  const i = new Set(r.map((o) => o.text));
  for (const o of t) {
    if (r.length >= s) break;
    i.has(o.text) || (i.add(o.text), r.push(o));
  }
  return r;
}
function Rc(e, t, n, s, r) {
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
function Lc(e, t, n, s) {
  if (!e.pending) return e;
  const { pending: r, ...i } = e, o = xg(t, r.local, r.target);
  return { ...i, feed: Rc(o, r.tips, r.sys, n, s) };
}
function vg(e, t) {
  if (!e) return [];
  const n = [];
  return e.tipNet > 0 && n.push({ delta: e.tipNet, source: e.tipSource, type: "tip", at: t }), e.revoke && e.revoke > 0 && n.push({ delta: -e.revoke, source: dg, type: "tip", at: t }), n;
}
function yg(e) {
  return `其中本局直播打赏${e}分，副本内不可使用，离开副本后可用。`;
}
function bg(e, t) {
  return e && `${e}${e.endsWith("。") ? "" : "。"}${yg(t)}`;
}
function kg(e, t, n) {
  const s = Oi(e, n), r = [];
  for (const { rec: i } of s) r.push(...i.feed);
  for (const i of t.sys) i.show === n && r.push({ id: i.id, t: i.t, name: i.name, text: i.text, amount: i.amount, net: i.net });
  return r.sort((i, o) => i.id - o.id), { items: r, last: s[s.length - 1]?.rec };
}
function wg(e, t) {
  let n = "", s = -1;
  for (const r of t.sys) r.id > s && (s = r.id, n = r.show);
  for (const r of e) {
    const i = Wt(r);
    if (i)
      for (const o of i.feed) o.id > s && (s = o.id, n = i.show);
  }
  return n;
}
function zg(e, t, n, s = /* @__PURE__ */ new Set()) {
  const r = n.inInstance ? "instance" : "corridor", i = n.inInstance ? n.instanceLive : t.corridor.on, o = n.inInstance ? n.instanceLive ? n.instanceShow ?? "" : "" : i ? t.corridor.show : wg(e, t), l = { on: i, canToggle: !n.inInstance, scope: r, viewers: 0, heat: 0, tipTotal: 0, injectToAI: n.injectToAI, feed: [], lastTip: null };
  if (!o) return l;
  const { items: a, last: c } = kg(e, t, o), d = a.filter((x) => !s.has(x.id));
  let p = 0, h = null;
  for (const x of d)
    p += x.net, x.t === "tip" && (h = { id: x.id, net: x.net });
  return {
    ...l,
    viewers: i ? c?.viewers ?? n.startViewers ?? 0 : 0,
    heat: i ? c?.heat ?? Mc : 0,
    tipTotal: p,
    feed: d.slice(-60),
    lastTip: h
  };
}
const _g = ["小满", "好运来", "路过的D级", "一个路过的A级", "数据党", "理性讨论", "吃瓜", "夜班保安", "柠檬汁", "阿柒", "东区卖菜的", "西区摆摊的", "情报社小号", "失眠第三天", "房租交不起", "今天也在种土豆", "匿名", "光幕前的咸鱼", "刚通关的C级", "排行榜第九十九", "不想进本", "炸鱼被抓过", "黑市常客", "训练场打卡人", "药剂站熬夜班", "公会跑腿的", "一个路人", "今日份幸运", "积分快见底", "刚升B级", "看录像长大的", "老观众", "新来的", "别叫我大佬", "蹲一个结算", "白开水", "半夜不睡", "又是我", "打工人", "瓜田里的猹", "慢热", "晴天", "阿九", "十一", "小绿", "老周", "木子", "苏苏", "七七", "一颗橘子", "等天亮", "北风", "不吃香菜", "没抢到号", "退役S级", "D级万岁", "靠运气活着", "只看不说", "路过打个卡", "最后一排"], $g = [{ type: "praise", text: "这反应速度，不愧是主播" }, { type: "praise", text: "冷静得不像第一次进这个级别的本", scope: "inst" }, { type: "praise", text: "刚才那个判断绝了" }, { type: "praise", text: "主播脑子转得是真快" }, { type: "praise", text: "这波我服" }, { type: "praise", text: "稳，太稳了" }, { type: "praise", text: "讲道理，换我早慌了" }, { type: "praise", text: "这就是高手吗" }, { type: "praise", text: "看得我手心出汗，主播还面不改色" }, { type: "praise", text: "刚才那句话说得漂亮" }, { type: "praise", text: "细节拉满，这都注意到了", scope: "inst" }, { type: "praise", text: "主播说话好有条理" }, { type: "praise", text: "这才叫会玩" }, { type: "praise", text: "就冲这个判断，关注了" }, { type: "praise", text: "有勇有谋" }, { type: "praise", text: "比上一个主播强多了" }, { type: "praise", text: "队友拖后腿，主播一个人在带", scope: "inst" }, { type: "praise", text: "这个位置站得好", scope: "inst" }, { type: "praise", text: "我宣布这是本周最佳直播" }, { type: "praise", text: "主播镇定得让我也镇定了" }, { type: "praise", text: "那个眼神，太帅了" }, { type: "praise", text: "心态真好，要是我早骂人了" }, { type: "praise", text: "这个节奏把握得好", scope: "inst" }, { type: "praise", text: "看出来是做过功课的" }, { type: "praise", text: "夸一句，主播是真的会说话" }, { type: "praise", text: "一句话就把场面稳住了", scope: "inst" }, { type: "praise", text: "这份胆量我是没有" }, { type: "praise", text: "学到了，下次我也这么干" }, { type: "praise", text: "主播好好看" }, { type: "praise", text: "声音也好听，别下播" }, { type: "praise", text: "越看越顺眼" }, { type: "praise", text: "这气质，放在哪个本都是主角" }, { type: "praise", text: "能屈能伸，佩服" }, { type: "praise", text: "刚才那一下我起立鼓掌" }, { type: "praise", text: "不慌不忙，高手风范" }, { type: "praise", text: "回廊里也过得这么讲究，爱了", scope: "corr" }, { type: "praise", text: "主播种的菜看着真水灵", scope: "corr" }, { type: "praise", text: "这手艺可以去西区摆摊了", scope: "corr" }, { type: "praise", text: "休整都不忘练，怪不得排名涨", scope: "corr" }, { type: "praise", text: "房间收拾得真干净", scope: "corr" }, { type: "bless", text: "祝平安出来！！", scope: "inst" }, { type: "bless", text: "主播一定要活着回来", scope: "inst" }, { type: "bless", text: "保佑保佑" }, { type: "bless", text: "冲啊主播！" }, { type: "bless", text: "这把一定能过", scope: "inst" }, { type: "bless", text: "结算见！", scope: "inst", when: "end" }, { type: "bless", text: "平安就好，评级无所谓", scope: "inst" }, { type: "bless", text: "等你出来请你吃饭", scope: "inst" }, { type: "bless", text: "好运加满，霉运退散" }, { type: "bless", text: "希望别再有人出事了", scope: "inst", when: "hurt" }, { type: "bless", text: "主播加油，我在东区超市门口看着呢" }, { type: "bless", text: "撑住，天总会亮的", scope: "inst" }, { type: "bless", text: "别怕，我们都在" }, { type: "bless", text: "好人一生平安" }, { type: "bless", text: "这波过了就能歇歇了", scope: "inst" }, { type: "bless", text: "下个副本抽个简单的吧", scope: "corr" }, { type: "bless", text: "注意安全，别逞强", scope: "inst" }, { type: "bless", text: "保重身体啊", when: "hurt" }, { type: "bless", text: "受伤了先处理伤口", scope: "inst", when: "hurt" }, { type: "bless", text: "一路绿灯，一路绿灯" }, { type: "bless", text: "今天也要好好活着" }, { type: "bless", text: "愿系统对你手下留情" }, { type: "bless", text: "别哭，我们陪你", when: "hurt" }, { type: "bless", text: "等着看你升级" }, { type: "bless", text: "最后一口气了，撑住", scope: "inst", when: "end" }, { type: "bless", text: "最后几轮，稳住！", scope: "inst", when: "end" }, { type: "bless", text: "主播今天早点睡", scope: "corr" }, { type: "bless", text: "休息好了再进本", scope: "corr" }, { type: "bless", text: "希望房租别涨", scope: "corr" }, { type: "bless", text: "回廊安稳一天是一天", scope: "corr" }, { type: "discuss", text: "现在什么情况，我刚进来" }, { type: "discuss", text: "来了来了，这把什么本", scope: "inst", when: "open" }, { type: "discuss", text: "开播了开播了", when: "open" }, { type: "discuss", text: "新主播？没见过", when: "open" }, { type: "discuss", text: "先别吵，看局势" }, { type: "discuss", text: "我觉得还有线索没找到", scope: "inst" }, { type: "discuss", text: "按往届，这本不好打", scope: "inst" }, { type: "discuss", text: "有没有人看过这本的录像", scope: "inst" }, { type: "discuss", text: "黑市那种录像别全信" }, { type: "discuss", text: "这队人各怀心思吧", scope: "inst" }, { type: "discuss", text: "现在还剩几个人？", scope: "inst" }, { type: "discuss", text: "前面说的那个我也注意到了" }, { type: "discuss", text: "理性讨论，别带节奏" }, { type: "discuss", text: "我赌主播能过" }, { type: "discuss", text: "有人算过这把能拿什么评吗", scope: "inst" }, { type: "discuss", text: "主播刚才是不是话里有话" }, { type: "discuss", text: "这个人说话一直留半句", scope: "inst" }, { type: "discuss", text: "注意细节，刚才那句不对劲", scope: "inst" }, { type: "discuss", text: "我在光幕前面站了一个小时了" }, { type: "discuss", text: "回放能看吗，刚才没看清" }, { type: "discuss", text: "有没有懂的解释一下" }, { type: "discuss", text: "你们看出来了吗，我看不出来" }, { type: "discuss", text: "这一段要是剪进录像会卖爆" }, { type: "discuss", text: "楼上别剧透……虽然我也不知道" }, { type: "discuss", text: "好无聊，快进", when: "calm" }, { type: "discuss", text: "主播在发呆吗", when: "calm" }, { type: "discuss", text: "挂着当背景音了", when: "calm" }, { type: "discuss", text: "去泡了碗面回来还是这样", when: "calm" }, { type: "discuss", text: "这么安静，要出事了吧", scope: "inst", when: "calm" }, { type: "discuss", text: "暴风雨前的宁静", scope: "inst", when: "calm" }, { type: "discuss", text: "啊啊啊有人倒了", scope: "inst", when: "hurt" }, { type: "discuss", text: "刚才那一下我没敢看", when: "hurt" }, { type: "discuss", text: "又走一个……", scope: "inst", when: "hurt" }, { type: "discuss", text: "手在抖吧，换我也抖", when: "hurt" }, { type: "discuss", text: "快结束了吧", scope: "inst", when: "end" }, { type: "discuss", text: "结算前最后几轮最容易出事", scope: "inst", when: "end" }, { type: "discuss", text: "今天种什么？", scope: "corr" }, { type: "discuss", text: "回廊直播也有人看，我服了我自己", scope: "corr" }, { type: "discuss", text: "排行榜又变了，你们看了吗", scope: "corr" }, { type: "discuss", text: "下个本打算报哪个？", scope: "corr" }, { type: "cold", text: "别高兴太早" }, { type: "cold", text: "我看悬" }, { type: "cold", text: "这把凉了吧" }, { type: "cold", text: "就这？" }, { type: "cold", text: "也就一般" }, { type: "cold", text: "运气好而已" }, { type: "cold", text: "换个人也能做到" }, { type: "cold", text: "等着翻车吧" }, { type: "cold", text: "这种判断，迟早出事" }, { type: "cold", text: "看了半天也没看出哪里厉害" }, { type: "cold", text: "太磨叽了" }, { type: "cold", text: "说了这么多，一点用没有" }, { type: "cold", text: "我押失败", scope: "inst" }, { type: "cold", text: "评级能拿个C就不错了", scope: "inst" }, { type: "cold", text: "队友再强也带不动", scope: "inst" }, { type: "cold", text: "太自信了，这本专治自信", scope: "inst" }, { type: "cold", text: "往届比这厉害的都栽在这", scope: "inst" }, { type: "cold", text: "真以为能全身而退？", scope: "inst" }, { type: "cold", text: "没意思，我换台了" }, { type: "cold", text: "这操作也就D级水平" }, { type: "cold", text: "这不是冷静，是反应慢" }, { type: "cold", text: "别吹了，看结算", scope: "inst" }, { type: "cold", text: "种菜有什么好看的", scope: "corr" }, { type: "cold", text: "回廊里直播，缺积分缺疯了吧", scope: "corr" }, { type: "cold", text: "天天摆烂，等着被清算吧", scope: "corr" }, { type: "envy", text: "凭什么这种人能上热门" }, { type: "envy", text: "我直播三天没人看，这也行？" }, { type: "envy", text: "长得好就是占便宜" }, { type: "envy", text: "又是这种运气好的" }, { type: "envy", text: "打赏的是托吧" }, { type: "envy", text: "我也想有人给我刷" }, { type: "envy", text: "这点本事也能拿打赏" }, { type: "envy", text: "同样是D级进来的，差距怎么这么大" }, { type: "envy", text: "分到这么好的队友，换我我也行", scope: "inst" }, { type: "envy", text: "酸了，真的酸了" }, { type: "envy", text: "一进来就有大佬带，羡慕不来", scope: "inst" }, { type: "envy", text: "这热度买的吧" }, { type: "envy", text: "凭什么打赏都往这边跑" }, { type: "envy", text: "我通关都没人看" }, { type: "envy", text: "排行榜上那些名字，一半靠运气" }, { type: "envy", text: "有人天生就是被偏爱的" }, { type: "envy", text: "我要是有这配置，比这还稳", scope: "inst" }, { type: "envy", text: "住的地方比我好十倍", scope: "corr" }, { type: "envy", text: "在回廊都能开播赚积分，羡慕哭了", scope: "corr" }, { type: "envy", text: "这菜种得，比我吃的还好", scope: "corr" }, { type: "smear", text: "装什么装" }, { type: "smear", text: "演的吧，这反应太假了" }, { type: "smear", text: "人设立得挺好" }, { type: "smear", text: "会说话而已，真打起来就露馅" }, { type: "smear", text: "这种人最会卖队友" }, { type: "smear", text: "表面客气，背地里肯定算计着" }, { type: "smear", text: "我不信真这么淡定" }, { type: "smear", text: "刚才那个眼神，心虚了吧" }, { type: "smear", text: "故意卖惨要打赏" }, { type: "smear", text: "刚才明明可以救，没救", scope: "inst", when: "hurt" }, { type: "smear", text: "自私，只顾自己", scope: "inst" }, { type: "smear", text: "队友出事了还这么冷静，冷血吧", scope: "inst", when: "hurt" }, { type: "smear", text: "这是在拿别人探路", scope: "inst" }, { type: "smear", text: "满嘴好话，一件实事没干" }, { type: "smear", text: "装新人的吧" }, { type: "smear", text: "就是冲着打赏来的" }, { type: "smear", text: "看着就不是好人" }, { type: "smear", text: "别被骗了，都是算计好的" }, { type: "smear", text: "下了本也要直播，吃相难看", scope: "corr" }, { type: "smear", text: "种田人设，炒给谁看", scope: "corr" }, { type: "rumor", text: "听说积分是借的，真的假的" }, { type: "rumor", text: "肯定是抱大腿进来的" }, { type: "rumor", text: "我朋友说在黑市见过这人" }, { type: "rumor", text: "据说上一个本是被人带飞的" }, { type: "rumor", text: "听说欠了一屁股积分" }, { type: "rumor", text: "有人说是买了攻略才敢进的", scope: "inst" }, { type: "rumor", text: "听说被公会踢出来过" }, { type: "rumor", text: "情报社的人说，这人被抽查过" }, { type: "rumor", text: "有人在西区看到这人跟黑市贩子说话" }, { type: "rumor", text: "据说是走后门才越级的" }, { type: "rumor", text: "听说上个本的队友都没出来" }, { type: "rumor", text: "有人说这人其实早就待清算了" }, { type: "rumor", text: "我听说排名是刷的" }, { type: "rumor", text: "传闻进本前偷偷买了防抽查道具" }, { type: "rumor", text: "听说有人专门花钱买这人的录像" }], Sg = [{ type: "praise", text: "{who}刚才那下好帅" }, { type: "praise", text: "{who}挺靠谱的" }, { type: "bless", text: "{who}别出事啊" }, { type: "bless", text: "心疼{who}" }, { type: "bless", text: "{who}还好吗", when: "hurt" }, { type: "discuss", text: "{who}靠谱吗，我看不透" }, { type: "discuss", text: "{who}又不说话了" }, { type: "discuss", text: "{who}刚才那句什么意思" }, { type: "discuss", text: "盯紧{who}" }, { type: "discuss", text: "{who}和主播配合挺默契" }, { type: "discuss", text: "{who}好像知道点什么" }, { type: "cold", text: "{who}也就那样" }, { type: "cold", text: "指望{who}？算了吧" }, { type: "envy", text: "凭什么{who}也有人喜欢" }, { type: "smear", text: "我就说{who}有问题" }, { type: "smear", text: "{who}在演" }, { type: "smear", text: "{who}那个表情不对劲" }, { type: "rumor", text: "听说{who}在排行榜上挂过名" }, { type: "rumor", text: "我听说{who}以前出过事" }, { type: "rumor", text: "{who}跟主播是不是早就认识" }], Cg = {
  names: _g,
  pool: $g,
  templates: Sg
}, is = /* @__PURE__ */ new Set(), nn = [];
let _t = null, Es = [], Hr = null;
function fs() {
  for (const e of Es.slice())
    try {
      e();
    } catch (t) {
      console.warn("[rlzc] RLZC_LIVE 订阅回调出错", t);
    }
}
function Eg() {
  return 1500 + Math.random() * 1500;
}
function Dc() {
  _t = null;
  const e = nn.shift();
  e !== void 0 && (is.delete(e), fs()), nn.length && (_t = setTimeout(Dc, Eg()));
}
function Ui(e, t = !1) {
  if (t && nn.length) {
    for (const n of nn) is.delete(n);
    nn.length = 0, _t && clearTimeout(_t), _t = null;
  }
  if (e.length) {
    for (const n of e)
      is.add(n.id), nn.push(n.id);
    _t ? fs() : Dc();
  }
}
function Mg() {
  _t && clearTimeout(_t), _t = null, nn.length = 0, is.clear();
}
function Tg(e) {
  Hr = e, window.RLZC_LIVE = {
    get: () => Hr.view(is),
    subscribe(t) {
      return typeof t != "function" ? () => {
      } : (Es.push(t), () => {
        Es = Es.filter((n) => n !== t);
      });
    },
    toggle: () => Hr.toggle()
  };
}
function Ig(e, t = 100) {
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
function Ng() {
  const e = document.getElementById("mes_stop");
  return !!e && getComputedStyle(e).display !== "none";
}
const Fc = "rlzc_market", il = { D: 0, C: 1, B: 2, A: 3, S: 4 }, jc = { D: 1e3, C: 5e3, B: 2e4, A: 8e4, S: 3e5 }, ol = 10, Pg = 0.8, Rg = "ending", Lg = "rating", Oc = ["S", "A", "B", "C", "D"];
function Dg(e, t) {
  return il[e] - il[t];
}
function Fg(e) {
  return e <= -2 ? 0.85 : e === -1 ? 0.75 : e === 0 ? 0.6 : e === 1 ? 0.4 : e === 2 ? 0.25 : 0.15;
}
const ws = {
  "le-1": { S: 0.15, A: 0.3, B: 0.3, C: 0.17, D: 0.08 },
  0: { S: 0.08, A: 0.2, B: 0.35, C: 0.25, D: 0.12 },
  1: { S: 0.04, A: 0.12, B: 0.3, C: 0.32, D: 0.22 },
  ge2: { S: 0.02, A: 0.08, B: 0.25, C: 0.35, D: 0.3 }
};
function jg(e) {
  return e <= -1 ? ws["le-1"] : e === 0 ? ws[0] : e === 1 ? ws[1] : ws.ge2;
}
function xr(e) {
  return Math.round(e * 100) / 100;
}
function Og(e, t) {
  const n = 0.93 + t() * 0.14;
  return Math.max(1.01, xr(1 / e * Pg * n));
}
function Bc(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function Hn(e, t, n, s) {
  return { id: e, label: t, p: n, odds: Og(n, s) };
}
function Vc(e, t, n) {
  const s = {
    id: t.id,
    kind: e,
    q: t.q,
    options: [Hn("yes", t.yes, t.p, n), Hn("no", t.no, xr(1 - t.p), n)],
    judge: t.judge
  };
  return t.judgeNo && (s.judgeNo = t.judgeNo), t.by && (s.by = t.by), s;
}
function Bg(e) {
  const { pack: t, rand: n } = e;
  if (t.rest) return [];
  const s = Dg(t.level, e.playerLevel), r = Fg(s), i = [
    { id: Rg, kind: "ending", q: "本局结果", options: [Hn("win", "通关", r, n), Hn("lose", "失败", xr(1 - r), n)] }
  ], o = jg(s);
  if (i.push({ id: Lg, kind: "rating", q: "本局评价", options: Oc.map((l) => Hn(l, l, o[l], n)) }), e.withEvents) for (const l of ch(t)) i.push(Vc("event", l, n));
  return i;
}
const ll = 2, Vg = 5;
function ui(e, t, n) {
  const s = e.map((i, o) => o), r = [];
  for (; r.length < t && s.length; ) r.push(s.splice(Math.floor(n() * s.length), 1)[0]);
  return r.sort((i, o) => i - o).map((i) => e[i]);
}
function Ug(e, t, n) {
  if (!t) return { markets: e.filter((o) => o.kind === "ending" || o.kind === "rating") };
  const s = ll + Math.floor(n() * (Vg - ll + 1)), r = 1 + Math.floor(n() * 2), i = ui(e, s - r, n);
  return { markets: i, plan: { total: s, freak: r, order: e.map((o) => o.id) }, reserve: e.filter((o) => !i.includes(o)) };
}
function Hg(e, t, n) {
  const s = e.markets.filter((c) => c.kind !== "freak"), r = e.reserve ?? [];
  if (!e.plan) return { markets: [...s, ...t ? al(t, n) : []], reserve: r };
  const i = al(ui(t ?? [], e.plan.freak, n), n), o = ui(r, e.plan.freak - i.length, n), l = (c) => e.plan.order.indexOf(c.id);
  return { markets: [...[...s, ...o].sort((c, d) => l(c) - l(d)), ...i], reserve: r.filter((c) => !o.includes(c)) };
}
function Wg(e, t) {
  return e - Math.max(0, t);
}
function Uc(e) {
  const t = jc[e.playerLevel], n = Wg(e.balance, e.lockedTips), s = Math.max(0, Math.min(t - e.already, n)), r = e.stake, i = Number.isFinite(r) && r > 0 && e.balance - r < $t[e.playerLevel];
  let o;
  return !Number.isInteger(r) || r < ol ? o = `最少押${ol}` : e.already + r > t ? o = "超过单注上限" : r > n && (o = "可用余额不足"), { ok: !o, reason: o, cap: t, max: s, belowKill: i };
}
function Gg(e, t) {
  return e.tickets.filter((n) => n.market === t).reduce((n, s) => n + s.stake, 0);
}
function Kg(e, t) {
  return Object.keys(e).map(Number).filter((n) => n >= t).length >= 2;
}
const Hc = ["通关", "成功", "胜利"], Hi = ["死亡", "阵亡"];
function qg(e) {
  return Hi.includes(String(e ?? "").trim());
}
function Yg(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  return Hi.includes(n) ? { kind: "lost", index: t } : Hc.includes(n) ? { kind: "option", option: "win", index: t } : n === "失败" ? { kind: "option", option: "lose", index: t } : { kind: "refund", index: t };
}
function Jg(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  if (Hi.includes(n)) return { kind: "lost", index: t };
  const s = String(e.rating ?? "").trim().toUpperCase();
  return Hc.includes(n) && Oc.includes(s) ? { kind: "option", option: s, index: t } : { kind: "refund", index: t };
}
function Zg(e, t) {
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
  return a && n.endedBy === "tag" && qg(n.result) ? { kind: "lost", index: r } : a && n.endedBy !== "tag" ? { kind: "refund", index: r } : o ? null : i && l > 0 ? { kind: "option", option: "no", index: r } : { kind: "refund", index: r };
}
function Qg(e) {
  const t = {};
  for (const n of e.markets)
    e.outcome.voided ? t[n.id] = { kind: "refund", index: -1 } : n.kind === "ending" ? t[n.id] = Yg(e.outcome) : n.kind === "rating" ? t[n.id] = Jg(e.outcome) : t[n.id] = Zg(n, e);
  return t;
}
function di(e, t) {
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
function Xg(e, t) {
  const n = {}, s = di({ ...e, frozen: void 0 }, t);
  for (const r of e.tickets) n[r.id] = s[r.id] ?? { stamp: "refund", index: -1 };
  return n;
}
function ex(e, t, n, s = []) {
  const r = new Set(Array.isArray(s) ? s : [s]);
  return Object.keys(t).map(Number).filter((i) => i > n && $e(e[i])).sort((i, o) => i - o).map((i) => {
    const o = e[i]?.extra?.rlzc?.sub;
    return o && !o.skipped && o.markets && typeof o.markets == "object" ? { index: i, state: "ok", hits: o.markets } : !o && r.has(i) ? { index: i, state: "pending", hits: {} } : { index: i, state: "miss", hits: {} };
  });
}
function tx(e, t) {
  const n = [];
  if (e.frozen) return n;
  for (const s of e.markets)
    s.kind !== "event" && s.kind !== "freak" || t[s.id] || !s.judge || (n.push({ id: s.id, judge: s.judge }), s.judgeNo && n.push({ id: `${s.id}:no`, judge: s.judgeNo }));
  return n;
}
function Wc(e, t) {
  return e.markets.find((n) => n.id === t);
}
function nx(e, t) {
  return e?.options.find((n) => n.id === t)?.label ?? t;
}
function sx(e, t) {
  const n = Wc(e, t.market);
  return `下注·${e.packName}·${n?.q ?? t.market}·${nx(n, t.option)}`;
}
function rx(e, t, n) {
  const s = [];
  for (const r of e.tickets) {
    s.push({ delta: -r.stake, source: sx(e, r), type: "bet", at: r.at, pos: r.after, seq: r.seq ?? 0 });
    const i = t[r.id];
    if (!i || i.stamp === "lose") continue;
    const o = Wc(e, r.market)?.q ?? r.market, l = (i.index >= 0 ? n(i.index) : void 0) ?? r.at;
    i.stamp === "win" ? s.push({ delta: Bc(r.stake, r.odds), source: `赌票兑付·${e.packName}·${o}`, type: "bet", at: l, pos: i.index }) : s.push({ delta: r.stake, source: `赌票退还·${e.packName}·${o}`, type: "bet", at: l, pos: i.index });
  }
  return s;
}
const ix = '你是回廊黑市的庄家，要为主播即将进入的副本开几个离谱但有趣的盘口。你只知道下面这些公开信息，不知道剧情会怎么走。出2到3道是非题：题目20字以内，称{{user}}为主播，不用性别代词；必须能从之后的正文里直接看出是或否；不要问结局、评价和生死，那些已经有盘了；不要涉及公开信息以外的设定。每题给一个你估计「是」的概率p（0.05到0.95）。只输出JSON：[{"q":"题目","judge":"用来判断是否发生的一句陈述","p":0.3}]', ox = 4e3;
function lx(e) {
  const n = pc(e).split(`
`), s = n.findIndex((i) => /副本简报/.test(i));
  return (s >= 0 ? n.slice(s, s + 6) : n).join(`
`).trim().slice(0, 1e3);
}
function ax(e) {
  const t = e.docs.filter((s) => s.md && s.md.trim()).map((s) => `## ${s.title}
${s.md.trim()}`).join(`

`).slice(0, ox), n = [
    `【副本】${e.name}　等级：${e.level}`,
    `【简报】
${e.briefing || "（无）"}`,
    `【公开资料】
${t || "（无）"}`
  ].join(`

`);
  return { system: ix, user: n };
}
function cx(e) {
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
    const a = l.q.trim(), c = l.judge.trim(), d = typeof l.p == "number" ? l.p : Number(l.p);
    if (!(!a || a.length > 20 || !c || !Number.isFinite(d) || d < 0.05 || d > 0.95) && (o.push({ q: a, judge: c, p: xr(d) }), o.length >= 3))
      break;
  }
  if (!o.length) throw new je("没有合格的题");
  return o;
}
async function ux(e, t, n = 1) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return cx(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
function al(e, t) {
  return e.map((n, s) => Vc("freak", { id: `F${s + 1}`, q: n.q, yes: "会", no: "不会", p: n.p, judge: n.judge }, t));
}
function dx(e) {
  return `{{user}}在黑市押了自己本局失败，押注${e}分。`;
}
function Ax(e) {
  return `{{user}}刚在赌坊输掉${e}分，余额已低于斩杀线。`;
}
function fx(e) {
  return `{{user}}刚在赌坊一局赢了${e}分。`;
}
function px(e) {
  return e.kind === "betLose" ? dx(e.amount) : e.kind === "casinoLoss" ? Ax(e.amount) : fx(e.amount);
}
function Ai(e, t) {
  if (t.kind === "betLose") {
    const n = e.find((s) => s.kind === "betLose");
    if (n && !n.sent) return e.map((s) => s === n ? { ...s, amount: s.amount + t.amount, after: t.after } : s);
  }
  return [...e, t];
}
function hx(e) {
  return e.filter((t) => !t.sent);
}
function mx(e) {
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
const Wr = (e) => Array.from({ length: e }, (t, n) => n + 1), Wi = [
  {
    id: "bell",
    name: "听钟",
    desc: "押钟声单双、大小，或猜几下。",
    bets: [
      { id: "odd", label: "单", mult: 1.6 },
      { id: "even", label: "双", mult: 1.6 },
      { id: "small", label: "小", mult: 1.6 },
      { id: "big", label: "大", mult: 1.6 },
      ...Wr(12).map((e) => ({ id: `n${e}`, label: `${e}下`, mult: 9.6 }))
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
      ...Wr(20).map((e) => ({ id: `d${e}`, label: `${e}号`, mult: 16 }))
    ]
  },
  {
    id: "lot",
    name: "抽签",
    desc: "三支签，一支大吉。",
    bets: Wr(3).map((e) => ({ id: `s${e}`, label: `第${e}支`, mult: 2.4 }))
  },
  {
    id: "card",
    name: "翻牌",
    desc: "和庄家各翻一张，大的赢，平局庄家赢。",
    bets: [{ id: "high", label: "比大小", mult: 1.73 }]
  }
];
function wn(e) {
  return Wi.find((t) => t.id === e);
}
function Pn(e, t) {
  return Math.min(e, 1 + Math.floor(t() * e));
}
function gx(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function xx(e, t, n, s) {
  const r = wn(e), i = r?.bets.find((d) => d.id === t);
  if (!r || !i) return null;
  let o = !1, l = "", a = [];
  switch (r.id) {
    case "bell": {
      const d = Pn(12, s);
      a = [d], i.id === "odd" || i.id === "even" ? (o = d % 2 === 1 == (i.id === "odd"), l = `${d}下，${d % 2 ? "单" : "双"}`) : i.id === "small" || i.id === "big" ? (o = d <= 6 == (i.id === "small"), l = `${d}下，${d <= 6 ? "小" : "大"}`) : (o = i.id === `n${d}`, l = `${d}下`);
      break;
    }
    case "door": {
      const d = Pn(20, s);
      if (a = [d], i.id.startsWith("r")) {
        const p = Number(i.id.slice(1));
        o = d > (p - 1) * 5 && d <= p * 5;
      } else o = i.id === `d${d}`;
      l = `${d}号门`;
      break;
    }
    case "lot": {
      const d = Pn(3, s);
      a = [d], o = i.id === `s${d}`, l = `第${d}支大吉`;
      break;
    }
    case "card": {
      const d = Pn(13, s), p = Pn(13, s);
      a = [d, p], o = d > p, l = `你 ${d}，庄家 ${p}`;
      break;
    }
  }
  const c = o ? gx(n, i.mult) : 0;
  return { win: o, payout: c, net: o ? c - n : -n, result: l, label: `押${i.label}`, faces: a };
}
function vx(e, t) {
  return `赌坊·${wn(e)?.name ?? e}·${t}`;
}
function cl(e) {
  const t = Wi.map((i) => i.id), n = Math.min(t.length - 1, Math.floor(e() * t.length)), s = t.filter((i, o) => o !== n), r = Math.min(s.length - 1, Math.floor(e() * s.length));
  return [t[n], s[r]];
}
function yx(e, t, n) {
  const s = e.tables.length === 2 && e.tables.every((o) => wn(o));
  if (s && e.key === t) return { tables: e.tables, key: t, changed: !1 };
  const r = (o) => s && o.length === 2 && o.every((l) => e.tables.includes(l));
  let i = cl(n);
  for (let o = 0; o < 20 && r(i); o++) i = cl(n);
  return r(i) && (i = Wi.map((o) => o.id).filter((o) => !e.tables.includes(o))), { tables: i, key: t, changed: !0 };
}
const fi = "rlzc", Ms = { optIn: !1, injectToAI: !1, source: "local", freq: 3 }, Gc = {
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
  subApi: structuredClone(Gc),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0, live: !0, statusBar: !0, auditDebug: !0, manualDebug: !0, injectionDebug: !0, formatDebug: !0 },
  live: { ...Ms }
}, A = /* @__PURE__ */ lr({
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
  market: iv(),
  /** 入场提示小卡片（右上角，不挡操作）；同一时间只有一张 */
  entryCard: null
});
function Ye(e) {
  return JSON.parse(JSON.stringify(e));
}
function ps(...e) {
  A.settings.debug && console.log("[rlzc]", ...e);
}
function bx() {
  const e = me().extensionSettings, t = e[fi] ?? {}, n = {
    ...structuredClone(Dn),
    ...t,
    depths: { ...Dn.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? Dn.depths.ledger },
    ball: { ...Dn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => Oa(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    statusBarFix: typeof t.statusBarFix == "boolean" ? t.statusBarFix : !0,
    genericCaps: { ...ss, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(Gc),
      ...t.subApi ?? {},
      presets: Array.isArray(t.subApi?.presets) ? t.subApi.presets.map(zm) : [],
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
    live: kx(t.live)
  };
  e[fi] = n, A.settings = n, A.packs = Ti(n.customPacks);
}
function kx(e) {
  const t = e ?? {}, n = Math.floor(Number(t.freq));
  return {
    optIn: typeof t.optIn == "boolean" ? t.optIn : Ms.optIn,
    injectToAI: typeof t.injectToAI == "boolean" ? t.injectToAI : Ms.injectToAI,
    source: t.source === "ai" ? "ai" : "local",
    freq: Number.isFinite(n) ? Math.max(1, Math.min(10, n)) : Ms.freq
  };
}
function ke() {
  me().extensionSettings[fi] = /* @__PURE__ */ ae(A.settings), me().saveSettingsDebounced(), A.packs = Ti(A.settings.customPacks);
}
function wx(e, t) {
  const n = A.settings.subApi, s = n.presets.find((r) => r.id === n.presetId);
  s && _m(s, e, t) && ke();
}
function zx(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = Oa(t);
  if (n.length) return n;
  const s = t;
  return Ti([]).some((r) => r.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (A.settings.customPacks = [...A.settings.customPacks.filter((r) => r.id !== s.id), s], ke(), []);
}
function _x(e) {
  A.settings.customPacks = A.settings.customPacks.filter((t) => t.id !== e), ke();
}
function nt() {
  const e = gt()[bc];
  return !e || Array.isArray(e) ? {} : e;
}
function zn(e) {
  gt()[bc] = e, Je();
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
  for (const { pos: i, seq: o, ...l } of lv(e))
    t.push({ e: { ...l, mesIndex: i, ts: nl(l.at) }, pos: i < 0 ? Number.MAX_SAFE_INTEGER : i, g: o === void 0 ? 1 : 2, seq: o ?? 0 });
  t.sort((i, o) => i.pos - o.pos || i.g - o.g || i.seq - o.seq);
  const n = t.map((i) => i.e), r = (nt().adjust ?? []).map((i) => ({
    delta: i.amount,
    source: `手动：${i.note}`,
    type: "manual",
    at: i.at,
    mesIndex: -1,
    ts: i.ts ?? nl(i.at)
  }));
  return jm(Fm(n, r));
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
    const o = wc(i[1]);
    if (o !== null) {
      const l = Ze(r.send_date ?? r.gen_finished ?? void 0);
      return zn({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function st(e = q(), t = e.length) {
  const n = nt().fix?.level;
  return n && ["D", "C", "B", "A", "S"].includes(n) ? n : kc(e, t) ?? "D";
}
function $x(e) {
  if (!(nt().init != null || A.ledger.length > 0)) return "";
  const s = St(e), r = fn(s.value, A.ledger), i = st(e), o = $t[i], l = ds(s.value, A.ledger, o), a = Vm(r, l, i, o), c = Ce();
  return c?.status === "active" && c.live ? bg(a, Bi(e, c.id)) : a;
}
function ul(e, t = !0) {
  const n = q(), s = n[e];
  if (!s || s.is_user) return;
  const r = s.mes ?? "", i = Ze(s.send_date ?? s.gen_finished ?? void 0), o = [], l = new RegExp(hh.source, "g");
  let a;
  for (; (a = l.exec(r)) !== null; ) {
    const d = Im(a[1]);
    d && o.push({ delta: d.delta, source: d.source, type: "tag", at: i });
  }
  const c = t ? pr(r) : null;
  if (c && A.pack && !A.pack.rest) {
    const d = {
      结果: c.result ?? "",
      评价: c.rating ?? "",
      ...c.fields
    }, p = st(n, e), h = St(n), x = fn(h.value, A.ledger), _ = !!A.session?.clearance, w = Dm(A.pack.level, p, d, x, _, A.pack.name);
    if (w.warn) {
      s.extra = s.extra ?? {};
      const L = s.extra.rlzc ?? { phase: "", round: 0, injected: [] };
      s.extra.rlzc = Ye({ ...L, settleWarn: w.warn });
    }
    if (w.delta !== 0) {
      const L = { delta: w.delta, source: w.source, type: "settle", at: i };
      w.clearWin && (L.clear = !0), o.push(L);
    }
  }
  if (o.length || s.extra?.rlzc?.ledger?.length) {
    s.extra = s.extra ?? {};
    const d = s.extra.rlzc ?? { phase: "", round: 0, injected: [] }, p = [...o, ...(d.ledger ?? []).filter((h) => h.type === "tip")];
    s.extra.rlzc = Ye({ ...d, ledger: p.length ? p : void 0 }), Je();
  }
  A.ledger = pn(q());
}
function Sx(e, t) {
  const n = nt(), s = Ze(void 0), r = [...n.adjust ?? [], { amount: e, note: t, at: s, ts: Date.now() }];
  zn({ ...n, adjust: r }), A.ledger = pn(q());
}
function Cx(e, t) {
  Sx(e, t);
}
function Ex(e) {
  const t = nt(), n = Ze(void 0);
  zn({ ...t, init: { value: e, source: "手动设置", at: n } }), A.ledger = pn(q());
}
function Mx(e, t) {
  if (!e && !t) return;
  const n = nt(), s = q(), r = Ze(void 0);
  zn({ ...n, fix: { level: e, rank: t, at: r, afterIndex: s.length - 1 } });
}
function Ce() {
  return Wm(gt()[Lt]);
}
function vr() {
  const e = gt(), t = Array.isArray(e[Lt]?.declined) ? e[Lt].declined : [], n = Array.isArray(e[sl]) ? e[sl] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function Tx(e) {
  const t = gt(), n = [...vr().filter((s) => s !== e), e];
  t[Lt] = { ...t[Lt] ?? {}, declined: n }, Je();
}
function un(e) {
  const t = gt(), n = vr(), s = n.length ? { declined: n } : {};
  e ? t[Lt] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[Lt] = s : delete t[Lt], Je();
}
function Gi(e) {
  const t = Ce();
  t && (e(t), un(t), Le());
}
function Kc(e) {
  const t = q();
  return (e === "swipe" || e === "continue") && $e(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Zs(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = zc(t, A.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = Ya(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? eg(e, n, s) : null };
}
function Le() {
  const e = q();
  let t = Ce();
  if (t) {
    const s = JSON.stringify(t);
    if (!Km(e, t))
      iu(t.id), un(null), Se("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const r = Zs(e, t);
      r.progress && (t.status = r.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && un(t);
    }
  }
  const n = Zs(e, t);
  A.session = n.session, A.pack = n.pack, A.progress = n.progress, A.audit = n.audit, A.subLine = Xc(e, n.progress), Av(e, n.session), A.ledger = pn(e), A.tick++, fs(), Dx(n.session);
}
function qc() {
  if (A.session)
    return _c(A.session, A.progress?.rolesFromChat);
}
function Qs() {
  for (const e of Eh) Tt(e, "", 0, !1);
}
let Wn = -1;
function Ix(e) {
  const t = Kc(e), n = Ce(), { pack: s, progress: r, audit: i } = Zs(t, n), o = n ? _c(n, r?.rolesFromChat) : void 0, l = $n() && !!r, a = l ? mr(t, r.entryIndex) : null, c = s ? Nh(s, r, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: r?.panel?.limit,
    audit: i ?? void 0,
    subNext: l ? cm(t, r.entryIndex) : void 0,
    stateText: a ? fc(s, a.state) : void 0
  }) : rs;
  Qs();
  const d = A.settings.depths;
  c.token && Tt(Ja, c.token, d.token, !0), c.progress && Tt(Za, c.progress, d.progress, !1), c.turn && Tt(Qa, c.turn, d.turn, !1), c.state && Tt(Xa, c.state, d.progress, !1);
  const p = nt();
  let h = $x(t);
  if (p.fix) {
    const w = Bm(p.fix);
    w && (h = h ? `${h}
${w}` : w);
  }
  const x = Ve();
  if (x.hints.length) {
    const w = x.hints.map(px).join("");
    h = h ? `${h}
${w}` : w, x.hints.some((L) => !L.sent) && (x.hints = x.hints.map((L) => ({ ...L, sent: !0 })), Ct(x));
  }
  if (h && Tt(ec, h, d.ledger, !1), A.settings.live.injectToAI) {
    const w = xm(to(/* @__PURE__ */ new Set(), t));
    w && Tt(tc, w, d.live, !1);
  }
  const _ = Oh(t) ? jh : "";
  _ && Tt(nc, _, d.format, !1), A.lastInjection = _ ? { ...c, format: _ } : c, Wn = t.length, ps("注入", e, c);
}
const pi = /* @__PURE__ */ new Set();
async function Nx() {
  const e = q(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = bh(n.mes);
  if (!s) return;
  const r = Ce();
  if (!r || r.status !== "active" || r.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const i = `${Ut()}:${t}:${n.mes}`;
  if (pi.has(i)) return;
  pi.add(i);
  const { pack: o, progress: l } = Zs(e, r);
  if (!o || !l || l.ended) return;
  const a = kh(o, l.phase, l.round, s);
  a && await Ht(`是否跳到${s}？（${a.label}）`) && (r.manual.push({ kind: "skip", atIndex: t, targetPhase: a.phase, targetRound: a.round }), un(r));
}
async function Px(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Qs();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await Nx(), await qx(s), Ix(s);
  } catch (r) {
    console.error("[rlzc] 拦截器出错", r), Qs();
  }
}
const os = /* @__PURE__ */ new Set();
function Ki() {
  const e = Ce();
  if (!e || e.status !== "ended") return 0;
  const t = A.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
let Rx = 0, _n = null;
function Yc(e) {
  const { index: t, info: n, pack: s } = e, r = Ut(), i = `${r}:${t}:${n.name}`;
  if (os.has(i) || Ce()?.status === "active") return;
  os.add(i);
  const l = Tc(s ?? {}, A.settings.live.optIn);
  _n = e, A.entryCard = {
    id: ++Rx,
    key: i,
    chatId: r,
    index: t,
    name: s?.name ?? n.name,
    level: s ? s.rest ? "—" : s.level : Mi(n),
    unknown: !s,
    liveShow: l.show,
    live: l.checked
  };
}
function yr() {
  const e = A.entryCard;
  e && (os.delete(e.key), A.entryCard = null, _n = null);
}
function Lx(e) {
  A.entryCard && (A.entryCard.live = e);
}
function ls() {
  A.entryCard = null, _n = null;
}
function dl() {
  const e = A.entryCard, t = _n;
  ls(), !(!e || !t || Ut() !== e.chatId) && Tx(Fi(t.index, t.info.name));
}
function Al() {
  const e = A.entryCard, t = _n;
  if (ls(), !e || !t) return;
  if (Ut() !== e.chatId) {
    os.delete(e.key);
    return;
  }
  const { index: n, info: s } = t;
  e.liveShow && Jc(e.live);
  const r = As(q(), n, A.packs);
  if (!r || r.info.name !== s.name) {
    Se("warning", "入场消息已变化，未启用。");
    return;
  }
  if (Ce()?.status === "active") return;
  const i = { ...s };
  t.pack || (i.rounds = Fa(s.limit, Mi(s), A.settings.genericCaps).rounds), Qc(t.pack ?? Ba(i, A.settings.genericCaps), n, i, e.liveShow && e.live);
}
function Jc(e) {
  A.settings.live.optIn !== e && (A.settings.live.optIn = e, ke());
}
function qi(e = q()) {
  for (let t = Ki(); t < e.length; t++) if ($e(e[t])) return t;
  return -1;
}
function Yi() {
  const e = q(), t = qi(e);
  return t < 0 ? "" : `${t}${e[t].swipe_id ?? ""}${e[t].mes ?? ""}`;
}
let Ji = "";
function Zi() {
  Ji = Yi();
  const e = Ym(q(), Ce(), vr(), A.packs, Ki());
  e && Yc(e);
}
function Zc() {
  const e = A.entryCard;
  e && As(q(), e.index, A.packs)?.info.name !== _n?.info.name && yr();
}
function Qi() {
  Ce()?.status !== "active" && (Zc(), Zi());
}
const Ts = Ig(() => {
  !Ng() && Yi() !== Ji && Qi();
});
function Dx(e) {
  e?.status === "active" ? Ts.stop() : Ts.running || (Ji = Yi(), Ts.start());
}
function Fx(e) {
  Le();
  const t = qi();
  A.entryCard && (e === t || e === A.entryCard.index) && yr(), e === t && Zi();
}
function Qc(e, t, n, s = !1) {
  const r = q(), i = r[t], o = Ce();
  o && av(o);
  const l = Hm(e, t, n), a = xt();
  if (a.corridor.on && (a.corridor.on = !1, as(a, a.corridor.show, cn.enterOff)), s && !e.disableLive && (l.live = !0, as(a, l.id, cn.instanceOn)), Sn(a), !e.rest) {
    const d = St(r);
    ds(d.value, A.ledger, $t[st(r)]) && (l.clearance = !0);
  }
  ls(), i.extra = i.extra ?? {};
  const c = i.extra.rlzc?.format;
  i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: l.id, ...c ? { format: c } : {} }, un(l), cv(l, e, t), Le(), A.progress && (i.extra.rlzc.injected = Ye(A.progress.perMessage[t]?.events ?? [])), Je(), Se("success", `已进入副本《${e.name}》。`);
}
async function jx(e) {
  const t = A.packs.find((l) => l.id === e);
  if (!t) return;
  const n = q();
  let s = n.length - 1;
  for (; s >= 0 && !$e(n[s]); ) s--;
  if (s < 0) {
    Se("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  if (Ce()?.status === "active" && !await Ht("当前已有进行中的副本，确定要替换吗？")) return;
  const i = Tc(t, A.settings.live.optIn), o = await Gh(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`, i.show ? { label: "开启直播", checked: i.checked } : null);
  o.ok && (i.show && Jc(o.checked), Qc(t, s, Ua(n[s].mes) ?? { name: t.name }, i.show && o.checked));
}
function br(e) {
  Gi((t) => t.manual.push(e));
}
function kr() {
  return q().length - 1;
}
async function fl() {
  const e = A.progress;
  if (!(!e || e.ended || !A.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Se("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ht(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (br({ kind: "skip", atIndex: kr(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Se("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function pl() {
  if (!(!A.session || A.progress?.ended) && await Ht("确定要手动结束当前副本吗？")) {
    if (A.session.live) {
      const e = xt();
      as(e, A.session.id, cn.instanceOff), Sn(e);
    }
    br({ kind: "end", atIndex: kr() });
  }
}
function Ox(e) {
  br({ kind: "setPhase", atIndex: kr(), phase: e });
}
function Bx(e) {
  br({ kind: "setRound", atIndex: kr(), round: e });
}
function Vx(e) {
  Gi((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function Ux(e) {
  Gi((t) => t.manual.splice(e, 1));
}
async function hl() {
  A.session && await Ht("确定要删除当前副本会话吗？（不会改动聊天记录）") && (iu(A.session.id), un(null), Le());
}
function $n() {
  return A.settings.subApi.source !== "off";
}
function Xi() {
  const e = A.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function Hx(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function Xc(e, t) {
  if (!$n() || !t || t.ended) return "";
  if (A.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const r = mr(e, t.entryIndex);
  return r && t.perMessage[r.index] ? `副本记录：已更新（第${t.perMessage[r.index].round}轮）` : "副本记录：尚未整理";
}
let Gn = null;
const eo = /* @__PURE__ */ new Set();
function dn(e) {
  return om(Ut(), e, q()[e]);
}
function ml(e) {
  A.subBusy = e, A.subLine = Xc(q(), A.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && A.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function eu(e, t, n) {
  if (dn(e) !== t) return;
  const s = q()[e];
  s?.extra?.rlzc && (s.extra.rlzc = Ye({ ...s.extra.rlzc, sub: n }), Je(), Le());
}
function Wx(e, t) {
  const n = q(), s = A.progress, r = A.pack, i = n[e], o = s?.perMessage[e];
  if (!r || !s || !o || !i) return null;
  const l = qc(), a = (M) => ({ ...M, text: Gs(M.text, r, l), if: M.if ? Gs(M.if, r, l) : void 0 }), c = sm(r, i.extra?.rlzc?.injected ?? []).map(a), d = (s.next?.events ?? []).filter((M) => M.if).map(a);
  if (!lm({
    enabled: $n(),
    active: !s.ended && A.session?.status === "active",
    type: t,
    saveMode: A.settings.subApi.saveMode,
    hasEvents: c.length > 0,
    hasNextConditional: d.length > 0
  })) return null;
  const h = dn(e);
  if (eo.has(h)) return null;
  const x = r.phases.find((M) => M.id === o.phase), _ = mr(n.slice(0, e), s.entryIndex), w = A.session ? Ve().books[A.session.id] : void 0, L = nm({
    pack: r,
    phaseName: x?.name ?? o.phase,
    round: o.round,
    prevState: _?.state ?? null,
    events: c,
    nextConditional: d,
    text: String(i.mes ?? ""),
    markets: w ? tx(w, A.market.results) : []
  }), U = me().substituteParams, D = U ? { system: U(L.system), user: U(L.user) } : L, C = Gx(e, h, o.round, D);
  return Gn = { key: h, index: e, promise: C }, C.finally(() => {
    Gn?.key === h && (Gn = null);
  }), C;
}
async function Gx(e, t, n, s) {
  ml(!0);
  try {
    let r = 2;
    for (; ; ) {
      const i = Xi();
      if (!i) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await am((a) => Di(i, a), s, r);
        eu(e, t, { ...l, ms: Date.now() - o, via: Hx(i), at: (/* @__PURE__ */ new Date()).toISOString() }), eo.add(t);
        return;
      } catch (l) {
        if (dn(e) !== t) return;
        const a = hr(l), c = ci(l), d = c === a ? String(l?.message ?? l).slice(0, 200) : "";
        if (ps("副本事件检测失败", c, l), !A.settings.subApi.wait) {
          Se("warning", `第${n}轮事件检测失败：${c}，已沿用上一轮状态。`), Gr(e, t, c);
          return;
        }
        if (await Kx(n, c, d) === "skip") {
          Gr(e, t, c);
          return;
        }
        r = 0;
      }
    }
  } catch (r) {
    Se("error", String(r?.message ?? r)), Gr(e, t, "其他");
  } finally {
    ml(!1);
  }
}
function Gr(e, t, n) {
  eo.add(t), eu(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function Kx(e, t, n) {
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
  const d = document.createElement("label");
  d.textContent = "换成：";
  const p = document.createElement("select");
  p.className = "text_pole";
  const h = [{ value: "", text: "请选择…" }];
  for (const w of r.presets) r.source === "preset" && w.id === r.presetId || h.push({ value: `preset:${w.id}`, text: `自设API：${w.name}` });
  r.source !== "main" && h.push({ value: "main", text: "跟随主API" });
  for (const w of h) {
    const L = document.createElement("option");
    L.value = w.value, L.textContent = w.text, p.append(L);
  }
  d.append(p), c.append(d), i.append(o, l, a, c);
  let x;
  p.addEventListener("change", () => {
    const w = p.value;
    w && (w === "main" ? r.source = "main" : (r.source = "preset", r.presetId = w.slice(7)), ke(), x.complete(s.POPUP_RESULT.CUSTOM1));
  }), x = new s.Popup(i, s.POPUP_TYPE.TEXT, "", {
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
  const _ = await x.show();
  return _ === s.POPUP_RESULT.AFFIRMATIVE || _ === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function qx(e) {
  const t = Gn;
  if (!(!t || !A.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= Kc(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function Yx(e, t) {
  const n = q(), s = n[e];
  if (!$e(s)) return;
  Jx(e, t);
  const r = Ce();
  if (t !== "first_message" && yr(), !r || r.status === "ended") {
    if (As(n, e, A.packs)) {
      const c = qm(n, A.packs, Ki(), e, vr());
      c && Yc(c);
    }
    if (t === "first_message") return;
    Le(), ul(e, !1), xl(e), qr(e, t), gl(), bl();
    return;
  }
  if (t === "first_message") return;
  let i = null;
  $n() && (Kn = e);
  const o = Wa(s.mes);
  o && (r.roles = { ...r.roles ?? {}, ...o }), un(r), Le();
  const l = A.progress?.perMessage[e];
  if (l && A.pack) {
    const c = A.pack.phases.find((w) => w.id === l.phase), d = {
      phase: c?.name ?? l.phase,
      round: l.round,
      injected: Wn === e ? A.lastInjection.injected : l.events
    }, p = A.pack.time;
    p.type === "clock" && c?.clock && !c.night && !c.frozen && (d.clock = Ka(p.dayStart, p.minutesPerRound, l.round));
    const h = Wn === e ? A.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    h && (d.limit = h);
    const x = s.extra?.rlzc?.entry;
    x && (d.entry = x), s.extra?.rlzc?.format && (d.format = s.extra.rlzc.format), Wn === e && A.lastInjection.skipped?.length && (d.skippedEvents = A.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (d.sub = s.extra.rlzc.sub), t === "continue" && s.extra?.rlzc?.live && (d.live = s.extra.rlzc.live);
    const _ = (s.extra?.rlzc?.ledger ?? []).filter((w) => w.type === "tip");
    t === "continue" && _.length && (d.ledger = _), s.extra = s.extra ?? {}, s.extra.rlzc = Ye(d), Je(), Le(), i = Wx(e, t);
  }
  Kn >= 0 && (Kn = -1, i || Le());
  const a = pr(s.mes);
  if (a && Se("info", `副本结算：${a.result ?? "—"}${a.rating ? `，评价 ${a.rating}` : ""}`), ul(e), xl(e), i) {
    const c = dn(e);
    i.then(() => {
      dn(e) === c && qr(e, t);
    });
  } else qr(e, t);
  gl(), bl();
}
function Jx(e, t) {
  if (t === "first_message" || t === "quiet" || t === "impersonate") return;
  const n = q(), s = n[e];
  if (!$e(s) || ic(n, e)) return;
  const r = Pi(s.mes);
  let i;
  if (r.kind !== "ok") {
    i = { kind: r.kind, detail: r.detail };
    const a = A.settings.statusBarFix ? Fh(s.mes) : null;
    a && (s.mes = a.text, Array.isArray(s.swipes) && s.swipe_id !== void 0 && s.swipe_id < s.swipes.length && (s.swipes[s.swipe_id] = a.text), i.fixed = !0, i.from = a.from, Hh(), Wh(e), Is(e), Se("info", "已修正本轮状态栏标签"));
  }
  const o = s.extra?.rlzc;
  if (!i && (t === "continue" || !o?.format)) return;
  s.extra = s.extra ?? {};
  const l = o ?? { phase: "", round: 0, injected: [] };
  s.extra.rlzc = Ye({ ...l, format: i }), Je();
}
function gl() {
  const e = nt();
  e.fix && zn({ ...e, fix: void 0 });
}
function xl(e) {
  const t = q(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const r = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!r) return;
  const i = wc(r[1]);
  if (i === null) return;
  const o = St(t), l = (c) => c.mesIndex === e && (c.type === "tip" || c.type === "bet" && /^赌票/.test(c.source)), a = fn(o.value, pn(t).filter((c) => !l(c)));
  i !== a && (ps(`积分核对不符（楼层${e}）：状态栏 ${i}，账本 ${a}`), n.extra?.rlzc && (n.extra.rlzc = Ye({ ...n.extra.rlzc, ledgerMismatch: { status: i, ledger: a } }), Je()));
}
let zs = null;
function vl() {
  Ts.stop(), zs && clearTimeout(zs), pi.clear(), yr(), os.clear(), Wn = -1, Kn = -1, A.chatId = Ut(), A.debugUnlocked = !1, A.lastInjection = rs, Qs(), Mg(), tv(), A.ledger = pn(q()), Le(), Zi();
  const e = A.chatId;
  zs = setTimeout(() => {
    zs = null, Ut() === e && Qi();
  }, 300), Xs();
}
function Kr(e) {
  Le(), Zc(), e !== void 0 && e === qi() && Qi();
}
function tu() {
  return A.settings.panelDisplay === "statusbar" ? an.filter((e) => e !== "副本") : an;
}
function Is(e, t = !1) {
  cc(e, tu(), !1, t);
}
function Xs(e = !1, t = !1) {
  Qh(tu(), e, t);
}
function Zx(e) {
  A.settings.panelDisplay !== e && (A.settings.panelDisplay = e, ke(), Xs(!0));
}
const Ns = Cg;
function xt() {
  return Ag(gt()[Ec]);
}
function Sn(e) {
  gt()[Ec] = Ye(e), Je();
}
function as(e, t, n) {
  if (!t) return;
  const s = gr(q(), e) + 1, r = { id: s, t: "sys", name: "", text: n, amount: 0, net: 0, show: t };
  e.sys = [...e.sys, r].slice(-100), e.seq = s, Ui([r]);
}
function Qx() {
  return "c" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function Xx(e) {
  const t = A.session, n = A.progress;
  if (!!t && e > t.entryIndex && (!n?.ended || n.endIndex !== void 0 && e <= n.endIndex)) return t.live && A.pack ? { show: t.id, scope: "instance", pack: A.pack } : null;
  const r = xt();
  return r.corridor.on && r.corridor.show ? { show: r.corridor.show, scope: "corridor", pack: null } : null;
}
function qr(e, t) {
  if (t === "continue" || t === "first_message") return;
  const n = q(), s = n[e];
  if (!$e(s) || Wt(s)) return;
  const r = Xx(e);
  if (!r) return;
  const i = xt(), { show: o, scope: l, pack: a } = r, c = A.progress, d = s.extra?.rlzc ?? { phase: "", round: 0, injected: [] }, p = Oi(n, o, e), h = d.sub && !d.sub.skipped ? { hype: d.sub.hype, hurt: d.sub.hurt } : void 0, x = l === "instance" && c?.endIndex === e && c.endedBy === "tag" ? pr(s.mes) : null, _ = !!x && ["死亡", "阵亡"].includes(String(x.result ?? "").trim()), w = c?.roundsLeft, L = /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(s.mes ?? "")), U = new Set((a?.events ?? []).filter((Q) => Q.kind !== "directive").map((Q) => Q.id)), D = Am({
    aiSource: A.settings.live.source === "ai",
    subOn: $n(),
    roundInShow: p.length + 1,
    freq: A.settings.live.freq,
    phaseSwitch: L,
    hurt: Pc(String(s.mes ?? ""), h),
    eventDone: !!d.sub && !d.sub.skipped && (d.sub.events ?? []).some((Q) => Q.status === "done")
  }), C = gg({
    show: o,
    scope: l,
    packLevel: a?.level ?? null,
    playerLevel: Vi(n, e + 1),
    isRest: !!a?.rest,
    prevHeat: p.length ? p[p.length - 1].rec.heat : null,
    roundsInShow: p.length,
    text: String(s.mes ?? ""),
    hasEvents: (d.injected ?? []).some((Q) => U.has(Q)),
    hasPhaseSwitch: L,
    sub: h,
    isEnd: l === "instance" && !!w && w.y > 0 && w.x < w.y * 0.1,
    phaseId: l === "instance" ? c?.perMessage[e]?.phase : void 0,
    pool: Ns.pool,
    templates: Ns.templates,
    packDanmaku: a?.danmaku,
    names: Ns.names,
    whoNames: Nc(Ic(n, e + 1), String(me().name1 ?? "")),
    recentTexts: fg(n.slice(0, e)),
    firstId: gr(n, i) + 1,
    settle: x ? { died: _, tipsBefore: Bi(n.slice(0, e), o) } : void 0,
    awaitAi: D,
    rand: Math.random
  });
  D && (C.ai = { ok: !1, pending: !0 });
  const M = Ze(s.send_date ?? s.gen_finished ?? void 0), te = [...(d.ledger ?? []).filter((Q) => Q.type !== "tip"), ...vg(C, M)];
  s.extra = s.extra ?? {}, s.extra.rlzc = Ye({ ...d, live: C, ledger: te.length ? te : void 0 }), i.seq = Math.max(i.seq, ...C.feed.map((Q) => Q.id)), Sn(i), A.ledger = pn(q()), A.tick++, C.feed.length ? Ui(C.feed, !0) : fs(), D && ev(e, C.scope === "instance" ? a?.name : void 0);
}
function ev(e, t) {
  const n = q(), s = dn(e), r = Xi();
  if (!r) {
    Yr(e, s, [], "副本事件检测没有设置好", 0);
    return;
  }
  const i = [];
  for (let d = e; d >= 0 && i.length < 2; d--) $e(n[d]) && i.unshift(String(n[d].mes ?? ""));
  const o = pm({
    scene: t ?? "回廊",
    texts: i,
    cast: Nc(Ic(n, e + 1), String(me().name1 ?? "")),
    samples: fm(Ns.pool, 10, Math.random)
  }), l = me().substituteParams, a = l ? { system: l(o.system), user: l(o.user) } : o, c = Date.now();
  mm((d) => Di(r, d, { temperature: 0.9 }), a, 1).then((d) => Yr(e, s, d, null, Date.now() - c)).catch((d) => {
    ps("AI 弹幕生成失败", d);
    const p = String(d?.message ?? d).slice(0, 120);
    Yr(e, s, [], `${hr(d)}：${p}`, Date.now() - c);
  });
}
function Yr(e, t, n, s, r) {
  if (dn(e) !== t) return;
  const i = q(), o = i[e], l = Wt(o);
  if (!l?.pending || !o.extra?.rlzc) return;
  const a = xt(), c = Lc(l, s ? null : n, gr(i, a) + 1, Math.random), d = s ? 0 : Math.min(n.length, 13), p = { ...c, ai: s ? { ok: !1, error: s, ms: r } : { ok: !0, count: d, ms: r } };
  o.extra.rlzc = Ye({ ...o.extra.rlzc, live: p }), a.seq = Math.max(a.seq, ...p.feed.map((h) => h.id)), Sn(a), A.tick++, Ui(p.feed, !0);
}
function tv() {
  const e = q();
  let t = !1;
  for (const n of e) {
    const s = Wt(n);
    if (!s?.pending || !n.extra?.rlzc) continue;
    const r = xt(), i = Lc(s, null, gr(e, r) + 1, Math.random);
    n.extra.rlzc = Ye({ ...n.extra.rlzc, live: { ...i, ai: { ok: !1, error: "没有等到结果" } } }), r.seq = Math.max(r.seq, ...i.feed.map((o) => o.id)), Sn(r), t = !0;
  }
  t && Je();
}
function nv() {
  const e = xt();
  return A.session?.status === "active" && A.pack ? ji({ packLevel: A.pack.level, playerLevel: Vi(q()), isRest: !!A.pack.rest, heat: 20, rand: 1 }) : e.corridor.viewers ?? 0;
}
function sv() {
  const e = A.session;
  return e?.status === "active" ? !!e.live : xt().corridor.on;
}
function to(e, t = q()) {
  const n = A.session, s = n?.status === "active";
  return zg(
    t,
    xt(),
    {
      inInstance: s,
      instanceLive: !!(s && n?.live),
      instanceShow: n?.id,
      startViewers: nv(),
      injectToAI: A.settings.live.injectToAI
    },
    e
  );
}
function rv() {
  const e = A.session, t = to(/* @__PURE__ */ new Set()), n = t.viewers > 0 ? ` · ${t.viewers.toLocaleString("en-US")}人在看` : "";
  if (e?.status === "active") {
    const s = A.pack?.disableLive ? "本副本自带直播玩法" : t.on ? `副本内锁定${n}` : "副本内锁定，回廊可开播";
    return { on: t.on, locked: !0, scope: "instance", note: s };
  }
  return { on: t.on, locked: !1, scope: "corridor", note: t.on ? `回廊直播${n}` : "回廊中可随时开播" };
}
function nu() {
  if (A.session?.status === "active") return !1;
  const e = xt();
  if (e.corridor.on)
    e.corridor.on = !1, as(e, e.corridor.show, cn.corridorOff);
  else {
    const t = Qx();
    e.corridor = {
      on: !0,
      show: t,
      viewers: ji({ packLevel: null, playerLevel: Vi(q()), isRest: !1, heat: 20, rand: 0.9 + Math.random() * 0.2 })
    }, as(e, t, cn.corridorOn);
  }
  return Sn(e), A.tick++, fs(), !0;
}
function iv() {
  return { book: null, results: {}, tickets: [], pending: 0, tables: [], casinoOpen: !0 };
}
function Ve() {
  return mx(gt()[Fc]);
}
function Ct(e) {
  gt()[Fc] = Ye(e), Je();
}
let Kn = -1;
function ov() {
  return [Kn, Gn?.index ?? -1].filter((e) => e >= 0);
}
function no(e = q()) {
  return fn(St(e).value, A.ledger);
}
function su(e) {
  if (nt().init) return;
  const t = St(e), n = nt();
  n.init || zn({ ...n, init: { value: t.value, source: t.source, at: Ze(void 0) } });
}
function ru() {
  const e = Ce();
  return e?.status === "active" && e.live ? Bi(q(), e.id) : 0;
}
function wr(e, t, n) {
  if (t.frozen) return { results: {}, tickets: di(t, {}), rounds: [] };
  let s = { voided: !0, ended: !1 }, r = [], i = {};
  if (n && n.id === t.session) {
    const l = zc(n, A.packs), a = l ? Ya(e, n, l) : null;
    a && (s = {
      ended: a.ended,
      endedBy: a.endedBy,
      endIndex: a.endIndex,
      result: a.settlement?.result,
      rating: a.settlement?.rating
    }, r = ex(e, a.perMessage, a.entryIndex, ov()), i = a.phaseEnds);
  }
  const o = Qg({ markets: t.markets, rounds: r, outcome: s, phaseEnds: i });
  return { results: o, tickets: di(t, o), rounds: r };
}
function lv(e) {
  const t = Ve(), n = Ce(), s = (i) => e[i] ? Ze(e[i].send_date ?? e[i].gen_finished ?? void 0) : void 0, r = [];
  for (const i of Object.values(t.books)) r.push(...rx(i, wr(e, i, n).tickets, s));
  for (const i of t.casino.plays)
    r.push({ delta: i.net, source: vx(i.table, i.label), type: "bet", at: i.at, pos: i.after, seq: i.seq ?? 0 });
  return r;
}
function av(e) {
  const t = Ve(), n = t.books[e.id];
  if (!n || n.frozen) return;
  const s = q(), r = Xg(n, wr(s, n, e).results);
  for (const i of n.tickets) r[i.id].index < 0 && (r[i.id].index = Math.max(s.length, i.after + 1));
  n.frozen = r, Ct(t);
}
function iu(e) {
  const t = Ve(), n = t.books[e];
  if (!n || n.frozen) return;
  const s = q().length;
  n.frozen = Object.fromEntries(n.tickets.map((r) => [r.id, { stamp: "refund", index: Math.max(s, r.after + 1) }])), Ct(t);
}
function cv(e, t, n) {
  if (t.rest) return;
  const s = q(), r = $n(), i = Bg({ pack: t, playerLevel: st(s), withEvents: r, rand: Math.random });
  if (!i.length) return;
  const o = Ug(i, r, Math.random), l = Ve(), a = { session: e.id, packId: t.id, packName: t.name, openedAt: Ze(void 0), markets: o.markets, tickets: [] };
  o.plan && (a.plan = o.plan, a.reserve = o.reserve), r && (a.freak = { status: "pending" }), l.books[e.id] = a, Ct(l), r && uv(e.id, t, n);
}
function uv(e, t, n) {
  const s = (c, d) => {
    const p = Ve(), h = p.books[e];
    h && (h.closedAt || h.frozen ? d ? h.freak = { ...c, status: "late" } : h.freak = c : (Object.assign(h, Hg(h, d ?? null, Math.random)), h.freak = c), Ct(p), Le());
  }, r = Xi();
  if (!r) {
    s({ status: "failed", error: "副本事件检测没有设置好" });
    return;
  }
  const i = ax({
    name: t.name,
    level: t.level,
    briefing: lx(String(q()[n]?.mes ?? "")),
    docs: t.docs
  }), o = me().substituteParams, l = o ? { system: o(i.system), user: o(i.user) } : i, a = Date.now();
  ux((c) => Di(r, c), l, 1).then((c) => s({ status: "ok", count: c.length, ms: Date.now() - a }, c)).catch((c) => {
    ps("庄家怪盘出题失败", c);
    const d = String(c?.message ?? c).slice(0, 120);
    s({ status: "failed", error: `${hr(c)}：${d}`, ms: Date.now() - a });
  });
}
const _s = /* @__PURE__ */ new Map();
let yl = null;
function dv(e) {
  const t = Ut(), n = yl !== t;
  n && _s.clear(), yl = t;
  const s = { win: 0, lose: 0, refund: 0 };
  for (const i of e) {
    const o = i.res?.stamp ?? null, l = _s.has(i.ticket.id), a = _s.get(i.ticket.id);
    _s.set(i.ticket.id, o), !n && l && o && o !== a && s[o]++;
  }
  const r = [s.win ? `兑 ${s.win} 张` : "", s.lose ? `废 ${s.lose} 张` : "", s.refund ? `退 ${s.refund} 张` : ""].filter(Boolean);
  r.length && Se("info", `赌票开奖：${r.join("，")}。`);
}
function Av(e, t) {
  const n = Ve();
  let s = !1;
  const r = t?.status === "active", i = t ? n.books[t.id] : void 0;
  i && !i.closedAt && !i.frozen && A.progress && Kg(A.progress.perMessage, A.progress.entryIndex) && (i.closedAt = Ze(void 0), s = !0);
  const o = r ? n.casino.key : t?.status === "ended" ? t.id : "", l = yx(n.casino, o, Math.random);
  l.changed && (!r || n.casino.tables.length !== 2) && (n.casino.tables = l.tables, n.casino.key = l.key, s = !0), s && Ct(n);
  const a = [];
  let c = {};
  for (const d of Object.values(n.books)) {
    const p = wr(e, d, t);
    i && d.session === i.session && (c = p.results);
    for (const h of d.tickets) a.push({ ticket: h, book: d, market: d.markets.find((x) => x.id === h.market), res: p.tickets[h.id] ?? null });
  }
  a.sort((d, p) => (p.ticket.seq ?? 0) - (d.ticket.seq ?? 0)), dv(a), A.market = {
    book: r && i ? i : null,
    results: c,
    tickets: a,
    pending: a.filter((d) => !d.res).length,
    tables: n.casino.tables,
    casinoOpen: !r || !!A.pack?.casino
  };
}
function ou(e, t) {
  const n = q(), s = A.market.book;
  return Uc({
    playerLevel: st(n),
    stake: t,
    already: s ? Gg(s, e) : 0,
    balance: no(n),
    lockedTips: ru()
  });
}
function fv(e, t, n) {
  const s = Ce();
  if (!s || s.status !== "active") return "没有进行中的副本";
  const r = Ve(), i = r.books[s.id];
  if (!i || i.frozen) return "本局没有开盘";
  if (i.closedAt) return "已封盘";
  const o = i.markets.find((p) => p.id === e), l = o?.options.find((p) => p.id === t);
  if (!o || !l) return "没有这个盘口";
  if (A.market.results[e]) return "已开奖";
  const a = ou(e, n);
  if (!a.ok) return a.reason ?? "不能下注";
  const c = q();
  su(c);
  const d = r.seq + 1;
  return r.seq = d, i.tickets.push({ id: `t${d}`, seq: d, market: e, option: t, stake: n, odds: l.odds, at: Ze(void 0), after: c.length - 1 }), o.kind === "ending" && t === "lose" && (r.hints = Ai(r.hints, { kind: "betLose", amount: n, after: c.length - 1 })), Ct(r), Le(), null;
}
function lu(e) {
  const t = q();
  return Uc({ playerLevel: st(t), stake: e, already: 0, balance: no(t), lockedTips: ru() });
}
function pv(e, t, n) {
  if (!A.market.casinoOpen) return { error: "赌坊只在回廊营业。" };
  const s = Ve();
  if (!s.casino.tables.includes(e)) return { error: "这张桌今晚没开" };
  const r = lu(n);
  if (!r.ok) return { error: r.reason };
  const i = xx(e, t, n, Math.random);
  if (!i) return { error: "没有这种押法" };
  const o = q();
  su(o);
  const l = st(o), a = no(o), c = o.length - 1, d = s.seq + 1;
  return s.seq = d, s.casino.plays = [
    ...s.casino.plays,
    { id: `g${d}`, seq: d, table: e, bet: t, label: i.label, stake: n, win: i.win, payout: i.payout, net: i.net, result: i.result, at: Ze(void 0), after: c }
  ], !i.win && a - n < $t[l] && (s.hints = Ai(s.hints, { kind: "casinoLoss", amount: n, after: c })), i.win && i.net > jc[l] * 5 && (s.hints = Ai(s.hints, { kind: "casinoWin", amount: i.net, after: c })), Ct(s), Le(), { outcome: i };
}
function bl() {
  const e = Ve();
  if (!e.hints.length) return;
  const t = hx(e.hints);
  t.length !== e.hints.length && (e.hints = t, Ct(e));
}
function hv() {
  const e = Ce(), t = e ? Ve().books[e.id] : void 0;
  return t ? wr(q(), t, e).rounds : [];
}
const au = "M16 16c-2.6-3.4-5-5.2-7.6-5.2a5.2 5.2 0 000 10.4c2.6 0 5-1.8 7.6-5.2s5-5.2 7.6-5.2a5.2 5.2 0 010 10.4c-2.6 0-5-1.8-7.6-5.2z", mv = { class: "rlzc-entry-kicker" }, gv = {
  class: "rlzc-entry-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, xv = ["d"], vv = { class: "rlzc-entry-title" }, yv = { class: "rlzc-entry-level" }, bv = { class: "rlzc-entry-name" }, kv = {
  key: 0,
  class: "rlzc-entry-note"
}, wv = { class: "rlzc-entry-foot" }, zv = ["aria-checked"], _v = { key: 1 }, $v = { class: "rlzc-entry-actions" }, Sv = /* @__PURE__ */ Be({
  __name: "EntryCard",
  setup(e) {
    const t = H(() => A.entryCard);
    return (n, s) => (b(), We(Xd, {
      name: "rlzc-entry-fade",
      mode: "out-in"
    }, {
      default: oa(() => [
        t.value ? (b(), k("div", {
          key: t.value.id,
          class: Z(["rlzc-entry-card", { "beside-panel": E(A).panelOpen }]),
          role: "dialog",
          "aria-label": "检测到副本"
        }, [
          u("button", {
            class: "rlzc-entry-close",
            type: "button",
            "aria-label": "关闭",
            title: "这次先不处理",
            onClick: s[0] || (s[0] = //@ts-ignore
            (...r) => E(ls) && E(ls)(...r))
          }, "✕"),
          u("div", mv, [
            (b(), k("svg", gv, [
              u("path", { d: E(au) }, null, 8, xv)
            ])),
            s[4] || (s[4] = u("span", null, "检测到副本", -1))
          ]),
          u("div", vv, [
            u("span", yv, z(t.value.level), 1),
            u("span", bv, z(t.value.name), 1)
          ]),
          t.value.unknown ? (b(), k("div", kv, "未收录，将使用通用副本包")) : F("", !0),
          u("div", wv, [
            t.value.liveShow ? (b(), k("button", {
              key: 0,
              type: "button",
              class: Z(["rlzc-entry-live", { on: t.value.live }]),
              role: "switch",
              "aria-checked": t.value.live,
              onClick: s[1] || (s[1] = (r) => E(Lx)(!t.value.live))
            }, [
              u("span", {
                class: Z(["rlzc-toggle danger", { on: t.value.live }])
              }, [...s[5] || (s[5] = [
                u("span", null, null, -1)
              ])], 2),
              s[6] || (s[6] = u("span", null, "直播", -1))
            ], 10, zv)) : (b(), k("span", _v)),
            u("div", $v, [
              u("button", {
                type: "button",
                class: "rlzc-btn ghost",
                onClick: s[2] || (s[2] = //@ts-ignore
                (...r) => E(dl) && E(dl)(...r))
              }, "不是"),
              u("button", {
                type: "button",
                class: "rlzc-btn rlzc-entry-go",
                onClick: s[3] || (s[3] = //@ts-ignore
                (...r) => E(Al) && E(Al)(...r))
              }, "进入")
            ])
          ])
        ], 2)) : F("", !0)
      ]),
      _: 1
    }));
  }
}), Cv = {
  key: 0,
  class: "rlzc-ball-ring",
  viewBox: "0 0 48 48",
  "aria-hidden": "true"
}, Ev = ["stroke-dasharray"], Mv = {
  class: "rlzc-ball-inf",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, Tv = ["d"], Iv = {
  key: 1,
  class: "rlzc-ball-live",
  title: "直播中"
}, Nv = {
  key: 2,
  class: "rlzc-ball-badge",
  title: "待开奖赌票"
}, Jr = 48, Pv = /* @__PURE__ */ Be({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ xe({ x: 0, y: 0 });
    let n = null;
    function s(h, x) {
      const _ = window.innerWidth - Jr - 4, w = window.innerHeight - Jr - 4;
      return { x: Math.min(Math.max(4, h), _), y: Math.min(Math.max(4, x), w) };
    }
    function r() {
      const h = A.settings.ball;
      t.value = s(h.x ?? window.innerWidth - Jr - 12, h.y ?? Math.round(window.innerHeight * 0.35));
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
    const a = H(() => !!A.session && !!A.progress && !A.progress.ended), c = H(() => a.value && !!A.progress?.warn), d = H(() => {
      const h = A.progress;
      return !a.value || !h || !A.pack?.phases.length || !(h.phase.cap > 0) ? null : Math.min(100, Math.max(0, h.round / h.phase.cap * 100));
    }), p = H(() => (A.tick, A.session, sv()));
    return cr(() => A.settings.ball, r, { deep: !0 }), fa(() => {
      r(), window.addEventListener("resize", r);
    }), $i(() => window.removeEventListener("resize", r)), (h, x) => (b(), k("button", {
      class: Z(["rlzc-ball", { "is-active": a.value, "is-warn": c.value, "has-ring": d.value !== null }]),
      style: ir({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: i,
      onPointermove: o,
      onPointerup: l,
      onPointercancel: l
    }, [
      d.value !== null ? (b(), k("svg", Cv, [
        x[0] || (x[0] = u("circle", {
          class: "rlzc-ball-ring-base",
          cx: "24",
          cy: "24",
          r: "22.5"
        }, null, -1)),
        d.value > 0 ? (b(), k("circle", {
          key: 0,
          class: "rlzc-ball-ring-bar",
          cx: "24",
          cy: "24",
          r: "22.5",
          pathLength: "100",
          "stroke-dasharray": `${d.value} 100`
        }, null, 8, Ev)) : F("", !0)
      ])) : F("", !0),
      (b(), k("svg", Mv, [
        u("path", { d: E(au) }, null, 8, Tv)
      ])),
      p.value ? (b(), k("span", Iv)) : F("", !0),
      E(A).market.pending > 0 ? (b(), k("span", Nv, z(E(A).market.pending), 1)) : F("", !0)
    ], 38));
  }
});
function Rv(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Rn(e) {
  return Rv(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Lv(e) {
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
    const a = /^(#{1,4})\s+(.*)$/.exec(l);
    if (a) {
      r(), i();
      const h = Math.min(a[1].length + 2, 6);
      t.push(`<h${h}>${Rn(a[2])}</h${h}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(l), d = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (c || d) {
      r();
      const h = c ? "ul" : "ol", x = c ? c[1] : d[2];
      n !== h ? (i(), n = h, t.push(h === "ol" ? `<ol start="${d[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Rn(x));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${Rn(l.trim())}`);
      continue;
    }
    const p = /^>\s?(.*)$/.exec(l);
    if (p) {
      r(), i(), t.push(`<blockquote>${Rn(p[1])}</blockquote>`);
      continue;
    }
    i(), s.push(l);
  }
  return r(), i(), t.join("");
}
const Dv = {
  key: 0,
  class: "rlzc-docs"
}, Fv = { class: "rlzc-subtabs" }, jv = ["onClick"], Ov = { class: "rlzc-md" }, Bv = ["innerHTML"], Vv = ["src", "alt"], Uv = {
  key: 2,
  class: "rlzc-note"
}, kl = /* @__PURE__ */ Be({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ xe(0);
    cr(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = H(() => t.pack.docs?.[n.value]), r = H(() => s.value?.md ? Lv(s.value.md) : ""), i = H(() => s.value?.image ? ah(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (b(), k("section", Dv, [
      u("div", Fv, [
        (b(!0), k(J, null, ue(e.pack.docs, (a, c) => (b(), k("button", {
          key: c,
          class: Z({ on: n.value === c }),
          onClick: (d) => n.value = c
        }, z(a.title), 11, jv))), 128))
      ]),
      u("article", Ov, [
        r.value ? (b(), k("div", {
          key: 0,
          innerHTML: r.value
        }, null, 8, Bv)) : F("", !0),
        i.value ? (b(), k("img", {
          key: 1,
          src: i.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, Vv)) : s.value?.image && !i.value ? (b(), k("p", Uv, "图片无法加载：" + z(s.value.image), 1)) : F("", !0)
      ])
    ])) : F("", !0);
  }
}), Hv = {
  key: 0,
  class: "rlzc-ledger-summary"
}, Wv = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, wl = /* @__PURE__ */ Be({
  __name: "LedgerSummary",
  setup(e) {
    const t = H(() => q()), n = H(() => St(t.value)), s = H(() => fn(n.value.value, A.ledger)), r = H(() => (A.tick, st(t.value))), i = H(() => $t[r.value]), o = H(() => ds(n.value.value, A.ledger, i.value)), l = H(() => A.ledger.length > 0 || n.value.source !== "默认值");
    return (a, c) => l.value ? (b(), k("div", Hv, [
      u("span", {
        class: Z(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + z(s.value >= 0 ? "+" : "") + z(s.value), 3),
      o.value ? (b(), k("span", Wv, "待清算")) : F("", !0)
    ])) : F("", !0);
  }
}), Gv = { class: "rlzc-system" }, Kv = { class: "rlzc-card rlzc-hero" }, qv = { class: "rlzc-hero-top" }, Yv = { class: "rlzc-level" }, Jv = {
  key: 0,
  class: "rlzc-chip"
}, Zv = {
  key: 0,
  class: "rlzc-goal"
}, Qv = { class: "rlzc-grid" }, Xv = {
  key: 0,
  class: "rlzc-stat"
}, e0 = {
  key: 1,
  class: "rlzc-stat"
}, t0 = {
  key: 2,
  class: "rlzc-stat"
}, n0 = {
  key: 3,
  class: "rlzc-stat"
}, s0 = {
  key: 0,
  class: "rlzc-subline"
}, r0 = {
  key: 1,
  class: "rlzc-note"
}, i0 = {
  key: 2,
  class: "rlzc-card"
}, o0 = { class: "rlzc-kv" }, l0 = { class: "rlzc-kv" }, a0 = {
  key: 0,
  class: "rlzc-note rlzc-note-warn"
}, c0 = {
  key: 3,
  class: "rlzc-note"
}, u0 = {
  key: 4,
  class: "rlzc-card"
}, d0 = {
  key: 0,
  class: "rlzc-kv"
}, A0 = { class: "rlzc-mono" }, f0 = {
  key: 1,
  class: "rlzc-tasks"
}, p0 = {
  key: 2,
  class: "rlzc-ps"
}, h0 = { class: "rlzc-actions" }, m0 = ["disabled"], g0 = ["disabled"], x0 = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, v0 = {
  key: 2,
  class: "rlzc-card"
}, y0 = { class: "rlzc-row" }, b0 = ["value"], k0 = ["disabled"], w0 = /* @__PURE__ */ Be({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ xe(""), n = H(() => !!A.session && !!A.pack), s = H(() => A.progress), r = H(() => n.value && !!s.value && !s.value.ended), i = H(() => A.packs.find((h) => h.id === t.value) ?? null), o = H(() => !!A.pack?.phases.length), l = H(() => A.settings.panelDisplay !== "statusbar"), a = H(() => {
      const h = s.value;
      return h ? o.value ? `${h.warn ? "⚠️ " : ""}${h.round}/${h.phase.cap}` : `第${h.round}轮` : "";
    }), c = H(() => {
      const h = s.value;
      return h ? h.limit?.text ? h.limit.text : h.panel?.limit || A.session?.briefing?.limit || "—" : "";
    }), d = H(() => {
      const h = s.value;
      return !!h && !h.ended && o.value && h.phase.cap > 0 && h.nextRound < h.phase.cap;
    });
    async function p() {
      t.value && (await jx(t.value), t.value = "");
    }
    return (h, x) => (b(), k("div", Gv, [
      n.value && s.value ? (b(), k(J, { key: 0 }, [
        u("div", Kv, [
          u("div", qv, [
            u("span", Yv, z(E(A).pack?.rest ? "—" : E(A).pack.level), 1),
            u("h3", null, z(E(A).pack.name), 1),
            s.value.ended ? (b(), k("span", Jv, "已结束")) : F("", !0)
          ]),
          E(A).session?.briefing?.goal ? (b(), k("p", Zv, "目标：" + z(E(A).session.briefing.goal), 1)) : F("", !0)
        ]),
        u("div", Qv, [
          o.value ? (b(), k("div", Xv, [
            x[3] || (x[3] = u("span", null, "阶段", -1)),
            u("b", null, z(s.value.phase.name), 1)
          ])) : F("", !0),
          u("div", {
            class: Z(["rlzc-stat", { warn: s.value.warn }])
          }, [
            x[4] || (x[4] = u("span", null, "轮次", -1)),
            u("b", null, z(a.value), 1)
          ], 2),
          s.value.currentClock ? (b(), k("div", e0, [
            x[5] || (x[5] = u("span", null, "钟时", -1)),
            u("b", null, z(s.value.currentClock), 1)
          ])) : F("", !0),
          s.value.roundsLeft ? (b(), k("div", t0, [
            x[6] || (x[6] = u("span", null, "最多剩余轮次", -1)),
            u("b", null, z(s.value.roundsLeft.x) + "/" + z(s.value.roundsLeft.y), 1)
          ])) : F("", !0),
          l.value ? (b(), k("div", n0, [
            x[7] || (x[7] = u("span", null, "剩余时间", -1)),
            u("b", null, z(c.value), 1)
          ])) : F("", !0),
          r.value ? F("", !0) : (b(), We(wl, { key: 4 }))
        ]),
        E(A).subLine ? (b(), k("p", s0, z(E(A).subLine), 1)) : F("", !0),
        s.value.skipGoal ? (b(), k("div", r0, "快进中：目标 " + z(E(A).pack.phases.find((_) => _.id === s.value.skipGoal.phase)?.name) + " 第" + z(s.value.skipGoal.round) + "轮", 1)) : F("", !0),
        s.value.ended && s.value.settlement ? (b(), k("div", i0, [
          u("div", o0, [
            x[8] || (x[8] = u("span", null, "结果", -1)),
            u("b", null, z(s.value.settlement.result ?? "—"), 1)
          ]),
          u("div", l0, [
            x[9] || (x[9] = u("span", null, "评价", -1)),
            u("b", null, z(s.value.settlement.rating ?? "—"), 1)
          ]),
          E(A).session?.clearance && s.value.settlement.result === "失败" ? (b(), k("div", a0, " 清算未通关 ")) : F("", !0)
        ])) : s.value.ended ? (b(), k("div", c0, "副本已手动结束。")) : F("", !0),
        l.value && s.value.panel ? (b(), k("div", u0, [
          s.value.panel.progressBar ? (b(), k("div", d0, [
            x[10] || (x[10] = u("span", null, "进度", -1)),
            u("b", A0, z(s.value.panel.progressBar), 1)
          ])) : F("", !0),
          s.value.panel.tasks.length ? (b(), k("div", f0, [
            x[11] || (x[11] = u("span", null, "任务", -1)),
            u("ul", null, [
              (b(!0), k(J, null, ue(s.value.panel.tasks, (_, w) => (b(), k("li", { key: w }, z(_), 1))), 128))
            ])
          ])) : F("", !0),
          s.value.panel.ps ? (b(), k("div", p0, "ps：" + z(s.value.panel.ps), 1)) : F("", !0)
        ])) : F("", !0),
        u("div", h0, [
          u("button", {
            class: "rlzc-btn",
            disabled: !d.value,
            onClick: x[0] || (x[0] = //@ts-ignore
            (..._) => E(fl) && E(fl)(..._))
          }, "跳过（到本阶段结束）", 8, m0),
          u("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: x[1] || (x[1] = //@ts-ignore
            (..._) => E(pl) && E(pl)(..._))
          }, "手动结束副本", 8, g0)
        ]),
        r.value && E(A).pack.docs?.length ? (b(), We(kl, {
          key: 5,
          pack: E(A).pack
        }, null, 8, ["pack"])) : F("", !0)
      ], 64)) : (b(), k("div", x0, [
        x[12] || (x[12] = u("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        _e(wl)
      ])),
      r.value ? F("", !0) : (b(), k("div", v0, [
        x[14] || (x[14] = u("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        u("div", y0, [
          pt(u("select", {
            "onUpdate:modelValue": x[2] || (x[2] = (_) => t.value = _),
            class: "rlzc-input"
          }, [
            x[13] || (x[13] = u("option", { value: "" }, "选择副本…", -1)),
            (b(!0), k(J, null, ue(E(A).packs, (_) => (b(), k("option", {
              key: _.id,
              value: _.id
            }, z(_.level) + "｜" + z(_.name), 9, b0))), 128))
          ], 512), [
            [Ra, t.value]
          ]),
          u("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: p
          }, "进入", 8, k0)
        ])
      ])),
      !r.value && i.value?.docs?.length ? (b(), We(kl, {
        key: 3,
        pack: i.value
      }, null, 8, ["pack"])) : F("", !0)
    ]));
  }
}), z0 = { class: "rlzc-ledger" }, _0 = { class: "rlzc-card rlzc-ledger-hero-card" }, $0 = { class: "rlzc-ledger-hero-cols" }, S0 = { class: "rlzc-ledger-hero-col" }, C0 = { class: "rlzc-ledger-hero-col-val" }, E0 = { class: "rlzc-ledger-hero-col" }, M0 = { class: "rlzc-ledger-hero-col-val" }, T0 = { class: "rlzc-ledger-hero-col" }, I0 = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, N0 = { class: "rlzc-card" }, P0 = {
  key: 0,
  class: "rlzc-ledger-list"
}, R0 = { class: "rlzc-ledger-item-left" }, L0 = { class: "rlzc-ledger-item-src" }, D0 = { class: "rlzc-ledger-item-time" }, F0 = { class: "rlzc-ledger-item-right" }, j0 = { class: "rlzc-ledger-item-after" }, O0 = {
  key: 1,
  class: "rlzc-hint"
}, B0 = /* @__PURE__ */ Be({
  __name: "LedgerTab",
  setup(e) {
    const t = H(() => q()), n = H(() => St(t.value)), s = H(() => A.ledger), r = H(() => fn(n.value.value, s.value)), i = H(() => {
      const _ = Om(n.value.value, s.value);
      return s.value.map((w, L) => ({ e: w, after: _[L] })).reverse();
    }), o = H(() => (A.tick, st(t.value))), l = H(() => $t[o.value]), a = H(() => ds(n.value.value, s.value, l.value)), c = H(() => Math.max(0, l.value - r.value)), d = H(() => n.value.source === "默认值");
    function p(_) {
      return new Intl.NumberFormat("zh-CN").format(_);
    }
    function h(_) {
      return (_ >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(_);
    }
    function x(_) {
      try {
        const w = new Date(_), L = String(w.getMonth() + 1).padStart(2, "0"), U = String(w.getDate()).padStart(2, "0"), D = String(w.getHours()).padStart(2, "0"), C = String(w.getMinutes()).padStart(2, "0");
        return `${L}-${U} ${D}:${C}`;
      } catch {
        return _;
      }
    }
    return (_, w) => (b(), k("div", z0, [
      u("div", _0, [
        w[3] || (w[3] = u("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        u("b", {
          class: Z(["rlzc-ledger-hero-num", { negative: r.value < 0 }])
        }, z(p(r.value)), 3),
        w[4] || (w[4] = u("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        u("div", $0, [
          u("div", S0, [
            w[0] || (w[0] = u("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            u("span", C0, z(o.value), 1)
          ]),
          u("div", E0, [
            w[1] || (w[1] = u("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            u("span", M0, z(p(l.value)), 1)
          ]),
          u("div", T0, [
            w[2] || (w[2] = u("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            u("span", {
              class: Z(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": a.value }])
            }, z(a.value ? `距线 ${p(c.value)}` : "无"), 3)
          ])
        ]),
        d.value ? (b(), k("p", I0, "初始积分按 1000 计，可在设置页修改")) : F("", !0)
      ]),
      u("div", N0, [
        w[5] || (w[5] = u("h4", null, "流水", -1)),
        s.value.length ? (b(), k("ul", P0, [
          (b(!0), k(J, null, ue(i.value, (L, U) => (b(), k("li", {
            key: `${U}-${L.e.mesIndex}-${L.e.delta}-${L.e.at}`,
            class: "rlzc-ledger-item"
          }, [
            u("div", R0, [
              u("span", L0, z(L.e.source), 1),
              u("span", D0, z(x(L.e.at)), 1)
            ]),
            u("div", F0, [
              u("span", {
                class: Z(["rlzc-ledger-item-delta", L.e.delta >= 0 ? "pos" : "neg"])
              }, z(h(L.e.delta)), 3),
              u("span", j0, "余额 " + z(p(L.after)), 1)
            ])
          ]))), 128))
        ])) : (b(), k("p", O0, "还没有收支记录。"))
      ])
    ]));
  }
}), V0 = { class: "rlzc-market" }, U0 = { class: "rlzc-subtabs rlzc-market-tabs" }, H0 = { class: "rlzc-card rlzc-mk-status" }, W0 = { class: "rlzc-mk-q" }, G0 = { class: "rlzc-mk-tag" }, K0 = { class: "rlzc-mk-opts" }, q0 = ["disabled", "onClick"], Y0 = { class: "rlzc-row rlzc-mk-bet" }, J0 = ["onUpdate:modelValue"], Z0 = ["disabled", "onClick"], Q0 = { class: "rlzc-hint" }, X0 = {
  key: 0,
  class: "rlzc-mk-red"
}, ey = {
  key: 1,
  class: "rlzc-mk-mine"
}, ty = {
  key: 1,
  class: "rlzc-card"
}, ny = {
  key: 0,
  class: "rlzc-tk-list"
}, sy = { class: "rlzc-tk-left" }, ry = { class: "rlzc-tk-title" }, iy = {
  key: 1,
  class: "rlzc-hint"
}, oy = {
  key: 0,
  class: "rlzc-card rlzc-mk-status"
}, ly = { class: "rlzc-cs-tables" }, ay = ["onClick"], cy = {
  key: 0,
  class: "rlzc-card rlzc-cs-play"
}, uy = {
  key: 0,
  class: "rlzc-segsrc rlzc-cs-seg"
}, dy = ["onClick"], Ay = ["onClick"], fy = { class: "rlzc-row rlzc-mk-bet" }, py = ["disabled"], hy = { class: "rlzc-hint" }, my = {
  key: 2,
  class: "rlzc-mk-red"
}, gy = /* @__PURE__ */ Be({
  __name: "MarketTab",
  setup(e) {
    const t = /* @__PURE__ */ xe("book"), n = (j) => new Intl.NumberFormat("en-US").format(j), s = (j) => `×${j.toFixed(2)}`, r = H(() => A.market.pending), i = H(() => (A.tick, st())), o = H(() => A.market.book), l = H(() => !!o.value?.closedAt), a = H(() => {
      const j = o.value;
      return j && j.closedAt ? `《${j.packName}》已封盘` : j ? `《${j.packName}》开盘中 · 第1轮结束封盘${j.freak?.status === "pending" ? " · 庄家出题中" : ""}` : A.session?.status === "active" && A.pack?.rest ? "休整副本不开盘。" : "进副本后开盘。";
    }), c = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" }, d = /* @__PURE__ */ xe({}), p = /* @__PURE__ */ xe({});
    function h(j, K) {
      l.value || A.market.results[j.id] || (d.value = { ...d.value, [j.id]: d.value[j.id] === K ? "" : K });
    }
    function x(j) {
      A.tick;
      const K = p.value[j.id];
      return ou(j.id, typeof K == "number" ? K : 0);
    }
    function _(j) {
      const K = d.value[j.id], G = p.value[j.id];
      if (!K || typeof G != "number") return;
      const ge = fv(j.id, K, G);
      if (ge) {
        Se("warning", ge);
        return;
      }
      p.value = { ...p.value, [j.id]: null }, d.value = { ...d.value, [j.id]: "" };
    }
    function w(j) {
      const K = o.value;
      return K ? A.market.tickets.filter((G) => G.book.session === K.session && G.ticket.market === j.id) : [];
    }
    function L(j) {
      return j.market?.options.find((K) => K.id === j.ticket.option)?.label ?? j.ticket.option;
    }
    function U(j) {
      return `${j.book.packName} · ${j.market?.q ?? j.ticket.market} · ${L(j)}`;
    }
    function D(j) {
      const K = j.ticket, G = j.res?.stamp;
      return G ? G === "win" ? `押 ${n(K.stake)} · ${s(K.odds)} · 兑 ${n(Bc(K.stake, K.odds))}` : G === "lose" ? `押 ${n(K.stake)} · ${s(K.odds)}` : `押 ${n(K.stake)} · 原数退还` : `押 ${n(K.stake)} · ${s(K.odds)} · 待开奖`;
    }
    const C = { win: "兑", lose: "废", refund: "退" }, M = H(() => A.market.tables.map((j) => wn(j)).filter((j) => !!j)), ee = /* @__PURE__ */ xe(""), te = H(() => ee.value ? wn(ee.value) : void 0), Q = /* @__PURE__ */ xe(""), re = /* @__PURE__ */ xe(null), S = /* @__PURE__ */ xe(!1), f = /* @__PURE__ */ xe(""), m = /* @__PURE__ */ xe(null);
    let v = null;
    function N(j) {
      if (ee.value === j) {
        ee.value = "";
        return;
      }
      ee.value = j;
      const K = wn(j);
      Q.value = K && K.bets.length === 1 ? K.bets[0].id : "", m.value = null;
    }
    const ie = H(() => (te.value?.bets ?? []).filter((j) => !/^[nd]\d+$/.test(j.id))), le = H(() => (te.value?.bets ?? []).filter((j) => /^[nd]\d+$/.test(j.id))), Pe = H(() => (A.tick, lu(typeof re.value == "number" ? re.value : 0)));
    function rt() {
      try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      } catch {
        return !1;
      }
    }
    function Qe(j, K) {
      return j === "bell" ? `${K[0]}下` : j === "door" ? `${K[0]}号门` : j === "lot" ? `第${K[0]}支` : `${K[0]} : ${K[1]}`;
    }
    function hn() {
      const j = te.value, K = re.value;
      if (!j || !Q.value || typeof K != "number" || S.value) return;
      const G = pv(j.id, Q.value, K);
      if (G.error || !G.outcome) {
        Se("warning", G.error ?? "不能下注");
        return;
      }
      const ge = { ...G.outcome, stake: K };
      if (m.value = null, rt()) {
        f.value = Qe(j.id, ge.faces), m.value = ge;
        return;
      }
      S.value = !0;
      const hs = j.id === "bell" ? 12 : j.id === "door" ? 20 : j.id === "lot" ? 3 : 13, Et = () => 1 + Math.floor(Math.random() * hs);
      v = setInterval(() => f.value = Qe(j.id, [Et(), Et()]), 80), setTimeout(() => {
        v && clearInterval(v), v = null, f.value = Qe(j.id, ge.faces), S.value = !1, m.value = ge;
      }, 1200);
    }
    const Gt = H(() => {
      const j = m.value;
      return j ? `结果：${j.result}。${j.win ? `赢 ${n(j.payout)}` : `输 ${n(j.stake)}`}` : "";
    });
    return $i(() => {
      v && clearInterval(v);
    }), (j, K) => (b(), k("div", V0, [
      u("nav", U0, [
        u("button", {
          class: Z({ on: t.value === "book" }),
          onClick: K[0] || (K[0] = (G) => t.value = "book")
        }, "盘口", 2),
        u("button", {
          class: Z({ on: t.value === "tickets" }),
          onClick: K[1] || (K[1] = (G) => t.value = "tickets")
        }, z(r.value ? `票夹 · ${r.value}` : "票夹"), 3),
        u("button", {
          class: Z({ on: t.value === "casino" }),
          onClick: K[2] || (K[2] = (G) => t.value = "casino")
        }, "赌坊", 2)
      ]),
      t.value === "book" ? (b(), k(J, { key: 0 }, [
        u("div", H0, z(a.value), 1),
        (b(!0), k(J, null, ue(o.value?.markets ?? [], (G) => (b(), k("div", {
          key: G.id,
          class: "rlzc-card rlzc-mk-card"
        }, [
          u("div", W0, [
            u("span", G0, z(c[G.kind]), 1),
            Ee(z(G.q), 1)
          ]),
          u("div", K0, [
            (b(!0), k(J, null, ue(G.options, (ge) => (b(), k("button", {
              key: ge.id,
              class: Z(["rlzc-mk-opt", { on: d.value[G.id] === ge.id }]),
              disabled: l.value || !!E(A).market.results[G.id],
              onClick: (hs) => h(G, ge.id)
            }, [
              u("span", null, z(ge.label), 1),
              u("b", null, z(s(ge.odds)), 1)
            ], 10, q0))), 128))
          ]),
          d.value[G.id] && !l.value ? (b(), k(J, { key: 0 }, [
            u("div", Y0, [
              pt(u("input", {
                "onUpdate:modelValue": (ge) => p.value[G.id] = ge,
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 8, J0), [
                [
                  Nt,
                  p.value[G.id],
                  void 0,
                  { number: !0 }
                ]
              ]),
              u("button", {
                class: "rlzc-btn",
                disabled: typeof p.value[G.id] != "number",
                onClick: (ge) => _(G)
              }, "下注", 8, Z0)
            ]),
            u("p", Q0, "单注上限 " + z(n(x(G).cap)) + "（" + z(i.value) + "级）", 1),
            x(G).belowKill ? (b(), k("p", X0, "押完余额低于斩杀线")) : F("", !0)
          ], 64)) : F("", !0),
          w(G).length ? (b(), k("ul", ey, [
            (b(!0), k(J, null, ue(w(G), (ge) => (b(), k("li", {
              key: ge.ticket.id
            }, z(L(ge)) + " · " + z(D(ge)), 1))), 128))
          ])) : F("", !0)
        ]))), 128))
      ], 64)) : t.value === "tickets" ? (b(), k("div", ty, [
        E(A).market.tickets.length ? (b(), k("ul", ny, [
          (b(!0), k(J, null, ue(E(A).market.tickets, (G) => (b(), k("li", {
            key: G.ticket.id,
            class: "rlzc-tk"
          }, [
            u("div", sy, [
              u("span", ry, z(U(G)), 1),
              u("small", null, z(D(G)), 1)
            ]),
            u("span", {
              class: Z(["rlzc-stamp", G.res ? G.res.stamp : "pending"])
            }, z(G.res ? C[G.res.stamp] : "待"), 3)
          ]))), 128))
        ])) : (b(), k("p", iy, "还没有赌票。"))
      ])) : (b(), k(J, { key: 2 }, [
        E(A).market.casinoOpen ? (b(), k(J, { key: 1 }, [
          K[4] || (K[4] = u("p", { class: "rlzc-hint" }, "今晚开两张桌，回到回廊换一批。", -1)),
          u("div", ly, [
            (b(!0), k(J, null, ue(M.value, (G) => (b(), k("button", {
              key: G.id,
              class: Z(["rlzc-card rlzc-cs-table", { on: ee.value === G.id }]),
              onClick: (ge) => N(G.id)
            }, [
              u("b", null, z(G.name), 1),
              u("small", null, z(G.desc), 1)
            ], 10, ay))), 128))
          ]),
          te.value ? (b(), k("div", cy, [
            u("h4", null, z(te.value.name), 1),
            ie.value.length ? (b(), k("div", uy, [
              (b(!0), k(J, null, ue(ie.value, (G) => (b(), k("button", {
                key: G.id,
                class: Z({ on: Q.value === G.id }),
                onClick: (ge) => Q.value = G.id
              }, z(G.label), 11, dy))), 128))
            ])) : F("", !0),
            le.value.length ? (b(), k("div", {
              key: 1,
              class: Z(["rlzc-cs-grid", te.value.id])
            }, [
              (b(!0), k(J, null, ue(le.value, (G) => (b(), k("button", {
                key: G.id,
                class: Z({ on: Q.value === G.id }),
                onClick: (ge) => Q.value = G.id
              }, z(G.label), 11, Ay))), 128))
            ], 2)) : F("", !0),
            u("div", fy, [
              pt(u("input", {
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
              u("button", {
                class: "rlzc-btn",
                disabled: !Q.value || typeof re.value != "number" || S.value,
                onClick: hn
              }, "开", 8, py)
            ]),
            u("p", hy, "单注上限 " + z(n(Pe.value.cap)) + "（" + z(i.value) + "级）", 1),
            Pe.value.belowKill ? (b(), k("p", my, "押完余额低于斩杀线")) : F("", !0),
            S.value || m.value ? (b(), k("div", {
              key: 3,
              class: Z(["rlzc-cs-face", { rolling: S.value }])
            }, z(f.value || ""), 3)) : F("", !0),
            m.value ? (b(), k("p", {
              key: 4,
              class: Z(["rlzc-cs-result", m.value.win ? "win" : "lose"])
            }, z(Gt.value), 3)) : F("", !0)
          ])) : F("", !0)
        ], 64)) : (b(), k("div", oy, "赌坊只在回廊营业。"))
      ], 64))
    ]));
  }
}), xy = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, vy = ["aria-expanded"], yy = ["data-kind"], by = {
  key: 0,
  class: "rlzc-collapse-body"
}, ky = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, wy = {
  key: 0,
  class: "rlzc-preset-area"
}, zy = { class: "rlzc-preset-row" }, _y = ["value"], $y = {
  key: 0,
  value: ""
}, Sy = ["value"], Cy = ["disabled"], Ey = ["disabled"], My = { class: "rlzc-stacked-field" }, Ty = ["value"], Iy = { class: "rlzc-stacked-field" }, Ny = { class: "rlzc-key-wrap" }, Py = ["type", "value"], Ry = ["aria-label"], Ly = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Dy = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Fy = { class: "rlzc-stacked-field" }, jy = {
  key: 0,
  value: "",
  selected: "",
  disabled: ""
}, Oy = ["value"], By = ["value", "selected"], Vy = ["value"], Uy = { class: "rlzc-check-btns" }, Hy = ["disabled"], Wy = ["disabled"], Gy = {
  key: 0,
  class: "rlzc-check-list"
}, Ky = ["data-kind"], qy = { class: "rlzc-check-text" }, Yy = {
  key: 0,
  class: "rlzc-check-time"
}, Jy = {
  key: 1,
  class: "rlzc-option-list"
}, Zy = { class: "rlzc-option-row" }, Qy = ["aria-checked"], Xy = { class: "rlzc-option-row" }, eb = ["aria-checked"], tb = { class: "rlzc-option-row rlzc-option-row-timeout" }, nb = { class: "rlzc-timeout-wrap" }, sb = ["value"], rb = /* @__PURE__ */ Be({
  __name: "SubApiCard",
  setup(e) {
    const t = H(() => A.settings.subApi), n = H(() => t.value.presets.find((S) => S.id === t.value.presetId) ?? null), s = H(() => n.value?.models ?? []), r = /* @__PURE__ */ xe(!1), i = /* @__PURE__ */ xe(""), o = /* @__PURE__ */ xe(""), l = H(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : Em(n.value)), a = H(() => {
      const S = n.value;
      if (!S) return [];
      const f = (m, v, N) => v && N ? [{ id: m, text: v, kind: N.ok ? "on" : "warn", time: N.at ? $m(N.at) : "" }] : [];
      return [...f("fetch", Sm(S), S.fetchResult), ...f("test", Cm(S), S.testResult)];
    }), c = H(() => A.settings.cardCollapsed.subApi);
    function d() {
      A.settings.cardCollapsed.subApi = !A.settings.cardCollapsed.subApi, p();
    }
    function p() {
      ke();
    }
    function h(S) {
      t.value.source = S, p();
    }
    function x() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function _() {
      const S = (await Jo("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!S) return;
      const f = { id: x(), name: S, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, f], t.value.presetId = f.id, p();
    }
    async function w() {
      if (!n.value) return;
      const S = (await Jo("改名为：", n.value.name))?.trim();
      S && (n.value.name = S, p());
    }
    async function L() {
      n.value && await Ht(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((S) => S.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", p());
    }
    function U(S) {
      t.value.presetId = S.target.value, p();
    }
    function D(S, f) {
      wx(S, f.target.value);
    }
    function C() {
      return Math.max(5, Number(t.value.timeoutSec) || 60) * 1e3;
    }
    function M(S, f, m) {
      return S.url === f.url && S.key === f.key && (!m || S.model === f.model);
    }
    async function ee() {
      const S = n.value;
      if (!S || !Qo(S) || i.value) return;
      const f = { ...S };
      i.value = S.id;
      try {
        const m = await bm(f, C());
        M(S, f, !1) && el(S, { ok: !0, models: m });
      } catch (m) {
        M(S, f, !1) && el(S, { ok: !1, reason: ci(m) });
      } finally {
        i.value = "", p();
      }
    }
    async function te() {
      const S = n.value;
      if (!S || !Xo(S) || o.value) return;
      const f = { ...S };
      o.value = S.id;
      try {
        await wm(f, C()), M(S, f, !0) && tl(S, { ok: !0 });
      } catch (m) {
        M(S, f, !0) && tl(S, { ok: !1, reason: ci(m) });
      } finally {
        o.value = "", p();
      }
    }
    function Q(S) {
      const f = Math.floor(Number(S.target.value));
      if (!Number.isFinite(f) || f < 5) {
        Se("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = f, p();
    }
    function re(S, f) {
      t.value[S] = f, p();
    }
    return (S, f) => (b(), k("div", xy, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !c.value,
        onClick: d
      }, [
        f[9] || (f[9] = u("h4", null, "副本事件检测", -1)),
        u("span", {
          class: "rlzc-dot",
          "data-kind": l.value.kind
        }, z(l.value.text), 9, yy),
        u("span", {
          class: Z(["rlzc-collapse-arrow", { open: !c.value }])
        }, "▸", 2)
      ], 8, vy),
      c.value ? F("", !0) : (b(), k("div", by, [
        f[24] || (f[24] = u("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        u("div", ky, [
          u("button", {
            class: Z({ on: t.value.source === "off" }),
            onClick: f[0] || (f[0] = (m) => h("off"))
          }, "关闭", 2),
          u("button", {
            class: Z({ on: t.value.source === "main" }),
            onClick: f[1] || (f[1] = (m) => h("main"))
          }, "跟随主API", 2),
          u("button", {
            class: Z({ on: t.value.source === "preset" }),
            onClick: f[2] || (f[2] = (m) => h("preset"))
          }, "自设API", 2)
        ]),
        t.value.source === "preset" ? (b(), k("div", wy, [
          u("div", zy, [
            u("select", {
              class: "rlzc-input",
              value: t.value.presetId,
              onChange: U
            }, [
              t.value.presets.length ? F("", !0) : (b(), k("option", $y, "还没有保存的接口")),
              (b(!0), k(J, null, ue(t.value.presets, (m) => (b(), k("option", {
                key: m.id,
                value: m.id
              }, z(m.name), 9, Sy))), 128))
            ], 40, _y),
            u("button", {
              class: "rlzc-icon-btn",
              "aria-label": "新建接口",
              type: "button",
              onClick: _
            }, [...f[10] || (f[10] = [
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
              onClick: w
            }, [...f[11] || (f[11] = [
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
            ])], 8, Cy),
            u("button", {
              class: "rlzc-icon-btn rlzc-danger",
              "aria-label": "删除接口",
              type: "button",
              disabled: !n.value,
              onClick: L
            }, [...f[12] || (f[12] = [
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
            ])], 8, Ey)
          ]),
          n.value ? (b(), k(J, { key: 0 }, [
            u("div", My, [
              f[13] || (f[13] = u("label", { class: "rlzc-label" }, "地址", -1)),
              u("input", {
                class: "rlzc-input",
                value: n.value.url,
                placeholder: "https://…/v1",
                onInput: f[3] || (f[3] = (m) => D("url", m))
              }, null, 40, Ty)
            ]),
            u("div", Iy, [
              f[16] || (f[16] = u("label", { class: "rlzc-label" }, "密钥", -1)),
              u("div", Ny, [
                u("input", {
                  class: "rlzc-input",
                  type: r.value ? "text" : "password",
                  value: n.value.key,
                  autocomplete: "off",
                  onInput: f[4] || (f[4] = (m) => D("key", m))
                }, null, 40, Py),
                u("button", {
                  class: "rlzc-eye-btn",
                  type: "button",
                  "aria-label": r.value ? "隐藏密钥" : "显示密钥",
                  onClick: f[5] || (f[5] = (m) => r.value = !r.value)
                }, [
                  r.value ? (b(), k("svg", Ly, [...f[14] || (f[14] = [
                    u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    u("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1),
                    u("path", { d: "M2 2l12 12" }, null, -1)
                  ])])) : (b(), k("svg", Dy, [...f[15] || (f[15] = [
                    u("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    u("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1)
                  ])]))
                ], 8, Ry)
              ])
            ]),
            u("div", Fy, [
              f[17] || (f[17] = u("label", { class: "rlzc-label" }, "模型", -1)),
              s.value.length ? (b(), k("select", {
                key: 0,
                class: "rlzc-input",
                onChange: f[6] || (f[6] = (m) => D("model", m))
              }, [
                n.value.model ? F("", !0) : (b(), k("option", jy, "请选择…")),
                n.value.model && !s.value.includes(n.value.model) ? (b(), k("option", {
                  key: 1,
                  value: n.value.model,
                  selected: ""
                }, z(n.value.model), 9, Oy)) : F("", !0),
                (b(!0), k(J, null, ue(s.value, (m) => (b(), k("option", {
                  key: m,
                  value: m,
                  selected: m === n.value.model
                }, z(m), 9, By))), 128))
              ], 32)) : (b(), k("input", {
                key: 1,
                class: "rlzc-input rlzc-input-disabled",
                value: n.value.model ? n.value.model : "先拉取模型",
                readonly: "",
                tabindex: "-1"
              }, null, 8, Vy))
            ]),
            u("div", Uy, [
              u("button", {
                class: "rlzc-btn ghost",
                type: "button",
                disabled: !!i.value || !E(Qo)(n.value),
                onClick: ee
              }, z(i.value === n.value.id ? "拉取中…" : "拉取模型"), 9, Hy),
              u("button", {
                class: "rlzc-btn ghost",
                type: "button",
                disabled: !!o.value || !E(Xo)(n.value),
                onClick: te
              }, z(o.value === n.value.id ? "测试中…" : "测试模型"), 9, Wy)
            ]),
            a.value.length ? (b(), k("ul", Gy, [
              (b(!0), k(J, null, ue(a.value, (m) => (b(), k("li", {
                key: m.id,
                "data-kind": m.kind
              }, [
                u("span", qy, z(m.text), 1),
                m.time ? (b(), k("time", Yy, z(m.time), 1)) : F("", !0)
              ], 8, Ky))), 128))
            ])) : F("", !0)
          ], 64)) : F("", !0)
        ])) : F("", !0),
        t.value.source !== "off" ? (b(), k("div", Jy, [
          u("div", Zy, [
            f[19] || (f[19] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "省钱模式"),
              u("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: Z(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: f[7] || (f[7] = (m) => re("saveMode", !t.value.saveMode))
            }, [...f[18] || (f[18] = [
              u("span", null, null, -1)
            ])], 10, Qy)
          ]),
          u("div", Xy, [
            f[21] || (f[21] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "等检测完再写下一轮"),
              u("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: Z(["rlzc-toggle", { on: t.value.wait }]),
              onClick: f[8] || (f[8] = (m) => re("wait", !t.value.wait))
            }, [...f[20] || (f[20] = [
              u("span", null, null, -1)
            ])], 10, eb)
          ]),
          u("div", tb, [
            f[23] || (f[23] = u("span", null, "超时", -1)),
            u("div", nb, [
              u("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: Q
              }, null, 40, sb),
              f[22] || (f[22] = u("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : F("", !0)
      ]))
    ]));
  }
}), ib = { class: "rlzc-card rlzc-collapsible rlzc-live-card" }, ob = ["aria-expanded"], lb = {
  key: 0,
  class: "rlzc-dot",
  "data-kind": "on"
}, ab = {
  key: 0,
  class: "rlzc-collapse-body"
}, cb = { class: "rlzc-onair-text" }, ub = {
  key: 0,
  class: "rlzc-onair-lock",
  "aria-label": "副本内已锁定"
}, db = { class: "rlzc-option-list" }, Ab = { class: "rlzc-option-row rlzc-option-row-stack" }, fb = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "弹幕来源"
}, pb = ["disabled"], hb = {
  key: 0,
  class: "rlzc-hint"
}, mb = {
  key: 0,
  class: "rlzc-option-row"
}, gb = { class: "rlzc-timeout-wrap" }, xb = ["value"], vb = { class: "rlzc-option-row" }, yb = ["aria-checked"], bb = /* @__PURE__ */ Be({
  __name: "LiveCard",
  setup(e) {
    const t = H(() => A.settings.live), n = H(() => A.settings.subApi.source !== "off"), s = H(() => n.value ? t.value.source : "local"), r = H(() => (A.tick, A.session, rv())), i = H(() => r.value.on);
    function o() {
      r.value.locked || nu();
    }
    const l = H(() => A.settings.cardCollapsed.live);
    function a() {
      A.settings.cardCollapsed.live = !A.settings.cardCollapsed.live, ke();
    }
    function c(h) {
      h === "ai" && !n.value || (t.value.source = h, ke());
    }
    function d(h) {
      const x = Math.floor(Number(h.target.value));
      t.value.freq = Number.isFinite(x) ? Math.max(1, Math.min(10, x)) : 3, h.target.value = String(t.value.freq), ke();
    }
    function p(h) {
      t.value.injectToAI = h, ke();
    }
    return (h, x) => (b(), k("div", ib, [
      u("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !l.value,
        onClick: a
      }, [
        x[3] || (x[3] = u("h4", null, "直播", -1)),
        i.value ? (b(), k("span", lb, "直播中")) : F("", !0),
        u("span", {
          class: Z(["rlzc-collapse-arrow", { open: !l.value }])
        }, "▸", 2)
      ], 8, ob),
      l.value ? F("", !0) : (b(), k("div", ab, [
        x[12] || (x[12] = u("p", { class: "rlzc-hint" }, "开播后有观众弹幕和打赏，打赏计入积分。画面在状态栏的直播页。", -1)),
        u("div", {
          class: Z(["rlzc-onair", { on: r.value.on, locked: r.value.locked }])
        }, [
          x[5] || (x[5] = u("span", {
            class: "rlzc-onair-dot",
            "aria-hidden": "true"
          }, null, -1)),
          u("div", cb, [
            u("strong", null, z(r.value.on ? "直播中" : "未开播"), 1),
            u("small", null, z(r.value.note), 1)
          ]),
          r.value.locked ? (b(), k("span", ub, [...x[4] || (x[4] = [
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
            Ee(" 已锁定 ", -1)
          ])])) : (b(), k("button", {
            key: 1,
            type: "button",
            class: Z(["rlzc-onair-btn", { stop: r.value.on }]),
            onClick: o
          }, z(r.value.on ? "下播" : "开播"), 3))
        ], 2),
        u("div", db, [
          u("div", Ab, [
            x[6] || (x[6] = u("span", { class: "rlzc-option-label" }, [
              u("span", null, "弹幕来源")
            ], -1)),
            u("div", fb, [
              u("button", {
                class: Z({ on: s.value === "local" }),
                onClick: x[0] || (x[0] = (_) => c("local"))
              }, "本地", 2),
              u("button", {
                class: Z({ on: s.value === "ai" }),
                disabled: !n.value,
                onClick: x[1] || (x[1] = (_) => c("ai"))
              }, "本地+AI", 10, pb)
            ]),
            n.value ? F("", !0) : (b(), k("small", hb, "需先在副本事件检测里选接口"))
          ]),
          s.value === "ai" ? (b(), k("div", mb, [
            x[9] || (x[9] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "生成频率"),
              u("small", null, "关键事件时另加一次")
            ], -1)),
            u("div", gb, [
              x[7] || (x[7] = u("span", { class: "rlzc-unit" }, "每", -1)),
              u("input", {
                type: "number",
                min: "1",
                max: "10",
                class: "rlzc-input rlzc-input-num",
                value: t.value.freq,
                onChange: d
              }, null, 40, xb),
              x[8] || (x[8] = u("span", { class: "rlzc-unit" }, "轮", -1))
            ])
          ])) : F("", !0),
          u("div", vb, [
            x[11] || (x[11] = u("div", { class: "rlzc-option-label" }, [
              u("span", null, "弹幕传给AI"),
              u("small", null, "主AI能看到最近弹幕")
            ], -1)),
            u("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.injectToAI ? "true" : "false",
              class: Z(["rlzc-toggle", { on: t.value.injectToAI }]),
              onClick: x[2] || (x[2] = (_) => p(!t.value.injectToAI))
            }, [...x[10] || (x[10] = [
              u("span", null, null, -1)
            ])], 10, yb)
          ])
        ])
      ]))
    ]));
  }
}), kb = { class: "rlzc-settings" }, wb = { class: "rlzc-card" }, zb = ["value"], _b = { class: "rlzc-card rlzc-collapsible rlzc-format-card" }, $b = ["aria-expanded"], Sb = {
  key: 0,
  class: "rlzc-collapse-status"
}, Cb = {
  key: 0,
  class: "rlzc-collapse-body"
}, Eb = { class: "rlzc-option-row" }, Mb = ["aria-checked"], Tb = { class: "rlzc-card rlzc-collapsible" }, Ib = ["aria-expanded"], Nb = {
  key: 0,
  class: "rlzc-collapse-body"
}, Pb = { class: "rlzc-ledger-status" }, Rb = { class: "rlzc-row" }, Lb = ["placeholder"], Db = ["disabled"], Fb = { class: "rlzc-row" }, jb = ["disabled"], Ob = { class: "rlzc-row" }, Bb = { class: "rlzc-seg-group" }, Vb = ["aria-pressed", "onClick"], Ub = ["disabled"], Hb = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, Wb = { class: "rlzc-card rlzc-collapsible" }, Gb = ["aria-expanded"], Kb = {
  key: 0,
  class: "rlzc-collapse-body"
}, qb = { class: "rlzc-depth" }, Yb = { class: "rlzc-field rlzc-field-num" }, Jb = ["value"], Zb = { class: "rlzc-field rlzc-field-num" }, Qb = ["value"], Xb = { class: "rlzc-field rlzc-field-num" }, e1 = ["value"], t1 = { class: "rlzc-field rlzc-field-num" }, n1 = ["value"], s1 = { class: "rlzc-field rlzc-field-num" }, r1 = ["value"], i1 = { class: "rlzc-field rlzc-field-num" }, o1 = ["value"], l1 = { class: "rlzc-card rlzc-collapsible" }, a1 = ["aria-expanded"], c1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, u1 = ["value", "onChange"], d1 = { class: "rlzc-card" }, A1 = {
  key: 0,
  class: "rlzc-list"
}, f1 = ["onClick"], p1 = {
  key: 1,
  class: "rlzc-hint"
}, h1 = {
  key: 2,
  class: "rlzc-errors"
}, m1 = { class: "rlzc-card" }, g1 = { class: "rlzc-check" }, x1 = ["checked"], v1 = { class: "rlzc-check" }, y1 = ["checked"], b1 = /* @__PURE__ */ Be({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ xe([]), n = /* @__PURE__ */ xe(null), s = /* @__PURE__ */ xe(null), r = /* @__PURE__ */ xe(null), i = /* @__PURE__ */ xe(""), o = /* @__PURE__ */ xe(""), l = /* @__PURE__ */ xe(""), a = ["D", "C", "B", "A", "S"], c = H(() => St(q())), d = H(() => fn(c.value.value, A.ledger)), p = H(() => (A.tick, st(q()))), h = H(() => $t[p.value]), x = H(() => ds(c.value.value, A.ledger, h.value));
    function _() {
      s.value !== null && (Ex(s.value), s.value = null);
    }
    function w() {
      r.value !== null && (Cx(r.value, i.value || "手动"), r.value = null, i.value = "");
    }
    function L() {
      !o.value && !l.value || (Mx(o.value || void 0, l.value || void 0), o.value = "", l.value = "", Se("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function U(S, f) {
      const m = Math.max(0, Math.min(1e4, Math.floor(Number(f.target.value) || 0)));
      A.settings.depths[S] = m, ke();
    }
    async function D(S) {
      const f = S.target, m = f.files?.[0];
      f.value = "", m && (t.value = zx(await m.text()), t.value.length || Se("success", `已导入副本包：${m.name}`));
    }
    async function C(S, f) {
      await Ht(`确定删除自定义副本包《${f}》吗？`) && _x(S);
    }
    function M(S, f) {
      const m = Math.floor(Number(f.target.value));
      !Number.isFinite(m) || m < 1 || (A.settings.genericCaps = { ...A.settings.genericCaps, [S]: m }, ke());
    }
    function ee(S) {
      Zx(S.target.value);
    }
    function te(S) {
      A.settings.statusBarFix = S, ke();
    }
    function Q(S, f) {
      A.settings[S] = f.target.checked, ke();
    }
    function re(S) {
      A.settings.cardCollapsed[S] = !A.settings.cardCollapsed[S], ke();
    }
    return (S, f) => (b(), k(J, null, [
      u("div", kb, [
        u("div", wb, [
          f[19] || (f[19] = u("h4", null, "副本信息显示位置", -1)),
          u("select", {
            class: "rlzc-input",
            value: E(A).settings.panelDisplay,
            onChange: ee
          }, [...f[18] || (f[18] = [
            u("option", { value: "panel" }, "扩展面板（默认）", -1),
            u("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, zb),
          f[20] || (f[20] = u("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        u("div", _b, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(A).settings.cardCollapsed.statusBar,
            onClick: f[0] || (f[0] = (m) => re("statusBar"))
          }, [
            f[21] || (f[21] = u("h4", null, "状态栏格式", -1)),
            E(A).settings.cardCollapsed.statusBar ? (b(), k("span", Sb, z(E(A).settings.statusBarFix ? "自动修正" : "只提醒"), 1)) : F("", !0),
            u("span", {
              class: Z(["rlzc-collapse-arrow", { open: !E(A).settings.cardCollapsed.statusBar }])
            }, "▸", 2)
          ], 8, $b),
          E(A).settings.cardCollapsed.statusBar ? F("", !0) : (b(), k("div", Cb, [
            f[24] || (f[24] = u("p", { class: "rlzc-hint" }, "AI 回复的状态栏缺失或标签写错时，下一轮提醒 AI 按原样输出。", -1)),
            u("div", Eb, [
              f[23] || (f[23] = u("div", { class: "rlzc-option-label" }, [
                u("span", null, "自动修正状态栏标签"),
                u("small", null, "只改标签名，不动内容")
              ], -1)),
              u("button", {
                role: "switch",
                type: "button",
                class: Z(["rlzc-toggle rlzc-format-fix", { on: E(A).settings.statusBarFix }]),
                "aria-checked": E(A).settings.statusBarFix ? "true" : "false",
                onClick: f[1] || (f[1] = (m) => te(!E(A).settings.statusBarFix))
              }, [...f[22] || (f[22] = [
                u("span", null, null, -1)
              ])], 10, Mb)
            ])
          ]))
        ]),
        u("div", Tb, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(A).settings.cardCollapsed.accountFix,
            onClick: f[2] || (f[2] = (m) => re("accountFix"))
          }, [
            f[25] || (f[25] = u("h4", null, "账户校正", -1)),
            u("span", {
              class: Z(["rlzc-collapse-arrow", { open: !E(A).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, Ib),
          E(A).settings.cardCollapsed.accountFix ? F("", !0) : (b(), k("div", Nb, [
            f[27] || (f[27] = u("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            u("div", Pb, [
              u("span", null, [
                f[26] || (f[26] = Ee("当前余额：", -1)),
                u("b", null, z(d.value), 1)
              ]),
              u("span", null, z(x.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            f[28] || (f[28] = u("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            u("div", Rb, [
              pt(u("input", {
                "onUpdate:modelValue": f[3] || (f[3] = (m) => s.value = m),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${c.value.value}`
              }, null, 8, Lb), [
                [
                  Nt,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: _
              }, "保存", 8, Db)
            ]),
            f[29] || (f[29] = u("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            u("div", Fb, [
              pt(u("input", {
                "onUpdate:modelValue": f[4] || (f[4] = (m) => r.value = m),
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
              pt(u("input", {
                "onUpdate:modelValue": f[5] || (f[5] = (m) => i.value = m),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [Nt, i.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: r.value === null,
                onClick: w
              }, "追加", 8, jb)
            ]),
            f[30] || (f[30] = u("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            f[31] || (f[31] = u("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            u("div", Ob, [
              u("div", Bb, [
                (b(), k(J, null, ue(a, (m) => u("button", {
                  key: m,
                  type: "button",
                  class: Z(["rlzc-seg", { active: o.value === m }]),
                  "aria-pressed": o.value === m ? "true" : "false",
                  onClick: (v) => o.value = o.value === m ? "" : m
                }, z(m), 11, Vb)), 64))
              ]),
              pt(u("input", {
                "onUpdate:modelValue": f[6] || (f[6] = (m) => l.value = m),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [Nt, l.value]
              ]),
              u("button", {
                class: "rlzc-btn small",
                disabled: !o.value && !l.value,
                onClick: L
              }, "校正", 8, Ub)
            ]),
            E(A).ledger.length === 0 && c.value.source === "默认值" ? (b(), k("p", Hb, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : F("", !0)
          ]))
        ]),
        u("div", Wb, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(A).settings.cardCollapsed.depths,
            onClick: f[7] || (f[7] = (m) => re("depths"))
          }, [
            f[32] || (f[32] = u("h4", null, "注入深度", -1)),
            u("span", {
              class: Z(["rlzc-collapse-arrow", { open: !E(A).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, Gb),
          E(A).settings.cardCollapsed.depths ? F("", !0) : (b(), k("div", Kb, [
            f[39] || (f[39] = u("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            u("div", qb, [
              u("label", Yb, [
                f[33] || (f[33] = u("span", null, [
                  Ee("副本暗号"),
                  u("small", null, "触发世界书的副本条目")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: E(A).settings.depths.token,
                  onChange: f[8] || (f[8] = (m) => U("token", m))
                }, null, 40, Jb)
              ]),
              u("label", Zb, [
                f[34] || (f[34] = u("span", null, [
                  Ee("副本进度"),
                  u("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: E(A).settings.depths.progress,
                  onChange: f[9] || (f[9] = (m) => U("progress", m))
                }, null, 40, Qb)
              ]),
              u("label", Xb, [
                f[35] || (f[35] = u("span", null, [
                  Ee("本轮指令"),
                  u("small", null, "本轮事件与时限写法")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: E(A).settings.depths.turn,
                  onChange: f[10] || (f[10] = (m) => U("turn", m))
                }, null, 40, e1)
              ]),
              u("label", t1, [
                f[36] || (f[36] = u("span", null, [
                  Ee("账户"),
                  u("small", null, "积分余额与清算状态")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: E(A).settings.depths.ledger,
                  onChange: f[11] || (f[11] = (m) => U("ledger", m))
                }, null, 40, n1)
              ]),
              u("label", s1, [
                f[37] || (f[37] = u("span", null, [
                  Ee("直播"),
                  u("small", null, "在看人数与最近弹幕")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: E(A).settings.depths.live,
                  onChange: f[12] || (f[12] = (m) => U("live", m))
                }, null, 40, r1)
              ]),
              u("label", i1, [
                f[38] || (f[38] = u("span", null, [
                  Ee("格式提醒"),
                  u("small", null, "状态栏格式出错后的提醒")
                ], -1)),
                u("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: E(A).settings.depths.format,
                  onChange: f[13] || (f[13] = (m) => U("format", m))
                }, null, 40, o1)
              ])
            ])
          ]))
        ]),
        _e(rb),
        _e(bb),
        u("div", l1, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(A).settings.cardCollapsed.genericCaps,
            onClick: f[14] || (f[14] = (m) => re("genericCaps"))
          }, [
            f[40] || (f[40] = u("h4", null, "通用副本默认轮数上限", -1)),
            u("span", {
              class: Z(["rlzc-collapse-arrow", { open: !E(A).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, a1),
          E(A).settings.cardCollapsed.genericCaps ? F("", !0) : (b(), k("div", c1, [
            f[41] || (f[41] = u("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (b(), k(J, null, ue(a, (m) => u("label", {
              key: m,
              class: "rlzc-field rlzc-field-num"
            }, [
              u("span", null, z(m) + " 级", 1),
              u("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: E(A).settings.genericCaps[m],
                onChange: (v) => M(m, v)
              }, null, 40, u1)
            ])), 64))
          ]))
        ]),
        u("div", d1, [
          f[42] || (f[42] = u("h4", null, "自定义副本包", -1)),
          E(A).settings.customPacks.length ? (b(), k("ul", A1, [
            (b(!0), k(J, null, ue(E(A).settings.customPacks, (m) => (b(), k("li", {
              key: m.id
            }, [
              u("span", null, [
                Ee(z(m.level) + "｜" + z(m.name) + " ", 1),
                u("small", null, "v" + z(m.version), 1)
              ]),
              u("button", {
                class: "rlzc-btn ghost small",
                onClick: (v) => C(m.id, m.name)
              }, "删除", 8, f1)
            ]))), 128))
          ])) : (b(), k("p", p1, "还没有导入自定义副本包。")),
          u("input", {
            ref_key: "fileInput",
            ref: n,
            type: "file",
            accept: ".json,application/json",
            hidden: "",
            onChange: D
          }, null, 544),
          u("button", {
            class: "rlzc-btn",
            onClick: f[15] || (f[15] = (m) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (b(), k("ul", h1, [
            (b(!0), k(J, null, ue(t.value, (m, v) => (b(), k("li", { key: v }, z(m), 1))), 128))
          ])) : F("", !0)
        ]),
        u("div", m1, [
          f[45] || (f[45] = u("h4", null, "其他", -1)),
          u("label", g1, [
            u("input", {
              type: "checkbox",
              checked: E(A).settings.showBall,
              onChange: f[16] || (f[16] = (m) => Q("showBall", m))
            }, null, 40, x1),
            f[43] || (f[43] = Ee("显示悬浮球", -1))
          ]),
          u("label", v1, [
            u("input", {
              type: "checkbox",
              checked: E(A).settings.debug,
              onChange: f[17] || (f[17] = (m) => Q("debug", m))
            }, null, 40, y1),
            f[44] || (f[44] = Ee("调试模式", -1))
          ])
        ])
      ]),
      f[46] || (f[46] = u("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), k1 = { class: "rlzc-debug" }, w1 = {
  key: 0,
  class: "rlzc-note"
}, z1 = {
  key: 0,
  class: "rlzc-note"
}, _1 = {
  key: 1,
  class: "rlzc-note"
}, $1 = {
  key: 2,
  class: "rlzc-card"
}, S1 = { class: "rlzc-row" }, C1 = ["disabled"], E1 = ["value"], M1 = ["disabled"], T1 = { class: "rlzc-row" }, I1 = ["disabled"], N1 = ["disabled"], P1 = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, R1 = ["aria-expanded"], L1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, D1 = ["onUpdate:modelValue", "disabled"], F1 = ["disabled"], j1 = { class: "rlzc-card rlzc-collapsible" }, O1 = ["aria-expanded"], B1 = {
  key: 0,
  class: "rlzc-collapse-status"
}, V1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, U1 = {
  key: 0,
  class: "rlzc-hint"
}, H1 = { class: "rlzc-hint" }, W1 = { class: "rlzc-list rlzc-warns" }, G1 = { class: "rlzc-card rlzc-collapsible" }, K1 = ["aria-expanded"], q1 = {
  key: 0,
  class: "rlzc-collapse-status"
}, Y1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, J1 = {
  key: 0,
  class: "rlzc-list"
}, Z1 = ["disabled", "onClick"], Q1 = {
  key: 1,
  class: "rlzc-hint"
}, X1 = {
  key: 4,
  class: "rlzc-card"
}, ek = { class: "rlzc-pre" }, tk = {
  key: 0,
  class: "rlzc-pre"
}, nk = {
  key: 5,
  class: "rlzc-card"
}, sk = { class: "rlzc-table" }, rk = { class: "rlzc-hint" }, ik = {
  key: 0,
  class: "rlzc-hint"
}, ok = { class: "rlzc-hint" }, lk = {
  key: 1,
  class: "rlzc-table"
}, ak = { class: "rlzc-card rlzc-collapsible" }, ck = ["aria-expanded"], uk = {
  key: 0,
  class: "rlzc-collapse-body"
}, dk = { class: "rlzc-pre" }, Ak = { class: "rlzc-card" }, fk = { class: "rlzc-pre" }, pk = { class: "rlzc-card" }, hk = { class: "rlzc-pre" }, mk = { class: "rlzc-card" }, gk = { class: "rlzc-table" }, xk = {
  key: 0,
  class: "rlzc-warn-text"
}, vk = { key: 1 }, yk = ["disabled"], bk = { class: "rlzc-card rlzc-collapsible rlzc-format-debug" }, kk = ["aria-expanded"], wk = {
  key: 0,
  class: "rlzc-collapse-status"
}, zk = {
  key: 0,
  class: "rlzc-collapse-body"
}, _k = {
  key: 0,
  class: "rlzc-hint"
}, $k = {
  key: 1,
  class: "rlzc-table"
}, Sk = {
  key: 2,
  class: "rlzc-card"
}, Ck = { class: "rlzc-table" }, Ek = /* @__PURE__ */ Be({
  __name: "DebugTab",
  setup(e) {
    const t = H(() => A.settings.debug), n = /* @__PURE__ */ xe(""), s = /* @__PURE__ */ xe(null), r = /* @__PURE__ */ lr({});
    cr(
      () => [A.tick, A.pack?.id],
      () => {
        for (const m of Object.keys(r)) delete r[m];
        const f = qc() ?? {};
        for (const m of A.pack?.roles ?? []) r[m] = f[m] ?? "";
      },
      { immediate: !0 }
    );
    const i = H(() => {
      A.tick;
      const f = q(), m = [], v = A.session?.entryIndex ?? 0;
      for (let N = v; N < f.length; N++) {
        const ie = f[N]?.extra?.rlzc;
        ie && m.push({ index: N, snap: ie });
      }
      return m.reverse().slice(0, 60);
    }), o = H(() => {
      const f = new Set((A.audit?.warnings ?? []).filter((N) => N.kind === "limit" || N.kind === "eventMissed").map((N) => N.index)), m = q(), v = A.session?.entryIndex ?? 0;
      for (let N = v; N < m.length; N++)
        m[N]?.extra?.rlzc?.ledgerMismatch && f.add(N);
      for (const N of l.value) f.add(N.index);
      return f;
    }), l = H(() => (A.tick, Bh(q()))), a = H(() => l.value.filter((f) => !f.fixed).length), c = H(() => {
      if (A.tick, !A.session || !A.pack || !A.progress) return null;
      const f = q(), m = mr(f, A.progress.entryIndex);
      let v = null;
      for (let N = f.length - 1; N >= A.progress.entryIndex; N--) {
        const ie = f[N]?.extra?.rlzc?.sub;
        if (ie) {
          v = ie;
          break;
        }
      }
      return {
        text: m ? fc(A.pack, m.state) : "",
        state: m?.state ?? null,
        record: v
      };
    }), d = H(() => {
      A.tick;
      const f = q(), m = [];
      for (let v = f.length - 1; v >= 0 && m.length < 60; v--) {
        const N = Wt(f[v]);
        N && m.push({ index: v, rec: N });
      }
      return m;
    });
    function p(f) {
      const m = f.feed.filter((v) => v.t === "tip").map((v) => `${v.name} ${v.amount}→${v.net}`);
      return f.revoke && m.push(`撤回 −${f.revoke}`), m.join("；");
    }
    function h(f) {
      const m = f.ai;
      return m ? m.pending ? "生成中…" : m.ok ? `${m.count}条（${m.ms}ms）` : `失败：${m.error ?? ""}` : "";
    }
    const x = { done: "✓", missed: "✗", void: "–" };
    function _(f) {
      if (!f.sub && !f.skippedEvents?.length) return "";
      const m = [];
      f.sub?.skipped && m.push(`未更新（${f.sub.error ?? ""}）`);
      for (const v of f.sub?.events ?? []) m.push(`${v.id}${x[v.status]}`);
      for (const v of f.skippedEvents ?? []) m.push(`跳过${v.id}`);
      return f.sub && !f.sub.skipped && !m.length && m.push("已整理"), m.join(" ");
    }
    const w = H(() => {
      if (A.tick, !A.session) return null;
      const f = Ve().books[A.session.id];
      return f ? { book: f, rounds: hv() } : null;
    }), L = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" };
    function U(f, m) {
      return f ? f.kind === "refund" ? `全退（#${f.index}）` : f.kind === "lost" ? `全废（#${f.index}）` : `${m[f.option] ?? f.option}（#${f.index}）` : "待开奖";
    }
    function D(f) {
      return f ? f.status === "pending" ? "出题中…" : f.status === "ok" ? `已出 ${f.count} 题（${f.ms}ms）` : f.status === "late" ? `晚于封盘到达，已丢弃（${f.ms}ms）` : `失败：${f.error ?? ""}` : "事件检测关闭，未出题";
    }
    const C = { ok: "已检测", miss: "没检测", pending: "检测中" }, M = H(() => {
      const f = A.progress;
      if (!f) return null;
      const { perMessage: m, phase: v, next: N, ...ie } = f;
      return {
        phase: v.id + " " + v.name,
        ...ie,
        next: N ? { round: N.round, skipFrom: N.skipFrom, events: N.events.map((le) => le.id) } : null,
        messages: Object.keys(m).length
      };
    });
    function ee() {
      n.value && Ox(n.value);
    }
    function te() {
      s.value !== null && s.value >= 0 && Bx(s.value);
    }
    function Q() {
      Vx({ ...r });
    }
    const re = (f) => JSON.stringify(f, null, 2);
    function S(f) {
      A.settings.cardCollapsed[f] = !A.settings.cardCollapsed[f], ke();
    }
    return (f, m) => (b(), k("div", k1, [
      E(A).session ? (b(), k(J, { key: 1 }, [
        t.value ? F("", !0) : (b(), k("p", z1, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        E(A).pack && E(A).session.packVersion !== E(A).pack.version ? (b(), k("p", _1, " 入场时副本包版本为 " + z(E(A).session.packVersion) + "，当前为 " + z(E(A).pack.version) + "。 ", 1)) : F("", !0),
        E(A).pack?.phases.length ? (b(), k("div", $1, [
          m[9] || (m[9] = u("h4", null, "手动修正", -1)),
          u("div", S1, [
            pt(u("select", {
              "onUpdate:modelValue": m[0] || (m[0] = (v) => n.value = v),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              m[8] || (m[8] = u("option", { value: "" }, "切换到阶段…", -1)),
              (b(!0), k(J, null, ue(E(A).pack.phases, (v) => (b(), k("option", {
                key: v.id,
                value: v.id
              }, z(v.name), 9, E1))), 128))
            ], 8, C1), [
              [Ra, n.value]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: ee
            }, "切换", 8, M1)
          ]),
          u("div", T1, [
            pt(u("input", {
              "onUpdate:modelValue": m[1] || (m[1] = (v) => s.value = v),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, I1), [
              [
                Nt,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: te
            }, "修正轮次", 8, N1)
          ])
        ])) : F("", !0),
        E(A).pack?.roles?.length ? (b(), k("div", P1, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(A).settings.cardCollapsed.rolesDebug,
            onClick: m[2] || (m[2] = (v) => S("rolesDebug"))
          }, [
            m[10] || (m[10] = u("h4", null, "角色登记", -1)),
            u("span", {
              class: Z(["rlzc-collapse-arrow", { open: !E(A).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, R1),
          E(A).settings.cardCollapsed.rolesDebug ? F("", !0) : (b(), k("div", L1, [
            (b(!0), k(J, null, ue(E(A).pack.roles, (v) => (b(), k("label", {
              key: v,
              class: "rlzc-field"
            }, [
              u("span", null, z(v), 1),
              pt(u("input", {
                "onUpdate:modelValue": (N) => r[v] = N,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, D1), [
                [Nt, r[v]]
              ])
            ]))), 128)),
            u("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: Q
            }, "保存登记", 8, F1)
          ]))
        ])) : F("", !0),
        u("div", j1, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(A).settings.cardCollapsed.auditDebug,
            onClick: m[3] || (m[3] = (v) => S("auditDebug"))
          }, [
            m[11] || (m[11] = u("h4", null, "<副本> 核对", -1)),
            E(A).settings.cardCollapsed.auditDebug ? (b(), k("span", B1, z(E(A).audit?.warnings.length ? "⚠️" : "无"), 1)) : F("", !0),
            u("span", {
              class: Z(["rlzc-collapse-arrow", { open: !E(A).settings.cardCollapsed.auditDebug }])
            }, "▸", 2)
          ], 8, O1),
          E(A).settings.cardCollapsed.auditDebug ? F("", !0) : (b(), k("div", V1, [
            E(A).audit?.warnings.length ? (b(), k(J, { key: 1 }, [
              u("p", H1, "共 " + z(E(A).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
              u("ul", W1, [
                (b(!0), k(J, null, ue(E(A).audit.warnings.slice(-30).reverse(), (v, N) => (b(), k("li", { key: N }, [
                  u("span", null, [
                    u("small", null, "#" + z(v.index) + "｜" + z(v.phase) + "第" + z(v.round) + "轮", 1),
                    m[12] || (m[12] = u("br", null, null, -1)),
                    Ee("⚠️ " + z(v.text), 1)
                  ])
                ]))), 128))
              ])
            ], 64)) : (b(), k("p", U1, "没有发现问题。"))
          ]))
        ]),
        u("div", G1, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(A).settings.cardCollapsed.manualDebug,
            onClick: m[4] || (m[4] = (v) => S("manualDebug"))
          }, [
            m[13] || (m[13] = u("h4", null, "手动操作记录", -1)),
            E(A).settings.cardCollapsed.manualDebug && E(A).session.manual.length ? (b(), k("span", q1, "×" + z(E(A).session.manual.length), 1)) : F("", !0),
            u("span", {
              class: Z(["rlzc-collapse-arrow", { open: !E(A).settings.cardCollapsed.manualDebug }])
            }, "▸", 2)
          ], 8, K1),
          E(A).settings.cardCollapsed.manualDebug ? F("", !0) : (b(), k("div", Y1, [
            E(A).session.manual.length ? (b(), k("ul", J1, [
              (b(!0), k(J, null, ue(E(A).session.manual, (v, N) => (b(), k("li", { key: N }, [
                u("code", null, "#" + z(v.atIndex) + " " + z(v.kind) + " " + z("phase" in v ? v.phase : "") + z("round" in v ? v.round : "") + z("targetPhase" in v ? `${v.targetPhase}:${v.targetRound}` : ""), 1),
                u("button", {
                  class: "rlzc-btn ghost small",
                  disabled: !t.value,
                  onClick: (ie) => E(Ux)(N)
                }, "撤销", 8, Z1)
              ]))), 128))
            ])) : (b(), k("p", Q1, "无"))
          ]))
        ]),
        c.value && (c.value.state || c.value.record) ? (b(), k("details", X1, [
          m[14] || (m[14] = u("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          u("pre", ek, z(c.value.text || "（尚无状态）"), 1),
          c.value.record ? (b(), k("pre", tk, z(re(c.value.record)), 1)) : F("", !0),
          m[15] || (m[15] = u("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : F("", !0),
        w.value ? (b(), k("details", nk, [
          m[21] || (m[21] = u("summary", null, "黑市：盘口赔率与检测判定", -1)),
          u("table", sk, [
            m[19] || (m[19] = u("thead", null, [
              u("tr", null, [
                u("th", null, "盘"),
                u("th", null, "题目"),
                u("th", null, "赔率"),
                u("th", null, "结果")
              ])
            ], -1)),
            u("tbody", null, [
              (b(!0), k(J, null, ue(w.value.book.markets, (v) => (b(), k("tr", {
                key: v.id
              }, [
                u("td", null, z(L[v.kind]) + " " + z(v.id), 1),
                u("td", null, [
                  Ee(z(v.q), 1),
                  v.judge ? (b(), k(J, { key: 0 }, [
                    m[16] || (m[16] = u("br", null, null, -1)),
                    u("small", null, z(v.judge), 1)
                  ], 64)) : F("", !0),
                  v.judgeNo ? (b(), k(J, { key: 1 }, [
                    m[17] || (m[17] = u("br", null, null, -1)),
                    u("small", null, "否：" + z(v.judgeNo), 1)
                  ], 64)) : F("", !0),
                  v.by ? (b(), k(J, { key: 2 }, [
                    m[18] || (m[18] = u("br", null, null, -1)),
                    u("small", null, "by " + z(v.by), 1)
                  ], 64)) : F("", !0)
                ]),
                u("td", null, z(v.options.map((N) => `${N.label}(${Math.round(N.p * 100)}%) ×${N.odds.toFixed(2)}`).join("　")), 1),
                u("td", null, z(U(E(A).market.results[v.id], Object.fromEntries(v.options.map((N) => [N.id, N.label])))), 1)
              ]))), 128))
            ])
          ]),
          u("p", rk, "庄家怪盘：" + z(D(w.value.book.freak)), 1),
          w.value.book.plan ? (b(), k("p", ik, "计划开 " + z(w.value.book.plan.total) + " 个盘，其中怪盘 " + z(w.value.book.plan.freak) + " 个；实开 " + z(w.value.book.markets.length) + " 个", 1)) : F("", !0),
          u("p", ok, "开盘 " + z(w.value.book.openedAt) + "　" + z(w.value.book.closedAt ? `封盘 ${w.value.book.closedAt}` : "未封盘") + z(w.value.book.frozen ? "　已定格" : ""), 1),
          w.value.rounds.length ? (b(), k("table", lk, [
            m[20] || (m[20] = u("thead", null, [
              u("tr", null, [
                u("th", null, "楼"),
                u("th", null, "检测"),
                u("th", null, "判定为真")
              ])
            ], -1)),
            u("tbody", null, [
              (b(!0), k(J, null, ue(w.value.rounds, (v) => (b(), k("tr", {
                key: v.index,
                class: Z({ "rlzc-row-warn": v.state === "miss" })
              }, [
                u("td", null, z(v.index), 1),
                u("td", null, z(C[v.state]), 1),
                u("td", null, z(Object.keys(v.hits).filter((N) => v.hits[N]).join(" ") || "—"), 1)
              ], 2))), 128))
            ])
          ])) : F("", !0)
        ])) : F("", !0),
        u("div", ak, [
          u("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !E(A).settings.cardCollapsed.injectionDebug,
            onClick: m[5] || (m[5] = (v) => S("injectionDebug"))
          }, [
            m[22] || (m[22] = u("h4", null, "本次注入", -1)),
            u("span", {
              class: Z(["rlzc-collapse-arrow", { open: !E(A).settings.cardCollapsed.injectionDebug }])
            }, "▸", 2)
          ], 8, ck),
          E(A).settings.cardCollapsed.injectionDebug ? F("", !0) : (b(), k("div", uk, [
            u("pre", dk, z([E(A).lastInjection.token, E(A).lastInjection.progress, E(A).lastInjection.turn, E(A).lastInjection.format].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
          ]))
        ]),
        u("details", Ak, [
          m[23] || (m[23] = u("summary", null, "重放结果", -1)),
          u("pre", fk, z(re(M.value)), 1)
        ]),
        u("details", pk, [
          m[24] || (m[24] = u("summary", null, "会话原始数据", -1)),
          u("pre", hk, z(re(E(A).session)), 1)
        ]),
        u("details", mk, [
          m[26] || (m[26] = u("summary", null, "每楼快照（最近60条）", -1)),
          u("table", gk, [
            m[25] || (m[25] = u("thead", null, [
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
              (b(!0), k(J, null, ue(i.value, (v) => (b(), k("tr", {
                key: v.index,
                class: Z({ "rlzc-row-warn": o.value.has(v.index) })
              }, [
                u("td", null, z(v.index) + z(v.snap.entry ? "★" : ""), 1),
                u("td", null, z(v.snap.phase), 1),
                u("td", null, z(v.snap.round), 1),
                u("td", null, z(v.snap.clock ?? ""), 1),
                u("td", null, z(v.snap.limit?.text ?? ""), 1),
                u("td", null, z(v.snap.injected.join(" ")), 1),
                u("td", null, z(_(v.snap)), 1),
                v.snap.ledgerMismatch ? (b(), k("td", xk, "状态栏 " + z(v.snap.ledgerMismatch.status) + " / 账本 " + z(v.snap.ledgerMismatch.ledger), 1)) : (b(), k("td", vk))
              ], 2))), 128))
            ])
          ])
        ]),
        u("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: m[6] || (m[6] = //@ts-ignore
          (...v) => E(hl) && E(hl)(...v))
        }, "删除副本会话", 8, yk)
      ], 64)) : (b(), k("p", w1, "当前聊天没有副本会话。")),
      u("div", bk, [
        u("button", {
          class: "rlzc-collapse-head",
          "aria-expanded": !E(A).settings.cardCollapsed.formatDebug,
          onClick: m[7] || (m[7] = (v) => S("formatDebug"))
        }, [
          m[27] || (m[27] = u("h4", null, "状态栏格式", -1)),
          E(A).settings.cardCollapsed.formatDebug ? (b(), k("span", wk, z(a.value ? "⚠️" : l.value.length ? `已修正×${l.value.length}` : "无"), 1)) : F("", !0),
          u("span", {
            class: Z(["rlzc-collapse-arrow", { open: !E(A).settings.cardCollapsed.formatDebug }])
          }, "▸", 2)
        ], 8, kk),
        E(A).settings.cardCollapsed.formatDebug ? F("", !0) : (b(), k("div", zk, [
          l.value.length ? (b(), k("table", $k, [
            m[29] || (m[29] = u("thead", null, [
              u("tr", null, [
                u("th", null, "楼"),
                u("th", null, "问题"),
                u("th", null, "处理")
              ])
            ], -1)),
            u("tbody", null, [
              (b(!0), k(J, null, ue(l.value, (v) => (b(), k("tr", {
                key: v.index,
                class: "rlzc-row-warn"
              }, [
                u("td", null, z(v.index), 1),
                u("td", null, [
                  Ee(z(E(Ph)[v.kind]), 1),
                  v.detail ? (b(), k(J, { key: 0 }, [
                    m[28] || (m[28] = u("br", null, null, -1)),
                    u("small", null, z(v.detail), 1)
                  ], 64)) : F("", !0)
                ]),
                u("td", null, z(v.fixed ? `已自动修正（原标签 ${v.from}）` : "未修正"), 1)
              ]))), 128))
            ])
          ])) : (b(), k("p", _k, "没有发现问题。"))
        ]))
      ]),
      d.value.length ? (b(), k("details", Sk, [
        m[31] || (m[31] = u("summary", null, "直播（每楼，最近60条）", -1)),
        u("table", Ck, [
          m[30] || (m[30] = u("thead", null, [
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
            (b(!0), k(J, null, ue(d.value, (v) => (b(), k("tr", {
              key: v.index,
              class: Z({ "rlzc-row-warn": v.rec.ai && !v.rec.ai.ok && !v.rec.ai.pending })
            }, [
              u("td", null, z(v.index) + z(v.rec.scope === "corridor" ? "·回廊" : ""), 1),
              u("td", null, z(v.rec.hype) + z(v.rec.hurt ? "·伤" : ""), 1),
              u("td", null, z(v.rec.heat), 1),
              u("td", null, z(v.rec.viewers), 1),
              u("td", null, z(p(v.rec)), 1),
              u("td", null, z(h(v.rec)), 1)
            ], 2))), 128))
          ])
        ])
      ])) : F("", !0)
    ]));
  }
}), Mk = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, Tk = { class: "rlzc-head" }, Ik = { class: "rlzc-tabs" }, Nk = ["onClick"], Pk = { class: "rlzc-body" }, Rk = /* @__PURE__ */ Be({
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
    return (s, r) => (b(), k("div", {
      class: "rlzc-backdrop",
      onClick: r[1] || (r[1] = $A((i) => E(A).panelOpen = !1, ["self"]))
    }, [
      u("section", Mk, [
        u("header", Tk, [
          r[2] || (r[2] = u("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          u("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: r[0] || (r[0] = (i) => E(A).panelOpen = !1)
          }, "×")
        ]),
        u("nav", Ik, [
          (b(), k(J, null, ue(t, (i) => u("button", {
            key: i.id,
            class: Z({ on: E(A).tab === i.id }),
            onClick: (o) => n(i.id)
          }, z(i.label), 11, Nk)), 64))
        ]),
        u("div", Pk, [
          E(A).tab === "system" ? (b(), We(w0, { key: 0 })) : E(A).tab === "ledger" ? (b(), We(B0, { key: 1 })) : E(A).tab === "market" ? (b(), We(gy, { key: 2 })) : E(A).tab === "settings" ? (b(), We(b1, { key: 3 })) : E(A).tab === "debug" && E(A).debugUnlocked ? (b(), We(Ek, { key: 4 })) : F("", !0)
        ])
      ])
    ]));
  }
}), Lk = /* @__PURE__ */ Be({
  __name: "App",
  setup(e) {
    return (t, n) => (b(), k(J, null, [
      E(A).settings.showBall ? (b(), We(Pv, { key: 0 })) : F("", !0),
      E(A).panelOpen ? (b(), We(Rk, { key: 1 })) : F("", !0),
      _e(Sv)
    ], 64));
  }
}), Dk = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);--ok: #4caf72;--bad: #c9534f;font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:5000;width:48px;height:48px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--muted);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball.is-active{color:var(--accent);border-color:var(--accent)}.rlzc-ball.has-ring{border-color:transparent}.rlzc-ball.is-warn{color:var(--bad)}.rlzc-ball-inf{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;pointer-events:none}.rlzc-ball-ring{position:absolute;inset:-1px;width:48px;height:48px;transform:rotate(-90deg);pointer-events:none}.rlzc-ball-ring circle{fill:none;stroke-width:3}.rlzc-ball-ring-base{stroke:var(--line)}.rlzc-ball-ring-bar{stroke:var(--accent);stroke-linecap:round;transition:stroke-dasharray .3s ease}.rlzc-ball.is-warn .rlzc-ball-ring-bar{stroke:var(--bad)}@media(prefers-reduced-motion:reduce){.rlzc-ball-ring-bar{transition:none}}.rlzc-ball-live{position:absolute;top:1px;left:1px;width:12px;height:12px;border-radius:50%;background:var(--bad);border:2px solid var(--solid);pointer-events:none}.rlzc-ball-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--accent);color:var(--bg);font-size:11px;font-weight:700;line-height:18px;text-align:center;pointer-events:none}.rlzc-entry-card{position:fixed;z-index:9000;top:calc(var(--topBarBlockSize, 40px) + 12px);right:12px;width:300px;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:12px;box-shadow:0 6px 24px #0000004d;padding:10px 12px 4px 14px}@media(max-width:323.98px){.rlzc-entry-card{left:12px;width:auto}}@media(min-width:800px){.rlzc-entry-card.beside-panel{right:476px}}.rlzc-entry-close{position:absolute;top:0;right:0;width:44px;height:44px;display:grid;place-items:center;background:none;border:0;color:var(--muted);font:inherit;font-size:14px;cursor:pointer;padding:0}.rlzc-entry-close:hover{color:var(--fg)}.rlzc-entry-kicker{display:flex;align-items:center;gap:5px;font-size:12px;color:var(--muted);padding-right:36px}.rlzc-entry-inf{width:16px;height:16px;fill:none;stroke:var(--accent);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}.rlzc-entry-title{display:flex;align-items:center;gap:8px;margin:6px 0 2px;padding-right:30px}.rlzc-entry-level{flex:0 0 auto;display:inline-grid;place-items:center;min-width:24px;height:24px;padding:0 4px;border-radius:6px;border:1px solid var(--accent);color:var(--accent);font-size:13px;font-weight:800;line-height:1}.rlzc-entry-name{font-size:16px;font-weight:700;min-width:0;overflow-wrap:anywhere}.rlzc-entry-note{font-size:12px;color:var(--muted);margin-top:2px}.rlzc-entry-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:10px;padding-top:2px;border-top:1px solid var(--line)}.rlzc-entry-live{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0;margin-left:-2px;background:none;border:0;color:var(--fg);font:inherit;font-size:13px;cursor:pointer}.rlzc-entry-live .rlzc-toggle{display:inline-block;width:44px}.rlzc-entry-live .rlzc-toggle:after{content:none}.rlzc-entry-live:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:6px}.rlzc-toggle.danger.on{background:color-mix(in srgb,var(--bad) 75%,transparent);border-color:var(--bad)}.rlzc-entry-live.on{color:var(--bad)}.rlzc-entry-actions{display:flex;gap:6px}.rlzc-entry-actions .rlzc-btn{min-height:44px;min-width:60px}.rlzc-entry-actions .rlzc-entry-go{background:var(--accent);border-color:var(--accent);font-weight:700;color:var(--bg);color:rgb(from var(--bg) r g b)}.rlzc-entry-fade-enter-active,.rlzc-entry-fade-leave-active{transition:opacity .16s ease,transform .16s ease}.rlzc-entry-fade-enter-from,.rlzc-entry-fade-leave-to{opacity:0;transform:translateY(-4px)}@media(prefers-reduced-motion:reduce){.rlzc-entry-fade-enter-active,.rlzc-entry-fade-leave-active{transition:none}.rlzc-entry-fade-enter-from,.rlzc-entry-fade-leave-to{transform:none}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:5001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-field.rlzc-field-num>span{flex:1 1 auto;min-width:0}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-check-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px}.rlzc-check-btns .rlzc-btn{min-height:44px;width:100%}.rlzc-check-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}.rlzc-check-list li{display:flex;align-items:baseline;gap:10px;font-size:12px;line-height:1.45}.rlzc-check-list li[data-kind=on]{color:#4caf72}.rlzc-check-list li[data-kind=warn]{color:#c9833a}.rlzc-check-text{flex:1;min-width:0;overflow-wrap:anywhere}.rlzc-check-time{flex:none;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px;flex:0 0 auto}.rlzc-input.rlzc-input-num{flex:0 0 auto;width:calc(4ch + 20px);margin-left:auto;text-align:right;font-variant-numeric:tabular-nums;-moz-appearance:textfield;appearance:textfield}.rlzc-input-num::-webkit-inner-spin-button,.rlzc-input-num::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.rlzc-seg.active{background:var(--accent);border-color:var(--accent);font-weight:700;color:var(--bg);color:rgb(from var(--bg) r g b)}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-toggle:after{content:"";position:absolute;inset:-10px 0}.rlzc-segsrc button:disabled{opacity:.4;cursor:not-allowed}.rlzc-segsrc button:disabled:hover{background:none;color:var(--muted)}.rlzc-live-card .rlzc-input-num{min-height:44px}.rlzc-onair{display:flex;align-items:center;gap:12px;margin:10px 0 4px;padding:10px 10px 10px 14px;border:1px solid var(--line);border-radius:10px;background:var(--soft)}.rlzc-onair.on{border-color:color-mix(in srgb,var(--bad) 45%,transparent);background:color-mix(in srgb,var(--bad) 8%,transparent)}.rlzc-onair-dot{flex:none;width:10px;height:10px;border-radius:50%;background:color-mix(in srgb,var(--muted) 55%,transparent)}.rlzc-onair.on .rlzc-onair-dot{background:var(--bad);box-shadow:0 0 0 4px color-mix(in srgb,var(--bad) 22%,transparent);animation:rlzc-onair-pulse 1.8s ease-in-out infinite}@keyframes rlzc-onair-pulse{50%{box-shadow:0 0 0 7px color-mix(in srgb,var(--bad) 8%,transparent)}}@media(prefers-reduced-motion:reduce){.rlzc-onair.on .rlzc-onair-dot{animation:none}}.rlzc-onair-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-onair-text strong{font-size:14px;font-weight:600;color:var(--fg)}.rlzc-onair.on .rlzc-onair-text strong{color:var(--bad)}.rlzc-onair-text small{font-size:12px;color:var(--muted);overflow-wrap:anywhere}.rlzc-onair-btn{flex:none;min-width:76px;min-height:44px;padding:0 16px;border-radius:22px;font:inherit;font-weight:600;cursor:pointer;border:1px solid var(--bad);background:var(--bad);color:#fff}.rlzc-onair-btn.stop{background:none;color:var(--bad)}.rlzc-onair-btn:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-onair-lock{flex:none;display:inline-flex;align-items:center;gap:5px;min-height:44px;padding:0 12px;font-size:12px;color:var(--muted);border:1px dashed var(--line);border-radius:22px}.rlzc-option-row-stack{flex-direction:column;align-items:stretch;gap:0}.rlzc-option-row-stack .rlzc-segsrc{margin:6px 0 2px}.rlzc-option-row-stack .rlzc-hint{margin:2px 0 0}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-right{flex:0 0 auto;display:flex;flex-direction:column;align-items:flex-end;gap:2px}.rlzc-ledger-item-after{font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-status{flex:0 0 auto;font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-collapse-head .rlzc-dot{font-size:12px}.rlzc-market-tabs button{flex:1 1 0;min-height:44px}.rlzc-mk-status{font-size:14px}.rlzc-mk-q{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;font-weight:600;overflow-wrap:anywhere}.rlzc-mk-tag{flex:0 0 auto;font-size:11px;font-weight:600;color:var(--accent);padding:1px 6px;border:1px solid color-mix(in srgb,var(--accent) 60%,transparent);border-radius:4px}.rlzc-mk-opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.rlzc-mk-opt{display:flex;align-items:center;justify-content:space-between;gap:6px;min-height:44px;padding:6px 10px;font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 60%,transparent);border:1px solid var(--line);border-radius:8px;cursor:pointer;text-align:left}.rlzc-mk-opt b{font-weight:600;font-variant-numeric:tabular-nums;color:var(--muted)}.rlzc-mk-opt.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 16%,transparent)}.rlzc-mk-opt.on b{color:var(--fg)}.rlzc-mk-opt:disabled{opacity:.55;cursor:not-allowed}.rlzc-mk-bet{margin-top:8px}.rlzc-mk-bet .rlzc-input,.rlzc-mk-bet .rlzc-btn{min-height:44px}.rlzc-mk-bet .rlzc-btn{flex:0 0 auto;min-width:64px}.rlzc-mk-red{color:var(--bad);font-size:12px;margin:2px 0}.rlzc-mk-mine{list-style:none;margin:8px 0 0;padding:6px 0 0;border-top:1px dashed var(--line);font-size:12px;color:var(--muted)}.rlzc-mk-mine li{padding:2px 0;font-variant-numeric:tabular-nums}.rlzc-tk-list{list-style:none;margin:0;padding:0}.rlzc-tk{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:52px;padding:6px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-tk:last-child{border-bottom:none}.rlzc-tk-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-tk-title{font-size:13px;overflow-wrap:anywhere}.rlzc-tk-left small{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-stamp{flex:0 0 40px;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:16px;border:2px solid currentColor;transform:rotate(-14deg);box-shadow:inset 0 0 0 2px color-mix(in srgb,currentColor 18%,transparent)}.rlzc-stamp.win{color:var(--ok)}.rlzc-stamp.lose{color:var(--bad)}.rlzc-stamp.refund{color:var(--muted)}.rlzc-stamp.pending{color:var(--muted);border-style:dashed;border-width:1px;box-shadow:none;transform:none;font-weight:600;font-size:14px}.rlzc-cs-tables{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-cs-table{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-height:76px;text-align:left;font:inherit;color:var(--fg);cursor:pointer}.rlzc-cs-table b{font-size:15px}.rlzc-cs-table small{font-size:12px;color:var(--muted);line-height:1.45}.rlzc-cs-table.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent)}.rlzc-cs-play h4{margin-bottom:4px}.rlzc-cs-seg{margin:6px 0}.rlzc-cs-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:4px;margin:6px 0}.rlzc-cs-grid.door{grid-template-columns:repeat(5,minmax(0,1fr))}.rlzc-cs-grid button{min-height:44px;padding:0 2px;font:inherit;font-size:13px;color:var(--muted);cursor:pointer;background:none;border:1px solid var(--line);border-radius:8px;font-variant-numeric:tabular-nums}.rlzc-cs-grid button.on{color:var(--fg);border-color:var(--accent);background:color-mix(in srgb,var(--accent) 15%,transparent);font-weight:600}.rlzc-cs-face{margin-top:10px;min-height:52px;display:grid;place-items:center;font-size:26px;font-weight:800;font-variant-numeric:tabular-nums;border:1px dashed var(--line);border-radius:10px}.rlzc-cs-face.rolling{color:var(--muted)}.rlzc-cs-result{margin:8px 0 0;font-weight:600;font-variant-numeric:tabular-nums}.rlzc-cs-result.win{color:var(--ok)}.rlzc-cs-result.lose{color:var(--bad)}';
function Fk(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function cu(e, t, n) {
  const s = me().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function jk() {
  const e = Fk();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await cu("/api/extensions/version", e, t);
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
async function Ok(e) {
  const t = await cu("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const Bk = "回廊种菜系统", Vk = 100, Uk = [], Hk = [], Wk = "dist/index.js", Gk = "xiaxiii", Kk = "1.1.3", qk = "https://github.com/xiaxiii/M-bius-strip", Yk = !0, Jk = "rlzcInterceptor", zl = {
  display_name: Bk,
  loading_order: Vk,
  requires: Uk,
  optional: Hk,
  js: Wk,
  author: Gk,
  version: Kk,
  homePageUrl: qk,
  auto_update: Yk,
  generate_interceptor: Jk
}, Zk = {
  /** 有新版本、还没更新时：打开酒馆弹窗与扩展设置里的更新状态 */
  有新版本: [
    "喂喂喂，有新版本啦～（现在是 {版本}）",
    "EC 偷偷改咗少少嘢，bb 嚟更新下啦～（现在是 {版本}）",
    "bb呀，EC叫你嚟更新喇喂～（现在是 {版本}）",
    "EC 又给回廊添了点新东西，bb 快来看看！（现在是 {版本}）",
    "叩叩叩，新版本到啦～（现在是 {版本}）"
  ]
};
function Qk(e, t = {}, n = Math.random) {
  const s = Zk[e];
  return (s[Math.floor(n() * s.length)] ?? s[0] ?? "").replace(/\{([^{}]+)\}/g, (i, o) => t[o] ?? i);
}
const _l = "rlzc-host", $l = "rlzc-menu-btn", Sl = "rlzc-settings-drawer";
function Xk() {
  if (document.getElementById(_l)) return;
  const e = document.createElement("div");
  e.id = _l, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Dk, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), EA(Lk).mount(s), uu(), du();
}
function uu(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => uu(e + 1), 500);
    return;
  }
  if (document.getElementById($l)) return;
  const n = document.createElement("div");
  n.id = $l, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const r = document.createElement("span");
  r.textContent = "回廊种菜系统", n.append(s, r), n.addEventListener("click", () => {
    A.panelOpen = !A.panelOpen;
  }), t.appendChild(n);
}
function du(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => du(e + 1), 500);
    return;
  }
  if (document.getElementById(Sl)) return;
  const n = (f, m = "", v = "") => {
    const N = document.createElement(f);
    return m && (N.className = m), v && (N.textContent = v), N;
  }, s = n("div");
  s.id = Sl;
  const r = n("div", "inline-drawer"), i = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), i.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const a = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => A.panelOpen = !0);
  const d = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  d.addEventListener("click", () => {
    A.settings.ball = { x: null, y: null }, A.settings.showBall = !0, ke();
  });
  const p = n("label", "checkbox_label"), h = document.createElement("input");
  h.type = "checkbox", h.addEventListener("change", () => {
    A.settings.showBall = h.checked, ke();
  }), p.append(h, n("span", "", "显示悬浮球")), cr(() => A.settings.showBall, (f) => h.checked = f, { immediate: !0 });
  const x = n("div", "flex-container");
  x.append(c, d);
  const _ = n("div", "flex-container alignitemscenter"), w = n("small", "rlzc-update-status", "正在检查更新…"), L = n("div", "menu_button menu_button_icon", "检查更新"), U = n("div", "menu_button menu_button_icon", "立即更新"), D = n("div", "menu_button menu_button_icon", "刷新页面");
  U.style.display = "none", D.style.display = "none", _.append(w, L, U, D);
  let C = null, M = !1, ee = "";
  const te = () => ee || (ee = Qk("有新版本", { 版本: zl.version })), Q = async (f = !1) => {
    if (!M) {
      M = !0, w.textContent = "正在检查更新…", U.style.display = "none";
      try {
        C = await jk();
        const m = `（${zl.version}）`;
        C.isGit ? C.isUpToDate ? w.textContent = `已是最新版本${m}` : (w.textContent = te(), U.style.display = "") : w.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = C.isGit && !C.isUpToDate ? "" : "none";
      } catch (m) {
        w.textContent = `检查更新失败：${m.message}`;
        return;
      } finally {
        M = !1;
      }
      f && C?.isGit && !C.isUpToDate && S();
    }
  }, re = async () => {
    if (!C || M) return !1;
    M = !0, w.textContent = "正在更新…", U.style.display = "none";
    try {
      return await Ok(C), l.style.display = "none", w.textContent = "更新完成，刷新页面后生效。", D.style.display = "", !0;
    } catch (f) {
      throw w.textContent = `更新失败：${f.message}`, U.style.display = "", f;
    } finally {
      M = !1;
    }
  }, S = () => Yo(te(), "立即更新", () => {
    re().then((f) => {
      f && Yo("更新完成，刷新页面后生效。", "刷新页面", () => location.reload());
    }).catch((f) => Se("error", `更新失败：${f.message}`));
  });
  L.addEventListener("click", () => void Q()), U.addEventListener("click", () => void re().catch(() => {
  })), D.addEventListener("click", () => location.reload()), setTimeout(() => void Q(!0), 3e3), a.append(x, p, _, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), r.append(i, a), s.append(r), t.append(s);
}
globalThis.rlzcInterceptor = Px;
function Zr() {
  bx(), gn("MESSAGE_RECEIVED", (e, t) => Yx(Number(e), t)), gn("MESSAGE_DELETED", () => Kr()), gn("MESSAGE_SWIPED", (e) => Fx(Number(e))), gn("MESSAGE_EDITED", (e) => Kr(Number(e))), gn("MESSAGE_UPDATED", (e) => Kr(Number(e))), gn("CHAT_CHANGED", () => vl()), Nn("CHARACTER_MESSAGE_RENDERED", (e) => Is(Number(e), !0)), Nn("MESSAGE_SWIPED", (e) => Is(Number(e), !0)), Nn("MESSAGE_UPDATED", (e) => Is(Number(e), !0)), Nn("MORE_MESSAGES_LOADED", () => Xs(!1, !0)), Nn("CHAT_LOADED", () => Xs(!1, !0)), Xk(), Tg({ view: to, toggle: nu }), vl(), console.log("[rlzc] 回廊种菜系统已加载", A.settings);
}
const Cl = window.jQuery;
typeof Cl == "function" ? Cl(() => Zr()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Zr) : Zr();
